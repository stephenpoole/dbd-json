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

/***/ "./src/lib/locales/th.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/th.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_th_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/th/items.json */ "./src/data.compiled/locales/th/items.json");
/* harmony import */ var _data_compiled_locales_th_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/th/killerAddons.json */ "./src/data.compiled/locales/th/killerAddons.json");
/* harmony import */ var _data_compiled_locales_th_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/th/killerOfferings.json */ "./src/data.compiled/locales/th/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_th_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/th/killerPerks.json */ "./src/data.compiled/locales/th/killerPerks.json");
/* harmony import */ var _data_compiled_locales_th_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/th/killers.json */ "./src/data.compiled/locales/th/killers.json");
/* harmony import */ var _data_compiled_locales_th_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/th/powers.json */ "./src/data.compiled/locales/th/powers.json");
/* harmony import */ var _data_compiled_locales_th_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/th/sharedOfferings.json */ "./src/data.compiled/locales/th/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_th_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/th/survivorAddons.json */ "./src/data.compiled/locales/th/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_th_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/th/survivorOfferings.json */ "./src/data.compiled/locales/th/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_th_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/th/survivorPerks.json */ "./src/data.compiled/locales/th/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_th_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/th/survivors.json */ "./src/data.compiled/locales/th/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.Taiwanese;
var data = {
  items: _data_compiled_locales_th_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_th_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_th_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_th_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_th_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_th_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_th_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_th_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_th_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_th_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_th_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/th/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/th/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"ระเบิดขนาดเล็กเรียงเป็นแถวพันด้วยกรุกระดาษหนัก ระเบิดออกเสียงดังปังและแสงจ้า สามารถใช้เป็นสิ่งรบกวน เช่น อุปกรณ์ทำให้ตาบอดหรือเอาไว้เฉลิมฉลอง<br><li><b>1 ชาร์จ</b></li>","name":"ประทัดไฟจีน","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"ไฟฉายมาตรฐาน ใช้ส่องเส้นทางกลางความมืด<br><li>ใช้งานได้ <b>8 วินาที</b></li>","name":"ไฟฉาย","flavor":"\\"แบตเตอรี่ส่วนใหญ่หมดไปกับเจ้าของคนก่อน\\"","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"ไฟฉายติดฝาเลนส์พิเศษที่ทำให้ลำแสงเป็นสีส้มและมีผีน้อยในลำแสง ใช้งานได้ <br><li><b>8 วินาที</b> </li><li>ผีที่เป็นมิตรในชีวิตของคุณ<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ลูกไฟปิศาจ","flavor":"\\"ทริกออร์ทรีตให้สนุก!\\"","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"ไฟฉายพกพาที่มีด้านจับพอดีมือ เทคโนโลยีประสิทธิภาพสูงทำให้ไฟสว่างแต่ไม่กินพลังงาน<br><li>ใช้งานได้ <b>8 วินาที</b></li><li>การใช้ชาร์จของไฟฉาย<b>ลดลงเล็กน้อย</b></li><li>ความแม่นยำ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ไฟฉายกีฬา","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"ไฟฉายทนทานแต่หนักอึ้ง ซึ่งเก็บพลังงานได้เป็นจำนวนมาก<br><li>ใช้งานได้ <b>12 วินาที</b></li><li>ความแม่นยำ<b>ลดลงเล็กน้อย</b></li><li>ความสว่างของลำแสง<b>เพิ่มขึ้นปานกลาง</b></li><li>ระยะเวลาในการตาบอด<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ไฟฉายอเนกประสงค์","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"กุญแจที่งอและทื่อซึ่งครั้งหนึ่งเคยมีพลังที่ยิ่งใหญ่ กุญแจผุพังไม่สามารถใช้พลังของตัวเองได้ วัตถุต่างๆ สามารถใช้ติดกับห่วงกุญแจ เพื่อใช้พลังต่างๆ ของกุญแจผุพังได้ <br><li>ใช้งานได้ <b>10 วินาที</b></li>","name":"กุญแจผุพัง","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"กุญแจทื่อๆ หักงอที่ครั้งหนึ่งเคยก่อกุมพลังอำนาจอันมหาศาล กุญแจไม่สามารถใช้พลังเองได้ วัตถุต่างๆ สามารถใช้ติดกับห่วงกุญแจเพื่อใช้พลังที่เหลืออยู่ของกุญแจทื่อๆ ได้<br><li>ใช้งานได้ <b>5 วินาที</b></li><li>สามารถใช้เปิดแม่กุญแจดำมืดได้</li>","name":"กุญแจทื่อๆ","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"กุญแจที่สกปรกและบิดเบี้ยว สั่นสะเทือนด้วยพลังงานชั่วร้าย กุญแจไม่สามารถใช้พลังของตัวเองได้ วัตถุต่างๆ สามารถใช้ติดกับห่วงกุญแจ เพื่อใช้พลังต่างๆ ของกุญแจผีได้ <br><li>ใช้งานได้ <b>30 วินาที</b></li><li>สามารถใช้เปิดท่อได้</li>","name":"กุญแจผี","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"กระดาษหนังเก่าๆ มันถูกม้วนและปิดด้วยสายหนังไม่มีสี การใช้แผนที่จะช่วยปลดล็อคความสามารถในการอ่านออร่า ซึ่งจะค่อยๆ หมดไป ออร่าของเครื่องปั่นไฟที่คุณเคยเจอแล้ว จะเผยให้คุณเห็นตราบใดที่แผนที่ยังมีชาร์จเหลืออยู่<br><li>ใช้งานได้นาน <b>20 วินาที</b></li><li>เริ่มเกมด้วยการแกะรอยเครื่องปั่นไฟ <b>1</b> เครื่อง</li><li>ปลดล็อคความสามารถในการแกะรอยเครื่องปั่นไฟที่อยู่ในระยะ <b>8 เมตร</b></li>","name":"แผนที่","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"กระดาษหนังทำจากแผ่นหนังสดดูแปลกตา เลือดตามขอบยังไม่แห้งสนิท ม้วนแล้วปิดผนึกด้วยเส้นเชือกหลากสี การถือแผนที่แล้วใช้นำทางจะปลดล็อคความสามารถในการอ่านออร่า โดยค่อยๆ เผาแผนที่ไปในเวลาเดียวกัน คุณจะมองเห็นวัตถุมีออร่าที่เคยสัมผัสมาก่อนเป็นเวลานานตราบเท่าที่แผนที่ยังมีชาร์จเหลืออยู่ <br><li><b>ใช้งานได้ 20 วินาที</b></li><li>เริ่มต้นเกมด้วย<b>วัตถุ 3 อย่าง</b>ที่มีการแกะรอยโดยอัตโนมัติ</li><li>ปลดล็อคความสามารถในการ<b>แกะรอยจุดมุ่งหมาย</b>ที่อยู่ภายในระยะ <b>8 เมตร</b> </li><li>ปลดล็อคความสามารถในการ<b>แกะรอยแม่กุญแจดำมืด</b>ที่อยู่ในระยะ <b>8 เมตร</b></li><li>ปลดล็อคความสามารถในการ<b>แกะรอยสิ่งของของฆาตกร</b>ที่อยู่ภายในระยะ <b>8 เมตร</b></li><li>ปลดล็อคความสามารถในการ<b>แกะรอยประตูทางออก</b>ที่อยู่ภายในระยะ <b>8 เมตร</b></li>","name":"แผนที่สีรุ้ง","flavor":"\\"มันทำให้ฉันท้อแท้ ความรู้ที่พูดไม่ได้และความพยายามที่ยากเย็นแสนเข็ญแต่ก็ยังไม่เห็นผล ไม่มีอะไรที่จะใช้หนีจากฝันร้ายในครั้งนี้ได้เลย\\" -บันทึกของวีโก้","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"ชุดปฐมพยาบาลเบื้องต้นที่ช่วยชีวิตได้ในกรณีฉุกเฉิน ถึงแม้จะยังขาดอุปกรณ์ไปบางส่วนก็ตาม<br><li><b>16 ชาร์จ</b></li><li>ความเร็วในการรักษาผู้อื่นของคุณ<b>เพิ่มขึ้นปานกลาง</b></li><li>ปลดล็อคความสามารถในการ<b>รักษาตัวเอง</b></li>","name":"ชุดปฐมพยาบาลในค่าย","flavor":"\\"แทบจะไม่มีอุปกรณ์ทำแผลดีๆ เลยด้วยซ้ำ\\"","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"กล่องข้าวพลาสติกแปะสติกเกอร์ฮาโลวีนเรืองแสงที่ใส่เครื่องมือปฐมพยาบาลไว้<br><li><b>24 ชาร์จ</b></li><li>ความเร็วในการรักษาผู้อื่นของคุณ<b>เพิ่มขึ้นอย่างมาก</b></li><li>ปลดล็อคการ<b>รักษาตัวเอง</b></li><li>ทำให้<b>มองเห็นตัวคุณได้ชัดเจนขึ้นอย่างมาก</b></li>","name":"กล่องข้าวคืนก่อนฮาโลวีน","flavor":"\\"ปลอดภัยไว้ก่อน! ดูให้ดีว่ามีคนมองเห็นคุณตอนทริกออร์ทรีต\\"","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"ชุดปฐมพยาบาลมาตรฐานที่มีอุปกรณ์รักษาอาการบาดเจ็บทั่วไปจนถึงบาดเจ็บสาหัส<br><li><b>24 ชาร์จ</b></li><li>ความเร็วในการรักษาผู้อื่นของคุณ<b>เพิ่มขึ้นอย่างมาก</b></li><li>ปลดล็อคความสามารถใน<b>การรักษาตัวเอง</b></li>","name":"ชุดปฐมพยาบาล","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"กล่องพยาบาลอันทนทานและมีระเบียบที่มาพร้อมกับอุปกรณ์ฉุกเฉินคุณภาพสูง<br><li><b>16 ชาร์จ</b></li><li>ความเร็วในการรักษาผู้อื่นของคุณ<b>เพิ่มขึ้นมหาศาล</b></li><li>ความเร็วในการรักษาตัวเองของคุณ<b>เพิ่มขึ้นมหาศาล</b></li><li>ปลดล็อคความสามารถในการ<b>รักษาตัวเอง</b></li>","name":"กล่องพยาบาลฉุกเฉิน","flavor":"\\"มีทางรักษาสำหรับแทบทุกสิ่ง... ยกเว้นสิ่งนี้\\"","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"กล่องเหล็กขนาดใหญ่ที่มีอุปกรณ์ทางการแพทย์ใช้ช่วยเหลือฉุกเฉินในจุดห่างไกลและเข้าถึงยาก<br><li><b>32 ชาร์จ</b></li><li>ความเร็วในการรักษาผู้อื่นของคุณ<b>เพิ่มขึ้นมหาศาล</b> </li><li>โซนความสำเร็จของการตรวจสอบทักษะ<b>เพิ่มขึ้นปานกลาง</b></li><li>โซนโบนัสของการตรวจสอบทักษะ<b>เพิ่มขึ้นปานกลาง</b></li><li>ปลดล็อคความสามารถในการ<b>รักษาตัวเอง</b></li>","name":"กล่องพยาบาลเจ้าหน้าที่อุทยาน","flavor":"\\"มีฉลากขนาดติดอยู่ด้านหลังกล่อง: VK.ID-3994723\\"","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"กล่องโลหะประกอบไปด้วยเครื่องมือพื้นฐานที่พร้อมชำรุดได้ทุกเมื่อ ใช้ซ่อมแซมหรือทำลายชิ้นส่วนประกอบของกลไกต่างๆ โดยไม่ต้องผ่านการฝึกฝนมาก่อน<br><li><b>16 ชาร์จ</b></li><li>ความเร็วในการซ่อมแซม<b>เพิ่มขึ้นปานกลาง</b></li><li>เขตความสำเร็จของการตรวจสอบทักษะ<b>ลดลงเล็กน้อย</b></li><li>ปลดล็อคความสามารถในการ<b>ทำลาย</b></li>","name":"เครื่องมือเสื่อมสภาพ","flavor":"\\"ของพวกนี้เนี่ยนะเครื่องมือ?... เอาจริงเหรอ?\\"","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"กล่องโลหะประกอบไปด้วยเครื่องมือพื้นฐาน ใช้ซ่อมแซมหรือทำลายชิ้นส่วนประกอบของกลไกต่างๆ โดยไม่ต้องผ่านการฝึกใดๆ<br><li><b>20</b> ชาร์จ</li><li>ความเร็วในการซ่อมแซม<b>เพิ่มขึ้นปานกลาง</b></li><li>ปลดล็อคความสามารถในการ<b>ทำลาย</b></li><li>ความเร็วในการทำลาย<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"กล่องเครื่องมือ","flavor":"\\"ไม่รู้ว่าเครื่องมือเหล่านี้มาจากไหน พวกเราเอามาหรือมันเป็นของอสูรร้ายกันนะ?\\"","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"กล่องโลหะที่ประกอบไปด้วยเครื่องมือเฉพาะทางใช้ในงานวิศวกรรม ใช้ซ่อมแซมหรือทำลายชิ้นส่วนประกอบของกลไกต่างๆ โดยไม่ต้องผ่านการฝึกใดๆ<br><li><b>16 ชาร์จ</b></li><li>ความเร็วในการซ่อมแซม<b>เพิ่มขึ้นอย่างมาก</b></li><li>ปลดล็อคความสามารถในการ<b>ทำลาย</b></li><li>ความเร็วในการทำลาย<b>ลดลงเล็กน้อย</b></li>","name":"กล่องเครื่องมือช่างเครื่อง","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"กล่องเหล็กขนาดใหญ่ที่มีเครื่องมือพื้นฐานและชิ้นส่วนกลไกเพิ่มเติม ใช้ซ่อมแซมหรือทำลายชิ้นส่วนประกอบของกลไกต่าง ๆ โดยไม่ต้องผ่านการฝึกใดๆ<br><li><b>32 ชาร์จ</b></li><li>ความเร็วในการซ่อมแซม<b>เพิ่มขึ้นปานกลาง</b></li><li>ปลดล็อคความสามารถในการ<b>ทำลาย</b></li>","name":"กล่องเครื่องมือเนื้อที่กว้าง","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"กล่องโลหะที่ประกอบไปด้วยเครื่องมือเฉพาะทางใช้ในงานวิศวกรรมขั้นสูง เครื่องมือส่วนใหญ่สามารถใช้ได้โดยผู้เริ่มฝึกหัดเพื่อใช้ซ่อมแซมหรือทำลายชิ้นส่วนประกอบของกลไกต่างๆ ได้อย่างรวดเร็ว<br><li><b>16 ชาร์จ</b></li><li>ความเร็วในการซ่อมแซม<b>เพิ่มขึ้นมหาศาล</b></li><li>ปลดล็อคความสามารถในการ<b>ทำลาย</b></li><li>ความเร็วในการทำลาย<b>เพิ่มขึ้นปานกลาง</b></li>","name":"กล่องเครื่องมือวิศวกร","flavor":"\\"ฉันได้สร้างเครื่องมือที่ไม่เหมือนใครและได้แต่ยืนตะลึงเมื่อมันถูกขโมยไป ของพวกนี้เป็นเพียงของปลอมที่สร้างโดยสายหมอก\\" –สมุดบันทึกของวีโก้","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"กล่องเหล็กที่มีเลื่อยและด้ามยึดจับหลายขนาดแต่ยังมีเครื่องมืออื่นๆ ถึงแม้ว่าของในกล่องเครื่องมือมีไว้เพื่อทำลายล้าง แต่ก็สามารถใช้ซ่อมแซมส่วนประกอบทางเครื่องยนต์ได้หลากหลายประเภทเช่นกัน<br><li><b>24 ชาร์จ</b></li><li>ความเร็วในการซ่อมแซม<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ปลดล็อคความสามารถในการ<b>ทำลาย</b></li><li>ความเร็วในการทำลาย<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"กล่องเครื่องมือของอเล็กซ์","flavor":"\\"เครื่องมือส่วนใหญ่ระบุว่า \\"เป็นของอเล็กซ์\\"\\"","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"ของตกแต่งโต๊ะอาหารขนาดเล็กระเบิดได้ง่าย ระเบิดเสียงดังกึกก้องและส่องแสงจ้า ใช้เป็นสิ่งหันเหความสนใจ ใช้เป็นอุปกรณ์ทำให้ตาบอดหรือใช้เฉลิมฉลองก็ยังได้<br><li><b>1 ชาร์จ</b></li>","name":"ประทัดเริ่มงานปาร์ตี้ฤดูหนาว","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"ของตกแต่งโต๊ะอาหารขนาดเล็กระเบิดได้ง่าย ระเบิดเสียงดังกึกก้องและส่องแสงจ้า ใช้เป็นสิ่งหันเหความสนใจ ใช้เป็นอุปกรณ์ทำให้ตาบอดหรือใช้เฉลิมฉลองก็ยังได้<br><li><b>1 ชาร์จ</b></li>","name":"ประทัดเริ่มงานปาร์ตี้ฉลองสามปี","flavor":"\\"สุขสันต์วันครบรอบวันเกิด! แด่ช่วงเวลาสามปีที่เราอยู่ด้วยกัน!\\"<br>-ทีมงาน Dead by Daylight","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"กล่องพยาบาลงานฉลองที่ระเบิดกระดาษสีชิ้นเล็กๆ ออกมารักษาผู้รอดชีวิต เซอร์ไพรส์!<br><li><b>ชาร์จ 24 ครั้ง</b></li><li>ความเร็วในการรักษาคนอื่น<b>เพิ่มขึ้นอย่างมาก</b></li><li>ปลดล็อค<b>การรักษาตัวเอง</b></li>","name":"กล่องพยาบาลครบรอบปี","flavor":"\\"สุขสันต์วันครบรอบ! แด่ครั้งต่อๆ ไป!\\"<br>- ทีมงาน Dead by Daylight","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"ไฟฉายงานฉลองที่ระเบิดกระดาษสีชิ้นเล็กๆ ออกมาทำให้ฆาตกรมองไม่เห็น เซอร์ไพรส์!<br><li>ใช้ได้ <b>8 วินาที</b></li>","name":"ไฟฉายครบรอบปี","flavor":"\\"สุขสันต์วันครบรอบ! แด่ครั้งต่อๆ ไป!\\"<br>- ทีมงาน Dead by Daylight","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/th/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/th/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"ถุงมือหนังบุนวมนิรภัย<br><li>ความเร็วในการวางกับดักหมี<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ถุงมือนักวางกับดัก","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"สปริงขดใหญ่และหนักซึ่งช่วยเพิ่มความแข็งแรงให้กับแรงหนีบของกับดักหมีขึ้นเป็นอย่างดี<br><li>เวลาที่ใช้ในการปลดกับดักหมี<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ขดสปริงทนทาน","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"ชุดอะไหล่สำหรับกับดักหมี เปลี่ยนจากระบบสปริงคู่แบบทั่วไปด้วยสปริงแบบ 4 ขด ช่วยเพิ่มความแข็งแรงให้กับแรงหนีบของกับดักขึ้นอย่างมาก<br><li>เวลาที่ใช้ในการปลดกับดักหมี<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ชุดสปริง 4 ขด","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"ขี้เถ้าไม้ เมื่อนำมาต้มจะสามารถใช้ย้อมสีกับดักหมีและทำให้สังเกตเห็นยากยิ่งขึ้นได้<br><li>ทำให้กับดักหมีทุกอัน<b>ดูคลุมเครือขึ้นปานกลาง</b></li>","name":"สีย้อมไม้ล็อกวูด","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"ฟันกับดักหมีสำรองเหล่านี้มีความคมราวกับมีด ซึ่งจะก่อให้เกิดแผลเปิดอย่างเลวร้ายขึ้นเมื่อทำงาน<br><li>ผู้รอดชีวิตที่ติดอยู่ในกับดักหมีจะติดเอฟเฟกต์สถานะ<b>เลือดท่วม</b>จนกว่าจะได้รับการรักษา</li>","name":"ฟันกับดักใบเลื่อย","flavor":"\\"มันดมกลิ่นและตามรอยเลือดราวกับเป็นนักล่า\\"","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"เครื่องมือธรรมดาที่ออกแบบมาเพื่อให้ติดตั้งกับดักหมีได้อย่างรวดเร็วและปลอดภัย<br><li>ความเร็วในการวางกับดักหมี<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เครื่องวางกับดัก","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"กระเป๋าหนังคาดเอว ใหญ่และทนทานต่อการพกอุปกรณ์การล่า<br><li>เริ่มเกมด้วยกับดักหมี<b>เพิ่มเติม 1 อัน</b></li><li>เพิ่มจำนวนกับดักหมีที่ถือได้<b>เพิ่มเติม 2 อัน</b></li>","name":"กระเป๋านักวางกับดัก","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"ซี่ฟันของกับดักหมีเหล่านี้เต็มไปด้วยสนิมเขรอะที่ทำให้อาการบาดเจ็บรักษายากเป็นพิเศษ<br><li>ผู้รอดชีวิตที่ติดอยู่ในกับดักหมีจะติดเอฟเฟกต์สถานะ<b>เหวอะหวะ</b>","name":"ฟันกับดักสนิมเขรอะ","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"ขดลวดสำรองที่ทำให้กับดักหมีทำงานต่อไปเมื่อตัวหลักใช้งานไม่ได้<br><li>เวลาที่ใช้ในการปลดกับดักหมี<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ขดสปริงสำรอง","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"สารสีดำด้านเหนียวคล้ายน้ำมันดิน เมื่อใช้กับกับดักหมีจะทำให้สังเกตเห็นได้ยากยิ่งขึ้น<br><li>ทำให้กับดักหมีทุกอัน<b>ดูคลุมเครือขึ้นอย่างมาก</b></li>","name":"ขวดน้ำมันดิน","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"ก้อนขี้ผึ้งใช้สำหรับลดการเสียดสีและช่วยให้ชิ้นส่วนเครื่องจักรเคลื่อนไหวได้ดีขึ้น<br><li>โอกาสในการหนีออกจากกับดักหมี<b>ลดลงปานกลาง</b></li>","name":"ก้อนขี้ผึ้ง","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"น้ำมันหล่อลื่นทำให้การจัดการกับสปริงของกับดักอันตรายยิ่งขึ้น<br><li>เวลาที่ใช้ในการปลดกับดักหมี<b>เพิ่มขึ้นมหาศาล</b></li>","name":"ขดสปริงลื่นมัน","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"ชุดเครื่องมือพิเศษที่ใช้สำหรับรัดกับดักหมีให้แน่นหนา เพื่อรับรองผลสำเร็จในการใช้งาน<br><li>ความเร็วในการวางกับดักหมี<b>เพิ่มขึ้นมหาศาล</b></li><li>เวลาที่ใช้ในการช่วยและหนีออกจากกับดักหมี<b>เพิ่มขึ้นอย่างมาก</b></li><li>โอกาสในการหนีออกจากกับดักหมี<b>ลดลงปานกลาง</b></li>","name":"เครื่องมือรัดแน่น","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"เศษหนังทุกชนิดเย็บติดกันเป็นกระเป๋าขนาดใหญ่<br><li>เริ่มเกมด้วยกับดักหมี<b>เพิ่มเติม 2 อัน</b></li><li>เพิ่มจำนวนกับดักหมีที่ถือได้<b>เพิ่มเติม 2 อัน</b></li>","name":"กระเป๋าเย็บปะ","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"ของเหลวอันน่าสยดสยองทั้งลื่นทั้งเหนียวเหนอะหนะนี้ทำให้การจัดการกับสปริงของกับดักอันตรายยิ่งขึ้น<br><li>เมื่อกับดักถูกทำลายหรือถูกปลดโดยผู้รอดชีวิตที่<b>แข็งแรงดี</b> ขดสปริงเปื้อนเลือดก็จะส่งผลให้ผู้รอดชีวิต<b>ได้รับบาดเจ็บ</b></li><li>เวลาที่ใช้ในการปลดกับดักหมี<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ขดสปริงเปื้อนเลือด","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"กับดักที่ลับด้วยหินประกายอันบอบบางนี้ดูเหมือนจะมีชีวิตขึ้นมาเอง<br><li>ทุกๆ <b>30 วินาที</b> กับดักหมีที่งับอยู่หนึ่งตัวจะสุ่มติดตั้งขึ้นมา</li>","name":"หินสีรุ้ง","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"สัญลักษณ์ลาโอเคเยที่แสดงถึงความเจ้าเล่ห์ เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดเขม่าลงบนตัวกระดิ่ง<br><li>เดอะเรธจะ<b>เลิกเร้นกายอย่างสิ้นเชิง</b>เมื่อทำลายแท่นไม้หรือทำให้เครื่องปั่นไฟเสียหายในขณะกำลังเร้นกายอยู่</li>","name":"\\"อสรพิษ\\" - เขม่า","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"สัญลักษณ์วอนนักที่แสดงถึงนักสะกดรอยผู้ไร้เทียมทาน เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดเขม่าลงบนตัวกระดิ่ง<br><li>ในขณะเร้นกายจะมองเห็นรอยเลือดสดๆ ได้ชัดเจนกว่าปกติ<b>อย่างมาก</b></li>","name":"\\"หมาล่าเนื้อ\\" - เขม่า","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"สัญลักษณ์คุกเวมูที่แสดงถึงโลกแห่งวิญญาณ เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดเขม่าลงบนตัวกระดิ่ง<br><li>หลังจากปรากฏตัว รัศมีความน่ากลัวของเดอะเรธและรอยเปื้อนสีแดงจะยังคงหายไปเป็นเวลา <b>6</b> วินาที</li>","name":"\\"เดอะโกสต์เฟส\\" - เขม่า","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"สัญลักษณ์คุนวูลจูที่แสดงถึงความหวาดกลัว เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดเขม่าลงบนตัวกระดิ่ง<br><li>รัศมีความน่ากลัวของเดอะเรธ<b>จะไม่หายไป</b>ในขณะเร้นกาย</li><li>แต้มเลือดที่ได้รับจากการสะกดรอยตามและการโจมตีแบบไม่ทันตั้งตัวจะเพิ่มขึ้น 100%</li>","name":"\\"สัตว์ร้าย\\" - เขม่า","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"ลุกตุ้มกระดิ่งทำจากชิ้นส่วนกระดูกที่ผิวขัดละเอียด ทำให้เสียงกระดิ่งครวญดังก้องและบิดเบี้ยวอย่างน่าฉงน<li>ผู้รอดชีวิตจะไม่สามารถแยกแยะ<b>ระยะห่าง</b>หรือ<b>ทิศทาง</b>ของกระดิ่งครวญได้อีกต่อไป</li>","name":"ลูกตุ้มกระดูก","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"สัญลักษณ์เครตินที่แสดงถึงการจากไปอย่างรวดเร็ว เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดโคลนลงบนตัวกระดิ่ง<br><li>ระยะเวลาการหายตัวของเดอะเรธลดลง<b>อย่างมาก</b></li>","name":"\\"บลิงค์\\" - โคลน","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"สัญลักษณ์โอฮุเว-โอนมเนียอันแสดงถึงพายุที่ถาโถม เป็นสัญลักษณ์ที่ประทับด้วยเลือดลงบนตัวกระดิ่ง<li>ความเร็วเคลื่อนที่ของเดอะเรธในขณะเร้นกาย<b>เพิ่มขึ้นปานกลาง</b></li>","name":"\\"ลมพายุ\\" - โคลน","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"สัญลักษณ์กุนติน-ตักโคที่แสดงถึงความเร็วในการตะครุบเหยื่อ เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดโคลนลงบนตัวกระดิ่ง<br><li>ระยะเวลาการปรากฏตัวของเดอะเรธ<b>ลดลงเล็กน้อย</b></li>","name":"\\"ล่ารวดเร็ว\\" - โคลน","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"สัญลักษณ์บายครา-แคอุกซึ่งแสดงถึงความโหดเหี้ยม เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดโคลนลงบนตัวกระดิ่ง<br><li><b>การโจมตีแบบไม่ทันตั้งตัว</b>จะทำให้ผู้รอดชีวิตเกิดอาการ<b>ตาบอดออร่า</b>เป็นระยะเวลา <b>60 วินาที</b></li>","name":"\\"นักรบตาบอด\\" - โคลน","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"สัญลักษณ์โอฮุเว-โอนมเนียอันแสดงถึงพายุที่ถาโถม เป็นสัญลักษณ์ที่ประทับด้วยเลือดลงบนตัวกระดิ่ง<li>ความเร็วเคลื่อนที่ของเดอะเรธในขณะเร้นกาย<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"\\"ลมพายุ\\" - สีขาว","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"สัญลักษณ์กุนติน-ตักโคที่แสดงถึงความเร็วในการตะครุบเหยื่อ เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดหมึกสีขาวลงบนตัวกระดิ่ง<br><li>ระยะเวลาการปรากฏตัวของเดอะเรธ<b>ลดลงปานกลาง</b></li>","name":"\\"ล่ารวดเร็ว\\" - สีขาว","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"สัญลักษณ์ยิวาริคที่แสดงถึงการประสานพลังดำมืด เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดหมึกสีขาวลงบนตัวกระดิ่ง<br><li>ระยะเวลาที่ใช้ในการกระโดดข้ามหน้าต่าง เปิดตู้เก็บของ ทำลายแท่นไม้หรือของที่ทำลายได้ หรือทำให้เครื่องปั่นไฟเสียหายขณะเร้นกาย<b>ลดลงอย่างมาก</b></li>","name":"\\"ระบำเงา\\" - สีขาว","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"สัญลักษณ์เครตินที่แสดงถึงการจากไปอย่างรวดเร็ว เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดหมึกสีขาวลงบนตัวกระดิ่ง<br><li>ระยะเวลาการหายตัวของเดอะเรธ<b>ลดลงมหาศาล</b></li>","name":"\\"บลิงค์\\" - สีขาว","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"สัญลักษณ์บายครา-แคอุกซึ่งแสดงถึงความโหดเหี้ยม เป็นสัญลักษณ์ที่ใช้นิ้วมือวาดหมึกสีขาวลงบนตัวกระดิ่ง<br><li>การโจมตีแบบไม่ทันตั้งตัวจะทำให้ผู้รอดชีวิตติดเอฟเฟกต์สถานะ<b>เหวอะหวะ</b>และ<b>เลือดท่วม</b>จนกว่าจะได้รับการรักษาจนหาย</li>","name":"\\"นักรบตาบอด\\" - สีขาว","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"สัญลักษณ์โอฮุเว-โอนมเนียอันแสดงถึงพายุที่ถาโถม เป็นสัญลักษณ์ที่ประทับด้วยเลือดลงบนตัวกระดิ่ง<br><li>ความเร็วเคลื่อนที่ของเดอะเรธในขณะเร้นกาย<b>เพิ่มขึ้นมหาศาล</b></li>","name":"\\"ลมพายุ\\" - เลือด","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"สัญลักษณ์กุนติน-ตักโคที่แสดงถึงความเร็วในการตะครุบเหยื่อ เป็นสัญลักษณ์ที่ประทับเลือดลงบนหัวกระดิ่ง<br><li>ระยะเวลาการปรากฏตัวของเดอะเรธ<b>ลดลงอย่างมาก</b></li>","name":"\\"ล่ารวดเร็ว\\" - เลือด","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"สัญลักษณ์ยิวาริคที่แสดงถึงการประสานพลังดำมืด เป็นสัญลักษณ์ที่ประทับเลือดลงบนตัวกระดิ่ง<br><li>ระยะเวลาที่ใช้ในการกระโดดข้ามหน้าต่าง เปิดตู้เก็บของ ทำลายแท่นไม้หรือของที่ทำลายได้ หรือทำให้เครื่องปั่นไฟเสียหายขณะเร้นกาย<b>ลดลงมหาศาล</b></li>","name":"\\"ระบำเงา\\" - เลือด","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"สัญลักษณ์ครา-ฟราบายแสดงถึงการที่เอนทิตีคอยพิทักษ์เราอยู่ เป็นสัญลักษณ์ที่ประทับเลือดลงบนหัวกระดิ่ง<br><li>ปลดล็อคความสามารถในการอ่านออร่าที่ซ่อนอยู่ ในขณะเร้นกาย คุณจะมองเห็นออร่าของผู้รอดชีวิตที่อยู่ในระยะ <b>12 เมตร</b></li>","name":"\\"ทัศนาทั่วทิศ\\" - เลือด","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"เงื่อนหงอนไก่ผูกรอบกระดิ่งทำให้เสียงนุ่มขึ้น มีออร่าชั่วร้ายฟุ้งกระจายออกมา<br><li>จะทำให้กระดิ่งครวญ<b>เงียบโดยสิ้นเชิง</b></li>","name":"ลูกตุ้มหงอนไก่","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"สัญลักษณ์ครา-ฟราบายที่แสดงถึงการที่เอนทิตีคอยพิทักษ์เราอยู่ เป็นสัญลักษณ์ส่องสว่างบนหัวกระดิ่ง<br><li>ปลดล็อคความสามารถในการอ่านออร่าอันสุดยอด ในขณะที่เร้นกาย <b>ความคืบหน้าในการซ่อมแซมเครื่องปั่นไฟ</b>จะสามารถระบุได้จาก<b>ความเข้มของออร่า</b></li>","name":"\\"ทัศนาทั่วทิศ\\" - วิญญาณร้าย","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"ตัวยึดที่ทำมาอย่างดีซึ่งช่วยให้โซ่ขยับไปอย่างราบรื่น<br><br><li><b>ลด</b>ขอบเขตการชนระหว่างวิ่งเลื่อยไฟฟ้า</li>","name":"ตัวยึดหนัก","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"เครื่องกลที่จำกัดจำนวนน้ำมันเชื้อเพลิงที่เครื่องยนต์ขนาดเล็กเผาผลาญได้ต่อครั้ง ทำให้ความเร็วอยู่ในระดับคงที่และปลอดภัย<br><br><li>สภาวะร่างกายของผู้รอดชีวิตที่ถูกเลื่อยไฟฟ้าตีจะเสียหายไปหนึ่งระดับ</li><li>ได้รับแต้มเลือดเพิ่ม <b>100%</b> ในอีเวนท์ทำคะแนนด้วยเลื่อยไฟฟ้า</li>","name":"ตัวจำกัดความเร็ว","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"เครื่องกรองร้าวๆ ฝุ่นเขรอะ แต่ก็ยังใช้งานได้ดีกว่าแบบที่วางขายทั่วไป<br><br><li>ขีดจำกัดความร้อนเกินของเลื่อยไฟฟ้า<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ซากเครื่องกรอง","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"บูทเสริมนิ้วหัวแม่เท้าเพื่อป้องกันการปะทะ<br><br><li>ระยะเวลาฟื้นคืนหลังใช้เลื่อยไฟฟ้าตีวัตถุ<b>ลดลงเล็กน้อย</b></li>","name":"บูทแม่โป้งเล็ก","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"ฝาครอบเครื่องที่ดัดแปลงหยาบๆ ให้อากาศไหลเวียนเป็นพิเศษ<br><br><li>อัตราการทำความเย็นของเลื่อยไฟฟ้า<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ฝาครอบเครื่องเจาะรู","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"เข็มขัดสวยงามแวววาวที่หนุ่มบ้านนอกหลายคนสวมกัน<br><br><li><b>ลด</b>รัศมีความน่ากลัวลง 8 เมตรเมื่อเลื่อยไฟฟ้าร้อนเกิน</li>","name":"หัวเข็มขัดใหญ่","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"น้ำมันราคาถูกที่ใช้หล่อลื่นโซ่เสียงดัง<br><br><li>เสียงที่เกิดจากเลื่อยไฟฟ้า<b>ลดลงเล็กน้อย</b></li>","name":"น้ำมันเครื่องไม่มียี่ห้อ","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"รองเท้าบูทคาวบอยคู่หนึ่งที่ดึงมาจากศพของแม็กซ์ ทอมป์สัน คนพ่อ<br><br><li>การควบคุมวิ่งเลื่อยไฟฟ้า<b>เพิ่มขึ้นปานกลาง</b></li>","name":"รองเท้าของพ่อ","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"รอยแกะสลักบนตัวเลื่อยไฟฟ้าเป็นสัญลักษณ์จำนวนชีวิตที่ฆ่าไปแล้ว ทำให้ผู้ใช้เต็มไปด้วยความมุ่งมั่น<br><li>ความเร็วการขยับของเลื่อยไฟฟ้า<b>ลดลงเล็กน้อย</b></li><li>ระยะเวลาชาร์จ<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ทับซ้อน</li>","name":"รอยแกะสลักแห่งความตาย","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"คาเฟอีนไม่กี่เม็ดที่พบในกระเป๋าเอเวอลิน ทอมป์สัน ผลข้างเคียงมีทั้งความหงุดหงิดและวิตกกังวล<br><br><li>เวลาที่ต้องใช้ในการชาร์จเลื่อยไฟฟ้า<b>ลดลงเล็กน้อย</b>เป็นเวลา 30 วินาทีหลังจากสตันเพราะแท่นไม้</li><br>","name":"ตัวช่วยของแม่","flavor":"\\"ขอนี่อีกนะคะหมอ\\" —เอเวอลิน ทอมป์สัน","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"โซ่ทำพิเศษเพื่อลดโอกาสการดีดกลับ<br><br><li>ระยะเวลาบทลงโทษเมื่อชนกับสิ่งกีดขวางขณะวิ่งเลื่อยไฟฟ้า<b>ลดลงอย่างมาก</b></li>","name":"โซ่แรงสะท้อนต่ำ","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"ก้อนใบไม้หอมเละๆ แฉะๆ ที่ช่วยพรางกลิ่นของนายพรานขณะซุ่มตามเหยื่อ<br><br><li>รับเอฟเฟกต์สถานะตรวจไม่พบเป็นเวลา 15 วินาทีหลังจากตีด้วยเลื่อยไฟฟ้า</li>","name":"ก้อนใบไม้","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"รอยแกะสลักบนตัวเลื่อยไฟฟ้าเป็นรูปสัตว์ร้ายในสายหมอก ทำให้ผู้ใช้เต็มไปด้วยความมุ่งมั่น<br><li>ความเร็วการขยับของเลื่อยไฟฟ้า<b>เพิ่มขึ้นปานกลาง</b></li><li>ระยะเวลาชาร์จ<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ทับซ้อน</li>","name":"รอยแกะสลักแห่งหายนะ","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"จาระบีหนาๆ ที่สามารถใช้ทาใต้ตาเพื่อลดแสงจ้า<br><br><li>อัตราการทำความเย็นของเลื่อยไฟฟ้าเมื่อคุณถูกไฟฉายส่อง<b>เพิ่มขึ้นปานกลาง</b></li>","name":"จาระบีดำ","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"ทั้งที่มีฝุ่นและน้ำมันจับเป็นก้อน คาร์บูเรเตอร์นี้ก็ยังปรับมาอย่างดี<br><br><li>เวลาชาร์จเลื่อยไฟฟ้า<b>ลดลงเล็กน้อย</b></li><li><b>ลดความเร็วพื้นฐานในการเคลื่อนที่ลงเป็น 4.4 ม./ว.</b>","name":"คาร์บูเรเตอร์ที่ปรับมาแล้ว","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"รองเท้าบูทติดชิ้นโลหะซึ่งจุ่มลงไปในโคลนเพื่อให้แต่ละย่างก้าวมั่นคงและควบคุมง่ายขึ้น<br><li>การควบคุมขณะใช้เลื่อย<b>เพิ่มขึ้นมหาศาล</b></li><li>ระยะเวลาบทลงโทษเมื่อชนกับสิ่งของ<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"รองเท้าบูทติดหนาม","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"ถุงมือเหม็นเน่าเปื้อนสารที่ไม่รู้จัก แม้ทุกอย่างจะผิดไปหมด แต่เนื้อผ้ามันก็หนา<br><br><li>ความร้อนที่ได้รับเมื่อเร่งเครื่องเลื่อยไฟฟ้า<b>ลดลงปานกลาง</b></li><br>","name":"ถุงมือเล้าหมู","flavor":"\\"ความวุ่นวายอะไรก็แปดเปื้อนหัวใจคนที่ทำงานหนักไม่ได้หรอก\\" — แม็กซ์ ทอมป์สัน ผู้พ่อ","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"โซ่เบาๆ ที่ลดน้ำหนักให้เลื่อยไฟฟ้า ทำให้มีความคล่องตัวขึ้นอย่างมาก<br><br><li>วิ่งเลื่อยไฟฟ้าต่อไปหลังจากพังแท่นไม้หรือกำแพง</li><li>สภาวะร่างกายของผู้รอดชีวิตที่ถูกเลื่อยไฟฟ้าตีภายใน 5 วินาทีนับจากการพังแท่นไม้หรือกำแพง จะเสียหายไปหนึ่งระดับ</li>","name":"โซ่ซ่อนกลิ่น","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"เมื่อเป็นตัวแทนการคุมขังของแม็กซ์คนลูกแล้ว นี่คืออิฐก้อนแรกที่จะร่วงหล่นเมื่อปราการของห้องเขาพังทลาย<br><br><li>หลังจากคงสภาพวิ่งเลื่อยไฟฟ้าได้เป็นเวลา 2 วินาที รับเอฟเฟกต์สถานะตรวจไม่พบไปจนกว่าจะหยุดวิ่ง</li><br>","name":"อิฐสีรุ้ง","flavor":"\\"โวยวายอะไรของเอ็งล่ะไอ้หนู?\\" — แม็กซ์ ทอมป์สัน คนพ่อ","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"กล่องลดเสียงเลื่อยไฟฟ้าที่ประดิษฐ์ขึ้นอย่างเชี่ยวชาญจึงมีประสิทธิภาพเหนือกว่าใคร<br><br><li>ผู้รอดชีวิตที่อยู่นอกรัศมีความน่ากลัวไม่ได้ยินเสียงเลื่อยไฟฟ้า</li>","name":"กล่องลดเสียงขั้นเทพ","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"ของเล่นทำจากไม้ราคาถูกเป็นรูปม้า ครั้งหนึ่งเคยเป็นสัญลักษณ์ของความสัมพันธ์ระหว่างผู้ป่วยคาทาโทนิกและพยาบาลของตน<br><li>ความเหนื่อยเพิ่มเติมจากการบลิงค์โจมตีที่พลาด<b>ลดลงปานกลาง</b></li>","name":"ม้าไม้","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"หวีเสนียดสีขาวที่ได้จากคลินิก ครั้งหนึ่งเคยเป็นสัญลักษณ์ของความสัมพันธ์ระหว่างผู้ป่วยโรควิตกกังวลและพยาบาลของตน<br><li>ระยะของการพุ่งโจมตีด้วยบลิงค์<b>ลดลงปานกลาง</b></li><li>แต้มเลือดเมื่อได้คะแนน<i>การบลิงค์โจมตี</i>เพิ่มขึ้น <b>100%</b></li>","name":"หวีเสนียดสีขาว","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"ช้อนโลหะทื่อ ๆ ที่ขึ้นสนิมและเป็นคราบ ยึดได้จากผู้ป่วยห้อง 202 \\"ชายชั่ว\\"<br><li>การใช้บลิงค์โจมตีผู้รอดชีวิตได้สำเร็จจะทำให้ส่งเสียงร้องด้วยความเจ็บปวด<b>ดังขึ้นปานกลาง</b>เป็นเวลา <b>60 วินาที</b></li>","name":"ช้อนโลหะ","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"ฟันกรามเน่าถูกกระชากออกจากมืออันเย็นเฉียบของ \\"ชายชั่ว\\"<br><li>การบลิงค์โจมตีผู้รอดชีวิตได้สำเร็จจะเผยออร่าเมื่อกำลังรักษาหรือได้รับการรักษาภายในระยะ <b>28 เมตร</b>เป็นเวลา <b>60 วินาที</b></li>","name":"ของดูต่างหน้าชายชั่ว","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"นาฬิกาข้อมือที่พังและไหม้เกรียม ส่งเสียงก๊อกแก๊ก เอามาจากร่างของพยาบาลมอริส<br><li>ระยะเวลาของการบลิงค์ต่อเนื่อง<b>เพิ่มขึ้นปานกลาง</b></li>","name":"นาฬิกาพก","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"เครื่องประดับไร้ราคาที่อาจมีความสำคัญกับใครซักคน ได้มาจากร่างของเด็กหญิงขี้ระแวง<br><li>ระยะการบลิงค์สูงสุด<b>ลดลงปานกลาง</b></li><li>แต้มเลือดสำหรับการได้คะแนน<i>บลิงค์อย่างแม่นยำ</i>เพิ่มขึ้น <b>100%</b></li>","name":"กำไลด้าน","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"เชือกสีดำใช้เป็นเข็มขัดในช่วงเวลาไว้ทุกข์ ได้มาจากร่างของบาทหลวงแคมป์เบล<br><li>ความเร็วรีชาร์จของการบลิงค์<b>เพิ่มขึ้นปานกลาง</b></li>","name":"สายรัดมืดมน","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"ลูกสนที่ทำให้การเคลื่อนไหวซ้ำซากของผู้ป่วยลดลง ได้มาจากร่างของเด็กชายที่เป็นคาทาโทนิก<br><li>ความเหนื่อยเพิ่มเติมจากการบลิงค์ต่อเนื่อง<b>ลดลงอย่างมาก</b></li>","name":"ขุมทรัพย์ของเด็กชายผู้เป็นคาทาโทนิก","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"ลมหายใจอึดอัดและสั่นเครือ ที่ขโมยมาจาก \\"ชายชั่ว\\" กระตุกและสั่นไปมาอย่างรุนแรงเมื่ออยู่ในมือของเดอะเนิร์ส<br><li>การใช้บลิงค์โจมตีผู้รอดชีวิตได้สำเร็จจะ<b>ปิดใช้งานความสามารถในการบลิงค์ของเดอะเนิร์ส</b>และเพิ่มความเร็วการเคลื่อนที่พื้นฐานของเดอะเนิร์สเป็น <b>4.6 ม./วิ.</b> เป็นเวลา <b>60 วินาที</b></li>","name":"ลมหายใจขาดช่วง","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"ลมหายใจเฮือกใหญ่ ที่ขโมยมาจากเจ้าหน้าที่โรงพยาบาลอ้วนฉุ แกว่งเบา ๆ เมื่อถูกสัมผัสโดยเดอะเนิร์ส<br><li>ระยะการบลิงค์สูงสุด<b>เพิ่มขึ้นอย่างมาก</b></li><li>เวลาชาร์จสูงสุดของการบลิงค์<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"หอบหนัก","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"ลมหายใจที่รวยรินและสั่นเครือ ซึ่งเอามาจากบาทหลวงแคมป์เบล ม้วนและงออย่างเงียบเชียบเมื่อสัมผัสกับเดอะเนิร์ส<br><li>ความเร็วรีชาร์จของการบลิงค์<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"เสียงหายใจหวีดอันเปราะบาง","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"ลมหายใจที่ผิดแปลกและเสื่อมสภาพที่เก็บมาจากเด็กที่เป็นคาทาโทนิก จากปกติที่นิ่งสงบ กลายเป็นกระวนกระวายเมื่อถูกสัมผัสโดยเดอะเนิร์ส<br><li>ระยะเวลาที่เหนื่อยจากการบลิงค์<b>ลดลงปานกลาง</b></li>","name":"การหายใจโซเซ","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"ลมหายใจที่รวบรวมจากเด็กหญิงที่เดอะเนิร์สสนิทสนมด้วย บิดเบี้ยวไปมาอย่างรุนแรงเมื่อถูกเดอะเนิร์สสัมผัส<br><li>การบลิงค์ผ่านตัวผู้รอดชีวิตจะทำให้ผู้รอดชีวิตนั้นกรีดร้องพร้อมให้ <b>แต้มเลือด 200 แต้ม</b>ในหมวดหมู่<i>ความเจ้าเล่ห์</i></li>","name":"ลมหายใจอันวิตก","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"เศษผ้าสักหลาดลายสก็อตแดงดำ เศษผ้าดังกล่าวทำให้เดอะเนิร์สมีสมาธิที่เฉียบแหลม<br><li>ทำให้เดอะเนิร์สมองเห็นตำแหน่งเป้าหมายของการบลิงค์</li>","name":"ผ้าสักหลาดลายสก็อต","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"ลมหายใจสุดท้ายที่กระชากมาจากเจ้าหน้าที่ฮาร์วี่ คาวานาประจำสถานบำบัดโครตัส เพรนน์ มันสั่นอย่างรุนแรงเมื่ออยู่ในมือของเดอะเนิร์ส<br><li>ระยะการบลิงค์สูงสุด<b>เพิ่มขึ้นมหาศาล</b></li><li>เวลาชาร์จสูงสุดของการบลิงค์<b>เพิ่มขึ้นมหาศาล</b></li>","name":"ลมหายใจเฮือกสุดท้ายของคาวานา","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"ลมหายใจสุดท้ายที่กระชากมาจากคนไข้ชื่อแมรี่ เจนเนอร์ ประจำสถานบำบัดโครตัส เพรนน์ มันสั่นอย่างรุนแรงเมื่ออยู่ในมือของเดอะเนิร์ส<br><li>หลังจากบลิงค์ ทำให้เดอะเนิร์สสามารถบลิงค์กลับไปยังตำแหน่งเดิมได้ทันทีโดยกด<i>ปุ่มเปิดใช้งานความสามารถ</i> ต้องเริ่มการทำงานก่อนที่เดอะเนิร์สจะเหนื่อยล้า</li>","name":"ลมหายใจเฮือกสุดท้ายของเจนเนอร์","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"ลมหายใจอันทรงพลังเฮือกสุดท้าย ที่ริบมาจากบาทหลวงแคมป์เบลประจำสถานบำบัดโครตัส เพรนน์ มันแตกสลายอย่างรุนแรงในมือของเดอะเนิร์ส<br><li>เมื่อปรากฏกายอีกครั้งหลังจากการบลิงค์เต็มชาร์จ เดอะเนิร์สจะบลิงค์ไปในทิศทางที่หันไปทันทีด้วยชาร์จเพียงครึ่งเดียว</li>","name":"ลมหายใจเฮือกสุดท้ายของแคมป์เบล","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"ลมหายใจสุดท้ายอันทรงพลังที่ขโมยมาจากคนไข้สถานบำบัดโครตัส เพรนน์ \\"ชายชั่ว\\" มันสั่นด้วยความรุนแรงเมื่ออยู่ในมือของเดอะเนิร์ส<br><li>การใช้บลิงค์โจมตีผู้รอดชีวิตได้สำเร็จจะทำให้เดอะเนิร์สได้รับสถานะ<b>ตรวจไม่พบ</b>เป็นเวลา <b>16 วินาที</b></li><li>เอฟเฟกต์นี้สามารถใช้ได้เพียงหนึ่งครั้งต่อ <b>60 วินาที</b></li>","name":"ลมหายใจเฮือกสุดท้ายของ \\"ชายชั่ว\\"","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"เศษริบบิ้นสีขาวและเก่าแก่ที่เคยติดอยู่กับหนังสือศักดิ์สิทธิ์ ครั้งหนึ่งเคยเป็นสัญลักษณ์แห่งความขัดแย้ง<br><li>เพิ่มชาร์จของการบลิงค์ <b>1</b> หน่วย</li><li>การบลิงค์จะจำกัดอยู่เพียงสถานที่ในระยะสายตาของเดอะเนิร์สเท่านั้น</li>","name":"ที่คั่นหนังสือขาดวิ่น","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"กล่องไม้ขีดมีกระดุมที่ไม่เข้ากันอยู่หลายเม็ด เป็นสิ่งย้ำเตือนใจจากสถานที่อันเลวร้าย<br><li>ลบชาร์จของบลิงค์ออก <b>1</b> หน่วย</li><li>เพิ่มความเร็วการเคลื่อนที่พื้นฐานของเดอะเนิร์สเป็น <b>4.2 ม./วิ.</b></li>","name":"กล่องไม้ขีด","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"เครื่องประดับพลาสติกราคาถูก ทาสีเพื่อให้เหมือนเป็นเครื่องประดับอันล้ำค่า<br><li>ความเร็วการเคลื่อนที่เมื่อสะกดรอยตาม<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ต่างหูตลาดล่าง","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"โน๊ตสุดแสน \\"โรแมนติก\\" ถูกทิ้งไว้เกลื่อนเพื่อเรียกร้องความสนใจจากแฟนสาว<br><li>ระยะพุ่งโจมตีของ<b>ปีศาจภายใน I</b> <b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"บันทึกของแฟนหนุ่ม","flavor":"\\"โน๊ตนี้มีลายเซ็นของ: D.\\"","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"ผมสีบลอนด์ที่หยักศกเล็กน้อย<br><li>ระยะเวลาของ<b>ปีศาจภายใน III</b> <b>เพิ่มขึ้นเล็กน้อย</b></li><li>จำนวนความชั่วร้ายที่ต้องเก็บเพื่อไปให้ถึง<b>ปีศาจภายใน III</b> ครั้งแรก<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ผมบลอนด์","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"เศษชิ้นส่วนวัสดุสะท้อนแสงที่น่าจะมาจากกระจกที่แตกแล้ว<br><li><b>ปีศาจภายใน II จะเผยออร่าของผู้รอดชีวิต</b>ที่ถูกสะกดรอยตามอย่างน้อย <b>1 วินาที</b></li><li>ออร่าจะอยู่ได้นาน <b>2 วินาที</b></li>","name":"ชิ้นส่วนสะท้อน","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"ลาร์คสเปอร์แห้งเฉาสีชมพูที่เก็บมาจากหลุมศพ<br><li>อัตราได้รับความชั่วร้ายเมื่อสะกดรอยผู้รอดชีวิต<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ดอกไม้ที่ระลึก","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"สร้อยคอขนาดใหญ่ร้อยจากลูกปัดและเศษโลหะราคาถูก เป็นหนึ่งในของที่จูดิธชอบ<br><li>ความเร็วการเคลื่อนที่เมื่อสะกดรอย<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เครื่องประดับ","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"แปรงไนลอนขนแข็งใช้เพิ่มน้ำหนักและความนุ่มนวลให้กับเส้นผม<br><li>ระยะเวลาของ<b>ปีศาจภายใน III</b> <b>เพิ่มขึ้นปานกลาง</b></li><li>จำนวนความชั่วร้ายที่ต้องเก็บเพื่อไปให้ถึง<b>ปีศาจภายใน III</b> ครั้งแรก<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"แปรงผม","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"เศษแก้วสีที่แตกมาจากสิ่งของบางอย่าง และไม่สามารถหาที่มาของมันได้<br><li><b>ปีศาจภายใน I จะเผยออร่าของผู้รอดชีวิต</b>ที่ถูกสะกดรอยอย่างน้อย <b>1 วินาที</b></li><li>ออร่าจะอยู่ได้นาน <b>3 วินาที</b></li>","name":"เศษแก้วแตก","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"กระต่ายสีเทาถูกคว้านเครื่องในออกมาตั้งแต่คอยันหาง<br><li>รัศมีความน่ากลัวของ<b>ปีศาจภายใน II</b> <b>ลดลงปานกลาง</b></li><li>รัศมีความน่ากลัวของ<b>ปีศาจภายใน III</b> <b>เพิ่มขึ้นปานกลาง</b></li>","name":"ซากกระต่าย","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"เศษกระจกอันแหลมคมขนาดใหญ่<br><li><b>ปีศาจภายใน II จะเผยออร่าของผู้รอดชีวิต</b>ที่ถูกสะกดรอยตามอย่างน้อย <b>1 วินาที</b></li><li>ออร่าจะอยู่ได้นาน <b>5 วินาที</b></li>","name":"เศษกระจก","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"สมุดบันทึกที่ระบุว่าเป็นของ จูดิธ เอ็ม ไมเยอส์ มีภาพวาดน่าเกลียดน่ากลัวอยู่แทบทุกหน้า<br><li>ผู้รอดชีวิตหนึ่งคนจะกลายเป็น<b>เป้าหมาย</b>ของคุณ</li><li>อัตราได้รับความชั่วร้ายเมื่อสะกดรอยเป้าหมาย<b>เพิ่มขึ้นอย่างมาก</b></li><li><i>มีเป้าหมายได้คนเดียวเท่านั้นต่อหนึ่งเกม</i></li>","name":"บันทึกของจูดิธ","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"กล่องไม้แห้งที่เคยใช้เก็บของสวยงาม<br><li>ความเร็วการเคลื่อนที่เมื่อสะกดรอย<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"กล่องเครื่องประดับ","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"มีกระดาษถูกฉีกออกจากหนังสือรุ่นของโรงเรียนมัธยมปลายแฮดดอนฟิลด์รุ่นปี 65 เป็นสิ่งที่ระลึกถึงจูดิธ ไมเยอส์<br><li>อัตราได้รับความชั่วร้ายเมื่อสะกดรอยผู้รอดชีวิต<b>เพิ่มขึ้นปานกลาง</b></li>","name":"อนุสรณ์ เจ. ไมเยอส์","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"ริบบิ้นผ้าตาหมากรุกสีน้ำเงินที่ใช้ผูกผม<br><li>ระยะเวลาของ<b>ปีศาจภายใน III</b> <b>เพิ่มขึ้นอย่างมาก</b></li><li>จำนวนความชั่วร้ายที่ต้องเก็บเพื่อไปให้ถึง<b>ปีศาจภายใน III</b> ครั้งแรก<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"โบว์ผูกผม","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"กระจกพกพาตั้งได้ อยู่ในสภาพสมบูรณ์เว้นแต่มีฝุ่นและแป้งผัดหน้าบางๆ คลุมอยู่<br><li><b>ปีศาจภายใน II จะเปิดเผยออร่าของผู้รอดชีวิต</b>เมื่อสะกดรอยตามในระยะ <b>16 เมตร</b></li><li>ปีศาจภายในจะไม่สามารถพัฒนาเกิน<b>ระดับ II</b></li><li>ความเร็วการเคลื่อนที่<b>ลดลงเล็กน้อย</b></li><li>แต่ละครั้งที่ทำคะแนนจาก<b>การโจมตี</b>จะได้รับแต้มเลือด <b>100%</b> สำหรับคะแนน<b>โจมตี</b>ในหมวด<b>ความอำมหิต</b> และแต้มเลือดเพิ่มอีก <b>150%</b> ในหมวด<b>ความเจ้าเล่ห์</b></li>","name":"กระจกเวิ้งว้าง","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"เศษหินแกรนิตขนาดเท่ากำปั้นที่แตกจากป้ายหลุมศพ<br><li>ปลดล็อคความสามารถในการ<b>ฆ่าผู้รอดชีวิต</b>ด้วย<b>ปีศาจภายใน III</b></li><li><b>ปิดใช้งาน</b>ความสามารถในการสะกดรอยตามด้วย<b>ปีศาจภายใน III</b></li><li>การฆ่าผู้รอดชีวิตจะใช้พลังของปีศาจภายใน<b>อย่างมาก</b></li><li>จำนวนความชั่วร้ายที่ต้องเก็บเพื่อไปให้ถึง<b>ปีศาจภายใน III</b> ครั้งแรก<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ชิ้นส่วนป้ายหลุมศพ","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"กระจกพกพาตั้งได้ มีรอยข่วนด้วยวัตถุโลหะที่แหลมคม<br><li><b>ปีศาจภายใน I จะเปิดเผยออร่าของผู้รอดชีวิต</b>เมื่อสะกดรอยตามในระยะ <b>32 เมตร</b></li><li>ปีศาจภายในจะไม่สามารถพัฒนาเกิน<b>ระดับ I</b></li><li>แต่ละครั้งที่ทำคะแนนจาก<b>การโจมตี</b> จะได้รับแต้มเลือด <b>100%</b> สำหรับคะแนน<b>โจมตี</b>ในหมวด<b>ความอำมหิต</b> และแต้มเลือดเพิ่มอีก <b>200%</b> ในหมวด<b>ความเจ้าเล่ห์</b></li>","name":"กระจกขูดขีด","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"กระจุกผมบลอนด์มัดด้วยยางมัดผมสีดำ<br><li>ระยะเวลาของ<b>ปีศาจภายใน III</b> <b>เพิ่มขึ้นมหาศาล</b></li><li>จำนวนความชั่วร้ายที่ต้องเก็บเพื่อไปให้ถึง<b>ปีศาจภายใน III</b> ครั้งแรก<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ปอยผม","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"ป้ายหลุมฝังศพหินแกรนิตขนาดใหญ่สลักชื่อจูดิธ ไมเยอส์ ที่ถูกขโมยมาจากสุสานเขาซินแคลร์<br><li>ปลดล็อคความสามารถในการ<b>ฆ่าผู้รอดชีวิตที่แข็งแรงหรือบาดเจ็บ</b>ด้วย<b>ปีศาจภายใน III</b></li><li><b>ปิดใช้งาน</b>ความสามารถในการสะกดรอยด้วย<b>ปีศาจภายใน III</b></li><li>จำนวนความชั่วร้ายที่ต้องเก็บเพื่อไปให้ถึง<b>ปีศาจภายใน III</b> ครั้งแรก<b>เพิ่มขึ้นมหาศาล</b></li><li><b>ความเร็วการเคลื่อนที่ลดลง ปานกลาง</b></li>","name":"ป้ายหลุมศพของจูดิธ","flavor":"\\"ที่นี่คือที่ที่ลูกสาวของเรานอนอยู่\\"","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"กระจุกผมบลอนด์ที่ถูกกระชากออกจากศีรษะของใครซักคน ปล่อยละอองกลิ่นดอกไม้อ่อนโยน<br><li>ระยะเวลา<b>ไม่จำกัด</b>สำหรับ<b>ปีศาจภายใน III</b></li><li>จำนวนความชั่วร้ายที่ต้องเก็บเพื่อไปให้ถึง<b>ปีศาจภายใน III</b> ครั้งแรก<b>เพิ่มขึ้นมหาศาล</b></li>","name":"กระจุกผมหอม","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"เครื่องประดับแข็งทื่อใช้คล้องคอทำจากต้นไม้ที่ตายแล้ว<br><li>เวลาที่ใช้ในการติดตั้งกับดักหลอก<b>ลดลงเล็กน้อย</b></li>","name":"สร้อยคอเชือก","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"ชิ้นส่วนเปลือกไข่ขนาดเล็กส่องสว่างเป็นสีทองเจือนจาง<br><li>ระยะเวลาที่กับดักหลอกที่ทำงาน<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เปลือกไข่ผง","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"ก้องโคลนสีดำจากซากของแมลงวัน กินเพื่อเพิ่มสเตมิน่า<br><li>ระยะห่างจากจุดที่เดอะแฮ็กสามารถเทเลพอร์ตไปยังกับดักของตนได้<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"โคลนแมลงวันตาย","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"น้ำมืดมัวในขวดแก้วเมื่อนานมากแล้ว<br><li>ระยะกับดักหลอก<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"น้ำในหนองบึง","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"ช่อดอกไม้สวยงามเต็มกำมือ มีขนสีเทาบางๆ ปกคลุมอยู่<br><li>ทำให้มองเห็นออร่าของผู้รอดชีวิตเป็นเวลา <b>3 วินาที</b>เมื่อทำให้กับดักหลอกทำงาน</li>","name":"ดอกพุซซี่วิลโล่","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"เปลือกไข่กลวงกลมครึ่งฟอง<br><li>ระยะเวลาที่กับดักหลอกทำงาน<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เปลือกไข่ครึ่งซีก","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"ปีกสีเหลืองแห้งกรอบเป็นกำ กินเพื่อเพิ่มสเตมิน่า<br><li>ระยะห่างจากจุดที่เดอะแฮ็กสามารถเทเลพอร์ตไปยังกับดักของตนได้<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ปีกแมลงปอ","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"เครื่องประดับแข็งทื่อใช้คล้องคอทำจากต้นไม้ที่ตายแล้ว ตกแต่งด้วยเปลือกไซปรัสและตะไคร่ในหนองน้ำ<br><li>เวลาที่ใช้ในการติดตั้งกับดักหลอก<b>ลดลงปานกลาง</b></li>","name":"สร้อยคอไม้ไซปรัส","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"น้ำสกปรกในใบบัวเผื่อนที่พับอยู่<br><li>ระยะกับดักหลอก<b>เพิ่มขึ้นปานกลาง</b></li>","name":"น้ำเลือด","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"กิ่งไม้วิลโล่เหี่ยวเฉาสามกิ่งที่ผูกติดกันเป็นพวงหรีดทรงสามเหลี่ยม<br><li>ทำให้มองเห็นออร่าของผู้รอดชีวิตเป็นเวลา <b>5 วินาที</b>เมื่อทำให้กับดักหลอกทำงาน</li>","name":"พวงวิลโล่","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"เครื่องประดับแข็งทื่อใช้คล้องคอทำจากต้นไม้ที่ตายแล้ว ตกแต่งด้วยกลีบและใบกล้วยไม้เหี่ยวแห้ง<br><li>เวลาที่ใช้ในการติดตั้งกับดักหลอก<b>ลดลงอย่างมาก</b></li>","name":"สร้อยคอกล้วยไม้ในหนองน้ำ","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"จั๊กจั่นบึงขนาดใหญ่มีชั้นขี้เถ้าบางๆ ปกคลุมอยู่ มีความกรุบกรอบ กินเพื่อเพิ่มสเตมิน่า<br><li>ระยะห่างจากจุดที่เดอะแฮ็กสามารถเทเลพอร์ตไปยังกับดักของตนได้<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"จั๊กจั่นตากแห้ง","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"ไข่เต่าสีส้มจืดจาง แตกและกลวงโบ๋<br><li>ระยะเวลาที่กับดักหลอกทำงาน<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ไข่เต่าเปลือกแตก","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"โคลนที่มีเส้นเลือดแดงเข้ม เส้นเลือดเป็นชั้นทำให้โคลนมีพลังมากขึ้น<br><li>ระยะการทำงานของกับดักหลอก<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"โคลนเลือด","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"มือที่เต็มไปด้วยรอยบาดของนักชำแหละแห่งหมู่บ้านกินคน แก่นชีวิตที่ถูกกักขังอยู่ภายในจะปลดล็อคพลังอำนาจมหาศาลของเดอะแฮ็ก<br><li>โคลนหลอกจะมีการชนกัน</li><li>ลบความสามารถในการเทเลพอร์ตไปยังกับดักของเดอะแฮ็ก</li><li>ให้แต้มเลือด <b>300%</b> จากความเจ้าเล่ห์</li><li>เอาชนะอุปกรณ์เสริมอื่นๆ ได้ทั้งหมด</li>","name":"มือที่เป็นรอยแผล","flavor":"\\"...\\" -นักชำแหละ","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"กุญแจมือที่เคยใช้ขังนักโทษและศพในห้องใต้ดินของหมู่บ้านกินคน แก่นชีวิตที่ถูกกักขังปลดล็อคพลังอำนาจมหาศาลที่ซ่อนอยู่ในเดอะแฮ็ก<br><li>ผู้รอดชีวิตจะไม่รู้ว่าตัวเองสะดุดกับดัก</li><li>กับดักจะไม่ทำให้เกิดแม่มดหลอก</li>","name":"กุญแจมือสนิมเขรอะ","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"หัวใจที่เยือกเย็นของผู้อาวุโสของหมู่บ้านกินคน แก่นชีวิตที่ถูกกักขังปลดล็อคพลังอำนาจมหาศาลที่ซ่อนอยู่ในแม่มด<br><li>ลดระยะการเต้นของหัวใจของแม่มดเป็น <b>0</b> เมื่อผู้รอดชีวิตสะดุดกับดักหลอก</li><li>เพิ่มรัศมีการเต้นของหัวใจของโคลนหลอก <b>16 เมตร</b></li>","name":"หัวใจของคุณยาย","flavor":"\\"นำชิ้นส่วนต่อไปของเด็กสาวคนนั้นมาให้ฉัน\\" - คุณยาย","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"หมู่บ้านกินคนทำให้เด็กชายหูหนวก พิกลพิการเพราะถูกฟาดที่หัวหลายรอบ แก่นชีวิตที่ถูกกักขังอยู่ภายในจะปลดล็อคพลังอำนาจมหาศาลของเดอะแฮ็ก<br><li>ผู้รอดชีวิตที่สะดุดกับดักหลอกจะหูหนวกไปเป็นระยะเวลา <b>6 วินาที</b></li>","name":"หูผิดรูปผิดร่าง","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"รองเท้าของเด็กที่สูญหายไปในบึงเมื่อนานมาแล้ว แก่นชีวิตที่ถูกกักขังอยู่ภายในจะปลดล็อคพลังอำนาจมหาศาลของเดอะแฮ็ก<br><li>ผู้รอดชีวิตที่อยู่ภายในระยะทำงานของกับดักหลอกจะติดเอฟเฟกต์สถานะ<b><i>ถูกกีดขวาง</i></b></li><li>เพิ่มความเร็วการเคลื่อนที่ของเดอะแฮ็กขึ้น<b>เล็กน้อย</b></li><li>ลบความสามารถในการเทเลพอร์ตไปยังกับดักของเดอะแฮ็ก</li>","name":"รองเท้าเปียกน้ำ","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"ชิ้นส่วนผ้าฝ้ายฉีกออกจากชุดที่ลีซ่า เชอร์วูดสวมใส่ในวันที่เธอหายตัวไป แก่นชีวิตที่ถูกกักขังปลดล็อคพลังอำนาจมหาศาลที่ซ่อนอยู่ในเดอะแฮ็ก<br><li>เดอะแฮ็กสามารถเทเลพอร์ตไปที่กับดักหลอกในด่านดังกล่าวได้</li><li>ระยะเวลาฟื้นตัวของเทเลพอร์ตไปกับดักหลอก <b>15 วินาที</b></li>","name":"ผ้าขี้ริ้วรสมินท์","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"ขั้วไฟฟ้าขึ้นราที่ยังคงนำไฟฟ้าอ่อนๆ ได้<br><li>ระยะของ<b>การช็อตไฟฟ้าบำบัด</b><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ขั้วไฟฟ้าขึ้นรา","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"ชิ้นส่วนหมากรุกตัวม้าขาวที่ทำจากไม้เมเปิล ของขวัญจากผู้เฒ่าชิ้นนี้นำพาความทรงจำเมื่อนานมาแล้วให้หวนคืน และมอบสมาธิอย่างร้ายกาจให้เดอะดอกเตอร์<br><li>ทำให้มองเห็นบริเวณของ<i>การโจมตีพิเศษ</i><b>การช็อตไฟฟ้าบำบัด</b></li>","name":"อัศวินเมเปิล","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"กระบวนการบำบัดจิตด้วยไฟฟ้าแบบมาตรฐาน เป็นส่วนหนึ่งของกิจวัตรประจำวันของคนไข้ ณ สถาบันรำลึกของเลรี สามารถก่อสภาวะสับสนเล็กน้อยแก่คนไข้ได้<br><li>คูลดาวน์ของ<b>ระเบิดไฟฟ้าสถิต</b>จะ<b>ลดลงเล็กน้อย</b></li><br>ผู้รอดชีวิตที่ติดสถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการด้านระเบียบ</i>ดังนี้:<li>แท่นไม้ที่แตกหักดูเหมือนจะถูกแทนที่ด้วย<i>แท่นไม้ลวงตา</i>ที่จะยังคงอยู่จนกว่าจะเข้าใกล้</li><li><i>แท่นไม้ลวงตา</i>จะเกิดขึ้นทุก <b>20 วินาที</b>ที่ตำแหน่งเดิมของแท่นไม้ที่แตกหัก</li><li>โดยที่<b>เดอะดอกเตอร์</b>ก็จะมองเห็นออร่าของ<i>แท่นไม้ลวงตา</i></li>","name":"\\"ระเบียบ\\" - คลาส I","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"กระบวนการบำบัดจิตด้วยไฟฟ้าใช้ความยาวคลื่นในการเยียวยาโรคทางจิตเวชหลายโรค ใช้ประกายไฟฟ้าของคาร์เตอร์เป็นต้นกำเนิดพลัง กระบวนการนี้อาจก่อให้เกิดความกังวลเล็กน้อยแก่ผู้ป่วยได้<br><li>รัศมีความน่ากลัวของคุณขณะที่<b>ระเบิดไฟฟ้าสถิต</b>พร้อมใช้งานจะ<b>เพิ่มขึ้นเล็กน้อย</b></li><li>รัศมีความน่ากลัวของคุณขณะที่<b>ระเบิดไฟฟ้าสถิต</b>กำลังคูลดาวน์จะ<b>ลดลงเล็กน้อย</b></li><br>ผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการด้านความสงบ</i>ดังนี้:<li><b>ความบ้าคลั่ง II</b>: ทำให้ผู้รอดชีวิตได้ยิน<i>รัศมีความน่ากลัวหลอน</i>จากไกลๆ<b>เป็นระยะ</b></li><li><b>ความบ้าคลั่ง III</b>: ทำให้ผู้รอดชีวิตได้ยิน<i>รัศมีความน่ากลัวหลอน</i>จากไกลๆ<b>อย่างต่อเนื่อง</b></li>","name":"\\"สงบ\\" - คลาส I","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"เทปคาสเซ็ทจากโครงการตื่นรู้ที่มีแต่เสียงซ่าเสียส่วนใหญ่ เปิดจิตของเดอะดอกเตอร์ไปสู่วิธี การรักษาทางเลือก<br><br><li><i>ความสามารถพิเศษ</i><b>ช็อตไฟฟ้าบำบัด</b>จะเปลี่ยนจากทรงกรวยเป็นวงแหวน ปรากฏเป็นระยะ<b> 8 เมตร</b>ด้านหน้า<b>เดอะดอกเตอร์</b> โดยมีรัศมีภายนอก <b>4.2 เมตร</b>และรัศมีภายใน <b>3 เมตร</b></li>","name":"เทปที่ถูกทิ้ง","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"ขั้วไฟฟ้าเหมือนใหม่ เป็นเครื่องมือที่ใช้สำหรับการช็อตไฟฟ้าบำบัด<br><li>ระยะของ<b>การช็อตไฟฟ้าบำบัด</b><b>เพิ่มขึ้นปานกลาง</b></li>","name":"ขั้วไฟฟ้าขัดเงา","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"เทปคาสเซ็ทจากโครงการตื่นรู้ที่บันทึกการสัมภาษณ์เหยื่อรายหนึ่ง เปิดจิตของเดอะดอกเตอร์ไปสู่วิธีการรักษาทางเลือก<br><li><i>ความสามารถพิเศษ</i><b>การช็อตไฟฟ้าบำบัด</b>จะเปลี่ยนจากทรงกรวยเป็นลำแสงที่มีระยะ <b>24 เมตร</b>และกว้าง <b>2 เมตร</b></li>","name":"เทปสัมภาษณ์","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"กระบวนการบำบัดจิตด้วยไฟฟ้าฉบับทดลองที่พัฒนาขึ้นกลางสายหมอก ใช้ความยาวคลื่นที่เชื่อมโยงจิตใจของคนไข้และแพทย์เข้าด้วยกัน กระบวนการนี้เป็นที่รู้กันว่าก่อให้เกิดกรณีการเห็นภาพหลอนเล็กน้อยแก่คนไข้<br><li>ออร่าผู้รอดชีวิตจะปรากฏให้เห็นเป็นเวลา <b>1 วินาที</b> เมื่อ<b>ความบ้าคลั่ง</b>ของพวกเขาเพิ่มขึ้น</li><br>ผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการหน่วงเหนี่ยว</i>ดังนี้: เห็น<i>ภาพหลอนของเดอะดอกเตอร์</i>เป็นเวลา</li><li><b>เพิ่มขึ้นปานกลาง</b></li>โดยที่<li><b>เดอะดอกเตอร์</b>ก็จะเห็นออร่า<i>ภาพหลอนของเดอะดอกเตอร์</i>ด้วย</li>","name":"\\"หน่วงเหนี่ยว\\" - คลาส II","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"กระบวนการบำบัดจิตด้วยไฟฟ้าแรงกระตุ้นสูง เป็นส่วนหนึ่งของกิจวัตรประจำวันของคนไข้ ณ สถาบันรำลึกของเลรี สามารถก่อสภาวะสับสนปานกลางแก่คนไข้ได้<br><li>คูลดาวน์ของ<b>ระเบิดไฟฟ้าสถิต</b>จะ<b>ลดลงปานกลาง</b></li><br>ผู้รอดชีวิตที่ติดสถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการด้านระเบียบ</i>ดังนี้:<li>แท่นไม้ที่แตกหักดูเหมือนจะถูกแทนที่ด้วย<i>แท่นไม้ลวงตา</i>ที่จะยังคงอยู่จนกว่าจะเข้าใกล้</li><li><i>แท่นไม้ลวงตา</i>จะเกิดขึ้นทุก <b>20 วินาที</b>ที่ตำแหน่งเดิมของแท่นไม้ที่แตกหัก</li><li>โดยที่<b>เดอะดอกเตอร์</b>ก็จะมองเห็นออร่าของ<i>แท่นไม้ลวงตา</i></li><span class=\\"FlavorText\\">\\"ผลข้างเคียงมีโอกาสเกิดขึ้นน้อยมาก\\" - สถาบันรำลึกของเลรี</span>","name":"\\"ระเบียบ\\" - คลาส II","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"โครงการความตื่นรู้ใช้กระบวนการบำบัดจิตด้วยไฟฟ้าเป็นการลงโทษ ซึ่งจะใช้ไฟฟ้าขนาดตายตัวที่มีค่าความต่างศักย์สูง สามารถก่อให้เกิดอาการหวาดระแวงปานกลางแก่คนไข้ได้<br><li>ความล่าช้าในการระเบิดของ<b>การช็อตไฟฟ้าบำบัด</b>ของคุณ<b>ลดลงเล็กน้อย</b></li><br>ผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการด้านวินัย</i>ดังนี้:<li><b>ความบ้าคลั่ง II</b>: เมื่อการไล่ล่าเริ่มต้นขึ้น ผู้รอดชีวิตจะรับรู้<i>รัศมีความน่ากลัว</i>และ<i>รอยเปื้อนสีแดงลวงตา</i>ได้ราวกับว่า<b>เดอะดอกเตอร์</b>ยืนอยู่ข้างหลัง เอฟเฟกต์ยังคงอยู่หลังการไล่ล่าสิ้นสุดแล้วไปอีก <b>6 วินาที</b></li><li><b>ความบ้าคลั่ง III</b>: <i>รัศมีความน่ากลัว</i>และ<i>รอยเปื้อนสีแดงลวงตา</i>เกิดขึ้นตลอดเวลา</li><li>โดยที่<b>เดอะดอกเตอร์</b>ก็จะมองเห็น<i>รอยเปื้อนสีแดงลวงตา</i>ด้วย</li><span class=\\"FlavorText\\">\\"เราให้ความรู้ความเข้าใจแก่ผู้ป่วยเสียใหม่ด้วยการดูแลที่ยอดเยี่ยมที่สุด\\" -สถาบันรำลึกของเลรี</span>","name":"\\"วินัย\\" - คลาส II","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"กระบวนการบำบัดจิตด้วยไฟฟ้าที่มีความเสี่ยง ใช้ความยาวคลื่นในการเยียวยาโรคทางจิตเวชหลายโรค ใช้ประกายไฟฟ้าของคาร์เตอร์เป็นต้นกำเนิดพลัง กระบวนการนี้อาจก่อให้เกิดความกังวลระดับปานกลางแก่ผู้ป่วยได้<br><li>รัศมีความน่ากลัวของคุณขณะที่<b>ระเบิดไฟฟ้าสถิต</b>พร้อมใช้งานจะ<b>เพิ่มขึ้นปานกลาง</b></li><li>รัศมีความน่ากลัวของคุณขณะที่<b>ระเบิดไฟฟ้าสถิต</b>กำลังคูลดาวน์จะ<b>ลดลงปานกลาง</b></li><br>ผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการด้านความสงบ</i>ดังนี้:<li><b>ความบ้าคลั่ง II</b>: ทำให้ผู้รอดชีวิตได้ยิน<i>รัศมีความน่ากลัวหลอน</i>จากไกลๆ<b>เป็นระยะ</b></li><li><b>ความบ้าคลั่ง III</b>: ทำให้ผู้รอดชีวิตได้ยิน<i>รัศมีความน่ากลัวหลอน</i>จากไกลๆ<b>อย่างต่อเนื่อง</b></li><span class=\\"FlavorText\\">\\"การบำบัดจิตด้วยไฟฟ้าเป็นหนึ่งในกระบวนการทางการแพทย์ที่ปลอดภัยที่สุด\\" - สถาบันรำลึกของเลรี</span>","name":"\\"สงบ\\" - คลาส II","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"ขั้วไฟฟ้าทดลองที่สามารถทนไฟฟ้าแรงสูงมากเป็นเวลายาวนานขึ้น<br><li>ระยะของ<b>การช็อตไฟฟ้าบำบัด</b><b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ขั้วไฟฟ้ากระตุ้นแรง","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"กระบวนการบำบัดจิตด้วยไฟฟ้าฉบับทดลองที่พัฒนาขึ้นกลางสายหมอก ใช้ความยาวคลื่นแรงกระตุ้นสูงเพื่อเชื่อมโยงจิตใจของคนไข้และแพทย์เข้าด้วยกัน กระบวนการนี้เป็นที่รู้กันว่าก่อให้เกิดกรณีการเห็นภาพหลอนอย่างรุนแรงแก่คนไข้<br><li>ออร่าผู้รอดชีวิตจะปรากฏให้เห็นเป็นเวลา <b>2 วินาที</b> เมื่อ<b>ความบ้าคลั่ง</b>ของพวกเขาเพิ่มขึ้น</li><br>ผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการหน่วงเหนี่ยว</i>ดังนี้:<li>เห็น<i>ภาพหลอนของเดอะดอกเตอร์</i>เป็นเวลา<b>เพิ่มขึ้นปานกลาง</b></li><li>โดยที่<b>เดอะดอกเตอร์</b>ก็จะเห็นออร่า<i>ภาพหลอนของเดอะดอกเตอร์</i>ด้วย</li>","name":"\\"หน่วงเหนี่ยว\\" - คลาส III","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"โครงการความตื่นรู้ใช้กระบวนการบำบัดจิตด้วยไฟฟ้าเป็นการลงโทษ ซึ่งจะใช้ไฟฟ้าขนาดตายตัวที่มีค่าความต่างศักย์สูงมาก สามารถก่อให้เกิดอาการหวาดระแวงอย่างรุนแรงแก่คนไข้ได้<br><li>ความล่าช้าในการระเบิดของ<b>การช็อตไฟฟ้าบำบัด</b>ของคุณ<b>ลดลงปานกลาง</b></li><br>ผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการด้านวินัย</i>ดังนี้:<li><b>ความบ้าคลั่ง II</b>: เมื่อการไล่ล่าเริ่มต้นขึ้น ผู้รอดชีวิตจะรับรู้<i>รัศมีความน่ากลัว</i>และ<i>รอยเปื้อนสีแดงลวงตา</i>ได้ราวกับว่า<b>เดอะดอกเตอร์</b>ยืนอยู่ข้างหลัง เอฟเฟกต์ยังคงอยู่หลังการไล่ล่าสิ้นสุดแล้วไปอีก <b>6 วินาที</b></li><li><b>ความบ้าคลั่ง III</b>: <i>รัศมีความน่ากลัว</i>และ<i>รอยเปื้อนสีแดงลวงตา</i>เกิดขึ้นตลอดเวลา</li><li>โดยที่<b>เดอะดอกเตอร์</b>ก็จะมองเห็น<i>รอยเปื้อนสีแดงลวงตา</i>ด้วย</li><span class=\\"FlavorText\\">\\"เคารพผู้ป่วยคือหลักการสำคัญของเรา\\" -สถาบันรำลึกของเลรี</span>","name":"\\"วินัย\\" - คลาส III","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"กระบวนการบำบัดจิตด้วยไฟฟ้าฉบับทดลองที่พัฒนาขึ้นกลางสายหมอก มีหมายเหตุหยาบๆ ใช้ความยาวคลื่นที่กระตุ้นอย่างเกินทานทนเพื่อเชื่อมโยงจิตใจของคนไข้และแพทย์เข้าด้วยกัน กระบวนการนี้เป็นที่รู้กันว่าก่อให้เกิดกรณีการเห็นภาพหลอนอย่างสาหัสแก่คนไข้<br><li>ออร่าผู้รอดชีวิตจะปรากฏให้เห็นเป็นเวลา <b>3 วินาที</b> เมื่อระดับเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>ของพวกเขาเพิ่มขึ้น</li><br>ผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการหน่วงเหนี่ยว</i>ดังนี้:<br><li>เห็น<i>ภาพหลอนของเดอะดอกเตอร์</i>เป็นเวลา<b>เพิ่มขึ้นปานกลาง</b></li><li>โดยที่<b>เดอะดอกเตอร์</b>ก็จะเห็นออร่า<i>ภาพหลอนของเดอะดอกเตอร์</i>ด้วย</li><span class=\\"FlavorText\\">\\"ฉันเห็นความป่วยอัน<u>น่าสะอิดสะเอียน</u>ของพวกเขา\\" -โน้ตที่ไม่ได้ลงชื่อ</span>","name":"\\"หน่วงเหนี่ยว\\" - โน้ตของคาร์เตอร์","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"กระบวนการบำบัดจิตด้วยไฟฟ้าฉบับทดลองที่มีหมายเหตุจากนายแพทย์เฮอร์แมน คาร์เตอร์เอง การกระตุ้นยาวนานต่อเนื่องทำให้คนไข้ตกอยู่ในสภาวะสับสนอย่างสาหัส<br><li>คูลดาวน์ของ<b>ระเบิดไฟฟ้าสถิต</b>จะ<b>ลดลงอย่างมาก</b></li><br>ผู้รอดชีวิตที่ติดสถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการด้านระเบียบ</i>ดังนี้:<li>แท่นไม้ที่แตกหักดูเหมือนจะถูกแทนที่ด้วย<i>แท่นไม้ลวงตา</i>ที่จะยังคงอยู่จนกว่าจะเข้าใกล้</li><li><i>แท่นไม้ลวงตา</i>จะเกิดขึ้นทุก <b>20 วินาที</b>ที่ตำแหน่งเดิมของแท่นไม้ที่แตกหัก</li><li>โดยที่<b>เดอะดอกเตอร์</b>ก็จะมองเห็นออร่าของ<i>แท่นไม้ลวงตา</i></li><span class=\\"FlavorText\\">\\"สิ่งกระตุ้นต้องคงอยู่ในระดับ<u>สั่นกระตุก</u>\\" -เอช. คาร์เตอร์</span>","name":"\\"ระเบียบ\\" - โน้ตของคาร์เตอร์","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"โครงการความตื่นรู้ใช้กระบวนการบำบัดจิตด้วยไฟฟ้าเป็นการลงโทษ ซึ่งนายแพทย์เฮอร์แมน คาร์เตอร์เป็นผู้ให้ความเห็นประกอบด้วยตนเอง ไฟฟ้าความต่างศักย์สูงเกินทานทนทำให้คนไข้ตกอยู่ในอาการหวาดระแวงอย่างสาหัส<br><li>ความล่าช้าในการระเบิดของ<b>การช็อตไฟฟ้าบำบัด</b>ของคุณ<b>ลดลงอย่างมาก</b></li><br>ผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการด้านวินัย</i>ดังนี้:<li><b>ความบ้าคลั่ง II</b>: เมื่อการไล่ล่าเริ่มต้นขึ้น ผู้รอดชีวิตจะรับรู้<i>รัศมีความน่ากลัว</i>และ<i>รอยเปื้อนสีแดงลวงตา</i>ได้ราวกับว่า<b>เดอะดอกเตอร์</b>ยืนอยู่ข้างหลัง เอฟเฟกต์ยังคงอยู่หลังการไล่ล่าสิ้นสุดแล้วไปอีก <b>6 วินาที</b></li><li><b>ความบ้าคลั่ง III</b>: <i>รัศมีความน่ากลัว</i>และ<i>รอยเปื้อนสีแดงลวงตา</i>เกิดขึ้นตลอดเวลา</li><li>โดยที่<b>เดอะดอกเตอร์</b>ก็จะมองเห็น<i>รอยเปื้อนสีแดงลวงตา</i>ด้วย</li><span class=\\"FlavorText\\">\\"เพื่อไม่ให้เคสที่ดื้อด้านที่สุดของเรากลับไปเป็นเหมือนเดิม ให้ใช้ระดับสูงสุดในการจัดการลงโทษพวกเขา\\" -เอช. คาร์เตอร์</span>","name":"\\"วินัย\\" - โน้ตของคาร์เตอร์","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"กระบวนการบำบัดจิตด้วยไฟฟ้าฉบับทดลองที่มีหมายเหตุจากนายแพทย์เฮอร์แมน คาร์เตอร์เอง ใช้ความยาวคลื่นลึกในการเยียวยาโรคทางจิตเวชหลายโรค จากการใช้ประกายไฟฟ้าของคาร์เตอร์เป็นต้นกำเนิดพลัง กระบวนการนี้ก่อให้เกิดความกลัวและกังวลอย่างควบคุมไม่ได้แก่ผู้ป่วย<br><li>รัศมีความน่ากลัวของคุณขณะที่<b>ระเบิดไฟฟ้าสถิต</b>พร้อมใช้งานจะ<b>เพิ่มขึ้นอย่างมาก</b></li><li>รัศมีความน่ากลัวของคุณขณะที่<b>ระเบิดไฟฟ้าสถิต</b>กำลังคูลดาวน์จะ<b>ลดลงอย่างมาก</b></li><br>ผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการด้านความสงบ</i>ดังนี้:<li><b>ความบ้าคลั่ง II</b>: ทำให้ผู้รอดชีวิตได้ยิน<i>รัศมีความน่ากลัวหลอน</i>จากไกลๆ<b>เป็นระยะ</b></li><li><b>ความบ้าคลั่ง III</b>: ทำให้ผู้รอดชีวิตได้ยิน<i>รัศมีความน่ากลัวหลอน</i>จากไกลๆ<b>อย่างต่อเนื่อง</b></li><span class=\\"FlavorText\\">\\"การชักที่มีคุณภาพสูงขึ้นจะก่อให้เกิดอาการแข็งทื่อ ซึ่งอย่างน้อยมันก็ทำให้ผมรู้สึก<u>สงบ</u>ตอนที่ผลยังคงอยู่\\" -เอช. คาร์เตอร์</span>","name":"\\"สงบ\\" - โน้ตของคาร์เตอร์","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"ชิ้นส่วนหมากรุกตัวขุนคล้ายแก้วที่หล่อขึ้นมาจากสายหมอกเอง ร่องรอยของเอนทิตีที่สะท้อนอยู่ภายในสามารถทำลายได้แม้แต่จิตใจที่เข้มแข็งที่สุด<br><br>ผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>จะมี<i>อาการในด้านต่างๆ ดังต่อไปนี้: สงบ, วินัย, ระเบียบ</i> และ<i>หน่วงเหนี่ยว</i><li>ทำให้ผู้รอดชีวิตได้ยิน<i>รัศมีความน่ากลัวหลอน</i>จากไกลๆ <b>เป็นระยะ</b></li><li>เมื่อการไล่ล่าเริ่มขึ้น ผู้รอดชีวิตจะรับรู้<i>รอยเปื้อนสีแดง</i>และ<i>รัศมีความกลัว</i>ราวกับว่า<b>เดอะด็อกเตอร์</b>ยืนอยู่ข้างหลังพวกเขา เอฟเฟกต์นี้จะยังมีผลต่อไปอีก <b>6 วินาที</b>หลังการไล่ล่าสิ้นสุดลงใน<b>ความบ้าคลั่ง II</b> และมีผลอย่างต่อเนื่องใน<b>ความบ้าคลั่ง III</b></li><li>แท่นไม้ที่แตกหักอาจดูเหมือนถูกแทนที่ด้วย<i>แท่นไม้ลวงตา</i>ซึ่งยังคงอยู่จนกว่าจะเข้าใกล้<i>แท่นไม้ลวงตา</i>จะเกิดขึ้นทุก <b>20 วินาที</b>ที่ตำแหน่งเดิมของแท่นไม้ที่แตกหัก</li><li>เห็น<i>ภาพหลอนของเดอะดอกเตอร์</i>เป็นเวลา<b>เพิ่มขึ้นปานกลาง</b></li><li>โดยที่<b>เดอะดอกเตอร์</b>จะมองเห็น<i>รอเปื้อนสีแดงลวงตา</i>เช่นเดียวกับออร่าของ<i>ภาพหลอนของเดอะดอกเตอร์และแท่นไม้ลวงตา</i></li>","name":"ราชันสีรุ้ง","flavor":"\\"การเพ่งพินิจแก้วสีรุ้งนี้เป็นการกระโจนเข้าสู่ความบ้าคลั่ง\\"","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"ชิ้นส่วนหมากรุกตัวเม็ดคล้ายแก้วที่หล่อขึ้นมาจากสายหมอกเอง ไม่อาจสัมผัสได้โดยไม่เกิดอาการไฟดูดอย่างมาก<br><li>ผู้รอดชีวิตทุกคนที่ถูก<i>ความสามารถพิเศษ</i><b>การช็อตไฟฟ้าบำบัด</b>หรือ<b>ระเบิดไฟฟ้าสถิต</b>โจมตีจะได้รับ<b>ประจุไฟฟ้าสถิต</b>อยู่เป็นเวลานาน <b>ประจุไฟฟ้าสถิต</b>จะยังคงอยู่ติดตัวผู้รอดชีวิตไปจนกว่าจะ<i>หมดประจุ</i></li><li>ผู้รอดชีวิตหลายคนที่ถูก<i>ความสามารถพิเศษ</i><b>การช็อตไฟฟ้าบำบัด</b>หรือ<b>ระเบิดไฟฟ้าสถิต</b>โจมตีและอยู่ห่างกันไม่เกิน <b>4 เมตร</b>จะไม่ได้รับ<b>ประจุไฟฟ้าสถิต</b></li><li>เมื่อใดก็ตามที่มีผู้รอดชีวิตอยู่ในระยะ <b>4 เมตร</b>จากผู้รอดชีวิตที่มี<b>ประจุไฟฟ้าสถิต</b> ผู้รอดชีวิตดังกล่าวก็จะถูกช็อตไฟฟ้าพร้อมผลที่เหมือนกับใน<i>ความสามารถพิเศษ</i><b>การช็อตไฟฟ้าบำบัด</b>และ<b>ประจุไฟฟ้าสถิต</b>จะ<i>หมดประจุ</i>ลงทันที</li>","name":"ตัวเม็ดสีรุ้ง","flavor":"\\"เมื่อพบขั้นตอนการรักษาที่ได้ผลแล้ว เราจะได้ไปสนใจกับวิธีการสำหรับให้การรักษา\\" -เอช. คาร์เตอร์","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"หินนี้หยาบเกินกว่าจะใช้ประโยชน์อะไรได้ คมมีดที่เสียหายจากหินนี้ทำให้เกิดแผลเปิดอย่างน่าสยดสยอง<br><li>เสียงร้องด้วยความเจ็บปวดของเป้าหมายที่ถูกโจมตีจะเพิ่มขึ้น <b>50%</b> จนกว่าจะได้รักษาให้หายสนิท</li>","name":"หินหยาบ","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"เศษธรรมดาๆ ของวัสดุที่ใช้เพื่อจัดการกับแผลพุพองแล้วกำจัดหนองออกไป<br><li>ความเร็วของขวานเล็กที่ถูกปาออกไป <b>+10%</b></li>","name":"ผ้าสีเหลือง","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"ผ้าพันแผลปฐมพยาบาลพันติดกับด้ามขวานเล็กอย่างแน่นหนา<br><li>เวลาคูลดาวน์ระหว่างการปาขวานเล็ก<b>ลดลงเล็กน้อย</b></li>","name":"ด้ามขวานพันผ้า","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"มียาพิษทาอยู่บนใบขวานเล็ก พิษจากเห็ดระโงกทำให้สมองตื้อ<br><li>เป้าหมายที่ถูกโจมตีจะติดเอฟเฟกต์สถานะ<b><i>ตาบอด</i></b>เป็นเวลา <b>60 วินาที</b></li><li>ไม่ทับซ้อน</li>","name":"พิษเห็ดระโงก","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"หัวขวานเล็กที่มีน้ำหนักแปลกๆ ทำขึ้นเพื่อให้จามเป้าหมายได้อย่างรุนแรง ผู้ใช้ต้องมีแขนที่แข็งแรงทีเดียว<br><li>เป้าหมายที่ถูกโจมตีจะติดเอฟเฟกต์สถานะ<b>ทุพพลภาพ</b>เป็นเวลา <b>10 วินาที</b></li>","name":"หัวถ่วงน้ำหนัก","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"เข็มหมุดทองแดงบูดเบี้ยวเสียจนผิดทรง แต่ได้รับการขัดเงาจนมันวับ ปล้นได้จากเหยื่อที่จัดการยากเป็นพิเศษ<br><li>ความเร็วการเคลื่อนที่ขณะที่คุณกำลังเตรียมการปา<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ไม่ทับซ้อน</li>","name":"เข็มหมุดเงาวับ","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"ด้ามขวานขัดมันที่ให้การควบคุมเครื่องมือสังหารเป็นไปอย่างคล่องแคล่วว่องไว<br><li>เวลาคูลดาวน์ระหว่างการปาขวานเล็ก<b>ลดลงปานกลาง</b></li>","name":"ด้ามขวานไม้โอ๊ก","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"เปียประดับรูปวงกลมซึ่งถักมาจากหญ้ามานนา ความทรงจำของเจ้าตัวเล็กที่หายไปนี้เติมเต็มเดอะฮันเทรสด้วยความเกรี้ยวกราดและสมาธิ<br><li>เวลาการเตรียมขวานเล็ก<b>ลดลงปานกลาง</b></li>","name":"เปียหญ้ามานนา","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"แผ่นหนังที่มัดเป็นห่วงนี้สามารถติดกับเข็มขัดเพื่อให้ขนเครื่องไม้เครื่องมือต่างๆ ได้สะดวก<br><li>เริ่มต้นด้วยขวานเล็ก<b>พิเศษ 1 เล่ม</b></li><li>เพิ่มจำนวนขวานเล็กที่ถือได้สูงสุดอีก <b>1</b> เล่ม</li>","name":"ห่วงหนัง","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"กลีบดอกไม้แห้งที่เมื่อผสมในชาแล้วจะช่วยบรรเทาอาการเนื่อยล้าหรือออกแรงมากไป<br><li>ความเร็วของขวานเล็กที่ถูกปาออกไป <b>+20%</b></li>","name":"รากกุหลาบ","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"ถุงมือหนังฟอกที่จะปกป้องมือและทำให้จับยึดได้อย่างมั่นคง<br><li>เวลาการรีโหลดขวานเล็กที่ตู้เก็บของ<b>ลดลงปานกลาง</b></li>","name":"ถุงมือหนังกวาง","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"มีน้ำยาพิษทาอยู่บนใบขวานเล็ก น้ำยาขุ่นคลั่กนี้ประกอบด้วยพิษงูแบรุสที่สามารถทำให้เกิดการเหนื่อยล้าได้<br><li>เป้าหมายที่ถูกโจมตีจะติดเอฟเฟกต์สถานะ<b>หมดกำลัง</b>เป็นเวลา <b>5 วินาที</b></li>","name":"น้ำยามีพิษ","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"หัวขวานเล็กเหล่านี้เต็มไปด้วยสนิมเขรอะที่ทำให้อาการบาดเจ็บรักษายากเป็นพิเศษ<br><li>เป้าหมายที่ถูกโจมตีจะติดเอฟเฟกต์สถานะ<b><i>เหวอะหวะ</i></b></li>","name":"หัวขวานสนิมเขรอะ","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"ผ้าโพกผมหลากสีประดับด้วยลวดลายดอกไม้ ความทรงจำของเจ้าตัวเล็กที่หายไปนี้เติมเต็มเดอะฮันเทรสด้วยความเกรี้ยวกราดและสมาธิ<br><li>เวลาการเตรียมขวานเล็ก<b>ลดลงอย่างมาก</b></li>","name":"ผ้าคลุมผมลายดอก","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"เข็มขัดอเนกประสงค์อันทนทานที่ปล้นมาจากทหาร ห่วงหนังและซองปืนมากมายของมันมีประโยชน์ในการขนเครื่องไม้เครื่องมือต่างๆ <br><li>เริ่มต้นด้วยขวานเล็ก<b>พิเศษ 2 เล่ม</b></li><li>เพิ่มจำนวนขวานเล็กที่ถือได้สูงสุดอีก <b>2</b> เล่ม</li>","name":"เข็มขัดทหารราบ","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"น้ำยาเหนือธรรมชาติที่เรืองแสงรางๆ ในแสงอันเป็นลางสังหรณ์<br><li>คุณจะเห็นออร่าของเหยื่อที่ถูกตีเป็นเวลา <b>5 วินาที</b></li>","name":"น้ำยาเรืองแสง","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"หัวขวานเล็กเปรอะเปื้อนไปด้วยสารสกปรกซึ่งทำให้ทุกคนที่สัมผัสมันต้องเจ็บปวดกับอาการหมดแรง<br><li>เป้าหมายที่ถูกโจมตีจะติดเอฟเฟกต์สถานะ<b><i>เหวอะหวะ</i></b>และ<b><i>เลือดท่วม</i></b>จนกว่าจะได้รับการรักษาจนหายดี</li><li>ไม่ทับซ้อน</li>","name":"หัวขวานเปรอะเปื้อน","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"รูปปั้นสุนัขจิ้งจอกที่แกะมาหยาบๆ นี้ยาวไม่กี่นิ้ว เป็นสิ่งเตือนใจว่าการซ่อนตัวและความฉลาดหลักแหลมนั้นก็ให้ผลดีไม่แพ้กำลังกายดิบๆ<br><li>หลังจากรีโหลดแล้วจะได้รับเอฟเฟกต์สถานะ<i><b>ตรวจไม่พบ</b></i>เป็นเวลา <b>15 วินาที</b></li>","name":"จิ้งจอกไม้","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"หัวขวานเล็กใสราวกับแก้วที่หลอมมาจากม่านหมอกเอง คมขวานนั้นอุ่นและกังวาลด้วยพลังของเอนทิตี<br><li>การใช้ขวานเล็กโจมตีโดนจะทำให้ผู้รอดชีวิตอยู่ในสภาวะใกล้ตายทันที</li><li>กำหนดจำนวนขวานเล็กที่ถือได้สูงสุดเป็น <b>1</b> เล่ม</li>","name":"หัวขวานสีรุ้ง","flavor":"\\"แก้วส่องประกายนี้สับผ่านเนื้อหนังและวิญญาณ\\"","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"ที่พันซึ่งเอามาจากทหารที่ตายแล้ว มันช่วยปกป้องและพยุงข้อเท้ากับขาท่อนล่าง<br><li>เดอะฮันเทรสเคลื่อนที่ด้วยความเร็ว <b>4.6 ม./วิ.</b> เมื่อไม่มีขวานเล็ก</li>","name":"สนับแข้งของทหาร","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"น้ำมันเหม็นเน่าที่ใช้เป็นสารหล่อลื่นคุณภาพต่ำ<br><br><li>ลดคูลดาวน์ของเลื่อย<b>เล็กน้อย</b>เมื่อโจมตีผู้รอดชีวิตสำเร็จ</li>","name":"น้ำมันพืช","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"หัวเทียนสำหรับเลื่อย<br><br><li>อัตราเติมชาร์จ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ปลั๊กประกายไฟ","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"ตะไบที่ใช้ลับโซ่ของเลื่อย<br><li>ระยะเวลาของความเกรี้ยวกราด<b>ลดลงเล็กน้อย</b></li>","name":"ตะไบเลื่อยไฟฟ้า","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"เครื่องกลที่จำกัดจำนวนน้ำมันเชื้อเพลิงที่เครื่องยนต์ขนาดเล็กเผาผลาญได้ต่อครั้ง ทำให้ความเร็วอยู่ในระดับคงที่และปลอดภัย<br><br><li>เลื่อยไฟฟ้าจะไม่ทำให้อยู่สถานะใกล้ตายทันที</li><li>ได้รับแต้มเลือดเพิ่ม <b>100%</b> ในอีเวนท์ทำคะแนนด้วยเลื่อยไฟฟ้า</li>","name":"ตัวจำกัดความเร็ว","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"เพิ่มแก๊สเข้าไปในระบบเผาไหม้ เพื่อทำให้สตาร์ทเครื่องได้เร็วและแรง<br><br><li>อัตราเติมชาร์จ<b>เพิ่มขึ้นปานกลาง</b></li>","name":"หลอดไพรเมอร์","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"บาร์อะไหล่ชนิดทนทานสำหรับโซ่ที่ยาวขึ้น<br><br><li>จำนวนการเร่งเครื่องที่ใช้ได้ก่อนจะเกรี้ยวกราด<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"แถบนำอย่างยาว","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"ตัวเลื่อยไฟฟ้าเต็มไปด้วยรอยขีดข่วนที่เกิดจากใบมีดลนไฟ ความทรงจำของการก่นด่าทำให้มือเลื่อยเต็มไปด้วยความกลัวการล้มเหลว<br><br><li>ความเร็วการขยับของเลื่อยไฟฟ้าจะ<b>เพิ่มขึ้นเล็กน้อย</b></li><li>เวลาชาร์จจะ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"รอยขีดข่วนของมีด","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"ท่อไอเสียที่ทำจากท่อแก๊สสีดำ<br><br><li>ระยะเวลาเกรี้ยวกราด<b>ลดลงปานกลาง</b></li>","name":"ผ้าพันคอทำมือ","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"พริกเผ็ดจนควันออกหูถ้วยโตที่จะทำให้คุณสดชื่นและแข็งแกร่งต่อไป<br><br><li>ระยะเวลาการพุ่งเมื่อใช้โทเค่น<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ระยะที่กวาดเลื่อยไฟฟ้าโดน<b>เพิ่มขึ้นเล็กน้อย</b></li><br>","name":"พริก","flavor":"\\"ข้ามีบาร์บีคิวเด็ดๆ อยู่นี่!\\" -เดรย์ตัน ซอเยอร์","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"ของไหลเยิ้มสีเหลืองขุ่นที่พวกซอเยอร์ผสมขึ้น ใช้สำหรับงานหล่อลื่นอเนกประสงค์ในบ้าน<br><br><li>จำนวนการเร่งเครื่องที่ใช้ได้ก่อนเกรี้ยวกราด<b>เพิ่มขึ้นปานกลาง</b></li>","name":"จาระบี","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"ตัวเลื่อยไฟฟ้าเต็มไปด้วยรอยตะปุ่มตะป่ำ เป็นโทษทัณฑ์จากสัตว์ร้ายแห่งความมืดที่อาศัยอยู่ในม่านหมอก ความทรงจำของการก่นด่าอันรุนแรงทำให้มือเลื่อยเต็มไปด้วยความกลัวการล้มเหลว<br><br><li>ความเร็วการขยับของเลื่อยไฟฟ้าจะ<b>เพิ่มขึ้นปานกลาง</b></li><li>เวลาชาร์จจะ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"รอยกัดของสัตว์ร้าย","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"โซ่เลื่อยที่มีฟันขนาดใหญ่ผิดปกติ ทำให้เหยื่อพิการแม้จะได้รับการรักษา<br><li>ผู้รอดชีวิตที่ถูกโซ่ตีจะติดเอฟเฟกต์สถานะ<b>เหวอะหวะ</b>","name":"โซ่สยอง","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"น้ำมันสูตรเฉพาะสำหรับเลื่อย สารพิเศษช่วยทำให้ไม่กินน้ำมัน<br><br><li>การใช้เลื่อยไฟฟ้าตีผู้รอดชีวิตล้มลงขณะไม่มีผู้รอดชีวิตคนอื่นอยู่ในรัศมีความน่ากลัวของคุณจะซ่อนออร่าของผู้รอดชีวิตเป็นเวลา <b>20 วินาที</b></li>","name":"สารหล่อลื่นจากร้านค้า","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"โซ่เส้นนี้เปื้อนสารสกปรกที่ใครแตะเข้าจะอ่อนกำลังลง<br><br><li>การตีด้วยเลื่อยไฟฟ้าทำให้ผู้รอดชีวิตทิ้งไอเท็มออกมา</li>","name":"โซ่เปรอะเปื้อน","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"เครื่องมือที่เพิ่มความเว้าให้ความลึก ทำให้เลื่อยเจาะเข้า \\"ไม้\\" ลึกขึ้น<br><li><b>เพิ่ม</b>จำนวนชาร์จ</li><li>เวลาชาร์จ<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ความเร็วสูงสุดในการกวาดเลื่อยไฟฟ้า<b>ลดลงเล็กน้อย</b></li>","name":"คราดฝังลึก","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"แชสซีเลื่อยไฟฟ้าที่น้ำหนักเบาและทนทานพร้อมบาร์ที่สั้นลง ทำให้ใช้เลื่อยไฟฟ้าง่ายขึ้น<br><br><li>ขณะเร่งเครื่องจะเห็นออร่าของผู้รอดชีวิตที่อยู่ในระยะ <b>8 เมตร</b></li>","name":"แชสซีเบา","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"โซ่เลื่อยนี้เต็มไปด้วยสนิมเขรอะที่ทำให้อาการบาดเจ็บรักษายากเป็นพิเศษ<br><br><li>ผู้รอดชีวิตที่บาดเจ็บจากเลื่อยไฟฟ้าจะติดเอฟเฟกต์สถานะ<b><i>ผุพัง</i></b>เป็นเวลา <b>90 วินาที</b></li><li>ไม่ทับซ้อน</li>","name":"โซ่สนิมเขรอะ","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"พริกสุดจี๊ดจ๊าดถ้วยโตที่โด่งดังขึ้นมาเพราะเนื้อชั้นเลิศ<br><br><li>การพุ่งเมื่อใช้โทเค่น<b>เพิ่มขึ้นปานกลาง</b></li><li>ระยะโจมตีของเลื่อยไฟฟ้าเพิ่มเติม<b>เพิ่มขึ้นปานกลาง</b></li><br>","name":"พริกอร่อยได้โล่","flavor":"\\"ความลับอยู่ที่เนื้อ\\" -เดรย์ตัน ซอเยอร์","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"เนื้ออ่อนเยาว์เรียบเนียนแล่บาง เส้นเลือดแวววาวด้วยแสงเรื่องเปล่งปลั่งราวมีชีวิตไหลเวียนอยู่ภายใน<br><br><li>การตีผู้รอดชีวิตด้วยเลื่อยไฟฟ้าจะเติมชาร์จให้มัน</li><li>จำกัดระยะเวลาเกรี้ยวกราดให้สูงสุดที่ 8 วินาที</li><br>","name":"เนื้อสีรุ้ง","flavor":"\\"มีช่วงเวลาที่เราไม่อยากเชื่อว่าสิ่งที่เกิดขึ้นเป็นเรื่องจริง ลองหยิกตัวเองดูแล้วคุณจะรู้ว่ามันเรื่องจริง\\" — แพม โจนส์","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"คู่มือที่วาดขึ้นหยาบๆ เพื่อสอนการปรับแต่งคาร์บูเรเตอร์ของเลื่อยไฟฟ้า<br><li>ใช้ชาร์จทั้งหมดโดยอัตโนมัติเมื่อใช้วิ่งเลื่อยไฟฟ้า</li><li>ระยะเวลาพุ่งโซ่<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ความเร็วสูงสุดในการกวาดเลื่อยไฟฟ้า<b>ลดลงเล็กน้อย</b></li>","name":"คู่มือการปรับคาบูเรเตอร์","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"เสื้อลายทางสีส้มและเหลืองของเด็กชาย ปักชื่อว่า \\"เจสซี\\"<br>ขณะผู้รอดชีวิตอยู่ใน<b>โลกแห่งความฝัน</b>:<li>การลดความคืบหน้าของ<i>การรักษา</i>และ<i>การซ่อมแซม</i>จะ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เสื้อขนสัตว์","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"บล็อกไม้สีขาวและน้ำเงิน มีภาพของลูกแกะขนปุยสองตัวกำลังเล็มหญ้าอยู่และอักษรตัว \\"S\\"<li>หลังจากผู้รอดชีวิตดำเนินการกับ<b>บ่วงความฝัน</b>หรือ<b>แท่นไม้ความฝัน</b> ผู้รอดชีวิตจะติด<b>เอฟเฟกต์สถานะตาบอด</b>เป็นเวลา 30 วินาที</li>","name":"บล็อกไม้รูปแกะ","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"ภาพวาดไร้ลายเซ็น เห็นได้ชัดว่าเป็นฝีมือของเด็กน้อย<li>ได้รับ<b>แต้มเลือดโบนัสพิเศษ 200 แต้ม</b>ในหมวดหมู่<b>ความเจ้าเล่ห์</b>เมื่อผู้รอดชีวิตทำให้<b>บ่วงความฝัน</b>เริ่มทำงาน</li><li>ความเร็วที่ลดลงของผู้รอดชีวิตเนื่องจาก<b>บ่วงความฝัน</b>จะ<b>ลดลงอย่างมาก</b></li>","name":"ภาพวาดของเด็กน้อย","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"คราดขนาดเล็ก เครื่องมือจำเป็นของคนสวนที่ดีทุกคน<br>แทนที่<b>บ่วงความฝัน</b>ด้วย<b>แท่นไม้ความฝัน</b><li>7 <b>โทเค่นความฝัน</b></li>","name":"คราดทำสวน","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"เครื่องมือประดิษฐ์เอง ใช้ช่วยในการเล็มพุ่มไม้<li>แทนที่<b>บ่วงความฝัน</b>ด้วย<b>แท่นไม้ความฝัน</b></li><li>7 <b>โทเค่นความฝัน</b></li><li>เมื่อดำเนินการกับ<b>แท่นไม้ความฝัน</b> <i>เดอะไนท์แมร์</i>จะมองเห็นออร่าของผู้รอดชีวิตเป็นเวลา <b>4 วินาที</b></li>","name":"กรงเล็บรุ่นต้นแบบ","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"เชือกใช้ภายนอกอันทนทาน ใช้มัดทุกอย่างได้โดยสะดวก<br>ขณะที่ผู้รอดชีวิตอยู่ใน<b>โลกแห่งความฝัน</b>:<li>จะสามารถได้ยินเสียงซ่อมเครื่องปั่นไฟจากระยะไกลออกไป <b>8 เมตร</b></li>","name":"เชือกใช้ภายนอก","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"ภาพที่สเก็ตช์หยาบๆ ด้วยถ่านไม้ ลงชื่อ แนนซี ฮ.<li>ความเร็วการฟื้นพลัง<b>ฉายภาพความฝัน</b>ของผู้รอดชีวิตแต่ละคนที่อยู่ใน<b>โลกแห่งความฝัน</b><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ภาพสเก็ตช์ของแนนซี","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"ชุดสีเขียวพร้อมโบนุ่มนิ่มสีขาวของเด็กหญิง<br>ขณะผู้รอดชีวิตอยู่ใน<b>โลกแห่งความฝัน</b>:<li>การลดความคืบหน้าของ<i>การรักษา</i>และ<i>การซ่อมแซม</i>จะ<b>เพิ่มขึ้นเล็กน้อย</b></li><li>เมื่อการตรวจสอบทักษะ<i>การรักษา</i>หรือ<i>การซ่อมแซม</i>ล้มเหลว <i>เดอะไนท์แมร์</i>จะมองเห็นออร่าของผู้รอดชีวิตเป็นเวลา <b>3 วินาที</b></li>","name":"ชุดสีเขียว","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"บล็อกไม้สีขาวและม่วง มีภาพของแมวนอนหลับอยู่และอักษรตัว \\"C\\"<li>หลังจากผู้รอดชีวิตดำเนินการกับ<b>บ่วงความฝัน</b>หรือ<b>แท่นไม้ความฝัน</b> ผู้รอดชีวิตจะติด<b>เอฟเฟกต์สถานะเลือดท่วม</b>เป็นเวลา 60 วินาที</li>","name":"บล็อกไม้รูปแมว","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"บล็อกไม้สีขาวและแดง มีภาพของยูนิคอร์นกำลังเยื้องย่างและอักษรตัว \\"U\\"<li>หลังจากผู้รอดชีวิตดำเนินการกับ<b>บ่วงความฝัน</b>หรือ<b>แท่นไม้ความฝัน</b> ผู้รอดชีวิตจะติด<b>เอฟเฟกต์สถานะตาบอด</b>เป็นเวลา 60 วินาที</li>","name":"บล็อกไม้รูปยูนิคอร์น","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"โซ่สนิมเขรอะแต่ทนทานที่ใช้ยึดที่นั่งชิงช้าอย่างแน่นหนา<br>ขณะที่ผู้รอดชีวิตอยู่ใน<b>โลกแห่งความฝัน</b>:<li>เสียงฝีเท้าของพวกเขาจะ<b>ดังขึ้น 50%</b></li>","name":"โซ่ชิงช้า","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"ภาพวาดตัวละครตัวหนึ่ง ผลงานที่แนนซี โฮลบรูค วาดไว้เมื่อเรียนอยู่ที่แบดแฮม และเก็บรักษาไว้เป็นความทรงจำ<li>ความเร็วการฟื้นพลัง<b>โลกแห่งความฝัน</b>ของผู้รอดชีวิตแต่ละคนที่อยู่ใน<b>โลกแห่งความฝัน</b><b>เพิ่มขึ้นปานกลาง</b></li>","name":"งานชิ้นเอกของแนนซี","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"เชือกกระโดดคู่อย่างยาว เปื้อนเปรอะไปด้วยการใช้งานนานหลายปี<br>ขณะที่ผู้รอดชีวิตอยู่ใน<b>โลกแห่งความฝัน</b>:<li>เสียงร้องด้วยความเจ็บปวดของพวกเขาจะ<b>ดังขึ้น 50%</b></li>","name":"เชือกกระโดด","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"ชุดสีน้ำเงินซีดพร้อมลูกไม้สีขาวของเด็กหญิง ด้านหน้าเป็นรอยฉีกขาดขนาดใหญ่<br>ขณะผู้รอดชีวิตอยู่ใน<b>โลกแห่งความฝัน</b>:<li>การลดความคืบหน้าของ<i>การรักษา</i>และ<i>การซ่อมแซม</i>จะ<b>เพิ่มขึ้นเล็กน้อย</b></li><li>เมื่อการตรวจสอบทักษะ<i>การรักษา</i>หรือ<i>การซ่อมแซม</i>ล้มเหลว <i>เดอะไนท์แมร์</i>จะมองเห็นออร่าของผู้รอดชีวิตเป็นเวลา <b>4 วินาที</b></li>","name":"ชุดสีน้ำเงิน","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"กระปุกยาเปล่าซึ่งเคยบรรจุยาโซเนรัล<li>ผู้รอดชีวิตจะมองเห็น<i>เดอะไนท์แมร์</i>เป็นช่วงๆ ที่ระยะทางลดลงจาก <b>12 เมตร</b>เป็น <b>24 เมตร</b></li><li><i>ผู้รอดชีวิต</i>จะมองไม่เห็นเดอะไนท์แมร์เมื่ออยุ่ไกลเกินกว่า <b>24 เมตร</b></li><li><i>ผู้รอดชีวิต</i>ที่ตื่นอยู่จะมองไม่เห็นเดอะไนท์แมร์ขณะกำลังแบกผู้รอดชีวิต</li>","name":"กระปุกยา","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"กระป๋องใส่สารระเหยไวไฟ<li>แทนที่<b>บ่วงความฝัน</b>ด้วย<b>แท่นไม้ความฝัน</b></li><li>7 <b>โทเค่นความฝัน</b></li><li>เมื่อดำเนินการกับ<b>แท่นไม้ความฝัน</b> <i>เดอะไนท์แมร์</i>จะมองเห็นออร่าของผู้รอดชีวิตเป็นเวลา <b>6 วินาที</b></li>","name":"ทินเนอร์ผสมสี","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"ภาพถ่ายขนาดใหญ่ซึ่งถ่ายที่โรงเรียนอนุบาลแบดแฮม เป็นภาพอันสดใสของชั้นเรียนในปี 1994-1995<li>การใช้พลัง<b>ฉายภาพความฝัน</b>ไม่อาจยกเลิกได้อีกต่อไป</li><li>เครื่องปั่นไฟทั้งหมดจะสำรอกเลือดออกมาขณะที่<b>เดอะไนท์แมร์</b>ใช้พลัง<b>ฉายภาพความฝัน</b></li><li>ภาพฉายของ<i>เดอะไนท์แมร์</i>จะไม่ปรากฏขึ้นขณะใช้งานการ<b>ฉายภาพความฝัน</b></li>","name":"ภาพถ่ายชั้นเรียน","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"บล็อกไม้ที่เต็มไปด้วยรอยขีดข่วนและรอยไหม้อย่างลึก เหลือเพียงอักษรตัว \\"Z\\" ที่ยังพอมองออกอยู่<li>หลังจากผู้รอดชีวิตดำเนินการกับ<b>บ่วงความฝัน</b>หรือ<b>แท่นไม้ความฝัน</b> ผู้รอดชีวิตจะติดเอฟเฟกต์สถานะ<b>เลือดท่วม</b>เป็นเวลา <b>60 วินาที</b></li><li>หากยังแข็งแรงอยู่ ผู้รอดชีวิตจะเลือดออกเป็นระยะเวลาเท่ากับ<b>เอฟเฟกต์สถานะเลือดท่วม</b></li>","name":"บล็อกไม้รูปตัว \\"Z\\"","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"แปรงทาสีขนาดใหญ่ เปียกชุ่มไปด้วยสีแดงเข้ม<li>ผู้รอดชีวิตทุกคนจะเริ่มต้นเกมใน<b>โลกแห่งความฝัน</b></li><li>การตรวจสอบทักษะล้มเหลวจะไม่ปลุกผู้รอดชีวิตที่อยู่ใน<b>โลกแห่งความฝัน</b></li>","name":"แปรงทาสีแดง","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"กล่องกระดาษสีดำเต็มไปด้วยภาพถ่าย<br>ขณะที่ผู้รอดชีวิตอยู่ใน<b>โลกแห่งความฝัน</b>:<li>ประตูทางออกที่เพิ่งถูกเปิดจะถูกบล็อกเป็นเวลา <b>15 วินาที</b></li>","name":"กล่องดำ","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"กล่องจิ๊กซอว์รุ่นปรับแต่ง: ชิ้นส่วนที่หล่อลื่นทำให้การค้นหาลำบากยิ่งขึ้น<br><li>โอกาสเปิดการตรวจสอบทักษะเมื่อกระทำการกับกล่องจิ๊กซอว์<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"จาระบีโรงงาน","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"สัญลักษณ์ของวิธีชีวิตอันพังทลาย การหวนคำนึงถึงตัวตนเดิมของตนทำให้เธอแน่วแน่<br><li>คูลดาวน์การลอบโจมตีที่พลาด<b>ลดลงเล็กน้อย</b></li>","name":"เข็มฉีดยาแตก","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"แฟ้มประวัติของชายผู้เป็นมะเร็ง ทำให้ผู้อ่านเต็มไปด้วยความหวาดผวาและร้อนรน<br><li>เวลาชาร์จการลอบโจมตี<b>ลดลงเล็กน้อย</b></li>","name":"แฟ้มประวัติของจอห์น","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"สายหนังที่รัดผ้าให้อยู่นิ่ง ทำให้เคลื่อนที่ได้คล่องตัวขึ้น<br><li>เวลาที่ใช้ในการย่อ<b>ลดลงเล็กน้อย</b></li>","name":"สายรัดออกรบ","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"เทปบันทึกเสียงของจิ๊กซอว์ที่อธิบายกฎของเกมให้อาแมนด้าฟัง การหวนคำนึงถึงตัวตนเดิมของตนทำให้เธอแน่วแน่<br><li>เวลาชาร์จการลอบโจมตี<b>ลดลงเล็กน้อย</b></li><li>คูลดาวน์การลอบโจมตีที่พลาด<b>ลดลงเล็กน้อย</b></li>","name":"วิดีโอเทป","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"กับดักหมีสลับทางรุ่นปรับแต่ง: ใบมีดคมกริบที่ติดอยู่ด้านในกับดักจะทำให้เหยื่อโดนตัดฉีกขาดในทุกการเคลื่อนไหว<br><li>ผู้รอดชีวิตที่ติดอยู่ในกับดักหมีสลับทางจะติดเอฟเฟกต์สถานะ<b><i>เลือดท่วม</b></i></li>","name":"มีดอเนกประสงค์","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"กล่องจิ๊กซอว์รุ่นปรับแต่ง: การเพิ่มใบมีดโกนลูกโซ่เข้าไปยิ่งทำให้เป็นไปไม่ได้ที่จะขยับไปมาในกล่องจิ๊กซอว์โดยที่ข้อมือไม่โดนบาดไปเสียก่อน<br><li>โอกาสเปิดการตรวจสอบทักษะเมื่อกระทำการกับกล่องจิ๊กซอว์<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ลวดหนาม","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"กล่องไม้ลงกลอนพร้อมบุด้วยผ้าต่วน มอบไว้เป็นส่วนหนึ่งของพินัยกรรม<br><li><b>เพิ่ม</b>กับดักหมีสลับทางที่มีอยู่ขึ้นอีก <b>1</b> ชิ้น<br>","name":"พินัยกรรม","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"กับดักหมีสลับทางรุ่นปรับแต่ง: หน้ากากผ้าอย่างหนา ชุบด้วยยาระงับประสาท ทำให้เป้าหมายหายใจไม่ออกบ้างเล็กน้อยจึงตั้งสมาธิได้ลำบาก<br><li>ผู้รอดชีวิตที่ติดอยู่ในกับดักหมีสลับทางจะติดเอฟเฟกต์สถานะ<b><i>ตาบอด</b></i></li><li>ไม่ส่งผลต่อไฮไลท์ของกล่องจิ๊กซอว์</li>","name":"หน้ากาก","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"กับดักหมีสลับทางรุ่นปรับแต่ง: ยาพิษที่ไม่ทำให้ถึงแก่ชีวิต แต่ทำให้ร่างกายอ่อนแรงลงจนแทบจะฟื้นตัวขึ้นไม่ได้ไม่ว่าจะด้วยวิธีใดก็ตาม<br><li>ผู้รอดชีวิตที่ติดอยู่ในกับดักหมีสลับทางจะติดเอฟเฟกต์สถานะ<b><i>หมดกำลัง</b></i></li>","name":"พิษปลดปล่อยช้า","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"กับดักหมีสลับทางรุ่นปรับแต่ง: เดือยปากอันเต็มไปด้วยสนิมเขรอะที่ทำให้อาการบาดเจ็บรักษายากเป็นพิเศษ<br><li>ผู้รอดชีวิตที่บาดเจ็บและติดอยู่ในกับดักหมีสลับทางจะติดเอฟเฟกต์สถานะ<b><i>เหวอะหวะ</b></i></li>","name":"พันธนาการขึ้นสนิม","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"แบบกับดักที่วางไว้บนกระดาษและจิ๊กซอว์ได้เขียนคำอธิบายไว้ ทั้งน่าขยะแขยงและน่าตื่นตาตื่นใจ<br><li><b>เพิ่ม</b>กล่องจิ๊กซอว์ที่มีอยู่ขึ้นอีก <b>1</b> กล่อง</li>","name":"ภาพสเก็ตช์ของจิ๊กซอว์","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"กล่องจิ๊กซอว์รุ่นปรับแต่ง: การเพิ่มใบมีดโกนลูกโซ่เข้าไปยิ่งทำให้เป็นไปไม่ได้ที่จะขยับไปมาในกล่องจิ๊กซอว์โดยที่ข้อมือไม่โดนบาดไปเสียก่อน<br><li>โทษของการตรวจสอบทักษะกับกล่องจิ๊กซอว์ที่ล้มเหลว<b>เพิ่มขึ้นมหาศาล</b></li>","name":"ใบมีดโกนลูกโซ่","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"ชิ้นส่วนกลไกเล็กน้อยที่เป็นตัวช่วยสร้างกล่องจิ๊กซอว์ที่ท้าทายและทำให้ติดตั้งกับดักหมีสลับทางได้อย่างง่ายดายยิ่งขึ้น<br><li>เวลาที่ผู้รอดชีวิตใช้ในการค้นหากล่องจิ๊กซอว์<b>เพิ่มขึ้นเล็กน้อย</b></li><li>เวลาในการใส่กับดักหมีสลับทาง<b>ลดลงเล็กน้อย</b></li>","name":"ถุงอุปกรณ์","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"ตัวจับเวลาที่ถูกปรับแต่ง ลวดสปริงในกลไกทำให้เฟืองหมุนเร็วขึ้น<br><li>ตัวจับเวลาตายของกับดักหมีสลับทาง<b>ลดลงปานกลาง</b></li>","name":"ตัวจับเวลาตุกติก","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"ภาพสเก็ตช์แบบกับดักอย่างละเอียดบนแผ่นกระดาษ ทั้งน่าขยะแขยงและน่าตื่นตาตื่นใจ<br><li><b>เพิ่ม</b>กล่องจิ๊กซอว์ที่มีอยู่ขึ้นอีก <b>1</b> กล่อง</li><li>ตัวจับเวลาตายของกับดักหมีสลับทาง<b>เพิ่มขึ้นปานกลาง</b></li>","name":"แผนของจิ๊กซอว์พร้อมคำอธิบาย","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"ชิ้นส่วนกลไกชุดนี้้เป็นตัวช่วยสร้างกล่องจิ๊กซอว์ที่ท้าทายเป็นอย่างมากและทำให้ติดตั้งกับดักหมีสลับทางได้อย่างง่ายดายยิ่งขึ้น<br><li>เวลาที่ผู้รอดชีวิตใช้ในการค้นหากล่องจิ๊กซอว์<b>เพิ่มขึ้นอย่างมาก</b></li><li>เวลาในการใส่กับดักหมีสลับทางกับผู้รอดชีวิต<b>ลดลงปานกลาง</b></li>","name":"ลังอุปกรณ์","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"กล่องโลหะดำทะมึนกล่องหนึ่งที่ใส่มีดและอุปกรณ์การแพทย์ต่างๆ อย่างเช่นผ้าพันแผลและผ้าประคบ รอยบาดลึกจะลดความเครียดและช่วยกระตุ้นประสาทสัมผัส<br><li><b>ปิดใช้งาน</b>ความสามารถของเดอะพิกเพื่อดูออร่าของกล่องจิ๊กซอว์</li><li><b>ได้รับการแจ้งเตือน</b>เมื่อผู้รอดชีวิตถอดกับดักหมีสลับทางออกได้</li><li>เปิดเผยออร่าของผู้รอดชีวิตที่กำลังถอดกับดักหมีสลับทางให้คุณเห็นเป็นเวลา <b>6 วินาที</b></li>","name":"ความลับของอาแมนด้า","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"ไม่ใช่ทุกเกมที่จำเป็นจะต้องมีกฎเกณฑ์เดียวกันเสมอไป<br><li><b>ปิดใช้งาน</b>ความสามารถในการมองเห็นไฮไลท์ของกล่องจิ๊กซอว์ของผู้รอดชีวิตจนกว่ากับดักจะถูกเปิดใช้งาน</li>","name":"ชุดกฎหมายเลข 2","flavor":"\\"ฟังให้ดี นี่คือกฎการเล่น\\" -จิ๊กซอว์","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"จดหมายขู่กรรโชกถึงอาแมนด้า ทำให้ผู้อ่านเต็มไปด้วยความเกรี้ยวกราดและมีสมาธิ<br><li>ในขณะย่อ จะมองเห็นโครงร่างของผู้รอดชีวิตที่อยู่ภายในระยะ 12 เมตร</li><li><b>ลด</b>กับดักหมีสลับทางที่มีอยู่ลงไป <b>3</b>เครื่อง</li><li><b>ลด</b>กล่องจิ๊กซอว์ที่มีอยู่ลงไป <b>2</b>กล่อง</li>","name":"จดหมายถึงอาแมนด้า","flavor":"\\"อาแมนด้า คุณอยู่กับซีซิลในคืนที่จิลล์เสียกิดเดี้ยนไป คุณฆ่าลูกของพวกเขา คุณรู้ เหมือนที่ผมรู้\\" -จดหมายถึงอาแมนด้า","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"พื้นรองเท้าขึ้นราที่ให้ความสบายแก่เท้าอันเมื่อยล้า<br><li>ความเร็วการเคลื่อนที่ขณะบรรจุขวดใหม่เพิ่มขึ้น<b>ปานกลาง</b></li>","name":"พื้นรองเท้าเหม็นโฉ่","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"ขนนกสีส้มอ่อนก้านหนึ่ง ให้สัมผัสนุ่มนิ่ม<br><li>เวลาคูลดาวน์ระหว่างการขว้างขวดลดลง<b>เล็กน้อย</b>ทับซ้อน</li>","name":"ขนนกโรบิน","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"ส่วนหนึ่งของชุดตัวตลก ตัดส่วนนิ้วมือออกทำให้ขยับได้ดียิ่งขึ้น\\n<li>เปลี่ยนวิถีโค้งของขวดที่ขว้างออกไป</li>\\n","name":"ถุงมือพาเหรดเปิดนิ้ว","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"สารประกอบอินทรีย์ที่ใช้เป็นยาสลบ<br><li>ระยะเวลาของเอฟเฟกต์ติดพิษเพิ่มขึ้น<b>เล็กน้อย</b></li>","name":"ขวดปาร์ตี้","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"จุกคอร์กอันแข็งแรงที่ปิดขวดยาบำรุงส่งท้ายไว้ได้อย่างดีเยี่ยม<br><li>เวลารีโหลดลดลง<b>ปานกลาง</b></li>","name":"จุกไม้คอร์กอย่างหนา","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"ขวดเปล่าเหนอะคราบเลือดและคราบน้ำตาล<br><li>เริ่มเกมด้วยขวด<b>เพิ่มเติม 1 ขวด</b> </li><li>เพิ่มจำนวนขวดที่ถือได้สูงสุดอีก <b>1</b> ขวด</li>","name":"ขวดน้ำอัดลมเหนียวเหนอะ","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"ขนนกสีดำส่องประกายมรกต ให้สัมผัสนุ่มนิ่มมาก<br><li>เวลาคูลดาวน์ระหว่างการขว้างขวดลดลง<b>ปานกลาง</b></li>","name":"ขนนกกิ้งโครง","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"สารประกอบเคมีระเหยง่ายซึ่งจะทำให้ทางเดินหายใจเกิดการระคายเคืองแต่เพิ่มการดูดซึมยาแก้พิษส่งท้าย<br><li>ระยะเวลาของเอฟเฟกต์สถานะกระปรี้กระเปร่าเพิ่มขึ้น<b>ปานกลาง</b></li>","name":"เหยือกตัวทำละลาย","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"ของเหลวใสไวไฟซึ่งจะทำให้มึนงงเมื่อสูดดม<br><li>เป้าหมายที่ติดพิษจะติดเอฟเฟกต์สถานะ<b>ตาบอด</b>เป็นเวลา <b>30 วินาที</b></li>","name":"กระป๋องน้ำมันก๊าด","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"คลาสสิกตลอดกาล อะไรๆ ที่คุณเห็นจะไม่เหมือนเดิมอีกต่อไป<br><li>ทำให้กลุ่มควันของยาบำรุงส่งท้ายเป็นสีเหลือง</li><li>ทำให้กลุ่มควันของยาแก้พิษส่งท้ายเป็นสีม่วง</li>","name":"ม้วนวิดีโอโป๊","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"ของเหลวข้นไร้กลิ่นซึ่งมีฤทธิ์กัดกร่อนสูง<br><li>เป้าหมายที่ติดพิษจะติดเอฟเฟกต์สถานะ<b>เหวอะหวะ</b></li>","name":"ขวดเล็กใส่กรดซัลฟูริก","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"สารเคมีรุนแรงที่ก่อให้เกิดการระคายเคือง แผลไหม้ และทำให้ปอดเสียหายได้<br>เป้าหมายที่ติดพิษจะได้รับโทษ<b>ถูกกีดขวาง</b>เพิ่มเติม<b>ปานกลาง</b>","name":"ขวดแก้วใส่สารฟอกขาว","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"สารประกอบเคมีกลิ่นฉุนมีส่วนผสมของแอมโมเนีย เพียงฟืดเดียวก็เพียงพอที่จะเขย่าคนที่เฉื่อยชาที่สุด<br><li>พื้นที่ของแก๊สแก้พิษส่งท้ายเพิ่มขึ้น<b>ปานกลาง</b> </li>","name":"จิตวิญญาณของฮาตส์ฮอร์น","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"สารประกอบอินทรีย์กลิ่นหวานอันมีฤทธิ์ของยาสลบรุนแรง<br><li>ขยายพื้นที่เอฟเฟกต์ของแก๊สยาบำรุงส่งท้ายออกไป<b>ปานกลาง</b></li>","name":"ขวดคลอโรฟอร์ม","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"ส่วนหนึ่งไว้แต่งหน้า ส่วนหนึ่งไว้ใส่ยาบำรุง สารประกอบลึกลับที่ทำให้ยาแก้พิษเข้มข้นขึ้น<br><li>ระยะเวลาของเอฟเฟกต์สถานะกระปรี้กระเปร่าเพิ่มขึ้น<b>อย่างมาก</b></li>","name":"ชุดเครื่องสำอางสีฉูดฉาด","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"เศษซากที่เหลืออยู่ของช่วงเวลาดีๆ ราคาถูกกับการเมาค้างนรกแตก<br><li>เริ่มเกมด้วย<b>ขวดพิเศษ 2 ขวด</b> </li><li>เพิ่มจำนวนขวดที่ถือได้สูงสุดอีก <b>2</b> ขวด</li>","name":"ขวดเหล้ายินถูกๆ","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"สารประกอบอินทรีย์ระเหยได้ดีเยี่ยม มีความเป็นพิษที่ความเข้มข้นระดับนี้<br><li>ระยะเวลาของเอฟเฟกต์ติดพิษเพิ่มขึ้น<b>อย่างมาก</b></li>","name":"อีเทอร์ 15 vol%","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"ชุดนิ้วมือสะสมอันน่าสยดสยองแถมยังไม่ครบชุด เติมเต็มความปรารถนาของเดอะคลาวน์และความสามารถในการประดิษฐ์สารเคมี<br><li>ผู้รอดชีวิตหรือฆาตกรคนใดที่เติมพลังแล้วจะเห็นออร่าของผู้รอดชีวิตและฆาตกรทุกคนภายในรัศมี 16 ม.</li>","name":"กล่องซิการ์","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"นิ้วกลางอันมีค่าของชายร่างใหญ่สักลาย มีรสชาติเหมือนน้ำมันเครื่องจางๆ<br><li>คุณจะมองเห็นออร่าของผู้รอดชีวิตที่ติดพิษหรือกระปรี้กระเปร่าเป็นเวลา <b>6 วินาที</b></li>","name":"นิ้วกลางคนสักลาย","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"นิ้วก้อยอันมีค่าของคนผมแดง มีกลิ่นหอมจางๆ รสชาติเหมือนดอกไม้แห้งอบหอมกับน้ำมันเคลือบเงา<br><li>ผู้รอดชีวิตที่ถูกโจมตีโดยตรงโดยใช้ขวดยาบำรุงส่งท้ายจะติดเอฟเฟกต์สถานะ<b>ปลอดกำบัง</b></li>","name":"นิ้วก้อยคนผมแดง","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"รองเท้าแตะเรียบๆ สวมสบายที่ถอดและใส่ได้อย่างง่ายดาย<li>ความเร็วการเคลื่อนที่ของการหลอกหลอนของยามาโอกะเพิ่มขึ้นเล็กน้อย</li><li>ทับซ้อน</li>","name":"โซริ","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"เครื่องรางที่ทำให้มีความสุขสนุกสนาน<li>ระยะเวลาของการหลอกหลอนของยามาโอกะเพิ่มขึ้นเล็กน้อย</li><li>ทับซ้อน</li>","name":"เครื่องรางแห่งความสุข","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"หนึ่งในนกกระดาษพันตัวสำหรับอธิษฐานให้ฝันเป็นจริง<li>การฟื้นตัวจากพลังการหลอกหลอนของยามาโอกะเพิ่มขึ้นเล็กน้อย</li><li>ทับซ้อน</li>","name":"นกกระเรียนกระดาษ","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"หวีไม้ไผ่ซี่ถี่สำหรับสางผมที่ยุ่งเหยิงได้อย่างอ่อนโยน<li>ความเร็วในการชาร์จเพื่อเปิดใช้งานการหลอกหลอนของยามาโอกะเพิ่มขึ้นเล็กน้อย</li><li>ทับซ้อน</li>","name":"หวีไม้ไผ่ของขวัญ","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"โบว์ผ้าไหมสำหรับรัดผมที่รุงรัง<li>ความเร็วในการชาร์จเพื่อเปิดใช้งานการหลอกหลอนของยามาโอกะเพิ่มขึ้นปานกลาง</li><li>ทับซ้อน</li>","name":"ริบบิ้นรัดผมสีขาว","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"นาฬิกาข้อมือที่หน้าปัดแตกเป็นชิ้นเล็กชิ้นน้อย มีคำว่า \\"ริน\\" เขียนไว้อย่างลวกๆ บนสายรัด<li>การฟื้นตัวจากพลังการหลอกหลอนของยามาโอกะเพิ่มขึ้นปานกลาง</li><li>ทับซ้อน</li>","name":"นาฬิกาผุพังของริน","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"หมวกกีฬาเลอะโคลนติดตราโรงเรียนมัธยมปลาย มีชื่อ \\"ริน\\" ปักอยู่<li>ความเร็วการเคลื่อนที่ของการหลอกหลอนของยามาโอกะเพิ่มขึ้นปานกลาง</li><li>ทับซ้อน</li>","name":"หมวกงานกีฬาเลอะโคลน","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"เครื่องรางที่จะนำโชคดีมาสู่ตัวคุณ<li>ระยะเวลาของการหลอกหลอนของยามาโอกะเพิ่มขึ้นปานกลาง</li><li>ทับซ้อน</li>","name":"เครื่องรางนำโชค","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"ต้นบอนไซใบสีเขียวแกมน้ำเงินแก่ ครั้งหนึ่งเคยเป็นสัญลักษณ์ของธรรมเนียมเก่าแก่ประจำตระกูลยามาโอกะ<li>ความถี่ของการทะลุผ่านได้เองเพิ่มขึ้นเล็กน้อย</li><li>ทับซ้อน</li>","name":"ไม้สนบอนไซ","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"ขลุ่ยผิวสนิมเขรอะที่ส่งเสียงหลอกหลอน<li>การฟื้นตัวจากพลังการหลอกหลอนของยามาโอกะเพิ่มขึ้นอย่างมาก</li><li>ทับซ้อน</li>","name":"ขลุ่ยสนิมเขรอะ","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"เครื่องรางแห่งความสำเร็จ","name":"เครื่องรางแห่งความสำเร็จ","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"กระบังดาบที่สืบทอดมาจากบรรพบุรุษ ประดิษฐ์ขึ้นมาสำหรับตระกูลยามาโอกะโดยเฉพาะ<li>ระยะเวลาการปรากฏตัวขึ้นของการหลอกหลอนของยามาโอกะเพิ่มขึ้นเล็กน้อย</li><li>ความเร็วการเคลื่อนที่ของการหลอกหลอนของยามาโอกะเพิ่มขึ้นเล็กน้อย</li><li>ทับซ้อน</li>","name":"คาตานะ สึบะ","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"รองเท้าในบ้านสวมสะดวก<li>ความเร็วการเคลื่อนที่ของการหลอกหลอนของยามาโอกะเพิ่มขึ้นอย่างมาก</li><li>ทับซ้อน</li>","name":"อุวาบากิเลอะเทอะ","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"หวีสับเปรอะเลือดแห้งกรัง<li>ความเร็วในการชาร์จเพื่อเปิดใช้งานการหลอกหลอนของยามาโอกะเพิ่มขึ้นอย่างมาก</li><li>ทับซ้อน</li>","name":"หวีสับเปื้อนเลือด","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"เครื่องรางอันทรงพลังสำหรับคุ้มกันไม่ให้มีเรื่องไม่ชอบมาพากลใดเป็นอุปสรรคขัดขวางความพากเพียรพยายามของคุณได้<li>ระยะเวลาการหลอกหลอนของยามาโอกะ<b>เพิ่มขึ้นมหาศาล</b></li><li>ความเร็วการเคลื่อนที่ของการหลอกหลอนของยามาโอกะ<b>ลดลงเล็กน้อย</b></li>","name":"เครื่องรางยาคุโยเคะ","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"ฝักของดาบที่สืบทอดมาจากบรรพบุรุษ ประดิษฐ์ขึ้นมาสำหรับตระกูลยามาโอกะโดยเฉพาะ<li>ระยะเวลาการปรากฏตัวขึ้นของการหลอกหลอนของยามาโอกะเพิ่มขึ้นปานกลาง</li><li>ความเร็วการเคลื่อนที่ของการหลอกหลอนของยามาโอกะเพิ่มขึ้นปานกลาง</li>","name":"วากิซาชิ ซายะ","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"กำไลอันทรงพลังที่สาธยายมนตราศักดิ์สิทธิ์<li>ผู้รอดชีวิตทุกคนที่อยู่นอกรัศมีความน่ากลัวจะได้ยินเสียงการล่องหน</li>","name":"กำไลลูกประคำ","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"เศษดอกซากุระแห้ง ครั้งหนึ่งเคยเป็นสัญลักษณ์แห่งมฤตยู<li>ระยะเวลาของการทะลุผ่านได้เองเพิ่มขึ้นเล็กน้อย</li><li>ความถี่ของการทะลุผ่านได้เองเพิ่มขึ้นเล็กน้อย</li>","name":"ดอกซากุระแห้ง","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"แหวนเงินสลักว่า “แก่ลูกสาวสุดที่รัก”<li>ความเร็วการเคลื่อนที่ของการหลอกหลอนของยามาโอกะเพิ่มขึ้นมหาศาล</li><li>ขณะใช้งานการหลอกหลอนของยามาโอกะจะมองไม่เห็นรอยขีดข่วนได้อีก</li>","name":"แหวนจากแม่แก่ลูก","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"แว่นตาของพ่อผู้เป็นมนุษย์เงินเดือนที่ทำงานหนักเกินมนุษย์มนา<li>จะมองเห็นรอยเลือดในขณะใช้งานการหลอกหลอนของยามาโอกะ</li>","name":"แว่นตาของพ่อ","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"เข็มกลัดสีเหลืองสดใสพร้อมหน้ายิ้มดูเป็นมิตร ใช้แทนการกล่าวประชดประชัน<li>การตีผู้รอดชีวิตที่ถูกไฮไลท์โดยสัญชาตญาณฆาตกรขณะกำลังบ้าดีเดือดจะทำให้ติดเอฟเฟกต์สถานะตาบอดเป็นเวลา 60 วินาที</li>","name":"เข็มกลัดหน้ายิ้ม","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"ไม้บรรทัดไม้ที่มีรอยขีดข่วนเป็นสัญลักษณ์แฮช (#) อย่างลึก<li>เวลาที่ต้องใช้ในการเติมเกจพลังให้เต็ม<b>ลดลงเล็กน้อย</b></li>","name":"ไม้บรรทัดถลอก","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"รายการภารกิจก่อกวนไว้ให้ทำจนสำเร็จ สิ่งเตือนใจถึงวันที่สดใสกว่า<li>ระยะเวลาบ้าดีเดือด<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"รายการก่อปัญหา","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"กำไลเชือกถักกว้างสีแดงเทา มองเห็นข้อความ \\"ฟ จ ซ จ\\" ที่ร่างไว้คร่าวๆ ด้วยหมึกเส้นหนาสีดำ<li>ระยะการตรวจจับของสัญชาตญาณฆาตกร<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"กำไลมิตรภาพ","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"ยาเม็ดคาเฟอีนเข้มข้นสูงเพื่อทำให้คุณสมองดีขึ้นในการสอบหรือในกิจกรรมอันเหนื่อยล้า<li>ระยะการตรวจจับของสัญชาตญาณฆาตกร<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ยานอนไม่หลับ","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"ภาพสเก็ตช์คร่าวๆ ของภาพฝาผนังเดอะลีเจียนที่ฉีกออกมาจากสมุด<li>ระยะเวลาบ้าดีเดือด<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ภาพสเก็ตช์ฝาผนัง","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"มิกซ์เทปอันมืดมนและหดหู่ ส่วนใหญ่เป็นเพลงพาวเวอร์บัลลาดและเมโลดี้ที่หม่นหมอง<li>ความเหนื่อยหลังบ้าดีเดือดสิ้นสุด<b>ลดลงเล็กน้อย</b></li>","name":"มิกซ์เทปของจูลี่","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"ไม้บรรทัดไม้ที่สลักชื่อศัตรูเอาไว้อย่างลึก<li>เวลาที่ต้องใช้ในการเติมเกจพลังให้เต็ม<b>ลดลงปานกลาง</b></li>","name":"ไม้บรรทัดสลัก","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"เข็มกลัดสีเหลืองสดใสพร้อมหน้ายิ้มเละเทะที่เคยดูเป็นมิตรมาก่อน สัญลักษณ์ประจำตัวของเหล่าลีเจียน<li>การตีผู้รอดชีวิตที่ถูกไฮไลท์โดยสัญชาตญาณฆาตกรขณะกำลัง<i>บ้าดีเดือด</i>จะทำให้ติดเอฟเฟกต์สถานะ<b><i>เหวอะหวะ</i></b></li>","name":"เข็มกลัดหน้ายิ้มเละเทะ","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"เข็มกลัดทำมือรูปใบหน้าของเหล่าลีเจียน ใช้ในการท้าทายข่มขู่โดยเฉพาะ<li>การตีผู้รอดชีวิตที่ถูกไฮไลท์โดยสัญชาตญาณฆาตกรขณะกำลังบ้าดีเดือดจะทำให้ติดเอฟเฟกต์สถานะผุพังเป็นเวลา 60 วินาที</li>","name":"เข็มกลัดเดอะลีเจียน","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"/ไๆ-มิกซ์เทปเพลงเร็วผาดโผนของเสียงดนตรีที่มีชีวิตชีวาพร้อมจังหวะชวนโยก<li>ระยะการตรวจจับของสัญชาตญาณฆาตกร<b>เพิ่มขึ้นมหาศาล</b></li>","name":"มิกซ์เทปของซูซี่","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"สมุดสเก็ตช์ที่เต็มไปด้วยภาพเปี่ยมจินตนาการและปลุกเร้าอารมณ์ ถ้าไม่นับว่ามันออกจะดูพิลึกไปหน่อย<li>ระยะเวลาของบ้าดีเดือด<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"สมุดสเก็ตช์ภาพที่ขโมยมา","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"ใบมีดเล่มนี้แปดเปื้อนหยดเลือดและคราบไร้อนามัยที่จะทำให้การบาดเจ็บฟื้นฟูได้ยากเป็นพิเศษ<li>เวลาที่ผู้รอดชีวิตต้องใช้ในการฟื้นฟู<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ใบมีดน่ารังเกียจ","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"มิกซ์แทร็กหนักๆ กับจังหวะเจ๋งๆ ไว้ฟังกันชิลๆ ตอนชีวิตมันห่วยๆ<li>ความเหนื่อยหลังบ้าดีเดือดสิ้นสุด<b>ลดลงปานกลาง</b></li>","name":"มิกซ์เทปของโจอี้","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"เอกสารบทความทางการแพทย์ฉบับบุคคลทั่วไปที่ขโมยมาจากห้องสมุดประชาชนเมืองออร์มอนด์ว่าด้วยการศึกษาวิจัยเกี่ยวกับการบาดเจ็บและบาดแผลถูกแทง<li>ตัวจับเวลาแผลลึกของผู้รอดชีวิตทุกคน<b>ลดลงปานกลาง</b></li>","name":"การศึกษาเรื่องบาดแผลถูกแทง","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"อย่าออกลุยภารกิจสังหารหากปราศจากเพลงโปรด แทร็กลิสต์แห่งเสียงดิสทอร์ชันอันหนักอึ้งพร้อมเครื่องเพอร์คัชชันดังสนั่นสะเทือนแก้วหูคุณ<li>จำนวนความเสียหายที่เกิดกับตัวจับเวลาแผลลึกของผู้รอดชีวิตขณะโจมตีด้วยบ้าดีเดือด<b>ลดลงอย่างมาก</b></li>","name":"มิกซ์เทปของแฟรงค์","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"ใบมีดเล่มนี้แปดเปื้อนหยดเลือดและคราบโสโครกที่จะทำให้การบาดเจ็บฟื้นฟูได้ยากเป็นพิเศษ<li>เวลาที่ผู้รอดชีวิตต้องใช้ในการฟื้นฟู<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ใบมีดโสโครก","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"ดินเป็นกำจากที่พำนักสุดท้ายของภารโรง มันเย็นเฉียบดูผิดธรรมชาติ<li>ความเหนื่อยหลังบ้าดีเดือดสิ้นสุด<b>ลดลงอย่างมาก</b></li>","name":"ดินเย็นเฉียบ","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"เข็มกลัดคล้ายแก้วที่หล่อขึ้นมาจากสายหมอกเป็นรูปเหมือนของเดอะลีเจียน พื้นผิวอบอุ่นก้องกังวานด้วยพลังแห่งเอนทิตี<br><br>ระหว่างบ้าดีเดือด:<br><li>รัศมีความน่ากลัวของคุณส่งผล<b>ไปทั่วทั้งแผนที่</b></li><li>แท่นไม้ทุกแท่นที่คุณกระโดดข้าม<b>พังลงในทันที</b></li><br>เอฟเฟกต์นี้ยังคงอยู่ต่อไปจนกว่าเกจพลังจะหมด<br>","name":"เข็มกลัดสีรุ้ง","flavor":"\\"ความอ่อนเยาว์ที่ถูกกระจกนี้กลืนกินไปจะเพิ่มความรุนแรงและขยายการครอบงำของเอนทิตีให้แผ่กว้างขึ้น\\"","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"จังหวะอันมืดมน กีตาร์ที่ปั่นอย่างรุนแรง พร้อมเสียงร้องหลุดโลกสุดลึกล้ำเกินหยั่งถึงจะมาเติมเต็มจิตใจด้วยสัมผัสที่หกอันสั่นสะท้าน<li>ขณะใช้งานบ้าดีเดือด <b>ความคืบหน้าในการซ่อมแซมเครื่องปั่นไฟ</b>สามารถระบุได้จาก<b>ความเข้มของออร่าเครื่องปั่นไฟดังกล่าว</b></li>","name":"มิกซ์เทปสุดเดือด","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"แผ่นหินสลักบทสวดที่เสียหายจากการแตกเป็นเศษเล็กเศษน้อย เดิมทีใช้สำหรับชำระล้างโรคภัยไข้เจ็บและอาการไม่สบายทั่วไป<li>เวลาในการเปิดใช้งานของสระแห่งการอุทิศตัว<b>ลดลงเล็กน้อย</b></li><li>ความเร็วการเคลื่อนที่ขณะควบคุมการชำระมลทินปนเปื้อน<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เศษแผ่นหินบทภาวนา","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"ยางไม้มีค่าที่สกัดจากต้นกำยาน ใช้ในพิธีกรรมเนื่องจากมีกลิ่นหอมหวานคล้ายส้ม<li>ความเร็วการเคลื่อนที่ขณะกำลังชาร์จการชำระมลทินต่ำช้า<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ธูปกำยาน","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"ผนึกทรงกระบอกทำจากหินที่มีรูพรุน แสดงภาพพิธีกรรมพร้อมกับเทพเจ้ามีปีก<li>ระยะเวลาการแพร่เชื้อไปบนวัตถุ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ผนึกหินปูน","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"ยาป้ายรสขมและมีกลิ่นฉุนจากรากไม้บดที่หมักน้ำปลาเป็นเวลาสามวันและหมักไวน์ต่ออีกสองวัน ใช้ทาผื่นคันตามผิวหนัง<li>คูลดาวน์ของการชำระมลทินต่ำช้า<b>ลดลงเล็กน้อย</b></li>","name":"ขี้ผึ้งทาแผล","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"เครื่องรางหินสบู่สลักหยาบๆ เป็นรูปเทพเจ้ามีปีกที่ปัดเป่าความเจ็บไข้ได้ป่วย ทำให้ผู้สวมใส่เปี่ยมด้วยการอุทิศตัว<li>ระยะเวลาของการชำระมลทินปนเปื้อน<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เครื่องรางป้องกัน","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"ของเหลวสีขุ่นมีฟองฟอดที่แผ่ซ่านไปในอากาศด้วยกลิ่นหอมรุนแรงของสมุนไพรและแอลกอฮอล์ ใช้ทาแผลผุพองโดยตรง\\n<li>คูลดาวน์ของการชำระมลทินต่ำช้า<b>ลดลงปานกลาง</b></li>","name":"ยาน้ำอย่างแรง","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"ผนึกทรงกระบอกที่หลอมจากศิลาโลหะแข็ง สลักรูปสิ่งมีชีวิตที่ศีรษะเป็นนกยืนอยู่ข้างจักรกลแปลกตา ใช้เป็นภาชนะบรรจุขี้เถ้าศักดิ์สิทธิ์<li>ระยะเวลาการแพร่เชื้อไปบนวัตถุ<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ผนึกฮีมาไทต์","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"น้ำเชื่อมจากน้ำมัสตาร์ดที่กระตุ้นให้เกิดการอาเจียนเมื่อรับประทาน ใช้สำหรับชำระล้างปีศาจร้ายออกจากร่างกาย<li>ผลสำเร็จของการชำระมลทินต่ำช้า<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"น้ำยาอาเจียน","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"ผลไม้สุกกำลังดีสำหรับละศีลอดในระหว่างพิธีกรรมล้างมลทิน มีรสชาติอร่อย<li>เริ่มต้นเกมด้วยสระแห่งการอุทิศตัวที่ปนเปื้อนเพิ่มขึ้นอีก <b>1</b> แห่ง</li>","name":"แอปเปิลปลุกเสก","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"ถ้วยแก้วใส่น้ำมันนวดที่มีสรรพคุณขับเสมหะ หลั่งกลิ่นสดชื่นของกระวานกับโรสแมรี่<li>ความเร็วการชาร์จของการชำระมลทินต่ำช้า<b>เพิ่มขึ้นปานกลาง</b></li>","name":"น้ำมันนวด","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"น้ำเชื่อมน่าขยะแขยงไม่ทราบที่มา ของเหลวเหนียวสีเหลืองที่รับประทานเพื่อกระตุ้นให้เกิดการอาเจียน ใช้สำหรับชำระล้างปีศาจร้ายออกจากร่างกาย<li>ผลสำเร็จของการชำระมลทินต่ำช้า<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ยาอาเจียนติดเชื้อ","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"ยาป้ายสีดำทำจากขี้ผึ้ง เจือด้วยยางสนที่ปล่อยกลิ่นหอมหวานของผืนดิน ใช้ทาผิวหนังที่ติดเชื้อโดยตรง<li>ความเร็วการเคลื่อนที่ขณะกำลังชาร์จการชำระมลทินต่ำช้า<b>เพิ่มขึ้นเล็กน้อย</b></li><li>คูลดาวน์ของการชำระมลทินต่ำช้า<b>ลดลงปานกลาง</b></li>","name":"ขี้ผึ้งอบร่ำควันธูป","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"เครื่องรางหินออบซิเดียนสำหรับปัดเป่าโรคภัยไข้เจ็บระหว่างประกอบพิธีกรรมไล่วิญญาณ สลักบทสวดภาวนาต่อเทพเจ้าแห่งความโกลาหลและโรคร้าย ทำให้ผู้สวมใส่เปี่ยมด้วยการอุทิศตัวอย่างรุนแรง<li>ระยะเวลาของการชำระมลทินปนเปื้อน<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เครื่องรางไล่วิญญาณ","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"แอปเปิลปอกเปลือกที่บดลงไปบนขี้เถ้าศักดิ์สิทธิ์ การรับประทานผลไม้นี้จะช่วยปัดเป่าดวงวิญญาณอาฆาตของผู้วายชนม์<li>เริ่มต้นเกมด้วยสระแห่งการอุทิศตัวที่ปนเปื้อนเพิ่มขึ้นอีก <b>1</b> แห่ง</li><li>ระยะเวลาการแพร่เชื้อไปบนวัตถุ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"แอปเปิลเปื้อนขี้เถ้า","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"แผ่นหินประดับทองแสดงภาพและข้อความที่แตกหักเสียหายของบทสวดบูชาเทพเจ้าผู้ถูกลืมเลือน<li>เวลาในการเปิดใช้งานของสระแห่งการอุทิศตัว<b>ลดลงปานกลาง</b></li><li>ความเร็วการเคลื่อนที่ขณะควบคุมการชำระมลทินปนเปื้อน<b>เพิ่มขึ้นปานกลาง</b></li>","name":"แผ่นหินบูชา","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"น้ำยาเหนียวหนืดกลิ่นน่าคลื่นไส้ ทำจากส่วนผสมที่ระบุไม่ได้ รับประทานเพื่อกระตุ้นให้เกิดการอาเจียนอย่างรวดเร็ว ใช้สำหรับชำระล้างปีศาจร้ายออกจากร่างกาย<li>ผลสำเร็จของการชำระมลทินต่ำช้า<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ยาอาเจียนต่ำช้า","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"นิ้วเท้าเน่าเปื่อยของอะดิริสที่ขาดหลุดออก ถักด้วยด้ายแล้วสวมใส่คอเป็นเครื่องราง แผ่พลังงานต่ำช้าออกมา<li>อัตราที่ผู้รอดชีวิตจะติดเชื้อจากการกระทำ<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"นิ้วเท้าขาด","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"เครื่องรางศิลาเลือดสลักอย่างประณีตเป็นรูปเทพเจ้าแห่งความโกลาหลและโรคร้ายของชาวบาบิโลน ทำให้ผู้สวมใส่เปี่ยมด้วยการอุทิศตัวสุดประมาณ<li>ระยะเวลาของการชำระมลทินปนเปื้อน<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"เครื่องรางแห่งผู้อุทิศตัว","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"ผนึกโปร่งใสทรงกระบอกที่หล่อขึ้นมาจากสายหมอกเป็นรูปร่างของเดอะเพลก พื้นผิวอบอุ่นเต้นตุบๆ ด้วยพลังแห่งเอนทิตี<li>ความเร็วการเคลื่อนที่ขณะควบคุมการชำระมลทินปนเปื้อน<b>ลดลงปานกลาง</b></li><li>ระยะเวลาของการชำระมลทินปนเปื้อน<b>ลดลงมหาศาล</b></li><li>การชำระมลทินต่ำช้าจะกลายเป็นการชำระมลทินปนเปื้อนทุกครั้งที่ซ่อมแซมเครื่องปั่นไฟได้สำเร็จ</li>","name":"ผนึกสีรุ้ง","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"ยาสีดำที่ทำจากเศษกระดูกคมชิ้นเล็กๆ การสูดควันอันน่าขยะแขยงนี้จะช่วยทำให้ตาทิพย์แหลมคมยิ่งขึ้น<li>คุณจะมองเห็นออร่าของผู้รอดชีวิตเป็นเวลา <b>5 วินาที</b>เมื่อมีผู้รอดชีวิตอาเจียน</li>","name":"ธูปสีดำ","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"กล้องที่ขโมยมาจากเหยื่อของโอลเซนในเมืองฟิลาเดลเฟียที่เขาเคยทำงานมาก่อน ฟิล์มข้างในเก็บภาพค่ำคืนสุดท้ายของเขาในเมืองเอาไว้<br><li>อัตราที่ผู้รอดชีวิตถูกหมายหัวเมื่อไม่ได้เอนตัวออกจากที่กำบัง<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"“ฟิลลี่”","flavor":"“รักเมืองฟิลลี่เข้าแล้ว มีแต่ให้กับให้ แล้วผมก็อยากจะจดจำมันไว้ทุกเรื่อง” -เดอะโกสต์เฟส","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"กลักไม้ขีดจากร้านวอลอายส์ซึ่งเป็นบาร์เล็กๆ ทางตอนเหนือของเมืองโรสวิลล์ มีหมายเลขโทรศัพท์ของเหยื่อเขียนไว้ลวกๆ ด้วยปากกาน้ำเงิน หนึ่งในหลักฐานมัดตัวชิ้นสำคัญที่พบ<br><li>อัตราการฟื้นพลังของ<i>ผ้าคลุมราตรี</i><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"กลักไม้ขีดวอลอายส์","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"คอลัมน์ข่าวที่ตัดเก็บไว้เกี่ยวกับคดีฆาตกรรมที่ยังไขไม่ได้ตั้งแต่รัฐยูทาห์ไปจนถึงเพนซิลเวเนีย โกสต์เฟสเป็นคนเขียนพาดหัวข่าวเหล่านั้นเพียงบางคอลัมน์เท่านั้น แต่เขาคือผู้ที่ก่อเหตุฆาตกรรมทั้งหมด<br>การสะสมรวบรวมความสำเร็จของตนทำให้คุณมีความภาคภูมิใจและช่วยเพิ่มความมั่นใจในตัวเองอีกด้วย<br><li>ความเร็วการเคลื่อนที่ขณะสะกดรอยตาม<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"พาดหัวข่าวตัดเก็บ","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"น้ำหอมจากร้านทุกอย่าง 20 ที่เหม็นเหมือนกลิ่นแอลกอฮอล์ล้างแผล โกสต์เฟสฉีดน้ำหอมนี้เพื่อให้ทุกคนรู้ว่าตนมาแล้ว สงวนไว้สำหรับการแวะเยี่ยมกะทันหัน<br><li>ระยะเวลาที่ผู้รอดชีวิต จะถูกหมายหัว<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"น้ำหอมยาจก","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"เลนส์มือหมุนปรับโฟกัสเพื่อให้ไม่โดนจับได้ขณะกำลังถ่ายภาพจากระยะไกล<br><li>อัตราที่ผู้รอดชีวิตถูกหมายหัวเมื่อไม่ได้เอนตัวออกจากที่กำบัง<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ระยะเวลาที่ผู้รอดชีวิตถูกหมายหัว<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เลนส์เทเลโฟโต้","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"สมุดสันเกลียวที่เต็มไปด้วยคราบเลอะกับข้อความเขียน ด้วยลายมือ บันทึกมีรายละเอียดของอุปกรณ์ต่างๆ ที่ใช้ในการสะกดรอยตามเหยื่อ การเปิดอ่านดูวิธีเก่าๆ ของคุณชวนให้นึกถึงความทรงจำสั่นประสาท<br><li>ความเร็วการเคลื่อนที่ขณะสะกดรอยตาม <b>เพิ่มขึ้นปานกลาง</b></li>","name":"บันทึกของโอลเซน","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"รายชื่อเหยื่อของคดีฆาตกรรมโรสวิลล์ทุกคนเขียนเอาไว้ในนั้นด้วยหมึกน้ำเงินอย่างไม่เป็นระเบียบ พร้อมทั้งที่อยู่และหมายเลขโทรศัพท์<br><li>อัตราการฟื้นพลังของ<i>ผ้าคลุมราตรี</i><b>เพิ่มขึ้นปานกลาง</b></li>","name":"สมุดที่อยู่ของโอลเซน","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"แผนที่ประกอบบันทึกของเมืองโรสวิลล์เหนือ รัฐฟลอริดา สัญลักษณ์ X แต่ละตัวแสดงถึงเหยื่อของเดอะโกสต์เฟส การร่างแผนที่ของเป้าหมายช่วยให้คุณเดินไปตามท้องถนนโดยไม่ถูกจับได้<br><li>ระยะเวลาที่มองเห็นสัญชาตญาณฆาตกรเมื่อฆาตกรถูกเปิดเผยตัว<b>เพิ่มขึ้นปานกลาง</b></li>","name":"แผนที่หมายหัว","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"สายรัดสีดำที่คอยรัดให้ทุกอย่างอยู่กับที่ขณะกำลังเดิมด้อมๆ มองๆ หาเหยื่อ<br><li>ความเร็วการเคลื่อนที่ขณะย่อ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"สายรัด ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"กระเป๋าสตางค์ของโอลเซนมีเงินสดอยู่ 30 ดอลลาร์ บัตรสมาชิกร้านเช่าวิดีโอ และรูปภาพเหยื่อรายแรกที่เมืองโรสวิลล์ของโอลเซน พับเก็บเอาไว้ การพกพาหลักฐานที่อาจมัดตัวได้ช่วยเพิ่มความตื่นเต้นเร้าใจและความแน่วแน่ของคุณ<br><li>ความเร็วการเคลื่อนที่ขณะสะกดรอยตาม <b>เพิ่มขึ้นอย่างมาก</b></li>","name":"กระเป๋าสตางค์ของโอลเซน","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"ปลอกมีดเรียบง่ายและยืดหยุ่นสำหรับพกพามีดของคุณ การเคลื่อนที่ง่ายดายขึ้นมากเมื่อผูกของต่างๆ ให้อยู่กับที่<br><li>ความเร็วการเคลื่อนที่ขณะย่อ<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ปลอกมีดหนัง","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"น้ำหอมกลิ่นฉุนแรงชวนครอบงำที่โกสต์เฟสฉีดเพื่อประกาศว่าตนมาแล้ว สงวนไว้สำหรับเหยื่อที่เขาต้องการเขียนข่าวถึง<br><li>อัตราที่ผู้รอดชีวิตถูกหมายหัว<b>เพิ่มขึ้นปานกลาง</b></li>","name":"น้ำหอมติดทนนาน","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"คลิปหนีบเข็มขัดสำหรับพกพามีดของคุณอย่างปลอดภัยเป็นพิเศษ ไม่มีใครรู้ได้แน่ว่าคืนนี้คุณมีแผนจะทำอะไร<br><li>อัตราที่ผู้รอดชีวิตถูกหมายหัวเมื่อไม่ได้เอนตัวออกจากที่กำบัง<b>เพิ่มขึ้นปานกลาง</b></li>","name":"มีดคลิปหนีบเข็มขัด","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"ปากกาน้ำเงินพร้อมรอยเคี้ยวบนปลอกที่มีร่องรอยดีเอ็นเอของแดนนี่หลงเหลืออยู่ หลักฐานมัดตัวที่ไม่มีใครหาพบมาก่อน<br><li>อัตราการฟื้นพลังของ<i>ผ้าคลุมราตรี</i><b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ปากกาเคี้ยวปลอก","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"หน้ากระดาษที่ฉีกออกมาเขียนสรุปกิจวัตรรายสัปดาห์ของเหยื่อรายแรกที่โอลเซนจัดการไปในเมืองโรสวิลล์ การบันทึกพฤติกรรมของเหยื่อช่วยให้คุณคาดการณ์ความเคลื่อนไหวของเหยื่อเหล่านั้นได้ \\n<br><li>ระยะเวลาที่มองเห็นสัญชาตญาณฆาตกรเมื่อฆาตกรถูกเปิดเผยตัว<b>เพิ่มขึ้นปานกลาง</b></li><li>ระยะที่สามารถเปิดเผยตัวฆาตกรได้ในขณะผ้าคลุมราตรีกำลังทำงาน<b>ลดลงปานกลาง</b></li><br><span class=\\"FlavorText\\">“ผมเฝ้าดูคุณมาระยะหนึ่งแล้ว ผมอยากให้เรื่องนี้เป็นเรื่องพิเศษ เป็นพาดหัวข่าวที่ทุกคนต้องไม่มีวันลืม” -เดอะโกสต์เฟส</span>","name":"กิจวัตรเหยื่อโดยละเอียด","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"เลนส์สำหรับถ่ายกลางคืนให้ภาพที่คมชัดแม้จะอยู่ท่ามกลางความมืดมิด เหมาะสำหรับการแวะเยี่ยมกะทันหันในยามวิกาลอย่างระมัดระวัง<br><li>อัตราที่ผู้รอดชีวิตถูกหมายหัวเมื่อไม่ได้เอนตัวออกจากที่กำบัง<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"กล้องตาเดียวมองกลางคืน","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"ปลอกมีดให้ระยะการขยับที่เต็มกำลัง เหมาะสำหรับการทำให้เกิดแผลได้อย่างรวดเร็วและรุนแรงพร้อมกับเคลื่อนตัวอย่างเป็นอิสระไปด้วย ขโมยมาจากเจ้าหน้าที่ซึ่งออกตรวจตราในคืนที่แดนนี่หนีออกไปจากฟิลาเดลเฟีย<br><li>ความเร็วการเคลื่อนที่ขณะย่อ<b>เพิ่มขึ้นอย่างมาก</b></li><span class=\\"FlavorText\\">“ต้องเตรียมพร้อมเอาไว้ให้เหมือนลูกเสือ แต่ไม่ต้องปักตราอะไรงี่เง่า ที่ผมมีอยู่มันดีกว่าเยอะ” -เดอะโกสต์เฟส</span>","name":"ปลอกมีดห้อยขา","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"ใบขับขี่เผยให้รู้ว่าตัวจริงของโอลเซนคือแดนนี่ จอห์นสัน<br><li>ระยะที่สามารถเปิดเผยตัวฆาตกรได้ในขณะ<i>ผ้าคลุมราตรี</i>กำลังทำงาน<b>ลดลงอย่างมาก</b></li>","name":"ใบขับขี่","flavor":"\\"ทุกคนอยากรู้กันแต่ว่าใครคือเดอะโกสต์เฟส แต่สิ่งที่ทุกคนควรถามจริงๆ คือใครจะเป็นรายต่อไป\\" -เดอะโกสต์เฟส","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"เทปที่โอลเซนได้มาเพื่อเขียนคอลัมน์ข่าวที่ทำให้เมืองโรสวิลล์ต้องหวาดผวา<br><li>อัตราที่ผู้รอดชีวิตถูกหมายหัวจะ<b>เพิ่มขึ้นมหาศาล</b>เมื่อเอนตัวออกจากที่กำบัง</li><li>อัตราที่ผู้รอดชีวิตถูกหมายหัวจะ<b>ลดลงมหาศาล</b>เมื่อไม่ได้เอนตัวออกจากที่กำบัง</li>","name":"“กล้องถ่ายติดโกสต์เฟส”","flavor":"“ในคลิปนี้ จะเห็นบุคคลน่าสงสัยเป็นเงาตะคุ่มบุกเข้าบ้านไปในยามวิกาล เหตุการณ์นี้เกิดขึ้นที่ทางตอนเหนือของเมืองโรสวิลล์ รัฐฟลอริดานี้เอง เจ้าหน้าที่ตำรวจได้รับแจ้งเหตุในเช้าวันรุ่งขึ้นว่ามีการฆาตกรรมเกิดขึ้นในละแวกนั้น ปิดประตูลงกลอนเอาไว้ให้ดี มีฆาตกรเดินลอยนวลอยู่ในหมู่พวกเราทุกคน ราวกับผีสางในยามราตรี” -หนังสือพิมพ์โรสวิลล์กาแซ็ต","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"กล้องวงจรปิดที่ถ่ายติดโกสต์เฟสขณะกำลังบุกรุกเข้าไปในบ้านบนถนนเบลล์วิวที่ทางตอนเหนือของเมืองโรสวิลล์ มุมกล้องตั้งไว้ให้มองเห็นตัวโกสต์เฟสได้แวบเดียวอย่างพอดิบพอดีโดยไม่ทำให้ตำรวจได้เบาะแสใดๆ เพิ่มเติม<br><li>จะมองเห็นออร่าของผู้รอดชีวิตทุกคนที่อยู่ภายนอกรัศมีความน่ากลัวของคุณเป็นเวลา 4 วินาที เมื่อผู้รอดชีวิตที่ถูกหมายหัวตกอยู่ในสภาวะใกล้ตาย</li>","name":"กล้องรักษาความปลอดภัยนอกบ้าน","flavor":"\\"รูปภาพกล่าวแทนคำพูดได้นับพัน\\" -เดอะโกสต์เฟส","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"เนื้อฟักทองที่ติดเชื้อจากดินเน่าในฮอว์กินส์<li>ขณะกำลังข้ามโลกกลับด้าน ประตูมิติที่คุณเข้าไปจะถูกทำลาย รับแต้มเลือดเพิ่มเติม 200 ตามสำหรับการข้าม</li>","name":"ฟักทองเน่า","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"หางหนูเคี้ยวกรุบสำหรับให้อสูรเดโมกอร์กอนกิน<li>เวลาที่ใช้ในการเปิดประตูมิติ<b>ลดลงเล็กน้อย</b></li>","name":"หางหนู","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"ตับนุ่มนิ่มรสเค็มปะแล่มเละเทะกองโต<li>ความเร็วการเคลื่อนที่ของฆาตกรขณะชาร์จ<b>จากห้วงนรก</b><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ตับหนู","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"หัวใจเหม็นเน่าสีดำที่กระชากออกมาจากอกของสัตว์ประหลาดหนวดยักษ์ในโลกกลับด้าน<li>ความเร็วการฟื้นตัวจากการโดนการโจมตี<b>ฉีกกระชาก</b><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"หัวใจสีดำ","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"หยากไย่เหนียวและเฉอะแฉะที่แผ่ขยายทั่วอุโมงค์เชื่อมมิติ<li>เวลาที่ผู้รอดชีวิตใช้ในการปิดผนึกประตูมิติ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"หยากไย่เหนอะหนะ","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"ชั้นเมือกเหม็นเน่าเหนียวเหนอะหนะที่ปกคลุมและขยายไปทั่วอุโมงค์เชื่อมมิติ<li>ระยะรัศมีที่<b>จากห้วงนรก</b>สามารถตรวจพบผู้รอดชีวิตได้<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ชั้นเหนียวหนึบ","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"กระเพาะเน่าที่ให้พลังกับอสูรเดโมกอร์กอน<li>ความเร็วการเคลื่อนที่ของฆาตกรขณะข้ามโลกกลับด้าน<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"กระเพาะเน่าสีเขียว","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"เครื่องในอันโอชะของเหยื่อผู้โชคร้าย<li>จำนวนประตูมิติรวมที่มี<b>เพิ่มขึ้น</b> <b>1</b> จุด</li><li>ความเร็วการฟื้นตัวจากการโจมตีที่พลาดของ<b>ฉีกกระชาก</b><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เครื่องในของเหมียว","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"แว่นตาแตกหักที่เคยได้เดินทางไปยังโลกกลับด้านมาก่อน<li>เมื่อทำลายแท่นไม้ ความเร็วการฟื้นฟูของ<i>ฉีกกระชาก</i><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"แว่นตาของบาร์บ","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"เห็ดสีแดงเข้มจากโลกกลับด้านที่ทำให้อสูรเดโมกอร์กอนสามารถใช้พลังจิตเพื่อบิดเบือนประสาทสัมผัสของเหยื่อได้<li>ระยะเวลาของ<b>เอฟเฟกต์สถานะตรวจไม่พบ</b>ที่จะเกิดขึ้นกับฆาตกรหลังโผล่ออกมาจากประตูมิติ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เห็ดหมวกม่วง","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"เถาวัลย์หนามีหนามที่แผ่ขยายและเสริมความแข็งแรงให้กับอุโมงค์เชื่อมมิติ<li>เวลาที่ผู้รอดชีวิตใช้ในการปิดผนึกประตูมิติ<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ระยะรัศมีที่<b>จากห้วงนรก</b>สามารถตรวจพบผู้รอดชีวิตได้<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ไม้เถาหนาม","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"กระป๋องน้ำอัดลมที่อัดแน่นไปด้วยพลังจิต<li>แสดงเครื่องปั่นไฟเป็นออร่าสีเหลืองขณะข้ามโลกกลับด้าน</li>","name":"น้ำอัดลมของอีเลฟเวน","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"ปอดสดเนื้อเด้งที่เติมพลังให้กับอสูรเดโมกอร์กอน<li>ความเร็วการเคลื่อนที่ของฆาตกรขณะข้ามโลกกลับด้าน<b>เพิ่มขึ้นอย่างมาก</b></li><li>ลดจำนวนประตูมิติที่ใช้ได้ลง <b>2</b></li>","name":"ปอดกวาง","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"ไฟแช็กใช้สำหรับจุดติดปัญหา<li>ผู้รอดชีวิตที่ได้รับผลของประตูมิติจะติด<b>เอฟเฟกต์สถานะตาบอด</b> เมื่อไม่ได้สัมผัสกับประตูมิติแล้ว เอฟเฟกต์นี้จะยังมีผลต่อไปเป็นเวลา <b>60 วินาที</b></li>","name":"ไฟแช็กทองเหลือง","flavor":"“พบการแผ่สนามแม่เหล็กไฟฟ้าแรงสูง ต้องเคยสัมผัสกับโลกกลับด้านมาอย่างแน่นอน” - ห้องทดลองแห่งชาติเมืองฮอว์กินส์","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"เห็ดพิษสีแดงสดจากโลกกลับด้าน<li>ระยะเวลาของเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>ที่จะเกิดขึ้นกับอสูรเดโมกอร์กอนหลังโผล่ออกมาจากประตูมิติ<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เห็ดร่มแดง","flavor":"“กำลังดำเนินการทดสอบตัวอย่างทดลองนี้ต่อ ผลการทดลองยังคงไม่สอดคล้องกันจนถึงขณะนี้” - ห้องทดลองแห่งชาติเมืองฮอว์กินส์","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"ยางไม้ไวไฟเหนียวเหนอะหนะที่คอยป้องกันทางเข้าออกอุโมงค์เชื่อมมิติ<li>เวลาที่ผู้รอดชีวิตใช้ในการปิดผนึกประตูมิติ<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ยางไม้โลกกลับด้าน","flavor":"“ตัวอย่างจากเปลือกไม้ที่เคยใช้เป็นประตูมาก่อน ข้อสรุปในเรื่องผลของตัวอย่างดังกล่าวยังคงไม่แน่ชัด” - ห้องทดลองแห่งชาติเมืองฮอว์กินส์","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"ไข่อุ่นๆ ใบโตมีหยากไย่น่าขยะแขยงห่อหุ้มอยู่<li>ความเร็วการฟื้นพลังข้ามโลกกลับด้าน<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ไข่ไม่ทราบชื่อ","flavor":"“พบไข่ใบใหญ่อยู่ในโลกกลับด้าน แต่ไม่มีตัวอย่างใดเหลือรอดจากการเดินทางกลับมาให้ทดสอบ” - ห้องทดลองแห่งชาติเมืองฮอว์กินส์","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"นกหวีดโลหะสนิมเขรอะที่เคยคุมสระว่ายน้ำสาธารณะเมืองฮอว์กินส์มาก่อน<li>ผู้รอดชีวิตที่อยู่ใกล้ประตูมิติซึ่งกำลังทำงานอยู่จะถูกสัญชาตญาณฆาตกรระบุตัวตนโดยไม่ต้องชาร์จ<b>จากห้วงนรก</b></li>","name":"นกหวีดไลฟ์การ์ด","flavor":"“พบการแผ่สนามแม่เหล็กไฟฟ้าแรงสูง ต้องเคยสัมผัสกับโลกกลับด้านมาอย่างแน่นอน” - ห้องทดลองแห่งชาติเมืองฮอว์กินส์","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"ตะไคร่หลอนประสาทที่เจริญเติบโตบนเปลือกไม้ในโลกกลับด้าน<li>ขณะกำลังข้ามโลกกลับด้าน อสูรเดโมกอร์กอนจะปรากฏตัวจากประตูมิติที่เป็นเป้าหมายอย่างเงียบๆ แต่ช้ากว่าปกติ</li><li>ระยะเวลาของเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>ที่อสูรเดโมกอร์กอนได้รับเมื่อออกมาจากประตูมิติ<b>เพิ่มขึ้นมหาศาล</b>ความเร็วการฟื้นพลังข้ามโลกกลับด้านลดลงมหาศาล</li>","name":"ตะไคร่แดง","flavor":"“การบริโภคใบจะช่วยเสริมความแข็งแรงว่องไวและส่งผลให้เกิดอาการเคลิ้มสุข” - ห้องทดลองแห่งชาติเมืองฮอว์กินส์","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"ไลเคนออกฤทธิ์รุนแรงซึ่งเจริญเติบโตได้ดีบนก้อนหินในโลกกลับด้าน<li><b>เผยออร่า</b>ของผู้รอดชีวิตทุกคนให้เห็นขณะกำลังข้ามโลกกลับด้าน และแสดงเป็นเวลา <b>3 วินาที</b>หลังโผล่ออกมาจากประตูมิติ</li>","name":"ไลเคนเปลือกแข็ง","flavor":"“ด้วยปริมาณเพียงเล็กน้อยก็สามารถส่งผลให้เกิดอาการประสาทหลอนอย่างรุนแรงได้” - ห้องทดลองแห่งชาติเมืองฮอว์กินส์","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"ด้วยความคิดว่าเป้าหมายของตนนั้นบริสุทธิ์ยุติธรรม คะซันจึงพกเครื่องรางเอาไว้เพื่อปัดเป่าสิ่งชั่วร้ายที่อาจนำพาให้หลงทางได้<li>ความเร็วในการดูดพลังจากลูกแก้วโลหิต<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เครื่องรางยาคุโยเคะ","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"หากเชือกทนทานกว่านี้ก็อาจจองจำคะซันเอาไว้ได้ แต่ในเมื่อเชือกไม่แข็งแรง คะซันจึงหลบหนีออกไปสังหารผู้ที่จับตัวเขาได้<li>ระยะที่สามารถตรวจจับออร่าของลูกแก้วโลหิตได้<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เชือกผุ","flavor":"\\"แม้นความตายจักแน่วแน่ แต่ก็ยังมีการเตือนล่วงหน้า\\" -คำสอนของเร็นจิโร่ 14:5 ","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"จอกสาเกที่ใช้ในงานมงคลสมรสของคะซัน ความเสียหายเกิดขึ้นหลังพิธิเสร็จสิ้นไปยังไม่ทันข้ามคืน<li>อัตราการชาร์จเพื่อเริ่มใช้งาน<i>โลหิตพิโรธ</i><b>เพิ่มขึ้นเล็กน้อย</b></li><li>เวลาในการปิดใช้งาน<i>โลหิตพิโรธ</i><b>ลดลงเล็กน้อย</b></li>","name":"ซาคาซึกิแตกร้าว","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"หลุดจากนิ้วเท้าขณะที่คะซันกำลังเดินทางรอนแรมร้อยเหมันต์ไปยังวิหาร แม้จะออกจาริกเพียงใด แต่ขาของอะกิโตะก็รักษาไม่หายเสียที<li>ความเร็วการเคลื่อนที่ขณะดูดพลังจากลูกแก้วโลหิต<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เล็บเท้าสีดำ","flavor":"\\"หากบิดามิอาจเสียสละเพื่อบุตรของตนแล้วไซร้ ผู้นั้นจักเป็นบิดาใครได้เล่า?\\" -คำสอนของเร็นจิโร่ 11:12","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"ตราประดับมีเขาที่คะซันถอดออกจากหมวกเกราะหลังจากถูกเปรียบว่าเป็นอสูร<li>อัตราการรีชาร์จได้เองของ<i>โทสะแห่งยามาโอกะ<i><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"มาเอดาเตะขัดเงา","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"ภาพเขียนหมึกซึ่งเคยแขวนอยู่ในคฤหาสน์ตระกูลยามาโอกะ เป็นภาพของสิงโตที่ถูกหนูแทะกิน<li>อัตราการชาร์จเพื่อเริ่มใช้งาน<i>โลหิตพิโรธ</i><b>เพิ่มขึ้นเล็กน้อย</b></li><li>เวลาในการปิดใช้งาน<i>โลหิตพิโรธ</i><b>ลดลงเล็กน้อย</b></li><li>การใช้งาน<i>โลหิตพิโรธ</i>หมดไปเมื่อตีผู้รอดชีวิตจนล้ม<b>ลดลงปานกลาง</b></li>","name":"สิงห์ภาพหมึก","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"ไม้บัญชาการของเร็นจิโร่ที่คะซันลักขโมยมาขณะกำลังออกเดินทาง<li>ระยะเวลาของ<i>โลหิตพิโรธ</i><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ไซไฮหักบิ่น","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"ดาบสำหรับฝึกฝนของอะกิโตะ ซึ่งแทบไม่ได้ใช้งานหลังเกิดการบาดเจ็บ<li>ระยะที่สามารถตรวจจับออร่าของลูกแก้วโลหิตได้<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ดาบไม้เด็กเล่น","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"โลหิตของเด็กชายผู้เรียกขานคะซันว่าขุนนางลวงโลก เขาซุกซ่อนหลักฐานเอาไว้มิให้บิดารับรู้ และมักแอบนำผ้าโอบิมาชื่นชมอยู่อย่างลับๆ<li>ความเร็วการเคลื่อนที่ขณะดูดพลังจากลูกแก้วโลหิต<b>เพิ่มขึ้นปานกลาง</b></li>","name":"โอบิเปื้อนเลือด","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"ธงสัญลักษณ์ประจำตระกูลยามาโอกะที่มอบความภาคภูมิใจให้แก่คะซันอย่างเหลือล้น<li>ระยะเวลาของ<i>โลหิตพิโรธ</i><b>เพิ่มขึ้นปานกลาง</b></li>","name":"ธงซาชิโมโนะแห่งยามาโอกะ","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"หน้ากากที่หนุ่มน้อยคะซันซื้อมาเพื่อร่วมเฉลิมฉลองเทศกาลเซ็ตสึบุน เขี้ยวน่าเกลียดน่ากลัวที่งอกยาวจากปากทำให้เขาเริ่มฝันผวา<li>จำนวนลูกแก้วโลหิตที่ผู้รอดชีวิตทิ้งเอาไว้<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"หน้ากากไม้โอนิ","flavor":"\\"หาใช่เรื่องบังเอิญใดไม่ที่มนุษย์นั้นช่างคุ้นเคยกับเหล่าอสูร\\" -คำสอนของเร็นจิโร่ 3:8","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"เศษชิ้นส่วนของดาบซึ่งสืบทอดมาจากบรรพบุรุษ ถูกคะซันทำลายไปด้วยความโกรธเกรี้ยว<li>อัตราการรีชาร์จได้เองของ<i>โทสะแห่งยามาโอกะ</i><b>เพิ่มขึ้นปานกลาง</b></li>","name":"วากิซาชิแตกหัก","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"ผมจุกของซามูไรผู้เคลือบแคลงสงสัยในศักดิ์ศรีของคะซัน รากผมมีหนังศีรษะเปื้อนเลือดชิ้นบางติดมา<li>อัตราการชาร์จเพื่อเริ่มใช้งาน<i>อสูรพุ่งถลัน</i><b>เพิ่มขึ้นอย่างมาก</b>ขณะที่<i>โลหิตพิโรธ</i>กำลังทำงาน</li>","name":"ผมจุกติดหนังศีรษะ","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"ของประดับที่คะซันได้รับมาหลังลืมตาดูโลก มีพลังที่มุ่งหมายเพื่อปกป้องวงศ์ตระกูลจากภัยคุกคาม<li>ความเร็วการเคลื่อนที่ของ<i>อสูรพุ่งถลัน</i><b>เพิ่มขึ้นปานกลาง</b>ขณะที่<i>โลหิตพิโรธ</i>กำลังทำงาน</li>","name":"เครื่องรางคะไนอันเซ็น","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"ผืนผ้าที่มารดาซบร่ำไห้หลังจากคะซันออกเดินทางรอนแรมเพื่อชำระนามของเหล่าซามูไร<li>การใช้งาน<i>โลหิตพิโรธ</i>หมดไปเมื่อตีผู้รอดชีวิตจนล้ม<b>ลดลงอย่างมาก</b></li>","name":"เทะนุงูอิชุ่มน้ำตา","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"เศษชิ้นส่วนของเรือที่ยามาโอกะ เร็นจิโร่ ขึ้นโดยสาร แต่ดูเหมือนว่าซามูไรในตำนานได้รอดชีวิตมาอย่างน่าอัศจรรย์<li>จำนวนลูกแก้วโลหิตที่ผู้รอดชีวิตทิ้งเอาไว้<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เศษไม้จากตัวเรือ","flavor":"\\"หากจะวางอุบายแล้วไซร้ ให้เริ่มด้วยการไม่ชี้แนะผู้ใด\\" -คำสอนของเร็นจิโร่ 7:9","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"เขี้ยวที่ซื้อมาจากพ่อค้าของแปลก เป็นสัญลักษณ์ของพลังอำนาจและความสูงศักดิ์<li>ระยะเวลาของ<i>โลหิตพิโรธ</i><b>เพิ่มขึ้นอย่างมาก</b></li>","name":"เขี้ยวสิงห์","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"ไม้ค้ำที่บุตรชายคะซันใช้หลังจากตกต้นไม้ การบาดเจ็บของอะกิโตะทำให้เพื่อนเล่นของตนถูกลงทัณฑ์ทั้งครอบครัว<li>ความเร็วการเคลื่อนที่ของ<i>อสูรพุ่งถลัน</i><b>เพิ่มขึ้นอย่างมาก</b>ขณะที่<i>โลหิตพิโรธ</i>กำลังทำงาน</li>","name":"ไม้ค้ำของอะกิโตะ","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"ถุงมือที่เร็นจิโร่ถือไว้แนบอกหลังจากถูกบุตรชายของตนโจมตี<li>ผู้รอดชีวิตทุกคนสามารถมองเห็นลูกแก้วโลหิตได้</li><li>ผู้รอดชีวิตที่สัมผัสกับลูกแก้วโลหิตจะดูดพลังจากลูกแก้วโลหิตแล้วเผยออร่าให้ฆาตกรเห็นเป็นเวลา <b>2 วินาที</b></li><li>ผลนี้จะทับซ้อนกันสำหรับลูกแก้วโลหิตแต่ละลูกที่ได้ดูดพลังไป</li>","name":"ถุงมือเปื้อนเลือดของเร็นจิโร่","flavor":"\\"เมื่อไร้สิ้นซึ่งทุกสิ่ง ขอเพียงรักษาเกียรติยศของตนไว้ให้มั่น\\" -คำสอนของเร็นจิโร่ 14:12","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"ตราประดับซึ่งบ่งบอกว่าผู้ครอบครองนั้นมาจากตระกูลยามาโอกะ<br><li>ขณะที่<i>โลหิตพิโรธ</i>กำลังทำงานอยู่นั้น การใช้<i>อสูรจู่โจม</i>พลาดจะทำให้ผู้รอดชีวิตทุกคนใน<b>รัศมี 12 เมตร</b>ส่งเสียงร้องพร้อมเผยตำแหน่งปัจจุบันให้คุณเห็น</li>","name":"ตราตระกูลสีรุ้ง","flavor":"\\"จงรู้จักตนเองเพื่อเป็นเกราะคุ้มกันจิตใจ\\" -คำสอนของเร็นจิโร่ 11:2","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"ชิ้นส่วนของผ้าใบสกปรก ถ่มน้ำลายและใช้แรงถูก็เพียงพอแล้วที่จะลดความร้อนจากการยิงของปืนฉมวก<li>ระยะเวลาคูลดาวน์ของปืนฉมวกหลังจากยิงพลาด<b>ลดลงเล็กน้อย</b></li>","name":"เศษผ้าทำความสะอาด ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"น้ำมันและสารสกัดที่ซื้อมาจากพ่อค้าเร่ ที่อ้างว่ารักษาอาการป่วยของคุณได้ทุกอย่าง<li>ความเร็วในการดึงปืนฉมวกกลับ<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"น้ำมันงู ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"ข้อต่อโซ่บอบบางที่ทีแรกใช้กับปืนฉมวกรุ่นต้นแบบของคาเล็บ แม้โซ่จะหย่อน แต่มันก็ยึดโยงคุณค่าทางใจไว้<li>ให้โบนัสแต้มเลือด <b>50%</b> สำหรับอีเวนท์คะแนน<i>ฉมวกแทง</i></li><li>ผู้รอดชีวิตดิ้นหลุดจากฉมวกได้ง่ายขึ้น</li>","name":"โซ่บอบบาง","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"เข็มขัดใส่กระสุนเก่าที่ถูกเคเล็บดัดแปลงสำหรับอาวุธสุดพิเศษของเขา ยังคงมีสีแดงสดของฝุ่นในทะเลทรายแอริโซน่า<li>ความเร็วในการรีโหลดปืนฉมวก<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เข็มขัดใส่กระสุนที่ถูกดัดแปลง ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"หมุดรางรถไฟที่เคเล็บใช้ยึดติดกับด้านหน้าของปืนฉมวกในช่วงเวลาแห่งความอยากรู้อยากเห็นอันวิปริต ส่วนปลายทื่อๆ ป้องกันไม่ให้เป้าหมายถูกเจาะจนทะลุในทันที<li>ผู้รอดชีวิตที่ถูกยิงด้วยฉมวกจะก่อให้เกิดเอฟเฟกต์สถานะ<b>เหวอะหวะ</b></li>","name":"หมุดสนิมเขรอะ ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"พืชที่ดูแล้วก็เหมือนพืชธรรมดาทั่วไป คาเล็บพบว่าฉมวกที่มีน้ำมันของมันเคลือบอยู่ทำให้เกิดความเจ็บปวดอันเกิดจะทานทนขึ้นรอบๆ แผล<li>เวลาฟื้นฟูตัวเองของผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<b>แผลลึก</b><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ใบโอ๊กพิษ","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"เหรียญตราสีเงินที่ฉวยมาจากศพของเจ้าหน้าที่ในพื้นที่แอริโซน่า ผู้ซึ่งเข้าไปยุ่งเกี่ยวกับค่าหัวของแก๊งเฮลไชร์<li>รัศมีความน่ากลัวในระหว่างที่เล็งปืนฉมวก<b>ลดลงเล็กน้อย</b></li><li>ความเร็วการเคลื่อนที่ในระหว่างที่เล็งปืนฉมวก<b>ลดลงเล็กน้อย</b></li><span class=\\"FlavorText\\">“ให้ผู้สวดภาวนาของคุณเข้ามา แล้วคุณจะรู้สึกมีชีวิตชีวาในตอนกลางวัน” —เคเล็บ ควินน์</span>","name":"เหรียญตราของมาร์แชล ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"กระสุนที่ยิงทะลุกรามของเคเล็บในระหว่างการกราดยิงอย่างบ้าคลั่ง มันทำให้ความปรารถนาที่จะแก้แค้นกลับมา<li>ความเร็วการเคลื่อนที่ในระหว่างที่เล็งยิงปืนฉมวก<b>เพิ่มขึ้นเล็กน้อย</b></li><span class=\\"FlavorText\\">\\"แกเรียกความตายเข้ามาหาตัวเองในทันทีที่เข้ามาก่อกวนฉัน\\" —เคเล็บ ควินน์</span>","name":"เครื่องบดขยี้กราม ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"กระป๋องใบยาสูบหวานหั่นที่หยิบมาจากศพที่ถูกควักเครื่องในในเกลนเวล กระตุ้นระบบประสาท<li>ระยะเวลาสตันเมื่อผู้รอดชีวิตเป็นอิสระจากปืนฉมวก<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ยาเส้นแบบเคี้ยว","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"เสียงกระทบทื่อๆ ของพวงกุญแจที่ก่อให้เกิดความทรงจำที่เกรี้ยวกราดภายในใจของเคเล็บ<li>ความเร็วในการรีโหลดปืนฉมวก<b>เพิ่มขึ้นปานกลาง</b></li>","name":"กุญแจของผู้คุม ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"โปสเตอร์ประกาศจับเหลืองกรอบส่วนที่เหลือของเมสัน เคลลี่ ที่ยังทำให้เคเล็บยังคงมุ่งมั่นอยู่กับการไล่ล่า<li>ความเร็วการเคลื่อนที่ขณะเล็งปืนฉมวก<b>เพิ่มขึ้นปานกลาง</b></li><span class=\\"FlavorText\\">\\"แกจะต้องได้รับการชำระแค้นอย่างโหดเหี้ยม ขอสาบานไว้กับหลุมศพของแม่เลย\\" -เคเล็บ ควินน์</span>","name":"โปสเตอร์ประกาศจับ ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"กระป๋องที่มีน้ำมันจำนวนเล็กน้อยเพื่อลดแรงเสียดทานในเครื่องจักร ปืนฉมวกรุ่นเก่ามักจะมีปัญหากระสุนขัดลำกล้อง และน้ำมันคือสิ่งจำเป็นต้องพร้อมใช้งาน<li>ระยะเวลาคูลดาวน์ของปืนฉมวกหลังจากยิงพลาด<b>ลดลงปานกลาง</b></li>","name":"กระป๋องน้ำมัน ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"ความโกรธเกรี้ยวที่ก่อนหน้านี้เหยื่อหลบหนีได้ไปถึง 2 ครั้ง เคเล็บหักกิ่งหนามมาติดไว้บนฉมวกแล้วยิง<li>ผู้รอดชีวิตที่หลุดออกจากปืนฉมวกไปได้จะติดเอฟเฟกต์สถานะ<b>เหวอะหวะ</b></li>","name":"ขวากหนามของฮันนี่โลคัสต์ ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"ฟันทองที่ถอนออกมาจากเฮนรี่ เบย์ชอร์ ที่กรีดร้องขอความเมตตาเป็นเวลาหลายชั่วโมงก่อนจะถูกฆ่า<li>ความเร็วในการดึงปืนฉมวกกลับ<b>เพิ่มขึ้นปานกลาง</b></li><span class=\\"FlavorText\\">“สำเหนียกหน่อย ไอ้หนู สำเหนียกตัวเองหน่อย” —เฮนรี่ เบย์ชอร์</span>","name":"ฟันทองของเบย์ชอร์","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"โซ่หนาหนักที่ครั้งหนึ่งเคยติลูกตุ้มเหล็กล่ามข้อเท้าเคเล็บเอาไว้ มันถูกเปลี่ยนมาเกี่ยวไว้กับฉมวก<li>ชาร์จที่ผู้เล่นต้องใช้เพื่อเป็นอิสระจากฉมวก<b>เพิ่มขึ้นอย่างมาก</b></li><span class=\\"FlavorText\\">“นักโทษที่ทำงานในสนามเรือนจำต้องถูกล่ามด้วยลูกตุ้มเหล็กหนักไม่น้อยกว่า 18 ปอนด์” -คู่มือผู้คุมเรือนจำเฮลไชร์</span>","name":"โซ่เรือนจำ","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"ความอบอุ่นสบายใจในขวดที่ช่วยระงับความโกรธเกรี้ยวของเคเล็บและชะลอฝีเท้าของเขา<li>รัศมีความน่ากลัวในระหว่างที่เล็งยิงปืนฉมวก<b>ลดลงปานกลาง</b></li><li>ความเร็วในการเคลื่อนที่ในระหว่างที่เล็งยิงปืนฉมวก<b>ลดลงปานกลาง</b></li><span class=\\"FlavorText\\">“รสชาติละมุนลิ้นสำหรับชายแดนกันดาร” —โฆษณาโกลด์ครีก ปี 1876</span>","name":"โกลด์ครีกวิสกี้","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"ซิการ์ชั้นดี ดึงมาจากแจ็กเก็ตของหัวหน้าของเคเล็บขณะเขาร้องโอดโอยกับฉมวกที่ทิ่มคาท้อง<li>ระยะเวลาสตันเมื่อผู้รอดชีวิตเป็นอิสระจากฉมวก<b>ลดลงอย่างมาก</b></li><span class=\\"FlavorText\\">“อย่าได้ชี้ไอ้นั่นมาที่ฉันนะ ไอ้โง่เง่าเต่าถุย” -เฮนรี่ เบย์ชอร์</span>","name":"ซิการ์ของเบย์ชอร์","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"เหล็กที่มีเงี่ยงแหลมเรียงรายบิดงอได้ที่ชาวอเมริกันทำขึ้น แม้จะมีรูปแบบที่เรียบง่ายเช่นนั้น แต่คาเล็บกลับพบวิธีทำให้มันโหดร้ายมากขึ้นด้วยการหุ้มฉมวก<li>เวลาฟื้นฟูตัวเองของผู้รอดชีวิตที่ได้รับผลจากเอฟเฟกต์สถานะ<b>แผลลึก</b><b>เพิ่มขึ้นปานกลาง</b></li></li><span class=\\"FlavorText\\">“ตอนนี้ยังไม่มีอะไรต้องกลัวหรอก กว่าจะถึงตอนนั้น ก็กลัวฉันไปก่อนแล้วกัน” -คาเล็บ ควินน์</span>","name":"ลวดหนาม","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"เหรียญลักษณะเหมือนแก้วที่หล่อขึ้นมาจากสายหมอกเอง เป็นค่าตอบแทนแก่การให้บริการของนักล่าค่าหัว<li>ผู้รอดชีวิตที่ถูกฉมวกแทงจากระยะ <b>15 เมตร</b> เป็นอย่างน้อยจะติดเอฟเฟกต์สถานะ<b>ปลอดกำบัง</b>ไปนานเท่าที่ฉมวกปักคาอยู่</li><span class=\\"FlavorText\\">“ข้อตกลงที่ทำด้วยความสิ้นหวังย่อมได้รับการตอบแทนเป็นความบ้าคลั่ง”</span>","name":"เหรียญสีรุ้ง","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"เหล็กตีตราของแก๊งเฮลไชร์ แม้จะมาจากเรื่องเล่าพื้นบ้าน มันก็ไม่เคยก่อให้เกิดการริเริ่มอะไรใหม่ๆ เลย แต่กลับกัน มันถูกใช้ตีตราพวกมีค่าหัวที่ชอบวิวาทกัน<li>ตราบใดที่ผู้รอดชีวิตยังถูกฉมวกปักคาอยู่ ออร่าของผู้รอดชีวิตทั้งหมดที่อยู่ในรัศมีความน่ากลัวของคุณจะถูกเผย</li><span class=\\"FlavorText\\">“แก๊งเฮลไชร์: ผู้ผดุงความยุติธรรมหรือคนนอกกฎหมาย?” -พาดหัวหนังสือพิมพ์เกลนเวล</span>","name":"เหล็กเฮลไชร์","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"พบในตู้เย็น มีใบหน้าที่โป่งพองน่าขยะแขยงสลักไว้<li>ระยะเวลาที่ร่องรอยของ<b>พิธีกรรมพิพากษา</b>คงอยู่ในสภาพแวดล้อม<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"แหวนตะกั่ว ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"ผีเสื้อที่พบบนเตียงอพาร์ตเมนต์วูดไซด์ เปราะบางและแทบแหลกสลายเมื่อสัมผัส<li>อัตราการรีชาร์จ<b>พิธีกรรมพิพากษา</b><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ซากผีเสื้อ ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"พบในชั้นใต้ดินของโรงพยาบาลบรูคแฮฟเวน มีรูปแมงมุมสลักไว้<li>ระยะเวลารวมที่ใช้<b>พิธีกรรมพิพากษา</b>ได้<b>เพิ่มขึ้นเล็กน้อย</b><br></li><span class=\\"FlavorText\\">“ฉันถูกขังอยู่ในชั้นใต้ดินของชั้นใต้ดิน มันทั้งเล็กและมืด แล้วฉันก็กลัวมากๆ ฉันทำแหวนล้ำค่าของตัวเองตกไว้ แต่ฉันจะไม่มีวันกลับไปที่นั่นอีกเด็ดขาด”</span>","name":"แหวนทองแดง ","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"สายรัดไนลอนที่เคยถูกใช้กักตัวเหยื่อไว้กับโครงเหล็ก สีของมันทำให้ยากที่จะเห็นเลือดที่ชุ่มโชก <li>ระยะหวังผลของ<b>บทลงโทษผู้ต้องสาป</b><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"สายรัดสีดำ ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"ตุ๊กตาที่แกะสลักจากขี้ผึ้ง งานฝีมือนักโทษผู้อีกไม่ช้าต้องเผชิญคำพิพากษา<li>ระยะหวังผลของ<b>บทลงโทษผู้ต้องสาป</b><b>เพิ่มขึ้นปานกลาง</b></li>","name":"ตุ๊กตาขี้ผึ้ง ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"ปลายหอกคมขึ้นสนิม เลือดของเหยื่อรายสุดท้ายเกาะเป็นเกล็ด<li>ระยะเวลารวมที่ใช้<b>พิธีกรรมพิพากษา</b>ได้<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ปลายหอก ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"เศษผ้าพิมพ์สีชมพูลายเสือดาว ยากจะบอกว่าเคยใช้ทำอะไร<li>ระยะเวลาของ<i>สัญชาตญาณฆาตกร</i>ที่เกิดขึ้นเพราะ<b>พิธีกรรมพิพากษา</b><b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ผ้าพิมพ์ลายเสือดาว  ","flavor":"“ฉันเป็นใครไม่สำคัญ แต่ฉันมาที่นี่เพื่อช่วยคุณนะเจมส์” -มาเรีย","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"ม้วนวิดีโอของคู่รักซึ่งไปพักผ่อนที่ไซเลนต์ฮิล ทั้งที่มีคุณค่าทางใจ แต่กลับถูกทิ้งไว้ที่โรงแรมเลกวิว<li>อัตราการรีชาร์จ<b>พิธีกรรมพิพากษา</b><b>เพิ่มขึ้นปานกลาง</b></li>","name":"ม้วนวิดีโอที่ถูกลืม ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"หีบเพลงที่มีหุ่นจากเทพนิยายซินเดอเรลลา พบในตู้เสื้อผ้าที่ประดับประดาด้วยสติกเกอร์จากหลากหลายจุดหมายปลายทาง<li>ระยะเวลาที่ร่องรอยของ<b>พิธีกรรมพิพากษา</b>คงอยู่ในสภาพแวดล้อม<b>เพิ่มขึ้นปานกลาง</b></li>","name":"หีบเพลงซินเดอเรลลา ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"ภาพถ่ายร่างสองร่างในฮู้ดสีแดง ขนาดนามว่างานเลี้ยงสีขาวและสีแดงแด่ทวยเทพ<li>อัตราการรีชาร์จ<b>พิธีกรรมพิพากษา</b><b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ภาพถ่ายนิกายวัลเทียล ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"แผ่นจารึกเหล็กสลักรูปชาวแอซเท็ก<li>ระยะเวลารวมที่ใช้<b>พิธีกรรมพิพากษา</b>ได้<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"แผ่นจารึกของผู้กดขี่ ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"ภาพวาดเรือนร่างอันน่าขนลุกที่สวมใส่พีระมิดเหล็กครอบหัว มีเหยื่อถูกขังกรงเป็นพื้นหลัง<li>ระยะเวลาของ<i>สัญชาตญาณฆาตกร</i>ที่เกิดขึ้นเพราะ<b>พิธีกรรมพิพากษา</b><b>เพิ่มขึ้นปานกลาง</b></li>","name":"วันมืดหมอก ซากการพิพากษา ","flavor":"“เขาไง...”","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"เท้าสีเทานวลเรียนของหุ่นโชว์ ซึ่งถูกฉีกกระชากออกจากขาของมันอย่างโหดเหี้ยม<li>ระยะเวลาที่ร่องรอยของ<b>พิธีกรรมพิพากษา</b>คงอยู่<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"เท้าหุ่นโชว์ ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"แผนผังโรงแรมเลกวิว เปลวเพลิงสีแดงฉานถูกระบายไปทั่วสถานที่แห่งความสำนึกผิดนี้ <li>ระยะของบทลงโทษผู้ต้องสาป<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ภาพวาดมนุษย์เพลิง ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"ไข่สด สีแดงสะดุดตา ขนาดประมาณไข่นกกระทา<li>ระยะเวลาของ<i>สัญชาตญาณฆาตกร</i>ที่เกิดขึ้นเพราะ<b>พิธีกรรมพิพากษา</b><b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ไข่สีแดงสด ","flavor":"“ทั้งชีวิตฉันไม่เคยกลัวอะไรเท่านี้เลย! นี่คุณไม่ใส่ใจฉันสักนิดเลย... ใช่มั้ย?” -มาเรีย","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"ไข่หน้าตาเก่าๆ สีส้มแดง ขนาดประมาณไข่นกกระทา<li>ผู้รอดชีวิตที่ได้รับผลจาก<b>พิธีกรรมพิพากษา</b>จะติดเอฟเฟกต์สถานะ<b>ตาบอด</b>เป็นเวลา <b>60 วินาที</b></li>","name":"ไข่สีสนิม ","flavor":"“เจมส์... คุณทำให้ฉันมีความสุข” -แมรี่","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"หนังสือเกี่ยวกับประวัติศาสตร์และตำนานของไซเลนต์ฮิลและพื้นที่รอบๆ<li>ผู้รอดชีวิตที่ได้รับผลจาก<b>พิธีกรรมพิพากษา</b>จะติดเอฟเฟกต์สถานะ<b>ไม่รู้ตัว</b>เป็นเวลา <b>15 วินาที</b></li><span class=\\"FlavorText\\">“พวกเขาเรียกที่นี่ว่า ‘สถานที่แห่งวิญญาณที่ถูกลืม’”</span>","name":"สมุดบันทึกความทรงจำอันสาบสูญ ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"หนังสือเกี่ยวกับเทพโบราณ ไม่ทราบว่าใครเป็นผู้แต่ง<li>ผู้รอดชีวิตที่บาดเจ็บที่ได้รับผลของ<i>การทรมาน</i>จะติดเอฟเฟกต์สถานะ<b>เลือดท่วม</b></li>","name":"หนังสือพิธีกรรมสีเลือด ","flavor":"จงเอ่ยวาจา ข้าคือผู้มีสีเลือด คำโป้ปดและมวลหมอกมิใช่ผู้ใดแต่คือข้า","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"แก้วเหล้าหน้าตาโบร่ำโบราณแกะสลักจากหินออบซิเดียนบริสุทธิ์<li><b>ดิเอ็กซิคิวชันเนอร์</b>ได้รับเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>เมื่ออยู่บนรอยของ<b>พิธีกรรมพิพากษา</b></li>","name":"แก้วเหล้าออบซิเดียน ","flavor":"“อภัยให้ผมด้วยที่ต้องปลุกคุณขึ้นมา แต่ขาดคุณไปผมก็ไปต่อไม่ได้จริงๆ\\" -เจมส์ ซันเดอร์แลนด์","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"เครื่องรางที่มีลวดลายแปลกๆ จารึกไว้ เหมือนว่าอิทธิพลของเอนทิตีจะเปลี่ยนแปลงมันไป <li>เมื่อส่งผู้รอดชีวิตไปยัง<i>กรงแห่งการไถ่โทษ</i>จะมองเห็นออร่าของผู้รอดชีวิตที่มีอาการ<b>ทรมาน</b>เป็นเวลา <b>6 วินาที</b></li>","name":"ผนึกแห่งเมตาตรอนสีรุ้ง ","flavor":"“ด้วยคุณสมบัติในการปกป้องและขจัดปัดเป่า จัตุรัสเวทมนตร์นี้เรียกว่า \\"ตราไวรันที่ 7\\" หรือ \\"ผนึกแห่งเมตาตรอน”","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"ยาเม็ดที่ชัดเจนอย่างยิ่งว่าใช้การไม่ได้... หรือได้นะ?<br><br><li>ความเร็วการเคลื่อนที่ขณะพุ่ง<b>ลดลงปานกลาง</b></li><li>ให้โบนัสแต้มเลือด <b>100%</b> สำหรับอีเวนท์คะแนนการพุ่ง</li>","name":"เม็ดยาหลอก ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"พืชมีพิษที่จุดประกายให้ทัลบอตสนใจวิชาเคมี มันทำให้ความทรงจำที่ถูกฝังลึกไว้คุขึ้นอีกครั้ง<br><br><li>ความเร็วการฟื้นตัวหลังจากพุ่ง<b>เพิ่มขึ้นเล็กน้อย</b></li> ","name":"ถุงมือจิ้งจอก ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"แม้ตัวอย่างทดลองเดิมนี้ไม่ให้ผลลัพธ์ตามที่ต้องการ กระนั้นก็ยังแสดงผลที่เหนือความคาดหมายออกมา<br><br><li>หลังจากกระแทกแล้วจะหันไปหาผู้รอดชีวิตที่อยู่ใกล้ที่สุดใน <b>16 เมตร</b> </li>","name":"สารประกอบเจ็ด ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"แว่นตาข้างเดียวที่ทัลบอตไม่ค่อยใช้ทั้งที่สายตาของเขาแย่ลงในปีหลังๆ<br><br><li>แสดงตำแหน่งเป้าหมายของการกระแทก</li>","name":"แว่นตาข้างเดียวหักบิ่น","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"ซากหลงเหลือจากบันทึกของทัลบอต ยังคงมีข้อมูลที่มีค่าอยู่ภายใน<br><br><li><b>ลด</b>จำนวนโทเคนพุ่งที่ใช้ได้ไป <b>1</b></li><li>อัตราการสร้างโทเคนขึ้นใหม่<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เศษบันทึก ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"กลีบตุ่มหนองแห้งบดละเอียดเป็นผงอย่างดี<br><br><li>ระยะเวลากระแทก<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ผงตุ่มหนอง ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"ตัวอย่างน้ำดีของเดอะเพลก กลั่นและผ่านกระบวนการด้วยส่วนผสมทางเคมี<br><br><li>อัตราการหมุนตัวขณะพุ่ง<b>เพิ่มขึ้นเล็กน้อย</b> </li>","name":"น้ำดีเดอะเพลก","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"หนามขนาดใหญ่ที่ตัดมาจากเครื่องในเน่า มันหลั่งสารพิษอ่อนๆ ออกมา<br><br><li>ความเร็วการฟื้นตัวหลังจากพุ่ง<b>เพิ่มขึ้นปานกลาง</b></li> ","name":"หนามเน่าเปื่อย","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"หนูที่กลับมามีชีวิตได้สั้นๆ หลังถูกฉีดเซรุ่ม พฤติกรรมกลับก้าวร้าวและควบคุมไม่ได้<br><br><li>ความเร็วพุ่งแต่ละการพุ่งต่อเนื่อง<b>เพิ่มขึ้นปานกลาง</b></li>","name":"หนูโรคไม้ ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"เกลือทะเลธรรมดาที่ผ่านโลกวิญญาณไปครู่หนึ่ง ทำให้คุณสมบัติของมันเปลี่ยนแปลงไปในการนั้น<br><br><li>อัตราการหมุนตัวขณะพุ่ง<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เกลือร่มเงา ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"ส่วนผสมที่ทำจากกุหลาบแห้งในช่อดอกไม้เดือนดับที่หาได้ยากเย็นแสนเข็ญ<br><br><li>ระยะเวลากระแทก<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"โทนิกกุหลาบ ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"เซรุ่มที่เป็นอันตรายถึงชีวิตสำหรับมนุษย์ มันปลุกความดีเลิศอันเป็นประโยชน์ในตัวของผู้ที่... เป็นอะไรมากกว่านั้นขึ้นมา<br><br><li>เมื่อเริ่มกระแทกจะเปิดเผยออร่าของผู้รอดชีวิตที่อยู่ในรัศมี <b>8 เมตร</b> ของจุดที่ปะทะเป็นเวลา <b>3 วินาที</b></li>","name":"สารประกอบยี่สิบเอ็ด ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"ซากศพอีกากลายพันธุ์อย่างน่าขยะแขยงด้วยเซรุ่มโรคไม้<br><br><li>ความเร็วพุ่งแต่ละการพุ่งต่อเนื่อง<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"อีกาโรคไม้ ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"ฮอร์โมนที่ดึงออกมาจากต่อมอะดรีนัลของตัวอย่างทดลองที่ไม่เต็มใจ แม้จะให้พลังงานอย่างรุนแรงโดยเฉียบพลัน แต่ก็ทำให้ผู้ใช้สิ้นเรี่ยวแรงได้<br><br><li>อัตราการหมุนตัวขณะพุ่ง<b>ลดลงมหาศาล</b></li><li>อัตราการสร้างโทเคนขึ้นใหม่<b>เพิ่มขึ้นมหาศาล</b> </li><li><b>เพิ่ม</b>จำนวนโทเคนพุ่งที่ใช้ได้ไป <b>2.</b></li><li>มุมการมองสูงสุดขณะพุ่ง<b>เพิ่มขึ้นอย่างมาก</b> </li><br>","name":"หลอดอะดรีนาลิน ","flavor":"\\"ขอร้องล่ะ อย่าทำแบบนี้...\\"","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"บันทึกของชายผู้อ้างตัวว่ากลับมาจากความมืดมิด ความรู้ที่อยู่ในนั้นนำไปใช้จริงได้<br><br><li>รับเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>ระหว่างพุ่ง</li><br>","name":"บันทึกของวิโก้ ","flavor":"\\"ในแดนรกร้างแห่งฝันที่หลงลืมและกิจวัตรไร้สิ้นสุด ผู้มีทางออกคือพระเจ้า\\" —ทัลบอต กริมส์","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"ทัลบอตใช้หินนี้สลักสิ่งที่เขาเชื่อว่าเป็นงานวิจัยของตัวเองลงไปบนกำแพงโรงฝิ่น<br><br><li>การใช้พุ่งมรณะโดนผู้รอดชีวิตจะเรียกให้เอนทิตีมาขวางแท่นไม้ในรัศมี <b>12 เมตร</b>รอบตำแหน่งที่คุณอยู่เป็นเวลา <b>6 วินาที</b></li><br>","name":"ศิลาอัญเชิญ ","flavor":"\\"ความตายเป็นเพียงจุดเริ่มต้นเท่านั้น\\"","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"สารเคมีที่คั้นจากต่อมไพเนียลของผู้รอดชีวิตที่เพิ่งตาย<br><br><li>ขณะพุ่ง เมื่อคุณเข้าไปในรัศมี <b>16 เมตร</b>รอบตัวผู้เล่นที่กำลังซ่อมแซมหรือกำลังรักษา จะทำให้ผู้รอดชีวิตคนนั้นต้องเผชิญกับการตรวจสอบทักษะที่ยาก<b>มหาศาล</b> เกิดขึ้นได้หนึ่งครั้งต่อผู้รอดชีวิตหนึ่งคนต่อการพุ่งหนึ่งครั้ง จะไม่เกิดขึ้นในการพุ่งที่เริ่มจากภายในระยะ <b>16 เมตร</b>จากผู้รอดชีวิต</li><br>","name":"เคมีในวิญญาณ ","flavor":"\\"...ต้องสงสัยว่าเป็นสาเหตุให้เกิดการการเปลี่ยนแปลงที่ผิดปกติในจังหวะกิจกรรมของระบบประสาท\\" —ตำราเรียนลึกลับไร้ป้ายแปะ","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"แหวนที่มอบให้นักเคมีผู้จบการศึกษาจากคณะแพทยศาสตร์ลอนดอน มันเตือนให้ระลึกถึงความทะเยอทะยานอันไร้การยับยั้ง<br><br><li>การตีผู้รอดชีวิตด้วยพุ่งมรณะจะรีชาร์จโทเคนพุ่งทั้งหมดในทันที</li><br>","name":"แหวนนักเล่นแร่แปรธาตุ ","flavor":"\\"นักศึกษาถูกกล่าวหาว่าชิงทรัพย์อย่างอุกฉกรรจ์ด้วยเจตนาจะทำการทดลองทางวิทยาศาสตร์ที่ไม่ได้รับอนุญาต\\" —คำประณามของคณะโดยทัลบอต กริมส์, 1838","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"ป้ายห้องทดลองที่ดูเหมือนกระจก หล่อเป็นรูปร่างจากสายหมอกด้วยตัวเอง เป็นได้ทั้งของขวัญจากเอนทิตีและตลกโหดร้ายเพื่อแปะป้ายให้เดอะไบลท์อย่างที่เขาเคยทำกับคนอื่น<br><br><li>เมื่อใช้โทเคนพุ่งทั้งหมด พุ่งมรณะครั้งสุดท้ายของคุณจะทำให้เหยื่อเข้าสู่สภาวะใกล้ตาย</li><br>","name":"ป้ายไบลท์สีรุ้ง","flavor":"\\"ต้องมีการเปลี่ยนแปลงที่รุนแรงถึงจะมีความคืบหน้า\\" —ทัลบอต กริมส์","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"ความพยายามกับเซรุ่มครั้งรองสุดท้ายของทัลบอต แม้จะไม่ช่วยให้เขาหลบหนีได้สะดวก แต่มันก็ให้ผลข้างเคียงที่ทรงพลัง<br><br><li>ผู้รอดชีวิตคนใดที่อยู่ในรัศมี <b>16 เมตร</b> ของการกระแทกจะติดเอฟเฟกต์สถานะ <b>ถูกกีดขวาง</b>เป็นเวลา <b>3 วินาที</b>.</li><li>การกระแทกแท่นไม้หรือกำแพงที่พังได้จะทำลายมันและสตันเดอะไบลท์เป็นเวลา <b>1.5 วินาที</b></li><br>","name":"สารประกอบสามสิบสาม ","flavor":"\\"ไม่มีเวลาแล้ว ให้นี่เป็นหนึ่งเดียวนั้นเถอะ...\\" —ทัลบอต กริมส์","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"ดาบของเล่นอันจิ๋ว ยาวแค่ไม่กี่นิ้ว การถือมันไว้ดึงเอาความกระหายในความรุนแรงของวิกตอร์ออกมา<br><br><li>ระยะเวลาในการชาร์จตะครุบ<b>ลดลงเล็กน้อย</b></li>","name":"ดาบของเล่น","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"ชาร์ลอตต์มีวิธีไว้ทุกข์ให้วิกตอร์อยู่มากมาย เมื่อเล็บของเขาหลุดออกจากมือที่กำลังเน่า เธอก็เก็บมันไว้เป็นที่ระลึกชิ้นหนึ่ง<br><br><li>เวลาที่วิกตอร์ใช้ในการแยกตัวจากชาร์ลอตต์<b>ลดลงปานกลาง</b></li>","name":"เล็บนิ้วมือเล็กๆ","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"ขวดเหล็กใส่นมที่บูดมาก่อนแล้ว ไม่ว่าวิกตอร์จะร้องดังแค่ไหน พอเห็นอาหารของตัวเองแล้วเขาก็เงียบลง<br><br><li>รัศมีเสียงกรีดร้องของวิกตอร์<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"นมบูด","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"รูปแกะสลักไม้ที่วิกตอร์น้อยจ้องตาเป็นมัน เขากรีดร้องจนแม่ต้องไปขโมยมาจากตลาดแถมยังเกือบโดนจับได้<br><br><li>แสดงตำแหน่งของเป้าหมายการตะครุบ</li>","name":"รูปแกะสลักแมว","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"ถุงมือซึ่งครั้งหนึ่งเป็นของแม่เดอะทวินส์ ในห้วงเวลาอันสิ้นหวัง มันถูกใช้ปิดปากวิกตอร์ไม่ให้ร้อง<br><br><li>รัศมีเสียงกรีดร้องของวิกตอร์<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ถุงมือของมาเดอลีน","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"เชิงเทียนที่วิกตอร์ปัดล้มทำให้คนที่จับเขาไว้โดนไฟลวก เป็นสัญลักษณ์แห่งการยืนหยัดขัดขืนของเขา<br><br><li>ระยะเวลาที่ต้องใช้ในการขยี้วิกตอร์<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เชิงเทียนประกอบพิธี","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"ลูกตาของแมวที่ครอบครัวเดชายส์ผู้อดอยากกินไป วิกตอร์ซ่อนมันไว้ไม่ให้แม่เห็น เอาไว้เป็นของเล่น<br><br><li>เสียงกรีดร้องของวิกตอร์หยุดลงเมื่อชาร์จตะครุบเต็มแล้ว</li>","name":"ลูกตาแมว","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"ที่กลุ่มของชายคนหนึ่งในกลุ่มที่ตามล่าชาร์ลอตต์ แต่ไม่นานเขาก็กลายเป็นเหยื่อเสียเอง<br><br><li>ระยะเวลาที่ชาร์ลอตต์ใช้เพื่อตื่นขึ้นจากสภาวะหยุดนิ่ง<b>ลดลงเล็กน้อย</b></li>","name":"ฮู้ดดำเปื้อนเลือด","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"ฟันสองซี่ที่วิกตอร์เสียไปเมื่อนานมาแล้ว พวกมันคมอย่างไม่ธรรมดา<br><br><li>ผู้เล่นที่แกะวิกตอร์ออกจะติดเอฟเฟกต์สถานะตาบอดเป็นเวลา <b>15 วินาที</b></li>","name":"ฟันน้ำนม","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"ของเล่นเด็กถูกๆ ที่วิกตอร์ร้องจะเอาจนแม่ของเขาขโมยมันมาให้ มันหนักเกินไปจนเด็กไม่มีทางถือได้<br><br><li>ผู้รอดชีวิตที่แกะวิกตอร์ออกจะติดเอฟเฟกต์สถานะ<b>ผุพัง</b>เป็นเวลา <b>20 วินาที</b></li> ","name":"ของเล่นเด็กถ่วงน้ำหนัก","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"บิสกิตแข็งเป๊กขาดการปรุงแต่งที่มาเดอลีนขโมยมาจากตลาดในเมือง มันไม่ได้มากมายอะไร แต่ก็ยังดีกว่ามื้ออาหารส่วนใหญ่นัก<br><br><li>คูลดาวน์ของตะครุบ<b>ลดลงเล็กน้อย</b></li>","name":"บิสกิตเหม็นหืน","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"สารเหนียวเหนอะน่าขยะแขยงที่ปกคลุมตัวเดชายส์ทั้งสองขณะพยายามหนีไปตามท่อระบายน้ำของเมือง<br><br><li>เวลาที่ผู้รอดชีวิตต้องใช้ในการแกะวิกตอร์ออก<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"กากท่อระบายน้ำ","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"เข็มขึ้นสนิม","name":"เข็มขึ้นสนิม","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"เสื้อผ้าที่มาเดอลีนสวมใส่ไม่นานก่อนตาย เดอะทวินส์เก็บมันไว้เสมือนเครื่องเตือนใจ<br><br><li>ความเร็วของวิกตอร์<b>เพิ่มขึ้นเล็กน้อย</b></li><br>","name":"ผ้าพันคอของมาเดอลีน","flavor":"\\"...ดังนั้นจึงควรได้รับการบันทึกไว้ในฐานะการทำประโยชน์เพื่อส่วนรวมและการทำลายล้างความชั่วร้ายให้สิ้นไป\\" — การไต่สวนเรื่องความตายของมาเดอลีน เดชายส์","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"ทหารของเล่นที่วิกตอร์กอดไว้ในยามหวาดกลัว อะไรบางอย่างในนั้นปลุกเร้าความอิจฉาของชาร์ลอตต์ขึ้นมา<br><br><li>หากผู้รอดชีวิตขยี้วิกตอร์ตอนเขาอยู่นิ่งๆ พวกเขาจะถูกเผยออร่าเป็นเวลา <b>6 วินาที</b></li><br>","name":"ทหารของวิกตอร์","flavor":"ฮึบ--ฮึบ—ค่าคนมั่ยดี...\\" — วิกตอร์ เดชายส์","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"ลูกข่างไม้ที่เดอะทวินส์แบ่งกันเล่น แม้วิกตอร์จะอยากเป็นเจ้าของคนเดียวก็ตาม เขาเรียนรู้ว่าถ้าตัวเองเกาะให้แน่แล้วกรีดร้องก็จะได้สิ่งที่ต้องการ<br><br><li>เมื่อถูกวิกตอร์เกาะติดผู้รอดชีวิตจะทำไอเท็มหล่น</li><br>","name":"ลูกข่างหมุน","flavor":"\\"ชู่ว... ชู่ว... งั้นก็เอาไปเถอะนะ\\" — ชาร์ลอตต์ เดชายส์","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"รำสัตว์เคี่ยวจากผักผสมด้วยมอสและเปลือกไม้เพื่อให้รู้สึกอยู่ท้อง<br><br><li>ความเร็วของวิกตอร์<b>เพิ่มขึ้นปานกลาง</b></li><br>","name":"สตูว์ป่า","flavor":"\\"กินสิ... กินเข้าไปลูก เดี๋ยวกลืนลงไปแล้วก็ดีขึ้นเอง\\" — มาเดอลีน เดชายส์","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"หนึ่งในของฟุ่มเฟือยเพียงไม่กี่ชิ้นที่มาเดอลีนใช้หนีจากชีวิตในอดีต มันมีกลิ่นที่ทำให้ผ่อนคลายสบายใจ<br><br><li>ผู้รอดชีวิตที่อยู่ในรัศมีเสียงกรีดร้องของวิกตอร์จะติดเอฟเฟกต์สถานะ<b>ไม่รู้ตัว</b></li><br>","name":"หยดน้ำหอม","flavor":"\\"จงระวังกลอุบายของแม่มดเพราะพวกมันจะฉวยโอกาสจากความดีงามในใจมนุษย์\\" — ประวัติของแม่มดและปีศาจ (1602)","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"เศษผ้าหยาบๆ ที่ชาร์ลอตต์ในวัยห้าขวบยัดใส่ปากตัวเองไม่ให้กรีดร้องตอนพวกนักล่าอยู่แถวนั้น<br><br><li>ชาร์ลอตต์ได้รับเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>เป็นเวลา <b>20 วินาที</b></li><br>","name":"ผ้าอุดปาก","flavor":"\\"หนูไม่อยากเล่นแล้วแม่...\\" — ชาร์ลอตต์ เดชายส์","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"จี้ห้อยคอที่หลอมตัวขึ้นจากสายหมอก มีภาพเหมือนของมาเดอลีน เดชายส์ อยู่บนนั้น กระนั้นบางสิ่งบนภาพของเธอก็ยังไม่เรียบร้อย<br><br><li>หากผู้รอดชีวิตขยี้วิกตอร์ตอนเขาอยู่นิ่งๆ พวกเขาจะติดเอฟเฟกต์สถานะ<b>ปลอดกำบัง</b>เป็นเวลา <b>30 วินาที</b></li><br>","name":"จี้ห้อยคอสีรุ้ง","flavor":"\\"การที่ตัวติดกันไม่ใช่คำสาปหรอกลูกรัก แต่คือพลังให้ลูกดึงมันมาใช้\\" — มาเดอลีน เดชายส์","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"ถุงเล็กๆ ที่มีกระเป๋าลับอยู่หลายใบ เคยใช้โดยนักมายากลและคนที่มีอะไรต้องซ่อน<br><li>จำนวนมีดสูงสุดที่พกได้<b>เพิ่มขึ้น</b> <b>10</b> เล่ม</li><li>เริ่มเกมพร้อมมีดพิเศษ <b>10</b> เล่ม</li>","name":"ถุงมายากล","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"มีดสนิมเลือดที่ผุพังเพราะใช้งานหนักเกินไป ถูกใช้ในการฆาตกรรมช่วงแรกๆ ของจีอุน มันเป็นสิ่งสำคัญในใจเขา <br><li>รับแต้มเลือดโบนัส <b>100%</b>สำหรับอีเวนท์คะแนน<b>ผู้ยับยั้งการแสดง</b></li><li>มิเตอร์การฉีกขาดของผู้รอดชีวิตแต่ละคน<b>เพิ่มขึ้นปานกลาง</b></li>","name":"มีดเมเมนโต้","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"ทางคอร์ดที่จีอุนไม่เคยหาเนื้อเพลงเหมาะๆ ให้ได้ เสียงของมันนั้นติดหูอย่างไม่อาจปฏิเสธ<br><li>ความเร็วการเคลื่อนที่ขณะปาใบมีด<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"คอร์ดท่อนสังหาร","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"สายไฟไหม้เกรียมจากเหตุการณ์เพลิงไหม้สตูดิโอที่คร่าชีวิตสมาชิกของ NO SPIN ไปสี่จากห้าคน ความตายของพวกเขาทำให้เดอะทริกสเตอร์ถือกำเนิดขึ้น<br><li>ระยะเวลาของอีเวนท์หลัก<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"สายไฟเพลิงนรก","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"เครื่องดื่มที่สร้างสรรค์ขึ้นในบาร์ชางวอนอันเรียบง่าย และกลายเป็นของโปรดของจีอุน<br><li>ระยะเวลาของอีเวนท์หลัก<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เตกีลามูนร็อก","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"ซิงเกิลใต้ดินที่จีอุนทำก่อนจะกลายเป็นคนมีชื่อเสียง มีแต่แฟนรุ่นเดอะของ NO SPIN เท่านั้นที่สะสมอัญมณีเร้นลับนี้เอาไว้<br><li>ระยะเวลาก่อนที่มิเตอร์การฉีกขาดจะเริ่มลดลง<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ซิงเกิลเข้าเป้า","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"มีดปาเล่มแรกที่จีอุนได้มีเป็นของตัวเอง พ่อเป็นคนซื้อให้ เขาหวังจะใช้มันโชว์ให้พวกที่ไปภัตตาคารของครอบครัวบ่อยๆ ดู<br><li>เมื่อมีดหมดแล้ว ระยะเวลาที่มิเตอร์การฉีกขาดของผู้รอดชีวิตแต่ละคนจะลดลง<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"มีดนำโชค","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"ลายเซ็นคนดังที่รู้จักกันในชื่อเดอะทริกสเตอร์ ข้อมือเขาปวดไปหมดเพราะต้องเซ็นแบบนี้เป็นร้อยๆ การได้รู้ว่าเขาเป็นที่ต้องการถึงเพียงนี้นั้นช่างทำให้มีชีวิตชีวา<br><li>อัตราปามีดแรกเริ่ม<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ลายเซ็นของจีอุน","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"รองเท้าที่จีอุนสวมใส่ในมิวสิกวิดีโอหนึ่งใจในกรงขัง ช่วยให้เคลื่อนไหวได้อย่างราบรื่นและงดงามยามเต้นปลายเท้า<br><li>ความเร็วการเคลื่อนที่ขณะปามีด<b>เพิ่มขึ้นปานกลาง</b></li>","name":"รองเท้าหัวใจในกรงขัง","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"กระเป๋าที่จีอุนสวมขณะแสดงสดเพลงจะรอคอยเธอเสมอ มันเป็นพร็อพบนเวทีที่ใช้งานจริงไม่ได้และไม่มีวันใช้ได้<br><li>เมื่อมีดหมดแล้วระยะเวลาการลดลงของมิเตอร์การฉีกขาดของผู้รอดชีวิตจะ<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"นาฬิการอเธอ","flavor":"“อย่าทิ้งฉันไป<br>อย่าบอกว่าไม่มีเราแล้ว<br>ไม่มีทางจะหนีไป<br>จะรอคอยเธอเสมอ”<br>— “จะรอคอยเธอเสมอ” ของ NO SPIN","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"ปลอกข้อมือที่จีอุนสวมใส่ขณะถ่ายทำมิวสิกวิดีโอมือเชือด แม้จะไม่ตั้งใจ แต่การออกแบบก็ทำให้มันช่วยยึดข้อมือได้มั่นคงกว่าปลอกที่ใช้ทางการแพทย์เสียอีก<br><li>ระยะเวลาก่อนที่มิเตอร์การฉีกขาดจะเริ่มลดลง<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ปลอกมือเชือด","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"ไฟล์เสียงกรีดร้องชัดใสแจ่มแจ๋วของเหยื่อ จีอุนใส่เสียงนั่นลงไปในเพลงดังเพลงหนึ่งของเขาด้วย<br><li>มิเตอร์การฉีกขาดของผู้รอดชีวิตแต่ละคน<b>ลดลงปานกลาง</b></li>","name":"ฆาตกรรมอันมีท่วงทำนอง","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"น้ำอัดลมกระป๋องรุ่นลิมิเต็ดอีดิชันที่ทำขึ้นเพื่อโปรโมต NO SPIN มีน้ำตาลและคาเฟอีนสูง<br><li>อัตราการปาแรกเริ่ม<b>เพิ่มขึ้นปานกลาง</b></li>","name":"น้ำอัดลมฟองฟู่","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"งูที่จีอุนใช้พันรอบคอของเหยื่อที่ถูกปาด มีกระเป๋าจำนวนมากซ่อนอยู่ภายใน<br><li>จำนวนมีดสูงสุดที่พกได้<b>เพิ่มขึ้น</b> <b>15</b> เล่ม</li><li>เริ่มเกมพร้อมมีดพิเศษ <b>15</b> เล่ม</li>","name":"งูเปื้อนเลือด","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"ใบมีดอันมีลักษณะเฉพาะสุดพิเศษซึ่งมีแต่คนขาดจินตนาการเท่านั้นที่จะเห็นว่ามีตำหนิ จีอุนในวัยเยาว์ทำให้ผู้ชมพิศวงงงงวยไปกับมายากลที่เขาแสดง<br><li>ใบมีดเด้งกระดอนไปตามสิ่งต่างๆ โดยรอบสองครั้ง ทำความเสียหาย</li><li>การกระดอนโดนจะทำให้ได้แต้มเลือดโบนัส</li>","name":"มีดมายากล","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"อัลบั้มเดบิวต์ของเดอะทริกสเตอร์ น้ำเสียงหยาบกร้านชั่วร้ายจะนำมาซึ่งเสียงตอบรับอันหลากหลายจากแฟนๆ กระนั้นก็เป็นที่สรรเสริญอย่างใหญ่หลวง<br><li>ใบมีดแตกกระจายเมื่อกระทบเข้ากับสิ่งต่างๆ ที่แวดล้อม สร้าง<b>การฉีกขาด 50%</b>แก่ผู้รอดชีวิตในบริเวณใกล้เคียง</li>","name":"อัลบั้มสุดขอบของการคืนชีพ","flavor":"“เสียงกระซิบของเธอ<br>ช่างแสนอบอุ่น<br>มันแผดเผาลมหายใจ<br>จนฉันหายใจไม่ออก”<br>— “อุ่นไอเสียงกระซิบ” ของเดอะทริกสเตอร์ ","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"กระดุมกลัดแขนเสื้อที่ใช้ควักลูกตาแฟนคลับโรคจิตที่ทำผิดฐานตามสตอล์กจีอุน พอขัดถูด้วยเลือดแล้วมันก็ระยิบระยับจับตา<br><li>เมื่อมิเตอร์การฉีกขาดของผู้รอดชีวิตอยู่ในระดับที่โดนมีดอีกทีก็เต็ม จะเปิดเผยออร่าของพวกเขาเป็นเวลา <b>6 วินาที</b></li>","name":"กระดุมกลัดแขนเสื้อเพชร","flavor":"“ชู่ววว... เธอไม่ต้องเห็นเลือดตัวองแล้วนะ”—ฮัคจีอุน","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"ซิงเกิลแรกที่ NO SPIN ปล่อยออกมาหลังจีอุนเป็นสมาชิกวง ฆ่าเรียบทุกเพลงบนชาร์ทของเกาหลี<br><li>ใบมีดแทงทะลุผู้รอดชีวิต</li><li>ผู้เล่นที่โดนใบเดียวกันเป็นคนต่อไปจะโดน<b>การฉีกขาด 50%</b></li>","name":"ซิงเกิลรักหั่นใจ","flavor":"“หยุดยั้งรักนี้ไม่ได้<br>มันฉีกหัวใจเป็นชิ้น<br>ไม่ว่าเธอไปไหน<br>ฉันจะหั่นให้เป็นชิ้นๆ”<br>— “รักหั่นใจ” ของ NO SPIN ","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"รูปถ่ายใสคล้ายแก้วที่ก่อตัวขึ้นเองจากสายหมอก ดวงตาของจีฮุนเป็นประกายลอยออกมาเหนือใบหน้าที่กำลังฉีกยิ้มของเขา<br><li>เมื่อมิเตอร์การฉีกขาดของผู้รอดชีวิตอยู่ในระดับที่โดนมีดอีกทีเดียวเต็ม พวกเขาจะติดเอฟเฟกต์สถานะ<b>ปลอดกำบัง</b></li>","name":"การ์ดรูปถ่ายสีรุ้ง","flavor":"“ไม่เป็นไรนะ ร้องเป็นชื่อฉันสิ... ให้ฉันได้ยินหน่อยว่าความเจ็บปวดมันปลุกอะไรขึ้นมาบ้าง” —ฮัคจีอุน","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"คอลเลกชันรวมเสียงสุดท้ายจากเหยื่อของจีอุน เอามาแปลงลงแผ่นไวนิล ดิบสะท้านอารมณ์แถมน่าสะพรึง<br><li>การฉีกขาดที่เกิดจากมีดขึ้นอยู่กับความใกล้ชิดเป้าหมาย โดยเริ่มที่ <b>50%</b></li><li>มีดแต่ละเล่มที่โดนจะเพิ่มการฉีกขาดที่เกิดจากมีดได้สูงสุดถึง <b>200%</b></li><li>เมื่อมีดพลาดเป้า การฉีกขาดที่เกิดจากมีดจะรีเซ็ตกลับไปเป็นค่าเริ่มต้น</li>","name":"รวมความตายอันรวดร้าว","flavor":"ขอร้องล่ะ อย่านะ... อย่าทำให้ฉันเจ็บ... ฉันไม่... ฉัน...” —เสียงที่ระบุตัวตนไม่ได้","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"สายรัดข้อมืออิเล็กทรอนิกส์ของอัมเบรลลาที่มีไว้สำหรับผู้เยี่ยมชมศูนย์วิจัย มันทำหน้าที่อีกอย่างเป็นอุปกรณ์ติดตามด้วย<li>ระยะตรวจจับของซอมบี้<b>เพิ่มขึ้นปานกลาง</b></li>","name":"สายรัดข้อมือของผู้เยี่ยมชม","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"คู่มือที่รวบรวมความรู้ในการต่อสู้ระยะประชิดของ S.T.A.R.S. เอาไว้ แก้ไขโดยคริส เรดฟิลด์<li>หลังโจมตีโดนผู้รอดชีวิตแล้ว ออร่าของซอมบี้จะกลายเป็นสีเหลืองเป็นเวลา <b>6 วินาที</b></li>","name":"คู่มือการต่อสู้ภาคสนามของ S.T.A.R.S.","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"อุปกรณ์การแพทย์คุณภาพแย่เมื่อครั้งที่ความโกลาหลอลหม่านท่วมถมแร็กคูนซิตี้<li>เวลาที่ผู้รอดชีวิตต้องใช้ในการฉีดวัคซีน<b>เพิ่มขึ้นเล็กน้อย</b></li><li>เมื่อผู้รอดชีวิตใช้วัคซีน ระยะเวลาของสัญชาตญาณฆาตกรจะ<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"เข็มฉีดยาเสียหาย","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"ลำไส้เล็กของไบรอัน ไอรอนส์ หัวหน้าหน่วย RPD ซอมบี้เห็นแล้วเจริญอาหาร<li>ความเร็วการเคลื่อนที่ของซอมบี้<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ลำไส้เล็กของไบรอัน","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"หัวใจซอมบี้ที่ถูกควักออกมา ถือเป็นขยะมีพิษเพราะมีไวรัสอยู่คับคั่ง<li>เมื่อใช้หนวดพิฆาตทำลายซอมบี้แล้วอัตราการกลายพันธุ์จะ<b>เพิ่มขึ้นปานกลาง</b></li><br>","name":"หัวใจสีดำซอมบี้","flavor":"\\"พูดกับไอ้นี่ไปก็ไร้ประโยชน์\\" —ลีออน เอส. เคนเนดี","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"แม้มิคาอิลจะแทบไม่เหลืออะไร แต่ดวงตาข้างซ้ายของเขาก็รอดจากการระเบิดที่คร่าชีวิตเขามาได้ มันยังเป็นของอร่อยสำหรับซอมบี้<li>ความเร็วการเคลื่อนที่ของซอมบี้<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ลูกตาของมิคาอิล","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"เลือดปนเปื้อนของเจ้าหน้าที่ตำรวจเมืองแร็กคูนซิตี้<li>เมื่อใช้หนวดพิฆาตโจมตีโดนศัตรูแล้วอัตราการกลายพันธุ์จะ<b>เพิ่มขึ้นปานกลาง</b></li><br>","name":"เลือดของมาร์วิน","flavor":"\\"ที่คุณต้องรู้ก็มีแค่ ถ้าไม่ระวัง ที่นี่จะกินคุณทั้งเป็น\\" —มาร์วิน บรานาห์","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"ฮอร์โมนที่ช่วยเพิ่มความเฉียบคมของประสาทสัมผัสและเตรียมร่างกายให้พร้อมต่อสู้<li>เมื่อผู้รอดชีวิตใช้วัคซีน ระยะเวลาของเอฟเฟกต์สัญชาตญาณฆาตกรจะ<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"เข็มฉีดอะดรีนาลิน","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"สายรัดข้อมืออิเล็กทรอนิกส์ของอัมเบรลลาที่มีไว้สำหรับผู้เยี่ยมชมศูนย์วิจัย แม้จะมีไว้อนุญาตให้เข้าพื้นที่หวงห้าม แต่มันก็ทำหน้าที่อีกอย่างเป็นอุปกรณ์ติดตามด้วย<li>ระยะตรวจจับของซอมบี้<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"สายรัดข้อมือของผู้ดูแล","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"ตัวอย่างในสภาพเสียหายของไทแรนท์ T-002 ที่ตายลงในการต่อสู้ มีร่องรอยการถูกเผารุนแรงให้เห็น<li>อัตราการกลายพันธุ์เมื่อใช้หนวดพิฆาตทำลายซอมบี้<b>เพิ่มขึ้นปานกลาง</b><li>ลดเวลาการเกิดใหม่ของซอมบี้ลงปานกลาง","name":"เครื่องในไทแรนท์","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"ตัวอย่าง T-virus ที่อัมเบรลลาคอร์ปอเรชันพัฒนาขึ้น มันทำให้ตัวอย่างทดลองกลายพันธุ์อย่างรุนแรงและเกิดความเสียหายแก่สมอง<li>อัตราการกลายพันธุ์เพื่อใช้หนวดพิฆาตทำลายซอมบี้<b>เพิ่มขึ้นอย่างมาก</b> ","name":"ตัวอย่าง T-Virus","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"ฮอร์โมนที่ช่วยผ่อนคลายผู้เล่นลงเล็กน้อยเมื่อต้องซ่อนตัว<li>เมื่อซอมบี้ถูกทำลาย จะได้รับเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>เป็นเวลา <b>15 วินาที</b></li>","name":"เข็มฉีดเซโรโทนิน","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"ส่วนหลงเหลือที่พันกันยุ่งเหยิงของพืชที่ติด T-virus มันฆ่านักวิจัยที่พัฒนามันขึ้นไปคนหนึ่ง<li>เวลาที่ผู้รอดชีวิตเปิดกล่องเครื่องใช้<b>เพิ่มขึ้นอย่างมาก</b>","name":"เถาวัลย์ของแพลนต์ 43 ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"ลิ้นเหนียวหนึบที่ใช้จับยึดสิ่งต่างๆ ได้ซึ่งพันรอบทุกสิ่งที่สัมผัสได้อย่างง่ายดาย<li>เวลาที่ผู้รอดชีวิต<b>ถูกกีดขวาง</b>หลังจากติดปนเปื้อน<b>เพิ่มขึ้นปานกลาง</b></li><br>","name":"ลิ้นของลิคเกอร์","flavor":"\\"มัน... อย่างกับฝันร้ายแน่ะ\\" —แคลร์ เรดฟิลด์","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"ปรสิตที่ใช้ในการพัฒนาเนเมซิส T-Type มันเข้ายึดสมองของร่างอาศัยได้<li>เมื่อได้รับผลของการการติดเชื้อ ผู้รอดชีวิตที่ถูกปนเปื้อนจะติดเอฟเฟกต์สถานะ<b>ไม่รู้ตัว</b>เป็นเวลา 60 วินาที","name":"ปรสิต NE-α","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"มันหยึมแหยะและหยดแหมะด้วยเลือดจากการต่อสู้ครั้งล่าสุด แต่ถึงอย่างนั้น ก็ยังให้กลิ่นหอมอร่อยที่พลาดไม่ได้<li>หลังจากปลดล็อคกล่องเครื่องใช้แล้วจะเผยออร่าผู้รอดชีวิตเป็นเวลา <b>12 วินาที</b></li>","name":"แซนด์วิชของจิลล์","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"แล้วทีนี้ใครจะช่วยพวกเขาล่ะ? แถบหมึกนี่มีอะไรบางอย่างที่ไปกระตุ้นพวกซอมบี้<li>เวลาเกิดใหม่ของซอมบี้<b>ลดลงอย่างมาก</b></li><li>ความเร็วในการเคลื่อนที่ของซอมบี้เพิ่มขึ้นปานกลาง</li><li>เมื่อซ่อมเครื่องปั่นไฟไป <b>5</b> เครื่อง ซอมบี้ที่ถูกทำลายไปแล้วจะเกิดใหม่ที่บริเวณทางออก</li><br>","name":"แถบหมึกที่หมดแล้ว","flavor":"\\"นี่ จะบอกไว้นะ... นี่แม่งครั้งสุดท้ายแล้ว\\" —จิลล์ วาเลนไทน์","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"เหรียญที่สลักรูปนอกล้อมรอบด้วยพวงมาลัยช่อลอเรลเอาไว้ มันหักครึ่ง <li>เอากล่องเครื่องใช้ออกจากเกม <b>1</b> กล่อง</li><br>","name":"เหรียญฟื้นฟูชำรุด","flavor":"\\"ไม่นึกว่าวันแรกต้องมาเจออะไรแบบนี้\\" —ลีออน เอส. เคนเนดี","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"สัญลักษณ์ของแร็กคูนซิตี้ ซึ่งถูกทำลายโดยสิ้นเชิง<li>หลังจากซ่อมเครื่องปั่นไฟแล้วความเร็วการเคลื่อนที่ของซอมบี้<b>เพิ่มขึ้นมหาศาล</b>เป็นเวลา <b>30 วินาที</b></li><br>","name":"ตรา S.T.A.R.S. แตกเป็นเสี่ยง","flavor":"\\"S.T.A.R.S...\\" —เนเมซิส","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"ตราที่ดูคล้ายแก้ว หล่อเป็นรูปร่างจากสายหมอกด้วยตัวเอง มันเป็นสัญลักษณ์ขององค์กรที่ก้าวข้ามพ้นไปจากจริยศาสตร์และมนุษยศาสตร์<li>ผู้รอดชีวิตที่ใช้วัคซีนจะติดเอฟเฟกต์สถานะ<b>ปลอดกำบัง</b>เป็นเวลา <b>12 วินาที</b></li><br>","name":"ตราอัมเบรลลาสีรุ้ง","flavor":"\\"ความมุ่งมั่น ความซื่อสัตย์ และความยึดมั่นในคุณธรรม เหล่านี้คือคุณค่าสำคัญที่สร้างรากฐานให้อัมเบรลลาคอร์ป\\" —ดร.แมตต์ กอร์คิส","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/th/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/th/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"มอบแต้มเลือดโบนัส <b>50%</b> หมวดอำมหิต<br><li>ทับซ้อน</li>","name":"พวงดอกไม้นกกระติ๊ด","flavor":"\\"พวงหรีดที่ทำจากไม้และไส้โชกเลือด เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"มอบแต้มเลือดโบนัส <b>75%</b> ในหมวดอำมหิต<br><li>ทับซ้อน</li>","name":"พวงหรีดนกกระติ๊ดศรัทธาแรงกล้า","flavor":"\\"พวงหรีดที่ทำจากเศษไม้ เส้นด้าย และกระดูกด้วยใจที่เปี่ยมด้วยศรัทธา เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"มอบแต้มเลือดโบนัส <b>100%</b> ในหมวดอำมหิต<br><li>ทับซ้อน</li>","name":"พวงดอกไม้นกกระติ๊ดร้อนแรง","flavor":"\\"พวงหรีดที่ทำจากเศษไม้ เส้นด้าย และกระดูกด้วยอารมณ์ฉุนเฉียวที่ไม่มีวันจบ เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"มอบแต้มเลือดโบนัส <b>50%</b> ในหมวดความเจ้าเล่ห์<br><li>ทับซ้อน</li>","name":"พวงดอกไม้อีกา","flavor":"\\"พวงหรีดที่ทำจากกิ่งไม้และถ่าน เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"มอบแต้มเลือดโบนัส <b>75%</b> ในหมวดความเจ้าเล่ห์<br><li>ทับซ้อน</li>","name":"พวงหรีดอีกาศรัทธาแรงกล้า","flavor":"\\"พวงหรีดที่ทำจากกิ่งไม้ดำและถ่านด้วยใจที่เปี่ยมด้วยศรัทธา เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"มอบแต้มเลือดโบนัส <b>100%</b> ในหมวดความเจ้าเล่ห์<br><li>ทับซ้อน</li>","name":"พวงดอกไม้อีการ้อนแรง","flavor":"\\"พวงหรีดที่ทำจากกิ่งไม้ดำและถ่านด้วยอารมณ์ฉุนเฉียวที่ไม่มีวันจบ เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"มอบแต้มเลือดโบนัส <b>50%</b> ในหมวดนักล่า<br><li>ทับซ้อน</li>","name":"พวงดอกไม้นกเค้าจุด","flavor":"\\"พวงหรีดที่ทำจากเหล็กแหลม เชือก และขนนก เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"มอบแต้มเลือดโบนัส <b>75%</b> ในหมวดนักล่า<br><li>ทับซ้อน</li>","name":"พวงหรีดนกเค้าศรัทธาแรงกล้า","flavor":"\\"พวงหรีดที่ทำจากเหล็กแหลม เชือก และขนนกด้วยใจที่เปี่ยมด้วยศรัทธา เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"มอบแต้มเลือดโบนัส <b>100%</b> ในหมวดนักล่า<br><li>ทับซ้อน</li>","name":"พวงดอกไม้นกเค้าจุดร้อนแรง","flavor":"\\"พวงหรีดที่ทำจากเหล็กแหลม เชือก และขนนกด้วยอารมณ์ฉุนเฉียวที่ไม่มีวันจบ เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"มอบแต้มเลือดโบนัส <b>50%</b> ในหมวดบูชายัญ<br><li>ทับซ้อน</li>","name":"พวงดอกไม้นกอีเสือ","flavor":"\\"พวงหรีดที่ทำจากเศษไม้ เส้นด้าย และกระดูก เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"มอบแต้มเลือดโบนัส <b>75%</b> ในหมวดบูชายัญ<br><li>ทับซ้อน</li>","name":"พวงหรีดนกอีเสือศรัทธาแรงกล้า","flavor":"\\"พวงหรีดที่ทำจากเศษไม้ เส้นด้าย และกระดูกด้วยใจที่เปี่ยมด้วยศรัทธา เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"มอบแต้มเลือดโบนัส <b>100%</b> ในหมวดบูชายัญ<br><li>ทับซ้อน</li>","name":"พวงดอกไม้นกอีเสือร้อนแรง","flavor":"\\"พวงหรีดที่ทำจากเศษไม้ เส้นด้าย และกระดูกด้วยอารมณ์ฉุนเฉียวที่ไม่มีวันจบ เพื่อร้องขอเลือดเพิ่มจากเอนทิตี\\"","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"มอบแต้มเลือดโบนัส <b>25%</b> ในทุกหมวดหมู่<br><li>ทับซ้อน</li>","name":"เปลือกกลวงเปล่า","flavor":"\\"รังไหมของตัวอะไรไม่รู้ถูกทำลายโดยสิ่งที่อยู่ข้างใน","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"มอบแต้มเลือดโบนัส <b>100%</b> ในทุกหมวดหมู่<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"พุดดิ้งผู้รอดชีวิต","flavor":"\\"พุดดิ้งเค็มปี๋...\\"","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"ร้องขอเอนทิตีเพื่อลดจำนวนหีบ <b>2</b> ใบ <br><li>ทับซ้อน</li>","name":"เหรียญโดนตัด","flavor":"\\"เศษเหรียญโลหะหนาๆ 2 เหรียญ\\"","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"ร้องขอให้เอนทิตีลดจำนวนหีบลง <b>1</b> ใบ<br><li>ทับซ้อน</li>","name":"เหรียญขูดขีด","flavor":"\\"เหรียญมีรอยที่ไม่มีที่มาที่ไป\\"","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"เรียกเอนทิตีมาเพื่อทำให้<b>ระยะห่าง</b>ระหว่างตะขอบูชายัญที่ปรากฏบนโลก<b>ลดลงเล็กน้อย</b><br><li>ทับซ้อน</li>","name":"ไม้โอ๊กขึ้นรา","flavor":"\\"เศษไม้โอ๊กชื้นๆ เน่าเปื่อยและเต็มไปด้วยรา\\"","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"ร้องขอเอนทิตีเพื่อให้<b>ระยะห่าง</b>ระหว่างตะขอบูชา<b>ลดลงปานกลาง</b><br><li>ทับซ้อน</li>","name":"ไม้โอ๊กเน่าเปื่อย","flavor":"\\"เศษต้นโอ๊คที่เน่าเปื่อยที่มีรอยแกะสลักเครื่องหมายแปลกประหลาด\\"","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"ร้องขอเอนทิตีเพื่อทำให้<b>ระยะห่าง</b>ระหว่างตะขอบูชา<b>ลดลงอย่างมาก</b><br><li>ทับซ้อน</li>","name":"ไม้โอ๊กเน่าเหม็น","flavor":"\\"เศษไม้โอ๊คที่เน่าเปื่อยมีน้ำเน่าสีดำไหลออกมา\\"","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"มอบความสามารถในการ<b>ฆ่าผู้รอดชีวิตคนสุดท้าย</b>ได้ด้วยน้ำมือของคุณเองในการเล่นครั้งต่อไป<br><li>ความลับ</li>","name":"เมเมนโต้โมริไม้ไซปรัส","flavor":"\\"ทำได้ดีมาก เหยื่อคนสุดท้ายเป็นของเจ้าแล้ว\\"","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"มอบความสามารถในการ<b>ฆ่าผู้รอดชีวิตคนหนึ่ง</b>ที่อยู่ใน<b>สถานะตะขอที่สอง</b>ด้วยน้ำมือของคุณเองในการเล่นครั้งต่อไป<li>ความลับ</li>","name":"เมเมนโต้โมริงาช้าง","flavor":"\\"ให้ฉันได้ฆ่าสักคนเถอะนะ\\"","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"มอบความสามารถในการ<b>ฆ่าผู้รอดชีวิตทุกคนที่อยู่ใน</b><b>สถานะตะขอที่สอง</b>ด้วยน้ำมือของตัวเองในเกมถัดไป<li>ความลับ</li>","name":"เมเมนโต้โมริไม้ตะโก","flavor":"\\"ฉันสาบานได้ว่าเห็นมันคุยอยู่กับอสูรร้าย มันหยุดชะงักไป เหมือนกับกำลังตั้งใจฟังเสียงใบไม้ดังกรอบแกรบ แล้วมัน... ก็ฉีกยิ้ม\\"","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"ผู้รอดชีวิตทุกคนเริ่มเกมแยกจากกัน<br><li>ความลับ</li>","name":"ผ้าคลุมแห่งการแยกจาก","flavor":"\\"ผ้าหน้าสีดำที่ถูกฉีกขาด\\"","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/th/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/th/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"ปลดล็อคความสามารถในการอ่านออร่า ทุกครั้งที่มีการซ่อมแซมเครื่องปั่นไฟจนสำเร็จ จะมองเห็นผู้รอดชีวิตที่อยู่ภายในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>จากเครื่องปั่นไฟที่ซ่อมเสร็จแล้วเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>เมื่อซ่อมแซมเครื่องปั่นไฟเครื่องสุดท้ายเสร็จสิ้นแล้ว จะมองเห็นออร่าของผู้รอดชีวิตทุกคนเป็นเวลา <span class=\\"Highlight3\\">{2} วินาที</span>","name":"เสียงอู้อี้อันขมขื่น","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า เผยออร่าของผู้รอดชีวิตที่ใกล้ตายเมื่อยืนอยู่ในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>","name":"นักสะกดรอยกวาง","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"จิตอาฆาตอันน่าสะพรึงของคุณแผ่ออกไปเป็นระยะไกลเหนือธรรมชาติ รัศมีความน่ากลัวเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span> ได้รับแต้มเลือดเพิ่ม <span class=\\"Highlight2\\">{1}%</span> สำหรับการกระทำในหมวดความเจ้าเล่ห์","name":"ชอกช้ำ","flavor":"\\"เป็นสุขล้นบนความกลัวของพวกมัน\\"","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"ปลดล็อคความสามารถในการซ่อนตัว<br><br>การยืนนิ่งอยู่เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span>จะทำให้คุณติดเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>จนกว่าจะขยับตัวหรือเกิดการกระทำอีกครั้ง","name":"เจ้าเล่ห์","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"คำสาปที่ได้รับพลังมาจากความหวัง คุณมีพลังขึ้นมาด้วยอำนาจของโทเทมคำสาปเมื่อผู้รอดชีวิตจวนเจียนจะหนีรอดไปได้<br>เมื่อประตูทางออกได้รับพลังงานแล้วแต่ยังมีโทเทมขมุกขมัวคงเหลืออยู่บนแผนที่ คำสาปนี้ก็จะใช้งาน</br><br>ในขณะที่คำสาปทำงานอยู่นั้น<li>ผู้รอดชีวิตจะติดเอฟเฟกต์สถานะ<b><i>ปลอดกำบัง</i></b></li><li>ความเร็วการเคลื่อนที่ของคุณจะเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span></li><br>เอฟเฟกต์ของคำสาปจะยังส่งผลต่อไปตราบที่โทเทมคำสาปที่เกี่ยวข้องยังคงตั้งอยู่<br>","name":"คำสาป: ความตายไร้ทางหนี","flavor":"\\"แล้วสัตว์ร้ายก็ว่องไวขึ้นพร้อมทั้งทรงพลังเสียยิ่งกว่าเดิม ราวกับมีแส้อันมืดมิดของเอนทิตีคอยหวดเฆี่ยนแผ่นหลังอยู่\\"","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"คำสาปที่ได้รับพลังมาจากความหวัง ความหวังลมๆ แล้งๆ ของผู้รอดชีวิตทำให้คุณมีความตื่นเต้นและเพิ่มพละกำลังให้กับโทเทมของคุณ ได้รับหนึ่งโทเค่นสำหรับโทเทมขมุกขมัวและโทเทมคำสาปที่คงเหลืออยู่บนแผนที่ <br><li>ได้แต้มเลือดเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span> สำหรับการกระทำในหมวดนักล่าสำหรับแต่ละโทเค่น</li><li>ความเร็วการชะล้างของผู้รอดชีวิตลดลง <span class=\\"Highlight2\\">{1}%</span> สำหรับแต่ละโทเค่น</li><li>ได้รับการแจ้งเตือนเมื่อมีคนกำลังทำอะไรกับโทเทมคำสาป</li><br><i>เอฟเฟกต์ของคำสาปจะยังส่งผลต่อไปตราบที่โทเทมคำสาปที่เกี่ยวข้องยังคงตั้งอยู่</i>","name":"คำสาป: ความตื่นเต้นในการไล่ล่า","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"การดูแลตะขอที่พบในห้องใต้ดินอย่างกระตือรือร้นทำให้เอนทิตีเกิดความสนใจ ตะขอในห้องใต้ดินให้โบนัสต่อไปนี้:<br><li>ความคืบหน้าของเอนทิตีเร็วขึ้น <span class=\\"Highlight1\\">{0}%</span></li><li>ความยากในการหนีเพิ่มขึ้น <span class=\\"Highlight2\\">{1}%</span></li><li>เพิ่มบทลงโทษ <span class=\\"Highlight3\\">{2}%</span> หากหนีไม่สำเร็จ</li>","name":"แท่นบูชาชั่วร้าย","flavor":"\\"แล้วจะรู้ว่าไม่มีทางหนีพ้น ขณะห้อยต่องแต่งอยู่ลึกลงไปใต้ดิน คุณจะได้เผชิญกับผู้มืดมิด\\"","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"นักชำแหละซุ่มซ่าม","tiers":[["คุณรู้จุดที่ต้องโจมตีเพื่อให้เหยื่อเลือดไหล แผลที่เกิดจาก<i>การโจมตีพื้นฐาน</i>ได้สำเร็จจะทำให้เกิดเอฟเฟกต์สถานะ<b>เหวอะหวะ</b>และ<b>เลือดท่วม</b> <b>เลือดท่วม</b>จะเพิ่มความถี่ในการเลือดออกของผู้รอดชีวิตขึ้น<span class=\\"Highlight1\\">เล็กน้อย</span> เอฟเฟกต์<br><b>เลือดท่วม</b>ที่เกิดจาก<i>นักชำแหละซุ่มซ่าม</i>จะกลับสู่สภาพปกติเมื่อผู้รอดชีวิตได้รับการรักษาให้หาย<br><span class=\\"FlavorText\\">\\"มันอยู่ในสายเลือดอันซาดิสต์ ไม่มีการฆ่าอย่างรวดเร็วเพราะการทรมานแสนสาหัสมันช่างน่าสุขสันต์\\"</span>"],["คุณรู้จุดที่ต้องโจมตีเพื่อให้เหยื่อเลือดไหล แผลที่เกิดจาก<i>การโจมตีพื้นฐาน</i>ได้สำเร็จจะทำให้เกิดเอฟเฟกต์สถานะ<b>เหวอะหวะ</b>และ<b>เลือดท่วม</b> <b>เลือดท่วม</b>จะเพิ่มความถี่ในการเลือดออกของผู้รอดชีวิตขึ้น<span class=\\"Highlight1\\">ปานกลาง</span> เอฟเฟกต์<br><b>เลือดท่วม</b>ที่เกิดจาก<i>นักชำแหละซุ่มซ่าม</i>จะกลับสู่สภาพปกติเมื่อผู้รอดชีวิตได้รับการรักษาให้หาย<br><span class=\\"FlavorText\\">\\"มันอยู่ในสายเลือดอันซาดิสต์ ไม่มีการฆ่าอย่างรวดเร็วเพราะการทรมานแสนสาหัสมันช่างน่าสุขสันต์\\"</span>"],["คุณรู้จุดที่ต้องโจมตีเพื่อให้เหยื่อเลือดไหล แผลที่เกิดจาก<i>การโจมตีพื้นฐาน</i>ได้สำเร็จจะทำให้เกิดเอฟเฟกต์สถานะ<b>เหวอะหวะ</b>และ<b>เลือดท่วม</b> <b>เลือดท่วม</b>จะเพิ่มความถี่ในการเลือดออกของผู้รอดชีวิตขึ้น<span class=\\"Highlight1\\">อย่างมาก</span> เอฟเฟกต์<br><b>เลือดท่วม</b>ที่เกิดจาก<i>นักชำแหละซุ่มซ่าม</i>จะกลับสู่สภาพปกติเมื่อผู้รอดชีวิตได้รับการรักษาให้หาย<br><span class=\\"FlavorText\\">\\"มันอยู่ในสายเลือดอันซาดิสต์ ไม่มีการฆ่าอย่างรวดเร็วเพราะการทรมานแสนสาหัสมันช่างน่าสุขสันต์\\"</span>"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"อีกาที่พบเห็นในโลกสามารถสื่อสารกับคุณได้โดยตรง มีโอกาส <span class=\\"Highlight1\\">{0}%</span> ที่อีกาจะบอกใบ้เมื่อคุณอยู่ในระยะ <span class=\\"Highlight2\\">{1} เมตร</span><br><i>สายลับจากเงามืด</i>จะมีคูลดาวน์ <span class=\\"Highlight3\\">{2} วินาที</span> ","name":"สายลับจากเงามืด","flavor":"\\"ในเงามืดมีเพียงความทรมาน ทำจิตใจของเราหวาดผวาด้วยเสียงกรีดร้อง\\"","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"คุณฟื้นตัวจากการใช้อาวุธหลักจู่โจมพลาดได้เร็วขึ้น คูลดาวน์หลังจาก<i>การโจมตีพื้นฐาน</i>ที่พลาดจะลดลง <span class=\\"Highlight1\\">{0}%</span>","name":"ไม่อ่อนข้อ","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"คุณมีความเข้าใจเบื้องต้นเกี่ยวกับเสียงของเอนทิตี ได้ยินเสียงกระซิบของเอนทิตีเป็นครั้งคราวเมื่อยืนอยู่ในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>จากผู้รอดชีวิต","name":"เสียงกระซิบ","flavor":"\\"ไม่รู้ว่าว่าสายหมอกมีเจตนาอะไร แต่ที่เถียงไม่ได้คือมันมักจะเข้าข้างอสูรร้ายเสมอ\\" -สมุดบันทึก","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"คุณรู้สึกไวต่อการหายใจของเหยื่อ การหายใจของผู้รอดชีวิตที่กำลังเจ็บจะเสียงดังขึ้น <span class=\\"Highlight1\\">{0}%</span> และการหายใจปกติจะดังขึ้น <span class=\\"Highlight2\\">{1}%</span> ","name":"เสียงแหบดัง","flavor":"“ถ้าคุณไม่หยุดพักหายใจ… เธอจะหยุดให้เอง”","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"ความกล้าของพวกเขาเลือนหายไปเมื่อเผชิญหน้ากับความตายที่หลีกหนีไม่ได้<br>เมื่อมีผู้รอดชีวิตได้รับบาดเจ็บ ใกล้ตาย หรือถูกแขวนบนตะขอ ผู้รอดชีวิตทุกคนจะมีความเร็วในการซ่อมแซม ทำลาย และการชำระล้างโทเทมลดลง <span class=\\"Highlight1\\">{0}%</span> และลดลงสูงสุดถึง <span class=\\"Highlight1\\">{1}%</span>","name":"รักตัวกลัวตาย","flavor":"\\"เธอกำลังสนุกสนานบนความเจ็บปวดของเรา\\"","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า ออร่าของผู้รอดชีวิตที่กำลังรักษาหรือถูกรักษาจะเปิดเผยให้คุณเห็น เมื่อพวกเขาอยู่ในระยะ <span class=\\"Highlight1\\">{0} เมตร</span><br>","name":"เสียงเรียกของพยาบาล","flavor":"“ยังคงยึดติดกับเสี้ยวอดีตของเธอ เธอถูกชักจูงไปหาผู้ที่ต้องการความช่วยเหลือ”","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"แค่คุณปรากฏตัวก็ทำให้ทุกคนหวาดกลัวแล้ว ผู้รอดชีวิตที่อยู่ในรัศมีความน่ากลัวของคุณจะมีโอกาสเกิดการตรวจสอบทักษะมากขึ้น <span class=\\"Highlight1\\">{0}%</span> เมื่อซ่อมแซมหรือรักษา โซนความสำเร็จของการตรวจสอบทักษะที่ทำอยู่ลดลง <span class=\\"Highlight2\\">{1}%</span>","name":"สัมผัสสยอง","flavor":"\\"มันปรากฏตัวขึ้นแล้ว\\"","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"พละกำลังมหาศาลของคุณช่วยให้คุณทำลายการป้องกันของเหยื่อได้ ทำลาย<b>แท่นไม้ กำแพงที่ทำลายได้ และเครื่องปั่นไฟ</b>ที่วางทิ้งไว้เร็วขึ้น <span class=\\"Highlight1\\">{0}%</span>","name":"พละกำลังอำมหิต","flavor":"\\"มันมากกว่าการใช้กำลัง พลังแห่งความมืดช่วยกระตุ้นสัตว์ดุร้าย\\"","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"คุณตื่นเต้นที่จะได้จับเหยื่อไปแขวนบนตะขอ ความเร็วการเคลื่อนที่ขณะแบกร่างเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span> รัศมีความน่ากลัวของคุณเพิ่มขึ้น <span class=\\"Highlight2\\">{1} เมตร</span>ขณะกำลังแบกร่าง","name":"กระสับกระส่าย","flavor":"\\"ในบางครั้ง ความตื่นเต้นของการได้จับเราเสียบกับตะขอนั้นสำคัญกว่าความต้องการที่จะฆ่าเราเสียอีก\\"","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"นักล่า","tiers":[["ทักษะการสะกดรอยตามอันเฉียบแหลมของคุณช่วยให้คุณพุ่งเป้าไปยังร่องรอยที่ผู้รอดชีวิตที่วิ่งทิ้งไว้<br>รอยขีดข่วนที่ผู้รอดชีวิตทิ้งไว้จะเกิดใกล้กันยิ่งขึ้น<span class=\\"Highlight1\\">เล็กน้อย</span><br><br><span class=\\"FlavorText\\">\\"ห้ามหยุดอยู่กับที่ และหวังว่าคุณจะนำหน้าเจ้าสัตว์ร้ายนั่นอยู่สองก้าวเสมอ\\" -สมุดบันทึก</span>"],["ทักษะการสะกดรอยตามอันเฉียบแหลมของคุณช่วยให้คุณพุ่งเป้าไปยังร่องรอยที่ผู้รอดชีวิตที่วิ่งทิ้งไว้<br>รอยขีดข่วนที่ผู้รอดชีวิตทิ้งไว้จะเกิดใกล้กันยิ่งขึ้น<span class=\\"Highlight1\\">ปานกลาง</span><br><br><span class=\\"FlavorText\\">\\"ห้ามหยุดอยู่กับที่ และหวังว่าคุณจะนำหน้าเจ้าสัตว์ร้ายนั่นอยู่สองก้าวเสมอ\\" -สมุดบันทึก</span>"],["ทักษะการสะกดรอยตามอันเฉียบแหลมของคุณช่วยให้คุณพุ่งเป้าไปยังร่องรอยที่ผู้รอดชีวิตที่วิ่งทิ้งไว้<br>รอยขีดข่วนที่ผู้รอดชีวิตทิ้งไว้จะเกิดใกล้กันยิ่งขึ้น<span class=\\"Highlight1\\">อย่างมาก</span><br><br><span class=\\"FlavorText\\">\\"ห้ามหยุดอยู่กับที่ และหวังว่าคุณจะนำหน้าเจ้าสัตว์ร้ายนั่นอยู่สองก้าวเสมอ\\" -สมุดบันทึก</span>"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"คุณได้กลิ่นเลือดจากระยะไกลราวกับเป็นสุนัขล่าเนื้อ รอยเลือดใหม่ๆมองเห็นง่ายขึ้น<span class=\\"Highlight1\\">อย่างมาก</span> และอยู่นานขึ้นนานกว่าปกติ <span class=\\"Highlight2\\">{0} วินาที</span> ","name":"บลัดฮาวด์","flavor":"\\"ก้อนกรวดส่องประกายแวววาวใต้แสงจันทร์ ร่างกายของฉันเปียกชุ่มทำให้ง่ายต่อการสะกดรอย\\"","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"คุณมีสายตาที่แหลมคมเมื่ออยู่ท่ามกลางราตรีอันมืดมิด ขอบเขตการมองเห็นของคุณกว้างขึ้นกว่าปกติ <span class=\\"Highlight2\\">{0} องศา</span><br><i>ไม่ทับซ้อนกับขอบเขตการมองเห็นอื่นที่เพิ่มขึ้น</i>","name":"เกิดแต่เงามืด","flavor":"\\"ดวงตาที่เปล่งประกายในความมืดมิดของเขามองทะลุผ่านยามราตรีและทิ่มแทงดวงวิญญาณของคุณ\\"","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"คุณหายเจ็บปวดได้อย่างรวดเร็ว ระยะเวลา<b>การสตันจากแท่นไม้</b>จะลดลง <span class=\\"Highlight1\\">{0}%</span>","name":"ทนทายาด","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"คุณปรับตัวเข้ากับแสงสว่างได้ต่างจากอสูรร้ายแห่งม่านหมอกตนอื่น คุณมีภูมิคุ้มกันต่อเอฟเฟกต์สถานะตาบอดที่เกิดจากไฟฉาย ดอกไม้ไฟ ระเบิดแสง และกับระเบิด ผู้รอดชีวิตที่พยายามทำให้คุณตาบอดจะถูกมองเห็นออร่าเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span>","name":"กำเนิดแต่แสง","flavor":" \\"อสูรร้ายเหล่านี้... พวกมันปรับตัวได้! มันกลับมาพร้อมกับความสามารถใหม่ๆ\\" -บันทึกของวิโก้","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"เมื่อเครื่องปั่นไฟได้รับการซ่อมแซมจนมีความคืบหน้าถึง <span class=\\"Highlight1\\">{0}%</span> แล้ว จะเกิดการเตือนเสียงดังและคุณจะติดเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>เป็นเวลา <span class=\\"Highlight2\\">{2} วินาที</span>","name":"นักประดิษฐ์","flavor":"\\"ฮิลบิลลี่สร้างเครื่องมืออันยอดเยี่ยมขึ้นมาจากเศษขยะ เครื่องมือเหล่านั้นมีไว้สำหรับทรมานเราด้วยวิธีที่หลากหลาย...\\" -สมุดบันทึก","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"ผู้รอดชีวิตหนึ่งคนจะกลายเป็น<b>เป้าหมาย</b>ของคุณ<br>รับหนึ่งโทเค่นต่อ<i>การโจมตีพื้นฐาน</i>ที่สำเร็จแต่ละครั้งและไม่ใช่การโจมตีที่ทำต่อเป้าหมาย <br>แต่ละโทเค่นจะลดคูลดาวน์ทับซ้อนสำหรับ<i>การโจมตีพื้นฐาน</i>ที่สำเร็จลงไป <span class=\\"Highlight1\\">{0}%</span> คุณสามารถรับได้สูงสุด <span class=\\"Highlight2\\">{1}</span> โทเค่น<br>การตีเป้าหมายด้วย<i>การโจมตีพื้นฐาน</i>จะทำให้คุณสูญเสีย <span class=\\"Highlight3\\">{2}</span> โทเค่น<br>คุณจะไม่ได้รับโทเค่นอีกต่อไปหากเป้าหมายถูกบูชายัญหรือถูกฆ่า<br><li><i>ฆาตกรสามารถมีผู้รอดชีวิตเป็น<b>เป้าหมาย</b>ได้ทีละคนเท่านั้น</i></li>","name":"เก็บของดีไว้ทีหลัง","flavor":"\\"ความตายได้มาเยือนเมืองเล็กๆ ของคุณแล้วล่ะ นายอำเภอ\\" -ดร. แซม ลูมิส","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"ผู้รอดชีวิตหนึ่งคนจะกลาย <b>เป้าหมาย</b> ของคุณ<br>ทุกครั้งที่คุณไล่ล่าเป้าหมายและปล่อยให้หนีรอดไปได้ คุณจะได้รับโทเค่นสะสมสูงสุด {0} โทเค่น<br>ซึ่งแต่ละโทเค่นจะทำให้ความเร็วการเคลื่อนที่ของคุณเพิ่มขึ้น <span class=\\"Highlight1\\">{1}%</span><br>ทำ<i>การโจมตีพื้นฐาน</i>หรือ<i>การโจมตีพิเศษ</i>แต่ละครั้งจะใช้งานหนึ่งโทเค่น<br><li><i>ฆาตกรสามารถมีผู้รอดชีวิต<b>เป็นเป้าหมาย</b>ได้ทีละคนเท่านั้น</i></li>","name":"เล่นกับอาหาร","flavor":"“คุณหลอกพวกเขาอยู่หมัดเลยใช่ไหม ไมเคิล? แต่หลอกผมไม่ได้หรอก” -ดร. แซม ลูมิส","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"ผู้รอดชีวิตหนึ่งคนจะกลาย<b>เป้าหมาย</b>ของคุณ<br>เป้าหมายของคุณจะได้รับโบนัสความเร็วเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span> ในการรักษาหรือปลดผู้รอดชีวิตคนอื่นลงจากตะขอ<br>ทุกครั้งที่จับผู้รอดชีวิตคนอื่นซึ่งไม่ใช่เป้าหมายแขวนบนตะขอเมื่อเป้าหมายยังมีชีวิตอยู่ จะได้รับโทเค่น<br>หากเป้าหมายยังมีชีวิตอยู่ ผู้รอดชีวิตทั้งหมดที่ไม่ใช่เป้าหมายจะกระทำการช้าลง <span class=\\"Highlight2\\">{1}%</span> เมื่อซ่อมแซม รักษา หรือทำลายสำหรับแต่ละโทเค่น<br><li><i>ฆาตกรสามารถมีผู้รอดชีวิตเป็นเป้าหมายได้ทีละคนเท่านั้น</i></li>","name":"แสงริบหรี่","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"คำสาปที่ปิดกั้นความสามารถในการอ่านออร่า การตีผู้รอดชีวิตด้วย<i>การโจมตีพื้นฐาน</i>ขณะที่โทเทมต้องสาปกำลังทำงานจะเปิดใช้เอฟเฟกต์สถานะ<b>ตาบอด</b> เอฟเฟกต์นี้ใช้ได้กับผู้รอดชีวิต <span class=\\"Highlight1\\">{0}</span> คนสุดท้ายที่ถูกตี<br><i>เอฟเฟกต์ของคำสาปจะยังส่งผลต่อไปตราบที่โทเทมคำสาปที่เกี่ยวข้องยังคงตั้งอยู่</i>","name":"คำสาป: สัญลักษณ์ที่สาม","flavor":"“เธอสัมผัสผิวหนังของคุณ คุณถูกประทับตราแม่มดแล้ว!”","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"คำสาปที่ส่งผลต่อความสามารถในการซ่อมแซมเครื่องปั่นไฟของผู้รอดชีวิตทุกคน เครื่องปั่นไฟทั้งหมดจะได้รับผลจาก <i>คำสาป: ความพินาศ</i> เมื่อไม่มีผู้รอดชีวิตคอยซ่อมแซมเครื่องปั่นไฟอยู่ เครื่องปั่นไฟดังกล่าวจะลดความคืบหน้าลงโดยอัตโนมัติทันทีที่ความเร็ว <span class=\\"Highlight1\\">{0}%</span> ของความเร็วการลดความคืบหน้าปกติ<br><br><i>เอฟเฟกต์ของคำสาปจะยังส่งผลต่อไปตราบที่โทเทมคำสาปที่เกี่ยวข้องยังคงตั้งอยู่</i><br>","name":"คำสาป: ความพินาศ","flavor":"“แกถูกสาปแล้ว มันจะทำให้แกพินาศ”","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"คำสาปที่ได้รับพลังมาจากความหวัง ความหวังลมๆ แล้งๆ ของผู้รอดชีวิตเป็นสิ่งกระตุ้นความหิวกระหายของคุณ เมื่อมีผู้รอดชีวิตได้รับการช่วยเหลือจากตะขอที่อยู่ห่างออกไปอย่างน้อย <span class=\\"Highlight1\\">24 เมตร</span> พลังกลืนกินความหวังจะได้รับโทเค่น<br><li><span class=\\"Highlight3\\">2 โทเค่น</span>: ภายใน <span class=\\"Highlight3\\">10 วินาที</span>หลังจากแขวนผู้รอดชีวิตบนตะขอ จะได้รับเอฟเฟกต์สถานะ<b><i>เร่งรีบ</i></b> <span class=\\"Highlight2\\">{0}%</span> เป็นเวลา <span class=\\"Highlight3\\">10 วินาที</span></li><li><span class=\\"Highlight3\\">3 โทเค่น</span>: ผู้รอดชีวิตจะติดเอฟเฟกต์สถานะ<b><i>ปลอดกำบัง</i></b></li><li><span class=\\"Highlight2\\">5 โทเค่น</span>: ให้ความสามารถในการฆ่าผู้รอดชีวิตได้ด้วยมือเปล่า</li><br><i>เอฟเฟกต์ของคำสาปจะยังส่งผลต่อไปตราบที่โทเทมคำสาปที่เกี่ยวข้องยังคงตั้งอยู่</i><br>","name":"คำสาป: กลืนกินความหวัง","flavor":"\\"ถ้าคุณไม่ทำอะไรเลย เลือดของพวกเขาก็จะเปื้อนมือคุณ แต่ถ้าคุณช่วยพวกเขาเอาไว้ ความหิวกระหายของเธอก็จะเพิ่มมากขึ้น\\"","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"เพียงการปรากฏตัวของคุณก็สร้างความหวาดผวาได้แล้ว ผู้รอดชีวิตที่อยู่ในรัศมีความน่ากลัวของคุณจะเกิดอาการไร้สมรรถภาพ<br>ผู้รอดชีวิตที่ได้รับผลกระทบจะใช้ไอเท็มสิ้นเปลืองเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span>","name":"การปรากฏกายครอบงำใจ","flavor":"\\"ให้ตายสิ!! ฉันทำผ้าก๊อซหล่น!\\"","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"ทฤษฎีแม่นยำ ปฏิบัติน่าเกรงขาม<br>ขณะกำลังไล่ล่า รัศมีความน่ากลัวของคุณจะเพิ่มขึ้น <span class=\\"Highlight1\\">{0} เมตร</span> แต่จะลดลง <span class=\\"Highlight2\\">{0} เมตร</span>ในเวลาอื่น และขอบเขตการมองเห็นของคุณกว้างขึ้น<span class=\\"Highlight3\\">{1} องศา</span><br><i>ขอบเขตการมองเห็นที่ได้รับจะไม่ทับซ้อนกัน</i>","name":"สอดส่องและทำร้าย","flavor":"\\"ได้เวลารักษาแล้ว!\\" -เดอะดอกเตอร์","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"คุณรุ่มร้อนไปด้วยความเกลียดชังที่มีต่อความคืบหน้า<br>ชาร์จเครื่องปั่นไฟเกินขีดด้วยการ<b>ทำความเสียหายเครื่องปั่นไฟ</b> ผู้รอดชีวิตคนต่อไปที่เข้ามาดำเนินการกับเครื่องปั่นไฟดังกล่าวจะต้องพบกับการตรวจสอบทักษะที่ยาก<span class=\\"Highlight1\\">มหาศาล</span> และหากไม่ผ่านการตรวจสอบทักษะ เครื่องปั่นไฟก็จะสูญเสียความคืบหน้าไป <span class=\\"Highlight2\\">{0}%</span><br>การตรวจสอบทักษะที่สำเร็จจะไม่ให้ความคืบหน้าใดๆ แต่จะป้องกันไม่ให้เครื่องปั่นไฟระเบิด","name":"ชาร์จเกินขีด","flavor":"\\"มันเป็นกับดัก แต่เป็นกับดักที่ต้องเหยียบลงไป...\\" -เดอะดอกเตอร์","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"ความกระหายในการสังหารนั้นรุนแรงเสียจนสายสัมพันธ์ของคุณกับเอนทิตีขาดหายไปชั่วขณะ ทำให้คุณไม่อาจคาดการณ์ได้โดยสิ้นเชิง<br><br>ติดเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>หลังจากได้รับความกระหายเลือดระดับ 1 โดยเอฟเฟกต์สถานะจะหายไปเมื่อกระหายเลือดสิ้นสุดลง<br><br><li>รับแต้มเลือดเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span> สำหรับการกระทำในหมวดนักล่า</li>","name":"สัตว์ร้ายนักล่า","flavor":"\\"เธอหายไปไหนแล้ว?\\"","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า คุณจะมองเห็นออร่าของผู้รอดชีวิตที่กำลังลงไปยังชั้นใต้ดินและคุณอยู่ห่างจากทางเข้าชั้นใต้ดินเกินกว่าระยะ <span class=\\"Highlight2\\">{1} เมตร</span>เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br><i>สิ่งจำเป็นบนผืนดิน</i>สามารถใช้ได้เพียงหนึ่งครั้งต่อ <span class=\\"Highlight3\\">{2} วินาที</span>","name":"สิ่งจำเป็นบนผืนดิน","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"คำสาปที่ดูดพลังจากความสิ้นหวัง การล่าของคุณคือบทเพลงแห่งความสะพรึงอันไม่อาจต้านทาน ซึ่งจะทำให้สติของเหยื่อกระเจิง ผู้รอดชีวิตจะมีความคืบหน้าลดลง <span class=\\"Highlight1\\">{0}%</span> เมื่อตรวจสอบทักษะผิดพลาดขณะกำลังรักษาหรือซ่อมแซม<br>ทุกครั้งที่ผู้รอดชีวิตถูกแขวนบนตะขอ เพลงขับกล่อมแห่งนักล่าสาวก็จะยิ่งทรงพลังขึ้น มันส่งผลกระทบต่อการตรวจสอบทักษะขณะกำลังรักษาหรือซ่อมแซม คำเตือน:<br><li><b>1 ถึง 4 โทเค่น:</b> เวลาระหว่างการตรวจสอบทักษะกับการส่งเสียงเตือนจะสั้นลง</li><li><b>5 โทเค่น:</b> ไม่มีการเตือนการตรวจสอบทักษะ</li><br><i>เอฟเฟกต์ของคำสาปจะยังส่งผลต่อไปตราบที่โทเทมคำสาปที่เกี่ยวข้องยังคงตั้งอยู่</i>","name":"คำสาป: เพลงขับกล่อมแห่งนักล่าสาว","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"บาดแผลที่เกิดจากการโจมตีอันเหี้ยมโหดของคุณจะทำให้การร้องขอความช่วยเหลือเป็นไปอย่างยากลำบากและทรมาน<br>ผู้รอดชีวิตคนอื่นจะมองไม่เห็นผู้รอดชีวิตที่ตกอยู่ในสภาวะใกล้ตายด้วยการโจมตีพื้นฐานของคุณหากอยู่นอกระยะ <span class=\\"Highlight1\\">{2} เมตร</span><br>ผู้รอดชีวิตที่ตกอยู่ในสภาวะใกล้ตายด้วยการโจมตีพื้นฐานของคุณคลาน<span class=\\"Highlight2\\">ช้าลง {1}%</span> เป็นเวลา <span class=\\"Highlight3\\">{0} วินาที</span><br>ในระหว่างนั้น ผู้รอดชีวิตจะติดเอฟเฟกต์สถานะ<b>ตาบอด</b>","name":"ทุบให้ตาย","flavor":"\\"โอ้ย ปืนอะไรนั่นไม่ได้เรื่องหรอก... ต้องค้อนยักษ์นี่สิ! แบบดั้งเดิมเลย ดีกว่าเยอะ พวกนั้นตายแบบนี้จะดีกว่า\\" -นับบินส์ ซอเยอร์","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"พันธะอันแน่นแฟ้นกับเอนทิตีจะปลดล็อคความสามารถในการอ่านออร่า หลังจากจับผู้รอดชีวิตแขวนบนตะขอแล้ว คุณจะเห็นออร่าของผู้รอดชีวิตคนอื่นที่อยู่ไกลจากตะขอเกินกว่า <span class=\\"Highlight2\\">{1} เมตร</span>เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br><li>ทุกครั้งที่ผู้รอดชีวิตถูกแขวนบนตะขอเป็นครั้งแรก คุณจะได้รับโบนัสทับซ้อน <span class=\\"Highlight3\\">{2}%</span> ในการได้แต้มเลือดทั้งหมดสูงสุดถึง <span class=\\"Highlight4\\">{3}%</span><br>โดยจะได้รับแต้มเลือดโบนัสเป็นรางวัลหลังจากเล่นจบแล้วเท่านั้น</li>","name":"บาร์บีคิวบวกพริก","flavor":"\\"ข้าไม่ได้สนุกกับการสังหารเลยแม้แต่น้อย แค่มันเป็นสิ่งที่ต้องทำ ไม่ได้แปลว่าข้าจะต้องชอบมันเสียหน่อย\\"-เดรย์ตัน ซอเยอร์","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"การโจมตีอันร้ายแรงของคุณทำให้ไอเท็มร่วงหล่นจากผู้รอดชีวิตตอนกระแทก หลังเวลาผ่านไป <span class=\\"Highlight1\\">{0} วินาที</span>หากไอเท็มนั้นไม่ถูกเก็บขึ้นมา เอนทีตีจะใช้ไอเท็มที่หายไปนั่น<br>มองเห็นไอเท็มที่อยู่บนพื้นภายในระยะ <span class=\\"Highlight2\\">{1} เมตร</span>เป็นออร่าสีขาว ออร่าของไอเท็มจะจางเป็นสีแดงจนกว่าจะถูกเอนทิตีใช้","name":"มรณกรรมของแฟรงคลิน","flavor":"\\"ฉันได้ยินบางอย่างนะแซลลี่ หยุดนะ! หยุดสิ!\\" -แฟรงคลิน","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"ความกดดันที่เพิ่มสูงขึ้นจากการสูญเสียเหยื่อของตนทำให้ตัวคุณเปี่ยมไปด้วยโทสะและให้แรงผลักดันอย่างไม่ต้องสงสัย ทุกครั้งที่ผู้รอดชีวิตซ่อมแซมเครื่องปั่นไฟสำเร็จ พลังของเครื่องติดจะเพิ่มขึ้น<br><li>รับบัฟที่ทับซ้อนได้ <span class=\\"Highlight1\\">{0}%</span> ที่ให้โบนัสความเร็วในการหยิบ การวางทิ้ง การกระโดดข้ามสิ่งกีดขวาง การพังเครื่องปั่นไฟ และการทำลายแท่นไม้ทุกครั้งที่ซ่อมแซมเครื่องปั่นไฟได้สำเร็จไปจนจบการเล่น</li>","name":"เครื่องติด","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"ผู้รอดชีวิตหนึ่งคนจะกลายเป็น<b>เป้าหมาย</b>ของคุณ ทุกครั้งที่ตีเป้าหมายด้วย<i>การโจมตีพื้นฐาน</i> คุณจะเพิ่มเวลาในการเปิดประตูทางออกขึ้นอีก <span class=\\"Highlight1\\">{0} วินาที</span> เพิ่มเติมสูงสุดถึง <span class=\\"Highlight2\\">{1} วินาที</span><br>เป้าหมายจะไม่ได้รับผลจาก<i>จดจำข้า</i><br><li><i>ฆาตกรสามารถมีผู้รอดชีวิตเป็น<b>เป้าหมาย</b>ได้ทีละคนเท่านั้น</i></li>","name":"จดจำข้า","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"ทันทีที่ประตูทางออกเปิด ผู้คุมโลหิตจะเปิดใช้งาน ทำให้คุณมองเห็นออร่าของผู้รอดชีวิตที่อยู่บริเวณทางออก <br>หนึ่งครั้งในเกม การแขวนผู้รอดชีวิตบนตะขอเมื่อผู้คุมโลหิตเปิดใช้งานอยู่จะอัญเชิญเสาบูชายัญมากันทางออกทั้งสองทางของผู้รอดชีวิตทุกรายเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span>","name":"ผู้คุมโลหิต","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"การปรับแต่งตะขออันชาญฉลาดของคุณจะเตือนให้รู้เมื่อมีคนมายุ่งกับตะขอ<br><li>รับการแจ้งเตือนเมื่อมีผู้รอดชีวิตเริ่มทำลายตะขอ</li><li>ในขณะที่แบกผู้รอดชีวิต จะเห็นออร่าของผู้รอดชีวิตคนอื่นๆ ภายในระยะ <span class=\\"Highlight1\\">{0}</span> เมตรของตะขอ</li>","name":"เล่ห์กลของเพชฌฆาต","flavor":"\\"ไม่มีข้อแก้ตัว ไม่มีการอ้อมค้อม... ไม่มีการร้องไห้\\" -อาแมนด้า ยัง","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า เครื่องปั่นไฟทั้งหมดที่กำลังสูญเสียความคืบหน้าจะไฮไลท์ด้วยออร่าสีขาว เมื่อการสูญเสียความคืบหน้าต้องหยุดชะงักลง เครื่องปั่นไฟจะไฮไลท์ด้วยออร่าสีเหลืองเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br>เสียงดังจากการซ่อมแซมเครื่องปั่นไฟจะได้ยินไปไกลขึ้น <span class=\\"Highlight2\\">{1} เมตร</span> ","name":"เฝ้าระวัง","flavor":"\\"จะทำตัวดีๆ ได้รึยัง?\\" -อาแมนด้า ยัง","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"เมื่อผู้รอดชีวิตช่วยเหลือคนอื่นลงจากตะขอในระยะที่อยู่ห่างจากคุณอย่างน้อย <span class=\\"Highlight1\\">{0} เมตร</span> <i>ตัดสินใจ</i>จะทำให้ผู้รอดชีวิตกรีดร้องและติดเอฟเฟกต์สถานะ<b><i>ปลอดกำบัง</i></b>เป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br><i>ตัดสินใจ</i>มีคูลดาวน์ <span class=\\"Highlight3\\">{2} วินาที</span> ","name":"ตัดสินใจ","flavor":"\\"แล้วคุณจะต้องแปลกใจว่าเครื่องมืออะไรช่วยชีวิตได้\\" -อาแมนด้า ยัง","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"การจับผู้รอดชีวิตด้วยมืออันทรงพลังของคุณทำให้การดิ้นหนีแทบจะเป็นไปไม่ได้ ผลจากการดิ้นของผู้รอดชีวิตลดลง <span class=\\"Highlight1\\">{0}%</span> เวลาในการดิ้นหนีจากเงื้อมมือคุณเพิ่มขึ้น <span class=\\"Highlight2\\">{1}%</span>","name":"เงื้อมมือเหล็กกล้า","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"แค่การปรากฏตัวของคุณก็ก่อความสยองขวัญได้แล้ว ผู้รอดชีวิตที่อยู่ภายในรัศมีความน่ากลัวของคุณจะมีความคืบหน้าในการรักษาช้าลง <span class=\\"Highlight1\\">{0}%</span><br>","name":"โรคกลัวตัวตลก","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"พันธะอันแน่นแฟ้นกับเอนทิตีจะปลดล็อคความแข็งแกร่งอย่างมาก หลังจากจับผู้รอดชีวิตแขวนบนตะขอแล้ว เครื่องปั่นไฟถัดไปที่คุณทำความเสียหายจะสูญเสียความคืบหน้าทันที <span class=\\"Highlight1\\">{0}%</span> การลดความคืบหน้าของเครื่องปั่นไฟปกติจะเกิดขึ้นหลังจากเกิดความเสียหายแล้ว<br><i>เพลงกล่อมเด็ก</i>จะทำงานอยู่เป็นเวลา <span class=\\"Highlight1\\">{1} วินาที</span>หลังจากที่ผู้รอดชีวิตถูกแขวนบนตะขอแล้ว","name":"เพลงกล่อมเด็ก","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"คุณกระโดดข้ามสิ่งกีดขวางได้รวดเร็วขึ้น <span class=\\"Highlight1\\">{0}%</span><br>การกระโดดข้ามสิ่งกีดขวางจะเรียกเอนทิตีมาปิดกั้นจุดที่กระโดดนั้นเป็นเวลา <span class=\\"Highlight1\\">{1} วินาที</span><br>จุดกระโดดข้ามเกิดการปิดกั้นแบบนี้ได้ครั้งละ 1 จุดเท่านั้น มีเพียงผู้รอดชีวิตเท่านั้นที่จะถูกปิดกั้นไม่ให้ใช้จุดกระโดดข้าม <br>ไม่ส่งผลต่อแท่นไม้","name":"ฉงน","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"แท่นไม้แต่ละแท่นที่คุณทำลายจะเพิ่มความเกรี้ยวกราดของเอนทิตี<br>หลังจากทำลายแท่นไม้ได้ <span class=\\"Highlight1\\">{0} แท่น</span> ครั้งถัดไปที่คุณถูกสตันด้วยแท่นไม้ เอนทิตีจะทำลายแท่นไม้นั้นลงทันที<br>คุณจะยังคงติดเอฟเฟกต์สตันอยู่","name":"โทสะแห่งวิญญาณร้าย","flavor":"\\"โทสะอยู่ในสายเลือดเธอ\\"","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"โทเทมคำสาปติดกับดักสองเสาจะเกิดขึ้นมาในเกม<br>เมื่อมีผู้รอดชีวิตชะล้างโทเทมคำสาปติดกับดักเสาใดเสาหนึ่ง ผู้รอดชีวิตทุกคนจะติด<span class=\\"Highlight3\\">เอฟเฟกต์สถานะปลอดกำบัง</span>เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span> <br>ส่วนโทเทมคำสาปที่เหลืออยู่จะกลายเป็นโทเทมขมุกขมัวในทันที<br>","name":"คำสาป: ที่ดินผีสิง","flavor":"\\"บ้านของเธอได้กลายเป็นการลบหลู่\\"","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"ผู้รอดชีวิตหนึ่งคนจะกลายเป็น<b>เป้าหมาย</b>ของคุณ<br>ทุกครั้งที่มีการซ่อมแซมเครื่องปั่นไฟสำเร็จ เป้าหมายจะมองเห็นออร่าของคุณเป็นเวลา<span class=\\"Highlight1\\"> {0} วินาที</span><br>ทุกครั้งที่มีการซ่อมแซมเครื่องปั่นไฟสำเร็จ คุณจะมองเห็นตำแหน่งของผู้รอดชีวิตทุกคนเป็นเวลา<span class=\\"Highlight2\\"> {1} วินาที </span><br>เมื่อซ่อมแซมเครื่องปั่นไฟทั้งหมดเสร็จสิ้นแล้ว เป้าหมายจะติดเอฟเฟกต์สถานะ<span class=\\"Highlight3\\">ปลอดกำบัง</span>และฆาตกรสามารถ<span class=\\"Highlight3\\">ฆ่า</span>เป้าหมายได้<br><li><i>ฆาตกรสามารถมีผู้รอดชีวิตเป็นเป้าหมายได้ทีละคนเท่านั้น</i></li>","name":"ความคับแค้น","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"เครื่องปั่นไฟเครื่องใดในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>ที่กำลังมีผู้รอดชีวิตสองคนขึ้นไปซ่อมแซมอยู่จะถูกระบุตำแหน่งด้วยออร่าสีเหลือง เมื่อเครื่องปั่นไฟถูกไฮไลต์ในทีแรก ความบาดหมางจะทำให้เกิดเสียงแจ้งเตือนดังสนั่นขึ้นที่เครื่องปั่นไฟเครื่องนั้น หลังจากเครื่องปั่นไฟไม่อยู่ในระยะหรือไม่ได้กำลังได้รับการซ่อมแซมด้วยผู้รอดชีวิตสองคนขึ้นไปอีกต่อไปแล้ว ออร่าจะยังคงอยู่ไปอีก <span class=\\"Highlight2\\">4 วินาที</span>.<br>","name":"ความบาดหมาง","flavor":"\\"พวกอวดฉลาดเดี๋ยวก็ตาย เราจัดการกันเรียบร้อยตลอด\\" -เดอะลีเจียน","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"ขณะกำลังแบกผู้รอดชีวิตอยู่ คุณจะไม่เกิดคูลดาวน์เมื่อ<i>การโจมตีพื้นฐาน</i>พลาด และการตีผู้รอดชีวิตคนอื่นด้วย<i>การโจมตีพื้นฐาน</i>ได้สำเร็จจะหยุดตัวจับเวลาการดิ้นของผู้รอดชีวิตที่แบกอยู่เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br>","name":"ทรหดสุดขีด","flavor":"“ไม่มีทางเลิกได้แล้วตอนนี้ พวกเราเก่งกันเกินไป” -เดอะลีเจียน","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"คุณเปิดตู้เก็บของได้รวดเร็วขึ้น <span class=\\"Highlight1\\">{0}%</span><br><br>ผู้รอดชีวิตที่ออกจากตู้เก็บของจะติดเอฟเฟกต์สถานะปลอดกำบังเป็นเวลา <span class=\\"Highlight1\\">{2} วินาที</span>และกรีดร้อง พร้อมทั้งเผยตำแหน่งให้เห็นเป็นเวลา <span class=\\"Highlight1\\">{1} วินาที</span><br>","name":"เครื่องทรมานสตรีเหล็ก","flavor":"\\"ไม่มีที่ยืนให้กับพวกขี้ขลาดตาขาว\\" -เดอะลีเจียน","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"การสวดภาวนาของคุณปลุกพลังชั่วร้ายที่จะไปแทรกแซงโอกาสรอดตายของผู้รอดชีวิต <span class=\\"Highlight1\\">เครื่องปั่นไฟ {0} เครื่อง</span>ที่อยู่ห่างจากตัวคุณที่สุดจะถูกเอนทิตีปิดกั้นเอาไว้เป็นเวลา <span class=\\"Highlight1\\">{1} วินาที</span> เมื่อเริ่มต้นเกม<br>ผู้รอดชีวิตไม่สามารถซ่อมแซมเครื่องปั่นไฟเหล่านี้ได้ในระยะเวลาดังกล่าว เครื่องปั่นไฟที่ได้รับผลจะไฮไลท์ด้วยออร่าสีขาว<br>","name":"การแทรกแซงอันเสื่อมทราม","flavor":"“จงเป็นทราบกันให้ทั่วทั้งแผ่นดินว่าเหล่าทวยเทพล้วนสาปแช่งผู้ไม่ภักดี” (แผ่นหินแห่งอะดิริส, 3.7)","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"เสียงร้องระงมของผู้ไม่ภักดีทำให้หัวใจคุณลิงโลด<br>ขณะทำให้ผู้รอดชีวิตตกอยู่ในสถานะใกล้ตาย ผู้รอดชีวิตคนอื่นที่อยู่ในรัศมีความน่ากลัวของคุณจะร้องลั่นแล้วเผยตำแหน่งของตนให้คุณเห็นเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span>","name":"ความหวาดกลัวติดเชื้อ","flavor":"“ความสยดสยองท่วมท้นจิตใจเหล่าผู้ปฏิเสธความเชื่อที่ร้องระงมอยู่แทบเท้าท่านผู้วินาศ” (เพลงสดุดี, 11.4)","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"การแสดงพลังของคุณสร้างความวังวนแห่งความตื่นตระหนกที่แผ่ขยายไปทั่วทั้งแผ่นดิน<br><br>ผู้รอดชีวิตหนึ่งคนจะกลายเป็นเป้าหมายของคุณ การตีเป้าหมายด้วย<i>การโจมตีพื้นฐาน</i>จะส่งผ่านรัศมีความกลัวของคุณไปยังเป้าหมายเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span> และกำหนดรัศมีของมันไว้ที่ระยะ <span class=\\"Highlight1\\">{0} เมตร</span> คุณจะได้รับเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>เป็นเวลาเท่ากันนั้น<br><br>เป้าหมายที่ถูกคุณส่งผ่านรัศมีความกลัวไปให้จะถือว่า \\"อยู่ในรัศมีความกลัว\\" เพื่อจุดประสงค์อื่น<br><br><li><i>ฆาตกรสามารถมีผู้รอดชีวิตเป็น<b>เป้าหมาย</b>ได้ทีละคนเท่านั้น</i></li><br>","name":"การอุทิศตัวอันดำมืด","flavor":"“แล้วความสยดสยองก็จะได้ตัวผู้ปฏิเสธความเชื่อที่แข็งขืน ผู้ที่จะป่าวประกาศเรื่องการมาถึงของข้าอย่างผิดๆ” (แผ่นหินแห่งอะดิริส, 48.9)","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"ประสาทสัมผัสอันแหลมคมของคุณเพิ่มทวีขึ้นในดินแดนอันมืดมิดของเอนทิตี<br><br>ปลดล็อคความสามารถในการอ่านออร่า คุณจะมองเห็นออร่าของผู้รอดชีวิตที่ดำเนินการกระทำรีบเร่งภายในระยะ <span class=\\"Highlight1\\">48 เมตร</span>จากตำแหน่งของคุณเป็นเวลา <span class=\\"Highlight2\\">{0} วินาที</span><br><br><i>ตั้งใจฟัง</i>สามารถใช้ได้เพียงหนึ่งครั้งต่อทุก <span class=\\"Highlight3\\">{1} วินาที</span>เท่านั้น<br>","name":"ตั้งใจฟัง","flavor":"\\"ไม่ต้องกังวลไป ผมเตรียมการเรื่องนี้มาทั้งชีวิต\\" -เดอะโกสต์เฟส","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"การออกแบบอันดำมืดและความสงบภายในจิตใจอันมุ่งร้ายของคุณปลุกเร้าเอนทิตี<br><br>หลังจากตัวผู้รอดชีวิตขึ้นมาแบกได้แล้ว เครื่องปั่นไฟทั้งหมดที่ไม่มีผู้รอดชีวิตดำเนินการซ่อมแซมอยู่จะถูกเอนทิตีปิดกั้นเอาไว้เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span> เครื่องปั่นไฟที่ได้รับผลจะไฮไลท์ด้วยออร่าสีขาว<br><br><i>สั่นกลัว</i>สามารถใช้ได้เพียงหนึ่งครั้งต่อทุก <span class=\\"Highlight2\\">{1} วินาที</span>เท่านั้น<br>","name":"สั่นกลัว","flavor":"\\"รัตติกาลคอยช่วยผมอยู่ และที่แห่งนี้ยามราตรีก็เป็นนิรันดร์\\" -เดอะโกสต์เฟส","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"ผู้รอดชีวิตหนึ่งคนจะกลายเป็น<b>เป้าหมาย</b>ของคุณ คุณแอบซุ่มอยู่ในเงามืด คอยกำจัดเหยื่อไปทีละคน เมื่อเป้าหมายของคุณถูกแขวนบนตะขอ <i>ลอบไล่ล่า</i>จะได้รับโทเค่นสูงสุดถึง <span class=\\"Highlight1\\">{0} โทเค่น</span><br><br>แต่ละโทเค่นจะลดรัศมีความน่ากลัวของคุณลง <span class=\\"Highlight2\\">{1} เมตร</span>ขณะอยู่ในการไล่ล่า<br><br>เมื่อมีผู้รอดชีวิตช่วยเหลือเป้าหมายจากตะขอ ผู้ช่วยเหลือนั้นจะกลายเป็นเป้าหมายของคุณแทน คุณจะสูญเสียโทเค่นทั้งหมดหากเป้าหมายถูกฆ่าหรือถูกบูชายัญ<br><br><li><i>ฆาตกรสามารถมีผู้รอดชีวิตเป็น<b>เป้าหมาย</b>ได้ทีละคนเท่านั้น</i></li><br>","name":"ลอบไล่ล่า","flavor":"\\"คุณไม่รู้หรอกว่าผมมีแผนจะทำอะไรกับคุณ มันต้องเป็นข่าวดังไปหลายสัปดาห์แน่นอนผมมั่นใจ\\" -เดอะโกสต์เฟส","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"ความหวาดผวาของคุณทำให้เกิดประจุไฟฟ้าขึ้นในอากาศและไปรบกวนการทำงานของเครื่องใช้ไฟฟ้า<br><br>การโจมตีผู้รอดชีวิตให้ตกอยู่ในสภาวะใกล้ตายด้วย<i>การโจมตีพื้นฐาน</i>จะทำให้เครื่องปั่นไฟทั้งหมดในรัศมี <span class=\\"Highlight1\\">{0} เมตร</span>ระเบิดและเริ่มสูญเสียความคืบหน้าในทันที เครื่องปั่นไฟที่ได้รับผลจากไฟกระชากจะสูญเสียความคืบหน้าทันที <span class=\\"Highlight2\\">{1}%</span><li><i>ไฟกระชาก</i>สามารถใช้ได้เพียงหนึ่งครั้งต่อทุก <span class=\\"Highlight3\\">{2} วินาที</span></li><br>","name":"ไฟกระชาก","flavor":"“ดูเหมือนว่าสัตว์ประหลาดจะส่งผลกระทบลึกลับต่อระบบไฟฟ้าและเครื่องใช้อิเล็กทรอนิกส์ที่อยู่ใกล้เคียง” -ห้องทดลองแห่งชาติเมืองฮอว์กินส์","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"ความกดดันของคุณทำให้เหยื่อหมดพลังและอ่อนแอลง<br><br>ในขณะซ่อมแซมเครื่องปั่นไฟ ผู้รอดชีวิตจะติด<b>เอฟเฟกต์สถานะหมดกำลัง</b><br><br>ตัวจับเวลา<b>เอฟเฟกต์สถานะหมดกำลัง</b>ใดๆ ที่มีอยู่จะหยุดชั่วคราวขณะที่ผู้รอดชีวิตซ่อมแซมเครื่องปั่นไฟ หลังจากหยุดการซ่อมแซม ผู้รอดชีวิตที่ติด<b>เอฟเฟกต์สถานะหมดกำลัง</b>เป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>","name":"ขยี้วิญญาณ","flavor":"\\"พลังจิตที่พบของตัวอย่างทดลองนั้นสามารถทำให้บุคคลโดยรอบเกิดความรู้สึกหวาดผวาและอ่อนล้าได้\\" -ห้องทดลองแห่งชาติเมืองฮอว์กินส์","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"ความผูกพันกับโลกต่างมิติของคุณจะแสดงออกมาเมื่อเหยื่อพยายามหลบหนี<br><br>ทุกครั้งที่ซ่อมแซมเครื่องปั่นไฟสำเร็จ หน้าต่างและสิ่งกีดขวางที่กระโดดข้ามได้ทั้งหมดในรัศมี <span class=\\"Highlight1\\">{0} เมตร</span>จากเครื่องปั่นไฟที่ซ่อมเสร็จจะถูกปิดกั้นไม่ให้ผู้รอดชีวิตทุกคนกระโดดข้ามเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span> <br><br>คุณจะมองเห็นออร่าของตำแหน่งสิ่งกีดขวางที่<i>ขีดจำกัดอำมหิต</i>ปิดกั้นเอาไว้เป็นเวลาดังกล่าว<br>","name":"ขีดจำกัดอำมหิต","flavor":"“ดูเหมือนว่าตัวอย่างทดลองสามารถเปลี่ยนสถานะของวัตถุโดยรอบได้ ราวกับว่าวัตถุเหล่านั้นอยู่ในรูปแบบอื่น ในมิติที่ไม่ใช่มิติของพวกเรา” -ห้องทดลองแห่งชาติเมืองฮอว์กินส์","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า จิตใจคุณจะตื่นตัวและรับรู้ได้ถึงชัยภูมิสำคัญบนสนามรบ<br><br>คุณจะมองเห็นออร่าของแท่นไม้ กำแพงที่ทำลายได้ และตำแหน่งสิ่งกีดขวางที่อยู่ภายในระยะ <span class=\\"Highlight1\\">{0} เมตร</span><br>","name":"กลยุทธ์ซันชิน","flavor":"“สิ่งที่อยู่ภายในความแข็งแกร่งของศัตรูก็คือความอ่อนแอ” -คำสอนของเร็นจิโร่ 12:5","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"ความเจ็บปวดทรมานของคนหนึ่งจะเกิดกับผู้อื่นด้วย<br><br>เมื่อจับผู้รอดชีวิตแขวนบนตะขอ ผู้รอดชีวิตที่เหลือซึ่งได้รับบาดเจ็บจะติดเอฟเฟกต์สถานะ<span class=\\"Highlight1\\">เลือดท่วม</span>และ<span class=\\"Highlight1\\">หมดกำลัง</span>เป็นเวลา <span class=\\"Highlight2\\">{0} วินาที</span><br><br><i>โลหิตกังวาน</i>จะมีคูลดาวน์ <span class=\\"Highlight3\\">{1} วินาที</span><br>","name":"โลหิตกังวาน","flavor":"“จู่โจมศัตรูให้แม่นยำ แล้วพันธมิตรของมันจะสัมผัสได้” -คำสอนของเร็นจิโร่ 6:3","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"คุณแสวงหาการชำระแค้นผู้ที่เคยล่วงเกินคุณมาก่อน ผู้รอดชีวิตที่สตันคุณหรือทำให้คุณตาบอดด้วยแท่นไม้หรือตู้เก็บของจะกลายเป็นเป้าหมายของคุณ<br><br>ทุกครั้งที่ผู้รอดชีวิตรายใหม่กลายเป็นเป้าหมาย ผู้รอดชีวิตดังกล่าวจะติดเอฟเฟกต์สถานะ<span class=\\"Highlight1\\">ไม่รู้ตัว</span>เป็นเวลา <span class=\\"Highlight2\\">{0} วินาที</span>และเผยให้คุณเห็นออร่าเป็นเวลา <span class=\\"Highlight3\\">{1} วินาที</span><br><br><li><i>ฆาตกรสามารถมีผู้รอดชีวิตเป็น<b>เป้าหมาย</b>ได้ทีละคนเท่านั้น</i></li><br>","name":"เทวทัณฑ์","flavor":"“มีเพียงคนเขลาที่กล้าถ่มน้ำลายใส่ใบหน้าอสูรแล้วประกาศชัยชนะ” -คำสอนของเร็นจิโร่ 4:9","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"คุณมีหูที่สามารถฟังเสียงเกียร์หยอดน้ำมันอย่างดีได้<br><br>หลังจากโจมตีผู้รอดชีวิตจำนวน <span class=\\"Highlight1\\">{0}</span> ครั้ง ด้วย<i>การโจมตีพื้นฐาน</i> <i>หัวเกียร์</i>จะเปิดใช้งานเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br><br>ขณะที่<i>หัวเกียร์</i>กำลังทำงาน แต่ละครั้งที่ผู้รอดชีวิตสามารถตรวจสอบทักษะได้ดีในขณะที่กำลังซ่อมแซม เครื่องปั่นไฟจะเผยออร่าสีเหลืองตราบเท่าที่มันกำลังถูกซ่อมอยู่<br>","name":"หัวเกียร์","flavor":"\\"บางครั้งการทำงานที่ดีที่สุดของใครบางคน คือสิ่งที่ทำให้เขาต้องไปนอนในหลุมศพ\\" -ผู้คุมนักโทษ","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"ผู้รอดชีวิตหนึ่งคนจะกลายเป็น<b>เป้าหมาย</b>ของคุณ<br><br>หลังจากแขวนเป้าหมายแล้ว <i>สวิตช์ของคนตาย</i> จะเปิดใช้งานเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br><br>ในระหว่างที่ใช้งาน ผู้รอดชีวิตคนใด ที่หยุดการซ่อมแซมก่อนที่จะซ่อมจนสำเร็จ จะทำให้เอนทิตีปิดกั้นเครื่องปั่นไฟเอาไว้จนกว่าผลของ <i>สวิตช์ของคนตาย</i>จะสิ้นสุด<br><br>เครื่องปั่นไฟที่ได้รับผลจะไฮไลต์ด้วยออร่าสีขาว<br><br><i>ฆาตกรสามารถมีผู้รอดชีวิตเป็น<b>เป้าหมาย</b>ได้ทีละคนเท่านั้น</i><br>","name":"สวิตช์ของคนตาย","flavor":"\\"ฉันเคยเห็นหน้าตาของชายคนหนึ่ง ในตอนที่เขารู้ตัวว่าเขากำลังจะตาย\\" -เคเล็บ ควินน์","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"คำสาปเมื่อมันถูกทำลาย คนเหล่านั้นที่เข้ามาขัดขวางคุณจะต้องถูกลงโทษ<br><br>ผู้รอดชีวิตชีวิตคนใดที่ชะล้างโทเทมขมุกขมัวจะติด เอฟเฟกต์สถานะ<b>ไม่รู้สึกตัว</b> เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br><br>ถ้าโทเทมคำสาปใดๆ ถูกชะล้างรวมถึงอันนี้ ออร่าของผู้รอดชีวิตทั้งหมดจะถูกมองเห็นเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>","name":"คำสาป: กรรมสนอง","flavor":"\\"โง่เง่ามากๆ พวกแกทำตัวเองแท้ๆ\\" -เคเล็บ ควินน์","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"ผู้ใดขัดขวางการทำหน้าที่ย่อมพบกับการพิพากษาอันโหดเหี้ยม<br><br>ผู้รอดชีวิตที่รับการโจมตีคุ้มกันจะติดเอฟเฟกต์สถานะ<b>ผุพัง</b>เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span>","name":"บังคับสำนึกบาป","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"คุณนำทางเหยื่อของคุณไปตามหนทางแห่งความเจ็บปวดและการลงโทษ<br><br>หลังจากเตะเครื่องปั่นไฟ คุณจะอยู่ในสถานะ<b>ตรวจไม่พบ</b>เป็นเวลาไปจนกว่าเครื่องปั่นไฟจะหยุดสูญเสียความคืบหน้า หรือมีผู้รอดชีวิตบาดเจ็บหรือถูกทำให้อยู่ในภาวะใกล้ตายด้วยวิธีใดก็ตาม ในระหว่างนี้ ผู้รอดชีวิตจะมองเห็นออร่าสีเหลืองของเครื่องปั่นไฟ<br><br>เอฟเฟกต์นี้เกิดขึ้นได้แค่หนึ่งครั้งในทุกๆ <span class=\\"Highlight1\\">{2} วินาที</span>","name":"รอยทรมาน","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"เหล่าผู้ที่ชีวิตร้อยสานเข้ากับความมืดนั้นมีชะตาที่ต้องทุกข์ทรมานด้วยกัน<br><br>เมื่อผู้รอดชีวิตรักษาสภาวะร่างกายผู้รอดชีวิตคนอื่นหนึ่งครั้งโดยอยู่ห่างจากฆาตกรอย่างน้อย <span class=\\"Highlight1\\">{0} เมตร</span> ผู้รอดชีวิตที่ทำการรักษาจะกรีดร้อง ทำให้เปิดเผยที่อยู่ของตัวเองและเปิดใช้งาน <i>ลิขิตมรณะ</i>ตลอด <span class=\\"Highlight2\\">{1} วินาที</span>ถัดไป ระหว่างนั้น ผู้รอดชีวิตจะติดเอฟเฟกต์สถานะ<b>ไม่รู้ตัว</b>เมื่ออยู่ห่างจากผู้รอดชีวิตที่ได้รับการรักษามากกว่า <span class=\\"Highlight3\\">{2} เมตร</span> ","name":"ลิขิตมรณะ","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"หลังจากเตะเครื่องปั่นไฟ ผู้รอดชีวิตคนแรกที่ทำอะไรกับเครื่องปั่นไฟใน <span class=\\"Highlight1\\">{0} วินาที</span>ถัดไปจะกรีดร้อง ทำให้เปิดเผยตำแหน่งของตัวเองเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span> และติดเอฟเฟกต์สถานะ<b>ปลอดกำบัง</b>เป็นเวลา <span class=\\"Highlight3\\">{2} วินาที</span><br><br><i>อุ้งมือมังกร</i>มีคูลดาวน์ <span class=\\"Highlight4\\">{3} วินาที</span><br>","name":"อุ้งมือมังกร","flavor":"“สารประกอบนี้ทรงศักยภาพนัก... แม้เพียงจำนวนบางเบายังให้ผลอย่างผิดธรรมชาติ” —บันทึกของทัลบอต กริมส์","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"คำสาปที่ทำให้ได้รับการอุปถัมภ์จากเอนทิตีเมื่อมีการหลั่งเลือด<br><br>เมื่อผู้รอดชีวิตถูกตีด้วย<i>การโจมตีพื้นฐาน</i> เอนทิตีจะทำให้แท่นไม้ในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>จากตำแหน่งของคุณอยู่กับที่เป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span> โดยไม่สามารถดึงแท่นไม้พวกนี้ลงได้<br><br><i>คำสาป: เชิดชูเลือด</i>มีคูลดาวน์ <span class=\\"Highlight3\\">{2} วินาที</span><br>","name":"คำสาป: เชิดชูเลือด","flavor":"“มันไม่ต้องใช้จินตนาการมากมายอะไรเลยในการจะเสนอว่าบททดสอบนั้นเป็นการตอบสนองทางชีววิทยาหลายๆ อย่างปะปนกัน” —บันทึกของทัลบอต กริมส์","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"เมื่อ<i>คำสาป: ไม่รู้จักตาย</i>ทำงาน ผู้รอดชีวิตในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>ของโทเทมขมุกขมัวอันใดก็ตามจะถูกเผยออร่า<br><br>เมื่อโทเทมคำสาปอีกอันถูกชำระล้าง คำสาปของโทเทมนั้นจะย้ายไปยังโทเทมคำสาป: ไม่รู้จักตาย และปิดใช้งานคำสาป: ไม่รู้จักตาย โทเค่นใดๆ ที่คำสาปที่ถูกย้ายไปมีจะถูกย้ายไปด้วยเช่นกัน","name":"คำสาป: ไม่รู้จักตาย","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"คุณปกป้องสิ่งเล็กๆ น้อยๆ ที่ตัวเองมีและระมัดระวังไม่ให้อะไรมารบกวนข้าวของของคุณ<br><br>เมื่อผู้รอดชีวิตจะถูกเปิดเผยตำแหน่งเมื่อพวกเขาทำอะไรกับหีบหรือเก็บไอเท็มในหีบนั้นไปภายในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>จากตำแหน่งที่คุณอยู่<br><br>เกมเริ่มต้นพร้อมหีบพิเศษได้มากถึง <span class=\\"Highlight1\\">{1}</span> ใบ","name":"คนบ้าเก็บ","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"สำหรับคุณแล้วชีวิตเป็นสิ่งที่ลำบากยากเข็ญมาตลอด คุณเลยจะให้คนอื่นๆ ได้ลิ้มลองความลำเค็ญนั้นบ้าง<br><br>เมื่อคุณทำความเสียหายแก่เครื่องปั่นไฟ จะลดความคืบหน้าในเครื่องปั่นไฟเครื่องอื่นได้มากสุดที่ <span class=\\"Highlight1\\">{0}</span> เครื่อง<br><br>หากเครื่องหนึ่งในนั้นกำลังได้รับการซ่อมแซม จะทำให้ผู้รอดชีวิตที่กำลังซ่อมแซมมันอยู่เผชิญกับการตรวจสอบทักษะอย่างยากลำบาก<br><br><i>การกดขี่</i>มีคูลดาวน์ <span class=\\"Highlight2\\">{1}</span> วินาที<br>","name":"การกดขี่","flavor":"\\"จงสาปแช่งพวกมันดังที่พวกมันสาปแช่งเรา\\" —ชาร์ลอตต์ เดชายส์","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"เมื่อใกล้ถึงจุดจบ คุณก็เริ่มการสังหาร<br><br>ทุกครั้งที่เครื่องปั่นไฟเสร็จสมบูรณ์ ปลิดชีวิตจะทรงพลังขึ้นและได้รับโทเค่น<br><br>ใช้หนึ่งโทเค่นเพื่อเพิ่มระยะทางการโจมตีพุ่งครั้งต่อของคุณ <span class=\\"Highlight1\\">{0}%</span>","name":"ปลิดชีวิต","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"ทักษะนักแสดงอันหาใดเปรียบของคุณทำให้ทุกคนต่างพิศวงงงงวย<br><br>ขณะแบกผู้รอดชีวิตผู้รอดชีวิตคนอื่นใดที่อยู่ในรัศมีความน่ากลัวของคุณจะติดเอฟเฟกต์สถานะ<b>ปลอดกำบัง</b><br>เอฟเฟกต์จะมีผลเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span>ต่อผู้รอดชีวิตที่ออกจากรัศมีความน่ากลัวของคุณไป เช่นเดียวกับพวกที่ยังอยู่ในรัศมีเมื่อคุณแขวนตะขอหรือปล่อยตัวผู้รอดชีวิตที่แบกไว้<br><i>ต้องแสงดารา</i>ใช้เวลาคูลดาวน์ <span class=\\"Highlight2\\">{1} วินาที</span>เมื่อไม่ได้แบกผู้รอดชีวิตไว้แล้ว<br>","name":"ต้องแสงดารา","flavor":"\\"มีความสุขกับช่วงเวลานี้ไว้เถอะ มีไม่กี่คนจะเข้าใกล้ได้ขนาดนี้\\" — ฮัคจีอุน","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"คำสาปที่ทำให้มั่นใจได้ว่าพวกที่ด้อยกว่าคุณจะถูกต้อนอย่างเหมาะสม<br><br>เอนทิตีปิดกั้นหน้าต่างหนึ่งบานเป็นเวลา<span class=\\"Highlight1\\"> {0} วินาที</span>หลังจากผู้รอดชีวิตโดดข้ามมัน<b>อย่างรวดเร็ว</b><br><br><i>ผลของคำสาปจะคงอยู่ตราบเท่าที่โทเท็มคำสาปที่เกี่ยวข้องยังตั้งอยู่</i><br>","name":"คำสาป: ควบคุมฝูงชน","flavor":"\\"คุณไม่รู้จักควบคุมตัวเอง คนอย่างคุณไม่เคยทำได้เลย\\" — ฮัคจีอุน","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"คุณจะไม่ยอมปล่อยให้ใครเข้าไปห้องวีไอพีได้<br><br>หลังจากแขวนตะขอผู้รอดชีวิตเป็นครั้งแรก <i>ไร้ทางออก</i>จะได้โทเค่น<br>เมื่อเครื่องปั่นไฟเครื่องสุดท้ายได้รับการซ่อมแซมแล้ว เอนทิตีจะปิดกั้นสวิตช์ประตูทางออกทั้งคู่เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span> และบวกเพิ่มเติมอีก <span class=\\"Highlight2\\">{1} วินาที</span>ต่อแต่ละโทเค่นที่คุณครอบครอง<br>","name":"ไร้ทางออก","flavor":"\\"เสียงตอนที่เลือดคุณออกน่ะ...ขอผมฟังอีกครั้งสิ\\" — ฮัคจีอุน","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"คุณถูกออกแบบมาให้ไล่ล่าและกำจัดเป้าหมายให้สิ้นซาก<br><br>ในตอนเริ่มเกม คุณจะเห็นออร่าของผู้รอดชีวิตทุกคนเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br><br><span class= \\"FlavorText\\">\\"...มันรู้ว่าตัวเองต้องการอะไร และจะไม่หยุดจนกว่าจะได้มา\\" —คาร์ลอส โอลิเวียรา<\\\\span>","name":"ผู้ไล่ล่ามรณะ","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"คุณรู้วิธีทำทารุณสมาชิกคนหนึ่งของทีมเพื่อสร้างความตื่นตระหนก<br><br>เมื่อใดก็ตามที่คุณทำให้ผู้เล่นที่พลังชีวิตเต็มเข้าสู่สถานะบาดเจ็บด้วยการโจมตีพื้นฐาน ผู้รอดชีวิตทุกคนที่บาดเจ็บอยู่จะติดเอฟเฟกต์สถานะ<b>ไม่รู้ตัว</b>เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br><I>ฮิสทีเรีย</i>ทำงานได้หนึ่งครั้งในทุก <span class=\\"Highlight2\\">{1} วินาที</span>เท่านั้น<br><br><span class= \\"FlavorText\\">\\"โทษที ฉันตกใจนิดหน่อย คือนึกไม่ค่อยออกว่าจะเจออะไรน่ะ\\" —โรเบิร์ต เคนโด","name":"ฮิสทีเรีย","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"ปรสิต NE-α ทำให้คุณมีทั้งสติปัญญาและความตระหนักรู้ที่จะวางกับดัก<br><br>หลังจากเตะเครื่องปั่นไฟแล้ว ออร่าของมันจะกลายเป็นสีเหลือง เมื่อคุณใช้การโจมตีพื้นฐานทำให้ผู้รอดชีวิตเข้าสู่สภาวะใกล้ตาย เครื่องปั่นไฟทุกเครื่องที่ได้รับผลกระทบจะระเบิด ความคืบหน้าของพวกมันจะลดลง <span class=\\"Highlight1\\">{0}%</span> และทำให้ออร่าของพวกมันหายไปด้วย<br>ผู้รอดชีวิตคนใดที่ซ่อมเครื่องปั่นไฟที่ได้รับผลกระทบอยู่ในตอนที่มันระเบิดจะกรีดร้องและติดเอฟเฟกต์สถานะทุพพลภาพเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br><i>ระเบิดปะทุ</i>มีคูลดาวน์ <span class=\\"Highlight3\\">{2} วินาที</span><br><br><span class= \\"FlavorText\\">\\"มันใช้อาวุธได้ด้วยเหรอ?\\" —จิลล์ วาเลนไทน์","name":"ระเบิดปะทุ","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/th/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/th/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"เอวาน มัคมิลลัน เคารพยกย่องพ่อของตนมาก ไม่เพียงแต่เรื่องที่พ่อเป็นทายาทของมรดกอันมหาศาล แต่เป็นวิธีที่เขาจัดการกับมรดกนั้นด้วย เอวานถูกเลี้ยงดูมาอย่างเข้มงวดและได้ดูแลแรงงานด้วยความเด็ดขาด ปริมาณการผลิตนั้นสูงอยู่เสมอและทรัพย์สินของตระกูลมัลมิลลันก็รุ่งเรืองด้วยฝีมือของพ่อลูกคู่นี้ เมื่อสุขภาพจิตของ อาร์ชี มัคมิลลัน เริ่มเสื่อมถอยลง เอวานก็ได้ปกป้องเขาจากฝูงคนที่รอรุมทึ้งมรดก ไม่ว่าพ่อขอสิ่งใดจากเอวานเขาก็จะทำให้เสมอ<br><br>ในที่สุดเมื่ออาร์ชี มัคมิลลันได้สติแตกไป เอวานก็กลายมาเป็นผู้จัดการในเรื่องที่รู้จักกันในฐานะการสังหารหมู่ที่เหี้ยมที่สุดในประวัติศาสตร์ยุคใหม่เลยก็ว่าได้ ไม่มีใครพิสูจน์ได้ว่าเอวานนำคนนับร้อยลงไปในอุโมงค์ก่อนที่จะจุดชนวนระเบิดปิดตาย เรื่องเล่าขานของตระกูลมัคมิลลันกลายเป็นเรื่องเกี่ยวกับการใช้ความมั่งคั่งและอำนาจอย่างออกนอกลู่นอกทาง ไม่มีใครทราบว่ามีผู้คนมากมายเท่าไรที่ตกเป็นเหยื่อของพ่อลูกคู่นี้ ไม่มีการบันทึกไว้ว่าเกิดอะไรขึ้นกับเอวาน มัคมิลลัน และพ่อของเขาก็เป็นอีกหนึ่งปริศนาที่ไม่เคยได้รับการแก้ไข ผู้ที่ตายและถูกทิ้งร้างไว้ในชั้นใต้ดินของโกดังตนเอง<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"ฟิลิป โอโจโม มายังประเทศนี้ด้วยความหวังและการเริ่มต้นใหม่ เขามีความสุขเมื่อได้งานที่ลานเก็บของเก่าออโต้ฮาเว่น ลานเก็บของเก่าซึ่งตำรวจที่กินสินบนจะทำเป็นมองไม่เห็นธุรกิจน่าสงสัยที่เกิดขึ้น โอโจโมไม่สนใจ เขาเคยเห็นการกระทำผิดกฎหมายอย่างใกล้ชิดมาแล้วในบ้านเกิดของตน เขาปล่อยให้สิ่งต่างๆ เป็นไปตราบที่ตนเองไม่ได้เข้าไปข้องเกี่ยวด้วย เขาเพียงแค่ซ่อมรถและจัดการกับเครื่องอัดรถ ซึ่งเป็นสิ่งที่เขาทำได้ดีเลยทีเดียว ใส่รถยนต์เข้าไปข้างในแล้วลูกบาศก์โลหะเล็กๆ ก็ออกมาแทน<br><br>จนกระทั่งถึงวันอันมืดหม่นวันหนึ่งเมื่อเขาเห็นเลือดไหลออกมาจากรถที่ยังไม่ได้อัดโดยบังเอิญ เขาเปิดฝากระโปรงรถออกแล้วพบชายหนุ่มผู้โดนอุดปากและมัดมือไว้ ดวงตาเต็มไปด้วยความตื่นตระหนก โอโจโมปล่อยชายผู้นั้นไป เขาวิ่งไปได้ไกลเพียงแค่สิบฟุตเท่านั้นก่อนที่เจ้านายของโอโจโมจะจับเขามาปาดคอ เมื่อโอโจโมต้องการคำตอบในเรื่องที่เกิดขึ้น เขากลับได้รับคำอธิบายว่าตนเองก็เป็นเพียงแค่เพชฌฆาตธรรมดาๆ เพราะรถแต่ละคันต่างก็มีวิญญาณอยู่ และนี่ก็เป็น \\"บริการ\\" ที่ลานเก็บของเก่ามีให้กับ \\"ลูกค้า\\" เช่นกัน โอโจโมโมโหจัดแล้วสติแตก เขาเหวี่ยงเจ้านายของตนลงไปในเครื่องอัดรถแล้วปล่อยให้มันบีบอย่างช้าๆ พร้อมกับศีรษะที่ยื่นออกมา โอโจโมจับศีรษะนั้นแล้วกระชากมันออกจากร่างกายพร้อมด้วยกระดูกสันหลัง แล้วเขาก็จากไป ไม่มีใครได้พบเห็นเขาอีกเลย<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"เด็กชายไร้ชื่อผู้ไม่เป็นที่ต้องการอันเกิดมาโดยพ่อแม่ผู้โหดร้ายคนนี้คือบุตรชายของแม็กซ์และเอฟวลิน ธอมป์สัน เจ้าของที่ดินผู้ร่ำรวย ด้วยความพิกลพิการน่ารังเกียจ เขาจึงถูกปิดกันออกจากสังคม แม็กซ์และเอฟวลินอับอายในตัวบุตรชายเป็นอย่างยิ่ง จึงขังเขาไว้ในห้องแล้วให้อาหารผ่านทางรูบนผนัง เมื่อเด็กชายหลบหนี เขาก็ได้ล้างแค้นโดยการสังหารพ่อแม่ผู้ทรมานเขาแทนที่จะเลี้ยงดูอย่างโหดเหี้ยมอำมหิต<br><br>หลังจากนั้น เขาก็ได้ใช้ชีวิตต่อไปที่ฟาร์ม ปลดปล่อยความรุนแรงอันวิกลจริตของตนใส่สัตว์ที่ปล่อยให้วิ่งหนี เมื่อหลุดจากพันธนาการมาในที่สุด เขาได้วิ่งลงไปยังทุ่งข้าวโพด ไล่ล่าและสังหารทุกสิ่งที่พบเจอ ไม่มีใครพบร่างของแม็กซ์และเอฟวลิน แต่พบซากสัตว์ที่ถูกทรมานและชำแหละกระจัดกระจายไปทั่วฟาร์ม ฟาร์มโคลด์วินด์ได้ปิดตัวลงแล้วแบ่งที่ดินขาย ไม่มีผู้ใดซื้อโรงนา คงเป็นเพราะว่าเสียงเลื่อยไฟฟ้าที่คุณจะได้ยินตลอดในค่ำคืนของฤดูร้อนก็เป็นได้<br>","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"แซลลี สมิธสัน เข้าเมืองมาพร้อมด้วยความใฝ่ฝันของการมีลูกและเสียงหัวเราะในบ้านไม้ที่แอนดรูว์ สามีของเธอเป็นคนสร้าง วันหนึ่งหัวหน้างานของแอนดรูว์ได้มาเยือนแซลลี ทำให้ชีวิตของเธอต้องเปลี่ยนไปตลอดกาล แซลลีต้องหางานทำแต่งานเดียวที่เธอได้รับนั้นอยู่ที่สถานบำบัดโครตัส เพรนน์ เธอไม่มีทางเลือกอื่นแล้ว แซลลีเริ่มงานจากจุดต่ำสุดโดยทำงานกะกลางคืนอย่างหนัก เมื่อเวลาผ่านไปหลายปี จิตใจของเธอก็ถึงขีดจำกัดจากการได้เห็นภาพอันสยดสยองมานับสิบปี ในที่สุดเธอก็ทนไม่ไหวอีกต่อไป แนวคิดเรื่องการชำระล้างได้ผุดขึ้นมาในหัวเธอ เช้าวันหนึ่งในเดือนกันยายน เมื่อเจ้าหน้าที่ได้มาถึงแล้วพบกับร่างอันปราศจากชีวิตของผู้ป่วยนับห้าสิบรายนอนอยู่บนเตียงของตน และเจ้าหน้าที่อีก 4 คนก็เสียชีวิตไปเช่นกัน เหลือเพียงแซลลีที่มีชีวิตรอดในคืนนั้นแต่เธอสติแตก โยกไปมาไม่หยุด พวกเขานำเธอขึ้นรถพยาบาลแต่ไปไม่ถึงโรงพยาบาล มันถูกพบคว่ำอยู่ในป่าแถวนั้น เจ้าหน้าที่ทั้งหมดเสียชีวิต และไม่มีใครพบแซลลีอีกเลย","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"ทันทีที่แอนนาเดินได้ แม่ของเธอก็เริ่มสอนวิธีเอาชีวิตรอดในความโหดร้ายและโดดเดี่ยวในป่าทางเหนือ การอยู่ในสถานที่ห่างไกลและอันตรายเช่นนี้ต้องมีทักษะและความยืดหยุ่นเป็นอย่างดี เมื่อแสงอาทิตย์ริบหรี่ลงเกินกว่าจะทำงานใดได้ พวกเธอก็จะพำนักอยู่ในบ้านซึ่งเป็นกระท่อมเก่าๆ อันแข็งแกร่งที่สร้างขึ้นมาให้ทนฤดูหนาวที่รุนแรงที่สุดได้ แอนนาจะพักผ่อนอยู่ในอ้อมแขนของแม่ ใกล้ชิดกับไออุ่นของหัวใจ รายล้อมไปด้วยของเล่นไม้และหน้ากากที่แม่ประดิษฐ์ให้เธอ เมื่อจมลงสู่ห้วงนิทรา เธอก็ได้ฝันถึงเรื่องอันแสนสุข โดยไม่ได้รับรู้ถึงเหตุการณ์อันจะเปลี่ยนแปลงทุกสิ่งไปในไม่ช้าเลย<br><br>แอนนาและแม่ของเธอกำลังย่องตามกวางใหญ่ตัวหนึ่งอยู่ในป่า พวกเธอรู้ว่ามันเป็นเหยื่อที่อันตราย แต่ตอนนั้นเป็นฤดูหนาวที่ยากลำบากเป็นพิเศษ และอาหารของพวกเธอก็กำลังจะหมดลง แต่พวกเธอหวาดกลัวปีศาจแห่งความหิวโหยเสียยิ่งกว่าสัตว์ประหลาดใดๆ ในป่า ทันใดนั้นเจ้ากวางใหญ่ก็ชูกีบเท้าหน้าขึ้น แผดเสียงคำรามแล้วพุ่งตรงเข้าจู่โจมแอนนาโดยไร้การเตือนใดๆ เธอยืนนึ่งงันอยู่ด้วยความหวาดกลัว เมื่อโลกทั้งใบดูเหมือนจะสั่นไหวตามเสียงกีบเท้าอันหนักหน่วงที่กำลังย่ำเข้ามาของเจ้าสัตว์ร้าย เจ้ากวางใหญ่อยู่ใกล้แอนนามากพอที่จะเห็นแววตาพิโรธมุ่งสังหารของมันเมื่อแม่ของเธอเข้ามาขวางไว้พร้อมกับขวานในมือ เสียงกรีดร้องอันน่าสยดสยองได้เล็ดรอดออกจากริมฝีปากของแม่ของแอนนาเมื่อเจ้ากวางใหญ่ใช้เขาเสียบทะลุแล้วยกตัวเธอขึ้นกลางอากาศ แม่ของแอนนาเหวี่ยงขวานลงบนหัวของมันอย่างสุดกำลังซ้ำแล้วซ้ำเล่าในขณะที่มันพยายามจะสะบัดเอาตัวเธอออกไป เขากวางก็พลันหักออกด้วยเสียงอันดัง แล้วแม่ของแอนนาก็หลุดเป็นอิสระ เจ้าสัตว์ร้ายล้มลง<br><br>แอนนาก็ตัวเล็กเกินกว่าที่จะย้ายร่างอันบอบช้ำของแม่ไปไหน เธอจึงนั่งอยู่กับแม่บนพื้นโล่งที่แม่ของเธอล้มลงนั้น แม่ของแอนนาอุ้มเธอขึ้นมาแล้วฮัมขับกล่อมเพลงโปรดของเธอ เพื่อไม่ให้เธอสนใจเสียงครวญของเจ้ากวางใหญ่ที่กำลังจะตาย พวกเธอยังคงอยู่กันเช่นนั้น ทั้งนักล่าสาวและเจ้ากวางใหญ่ก็เริ่มเงียบลง และร่างก็เริ่มเย็นลง จนกระทั่งเหลือแอนนาอยู่เพียงลำพังกลางป่าอันเงียบงัน ในที่สุดเธอก็ลุกยืนขึ้น แล้วเริ่มเดินทางไกลกลับไปยังบ้านของตน<br><br>ถึงจะยังเด็ก แต่แอนนาก็รู้จักชีวิตในป่าที่เยือกแข็งนี้มากพอที่จะเอาชีวิตรอดต่อไปได้ เธอทำตามสัญชาตญาณของตน แล้วกลายเป็นหนึ่งเดียวกับพงไพร แอนนามีอายุมากขึ้นและแข็งแกร่งขึ้น และได้ออกล่าเป็นกิจวัตร เมื่อเธอเติบโตขึ้นเป็นนักล่าผู้อันตราย ความเป็นมนุษย์ของเธอก็กลายเป็นเพียงความฝันที่จำได้คลับคลา<br><br>แอนนาขยายอาณาเขตของตนแล้วดำรงชีวิตอยู่ด้วยสิ่งที่ล่ามา เธอค่อยๆ ล่าจากกระรอก กระต่ายป่า ตัวมิงค์ และจิ้งจอก สุดท้ายเธอก็เบื่อหน่ายกับสัตว์พวกนี้ และเริ่มออกล่าสัตว์ที่อันตรายกว่าอย่างหมาป่าและหมี เมื่อนักเดินทางผู้ไม่รู้เรื่องราวผ่านป่าของเธอมา เธอก็ได้ค้นพบเหยื่อโปรดใหม่ของเธอ: มนุษย์ ผู้โชคร้ายที่หลงเข้ามาให้เขตแดนของเธอถูกสังหารไม่ต่างจากสัตว์อื่นๆ แอนนาชอบสะสมเครื่องไม้เครื่องมือและเครื่องประดับหลากสีของผู้คนเหล่านั้น โดยเฉพาะอย่างยิ่งของเล่นที่ชิ้นเล็กๆ แต่เธอไม่อาจทำใจฆ่าเด็กหญิงตัวเล็กๆ ได้ลงคอ<br><br>เธอจะนำเด็กหญิงเหล่านั้นกลับมายังบ้านของตน ลึกเข้าไปในป่า เด็กๆ นั้นช่างน่ารัก และการมองดูพวกเด็กๆ ได้ปลุกบางอย่างที่ฝังลึกอยู่ในจิตใจของเธอขึ้นมา เธอปรารถนาความใกล้ชิดของคนที่รัก ลูกของตนเอง เหล่าเด็กหญิงจะถูกผูกคอเข้ากับเชือกที่หยาบและถลอกแล้วมัดไว้กับผนังอย่างแน่นหนาท่ามกลางของเล่นไม้ ตุ๊กตา และหนังสือนิทานที่เธอก็อ่านไม่ออกที่ปล้นมาได้ เธอไม่อาจปล่อยให้เด็กๆ ออกไปไหนได้ มิฉะนั้นพวกเธอคงต้องตายอยู่ข้างนอกอย่างแน่นอน<br><br>เด็กหญิงเหล่านี้มักอ่อนแอหรือตายจากความหนาวเหน็บ ความหิวโหย หรือจากความเจ็บป่วยอยู่ตลอดเวลา และในทุกๆ ครั้ง นั่นก็ได้ดึงแอนนาให้จมดิ่งลงสู่ความเจ็บปวด ความเศร้าโศก และความบ้าคลั่งลงไปลึกขึ้นทุกที เธอถูกผลักดันให้ต้องลองอีกครั้ง แล้วเริ่มบุกโจมตีหมู่บ้านใกล้ๆ เพื่อสังหารครอบครัวแล้วลักพาลูกสาวของพวกเขามา เธอสวมหน้ากากสัตว์ที่แม่ของเธอประดิษฐ์ให้เมื่อนานมาแล้วเพื่อปลอบเด็กๆ ที่กำลังหวาดผวา พวกชาวบ้านก็เริ่มกล่าวขานถึงตำนานของคนครึ่งสัตว์ซุ่มซ่อนอยู่ในป่าเรดฟอเรสต์: เดอะฮันเทรส ผู้สังหารผู้คนแล้วกินเด็กหญิง<br><br>ในที่สุดสงครามก็ได้มาถึงป่า ทหารเยอรมันเริ่มเดินทางผ่านไปโจมตีจักรวรรดิรัสเซียที่กำลังล่มสลาย ในช่วงเวลาอันมืดหม่นนี้ ไม่มีนักเดินทางมาอีกต่อไป พวกชาวบ้านต่างทิ้งบ้านเรือนของตนไป และไม่มีเด็กเล็กให้พบเจออีกต่อไป เหลือเพียงแต่ทหารเท่านั้น ทหารจำนวนมากถูกพบว่ามีแผลสาหัสจากขวาน ทั้งกองหายไปอย่างลึกลับ เมื่อสงครามสิ้นสุดลง ข่าวลือเรื่องเดอะฮันเทรสก็เงียบหายไปพร้อมกัน กลืนหายไปในป่าเรดฟอเรสต์","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"มนุษย์บางคนนั้นเป็นเพียงแค่เชื้อร้าย เชื้อที่ซึมซาบไปด้วยความชั่วร้ายอย่างไม่มีสิ่งใดเจือปน ไมเคิล ไมเยอร์ส เป็นหนึ่งในเชื้อร้ายเหล่านั้น เขาไม่มีปัญหากับการทำให้ผู้อื่นต้องเจ็บปวดทรมาน แต่นั่นคือสิ่งที่เขาแสวงหา ถึงแม้ว่าชีวิตจะยากลำบากสำหรับผู้ที่จิตใจเต็มไปด้วยความหวาดกลัว ความแตกต่างอยู่ที่ว่าใครจะจัดการกับปัญหาเหล่านั้นกันอย่างไร<br><br>สำหรับไมเคิลแล้ว เขาต้องฆ่าเพื่อที่จะได้พบกับความสงบภายในจิตใจ เมื่อเขาสังหารน้องสาวของตน ตำรวจพบเด็กชายผู้เงียบกริบแต่งตัวเป็นตัวตลกอยู่ในที่เกิดเหตุ เมื่อเราพลาดเท้าเหยียบไปบนกองไฟ เราต้องไม่สาดน้ำมันลงไป แต่นี่เป็นการกระทำของเจ้าหน้าที่ผู้ไม่รู้เลยว่ามันจะทำให้ปีศาจในตัวของเด็กชายบังเกิดเป็นรูปเป็นร่างขึ้นมา การส่งไมเคิลไปยังสถาบันจิตเวชเป็นความพยายามอันขลาดเขลาที่จะช่วยเหลือเด็กชาย การบำบัดที่ไม่ได้ผลและเสียงกรีดร้องในยามค่ำคืนมีแต่จะทำให้เขาเก็บตัวและฟั่นเฟือนยิ่งขึ้นเท่านั้น ผู้คนต่างหวังว่าไมเคิล ไมเยอร์สจะจบชีวิตลง ถูกลืมเลือนและถูกกลบฝัง เป็นความผิดพลาดที่ในไม่ช้าต้องเน่าเปื่อยผุพัง แต่แล้ว... เขาก็ได้หลบหนีไป<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"ลีซ่า เชอร์วูดเติบโตขึ้นมาในเมืองที่เงียบสงบ ผู้คนในหมู่บ้านใจดี คนเฒ่าคนแก่ช่วยจัดการความขัดแย้งและรักษาประเพณีดั้งเดิมไว้ ลีซ่าหลงไหลในคาถาที่ผู้เฒ่าสอนให้วาดเพื่อความปลอดภัยและความโชคดี คืนหนึ่ง ขณะที่เธอกำลังเดินจากป่ากลับบ้าน พายุอันน่าหวาดกลัวก็เข้ามาอย่างไม่ให้ซุ่มให้เสียง ในความมืดอันลื่นและชื้นแฉะ เธอก้าวพลาดแล้วหัวกระแทก เธอมองเห็นเงาดำเข้ามาระหว่างต้นไม้ในขณะสลึมสลือ ในไม่นานเงาเหล่านั้นก็เข้ามาใกล้พอที่เธอจะเห็นรอยยิ้มอันชั่วร้ายและหิวกระหาย<br><br>พวกมันล่ามเธอไว้กับผนังในห้องใต้ดินที่น้ำเจิ่งนอง ท่ามกลางความมืดมัวนั้น เธอได้เห็นคนอื่นๆ ที่มีแผลเปิดเต็มไปด้วยแมลงวัน พวกเขารอดชีวิตอยู่ได้ไม่นานเมื่อเหล่ามนุษย์กินคนเริ่มกรีดเนื้อออกจากร่างกายด้วยมีดสนิมเขรอะ อย่างไรก็ตามลีซ่ายังคงอดทน ด้วยความหิวโหยและพิการ มืออันผอมแห้งของเธอก็เริ่มหลวมอยู่ในโซ่ตรวน เธอกระชากจนโลหะฉีกเนื้อหนังของตนจนกระทั่งเป็นอิสระ เนื้อของเธอมีน้ำหนองสีเหลืองข้นไหลอยู่ และสามารถมองเห็นกระดูกอยู่ใต้แผลที่เน่านั้น ลีซ่าไปไกลกว่านี้ไม่ไหวแล้ว เธอเพ้อคิดถึงบ้าน คิดถึงเหล่าผู้เฒ่า เธอวาดสัญลักษณ์ที่ผู้เฒ่าสอนเธอไว้ ความกระหายอันดำมืดก็ได้พุ่งพล่านอยู่ภายในร่างกายของเธอ มันปรารถนาเลือด เธอจึงเลือกการแก้แค้น<br>ตำรวจค้นหาจนได้มาพบบ้านเก่ากลางหนองน้ำ ผู้อาศัยถูกฉีกเป็นชิ้นๆ แล้วกินเป็นอาหาร บนพื้นมีคาถาของผู้เฒ่าเขียนด้วยเลือดอยู่ ไม่มีใครพบศพของลีซ่า<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"ไม่ว่าฆาตกรจะกระทำเรื่องโหดเหี้ยมจากภาวะของจิตใจอันวิปริตหรือถูกกดดันจากรอบข้างก็ตาม เป็นเรื่องที่ถกเถียงกันมาอย่างยาวนาน แต่สำหรับฆาตกรรายหนึ่งนั้น ทั้งธรรมชาติและการเลี้ยงดูก็เกี่ยวข้องกันอย่างแยกไม่ขาด<br><br>การสังหารของหน้ากากหนังไม่ได้มาจากความต้องการอยากควบคุมผู้อื่น สนองตัณหา หรือเพื่อหยุดเสียงดังในหัวแต่อย่างใด เขาฆ่าเพียงเพราะเขาหวาดกลัว หวาดกลัวว่าผู้อื่นจะทำร้ายตน หวาดกลัวว่าครอบครัวจะขุ่นเคืองตน หวาดกลัวว่าความยินดีในเนื้อมนุษย์ของพวกตนจะถูกเปิดเผย<br><br>เขาทำตามคำสั่ง ครอบครัวก็รักเขา และนั่นคือเรื่องเดียวที่สำคัญ คนภายนอกคือภัยคุกคาม และภัยคุกคามต้องถูกจัดการ <br><br>เหมือนกับเจ้าเด็กพวกนั้นที่เข้ามาในบ้านโดยไม่ได้รับเชิญ เดินดุ่มเข้ามาราวกับเป็นบ้านตัวเอง ซอกซอนมองหาไปทั่วบ้าน พยายามเข้ามาค้นหาความลับของครอบครัวเป็นแน่ แต่หน้ากากหนังก็จัดการพวกมันเรียบร้อย ได้ปกป้องครอบครัวอย่างที่ถูกสั่งสอนมา<br><br>เขาไม่ได้เป็นเพียงผู้พิทักษ์เท่านั้น หากแต่มีอีกหลายบทบาท และแต่ละบทบาทต่างก็มีใบหน้าของตนเอง เขาทำอาหารค่ำ เอาใจใส่ครอบครัว แต่งตัวอย่างดีเมื่อรับประทาน ตากับแม่เคยดูแลพวกเขาทุกคน แต่ตาก็แก่แล้วและนั่งนิ่งไม่ไหวติงมาระยะหนึ่ง หน้ากากหนังและพี่น้องจึงต้องจัดการแทน ครอบครัวคือทุกสิ่งทุกอย่างสำหรับเขา ครอบครัวคือความมั่นคงและความปลอดภัย<br><br>แต่ถึงแม้ว่าหน้ากากหนังจะทำดีที่สุดแล้ว เจ้าเด็กคนหนึ่งกลับเล็ดรอดหนีออกไปได้ เขาพยายามจะหยุดเธอไว้ ไล่กวดเธออย่างเต็มฝีเท้า แต่เธอได้รับความช่วยเหลือจากคนภายนอกอีกคนที่ขับรถกระบะ คนขับรถฆ่าน้องชายของเขาโดยขับรถทับราวกับเป็นตัวพอสซัม หน้ากากหนังกระโจนเข้าใส่หมอนั่นด้วยความเกรี้ยวกราด เตรียมเลื่อยพร้อมจะแก้แค้นให้กับครอบครัว แต่คนขับรถกลับว่องไวกว่า เขาต่อยหน้ากากหนังคว่ำแล้วใช้เลื่อยจัดการกับเจ้าของมัน <br><br>ในขณะที่หน้ากากหนังมองดูเจ้าพวกคนภายนอกขับรถไกลออกไปเรื่อยๆ ทั้งความโกรธเกรี้ยว ความเศร้าโศก และความเจ็บปวดก็ถาโถมพร้อมกับความเป็นห่วงว่าจะเกิดอะไรกับครอบครัวของตนต่อไป เจ้าพวกนั้นต้องกลับมาพร้อมกับตำรวจแน่ๆ และตำรวจต้องจับพี่น้องกับตาของเขาไป หากไม่มีพวกเขาแล้วหน้ากากหนังจะทำอย่างไรต่อไป? หากไร้ซึ่งคำสั่งของคนในครอบครัวแล้วไซร้ เขาก็คงจะแห้งเหี่ยวแล้วตายจากไป<br><br>เมื่อโลกของตนพังทลายลง หน้ากากหนังก็เหวี่ยงเลื่อยไปรอบๆ พยายามขับไล่ภัยคุกคามจากภายนอกที่ห้อมล้อมตนเองอยู่มหาศาล<br><br>จากนั้นความรู้สึกอีกอย่างก็ได้ผุดขึ้นมาในทันใด มันมาจากสัมผัสนอกเหนือจากสายตาของเขา คืบคลานไปตามผิวหนังด้วยความสยดสยองอันเย็นยะเยือก หน้ากากหนังรู้ในทันทีว่าไม่ว่าคนภายนอกจะทำสิ่งใดกับเขาได้บ้างก็ยังคงมีบางสิ่งที่เลวร้ายยิ่งกว่า บางสิ่งที่ยิ่งใหญ่กว่า และอาศัยอยู่ในเงามืด หน้ากากหนังได้พบกับความหวาดกลัวอย่างที่ไม่เคยประสบมาก่อน แต่มันกลับช่างอุ่นใจ เช่นเดียวกับความกลัวที่ตนรู้สึกต่อครอบครัว ความกลัวที่จะทำให้พวกเขาผิดหวัง<br><br>หน้ากากหนังถูกนำตัวมายังสถานที่ที่คุ้นเคยแต่ไม่อาจทราบได้ว่าเป็นที่ใด และเขาก็รู้โดยสัญชาตญาณเลยว่าต้องทำอะไร เขาจะต้องไม่พลาดอย่างที่เขาพลาดเรื่องครอบครัวตนมาแล้ว คนภายนอกจะเข้ามา แต่เขาจะใช้ทักษะของตนเอาชนะภัยคุกคามทุกประการไปให้ได้ มันจะมีเสียงกรีดร้อง แต่เขาจะทำให้โลกเงียบสงัดลงอีกครั้ง จนกว่าเสียงเดียวที่ยังคงอยู่คือเสียงคำรามอันมีมนต์ขลังของเลื่อยไฟฟ้า<br><br>ปล่อยเจ้าพวกคนภายนอกเข้ามาได้เลย","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"เฮอร์แมนได้รับคัดเลือกสำหรับการฝึกพิเศษในโปรแกรมประสาทวิทยาขั้นสูงในคุกลับของ CIA ที่มีฉากหน้าเป็นสถาบันรำลึกของเลรีจากผลการทดสอบทางจิตวิทยาอันไม่ธรรมดาของตน นี่คือที่ที่เฮอร์แมนได้พบกับดร.ออตโต สแตมเพอร์ และภายใต้การชี้นำของดร.ออตโต เฮอร์แมนได้เริ่มใช้วิธีการอันแปลกประหลาดและยิ่งโหดเหี้ยมขึ้นทุกทีในการรีดเอาข้อมูลจากนักโทษที่ถูกส่งตัวมายังสถาบันที่ซึ่งเป็นคุกลับและศูนย์ล้างสมองสำหรับใครก็ตามที่เป็นฝ่ายตรงข้ามกับประเทศสหรัฐอเมริกาในตอนนี้ การใช้การช็อตไฟฟ้าบำบัดอันรุนแรงอย่างมากมายของเขาให้ผลอันน่าทึ่งและภัยคุกคามต่อความมั่นคงของชาติมากมายถูกเปิดโปง<br><br>หลายปีผ่านไป เฮอร์แมนกลายเป็นที่รู้จักในชื่อ เดอะดอกเตอร์ และไม่มีใครกล้าตั้งคำถามว่าเขามีใบประกอบวิชาชีพแพทย์หรือเปล่า หรือแม้กระทั่งว่าเกิดอะไรขึ้นกับนักโทษหลังจากคายข้อมูลแล้ว เป็นเวลาเพียงหนึ่งสัปดาห์หลังจากสถาบันรำลึกของเลรีเงียบหายไป ความน่าสะพรึงที่แท้จริงก็ถูกเปิดเผย บุคลากร ผู้ป่วย และนักโทษทั้งหมดถูกพบเป็นศพอยู่จากการบาดเจ็บบริเวณศีรษะ ศพของบุคลากรและนักโทษทั้งหมดถูกจัดการเรียบร้อย รวมไปถึงศพของดร.ออตโต สแตมเพอร์ด้วย หากแต่ไร้วี่แววของ “เดอะดอกเตอร์” เฮอร์แมน คาร์เตอร์<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"เฟรดดี้ ครูเกอร์เป็นเดรัจฉานแห่งฝันร้ายสำหรับผู้ที่ได้รู้จักแม้กระทั่งยามมีชีวิตอยู่ ด้วยการหลบซ่อนอยู่ภายใต้หน้ากากอันอบอุ่นและเป็นมิตร นิสัยใจคอที่แท้จริงของเฟรดดี้จึงเป็นที่ทราบแก่เหยื่อของตนเท่านั้น ในที่สุดเมื่อได้ยินเสียงของเหล่าผู้เคราะห์ร้าย พ่อแม่จากสปริงวูดจึงไล่ล่าเฟรดดี้แล้วตั้งตนเป็นกฎหมายเสียเอง ในคืนนั้นพวกเขาคิดว่าตนได้กำจัดสัตว์ร้ายไปเรียบร้อย และลูกหลานของตนปลอดภัยแล้ว แต่ปีศาจผู้แข็งแกร่งอย่างเฟรดดี้ก็มีหนทางเอาชีวิตรอดจนได้ <br>กาลเวลาผ่านพ้นไปนับปี ความสยดสยองก็เริ่มบรรเบาลง เหล่าผู้เคราะห์ร้ายเริ่มจะลืมเลือนไปได้ด้วยดี แต่อย่างไรก็ตามเฟรดดี้ได้กลับคืนมา ความฝันกลับกลายเป็นฝันร้ายขึ้นอีกครา<br>เฟรดดี้เพ่งความเกรี้ยวกราดไปยังผู้ที่เขารู้สึกว่าได้ทำผิดต่อตน ก่อเกิดเป็นเป้าหมายแท้จริงหนึ่งเดียว แนนซี โฮลบรูค แต่แล้วเฟรดดี้ก็ประเมินความเก่งกาจและไหวพริบของเธอต่ำเกินไป แนนซี พร้อมกับเควนตินผู้เป็นมิตรสหายได้จัดการเฟรดดี้ให้อ่อนกำลังลง ทำลายเสียจนไม่เหลือชิ้นดี แล้วทิ้งให้เฟรดดี้ต้องนอนรอความตายเป็นครั้งที่สอง <br>ความตายไม่ต้องการเฟรดดี้ในครั้งแรกพบ แล้วเหตุใดเล่าความตายจึงจะพรากเขาไปเป็นครั้งที่สอง? เฟรดดี้ได้ปรากฏกายขึ้นอีกหน ท่วมท้นไปด้วยความเคียดแค้น แล้วหันเหความสนใจไปยังเด็กหนุ่มผู้ซึ่งขวางทางเขากับแนนซีผู้เป็นเป้าหมายอันดับหนึ่งไว้ <br>เฟรดดี้เริ่มรุกเข้าสู่ความฝันของเควนติน คุกความเจ้าเด็กหนุ่มด้วยความหวาดกลัวคืนแล้วคืนเล่าจนกระทั่งเรี่ยวแรงและการป้องกันตนของเขาตกต่ำถึงขีดสุด และเมื่อเวลานั้นมาถึง เฟรดดี้ก็ฝืนบังคับพาเควนตินกลับมาสู่ภาพสะท้อนอันดำมืดของโรงเรียนอนุบาลแบดแฮม ที่ซึ่งเฟรดดี้จะได้ดำเนินการชำระแค้นของตนครั้งสุดท้าย<br>เขาติดตามเด็กหนุ่มผ่านโถงในโรงเรียน ค่อยๆ ใช้เวลาดื่มด่ำไปกับทุกขณะการล่า กลิ่นอายเหงื่อของเจ้าพวกนั้น ลมหายใจสั่นกระเส่าด้วยความหวาดกลัวของพวกเขาเป็นสิ่งที่ทำให้เฟรดดี้เพลินใจอย่างยิ่ง มันเป็นของเล่นอย่างเลิศให้แก่เขาเลยทีเดียว <br>แล้วก็เจ้าหนุ่มคนนั้นที่ปลายทางเดิน เหน็ดเหนื่อยและหวาดกลัวเกินกว่าจะหนีแล้วหรือไร? ถอดใจในชีวิตแล้วงั้นหรือ? เฟรดดี้ค่อยๆ คืบเข้าไปหา แขนอ้ากว้าง กรงเล็บคราดไปกับผนัง ปลายมีดลากไปตามท่อ เสียงกรีดของโลหะได้เพียงแต่เพิ่มความหวาดหวั่นให้แก่เด็กหนุ่มเท่านั้น<br>สะเก็ดไฟจากการเสียดสีได้สาดกระเซ็นลงสู่พื้นเบื้องล่าง ลงไปยังของเหลวที่เจิ่งนองบนพื้นกระเบื้อง ทันใดนั้นเปลวไฟสีน้ำเงินก็พลันพวยพุ่งขึ้นท่วมทั้งห้อง<br>เจ้าหนุ่มนั่นหนีไปพร้อมกับที่เฟรดดี้พุ่งพรวดออกจากเปลวเพลิงด้วยแรงโทสะ ทั้งห้องและผนังต่างวิ่งผ่านไปอย่างรวดเร็วจนกระทั่งทั้งคู่มาอยู่ในห้องใต้ดินของเฟรดดี้ ที่ซึ่งไม่มีทางให้หลบหนีออกไปได้อีกแล้ว<br>เฟรดดี้ค่อยๆ คืบใกล้เด็กหนุ่มเข้าไป ความหวาดกลัวของเขานั้นช่างรุนแรงเสียจนเฟรดดี้แทบจะลิ้มรสได้ แต่ดวงตาของเขาคู่นั้นกลับแผดเผาไปด้วยความแข็งขืนชิงชังเสียจนน่าชื่นชม <br>เฟรดดี้ถอยกรูดกรงเล็บกลับคืนมา<br>จากนั้นจึงได้สัมผัสถึงบางสิ่งที่อยู่กับตน บางสิ่งซึ่งเก่าแก่ ทรงพลัง และชั่วร้าย กลิ่นอายมืดได้โอบล้อมตัวเขาไว้ และสัมผัสเดียวในขณะนั้นมีเพียงเสียงเอียดอาดของไม้อยู่ไกลลิบๆ เสียงครืดคาดของโลหะกระทบกับโลหะดังก้องไปมา บางสิ่งซึ่งลี้ลับและไม่อาจหยั่งถึง บางสิ่งซึ่งอยู่ก้ำกึ่งระหว่างการบรรยายออกเป็นคำกล่าวและความสยดสยองอันปราศจากมลทิน <br>ชั่วขณะหนึ่งที่เฟรดดี้ล้มกลิ้งไป จากนั้นก็พบว่าตนกลับมาที่โรงเรียนอีกครั้ง แต่ไม่ใช่โรงเรียนแห่งเดิม มันดูเหมือนจะใช่แต่กลับให้ความรู้สึกแตกต่างกันไป พลังของเขาดูเหมือนจะแข็งแกร่งขึ้นทางใดทางหนึ่งและโฟกัสไปยังสิ่งอื่น ตอนนี้เจ้าเด็กนั่นหายไปแล้ว แต่เหยื่อรายอื่นต่างก็เดินไปมาอยู่ตามรายทาง บางคนก็คงเป็นแค่เบี้ยริมทาง แต่บางคนอาจกลายมาเป็นของเล่นโปรดชิ้นใหม่ของเขาก็ได้ และสุดท้ายทุกคนก็ต้องสยบให้แก่นิ้วเขมือบนี้","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"เมื่อจอห์น เครเมอร์ หรือที่รู้จักกันในชื่อว่าจิ๊กซอว์ ได้วางแผนให้ลูกชายของตนเกิดในปีกุน อันสื่อถึงความอุดมสมบูรณ์และการถือกำเนิดใหม่ การเริ่มต้นใหม่ของเขากับภรรยา และชีวิตสุขสันต์ของลูกชายตนที่จะได้เริ่มต้นขึ้น แต่แผนนั้นก็พลันมลายสิ้นไปในคืนที่ขี้ยางัดเข้าไปในคลินิกของภรรยาเขาด้วยหวังจะขโมยยา <br><br>หลังจากเหตุการณ์ที่ทำให้ลูกชายผู้ยังไม่ลืมตาดูโลกของเขาต้องจากไป จอห์นก็จับเจ้าขี้ยาจนได้ แล้วทำให้หมอนั่นกลายเป็นตัวอย่างทดลองคนแรก และหมูก็เปลี่ยนแปลงไปตลอดกาลเช่นกัน มันกลายเป็นตัวแทนของโรคร้ายที่บ่อนทำลายให้จอห์นเน่าเฟะจากภายใน เป็นสิ่งเตือนใจว่าเราเป็นเพียงแค่ชิ้นเนื้อเท่านั้น นอกเสียจากว่าเราจะยกระดับตนเองขึ้นด้วยการกระทำ ด้วยการรู้ซึ้งถึงชีวิตจากการผ่านอุ้งมือของความตายมา<br><br>เดอะพิกจึงกลายเป็นภาชนะ เป็นตัวแทนของจิ๊กซอว์ คอยนำตัวอย่างทดลองเข้าสู่การทดสอบ สำหรับบางคนที่ได้พัฒนาขึ้นอย่างมีชัย หมูก็ยังคงเป็นการถือกำเนิดใหม่เข้าสู่ชีวิตใหม่ของพวกเขาในฐานะผู้ฝึกหัดหรือแม้กระทั่งสาวกของจิ๊กซอว์ <br><br>เช่นเดียวกับสาวเจ้าปัญหา อาแมนด้า ยัง ผู้ที่ชีวิตเคยเป็นอันตรายต่อทั้งตัวเธอเองและคนรอบกาย สิ่งนั้นเปลี่ยนแปลงไปเมื่อเธอต้องเผชิญหน้ากับการทดสอบของจิ๊กซอว์แล้วผ่านไปได้อย่างยอดเยี่ยม เมื่อตัดสินใจได้แล้วว่าชีวิตของตนมีคุณค่าให้ทำบางสิ่งบางอย่าง เธอจึงทุ่มเทให้กับแนวทางของจิ๊กซอว์และพร้อมที่จะรับช่วงต่อเมื่อเนื้อร้ายกัดกินเขาไป<br><br>แต่เธอก็ได้ยึดติดอยู่กับจอห์นยิ่งขึ้นไป ความตรอมตรมกับความตายที่ย่างกรายจอห์นเข้ามาทุกที บวกกับความเชื่อว่าตัวอย่างทดสอบของตนไม่สามารถช่วยเหลือตนเองจากการถือกำเนิดขึ้นใหม่ในเกมการทดสอบอันทรหดได้ <br><br>เมื่อเห็นเช่นนี้แล้ว จอห์นจึงให้บททดสอบอีกหนึ่งเกมแก่อาแมนด้า โอกาสในการช่วยเหลือตัวเองอีกครั้งหนึ่ง แต่เธอกลับยอมให้ความเกรี้ยวกราดและความริษยาครอบงำการกระทำของตน เธอไม่ผ่านการทดสอบ และต้องรับกระสุนเป็นสิ่งตอบแทน <br><br>ขณะนอนอาบเลือดอยู่บนพื้นกระเบื้องนั้น ความมืดก็พลันปกคลุมการมองเห็นของอาแมนด้าไปเสียสิ้น ตามด้วยเสียงราวกับไม้ลั่นเอี๊ยดอ๊าด จากนั้นเธอก็มาอยู่กลางป่า มองโลกอีกครั้งหนึ่งผ่านดวงตาของเดอะพิก มีแมกไม้รายล้อม กิ่งก้านคอยข่วนเธอจากทุกทิศทาง คลื่นความตระหนกท่วมท้นตัวอาแมนด้า เธอได้ยินเสียงลมหายใจของตนกังวานอยู่ภายในหน้ากาก<br><br>หรือเธอจะถูกสาปให้ต้องใช้เวลาที่เหลืออยู่ที่นี่ ในร่างนี้? หรือบางทีนี่อาจเป็นการทดสอบอีกเกมหนึ่ง? หรือบางทีเธออาจไม่ได้ทำพลาดไปเลยด้วยซ้ำ? จอห์นมักคิดล้ำกว่าคนอื่นไปก้าวหนึ่งเสมอ วางแผนไว้สำหรับสิ่งที่อาจเกิดขึ้นได้ทุกกรณี และเขาจะไม่ยอมทิ้งเธอไปจริงๆ อย่างนั้นหรือ?<br><br>จิ๊กซอว์อาจจากไปแล้ว แต่เขาก็ได้ส่งต่อสิ่งนั้นให้แก่คนอื่น สิ่งที่ทำให้เธอได้เป็นเดอะพิกอีกครั้งหนึ่ง<br><br>สุดท้ายแล้ว เธอก็ได้เข้าใจว่าสิ่งที่เธอเลือกไปนั้นเป็นสิ่งที่ถูกต้อง เวลาเล่นเกมจบลงแล้ว ไม่มีโอกาสแก้ตัวให้กับพวกเขาอีกต่อไป พวกเขาเป็นเพียงชิ้นเนื้อ และชิ้นเนื้อต้องตาย ","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"เคนเนท เชส เกิดเมื่อปี 1932 ด้วยการคลอดอย่างยากลำบาก ทำให้แม่ของเขาต้องเสียชีวิตลง เหตุการณ์นี้ผลักดันให้เกิดความร้าวฉานระหว่างเขากับพ่อที่ไม่เคยสนิทสนมด้วยเลย เมื่อเด็กชายเติบใหญ่ขึ้น ความขุ่นข้องใจกับการดื่มหนักของพ่อเขาก็ทวีขึ้นเช่นกัน เมื่อถึงเวลาที่เคนเนทเข้าโรงเรียน สองคนนี้ก็แทบจะแยกกันอยู่<br><br>ในด้านการเรียนนั้นเคนเนทไม่ได้มีอะไรเป็นพิเศษ แต่ใช้ชีวิตไปเรื่อยเปื่อยด้วยความสามารถทางกีฬาอันโดดเด่น เขาเติบโตขึ้นมามีร่างสูงใหญ่และแข็งแกร่งอีกทั้งเป็นเลิศทางกรีฑา แต่กลับบอกปัดการเชื้อเชิญให้เข้าร่วมทีมกีฬาไปเสียสิ้น<br><br>ขณะกำลังเดินจากโรงเรียนกลับบ้าน เคนเนทมักจะพบกับขนนกที่ร่วงหล่นอยู่บนพื้น เขาจึงเริ่มสะสมมันโดยเก็บไว้ในกล่องซิการ์ใต้เตียง เนื่องจากพ่อของเขาถ้าไม่ทำงานอยู่ก็จะสลบไสลไปด้วยฤทธิ์แอลกอฮอล์ เคนเนทจึงมีเวลาว่างอยู่เพียงลำพัง คอยนิ่งงันดูความเป็นระเบียบเรียบร้อยของส่วนแหลมบนขนนกนั้น พร้อมทั้งคอยสัมผัสความนุ่มของมันด้วยริมฝีปากเขาเอง เมื่อมองเหล่านกที่เข้ามายังจานอาหารในสวนของเขา เคนเนทก็จินตนาการไปว่ามันจะนุ่มเพียงใดกันจึงตัดสินใจที่จะจับนกมาสักตัว เขาเริ่มทำตัวสนิทสนมกับหมอฟันแถวบ้านซึ่งในไม่ช้าก็ทำให้ได้ยาสลบมา เคนเนทใช้ยาสลบนี้วางกับดักบนที่ใส่อาหารด้วยหวังว่ายาจะทำให้นกสลบไปนานพอที่เขาจะสัมผัสตัวมันได้<br><br>หลังจากผิดพลาดมาหลายครั้งเขาก็จับนกโรบินมาได้ตัวหนึ่ง ในขณะที่นกนอนแผ่อยู่บนมือนั้น เคนเนทก็เกิดความรู้สึกพลุ่งพล่านถึงชีวิตที่อยู่ในเงื้อมมือของตนขึ้นมาในทันทีทันใด ตอนแรกเขากะจะปล่อยนกไปเมื่อมันฟื้นจากยาสลบ แต่เมื่อดวงตาของนกส่องประกายกลับมารู้สึกตัวอีกครั้งมันก็เริ่มดิ้น เคนเนทยังคงกำมือแน่น นิ้วมือของเขาค่อยๆ โอบไปรอบคอของมันแน่นขึ้นเรื่อยๆ แล้วยังคงบีบรัดอยู่เช่นนั้นจนกระทั่งขนตามอกของเจ้านกแน่นิ่งไป เขากำจัดซากทิ้งแล้วเก็บไว้แต่เพียงขนนก ซึ่งเป็นการเริ่มชุดสะสมใหม่โดยโละขนนกอันอื่นทิ้งไปเนื่องจากเป็น “ของปลอม”<br><br>เมื่อถึงช่วงปลายทศวรรษที่ 1940 เคนเนทก็ออกจากโรงเรียนแล้วเริ่มทำงานเป็นเด็กเสิร์ฟที่ร้านอาหารใกล้บ้าน นอกจากนี้เขายังยกระดับไปยังเหยื่อที่ตัวใหญ่ขึ้น อย่างเช่น กระรอก แร็คคูน และสุนัข ทำให้เชี่ยวชาญในการคำนวณขนาดยาสลบสำหรับสัตว์แต่ละตัว<br><br>ช่วงต้นปี 1954 เด็กหนุ่มคนหนึ่งหายสาบสูญไปจนทั้งเมืองต้องพลิกแผ่นดินค้นหา ไม่กี่เดือนหลังจากนั้น ในขณะที่พ่อของเคนเนทกำลังทำงานอยู่ในชั้นใต้ถุนบ้านก็ได้พบกับกล่องซิการ์ เขาทุบแล้วเปิดมันออกมาพบกับความสยดสยอง ในนั้นมีทั้งขนนก อุ้งตีนสัตว์ รวมไปถึงนิ้วมือของมนุษย์อีกด้วย<br><br>เมื่อเคนเนทกลับจากทำงานแล้วเห็นพ่อของตนออกจากใต้ถุนบ้านมาพร้อมกับกล่องซิการ์ในมือ เขาก็รีบเผ่นแนบไปโดยไม่กลับบ้านอีกเลย<br><br>หลังจากใช้ชีวิตอย่างยากลำบากเป็นเวลาหลายสัปดาห์เคนเนทก็ได้พบกับคณะละครสัตว์เร่ และด้วยพละกำลังอันน่าอัศจรรย์เขาจึงได้รับว่าจ้างให้แสดงกายกรรมไต่เชือก แล้วเปลี่ยนชื่อของตนใหม่เป็น เจฟฟรีย์ ฮอว์ก<br><br>เมื่อต้องถูกห้อมล้อมอยู่ด้วยกลุ่มคนที่ใกล้ชิดกันอย่างกะทันหันเช่นนี้ “เจฟฟรีย์” จึงจำต้องเรียนรู้วิธีการเข้าสังคม เขาสวมใส่บุคลิกใหม่ได้ราวกับชุดปลอมตัว จนเป็นที่รู้จักในเรื่องความน่ารักมีเสน่ห์และความเอื้อเฟื้อเผื่อแผ่ในไม่ช้านาน จึงได้รับการต้อนรับเข้าสู่ครอบครัวใหม่ในเวลาต่อมา<br><br>กาลเวลาผ่านไปนับทศวรรษที่เจฟฟรีย์ต้องอาศัยอยู่กับคณะละครสัตว์ ออกเดินทางขึ้นเหนือล่องใต้ไปทั่วทั้งสหรัฐอเมริกา แต่ด้วยวิถีชีวิตที่ต้องเที่ยวตะลอนไปเรื่อยๆ ซึ่งผลจากการกระทำต่างๆ ติดตามมาน้อยนักจึงทำให้เขาติดนิสัยเสียมา ไม่ว่าจะเป็นการดื่มเหล้าเมามาย กินอาหารขยะ เล่นยา เจฟฟรีย์ปล่อยตัวปล่อยใจไปกับสิ่งเหล่านี้อย่างไม่ลดละ เมื่อผ่านไปชั่วระยะเวลาหนึ่ง สิ่งอบายมุขเหล่านี้ก็ถึงคราวต้องหยุดลง แต่แล้วแรงขับอันเก่าแก่ของเขาพลันหวนกลับคืนมา และชีวิตที่ต้องเดินทางพเนจรเช่นนี้ก็กลายมาเป็นสิ่งช่วยปิดบังให้เขากลับมาดำเนินการสังหารต่ออีกครั้ง เจฟฟรีย์ขโมยเสื้อผ้าและเครื่องสำอางจากนักแสดง ปลอมตัวตามแฟชั่นที่ทำให้เขาได้เข้าใกล้เหยื่อก่อนที่จะวางยาสลบแล้วนำกลับมายังกองคาราวาน ที่ซึ่งเหยื่อจะลืมตาคืนสติมาพบว่าตนถูกมัดอยู่ และชีวิตของตนนั้นอยู่ในเงื้อมมือของเจฟฟรีย์ ในที่สุดเขาก็จะได้เล่นสนุกเสียที ได้ทรมานทั้งร่างกายและจิตใจของเหยื่อ เสียงกรีดร้องเหล่านี้คอยเติมเต็มเขาจนกว่าจะเงียบหายไปในยามค่ำคืน<br><br>เมื่อเรี่ยวแรงของเหยื่อทั้งหลายถึงคราวต่ำสุดแล้ว เจฟฟรีย์ก็จะค่อยๆ ตรวจดูนิ้วมือของพวกเขาเพื่อหานิ้วที่งดงามที่สุด แล้วไล่เลียไปทั่วลิ้นเพื่อหานิ้วที่รสเลิศที่สุด เมื่อเจฟฟรีย์พบนิ้วที่ยอดเยี่ยมที่สุดแล้วก็จะตัดมันออกมาเพิ่มไว้ในชุดสะสมของตนอย่างภาคภูมิใจ ส่วนร่างที่เหลือก็จะกำจัดทิ้งอย่างขยะไร้ค่า<br><br>ไม่ว่าจะชายหรือหญิง หนุ่มหรือแก่ เจฟฟรีย์ก็ไม่ใส่ใจ สิ่งสำคัญของชุดสะสมที่ดีอยู่ที่ความหลากหลายและความทรงจำกับเรื่องราวที่สิ่งเหล่านี้ยังให้ระลึกถึง<br><br>เขาถอดชุดแต่งกายน้อยลงไปเรื่อยๆ ปล่อยให้บุคลิกเดิมของตนหลุดลอกออกไปพร้อมกัน แล้วโอบรับเอาเดอะคลาวน์อันเป็นตัวตนที่แท้จริงของตนเข้าครอบครองอย่างสมบูรณ์<br><br>เมื่อเวลาผ่านไป ตัวตลกก็เริ่มชะล่าใจและเกิดสะเพร่า ทำให้มีเหยื่อรายหนึ่งหลุดรอดออกจากพันธนาการไปในขณะที่เขานอนเมามายอยู่ เธอหนีรอดไปได้พร้อมทั้งกรีดร้องขอความช่วยเหลือ ตัวตลกจึงตื่นขึ้นมาแล้วพบว่าคณะละครสัตว์ทั้งหมดกำลังตรงดิ่งเข้ามาหาเขาอย่างน่าสะพรึง เขาจึงตวัดแส้ขึ้นควบม้า แล้วกองคาราวานก็จางหายไปกับยามค่ำคืน<br><br>นับแต่นั้นมา ตัวตลกก็ร่อนเร่ไปตามชนบท กลายเป็นปรสิตที่พบได้ประจำตามงานเทศกาลหรือตามคณะละครสัตว์ แต่กลับเป็นผู้ที่ไม่ปรากฏบนใบประกาศการแสดงเลย เขาจะล่อลวงผู้ที่กล้าหาญหรือโง่เขลาพอที่จะเข้ามาใกล้จนติดกับดัก แล้วเดินทางต่อไปก่อนที่ใครจะพบว่ามีคนหายสาบสูญ<br><br>ณ ใดจุดจุดหนึ่งบริเวณข้างทาง ตัวตลกก็ได้ทิ้งถนนธรรมดาๆ ของสหรัฐฯ ไว้เบื้องหลัง ก่อนจะออกเดินทางผ่านม่านหมอกแล้วเข้าสู่ดินแดนใหม่อันเป็นสถานที่ซึ่งดูชั่วคราว ไม่คงทนถาวร เหมาะสำหรับการใช้ชีวิตที่เขาเลือกเดินมา และด้วยความรู้สึกสบายเหมือนบ้านเสียยิ่งกว่าที่เคยได้สัมผัสมาตลอดทั้งชีวิต ตัวตลกจึงเริ่มตั้งค่ายพัก แล้วรอคอยผู้มาเยือนรายแรกของตน","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"รินเป็นลูกเพียงคนเดียวของตระกูลยามาโอกะ เธอเติบโตขึ้นท่ามกลางโถงฝุ่นเขรอะของเรือนแบบญี่ปุ่นในจังหวัดคางาวะ แล้วได้เข้าเรียนคณะศึกษาศาสตร์ที่มหาวิทยาลัยทาคามัตสึซึ่งเป็นมหาวิทยาลัยเอกชน ภาระมหาศาลจึงตกอยู่กับตระกูลที่สภาพทางการเงินไม่ค่อยจะสู้ดีนัก แม่ของเธอล้มป่วยลงในปีนั้น ค่าใช้จ่ายต่างๆ นานาเริ่มพอกพูน รินออกทำงานพิเศษด้วยความหวังลมๆ แล้งๆ ว่าจะช่วยลดภาระลงไปได้<br><br>พ่อของเธอต้องพบกับหนี้สินที่งอกเงยขึ้นไม่รู้จบจนต้องเริ่มทำงานสองกะด้วยหวังว่าจะได้รับการเลื่อนตำแหน่ง ในตอนนั้นเองที่เขาเริ่มอดหลับอดนอน มีเสียงกระซิบกระซาบอันดำมืดคอยปลุกตลอดทั้งคืนพร้อมย้ำเตือนว่าเขากำลังอยู่ในสถานภาพอันสิ้นหวังเพียงใด ความอิดโรยทำสติเขาเริ่มหลุดลอย และเพื่อต่อสู้กับเสียงกระซิบยามค่ำคืนนั้น พ่อของรินจึงต้องทิ้งไพ่ใบสุดท้าย เขาเข้าพบผู้บังคับบัญชาแล้วอธิบายถึงสถานการณ์ของตนพร้อมร้องขอโบนัส ค่าจ้างล่วงหน้า วันหยุดพัก---อะไรก็ได้ทั้งนั้น<br><br>คำขอของเขาถูกตีตกไป ขณะนั้นบริษัทได้เปิดสายการผลิตที่บกพร่องจนทำให้สูญเงินมหาศาล และต้องมีใครบางคนรับผิดชอบ ซึ่งเจ้ากรรมพ่อของรินก็เหมาะการเป็นแพะเข้าพอดี เขาจึงถูกไล่ออกจากงานหลังจากที่ทำงานรับใช้มากว่ายี่สิบสองปี<br><br>ค่ำวันนั้น รินกลับมาจากที่ทำงานช้าเพราะคอยดูแลลูกค้าที่เหลือในร้านอาหาร ขณะกำลังจอดจักรยานไว้ในเพิง เธอก็พลันได้ยินเสียงกรีดร้องของแม่ดังมาจากเรือน<br><br>รินรีบรุดเข้าไปข้างในแล้วปีนบันไดขึ้นไปยังห้องของพ่อกับแม่ ที่ซึ่งเธอได้พบกับเศษชิ้นส่วนของแม่กระจัดกระจายอยู่บนพื้น แขนขาถูกฟันฉับแล้วพันเกี่ยวกันไว้อย่างผิดมนุษย์มนา หน้าอกถูกเฉือนออกจนเห็นกระดูกซี่โครงที่เปิดอ้า รินถึงกับต้องสำรอกของเก่าออกมา<br><br>พลันมีดาบคาตานะตวัดลงอย่างแรง รินรับคมดาบนั้นไว้ด้วยท่อนแขนอันเปลือยเปล่าจนถูกบาดลึก ความเจ็บปวดของเธอต้องชะงักไปจากความตกตะลึงที่เห็นว่าพ่อของเธอเองที่เป็นผู้ตวัดคาตานะเล่มนั้นด้วยสีหน้าปราศจากอารมณ์ความรู้สึก รินกรีดร้องให้เขาหยุดได้แล้ว แต่พ่อกลับฟันแขนของเธอซ้ำอีกฉับ<br><br>รินรีบพุ่งออกไปแต่ก็ลื่นล้มลงบนพื้นเปื้อนเลือด เธอคว้าวงกบประตูเพื่อพยุงตัวขึ้น แต่พลันคาตานะก็ฟันทะลุประตูเข้ามาสับแขนเธออีกข้าง รินแผดเสียงร้องด้วยความเจ็บปวดพร้อมกระเสือกกระสนไปตามทางเดินเพียงเพื่อพบกับคมดาบของพ่อตน<br><br>รินผละถอยไป ร่างกายสั่นเทิ้ม พร้อมทั้งกอบเอาเนื้ออันนุ่มนิ่มตรงหน้าท้องของตนเอาไว้ ภาพรยางค์ที่กระจัดกระจายของแม่พลันฉายขึ้นมาต่อหน้าเธอวูบหนึ่ง<br><br>รินพุ่งใส่พ่อของตนจนเซถอย เขาก็ต่อยหน้าท้องรุ่งริ่งของเธอจนตัวโก่งด้วยความเจ็บปวด และเมื่อรินพยายามจะพยุงตัวขึ้น เขาก็เฉือนต้นขาให้เธอกลับลงไปกองกับพื้นอีกครั้ง<br><br>ขณะรินกำลังคลานไปยังบันไดนั้น พ่อก็จิกหัวเธอแล้วฟาดเข้ากับผนัง กระจกแตกเพล้งเมื่อร่างเธอพุ่งชนพร้อมลอยผ่านแล้วหล่นลงไปยังพื้นข้างล่าง<br><br>รินได้ยินเสียงฝีเท้าอยู่ชั้นบนซักแห่ง เธอพยายามตะเกียกตะกายคืบคลานผ่านดงเศษแก้วแตกที่บาดเข้าเนื้อ ต้องหยุดยั้งเขาเอาไว้ พ่อจะต้องไม่มีทางรอดไปไหนได้หลังจากที่ทำกับเธอ—หลังจากที่ทำกับแม่ของเธอแบบนั้น<br><br>ทั้งไอที่เป็นเลือด ทั้งคางที่ครูดไปกับเศษแก้ว บวกกับเลือดที่กำลังรินไหลนั้น รินเริ่มได้ยินเสียงหัวใจเต้นดังหวีดก้องอยู่ในหู ร่างกายเธอรู้สึกหนักอึ้งจนขยับไปไหนไม่ได้อีกแล้ว<br><br>พื้นดินสั่นไหวไปตามฝีเท้าพ่อ รินรู้ดีว่าตัวเองไม่มีทางรอด แต่เธอก็ไม่ใส่ใจอีกต่อไปแล้ว เธอต้องทำให้เขาชดใช้ให้ได้ ไม่ในชาตินี้ก็ในชาติหน้า<br><br>สายหมอกดำมืดค่อยๆ เข้าบดบังดวงตารินเอาไว้ แต่มันก็ไม่อาจทำให้ความเคียดแค้นของเธอจางลงไปได้ เธอจะไม่ไปสู่สุคติ—ยังไม่ใช่ตอนนี้ ความมืดส่งเสียงกระซิบกระซาบ รับปากมั่นว่าเลือดต้องล้างด้วยเลือด และเธอจะได้ชำระแค้น<br><br>เมื่อเอ่ยคำสาบานเรียบร้อยแล้ว รินก็หลับตาลง","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"แฟรงค์ มอร์ริสันมีอายุได้สิบเก้าปีแล้ว แต่ก็ไม่มีอะไรที่น่าอวดเลยเรื่องนั้น แฟรงค์เลิกเข้าเรียนหลังถูกเฉดออกจากทีมบาสเกตบอลเพราะไปผลักผู้ตัดสินใส่สแตนด์เชียร์ แต่เขาก็เป็นคนมีศักยภาพและทำให้บรรยากาศสดใสขึ้นได้แม้จะมีอดีตอันขื่นขมก็ตาม เมื่ออายุหกขวบ เขาถูกพรากจากเมืองแคลการีแล้วเริ่มเข้าสู่วงโคจรของการมีครอบครัวอุปถัมภ์ และไม่ว่ากี่ครั้งกี่หนที่แฟรงค์เกิดพฤติกรรมรุนแรง อาละวาดหรือมีเรื่องทะเลาะต่อยตีกัน เขาก็จะถูกย้ายไปยังบ้านหลังใหม่ที่ไม่คุ้นเคยอยู่เรื่อยมา การย้ายบ้านครั้งสุดท้ายของแฟรงค์คือเมื่อสามปีก่อน ตอนที่ไคลฟ์ แอนดรูวส์ ซึ่งเป็นพ่อเลี้ยงคนล่าสุดไปรับเขามาจากศูนย์รับบุตรบุญธรรม ทั้งสองเดินทางนานเจ็ดชั่วโมงก่อนจะมาถึงบ้านหลังเล็กๆ ชั้นเดียวในเมืองออร์มอนด์ นั่นคงเป็นช่วงเวลายาวนานที่สุดที่ทั้งสองคนได้อยู่ด้วยกัน เพราะไคลฟ์มัวแต่วุ่นกับการเปลี่ยนเช็คเงินสงเคราะห์ครอบครัวให้เป็นเครื่องดื่มอยู่ในร้านเหล้า<br><br>ออร์มอนด์เป็นเมืองเล็กๆ น่าเบื่อหน่ายและห่างไกลความเจริญ มีผู้อยู่อาศัยราวหกพันคน ฤดูหนาวอันหมองหม่นยืดยาวเกือบตลอดทั้งปี แฟรงค์ทำทุกวิถีทางเพื่อให้ได้ครอบครัวอุปถัมภ์ใหม่ แต่แล้วก็ต้องเปลี่ยนใจเมื่อตกเป็นที่หมายปองของเด็กสาวแสนสวยคนหนึ่ง จูลี่เป็นสาวป๊อปผู้เชื่อว่าตัวเองควรได้รับอะไรที่ดีกว่าชีวิตในเมืองออร์มอนด์ และแฟรงค์ซึ่งเป็นคนนอกก็เลยกลายเป็นทางออกของเธอ แฟรงค์เข้าร่วมงานปาร์ตี้ที่จูลี่จัดขึ้น ทุกคนในนั้นดูอายุน้อยกว่าเขาไปหมดแถมยังประทับใจอะไรได้ง่ายๆ ซึ่งแฟรงค์เองก็ชอบ เขาได้พบกับโจอี้ผู้บ้าบิ่นและชื่นชอบการคุยโวโอ้อวด กับซูซี่ผู้เหนียมอายไร้เดียงสา เพื่อนสนิทของจูลี่<br><br>ทั้งสี่มักเตร็ดเตร่กันแถวกระท่อมร้างบนเขาออร์มอนด์ เวลาที่อยู่กันพร้อมหน้าก็เป็นการพักผ่อนจากความเบื่อหน่ายที่ต้องทำตามวิถีชีวิตอันไร้ความหมาย แฟรงค์เห็นเรื่องนี้เป็นโอกาสดีในการปั้นความอ่อนหัดของทั้งสามคนให้กลายเป็นสิ่งที่ทรงพลัง เขาคอยจัดเตรียมค่ำคืนแห่งความสำมะเลเทเมาและการออกอาละวาดเพื่อทดสอบขีดจำกัดของทั้งสามคน ไม่ว่าจะเป็นการระรานกลั่นแกล้ง ทำลายข้าวของหรือลักขโมย ล้วนแล้วแต่อยู่ในแผนสุดสัปดาห์ของพวกเขาเหล่านี้ มาจนถึงจุดที่ทั้งสามยอมทำทุกสิ่งตามที่แฟรงค์ต้องการ ไม่มีอะไรเป็นเรื่องต้องห้ามเมื่อสวมใส่หน้ากากเอาไว้ ค่ำวันหนึ่งแฟรงค์ท้าให้โจอี้บุกทำลายร้านที่เพิ่งจะไล่เขาออกจากงาน ทั้งสี่ลอบเข้ามาข้างในได้ค่อนข้างง่ายดายเพราะไม่น่าจะมีคนอยู่หลังเวลาปิดร้าน แต่พนักงานทำความสะอาดที่ยังไม่กลับคว้าตัวจูลี่เอาไว้ตอนเธอเดินเข้าไปใกล้ เมื่อได้ยินเสียงร้องอู้อี้ ความรู้สึกพุ่งพล่านอันดำมืดก็พลันเข้าครอบงำแฟรงค์ เขารีบรุดเข้าไปช่วยจูลี่พร้อมกับมีดที่อยู่ในมือ แล้วปักมันลงบนแผ่นหลังของพนักงานทำความสะอาดผู้นั้นอย่างไร้ความลังเล<br><br>ขณะที่ทุกคนจ้องมองแฟรงค์อย่างตื่นตระหนกนั้น เขาก็สั่งให้ทั้งสามจัดการให้เรียบร้อย โจอี้กัดฟันแน่น คว้ามีดขึ้นมาแล้วแทงชายที่กำลังเลือดอาบอยู่เข้าตรงซี่โครง ส่วนซูซี่ไม่ต้องการทำอย่างนั้น แฟรงค์จึงแผดเสียงใส่เธอว่าทุกคนต้องจบเรื่องที่เริ่มกันเอาไว้ให้ได้ จูลี่หลับตาปี๋แล้วแทงหน้าอกชายคนนั้นก่อนจะยื่นมีดเปียกชุ่มให้กับซูซี่ ทุกคนลงเรือลำเดียวกันแล้วตอนนี้ ซูซี่จ้องจูลี่เขม็งอย่างไม่เชื่อสายตาขณะที่แฟรงค์คว้ามืออันสั่นเทาของเธอมาให้คมมีดปักลึงลงไปบนลำคอของชายผู้โชคร้าย แฟรงค์สั่งให้รีบลงมือโดยด่วน พวกเขาเช็ดถูเลือดออกจากพื้นเรียบร้อย ซ่อนร่างเอาไว้ในกระโปรงหลังรถโจอี้แล้วขับตรงไปยังเขาออร์มอนด์<br><br>ทั้งสี่กำลังขุดหิมะเปียกโชกเตรียมกำจัดศพอยู่พอดีตอนที่แฟรงค์พบว่ามีบางสิ่งขยับอยู่ในป่า เขาคว้ามีดแล้วปลีกตัวจากกลุ่มไปตรวจสอบดู สายหมอกพลันก่อตัวหนาขึ้นรอบกายแฟรงค์ หมอกนั้นหนาเสียจนทำให้เขามองไม่เห็นข้างหน้าเลยแม้แต่น้อย แฟรงค์เดินย้อนกลับตามทางเดิมก่อนจะโซเซไปบนเส้นทางอันน่าขนลุก ระหว่างนั้น จูลี่ ซูซี่ และโจอี้ขุดหลุมกันเสร็จเรียบร้อยแล้ว แต่แฟรงค์กลับหายตัวไปอย่างไร้วี่แวว จูลี่สังเกตเห็นรอยเท้าเขาบนหิมะ ทั้งสามจึงออกตามรอยที่นำพวกเขาตรงลึกเข้าไปในป่ายิ่งกว่าเดิม เมื่อทั้งจูลี่ ซูซี่ และโจอี้ไม่ได้กลับบ้านคืนนั้น พ่อแม่จึงพากันคิดว่าทั้งสามหนีตามแฟรงค์ไปแล้ว ต่างบ้านก็ต่างคาดเดาเรื่องราวกันไปมากมาย แต่แล้วอารมณ์ของชาวเมืองก็ต้องแปรเปลี่ยนเมื่อมีการพบศพหนึ่งบริเวณกระท่อมร้างบนเขาออร์มอนด์","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"เมื่ออายุได้ห้าขวบ อะดิริสซึ่งเป็นน้องเล็กจากครอบครัวที่มีเจ็ดคนถูกทิ้งเอาไว้บนธรณีประตูสีแดงอิฐอันร้อนผ่าวของวิหารแห่งการชำระมลทินใจกลางกรุงบาบิโลน เพื่อรับมือกับความโศกเศร้าและสะเทือนใจ เธอจึงยึดมั่นอยู่กับความเชื่อว่าทวยเทพมีแผนการสำหรับเธอ ชีวิตใหม่ของอะดิริสคือการเป็นข้ารับใช้ผู้สงบเสงี่ยม เธอมีหน้าที่ดูแลสวน จัดเตรียมอาหารสำหรับพิธีกรรมและขัดเงากระถางธูปที่ใช้ในพิธี เมื่อถึงเวลากลางคืน อะดิริสจะสวดภาวนาขอสัญญาณที่จะเปิดเผยเป้าหมายในชีวิตของเธอ<br><br>เมื่อถึงวัยอันสมควร อะดิริสได้เข้ารับใช้นักบวชชั้นสูงในการบวงสรวงประจำปีแก่แพะทะเลผู้เป็นเทพเจ้าแห่งน้ำและการสร้างสรรค์ ระหว่างแกว่งกระถางธูปอยู่ด้านล่างโถงเสา เธอได้ปล่อยควันดำโขมงไปถึงเสาหินอันเย็นเฉียบที่ตั้งตระหง่านอยู่ก่อนค่อยๆ จางลง ความกังวลที่อะดิริสมีอยู่พลันมลายไป และความปิติที่เกิดขึ้นก็ทำให้เธอรู้สึกใกล้ชิดกับทวยเทพยิ่งกว่าครั้งใด อะดิริสทำงานหนักทุกวันหลังจากนั้น ทำหน้าที่ทุกอย่างและยังรับหน้าที่ใหม่เพิ่ม พร้อมกับคอยช่วยเหลือเหล่านักบวชในระหว่างพิธีกรรมชำระมลทิน<br><br>เหล่านักบวชต้องการความช่วยเหลือมากขึ้นทุกที มีการชำระล้างอยู่ทุกวันเพื่อตอบสนองความต้องการของผู้คนภายนอกกำแพงวิหารอันสูงตระหง่านที่โรคระบาดอันเป็นหายนะได้แพร่กระจายขึ้นมาอีกครั้ง ในเวลาไม่กี่เดือน เหล่านักบวชก็ได้ติดโรคร้ายมา ไม่นานนักพวกเขาก็อ่อนแอจนเกินกว่าจะประกอบพิธีกรรมใดๆ ได้อีก อะดิริสที่เคยช่วยในพิธีกรรมล้างมลทินมามากมายจึงเป็นผู้เดียวที่สามารถประกอบพิธีต่อไปได้ ความตื่นตระหนกที่กำลังก่อตัวขึ้นจึงถูกยับยั้งเอาไว้แม้จะเป็นฝีมือของนักบวชฝึกหัดก็ตาม<br><br>ด้วยความตื่นเต้นก่อนพิธีกรรมแรกของเธอ อะดิริสจึงเข้าไปในห้องศักดิ์สิทธิ์ของเหล่านักบวช เมื่อจุดเทียนเธอได้สังเกตเห็นช่องเปิดแคบๆ อยู่ด้านหลัง พอลอดผ่านเข้าไปก็พบกับห้องใต้ดินที่ว่างเปล่า มีเพียงรูปหล่อทองคำของหญิงสาวผู้กำลังยืนพร้อมกับเอื้อมมืออยู่ ตามนิ้วมือของรูปหล่อประดับไปด้วยอัญมณี นี่แหละสัญญาณที่อะดิริสรอคอยมาตลอด<br><br>โถงใหญ่เต็มไปด้วยสาวกที่คอยคำนับเมื่ออะดิริสเดินเข้ามา เธอก้าวไปยังแท่นบูชาหินแล้วหยิบกริชพิธีกรรมที่ทำจากเงิน นิ้วมือที่เต็มไปด้วยแหวนทับทิมของอะดิริสโอบรอบกริชเอาไว้ราวกับกรงเล็บ การเปิดตัวอย่างหรูหราทำให้เหล่าสาวกต้องแปลกใจในความงดงามและเยาว์วัยของเธอ<br><br>เมื่ออะดิริสเริ่มสวดร่ายมหากาพย์แห่งการสร้างโลก หญิงคนหนึ่งที่ยืนอยู่ทางด้านหลังก็เป็นลมล้มพับลง เธอรีบพุ่งตรงไปหาหญิงคนนั้นและพบว่ามีตุ่มพุพองขึ้นเต็มเท้า อะดิริสคว้ามีดศักดิ์สิทธิ์มาตัดนิ้วเท้าของตนโดยไม่รอช้า เธอถวายชิ้นส่วนที่เปื้อนเลือดนั้นแด่ทวยเทพ ขอให้หญิงคนนั้นได้รับการคุ้มครอง ความเงียบงันแผ่ไปทั่วเหล่าสาวกที่ยกย่องอะดิริสเป็นนักบวชหญิงคนใหม่ของตน<br><br>เรื่องเล่าขานถึงความมั่งคั่ง ความงดงามและการอุทิศตัวเริ่มกระจายไปทั่วทั้งเมืองอย่างรวดเร็วราวกับเป็นโรค ไม่นานนัก สาวกของอะดิริสก็เรียกเธอว่านักบวชหญิงสูงสุดแห่งบาบิโลน<br><br>แต่ชะตากรรมของเธอถูกตัดสินแล้วเมื่อพบว่าตนมีอาการของการติดเชื้อ ไอของเธอเป็นเสมหะผสมเลือด เกิดฝีที่คอ และนิ้วเท้าอีกสี่นิ้วที่เหลืออยู่ก็คล้ำลง ด้วยความอับอายในอาการเหล่านี้ อะดิริสจึงเริ่มคลุมศีรษะแล้วถือกระถางธูปที่กลบกลิ่นเหม็นเน่าของตนไปได้ ด้วยความหวังว่าจะมีทางรักษา เธอยังคงประกอบพิธีกรรม จ่ายน้ำมนต์และอาหารให้กับสาวกอยู่เช่นเดิม<br><br>แต่ก็ไม่มีพิธีกรรมใดที่จะช่วยเธอเอาไว้ได้อีกแล้ว ด้วยความสิ้นหวังในการพยายามอ้อนวอนต่อทวยเทพ อะดิริสจึงเนรเทศตนเองออกจากเมือง เธอออกเดินทางพร้อมกับสาวกจำนวนหนึ่ง ผจญผ่านป่าอันหนาวเหน็บแห่งอูราชตูจนกระทั่งไม่สามารถเดินได้อีกต่อไป<br><br>พวกเขาตั้งค่ายพักแรมกันในถ้ำอันเปียกชื้น ที่อะดิริสนอนในกองอาเจียน เท้าของเธอที่เปลี่ยนเป็นสีดำคล้ำก็บวมเป่งจนไม่อาจไปไกลกว่านี้ได้อีก เธอกับเหล่าสาวกพบกับความจริงแท้ในถ้ำนั้นเมื่อทุกคนติดโรคระบาดนี้มากันหมด<br><br>อะดิริสคุกเข่าพร้อมกับสาวกแล้วสวดวิงวอนเป็นครั้งสุดท้าย ควันธูปสีดำลอยขึ้นสู่อากาศเปียกชื้นแล้วสลายไปในสายลม<br><br>ไม่มีใครพบศพของอะดิริสหรือสาวกอีกเลย หลายคนบอกเล่าเรื่องราวการกลับมาของเธอ แต่ก็ไม่มีผู้ใดที่จะร่วงรู้ความจริงว่าเกิดอะไรขึ้นกับชะตากรรมของนักบวชหญิงสูงสุดแห่งบาบิโลนคนนี้","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"แดนนี่ จอห์นสัน หรือที่หลายคนรู้จักกันในชื่อเจด โอลเซน หยิบหนังสือพิมพ์บนโต๊ะในห้องครัวขึ้น ซึ่งฉบับนี้ตีพิมพ์ออกมาตั้งแต่สัปดาห์ก่อนแล้ว มีภาพหยาบๆ และใบหน้าซูบตอบของตนเองปรากฏบนหน้าหนึ่ง ขณะนั้นเป็นช่วงเวลายามบ่ายอันร้อนอบอ้าวในรัฐฟลอริดา ที่ทั้งความร้อนและความชื้นแทรกผ่านทุกอณูห้องครัว ทำให้เหงื่อออกได้แม้ขณะยืนอยู่เฉยๆ เขาทิ้งตัวลงบนเก้าอี้ชื้นแฉะแล้วเริ่มอ่าน ขอให้ข่าวคอลัมน์นี้ออกมาดีด้วยเถอะ ผลงานของเขาที่โรสวิลล์โดดเด่นขนาดนี้แล้ว<br><br><i><b>โกสต์เฟสหายตัวไป</b><br><br>18 มิถุนายน 1993<br><br>เมื่อแรกพบนั้น เจด โอลเซนเป็นฟรีแลนซ์ผู้กระตือรือร้นแต่ก็สุภาพถ่อมตน และยังมีประสบการณ์การทำงานกับหนังสือพิมพ์ขนาดเล็กมาแล้วมากมาย เพื่อนร่วมงานที่โรสวิลล์กาแซ็ตต่างชื่นชมในความสบายๆ และดูจริงใจของเขา ซึ่งกระทั่งระหว่างที่ให้สัมภาษณ์เข้าทำงาน เจดก็สนิทสนมกับทุกคนได้รวดเร็วในเวลาไม่ถึง 5 นาทีเสียด้วยซ้ำ<br><br>“พอเข้ามาในห้อง เจดสังเกตเห็นหัวหน้าบก.ได้อย่างรวดเร็ว เขาโปรยยิ้มพร้อมจับมือทักทายกันอย่างหนักแน่นก่อนพูดคุยถึงเรื่องค่านิยมที่ดีงามของชาวอเมริกัน แค่นั้นแหละ เขาก็ได้เข้ามาทำงานแล้ว” -อดีตนักข่าวหนังสือพิมพ์โรสวิลล์กาแซ็ต<br><br>เจดไม่เคยหาข้ออ้างให้กับสายอาชีพที่ดูไม่ค่อยแน่นอนของตน ที่ทำให้ต้องเดินทางย้ายที่อยู่ไปมาบ่อยครั้งตั้งแต่รัฐยูทาห์ไปจนถึงเพนซิลเวเนีย ไม่พบเอกสารยืนยันการทำงานที่เก่าของเจดเลยแม้แต่น้อย แต่ด้วยประวัติการทำงานอันน่าเชื่อถือและทัศนคติที่ดี อีกทั้งทางสำนักพิมพ์เองก็ต้องการนักข่าวโดยด่วนเช่นกัน <br><br><b>คดีฆาตกรรมโรสวิลล์</b><br><br> โอลเซนทำงานหนังสือพิมพ์ได้ราวห้าเดือนเมื่อคดีฆาตกรรมโรสวิลล์เริ่มต้นขึ้น มีเหยื่อผู้เคราะห์ร้ายทุกช่วงวัยทั้งคนหนุ่มสาวและผู้สูงอายุถูกกระหน่ำแทงจนถึงแก่ชีวิตในบ้านของตน รายงานระบุว่าฆาตกรเลือกเหยื่อขึ้นมาแบบสุ่ม และยังรู้ทางหนีทีไล่ในละแวกนี้เป็นอย่างดี แผลถูกแทงหลายตำแหน่งบ่งบอกถึงมูลเหตุจูงใจส่วนบุคคล ไม่พบร่องรอยของคราบดีเอ็นเอ ตำรวจท้องถิ่นถึงกับงุนงงรูปคดีที่การฆาตกรรมเกิดขึ้นราวกับบันดาลโทสะ แต่ก็มีการวางแผนเอาไว้ล่วงหน้าอย่างเลือดเย็น<br><br>ฆาตกรรายนี้ชอบสะกดรอยตามเป้าหมายของตนด้วย เหยื่อผู้เคราะห์ร้ายสองคนเคยรายงานต่อเจ้าหน้าที่เรื่องมีเงาตะคุ่มเดินตามระหว่างทางกลับบ้านเพียงไม่กี่วันก่อนเสียชีวิต ฆาตกรอาจติดตามผู้เคราะห์ร้ายจากออกมาจากร้านวอลอายส์ซึ่งเป็นบาร์เล็กๆ ทางตอนเหนือของเมืองโรสวิลล์ แอบถ่ายภาพเหยื่อที่อยู่ในบ้าน พร้อมกับหาทางบุกรุกเข้าไป ฆาตกรอาจคอยเฝ้าดูเหยื่อรายเดิมมานานหลายสัปดาห์จนค้นพบแบบแผนกิจวัตรประจำวันอย่างละเอียด เมื่อเกิดความกระหายเลือดขึ้นมาเมื่อไหร่ ฆาตกรจะเลือกเยี่ยมเยียนเหยื่อที่เปิดช่องให้โจมตีมากที่สุดแล้วย่องเข้าไปในตัวบ้านอย่างเงียบเชียบ<br><br>นักข่าวทุกคนต่างตามติดคดีฆาตกรรมโรสวิลล์ ซึ่งส่วนใหญ่โอลเซนจะถูกส่งตัวไปสัมภาษณ์ครอบครัวของผู้เคราะห์ร้าย พร้อมทั้งแจ้งความคืบหน้าจากเจ้าหน้าที่ตำรวจให้ครอบครัวได้รับทราบ และเนื่องจากยังไม่มีใครที่รู้ความจริงในขณะนั้น การมีส่วนได้ส่วนเสียกับรูปคดีของเขาจึงเป็นการเพิ่มจำนวนศพขึ้นมาอีก<br><br><b>เดอะโกสต์เฟส</b><br><br>เมืองโรสวิลล์ตกอยู่ในความหวาดผวาครั้งใหญ่เมื่อโอลเซนเผยแพร่คลิปบุคคลน่าสงสัยสวมผ้าคลุมกำลังบุกรุกบ้านในยามวิกาล ใบหน้าที่สวมหน้ากากขาวดูเลือนรางในความมืดมิดจ้องเขม็งมาที่กล้องอยู่ชั่ววินาทีก่อนเข้าบ้านแล้วอันตรธานไป “กล้องถ่ายติดโกสต์เฟส” คือพาดหัวข่าวของวันรุ่งขึ้นโดยที่มีโอลเซนเป็นผู้เขียน เขาดูภูมิอกภูมิใจในผลงานครั้งนั้นมาก และยังดูบันเทิงใจกับการได้เห็นเมืองทั้งเมืองต้องตื่นตระหนกเพราะเรื่องขวัญผวาของตน<br><br>สัปดาห์ถัดจากนั้นมา โอลเซนได้เขียนข้อความสั้นๆ ทิ้งไว้บนโต๊ะทำงานก่อนที่จะหายสาบสูญไปว่า<br><br>“หวังว่าทุกคนจะชอบเรื่องราวของผมนะ ผมสนุกมากเลยตอนที่ได้ทำให้เรื่องสยองพวกนี้กลายเป็นความจริงขึ้นมา แต่ไม่ต้องห่วงหรอก งานของผมยังไม่สำเร็จ” -เจด โอลเซน<br><br>เจ้าหน้าที่ในเมืองโรสวิลล์ต่างปฏิเสธไม่แสดงความคิดเห็นใดๆ ในขณะที่เจด โอลเซนยังคงลอยนวล</i><br><br>แดนนี่ยิ้มร่าพร้อมฉีกคอลัมน์ข่าวนี้ออกจากหนังสือพิมพ์ เมื่อการสืบสวนเริ่มที่จะมุ่งเป้ามาทางตัวเขา แดนนี่ก็ได้เก็บกระเป๋าแล้วจากโรสวิลล์ไปอย่างรวดเร็ว<br><br>แดนนี่ลุกขึ้นมา เนื้อตัวติดบนที่นั่งเหนียวเหนอะหนะ ความชื้นน่าอึดอัดเอ่อท้นเมื่อเข้าห้องนอน ไอน้ำควบแน่นแล้วไหลหยดลงบนหน้าต่างที่มีฝ้าขึ้นบานเล็กๆ ภาพติดผนังที่แตกร้าวห้อยอยู่โตงเตง ลวดลายดอกไม้มีภาพชวนสยองกับพาดหัวข่าวสำคัญปิดทับเอาไว้ แดนนี่ปักคอลัมน์ข่าวของสัปดาห์ก่อนเอาไว้เหนือภาพคนหนังศีรษะเปิด ความหิวโหยทำเขาเกิดอาการเจ็บแปลบเบาๆ และเริ่มสงสัยว่าตัวเองกินอะไรไปครั้งสุดท้ายตั้งแต่เมื่อไหร่ ใช่เมื่อเช้านี้ตอนล้างมีดกับซักเสื้อผ้าหรือเปล่า? หรือจะเป็นเมื่อคืนหลังแอบเดินตามแม่สาวคนนั้นไป? แดนนี่จำไม่ค่อยได้เท่าใดนัก<br><br>เขาก้าวถอยหลังไปแล้วชื่นชมผลงานบนผนังห้องของตน จิตใจเริ่มล่องลอยนึกถึงคอลัมน์ทั้งหมดที่เคยเขียน เรื่องราวที่วางแผนเอาไว้ และจุดที่เขาได้ทำให้เรื่องราวนั้นเป็นความจริงขึ้นมา<br><br>ความรู้สึกเสียววาบแล่นผ่านร่างแดนนี่ไป สายลมเย็นยะเยือกเปลี่ยนความชื้นในห้องนอนให้กลายเป็นสายหมอกหนาทึบที่หนาวจัด เสียงผู้หญิงกรีดร้องลั่นดังขึ้น เสียงใบไม้แห้งดังกรอบแกรบอยู่ใต้ฝ่าเท้าของเขา<br><br>แดนนี่ฉีกยิ้มขึ้นอย่างมีความคาดหวัง ","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"ใบหน้าอันมีปากเปิดกว้างเต็มไปด้วยเขี้ยวแหลมราวกับเข็ม กรงเล็บโค้งคมกริบขนาดมหึมา และท่อนขาอันทรงพลังสำหรับกระโจนเข้าตะครุบเหยื่อผู้โชคร้าย สิ่งเหล่านี้ล้วนทำให้อสูรเดโมกอร์กอนเป็นสัตว์ประหลาดอันน่าสะพรึงถ้าต้องพบเจอไม่ว่าอยู่ในมิติใด เป็นความบ้าคลั่งอันอำมหิตเกินควบคุมที่หลุดมาจากฝันร้าย เมื่อมันไล่ล่าเหยื่อแล้วฉีกเป็นชิ้นๆ ก่อนสวาปามชิ้นส่วนเลือดเนื้อทั้งหมดไปจนไม่เหลือแม้แต่ซาก เจ้าสัตว์ร้ายนี้ไร้สิ้นซึ่งสำนึกแห่งความสงสารหรือการยับยั้งชั่งใจ ขณะปรากฏกายเหนือเหยื่อนั้น มันไม่มีแม้กระทั่งความปรานีหรือความนิ่งนอนใจเลยแม้แต่น้อย มีเพียงสัญชาตญาณดิบแห่งความกระหายเลือดอันไม่มีวันพอเมื่อมันจบชีวิตของผู้โชคร้ายลง นักล่าผู้สมบูรณ์แบบ อสูรเดโมกอร์กอนเป็นสิ่งพิสูจน์ถึงความน่าสยดสยองที่คอยคืบคลานอยู่ในโลกกลับด้าน และนั่นเองที่เป็นเหตุผลให้เอนทิตีได้เลือกสรรมันมา","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"เพียงแค่การให้เกียรติแก่ชื่อเสียงวงศ์ตระกูลนั้นยังไม่พอสำหรับยามาโอกะ คะซัน เขาต้องการเป็นที่นับหน้าถือตายิ่งกว่าบิดาและอยากยุติสิ่งที่ตนเห็นว่าเป็นความเสื่อมของวิถีซามูไร ซึ่งก็คือพวกชาวนาที่แสร้งทำตัวประหนึ่งซามูไร บิดาพยายามทำให้คะซันหันไปสนใจเรื่องอื่นที่ดีกว่า แต่เขาก็ไม่ใคร่ใส่ใจคำแนะนำนั้น และหลังจากหยิบยืมคาตานะของบิดา คะซันก็ได้ออกเดินทางเพื่อพิสูจน์ตนพร้อมกำจัดเหล่าคนลวงให้สิ้นไปจากแผ่นดินญี่ปุ่น เขาละทิ้งกฎเกณฑ์ทั้งปวงที่เคยถูกพร่ำสอนแล้วไล่จัดการกับพวกโป้ปดไปทั่วทุกหนทุกแห่งตามป่าเขาลำเนาไพร คะซันสังหารคนเหล่านั้นอย่างเหี้ยมโหดและเลือดเย็น หยามเหยียดชาวไร่ไม่ต่างอันใดกับที่ทำต่อนักรบ ทั้งตัดผมจุกแล้วชิงเอาเกราะไป ความเคียดแค้น ความกระหายเลือด และความรักศักดิ์ศรีอันแสนวิปริตของเขานั้นไม่เคยพอ นักบวชต่างสาปส่งคะซันโดยเชื่อว่าเขาถูกสิ่งเหนือธรรมชาติที่ชั่วร้ายเข้าสิง ในขณะที่บรรดาขุนนางเริ่มขนานนามเขาว่าซามูไรคลั่ง “โอนิยามาโอกะ” ซึ่งถือเป็นการหยามเกียรติต่อทั้งต่อวงศ์ตระกูลและต่อตัวคะซันเอง<br><br>ด้วยความแน่วแน่ที่จะกอบกู้ชื่อเสียงของวงศ์ตระกูล คะซันจึงสังหารผู้ใดก็ตามที่บังอาจเรียกตนว่าโอนิยามาโอกะ คำดูถูกนั้นทำให้เขาฉงนใจยิ่งนัก เขาพิชิตยอดฝีมือพร้อมชำระมลทินให้กับชนชั้นซามูไรด้วยการกวาดล้างเหล่าคนลวงจนสิ้นแผ่นดิน แล้วเหตุใดผู้คนถึงต้องเรียกขานตนว่าเป็นยักษ์มารด้วย? เป็นเพราะเขาเข้าฟาดฟันนักรบอำมหิตบนสมรภูมิเช่นนั้นหรือ? เป็นเพราะเขาใช้กระบองคานะโบบดขยี้ศีรษะผู้คนนับร้อยเช่นนั้นหรือ? หรือเป็นเพราะเขาเก็บเอา “ของที่ระลึก” ไปจากเหยื่อทุกครั้งกันแน่? จะด้วยเหตุใดก็ไม่สลักสำคัญ แต่การถูกขนานนามว่ายักษานั้นเป็นสิ่งที่เหลือทน อีกทั้งเสียงชั่วร้ายในหัวก็ยังยุยงให้เขาออกไปกำราบขุนนางผู้ทำให้นามของตนต้องมัวหมอง<br><br>ขณะเดินทางสู่เมืองของขุนนางนั้น คะซันก็ได้เผชิญหน้ากับซามูไรผู้หนึ่งซึ่งยืนขวางอยู่บนทางลูกรัง เขากำกระบองคานะโบเอาไว้พร้อม ทันใดนั้น ซามูไรก็พลันพุ่งเข้าจู่โจมอย่างไม่ให้ซุ่มให้เสียงพร้อมชิงจังหวะการต่อสู้ไปได้อย่างรวดเร็ว แต่แล้วก็กลับดูลังเลใจ คะซันจึงฟาดไปที่ศีรษะของซามูไรผู้นั้นอย่างรุนแรงจนหมวกเกราะแตกออก เมื่อย่างเท้าเข้าหาซามูไรที่พ่ายแพ้ คะซันก็พบกับใบหน้าของผู้เป็นบิดาและได้หยุดชะงักลง บิดาของคะซันจ้องมองตัวเขาด้วยความละอายและความผิดหวังเคล้าระคนกันไปก่อนที่จะสิ้นลม คะซันหลับตาแล้วกรีดร้องโหยหวนด้วยความทุกข์ใจจนกระทั่งสิ้นเสียง เมื่อลืมตาขึ้นมาอีกครั้ง... ร่างของบิดาก็หายไปแล้ว นอกจากจะเป็นผู้กระทำปิตุฆาต เขายังปล่อยให้โจรชิงเอาร่างบิดาไปเพื่อขโมยชุดเกราะเสียอีก<br><br>ด้วยความขมขื่นและท้อแท้สิ้นหวัง คะซันจึงเที่ยวพเนจรไปทั่วแผ่นดินอย่างไร้จุดหมาย เสียงบิดาดังแว่วอยู่ในโสตประสาท คอยกล่าวเย้ยหยัน คอยตอกย้ำถึงความล้มเหลวของตน ทำให้คะซันออกอาละวาดด้วยความโกรธเกรี้ยว วันหนึ่งขณะที่เดินเตร่อยู่ในป่า คะซันก็พลันพบกับรูปปั้นโอนิเข้าโดยบังเอิญ เขายืนหยุดนิ่งอยู่นานสองนาน รูปปั้นโทรมๆ มีวัชพืชขึ้นเต็มนี้ดูราวกับกำลังเย้ยหยันและกล่าวหาว่าเขานั้นก็ไม่ต่างอะไรกับซามูไรลวงโลกที่คิดมุ่งหวังจะทำลาย คะซันสั่นศีรษะให้เสียงหัวเราะหายไป พลันนึกขึ้นได้ถึงเรื่องขุนนางที่เคยกล่าวสบประมาทตนเอาไว้ว่า “โอนิยามาโอกะ”<br><br>ด้วยความเคียดแค้นครั้งใหม่ คะซันได้เดินทางมาจนถึงเมืองหนึ่งซึ่งตั้งอยู่ท่ามกลางหุบเขาสูงและมีหิมะโปรยปราย อันเป็นเมืองที่ขุนนางผู้นั้นพำนักอาศัย ซามูไรนับสิบพบตัวคะซันอยู่หน้าประตูเมือง และซามูไรทั้งสิบนั้นก็ได้พ่ายให้กับกระบองคานะโบของคะซันเสียหมดสิ้น ทั้งความรวดเร็วและพละกำลังของเขานั้นไร้เทียมทาน ความเกรี้ยวกราดของเขานั้นยากเกินความเข้าใจ คะซันต่อสู้บุกฝ่าเข้าสู่ตัวเมืองจนกายอาบไปด้วยเลือดต่างน้ำ และได้พบกับขุนนางผู้กำลังหลบซ่อนอยู่ในเรือนพักในที่สุด เขาลากตัวขุนนางออกมาจากห้อง จับกรีดเส้นเอ็นทิ้งเพื่อให้ขยับเขยื้อนไม่ได้ แล้วเฝ้ามองดูขุนนางผู้นั้นดิ้นพราดๆ พลางร้องขอชีวิตราวกับสุนัขก็ไม่ปาน คะซันสวนหมัดเข้าไปในปากของขุนนางอย่างปราศจากความลังเลใจ จากนั้นจึงกระชากลิ้นสามหาวที่เคยใช้กล่าววาจาหยามหมิ่นนามของตนออกมา<br><br>เมื่อเป็นที่สาแก่ใจแล้ว คะซันก็ออกจากเรือนพักมาพบกับบรรดาชาวไร่ชาวนาหลายสิบคนที่ต่างถือเคียวขึ้นสนิม คราดคมกริบ รวมถึงกระบองหนักอยู่ในมือ เขารอดจากการโจมตีสองสามครั้งแรกมาได้ แต่ผู้ปองร้ายนั้นมีจำนวนมากมายเกินไปและยังบุกเข้ามาจากทุกทิศทาง ไม่ช้านักคะซันก็ได้นอนแน่นิ่งบนผืนดิน ดวงตาจ้องมองฟ้ามืดดูเย็นชา ในขณะที่ชาวนาต่างผลัดกันรุมแทงและทรมานเจ้า “โอนิ” ผู้สังหารขุนนางอันเป็นที่รัก ฝูงชนผู้คุ้มคลั่งลากตัวคะซันเข้ามายังโรงโม่หินเล็กๆ แห่งหนึ่งเพื่อรุมประชาทัณฑ์ต่อ จนในท้ายที่สุดก็ปล่อยให้เขาตายไปอย่างช้าๆ และทรมาน เมื่อชาวไร่ชาวนากลับมาอีกครั้ง โรงโม่กลับเต็มไปด้วยสายหมอกประหลาดสีดำมืด ส่วนร่างของคะซันกับกระบองคานะโบนั้นได้หายสาบสูญไป และนี่ก็คือจุดเริ่มต้นของตำนานสยองเกี่ยวกับโอนิผู้คลั่งแค้นที่คอยหลอกหลอนชาวเมืองอยู่เรื่อยมา","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"เกิดในที่รกร้างที่เต็มไปด้วยฝุ่นของอเมริกาตะวันตก เคเล็บ ควินน์ เป็นลูกชายของผู้อพยพชาวไอริช ที่ขอบชายแดน ความเจ็บป่วย ความอดอยาก และความตายเป็นเรื่องที่ได้เห็นกันปกติ และผู้บุกเบิกก็เรียกร้องเอาของอะไรก็ตามที่สามารถเรียกร้องได้ ในขณะที่ผู้ประกอบการฉลองกัน พ่อของเคเล็บเป็นเคยเป็นวิศวกร มีตัวเลือกไม่มากนักในการแลกเปลี่ยนซื้อขายเหตุเพราะป้ายที่เขียนว่า ไม่เอาชาวไอริช เครื่องมือโบราณของเขาถูกวางทิ้งไว้โดยไม่มีใครแตะต้องมาหลายปี จนกระทั่งเคเล็บได้ไปพบเจอ เขาสังเกตว่าลูกชายของเขาสนใจเรื่องการซื้อขาย เขาจึงให้ของขวัญเป็นประแจเก่าๆ ของเขา \\n\\nอุปกรณ์ที่เคเล็บสร้างขึ้นภายใต้การแนะนำของพ่อมีการใช้งานที่แปลกตา แต่เมื่อพ่อของเขาจากไปแล้ว พวกเขาก็เปลี่ยนไปอย่างน่ากลัว เขาซ่อนแผนสำหรับหน้ากากที่ใช้เข็มแหลมทิ่มแทงเข้าไปในดวงตามนุษย์แล้วฉีกมันออกมาจากเบ้า สำเร็จด้วยภาพร่างที่เหมาะสมกับเด็กที่เคยรังแกเขา \\n\\nด้วยอายุที่มากขึ้น ความสามารถทางด้านวิศวกรรมของเคเล็บสามารถทำเงินได้และผู้จ้างก็ไม่ได้สนใจ เรื่องเชื้อชาติของเขา เฮนรี่ เบย์ชอร์ เจ้าของบริษัททางรถไฟยูไนเต็ดเวสต์ จึงได้จ้างเขาทำงาน \\n\\nเคเล็บประดิษฐ์ปืนสำหรับยิงหมุดรางรถไฟลงพื้นเป็นครั้งแรก จากนั้นเขาได้สร้างสว่านเจาะอุโมงค์พลังไอน้ำ แต่เบย์ชอร์ทำเป็นว่าไม่สนใจ แล้วอุปกรณ์ดังกล่าวก็เริ่มปรากฏที่บริษัทอื่นๆ เพราะสิทธิบัตรถูกขโมยจากเคเล็บไปขาย \\n\\nความรู้สึกที่คุ้นเคยไหลเวียนอยู่ในเลือดของเคเล็บ และมอบความเจ็บปวดอย่างแรงให้กับหัวใจของเขา แม้กระทั่งตอนนี้ เขาต่อสู้เพื่อเศษเหล็กในขณะที่คนร่ำรวยได้ประโยชน์จากมันสมองของเขา ความโกรธเกรี้ยวครอบงำให้เขาบุกเข้าไปยังสำนักงานของเบย์ชอร์ และทุบเข้าที่ใบหน้าของเขาจนจมกองเลือด ในขณะที่ลากออกมา เขาประทับปืนสุดพิเศษของเขาไปที่ท้องของหัวหน้าแล้วเหนี่ยวไก หมุดรางรถไฟพุ่งทะลุผ่านผิวหนังและอวัยภายใน ตรึงเบย์ชอร์ไว้ที่โต๊ะทำงานของเขา \\n\\nสิ่งเดียวที่ช่วยเคเล็บไว้จากการถูกแขวนคอ คือชีวิตของเบย์ชอร์ที่รอดมาได้อย่างไม่น่าเชื่อ เป็นเวลา 15 ปี ที่เคเล็บถูกคุมขังที่เรือนจำเฮลไชร์ เรือนจำเอกชนแห่งแรกของประเทศ ในป้อมปราการของนักโทษไร้การศึกษา เขาได้เจอเพื่อนเป็นผู้คุมเรือนจำอย่างไม่น่าเป็นไปได้ เขาออกแบบอุปกรณ์สำหรับการทรมาน และได้รับอาหารเพิ่มเป็นสิ่งตอบแทน หลังจากนั้นผู้คุมได้ยื่นข้อเสนอให้เขา และได้พูดถึงอะไรบางอย่างเกี่ยวกับสิ่งที่ยอดเยี่ยมไปกว่าความมั่งคั่งทางการเงิน นั่นคือ ความร่ำรวยทางการเมือง และด้วยเส้นสายของเขาสามารถทำให้เบย์ชอร์สามารถเน่าตายเป็นหนอนในกรงขังได้ตลอดกาล โดยขอเพียงอย่างเดียว นั่นคือ ทำให้เขาร่ำรวย และใช้ความฉลาดในการหาพวกโจรเข้ามาเต็มเต็มคุกนี้ทั้งที่ยังมีชีวิตอยู่ \\n\\nเคเล็บกลับไปที่ห้องทำงานของเขา ด้วยการปรับแต่งบางส่วนและของใหม่ๆ บางอย่างที่เพิ่มเข้ามา นั่นคือ ปืนฉมวก ซึ่งได้รับการทดสอบครั้งแรก เมื่อตอนที่โจรเข้าไปปล้นร้านซักรีดของคนจีน ด้วยโอกาสนี้ เคเล็บได้ทดลองใช้ต้นแบบตัวแรกของเขา ข้อต่อเหล็กขูดกันไปพร้อมกับยิงหนามแหลมไปข้างหน้า และพุ่งไปยังท้องของเป้าหมายจนทะลุ แต่เมื่อดึงหอกออกมามันก็ได้ดึงเอาลำไส้ของโจรออกมาด้วยพร้อมเสียงอันโหยหวน ซึ่งกระชากมันออกมายังถนนที่เปื้อนฝุ่น \\n\\nหลังจากแก้ไขทำซ้ำอยู่หลายครั้ง จนมันไม่รุนแรงเกินไปจนควักไส้ใครได้ ผู้คุมเรือนจำก็ได้ใช้เส้นสายปล่อยนักโทษชาวไอริชเพื่อก่อตั้งขึ้นมาเป็นแก๊งของเคเล็บ และแก๊งเฮลไชร์ก็ได้ถือกำเนิดขึ้น \\n\\nเป็นเวลา 6 ปี ที่พวกเขาได้เดินทางไปทั่วและจับโจรที่ทางการต้องการตัวเข้าคุก เพื่อให้บรรลุข้อตกลง หลังจากการต่อสู้อันนองเลือดที่เกลนเวล เคเล็บได้เจอกับพาดหัวข่าวในหนังสือพิมพ์ว่า เฮนรี่ เบย์ชอร์เข้าซื้อเรือนจำเฮลไชร์ ในรูปภาพเป็นเบย์ชอร์ที่พิการกำลังจับมือผู้คุมอย่างภูมิใจ หัวใจของเคเล็บเต้นแรงด้วยความโกรธเกรี้ยว เลือดสูบฉีดเหมือนมันพร้อมจะระเบิดออกมาจากเส้นเลือด ที่เขาถูกขายไปเหมือนเป็นตัวหมากตัวหนึ่งในเกมของคนรวย \\n\\nแก๊งเฮลไชร์อุทิศความภักดีของพวกเขาให้กับเคเล็บและเรียกร้องหัวของผู้คุม ด้วยการควบม้าอย่างรวดเร็ว พวกเขาทุบทำลายผ่านทางเข้าเรือนจำ และส่งเสียงเหมือนดั่งโจรกระหายเลือด เจ้าหน้าที่รักษาความปลอดภัยได้ยกปืนพกขึ้นมาแต่เพราะลังเล จึงได้ถูกฉมวกเจาะเข้าไปยังหน้าอกของเขา เคเล็บจับหัวของชายคนนั้น แล้วกระแทกไปที่ลูกกรงเรือนจำจนกระทั่งมันทะลุลูกกรงออกมา \\n\\nเมื่อไปถึงสำนักงานของผู้คุม เคเล็บถีบประตูและไม่เพียงแต่ได้เจอกับผู้คุมเรือนจำเท่านั้น หากแต่ได้เจอเฮนรี่ เบย์ชอร์ด้วย ด้วยความทรงพลังจากความโกรธแค้น เคเล็บพุ่งปรี่ไปที่เบย์ชอร์ ทุบด้วยกระบอง ฉีกกระชากร่างกายของเขา เลือดของเบย์ชอร์หยดลงมาจากใบหน้าของเขา และไหลนองเต็มเท้าของเขา แก๊งเฮลไชร์ได้เข้าไปรุมเตะผู้คุมจนกระดูกหักเป็นเสี่ยง \\n\\nชาย 2 คนที่บาดเจ็บและร้องขอความตาย เหล่าแก๊งได้ลากพวกเขาไปทิ้งไว้กับฝูงนักโทษ \\n\\nเคเล็บชุ่มโชกไปด้วยเหงื่อและเลือด เดินโซซัดโซเซไปยังกรงขังของเขา และไม่ได้สนใจเสียงกรีดร้องของเบย์ชอร์ เขานั่งลงบนขอบเตียงและมีเลือดไหลออกมาจากปลายนิ้ว กลุ่มหมอกหนาทะลุผ่านซี่กรงหน้าต่าง เขาดึงประแจเก่าขึ้นสนิมออกมา และถูนิ้วหัวแม่มือไปตามโลหะ จ้องมองด้วยสายตาที่เลื่อนลอย เขาจำไม่ได้ว่าตั้งแต่เมื่อไหร่ที่มันมาอยู่ในการครอบครองของเขา เขาไม่ได้สนใจที่จะจำด้วย ที่เท้าของเขา เขามองเห็นทางที่เต็มไปด้วยฝุ่น และปลายทางนั้นเอง เขาได้เห็นภาพเงาของทุกคนที่ทำผิดต่อเขา นั่นคือเหล่าเด็กที่เคยรังแกเขา ผู้บริหารที่เคยเอารัดเอาเปรียบเขา และอีกครั้ง... เฮนรี่ เบย์ชอร์ สิ่งที่โผล่มาจากหมอกนั่นคืออุปกรณ์ที่ใช้กำจัดพวกเขา ตะขอเหล็กแก้แค้นที่ยอดเยี่ยมและสวยงามในความเรียบง่ายของมัน ความเจ็บปวดฉีกผ่านขาของเขาในขณะที่ยืนขึ้น แต่เขาอดทน ดันตัวไปข้างหน้า เดินผ่านทางที่เต็มไปด้วยฝุ่นและเหลือทิ้งไว้แต่เพียงรอยเลือดไว้เบื้องหลัง ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"เพชฌฆาตไร้ปรานีและพึงพอใจที่ได้ทำร้ายผู้อื่น พีระมิดเฮดตกติดอยู่กับการลงทัณฑ์ผ่านความเจ็บปวด ด้วยแรงถ่วงของกรอบเหล็กบนหัวและมีดยักษ์เล่มเทอะทะที่ลากรูดไปกับพื้น พีระมิดเฮดย่องย่างไปตามทางเดินในไซเลนต์ฮิล ปฏิบัติหน้าที่ที่ไม่มีผู้ใดเข้าใจถ่องแท้ ยามเหยียบย่างไปที่ใด แม้แต่สัตว์ประหลาดยังต้องหนีไปหลบในเงามืด และใครที่ท้าทายเขาก็ต้องตกเป็นเหยื่อของการลงมืออันเกรี้ยวกราดอย่างปราศจากการยั้งมือ เมื่อทำหน้าที่เสร็จสิ้นและการดำรงอยู่ของเขาไม่ใช่สิ่งจำเป็นอีกต่อไป พีระมิดก็เตรียมตัวจะเข้าสู่การพักผ่อนอันยาวนาน ทว่า ทักษะของเขากลับเป็นที่ต้องการในแห่งหนอื่น ธารหมอกที่ไหลบ่าท่วมถมนั้นต่างจากที่เขาคุ้ยเคยในไซเลนต์ฮิล ราวกับแต่ละกลุ่มก้อนนั้นมีพลังงานของสิ่งมีชีวิตอยู่ภายใน พลังงานอันบิดเบี้ยวที่จงเจาะเสาะหาเขา และข้อตกลงอันไร้ถ้อยคำก็เกิดขึ้นในห้วงขณะนั้นเอง เมฆก้อนยักษ์นั้นคือคำเชิญให้ไปทำหน้าที่และหาความสุขจากความรุนแรง และพีระมิดเฮดผู้ก้าวย่างสู่สายหมอกก็ยอมรับหน้าที่ของตนอีกครั้ง ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"ผู้ปรารถนาจะเข้าใจเงื่อนไขของมนุษย์ต้องผงาดขึ้นไปอยู่เหนือเงื่อนไขเหล่านั้น นี่คือหลักการที่ทัลบอต กริมส์ ยึดถือ เขาเป็นนักเคมีชาวสกอตผู้ปล่อยให้ความทะเยอทะยานอันไร้การควบคุมพาตัวเองขึ้นไปสูงลิ่ว ในวัยเด็ก เขาเป็นที่นิยมชมชอบของคนอื่น ด้วยทั้งสดใส เปี่ยมเสน่ห์ และไม่เกรงกลัวที่จะท้าทายอำนาจ แต่แม้จะสง่างามทางสังคมถึงเพียงนั้นเขาก็ยังเป็นอิสระอย่างร้ายกาจ ทัลบอตใช้เวลาส่วนใหญ่ไปกับการสำรวจท้องทุ่งกว้างใหญ่ไพศาลใกล้ๆ เมืองตามลำพัง สิ่งที่ตอนเริ่มต้นเป็นเพียงความสงสัยของเด็กน้อยเกือบกลายเป็นอันตรายถึงชีวิตเมื่อเขาทดลองกับดอกถุงมือจิ้งจอกมีพิษไปแปะหนึ่ง ทัลบอตนอนเหงื่อแตกซิกไปหลายวัน อาหารใดๆ ตกถึงท้องเป็นต้องอาเจียนออกมา แต่เมื่อหายดีแล้ว สิ่งที่เกากุมหัวใจของเขากลับไม่ใช่ความหวาดกลัว ทว่าเป็นความพึงพอใจ การที่ดอกไม้ดอกหนึ่งมีผลกระทบต่อเขาอย่างรุนแรงได้ถึงเพียงนั้นมีความมหัศจรรย์บางอย่างอยู่<br><br>ล่วงสู้วัยผู้ใหญ่ ความทะเยอทะยานของทัลบอตพัฒนาขึ้นอย่างรวดเร็วเช่นเดียวกับวิธีการอันน่ากังขาของเขา ทัลบอตเข้าศึกษาในวิทยาลัยแพทยศาสตร์แห่งลอนดอนและเก่งกาจกว่าใครๆ แม้จะถูกตำหนิติเตียนหลายต่อหลายครั้ง ความยินดีจะผลักขีดจำกัดตัวเองให้สูงขึ้นทำให้เขารักษาตำแหน่งในบริษัทอินเดียตะวันออกของบริเตนเอาไว้ได้ และเขาก็ขึ้นสู่ตำแหน่งหัวนักเคมีได้ภายในเจ็ดปี และในตอนนั้น ทัลบอตก็บรรลุความสำเร็จอันยิ่งใหญ่ประการหนึ่ง นั่นก็คือสารเคมีที่สามารถเพิ่มผลิตภาพของแรงงานในขณะที่ลดความต้องการพักผ่อนของพวกเขาลง เขาได้รับรางวัลเป็นห้องทดลองลับที่อยู่ใต้ค่ายกักกันบนเกาะไดเออร์<br><br>ณ ที่แห่งนั้นซึ่งอยู่นอกชายฝั่งอินเดีย ทัลบอตบังคับนักโทษจากสงครามฝิ่นเป็นตัวอย่างทดลอง อันนำมาซึ่งยาเสพติดที่ทำให้ทหารสามารถทนทานต่อความเจ็บปวดได้อย่างเหลือเชื่อ แม้ส่วนใหญ่แล้วจะมีผลข้างเคียงเพียงไม่รุนแรง แต่ก็ลือกันว่ามีทหารจำนวนเล็กน้อยที่เป็นบ้าไป เมื่ออยู่ในสภาวะดุร้าย พวกเขาสังหารคนทั้งหมู่บ้าน แทงประชาชนด้วยดาบปลายปืนแล้วแขวนทิ้งไว้กับต้นไม้ ไม่มีรายงานอย่างเป็นทางการถึงตัวอย่างทดลอง และทัลบอตเองก็ปฏิเสธไม่ยอมรับว่าเป็นความผิดของตัวเองในสิ่งที่อาจเป็นเรื่องเล่าเกินจริงของสงคราม<br><br>แม้ความปราดเปรื่องอันไร้หัวใจของเขานั้นจะแม่นมั่นไม่สั่นคลอน ทัลบอตก็ไม่ได้ตระหนักถึงเหล่าศัตรูที่ผลงานอันน่าสงสัยของเขาไปรวบรวมเข้าด้วยกันไว้ ความตระหนักรู้ได้ฟาดเขาเข้าให้ ฟาดเขาในแบบฟาดจริงๆ ด้วยท่อเหล็กที่ซัดเข้าท้ายทอยระหว่างเดินทางไปมังกาลอร์ เขาถูกมัดแล้วยัดเข้าไปในตู้สินค้า เมื่อเอาผ้าปิดตาออก ชายน่าเกลียดก็ให้เขาดูสุสานมหึมาที่เต็มไปด้วยซากศพ ทัลบอตไม่เคยรู้เรื่องเลยว่ายาเพิ่มผลิตภาพของเขานั้นฆ่าคนไปเกือบทั้งโรงงาน เขารู้ดีว่าไม่อาจปกป้องตัวเองจากความโกรธขึ้งและข้อกล่าวหาของผู้ที่ลักพาตัวเขามาได้ ที่เขาทำได้มีเพียงงอก่องอขิงเมื่อท่อเหล็กกระหน่ำลงมา ร่างของเขาถูกโยนทิ้งให้ตายในหลุมศพ ทัลบอตคลานหาทางหลบหนีอยู่ท่ามกลางความมีสติและความมืดมิดไม่รู้เนื้อตัวที่สลับกันไปมา นิ้วมือของเขาจมลงไปในเนื้อเน่าๆ แมลงวันสีดำสำราญเลี้ยงกันบนผิวหนังอันไร้การปกคลุมของเขา รู้สึกราวเข็มร้อยพันทิ่มแทง ทัลบอตทรุดลง หน้าของเขาประชิดกับใบหน้าของซากศพหญิงสาวที่ดวงตาสีน้ำตาลอ่อนเบิกโพลง อ่อนแรงเกินกว่าจะผลักออก เขาไม่อาจทำอะไรได้นอกจากเป็นประจักษ์พยานแก่ผลงานชิ้นสำคัญในชีวิตของตัวเอง<br><br>ต่อมา เขาถูกพากลับมาจากปากเหวของความตาย ทัลบอตพบตัวเองนอนอยู่บนเตียงเล็กๆ โดยมีใบหน้าเหี่ยวย่นใจดีคอยดูแล เจ็บปวดไปในทุกลมหายใจเข้าออก เขาได้รับการรักษาพยาบาลจนกลับมาแข็งแรงในโรงเรียนลี้ลับเก่าแก่ที่บังหน้าว่าเป็นอาราม ในสวนเขียวขจีที่อยู่เบื้องหลังกำแพงสูงตระหง่านอันอ่อนน้อม เหล่าพระศึกษาตำราต้องห้าม พยายามแผ่ขยายจิตมนุษย์เพื่อค้นหามิติอื่น ด้วยเชื่อว่าแต่ละคนนั้นจะได้เชื่อมโยงถึงกันและกัน<br><br>ความรู้ของทัลบอตได้รับการพิสูจน์ว่าเป็นสิ่งจำเป็น สารเคมีเปลี่ยนแปลงจิตใจของเขานั้นเข้ากับทฤษฎีการขยายประสาทได้อย่างราบรื่น ทัลบอตจึงตระหนักได้ว่าที่ตัวเองรอดมาได้นั้นไม่ใช่เรื่องบังเอิญ เขาถูกดึงขึ้นมาจากหลุมเพื่อพัฒนาความรู้ของสำนักแห่งนี้ เขาตกลงจะช่วยจนกว่าตัวเองจะหายดี โดยรับหน้าที่ศึกษาค้นคว้าสิ่งที่พวกพระเรียกว่าสารเคมีแห่งจิตวิญญาณ อันเป็นสารประกอบที่ขับออกมาจากต่อมไพเนียลซึ่งเชื่อว่าเปิดตาจิตได้ จากสิ่งที่เริ่มต้นเป็นการช่วยเหลือผู้ที่ช่วยชีวิตตัวเอง ไม่นานก็กลายเป็นความหมกมุ่น ทัลบอตจดจ่ออยู่กับคลังเอกสารแห่งตำราอันสาบสูญของสำนักจนค้นพบสูตรวิทยาศาสตร์ที่ช่วยยืนยันความคิดอันมิอาจจินตนาการถึงได้ที่เคยคิดไว้ก่อนหน้านี้ เขาฝันถึงการนำทางมนุษยชาติไปยังยุคใหม่ของการรู้แจ้ง บางทีหลังจากนั้น ฝันร้ายถึงคนงานในโรงงานนับร้อยที่ตายไป ฝันร้ายถึงดวงตาสีน้ำตาลอ่อนคู่นั้น อาจเลือนรางจากหายจากใจเขา<br><br>เมื่อเขาใกล้ถึงการค้นพบอันยิ่งใหญ่ พฤติกรรมของพวกพระก็เปลี่ยนไป รอยยิ้มอ่อนโยนที่มีให้มาพร้อมกับสายตาไม่สบายใจที่เลียงหลบอย่างว่องไวเมื่อสบกัน บทสนทนาอย่างสุภาพที่ครั้งหนึ่งเคยมีให้กลับกลายเป็นการพึมพำงันเงียบ สิ่งสุดท้ายที่ทัลบอตได้เห็นในสำนักก็คือเพดานแตกร้าวเหนือที่นอนตัวเอง มันแตกแขนงไปตามปูนฉาบราวกิ่งก้านของเซลล์ประสาท<br><br>ความทรงจำถัดมาของเขาคือกระเบื้องหลากสีอันแตกร้าวของภาพและผัสสะ เส้นแสงที่วิ่งไปมา เกือกม้าบนพื้นกรวด ผ้าเนื้อหยาบไร้รสนิยมขูดข่วนแก้ม และแรงกัดที่งับลึกเข้าที่แขนของเขา ทัลบอตตื่นขึ้นมาอย่างมอมแมม น้ำท่าไม่ได้อาบ นอนแผ่หราอยู่บนเสื่อฟางของโรงฝิ่น หมอกหนาปกคลุมจิตใจ ความคิดแรกของเขาคือบันทึกของตัวเอง นั่นเป็นบันทึกเดียวที่มีถึงการเปิดเผยการค้นพบครั้งใหญ่ของเขา ทัลบอตลนลานป่ายปีนขึ้นจากห้องใต้ดินสกปรก ร้องขอความช่วยเหลือเสียงดัง ผู้พักอาศัยคนอื่นเงยหน้ามองจากเปลญวน มิหยิบยื่นสิ่งได้ให้นอกจากดวงตาเยิ้มยาและสายตาสมเพชที่กลับครึ่งหลับครึ่งตื่นอย่างรวดเร็ว ก่อนทัลบอตจะทันสังเกตว่ามีร่างในจีวรปรากฏกายขึ้นด้านหลัง เข็มก็ปักเข้าที่แขนของเขาแล้วโลกทั้งใบก็ปลาสนาการไปอีกครั้ง<br><br>ตื่นขึ้น อีกครั้ง ทุกครั้งยิ่งพร่ามัวยิ่งขึ้น เขาดันลิ้นแตะช่องโหว่ระหว่างฟัน นานแค่ไหนแล้วนะ เขาสงสัย ความทรงจำอันเลือนรางหวนคืนมา สารเคมีแห่งจิตวิญญาณ บันทึกของเขา จวนเจียนจะค้นพบครั้งใหญ่ เสียงกระซิบจากที่ไกลแสนไกลเข้ามาในใจของเขา<br><br>ทัลบอตงุ่มง่ามอยู่กับหิน ลับมันให้คมด้วยมืออันสั่นเทา ในแสงเลือนรางของโรงฝิ่น ท่ามกลางผู้อยู่อาศัยที่ขยับเขยื้อนเคลื่อนกายไม่ได้ เขาสลักงานวิจัยจากในความทรงจำลงไปบนกำแพง เขาเขียนอยู่เป็นชั่วโมงจนกระทั่งนิ้วเลือดไหล ขยับไปที่พื้น จดทุกอย่างที่เสียงนั่นกระซิบใส่ทั้งที่ไม่สามารถเข้าใจให้ถ่องแท้ เมื่อไม่มีที่ให้เขียนแล้ว ขับก็คว้าหินขึ้นมากรีดข้อความลงบนอก เปรอะเปื้อนไปด้วยเลือด ทัลบอตพบปาฏิหาริย์ปรากฏขึ้นเบื้องหน้า ทุ่งดอกไม้สีส้มอันอุดมสมบูรณ์ตระการตา เสียงกระซิบเรียกความสนใจจากเขา เร่งเร้าให้เขาเข้าไปในทุ่งนั่นแล้วค้นพบโลกและมิติที่อยู่เหนือความเข้าใจของมนุษย์ ในชั่วขณะหนึ่ง ทัลบอตรู้สึกถึงสัมผัสอัศจรรย์ที่ตนเคยครอบครองเมื่อครั้งยังเด็ก<br><br>ผู้พำนักอาศัยในโรงฝิ่นตื่นขึ้นโดยเงียบงัน กลิ่นควันแห้งๆ ยังเอื่อยอวลในอากาศ เดินตุปัดตุเป๋ออกจากสายหมอกแห่งมวลยา พวกเขาพบพื้นหินที่ชุ่มโชกไปด้วยเลือด ลำธารเล็กๆ ไหลเป็นทางตามรอยแตก เมื่อดวงตาคุ้นเคยกับห้องอันมืดมิด ตัวอักษรหวัดๆ ยึกยือไปตามความยาวของมันก็ปรากฏขึ้น เขียนไปซ้ำแล้วซ้ำเล่าอย่างไม่มีจุดจบ มันมิได้เขียนเป็นสิ่งใดเลยนอกจากประโยคเดียวที่ว่า <i>ความตายเป็นเพียงจุดเริ่มต้นเท่านั้น</i>","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"คู่ฝาแฝดตัวติดกัน ชาร์ลอตต์และวิกตอร์ เดซายส์ ก่อเกิดความผูกพันทางอารมณ์อย่างไม่เหมือนใคร อาจเรียกได้ว่าการถือกำเนิดสำเร็จอย่างไม่เหมือนใครของพวกเขาในศตวรรษที่สิบเจ็ดนั้นถือได้ว่าเป็นปาฏิหาริย์ ทว่ามันก็นำมาซึ่งชีวิตที่ต้องทุกข์ทรมานกับการข่มเหงรังแกในทันทีเช่นกัน แฝดคู่นี้เกิดมาโดยร่างกายส่วนล่างของวิกตอร์ติดอยู่กับอกของผู้เป็นพี่สาว ขาของเขาบิดพันรอบกล้ามเนื้อและอวัยวะของเธอ เขาตัวเล็กกว่าชาร์ลอตต์ โตราวกับเขาเป็นเพียงส่วนเกินของร่างกายเธอมากกว่าเป็นเด็กชายเต็มตัว ยามพวกเขากรีดร้องเมื่อแรกเกิด หมอตำแยที่ทำคลอดก็กรีดร้องด้วยเช่นกัน และวิ่งหนีจากไปพลางตะโกนป่าวประกาศว่าแม่มดได้ให้กำเนิดปีศาจออกมา การไล่ล่าชาร์ลอตต์ วิกตอร์ และมาเดอลีนผู้เป็นแม่ของพวกเขาจึงเริ่มต้นขึ้น<br><br>ปีต่อๆ มานั้นเป็นเพียงความทรงจำชั่วประเดี๋ยวประด๋าวของสองฝาแฝด แต่นั่นก็เป็นสิ่งที่ใกล้เคียงกับชีวิตปกติมากที่สุดเท่าที่พวกเขาจะรู้จักแล้ว การเดินทางไปกับแม่นั้นเป็นสิ่งที่สองเชื่อว่าเด็กที่ไหนก็ทำกัน การหนีและหลบซ่อนไปทั่วชนบทของฝรั่งเศสกลายเป็นเรื่องที่เกิดขึ้นตามปกติ เมื่ออายุได้ห้าขวบ การละเล่นอันท้าทายแบบใหม่ก็ปรากฏขึ้นเมื่อแม่ของพวกเขาล้มป่วย ด้วยใบหน้าที่ซีดเผือดและเรี่ยวแรงที่สิ้นสูญ มาเดอลีนจึงไม่มีทางเลือกใดนอกจากส่งต่อความรับผิดชอบในการรวบรวมอาหารให้กับชาร์ลอตต์ เด็กหญิงผู้แบกรับภาระอยู่ใต้เสื้อผ้าพิเศษที่ปกปิดร่างกายของวิกตอร์ซึ่งงอกออกมาเอาไว้ออกเดินทางจากเต็นท์ในป่าแล้วแล้วเดินหน้าสู่เมืองใกล้เคียง แม้อะไรๆ จะแปลกตา แต่เธอก็ทำตามที่ฝึกฝนมา รอให้ตลาดเปิดแล้วกวาดอาหารอะไรก็ตามที่กวาดได้ไป มันเป็นชัยชนะในการละเล่น ทว่าก็หาได้ยืนยาวแม้เพียงนิด<br><br>หลังเที่ยงคืน แสงไฟเรืองแรงลุกเรื่องขึ้นรอบค่ายพักแรมของครอบครัว เสียงตะโกนสั่งเพียงครั้งเดียวทำลายความเงียบงันของของยามค่ำคืนแล้วฝูงชนของเหล่าผู้ล่าแม่มดก็หลั่งไหลมา มือสกปรกกระชากสองฝาแฝดจากที่นอน มาเดอเรียนร่ำร้องหาลูก พลันเสียงของเธอเงียบลงอย่างฉับพลันทันทีด้วยไม้กระบองซึ่งฟาดเข้ากะโหลก วิกเตอร์กรีดร้องด้วยเสียงโหยหวนอย่างหนูติดกับดัก<br><br>พวกนักล่าประสานงานกันอย่างรวดเร็ว ผู้พิพากษาประกาศความผิดของมาเดอลีนข้อหาใช้เวทมนตร์คาถา โดยมีหลักฐานคือปีศาจที่เธอให้กำเนิด ภายในไม่กี่นาที พวกเขาก็ล่ามร่างไร้สติของเธอไว้กับต้นไม้ เอากิ่งไม้และมอสล้อมรอบเท้าเธอ เมื่อตื่นขึ้นมา มาเดอลีนไม่ได้ดิ้นรนขัดขืน เธอได้แต่ขอให้ลูกๆ มองไปทางอื่น แต่พวกเขาไม่ได้รับโอกาสใด สองฝาแฝดถูกบังคับให้ดูตอนที่คบไฟถูกจุดขึ้น ถูกบังคับให้ดูไฟที่ปลิวติดกระโปรงของแม่ตัวเอง แผดเผาเนื้อหนังของเธอจนไม้เกรียม ทั้งสองจ้องมองไขมันที่หยดจากร่างของแม่ และใบหน้าที่ปูดบวมและบิดเบี้ยวนั่นด้วย พวกเขาจ้องมองจนเสียงกรีดร้องที่ฉีกเส้นเสียงที่ขาดปลาสนาการไป และที่เหลืออยู่ก็เพียงถ้าถ่านคุไฟและกลิ่นเหม็นชวนคลื่นเหียน<br><br>อันใดอันเคยสุขมีดีงามล้วนตายไปกับแม่ ทั้งคู่ถูกจับใส่กรงส่งไปยังอารามไม้เก่าแก่ และถูกขายให้กับกลุ่มรับที่ห่มกายด้วยผ้าคลุมสีเข้ม ไม่ว่าใครเข้าใกล้วิกตอร์ก็จะตอบโต้ด้วยความเกรี้ยวกราดของสัตว์ร้ายที่คุ้มคลั่ง ทั้งข่วนทั้งกัด ชาร์ลอตต์ขมขื่นและเกลียดชังทุกคนยกเว้นน้องชายตัวเอง และพลันบังเกิดเจตจำนงในการเป็นผู้ปกป้องคุ้มครองเขา<br><br>ภายในอาราม ทั้งสองต้องพบกับการทดลองอันไม่ปกตินานหลายปี บ้างโหดร้าย อีกหลายก็เพียงทำให้งุนงง วันหนึ่งพวกเขาถูกบังคับให้หักคอนกสีเทาตัวเล็ก วันต่อมาก็ถูกกรีดนิ้วใส่เลือดลงไปในแจกันกุหลาบ และทุกวันที่เจ็ด ทั้งสองต้องนอนโดยมีกิ่งโอ๊กชื้นๆ อยู่ใต้หมอน จากนั้นก็มีเสียงสวดมนต์ เสียงประสานอันไร้จุดจบจากเรือนร่างในผ้าคลุมตามช่วงเวลาที่กำหนด<br><br>ในตอนนั้น การทดลองขั้นสุดท้ายก็ได้ถูกวางแผนไว้แล้ว ร่างในชุดคลุมสองร่างต้อนสองฝาแฝดไปยังใจกลางของอาราม จับชาร์ลอตต์ไว้กับแท่นบูชาในห้องที่สว่างไสวด้วยแสงจากเชิงเทียนมากมาย ใบหน้ายับย่นของชายคนหนึ่งปรากฏเลือนรางจากใต้ผ้าคลุมหัวของเขา เขาวางมือลงบนหน้าผากของสองฝาแฝด ตรวจสอบกะโหลกของทั้งคู่อย่างระมัดระวังก่อนจะชักดาบแวววาวออกมาพลางกล่าวว่า เมเมนโต้โมริ<br><br>ชาร์ลอตต์กลิ้งไปทางตัวเอง พาร่างน้องชายพ้นจากแท่นบูชา เขากรีดร้องแล้วเหยียดแขนออกไปให้ไกลที่สุดเท่าที่จะทำได้เพื่อปัดเชิงเทียนลงพื้น ไฟติดไม้แห้งในทันที มันลามไปทั่วพื้น ลุกไหม้ชุดคลุมยาวสีดำที่ปัดมัน เสียงกรีดร้องด้วยความเจ็บปวดสาหัสแทงทะลุขึ้นมาในความโกลาหล และมันทำให้ชาร์ลอตต์มีเรี่ยวแรงขึ้น เธอพุ่งเข้าหาไฟนรกนั่น ดวงตาไม่เห็นสิ่งใดนอกจากควันสีดำและเปลวเพลิงที่ลุกโชน ความเจ็บปวดอันหนักหน่วงถาโถมใส่ปอดของเธอ จะหาทางออกเท่าไรก็ไม่พบ ทุกย่างก้าวล้วนนำไปสู่ความร้อนอันเกินทนทาน ชาร์ลอตต์ทรุดเข่าลง หายใจไม่ออก แล้วทันใดนั้นก็พลันเห็น แสงตะวัน ต้นไม้ เธอย่ำเท้าออกจากเปลวเพลิงสู่ยอดหญ้าชุ่มน้ำค้าง ชาร์ลอตต์วิ่งเข้าป่าไปโดยไม่หันกลับมามองจนกระทั่งล้มลง<br><br>เมื่อชาร์ลอตต์ลืมตาขึ้น เธอก็เอื้อมไปจับมือวิกตอร์ เขาไม่ขยับเขยื้อนแม้เพียงนิด ร่างของเขาห้อยจากลำตัวของเธออย่างช่วยเหลือตัวเองไม่ได้ เธอจับหน้าเขาแน่น มองลึกไปในดวงตาเศร้าสร้อยที่แน่นิ่งนั่น การเคลื่อนไหวที่เธอเคยชิน ร่างของเขาที่คอยดึงรั้งผิวหนังของเธอ ขาของเขาที่แหย่อยู่กับรูในทรวงอกเธอ บัดนี้ไม่มีอีกแล้ว วิกตอร์ตายแล้ว<br><br>ชาร์ลอตต์ไม่มีทางเลือกนอกจากไปต่อพลางคร่ำครวญด้วยหวาดกลัวว่าพวกุชดคลุมดำกับพวกล่าแม่มดจะกำลังด้อมมอง เธอปกปิดซากศพของน้องชายไว้ใต้เสื้อผ้าแล้วมุ่งหน้าสู่ท่อระบายน้ำบริเวณเมือง เธอตั้งค่ายพักแรมที่นั่น โผล่ขึ้นมาบ่อยๆ เพื่อขโมยอาหารใดๆ ที่ขโมยได้ ยามสิ้นไร้ไม้ตอกจริงๆ ก็บุกเข้าไปในโรงนาเพื่อขโมยรำหมูเป็นที่พึ่ง หลายปีผ่านไป ซากศพของวิกตอร์เน่าเปื่อย แขนขาของเขากลายเป็นของเหลวสีดำคล้ำ กระนั้นร่างของเขาก็ยังยืนหยัดต่อต้านการเน่าสลาย ราวกับเลือดของพี่สาวยังคงไหลหล่อเลี้ยงในร่างเขา การปกป้องร่างไร้ชีวิตของวิกตอร์กลายเป็นเหตุผลเดียวที่ทำให้ชาร์ลอตต์ยังมีชีวิต และเธอปฏิเสธไม่ยอมแยกจากครอบครัวเพียงหนึ่งเดียวที่เหลืออยู่<br><br>ชีวิตในช่วงวัยรุ่นของเธอกลายเป็นการแข่งขันเพื่อเอาชีวิตรอด ความชิงชังมนุษย์ของเธอเติบโตขึ้นทุกวันภายใต้ความตระหนักพวกเขาไม่มีวันปล่อยเธอไป ไม่ว่าจะมีกี่คนต้องตายไปในการปล้นชิงอันผิดพลาดและความพยายามหนีอย่างสุดชีวิต ที่เพิ่มขึ้นก็มีแต่การไล่ล่าและถ้อยคำสาปแช่งที่ถ่มถุยใส่ สัตว์ประหลาด ปีศาจ นางแม่มด และพวกชุดคลุมดำนั้นเลวร้ายที่สุด พวกมันไล่ล่าเธอไม่จบสิ้น บังคับให้เธอต้องทิ้งที่พักแล้วหนีไปเรื่อยๆ<br><br>เป็นเวลาหลายปีที่ชาร์ลอตต์ต้องหนี ฆ่าเมื่อจำเป็น กล่อมน้องชายที่ตายไปนานแล้วในยามราตรี ในฤดูหนาวอันยากเข็ญครั้งหนึ่ง ร่างกายของเธอก็เริ่มรับไม่ไหว อาหารอันขาดแคลนและการหลบอยู่ในกระท่อมอันผุพังล้วนไม่มีประโยชน์อันใดกับอากาศที่เย็นจนเป็นน้ำแข็งเช่นนี้ ชาร์ลอตต์กำเคียวไว้ในมือ เธอพักอยู่ใกล้กองไฟของตัวเองในป่าโดยไม่รู้ว่าพวกชุดคลุมดำจะมาเอาตัวเธอไปก่อนความหนาวเย็น ในตอนที่ความเย็นกลายเป็นผลึกรอบรูจมูกและปากของเธอก็เริ่มคล้ำเขียวอ่อนๆ ชาร์ลอตต์ก็พลันรู้สึกถึงบางอย่างที่ไม่เคยพานพบมาก่อน การยอมรับ เธอปิดตาลง เปิดใจยอมรับความตายอันเงียบสงบเมื่อเสียงกรีดร้องโหยหวนชั่วร้ายแทงทะลุแก้วหู วิกตอร์กระตุกและสะบัดไปมาอยู่บนอกของเธอ มวลหมอกปกคลุมร่างของเขา ก่อนที่เธอจะทันตอบสนองใดๆ เขาก็หยดร่วงจากเธอลงไปในแอ่งเลือด ตะกายขึ้นหิมะแล้วออกวิ่งไป<br><br>เมื่อรวมสติได้จากการเฉียดตาย เธอก็ออกวิ่งตามพลางตะโกนเรียกเขา เธอวิ่งผ่านป่าไปจนกระทั่งขารับร่างไม่ไหว กระทั่งในที่สุด ดวงตาของเธอก็พบกับวิกตอร์ เขานั่งอยู่ที่ขอบของหมอกหนา ใบหน้าของเขาบิดเบี้ยวและดุร้าย กรีดร้องในขณะที่พวกชุดคลุมดำโผล่จากสายหมอกมาคว้าแขนและจับเขาเอาไว้ ความเงียบสงบที่คืบคลานมาหาชาร์ลอตต์หายไปแล้ว มันแทนที่ด้วยความชิงชังและคุ้มคลั่งที่แผดเผาซึ่งเธอใช้เป็นที่พึ่งมาแสนนาน ชาร์ลอตต์กำเคียวแน่น เธอพุ่งใส่สายหมอก พร้อมกระชากเครื่องในใครก็ตามที่ย่างกรายไปใกล้น้องชายของตัว","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"ฮัคจีอุนเติบโตขึ้นมาภายใต้ความสนใจของคนอื่นๆ ได้รับการกระตุ้นด้วยตาทุกดวงที่จับจ้อง และลิ้นทุกลิ้นที่กระดิกเสียงเป็นชื่อเขา ท่ามกลางสิทธิเหนือผู้อื่นที่ได้รับนั่น มีเพียงสิ่งเดียวที่เขาปรารถนา นั่นก็คือ เอามันมามากกว่านี้อีก แม้เป็นเพียงเด็กคนหนึ่ง เขาก็ยังรู้ว่าจะดึงความสนใจของผู้คนเข้ามาได้อย่างไร เมื่อทำงานที่ร้านอาหารของครอบครัว เขาก็ทำให้กิจการเป็นที่ดึงดูดด้วยการแสดงปามีดอันน่าตื่นตาตื่นใจ นักท่องเที่ยวผู้ไม่ประสีประสาต่างเชื่อว่านั่นเป็นการได้สัมผัสกับเกาหลีใต้แบบดั้งเดิม และยินดีจ่ายเงินเพื่อได้รับชมการแสดงนั้น พ่อของจีอุนใช้เงินที่ได้จากร้านอาหารไปกับการเรียนเต้นและร้องเพลงของลูกชายตัวเอง ผลักดันให้จีอุนมีชื่อเสียงอย่างที่ตัวเขาไม่เคยได้รับ<br><br>และจีอุนก็ไม่ได้ทำให้ผิดหวัง หลังจากแสดงทักษะให้คนธรรมดาๆ ชมในรายการแสดงความสามารถพิเศษมาหลายปี เขาก็เริ่มออกเดินทางสู่ความมีชื่อเสียง อียุนจินผู้เป็นโปรดิวเซอร์ที่ Mightee One Entertainment ได้คัดตัวจีอุนเข้าสู่โปรแกรมเด็กฝึกของเธอ เขาย้ายไปอยู่หอพักในกรุงโซล ที่ซึ่งเขาใช้เวลาวันละสิบสี่ชั่วโมงไปกับการถูกปั้นให้เป็นดารา ถูกสอนให้ร้องและเต้น รวมถึงวิธีปฏิบัติตัวเพื่อคงไว้ซึ่งความสมดุลระหว่างความมั่นอกมั่นใจและความอ่อนน้อมถ่อมตน<br><br>แม้กระบวนการนั้นจะสูบเอาเรี่ยวแรงไปจนสิ้น แต่มันก็ได้ผล ยุนจินเลือกให้จีอุนเข้าร่วมกับวง NO SPIN เพื่อดึงเอาพลังงานดิบให้กลับเข้าที่เข้าทาง และชื่อเสียงก็บังเกิดแทบในทันที จีอุนมีชีวิตอยู่ในความชื่นชมและการสัมภาษณ์อันน่าพิศวงงงงวย และแม้ตารางงานอันบ้าคลั่งจะกัดกินเรี่ยวแรงเพื่อนร่วมวงจนหมดสิ้น แต่ตัวเขากลับกระปรี้กระเปร่านัก แต่ละวันที่ผ่านไปคือการยืนยันว่าเขานั้นยิ่งใหญ่กว่าความธรรมดาสามัญที่สังคมถ่มถุยออกมา<br><br>ทว่าเมื่อเวลาผันผ่าน รสชาติของแชมเปญแห่งความสำเร็จนี้ก็กลับเปลี่ยนไป เมื่อจีอุนมองไปที่แฟนๆ เขาเห็นความสุขและความริษยาของผู้ตนเหล่านั้นแตกเป็นห้าสาย เจือจางเบาบางไประหว่างสมาชิกวงแต่ละคน แรงตระหนักแห่งคุณค่าในตัวเองที่กระชากผ่านเขาไป ทอดทิ้งไว้เพียงความปรารถนาแรงกล้าว่าตนต้องได้มากกว่านี้<br><br>จีอุนพยายามรักษาความประทับใจเอาไว้ ด้วยการลอกเลียนเสน่ห์ที่ถูกกลับฝังใต้ความชิงชังมานาน เขาบันทึกเสียงอัลบั้มล่าสุดของ NO SPIN ร่วมกับสมาชิกวงคนอื่นๆ อย่างไม่มีพลาดจังหวะ หลังจากการพักทานอาหารเที่ยงอันยาวนาน เขากลับไปที่สตูดิโอเพื่อพบว่า โชคชะตาได้มอบของขวัญไว้ให้แล้ว กลิ่นของสายไฟที่กำลังลุกไหม้นั้นชัดแจ้ง เขารีบไปที่ห้องควบคุม และพบว่าลำโพงที่ล้มลงลงบนพื้นนั้นขวางประตูอยู่ อีกด้านหนึ่ง เพื่อนร่วมวงของเขากำลังทุบประตู เสียงร้องคร่ำครวญของพวกเขาเคล้าไปกับเสียงไฟแตกปะทุ<br><br>จีอุนเรียกพวกเขา วิ่งไปที่ลำโพง คว้าอันหนึ่งแล้ว... หยุด เขานิ่ง แต่ละลมหายใจนั้นเป็นกระบวนการที่ไต่ตรองอย่างรอบคอบและมีสติซึ่งต้องใช้สมาธิทั้งหมดของเขา เสียงคร่ำครวญใกล้ๆ นั้นแทบไม่ได้ยินจนกระทั่งเขาถอยหลังไปอย่างช้าๆ แล้วจีอุนก็ได้ยินมัน พวกนั้นกรีดร้องเรียกชื่อของเขาขณะร่างถูกเผา กรีดร้องขอให้เขาช่วย จีอุน! จีอุน! ฮัคจีอุน! นั่นเป็นสิ่งที่ไพเราะที่สุดที่เขาเคยได้ยิน เมื่อเจ้าหน้าที่ดับเพลิงมาถึง น้ำตาของเขาเป็นของแท้<br><br>จีอุนได้รับการสรรเสริญในฐานะภาพตัวแทนของโศกนาฏกรรม เป็นฮีโร่ที่ทำทุกอย่างที่ทำได้ในความพยายามช่วยเพื่อนๆ อันไม่เกิดผล ยุนจินพาเขาเดินสายให้สัมภาษณ์ไปจนถึงเวลาที่ต้องปรับภาพลักษณ์กันใหม่ จีอุนเกิดใหม่เป็นเดอะทริกสเตอร์ ศิลปินเดียวผู้ทำเพลงด้วยตัวเอง สวมทับหัวใจอันอ่อนโยนไว้ใต้ภาพลักษณ์ภายนอกอันดุดัน ทว่า ห่างไกลไปจากเวทีทางโทรทัศน์และสถานที่จัดคอนเสิร์ต บางวิ่งอันมืดมิดยิ่งกำลังเติบโตขึ้น<br><br>เขาเล็งพวกที่อาศัยอยู่คนเดียวเป็นเป้าหมาย ย่างกรายไปหายามราตรี รายแรกคือนักเรียนการดนตรีระดับวิทยาลัยผู้มีเสียงน่าหลงใหล จีอุนปลุกเขาด้วยไม้เบสบอลที่ฟาดเข้ากะโหลกศีรษะ จับเขามัดแขนมัดขา ปิดปากเขาด้วยการเอาผ้าขี้ริ้วยัดแล้วพันเทปผ้าทับ เขาทรมานเหยื่อรายนั้นอยู่หลายชั่วโมง จับชำแหละทั้งเป็นๆ กระนั้นก็ยังมีบางอย่างขาดหายไป นั่นก็คือเสียง และความสัมพันธ์ เขาอยากได้ยินเสียงอันอัศจรรย์ของเหยื่อวิงวอนยามเขาผ่าท้องเปิดออก แต่ที่ได้รับมามีเพียงเสียงร้องไห้อู้อี้ที่เล็ดรอดผ่านผ้าขี้ริ้ว<br><br>เขาเรียนรู้และปรับเปลี่ยน<br><br>เหยื่อต้องถูกลักพาตัว พาขึ้นรถไปยังตึกร้างที่เขาสามารถปล่อยให้เสียงของเหยื่อนำพาอารมณ์ออกมาอย่างไม่มีสิ่งใดมาจำกัด จีอุนทำเพลงจากเหยื่อเหล่านั้น การให้แรงกระตุ้นอย่างถูกที่ถูกทางจะปลุกเสียงกรีดร้องโหยหวนหลากหลายชนิดให้ตื่นขึ้นมา การแทงกล้ามเนื้อเอวช่วงล่างจะทำให้เกิดเสียงแหลมคร่ำครวญยาวๆ ออกมาจากลำคอ ในขณะที่การฟันหลอดเลือดแดงใหญ่ที่คอจะสร้างเสียงที่คล้ายแมวถูกบีบคอขึ้นมา มีความซื่อสัตย์อยู่ในความทุกข์ทรมานของคนเหล่านั้น จีอุนอัดเสียงแต่ละช่วงเอาไว้ สังเคราะห์และเอาไปใช้ในเพลงของเขา ซ่อนไว้หลังชั้นท่วงทำนอง<br><br>เขาปีติยินดีกับผลงานของตัวเอง เขาทิ้งคำใบ้ไว้ให้ตำรวจ ด้วยการจัดวางผ้าพันคอขนมิงก์จากโฟโตชูตเมื่อไม่นานมานี้ไว้รอบคอที่ถูกฟันของเหยื่อ สำหรับการฆ่าครั้งต่อไป เขาถอนฟันจากปากชายคนหนึ่ง จนมันหลอแบบเดียวกับนักมวยคนหนึ่งในมิวสิกวิดีโอของเขา ระหว่างการเรียกร้องความสนใจอย่างไม่เกรงกลัวเป็นพิเศษครั้งหนึ่ง เขาฆ่าแฟนเพลงที่ได้พบกันในการพบปะระดับวีไอพี แทนที่ดวงตาของเธอด้วยกระดุมกลัดแขนเสื้อเพชรของเขา และเอาเลือดเขียนบนหน้าอกเธอว่าฉันไปเห็นพระเจ้ามา แต่ละฉากล้วนน่าตื่นเต้นชวนพิศวง<br><br>ผลงานของจีอุนกลายเป็นที่ถกเถียงกันไปทั่วโลก ทั้งเรื่องดนตรีและการฆาตกรรม อย่างไรก็ตาม เมื่อความรุนแรงกลายเป็นรูปแบบศิลปะที่เขาชื่นชอบ งานเพลงของเขาก็ตกที่นั่งลำบาก รายได้ลดต่ำลง และผู้บริหารของ Mightee One ก็โทษว่าเป็นเพราะเขา ยุนจินที่เดือดดาลในฐานะมืออาชีพปกป้องเขา แต่เธอก็พ่ายแพ้เพราะพวกนั้นคนมากกว่า นั่นคือการตัดสินว่าจีอุนไม่สามารถผลิตเพลงออกมาเองได้อีกแล้ว<br><br>และเป็นการตัดสินใจที่ร้ายแรงมาก เพลงของเขาหลอมรวมความเป็นมนุษย์อันเที่ยงแท้เข้ากับดนตรี กระนั้นผู้บริหารก็ยังปฏิเสธในทุกสิ่งที่ไม่ทั่วไปและไม่ได้คาดหวัง งั้นก็เอาสิ ถ้าพวกนั้นไม่อาจเข้าใจศิลปะของเขา เขาก็จะให้พวกนั้นได้เจอกับมันจนกว่าจะเข้าใจ \\n\\nเขามีเวลาสามเดือนก่อนจะถึงการแสดงภายในต่อหน้าเหล่าคณะกรรมการบริหารของ Mightee One สามเดือนเพื่อวางแผนให้งานศิลปะชิ้นเอกของตัวเอง เขาโอนเงินจำนวนมหาศาลให้สัตวแพทย์แลกกับกระป๋องแก๊สหัวเราะ จากนั้นติดสินบนช่างประจำเวทีโรงละครส่วนตัวของ Mightee One เพื่อเข้าไปในห้อง ความมีชื่อเสียงของเขาทำให้คนเชื่อเขาอย่างไม่สงสัยในแบบที่คนธรรมดาไม่อาจเข้าใจได้ เมื่อการแสดงพร้อมแล้ว แก๊สก็ค่อยๆ ไหลเข้ามาในห้องที่เหล่าผู้บริหารและเจ้าหน้าที่ควบคุมเวทีกำลังรอจีอุน ผู้ซึ่งมาช้ากว่ากำหนดการอย่างสบายใจ \\n\\nเมื่อเขามาถึง ร่างสติไม่เต็มทั้งหลายก็แผ่หราบนที่นั่ง บ้างก็คลานไปทั่วพื้น เขาลงมืออย่างรวดเร็ว มัดทุกคน หยุดเฉพาะเมื่อมาถึงยุนจิน ผู้หญิงที่ดึงเขาขึ้นจากโคลนตมแล้วพาไปสู่เส้นทางที่คู่ควร เธอควรได้รับการตอบแทน ด้วยการให้สิทธิพิเศษในการเข้าชมการแสดงแสนอัศจรรย์ที่กำลังจะมาถึง แม้อยู่ใต้ฤทธิ์ของยากล่อมประสาทเธอก็ยังสู้ ความโกรธเกรี้ยวโหมกระหน่ำอยู่ภายในตัวเธอ และมันรุนแรงกว่าใครๆ ไปไกลนัก เขาพยุงเธอไว้ในฐานะผู้ชมเพียงคนเดียว เปิดตาเธอออก ส่วนคนอื่นๆ ที่กำลังคร่ำครวญและสะอึกสะอื้น ถูกพาขึ้นเวทีเพื่อแสดงองก์สุดท้ายของพวกเขา จีอุนตบเครื่องสำอางลงไปบนใบหน้าคนพวกนั้นด้วยความรู้สึกเหยียดหยามอย่างสาหัส และสาดไฟเวทีส่องใส่ พวกนั้นกลายเป็นเครื่องมือของเขาไปแล้ว \\n\\nท่ามกลางเสียงท่วงทำนองที่ทำขึ้นเอง เขาทรมานคนพวกนั้น พุ่งจากร่างหนึ่งไปอีกร่างหนึ่งอย่างสง่างาม นำการไล่เสียงดุจอุปรากรจากเสียงคร่ำครวญของคนเหล่านั้น พวกเขาตะโกน คร่ำครวญ กรีดร้อง ร้องไห้พาคนที่ตัวเองรัก ร้องไห้หาแม่ มันเป็นการหลากไหลอันน่าตื่นตะลึงของอารมณ์ ของสิ่งที่ถูกกำหนดว่าคือมนุษย์ และพวกเขาทำอะไรเหล่านั้นด้วยสายตาที่จดจ้องจีอุน \\n\\nด้วยการปามีดของเขา ตับไตไส้พุงคนพวกนั้นไหลลงสู่พื้นเวทีจนกระทั่งเครื่องมือมนุษย์คนสุดท้ายเงียบเสียงและดนตรีหยุดลง ทั้งเหงื่อและเลือดปกคลุมร่าง จีอุนผู้หมดเรี่ยวหมดแรงมองไปที่ยุนจินแล้วโค้งคำนับ ม่านปิดลง เขาบรรลุซึ่งความสมบูรณ์แบบแล้ว เขาเดินไปหายุนจินพร้อมมีดในมือ เตรียมตัวปิดงานก่อนเครดิตจะขึ้น แต่ทันทีที่เขาไปถึงตัวเธอ...\\n\\nสายหมอก \\n\\nจากที่ไหนก็ไม่รู้ แต่มันเป็นลูกคลื่นห้อมล้อมตัวเขา ชื้น เย็น... สบายตัว เขาเห็นเวทีใหญ่ เป็นโรงพยาบาลและอาราม ป่าและโรงฆ่าสัตว์ ที่ราบสุดลูกหูลูกตาที่ประดับประดาด้วยตะขอขึ้นสนิม ค้ำจุนไว้ด้วยดวงตานับล้านที่มองเขา วิ่งหนีจากเขา<i>สัมผัสกับเขา</i> ที่เขาทำได้ก็เพียงยอมรับ กลายเป็นเครื่องมือของสายหมอก และที่สำคัญที่สุด ทำให้คนพวกนั้นกรีดร้อง \\n\\nเอาอีก!","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"ด้วยการออกแบบของอัมเบรลลาคอร์ปอเรชัน เดอะเนเมซิสได้กลายเป็นอาวุธอินทรีย์ชีวภาพที่แทบไม่มีอะไรมาหยุดยั้งได้และหมกมุ่นอยู่กับการไล่ล่าทำลายล้างเป้าหมาย ในฐานะที่เป็นส่วนหนึ่งของไทแรนท์ในซีรีส์ T-103 ตัวอย่างทดลองมีสติปัญญาและความตระหนักรู้เพิ่มขึ้นด้วยปรสิต NE-α ที่ถูกฝังเข้าไป ภารกิจแรกของมันคือการเอาไปปล่อยใส่แร็กคูนซิตี้ภายใต้วัตถุประสงค์เดียว นั้นคือการกำจัดสมาชิกหน่วย S.T.A.R.S. ให้สิ้นซาก เดอะเนเมซิสอาละวาดไปทั่วเมืองและได้เผชิญหน้ากับจิลล์ วาเลนไทน์หลายครั้ง แม้เธอจะหนีไปได้ เขาก็ไล่ตามมาไม่ไกลอยู่เสมอ ในขณะที่เขากำลังจะได้ตัวเป้าหมายก็พลันมีหมอกมาปกคลุมเสียก่อน มันปะปนไปกับโขมงควันที่ปกคลุมในภาวะโกลาหล สำหรับเขาแล้วปรากฏการณ์นั้นไม่มีความหมายอันใด ความเย็นเยียบยะเยือกและระดับออกซิเจนที่ลดต่ำลงไม่เคยเป็นภัยคุกคาม เรืองสำคัญมีหนึ่งเดียวคือมุ่งหน้าสู่สายหมอกอย่างมุ่งมั่น ทำภารกิจต่อ ตามหาหน่วย S.T.A.R.S. ทำลายล้างหน่วย S.T.A.R.S. ให้สิ้นซาก และฆ่าทุกอย่างที่ขวางหน้า","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/th/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/th/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"ลมหายใจที่ทรงพลังและโหดเหี้ยมครั้งสุดท้ายที่คว้ามาได้จากผู้คุมในสถานบำบัดโครตัส เพรนน์ นามว่าแพทริก สเปนเซอร์ การส่งผ่านพลังงานของมันจะช่วยให้เดอะเนิร์สเจาะรูแล้วกระโดดข้ามมิติไปยังโลกแห่งวิญญาณในการบลิงค์หลายครั้งติดต่อกัน ซึ่งการกระทำดังกล่าวจะทำให้เดอะเนิร์สอยู่ในสภาพเหนื่อย<br><li>ได้รับความสามารถในการบลิงค์</li><li>ได้รับการบลิงค์ต่อเนื่องเพิ่มเติม <b>1</b> ครั้ง</li>","name":"ลมหายใจเฮือกสุดท้ายของสเปนเซอร์","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"กับดักขนาดใหญ่ทำจากเหล็กกล้า พบเจอได้ทั่วไปตามพื้นที่ สามารถหยิบและวางไว้ที่ไหนก็ได้<br><br><b>กับดักหมี</b><br> โดยปกติแล้ว คุณจะเริ่มเกมโดยมี<b>กับดักหมี 1 ชิ้น</b> สามารถหาเพิ่มได้จากสิ่งแวดล้อมในเกม<br><b>ติดตั้งกับดักหมี:</b><br>กด<i>ปุ่มพลัง</i>ค้างไว้เพื่อติดตั้ง<b>กับดักหมี</b>บนพื้นที่ที่ติดตั้งได้ด้านหน้าท่าน <b>กับดักหมี</b>ที่ติดตั้งไว้จะทำให้ผู้เล่นที่เหยียบมันบาดเจ็บและเคลื่อนที่ไปไหนไม่ได้ ผู้รอดชีวิตที่แข็งแรงที่เหยียบ<b>กับดักหมี</b>เข้าก็จะบาดเจ็บเช่นกัน แต่อาจยังพยายามหนีจากกับดักได้ กด<i>ปุ่มการกระทำ</i>เพื่อแบกผู้เล่นที่บาดเจ็บจาก<b>กับดักหมี</b><br><b>รีเซตกับดัก:</b><br>กด<i>ปุ่มพลัง</i>ค้างไว้ขณะยืนอยู่ใกล้ๆ <b>กับดักหมี</b>ในสภาพแวดล้อมเพื่อรีเซตมันในจุดที่วางอยู่ หากมันยังไม่ได้ถูกติดตั้ง<b>เก็บกับดักหมี:</b><br>กด<i>ปุ่มการกระทำ</i>ขณะที่ยืนอยู่ใกล้ๆ <b>กับดักหมี</b>ในสิ่งแวดล้อมเพื่อเก็บมันขึ้นมา โดยปกติแล้วคุณจะสามารถพกกับดักหมีไว้ได้สูงสุดครั้งละ<b>1 ชิ้น</b>","name":"กับดักหมี","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"กระดิ่งเหล็กหล่อขนาดใหญ่แฝงด้วยพลังดึกดำบรรพ์ ทำให้ผู้ใช้เดินเข้าไปในโลกแห่งวิญญาณได้เมื่อสั่น<br><br><b>กระดิ่งครวญ</b><br>กด<i>ปุ่มพลัง</i>ค้างไว้เพื่อ<b>เร้นกาย</b> กด<i>ปุ่มพลัง</i>ค้างไว้อีกครั้งขณะกำลังเร้นกายอยู่เพื่อ<b>ปรากฏกาย</b> พร้อมได้รับความเร็วการพุ่ง <b>1 วินาที</b>เมื่อปรากฏตัว เสียงกระดิ่งครวญสามารถได้ยินไปไกลถึง <b>24 เมตร</b><br><br><b>เร้นกาย:</b><br>ขณะเร้นกาย <b>เดอะเรธ</b>จะมีความเร็วการเคลื่อนที่เพิ่มขึ้น เกือบล่องหน และได้รับเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b> <b>เดอะเรธ</b>ไม่สามารถโจมตีได้ในขณะเร้นกาย แต่ยังดำเนินการกับวัตถุต่างๆ ได้ การสัมผัสกับแสงสว่างจะบีบให้<b>เดอะเรธ</b>ต้อง<b>ปรากฏกาย</b>โดยอัตโนมัติ","name":"กระดิ่งครวญ","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"กด<i>ปุ่มพลัง</i>ค้างเพื่อวิ่งเลื่อยไฟฟ้าทันที ผู้รอดชีวิตที่โดนวิ่งเลื่อยไฟฟ้าจะเข้าสู่สภาวะใกล้ตาย<br><li>การกระทำต่างๆ ต่อเลื่อยไฟฟ้า (สตาร์ทเครื่องเลื่อยไฟฟ้า เร่งเครื่องเลื่อยไฟฟ้า และ<b>การวิ่งเลื่อยไฟฟ้า</b>) จะทำให้มิเตอร์ความร้อนเกินเพิ่มขึ้น</li><li>เมื่อ<b>มิเตอร์ความร้อนเกิน</b>เต็ม จะใช้เลื่อยไฟฟ้าไม่ได้จนกว่าจะคูลดาวน์เสร็จ การที่ความร้อนขึ้นถึงกำหนดจะไม่รบกวน<b>กวาดเลื่อยไฟฟ้า</b>ที่กำลังทำอยู่</li><li><b>มิเตอร์ความร้อนเกิน</b>จะลดลงเมื่อไม่ใช้เลื่อยไฟฟ้า</li>","name":"เลื่อยไฟฟ้า","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"ทักษะที่แม่เธอสอน แล้วนำมาใช้จนช่ำชองในป่า นักล่าสาวสามารถปาขวานเล็กไปด้วยความแม่นยำสูงถึงตาย<br><li>เริ่มต้นเกมด้วย<b>ขวานเล็ก 5 เล่ม</b></li><li>ชาร์จแล้วปาเพื่อได้ความเร็วการปาสูงสุด</li><li>เติมขวานเล็กได้ที่<b>ตู้เก็บของ</b></li>","name":"ขวานเล็กล่าสัตว์","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"ความมืดภายในจิตใจบงการความต้องการฆ่าเหยื่อของเขา<br><br><b>ปีศาจภายใน</b><br>การเปิดใช้<b>ปีศาจภายใน</b>ทำให้<b>เดอะเชป</b>มองเห็นเหยื่อของตนชัดเจนขึ้นและสะสมพลังอันชั่วร้ายได้ด้วยการสะกดรอยตาม <br><br><b>ปีศาจภายใน I</b><br>ให้เอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b> ความเร็วการเคลื่อนที่ลดลงเล็กน้อย ระยะ<i>การโจมตีพื้นฐาน</i>ลดลงเล็กน้อย<br><br><b>ปีศาจภายใน II</b><br>รัศมีความน่ากลัวลดลงปานกลาง ความเร็วการเคลื่อนที่เพิ่มขึ้นเล็กน้อย ระยะ<i>การโจมตีพื้นฐาน</i>เพิ่มขึ้นเล็กน้อย<br><br><b>ปีศาจภายใน III</b><br>เมื่อเริ่มทำงาน ผู้รอดชีวิตทุกคนจะติดเอฟเฟกต์สถานะ<b>ปลอดกำบัง</b> <b>ปีศาจภายใน III</b> จะคงอยู่นาน <b>60 วินาที</b> หลังจากนั้นจะกลายเป็น<b>ปีศาจภายใน II</b> แทน<br><br><b>ความสามารถพิเศษ: สะกดรอยตาม</b><br>กด<i>ปุ่มพลัง</i>ค้างไว้เพื่อสะกดรอยตามผู้รอดชีวิตที่มองเห็นได้ทุกคน การสะกดรอยตามผู้รอดชีวิตจะเพิ่มความคืบหน้าของระดับ<b>ปีศาจภายใน</b><br><br><span class=\\"FlavorText\\">\\"ผมเคยเจอเขาเมื่อสิบห้าปีก่อน มีคนบอกว่าเขาไม่เหลืออะไรอยู่เลย ขาดเหตุผล ไร้ความรู้สึกผิดชอบชั่วดี ไม่เข้าใจสิ่งใดแม้กระทั่งความรู้สึกพื้นๆ เรื่องความเป็นความตาย ความดีกับความชั่ว ความถูกต้องและความไม่ถูกต้อง ผมพบกับเด็กอายุหกขวบคนนี้ เขามีใบหน้าซีดเผือดไร้อารมณ์ และดวงตาที่ดำสนิท... ดวงตาของปีศาจ ผมใช้เวลาแปดปีพยายามเข้าถึงจิตใจเขา และอีกเจ็ดปีพยายามขังเขาไว้ เพราะผมได้รู้แล้วว่าสิ่งที่อยู่ข้างในดวงตาของเด็กชายคนนั้น... มันเป็นเพียงความชั่วร้ายซึ่งไร้สิ่งใดเจือปนนี่เอง\\" -ดร. แซม ลูมิส</span>","name":"ปีศาจภายใน","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"แหล่งพลังของเดอะแฮ็ก นิ้วสีดำที่ใช้เป็นตัวเร่งของพลังอันชั่วร้ายของนาง เดอะแฮ็กสามารถบิดและเปลี่ยนรูปร่างของโคลนได้ตามต้องการ ด้วยรูปวาดประกอบพิธีกรรมที่เรียบง่าย นางสร้างตัวเองขึ้นมาอีกตัวจากโคลนและชิ้นส่วนเน่าเปื่อยที่เธอใช้สร้างเอฟเฟกต์ต่างๆ ได้<br><li>ให้ความสามารถในการสร้างและรักษากับดักหลอก <b>10</b> ชิ้น</li><li> ให้สามารถในการเดินทางไปยังกับดักหลอกที่ทำงานแล้วทันทีที่อยู่ในระยะ <b>40 เมตร</b></li>","name":"ตัวเร่งสีดำ","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"เดอะแคนนิบัลเริ่มเกมด้วย 3 ชาร์จ กด<I>ปุ่มพลัง</i>ค้างเพื่อใช้ชาร์จและทำการโจมตี<b>กวาดเลื่อยไฟฟ้า</b>ซึ่งโจมตีได้หลายเป้าหมาย ผู้รอชีวิตที่ถูกโจมตีระหว่าง<b>กวาดเลื่อยไฟฟ้า</b>จะเข้าสู่สภาวะใกล้ตาย<br><li>ใช้ชาร์จเพื่อขยายความยาวของ<b>กวาดเลื่อยไฟฟ้า</b> การทำเช่นนี้จะทำให้คูลดาวน์นานขึ้นเล็กน้อย</li><li>ชาร์จของเลื่อยไฟฟ้าจะเติมใหม่เมื่อไม่ใช้เลื่อยไฟฟ้า</li><br><br><b>มิเตอร์เกรี้ยวกราด</b>จะเต็มช้าๆ เมื่อเร่งเครื่องเลื่อยไฟฟ้า เมื่อมิเตอร์เต็มแล้ว หรือหลังจากตีวัตถุระหว่างทำ<b>กวาดเลื่อยไฟฟ้า</b> เดอะแคนนิบัลจะปลดปล่อย<b>ความเกรี้ยวกราด</b> <b>ความเกรี้ยวกราด</b>ทำให้ผู้รอดชีวิตรอบตัวเขาบาดเจ็บและเข้าสู่สภาวะใกล้ตาย<br><li>ระยะเวลาของ<b>ความเกรี้ยวกราด</b>เพิ่มขึ้นในทุกชาร์จที่ใช้ไประหว่าง<b>กวาดเลื่อยไฟฟ้า</b> ชาร์จที่เหลือจะหายไป</li><li>ระหว่าง<b>ความเกรี้ยวกราด</b> ความเร็วการเคลื่อนที่จะลดลง</li><li><b>มิเตอร์ความเกรี้ยวกราด</b>จะลดลงเมื่อไม่ได้ใช้เลื่อยไฟฟ้า และจะหมดไปโดยสมบูรณ์ระหว่าง<b>กวาดเลื่อยไฟฟ้า</b></li> ","name":"เลื่อยไฟฟ้าของพี่","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>ประกายไฟฟ้าคาร์เตอร์</b><br>การโจมตีผู้รอดชีวิตได้สำเร็จด้วยความสามารถพิเศษของ<b>เดอะดอกเตอร์</b> ได้แก่ <b>การช็อตไฟฟ้าบำบัด</b>หรือ<b>ระเบิดไฟฟ้าสถิต</b> จะเพิ่ม<i>ความบ้าคลั่ง</i>ของผู้รอดชีวิตจนในที่สุดก็ติดเอฟเฟกต์สถานะ<b>ความบ้าคลั่ง</b>พร้อมเกิดผลอันรุนแรง<br><b>ความบ้าคลั่ง I:</b><br>ทำให้ผู้รอดชีวิตกรีดร้องขึ้นมาหนึ่งครั้งแล้วเผยตำแหน่งของตนให้แก่<b>เดอะดอกเตอร์</b> ส่งผลต่อตำแหน่งและทิศทางของการตรวจสอบทักษะ<b>เล็กน้อย</b><br><b>ความบ้าคลั่ง II:</b><br>ทำให้ผู้รอดชีวิตกรีดร้องขึ้นมาหนึ่งครั้งแล้วเกิด<i>ภาพหลอนของเดอะดอกเตอร์</i> ส่งผลต่อตำแหน่งและทิศทางของการตรวจสอบทักษะ<b>ปานกลาง</b><br><b>ความบ้าคลั่ง III:</b><br>ทำให้ผู้รอดชีวิตกรีดร้องขึ้นมาเป็นระยะแล้วเกิด<i>ภาพหลอนของเดอะดอกเตอร์</i> ส่งผลต่อตำแหน่งและทิศทางของการตรวจสอบทักษะ<b>มหาศาล</b> ผู้รอดชีวิตจะไม่สามารถรักษา ซ่อมแซม ทำลาย ปลดล็อค ชะล้าง หรือใช้ไอเท็มได้จนกว่าจะ<i>สะบัดหลุด</i> เมื่อผู้รอดชีวิตดำเนินการ<i>สะบัดหลุด</i>ได้สำเร็จแล้ว ผู้รอดชีวิตนั้นจะกลับคืนสู่<b>ความบ้าคลั่ง I</b><br><br><b>ความสามารถพิเศษ: การช็อตไฟฟ้าบำบัด</b><br>กด<i>ปุ่มพลัง</i>ค้างไว้เพื่อเริ่ม<b>การช็อตไฟฟ้าบำบัด</b>ซึ่งจะปลดปล่อยการโจมตีช็อตไฟฟ้าไปบนพื้นด้านหน้า ผู้รอดชีวิตที่ถูก<b>การช็อตไฟฟ้าบำบัด</b>โจมตีจะมี<i>ความบ้าคลั่ง</i>เพิ่มขึ้น และการกระทำใดก็ตามที่กำลังดำเนินการอยู่จะถูกขัดขวางทันที <b>การช็อตไฟฟ้าบำบัด</b>จะลบล้างเอฟเฟกต์สถานะ<b>ไม่รู้ตัว</b>ได้ทันที<br><br><b>ความสามารถพิเศษ: ระเบิดไฟฟ้าสถิต</b><br>กด<i>ปุ่มเปิดใช้งานความสามารถ</i>ค้างไว้เพื่อเริ่มใช้<b>ระเบิดไฟฟ้าสถิต</b>ซึ่งทำให้ผู้รอดชีวิตทุกคนภายในรัศมีความน่ากลัวของเดอะดอกเตอร์กรีดร้องและได้รับ<i>ความบ้าคลั่ง</i>เพิ่มขึ้น <b>ระเบิดไฟฟ้าสถิต</b>จะเปิดใช้งานได้เมื่อไม่มีคูลดาวน์เท่านั้น <b>ระเบิดไฟฟ้าสถิต</b>จะลบล้างเอฟเฟกต์สถานะ<b>ไม่รู้ตัว</b>ได้ทันที","name":"ประกายไฟฟ้าคาร์เตอร์","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"ผู้รอดชีวิตที่ตื่นอยู่จะได้ยินเสียงรัศมีความน่ากลัวของ<b>เดอะไนท์แมร์</b>และเห็นเขาภายในระยะ 16 เมตร และจะเห็นบ้างไม่เห็นบ้างในระยะ 16 ถึง 32 เมตร แต่ถ้าไกลกว่านั้นจะไม่เห็น <b>เดอะไนท์แมร์</b>ทำให้ผู้รอดชีวิตหลับและเข้าสู่โลกแห่งความฝันได้โดยไม่ต้องทำอะไรเป็นระยะเวลา 60 วินาที และทำให้ผู้รอดชีวิตเข้าสู่โลกแห่งความฝันด้วย<i>การโจมตีพื้นฐาน</i><br><br>เมื่ออยู่ในโลกแห่งความฝัน ผู้รอดชีวิตจะติดเอฟเฟกต์สถานะ<b>ไม่รู้ตัว</b> และติด<b>บ่วงความฝัน</b>ได้ด้วย ปลุกตื่นขึ้นได้ด้วยการตรวจสอบทักษะที่ล้มเหลว สามารถทำให้ผู้รอดชีวิตตื่นโดยใช้<i>การปลุก</i>หรือนาฬิกาปลุกที่หาพบ ทุก<i>การปลุก</i>ที่ต่อเนื่องกันจะใช้เวลาเพิ่มขึ้นเป็นสองเท่า นาฬิกาปลุกทำให้ผู้รอดชีวิตต้านทานการหลับได้เป็นเวลา 30 วินาที<br><br><b>ความสามารถพิเศษ: บ่วงความฝัน</b><br>กด<i>ปุ่มพลัง</i>ค้างเพื่อวาง<b>บ่วงความฝัน</b> ผู้รอดชีวิตจะติดเอฟเฟกต์สถานะ<b>ถูกกีดขวาง</b>เป็นระยะเวลาสั้นๆ หลังสัมผัส<b>บ่วงความฝัน</b><br><br>อุปกรณ์เสริมบางอย่างจะทำให้<b>แท่นไม้ความฝัน</b>มาแทนที่<b>บ่วงความฝัน</b> เมื่ออยู่ในโลกแห่งความฝัน แท่นไม้ความฝันจะมาแทนที่แท่นไม้ พวกมันจะถูกไฮไลต์ให้<b>เดอะไนท์แมร์</b>เห็นและไม่ทำให้เขาสตัน<br><br><b>โทเค่นความฝัน</b>:<br><b>เดอะไนท์แมร์</b>เริ่มเกมโดยมีโทเค่นความฝัน 5 ชิ้นไว้ใช้วางบ่วงความฝัน เมื่อใช้โทเค่นไปหมดแล้ว บ่วงความฝันอันที่เก่าที่สุดจะถูกทำลายเมื่อวางอันใหม่ลงไป<br><br><b>ความสามารถพิเศษ: ฉายภาพความฝัน</b><br>หด<i>ปุ่มเปิดใช้งานความสามารถ</i>ค้างเพื่อเทเลพอร์ตไปยังเครื่องปั่นไฟที่มองเห็น สำหรับผู้รอดชีวิตแต่ละคนในโลกแห่งความฝัน คูลดาวน์จะลดลง 15%","name":"ปีศาจความฝัน","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"ด้วยความทุ่มเทให้แก่แนวทางของเจ้านายตน เธอจึงลงโทษผู้ไม่รู้ซึ้งถึงคุณค่าชีวิตกับผู้มีความผิดด้วยเล่ห์เหลี่ยมและปริศนาแห่งความตาย<br><br><b>เดอะพิก</b>สามารถเคลื่อนไหวได้อย่างเงียบเชียบ พุ่งเข้าลอบโจมตีแล้วใส่กับดักหมีสลับทางบนศีรษะของผู้รอดชีวิต<br><br><b>การล้างบาปของจิ๊กซอว์</b><br>เริ่มต้นเกมด้วยกับดักหมีสลับทางที่<i>ยังไม่ทำงาน</i> <b>4</b> ชิ้น ขณะยืนอยู่เหนือร่างของผู้รอดชีวิตที่ใกล้ตาย กด<i>ปุ่มเปิดใช้งานความสามารถ</i>เพื่อใส่กับดักหมีสลับทางที่<i>ยังไม่ทำงาน</i>บนตัวผู้รอดชีวิต กับดักหมีสลับทางจะ<i>เริ่มทำงาน</i>เมื่อมีการซ่อมแซมเครื่องปั่นไฟในเกมได้สำเร็จ<br>ผู้รอดชีวิตสามารถปลดกับดักหมีสลับทางที่<i>เริ่มทำงาน</i>แล้วหรือ<i>ยังไม่ทำงาน</i>ออกเองได้โดยค้นกล่องจิ๊กซอว์ที่มีอยู่ตามจุดต่างๆ เพื่อหากุญแจที่ถูกต้อง<br><b>กับดักหมีสลับทางที่ทำงาน</b><br>เมื่อกับดักหมีสลับทาง<i>เริ่มทำงาน</i>แล้ว จะมีการนับถอยหลัง ผู้รอดชีวิตที่ติดกับดักหมีสลับทางซึ่ง<i>เริ่มทำงาน</i>แล้วจะถูกบูชายัญไปโดยอัตโนมัติเมื่อตัวจับเวลาสิ้นสุดลง หรือพยายามหลบหนีออกจากเกมไปโดยยังมีกับดักหมีสลับทางที่<i>เริ่มทำงาน</i>แล้วติดอยู่<br><br><b>ความสามารถพิเศษ: ย่อ</b><br>กด<i>ปุ่มเปิดใช้งานความสามารถ</i>เพื่อทำท่าย่อ กด<i>ปุ่มเปิดใช้งานความสามารถ</i>อีกครั้งขณะย่อเพื่อยืนขึ้น <b>เดอะพิก</b>จะเคลื่อนที่ได้ช้าลงในขณะย่อ <b>เดอะพิก</b>จะได้รับเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>ในขณะย่อ<br><br><b>การโจมตีพิเศษ: ลอบโจมตี</b><br>กด<i>ปุ่มโจมตี</i>ค้างไว้ในขณะย่อตัวเพื่อพุ่งเข้า<b>ลอบโจมตี</b><br><br><span class=\\"FlavorText\\">\\"เธอจะให้ฉันทุกสิ่งทุกอย่าง เซลล์ทุกเซลล์ในร่างกายเธอ สัญลักษณ์บนแขนของเธอนั้นมาจากชีวิตอื่น เราจะทิ้งชีวิตนั้นไป เมื่อเธอเดินมาตามทางที่ไม่มีวันหวนกลับ เข้าใจใช่มั้ย?\\" -การล้างบาปของจิ๊กซอว์</span>","name":"การล้างบาปของจิ๊กซอว์","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"ด้วยเวลานับแรมปีที่ทดลองกับยาสลบและยาคลายกล้ามเนื้อ เดอะคลาวน์ก็ได้พัฒนาน้ำยาและสูตรอันทรงประสิทธิภาพขึ้นมาได้ เขาใช้ยาบำรุงส่งท้ายอันเป็นของโปรดของตนที่ได้ผลอย่างมากในการทำให้เหยื่อมากมายติดพิษแล้วจับตัวไป ยาแก้พิษส่งท้ายตัวที่ใช้แก้กันก็ให้ผลที่เป็นประโยชน์เช่นกัน<br><br>แตะ<i>ปุ่มเปิดใช้งานความสามารถ</i>เพื่อสลับระหว่าง<b>ยาบำรุงส่งท้าย</b>และ<b>ยาแก้พิษส่งท้าย</b> แตะหรือกด<i>ปุ่มพลัง</i>ค้างแล้วปล่อยเพื่อขว้างขวด<br><br>กดปุ่ม<i>เปิดใช้งานความสามารถ</i>ค้างเพื่อเติมขวด<br><br><b>ความสามารถพิเศษ: ยาบำรุงส่งท้าย</b><br>เมื่อตกกระทบขวดจะแตกออกแล้วปล่อยควันแก๊สสีม่วงออกมาทำให้ผู้รอดชีวิต<b>ติดพิษ</b> ผู้รอดชีวิตที่<b>ติดพิษ</b>จะมีการมองเห็นผิดปกติ ความเร็วการเคลื่อนที่ลดลง และไออย่างควบคุมไม่ได้อยู่เป็นเวลา 2 วินาที<br><br><b>ความสามารถพิเศษ: ยาแก้พิษส่งท้าย</b><br>เมื่อตกกระทบขวดจะแตกออกแล้วปล่อยควันควันสีเทาซึ่งจะเปลี่ยนเป็นสีเหลืองเมื่อทำงานออกมา เดอะคลาวน์และผู้รอดชีวิตคนใดที่เข้าไปใน<b>ควันยาแก้พิษที่ทำงานอยู่</b>จะได้รับโบนัสความเร็วเคลื่อนที่ 10% เป็นเวลา 5 วินาที ผู้รอดชีวิตที่<b>ติดพิษ</b>แล้วเข้าไปใน<b>ควันยาแก้พิษ</b>จะหายติดพิษ","name":"ยาบำรุงส่งท้าย","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"เดอะสปิริตสามารถใช้พลังการหลอกหลอนของยามาโอกะเพื่อเข้าสู่โลกทิพย์แล้วปรากฏตัวขึ้นอีกครั้งในสถานที่ใหม่<br><li>แตะปุ่มพลังค้างไว้เพื่อชาร์จ เดอะสปิริตจะออกจากร่างเนื้อแล้วทิ้ง \\"คราบ\\" เอาไว้กับที่</li><br>ในขณะที่การหลอกหลอนของยามาโอกะเปิดใช้งานอยู่:<li>เดอะสปิริตจะเดินทางข้ามมิติไปยังสถานที่ใหม่ได้อย่างอิสระด้วยการเคลื่อนที่อย่างรวดเร็วยิ่งขึ้นเป็นระยะเวลาสั้นๆ แต่การเคลื่อนที่ก็ยังคงจำกัดอยู่ในสภาพแวดล้อมและสิ่งรอบกาย</li><li>เดอะสปิริตจะออกจากโลกแห่งวัตถุพร้อมหนีพ้นสายตาของผู้รอดชีวิตทั้งหมดไปได้ แต่ยังสามารถสัมผัสถึงรอยขีดข่วนที่เหล่าผู้รอดชีวิตทิ้งไว้ตามสิ่งแวดล้อมได้เช่นเดิม</li><li>เดอะสปิริตจะส่งเสียงใบ้ถึงตำแหน่งปัจจุบันของตัวเอง</li><li>เมื่อพลังสิ้นสุดลง เดอะสปิริตจะคงการเร่งความเร็วไว้เป็นช่วงเวลาสั้นๆ ส่วนคราบก็จะจางหายไป</li><br>การใช้งานการหลอกหลอนของยามาโอกะจะทำให้เดอะสปิริตใช้แถบพลังไปจนหมด แถบพลังจะเติมจนเต็มขึ้นเองเมื่อเวลาผ่านไป และแถบพลังต้องเต็มก่อนจึงจะเปิดใช้งานได้อีกครั้ง","name":"การหลอกหลอนของยามาโอกะ","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"พวกเขาเป็นเพียงกลุ่มเพื่อนธรรมดาๆ จนกระทั่งได้พบกับแฟรงค์ ผู้ที่เปลี่ยนก๊วนนี้ให้กลายเป็นลีเจียน ตอนนี้ทุกคนในกลุ่มล้วนมีพลังจากอิสรภาพอันบ้าคลั่งและแสนเร้าใจโดยไม่ต้องทำตามกฎเกณฑ์อื่นใดนอกจากกติกาของตนเอง<br><br><b>บ้าดีเดือด</b><br>เริ่มใช้<b>บ้าดีเดือด</b>เพื่อวิ่งด้วยความเร็วสูงพร้อมโจมตีผู้รอดชีวิตหลายรายอย่างต่อเนื่อง เมื่อเกจพลังเต็ม ให้กด<i>ปุ่มพลัง</i>เพื่อเริ่มต้น<b>บ้าดีเดือด</b> ขณะที่<b>บ้าดีเดือด</b>กำลังทำงานอยู่นั้น <b>เดอะลีเจียน</b>จะเคลื่อนที่อย่างรวดเร็วยิ่งขึ้น พร้อมทั้งยังเข้าใช้งานความสามารถเพิ่มเติม ได้แก่: การ<b>กระโดดข้ามแท่นไม้</b>และ<b>เชือดคุ้มคลั่ง</b><br><br><b>ความสามารถพิเศษ: กระโดดข้ามแท่นไม้</b><br>กด<i>ปุ่มการกระทำ</i>ขณะที่<b>บ้าดีเดือด</b>กำลังทำงานเพื่อ<b>กระโดดข้ามแท่นไม้</b>ที่วางทิ้งไว้<br><br><b>การโจมตีพิเศษ: เชือดคุ้มคลั่ง</b><br>กด<i>ปุ่มโจมตี</i>ขณะที่<b>บ้าดีเดือด</b>กำลังทำงานเพื่อใช้<b>เชือดคุ้มคลั่ง</b> การตีผู้รอดชีวิตด้วย<b>เชือดคุ้มคลั่ง</b>จะทำให้ผู้รอดชีวิตนั้นตกอยู่ในสถานะบาดเจ็บพร้อมติดเอฟเฟกต์สถานะ<b>แผลลึก</b> เกจพลังของเดอะลีเจียนจะเติมเต็มอีกครั้ง และผู้รอดชีวิตทุกคนที่อยู่ภายในรัศมีความน่ากลัวแต่ไม่ติดเอฟเฟกต์สถานะ<b>แผลลึก</b>สามารถบ่งบอกได้ด้วยสัญชาตญาณฆาตกร หากผู้รอดชีวิตติดเอฟเฟกต์สถานะ<b>แผลลึก</b>อยู่แล้ว <b>บ้าดีเดือด</b>จะสิ้นสุดลงทันทีโดยไม่เกิดผลใดๆ","name":"บ้าดีเดือด","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"อาการของเธอย่ำแย่ลงทุกทีเมื่อโรคระบาดลุกลามไปทั่วร่างกาย นิ้วเท้าเปลี่ยนเป็นสีดำ มีเนื้องอกผุดขึ้นทั่วลำคอ และหลอดอาหารก็เต็มไปด้วยอาเจียนที่เป็นเลือด<br><br><b>การชำระมลทินต่ำช้า</b><br>ทำให้ผู้รอดชีวิตและวัตถุตามจุดต่างๆ ติดเชื้อด้วย<b>การชำระมลทินต่ำช้า</b>จนเกิดเป็นวัฏจักรแห่งโรคร้ายชั่วนิรันดร์ กด<i>ปุ่มพลัง</i>ค้างไว้เพื่อชาร์จ<b>การชำระมลทินต่ำช้า</b> แล้วจึงปล่อยมือเพื่อให้น้ำดีติดเชื้อพุ่งกระจายออกมา เมื่อสัมผัสตัวผู้รอดชีวิตจะทำให้เกิดการติดเชื้อ และวัตถุตามจุดต่างๆ จะติดเชื้อเป็นระยะเวลาสั้นๆ เมื่อสัมผัสกับน้ำดี โดยผู้รอดชีวิตที่ดำเนินการกับวัตถุดังกล่าวก็จะติดเชื้อไปด้วยเช่นกัน<br><br>เมื่อตัวระบุการติดเชื้อเต็ม ผู้รอดชีวิตจะตกอยู่ในสถานะบาดเจ็บ ติดเอฟเฟกต์สถานะ<b>ผุพัง</b> พร้อมกับอาเจียนออกมาเป็นระยะ<br><br><b>ความสามารถพิเศษ: สูบการปนเปื้อน</b><br>ผู้รอดชีวิตที่ติดเชื้อสามารถฟื้นฟูพลังชีวิตให้กลับมาเต็มอีกครั้งพร้อมรักษาการติดเชื้อได้โดยชะล้างที่<i>สระแห่งการอุทิศตัว</i> การกระทำนี้จะทำให้สระปนเปื้อน ซึ่ง<b>เดอะเพลก</b>สามารถสูบเอาสิ่งปนเปื้อนนั้นมาเพิ่มพลังการชำระมลทินของตนได้ กด<i>ปุ่มการกระทำ</i>ค้างไว้ขณะยืนอยู่ข้าง<i>สระแห่งการอุทิศตัว</i>ที่ปนเปื้อนเพื่อเปลี่ยน<b>การชำระมลทินต่ำช้า</b>ให้เป็น<b>การชำระมลทินปนเปื้อน</b> การกระทำนี้จะกำจัดการปนเปื้อนออกไปจากสระ<br><br><b>การโจมตีพิเศษ: การชำระมลทินปนเปื้อน</b><br>หลังใช้งานความสามารถ<b>สูบการปนเปื้อน</b>แล้ว <b>การชำระมลทินต่ำช้า</b>จะถูกแทนที่ด้วย<b>การชำระมลทินปนเปื้อน</b>เป็นระยะเวลาสั้นๆ โดย<b>การชำระมลทินปนเปื้อน</b>นั้นจะสร้างความเสียหายแก่ผู้รอดชีวิตที่สัมผัสกับน้ำดีได้ทันที แต่ไม่ทำให้ผู้รอดชีวิตหรือวัตถุตามจุดต่างๆ เกิดการติดเชื้ออีกต่อไป","name":"การชำระมลทินต่ำช้า","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>เดอะโกสต์เฟส</b>จะศึกษาแล้วบันทึกพฤติกรรมเหยื่อของตนอย่างละเอียดเป็นเวลาหลายสัปดาห์ เวลาความกระหายเลือดพุ่งพล่านขึ้นมาเมื่อไหร่ เขาก็รู้ว่าจะต้องไปจัดการที่ไหนและทำอย่างไร<br><br><b>ผ้าคลุมราตรี</b><br>กด<i>ปุ่มพลัง</i>เพื่อเปิดใช้งาน<b>ผ้าคลุมราตรี</b>เมื่อเกจพลังเต็มแล้ว <b>เดอะโกสต์เฟส</b>จะได้รับเอฟเฟกต์สถานะ<b>ตรวจไม่พบ</b>ในขณะที่<b>ผ้าคลุมราตรี</b>ทำงานอยู่ <i>การโจมตีพื้นฐาน</i>จะทำให้สูญเสียเกจพลังไปจนหมดพร้อมทั้งปิดการทำงานของ<b>ผ้าคลุมราตรี</b>ด้วยเช่นกัน<br><b>เปิดเผย</b><br>ผู้รอดชีวิตที่อยู่ในระยะใกล้กับ<b>เดอะโกสต์เฟส</b>สามารถ<i>เปิดเผย</i>ตัวเดอะโกสต์เฟสได้โดยมองไปในทิศทางของของมันเป็นเวลาสั้นๆ การ<i>เปิดเผย</i>ที่สำเร็จจะทำให้<b>เดอะโกสต์เฟส</b>สูญเสียเกจพลังไปจนหมด พร้อมปิดการทำงานของ<b>ผ้าคลุมราตรี</b>โดยอัตโนมัติ ผู้รอดชีวิตที่<i>เปิดเผย</i>ตัว<b>เดอะโกสต์เฟส</b>จะถูก<i>สัญชาตญาณฆาตกร</i>ระบุตำแหน่งได้เป็นระยะเวลาสั้นๆ<br><br><b>ความสามารถพิเศษ: สะกดรอยตาม</b><br>กด<i>ปุ่มพลัง</i>ค้างไว้เพื่อสะกดรอยตามผู้รอดชีวิตในขณะที่<b>ผ้าคลุมราตรี</b>กำลังทำงาน กด<i>ปุ่มพลัง</i>ค้างไว้ขณะอยู่ในที่กำบังเพื่อเอนตัวออกมาแล้วสะกดรอยตามได้อย่างรวดเร็วยิ่งขึ้น การสะกดรอยตามผู้รอดชีวิตจนสำเร็จจะ<i>หมายหัว</i>เป้าหมายดังกล่าวพร้อมทำให้<i>เป้าหมาย</i>ติดเอฟเฟกต์สถานะ<b>ปลอดกำบัง</b>เป็นระยะเวลาสั้นๆ<br><br><b>ความสามารถพิเศษ: ย่อ</b><br>กดปุ่มเปิดใช้งานความสามารถเพื่อย่อตัว กดอีกครั้งขณะกำลังย่อตัวเพื่อยืนขึ้น ในขณะย่อ <b>เดอะโกสต์เฟส</b>จะเคลื่อนที่ด้วยความเร็วที่ลดลง<br><br><span class=\\"FlavorText\\">“ไม่ต้องสนใจผมหรอก นั่นแหละ ทำต่อไปนะ เยี่ยมเลย นั่นแหละภาพของคุณที่ผมจะจดจำเอาไว้” –เดอะโกสต์เฟส</span>เดอะโกสต์เฟส","name":"ผ้าคลุมราตรี","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"พลังต่างมิติที่ไม่รู้จักเอ่อล้นไปทั่วร่างอสูรเดโมกอร์กอน แผ่นดินแยกออกเป็นเสี่ยงๆ แล้วสูบเอาเจ้าอสูรนั้นหายไปทั้งตัว<br><br><b>จากห้วงนรก</b><br>กด<i>ปุ่มพลัง</i>ค้างไว้เพื่อชาร์จ<b>จากห้วงนรก</b>จนเต็มแล้วเปิดใช้งาน ผู้รอดชีวิตทุกคนที่อยู่ในระยะใกล้กับประตูมิติที่เปิดใช้งานสามารถบ่งบอกได้ด้วยสัญชาตญาณฆาตกร<br><br><b>การโจมตีพิเศษ: ฉีกกระชาก</b><br>กด<i>ปุ่มโจมตี</i>ขณะกำลังชาร์จหรือกำลังกด<b>จากห้วงนรก</b>อยู่เพื่อพุ่งตรงไปข้างหน้าพร้อมปลดปล่อยแรงเชือดสุดอำมหิต<br><br><b>ความสามารถพิเศษ: ประตูมิติ</b><br>กด<i>ปุ่มเปิดใช้งานความสามารถ</i>เพื่อเปิดประตูมิติขึ้นบนพื้นเบื้องหน้าตัวคุณ<br><b>ข้ามโลกกลับด้าน</b><br>ขณะยืนอยู่บนประตูมิติที่เปิดอยู่พร้อมทั้งมีประตูมิติอีกจุดที่ไฮไลท์เอาไว้ ให้กด<i>ปุ่มเปิดใช้งานความสามารถ</i>อีกครั้งเพื่อเดินทางผ่านโลกกลับด้านแล้วโผล่กลับคืนมาที่ประตูมิติเป้าหมาย<br><b>ประตูมิติที่เปิดใช้งาน</b><br>ประตูมิติจะถูก \'เปิดใช้งาน\' เมื่อมีการเดินทางผ่านเป็นครั้งแรก มีเพียงประตูมิติที่เปิดใช้งานแล้วเท่านั้นที่ผู้รอดชีวิตสามารถปิดผนึกได้ โดยออร่าของประตูมิติที่เปิดใช้งานจะไฮไลท์เป็นสีเหลือง","name":"จากห้วงนรก","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"ความปรารถนาที่จะทำลายล้างสายเลือดผู้อ่อนแอกว่าถือกำเนิดเป็นพลังขึ้นมาได้จริง<br><br><b>โทสะแห่งยามาโอกะ</b><br>ดูดพลังจากลูกแก้วโลหิตที่ศัตรูผู้ได้รับบาดเจ็บทิ้งเอาไว้ กด<i>ปุ่มพลัง</i>ค้างไว้เพื่อดูดพลังจากลูกแก้วโลหิตตามจุดต่างๆ จนเกจพลังเต็ม เมื่อเกจพลังเต็มแล้ว ให้กด<i>ปุ่มเปิดใช้งานความสามารถ</i>ค้างไว้เพื่อเริ่ม<b>โลหิตพิโรธ</b><br><b>โลหิตพิโรธ:</b>\\nในขณะที่<b>โลหิตพิโรธ</b>ทำงานอยู่ <b>โอนิ</b>จะมีความรุนแรงถึงตายและสามารถใช้งานความสามารถเพิ่มเติมได้ คือ<b>อสูรพุ่งถลัน</b>และ<b>อสูรจู่โจม</b><br><br><b>ความสามารถพิเศษ: อสูรพุ่งถลัน</b><br>กด<i>ปุ่มพลัง</i>ค้างไว้ในขณะที่<b>โลหิตพิโรธ</b>ทำงานอยู่เพื่อใช้งาน<b>อสูรพุ่งถลัน</b> ความสามารถนี้ทำให้<b>โอนิ</b>สามารถเคลื่อนที่ไปในระยะทางไกลได้ด้วยความเร็วสูง<br><br><b>ความสามารถพิเศษ: อสูรจู่โจม</b><br>กด<i>ปุ่มโจมตี</i>ค้างไว้ในขณะที่<b>โลหิตพิโรธ</b>ทำงานอยู่เพื่อใช้งาน<b>อสูรจู่โจม</b>ไปยังทิศทางที่หันหน้าเข้าหา <b>อสูรจู่โจม</b>มีระยะพุ่งโจมตีที่ไกลเป็นพิเศษ และการโจมตีที่สำเร็จนั้นจะทำให้ผู้รอดชีวิตที่แข็งแรงดีตกอยู่ในสถานะใกล้ตายโดยทันที","name":"โทสะแห่งยามาโอกะ","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"ความฉลาดของเดอะเดธสลิงเกอร์ทำให้เขามีความสามารถในการดึงเหยื่อเข้ามาได้ด้วยสิ่งประดิษฐ์พิเศษ ปืนไรเฟิลที่ได้รับการปรับแต่งผสมผสานที่แทนกระสุนธรรมดาด้วยฉมวกแหลมคมติดโซ่<br><br><b>พระผู้ไถ่</b><br>กด<i>ปุ่มพลัง</i>ค้างเพื่อเล็ง กด<i>ปุ่มโจมตี</i>เพื่อยิงฉมวกที่สามารถปักเข้าไปในตัวผู้รอดชีวิต ทำให้พวกเขาถูกสาวเข้ามาใกล้ได้ <b>เดอะเดธสลิงเกอร์</b>ไม่ให้พวกเขาทำตามใจ<br><b>ดึง:</b><br>เมื่อผู้รอดชีวิตถูกแทงด้วย<b>พระผู้ไถ่</b> กด<i>ปุ่มพลัง</i>ค้างเพื่อดึงพวกเขาเข้ามาหาคุณ ผู้รอดชีวิตอาจดิ้นรนขัดขืนต่อโซ่หรือใช้สภาพแวดล้อมมาทำให้โซ่ขาด การทำเช่นนั้นจะทำให้<b>เดอะเดธสลิงเกอร์</b>ติดสตันในช่วงสั้นๆ พร้อมกับทำให้ผู้รอดชีวิตตกอยู่ในสภาวะบาดเจ็บและทำให้เกิดเฟเฟกต์สถานะ<b>แผลลึก</b> การใช้<i>การโจมตีพื้นฐาน</i>ใส่ผู้รอดชีวิตที่ฉมวกปักคาอยู่จะทำให้โซ่ขาดโดยไม่มีผลเสียต่อ<b>เดอะเดธสลิงเกอร์</b>หรือผู้รอดชีวิต <i>การโจมตีพื้นฐาน</i>ใส่ผู้รอดชีวิตที่ฉมวกปักคาและแข็งแรงอยู่ได้สำเร็จจะทำให้เกิดเอฟเฟกต์สถานะ<b>แผลลึก</b>ด้วยเช่นกัน<br><b>รีโหลด:</b><br>ต้องรีโหลด<b>พระผู้ไถ่</b>ทุกครั้งหลังยิงจึงจะยิงได้อีกครั้ง กด<i>ปุ่มเปิดใช้งานความสามารถ</i>ค้างเพื่อรีโหลด<b>พระผู้ไถ่</b>","name":"พระผู้ไถ่","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"เปิดประตูแห่งความทุกข์ทรมานและจงถูกตัดสิน! มีดยักษ์แยกผืนดิน สิ่งก่อสร้างจากนรกผุดขึ้นมาพลางแพร่กระจายความทุกข์ทรมานสาหัสแก่ใครก็ตามที่เข้าใกล้<br><br><b>พิธีกรรมพิพากษา</b><br>กด<i>ปุ่มพลัง</i>ค้างเพื่อเปิดใช้งาน จากนั้นเดินไปทางใดก็ได้เผื่อสลักเสลาริ้วรอยลงบนพื้น<br><br>ผู้รอดชีวิตที่เดินหรือวิ่งไปเหยียบรอยเข้าจะทำให้เกิด<i>สัญชาตญาณฆาตกร</i> และติดเอฟเฟกต์สถานะ<i>การทรมาน</i> เมื่อผู้รอดชีวิตที่ติดเอฟเฟกต์สถานะ<i>การทรมาน</i>อยู่ในสภาวะใกล้ตายอาจถูกส่งไปยัง<b>กรงแห่งการไถ่โทษ</b>ได้<br><br><b>การโจมตีพิเศษ: บทลงโทษผู้ต้องสาป</b><br>กด<i>ปุ่มโจมตี</i>ขณะ<b>พิธีกรรมพิพากษา</b>กำลังทำงานเพื่อใช้<b>บทลงโทษผู้ต้องสาป</b> ความสามารถนี้จะปลดปล่อยคลื่นพลังทำความเสียหายให้ผู้รอดชีวิตที่โดนคลื่นพลังได้<br><br><b>ความสามารถพิเศษ: กรงแห่งการไถ่โทษ</b><br>กด<i>ปุ่มเปิดใช้งานความสามารถ</i>ขณะยืนคร่อมผู้เล่นใกล้ตายที่ติดเอฟเฟกต์สถานะ<i>การทรมาน</i>เพื่อส่งพวกเขาไปยัง<b>กรงแห่งการไถ่โทษ</b> ผู้รอดชีวิตใน<b>กรงแห่งการไถ่โทษ</b>จะถูกบูชายัญแก่เอนทิตีได้เหมือนกับถูกแขวนตะขอ ระหว่างช่วงที่สองของพิธีอัญเชิญ พวกเขาจะถูกบังคับให้ตรวจสอบทักษะให้เสร็จสิ้นเพื่อถ่วงเวลาเอนทิตี<br><br>ผู้รอดชีวิตที่ได้รับการช่วยเหลือหรือทำการช่วยเหลือผู้รอดชีวิตคนอื่นจาก<b>กรงแห่งการไถ่โทษ</b>จะถอนสถานะ<i>การทรมาน</i>ออก<br><br><b>ความสามารถพิเศษ: คำพิพากษาสุดท้าย</b><br>กด<i>ปุ่มเปิดใช้งานความสามารถ</i>ขณะยืนคร่อมผู้เล่นใกล้ตายที่ติดเอฟเฟกต์สถานะ<i>การทรมาน</i>ที่เข้าถึงช่วงดิ้นรนบนตะขอหรืออยู่ในกรงเพื่อประหารพวกเขา","name":"พิธีกรรมพิพากษา","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"เซรุ่มตุ่มหนองหลั่งไหลเข้าสู่เส้นเลือดดำของเขา กัดกินทั้งร่างกายและจิตใจ กระนั้นก็ยังมอบความสามารถทางกายภาพอันผิดธรรมชาติให้<br><br><b>ความสามารถพิเศษ: พุ่ง</b><br>กด<i>ปุ่มพลัง</i>เพื่อ<b>พุ่ง</b>ไปข้างหน้าอย่างรวดเร็ว การทำเช่นนั้นจะใช้โทเคน<b>พุ่ง</b> ขณะที่<b>พุ่ง</b> เดอะไบลท์จะโจมตีไม่ได้<br><br><b>พุ่ง</b>ใส่กำแพงหรือสิ่งกีดขวางที่อยู่รอบๆ เพื่อ<b>กระแทก</b>มัน ถ้า<b>พุ่ง</b>ไม่ชนกำแพงหรือสิ่งกีดขวาง หรือเดอะไบลท์ใช้โทเคน<b>พุ่ง</b>หมดแล้ว เขาจะเข้าสู่สภาวะหมดแรงในช่วงสั้นๆ แล้วเริ่มรีชาร์จโทเคน<br><br><b>การโจมตีพิเศษ: พุ่งมรณะ</b><br>หลังจาก<b>กระแทก</b> กด<i>ปุ่มพลัง</i>เพื่อใช้<b>พุ่งมรณะ</b> การทำเช่นนั้นจะใช้โทเคน<b>พุ่ง</b> <b>พุ่งมรณะ</b>มีลักษณะแบบเดียวกับ<b>พุ่ง</b> เว้นแต่เมื่อใช้แล้วเดอะไบลท์จะโจมตีได้ด้วยการกด<i>ปุ่มโจมตี</i>","name":"ความเสื่อมทรามที่พังทลาย","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"แม้ถูกพันธนาการไว้ด้วยเลือดและความเจ็บปวดตลอดกาล เดอะทวินส์ก็รับพลังที่ทำให้แยกร่างออกจากกันได้ พี่สาวกับน้องชายช่วยกันล่า ทำให้คุกคามผู้รอดชีวิตได้เป็นสองเท่า<br><br><b>ความสามารถพิเศษ: พันธะเลือด</b><br>กด<i>ปุ่มพลัง</i>ค้างเพื่อปล่อย<b>วิกตอร์</b> สลับการควบคุมระหว่าง<b>ชาร์ลอตต์</b>และ<b>วิกตอร์</b>ด้วยการแตะ<i>ปุ่มความสามารถ</i><br><br>เมื่อถูกแยกออกมา <b>วิกตอร์</b>จะใช้<b>สัญชาติญาณนักฆ่า</b>เปิดเผยให้<b>ชาร์ลอตต์</b>เห็นผู้รอดชีวิตที่เดินหรือวิ่งอยู่ใกล้ๆ เขา ผู้รอดชีวิตที่ได้ยินเสียงกรีดร้องของ<b>วิกตอร์</b>จะจิตใจอ่อนแอ อย่างไรก็ตาม ผู้รอดชีวิตทำลาย<b>วิกตอร์</b>ได้ขณะที่<b>ชาร์ลอตต์</b>อยู่ใต้การควบคุม<br><br>หากถูกขยี้ เมื่อเวลาผ่านไประยะหนึ่ง <b>วิกตอร์</b>จะกลับไปงอกบนตัว<b>ชาร์ลอตต์</b><br><br><b>การโจมตีพิเศษ: ตะครุบ</b><br>ขณะควบคุม<b>วิกตอร์</b> กด<i>ปุ่มความสามารถ</i>ค้างเพื่อชาร์จ<b>ตะครุบ</b>แล้วแตะ<i>ปุ่มโจมตี</i>เพื่อใช้<br><br>การ<b>ตะครุบ</b>ได้สำเร็จจำสร้างความเสียหายให้ผู้ชีวิต หากผู้รอดชีวิตพลังชีวิตเต็ม <b>วิกตอร์</b>จะเกาะติดบนตัวพวกเขา <b>สัญชาตญาณนักฆ่า</b>จะทำงานและเปิดเผยตำแหน่งผู้รอดชีวิตทุกคนที่อยู่ใกล้ ขณะที่เกาะ ผู้รอดชีวิตจะติดเอฟเฟกต์สถานะ<b>ผุพัง</b>, <b>ไม่รู้ตัว</b> และ<b>ทุพพลภาพ</b> พวกเขาจะเข้าตู้ล็อกเกอร์หรือหนีออกไปทางประตูทางออกไม่ได้ ผู้รอดชีวิตขยี้<b>วิกตอร์</b>ที่เกาะติดได้ด้วยการทำแอ็กชัน<b>แกะออก</b>ให้สำเร็จ<br><br>หาก<b>วิกตอร์</b><b>ตะครุบ</b>พลาด เขาจะอ่อนแอชั่วคราวและจะถูกผู้รอดชีวิตทำลายได้ หากวิกเตอร์กระโจนลงบนสิ่งกีดขวางที่สูงกว่าตัวเขา เขาจะถูกทำลาย","name":"พันธะเลือด","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>ด้วยทักษะอันน่าตกตะลึงที่ขัดเกลาผ่านการฝึกฝนตลอดชีวิต ฮัคจีอุนปลดปล่อยใบมีดดุจห่าฝนด้วยความเร็วประหนึ่งปืนกล</i><br><br><b>ผู้ยับยั้งการแสดง</b><br><br>เริ่มเกมพร้อม<b>มีด 60 เล่ม</b>กด<i>ปุ่มพลัง</i>ค้างเพื่อสะสมพลังเข้าสู่สถานะปา<br><br>เมื่ออยู่ในสถานะปา ให้แตะ<i>ปุ่มโจมตี</i>เพื่อปามีดหนึ่งเล่ม หรือกด<i>ปุ่มโจมตี</i>ค้างเพื่อปามีดดุจห่าฝน การปามีดรัวๆ จะเพิ่มอัตราการปาและการควบคุมไปพร้อมลดความเร็วการเคลื่อนที่ เติมมีดได้ที่ตู้ล็อกเกอร์<br><br><b>มิเตอร์การฉีกขาด:</b> <b>มิเตอร์การฉีกขาด</b>ของผู้รอดชีวิตจะเพิ่มขึ้นทุกครั้งที่โดนมีด เมื่อมิเตอร์เต็มผู้เล่นจะเสียสถานะร่างกายไปหนึ่งขั้น ไม่ว่าจะเป็นบาดเจ็บหรือล้มลงคลานก็ตาม<br><br>ถ้าไม่โดนมีดมาเป็นระยะเวลาสั้นๆ แล้วมิเตอร์การฉีกขาดของผู้รอดชีวิตจะลดลงอย่างช้าๆ การโจมตีพื้นฐานโดนผู้รนอดชีวิตจะลดมิเตอร์การฉีกขาดของพวกเขาในทันที<br><br><b>ความสามารถพิเศษ: อีเวนท์หลัก</b><br>มีดแต่ละเล่มที่โดนจะเติม<b>มิเตอร์อีเวนท์</b> เมื่อมิเตอร์เต็มแล้วสามารถใช้<b>อีเวนท์หลัก</b>ด้วยการกด<i>ปุ่มความสามารถ</i> ขณะที่อยู่ในโหมดนี้ เดอะทริกสเตอร์จะปามีดอย่างไม่จำกัดจำนวนโดยอัตโนมัติตลอดเวลาของ<b>อีเวนท์หลัก</b> อัตราการปาก็เพิ่มขึ้นอย่างเห็นได้ชัด และความเร็วเคลื่อนที่ก็ไม่ช้าลงหลังจากการปาแต่ละครั้งด้วย สามารถยกเลิก<b>อีเวนท์หลัก</b>ได้ด้วยการกด<i>ปุ่มความสามารถ</i> ซึ่งเมื่อกดแล้วจะรีเซ็ต<b>มิเตอร์อีเวนท์</b>ไปเป็น 0 และเริ่มนับคูลดาวน์ของ<b>ผู้ยับยั้งการแสดง</b>","name":"ผู้ยับยั้งการแสดง","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"ไวรัสที่ทำให้เกิดการกลายพันธุ์อย่างรุนแรงและติดต่อสู่ผู้อื่นได้ มันมีผลให้ความก้าวร้าวและความแข็งแกร่งในตัวเดอะเนเมซิสสูงขึ้น<br><br><b>การโจมตีพิเศษ: หนวดพิฆาต</b><br>กดปุ่มพลังค้างเพื่อชาร์จการโจมตี เมื่อชาร์จแล้วให้แตะปุ่มโจมตีเพื่อปล่อย<b>หนวดพิฆาต</b> การใช้<b>หนวดพิฆาต</b>โจมตีโดนผู้รอดชีวิตจะทำให้พวกเขาติดเอฟเฟกต์สถานะ<b>ติดเชื้อ</b> และจะเพิ่ม<b>อัตราการกลายพันธุ์</b>ของคุณ ถ้าผู้รอดชีวิต<b>ติดเชื้อ</b>อยู่แล้ว <b>หนวดพิฆาต</b>จะทำความเสียหายแก่พลังชีวิตของพวกเขา<br><br>ผู้รอดชีวิตรักษา<b>การติดเชื้อ</b>ได้โดยใช้<b>วัคซีน</b>ที่พบใน<b>กล่องเครื่องใช้</b>ของตัวเองและผู้รอดชีวิตคนอื่น <b>วัคซีน</b>มีจำนวนจำกัด หลังจากใช้<b>วัคซีน</b>แล้ว สัญชาตญาณฆาตกรจะเผยตำแหน่งของผู้รอดชีวิต<br><br><b>อัตราการกลายพันธุ์:</b> พลังของคุณขยายการเติบโตให้<b>อัตราการกลายพันธุ์</b>ของคุณ เมื่อถึง <b>อัตราการกลายพันธุ์ 2</b> <b>หนวดพิฆาต</b>จะทำลายแท่นไม้และกำแพงที่พังได้ได้ และเมื่อถึง<b>อัตราการกลายพันธุ์ 3</b> ระยะของ<b>หนวดพิฆาต</b>จะเพิ่มขึ้น ไอคอน T-Virus จะแสดงถึงเลเวลปัจจุบันของ<b>อัตราการกลายพันธุ์</b><br><br><b>ศัตรูพิเศษ: เหล่าซอมบี้</b><br>เมื่อ<b>ซอมบี้</b>ตัวหนึ่งจู่โจมผู้รอดชีวิตคนหนึ่ง พวกมันจะทำให้พวกเขาติดสถานะ<b>ติดเชื้อ</b> ถ้าผู้รอดชีวิต<b>ติดเชื้อ</b>อยู่แล้ว ก็จะเกิดความเสียหายกับพลังชีวิตของพวกเขา<br><br><b>หนวดพิฆาต</b>ทำลาย<b>ซอมบี้</b>เพื่อเพิ่ม<b>อัตราการกลายพันธุ์</b>ของคุณได้ และผู้รอดชีวิตก็ใช้แท่นไม้ทำลายพวกมันได้ <b>ซอมบี้</b>ที่ถูกทำลายจะเกิดใหม่ในเวลาไม่นาน","name":"T-VIRUS","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/th/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/th/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"มอบแต้มเลือด <b>100%</b> ในทุกหมวดหมู่สำหรับผู้เล่นทุกคนในเกมนี้<br><li>ทับซ้อน</li>","name":"ป้ายปาร์ตี้เลือดสาด","flavor":"\\"เครื่องเตือนใจถึงเวลาอันแสนดีเลือดสาดที่ผู้คนมาพร้อมใจด้วยกัน แต่กลับไปด้วยเสียงหวีดร้อง\\"","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"หมอกมืด<b>เบาบางลงเล็กน้อย</b><br><li>ทับซ้อน</li>","name":"น้ำยาใส","flavor":"\\"หมอกมืดคืบคลานเข้ามา ดักจับทุกอย่างที่ขวางหน้าไม่มีทางวิ่ง ไม่มีทางหนี ไม่มีที่ให้หลบซ่อนยกเว้นในบ่อน้ำใส่ลึกเข้าไปในป่าทึบ\\" –สมุดลึกลับ","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"ทำให้หมอก<b>หนาขึ้นเล็กน้อย</b> <br><li>ทับซ้อน</li>","name":"น้ำยาเจือจาง","flavor":" \\"ฉันยืนแข็งทื่อท่ามกลางความเหน็บหนาวขณะที่ความตายเคลือบคลานเข้ามาทุกขณะ\\"","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"ทำให้หมอก<b>หนาขึ้นปานกลาง</b><br><li>ทับซ้อน</li>","name":"น้ำยาขุ่น","flavor":"\\"สายหมอกช่างน่าดึงดูด น่าหลงไหล ฉันทั้งรักและกลัวมันในเวลาเดียวกัน\\" - สมุดภาพของดอนน่า","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"ทำให้หมอกมีความ<b>หนาขึ้นอย่างมาก</b><br><li>ทับซ้อน</li>","name":"น้ำยามืดมน","flavor":"\\"สายหมอกป้องกันเราจากสัตว์ร้าย แต่มันเป็นยาพิษที่ครอบงำเราเข้าสู่ความมืดและความบ้าคลั่ง\\" - สมุดลึกลับ","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"ร้องขอให้เอนทีตีทำให้<b>แสงจันทร์มืดที่สุด</b>","name":"ช่อดอกไม้เดือนดับ ","flavor":"\\"กลับไปนอนดีกว่า คืนนี้ไร้ซึ่งดวงจันทร์แล้ว\\"","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"ร้องขอให้เอนทีตีทำให้<b>แสงจันทร์สลัว</b>","name":"ช่อดอกไม้จันทร์เสี้ยว","flavor":"\\"ดวงจันทร์ค่อยๆ เปลี่ยนเป็นรอยยิ้ม \'ไม่ต้องห่วง เราเก็บความลับของคุณไว้เป็นอย่างดี\' หรือมันแสยะยิ้มกันแน่นะ?\\"","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"ร้องขอให้เอนทีตีทำให้<b>แสงจันทร์สว่างขึ้น</b>","name":"ช่อดอกไม้จันทร์ครึ่งดวง","flavor":"\\"เผยแสงแห่งจันทรา ส่องลงมายังเหยื่อ\\"","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"ร้องขอให้เอนทีตีทำให้<b>แสงจันทร์สว่างที่สุด</b>","name":"ช่อดอกไม้เดือนเพ็ญ","flavor":"\\"เมื่อดวงจันทร์ขึ้น หมาป่าก็หอน เป็นสัญญาณเริ่มต้นของการไล่ล่า\\"","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"โอกาสในการถูกส่งไปยังที่ดินของตระกูลมัคมิลลัน<b>เพิ่มขึ้นเล็กน้อย</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"เอกสารบัญชีของมัคมิลลัน","flavor":"\\"เอกสารบัญชีแยกประเภทที่เลือนลางมีข้อมูลที่คลุมเครือยกเว้นสแตมป์ของมัคมิลลิน\\"","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"โอกาสในการถูกส่งไปยังที่ดินของตระกูลมัคมิลลัน<b>เพิ่มขึ้นอย่างมาก</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"เอกสารบัญชีลงลายมือชื่อ","flavor":"\\"เอกสารบัญชีที่เลือนลางกล่าวถึงอุปกรณ์ขุดเหมืองและการทำธุรกรรมอื่นๆ เซ็นโดยอาร์ชี มัคมิลลัน\\"","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"โอกาสในการถูกส่งไปยังที่ดินของตระกูลมัคมิลลัน<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"กระดูกนิ้วของมัคมิลลัน","flavor":"\\"โครงกระดูกของมัคมิลลันถูกค้นพบในชั้นใต้ดินของโรงเก็บของในเหมือง กระดูกขาของเขาแหลกเป็นชิ้นๆ พร้อมกับมีค้อนขุดเหมืองวางอยู่บนตักของเขา\\"","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"โอกาสในการถูกส่งไปยังลานเก็บของเก่าออโต้ฮาเว่น<b>เพิ่มขึ้นเล็กน้อย</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"ป้ายทะเบียนแหลกละเอียด","flavor":"\\"แผ่นโลหะสนิมเขรอะและหักงอ\\"","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"โอกาสในการถูกส่งไปยังลานเก็บของเก่าออโต้ฮาเว่น<b>เพิ่มขึ้นอย่างมาก</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"ป้ายทะเบียนเวอร์จิเนีย","flavor":"\\"ป้ายทะเบียนรถยนต์จากรัฐเวอร์จิเนีย\\"","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"โอกาสในการถูกส่งไปยังลานเก็บของเก่าออโต้ฮาเว่น<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"กุญแจของอาซารอฟ","flavor":"\\"กุญแจหักของยานพาหนะไม่ทราบยี่ห้อ พวงกุญแจที่แนบติดมาด้วยระบุชื่อเจ้าของเป็น เอ.อาซารอฟ \\"","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"โอกาสในการถูกส่งไปยังฟาร์มโคลด์วินด์<b>เพิ่มขึ้นเล็กน้อย</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"ป้ายปศุสัตว์หมายเลข 28","flavor":"\\"ป้ายติดหูสัตว์เปื้อนเลือดมีหมายเลข ‘28’ เขียนเอาไว้\\"","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"โอกาสในการถูกส่งไปยังฟาร์มโคลด์วินด์<b>เพิ่มขึ้นอย่างมาก</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"ป้ายปศุสัตว์โคลด์วินด์หมายเลข 81","flavor":"\\"ป้ายติดหูสัตว์เปื้อนเลือดมีชื่อ ‘ฟาร์มโคลด์วินด์’ และหมายเลข ‘81’ เขียนเอาไว้\\"","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"โอกาสในการถูกส่งไปยังฟาร์มโคลด์วินด์<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"จี้รูปหัวใจ","flavor":"\\"สร้อยคอกรอบรูปสีเงินทรงหัวใจ ภายในแกะสลักด้วยข้อความต่อไปนี้: ‘E+M’\\"","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"โอกาสในการถูกส่งไปยังสถานบำบัดโครตัส เพรนน์<b>เพิ่มขึ้นเล็กน้อย</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"บัตรผู้ป่วยจิตเวช","flavor":"\\"ตั๋วกระดาษขาดรุ่ยและเจือจางที่มีข้อมูลที่อ่านไม่ออก\\"","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"โอกาสในการถูกส่งไปยังสถานบำบัดโครตัส เพรนน์<b>เพิ่มขึ้นอย่างมาก</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"บัตรผู้ป่วยจิตเวชของ พี. เอลเลียต","flavor":"\\"ตั๋วกระดาษสีชมพูระบุชื่อ ฟิลิป เอลเลียต ซึ่งเป็นบุคคลที่จะถูกส่งไปยังที่นี่\\"","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"โอกาสในการถูกส่งไปยังสถานบำบัดโครตัส เพรนน์<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา","name":"ภาพถ่ายงานแต่งงานไหม้เกรียม","flavor":"\\"รูปภาพไหม้เกรียมของคู่รักคู่หนึ่งในงานแต่งงานของพวกเขา ใบหน้าที่ไหม้เกรียมและไม่สามารถระบุตัวตนได้\\"","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"โอกาสในการถูกส่งไปยังแฮดดอนฟิลด์<b>เพิ่มขึ้นเล็กน้อย</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"ใบปลิวเทศกาลเก็บเกี่ยว","flavor":"\\"ใบปลิวเทศกาลเก็บเกี่ยวของแฮดดอนฟิลด์ปี 78 มีตัวการ์ตูนรูปฟักทองขนาดใหญ่ที่อยู่ข้างหน้า \\"","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"โอกาสในการถูกส่งไปยังแฮดดอนฟิลด์<b>เพิ่มขึ้นอย่างมาก</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"ฝากระดานเก่าแก่","flavor":"\\"ฝากระดานไม้โอ๊คที่เน่าเปื่อยและขึ้นรามักจะเจอในบ้านส่วนใหญ่ที่แฮดดอนฟิลด์\\"","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"โอกาสในการถูกส่งไปยังแฮดดอนฟิลด์<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา","name":"กุญแจที่ดินสโตรด","flavor":"\\"กุญแจบ้านธรรมดา ป้ายห้อยกุญแจเขียนว่า \'ที่ดินแท้จริงของสโตรด\' มีที่อยู่เขียนด้วยลายมือว่า: \'45 แลมป์กิ้นเลน\'\\"","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"โอกาสในการถูกส่งไปยังบึงแบ็ควอเตอร์<b>เพิ่มขึ้นเล็กน้อย</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"มัดเชือกควันลุก","flavor":"\\" เศษเชือกทหารที่ไหม้เกรียมยังคงมีขวัญพวยพุ่งออกมา\\"","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"โอกาสในการถูกส่งไปยังบึงแบ็ควอเตอร์<b>เพิ่มขึ้นอย่างมาก</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"ป้ายต้อนรับไฟท่วม","flavor":"\\"ป้ายต้อนรับทำจากกระดานไม้ไซปรัสขัดเรียบด้วยน้ำ ป้ายดำเป็นตอตะโกและยังคงไหม้อยู่\\"","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"โอกาสในการถูกส่งไปยังบึงแบ็ควอเตอร์<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา","name":"หนังสือทำอาหารของคุณยาย","flavor":"\\"แฟ้มที่มีสูตรปรุงเนื้อคนแสนสยดสยองเช่นเนื้อแช่เย็นแสนนุ่มของคุณยาย\\"","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"โอกาสในการถูกส่งไปยังสถาบันรำลึกของเลรี<b>เพิ่มขึ้นเล็กน้อย</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"ใบรับรองเหตุฉุกเฉิน","flavor":"\\"สำเนาใบรับรองกระดาษคาร์บอนเหลืองที่ไว้รับผู้ป่วยเข้ากักตัวด่วนเพื่อรักษาฉุกเฉิน ข้อมูลที่คัดลอกมาเลือนจนอ่านไม่ออก\\"","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"โอกาสในการถูกส่งไปยังสถาบันรำลึกของเลรี<b>เพิ่มขึ้นอย่างมาก</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"รายงานการประเมินทางจิตเวช","flavor":"\\"รายงานทางจิตเวช ลงชื่อโดยเฮอร์แมน คาร์เตอร์ บรรยายถึงอาการความจำเสื่อมในคนไข้รายหนึ่ง และเสนอแนวทางรักษาขั้นต่อไป\\"","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"โอกาสในการถูกส่งไปยังสถาบันรำลึกของเลรี<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา","name":"แก้วแตกกระจาย","flavor":"\\"แว่นตาอ่านหนังสือหักๆ มีรอยเลือดแห้งเป็นด่างดวงอยู่บนเลนส์แตกๆ\\"","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"โอกาสในการถูกส่งไปยังป่าเรดฟอเรสต์<b>เพิ่มขึ้นเล็กน้อย</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"หินจากแม่น้ำทาสี","flavor":"\\"ก้อนหินที่นุ่มและมันขลับ ถูกขัดด้วยกระแสน้ำ ตกแต่งด้วยสีแดง สีดำ และสีขาวเพื่อวาดให้เห็นภาพหมีที่ดูจริงจัง\\"","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"โอกาสในการถูกส่งไปยังป่าเรดฟอเรสต์<b>เพิ่มขึ้นอย่างมาก</b>เมื่อเผา<br><li>ทับซ้อน</li>","name":"หนังสือเด็ก","flavor":"\\"หนังสือนิทานโบราณและเปราะบางที่บางหน้าหายไปเพราะสภาพอากาศ\\"","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"โอกาสในการถูกส่งไปยังป่าเรดฟอเรสต์<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา","name":"หน้ากากสุดท้าย","flavor":"\\"หน้ากากเสือประดิษฐ์มาอย่างงดงามที่สวมใส่ได้สบายพอดีกับใบหน้าของเด็ก พบบันทึกเขียนด้วยอักษรซีริลลิกสลักอยู่ข้างหลัง\\"","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"โอกาสในการถูกส่งไปยังสปริงวูด<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา","name":"นักเป่าปี่","flavor":"\\"เพราะถูกชาวเมืองทรยศ เขาจึงชำระแค้นโดยลักพาลูกหลานของพวกนั้นไปเสียสิ้น\\"","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"การเผาครื่องเซ่นนี้จะปกป้องคุณจากการสูญเสียอุปกรณ์เสริม เมื่อสิ้นสุดการเล่น","name":"วอร์ดสีดำ","flavor":"\\"ฟังเสียงข้า หลีกทางให้ข้า ปกป้องข้าจากความมืดมิด\\"","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"การเผาเครื่องเซ่นนี้จะปกป้องคุณจากการสูญเสียไอเท็มและอุปกรณ์เสริม","name":"วอร์ดสีขาว","flavor":"\\"ป้องกันข้าจากความชั่วร้าย ปกป้องข้า และจงหายไป\\"","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"โอกาสในการถูกส่งไปยังที่ดินของตระกูลยามาโอกะ<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา","name":"ตราตระกูลยามาโอกะ","flavor":"\\"คุณไม่อาจออกจากบ้านที่ครอบครัวแตกแยกได้ ทำได้เพียงหนีไปให้ไกลจนกว่าความทรงจำนั้นจะหยุดหลอกหลอนคุณ\\"","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"ให้เอนทิตีปฏิเสธเครื่องเซ่นทุกชิ้นที่เปลี่ยนโอกาสในการถูกส่งไปยังดินแดนใดดินแดนหนึ่ง<br>แต่การทำเช่นนี้ถูกระงับได้หากใช้เครื่องเซ่นดินแดนที่เหมือนกันสี่ชิ้น","name":"พื้นที่บูชายัญ","flavor":"“ด้วยดวงตาอันมืดบอด เราสละซึ่งเจตจำนงตนและร้องขอการชี้นำจากท่าน”","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"โอกาสถูกส่งไปโรงเรียนประถมมิดวิชเมื่อเผา<b>เพิ่มขึ้นมหาศาล</b>","name":"จดหมายถึงแมรี่","flavor":"\\"ในฝันอันไม่หยุดหย่อน ฉันเห็นเมืองนั้น\\"","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"โอกาสในการถูกส่งไปยังโรงงานบรรจุเนื้อกิเดี้ยน<b>เพิ่มขึ้นมหาศาล</b>เมื่อเผา","name":"ชิ้นส่วนจิ๊กซอว์","flavor":"\\"ยินดีด้วย เธอยังไม่ตาย คนส่วนมากไม่ซาบซึ้งกับคุณค่าชีวิต แต่ไม่ใช่เธอ ไม่อีกแล้ว\\"","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"โอกาสในการถูกส่งไปยังห้องทดลองแห่งชาติเมืองฮอว์กินส์<b>เพิ่มขึ้นมหาศาล</b>เมื่อถูกเผา","name":"บัตรประจำตัวห้องทดลองแห่งชาติเมืองฮอว์กินส์ ","flavor":"\\"บัตรประจำตัวพร้อมหมายเลขซีเรียลเปื้อนเลือดเหนอะหนะ\\"","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"เมื่อเผา โอกาสจะถูกส่งไปยังสุสานแห่งเกลนเวล<b>เพิ่มขึ้นมหาศาล</b>","name":"บ่วงฝุ่นกรัง","flavor":"“ถามใครก็ได้ที่พยายามเอาตัวรอดไปจากแดนสำลักฝุ่น แล้วพวกเขาจะบอกว่าบ่วงที่แท้จริงก็คือความเมตตาระยำนั่นไงล่ะ”","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"เค้กสยองชวนให้ท้องไส้ปั่นป่วนสำหรับช่วงเวลา 3 ปีที่เราอยู่ด้วยกันมา มอบแต้มเลือดโบนัส <b>103%</b> ในทุกหมวดหมู่ให้กับผู้เล่นทุกคนในเกมรอบนี้<br><li>ทับซ้อน</li>","name":"เค้กขยะแขยง","flavor":"\\"สุขสันต์วันครบรอบวันเกิด! แด่ช่วงเวลาสามปีที่เราอยู่ด้วยกัน!\\"<br>-ทีมงาน Dead by Daylight","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"เค้กสยองแด่ช่วงเวลาสี่ปีที่เราอยู่ด้วยกันมา อร่อยกว่าเค้กขยะแขยง 1% มอบแต้มเลือดโบนัส <b>104%</b> ในทุกหมวดหมู่ให้กับผู้เล่นทุกคนในเกมรอบนี้<br><li>ทับซ้อน</li>","name":"เค้กเขย่าขวัญ","flavor":"\\"สุขสันต์วันครบรอบ! แด่ครั้งต่อๆ ไป!\\"<br>- ทีมงาน Dead by Daylight","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/th/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/th/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"เลนส์บางและกว้างในสภาพที่สมบูรณ์ ออกแบบมาเพื่อขยายลำแสงไฟฉายแต่จะทำให้ประสิทธิภาพของระยะการฉายลดลง<br><li>แสงไฟฉาย<b>ขยายขึ้นปานกลาง</b></li><li>ระยะของแสงไฟฉาย<b>ลดลงเล็กน้อย</b></li>","name":"เลนส์ไวด์","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"หลอดไฟฉายขนาดเล็กที่จุจำนวนวัตต์มากกว่า ทำให้แสงไฟสว่างและมีพลังมากขึ้น<br><li>แสงไฟฉาย<b>แคบลงเล็กน้อย</b></li><li>ความสว่างของลำแสง<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ระยะเวลาในการตาบอด<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"หลอดไฟพลังไฟฟ้า","flavor":"\\"แม้กระทั่งแสงที่สว่างที่สุดก็ไม่สามารถส่องทะลุความมืดของสายหมอกมืดได้\\"","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"ใช้แผ่นหนังพันรอบไฟฉายเพื่อให้จับได้แน่นยิ่งขึ้น<br><li>ความแม่นยำของไฟฉาย<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"มือหนีบหนัง","flavor":"\\"มีคนถูกฆ่าไปมากมายเพราะแค่มือลื่น\\"","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"ถ่านมาตรฐานยี่ห้ออะไรไม่รู้<br><li>เวลาการใช้ไฟฉายมาตรฐานเพิ่มอีก <b>2 วินาที</b></li>","name":"แบตเตอรี่","flavor":"\\"ถ่านกำลังจะหมดอีกแล้ว\\"","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"เลนส์และรีเฟล็กซ์เตอร์ช่วยขยายแสงของไฟฉาย<br><li>ความสว่างของลำแสง<b>เพิ่มขึ้นปานกลาง</b></li><li>ระยะเวลาในการตาบอด<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เลนส์สะท้อนภายใน","flavor":"\\"ให้แสงไฟเผาไหม้พวกมันให้บรรลัยหายไป\\"","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"ด้ามจับที่ทำจากยางทำให้จับไฟฉายได้แน่นขึ้น<br><li>ความแม่นยำของไฟฉาย<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ด้ามจับยาง","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"ไส้หลอดไฟออกแบบเพื่อขยายอายุถ่านไฟฉาย<br><li>การใช้ชาร์จไฟฉาย<b>ลดลงปานกลาง</b></li>","name":"ไส้หลอดกระแสต่ำ","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"ถ่านที่แสดงเครื่องหมาย \\"พลังงานระดับอุตสาหกรรม\\"<br><li>เวลาในการใช้ไฟฉายมาตรฐานเพิ่มอีก <b>4 วินาที</b></li>","name":"ถ่านทนทาน","flavor":"\\"ถ่านที่โฆษณาไว้ว่าอยู่ได้นานถึง 8 ชั่วโมง ความจริงแล้วอยู่เพียงชั่ววินาทีเมื่ออยู่ท่างกลางหมอกมืด\\"","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"เลนส์โฟกัสขนาดหนาที่ทำให้แสงไฟฉายเพิ่มความสว่างขึ้น<br><li>ระยะของแสงไฟฉาย<b>เพิ่มขึ้นเล็กน้อย</b></li><li>แสงไฟฉาย<b>แคบลงเล็กน้อย</b></li><li>ความสว่างของลำแสง<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ระยะเวลาในการตาบอด<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เลนส์รวมแสง","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"ถ่านรุ่นใหม่ที่อยู่ได้นานกว่าเดิม<br><li>เวลาในการใช้ไฟฉายมาตรฐานเพิ่มอีก <b>6 วินาที</b></li>","name":"ถ่านใช้นาน","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"หลอดไฟเคมีที่สร้างแสงไฟสว่างจ้าขึ้นมา<br><li>ความสว่างของลำแสง<b>เพิ่มขึ้นอย่างมาก</b></li><li>ระยะเวลาในการตาบอด<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ไฟฮาโลเจนพลังแรง","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"เลนส์กว้างทำจากไพลินที่ไร้รอยขีดข่วนช่วยปรับของระยะและแสงไฟ<br><li>แสงไฟฉาย<b>ขยายขึ้นปานกลาง</b></li><li>แสงไฟฉาย<b>เพิ่มขึ้นเล็กน้อย</b></li><li>ความสว่างของลำแสง<b>เพิ่มขึ้นปานกลาง</b></li><li>ระยะเวลาในการตาบอด<b>เพิ่มขึ้นปานกลาง</b></li>","name":"เลนส์แซปไฟร์ชั้นยอด","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"หลอดไฟที่หนักและอับแสงที่ไม่มีที่มาซึ่งส่องแสงริบหรี่แม้ปิดไปแล้ว<br><li>ความสว่างของลำแสง<b>เพิ่มขึ้นมหาศาล</b></li><li>ระยะเวลาในการตาบอด<b>เพิ่มขึ้นมหาศาล</b></li><li>การใช้แบตเตอรีไฟฉาย<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"หลอดไฟแปลกตา","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"เชือกผูกมัดแน่นหนาสำหรับทำพิธีกรรมสวดมนต์ ใช้ติดเข้ากับกุญแจ<br><li>เพิ่มระยะเวลาการใช้กุญแจนานขึ้น <b>10 วินาที</b></li>","name":"สายประคำ","flavor":"\\"สวดมนต์เข้าไปเถอะ ยังไงมันก็จะหายไปกับสายหมอกอยู่ดี\\"","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"ไข่มุกที่เป็นรูและมีรอยขีดข่วน มีห่วงเล็กช่วยยึดติดไข่มุกเข้ากับกุญแจ<br><li>ระยะการอ่านออร่าของกุญแจ<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ไข่มุกขูดขีด","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"ลูกปัดผิวด้านหลายขนาดที่ใช้ในพิธีขอพร สามารถใช้ติดกับกุญแจ<br><li>เพิ่มเวลาการใช้กุญแจ <b>15 วินาที</b></li>","name":"ลูกประคำ","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"โทเค่นโทรมๆ ที่ทำจากทองเหลือง หากเคยมีข้อความหรือรูปสลักอยู่ ตอนนี้มันได้เลือนหายไปหมดแล้ว สามารถติดใส่กุญแจได้ด้วยห่วงคล้องเพื่อสื่อความสามารถในการอ่านออร่าของกุญแจ<br><li>เผย<b>ออร่าของผู้รอดชีวิต</b>ที่อยู่ในระยะ <b>24 เมตร</b></li>","name":"โทเค่นสึกกร่อน","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"เหรียญสีทองที่มีหน้าตาจืดชืด พื้นผิวเรียบไร้การแกะสลัก ใช้ติดเข้ากับกุญแจในการใช้ความสามารถในการอ่านออร่าของกุญแจ<br><li>เผย<b>ออร่าของผู้รอดชีวิต</b>ที่อยู่ในระยะ <b>48 เมตร</b></li>","name":"โทเค่นทอง","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"พวงกุญแจธรรมดาสีน้ำเงินดำ พวงกุญแจนี้ใช้ผูกกุญแจเข้ากับผู้ใช้ ทำให้ไม่มีวันหายแม้อยู่ในช่วงเวลาที่มืดมิดที่สุด<br><li>ไม่สูญเสียกุญแจเมื่อตาย แต่สูญเสียอุปกรณ์เสริมนี้แทน</li>","name":"แหวนถัก","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"เศษแก้วสีขุ่นนี้ส่งเสียงหึ่งเบาๆ จากการสั่น เมื่อใช้กุญแจในการปลดล็อคแม่กุญแจดำ โทเค่นแก้วนี้จะทำหน้าที่ป้องกันไม่ให้กุญแจหักโดยส่งพลังงานของสายหมอกเข้าไปข้างในแก้วนี้<br><li>กุญแจจะไม่หายไปเมื่อใช้ปลดล็อคแม่กุญแจดำ แต่จะสูญเสียเสียอุปกรณ์เสริมนี้แทน</li>","name":"กระจกสีขุ่น","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"อำพันสีแดงเลือดที่มีลายเส้นเลือดดำ อำพันนี้ช่างมีสัมผัสที่อบอุ่น ใช้ติดเข้ากับกุญแจเพื่อใช้ความสามารถในการอ่านออร่าของกุญแจ<br><li>เผย<b>ออร่าของฆาตกร</b>เมื่ออยู่ในระยะ <b>32 เมตร</b> ใช้พลังงานของกุญแจ<b>จำนวนมาก</b></li>","name":"อำพันโลหิต","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"ชิ้นส่วนของผ้าขนาดหนา รูปวาดบางส่วนเลือนลาง ใช้การไม่ได้หากไม่มีแผนที่<br><li>ระยะเวลาในการใช้เพิ่มขึ้น <b>5 วินาที</b> สำหรับแผนที่ทุกอัน</li>","name":"ภาคผนวกแผนที่","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"สายไฟขนาดเล็ก ตรงปลายได้รับความเสียหายอย่างหนักราวกับโดนกระชากออกมา สามารถพันรอบแผนที่เพื่อเพิ่มความสามารถในการอ่านออร่า<br><li>ปลดล็อคความสามารถในการแกะรอย<b>ประตูทางออก</b></li>","name":"ลวดสีเหลือง","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"สแตมป์ไม้พร้อมแผ่นยางแนวตาหมากรุกสำหรับทำเครื่องหมายบนเอกสาร ไม่แน่ชัดว่าสแตมป์นี้ใช้โดยใครและใช้อย่างไร สามารถใช้พร้อมกับแผนที่ได้<br><li>ระยะการแกะรอยด้วยแผนที่<b>เพิ่มขึ้นปานกลาง</b></li>","name":"สแตมป์ประหลาด","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"เมือกสีม่วงใสไม่ทราบที่มาแต่ทนต่อความร้อนได้ดีเยี่ยม<br><li>อัตราการเผาไหม้ของแผนที่<b>ช้าลงปานกลาง</b></li>","name":"วุ้นหน่วงเหนี่ยว","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"เชือกแข็งสีแดงเข้ม ใช้พันรอบแผนที่เพื่อเพิ่มความสามารถการอ่านออร่า <br><li>ปลดล็อคความสามารถในการแกะรอย <b>สิ่งของของฆาตกร</b></li>","name":"เชือกแดง","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"ลูกปัดรูปทรงประหลาดมีขอบสีทองที่ใช้ในการขยายแผนที่และบอกตำแหน่งเฉพาะ ลูกปัดปล่อยพลังงานที่สัมผัสและเห็นได้เฉพาะผู้รอดชีวิต<br><li>ปลดล็อคความสามารถในการทำเครื่องหมาย เมื่อใช้การกระทำรอง</li><li>สร้างเครื่องหมายที่ผู้รอดชีวิตเห็นได้ทุกคน</li>","name":"ลูกปัดแก้ว","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"ตราปั๊มที่ทำจากไม้สีเหลืองที่ทนทาน มีข้อความข้างใต้ที่ไม่สามารถเข้าใจได้: \\"kw\'zvre\'od\\" สามารถใช้กับแผนที่ได้<br><li>ระยะการแกะรอย<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"สแตมป์แปลกตา","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"เชือกสีดำผิวเรียบที่ดูนิ่ม สามารถใช้พันรอบแผนที่เพื่อเพิ่มทักษะการอ่านออร่า<br><li>ปลดล็อคความสามารถในการแกะรอย <b>ท่อ</b></li>","name":"เส้นไหมสีดำ","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"ชุดเลนส์คุณภาพละเอียดครอบด้วยอุปกรณ์ที่ซับซ้อน เฟืองที่ควบคุมการโฟกัสของเลนส์จะขยับด้วยตัวเอง เพื่อโฟกัสไปยังสิ่งที่มนุษย์มองไม่เห็น<br><li>ผู้รอดชีวิตทุกคนจะเห็นออร่าที่เกิดจากแผนที่เมื่อผู้ถือเปิดใช้งาน</li>","name":"ลูกปัดคริสตัล","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"ถุงมือการแพทย์เพื่อป้องกันการติดเชื้อ<br><li>โบนัสความคืบหน้าสำหรับการตรวจสอบทักษะได้ยอดเยี่ยมจะ<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ถุงมือยาง","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"เทปพยาบาลใช้สำหรับปิดแผลขนาดเล็ก<br><li>ความเร็วในการรักษา<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"พลาสเตอร์ปิดแผล","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"ผ้าพันแผลที่มักพบในชุดปฐมพยาบาลเบื่องต้น<br><li>เพิ่ม <b>8 ชาร์จ</b> ให้กับกล่องพยาบาล</li>","name":"ผ้าพันแผล","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"ฟองน้ำธรรมดาใช้ดูดซับเลือด ทำให้ง่ายต่อการทำแผล<br><li>โบนัสความคืบหน้าสำหรับการตรวจสอบทักษะได้ยอดเยี่ยมจะ<b>เพิ่มขึ้นอย่างมาก</b></li>","name":"ฟองน้ำ","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"แพ็คผ้าพันแผลที่แปะโดยไม่ต้องใช้คลิปเพื่อพันแผลเร็วขึ้น..<br><li>เพิ่มชาร์จของกล่องพยาบาล <b>8 ชาร์จ</b> </li><li>ความเร็วในการรักษา<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ชุดคลุมติดกาว","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"แม้จะไม่ใช่อุปกรณ์ทางการแพทย์ซะทีเดียว แต่ก็สามารถใช้ปิดแผลได้อย่างรวดเร็วและเจ็บปวด<br><li>โอกาสในการเกิดตรวจสอบทักษะ<b>เพิ่มขึ้นปานกลาง</b></li><li>ได้รับ<b>แต้มเลือดโบนัส 100%</b> สำหรับการตรวจสอบทักษะได้ยอดเยี่ยม</li><li>ความเร็วในการรักษา<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"เข็มกับด้าย","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"กรรไกรที่ออกแบบมาเพื่อตัดผ้า<br><li>ความเร็วในการรักษา<b>เพิ่มขึ้นปานกลาง</b></li>","name":"กรรไกรผ่าตัด","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"ผ้าพันแผลฆ่าเชื้อใช้ทำแผลหลากหลายแบบ เป็นส่วนหนึ่งของอุปกรณ์ทำแผล<br><li>เพิ่มชาร์จของกล่องพยาบาล <b>12 ชาร์จ</b></li>","name":"ม้วนผ้าก๊อซ","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"อุปกรณ์การแพทย์ใช้ปิดและสมานแผล ถึงแม้ไหมเย็บแผลจะมีประสิทธิภาพสูงแต่ก็ใช้งานได้ไม่ง่ายนัก<br><li>โอกาสในการเกิดตรวจสอบทักษะ<b>เพิ่มขึ้นอย่างมาก</b></li><li>ได้รับ<b>แต้มเลือดโบนัส 150%</b> สำหรับการตรวจสอบทักษะได้ยอดเยี่ยม</li><li>ความเร็วในการรักษา<b>เพิ่มขึ้นเล็กน้อย</b></li>","name":"ไหมเย็บแผล","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"แพ็คแผ่นเจลใช้เพื่อรักษาแผลที่มีเลือดไหลซึมออกมาไม่หยุด<br><li>เพิ่มชาร์จของกล่องพยาบาล <b>16 ชาร์จ</b></li>","name":"เจลปิดแผล","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"แผ่นดูดซับที่ป้องกันการรั่วไหลของเลือดเมื่อปิดแผลขนาดใหญ่<br><li>ความเร็วในการรักษา<b>เพิ่มขึ้นอย่างมาก</b></li><li><b>ลด</b> <b>8</b> ชาร์จ</li>","name":"ผ้าปิดแผลส่วนท้อง","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"ผงสีขาวที่มีสารสร้างตะกอน ใช้ทาลงบนแผลเพื่อห้ามเลือด<br><li>กดปุ่ม<i>การกระทำรอง</i>ขณะกำลังรักษาด้วยกล่องพยาบาลเพื่อใช้สารห้ามเลือด</li><li>เมื่อใช้งาน<i>สารห้ามเลือด</i>กับผู้รอดชีวิตที่บาดเจ็บ จะทำให้ผู้รอดชีวิตนั้นได้รับเอฟเฟกต์สถานะ<b>ทนทาน</b>เป็นเวลา <b>8 วินาที</b><li>ใช้งานกล่องพยาบาลเมื่อใช้</li>","name":"สารห้ามเลือด","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"สารต่อต้านการตกเลือดที่ห้ามเลือดได้ในพริบตาเดียว<br><li>กดปุ่ม<i>การกระทำรอง</i>ขณะกำลังรักษาด้วยกล่องพยาบาลเพื่อใช้เข็มฉีดยาห้ามเลือด</li><li>ผู้รอดชีวิตที่ได้รับผลจะได้รับสภาวะร่างกาย <b>16</b> วินาทีหลังการใช้งาน</li><li>Perk และอุปกรณ์เสริมที่ส่งผลต่อ<i>ความเร็วการรักษา</i>จะเปลี่ยนแปลงเวลาที่ต้องการ</li><li>เอฟเฟกต์นี้จะสิ้นสุดลงเมื่อผู้รอดชีวิตที่ได้รับผลอยู่นั้นมีสภาวะร่างกายเปลี่ยนแปลงไปหรือถูกจับตัว</li><li>ใช้งานกล่องพยาบาลเมื่อใช้</li>","name":"เข็มฉีดยาห้ามเลือด","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"คีมที่มีประโยชน์ในการยึดท่อหรือยึดสายไฟ และป้องกันความเสียหายหรือการได้รับบาดเจ็บ<br><li>เสียงดังที่เกิดขึ้นจากการซ่อมแซมของคุณและระยะการได้ยินของฆาตกรลดลงไป 8 เมตร</li>","name":"ตัวหนีบสปริง","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"สปริง ตะปูควง และเฟือง ส่วนใหญ่เป็นขยะไร้ประโยชน์<br><li>เพิ่ม <b>8 ชาร์จ</b> ให้กับกล่องเครื่องมือ</li>","name":"เศษเหล็ก","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"ผ้าขี้ริ้วธรรมดา แต่สะอาดอย่างน่าสงสัย<br><li>เพิ่มความเร็วในการซ่อมด้วยกล่องเครื่องมือ <b>เล็กน้อย</b></li>","name":"ผ้าขี้ริ้วสะอาด","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"ลวดทองแดงม้วนใหญ่แต่พกพาได้<br><li>เพิ่ม <b>12 ชาร์จ</b> ให้กับกล่องเครื่องมือ</li>","name":"ม้วนลวด","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"ประแจสำหรับขันน็อตที่อยู่ลึกลงไปในเครื่องจักร<br><li>ความเร็วในการซ่อมแซมด้วยกล่องเครื่องมือ<b>เพิ่มขึ้นปานกลาง</b></li>","name":"ช่องหมุน","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"ถุงมืออย่างหนาซึ่งลดความคล่องแคล่ว แต่ช่วยป้องกันมือไม่ให้ได้รับบาดเจ็บ<br><li>ป้องกันฆาตกรรู้ตัวเมื่อทำลายตะขอด้วยกล่องเครื่องมือนี้</li>","name":"ถุงมือคุ้มกัน","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"มีคนเขียนขั้นตอนการซ่อมแซมที่ติดไว้บนฉลาก<br><li>จะไม่มีการตรวจสอบทักษะในระหว่างที่ซ่อมแซมด้วยกล่องเครื่องมือนี้</li>","name":"วิธีการเล่น","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"ประแจปรับได้พร้อมที่จับแข็งแรงที่ต้องมีติดไว้ในกล่องเครื่องมือทุกกล่อง<br><li>ตะขอที่ถูกทำลายโดยกล่องเครื่องมือนี้ จะใช้เวลาในการเกิดขึ้นใหม่เพิ่มอีก 15 วินาที</li>","name":"ประแจหนีบ","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"เลื่อยพื้นฐานทำจากลวดหยักและด้ามจับไม้<br><li>เพิ่มความเร็วการทำลายของกล่องเครื่องมือขึ้น <b>เล็กน้อย</b></li>","name":"การตัดลวด","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"เลื่อยตัดเหล็กขนาดเล็ก<br><li>ความเร็วในการทำลายด้วยกล่องเครื่องมือเพิ่มขึ้น <b>ปานกลาง</b></li>","name":"Metal Saw","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"ชิ้นส่วนกลไกซับซ้อนไม่เข้าพวก ดูสะอาดและแวววาวราวกับเพิ่งผลิตออกมาจากโรงงาน<br><li>จะแทนที่การกระทำ<b>ซ่อมแซมโดยใช้กล่องเครื่องมือ</b>ด้วย<b>การติดตั้งชิ้นส่วนใหม่เอี่ยม</b></li><li>การติดตั้ง<i>ชิ้นส่วนใหม่เอี่ยม</i>จะซ่อมแซมเครื่องปั่นไฟ <b>15%</b> โดยอัตโนมัติเป็นเวลา <b>5 วินาที</b></li><li>ระหว่างติดตั้ง คุณจะพบ<b>การตรวจสอบทักษะระดับยาก 2 ครั้ง</b></li><li>การตรวจสอบทักษะที่สำเร็จจะทำให้ได้ความคืบหน้าในการซ่อมแซมเครื่องปั่นไฟเพิ่มเติม <b>5%</b> สูงสุดถึง <b>25%</b></li><li><i>อุปกรณ์เสริมจะหมดไปเมื่อใช้งาน</i></li>","name":"ชิ้นส่วนใหม่เอี่ยม","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"แหวนแต่งงานสลักลายซึ่งโผล่ออกมาจากสายหมอก เปี่ยมไปด้วยพลังงานอันไม่อาจหาคำบรรยายได้แผ่ซ่านอยู่<li>ทำให้มองเห็นออร่าของเป้าหมาย</li><li>ลดโอกาสที่คุณจะตกเป็นเป้าหมายของฆาตกร</li><li>ทับซ้อน</li>","name":"แหวนแต่งงานพิเศษ","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/th/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/th/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"มอบแต้มเลือดโบนัส <b>50%</b> ในหมวดจุดมุ่งหมาย<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ถุงดอกบ็อกลอเรล","flavor":"\\"ถุงขนาดเท่าฝ่ามือเต็มไปด้วยใบไม้แห้ง ปล่อยกลิ่นชาอ่อนๆ\\"","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"มอบแต้มเลือดโบนัส <b>75%</b> ในหมวดจุดมุ่งหมาย<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ดอกบ็อกลอเรลสด","flavor":"\\"ดอกไม้สีม่วงที่บานท่ามกลางหนองน้ำอันปนเปื้อน ปล่อยกลิ่นที่เหมือนกับกลิ่นชาอ่อนๆ\\"","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"มอบแต้มเลือดโบนัส <b>100%</b> ในหมวดจุดมุ่งหมาย<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ดอกบ็อกลอเรลหอม","flavor":"\\"ดอกไม้สีม่วงที่บานท่ามกลางหนองน้ำอันปนเปื้อน ปล่อยกลิ่นที่เหมือนกับกลิ่นชาเข้มข้น\\"","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"มอบแต้มเลือดโบนัส <b>50%</b> ในหมวดรอดชีวิต<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ถุงดอกบานไม่รู้โรยแห้ง","flavor":"\\"ถุงขนาดเท่าฝ่ามือเต็มไปด้วยเมล็ดข้าวคล้ายลูกปัด ว่ากันว่าดอกบานไม่รู้โรยนั้นอยู่เป็นนิรันดร์\\"","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"มอบแต้มเลือดโบนัส <b>75%</b> ในหมวดรอดชีวิต<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ดอกบานไม่รู้โรยสด","flavor":"\\"ใบไม้สีเขียวอ่อนไฮไลท์ด้วยเส้นเลือดสีแดงเข้ม ว่ากันว่าดอกบานไม่รู้โรยนั้นอยู่เป็นนิรันดร์\\"","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"มอบแต้มเลือดโบนัส <b>100%</b> ในหมวดรอดชีวิต<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ดอกบานไม่รู้โรยแห้งหอม","flavor":"\\"ใบไม้สีเขียวอ่อนไฮไลท์ด้วยเส้นเลือดสีแดงเข้ม ปล่อยกลิ่นหัวไชเท้าที่รุนแรง\\"","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"มอบแต้มเลือดโบนัส <b>50%</b> ในหมวดความเอื้อเฟื้อ<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ถุงดอกพริมโรส","flavor":"\\"ถุงเล็กๆ เท่าฝ่ามือใส่กลีบดอกไม้สีทอง 4 กลีบ ดอกพริมโรสจะบานวินาทีสุดท้ายก่อนที่ดวงอาทิตย์จะตก\\"","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"มอบแต้มเลือดโบนัส <b>75%</b> ในหมวดความเอื้อเฟื้อ<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ดอกพริมโรสสด","flavor":"\\"ดอกไม้สีทองเก็บเกี่ยวเมื่อดอกสะพรั่ง ดอกพริมโรสจะบานวินาทีสุดท้ายก่อนที่ดวงอาทิตย์ลับขอบฟ้า\\"","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"มอบแต้มเลือดโบนัส <b>100%</b> ในหมวดความเอื้อเฟื้อ<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ดอกพริมโรสหอม","flavor":"\\"ดอกไม้สีทองที่เก็บเกี่ยวเมื่อดอกบานสะพรั่ง ปล่อยกลิ่นดินที่เข้มข้นและผ่อนคลาย\\"","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"มอบแต้มเลือดโบนัส <b>50%</b> ในหมวดกล้าหาญ<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ถุงดอกสวีทวิลเลี่ยม","flavor":"\\"ถุงที่เย็บด้วยมือขนาดฝ่ามือประกอบไปด้วยกรีบดอกไม้และใบ้สีเขียวอมน้ำเงินปะปนกัน ปล่อยกลิ่นฉุนคล้ายกานพลู\\"","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"มอบแต้มเลือดโบนัส <b>75%</b> ในหมวดกล้าหาญ<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ดอกสวีทวิลเลี่ยมสด","flavor":"\\"ช่อดอกไม้ที่มีกลีบใบสีชมพูและสีแดงเลือดอยู่ตรงกลาง ปล่อยกลิ่นฉุนคล้ายกานพลู\\"","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"มอบแต้มเลือดโบนัส <b>100%</b> ในหมวดกล้าหาญ<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ดอกสวีทวิลเลี่ยมสด","flavor":"\\"ช่อดอกไม้ที่มีกลีบใบสีชมพูและสีแดงเลือดอยู่ตรงกลาง ปล่อยกลิ่นฉุนคล้ายกานพลู\\"","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"มอบแต้มเลือดโบนัส <b>25%</b> ใน<b>ทุกหมวด</b>สำหรับผู้รอดชีวิตทุกคน<br><li>ทับซ้อน</li>","name":"ซองจดหมายพันเชือก","flavor":"\\"ซองที่เปิดแล้วถูกปิดสนิทแล้วผูกด้วยริบบิ้น 4 สี\\"","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"มอบแต้มเลือดโบนัส <b>25%</b> ในทุกหมวดหมู่<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ซองจดหมายปิดผนึก","flavor":"\\"ซองจดหมายซีดเหลืองที่ไม่ได้ถูกเปิดมาเป็นเวลานาน ข้อความข้างในจะไม่มีใครได้รู้\\"","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"มอบแต้มเลือดโบนัส <b>100%</b> ในทุกหมวดหมู่<br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"หนีเร็ว! เค้ก","flavor":"\\"ภาพเค้กนี่เหมือนจริงมาก\\"","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"โชค<b>เพิ่มขึ้นเล็กน้อย</b><br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ถุงชอล์ก","flavor":"\\"ถุงผ้าฝ้ายเล็ก ๆ เต็มไปด้วยผงขาวที่ไม่รู้ที่มา บางคนเชื่อว่ามันนำมาซึ่งโชคลาภ\\"","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"โชคของผู้รอดชีวิต<b>ทุกคน</b><b>เพิ่มขึ้นปานกลาง</b><br><li>ทับซ้อน</li>","name":"ถุงชอล์กสีครีม","flavor":"\\"รูปปั้นเปราะ ๆ ขนาดเล็กทำจากเกลือดำเป็นรูปหญิงสาวกำลังคุกเข่าถวายของบูชา บางคนเชื่อว่าจะนำพามาซึ่งความโชคดี\\"","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"โชค<b>เพิ่มขึ้นอย่างมาก</b><br><li>ส่วนตัว</li><li>ทับซ้อน</li>","name":"ถุงชอล์กสีงาช้าง","flavor":"\\"ถุงหนังใบเล็กมีรอยเย็บสีขาวอยู่ด้านข้าง ในถุงเต็มไปด้วยผงงาช้างที่เปล่งประกายใต้แสงจันทร์ บางคนเชื่อว่าจะนำพามาซึ่งความโชคดี\\"","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"โชคของผู้รอดชีวิต<b>ทุกคน</b><b>เพิ่มขึ้นเล็กน้อย</b><br><li>ทับซ้อน</li>","name":"ถุงเกลือ","flavor":"\\"ถุงผ้าฝ้ายเต็มไปด้วยเกลือคริสตัลสีดำ บางคนเชื่อว่าจะนำพามาซึ่งความโชคดี อย่าทำหกล่ะ\\"","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"โชคของผู้รอดชีวิต<b>ทุกคน</b><b>เพิ่มขึ้นอย่างมาก</b><br><li>ทับซ้อน</li>","name":"โหลริมฝีปากดองเค็มของวิโก้","flavor":"\\"โหลแก้วปิดสนิทที่มีริมฝีปากมนุษย์ที่ถูกตัดออกมาลอยอยู่ในน้ำเกลือ บางคนเชื่อว่าจะนำพามาซึ่งความโชคดี\\"","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"ร้องขอให้เอนทิตีสร้างหีบเพิ่ม <b>1</b> ใบ<br><li>ทับซ้อน</li>","name":"เหรียญหมองคล้ำ","flavor":"\\"โลหะทรงกลมที่ไร้ซึ้งแสงประกาย\\"","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"ร้องขอเอนทิตีให้สร้างหีบเพิ่ม <b>2</b> ใบ <br><li>ทับซ้อน</li>","name":"เหรียญเงาวับ","flavor":"\\"เหรียญสีทองเงาวับ\\"","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"ทำให้เอนทิตีสงบและ<b>ระยะห่าง</b>ระหว่างตะขอบูชาที่ปรากฏบนโลก<b>เพิ่มขึ้นเล็กน้อย</b><br><li>ทับซ้อน</li>","name":"ไม้โอ๊กหิน","flavor":"\\"เศษไม้ที่กำลังผุพัง\\"","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"คุณเริ่มเกมกับใครคนใดคนหนึ่ง<br><li>ความลับ</li>","name":"ผ้าคลุมแห่งเอกภาพ","flavor":"\\"ผ้าที่มัดเข้าด้วยกัน\\"","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"ผู้รอดชีวิตทุกคนเริ่มเกมใกล้ๆ กัน<br><li>ความลับ</li>","name":"ผ้าคลุมแห่งพันธะ","flavor":"\\"ผ้าสี่เหลี่ยมสีซีดซึ่งมีปมเล็กๆ อยู่ตรงปลาย\\"","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"คุณเริ่มเกมไกลจากฆาตกรมากเท่าที่จะมากได้<br><li>ความลับ</li>","name":"ผ้าคลุมของวิโก้","flavor":"\\"ฉันเจอสิ่งที่น่าพิศวงมากมายตอนอยู่ในสายหมอก แต่ตอนนี้ฉันเข้าใจวิธีการแหกกฎสุดโหดของสายหมอกแล้ว\\" –สมุดบันทึกของวิโก้","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/th/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/th/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"ปลดล็อคความสามารถในการอ่านออร่า ทุกครั้งที่ซ่อมแซมเครื่องปั่นไฟได้สำเร็จ คุณจะมองเห็นออร่าของฆาตกรเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br>เมื่อเครื่องปั่นไฟเครื่องสุดท้ายถูกเปิดใช้งานแล้ว คุณจะมองเห็นออร่าของฆาตกรเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span>","name":"สัมผัสดำมืด","flavor":"“เชื่อคนที่ผ่านน้ำร้อนมาก่อนเถอะ ใจเย็นๆ อย่ารีบและอย่ากังวลมากไป! วิธีที่ดีที่สุดในการเอาชนะเขาคือรู้ว่าเขากำลังคิดอะไร\\" - เทปที่หายไป, เมิร์ฟ","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า ความหวาดระแวงร่วมกับความหวั่นกลัวความผิดพลาดจะช่วยเตรียมตัวคุณให้พร้อมต่อการเกิดความผิดพลาดเดิมซ้ำๆ<br>คุณจะมองเห็นออร่าของเครื่องปั่นไฟที่อยู่ใกล้ชิดกัน <span class=\\"Highlight1\\">{0}</span> เครื่อง เป็นระยะเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>หากคุณกำลังถือแผนที่ที่สามารถแกะรอยเครื่องปั่นไฟได้ เครื่องปั่นไฟที่เผยโดย <i>Deja Vu</i> จะถูกเพิ่มเข้าไปในแผนที่","name":"เดจาวู","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"โอกาสหนีรอดได้สำเร็จที่เพิ่มขึ้นเรื่อยๆ ทำให้คุณเปี่ยมไปด้วยความหวังและล่องลอยราวติดปีกบิน เมื่อปั่นไฟให้ประตูทางออกจนเสร็จ คุณจะได้รับเอฟเฟกต์สถานะ<b><i>เร่งรีบ</i></b> <span class=\\"Highlight1\\">{0}%</span> เป็นเวลา <span class=\\"Highlight3\\">{1} วินาที</span><br>","name":"ความหวัง","flavor":"\\"เตรียมรับมือเอาไว้ดีๆ ล่ะทุกคน! ลุยกันเลย!\\" -เทปที่หายไป: Nikki","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า เมื่อคุณถูกแขวนบนตะขอ ผู้รอดชีวิตคนอื่นจะมองเห็นออร่าของผู้รอดชีวิตทุกคน หากฆาตกรอยู่ภายในระยะ <span class=\\"Highlight1\\">{0} เมตร</span> ผู้รอดชีวิตทุกคนจะมองเห็นออร่าของฆาตกรเช่นกัน<br><br>เมื่อผู้รอดชีวิตคนอื่นที่ไม่ใช่ตัวคุณถูกแขวนบนตะขอ คุณจะมองเห็นออร่าของผู้รอดชีวิตที่เหลือทุกคน หากฆาตกรอยู่ภายในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>จากผู้รอดชีวิตที่ถูกแขวนบนตะขอ คุณก็จะมองเห็นออร่าของฆาตกร","name":"วงศาคณาญาติ","flavor":"“ช่วยกันเข้าไว้ เราลงเรือลำเดียวกันแล้ว” -เทปที่หายไป: Sujan","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"การวิ่งของคุณเบาและเงียบทำให้การสะกดรอยตามคุณยากขึ้น รอยขีดข่วนจะปรากฏให้เห็นนานน้อยกว่าปกติ <span class=\\"Highlight1\\">{0} วินาที</span><br>","name":"เบาสบาย","flavor":"\\"อย่าใจร้อน เขารู้ว่าเธอไปอยู่ไหนมา... เหมือนกับที่ฉันบอกอยู่ตลอดว่า: ใช้ชีวิตให้ช้าแล้วตายตอนแก่\\" -เทปที่หายไป: ดีแลน","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"เป็นเรื่องน่าประหลาดที่จะทิ้งใครซักคนไว้ข้างหลัง เมื่อเปิดประตูทางออกได้แล้วอย่างน้อยหนึ่งจุด คุณจะได้รับผลดังต่อไปนี้:<br><li>ได้รับแต้มเลือดเพิ่ม <span class=\\"Highlight1\\">{0}%</span> สำหรับการรักษาและการปลดผู้รอดชีวิตคนอื่นลงจากตะขอ</li><li>ได้รับโบนัสความเร็วการกระทำเพิ่ม <span class=\\"Highlight2\\">{1}%</span> เมื่อรักษาและปลดผู้รอดชีวิตคนอื่นลงจากตะขอ</li><li>คุณจะมองเห็นออร่าของผู้รอดชีวิตที่เหลือทุกคน</li>","name":"ไม่มีใครถูกทิ้ง","flavor":"\\"...แย่แน่ๆ แต่ฉันเชื่อว่าเราจะหลอกล่อแล้วเอาชนะเขาได้ถ้าร่วมมือกัน อย่าทำตัวเดาง่ายและอย่าเห็นแก่ตัว!\\" -เทปที่หายไป: ไคลด์","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า คุณจะมองเห็นออร่าของหีบที่ยังไม่เปิดและไอเท็มตามสิ่งแวดล้อมเมื่อยืนอยู่ในระยะ <span class=\\"Highlight1\\">{0} เมตร</span> โอกาสในการพบไอเท็มระดับหายากจากหีบเพิ่มขึ้น<b>อย่างมาก</b>","name":"สัญชาตญาณขโมย","flavor":"\\"นักบุกเบิกเคยปล้นเจ้าหนูพวกนี้อยู่เป็นชั่วโมง\\" -เทปที่หายไป: Aizeyu","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"คุณสามารถสัมผัสถึงอันตรายได้อย่างน่าเหลือเชื่อ เกิดเสียงเตือนเมื่อมองไปทางทิศที่ฆาตกรอยู่ด้วยมุม <span class=\\"Highlight1\\">45 องศา</span> ภายในระยะ <span class=\\"Highlight2\\">{0} เมตร</span> เมื่อใช้งานไปในแต่ละครั้ง นิมิตจะมีคูลดาวน์ <span class=\\"Highlight3\\">{1} วินาที</span>","name":"นิมิต","flavor":"\\"ฉันรู้สึกไม่ค่อยดีเลย!\\"","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"คุณจะรู้สึกถึงแรงกระตุ้นในสถานการณ์ที่ชี้เป็นชี้ตาย ได้รับความเร็วเพิ่มเติม <span class=\\"Highlight1\\">{0}%</span> เมื่อซ่อมแซม ทำลาย รักษา ปลดลงจากตะขอ กระโดดข้ามสิ่งกีดขวาง ชะล้าง เปิดประตูทางออก และการปลดล็อคในขณะที่ได้รับบาดเจ็บอยู่","name":"ความยืดหยุ่น","flavor":"\\"มีสติเข้าไว้แม้ในเวลาที่สิ้นหวัง\\"","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"คุณคิดค้นวิธีในการหลุดจากตะขอได้อย่างมีประสิทธิภาพ<br><li>ได้รับความพยายามในการหลุดจากตะขอเพิ่มเติมสูงสุดจำนวน <span class=\\"Highlight1\\">{0}</span> ครั้ง</li><li>เพิ่มโอกาสในการหนีจากตะขอสำเร็จขึ้น <span class=\\"Highlight2\\">{1}%</span></li>","name":"เนื้อลื่นๆ","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"คุณสามารถสัมผัสถึงอันตรายได้อย่างน่าเหลือเชื่อ รับเสียงแจ้งเตือนเมื่อมองไปในทิศทางของโทเท็มเป็นรูปโคนที่มีมุม <span class=\\"Highlight1\\">45 องศา</span>ในระยะ <span class=\\"Highlight2\\">{0} เมตร</span> สมอลเกมมีการนับเวลาถอยหลัง <span class=\\"Highlight3\\">{1} วินาที</span>แต่ละครั้งที่ทำงาน ได้รับโทเค่นสำหรับโทเท็มขมุกขมัวและโทเท็มขมุกขมัวแต่ละอันที่ถูกผู้เล่นคนใดก็ตามชะล้างไป กรวยการตรวจจับเกมเล็กลดลงเหลือ <span class=\\"Highlight4\\">5 ขั้น</span>ต่อโทเค่น ","name":"เกมเล็ก","flavor":"\\"ไม่ล่ะ\\" -เทปที่หายไป: Andy","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"ลางสังหรณ์เตือนถึงภัยที่กำลังใกล้เข้ามา ได้รับการเตือนเมื่อฆาตกรมองตรงมาทางคุณและยืนอยู่ในระยะ <span class=\\"Highlight1\\">{0} เมตร</span> เมื่อเสียวสันหลังทำงาน โอกาสในการตรวจสอบทักษะจะเพิ่มขึ้น <span class=\\"Highlight2\\">{1}%</span> โดยที่โซนความสำเร็จลดลง <span class=\\"Highlight3\\">{2}%</span> เมื่อเสียวสันหลังทำงาน ความเร็วของคุณในการซ่อมแซม การทำลาย การรักษา การปลดจากตะขอ การกระโดดข้ามสิ่งกีดขวาง การชะล้าง การเปิดประตูทางออก และการปลดล็อคจะเพิ่มขึ้น <span class=\\"Highlight4\\">{3}%</span>","name":"เสียวสันหลัง","flavor":"\\"มีเสียงที่ไม่เป็นคำพูดอยู่ด้วย ฟังดูสิ\\" -เทปที่หายไป: Sassy","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"คุณทำทุกอย่างได้ดีที่สุดเมื่ออยู่ภายใต้ความกดดันสุดขีด โซนความสำเร็จของการตรวจสอบทักษะได้เยี่ยมขณะซ่อมแซมและรักษาจะเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span> เมื่อคุณได้รับบาดเจ็บ","name":"นี่ไม่ใช่เรื่องจริง","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"การได้ช่วยเหลือผู้อื่นเพิ่มขวัญกำลังใจให้ตัวคุณ<br><br>เมื่อคุณช่วยผู้รอดชีวิตที่ถูกแขวนอยู่บนตะขอแต่ละครั้งจะได้รับความเร็วเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span> ขณะรักษาคนอื่นเป็นเวลา <span class=\\"Highlight3\\">{1} วินาที</span>","name":"เราต้องทำได้","flavor":"\\"ฉันมั่นใจว่าทุกคนจะหนีออกจากที่นี่ได้อย่างปลอดภัยถ้าเราช่วยเหลือกันและกัน\\"","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า คุณจะมองเห็นออร่าของพันธมิตรเมื่ออยู่ในระยะ <span class=\\"Highlight1\\">{0} เมตร</span> <br>","name":"พันธะ","flavor":"\\"เราต้องทำงานกันเป็นทีม ผมอยากให้คุณรอดเพื่อที่ผมจะได้รอดด้วย!\\"-ดไวท์","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"ผู้รอดชีวิตแต่ละคนที่กำลังซ่อมแซมเครื่องปั่นไฟอยู่ในระยะ <span class=\\"Highlight2\\">{1} เมตร</span>จะได้รับโบนัสซึ่งเพิ่มความเร็วการซ่อมแซมขึ้น <span class=\\"Highlight1\\">{0}%</span> โดยผู้รอดชีวิตทุกคนที่อยู่ในระยะจะได้รับโบนัสดังกล่าวเช่นกัน<br>รับแต้มเลือดเพิ่มขึ้น <span class=\\"Highlight3\\">{2}%</span> สำหรับการทำงานเป็นทีม<br>ผู้รอดชีวิตจะติดเอฟเฟกต์พิสูจน์ตนได้ทีละครั้งเท่านั้น<br>","name":"พิสูจน์ตน","flavor":"\\"โชว์ให้เห็นดิ ว่าทำได้มั้ย!\\" -ดไวท์","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"คุณสามารถจัดการทีมให้ร่วมมือกันอย่างมีประสิทธิภาพขึ้นได้ ความเร็วในการรักษา การทำลาย การปลดจากตะขอ การชะล้าง การเปิดประตูทางออก และการปลดล็อคหีบของผู้รอดชีวิตคนอื่นจะเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span> เมื่ออยู่ห่างคุณในระยะไม่เกิน <span class=\\"Highlight2\\">{1} เมตร</span><br>ผู้รอดชีวิตจะได้รับผลจากเอฟเฟกต์ผู้นำได้ทีละครั้งเท่านั้น<br>เอฟเฟกต์นี้จะยังส่งผลกับผู้รอดชีวิตคนอื่นต่อไปได้อีก <span class=\\"Highlight3\\">{2} วินาที</span> หลังจากออกนอกระยะที่ Perk ผู้นำส่งผลไปแล้ว","name":"ผู้นำ","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"คุณจะไม่ทำเสียงดังเท่าคนอื่นขณะรีบกระโดดข้ามสิ่งกีดขวางหรือซ่อนตัวในตู้ล็อกเกอร์<br><br>ระยะการตรวจจับเสียงกระโดดและเสียงซ่อนตัวลดลง <span class=\\"Highlight1\\">{0}%</span><br><br>เอฟเฟกต์นี้สามารถเกิดขึ้นเพียงหนึ่งครั้งในทุกๆ <span class=\\"Highlight2\\">{1} วินาที</span>เท่านั้น","name":"รวดเร็วและเงียบงัน","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"เมื่อเริ่มวิ่ง จะเร่งฝีเท้าให้วิ่งเร็วกว่าความเร็วตอนวิ่งปกติ <span class=\\"Highlight1\\">{0}%</span> เป็นเวลาสูงสุด <span class=\\"Highlight2\\">{1} วินาที</span><br>ทำให้ติดเอฟเฟกต์สถานะ<i>หมดกำลัง</i>เป็นเวลา <span class=\\"Highlight4\\">{2} วินาที</span><br><i>วิ่งสุดกำลัง</i>ไม่สามารถใช้ได้ขณะ<i>หมดกำลัง</i><br>คุณจะไม่ฟื้นตัวจากเอฟเฟกต์สถานะ<i>การหมดกำลัง</i>ขณะวิ่ง","name":"วิ่งสุดกำลัง","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"คุณได้รับพลังงานอย่างไม่คาดคิดเมื่อใกล้จะหนีรอด <span class=\\"Highlight1\\">หายจาก<b>สภาวะร่างกาย</b>คับขันทันที</span>และวิ่งด้วยความเร็ว <span class=\\"Highlight2\\">{0}%</span> ของความเร็วในการวิ่งปกติ เป็นเวลา <span class=\\"Highlight3\\">{1} วินาที</span> เมื่อประตูทางออกมีไฟฟ้าเข้าแล้ว อะดรีนาลินจะใช้การไม่ได้ชั่วคราวหากคุณสูญเสียความสามารถไปในเวลาที่น่าจะเกิดผลและจะกลับมาใช้การได้เมื่อเป็นอิสระ<br><i>อะดรีนาลิน</i>จะ<b>ปลุกให้คุณตื่น</b>หากคุณหลับอยู่ในตอนที่เปิดใช้งาน<br><i>อะดรีนาลิน</i>จะใช้ได้แม้อยู่ในสภาพ<i>หมดกำลัง</i><br>ก่อให้เกิด<i>การหมดกำลัง</i>เป็นเวลา <span class=\\"Highlight4\\">{2} วินาที</span><br>คุณจะไม่ฟื้นตัวจาก<i>การหมดกำลัง</i>ในขณะวิ่ง","name":"อะดรีนาลิน","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า คุณจะมองเห็นออร่าของพันธมิตรที่ใกล้ตายหรือได้รับบาดเจ็บเมื่ออยู่ในระยะ <span class=\\"Highlight1\\">{0} เมตร</span> เห็นใจ จะไม่เผยออร่าของพันธมิตรเมื่ออยู่ในเงื้อมมือของฆาตกร","name":"เห็นใจ","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"คุณแปรรูปต้นไม้ที่พบได้ตามบริเวณรอบกองไฟให้เป็นทิงเจอร์ที่ชะลอการเกิดเลือดไหล <b>ความเร็วในการรักษา</b>และ<b>ประสิทธิภาพของกล่องพยาบาล</b>เพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span><br>","name":"ความรู้พฤกษศาสตร์","flavor":"\\"ความรู้ด้านพฤกษศาสตร์เบื้องต้นจะช่วยชีวิตคุณได้ซักวัน\\"","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"ปลดล็อคความสามารถในการรักษาตัวโดยไม่ใช้กล่องพยาบาลด้วยความเร็ว <span class=\\"Highlight1\\">{0}%</span> ของความเร็วปกติ ประสิทธิภาพของการรักษาตัวด้วยกล่องพยาบาลเพิ่มขึ้น <span class=\\"Highlight3\\">{1}%</span>","name":"ดูแลตัวเอง","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"คุณสามารถเพ่งสมาธิและเข้าฌานเพื่อทำให้ความเจ็บปวดหายไปได้ เสียงร้องด้วยเจ็บปวดจากอาการบาดเจ็บลดลง <span class=\\"Highlight1\\">{0}%</span>","name":"ใจแกร่ง","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"สัตว์ป่าดูเชื่อใจคุณและมักจะสงบเมื่อคุณอยู่ใกล้ โอกาสที่จะทำให้สัตว์ป่าแตกตื่นลดลง <span class=\\"Highlight1\\">{0}%</span><br>จิตใจอันเยือกเย็นทำให้คุณเอาชนะความต้องการกรีดร้องได้","name":"วิญญาณสงบ","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า<br><li>เห็นออร่าของตะขอในรัศมี <span class=\\"Highlight1\\">56 เมตร</span>จากจุดที่หยิบขึ้นมาถ้าผู้รอดชีวิตกำลังถูกแบก</li><br>ปลดล็อคความสามารถในการทำลายตะขอโดยไม่ต้องใช้กล่องเครื่องมือ<br><li>การทำลายตะขอโดยไม่ใช้กล่องเครื่องมือใช้เวลา <span class=\\"Highlight2\\">2.5 วินาที</span></li><li>ความสามารถในการทำลายมีคูลดาวน์ <span class=\\"Highlight3\\">{0} วินาที</span></li>","name":"นักทำลาย","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"ความคล่องแคล่วของคุณนั้นไร้เทียมทาน<br><br>หลังตกจากที่สูง การตอบสนองราวกับแมวจะลดการสะดุดที่เกิดขึ้น <span class=\\"Highlight1\\">{0}%</span> พร้อมลดความดังของเสียงครางจากการตกลงไป <span class=\\"Highlight1\\">100%</span> คุณจะเริ่มวิ่งด้วยความเร็ว <span class=\\"Highlight2\\">{1}%</span> ของความเร็วปกติเป็นเวลาสูงสุด <span class=\\"Highlight3\\">{2} วินาที</span><br><br>ส่งผลให้เกิดเอฟเฟกต์สถานะ<b>หมดกำลัง</b>เป็นเวลา<span class=\\"Highlight4\\">{3} วินาที</span><br><br><i>การลงพื้นอย่างสมดุล</i>จะใช้ไม่ได้ในขณะที่<b>หมดกำลัง</b><br><br>คุณจะไม่ฟื้นตัวจากเอฟเฟกต์สถานะ<b>หมดกำลัง</b>ขณะวิ่ง<br>","name":"การลงพื้นอย่างสมดุล","flavor":"\\"สูงกว่านี้ฉันก็เคยโดดมาแล้ว\\" -เนีย","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"เวลาหลายปีในการหลบหลีกตำรวจสอนให้คุณได้เรียนรู้เรื่องการซ่อนตัว ความเร็วการเคลื่อนที่ขณะย่อของคุณจะเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span><br>","name":"การหลบหลีกกลางกรุง","flavor":"\\"สียังไม่ทันแห้งฉันก็หายตัวไปนานแล้ว\\" -เนีย","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"ชีวิตในค่ำคืนอันยาวนานสอนให้คุณรู้จักใช้สิ่งที่มีอยู่อย่างคุ้มค่า คุณและพันธมิตรที่อยู่ในระยะ <span class=\\"Highlight2\\">{1} เมตร</span>จะลดอัตราการใช้ไอเท็มลง <span class=\\"Highlight1\\">{0}%</span> เมื่อพ้นระยะไปแล้ว เอฟเฟกต์นี้จะยังส่งผลต่อไปได้อีก <span class=\\"Highlight4\\">{2} วินาที</span><br>","name":"การเอาตัวรอดได้","flavor":"\\"ทำผิดแล้ว! เดี๋ยวฉันสอนคุณเองว่าต้องทำยังไง\\" -เนีย","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า<br>หากคุณเป็นผู้รอดชีวิตคนสุดท้ายที่เหลืออยู่ในเกม คุณจะมองเห็นออร่าของช่องทางหนีที่อยู่ในระยะ <span class=\\"Highlight1\\">{0}</span> เมตร ","name":"ถูกทิ้งไว้ข้างหลัง","flavor":"\\"ข้าไม่ได้มาเล่นๆ จัดการเองคนเดียวได้!\\" -บิล","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"คุณจะได้รับพลังอันไม่คาดคิดเมื่อช่วยพันธมิตรจากตะขอภายในรัศมีความน่ากลัวของฆาตกร<br>ผู้รอดชีวิตที่คุณปลดจากตะขอจะได้รับเอฟเฟกต์สถานะ<b>ทนทาน</b>เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br>","name":"เวลาที่ถูกหยิบยืม","flavor":"\\"คงจะเจ็บสุดๆ ไปเลย แต่แค่นี้ไม่ทำให้ตายหรอก ฮึดสู้กันหน่อยทหาร ได้เวลาลุยแล้ว!\\" — บิล โอเวอร์เบค","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"สมรภูมิที่ผ่านมาได้สอนอะไรคุณไว้นิดๆ หน่อยๆ เกี่ยวกับการเอาตัวรอด<br>มอบความสามารถในการฟื้นตัวอย่างสมบูรณ์จากสภาวะใกล้ตาย<b>หนึ่งครั้งต่อเกม</b> เพิ่มความเร็วในการฟื้นตัวเมื่อใกล้ตายขึ้น <span class=\\"Highlight1\\">{0}%</span><br>","name":"ทนทายาด","flavor":"\\"ห่าเอ๊ย ข้าถูกเล่นแล้วไง!\\" -บิล","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"เพื่อนของคุณที่เหลือรอดอยู่ไม่กี่คนนั้นควรได้รับการคุ้มกันอย่างดีที่สุด<br>เมื่อรักษาผู้รอดชีวิตคนอื่นที่อยุ่ในภาวะใกล้ตาย ความเร็วในการรักษาของคุณจะเพิ่มขึ้น <span class=\\"Highlight1\\">100%</span><br>ได้รับโทเค่นจากการกระทำใดๆ ต่อไปนี้<li>ช่วยออกจากตะขออย่างปลอดภัย</li><li>รับการโจมตีเพื่อปกป้องผู้รอดชีวิต</li><li>ช่วยเหลือผู้รอดชีวิตโดยการสตันฆาตกรด้วยแท่นไม้</li><li>ช่วยเหลือผู้รอดชีวิตโดยใช้ไฟฉายทำให้ฆาตกรมองไม่เห็น</li>ทุกครั้งที่ช่วยเหลือหรือรับการโจมตีเพื่อปกป้องผู้รอดชีวิต คุณจะได้รับโบนัสทับซ้อนต่อโทเค่นในการได้แต้มเลือดทั้งหมด <span class=\\"Highlight2\\">25%</span> สูงสุดถึง <span class=\\"Highlight3\\">{1}%</span> โดยจะได้รับแต้มเลือดโบนัสเป็นรางวัลหลังจากเล่นจบแล้วเท่านั้น","name":"เราจะอยู่ไปชั่วนิรันดร์","flavor":"“มาเซ่ จัดกันเลย! ข้าไม่สนหรอกเฟ้ย” -เดวิด คิง","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"Perk ที่เปิดใช้งานได้<br>คุณสามารถรับการโจมตีได้ และเมื่อได้รับบาดเจ็บ แตะที่คลังอะดรีนาลินแล้วพุ่งไปข้างหน้าอย่างรวดเร็วเพื่อหลีกเลี่ยงความเสียหาย<br><li>กดปุ่ม<i>เปิดใช้งานความสามารถ</i>ขณะวิ่งพุ่งไปข้างหน้า</li><li>ขณะวิ่งพุ่ง คุณจะหลีกเลี่ยงความเสียหายได้</li><li>ก่อให้เกิด<i>การหมดกำลัง</i>เป็นระยะเวลา <span class=\\"Highlight4\\">{0} วินาที</span><br>คุณจะไม่ฟื้นตัวจาก<i>การหมดกำลัง</i>ในขณะวิ่ง</li>","name":"ตายยาก","flavor":"“คืนนึงเรากำลังย่างผ่านตรอก ตอนมีขวดเบียร์เฟี้ยงมาใส่ข้าขวดแล้วขวดเล่า ข้าคิดกับตัวเองว่า “สนุกกันซักหน่อยมั้ยไอ้หนุ่ม เข้ามาเลยเซ่!” แล้วก็อัดกันซะฝุ่นตลบ สาบานเลย!” -เดวิด คิง","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"คุณจะติดเอฟเฟกต์สถานะ<span class=\\"Highlight1\\">ผุพัง</span>เป็นเวลาตลอดทั้งเกม<br>เลือดอันเข้มข้นของคุณแข็งตัวเกือบทันที<li>คุณจะไม่ทิ้งกองเลือดเอาไว้</li><li>เสียงร้องด้วยเจ็บปวดจากอาการบาดเจ็บลดลง <span class=\\"Highlight2\\">{0}%</span> ตลอดเวลา</li><li>ให้ความสามารถในการฟื้นตัวจากสถานะใกล้ตายได้อย่างสมบูรณ์</li>","name":"ไม่โอดครวญ","flavor":"“ข้าหลุดไปหน่อย แค่ซัดหมอนั่นไปครั้งเดียว เจ้าพวกนั้นมันก็มาแบนข้าไปเลยใช่มะล่ะ จากนั้นก็ไปผับต่อ ซดไปสองสามไพนต์แล้วก็ไปต่อเลย ข้าจะไปโอดครวญกับเรื่องพวกนี้ก็ไม่ได้อยู่ดี เข้าใจใช่มะ? ไม่อยากจะใส่ใจ” -เดวิด คิง","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"ยิ่งเพื่อนของคุณตกเป็นเหยื่อของฆาตกรมากขึ้นเท่าไร คุณก็จะยิ่งซ่อนตัวอยู่ท่ามกลางความโดดเดี่ยวและขัดขวาง<b>ความสามารถในการอ่านออร่า</b>จากตัวคุณของฆาตกรได้เท่านั้น<br>ทุกครั้งที่เพื่อนพ้องผู้รอดชีวิตถูกฆ่าหรือถูกบูชายัญ จะได้รับโทเค่น แต่ละโทเค่นที่ได้รับทำให้ฆาตกรไม่สามารถอ่านออร่าของคุณได้ภายในระยะสูงสุด <span class=\\"Highlight1\\">{0} เมตร</span>เมื่อมีผู้รอดชีวิตแต่ละคนที่<b>ถูกฆ่า</b>หรือ<b>ถูกบูชายัญ</b><br><li><i>เพิ่มโอกาสที่จะตกเป็นเป้าหมายของฆาตกร</i></li><li><i>ฆาตกรสามารถมีผู้รอดชีวิต<b>เป็นเป้าหมาย</b>ได้ทีละคนเท่านั้น</i></li>","name":"ผู้รอดชีวิตหนึ่งเดียว","flavor":"“มันคือบูกี้แมน” -ลอรี่ สโตรด","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"สายสัมพันธ์เหนือธรรมชาติเชื่อมโยงคุณเข้ากับฆาตกร<br><br>เมื่อใดก็ตามที่คุณถูกเผยออร่าให้ฆาตกรเห็น คุณเองก็จะเห็นออร่าของฆาตกรด้วย และคุณจะได้รับโบนัส <span class=\\"Highlight1\\">{0}%</span> ให้กับความเร็วในการรักษา การซ่อมแซม และการชะล้าง<br>หากคุณตกเป็นเป้าหมาย ออร่าของคุณจะถูกเผยให้ฆาตกรเห็นเป็นเวลา <span class=\\"Highlight2\\">3 วินาที</span>หนึ่งครั้งในทุก<span class=\\"Highlight3\\"> 30 วินาที</span><br>เพิ่มโอกาสที่คุณจะตกเป็นเป้าหมาย<br>","name":"เป้าหมายแห่งความลุ่มหลง","flavor":"“เขาจับตาดูฉันอยู่!” -ลอรี่ สโตรด","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"แทงคนที่มาทำร้ายเพื่อพยายามหนีรอดออกมา<br>หลังจากถูกช่วยจากตะขอหรือปลดตัวเองจากตะขอแล้ว <i>การโจมตีเด็ดขาด</i>จะทำงานเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br>หากถูกฆาตกรจับตัวได้ในขณะที่การโจมตีเด็ดขาดทำงานอยู่ ดำเนินการตรวจสอบทักษะให้สำเร็จเพื่อหนีพ้นพร้อมสตันฆาตกรเป็นเวลา <span class=\\"Highlight1\\"> 5 วินาที</span><br><li>การตรวจสอบทักษะที่สำเร็จหรือล้มเหลวจะทำให้<i>การโจมตีเด็ดขาด</i>หยุดการทำงานลง</li><li>คุณจะตกเป็นเป้าหมายของฆาตกรหากสตันสำเร็จ</li><br>การกระทำต่อไปนี้จะหยุดการทำงานของ<i>การโจมตีเด็ดขาด</i>ที่ทำงานอยู่ คือ <li>การซ่อมแซมเครื่องปั่นไฟ</li><li>การรักษาตัวเองหรือคนอื่น</li><li>การชำระล้างโทเทม</li><li>การทำลายตะขอ</li><li>การช่วยคนอื่นจากตะขอ</li><br><li><i>เพิ่มโอกาสที่คุณจะตกเป็นเป้าหมาย</i></li><li><i>ฆาตกรสามารถมีผู้รอดชีวิตเป็น<b>เป้าหมาย</b>ได้ทีละคนเท่านั้น</i></li>","name":"การโจมตีเด็ดขาด","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"เพิ่มศักยภาพความสามารถในการอ่านออร่าของคุณและทีมคุณ<br><li>เพิ่มระยะการอ่านออร่า <span class=\\"Highlight1\\">{0} เมตร</span></li><li>ผู้รอดชีวิตอาจได้รับผลกระทบจากเอฟเฟกต์สถานะ<i>เอื้อเฟื้อเผื่อแผ่</i>ทีละครั้งเท่านั้น</li>","name":"เอื้อเฟื้อเผื่อแผ่","flavor":"“ความใส่ใจทำให้ผมอยู่รอดมาได้ถึงทุกวันนี้ ยังไม่รวมหน้าตาอันหล่อเหลาของผมอีกนะ” -เอส","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"ทุกอย่างจะดีขึ้นในท้ายที่สุด รู้สึกได้เลย ความมั่นใจของคุณทำให้ความหวังของคนรอบข้างมีกำลังแรงกล้ามากยิ่งขึ้น ผู้รอดชีวิตที่เหลือทั้งหมดจะได้รับโบนัสโชคดี <span class=\\"Highlight1\\">{0}%</span> สำหรับผู้รอดชีวิตคนอื่นที่ยังไม่ตายแต่ละคน<br>","name":"เพิ่มเดิมพัน","flavor":"“จะให้พูดยังไงดีล่ะ? ผมก็แค่คนโชคดีเท่านั้น... คุณต้องได้อะไรจากโชคของผมไปบ้างแน่ๆ” -เอส","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"เทพีแห่งโชคมักจะให้สิ่งดีๆ กับคุณเสมอ<br>เมื่อเก็บไอเท็มจากหีบ มีโอกาส <span class=\\"Highlight1\\">{0}%</span> ที่อุปกรณ์เสริมระดับ<span class=\\"Highlight2\\">หายากมาก</span> (หรือต่ำกว่านั้น) จะอยู่ข้างใน<br>มีโอกาส<span class=\\"Highlight3\\">{1}%</span> ที่จะพบอุปกรณ์เสริมระดับ<span class=\\"Highlight4\\">ไม่ธรรมดา</span>หรือต่ำกว่านั้น<br>เมื่อหลบหนี เก็บอุปกรณ์เสริมทั้งหมดของไอเท็มคุณไว้","name":"ไพ่ตาย","flavor":"“ทุกอย่างที่ส่องประกายไม่ใช่ทองคำเสมอไป แต่ทองคำมันไร้ค่าในที่แบบนี้ ดังนั้นสิ่งนี้น่าจะมีประโยชน์มากกว่า” -เอส","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"คุณจัดการกับเครื่องจักรอย่างเชี่ยวชาญด้วยความแม่นยำและความระมัดระวังอย่างยิ่ง<br>ลดเสียงดังจากการซ่อมแซมของคุณและลดระยะการได้ยินลง <span class=\\"Highlight2\\">8 เมตร</span> หากการตรวจสอบทักษะในการซ่อมแซมล้มเหลว ก็มีโอกาสที่จะป้องกันการระเบิดของเครื่องปั่นไฟได้ <span class=\\"Highlight1\\">50%</span> <br>","name":"ช่างเทคนิค","flavor":"\\"ฉันจะซุ่มนะคราวนี้\\" -เฟิงหมิน","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"หลังจากกระโดดข้ามสิ่งกีดขวาง<b>อย่างรีบเร่ง</b> จะเร่งฝีเท้าให้วิ่งเร็วกว่าความเร็วตอนวิ่งปกติ <span class=\\"Highlight1\\">{0}%</span> เป็นเวลาสูงสุด <span class=\\"Highlight2\\">{1} วินาที</span> <br>ก่อให้เกิด<i>การหมดกำลัง</i>เป็นเวลา <span class=\\"Highlight4\\">{2} วินาที</span><br><i>ปราดเปรียว</i>ไม่สามารถใช้ได้ในขณะ<i>หมดกำลัง</i><br>คุณจะไม่ฟื้นตัวจาก<i>การหมดกำลัง</i>ในขณะวิ่ง<br>","name":"ปราดเปรียว","flavor":"“โมโหอะดิ?” -เฟิงหมิน","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"ประสาทสัมผัสอันแหลมคมของคุณกำลังตื่นตัวเต็มที่<br>เมื่อฆาตกรทำการทำลาย คุณจะมองเห็นฆาตกรเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br>","name":"ตื่นตัว","flavor":"\\"ฉันมีดวงตารู้แจ้ง\\" -เฟิงหมิน","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า เมื่อเครื่องปั่นไฟทั้งหมดทำงานแล้ว คุณจะมองเห็นประตูทางออกเมื่ออยู่ในระยะ <span class=\\"Highlight1\\">{0} เมตร</span> และขณะกำลังเปิดประตูทางออก ผู้รอดชีวิตคนอื่นจะมองเห็นออร่าของคุณได้ที่ระยะสูงสุด <span class=\\"Highlight2\\">{1} เมตร</span><br>ในขณะที่ <i>ตื่นสิ!</i> ทำงานอยู่ คุณจะเปิดประตูทางออกได้เร็วขึ้น <span class=\\"Highlight3\\">{2}%</span>","name":"ตื่นสิ!","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"คุณมีพรสวรรค์ในการค้นหายา การปลดล็อคหีบจะรวดเร็วขึ้น <span class=\\"Highlight1\\">{0}%</span> และเสียงที่เกิดขึ้นรวมทั้งระยะการได้ยินจะลดลง <span class=\\"Highlight2\\">{1} เมตร</span><br><i>เภสัช</i>รับประกันว่าคุณจะพบกล่องพยาบาลฉุกเฉินได้ในการปลดล็อคหีบสำเร็จเป็น<b>ครั้งแรก</b><br>","name":"เภสัช","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"คุณคอยดูแลเพื่อนฝูงแม้จะอยู่ในสถานการณ์อันเลวร้าย คุณและพันธมิตรที่อยู่ภายในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>จะฟื้นตัวจากเอฟเฟกต์สถานะ<b>หมดกำลัง เลือดท่วม ถูกกีดขวาง</b> และ<b>ตาบอด</b>ได้เร็วขึ้น <span class=\\"Highlight2\\">{1}%</span> เมื่อพ้นระยะไปแล้ว เอฟเฟกต์นี้จะยังส่งผลต่อไปได้อีก <span class=\\"Highlight4\\">{2} วินาที</span><br>","name":"เฝ้าระวัง","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"ไม่มีอะไรหยุดยั้งคุณได้ ความดื้อด้านอย่างรุนแรงของคุณในสถานการณ์เลวร้ายทำให้คุณคลานได้เร็วขึ้น <span class=\\"Highlight1\\">{0}%</span> พร้อมกับฟื้นตัวไปได้พร้อมกัน<br>","name":"ดื้อด้าน","flavor":"\\"อะไรกันวะเนี่ย? ฉันจะโค่นไอ้หมอนี่ลงให้ได้!\\"-นักสืบเดวิด แท็ปป์","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า เมื่อซ่อมแซมเครื่องปั่นไฟได้สำเร็จ คุณจะมองเห็นออร่าของเครื่องปั่นไฟ หีบ และโทเทมในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>เป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>หากคุณมีแผนที่ที่ติดตามจุดมุ่งหมาย, เครื่องปั่นไฟ, หีบ และโทเทม ที่มองเห็นได้ด้วย<i>ลางสังหรณ์ของนักสืบ</i>ก็จะเพิ่มลงบนแผนที่ด้วย","name":"ลางสังหรณ์ของนักสืบ","flavor":"\\"คุณจะบอกเราหน่อยได้ไหมว่าเมื่อคืนคุณอยู่ที่ไหน?\\" -นักสืบเดวิด แท็ปป์","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"การเข้าใกล้ฆาตกรทำให้คุณเปี่ยมด้วยความมุ่งมั่น ในทุก <span class=\\"Highlight1\\">{0} วินาที</span>ที่คุณยืนอยู่ภายในรัศมีความน่ากลัวของฆาตกรและไม่ได้อยู่ในการไล่ล่า คุณจะได้รับโทเคนสูงสุดถึง <span class=\\"Highlight2\\">{1} หน่วย</span><br>เมื่อ<i>ตรวจตรา</i>มีโทเคนอย่างน้อย <b>1 หน่วย</b> การตรวจสอบทักษะได้ดีจะกลายเป็นการตรวจสอบทักษะได้ยอดเยี่ยมและจะใช้งานโทเคนไป <b>1 หน่วย</b>และมอบโบนัสเพิ่มเติมแก่ความคืบหน้าในการซ่อมแซมเครื่องปั่นไฟ <span class=\\"Highlight3\\">1%</span>","name":"ตรวจตรา","flavor":"\\"ฉันจับแกได้ละ ฉันจับแกคุกเข่าลงได้แล้ว แกวิ่งหนีหางจุกตูดเพราะเราจับแกมา เราจะปิดคดีนี้ให้ได้!\\" -นักสืบเดวิด แท็ปป์","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"เมื่อกระโดดข้ามสิ่งกีดขวางอย่างรวดเร็วหรือวิ่งออกจากตู้เก็บของ คุณจะไม่ทิ้งรอยขีดข่วนเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br><i>เต้นกันหน่อย</i>จะมีคูลดาวน์ <span class=\\"Highlight1\\">{1} วินาที</span><br>","name":"เต้นกันหน่อย","flavor":"\\"เพลงหนึ่งจบลงไป เพลงใหม่กำลังขึ้นมา <br>เต้นกันกับฉันหน่อย รอคอยให้พายุพัดพา <br>ตามสเต็ปฉันไว้ อย่าได้ละสายตา <br>เต้นกันกับฉันหน่อย รอคอยดวงตะวันส่องนภา\\"<br>-\\"เต้นกันหน่อย\\" -เคท เดนสัน","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า คุณจะมองเห็นออร่าของแท่นไม้ กำแพงที่ทำลายได้ และตำแหน่งสิ่งกีดขวางเมื่ออยู่ในระยะ <span class=\\"Highlight1\\">{0} เมตร</span> <br><i>ประตูแห่งโอกาส</i>จะมีคูลดาวน์ <span class=\\"Highlight1\\">{1} วินาที</span> เมื่อกระโดดข้ามสิ่งกีดขวางหรือวางแท่นไม้ทิ้งไว้ระหว่างการไล่ล่า","name":"ประตูแห่งโอกาส","flavor":"“ตื่นแต่เช้า เข้าทำงาน สร้างชื่อเสียงเรียงนาม <br>เล็งเป้า แล้วยิงออกไป พุ่งเข้าชนอย่างงาม <br>รู้คุณค่าของศรัทธา กับครอบครัว แล้วคุณจะไม่ถาม<br>จงเปิดกว้าง ประตูแห่งโอกาสอันงดงาม” <br>- \\"ประตูแห่งโอกาส\\" โดย เคท เดนสัน","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"คุณเป็นนักสู้และจะทำทุกวิถีทางเพื่อหลบหนีจากเงื้อมมือของศัตรู เอฟเฟกต์การดิ้นรนของคุณที่มีต่อฆาตกรจะเพิ่มขึ้น <span class=\\"Highlight1\\">{0} %</span><br>คุณจะอำพรางความสามารถของฆาตกรในการมองเห็นออร่าของตะขอที่อยู่ในระยะ <span class=\\"Highlight1\\">{1} เมตร</span> <br>","name":"ฟัดเหวี่ยง","flavor":"\\"คุ้มคลั่งให้สุด <br>สะบัดให้หลุดออก <br>แกจับชั้นไว้ไม่ได้หรอก\\"<br>-\\"ฟัดเหวี่ยง\\" -เคท เดนสัน","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"Perk ที่เปิดใช้งานได้<br><i>หันเหความสนใจ</i>จะเปิดใช้งานเมื่ออยู่ในรัศมีความน่ากลัวของฆาตกรโดยไม่ได้อยู่ในการไล่ล่าเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span> <br><li>เมื่อ<i>หันเหความสนใจ</i>ถูกเปิดใช้งานแล้ว ให้กดปุ่ม<i>เปิดใช้งานความสามารถ</i>ในขณะย่อแล้วปาก้อนกรวดไปโดยไม่ขยับตัว ซึ่งจะสร้างการเตือนเสียงดังให้กับฆาตกรที่ระยะ <span class=\\"Highlight2\\">20 เมตร</span></li><br><li>ตัวจับเวลาของ Perk จะรีเซ็ตเมื่อใช้งานความสามารถไปแล้ว</li><br>สิ่งหันเหความสนใจประกอบด้วย:<br><li>การเตือนเสียงดัง</li><li>รอยขีดข่วน</li>","name":"หันเหความสนใจ","flavor":"“มีสิ่งที่ง่ายดายและสิ่งที่ถูกต้อง ถ้าคุณสับสนสองอย่างนี้ก็บอกไม่ได้แล้วว่าคุณเป็นอะไร” -อดัม ฟรานซิส","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"<i>พ้นอันตราย</i>จะเปิดใช้งานหลังจากดำเนินการช่วยผู้รอดชีวิตคนอื่นจากตะขออย่างปลอดภัยได้แล้ว<br>ตอนนี้คุณจะมีโอกาส <span class=\\"Highlight1\\">100%</span> ในการปลดตัวเองจากตะขอระหว่างพยายามหลบหนี<br>การปลดจากตะขอด้วย<i>พ้นอันตราย</i>จะทำให้ติดเอฟเฟกต์สถานะ<span class=\\"Highlight2\\">ผุพัง</span>เป็นเวลา <span class=\\"Highlight3\\">{0} วินาที</span>","name":"พ้นอันตราย","flavor":"“ผมถูกเลี้ยงดูมาโดยคนเข้มงวดที่สอนให้ผมทำสุดความสามารถเมื่อเกิดเรื่องเลวร้าย” -อดัม ฟรานซิส","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"คุณจะเริ่มต้นเกมด้วยความคืบหน้าในตรวจสอบทักษะเมื่อรักษาผู้รอดที่ชีวิต <span class=\\"Highlight1\\">-{1}%</span><br>สำหรับการตรวจสอบทักษะขณะรักษาผู้รอดชีวิตที่สำเร็จทุกครั้ง คุณจะได้รับโทเค่นสูงสุดถึง <span class=\\"Highlight2\\">{0} โทเค่น</span><br>แต่ละโทเค่นจะให้ความคืบหน้าโบนัส <span class=\\"Highlight1\\">+{2}%</span><br>การตรวจสอบทักษะได้ยอดเยี่ยมจะไม่เกิดขึ้นขณะใช้งาน<i>เรียนรู้ด้วยตนเอง</i><li><i>เรียนรู้ด้วยตนเอง</i>จะไม่ทำงานเมื่อใช้กล่องพยาบาลในการรักษา</li>","name":"เรียนรู้ด้วยตนเอง","flavor":"“ไม่มีข้อจำกัดว่าคุณจะทำอะไรได้สำเร็จ ตราบเท่าที่คุณทุ่มเทกับมัน” -อดัม ฟรานซิส","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"ทุกครั้งที่คุณหลุดออกจากตะขอ (ไม่ว่าหนีออกมาได้หรือถูกช่วยเอาไว้) ตะขอจะพังพร้อมทำให้คุณมองเห็นออร่าของฆาตกรเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span>ตะขอที่ถูก Perk นี้ทำลายจะใช้เวลา <span class=\\"Highlight2\\">180 วินาที</span>ในการเกิดใหม่<br>","name":"สติแตก","flavor":"“ประจุพุ่งพล่านจากพุงสัตว์ร้าย”<br>นี่คือภาพวาดหรือภาพร่างบนแผ่นไม้ที่ผมเจออยู่ข้างทาง ผมรู้สึกว่ามันมีเรื่องราวอะไรบางอย่างอยู่เลยไม่อยากปล่อยมันทิ้งไปให้เสียเปล่า –เจฟฟ์, ภาพเกลี่ยหมึกและสีน้ำมันบนแผ่นไม้ ขนาด 12x16","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"ปลดล็อคความสามารถการอ่านออร่า <span class=\\"Highlight1\\">{0}</span> คนแรกที่:<br><li>คุณช่วยเหยื่อออกจากตะขอหรือคุณถูกช่วยออกจากตะขอ</li><li>คุณรักษาเพื่อนหรือเพื่อนรักษาคุณจนเสร็จ</li><br>คุณสามารถสร้างการอ่านออร่ากับผู้รอดชีวิตคนอื่นได้สูงสุด <span class=\\"Highlight1\\">{0}</span> ครั้ง โดยจะไม่แทนที่การเชื่อมโยงที่มีอยู่จนกว่าจะถูกลบออกไป<br><br>หากคุณถูกฆาตกรจับแขวนบนตะขอ การเชื่อมโยงทั้งหมดที่คุณมีจะถูกลบออกไป","name":"ดูแลต่อเนื่อง","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"คุณเริ่มต้นเกมด้วยโทเค่นจำนวน <span class=\\"Highlight1\\">{0} โทเค่น</span><br><br>เมื่อใดที่ฆาตกรสามารถมองเห็นออร่าของคุณได้ <i>บิดเบือน</i>จะเริ่มทำงานแล้วใช้โทเค่นไป<br><br>ขณะที่<i>บิดเบือน</i>ทำงานอยู่ คุณจะไม่ทิ้งรอยขีดข่วนไว้และฆาตกรจะมองไม่เห็นออร่าของคุณเป็นเวลา <span class=\\"Highlight1\\">{1} วินาที</span><br><li><i>บิดเบือน</i>จะไม่ทำงานหากคุณอยู่ในสถานะใกล้ตายหรือติดกับดัก</li><br>","name":"บิดเบือน","flavor":"“มฤตยูหลงกลเสื้อคลุมขนเหยี่ยว”<br>ภาพสเก็ตช์ซึ่งได้รับแรงบันดาลใจจากค่ำคืนที่หลับไม่ลงกลางฤดูหนาว เป็นการเบิกพรมแดนเทพปกรณัมนอร์ส ว่าความกล้าหาญนั้นช่วยซ่อนงำมลทินของเราเอาไว้ได้แม้ในยามไม่มั่นคงที่สุดก็ตาม –เจฟฟ์, ภาพเขียนดินสอบนกระดาษสี ขนาด 12x12","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"การแบ่งปันประสบการณ์อันเจ็บปวดมีพลังที่ช่วยในการรักษาได้ ในขณะบาดเจ็บ การรักษาผู้รอดชีวิตโดยไม่ใช้กล่องพยาบาลจะทำให้คุณได้รับการรักษาไปด้วยที่อัตรา <span class=\\"Highlight1\\">{0}%</span><br>","name":"น้ำหนึ่งใจเดียว","flavor":"“ไม่หนีเวลามีเรื่องหนัก รับฟังปัญหาคนอื่น และคอยช่วยเหลือผู้ที่ต้องการ นั้นคือวิธีที่ทำให้คุณเข้มแข็งขึ้น นั่นคือวิธีที่ทำให้คุณเติบโต” -เจน โรเมโร","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"การบรรลุเป้าหมายจะเพิ่มความมั่นใจของคุณ<br>หลังจากซ่อมแซมเครื่องปั่นไฟสำเร็จ คุณจะไม่ทิ้งรอยขีดข่วนเอาไว้เป็นเวลา <span class=\\"Highlight1\\"> {0} วินาที</span><br>","name":"หนักแน่น","flavor":"“โอเค ใจเย็นไว้ อย่าไปคิดมากแล้วเดินหน้าต่อไปก็พอ เธอต้องทำได้” -เจน โรเมโร","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"ถ้าคุณตั้งใจจริงเมื่อไหร่ ขออย่าให้มีใครมาขวางทางคุณเอาไว้ก็แล้วกัน<br><br>ขณะยืนอยู่ในตู้เก็บของ <i>ปะทะซึ่งหน้า</i>จะเปิดใช้งานเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br>ขณะที่<i>ปะทะซึ่งหน้า</i>เปิดใช้งานอยู่ ให้พุ่งออกจากตู้เก็บของเพื่อใช้<i>ปะทะซึ่งหน้า</i> จะสตันฆาตกรเป็นเวลา <span class=\\"Highlight1\\">{1} วินาที</span>หากฆาตกรยืนอยู่ในระยะส่งผลของ<i>ปะทะซึ่งหน้า</i><br>ทำให้ติดเอฟเฟกต์สถานะ<span class=\\"Highlight3\\">หมดกำลัง</span>เป็นเวลา <span class=\\"Highlight1\\">{2} วินาที</span> <br>ไม่สามารถใช้งานปะทะซึ่งหน้าได้ขณะหมดกำลัง<br>คุณจะไม่ฟื้นตัวจากเอฟเฟกต์สถานะ<span class=\\"Highlight3\\">หมดกำลัง</span>ขณะวิ่ง <br>ไม่สามารถใช้งาน<i>ปะทะซึ่งหน้า</i>ได้หากมีอีกาบ่งบอกว่าคุณหยุดนิ่งอยู่<br>","name":"ปะทะซึ่งหน้า","flavor":"“ผู้คนจะถูกจดจำจากการท้าทายที่ข้ามพ้นมา คุณอาจวิ่งหนีและลืมเลือนสิ่งที่ทำได้ หรือจะเผชิญหน้ากับความกลัวแล้วย้ำเตือนให้โลกรู้คุณว่าคุณคือใคร” -เจน โรเมโร","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"คุณมีความสามารถอันแปลกประหลาดสำหรับหลบหนีสิ่งที่หลีกเลี่ยงไม่ได้<br><br>ขณะอยู่ในสภาวะใกล้ตาย ความคืบหน้าในการฟื้นตัวของคุณจำนวน <span class=\\"Highlight1\\">{0}%</span> จะเปลี่ยนไปเป็นความคืบหน้าในการดิ้นเมื่อถูกฆาตกรจับตัวได้ที่ <span class=\\"Highlight2\\">{1}%</span> ของความคืบหน้าการดิ้นสูงสุด<br>","name":"กลับกลอก","flavor":"\\"ไว้ว่ากัน\\" -แอช วิลเลียมส์","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"ปลดล็อคความสามารถในการอ่านออร่า ความคืบหน้าในการฟื้นตัวของผู้รอดชีวิตที่ใกล้ตายสามารถระบุได้จากความเข้มของออร่าที่ระยะสูงสุด <span class=\\"Highlight1\\">{0} เมตร</span><br><br>เมื่อคุณรักษาผู้รอดชีวิตจากสภาวะใกล้ตายให้เป็นสภาวะบาดเจ็บ คุณกับผู้รอดชีวิตที่ได้รักษาไปจะมองเห็นออร่าของฆาตกรเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>","name":"เตรียมรับมือ","flavor":"\\"คนอัดผีไม่เคยทิ้งใครไว้ข้างหลัง\\" -แอช วิลเลียมส์","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"ปีศาจร้ายหาทางเจอตัวคุณได้เสมอ<br><br>หลังจากเหตุการณ์ที่ได้รับคะแนนจากการตีคุ้มกัน <span class=\\"Highlight1\\">{0} ครั้ง</span> <i>ความกล้าหาญของชายชาตรี</i>จะเปิดใช้งาน<br><br>เมื่อทำงานแล้ว การโจมตีครั้งถัดไปจะทำให้คุณตกอยู่ใน<b>สภาวะใกล้ตาย</b>โดยข้าม<b>สภาวะบาดเจ็บ</b>ไปเลย<br><br>เมื่อพลังชีวิตกลับมาเต็มอีกครั้ง ฆาตกรจะมองเห็นออร่าของคุณหากอยู่ไกลจากฆาตกรเกินกว่า <span class=\\"Highlight2\\">{1} เมตร</span><br><br><i>ความกล้าหาญของชายชาตรี</i>จะหยุดทำงานลงเมื่อคุณตกอยู่ในสภาวะใกล้ตายอีกครั้ง<br><i><li>เพิ่มโอกาสในการกลายเป็นเป้าหมายของฆาตกร</li><li>ฆาตกรสามารถมีผู้รอดชีวิต<b>เป็นเป้าหมาย</b>ได้ทีละคนเท่านั้น</li></i><br>","name":"ความกล้าหาญของชายชาตรี","flavor":"\\"ปีศาจร้ายมันวางเป้าไว้กลางหลังฉันอันเท่าบ้าน\\" -แอช วิลเลียมส์","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"คุณแสวงหาความยุติธรรมและเปิดโปงความจริงไม่ว่าจะมีอุปสรรคขัดขวางอย่างไร<br><br>ผู้รอดชีวิตทุกคนในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>จะมองเห็นออร่าของเครื่องปั่นไฟที่คุณกำลังซ่อมแซมอยู่ <br><br>หากฆาตกรตีผู้รอดชีวิตจนล้มลงหนึ่งคนในขณะที่คุณกำลังซ่อมแซมเครื่องปั่นไฟ คุณจะมองเห็นออร่าของผู้รอดชีวิตคนอื่นทั้งหมดเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>","name":"เคียงข้างกันดีที่สุด","flavor":"“ไปเผาห้องทดลองนั่นให้ราบกันเถอะ” -แนนซี่ วีลเลอร์","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"เมื่อมีเป้าหมายอยู่ในใจก็ไม่มีทางหันหลังกลับ รอขอโทษเลยดีกว่าต้องขออนุญาต <br><br>คุณจะมองเห็นรอยขีดข่วนของตัวเองตลอดเวลา<br><br>คุณจะเดินได้เร็วขึ้น <span class=\\"Highlight1\\">{0}%</span><br>","name":"ยึดมั่น","flavor":"\\"ฉันจะทำเรื่องที่เราเริ่มกันไว้ให้สำเร็จ ฉันจะต้องฆ่ามันให้ได้\\" -แนนซี่ วีลเลอร์","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"คุณมองลึกเข้าไปในจิตใจแล้วเชื่อในสัญชาตญาณเมื่อรู้สึกหมดหวังหรืออ้างว้าง<br><br>ทุกครั้งที่คุณดำเนินการชะล้างโทเทมสำเร็จ <i>พละกำลังในจิตใจ</i>จะเปิดใช้งาน หากคุณติด<b>เอฟเฟกต์สถานะผุพัง</b>อยู่แล้ว <i>พละกำลังในจิตใจ</i>จะไม่เปิดใช้งาน<br><br>ในขณะที่<i>พละกำลังในจิตใจ</i>ทำงานอยู่ การซ่อนตัวในตู้เก็บของเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span>เมื่อบาดเจ็บจะรักษาคุณให้หายจากสถานะบาดเจ็บกลายเป็นแข็งแรงโดยอัตโนมัติ<br><br><i>พละกำลังในจิตใจ</i>จะปิดใช้งานลงเมื่อเริ่มการทำงานได้สำเร็จ<br>","name":"พละกำลังในจิตใจ","flavor":"“ตลอดเวลามานี้ฉันแสร้งทำเป็นว่าทุกสิ่งทุกอย่างโอเค แต่จริงๆ แล้วมันไม่ใช่” -แนนซี่ วีลเลอร์","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"ถึงแม้จะมีชื่อเรื่องความเห็นแก่ตัว แต่คุณก็เสี่ยงชีวิตเพื่อช่วยเหลือคนที่ต้องการ<br><br>เมื่อปลดผู้รอดชีวิตออกจากตะขอ ผู้รอดชีวิตดังกล่าวจะไม่ทิ้งรอยขีดข่วนหรือรอยเลือดเอาไว้เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span> คุณจะมองเห็นออร่าของฆาตกรและฆาตกรก็จะมองเห็นออร่าของคุณเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>","name":"พี่เลี้ยงเด็ก","flavor":"“ฉันสัญญาเอาไว้ว่าจะคอยดูแลพวกนายให้ปลอดภัย และฉันต้องทำให้ได้” -สตีฟ แฮร์ริงตัน","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"ชีวิตสอนให้คุณรู้ซึ้งถึงความสำคัญของมิตรภาพที่มอบพลังให้แก่คุณ<br><br>ขณะที่คุณกำลังอยู่ในช่วงดิ้นรนบนตะขอ <i>มิตรภาพ</i>จะเปิดใช้งาน<br><br>หากมีผู้รอดชีวิตคนอื่นอยู่ห่างจากคุณภายในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>ขณะที่<i>มิตรภาพ</i>ทำงานอยู่ ตัวจับเวลาตะขอจะหยุดชั่วคราวเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>","name":"มิตรภาพ","flavor":"\\"จำไว้ก็แล้วกันว่าพอนายไปยืนอยู่ตรงนั้น... ให้ทำเป็นเหมือนไม่สนใจใยดี นั่นแหละพวก นายเริ่มเป็นแล้ว ใช้ได้เลย\\" -สตีฟ แฮร์ริงตัน","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"เมื่อคุณรักษาผู้รอดชีวิตคนอื่นจนมีสภาพร่างกายเท่ากันแล้ว <i>พลังฮึด</i>จะเปิดใช้งาน หากคุณติด<span class=\\"Highlight1\\">เอฟเฟกต์สถานะผุพัง</span>อยู่แล้ว <i>พลังฮึด</i>จะไม่เปิดใช้งาน<br><br>ขณะที่<i>พลังฮึด</i>ทำงานอยู่นั้น ครั้งถัดไปที่ถูกปลดจากตะขอหรือหลุดจากตะขอได้เอง คุณจะติด<span class=\\"Highlight1\\">เอฟเฟกต์สถานะผุพัง</span> หลังจากเวลาผ่านไปรวม <span class=\\"Highlight2\\">{0} วินาที</span> <i>พลังฮึด</i>จะรักษาคุณให้หายจากสถานะบาดเจ็บกลายเป็นแข็งแรงโดยอัตโนมัติ<br><br><i>พลังฮึด</i>จะหยุดทำงานลงเมื่อคุณถูกรักษาจนหายสนิท หรือถ้าหากคุณตกอยู่ในสภาวะใกล้ตายก่อนที่<i>พลังฮึด</i>จะเริ่มทำงานได้สำเร็จ คุณจะหลุดจาก<span class=\\"Highlight1\\">เอฟเฟกต์สถานะผุพัง</span><br>","name":"พลังฮึด","flavor":"\\"ใช่แล้ว ขอปฏิเสธ\\" -สตีฟ แฮร์ริงตัน","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"คุณมีรอยถลอกและแผลฟกช้ำอยู่มากพอตัว แต่โชคก็เข้าข้างคุณอยู่เสมอ<br><br><i>เบรกนำโชค</i>จะเริ่มทำงานทุกครั้งที่คุณได้รับบาดเจ็บ ขณะที่<i>เบรกนำโชค</i>ทำงาน คุณจะไม่ทิ้งรอยเลือดหรือรอยขีดข่วนเอาไว้เป็นเวลารวม <span class=\\"Highlight1\\">{0} วินาที</span><br><br><i>เบรกนำโชค</i>จะปิดใช้งานไปอย่างถาวรตลอดทั้งเกมเมื่อเวลารวมดังกล่าวหมดลง<br>","name":"เบรกนำโชค","flavor":"“แค่นั้นทำอะไรฉันไม่ได้หรอก ไม่เลยซักนิด” - คิมูระ ยูอิ ","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"คุณยืนหยัดเพื่อตัวเองและใช้ทุกสิ่งทุกอย่างที่คว้ามาได้เพื่อสร้างโอกาส<br><br>กด<i>ปุ่มเปิดใช้งานความสามารถ</i>ค้างไว้เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span>ขณะยืนอยู่ข้างแท่นไม้ที่ล้มอยู่เพื่อรีเซ็ตให้กลับไปวางตั้งอีกครั้ง<br><br><i>ทุกวิถีทาง</i>มีคูลดาวน์ <span class=\\"Highlight2\\">{1} วินาที</span><br>","name":"ทุกวิถีทาง","flavor":"“ฉันจะอัดแกให้สุดกำลัง แล้วฉันก็จะอัดซ้ำอีกที” -คิมูระ ยูอิ ","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"คุณทำสิ่งต่างๆ ได้อย่างรวดเร็วเมื่อพบคนกำลังมีปัญหา ให้แรงบันดาลใจในการฟันฝ่าอุปสรรคไปได้<br><br>คุณจะได้รับเอฟเฟกต์สถานะ<span class=\\"Highlight2\\">เร่งรีบ</span>เมื่ออยู่ภายในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>จากผู้รอดชีวิตที่ถูกจับตัวไป ทำให้มีความเร็วการเคลื่อนที่เพิ่มขึ้น <span class=\\"Highlight3\\">{1}%</span> ความเร็วการดิ้นของผู้รอดชีวิตที่ถูกจับตัวจะเพิ่มขึ้น <span class=\\"Highlight4\\">{2}%</span><br>","name":"ฝ่าขวากหนาม","flavor":"“เร็วเข้า เราต้องฝ่ามันไปให้ได้” -คิมูระ ยูอิ","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"คุณได้เรียนรู้ว่า วิธีการที่เงียบเชียบบางครั้งก็เป็นสิ่งที่ดีที่สุดแล้ว<br><br>เมื่อคุณถูกปลดจากตะขอหรือหนีออกจากตะขอได้ <i>ไม่มีการบันทึก</i>จะเปิดใช้งานเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br><br>เมื่อ<i>ไม่มีการบันทึก</i>กำลังทำงาน ออร่าของคุณจะไม่แสดงให้ฆาตกรเห็น และเสียงร้องด้วยความเจ็บปวดจากการบาดเจ็บจะลดลง <span class=\\"Highlight2\\">{1}%</span><br>","name":"ไม่มีการบันทึก","flavor":"\\"เชื่อฉันเถอะ ฉันตรวจสอบอย่างละเอียดและรอบคอบแล้ว\\" -ซาริน่า แคสเซอร์","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"คุณสังเกตว่าผู้คนจะสนใจกับอะไรก็ตามที่มีเสียงดังที่สุด<br><br>เมื่อคุณซ่อมแซมเครื่องปั่นไฟ 1 เครื่องเป็นเวลาอย่างน้อย <span class=\\"Highlight1\\">{0} วินาที</span> มันจะไฮไลต์เครื่องนั้นด้วยออร่าสีเหลือง และจะไฮไลต์ไปจนกว่าคุณจะซ่อมแซมมันสำเร็จ หรือไปซ่อมแซมเครื่องใหม่ หรือเข้าไปในล็อกเกอร์<br><br>การเข้าไปในล็อกเกอร์จะทำให้เกิดเสียงดัง ที่ทำให้ฆาตกรในตำแหน่งเครื่องปั่นไฟที่ถูกไฮไลต์รู้ <br><li><i>ปลาแฮร์ริงแดง</i>สามารถเกิดขึ้นเพียงหนึ่งครั้งในทุก <span class=\\"Highlight2\\">{1} วินาทีเท่านั้น</span></li><br>","name":"ปลาแฮร์ริงแดง","flavor":"\\"การตัดต่อข่าวคือเรื่องยุ่งยากและซับซ้อน นี่คือความจริง\\" -ซาริน่า แคสเซอร์","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"คุณเสี่ยงชีวิตและบาดเจ็บเพื่อผู้อื่น<br><br><i>เพื่อผู้คน</i>จะทำงานเมื่อพลังชีวิตเต็มเท่านั้น<br><br>กดปุ่ม<i>เปิดใช้งานความสามารถ</i>ในตอนที่กำลังรักษา ผู้รอดชีวิตคนอื่นๆ โดยที่ไม่ได้ใช้กล่องพยาบาล จะรักษาพวกเขาจากสภาวะใกล้ตายเป็นบาดเจ็บ หรือจากบาดเจ็บเป็นแข็งแรงในทันที<br><br>คุณจะบาดเจ็บแทนและติดเอฟเฟกต์สถานะ<b>ผุพัง</b>เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br><br>คุณจะตกเป็นเป้าหมาย<br><br>การใส่ Perk นี้จะ<b>ลด</b>อัตราการตกเป็นเป้าหมายของฆาตกร ในตอนที่เริ่มเกม<br>","name":"เพื่อผู้คน","flavor":"\\"เราสามารถเขียนเรื่องราวของเราเองและตัดสินใจได้ว่ามันจะจบลงยังไง\\" -ซาริน่า แคสเซอร์","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"คุณได้ผ่านความยากลำบากมาอย่างใหญ่หลวง และนั่นทำให้คุณแข็งแกร่งขึ้น<br><br>ได้รับเอฟเฟกต์สถานะ<b>ความทนทาน</b>เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span> หลังได้รับการรักษาหรือฟื้นตัวจากสภาวะใกล้ตาย<br>เมื่อต้องคำสาป คุณสามารถฟื้นตัวเต็มที่จากสภาวะใกล้ตาย <br><br>เอฟเฟกต์สถานะนี้เกิดขึ้นได้เพียงหนึ่งครั้งในทุกๆ <span class=\\"Highlight2\\">30 วินาที</span>","name":"พิทักษ์วิญญาณ","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"มันราวกับส่วนที่แฝงเร้นอยู่ภายในของคุณตื่นขึ้นมา คุณรู้สึกราวไม่ได้มีเพียงตัวเองแต่สามารถเอื้อมถึงการช่วยเหลือของคนอื่นได้<br><br>เมื่อคุณหรือเป้าหมายบาดเจ็บ คุณทั้งคู่จะต่างเห็นออร่าของกันและกัน<br><br>หลังจากรักษาผู้รอดชีวิตที่ตกเป็นเป้าหมายหรือผู้รอดชีวิตที่ตกเป็นเป้าหมายรักษาคุณเสร็จ คุณทั้งคู่ได้รับเอฟเฟกต์สถานะ<b>เร่งรีบ</b> <span class=\\"Highlight1\\">{1}%</span> จนกว่าจะห่างกันเกิน <span class=\\"Highlight2\\">16 เมตร</span><br><br>ลดโอกาสของการตกเป็นเป้าหมาย<br><br>หากคุณตกเป็นเป้าหมาย Perk นี้จะปิดการทำงาน","name":"สัญญาเลือด","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"คุณคุ้นเคยกับการถูกพลังชั่วร้ายไล่ล่า และคุณก็เริ่มใช้มันมาเป็นข้อได้เปรียบ<br><br><i>พันธมิตรผู้อดกลั้น</i>เปิดใช้งานหลังซ่อมแซมเครื่องปั่นไฟรวม <span class=\\"Highlight1\\">{0} วินาที</span><br><br>เมื่อทำการซ่อมแซมเครื่องปั่นไฟขณะที่ Perk ทำงานอยู่ กด<i>ปุ่มเปิดใช้งานความสามารถ</i>เพื่อเรียกเอนทิตีมาบล็อกเครื่องปั่นไฟเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span> Perk จะปิดการทำงาน<br><br>ผู้เล่นทุกคนจะเห็นออร่าสีขาวของเครื่องปั่นไฟที่ได้รับผลกระทบ","name":"พันธมิตรผู้อดกลั้น ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"คุณมีสมาธิกับวิธีหลบหนีของตัวเองเป็นพิเศษ<br><br>คุณมองเห็นออร่าของเครื่องปั่นไฟในระยะ <span class=\\"Highlight1\\">{0} เมตร</span><br><br>ทุกครั้งที่ซ่อมเครื่องปั่นไฟเสร็จ <i>ความเพ้อฝัน</i>จะใช้งานไม่ได้เป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span>","name":"ความเพ้อฝัน","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"คุณไม่ยอมแพ้ แม้ในโมงยามอันมืดมิดที่สุด<br><br>ความเร็วในการรักษาหรือปลดตะขอของคุณเพิ่มขึ้น <span class=\\"Highlight1\\">{0}%</span> ต่อผู้รอดชีวิตแต่ละคนที่บาดเจ็บ ถูกแขวนตะขอ หรือใกล้ตาย<br>","name":"มาตรการสิ้นหวัง","flavor":"“พอพวกเขามาพร้อมลูกตุ้มยักษ์ จงสร้างกำแพงที่แข็งแกร่งขึ้น” —เฟลิคส์ ริชเทอร์","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"คุณรู้วิธีใช้เครื่องมือตัวเองให้เกิดประโยชน์สูงสุด<br><br>ไอเท็มที่ใช้ไปแล้วจะเติมชาร์จให้ตัวเอง <span class=\\"Highlight1\\">{0}%</span> หลังผ่านไป <span class=\\"Highlight2\\">{1} วินาที โดยจะเกิดขึ้นหนึ่งครั้งในเกม</span><br>","name":"ทนไม้ทนมือ","flavor":"“สถาปัตยกรรมคือวิญญาณของอารยธรรม” —เฟลิคส์ ริชเทอร์","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"คุณดวงตาอันรอบคอบคอยสอดส่องสิ่ีงที่อาจมองข้าม<br><br>เริ่มเกมโดยมี <span class=\\"Highlight1\\">{0} โทเค่น</span> เมื่อหีบถูกเปิดเอาไว้แล้ว ใช้หนึ่งโทเค่นเพื่อค้นหาไอเท็มในนั้น ค้นในหีบได้ใบละครั้งเท่านั้น<br><br>คุณค้นในหีบ<span class=\\"Highlight2\\">เร็วขึ้น {1}%</span>","name":"การประเมิน","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"ไลฟ์สไตล์อันเต็มไปด้วยการผจญภัยของคุณต้องมีช่วงเวลาที่ไปผิดทิศทางอย่างมีเล่ห์เหลี่ยม<br><br>การทำอะไรกับตู้ล็อกเกอร์ขณะวิ่งจะทำให้เกิดเสียงดังตรงตำแหน่งที่คุณอยู่ และทำให้คุณไม่ทิ้งรอยขีดข่วนเอาไว้เป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span><br><br>ขณะที่ Perk นี้ทำงานและกำลังวิ่ง คุณจะเข้าตู้ล็อกเกอร์ไม่ได้อีกต่อไป<br><br><i>การหลอกลวง</i>จะเกิดขึ้นได้หนึ่งครั้งในทุก <span class=\\"Highlight2\\">{1} วินาที</span>เท่านั้น","name":"การหลอกลวง","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"คุณไม่เคยยอมแพ้และตอนนี้ก็ยังไม่ได้จะเริ่ม<br><br>ขณะที่ถูกฆาตกรแบกอยู่ ดิ้นรนให้ถึง <span class=\\"Highlight1\\">{0}%</span> ของแถบความคืบหน้าเพื่อเปิดใช้<i>การดิ้นรนสุดพลัง</i> ขณะที่<i>การดิ้นรนสุดพลัง</i>กำลังทำงาน คุณสามารถทำให้แท่นไม้ที่ตั้งอยู่ใกล้ๆ หล่นลงมาสตันฆาตกรได้<br>","name":"ดิ้นรนสุดพลัง","flavor":"“ครั้งหนึ่งฉันวางใจให้คนอื่นปกป้องแล้วก็เสียทุกอย่างไป มันจะไม่มีทางเป็นแบบนั้นอีกแล้ว” —เอโลดี้ ราโคโต้","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"บางครั้งเราก็ต้องยอมสละผู้อื่นเพื่อให้ตัวเองขึ้นนำ<br><br>เมื่อใดก็ตามที่ผู้รอดชีวิตถูกแขวนตะขอ คุณจะได้รับ <span class=\\"Highlight1\\">{0} โทเค่น</span>คุณจะใช้โทเคนทั้งหมดพลังจากตรวจสอบทักษะได้เยี่ยมกับเครื่องปั่นไฟ แต่ละโทเค่นที่ใช้ไปจะมอบคามคืบหน้าโบนัส <span class=\\"Highlight2\\">{1}%</span> ให้ตรวจสอบทักษะได้เยี่ยมขณะกำลังซ่อมเครื่องปั่นไฟ<br>","name":"ช่องทางด่วน","flavor":"\\"คนอ่อนแอย่อมถูกสละทิ้งก่อน มันเป็นเรื่องธรรมชาติ เป็นธรรมของธุรกิจ... มันเป็นความจริงที่แทบทุกคนไม่อยากเผชิญ\\" — ยุนจิน","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"คู่แข่งของคุณพลาดเมื่อใด คุณก็ฉวยโอกาสไว้เมื่อนั้น<br><br>หลังจากใช้แท่นไม้สตันฆาตกร ก็วิ่งทันทีด้วยความเร็ว <span class=\\"Highlight1\\">{0}%</span> ของความเร็วในการวิ่งตามปกติของคุณเป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>ทำให้ติดเอฟเฟกต์สถานะ<b>หมดกำลัง</b>เป็นเวลา <span class=\\"Highlight3\\">{2} วินาที</span><br>ใช้ Perk นี้ขณะ<b>หมดกำลัง</b>ไม่ได้<br>","name":"ดังเปรี้ยงปร้าง","flavor":"\\"ฉันจัดการกับพวกโรคจิตใส่สูทมาแล้ว แกมันแค่อัปลักษณ์กว่าและแต่งตัวแย่กว่า\\" —ยุนจิน","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"ชีวิตไม่เคยให้อภัยเรา บางครั้งการระวังตัวเองไว้ก็เป็นการดีที่สุด<br><br>เมื่อใดก็ตามที่ผู้รอดชีวิตในระยะ <span class=\\"Highlight1\\">{0} เมตร</span>ของคุณโดนการโจมตีพื้นฐานหรือการโจมตีพิเศษเข้า <i>รู้รักษาตัวรอด</i>จะทำงาน<br>รอยขีดข่วน กองเลือด และเสียงร้องด้วยความเจ็บปวดของคุณจะถูกซ่อนไว้เป็นเวลา <span class=\\"Highlight2\\">{1} วินาที</span><br>","name":"รู้รักษาตัวรอด","flavor":"\\"บางอย่างที่ฉันเรียนรู้จากวงการก็คือ น้ำเชี่ยวอย่าขวางเรือ\\" — ยุนจิน","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"คุณรู้ว่าจะต้านทานศัตรูที่แข็งแกร่งกว่าตัวเองอย่างไร และมันเริ่มด้วยการล่าและเขี่ยพวกเขาให้พ้นการสนับสนุน<br><br>คุณชำระล้างโทเทมเร็วขึ้น <b>20%</b> หลังจากชำระล้างแล้ว คุณจะเห็นออร่าของโทเทมที่อยู่ไกลจากคุณที่สุดเป็นเวลา <span class=\\"Highlight1\\">{0} วินาที</span> และคุณจะได้โบนัสความเร็วที่ทับซ้อนได้เพิ่มเติม <span class=\\"Highlight2\\">{1}%</span> ต่อการชำระล้างโทเทมไปตลอดเกมที่เหลือ<br><br><span class= \\"FlavorText\\">\\"ฉันไม่รังเกียจงานสืบสวนเล็กๆ หรอกนะ\\" —จิลล์ วาเลนไทน์</span>","name":"แรงโต้กลับ","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"คุณกลับมาได้ทั้งที่แทบไม่มีทาง... แล้วคุณก็ทำแบบเดิมอีก<br><br>หลังถูกปลดจากตะขอหรือปลดตัวเองจากตะขอแล้วจะได้รับความคืบหน้าในการรักษา <span class=\\"Highlight1\\">{0}%</span> ทันที<br><br><span class= \\"FlavorText\\">\\"ตาฉันละอีเวร\\" —จิลล์ วาเลนไทน์</span>","name":"การฟื้นคืน","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"เมื่อการต่อสู้ซึ่งหน้าไม่ใช่ทางเลือก คุณก็ยังหาทางเอาคืนได้<br><br><i>กับระเบิดสังหาร</i>ทำงานหลังจากความคืบหน้าในการซอมแซมเครื่องปั่นไฟเท่ากับ <span class=\\"Highlight1\\">{0}%</span> <br>หลังจากซ่อมแซมเครื่องปั่นไฟเป็นเวลาอย่างน้อย <span class=\\"Highlight2\\">{1} วินาที</span> ให้แตะ<i>ปุ่มความสามารถ</i>เพื่อวางกับดักที่จะทำงานเป็นเวลา <span class=\\"Highlight3\\">{2} วินาที</span> เครื่องปั่นไฟที่ได้รับผลกระทบจะปรากฏให้ผู้เล่นทุกคนเห็นเป็นออร่าสีเหลือง สามารถใช้กับดักกับเครื่องปั่นไฟได้เพียงหนึ่งชิ้นเท่านั้น<br><li>เมื่อฆาตกรทำเครื่องปั่นไฟที่วางกับดักไว้เสียหาย กับดักจะระเบิด ทำให้ฆาตกรสตันและทุกคนแถวนั้นตาบอด จากนั้น<i>กับระเบิดสังหาร</i>จะหยุดทำงาน</li><br><br><span class= \\"FlavorText\\">\\"อยากได้ S.T.A.R.S. เหรอ? ก็เอา S.T.A.R.S. ไปเลย! \\" —จิลล์ วาเลนไทน์</span>","name":"กับระเบิดสังหาร","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"ความเจ็บปวดก็ทำร้ายคุณได้อย่างที่ทำร้ายคนอื่น แต่คุณชอบให้ไม่มีใครรู้มากกว่า<br><br>เมื่อรักษา คุณไม่ส่งเสียงอะไรแม้กระทั่งเสียงกัดฟันอย่างเจ็บปวด การตรวจสอบทักษะการรักษาล้มเหลวก็ไม่ทำให้เกิดเสียงเตือนอะไร แถมการรักษาจะลดลงเพียง <span class=\\"Highlight1\\">{0}%</span> เท่านั้น<br><br><span class= \\"FlavorText\\">\\"ฉันทำได้\\" —ลีออน เอส. เคนเนดี</span>","name":"กัดฟันทน","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"คุณปรับตัวเข้ากับโลกในภาวะโกลาหลแล้วเอาเศษซากต่างๆ มาทำทุกอย่างที่ทำได้<br><br>หลังจากทำความคืบหน้าได้ <span class=\\"Highlight1\\">{0}%</span> กับเครืองปั่นไฟเครื่องใดก็ได้ <i>ระเบิดแสง</i>จะทำงาน <br>เข้าตู้ล็อกเกอร์ไปมือเปล่าแล้วกดปุ่มความสามารถเพื่อทำระเบิดแสง<br><li>1 ลูก</li><li>การจุดชนวนจะทำให้เกิดเสียงระเบิดหนึ่งครั้งและแสงสว่างเจิดจ้า</li><li>ทำให้เกิดการเตือนด้วยเสียง</li><li>ใช้เพื่อเบนความสนใจหรือทำให้มองไม่เห็นได้</li><br>เมื่อหนีจากเกมคุณจะไม่ได้เอาระเบิดแสงมาด้วย<br><br><span class= \\"FlavorText\\">\\"ไปให้พ้นเลยนะ!\\" —ลีออน เอส. เคนเนดี</span>","name":"ระเบิดแสง","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"คุณจับตาดูเป้าหมายเป็นอย่างดีในขณะที่มันกำลังจะหลุดมือไป<br><br>ตรวจสอบทักษะให้ได้ระดับดีหรือยอดเยี่ยม <span class=\\"Highlight1\\">{0} ครั้ง</span>ขณะกำลังซ่อมแซมเครื่องปั่นไฟเพื่อเปิดใช้งาน<i>จิตวิญญาณมือใหม่</i>ไปตลอดเกมที่เหลือ<br>เมื่อทำงานแล้ว คุณจะเห็นออร่าของเครื่องปั่นไฟที่กำลังเสียความคืบหน้า<br><br><span class= \\"FlavorText\\">\\"ผมจะหยุดมัน ผู้หมวด ผมสัญญา\\" —ลีออน เอส. เคนเนดี</span>","name":"จิตวิญญาณมือใหม่","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/th/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/th/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"ผู้นำผู้ร้อนรน สามารถระบุตำแหน่งพันธมิตรและเพิ่มผลสำเร็จของพันธมิตรได้<BR><BR>Perk ประจำตัว <B>พันธะ</B> <B>พิสูจน์ตน</B> และ<B>ผู้นำ</B> ทำให้เข้าใกล้ผู้รอดชีวิตคนอื่นได้ และให้โบนัสกับการกระทำของผู้รอดชีวิตและของตนเอง","name":"ดไวท์ แฟร์ฟิลด์","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"นักกีฬาผู้กระฉับกระเฉง สามารถวิ่งเร็วสู้ฆาตกรส่วนใหญ่ได้<BR><BR>Perk ประจำตัว <B>รวดเร็วและเงียบงัน</B> <B>วิ่งสุดกำลัง</B> และ<B>อะดรีนาลิน</B> ทำให้ได้เปรียบในการวิ่งหนีการไล่ล่าและทิ้งระยะห่างระหว่างตัวเธอกับฆาตกร","name":"เม็ก โทมัส","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"นักพฤกษศาสตร์ผู้ใฝ่รู้ สามารถเพิ่มความสามารถในการรอดชีวิตของทีมและของตนเองได้<BR><BR>Perk ประจำตัว <B>เห็นใจ</B> <B>ความรู้พฤกษศาสตร์</B> และ<B>ดูแลตัวเอง</B> ทำให้มองหาผู้รอดชีวิตที่บาดเจ็บพบ และรักษาทีมกับตัวเองได้เป็นอย่างดียิ่งขึ้น","name":"คลอเด็ตต์ มอเรล","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"นักเอาตัวรอดผู้สันโดษ สามารถรอดชีวิตได้ในแทบทุกสถานการณ์<BR><BR>Perk ประจำตัว <B>ปณิธานอันแรงกล้า</B> <B>เจตนาอันเยือกเย็น</B> และ<B>ทำลาย</B> ทำให้ขยับไปมาในสิ่งแวดล้อมได้เป็นอย่างดี และรอดชีวิตได้เมื่อเกิดการบาดเจ็บ","name":"เจค พาร์ค","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"ศิลปินกลางเมือง สามารถหลบหนีและซ่อนตัวได้อย่างง่ายดาย<BR><BR>Perk ประจำตัว <B>การลงพื้นอย่างสมดุล</B> <B>การหลบหลีกกลางกรุง</B> และ<B>การเอาตัวรอดได้</B> ทำให้เหมาะกับการทำตามจุดมุ่งหมายให้สำเร็จและการหลบหลีกอย่างว่องไวได้เป็นอย่างดี","name":"เนีย คาร์ลสัน","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"ทหารเฒ่า คุ้นเคยกับการรับมือสถานการณ์วิกฤต<BR><BR>Perk ประจำตัว <B>ถูกทิ้งไว้ข้างหลัง</B> <B>เวลาที่ถูกหยิบยืม</B> และ<B>ทนทายาด</B> ทำให้ทรงพลังขึ้นในช่วงเวลาอันเลวร้าย","name":"วิลเลียม \\"บิล\\" โอเวอร์เบค","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"คนเก็บของเก่าผู้ห้าวหาญ ให้รางวัลการเล่นที่มีความเสี่ยงสูง<BR><BR>Perk ประจำตัว <B>เราจะอยู่ไปชั่วนิรันดร์</B> <B>ตายยาก</B> และ<B>ไม่โอดครวญ</B> ให้รางวัลรูปแบบการเล่นอันรุนแรงและเผชิญหน้า แต่ทำให้บาดเจ็บได้ง่าย","name":"เดวิด คิง","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"ผู้รอดชีวิตผู้เด็ดเดี่ยว พร้อมที่จะรอดพ้นจากทุกการท้าทาย<BR><BR>Perk ประจำตัว <B>ผู้รอดชีวิตเดียวดาย</B> <B>เป้าหมายแห่งความลุ่มหลง</B> และ<B>การโจมตีเด็ดขาด</B> ให้ความสามารถในการเอาชีวิตรอดอันทรงพลัง แลกกับการปล่อยให้เธอปลอดกำบัง","name":"ลอรี่ สโตรด","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"นักพนันผู้โชคดี เพิ่มโอกาสของทั้งทีม<BR><BR>Perk ประจำตัว <B>มือเติบ</B> <B>เพิ่มเดิมพัน</B> และ<B>ไพ่ตาย</B> เพิ่มโชคของผู้รอดชีวิตทุกคนและช่วยในการปลดล็อคหีบ","name":"เอส วิสคอนติ ","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"ผู้แข่งขันที่มีใจจดจ่อกับจุดมุ่งหมายและสามารถปรับเปลี่ยนกลยุทธ์ให้เข้ากับสถานการณ์ท้าทายได้อย่างหลากหลาย<BR><BR>Perk ประจำตัว, <B>ช่างเทคนิค</B>, <B>ปราดเปรียว</B> และ<B>ตื่นตัว</B> ช่วยในการซ่อมแซมเครื่องปั่นไฟและการระบุตำแหน่งของฆาตกร","name":"เฟิงหมิน","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"ผู้ท่องฝันใจเด็ด เพิ่มความสามารถในการเอาชีวิตรอดและฟื้นตัวของทีม<BR><BR>Perk ประจำตัว ได้แก่ <B>ตื่นสิ!</B> <B>เภสัช</B> และ<B>เฝ้าระวัง</B> จะช่วยเหลือผู้รอดชีวิตในการระบุตำแหน่งประตูทางออกและฟื้นตัวได้ง่ายขึ้น","name":"เควนติน สมิธ","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"นักสืบผู้คลั่งไคล้ สามารถระบุตำแหน่งและทำตามจุดมุ่งหมายให้สำเร็จได้รวดเร็วขึ้น<BR><BR>Perk ประจำตัว <B>ดื้อด้าน</B> <B>ลางสังหรณ์ของนักสืบ</B> และ<B>ตรวจตรา</B> ทำให้จดจ่อกับจุดมุ่งหมายและสามารถฟื้นตัวได้อย่างรวดเร็ว","name":"นักสืบแท็ปป์","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"นกร้องเพลงผู้เปี่ยมหวัง สามารถใช้สิ่งรอบกายให้เป็นประโยชน์สูงสุดได้ <br><br>Perk ประจำตัว <b>เต้นกันหน่อย</b> <b>ประตูแห่งโอกาส</b> และ<b>ฟัดเหวี่ยง</b> ทำให้เธอมองการไกลและมีความซ่า กล้าที่จะหลบหนีแม้ในสถานการณ์อันเลวร้าย","name":"เคท เดนสัน","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"ครูผู้ฉลาดหลักแหลม สามารถปรับตัวให้เข้ากับสถานการณ์ใหม่ๆ และวางแผนการตามไปด้วยได้ <br><br>Perk ประจำตัว <b>หันเหความสนใจ</b> <b>พ้นอันตราย</b> และ<b>เรียนรู้ด้วยตนเอง</b> ช่วยให้เขาเบี่ยงเบนความสนใจของฆาตกร รอดชีวิตในสถานการณ์อันสิ้นหวัง และมีทักษะเพิ่มมากขึ้นเมื่อเกมดำเนินไป","name":"อดัม ฟรานซิส","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"ศิลปินเงียบขรึมผู้ยืนหยัดท้าท้ายโชคชะตาแม้นอาจเป็นไปไม่ได้<br><br>Perk ประจำตัว <b>สติแตก</b> <b>ดูแลต่อเนื่อง</b> และ<b>บิดเบือน</b> มอบความได้เปรียบในการสังเกตการณ์และช่วยให้ซ่อนตัวจากฆาตกรได้","name":"เจฟฟ์ โจแฮนเซ่น","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"คนดังผู้ทรงอิทธิพล ผู้สวนกระแสไปจัดการกับความท้าทายซึ่งๆ หน้า<br><br>Perk ประจำตัว <b>น้ำหนึ่งใจเดียว</b> <b>หนักแน่น</b> และ<b>ปะทะซึ่งหน้า</b> มอบชุดสกิลอันยืดหยุ่นที่ทำให้สามารถช่วยคนอื่นและตนเองหลบหนีออกจากสถานการณ์อันตรายไปได้","name":"เจน โรเมโร","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"\\"หมาป่าเดียวดาย\\" อวดเก่ง และดันทุรัง เป็นชายผู้เกิดมาเพื่อเอาชีวิตรอด<br><br>Perk ประจำตัว <b>กลับกลอก</b> <b>เตรียมรับมือ</b> และ<b>ความกล้าหาญของชายชาตรี</b> ให้การฟื้นตัวจากความเจ็บปวดและความลำบากเพิ่มเติม รวมถึงความสามารถในการช่วยเหลือเพื่อนฝูงจากสถานการณ์วุ่นวายอีกด้วย ","name":"แอชลีย์ เจ. วิลเลียมส์","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"นักข่าวผู้มีความใฝ่ฝัน มีความเฉียบแหลมในการสังเกตและมองเห็นข้อมูลส่วนลึกที่ผู้อื่นมองข้าม<br><br>Perk ประจำตัว <b>เคียงข้างกันดีที่สุด</b> <b>ยึดมั่น</b> และ<b>พละกำลังในจิตใจ</b> ช่วยให้ข้อมูลกับความกล้าที่เธอต้องใช้ฟาดฟันปัญหาท้าทายอันไม่คาดฝัน","name":"แนนซี่ วีลเลอร์","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"อดีตนักกีฬาหัวขี้เลื่อย สามารถปกป้องและสนับสนุนเพื่อนพ้องผู้รอดชีวิตได้พร้อมกับทำตัวตลกโปกฮาในแบบของตน<br><br>Perk ประจำตัว <b>พี่เลี้ยงเด็ก</b> <b>มิตรภาพ</b> และ<b>พลังฮึด</b> ช่วยเบี่ยงเบนความสนใจของฆาตกร ทนความเจ็บปวด และกลับไปสู้ต่อได้","name":"สตีฟ แฮร์ริงตัน","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"นักแข่งสตรีทผู้เข็มแข็ง สามารถหาข้อได้เปรียบให้กับตัวเองและเพื่อนผู้รอดชีวิต คนอื่นได้<br><br>Perk ประจำตัว <b>เบรกนำโชค</b> <b>ทุกวิถีทาง</b> และ<b>ฝ่าขวากหนาม</b> ทำให้สามารถซ่อนรอยเลือด รีเซ็ตแท่นไม้ที่ล้มลง และให้ความช่วยเหลือผู้รอดชีวิตที่ไร้ทางสู้ได้","name":"คิมูระ ยูอิ","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"นักสารคดีผู้กล้าหาญ สามารถใช้ความรู้รอบตัวระดับอัจฉริยะหลบเลี่ยงการถูกพบและช่วยเหลือผู้รอดชีวิตคนอื่นๆ อย่างมาก<br><br>Perk ส่วนตัวของเธออย่าง <b>ไม่มีการบันทึก</b> <b>ปลาแฮร์ริงแดง</b> และ<b>เพื่อผู้คน</b> ช่วยให้เธอคงการซ่อนตัวได้แม้ในยามเผชิญหน้ากับอันตราย สร้างสิ่งเบี่ยงเบนความสนใจ และรักษาผู้อื่นอย่างรวดเร็วอย่างไม่คิดถึงความปลอดภัยของตัวเอง","name":"ซาริน่า แคสเซอร์","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"เชอริลเป็นสาวน้อยผู้ผ่านความเขย่าขวัญมาอย่างโชกโชน นั่นปลุกใจให้ทั้งเธอและทีมของเธอกล้าหาญ<br><br>Perk ประจำตัวของเธอ <b>พิทักษ์วิญญาณ</b>, <b>สัญญาเลือด</b> และ<b>พันธมิตรผู้อดกลั้น</b> ช่วยเธอรอดชีวิตจากความยากลำบากอันใหญ่หลวง คอยติดต่อกับสมาชิกทีม และวางแผนตามความเป็นจริง","name":"เชอริล เมสัน","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"สถาปนิกช่างฝัน สามารถใช้ความมุ่งมั่นอันไม่ย่อท้อมาสร้างแผนการและช่วยเหลือผู้รอดชีวิตคนอื่น<br><br>Perk ประจำตัวของเขา <b>เพ้อฝัน</b>, <b>มาตรการจนตรอก</b> และ<b>ทนไม้ทนมือ</b> ช่วยให้เขาเผยตำแหน่งเครื่องปั่นไฟ ช่วยผู้รอดชีวิตคนอื่น และใช้เครื่องมือของตัวเองให้เกิดประโยชน์สูงสุด","name":"เฟลิคส์ ริชเทอร์","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"นักสำรวจเรื่องลี้ลับ สามารถใช้ลูกเล่นอันเฉลียวฉลาดและความมุ่งมั่นดันทุรังรักษาตัวให้รอด<br><br>Perk ประจำตัวของเธอ<b>การประเมิน</b>, <b>การหลอกลวง</b> และ<b>ดิ้นรนสุดพลัง</b> ทำให้เธอทำอะไรๆ กับสิ่งของได้ด้วยวิธีใหม่ๆ และทั้งหมดนี้เป็นไปในขณะมีแผนสำรองเพื่อหลบหนีจากฆาตกร","name":"เอโลดี้ ราโคโต้","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"โปรดิวเซอร์เพลงผู้เห็นแก่ประโยชน์ส่วนตน สามารถยกระดับเป้าหมายของตัวเองได้ในช่วงเวลาอันวุ่นวาย<br><br>Perk ประจำตัว <b>ช่องทางด่วน</b>, <b>ดังเปรี้ยงปร้าง</b> และ<b>รู้รักษาตัวรอด</b> ทำให้ความสามารถของเธอพัฒนาขึ้นเมื่อคนอื่นๆ ได้รับอันตราย และทำให้หนีจากการไล่ล่าได้อย่างรวดเร็วด้วย ","name":"อียุนจิน","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"จิลล์ วาเลนไทน์เป็นสมาชิกรุ่นก่อตั้งของ S.T.A.R.S. ผู้มีชัยเหนืออาวุธอินทรีย์ชีวภาพมามากมาย<br><br>Perk ประจำตัวของเธอ ได้แก่ <b>แรงโต้กลับ</b>, <b>การฟื้นคืน</b>, and <b>กับระเบิดสังหาร</b> ทำให้เธอโจมตีโต้คืนโดยอ้อมได้ไปพร้อมกับให้การสนับสนุนสมาชิกในทีม ","name":"จิลล์ วาเลนไทน์","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"ลีออน เอส. เคนเนดีเป็นเจ้าหน้าที่ตำรวจหน้าไม้ที่ทำงานเกินกว่าหน้าที่ในตอนที่เกิดการแพร่ระบาดครั้งใหญ่ในแร็กคูนซิตี้<br><br>Perk ประจำตัวของเขา ได้แก่ <b>กัดฟันทน</b>, <b>ระเบิดแสง</b> และ<b>จิตวิญญาณมือใหม่</b> ซึ่งทำให้เขาทนทานต่อความเจ็บปวด ทำให้ฆาตกรหลงทาง และติดตามเป้าหมายที่หายไปได้ ","name":"ลีออน เอส. เคนเนดี","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./th/index.ts ***!
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
/* harmony import */ var _src_lib_locales_th__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/th */ "./src/lib/locales/th.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_th__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map