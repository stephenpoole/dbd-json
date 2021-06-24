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

/***/ "./src/lib/locales/tr.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/tr.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_tr_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/tr/items.json */ "./src/data.compiled/locales/tr/items.json");
/* harmony import */ var _data_compiled_locales_tr_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/tr/killerAddons.json */ "./src/data.compiled/locales/tr/killerAddons.json");
/* harmony import */ var _data_compiled_locales_tr_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/tr/killerOfferings.json */ "./src/data.compiled/locales/tr/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_tr_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/tr/killerPerks.json */ "./src/data.compiled/locales/tr/killerPerks.json");
/* harmony import */ var _data_compiled_locales_tr_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/tr/killers.json */ "./src/data.compiled/locales/tr/killers.json");
/* harmony import */ var _data_compiled_locales_tr_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/tr/powers.json */ "./src/data.compiled/locales/tr/powers.json");
/* harmony import */ var _data_compiled_locales_tr_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/tr/sharedOfferings.json */ "./src/data.compiled/locales/tr/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_tr_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/tr/survivorAddons.json */ "./src/data.compiled/locales/tr/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_tr_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/tr/survivorOfferings.json */ "./src/data.compiled/locales/tr/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_tr_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/tr/survivorPerks.json */ "./src/data.compiled/locales/tr/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_tr_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/tr/survivors.json */ "./src/data.compiled/locales/tr/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.Turkish;
var data = {
  items: _data_compiled_locales_tr_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_tr_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_tr_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_tr_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_tr_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_tr_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_tr_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_tr_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_tr_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_tr_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_tr_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/tr/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/tr/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Kalın kâğıda sarılmış bir sıra küçük patlayıcı maytap. Yüksek sesle patlar ve yoğun bir şekilde parlar. Dikkat dağıtmak ve kör etmenin yanı sıra kutlamalarda da kullanılır.<br><li><b>1 Yük.</b></li>","name":"Çin Maytabı","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"Klasik bir el feneri. Karanlıkta önünü aydınlatmak için kullanılabilir.<br><li><b>8 saniyelik</b> bir kullanıma sahiptir.</li>","name":"El Feneri","flavor":"\\"Pil ömrünün çoğu bir önceki sahibi tarafından boş yere harcanmış.\\"","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"Işığa turuncu bir ton ve ufak bir hayalet ekleyen özel mercek kapağına sahip el feneri. <br><li><b>8 saniyelik</b> bir kullanıma sahiptir. </li><li>Hayatındaki sevimli hayaletlerin sayısını <b>önemli ölçüde arttırır</b>.</li>","name":"Hayaletçik","flavor":"\\"Bol bol şeker topla!\\"","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"İyi bir kavrama yerine sahip taşınabilir el feneri. Yüksek teknolojisi sayesinde güçlü bir ışık oluştururken az enerji harcıyor.<br><li><b>8 saniyelik</b> bir kullanıma sahiptir.</li><li>El fenerinin pil tüketimini <b>biraz azaltır</b>.</li><li>İsabet hassasiyetini <b>biraz arttırır</b>.</li>","name":"Spor El Feneri","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"Sağlam ve güçlü ışığa sahip ama ağır bir el feneri.<br><li><b>12 saniyelik</b> bir kullanıma sahiptir.</li><li>İsabet hassasiyetini <b>biraz azaltır</b>.</li><li>Işığın parlaklığını <b>orta seviyede arttırır</b>.</li><li>Kör etme süresini <b>orta seviyede arttırır</b>.</li>","name":"Kullanışlı El Feneri","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"Etrafa güç yayarak titreyen bir anahtar başı. Kırık anahtarın gücü tek başına tetiklenemez. Halkasına çeşitli nesneler takarak, anahtarın gücünü farklı etkilere dönüştürebilirsin. <br><li><b>10 saniyelik</b> bir kullanıma sahiptir.</li>","name":"Kırık Anahtar","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"Bir zamanlar muhteşem bir güce sahip yamuk ve körelmiş anahtar. Anahtarın gücü tek başına tetiklenemez. Halkasına çeşitli nesneler takarak, Körelmiş Anahtar\'ın gücünü farklı etkilere dönüştürebilirsin.<br><li><b>5 saniyelik</b> bir kullanıma sahiptir.</li><li>Kara kilitleri açmak için tüketilebilir.</li>","name":"Körelmiş Anahtar","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"Etrafa uğursuz bir güç yayarak titreyen, paslı ve yamuk anahtar. Anahtarın gücü tek başına tetiklenemez. Halkasına çeşitli nesneler takarak, İskelet Anahtar\'ın gücünü farklı etkilere dönüştürebilirsin.<br><li><b>30 saniyelik</b> bir kullanıma sahiptir.</li><li>Kara kilitleri açmak için tüketilebilir.</li>","name":"İskelet Anahtar","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"Deri gibi bir malzemeden yapılmış eski bir parşömen parçası. Dürülmüş ve renksiz, deri bir iple bağlanmış. Haritayı tutmak ve gücünü kullanmak kişinin hare okuma yeteneği potansiyelini ortaya çıkarır. Bu da haritanın yavaş yavaş yanmasına sebep olur. Haritanın yükü olduğu sürece daha önceden karşılaştığın jeneratörlerin hareleri görünür hale gelir.<br><li><b>20 saniyelik</b> bir kullanıma sahiptir.</li><li>Oyuna otomatik olarak <b>1</b> jeneratörün izini sürmüş halde başlarsın.</li><li><b>8 metre</b> mesafedeki tüm jeneratörlerin izini sürme yeteneğini açar.</li>","name":"Harita","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"İlginç bir şekilde taze deriden yapılmış eski bir parşömen parçası. Kenarındaki kan hâlâ ıslak. Dürülmüş ve çeşitli renklerdeki ip ve tellerle bağlanmış. Haritayı tutmak ve gücünü kullanmak kişinin hare okuma yeteneği potansiyelini ortaya çıkarır. Bu da haritanın yavaş yavaş yanmasına sebep olur. Haritanın yükü olduğu sürece daha önceden karşılaştığın ve harelere sahip nesneler görünür hale gelir. <br><li><b>20 saniyelik</b> bir kullanıma sahiptir.</li><li>Oyuna otomatik olarak <b>3 nesnenin</b> izini sürmüş halde başlarsın.</li><li><b>8 metre</b> içerisindeki tüm <b>hedeflerin izini sürme</b> yeteneğini açar.</li><li><b>8 metre</b> içerisindeki <b>kara kilitlerin izini sürme</b> yeteneğini açar.</li><li><b>8 metre</b> içerisindeki <b>Katil\'in eşyalarının izini sürme</b> yeteneğini açar.</li><li><b>8 metre</b> içerisindeki <b>Çıkış Kapılarının izini sürme</b> yeteneğini açar.</li>","name":"Gökkuşağı Haritası","flavor":"\\"Beni umutsuzluğa düşürüyor. Bütün bu tarif edilemez bilgiler ve meşakkatli çabalar... Ve tüm bunlara rağmen bizi bu kâbustan kurtaracak, elle tutulur hiçbir şey yok.\\" -Vigo\'nun Günlüğü","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"Bazı malzemeleri eksik olsa bile, acil durumlarda hayat kurtarmayı sağlayacak basit bir yardım çantası.<br><li><b>16 Yük</b>.</li><li>Başkalarını iyileştirme hızını <b>orta seviyede arttırır</b>.</li><li><b>Kendini iyileştirme</b> eylemini açar.</li>","name":"Kamp Yardım Çantası","flavor":"\\"Bunlarla ancak üstünkörü bir dikiş atabilirsin.\\"","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"İlkyardım malzemeleriyle dolu, dışında fosforlu Cadılar Bayramı çıkartmaları olan, plastik bir beslenme çantası.<br><li><b>24 Yük</b>.</li><li>Diğerlerini iyileştirme hızını <b>önemli ölçüde arttırır</b>.</li><li><b>Kendini iyileştirme</b> eylemini açar.</li><li>Seni <b>önemli ölçüde görülür kılar</b>.</li>","name":"Azizler Günü Beslenme Çantası","flavor":"\\"Önce güvenlik! Şeker toplarken görülebilir olduğundan emin ol.\\"","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"Hafif ve ciddi yaraları tedavi etmek için gerekli olan bütün ekipmanın bulunduğu standart bir ilkyardım çantası.<br><li><b>24 Yük.</b></li><li>Başkalarını iyileştirme hızını <b>önemli ölçüde arttırır</b>.</li><li><b>Kendini iyileştirme</b> eylemini açar.</li>","name":"İlkyardım Çantası","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"Çok iyi durumda malzemelere sahip, sağlam ve düzenli bir medikal kit.<br><li><b>16 Yük</b>.</li><li>Diğerlerini iyileştirme hızını <b>olağanüstü düzeyde arttırır</b>.</li><li>Kendini iyileştirme hızını <b>olağanüstü düzeyde arttırır</b>.</li><li><b>Kendini iyileştirme</b> eylemini açar.</li>","name":"Acil Medikal Kit","flavor":"\\"Her şeyin bir ilacı vardır… Ama bunun yok.\\"","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"Ulaşılması zor ve tenha bölgelerde acil yardım kurtarma operasyonlarında kullanılan tıbbi malzemelerle dolu büyük, metal bir kutu.<br><li><b>32 Yük</b>.</li><li>Diğerlerini iyileştirme hızını <b>olağanüstü düzeyde arttırır</b>.</li><li>Beceri Denemesi başarı alanını <b>orta seviyede genişletir</b>.</li><li>Beceri Denemesi <b>bonus alanlarını</b> orta seviyede genişletir.</li><li><b>Kendini iyileştirme</b> eylemini açar.</li>","name":"Korucu Medikal Kiti","flavor":"\\"Arkasına yapıştırılmış küçük, oymalı bir etiketi var: VK.ID-3994723.\\"","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"Yıpranmış, her an kırılabilir aletlerle dolu büyük metal bir kutu. Deneyimsiz kişiler bile bu çantayı kullanarak çeşitli mekanik parçaları tamir edebilir veya bozabilir.<br><li><b>16 Yük</b>.</li><li>Tamir etme hızını <b>orta seviyede arttırır</b>.</li><li>Başarılı Beceri Denemesi alanlarını <b>biraz daraltır</b>.</li><li><b>Sabotaj</b> eylemini açar.</li>","name":"Yıpranmış Aletler","flavor":"\\"Sen bunlara alet mi diyorsun? Ciddi misin?\\"","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"Temel aletlerle dolu metal bir kutu. Deneyimsiz kişiler bile bu çantayı kullanarak çeşitli mekanik parçaları tamir edebilir veya bozabilir.<br><li><b>20 Yük.</b></li><li>Tamir etme hızını <b>orta seviyede arttırır</b>.</li><li><b>Sabotaj</b> eylemini açar.</li><li>Sabotaj hızını <b>biraz arttırır</b>.</li>","name":"Alet Çantası","flavor":"\\"Bu aletlerin nereden geldiği bilinmiyor. Acaba onları aramızdan biri mi getirdi, yoksa canavarlardan birine mi aitler?\\"","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"Özel tamir aletleriyle dolu metal bir kutu. Deneyimsiz kişiler bile bu çantayı kullanarak çeşitli mekanik parçaları tamir edebilir veya bozabilir.<br><li><b>16 Yük</b>.</li><li>Tamir etme hızını <b>önemli ölçüde arttırır</b>.</li><li><b>Sabotaj</b> eylemini açar.</li><li>Sabotaj hızını <b>biraz azaltır</b>.</li>","name":"Tamirci Alet Çantası","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"Temel aletler ve ilave mekanik parçalarla dolu büyük metal bir kutu. Deneyimsiz kişiler bile bu çantayı kullanarak çeşitli mekanik parçaları tamir edebilir veya bozabilir.<br><li><b>32 Yük</b>.</li><li>Tamir etme hızını <b>orta seviyede arttırır</b>.</li><li><b>Sabotaj</b> eylemini açar.</li>","name":"Kullanışlı Alet Çantası","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"Özellikle mühendislikte kullanılan aletlerle dolu metal bir kutu. Çantanın içindeki aletlerin çoğu çeşitli mekanik parçaları hızlıca tamir etmek veya bozmak için acemiler tarafından kullanılabilir.<br><li><b>16 Yük</b>.</li><li>Tamir etme hızını <b>olağanüstü düzeyde arttırır</b>.</li><li><b>Sabotaj</b> eylemini açar.</li><li>Sabotaj hızını <b>orta seviyede azaltır</b>.</li>","name":"Mühendis Alet Çantası","flavor":"\\"Eşi benzeri olmayan aletler yaptım ve benden çalınırlarken donakaldım. Bunlarsa orijinal aletlerimin Sis\'in içinden gelen başarısız kopyaları.\\" -Vigo\'nun Günlüğü","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"Daha çok testere ve penselerle dolu metal bir kutu. Tabii içinde başka aletler de var. Alet çantasının içeriği daha çok tahribat amaçlı kullanılsa da, çeşitli mekanik parçaları tamir etmek için de kullanılabilir.<br><li><b>24 Yük</b>.</li><li>Tamir etme hızını <b>biraz arttırır</b>.</li><li><b>Sabotaj</b> eylemini açar.</li><li>Sabotaj hızını <b>önemli ölçüde arttırır</b>.</li>","name":"Alex\'in Alet Çantası","flavor":"\\"Çoğu aletin üzerinde \'Alex\'e ait\' yazıyor.\\"","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"Küçük, patlayıcı bir yemek masası dekoru. Yüksek sesle patlar ve yoğun bir şekilde parlar. Dikkat dağıtmak ve kör etmenin yanı sıra kutlamalarda da kullanılır.<br><li><b>1 Yük.</b></li>","name":"Yılbaşı Partisi Fişeği","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"Küçük, patlayıcı bir yemek masası dekoru. Yüksek sesle patlar, yoğun bir şekilde parlar ve etrafa konfeti saçar. Dikkat dağıtmak ve kör etmenin yanı sıra, birlikte geçirdiğimiz üç yılı kutlamak için de kullanılır.<br><li><b>1 Yük.</b></li>","name":"Üçüncü Yıl Partisi Fişeği","flavor":"\\"Mutlu yıldönümleri! Üç yıldır beraber olmamızın şerefine!\\"<br>- Dead by Daylight Ekibi","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"Bir Kurban\'ı tamamen iyileştirdiğinde etrafa konfetiler saçan bir Medikal Kit. Sürpriz!<br><li><b>24 yük</b>.</li><li>Diğerlerini iyileştirme hızını <b>önemli ölçüde arttırır</b>.</li><li><b>Kendini iyileştirme</b> eylemini açar.</li>","name":"Yıldönümü Medikal Kiti","flavor":"\\"Nice mutlu yıldönümlerine!\\"<br>- Dead by Daylight Ekibi","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"Bir Katil\'i kör ettiğinde etrafa konfetiler saçan bir el feneri. Sürpriz!<br><li><b>8 saniyelik</b> kullanıma sahiptir.</li>","name":"Yıldönümü El Feneri","flavor":"\\"Nice mutlu yıldönümlerine!\\"<br>- Dead by Daylight Ekibi","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/tr/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/tr/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Koruyucu yastıklı deri eldiven. <br><li>Ayı Kapanı kurma hızını <b>biraz arttırır</b>.</li>","name":"Tuzakçı Eldiveni","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"Ayı Kapanı\'nın tutuşuna ciddi anlamda güç katan geniş ve ağır bir bobin yayı.<br><li>Ayı Kapanı\'nın bozma süresini <b>biraz arttırır</b>.</li>","name":"Güçlü Bobin Yayı","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"Her zamanki ikili yay sistemini 4 bobinli hale getirerek kapanın gücünü ciddi anlamda arttıran Ayı Kapanı ek parça kiti.<br><li>Ayı Kapanı\'nın bozma süresini <b>orta seviyede arttırır</b>.</li>","name":"4 Bobinli Yay Kiti","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"Yanmış Ağaç Külü. Kaynatıldığında Ayı Kapanlarını boyayıp daha az fark edilir hale getirmek için kullanılabilir.<br><li>Tüm Ayı Kapanlarının rengini <b>orta seviyede kırar</b>.</li>","name":"Bakkam Ağacı Boyası","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"Bu yedek Ayı Kapanı ağzının testereye benzer bıçağı, kapandığında korkunç açık yaralara sebep olur.<br><li>Ayı Kapanı sebebiyle yaralanan Kurbanlar, iyileştirilene kadar <b>Kan Kaybı</b> durum etkisi altına girer.</li>","name":"Tırtıklı Ağız","flavor":"\\"Tıpkı yırtıcı bir hayvan gibi kan kokusunu alıp izini sürebilir.\\"","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"Ayı Kapanlarının kolaylıkla ve hızlıca kurulmasını sağlayan basit araçlar.<br><li>Ayı Kapanı kurma hızını <b>orta seviyede arttırır</b>.</li>","name":"Kapan Kurucu","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"Tabaklanmış deriden bel çantası. Av ekipmanlarını taşıyabileceğin kadar geniş ve sağlam.<br><li><b>Fazladan 1</b> Ayı Kapanı\'yla başla.</li><li><b>Fazladan 2</b> Ayı Kapanı\'nın taşınmasına olanak sağlar.</li>","name":"Tuzakçı Çantası","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"Bu Ayı Kapanı ağzı, yer yer sertleşmiş pas lekeleriyle kaplıdır ve yaralanmaların iyileşmesini özellikle zorlaştırır.<br><li>Ayı Kapanı\'yla yaralanan Kurbanlar, <b>Ağır Yaralı</b> durum etkisine girer.","name":"Paslı Ağız","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"Birincil bobin kullanılamaz hale geldiğinde, Ayı Kapanı\'nın etkisini yitirmemesini sağlayan ikincil bobin.<br><li>Ayı Kapanı\'nın bozma süresini <b>önemli ölçüde arttırır</b>.</li>","name":"İkincil Bobin","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"Katrana benzeyen siyah, mat ve yapış yapış bir madde. Ayı Kapanlarına uygulandığında daha az fark edilir olmalarını sağlıyor.<br><li>Tüm Ayı Kapanlarının rengini <b>önemli ölçüde kırar</b>.</li>","name":"Katran Şişesi","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"Sürtünmeyi azaltmak ve mekanik kısımlardaki hareketi sağlamak için kullanılan bir kalıp mum.<br><li>Ayı Kapanı\'ndan kurtulma ihtimalini <b>orta seviyede düşürür</b>.</li>","name":"Mum Kalıbı","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"Kapanın yaylarının tutuşunu daha tehlikeli bir hale getiren şeffaf bir yağ.<br><li>Ayı Kapanı\'nın bozma süresini <b>olağanüstü düzeyde arttırır</b>.</li>","name":"Yağlı Bobin","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"Ayı Kapanlarının verimliliğini sağlamak üzere sabitlemek için kullanılan özel bir araç seti.<br><li>Ayı Kapanı kurma hızını <b>olağanüstü düzeyde arttırır</b>.</li><li>Ayı Kapanı\'ndan kaçma ve kurtarılma süresini <b>önemli ölçüde arttırır</b>.</li><li>Bir Ayı Kapanı\'ndan kurtulma ihtimalini <b>orta seviyede düşürür</b>.</li>","name":"Sabitleme Araçları","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"Kabaca birbirine tutturulmuş çeşitli deri parçalarından oluşan çok büyük bir çanta.<br><li><b>Fazladan 2</b> Ayı Kapanı\'yla başla.</li><li><b>Fazladan 2</b> Ayı Kapanı\'nın taşınmasına olanak sağlar.</li>","name":"Dikişli Çanta","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"Bobinin yarısını yapış yapış, yarısını kaygan hale getiren bu uğursuz sıvı, kapan yayların tutuşunu çok daha tehlikeli kılıyor.<br><li>Bir kapan <b>sağlıklı</b> bir Kurban tarafından sabote edilir veya bozulursa, kanlı bobinler olumsuz etki yaratır ve Kurban <b>yaralanır</b>.</li><li>Ayı Kapanı\'nın bozma süresini <b>biraz arttırır</b>.</li>","name":"Kanlı Bobin","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"Mide bulandıracak kadar parıldayan bu taşla keskinleştirilen kapanlar kontrol edilemez hale gelir.<br><li>Her <b>30 saniyede bir</b> rastgele seçilen kapalı bir Ayı Kapanı hazır duruma geçer.</li>","name":"Parıltılı Taş","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"Kurnazlığı temsil eden Laokeye sembolü, çanın gövdesine is kullanılarak parmakla çizilmiş.<br><li>Umacı pelerinli olarak paletleri kırarsa veya jeneratörlere hasar verirse <b>pelerini tamamen düşer</b>.</li>","name":"\\"Yılan\\" - İs","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"Eşsiz takipçiyi temsil eden Wonnug sembolü, çanın gövdesine is kullanılarak parmakla çizilmiş.<br><li>Pelerinliyken taze kan lekeleri, normalden <b>önemli ölçüde</b> daha fark edilebilir bir hal alır.</li>","name":"\\"Tazı\\" - İs","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"Ruhani dünyayı temsil eden Khugwemuu sembolü, çanın gövdesine is kullanılarak parmakla çizilmiş.<br><li>Pelerini çıktıktan sonra Umacı\'nın Dehşet Alanı ve kızıl leke <b>6</b> saniye boyunca baskılanır.</li>","name":"\\"Hayalet\\" - İs","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"Korkular diyarını temsil eden Kunwulju sembolü, çanın gövdesine is kullanılarak parmakla çizilmiş.<br><li>Umacı\'nın Dehşet Alanı, pelerinliyken <b>baskılanmaz</b>.</li><li>Takip ve sürpriz saldırılardan kazanılan Kan Puanları %100 artar.</li>","name":"\\"Canavar\\" - İs","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"Son derece parlak bir kemik parçasından yapılmış çan tokmağı. Uluyan Çan\'ın sesinin düzensiz biçimde yankılanmasına ve dağılmasına sebep olur.<li>Kurbanlar, Uluyan Çan\'ın <b>uzaklığını</b> veya <b>yönünü</b> anlayamaz hale gelir.</li>","name":"Kemik Tokmak","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"Hızlı geçişi temsil eden Kratin sembolü, çanın gövdesine parmakla ve çamur kullanılarak çizilmiş.<br><li>Umacı\'nın ortadan kaybolma süresini <b>önemli ölçüde</b> azaltır.</li>","name":"\\"Sıçrama\\" - Çamur","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"Uluyan fırtınayı temsil eden Ohuwe-Onmnea sembolü, çanın gövdesine çamur kullanılarak parmakla çizilmiş.<li>Pelerinliyken Umacı\'nın hareket hızını <b>orta seviyede arttırır</b>.</li>","name":"\\"Kasırga\\"- Çamur","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"Avın üzerine hızlı çöküşü temsil eden Kuntin-Takkho sembolü, çanın gövdesine çamur kullanılarak parmakla çizilmiş.<br><li>Umacı\'nın yeniden ortaya çıkış süresini <b>biraz azaltır</b>.</li>","name":"\\"Atik Avcı\\" - Çamur","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"Vahşeti temsil eden Baikra-Kaeug sembolü, çanın gövdesine parmakla çizilmiş.<br><li><b>Sürpriz saldırılar</b>, kurbanlara <b>60 saniye</b> boyunca <b>hare körlüğü</b> yaşatır.</li>","name":"\\"Kör Savaşçı\\" - Çamur","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"Uluyan fırtınayı temsil eden Ohuwe-Onmnea sembolü, çanın gövdesine beyaz mürekkep kullanılarak parmakla çizilmiş.<li>Pelerinliyken Umacı\'nın hareket hızını <b>önemli ölçüde arttırır</b>.</li>","name":"\\"Kasırga\\" - Beyaz","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"Avın üzerine hızlı çöküşü temsil eden Kuntin-Takkho sembolü, çanın gövdesine beyaz mürekkep kullanılarak parmakla çizilmiş.<br><li>Umacı\'nın yeniden ortaya çıkış süresini <b>orta seviyede azaltır</b>.</li>","name":"\\"Atik Avcı\\" - Beyaz","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"Karanlık sinerjiyi temsil eden Yiwarick sembolü, çanın gövdesine beyaz mürekkep kullanılarak parmakla çizilmiş.<br><li>Pelerinliyken pencerelerden atlamak, dolapları açmak, paletleri ve kırılgan eşyaları kırmak veya jeneratörlere hasar vermek için gereken süreyi <b>önemli ölçüde azaltır</b>.</li>","name":"\\"Gölge Dansı\\" - Beyaz","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"Hızlı geçişi temsil eden Kratin sembolü, çanın gövdesine parmakla ve beyaz mürekkep kullanılarak çizilmiş.<br><li>Umacı\'nın ortadan kaybolma süresini <b>olağanüstü düzeyde</b> azaltır.</li>","name":"\\"Sıçrama\\" - Beyaz","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"Vahşeti temsil eden Baikra-Kaeug sembolü, çanın gövdesine parmakla ve beyaz mürekkep kullanılarak çizilmiş.<br><li>Sürpriz saldırılar, tamamen iyileştirilene kadar Kurbanlara <b>Ağır Yaralı</b> ve <b>Kan Kaybı</b> durum etkilerine girer.</li>","name":"\\"Kör Savaşçı\\" - Beyaz","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"Uluyan fırtınayı temsil eden Ohuwe-Onmnea sembolü, çanın gövdesine kanla basılmış.<br><li>Pelerinliyken Umacı\'nın hareket hızını <b>olağanüstü düzeyde arttırır</b>.</li>","name":"\\"Kasırga\\" - Kan","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"Avın üzerine hızlı çöküşü temsil eden Kuntin-Takkho sembolü, çanın baş kısmına kanla basılmış.<br><li>Umacı\'nın yeniden ortaya çıkış süresini <b>önemli ölçüde azaltır</b>.</li>","name":"\\"Atik Avcı\\" - Kan","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"Karanlık sinerjiyi temsil eden Yiwarick sembolü, çanın gövdesine kanla basılmış.<br><li>Pelerinliyken pencerelerden atlamak, dolapları açmak, paletleri ve kırılgan eşyaları kırmak veya jeneratörlere hasar vermek için gereken süreyi <b>olağanüstü düzeyde azaltır</b>.</li>","name":"\\"Gölge Dansı\\" - Kan","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"Bizi izleyen Mahluk\'u temsil eden Kra-Frabai sembolü, çanın baş kısmına kanla basılmış.<br><li>Kişinin hare okuma yeteneğindeki gizli potansiyeli açığa çıkarır. Pelerinliyken <b>12 metre</b> içindeki Kurbanların hareleri görünür hale gelir.</li>","name":"\\"Her Şeyi Gören\\" - Kan","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"Çanın sesini bastırmak için tokmağın çevresine sarılmış gösterişli, düğümlü bir halat. Kötücül bir haresi var. <br><li>Uluyan Çan\'ı <b>tamamen sessiz</b> hale getirir.</li>","name":"Gösterişli Tokmak","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"Bizi izleyen Mahluk\'u temsil eden Kra-Frabai sembolü, çanın baş kısmında uğursuzca parlıyor.<br><li>Kişinin hare okuma yeteneğindeki muhteşem potansiyeli açığa çıkarır. Pelerinliyken <b>jeneratörlerin tamir ilerlemesini</b>, <b>harelerin yoğunluğu</b> belirler.</li>","name":"\\"Her Şeyi Gören\\" - Ruh","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"Testerenin akıcı bir şekilde dönmesini sağlayan sağlam bir debriyaj.<br><br><li>Elektrikli Testere Deparı esnasında çarpışma alanını <b>küçültür</b>.</li>","name":"Ağır Debriyaj","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"Küçük motorların tek seferde alabileceği yakıt miktarını sınırlayan bu mekanik cihaz, devamlı ve güvenli bir hız sağlar.<br><br><li>Elektrikli Testere\'den darbe alan Kurbanlar bir sağlık aşaması kadar hasar alır.</li><li>Elektrikli Testere Darbesi skor etkinliğiyle <b>%100</b> daha fazla Kan Puanı kazan.</li>","name":"Hız Sınırlayıcı","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Çatlak ve tozlu bir filtre olmasına rağmen standart modellerden daha iyi iş görüyor.<br><br><li>Elektrikli Testere\'nin aşırı ısınma sınırını <b>biraz arttırır</b>.</li>","name":"Hurdalık Hava Filtresi","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"Darbelerden koruyan güçlendirilmiş uç kısmına sahip botlar.<br><br><li>Elektrikli Testere\'yle bir nesneye vurulduğunda gereken toparlanma süresini <b>biraz azaltır</b>.</li>","name":"Çelik Uçlu Botlar","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"Ekstra hava akışı sağlayan kabaca modifiye edilmiş bir susturucu.<br><br><li>Elektrikli Testere\'nin soğuma hızını <b>biraz arttırır</b>.</li>","name":"Delikli Susturucu","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"Birçok havalı gencin takmayı sevdiği gösterişli, parlak bir kemer.<br><br><li>Elektrikli Testere aşırı ısındığında Dehşet Alanı\'nı 8 metre <b>azaltır</b>.</li>","name":"Sağlam Kemer","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"Ses çıkaran zincirleri yağlamak için kullanılan sıradan bir yağ.<br><br><li>Elektrikli Testere\'nin çıkardığı sesi <b>biraz azaltır</b>.</li>","name":"Sıradan Motor Yağı","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"Max Thompson Sr.\'ın cesedinden alınmış sağlam bir çift bot.<br><br><li>Elektrikli Testere Deparı\'nı kullanırken idare becerisini <b>orta seviyede arttırır</b>.</li>","name":"Babanın Botları","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"Elektrikli Testere\'nin gövdesinde görünen oyuntular, aldığı canların sayısını gösteriyor. Kullanana kararlılık veriyor.<br><li>Elektrikli Testere\'nin hareket hızını <b>biraz arttırır</b>.</li>Başlama süresini <b>biraz arttırır</b>.</li><li>Etkisi birikir.</li>","name":"Ölüm Oyuntuları","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"Evelyn Thompson\'ın çantasından çıkan birkaç kafein hapı. Yan etkileri arasında tedirginlik ve asabiyet var.<br><br><li>Palet ile sersemletildikten sonra 30 saniyeliğine Elektrikli Testere\'nin başlama süresini <b>biraz azaltır</b>.</li><br>","name":"Annenin Yardımcıları","flavor":"\\"Lütfen bundan yazın, doktor.\\" -Evelyn Thompson","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"Geri tepme ihtimalini azaltan özel yapım bir zincir.<br><br><li>Elektrikli Testere Deparı sırasında engellere çarpıldığında gelen zaman kaybı cezasını <b>önemli ölçüde azaltır</b>.</li>","name":"Düşük Tepmeli Zincir","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"Avını takip eden avcının kokusunu gizlemek için kullanılan, kokulu yapraklar içeren ıslak bir karışım.<br><br><li>Elektrikli Testere ile darbe vurduktan sonra 15 saniyeliğine Tespit Edilemez durum etkisi kazanırsın.</li>","name":"Yaprak Karışımı","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"Elektrikli Testere\'nin gövdesinde görünen oyuntular, Sis\'te yaşayan karanlık canavarı temsil ediyor. Kullanana kararlılık veriyor.<br><li>Elektrikli Testere\'nin hareket hızını <b>orta seviyede arttırır</b>.</li><li>Başlama süresini <b>biraz arttırır</b>.</li><li>Etkisi birikir.</li>","name":"Kıyamet Oyuntuları","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"Yansımayı azaltmak için gözlerin altına sürülebilen koyu kıvamlı bir yağ.<br><br><li>Üzerine el feneri tutulduğunda Elektrikli Testere\'nin soğuma hızını <b>orta seviyede arttırır</b>.</li>","name":"Siyah Yağ","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"Kir ve yağ ile kaplı olmasına rağmen bu karbüratör iyi ayarlanmış.<br><br><li>Elektrikli Testere\'nin başlama süresini <b>orta seviyede azaltır</b>.</li><li>Temel hareket hızını 4,4 m/s\'ye <b>düşürür</b>.","name":"Ayarlanmış Karbüratör","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"Tabanlarından metal parçaları çıkan ve böylelikle her adımda çamura saplanarak zeminde daha fazla denge ve hâkimiyet sağlayan botlar.<br><li>Elektrikli Testere kullanırken idare becerisini <b>olağanüstü düzeyde arttırır</b>.</li><li>Nesnelere çarpıldığında oluşan zaman kaybı cezasını <b>önemli ölçüde arttırır</b>.</li>","name":"Dikenli Botlar","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"Ne olduğu belli olmayan maddelerle kaplı, iğrenç kokulu eldivenler. Bütün bu kötü yanlarına rağmen kalın bir kumaştan yapılmış olması güzel.<br><br><li>Elektrikli Testere çalıştırıldığında ortaya çıkan ısı miktarını <b>orta seviyede azaltır</b>.</li><br>","name":"Pis Eldivenler","flavor":"\\"Hiçbir pislik sıkı çalışan bir adamın ruhunu kirletemez.\\" -Max Thompson Sr.","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"Elektrikli Testere\'nin ağırlığını azaltarak manevra kabiliyetini arttıran hafif zincirler.<br><br><li>Bir palet veya duvar kırdıktan sonra Elektrikli Testere Deparı\'na devam etmeni sağlar.</li><li>Bir paleti veya duvarı kırdıktan sonra 5 saniye içinde Elektrikli Testere\'den darbe alan Kurbanlar bir sağlık aşaması kadar hasar alır.</li>","name":"LoPro Zincir","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"Max Jr.\'ın hapsolduğu dönemi hatırlatan bu tuğla, odasındaki barikat yıkıldığında yere düşen ilk şeydi.<br><br><li>Elektrikli Testere Deparı\'nı 2 saniye boyunca devam ettirdiğinde koşmayı bırakana kadar Tespit Edilemez durum etkisi kazanırsın.</li><br>","name":"Parıltılı Tuğla","flavor":"\\"Sen ne haltlar karıştırıyorsun evlat?\\" -Max Thompson Sr.","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"Diğer hepsinden üstün olan, ustaca üretilmiş bir elektrikli testere susturucusu.<br><br><li>Dehşet Alanı\'nın dışındaki Kurbanlar Elektrikli Testere\'nin sesini duyamaz.</li>","name":"Mükemmel Susturucu","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"Ucuz ağaçtan oyulmuş ve ata benzetilmeye çalışılmış boyasız bir oyuncak. Bir zamanlar taş kesilmiş bir hastayla hemşiresi arasındaki derin bağı temsil ediyormuş.<br><li>Iskalanan sıçrama saldırılarının sebep olduğu yorgunluğu <b>orta seviyede azaltır</b>.</li>","name":"Ahşap At","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"Klinikten alınmış parazit bit tarağı. Bir zamanlar huzursuz bir hastayla hemşiresi arasındaki derin bağı temsil ediyormuş.<br><li>Sıçramanın atılma mesafesini <b>orta seviyede düşürür</b>.</li><li><i>Sıçrama saldırısı</i> skor etkinliklerinden kazanılan kan puanlarını <b>%100</b> arttırır.</li>","name":"Beyaz Bit Tarağı","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"Yer yer paslanmış ve lekeli sıradan bir metal kaşık. \\"Kötü Adam\\"a ait 202 numaralı odadan alınmış.<br><li>Başarılı bir sıçrama saldırısıyla bir Kurban\'a vurmak, onun acı çekme sesinin <b>60 saniyeliğine</b> <b>orta seviyede daha yüksek</b> çıkmasına sebep olur.</li>","name":"Metal Kaşık","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"\\"Kötü Adam\'ın\\" buz kesmiş ölü ellerinden alınmış çürük bir azıdişi.<br><li>Kurban\'a başarılı bir Sıçrama saldırısı yapıldığında, <b>28 metre</b> mesafede iyileşiyor veya iyileştiriliyorsa haresi <b>60 saniye</b> boyunca görünür.</li>","name":"Kötü Adamın Yadigârı","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"Tıkırdayan parçaları olan yanık ve kırık bir köstekli saat. Hemşire Moris\'in cesedinden alınmış.<br><li>Zincir sıçramanın zaman aralığını <b>orta seviyede arttırır</b>.</li>","name":"Köstekli Saat","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"Birileri için önemli olabilecek değersiz bir mücevher parçası. Endişeli kızın cesedinden alınmış.<br><li>Azami sıçrama mesafesini <b>orta seviyede düşürür</b>.</li><li><i>Kusursuz sıçrama</i> skor etkinliğiyle kazanılan kan puanlarını <b>%100</b> arttırır.</li>","name":"Sıradan Bileklik","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"Yas döneminde kemer olarak kullanılan siyah bir urgan. Peder Campbell\'ın cesedinden alınmış.<br><li>Sıçramanın yenilenme hızını <b>orta seviyede arttırır</b>.</li>","name":"Kara Kuşak","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"Bir hastanın tekrarlayan hareketlerini beklenmedik biçimde sakinleştiren kozalak. Taş kesmiş çocuğun cesedinden alınmış.<br><li>Zincir sıçramanın sebep olduğu ilave yorgunluğu <b>önemli ölçüde azaltır</b>.</li>","name":"Taş Kesmiş Çocuğun Hazinesi","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"\\"Kötü Adam\\"dan çalınmış gergin ve titrek bir nefes. Hemşire\'nin dokunuşuyla öfkeyle çarpar ve atlar.<br><li>Sıçramayla bir Kurban\'a başarılı bir şekilde vurmak, <b>Hemşire\'nin sıçrama yeteneğini devre dışı bırakır</b> ve Hemşire\'nin taban hareket hızını <b>60 saniyeliğine</b> <b>4,6 m/s\'ye</b> çıkarır.</li>","name":"Kasılmalı Nefes","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"Şişman hasta bakıcıdan çalınmış hafif ve şişkin nefes. Hemşire\'nin dokunuşuyla belirsiz biçimde dalgalanır.<br><li>Azami sıçrama menzilini <b>önemli ölçüde arttırır</b>.</li><li>Azami menzilde gerçekleştirilen sıçramanın güç toplama süresini <b>önemli ölçüde arttırır</b>.</li>","name":"Nefes Nefese","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"Peder Campbell\'dan çalınmış, uğuldayıp tıkırdayan nefes. Hemşire\'nin dokunuşuyla sessizce kıvrılıp bükülür.<br><li>Sıçramanın yenilenme hızını <b>önemli ölçüde arttırır</b>.</li>","name":"Narin Hırıltı","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"Taş kesmiş çocuktan alınmış, düzensiz ve gittikçe kötüleşen nefes. Normalde düzenli ve dingin olsa da Hemşire\'nin dokunuşuyla son derece tedirgin hale geliyor.<br><li>Sıçramanın yorgunluk süresini <b>orta ölçüde düşürür</b>.</li>","name":"Düzensiz Solunum","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"Hemşire\'nin çok düşkün olduğu huzursuz bir kızdan alınmış şaşkınlık soluğu. Hemşire\'nin dokunuşuyla kuvvetlice seğirir.<br><li>Bir Kurban\'ın yanında sıçramayla geçmek onların çığlık atmasına sebep olur ve <i>Üçkâğıtçı</i> kategorisinde <b>200 kan puanı</b> kazandırır.</li>","name":"Huzursuz Soluk","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"Kırmızı siyah ekoseli kumaştan yırtılmış bir parça. Bu bez, Hemşire\'yi yıkıcı bir dikkatle doldurur.<br><li>Hemşire\'nin, sıçramanın hedef alanını görebilmesini sağlar.</li>","name":"Ekoseli Bez","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"Crotus Prenn Tımarhanesi hasta bakıcısı Harvey Kavanagh\'dan çalınmış kuvvetli bir son nefes. Hemşire\'nin ellerinde gerginlikle sendeler.<br><li>Azami sıçrama menzilini <b>olağanüstü düzeyde arttırır</b>.</li><li>Azami menzilde gerçekleştirilen sıçramanın güç toplama süresini <b>olağanüstü düzeyde arttırır</b>.</li>","name":"Kavanagh\'nın Son Nefesi","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"Crotus Prenn Tımarhanesi hastası Mary Jenner\'dan çalınmış kuvvetli bir son nefes. Hemşire\'nin ellerinde gerginlikle titrer.<br><li>Sıçrama gerçekleştirdikten sonra <i>Etkin Yetenek butonuna</i> basmak, Hemşire\'nin baştaki konumuna anında dönmesini sağlar. Hemşire yorgun düşmeden önce gerçekleştirilmelidir.</li>","name":"Jenner\'ın Son Nefesi","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"Crotus Prenn Tımarhanesi papazı Peder Campbell\'dan çalınmış kuvvetli bir son nefes. Hemşire\'nin ellerinde gerginlikle cazırdar.<br><li>Hemşire tam güce ulaşmış sıçramayla belirir belirmez, yüzünün dönük olduğu yönde yarı güce ulaşmış bir sıçrama daha gerçekleştirir.</li>","name":"Campbell\'ın Son Nefesi","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"Crotus Prenn Tımarhanesi hastası \\"Kötü Adam\\"dan çalınmış kuvvetli bir son nefes. Hemşire\'nin ellerinde gerginlikle sıçrar.<br><li>Başarılı bir sıçrama saldırısıyla bir Kurban\'a vurduktan sonra Hemşire\'ye <b>16 saniye</b> sürecek olan bir <b>Tespit Edilemez</b> durum etkisi kazandırır.</li><li>Bu etki her <b>60 saniyede</b> yalnızca bir kere tetiklenir.</li>","name":"\\"Kötü Adam\'ın\\" Son Nefesi","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"Bir kutsal kitabın parçası olan beyaz ve el değmemiş kurdele parçası. Bir zamanlar ihtilafı temsil ediyormuş.<br><li>İlave <b>1</b> sıçrama yükü ekler.</li><li>Hemşire sadece görüş alanındaki konumlara sıçrayabilir.</li>","name":"Yırtık Kitap Ayracı","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"İçinde birbiriyle uyumsuz tuhaf bir dizi düğme olan bir kibrit kutusu. Korkunç bir mekânın hatıraları.<br><li><b>1</b> sıçrama yükü kaldırır.</li><li>Hemşire\'nin taban hareket hızını <b>4,2 m/s</b> olarak değiştirir.</li>","name":"Kibrit Kutusu","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"Plastikten çok ucuz bir mücevher. Değerli görünmesi için boyanmış.<br><li>Takip sırasında hareket hızını <b>biraz arttırır</b>.</li>","name":"Sahte Küpe","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"Bir kadının dikkatini çeksin diye yazılmış biraz \\"romantik\\", biraz da ahlaksız bir not.<br><li><b>Karanlık Benlik I</b>\'in atılma menzilini <b>biraz arttırır</b>.</li>","name":"Sevgiliden Bir Not","flavor":"\\"Not, D. olarak imzalanmış.\\"","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"Hafif dalgalı bir bukle sarı saç.<br><li><b>Karanlık Benlik III</b>\'ün süresini <b>biraz arttırır</b>.</li><li><b>Karanlık Benlik III</b>\'e ilk kez ulaşmak için gereken kötülük miktarını <b>biraz arttırır</b>.</li>","name":"Sarı Saç","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"Yansıtma özelliği hayli yüksek olan minik bir parça. Büyük olasılıkla kırık bir ayna parçası.<br><li>En az <b>1 saniyedir</b> takip edilen <b>Kurbanların haresi, Karanlık Benlik II\'yle ortaya çıkar</b>.</li><li>Hare, <b>2 saniye</b> süresince görünür halde kalır.</li>","name":"Yansıtıcı Parça","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"Bir kısmı solmuş ve kurumuş pembe bitotu. Mezardan koparılmış.<br><li>Bir Kurban takip edilirken kazanılan kötülük seviyesini <b>biraz arttırır</b>.</li>","name":"Hatıra Çiçeği","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"Boncuklar ve değersiz metallerden yapılma büyük bir kolye. Judith\'in en sevdiklerinden biri.<br><li>Takip sırasında hareket hızını <b>orta seviyede arttırır</b>.</li>","name":"Mücevher","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"Saça hacim ve yumuşaklık vermek için kullanılan naylon kıllı fırça.<br><li><b>Karanlık Benlik III</b>\'ün süresini <b>orta seviyede arttırır</b>.</li><li><b>Karanlık Benlik III</b>\'e ilk kez ulaşmak için gereken kötülük miktarını <b>biraz arttırır</b>.</li>","name":"Saç Fırçası","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"Büyük olasılıkla kırık bir nesneye ait küçük bir renkli cam parçası. Neye ait olduğunu anlamak mümkün değil.<br><li>En az <b>1 saniyedir</b> takip edilen <b>Kurbanların haresi, Karanlık Benlik I\'le ortaya çıkar</b>.</li><li>Hare, <b>3 saniye</b> süresince görünür halde kalır.</li>","name":"Cam Parçası","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"Boynundan kuyruğuna kadar ikiye ayrılmış gri bir tavşan.<br><li><b>Karanlık Benlik II</b>\'nin Dehşet Alanı\'nı <b>orta seviyede azaltır</b>.</li><li><b>Karanlık Benlik III</b>\'ün Dehşet Alanı\'nı <b>orta seviyede arttırır</b>.</li>","name":"Ölü Tavşan","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"Kırık bir aynanın büyük ve keskin bir parçası.<br><li>En az <b>1 saniyedir</b> takip edilen <b>Kurbanların haresi, Karanlık Benlik II\'yle ortaya çıkar</b>.</li><li>Hare, <b>5 saniye</b> süresince görünür halde kalır.</li>","name":"Kırık Ayna Parçası","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"Judith M. Myers\'a ait olduğu belirtilen bir günlük. Sayfaların çoğunda korkutucu ve rahatsız edici çizimler var.<br><li>Bir Kurban\'ı <b>saplantı</b> haline getirirsin.</li><li>Saplantını takip ederken kazanılan kötülük seviyesini <b>önemli ölçüde arttırır</b>.</li><li><i>Maç başına sadece bir saplantı.</i></li>","name":"Judith\'in Günlüğü","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"Bir zamanlar aksesuarların konulduğu, boş bir ahşap kutu.<br><li>Takip sırasında hareket hızını <b>önemli ölçüde arttırır</b>.</li>","name":"Mücevher Kutusu","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"Haddonfield Lisesi\'nin 1965 senesine ait yıllığından koparılmış kuşe sayfa. Yıllık, Judith Myers\'a ithaf edilmiş.<br><li>Bir Kurban takip edilirken kazanılan kötülük seviyesini <b>orta seviyede arttırır</b>.</li>","name":"J. Myers Anısına","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"Saç bağlamak için kullanılan mavi, ekoseli bir kurdele.<br><li><b>Karanlık Benlik III</b>\'ün süresini <b>önemli ölçüde arttırır</b>.</li><li><b>Karanlık Benlik III</b>\'e ilk kez ulaşmak için gereken kötülük miktarını <b>biraz arttırır</b>.</li>","name":"Saç Tokası","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"Üzerindeki toz ve pudra katmanı haricinde kusursuz durumda görünen taşınabilir ayna.<br><li><b>16 metrelik</b> bir mesafeden takip yapılırken <b>Karanlık Benlik II, Kurbanların haresini ortaya çıkarır</b>.</li><li>Karanlık Benlik, <b>II. aşamanın</b> ilerisine geçemez.</li><li>Hareket hızını <b>biraz düşürür</b>.</li><li>Her bir <b>Darbe</b> skor etkinliği için, <b>Vahşet</b> kategorisine bağlı <b>Darbe</b> skor etkinliğinden <b>%100</b> Kan Puanı, <b>Sinsilik</b> kategorisine bağlı olandansa fazladan <b>%150</b> Kan Puanı verir.</li>","name":"Ayna","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"Kırık bir mezar taşından alınmış, yumruk büyüklüğünde bir granit parçası.<br><li><b>Sağlıklı veya yaralı Kurbanları</b>, <b>Karanlık Benlik III</b> ile öldürme yeteneğini açar.</li><li><b>Karanlık Benlik III</b> ile takip etme yeteneğini <b>etkisiz kılar</b>.</li><li>Bir Kurban\'ı öldürmek, Karanlık Benlik\'in gücünü <b>önemli ölçüde emer</b>.</li><li><b>Karanlık Benlik III</b>\'e ilk kez ulaşmak için gereken kötülük miktarını <b>önemli ölçüde arttırır</b>.</li>","name":"Mezar Taşı Parçası","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"Metal, keskin bir nesneyle hunharca çizilmiş taşınabilir bir ayna.<br><li><b>32 metrelik</b> bir mesafeden takip yapılırken <b>Karanlık Benlik I, Kurbanların haresini ortaya çıkarır</b>.</li><li>Karanlık Benlik, <b>I. aşamanın</b> ilerisine geçemez.</li><li>Her bir <b>Darbe</b> skor etkinliği için, <b>Vahşet</b> kategorisine bağlı <b>Darbe</b> skor etkinliğinden <b>%100</b> Kan Puanı, <b>Sinsilik</b> kategorisine bağlı olanlardansa fazladan <b>%200</b> Kan Puanı verir.</li>","name":"Çizik Ayna","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"Siyah bir lastikle toplanmış bir tutam sarı saç.<br><li><b>Karanlık Benlik III</b>\'ün süresini <b>olağanüstü düzeyde arttırır</b>.</li><li><b>Karanlık Benlik III</b>\'e ilk kez ulaşmak için gereken kötülük miktarını <b>orta seviyede arttırır</b>.</li>","name":"Saç Tutamı","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"Sinclair dağ mezarlığından çalınmış, büyük, ağır granit mezar taşı. Judith Myers\'a ait.<br><li><b>Sağlıklı veya yaralı Kurbanları</b>, <b>Karanlık Benlik III</b> ile öldürme yeteneğini açar.</li><li><b>Karanlık Benlik III</b> ile takip etme yeteneğini <b>etkisiz kılar</b>.</li><li><b>Karanlık Benlik III</b>\'e ilk kez ulaşmak için gereken kötülük miktarını <b>olağanüstü düzeyde arttırır</b>.</li><li>Hareket hızını <b>orta seviyede azaltır</b>.</li>","name":"Judith\'in Mezar Taşı","flavor":"\\"Biricik kızımız burada yatıyor.\\"","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"Birilerinin kafatasından zorla çekilip koparılmış bir demet sarı saç. Hafifçe çiçeksi bir kadın kokusu yayıyor.<br><li><b>Karanlık Benlik III</b>\'e <b>sınırsızlık</b> sağlar.</li><li><b>Karanlık Benlik III</b>\'e ilk kez ulaşmak için gereken kötülük miktarını <b>olağanüstü düzeyde arttırır</b>.</li>","name":"Kokulu Saç Demeti","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"Ölü bitkilerden yapılmış, boyuna takılan sert bir aksesuar.<br><li>Hayalet tuzakların kurulma süresini <b>biraz düşürür</b>.</li>","name":"Halat Gerdanlık","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"Soluk, altın rengi bir parlaklığı olan, minik yumurta kabuğu parçaları.<br><li>Tetiklenen Hayalet tuzak süresini <b>biraz arttırır</b>.</li>","name":"Toz Halde Yumurta Kabuğu","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"Sinek kalıntıları yüzünden siyah görünen, küçük bir çamur topağı. Dayanıklılığı arttırmak için yutulur.<br><li>Acuze\'nin tuzaklarına ışınlanma mesafesini <b>biraz arttırır</b>.</li>","name":"Ölü Sinek Çamuru","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"Başka bir dönemden kalma cam ilaç şişesine konulmuş bulanık su.<br><li>Etkin Hayalet tuzak menzilini <b>biraz arttırır</b>.</li>","name":"Bataklık Suyu","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"Hoş, grimsi tüylerle kaplı bir avuç dolusu küçük ve bozulmamış çiçek.<br><li>Hayalet tuzağı tetiklediğinde, Kurban\'ın haresini <b>3 saniyeliğine</b> ortaya çıkarır.</li>","name":"Keçi Söğüdü Salkımı","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"Mükemmel bir yuvarlaklığa sahip içi boş yumurta kabuğunun yarısı.<br><li>Tetiklenen Hayalet tuzak süresini <b>orta seviyede arttırır</b>.</li>","name":"Yarım Yumurta Kabuğu","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"Bir avuç dolusu sarımsı kanat. Kuru ve çıtır çıtır. Dayanıklılığı arttırmak için yutulur.<br><li>Acuze\'nin tuzaklarına ışınlanma mesafesini <b>orta seviyede arttırır</b>.</li>","name":"Yusufçuk Kanatları","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"Gelişigüzel biçimde birbirine geçirilmiş servi ağacı kabuğu ve bataklık yosunlarıyla süslenmiş, ölü bitkilerden yapılmış ve boyuna asılan sert bir aksesuar.<br><li>Hayalet tuzakların kurulma süresini <b>orta seviyede azaltır</b>.</li>","name":"Servi Boyun Kürkü","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"Katlanmış bir nilüfer yaprağında birikmiş pis su.<br><li>Etkin Hayalet tuzak menzilini <b>orta seviyede arttırır</b>.</li>","name":"Kanlı Su","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"Üç ince söğüt dalından yapılmış, üçgen biçiminde bir çelenk.<br><li>Hayalet tuzak tetiklendiğinde, Kurban\'ın haresini <b>5 saniyeliğine</b> ortaya çıkarır.</li>","name":"Söğüt Çelengi","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"Orkide yaprakları ve başka yapraklarla süslenmiş, ölü bitkilerden yapılmış ve boyuna takılan sert bir aksesuar.<br><li>Hayalet tuzakların kurulma süresini <b>önemli ölçüde düşürür</b>.</li>","name":"Bataklık Orkidesi Gerdanlığı","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"Bir katman külle kaplanmış geniş bir bataklık ağustosböceği. Çıtır çıtır. Dayanıklılığı arttırmak için yutulur.<br><li>Acuze\'nin tuzaklarına ışınlanma mesafesini <b>önemli ölçüde arttırır</b>.</li>","name":"Kurutulmuş Ağustosböceği","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"Soluk turuncu renkte bir kaplumbağa yumurtası. Çatlamış ve içi boş.<br><li>Tetiklenen Hayalet tuzak süresini <b>önemli ölçüde arttırır</b>.</li>","name":"Çatlamış Kaplumbağa Yumurtası","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"Arada damar damar kırmızılıklar görünen bir avuç çamur. Kanlı katmanlar, çamuru güçlendiriyor.<br><li>Etkin Hayalet tuzak menzilini <b>önemli ölçüde arttırır</b>.</li>","name":"Kanlı Çamur","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"Yamyam köyü kasabının kesilmiş eli. İçinde hapsolmuş yaşam özü, Acuze\'nin gücündeki olağanüstü potansiyeli açığa çıkarır.<br><li>Çamur Suretler Kurbanların yolunu keser.</li><li>Acuze\'nin tuzaklara ışınlanma yeteneğini kaldırır.</li><li>Sinsilik\'ten <b>%300</b> Kan Puanı verir.</li><li>Diğer tüm eklentileri gölgede bırakır.</li>","name":"Yaralı El","flavor":"\\"…\\" -Kasap","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"Bir zamanlar yamyam köyünde tutukluları ve cesetleri tutmak için kullanılan prangalar. İçinde hapsolmuş yaşam özü, Acuze\'nin gücündeki olağanüstü potansiyeli açığa çıkarır.<br><li>Kurbanların takıldığı Hayalet tuzaklar, Kurbanlara takıldıklarını belli etmez.</li><li>Tuzak, Acuze Suret\'i doğurmaz.</li>","name":"Paslı Prangalar","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"Yamyam köyündeki ihtiyarın soğuk kalbi. İçine hapsolmuş yaşam özü, Acuze\'nin gücündeki olağanüstü potansiyeli açığa çıkarır.<br><li>Bir Kurban, Hayalet tuzağına takıldığında, Acuze\'nin kalp atışları <b>0\'a</b> iner.</li><li>Çamur Suret\'in kalp atış menzili <b>16 metreye</b> kadar çıkar.</li>","name":"Büyükannenin Kalbi","flavor":"\\"Bana kızdan bir parça daha getir.\\" -Büyükanne","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"Yamyam köyündeki sağır çocuğun kulağı. Kafasına aldığı darbeler sebebiyle şekli bozulmuş. İçine hapsolmuş yaşam özü, Acuze\'nin gücündeki olağanüstü potansiyeli açığa çıkarır.<br><li>Hayalet tuzağını tetikleyen Kurbanlar, <b>6 saniye</b> boyunca sağır olur.</li>","name":"Şekli Bozulmuş Kulak","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"Bataklık sularında kaybolup gitmiş bir çocuk ayakkabısı. İçinde hapsolmuş yaşam özü, Acuze\'nin gücündeki olağanüstü potansiyeli açığa çıkarır.<br><li>Tetiklenen tuzağın menzilindeki Kurbanlar, <b><i>Topal</i></b> durum etkisi altına girer.</li><li>Acuze\'nin hareket hızını <b>biraz</b> arttırır.</li><li>Acuze\'nin tuzaklara ışınlanma yeteneğini kaldırır.</li>","name":"İçi Su Dolu Ayakkabı","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"Lisa Sherwood\'un ortadan kaybolduğu gün giydiği elbiseden yırtılmış, küçük bir kumaş parçası. İçinde hapsolmuş yaşam özü, Acuze\'nin gücündeki olağanüstü potansiyeli açığa çıkarır.<br><li>Acuze, seviyedeki herhangi bir Hayalet tuzağa ışınlanabilir.</li><li>Hayalet tuzak ışınlanmasının bekleme süresi <b>15 saniyedir</b>.</li>","name":"Açık Yeşil Kumaş Parçası","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"Küflü olduğu halde zayıf elektrik akımı ileten bir elektrot.<br><li><b>Şok Terapisi</b>\'nin menzilini <b>biraz arttırır</b>.</li>","name":"Küflü Elektrot","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"Akçaağaçtan yapılmış, beyaz renkli satranç at taşı. Yaşlı bir adamın hediyesi olan bu satranç taşı, eski hatıraları canlandırır ve Doktor\'a korkunç bir dikkat verir.<br><li><b>Şok Terapisi</b> <i>özel saldırısının</i> etki alanını ortaya çıkarır.</li>","name":"Akçaağaçtan At","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"Léry Ruh Sağlığı Enstitüsü\'nde hastanın günlük rutininin bir parçası olan, geleneksel bir ECT işlemi. Hastada hafif kafa karışıklığı yaratabilir.<br><li><b>Statik Patlama\'nın</b> bekleme süresini <b>biraz azaltır</b>.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>emir arazından</i> etkilenir:<li>Kırık paletler, yanlarına yaklaşılana kadar <i>hayali paletlerle</i> değiştirilmiş gibi görünebilir.</li><li>Her <b>20 saniyede</b> bir, kırık bir paletin olduğu noktada, yeni bir <i>hayali palet</i> ortaya çıkar.</li><li><b>Doktor</b> <i>hayali paletlerin</i> harelerini görür.</li>","name":"\\"Emir\\" - I. Sınıf","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"Pek çok akıl hastalığını hafifleten derin frekanslar kullanan bir ECT işlemi. Kaynak olarak Carter\'ın Kıvılcımı\'nı kullanan bu işlem, hastada hafif endişe yaratabilir.<br><li><b>Statik Patlama</b> hazırken Dehşet Alanı\'nı <b>biraz arttırır</b>.</li><li><b>Statik Patlama</b> beklemedeyken Dehşet Alanı\'nı <b>biraz azaltır</b>.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>sükûnet arazından</i> etkilenir:<li><b>Delilik II</b>: Kurbanların <b>aralıklı olarak</b> uzaktan bir <i>hayali Dehşet Alanı</i> duymasına sebep olur.</li><li><b>Delilik III</b>: Kurbanların <b>sürekli</b> uzaktan bir <i>hayali Dehşet Alanı</i> duymasına sebep olur.</li>","name":"\\"Sakin\\" - I. Sınıf","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"Uyanış Projesi\'nden, çoğunlukla beyaz parazit içeren kısa bir kaset. Doktor\'un zihnini alternatif tedavi yöntemlerine açar.<br><br><li><b>Şok Terapisi</b> <i>özel yeteneğinin</i> alanı, koni biçiminden halkaya dönüşür ve <b>Doktor</b>\'un <b>8 metre</b> önüne açılır. Açılan halkanın dış çapı <b>4,2 metre</b>, iç çapı <b>3 metredir</b>.</li>","name":"Bozuk Kaset","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"Elektroşok tedavisi uygulamak için kullanılan, yeni gibi duran standart bir elektrot ekipmanı.<br><li><b>Şok Terapisi</b>\'nin menzilini <b>orta seviyede arttırır</b>.</li>","name":"Cilalı Elektrot","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"Uyanış Projesi\'nden bir Kurban\'la yapılan montajlanmamış röportajı içeren kısa bir kaset. Doktor\'un zihnini alternatif tedavi yöntemlerine açar.<br><li><b>Şok Terapisi</b> <i>özel yeteneği</i>, koni biçiminden <b>24 metrelik</b> menzili ve <b>2 metrelik</b> genişliği olan bir ışına dönüşür.</li>","name":"Röportaj Kaseti","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"Sis\'te geliştirilmiş deneysel bir ECT işlemi. Hastayla doktorun zihinlerini birbirine bağlayan frekanslar kullanır. Bu işlemin, hastada hafif halüsinasyonlara sebep olduğu bilinmektedir.<br><li>Kurbanların <b>Delilik</b> durumu arttığında <b>1 saniye</b> boyunca hareleri görünür olur.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, <i>dizginleme arazından</i> etkilenir:<li><i>Hayali Doktor</i> halüsinasyonu süresini <b>orta seviyede arttırır</b>.</li><li><b>Doktor</b>, <i>hayali Doktorların</i> harelerini görebilir.</li>","name":"\\"Dizgin\\" - II. Sınıf","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"Léry Ruh Sağlığı Enstitüsü\'nde hastaların günlük rutininin bir parçası olan, yüksek uyarıcılıkta bir ECT işlemi. Hastada orta seviyede kafa karışıklığı yaratabilir.<br><li><b>Statik Patlama\'nın</b> bekleme süresini <b>orta seviyede azaltır</b>.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>emir arazından</i> etkilenir:<li>Kırık paletler, yanlarına yaklaşılana kadar <i>hayali paletlerle</i> değiştirilmiş gibi görünebilir.</li><li>Her <b>20 saniyede</b> bir, kırık bir paletin olduğu noktada, yeni bir <i>hayali palet</i> ortaya çıkar.</li><li><b>Doktor</b> <i>hayali paletlerin</i> harelerini görür.</li><span class=\\"FlavorText\\">\\"Yan etkileri çok nadir görülür.\\" -Léry Ruh Sağlığı Enstitüsü</span>","name":"\\"Emir\\" - II. Sınıf","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"Disiplin amaçlı kullanılan Uyanış Projesi ECT işlemi, yüksek voltajda belirli bir doz kullanır. Hastada orta seviyede paranoya yaratabilir.<br><li><b>Şok Terapisi\'nin</b> etkinleşmesi için geçmesi gereken süreyi <b>biraz azaltır</b>.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>disiplin arazından</i> etkilenir:<li><b>Delilik II</b>: Kovalama sırasında, Kurbanlar sanki <b>Doktor</b> hemen arkalarındaymış gibi bir <i>hayali Kızıl Leke</i> ve <i>Dehşet Alanı</i> görür. Bu etki kovalama bittikten <b>6 saniye</b> sonra sona erer.</li><li><b>Delilik III</b>: <i>Hayali Kızıl Leke</i> ve <i>Dehşet Alanı</i> sürekli etkindir.</li><li><b>Doktor</b> da bu <i>hayali Kızıl Leke\'yi</i> görür.</li><span class=\\"FlavorText\\">\\"Hastalarımızı büyük bir özenle baştan eğitiyoruz.\\" -Léry Ruh Sağlığı Enstitüsü</span>","name":"\\"Disiplin\\" - II. Sınıf","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"Pek çok akıl hastalığını hafifleten derin frekanslar kullanan, riskli bir ECT işlemi. Kaynak olarak Carter\'ın Kıvılcımı\'nı kullanan bu işlem, hastada orta seviyede endişe yaratabilir.<br><li><b>Statik Patlama</b> hazırken Dehşet Alanı\'nı <b>orta seviyede arttırır</b>.</li><li><b>Statik Patlama</b> beklemedeyken Dehşet Alanı\'nı <b>orta seviyede azaltır</b>.</li><br><b>Delilik </b> durum etkisinde olan Kurbanlar, şu <i>sükûnet arazından</i> etkilenir:<li><b>Delilik II</b>: Kurbanların <b>aralıklı olarak</b> uzaktan bir <i>hayali Dehşet Alanı</i> duymasına sebep olur.</li><li><b>Delilik III</b>: Kurbanların <b>sürekli</b> uzaktan bir <i>hayali Dehşet Alanı</i> duymasına sebep olur.</li><span class=\\"FlavorText\\">\\"Elektrokonvülsif terapi, tıbbi işlemlerin en güvenlisidir.\\" -Léry Ruh Sağlığı Enstitüsü</span>","name":"\\"Sakin\\" - II. Sınıf","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"Çok yüksek voltajlara daha uzun süreler dayanabilen deneysel bir elektrot.<br><li><b>Şok Terapisi</b>\'nin menzilini <b>önemli ölçüde arttırır</b>.</li>","name":"Yüksek Uyaranlı Elektrot","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"Sis\'te geliştirilmiş deneysel bir ECT işlemi. Hastayla doktorun zihinlerini birbirine bağlamak için yüksek uyarıcılıkta frekanslar kullanır. Bu işlemin, hastada ciddi halüsinasyonlara sebep olduğu bilinmektedir.<br><li>Kurbanların <b>Delilik</b> durumu arttığında <b>2 saniye</b> boyunca hareleri görünür olur.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>dizginleme arazından</i> etkilenir:<li><i>Hayali Doktor</i> halüsinasyonu süresini <b>orta seviyede arttırır</b>.</li><li><b>Doktor</b>, <i>hayali</i> Doktorların harelerini görebilir.</li>","name":"\\"Dizgin\\" - III. Sınıf","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"Disiplin amaçlı kullanılan Uyanış Projesi ECT işlemi, çok yüksek voltajda belirli bir doz kullanır. Hastada ciddi düzeyde paranoya yaratabilir.<br><li><b>Şok Terapisi\'nin</b> etkinleşmesi için geçmesi gereken süreyi <b>orta seviyede azaltır</b>.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>disiplin arazından</i> etkilenir:<li><b>Delilik II</b>: Kovalama sırasında, Kurbanlar sanki <b>Doktor</b> hemen arkalarındaymış gibi bir <i>hayali Kızıl Leke</i> ve <i>Dehşet Alanı</i> görür. Bu etki kovalama bittikten <b>6 saniye</b> sonra sona erer.</li><li><b>Delilik III</b>: <i>Hayali Kızıl Leke</i> ve <i>Dehşet Alanı</i> sürekli etkindir.</li><li><b>Doktor</b> da bu <i>hayali Kızıl Leke\'yi</i> görür.</li><span class=\\"FlavorText\\">\\"Hastalarımızın saygısı, en temel prensibimizdir.\\" -Léry Ruh Sağlığı Enstitüsü</span>","name":"\\"Disiplin\\" - III. Sınıf","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"Sis\'te geliştirilmiş, deneysel bir ECT işlemi. Üstüne kabaca notlar alınmış. Hastayla doktorun zihinlerini birbirine bağlamak için dayanılmaz uyarıcılıkta frekanslar kullanır. Bu işlemin, hastada ileri derece halüsinasyonlara sebep olduğu bilinmektedir.<br><li>Kurbanların <b>Delilik</b> durumu arttığında <b>3 saniye</b> boyunca hareleri görünür olur.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>dizginleme arazından</i> etkilenir:<br><li><i>Hayali Doktor</i> halüsinasyonu süresini <b>orta seviyede arttırır</b>.</li><li><b>Doktor</b>, <i>hayali Doktorların</i> harelerini görebilir.</li><span class=\\"FlavorText\\">\\"<u>İĞRENÇ</u> HASTALIKLARINI GÖREBİLİYORUM.\\" -İmzasız Notlar</span>","name":"\\"Dizgin\\" - Carter\'ın Notları","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"ECT işleminin deneysel hali. Bizzat Doktor Herman Carter tarafından not düşülmüş. Uzun ve devamlı uyaranlar, hastada şiddetli kafa karışıklığı yaratır.<br><li><b>Statik Patlama\'nın</b> bekleme süresini <b>önemli ölçüde azaltır</b>.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>emir arazından</i> etkilenir:<li>Kırık paletler, yanlarına yaklaşılana kadar <i>hayali paletlerle</i> değiştirilmiş gibi görünebilir.</li><li>Her <b>20 saniyede</b> bir, kırık bir paletin olduğu noktada, yeni bir <i>hayali palet</i> ortaya çıkar.</li><li><b>Doktor</b>, <i>hayali paletlerin</i> harelerini görür.</li><span class=\\"FlavorText\\">\\"Uyaranın <u>sarsıcı</u> seviyede tutulması gerekir.\\" -H. Carter</span>","name":"\\"Emir\\" - Carter\'ın Notları","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"Disiplin amaçlı kullanılan Uyanış Projesi ECT işlemi. Üzerine bizzat Doktor Herman Carter tarafından notlar düşülmüş. Dayanılmaz yükseklikteki voltaj, hastada ciddi düzeyde paranoya yaratabilir.<br><li><b>Şok Terapisi\'nin</b> etkinleşmesi için geçmesi gereken süreyi <b>önemli ölçüde azaltır</b>.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>disiplin arazından</i> etkilenir:<li><b>Delilik II</b>: Kovalama sırasında, Kurbanlar sanki <b>Doktor</b> hemen arkalarındaymış gibi bir <i>hayali Kızıl Leke</i> ve <i>Dehşet Alanı</i> görür. Bu etki kovalama bittikten <b>6 saniye</b> sonra sona erer.</li><li><b>Delilik III</b>: <i>Hayali Kızıl Leke</i> ve <i>Dehşet Alanı</i> sürekli etkindir.</li><li><b>Doktor</b> da bu <i>hayali Kızıl Leke\'yi</i> görür.</li><span class=\\"FlavorText\\">\\"En inatçı deneklerimizin kötüye gitmesini önlemek için disiplin amaçlı uygulamaları azami seviyelerde kullanın.\\" -H. Carter</span>","name":"\\"Disiplin\\" - Carter\'ın Notları","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"ECT işleminin deneysel hali. Üzerine bizzat Doktor Herman Carter tarafından not düşülmüş. Pek çok akıl hastalığını hafifleten derin frekanslar kullanır. Kaynak olarak Carter\'ın Kıvılcımı\'nı kullanan bu işlem, hastada dizginlenemeyen bir korku ve endişe yaratır.<br><li><b>Statik Patlama</b> hazırken Dehşet Alanı\'nı <b>önemli ölçüde arttırır</b>.</li><li><b>Statik Patlama</b> beklemedeyken Dehşet Alanı\'nı <b>önemli ölçüde azaltır</b>.</li><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>sükûnet arazından</i> etkilenir:<li><b>Delilik II</b>: Kurbanların <b>aralıklı olarak</b> uzaktan bir <i>hayali Dehşet Alanı</i> duymasına sebep olur.</li><li><b>Delilik III</b>: Kurbanların <b>sürekli</b> uzaktan bir <i>hayali Dehşet Alanı</i> duymasına sebep olur.</li><span class=\\"FlavorText\\">\\"Yüksek kalitedeki nöbetler, katatoniyi tetikler. En azından devam ettiği sürece <u>huzur</u> içinde oluyorum.\\" -H. Carter</span>","name":"\\"Sakin\\" - Carter\'ın Notları","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"Sis\'ten yapılmış, cam benzeri satranç şah taşı. İçinde Mahluk\'tan bir iz taşıyor; en kudretli zihinleri bile mahvedebilir.<br><br><b>Delilik</b> durum etkisinde olan Kurbanlar, şu <i>sükûnet, disiplin, emir</i> ve <i>dizginleme arazlarından</i> etkilenir.<li>Kurbanların <b>aralıklı olarak</b> uzaktan bir <i>hayali Dehşet Alanı</i> duymasına sebep olur.</li><li>Kovalama sırasında, Kurbanlar sanki <b>Doktor</b> hemen arkalarındaymış gibi bir <i>hayali Kızıl Leke</i> ve <i>Dehşet Alanı</i> görür. Bu etki, <b>Delilik II</b> durumunda kovalama bittikten <b>6 saniye</b> sonra sona ererken <b>Delilik III</b> durumunda sürekli etkindir.</li><li>Kırık paletler, yakınlarına gidilinceye kadar etkin olan <i>hayali paletler</i> gibi görünebilir. Her <b>20 saniyede</b> bir, kırık bir paletin olduğu noktada, yeni bir <i>hayali palet</i> ortaya çıkar.</li><li><i>Hayali Doktor</i> halüsinasyonu süresini <b>orta seviyede arttırır</b>.</li><li><b>Doktor</b>, <i>hayali Kızıl Lekelerin</i> yanı sıra <i>hayali Doktor ve hayali paletlerin</i> haresini görür.</li>","name":"Parıltılı Kral","flavor":"\\"Parıltılı cama bakmak, kendini bilerek deliliğin içine atmaktır\\"","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"Sis\'in elinden çıkma, cam yapılı bir satranç taşı. Ciddi dozda elektriğe maruz kalmadan dokunmak mümkün değil.<br><li><b>Şok Terapisi</b> ya da <b>Statik Patlama</b> <i>özel yeteneklerinin</i> isabet ettiği tüm Kurbanlar kalıcı <b>Statik yük</b> kazanır. <b>Statik yük</b> <i>boşaltılana</i> dek Kurban\'da kalır.</li><li>Birbirine <b>4 metre</b> mesafede olan ve aynı <b>Şok Terapisi</b> ya da <b>Statik Patlama</b> <i>özel yeteneğine</i> maruz kalmış birden fazla Kurban, <b>Statik yük</b> edinmez.</li><li><b>Statik yük</b> taşıyan bir Kurban\'a <b>4 metreden</b> fazla yaklaşan herhangi bir Kurban, <b>Şok Terapisi</b> <i>özel yeteneğiyle</i> ile aynı etkiye sahip bir şoka maruz kalır ve <b>Statik yük</b> anında <i>boşalır</i>.</li>","name":"Parıltılı Kraliçe","flavor":"\\"Önce tedavinin etkili bir yöntemini bulalım, sonra onu nasıl daha verimli şekilde sunabileceğimize odaklanırız.\\" -H.Carter","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"Bu taş o kadar yontulmamış ki hiçbir işe yaramaz. Bununla hasar gören bıçaklar, korkunç açık yaralara sebep olur.<br><li>Vurulan hedeflerin sızlanma naraları hedefler tamamen iyileşene kadar <b>%50</b> artar.</li>","name":"Yontulmamış Taş","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"Sivilcelerle ilgilenmeye ve iltihabı temizlemeye yarayan basit bir kumaş parçası.<br><li>Fırlatılan Balta\'nın havadaki hızını <b>%10</b> arttırır.</li>","name":"Sararmış Bez","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"Baltanın sapına sıkıca sarılmış ilkyardım sargıları.<br><li>Balta atışları arasındaki bekleme süresini <b>biraz azaltır</b>.</li>","name":"Sargılı Balta Sapı","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"Baltaların bıçağına sürülen bir zehir. Köygöçüren mantarlarının zehri, zihni uyuşturur.<br><li>Vurulan hedef, <b>60 saniye</b> boyunca <b><i>Körlük</i></b> durum etkisine girer.</li><li>Etkisi birikmez.</li>","name":"Köygöçüren Zehri","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"Tuhaf bir şekilde ağır olan bir balta başı. Hedeflere sert darbeler indirmesi için üretilmiş. Kullanmak için güçlü bir kol gerekir.<br><li>Darbe alan hedef, <b>10 saniye</b> boyunca <b>Aciz</b> durum etkisine girer.</li>","name":"Ağır Baş","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"Tanınmayacak hale gelmiş fakat fazlasıyla cilalandığı için parlayan bakır bir rozet. Son derece zorlu bir avdan elde edilmiş.<br><li>Fırlatma eylemi için hazırlanırken, hareket hızını <b>biraz arttırır</b>.</li><li>Etkisi birikmez.</li>","name":"Parlak Rozet","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"Ölümcül aracın hızlı ve sinsi biçimde dönüşmesini sağlayan cilalı sap.<br><li>Balta atışları arasındaki bekleme süresini <b>orta seviyede azaltır</b>.</li>","name":"Meşe Sap","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"Çimenden yapılmış, daire biçiminde dekoratif bir örgü. Bu kaybedilen ufaklığın hatırası, Avcı\'yı öfke ve dikkatle dolduruyor.<br><li>Balta\'nın dönme süresini <b>orta seviyede azaltır</b>.</li>","name":"Çimenden Örgü Taç","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"Halka şeklinde bağlanmış deri kayış, araçların kolay taşınabilmesi için bir kemere takılabilir.<br><li><b>Fazladan 1</b> Balta ile başla.</li><li>Taşınabilir azami Balta sayısını en fazla <b>1</b> arttırır.</li>","name":"Deri Halka","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"Çayla kaynatıldığında yorgunluk ve güçsüzlük belirtilerini hafifleten kurutulmuş yapraklar.<br><li>Fırlatılan Balta\'nın havadaki hızını <b>%20</b> arttırır.</li>","name":"Gül Kökü","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"Tabaklanmış deriden, elleri koruyup sıkı bir tutuş sağlayan eldiven.<br><li>Balta\'nın dolapta yeniden doldurma süresini <b>orta seviyede azaltır</b>.</li>","name":"Güderi Eldiven","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"Baltaların bıçağına sürülen zehirli bir karışım. Bu bulanık karışımın büyük bir kısmı zehirli engereğin zehrinden yapılmış ve bu sayede yorgun düşürme özelliği gösteriyor.<br><li>Vurulan hedef, <b>5 saniye</b> boyunca <b>Bitkin</b> durum etkisi altına girer.</li>","name":"Zehirli Karışım","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"Bu Baltaların başları, yer yer sertleşmiş pas lekeleriyle kaplıdır ve yaralanmaların iyileşmesini özellikle zorlaştırır.<br><li>Vurulan hedef, <b><i>Ağır Yaralı</i></b> durum etkisine girer</li>.","name":"Paslı Baş","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"Çiçek desenli, temiz ve renkli bir fular. Bu kaybedilen ufaklığın hatırası, Avcı\'yı öfke ve dikkatle dolduruyor.<br><li>Balta\'nın dönme süresini <b>önemli ölçüde azaltır</b>.</li>","name":"Çiçekli Fular","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"Bir askerin üzerinden alınmış, sağlam ve kullanışlı bir kemer. Üzerindeki sayısız deri halka ve kılıf, araç taşınmasını kolaylaştırıyor.<br><li><b>Fazladan 2</b> Balta ile başla.</li><li>Taşınabilir azami Balta sayısını en fazla <b>2</b> arttırır.</li>","name":"Piyade Kemeri","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"Başka bir dünyadan gelmiş gibi görünen, kötü şeylerin habercisi hafif bir ışıkla parlayan bir karışım.<br><li>Vurulan kurbanların haresi, <b>5 saniyeliğine</b> görünür olur.</li>","name":"Parlayan Karışım","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"Bu Balta başları, dokunduğu herkesi halsiz bırakan iğrenç bir maddeyle lekelenmiş.<br><li>Vurulan hedef, tamamen iyileştirilene kadar <b><i>Ağır Yaralı</i></b> ve <b><i>Kan Kaybı</i></b> durum etkileri altına girer.</li><li>Etkileri birikmez.</li>","name":"Lekeli Baş","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"Oldukça ufak, kabaca oyulmuş bir tilki heykeli. Gizliliğin ve zekânın da saf güç kadar etkili olabileceğini hatırlatan bir eşya.<br><li>Yeniden doldurduktan sonra <b>15 saniye</b> boyunca <i><b>Tespit Edilemez</b></i> durum etkisi sağlar.</li>","name":"Ahşap Tilki","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"Sis\'ten yapılmış cam gibi bir Balta başı. Bıçağı sıcak ve Mahluk\'un gücünü taşıyor.<br><li>Baltayla yapılan isabetli vuruşlar sağlıklı Kurbanları hemen can çekişme aşamasına sokar.</li><li>Taşınabilir azami Balta sayısını <b>1</b> yapar.</li>","name":"Parıltılı Baş","flavor":"\\"Parıltılı cam, hem eti hem ruhu deşer.\\"","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"Ölü bir askerin bedeninden alınmış bir dolak. Ayak bileğini ve alt bacağı destekler.<br><li>Avcı, Baltaları yokken <b>4,6 m/s</b> hızında hareket eder.</li>","name":"Asker Dolağı","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"Düşük kaliteli gres yağı olarak kullanılan bozuk yağ.<br><br><li>Bir Kurban\'a başarıyla vurduktan sonra Elektrikli Testere\'nin bekleme süresini <b>biraz düşürür</b>.</li>","name":"Bitkisel Yağ","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"Elektrikli Testere\'ye uygun buji.<br><br><li>Yüklerin yenilenme hızını <b>biraz arttırır</b>.</li>","name":"Buji","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"Elektrikli Testere\'nin zincirlerini bilemeye yarayan bir eğe.<br><li>Sinir krizi süresini <b>biraz azaltır</b>.</li>","name":"Elektrikli Testere Eğesi","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"Küçük motorların tek seferde alabileceği yakıt miktarını sınırlayan bu mekanik cihaz, devamlı ve güvenli bir hız sağlar.<br><br><li>Elektrikli Testere, can çekişme durumunu otomatik olarak tetiklemez.</li><li>Elektrikli Testere Darbesi skor etkinliğiyle <b>%100</b> daha fazla Kan Puanı kazan.</li>","name":"Hız Sınırlayıcı","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"Hızlı ve güçlü çalışması için ateşleme sistemine daha fazla yakıt aktarır.<br><br><li>Yüklerin yenilenme hızını <b>orta seviyede arttırır</b>.</li>","name":"Temel Ampul","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"Uzun zincirler için demirden, sağlam bir ek parça.<br><br><li>Elektrikli Testere çalıştırılırken sinir krizi başlamadan önceki süreyi <b>biraz arttırır</b>.</li>","name":"Uzun Kılavuz Rayı","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"Elektrikli Testere\'nin gövdesini, mühür bıçağıyla atılmış çizikler kaplıyor. Vahşi cezalandırmalara ait anılar, bu nesneyi eline alanı başarısız olma korkusuyla dolduruyor.<br><br><li>Elektrikli Testere\'nin hareket hızını <b>biraz arttırır</b>.</li><li>Başlama süresini <b>biraz arttırır</b>.</li>","name":"Bıçak Çizikleri","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"Siyah gaz borularından yapılmış, uyduruk bir egzoz sistemi.<br><br><li>Sinir krizi süresini <b>orta seviyede azaltır</b>.</li>","name":"Ev Yapımı Susturucu","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"Seni zinde ve güçlü tutacak, buharı tüten büyük bir kâse chili yemeği.<br><br><li>Bir nişan tüketildiğinde, atılma süresini <b>biraz arttırır</b>.</li><li>Fazladan Elektrikli Testere Süpürme Saldırısı aralığını <b>biraz arttırır</b>.</li><br>","name":"Chili Yemeği","flavor":"\\"Etlerim çok güzel!\\" -Drayton Sawyer","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"Sawyer\'lar tarafından hazırlanmış, yoğun ve sarımsı bir sıvı. Evlerindeki her türlü yağlama işi için kullanılıyor.<br><br><li>Elektrikli Testere çalıştırılırken sinir krizi başlamadan önceki süreyi <b>orta seviyede arttırır</b>.</li>","name":"Yağ","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"Elektrikli Testere\'nin üzerindeki tırtıklı izler, Sis\'te yaşayan karanlık canavarın bıraktığı bir ceza. Vahşi cezalandırmalara ait anılar, bu nesneyi eline alanı başarısız olma korkusuyla dolduruyor.<br><br><li>Elektrikli Testere\'nin hareket hızını <b>orta seviyede arttırır</b>.</li><li>Başlama süresini <b>biraz arttırır</b>.</li>","name":"Canavar\'ın İzleri","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"Kurbanları, iyileştirildikten sonra bile sakat bırakan, normalden çok daha ağır kesici dişlere sahip zincir.<br><li>Elektrikli Testere\'yle yaralanan Kurbanlar <b>Ağır Yaralı</b> durum etkisi altına girer.</li>","name":"Dehşet Verici Zincir","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"Elektrikli testereler için özel yapılmış bir yağ. Yağ atımını önleyen özel bir katkı maddesi içerir.<br><br><li>Dehşet Alanı\'nın içinde başka bir Kurban yokken Elektrikli Testere\'yle bir Kurban\'ı yere düşürmek, düşürülen Kurban\'ın haresini <b>20 saniyeliğine</b> gizler.</li>","name":"Sanayi Yağı","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"Zincir, dokunan herkesi güçten düşüren iğrenç bir maddeyle lekelenmiş.<br><br><li>Elektrikli Testere darbeleri Kurbanların eşya düşürmesine neden olur.</li>","name":"Kirli Zincir","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"Eğeleme mastarının açısını arttırarak zincirin daha fazla \\"ağaç\\" yemesini sağlayan araç.<br><li>Yük sayısını <b>arttırır</b>.</li><li>Başlama süresini <b>biraz arttırır</b>.</li><li>Elektrikli Testere Süpürme Saldırısı\'nın azami hızını <b>biraz azaltır</b>.</li>","name":"Eğeleme Mastarı","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"Nispeten kısa bir kılavuz rayı olan, hafif ve dayanıklı Elektrikli Testere şasisi. Elektrikli Testere\'nin tutuşunu kolaylaştırır.<br><br><li>Testerenin motorunu çalıştırırken <b>8 metre</b> içindeki Kurbanların haresini görürsün.</li>","name":"Hafif Şasi","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"Bu zincir, yer yer sertleşmiş pas lekeleriyle kaplıdır ve yaralanmaların iyileşmesini zorlaştırır.<br><br><li>Elektrikli Testere\'den darbe alan Kurbanlar <b>90 saniyeliğine</b> <b><i>Sakat</i></b> durum etkisi altına girer.</li><li>Etkisi birikmez.</li>","name":"Paslı Zincir","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"Kaliteli etiyle nam salmış büyük bir kâse baharatlı chili yemeği.<br><br><li>Bir nişan tüketildiğinde atılma süresini <b>orta seviyede arttırır</b>.</li><li>Elektrikli Testere\'yle ek hamle yapma aralığını <b>orta seviyede arttırır</b>.</li><br>","name":"Ödüllü Chili Yemeği","flavor":"\\"İşin sırrı ette.\\" -Drayton Sawyer","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"Yumuşak ve taze ince bir et dilimi. Damarlar, içinde hâlâ yaşam varmışçasına bir ışıltıyla titreşiyor.<br><br><li>Elektrikli Testere\'yle bir Kurban\'a vurmak, yüklerini yeniler.</li><li>Azami sinir krizi süresini 8 saniyeyle sınırlandırır.</li><br>","name":"Parıltılı Et","flavor":"\\"Yaşadığın şeylerin gerçek olamayacağını düşündüğün anlar olacak. Böyle anlarda kendini çimdiklersen, her şeyin gerçek olduğunu göreceksin.\\" -Pam Jones","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"Bir elektrikli testere karbüratörünün nasıl ayarlanacağını anlatan kabaca çizilmiş bir rehber.<br><li>Elektrikli Testere Deparı atılırken otomatik olarak tüm yükleri tüketir.</li><li>Elektrikli Testere\'yle atılma süresini <b>biraz arttırır</b>.</li><li>Elektrikli Testere Süpürme Saldırısı\'nın azami hızını <b>biraz azaltır</b>.</li>","name":"Karbüratör Ayarları Rehberi","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"Küçük bir erkek çocuğunun turuncu sarı çizgili tişörtü. Üzerine \\"Jesse\\" yazan bir etiket dikilmiş.<br>Kurbanlar <b>Rüya Dünyası</b>\'ndayken:<li><i>İyileştirme</i> ve <i>tamirat</i> ilerlemesinin gerileme cezasını <b>biraz arttırır</b>.</li>","name":"Pamuklu Tişört","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"Üzerinde otlayan bir kuzu resmi ve \\"S\\" harfi olan, beyaz ve mavi renkli, tahta bir küp.<li>Bir Kurban <b>Rüya Kıskacı</b> veya <b>Rüya Paleti</b>\'yle etkileşime girdiğinde 30 saniyeliğine <b>Körlük durum etkisi</b> uygulanır.</li>","name":"Kuzu Küpü","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"Küçük bir çocuk tarafından çizildiği belli, kötü bir çizim.<li>Bir Kurban <b>Rüya Kıskacı</b>\'nı tetiklediğinde <b>Sinsilik</b> kategorisinde fazladan <b>200 bonus Kan Puanı</b> kazan.</li><li>Kurbanlara uygulanan <b>Rüya Kıskacı</b> hız cezasını <b>önemli ölçüde azaltır</b>.</li>","name":"Çocuğun Resmi","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"Başarılı bir bahçıvanın olmazsa olmazı küçük bir tırmık.<br><b>Rüya Kıskaçlarını Rüya Paletleriyle</b> değiştirir.<li>7 <b>Rüya Nişanı</b>.</li>","name":"Bahçe Tırmığı","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"Çalıları budamaya yarayan ev yapımı bir araç.<li><b>Rüya Kıskaçlarını Rüya Paletleriyle</b> değiştirir.</li><li>7 <b>Rüya Nişanı</b>.</li><li>Kurbanlar <b>Rüya Paletleriyle</b> etkileşime geçtiğinde, hareleri <i>Kâbus</i>\'a <b>4 saniyeliğine</b> görünür.</li>","name":"Prototip Tırmık","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"Herhangi bir şeyi bağlamaya uygun, sağlam halat.<br>Kurbanlar <b>Rüya Dünyası</b>\'ndayken<li>jeneratör tamir sesleri <b>8 metre daha uzaktan</b> duyulabilir.</li>","name":"Sağlam Halat","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"Ressam kömürüyle yapılmış, Nancy H. imzalı kaba ve çarpıcı çizim.<li><b>Rüya Dünyası</b>\'ndaki her bir Kurban için <b>Rüya İzdüşümü</b>\'nün güç yenileme hızını <b>biraz arttırır</b>.</li>","name":"Nancy\'nin Çizimi","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"Küçük bir kızın beyaz, ipeksi kurdeleli yeşil elbisesi.<br>Kurbanlar <b>Rüya Dünyası</b>\'ndayken:<li><i>İyileştirme</i> ve <i>tamirat</i> ilerlemesinin gerileme cezasını <b>biraz arttırır</b>.</li><li><i>İyileştirme</i> veya <i>tamirat</i> Beceri Denemesi başarısız olduğunda, bir Kurban\'ın haresi <i>Kâbus</i>\'a <b>3 saniyeliğine</b> görünür.</li>","name":"Yeşil Elbise","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"Üzerinde uyuyan bir kedi resmi ve \\"C\\" harfi olan, beyaz ve mor renkli, tahta bir küp.<li>Bir Kurban <b>Rüya Kıskacı</b> veya <b>Rüya Paleti</b>\'yle etkileşime girdiğinde 60 saniyeliğine <b>Kan Kaybı durum etkisi</b> uygulanır.</li>","name":"Kedi Küpü","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"Üzerinde seken tek boynuzlu bir at resmi ve \\"U\\" harfi olan, beyaz ve kırmızı renkli, tahta bir küp.<li>Bir Kurban <b>Rüya Kıskacı</b> veya <b> Rüya Paleti</b>\'yle etkileşime girdiğinde 60 saniyeliğine <b>Körlük durum etkisi</b> uygulanır.</li>","name":"Tek Boynuzlu At Küpü","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"Salıncak oturağını bağlamak için kullanılan paslı fakat sağlam zincir.<br>Kurbanlar <b>Rüya Dünyası</b>\'ndayken<li>ayak sesleri <b>%50 daha yüksek duyulur</b>.</li>","name":"Salıncak Zinciri","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"Nancy Holbrook\'un Badham\'da yaptığı ve değerli bir hatıra olarak sakladığı karakter çizimi.<li><b>Rüya Dünyası</b>\'ndaki her bir Kurban için <b>Rüya İzdüşümü</b>\'nün güç yenileme hızını <b>orta seviyede arttırır</b>.</li>","name":"Nancy\'nin Başyapıtı","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"Senelerce kullanılmaktan kirlenmiş uzun ikili atlama ipi.<br>Kurbanlar <b>Rüya Dünyası</b>\'ndayken<li>sızlanma naraları <b>%50 daha yüksek duyulur</b>.</li>","name":"Atlama İpi","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"Küçük bir kızın, dantelli açık mavi elbisesi. Ön tarafı derin kesikler yüzünden mahvolmuş.<br>Kurbanlar <b>Rüya Dünyası</b>\'ndayken:<li><i>İyileştirme</i> ve <i>tamirat</i> ilerlemesinin gerileme cezasını <b>biraz arttırır</b>.</li><li><i>İyileştirme</i> veya <i>tamirat</i> Beceri Denemesi başarısız olduğunda, bir Kurban\'ın haresi <i>Kâbus</i>\'a <b>4 saniyeliğine</b> görünür.</li>","name":"Mavi Elbise","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"Bir zamanlar Zoneral isimli bir ilaç içeren ve artık boş olan hap şişesi.<li>Kurbanlar, <i>Kâbus</i>\'u <b>12 metre</b> ila <b>24 metre</b> arasında kısıtlı bir mesafeden aralıklı olarak görebilirler.</li><li><i>Kâbus</i>, <b>24 metreden</b> uzaktaki Kurbanlara görünmez.</li><li><i>Kâbus</i>, bir Kurban\'ı taşırken uyanık Kurbanlara görünmez.</li>","name":"İlaç Şişesi","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"Epey uçucu ve yanıcı bir maddeyle dolu teneke kutu.<li><b>Rüya Kıskaçlarını Rüya Paletleriyle</b> değiştirir.</li><li>7 <b>Rüya Nişanı</b>.</li><li>Kurbanlar <b>Rüya Paletleriyle</b> etkileşime geçtiğinde, hareleri <i>Kâbus</i>\'a <b>6 saniyeliğine</b> görünür.</li>","name":"Tiner","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"Badham Anaokulu\'nda çekilmiş bu büyük fotoğrafta, 94-95 mezunlarının neşeli yüzleri görünüyor.<li><b>Rüya İzdüşümü</b> kullanım sırasında artık iptal edilemez.</li><li><b>Kâbus</b>, <b>Rüya İzdüşümü</b> yeteneğini kullanırken tüm jeneratörler kan püskürtür.</li><li><b>Rüya İzdüşümü</b> kullanımdayken <i>Kâbus</i>\'un kopyası görünmez.</li>","name":"Sınıf Fotoğrafı","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"Sadece üzerindeki \\"Z\\" harfi anlaşılabilen, derinden çizilmiş ve yanmış, tahta bir küp.<li>Bir Kurban <b>Rüya Kıskacı</b> veya <b>Rüya Paleti</b>\'yle etkileşime girdiğinde <b>60 saniyeliğine</b> <b>Kan Kaybı</b> durum etkisi uygulanır.</li><li>Eğer Kurban sağlıklıysa, <b>Kan Kaybı</b> durum etkisi süresi kadar kanamaya başlar.</li>","name":"\\"Z\\" Küpü","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"Kızıl renk boyayla kaplanmış büyük bir boya fırçası.<li>Tüm Kurbanlar mücadeleye <b>Rüya Dünyası</b>\'nda başlar.</li><li>Başarısız Beceri Denemeleri, <b>Rüya Dünyası</b>\'ndayken Kurbanları uyandırmaz.</li>","name":"Kırmızı Boya Fırçası","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"Fotoğraflarla dolu, siyah renkli bir karton kutu.<br>Kurbanlar <b>Rüya Dünyası</b>\'ndayken<li>yakın zamanda açılan çıkış kapıları <b>15 saniye</b> boyunca kullanılamaz.</li>","name":"Kara Kutu","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"Jigsaw Kutusu\'nun farklı bir hali: Kaygan kısımlar, araştırma eylemini daha da hassas kılıyor.<br><li>Jigsaw Kutusu\'yla etkileşime geçtiğinde, Beceri Denemesi çıkma ihtimali <b>biraz artar</b>.</li>","name":"Atölye Yağı","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"Sıkıntılı bir yaşam biçimini temsil ediyor. Geçmişteki halini düşünmek, azmini körüklüyor.<br><li>Pusu Saldırısı ıskalandığında oluşan bekleme süresini <b>biraz düşürür</b>.</li>","name":"Parçalanmış Şırınga","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"Kanserli bir adamın hasta dosyası. Okuyana ürperme ve dikkatsizlik veriyor.<br><li>Pusu Saldırısı Hazırlanma Süresi\'ni <b>biraz düşürür</b>.</li>","name":"John\'un Hasta Dosyası","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"Daha çevik hareket etmek için kumaşı tutan deri kayışlar.<br><li>Eğilmek için gereken süreyi <b>biraz azaltır</b>.</li>","name":"Çarpışma Kayışları","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"Jigsaw\'un, Amanda\'ya oyunun kurallarını anlattığı görüntü kaydı. Geçmişteki halini düşünmek, azmini körüklüyor.<br><li>Pusu Saldırısı\'nın başlama süresini <b>biraz düşürür</b>.</li><li>Pusu Saldırısı ıskalandığında oluşan bekleme süresini <b>biraz düşürür</b>.</li>","name":"Video Kaydı","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"Ters Ayı Kapanı\'nın farklı bir hali: Kapanın iç kısmına eklenmiş keskin bıçaklar, her geçen dakika kurbanı parçalar.<br><li>Ters Ayı Kapanı\'na yakalanan Kurbanlar, <b><i>Kan Kaybı</i></b> durum etkisi altına girer.</li>","name":"Maket Bıçağı","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"Jigsaw Kutusu\'nun farklı bir hali: Jilet keskinliğindeki tellerin eklenmesiyle, arama ekstra zor ve büyük ihtimalle acı verici bir hal alır.<br><li>Jigsaw Kutusu\'yla etkileşime geçtiğinde, Beceri Denemesi çıkma ihtimali <b>orta seviyede</b> artar.</li>","name":"Jiletli Tel","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"İçi saten kaplı bu kilitli ahşap kutu, vasiyetin bir parçası.<br><li>Mevcut Ters Ayı Kapanı\'nın sayısını <b>1</b> <b>arttırır</b>.<br>","name":"Vasiyet","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"Ters Ayı Kapanı\'nın farklı bir hali: kumaştan kalın yüz maskesi. Üzerine sakinleştirici dökülmüş bu maske, hedefi kısmen boğarak konsantrasyonu zorlaştırıyor.<br><li>Ters Ayı Kapanı\'na yakalanan Kurbanlar, <i><b>Körlük</b></i> durum etkisi altına girer.</li><li>Jigsaw Kutusu parıltısını etkilemez.</li>","name":"Yüz Maskesi","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"Ters Ayı Kapanı\'nın farklı bir hali: Ölümcül olmayan fakat vücudu, herhangi bir hareketin yorgunluğunu neredeyse atamayacak kadar güçsüz düşüren bir zehir.<br><li>Ters Ayı Kapanı\'yla yaralanan Kurbanlar, <i><b>Bitkin</b></i> durum etkisi altına girer.</li>","name":"Yavaş Salınımlı Toksin","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"Ters Ayı Kapanı\'nın farklı bir hali: Yer yer sertleşmiş pas lekeleriyle kaplı ağız vidaları, yaralanmaların iyileşmesini özellikle zorlaştırır.<br><li>Ters Ayı Kapanı\'yla yaralanan Kurbanlar, <i><b>Ağır Yaralı</b></i> durum etkisi altına girer.</li>","name":"Paslı Eklentiler","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"Bir kâğıt parçası üzerine detaylıca çizilmiş, son derece rahatsız edici fakat bir o kadar da dâhiyane bir kapan tasarımı.<br><li>Mevcut Jigsaw Kutularının sayısını <b>1</b> <b>arttırır</b>.</li>","name":"Jigsaw\'un Çizimi","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"Jigsaw Kutusu\'nun farklı bir hali: Jigsaw Kutusu\'na eklenen iç içe geçmiş jiletler, hareket ettiğin anda bileklerinin kesilmesine neden oluyor.<br><li>Jigsaw Kutularındaki Başarısız Beceri Denemelerinin cezasını <b>olağanüstü düzeyde arttırır</b>.</li>","name":"İç İçe Geçmiş Jiletler","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"Zorlu Jigsaw Kutularının yaratılmasını ve Ters Ayı Kapanlarının daha kolay kurulmasını sağlayan birkaç mekanik parça.<br><li>Kurban\'ın, Jigsaw Kutusu\'nu arama süresini <b>biraz arttırır</b>.</li><li>Ters Ayı Kapanı\'nı koyma süresini <b>biraz azaltır</b>.</li>","name":"Donanım Çantası","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"Ayarları kurcalanmış bir kronometre. Mekanizmadaki bir yay, çarklarının daha hızlı dönmesine sebep oluyor.<br><li>Ters Ayı Kapanı ölüm sayacını <b>orta seviyede azaltır</b>.</li>","name":"Ayarıyla Oynanmış Kronometre","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"Jigsaw tarafından kâğıda dökülmüş ve açıklanmış, son derece rahatsız edici fakat bir o kadar da dâhiyane bir kapan tasarımı.<br><li>Mevcut Jigsaw Kutularının sayısını, <b>1</b> <b>arttırır</b>.</li><li>Ters Ayı Kapanı\'nın ölüm sayacını <b>orta seviyede arttırır</b>.</li>","name":"Jigsaw\'un Açıklamalı Planı","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"Mekanik parçalardan oluşan bu koleksiyon, ekstra zorlu Jigsaw Kutularının yaratılmasını ve Ters Ayı Kapanlarının daha kolay kurulmasını sağlar.<br><li>Kurban\'ın, Jigsaw Kutusu\'nu arama süresini <b>önemli ölçüde arttırır</b>.</li><li>Ters Ayı Kapanı\'nı koyma süresini <b>orta seviyede düşürür</b>.</li>","name":"Donanım Sandığı","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"İçinde bandaj ve kompres gibi tıbbi malzemelerin yanı sıra bir de bıçak bulunan siyah metal bir kutu. Derin kesikler stresi azaltır ve hisleri canlandırır.<br><li>Domuz\'un, Jigsaw Kutularının haresini görmesini <b>engeller</b>.</li><li>Bir Kurban, bir Ters Ayı Kapanı\'nı kaldırırsa <b>bildirim gelir</b>.</li><li>Ters Ayı Kapanı\'nı kaldıran Kurbanların hareleri <b>6 saniye</b> boyunca görünür olur.</li>","name":"Amanda\'nın Sırrı","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"Her oyunun kuralı aynıdır diye bir şey yok.<br><li>Kurbanların, işaretlenen Jigsaw Kutularını görme yeteneklerini, Kapanları etkinleştirilene kadar <b>engeller</b>.</li>","name":"2 Numaralı Kural Dizisi","flavor":"\\"Dinle bakalım kuralları.\\" -Jigsaw","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"Amanda\'ya bırakılmış bir şantaj mektubu. Okuyana öfke ve dikkat veriyor.<br><li>Eğilmiş haldeyken, 12 metre dahilindeki Kurbanların siluetlerini gösterir.</li><li>Mevcut Ters Ayı Kapanlarını <b>3</b>\'e kadar <b>azaltır</b>.</li><li>Mevcut Jigsaw Kutularını <b>2</b>\'ye kadar <b>azaltır</b>.</li>","name":"Amanda\'nın Mektubu","flavor":"\\"Amanda, Jill\'in Gideon\'u kaybettiği gece Cecil\'leydin. Çocuklarını sen öldürdün. Bunu sen de biliyorsun, ben de biliyorum.\\" -Amanda\'nın Mektubu","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"Yorgun ayakları rahatlatan küflü iç taban.<br><li>Şişeleri yeniden doldururken hareket hızını <b>orta seviyede</b> arttırır.</li>","name":"Kokulu İç Taban","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"Yumuşacık, sıcak turuncu renkte bir tüy.<br><li>Şişe atışları arasındaki bekleme süresini <b>biraz</b> azaltır.</li>","name":"Kızılgerdan Tüyü","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"Standart Palyaço kostümünün bir parçası. Kesik parmaklar, ustaca hile yapmasına olanak sağlar.\\n<li>Şişe fırlatma açısını değiştirir.</li>\\n","name":"Parmaksız Gösteri Eldiveni","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"Anestetik amaçlarla kullanılan organik bir bileşen.<br><li>Zehirlenme Etkisi\'nin süresini <b>biraz</b> arttırır.</li>","name":"Parti Şişesi","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"Eşek Şakası Toniği şişelerine tam uyan sağlam bir mantar.<br><li>Yeniden Yükleme Süresi\'ni <b>orta seviyede</b> azaltır.</li>","name":"Kalın Mantar Tapa","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"Kurumuş şeker ve kanla yapış yapış olmuş boş bir şişe.<br><li><b>Fazladan 1</b> şişeyle başla.</li><li>Taşınabilir azami şişe sayısını <b>1</b> arttırır.</li>","name":"Yapış Yapış Gazoz Şişesi","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"Zümrüt rengi parıltıları olan, siyah renkte yumuşacık bir tüy.<br><li>Şişe atışları arasındaki bekleme süresini <b>orta seviyede</b> azaltır.</li>","name":"Sığırcık Tüyü","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"Eşek Şakası Panzehiri\'nin emilimini arttıran ama solunum yollarını tahriş eden uçucu bir kimyasal bileşen.<br><li>Dinçlik etkisi süresini <b>orta seviyede</b> arttırır.</li>","name":"Bir Sürahi Çözücü","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"Solunduğunda zihni uyuşturan ince ve şeffaf, yanıcı bir sıvı.<br><li>Zehirlenmiş hedef, <b>30 saniye</b> boyunca <b>Körlük</b> durum etkisi altına girer.</li>","name":"Parafin Bidonu","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"Tam bir klasik. Artık hiçbir şey aynı görünmeyecek.<br><li>Eşek Şakası Toniği\'nin gaz bulutlarını sarı renge büründürür.</li><li>Eşek Şakası Panzehiri\'nin gaz bulutlarını da mor yapar.</li>","name":"VHS Porno","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"Aşındırıcı etkisi yüksek, kokusuz ve şurup benzeri bir sıvı.<br><li>Zehirlenmiş hedef, <b>Ağır Yaralı</b> durum etkisine girer.</li>","name":"Sülfürik Asit Tüpü","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"Tahriş, yanma ve ciğerlerde hasar yaratan tesirli bir kimyasal.<br>Zehirlenmiş hedef, fazladan <b>Topal</b> cezasını <b>orta seviyede</b> yaşar.","name":"Ağartıcı Şişesi","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"Eşek Şakası Panzehir Gazı alanını <b>orta seviyede</b> genişletir.","name":"Nışadırruhu","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"Güçlü anestetik özellikleri olan, hoş kokulu organik bir bileşen.<br><li>Eşek Şakası Toniği\'nin gaz alanını <b>orta seviyede</b> genişletir.</li>","name":"Kloroform Şişesi","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"Birazı yüze sürülür, birazı da Panzehir\'e katılır. Bu bilinmeyen bileşen, Panzehir\'in etkisini güçlendirir.<br><li>Dinçlik Etkisi\'nin süresini <b>önemli ölçüde</b> arttırır.</li>","name":"Gösterişli Makyaj Seti","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"Keyifli ve ucuza kapatılmış bir zamandan, korkunç bir baş ağrısı haricinde geriye kalan tek şey.<br><li><b>Fazladan 2</b> şişeyle başla.</li><li>Taşınabilir azami şişe sayısını <b>2</b> arttırır. </li>","name":"Ucuz Cin Şişesi","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"Bu yoğunluk derecesindeyken zehirli olan, son derece uçucu bir organik bileşen.<br><li>Zehirlenme Etkisi\'nin süresini <b>önemli ölçüde</b> arttırır.</li>","name":"Eter 15 vol%","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"Korkunç görünen, eksik bir dizi parmak. Palyaço\'yu özlemle doldurur ve kimyasal üretim yeteneklerini odaklar.<br><li>Bir Kurban veya Katil Dinçlik etkisine girdiğinde, 16 metre yakınındaki bütün oyuncuların harelerini görür.</li>","name":"Sigara Kutusu","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"Dövmeli, iri bir adamın pek kıymetli orta parmağı. Hafif makine yağı tadı var.<br><li>Zehirlenmiş veya Dinçleşmiş Kurbanların hareleri, <b>6 saniye</b> boyunca görünür hale gelir.</li>","name":"Dövmelinin Orta Parmağı","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"Bir kızıl saçlının pek kıymetli serçe parmağı. Karışık, vernikli gibi bir tadı var.<br><li>Doğrudan Eşek Şakası Toniği şişesiyle vurulan Kurbanlar, <b>Zayıf</b> durum etkisi altına girer.</li>","name":"Kızılın Serçe Parmağı","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"Rahatlıkla giyilip çıkartılabilir bir çift düz sandalet.<li>Yamaoka\'nın Laneti\'nin hareket hızını biraz arttırır.</li><li>Etkisi birikir.</li>","name":"Zōri","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"İnsanı mutlu ve coşkulu hale getiren bir tılsım.<li>Yamaoka\'nın Laneti\'nin süresini biraz arttırır.</li><li>Etkisi birikir.</li>","name":"Mutluluk Tılsımı","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"Dileğinin gerçekleşmesi için gereken bin turna kuşundan biri.<li>Yamaoka\'nın Laneti\'nin güç yenileme hızını biraz arttırır.</li><li>Etkisi birikir.</li>","name":"Origami Turna","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"Birbirine dolaşmış saçları nazikçe açmak için kullanılabilecek sık dişli bambu tarak.<li>Yamaoka\'nın Laneti\'nin etkinleştirme hızını biraz arttırır.</li><li>Etkisi birikir.</li>","name":"İşe Yarar Bambu Tarak","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"Kendinden geçmiş saçları yoluna sokmak için kullanılan ipekten bir kurdele.<li>Yamaoka\'nın Laneti\'nin etkinleştirme hızını orta seviyede arttırır.</li><li>Etkisi birikir.</li>","name":"Beyaz Saç Kurdelesi","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"Camı çatlamış bir kol saati. Kayışına \\"Rin\\" adı çiziktirilmiş.<li>Yamaoka\'nın Laneti\'nin güç yenileme hızını orta seviyede arttırır.</li><li>Etkisi birikir.</li>","name":"Rin\'in Kırık Saati","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"Üzerinde bir lise arması olan, çamurlanmış kasket. Üzerine dikişle \\"Rin\\" yazılmış.<li>Yamaoka\'nın Laneti\'nin hareket hızını orta seviyede arttırır.</li><li>Etkisi birikir.</li>","name":"Çamurlanmış Kasket","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"Şansı kendi tarafına çekmek için kullanılan bir tılsım.<li>Yamaoka\'nın Laneti\'nin süresini orta seviyede arttırır.</li><li>Etkisi birikir.</li>","name":"Talih Tılsımı","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"Koyu mavi-yeşil yaprakları olan bonsai ağacı. Bir zamanlar Yamaoka ailesinin geleneklerini temsil ediyormuş.<li>Pasif duraksama sıklığını biraz arttırır.</li><li>Etkisi birikir.</li>","name":"Ardıç Bonsai","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"Rahatsız edici bir sesi olan, paslı yan flüt.<li>Yamaoka\'nın Laneti\'nin güç yenileme hızını önemli ölçüde arttırır.</li><li>Etkisi birikir.</li>","name":"Paslı Flüt","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"Başarı Tılsımı","name":"Başarı Tılsımı","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"Aile yadigârı bir bıçağın el kundağı. Yamaoka ailesi için yapılmış.<li>Yamaoka\'nın Laneti\'nin yeniden ortaya çıkış süresini biraz arttırır.</li><li>Yamaoka\'nın Laneti\'nin yeniden ortaya çıkış hareket hızını biraz arttırır.</li><li>Etkisi birikir.</li>","name":"Katana Tsuba","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"Kullanışlı bir çift ev ayakkabısı.<li>Yamaoka\'nın Laneti\'nin hareket hızını önemli ölçüde arttırır.</li><li>Etkisi birikir.</li>","name":"Kirli Uwabaki Ayakkabıları","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"Üzeri kuru kanla kaplanmış bir saç tokası.<li>Yamaoka\'nın Laneti\'nin etkinleştirme hızını önemli ölçüde arttırır.</li><li>Etkisi birikir.</li>","name":"Kanlı Saç Tokası","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"Çabalarının, şüphe çekici durumlardan etkilenmesini önleyen güçlü bir tılsım.<li>Yamaoka\'nın Laneti\'nin süresini <b>olağanüstü düzeyde arttırır</b>.</li><li>Yamaoka\'nın Laneti\'nin hareket hızını <b>biraz azaltır</b>.</li>","name":"Kötülüklerden Korunma Tılsımı","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"Aile yadigârı bir bıçağın kını. Bir zamanlar Yamaoka ailesi için yapılmış.<li>Yamaoka\'nın Laneti\'nin yeniden ortaya çıkış süresini orta seviyede arttırır.</li><li>Yamaoka\'nın Laneti\'nin yeniden ortaya çıkış hareket hızını orta seviyede arttırır.</li>","name":"Wakizashi Saya","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"Üzerinde kutsal bir mantra yazan güçlü bir bileklik.<li>Dehşet alanı dışındaki tüm Kurbanlar duraksamanın ses dağılımını duyabilir.</li>","name":"Tespih Bileklik","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"Parça parça dökülen, kurumuş bir kiraz çiçeği. Bir zamanlar faniliği temsil ediyormuş.<li>Pasif duraksama süresini biraz arttırır.</li><li>Pasif duraksama sıklığını biraz arttırır.</li>","name":"Kurumuş Kiraz Çiçeği","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"Üzerinde \\"kıymetli kızıma\\" yazan gümüş bir yüzük.<li>Yamaoka\'nın Laneti\'nin hareket hızını olağanüstü düzeyde arttırır.</li><li>Yamaoka\'nın Laneti\'ni kullanılırken çizikler artık görünmez.</li>","name":"Anne-Kız Yüzüğü","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"Fazla çalışmış maaşlı bir beyaz yakalıya ait baba gözlüğü.<li>Yamaoka\'nın Laneti\'ni kullanılırken Kurbanların kan izleri görünür olur.</li>","name":"Baba Gözlüğü","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"Bir zamanlar samimi görünen, parlak sarı renkli, alaycı bir ifade olarak kullanılan bir rozet.<li>Katil İçgüdüsü\'yle işaretlenmiş bir Kurban\'a Yabani Cinnet halindeyken vurmak, 60 saniyeliğine Körlük durum etkisine yol açar.</li>","name":"Gülen Surat Rozeti","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"Bıçaklardan çizik çizik olmuş tahta bir cetvel.<li>Güç göstergesinin yeniden dolması için gereken zamanı <b>biraz azaltır</b>.</li>","name":"Çizik Cetvel","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"Yapılacak yaramazlıkların bir listesi. Güzel günlerden hatıra.<li>Yabani Cinnet\'in süresini <b>biraz arttırır</b>.</li>","name":"Yaramazlık Listesi","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"Kırmızı örgülü gri bir ip bilezik. Siyah mürekkeple kabaca yazılmış \\"F J S J\\" harfleri görülmekte.<li>Katil İçgüdüsü\'nün tespit menzilini <b>biraz arttırır</b>.</li>","name":"Dostluk Bilekliği","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"Yüksek kafeinli tabletler sınavlarda veya yorucu aktiviteler sırasında zinde olmanı sağlar.<li>Katil İçgüdüsü\'nün tespit menzilini <b>orta seviyede arttırır</b>.</li>","name":"Asla Uyuma İlaçları","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"Çete\'nin sembolünün defterden koparılmış bir sayfa üzerindeki kabataslak çizimi.<li>Yabani Cinnet\'in süresini <b>orta seviyede arttırır</b>.</li>","name":"Duvar Resmi Eskizi","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"Acı şarkılar ve kasvetli melodilerle dolu depresif bir karışık kaset.<li>Yabani Cinnet\'ten sonraki yorgunluğu <b>biraz azaltır</b>.</li>","name":"Julie\'nin Karışık Kaseti","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"Düşmanların isimlerinin üzerine kazındığı tahta bir cetvel.<li>Güç göstergesinin yeniden dolması için gereken zamanı <b>orta seviyede azaltır</b>.</li>","name":"Aşınmış Cetvel","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"Bir zamanlar samimi görünen, parlak sarı renkli, görüntüsü bozulmuş bir gülen surat rozeti. Çete\'nin özel simgesi.<li>Katil İçgüdüsü\'yle işaretlenmiş bir Kurban\'a <i>Yabani Cinnet</i> halindeyken vurmak, <b><i>Ağır Yaralı</i></b> durum etkisine yol açar.</li>","name":"Üstü Çizilmiş Gülen Surat Rozeti","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"Çete\'nin simgesini taşıyan el yapımı bir düğme. Sadece tehdit meydan okumalarında kullanılır.<li>Katil İçgüdüsü\'yle işaretlenmiş bir Kurban\'a Yabani Cinnet halindeyken vurmak, 60 saniyeliğine Sakat durum etkisine yol açar.</li>","name":"Çete Rozeti","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"Yüksek tempolu ve enerjik şarkılardan oluşan, hızlı ve heyecan verici bir karışık kaset.<li>Katil İçgüdüsü\'nün tespit menzilini <b>olağanüstü düzeyde arttırır</b>.</li>","name":"Susie\'nin Karışık Kaseti","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"Biraz tuhaf olmakla beraber yaratıcı ve farklı çağrışımlar uyandıran çizimler içeren bir çizim defteri.<li>Yabani Cinnet\'in süresini <b>önemli ölçüde arttırır</b>.</li>","name":"Çalıntı Eskiz Defteri","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"Bıçak, yaralara müdahale etmeyi özellikle zorlaştıran mikroplu kirlerle kaplı.<li>Kurban\'ın Müdahale Et eylemini tamamlaması için gerekli olan süreyi <b>biraz arttırır</b>.</li>","name":"İğrenç Bıçak","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"Hayat zor olduğunda rahatlamak için dinleyebileceğin hareketli şarkılar içeren bir kaset.<li>Yabani Cinnet\'ten sonraki yorgunluğu <b>orta seviyede azaltır</b>.</li>","name":"Joey\'nin Karışık Kaseti","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"Ormond halk kütüphanesinden çalınmış bir tıp makalesi. Lezyonlar ve bıçak yaraları üzerine basitleştirilmiş bir çalışma.<li>Tüm Kurbanların Derin Yara sayacını <b>orta seviyede düşürür</b>.</li>","name":"Bıçak Darbeleri İncelemesi","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"Yanında müzik olmadan ölüm görevine çıkma. Kulak zarını patlatacak yükseklikte kirli sesler ve gürültülü perküsyon ezgilerinden oluşan bir şarkı listesi.<li>Yabani Cinnet sırasında saldırılan Kurban\'ın Derin Yara sayacına uygulanan hasar miktarını <b>önemli ölçüde azaltır</b>.</li>","name":"Frank\'in Karışık Kaseti","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"Bu bıçak, yaralara müdahale etmeyi özellikle zorlaştıran kan lekeleriyle ve kirlerle kaplı.<li>Kurbanların Müdahale Et eylemini tamamlaması için gerekli olan süreyi <b>orta seviyede arttırır</b>.</li>","name":"Kirli Bıçak","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"Müstahdemin nihai istirahat yerinden toplanmış bir avuç toprak. Anormal derecede soğuk.<li>Yabani Cinnet\'ten sonraki yorgunluğu <b>önemli ölçüde azaltır</b>.</li>","name":"Soğuk Toprak","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"Sis\'ten yapılmış, Çete\'nin görünümünü yansıtan, cam benzeri bir şeyden yapılmış bir düğme. Yüzeyi Mahluk\'un gücüyle ısınıyor gibi.<br><br>Yabani Cinnet esnasında:<br><li>Dehşet Alanı\'n <b>tüm haritayı</b>kaplar.</li><li>Üzerinden atladığın tüm paletler <b>anında kırılır.</b></li><br>Bu etki, güç göstergesi bitene dek sürer.<br>","name":"Parıltılı Düğme","flavor":"\\"Bu parıltılı camın tükettiği gençlik, şimdi Mahluk\'un gücünü arttırıyor, her yere ulaşabilmesini sağlıyor.\\"","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"Başka bir dünyadan gelen karanlık ritimler, şiddetli sololar ve akıl sır ermez vokalleriyle zihni titreyen bir altıncı hisle doldurur.<li>Yabani Cinnet kullanılırken, <b>jeneratörlerin tamir ilerlemesi</b>, <b>harelerinin yoğunluğundan</b> anlaşılabilir.</li>","name":"Tüten Karışık Kaset","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"Aslen hastalıklardan ve genel kırgınlık hissinden arındırmak için kullanılan, üzerinde yozlaşmış bir sihir taşıyan parçalanmış taş.<li>Arınma Havuzu etkinleştirme süresini <b>biraz azaltır</b>.</li><li>Yoz Arınma\'yı tutarken hareket hızını <b>biraz arttırır</b>.</li>","name":"Dua Tableti Parçası","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"Akgünlük ağaçlarından toplanmış değerli bir reçine. Tatlı, limonumsu kokusundan dolayı ayinlerde kullanılır.<li>Habis Arınma başlarken hareket hızını <b>biraz arttırır</b>.</li>","name":"Buhur","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"Kanatlı ilahların olduğu bir ayin sahnesini gösteren, delikli taştan yapılmış silindir biçiminde bir mühür.<li>Nesnelere bulaşma süresini <b>biraz arttırır</b>.</li>","name":"Kireçtaşından Mühür","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"Üç gün boyunca balık salamurasında ve şarapta bekletilmiş, ezilmiş köklerden yapılmış son derece acı bir macun. İki kişilik. Deri döküntülerinde kullanılır.<li>Habis Arınma bekleme süresini <b>biraz azaltır</b>.</li>","name":"Şifa Merhemi","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"Üzerinde, hastalıktan koruyan kanatlı bir ilahın kötü çizilmiş bir resmi olan sabuntaşı tılsımı. Taşıyana bağlılık verir.<li>Yoz Arınma süresini <b>biraz arttırır</b>.</li>","name":"Hastalıktan Koruyan Tılsım","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"Havaya keskin bir bitki ve alkol kokusu yayan, köpüklü ve bulanık bir sıvı. Doğrudan su toplayan yerlerin üzerine uygulanır.\\n<li>Habis Arınma bekleme süresini <b>orta seviyede azaltır</b>.</li>","name":"Güçlü Alkol Karışımı","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"Üzerinde tuhaf makinelerin yanında duran kuş başlı varlıkların olduğu, metalik sert taştan yapılmış, silindir biçimli mühür. Kutsal külleri koymak için kullanılır.<li>Nesnelere bulaşma süresini <b>orta seviyede arttırır</b>.</li>","name":"Kantaşı Mührü","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"Tüketildiğinde kusma hissi veren hardal ve su bazlı bir şurup. Vücudu kötülükten arındırmak için kullanılır.<li>Habis Arınma verimliliğini <b>biraz arttırır</b>.</li>","name":"Kusturucu İksir","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"Arındırma ayini sırasında orucu açmak için kullanılan, son derece olgun bir meyve. Lezzetli.<li>Mücadeleye, fazladan <b>1</b> kirlenmiş Arınma Havuzu\'yla başla.</li>","name":"Kutsanmış Elma","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"Balgam söktürücü özelliği olan bir beher masaj yağı. Defne ve biberiyenin taze kokusunu taşır.<li>Habis Arınma başlama hızını <b>orta seviyede arttırır</b>.</li>","name":"Masaj Yağı","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"Neden yapıldığı belli olmayan iğrenç bir şurup. Yoğun kıvamlı sarı sıvı, kusma etkisi yaratmak için tüketilir. Vücudu kötülükten arındırmak için kullanılır.<li>Habis Arınma verimliliğini <b>orta seviyede arttırır</b>.</li>","name":"Hastalıklı Kusturucu İlaç","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"Tatlı ve topraksı bir koku yayan, sedir bitkisi katılmış koyu renkli mumlu bir macun. Hastalıklı deriye doğrudan uygulanır.<li>Habis Arınma başlarken hareket hızını <b>biraz arttırır</b>.</li><li>Habis Arınma bekleme süresini <b>orta seviyede azaltır</b>.</li>","name":"Kızgın Pomat","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"Şeytan çıkarma ayinleri sırasında mide bulantısını önleyen obsidyen tılsım. Üzerinde kargaşa ve veba tanrısına edilen bir dua var. Taşıyana şiddetli bir bağlılık verir.<li>Yoz Arınma süresini <b>orta seviyede arttırır</b>.</li>","name":"Şeytan Çıkarma Tılsımı","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"Soyulup kutsal küle bulanmış bir elma. Böyle bir meyveyi yemek, ölülerin kötü niyetli ve kıskanç ruhlarından korurdu.<li>Mücadeleye, fazladan <b>1</b> kirlenmiş Arınma Havuzu\'yla başla.</li><li>Nesnelere bulaşma süresini <b>biraz arttırır</b>.</li>","name":"Kül Rengi Elma","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"Aslen unutulmuş ilahlara ibadet etmek için kullanılan yozlaşmış büyü çizimleri ve yazıları barındıran, altınla süslenmiş bir taş tablet.<li>Arınma Havuzu etkinleştirme süresini <b>orta seviyede azaltır</b>.</li><li>Yoz Arınma\'yı tutarken hareket hızını <b>orta seviyede arttırır</b>.</li>","name":"Tapınma Tableti","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"Ne kullanılarak yapıldığı bilinmeyen, kötü kokulu ve yarı dondurulmuş iksir. Hızla kusma etkisi göstermesi için tüketilir. Vücudu kötülükten arındırmak için kullanılır.<li>Habis Arınma verimliliğini <b>önemli ölçüde arttırır</b>.</li>","name":"Habis Kusturucu İlaç","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"Adiris\'in kesilmiş ve çürümekte olan ayak başparmağı. Bir ipliğe sarılmış ve tılsım olarak boyuna takılıyor. Habis güç yayıyor.<li>Kurbanların, etkileşimlerinden hastalık kapma oranını <b>önemli ölçüde arttırır</b>.</li>","name":"Kesik Başparmak","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"Babil\'in kargaşa ve veba tanrısının resmini taşıyan kantaşı tılsım. Taşıyana sınırsız bağlılık verir.<li>Yoz Arınma süresini <b>önemli ölçüde</b> arttırır.</li>","name":"Dindarın Tılsımı","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"Üzerinde Veba\'nın resmini taşıyan ve Sis\'ten yapılmış, silindir biçiminde yarı saydam bir mühür. Mahluk\'un gücüyle titreyen mührün yüzeyi pürüzsüz.<li>Yoz Arınma\'yı tutarken hareket hızını <b>orta seviyede azaltır</b>.</li><li>Yoz Arınma süresini <b>olağanüstü düzeyde azaltır</b>.</li><li>Her bir jeneratör tamamlandığında Habis Arınma, Yoz Arınma\'ya dönüşür.</li>","name":"Parıltılı Mühür","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Keskin iskelet tıraşlarından yapılmış koyu renkli bir macun. Yaydığı kötü kokuyu solumak, zihin gözünü keskinleştirir.<li>Kurbanların hareleri, kustuklarında <b>5 saniyeliğine</b> görünür olur.</li>","name":"Siyah Tütsü","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"Olsen\'ın Philadelphia\'da eskiden çalıştığı yerdeki ilk kurbanından çalınmış bir fotoğraf makinesi. İçindeki film kurbanın şehirdeki son gecesine ait fotoğrafları barındırıyor.<br><li>Kurban\'ın işaretlenme oranını <b>biraz arttırır</b>.</li>","name":"\\"Philly\\"","flavor":"\\"Philly\'de ne anılarım vardı be! Hiçbirini unutmak istemiyorum.\\" -Hayalet Surat","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"Kuzey Roseville\'deki Walleyes isimli küçük bir bardan alınmış kibrit kutusu. Bir kurbanın telefon numarası üzerine mavi bir kalemle yazılmış. Bulunan suç ispatlayıcı kanıtlardan biri.<br><li><i>Gece Perdesi</i>\'nin güç yenileme oranını <b>biraz arttırır</b>.</li>","name":"Walleyes Kibrit Kutusu","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"Utah\'tan Pennsylvania\'ya uzanan çözülmemiş cinayetleri konu alan, gazetelerden kesilmiş makaleler. Hayalet Surat manşetlerin sadece bazılarını yazdıysa da cinayetlerin tümünü o işledi.<br>Başarılarını taçlandırmak, kendinle gurur duymanı sağlıyor ve kendine olan güvenini arttırıyor.<br><li>Takip ederken sahip olduğun hareket hızını <b>biraz arttırır</b>.</li>","name":"Kesilmiş Manşetler","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"Buram buram ispirto kokan ucuz bir parfüm. Varlığının belli olması için Hayalet Surat tarafından kullanılıyor. Ansızın dışarı çıkması gerektiği durumlar için saklanıyor.<br><li>Kurban\'ın işaretli kalma süresini <b>biraz arttırır</b>.</li>","name":"Ucuz Parfüm","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"Uzaktan fotoğraf çekerken fark edilmeni engelleyen manuel odaklı lens.<br><li>Kurban\'ın işaretlenme oranını <b>biraz arttırır</b>.</li><li>Kurban\'ın işaretli kalma süresini <b>biraz azaltır</b>.</li>","name":"Telefotografik Lens","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"Lekeli, elle yazılmış yazılar bulunan spiralli bir defter. Günlük, kurbanları takip etmek için kullanılan farklı ekipmanları ayrıntılı bir şekilde içeriyor. Geçmişte kullandığın yöntemleri görmek heyecan verici anılarını tetikliyor.<br><li>Takip ederken sahip olduğun hareket hızını <b>orta seviyede arttırır</b>.</li>","name":"Olsen\'ın Günlüğü","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"Mavi bir kalemle yazılmış, özensiz ve karışık yazılar. Roseville kurbanlarının hepsi, telefon numaraları ve adresleriyle birlikte burada yazıyor.<br><li><i>Gece Perdesi</i>\'nin güç yenileme oranını <b>orta seviyede arttırır</b>.</li>","name":"Olsen\'ın Adres Defteri","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"Florida\'nın Kuzey Roseville kentinin işaretlenmiş haritası. Her bir X işareti Hayalet Surat\'ın kurbanını temsil ediyor. Hedeflerini işaretlemek sokaklarda fark edilmeden dolaşabilmeni sağlıyor.<br><li>Katil ortaya çıktığında Katil İçgüdüsü\'nün görünür olma süresini <b>biraz arttırır</b>.</li>","name":"İşaretlenmiş Harita","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"Sinsice dolaşırken her şeyin yerli yerinde durmasını sağlayan siyah kayışlar.<br><li>Eğildiğinde sahip olduğun hareket hızını <b>biraz arttırır</b>.</li>","name":"Kavrama Kayışı ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"Olsen\'ın cüzdanında otuz dolar, bir film kiralama dükkânının üyelik kartı ve Olsen\'ın Roseville\'deki ilk kurbanının katlanmış bir fotoğrafı var. Suçunu ispatlayan kanıtlar taşımak seni heyecanlandırıyor ve kararlılığını arttırıyor.<br><li>Takip ederken sahip olduğun hareket hızını <b>önemli ölçüde arttırır</b>.</li>","name":"Olsen\'ın Cüzdanı","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"Bıçağını taşımak için esnek ve ses çıkarmayan bir kılıf. Taşıdıkların üzerine bağlıyken hareket etmek çok daha kolay.<br><li>Eğilirken sahip olduğun hareket hızını <b>orta seviyede arttırır</b>.</li>","name":"Deri Bıçak Kılıfı","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"Hayalet Surat\'ın varlığını belli etmek için kullandığı, misk kokulu, ağır bir parfüm. Hakkında makale yazmayı planladığı kurbanları için saklanıyor.<br><li>Kurban\'ın işaretli kalma süresini <b>orta seviyede arttırır</b>.</li>","name":"Kalıcı Parfüm","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"Bıçağını gizlice taşımak için mükemmel bir kemer askısı. Bu gece ne yapmayı planladığını kimse bilmiyor.<br><li>Kurban\'ın işaretli olma oranını <b>orta seviyede arttırır</b>.</li>","name":"Bıçak İçin Kemer Askısı","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"Danny\'nin DNA\'sının izlerini taşıyan, kapağı çiğnenmiş, mavi bir kalem. Suçu ispatlayan kanıtlar hiçbir zaman bulunamadı.<br><li><i>Gece Perdesi</i>\'nin güç yenileme oranını <b>önemli ölçüde arttırır</b>.</li>","name":"Çiğnenmiş Kalem","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"Olsen\'ın Roseville\'deki ilk kurbanının haftalık rutinini anlatan yırtılmış bir sayfa. Kurbanlarının alışkanlıklarını not almak, onların hareketlerini öngörmeni sağlıyor. \\n<br><li>Bir Kurban\'ın fark etme göstergesini tetiklemek için Katil\'le arasında bulunması gereken asgari mesafeyi <b>olağanüstü seviyede azaltır</b>.</li><li>Etkisi birikmez.</li><br><span class=\\"FlavorText\\">\\"Seni bir süredir takip ediyorum. Bunun özel olmasını istiyorum. İnsanların asla unutamadığı haber başlıkları kadar özel olmasını...\\" -Hayalet Surat</span>","name":"Kurbanın Ayrıntılı Rutini","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"Etraf kapkaranlıkken bile net fotoğraflar çekebilmeni sağlayan gece görüşlü lens. Geceleri ansızın gizlice dışarı çıkmanın gerektiği durumlar için ideal.<br><li>Kurban\'ın işaretlenme oranını <b>önemli ölçüde arttırır</b>.</li>","name":"Gece Görüşlü Lens","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"Kılıf hareket alanını genişletiyor. Serbestçe hareket ederken seri ve ciddi yaralar açmak için birebir. Danny\'nin Philadelphia\'yı terk ettiği gece devriye gezen bir polisten çalındı.<br><li>Eğilirken sahip olduğun hareket hızını <b>önemli ölçüde arttırır</b>.</li><span class=\\"FlavorText\\">\\"Bir izci gibi hazır olmalıyım. Tabii o aptal rozetler olmadan. Benim kurbanlarımdan topladıklarım onlardan çok daha iyi.\\" -Hayalet Surat</span>","name":"Bacağa Takılan Bıçak Kılıfı","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"Olsen\'ın gerçekte kim olduğunu ortaya çıkaran bir ehliyet. Üzerinde Danny Johnson yazıyor.<br><li><i>Gece Perdesi</i> etkinken Katil\'i ortaya çıkarmak için gereken tespit menzilini <b>önemli ölçüde azaltır</b>.</li>","name":"Ehliyet","flavor":"\\"Herkes Hayalet Surat\'ın kim olduğunu öğrenmek istiyor. Ama asıl sormaları gereken soru sıradaki kişinin kim olduğu.\\" -Hayalet Surat","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"Olsen\'ın Roseville\'i dehşete düşüren bir makale yazmak için elde ettiği kamera kaydı.<br><li>Kurban saklandığı yerden eğilerek çıkarken işaretlenme oranını <b>olağanüstü düzeyde arttırır</b>.</li><li>Kurban saklandığı yerden eğilerek çıkmadığında işaretlenme oranını <b>önemli ölçüde azaltır</b>.</li>","name":"\\"Hayalet Surat Kameralara Yakalandı\\"","flavor":"\\"Görüntülerde karanlıklara bürünmüş birinin Florida\'nın Kuzey Roseville kentindeki bir eve gece geç saatlerde girdiğini görüyoruz. Sonraki günün sabahındaysa, bölgede bir cinayet işlendiği polise ihbar edildi. Kapılarınızı kilitleyin. Katil gecenin karanlığına karışmış bir hayalet misali aramızda serbestçe dolaşıyor.\\" -Roseville Gazetesi","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"Hayalet Surat\'ı Kuzey Roseville\'in Belleview Sokağı\'ndaki bir eve girerken yakalayan, küçük bir güvenlik kamerası. Kamera, polise elle tutulur bir kanıt sunmadan Hayalet Surat\'ı sadece ucundan yakalayacak şekilde mükemmel bir açıyla konumlandırılmış.<br><li>İşaretli bir Kurban can çekişiyor aşamasına getirildiğinde Dehşet Alanı\'nın dışındaki tüm Kurbanların hareleri 4 saniyeliğine görünür.</li>","name":"Dış Güvenlik Kamerası","flavor":"\\"Bir resim bin kelimeye bedel.\\" -Hayalet Surat","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"Hawkins\'in çürük topraklarından hastalık kapmış bir balkabağı.<li>Baş Aşağı Dünya\'da yolculuk yaparken girdiğin geçit yok edilir. Yolculuk için ilave 200 Kan Puanı kazanırsın.</li>","name":"Çürük Balkabağı","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"Demogorgon\'un tüketmesi için yumuşak bir sıçan kuyruğu.<li>Bir geçidin açılması için gerekli olan süreyi <b>biraz azaltır</b>.</li>","name":"Sıçan Kuyruğu","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"Tuzlu ve yumuşak karaciğerlerden oluşan ıslak bir yığın.<li><b>Hiçlik Yaratığı</b> güç toplarken Katil\'in hareket hızını <b>biraz arttırır</b>.</li>","name":"Sıçan Karaciğeri","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"Baş Aşağı Dünya\'daki dokunaçlı bir yaratığın göğsünden koparılmış, fermente edilmiş, siyah bir kalp.<li><b>Biçme</b>\'nin isabet ettikten sonraki yenilenme hızını <b>biraz arttırır</b>.</li>","name":"Kara Kalp","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"Boyutlararası tünelleri genişleten ıslak ve elastik ağlar.<li>Kurbanların bir geçidi kapatması için gerekli olan süreyi <b>biraz arttırır</b>.</li>","name":"Yapışkan Ağlar","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"Boyutlararası tünelleri boydan boya kaplayan pis kokulu, yapış yapış bir tabaka.<li>Kurbanların <b>Hiçlik Yaratığı</b> tarafından tespit edilebileceği menzili <b>orta seviyede arttırır</b>.</li>","name":"Yapışkan Kaplama","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"Demogorgon\'a güç veren çürük bir işkembe.<li>Baş Aşağı Dünya\'da yolculuk yaparken Katil\'in hızını <b>biraz arttırır</b>.</li>","name":"Çürük Yeşil İşkembe","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"Talihsiz bir kurbanın lezzetli bağırsakları.<li>Mevcut geçitlerin toplam sayısını <b>1</b> <b>arttırır</b>.</li><li><b>Biçme</b>\'nin ıskaladığı durumlarda yenilenme hızını <b>biraz artırır</b>.</li>","name":"Mews\'un Bağırsakları","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"Baş Aşağı Dünya\'ya gitmiş, kırık bir gözlük.<li>Palet kırdıktan sonra <i>Biçme</i>\'nin yenilenme hızını<b>biraz arttırır</b>.</li>","name":"Barb\'ın Gözlüğü","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"Baş Aşağı Dünya\'da yetişen ve Demogorgon\'un avının hislerini telepatiyle bozmasını sağlayan, kara bir mantar.<li>Bir geçitten çıkarken Katil\'e uygulanan <b>Tespit Edilemez durum etkisinin</b> süresini <b>biraz arttırır</b>.</li>","name":"Mor Mantar","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"Boyutlararası tünellerde boydan boya uzanan ve onları sağlamlaştıran kalın ve dikenli sarmaşıklar.<li>Kurbanların bir geçidi kapatması için gerekli olan süreyi <b>biraz arttırır</b>.</li><li>Kurbanların <b>Hiçlik Yaratığı</b> tarafından tespit edilebileceği menzili <b>biraz arttırır</b>.</li>","name":"Dikenli Sarmaşıklar","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"Psişik enerji yüklenmiş bir meşrubat kutusu.<li>Baş Aşağı Dünya\'da yolculuk yaparken tamir edilmekte olan jeneratörleri sarı harelerle gösterir.</li>","name":"Eleven\'ın Kolası","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"Demogorgon\'u canlandıran saf, lastiğe benzeyen bir akciğer.<li>Baş Aşağı Dünya\'da yolculuk yaparken Katil\'in hareket hızını <b>önemli ölçüde arttırır</b>.</li><li>Kullanılabilen geçit sayısını <b>2</b> azaltır.</li>","name":"Geyik Akciğeri","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"Belayı ateşe vermek için kullanılan bir çakmak.<li>Geçidin etkisi altında olan Kurbanlar <b>Körlük</b> durum etkisine girer. Kurbanların geçitle teması kesildiğinde etki <b>60 saniyeliğine</b> devam eder.</li>","name":"Pirinç Kılıflı Çakmak","flavor":"\\"Güçlü bir elektromanyetik alan yayıyor. Baş Aşağı Dünya\'yla temasa geçmiş olmalı.\\" - Hawkins Ulusal Laboratuvarı","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"Baş Aşağı Dünya\'da yetişen parlak kırmızı ve zehirli bir mantar.<li>Bir geçitten çıkarken Demogorgon\'a uygulanan <b>Tespit Edilemez</b> durum etkisinin süresini <b>orta seviyede</b> arttırır.</li>","name":"Parlak Kırmızı Mantar","flavor":"\\"Denek üzerinde deneyler yapmaya devam ediyoruz. Şu ana kadarki bulgularımız tutarsız.\\" -Hawkins Ulusal Laboratuvarı","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"Boyutlararası tünellerin geçit kapısını güçlendiren yapışkan, yanıcı bir bitki özü.<li>Kurbanların bir geçidi kapatması için gerekli olan süreyi <b>orta seviyede arttırır</b>.</li>","name":"Baş Aşağı Reçinesi","flavor":"\\"Bir zamanlar bir geçit olarak kullanılan ağacın kabuğundan alınmış bir numune. Etkilerini anlamak için gerçekleştirdiğimiz araştırmalar şu ana kadar sonuç vermedi.\\" -Hawkins Ulusal Laboratuvarı","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"Ürkütücü ağlarla çevrili ılık ve büyük bir yumurta.<li>Baş Aşağı Dünya\'da yolculuk yaparken gücün yenilenme hızını <b>önemli ölçüde</b> arttırır.</li>","name":"Bilinmeyen Yumurta","flavor":"\\"Baş Aşağı Dünya\'da büyük bir yumurta görüldü; ancak laboratuvara götürülen tüm numuneleri yolculuk sırasında kaybettik. Dolayısıyla düzgün bir inceleme yapamıyoruz.\\" -Hawkins Ulusal Laboratuvarı","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"Bir zamanlar Hawkins\'in halka açık yüzme havuzuna hükmeden paslı metal düdük.<li>Katil İçgüdüsü, etkinleştirilmiş geçitlerin yakınındaki Kurbanları, <b>Hiçlik Yaratığı</b>\'yla güç toplamaya gerek duymadan açığa çıkarır.</li>","name":"Cankurtaran Düdüğü","flavor":"\\"Güçlü bir elektromanyetik alan yayıyor. Baş Aşağı Dünya\'yla temasa geçmiş olmalı.\\" -Hawkins Ulusal Laboratuvarı","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"Baş Aşağı Dünya\'daki ağaçların kabuklarında yetişen, halüsinasyon görülmesine yol açan bir yosun.<li>Baş Aşağı Dünya\'da yolculuk yaparken Demogorgon hedeflenen geçitten sessizce ama daha yavaş çıkar.</li><li>Bir geçitten çıkarken Demogorgon\'a uygulanan <b>Tespit Edilemez</b> durum etkisinin süresini <b>olağanüstü düzeyde arttırır</b>.</li>","name":"Kızıl Yosun","flavor":"\\"Yapraklarını tüketmek atletik performansı arttırıyor ve zinde hissedilmesini sağlıyor.\\" - Hawkins Ulusal Laboratuvarı","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"Baş Aşağı Dünya\'daki kayaların üstünde yetişen ve toza benzeyen tesirli bir liken.<li>Baş Aşağı Dünya\'da yolculuk yaparken ve bir geçitten çıktıktan sonra <b>3 saniye</b> boyunca tüm Kurbanların <b>harelerini ortaya çıkarır</b>.</li>","name":"Cüzzamlı Liken","flavor":"\\"Düşük dozda bile ciddi halüsinasyonlar oluşmasına yol açabiliyor.\\" -Hawkins Ulusal Laboratuvarı","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"Namuslu ve haklı emelleri olan Kazan, kötülüğün onu bu yoldan saptırmaması için yanında bu eşyayı taşırdı.<li>Kan Kürelerinin kullanılma hızını <b>biraz arttırır</b>.</li>","name":"Yaku-Yoke Tılsımı","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"Halat biraz daha güçlü olsaydı belki Kazan\'ı zapt etmeye yeterdi. Nihayetinde Kazan kaçtı ve onu esir alanları kılıçtan geçirdi.<li>Kan Kürelerinin harelerinin tespit edilme mesafesini <b>biraz arttırır</b>.</li>","name":"Çürüyen İp","flavor":"\\"Ölüm çok dikkatli olsa da arada bir göz kırptığı da görülmüştür.\\" -Renjiro\'nun Doktrini 14:5 ","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"Kazan\'ın düğün merasiminden kalan bir kupa; geceyi bile göremeden çatladı.<li><i>Kan Hiddeti</i>\'ni etkinleştirmek için gereken yük miktarını <b>biraz arttırır</b>.</li><li><i>Kan Hiddeti</i>\'nin bekleme süresini <b>biraz azaltır</b>.</li>","name":"Çatlamış Sakazuki","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"Kazan\'ın kış ayında tapınağa tırmandığı yüzlerce seferden birinde tırnağı düştü. Bu kutsal uğurda defalarca taban tepmesine rağmen Akito\'nun bacağı bir türlü iyileşmiyordu.<li>Kan Kürelerini kullanırken hareket hızını <b>biraz arttırır</b>.</li>","name":"Morarmış Ayak Tırnağı","flavor":"\\"Bir baba, evlatları için fedakârlık yapmıyorsa o zaman kime babalık ediyordur?\\" -Renjiro\'nun Doktrini 11:12","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"İblise benzetildiği için Kazan\'ın miğferinden söküp attığı boynuzlu bir arma.<li><i>Yamaoka\'nın Gazabı</i>\'nın pasif yeniden dolma oranını <b>biraz arttırır</b>.</li>","name":"Cilalanmış Maedate","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"Bir zamanlar Yamaoka mülkünün duvarını süsleyen mürekkep resim. Fareler tarafından yenen bir aslanı betimliyor.<li><i>Kan Hiddeti</i>\'ni etkinleştirmek için gereken yük miktarını <b>biraz arttırır</b>.</li><li><i>Kan Hiddeti</i>\'nin bekleme süresini <b>biraz azaltır</b>.</li><li>Bir Kurban\'ı yere düşürürken harcanan <b>Kan Hiddeti</b> miktarını <i>orta seviyede azaltır</i>.</li>","name":"Mürekkep Aslan","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"Renjiro\'ya ait bir sopa. Kazan, adam gidince sopayı ondan çaldı.<li><i>Kan Hiddeti</i>\'nin etki süresini <b>biraz arttırır</b>.</li>","name":"Kakmalı Saihai","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"Akito\'nun antrenman kılıcı. Çocuk, sakatlandıktan sonra kılıcı kullanmaz oldu.<li>Kan Kürelerinin harelerinin tespit edilme mesafesini <b>orta seviyede arttırır</b>.</li>","name":"Çocuğun Tahta Kılıcı","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"Sahte Soylu Kazan olarak tanınan çocuğun kanı. Kazan, kavganın izlerini babasından sakladı ve kuşağını gizlice dikti.<li>Kan Kürelerini kullanırken hareket hızını <b>orta seviyede arttırır</b>.</li>","name":"Kanlı Kuşak","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"Yamaoka ailesinin sancağı; Kazan bununla muazzam gurur duyardı.<li><i>Kan Hiddeti</i>\'nin etki süresini <b>orta seviyede arttırır</b>.</li>","name":"Yamaoka Sashimono","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"Kazan\'ın gençken Setsubun\'u kutlamak için aldığı maske; maskenin ağzından iğrenç bir şekilde taşmış gibi görünen dişleri bir süre sonra Kazan\'ın kâbuslarını süslemeye başladı.<li>Kurbanlardan düşen Kan Küresi oranını <b>biraz arttırır</b>.</li>","name":"Ahşap Oni Maskesi","flavor":"\\"İnsanların iblislerle bu kadar benzer olması tesadüf değil.\\" -Renjiro\'nun Doktrini 3:8","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"Kazan\'ın öfke anında parçaladığı, atalarından kalma kılıcın parçaları.<li><i>Yamaoka\'nın Gazabı</i>\'nın pasif yeniden dolma oranını <b>orta seviyede arttırır</b>.</li>","name":"Kırık Wakizashi","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"Kazan\'ın onurunu sorgulayan bir samuraya ait saç topuzu. İnce köklü saçlar, kanlı bir deri parçasına tutunuyor.<li><i>Kan Hiddeti</i> etkinken <i>İblis Atılışı</i>\'nı kullanmak için gereken yük miktarını <b>önemli ölçüde arttırır</b>.</li>","name":"Derisi Yüzülmüş Saç Topuzu","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"Doğumunda Kazan\'a ailesini belalardan koruması için verilmiş bir eşya.<li><i>Kan Hiddeti</i> etkinken <i>İblis Atılışı</i>\'nın hareket hızını <b>orta seviyede arttırır</b>.</li>","name":"Kanai-anzen Tılsımı","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"Kazan, samuraylığın adını temizlemek için gittiğinde annesi gözyaşlarını bu kumaşa sildi.<li>Bir Kurban\'ı yere düşürürken harcanan <i>Kan Hiddeti</i> miktarını <b>önemli ölçüde azaltır</b>.</li>","name":"Gözyaşıyla Sulanmış Tenugui","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"Renjiro Yamaoka\'yı taşıyan geminin parçaları. Efsanevi samuray her şeye rağmen hayatta kalmayı başardı.<li>Kurbanlardan düşen Kan Küresi oranını <b>orta seviyede arttırır</b>.</li>","name":"Parçalanmış Gemi Gövdesi","flavor":"\\"Hileli oyunlar planlayacaksanız, kimseye danışmayın.\\" -Renjiro\'nun Doktrini 7:9","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"Egzotik bir tüccardan alınmış bir diş, gücü ve soyluluğu simgeliyor.<li><i>Kan Hiddeti</i>\'nin etki süresini <b>önemli ölçüde arttırır</b>.</li>","name":"Aslan Dişi","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"Kazan\'ın oğlunun ağaçtan düştükten sonra kullandığı koltuk değneği. Akito\'nun yaralanmasından sonra çocuğun oyun oynadığı arkadaşı ve arkadaşının ailesi cezalandırıldı.<li><i>Kan Hiddeti</i> etkinken <i>İblis Atılışı</i>\'nın hareket hızını <b>önemli ölçüde arttırır</b>.</li>","name":"Akito\'nun Koltuk Değneği","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"Renjiro\'nun oğlundan gelen darbeden sonra göğsüne bastırdığı eldiven.<li>Kurbanların hepsi Kan Kürelerini görebilir.</li><li>Kurban, bir Kan Küresine temas ettiğinde Kan Küresini emer ve haresi <b>2 saniye</b> boyunca Katile görünür.</li><li>Emilen her kan küresinde bu etki birikir.</li>","name":"Renjiro\'nun Kanlı Eldiveni","flavor":"\\"Her şey elinden kaydığında onuruna tutun\\". -Renjiro\'nun Doktrini 14:12","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"Sahibinin Yamaoka ailesine mensup olduğunu gösteren bir arma.<br><li><i>Kan Hiddeti</i> etkinken <i>İblis Saldırısı</i>\'nı kaçırmak <b>12 metre yarıçapındaki</b> bütün Kurbanların çığlık atarak bulunduğu konumu sana belli etmesine sebep olur.</li>","name":"Parıltılı Aile Arması","flavor":"\\"Kim olduğunu bil ki kalbini ona göre koruyabilesin.\\" -Renjiro\'nun Doktrini 11:2","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"Bir parça pis çuval bezi. Silahlı çatışmanın telaşında Zıpkın Tüfeği\'ni temizlemek için tükürük ve alın teri iş görüyordu.<li>Başarısız atışlardan sonra Zıpkın Tüfeği\'nin bekleme süresini <b>biraz azaltır</b>.</li>","name":"Tükürüklü Bez ","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"Seyyar satıcıdan alınmış, yağ ve özütlerden oluşan bir sıvı. Başına gelen tüm husumetleri iyileştireceği iddia ediliyor.<li>Zıpkın Tüfeği\'nin sarma hızını <b>biraz arttırır</b>.</li>","name":"Yılan Yağı ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"Caleb\'ın ilk Zıpkın Tüfeği prototipinde kullandığı dayanıksız çelik zincir. Zincir beş para etmese de onun için manevi bir değeri olduğu aşikâr.<li><i>Zıpkınlama</i> skor etkinlikleri için <b>%50</b> bonus Kan Puanı verir.</li><li>Kurbanlar daha kolay kurtulur.</li>","name":"Cılız Zincir","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"Caleb\'ın özel silahları için modifiye ettiği eski bir fişeklik. Hâlâ Arizona Bölgesi\'ne ait ince kırmızı kumla dolu.<li>Zıpkın Tüfeği\'ni doldurma hızını <b>biraz arttırır</b>.</li>","name":"Modifiye Fişeklik ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"Caleb\'ın gaza gelip hastalıklı bir merakla Zıpkın Tüfeği\'nin önüne iliştirdiği tren rayı çivisi. Körleşmiş ucu, hedefini temiz şekilde delip geçmesini engelliyor.<li>Zıpkınlanmış bir Kurban\'a vurmak, <b>Ağır Yaralı</b> durum etkisi uygular.</li>","name":"Paslı Çivi ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"Alelade bir bitki gibi görünse de, Caleb zıpkınına bu bitkinin yağını sürdüğünde Kurbanların yaralarının çevresinde dayanılmaz acı veren kabarcıklar çıktığını fark etti.<li><b>Derin Yara</b> durum etkisi altındaki Kurban\'ın Müdahale Etme süresini <b>biraz arttırır</b>.</li>","name":"Zehirli Meşe Yaprakları","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"Arizona\'da Hellshire Çetesi\'nin işine karışan bir kanun adamının cesedinden sökülmüş gümüş bir rozet.<li>Zıpkın Tüfeği ile yakınlaştırılarak nişan alındığında dehşet alanını <b>biraz azaltır</b>.</li><li>Zıpkın Tüfeği ile yakınlaştırılarak nişan alındığında hareket hızını <b>biraz azaltır</b>.</li><span class=\\"FlavorText\\">\\"Öğleye kalmadan sallandırılacaksın, son duanı et.\\" -Caleb Quinn</span>","name":"Polis Şefinin Rozeti ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"Çılgın bir silahlı çatışma esnasında Caleb\'ın çenesini delip geçen mermi. Yakıcı intikam duyguları uyandırır.<li>Zıpkın Tüfeği ile yakınlaştırılarak nişan alındığında hareket hızını <b>biraz arttırır</b>.</li><span class=\\"FlavorText\\">\\"Bana yanlış yapan, ölümü evine davet eder.\\" -Caleb Quinn</span>","name":"Çene Ezici ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"Glenvale\'deki delik deşik olmuş bir cesette bulunmuş kırpılmış ve tatlandırılmış bir kutu tütün. Sinir sistemini uyarır.<li>Kurban Zıpkın Tüfeği\'nden kurtulduğunda sersemletme süresini <b>orta seviyede azaltır</b>.</li>","name":"Çiğneme Tütünü","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"Tekinsiz anahtar şıkırtıları, Caleb\'a öfke dolu bir anıyı hatırlatıyor.<li>Zıpkın Tüfeği\'ni doldurma hızını <b>orta seviyede</b> arttırır.</li>","name":"Gardiyanın Anahtarları ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"Mason Kelly\'ye ait bir aranıyor posterinden geri kalan sararmış parçalar. Caleb\'ın odaklanmasını sağlardı.<li>Zıpkın Tüfeği ile yakınlaştırılarak nişan alındığında hareket hızını <b>orta seviyede</b> arttırır.</li><span class=\\"FlavorText\\">\\"Anamın ölüsü üzerine yemin ederim ki belanı bulacaksın.\\" -Caleb Quinn</span>","name":"Aranıyor Posteri ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"Makine sürtünmesini önleyen az miktarda yağla dolu bir teneke. Zıpkın Tüfeği\'nin eski modelleri sıkça tutukluk yapmasıyla meşhurdu ve yağ bulundurmak, olmazsa olmazlardandı.<li>Başarısız atışlardan sonra Zıpkın Tüfeği\'nin bekleme süresini <b>orta seviyede azaltır</b>.</li>","name":"Teneke Yağdanlık ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"Daha önce iki kez elinden kaçan bir suçluya kızan Caleb, dikenli dallar doladığı bir zıpkını fırlattı.<li>Zıpkın Tüfeği\'nden kurtulan Kurbanlara <b>Ağır Yaralı</b> durum etkisi uygulanır.</li>","name":"Gladiçya Dikenleri ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"Henry Bayshore\'un ölümünden saatler önce merhamet dilenirken attığı çığlıklar sırasında ağzından kopartılmış bir altın diş.<li>Zıpkın Tüfeği\'nin sarma hızını <b>orta seviyede arttırır</b>.</li><span class=\\"FlavorText\\">\\"Haddini bileceksin, evlat. Herkes haddini bilecek.\\" -Henry Bayshore</span>","name":"Bayshore\'un Altın Dişi","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"Eskiden ucunda çelik bir gülle olan, Caleb\'ın bileğine bağlı kalın ve ağır bir zincir. Üzerinde bir zıpkına bağlanacak şekilde değişiklikler yapılmış.<li>Kurbanların zıpkından kurtulmak için ihtiyacı olan yükü <b>önemli ölçüde arttırır</b>.</li><span class=\\"FlavorText\\">\\"Hapishane avlusunun dışında çalışan mahkûmların bir bileğine en az 8 kilogram ağırlığında bir çelik gülle bağlanması şarttır.\\" -Hellshire Hapishanesi Gardiyan Yönetmeliği</span>","name":"Hapishane Zinciri","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"Şişeden dökülen sıcak teselli Caleb\'ın öfkesini dindirmiş, adımlarını yavaşlatmıştı.<li>Zıpkın Tüfeği ile yakınlaştırılarak nişan alındığında dehşet alanını <b>orta seviyede azaltır</b>.</li><li>Zıpkın Tüfeği ile yakınlaştırılarak nişan alındığında hareket hızını <b>orta seviyede azaltır</b>.</li><span class=\\"FlavorText\\">\\"Sert mizaçlar için, yumuşak içim.\\" -Bir Altınırmak Reklamı, 1876</span>","name":"Altınırmak Viski","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"Caleb\'in patronu, karnına saplanmış zıpkın yüzünden zırlarken ceketinden alınan kaliteli bir puro.<li>Kurban zıpkından kurtulduğunda sersemletme süresini <b>önemli ölçüde azaltır</b>.</li><span class=\\"FlavorText\\">\\"O şeyi bana doğrultmayı kes de ağzını kapat, ahmak.\\" -Henry Bayshore</span>","name":"Bayshore\'un Purosu","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"Üzerinde keskin dikenler olan Amerikan yapımı bükülebilir çelik tel. Gayet basit görünen bir şey olsa da, Caleb teli zıpkının etrafına dolayarak onu daha da ölümcül bir hale getirebileceğini düşündü.<li><b>Derin Yara</b> durum etkisi altındaki Kurban\'ın Müdahale Etme süresini <b>orta seviyede arttırır</b>.</li></li><span class=\\"FlavorText\\">\\"Yakında korkacak hiçbir şeyin kalmayacak. Ama o zamana kadar benden korksan iyi edersin.\\" -Caleb Quinn</span>","name":"Dikenli Tel","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"Sis\'ten çıkma, cama benzeyen bir para. Hizmetleri karşılığında ödül avcısına yapılan ödeme.<li>En az <b>15 metre</b> uzaklıktan zıpkınla vurulan Kurbanlar, zıpkınla vurulmuş halde kaldığı sürece <b>Zayıf</b> durum etkisi altında kalır.</li><span class=\\"FlavorText\\">\\"Zor anlarda yapılan pazarlıkların bedeli delilikle ödenir.\\"</span>","name":"Parıltılı Para","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"Hellshire Çetesi\'nin dağlama demiri. Halk arasında bilinenin aksine, hiçbir zaman çetenin yeni üyelerinin üzerinde kullanılmamış, bunun yerine çetenin yakaladıkları arasından rahat durmayan kişileri işaretlemek için kullanılmıştır.<li>Bir Kurban zıpkınla vurulmuş halde kaldığı sürece, Dehşet Alanı\'ndaki tüm Kurbanların hareleri görünür olur.</li><span class=\\"FlavorText\\">\\"Hellshire Çetesi: Adalet Arayanlar mı Suçlular mı?\\" -Glenvale Gazetesi başlığı</span>","name":"Hellshire Demiri","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"Bir buzdolabında bulunmuş. Üzerine şiş, iğrenç bir surat oyulmuş.<li><b>Azap Yolu</b>\'nun bıraktığı izlerin ortamda kalma süresini <b>biraz arttırır</b>.</li>","name":"Kurşun Yüzük ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"Wood Side Apartmanları\'nda bir yatağın üzerinde bulunmuş bir kelebek. Çok narin, dokununca parçalanacak gibi oluyor.<li><b>Azap Yolu</b>\'nun yenilenme hızını <b>biraz arttırır</b>.</li>","name":"Ölü Kelebek ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"Brookhaven Hastanesi\'nin bodrumunda bulunmuş. Üzerine bir örümcek resmi oyulmuş.<li><b>Azap Yolu</b>\'nun toplam kullanım süresini <b>biraz arttırır</b>.</li>","name":"Bakır Yüzük ","flavor":"\\"Bodrumun da bodrum katında hapistim. O kadar küçük ve karanlıktı, o kadar korkuyordum ki. Kıymetli yüzüğümü orada düşürdüm. Ama oraya bir daha asla dönmem.\\"","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"Bir kurbanı metal bir çerçeveye bağlamak için kullanılmış naylon bir kayış. Ne kadar kanlı olduğu, rengi yüzünden anlaşılmıyor.<li><b>Lanetlilerin Cezası</b>\'nın menzilini <b>biraz arttırır</b>.</li>","name":"Siyah Kayış ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"Kısa süre sonra cezasını çekecek bir mahkûmun balmumundan oyduğu el yapımı bir bebek.<li><b>Lanetlilerin Cezası</b>\'nın menzilini <b>orta seviyede arttırır</b>.</li>","name":"Balmumu Bebek ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"Bir mızrağın keskin, paslı ucu. Son kurbanının kanı, üzerinde kurumuş.<li><b>Azap Yolu</b>\'nun toplam kullanım süresini <b>orta seviyede arttırır</b>.</li>","name":"Mızrak Ucu ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"Pembe, leopar desenli bir kumaş parçası. Ne için kullanıldığını anlamak zor.<li><b>Azap Yolu</b> tarafından tetiklendiğinde <i>Katil İçgüdüsü</i>\'nün süresini <b>biraz arttırır</b>.</li>","name":"Leopar Desenli Kumaş  ","flavor":"\\"Kim olduğumun önemi yok. Yanındayım, James.\\" -Maria","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"İki sevgilinin Silent Hill\'deki tatilinin kaydedildiği bir video kaset. Manevi değerine karşın Lakeview Oteli\'nde bırakılmış.<li><b>Azap Yolu</b>\'nun yenilenme hızını <b>orta seviyede arttırır</b>.</li>","name":"Unutulmuş Kaset ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"Külkedisi masalından bir figürle süslenmiş bir müzik kutusu. Pek çok ülkeye ait seyahat etiketleriyle süslenmiş bir valizin içinde bulunmuş.<li><b>Azap Yolu</b>\'nun bıraktığı izlerin ortamda kalma süresini <b>orta seviyede arttırır</b>.</li>","name":"Külkedisi Müzik Kutusu ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"Kırmızı kukuletalı iki siluetin fotoğrafı. İsmi Tanrılar İçin Kızıl ve Beyaz Şölen.<li><b>Azap Yolu</b>\'nun yenilenme hızını <b>önemli ölçüde arttırır</b>.</li>","name":"Valtiel Tarikatı Fotoğrafı ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"Üzerine Aztek desenleri kazınmış metal bir tablet.<li><b>Azap Yolu</b>\'nun toplam kullanım süresini <b>önemli ölçüde arttırır</b>.</li>","name":"Despotun Tableti ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"Başına çelik bir piramit takmış, ürkütücü bir figürü tasvir eden bir tablo. Arka planda kafesler içinde kurbanlar var.<li><b>Azap Yolu</b> tarafından tetiklendiğinde <i>Katil İçgüdüsü</i>\'nün süresini <b>orta seviyede arttırır</b>.</li>","name":"Sisli Gün, Yargıdan Kalanlar ","flavor":"\\"Bu o...\\"","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"Bir vitrin mankeninin bacağından vahşice koparılmış, pürüzsüz, gri ayak.<li><b>Azap Yolu</b>\'nun bıraktığı izlerin ortamda kalma süresini <b>önemli ölçüde arttırır</b>.</li>","name":"Manken Ayağı ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"Lakeview Oteli\'nin bir krokisi. Bu suçluluk dolu yerin üzerine kırmızı alevler çizilmiş.<li>Lanetlilerin Cezası\'nın mesafesini <b>önemli ölçüde</b> arttırır.</li>","name":"Yanan Adam Tablosu ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"Çarpıcı bir kırmızılıkta, taze bir yumurta. Büyüklüğü bıldırcın yumurtası kadar.<li><b>Azap Yolu</b> tarafından tetiklendiğinde <i>Katil İçgüdüsü</i>\'nün süresini <b>önemli ölçüde arttırır</b>.</li>","name":"Kızıl Yumurta ","flavor":"\\"Ömrümde böyle korkmamıştım! Beni hiç umursamıyorsun... değil mi?\\" -Maria","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"Kırmızımsı turuncu renkte, bayat görünümlü bir yumurta. Büyüklüğü bıldırcın yumurtası kadar.<li><b>Azap Yolu</b>\'ndan etkilenen Kurbanlar <b>60 saniyeliğine</b> <b>Körlük</b> durum etkisi altına girer.</li>","name":"Pas Rengi Yumurta ","flavor":"\\"James... Beni mutlu ettin.\\" -Mary","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"Silent Hill\'le çevresindeki bölgenin tarihi ve efsaneleri hakkında bir kitap.<li><b>Azap Yolu</b>\'ndan etkilenen Kurbanlar <b>15 saniyeliğine</b> <b>Bihaber</b> durum etkisi altına girer.</li><span class=\\"FlavorText\\">\\"Buraya \'Sessiz Ruhların Mekânı\' derlerdi.\\"</span>","name":"Kayıp Hatıralar Kitabı ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"Kadim bir tanrı hakkında bir kitap. Yazarı bilinmiyor.<li><i>Azap</i> durum etkisi altındaki yaralı Kurbanlar <b>Kan Kaybı</b> durum etkisi altına girer.</li>","name":"Kızıl Tören Kitabı ","flavor":"\\"Konuş. Ben Kızıl Kişi\'yim. Yalanlar ve sis onlar değil, benim.\\"","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"Som obsidiyenden oyulmuş, antik görünümlü bir kadeh.<li><b>Cellat</b>, <b>Azap Yolu</b>\'nun izi üzerinde dururken <b>Tespit Edilemez</b> durum etkisini kazanır.</li>","name":"Obsidiyen Kadeh ","flavor":"\\"Uyandırdığım için özür dilerim. Ama sensiz devam edemiyorum.\\" -James Sunderland","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"Üzerine tuhaf bir desen kazınmış bir tılsım. Mahluk\'un etkisi onu değiştirmiş gibi.<li>Bir Kurban\'ı <b>Kefaret Kafesi</b>\'ne gönderirken, <i>Azap</i> etkisindeki tüm Kurbanların hareleri <b>6 saniyeliğine</b> görünür olur.</li>","name":"Metatron\'un Parıltılı Mührü ","flavor":"\\"Güçlü koruma ve def etme özelliklerine sahip bu büyülü kareye \'VII. Virun\'un Tuğrası\' ya da \'Metatron\'un Mührü\' denir.\\"","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"Hiçbir işe yaramayan bir hap... mı acaba?<br><br><li>Akın sırasında hareket hızını <b>orta seviyede azaltır</b>.</li><li>Akın skor etkinliklerinde <b>%100</b> bonus Kan Puanı kazan.</li>","name":"Teselli İlacı ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"Talbot\'ın kimyaya olan ilgisini alevlendiren zehirli bir bitki. Unutulmuş anıları geri getirir.<br><br><li>Akın sonrasında iyileşme hızını <b>biraz arttırır</b>.</li> ","name":"Yüksükotu ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"Deneyin başlarında hazırlanan bu numune istenen sonucu vermese de şaşırtıcı etkilere sebep oldu.<br><br><li>Çarpma\'dan sonra <b>16 metre</b> çevresinde en yakındaki Kurban\'la yüz yüze gelirsin.</li> ","name":"Yedinci Bileşik ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"Yıllar geçtikçe görüşü kötüye gitmesine rağmen Talbot\'ın nadiren kullandığı tek camlı gözlük.<br><br><li>Çarpma\'nın hedef konumunu gösterir.</li>","name":"Kırık Tek Camlı Gözlük","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"Talbot\'ın notlarından geriye kalanlar; hâlâ çok değerli bilgiler içeriyorlar.<br><br><li>Kullanılabilir Akın nişanlarının sayısını <b>1</b> <b>azaltır</b></li><li>Nişanların yenilenme süresini <b>orta seviyede arttırır</b>.</li>","name":"Yırtılmış Notlar ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"Toz haline getirilmiş kurutulmuş püstül yaprakları.<br><br><li>Çarpma süresini <b>orta seviyede arttırır</b>.</li>","name":"Püstül Tozu ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"Veba\'nın saflaştırılmış ve çeşitli kimyasallarla işlem görmüş safrasından bir numune.<br><br><li>Akın esnasında dönme hızını <b>biraz arttırır</b>.</li> ","name":"Veba Safrası","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"İç organları saran bir mantar hastalığından alınmış diken parçası. Hafif bir toksin salgılıyor.<br><br><li>Akın sonrasında iyileşme hızını <b>orta seviyede arttırır</b>.</li> ","name":"Mantar Dikeni","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"Serum verildikten sonra kısa bir süreliğine hayata dönerek saldırgan ve kontrol edilemez olan bir sıçan.<br><br><li>Arka arkaya kullanılan her Akın için Akın hızını <b>orta seviyede arttırır</b>.</li> ","name":"Marazlı Sıçan ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"Bir anlığına ruhlar âlemine geçtiği için yapısı değişmiş sıradan deniz tuzu.<br><br><li>Akın esnasında dönme hızını <b>orta seviyede arttırır</b>.</li> ","name":"Gölge Tuzu ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"Aşırı nadir Yeniay Buketi\'nin kurutulmuş güllerinden yapılan bir karışım.<br><br><li>Çarpma süresini <b>önemli ölçüde arttırır</b>.</li> ","name":"Gül Toniği ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"İnsanlar için ölümcül olan bir serum. Bazılarında ise faydalı özellikler ortaya çıkarır. Gözle görünenden fazlası olanlarda...<br><br><li>Çarpma başlatıldığında, çarpışma noktasının <b>8 metrelik</b> alanında yer alan Kurbanların harelerini <b>3 saniyeliğine</b> açığa çıkarır.</li>","name":"Yirmi Birinci Bileşik ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"Maraz serumu yüzünden mutasyon geçirmiş ölü bir karga.<br><br><li>Arka arkaya kullanılan her Akın için Akın hızını <b>önemli ölçüde arttırır</b>.</li> ","name":"Marazlı Karga ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"Bir kişinin böbreküstü bezinden zorla alınmış bir hormon. Bir enerji patlaması yaratsa da kullanan kişiyi bitkin düşürebilir.<br><br><li>Nişanların yenilenme süresini <b>olağanüstü düzeyde arttırır</b>.</li><li>Kullanılabilir Akın nişanlarının sayısını <b>2</b> <b>arttırır</b>.</li><li>Akın sırasında maksimum bakış açısını <b>önemli ölçüde arttırır</b></li><br>","name":"Adrenalin Şişesi ","flavor":"\\"Lütfen, yapma bunu...\\"\\\\","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"Hiçlik\'ten geri gelmeyi başardığını iddia eden bir adamın günlüğü. İçerisinde bulunan bilgiler gerçekten de işe yarayabilir.<br><br><li>Akın esnasında <b>Tespit Edilemez</b> durum etkisini kazanırsın.</li><br>","name":"Vigo\'nun Günlüğü ","flavor":"\\"Unutulmuş hayaller ve bitmeyen rutinlerden oluşan bir çölde çıkışı bilen tek kişi tanrıdır.\\" -Talbot Grimes","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"Talbot bu taşı kullanarak araştırması olduğunu düşündüğü şeyleri afyon evinin duvarlarına kazıdı.<br><br><li>Ölümcül Akın\'la bir Kurban\'a vurmak Mahluk\'u çağırarak <b>6 saniyeliğine</b> <b>12 metre</b> yakınındaki tüm paletleri engeller.</li><br>","name":"Çağırma Taşı ","flavor":"\\"Ölüm sadece bir başlangıç.\\"","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"Yakın zamanda ölmüş bir Kurban\'ın epifiz bezinden çıkarılmış bir kimyasal.<br><br><li>Akın gerçekleştirilirken, tamir veya iyileştirme yapan bir Kurban\'ın <b>16 metre</b> yakınına girdiğin anda, o Kurban için <b>olağanüstü düzeyde</b> zor bir Beceri Denemesi tetiklenir. Her Akın\'da bir Kurban için bir kere etkinleştirilebilir. Akın gerçekleştirildiği sırada <b>16 metre</b> yakınında bulunan Kurbanlar için etkinleştirilmez.</li><br>","name":"Ruh Kimyasalı ","flavor":"\\"...nöral ritmik etkinlikte atipik değişimlere sebep olduğundan şüpheleniliyor.\\" -İsimsiz, gizemli okul notu","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"Londra Tıp Okulu\'ndan mezun olan kimyagerlere verilen bir yüzük. Asla bitmeyen hırs duygusunu temsil eder.<br><br><li>Ölümcül Akın\'la bir Kurban\'a vurmak, tüm Akın nişanlarını anında yeniler.</li><br>","name":"Simyacı Yüzüğü ","flavor":"\\"Öğrenci, izinsiz bilimsel deneyler yapmak amacıyla mezar soymakla suçlanıyor.\\" -Talbot Grimes\'ın fakülteden aldığı kınama, 1838","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"Sis\'in kendisinden yapılmış cam gibi bir laboratuvar isimliği. Mahluk\'un bir hediyesi veya Maraz\'ın bir zamanlar diğerlerine yaptığı gibi onu etiketlemek için hazırlanan zalim bir jest.<br><br><li>Tüm Akın nişanları kullanıldıktan sonra yapacağın son Ölümcül Akın, Kurbanları can çekişme durumuna sokar.</li><br>","name":"Parıltılı Maraz İsimliği","flavor":"\\"İlerleme, köklü değişiklikler gerektirir.\\" -Talbot Grimes","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"Talbot\'ın sondan bir önceki serum denemesi. Kaçmasına yardımcı olmasa da çok güçlü yan etkilere sahipti.<br><br><li>Çarpma\'nın en fazla <b>16 metre</b> yakınında bulunan tüm Kurbanlar <b>3 saniyeliğine</b> <b>Topal</b> durum etkisi altına girer.</li><li>Paletleri veya yıkılabilir duvarları çarpmak onları yok eder ve Maraz\'ı <b>1,5 saniye</b> için sersemletir.</li><br>","name":"Otuz Üçüncü Bileşik ","flavor":"\\"Zamanım azalıyor. Umarım bu sefer olur...\\" -Talbot Grimes","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"Minik bir oyuncak kılıç, yalnızca birkaç santim uzunluğunda. Bu kılıcı tutunca Victor\'un içi şiddet hevesiyle dolardı.<br><br><li>Çullanma yükünün birikmesi için gereken süreyi <b>biraz azaltır.</b></li>","name":"Oyuncak Kılıç","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"Charlotte, Victor\'un yasını farklı şekillerde tutabilirdi. Victor\'un tırnakları çürüyen ellerinden kayıp düşmeye başlayınca Charlotte bir tanesini alıp hatıra olarak sakladı.<br><br><li>Victor\'un Charlotte\'tan ayrılması için gereken süreyi <b>orta seviyede azaltır.</b></li>","name":"Ufak Tırnak","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"Ekşimiş süt dolu metal bir şişe. Gürültücü Victor\'un, bu yemeği gördüğünde sesi kesilmişti.<br><br><li>Victor\'un çığlık menzilini <b>biraz arttırır.</b></li>","name":"Ekşi Süt","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"Küçük Victor\'un dikkatini çeken ahşap bir heykelcik. Annesi onu susturmak için figürü pazardan çalmak zorunda kaldı ama az daha yakalanıyorlardı.<br><br><li>Çullanma\'nın hedeflediği yeri gösterir.</li>","name":"Kedi Heykelciği","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"Eskiden İkizler\'in annesine ait olan bir eldiven. Çaresiz kaldıkları anlarda ses çıkarmaması için eldivenle Victor\'un ağzını kapatırdı.<br><br><li>Victor\'un çığlık menzilini <b>orta seviyede arttırır.</b></li>","name":"Madeleine\'in Eldiveni","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"Victor\'un yere devirip onları esir tutanları yaktığı şamdan. Kararlılığının simgesi.<br><br><li>Kurbanların Victor\'u ezmesi için gereken süreyi <b>biraz arttırır.</b></li>","name":"Seremoni Şamdanı","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"Açlıktan ölmek üzere olan Deshayes ailesinin yediği bir kedinin gözü. Victor, annesinden sakladığı bu gözle bir oyuncak gibi oynardı.<br><br><li>Çullanma tamamen dolduğunda Victor\'un çığlıkları kesilir.</li>","name":"Kedi Gözü","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"Charlotte\'un peşine düşen adamlardan birine ait kukuleta. Adam ava giderken avlandı.<br><br><li>Charlotte\'un uykusundan uyanma süresini <b>biraz azaltır.</b></li>","name":"Kanlı Kara Kukuleta","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"Victor\'un uzun zaman önce düşürdüğü iki diş. Alışılmadık şekilde keskinler.<br><br><li>Victor\'dan kurtulan Kurbanlar, <b>15 saniyeliğine</b> Körlük durum etkisine girer.</li>","name":"Süt Dişleri","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"Victor\'un, annesi onun için çalana kadar durmadan ağladığı, basitçe oyulmuş bir çıngırak. Bir çocuğun eline verilemeyecek kadar ağır.<br><br><li>Victor\'dan kurtulan Kurbanlar, <b>20 saniye</b> boyunca <b>Sakat</b> durum etkisine girer.</li> ","name":"Ağır Çıngırak","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"Madeleine\'in kasaba pazarından çaldığı sert, mayasız bir peksimet. Çok bir şey sayılmazdı ama yedikleri birçok şeyden iyiydi.<br><br><li>Çullanma\'nın bekleme süresini <b>biraz azaltır.</b></li>","name":"Bayat Bisküvi","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"Şehrin kanalizasyonundan kaçmaya çalışırken Deshayes\'in üzerini kaplayan iğrenç, yapış yapış bir karışım.<br><br><li>Kurban\'ın Victor\'dan kurtulması için gereken zamanı <b>biraz arttırır.</b></li>","name":"Lağım Pisliği","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"Paslı İğne","name":"Paslı İğne","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"Madeleine\'in ölmeden önce kısa bir süreliğine taktığı örtü. İkizler bunu bir hatıra olarak sakladı.<br><br><li>Victor\'un hızını <b>biraz arttırır.</b></li><br>","name":"Madeleine\'in Eşarbı","flavor":"\\"...çoğunluğun iyiliği ve kötülüğün imhası yolunda yapılmış bir hizmet olarak kayıtlara geçecektir.\\" -Madeleine Deshayes\'in infazına karar verilen tahkikattan","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"Victor\'un korktuğunda sıkıca tuttuğu bir oyuncak asker. Bu oyuncaktaki bir şey Charlotte\'u kıskandırıyordu.<br><br><li>Bir Kurban, Victor\'u boştayken ezerse haresi <b>6 saniyeliğine</b> açığa çıkar.</li><br>","name":"Victor\'un Askeri","flavor":"\\"Çok--çok—süpey güçlü askeyyy...\\" -Victor Deshayes","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"İkizler\'in paylaştığı ahşap bir topaç. Gerçi Victor onu kendine istiyordu. Sıkıca tutup bağırınca istediği her şeyi elde edebileceğini öğrenmişti.<br><br><li>Victor\'un üzerine çullandığı Kurbanlar, taşıdıkları eşyayı düşürür.</li><br>","name":"Topaç","flavor":"\\"Şşşş... şşşş... tamam, al senin olsun.\\" -Charlotte Deshayes","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"Etraftan toplanan sebzelerin, sahte bir tokluk hissi yaşatması için yosun ve kabuklarla karıştırıldığı bir yahni.<br><br><li>Victor\'un hızını <b>orta seviyede arttırır.</b></li><br>","name":"Orman Yahnisi","flavor":"\\"Ye... ye çocuğum. Karnın doyunca daha iyi hissedeceksin.\\" -Madeleine Deshayes","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"Madeleine\'in eski yaşamından kaçarken yanına alabildiği birkaç zevkinden biri. Hoş ve yatıştırıcı bir kokusu var.<br><br><li>Victor\'un çığlığının etki alanı içerisindeki Kurbanlar, <b>Bihaber</b> durum etkisine girer.</li><br>","name":"Parfüm Damlası","flavor":"\\"Cadıların oyunlarına dikkat edin; onlar, insanların içindeki iyilikten faydalanırlar.\\" -Cadıların ve İblislerin Tarihi (1602)","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"Charlotte\'ın beş yaşındayken ağzına soktuğu kalın bir bez parçası. Cadı avcıları yaklaştığında çığlık atmasını önlerdi.<br><br><li>Charlotte, boşta kaldıktan sonra geri döndüğünde <b>20 saniyeliğine Tespit Edilemez</b> durum etkisine girer.</li><br>","name":"Susturma Bezi","flavor":"\\"Bu oyunu artık sevmiyorum anne...\\" -Charlotte Deshayes","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"Bizzat Sis\'in biçimlendirdiği camsı bir kolye. Üstünde Madeleine Deshayes\'in portresi yer alıyor ama tasvirinde rahatsız edici bir şey var.<br><br><li>Bir Kurban, Victor\'u boştayken ezerse <b>30 saniyeliğine Zayıf</b> durum etkisine girer.</li><br>","name":"Parıltılı Kolye","flavor":"\\"Birlikteliğiniz bir lanet değil canlarım, yararlanacağınız bir güç.\\" -Madeleine Deshayes","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"İçinde gizli cepler olan bir kese. Hevesli sihirbazlar ve gizleyecek bir şeyi olanlar tarafından tercih edilir.<br><li>Taşınabilecek azami bıçak sayısını <b>10</b> <b>arttırır</b>.</li><li>Mücadeleye fazladan <b>10</b> bıçak ile başlarsın.</li>","name":"Hileli Kese","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"Aşırı kullanımdan aşınmış, kanlı ve paslı bıçaklar. Ji-Woon, ilk cinayetlerinde kullandığı bu bıçaklara ayrı bir önem verir.<br><li><b>Mıhlayıcı</b> skor etkinliğiyle <b>%100</b> ilave Kan Puanı kazan.</li><li>Kurbanların Kesik Göstergesi\'ni <b>orta seviyede</b> arttırır.</li>","name":"Anı Bıçaklar","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"Ji-Woon, bunu hiçbir şarkıda kullanmadı ama oluşan sesin akılda kalıcı olduğu inkâr edilemez.<br><li>Bıçak fırlatırken hareket hızını <b>biraz arttırır</b>.</li>","name":"Öldüren Melodi","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"Beş NO SPIN üyesinin dördünü öldüren stüdyo yangınında yanan kablolar. Üyelerin ölümleri, Dümenci\'ye hayat verdi.<br><li>Ana Etkinlik\'in süresini <b>biraz arttırır</b>.</li>","name":"Cehennem Kabloları","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"Gösterişsiz bir Changwon barında oluşturulan bir içki. Ji-Woon\'un favorilerinden.<br><li>Ana Etkinlik\'in süresini <b>orta seviyede arttırır</b>.</li>","name":"Ay Taşı Tekilası","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"Ji-Woon\'un şöhrete kavuşmadan önce kendi imkânlarıyla kaydettiği bir parça. Bu gizli cevher yalnızca en sıkı NO SPIN hayranlarında bulunur.<br><li>Kesik Göstergesi azalmaya başlamadan önce geçen süreyi <b>biraz arttırır</b>.</li>","name":"Tam On İkiden Şarkısı","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"Ji-Woon\'un sahip olduğu ilk fırlatma bıçağı. Aile restoranına gelen devamlı müşteriler için şov yapması adına babası almıştı.<br><li>Bıçaklar tükendiğinde Kurbanların Kesik Göstergesi\'nin azalma süresini <b>biraz uzatır</b>.</li>","name":"Şanslı Bıçak","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"Dümenci olarak bilinen ünlünün imzası. Arka arkaya yüzlerce imza verdikten sonra bileği yorulsa da bu kadar revaçta olduğunu bilmek ona zevk veriyordu.<br><li>Bıçakların ilk fırlatılma hızını <b>biraz arttırır</b>.</li>","name":"Ji-Woon\'un İmzası","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"Ji-Woon\'un Hapsedilmiş Yürek\'in klibinde giydiği ayakkabılar. Parmak uçlarında kusursuz ve zarif hareketlerle dans edilmesini sağlıyor.<br><li>Bıçak fırlatırken hareket hızını <b>orta seviyede arttırır</b>.</li>","name":"Hapsedilmiş Yürek Ayakkabıları","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"Ji-Woon\'un \\"Seni Bekleyeceğim\\"i canlı söylerken taşıdığı cep saati. Çalışmayan ve asla çalışmayacak olan bir sahne dekoru.<br><li>Bıçaklar tükendiğinde her Kurban\'ın Kesik Göstergesi\'nin azalma süresini <b>önemli ölçüde uzatır</b>.</li>","name":"Bekleme Saati","flavor":"\\"Benden kaçma sakın<br>Bitti deme<br>Bundan kaçış yok<br>Seni bekleyeceğim\\"<br>-NO SPIN\'in \\"Seni Bekleyeceğim\\" şarkısından","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"Ji-Woon\'un \\"Yırtıcı\\"nın klibinde taktığı bilek bandajı. Esas amacı bu olmasa da tasarımı sayesinde bileği birçok tıbbi bandajdan daha iyi dengeliyor.<br><li>Kesik Göstergesi azalmaya başlamadan önce geçen süreyi <b>orta seviyede arttırır</b>.</li>","name":"Yırtıcı Bandaj","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"Kurbanların attığı çığlıkların gayet net duyulabildiği bir ses kaydı. Ji-Woon, bu sesleri popüler şarkılarından birinde kullandı.<br><li>Kurbanların Kesik Göstergesi\'ni <b>orta seviyede azaltır</b>.</li>","name":"Ezgili Cinayet","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"NO SPIN reklamı için sınırlı sayıda üretilmiş bir gazlı içecek. Yüksek miktarda şeker ve kafein içerir.<br><li>İlk fırlatma hızını <b>orta seviyede arttırır</b>.</li>","name":"Baloncuklu Spin Soda","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"Ji-Woon\'un bir kurbanının kesik boynuna sardığı fular. Üstünde gizli cepler var.<br><li>Taşınabilecek azami bıçak sayısını <b>15</b> <b>arttırır</b>.</li><li>Mücadeleye fazladan <b>15</b> bıçak ile başlarsın.</li>","name":"Kanlı Fular","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"Yalnızca hayal gücü yeterince zengin olmayanlar bu özel bıçakların defolu olduğunu söyler. Ji-Woon, gençliğinde yaptığı gösterilerle izleyenleri büyülerdi.<br><li>Bıçaklar, çevredeki nesnelerden iki kez seker. </li><li>Seken darbeler ilave Kan Puanı verir.</li>","name":"Şov Bıçakları","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"Dümenci\'nin çıkış albümü. Şarkıların kaba ve şiddetli tonu eleştirmenlerin beğenisini kazansa da hayranlardan karışık tepkiler aldı.<br><li>Bıçaklar, çevredeki herhangi bir şeye vurduğunda kırılır ve yakındaki Kurbanlara <b>%50 Kesik</b> etkisi uygular.</li>","name":"Dirilişin Sınırı Albümü","flavor":"\\"Kulağıma fısıldadıkların<br>İçimi ısıtıyor<br>Yakıyor her nefeste<br>Soluğum kesilene kadar\\"<br>-Dümenci\'nin \\"Sıcak Fısıltılar\\" şarkısından","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"Ji-Woon\'u takip etme hatasını yapan bir sasaeng hayranın gözlerine oyulmuş kol düğmeleri. Kanı silince ortaya çıkan ışıltıda görülecek o kadar çok şey var ki...<br><li>Bir Kurban\'ın Kesik Göstergesi\'nin azami düzeye ulaşmasına sadece bir bıçak darbesi kaldığında <b>6 saniyeliğine</b> haresi ortaya çıkar.</li>","name":"Elmas Kol Düğmeleri","flavor":"\\"Şşş... Artık kanını görmene gerek yok.\\" -Ji-Woon Hak","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"Ji-Woon gruba katıldıktan sonra NO SPIN\'in yayınladığı ilk parça. Kore listelerine damga vurmuştu.<br><li>Bıçaklar, Kurbanları delip geçer.</li><li>Aynı bıçaktan darbe alan sonraki Kurbanlara, <b>%50 Kesik</b> etkisi uygulanır.</li>","name":"Kalbini Deşeceğim Şarkısı","flavor":"\\"Kalbini yırtıp geçen<br>Aşkıma dur diyemiyorum<br>Nereye gidersen git<br>Seni paramparça edeceğim\\"<br>-NO SPIN\'in \\"Kalbini Deşeceğim\\" şarkısından","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"Sis\'ten yapılmış, cam gibi bir fotoğraf. Ji-Woon gülüyor, gözlerinde holografik bir pırıltı var.<br><li>Kesik Göstergesi\'nin azami düzeye ulaşmasına sadece bir bıçak darbesi kalan Kurbanlar <b>Zayıf</b> durum etkisi altına girer.</li>","name":"Parıltılı Fotokart","flavor":"\\"Adımı haykır, hiç sorun değil. Acının uyandırdığı her şeyi duymak istiyorum...\\" -Ji-Woon Hak","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"Ji-Woon\'un kurbanlarının çıkardığı son seslerden oluşan bir koleksiyon. Plağa kaydedilmiş. Tamamen gerçek duygular içeriyor ve dehşete düşürüyor.<br><li>Bıçakların sebep olduğu Kesik, en az <b>%50</b> olmak üzere hedefe olan yakınlığa göre belirlenir.</li><li>Her bir bıçak darbesi, bıçakların sebep olduğu Kesik etkisini azami <b>%200</b> olmak üzere arttırır.</li><li>Bir bıçak hedefi ıskaladığında, bıçakların sebep olduğu Kesik etkisi başlangıç değerine döner.</li>","name":"Ölüm Sancıları Derlemesi","flavor":"\\"Lütfen, hayır... Canımı yakma... Dayanamıyorum... Ben...\\" -Kimliği Bilinmeyen Bir Ses","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"Tesisi ziyaret edilenlere verilen elektronik bir Umbrella bilekliği. Aynı zamanda da bir takip cihazı.<li>Zombilerin tespit menzilini <b>orta seviyede arttırır</b>.</li>","name":"Ziyaretçi Bilekliği","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"S.T.A.R.S. teşkilatının yakın dövüş eğitimlerini içeren bir kitap. Düzenleyen: Chris Redfield.<li>Bir Kurban\'a vuran zombilerin hareleri <b>6 saniyeliğine</b> sarı olur.</li>","name":"S.T.A.R.S. Yakın Dövüş Kitabı","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"Raccoon City\'yi kasıp kavuran kaosta başına kötü şeyler gelmiş bir tıbbi gereç.<li>Kurbanların Aşı uygulama süresini <b>orta seviyede arttırır</b>.</li><li>Kurbanlar Aşı kullandığında Katil İçgüdüsü\'nün etki süresini <b>biraz arttırır</b>.</li>","name":"Hasarlı Şırınga","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"Raccoon City emniyet müdürü Brian Irons\'ın ince bağırsağı. Zombilerin iştahını açıyor.<li>Zombilerin hareket hızını <b>biraz arttırır</b>.</li>","name":"Brian\'ın Bağırsağı","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"Parçalanmış bir zombinin kalbi. Virüsle dolu olduğu için tehlikeli atık kategorisine giriyor.<li>Dokunaç Darbesi\'yle zombi yok edildiğinde mutasyon oranını <b>orta seviyede arttırır</b>.</li><br>","name":"Zombi Kalbi","flavor":"\\"Bu şeyle konuşarak anlaşamazsın.\\" - Leon S. Kennedy","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"Mikhail\'den geriye pek bir şey kalmasa da sol gözü onu öldüren patlamadan kurtulmayı başardı. Zombiler tadına bakmak için can atıyor.<li>Zombilerin hareket hızını <b>orta seviyede arttırır</b>.</li>","name":"Mikhail\'in Gözü","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"Bir Raccoon City polis memurunun virüs bulaşmış kanı.<li>Kurbanlara Dokunaç Darbesi\'yle vurulduğunda mutasyon oranını <b>orta seviyede arttırır</b>.</li><br>","name":"Marvin\'in Kanı","flavor":"\\"Bilmen gereken tek şey, dikkatli olmazsan buranın seni bir anda yutacağı.\\" - Marvin Branagh","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"Duyuları güçlendiren ve bedeni savaşa hazırlayan bir hormon.<li>Kurbanlar Aşı kullandığında Katil İçgüdüsü\'nün süresini <b>önemli ölçüde arttırır</b>.</li>","name":"Adrenalin İğnesi","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"Tesisteki yetkililerin kullandığı elektronik bir Umbrella bilekliği. Güvenli bölgelere erişim sağlamasının yanında takip cihazı görevi de görüyor.<li>Zombilerin tespit menzilini <b>önemli ölçüde arttırır</b>.</li>","name":"Yetkili Bilekliği","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"Savaşta ölen T-002 Tyrant\'tan alınmış hasarlı bir numune. Ciddi yanık izleri var.<li>Dokunaç Darbesi\'yle zombi yok edildiğinde mutasyon oranını <b>orta seviyede arttırır</b>.<li>Zombilerin yeniden belirme hızını orta seviyede azaltır.","name":"Tyrant Numunesi","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"Umbrella Corporation tarafından üretilen T-Virus örneği. Deneklerde ekstrem mutasyona ve beyin hasarına sebep oluyor.<li>Dokunaç Darbesi\'yle zombi yok edildiğinde mutasyon oranını <b>önemli ölçüde arttırır</b>. ","name":"T-Virus Örneği","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"Gizlilik gerektiğinde kullanıcıyı biraz rahatlatan bir hormon.<li>Bir zombi yok edildiğinde <b>15 saniyeliğine</b> <b>Tespit Edilemez</b> durum etkisi uygulanır.</li>","name":"Serotonin İğnesi","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"T-Virus bulaşmış bir bitkinin birbirine dolanmış kalıntıları. Kendisini geliştiren araştırmacılardan birini öldürmüş.<li>Kurbanların Erzak Kutusu açma süresini <b>önemli ölçüde arttırır</b>.","name":"Plant 43 Sarmaşıkları ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"Dokunduğu her şeye dolanabilen, kavrama gücüne sahip yapışkan bir dil.<li>Virüs Bulaşmış Kurbanların <b>Topal</b> durum etkisinde kalma süresini <b>orta seviyede arttırır</b>.</li><br>","name":"Licker Dili","flavor":"\\"Bir kâbus gibi.\\" —Claire Redfield","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"Nemesis T-Type üretiminde kullanılan bir parazit. Girdiği bedenin beynini ele geçirme gücüne sahip.<li>Virüs Bulaşmış etkisi altındaki Kurbanlara 60 saniyeliğine <b>Bihaber</b> durum etkisi uygulanır.","name":"NE-α Paraziti","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"Yakın zamandaki bir çatışmada üzücü bir şekilde ezilmiş ve kana bulanmış. Buna rağmen insanın dikkatini çeken hoş bir koku yayıyor.<li>Erzak Kutusu açan Kurbanların hareleri <b>12 saniye</b> boyunca görünür olur.</li>","name":"Jill\'in Sandviçi","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"Onları şimdi kim kurtaracak? Bu kurumuş daktilo şeridinde zombileri harekete geçiren bir şey var.<li>Zombilerin tekrar belirme süresini <b>önemli ölçüde azaltır</b>.</li><li>Zombilerin hareket hızını orta seviyede arttırır.</li><li><b>5</b> jeneratör tamir edildiğinde yok edilen tüm zombiler çıkış bölgesinde tekrar belirir.</li><br>","name":"Bitmiş Daktilo Şeridi","flavor":"\\"Haberiniz olsun... Bunu bir daha yapmayacağım.\\" - Jill Valentine","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"Üzerinde bir defne çelengi içinde bir kuş bulunan bir para. İkiye kırılmış.<li>Mücadeleden <b>1</b> Erzak Kutusu eksiltir.</li><br>","name":"Kırık Kurtuluş Parası","flavor":"\\"İlk günümün böyle geçeceğini tahmin etmemiştim.\\" - Leon S. Kennedy","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"Raccoon City için umut sembolü, paramparça olmuş halde.<li>Jeneratör tamir edildikten sonra zombilerin hareket hızını <b>30 saniyeliğine</b> <b>olağanüstü düzeyde arttırır</b>.</li><br>","name":"Parçalanmış S.T.A.R.S. Rozeti","flavor":"\\"S.T.A.R.S...\\" - Nemesis","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"Sis\'ten yapılmış cam benzeri bir rozet. Etik ve insani değerleri hiçe sayan bir şirketi temsil ediyor.<li>Aşı kullanan Kurbanlar <b>12 saniyeliğine</b> <b>Zayıf</b> durum etkisi altına girer.</li><br>","name":"Parıltılı Umbrella Rozeti","flavor":"\\"Sorumluluk, doğruluk ve dürüstlük. Umbrella şirketinin temelinde yatan değerler bunlar.\\" - Dr. Matt Gorkis","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/tr/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/tr/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Vahşet kategorisinde <b>%50</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Tangara Çelengi","flavor":"\\"Kanlı çubuklar ve bağırsaklarla yapılmış bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"Vahşet kategorisinde <b>%75</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Sadık Tangara Çelengi","flavor":"\\"Kanlı çubuklar ve bağırsaklar kullanılarak sevgiyle yapılmış bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"Vahşet kategorisinde <b>%100</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Gayretli Tangara Çelengi","flavor":"\\"Alev alev yanan, ölümsüz bir tutkunun eseri olan ve kanlı çubuklar ile bağırsaklardan yapılmış olan bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"Sinsilik kategorisinde <b>%50</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Kuzgun Çelengi","flavor":"\\"Kararmış dallar ve kömürlerden yapılmış bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"Sinsilik kategorisinde <b>%75</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Sadık Kuzgun Çelengi","flavor":"\\"Kararmış dallar ve kömürler kullanılarak sevgiyle yapılmış bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"Sinsilik kategorisinde <b>%100</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Gayretli Kuzgun Çelengi","flavor":"\\"Alev alev yanan, ölümsüz bir tutkunun eseri olan ve kararmış dallar ile kömürlerden yapılmış olan bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"Av kategorisinde <b>%50</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Benekli Baykuş Çelengi","flavor":"\\"Keskin metaller, halatlar ve tüylerle yapılmış bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"Av kategorisinde <b>%75</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Sadık Benekli Baykuş Çelengi","flavor":"\\"Keskin metaller, halatlar ve tüyler kullanılarak sevgiyle yapılmış bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"Av kategorisinde <b>%100</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Gayretli Benekli Baykuş Çelengi","flavor":"\\"Alev alev yanan, ölümsüz bir tutkunun eseri olan ve keskin metaller, halatlar ile tüylerden yapılmış olan bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"Kurban Etme kategorisinde <b>%50</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Örümcekkuşu Çelengi","flavor":"\\"Çubuklar, ipler ve kemiklerle yapılmış bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"Kurban Etme kategorisinde <b>%75</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Sadık Örümcekkuşu Çelengi","flavor":"\\"Çubuklar, ipler ve kemikler kullanılarak sevgiyle yapılmış bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"Kurban Etme kategorisinde <b>%100</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Gayretli Örümcekkuşu Çelengi","flavor":"\\"Alev alev yanan, ölümsüz bir tutkunun eseri olan ve çubuklar, ipler ile kemiklerden yapılmış olan bu çelenk; daha fazla kan karşılığında Mahluk\'un bereketini çağırıyor.\\"","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"Tüm kategorilerde <b>%25</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Boş Koza","flavor":"\\"İçinde her ne varsa çoktan çıkmış olan, neye ait olduğu bilinmeyen bir koza.\\"","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"Tüm kategorilerde <b>%100</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Kurban Pudingi","flavor":"\\"Epey tuzlu bir puding...\\"","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"<b>2</b> sandığın ortaya çıkmasını engellemesi için Mahluk\'u çağırır.<br><li>Etkisi birikir.</li>","name":"Kesik Para","flavor":"\\"Kalın, metalik bir paranın iki yarısı.\\"","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"<b>1</b> sandığın ortaya çıkmasını engellemesi için Mahluk\'u çağırır.<br><li>Etkisi birikir.</li>","name":"Çizik Para","flavor":"\\"Üstü çizilmiş, nereye ait olduğu bilinmeyen bir para.\\"","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"Haritadaki kurban kancalarını arasındaki <b>mesafeyi</b> <b>biraz azaltması</b> için Mahluk\'u çağırır.<br><li>Etkisi birikir.</li>","name":"Küflü Meşe","flavor":"\\"Her yeri küflenmiş, eski ve çürümekte olan bir meşe ağacı parçası.\\"","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"Haritadaki kurban kancalarını arasındaki <b>mesafeyi</b> <b>orta seviyede azaltması</b> için Mahluk\'u çağırır.<br><li>Etkisi birikir.</li>","name":"Çürük Meşe","flavor":"\\"Üzerinde garip işaretler olan ve çürüyen bir meşe parçası.\\"","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"Haritadaki kurban kancalarını arasındaki <b>mesafeyi</b> <b>önemli ölçüde azaltması</b> için Mahluk\'u çağırır.<br><li>Etkisi birikir.</li>","name":"İğrenç Meşe","flavor":"\\"İçinden siyah iğrenç bir sıvının aktığı mahvolmuş bir meşe parçası.\\"","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"Bir sonraki mücadelede <b>son Kurban\'ı</b> kendi ellerinle öldürebilmeni sağlar.<br><li>Gizli.</li>","name":"Servi Memento Mori","flavor":"\\"İyi iş çıkardın. Sonuncusu senin.\\"","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"Bir sonraki mücadelede <b>ikinci kez kancaya astığın</b> <b>bir Kurban\'ı</b> kendi ellerinle öldürebilmeni sağlar.<li>Gizli.</li>","name":"Fildişi Memento Mori","flavor":"\\"Aralarından birini öldürmeme izin ver.\\"","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"Bir sonraki mücadelede <b>ikinci kez kancaya astığın</b> <b>bütün Kurbanları</b> kendi ellerinle öldürebilmeni sağlar.<li>Gizli.</li>","name":"Abanoz Memento Mori","flavor":"\\"Yaratıkla konuştuğuna yemin edebilirim. Aniden durdu, sanki hışırdayan yaprakları dinliyordu, sonra da... sırıtmaya başladı.\\"","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"Tüm Kurbanlar mücadeleye ayrı yerlerde başlar.<br><li>Gizli.</li>","name":"Ayırma Pelerini","flavor":"\\"Püskül püskül olmuş, ince ve siyah bir örtü.\\"","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/tr/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/tr/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Kişinin hare okuma becerisini artırır. Tam olarak onarılan her jeneratör, <span class=\\"Highlight1\\">{0} metre</span> yakınındaki Kurbanları <span class=\\"Highlight2\\">{1} saniyeliğine</span> açığa çıkarır.<br>Son jeneratör de tam olarak onarıldığında bütün Kurbanların haresi <span class=\\"Highlight3\\">{2} saniyeliğine</span> görünür.","name":"Motor Uğultusu","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"Kişinin hare okuma becerisini artırır. <span class=\\"Highlight1\\">{0} metre</span> yakındaki can çekişen Kurbanların haresini açığa çıkarır.","name":"Av Peşinde","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"Dehşete düşüren duruşun inanılmaz mesafelere ulaşıyor. Dehşet Alanı\'n <span class=\\"Highlight1\\">%{0}</span> daha fazla genişler. Sinsilik kategorisindeki eylemler için <span class=\\"Highlight2\\">%{1}</span> daha fazla Kan Puanı kazanırsın.","name":"Istırap","flavor":"\\"Korkularının tadını çıkar.\\"","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"Saklanma becerisini açar.<br><br><span class=\\"Highlight1\\">{0} saniyeliğine</span> sabit kalmak, hareket edene veya eylem gerçekleştirene kadar <b>Tespit Edilemez</b> durum etkisi kazandırır.","name":"Sinsi","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"Umutla beslenen bir efsun. Kurbanlar kaçmak üzereyken efsun toteminden güç alırsın.<br>Çıkış Kapılarına güç verildiğinde haritada Sönük Totem varsa, ona efsun uygulanır.</br><br>Efsun etkinken <li>Kurbanlara <b><i>Zayıf</i></b> durum etkisi uygulanır.</li><li>Hareket hızın <span class=\\"Highlight1\\">%{0}</span> artar.</li><br>Efsun etkileri, ilgili efsun totemi sağlam kaldığı sürece uygulanır.<br>","name":"Efsun: Ecelden Kaçış Yok","flavor":"\\"Canavar öyle hızlı ve güçlü gelmeye başladı ki Mahluk\'un kırbacı sırtında sanırdınız.\\"","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"Umutla beslenen bir efsun. Kurbanların boş umutları seni heyecanlandırıyor ve totemlerini güçlendiriyor. Haritadaki her Sönük Totem ve Efsun Totemi için bir nişan kazanırsın. <br><li>Av Köpeği kategorisindeki her eylem için nişan başına <span class=\\"Highlight1\\">%{0}</span> daha fazla Kan Puanı kazanırsın.</li><li>Kurbanların temizleme hızı her nişan başına <span class=\\"Highlight2\\">%{1}</span> azalır.</li><li>Biri efsun totemi üzerinde çalışmaya başladığında bildirim alırsın.</li><br><i>Efsun etkileri, ilgili efsun totemi sağlam kaldığı sürece uygulanır.</i>","name":"Efsun: Av Heyecanı","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"Mahzendeki kancalara yaptığın ihtiyatlı bakım Mahluk\'un ilgisini çekiyor. Mahzen kancaları şu bonusları sağlar:<br><li><span class=\\"Highlight1\\">%{0}</span> daha hızlı Mahluk ilerlemesi.</li><li><span class=\\"Highlight2\\">%{1}</span> daha zor kaçma teşebbüsü.</li><li>Başarısız kaçma teşebbüslerine <span class=\\"Highlight3\\">%{2}</span> daha fazla ceza.</li>","name":"Korkunç Mabet","flavor":"\\"Artık kaçış olmadığını fark edeceksin. Derinliklerde asılı kaldığında karanlık olanla yüzleşeceksin.\\"","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"<span class=\\"Highlight\\">{0}</span><span class=\\"Highlight\\">{1}</span><span class=\\"Highlight\\">{2}</span>","name":"Kanlı Kasap","tiers":[["Kanlarını nasıl akıtacağını biliyorsun. Başarılı <i>normal saldırılarla</i> açılan yaralar, <b>Ağır Yaralı</b> ve <b>Kan Kaybı</b> durum etkilerine sebep olur. <b>Kan Kaybı</b>, Kurbanların kan kaybetme sıklığını ","biraz"," arttırır.<br>Kurban sağlığına kavuştuğunda <i>Kanlı Kasap</i>\'ın yol açtığı <b>Kan Kaybı</b> etkisi yok olur.<br><span class=\\"FlavorText\\">\\"Sadistin teki. Acı çektiğimizi görmek hoşuna gittiği için hemen öldürmüyor.\\"</span>"],["Kanlarını nasıl akıtacağını biliyorsun. Başarılı <i>normal saldırılarla</i> açılan yaralar, <b>Ağır Yaralı</b> ve <b>Kan Kaybı</b> durum etkilerine sebep olur. <b>Kan Kaybı</b>, Kurbanların kan kaybetme sıklığını <span class=\\"Highlight1\\">orta seviyede</span> arttırır.<br>Kurban sağlığına kavuştuğunda <i>Kanlı Kasap</i>\'ın yol açtığı <b>Kan Kaybı</b> etkisi yok olur.<br><span class=\\"FlavorText\\">\\"Sadistin teki. Acı çektiğimizi görmek hoşuna gittiği için hemen öldürmüyor.\\"</span>","",""],["Kanlarını nasıl akıtacağını biliyorsun. Başarılı <i>normal saldırılarla</i> açılan yaralar, <b>Ağır Yaralı</b> ve <b>Kan Kaybı</b> durum etkilerine sebep olur. <b>Kan Kaybı</b>, Kurbanların kan kaybetme sıklığını <span class=\\"Highlight1\\">önemli ölçüde</span> arttırır.<br>Kurban sağlığına kavuştuğunda <i>Kanlı Kasap</i>\'ın yol açtığı <b>Kan Kaybı</b> etkisi yok olur.<br><span class=\\"FlavorText\\">\\"Sadistin teki. Acı çektiğimizi görmek hoşuna gittiği için hemen öldürmüyor.\\"</span>","",""]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"Çevredeki kargalar seninle doğrudan iletişim kuruyor. <span class=\\"Highlight2\\">{1} metre</span> mesafede öten kargalar <span class=\\"Highlight1\\">%{0}</span> oranla sana görsel işaretler sunar.<br><i>Gölgelerin Casusları</i> <span class=\\"Highlight3\\">{2} saniye</span> bekleme süresine sahiptir. ","name":"Gölgelerin Casusları","flavor":"\\"Gölgelerde geziyorlar, çığlıkları zihnimizi ele geçiriyor.\\"","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"Ana silahınla yaptığın başarısız saldırıların ardından daha hızlı toparlanırsın. Başarısız <i>normal saldırılardan</i> sonraki bekleme süresi <span class=\\"Highlight1\\">%{0}</span> azalır.","name":"Amansız","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"Mahluk\'un söylediklerini az çok anlayabiliyorsun. Bir Kurban\'ın <span class=\\"Highlight1\\">{0} metre</span> yakınındayken Mahluk\'un gelişigüzel fısıltısını duyarsın.","name":"Fısıltılar","flavor":"\\"Sis\'in amacı kadar belirsiz ama canavarın tarafını tuttuğu kesin.\\" -Not Defteri","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"Avının nefes alışına aşırı duyarlısın. Acı içindeki Kurbanların nefesi <span class=\\"Highlight1\\">%{0}</span>, Kurbanların normal nefesi ise <span class=\\"Highlight2\\">%{1}</span> daha yüksek duyulur.","name":"Hırıltı","flavor":"\\"Dur da nefeslen... Yoksa o gelir, nefesini hepten keser.\\"","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"Mutlak ölümlülük karşısında cesaretleri kırılıyor.<br>Her yaralı, can çekişen veya kancaya asılmış Kurban için bütün Kurbanlar, en fazla <span class=\\"Highlight1\\">%{1}</span> olacak şekilde tamir, sabotaj ve totem temizleme hızlarına <span class=\\"Highlight1\\">%{0}</span> ceza alırlar.","name":"Ecel Korkusu","flavor":"\\"Bizimle oynuyor, acımızdan zevk alıyor.\\"","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"Kişinin hare okuma becerisini artırır. <span class=\\"Highlight1\\">{0} metre</span> yakınındaki iyileştirilen veya kendini iyileştiren Kurbanların haresi sana görünür.","name":"Hemşirelik İçgüdüsü","flavor":"\\"Hâlâ geçmişin izlerini taşıyor, yardıma muhtaçların çağrısına koşuyor.\\"","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"Varlığın çevreye büyük bir korku salıyor. Dehşet Alanı\'ndaki Kurbanlar tamir ve iyileştirme esnasında <span class=\\"Highlight1\\">%{0}</span> ihtimalle daha fazla Beceri Denemesi\'yle karşılaşır. Tetiklenen Beceri Denemelerinin başarı alanlarını <span class=\\"Highlight2\\">%{1}</span> azaltır.","name":"Umut Kırıcı","flavor":"\\"Varlığı bedenimizi bürüdü.\\"","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"Kuvvetin sayesinde avının savunmasını yıkıp geçebiliyorsun. Düşürülen <b>paletleri, yıkılabilir duvarları ve jeneratörleri</b> <span class=\\"Highlight1\\">%{0}</span> daha hızlı yok et.","name":"Hayvani Güç","flavor":"\\"Kuvveti kasla sınırlı değil. Canavarın arkasında karanlık bir güç var.\\"","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"Avını kancaya asmak sana inanılmaz bir haz veriyor. Sırtlandığın bedenleri taşırken hareket hızın <span class=\\"Highlight1\\">%{0}</span> artar. Beden taşırken Dehşet Alanı\'n <span class=\\"Highlight2\\">{1} metre</span> büyür.","name":"Kanca Kararınca","flavor":"\\"Bir noktada, bizden birini kancaya takmanın verdiği haz öldürmekten öteye geçmişti.\\"","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"<span class=\\"Highlight\\">{0}</span><span class=\\"Highlight\\">{1}</span><span class=\\"Highlight\\">{2}</span>","name":"Yırtıcı","tiers":[["Üstün iz sürme becerilerin Kurbanların bıraktığı izleri takip etmeni sağlıyor.<br>Kurbanların çizikleri birbirine ","biraz"," daha yakın çıkar.<br><span class=\\"FlavorText\\">\\"Asla durma ve canavardan iki adım önde olduğunu umut et.\\" -Not Defteri</span>"],["Üstün iz sürme becerilerin Kurbanların bıraktığı izleri takip etmeni sağlıyor.<br>Kurbanların çizikleri birbirine <span class=\\"Highlight1\\">orta seviyede</span> daha yakın çıkar.<br><span class=\\"FlavorText\\">\\"Asla durma ve canavardan iki adım önde olduğunu umut et.\\" -Not Defteri</span>","",""],["Üstün iz sürme becerilerin Kurbanların bıraktığı izleri takip etmeni sağlıyor.<br>Kurbanların çizikleri birbirine <span class=\\"Highlight1\\">önemli ölçüde</span> daha yakın çıkar.<br><span class=\\"FlavorText\\">\\"Asla durma ve canavardan iki adım önde olduğunu umut et.\\" -Not Defteri</span>","",""]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"Tıpkı av peşindeki bir tazı gibi uzak mesafelerden bile kan kokusunu alıyorsun. Taze kan izleri <span class=\\"Highlight1\\">önemli ölçüde</span> göze çarpar ve normalden <span class=\\"Highlight2\\">{0} saniye</span> daha uzun süre takip edilebilir.","name":"Kan Tazısı","flavor":"\\"Ay ışığı tatlı tatlı vuruyor, ömrüm takibi kolay bu yolda geçiyor.\\"","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"Gecenin karanlığında gözlerin iyi görüyor. Görüş alanın normalden <span class=\\"Highlight2\\">{0} derece</span> daha geniş.<br><i>Diğer görüş alanı yükseltmeleriyle birleşmez.</i>","name":"Kedi Göz","flavor":"\\"Zifiri karanlıkta parıl parıl... Gözleri geceyi delip ruhunu deşiyor.\\"","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"Acı eşiğin yüksek. <b>Palet Sersemletmelerinin</b> süresini <span class=\\"Highlight1\\">%{0}</span> düşürüyorsun.","name":"Dayanıklı","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"Işığa Sis\'in diğer yaratıklarından daha alışıksın. El fenerleri, maytaplar, ses bombaları ve tuzak mayınlar seni Körlük etkisine sokmaz. Seni kör etmeye çalışan Kurbanların haresi <span class=\\"Highlight1\\">{0} saniyeliğine</span> görünür olur.","name":"Işığa Alışkın","flavor":"\\"Bu canavarlar... alışmaya başladı! Yepyeni beceriler geliştiriyorlar.\\" -Vigo\'nun Günlüğü","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"Jeneratör tamiri <span class=\\"Highlight1\\">%{0}</span> oranına ulaştığında yüksek sesli bir bildirim alırsın ve <span class=\\"Highlight2\\">{2} saniyeliğine</span> <b>Tespit Edilemez</b> durum etkisi kazanırsın.","name":"Lehimci","flavor":"\\"Dağ Adamı ıvır zıvırla inanılmaz cihazlar yapıyor. Hepsi de bizi sakatlamaya yönelik...\\" -Not Defteri","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"Bir Kurban\'ı <b>saplantı</b> haline getirirsin.<br>Saplantı haricindeki Kurbanlara yaptığın her başarılı <i>normal saldırı</i> için bir nişan kazanırsın.<br>Her Nişan, <span class=\\"Highlight1\\">%{0}</span> birikebilir başarılı <i>normal saldırı</i> bekleme süresi azalması sağlar ve en fazla <span class=\\"Highlight2\\">{1}</span> nişan kazanabilirsin.<br>Saplantı\'na <i>normal saldırıyla</i> vurduğunda ise <span class=\\"Highlight3\\">{2}</span> nişan kaybedersin. <br>Saplantı\'n kurban edilir veya öldürülürse daha fazla nişan kazanamazsın.<br><li><i>Katil tek seferde yalnızca bir Kurban\'ı <b>saplantı</b> haline getirebilir.</i></li>","name":"En Güzeli En Sona","flavor":"\\"Küçük kasabana ecel uğradı, şerif.\\" -Dr. Sam Loomis","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"Bir Kurban\'ı <b>saplantı</b> haline getirirsin.<br>Saplantını her kovaladığında ve elinden kaçırdığında bir nişan kazanırsın (en fazla {0} nişan).<br>Her nişan hareket hızını <span class=\\"Highlight1\\">%{1}</span> arttırır.<br><i>Normal saldırı</i> veya <i>Özel Saldırı</i> yapmak bir nişanı harcar.<br><li><i>Katil tek seferde yalnızca bir Kurban\'ı <b>saplantı</b> haline getirebilir.</i></li>","name":"Yemeğinle Oyna","flavor":"\\"Kandırdın onları, değil mi Michael? Ama beni kandıramazsın.\\" -Dr. Sam Loomis","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"Bir Kurban\'ı <b>saplantı</b> haline getirirsin.<br>Saplantı\'n diğer Kurbanları kancadan kurtarma ve iyileştirme eylemleri için <span class=\\"Highlight1\\">%{0}</span> eylem hızı bonusu alır.<br>Saplantı\'n hayattaysa, kancaya geçirdiğin Saplantı\'n olmayan her kurban için bir nişan kazanırsın.<br>Saplantı\'n hayattaysa, Saplantı\'n olmayan tüm Kurbanların Tamir, İyileştirme ve Sabotaj hızları sahip olduğun her nişan için <span class=\\"Highlight2\\">%{1}</span> yavaşlar.<br><li><i>Katil, maç başına yalnızca bir Kurban\'ı Saplantı\'sı haline getirebilir.</i></li>","name":"Işık Sönüyor","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"Kişinin hare okuma becerisini engelleyen bir efsun. Efsun totemi etkinken bir Kurban\'a <i>normal saldırınla</i> vurmak <b>Körlük</b> durum etkisi uygular. Bu etki hasar verilen son <span class=\\"Highlight1\\">{0}</span> Kurban\'a uygulanır.<br><i>Efsun etkileri, ilgili efsun totemi sağlam kaldığı sürece uygulanır.</i>","name":"Efsun: Üçüncü Mühür","flavor":"\\"Tenine temas etti, cadının işareti üstünde!\\"","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"Tüm Kurbanların jeneratör tamir sürecini etkileyen bir efsun. Tüm jeneratörler <i>Efsun: Yıkım</i>\'dan etkilenir. Bir jeneratörü hiçbir Kurban tamir etmiyorsa, jeneratör hemen ve otomatik olarak normal gerileme hızının <span class=\\"Highlight1\\">%{0}</span> kadarı oranında geriler.<br><br><i>Efsun etkileri, ilgili efsun totemi sağlam kaldığı sürece uygulanır.</i><br>","name":"Efsun: Yıkım","flavor":"\\"Üstündeki lanet seni mahvedecek, sonun olacak.\\"","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"Umutla beslenen bir efsun. Kurbanların boş umutları açlığını körüklüyor. Bir Kurban en az <span class=\\"Highlight1\\">24 metre</span> uzakta kancadan kurtarıldığında Umut Yiyen bir nişan kazanır.<br><li><span class=\\"Highlight3\\">2 Nişan</span>: Bir Kurban\'ı kancaya astıktan <span class=\\"Highlight3\\">10 saniye</span> sonra, <span class=\\"Highlight3\\">10 saniyeliğine</span> <span class=\\"Highlight2\\">%{0} </span><b><i>Sürat</i></b> durum etkisi kazanırsın.</li><li><span class=\\"Highlight3\\">3 Nişan</span>: Kurbanlara <b><i>Zayıf</i></b> durum etkisi uygulanır.</li><li><span class=\\"Highlight2\\">5 Nişan</span>: Kurbanları kendi ellerinle öldürebilme yetisi kazanırsın.</li><br><i>Efsun etkileri, ilgili efsun totemi sağlam kaldığı sürece uygulanır.</i><br>","name":"Efsun: Umut Yiyen","flavor":"\\"Hiçbir şey yapmazsan ölümlerinde pay sahibisin demektir. Onları kurtarırsan da açlığı büyür.\\"","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"Varlığın çevreye büyük bir korku salıyor. Dehşet Alanı\'ndaki Kurbanların verimliliği azalır.<br>Etkilenen Kurbanların eşya tüketim oranı <span class=\\"Highlight1\\">%{0}</span> artar.","name":"Baskın Kişilik","flavor":"\\"Siktir! Sargı bezini düşürdüm!\\"","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"Yaklaşımın temkinli, etkileşimin dehşetli.<br>Kovalama esnasında Dehşet Alanı\'n <span class=\\"Highlight1\\">{0} metre</span> büyür. Diğer zamanlarda ise Dehşet Alanı\'n <span class=\\"Highlight2\\">{0} metre</span> daha küçüktür ve görüş alanın <span class=\\"Highlight3\\">{1} derece</span> artar.<br><i>Görüş alanı kazanımı birikmez.</i>","name":"Yanlış Teşhis","flavor":"\\"İğneden kaçma, acımayacak söz!\\" -Doktor","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"İlerleme kaydetmek için nefretinden güç alıyorsun.<br>Bir jeneratöre Güç Patlaması yapmak için <b>Jeneratöre Hasar Ver</b> eylemini gerçekleştir. O jeneratörle etkileşime geçecek sonraki Kurban <span class=\\"Highlight1\\">olağanüstü düzeyde</span> zor bir Beceri Denemesi\'yle karşılaşır. Beceri Denemesi\'nde başarısız olmak ilave <span class=\\"Highlight2\\">%{0}</span> ilerleme kaybına yol açar.<br>Beceri Denemesi başarıyla geçilirse hiçbir ilerleme kaydedilmez, sadece jeneratörün patlaması engellenir.","name":"Güç Patlaması","flavor":"\\"Bu bir tuzak. Ama yine de denenmesi gerek...\\" -Doktor","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"Öldürme arzun öyle kuvvetli ki Mahluk\'la olan bağın bir anlığına kopuyor ve seni tahmin edilemez bir hale sokuyor.<br><br>Kan Hırsı 1. Aşama\'ya geldiğinde <b>Tespit Edilemez</b> durum etkisine sahip olursun. Kan Hırsı\'nı kaybettiğinde durum etkisi de kaybolur.<br><br><li>Av Köpeği kategorisindeki eylemler için <span class=\\"Highlight1\\">%{0}</span> daha fazla Kan Puanı kazanırsın.</li>","name":"Av Tutkusu","flavor":"\\"Nereye gitti?\\"","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"Kişinin hare okuma becerisini artırır. Mahzen girişinden <span class=\\"Highlight2\\">{1} metre</span> daha uzaktaysan mahzene giren Kurbanların hareleri <span class=\\"Highlight1\\">{0} saniyeliğine</span> sana görünür.<br><i>Sahipli Bölge</i> yalnızca <span class=\\"Highlight3\\">{2} saniyede</span> bir tetiklenir.","name":"Sahipli Bölge","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"Çaresizlikle beslenen bir efsun. Mırıldandığın huşu dolu, karşı konulamaz şarkı; avının ilgisini sana kaydırıyor. Kurbanlar tamir ve iyileştirme sırasında Beceri Denemesi\'ni tutturamadığında <span class=\\"Highlight1\\">%{0}</span> gerileme cezasına çarptırılır.<br>Kancaya her Kurban asıldığında Avcı\'nın Ninnisi güçlenir:<br><li><b>1 ila 4 Nişan:</b> Beceri Denemesi uyarı sesi ile Beceri Denemesi arasındaki süre kısalır.</li><li><b>5 Nişan:</b> Beceri Denemesi uyarısı kalkar.</li><br><i>Efsun etkileri, ilgili efsun totemi sağlam kaldığı sürece uygulanır.</i>","name":"Efsun: Avcı\'nın Ninnisi","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"Acımasız saldırılarının yol açtığı travma, yardım çağrısı göndermeyi son derece güç kılıyor.<br>Normal saldırılarınla can çekişme durumuna giren Kurbanların hareleri, <span class=\\"Highlight1\\">{2} metrelik</span> alanın dışındaki diğer Kurbanlara görünmez.<br>Normal saldırılarınla can çekişme durumuna giren Kurbanlar <span class=\\"Highlight3\\">{0} saniyeliğine</span> <span class=\\"Highlight2\\">%{1} daha yavaş</span> sürünür.<br>Bu süre boyunca Kurbanlar <b>Körlük</b> durum etkisi altına girer.","name":"Süründür","flavor":"\\"O silah işe yaramaz. Eski yolları deneyelim... Mesela balyoz! Gördün mü, böyle daha iyi. Daha güzel ölüyorlar.\\" -Nubbins Sawyer","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"Mahluk\'la kurulan derin bağ sayesinde hare okuma yeteneği artar. Bir Kurban kancaya asıldığında, kancadan <span class=\\"Highlight2\\">{1} metre</span> uzakta olan diğer tüm Kurbanların haresi <span class=\\"Highlight1\\">{0} saniyeliğine</span> görünür.<br><li>Her Kurban\'ın ilk kez kancaya asılışı için <span class=\\"Highlight3\\">%{2}</span> Kan Puanı bonusu alırsın. Bu etki birikir (en fazla <span class=\\"Highlight4\\">%{3}</span> kazanım).<br>Bonus Kan Puanları yalnızca mücadele sonrasında verilir.</li>","name":"Mangal ve Piknik","flavor":"\\"Öldürmekten zevk alıyorum, elimde değil. Yapmadan duramadığın şeyler vardır. Hoşuna gitse de gitmese de...\\" -Drayton Sawyer","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"Vahşi saldırıların Kurbanlara isabet ettiği anda ellerinde ne varsa düşürüyor. Düşen eşya yere çarptıktan sonra <span class=\\"Highlight1\\">{0} saniye</span> içinde geri alınmazsa Mahluk tarafından tüketilir.<br>Yerde bulunan <span class=\\"Highlight2\\">{1} metrelik</span> bir alandaki tüm eşyaları beyaz bir hareyle açığa çıkar. Yerdeki eşyaların haresi Mahluk tarafından tüketilmeden önce gittikçe kırmızıya dönüşür.","name":"Franklin\'in Sonu","flavor":"\\"Sally, bir ses duydum. Dur! Dur!\\" -Franklin","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"Avını kaybetme baskısı seni öfkelendiriyor ve tarif edilemez bir motivasyon sağlıyor. Kurbanlar jeneratörleri her tamir ettiklerinde Ver Gazı güçlenir.<br><li>Tamamlanan her jeneratör için mücadelenin geri kalan kısmında; kaldırma, bırakma, atlama, jeneratör bozma ve palet kırma hızları <span class=\\"Highlight1\\">%{0}</span> artar ve bu etki birikir.</li>","name":"Ver Gazı","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"Bir Kurban\'ı <b>saplantı</b> haline getirirsin. Saplantı\'na <i>normal saldırınla</i> her vurduğunda Çıkış Kapılarının açılma süresi <span class=\\"Highlight1\\">{0} saniye</span> artar (en fazla <span class=\\"Highlight2\\">{1} saniye</span> ilave süre).<br>Saplantı <i>Hatırla Beni</i>\'den etkilenmez.<br><li><i>Katil tek seferde yalnızca bir Kurban\'ı <b>saplantı</b> haline getirebilir.</i></li>","name":"Hatırla Beni","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"Çıkış Kapısı açılır açılmaz Kan Bekçisi devreye girer. Çıkış bölgelerindeki tüm Kurbanların haresini görürsün.<br>Kan Bekçisi etkinken bir Kurban\'ı kancaya asmak, maç başına bir kez Mahluk\'u devreye sokar ve Mahluk iki Çıkışı da tüm Kurbanlara <span class=\\"Highlight1\\">{0} saniyeliğine</span> kapatır.","name":"Kan Bekçisi","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"Maharetli eklemelerin sayesinde kancaların kurcalandığında farkına varırsın.<br><li>Bir Kurban kancalarını sabote etmeye başladığında bildirim alırsın.</li><li>Bir Kurban\'ı taşırken, bir kancanın çevresinde <span class=\\"Highlight1\\">{0} metre</span> mesafede olan her Kurban\'ın haresini görürsün.</li>","name":"Adam Asmaca","flavor":"\\"Mazeret yok, ima yok... Ağlamak yok.\\" -Amanda Young","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"Kişinin hare okuma becerisini artırır. Gerileyen tüm jeneratörler beyaz bir hareyle görünür. Jeneratördeki gerileme duraksarsa bu durum, <span class=\\"Highlight1\\">{0} saniyeliğine</span> sarı bir hareyle belirtilir.<br>Jeneratör tamiratlarının çıkardığı ses ilave <span class=\\"Highlight2\\">{1} metre</span> öteden duyulur.","name":"Gözetim","flavor":"\\"Uslu duracak mısın?\\" -Amanda Young","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"Bir Kurban, başkasını senden en az <span class=\\"Highlight1\\">{0} metre</span> uzakta kancadan kurtardığında <i>Kararını Ver</i> kurtaran kişinin çığlık atmasına neden olur ve ona <span class=\\"Highlight2\\">{1} saniyeliğine</span> <b><i>Zayıf</i></b> durum etkisi uygular.<br><i>Kararını Ver</i>\'in <span class=\\"Highlight3\\">{2} saniyelik</span> bekleme süresi bulunur. ","name":"Kararını Ver","flavor":"\\"Hayat kurtarmanın ne çok yolu var bir bilsen...\\" -Amanda Young","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"Güçlü kavrayışın, Kurbanların elinden kaçışını neredeyse imkânsız kılıyor. Kurban\'ın debelenme etkisi <span class=\\"Highlight1\\">%{0}</span> azalır. Elinden kurtulmak için gereken debelenme süresi <span class=\\"Highlight2\\">%{1}</span> artar.","name":"Tuttuğunu Kopar","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"Varlığın çevreye büyük bir korku salıyor. Dehşet Alanı\'ndaki Kurbanlar <span class=\\"Highlight1\\">%{0}</span> daha yavaş iyileşme cezasına çarptırılır.<br>","name":"Palyaço Korkusu","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"Mahluk\'la kurduğun derin bağ yüce bir güç sağlıyor. Bir Kurban\'ı kancaya astıktan sonra hasar verdiğin jeneratörün ilerlemesi derhal <span class=\\"Highlight1\\">%{0}</span> kaybolur. Normal jeneratör gerilemesi ise Jeneratöre Hasar Ver eyleminden sonra uygulanır.<br><i>Çanak Çömlek Patladı</i>, Kurban kancaya asıldıktan sonra <span class=\\"Highlight1\\">{1} saniye</span> etkindir.","name":"Çanak Çömlek Patladı","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"Atlama hızın <span class=\\"Highlight1\\">%{0}</span> artar.<br>Atlama eyleminde bulunduğunda, Mahluk atlanan noktayı <span class=\\"Highlight1\\">{1} saniyeliğine</span> kapatır.<br>Bu şekilde aynı anda yalnızca 1 atlama noktası kapatılabilir. Atlama noktası yalnızca Kurbanlara kapatılır. <br>Paletleri etkilemez.","name":"Kandırıkçı","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"Kırdığın her palet Mahluk\'un hiddetini güçlendiriyor.<br><span class=\\"Highlight1\\">{0} tane</span> palet kırmanın ardından bir paletle sersemletildiğinde Mahluk o paleti derhal kırar.<br>Sersemletme etkisi cezasına yine de maruz kalırsın.","name":"Ruh Öfkesi","flavor":"\\"Hiddet kanında var.\\"","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"Mücadelede iki adet tuzaklı efsun totemi çıkar.<br>İki tuzaklı efsun toteminden herhangi biri bir Kurban tarafından temizlenirse, Kurban\'a <span class=\\"Highlight1\\">{0} saniyeliğine</span> <span class=\\"Highlight3\\">Zayıf durum etkisi</span> uygulanır.<br>Diğer tuzaklı efsun totemi derhal Sönük Totem\'e dönüşür.<br>","name":"Efsun: Bölgeye Musallat","flavor":"\\"Yuvası mahvoldu.\\"","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"Özel bir Kurban\'ı <b>saplantı</b> haline getirirsin.<br>Her jeneratör tamamlanışında saplantın (bir Kurban) <span class=\\"Highlight1\\">{0} saniyeliğine</span> hareni görür.<br>Her jeneratör tamamlanışında bütün Kurbanların yeri <span class=\\"Highlight2\\">{1} saniyeliğine</span> sana görünür.<br>Bütün jeneratörler tamamlandığında saplantın <span class=\\"Highlight3\\">Zayıf</span> durum etkisi alır ve saplantını <span class=\\"Highlight3\\">öldürebilirsin</span>.<br><li><i>Katil tek seferde yalnızca bir Kurban\'ı saplantı haline getirebilir.</i></li>","name":"Garez","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"<span class=\\"Highlight1\\">{0} metrelik</span> alan içinde iki ya da daha fazla Kurban tarafından tamir edilen jeneratörler, sarı bir hareyle gösterilir. Jeneratör ilk kez işaretlendiğinde Uyumsuzluk, jeneratör üzerinden yüksek sesli bir uyarıyı tetikler. Jeneratör menzilden çıktığında veya artık iki ya da daha fazla Kurban tarafından tamir edilmediğinde hare <span class=\\"Highlight2\\">4 saniye</span> daha kalır.<br>","name":"Uyumsuzluk","flavor":"\\"Çok bilmişler ölür gider. Gitsinler de zaten.\\" -Çete","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"Bir Kurban taşırken kaçırdığın <i>normal saldırılar</i> için bekleme süresine girmezsin ve başka bir Kurban\'a başarılı bir <i>normal saldırı</i> yaptığında taşıdığın Kurban\'ın çırpınma göstergesi <span class=\\"Highlight1\\">{0} saniyeliğine</span> donar.<br>","name":"Deli Kuvveti","flavor":"\\"Artık kurtulamazsın. Biz fazla iyiyiz.\\" -Çete","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"Dolapları <span class=\\"Highlight1\\">%{0}</span> daha hızlı açarsın.<br><br>Dolaptan çıkan Kurbanlar <span class=\\"Highlight1\\">{2} saniyeliğine</span> Zayıf durum etkisine maruz kalır ve çığlık atar. Bunun sonucunda yerleri <span class=\\"Highlight1\\">{1} saniyeliğine</span> açığa çıkar.<br>","name":"Çivili Tabut","flavor":"\\"Burası korkaklara göre bir yer değil.\\" -Çete","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"Duaların karanlık bir gücü açığa çıkararak Kurbanların sağ kalma ihtimalini etkiliyor. Mücadele başladığında, sana en uzak <span class=\\"Highlight1\\">{0} jeneratör</span> Mahluk tarafından <span class=\\"Highlight1\\">{1} saniyeliğine</span> engellenir.<br>Bu süre zarfında Kurbanlar söz konusu jeneratörleri tamir edemez. Etkilenen jeneratörler, beyaz hareyle gösterilir.<br>","name":"Yoz Müdahale","flavor":"\\"Dört bucak duysun, İlahlar inançsızları lanetliyor.\\" (Adiris Yazıtı, 3.7.)","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"İnançsızların çığlıkları kalbini hoplatıyor.<br>Bir Kurban can çekişme durumuna getirildiğinde senin Dehşet Alanı\'ndaki diğer Kurbanlar çığlık atar ve nerede oldukları <span class=\\"Highlight1\\">{0} saniye</span> boyunca sana görünür.","name":"Bulaşıcı Dehşet","flavor":"\\"Korku, düşenlere ağlayan imansızların kalbini sarıyor.\\" (Övgü İlahisi, 11. 4)","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"Açığa çıkan Güçlerin, gittikçe bölgeye yayılan bir panik dalgası doğurur.<br><br>Bir Kurban\'ı saplantı haline getirirsin. Saplantı\'ya <i>normal saldırıyla</i> vurmak Dehşet Alanı\'nı <span class=\\"Highlight2\\">{1} saniyeliğine</span> Saplantı\'ya verir ve menzili <span class=\\"Highlight1\\">{0} metre</span> yapar. Bu süre zarfında <b>Tespit Edilemez</b> durum etkisi kazanırsın.<br><br>Dehşet Alanı\'nı verdiğin Kurban da süre boyunca kendi yaydığı Dehşet Alanı içinde sayılır.<br><br><li><i>Katil bir seferde yalnızca bir Kurban\'ı <b>saplantı</b> haline getirebilir.</i></li><br>","name":"Kara Bağlılık","flavor":"\\"O aykırıyı, inanmayanı dehşet sarar; sanır ki hâlâ peşindeyim, geliyorum.\\" (Adiris Yazıtı, 48.9)","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"Keskin duyuların Mahluk\'un karanlık diyarında daha da hassaslaşır.<br><br>Kişinin hare okuma becerisini arttırır. Bulunduğun konuma <span class=\\"Highlight1\\">48 metre</span> uzaklıkta olan ve hızlı eylem gerçekleştiren Kurbanların hareleri sana <span class=\\"Highlight2\\">{0} saniyeliğine</span> görünür.<br><br><i>Kulağım Sende</i> sadece her <span class=\\"Highlight3\\">{1} saniyede</span> bir tetiklenebilir.<br>","name":"Kulağım Sende","flavor":"\\"Endişelenme. Tüm hayatım boyunca bunun için hazırlandım.\\" -Hayalet Surat","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"Karanlık planların ve kurnaz soğukkanlılığın, Mahluk\'u uyandırır.<br><br>Bir Kurban\'ı kaldırdıktan sonra Kurbanların tamir etmediği tüm jeneratörlerin yolu, Mahluk tarafından kapatılır ve sonraki <span class=\\"Highlight1\\">{0} saniye</span> süresinde tamir edilemez. Bu durumdan etkilenen jeneratörler, beyaz hareyle gösterilir.<br><br><i>Nefes Kesen Çarpıntı</i>, yalnızca her <span class=\\"Highlight2\\">{1} saniyede</span> bir tetiklenebilir.<br>","name":"Nefes Kesen Çarpıntı","flavor":"\\"Gece benim yardımcıdır ve buralarda gecenin sonu yoktur.\\" -Hayalet Surat","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"Bir Kurban\'ı <b>Saplantı</b> haline getirirsin. Gölgelere karışıp her bir Kurban\'ı tek tek avlarsın. Saplantı haline getirdiğin Kurban\'ı kancaya astığında, <i>Sinsi Kovalama</i> bir nişan kazanır (en fazla <span class=\\"Highlight1\\">{0} nişan</span>).<br><br>Kovalamadayken, her bir nişan Dehşet Alanı\'nı <span class=\\"Highlight2\\">{1} metre</span> azaltır.<br><br>Bir Kurban Saplantı\'nı kancadan kurtardığında, o kişi yeni Saplantı haline gelir. Saplantı kurban edilirse veya öldürülürse, tüm nişanlarını kaybedersin.<br><br><li><i>Katil, tek seferde yalnızca bir Kurban\'ı <b>Saplantı</b> haline getirebilir.</i></li><br>","name":"Sinsi Kovalama","flavor":"\\"Senin için planladıklarım hakkında en ufak bir fikrin bile yok; ama merak etme, haftalarca haberlerde gösterileceğinden emin olacağım.\\" -Hayalet Surat","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"Esrarengiz varlığın atmosferi değiştirir ve tüm teknolojik araçları etkiler.<br><br>Bir Kurban\'ı <i>normal saldırılarınla</i> can çekişme durumuna getirmek <span class=\\"Highlight1\\">{0} metre içindeki</span> tüm jeneratörleri anında patlatır ve ilerlemelerinin gerilemeye başlamasına sebep olur. Gerilim Dalgalanması\'ndan etkilenen jeneratörler, ilerlemelerinde anında <span class=\\"Highlight2\\">%{1}</span> kayıp yaşar.<li><i>Gerilim Dalgalanması</i> sadece her <span class=\\"Highlight3\\">{2} saniyede</span> bir tetiklenebilir.</li><br>","name":"Gerilim Dalgalanması","flavor":"\\"Yaratık elektrik ve yakınlarındaki elektronik araçlar üzerinde bilinmeyen bir etkiye sahipmiş gibi görünüyor.\\" -Hawkins Ulusal Laboratuvarı","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"Istırap verici varlığın avının gücünü emiyor ve onu zayıflatıyor.<br><br>Kurbanlar jeneratörleri tamir ederken <b>Bitkin</b> durum etkisine sahip olur.<br><br>Kurbanlar bir jeneratörü tamir ederken halihazırda sahip oldukları <b>Bitkin</b> durum etkileri durdurulur. Tamir etme eylemi sonlandıktan sonra <b>Bitkin</b> durum etkileri <span class=\\"Highlight2\\">{1} saniye</span> daha devam eder.<br>","name":"Zihinkıran","flavor":"\\"Deneğin telepati yeteneği yakınlardaki bireylerde korku ve bitkinlik hissiyatı uyandırabiliyor.\\" -Hawkins Ulusal Laboratuvarı","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"Garip dünyalarla aranda olan bağlar, avın kaçmaya çalıştığında ortaya çıkıyor.<br><br>Ne zaman bir jeneratör tamir edilse, Kurbanlar tamamlanan jeneratörün <span class=\\"Highlight1\\">{0} metre</span> etrafındaki tüm pencereleri ve atlama noktalarını <span class=\\"Highlight2\\">{1} saniye</span> boyunca kullanamaz.<br><br>Engellenen atlama noktalarının harelerini <i>Acımasız Hapis</i>\'in süresi boyunca görürsün.<br>","name":"Acımasız Hapis","flavor":"\\"Denek yakınlardaki cisimlerin durumunu etkileyebiliyor gibi görünüyor. Cisimler sanki bizim evrenimizin alternatif versiyonunda da yer alıyor.\\" -Hawkins Ulusal Laboratuvarı","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"Hare okuma yeteneğinin potansiyelini arttırır. Zihnin keskinleşir ve savaş alanındaki önemli noktaları daha kolay fark edersin.<br><br><span class=\\"Highlight1\\">{0} metre</span> uzaklığındaki bir alanda bulunan tüm paletlerin, yıkılabilir duvarların ve atlama noktalarının hareleri senin için görünür olur.<br>","name":"Zanshin Taktikleri","flavor":"\\"Düşmanının gücü içinde zayıflık yatar.\\" -Renjiro\'nun Doktrini 12:5","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"Bir kişinin acısını herkes çeker.<br><br>Bir Kurban\'ı kancaya astığında, diğer tüm yaralı Kurbanlar <span class=\\"Highlight2\\">{0} saniyeliğine</span> <span class=\\"Highlight1\\">Kan Kaybı</span> ve <span class=\\"Highlight1\\">Bitkin</span> durum etkisi altına girer.<br><br><i>Kan Yankısı</i>\'nın bekleme süresi <span class=\\"Highlight3\\">{1} saniyedir.</span><br>","name":"Kan Yankısı","flavor":"\\"Bir düşmanına isabetle saldırdığında darbeyi onun müttefikleri de hisseder.\\" -Renjiro\'nun Doktrini 6:3","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"Sana yanlış yapanlardan intikam almaya kararlısın. Seni palet ya da dolap kullanarak kör eden ya da sersemleten bir Kurban\'ı Saplantı haline getirirsin.<br><br>Yeni bir Kurban Saplantı olduğu zaman, <span class=\\"Highlight2\\">{0} saniye</span> boyunca <span class=\\"Highlight1\\">Bihaber</span> durum etkisine girer ve haresi <span class=\\"Highlight3\\">{1} saniyeliğine</span> sana görünür.<br><br><li><i>Katil bir seferde sadece bir Kurban\'ı <b>Saplantı</b> haline getirebilir.</i></li><br>","name":"Baş Düşman","flavor":"\\"Sadece aptallar iblislerin yüzüne tükürüp onları yendiğini sanır.\\" -Renjiro\'nun Doktrini 4:9","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"İyi yağlanmış dişlilerin sesi kulağına hemen çarpıyor.<br><br>Bir Kurban\'a <i>normal saldırınla</i> <span class=\\"Highlight1\\">{0}</span> kere vurduktan sonra <span class=\\"Highlight2\\">{1} saniyeliğine</span> <i>Mekanik Delisi</i> etkinleşir.<br><br><i>Mekanik Delisi</i> etkinken bir Kurban tamir sırasında her Başarılı Beceri Denemesi yaptığında tamir edildiği sürece jeneratör sarı bir hare ile gösterilir.<br>","name":"Mekanik Delisi","flavor":"\\"Bazen insanın en büyük eseri canını alır.\\" -Hapishane müdürü","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"Bir Kurban\'ı <b>saplantı</b> haline getirirsin.<br><br>Saplantı\'yı kancaya taktıktan sonraki <span class=\\"Highlight1\\">{0} saniye</span> boyunca <i>Ölüm Düğmesi</i> etkinleşir. <br><br>Ölüm Düğmesi etkinken, bir jeneratörü tamir etmeyi tamamlamadan bırakan tüm Kurbanlar <i>Ölüm Düğmesi</i> etkisi sona erene kadar Mahluk\'un jeneratörü engellemesine neden olur.<br><br>Bundan etkilenen jeneratörler beyaz bir hare ile işaretlenir.<br><br><i>Katil tek seferde sadece bir Kurban\'ı <b>saplantı</b> haline getirebilir.</i><br>","name":"Ölüm Düğmesi","flavor":"\\"İnsanların öleceklerini anladıkları andaki yüz ifadelerini gördüm.\\" -Caleb Quinn","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"Yok edildiğinde intikam alan bir efsun. Sana yanlış yapanlar cezalandırılacak.<br><br>Sönük Totem temizleyen tüm Kurbanlar <span class=\\"Highlight1\\">{0} saniyeliğine</span> <b>Bihaber</b> durum etkisi altına girer.<br><br>Bu totem de dahil olmak üzere herhangi bir efsun totemi temizlenirse, tüm Kurbanların hareleri <span class=\\"Highlight2\\">{1} saniyeliğine</span> görünür.<br>","name":"Efsun: Öç","flavor":"\\"Şakağına dayalı tetiği kendin çektin aptal.\\" -Caleb Quinn","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"Vazifenin önünde duran herkes ağır bir cezaya çarptırılacak.<br><br>Koruma darbesi alan Kurbanlar <span class=\\"Highlight1\\">{0} saniyeliğine</span> <b>Sakat</b> durum etkisi altına girer.","name":"Zorla Kefaret","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"Kurbanlarına acı ve cezanın yolunda rehberlik et.<br><br>Bir jeneratörü tekmeledikten sonra jeneratörün gerilemesi durana dek veya bir Kurban herhangi bir sebeple yaralanana ya da can çekişmeye başlayana dek <b>Tespit Edilemez</b> olursun. Bu süre zarfında jeneratörün sarı haresi Kurbanlara görünür olur.<br><br>Bu etki yalnızca her <span class=\\"Highlight1\\">{2} saniyede bir etkinleştirilebilir.","name":"Azabın İzleri","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"Hayatları karanlıkta birleşenlerin kaderinde birlikte acı çekmek var.<br><br>Bir Kurban, başka bir Kurban\'ı Katil\'den en az <span class=\\"Highlight1\\">{0} metre</span> uzaktayken bir sağlık aşaması iyileştirirse, iyileştiren Kurban çığlık atarak konumunu belli eder ve <span class=\\"Highlight2\\">{1} saniyeliğine</span> <i>Ölüm Kalım</i> devreye girer. O sırada Kurban, iyileştirilen Kurban\'dan <span class=\\"Highlight3\\">{2} metreden</span> fazla uzaklaştığı anda <b>Bihaber</b> durum etkisi altına girer. ","name":"Ölüm Kalım","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"Bir jeneratöre tekme attıktan sonraki <span class=\\"Highlight1\\">{0} saniye</span> içinde o jeneratörle etkileşime giren ilk Kurban çığlık atarak <span class=\\"Highlight2\\">{1} saniyeliğine</span> yerini belli eder ve <span class=\\"Highlight3\\">{2} saniyeliğine</span> <b>Zayıf</b> durum etkisi altına girer.<br><br><i>Ejderhanın Pençesi</i> <span class=\\"Highlight4\\">{3} saniye</span> bekleme süresine sahiptir.<br>","name":"Ejderhanın Pençesi","flavor":"\\"Bu bileşiğin potansiyeli çok yüksek... Ufacık bir parçası bile anormal etkilere sebep olabiliyor.\\" -Talbot Grimes\'ın günlüğü","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"Kan döküldüğünde Mahluk\'un takdirini kazandıran bir efsun.<br><br>Bir Kurban <i>normal saldırıyla</i> darbe aldığında bulunduğun yerin <span class=\\"Highlight1\\">{0} metre</span> yakınındaki paletler <span class=\\"Highlight2\\">{1} saniyeliğine</span> Mahluk tarafından sabitlenir. Bu paletler indirilemez.<br><br><i>Efsun: Kan Lütfu</i> <span class=\\"Highlight3\\">{2} saniye</span> bekleme süresine sahiptir.<br>","name":"Efsun: Kan Lütfu","flavor":"\\"Mücadelelerin bir çeşit biyolojik tepki olduğunu varsaymak çok da gerçek dışı olmayabilir.\\" -Talbot Grimes\'ın günlüğü","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"<i>Efsun: Ölümsüz</i> etkinken herhangi bir Sönük Totem\'in <span class=\\"Highlight1\\">{0} metre</span> yakınındaki Kurbanların hareleri görünür olur.<br><br>Farklı bir Efsun Totemi temizlendiğinde, bu totemin efsunu Efsun: Ölümsüz totemine aktarılır ve Efsun: Ölümsüz devre dışı kalır. Aktarılan Efsun\'un sahip olduğu nişanlar da onunla birlikte aktarılır.","name":"Efsun: Ölümsüz","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"Sahip olduğun az şeyi korumaya çalışıyor ve istiflediklerini karıştıranları hemen hissediyorsun.<br><br>Bir sandıkla etkileşime giren veya bulunduğun yerin <span class=\\"Highlight1\\">{0} metre</span> yakınında bir eşya alan Kurbanların yerleri açığa çıkar.<br><br>Mücadele, çevrede <span class=\\"Highlight1\\">{1}</span> taneye kadar ek sandıkla başlar.","name":"İstifçi","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"Zor bir hayatın oldu, o halde diğerlerinin hayatı da zor olmalı.<br><br>Bir jeneratöre hasar verdiğinde en fazla <span class=\\"Highlight1\\">{0}</span> rastgele jeneratörün de ilerlemesini geriletirsin.<br><br>Etkilenen jeneratörlerden biri tamir ediliyorsa, tamir eden Kurbanlar için zor bir Beceri Denemesi tetiklenir.<br><br><i>Baskı</i>\'nın bekleme süresi <span class=\\"Highlight2\\">{1}</span> saniyedir. <br>","name":"Baskı","flavor":"\\"Bizi lanetleyenlere lanet olsun.\\" -Charlotte Deshayes","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"Sona yaklaştıkça aklındaki tek şey artık bu işi bitirmek oluyor.<br><br>Her tamamlanan jeneratör ile Son Darbe\'nin gücü artar ve bir nişan kazanırsın.<br><br>Bir sonraki atılmanın mesafesini <span class=\\"Highlight1\\">%{0}</span> arttırmak için bir nişan harca.","name":"Son Darbe","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"Eşi benzeri olmayan şovmenlik yeteneklerinle herkesi büyülüyorsun.<br><br>Bir Kurban\'ı taşırken Dehşet Alanı\'ndaki diğer Kurbanlar <b>Zayıf</b> durum etkisi altına girer.<br>Etki, Dehşet Alanı\'ndan çıkan Kurbanlarda ve taşıdığın Kurban\'ı astığında veya serbest bıraktığında Dehşet Alanında bulunan Kurbanlarda <span class=\\"Highlight1\\">{0} saniye</span> daha devam eder.<br><i>Şöhret Budalası</i>, taşıdığın Kurban\'ı bıraktıktan sonra <span class=\\"Highlight2\\">{1} saniyelik</span> bekleme süresine girer.<br>","name":"Şöhret Budalası","flavor":"\\"Bana herkes bu kadar yaklaşamaz, tadını çıkar.\\" -Ji-Woon Hak","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"Efsun, senden daha aşağı mertebede olanların kontrol altında tutulmasını sağlar.<br><br>Bir Kurban <b>hızlı bir şekilde</b> bir pencereden atladıktan sonra, Mahluk pencereyi <span class=\\"Highlight1\\">{0} saniyeliğine</span> kullanılamaz hale getirir.<br><br><i>Efsun etkileri, ilgili Efsun Totemi sağlam kaldığı sürece uygulanır.</i><br>","name":"Efsun: Kitle Kontrolü","flavor":"\\"Kontrol sende değil. Hiçbir zaman senin gibilerde olmadı.\\" -Ji-Woon Hak","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"VIP odasına öyle herkesi alacak değilsin.<br><br>Bir Kurban\'ı ilk kez kancaya astıktan sonra, <i>Çıkış Yok</i> bir nişan kazanır.<br>Son jeneratör de tamir edildiğinde Mahluk, iki Çıkış Kapısı şalterinin kullanımını <span class=\\"Highlight1\\">{0} saniyeliğine</span> ve sahip olduğun her nişan için ilave <span class=\\"Highlight2\\">{1} saniyeliğine</span> engeller.<br>","name":"Çıkış Yok","flavor":"\\"Kan kaybederken çıkardığın ses... Onu bir daha duymak istiyorum.\\" -Ji-Woon Hak","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"Hedefleri takip edip yok etmek için tasarlandın.<br><br>Mücadelenin başında tüm Kurbanların hareleri <span class=\\"Highlight1\\">{0} saniyeliğine</span> görünür olur.<br><br><span class= \\"FlavorText\\">\\"Ne istediğini biliyor ve elde edene kadar durmayacak.\\" -Carlos Oliveira<\\\\span>","name":"Ölümcül Takip","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"Ekibin bir üyesini panik yaratacak şekilde yaralamayı biliyorsun.<br><br>Sağlıklı bir Kurban\'ı normal saldırıyla yaralı hale getirdiğinde tüm yaralı Kurbanlar <span class=\\"Highlight1\\">{0} saniyeliğine</span> <b>Bihaber</b> durum etkisi altına girer.<br><I>Histeri</i> yalnızca her <span class=\\"Highlight2\\">{1} saniyede</span> bir tetiklenebilir.<br><br><span class= \\"FlavorText\\">\\"Pardon, biraz korktum. Ne çıkacağından emin değildim.\\" —Robert Kendo","name":"Histeri","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"NE-α paraziti sana tuzak kurmaya yetecek kadar zekâ ve farkındalık sağlıyor.<br><br>Bir jeneratöre tekme attıktan sonra haresi sarı görünür. Bir Kurban\'ı normal saldırıyla can çekişme durumuna sokmak, etkilenen tüm jeneratörlerin patlayarak ilerlemelerini <span class=\\"Highlight1\\">%{0}</span> kaybetmelerine ve harelerinin yok olmasına sebep olur.<br>Patladığı esnada jeneratörü tamir eden Kurbanlar çığlık atar ve <span class=\\"Highlight2\\">{1} saniye</span> boyunca Aciz durum etkisi altına girer.<br><i>İnfilak</i> <span class=\\"Highlight3\\">{2} saniye</span> bekleme süresine sahiptir.<br><br><span class= \\"FlavorText\\">\\"Silah da mı kullanabiliyor?\\" —Jill Valentine","name":"İnfilak","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/tr/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/tr/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Evan MacMillan\'ın idolü babasıydı. Çok büyük bir servetin vârisi olmasından değil, elindeki araziyi yönetim biçimine hayrandı. Onun güven veren elleri altında büyüyen Evan, çalışanları katı bir şekilde yönetmeye alışmıştı. Üretim her zaman fazlaydı ve MacMillan Mülkü babayla oğulun yönetiminde zenginleşti. Archie MacMillan\'ın akıl sağlığı yavaş yavaş kötüleyince, Evan servetinden pay kapmaya çalışanlardan korudu onu. Evan\'ın babası için yapmayacağı şey yoktu.<br><br>Archie MacMillan sonunda kendini iyice kaybettiğinde, Evan modern tarihin bilinen en büyük toplu katliamında babasının yönlendirdiği bir infazcı oldu. Evan\'ın yüzden fazla insanı o karanlık tünellere götürüp çıkışı patlayıcılarla uçurduğu ve bu insanları kaderlerine terk ettiği asla ispatlanamadı. MacMillan Mülkü\'nün hikâyesi, yanlış yola sapan servet ve gücün hikâyesidir. Bu babayla oğulun ellerinde can veren kaç kişi olduğu bilinmiyor. Evan MacMillan\'a ne olduğu da meçhul. Kendi deposunun mahzeninde ölüme terk edilmiş halde bulunan babasının gizemi de asla çözülemedi.<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"Philip Ojomo, yeni bir başlangıç yapma umuduyla bu ülkeye gelmişti. Otomobil Mezarlığı\'nda iş bulduğunda çok sevindi. Burası, rüşvetle susturulan polislerin görmezden geldiği karanlık işlerin döndüğü küçük bir hurdalıktı. Dönen karanlık işler, Ojomo\'nun umurunda bile değildi. Kendi memleketinde de suç faaliyetlerine yakından tanık olmuştu ve kendisi bulaşmadığı sürece başkalarına karışmazdı. O yalnızca araba tamir ediyor, öğütme makinesini kullanıyordu. Bu işte çok başarılıydı. Araba olarak giren şey, küçük bir metal küp olarak çıkıyordu.<br><br>Kasvetli bir günde, henüz ezilmemiş arabalardan birinden kan geldiğini tesadüfen fark etti. Bagajı açtığında elleri ve ağzı bağlanmış, gözleri korku dolu bakan genç bir adam gördü. Ojomo adamı serbest bıraktı ama daha on adım atmadan Ojomo\'nun patronu adamı yakalayıp boğazını kesti. Ojomo neler olduğunun açıklanmasını istediğinde, ona ezdiği arabaların hemen hemen hepsinin içinde canlı bir insan bulunduğu, kendisinin de bir cellattan ibaret olduğu söylendi. Bu, hurdalığın bazı \\"müşterilere\\" sunduğu bir \\"hizmetti\\". Ojomo kendini kaybetti. Patronunu ezme makinesine atarak yavaş yavaş parçalanmasını izledi. Adamın kafası makineden dışarı çıktığında, Ojomo kafayı tuttu ve omurgasıyla birlikte vücudundan koparıp aldı. Sonra da orayı terk etti ve bir daha kendisinden hiç haber alınamadı.<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"Varlıklı toprak sahipleri Max ve Evelyn Thompson\'ın oğlu olan bu isimsiz çocuk, vicdansız birer anne babanın eline doğan istenmeyen bir çocuktu. Öyle çirkin ve biçimsizdi ki toplumdan soyutlandı. Oğullarından çok utandıkları için onu, kapısını tuğlayla ördükleri bir odaya kapatıp duvara açtıkları delikten besliyorlardı. Sonunda kaçan çocuk, onu büyütmek yerine ona işkence eden anne babasını katlederek intikamını korkunç ve vahşi bir şekilde aldı.<br><br>İşini hallettikten sonra çiftlikte yaşamaya devam etti. İçindeki dengesiz şiddeti, başıboş dolaşan hayvanlardan çıkarıyordu. Nihayet prangalarından kurtulduğunda, mısır tarlalarına dalıp yoluna çıkan her şeyi kovalamaya ve katletmeye başladı. Max ve Evelyn\'in cesetleri asla bulunamasa da çiftliğin dört bir yanında işkence görmüş ve iç organları çıkarılmış hayvanlar bulundu. Ayaz Yel Çiftliği\'ne hızla el kondu, arazisi bölündü ve elden çıkarıldı. Çiftlik evi için alıcı bulunamamıştı. Belki de o sıcak yaz gecelerinde duyulan elektrikli testere sesi yüzündendir...<br>","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"Sally Smithson, eşi Andrew\'un yaptığı ahşap evde çocukların koşuşturmaları ve kahkahalarını duyacağı hayaliyle kasabaya gelmişti. Bir gün Andrew\'un kalfası Sally\'yi ziyaret ettiğinde kadının hayatı sonsuza dek değişti. Başka hiçbir seçeneği olmayan Sally bir yol bulmak zorundaydı fakat bulabildiği tek iş, Crotus Prenn Tımarhanesi\'ndeydi. En aşağıdan başlayıp zorlu gece vardiyalarını üstlendi. Seneler içinde öyle korkunç şeyler gördü ki zihni dolup taştı. Sonunda daha fazla dayanamadı ve içindeki arındırma dürtüsüne kulak verdi. Bir eylül günü sabah personeli geldiğinde, elliden fazla hastanın yataklarında öldürüldüğünü, 4 çalışanın da katledildiğini gördü. Yalnızca Sally hayatta kalmıştı ama onun da aklı yerinde değildi. Hiç durmadan bir öne bir arkaya sallanıyordu. Onu ambulansa taşıdılar fakat o ambulans hastaneye asla ulaşmadı. Yakınlardaki ormanda kaza yapmıştı. Tüm çalışanlar ölmüştü, Sally ise hiçbir yerde bulunamadı.","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"Anna yürümeye başladığı andan itibaren annesi ona kuzey ormanlarının zorlu, ıssız dünyasında nasıl hayatta kalabileceğini öğretmeye başladı. Bu denli ücra ve tehlikeli bir bölgede yaşamak, beceri ve direnç gerektiriyordu. Güneş hiçbir şey yapılamayacak kadar battığında, en sert geçecek kışlara bile dayanabilecek şekilde inşa edilmiş eski ve sağlam kulübelerine sığınırlardı. Ocağın sıcaklığıyla mayışan Anna, annesinin ona yaptığı ahşap oyuncak ve maskelerin arasında annesinin kollarına bırakırdı kendini. Hikâyeler ve ninnilerle uykuya dalarken kısa süre sonra her şeyin değişmesine sebep olacak olaylardan bihaber, mutlu rüyalar görürdü.<br><br>Anna ve annesi, ormanda büyük bir elk geyiğinin peşinden gidiyordu. Tehlikeli bir av olduğunun farkındaydılar fakat kış çok çetin geçmişti ve yemekleri neredeyse tükenmişti. Açlıktan kıvranma olasılığı, onları ormandaki herhangi bir yaratıktan daha çok korkutuyordu. Elk hiç uyarı vermeden şahlandı, kükredi ve Anna\'ya saldırdı. Kız korkudan buz kesmişti. Tüm dünya bu devasa yaratığın şahlanan toynakları altında sallanıyor gibiydi. Elk o kadar yakındı ki Anna gözlerindeki ölümcül öfkeyi görebiliyordu. Derken annesi elindeki baltayla, kendini hayvanın önüne attı. Elk çatal boynuzlarıyla kadını deşip havaya kaldırırken kan dondurucu bir çığlık duyuldu kadından. Var gücüyle arka arkaya hayvanın boynuna vuruyor, hayvansa kadını sarsalayarak indirmeye çalışıyordu. Korkunç bir çatırtıyla boynuzlar kırıldı ve Anna\'nın annesi serbest kaldı. Hayvan yere yığılmıştı.<br><br>Anna, annesinin yaralı bedenini taşıyamayacak kadar küçüktü. Düştüğü açıklıkta onunla oturdu. Can veren elkin feryatlarını duymaması için, Anna\'nın annesi ona sarıldı ve en sevdiği ninniyi söylemeye başladı. Avcı ve elk gittikçe sessizleşip soğuyana; Anna ormanın sessizliğinde bir başına kalana dek öyle durdular. Nihayet Anna ayağa kalktı ve evine doğru giden uzun yola koyuldu.<br><br>Hâlâ çocuk olsa da, karla kaplı ormanda hayatta kalabilecek kadar bilgisi vardı. İçgüdülerini dinleyerek yabanla bir oldu. Büyüdükçe güçlendi ve avlanmaya devam etti. Tehlikeli bir avcı halini aldığında, insan tarafını artık neredeyse hiç hatırlamıyordu.<br><br>Bölgesini genişletip avladıklarıyla yaşadı. Sincap, yaban tavşanı, vizon ve tilki avladı. Zamanla bunlardan sıkılıp kurt ve ayı gibi daha tehlikeli hayvanlara geçti. Her şeyden habersiz gezginler ormanına adım attığında, en sevdiği yeni avının insanlar olacağına karar verdi. Bölgesine yolu düşen talihsizler, tıpkı birer hayvan gibi katlediliyordu. İnsanların araçlarını, renkli kıyafetlerini ve küçüklerse oyuncaklarını almayı severdi. Fakat ne yaparsa yapsın, küçük kızları asla öldüremiyordu.<br><br>Kızları, ormanın derinliklerindeki evine götürürdü. Öyle narinlerdi ki onlara baktığında kalbinde bir şeyler uyanıyordu. Sevdiği biriyle kurabileceği yakınlığa açtı. Kendi çocuğu olsun istiyordu. Yağmaladığı ahşap oyuncakların, bebeklerin ve okuyamadığı hikâye kitaplarının arasında, kızların boynuna sert ve kaşındıran ipler bağlayıp iplerin ucunu da sıkıca duvara tutturuyordu. Kaçıp gitmelerine izin veremezdi ki... Dışarıda kurda kuşa yem olurlardı.<br><br>Her getirdiği kız soğuktan, açlıktan veya hastalıktan ölüyordu. Her seferinde Anna daha da derin bir kedere, acıya ve öfkeye sürükleniyordu. Tekrar denemek zorunda hissediyordu kendini. Aileleri katledip kız çocuklarını kaçırmak için en yakın köyleri basmaya başladı. Ürken çocukları sakinleştirmek için annesinin yıllar önce onun için yaptığı hayvan maskelerini takıyordu. Köylüler, Kızıl Orman\'da dolaşan yarı hayvan yaratığın efsanesini konuşur oldu. Avcı, erkekleri öldürüyor, küçük kızları da yiyordu.<br><br>Savaş nihayet ormana da ulaşmıştı. Alman askerleri, yıkılmakta olan Rus İmparatorluğu\'na saldırmak üzere buradan geçmeye başladı. Bu karanlık zamanlarda gezginler ormana uğramaz oldu. Köylüler evlerini terk etti. Çocuklar da ortadan kaybolmuştu. Sadece askerler vardı. Üzeri balta yarası dolu pek çok asker cesedi bulundu. Kalabalık gruplar, gizemli biçimde kayboldu. Savaş bittiğinde, Avcı\'ya dair söylentiler de Kızıl Orman\'a karışıp yok oldu gitti.","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"Bazı insanlar doğuştan kötüdür. Saf, katışıksız kötülükle doğarlar. Michael Myers da bu insanlardan biri. Başkalarına acı çektirdiğine üzülmezdi. Hatta insanlara acı çektirmeyi severdi. Fakat hayat, zihni böyle korkunçluklarla dolu olanlara karşı bile sert olabilir. Aradaki tek fark, sorunlarla baş etme yöntemimizdir.<br><br>Michael, iç huzurunu bulmak için öldürmeliydi. Kız kardeşinin canını aldığı gün, polis onu olay yerinde palyaço kostümü giymiş olarak buldu. Sessizce duruyordu. Yangına körükle gidilmez. Ama bu çocuğun içindeki iblisi nasıl büyüteceğinden bihaber polisler, tam olarak da bunu yaptı. Michael\'ı akıl hastanesine göndermek, çocuğu kurtarmak için atılabilecek en saçma adımdı aslında. Başarısız terapiler ve her gece duyduğu çığlıklar, onu daha da içine kapanık ve dengesiz bir hale getirdi. İnsanlar Michael Myers\'ın böyle unutulup gideceğini, zamanla tükenecek bir başarısızlık hikâyesi olarak kalacağını umuyordu. Fakat o kaçmayı başardı...<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"Lisa Sherwood, sakin bir kasabada büyümüştü. Kasaba sakinleri nazik, ihtiyarlarıysa çıkan sorunları uzlaşmaya vardırıp eski gelenekleri canlı tutmaya çalışan insanlardı. Lisa özellikle güvenlik ve iyi şans için ona çizmeyi öğrettikleri tılsımları çok seviyordu. Bir gece orman yolundan eve giderken hiç beklenmedik bir anda korkunç bir fırtına başladı. Sırılsıklam ormanın karanlığında, yolunu kaybedip başını vurdu. Bilinci bir kapanıp bir açılırken ağaçların arasından yaklaşan karanlık şekiller görmeye başladı. Kısa bir süre içinde o kadar yaklaşmışlardı ki korkunç, aç sırıtmalarını görebiliyordu.<br><br>Su basmış bir mahzende duvara zincirlediler onu. Karanlıkta, açık yaralarının üzerinde sinekler uçuşan başkaları olduğunu görebiliyordu. Yamyamlar paslı bıçaklarıyla vücutlarından parçalar koparmaya başladıktan sonra pek hayatta kalamamışlardı fakat Lisa bir şekilde hayata tutundu. Aç kaldı, sakat bırakıldı, sıska kolları kelepçelerden çıkacak hale geldi. Metal vücudunu kesse de zorladı ve zincirlerden kurtuldu. Her yerden sarı iltihap akıyor, kangren olmuş yaralarının altından kemikleri görünüyordu. Daha fazla dayanamadı. Hezeyanla evini, ihtiyarları düşündü. Ona öğrettikleri sembolleri çizmeye başladı. İçinde karanlık bir açlık vardı. Kana susamıştı. İntikam yolunu seçti.<br>Polis, yaptığı araştırmalarla bataklıktaki eski eve ulaştı sonunda. Evdekilerin hepsinin uzuvları kesilmiş, yenilmişti. İhtiyarların tılsımları, kanla yere çizilmişti. Lisa\'nın cesedi asla bulunamadı.<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"Katillerin menfur hareketlerinin hastalıklı zihinlerinden mi kaynaklandığı, yoksa dış baskılar yüzünden bunları yapmaya zorunlu mu hissettikleri uzun zamandır tartışılıyor. Fakat öyle bir Katil var ki, onun için yaradılış ve yetiştirilme ayrılmaz bir ikili.<br><br>Deri Surat iradesini başkaları üzerinde kullanmak, cinsel dürtülerini tatmin etmek veya kafasının içindeki sesleri susturmak için öldürmüyor. Korktuğu için öldürüyor. Diğerlerinin ona zarar vermesinden, ailesinin ona gücenmesinden ve insan eti yeme isteğinin keşfedilmesinden korkuyor.<br><br>Ona denileni yapıyor ve ailesi onu seviyor. Asıl önemli olan da bu. Yabancılar onun için bir tehdit. Üstesinden gelmesi gereken bir tehdit.<br><br>Tıpkı evine davetsiz giren çocuklar gibi. Evine sanki kendi evleriymiş gibi girdiler. Şüphesiz ki ailesinin sırlarını öğrenmek için evini karış karış aradılar. Fakat Deri Surat onlara hadlerini bildirdi ve ailesini korudu. Tıpkı ona öğretildiği gibi.<br><br>O sadece bir muhafız değil, birçok görevi var ve her birinin kendi suratı var. Yemek yapıyor, ailesine ilgi gösteriyor ve yemek yerken güzelce giyiniyor. Eskiden büyükbaba ve büyükanneleri onlara bakardı ama artık büyükbabaları yaşlandı. Büyükanneleri de bir süredir kıpırdamıyor. Bu yüzden artık Deri Surat ve kardeşleri aileye bakma görevini üstlendi. Ailesi, onun için her şey demek. Ailesi güven ve emniyet demek. <br><br>Elinden geleni yaptıysa da, çocuklardan biri kaçtı. Onu durdurmaya çalıştı ve arkasından olabildiğince hızlı bir şekilde koştu ama kıza yardım eden biri vardı: Kamyon süren bir yabancı. Kötü kamyoncu kardeşini öldürdü, sanki bir sıçanmış gibi kamyonuyla onun üstünden geçti. Deri Surat müthiş bir öfkeyle testeresiyle birlikte kamyoncunun üzerine atladı. Ailesinin intikamını almaya hazırdı; ancak kamyoncu fazla hızlıydı. Deri Surat\'ı kenara itip, kendi testeresini ona karşı kullandı.<br><br>Yabancılar uzaklaşırken hissettiği öfke, keder ve acı; ailesi için duyduğu endişeyle birleşti. Kesin polislerle birlikte geri döneceklerdi ve polisler kardeşlerini ve büyükbabasını götürecekti. Onlarsız ne yapardı? Ailesinin emirleri olmadan, bitap düşerdi ve ölürdü.<br><br>Dünyası tepetaklak olan Deri Surat testeresini oradan buraya sallayarak, onu çevreleyen sayısız dış tehdide karşı kendini savunmaya çalıştı.<br><br>Sonra bir anda başka bir his onu çevreledi. Görünmez, soğuk bir korku derisinde dolaşıyordu. İşte tam da o anda yabancılar ne yaparsa yapsın, gölgelerde daha kötü ve büyük bir şeyin yaşadığını anladı. Daha önce hiç hissetmediği bir dehşete kapıldı. Fakat bu his neredeyse huzur vericiydi, tıpkı ailesine karşı duyduğu korku gibi. Onları hayal kırıklığına uğratma korkusu.<br><br>Tanıdık gelen ama bir yandan da bilinmez bir yere getirildi ve burada ne yapması gerektiğini biliyordu. Ailesinde olduğu gibi burada da başarısız olamazdı. Yabancılar buraya da gelecekti ama yeteneklerini kullanarak her türlü tehditle başa çıkabilirdi. Elbette çığlıklar olacaktı. Fakat dünyayı yeniden sessiz hale getirebilirdi. Ta ki duyabildiği tek şey testeresinin kutsanmış uluması olana dek.<br><br>Bırak da yabancılar gelsin.","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"Psikolojiye fevkalade yeteneği olan Herman, Illinois\'de gizli bir kampus olan ve Léry Ruh Sağlığı Enstitüsü olarak bilinen ileri düzey bir sinirbilimi programında özel eğitim almak üzere hususi olarak seçildi. Bu enstitü aslında CIA\'in paravanıydı. Herman, Dr. Otto Stamper\'la burada tanıştı ve onun önderliğinde, ABD\'nin o sıradaki en büyük düşmanı kimse onlar için bir hapishane ve eğitim merkezi haline dönüştürülmüş enstitüye gönderilen tutuklulardan bilgi almak için tuhaf ve gittikçe saldırganlaşan yöntemler kullanmaya başladı. Şiddetli elektroşok tedavisini sık sık kullanmasının bir sonucu olarak çok önemli sonuçlar elde etti ve milli güvenliğe karşı oluşan pek çok tehdit bu sayede su yüzüne çıktı.<br><br>Seneler içerisinde Herman, Doktor olarak anılmaya başladı. Tıp diplomasının olup olmaması veya tutuklular istediği bilgileri verdikten sonra onlara neler olduğu kimsenin umurunda değildi. Dehşetin boyutu, Léry Ruh Sağlığı Enstitüsü\'nden bir hafta boyunca ses çıkmayınca ortaya serildi. Personelin, hastaların ve tutukluların hepsi kafa travmasından ölmüştü. Dr. Otto Stamper\'ınki de dahil olmak üzere bütün personelin ve tutukluların cesetleri bulunmuş, bir tek Herman \\"Doktor\\" Carter\'ın izine rastlanmamıştı.<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"Freddy Krueger, hayattayken bile onu gerçekten tanıyanlar için bir kâbus canavarıydı. Sıcakkanlılık ve samimiyet maskesi arkasına saklanan Freddy\'nin gerçek yüzünü, sadece kurbanları biliyordu. Kurbanların söyledikleri ortaya çıkınca, Springwood\'da yaşayan ebeveynler Freddy\'yi buldu ve adaleti kendi elleriyle dağıttı. Çıkan yangında canavardan kurtulduklarını düşünmüşlerdi. Artık çocuklarının güvende olduğunu sanmışlardı. Fakat böylesine güçlü bir kötülükten kurtulmak o kadar da kolay değildi. <br>Aradan yıllar geçti, dehşet gömüldü ve kurbanlar insaflı bir şekilde unutuldu. Ancak her nasıl olduysa, Freddy geri döndü. Rüyalar tekrardan kâbuslara dönüştü.<br>Freddy öfkesini ona yanlış yapanlara yöneltti. Aklındaysa tek bir saplantı vardı: Nancy Holbrook. Fakat onun sahip olduğu gücü ve beceriyi hafife almıştı. Arkadaşı Quentin\'le birlikte Freddy zayıflattı ve onu parçalara ayırarak bir kez daha ölüme terk etti. <br>Fakat ölüm ilk kez karşılaştıklarında Freddy\'yi istememişti, neden şimdi onu alacağını düşündüler ki? İntikam ateşiyle yanıp tutuşan Freddy bir kez daha döndü. Bu sefer bir numaralı saplantısı Nancy\'ye ulaşmasını engelleyen çocuğu hedef aldı. <br>Freddy, Quentin\'in rüyalarını işgal etti. Gücü ve savunmaları en zayıf noktada olana kadar her gece onu ziyaret etti. Zamanı geldiğinde çocuğu Badham Anaokulu\'nun karanlık yansımasına götürdü. İşte burada uzun zamandır peşinde olduğu intikamı alacaktı.<br>Freddy, çocuğu okulun koridorlarında takip etti. Hiç acele etmiyordu, avın her anının tadını çıkarıyordu. Bu en sevdiği kısımdı: Kurbanlarının havadaki ter kokusu, dehşet içinde nefes almaya çalışırken çıkardıkları cırlak sesler... Kurbanları Freddy\'nin âdeta oyuncaklarıydı. <br>Uzun bir koridorun sonunda çocuğu gördü. Koşmak için çok mu yorgundu ve korkmuştu? Kaderine boyun mu eğmişti? Freddy kollarını açarak çocuğa doğru yaklaşıyordu. Pençeleriyle duvarı tırmıklıyordu. Uçları bir boruya değdi. Pençelerinin metale sürtünmesiyle çıkardığı çığlığa benzeyen sesler çocuğu daha da endişelendiriyordu.<br>Kıvılcım yağmuru yere yayılmış sıvının üzerine düştü. Mavi alevler hızla büyüdü ve bütün odayı kapladı.<br>Freddy alevler içinde öfkeyle bağırırken çocuk kaçtı. Freddy, çocuğu bodrumuna kadar kovaladı. Buradan kaçamayacağını biliyordu.<br>Freddy yavaşça çocuğa yaklaştı. O kadar çok korkmuştu ki canavar neredeyse bunun tadını alabiliyordu. Fakat gözleri cüretkâr bir nefretle yanıyordu. Freddy neredeyse çocuğun öfkesine hayran olacaktı. <br>Freddy pençelerini havaya kaldırdı.<br>Sonra bir anda odada başka bir varlık daha olduğunu fark etti. Bu çok eski, güçlü ve karanlık bir şeydi. Garip bir atmosfer Freddy\'yi çevreledi. Hissedebildiği tek şey ahşap kirişlerin uzaktan gelen bükülme ve gıcırdama sesleriydi. Metalin metale çarpıp ezilerek çıkardığı yankılı iniltiler. Gizemli ve bilinmez bir dille saf dehşet arası bir şeydi bu. <br>Freddy bir an için döne döne düştü. Tekrardan okuldaydı. Fakat bu onun okulu değildi. Aynı görünüyordu fakat bir şeylerin farklı olduğunu hissedebiliyordu. Güçlerinin bir kısmı zayıflamış, bir kısmıysa kuvvetlenmişti. Çocuk ortalarda yoktu; fakat koridorları başka kurbanlar dolaşıyordu. Bazıları önemsizdi, bazılarıysa yeni gözdesi olacaktı. Pençeleriyle hepsini doğrayacaktı.","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"Yaygın olarak Jigsaw adıyla bilinen John Kramer, oğlunun Çin Zodyakı\'nda yer alan Domuz Yılı\'nda doğmasını planlamıştı. Bu yıl doğurganlık ve yeniden doğmayı temsil ediyordu. Kendisi ve eşinin yeni bir başlangıç yapacağını, oğlununsa şanslı bir hayatı olacağını düşünüyordu. Fakat bu hayali, bir madde bağımlısının uyuşturucu için eşinin kliniğini bastığı gece paramparça oldu.<br><br>Olay sonrası henüz dünyaya gelmemiş oğlu hayatını kaybetti. John ise bağımlıyı bulup, onu ilk deneği olarak kullandı ve Domuz sonsuza dek değişti. John\'u içten çürüten bir hastalığın temsili ve eylemlerimizle kendimizi geliştirip ölümün dişlerinden kurtarmadığımız sürece sadece birer et parçası olduğumuzu hatırlatan bir leke haline geldi.<br><br>Domuz, Jigsaw\'un denekleri üzerinde testler gerçekleştiren bir araçtı. Testlerden galip çıkanların bazıları için yeniden doğma niteliğindeydi. Hayatta kalanlar yeni yaşamlarına Jigsaw\'un çırakları, hatta müritleri olarak devam edebiliyordu.<br><br>Hayatı boyunca kendine ve etrafındakilere zarar veren, dertli Amanda Young için de durum böyleydi. Jigsaw\'un testiyle yüzleşip, onda galip geldiğinde her şey sonsuza dek değişti. Yaşamının bir şeye değdiğini anlayan Amanda, kendini Jigsaw\'un davasına adadı. Kanser, John\'u pençeleri arasında sıkıştırdığında onun yerine geçmeye hazırdı.<br><br>Fakat zaman geçtikçe John\'a daha da bağlı bir hale geldi. Onun kaçınılmaz ölümünün oluşturduğu keder, deneklerin kendilerini oyunlar sayesinde kurtararak yeniden doğamayacağı düşüncesiyle birleşti. <br><br>Bunu gören John ona başka bir oyun, kendini kurtarmanın başka bir yolunu sundu. Ancak öfke ve kıskançlıkla hareket eden Amanda, testi geçemedi ve sonuç olarak bir kurşun yedi. <br><br>Seramik taşların üzerinde hızla kan kaybeden Amanda\'nın etrafını gıcırdayan ahşap sesiyle birlikte bir karanlık sardı. Bir anda kendini ormanda buldu. Dünyayı tekrardan Domuz\'un gözlerinden görüyordu. Etrafındaki ağaçların dalları sanki ona doğru uzanan pençelerdi. Aniden paniğe kapıldı. Hızla alıp verdiği nefesi maskenin içinde yankılanıyordu.<br><br>Lanetlenmiş miydi? Hayatının geri kalanını bu kılıkta mı geçirmek zorundaydı? Belki de testte başarısız olmamıştı. John herkesten bir adım öncesini düşünüyordu ve bütün ihtimalleri göz önünde bulunduruyordu. Ne de olsa asla ondan vazgeçemezdi, değil mi?<br><br>Jigsaw ölmüş olabilirdi ama artık onun yerinde başka biri vardı. O kişi için tekrardan Domuz olacaktı.<br><br>Nihayetinde aldığı kararların doğru olduğunu fark etti. Artık oyun zamanı sona ermişti. Deneklerin hiçbiri için kurtuluş yoktu. Hepsi birer koyundu ve koyunlar kesilirdi. ","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"Kenneth Chase 1932 yılında zor bir doğum sırasında dünyaya geldi. Maalesef doğum sırasında annesi hayatını kaybetti. Bu olay babasıyla arasının sonsuza dek açılmasına sebep oldu. Çocuk büyüdükçe babasının kini ve içki alışkanlığı da büyüdü. Kenneth okula başladığındaysa ikisi de farklı hayatlar yaşıyordu.<br><br>Akademik olarak diğer öğrencilerden farksızdı, atletizm alanındaysa kendini epey geliştirmişti. Uzundu ve kuvvetliydi. Ayrıca koşu etkinliklerinde bir hayli başarılıydı. Fakat takım sporlarına katılması için aldığı bütün teklifleri reddediyordu.<br><br>Okuldan eve dönerken genellikle yerde kuş tüyleri buluyordu. Bunları toplayıp, yatağının altındaki puro kutusunda biriktiriyordu. Babası işteyken veya kör kütük sarhoşken, Kenneth\'ın tek başına geçirecek çok zamanı vardı. Bu zamanlarda tüylerin kıllarının düzeninden büyülenmiş bir şekilde onları dudaklarına dokundurup, yumuşaklıklarını hissederdi. Bahçesindeki yem kabına gelen kuşları gören Kenneth, onların yumuşaklığını hissetmek istiyordu ve kuşlardan birini yakalamayı kafaya koydu. Kasabalarındaki bir dişçiyle yakınlaşarak, ondan bir miktar anestezik ilaç aldı. Bunu kullanarak yem kabına bir tuzak kurdu. Kuşun, ona dokunacak kadar uzun bir süre için bayılmasını umuyordu.<br><br>Birkaç başarısız denemeden sonra, bir kızılgerdan yakalamayı başardı. Kuşu tutarken aniden onun merhametine kalmış bir hayatın ellerinde olduğunu fark etti. İlacın etkisi bitince kuşu doğaya salmayı düşünüyordu. Fakat bunun yerine kuş çırpınmaya ve gözleri açılıp kapanmaya başlayınca elini daha çok sıktı. Kuşun göğsündeki tüyler hareketsizleşene dek, parmaklarıyla boğazını sıkmaya devam etti. Hayvanın cesedinden kurtuldu ve bir tüyünü sakladı. Yeni bir koleksiyona başlamıştı. Diğerlerini \\"sahte\\" gördüğü için attı.<br><br>1940\'larda Kenneth okulu bırakmıştı ve ufak bir lokantada komi olarak çalışıyordu. Ayrıca sincap, rakun ve köpek gibi daha büyük avları tercih etmeye başlamıştı. Hepsinin ilaç dozunu başarılı bir şekilde ayarlamakta epey deneyimliydi.<br><br>1954\'ün başlarında genç bir adam kayıplara karışmıştı ve insanlar onu bulmak için kasabanın altını üstüne getiriyordu. Birkaç ay sonraysa Kenneth\'ın babası evin döşemelerinin altında çalışırken, oğlunun puro kutusunu buldu. Kutuyu kırarak açtı ve içindeki tüyleri, hayvan patilerini ve bir adamın parmağını görünce dehşete kapıldı.<br><br>İşten dönen Kenneth, babasının elinde bir puro kutusuyla döşemelerin altından çıktığını gördü. Arkasına bakmadan uzaklaşan Kenneth, bir daha asla evine dönmedi.<br><br>Kenneth, birkaç haftalık zor bir dönemden sonra şehirleri dolaşan bir sirkle karşılaştı. Olağanüstü gücünü kullanarak ipler üzerinde çalışmak üzere işe alındı. Kendine yeni bir isim koymuştu: Jeffrey Hawk.<br><br>Kendini ansızın birbirine yakın bir topluluğun içinde bulan \\"Jeffrey\\"nin sosyalleşmeyi öğrenmesi gerekiyordu. Kendine âdeta yeni bir kişilik oluşturdu. Yeni ailesi onu çekici ve yardımsever biri olarak aralarına kabul etti.<br><br>Sonraki on yıl boyunca sirkle birlikte ABD\'nin her yerini karış karış dolaştı. Fakat seyyah hayatı onu kötü alışkanlıklara itmişti. İçki, abur cubur, uyuşturucular... Hepsine fazlasıyla bulaşmıştı. Bir ara bunlar yeterli oluyordu; ancak zamanla eski dürtüleri geri geldi ve göçebe hayatı kisvesi altında tekrardan öldürmeye başladı. Sirk çalışanlarından kıyafet ve makyaj malzemesi çalarak, kurbanlarını bayıltmadan önce onlara yaklaşabileceği bir kılığa büründü. Daha sonraysa onları karavanına getirip iple bağlıyordu. Gözlerini açan kurbanlar kendilerini Jeffrey\'nin insafında buluyordu. Onun için eğlence bu zamanlarda başlıyordu. Kurbanlarının çığlıkları, onlara zihinsel ve fiziksel olarak işkence eden Jeffrey\'nin daha fazla haz almasına sebep oluyordu.<br><br>Kurbanları bitap düşünce Jeffrey onların parmaklarını inceleyerek en güzelini, dilinde gezdirerekse en lezzetlisini seçiyordu. En iyisini bulduğundaysa, kendisiyle gurur duyuyor ve onu kesip koleksiyonuna ekliyordu. Jeffrey için vücudun geri kalanı gereksiz bir çöpten ibaretti. Onlardan kurtuluyordu.<br><br>Erkek, kadın, genç, yaşlı... Bunları önemsemiyordu. İyi bir koleksiyonun sırrı çeşitlilik, anlattığı anılar ve hikâyelerdi.<br><br>Kostümünü artık daha az çıkarıyordu. Eski kişiliğini parça parça kaybederken, kendini artık hepten palyaço olarak görüyordu. Onu benimsemişti.<br><br>Zamanla kayıtsız ve özensiz olmaya başladı. Jeffrey alkolün etkisiyle uyurken, kurbanlarından biri iplerinden kurtulup kaçmayı başardı. Kadının çığlıklarına uyanan sirk halkı onun kapısına toplanmıştı. Uyanıp panikleyen Jeffrey, atını kamçıladı ve karavanıyla birlikte geceye karıştı.<br><br>O zamandan beri ülkeyi dolaşan bir parazit gibi, çeşitli karnavallarda ve sirklerde çalıştı. Ancak hiçbir afiş veya broşürde görünmüyordu. Ona yaklaşacak kadar cesur veya aptal kişileri kendine çekip tuzağa düşürüyordu. Kayboldukları anlaşılıncaya kadarsa çoktan yola koyulmuş oluyordu.<br><br>Bir gün ABD\'nin sıradan yollarını arkada bırakarak, sisten yapılmış bir perdenin içinden geçip yeni bir diyara vardı. Burası fanilik ve geçiciliğin hüküm sürdüğü bir dünyaydı. Seçtiği hayata son derece uygundu. Hayatı boyunca kendini daha önce hiç hissetmediği kadar evdeymiş gibi hissediyordu. Kampını kurdu ve ilk ziyaretçisini beklemeye koyuldu.","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"Rin, Yamaoka ailesinin tek çocuğuydu. Kagawa\'daki geleneksel evlerinin tozlu koridorlarında yetiştirildi. Özel bir üniversite olan Takamatsu\'nun Eğitim Bilimleri bölümünde okudu. Bu da ailesinin zaten sallantıda olan para durumunu daha fazla zedeledi. Annesinin o yıl hastalanması, ailenin borç batağına saplanmasına sebep oldu. Rin yarı zamanlı bir işe girerek ailesinin yükünü azaltmaya çalıştı ama çabaları nafileydi.<br><br>Babası bitmek bilmeyen borçlarla başa çıkamıyordu. Terfi almak için çift vardiya çalışıyordu. Uykusunu alamamaya başlamıştı. Karanlık bir fısıltı ona içinde bulundukları umutsuz durumu hatırlatarak tüm gece ayakta kalmasına yol açıyordu. Rin\'in bitkin babası, gerçeklik duygusunu kaybetmeye başladı. Fısıltının söylediklerini inkar etmeye çalışan adam, çaresiz bir yola başvurdu. Patronuyla buluştu ve durumu ona açıkladı. Prim, terfi, izin... Bunların herhangi biri için patronuna yalvardı.<br><br>Talebi reddedildi. Şirket hatalı bir ürün serisi çıkardı ve bu onlara çok pahalıya mal oldu. Birileri sorumlu tutulmalıydı ve Rin\'in babası ideal bir günah keçisiydi. 22 yıllık işinden kovuldu.<br><br>Rin işinden eve geliyordu. Restorandaki müşterileri eğlendirmek için geç çıkmıştı. Bisikletini park ederken içeriden annesinin çığlıklarını duydu.<br><br>Merdivenlerden koşarak ebeveynlerinin odasına ulaştı. Yerde annesinin parçaları vardı. Kolları ve bacakları temiz bir şekilde vücudundan ayrılmıştı. Göğüsleri kesilmişti, kaburgaları görünüyordu. Göğüs kafesi kırılıp açılmıştı. Rin bu vahşi manzara karşısında istemeden öğürdü.<br><br>Bir anda havadan keskin bir katana Rin\'in üzerine indi. Rin kendini korumak için kolunu havaya kaldırdı ve kılıç dirseğiyle bileği arasındaki bölgeyi kesti. Saldırganın kim olduğunu anlamasıyla yaşadığı şaşkınlık acıyı hissetmemesine sebep oldu. Babası elinde katanayla ve metanetli bir yüz ifadesiyle karşısında duruyordu. Durması için feryat etti; fakat babası kılıcı bir kez daha koluna indirdi.<br><br>Hızla kaçarken kana basıp kayarak yere kapaklandı. Kapı çerçevesinden destek alarak ayağa kalktı. Katana duvarı delerek diğer kolunu da kesti. Acı içinde haykırdı ve koridorda topallayarak ilerlemeye çalıştı. Ancak karşısında tekrardan babasının katanasını buldu.<br><br>Titreyerek geri çekildi. Yarılan karnının yumuşak, kopmak üzere olan etini bir arada tutmaya çalışıyordu. Annesinin birbirine dolaşmış uzuvları gözlerinin önünde canlandı.<br><br>Rin babasına doğru koşarak onu itti. Babası geriye doğru tökezledi. Gözü dönmüş adam kızın karnına yumruk attı ve Rin acı içinde duvara yaslandı. Babası tekrardan ayakları üstünde durmaya çalışan Rin\'in bacağını yararak, kızı yere düşürdü.<br><br>Rin merdivenlere doğru sürünürken, babası onu saçından tutarak cam bölmeye doğru fırlattı. Cam çarpışmanın etkisiyle kırıldı ve Rin bir kat aşağı düştü.<br><br>Babasının yukarıdan gelen ayak seslerini duyabiliyordu. Kendini zorlayarak cam parçalarıyla dolu yerde sürünmeye çalıştı. Parçalar vücuduna batıyor, etini kesiyordu. Babası durdurulmalıydı. Ona ve annesine yaptıkları yanına kalmamalıydı.<br><br>Her öksürdüğünde ağzından kanlar akıyordu. Öksürüğün şiddetiyle çenesini yerdeki cam parçalarına çarptı. Her yer kan içindeydi. Tok kalp atışları kulaklarında çınlıyordu. Vücudu çok ağırlaşmıştı, hareket edecek takati kalmamıştı.<br><br>Yer babasının adımlarıyla sarsılıyordu. Öleceğini biliyordu ama artık umursamıyordu. Ya bu hayatta ya da öteki hayatta babasından intikamını alacaktı.<br><br>Karanlık bir Sis gözlerini bürüdü. Fakat kızın öfkesini dindirmeyi başaramadı. Rin huzura kavuşmak istemiyordu, henüz değil. Karanlık ona fısıldayarak kan ve intikam dolu bir söz verdi.<br><br>Yemin edilmişti artık. Rin gözlerini yumdu.","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"Frank Morrison 19 yaşındaydı ve çok da parlak bir öğrenci sayılmazdı. Bir hakemi tribüne ittiği için basketbol takımından atıldığından beri okulu bırakmıştı. Fakat Frank kötü geçen çocukluğuna rağmen, herkesi neşelendirebilecek müthiş bir potansiyele sahipti. Henüz altı yaşındayken Calgary\'de sokaktan alınıp çeşitli koruyucu ailelere verildi. Her ne kadar ani çıkışlar yaptıysa da, öfke krizine girdiyse de ve kavga çıkardıysa da her zaman yeni, tanımadığı evlere yerleştiriliyordu. Son taşınmasıysa, şimdiki koruyucu babası Clive Andrews onu üç yıl önce evlat edinme merkezinden aldığında gerçekleşmişti. Ormond\'daki küçük kır evine varmadan önce yedi saattir yoldaydılar. Bu birlikte geçirdikleri en uzun süreydi. Clive genelde aile hizmetlerinden gelen parayı barlarda harcamakla meşguldü.<br><br>Ormond nüfusu altı bin olan, küçük, sıkıcı ve ücra bir kasabaydı. Gri kış yılın büyük bir kısmı boyunca devam ediyordu. Frank başka bir aileye yerleşebilmek için elinden geleni yaptı, ta ki güzel bir kız ilgisini çekinceye dek. Julie, Ormond\'da yaşamaktan daha iyisini hak ettiğine inanan popüler bir kızdı ve bu kasabadan tek kaçış yolu Frank isimli bir yabancıydı. Frank, Julie\'nin düzenlediği bütün partilere katılıyordu. Buradaki herkes ondan daha gençti ve kolayca etkileniyordu. Bu Frank\'in epey hoşuna gidiyordu. Partilerde hava atmayı seven, fevri Joey\'yle ve Julie\'nin en iyi arkadaşı olan utangaç Susie\'yle tanıştı.<br><br>Birlikte Ormond Dağı\'ndaki terk edilmiş bir evde vakit geçiriyorlardı. Birlikte geçirdikleri zaman, bu küçük ve sıkıcı kasabadaki önemsiz hayatlarından bir kaçış niteliğindeydi. Frank\'se bu süreyi grubun deneyimsizliğini çok güçlü bir şeye dönüştürme fırsatı olarak görüyordu. Geceleri hovardalık ve taşkınlık yaparlarken, grubun sınırlarını test ediyordu. Hafta sonu planları zorbalık, vandalizm ve hırsızlıktan oluşuyordu. Grup öyle bir noktaya gelmişti ki, artık Frank\'in dediği her şeyi sorgulamadan yapıyordu. Maskelerini taktıklarında sınırlar ortadan kalkıyordu. Bir akşam Frank, yakın zamanda onu kovan bir mağazaya zarar vermesi için Joey\'yle iddiaya girdi. Kapanış vaktinden sonra mağazada kimse bulunmadığı için kolayca içeri girebilmişlerdi. Fakat Julie yaklaşır yaklaşmaz, mağazada bulunan bir temizlikçi onu yakaladı. Bastırmaya çalıştığı çığlıklarını duyan Frank\'i karanlık bir dürtü ele geçirdi. Elinde bıçağıyla Julie\'nin yardımına koşan Frank, bıçağını tereddüt etmeden temizlikçinin sırtına sapladı.<br><br>Grup şaşkınlıktan donakalmıştı. Frank\'se onlara işi bitirmelerini emretti. Joey dişlerini sıkarak bıçağı tutup çıkardı ve onu yerde kanayan adamın kaburgasına sapladı. Susie bunu yapmak istemedi. Frank\'se ona bağırdı. Başladıkları işi bitirmeleri gerekiyordu. Julie gözlerini kapayarak bıçağı adamın göğsüne sapladı. Bıçağı Susie\'ye uzattı. Artık bu işte beraberlerdi. Susie, Julie\'ye şüpheyle bakarken, Frank Susie\'nin ellerini tuttu ve bıçağı adamın gırtlağına geçirdi. Frank onlara hızlı hareket etmeleri gerektiğini söyledi. Yeri çabucak sildiler ve cesedi Joey\'nin arabasının bagajına koyarak Ormond Dağı\'na doğru yola çıktılar.<br><br>Dördü de cesedi gömmek için çamurlu karı kazarken, Frank ormanda bir şeyin hareket ettiğini fark etti. Bıçağını aldı ve ne olduğunu görmek için gruptan ayrıldı. Sis Frank\'in etrafına toplandı. O kadar yoğundu ki, Frank ileriyi göremiyordu. Adımlarını takip etti ve meşum bir yolla karşılaştı. Ürpertici patikayı takip etmeye başladı. Karanlık âdeta onu çağırıyordu. Julie, Susie ve Joey kazmayı bitirdi ama Frank ortalıkta yoktu. Julie, Frank\'in kardaki çamurlu ayak izlerini fark etti ve hep birlikte ormanın derinliklerine giden patikayı takip ettiler. Julie, Susie ve Joey o gece eve dönmediklerinde, aileleri Frank\'le birlikte kaçtıklarını düşündü. Hepsi farklı bir teori üretti. Fakat Ormond Dağı\'ndaki terk edilmiş evde bir ceset bulunmasıyla, kasabanın ruh hali tamamen değişti.","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"Yedi kişilik bir ailenin en genç üyesi olan Adiris, Babil\'in merkezinde yer alan Arınma Tapınağı\'nın ateş gibi sıcak, kiremit kırmızısı basamaklarına bırakıldığında henüz beş yaşındaydı. Keder ve şaşkınlıkla başa çıkabilmek için, ilahların onun için özel bir planı olduğunu düşünerek kendini avutuyordu. Yeni hayatı hizmetkârlıktı. Bahçelerin bakımını yapıyor, ayin yemekleri hazırlıyor ve ayinlerde kullanılan tütsü kaplarını temizliyordu. Geceleriyse yaşama amacını ortaya çıkaracak bir işaret için dua ediyordu.<br><br>Reşit olduğunda, yüksek rütbeli rahibelerin su ve yaradılış ilahı deniz keçisi için yıllık olarak düzenlediği ayinlerden birine katıldı. Sütunlardan destek alan büyük salonda tütsüsünü sallayarak etrafa siyah ve yoğun bir duman saçtı. Kara dumanlar soğuk dev sütunların tepesine kadar yükselip ortadan kayboluyordu. Endişeleri silinmişti. İlahlara daha önce hiç olmadığı kadar yakın hissediyordu. Ayinden sonraki her gün canla başla çalışmaya, görevlerini yerine getirip yenilerini üstlenmeye ve bir yandan da arınma ayinlerinde diğer rahiplere yardım etmeye başladı.<br><br>Rahiplerin sürekli yardıma ihtiyacı oluyordu. Yüksek tapınak duvarlarının ardında yıkıcı bir veba yeniden dirilmişti. Halkın isteğini yerine getirmek için de her gün arınma ayinleri düzenleniyordu. Aradan geçen aylarda rahipler de hastalığa yakalandı. Artık hiçbirinin ayin düzenleyecek kuvveti kalmamıştı. Birçok arınma ayini düzenleyen Adiris, bu işi yapabilecek tek kişiydi. Adiris her ne kadar acemi de olsa, gitgide büyüyen panik kontrol altına alınmalıydı.<br><br>İlk merasiminden önce endişelenen Adiris, rahiplerin harim odasına girdi. Mumları yaktığında odanın arka tarafında dar bir boşluk olduğunu fark etti. Boşluktan içeri giren Adiris, odanın altındaki gizli yeraltı mezarlığına ulaştı. Mezarlık bomboştu. Sadece ellerinde sayısız mücevher olan, kollarını yana açmış bir kadının altın heykeli vardı. Bu Adiris\'in beklediği işaretti.<br><br>Büyük salon, Adiris içeri girdiğinde kafalarını eğen bir sürü müritle doluydu. Tuğladan yapılmış mihraba giderek gümüş merasim bıçağını eline aldı. Yakut yüzük taktığı parmağı, hançeri bir pençeymişçesine kavrıyordu. Gençliği ve güzelliğinden zaten etkilenmiş müritler, Adiris\'in gösterişiyle iyice şaşırdı.<br><br>Adiris yaradılış destanını ezbere okurken, arkalarda duran bir kadın bayıldı ve yere yığıldı. Hemen yardıma koşan Adiris, kadının ayaklarını kaplayan siyah kabarcıkları fark etti. Kutsal hançeri eline aldı ve tereddüt etmeden ayağına doğru savurarak ayak parmaklarından birini kopardı. Sonraysa kanlı parmağı ilahlara adayarak, onlardan kadını korumalarını istedi. Adiris\'i yeni saygıdeğer rahibeleri olarak gören müritlerden çıt çıkmıyordu.<br><br>Şehirde Adiris\'in zenginliği, güzelliği ve bağlılığıyla ilgili dedikodular hastalık kadar çabuk yayıldı. Çok geçmeden Adiris\'in müritleri, onu Babil\'in Baş Rahibesi olarak anmaya başladı.<br><br>Fakat hastalığın ilk belirtilerini gördüğünde, Adiris\'in inancı sarsılmıştı. Öksürünce ağzına balgam ve kan geliyordu, boynu çıbanlarla kaplıydı ve dört parmaklı ayağı artık kapkaraydı. Hastalığından utanan Adiris, artık örtülü bir başlık takıyor ve derisinden yayılan iğrenç hastalık kokusunu gizlemek için bir tütsü taşıyordu. Kurtarılmak için ayinler düzenlemeye devam ediyor ve müritlerine kutsanmış suyla yiyecek veriyordu.<br><br>Ancak hiçbir ayin onu kurtaramazdı. İlahları tatmin etmek için son çare olarak kendini şehirden sürgün etti. Birkaç müridiyle beraber kuzeye gitti. Urartu\'nun soğuk ormanlarından geçerken artık yürüyemeyecek hale geldiler.<br><br>Geceyi nemli bir mağarada geçiriyorlardı. Adiris kendi kusmuğunun üzerinde yatıyordu. Kapkara olan ayağı o kadar çok şişmişti ki daha fazla devam edemezdi. O ve müritleri mağarada gerçeği anladı: Hepsi vebalıydı.<br><br>Öğüren müritlerinin yanında diz çöken Adiris, son bir kez dua etti. Kara tütsü dumanı soğuk rüzgârla birlikte kaybolmadan önce mağaranın nemli tavanına yükseldi.<br><br>Ne Adiris\'in ne de müritlerinin cesetleri bulundu. Birçok kişi onun dönüşünün hikâyelerini anlattı ama kimse Babil\'in Baş Rahibesi\'nin kaderini bilmiyordu.","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"Kimileri tarafından Jed Olsen olarak bilinen Danny Johnson, mutfak tezgâhında duran gazeteyi aldı. Önceki haftanın gazetesiydi bu. Ön sayfasında çökmüş ve çukurlu yüzünün fotoğrafı vardı. Sıcaklık ve nem yüzünden mutfaktaki her şeyin mayıştığı, bunaltıcı bir Florida akşamıydı. Durduğu yerde terliyordu. Gazeteyi okumak için terden ıslanmış sandalyelerden birine oturdu. Bu makalenin içeriği iyi olmalıydı. Ne de olsa Roseville\'de şahane bir iş çıkarmıştı.<br><br><i><b>HAYALET SURAT ORTADAN KAYBOLDU</b><br><br>18 Haziran 1993<br><br>İlk bakışta Jed Olsen, pek çok küçük gazetede çalışmış mütevazı ve hevesli bir serbest yazar olarak görünüyordu. Roseville Gazetesi çalışanları, onun nazik ve dürüst kişiliğini seviyor, röportajında daha beş dakika geçmeden insanlar ona ısınıyordu:<br><br>\\"Jed, baş editörü hızlıca fark etti ve görür görmez kocaman bir gülümsemeyle elini sıkarak eski Amerikan değerlerinin ne kadar da güzel olduğundan bahsetmeye başladı. İşte hepsi bu kadardı. Kendini sevdirmişti bile.\\" -Eski Bir Roseville Gazetesi Yazarı<br><br>Olsen, onu Utah\'tan Pennsylvania\'ya kadar farklı yerlere götüren dengesiz kariyer yolculuğunu hiçbir zaman detaylandırmadı. Çalıştığını söylediği o yerlerde gerçekten çalışıp çalışmadığı bilinmiyordu. Düzgün bir portföyü vardı ve düzgün bir insandı, onların da acilen bir yazara ihtiyaçları vardı.<br><br><b>ROSEVILLE CİNAYETLERİ</b><br><br>Roseville Cinayetleri baş gösterdiğinde Olsen beş aydır gazetede çalışıyordu. Genç yaşlı pek çok kurban, evlerinde bıçaklanarak öldürülmüş halde bulunuyordu. Raporlara bakılırsa kurbanlar rastgele seçilmişti fakat katilin, girdiği evlere aşina olduğu belliydi. Çoklu bıçak darbeleri cinayetlerin kişisel sebeplerle işlendiğini gösteriyordu. DNA izi yoktu. Bölge polisi şaşkına dönmüştü. Cinayetler, tutku cinayeti öfkesiyle işlense de önceden soğukkanlılıkla planlanmış gibiydi.<br><br>Katil, hedeflerini takip etmekten de keyif alıyordu. Kurbanlardan ikisi, ölümlerinden birkaç gün önce evlerine giderken karanlık bir siluet tarafından takip edildiklerine dair şikâyette bulunmuştu. Katil, Roseville\'in kuzeyinde küçük bir bar olan Walleyes\'dan beri onları takip etmiş, evlerinde onların fotoğraflarını çekerken bir giriş yolu aramıştı. Haftalarca aynı kurbanı takip ederek alışkanlıklarını ve rutinlerini dikkatlice çözmeye çalışıyordu. Öldürme dürtüsünü hissettiğindeyse listesindeki en savunmasız kişiyi ziyaret ediyor ve sessizce evine giriyordu.<br><br>Gazetedeki herkes, Roseville Cinayetleri hikâyesi üzerinde çalışıyordu. Olsen\'a genellikle kurbanların aileleriyle röportaj yapma ve polisten gelen resmi açıklamaları aktarma görevi veriliyordu. Yaptığı bu işlerin, ceset sayısını gittikçe arttırdığını o sırada kimseler bilmiyordu tabii.<br><br><b>HAYALET SURAT</b><br><br>Olsen, kapüşonlu birilerinin gece bir eve girdiğini gösteren görüntüleri çıkardığında Roseville\'de gerçek bir panik ortamı oluştu. Karanlıkta beyaz ve bulanık görünen maskeli yüz, bir saniyeliğine kamerayla göz göze geldikten sonra eve giriyordu. Olsen, \\"Hayalet Surat Kameralara Yakalandı\\" başlıklı bir makale yazdı hemen. O sıralarda, yaptığı işle gurur duyuyor, yazdığı bu hayalet hikâyelerinden tüm kentin korkmasını keyifle izliyordu.<br><br>Haftalar sonra Olsen çalışma masasına bir not bırakarak ortadan kayboldu:<br><br>\\"Umarım hikâyelerim hoşunuza gitmiştir. Ben onları yaratırken büyük keyif aldım. Merak etmeyin, işim henüz bitmedi.\\" -Jed Olsen<br><br>Jed Olsen hâlâ yakalanamadığı için Roseville emniyeti bir açıklama yapmaktan kaçınıyor.<br><br>Danny, gazetede makalenin olduğu bölümü yırtarak gülümsedi. Soruşturmada ibre onu göstermeye başladığında Roseville\'i hızlıca terk etmişti.<br><br>Oturduğu yerden kalkmaya çalışırken derisi, ıslanmış sandalyesine yapıştı. Yatak odasına girer girmez boğucu bir nem dalgasının içine düştü. Nemin yarattığı buğu, küçük pencerede damla damla süzülürken yer yer yırtılmış duvar kâğıdı boşlukta sallanıyordu. Çiçek desenli duvar kâğıdı, dehşet verici fotoğraflar ve gazete manşetleriyle doluydu. Danny bir hafta önceki makaleyi, parçalanmış kafatası fotoğrafının üzerine astı. Biraz acıkmıştı. En son ne zaman yediğini düşündü. Bu sabah bıçağını ve giysilerini yıkadıktan sonra mı yemişti acaba? Yoksa önceki gece o kızı takip ettikten sonra mı yemişti? Net hatırlayamıyordu.<br><br>Bir adım geri atıp duvardaki işlerine hayranlıkla baktı. Yazdığı tüm o makaleleri, planladığı hikâyeleri ve hayata taşıdığı sahneleri düşünmeye daldı.<br><br>Birden ürperdi. Dondurucu bir meltem, yatak odasındaki nemi mat, buz gibi bir Sis\'e çevirmişti. Kadının çığlığı duyuldu. Ayağının altındaki ölü yapraklar çıtırdıyordu.<br><br>Heyecanla gülümsedi. ","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"Yüzünün olması gerektiği yerde iğne gibi dişlerle dolu açık bir ağız, geniş ve kavisli jilet gibi keskin pençeler ve kurbanlarının üstüne atlamasını sağlayan güçlü bacaklar, Demogorgon\'u hangi boyutta olursa olsun korkunç bir canavar haline getiriyor. Avını vahşi ve kontrolsüz öfkeden oluşan bir kâbus misali avlıyor, parçalara ayırıyor, tüm et ve kemiği yutuyor ve leşçilere geride hiçbir şey bırakmıyor. Bu yaratığın en ufak bir şefkat veya kontrol duygusu yok. Kurbanının tepesinde dikilirken şüphe veya merhamet duyduğuna dair hiçbir işaret göstermiyor. Sadece bitmek bilmeyen kana susamışlık içgüdüsüyle avını öldürüyor. Mükemmel bir avcı olan Demogorgon, Baş Aşağı Dünyası\'nda korkutucu yaratıkların saklandığının ölümcül bir kanıtı ve Mahluk\'un onu seçmesinin nedeni de bu.","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"Ailesine şeref getirmek Kazan Yamaoka\'ya asla yetmedi. Babasından daha büyük şöhrete ulaşmak ve samuraylık kültürünün, samuray kılığına giren çiftçiler gibi olaylar yüzünden zayıflamasına son vermek istiyordu. Babası Kazan\'ın dikkatini daha soylu uğraşlara yöneltmeye çalıştı ama Kazan onun öğütlerini dinlemedi. Babasının katanasını alıp değerini kanıtlamak ve Japonya\'yı sahte samuraylardan arındırmak için kötücül bir yolculuğa başladı. Kendisine öğretilen kanunları hiçe sayarak sahte samurayları dere tepe, orman sahil demeden öldürdü. İşlediği cinayetler kanlı, acımasız ve iğrenti vericiydi. Topuzlarını koparıp zırhlarını çıkararak hem çiftçileri hem savaşçıları küçük düşürüyordu. Hiddeti, kana susamışlığı ve çirkin espri anlayışı sınır tanımıyordu. Keşişler bedenini kötü, dünya dışı bir gücün ele geçirdiğine inanıp onu lanetlediler ve soylu bir derebeyi ona hiddetli samuray \\"Oni-Yamaoka\\" demeye başladı. Bu hem Kazan\'a hem de ailesine hakaretti.<br><br>Ailesinin adını temize çıkarmaya kararlı olan Kazan artık ona Oni-Yamaoka diyen herkesi öldürüyordu. Bu hakareti aklı almıyordu. En güçlüleri bile yenmiş, ülkedeki sahtekârları ortadan kaldırarak samuray sınıfını temizlemişti. Ona neden canavar diyor olabilirlerdi? Savaş meydanına çıkıp en yaman savaşçıları bile lime lime ettiği için mi? Çivili bir kanabo sopasıyla yüzlerce kafa kırdığı için mi? Yoksa kurbanlarından \\"hatıra\\" aldığı için mi? Pek de umurunda değildi aslında. Canavar diye anılmaya katlanamıyordu ve kafasının içindeki uğursuz bir ses, adını lekeleyen derebeyini öldürmesini söylüyordu ona.<br><br>Bu derebeyinin şehrine doğru ilerlerken bir gün toprak bir yolda karşısına bir samuray dikilip yolunu kesti. Kazan kanabosunu çıkardı. Samuray tek bir kelime bile etmeden saldırıp üstünlüğü ele geçirdi ama bir anlık tereddüdü sonunu getirdi. Kazan mahvedici bir darbeyle samurayın miğferini çatlatıp kafasını ezdi. Ölen samurayın yanına yaklaşınca babasının yüzünü gördü ve dizlerinin bağı çözüldü. Babası Kazan\'a utanç ve pişmanlıkla bakarken son nefesini verdi. Kazan gözlerini kapatıp artık sesi çıkmayana kadar azap dolu çığlıklar attı. Gözlerini tekrar açtığında… babası yoktu. Onu öldürmekle kalmamış, hırsızların zırhını çıkarıp satmak için cesedini çalmasına da göz yummuştu.<br><br>Ne yapacağını şaşıran, içi keder ve kin dolan Kazan ülkesinde amaçsızca dolaşmaya başladı. Bir yandan kafasının içinde sürekli babasının alaycı sesini duyuyor, bu ses ona başarısızlıklarını anımsattıkça kontrol edilemez öfke nöbetlerine tutuluyordu. Kazan bir gün ormanda yürürken bir Oni heykeline rastladı. Durup uzun uzun heykele baktı. Yıpranmış, üstü yosun kaplı heykel sanki onunla dalga geçiyor, onu yok etmeyi çok istediği sahtekâr samuraylardan biri olmakla suçluyordu. Kazan, kafasının içindeki sesin kahkahalarını susturunca kendisine \\"Oni-Yamaoka\\" adını takarak aşağılayan derebeyini hatırlar gibi oldu.<br><br>Öfkesi tekrar katmerlenerek derebeyinin yaşadığı, karlı dağların zirvesine kurulmuş şehre doğru yola çıktı. Kazan\'ı şehrin kapılarında 12 samuray karşıladı. 12\'si de kanabosuyla can verdi. Hızına, gücüne yetişebilen yoktu. Öfkesi akıl alacak gibi değildi. Üstü başı kanla kaplanan Kazan, şehri savaşa savaşa geçti ve sonunda derebeyini bir evde saklanırken buldu. Onu sürükleyerek bir dolaptan çıkardı, kaçamasın diye tendonlarını kesti ve köpek gibi kıvranarak yalvarışını seyretti. Sonra bir an bile tereddüt etmeden elini derebeyinin ağzına sokup adını lekelemiş olan sivri dilini kopardı.<br><br>Sonunda tatmin olan Kazan evden çıkınca etrafını düzinelerce çiftçinin sarmış olduğunu gördü. Ellerinde paslı tırpanlar, keskin yabalar ve ağır sopalar vardı. İlk birkaç hücumu savuşturdu ama her yönden bir sürü kişi üzerine çullanıyordu. Saniyeler içinde yere devrildi. Çiftçiler sevgili efendilerini öldüren \\"Oni\\"ye sırayla silahlarını saplayıp işkence ederken o ise gözlerini soğuk, kayıtsız, gitgide kararan gökyüzüne dikmişti. Gözü dönen kalabalık Kazan\'ı yakınlardaki ufak bir değirmene sürükleyip işkenceye orada devam etti. Sonunda onu acılar içinde, can çekişerek ölsün diye bir kenara bıraktılar. Döndüklerinde değirmeni tuhaf, siyah bir sisle dolu buldular. Kazan\'ın cesedi ve kanabosu ise ortada yoktu. Bu şehre hiddet dolu bir Oni\'nin musallat olduğu efsanesi de böyle başladı.","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"Amerika\'nın ortalarında bir yerlerde, tozla kaplı çorak topraklarda doğdu Caleb Quinn. İrlandalı yoksul, göçmen bir ailenin çocuğuydu. Sınır bölgesinde hastalık, açlık ve ölüm sıradandı ve kodamanlar ceplerini doldururken, akıncılar kırıntılarla yetinmek zorundaydı. Caleb\'ın bir zamanlar mühendis olan babası, kapısında \\"İrlandalılar Başvuramaz\\" yazan pek çok şirket karşısında iş bulmakta zorlanıyordu. Artık birer antika haline gelmiş alet edevatı, Caleb onları keşfedene dek yıllarca dokunulmadan kalmıştı. Oğlunun iş konusundaki ilgisini fark eden baba, ona eski ingilizanahtarını hediye etti. \\n\\nBabasının kılavuzluğunda ürettiği cihazların tuhaf denilebilecek işlevleri vardı. Ancak babası yokken bu tuhaflık yerini korkunçluğa bırakıyordu. Taslaklarını gizli tuttuğu bir maske, takanın gözlerine dikenli teller saplıyor ve onları yuvalarından söküyordu. Üstelik bu taslaklarda kendisini itip kakan bazı oğlanların bu maskeyi taktığı çizimler bile vardı. \\n\\nCaleb\'ın yaşı ilerledikçe mühendislik becerileri de piyasaya uygun hale gelmişti; bunu gören işverenler, ayrımcılık konusunu göz ardı etmeye razıydı. United West Rail\'ın sahibi Henry Bayshore onu işe aldı. \\n\\nCaleb ilk iş olarak yere tren rayı çivisi saplayan bir silah yaptı. Ardından, buharla çalışan ve tünel açan bir matkap. Bayshore bunlar karşısında ilgisizmiş gibi görünedursun, cihazları başka şirketlerde ortaya çıkmaya başladı; Caleb\'dan çalınan patentler satılmıştı. \\n\\nCaleb\'ın damarlarında tanıdık bir his dolaşıyor, kalbindeki keskin acıyı besliyordu. Şimdi bile zenginler onun aklıyla ürettiği emeği sömürürken artıklarla yetinmek zorundaydı. Öfkeden gözü dönmüş halde kendini Bayshore\'un ofisine attı ve patronunun suratını pestile dönene dek ezdi. Birileri onu uzaklaştırmaya çalışırken özel silahını adamın karnına doğrulttu ve tetiği çekti. Tren rayı çivisi derisini yarıp iç organları arasında seyahat ettikten sonra Bayshore\'u masasına mıhladı. \\n\\nCaleb\'ı darağacından kurtaran tek şey, Bayshore\'un mucizevi şekilde hayatta kalmış olmasıydı. 15 yıl boyunca, ülkenin ilk özel hapishanesi Hellshire Cezaevi\'nde yattı. Cahil suçlularla dolup taşan bu yerde, eğitimli bir adam olan hapishane müdürü ile beklenmedik bir dostluk kurmuştu. Onun için işkence aletleri tasarlıyor, karşılığında daha fazla yemek yiyebiliyordu. Hapishane müdürü bir süre sonra ona cezasını hafifletmek için bir teklifte bulundu. Paradan daha büyük bir zenginlik olan politik sermayeden bahsediyor, sahip olduğu bağlantıların Bayshore\'a tuzak kurarak ömrünün geri kalanını parmaklıklar ardında geçirmesini sağlayabileceğini söylüyordu. İstediği tek şey vardı: Onu zengin etmesi. Cezaevini doldurması. Maharetlerini göstererek kanun kaçaklarını canlı olarak içeri tıkması. \\n\\nCaleb atölyesine geri döndü ve birkaç dokunuşla yepyeni bir şey yarattı: Zıpkın Tüfeği. İlk deneme, Çinli bir çamaşırhaneyi soymaya çalışan bir hırsız üstünde yapıldı. Fırsatı değerlendiren Caleb, prototipini çalıştırdı. Metal mafsalların mekanik çığlıkları eşliğinde ileri fırlayan çivi, hedefin karnına saplandı. Zıpkının geri çekişiyle çiviye yakalanan bağırsakları karnından dışarı döküldü ve berbat, sulu bir ses çıkararak tozlu yola saçıldı. \\n\\nBirkaç ince ayarın ardından bağırsak saçılmaları azalmıştı. Hapishane müdürü nüfuzunu kullanarak Caleb\'ın takımını oluşturacak İrlandalı mahkûmları salıvermişti. Böylece Hellshire Çetesi doğdu. \\n\\nAltı yıl boyunca ülkeyi dolaşarak üzerlerine düşen görevi yaptılar, aranan suçluları toplayıp cezaevine gönderdiler. Glenvale\'da yaşanan kanlı bir çatışmanın ardından Caleb\'ın gözüne gazetede bir manşet ilişti: Henry Bayshore, Hellshire Cezaevi\'ni satın aldı. Fotoğrafta tipi kaymış Bayshore gururlu bir edayla hapishane müdürünün elini sıkıyordu. Kan beynine sıçramıştı Caleb\'ın, neredeyse damarlarından fırlayıp dışarı taşacaktı. Onu satmışlardı. Zenginlerin oyununda o yalnızca bir piyondu. \\n\\nHellshire Çetesi, Caleb\'a sadık kaldı ve birlikte hapishane müdürünün peşine düştüler. Cezaevi kapılarını yıkıp fırtına gibi içeri daldılar, kana susamış yağmacılar gibi bağırıyorlardı. Gardiyanlardan biri silahını çekti çekmesine ya, bir an tereddüt etmişti. Zıpkın göğsünü yarıp geçti. Caleb adamın kafasını yakaladı ve beyni parmaklıklardan aşağı akana dek bir hücrenin kapısına vurdu. \\n\\nMüdürün ofisine ulaşan Caleb kapıyı tekmeleyip açtığında içeride hoş bir sürprizle karşılaştı. Köşeye sıkışan yalnızca hapishane müdürü değildi, Henry Bayshore da yanındaydı. Öfkeden çılgına dönen Caleb, Bayshore\'un üstüne atıldı; ona yumruklarıyla, eline geçirdikleriyle vurdu, etini parçaladı. Adamın kanı kendi suratından aşağı akarken ayaklarının dibinde kızıl bir birikinti oluştu. Hellshire Çetesi müdürün etrafını çevirdi, onu kemiklerini parçalayana dek tekmelediler. \\n\\nMahvolmuş, öldürülmek için yalvaran ikiliyi sürükleyerek, mahkûmlardan oluşan ve gitgide büyüyen kalabalığın ortasına attılar. \\n\\nKan ve tere bulanmış Caleb eski hücresine doğru yürüdü, Bayshore\'un çığlıklarını artık duymuyordu bile. Yatağının kenarına oturdu. Parmak uçlarından kan damlıyordu. Parmaklıklı pencereden içeri kalın, tuhaf bir sis dolmaya başladı. Eski paslı, çatlamış ingilizanahtarını çıkardı. Soluk gözleri, metalin üzerinde gezdirdiği başparmağını takip etti. Ona ilk ne zaman sahip olduğunu hatırlamıyordu. Hatırlamak istemiyordu. Ayağının dibinde tozlu bir yol ve yolun sonunda ona kötülük yapan oğlanları, onun üzerinden ceplerini dolduran yöneticileri ve elbette... Henry Bayshore\'u gördü. Sisin arasında, onlardan kurtulmak için kullandığı aletleri gördü. Acımasız çelik kancalardı bunlar, basit tasarımları ile öyle gözalıcı ve güzellerdi ki. Ayağa kalktığında acı tüm bacağını sardı ama dayandı. Yürüdü. O tozlu yolda, ardında kanlı bir iz bırakarak ilerledi. ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"Piramit Kafa acı yoluyla ceza vermekle kafayı bozmuş sadist ve acımasız bir cellattır. Kafasındaki çelik piramit ve peşinde sürüklediği devasa bıçağıyla, Silent Hill\'in korkunç koridorlarında kimsenin anlamadığı bir görev peşinde gezinip durdu. Adımını attığı yerde canavarlar bile kaçacak delik ararken, yoluna çıkanlar zapt edilemez saldırganlığına kurban olmuştu. Görevini tamamladığında ve artık ona ihtiyaç olmadığında uzun bir istirahate hazırlanmıştı ama becerileri başka bir yerde lazım oldu. Etrafını saran sis, Silent Hill\'de alışık olduğundan daha farklıydı. Sanki bu sisteki kıvranan her parçacıkta bir yaratığın iradesi varmış ve bu yaratık onu arıyormuş gibiydi. O anda aralarında sözsüz bir anlaşma oldu. Bu sis bulutu, görev ve sadizme bir davetti. Piramit Kafa, sisin içine adımını atarak bir kez daha görevinin başına koyuldu. ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"İnsanlığın halini anlayabilmek için onun ötesine geçmek gerekir. Bitmek bilmeyen hırsı kendisini çok ilerilere taşıyan İskoçyalı kimyager Talbot Grimes işte tam olarak buna inanıyordu. Popüler bir çocuktu. Zeki, karizmatik ve otoriteye kafa tutmaktan çekinmeyen bir çocuktu. Bu sosyal meziyetlerine rağmen çok başına buyruktu ve zamanının büyük bir kısmını kasabanın etrafındaki bölgeleri keşfederek geçirirdi. Çocukluk merakı olarak başlayan şey zehirli bir yüksükotu üzerinde yaptığı deneylerle neredeyse ölümcül bir hale dönüştü. Çok fazla terleyerek ve yediği her şeyi olduğu gibi çıkararak günlerce yatağa düştü. Kendine geldiğinde onu korku değil, merak sardı. Bir tane çiçeğin onu böylesine etkileyebilmesi sihirli bir olay gibi geliyordu.<br><br>Yetişkinlik yıllarında hırsı giderek arttı ve tartışmaya açık yöntemler kullanmaya başlamasına sebep oldu. Londra Tıp Okulu\'na gitti ve aldığı birkaç kınamaya rağmen çok başarılı oldu. Sınırları zorlama isteği İngiliz Doğu Hindistan Kumpanyası\'nda iş bulmasını sağladı ve yedi yıl içinde baş kimyager pozisyonuna yükseldi. Bir süre sonra en büyük başarılarından birine ulaştı: İşçilerin dinlenme ihtiyacını azaltırken üretkenliğini arttıran bir kimyasal. Dyer Adası\'ndaki bir hapishane kampının altında bulunan gizli bir laboratuvar ile ödüllendirildi.<br><br>Hindistan açıklarındaki laboratuvarında Afyon Savaşları\'nda yakalanan tutsaklar denekleri haline geldi. Deneyler sonucunda ortaya askerlerin yüksek miktarlarda acıya dayanabilmesini sağlayan bir ilaç çıktı. Çoğu yan etkisi göz ardı edilebilir olsa da askerlerin bir kısmının delirdiği söyleniyordu. Kudurmuş bir biçimde köyleri yerle bir ediyor, köy halkını süngülere oturtuyor ve onları ağaçlara asıyorlardı. Bu konuyla ilgili resmi bir rapor yayınlanmadı ve Talbot abartılmış savaş hikâyeleri olarak gördüğü bu şeylerin kendi suçu olduğuna inanmıyordu.<br><br>Kanıtlanmış zekâsı tartışılmaz olsa da kullandığı tartışmaya açık yöntemlerin topladığı düşmanların farkında değildi. Bunun farkına varması, Mangalore gezisinde birinin kafasına çelik bir boruyla vurması sayesinde gerçekleşti. Elleri kolları bağlandı ve bir yük arabasına atıldı. Gözlerindeki örtü kaldırıldığında hasta görünümlü bir adam ona yüzlerce cesedin bulunduğu bir toplu mezarı gösterdi. Talbot, üretkenlik arttıran ilacının neredeyse bir fabrika dolusu işçiyi öldürdüğünü bilmiyordu. Kaçıran kişinin öfkesi ve suçlamaları karşısında kendisini savunamayacağını fark ettikten sonra yapabildiği tek şey, ardı ardına gelen çelik boru darbelerinden kendisini korumaya çalışmaktı. Bedeni mezara atıldı ve ölüme terk edildi. Bilinci bir açılıp bir kapanıyordu. Sürünerek buradan kurtulmayı denedi. Parmakları çürüyen et parçalarının içine giriyordu. Karasinekler açıkta kalan derisini kemiriyor, derisine aynı anda yüzlerce iğne batırılıyormuş gibi bir his yaratıyordu. Yere düştü ve ölü bir kadının baş döndürücü ela gözleriyle karşı karşıya geldi. Kafasını çeviremeyecek kadar güçsüzdü ve hayatı boyunca çalıştığı şeyin sonucuyla yüzleşmek zorunda kaldı.<br><br>Ardından, ölümün kıyısından geri döndü. Küçük bir yatakta uyandı ve ona bakan nazik ve kırışmış bir suratla karşılaştı. Bu manastır gibi görünen kadim ve gizemli okulda acı dolu her nefesinin ardından tedavisine devam edildi. Gösterişsiz uzun duvarların ardındaki yeşil bahçelerde keşişler insanlığın algısını açarak diğer boyutları bulmak üzere yasaklı metinler üzerinde çalışıyor ve her şeyin birbirine bağlı olduğuna inanıyordu.<br><br>Talbot\'ın bilgileri buradakilerin çok işine yaradı. İnsan zihnini değiştiren kimyasallar buradaki nöral genişleme teorilerinin yolunu açtı. İşte bu anda kurtuluşunun tesadüf olmadığını fark etti. Bu okuldaki araştırmaları ileriye taşıması için o mezardan kurtarılmıştı. Tedavisi tamamlanana kadar yardım etmeyi kabul etti ve keşişlerin ruh kimyasalı adını verdiği, zihnin gözünü açtığını düşündükleri epifiz bezinden üretilen bir bileşik üzerinde çalışmaya başladı. Kurtarıcılarına yardımcı olmak için başladığı bu araştırma kısa bir süre sonra takıntıya dönüştü. Okulun kayıp metinlerle dolu arşivlerine odaklanarak daha önceden mümkün olduğu düşünülmeyen fikirlerin gerçekliğini kanıtlayan bilimsel formüller açığa çıkardı. İnsanlığı yepyeni bir aydınlanma dönemine geçirmenin hayalini kuruyordu. Belki o zaman yüzlerce ölü fabrika işçisini ve o kadının ela gözlerini kâbuslarında görmeyi bırakabilirdi.<br><br>Tam büyük bir ilerleme kaydedecekken, keşişlerin davranışı değişmeye başladı. Sundukları nazik gülümsemelere, fark edildiğinde hemen başka tarafa kayan tedirgin gözler eşlik ediyordu. Alışık olduğu kibar sohbetler, sessiz şikâyetlere dönmeye başladı. Okulla ilgili hatırladığı son şey yatağının üzerindeki tavanda bulunan ağaç dalı gibi uzanmış çatlaklardı.<br><br>Sonraki anısı yalnızca birkaç görüntü ve histen oluşan bir karmaşaydı. Kör edici ışıklar, taşların üzerinde gezinen atların nal sesleri, yanaklarında çizikler bırakan bir çuval ve kolunda oluşan keskin batma hisleri. Yorgun ve pis bir halde bir afyon evinde, hasır bir yatağın üzerinde uyandı. Zihni yoğun bir sisle kaplı gibiydi ve aklına gelen ilk şey notları oldu. Bunlar, onun çığır açacak buluşunun kayıtlı olduğu tek yerdi. Bu pis bodrumun altını üstüne getirerek ve yüksek sesle yardım çığlıkları atarak deliler gibi notlarını aradı. Buradaki diğer birkaç insan yattıkları yerden kafasını kaldırıp ona baktı, fakat uyuşturucuyla yarı kapanmış gözler ve kısa bir süre sonra uykuya dalan cansız bakışlar dışında hiçbir şey sunamadılar. Arkasında beliren cüppeli figürü fark edemeden önce koluna bir iğne batırıldı ve dünyası bir kez daha karanlıklara büründü.<br><br>Tekrar ve tekrar uyandı. Her seferinde zihni daha da bulanıklaşıyordu. Dişleri arasındaki boşlukları fark etti. Ne kadar bir süre geçtiğini düşündü. Belli belirsiz bir anı aklına düştü. Ruh kimyasalı. Notları. Çığır açmanın eşiğindeydi. Uzaklardan gelen bir fısıltı zihnini işgal etti.<br><br>Bir taş buldu ve titreyen ellerle taşın ucunu sivriltti. Evin loş ışığı altında, kendinden geçmiş sakinlerinin yanında, araştırmasını baştan sona duvara kazımaya başladı. Parmakları kanayana kadar saatlerce yazdı. Ardından yere yazmaya başladı, hiçbir şey anlamamasına rağmen zihnindeki fısıltının anlattığı her şeyi dinledi. Yazacak başka bir yer kalmayınca taşı aldı ve mesajını kendi göğsüne kazımaya başladı. Kanlar içinde, gözlerinin önünde bir mucizenin gerçekleşmesine tanık oldu. Güzel kokulu turuncu çiçeklerden oluşan muhteşem bir tarla önünde belirdi. Kafasındaki fısıltı onu çağırıyor, tarlaya girmesini ve insanlığın algısının çok ötesindeki boyutları keşfetmesini söylüyordu. Talbot bir anlığına çocukken sahip olduğu merak duygusunu yeniden hissetti.<br><br>Afyon evinde yaşayanlar uyandığında ortam çok sessizdi. Dumanın yaydığı kuru koku hâlâ havada asılıydı. Uyuşturucunun zihinlerinde yarattığı sisten çıkmaya çalışırken taş zeminin kanlar içinde olduğunu gördüler. Çatlakların arasından birer nehir gibi akıyorlardı. Gözleri karanlık odaya alıştığında, odanın dört bir yanına kazınmış yazılar dikkatlerini çekmeye başladı. Tekrar tekrar yazılmış tek bir cümle vardı: <i>Ölüm Sadece Bir Başlangıç</i>.","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"Yapışık ikizler Charlotte ve Victor Deshayes\'in arasında çok özel bir duygusal bağ vardı. 17. yüzyılda imkânsız görünen başarılı doğumları mucize olarak adlandırılabilir olsa da bu mucize onların eziyet dolu hayatlarının başlangıcıydı. İkizler doğduğunda Victor\'un belden aşağısı kız kardeşinin göğüs kafesine geçmiş durumdaydı; bacakları onun kasları ve iç organlarının etrafından kıvrılıyordu. Charlotte\'tan daha ufaktı ve tam olarak gelişmiş bir oğlandan çok kız kardeşinin vücuduna yapılmış bir eklenti gibiydi. Yeni doğan bebekler acı acı ciyaklarken, onları doğurtan ebe de aynı şekilde ciyaklayarak, bir cadının iblis doğurduğunu haykırarak evden kaçtı. Bununla birlikte Charlotte, Victor ve anneleri Madeleine için de kaçış başlamış oldu.<br><br>İkizler, sonraki yılları belli belirsiz hatırlasa da o yıllar kendileri için normal bir hayata en yakın zamanlardı. Onlara göre tüm çocuklar anneleriyle böyle bir yolculuğa çıkardı, Fransa\'nın kırsal bölgelerinde kaçmak ve saklanmak onlar için sıradan oyunlardan ibaretti. Beş yaşında anneleri hasta olunca oynadıkları oyuna yeni bir zorluk eklenmiş oldu. Bitap düşen Madeleine\'in yiyecek bulma görevini Charlotte\'a vermekten başka çaresi yoktu. Victor\'un çıkıntı yapan vücudunu saklamak için giydiği fazladan kıyafetlerin altında ezilen kız, ormandaki çadırlarından çıkıp yakındaki kasabaya gitti. Bu manzara onun için tuhaf olsa da kendisine söyleneni yaptı ve pazarı gözleyip uygun bir anda çalabildiği kadar yiyecek çaldı. Bu, oyunda kazandığı bir zaferdi ama çok uzun sürmedi.<br><br>Gece yarısından sonra çadırlarının etrafını, karanlığı sallana sallana aydınlatan parlak alevler sardı. Emir veren bir bağırış, gecenin sessizliğini bozdu ve bir grup cadı avcısı içeri daldı. Charlotte, yaklaşan herkese delirmişçesine tekmeler savururken kirli eller ikizleri yataklarından çekip aldı. Madeleine çocukları için haykırdı ama kafatasına inen bir sopa, sesini aniden kesti. Victor acı acı bağırdı, kapana kısılmış bir fare gibi ciyakladı.<br><br>Avcılar hemen düzene girdiler. Yanlarındaki yargıç, doğurduğu iblisi kanıt göstererek Madeleine\'i cadılık suçundan mahkûm etti. Kadının bilinçsiz bedenini dakikalar içinde bir ağaca zincirleyip ayaklarının etrafını çalı çırpı ve kuru yosunlarla çevirdiler. Madeleine kendine geldikten sonra karşı koymadı, tek yaptığı çocuklarından başlarını çevirmelerini istemek oldu. Fakat onlara seçim hakkı tanınmadı. İkizler meşalelerin yakılışını, alevlerin annelerinin elbisesine sıçrayışını ve derisini yakıp kavuruşunu izlemek zorunda kaldılar. Annelerinin bedeninden yağ damlarken izlediler, yüzü kabarıp şekil değiştirirken izlediler. Boğaz yırtan çığlıklar kesilene dek, geriye çatırdayan bir kül yığınından ve mide bulandırıcı bir kokudan başka bir şey kalmayana dek izlediler.<br><br>İçlerinde kalan mutluluk ve iyilik duygusu anneleriyle birlikte öldü. Kafese atılıp eski bir ahşap tapınağa götürüldüler, burada kara pelerinlere bürünmüş gizli bir gruba satıldılar. Victor, yanlarına yaklaşan herkesi tırnaklamaya ve ısırmaya çalıştı; öfkeli bir yaratık gibiydi. Bir nebze de olsa sakinleşip teselli bulmasını sağlayan tek şey, kız kardeşinin onu bağrına basmasıydı. Kardeşi dışında herkese karşı büyük nefret besleyen Charlotte ise onu korumayı hayat amacı haline getirdi.<br><br>Tapınakta yıllarca olağandışı deneylere maruz kaldılar; bunların bir kısmı zalimceydi ama çoğu kafa karıştırıcıydı. Bir gün, gri renkli küçük bir kuşun boynunu kırmaya zorlandılar. Ertesi gün, güllerle dolu bir vazonun içinde parmakları kana bulandı. Her yedi günde bir, yastıklarının altına konulan ıslak bir meşe odunuyla uyudular. İlahiler de vardı; pelerinlilerin düzenli aralıklarla koro halinde söylediği, sonu gelmeyen ilahiler... <br><br>Bir süre sonra son bir deney planlandı. İki cübbeli insan silueti, ikizleri tapınağın tam ortasına sürükledi ve Charlotte\'u büyük şamdanlarla aydınlatılan bir odadaki sunağın üzerinde havaya kaldırdılar. Adamlardan biri kukuletasının altından kırışık suratını çıkardı, iki elini iki kardeşin alnına koydu ve dikkatle kafataslarını inceledi. Parlak bıçağını çıkarırken ağzından, \\"Memento mori\\" cümlesi çıktı.<br><br>Charlotte dönerek kardeşini sunağın dışına çevirdi. Victor, tiz bir ses çıkararak kolunu olabildiğince uzattı ve şamdanlardan birini yere devirdi. Kuru ahşabı anında saran alevler hızla yayılarak zemine sürtünen kara cübbeleri de yaktı. Kargaşayı delip geçen acı dolu çığlıklar Charlotte\'a hayat verdi. Cehennemin ortasında, kara dumanlar ve cayır cayır yanan alevlerden başka bir şey görmeden hızla koşmaya başladı. Ciğerlerine acı veren bir ağırlık çöktü. Buradan çıkış yoktu; her yolun sonunda dayanılmaz bir sıcaklık vardı. Dizlerinin üstüne çöktü, boğulmak üzereydi... İşte tam o sırada güneş ışığını ve ağaçları gördü. Alevlerin içinden sendeleyerek çıktı ve nemli çimenlere bastı. Arkasına bile bakmadan ormanın içine doğru koştu, ta ki yere yığılana dek.<br><br>Gözlerini açtığında hemen Victor\'un eline uzandı. Victor kımıldamadı. Bedeni, kız kardeşinin gövdesinde zayıf bir şekilde sallanıyordu. Charlotte, Victor\'un yüzüne sarıldı ve hareketsiz, üzgün gözlerine baktı. Alıştığı hareketler artık yoktu; kardeşi artık tenini çekmiyor, bacaklarını onun göğüs kafesinde oynatmıyordu. Victor ölmüştü.<br><br>Yasa boğulan Charlotte\'un kaçmaya devam etmekten başka çaresi yoktu, çünkü kara pelerinlilerin ve cadı avcılarının peşinde olmalarından korkuyordu. Kardeşinin ölü bedenini kıyafetinin içine gizledi ve en yakındaki şehrin lağımlarına gitti. Orada kamp kurdu, sık sık yiyecek çalmak için yukarı çıktı, çaresiz kaldığındaysa ahırlara girip domuz yemlerinden yedi. Yıllar geçtikçe Victor\'un cesedi çürümeye başladı; uzuvları iyice yumuşayıp karardı. Yine de bedeni tam olarak çürümedi, sanki kız kardeşinin kanı hâlâ içinde dolaşıyordu. Victor\'un cansız bedenini korumak Charlotte\'un tek yaşam amacına dönüştü. Charlotte, ailesinden kalan son kişiden ayrılmayı reddetti.<br><br>Ergen yaşlarındaki yaşamı tam anlamıyla bir hayatta kalma oyunuydu. İnsanlığa duyduğu nefret, onu asla rahat bırakmayacaklarını anladıkça daha da arttı. Acemi hırsızlıklarında ve çaresiz kaçış çabasında kaç kişi ölürse ölsün, her zaman peşinden gelip ona canavar, iblis, cadı gibi suçlayıcı sözler söyleyen insanlar olacaktı. En kötüleri de kara pelerinlilerdi. Aramaktan bir türlü vazgeçmedikleri için Charlotte da sürekli sığındığı yerleri terk edip kaçmak zorundaydı.<br><br>Yıllarca kaçtı, yıllarca mecbur kaldığı için kan döktü ve yıllarca her gece ölü kardeşine sarıldı. Çok soğuk geçen bir kış mevsiminde vücudu zorlanmaya başladı. Yiyecek sınırlıydı ve sığındığı köhne kulübeler onu dondurucu soğuklara karşı korumuyordu. Elindeki orakla ormanda yaktığı ateşin yanına sığındı; onu önce soğuk havanın mı, yoksa kara pelerinlilerin mi öldüreceğini bilmiyordu. Buz, burun deliklerinin etrafında kristalleşirken ve dudakları mavileşirken daha önce hiç hissetmediği bir şey hissetti; kabulleniş. Kendini ölümün dinginliğine bırakarak gözlerini kapatmıştı ki çok şiddetli ve tiz bir çığlık kulaklarını delip geçti. Victor, göğsünde kasılıp bir o yana bir bu yana sallanmaya başladı, etrafını bir sis bulutu sarmıştı. Victor, Charlotte daha bir tepki bile veremeden kanlı bir şekilde onun bedeninden ayrılıp karlı zemine indi ve koşmaya başladı.<br><br>Charlotte kendini ölümün kıyısından alıp Victor\'un peşinden gitti. Adını haykırdı, bacakları tutmayana dek ormanda koştu ve sonunda kalın bir sisin hemen dışında oturan Victor\'u gördü. Yüzü şekilsiz ve vahşiydi. Sisin içinden kara kukuletalı bir siluet çıkınca çığlık attı, siluet onu kolundan yakaladı. Az önce Charlotte\'un içini kaplayan dinginlik tamamen yok oldu, yerine gelense çok uzun zamandır bel bağladığı büyük öfkesi ve kızgınlığıydı. Orağını sıkıca kavrayıp sise doğru hücum etti; kardeşine yaklaşan herkesin içini deşmeye hazırdı.","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"İnsanların ilgisi sayesinde kendini bulan Ji-Woon Hak, onu izleyen gözler ve onu konuşan dillerle canlanıyordu. Sadece şöhret sahibi olmak ona yetmedi, hep daha fazlasını arzuladı. Çocukken bile ne yapar ne eder, insanların ilgisini çekmenin bir yolunu bulurdu. Aile restoranında çalışırken yaptığı bıçak fırlatma gösterileriyle müşteri çekerdi. Bunun geleneksel bir Güney Kore gösterisi olduğunu zanneden saf turistler, onu izlemek için seve seve para verirdi. Ji-Woon\'un babası, restorandan kazandıkları parayı oğlunun dans ve şan derslerine harcadı; kendisinin ulaşamadığı üne onun ulaşmasını istedi.<br><br>Ji-Woon, babasını hayal kırıklığına uğratmadı. Yarışmalardaki önemsiz tiplere yeteneklerini sergileyerek geçirdiği yıllardan sonra nihayet şöhrete giden basamakları tırmanmaya başladı. Mightee One Entertainment\'ta prodüktörlük yapan Yun-Jin Lee, Ji-Woon\'u kendi eğitim programına aldı. Seul\'de bir yurt odasına taşındı ve günde on dört saat çalışarak bir yıldıza dönüştü; nasıl hareket edip şarkı söyleyeceğini, tavırlarında özgüvenle alçakgönüllülüğü nasıl dengelemesi gerektiğini öğrendi.<br><br>Bu süreç onun için çok yorucu olsa da işe yaradı. Yun-Jin, NO SPIN\'in yeni üyesi olarak Ji-Woon\'u seçerek gruba taze kan getirdi. Şöhret de gecikmedi. Ji-Woon, insanların ona âdeta taptığı, sürekli röportaj verdiği büyüleyici bir hayat yaşamaya başladı ve bu yoğun takvim grubun diğer üyelerini yıpratsa da Ji-Woon\'a güç verdi. Geçen her gün, toplumun dört bir yanından fışkıran vasatlığı aştığına daha fazla inanıyordu.<br><br>Fakat yaşadığı bu lüks hayatın tadı zamanla kaçmaya başladı. Hayranlara baktığında sevgi ve gıptalarının grup üyeleri arasında beşe bölünerek zayıfladığını gördü. İçini dolduran onaylanma duygusu, yerini daha fazlasına duyduğu arzuya bıraktı.<br><br>Ji-Woon kimseye bir şey belli etmedi ve cazibesiyle nefretini maskelemeyi sürdürdü. Grup üyeleriyle birlikte NO SPIN\'in son albümünü kusursuz bir şekilde kaydetti. Uzun bir öğle arasından sonra stüdyoya döndüğünde kaderin ona sunduğu armağanı fark etti. Evet, yanık kablo kokusuydu bu. Kontrol odasına koştu, yere düşen hoparlörlerin kapının açılmasını engellediğini gördü. Diğer taraftan kapıyı yumruklayan grup arkadaşlarının çığlıklarına yangının çıtırtıları eşlik ediyordu.<br><br>Ji-Woon onlara seslendi, hoparlörlere koştu, sonra birini kaldırmak için tuttu ve... durdu. Donakaldı. Aldığı her nefeste bütün dikkatini vererek odaklanması gerekti; yanında atılan çığlıkları belli belirsiz duyuyordu... Sonra yavaşça geri çekildi. Ardından duymaya başladı. Alev alev yanarken onun adını haykırıyorlardı. Onları kurtarması için bağırıyorlardı. Ji-Woon! Ji-Woon! Ji-Woon Hak! Hayatında duyduğu en güzel şeydi bu. İtfaiye ekibi vardığında döktüğü gözyaşları gerçekti.<br><br>Ji-Woon, trajik bir olayın kahramanına dönüştü; arkadaşlarını kurtarmak için elinden geleni yapan ama bunu başaramayan bir kahraman... Yun-Jin, imaj yenileme zamanı gelene kadar onu röportajdan röportaja koşturdu. Ji-Woon, Dümenci olarak yeniden doğdu. Artık kendi şarkılarını yapan, dışarıdan bakınca sert görünen ama içinde yumuşacık bir kalbi olan bir solo sanatçı oldu. Fakat konserler verip televizyon programlarına çıkarken bir yandan da içinde daha karanlık bir şey büyüyordu.<br><br>Geceleri avlanmaya başladı, yalnız yaşayanları hedef aldı. İlk kurbanı büyüleyici bir sese sahip, müzik bölümünde okuyan bir üniversite öğrencisiydi. Kafasına indirdiği beyzbol sopasıyla uyandırdığı çocuğun kollarını ve bacaklarını bağladı, ağzına da bantla sabitlediği bir paçavra tıktı. Saatlerce işkence yaptı, onu canlı canlı doğradı. Ama yine de bir şey eksikti... Bir ses, bir bağ. Karnını deşerken kurbanının harika sesiyle haykırdığı yalvarışları duymak istiyordu ama duyduğu tek şey paçavra tıkılı ağzından gelen boğuk çığlıklardı.<br><br>Ji-Woon öğrendi ve uyum sağladı.<br><br>Kurbanlarını yakalayıp terk edilmiş bir binaya götürmesi gerekiyordu, seslerindeki duyguları ancak bu şekilde serbest bırakabilirdi. Bu seslerle müzik yaptı, farklı çığlık ve iniltiler oluşturmak için vücudun doğru yerlerini kesmesi gerekiyordu. Bel dörtgen kasına bıçak saplanan bir insandan uzun ve boğuk bir inilti çıkarken, şahdamarı kesilen bir insanın çıkardığı ses, boğulan bir kedinin sesine benziyordu. Çektikleri acı tamamen gerçekti. Ji-Woon, bütün sesleri kaydetti ve onları sentezleyip melodilerin arasına gizleyerek şarkılarında kullandı.<br><br>Eserleriyle gurur duyuyordu. Polislere ipucu bile bıraktı; yakın zamanda katıldığı bir fotoğraf çekiminde kullanılan vizon kürkü fuları bir kurbanının kesik boğazına sardı. Sonraki kurbanının dişlerini söktü. Söktüğü dişler, müzik kliplerinin birinde oynayan boksörün eksik dişleriyle aynıydı. Hatta ilgi ihtiyacının zirve yaptığı bir dönemde VIP buluşmasına gelen bir hayranını öldürdü. Kızın gözlerini çıkarıp yerine kendi elmas kol düğmelerini yerleştirdi ve göğsüne kanla \\"TANRI\'YI GÖRDÜM\\" yazdı. Arkasında bıraktığı her suç mahalli ayrı göz kamaştırıyordu.<br><br>Müzik kariyerini ve cinayetlerini birlikte idare eden Ji-Woon\'un eserleri, dünya çapında dikkat çekiyordu. Ancak sanatında şiddete gitgide daha çok yer vermesi, müzik kariyerini olumsuz etkilemeye başladı. Gelirler düşmeye başlayınca Mightee One yöneticileri onu suçladı. Yun-Jin, profesyonel bir hırsla onu savundu ama tek başına gücü yetmedi. Artık Ji-Woon\'un kendi şarkılarını yapmasına izin veremeyeceklerine karar verdiler.<br><br>Bu karar onu yıktı. Onun şarkıları, insanlığın gerçek yanlarını müzikle birleştiriyordu fakat yöneticiler basmakalıp olmayan her şeyi reddediyordu. Peki, öyle olsun. Sanatını anlayamıyorlar mıydı? O zaman anlayana kadar o sanata dahil olacaklardı. \\n\\nÜç ay sonra Mightee One\'ın yönetim kurulu için özel bir performans sergilemesi gerekiyordu; şaheserini planlamak için üç ayı vardı. Bir veterinerden çok yüksek bir fiyata nitröz oksit satın aldı, ardından Mightee One\'ın özel konser salonunda çalışan bir sahne teknisyenine rüşvet vererek odaya girdi. Ünü sayesinde sıradan insanların sahip olamadığı bir lükse sahip olmuştu; kimse ondan kolay kolay şüphelenmiyordu. Şov vakti geldi çattı ve yöneticilerle sahne görevlileri bilinçli olarak geciken Ji-Woon\'u beklemeye koyuldu. İşte o sırada odaya gaz dolmaya başladı. \\n\\nJi-Woon odaya girdiğinde içeridekiler ya yarı baygın halde oturuyor ya da yerde sürünüyordu. Hiç vakit kaybetmeden herkesi bağladı fakat Yun-Jin\'e gelince duraksadı; bu kadın, onu bataklığın dibinden çıkarıp yıldız yapmıştı. Onu ödüllendirecekti, bu muhteşem gösteriyi ona en güzel yerden izletecekti. Yun-Jin yarı baygın haldeyken bile karşı koymaya çalıştı, içinde büyük bir fırtına vardı sanki, diğerlerinden çok daha güçlüydü. Onu, gösterinin tek izleyicisi olarak oturttu ve gözlerini zorla açtı. Ağlayıp sızlanan diğerlerini de son gösteri için sahneye getirdi. Aşağılayan bir ifadeyle dudağını bükerek hepsinin yüzüne gelişigüzel bir makyaj yaptı ve sahne ışıklarını üzerlerine çevirdi. Artık onun enstrümanlarına dönüşmüşlerdi. \\n\\nKendi melodilerini yaratmak için onlara işkence etti; bedenlerine ustaca darbeler indirdi ve çıkan iniltilerle kreşendoya ulaştı. Bağırdılar, inlediler, feryat ettiler, sevdiklerinin adını haykırdılar, annelerinin adını haykırdılar... Bu yaşananlar, duyguların ve insan olmanın anlamının muhteşem bir şekilde dışavurumuydu. Üstelik tüm bunlar olurken gözlerini bir an olsun Ji-Woon\'dan ayırmadılar. \\n\\nSon insan enstrümanı da bir bıçak darbesiyle sessizliğe gömülüp müziği sonlandırana kadar iç organlar sahneden aşağı akmaya devam etti. Bitap düşen Ji-Woon, kan ter içinde Yun-Jin\'e baktı ve onu selamladı. Bu performans büyük bir alkışı hak ediyordu. Kusursuzluğa erişmişti. Elinde bıçakla Yun-Jin\'e yaklaşmaya başladı, son işini de halledip gösteriyi bitirecekti. Fakat tam ona uzandığı anda... \\n\\nSis. \\n\\nNereden geldiğini bilmiyordu ama etraflarını dalga dalga sardı; rutubetli, serin... ve rahatlatıcıydı. Büyük sahneyi gördü: hastaneler, tapınaklar, ormanlar, mezbahalar... Onu izleyecek, ondan kaçacak ve <i>onu deneyimleyecek</i> milyonlarca göz tarafından ayakta tutulan, paslı kancalarla bezenmiş ebedi bir düzlem. Tek yapması gereken teklifi kabul etmek, Sis\'in vasıtalarından biri haline gelmek ve en önemlisi, hepsine acı çığlıklar attırmaktı. \\n\\nBir daha!","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"Umbrella Corporation tarafından geliştirilen Nemesis, neredeyse yok edilemez organik bir biyolojik silahtır. Hedefine kilitlenir ve onu yok etmeden peşini bırakmaz. Tyrant T-103 serisinden olan Nemesis, içine yerleştirilen NE-α paraziti sayesinde arttırılmış zekâya ve farkındalığa sahiptir. İlk görevi Raccoon City\'deydi: S.T.A.R.S. üyelerinin tamamını yok etmek. Şehirde terör estiren Nemesis birden fazla defa Jill Valentine\'la karşılaştı. Jill sürekli kaçmayı başarsa da Nemesis hep yakından takip ediyordu. Kaos içindeki şehrin dumanlarıyla birleşen tuhaf bir sis üzerlerine çöktüğünde hedefini yakalamak üzereydi. Bu olay onun için bir sorun değildi. Dondurucu soğuk ve oksijen azlığı onu etkilemiyordu. Tek önemli olan şey sisin içinde ilerlemeye devam edip görevini sürdürmekti: S.T.A.R.S. üyelerini bul, onları yok et ve yoluna çıkan her şeyi öldür.","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/tr/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/tr/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Crotus Prenn Tımarhanesi müdürü Patrick Spencer\'ın güçlü ve yaman son nefesi. Hemşire bu enerjiye yoğunlaşarak ruhlar âlemine girip üst üste birkaç kez sıçrayabilir. Ardından metaneti kalmaz ve yorgunluk çöker.<br><li>Sıçrama yeteneği sağlar.</li><li>İlave <b>1</b> adet Zincir Sıçrama verir.</li>","name":"Spencer\'ın Son Nefesi","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"Çelikten yapılmış bir kapan. Kapanlar bölgenin çeşitli yerlerinde bulunur. Alınıp herhangi bir yere kurulabilir.<br><br><b>AYI KAPANI</b><br>Varsayılan ayarda, mücadeleye <b>1 Ayı Kapanı</b> ile başlarsın. Etrafta daha fazlasını bulup toplayabilirsin.<br><b>Ayı Kapanını Kurma:</b><br>Önünde kapanın kurulabileceği bir yere bir <b>Ayı Kapanı</b> kurmak için <i>Güç butonunu</i> basılı tut. Kurulu bir <b>Ayı Kapanı\'na</b> basan herhangi bir oyuncuyu hareketsiz ve etkisiz hale getirir. Kurulu <b>Ayı Kapanı\'na</b> basan sağlıklı bir Kurban ise yaralanır ama kapandan kurtulmayı deneyebilir. <b>Ayı Kapanı\'nın</b> etkisiz hale getirdiği yakındaki bir Kurban\'ı taşımak için <i>Etkileşim butonuna</i> bas.<br><b>Kapanı Yeniden Kurma:</b><br>Kapan kurulu değilse, kapanı bulunduğu yerde yeniden kurmak için <b>Ayı Kapanı\'nın</b> yanında <i>Güç butonunu</i> basılı tut.<b>Ayı Kapanı\'nı Toplama:</b><br>Çevredeki bir <b>Ayı Kapanı\'nı</b> toplamak için yakınında dururken <i>Etkileşim butonuna</i> bas. Varsayılan ayarda, aynı anda en fazla <b>1 Ayı Kapanı</b> taşıyabilirsin.","name":"Ayı Kapanı","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"Antik güçlerle dolu ağır döküm demir bir zil. Çalındığında kullanıcısının ruhlar âlemine girmesini ve orada dolaşabilmesini sağlar.<br><br><b>ULUYAN ÇAN</b><br><b>Görünmez</b> olmak için <i>Güç butonunu</i> basılı tut. Görünmez haldeyken <i>Güç butonunu</i> tekrar basılı tuttuğunda <b>görünür</b> olursun ve görünür olduğunda <b>1 saniyeliğine</b> hız takviyesi kazanırsın. Uluyan Çan, <b>24 metre</b> mesafeden duyulabilir.<br><br><b>Görünmezlik:</b><br><b>Umacı</b> görünmezken hız takviyesi kazanır, neredeyse tamamen görünmez olur ve <b>Tespit Edilemez</b> durum etkisine sahip olur. <b>Umacı</b> görünmezken saldıramaz fakat çevresindeki nesnelerle etkileşime girebilir. Parlak ışıklara maruz kalmak <b>Umacı</b>\'yı otomatik olarak <b>görünür</b> yapar.","name":"Uluyan Çan","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"Elektrikli Testere Deparı\'na başlamak için <i>Güç butonunu</i> basılı tut. Elektrikli Testere Deparı sırasında hasar alan Kurbanlar can çekişme durumuna girer.<br><li> Tüm Elektrikli Testere eylemleri (Elektrikli Testere\'yi başlatmak, Elektrikli Testere\'nin motorunu çalıştırmak ve <b>Elektrikli Testere Deparı</b>) aşırı ısınma sayacının artmasına sebep olur.</li><li> <b>Aşırı ısınma sayacı</b> dolduğunda Elektrikli Testere tamamen soğuyana kadar kullanılamaz. Isı kapasitesine ulaşmak devam eden bir <b>Elektrikli Testere Deparı</b>\'nı yarıda kesmez.</li><li><b>Aşırı ısınma sayacı</b> Elektrikli Testere kullanılmıyorken azalır.</li>","name":"Elektrikli Testere","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"Annesinden öğrendiği ve vahşi doğada ustalaştığı bir beceri. Avcı, Baltalarını ölümcül isabetlilikle fırlatabilir.<br><li>Mücadeleye <b>5 Baltayla</b> başla.</li><li>Azami hızda fırlatmak için güç toplayarak fırlat.</li><li><b>Dolaplardan</b> yeni Baltalar bul.</li>","name":"Av Baltaları","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"İçindeki karanlığı doyurmak için avının canını alması gerek.<br><br><b>KARANLIK BENLİK</b><br><b>Karanlık Benlik</b> etkinleştirildiğinde <b>Siluet</b> avını net bir şekilde görebilir ve avını takip ederek gücünü arttırır. <br><br><b>Karanlık Benlik I:</b><br><b>Tespit Edilemez</b> durum etkisi kazandırır. Hareket hızı biraz azalır. <i>Normal saldırının</i> atılma mesafesi biraz artar.<br><br><b>Karanlık Benlik II:</b><br>Dehşet Alanı\'nı orta seviyede daraltır. Hareket hızı biraz artar. <i>Normal saldırının</i> atılma mesafesi biraz artar.<br><br><b>Karanlık Benlik III:</b><br>Tetiklendiğinde bütün Kurbanlar <b>Zayıf</b> durum etkisine maruz kalır. <b>Karanlık Benlik III</b> <b>60 saniye</b> sürer ve ardından şiddeti <b>Karanlık Benlik II</b>\'ye geriler.<br><br><b>ÖZEL YETENEK: TAKİP ETME</b><br>Görünür Kurbanların hepsini takip etmek için <i>Güç butonunu</i> basılı tut. Kurbanları takip etmek <b>Karanlık Benlik</b> seviyeni arttırarak aşama atlamanı sağlar.<br><br><span class=\\"FlavorText\\">\\"Onunla on beş sene önce tanışmıştım. Hiçbir şey kalmadığını söylediler bana. Ne sebep ne vicdan ne anlayış ne de en temeldeki yaşam veya ölüm, iyi ve kötü, yanlış ve doğru kavrayışı... Boş bakışlı, duygusuz, solgun, altı yaşında bir çocukla tanıştım; kapkara gözleri vardı. Gözlerinde şeytanı gördüm. Ona ulaşmak için sekiz sene uğraştım. Ardından onu kilit altında tutmak için bir yedi sene emek harcadım. Çünkü oğlanın gözlerinin ardında tam anlamıyla, her şeyiyle... karanlığı gördüm.\\" -Dr. Sam Loomis</span>","name":"Karanlık Benlik","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"Acuze\'nin gücünün kaynağı, güçlerinin ortaya çıkmasını sağlayan kara bir parmakta yatıyor. Acuze toprağı bükerek dilediği şekle sokabilir. Basit ayin çizimleri ile topraktan kendi aldatıcı kopyalarını çıkarabilir ve bunları farklı etkiler için kullanabilir.<br><li><b>10</b> adet Hayalet Tuzak çıkarma ve kullanma yeteneği sağlar.</li><li> <b>40 metre</b> yakınındaki tetiklenmiş Hayalet Tuzaklara ışınlanma yeteneği sağlar.</li>","name":"Kara Doğum","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"Yamyam mücadeleye 3 yükle başlar. Bir yük harcayarak birden fazla hedefe vurabilen <b>Elektrikli Testere Süpürme Saldırısı</b>\'nı gerçekleştirmek için <I>Güç butonunu</i> basılı tut. <b>Elektrikli Testere Süpürme Saldırısı</b>\'ndan hasar alan Kurbanlar can çekişme durumuna girer.<br><li><b>Elektrikli Testere Süpürme Saldırısı</b>\'nın süresini uzatmak için bir yük harca. Bunu yapmak, bekleme süresini biraz arttırır.</li><li> Elektrikli Testere yükleri, testere kullanılmıyorken zamanla dolar.</li><br><br> Elektrikli Testere çalıştırılırken <b>sinir krizi sayacı</b> yavaşça dolar. Sayaç dolduktan sonra veya <b>Elektrikli Testere Süpürme Saldırısı</b> sırasında bir nesneye çarptığında Yamyam <b>sinir krizi</b> geçirir. <b>Sinir krizi</b> yakınındaki tüm Kurbanlara hasar verir ve onları can çekişme durumuna sokar.<br><li><b>Sinir krizi</b> süresi <b>Elektrikli Testere Süpürme Saldırısı</b> sırasında kullanılan </b>her yük için artar. Kalan diğer yükler kaybolur.</li><li> <b>Sinir krizi</b> esnasında hareket hızı düşer.</li><li> <b>Sinir krizi sayacı</b> Elektrikli Testere kullanılmıyorken düşer ve <b>Elektrikli Testere Süpürme Saldırısı esnasında tamamen sıfırlanır.</li> ","name":"Bubba\'nın Elektrikli Testeresi","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>CARTER\'IN KIVILCIMI</b><br>Kurbanlara <b>Doktor</b>\'un <b>Şok Terapisi</b> ya da <b>Statik Patlama</b> özel yetenekleriyle vurmak Kurban\'ın <i>Delilik</i>\'ini arttırır; sonunda Kurban <b>Delilik</b> durum etkisi altına girer ve Kurban\'ın üzerindeki etki gitgide güçlenir.<br><b>Delilik I:</b><br>Kurbanların bir kere çığlık atarak yerlerini <b>Doktor</b>\'a duyurmasına yol açar. Beceri Denemesi belirme konumunu ve yönünü <b>biraz</b> etkiler.<br><b>Delilik II:</b><br>Kurbanların bir kere çığlık atmasına ve <i>hayali Doktor</i> halüsinasyonu görmesine neden olur. Beceri Denemesi belirme konumunu ve yönünü <b>orta seviyede</b> etkiler.<br><b>Delilik III:</b><br>Kurbanların ara sıra çığlık atmasına ve <i>hayali Doktor</i> halüsinasyonu görmesine neden olur. Beceri Denemesi belirme konumunu ve yönünü <b>olağanüstü düzeyde</b> etkiler. Kurban başarılı şekilde <i>Kendine Gel</i>\'ene kadar iyileştirme, tamir, sabotaj, sandık açma, temizleme veya eşya kullanma etkileşimlerini gerçekleştiremez. Kurban <i>Kendine Gel</i>\'dikten sonra <b>Delilik I</b>\'e geri döner.<br><br><b>ÖZEL YETENEK: Şok Terapisi</b><br><b>Şok Terapisi</b> yapmak için <i>Güç butonunu</i> basılı tut. Bu yetenek, önündeki yere uzun menzilli bir şok saldırısı yapar. <b>Şok Terapisi</b>\'nin isabet ettiği Kurbanların kazandığı <i>Delilik</i> artar ve içinde bulundukları tüm etkileşimler derhal yarıda kesilir. <b>Şok Terapisi</b>, <b>Bihaber</b> durum etkisini anında devre dışı bırakır.<br><br><b>ÖZEL YETENEK: Statik Patlama</b><br><b>Statik Patlama</b> yapmak için <i>Etkin Yetenek butonunu</i> basılı tut. Bu yetenek Doktor\'un Dehşet Alanı\'nda bulunan tüm Kurbanların çığlık atmasına neden olur ve kazandıkları <i>Delilik</i> artar. <b>Statik Patlama</b> sadece beklemede değilken kullanılabilir. <b>Statik Patlama</b>, <b>Bihaber</b> durum etkisini derhal devre dışı bırakır.","name":"Carter\'ın Kıvılcımı","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"Uyanık haldeki Kurbanlar, 16 metre çevrelerinde dehşet alanını duyar ve <b>Kâbus</b>\'u görür. <b>Kâbus</b>, uyanık haldeki Kurbanlara 16 metre ila 32 metre arasında aralıklı olarak görünür, daha uzak mesafelerde Kurbanlara görünmez. <b>Kâbus</b>, Kurbanları 60 saniye içinde pasif olarak uyutarak Rüya Dünyası\'na gönderir. <i>Temel saldırıyla</i> uyanık bir Kurban\'a vurmak onu anında Rüya Dünyası\'na sokar.<br><br>Rüya Dünyası\'na giren Kurbanlar, <b>Bihaber</b> durum etkisi altına girer ve <b>Rüya Kıskaçlarından</b> etkilenebilirler. Başarısız Beceri Denemeleri yapmak, uyanık bir Kurban\'ın <i>Aç Gözünü! eylemini</i> kullanması veya çevrede bulunan çalar saatleri kullanmak uyuyan Kurbanları uyandırabilir. Arka arkaya gerçekleştirilen her bir <i>Aç Gözünü! eylemi</i>, iki katı zaman alır. Çalar saat kullanmak, Kurbanları 30 saniye boyunca uykuya karşı korur.<br><br><b>ÖZEL YETENEK: RÜYA KISKACI</b><br>Bir <b>Rüya Kıskacı</b> yerleştirmek için <i>Güç butonunu</i> basılı tut. <b>Rüya Kıskacı</b>\'na basan Kurbanlar, <b>Topal</b> durum etkisi altına girerek kıskacın içindeyken ve kurtulduktan sonra kısa bir süre için yavaşlar.<br><br>Bazı eklentiler ile <b>Rüya Paletleri</b>, <b>Rüya Kıskaçlarının</b> yerine geçer. Rüya Paletleri, Rüya Dünyası\'ndaki palet konumlarında ortaya çıkar. Bu paletler, <b>Kâbus</b> tarafından görülebilir ve onu sersemletmez.<br><br><b>RÜYA NİŞANLARI</b>:<br><b>Kâbus</b>, Rüya Kıskaçlarını yerleştirebilmek için 5 Rüya Nişanı\'yla başlar. Bütün nişanlar harcandıktan sonra her yeni Rüya Kıskacı yerleştirildiğinde yerleştirilen en eski Rüya Kıskacı yok olur.<br><br><b>ÖZEL YETENEK: RÜYA İZDÜŞÜMÜ</b><br>Görüş alanındaki bir jeneratöre ışınlanmak için <i>Etkin Yetenek butonuna</i> basılı tut. Bekleme süresi, Rüya Dünyası\'ndaki her bir Kurban için %15 azalır.","name":"Karabasan","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"Ustasının davasına sonuna kadar bağlı. Nankörleri ve suçluları kurnazlığı ve ölümcül bulmacalarıyla cezalandırıyor.<br><br><b>Domuz</b> gizlice hareket edebilir, pusu kurarak yaptığı saldırılarla öne atılabilir ve Kurbanların kafasına ölümcül Ters Ayı Kapanı geçirebilir.<br><br><b>JIGSAW\'UN VAFTİZİ</b><br>Mücadeleye <i>etkinleşmemiş</i> <b>4</b> Ters Ayı Kapanı\'yla başla. Can çekişme durumundaki bir Kurban\'ın başında dikilirken <i>Etkin Yetenek butonuna</i> basarak Kurban\'a <i>etkinleşmemiş</i> bir Ters Ayı Kapanı tak. Ters Ayı Kapanları mücadeledeki herhangi bir jeneratör tamir edildiğinde <i>etkinleşir</i>.<br>Kurbanlar, haritadaki Jigsaw Kutularını arayıp doğru anahtarı bularak kendilerini <i>etkin</i> veya henüz <i>etkinleşmemiş</i> Ters Ayı Kapanı\'ndan kurtarmayı deneyebilir.<br><b>Etkin Ters Ayı Kapanları</b><br>Ters Ayı Kapanları <i>etkinleştiğinde</i> bir geri sayım başlatır. Üzerinde <i>etkin</i> Ters Ayı Kapanı bulunan bir Kurban, geri sayım bittiğinde veya <i>etkin</i> bir ayı kapanıyla mücadeleyi terk etmeye çalıştığında kurban edilir.<br><br><b>ÖZEL YETENEK: EĞİLME</b><br>Eğilmek için <i>Etkin Yetenek butonuna</i> bas. Eğilmişken ayağa kalkmak için <i>Etkin Yetenek butonuna</i> bir kez daha bas. <b>Domuz</b> eğilmişken daha yavaş hareket eder. <b>Domuz</b> eğildiğinde <b>Tespit Edilemez</b> durum etkisi kazanır.<br><br><b>ÖZEL SALDIRI: PUSU</b><br>Eğilmişken <i>Saldırı butonunu</i> basılı tutarak öne atıl ve <b>Pusu</b> saldırısı gerçekleştir.<br><br><span class=\\"FlavorText\\">\\"Bana her şeyi vereceksin, bedenindeki her bir hücreyi. Kollarındaki çizikleri... Onlar başka bir hayattan kalma... O hayatı ardımızda bırakacağız. O yola girdiğinde geri dönüş olmayacak. Anlıyor musun?\\" -Jigsaw\'un Vaftizi</span>","name":"Jigsaw\'un Vaftizi","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"Palyaço, anestezi ilaçları ve kas gevşeticilerle yaptığı seneler süren deneylerin ardından etkisi yüksek birtakım karışım ve formüller üretmeyi başardı. Razı gelmeyen kurbanlarını zehirleyip yakalamasına yarayan Eşek Şakası Toniği ise gözdesi. Bununla alakalı olarak geliştirilen Eşek Şakası Panzehiri\'nin de işe yarar etkileri mevcut.<br><br><b>Eşek Şakası Toniği</b> ve <b>Eşek Şakası Panzehiri</b> arasında geçiş yapmak için <i>Etkin Yetenek butonuna</i> dokun. <i>Güç butonuna</i> dokunarak veya butonu basılı tutup bırakarak bir şişe fırlat.<br><br><i>Etkin Yetenek butonunu</i> basılı tutarak şişelerini tazeleyebilirsin.<br><br><b>ÖZEL YETENEK: Eşek Şakası Toniği</b><br>Şişe temas halinde kırılacak ve etki alanındaki tüm Kurbanları <b>zehirleyen</b> mor bir gaz bulutu yayacak. <b>Zehirlenen</b> Kurbanların görüşü kısıtlanacak, hareket hızları düşecek ve 2 saniye süren öksürük nöbetleri başlayacak.<br><br><b>ÖZEL YETENEK: Eşek Şakası Panzehiri</b><br>Şişe temas halinde kırılacak ve gri bir gaz bulutu yayacak. Bu gaz bulutu etkinleştiğinde sarı rengini alacak. Etkin bir <b>Panzehir bulutuna</b> giren Palyaço\'nun veya herhangi bir Kurban\'ın hareket hızı 5 saniyeliğine %10 artar. <b>Zehirlenen</b> Kurbanlar, <b>Panzehir bulutuna</b> girince iyileşirler.","name":"Eşek Şakası Toniği","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"Ruh, Yamaoka\'nın Laneti gücünü kullanarak uhrevi bir düzleme geçer ve yeni bir noktada belirir.<br><li>Güç butonunu Basılı tutarak yüklemeyi başlat. Ruh fiziksel bedenini terk ederek ardında durağan bir \\"kopya\\" bırakır.</li><br>Yamaoka\'nın Laneti etkinken:<li>Ruh yeni bir noktada belirmek üzere özgürce hareket eder ve kısa süreliğine daha hızlı ilerler. Fiziksel çevre ve nesnelerden etkilenmeyi sürdürür.</li><li>Ruh, fiziksel düzlemden ayrılır ve Kurbanları göremez. Fakat Kurbanların etrafta bıraktığı çizikleri hâlâ hissedebilir.</li><li>Ruh\'un o an bulunduğu yerde bir ses efekti duyulur.</li><li>Güç sona erdiğinde Ruh hız takviyesini kısa süreliğine korur ve Ruh\'un kopyası yok olur.</li><br>Yamaoka\'nın Laneti\'ni kullanmak Ruh\'un güç çubuğunu tüketir. Güç çubuğu zamanla tekrar dolar. Gücün tekrar tetiklenebilmesi için çubuğun tamamen dolmuş olması gerekir.","name":"Yamaoka\'nın Laneti","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"Frank onları bir çeteye dönüştürmeden önce sadece bir arkadaş grubundan ibaretlerdi. Şimdilerde kendi kurallarından başka hiçbir kurala uymuyor olmanın heyecan verici özgürlüğünden güç alıyorlar.<br><br><b>YABANİ CİNNET</b><br>Çok hızlı bir şekilde koşmak ve birden fazla Kurban\'a zincirleme olarak saldırmak için <b>Yabani Cinnet</b>\'i tetikler. Güç göstergen tamamen dolduğunda <b>Yabani Cinnet</b>\'i etkinleştirmek için <i>Güç butonuna</i> bas. <b>Yabani Cinnet</b> etkinken <b>Çete</b> daha hızlı hareket eder ve ilaveten <b>Paletten Atlama</b> ve <b>Yabani Kesme</b> yeteneklerini kazanır.<br><br><b>ÖZEL YETENEK: PALETTEN ATLAMA</b><br><b>Yabani Cinnet</b> etkinken yere düşmüş bir palet üzerinde <b>Paletten Atlama</b> eylemini gerçekleştirmek için <i>Etkileşim butonuna</i> bas.<br><br><b>ÖZEL YETENEK: YABANİ KESME</b><br><b>Yabani Cinnet</b> etkinken <b>Yabani Kesme</b> eyleminde bulunmak için <i>saldırı butonuna</i> bas. Bir Kurban\'a <b>Yabani Kesme</b> ile vurmak Kurban\'ı yaralayarak ona <b>Derin Yara</b> durum etkisi uygular. Çete\'nin güç göstergesi yeniden dolar ve dehşet alanı içindeki Kurbanlardan <b>Derin Yara</b> durum etkisi altında olmayanlar Katil İçgüdüsü ile görünür. Kurban zaten <b>Derin Yara</b> durum etkisi altındaysa o zaman <b>Yabani Cinnet</b> hiçbir etki göstermeden hemen biter.","name":"Yabani Cinnet","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"Veba bütün bedenini ele geçirirken durumu da kötüleşti. Ayak parmaklarına kan oturdu, boynu pütür pütür kistlerle kaplandı ve öğürerek kan kustu.<br><br><b>HABİS ARINMA</b><br>Bitmek bilmeyen bir hastalık döngüsü oluşturmak için <b>Habis Arınma</b> ile çevredeki nesnelere ve Kurbanlara hastalık bulaştır. <i>Güç butonunu</i> basılı tutarak <b>Habis Arınma</b>\'yı biriktir ve butonu serbest bırakarak bulaşıcı safra püskürt. Bir Kurban\'a vurduğunda hastalık ona da bulaşır. Sıvının temas ettiği nesneler de kısa süreliğine hastalığı bulaştırır. Sıvının bulaştığı nesnelerle etkileşime giren Kurbanlar hastalanır.<br><br>Bir Kurban\'ın hastalık göstergesi tamamen dolduğunda Kurban yaralanır ve <b>Sakat</b> durum etkisi altına girerek rastgele anlarda kusmaya başlar.<br><br><b>ÖZEL YETENEK: YOZLAŞMAYI TÜKET</b><br>Kurbanlar <i>Arınma Havuzu</i>\'nda arınarak kendilerini tamamen iyileştirebilir ve hastalıktan kurtulabilir. Bu eylem havuzu kirletir ve <b>Veba</b>\'nın kirli suyu içerek kendini güçlendirmesine imkân tanır. Kirlenmiş bir <i>Arınma Havuzu</i>\'nun yanındayken <i>Etkileşim butonuna</i> basarak <b>Habis Arınma</b>\'yı <b>Yoz Arınma</b>\'ya çevir. Bu eylem havuzdaki bulaşıcı hastalığı temizler.<br><br><b>ÖZEL YETENEK: YOZ ARINMA</b><br><b>Yozlaşmayı Tüket</b> yeteneği kullanıldıktan sonra <b>Habis Arınma</b>\'nın yerini kısa bir süreliğine <b>Yoz Arınma</b> alır. <b>Yoz Arınma</b>, kendisine temas eden Kurbanlara anında hasar verir; fakat artık Kurbanlara veya çevredeki nesnelere hastalık bulaştırmaz.","name":"Habis Arınma","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>Hayalet Surat</b> haftalarca kurbanlarını inceler, alışkanlıklarını titizlikle kaydederdi. Öldürme dürtüsü dayanılmaz bir hal aldığında, tam olarak nasıl ve nerede saldırması gerektiğini bilirdi.<br><br><b>GECE PERDESİ</b><br>Güç göstergesi doluyken <i>Güç butonuna</i> basarak <b>Gece Perdesi</b>\'ni etkinleştirebilirsin. <b>Gece Perdesi</b> etkinken <b>Hayalet Surat</b>\'a <b>Tespit Edilemez</b> durum etkisi kazandırır. <i>Normal saldırı</i> yapmak, güç göstergesinin tamamen tükenmesine ve <b>Gece Perdesi</b>\'nin devre dışı kalmasına sebep olur.<br><b>Ortaya Çıkma</b><br><b>Hayalet Surat</b>\'a yakın mesafedeki Kurbanlar, bulunduğu yöne kısa bir süre boyunca bakarak onu <i>ortaya çıkarmayı</i> deneyebilir. Başarılı bir şekilde <i>ortaya çıkarılan</i> <b>Hayalet Surat</b>\'ın güç göstergesi tamamen tükenir ve <b>Gece Perdesi</b> otomatik olarak devre dışı kalır. <b>Hayalet Surat</b>\'ı <i>ortaya çıkaran</i> Kurbanların mevcut konumu, çok kısa bir süreliğine <i>Katil İçgüdüsü</i> ile belli edilir.<br><br><b>ÖZEL YETENEK: TAKİP ETME</b><br><b>Gece Perdesi</b> etkinken Kurbanlarını takip etmek için <i>Güç butonunu</i> basılı tut. Bir şeyin arkasında gizlenmişken eğilerek bakmak ve hedefini daha hızlı bir biçimde takip etmek için <i>Güç butonunu</i> basılı tut. Bir Kurban\'ı tamamen takip etmek hedefini <i>İşaretler</i> ve <i>işaretlediğin Kurban</i>\'a belli bir süre için <b>Zayıf</b> durum etkisi uygular.<br><br><b>ÖZEL YETENEK: EĞİLME</b><br>Etkin Yetenek butonuna basarak eğil. Eğilmişken ayağa kalkmak için butona bir kez daha bas. <b>Hayalet Surat</b> eğilmişken daha yavaş hareket eder.<br><br><span class=\\"FlavorText\\">\\"Bana bakma. İşte böyle, devam et. Mükemmel. Bu anı unutmayacağım.\\" -Hayalet Surat</span>","name":"Gece Perdesi","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"Bilinmeyen ve öteki dünyaya ait bir güç vücudunu kapladı. Zemin aniden yarılarak açıldı ve Demogorgon\'u yuttu.<br><br><b>HİÇLİK YARATIĞI</b><br>Hiçlik Yaratığı\'nın gücünü tamamen doldurmak ve <b>Hiçlik Yaratığı</b>\'nı etkinleştirmek için <i>Güç butonunu</i> basılı tut. Etkinleştirilmiş bir geçidin yakınlarındaki tüm Kurbanların yerleri Katil İçgüdüsü\'yle gösterilecektir.<br><br><b>ÖZEL SALDIRI: BİÇME</b><br><b>Hiçlik Yaratığı</b>\'nın gücünü doldururken veya Güç butonunu basılı tutarken <i>Saldırı butonuna</i> basmak ileri atılmanı ve güçlü bir saldırı gerçekleştirmeni sağlar.<br><br><b>ÖZEL YETENEK: GEÇİTLER</b><br>Önünde, yerde bir geçit açmak için <i>Etkin Yetenek butonuna</i> bas.<br><b>Baş Aşağı\'da Dolaşmak</b><br>Yerleştirilmiş bir geçidin üstünde dururken başka bir geçidi işaretleyip <i>Etkin Yetenek butonuna</i> bir kez daha basarsan Baş Aşağı Dünya\'da yolculuk edip hedef aldığın geçide varırsın.<br><b>Etkinleştirilmiş Geçitler</b><br>Bir geçitten ilk kez yolculuk ettiğinde geçitler \\"etkinleşir\\". Kurbanlar sadece etkin geçitleri kapatabilir. Etkin geçitlerin hareleri sarı renkle parlar.","name":"Hiçlik Yaratığı","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"Daha güçsüz soyları yok etme arzusunun elle tutulur bir güç biçimini alması.<br><br><b>YAMAOKA\'NIN GAZABI</b><br>Yaralı düşmanlarının bıraktığı Kan Kürelerini em. <i>Güç butonunu</i> basılı tutarak çevredeki Kan Kürelerini em ve güç göstergeni doldur. Güç göstergen tamamen dolduğunda <b>Kan Hiddeti</b>\'ni etkinleştirmek için <i>Etkin Yetenek butonunu</i> basılı tut.<br><b>Kan Hiddeti:</b>\\n<b>Kan Hiddeti</b> etkinken, <b>Oni</b> ölümcül bir hale gelir ve şu ek becerilere erişim kazanır: <b>İblis Atılışı</b> ve <b>İblis Saldırısı</b>.<br><br><b>ÖZEL YETENEK: İblis Atılışı</b><br><b>Kan Hiddeti</b> etkinken <i>Güç butonunu</i> basılı tutarak <b>İblis Atılışı</b> yap. Bu yetenek <b>Oni</b>\'nin uzun mesafeleri hızla kat etmesini sağlar.<br><br><b>ÖZEL SALDIRI: İblis Saldırısı</b><br><b>Kan Hiddeti</b> etkinken <i>Saldırı butonunu</i> basılı tutarak baktığın yöne doğru <b>İblis Saldırısı</b>\'nı gerçekleştir. <b>İblis Saldırısı</b>\'nın atılma menzili daha uzundur ve başarılı saldırılar isabet ettiği sağlıklı Kurbanları hemen can çekişme aşamasına sokar.","name":"Yamaoka\'nın Gazabı","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"Tezecel\'in dehası ona suçluların başına konan ödülleri özel bir icatla toplama olanağı veriyor. Bu icat, üzerinde bir sürü modifikasyon yapılmış ve sıradan mermiler yerine bir zincirin ucuna takılı, jilet keskinliğinde bir zıpkın atan bir tüfek.<br><br><b>ARINDIRICI</b><br>Yakınlaştırarak nişan almak için <i>Güç butonuna</i> basılı tut. Kurbanlara saplanan bir zıpkın fırlatmak için <i>Saldırı butonuna</i> bas. Zıpkın sayesinde Kurbanları isteseler de istemeseler de <b>Tezecel\'e</b> doğru çekilebilir.<br><b>Kendine Çekme:</b><br>Bir Kurban, <b>Arındırıcı\'nın</b> zıpkınıyla vurulmuşken <i>Güç butonuna</i> basılı tutarak onları kendine çekebilirsin. Kurbanlar zincire direnmeye çalışabilir veya zinciri kırmak için çevredeki şeylerden yararlanabilir. Zincirin kırılması <b>Tezecel\'i</b> kısa süreliğine sersemletirken, Kurban yaralı duruma gelir ve <b>Derin Yara</b> durum etkisine girer. Bir Kurban zıpkınla yakalanmışken <i>normal saldırı</i> yapmak, ne <b>Tezecel</b> ne de Kurban\'a herhangi bir olumsuz bir etki uygulanmadan zincirin kırılmasına neden olur. Zıpkına yakalanmış ve sağlıklı durumda olan bir Kurban\'a <i>normal saldırıyla</i> başarılı şekilde vurulduğunda Kurban\'a <b>Derin Yara</b> durum etkisi uygulanır.<br><b>Doldurma:</b><br><b>Arındırıcı\'nın</b> her atıştan sonra yeniden doldurulması gerekir. <b>Arındırıcı\'yı</b> yeniden doldurmak için <i>Etkin Yetenek butonuna</i> basılı tut.","name":"Arındırıcı","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"Azap kapılarını aç ve kefaretini öde! Dev Bıçak\'ı zemini yarıyor, yerin altındakileri çıkarıyor ve yaklaşmaya cesaret eden herkese acı veriyor.<br><br><b>AZAP YOLU</b><br>Etkinleştirmek için <i>Güç butonunu</i> basılı tut. Ardından herhangi bir yöne doğru yürüyerek zemine bir iz çizersin.<br><br>Bu izin üstünde yürüyen veya koşan Kurbanlar <i>Katil İçgüdüsü</i>\'nü tetikler ve <i>Azap</i> durum etkisi altına girerler. <i>Azap</i> etkisi altındaki Kurbanlar can çekişirken <b>Kefaret Kafesi</b>\'ne gönderilebilir.<br><br><b>ÖZEL SALDIRI: Lanetlilerin Cezası</b><br><b>Azap Yolu</b> etkinken <i>Saldırı butonuna</i> basarak <b>Lanetlilerin Cezası</b>\'nı etkinleştirebilirsin. Bu, bir güç dalgası göndererek çarptığı tüm Kurbanlara hasar verir.<br><br><b>ÖZEL YETENEK: Kefaret Kafesi</b><br>Ölmek üzere olan ve <i>Azap</i> etkisi altındaki bir Kurban\'ın başında dururken Kurban\'ı <b>Kefaret Kafesi</b>\'ne göndermek için <i>Yetenek butonuna</i> bas. <b>Kefaret Kafesi</b>\'ndeki Kurbanlar, tıpkı kancada olduğu gibi kurban edilebilir. Çağırma ayininin ikinci aşamasında Kurbanlar, Mahluk\'un gelişine engel olmak için beceri denemesi yapmak zorunda kalır.<br><br><b>Kefaret Kafesi</b>\'nden kurtarılmak veya bu diğer Kurbanları kurtarmak <i>Azap</i> etkisini kaldırır.<br><br><b>ÖZEL YETENEK: Son Karar</b><br>Kancada veya kafeste debelenme aşamasına ulaşmış, ölmekte olan ve <i>Azap</i> etkisi altındaki bir Kurban\'ı infaz etmek için Kurban\'ın başındayken <i>Yetenek butonuna</i> bas.","name":"Azap Yolu","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"Damarlarında dolaşan püstül serumu aklını ve bedenini yozlaştırsa da ona insanüstü fiziksel beceriler bahşeder.<br><br><b>ÖZEL YETENEK: AKIN</b><br>Hızla ileri <b>Akın</b> etmek için <i>Güç butonuna</i> bas. Bunu yapmak bir <b>Akın</b> nişanı tüketir. Maraz, <b>Akın</b> esnasında saldırı gerçekleştiremez.<br><br><b>Akın</b> ile ortamdaki bir duvara veya engele çarptığında <b>Çarpma</b> etkisi gerçekleşir. <b>Akın</b> ortamda bulunan bir duvara veya engele çarpmazsa ya da Maraz\'ın <b>Akın</b> nişanı kalmamışsa kısa süreli bir yorgunluk durumuna girer ve nişanlarını yenilemeye başlar.<br><br><b>ÖZEL SALDIRI: ÖLÜMCÜL AKIN</b><br><b>Çarpma</b> gerçekleştirdikten sonra <i>Güç butonuna</i> basarak bir <b>Ölümcül Akın</b> gerçekleştir. Bunu yapmak bir <b>Akın</b> nişanı tüketir. <b>Ölümcül Akın</b>, <b>Akın</b> ile aynı şekilde çalışır fakat Maraz bu esnada <i>Saldırı butonunu</i> kullanarak saldırı gerçekleştirebilir.","name":"Marazlı Yozlaşma","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"Kan ve travmayla sonsuza dek birleşmiş olsalar bile İkizler\'e ortak bedenlerinden ayrılma gücü de bahşedildi. İki kardeş birlikte avlandıkları için Kurbanlara iki kat daha fazla tehdit oluşturuyorlar.<br><br><b>ÖZEL YETENEK: Kan Bağı</b><br><b>Victor\'u</b> serbest bırakmak için <i>Güç butonunu</i> basılı tut. <b>Charlotte</b> ve <b>Victor</b> arasında geçiş yapmak için <i>Yetenek butonuna</i> dokun.<br><br><b>Victor</b> tek başına kaldığında <b>Katil İçgüdüsü\'nü</b> tetikleyerek kendi yakınında yürüyen veya koşan Kurbanların siluetlerini<b>Charlotte\'a</b> gösterir. <b>Victor’un</b> çığlıklarını duyabilen Kurbanlar duyarlı hale gelirler. Ancak, <b>Charlotte</b> kontrol edilirken Kurbanlar<b>Victor\'u</b> ezebilir.<br><br><b>Victor</b> ezilirse, bir süre sonra <b>Charlotte\'un</b> üzerinde yeniden ortaya çıkar.<br><br><b>ÖZEL SALDIRI: Çullanma</b><br><b>Victor\'u</b> kontrol ederken <i>Yetenek butonunu</i> basılı tutarak bir <b>Çullanma</b> saldırısı doldur ve saldırıyı serbest bırakmak için <i>Saldırı butonuna</i> bas.<br><br>Başarılı bir <b>Çullanma</b> saldırısı Kurban\'a hasar verir. Kurban\'ın canı tamsa <b>Victor</b> onu tutar, <b>Katil İçgüdüsü</b>\'nü tetikler ve yakındaki bütün Kurbanların yerlerini açığa çıkarır. Tutulan Kurban <b>Sakat</b>, <b>Bihaber</b> ve <b>Aciz</b> durum etkilerine girer. Dolapların içine giremez ve Çıkış Kapısı\'ndan çıkamaz. Kurban, <b>Kurtul</b> eylemini tamamlayarak kendisini tutan <b>Victor\'u</b> ezebilir.<br><br><b>Victor</b>, <b>Çullanma\'yı</b> kaçırırsa bir anlığına saldırıya açık hale gelir ve Kurban tarafından ezilebilir. Victor, kendi boyundan daha yüksek duran bir engele iniş yaparsa yok olur.","name":"Kan Bağı","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>Ji-Woon Hak, hızla fırlattığı bıçaklarla âdeta bir fırtına oluşturuyor; yılların pratiğiyle bugünkü seviyesine gelen, büyüleyici bir yetenek.</i><br><br><b>MIHLAYICI</b><br><br>Mücadeleye <b>60 bıçak</b> ile başlarsın. Fırlatma pozisyonuna geçmek için <i>Güç butonunu</i> basılı tut.<br><br>Fırlatma pozisyonundayken, tek bir bıçak fırlatmak için <i>Saldırı butonuna</i> bir kez bas, bir bıçak fırtınası göndermek içinse <i>Saldırı butonunu</i> basılı tut. Bir fırtına gönderirsen hareket hızın azalır fakat kontrol oranın ve fırlatma hızın artar. Yeni bıçakları dolaplardan bulabilirsin.<br><br><b>Kesik Göstergesi:</b> Kurbanların <b>Kesik Göstergesi</b>, bıçak darbesi aldıkça artar. Gösterge dolduğunda bir sağlık aşaması kaybederek ya yaralanır ya da yere düşerler.<br><br>Kurbanların Kesik Göstergesi, kısa bir süre boyunca bıçak darbesi almazlarsa yavaşça azalmaya başlar. Normal saldırıyla vurulan bir Kurban\'ın Kesik Göstergesi anında azalır.<br><br><b>ÖZEL YETENEK: Ana Etkinlik</b><br>Her bıçak darbesi <b>Etkinlik Göstergesi</b>\'ni doldurur. Gösterge dolduğunda <i>Yetenek butonuna</i> basarak <b>Ana Etkinlik</b>\'i etkinleştirebilirsin. Dümenci bu moddayken <b>Ana Etkinlik</b> süresi boyunca otomatik olarak sınırsız sayıda bıçak fırlatır. Fırlatma hızı önemli ölçüde artar ve fırlatma sonrası hareket hızı azalmaz. <b>Ana Etkinlik</b>, <i>Yetenek butonuna</i> basarak iptal edilebilir. Bunu yapmak <b>Etkinlik Göstergesi</b>\'ni sıfırlar ve <b>Mıhlayıcı</b>\'yı bekleme süresine sokar.","name":"Mıhlayıcı","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"Ekstrem mutasyonlara sebep olan ve diğer insanlara aktarılabilen bir virüs. Nemesis\'in agresifliğini ve gücünü arttırır.<br><br><b>ÖZEL SALDIRI: Dokunaç Darbesi</b><br>Saldırıya hazırlanmak için Güç butonunu basılı tut. Saldırı hazır olduğunda Saldırı butonuna basarak <b>Dokunaç Darbesi</b>\'ni gerçekleştir. <b>Dokunaç Darbesi</b>\'yle bir Kurban\'a vurmak, ona <b>Virüs Bulaşmış</b> durum etkisi uygular ve senin <b>Mutasyon Oranı</b>\'nı arttırır. Kurban zaten <b>Virüs Bulaşmış</b> durum etkisi altındaysa <b>Dokunaç Darbesi</b> can hasarı verir.<br><br>Kurbanlar <b>Erzak Kutularında</b> bulunan <b>Aşıları</b> kendi üzerlerinde veya diğer Kurbanların üzerinde kullanarak <b>Virüs Bulaşmış</b> durum etkisinden kurtulabilir. Sınırlı sayıda <b>Aşı</b> bulunur. <b>Aşı</b> kullanıldıktan sonra Kurban\'ın konumu Katil İçgüdüsü\'yle açığa çıkar.<br><br><b>Mutasyon Oranı:</b> <b>Mutasyon Oranı</b> arttıkça gücün de artar. <b>Mutasyon Oranı 2</b> olduğunda <b>Dokunaç Darbesi</b>\'yle paletleri ve yıkılabilir duvarları yok edebilirsin. <b>Mutasyon Oranı 3</b> olduğunda <b>Dokunaç Darbesi</b>\'nin menzili artar. T-Virus simgesi mevcut <b>Mutasyon Oranı</b>\'nı gösterir.<br><br><b>ÖZEL DÜŞMAN: Zombiler</b><br><b>Zombiler</b> saldırdıkları Kurban\'a <b>Virüs Bulaşmış</b> durum etkisi uygular. Kurban halihazırda <b>Virüs Bulaşmış</b> durum etkisi altındaysa can kaybeder.<br><br><b>Zombiler</b>, <b>Mutasyon Oranı</b>\'nı arttırmak için <b>Dokunaç Darbesi</b>\'yle yok edilebilir. Kurbanlar da Zombileri paletlerle yok edebilir. Yok edilen <b>Zombiler</b> kısa bir süre sonra tekrar belirir.","name":"T-VIRUS","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/tr/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/tr/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Bu mücadeledeki tüm oyuncular bütün kategorilerde <b>%100</b> ilave Kan Puanı kazanır.<br><li>Etkisi birikir.</li>","name":"Kanlı Parti Konfetisi","flavor":"\\"İnsanların güzelce zaman geçirmek için toplandıkları ama çığlıklar içinde kaçtıkları bir anının hatırası.\\"","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"Kara Sis\'in yoğunluğunu <b>biraz azaltır</b>.<br><li>Etkisi birikir.</li>","name":"Şeffaf Karışım","flavor":"\\"Kara Sis çöküyor ve içinde olan herkesi deliliğe sürüklüyor. Ormandaki kayıp, berrak sulara sahip göletler dışında ondan kaçmak veya bir yerlere sığınmak mümkün değil.\\" -Anonim, Not Defteri","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"Kara Sis\'i <b>biraz yoğunlaştırır</b>.<br><li>Etkisi birikir.</li>","name":"Güçsüz Karışım","flavor":"\\"Ölüm etrafımda kol gezerken soğukta kıpırdayamıyorum.\\"","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"Kara Sis\'i <b>orta seviyede yoğunlaştırır</b>.<br><li>Etkisi birikir.</li>","name":"Bulanık Karışım","flavor":"\\"Sis çekici ve hipnotize edici. Aynı anda hem seviyorum hem de beni korkutuyor.\\" -Donna\'nın Eskiz Defteri","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"Kara Sis\'i <b>fazlasıyla yoğunlaştırır</b>.<br><li>Etkisi birikir.</li>","name":"Şüpheli Karışım","flavor":"\\"Sis bizi canavardan koruyor gibi duruyor ama aynı zamanda zehirli bir kanser. Bizi karanlık ve deliliğe boğuyor.\\" -Anonim, Not Defteri","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"<b>Ay ışığını en karanlık seviyeye</b> getirmesi için Mahluk\'u çağırır.","name":"Yeniay Buketi ","flavor":"\\"En iyisi uykuma geri döneyim. Nasılsa bu gece havada ay yok.\\"","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"<b>Ay ışığını loşlaştırması</b> için Mahluk\'u çağırır.","name":"Hilal Buketi","flavor":"\\"Ay yavaşça kararak tebessüm ediyor: \'Merak etme, sırrın benimle güvende\'. Yoksa pis pis sırıtıyor mu?\\"","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"<b>Ay ışığını daha parlak bir seviyeye</b> getirmesi için Mahluk\'u çağırır.","name":"Çeyrek Ay Buketi","flavor":"\\"Yaşlı ay avını izlemek için yüzünü gösterdi.\\"","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"<b>Ay ışığını en parlak seviyeye</b> getirmesi için Mahluk\'u çağırır.","name":"Dolunay Buketi","flavor":"\\"Ay yükselirken uluyan kurtlar, avın başladığına işarettir.\\"","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"Yakıldığında MacMillan Mülkü\'ne gönderilme ihtimalini <b>biraz arttırır</b>.<br><li>Etkisi birikir.</li>","name":"MacMillan Hesap Defteri Sayfası","flavor":"\\"MacMillan damgası dışında üzerinde okunması imkânsız bilgiler yazan, eski, yırtılmış bir hesap defteri sayfası.\\"","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"Yakıldığında MacMillan Mülkü\'ne gönderilme ihtimalini <b>önemli ölçüde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"İmzalı Hesap Defteri Sayfası","flavor":"\\"Maden ekipmanlarının ve diğer alım satım işlemlerinin yazdığı, solmuş bir hesap defteri sayfası. Archie MacMillan tarafından imzalanmış.\\"","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"Yakıldığında MacMillan Mülkü\'ne gönderilme ihtimalini <b>olağanüstü düzeyde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"MacMillan\'ın Parmak Kemiği","flavor":"\\"MacMillan\'ın iskeleti madenin deposunun bodrum katında bulunmuştu. Bacak kemikleri paramparçaydı ve dizinin üstünde bir madenci çekici vardı.\\"","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"Yakıldığında Otomobil Mezarlığı\'na gönderilme ihtimalini <b>biraz arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Kırık Plaka","flavor":"\\"Oldukça paslanmış, yamulmuş ve koparılmış bir metal parçası.\\"","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"Yakıldığında Otomobil Mezarlığı\'na gönderilme ihtimalini <b>önemli ölçüde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Virginia Plakası","flavor":"\\"Oldukça paslanmış ve yamulmuş bir Virginia plakası.\\"","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"Yakıldığında Otomobil Mezarlığı\'na gönderilme ihtimalini <b>olağanüstü düzeyde</b> arttırır.<br><li>Etkisi birikir.</li>","name":"Azarov\'un Anahtarı","flavor":"\\"Bilinmeyen marka bir araca ait kırık anahtar. Anahtarlığın üzerindeki isme göre aracın sahibi A. Azarov.\\"","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"Yakıldığında Ayaz Yel Çiftliği\'ne gönderilme ihtimalini <b>biraz arttırır</b>.<br><li>Etkisi birikir.</li>","name":"28 Numaralı Sığır Küpesi","flavor":"\\"Kanlı, \'28\' numaralı bir sığır küpesi.\\"","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"Yakıldığında Ayaz Yel Çiftliği\'ne gönderilme ihtimalini <b>önemli ölçüde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Ayaz Yel 81 Numaralı Sığır Küpesi","flavor":"\\"Üzerinde \'Ayaz Yel Çiftliği\' yazan, kanlı, \'81\' numaralı sığır küpesi.\\"","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"Yakıldığında Ayaz Yel Çiftliği\'ne gönderilme ihtimalini <b>olağanüstü düzeyde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Kalp Madalyonu","flavor":"\\"Gümüş bir kalp madalyonu. İçine \'E+M\' yazısı kazınmış.\\"","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"Yakıldığında Crotus Prenn Tımarhanesi\'ne gönderilme ihtimalini <b>biraz arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Delilik Bileti","flavor":"\\"Üzerinde okunması imkânsız bilgiler yazan, eski, yıpranmış bir bilet.\\"","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"Yakıldığında Crotus Prenn Tımarhanesi\'ne gönderilme ihtimalini <b>önemli ölçüde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"P.Elliott Delilik Bileti","flavor":"\\"Philip Elliot adlı bir hastanın Crotus Prenn Tımarhanesi\'ne sevk edilmesini talep eden pembe bir kâğıt.\\"","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"Yakıldığında Crotus Prenn Tımarhanesi\'ne gönderilme ihtimalini <b>olağanüstü düzeyde arttırır</b>.","name":"Yanmış Evlilik Fotoğrafı","flavor":"\\"Bir çiftin evlilik gününde çekilmiş portresi. Suratları tamamen yanmış ve tanınmıyor.\\"","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"Yakıldığında Haddonfield\'a gönderilme ihtimalini <b>biraz arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Hasat Festivali Broşürü","flavor":"\\"1978 yılında gerçekleşmiş Haddonfield Hasat Festivali\'ne ait, solmuş bir bilgi broşürü. Ön tarafında büyük bir balkabağı çizimi yer alıyor.\\"","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"Yakıldığında Haddonfield\'a gönderilme ihtimalini <b>önemli ölçüde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Yıpranmış Tahta Kaplama","flavor":"\\"Haddonfield\'daki çoğu evde kullanılanlara benzer, meşe ağacından yapılmış, küflü ve çürümüş çıtalı kaplama.\\"","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"Yakıldığında Haddonfield\'a gönderilme ihtimalini <b>olağanüstü düzeyde arttırır</b>.","name":"Strode Gayrimenkul Anahtarı","flavor":"\\"Normal bir ev anahtarı. Kartondan yapılmış anahtarlığın üzerinde \'Strode Gayrimenkul\' yazıyor. Ardındansa elle \'45 Lampkin Sokağı\' yazılmış.\\"","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"Yakıldığında Bataklı Göl\'e gönderilme ihtimalini <b>biraz arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Tüten Halat","flavor":"\\"Hâlâ ılık bir dumanla tüten, yanık bir gemi halatı parçası.\\"","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"Yakıldığında Bataklı Göl\'e gönderilme ihtimalini <b>önemli ölçüde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Tüten Hoş Geldiniz Tabelası","flavor":"\\"Selvi ağacından yontularak yapılmış, suyla parlatılmış kaba bir hoş geldiniz tabelası. Tabela yanmış ve hâlâ tütmekte.\\"","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"Yakıldığında Bataklı Göl\'e gönderilme ihtimalini <b>olağanüstü düzeyde arttırır</b>.","name":"Babaannenin Yemek Tarifleri","flavor":"\\"Babaannemin parmak ısırtan köftesi gibi korkunç insan etinden yapılmış yemek tariflerini içeren deri kaplı bir dosya.\\"","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"Yakıldığında Léry Ruh Sağlığı Enstitüsü\'ne gönderilme ihtimalini <b>biraz arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Acil Sertifikası","flavor":"\\"Hastanın acil tedaviye alınması için gözetim altında olması gerektiğini yazan bir kâğıdın sarı karbon kopyası. Kopyalanan bilgiler kirlenmiş ve okunmuyor.\\"","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"Yakıldığında Léry Ruh Sağlığı Enstitüsü\'ne gönderilme ihtimalini <b>önemli ölçüde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Psikiyatrik Değerlendirme Raporu","flavor":"\\"Herman Carter tarafından imzalanmış bir psikiyatrik değerlendirme raporu. Hastanın hafıza kaybını anlatıyor ve prosedürün sonraki adımları için öneriler sunuyor.\\"","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"Yakıldığında Léry Ruh Sağlığı Enstitüsü\'ne gönderilme ihtimalini <b>olağanüstü düzeyde arttırır</b>.","name":"Kırılmış Gözlük","flavor":"\\"Yamulmuş okuma gözlüğü. Kırılmış camın üzerinde kurumuş kan damlaları var.\\"","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"Yakıldığında Kızıl Orman\'a gönderilme ihtimalini <b>biraz arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Boyanmış Nehir Taşı","flavor":"\\"Akan bir suyun içinde zamanla parlamış, kaygan ve yumuşak bir taş. Kırmızı, siyah ve beyaz boyalarla yapılmış, ciddi ciddi bakan bir ayı çizimiyle süslenmiş.\\"","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"Yakıldığında Kızıl Orman\'a gönderilme ihtimalini <b>önemli ölçüde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Çocuk Kitabı","flavor":"\\"Sayfaları zamanla yıpranmış, eski bir öykü kitabı.\\"","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"Yakıldığında Kızıl Orman\'a gönderilme ihtimalini <b>olağanüstü düzeyde arttırır</b>.","name":"Son Maske","flavor":"\\"Çocukların suratına tam oturacak, güzelce işlenmiş bir kaplan maskesi. Arkasında Kiril alfabesiyle yazılmış, silinmiş bir not var.\\"","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"Yakıldığında Springwood\'a gönderilme ihtimalini <b>olağanüstü düzeyde arttırır</b>.","name":"Fareli Köyün Kavalcısı","flavor":"\\"Kasaba tarafından ihanete uğrayan Freddy, bütün çocukları öldürerek intikam alıyor.\\"","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"Bu adağı yakmak mücadele sonunda eklentilerini kaybetmeni önler.","name":"Siyah Koruyucu","flavor":"\\"Sesimi duy, günahlarımı affet, beni hiçlikten koru.\\"","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"Bu adağı yakmak eşyalarını ve eklentilerini kaybetmemeni sağlar.","name":"Beyaz Koruyucu","flavor":"\\"Beni kötülükten koru, bana kanat aç ve bir başkasını bul.\\"","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"Yakıldığında Yamaoka Malikânesi\'ne gönderilme ihtimalini <b>olağanüstü düzeyde arttırır</b>.","name":"Yamaoka Aile Arması","flavor":"\\"Paramparça olmuş bir aileyi asla terk edemezsin. Sadece anıların peşini bırakana dek kaçabilirsin.\\"","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"Belli bir diyara gönderilme ihtimalini değiştiren tüm adakları reddetmesi için Mahluk\'u çağırır.<br>Bu yalnızca aynı dört diyar adağı oynanırsa iptal edilebilir.","name":"Adak Koruması","flavor":"\\"Kör gözlerle irademizi sana teslim ediyoruz ve rehberliğine güveniyoruz.\\"","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"Yandığında Midwich İlköğretim Okulu\'na gönderilme ihtimali <b>olağanüstü düzeyde artar</b>.","name":"Mary\'nin Mektubu","flavor":"\\"Huzursuz uykularımda o kasabayı görüyorum.\\"","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"Yakıldığında Gideon Et Paketleme Fabrikası\'na gönderilme ihtimalini <b>olağanüstü düzeyde arttırır</b>.","name":"Yapboz Parçası","flavor":"\\"Tebrikler, hâlâ hayattasın. Çoğu insan hayatın değerini bilmiyor. Ama sen artık biliyorsun.\\"","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"Yakıldığında Hawkins Ulusal Laboratuvarı\'na gönderilme ihtimalini <b>olağanüstü düzeyde</b> arttırır.","name":"Hawkins Ulusal Laboratuvarı Kimlik Kartı ","flavor":"\\"Islak, kan lekeli ve seri numarası olan bir kimlik kartı.\\"","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"Yandığında Glenvale Kabristanı\'na gönderilme ihtimalini <b>olağanüstü düzeyde</b> arttırır.","name":"Tozlu Halat","flavor":"\\"Toz içinde boğulmuş bu topraklarda hayatta kalmaya çalışan herhangi birine sorsan, idam edilmenin aslında... bir lütuf olduğunu söyler.\\"","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"Birlikte geçirdiğimiz üç yılı kutlamak için yaptığımız korkunç, mide yakan bir pasta. Bu mücadeledeki tüm oyunculara, her kategoriden <b>%103</b> bonus Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Ürkütücü Pasta","flavor":"\\"Yıldönümümüz kutlu olsun! Birlikte geçirdiğimiz üç senenin şerefine!\\"<br>- Dead by Daylight Ekibi","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"Birlikte geçirdiğimiz dört yılı kutlamak için yaptığımız göz alıcı bir korkunçluğa sahip pasta. Ürkütücü Pasta\'dan %1 daha lezzetlidir. Bu mücadeledeki tüm oyunculara, her kategoriden <b>%104</b> bonus Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Dehşetli Pasta","flavor":"\\"Nice mutlu yıldönümlerine!\\"<br>- Dead by Daylight Ekibi","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/tr/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/tr/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Kusursuz durumda, ince ve geniş bir mercek. El Feneri ışığının daha çok yayılmasını sağlarken verimlilik menzilini düşürür.<br><li>El Feneri\'nin ışığını <b>orta seviyede genişletir</b>.</li><li>El Feneri ışığının menzilini <b>biraz azaltır</b>.</li>","name":"Geniş Mercek","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"Daha parlak ve daha kuvvetli bir ışık yaymak için ilave güç sağlayan küçük bir el feneri ampulü.<br><li>El Feneri ışığının çapını <b>biraz daraltır</b>.</li><li>Işığın parlaklığını <b>biraz arttırır</b>.</li><li>Körlük süresini <b>biraz arttırır</b>.</li>","name":"Güçlü Ampul","flavor":"\\"En güçlü ışık bile Kara Sis\'in karanlığını delemez.\\"","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"Daha iyi bir tutuş sağlamak için el fenerinin etrafına sarılmış deri parçası.<br><li>El Feneri\'nin isabet hassasiyetini <b>biraz arttırır</b>.</li>","name":"Deri Tutamaç","flavor":"\\"Niceleri düşmüştür terli eller yüzünden.\\"","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"İsimsiz bir markaya ait sıradan pil.<br><li>Standart bir El Feneri\'ne <b>2 saniyelik</b> kullanım süresi ekler.</li>","name":"Pil","flavor":"\\"İşte bitmek üzere olan bir pil daha.\\"","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"El fenerinin ışığını büyüten mercek ve ayna ikilisi.<br><li>Işığın parlaklığını <b>orta seviyede arttırır</b>.</li><li>Körlük süresini <b>orta seviyede arttırır</b>.</li>","name":"Tam Yansıma Merceği","flavor":"\\"Işık, karanlık kefenlerini yaksın.\\"","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"El fenerlerine özel daha iyi bir tutuş için tasarlanmış kauçuk tutamaç.<br><li>El Feneri\'nin isabet hassasiyetini <b>orta seviyede arttırır</b>.</li>","name":"Kauçuk Tutamaç","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"El fenerinin pilinin ömrünü uzatmak için tasarlanmış filament ampul.<br><li>El Feneri\'nin pil tüketimini <b>orta seviyede düşürür</b>.</li>","name":"Düşük Amperli Lamba Teli","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"\\"Endüstriyel güç\\" olduğu belirtilmiş bir pil.<br><li>Standart bir El Feneri\'ne <b>4 saniyelik</b> kullanım süresi ekler.</li>","name":"Dayanıklı Pil","flavor":"\\"8 saatlik ömrü olduğu söylenen pil, Kara Sis\'e yalnızca birkaç saniye dayanabiliyor.\\"","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"El fenerinin yoğunluğunu arttırmak için ışığını odaklayan kalın, cam bir lens.<br><li>El Feneri ışığının menzilini <b>biraz arttırır</b>.</li><li>El Feneri ışığının çapını <b>biraz daraltır</b>.</li><li>Işığın görsel parlaklığını <b>biraz arttırır</b>.</li><li>Körlük süresini <b>biraz arttırır</b>.</li>","name":"Uzun Odaklı Mercek","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"Daha uzun ömürlü yeni model bir pil.<br><li>Standart bir El Feneri\'ne <b>6 saniyelik</b> kullanım süresi ekler.</li>","name":"Uzun Ömürlü Pil","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"Son derece belirgin bir ışık yayan ampul.<br><li>Işığın parlaklığını <b>önemli ölçüde arttırır</b>.</li><li>Körlük süresini <b>önemli ölçüde arttırır</b>.</li>","name":"Yoğun Halojen","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"Işığın gücünü ve menzilini azami seviyeye çıkaran, çizilmez safirden yapılmış geniş bir mercek.<br><li>El fenerinin ışık vurma alanını <b>orta seviyede genişletir</b>.</li><li>El fenerinin ışığını <b>biraz arttırır</b>.</li><li>Işığın parlaklığını <b>orta seviyede arttırır</b>.</li><li>Körlük süresini <b>orta seviyede arttırır</b>.</li>","name":"Kaliteli Safir Mercek","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"Kapalıyken bile hafif ışık veren, nereden geldiği belirsiz, ağır ve tamamen mat bir ampul.<br><li>Işığın parlaklığını <b>olağanüstü düzeyde arttırır</b>.</li><li>Körlük süresini <b>olağanüstü düzeyde arttırır</b>.</li><li>El Feneri\'nin pil tüketimini <b>biraz arttırır</b>.</li>","name":"Tuhaf Ampul","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"Dua ayinlerinde kullanılması için yapılmış, sıkıca örülmüş bir halat. Anahtar\'a takılabilir.<br><li>Anahtar kullanımına <b>10 saniye</b> ekler.</li>","name":"Ayin İpi","flavor":"\\"Ne kadar dua edersen et, dudaklarından dökülen kelimeler Sis\'in içinde bir yerlerde kaybolur.\\"","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"Delikli ve çizikli bir beyaz inci. Üzerindeki minik halka sayesinde Anahtar\'a takılabilir.<br><li>Anahtar\'ın hare okuma yeteneğini <b>orta seviyede arttırır</b>.</li>","name":"Çizik İnci","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"Dua ayinlerinde kullanılan ve farklı boyutlardaki mat boncuklardan oluşan zincir. Anahtar\'a takılabilir.<br><li>Anahtarın kullanım süresini <b>15 saniye</b> arttırır.</li>","name":"Tespih","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"Pirinçten yapılmış ve son derece yıpranmış bir jeton. Şayet zamanında üzerine bir şeyler yazılmış veya çizilmişse de şu an tamamen yok olmuş. Üzerindeki halkayı kullanarak Anahtar\'a takabilir, Anahtar\'ın hare okuma yeteneğini harekete geçirebilirsin.<br><li><b>24 metrelik</b> mesafedeyken <b>Kurbanların haresini</b> gösterir.</li>","name":"Aşınmış Jeton","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"Sıradan bir görünümü olan altın bir jeton. Her iki yüzü de pürüzsüz ve üzerinde herhangi bir şey yazmıyor. Üzerindeki halkayı kullanarak Anahtar\'a takabilir, Anahtar\'ın hare okuma yeteneğini harekete geçirebilirsin.<br><li><b>48 metrelik</b> mesafedeyken <b>Kurbanların haresini</b> gösterir.</li>","name":"Altın Jeton","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"Sıradışı koyu mavimsi bir parlaklığı olan, sıradan bir anahtarlık. Anahtarlık, Anahtar\'ı kullanana bağlayarak en zor anlarda bile kaybolmasını engeller.<br><li>Ölümde anahtarı değil, bu eklentiyi kaybet.</li>","name":"Dokuma Yüzük","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"Bu mat cam parçası, donuk ve titreşimli bir ses yayıyor. Anahtar, bir kara kilidi açmak için kullanıldığında cam jeton Sis\'in enerjisini cama aktararak anahtarın kırılmasını önlüyor.<br><li>Kara kilidi açarken anahtarı değil, bu eklentiyi kaybet.</li>","name":"Bulanık Cam","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"İçinde siyah damarları olan kan kırmızısı bir kehribar. Kehribara dokununca bir sıcaklık hissediyorsun. Üzerindeki halkayı kullanarak Anahtar\'a takabilir, Anahtar\'ın hare okuma yeteneğini harekete geçirebilirsin.<br><li><b>32 metrelik</b> mesafedeyken, Anahtar\'ın enerjisinden <b>büyük miktarda harcayarak</b> <b>Katil\'in haresini</b> görebilirsin.</li>","name":"Kan Kehribarı","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"Kalın ve lifli bir maddeden kopmuş bir parça. Üzerinde, tek başına herhangi bir işlevi olmayan yarım ve soluk bir harita görülüyor.<br><li>Tüm haritalara <b>5 saniyelik bir yük</b> ekler.</li>","name":"Harita Parçası","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"Küçük bir elektrik kablosu. Her iki ucu da bulunması gereken yerden koparılarak çıkarılmış gibi hasarlı. Bir haritanın etrafına sarılarak hare okuma yeteneği arttırılabilir.<br><li><b>Çıkış Kapılarını</b> bulma yeteneğini açar.</li>","name":"Sarı Kablo","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"Belgeleri işaretlemek için kullanılan, lastik tamponu çapraz çizgili olan ahşap bir damga. Bu damganın nasıl veya kim tarafından kullanıldığı bilinmiyor. Bir haritayla kullanılabilir.<br><li>Harita okuma yeteneğinin menzilini <b>orta seviyede arttırır</b>.</li>","name":"Olağandışı Damga","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"Solgun lavanta renginde, sümüksü ve yarı saydam bir madde. Neyden yapıldığı belli olmayan bu jölenin ısı direnci hayli yüksek.<br><li>Haritanın yanma oranını <b>orta seviyede yavaşlatır</b>.</li>","name":"Engelleyici Jel","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"Koyu kırmızı renkte, pürüzlü ve sert bir sicim. Hare okuma yeteneğini arttırmak için haritaların etrafına sarılabilir.<br><li><b>Katil\'in eşyalarının</b> izini sürme yeteneğini açar.</li>","name":"Kızıl Sicim","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"Kenarları altınla çevrili bu tuhaf boncuk, haritayı büyütmek ve belirli bir pozisyonu işaretlemek için kullanılabilir. Boncuğun yaydığı enerji, Kurbanlar tarafından hissedilebilir ve görülebilir.<br><li>İkincil eylemde İşaretleme Yeteneği\'ni açar.</li><li>Tüm Kurbanlar tarafından görülebilen bir işaret yaratır.</li>","name":"Cam Boncuk","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"Sağlam bir beyaz ağaçtan oyulmuş damga. Altında yazan yazı okunmuyor: \\"kw\'zvre\'od\\". Bir haritayla kullanılabilir.<br><li>Harita okuma yeteneğinin menzilini <b>önemli ölçüde arttırır</b>.</li>","name":"Garip Damga","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"Yumuşak görünümlü, pürüzsüz, siyah bir kablo. Hare okuma yeteneğini arttırmak için haritaların etrafına sarılabilir.<br><li><b>Kara kilitlerin</b> izini sürme yeteneğini açar.</li>","name":"Siyah İpek Kordon","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"Şaşırtıcı biçimde karmaşık bir aparata sarılmış çapraşık bir dizi mercek. Merceklerin odağını kontrol eden araçlar, insanların göremediği şeylere odaklanmak için kendiliğinden hareket eder.<br><li>Her Kurban, haritanın sahibi etkinleştirdiğinde haritanın oluşturduğu hareyi görür.</li>","name":"Kristal Boncuk","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"Çapraz kontaminasyona karşı tek kullanımlık tıbbi eldivenler.<br><li>Çok Başarılı Beceri Denemeleri gerçekleştirildiğinde kazanılan ilerleme ilavesini <b>orta seviyede arttırır</b>.</li>","name":"Lastik Eldivenler","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"Küçük yaraları kapatmak için kullanılan yara bandı.<br><li>İyileştirme hızını <b>biraz arttırır</b>.</li>","name":"Kelebek Bant","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"Genellikle ilkyardım çantalarında bulunan bir paket bandaj.<br><li>Medikal Kit\'e <b>8 yük</b> ekler.</li>","name":"Sargı","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"Fazla kanı emerek yaralara daha kolay erişilmesini sağlayan sıradan bir sünger.<br><li>Çok Başarılı Beceri Denemeleri gerçekleştirildiğinde kazanılan ilerleme ilavesini <b>önemli ölçüde arttırır</b>.</li>","name":"Sünger","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"Klipse gerek olmadan kendi kendine tutunabilen ve daha az düzeltmeyle daha hızlı bir onarma sağlayan bandaj.<br><li>Medikal Kit\'e <b>8 yük</b> ekler.</li><li>İyileştirme hızını <b>biraz arttırır</b>.</li>","name":"Kendinden Yapışkanlı Sargı","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"Gerçek bir tıbbi gereç olmasa da bir yaranın hızlıca ve acıyla dikilmesi için kullanılabilir.<br><li>Beceri Denemesi gerçekleşme ihtimalini <b>orta seviyede arttırır</b>.</li><li>Beceri Denemelerinde çok başarılı olmak <b>%100 bonus Kan Puanı</b> verir.</li><li>İyileştirme hızını <b>biraz arttırır</b>.</li>","name":"İğne ve İplik","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"Makaslar kumaşları kolayca kesebilmek için tasarlanmıştır.<br><li>İyileşme hızını <b>orta seviyede arttırır</b>.</li>","name":"Tıbbi Makas","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"Çeşitli yaralar için kullanılabilen steril gazlı bez. Tam yara bakım sisteminin bir parçası.<br><li>Medikal Kit\'e <b>12 yük</b> ekler.</li>","name":"Gazlı Bez","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"Vücut dokusunu kapatmak ve tutturmak için kullanılan tıbbi bir gereç. Son derece etkili olmasına karşın, cerrahi ipliğin kullanımı oldukça zor.<br><li>Beceri Denemesi gerçekleşme ihtimalini <b>önemli ölçüde arttırır</b>.</li><li>Beceri Denemelerinde çok başarılı olmak <b>%150 bonus Kan Puanı</b> verir.</li><li>İyileşme hızını <b>biraz arttırır</b>.</li>","name":"Cerrahi İplik","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"Fazla sızıntılı yaraları kapatmak için kullanılan jel tampon paketi.<br><li>Medikal Kit\'e <b>16 yük</b> ekler.</li>","name":"Jel Sargı","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"Karın bölgesindeki büyük yaralara uygulandığında vücut sıvılarının akmasını önleyen, son derece emici bir tampon.<br><li>İyileşme hızını <b>önemli ölçüde arttırır</b>.</li><li>Yükü en fazla <b>8 azaltır</b>.</li>","name":"Karın Sargısı","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"Pıhtılaştırıcı özelliği olan beyaz pudra. Bu pudrayı, bir yaranın kanamasını durdurmak için kullanabilirsin.<br><li>Kan Kesici\'yi kullanmak için Medikal Kit ile iyileşirken <i>İkincil Eylem</i> butonuna bas.</li><li><i>Kan Kesici</i> yaralı bir Kurban\'ın üzerinde kullanıldığında, Kurban <b>8 saniyeliğine</b> <b>Dayanıklılık</b> durum etkisi kazanır.<li>Kullanınca Medikal Kit\'i tüketir.</li>","name":"Kan Kesici","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"Kanamayı saniyeler içinde durdurabilen, antihemorajik bir madde.<br><li>Kanama Durdurucu İğne\'yi kullanmak için Medikal Kit ile iyileşirken <i>İkincil Eylem</i> butonuna bas.</li><li>Etkilenen Kurban, kullandıktan <b>16</b> saniye sonra pasif olarak bir sağlık aşaması kazanır.</li><li>Gereken süre, <i>iyileşme hızını</i> etkileyen avantaj, eşya ve eklentilere göre değişir.</li><li>Bu etki, etkilenen Kurban\'ın sağlık aşaması değişince ya da Kurban, Katil tarafından taşınınca iptal edilir.</li><li>Kullanınca Medikal Kit\'i tüketir.</li>","name":"Kanama Durdurucu İğne","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"Hortumları kilitlemek veya telleri sabit tutarak hasar ya da yaralanmaları önlemek için kullanılan faydalı bir araç.<br><li>Tamirat yaparken çıkardığın gürültü ve duyulma mesafesi 8 metre azalır.</li>","name":"Yaylı Mandal","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"Yay, vida ve dişli gibi hurdalar. Çoğunlukla kullanılamaz şeyler.<br><li>Alet çantasına <b>8 yük</b> ekler.</li>","name":"Hurda","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"Sıradan bir kumaş parçası. Tuhaf biçimde temiz.<br><li>Alet çantasının onarım hızını <b>biraz arttırır</b>.</li>","name":"Temiz Kumaş Parçası","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"Taşınabilir fakat oldukça ağır bakır tel makarası.<br><li>Alet çantasına <b>12 Yük</b> ekler.</li>","name":"Tel Makarası","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"Somunlar, mekanik cihazların derinliklerindeki erişilemeyen cıvatalara bükülme ve esneklik sağlar.<br><li>Alet çantası tamir hızını <b>orta seviyede arttırır</b>.</li>","name":"Yuva Somunları","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"Elle yapılan işlerde beceriyi düşürürken elleri yaralanmalardan koruyan kalın eldivenler.<br><li>Alet çantası ile bir kancayı sabote ederken Katil\'in bildirim almasını engeller.</li>","name":"Koruyucu Eldivenler","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"Biri bu kabuğun üstüne tamir talimatlarını hızlıca resmetmiş gibi duruyor.<br><li>Alet çantası ile tamirat yaparken beceri denemelerini aradan çıkarır.</li>","name":"Talimatlar","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"Sağlam bir sapı olan, ayarlanabilir ingilizanahtarı. Tüm alet çantalarının olmazsa olmazı.<br><li>Alet çantasını kullanarak sabote edilmiş kancaların yeniden ortaya çıkması 15 saniye daha uzun sürer.</li>","name":"Kilitlenebilen Kurbağacık","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"Çentikli metal telden ve iki ahşap tutamaçtan yapılmış, basit bir kesme aracı.<br><li>Alet çantasının sabotaj hızını <b>biraz arttırır</b>.</li>","name":"Kesme Teli","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"Metal kesici bıçağı olan küçük bir el testeresi.<br><li>Alet çantasının sabotaj hızını <b>orta seviyede arttırır</b>.</li>","name":"Demir Testeresi","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"Bu karmaşık mekanik parçanın burada işi yokmuş gibi görünüyor. Sanki fabrikadan yeni çıkmış gibi temiz ve parlak.<br><li><b>Alet Çantasıyla Onarım</b> eyleminin yerini, <b>Yeni Parça Tak</b> alır.</li><li><i>Yeni Parça</i>\'yı takmak, bir jeneratörün <b>%15</b>\'ini <b>5</b> saniye içinde otomatik olarak tamamlar.</li><li>Kurulum sırasında, <b>2 zorlu Beceri Denemesi</b>\'yle karşı karşıya kalırsın.</li><li>Her bir Beceri Denemesi\'ni başarıyla tamamladığında, her deneme için en fazla <b>%25</b>\'lik ilave ilerleme olmak üzere <b>%5</b> jeneratör tamir ilerlemesi alırsın.</li><li><i>Bu eklenti, kullanımdan sonra tüketilir.</i></li>","name":"Yeni Parça","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"Sis\'ten gelen ve bu dünyaya ait olmayan bir enerji yayan oymalı bir alyans.<li>Saplantı\'nın haresini açığa çıkarır.</li><li>Katil\'in Saplantı\'sı olma ihtimalini düşürür.</li>","name":"Eşsiz Alyans","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/tr/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/tr/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Hedef kategorisinde <b>%50</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Bataklık Defnesi Keseciği","flavor":"\\"Kuru yapraklarla dolu, avuçiçi büyüklüğünde, elle dikilmiş bir kesecik. Çaya benzeyen hafif bir koku yayıyor.\\"","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"Hedef kategorisinde <b>%75</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Taze Bataklık Defnesi","flavor":"\\"Leş gibi bir bataklığın ortasında açmış güzel, mor bir çiçek. Çaya benzeyen, hafif bir koku yayıyor.\\"","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"Hedef kategorisinde <b>%100</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Kokulu Bataklık Defnesi","flavor":"\\"Leş gibi bir bataklığın ortasında açmış güzel, mor bir çiçek. Çaya benzeyen, kuvvetli bir koku yayıyor.\\"","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"Sağ Kalma kategorisinde <b>%50</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Horozibiği Keseciği","flavor":"\\"Boncuk gibi tahıllarla dolu, avuçiçi büyüklüğünde, elle dikilmiş bir kesecik. Horozibiğinin ebedi olduğunu söylerler.\\"","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"Hayatta kalma kategorisinde <b>%75</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Taze Horozibiği","flavor":"\\"Solmuş yeşil yaprakların üzerinde garip kızıl damarlar var. Horozibiğinin ebedi olduğunu söylerler.\\"","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"Hayatta kalma kategorisinde <b>%100</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Kokulu Horozibiği","flavor":"\\"Solmuş yeşil yaprakların üzerinde garip kızıl damarlar var. Güçlü bir turp kokusu yayıyor.\\"","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"Fedakârlık kategorisinde <b>%50</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Çiçekli Çanta","flavor":"\\"İçinde 4 tane altın rengi taçyaprak olan, avuçiçi büyüklüğünde, elle dikilmiş bir kesecik. Çuhaçiçeği, güneş yerini aya devretmeden hemen önce açar.\\"","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"Fedakârlık kategorisinde <b>%75</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Taze Çuhaçiçeği","flavor":"\\"Zirvedeyken toplanmış altın rengi çiçekler. Çuhaçiçeği, güneş yerini aya devretmeden hemen önce açar.\\"","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"Fedakârlık kategorisinde <b>%100</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Kokulu Çuhaçiçeği","flavor":"\\"Zirvedeyken toplanmış altın rengi çiçekler. Güçlü ve rahatlatıcı bir toprak kokusu yayıyor.\\"","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"Cesaret kategorisinde <b>%50</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Hüsnüyusuf Keseciği","flavor":"\\"İçinde çeşitli solmuş taçyaprakların ve mat mavi yaprakların bulunduğu elle dikilmiş avuçiçi büyüklüğünde bir kese. Karanfile benzeyen, baharatlı ve güçlü bir koku yayıyor.\\"","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"Cesaret kategorisinde <b>%75</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Taze Hüsnüyusuf Çiçeği","flavor":"\\"Pembe taçyaprakları ve ortasında kan rengi tepecik olan çiçeklerden oluşturulmuş bir demet. Karanfile benzeyen, baharatlı bir koku yayıyor.\\"","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"Cesaret kategorisinde <b>%100</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Taze Hüsnüyusuf Çiçeği","flavor":"\\"Pembe taçyaprakları ve ortasında kan rengi tepecik olan çiçeklerden oluşturulmuş bir demet. Karanfile benzeyen, güçlü ve baharatlı bir koku yayıyor.\\"","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"<b>Tüm</b> kategorilerde bütün Kurbanlara <b>%25</b> ilave Kan Puanı verir.<br><li>Etkisi birikir.</li>","name":"Bağlanmış Zarf","flavor":"\\"Açıldıktan sonra tekrardan kapatılmış ve 4 renkli kurdeleyle bağlanmış bir zarf.\\"","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"Tüm kategorilerde <b>%25</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Mühürlü Zarf","flavor":"\\"Üzerinde gönderileceği adres yazmayan, zamanla sararmış ve açılmamış bir zarf. İçinde ne yazdığı asla bilinmeyecek.\\"","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"Tüm kategorilerde <b>%100</b> ilave Kan Puanı verir.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Kaçış! Pastası","flavor":"\\"Bu pastanın resmi kesinlikle gerçek.\\"","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"Şansını <b>biraz arttırır</b>.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Tebeşir Kesesi","flavor":"\\"Nereden geldiği bilinmeyen, beyaz tebeşire benzer bir tozla dolu küçük ve pamuklu bir kese. Bazıları iyi şans getirdiğine inanıyor.\\"","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>Tüm</b> Kurbanların şansını <b>orta seviyede arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Krem Rengi Tebeşir Kesesi","flavor":"\\"Diz çökmüş bir şekilde hediye veren bir kadını temsil eden, kara tuzdan yapılmış, kırılgan, minyatür bir heykel. Bazıları iyi şans getirdiğine inanıyor.\\"","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"Şansı <b>önemli ölçüde arttırır</b>.<br><li>Kişisel.</li><li>Etkisi birikir.</li>","name":"Fildişi Rengi Tebeşir Kesesi","flavor":"\\"Bir tarafı düz, beyaz iplik kullanılarak elle dikilmiş küçük deri bir kese. Kese ay ışığında parlayan fildişi rengi tebeşire benzeyen bir tozla dolu. Bazıları iyi şans getirdiğine inanıyor.\\"","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>Tüm</b> Kurbanların şansını <b>biraz arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Tuz Kesesi","flavor":"\\"Kara tuz kristalleriyle dolu, küçük ve pamuklu bir kese. Bazıları iyi şans getirdiğine inanıyor. Sakın dökme.\\"","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>Tüm</b> Kurbanların şansını <b>önemli ölçüde arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Vigo\'nun Tuzlu Dudak Kavanozu","flavor":"\\"Bulanık bir suyun içinde yüzen insan dudaklarının olduğu, sıkıca kapatılmış, cam bir kavanoz. Bazıları iyi şans getirdiğine inanıyor.\\"","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"<b>1</b> sandığın daha ortaya çıkması için Mahluk\'u çağırır.<br><li>Etkisi birikir.</li>","name":"Paslı Para","flavor":"\\"Tüm pırıltısını kaybetmiş, yuvarlak bir metal parçası.\\"","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"<b>2</b> sandığın daha ortaya çıkması için Mahluk\'u çağırır.<br><li>Etkisi birikir.</li>","name":"Parlak Para","flavor":"\\"Temiz ve cilalı bir altın parçası.\\"","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"Mahluk\'u sakinleştirerek kurban kancaları arasındaki <b>mesafeyi</b> <b>biraz arttırır</b>.<br><li>Etkisi birikir.</li>","name":"Fosil Meşe","flavor":"\\"Kırıp dökülen bir fosil odun parçası.\\"","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"Mücadeleye başka biriyle birlikte başlarsın.<br><li>Gizli.</li>","name":"Birlik Pelerini","flavor":"\\"Düğümlü bir kumaş parçası.\\"","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"Tüm Kurbanlar mücadeleye aynı yerde başlar.<br><li>Gizli.</li>","name":"Bağlama Pelerini","flavor":"\\"Her iki tarafında da küçük düğümler bulunan, solmuş, kare şeklinde bir kumaş parçası.\\"","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"Mücadeleye Katil\'den olabildiğince uzak bir yerde başlarsın.<br><li>Gizli.</li>","name":"Vigo\'nun Pelerini","flavor":"\\"Sis\'te geçirdiğim yıllarda birçok mucizeyle karşılaştım. Fakat Sis\'in bükülemez kurallarını daha yeni anlıyorum.\\" -Vigo\'nun Günlüğü","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/tr/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/tr/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Kişinin hare okuma becerisini artırır. Bir Jeneratör tamir edildiğinde Katil\'in haresi sana <span class=\\"Highlight1\\">{0} saniyeliğine</span> görünür.<br>Son jeneratör de tamir edildiğinde Katil\'in haresi sana <span class=\\"Highlight2\\">{1} saniyeliğine</span> görünür.","name":"Karanlık İçgüdü","flavor":"\\"Kulağına bir emektardan küpe olsun: Sakin ol, acele etme ve bu kadar kafaya takmayı bırak! Onu alt etmenin en kolay yolu nasıl düşündüğünü çözmek.\\" -Kayıp Kasetler: Murf","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"Kişinin hare okuma becerisini artırır. Başarısızlık korkusuyla birleşen paranoya, aynı hataları tekrarlamanı engelliyor.<br>Maç başında ve jeneratörler her tamir edildiğinde, birbirine yakın <span class=\\"Highlight1\\">{0}</span> jeneratörün haresi sana <span class=\\"Highlight2\\">{1} saniyeliğine</span> görünür.<br>Jeneratörlerin yerini bulabildiğin bir haritan varsa <i>Deja Vu</i> ile görünen jeneratörler haritaya eklenir.","name":"Deja Vu","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"Başarılı bir kaçış ihtimali içini umutla dolduruyor. Çıkış Kapılarına güç verilir verilmez <span class=\\"Highlight3\\">{1} saniyeliğine</span> <span class=\\"Highlight1\\">%{0}</span> <b><i>Sürat</i></b> durum etkisi kazanırsın.<br>","name":"Umut","flavor":"\\"Kemerleri bağlayın sikkolar! Gidiyoruz!\\" -Kayıp Kasetler: Nikki","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"Kişinin hare okuma becerisini arttırır. Kancaya asıldığında tüm Kurban hareleri diğer bütün Kurbanlara görünür. Katil <span class=\\"Highlight1\\">{0} metre</span> yakındaysa onun haresi de bütün Kurbanlara görünür.<br><br>Senin dışındaki bir Kurban kancada asılıyken, diğer tüm Kurbanların hareleri sana görünür. Katil, kancada asılı olan Kurban\'ın en az <span class=\\"Highlight1\\">{0} metre</span> yakınındaysa, Katil\'in haresi sana görünür.","name":"Hepimiz Biriz","flavor":"\\"İyi geçinin. Bu işte hepimiz birlikteyiz.\\" -Kayıp Kasetler: Sujan","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"Hafif ve yumuşak adımlarla koştuğun için izini sürmek daha zor. Çizikler normalden <span class=\\"Highlight1\\">{0} saniye</span> daha az kalır.","name":"Hafif Sıklet","flavor":"\\"Ağırdan al, nereden geçtiğini biliyor. Her zaman söylerim: Yavaş yaşa, yaşlı öl.\\" -Kayıp Kasetler: Dylan","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"Birini geride bırakmak söz konusu bile değil. En az bir çıkış kapısı açıldığında bu etkileri kazanırsın:<br><li>Diğer Kurbanları iyileştirmek veya kancadan kurtarmak, fazladan <span class=\\"Highlight1\\">%{0}</span> Kan Puanı kazandırır.</li><li>Diğer Kurbanları iyileştirirken veya kancadan kurtarırken <span class=\\"Highlight2\\">%{1}</span> ilave eylem hızı kazanılır.</li><li>Diğer tüm Kurbanların hareleri sana görünür.</li>","name":"Kimse Geride Kalmayacak","flavor":"\\"...evet, biliyoruz. Ama bence birlikte çalışırsak onu alt edebiliriz. Bencilce davranıp hamlelerimizi tahmin etmesine yol açmayalım!\\" -Kayıp Kasetler: Clyde","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"Kişinin hare okuma becerisini arttırır. Etrafında bulunan <span class=\\"Highlight1\\">{0} metre</span> mesafedeki açılmamış sandıkların ve eşyaların haresi sana görünür. Sandıklardan yüksek nadirlikte bir eşya bulma ihtimalini <b>önemli ölçüde</b> arttırır.","name":"Yağmacı Sezgisi","flavor":"\\"Önderler eskiden bunları saatlerce yağmalardı.\\" -Kayıp Kasetler: Aizeyu","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"Tehlikeyi sezmede uzmansın. Katil\'in olduğu yöne <span class=\\"Highlight1\\">45 derecelik</span> koni şeklinde bir açıyla <span class=\\"Highlight2\\">{0} metreden</span> baktığında ses uyarısı alırsın. Önsezi her etkinleştiğinde <span class=\\"Highlight3\\">{1} saniye</span> bekleme süresine girer.","name":"Önsezi","flavor":"\\"Bu iş içime sinmedi!\\"","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"Tehlikeli anlarda motivasyonun artıyor. Yaralıyken tamir etme, sabotaj, iyileştirme, kancadan kurtarma, atlama, temizleme, Çıkış Kapılarını açma ve sandık açma eylemleri için <span class=\\"Highlight1\\">%{0}</span> ilave hız kazanırsın.","name":"Direnç","flavor":"\\"Odaklan, en çaresiz anında bile...\\"","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"Kancalardan kurtulmak için etkili bir yöntem geliştirdin.<br><li>Kancadayken en fazla <span class=\\"Highlight1\\">{0}</span> ilave kaçış teşebbüsü sağlar.</li><li>Kancadan kaçış teşebbüslerinin başarılı olma ihtimali <span class=\\"Highlight2\\">%{1}</span> artar.</li>","name":"Kaygan Et","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"Tehlikeyi sezmede uzmansın. Totemlerin olduğu yöne <span class=\\"Highlight1\\">45 derecelik</span> koni şeklinde bir açıyla <span class=\\"Highlight2\\">{0} metreden</span> baktığında ses uyarısı alırsın. Hayat Bir Oyun her etkinleştiğinde <span class=\\"Highlight3\\">{1} saniye</span> bekleme süresine girer. Herhangi bir oyuncu tarafından temizlenen her Sönük Totem ve Efsun Totemi için bir Nişan kazanırsın. Hayat Bir Oyun\'un algılama konisi her nişan başına <span class=\\"Highlight4\\">5 derece</span> küçülür.","name":"Hayat Bir Oyun","flavor":"\\"Almayayım.\\" -Kayıp Kasetler: Andy","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"Yaklaşan felaketi doğaüstü bir şekilde sezebiliyorsun. Katil <span class=\\"Highlight1\\">{0} metrelik</span> alan içinde doğrudan senin yönüne baktığında bildirim alırsın. Ürperti etkinken Beceri Denemesi çıkma ihtimali <span class=\\"Highlight2\\">%{1}</span> artar ancak başarı bölgeleri <span class=\\"Highlight3\\">%{2}</span> daha küçüktür. Ürperti etkinken tamir etme, sabotaj, iyileştirme, kancadan kurtarma, atlama, temizleme, çıkış kapılarını açma ve sandık açma hızların <span class=\\"Highlight4\\">%{3}</span> artar.","name":"Ürperti","flavor":"\\"Tek kelime etmeyen bir ses var. Dinle.\\" -Kayıp Kasetler: Sassy","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"Yoğun stres altındayken performansın inanılmaz artıyor. Yaralıyken gerçekleştirdiğin tamir ve iyileştirme eylemlerinin Çok Başarılı Beceri Denemesi alanı <span class=\\"Highlight1\\">%{0}</span> büyür.","name":"Bu Gerçek Olamaz","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"Başkalarına yardım etmek moralini yükseltiyor.<br><br>Başka bir Kurban\'ı kancadan kurtardığında başkalarını iyileştirme hızın <span class=\\"Highlight3\\">{1} saniyeliğine</span> <span class=\\"Highlight1\\">%{0}</span> artar.","name":"Başaracağız","flavor":"\\"Birbirimize yardım edersek hepimiz buradan tek parça çıkabiliriz.\\"","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"Kişinin hare okuma becerisini artırır. <span class=\\"Highlight1\\">{0} metre</span> yakınındaki müttefiklerin haresini görürsün.","name":"Bağ","flavor":"\\"Takım olarak ilerlemeliyiz, hayatta kalmanız lazım ki hayatta kalayım!\\" -Dwight","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"<span class=\\"Highlight2\\">{1} metre</span> mesafede bir jeneratör üzerinde çalışan her Kurban için <span class=\\"Highlight1\\">%{0}</span> tamir hızı bonusu kazanırsın. Bu bonus, alan içerisindeki diğer Kurbanlara da uygulanır.<br>Takım eylemleri <span class=\\"Highlight3\\">%{2}</span> daha fazla Kan Puanı kazandırır.<br>Kurbanlar tek seferde yalnızca bir Kendini Kanıtla etkisinden faydalanabilir.","name":"Kendini Kanıtla","flavor":"\\"Neler yapabildiğini görelim!\\" -Dwight","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"Takımını son derece verimli yönetiyorsun. <span class=\\"Highlight2\\">{1} metre</span> yakınındaki diğer Kurbanların iyileştirme, sabotaj, kancadan kurtarma, temizleme, Çıkış Kapılarını açma ve sandık açma hızları <span class=\\"Highlight1\\">%{0}</span> artar.<br>Kurbanlar tek seferde yalnızca bir Lider etkisi altına girebilir.<br>Bu etki, Kurbanlar Lider\'in avantaj etkisi alanından çıktıktan sonra <span class=\\"Highlight3\\">{2} saniye</span> daha sürer.","name":"Lider","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Engellerin üstünden hızlıca atlarken veya dolaplara saklanırken diğerleri kadar ses çıkarmazsın.<br><br>Atlama ve saklanma eylemlerinin ses tespiti ve menzili <span class=\\"Highlight1\\">%{0}</span> azalır.<br><br>Bu etki yalnızca <span class=\\"Highlight2\\">{1} saniyede</span> bir tetiklenir.","name":"Hızlı ve Sessiz","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"Depara kalktığında en fazla <span class=\\"Highlight2\\">{1} saniyeliğine</span> normal koşma hızından <span class=\\"Highlight1\\">%{0}</span> daha hızlı koşmaya başlarsın.<br><span class=\\"Highlight4\\">{2} saniyeliğine</span> <i>Bitkin</i> durum etkisi uygular.<br><i>Ani Depar</i>, <i>Bitkin</i> etkisi altındayken kullanılamaz.<br>Koşarken <i>Bitkin</i> durum etkisinden kurtulamazsın.","name":"Ani Depar","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Kaçmak üzereyken inanılmaz bir enerjiyle dolarsın. <span class=\\"Highlight1\\">Çıkış Kapılarına güç verildiğinde aniden bir <b>sağlık aşaması</b></span> iyileşirsin ve <span class=\\"Highlight3\\">{1} saniye</span> boyunca normal koşma hızından <span class=\\"Highlight2\\">%{0}</span> daha hızlı koşarsın. An itibarıyla hareket edemiyorsan Adrenalin beklemede kalır ve kurtulduğunda devreye girer.<br><i>Adrenalin</i> tetiklendiğinde uykudaysan etki seni <b>uyandırır</b>.<br><i>Adrenalin</i> var olan <i>Bitkin</i> durum etkisini göz ardı eder.<br><span class=\\"Highlight4\\">{2} saniyeliğine</span> <i>Bitkin</i> durum etkisi uygular.<br>Koşarken <i>Bitkin</i> durum etkisinden kurtulamazsın.","name":"Adrenalin","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"Kişinin hare okuma becerisini artırır. <span class=\\"Highlight1\\">{0} metre</span> yakınındaki can çekişen veya yaralı müttefiklerin haresini görürsün. Empati, Katil\'le doğrudan temas halindeki müttefiklerin haresini göstermez.","name":"Empati","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"Kamp ateşinin etrafında bulduğun bitkileri kullanarak kanamayı azaltmaya yarayan çözeltiler üretiyorsun. <b>İyileştirme hızı</b> ve <b>medikal eşya verimi</b> <span class=\\"Highlight1\\">%{0}</span> artar.<br>","name":"Bitkibilim","flavor":"\\"Bitkiler hakkında bir şeyler bilmek bir gün hayatını kurtarabilir.\\"","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"Medikal eşya olmadan normal iyileştirmenin <span class=\\"Highlight1\\">%{0}</span> hızıyla kendini iyileştirme becerisini açar. Medikal eşyalarla kendini iyileştirme verimin <span class=\\"Highlight3\\">%{1}</span> artar.","name":"Kişisel Bakım","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"Konsantre olup meditasyona geçerek acını dindirebiliyorsun. Yaralanmaların sebep olduğu sızlanma naraları <span class=\\"Highlight1\\">%{0}</span> azalır.","name":"Demir İrade","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"Hayvanlar senin yanında sakin kalıyor ve sana güveniyor. Ağaçlıktaki yaratıkların dikkatini çekme ihtimali <span class=\\"Highlight1\\">%{0}</span> azalır.<br>Sakin Ruh, çığlık atma içgüdünü bastırır.","name":"Sakin Ruh","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"Kişinin hare okuma becerisini arttırır.<br><li>Bir Kurban taşınırken onun alındığı noktanın <span class=\\"Highlight1\\">56 metre</span> yarıçapındaki alanda bulunan kanca hareleri görünür.</li><br>Alet çantası olmadan kancaları sabote etme becerisini açar.<br><li>Bir kancayı alet çantası olmadan sabote etmek <span class=\\"Highlight2\\">2,5 saniye</span> sürer.</li><li>Sabotaj eyleminin <span class=\\"Highlight3\\">{0} saniye</span> bekleme süresi vardır.</li>","name":"Sabotajcı","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"Çeviklikte seninle kimse yarışamaz.<br><br>Kedi reflekslerin sayesinde düşmelerin ardından sendeleme süreni <span class=\\"Highlight1\\">%{0}</span> azaltır ve sızlanma naralarının ses düzeyini <span class=\\"Highlight1\\">%100</span> azaltırsın. Koşmaya başlarken en fazla <span class=\\"Highlight3\\">{2} saniyeliğine</span> normal koşma hızının <span class=\\"Highlight2\\">%{1}</span> kadarı daha hızlı koşarsın.<br><br><span class=\\"Highlight4\\">{3} saniyeliğine</span> <b>Bitkin</b> durum etkisi uygular.<br><br><b>Bitkin</b> haldeyken <i>Dört Ayak Üstüne</i> kullanamazsın.<br><br>Koşarken <b>Bitkin</b> durum etkisinden kurtulamazsın.<br>","name":"Dört Ayak Üstüne","flavor":"\\"Daha yüksekten de düşmüştüm.\\" -Nea","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"Ömrün boyunca polislerden kaçmak saklanma becerini artırmış. Eğilmişken hareket hızın <span class=\\"Highlight1\\">%{0}</span> artar.","name":"Arka Sokaklar","flavor":"\\"Boya hâlâ ıslak ama ben çoktan kaçtım bile.\\" -Nea","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"Sokaklarda geçirdiğin geceler sana elindekileri verimli kullanmayı öğretti. <span class=\\"Highlight2\\">{1} metre</span> yakınındaki müttefikler için eşyaların yük tüketimini <span class=\\"Highlight1\\">%{0}</span> azaltır. Bu etki, alandan çıkanlar için <span class=\\"Highlight4\\">{2} saniye</span> daha sürer.","name":"Hayat Okulu","flavor":"\\"Yanlış yapıyorsun! Dur göstereyim.\\" -Nea","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"Kişinin hare okuma becerisini artırır.<br>Mücadelede kalan tek Kurbansan Kapak\'ın haresini <span class=\\"Highlight1\\">{0}</span> metre mesafeden görebilirsin.","name":"Sona Kalan","flavor":"\\"Diyeceğimi dedim, nokta. Tek başıma halledeceğim!\\" -Bill","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"Bir müttefiki kancadan kurtarmak sana inanılmaz bir enerji veriyor.<br>Kancadan kurtardığın Kurbanlar <span class=\\"Highlight1\\">{0} saniyeliğine</span> <b>Dayanıklılık</b> durum etkisi kazanır.<br>","name":"Sayılı Gün","flavor":"\\"Kesin canın çok yanıyor ama seni öldürmeyeceğim. Vazgeçmek yok asker. Kalk ayağa!\\" -Bill Overbeck","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"Zor yaşam şartları sana hayatta kalmanın yeni yollarını öğretti.<br>Can Çekişiyor durumundan tam canla kurtulma becerisi sağlar <b>(her mücadelede bir kez kullanılabilir)</b>. Can Çekişiyor durumunda iyileşme hızını <span class=\\"Highlight1\\">%{0}</span> artırır.","name":"Yıkılmaz","flavor":"\\"Hay sokayım, resmen boka battım!\\" -Bill","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"Bir avuç arkadaşın var ve en iyi korumayı hak ediyorlar.<br>Can çekişen bir Kurban\'ı iyileştirirken, iyileştirme hızın <span class=\\"Highlight1\\">%100</span> artar.<br>Şu eylemlerden birini yaparak bir nişan kazan:<li>Kancadan Güvenli Kurtarma gerçekleştir.</li><li>Bir başka Kurban\'ı korumak için hasar al.</li><li>Katil\'i bir paletle sersemleterek bir Kurban\'ı kurtar.</li><li>Katil\'i bir el feneriyle kör ederek bir Kurban\'ı kurtar.</li>En fazla <span class=\\"Highlight3\\">%{1}</span> olmak üzere, tüm Kan Puanı kazanımlarına nişan başına <span class=\\"Highlight2\\">%25</span> birikebilir bonus alırsın. Bonus Kan Puanları yalnızca mücadele sonunda kazanılır.","name":"Bize Bir Şey Olmaz","flavor":"\\"Hadi bakalım, bırakın gelsin! Göreceği de var.\\" -David King","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"Etkinleştirilebilen Avantaj.<br>Seni yere sermek hiç de kolay değil. Yaralandığında adrenalin deponu kullanarak öne hamle yapıp hasardan kaçınabilirsin.<br><li>Koşarken <i>Etkin Yetenek</i> butonuna basarak öne hamle yap.</li><li>Hamle esnasında hasar almazsın.</li><li><span class=\\"Highlight4\\">{0} saniyeliğine</span> <i>Bitkin</i> durum etkisi uygular.<br>Koşarken <i>Bitkin</i> durum etkisinden kurtulamazsın.</li>","name":"Kum Torbası","flavor":"\\"Bir gece yürüyorduk bir de ne göreyim... Başımın önünden bir şişe fırladı. Sonra bir tane daha, havada şişeler uçuşuyor... Kendi kendime dedim, \'Aha bana eğlence çıktı, hadi girişelim!\' Yemin olsun tozdan göz gözü görmüyordu!\\" -David King","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"Mücadele boyunca <span class=\\"Highlight1\\">Sakat</span> durum etkisine maruz kalırsın.<br>Kanın neredeyse hemen pıhtılaşır. <li>Kan gölcükleri oluşturmazsın.</li><li>Yaralanmaların sebep olduğu sızlanma naraları her daim <span class=\\"Highlight2\\">%{0}</span> daha azdır.</li><li>Can çekişme durumundan tamamen kurtulma becerisi sağlar.</li>","name":"Takma Kafaya","flavor":"\\"Aklımı kaybettim. Bir tane geçirdim ona. Beni kara listeye aldılar. Sonrasında bara gidip birkaç kadeh içtim ve yoluma baktım. Sonuçta bu durumu kafama takamazdım, anlatabildim mi? Koydum götüne.\\" -David King","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"Arkadaşların bir bir Katil\'e kurban oldukça yalnız kalıp inzivaya çekilirsin ve Katil\'in <b>hare okuma becerileri</b> sana karşı sekteye uğrar.<br>Her ölen veya kurban edilen arkadaşın için bir nişan kazanırsın. Her nişan başına Katil, her <b>kurban edilen</b> veya <b>ölen</b> Kurban için en fazla <span class=\\"Highlight1\\">{0} metre</span> uzaktan hareni okuyamaz.<br><li><i>Katil\'in saplantısı olma ihtimalini arttırır.</i></li><li><i>Katil aynı anda sadece bir Kurban\'ı <b>saplantı</b> haline getirebilir.</i></li>","name":"Bir Başına","flavor":"\\"Karabasanın ta kendisiydi.\\" -Laurie Strode","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"Doğaüstü bir güç Katil\'le aranda bir bağ kuruyor.<br><br>Haren Katil\'e göründüğünde Katil\'in haresi de sana görünür ve <span class=\\"Highlight1\\">%{0}</span> bonus iyileşme, tamir etme ve temizleme hızına sahip olursun.<br>Eğer Katil seni Saplantı haline getirdiyse, haren Katil\'e her <span class=\\"Highlight2\\">30 saniyede</span> bir <span class=\\"Highlight3\\">3 saniye</span> boyunca görünür.<br>Saplantı haline gelme ihtimalini arttırır.<br>","name":"Derin Saplantı","flavor":"\\"Beni izliyordu!\\" -Laurie Strode","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"Saldırgandan kurtulmak için elinden ne gelirse yapıyorsun.<br>Kancadan kurtarıldığında veya kendin kurtulduğunda <span class=\\"Highlight1\\">{0} saniyeliğine</span> <i>Can Havli</i> etkinleşir.<br><i>Can Havli</i> etkinken, Katil tarafından yakalandığında kaçmak için Beceri Denemesi\'ni tamamlayıp Katil\'i <span class=\\"Highlight1\\">5 saniyeliğine</span> sersemlet.<br><li>Beceri Denemesi\'nde başarılı veya başarısız olmak <i>Can Havli</i>\'ni devre dışı bırakır.</li><li>Katil\'i sersemlettikten sonra Saplantı haline gelirsin.</li><br>Etkinken yapacağın şu eylemler <i>Can Havli</i>\'ni devre dışı bırakır:<li>Bir jeneratörü tamir etmek</li><li>Kendini ya da başkalarını iyileştirmek</li><li>Bir totemi temizlemek</li><li>Bir kancayı sabote etmek</li><li>Diğer Kurbanları kancadan kurtarmak</li><br><li><i>Saplantı olma ihtimalini arttırır.</i></li><li><i>Katil, aynı anda yalnızca bir Kurban\'ı <b>Saplantı</b> haline getirebilir.</i></li>","name":"Can Havli","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"Kişinin ve takımın hare okuma becerisini güçlendirir.<br><li>Hare okuma mesafelerini <span class=\\"Highlight1\\">{0} metre</span> artırır.</li><li>Kurbanlar tek seferde yalnızca bir <i>Güçlü El</i> etkisi altına girebilir.</li>","name":"Güçlü El","flavor":"\\"Bunca sene beni hayatta tutan şey dikkatimdi. E bir de yakışıklılığım tabii.\\" -Ace","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"Her şey elbet yoluna girecek, inancın tam. Kendine duyduğun güven çevrendekilere umut veriyor. Hâlâ hayatta olan her Kurban için tüm Kurbanlara <span class=\\"Highlight1\\">%{0}</span> bonus şans sağlarsın.","name":"Yüksek Bahis","flavor":"\\"Ne diyebilirim ki? Şanslı biriyim. Biraz size de bulaşır belki.\\" -Ace","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"Şans her zaman yanında gibi görünüyor.<br>Sandıktan aldığın eşyalar <span class=\\"Highlight1\\">%{0}</span> ihtimalle <span class=\\"Highlight2\\">Nadide</span> veya daha düşük nadirlikte bir eklentiyle gelir.<br><span class=\\"Highlight3\\">%{1}</span> ihtimalle <span class=\\"Highlight4\\">Sıradışı</span> veya daha düşük nadirlikte bir eklenti bulabilirsin.<br>Kaçarken, eşyandaki bütün eklentileri de korursun.","name":"Son Koz","flavor":"\\"Parıldayan her şey altın değildir. Ama burada zaten altının hiç değeri yok. Yani bu yine de işime yarar.\\" -Ace","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"Makineleri tamirde âdeta sanayi ustasısın.<br>Tamirat sesinin yüksekliği ve duyulma mesafesi <span class=\\"Highlight2\\">{0} metre</span> azalır. Başarısız bir Beceri Denemesi\'nde jeneratör <span class=\\"Highlight1\\">%{1}</span> ihtimalle patlamaz.","name":"Teknisyen","flavor":"\\"Bu sefer gizli gideceğim.\\" -Feng Min","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"<b>Hızlı</b> atlama gerçekleştirdikten sonra en fazla <span class=\\"Highlight2\\">{1} saniyeliğine</span> normal koşma hızından <span class=\\"Highlight1\\">%{0}</span> daha hızlı koşmaya başlarsın. <br><span class=\\"Highlight4\\">{2} saniyeliğine</span> <i>Bitkin</i> durum etkisi uygular.<br><i>Kıvrak</i>, <i>Bitkin</i> etkisi altındayken kullanılamaz.<br>Koşarken <i>Bitkin</i> durum etkisinden kurtulamazsın.","name":"Kıvrak","flavor":"\\"Ağla.\\" -Feng Min","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"Keskin hislerin her daim tetikte.<br>Katil hasar verici bir eylemde bulunduğunda <span class=\\"Highlight1\\">{0} saniyeliğine</span> sana görünür.","name":"Pür Dikkat","flavor":"\\"Gözlerim her şeyi görüyor.\\" -Feng Min","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"Kişinin hare okuma becerisini artırır. Tüm jeneratörler onarıldığında <span class=\\"Highlight1\\">{0} metre</span> yakınındaki Çıkış Kapıları sana görünür. Çıkış Kapılarını açarken haren <span class=\\"Highlight2\\">{1} metre</span> yakınındaki Kurbanlara görünür.<br><i>Aç Gözünü!</i> etkinken Çıkış Kapılarını <span class=\\"Highlight3\\">%{2}</span> daha hızlı açarsın.","name":"Aç Gözünü!","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"İlaç bulmada ustasın. Sandıkları <span class=\\"Highlight1\\">%{0}</span> daha hızlı açarsın ve açarken çıkan sesin ulaştığı mesafe <span class=\\"Highlight2\\">{1} metre</span> azalır.<br><i>Eczacı</i> etkinken açtığın <b>ilk</b> sandıkta bir Acil Medikal Kit bulman garantidir.<br>","name":"Eczacı","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"En zor durumlarda bile arkadaşlarının arkasındasın. <span class=\\"Highlight1\\">{0} metre</span> yakındaki müttefiklerinle birlikte <b>Bitkin, Kan Kaybı, Topal</b> ve <b>Körlük</b> durum etkilerinden <span class=\\"Highlight2\\">%{1}</span> daha hızlı kurtulursunuz. Alandan çıkıldığında bu etki <span class=\\"Highlight4\\">{2} saniye</span> daha sürer.<br>","name":"Gece Nöbeti","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"Önünde hiçbir şey duramıyor. Zor durumlardaki tükenmek bilmez azmin sayesinde <span class=\\"Highlight1\\">%{0}</span> daha hızlı sürünürsün ve aynı zamanda iyileşirsin.","name":"Azim","flavor":"\\"Bu nedir ya? Alaşağı edeceğim pezevengi!\\" -Dedektif David Tapp","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"Kişinin hare okuma becerisini arttırır. Her tamir edilen jeneratörün ardından; <span class=\\"Highlight1\\">{0} metre</span> civardaki jeneratörlerin, sandıkların ve totemlerin haresi sana <span class=\\"Highlight2\\">{1} saniyeliğine</span> görünür.<br>Hedeflerin yerini gösteren bir haritan varsa <i>Dedektif Sezgisi</i>\'yle açığa çıkan jeneratörler, sandıklar ve totemler haritaya eklenir.","name":"Dedektif Sezgisi","flavor":"\\"Dün gece nerede olduğunu söyleyebilir misin?\\" -Dedektif David Tapp","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"Katil\'e yaklaşmak kararlılığını arttırıyor. Kovalama dışında Katil\'in Dehşet Alanı\'nda bulunduğun her <span class=\\"Highlight1\\">{0} saniye</span> için bir Nişan kazanırsın (en fazla <span class=\\"Highlight2\\">{1} Nişan</span>).<br><i>Kedi-Fare</i>\'nin en az <b>1 Nişanı</b> varsa Başarılı Beceri Denemeleri <b>1 Nişan</b> harcayarak Çok Başarılı Beceri Denemesine dönüşür ve jeneratör tamiri ilerlemesine <span class=\\"Highlight3\\">%1</span> bonus verir.","name":"Kedi-Fare","flavor":"\\"Yakaladım seni, iki elin kanda yakaladım hem de. Korkup kaçmaya çalışıyorsun çünkü sen de biliyorsun, avcumuzdasın. Bu davayı kapatacağız!\\" -Dedektif David Tapp","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"Hızlı bir atlama gerçekleştirirken veya koşarak bir dolaptan çıkarken <span class=\\"Highlight1\\">{0} saniyeliğine</span> hiç çizik bırakmazsın.<br><i>Dans Edelim</i>, <span class=\\"Highlight4\\">{1} saniye</span> bekleme süresine sahiptir. ","name":"Dans Edelim","flavor":"\\"Gösteri başladı seçtim seni, <br>Dans edelim yarınlar yok gibi, <br>Ritim hızlandı yetişmeye çalış,<br>Dans edelim yok bundan kaçış.\\"<br>-Kate Denson\'dan \\"Dans Edelim\\"","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"Kişinin hare okuma becerisini arttırır. <span class=\\"Highlight1\\">{0} metre</span> yakınındaki paletlerin, yıkılabilir duvarların ve atlama noktalarının haresi sana görünür.<br>Kovalama esnasında palet düşürülür veya bir yerden atlanırsa <i>Fırsat Penceresi</i> <span class=\\"Highlight1\\">{1} saniye</span> bekleme süresine girer.","name":"Fırsat Penceresi","flavor":"\\"Kalk uyan, çalış kazan,<br>Nişan al, çek tetiği, vur şöhreti alnından,<br>Ailenin önemi büyüktür, âdeta bir inci,<br>Aç ardına kadar önündeki fırsat pencereni.\\"<br>-Kate Denson\'dan \\"Fırsat Penceresi\\"","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"Tam bir savaşçısın ve düşmanının elinden kurtulmak için yapmayacağın şey yok. Katil üzerindeki debelenme etkin <span class=\\"Highlight1\\">%{0}</span> artar. <br>Katil\'in <span class=\\"Highlight1\\">{1} metredeki</span> kanca harelerini görme becerisini devre dışı bırakırsın.","name":"Yılmak Yok","flavor":"\\"Hem deliyim hem güçlü,<br>Kurtulma çabam türlü türlü,<br>Beni zapt edemezsin, ruhun ölü.\\"<br>-Kate Denson\'dan \\"Yılmak Yok\\"","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"Etkinleştirilebilen Avantaj.<br>Katil\'in Dehşet Alanı\'nda, kovalama haricinde <span class=\\"Highlight1\\">{0} saniye</span> kalmak <i>Şaşırtmaca</i>\'yı devreye sokar.<br><li><i>Şaşırtmaca</i> devreye girdiğinde eğilmiş ve hareketsiz haldeyken <i>Etkin Yetenek</i> butonuna basarak bir taş fırlat. Taş, Katil\'e <span class=\\"Highlight2\\">20 metre</span> uzakta bir dikkat dağınıklığı yaratır.</li><br><li>Yetenek tetiklendiğinde avantajın süresi sıfırlanır.</li><br>Dikkat dağınıklığı şunları içerir:<br><li>Yüksek ses bildirimi</li><li>Çizikler</li>","name":"Şaşırtmaca","flavor":"\\"Bir kolay yol vardır bir de doğru yol. İkisini karıştırırsan gittiğin yol, yol olmaz.\\" -Adam Francis","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"Başka bir Kurban\'ı güvenle kancadan kurtardığında <i>Kurtuluş</i> devreye girer.<br>Artık kaçmaya çalışırken kendini <span class=\\"Highlight1\\">%100</span> ihtimalle kancadan kurtaracaksın.<br>Kancadan başarılı bir <i>Kurtuluş</i>, <span class=\\"Highlight3\\">{0} saniyeliğine</span> <span class=\\"Highlight2\\">Sakat</span> durum etkisi uygular.","name":"Kurtuluş","flavor":"\\"En kötü durumlardan bile nasıl kurtulacağımı müsamaha bilmez bir adamın yanında büyümeme borçluyum.\\" -Adam Francis","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"Mücadeleye, Kurbanları iyileştirirken <span class=\\"Highlight1\\">-%{1}</span> Beceri Denemesi cezasıyla başlarsın.<br>Kurban iyileştirirken gerçekleştirdiğin her başarılı Beceri Denemesi için bir nişan kazanırsın (en fazla <span class=\\"Highlight2\\">{0} nişan</span>).<br>Her nişan sana <span class=\\"Highlight1\\">+%{2}</span> ilerleme bonusu sağlar.<br><i>Öz Öğrenim</i> etkinken Çok Başarılı Beceri Denemeleri gerçekleştirilemez.<li><i>Öz Öğrenim</i>, Medikal Kitlerle iyileştirme yapılırken etkin değildir.</li>","name":"Öz Öğrenim","flavor":"\\"Başaracaklarının sınırı yok, sen yeter ki sıkı çalış.\\" -Adam Francis","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"Bir kancadan kurtulduğunda (kaçarak veya kurtarılarak) kanca kırılır ve Katil\'in haresi sana <span class=\\"Highlight1\\">{0} saniyeliğine</span> görünür. Bu avantajla kırılan bir kancanın yenilenmesi için <span class=\\"Highlight2\\">180 saniye</span> geçmesi gerekir.<br>","name":"Kırıp Geçir","flavor":"\\"Aslanın ağzından çıkıp geldim.\\"<br>Yolun kenarında bulduğum bir tahtanın üstündeki resim. Bir hikâyesi var gibi geldi. İkinci şansını da heba etmesin. -Jeff, tahta parçasındaki mürekkep ve yağlı boya resmi, 12x16","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"Kişinin hare okuma becerisini arttırır.<br><br><li>Kancadan kurtardığın veya seni kancadan kurtaran,</li><li>iyileştirme eyleminde bulunduğun veya seni iyileştiren bütün Kurbanların haresini görürsün.</li><br>Onlar da senin hareni görür.<br><br>Bu etki <span class=\\"Highlight1\\">{0} taneye kadar Kurban\'a</span> etki eder. Katil seni kancaya asarsa bu avantajın tüm etkileri sıfırlanır.<br>","name":"Arayı Açmayalım","flavor":"\\"Fırtınaları Aşan Merhamet.\\"<br>Tanıdığım en iyi müzisyenleri, yani biricik dostlarımı anmak için bir yağlı boya tablosu. İlk albümleri hâlâ en sevdiğim. Kötü bir dönemden o albüm sayesinde çıktım. -Jeff, yağlı boya tablosu, 16x16","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"Mücadeleye <span class=\\"Highlight1\\">{0} nişanla</span> başlarsın.<br><br>Haren Katil\'e göründüğünde <i>Saptırma</i> devreye girer ve bir nişan tüketilir.<br><br><i>Saptırma</i>\'nın aktif olduğu sonraki <span class=\\"Highlight1\\">{1} saniye</span> boyunca çizik bırakmazsın ve Katil hareni göremez.<br><li>Can çekişiyorsan veya bir tuzağa yakalandıysan <i>Saptırma</i> devreye girmez.</li><br>","name":"Saptırma","flavor":"\\"Şahin Tüylü Pelerin ile Kandırılan Ecel.\\"<br>Bu çizim kış vakti uykusuz gecelerden esinlenilerek oluşturuldu. İskandinav mitolojisi keşifleri: En çaresiz anında bile olsan cesaret zayıflıklarını örter. -Jeff, kâğıt üzerine kara kalemle, 12x12","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"Acı dolu deneyimleri paylaşmak iyi gelir.<br>Yaralıyken Medikal Kit kullanmadan bir Kurban\'ı iyileştirmek, seni de bu miktarın <span class=\\"Highlight1\\">%{0}</span> kadarı iyileştirir.","name":"Dayanışma","flavor":"\\"İşler zorlaşınca destek olmak, diğerlerinin derdini dinlemek, ihtiyacı olanlara yardım etmek seni güçlü kılar. Böylece büyürsün.\\" -Jane Romero","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"Hedeflerine ulaşmak kendine güvenini artırıyor.<br>Bir jeneratör tamamlandığında <span class=\\"Highlight1\\">{0} saniyeliğine</span> geride hiç çizik bırakmazsın.","name":"Özgüvenli","flavor":"\\"Tamam. Sakin ol. Çok düşünme ve devam et, halledersin. -Jane Romero","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"Bir şeyi aklına koyduğunda karşına çıkanın vay haline.<br><br>Dolabın içinde <span class=\\"Highlight1\\">{0} saniye</span> durduğunda <i>Bodoslama</i> devreye girer.<br><i>Bodoslama</i> devredeyken, <i>Bodoslama</i>\'yı kullanmak için hızlı eylem gerçekleştir ve dolaptan çık. Katil <i>Bodoslama</i>\'nın etki menzilindeyse, <span class=\\"Highlight1\\">{1} saniyeliğine</span> sersemler.<br><span class=\\"Highlight1\\">{2} saniye</span> boyunca <span class=\\"Highlight3\\">Bitkin</span> durum etkisi verir.<br>Bodoslama, Bitkin\'ken kullanılamaz.<br>Koşarken <span class=\\"Highlight3\\">Bitkin</span> durum etkisinden kurtulamazsın.<br><i>Bodoslama</i>, hareketsiz kaldığın için başının üzerinde kargalar varken kullanılamaz.<br>","name":"Bodoslama","flavor":"\\"İnsanlar üstesinden geldikleri zorluklarla bilinir. Kaçıp nelere kadir olduğunu unutabilir ya da korkularınla yüzleşip dünyaya kim olduğunu hatırlatabilirsin.\\" -Jane Romero","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"Kaçınılmaz sondan kaçmanın bir yolunu her nasılsa buluyorsun.<br><br>Can çekişirken iyileşme ilerlemenin <span class=\\"Highlight1\\">%{0}</span> kadarı Katil seni kaldırdığında çıkan çırpınma ilerlemene yansır (en fazla <span class=\\"Highlight2\\">%{1}</span> çırpınma ilerlemesi).<br>","name":"Ben Kaçar","flavor":"\\"Gittiğin yere selam söyle.\\" -Ash Williams","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"Kişinin hare okuma becerisini artırır. Can çekişen Kurbanların iyileşme durumu <span class=\\"Highlight1\\">{0} metreye</span> kadar harelerinin yoğunluğuyla anlaşılabilir.<br><br>Can çekişen bir Kurban\'ı yaralı durumuna iyileştirdiğinde, Katil\'in haresini <span class=\\"Highlight2\\">{1} saniyeliğine</span> ikiniz de görürsünüz.<br>","name":"Ayaklan","flavor":"\\"Kafamızdaki kötüler asla peşimizi bırakmaz.\\" -Ash Williams","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"Kötülük bir şekilde hep seni buluyor.<br><br><span class=\\"Highlight1\\">{0} </span>Koruma Darbesi skor etkinliği kazandıktan sonra <i>Yüreklilik</i> etkinleşir. <br><br>Etkinleştikten sonra seni <b>yaralı</b> halden <b>can çekişme</b> durumuna sokabilecek ilk olay yok sayılır.<br><br>Sonraki tam cana ulaşma durumunda Katil\'den <span class=\\"Highlight2\\">{1} metre</span> uzaktaysan haren Katil\'e görünür.<br><br>Bir sonraki can çekişme durumunda <i>Yüreklilik</i> devre dışı kalır.<br><i><li>Katil\'in Saplantı\'sı olma ihtimalini arttırır.</li><li>Katil, maç başına yalnızca bir Kurban\'ı <b>Saplantı</b>\'sı haline getirebilir.</li></i><br>","name":"Yüreklilik","flavor":"\\"Kötülük, sanki sırtımda hedef tahtası var gibi kovalıyor beni.\\" -Ash Williams","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"Önündeki engeller ne olursa olsun, adaletini yerini bulmasını ve gerçeğin su yüzüne çıkmasını istiyorsun.<br><br>Tamir ettiğin jeneratörün haresi <span class=\\"Highlight1\\">{0} metre</span> yakınındaki Kurbanlara görünür.<br><br>Sen bir jeneratörü tamir ederken, Katil bir Kurban\'ı yere düşürürse <span class=\\"Highlight2\\">{1} saniyeliğine</span> bütün Kurbanların haresini görürsün.<br>","name":"Birlikten Kuvvet Doğar","flavor":"\\"Hadi bu laboratuvarı yerle bir edelim.\\" -Nancy Wheeler","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"Aklına bir şey koyduğunda geri dönüşü yok. İzin almak yerine merhamet dile.<br><br>Kendi çiziklerini her zaman görebilirsin.<br><br><span class=\\"Highlight1\\">%{0}</span> daha hızlı yürürsün.<br>","name":"Kafayı Bozmuş","flavor":"\\"Başladığımız işi bitirmek istiyorum. O canavarı öldürmek istiyorum.\\" -Nancy Wheeler","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"Yalnız ve kaybolmuş hissettiğinde içine bakar ve içgüdülerine güvenirsin.<br><br>Ne zaman bir totem temizleme eylemi tamamlasan, <i>İçindeki Güç</i> etkinleşir. Üzerinde <b>Sakat durum etkisi</b> varsa, <i>İçindeki Güç</i> etkinleşmez.<br><br><i>İçindeki Güç</i> etkin olduğunda, yaralıyken bir dolabın içinde <span class=\\"Highlight1\\">{0} saniye</span> saklanmak seni otomatik olarak iyileştirerek yaralı durumdan sağlıklı duruma getirir.<br><br><i>İçindeki Güç</i> başarılı bir şekilde tetiklenir tetiklenmez devre dışı kalır.<br>","name":"İçindeki Güç","flavor":"\\"Bütün bu zaman boyunca her şey yolundaymış gibi davranıyordum ama aslında öyle değil.\\" -Nancy Wheeler","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"Her ne kadar bencil olarak tanınsan da ihtiyacı olanlara yardım etmek için her şeyi tehlikeye atmaya hazırsın.<br><br>Bir Kurban\'ı kancadan kurtardığında, söz konusu Kurban <span class=\\"Highlight1\\">{0} saniye</span> boyunca çizik veya kanlı iz bırakmaz. Senin haren Katil tarafından, Katil\'in haresiyse senin tarafından <span class=\\"Highlight2\\">{1} saniye</span> boyunca görülür.<br>","name":"Bakıcı","flavor":"\\"Siz bok kafalıları güvende tutacağıma söz verdim ve tam olarak bunu yapmayı planlıyorum.\\" -Steve Harrington","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"Hayat sana arkadaşların önemini öğretti ve bu da sana güç veriyor.<br><br>Kancada debelenme aşamasındayken <i>Yoldaşlık</i> etkinleşir.<br><br><i>Yoldaşlık</i> etkinken <span class=\\"Highlight1\\">{0} metre</span> yakınında başka bir Kurban daha varsa, kancanın sayacı <span class=\\"Highlight2\\">{1} saniyeliğine</span> durur.<br>","name":"Yoldaşlık","flavor":"\\"Unutma, oraya girince hiçbir şey umurunda değilmiş gibi davran. İşte böyle. Öğreniyorsun arkadaşım.\\" -Steve Harrington","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"Bir Kurban\'ı bir sağlık aşaması eşdeğerinde iyileştirdiğinde <i>Sık Dişini</i> etkinleşir. Üzerinde <span class=\\"Highlight1\\">Sakat</span> durum etkisi varsa, <i>Sık Dişini</i> etkinleşmez.<br><br><i>Sık Dişini</i> etkinken, kancadan kurtarıldığında veya kendini kurtardığında <span class=\\"Highlight1\\">Sakat</span> durum etkisinden etkilenirsin. Toplam <span class=\\"Highlight2\\">{0} saniye</span> sonunda, <i>Sık Dişini</i> seni otomatik olarak iyileştirerek yaralı durumdan sağlıklı duruma getirir.<br><br><i>Sık Dişini</i> sağlıklı olduğunda veya <i>Sık Dişini</i> başarılı bir şekilde etkinleşmeden can çekişme durumuna getirildiğinde devre dışı kalır. <span class=\\"Highlight1\\">Sakat</span> durum etkisini kaybedersin.<br>","name":"Sık Dişini","flavor":"\\"Hmmm, hayır.\\" -Steve Harrington","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"Epey yara bere aldın ama talih senden yana.<br><br>Her yaralandığında <i>Şansın Güldü</i> devreye girer. <i>Şansın Güldü</i> etkinken toplam <span class=\\"Highlight1\\">{0} saniyeliğine</span> kan izi ya da çizik bırakmazsın.<br><br><i>Şansın Güldü</i>, toplam süresi dolduğunda mücadele boyunca bir daha etkinleşmez.<br>","name":"Şansın Güldü","flavor":"\\"Bunlar beni yenmeye yetmez. Yanına bile yaklaşamaz.\\" -Yui Kimura ","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"Avantaj sağlamak için eline ne geçirirsen kullanarak kendini koruyorsun.<br><br>Düşmüş bir paleti kaldırmak için, yanında dururken <i>Etkin Yetenek butonuna</i> <span class=\\"Highlight1\\">{0} saniye</span> boyunca bas.<br><br><i>Mümkün Mertebe</i> sadece her <span class=\\"Highlight2\\">{1} saniyede</span> bir tetiklenebilir.<br>","name":"Her Şey Mübah","flavor":"\\"Sana elime geçirdiğim her şeyle saldıracağım. Sonra yine aynı şeyi yapacağım.\\" -Yui Kimura ","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"Birinin başı dertteyse gözün başka bir şey görmez oluyor ve ona her zorluğun üstesinden gelmesi için ilham veriyorsun.<br><br>Taşınmakta olan bir Kurban\'ın <span class=\\"Highlight1\\">{0} metre</span> yakınında olduğun zaman <span class=\\"Highlight2\\">Sürat</span> durum etkisini kazanırsın ve hareket hızın <span class=\\"Highlight3\\">%{1}</span> artar. Taşınan Kurban\'ın çırpınma hızı ise <span class=\\"Highlight4\\">%{2}</span> artar.<br>","name":"Şaha Kalk","flavor":"\\"Gel, birlikte bu işin içinden çıkacağız.\\" -Yui Kimura ","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"Bazen en iyisinin sessiz bir yaklaşım izlemek olduğunu öğrendin. <br><br>Kancadan indirildiğinde ya da kaçtığında, <span class=\\"Highlight1\\">{0} saniyeliğine</span> <i>Kayıtlara Geçmesin</i> etkinleşir. <br><br><i>Kayıtlara Geçmesin</i> etkinken haren Katil\'e görünmez ve yaralanmaların neden olduğu sızlanma naraları <span class=\\"Highlight2\\">%{1}</span> azalır.<br>","name":"Kayıtlara Geçmesin","flavor":"\\"Emin olun ki araştırmalarımı hem ayrıntılı hem de kendimi hiç belli etmeden yaparım.\\" -Zarina Kassir","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"İnsanların en çok ne ses çıkarıyorsa ona baktığını fark ettin.<br><br>Bir jeneratörü en az <span class=\\"Highlight1\\">{0} saniye</span> tamir edersen, jeneratör senin için sarı bir hare ile işaretlenir. Jeneratör sen onu tamamen tamir edene, başka bir jeneratör tamir edene ya da bir dolaba girene kadar işaretli kalır. <br><br>Dolaba girmek işaretli jeneratörün konumunda, sadece Katil\'in fark edeceği bir yüksek ses göstergesi tetiklemesine neden olur. <br><li><i>Yem</i> her <span class=\\"Highlight2\\">{1} saniyede</span> bir kez tetiklenebilir.</li><br>","name":"Yem","flavor":"\\"Haber kaynakları olayların can sıkıcı ve karmaşık yönlerini yayınlamıyor ama asıl gerçek onlar.\\" -Zarina Kassir","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"Başka insanları kurtarmak için yaralanma ve ölme riskini göze alırsın.<br><br><i>Halk İçin</i> sadece canın tamken etkinleşir.<br><br>Bir Kurban\'ı Medikal Kit olmadan iyileştirirken <i>Etkin Yetenek butonuna</i> basarak onu anında can çekişme durumundan yaralı duruma ya da yaralı durumdan sağlıklı duruma getirirsin.<br><br>Yaralanırsın ve <span class=\\"Highlight1\\">{0} saniyeliğine</span> <b>Sakat</b> durum etkisine girersin.<br><br>Saplantı sen olursun.<br><br>Bu avantajı kuşanmak mücadelenin başlangıcında Katil\'in Saplantısı olma ihtimalini <b>azaltır</b>.<br>","name":"Halk İçin","flavor":"\\"Kendi hikâyemizi yazabilir, asıl sonuna biz karar verebiliriz.\\" -Zarina Kassir","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"Muazzam zorluklara göğüs gerdin; artık çok daha güçlüsün.<br><br>Canını iyileştirdikten veya can çekişme durumunu atlattıktan sonra <span class=\\"Highlight1\\">{0} saniyeliğine</span> <b>Dayanıklılık</b> durum etkisi kazanırsın.<br>Efsun etkisi altındayken can çekişme durumunu tamamen atlatabilirsin.<br><br>Bu etki yalnızca her <span class=\\"Highlight2\\">30 saniyede</span> bir tetiklenir.","name":"Ruh Muhafızı","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"Sanki gizli saklı bir yönün uyanmış gibi. Yardım için kendi varlığının ötesine uzanabilirmişsin gibi.<br><br>Sen veya Saplantı hasar aldığında birbirinizin haresini görebilirsiniz.<br><br>Saplantı\'yı iyileştirdikten veya Saplantı tarafından iyileştirildikten sonra ikiniz de birbirinizden <span class=\\"Highlight2\\">16 m</span> uzaklaşana dek <span class=\\"Highlight1\\">%{1}</span> <b>Sürat</b> durum etkisi kazanırsınız.<br><br>Saplantı haline gelme ihtimalini azaltır.<br><br>Saplantı olursan bu avantaj devre dışı kalır.","name":"Kan Yemini","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"Kötü niyetli güçlerce kovalanmaya alışık olduğun için bu durumu lehine kullanmaya başladın.<br><br><i>Bastırılmış Direniş</i>, toplamda <span class=\\"Highlight1\\">{0} saniye</span> boyunca jeneratör tamir edildiğinde etkinleşir.<br><br>Bu avantaj etkinken jeneratör tamir ediyorsan <i>Etkin Yetenek butonuna</i> basarak Mahluk\'u çağırıp jeneratörü <span class=\\"Highlight2\\">{1} saniyeliğine</span> engelleyebilirsin. Avantaj devre dışı kalır.<br><br>Etki altındaki jeneratörler tüm Kurbanlara beyaz hareli olarak görünür.","name":"Bastırılmış Direniş ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"Tamamen kaçmaya odaklanmış durumdasın.<br><br><span class=\\"Highlight1\\">{0} metre</span> içindeki jeneratörlerin haresini görürsün.<br><br>Bir jeneratör tamamen tamir edildiğinde <i>Vizyoner</i> <span class=\\"Highlight2\\">{1} saniye</span> devre dışı kalır.","name":"Vizyoner","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"En zorlu anlarda bile başarısızlığı kabul etmiyorsun.<br><br>Yaralı, kancaya asılmış veya ölmekte olan her Kurban için iyileştirme ve kancadan kurtarma hızlarını <span class=\\"Highlight1\\">%{0}</span> arttırır.<br>","name":"Son Çare","flavor":"\\"Yıkım araçlarıyla gelirlerse daha sağlam duvarlar inşa et.\\" -Felix Richter","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"Elindeki araçlardan en iyi şekilde faydalanmayı biliyorsun.<br><br>Her mücadelede bir defa, kullanımı biten bir eşyanın yükleri <span class=\\"Highlight2\\">{1} saniye</span> sonra <span class=\\"Highlight1\\">%{0}</span> yenilenir.<br>","name":"Kalıcı Yapı","flavor":"\\"Mimari, medeniyetlerin ruhudur.\\" -Felix Richter","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"Birçoklarının fark etmeyeceği şeyler senin gözünden kaçmıyor.<br><br>Mücadeleye <span class=\\"Highlight1\\">{0} nişan</span> ile başlarsın. Bir sandık zaten açılmışsa, bir nişan harcayıp sandığı karıştırarak eşya ararsın. Karıştırma her sandık için sadece bir kere gerçekleştirilebilir.<br><br>Sandıkları karıştırma hızın <span class=\\"Highlight2\\">%{1}</span> daha fazladır.","name":"Değerleme","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"Bu maceracı yaşam tarzında bazen kurnaz bir şekilde yanlış yönlendirmeler yapman gerekir.<br><br>Koşarken bir dolapla etkileşime geçmek, bulunduğun yerde <span class=\\"Highlight1\\">{0} saniyeliğine</span> yüksek ses bildirimi tetikleyecek ve herhangi bir çizik bırakmayacak.<br><br>Bu avantaj etkinken koşarken dolaplara giremeyeceksin.<br><br><i>Aldatmaca</i>, sadece <span class=\\"Highlight2\\">{1} saniyede</span> bir tetiklenebilecek.","name":"Aldatmaca","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"Pes etmek nedir bilmiyorsun, şimdi öğrenmeye de niyetin yok.<br><br>Katil tarafından taşınırken <span class=\\"Highlight1\\">%{0}</span>\'a ulaşacak kadar çırpınarak <i>Güç Mücadelesi</i>\'ni etkinleştirirsin. <i>Güç Mücadelesi</i> etkinken yakınlardaki bir paleti yere düşürerek Katil\'i sersemletebilirsin.<br>","name":"Güç Mücadelesi","flavor":"\\"Beni korumaları için başkalarına bir kere güvendim ve her şeyimi kaybettim. Bir daha asla.\\" -Elodie Rakoto","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"Bazen ilerlemek için başkalarının feda edilmesi gerekir.<br><br>Bir başka Kurban kancaya asıldığında <span class=\\"Highlight1\\">{0} nişan</span> kazanırsın. Bir jeneratörde çok başarılı bir Beceri Denemesi gerçekleştirdiğinde bütün nişanlarını tüketirsin. Tüketilen her nişan, jeneratör tamir ederken Çok Başarılı Beceri Denemeleri için ilave <span class=\\"Highlight2\\">%{1}</span> ilerleme sağlar.<br>","name":"Kısa Yol","flavor":"\\"Önce zayıflar kurban edilir. Doğa da iş hayatı da böyledir... Çoğu insan bu gerçeği kabullenemez.\\" -Yun-Jin","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"Bir rakibin hata yaptığında fırsatı değerlendirirsin.<br><br>Katil\'i bir paletle sersemlettikten sonra <span class=\\"Highlight2\\">{1} saniyeliğine</span> normal koşma hızından <span class=\\"Highlight1\\">%{0}</span> daha hızlı bir depara kalkarsın.<br><span class=\\"Highlight3\\">{2} saniyeliğine</span> <b>Bitkin</b> durum etkisine sebep olur.<br>Bu avantaj, <b>Bitkin</b> durum etkisindeyken kullanılamaz.<br>","name":"Hit Parça","flavor":"\\"Takım elbise giyen psikopatlarla çok uğraştım. Sen sadece onlardan daha çirkinsin ve daha kötü giyiniyorsun.\\" -Yun-Jin","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"Hayat acımasızdır. Bazen en iyi yol kendi çıkarlarını gözetmektir.<br><br><span class=\\"Highlight1\\">{0} metre</span> yakınındaki bir Kurban, normal veya özel bir saldırıyla darbe aldığında <i>Kendi Bacağından</i> etkinleşir.<br>Çiziklerin, kan gölcüklerin ve sızlanma naraların <span class=\\"Highlight2\\">{1} saniyeliğine</span> gizlenir.<br>","name":"Kendi Bacağından","flavor":"\\"Bizim sektörden öğrendiğim şeylerden biri şu: Ortada sallanan bir balta varsa, başını sakın kaldırma.\\" -Yun-Jin","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"Kendinden daha güçlü düşmanlarla nasıl başa çıkılacağını biliyorsun. İlk olarak düşmanı bulup desteğini yok etmen gerekiyor.<br><br>Totemleri <b>%20</b> daha hızlı temizlersin. Bir totemi temizledikten sonra sana en uzak olan totemin haresi <span class=\\"Highlight1\\">{0} saniyeliğine</span> görünür olur ve mücadelenin geri kalanı boyunca her totem temizlediğinde birikecek şekilde ilave <span class=\\"Highlight2\\">%{1}</span> totem temizleme hızı kazanırsın.<br><br><span class= \\"FlavorText\\">\\"Biraz dedektiflik yapmayı severim.\\" —Jill Valentine</span>","name":"Karşı Güç","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"Neredeyse imkânsıza karşı geldin... ve bunu tekrar yapacaksın.<br><br>Kancadan kurtarıldığında veya kendin kurtulduğunda anında <span class=\\"Highlight1\\">%{0}</span> iyileştirme alırsın.<br><br><span class= \\"FlavorText\\">\\"Şimdi sıra bende.\\" —Jill Valentine</span>","name":"Diriliş","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"Doğrudan çatışma seçeneğin olmasa bile karşılık vermenin bir yolunu bulabiliyorsun.<br><br><i>Tuzak Mayın</i>, jeneratörler üzerinde toplamda <span class=\\"Highlight1\\">%{0}</span> tamir ilerlemesi kaydedildiğinde etkinleşir.<br>Bir jeneratörü en az <span class=\\"Highlight2\\">{1} saniye</span> boyunca tamir ettikten sonra <i>Yetenek butonuna</i> basarak <span class=\\"Highlight3\\">{2} saniye</span> etkin kalan bir tuzak kur. Etkilenen jeneratörler sarı bir hareyle tüm Kurbanlara görünür. Bir jeneratörde aynı anda yalnızca bir tuzak etkin olabilir.<br><li>Katil, tuzak kurulan bir jeneratöre hasar verdiğinde tuzak patlayarak Katil\'i sersemletir ve etraftaki herkesi kör eder. Ardından <i>Tuzak Mayın</i> devre dışı kalır.</li><br><br><span class= \\"FlavorText\\">\\"S.T.A.R.S.\'ı mı arıyordun? Göstereceğim sana S.T.A.R.S.\'ı!\\" -Jill Valentine</span>","name":"Tuzak Mayın","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"Senin de diğer insanlar gibi canın acıyor fakat onların bunu bilmesini istemiyorsun.<br><br>İyileşirken sızlanma naraları da dahil olmak üzere hiç ses çıkarmazsın. Başarısız iyileştirme beceri denemeleri ses bildirimi oluşturmaz ve iyileştirme yalnızca <span class=\\"Highlight1\\">%{0}</span> azalır.<br><br><span class= \\"FlavorText\\">\\"Bunu başarabilirim!\\" —Leon S. Kennedy</span>","name":"Sık Dişini","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"Çer çöpten işe yarar şeyler oluşturarak kaosun hüküm sürdüğü bir dünyaya uyum sağladın.<br><br><i>Ses Bombası</i>, herhangi bir jeneratörde <span class=\\"Highlight1\\">%{0}</span> ilerleme kaydettikten sonra etkinleşir.<br>Elin boşken bir dolaba gir ve Yetenek butonuna basarak bir ses bombası yap.<br><li>1 Yük.</li><li>Bomba, yüksek sesle ve kör edici bir ışık çıkararak patlar.</li><li>Ses bildirimi oluşturur.</li><li>Dikkat dağıtmak veya kör etmek için kullanılabilir.</li><br>Mücadeleden kaçarken ses bombasını orada bırakırsın.<br><br><span class= \\"FlavorText\\">\\"Çekil önümden!\\" -Leon S. Kennedy</span>","name":"Ses Bombası","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"İlerleme kaybeden hedeflere karşı bir duyarlılığın var.<br><br>Jeneratör tamir ederken <span class=\\"Highlight1\\">{0}</span> defa başarılı veya çok başarılı Beceri Denemesi gerçekleştirdiğinde <i>Acemilik Hevesi</i> etkinleşir ve mücadelenin sonuna kadar etkin kalır.<br>Etkinleştikten sonra, ilerleme kaybeden jeneratörlerin haresi sana görünür olur.<br><br><span class= \\"FlavorText\\">\\"Söz veriyorum çavuş, bu işi bitireceğim.\\" —Leon S. Kennedy</span>","name":"Acemilik Hevesi","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/tr/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/tr/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Müttefiklerinin yerini bulabilen ve verimliliklerini arttırabilen, gergin bir lider.<BR><BR>Kişisel avantajları <B>Bağ</B>, <B>Kendini Kanıtla</B> ve <B>Lider</B> sayesinde, diğer Kurbanlara yaklaşabilir ve hem onların hem de kendi eylemlerine bonuslar verebilir.","name":"Dwight Fairfield","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"Çoğu Katil\'den koşarak kaçabilen, enerjik bir atlet.<BR><BR>Kişisel avantajları <B>Hızlı ve Sessiz</B>, <B>Ani Depar</B> ve <B>Adrenalin</B> sayesinde, kovalamalardan kaçarken ve Katil\'le arasını açarken hep bir adım önde olur.","name":"Meg Thomas","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"Hayatta kalma şansını hem kendisi hem de takım arkadaşları için arttırabilen, çalışkan bir botanik uzmanı.<BR><BR>Kişisel avantajları <B>Empati</B>, <B>Bitkibilim</B> ve <B>Kişisel Bakım</B> sayesinde, yaralı Kurbanları fark edebilir, takım arkadaşlarını ve kendini çok daha etkili bir şekilde iyileştirebilir.","name":"Claudette Morel","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"Çoğu durumda kendine hâkim olabilen, yalnız bir hayatta kalma uzmanı.<BR><BR>Kişisel avantajları <B>Demir İrade</B>, <B>Sakin Ruh</B> ve <B>Sabotajcı</B> sayesinde, çevrede daha etkili şekilde hareket edebilir ve yaralansa bile hayatta kalabilir.","name":"Jake Park","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"Kaçmakta ve saklanmakta hiç zorlanmayan bir sokak sanatçısı.<BR><BR>Kişisel avantajları <B>Dört Ayak Üstüne</B>, <B>Arka Sokaklar</B> ve <B>Hayat Okulu</B> sayesinde hedefleri tamamlamak ve tehlikeden hızla sıyrılmakta ustadır.","name":"Nea Karlsson","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"Zorlu durumlarla başa çıkmaya alışkın, yaşlı bir asker.<BR><BR>Kişisel avantajları <B>Sona Kalan</B>, <B>Sayılı Gün</B> ve <B>Yıkılmaz</B> sayesinde, zorlu durumlarda çok daha sağlam bir duruş sergiler.","name":"William \\"Bill\\" Overbeck","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"Yüksek riskli hareketlerinin olumlu sonuçlarını gören, kaba bir kavgacı.<BR><BR>Kişisel avantajları <B>Bize Bir Şey Olmaz</B>, <B>Kum Torbası</B> ve <B>Takma Kafaya</B>; daha agresif, düşmanla yüzleşmeyi ödüllendiren bir oynanış tarzını ödüllendirir ama onu tehlikeyle daha sık karşı karşıya bırakır.","name":"David King","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"Her türlü zorlukla mücadele etmeye hazır, kararlı bir Kurban.<BR><BR>Kişisel avantajları <B>Bir Başına</B>, <B>Derin Saplantı</B> ve <B>Can Havli</B> sayesinde, açığa çıkma tehlikesi altında olsa da çok güçlü hayatta kalma yeteneklerine sahiptir.","name":"Laurie Strode","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"Takımının hayatta kalma ihtimalini arttıran, şanslı bir kumarbaz.<BR><BR>Kişisel avantajları <B>Güçlü El</B>, <B>Yüksek Bahis</B> ve <B>Son Koz</B> sayesinde, tüm Kurbanların Şansını arttırır ve sandıkları açmalarına yardım eder.","name":"Ace Visconti","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"Zor durumlara stratejisiyle çabucak uyum sağlayabilen, hedef odaklı bir rekabet tutkunu.<BR><BR>Kişisel avantajları <B>Teknisyen</B>, <B>Kıvrak</B> ve <B>Pür Dikkat</B>; jeneratörleri tamir etmesine ve Katil\'in yerini belirlemesine yardım eder.","name":"Feng Min","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"Takımının hayatta kalma yeteneğini ve toparlanma hızını arttıran, cesur bir rüya yolcusu.<BR><BR>Kişisel avantajları <B>Aç Gözünü!</B>, <B>Eczacı</B> ve <B>Gece Nöbeti</B> sayesinde, Kurbanların Çıkış Kapılarını bulmalarına ve daha kolay iyileşmelerine yardım eder.","name":"Quentin Smith","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"Hedefleri daha hızlı bulabilen ve tamamlayabilen takıntılı bir dedektif.<BR><BR>Kişisel avantajları <B>Azim</B>, <B>Dedektif Sezgisi</B> ve <B>Kedi-Fare</B> sayesinde görevine daha iyi odaklanabilir ve hızla iyileşebilir.","name":"Dedektif Tapp","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"Çevresindeki her şeyi en iyi şekilde değerlendirebilen, umut dolu bir şarkı yazarı. <br><br>Kişisel avantajları <b>Dans Edelim</b>, <b>Fırsat Penceresi</b> ve <b>Yılmak Yok</b> sayesinde, en zorlu durumlardan bile kaçabilecek sağduyu ve cesareti bulabilir.","name":"Kate Denson","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"Yeni durumlara hızla adapte olup uygun stratejileri geliştirebilen becerikli bir öğretmen. <br><br>Kişisel avantajları <b>Şaşırtmaca</b>, <b>Kurtuluş</b> ve <b>Öz Öğrenim</b> sayesinde, Katil\'in dikkatini dağıtabilir, en çaresiz durumlarda bile hayatta kalabilir ve mücadele devam ettikçe yeteneklerini geliştirebilir.","name":"Adam Francis","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"Şartlar imkânsızlığa işaret ettiğinde bile sarsılmayan, sessiz bir sanatçı.<br><br>Kişisel avantajları <b>Kırıp Geçir</b>, <b>Arayı Açmayalım</b> ve <b>Saptırma</b> sayesinde varlığını Katil\'den saklamasına yardım eden, keskin bir gözlem yeteneğine sahiptir.","name":"Jeff Johansen","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"Tüm engellere rağmen mücadeleye doğrudan atılan, etkileyici bir ünlü.<br><br>Kişisel avantajları <b>Dayanışma</b>, <b>Özgüvenli</b> ve <b>Bodoslama</b> sayesinde, başkalarına da kendine de yardım edebilecek, tehlikeli durumlardan kaçabilecek esnek yeteneklere sahiptir.","name":"Jane Romero","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"Ukala ve dik başlı, \\"yalnız bir kurt.\\" Hayatta kalmak için yaratılmış bir adam.<br><br>Kişisel avantajları <b>Ben Kaçar</b>, <b>Ayaklan</b> ve <b>Yüreklilik</b> sayesinde acıya ve zorluğa ek dayanıklılık kazanır, ayrıca arkadaşlarını zor durumlardan kurtarabilir. ","name":"Ashley J. Williams","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"Kritik gözlemler yapabilen ve diğerlerinin kaçırabileceği ayrıntıları yakalayabilen, hevesli bir gazeteci.<br><br>Kişisel avantajları <b>Birlikten Kuvvet Doğar</b>, <b>Kafayı Bozmuş</b> ve <b>İçindeki Güç</b> beklenmedik zorlukların üstesinden gelmesi için gerekli olan bilgileri ve cesareti ona veriyor.","name":"Nancy Wheeler","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"Diğer Kurbanları koruyabilen ve onlara yardım edebilen, bunları yaparken de kendine özgü zekâsını ve alaycılığını asla kaybetmeyen eski bir sporcu.<br><br>Kişisel avantajları <b>Bakıcı</b>, <b>Yoldaşlık</b> ve <b>Sık Dişini</b> dikkat dağıtmasına, acıya dayanmasına ve çatışmaya geri dönmesine yardımcı oluyor.","name":"Steve Harrington","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"\\"Tecrübeli bir sokak yarışçısı. Zorlu durumlarda hem kendine hem diğer Kurbanlara avantaj sağlayabiliyor.<br><br>Kişisel avantajları <b>Şansın Güldü</b>, <b>Mümkün Mertebe</b> ve <b>Sökün Et</b> sayesinde kan izlerini gizleyebiliyor, devrilen paletleri kaldırabiliyor ve zor durumdaki Kurbanlara yardımcı olabiliyor.","name":"Yui Kimura","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"Kurnazlığı sayesinde gizlenip diğer Kurbanlara yardımcı olabilen gözü pek bir belgeselci.<br><br>Kişisel avantajları <b>Kayıtlara Geçmesin</b>, <b>Yem</b> ve <b>Halk için</b>, tehlikeyle yüz yüze geldiğinde saklı kalmasına, dikkat dağıtmasına ve kendi güvenliğini hiçe sayarak diğerlerini çabucak iyileştirmesine yardımcı olur.","name":"Zarina Kassir","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"Dehşetin ne olduğunu adı gibi bilen genç Cheryl Mason, hem kendini hem de takımını cesaretlendiriyor.<br><br>Kişisel avantajları <b>Ruh Muhafızı</b>, <b>Kan Yemini</b> ve <b>Bastırılmış Direniş</b> sayesinde muazzam zorlukların üstesinden geliyor, takım arkadaşlarıyla iletişim halinde kalıyor ve hedefleri planlıyor.","name":"Cheryl Mason","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"Bitmek bilmeyen kararlılığını kullanarak bir plan oluşturan ve diğer Kurbanlara yardımcı olan vizyoner bir mimar.<br><br>Kişisel avantajları <b>Vizyoner</b>, <b>Son Çare</b> ve <b>Kalıcı Yapı</b> jeneratörlerin yerlerini belirlemesini, Kurbanları kurtarmasını ve araçları en iyi şekilde kullanmasını sağlıyor.","name":"Felix Richter","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"Bir okültizm araştırmacısı olarak, hayatta kalmak için büyük bir inatçılık gösterebilir ve kurnaz hilelere başvurabilir.<br><br>Kişisel avantajları <b>Değerleme</b>, <b>Aldatmaca</b> ve <b>Güç Mücadelesi</b> Katillerden kaçmak için bir B planına sahip olmasını ve nesnelerle yeni şekillerde etkileşime geçmesini sağlar. ","name":"Élodie Rakoto","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"Zorlu zamanlarda bile amaçlarına ulaşabilen, çıkarlarına fazlasıyla düşkün bir prodüktör.<br><br>Kişisel avantajları <b>Kısa Yol</b>, <b>Hit Parça</b> ve <b>Kendi Bacağından</b> sayesinde diğerleri zarar görürken yeteneklerini geliştirebiliyor ve peşine düşenlerden hızlıca kurtulabiliyor. ","name":"Yun-Jin Lee","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"Jill Valentine, birçok organik biyolojik silaha başarıyla karşı gelen S.T.A.R.S. ekibinin kurucularından biri.<br><br>Kişisel avantajları <b>Karşı Güç</b>, <b>Diriliş</b> ve <b>Tuzak Mayın</b> doğrudan olmasa da Katil\'e karşılık vermesini sağlıyor ve takım arkadaşlarına güçlü bir destek sunuyor. ","name":"Jill Valentine","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"Leon S. Kennedy, Raccoon City\'deki felaket sırasında elinden gelenin çok daha fazlasını yapmış bir çaylak polis memuru.<br><br>Kişisel avantajları <b>Sık Dişini</b>, <b>Ses Bombası</b> ve <b>Acemilik Hevesi</b> ağrıyı yok saymasını, Katil\'i sersemletmesini ve kaybedilen hedefleri takip etmesini sağlıyor. ","name":"Leon S. Kennedy","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./tr/index.ts ***!
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
/* harmony import */ var _src_lib_locales_tr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/tr */ "./src/lib/locales/tr.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_tr__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map