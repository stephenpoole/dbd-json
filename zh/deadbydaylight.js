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

/***/ "./src/lib/locales/zh.ts":
/*!*******************************!*\
  !*** ./src/lib/locales/zh.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_compiled_locales_zh_items_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.compiled/locales/zh/items.json */ "./src/data.compiled/locales/zh/items.json");
/* harmony import */ var _data_compiled_locales_zh_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.compiled/locales/zh/killerAddons.json */ "./src/data.compiled/locales/zh/killerAddons.json");
/* harmony import */ var _data_compiled_locales_zh_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.compiled/locales/zh/killerOfferings.json */ "./src/data.compiled/locales/zh/killerOfferings.json");
/* harmony import */ var _data_compiled_locales_zh_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.compiled/locales/zh/killerPerks.json */ "./src/data.compiled/locales/zh/killerPerks.json");
/* harmony import */ var _data_compiled_locales_zh_killers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.compiled/locales/zh/killers.json */ "./src/data.compiled/locales/zh/killers.json");
/* harmony import */ var _data_compiled_locales_zh_powers_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.compiled/locales/zh/powers.json */ "./src/data.compiled/locales/zh/powers.json");
/* harmony import */ var _data_compiled_locales_zh_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.compiled/locales/zh/sharedOfferings.json */ "./src/data.compiled/locales/zh/sharedOfferings.json");
/* harmony import */ var _data_compiled_locales_zh_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.compiled/locales/zh/survivorAddons.json */ "./src/data.compiled/locales/zh/survivorAddons.json");
/* harmony import */ var _data_compiled_locales_zh_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.compiled/locales/zh/survivorOfferings.json */ "./src/data.compiled/locales/zh/survivorOfferings.json");
/* harmony import */ var _data_compiled_locales_zh_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.compiled/locales/zh/survivorPerks.json */ "./src/data.compiled/locales/zh/survivorPerks.json");
/* harmony import */ var _data_compiled_locales_zh_survivors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.compiled/locales/zh/survivors.json */ "./src/data.compiled/locales/zh/survivors.json");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enum */ "./src/lib/enum.ts");












var language = _enum__WEBPACK_IMPORTED_MODULE_11__.Language.Chinese;
var data = {
  items: _data_compiled_locales_zh_items_json__WEBPACK_IMPORTED_MODULE_0__,
  killerAddons: _data_compiled_locales_zh_killerAddons_json__WEBPACK_IMPORTED_MODULE_1__,
  killerOfferings: _data_compiled_locales_zh_killerOfferings_json__WEBPACK_IMPORTED_MODULE_2__,
  killerPerks: _data_compiled_locales_zh_killerPerks_json__WEBPACK_IMPORTED_MODULE_3__,
  killers: _data_compiled_locales_zh_killers_json__WEBPACK_IMPORTED_MODULE_4__,
  powers: _data_compiled_locales_zh_powers_json__WEBPACK_IMPORTED_MODULE_5__,
  sharedOfferings: _data_compiled_locales_zh_sharedOfferings_json__WEBPACK_IMPORTED_MODULE_6__,
  survivorAddons: _data_compiled_locales_zh_survivorAddons_json__WEBPACK_IMPORTED_MODULE_7__,
  survivorOfferings: _data_compiled_locales_zh_survivorOfferings_json__WEBPACK_IMPORTED_MODULE_8__,
  survivorPerks: _data_compiled_locales_zh_survivorPerks_json__WEBPACK_IMPORTED_MODULE_9__,
  survivors: _data_compiled_locales_zh_survivors_json__WEBPACK_IMPORTED_MODULE_10__,
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

/***/ "./src/data.compiled/locales/zh/items.json":
/*!*************************************************!*\
  !*** ./src/data.compiled/locales/zh/items.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"一串用纸张包裹着的小型燃爆物。爆炸后会发出巨响并产生强光。有干扰作用，可用作致盲道具或是纯粹用来庆祝。<br><li><b>1 次</b></li>","name":"中国鞭炮","id":1,"index":"CHINESE_FIRECRACKER","type":6,"rarity":5,"image":"iconItems_chineseFirecracker"},{"description":"一个标准的手电筒，可以在黑暗里为你的旅程提供照明。<br><li>使用时间为<b>8 秒</b>。</li>","name":"手电筒","flavor":"“这个手电筒电池的大部分电量基本被其前任所有者浪费殆尽。”","id":2,"index":"FLASHLIGHT","type":1,"rarity":1,"image":"iconItems_flashlight"},{"description":"安装了特殊镜头的手电筒，可以发出带有幽灵色彩的橘黄色光束。<br><li><b>8秒</b>使用时间。</li><li><b>大幅提升</b>你生活中友好的鬼。</li>","name":"鬼火手电筒","flavor":"“不给糖就捣蛋！”","id":3,"index":"WILL_O_WISP","type":1,"rarity":1,"image":"iconItems_flashlightHalloween"},{"description":"轻盈方便的手电筒，握在手上也十分稳固。高效的科技让手电筒不仅减低能耗，同时还可以产生强大的照明效果。<br><li>使用时间为<b>8秒</b>。</li><li><b>小幅降低</b>手电筒电池消耗。</li><li><b>小幅增加</b>手电筒的精准度。</li>","name":"运动型手电筒","id":4,"index":"SPORT_FLASHLIGHT","type":1,"rarity":2,"image":"iconItems_flashlightSport"},{"description":"坚固耐用的手电筒，因为装载了很多电池，所以很重。<br><li>可使用<b>12 秒</b>。</li><li><b>小幅降低</b>手电筒的精准度。</li><li><b>中幅增加</b>手电筒的光照亮度。</li><li><b>中幅增加</b>致盲效果的持续时间。</li>","name":"强力手电筒","id":5,"index":"UTILITY_FLASHLIGHT","type":1,"rarity":3,"image":"iconItems_flashlightUtility"},{"description":"钥匙头和钥匙柄，激荡着强大的魔力。破损钥匙的力量无法自己启动。钥匙扣环上可以附加各种物品，以使破损钥匙的力量具备各种效果。<br><li>使用时间为<b>10秒</b>。</li>","name":"破损钥匙","id":6,"index":"BROKEN_KEY","type":2,"rarity":2,"image":"iconItems_brokenKey"},{"description":"弯折灰暗的钥匙，曾蕴含着强大的力量。灰暗钥匙的力量无法自己启动。钥匙扣环上可以附加各种物品，以使灰暗钥匙的力量具备各种效果。<br><li>使用时间为<b>5秒</b>。</li><li>可用来开地道，但会被消耗掉。</li>","name":"灰暗钥匙","id":7,"index":"DULL_KEY","type":2,"rarity":3,"image":"iconItems_dullKey"},{"description":"一把污浊而弯曲的钥匙，蕴含着万能的力量。钥匙的力量无法自己启动。钥匙扣环上可以附加各种物品，以使万能钥匙的力量具备各种效果。<br><li>使用时间为<b>30秒</b>。</li><li>可用来开地道。</li>","name":"万能钥匙","id":8,"index":"SKELETON_KEY","type":2,"rarity":4,"image":"iconItems_key"},{"description":"一块老旧的动物皮卷轴，由一根无色的皮绳系着，可引导地图解锁气场解读能力的巨大潜力，而读图时会导致地图缓缓燃烧。只要地图还有可用次数，你所见过的发电机气场位置就会显示给你。<br><li>使用时间为<b>20秒</b>。</li><li>进入游戏时，会直接解锁<b>1个</b>发电机的气场。</li><li>解锁<b>8米</b>范围内追踪目标的能力。</li>","name":"地图","id":9,"index":"MAP","type":3,"rarity":2,"image":"iconItems_map"},{"description":"一张用诡异的新鲜皮肤制作而成的人皮地图，边缘的血迹尚未干涸。由多根五颜六色的绳索系封住。拿起并引导地图，可解锁气场解读能力的巨大潜力，但也会导致地图缓缓燃烧。只要地图还有可用次数，你所遇到过的物品的气场位置就会显示给你。<br><li>使用时间为<b>20秒</b>。</li><li>进入游戏时，会直接解锁<b>3个物品</b>的气场。</li><li>解锁<b>8米</b>范围内追踪目标的能力。</li><li>解锁<b>8米</b>范围内追踪地道的能力。</li><li>解锁<b>8米</b>范围内追踪<b>杀手物品</b>的能力。</li><li>解锁<b>8米</b>范围内追踪<b>出口大门</b>的能力。</li>","name":"彩虹地图","flavor":" “我对此无比沮丧，面对如此凶险的梦魇，所有无法言传的知识，耗尽心血的努力，都显得毫无作用。”——维克多的日记","id":10,"index":"RAINBOW_MAP","type":3,"rarity":4,"image":"iconItems_rainbowMap"},{"description":"一个基本的急救箱，即使在缺医少药的紧急情况下，也能挽救生命。<br><li>耐久度为<b>16</b>。</li><li><b>中幅提高</b>你治疗他人的速度。</li><li>解锁<b>自我疗愈</b>动作。</li>","name":"野营急救箱","flavor":"“凑合着包扎一下吧。”","id":11,"index":"CAMPING_AID_KIT","type":4,"rarity":0,"image":"iconItems_rundownAidKit"},{"description":"贴着磷光万圣节印花的塑料便当盒，里面塞满了医疗用品。<br><li>耐久度为<b>24</b>。</li><li><b>大幅提高</b>你治疗他人的速度。</li><li>解锁自我疗愈动作。</li><li>大幅增加<b>你的嘲讽度以及上钩几率</b>。</li>","name":"万圣前夕便当盒","flavor":"“安全第一！但确保你在要糖果或捣乱的时候是人群中最耀眼的那一个。”","id":12,"index":"ALL_HALLOWS_EVE_LUNCHBOX","type":4,"rarity":5,"image":"iconItems_medkitHalloween"},{"description":"一个标准的急救箱，其中配备了所有必须的医疗装备，可以治疗普通和比较严重的伤口。<br><li>耐久度为<b>24</b>。</li><li><b>大幅增加</b>你治疗他人的速度。</li><li>解锁自我疗愈动作。</li>","name":"急救箱","id":13,"index":"FIRST_AID_KIT","type":4,"rarity":1,"image":"iconItems_firstAidKit"},{"description":"一个坚固而齐全的医药箱，配备了顶级的急救用品。<br><li><b>耐久度为16</b>。</li><li><b>巨幅提高</b>你治疗他人的速度。</li><li><b>巨幅提高</b>你治疗自己的速度。</li><li>解锁<b>自我疗愈</b>动作。</li>","name":"急救医疗箱","flavor":"“基本上每一种伤病都有治疗方案……唯独这个不行。”","id":14,"index":"EMERGENCY_MED_KIT","type":4,"rarity":2,"image":"iconItems_medkit"},{"description":"一个大金属盒子，里面包含了医疗补给品，旨在为偏远不毛之地的伤者提供紧急医疗救护。<br><li>耐久度为<b>32</b>。</li><li><b>巨幅提高</b>你治疗他人的速度。</li><li><b>中幅增大</b>技能检验的成功区域。</li><li><b>中幅增大</b>技能检验的完美区域。</li><li>解锁<b>自我疗愈</b>动作。</li>","name":"突击队医药箱","flavor":"“盒子背后贴着镌刻的小标签： VK.ID-3994723。”","id":15,"index":"RANGER_MED_KIT","type":4,"rarity":3,"image":"iconItems_rangersAidKit"},{"description":"金属盒子，里面有些随时都可能坏掉的折旧工具。即使没有接受过培训，也可以使用这个工具箱来修理或者破坏各种不同的机械组件。<br><li><b>耐久度为16</b>。</li><li><b>中幅增加</b>修理速度。</li><li><b>小幅降低</b>技能检验的成功区域。</li><li>解锁<b>破坏</b>功能。</li>","name":"破旧工具箱","flavor":"“你管这堆废铜烂铁叫‘工具’……你当真吗？”","id":16,"index":"WORN_OUT_TOOLS","type":5,"rarity":0,"image":"iconItems_toolboxWornOut"},{"description":"装有基础工具的金属盒子。即使没有接受过培训，也可以使用这个工具箱来修理或者破坏各种不同的机械零件。<br><li><b>耐久度为20</b>。</li><li><b>中幅增加</b>修理速度。</li><li>解锁<b>破坏</b>功能。</li><li><b>小幅增加</b>破坏速度。</li>","name":"工具箱","flavor":"“不清楚这些工具来自何处，到底是由我们中的某位带进来的，还是根本就是恶魔的杀人工具？”","id":17,"index":"TOOLBOX","type":5,"rarity":1,"image":"iconItems_toolbox"},{"description":"金属盒子，里面包含了专业的机械工具。即使没有接受过培训，也可以使用此工具箱来修理或者破坏各种不同的机械零件。<br><li><b>耐久度为16</b>。</li><li><b>大幅增加</b>修理速度。</li><li>解锁<b>破坏</b>功能。</li><li><b>小幅降低</b>破坏速度。</li>","name":"机械工的工具箱","id":18,"index":"MECHANICS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxMechanics"},{"description":"金属盒子，里面包含了基础工具和额外的机械零件。即使没有接受过培训，也可以使用这个工具箱来修理或者破坏各种不同的机械零件。<br><li><b>耐久度为32</b>。</li><li><b>中幅增加</b>修理速度。</li><li>解锁<b>破坏</b>功能。</li>","name":"宽敞的工具箱","id":19,"index":"COMMODIOUS_TOOLBOX","type":5,"rarity":2,"image":"iconItems_toolboxCommodious"},{"description":"金属盒子，里面包含了专业的工程工具。即使是初学者，也可以使用这个工具箱里的大部分工具来快速修理或者破坏各种不同的机械零件。<br><li><b>耐久度为16</b>。</li><li><b>巨幅增加</b>修理速度。</li><li>解锁<b>破坏</b>功能。</li><li><b>中幅降低</b>破坏速度。</li>","name":"工程师的工具箱","flavor":"“我创造了无与伦比的工具，当它们从我身边被偷走时，我整个人都僵直站立在那里，这些只是迷雾之中的劣质复制品”——威戈的日记","id":20,"index":"ENGINEERS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxEngineers"},{"description":"一个金属盒子，里面主要装着各式各样的锯子和扳手以及其它工具。虽然这个工具箱里的工具主要都是用来搞破坏的，但是也可以用它们来修理各种各样的机械零件。<br><li><b>耐久度为24</b>。</li><li><b>小幅增加</b>修理速度。</li><li>解锁<b>破坏</b>功能。</li><li><b>大幅增加</b>破坏速度。</li>","name":"阿莱克斯的工具箱","flavor":"“大部分工具上面都印刻着‘阿莱克斯所有’。”","id":21,"index":"ALEXS_TOOLBOX","type":5,"rarity":3,"image":"iconItems_toolboxAlexs"},{"description":"高爆炸性的小型餐桌装饰。爆炸后会发出巨响并产生强光。有干扰作用，可用作致盲道具或是纯粹用来庆祝。<br><li><b>1 次</b></li>","name":"冬季派对启动器","id":22,"index":"WINTER_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_winterEventFirecracker"},{"description":"小型的爆发式餐桌装饰。会发出巨响与强光，还有满天飞舞的五彩纸片。可以当作闪光物用作干扰，或是一同庆祝三周年的道具。<br><li><b>仅能使用1次。</b></li>","name":"三周年派对启动器","flavor":"“周年快乐！欢迎各位一同庆祝我们的三周年！”<br>——《黎明杀机》团队","id":23,"index":"THIRD_YEAR_PARTY_STARTER","type":6,"rarity":5,"image":"iconItems_partyPopper"},{"description":"可以完全恢复幸存者生命值的节日医疗箱，使用后会爆出五彩纸屑。给你的惊喜！<br><li><b>24点耐久度</b>。</li><li><b>大幅提升</b>你治疗其他人的速度。</li><li>解锁<b>自我治愈</b>动作。</li>","name":"周年医疗箱","flavor":"“周年快乐！祝我们年年有今日！”<br>- 《黎明杀机》制作团队","id":24,"index":"ANNIVERSARY_MED_KIT","type":4,"rarity":5,"image":"iconItems_medkit_anniversary2020"},{"description":"此节庆手电筒在致盲杀手同时会喷出五彩纸屑。给你的惊喜！<br><li><b>8秒</b>使用时间。</li>","name":"周年手电筒","flavor":"“周年快乐！祝我们年年有今日！”<br>——《黎明杀机》团队","id":25,"index":"ANNIVERSARY_FLASHLIGHT","type":1,"rarity":5,"image":"iconItems_flashlight_anniversary2020"}]');

/***/ }),

/***/ "./src/data.compiled/locales/zh/killerAddons.json":
/*!********************************************************!*\
  !*** ./src/data.compiled/locales/zh/killerAddons.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"带衬垫的保护性皮手套。<br><li><b>小幅增加</b>捕兽夹的设置速度。</li>","name":"陷阱杀手的手套","id":1,"index":"TRAPPER_GLOVES","owner":"TRAPPER","rarity":0,"image":"iconAddon_trapperGloves"},{"description":"一个沉重的大弹簧圈，可大幅增加捕兽夹的稳固强度。<br><li><b>小幅增加</b>解除捕兽夹所需时间。</li>","name":"强力弹簧","id":2,"index":"STRONG_COIL_SPRING","owner":"TRAPPER","rarity":0,"image":"iconAddon_coilSpring"},{"description":"一整套捕兽夹替换装备，可以让传统的双弹簧圈系统升级为四弹簧圈系统，大幅增加捕兽夹的稳固强度。<br><li><b>中幅增加</b>解除捕兽夹所需时间。</li>","name":"四弹簧圈套装","id":9,"index":"FOUR_COIL_SPRING_KIT","owner":"TRAPPER","rarity":1,"image":"iconAddon_coilsKit4"},{"description":"木灰，用水烧开后可以用作染料给捕兽夹染色，增加其隐蔽性。<br><li>使捕兽夹的颜色<b>中幅变暗</b>。</li>","name":"洋苏木灰染料","id":8,"index":"LOGWOOD_DYE","owner":"TRAPPER","rarity":1,"image":"iconAddon_logwoodDye"},{"description":"带锯齿的夹齿替换品，当夹到猎物时会造成严重的伤口。<br><li>被捕兽夹捕获的逃生者直到被治好前都会受到<b>出血状态</b>影响。</li>","name":"锯齿夹","flavor":"“就像一头匍匐已久的猛兽，一旦闻到鲜血的味道便穷追不舍。”","id":3,"index":"SERRATED_JAWS","owner":"TRAPPER","rarity":0,"image":"iconAddon_serratedJaws"},{"description":"简单的工具，被设计用于安全快速的设置捕兽夹。<br><li><b>中幅增加</b>捕兽夹的设置速度。</li>","name":"捕兽夹设置器","id":4,"index":"TRAP_SETTERS","owner":"TRAPPER","rarity":1,"image":"iconAddon_tapSetters"},{"description":"鞣制皮腰挎包。容量大而且质地牢固，可用来装运猎杀装备。<br><li>进入游戏时携带<b>1个</b>额外的捕兽夹。</li><li>增加<b>2个</b>捕兽夹携带上限。</li>","name":"陷阱杀手的袋子","id":5,"index":"TRAPPER_BAG","owner":"TRAPPER","rarity":1,"image":"iconAddon_trapperBag"},{"description":"捕兽夹的夹齿上锈迹斑斑，让夹齿造成的伤口更难治愈。<br><li>被捕兽夹捕获的逃生者受到<b>重伤</b>状态影响。","name":"生锈夹齿","id":12,"index":"RUSTED_JAWS","owner":"TRAPPER","rarity":2,"image":"iconAddon_rustedJaws"},{"description":"当捕兽夹的主弹簧不可用的时候，副弹簧会发挥作用，保障捕兽夹能正常工作。<br><li><b>大幅增加</b>解除捕兽夹所需时间。</li>","name":"副弹簧","id":7,"index":"SECONDARY_COIL","owner":"TRAPPER","rarity":2,"image":"iconAddon_secondaryCoil"},{"description":"一种黑色哑光的粘稠物质，很像焦油。涂抹于捕兽夹上，可以极大增加其隐蔽程度。<br><li>使捕兽夹<b>大幅变暗</b>。</li>","name":"焦油瓶","id":10,"index":"TAR_BOTTLE","owner":"TRAPPER","rarity":2,"image":"iconAddon_tarBottle"},{"description":"一块可用来降低摩擦、加速机械零件运转的蜡块。<br><li><b>中幅降低</b>挣脱捕兽夹的成功率。</li>","name":"蜡块","id":11,"index":"WAX_BRICK","owner":"TRAPPER","rarity":2,"image":"iconAddon_waxBrick"},{"description":"一种清油，可以让操纵陷阱弹簧变得更棘手。<br><li><b>巨幅增加</b>解除捕兽夹所需时间。</li>","name":"油腻弹簧圈","id":13,"index":"OILY_COIL","owner":"TRAPPER","rarity":3,"image":"iconAddon_oilyCoil"},{"description":"一整套用来稳固捕兽夹的特殊工具，以保证其捕捉效果。<br><li><b>巨幅增加</b>捕兽夹设置速度。</li><li><b>大幅增加</b>解救和挣脱捕兽夹所需时间。</li><li><b>中幅减少</b>挣脱捕兽夹的成功率。</li>","name":"紧固工具","id":14,"index":"FASTENING_TOOLS","owner":"TRAPPER","rarity":3,"image":"iconAddon_fasteningTools"},{"description":"各种各样的皮缝制成的大袋子。<br><li>进入游戏携带<b>2个</b>额外的捕兽夹。</li><li>增加<b>2个</b>捕兽夹携带上限。</li>","name":"缝制皮袋","id":15,"index":"STITCHED_BAG","owner":"TRAPPER","rarity":3,"image":"iconAddon_stichedBag"},{"description":"一种又粘黏又滑腻的物质，这种可怕的液体会让操纵陷阱弹簧变得更危险。<br><li>当捕兽夹被一名<b>健康</b>的逃生者破坏或触发，血腥弹簧圈会发挥作用，使该逃生者进入<b>受伤状态</b>。</li><li><b>小幅增加</b>解除捕兽夹所需时间。</li>","name":"血腥弹簧圈","id":17,"index":"BLOODY_COIL","owner":"TRAPPER","rarity":4,"image":"iconAddon_bloodyCoil"},{"description":"被这块散发着诡异光芒的石头打磨过的夹子似乎拥有了生命。<br><li>每隔<b>30秒</b>，会有一个未被设置的捕兽夹自动原地设置。</li>","name":"荧虹打磨石","id":18,"index":"IRIDESCENT_STONE","owner":"TRAPPER","rarity":4,"image":"iconAddon_diamondStone"},{"description":"欧尔斯-奈克印记，用手指蘸煤灰画在钟体上的图案，象征着阴险狡诈。<br><li>幽灵在隐身状态下破坏板子或发电机时会<b>直接显形</b>。</li>","name":"“毒蛇” - 煤灰","id":50,"index":"THE_SERPENT_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheSerpent"},{"description":"古德博耶印记,用手指蘸煤灰画在钟体上的图案，象征着完美追踪。<br><li><b>大幅</b>增加血迹的显眼程度。</li>","name":"“猎犬” - 煤灰","id":51,"index":"THE_HOUND_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheHound"},{"description":"卡格维姆印记，用手指蘸煤灰画在钟体上的图案，象征着灵界。<br><li>显形后，幽灵的恐惧范围和红光将继续隐藏<b>6</b>秒。</li>","name":"“鬼” - 煤灰","id":52,"index":"THE_GHOST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheGhost"},{"description":"卡格福鲁印记,用手指蘸煤灰画在钟体上的图案，象征着恐惧幻境。<br><li>隐身状态下幽灵的恐惧范围<b>不再隐藏</b>。</li><li>追踪和突然袭击获得的血点量增加100%。</li>","name":"“野兽” - 煤灰","id":53,"index":"THE_BEAST_SOOT","owner":"WRAITH","rarity":0,"image":"iconAddon_sootTheBeast"},{"description":"用一块打磨精致的骨头所制成的钟锤。敲打丧钟所发出的回响和扭曲的声音令人困惑。<li>逃生者将无法判断丧钟声的<b>距离</b>和<b>方向</b>。</li>","name":"骨制钟锤","id":54,"index":"BONE_CLAPPER","owner":"WRAITH","rarity":1,"image":"iconAddon_boneClapper"},{"description":"克拉汀印记，用手指蘸泥土画在钟体上的图案，象征着步履如飞。<br><li><b>大幅缩短</b>幽灵隐身所需时间。</li>","name":"“瞬移” - 污泥","id":55,"index":"BLINK_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBlink"},{"description":"傲虎-翁尼印记，用鲜血画印在钟体上的图案，象征狂风暴雨。<li><b>中幅增加</b>幽灵在隐身状态下的移动速度。</li>","name":"“风暴” - 污泥","id":56,"index":"WINDSTORM_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudWindstorm"},{"description":"昆汀-塔克印记,用手指蘸泥土画在钟体上的图案，象征着对猎物的迅猛袭击。<br><li><b>小幅缩短</b>幽灵显形所需时间。</li>","name":"“迅捷捕猎” - 污泥","id":57,"index":"SWIFT_HUNT_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudSwiftHunt"},{"description":"拜克拉-卡格印记，用手指蘸泥土画在钟体上的图案，象征着残暴行径。<br><li><b>突然袭击</b>会剥夺被攻击逃生者的<b>气场解读能力</b>，持续<b>60秒</b>。</li>","name":"“盲战士”- 污泥","id":58,"index":"BLIND_WARRIOR_MUD","owner":"WRAITH","rarity":1,"image":"iconAddon_mudBaikraKaeug"},{"description":"傲虎-翁尼印记，用手指蘸白色墨汁画在钟体上的图案，象征着狂风暴雨。<li><b>大幅增加</b>幽灵在隐身状态下的移动速度。</li>","name":"“风暴” - 白","id":59,"index":"WINDSTORM_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteWindstorm"},{"description":"昆汀-塔克印记,用手指蘸白色墨汁画在钟体上的图案，象征着对猎物的迅猛袭击。<br><li><b>中幅缩短</b>幽灵显形所需时间。</li>","name":"“迅捷捕猎”- 白","id":60,"index":"SWIFT_HUNT_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteKuntinTakkho"},{"description":"用手指蘸白色墨汁画在钟身的欧姆尼-威吾弗印记象征着暗黑协同力量。<br><li><b>大幅减少</b>翻窗、开锁以及破坏板子、可破坏物或者发电机需要的时间。</li>","name":"“影舞” - 白","id":61,"index":"SHADOW_DANCE_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteShadowDance"},{"description":"克拉汀印记，用手指蘸白色墨汁画在钟体上的图案，象征着步履如飞。<br><li><b>巨幅缩短</b>幽灵隐身所需时间。</li>","name":"“瞬移” - 白","id":62,"index":"BLINK_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlink"},{"description":"拜克拉-卡格印记，用手指蘸白色墨汁画在钟体上的图案，象征着残暴行径。<br><li>突然袭击会施加<b>重伤状态</b>和<b>出血状态</b>，逃生者被完全治疗后状态解除。</li>","name":"“盲战士” - 白","id":63,"index":"BLIND_WARRIOR_WHITE","owner":"WRAITH","rarity":2,"image":"iconAddon_whiteBlindWarrior"},{"description":"傲虎-翁尼印记，用鲜血画印在钟体上的图案，象征狂风暴雨。<br><li><b>巨幅增加</b>幽灵在隐身状态下的移动速度。</li>","name":"“狂风暴雨”- 鲜血","id":64,"index":"WINDSTORM_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodWindstorm"},{"description":"昆汀-塔克印记, 用鲜血印画在钟顶的图案，象征着对猎物的迅猛袭击。<br><li><b>大幅缩短</b>幽灵显形所需时间。</li>","name":"“迅捷捕猎” - 鲜血","id":65,"index":"SWIFT_HUNT_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodSwiftHunt"},{"description":"用鲜血刻画在钟身的欧姆尼-威吾弗印记象征着暗黑协同力量。<br><li><b>巨幅减少</b>翻窗、开锁以及破坏板子、可破坏物或者发电机需要的时间。</li>","name":"“影舞” - 鲜血","id":66,"index":"SHADOW_DANCE_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodShadowDance"},{"description":"科拉-福拉拜印记，用鲜血印画在钟顶的图案，象征着恶灵的监视。<br><li>解锁气场阅读能力的潜能。当处于隐身状态时，距离你<b>12米</b>内的逃生者的气场会暴露给你。</li>","name":"“洞穿一切”- 鲜血","id":67,"index":"ALL_SEEING_BLOOD","owner":"WRAITH","rarity":3,"image":"iconAddon_bloodKraFabai"},{"description":"缠绕在钟锤上的绳子，散发出邪恶的气场，能够掩盖住钟声。<br><li>使钟声<b>完全消失</b>。</li>","name":"缠绕的钟绳","id":68,"index":"COXCOMBED_CLAPPER","owner":"WRAITH","rarity":4,"image":"iconAddon_coxcombedClapper"},{"description":"科拉-福拉拜印记，在钟顶各处发光的图案，象征恶灵正在监视着我们。<br><li>解锁强大的气场解读能力。在隐身状态时，<b>发电机的修理进度</b>会通过其<b>气场亮度的强弱</b>来表现。</li>","name":"“洞穿一切”- 灵魂","id":69,"index":"ALL_SEEING_SPIRIT","owner":"WRAITH","rarity":4,"image":"iconAddon_spiritAllSeeing"},{"description":"精心制作的离合器，可保持链条平稳运动。<br><br><li>电锯冲刺时<b>减少</b>碰撞区域。</li>","name":"重型离合器","id":100,"index":"HEAVY_CLUTCH","owner":"HILLBILLY","rarity":0,"image":"iconAddon_heavyClutch"},{"description":"一种限制引擎燃料吸收速率的机械装置，迫使电锯在稳定安全的速度下运作。<br><br><li>被电锯攻击命中的逃生者会损失一层健康状态。</li><li>额外获得<b>100%</b>电锯得分项的血点。</li>","name":"速度限制器","id":101,"index":"SPEED_LIMITER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"一件裂开且满是尘土的过滤器，但它仍然比库存型号更好用。<br><br><li><b>小幅增加</b>电锯的过热限制。</li>","name":"垃圾场空气过滤器","id":102,"index":"JUNKYARD_AIR_FILTER","owner":"HILLBILLY","rarity":0,"image":"iconAddon_junkyardAirFilter"},{"description":"带有加固脚趾护板的靴子，可以防止撞击。<br><br><li><b>小幅减少</b>电锯攻击到物体时的恢复时间。</li>","name":"铁趾靴子","id":103,"index":"STEEL_TOE_BOOTS","owner":"HILLBILLY","rarity":0,"image":"iconAddon_steelToeBoots"},{"description":"粗略改造的消音器，允许额外的空气流通。<br><br><li><b>小幅增加</b>电锯的冷却率。</li>","name":"穿孔消音器","id":104,"index":"PUNCTURED_MUFFLER","owner":"HILLBILLY","rarity":1,"image":"iconAddon_puncturedMuffler"},{"description":"许多乡下好男孩会佩戴的光彩夺目的皮带。<br><br><li>电锯过热时恐惧范围<b>减少</b>8米。</li>","name":"大扣带","id":107,"index":"BIG_BUCKLE","owner":"HILLBILLY","rarity":1,"image":"iconAddon_bigBuckle"},{"description":"经济实惠的机油，可用于润滑嘈杂的链条。<br><br><li><b>小幅降低</b>电锯发出的噪音。</li>","name":"杂牌机油","id":109,"index":"OFF_BRAND_MOTOR_OIL","owner":"HILLBILLY","rarity":1,"image":"iconAddon_offBrandMotorOil"},{"description":"从老马克思·汤普森的尸体上拽下来的一双耐用靴子。<br><br><li><b>中幅增加</b>电锯冲刺时的拐弯能力。</li>","name":"父亲的靴子","id":110,"index":"DADS_BOOTS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_dadsBoots"},{"description":"电锯上雕刻的图案象征受难者人数，可让使用者杀意坚决。<br><li><b>小幅增加</b>电锯的移动速度。</li><li><b>小幅增加</b>充能时间。</li><li>效果可以被叠加。</li>","name":"死亡雕印","id":111,"index":"DEATH_ENGRAVINGS","owner":"HILLBILLY","rarity":1,"image":"iconAddon_deathEngravings"},{"description":"在伊芙琳·汤普森的钱包里发现的少量咖啡因药丸。其副作用包括神经质和烦躁不安。在被木板击晕后<br><br><li>小幅增加<b></b>电锯充电时间，持续30秒。</li><br>","name":"母亲的帮手","flavor":"“医生，拜托再多来点。”——伊芙琳·汤普森","id":112,"index":"MOTHERS_HELPERS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_mothersHelpers"},{"description":"减少后坐力可能性的特制链条。<br><br><li><b>大幅减少</b>电锯冲刺时撞到障碍物的时间惩罚。</li>","name":"低后坐力链条","id":113,"index":"LOW_KICKBACK_CHAINS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_lowKickbackChains"},{"description":"一团湿糊状的芬芳叶子，在猎手追踪猎物时能掩盖自身的气味。<br><br><li>用电锯攻击命中后获得无法侦测状态，持续15秒。</li>","name":"糊状叶子","id":114,"index":"LEAFY_MASH","owner":"HILLBILLY","rarity":2,"image":"iconAddon_leafyMash"},{"description":"电锯上雕刻的图案象征迷雾中的暗夜杀手。可让使用者杀意坚决。<br><li><b>中幅增加</b>电锯的移动速度。</li><li><b>小幅增加</b>充能时间。</li><li>效果可以被叠加。</li>","name":"厄运雕印","id":115,"index":"DOOM_ENGRAVINGS","owner":"HILLBILLY","rarity":2,"image":"iconAddon_doomEngravings"},{"description":"用来在眼睛下方涂抹以减少眩光的浓稠油脂。<br><br><li><b>中幅增加</b>被手电筒照射时电锯的冷却速率。</li>","name":"黑色油脂","id":117,"index":"BLACK_GREASE","owner":"HILLBILLY","rarity":2,"image":"iconAddon_blackGrease"},{"description":"尽管这件化油器中积满了灰尘和污垢，但其内部构造经过了仔细调节。<br><br><li><b>适当减少</b>电锯充能时间。</li><li><b>减少</b>基础移速至4.4米/秒。","name":"调校化油器","id":118,"index":"TUNED_CARBURETOR","owner":"HILLBILLY","rarity":3,"image":"iconAddon_tunedCarburetor"},{"description":"绑在靴子上的脚钉，可以让双脚更稳固地在湿滑的地面上行走，方便控制每一个脚步。<br><li>在使用电锯的时候，<b>巨幅增加</b>转向速度。</li><li><b>大幅降低</b>撞上物品的惩罚时间。</li>","name":"铆钉靴","id":119,"index":"SPIKED_BOOTS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_spikedBoots"},{"description":"恶臭扑鼻的手套，上面沾有某种未知物质。尽管这双手套好像哪里都不对，但其面料确实很厚实。<br><br><li>电锯开始暖机时<b>适当减少</b>获得的热量。</li><br>","name":"猪圈手套","flavor":"“怎样的污秽也不能沾染努力之人的灵魂。”——老马克思·汤普森","id":120,"index":"PIGHOUSE_GLOVES","owner":"HILLBILLY","rarity":3,"image":"iconAddon_pighouseGloves"},{"description":"轻型链条减轻了电锯的重量，具有更高的机动性。<br><br><li>破坏板子或墙壁后会继续电锯冲刺。</li><li>电锯破坏板子或墙壁后5秒内攻击命中的逃生者会损失一层健康状态。</li>","name":"轻装链条","id":121,"index":"LOPRO_CHAINS","owner":"HILLBILLY","rarity":3,"image":"iconAddon_lowProChains"},{"description":"这是小麦克斯房间的屏障坏掉时掉下的第一块砖，曾代表着他的禁闭。<br><br><li>电锯冲刺持续2秒后，获得无法侦测状态，直至你停止冲刺。</li><br>","name":"荧虹砖","flavor":"“你在搞什么名堂，小子？”——老马克思·汤普森","id":122,"index":"IRIDESCENT_BRICK","owner":"HILLBILLY","rarity":3,"image":"iconAddon_iridescentBrick"},{"description":"精巧的电锯消音器胜过其他所有东西。<br><br><li>电锯对恐惧范围之外的幸存者保持静音。</li>","name":"顶尖消音器","id":123,"index":"APEX_MUFFLER","owner":"HILLBILLY","rarity":3,"image":"iconAddon_apexMuffler"},{"description":"廉价木头雕刻成的无色玩具小马。曾象征着一位紧张症病人与他的护士之间亲密的关系。<br><li><b>中幅降低</b>鬼影步攻击未命中时的额外疲劳。</li>","name":"小木马","id":150,"index":"WOODEN_HORSE","owner":"NURSE","rarity":0,"image":"iconAddon_woodenHorse"},{"description":"在诊所找到的头虱梳子。曾象征着一位紧张症病人与她的护士之间亲密的关系。<br><li><b>中幅减少</b>鬼影步蓄力攻击距离。</li><li><i>鬼影步攻击</i>得分增加<b>100%</b>血点。</li>","name":"白梳子","id":151,"index":"WHITE_NIT_COMB","owner":"NURSE","rarity":0,"image":"iconAddon_whiteNitComb"},{"description":"光泽黯淡又布满锈斑的金属勺子。没收自202病房的病人“恶男”。<br><li>成功使用鬼影步攻击逃生者后会<b>中幅提高其</b>痛苦叫声，持续<b>60秒</b>。</li>","name":"铁勺","id":153,"index":"METAL_SPOON","owner":"NURSE","rarity":0,"image":"iconAddon_metalSpoon"},{"description":"从“恶男”那里连根摘掉的一颗烂掉的臼齿。<br><li>成功使用鬼影步攻击命中逃生者时，其在<b>28米</b>内进行治疗或被治疗动作时将显示气场，持续<b>60秒</b>。</li>","name":"恶男的纪念品","id":155,"index":"BAD_MAN_KEEPSAKE","owner":"NURSE","rarity":0,"image":"iconAddon_badManKeepsake"},{"description":"一块烧焦且毁掉了的怀表。取自护士莫里斯的尸体。<br><li><b>中幅增加</b>连锁鬼影步判定时间。","name":"怀表","id":156,"index":"POCKET_WATCH","owner":"NURSE","rarity":1,"image":"iconAddon_pocketWatch"},{"description":"不值钱的一块珠宝，但是对某个人来说具有重要的意义。它曾经的主人是一个焦虑的女孩。<br><li><b>中幅降低</b>鬼影步最大移动距离。</li><li><i>百中鬼影步</i>得分提升<b>100%</b></li>","name":"灰暗手镯","id":157,"index":"DULL_BRACELET","owner":"NURSE","rarity":1,"image":"iconAddon_dullBracelet"},{"description":"曾作为腰带用在丧服上的黑色束带。取自坎贝尔神父的尸体。<br><li><b>中幅增加</b>鬼影步充能速度。</li>","name":"暗色束带","id":158,"index":"DARK_CINCTURE","owner":"NURSE","rarity":1,"image":"iconAddon_darkCincture"},{"description":"一个可以让癫狂的患者平静下来的神奇松果。取自紧张症男孩的尸体。<br><li><b>大幅减少</b>连续鬼影步的额外疲劳。</li>","name":"紧张症男孩的宝藏","id":159,"index":"CATATONIC_BOYS_TREASURE","owner":"NURSE","rarity":1,"image":"iconAddon_catatonicTreasure"},{"description":"从“恶男”那里偷来的颤抖着的濒死之息。这股气息剧烈地在护士的手掌中跳动。<br><li>成功用鬼影步命中逃生者会<b>使护士暂时无法使用鬼影步</b>并增加护士基础移动速度至<b>4.6米/秒</b>，持续<b>60秒。</b></li>","name":"痉挛性呼吸","id":160,"index":"SPASMODIC_BREATH","owner":"NURSE","rarity":2,"image":"iconAddon_spasmodicBreath"},{"description":"从肥胖的清洁工那里偷来的舒缓而鼓胀的气息。微弱地在护士的手中颤抖。<br><li><b>大幅提升</b>鬼影步最大移动距离。</li><li><b>大幅提升</b>鬼影步最大充能时间。</li>","name":"沉重的喘息","id":161,"index":"HEAVY_PANTING","owner":"NURSE","rarity":2,"image":"iconAddon_heavyPanting"},{"description":"从坎贝尔神父那里偷来的慌乱而虚弱的气息。在护士的抚摸下悄无声息地扭曲着。<br><li><b>大幅增加</b>鬼影步充能速度。</li>","name":"微弱的叹息","id":162,"index":"FRAGILE_WHEEZE","owner":"NURSE","rarity":2,"image":"iconAddon_fragileWheeze"},{"description":"从紧张症男孩病人那里收集而来的一口气息，不均的气息让人感觉到病情的恶化。本该稳定而平静的气息到了护士手中突然急剧变得焦躁不安。<br><li><b>适度减少</b>鬼影步的疲劳时间。</li>","name":"混乱的气息","id":163,"index":"ATAXIC_RESPIRATION","owner":"NURSE","rarity":2,"image":"iconAddon_ataxicRespiration"},{"description":"从一个焦虑的女孩那收集来的惊恐的喘息，护士对其情有独钟。这喘息在护士的手中拼命颤抖着。<br><li>使用鬼影步穿过逃生者将使其尖叫，并获得<i>阴险</i>目录下的<b>200血点</b>。</li>","name":"急促的喘息","id":164,"index":"ANXIOUS_GASP","owner":"NURSE","rarity":2,"image":"iconAddon_anxiousGasp"},{"description":"一角撕下的黑红相间法兰绒。面料的选取恰当地反映了护士的喜好。<br><li>鬼影步的落位区域将变为可见。</li>","name":"方格花呢子","id":165,"index":"PLAID_FLANNEL","owner":"NURSE","rarity":3,"image":"iconAddon_plaidFlannel"},{"description":"从克洛普瑞恩疯人院的清洁工哈佛里·卡瓦纳那里偷来的濒死之息。这强烈的气息在护士的手中剧烈地颤动。<br><li><b>巨幅提升提升</b>鬼影步最大移动距离。</li><li><b>巨幅提升</b>鬼影步最大充能时间。</li>","name":"卡瓦纳的濒死之息","id":166,"index":"KAVANAGHS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_kavanaghsLastBreath"},{"description":"从克洛普瑞恩疯人院的病人玛丽·珍娜那里抢走的濒死之息。这股气息在护士的手中剧烈的颤抖。<br><li>使用鬼影步之后，护士可以按<i>主动能力键</i>立刻返回之前的位置。必须在护士疲劳前使用。</li>","name":"珍娜的濒死之息","id":167,"index":"JENNERS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_jennersLastBreath"},{"description":"从克洛普瑞恩疯人院的牧师坎贝尔神父那里抢走的濒死之息。在护士的双手中它剧烈地炸开了。<br><li>使用完整充能的鬼影步后再出现时，护士可以朝着当前面对的方向以半数充能再次鬼影步。</li>","name":"坎贝尔神父的最后一口气","id":168,"index":"CAMPBELLS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_campbellsLastBreath"},{"description":"从克洛普瑞恩疯人院的病人“恶男”那里抢走的濒死之息。在护士的双手中它剧烈地炸开了。<br><li>成功用鬼影步命中逃生者会使护士暂时获得<b>无法侦测</b>状态，持续<b>16秒</b>。</li><li>此状态每<b>60秒</b>可触发一次。</li>","name":"“恶男”的濒死之息","id":169,"index":"BAD_MANS_LAST_BREATH","owner":"NURSE","rarity":3,"image":"iconAddon_badMansLastBreath"},{"description":"很久以前用于夹在圣书中的一片洁白而质朴的缎带。曾是纷争的象征。<br><li>鬼影步连续使用次数加<b>1</b>。</li><li>护士只能用鬼影步前往自己视野范围内的地点。</li>","name":"书签碎片","id":170,"index":"TORN_BOOKMARK","owner":"NURSE","rarity":4,"image":"iconAddon_tornBookmark"},{"description":"一个火柴盒，里面装着一套并不匹配的奇怪纽扣。像是个可怕之地的印记。<br><li>减少<b>1</b>次鬼影步充能。</li><li>护士的基础移动速度提升至<b>4.2米/秒</b>。</li>","name":"火柴盒","id":171,"index":"MATCHBOX","owner":"NURSE","rarity":4,"image":"iconAddon_matchBox"},{"description":"用塑料制成的廉价首饰，但从色调上看好似很值钱一样。<br><li><b>小幅增加</b>潜行时的移动速度。</li>","name":"俗气的耳环","id":200,"index":"TACKY_EARRINGS","owner":"SHAPE","rarity":0,"image":"iconAddon_tackyEarrings"},{"description":"一个“浪漫”中带着点儿低俗的便笺，曾用于赢得某位女士的爱慕。<br><li><b>小幅增加</b><b>恶魔附身I</b>的前冲效果。</li>","name":"男友的便笺","flavor":"“便笺上留有落款：D。”","id":201,"index":"BOYFRIENDS_MEMO","owner":"SHAPE","rarity":0,"image":"iconAddon_boyfriendsMemo"},{"description":"波浪小卷的一丝金发。<br><li><b>小幅增加</b><b>恶魔附身III</b>的持续时间。</li><li><b>小幅增加第一次</b>到达<b>恶魔附身III</b>所需的恶意值。</li>","name":"金发","id":202,"index":"BLOND_HAIR","owner":"SHAPE","rarity":0,"image":"iconAddon_blondeHair"},{"description":"一小片似乎是从破碎的镜子上取下的高反光材料。<br><li><b>恶魔附身II可感知到至少被追踪了</b>1秒<b>以上的逃生者的气场</b>。</li><li>气场可在<b>2秒</b>的持续时间内可见。</li>","name":"反光的碎片","id":203,"index":"REFLECTIVE_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_reflectiveFragment"},{"description":"从墓地拾到的一株半干枯的粉色飞燕草。<br><li><b>小幅增加</b>追踪逃生者时的恶意值获得速率。</li>","name":"纪念花","id":204,"index":"MEMORIAL_FLOWER","owner":"SHAPE","rarity":1,"image":"iconAddon_memorialFlower"},{"description":"由玻璃珠和一些便宜的材料制成的大串项链，朱蒂斯最爱的东西之一。<br><li><b>中幅增加</b>潜行时的移动速度。</li>","name":"首饰","id":205,"index":"JEWELRY","owner":"SHAPE","rarity":1,"image":"iconAddon_jewelry"},{"description":"一把可让头发变软变顺的尼龙梳子。<br><li><b>中幅增加</b><b>恶魔附身III</b>的持续时间。</li><li><b>小幅增加第一次</b>到达<b>恶魔附身III</b>所需的恶意值。</li>","name":"梳子","id":206,"index":"HAIR_BRUSH","owner":"SHAPE","rarity":1,"image":"iconAddon_hairBrush"},{"description":"一小片有色玻璃，似乎是从某个坏掉的物件上取下的，但已无从得知其确切的来源了。<br><li><b>恶魔附身I可感知到至少被追踪了<b>1秒</b>以上的逃生者的气场</b>。</li><li>气场可在<b>3秒</b>的持续时间内可见。</li>","name":"玻璃碎片","id":207,"index":"GLASS_FRAGMENT","owner":"SHAPE","rarity":1,"image":"iconAddon_glassFragment"},{"description":"一只已被从脖子到尾巴开了膛的兔子。<br><li><b>中幅减少</b><b>恶魔附身II</b>的恐惧范围。</li><li><b>中幅增加</b><b>恶魔附身III</b>的恐惧范围。</li>","name":"死掉的兔子","id":208,"index":"DEAD_RABBIT","owner":"SHAPE","rarity":1,"image":"iconAddon_deadRabbit"},{"description":"一大片锐利的破碎镜子。<br><li><b>恶魔附身II可感知到至少被追踪了</b>1秒<b>以上的逃生者的气场</b>。</li><li>气场可在<b>5秒</b>的持续时间内可见。</li>","name":"镜子裂片","id":209,"index":"MIRROR_SHARD","owner":"SHAPE","rarity":2,"image":"iconAddon_mirrorShard"},{"description":"标有主人是朱蒂斯M·梅尔斯的日志。大多数的纸页都被画满了骇人的涂鸦。<br><li>某个逃生者将成为你的<b>血祭品</b>。</li><li><b>大幅增加</b>追踪血祭品时的恶意值获得速率。</li><li><i>每场比赛中只会出现一个血祭品。</i></li>","name":"朱蒂斯的日志","id":210,"index":"JUDITHS_JOURNAL","owner":"SHAPE","rarity":2,"image":"iconAddon_judithsJournal"},{"description":"一个曾用于放置化妆品的无光泽的木盒子。<br><li><b>大幅增加</b>潜行时的移动速度。</li>","name":"首饰盒","id":211,"index":"JEWELRY_BOX","owner":"SHAPE","rarity":2,"image":"iconAddon_jewelryBox"},{"description":"从哈登菲尔德高中65年年鉴上撕下来的光滑的一页，记录了有关朱蒂斯·梅尔斯的事情。<br><li><b>中幅增加</b>追踪逃生者时的恶意值获得速率。</li>","name":"J·梅尔斯的纪念物","id":212,"index":"J_MYERS_MEMORIAL","owner":"SHAPE","rarity":2,"image":"iconAddon_jMyersMemorial"},{"description":"用来绑住头发的蓝格子丝带。<br><li><b>大幅增加</b><b>恶魔附身III</b>的持续时间。</li><li><b>小幅增加第一次</b>到达<b>恶魔附身III</b>所需的恶意值。</li>","name":"蝴蝶结","id":213,"index":"HAIR_BOW","owner":"SHAPE","rarity":2,"image":"iconAddon_hairBow"},{"description":"一个完好无损的标准便携式化妆镜，表面只覆盖着一层薄薄的灰和粉底。 <br><li>当在<b>16米</b>内潜行接近时，恶魔附身II可感知到逃生者的气场。</li><li>恶魔附身将无法超过<b>阶段II</b></li><li><b>小幅降低</b>移动速度。<li><li>在各个<b>出击</b>得分项中，<b>凶残类</b>获得<b>100%</b>额外的血点奖励，<b>阴险类</b>获得<b>150%</b>额外血点奖励。</li>","name":"化妆镜","id":214,"index":"VANITY_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_vanityMirror"},{"description":"从一个破败的墓碑上取下来的拳头大小的花岗岩碎片。<br><li>达到第<b>三阶段恶魔附身时</b>，开启直接<b>处决满血或受伤生存者的能力</b>。</li><li><b>禁用</b>在<b>恶魔附身III</b>状态下潜行的能力。</li><li>杀死一名逃生者将<b>大幅吸取</b>恶魔附身的力量。</li><li><b>大幅增加第一次</b>到达<b>恶魔附身III</b>所需的恶意值。</li>","name":"墓碑的碎块","id":215,"index":"TOMBSTONE_PIECE","owner":"SHAPE","rarity":3,"image":"iconAddon_tombstonePiece"},{"description":"一个标准的便携式化妆镜，已被锋利的金属重重地划破了。<br><li>当在<b>32米</b>内潜行接近时，恶魔附身I可感知到逃生者的气场。</li><li>恶魔附身将无法超过<b>阶段I</b>。</li><li>在各个<b>出击</b>得分项中，<b>凶残类</b>获得<b>100%</b>额外的血点奖励，<b>阴险类</b>获得<b>200%</b>额外血点奖励。</li>","name":"有划痕的镜子","id":216,"index":"SCRATCHED_MIRROR","owner":"SHAPE","rarity":3,"image":"iconAddon_scratchedMirror"},{"description":"用黑色松紧带捆住的一缕金发。<br><li><b>巨幅增加</b><b>恶魔附身III</b>的持续时间。</li><li><b>中幅增加第一次</b>到达<b>恶魔附身III</b>所需的恶意值。</li>","name":"一缕头发","id":217,"index":"LOCK_OF_HAIR","owner":"SHAPE","rarity":3,"image":"iconAddon_lockOfHair"},{"description":"从辛克莱山墓地里偷来的一块巨大而沉重的墓碑，主人是朱蒂斯·梅尔斯。<br><li>达到<b>第三阶段恶魔附身</b>时，开启直接<b>处决满血或</b>受伤生存者的能力。</li><li><b>禁用</b>在<b>恶魔附身III</b>状态下潜行的能力。</li><li><b>巨幅增加第一次</b>到达<b>恶魔附身III</b>所需的恶意值。</li><li><b>中幅降低</b>移动速度。</li>","name":"朱蒂斯的墓碑","flavor":"“我们心爱的女儿在此长眠。”","id":218,"index":"JUDITHS_TOMBSTONE","owner":"SHAPE","rarity":4,"image":"iconAddon_judithsTombstone"},{"description":"从某人的头皮上硬生生地撕下来的一簇金发，散发着一股女性特有的花香。<br><li>使<b>恶魔附身III</b>的持续时间变为<b>无限</b>。</li><li><b>巨幅增加第一次</b>到达<b>恶魔附身III</b>所需的恶意值。</li>","name":"一簇芳香的头发","id":219,"index":"FRAGRANT_TUFT_OF_HAIR","owner":"SHAPE","rarity":4,"image":"iconAddon_tuftOfHair"},{"description":"枯死植物所制成的坚硬颈环。<br><li><b>小幅减少</b>设置鬼灵陷阱所需时间。</li>","name":"粗杂颈环","id":250,"index":"ROPE_NECKLET","owner":"HAG","rarity":0,"image":"iconAddon_ropeNecklet"},{"description":"闪烁惨白金色的微小蛋壳碎片。<br><li><b>小幅增加</b>陷入鬼灵陷阱的持续时间。</li>","name":"金粉蛋壳","id":251,"index":"POWDERED_EGGSHELL","owner":"HAG","rarity":0,"image":"iconAddon_powderedEggshell"},{"description":"一小块黑泥，上面还残存着死苍蝇的尸体。吞噬可增加体力。<br><li><b>小幅增加</b>妖巫可传送至其所设陷阱的距离。</li>","name":"死蝇泥团","id":252,"index":"DEAD_FLY_MUD","owner":"HAG","rarity":0,"image":"iconAddon_deadFlyMud"},{"description":"古老的药瓶中所装的浑浊之水。<br><li><b>小幅增加</b>鬼灵陷阱的触发范围。</li>","name":"沼泽之水","id":253,"index":"BOG_WATER","owner":"HAG","rarity":0,"image":"iconAddon_bogWater"},{"description":"精致灰色毛皮包裹的一簇猫柳小鲜花。<br><li>当逃生者陷入鬼灵陷阱时，气场会暴露<b>3秒</b></li>","name":"猫柳小花","id":254,"index":"PUSSY_WILLOW_CATKINS","owner":"HAG","rarity":1,"image":"iconAddon_pussyWillowCatkins"},{"description":"半个圆形空心蛋壳。<br><li><b>中幅增加</b>陷入鬼灵陷阱的持续时间。</li>","name":"半个蛋壳","id":255,"index":"HALF_EGGSHELL","owner":"HAG","rarity":1,"image":"iconAddon_halfEggshell"},{"description":"一把的淡黄色翅膀。干爽酥脆，吞噬可增加体力。<br><li><b>中幅增加</b>妖巫可传送至其所设陷阱的距离。</li>","name":"蜻蜓翅膀","id":256,"index":"DRAGONFLY_WINGS","owner":"HAG","rarity":1,"image":"iconAddon_dragonflyWings"},{"description":"枯死植物所制成的坚硬颈环，粗杂装饰了柏树皮和沼泽苔藓。<br><li><b>中幅减少</b>设置鬼灵陷阱所需时间。</li>","name":"柏树颈环","id":257,"index":"CYPRESS_NECKLET","owner":"HAG","rarity":1,"image":"iconAddon_cypressNecklet"},{"description":"睡莲卷起的叶片所含的染血之水。<br><li><b>中幅增加</b>鬼灵陷阱的触发范围。</li>","name":"染血之水","id":258,"index":"BLOODIED_WATER","owner":"HAG","rarity":1,"image":"iconAddon_bloodiedWater"},{"description":"三根脆弱的柳枝所编成的三角祭环。<br><li>当逃生者陷入鬼灵陷阱时，气场会暴露<b>5秒</b>。</li>","name":"柳枝祭环","id":259,"index":"WILLOW_WREATH","owner":"HAG","rarity":2,"image":"iconAddon_willowWreath"},{"description":"枯死植物所制成的坚硬颈环，粗杂装饰了枯萎兰花的花瓣和叶子。<br><li><b>大幅减少</b>设置鬼灵陷阱所需时间。</li>","name":"沼泽兰花颈环","id":260,"index":"SWAMP_ORCHID_NECKLET","owner":"HAG","rarity":2,"image":"iconAddon_swampOrchidNecklet"},{"description":"一只沼泽里的寒蝉，裹在一层薄灰里。口感酥脆。吞噬可增加体力。<br><li><b>大幅增加</b>妖巫可传送至其所设陷阱的距离。</li>","name":"寒蝉干尸","id":261,"index":"DRIED_CICADA","owner":"HAG","rarity":2,"image":"iconAddon_driedCicada"},{"description":"浅橙色乌龟蛋，支离破碎且已被掏空。<br><li><b>大幅增加</b>陷入鬼灵陷阱的持续时间。</li>","name":"碎裂乌龟蛋","id":262,"index":"CRACKED_TURTLE_EGG","owner":"HAG","rarity":2,"image":"iconAddon_crackedTurtleEgg"},{"description":"一团深红色的染血污泥，血液赋予了污泥力量。<br><li><b>大幅增加</b>鬼灵陷阱的触发范围。</li>","name":"染血之泥","id":263,"index":"BLOODIED_MUD","owner":"HAG","rarity":2,"image":"iconAddon_bloodiedMud"},{"description":"从食人村屠夫身上切下的手掌。其中所蕴含的精元可极大地释放妖巫的潜在力量。<br><li>妖巫的鬼灵将拥有物理碰撞体积。</li><li>妖巫无法传送至鬼灵陷阱。</li><li>获得额外<b>300%</b>“阴险”血点奖励。</li><li>胜过所有其它附加品。</li>","name":"伤痕手掌","flavor":"“……”——屠夫","id":264,"index":"SCARRED_HAND","owner":"HAG","rarity":3,"image":"iconAddon_scarredHand"},{"description":"食人村地窖内罪犯曾戴的铁铐和残骸。吸取其中所蕴含的精元可极大地释放妖巫的潜在力量。<br><li>陷入鬼灵陷阱的逃生者将不会获得任何陷阱触发提示。</li><li>陷阱不会生成一个妖巫鬼灵。</li>","name":"生锈铁铐","id":265,"index":"RUSTY_SHACKLES","owner":"HAG","rarity":3,"image":"iconAddon_rustyShackles"},{"description":"食人村里老人的冷酷心脏。吸取其中所蕴含的精元可极大地释放妖巫的潜在力量。<br><li>当逃生者触发一个鬼灵陷阱时，将妖巫的心跳幅度减至<b>0</b>。</li><li>将污泥鬼灵的心跳辐射半径增加<b>16米</b>。</li>","name":"奶奶的心","flavor":"“把那女孩的肉再给我割点下来。” ——老奶奶","id":266,"index":"GRANMAS_HEART","owner":"HAG","rarity":3,"image":"iconAddon_granmasHeart"},{"description":"食人村里聋孩子的耳朵，因为头部被击打数次已经变形。吸取其中所蕴含的精元可极大地释放妖巫的潜在力量。<br><li>陷入鬼灵陷阱的逃生者变聋<b>6秒</b>。</li>","name":"残破的耳朵","id":267,"index":"DISFIGURED_EAR","owner":"HAG","rarity":3,"image":"iconAddon_disfiguredEar"},{"description":"一只在沼泽中浸泡多年的童鞋。吸取其中所蕴含的精元可极大地释放妖巫的潜在力量。<br><li>在鬼灵陷阱的触发范围内的逃生者会受到<b><i>减速状态</i></b>影响。</li><li><b>小幅</b>增加妖巫的移动速度。</li><li>妖巫将无法传送至鬼灵陷阱。</li>","name":"浸水的鞋子","id":268,"index":"WATERLOGGED_SHOE","owner":"HAG","rarity":4,"image":"iconAddon_waterloggedShoe"},{"description":"丽莎-谢伍德消失那天所穿的裙子上的一小块棉布。吸取其中所蕴含的精元可极大地释放妖巫的潜在力量。<br><li>妖巫将可以传送至关卡中的任何一个鬼灵陷阱。</li><li>鬼灵陷阱传送再次使用的冷却时间为<b>15秒</b>。</li>","name":"崭新的布块","id":269,"index":"MINT_RAG","owner":"HAG","rarity":4,"image":"iconAddon_mintRag"},{"description":"一个仍然能导电的发霉电极。<br><li><b>小幅提升</b><b>电击疗法</b>的有效距离。</li>","name":"发霉电极","id":300,"index":"MOLDY_ELECTRODE","owner":"DOCTOR","rarity":0,"image":"iconAddon_moldyElectrode"},{"description":"一个由枫木制成的白色西洋棋骑士。来自于一位老人的礼物，勾勒出了久远的记忆并给予医生无比的专注。<br><li>显示出<b>电击疗法</b><i>特殊攻击</i>的有效范围。</li>","name":"枫木骑士","id":301,"index":"MAPLE_KNIGHT","owner":"DOCTOR","rarity":0,"image":"iconAddon_mapleKnight"},{"description":"制式的ECT疗程是莱理疗养中心的日常疗程。会导致病患轻度意识混乱。<br><li><b>小幅缩短</b><b>静电爆炸</b>的冷却时间。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>秩序折磨</i>效果：<li><i>幻象板子</i>可能会出现在被破坏的板子处，直到玩家足够接近时，幻象才会消失。</li><li>每隔<b>20秒</b>，就会有一块新的<i>幻象板子</i>随机生成在被破坏的板子处。</li><li><b>医生</b>能看到<i>幻象板子</i>的气场。</li>","name":"第一堂课：“秩序”","id":302,"index":"ORDER_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_orderClassI"},{"description":"用深层波长来安抚多种精神病患者的ECT疗程。以卡特的电火花作为治疗源，因此会使病患产生轻度焦虑感。<br><li><b>小幅提高</b>在<b>静电爆炸</b>准备就绪时恐惧范围大小。</li><li><b>小幅降低</b>你在<b>静电爆炸</b>冷却时的恐惧范围大小。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>平静折磨</i>效果：<li><b>神经紊乱II</b>：使逃生者<b>间歇性</b>幻听到远方传来的<i>恐惧范围</i>。</li><li><b>神经紊乱III</b>：使逃生者<b>不断</b>幻听到远方传来的<i>恐惧范围</i>。</li>","name":"第一堂课：“平静”","id":303,"index":"CALM_CLASS_I","owner":"DOCTOR","rarity":0,"image":"iconAddon_calmClassI"},{"description":"一份来自觉醒计划的录音带，基本只能听见噪音。能为医生改善疗法带来灵感。<br><br><li><b>电击疗法</b> <i>特殊能力</i>范围由锥形变为环形，出现在<b>医生</b>面前的<b>8米</b>处，环形的外半径为<b>4.2米</b>，内半径为<b>3米</b>。</li>","name":"报废的录音带","id":304,"index":"SCRAPPED_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_scrappedTape"},{"description":"一个标准电流疗法所使用的全新电极。<br><li><b>中幅提升</b><b>电击疗法</b>的有效距离。</li>","name":"抛光电极","id":305,"index":"POLISHED_ELECTRODE","owner":"DOCTOR","rarity":1,"image":"iconAddon_polishedElectrode"},{"description":"某个关于觉醒计划的小型录音带，其中包含未经编辑的受害者采访。医生由此得到启发，变更了治疗方式。<br><li><b>电击疗法</b><i>特殊能力</i>范围从锥形变为<b>24米</b>长与<b>2米</b>宽的矩形。</li>","name":"谈话录音带","id":306,"index":"INTERVIEW_TAPE","owner":"DOCTOR","rarity":1,"image":"iconAddon_interviewTape"},{"description":"在迷雾中研发出的实验性ECT疗程。使用波长来连接患者与医生的思维。已知此疗程会导致患者产生轻度幻觉。<br><li>逃生者的<b>神经紊乱</b>提升时，其气场会暴露<b>1秒</b>。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>约束折磨</i>效果：</li><li><b>中幅延长</b><i>医生幻象</i>的持续时间。</li><li><b>医生</b>能看到<i>医生幻象</i>的气场。</li>","name":"第二堂课：“克制”","id":307,"index":"RESTRAINT_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_restraintClassII"},{"description":"高刺激性ECT疗程是莱理疗养中心的日常疗程。会导致病患中度意识混乱。<br><li><b>中幅缩短</b><b>静电爆炸</b>的冷却时间。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>秩序折磨</i>效果：<li><i>幻象板子</i>可能会出现在被破坏的板子处，直到玩家足够接近时，幻象才会消失。</li><li>每隔<b>20秒</b>，就会有一块新的<i>幻象板子</i>随机生成在被破坏的板子处。</li><li><b>医生</b>能看到<i>幻象板子</i>的气场。</li><span class=\\"FlavorText\\">“副作用很罕见。”——莱理疗养中心</span>","name":"第二堂课：“秩序”","id":308,"index":"ORDER_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_orderClassII"},{"description":"使用高剂量电压，用于纪律处分的觉醒项目ECT疗程。会导致患者进入中度偏执状态。<br><li><b>小幅缩短</b><b>电击疗法</b>的引爆延迟。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>戒律折磨</i>效果：<li><b>神经紊乱II</b>：在追杀期间，逃生者能看到<i>红光幻象</i>和<i>恐惧范围</i>，仿佛<b>医生</b>就在他们身后一样。此效果在追杀结束后持续存在<b>6秒</b>。</li><li><b>神经紊乱III</b>：<i>幻视到的红光</i>和<i>恐惧范围</i>时刻存在。</li><li><b>医生</b>也能看到<i>红光幻象</i>。</li><span class=\\"FlavorText\\">我们会用为患者献上最优质的呵护。”——莱理疗养中心</span>","name":"第二堂课：“纪律”","id":309,"index":"DISCIPLINE_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_diciplineClassII"},{"description":"一种具有风险的ECT疗程，用深层波长来安抚多种精神病患者。以卡特的电火花作为治疗源，因此会使病患产生一定的焦虑感。<br><li><b>中幅提高</b>在<b>静电爆炸</b>准备就绪时恐惧范围大小。</li><li><b>中幅降低</b>你在<b>静电爆炸</b>冷却时的恐惧范围大小。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>平静折磨</i>效果：<li><b>神经紊乱II</b>：使逃生者<b>间歇性</b>幻听到远方传来的<i>恐惧范围</i>。</li><li><b>神经紊乱III</b>：使逃生者<b>不断</b>幻听到远方传来的<i>恐惧范围</i>。</li><span class=\\"FlavorText\\">“电流疗法是最安全的医疗程序之一。”——莱理疗养中心</span>","name":"第二堂课：“平静”","id":310,"index":"CALM_CLASS_II","owner":"DOCTOR","rarity":1,"image":"iconAddon_calmClassII"},{"description":"一个能承载大量电流的实验性电极。<br><li><b>大幅提升</b><b>电击疗法</b>的距离。</li>","name":"高刺激性电极","id":311,"index":"HIGH_STIMULUS_ELECTRODE","owner":"DOCTOR","rarity":2,"image":"iconAddon_highStimulusElectrode"},{"description":"在迷雾中研发出的实验性ECT疗程。使用高刺激性波长来连接患者与医生的思维。已知此疗程会导致患者发生严重幻觉。<br><li>逃生者的<b>神经紊乱</b>提升时，其气场会暴露<b>2秒</b>。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>约束折磨</i>效果：<li><b>中幅延长</b><i>医生幻象</i>的持续时间。</li><li><b>医生</b>能看到医生<i>幻象</i>的气场。</li>","name":"第三堂课：“克制”","id":312,"index":"RESTRAINT_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_restraintClassIII"},{"description":"使用极高剂量电压，用于纪律处分的觉醒项目ECT疗程。会导致患者进入极端偏执状态。<br><li><b>中幅缩短</b><b>电击疗法</b>的引爆延迟。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>戒律折磨</i>效果：<li><b>神经紊乱II</b>：在追杀期间，逃生者能看到<i>红光幻象</i>和<i>恐惧范围</i>，仿佛<b>医生</b>就在他们身后一样。此效果在追杀结束后持续存在<b>6秒</b>。</li><li><b>神经紊乱III</b>：<i>幻视到的红光</i>和<i>恐惧范围</i>时刻存在。</li><li><b>医生</b>也能看到<i>红光幻象</i>。</li><span class=\\"FlavorText\\">尊重所有患者是我们的核心工作理念。”——莱理疗养中心</span>","name":"第三堂课：“纪律”","id":313,"index":"DISCIPLINE_CLASS_III","owner":"DOCTOR","rarity":2,"image":"iconAddon_diciplineClassIII"},{"description":"在迷雾中研发出的，有着潦草注解的实验性ECT疗程。使用难以忍受的刺激性波长来连接患者与医生的思维。已知此疗程会导致患者发生严重幻觉。<br><li>逃生者的<b>神经紊乱</b>提升时，其气场会暴露<b>3秒</b>。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>约束折磨</i>效果：<br><li><b>中幅延长</b><i>医生幻象</i>的持续时间。</li><li><b>医生</b>能看到<i>医生幻象</i>的气场。</li><span class=\\"FlavorText\\">“我能看到他们那<u>恶心</u>的病症。”——未署名便笺</span>","name":"卡特医生的笔记—“枷锁”","id":314,"index":"RESTRAINT_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_restraintCartersNotes"},{"description":"赫曼·卡特医生亲自注记的ECT疗程版本。长期持续的刺激导致病患严重意识混乱。<br><li><b>大幅缩短</b><b>静电爆炸</b>的冷却时间。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>秩序折磨</i>效果：<li><i>幻象板子</i>可能会出现在被破坏的板子处，直到玩家足够接近时，幻象才会消失。</li><li>每隔<b>20秒</b>，就会有一块新的<i>幻象板子</i>随机生成在被破坏的板子处。</li><li><b>医生</b>能看到<i>幻象板子</i>的气场。</li><span class=\\"FlavorText\\">“必须将刺激保持在<u>使人抽搐</u>的水平。”——H·卡特</span>","name":"卡特医生的笔记—“秩序”","id":315,"index":"ORDER_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_orderCartersNotes"},{"description":"觉醒计划的ECT疗程，为了纪律处罚而推出，由卡特医生亲自注记。无法忍受的超高电压导致患者进入极度偏执状态。<br><li><b>大幅缩短</b><b>电击疗法</b>的引爆延迟。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>戒律折磨</i>效果：<li><b>神经紊乱II</b>：在追杀期间，逃生者能看到<i>红光幻象</i>和<i>恐惧范围</i>，仿佛<b>医生</b>就在他们身后一样。此效果在追杀结束后持续存在<b>6秒</b>。</li><li><b>神经紊乱III</b>：<i>幻视到的红光</i>和<i>恐惧范围</i>时刻存在。</li><li><b>医生</b>也能看到<i>红光幻象</i>。</li><span class=\\"FlavorText\\">为了避免我们最顽强的样本反复发作，请在进行纪律处分时使用最大水平。”——H·卡特</span>","name":"卡特医生的笔记—“纪律”","id":317,"index":"DISCIPLINE_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_diciplineCartersNotes"},{"description":"赫曼·卡特医生亲自注记的ECT疗程版本。用深层波长来安抚多种精神病患者。以卡特的电火花作为治疗源，因此会造成病患无法自控的恐惧和焦虑感。<br><li><b>大幅提高</b>在<b>静电爆炸</b>准备就绪时恐惧范围大小。</li><li><b>大幅降低</b>你在<b>静电爆炸</b>冷却时的恐惧范围大小。</li><br>处于<b>神经紊乱</b>状态的逃生者会受到<i>平静折磨</i>效果：<li><b>神经紊乱II</b>：使逃生者<b>间歇性</b>幻听到远方传来的<i>恐惧范围</i>。</li><li><b>神经紊乱III</b>：使逃生者<b>不断</b>幻听到远方传来的<i>恐惧范围</i>。</li><span class=\\"FlavorText\\">“高质量的癫痫发作会引发紧张症。至少在其持续时间内，我能获得<u>平静</u>。”——H.卡特</span>","name":"卡特医生的笔记—“镇静”","id":318,"index":"CALM_CARTERS_NOTES","owner":"DOCTOR","rarity":3,"image":"iconAddon_calmCartersNotes"},{"description":"由迷雾铸造出的玻璃西洋棋国王棋子。恶灵的痕迹回响在棋子中，似乎再强韧的心灵也会被摧毁。<br><br>处于<b>神经紊乱</b>状态的逃生者会受到以下<i>折磨效果：平静、戒律、秩序</i>以及<i>约束</i>。<li>使逃生者<b>间歇性</b>幻听到远方传来的<i>恐惧范围</i>。</li><li>在追杀期间，逃生者能看到<i>红光幻象</i>和<i>恐惧范围</i>，仿佛<b>医生</b>就在他们身后一样。在<b>神经紊乱II</b>状态下，此效果在追杀结束后持续存在<b>6秒</b>，在<b>神经紊乱III</b>状态下，此效果时刻存在。</li><li><i>幻象板子</i>可能会出现在被破坏的板子处，直到玩家足够接近时，幻象才会消失。每隔<b>20秒</b>，就会有一块新的<i>幻象板子</i>随机生成在被破坏的板子处。</li><li><b>中幅延长</b><i>医生幻象</i>的持续时间。</li><li><b>医生</b>能看到<i>红光幻象</i>以及<i>医生幻象和幻象板子的气场</i>。</li>","name":"荣耀国王","flavor":"“凝视这光亮的玻璃棋子会让人莫名的发狂。”","id":319,"index":"IRIDESCENT_KING","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentKing"},{"description":"由迷雾铸造出的玻璃西洋棋女王棋子。想要触摸它的话就会受到大量电击。<br><li>所有被<b>电击疗法</b>或<b>静电爆炸</b><i>特殊能力</i>击中的逃生者会获得持续的<b>静电蓄能</b>。<b>静电蓄能</b>会留在逃生者体内直至<i>发散</i>。</li><li>如有多名逃生者在彼此相距<b>4米</b>内被同一<b>电击疗法</b>或<b>静电爆炸</b><i>特殊能力</i>击中则不会获得<b>静电蓄能</b>。</li><li>当任意时间有逃生者位于其他处于<b>静电蓄能</b>的逃生者<b>4米</b>内时，前者将受到等同于<b>电击疗法</b><i>特殊能力</i>的效果，同时<b>静电蓄能</b>效果立刻<i>发散</i>。</li>","name":"荧虹女王","flavor":"“等我们建立好有效疗程之后，就可以集中研究输送方式了。”——H.卡特","id":320,"index":"IRIDESCENT_QUEEN","owner":"DOCTOR","rarity":4,"image":"iconAddon_iridescentQueen"},{"description":"这块石头过于粗糙，没什么好的用处。但可对受害者造成严重的开放性创伤。<br><li>被击中的目标发出的痛苦呻吟将增加<b>50%</b>直至完全被治愈。</li>","name":"糙石","id":350,"index":"COARSE_STONE","owner":"HUNTRESS","rarity":0,"image":"iconAddon_coarseStone"},{"description":"简单的废料，易于起泡并擦净脓液。<br><li><b>+10%</b>飞斧的飞行速度。</li>","name":"发黄布条","id":351,"index":"YELLOWED_CLOTH","owner":"HUNTRESS","rarity":0,"image":"iconAddon_yellowedCloth"},{"description":"急救绷带牢牢地缠绕在飞斧的把手上。<br><li><b>小幅减少</b>飞斧投掷之间的冷却时间。</li><li>效果可以被叠加</li>","name":"缠着绷带的斧柄","id":352,"index":"BANDAGED_HAFT","owner":"HUNTRESS","rarity":0,"image":"iconAddon_bandagedHaft"},{"description":"用于涂抹在飞斧刀锋上的鹅膏菌毒素，会麻痹人的身心。<br><li>被击中的逃生者会进入 <b><i>障目</i></b>状态并持续 <b>60秒</b>。</li><li>效果可以被叠加。</li>","name":"鹅膏菌毒素","id":353,"index":"AMANITA_TOXIN","owner":"HUNTRESS","rarity":0,"image":"iconAddon_amanitaToxin"},{"description":"奇特的加重斧头，可对其目标施加重击。需要手臂强壮的人才能将其挥舞。<br><li>被击中的目标会受到<b>无法行动</b>状态影响，持续<b>10秒</b>。</li>","name":"加重斧头","id":354,"index":"WEIGHTED_HEAD","owner":"HUNTRESS","rarity":1,"image":"iconAddon_weightedHead"},{"description":"原本高度磨损的饰针，现已被打磨光亮。这是从一个难缠的猎物那儿得来的战利品。<br><li><b>小幅增加</b>你在为飞斧蓄力时的移动速度。</li><li>效果可以被叠加。</li>","name":"光亮饰针","id":355,"index":"SHINY_PIN","owner":"HUNTRESS","rarity":1,"image":"iconAddon_shinyPin"},{"description":"一个抛过光的斧柄，使用者可以更快速灵巧的操控致命杀器。<br><li><b>中幅减少</b>飞斧投掷之间的冷却时间。</li><li>效果可以被叠加。</li>","name":"橡木斧柄","id":356,"index":"OAK_HAFT","owner":"HUNTRESS","rarity":1,"image":"iconAddon_oakHaft"},{"description":"用甜茅制作而成的装饰性编圈。萦绕着使女猎手充满精力与愤怒的回忆。<br><li><b>中幅减少</b>飞斧蓄力时间。</li><li>效果可以被叠加。</li>","name":"草编圈","id":357,"index":"MANNA_GRASS_BRAID","owner":"HUNTRESS","rarity":1,"image":"iconAddon_mannaGrassBraid"},{"description":"绑成圈的皮带，可装配在腰带上以便携带工具。<br><li>进入游戏后会携带<b>1个额外的</b>飞斧。</li><li>同时提高<b>1个</b>飞斧的最大携带量。</li><li>效果可以被叠加。</li>","name":"皮带圈","id":358,"index":"LEATHER_LOOP","owner":"HUNTRESS","rarity":1,"image":"iconAddon_leatherLoop"},{"description":"干燥的花瓣，用茶冲泡后可缓解疲劳和过度劳累的症状。<br><li><b>+20%</b>飞斧飞行速度。</li> ","name":"玫瑰根","id":359,"index":"ROSE_ROOT","owner":"HUNTRESS","rarity":2,"image":"iconAddon_roseRoot"},{"description":"鞣制皮革手套可对手部起到保护作用，并提供了完美的抓握力。<br><li><b>中幅减少</b>飞斧在柜子处的补充时间。</li>","name":"鹿皮手套","id":360,"index":"DEERSKIN_GLOVES","owner":"HUNTRESS","rarity":2,"image":"iconAddon_deerskinGloves"},{"description":"用于涂抹在飞斧刀锋上的剧毒物。由极北蝰毒液与其他物质混合而成，可使受害者陷入无力症状。<br><li>被击中的逃生者会进入<b>疲劳</b>状态并持续<b>5秒</b>。</li>","name":"剧毒调和物","id":362,"index":"VENOMOUS_CONCOCTION","owner":"HUNTRESS","rarity":2,"image":"iconAddon_venomousConcoction"},{"description":"布满锈斑的斧头，造成的伤口极难治愈。<br><li>被击中的逃生者会受到<b><i>重伤</i></b>状态影响。</li>","name":"生锈斧头","id":363,"index":"RUSTY_HEAD","owner":"HUNTRESS","rarity":2,"image":"iconAddon_rustyHead"},{"description":"一块干净的彩色方头巾，印有碎花图案。萦绕着使女猎手充满精力与愤怒的回忆。<br><li><b>大幅减少</b>飞斧的蓄力时间。</li><li>效果可以被叠加。</li>","name":"碎花头巾","id":365,"index":"FLOWER_BABUSHKA","owner":"HUNTRESS","rarity":2,"image":"iconAddon_flowerBabushka"},{"description":"从某个士兵身上抢来的多功能腰带。多样的皮圈和皮套能使穿戴者轻松携带各种工具。<br><li>进入游戏后会携带<b>2个额外的</b>飞斧。</li><li>同时提高<b>2个</b>飞斧的最大携带量。</li><li>效果可以被叠加。</li>","name":"多功能腰带","id":366,"index":"INFANTRY_BELT","owner":"HUNTRESS","rarity":3,"image":"iconAddon_infantryBelt"},{"description":"一种非同寻常的调和剂，散发着不祥的微弱光芒。<br><li>被击中的逃生者会将气场显示给你并持续<b>5秒</b>。</li>","name":"发光调和剂","id":367,"index":"GLOWING_CONCOCTION","owner":"HUNTRESS","rarity":3,"image":"iconAddon_glowingConcoction"},{"description":"斧头上涂抹了能使接触者虚弱无力的污物。<br><li>被击中的逃生者会受到<b><i>重伤</i></b>与<b><i>出血</i></b>状态影响。</li><li>效果不会叠加。</li>","name":"污秽斧头","id":368,"index":"BEGRIMED_HEAD","owner":"HUNTRESS","rarity":3,"image":"iconAddon_begrimedHead"},{"description":"这款雕工粗糙的狐狸小雕像不超过几英寸。值得注意的是，隐身和狡猾与原始力量一样有效。<br><li>装填后获得<i><b>无法侦测</b></i>状态效果，持续<b>15秒</b>。</li>","name":"木狐狸","id":364,"index":"WOODEN_FOX","owner":"HUNTRESS","rarity":3,"image":"iconAddon_woodenFox"},{"description":"由迷雾铸造出的玻璃状斧头。温热的刀锋注入了恶灵的邪力。<br><li>飞斧成功击中后会使健康的逃生者立刻进入濒死状态。</li><li>最大可携带飞斧数量变为<b>1</b>。</li>","name":"精致斧头","flavor":"“光亮夺目的玻璃可将肉体与灵魂一并斩断。”","id":369,"index":"IRIDESCENT_HEAD","owner":"HUNTRESS","rarity":4,"image":"iconAddon_iridescentHead"},{"description":"从死去的士兵身上获取的包裹物，可以为脚踝和小腿提供保护和支撑。<br><li>女猎手没有飞斧时移速为<b>4.6米/秒</b>。</li>","name":"士兵绑腿","id":370,"index":"SOLDIERS_PUTTEE","owner":"HUNTRESS","rarity":4,"image":"iconAddon_soldiersPuttee"},{"description":"用来当劣质润滑油的变质油。<br><br><li><b>小幅减少</b>电锯成功命中逃生者后的冷却时间。</li>","name":"植物油","id":400,"index":"VEGETABLE_OIL_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_vegetableOil"},{"description":"一颗干净的电锯专用火花塞。<br><br><li><b>小幅增加</b>充能条消耗的速率。</li>","name":"火花塞","id":401,"index":"SPARK_PLUG_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_sparkPlug"},{"description":"用来打磨电锯链条的锉子。<br><li><b>小幅降低</b>暴走时间。</li>","name":"电锯锉","id":402,"index":"CHAINSAW_FILE_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_chainsawFile"},{"description":"一种限制引擎燃料吸收速率的机械装置，迫使电锯在稳定安全的速度下运作。<br><br><li>电锯将无法一击触发濒死状态。</li><li>额外获得<b>100%</b>电锯得分项的血点。</li>","name":"速度限制器","id":403,"index":"SPEED_LIMITER_C","owner":"CANNIBAL","rarity":0,"image":"iconAddon_speedLimiter"},{"description":"在点火系统中泵入更多的汽油，以保证快速强力的启动。<br><br><li><b>中幅增加</b>充能条消耗的速率。</li>","name":"化油器油杯","id":405,"index":"PRIMER_BULB_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_primerBulb"},{"description":"长锯条所需的替换坚固铁片。<br><br><li><b>小幅增加</b>触发暴走所需的暖机条。</li>","name":"长锯导板","id":406,"index":"LONG_GUIDE_BAR_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_longGuideBar"},{"description":"几道划痕覆盖在电锯的外壳上，这是一把炽热的尖刀留下的痕迹。回忆曾受到的训斥让使用者内心充满了对失败的恐惧。<br><br><li><b>小幅增加</b>使用电锯时的移动速度。</li><li><b>小幅增加</b>电锯充能所需时间。</li>","name":"刀痕外壳","id":407,"index":"KNIFE_SCRATCHES","owner":"CANNIBAL","rarity":1,"image":"iconAddon_knifeScratches"},{"description":"由黑煤气管制成的临时排气系统。<br><br><li><b>中幅减少</b>暴走时间。</li>","name":"自制消音器","id":408,"index":"HOMEMADE_MUFFLER_C","owner":"CANNIBAL","rarity":1,"image":"iconAddon_homemadeMuffler"},{"description":"一大碗热腾腾的辣酱，吃完让人感到温暖舒适。<br><br><li><b>小幅增加</b>使用印记后的猛冲时间。</li><li><b>小幅增加</b>额外电锯横扫判定。</li><br>","name":"辣酱","flavor":"“来撸串呀！”——德雷顿·索耶","id":411,"index":"CHILI","owner":"CANNIBAL","rarity":1,"image":"iconAddon_chili"},{"description":"微黄色的润滑油，索耶自行混合制成，用在家里需要润滑的地方。<br><br><li><b>中幅增加</b>触发暴走所需的暖机条。</li>","name":"润滑油","id":412,"index":"THE_GREASE","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theGrease"},{"description":"锯齿状的划痕覆盖在电锯的外壳上，这是生活在迷雾中的暗黑生物留下的痕迹。回忆曾受到的训斥与谩骂让使用者内心充满了对失败的恐惧。<br><br><li><b>中幅增加</b>使用电锯时的移动速度。</li><li><b>小幅增加</b>电锯充能所需时间。</li>","name":"野兽爪痕外壳","id":413,"index":"THE_BEASTS_MARKS","owner":"CANNIBAL","rarity":2,"image":"iconAddon_theBeastsMark"},{"description":"伤害力极大的锯条，被袭击到的受害者即使接受治疗，也会变成残疾。<br><li>被电锯攻击命中的逃生者会受到<b>重伤</b>状态影响。","name":"恐怖锯条","id":414,"index":"GRISLY_CHAIN","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsGrisly"},{"description":"专门为电锯所配的油，还有特殊的添加物，可以防止费油。<br><br><li>用电锯击倒一名逃生者，且你的恐惧范围内没有其他逃生者时，该逃生者的气场会被隐藏<b>20秒。</b></li>","name":"专用润滑油","id":415,"index":"SHOP_LUBRICANT_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_shopLubricant"},{"description":"该链条沾有秽物，会使触碰到的任何人虚弱。<br><br><li>电锯攻击命中逃生者会使其扔下道具。</li>","name":"污秽锯条","id":417,"index":"BEGRIMED_CHAINS_C","owner":"CANNIBAL","rarity":2,"image":"iconAddon_chainsBloody"},{"description":"可以增大深度规角度的工具，让锯条成为嗜血之器。<br><li><b>增加</b>充能数</li><li><b>小幅增加</b>充能时间。</li><li><b>小幅减少</b>电锯横扫的最大速度。</li>","name":"深度规","id":419,"index":"DEPTH_GUAGE_RAKE","owner":"CANNIBAL","rarity":3,"image":"iconAddon_depthGaugeRake"},{"description":"轻盈稳固的电锯机壳，带短锯导板，方便电锯的掌控。<br><br><li>暖机时，看到<b>8米</b>内逃生者的气场。</li>","name":"轻型电锯机壳","id":420,"index":"LIGHT_CHASSIS","owner":"CANNIBAL","rarity":3,"image":"iconAddon_lightChassis"},{"description":"锯条上锈迹斑斑，让电锯造成的伤口更难治愈。<br><br><li>被电锯所伤的逃生者遭受<b><i>重伤</i></b>状态影响，持续<b>90</b>秒。</li><li>此效果不可叠加。</li>","name":"生锈锯条","id":421,"index":"RUSTED_CHAIN","owner":"CANNIBAL","rarity":3,"image":"iconAddon_chainsRusted"},{"description":"一大桶与精肉绝配的网红辣酱。<br><br><li><b>中幅增加</b>使用印记后的猛冲时间。</li><li><b>中幅增加</b>额外电锯判定。</li><br>","name":"极品辣酱","flavor":"\\\\“一切奥秘尽在肉中。\\\\” -德雷顿·索耶","id":422,"index":"AWARD_WINNING_CHILI","owner":"CANNIBAL","rarity":3,"image":"iconAddon_awardwinningChili"},{"description":"光滑新鲜的薄肉片。血管闪烁着光芒，仿佛生命仍在其中流动。<br><br><li>用电锯攻击命中逃生者将为其补充充能数。</li><li>暴走最大持续时间限制为8秒。</li><br>","name":"荧虹肉","flavor":"“有时候我们会不相信发生的事情是真实的。掐一下自己，你就发现自己不是在做梦。”——帕姆·琼斯","id":423,"index":"IRIDESCENT_FLESH","owner":"CANNIBAL","rarity":4,"image":"iconAddon_iridescentFlesh"},{"description":"粗略绘制的指南，用于正确调校电锯化油器。<br><li>触发电锯横冲时自动消耗所有充能。</li><li><b>小幅增加</b>电锯冲刺时间</li><li><b>小幅减少</b>电锯横扫的最大速度。</li>","name":"化油器调节指南","id":424,"index":"CARBURETOR_TUNING_GUIDE","owner":"CANNIBAL","rarity":4,"image":"iconAddon_carburetorTuningGuide"},{"description":"一件小男孩的橘黄条纹T恤衫。上面绣着一个名字“杰西”。<br>逃生者在<b>梦中世界</b>时：<li><b>小幅提升</b><i>治疗</i>和<i>修理</i>进度条下降惩罚。</li>","name":"羊毛衫","id":450,"index":"WOOL_SHIRT","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_woolShirt"},{"description":"白蓝色的木块，上面描绘了两只吃草的羊羔，以及字母“S”。<li>当逃生者与<b>梦中罗网</b>或<b>梦中木板</b>互动时，逃生者获得<b>障目状态</b>并持续30秒。</li>","name":"绵羊积木","id":451,"index":"SHEEP_BLOCK","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_sheepBlock"},{"description":"一幅显然出自儿童之手的画作。<li>当一名逃生者触发<b>梦中罗网</b>时，你在<b>阴险</b>得分项中获得<b>200</b>额外血点。</li><li><b>中幅降低</b><b>梦中罗网</b>的减速效果。</li>","name":"孩子的画作","id":452,"index":"KIDS_DRAWING","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_kidsDrawing"},{"description":"一把小型爪耙，这是每位园丁老手必备的工具。<br>将<b>梦中罗网</b>替换为<b>梦中木板</b>。<li>7枚<b>梦中代币。</b></li>","name":"园艺耙","id":453,"index":"GARDEN_RAKE","owner":"NIGHTMARE","rarity":0,"image":"iconAddon_gardenRake"},{"description":"适合修剪灌木丛的家用工具。<li>将<b>梦中罗网</b>替换为<b>梦中木板</b>。</li><li>7枚<b>梦中代币</b>。</li><li>逃生者与<b>梦中平台</b>互动时，其气场将向<i>梦魇</i>暴露<b>4秒</b>。</li>","name":"原型爪","id":454,"index":"PROTOTYPE_CLAWS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_prototypeClaw"},{"description":"坚固结实的户外登山绳，捆住任何东西都很方便。<br>当逃生者处于<b>梦中世界</b>时：<li>其修理发电机的声音范围<b>扩大8米</b>。</li>","name":"登山绳","id":455,"index":"OUTDOOR_ROPE","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_outdoorRope"},{"description":"一副粗狂大胆的炭笔画，署名是南茜·H。<li>每有一名逃生者处于<b>梦中世界</b>中，<b>小幅提升</b><b>梦境投影</b>力量恢复速度。</li>","name":"南茜的速写","id":456,"index":"NANCYS_SKETCH","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_nancysSketch"},{"description":"一条小女孩的绿色裙子，上面有一根丝白色缎带。<br>逃生者在<b>梦中世界</b>时：<li><b>小幅提升</b><i>治疗</i>与<i>修理</i>进度条下降惩罚。</li><li>当逃生者<i>治疗</i>或<i>修理</i>技能检验失败时，其气场将向<i>梦魇</i>揭示<b>3秒</b>。</li>","name":"绿裙子","id":457,"index":"GREEN_DRESS","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_greenDress"},{"description":"白紫色的木块，上面描绘了一只睡觉的猫，以及字母“C”。<li>当逃生者与<b>梦中罗网</b>或<b>梦中木板</b>互动后，逃生者获得<b>出血状态</b>并持续60秒。</li>","name":"猫咪积木","id":458,"index":"CAT_BLOCK","owner":"NIGHTMARE","rarity":1,"image":"iconAddon_catBlock"},{"description":"白红色的木块，上面描绘了一只神气活现的独角兽，以及字母“U”。<li>当逃生者与<b>梦中罗网</b>互动或<b>梦中木板</b>互动后，逃生者获得<b>障目状态</b>并持续60秒。</li>","name":"独角兽积木","id":459,"index":"UNICORN_BLOCK","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_unicornBlock"},{"description":"锈迹斑斑但仍然坚固的锁链，曾用来悬挂秋千座椅。<br>当逃生者处于<b>梦中世界</b>时：<li>其脚步<b>声音提高50%</b>。</li>","name":"悬挂链条","id":460,"index":"SWING_CHAINS","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_swingChains"},{"description":"一幅人物画像，由南茜·霍尔布鲁克在巴德姆幼儿园所作，被当成珍贵的回忆而珍藏。<li>每有一名逃生者处于<b>梦中世界</b>中，<b>中幅提升</b><b>梦境投影</b>力量恢复速度。</li>","name":"南茜的杰作","id":461,"index":"NANCYS_MASTERPIECE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_nancysMasterpiece"},{"description":"一根用来跳绳的长绳，已经破旧不堪。<br>当逃生者处于<b>梦中世界</b>时：<li>其痛苦呻吟<b>声音提高50%</b>。</li>","name":"跳绳","id":462,"index":"JUMP_ROPE","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_jumpRope"},{"description":"一条小女孩的浅蓝色白蕾丝边裙子，前面有大片划痕。<br>逃生者在<b>梦中世界</b>时：<li><b>小幅提升</b><i>治疗</i>与<i>修理</i>进度条下降惩罚。</li><li>当逃生者<i>治疗</i>或<i>修理</i>技能检验失败时，其气场将向<i>梦魇</i>揭示<b>4秒</b>。</li>","name":"蓝裙子","id":463,"index":"BLUE_DRESS","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_blueDress"},{"description":"一个空的药瓶，曾用来存放一种叫做“安非他明”的药物。<li>逃生者能间歇性看到<i>梦魇</i>的范围缩小为<b>12米</b>至<b>24米</b>。</li><li>逃生者在<b>24米</b>范围外看不到<i>梦魇</i>。</li><li>搬运其他逃生者的清醒逃生者看不到<i>梦魇</i>。</li>","name":"药瓶","id":464,"index":"PILL_BOTTLE","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_pillBottle"},{"description":"一罐不稳定的易燃物。<li>将<b>梦中罗网</b>替换为<b>梦中平台</b>。</li><li>7枚<b>梦中代币</b>。</li><li>逃生者与<b>梦中木板</b>互动时，其气场将向<i>梦魇</i>暴露<b>6秒</b>。</li>","name":"涂料稀释剂","id":465,"index":"PAINT_THINNER","owner":"NIGHTMARE","rarity":2,"image":"iconAddon_paintThinner"},{"description":"巴德姆幼儿园的一张大尺寸94-95届班级照，照片中充满了欢声笑语。<li>不再能取消<b>梦境投影</b>动作。</li><li>所有发电机在<b>梦魇</b>引导<b>梦境投影</b>能力时会喷洒血液。</li><li><i>梦魇</i>的投影在使用<b>梦境投影</b>时不会出现。</li>","name":"班级照","id":466,"index":"CLASS_PHOTO","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_classPhoto"},{"description":"破破烂烂并被烧焦的木块，上面只能依稀辨识出字母“Z”。<li>当逃生者与<b>梦中陷阱</b>或<b>梦中木板</b>互动后，逃生者将承受<b>出血状态</b>并持续<b>60</b>秒。</li><li>如果逃生者处于健康状态，则其在<b>出血状态</b>持续时间内会不停流血。</li>","name":"“Z”字积木","id":467,"index":"Z_BLOCK","owner":"NIGHTMARE","rarity":3,"image":"iconAddon_zBlock"},{"description":"大号涂料刷，上面还沾着深红色涂料。<li>所有逃生者开局就处于<b>梦中世界</b>。</li><li><b>梦中世界</b>里的逃生者技能检验失败时不会醒来。</li>","name":"涂料刷","id":468,"index":"RED_PAINT_BRUSH","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_redPaintBrush"},{"description":"装满照片的黑色纸板箱。<br>当逃生者处于<b>梦中世界</b>时：<li>最近打开的逃生大门将被阻挡<b>15秒</b></li>","name":"黑盒子","id":469,"index":"BLACK_BOX","owner":"NIGHTMARE","rarity":4,"image":"iconAddon_blackBox"},{"description":"竖锯盒子的改装配件：涂了润滑油的零件让搜索过程变得更加精密。<br><li><b>小幅增加</b>搜索竖锯盒子时技能检验的出现几率。</li>","name":"车间润滑油","id":500,"index":"WORKSHOP_GREASE","owner":"PIG","rarity":0,"image":"iconAddon_workshopGrease"},{"description":"糜烂生活的典型象征。过去的回忆让她坚定了信念。<br><li><b>小幅减少</b>伏击失败后的冷却时间。</li>","name":"坏掉的注射器","id":501,"index":"SHATTERED_SYRINGE","owner":"PIG","rarity":0,"image":"iconAddon_shatteredSyringe"},{"description":"一个癌症病患的病例。让阅读者在绝望中破釜沉舟。<br><li><b>小幅减少</b>发动伏击的蓄力时间。</li>","name":"约翰的病历档案","id":502,"index":"JOHNS_MEDICAL_FILE","owner":"PIG","rarity":0,"image":"iconAddon_johnsMedicalFile"},{"description":"布料扎实的皮革腰带，能够提高佩戴者的敏捷性。<br><li><b>小幅减少</b>隐匿所需时间。</li>","name":"战术皮带","id":503,"index":"COMBAT_STRAPS","owner":"PIG","rarity":0,"image":"iconAddon_combatStraps"},{"description":"竖锯制作的录像带，内容是向阿曼达阐释游戏规则。过去的回忆让她坚定了信念。<br><li><b>小幅减少</b>发动伏击的蓄力时间。</li><li><b>小幅减少</b>伏击失败后的冷却时间。</li>","name":"录像带","id":504,"index":"VIDEO_TAPE","owner":"PIG","rarity":1,"image":"iconAddon_videoTape"},{"description":"下颚撕裂器的改装配件：加装在内侧的锋利刀片让受害者每分每秒都受到疼痛折磨。<br><li>被安装下颚撕裂器的逃生者会受到<b><i>出血状态</b></i>影响。</li>","name":"美工刀片","id":505,"index":"UTILITY_BLADES","owner":"PIG","rarity":1,"image":"iconAddon_utilityBlades"},{"description":"竖锯盒子的改装配件：加装了刀片刺网的竖锯盒子不但给搜索过程增加了极大的难度，还会让过程遭受疼痛。<br><li><b>中幅增加</b>搜索竖锯盒子时技能检验的出现几率。</li>","name":"刀片刺网","id":506,"index":"RAZOR_WIRES","owner":"PIG","rarity":1,"image":"iconAddon_razerWire"},{"description":"遗嘱的一部分，一个带锁的木头盒子，里面用绸缎作为内衬。<br><li><b>增加</b><b>1个</b>下颚撕裂器。<br>","name":"遗嘱","id":507,"index":"LAST_WILL","owner":"PIG","rarity":1,"image":"iconAddon_lastWill"},{"description":"下颚撕裂器的改装配件：厚重的布料面罩，涂抹了镇静剂，使受害者更难集中精力。<br><li>被安装下颚撕裂器的逃生者会受到<b><i>障目状态</b></i>影响。</li><li>不会对竖锯盒子的高亮标识造成影响。</li>","name":"面罩","id":508,"index":"FACE_MASK","owner":"PIG","rarity":1,"image":"iconAddon_faceMask"},{"description":"下颚撕裂器的改装配件：一种非致命性的毒素，但会削弱人体机能，给身体带来的影响几乎不可能逆转。<br><li>被安装下颚撕裂器的逃生者会受到<b><i>疲劳状态</b></i>影响。</li>","name":"缓释毒素","id":509,"index":"SLOW_RELEASE_TOXIN","owner":"PIG","rarity":2,"image":"iconAddon_slowReleaseToxin"},{"description":"下颚撕裂器的改装配件：口钉上覆盖着高刺激性且易挥发的锈斑，使伤口极难治愈。<br><li>被安装下颚撕裂器的受伤逃生者会受到<i><b>重伤状态</b></i>影响。</li>","name":"生锈配件","id":510,"index":"RUSTY_ATTACHMENTS","owner":"PIG","rarity":2,"image":"iconAddon_rustyAttachments"},{"description":"一种让人感到不安却又独具匠心的陷阱设计，纸上有竖锯写下的注解。<br><li><b>增加</b><b>1个</b>竖锯盒子。</li>","name":"竖锯的设计图","id":511,"index":"JIGSAWS_SKETCH","owner":"PIG","rarity":3,"image":"iconAddon_jigsawsSketch"},{"description":"竖锯盒子的改装配件：加装了联锁刀片的竖锯盒子会让你在鲁莽的搜索过程中割破手腕。<br><li><b>巨幅增加</b>搜索竖锯盒子时技能检验失败的惩罚。</li>","name":"联锁刀片","id":512,"index":"INTERLOCKING_RAZOR","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsSketch"},{"description":"一些机械零件，能够增加竖锯盒子的复杂程度或简化下颚撕裂器的安装流程。<br><li><b>小幅增加</b>逃生者打开竖锯盒子所需时间。</li><li><b>小幅减少</b>安装下颚撕裂器所需时间。</li>","name":"一袋零件","id":513,"index":"BAG_OF_GEARS","owner":"PIG","rarity":2,"image":"iconAddon_bagOfGears"},{"description":"一个被改装过的计时器。加装在机械装置中的弹簧强制加快了齿轮的运转速度。<br><li><b>中幅减少</b>下颚撕裂器的计时器时长。</li>","name":"改装计时器","id":514,"index":"TAMPERED_TIMER","owner":"PIG","rarity":3,"image":"iconAddon_tamperedTimer"},{"description":"一种让人感到不安却又独具匠心的陷阱设计，纸上有竖锯画的细节设计图。<br><li><b>增加</b><b>1个</b>竖锯盒子。</li><li><b>中幅增加</b>下颚撕裂器的计时器时长。</li>","name":"竖锯的注释图","id":515,"index":"JIGSAWS_ANNOTATED_PLAN","owner":"PIG","rarity":2,"image":"iconAddon_jigsawsAnnotatedPlan"},{"description":"一大堆机械零件，能够增加竖锯盒子的复杂程度或简化下颚撕裂器的安装流程。<br><li><b>大幅增加</b>逃生者打开竖锯盒子所需时间。</li><li><b>中幅减少</b>安装下颚撕裂器所需时间。</li>","name":"一箱零件","id":516,"index":"CRATE_OF_GEARS","owner":"PIG","rarity":3,"image":"iconAddon_crateOfGears"},{"description":"一个黑色金属盒子，里面放着一把刀和一些医疗用品，比如绷带和敷布。刀口越深越能够减轻压力和唤醒感官。<br><li><b>剥夺</b>门徒解读竖锯盒子气场的能力。</li><li>当逃生者解除下颚撕裂器后<b>你会得到提示</b>。</li><li>逃生者解除下颚撕裂器时其气场会向你暴露<b>6秒</b>。</li>","name":"阿曼达的秘密","id":517,"index":"AMANDAS_SECRET","owner":"PIG","rarity":3,"image":"iconAddon_amandasSecret"},{"description":"不是所有游戏都要用同一个规则。<br><li><b>剥夺</b>逃生者看见竖锯盒子高亮标识的能力，直到他们的下颚撕裂器开始计时。</li>","name":"游戏规则No.2","flavor":"“听好了，这是规则。”——竖锯","id":518,"index":"RULES_SET_NO_2","owner":"PIG","rarity":4,"image":"iconAddon_rulesSetN2"},{"description":"一封寄给阿曼达的恐吓信。让阅读者充满激躁与愤怒。<br><li>隐匿状态时可以看到12米内的逃生者气场。</li><li><b>减少</b><b>3个</b>下颚撕裂器。</li><li><b>减少</b><b>2个</b>竖锯盒子。</li>","name":"阿曼达的信","flavor":"“阿曼达，吉尔流产的那晚你和塞西尔在一起。是你们害死了她的孩子。你知道，我也知道，” -阿曼达的信","id":519,"index":"AMANDAS_LETTER","owner":"PIG","rarity":4,"image":"iconAddon_amandasLetter"},{"description":"一对发霉的鞋垫，但能给疲惫的双足带来些许放松。<br><li><b>中幅</b>提高装填时的移动速度。</li>","name":"恶臭鞋垫","id":550,"index":"SMELLY_INNER_SOLES","owner":"CLOWN","rarity":2,"image":"iconAddon_smellyInnerSoles"},{"description":"亮橙色的羽毛，质感柔软。<br><li><b>小幅</b>缩短投掷冷却时间。</li>","name":"知更鸟的羽毛","id":551,"index":"ROBIN_FEATHER","owner":"CLOWN","rarity":0,"image":"iconAddon_robinFeather"},{"description":"小丑标志性服装的一部分，半指手套能使佩戴者操作更灵活。\\n<li>改变投掷酒瓶的抛物线。</li>\\n","name":"半指游行手套","id":552,"index":"FINGERLESS_PARADE_GLOVES","owner":"CLOWN","rarity":0,"image":"iconAddon_fingerlessParadeGloves"},{"description":"一种有机化合物，用于麻醉用途。<br><li><b>小幅</b>延长中毒效果的持续时间。</li>","name":"聚会酒瓶","id":553,"index":"PARTY_BOTTLE","owner":"CLOWN","rarity":0,"image":"iconAddon_partyBottle"},{"description":"与精炼毒酒瓶完美契合的后软木塞。<br><li><b>中幅</b>缩短装填时间。</li> ","name":"厚软木塞","id":554,"index":"THICK_CORK_STOPPER","owner":"CLOWN","rarity":1,"image":"iconAddon_thickCorkStopper"},{"description":"一个空瓶子，残留着干掉的糖和血。<br><li>进入游戏时携带<b>1个额外的</b>酒瓶。</li><li>同时提高<b>1瓶</b>最大携带量。</li>","name":"粘粘的苏打水瓶","id":555,"index":"STICKY_SODA_BOTTLE","owner":"CLOWN","rarity":1,"image":"iconAddon_stickySodaBottle"},{"description":"一根黑色的羽毛，有着翡翠般的光泽，质感非常柔然。<br><li><b>中幅</b>缩短投掷冷却时间。</li>","name":"八哥的羽毛","id":556,"index":"STARLING_FEATHER","owner":"CLOWN","rarity":1,"image":"iconAddon_starlingFeather"},{"description":"一种具有挥发性的化学物质，会刺激呼吸道，但会促进精炼解药的吸收。<br><li><b>中幅</b>提升振奋状态持续时间。</li>","name":"化学溶剂","id":557,"index":"SOLVENT_JUG","owner":"CLOWN","rarity":1,"image":"iconAddon_solventJug"},{"description":"稀薄的透明液体，吸入后会使人神志不清。<br><li>中毒者会进入<b>障目状态</b>，并持续<b>30秒</b>。</li>","name":"煤油桶","id":558,"index":"KEROSENE_CAN","owner":"CLOWN","rarity":1,"image":"iconAddon_keroseneCan"},{"description":"永恒的经典，你不会再看到相同的东西。<br><li>让精炼毒酒云雾变为黄色。</li><li>让精炼解药云雾变为紫色。</li>","name":"成人录影带","id":559,"index":"VHS_PORN","owner":"CLOWN","rarity":0,"image":"iconAddon_vhsPorn"},{"description":"一种有强烈腐蚀性的化学物质。<br><li>中毒者将受到<b>重伤</b>状态影响。</li>","name":"硫酸","id":560,"index":"SULFURIC_ACID_VIAL","owner":"CLOWN","rarity":2,"image":"iconAddon_sulfuricAcidVial"},{"description":"一种烈性化学物质，会带来强烈的刺激性，灼烧感和肺损伤。<br>中毒者将受到<b>中幅</b>的额外<b>减速效果</b>惩罚。","name":"漂白剂","id":561,"index":"FLASK_OF_BLEACH","owner":"CLOWN","rarity":2,"image":"iconAddon_flaskOfBleach"},{"description":"<b>中幅</b>扩大精炼解药云雾的范围。","name":"鹿角之魂","id":562,"index":"SPIRIT_OF_HARTSHORN","owner":"CLOWN","rarity":2,"image":"iconAddon_spiritOfHartshorn"},{"description":"散发着香气的有机化合物，有强大的麻醉效果。<br><li><b>中幅</b>扩大精炼毒酒的毒气范围。</li>","name":"三氯甲烷","id":563,"index":"BOTTLE_OF_CHLOROFORM","owner":"CLOWN","rarity":2,"image":"iconAddon_bottleOfChloroform"},{"description":"有些弄在脸上，有些弄在酒里。未知的化合物会提升解药效力。<br><li><b>大幅</b>提升振奋状态持续时间。</li>","name":"花哨化妆盒","id":564,"index":"GARISH_MAKEUP_KIT","owner":"CLOWN","rarity":3,"image":"iconAddon_garishMakeupKit"},{"description":"唯一剩下的便宜好时光，伴随着一阵剧烈的头痛。<br><li>进入游戏时携带<b>2个</b>额外酒瓶。</li><li>同时提高<b>2</b>瓶最大携带量。</li>","name":"廉价杜松子酒","id":565,"index":"CHEAP_GIN_BOTTLE","owner":"CLOWN","rarity":3,"image":"iconAddon_cheapGinBottle"},{"description":"一种具有高挥发性的有机化合物，这样的浓度已经具有毒性。<br><li><b>大幅</b>延长中毒效果的持续时间。</li>","name":"15vol%乙醚","id":566,"index":"ETHER_15_VOL","owner":"CLOWN","rarity":3,"image":"iconAddon_ether15"},{"description":"一盒恐怖的残缺手指收藏。使小丑充满渴望，更专注于麻药制作本领。<br><li>任何逃生者或杀手处于振奋状态时，都能看到附近16米范围内其他所有逃生者或杀手的气场。</li>","name":"雪茄盒","id":567,"index":"CIGAR_BOX","owner":"CLOWN","rarity":3,"image":"iconAddon_cigarBox"},{"description":"来自一个大块头纹身男的中指。有机油的味道。<br><li>中毒者或振奋者的气场将向你暴露<b>6秒</b>。</li>","name":"纹身男的中指","id":568,"index":"TATTOOS_MIDDLE_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_tattoosMiddleFinger"},{"description":"来自一个红发女郎的小拇指，有香水和指甲油的味道。<br><li>被精炼毒酒直接砸中的逃生者会进入<b>危险状态</b>。</li>","name":"红发女郎的小拇指","id":569,"index":"REDHEADS_PINKY_FINGER","owner":"CLOWN","rarity":4,"image":"iconAddon_redheadsPinkyFinger"},{"description":"一双舒适的草履鞋，穿脱自如。<li>小幅增加在灵界的移动速度。</li><li>效果可以被叠加</li>","name":"草履","id":600,"index":"ZORI","owner":"SPIRIT","rarity":0,"image":"iconAddon_zori"},{"description":"一种带来幸福快乐的护身符。<li>小幅延长能够在灵界行动的时间。</li><li>效果可以被叠加</li>","name":"幸福御守","id":601,"index":"SHIAWASE_AMULET","owner":"SPIRIT","rarity":0,"image":"iconAddon_ShiawaseAmulet"},{"description":"一千个千纸鹤中能够实现你的愿望的那一个。<li>小幅加快灵能恢复速度。</li><li>效果可以被叠加</li>","name":"千纸鹤","id":602,"index":"ORIGAMI_CRANE","owner":"SPIRIT","rarity":0,"image":"iconAddon_origamiCrane"},{"description":"一把窄齿竹梳子，可以用来温柔的梳理凌乱的头发。<li>小幅增加山岡家族的作祟激活充能速度。</li><li>效果可以叠加</li>","name":"竹梳子","id":603,"index":"GIFTED_BAMBOO_COMB","owner":"SPIRIT","rarity":0,"image":"iconAddon_giftedBambooComb"},{"description":"一段柔软的发带，可以用来整理凌乱的头发。<li>中幅增加山岡家族的作祟激活充能速度。</li><li>效果可以叠加</li>","name":"白色发带","id":604,"index":"WHITE_HAIR_RIBBON","owner":"SPIRIT","rarity":1,"image":"iconAddon_whiteHairRibbon"},{"description":"表镜碎裂的手表。表带上还有着潦草的“凛”字样。<li>中幅加快灵能恢复速度。</li><li>效果可以被叠加</li>","name":"凛的手表","id":605,"index":"RINS_BROKEN_WATCH","owner":"SPIRIT","rarity":1,"image":"iconAddon_rinsBrokenWatch"},{"description":"一顶沾满污渍的运动帽，上面印着某中学校标。上面缝着“凛”字样的姓名标签。<li>中幅增加在灵界的移动速度。</li><li>效果可以被叠加</li>","name":"肮脏的运动帽","id":606,"index":"MUDDY_SPORTS_DAY_CAP","owner":"SPIRIT","rarity":1,"image":"iconAddon_muddySportCap"},{"description":"一种带来好运的护身符。<li>中幅延长能够在灵界行动的时间。</li><li>效果可以被叠加</li>","name":"开运御守","id":607,"index":"KAIUN_TALISMAN","owner":"SPIRIT","rarity":1,"image":"iconAddon_kaiunTalisman"},{"description":"深蓝绿色杜松盆栽。曾是山岡家族家风的象征。<li>小幅增加常规移动时的隐身（残影）频率。</li><li>效果可以被叠加</li>","name":"杜松盆栽","id":608,"index":"JUNIPER_BONSAI","owner":"SPIRIT","rarity":1,"image":"iconAddon_juniperBonzai"},{"description":"一把生锈的横笛，能吹出一种深沉的乐声。<li>大幅加快灵能恢复速度。</li><li>效果可以被叠加</li>","name":"生锈长笛","id":609,"index":"RUSTY_FLUTE","owner":"SPIRIT","rarity":2,"image":"iconAddon_rustyFlute"},{"description":"必胜御守","name":"必胜御守","id":610,"index":"KATSUMORI_TALISMAN","owner":"SPIRIT","rarity":2,"image":"iconAddon_katsumoriTalisman"},{"description":"武士刀的护手。为山岡家族打造。<li>小幅延长现身过程的时长。</li><li>小幅增加现身时的移动速度。</li><li>效果可以被叠加</li>","name":"武士刀镡","id":611,"index":"KATANA_TSUBA","owner":"SPIRIT","rarity":2,"image":"iconAddon_katanaTsuba"},{"description":"一双轻便的室内鞋。<li>大幅增加在灵界的移动速度。</li><li>效果可以被叠加</li>","name":"肮脏的室内便鞋","id":612,"index":"DIRTY_UWABAKI","owner":"SPIRIT","rarity":2,"image":"iconAddon_dirtyUwabaki"},{"description":"布满血渍的发夹。<li>大幅增加山岡家族的作祟激活充能速度。</li><li>效果可以叠加</li>","name":"血腥发夹","id":613,"index":"BLOODY_HAIR_BROOCH","owner":"SPIRIT","rarity":2,"image":"iconAddon_bloodyHairBroochi"},{"description":"一种强大的护身符，保护你的努力免遭厄运侵扰。<li><b>极大延长</b>山岡家族的作祟持续时间。</li><li><b>小幅降低</b>山岡家族的作祟移动速度。</li>","name":"厄除御守","id":614,"index":"YAKUYOKE_AMULET","owner":"SPIRIT","rarity":3,"image":"iconAddon_yakuyokeAmulet"},{"description":"武士刀的刀鞘。为山岡家族打造。<li>中幅延长现身过程的时长。</li><li>中幅增加现身时的移动速度。</li>","name":"刀鞘","id":615,"index":"WAKIZASHI_SAYA","owner":"SPIRIT","rarity":3,"image":"iconAddon_wakizashiSaya"},{"description":"一串念珠手镯，蕴含着强大的神圣咒语。<li>使用力量时发出的声响会被恐惧范围外的所有逃生者听到。</li>","name":"念珠手镯","id":616,"index":"PRAYER_BEADS_BRACELET","owner":"SPIRIT","rarity":3,"image":"iconAddon_prayersBeads"},{"description":"一朵破碎的，干燥的樱花。曾象征着死亡。<li>小幅延长常规移动时的隐身（残影）时长。</li><li>小幅增加常规移动时的隐身（残影）频率。</li>","name":"干花","id":617,"index":"DRIED_CHERRY_BLOSSOM","owner":"SPIRIT","rarity":3,"image":"iconAddon_driedCherryBlossom"},{"description":"一个刻着“送给宝贝女儿”字样的银戒指。<li>巨幅增加在灵界的移动速度。</li><li>进入灵界后将无法感知到划痕（脚印）。</li>","name":"母女戒","id":618,"index":"MOTHER_DAUGHTER_RING","owner":"SPIRIT","rarity":4,"image":"iconAddon_motherDaughterRing"},{"description":"一副中老年眼镜，它的主人是一个工作过度的工薪族。<li>在灵界中也可以看到逃生者的血迹。</li>","name":"父亲的眼镜","id":619,"index":"FATHERS_GLASSES","owner":"SPIRIT","rarity":4,"image":"iconAddon_fathersGlasses"},{"description":"一个曾经美观、带有磨损笑脸的明黄色纽扣。<li>野性狂暴期间击中被杀手本能标记的逃生者会对其施加障目状态效果，持续60秒。</li>","name":"笑脸饰针","id":650,"index":"SMILEY_FACE_PIN","owner":"LEGION","rarity":0,"image":"iconAddon_smileyFaceButton"},{"description":"一把刻着很深斜条的木尺。<li><b>小幅降低</b>力量槽恢复需要的时间。</li>","name":"划痕标尺","id":651,"index":"SCRATCHED_RULER","owner":"LEGION","rarity":0,"image":"iconAddon_scratchedRuler"},{"description":"一张有待完成的恶作剧任务名单，让人想起那些光辉的日子。<li><b>小幅增加</b>野性狂暴的持续时间。</li>","name":"伤害列表","id":652,"index":"MISCHIEF_LIST","owner":"LEGION","rarity":0,"image":"iconAddon_mischiefList"},{"description":"一个宽体灰红相间的编制手环。上面用黑色墨水潦草地写着“F J S J”几个粗体字母，清晰可见。<li><b>小幅扩大</b>杀手本能的侦测范围。</li>","name":"友谊手镯","id":653,"index":"FRIENDSHIP_BRACELET","owner":"LEGION","rarity":0,"image":"iconAddon_friendshipBracelet"},{"description":"含有大量咖啡因的药片，进行考试或其他体力消耗较多的活动时格外敏捷。<li><b>中幅扩大</b>杀手本能的侦测范围。</li>","name":"不眠药丸","id":654,"index":"NEVERSLEEP_PILLS","owner":"LEGION","rarity":1,"image":"iconAddon_friendshipBracelet"},{"description":"一幅从笔记本上撕下的军团壁画速写。<li><b>中幅增加</b>野性狂暴持续时间。</li>","name":"壁画速写","id":655,"index":"MURAL_SKETCH","owner":"LEGION","rarity":1,"image":"iconAddon_muralSketch"},{"description":"一个主要由流行民歌和悲伤歌曲组成的，并让人压抑的黑色混音带。<li><b>小幅减少</b>野性狂暴结束后的疲劳。</li>","name":"朱莉的混音带","id":656,"index":"JULIES_MIX_TAPE","owner":"LEGION","rarity":1,"image":"iconAddon_juliesMixtape"},{"description":"一把镌刻着敌人姓名的木尺。<li><b>中幅减少</b>力量槽恢复需要的时间。</li>","name":"蚀刻标尺","id":657,"index":"ETCHED_RULER","owner":"LEGION","rarity":1,"image":"iconAddon_etchedRuler"},{"description":"一个曾经美观、带有磨损笑脸的明黄色纽扣。军团的标志性道具。<li>在<i>野性狂暴</i>生效期间，击中被杀手本能标记的逃生者会对其施加<b><i>重伤</i></b>状态。</li>","name":"涂鸦笑脸饰针","id":658,"index":"DEFACED_SMILEY_PIN","owner":"LEGION","rarity":1,"image":"iconAddon_defacedSmileyButton"},{"description":"一个手工纽扣，表面印着军团。专门用于恐吓。<li>野性狂暴期间击中被杀手本能标记的逃生者会对其施加不治状态效果，持续60秒。</li>","name":"军团饰针","id":659,"index":"THE_LEGION_PIN","owner":"LEGION","rarity":2,"image":"iconAddon_theLegionButton"},{"description":"快速而惊险刺激的混音带，播放着激动人心的歌曲，节奏急凑。<li><b>巨幅扩大杀手本能的</b>侦测范围。</li>","name":"苏西的混音带","id":660,"index":"SUSIES_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_suziesMixtape"},{"description":"一本充满想象和令人回味的素描书，尽管有些奇怪的草图。<li><b>大幅增加</b>野性狂暴持续时间。</li>","name":"失窃的素描簿","id":661,"index":"STOLEN_SKETCH_BOOK","owner":"LEGION","rarity":2,"image":"iconAddon_stolenSketchbook"},{"description":"这把剑上带着污渍，使得伤口特别难以愈合。<li><b>小幅增加</b>逃生者完成缝合行动所需的时间。</li>","name":"致命之刃","id":662,"index":"NASTY_BLADE","owner":"LEGION","rarity":2,"image":"iconAddon_nastyBlade"},{"description":"激动人心的歌曲和美妙动听的节奏组合在一起，适合生活不如意时放松身心。<li><b>中幅减少</b>野性狂暴结束后的疲劳。</li>","name":"乔伊的混音带","id":663,"index":"JOEYS_MIX_TAPE","owner":"LEGION","rarity":2,"image":"iconAddon_joeysMixtape"},{"description":"从奥蒙德公共图书馆偷来的一份纸质医学论文，简单地介绍了一项关于病变和刺伤的研究。<li><b>中幅减少</b>所有逃生者受到深度伤口影响的持续时间。</li>","name":"刺伤研究","id":664,"index":"STAB_WOUNDS_STUDY","owner":"LEGION","rarity":3,"image":"iconAddon_stabWoundsStudy"},{"description":"没有你的音乐相伴，永远不要执行杀戮任务。曲目列表里都是失真的声音和喧闹的打击乐，刺伤你的耳膜。<li>使野性狂暴攻击能<b>大幅减少</b>逃生者的深度伤口计时器。</li>","name":"弗兰克的混音带","id":665,"index":"FRANKS_MIX_TAPE","owner":"LEGION","rarity":3,"image":"iconAddon_franksMixtape"},{"description":"这把剑上沾满了血迹和污渍，使得伤口尤其难以愈合。<li><b>中幅增加</b>逃生者完成缝合行动所需的时间。</li>","name":"污秽之刃","id":666,"index":"FILTHY_BLADE","owner":"LEGION","rarity":3,"image":"iconAddon_filthyBlade"},{"description":"从清洁工的安息之地取得的一把土。它散发着奇异的寒意。<li><b>大幅减少</b>野性狂暴结束后的疲劳。</li>","name":"寒土","id":667,"index":"COLD_DIRT","owner":"LEGION","rarity":3,"image":"iconAddon_coldDirt"},{"description":"一个以军团塑像为原型，使用迷雾塑造的玻璃形状的纽扣。表面温暖光滑，充斥着恶灵的力量。<br><br>在野性狂暴期间受到深度伤口效果影响时：<br><li>你的恐惧范围效果影响<b>整个地图。</b></li><li>你跳过的所有木板<b>立即断裂。</b></li><br>该效果一直持续到力量槽耗尽。<br>","name":"荧光纽扣","flavor":"“荧光玻璃消耗的青春放大和拓宽了恶灵的影响范围。” ","id":668,"index":"IRIDESCENT_BUTTON","owner":"LEGION","rarity":4,"image":"iconAddon_iridescentButton"},{"description":"来自另一个世界的黑暗节奏、猛烈的碎片和神秘莫测的声音，使脑中满是震动的第六感。<li>使用野性狂暴期间，<b>发电机的修复进度</b>取决于<b>它们气场的强弱。</b></li>","name":"冒烟的混音带","id":669,"index":"FUMING_MIX_TAPE","owner":"LEGION","rarity":4,"image":"iconAddon_fumingMixtape"},{"description":"碎片状的碑碣上带有腐蚀的咒语，最初用于清除疾病和全身不适的感觉。<li><b>小幅缩短</b>虔诚之池激活时间。</li><li><b>小幅加快</b>持有腐烂倾泻时的移动速度。</li>","name":"祈祷文碎片","id":700,"index":"PRAYER_TABLET_FRAGMENT","owner":"PLAGUE","rarity":0,"image":"iconAddon_prayerTabletFragment"},{"description":"从乳香树中提取的珍贵树脂，因其甜蜜的柑橘香味而在各种仪式中广泛使用。<li><b>小幅加快</b>为肮脏倾泻充能时的移动速度。</li>","name":"乳香","id":701,"index":"OLIBANUM_INCENSE","owner":"PLAGUE","rarity":0,"image":"iconAddon_olibanumIncense"},{"description":"由多孔石头制成的圆柱形封印，展示了有翼神灵的仪式场景。<li><b>小幅延长</b>物体的感染时间。</li>","name":"石灰石封印","id":702,"index":"LIMESTONE_SEAL","owner":"PLAGUE","rarity":0,"image":"iconAddon_limestoneSeal"},{"description":"一种苦涩且刺鼻的碎根药膏，这些碎根在鱼盐水中腌制了三天随后在酒中腌制了两天。适用于皮疹。<li><b>小幅缩短</b>肮脏倾泻的冷却时间。","name":"治疗药膏","id":703,"index":"HEALING_SALVE","owner":"PLAGUE","rarity":0,"image":"iconAddon_healingSalve"},{"description":"一块肥皂石护身符粗糙地刻有一个驱除疾病的有翼神灵。赐予穿戴者无限忠诚。<li><b>小幅延长</b>腐烂倾泻的持续时间。</li>","name":"预防护身符","id":704,"index":"PROPHYLACTIC_AMULET","owner":"PLAGUE","rarity":1,"image":"iconAddon_prophylacticAmulet"},{"description":"一种起泡，浑浊的液体，使空气中弥漫草药和酒精的香气。直接涂在水泡上。\\n<li><b>中幅缩短</b>肮脏倾泻的冷却时间。</li>","name":"强效酊剂","id":705,"index":"POTENT_TINCTURE","owner":"PLAGUE","rarity":1,"image":"iconAddon_potentTincture"},{"description":"由金属硬石锻造而成的圆柱形封印，上面刻有带鸟头的生物站立在那些奇怪机器边上。用于盛装圣洁之灰。<li><b>中幅延长</b>物体的感染时间。</li>","name":"赤铁矿封印","id":706,"index":"HEMATITE_SEAL","owner":"PLAGUE","rarity":1,"image":"iconAddon_hematiteSeal"},{"description":"包含芥末水的糖浆，可以快速催人呕吐。用于喷吐体内污秽之物。<li><b>小幅提升</b>肮脏倾泻效果。</li>","name":"催吐剂","id":707,"index":"EMETIC_POTION","owner":"PLAGUE","rarity":1,"image":"iconAddon_emeticPotion"},{"description":"一个熟透的水果，净化仪式期间实行的斋戒。十分美味。<li>游戏开局时，额外<b>1</b>个虔诚之池处于腐烂状态。</li>","name":"神圣苹果","id":708,"index":"BLESSED_APPLE","owner":"PLAGUE","rarity":1,"image":"iconAddon_prayerApple"},{"description":"一种具有祛痰功效的摩擦油烧杯。散发着月桂和迷迭香的常青气味。<li><b>适度增加</b>肮脏倾泻充能速度。</li>","name":"摩擦油","id":709,"index":"RUBBING_OIL","owner":"PLAGUE","rarity":2,"image":"iconAddon_rubbingOil"},{"description":"一种来历不明的令人作呕的糖浆。喝这种浓稠的黄色液体催吐。用于喷吐体内污秽之物。<li><b>中幅提升</b>肮脏倾泻效果。</li>","name":"感染催吐剂","id":710,"index":"INFECTED_EMETIC","owner":"PLAGUE","rarity":2,"image":"iconAddon_infectedEmetic"},{"description":"一种深色的蜡状药膏，与雪松汁液结合，散发出甜美的泥土气息。直接涂抹在受感染的皮肤上。<li><b>小幅加快</b>为肮脏倾泻充能时的移动速度。</li><li><b>中幅缩短</b>肮脏倾泻的冷却时间。</li>","name":"香薰软膏","id":711,"index":"INCENSED_OINTMENT","owner":"PLAGUE","rarity":2,"image":"iconAddon_incensedOintment"},{"description":"一个黑曜石护身符，用于在驱魔仪式中抵御疾病。铭刻对混乱和瘟疫之神的祈祷文。赐予穿戴者无限忠诚。<li><b>中幅延长</b>腐烂倾泻的持续时间。</li>","name":"驱魔护身符","id":712,"index":"EXORCISM_AMULET","owner":"PLAGUE","rarity":2,"image":"iconAddon_exorcismAmulet"},{"description":"一个落入圣洁之灰中的削皮苹果。吃下之后可以抵御亡灵的嫉妒恶意。<li>游戏开局时，额外<b>1</b>个虔诚之池处于腐烂状态。</li><li><b>小幅增加</b>物体感染时间。</li>","name":"灰烬苹果","id":713,"index":"ASHEN_APPLE","owner":"PLAGUE","rarity":2,"image":"iconAddon_ashenApple"},{"description":"一块金色装饰的石碑，展示了原本用来祭祀被遗忘的神灵的腐烂咒语的图纸和文字。<li><b>中幅缩短</b>虔诚之池激活时间。</li><li><b>中幅加快</b>持有腐烂倾泻时的移动速度。</li>","name":"祭祀文","id":714,"index":"WORSHIP_TABLET","owner":"PLAGUE","rarity":3,"image":"iconAddon_worshipTablet"},{"description":"一种难闻的，半凝固的药水，无法辨认其成分。喝下催呕。用于喷吐体内污秽之物。<li><b>大幅提升</b>肮脏倾泻效果。</li>","name":"肮脏催吐剂","id":715,"index":"VILE_EMETIC","owner":"PLAGUE","rarity":3,"image":"iconAddon_vileEmetic"},{"description":"阿迪里斯朽烂的断趾，编织在一条线上，并当作护身符戴在脖子上。散发着邪恶的力量。<li><b>大幅提高</b>逃生者互动中相互传染的速度。</li>","name":"断趾","id":716,"index":"SEVERED_TOE","owner":"PLAGUE","rarity":3,"image":"iconAddon_severedToe"},{"description":"一枚血玉护身符，上面雕刻着巴比伦瘟疫之神的肖像，使佩戴者无限虔诚。<li><b>大幅增加</b>腐烂倾泻的持续时间。</li>","name":"信徒护符","id":717,"index":"DEVOTEES_AMULET","owner":"PLAGUE","rarity":3,"image":"iconAddon_devoteesAmulet"},{"description":"一种半透明的圆柱形封印，由带瘟疫肖像的迷雾本身塑造而成。它的表面温暖，并随恶灵的力量搏动。<li><b>中幅降低</b>持有腐烂倾泻时的移动速度。</li><li><b>巨幅缩短</b>腐烂倾泻的持续时间。每当有发电机完成时，肮脏倾泻都会变为腐烂倾泻。</li>","name":"荧虹封印","id":718,"index":"IRIDESCENT_SEAL","owner":"PLAGUE","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"黑色骨质黏状物。吸食它的臭气可以强化心灵之眼。<li>逃生者呕吐时气场将会向你暴露，持续<b>5秒</b>。</li>","name":"黑色之香","id":719,"index":"BLACK_INCENSE","owner":"PLAGUE","rarity":4,"image":"iconAddon_blackIncense"},{"description":"奥尔森之前在宾夕法尼亚工作时从某位受害者处偷走的相机。里面的相片描绘了他在这座城市的最后一晚。<br><li><b>小幅提升</b>未从掩体后探身出来时逃生者被标记的速率。</li>","name":"“宾州”","flavor":"“真是喜欢宾州啊：予取予求，全都印在了我的脑海中。”——鬼面","id":750,"index":"PHILLY","owner":"GHOST","rarity":0,"image":"iconAddon_philly"},{"description":"这些火柴来自白星眼酒吧，罗斯威尔镇北部的一处小酒吧。有行蓝字记着一名受害者的电话号码。这是找到的犯罪证据之一。<br><li><b>小幅提升</b><i>夜幕</i>的力量恢复速率。</li>","name":"白星眼酒吧纸板火柴","id":751,"index":"WALLEYES_MATCHBOOK","owner":"GHOST","rarity":0,"image":"iconAddon_walleyesMatchbook"},{"description":"关于从犹他州到宾夕法尼亚州数起杀人悬案的文章剪贴。虽然鬼面的名字仅在部分头条中出现，但他实际上是这其中所有凶案的犯人。<br>记录下自己的成功让你十分骄傲，信心满满。<br><li><b>小幅提升</b>潜行时的移动速度。</li>","name":"头条剪贴","id":752,"index":"HEADLINES_CUTOUTS","owner":"GHOST","rarity":0,"image":"iconAddon_headlinesCutouts"},{"description":"平价店的古龙水，有股强烈的医用酒精味道。鬼面用这个让自己为人所知。非常适合深夜造访的不速之客。<br><li><b>小幅提升</b>逃生者被标记的时间。</li>","name":"廉价古龙水","id":753,"index":"CHEAP_COLOGNE","owner":"GHOST","rarity":0,"image":"iconAddon_cheapCologne"},{"description":"这块手动聚焦镜可以在远处偷偷拍照而不被发现。<br><li><b>小幅提升</b>未从掩体后探身出来时逃生者被标记的速率。</li><li><b>小幅延长</b>逃生者被标记的持续时间。</li>","name":"远距镜头","id":754,"index":"TELEPHOTO_LENS","owner":"GHOST","rarity":1,"image":"iconAddon_telephotoLens"},{"description":"这本螺旋笔记本上记满了沾有污渍的手写条目。日志详细记录了用于尾随受害者的不同装备。看着你过去使用的手法，会唤起不少刺激的回忆。<br><li><b>中幅提升</b>潜行时的移动速度。</li>","name":"奥尔森的日志","id":755,"index":"OLSENS_JOURNAL","owner":"GHOST","rarity":1,"image":"iconAddon_olsensJournal"},{"description":"写满了各种蓝色的小字。罗斯威尔镇的所有凶案受害者都被列在这里，上面还有他们的电话号码和住址。<br><li><b>中幅提升</b><i>夜幕</i>的力量恢复速率。</li>","name":"奥尔森的地址簿","id":756,"index":"OLSENS_ADDRESS_BOO","owner":"GHOST","rarity":1,"image":"iconAddon_olsensAddressBook"},{"description":"佛罗里达州罗斯威尔镇北部地图的注解。每个X符号都代表了鬼面的一名受害者。对目标的了解使你能够在街头悄无声息地游荡。<br><li><b>中幅提升</b>杀手被发现时的杀手本能可见时间。</li>","name":"被标记的地图","id":757,"index":"MARKED_MAP","owner":"GHOST","rarity":1,"image":"iconAddon_markedMap"},{"description":"这条黑皮带能保证匍匐前进时身上的东西不会散落。<br><li><b>小幅提升</b>隐匿时的移动速度。</li>","name":"皮带 ","id":758,"index":"CINCH_STRAPS","owner":"GHOST","rarity":1,"image":"iconAddon_reusuableCinchStraps"},{"description":"奥尔森的钱包里装着三十美金、一张视频俱乐部会员卡以及一张折起来的奥尔森在罗斯威尔镇首个受害者的照片。随身携带犯罪证据会让你更加亢奋而坚定。<br><li><b>大幅提升</b>潜行时的移动速度。</li>","name":"奥尔森的钱包","id":759,"index":"OLSENS_WALLET","owner":"GHOST","rarity":2,"image":"iconAddon_olsensWallet"},{"description":"无声而灵巧的刀鞘。把凶器安放妥当，行动就更方便。<br><li><b>中幅提升</b>隐匿时的移动速度。</li>","name":"皮革刀鞘","id":760,"index":"LEATHER_KNIFE_SHEATH","owner":"GHOST","rarity":2,"image":"iconAddon_leatherKnifeSheath"},{"description":"鬼面使用的强力麝香型香水，以此宣告自己的来临。专为他计划写于笔下的受害者准备。<br><li><b>中幅提升</b>逃生者被标记的时间。</li>","name":"持久香水","id":761,"index":"LASTING_PERFUME","owner":"GHOST","rarity":2,"image":"iconAddon_lastingPerfume"},{"description":"让你能轻松携带利刃的完美皮带扣。没人知晓你今晚将要犯下怎样的罪行。<br><li><b>中幅提升</b>未从掩体后探身出来时逃生者被标记的速率。</li>","name":"利刃皮带扣","id":762,"index":"KNIFE_BELT_CLIP","owner":"GHOST","rarity":2,"image":"iconAddon_knifeBeltClip"},{"description":"这根蓝色钢笔的笔帽被啃过，上面沾有丹尼的DNA痕迹。从未被发现的犯罪证据。<br><li><b>大幅提升</b><i>夜幕</i>的力量恢复速率。</li>","name":"被啃过的钢笔","id":763,"index":"CHEWED_PEN","owner":"GHOST","rarity":2,"image":"iconAddon_chewedPen"},{"description":"这张被撕下的纸页上写着奥尔森在罗斯威尔镇首个受害者的每周行程。对受害者的习惯进行分析使你能够预知其行动。\\n<br><li><b>中幅提升</b>杀手被发现时的杀手本能可见时间。</li><li><b>中幅缩小</b>夜幕激活时杀手被发现所需的侦测距离。</li><br><span class=\\"FlavorText\\">“我关注你有一阵子了。这一次我要它独一无二；成为人们永远无法忘怀的头条新闻。”——鬼面</span>","name":"受害者的详细行程","id":764,"index":"VICTIMS_DETAILED_ROUTINE","owner":"GHOST","rarity":3,"image":"iconAddon_victimsDetailedRoutine"},{"description":"即使是在黑暗中，夜视镜头也能拍出清晰的照片。非常适合深夜造访的不速之客。<br><li><b>大幅提升</b>未从掩体后探身出来时逃生者被标记的速率。</li>","name":"夜视镜头","id":765,"index":"NIGHT_VISION_MONOCULAR","owner":"GHOST","rarity":3,"image":"iconAddon_nightvisionMoncular"},{"description":"全方位便携刀鞘：适合迅速造成严重伤口，同时也便于携带者自由移动。丹尼离开宾夕法尼亚当晚从一名巡警身上偷来的。<br><li><b>大幅提升</b>隐匿时的移动速度。</li><span class=\\"FlavorText\\">“要像斥候一样随时准备就绪——但大口袋什么的太蠢了。我这东西可要好上不少。”——鬼面</span>","name":"绑腿刀鞘","id":766,"index":"DROP_LEG_KNIFE_SHEATH","owner":"GHOST","rarity":3,"image":"iconAddon_dropLegKnifeSheath"},{"description":"这张驾照表明了奥尔森的真实身份：丹尼·约翰逊。<br><li><b>大幅缩小</b><i>夜幕</i>激活时逃生者可发现杀手的范围。</li>","name":"驾照","flavor":"“人们都想知道鬼面究竟是谁。但他们真正该问的问题是，谁才是下一个。”——鬼面","id":767,"index":"DRIVERS_LICENSE","owner":"GHOST","rarity":3,"image":"iconAddon_driversLicense"},{"description":"奥尔森拿到的磁带，以此写出的文章让罗斯威尔镇人心惶惶。<br><li><b>极大提升</b>从掩体侧身时逃生者被标记的速率。</li><li><b>极大降低</b>未从掩体侧身时逃生者被标记的速率。</li>","name":"《被拍摄到的鬼面》","flavor":"“在这卷录像中，一名黑衣人影趁着夜色闯入了佛罗里达州罗斯威尔镇北部的一处房屋。警察次日清晨接到报案称有一起谋杀案在此发生。锁好你的大门：我们之中有一名肆意游荡的杀手，就像是黑夜中的鬼面。”——罗斯威尔公报","id":768,"index":"CAUGHT_ON_TAPE","owner":"GHOST","rarity":4,"image":"iconAddon_caughtOnTape"},{"description":"这台监控摄像头里拍到了鬼面闯入罗斯威尔镇北部贝拉维尔街的一处房屋。摄像头的位置刚刚好能捕捉到鬼面的身影，但又无法向警方提供任何实用线索。<br><li>当被标记的逃生者进入濒死状态时，你恐惧范围外的所有逃生者会在4秒内暴露其气场。</li>","name":"户外监控摄像头","flavor":"“一张图片胜过千言万语。”——鬼面","id":769,"index":"OUTDOOR_SECURITY_CAMERA","owner":"GHOST","rarity":4,"image":"iconAddon_outdoorSecurityCamera"},{"description":"在霍金斯的腐烂土壤中培育出的南瓜。<li>穿越颠倒世界时，你进入的传送门将被摧毁。穿越将获得200额外血点。</li>","name":"腐烂南瓜","id":800,"index":"ROTTEN_PUMPKIN","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_rottenPumpkin"},{"description":"让魔王当零食咀嚼的老鼠尾巴。<li><b>小幅降低</b>打开传送门的所需时间。</li>","name":"老鼠尾巴","id":801,"index":"RAT_TAIL","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratTail"},{"description":"一堆湿答答的盐渍软化肝脏。<li><b>小幅提升</b>杀手充能<b>来自深渊</b>时的移动速度。</li>","name":"鼠肝","id":802,"index":"RAT_LIVER","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_ratLiver"},{"description":"从颠倒世界中某只触手生物胸膛中剥下的黑色跳动心脏。<li><b>小幅加快</b><b>撕碎</b>命中后恢复速度。</li>","name":"黑心","id":803,"index":"BLACK_HEART","owner":"DEMOGORGON","rarity":0,"image":"iconAddon_blackHeart"},{"description":"潮湿而富有弹性的丝网，可以拓宽超维通道。<li><b>小幅提升</b>逃生者封印传送门的所需时间。</li>","name":"黏性丝网","id":804,"index":"VISCOUS_WEBBING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_viscousWebbing"},{"description":"具有腐蚀性的黏性层，可以覆盖并拓宽超维通道。<li><b>中幅提升</b>逃生者可被<b>来自深渊</b>侦测到的范围。</li>","name":"黏性衬层","id":805,"index":"STICKY_LINING","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_stickyLining"},{"description":"腐烂的牛百叶，能让魔王恢复精力。<li><b>小幅提升</b>杀手穿越颠倒世界时的移动速度。</li>","name":"腐烂绿百叶","id":806,"index":"ROTTEN_GREEN_TRIPE","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_rottenGreenTripe"},{"description":"某位不幸受害者的美味内脏。<li><b>可用传送门数量上限增加</b><b>1</b>。</li><li><b>小幅提升</b><b>撕碎</b>未命中后恢复速度。</li>","name":"喵咪的内脏","id":807,"index":"MEWS_GUTS","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_mewsGuts"},{"description":"抵达颠倒世界的一副破损眼镜。<li><b>小幅提升</b>破坏板子时<i>撕碎</i>的恢复速度。</li>","name":"芭芭拉的眼镜","id":808,"index":"BARBS_GLASSES","owner":"DEMOGORGON","rarity":1,"image":"iconAddon_barbsGlasses"},{"description":"颠倒世界中的黑色肉质蘑菇，能让魔王通过心灵感应扭曲猎物的感官。<li><b>小幅提升</b>杀手从传送门出现后的<b>无法侦测状态</b>持续时间。</li>","name":"紫罗兰蜡伞菌","id":809,"index":"VIOLET_WAXCAP","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_violetWaxcap"},{"description":"坚实带刺的藤蔓，可以延展并加固超维通道。<li><b>小幅提升</b>逃生者封印传送门所需时间。</li><li><b>小幅提升</b>逃生者可被<b>来自深渊</b>侦测到的范围。</li>","name":"荆棘藤蔓","id":810,"index":"THORNY_VINES","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_thornyVines"},{"description":"蓄有精神能量的苏打罐。<li>穿越颠倒世界时将正在修理的发电机显示为黄色气场。</li>","name":"十一的苏打","id":811,"index":"ELEVENS_SODA","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_elevensSoda"},{"description":"未经处理而富有弹性的肺，能让魔王重振元气。<li><b>大幅增加</b>杀手穿越颠倒世界时的移动速度。</li><li>可用的传送门数量减少<b>2</b>。</li>","name":"鹿肺","id":812,"index":"DEER_LUNG","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_deerLung"},{"description":"用来引起麻烦的打火机。<li>在传送门影响下的逃生者会受到<b>障目状态</b>。脱离与传送门的契约后，此效果将持续<b>60秒</b>。</li>","name":"黄铜打火机","flavor":"“能发射强力电磁场；它与颠倒世界一定有所联系。”——霍金斯国家实验室","id":813,"index":"BRASS_CASE_LIGHTER","owner":"DEMOGORGON","rarity":2,"image":"iconAddon_brassCaseLighter"},{"description":"颠倒世界中的一种亮红色毒蘑菇。<li><b>中幅提升</b>魔王从传送门中出现后<b>无法侦测状态</b>的持续时间。</li>","name":"朱红丝膜菌","flavor":"“我们仍然在对此类生物进行实验，而迄今为止得到的结果并不一致。”——霍金斯国家实验室","id":814,"index":"VERMILLION_WEBCAP","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_vermillionWebcap"},{"description":"黏性可燃树脂，用于加固超维通道的大门。<li><b>中幅提升</b>逃生者封印传送门的所需时间。</li>","name":"颠倒世界树脂","flavor":"“从曾经用作大门的树皮上取得的样本。目前对其效用尚无研究定论。”——霍金斯国家实验室","id":815,"index":"UPSIDE_DOWN_RESIN","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_upsidedownResin"},{"description":"裹着阴森丝带，带有余温的巨蛋。<li><b>大幅提升</b>穿越颠倒世界时的力量恢复速度。</li>","name":"未知巨蛋","flavor":"“颠倒世界中有一枚巨蛋，但没有样本在送至实验室进行检查的过程中幸存。”——霍金斯国家实验室","id":816,"index":"UNKNOWN_EGG","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_unknownEgg"},{"description":"曾在霍金斯公共游泳池随处可见的生锈金属哨子。<li>激活的传送门附近的逃生者在不需要充能<b>来自深渊</b>时就能被杀手本能显示。</li>","name":"救生员哨子","flavor":"“能发射强力电磁场；它与颠倒世界一定有所联系。”——霍金斯国家实验室","id":817,"index":"LIFEGUARD_WHISTLE","owner":"DEMOGORGON","rarity":3,"image":"iconAddon_lifeguardWhistle"},{"description":"生长在颠倒世界树皮上的致幻苔藓。<li>穿越颠倒世界时，魔王会无声从目标传送门出现，但用时会更久。</li><li><b>巨幅增加</b>魔王从传送门出现后施加的<b>无法侦测</b>状态持续时间。</li>","name":"红色苔藓","flavor":"“食用其叶子可增强体能并引起愉悦感。”——霍金斯国家实验室","id":818,"index":"RED_MOSS","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_redMoss"},{"description":"像尘土一样覆盖在颠倒世界岩石表面的强效苔藓。<li>穿越颠倒世界时<b>揭示所有受伤逃生者气场</b>，持续<b>3秒</b>。</li>","name":"鳞状地衣","flavor":"“只要一点剂量就能导致严重幻觉。”——霍金斯国家实验室","id":819,"index":"LEPROSE_LICHEN","owner":"DEMOGORGON","rarity":4,"image":"iconAddon_leproseLichen"},{"description":"认为自己的目标纯洁而正义的火山携带护身符以驱除可能会令他误入歧途的恶灵。<li><b>小幅增加</b>鲜血之球的吸收速度。</li>","name":"驱魔护符","id":850,"index":"YAKUYOKE_TALISMAN","owner":"ONI","rarity":0,"image":"iconAddon_paperLantern"},{"description":"假如绳子再结实一点的话，就能牢牢捆住火山了。事实却是火山设法挣脱了束缚并屠杀了囚禁自己的人。<li><b>小幅增加</b>可侦测到鲜血之球气场的距离。</li>","name":"腐烂的绳子","flavor":"“尽管死神专心致志，但很多人都知道他会眨眼。”——连次郎的教义14:5","id":851,"index":"ROTTING_ROPE","owner":"ONI","rarity":0,"image":"iconAddon_rottingRope"},{"description":"火山婚礼上的杯子，不过当晚就被摔坏了。<li><b>小幅增加</b><i>鲜血狂怒</i>的启动充能速度。</li><li><b>小幅减少</b><i>鲜血狂怒</i>的失效时间。</li>","name":"有裂纹的杯子","id":852,"index":"CRACKED_SAKAZUKI","owner":"ONI","rarity":0,"image":"iconAddon_crackedSakazuki"},{"description":"在火山一次前往庙宇的冬季徒步旅行途中脱落。尽管他去庙里参拜了上百次，明人的腿还是没有痊愈。<li><b>小幅增加</b>吸收鲜血之球时的移动速度。</li>","name":"发黑的趾甲","flavor":"“如果父亲不为了自己的孩子牺牲，那他还算什么父亲？”——连次郎的教义11:12","id":853,"index":"BLACKENED_TOENAIL","owner":"ONI","rarity":0,"image":"iconAddon_blackenedToenail"},{"description":"火山被人比作恶魔后，从头盔上扯下的有角纹章。<li><b>小幅增加</b><i>山岡之怒<i>的被动充能速度。</li>","name":"擦亮的掩襟","id":854,"index":"POLISHED_MAEDATE","owner":"ONI","rarity":1,"image":"iconAddon_polishedMaedate"},{"description":"曾经挂在山岡家族地产中的水墨画。画的是一头狮子被一只老鼠吃掉的故事。<li><b>小幅增加</b><i>鲜血狂怒</i>的启动充能速度。</li><li><b>小幅减少</b><i>鲜血狂怒</i>的失效时间。</li><li><b>中幅减少</b>击倒逃生者时的<i>鲜血狂怒</i>消耗惩罚。</li>","name":"狮子水墨画","id":855,"index":"INK_LION","owner":"ONI","rarity":1,"image":"iconAddon_inkLion"},{"description":"连次郎的木棒，火山离开时将其偷走。<li><b>小幅增加</b><i>鲜血狂怒</i>的持续时间。</li>","name":"有缺口的采配","id":856,"index":"CHIPPED_SAIHAI","owner":"ONI","rarity":1,"image":"iconAddon_chippedSaihai"},{"description":"明人的练习用刀。这孩子受伤后就基本上用不到它了。<li><b>中幅增加</b>可侦测到鲜血之球气场的距离。</li>","name":"孩童的木刀","id":857,"index":"CHILDS_WOODEN_SWORD","owner":"ONI","rarity":1,"image":"iconAddon_childsWoodenSword"},{"description":"上面染着称呼火山为冒牌贵族的男孩的血。火山把打斗的证据藏了起来，以免被父亲发现，而他自己常常私下里非常享受地欣赏这条饰带。<li><b>中幅增加</b>吸收鲜血之球时的移动速度。</li>","name":"染血饰带","id":858,"index":"BLOODY_SASH","owner":"ONI","rarity":1,"image":"iconAddon_bloodySash"},{"description":"令火山感到无比自豪的山岡家族旗帜。<li><b>中幅增加</b><i>鲜血狂怒</i>的持续时间。</li>","name":"山岡旗帜","id":859,"index":"YAMAOKA_SASHIMONO","owner":"ONI","rarity":2,"image":"iconAddon_yamaokaSashimono"},{"description":"火山年轻时为庆祝节分祭而购买的面具。从那时起，他做噩梦就会梦到面具长着獠牙的可怕大嘴。<li><b>小幅增加</b>逃生者掉落的鲜血之球的数量。</li>","name":"木制鬼武士面具","flavor":"“人类如此熟悉恶魔绝非巧合。”——连次郎的教义3:8","id":860,"index":"WOODEN_ONI_MASK","owner":"ONI","rarity":2,"image":"iconAddon_woodenOniMask"},{"description":"祖传武士刀的碎片，火山一次愤怒失控时将其摧毁。<li><b>中幅增加</b><i>山岡之怒</i>的被动充能速度。</li>","name":"破碎的胁差","id":861,"index":"SHATTERED_WAKAZASHI","owner":"ONI","rarity":2,"image":"iconAddon_shatteredWakizashi"},{"description":"此顶髻属于一名质疑火山名誉的武士。发根还沾着带血的头皮。<li><b>大幅增加</b><i>鲜血狂怒</i>生效期间<i>恶魔冲刺</i>的启动充能速度。</li>","name":"带头皮的顶髻","id":862,"index":"SCALPED_TOPKNOT","owner":"ONI","rarity":2,"image":"iconAddon_scalpedTopknot"},{"description":"火山出生时得到的护身符，其力量用来为他的家族辟邪消灾。<li><b>中幅增加</b><i>鲜血狂怒</i>生效期间<i>恶魔冲刺</i>的移动速度。</li>","name":"家内安全护符","id":863,"index":"KANAIANZEN_TALISMAN","owner":"ONI","rarity":2,"image":"iconAddon_kanaianzenTalisman"},{"description":"火山踏上消灭冒牌武士的旅程后，其母用来擦泪的手巾。<li><b>大幅减少</b>击倒逃生者时的<i>鲜血狂怒</i>消耗惩罚。</li>","name":"泪水浸湿的手巾","id":864,"index":"TEAR_SOAKED_TENUGUI","owner":"ONI","rarity":3,"image":"iconAddon_tearSoakedTenugui"},{"description":"山岡连次郎所乘坐的船的碎片。尽管凶多吉少，但这名传说中的武士似乎活了下来。<li><b>中幅增加</b>逃生者掉落的鲜血之球的数量。</li>","name":"破碎的船身","flavor":"“若要策划阴谋诡计，先不要请教他人。”——连次郎的教义7:9","id":865,"index":"SPLINTERED_HULL","owner":"ONI","rarity":3,"image":"iconAddon_splinteredHull"},{"description":"异国商人出售的牙齿，象征着权力和贵族气质。<li><b>大幅增加</b><i>鲜血狂怒</i>的持续时间。</li>","name":"狮牙","id":866,"index":"LION_FANG","owner":"ONI","rarity":3,"image":"iconAddon_lionFang"},{"description":"火山的儿子明人从树上摔下来之后所用的拐杖。明人受伤导致他的玩伴及其家人受到了惩罚。<li><b>大幅增加</b><i>鲜血狂怒</i>生效期间<i>恶魔冲刺</i>的移动速度。</li>","name":"明人的拐杖","id":867,"index":"AKITOS_CRUTCH","owner":"ONI","rarity":3,"image":"iconAddon_akitosCrutch"},{"description":"连次郎被儿子击中后用手捂住胸口时所戴的手套。<li>所有逃生者能看到鲜血之球。</li><li>接触到鲜血之球的逃生者会吸收鲜血之球，并将自己的气场暴露给杀手，持续<b>2秒</b>。</li><li>每吸收一个鲜血之球都会叠加效果。</li>","name":"连次郎的染血手套","flavor":"“哪怕肚破肠流，也不可抛弃名誉”——连次郎的教义14:12","id":868,"index":"RENJIROS_BLOODY_GLOVE","owner":"ONI","rarity":4,"image":"iconAddon_renirosBloodyGlove"},{"description":"表示主人是山岡家族成员的纹章。<br><li><i>鲜血狂怒</i>生效期间，<i>恶魔之击</i>未命中会导致<b>12米范围</b>内的逃生者发出尖叫并向你暴露其当前位置。</li>","name":"荧虹家族纹章","flavor":"“看清自我才能保护自己的内心。”——连次郎的教义11:2","id":869,"index":"IRIDESCENT_FAMILY_CREST","owner":"ONI","rarity":4,"image":"iconAddon_IridescentFamilyCrest"},{"description":"一块粗糙的抹布。在激烈的交火中，吐一口唾沫用力擦拭便足以把矛枪擦干净。<li><b>小幅缩短</b>矛枪射偏后的冷却时间。</li>","name":"唾沫抹布","id":900,"index":"SPIT_POLISH_RAG","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_spitPolishRag"},{"description":"从旅行商人手中买到的少量油性提取物。号称能治百病。<li><b>小幅增加</b>矛枪的收线速度。</li>","name":"蛇油 ","id":901,"index":"SNAKE_OIL","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_snakeOil"},{"description":"脆弱的铁链，一开始装在凯勒布的原型矛枪上。尽管这条锁链并不牢靠，但很有纪念价值。<li>提升<b>50%</b><i>刺中</i>得分获得的血点。</li><li>逃生者更容易挣脱。</li>","name":"易断锁链","id":902,"index":"RICKETY_CHAIN","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_ricketyChain"},{"description":"由于凯勒布使用的是特种武器，他对这条旧弹药带进行了改装。上面还残留着亚利桑那疆界沙漠的红色细沙。<li><b>小幅增加</b>矛枪的上弹速度。</li>","name":"改装过的弹药带 ","id":903,"index":"MODIFIED_AMMO_BELT","owner":"DEATHSLINGER","rarity":0,"image":"iconAddon_modifiedAmmoBelt"},{"description":"凯勒布在一时好奇心的驱使下，将铁路道钉绑在了矛枪的前端。并不尖锐的尖端导致其无法干净利落地刺穿目标。<li>命中被矛弹刺中的逃生者会施加<b>重伤</b>状态。</li>","name":"生锈的道钉 ","id":904,"index":"RUSTED_SPIKE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_rustedSpike"},{"description":"一株看似普通的植物，凯勒布发现浸过它榨出的油后，矛弹所造成的伤口周围会长出让人疼痛难忍的水疱。<li><b>小幅增加</b>逃生者在<b>深度伤口</b>状态下治疗自己花费的时间。</li>","name":"毒栎叶","id":905,"index":"POISON_OAK_LEAVES","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_poisonOakLeaves"},{"description":"亚利桑那疆界的一名执法官插手了地狱郡黑帮的赏金，结果丢了性命，此徽章就是从他的尸体上取得的。<li><b>小幅缩小</b>用矛枪瞄准时的恐惧范围。</li><li><b>小幅降低</b>用矛枪瞄准时的移动速度。</li><span class=\\"FlavorText\\">“趁现在赶快祈祷吧，到中午你就要被吊死了。”——凯勒布·奎因</span>","name":"执法官的徽章 ","id":906,"index":"MARSHALS_BADGE","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_marshalsBadge"},{"description":"在激烈交火中射穿凯勒布下颌的子弹。它点燃了他熊熊的复仇之火。<li><b>小幅增加</b>用矛枪瞄准时的移动速度。</li><span class=\\"FlavorText\\">“从你和我过不去的那一刻起，死神就已经盯上你了。”——凯勒布·奎因</span>","name":"下颌粉碎者 ","id":907,"index":"JAW_SMASHER","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_jawSmasher"},{"description":"一罐切割好的清洁烟叶，是从格伦威尔的一具被开膛破肚的尸体上偷来的。对神经系统有刺激作用。<li><b>中幅缩短</b>逃生者从矛枪上挣脱后的晕眩时间。</li>","name":"嚼用烟草","id":908,"index":"CHEWING_TOBACCO","owner":"DEATHSLINGER","rarity":1,"image":"iconAddon_chewingTobacco"},{"description":"钥匙沉闷的叮当声唤起了令凯勒布恼怒的回忆。<li><b>中幅增加</b>矛枪的上弹速度。</li>","name":"狱长的钥匙 ","id":909,"index":"WARDENS_KEYS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wardensKeys"},{"description":"破烂发黄的梅森·凯利通缉告示。令凯勒布专心追捕犯人。<li><b>中幅增加</b>用矛枪瞄准时的移动速度。</li><span class=\\"FlavorText\\">“我在我母亲的坟前起誓，一定会对你严惩不贷。”——凯勒布·奎因</span>","name":"通缉告示 ","id":910,"index":"WANTED_POSTER","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_wantedPoster"},{"description":"罐子装着少量用来润滑机械的油。旧型的矛枪因为有经常卡壳的毛病而名声很差，因此必须时刻准备好润滑油。<li><b>中幅缩短</b>矛枪射偏后的冷却时间。</li>","name":"锡制油罐 ","id":911,"index":"TIN_OIL_CAN","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_tinOilCan"},{"description":"凯勒布因连续两次都没抓住一个悬赏目标而怒不可遏，他把荆棘的枝干拧成一把长矛，并扔了出去。<li>从长矛上挣脱的逃生者受到<b>重伤</b>状态影响。</li>","name":"皂荚荆棘 ","id":912,"index":"HONEY_LOCUST_THORNS","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_honeyLocustThorns"},{"description":"从哭喊求饶的亨利·贝索口中拔出的金牙。几小时后，他被人结果了性命。<li><b>中幅提高</b>矛枪的收线速度。</li><span class=\\"FlavorText\\">“小子，人要有自知之明。要有自知之明啊。”——亨利·贝索</span>","name":"贝索的金牙","id":913,"index":"BAYSHORES_GOLD_TOOTH","owner":"DEATHSLINGER","rarity":2,"image":"iconAddon_bayshoresGoldTooth"},{"description":"又粗又重的铁链，曾经一头拴着一个钢球，另一头拴在凯勒布的脚踝上。 现在得到了改装，栓在了矛弹上。<li><b>大幅提高</b>逃生者从矛弹上挣脱所需的代价。</li><span class=\\"FlavorText\\">“在监狱大院外工作的囚犯必须拴上至少16斤重的钢球。”——地狱郡监狱守卫手册</span>","name":"监狱铁链","id":914,"index":"PRISON_CHAIN","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_prisonChain"},{"description":"凯勒布借酒浇愁，肚中的暖意暂时平息了他的怒意，他的步履也开始蹒跚。<li><b>中幅缩小</b>用矛枪瞄准时的恐惧范围。</li><li><b>中幅降低</b>用矛枪瞄准时的移动速度。</li><span class=\\"FlavorText\\">“酒香浓郁，边境一绝。”——1876年的金溪广告</span>","name":"金溪威士忌","id":915,"index":"GOLD_CREEK_WHISKEY","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_clearCreekWhiskey"},{"description":"从凯勒布老板的口袋里抽出的高品质雪茄，当时老板正因为腹部被矛弹刺穿而不停惨叫。<li><b>大幅缩短</b>逃生者从矛弹上挣脱后的晕眩时间。</li><span class=\\"FlavorText\\">“别用那玩意儿指着我，你这下巴松弛的白痴。”——亨利·贝索</span>","name":"贝索的雪茄烟","id":916,"index":"BAYSHORES_CIGAR","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_bayshoresCigar"},{"description":"可弯折的美制铁丝，上面分布着锋利的倒刺。尽管朴实无华，凯勒布还是为它找到了妙用，将它缠绕在了矛弹上以增加伤害。<li><b>中幅增加</b>逃生者在<b>深度伤口</b>状态下治疗自己花费的时间。</li></li><span class=\\"FlavorText\\">“恐惧终将消失。在那之前，恐惧我吧。”——凯勒布·奎因</span>","name":"带刺铁丝","id":917,"index":"BARBED_WIRE","owner":"DEATHSLINGER","rarity":3,"image":"iconAddon_barbedWire"},{"description":"由迷雾铸造出的玻璃硬币。赏金猎人的酬劳已经结清。<li>刺中<b>15米</b>以外的逃生者将使其处于<b>危险</b>状态，直到其摆脱矛弹。</li><span class=\\"FlavorText\\">“绝望中达成的交易将在疯狂中偿还。”</span>","name":"荧虹硬币","id":918,"index":"IRIDESCENT_COIN","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_iridescentCoin"},{"description":"地狱郡黑帮的烙铁。虽然民间有各种各样的传说，但它并没有烙在新加入成员的身上，而是用来在特别嘴硬的悬赏目标的身上留下烙印。<li>只要有一名逃生者处于被矛弹刺中的状态，你恐惧范围内所有逃生者的气场都会暴露。</li><span class=\\"FlavorText\\">“地狱郡黑帮：正义追寻者还是亡命之徒？”——格伦威尔公报头条</span>","name":"地狱郡烙铁","id":919,"index":"HELLSHIRE_IRON","owner":"DEATHSLINGER","rarity":4,"image":"iconAddon_hellshireIron"},{"description":"在一处冰箱里被发现。上面刻有一张令人作呕的肿胀脸庞。<li><b>小幅提升</b><b>审判仪式</b>的路径在环境中的存在时间。</li>","name":"铅戒指 ","id":950,"index":"LEAD_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_leadRing"},{"description":"在林边公寓的某张床上发现的蝴蝶。 它已脆如枯叶，仿佛轻轻一碰就会化为尘埃。<li><b>小幅降低</b><b>审判仪式</b>的充能时间。</li>","name":"死蝴蝶 ","id":951,"index":"DEAD_BUTTERFLY","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_deadButterfly"},{"description":"发现于布鲁克海文医院的地下室里。上面刻有一只蜘蛛。<li><b>小幅增加</b>可发动<b>审判仪式</b>的总时间。</li>","name":"铜戒指 ","flavor":"“我被锁在医院的地下室里。那里又小又黑，我好害怕。我珍贵的戒指被落在了那里。但我绝对不会再回去了。”","id":952,"index":"COPPER_RING","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_copperRing"},{"description":"用于将受害者捆在金属框架上的尼龙绑带。绑带本身的颜色使人很难分辨出渗入其中的鲜血。<li><b>小幅增加</b><b>诅咒惩戒</b>的距离。</li>","name":"黑色绑带 ","id":953,"index":"BLACK_STRAP","owner":"EXECUTIONER","rarity":0,"image":"iconAddon_blackStrap"},{"description":"一个用蜡刻成的玩偶，由某个即将面临审判的囚犯亲手制作而成。<li><b>中幅增加</b><b>诅咒惩戒</b>的距离。</li>","name":"蜡像人偶 ","id":954,"index":"WAX_DOLL","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_waxDoll"},{"description":"某根曾锋利的锈蚀矛尖。上面沾满了最后一位受害者的鲜血。<li><b>中幅增加</b>可发动<b>审判仪式</b>的总时间。</li>","name":"矛头 ","id":955,"index":"SPEARHEAD","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_spearhead"},{"description":"一块粉色的豹纹面料碎片。很难说这东西是做什么用的。<li><b>小幅提升</b>由<b>审判仪式</b>触发的<i>杀手本能</i>的持续时间。</li>","name":"豹纹面料  ","flavor":"“我是谁无所谓。我是来找你的，詹姆士。”——玛丽亚","id":956,"index":"LEOPARD_PRINT_FABRIC","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_leopardPrintFabric"},{"description":"记录了一对情侣前往寂静岭旅游的录影带。尽管它承载了一段美好记忆，但还是被留在了湖景酒店。<li><b>中幅降低</b><b>审判仪式</b>的充能时间。</li>","name":"被遗忘的录影带 ","id":957,"index":"FORGOTTEN_VIDEOTAPE","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_forgottenVideoTape"},{"description":"绘有童话中灰姑娘形象的音乐盒。它在某个手提箱内被找到，上面贴有多个目的地的贴纸。<li><b>中幅提升</b><b>审判仪式</b>的路径在环境中的存在时间。</li>","name":"灰姑娘音乐盒 ","id":958,"index":"CINDERELLA_MUSIC_BOX","owner":"EXECUTIONER","rarity":1,"image":"iconAddon_cinderellaMusicBox"},{"description":"一张有两个红兜帽身影的照片。其名为《众神的深红与白色晚宴》。<li><b>大幅降低</b><b>审判仪式</b>的充能时间。</li>","name":"神使教派照片 ","id":959,"index":"VALTIEL_SECT_PHOTOGRAPH","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_valtielSectPhotograph"},{"description":"刻有阿兹特克人像的金属板。<li><b>大幅增加</b>可发动<b>审判仪式</b>的总时间。</li>","name":"压迫者板 ","id":960,"index":"TABLET_OF_THE_OPPRESSOR","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_tabletOfTheOppressor"},{"description":"一副描绘某个头戴钢制金字塔的庞大身影的画作。背景里还有被困在牢笼里的受害者。<li><b>中幅提升</b>由<b>审判仪式</b>触发的<i>杀手本能</i>的持续时间。</li>","name":"《大雾之日，审判之迹》 ","flavor":"“是他……”","id":961,"index":"MISTY_DAY_REMAINS_OF_JUDGMENT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mistyDay"},{"description":"某个假人的光滑灰色脚掌，被从腿部粗暴地扯了下来。<li><b>大幅提升</b><b>审判仪式</b>的路径在环境中的存在时间。</li>","name":"假人脚掌 ","id":962,"index":"MANNEQUIN_FOOT","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_mannequinFoot"},{"description":"湖景酒店的示意图。 这处罪恶之地上面画满了火红的烈焰。<li><b>大幅增加</b>诅咒惩戒的距离。</li>","name":"火人绘画 ","id":963,"index":"BURNING_MAN_PAINTING","owner":"EXECUTIONER","rarity":2,"image":"iconAddon_burningManPainting"},{"description":"新鲜的鸡蛋，表面是鲜艳的红色。大概有鹌鹑蛋那么大。<li><b>大幅提升</b>由<b>审判仪式</b>触发的<i>杀手本能</i>的持续时间。</li>","name":"深红色蛋 ","flavor":"“我这辈子从来没有这么害怕过！你完全不关心我……对吗？”——玛丽亚","id":964,"index":"SCARLET_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_scarletEgg"},{"description":"一个看起来很旧的蛋，表面涂上了红橙色。大概有鹌鹑蛋那么大。<li>受到<b>审判仪式</b>影响的逃生者还会受到<b>障目</b>状态影响，持续<b>60秒</b>。</li>","name":"红锈色蛋 ","flavor":"“詹姆士……你让我很开心。”——玛丽","id":965,"index":"RUST_COLORED_EGG","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_rustColoredEgg"},{"description":"一本关于寂静岭及周围地区历史与传说的书籍。<li>受到<b>审判仪式</b>影响的逃生者还会受到<b>浑然不觉</b>状态影响，持续<b>15秒</b>。</li><span class=\\"FlavorText\\">“他们把这个地方称作‘寂静魂灵之地’。”</span>","name":"《失落的记忆》 ","id":966,"index":"LOST_MEMORIES_BOOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_lostMemoriesBook"},{"description":"一本关于古神的书。作者未知。<li>受到<i>折磨</i>影响的受伤的逃生者还会受到<b>出血</b>状态影响。</li>","name":"《赤色祭祀》 ","flavor":"“说吧。我是赤色之神。谎言与雾气不是他人，而是我。”","id":967,"index":"CRIMSON_CEREMONY_COOK","owner":"EXECUTIONER","rarity":3,"image":"iconAddon_crimsonCeremonyBook"},{"description":"用纯黑曜石雕刻而成的古老高脚杯。<li><b>处刑者</b>站在<b>审判仪式</b>路径上时获得<b>无法侦测</b>状态。</li>","name":"黑曜石杯 ","flavor":"“原谅我将你唤醒。但没有你的话，我真的无法坚持下去。”——詹姆士·桑德兰","id":968,"index":"OBSIDIAN_GOBLET","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_obsidianGoblet"},{"description":"刻有古怪图案的护身符。它似乎已经受到了恶灵的影响。<li>将一名逃生者送入<b>赎罪牢笼</b>时，所有受到<i>折磨</i>状态影响的逃生者的气场都会显示<b>6秒。</b></li>","name":"梅塔特隆的荧虹印章 ","flavor":"“这个具有强力保护和驱散效果的幻方被称为\'维伦第七纹章\'或\'梅塔特隆的封印\'。”","id":969,"index":"IRIDESCENT_SEAL_OF_METATRON","owner":"EXECUTIONER","rarity":4,"image":"iconAddon_IridescentSeal"},{"description":"完全没有效果的药片……果真如此吗？<br><br><li><b>中幅减少</b>横冲时的移动速度。</li><li>可在横冲得分中获得<b>100%</b>额外血点。</li>","name":"安慰剂药片 ","id":1000,"index":"PLACEBO_TABLET","owner":"BLIGHT","rarity":0,"image":"iconAddon_placeboTablet"},{"description":"让塔尔伯特对化学产生兴趣的某种毒性植物。它能唤起某些深藏的记忆。<br><br><li><b>小幅增加</b>横冲后的恢复速度。</li>","name":"毛地黄 ","id":1001,"index":"FOXGLOVE","owner":"BLIGHT","rarity":0,"image":"iconAddon_foxglove"},{"description":"这件早期样品未能获得理想的结果，但仍然显示出了令人惊讶的效果。<br><br><li>使用直撞后自动面向<b>16米</b>范围内的逃生者。</li>","name":"7号化合物 ","id":1002,"index":"COMPOUND_SEVEN","owner":"BLIGHT","rarity":0,"image":"iconAddon_compoundSeven"},{"description":"塔尔伯特很少使用的单片眼镜，尽管他的视力在随后的几年中逐渐下降。<br><br><li>显示直撞的目标位置。</li>","name":"碎裂的单片眼镜","id":1003,"index":"CHIPPED_MONOCLE","owner":"BLIGHT","rarity":0,"image":"iconAddon_chippedMonocle"},{"description":"塔尔伯特笔记的残余部分，上面仍然含有一些有价值的信息。<br><br><li>可用的横冲代币<b>减少</b><b>1枚</b>。</li><li><b>中幅增加</b>代币恢复的速度。</li>","name":"撕碎的笔记 ","id":1004,"index":"SHREDDED_NOTES","owner":"BLIGHT","rarity":1,"image":"iconAddon_shreddedNotes"},{"description":"磨成细粉尘的干脓疱花瓣。<br><br><li><b>中幅增加</b>直撞持续时间。</li>","name":"脓疱粉尘 ","id":1005,"index":"PUSTULA_DUST","owner":"BLIGHT","rarity":1,"image":"iconAddon_pustulaDust"},{"description":"瘟疫的胆汁样品，经蒸馏并用化学混合物处理。<br><br><li><b>小幅提升</b>横冲时的转弯速率。</li>","name":"瘟疫胆汁","id":1006,"index":"PLAGUE_BILE","owner":"BLIGHT","rarity":1,"image":"iconAddon_plagueBile"},{"description":"从某个内脏溃疡中剪下来的一大根棘刺。 它分泌出轻度毒素。<br><br><li><b>中幅增加</b>横冲后的恢复速度。</li>","name":"溃疡棘刺","id":1007,"index":"CANKER_THORN","owner":"BLIGHT","rarity":1,"image":"iconAddon_cankerThorn"},{"description":"注射血清后暂时复活的老鼠，变得具有攻击性且不可控制。<br><br><li><b>中幅增加</b>每次连续横冲后的横冲速度。</li>","name":"枯萎老鼠 ","id":1008,"index":"BLIGHTED_RAT","owner":"BLIGHT","rarity":1,"image":"iconAddon_blightedRat"},{"description":"暂时穿越精神世界的普通海盐，在此过程中其性质也随之改变。<br><br><li><b>中幅提升</b>横冲时的转弯速率。</li>","name":"源影盐 ","id":1009,"index":"UMBRA_SALTS","owner":"BLIGHT","rarity":2,"image":"iconAddon_umbraSalts"},{"description":"一种由极其稀有的“新月花束”中的干玫瑰制成的混合物。<br><br><li><b>大幅增加</b>直撞持续时间。</li> ","name":"玫瑰药剂 ","id":1010,"index":"ROSE_TONIC","owner":"BLIGHT","rarity":2,"image":"iconAddon_roseTonic"},{"description":"对人类有致命效果的血清。 想要激发它的增益效果，首先你得……超乎凡人。<br><br><li>发动直撞时，显示碰撞地点<b>8米</b>内逃生者的气场，持续<b>3秒</b>。</li>","name":"21号化合物 ","id":1011,"index":"COMPOUND_TWENTY_ONE","owner":"BLIGHT","rarity":2,"image":"iconAddon_compoundTwentyOne"},{"description":"因枯萎血清而发生怪异突变的死亡乌鸦。<br><br><li><b>大幅增加</b>每次连续横冲后的横冲速度。</li>","name":"枯萎乌鸦 ","id":1012,"index":"BLIGHTED_CROW","owner":"BLIGHT","rarity":2,"image":"iconAddon_blightedCrow"},{"description":"从某位不情愿的受试者的肾上腺中去除的激素。 尽管它会提供大幅能量，但也会让使用者感到十分疲惫。<br><br><li><b>巨幅减少</b>横冲时的转弯速率。</li><li><b>巨幅提升</b>代币恢复的速度。</li><li>可用的横冲代币<b>增加2枚</b>。</li><li><b>大幅提升</b>横冲时最大的注视角度。</li><br>","name":"肾上腺素试剂 ","flavor":"“请不要这么做……”","id":1013,"index":"ADRENALINE_VIAL","owner":"BLIGHT","rarity":2,"image":"iconAddon_adrenalineVial"},{"description":"一个自称从虚空中回来的男人的日记。 其中的知识具有实际应用价值。<br><br><li>横冲时获得<b>无法侦测</b>状态。</li><br>","name":"威戈的日志 ","flavor":"“在一片满是遗忘梦境与无尽循环的废土中，有办法出去的人就是神。”——塔尔伯特·格莱姆斯","id":1014,"index":"VIGOS_JOURNAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_vigosJournal"},{"description":"塔尔伯特用这块石头将自己认为的研究成果刻在了鸦片馆的墙上。<br><br><li>使用致命横冲命中逃生者时会召唤恶灵来屏蔽你<b>12米</b>范围内的板子，持续<b>6秒</b>。</li><br>","name":"召唤石 ","flavor":"“死亡仅仅是个开始。”","id":1015,"index":"SUMMONING_STONE","owner":"BLIGHT","rarity":3,"image":"iconAddon_summoningStone"},{"description":"从最近去世的某位逃生者的松果腺体中挤出的一种化学物质。<br><br><li>横冲期间，每当你进入某个正在修理或治疗的逃生者<b>16米</b>范围内时，就会为该逃生者触发一次难度<b>超高</b>的技能检验。每次横冲只能对每位逃生者激活一次。横冲开始时如果在逃生者<b>16米</b>范围内则不会触发。</li><br>","name":"灵魂质 ","flavor":"“...可能引起神经节律活动的非典型改变。”——未标记的神秘学校课文","id":1016,"index":"SOUL_CHEMICAL","owner":"BLIGHT","rarity":3,"image":"iconAddon_soulChemical"},{"description":"给予从伦敦医学院毕业的各位药剂师的戒指。 它象征着无限展望的壮志雄心。<br><br><li>使用致命横冲命中逃生者时可立即充能所有横冲代币。</li><br>","name":"炼金术士的戒指 ","flavor":"“这名学生被指控为了进行未经批准的科学测试而盗墓。”——塔尔伯特·格莱姆斯的学院训诫，1838年","id":1017,"index":"ALCHEMISTS_RING","owner":"BLIGHT","rarity":3,"image":"iconAddon_alchemistsRing"},{"description":"由迷雾铸造出的玻璃状实验室标签。这要么是恶灵的礼物，要么只是对枯萎者开的恶意贴标签玩笑，就像他曾对别人做的那样。<br><br><li>使用全部横冲代币后，你最后一次致命横冲路径上的所有逃生者都会陷入濒死状态。</li><br>","name":"荧虹枯萎者标签","flavor":"“进步需要彻底性的改变。”——塔尔伯特·格莱姆斯","id":1018,"index":"IRIDESCENT_BLIGHT_TAG","owner":"BLIGHT","rarity":4,"image":"iconAddon_iridescentBlightTag"},{"description":"塔尔伯特倒数第二次尝试的血清。尽管它没能促成他的逃脱，但确实有强大的副作用。<br><br><li>直撞附近<b>16米</b>范围内的逃生者会受到<b>减速</b> 状态影响，持续<b>3秒</b>。</li><li>直撞可把板子或易裂的墙摧毁，并使枯萎者失去知觉，持续<b>1.5秒。</b></li><br>","name":"33号化合物 ","flavor":"“时间很宝贵。希望这次会有效……”——塔尔伯特·格莱姆斯","id":1019,"index":"COMPOUND_THIRTY_THREE","owner":"BLIGHT","rarity":4,"image":"iconAddon_compoundThirtyThree"},{"description":"只有几英寸长的小型玩具剑。维克多握着它的时候就有一种粗暴的快感。<br><br><li><b>小幅降低</b>猛扑的蓄力时间。</li>","name":"玩具剑","id":1050,"index":"TOY_SWORD","owner":"TWINS","rarity":0,"image":"iconAddon_toySword"},{"description":"夏洛特有很多方式悼念维克多的去世。当他的指甲从腐烂的手上脱落时，她留了一片作为纪念。<br><br><li><b>中幅降低</b>维克多从夏洛特身上分离所需的时间。</li>","name":"小指甲","id":1051,"index":"TINY_FINGERNAIL","owner":"TWINS","rarity":0,"image":"iconAddon_tinyFingernail"},{"description":"装满牛奶发出酸味的金属瓶子。维克多虽然很吵闹，但是看到自己的饭食就会安静下来。<br><br><li><b>小幅提升</b>维克多的尖叫范围。</li>","name":"变质牛奶","id":1052,"index":"SOURED_MILK","owner":"TWINS","rarity":0,"image":"iconAddon_souredMilk"},{"description":"让年幼的维克多目不转睛的木质玩偶。他一直尖叫，逼得母亲冒着差点暴露的风险从市场上把它偷了回来。<br><br><li>显示猛扑的目标地点。</li>","name":"猫形玩偶","id":1053,"index":"CAT_FIGURINE","owner":"TWINS","rarity":0,"image":"iconAddon_catFigurine"},{"description":"连体婴的母亲曾经拥有的一双手套。处境艰难的时候，它就会被塞在维克多的嘴里防止他出声。<br><br><li><b>中幅提升</b>维克多的尖叫范围。</li>","name":"玛德琳的手套","id":1054,"index":"MADELEINES_GLOVE","owner":"TWINS","rarity":1,"image":"iconAddon_madeleinesGlove"},{"description":"维克多碰倒的大烛台，并引燃了他的绑架者。这是他韧性的象征。<br><br><li><b>小幅提升</b>逃生者击垮维克多所需的时间。</li>","name":"仪式烛台","id":1055,"index":"CEREMONIAL_CANDELABRUM","owner":"TWINS","rarity":1,"image":"iconAddon_ceremonialCandelabrum"},{"description":"饥肠辘辘的德赛斯一家吃掉的某只猫剩下的眼球。维克多自己偷偷藏了起来当作玩具。<br><br><li>维克多在猛扑蓄力完毕后就会停止尖叫。</li>","name":"猫眼球","id":1056,"index":"CATS_EYE","owner":"TWINS","rarity":1,"image":"iconAddon_catsEye"},{"description":"某个追杀夏洛特的人的兜帽。他很快就成了猎物。<br><br><li><b>小幅降低</b>夏洛特从休眠状态苏醒所需的时间。</li>","name":"染血的黑兜帽","id":1057,"index":"BLOODY_BLACK_HOOD","owner":"TWINS","rarity":1,"image":"iconAddon_bloodiedBlackHood"},{"description":"维克多很久之前缺掉的两颗牙。它们异乎寻常的锋利。<br><br><li>摆脱维克多的逃生者将受到障目状态影响，持续<b>15秒。</b></li>","name":"乳牙","id":1058,"index":"BABY_TEETH","owner":"TWINS","rarity":1,"image":"iconAddon_babyTeeth"},{"description":"维克多一直哭着想要这个拨浪鼓，直到他妈妈把它偷了过来。这东西太重了，不适合放在孩子手中。<br><br><li>摆脱维克多的逃生者会受到<b>不治</b>状态影响，持续<b>20秒。</b></li> ","name":"沉重拨浪鼓","id":1059,"index":"WEIGHTY_RATTLE","owner":"TWINS","rarity":2,"image":"iconAddon_weightyRattle"},{"description":"玛德琳从镇上的市场偷来的一块坚硬无味的饼干。虽然不算什么，但已经比大部分伙食要好了。<br><br><li><b>小幅提升</b>猛扑的冷却时间。</li>","name":"变质饼干","id":1060,"index":"STALE_BISCUIT","owner":"TWINS","rarity":2,"image":"iconAddon_staleBiscuit"},{"description":"德赛斯一家某次尝试逃出城市下水道时，身体表面糊上的恶心黏性物质。<br><br><li><b>小幅提升</b>逃生者摆脱维克多所需的时间。</li>","name":"下水道污泥","id":1061,"index":"SEWER_SLUDGE","owner":"TWINS","rarity":2,"image":"iconAddon_sewerSludge"},{"description":"锈蚀缝衣针","name":"锈蚀缝衣针","id":1062,"index":"RUSTED_NEEDLE","owner":"TWINS","rarity":2,"image":"iconAddon_rustedNeedle"},{"description":"玛德琳死前不久曾穿过的衣物。连体婴把它保存作为纪念物。<br><br><li><b>小幅提升</b>维克多的速度。</li><br>","name":"玛德琳的围巾","flavor":"“……在此纪念对良善正义的执行，以及对邪恶的消灭。”——玛德琳·德赛斯的死亡记录","id":1063,"index":"MADELEINES_SCARF","owner":"TWINS","rarity":2,"image":"iconAddon_madeleinesScarf"},{"description":"维克多害怕时会紧紧抓住的玩具士兵。它的某些方面让夏洛特产生了嫉妒心。<br><br><li>如果逃生者在维克多游荡时将他击垮，其气场将会暴露<b>6秒</b>。</li><br>","name":"维克多的玩具士兵","flavor":"“坏……坏……坏人……”——维克多·德赛斯","id":1064,"index":"VICTORS_SOLDIER","owner":"TWINS","rarity":3,"image":"iconAddon_victorsSoldier"},{"description":"连体婴之间分享的一个木质陀螺，尽管维克多一直想据为己有。他现在知道，只要自己紧紧抓住并且尖叫的话，东西就归自己了。<br><br><li>受到维克多猛扑的逃生者将掉落手中的道具。</li><br>","name":"旋转陀螺","flavor":"“乖……乖……这个给你好了。”——夏洛特·德赛斯","id":1065,"index":"SPINNING_TOP","owner":"TWINS","rarity":3,"image":"iconAddon_spinningTop"},{"description":"将青苔和树皮以及找来的蔬菜混合在一起的乱炖，会产生虚假的饱腹感。<br><br><li><b>中幅提升</b>维克多的速度。</li><br>","name":"森林乱炖","flavor":"“吃吧……吃吧，孩子。吃下去感觉就好些了。”——玛德琳·德赛斯","id":1066,"index":"FOREST_STEW","owner":"TWINS","rarity":3,"image":"iconAddon_forestStew"},{"description":"玛德琳逃离过去的生活时携带的寥寥几件奢侈品之一。它具有令人愉悦而放松的气味。<br><br><li>处于维克多的尖叫范围内的逃生者会受到<b>浑然不觉</b>状态影响。</li><br>","name":"香水滴","flavor":"“小心女巫的欺骗，她们最会利用男人内心的善良。”——女巫与恶魔的历史（1602）","id":1067,"index":"DROP_OF_PERFUME","owner":"TWINS","rarity":3,"image":"iconAddon_dropOfPerfume"},{"description":"五岁的夏洛特塞在自己嘴里的粗布条。这是为了避免有女巫猎人在附近时自己叫出声来。<br><br><li>夏洛特从游荡状态被惊醒后将获得<b>无法侦测</b>状态，持续<b>20秒</b>。</li><br>","name":"噤声布条","flavor":"“我不喜欢这个游戏了，母亲……”——夏洛特·德赛斯","id":1068,"index":"SILENCING_CLOTH","owner":"TWINS","rarity":4,"image":"iconAddon_silencingCloth"},{"description":"由迷雾铸造出的玻璃吊坠。上面有玛德琳·德赛斯的肖像，不过她被描绘出的样子让人有些不安。<br><br><li>如果逃生者在维克多游荡时将他击垮，其将会受到<b>危险</b>状态影响，持续<b>30秒。</b></li><br>","name":"荧虹吊坠","flavor":"“你们的牵绊并不是诅咒，宝贝们。这是你们赖以成长的力量。”——玛德琳·德赛斯","id":1069,"index":"IRIDESCENT_PENDANT","owner":"TWINS","rarity":4,"image":"iconAddon_iridescentPendant"},{"description":"一个带有多个隐藏式口袋的袋子。用它的都是些有本事或者想要藏东西的魔术师。<br><li>可携带的飞刀数量<b>增加</b><b>10</b>。</li><li>比赛开始时，额外携带<b>10</b>把飞刀。</li>","name":"魔术口袋","id":1100,"index":"TRICK_POUCH","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_TrickPouch"},{"description":"因过度使用而沾满鲜血生锈的刀。它们在知云早期谋杀案期间被使用，在他的心中占有重要地位。<br><li><b>精彩表演</b>命中获得<b>100％</b>额外血点。</li><li><b>中幅增加</b>每个逃生者的裂伤条。</li>","name":"纪念利刃","id":1101,"index":"MEMENTO_BLADES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_MementoBlades"},{"description":"知云始终没能为这段和弦谱出一曲。不过旋律的确很抓耳。<br><li><b>小幅增加</b>投掷飞刀时的移动速度。</li>","name":"出彩和弦","id":1102,"index":"KILLING_PART_CHORDS","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_KillingPartChords"},{"description":"工作室火灾烧毁电线，导致五名无转乐队成员中的四人丧生。他们的死促使了骗术师的崛起。<br><li><b>小幅增加</b>好戏登场的持续时间。</li>","name":"炼狱电线","id":1103,"index":"INFERNO_WIRES","owner":"TRICKSTER","rarity":0,"image":"icons_Addon_InfernoWires"},{"description":"在昌原市一家小酒吧里发明出的调酒。它成了知云的最爱。<br><li><b>中幅增加</b>好戏登场的持续时间。</li>","name":"月石龙舌兰","id":1104,"index":"TEQUILA_MOONROCK","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_TequilaMoonrock"},{"description":"知云出名之前发行的地下单曲。只有最狂热的无转乐队粉丝才能收集到这份隐藏的宝贝。<br><li><b>小幅增加</b>裂伤条开始衰减所需的时间。</li>","name":"命中目标单曲","id":1105,"index":"ON_TARGET_SINGLE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_OnTargetSingle"},{"description":"知云拥有的第一把飞刀。这是他的父亲买给他的，希望他为经常光顾家庭餐馆的人表演。<br><li>飞刀耗尽时，<b>小幅增加</b>每名逃生者的裂伤条衰减时间。</li>","name":"幸运飞刀","id":1106,"index":"LUCKY_BLADE","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_LuckyBlade"},{"description":"被称为骗术师的著名人士的签名。虽然写了几百次签名让他的手腕十分酸痛，但知道自己被需要的感觉很让人振奋。<br><li><b>小幅增加</b>飞刀的初始投掷速度。</li>","name":"知云的签名","id":1107,"index":"JI_WOONS_AUTOGRAPH","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_JiWoonsAutograph"},{"description":"知云拍摄“笼中之心”的录影带时穿的鞋子。移动非常顺滑流畅，适合踮脚跳舞。<br><li><b>中幅增加</b>投掷飞刀时的移动速度。</li>","name":"笼中之心鞋子","id":1108,"index":"CAGED_HEART_SHOES","owner":"TRICKSTER","rarity":1,"image":"icons_Addon_CagedHeartShoes"},{"description":"知云在“我会等着你”的现场演出时佩戴的怀表。这是从来都不会派上用场的舞台道具。<br><li><b>大幅增加</b>飞刀耗尽时每个逃生者裂伤条的衰减速度。</li>","name":"等你怀表","flavor":"“不要就这样离开<br>不要说我们分手<br>你逃不掉的<br>我会等着你”<br>——无转乐队《我会等着你》","id":1109,"index":"WAITING_FOR_YOU_WATCH","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_WaitingForYouWatch"},{"description":"知云拍摄“开膛手”录影带时佩戴的腕带。尽管并非刻意为之，不过它的设计比许多医疗腕带更能固定手腕。<br><li><b>中幅增加</b>裂伤条开始衰减所需的时间。</li>","name":"开膛手腕带","id":1110,"index":"RIPPER_BRACE","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_RipperBrace"},{"description":"这份录音文件记录了受害者被害时清脆的惨叫声。知云把这段声音混入了自己更受欢迎的曲目中。<br><li><b>中幅增加</b>每个逃生者的裂伤条。</li>","name":"乐律谋杀案","id":1111,"index":"MELODIOUS_MURDER","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_KillingPartChords"},{"description":"与无转乐队联动的限定款苏打罐。糖分与咖啡因含量极高。<br><li><b>中幅增加</b>初始投掷速度。</li>","name":"嘶嘶转转苏打","id":1112,"index":"FIZZ_SPIN_SODA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_FizzSpinSoda"},{"description":"知云在一名受害者被砍伤的脖子周围随意搭上的围巾。里面暗藏了不少口袋。<br><li>可携带的飞刀数量<b>增加</b><b>15</b>。</li><li>比赛开始时，额外携带<b>15</b>把飞刀。</li>","name":"血腥围巾","id":1113,"index":"BLOODY_BOA","owner":"TRICKSTER","rarity":2,"image":"icons_Addon_BloodyBoa"},{"description":"那些缺乏想象力的人只会将其视为劣质特制飞刀。年轻的知云曾经用这些把戏惊艳过观众。<br><li>飞刀会向环境中反弹两次。</li><li>反弹击中后会获得额外血点。</li>","name":"杂耍飞刀","id":1114,"index":"TRICK_BLADES","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_TrickBlades"},{"description":"骗术师的首张专辑。其中粗暴而凶恶的调子广受歌迷好评。<br><li>飞刀击中环境对象时会飞散开来，对附近的逃生者造成<b>50%裂伤</b>。</li>","name":"复活边缘专辑","flavor":"“你对我的低语<br>十分温暖<br>灼烧每次呼吸<br>直至让我窒息”<br>——骗术师“温暖低语”","id":1115,"index":"EDGE_OF_REVIVAL_ALBUM","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_EdgeOfRevivalAlbum"},{"description":"这些袖扣被戳入了某个把知云当成错误追星对象的私生饭的眼睛里。擦去鲜血之后，闪闪发光之中能看到的东西太多了。<br><li>当某个逃生者的裂伤条还差一次飞刀攻击就会积满时，其气场会显示<b>6秒</b>。</li>","name":"钻石袖扣","flavor":"“嘘……你不用再看到你自己的鲜血了。”——河知云","id":1116,"index":"DIAMOND_CUFFLINKS","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_DiamondCufflinks"},{"description":"无转乐队在知云加入后发行的首张单曲。直接对韩语各大音乐榜单完成屠榜。<br><li>飞刀会穿透逃生者。</li><li>被同一把飞刀击中的后续逃生者会受到<b>50%裂伤</b>。</li>","name":"《刺穿你》单曲","flavor":"“这份爱不会停息<br>撕扯着你的心<br>无论你去哪里<br>我都会撕碎你”<br>——无转乐队“刺穿你”","id":1117,"index":"CUT_THRU_U_SINGLE","owner":"TRICKSTER","rarity":3,"image":"icons_Addon_CutThruUsingle"},{"description":"由迷雾本身模制而成的类似玻璃的照片。知云咧嘴而笑，眼睛闪烁着光芒。<br><li>当某个逃生者的裂伤条还差一次飞刀攻击就会积满时，其会受到<b>危险</b>状态影响。</li>","name":"荧虹相片卡","flavor":"“没事的，叫出我的名字。让我听听痛苦催生出的一切……”——河知云","id":1118,"index":"IRIDESCENT_PHOTOCARD","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_IridescentPhotocard"},{"description":"知云的受害者临死前的声音集合，并改编成黑胶唱片。令人感到恐惧与痛苦。<br><li>飞刀造成的裂伤基于与目标的距离，至少为<b>50%</b>。</li><li>每次飞刀命中会增加飞刀造成的裂伤，最高可达<b>200%</b>。</li><li>一旦飞刀未命中，飞刀造成的裂伤会重置为初始值。</li>","name":"死亡阵痛整合","flavor":"“求你了，不要……好痛……我不能……我……”——未知声音","id":1119,"index":"DEATH_THROES_COMPILATION","owner":"TRICKSTER","rarity":4,"image":"icons_Addon_DeathThroesCompilation"},{"description":"访客进入保护伞设施时佩戴的电子腕带。同时它也是某种追踪装置。<li><b>中幅延长</b>丧尸侦测范围。</li>","name":"访客腕带","id":1150,"index":"VISITOR_WRISTBAND","owner":"NEMESIS","rarity":0,"image":"iconAddon_visitorWristband"},{"description":"编写好的S.T.A.R.S.近距离战斗知识手册。由克里斯 · 雷德菲尔德完成。<li>丧尸击中逃生者后，其气场在<b>6秒</b>内变为黄色。</li>","name":"S.T.A.R.S.现场作战手册","id":1151,"index":"STARS_FIELD_COMBAT_MANUAL","owner":"NEMESIS","rarity":0,"image":"iconAddon_starsFieldCombatManual"},{"description":"这些医疗设备在这次压垮浣熊市的大混乱中没有起到什么作用。<li><b>中幅增加</b>逃生者注射疫苗需要的时间。</li><li><b>小幅增加</b>逃生者使用疫苗后杀手本能效果的持续时间。</li>","name":"损坏的注射器","id":1152,"index":"DAMAGED_SYRINGE","owner":"NEMESIS","rarity":0,"image":"iconAddon_damagedSyringe"},{"description":"浣熊市警局负责人布莱恩·艾恩斯的小肠。丧尸看到它可是胃口大开。<li><b>小幅增加</b>丧尸的移动速度。</li>","name":"布莱恩的肠子","id":1153,"index":"BRIANS_INTESTINE","owner":"NEMESIS","rarity":0,"image":"iconAddon_briansIntestines"},{"description":"某个被开膛破肚的丧尸的心脏。上面肯定还沾满了病毒，应当被视作危险的废料。<li><b>中幅增加</b>使用触手攻击消灭丧尸时的变异等级。</li><br>","name":"丧尸心脏","flavor":"“跟这玩意儿讲道理没用。”——里昂·S·肯尼迪","id":1154,"index":"ZOMBIE_HEART","owner":"NEMESIS","rarity":1,"image":"iconAddon_zombieHeart"},{"description":"米哈伊尔仅存的残骸，他的左眼球在爆炸中幸存了下来。不过它仍然是丧尸眼中的美味。<li><b>中幅增加</b>丧尸的移动速度。</li>","name":"米哈伊尔的眼球","id":1155,"index":"MIKHAILS_EYES","owner":"NEMESIS","rarity":1,"image":"iconAddon_mikhailsEye"},{"description":"一名浣熊市警官被污染的血液。<li><b>中幅增加</b>使用触手攻击命中逃生者时的变异等级。</li><br>","name":"马文的血液","flavor":"“你只需要知道，如果你不小心的话，就会被这地方活吞掉。”——马文·伯拉纳","id":1156,"index":"MARVINS_BLOOD","owner":"NEMESIS","rarity":1,"image":"iconAddon_marvinsBlood"},{"description":"一种提高感知并使身体做好战斗准备的激素。<li><b>大幅增加</b>逃生者使用疫苗后杀手本能效果的持续时间。</li>","name":"肾上腺素注射器","id":1157,"index":"ADRENALINE_INJECTOR","owner":"NEMESIS","rarity":1,"image":"iconAddon_adrenalineInjector"},{"description":"管理人员进入保护伞设施时佩戴的电子腕带。它能授予安全区域准入权限，同时也是某种追踪装置。<li><b>大幅延长</b>丧尸的侦测范围。</li>","name":"管理员腕带","id":1158,"index":"ADMIN_WRISTBAND","owner":"NEMESIS","rarity":1,"image":"iconAddon_adminWristband"},{"description":"来自某位在战斗中死亡的T-002暴君的损坏样本。上面有严重烧伤的痕迹。<li><b>中幅增加</b>使用触手攻击消灭丧尸的变异等级。<li>中幅降低丧尸重生时间。","name":"暴君血块","id":1159,"index":"TYRANT_GORE","owner":"NEMESIS","rarity":2,"image":"iconAddon_tyrantGore"},{"description":"保护伞公司开发的某种T 病毒样本，能够使实验体产生极度变异并导致脑损伤。<li><b>大幅增加</b>使用触手攻击消灭丧尸的变异等级。 ","name":"T 病毒样本","id":1160,"index":"T_VIRUS_SAMPLE","owner":"NEMESIS","rarity":2,"image":"iconAddon_TVirusSample"},{"description":"在需要潜行的时候，这种激素可以让使用者稍稍放松。<li>消灭一名丧尸后获得<b>无法侦测</b>状态，持续<b>15</b>秒。</li>","name":"血清素注射器","id":1161,"index":"SEROTONIN_INJECTOR","owner":"NEMESIS","rarity":2,"image":"iconAddon_serotoninInjector"},{"description":"被T 病毒感染的植物缠结在一起的残余部分，它杀死了开发出自己的研究人员之一。<li><b>大幅增加</b>逃生者打开补给箱需要的时间。","name":"43 号植物 ","id":1162,"index":"PLANT_43_VINES","owner":"NEMESIS","rarity":2,"image":"iconAddon_plant43Vines"},{"description":"善于抓握的粘性舌头，能够轻松卷住接触到的一切。<li><b>中幅增加</b>逃生者被污染后的<b>减速</b>持续时间。</li><br>","name":"舔食者舌头","flavor":"“就像是……一场噩梦。”——克莱尔·雷德菲尔德","id":1163,"index":"LICKER_TONGUE","owner":"NEMESIS","rarity":2,"image":"iconAddon_lickerTongue"},{"description":"T型Nemesis研发中使用的某种寄生虫，能够劫持宿主的大脑。<li>受到污染后，逃生者会受到<b>浑然不觉</b>影响，持续60秒。","name":"Ne-Alpha 寄生虫","id":1164,"index":"NE_A_PARSITE","owner":"NEMESIS","rarity":3,"image":"iconAddon_neaParasite"},{"description":"在最近某次战斗中，它不幸被压扁了，还滴着鲜血。尽管如此，它还是飘着阵阵香气。<li>逃生者解锁一处补给箱后，其气场将显示<b>12秒</b>。</li>","name":"吉儿的三明治","id":1165,"index":"JILLS_SANDWICH","owner":"NEMESIS","rarity":3,"image":"iconAddon_jillSandwich"},{"description":"现在谁能拯救它们呢？这条用尽的墨带有某种因素让丧尸焦躁不安。<li><b>大幅降低</b>丧尸重生时间。</li><li>中幅增加丧尸移动速度。</li><li>当有<b>5</b>处发电机修理完毕后，被消灭的丧尸会重生于一处出口区域。</li><br>","name":"用尽的墨带","flavor":"“你给我听好……这是最后一次了。”——吉儿·瓦伦丁","id":1166,"index":"DEPLETED_INK_RIBBON","owner":"NEMESIS","rarity":3,"image":"iconAddon_depletedInkRibbon"},{"description":"这枚硬币上刻有小鸟花纹，周围环饰着月桂树花环。它已经碎成了两半。<li>移除比赛中的<b>1</b>处补给箱。</li><br>","name":"损坏的清醒硬币","flavor":"“我可没想过我第一天上班会是这个样子。”——里昂·S·肯尼迪","id":1167,"index":"BROKEN_RECOVERY_COIN","owner":"NEMESIS","rarity":3,"image":"iconAddon_brokenRecoveryCoin"},{"description":"这块象征浣熊市希望的徽章被彻底摧毁了。<li><b>巨幅增加</b>丧尸在一处发电机修理完毕后的移动速度，持续<b>30秒</b>。</li><br>","name":"碎裂的S.T.A.R.S.徽章","flavor":"“S.T.A.R.S……”——Nemesis","id":1168,"index":"SHATTERED_STARS_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_shatteredStarsBadge"},{"description":"由迷雾铸造出的玻璃徽章。它代表了一家远远超越道德和人文科学的公司。<li>逃生者使用疫苗时会受到<b>危险</b>状态影响，持续<b>12秒</b>。</li><br>","name":"荧虹保护伞徽章","flavor":"“奉献、诚实、正直。”这是保护伞公司创立的核心价值观。”——马特·戈基斯博士","id":1169,"index":"IRIDESCENT_UMBRELLA_BADGE","owner":"NEMESIS","rarity":4,"image":"iconAddon_iridescentUmbrellaBadge"}]');

/***/ }),

/***/ "./src/data.compiled/locales/zh/killerOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/zh/killerOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"在“凶残”得分项中奖励<b>50%</b>的血点。<br><li>效果可以被叠加。</li>","name":"雀祭环","flavor":"“此祭环用带血的枝条和内脏制作而成，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":100,"index":"TANAGER_WREATH","rarity":0,"image":"iconFavors_tanagerWreath"},{"description":"在“凶残”得分项中奖励<b>75%</b>的血点。<br><li>效果可以被叠加。</li>","name":"虔诚雀祭环","flavor":"“此祭环虔诚地用带血的枝条和内脏制作而成，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":101,"index":"DEVOUT_TANAGER_WREATH","rarity":1,"image":"iconFavors_devoutTanagerWreath"},{"description":"在“凶残”得分项中奖励<b>100%</b>的血点。<br><li>效果可以被叠加。</li>","name":"热情雀祭环","flavor":"“此祭环用带血的枝条和内脏制作而成，其中凝聚着无比自豪且永无止息的激情，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":102,"index":"ARDENT_TANAGER_WREATH","rarity":2,"image":"iconFavors_ardentTanagerWreath"},{"description":"在“阴险”得分项中奖励<b>50%</b>的血点。<br><li>效果可以被叠加。</li>","name":"鸦祭环","flavor":"“此祭环用发黑的木枝和煤炭制作而成，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":103,"index":"RAVEN_WREATH","rarity":0,"image":"iconFavors_ravenWreath"},{"description":"在“阴险”得分项中奖励<b>75%</b>的血点。<br><li>效果可以被叠加。</li>","name":"虔诚鸦祭环","flavor":"“此祭环虔诚地用发黑的木枝和煤炭制作而成，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":104,"index":"DEVOUT_RAVEN_WREATH","rarity":1,"image":"iconFavors_devoutRavenWreath"},{"description":"在“阴险”得分项中奖励<b>100%</b>的血点。<br><li>效果可以被叠加。</li>","name":"热情鸦祭环","flavor":"“此祭环用发黑的木枝和煤炭制作而成，其中凝聚着无比自豪且永无止息的激情，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":105,"index":"ARDENT_RAVEN_WREATH","rarity":2,"image":"iconFavors_ardentRavenWreath"},{"description":"在“捕猎”得分项中奖励<b>50%</b>的血点。<br><li>效果可以被叠加。</li>","name":"鹰祭环","flavor":"“此祭环用锋利的金属、绳子和羽毛制作而成，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":106,"index":"SPOTTED_OWL_WREATH","rarity":0,"image":"iconFavors_spottedOwlWreath"},{"description":"在“捕猎”得分项中奖励<b>75%</b>的血点。<br><li>效果可以被叠加。</li>","name":"虔诚鹰祭环","flavor":"“此祭环虔诚地用锋利的金属、绳子和羽毛制作而成，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":107,"index":"DEVOUT_SPOTTED_OWL_WREATH","rarity":1,"image":"iconFavors_devoutSpottedOwlWreath"},{"description":"在“捕猎”得分项中奖励<b>100%</b>的血点。<br><li>效果可以被叠加。</li>","name":"热情鹰祭环","flavor":"“此祭环用锋利的金属、绳子和羽毛制作而成，其中凝聚着无比自豪且永无止息的激情，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":108,"index":"ARDENT_SPOTTED_OWL_WREATH","rarity":2,"image":"iconFavors_ardentSpottedOwlWreath"},{"description":"在“献祭”得分项中奖励<b>50%</b>的血点。<br><li>效果可以被叠加。</li>","name":"鹃祭环","flavor":"“此祭环用木棍、绳子和骨头制作而成，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":109,"index":"SHRIKE_WREATH","rarity":0,"image":"iconFavors_shrikeWreath"},{"description":"在“献祭”得分项中奖励<b>75%</b>的血点。<br><li>效果可以被叠加。</li>","name":"虔诚鹃祭环","flavor":"“此祭环虔诚地用木棍、绳子和骨头制作而成，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":110,"index":"DEVOUT_SHRIKE_WREATH","rarity":1,"image":"iconFavors_devoutShrikeWreath"},{"description":"在“献祭”得分项中奖励<b>100%</b>的血点。<br><li>效果可以被叠加。</li>","name":"热情鹃祭环","flavor":"“此祭环用木棍、绳子和骨头制作而成，其中凝聚着无比自豪且永无止息的激情，旨在求助恶灵的护佑，以获得更多的鲜血。”","id":111,"index":"ARDENT_SHRIKE_WREATH","rarity":2,"image":"iconFavors_ardentShrikeWreath"},{"description":"在每个得分项中奖励<b>25%</b>的血点。<br><li>效果可以被叠加。</li>","name":"破裂之茧","flavor":"“一个无法辨别的茧，被里面的一个莫名生物撕开了一道裂口。”","id":112,"index":"HOLLOW_SHELL","rarity":1,"image":"iconFavors_hollowShell"},{"description":"本场游戏的所有得分项得到<b>100%</b>额外的血点奖励。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"逃生者布丁","flavor":"“充满嫉恨味道的布丁……”","id":113,"index":"SURVIVOR_PUDDING","rarity":1,"image":"iconFavors_survivorPudding"},{"description":"召唤恶灵，避免出现<b>2</b>个箱子。<br><li>效果可以被叠加。</li>","name":"切分的硬币","flavor":"“分成两块的厚金属硬币。”","id":114,"index":"CUT_COIN","rarity":3,"image":"iconFavors_cutCoin"},{"description":"求助恶灵，阻止出现<b>1个</b>箱子。<br><li>效果可以被叠加。</li>","name":"划痕硬币","flavor":"“一枚不知道来源的硬币，两面都被磨光了。”","id":115,"index":"SCRATCHED_COIN","rarity":1,"image":"iconFavors_scratchedCoin"},{"description":"召唤恶灵<b>小幅缩小</b>献祭钩之间的<b>间距</b>。<br><li>可叠加。</li>","name":"发霉的橡木","flavor":"“一块充潮湿腐烂的橡木，长满了霉菌。”","id":116,"index":"MOLDY_OAK","rarity":1,"image":"iconFavors_moldyOak"},{"description":"召唤恶灵，多造<b>2</b>个祭钩。<br><li>效果可以被叠加。</li>","name":"腐烂的橡木","flavor":"“被腐坏分解的橡木，上面蚀刻着奇怪的印记。”","id":117,"index":"ROTTEN_OAK","rarity":2,"image":"iconFavors_rottenOak"},{"description":"召唤恶灵，多造<b>3</b>个祭钩。<br><li>效果可以被叠加。</li>","name":"朽坏的橡木","flavor":"“腐坏的橡木渗出黑色的腐败液体。”","id":118,"index":"PUTRID_OAK","rarity":3,"image":"iconFavors_putridOak"},{"description":"赐予你在下一次游戏中亲手<b>处决最后一个逃生者</b>的能力。<br><li>保密类祭品。</li>","name":"柏木死亡链坠","flavor":"“你办事得力，下一个猎物归你了。”","id":119,"index":"CYPRESS_MEMENTO_MORI","rarity":1,"image":"iconFavors_momentoMoriCypress"},{"description":"赐予你在下一次游戏中亲手<b>处决一名</b>进入第二层上钩状态<b>的逃生者</b>的能力。<li>保密类祭品。</li>","name":"象牙死亡链坠","flavor":"“请赐予我亲手杀死一个逃生者的权力。”","id":120,"index":"IVORY_MEMENTO_MORI","rarity":2,"image":"iconFavors_momentoMoriIvory"},{"description":"赐予你在下一次游戏中亲手<b>处决所有</b>进入第二层上钩状态<b>的逃生者</b>的能力。<li>保密类祭品。</li>","name":"黑檀死亡链坠","flavor":"“我发誓我听见了它在和野兽说话。它停下了脚步，好像在静静倾听树叶的沙沙声，然后…咧嘴大笑。”","id":121,"index":"EBONY_MEMENTO_MORI","rarity":4,"image":"iconFavors_momentoMoriEbony"},{"description":"所有的逃生者进入游戏时位置分散。<br><li>保密类祭品。</li>","name":"碎裹尸布","flavor":"“破碎的黑色薄裹尸布。”","id":122,"index":"SHROUD_OF_SEPARATION","rarity":1,"image":"iconFavors_shroudOfSeparation"}]');

/***/ }),

/***/ "./src/data.compiled/locales/zh/killerPerks.json":
/*!*******************************************************!*\
  !*** ./src/data.compiled/locales/zh/killerPerks.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"解锁气场解读能力。每当一台发电机被修好时，该发电机周围<span class=\\"Highlight1\\">{0}米</span>内的逃生者气场会向你暴露<span class=\\"Highlight2\\">{1}秒</span>。<br>当最后一台发电机被完全修好时，所有逃生者的气场都会暴露<span class=\\"Highlight3\\">{2}秒</span>。","name":"苦涩低语","id":1,"index":"BITTER_MURMUR","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_bitterMurmur","tiers":[[16,5,5],[16,5,7],[16,5,10]]},{"description":"解锁个人气场解读能力的潜力。<span class=\\"Highlight1\\">{0}米</span>范围内，濒死逃生者的气场会显示出来。","name":"猎鹿者","id":2,"index":"DEERSTALKER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_deerstalker","tiers":[[12],[24],[36]]},{"description":"你拥有超乎寻常的大范围恐惧释放能力。你的恐惧半径增加<span class=\\"Highlight1\\">{0}%</span>。在“阴险”得分项中额外获得<span class=\\"Highlight2\\">{1}%</span>的血点奖励。<br>奖励血点将在游戏结算后获得。","name":"恐惧释放","flavor":"“他们越恐惧，我就越快乐。”","id":3,"index":"DISTRESSING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_distressing","tiers":[[22,50],[24,75],[26,100]]},{"description":"解锁隐身能力。<br><br>静止不动保持<span class=\\"Highlight1\\">{0}秒</span>，你就将获得<b>无法侦测</b>状态，直至你再次移动或行动时解除。","name":"静止隐身","id":4,"index":"INSIDIOUS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_insidious","tiers":[[4],[3],[2]]},{"description":"将力量植根于希望的厄咒逃生者即将逃离时，厄咒图腾的力量会驱使着你。<br>逃生大门电力一旦启动，如果在地图上仍剩余普通图腾，厄咒就会在图腾上生效。</br><br>厄咒激活时，<li>逃生者就会进入<b><i>危险</i></b>状态（一刀倒）。</li><li>你的移动速度会增加<span class=\\"Highlight1\\">{0}%</span></li><br>只要相联系的厄咒图腾仍旧存在，那么厄咒力的效果就会持续。<br>","name":"厄咒：难逃一死","flavor":"“恶魔变得越发凶猛、迅捷，仿佛恶灵在用一道无形的鞭子抽打其项背。”","id":5,"index":"HEX_NO_ONE_ESCAPES_DEATH","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_noOneEscapesDeath","tiers":[[2],[3],[4]]},{"description":"厄咒的力量根植于希望。逃生者的痴心妄想会使你兴奋并加强你的图腾。地图中每剩下1个普通和厄咒图腾，会让你获得一个印记。每个印记都会让你在“捕猎”得分项中额外<br><li>获得<span class=\\"Highlight1\\">{0}%</span>的血点奖励。</li><li>每个印记都会使逃生者清除图腾速度降低<span class=\\"Highlight2\\">{1}%</span>。</li><li>当有逃生者开始清除图腾时你会获得提示。</li><br><i>只要相关的厄咒图腾存在，厄咒效果就会持续存在。</i>","name":"厄咒：猎杀戾气","id":6,"index":"HEX_THRILL_OF_THE_HUNT","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_thrillOfTheHunt","tiers":[[6,4],[8,5],[10,6]]},{"description":"你对地下室里的钩子拥有如此盎然的兴致，以至于勾起了恶灵的垂涎。地下室钩子可以让你获得以下奖励：<br><li>增加<span class=\\"Highlight1\\">{0}%</span>的恶灵吞噬速度。</li><li>增加<span class=\\"Highlight2\\">{1}%</span>的试图逃脱难度。</li><li>增加<span class=\\"Highlight3\\">{2}%</span>的逃脱失败惩罚。</li>","name":"鬼魔神龛","flavor":"“这样你就会知道，想逃出生天简直就是痴心妄想。只要被挂上去，就得乖乖伏诛，成为恶灵的佳肴。”","id":7,"index":"MONSTROUS_SHRINE","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_monstrousShrine","tiers":[[3,5,3],[6,10,6],[9,15,9]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"辣手屠夫","tiers":[["你深谙杀戮之道。<i>普通攻击</i>成功击中后会对该逃生者施加<b>重伤</b>与<b>出血</b>状态效果。<b>出血</b>会<span class=\\"Highlight1\\">小幅</span>增加逃生者的流血速度。<br><i>辣手屠夫</i>施加的<b>出血</b>状态效果会在逃生者被完全治愈后被移除。<br><span class=\\"FlavorText\\">“这个恶魔天性残暴不仁。折磨猎物并使其生不如死会带给它莫大的快感，所以它绝对不会给猎物一个爽快的死法。”</span>"],["你深谙杀戮之道。<i>普通攻击</i>成功击中后会对该逃生者施加<b>重伤</b>与<b>出血</b>状态效果。<b>出血</b>会<span class=\\"Highlight1\\">中幅</span>增加逃生者的流血速度。<br><i>辣手屠夫</i>施加的<b>出血</b>状态效果会在逃生者被完全治愈后被移除。<br><span class=\\"FlavorText\\">“这个恶魔天性残暴不仁。折磨猎物并使其生不如死会带给它莫大的快感，所以它绝对不会给猎物一个爽快的死法。”</span>"],["你深谙杀戮之道。<i>普通攻击</i>成功击中后会对该逃生者施加<b>重伤</b>与<b>出血</b>状态效果。<b>出血</b>会<span class=\\"Highlight1\\">大幅</span>增加逃生者的流血速度。<br><i>辣手屠夫</i>施加的<b>出血</b>状态效果会在逃生者被完全治愈后被移除。<br><span class=\\"FlavorText\\">“这个恶魔天性残暴不仁。折磨猎物并使其生不如死会带给它莫大的快感，所以它绝对不会给猎物一个爽快的死法。”</span>"]],"id":8,"index":"SLOPPY_BUTCHER","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_sloppyButcher"},{"description":"该区域的乌鸦可以直接和你交流。<span class=\\"Highlight1\\">{0}%</span>的时间里，当你在<span class=\\"Highlight2\\">{1}米</span>范围内时，鸣叫的乌鸦会给你一个可视化提示。<br><i>鬼鸦谍影</i>的冷却时间为 <span class=\\"Highlight3\\">{2}秒。</span> ","name":"鬼鸦谍影","flavor":"“它们所盘旋的阴影里，每一声哀嚎都让我们胆颤心惊。”","id":9,"index":"SPIES_FROM_THE_SHADOWS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_spiesFromTheShadows","tiers":[[100,20,5],[100,28,5],[100,36,5]]},{"description":"你运用主要武器袭击失手后的恢复速度加快。如果<i>普通攻击</i>未击中目标，冷却时间减少<span class=\\"Highlight1\\">{0}%</span>。","name":"不屈不挠","id":10,"index":"UNRELENTING","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_unrelenting","tiers":[[20],[25],[30]]},{"description":"你基本可以听懂恶灵的声音。当你在距离一个逃生者<span class=\\"Highlight1\\">{0} 米</span>范围内时，可以零星听到一点恶灵的低语。","name":"窃窃私语","flavor":"“迷雾到底作何用，我们不得而知，但毋庸置疑的是，它是恶魔的帮凶。”——笔记","id":11,"index":"WHISPERS","owner":"NOONE","rarity":[1,2,3],"image":"iconPerks_whispers","tiers":[[48],[40],[32]]},{"description":"你对猎物的呼吸极其敏感。痛苦中的逃生者呼吸的响亮度增加<span class=\\"Highlight1\\">{0}%</span>，并且通常呼吸的响亮度增加<span class=\\"Highlight2\\">{1}%</span>。","name":"鸣喘","flavor":"“如果你不打算停下来并稳住你的呼吸的话……她来帮你。”","id":12,"index":"STRIDOR","owner":"NURSE","rarity":[1,2,3],"image":"iconPerks_stridor","tiers":[[25,0],[50,0],[50,25]]},{"description":"在面临不可避免的死亡时，他们的勇气荡然无存。<br>每个受伤、垂死或被钩住的逃生者会使所有逃生者的修理、破坏和图腾破坏速度降低<span class=\\"Highlight1\\">{0}%</span>，最多降低<span class=\\"Highlight1\\">{1}%</span>。","name":"死亡恐惧","flavor":"“她将我们玩弄于鼓掌之间，并幸灾乐祸。”","id":13,"index":"THANATOPHOBIA","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_thatanophobia","tiers":[[4,16],[4.5,18],[5,20]]},{"description":"解开前所未有的气场探知潜能。你将可以感知到<span class=\\"Highlight1\\">{0}米</span>范围内任何逃生者进行治疗或被治疗的气场。","name":"护士的呼唤","flavor":"“也许是她的职业病，她总是能找到那些需要帮助的人。”","id":14,"index":"A_NURSES_CALLING","rarity":[1,2,3],"owner":"NURSE","image":"iconPerks_aNursesCalling","tiers":[[20],[24],[28]]},{"description":"你的存在本身就能引起极大的恐惧。处于你的恐惧范围内的逃生者在修理或治疗时触发技能检验的几率提高<span class=\\"Highlight1\\">{0}%</span>。触发的技能检验的成功区域缩小<span class=\\"Highlight2\\">{1}%</span>。","name":"恐慌降临","flavor":"\\"我们感觉厄运临头。\\"","id":15,"index":"UNNERVING_PRESENCE","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_unnervingPresence","tiers":[[10,40],[10,50],[10,60]]},{"description":"你的彪悍强壮之力让你可以撕碎所有猎物的防线。破坏板子<b>、可破坏墙壁以及发电机</b>的速度加快<span class=\\"Highlight1\\">{0}%</span>。","name":"所向无敌","flavor":"“这些怪物并非只会使用蛮力，它们身后还有一股黑暗的力量在催动着。”","id":16,"index":"BRUTAL_STRENGTH","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_brutalStrength","tiers":[[10],[15],[20]]},{"description":"一想到可以拿钩子挂住你的猎物，你就兴奋不已。当你抱着逃生者时，移动速度会增加<span class=\\"Highlight1\\">{0}%。</span>当你抱着逃生者时，你的恐惧效果半径会增加<span class=\\"Highlight2\\">{1}米</span>。","name":"欣喜若狂","flavor":"“从某种意义上讲，比杀我们的欲望更让杀手兴奋的，是用钩子把我们中的一人挂起来。”","id":17,"index":"AGITATION","rarity":[1,2,3],"owner":"TRAPPER","image":"iconPerks_agitation","tiers":[[6,6],[12,8],[18,12]]},{"description":"<span class=\\"Highlight\\">{0}</span>","name":"穷追不舍","tiers":[["你的精确追踪能力能够使你更精准的追踪到跑动的逃生者留下的痕迹。<br>逃生者留下的划痕(脚印)会<span class=\\"Highlight1\\">小幅</span>变得更加紧凑。<br><span class=\\"FlavorText\\">“永远不要停下脚步，希望你总比野兽快两步。”——笔记</span>"],["你的精确追踪能力能够使你更精准的追踪到跑动的逃生者留下的痕迹。<br>逃生者留下的划痕(脚印)会<span class=\\"Highlight1\\">中幅</span>变得更加紧凑。<br><span class=\\"FlavorText\\">“永远不要停下脚步，希望你总比野兽快两步。”——笔记</span>"],["你的精确追踪能力能够使你更精准的追踪到跑动的逃生者留下的痕迹。<br>逃生者留下的划痕(脚印)会<span class=\\"Highlight1\\">大幅</span>变得更加紧凑。<br><span class=\\"FlavorText\\">“永远不要停下脚步，希望你总比野兽快两步。”——笔记</span>"]],"id":18,"index":"PREDATOR","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_predator"},{"description":"就像嗅觉灵敏的猎狗一样，即使百十里范围内的血腥味也逃不过你的追踪。<span class=\\"Highlight1\\">大幅加强</span>血迹的辨识度，血迹的保留时间将增加<span class=\\"Highlight2\\">{0}秒</span>。","name":"血气追踪","flavor":"\\"月明之夜，鹅卵石上闪耀点点腥红之光；我的生命一滴滴流逝，追杀者已然迫近身旁。\\"","id":19,"index":"BLOODHOUND","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_bloodhound","tiers":[[2],[3],[4]]},{"description":"你在暗夜里如视白昼。你的视野变宽<span class=\\"Highlight2\\">{0}度</span>。<br><i>不与其他视野强化效果叠加。</i>","name":"暗夜之睛","flavor":"\\"他的眼睛如利剑一般穿透无边的黑夜，让你的魂魄在黑暗中不得安宁。\\"","id":20,"index":"SHADOWBORN","rarity":[1,2,3],"owner":"WRAITH","image":"iconPerks_shadowborn","tiers":[[9],[12],[15]]},{"description":"你对疼痛具有抵抗力。你被<b>木板砸晕</b>的持续时间缩短<span class=\\"Highlight1\\">{0}%</span>。","name":"耐力持久","flavor":"He stops at nothing.","id":21,"index":"ENDURING","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_enduring","tiers":[[40],[45],[50]]},{"description":"与迷雾的其他野兽不同，你已经适应了光明。你对手电筒、鞭炮、闪光弹和爆炸地雷的障目状态免疫。试图使你障目的逃生者会暴露其气场<span class=\\"Highlight1\\">{0}秒。</span>","name":"光明之眼","flavor":"“这些怪物……他们适应了！他们有了奇怪的新能力。”——维戈的日记","id":22,"index":"LIGHTBORN","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_lightborn","tiers":[[6],[8],[10]]},{"description":"当发电机的修理进度到达<span class=\\"Highlight1\\">{0}%</span>时将发出声音提示，同时你将获得<b>无法侦测</b>状态，持续<span class=\\"Highlight2\\">{2}秒</span>。","name":"工匠","flavor":"“邪恶的杀手能化腐朽为神奇。制作出的工具用来以新奇的方式凌虐我们……”——笔记本","id":23,"index":"TINKERER","rarity":[1,2,3],"owner":"HILLBILLY","image":"iconPerks_tinkerer","tiers":[[70,12],[70,14],[70,16]]},{"description":"某个逃生者将成为你的<b>血祭品</b>。<br>每次<i>普通攻击</i>成功击中非血祭品目标时获得一枚印记。<br>每个印记会减少<span class=\\"Highlight1\\">{0}%</span>成功<i>普通攻击</i>后的冷却时间（可叠加），最多可获得<span class=\\"Highlight2\\">{1}</span>个印记。<br><i>普通攻击</i>命中血祭品会使你失去<span class=\\"Highlight3\\">{2}</span>个印记。<br>当你的血祭品死亡或被献祭后，你将无法再获得印记。<br><li><i>杀手一次只能将一名逃生者变为<b>血祭品</b>。</i></li>","name":"把最好的留在最后","flavor":"“死神来光临你的小镇了，警官。”——山姆·卢米斯","id":24,"index":"SAVE_THE_BEST_FOR_LAST","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_saveTheBestForLast","tiers":[[5,8,4],[5,8,3],[5,8,2]]},{"description":"某个逃生者将成为你的<b>血祭品</b>。<br>每当你的血祭品逃跑后，你将获得一个印记，最多{0}个。<br>每个印记将增加你<span class=\\"Highlight1\\">{1}%</span>的移动速度。<br>每次<i>普通攻击</i>或<i>特殊攻击</i>都将消耗一个印记。<br><li><i>杀手一次只能将一名逃生者变为<b>血祭品</b>。</i></li>","name":"不要玩儿食物","flavor":"“你把他们都耍了，对不对麦克？但我可没有。”——山姆·卢米斯博士","id":25,"index":"PLAY_WITH_YOUR_FOOD","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_playWithYourFood","tiers":[[3,3],[3,4],[3,5]]},{"description":"你将一名逃生者视为<b>血祭品</b>。<br>你的血祭品在解救和治疗其他逃生者时，获得<span class=\\"Highlight1\\">{0}%</span>行动速度加成。<br>你每次钩住不是血祭品的逃生者时，如果血祭品还活着，则你获得一个印记。<br>如果血祭品还活着，则每个印记使其他所有不是血祭品的逃生者在修理、治疗和破坏时承受<span class=\\"Highlight2\\">{1}%</span>速度惩罚。<br><li><i>杀手一次只能将一名逃生者变为血祭品。</i></li>","name":"湮灭之光","flavor":"This isn\'t a man...","id":26,"index":"DYING_LIGHT","rarity":[1,2,3],"owner":"SHAPE","image":"iconPerks_dyingLight","tiers":[[33,2],[33,2.5],[33,3]]},{"description":"一个可以阻碍气场解读能力的厄咒。在厄咒图腾激活时用<i>普通攻击</i>击中逃生者会引起<b>障目</b>状态效果。此效果在命中最后<span class=\\"Highlight1\\">{0}</span>个逃生者时生效。<br><i>只要相关的厄咒图腾存在，厄咒效果就会持续存在。</i>","name":"厄咒：第三封印","flavor":"“她已经碰过你了，你身上有女巫的印记！”","id":27,"index":"HEX_THE_THIRD_SEAL","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_theThirdSeal","tiers":[[2],[3],[4]]},{"description":"会影响所有逃生者修理发电机进度的厄咒。所有发电机均会受<i>厄咒：毁灭</i>影响。当发电机未被逃生者修理时，其修理进度将会立刻回退，且回退速度为正常速度的<span class=\\"Highlight1\\">{0}%</span>。<br><br><i>只要厄咒图腾未被摧毁，厄咒效果就将持续。</i><br>","name":"厄咒：毁灭","flavor":"“厄咒降于你身。那将是你的毁灭。”","id":28,"index":"HEX_RUIN","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_ruin","tiers":[[100],[150],[200]]},{"description":"厄咒的力量根植于希望。逃生者的痴心妄想引发了你的饥饿感。当逃生者从至少 <span class=\\"Highlight1\\">24米</span>外的吊钩中被救出时，吞噬希望会收到1个代币。<br><li><span class=\\"Highlight3\\"> 2个代币</span>：钩住逃生者10秒后，获得<span class=\\"Highlight2\\">{0}%</span> <b><i>急速</i></b>状态效果，<span class=\\"Highlight3\\"></span>持续<span class=\\"Highlight3\\">10秒</span>。</li><li><span class=\\"Highlight3\\">3个代币</span>：逃生者遭受<b><i>危险</i></b>状态效果。</li><li><span class=\\"Highlight2\\">5个代币</span>：赋予你自己杀死逃生者的能力。</li><br><i>只要相关的厄咒图腾存在，厄咒效果就会持续存在。</i><br>","name":"厄咒：吞噬希望","flavor":"“如果你什么都不做，那么你手上就沾有他们的鲜血。如果你拯救他们，她的饥饿感就会增长。”","id":29,"index":"HEX_DEVOUR_HOPE","rarity":[1,2,3],"owner":"HAG","image":"iconPerks_devourHope","tiers":[[3],[4],[5]]},{"description":"你的存在本身就能引起极大的恐惧。处于你的恐惧范围内的逃生者的效率降低。<br>受影响的逃生者的物品消耗速度增加<span class=\\"Highlight1\\">{0}%</span>。","name":"压迫性气场","flavor":"\\"见鬼！我把纱布丢地上了！\\"","id":30,"index":"OVERWHELMING_PRESENCE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_overwhelmingPresence","tiers":[[80],[90],[100]]},{"description":"追猎时心思缜密，杀戮时手法可怕。<br>当你在追猎时，你的恐惧范围会扩大<span class=\\"Highlight1\\">{0} 米</span>。在其他时候，你的恐惧范围会缩小<span class=\\"Highlight2\\">{0} 米</span> 而你的视野会拓展<span class=\\"Highlight3\\">{1} 度</span>。<br><i>视野增益不重叠。</i>","name":"监控与打击","flavor":"“治疗时间到了！”——医生","id":31,"index":"MONITOR_AND_ABUSE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_monitorAndAbuse","tiers":[[8,8,3],[8,8,5],[8,8,10]]},{"description":"憎恨是你前进的推动力。<br>通过执行<b>破坏发电机</b>动作来使一台发电机电量超载。下一个使用该发电机的逃生者将面临<span class=\\"Highlight1\\">巨幅</span>难度的技能检验。未通过技能检验会导致额外的<span class=\\"Highlight2\\">{0}%</span>发电机退化。<br>技能检验成功则将防止发电机爆炸，但不会赋予玩家任何进度。","name":"电量超载","flavor":"“这是一个陷阱，但是这个陷阱无法避开……”——医生","id":32,"index":"OVERCHARGE","rarity":[1,2,3],"owner":"DOCTOR","image":"iconPerks_generatorOvercharge","tiers":[[3],[4],[5]]},{"description":"你对杀戮的渴求如此强烈，以至于暂时中断了你与恶灵之间的连结，你已完全不受控制。<br><br>你获得1级杀戮欲望后获得<b>无法侦测</b>效果，并持续至你失去杀戮欲望。<br><br><li>在猎人行动项中获得额外<span class=\\"Highlight1\\">{0}%</span>血点。</li>","name":"嗜血凶兽","flavor":"“她去哪儿了？”","id":33,"index":"BEAST_OF_PREY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_BeastOfPrey","tiers":[[30],[40],[50]]},{"description":"解锁你的气场解读能力。当逃生者进入地下室且你处于地下室<span class=\\"Highlight1\\">{1}米</span>外的位置时，逃生者的气场会显示给你<span class=\\"Highlight2\\">{0}秒</span>。<br><i>领地意识</i>每<span class=\\"Highlight3\\">{2}秒</span>只能触发一次。","name":"领地意识","id":34,"index":"TERRITORIAL_IMPERATIVE","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_TerritorialImperative","tiers":[[3,32,30],[3,32,25],[3,32,20]]},{"description":"厄咒的力量来自绝望。你的狩猎就是一曲令人无法抵抗的恐惧之歌，使猎物的注意力更加混乱。逃生者在治疗或修理的技能检验失败后会导致<span class=\\"Highlight1\\">{0}%</span>进度倒退惩罚。<br>每次逃生者上钩时，猎手摇篮曲都会获得力量。这会影响治疗与修理技能检验警告：<br><li><b>1至4枚代币：</b>技能检验警告声音与技能检验之间的时间缩短。</li><li><b>5枚代币：</b>没有技能检验警告。</li><br><i>只要厄咒图腾存在，相关的厄咒效果就会持续。</i>","name":"厄咒：猎手摇篮曲","id":35,"index":"HEX_HUNTRESS_LULLABY","rarity":[1,2,3],"owner":"HUNTRESS","image":"iconPerks_HuntressLullaby","tiers":[[2],[4],[6]]},{"description":"你的残暴攻击造成的创伤使逃生者痛苦地呼救变得困难。<br>被你的普通攻击命中而陷入濒死状态的逃生者气场不会暴露给<span class=\\"Highlight1\\">{2}米</span>范围之外的其他逃生者。<br>被你的普通攻击命中而陷入濒死状态的逃生者爬行速度<span class=\\"Highlight2\\">减慢{1}%</span>，持续<span class=\\"Highlight3\\">{0}秒</span>。<br>在此期间，逃生者会受到<b>障目</b>状态影响。","name":"击倒出局","flavor":"“哦，那枪不怎么样。老办法……用大锤！看到了吧，这种办法更好。那样他们死得更难看。”——纽宾斯·索耶","id":36,"index":"KNOCK_OUT","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_knockOut","tiers":[[32,50,15],[24,50,15],[16,50,15]]},{"description":"与恶灵的深层连结解锁了你的气场解读能力。当一名逃生者上钩后，你将能够在 <span class=\\"Highlight1\\">{0}秒</span>内感受到距离钩子<span class=\\"Highlight2\\">{1}米</span>以外的其它逃生者的气场。<br><li>每当一名逃生者初次上钩，你都会获得额外<span class=\\"Highlight3\\">{2}%</span>的血点奖励，最多可叠加至<span class=\\"Highlight4\\">{3}%</span>。<br>血点奖励将在游戏结束后获得。</li>","name":"人肉烧烤","flavor":"“我就是不能不以杀人为乐。有些事是你冥冥之中必须去做的，并不是说你非得喜欢做这件事。”——德雷顿·索耶","id":37,"index":"BARBECUE_AND_CHILI","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_BBQAndChili","tiers":[[4,40,25,50],[4,40,25,75],[4,40,25,100]]},{"description":"你的凶残攻击会使逃生者掉落手中的道具。如果道具掉落后没有被拾起，就会在<span class=\\"Highlight1\\">{0}秒</span>后被恶灵吞噬。<br><span class=\\"Highlight2\\">{1}米</span>内的道具显示为白色气场。道具气场会逐渐变为红色直至被恶灵吞噬。","name":"富兰克林之死","flavor":"“莎莉，我好像听见了什么动静。停下！停下！”——富兰克林","id":38,"index":"FRANKLINS_DEMISE","rarity":[1,2,3],"owner":"CANNIBAL","image":"iconPerks_franklinsLoss","tiers":[[150,32],[120,32],[90,32]]},{"description":"跟丢猎物的压力令你怒火中烧，并给你前所未有的动力。每当逃生者修理好1台发电机，怒火中烧的效果就会变强。<br><li>每维修完一台发电机，获得<span class=\\"Highlight1\\">{0}%</span>的可叠加增益效果，提高拾取、掉落、翻越以及破坏发电机和木板的速度，持续到本局游戏结束。</li>","name":"怒火中烧","id":39,"index":"FIRE_UP","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_fireUp","tiers":[[3],[3.5],[4]]},{"description":"你将一名逃生者视为<b>血祭品</b>。每次<i>普通攻击</i>击中你的血祭品时，打开逃生大门所需的时间会额外增加<span class=\\"Highlight1\\">{0}秒</span>，最高可累计至<span class=\\"Highlight2\\">{1}秒</span>。<br>血祭品将不受到<i>记忆犹新影响。</i><br><li><i>杀手一次只能将一名逃生者变为<b>血祭品</b>。</i></li>","name":"记忆犹新","id":40,"index":"REMEMBER_ME","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_rememberMe","tiers":[[4,8],[4,12],[4,16]]},{"description":"当一扇逃生大门被打开时，血腥狱长就会被激活。所有站在大门内的逃生者都会将气场暴露给你。<br>每场比赛限用一次，当血腥狱长被激活时，将一名逃生者挂上钩子会召唤恶灵将两扇逃生大门封锁<span class=\\"Highlight1\\">{0}秒</span>。","name":"血腥狱长","id":41,"index":"BLOOD_WARDEN","rarity":[1,2,3],"owner":"NIGHTMARE","image":"iconPerks_bloodWarden","tiers":[[30],[40],[60]]},{"description":"你的精密改装能使钩子在遭到破坏时向你报警。<br><li>当有逃生者开始破坏钩子时，你会收到提示。</li><li>搬运逃生者时，你能看到钩子<span class=\\"Highlight1\\">{0}米</span>范围内所有逃生者的气场。</li>","name":"行刑者的技巧","flavor":"“不要找借口，不要含糊其辞……不要哭。”——阿曼达·杨","id":42,"index":"HANGMANS_TRICK","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_hangmansTrick","tiers":[[2],[4],[6]]},{"description":"解锁个人气场解读能力的潜力。所有进度倒退的发电机都将以白色高亮形式显示其气场。一旦倒退被打断，发电机将以黄色高亮形式显示其气场，持续<span class=\\"Highlight1\\">{0}秒</span>。<br>发电机维修产生的噪音可在<span class=\\"Highlight2\\">{1}米</span>外听到。","name":"了如指掌","flavor":"“你能老实点吗？”——阿曼达·杨","id":43,"index":"SURVEILLANCE","rarity":[1,2,3],"owner":"PIG","image":"iconPerks_surveillance","tiers":[[8,8],[12,8],[16,8]]},{"description":"当距离你<span class=\\"Highlight1\\">{0}米</span>外有逃生者将另一名逃生者救下钩子时，<i>做出你的选择</i>会使逃生者发出尖叫，并对其施加<b><i>危险</i></b>状态，持续<span class=\\"Highlight2\\">{1}秒</span>。<br><i>做出你的选择</i>有<span class=\\"Highlight3\\">{2}秒</span>的技能冷却时间。","name":"做出你的选择","flavor":"“你会惊讶于到底是何种工具可以拯救一条命。” ——阿曼达·杨","id":44,"index":"MAKE_YOUR_CHOICE","rarity":[2,2,3],"owner":"PIG","image":"iconPerks_makeYourChoice","tiers":[[32,40,40],[32,50,50],[32,60,60]]},{"description":"你牢牢地抓住逃生者，让其毫无逃脱的机会。逃生者挣扎的效果减少<span class=\\"Highlight1\\">{0}%</span>。挣脱你的魔爪所需的时间增加<span class=\\"Highlight2\\">{1}%</span>。","name":"牢牢紧握","id":45,"index":"IRON_GRASP","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_ironGrasp","tiers":[[75,4],[75,8],[75,12]]},{"description":"你的出现就能给人带来恐惧。处于你的恐惧范围内的逃生者将受到<span class=\\"Highlight1\\">{0}%</span>的治疗速度惩罚。<br>","name":"小丑恐惧症","id":46,"index":"COULROPHOBIA","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_coulrophobia","tiers":[[30],[40],[50]]},{"description":"与恶灵的深层连结解锁了为你强大的力量。将一名逃生者挂上钩子后，下一台被你破坏的发电机会瞬间倒退<span class=\\"Highlight1\\">{0}%</span>的进度条。正常的倒退效果会在其之后触发。<br><i>心惊肉跳</i>将在挂完逃生者的<span class=\\"Highlight1\\">{1}秒</span>内处于激活状态。","name":"心惊肉跳","id":47,"index":"POP_GOES_THE_WEASEL","rarity":[1,2,3],"owner":"CLOWN","image":"iconPerks_popGoesTheWeasel","tiers":[[25,35],[25,40],[25,45]]},{"description":"翻越速度增加<span class=\\"Highlight1\\">{0}%</span>。<br>执行翻越动作时召唤恶灵封住该处翻越点，持续<span class=\\"Highlight1\\">{1}秒</span>。<br>该技能最多只能同时封锁1处翻越点。封锁效果仅对逃生者有效且不影响板子。","name":"花言巧语","id":48,"index":"BAMBOOZLE","rarity":[1,2,2],"owner":"CLOWN","image":"iconPerks_bamboozle","tiers":[[5,8],[10,12],[15,16]]},{"description":"每当你破坏板子时都会激怒恶灵。<br>当你破坏掉<span class=\\"Highlight1\\">{0}块板子</span>后，下一次被板子砸晕时恶灵会直接破坏掉这块板子。<br>但你仍会受到眩晕效果的影响。<br>","name":"暴怒怨灵","flavor":"“怨愤在她血液中流淌。”","id":49,"index":"SPIRIT_FURY","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_spiritFury","tiers":[[4],[3],[2]]},{"description":"地图中将生成两个陷阱厄咒图腾。<br>当两个陷阱图腾中的一个被逃生者拆除时，所有逃生者都会被施加<span class=\\"Highlight3\\">危险状态</span>（一刀倒），并持续<span class=\\"Highlight1\\"> {0}秒</span>。<br>剩下的一个陷阱图腾会立刻变回普通图腾。<br>","name":"厄咒：闹鬼之地","flavor":"“她的家成了闹鬼之地。”","id":50,"index":"HEX_HAUNTED_GROUND","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hauntedGround","tiers":[[40],[50],[60]]},{"description":"某个逃生者将成为你的<b>血祭品</b>。<br>每当一台发电机被修好时，你的位置会向你的血祭品暴露<span class=\\"Highlight1\\"> {0}秒</span>。<br>每当一台发电机被修好时，所有逃生者的位置都会向你暴露<span class=\\"Highlight2\\"> {1}秒</span>。<br>当所有发电机都被修好后，你的血祭品会被施加<span class=\\"Highlight3\\">危险状态</span>（一刀倒），并且可以被<span class=\\"Highlight3\\">处决</span>。<br><li><i>杀手一次只能将一名逃生者变为血祭品。</i></li>","name":"怨气冲天","id":51,"index":"RANCOR","rarity":[1,2,3],"owner":"SPIRIT","image":"iconPerks_hatred","tiers":[[5,3],[4,3],[3,3]]},{"description":"任何在<span class=\\"Highlight1\\">{0}米</span>内被两名或以上逃生者修理的发电机会用黄色气场标记。当发电机被首次高亮标记时，冲突会使发电机触发一次响亮噪音提示。当发电机离开范围内或不再被两名或以上逃生者修理时，气场会再持续<span class=\\"Highlight2\\">4秒</span>。<br>","name":"冲突","flavor":"“聪明人都死的早。这就是我们的原则。”——军团","id":52,"index":"DISCORDANCE","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_discordance","tiers":[[64],[96],[128]]},{"description":"搬运逃生者时，<i>普通攻击</i>未命中敌人则不会有冷却限制。<i>普通攻击</i>命中其他逃生者则会使当前搬运的逃生者的挣扎计时器暂停<span class=\\"Highlight1\\">{0}秒</span>。<br>","name":"疯狂勇气","flavor":"“别想着逃走了。我们对此很在行的。”——军团","id":53,"index":"MAD_GRIT","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_madGrit","tiers":[[2],[3],[4]]},{"description":"你的开柜速度增加<span class=\\"Highlight1\\">{0}%</span>。<br><br>逃生者每次从柜子中出来时进入危险状态<span class=\\"Highlight1\\">{2}秒</span>，并且尖叫暴露自己的位置<span class=\\"Highlight1\\">{1}秒</span>。<br>","name":"铁处女","flavor":"“这里不是懦夫待的地方。” ——军团","id":54,"index":"IRON_MAIDEN","rarity":[1,2,3],"owner":"LEGION","image":"iconPerks_ironMaiden","tiers":[[30,30,4],[40,30,4],[50,30,4]]},{"description":"你的祈祷召唤出一种黑暗力量，使逃生者活下来的希望更加渺茫。<span class=\\"Highlight1\\">距离你最远的{0}发电机</span>在游戏开始时被恶灵阻挡<span class=\\"Highlight1\\">{1}秒</span>。<br>逃生者无法在此期间修理这些发电机。受影响的发电机会显示为白色气场。<br>","name":"腐烂干预","flavor":"“这片大地上的所有人必将明白，众神饶不了叛变者。”（阿迪里斯的祈祷文，3.7）","id":55,"index":"CORRUPT_INTERVENTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_corruptIntervention","tiers":[[3,80],[3,100],[3,120]]},{"description":"叛变者的叫喊声让你心脏怦怦直跳。<br>当有逃生者进入濒死状态时，所有处于你的恐惧范围内的逃生者都会发出叫喊声并暴露自己的位置，持续<span class=\\"Highlight1\\">{0}秒</span>。","name":"恐惧传染","flavor":"“异教徒的心中充满了恐惧，他们在倒下的人脚边哭泣。”（赞美之歌，11.4）","id":56,"index":"INFECTIOUS_FRIGHT","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_infectiousFright","tiers":[[4],[5],[6]]},{"description":"你显露出的力量在整片大陆刮起了一阵恐慌的旋风。<br><br>你将一名逃生者视为血祭品。<i>普通攻击</i>命中血祭品将使目标发出<span class=\\"Highlight1\\">{0}米</span>的恐惧范围，持续<span class=\\"Highlight2\\">{1}秒</span>。在此期间，你获得<b>无法侦测</b>状态。<br><br>在此期间血祭品能够听到自己发出的恐惧范围。<br><br><li><i>杀手一次只能将一名逃生者变为<b>血祭品</b>。</i></li><br>","name":"黑暗奉献","flavor":"“而恐惧将攫住一位无信仰者的心脏，假借吾之名义降临。”（阿迪里斯的祈祷文，48.9）","id":57,"index":"DARK_DEVOTION","rarity":[1,2,3],"owner":"PLAGUE","image":"iconPerks_darkDevotion","tiers":[[20,32],[25,32],[30,32]]},{"description":"你敏锐的感官在恶灵的黑暗世界里得到进一步强化。<br><br>解锁个人气场解读能力的潜力。距离你<span class=\\"Highlight1\\">48米</span>内进行快速动作的逃生者将暴露气场，持续<span class=\\"Highlight2\\">{0}秒</span>。<br><br><i>洗耳恭听</i>每<span class=\\"Highlight3\\">{1}秒</span>只能触发一次。<br>","name":"洗耳恭听","flavor":"“别担心。这种事我已经策划了一辈子。”——鬼面","id":58,"index":"IM_ALL_EARS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_imAllEars","tiers":[[6,60],[6,50],[6,40]]},{"description":"你的黑暗设计与出色的沉着心态会吸引恶灵。<br><br>捡起一名逃生者后，所有未在被逃生者修理的发电机都会被恶灵笼罩，在接下来的<span class=\\"Highlight1\\">{0}秒</span>内无法被修理。受影响的发电机会显示为白色气场。<br><br><i>亢奋颤栗</i>每<span class=\\"Highlight2\\">{1}秒</span>仅可触发一次。<br>","name":"惊险战栗","flavor":"“暗夜是我的帮手，而这里的夜色永无止境。”——鬼面","id":59,"index":"THRILLING_TREMORS","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_thrillingTremors","tiers":[[16,100],[16,80],[16,60]]},{"description":"你将一名逃生者视为<b>血祭品</b>。你潜伏在暗影之中，一个接一个地消灭目标。当你的血祭品被钩住时，<i>鬼祟追杀</i>获得一枚印记，最多可获得<span class=\\"Highlight1\\">{0}枚印记</span>。<br><br>每枚印记可在追杀期间使你的恐惧范围缩小<span class=\\"Highlight2\\">{1}米</span>。<br><br>当逃生者把血祭品从钩子上救下来时，营救者会变为血祭品。如果血祭品被献祭或击杀，你会失去所有印记。<br><br><li><i>杀手同一时间只能标记一个<b>血祭品</b>。</i></li><br>","name":"鬼祟追杀","flavor":"“你绝对想不到我打算如何料理你。这会连续几周成为新闻头条。你就看我的吧。”——鬼面","id":60,"index":"FURTIVE_CHASE","rarity":[1,2,3],"owner":"GHOST","image":"iconPerks_furtiveChase","tiers":[[2,4],[3,4],[4,4]]},{"description":"你的诡异气息充斥在空气中并干扰科技产品。<br><br>用<i>普通攻击</i>使逃生者陷入濒死状态会导致<span class=\\"Highlight1\\">{0}米范围</span>内所有发电机立刻爆炸且进度倒退。受到电涌效果的发电机立刻倒退<span class=\\"Highlight2\\">{1}%</span>进度。<li><i>电涌</i>每<span class=\\"Highlight3\\">{2}秒只能触发一次</span>。</li><br>","name":"电涌","flavor":"“这个怪物似乎能对电能和附近的电子元器件产生未知的影响。”——霍金斯国家实验室","id":61,"index":"SURGE","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_surge","tiers":[[32,8,60],[32,8,50],[32,8,40]]},{"description":"你恐怖的外观使你的猎物虚弱无力。<br><br>逃生者在修理发电机时，会陷入<b>疲劳</b>状态。<br><br>任何<b>疲劳</b>状态将会在逃生者修理发电机时暂停。结束修理后，<b>疲劳</b>状态会继续存在<span class=\\"Highlight2\\">{1}秒</span>。<br>","name":"瓦解意志","flavor":"“该样本明显具有念动能力，它能导致附近的人产生恐惧和疲劳感。”——霍金斯国家实验室","id":62,"index":"MINDBREAKER","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_mindBreaker","tiers":[[3],[4],[5]]},{"description":"当你的猎物试图逃跑时，你与异界的联系就会显现出来。<br><br>每当一台发电机被修好时，在接下来的<span class=\\"Highlight2\\">{1}秒</span>里，<span class=\\"Highlight1\\">{0}米半径</span>内的所有窗口和翻越地点将被阻挡，令逃生者无法使用。<br><br>在此期间，你能看到被<i>残酷禁制</i>阻挡的翻越地点的气场。<br>","name":"残酷禁制","flavor":"“该样本似乎能影响附近物件，使其仿佛在另一个维度里以别的形式存在一样。”——霍金斯国家实验室","id":63,"index":"CRUEL_LIMITS","rarity":[1,2,3],"owner":"DEMOGORGON","image":"iconPerks_cruelConfinement","tiers":[[32,20],[32,25],[32,30]]},{"description":"解锁气场解读能力。你精神上保持警惕，能察觉到战场上的重要地点。<br><br>你能看到<span class=\\"Highlight1\\">{0}米</span>范围内所有木板、可破坏墙壁和翻越地点的气场。<br>","name":"残心","flavor":"“敌人的弱点就藏在他们的强项之中。”——连次郎的教义12:5","id":64,"index":"ZANSHIN_TACTICS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_zanshinTactics","tiers":[[24],[28],[32]]},{"description":"其他人也将承受某一个人的痛苦。<br><br>将一名逃生者钩住时，所有受伤的逃生者会受到<span class=\\"Highlight1\\">出血</span>与<span class=\\"Highlight1\\">疲劳</span>状态影响，持续<span class=\\"Highlight2\\">{0}秒</span>。<br><br><i>鲜血回响</i>冷却时间为<span class=\\"Highlight3\\">{1}秒。</span><br>","name":"鲜血回响","flavor":"“精准无误的攻击一名敌人，那他们的同伴也会感觉到杀意。”——连次郎的教义6:3","id":65,"index":"BLOOD_ECHO","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_bloodEcho","tiers":[[45,80],[45,70],[45,60]]},{"description":"你想要向让你蒙冤者复仇。用木板或储物柜致盲或击晕你的逃生者会变为你的血祭品。<br><br>新的逃生者变成血祭品时，他们会受到<span class=\\"Highlight1\\">浑然不觉</span>状态影响，持续<span class=\\"Highlight2\\">{0}秒</span>，且他们的气场会显示在你的视角中，持续<span class=\\"Highlight3\\">{1}秒</span>。<br><br><li><i>杀手一次只能将一名逃生者变为<b>血祭品</b>。</i></li><br>","name":"报应","flavor":"“只有愚者才会朝恶魔的脸上吐唾沫并宣称自己是胜利者。”——连次郎的教义4:9","id":66,"index":"NEMESIS","rarity":[1,2,3],"owner":"ONI","image":"iconPerks_nemesis","tiers":[[40,4],[50,4],[60,4]]},{"description":"你能靠听觉判断出齿轮是否上过油。<br><br>用<i>普通攻击</i>命中逃生者<span class=\\"Highlight1\\">{0}</span>次后，<i>设备发烧友</i>生效<span class=\\"Highlight2\\">{1}秒</span>。<br><br>当<i>设备发烧友</i>生效时，逃生者在修理发电机时，每次完成很棒的技能检验，发电机在被修理的同时就会显示出黄色气场。<br>","name":"设备发烧友","flavor":"“有时候人会因为做自己最拿手的事而送命。”——狱长","id":67,"index":"GEARHEAD","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_gearHead","tiers":[[2,20],[2,25],[2,30]]},{"description":"你将一名逃生者视为<b>血祭品</b>。<br><br>钩住血祭品后，<i>失效开关</i>生效<span class=\\"Highlight1\\">{0}秒</span>。<br><br>生效期间，逃生者若在完全修好一台发电机前停止修理，则恶灵会笼罩该发电机，直到<i>失效开关</i>效果结束。<br><br>受影响的发电机会显示出白色气场。<br><br><i>杀手一次只能将一名逃生者变为<b>血祭品</b>。</i><br>","name":"失效开关","flavor":"“我见过意识到自己死期将至的人脸上的表情。”——凯勒布·奎因","id":68,"index":"DEAD_MANS_SWITCH","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_deadManSwitch","tiers":[[35],[40],[45]]},{"description":"被毁时生效的厄咒。妨碍你的人将得到惩罚。<br><br>净化灰暗图腾的逃生者将受到<b>浑然不觉</b>状态影响，持续<span class=\\"Highlight1\\">{0}秒</span>。<br><br>若包括此图腾在内的任何厄咒图腾被净化，所有逃生者的气场将暴露<span class=\\"Highlight2\\">{1}秒</span>。<br>","name":"厄咒：惩戒","flavor":"“蠢货，你这是自己寻死。”——凯勒布·奎因","id":69,"index":"HEX_RETRIBUTION","rarity":[1,2,3],"owner":"DEATHSLINGER","image":"iconPerks_hexRetribution","tiers":[[35,10],[40,10],[45,10]]},{"description":"那些阻挠职责的人会遭受严厉的审判。<br><br>被保护攻击命中的逃生者会受到<b>不治</b>状态影响，持续<span class=\\"Highlight1\\">{0}秒。</span>","name":"强制忏悔","id":70,"index":"FORCED_PENANCE","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_forcedPenance","tiers":[[60],[70],[80]]},{"description":"你引领着受害者们走出一条痛苦与惩罚之路。<br><br>破坏发电机后，你将获得<b>无法侦测</b>状态，直至发电机停止复原或逃生者被任何方式伤害或进入濒死状态。 在此期间，发电机的黄色气场会暴露给逃生者。<br><br>此状态每<span class=\\"Highlight1\\">{2}秒</span>只能触发一次。","name":"折磨路径","id":71,"index":"TRAIL_OF_TORMENT","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_trailOfTorment","tiers":[[80],[70],[60]]},{"description":"那些在黑暗中纠缠在一起的人注定要一起受苦。<br><br>当有逃生者在距离杀手至少<span class=\\"Highlight1\\">{0}米</span>范围外治疗另一名逃生者一层健康状态时，进行治疗的逃生者会发出尖叫声，在接下来的<span class=\\"Highlight2\\">{1}秒</span>内暴露其位置并激活<i>死亡约束</i>。在此期间，该名逃生者距离被治疗的逃生者超过<span class=\\"Highlight3\\">{2}米</span>时，就会受到<b>浑然不觉</b>状态影响。 ","name":"死亡约束","id":72,"index":"DEATHBOUND","rarity":[1,2,3],"owner":"EXECUTIONER","image":"iconPerks_deathbound","tiers":[[32,60,16],[32,60,12],[32,60,8]]},{"description":"你踢过某台发电机后，接下来<span class=\\"Highlight1\\">{0}秒</span>内与其互动的逃生者会发出尖叫暴露其位置，持续<span class=\\"Highlight2\\">{1}秒</span>，同时受到<b>危险</b>状态影响，持续<span class=\\"Highlight3\\">{2}秒</span>。<br><br><i>巨龙之握</i>的冷却时间为<span class=\\"Highlight4\\">{3}秒</span>。<br>","name":"巨龙之握","flavor":"“如此有潜力的化合物……即便只有一点点都能造成非同寻常的反应。”——塔尔伯特·格莱姆斯的日记","id":73,"index":"DRAGONS_GRIP","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_dragonsGrip","tiers":[[30,4,60,120],[30,4,60,100],[30,4,60,80]]},{"description":"此厄咒在鲜血泼洒时能获得恶灵的青睐。<br><br>当一名逃生者被<i>普通攻击</i>命中时，你所在位置附近<span class=\\"Highlight1\\">{0}米</span>内的一处板子会被恶灵掩藏<span class=\\"Highlight2\\">{1}秒</span>。被掩藏的板子无法被放下。<br><br><i>厄咒：鲜血恩惠</i>的冷却时间为<span class=\\"Highlight3\\">{2}秒</span>。<br>","name":"厄咒：鲜血恩惠","flavor":"“如果只认为这些实验是某种生物学反应的话也太缺乏想象力了。”——塔尔伯特·格莱姆斯的日记","id":74,"index":"HEX_BLOOD_FAVOR","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexBloodFavor","tiers":[[16,15,60],[16,15,50],[16,15,40]]},{"description":"当<i>厄咒：不死</i>生效时，任何图腾周围<span class=\\"Highlight1\\">{0}米</span>内的逃生者气场将会显示。<br><br>当有另一不同的厄咒图腾被净化时，该厄咒将变为可用的灰暗图腾，并且在此期间积累的代币将被移除。","name":"厄咒：不死","id":75,"index":"HEX_UNDYING","rarity":[1,2,3],"owner":"BLIGHT","image":"iconPerks_hexUndying","tiers":[[2],[3],[4]]},{"description":"你会保护自己所剩无几的所有物，并时刻留意你囤聚到物资的一切风吹草动。<br><br>有逃生者在你<span class=\\"Highlight1\\">{0}米</span>范围内与箱子互动或拾取道具时，会暴露自身位置。<br><br>比赛开始时环境中可能有最多<span class=\\"Highlight1\\">{1}</span>个额外箱子。","name":"囤积者","id":76,"index":"HOARDER","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Hoarder","tiers":[[32,2],[48,2],[64,2]]},{"description":"你的生活十分艰难，于是你要让别人也不好过。<br><br>当你破坏一处发电机时，最多也会随机使<span class=\\"Highlight1\\">{0}</span>处其他发电机的进度倒退。<br><br>如果其中一处发电机正在被修理，则任何正在修理它的逃生者都会触发一次困难技能检验。<br><br><i>压迫</i>的冷却时间为<span class=\\"Highlight2\\">{1}</span>秒。<br>","name":"压迫","flavor":"“我们有多惨，他们就得有多惨。”——夏洛特·德赛斯","id":77,"index":"OPPRESSION","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_Oppression","tiers":[[3,120],[3,100],[3,80]]},{"description":"终结来临之际，你要发动杀戮。<br><br>每当一处发电机完成修理时，恩赐解脱的力量便会增强。获得了一枚印记，<br><br>在使用后可以使你的下次蓄力攻击范围提升<span class=\\"Highlight1\\">{0}%</span>。","name":"恩赐解脱","id":78,"index":"COUP_DE_GRACE","rarity":[1,2,3],"owner":"TWINS","image":"iconPerks_coupDeGrace","tiers":[[40],[50],[60]]},{"description":"你无与伦比的表演技巧使所有人眼花缭乱。<br><br>在你搬运逃生者时会生效。在你恐惧范围内的逃生者会受到<b>危险</b>状态影响。<br>此效果对于任何离开你恐惧范围的逃生者，或当你钩住或不再搬运逃生者时仍处于你恐惧范围内的逃生者仍会持续<span class=\\"Highlight1\\">{0}秒</span>。<br><i>追星狂</i>在你不再搬运逃生者后会有<span class=\\"Highlight2\\">{1}秒</span>冷却时间。<br>","name":"追星狂","flavor":"“享受这一刻吧，很少有人能如此靠近。”——河知云","id":79,"index":"STARSTRUCK","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_Starstruck","tiers":[[26,26],[28,28],[30,30]]},{"description":"这项厄咒可以确保那些比你弱小的人得到恰当豢养。<br><br>某个逃生者进行<b>匆忙</b>翻越窗户后，恶灵会阻挡这扇窗户<span class=\\"Highlight1\\">{0}秒</span>。<br><br><i>只要厄咒图腾未被摧毁，厄咒效果就将持续。</i><br>","name":"厄咒：群体控制","flavor":"“控制权不在你。像你这样的人从来做不到。”——河知云","id":80,"index":"HEX_CROWD_CONTROL","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_HexCrowdControl","tiers":[[10],[12],[14]]},{"description":"你不会让任何人进入VIP房间。<br><br>每当你首次钩住一名逃生者，<i>无路可逃</i>将获得一枚印记。<br>最后一处发电机修理完毕后，恶灵就会阻挡两处逃生大门开关<span class=\\"Highlight1\\">{0}秒</span>，你每拥有1枚印记，就延长<span class=\\"Highlight2\\">{1}秒</span>。<br>","name":"无路可逃","flavor":"“你流血时的声音……让我再听一次吧。”——河知云","id":81,"index":"NO_WAY_OUT","rarity":[1,2,3],"owner":"TRICKSTER","image":"iconPerks_NoWayOut","tiers":[[4,26],[6,34],[8,42]]},{"description":"你被设计用于追踪并消灭目标。<br><br>比赛开始时，全部逃生者的气场将显示<span class=\\"Highlight1\\">{0}秒。</span><br><br><span class= \\"FlavorText\\">“……它知道自己想要什么，并且在得到之前绝不会停下。”——卡洛斯·奥利维拉<\\\\span>","name":"致命追踪者","id":82,"index":"LETHAL_PURSUER","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_lethalPursuer","tiers":[[7],[8],[9]]},{"description":"你知道如何虐杀小队成员以引起恐慌。<br><br>每当你用普通攻击使一名健康的逃生者陷入受伤状态时，所有受伤的逃生者都会受到<b>浑然不觉</b>状态影响，持续<span class=\\"Highlight1\\">{0}秒</span>。<br><I>歇斯底里</i>每<span class=\\"Highlight2\\">{1}秒只能触发一次。</span><br><br><span class= \\"FlavorText\\">“抱歉我有点一惊一乍了。我也不知道自己会遇到什么。”——罗伯特·肯多","name":"歇斯底里","id":83,"index":"HYSTERIA","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_hysteria","tiers":[[20,30],[25,30],[30,30]]},{"description":"Ne-Alpha 寄生虫提升了你的智力与感知力，使你能够铺设陷阱。<br><br>踢过某处发电机后，其气场将以黄色高亮显示。每当你用普通攻击或特殊攻击使一名健康的逃生者陷入濒死状态时，所有受影响的发电机都会爆炸，其进度回退<span class=\\"Highlight1\\">{0}%</span>随后气场消失。<br>如果有逃生者正在修理爆炸的发电机，其将会发出尖叫并受到无法行动状态影响，持续<span class=\\"Highlight2\\">{1}秒</span>。<br><i>爆发</i>的冷却时间为<span class=\\"Highlight3\\">{2}秒。</span><br><br><span class= \\"FlavorText\\">“它还会用武器？”——吉儿·瓦伦丁","name":"爆发","id":84,"index":"ERUPTION","rarity":[1,2,3],"owner":"NEMESIS","image":"iconPerks_eruption","tiers":[[6,12,30],[6,14,30],[6,16,30]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/zh/killers.json":
/*!***************************************************!*\
  !*** ./src/data.compiled/locales/zh/killers.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"埃文·迈克米伦把自己的父亲当作偶像。并不只是因为父亲能给他留下一笔巨大的财富，同时也因为崇拜父亲经营企业的手段高明。在严厉的管教下长大，埃文学会了父亲的铁腕经营手段。迈克米伦庄园的产能居高不下，在父子的联手打理下企业也是蒸蒸日上。父亲阿尔奇·迈克米伦的心理状况随着年龄增长逐渐失去理智，埃文保护着家产不受外人侵占。无论父亲提出什么样的要求，他都照做。<br><br>完全失去理智后的阿尔奇·迈克米伦让埃文成了史上最重大屠杀案的实施者。有消息传出埃文把100多人骗进了黑暗的矿洞，引爆了炸药，将他们的灵魂永远尘封在了地下。迈克米伦庄园的故事讲述的是一对父子因为权力和金钱而误入歧途的故事。具体有多少受害者死在他们手下是未知的。没有纪录记载埃文·迈克米伦是怎样演变成这样的。他的父亲被发现横尸在自家仓库的地下室里，但这就是另一个谜题了。<br>","id":1,"index":"TRAPPER","name":"The Trapper","difficulty":0,"power":"BEAR_TRAP","perks":["UNNERVING_PRESENCE","BRUTAL_STRENGTH","AGITATION"],"image":"TR_charSelect_portrait"},{"description":"菲利普·奥乔莫带着对新生活的愿景来到了这座城市。他很高兴自己能在汽车天堂废车场找到工作。受贿的警察对这里的灰色勾当睁一只眼闭一只眼。但奥乔莫不在乎，他在老家并不是没见过犯罪活动，只要自己不牵扯进去，他就不去多管闲事。修车碾车是他的专长。一辆车子进去，一个金属小方块就出来了。<br><br>直到有一天，他意外地发现一辆还没送进粉碎机的车里淌出了血液。他打开后备箱后发现了一个年轻人，嘴被堵住手被绑住，眼里充满了恐惧。奥乔莫把他给放了，可他还没跑多远就被奥乔莫的老板拦住割了喉咙。奥乔莫向老板索要一个合理的解释，这才知道自己一直被当做一个行刑人，几乎每辆车里都装着一个生命，这是废车场向一些“客户”提供的“特别服务”。奥乔莫听完之后暴跳如雷，把老板扔进了粉碎机里，让他慢慢被压成肉泥，老板的脑袋露了出来，奥乔莫一把抓住，连同脊椎一起抽了出来。之后他便离开了，再也没人看见过他。<br><br>","id":2,"index":"WRAITH","name":"The Wraith","difficulty":1,"power":"WAILING_BELL","perks":["PREDATOR","BLOODHOUND","SHADOWBORN"],"image":"WR_charSelect_portrait"},{"description":"土豪地主马克思与伊芙琳·汤普森的儿子，一个没有姓名的孩子。他的暴发户父母对他的存在只有厌恶。因为出生时就长着一张面目全非的丑脸，他被社会隔绝。父母把他当做耻辱，他们用砖砌了一个房间专门把他关在里面，通过墙壁行的一个小开口给他送饭。终有一天他逃了出去，开始了残忍的复仇，宰杀了折磨他的父母。<br><br>夙愿得偿后，他继续生活在农场里，奔跑在玉米地里疯狂屠杀那些能够自由奔跑的家畜和一切他能看到的东西。人们没有找到马克思和汤普森的尸体，只找到了被开膛破肚的动物尸体，遍布整个农场。很快冷风农场的土地开始分割变卖，但从来没有一个买主愿意出面购买。或许是因为夏日闷热的晚上农场里总会传出的奇怪的电锯声吧。<br>","id":3,"index":"HILLBILLY","name":"The Hillbilly","difficulty":0,"power":"CHAINSAW","perks":["ENDURING","LIGHTBORN","TINKERER"],"image":"HB_charSelect_portrait"},{"description":"莎莉·史密森带着美好的寄望来到了镇上，希望伴着孩子们的欢声笑语住进丈夫安德鲁建的小木屋里。某天安德鲁的领班来探望莎莉，并带来了让她生活天翻地覆的坏消息。没有别的选择，莎莉必须独自扛起养家重任，可她唯一能找到的工作是在克洛普瑞恩疯人院。她从底层做起，干着辛苦的晚班。多年以来，她的心智被折磨到极限，亲眼见证了太多太多恐怖的事情。终于，她再也无法承受这一切了，净化疯人院的想法在她心中萌芽。9月的某一天，上早班的同事们来到疯人院后发现了近50具病人尸体，已经没有任何生命体征，在病床上还躺着4个工作人员，同样没有了呼吸。只有莎莉还活着，但她已经失去理智，摇摇晃晃的不停徘徊。他们把她送上了救护车，但那辆救护车还没抵达医院就被发现撞毁在附近的树林里，医院的工作人员全部死亡，但莎莉的尸体没有被找到。","id":4,"index":"NURSE","name":"The Nurse","difficulty":2,"power":"SPENCERS_LAST_BREATH","perks":["STRIDOR","THANATOPHOBIA","A_NURSES_CALLING"],"image":"NR_charSelect_portrait"},{"description":"安娜刚学会走路的时候，她的母亲就开始教她如何在环境艰苦的北部森林中生存。在如此偏远的危险地带生活需要出类拔萃的技能以及强大的适应能力。当阳光渐渐暗下来的时候，她们便会回到庇护所，一栋足以抵抗寒冬的坚固老木屋。坐在温暖的壁炉旁，躺在妈妈的怀里歇息，周围放着妈妈给她做的几件木头玩具和面具。很快便在故事与摇篮曲声中步入惬意的梦乡，却不知一场灾难即将改变这安逸的生活。<br><br>安娜和母亲在树林里追踪一只麋鹿。她们知道麋鹿是危险的猎物，但这个冬天过的十分艰难，食物已经快要吃完了。对饥饿的恐惧使她们愿意挑战树林里的任何野兽。突然，麋鹿毫无征兆的向安娜发起攻击。在猛烈的攻击下安娜吓得动弹不得。正当麋鹿瞪着杀气腾腾的眼神逐渐靠近安娜时，她的母亲挡在了中间，手里紧紧握着斧头。随着一声惨烈的尖叫声，鹿角刺穿了妈妈的身体，并将其举到了半空中。安娜的母亲用尽全身的力气，一遍又一遍的将斧头劈砍在麋鹿的头上。鹿角发出了断裂声，安娜的母亲得救了。这头野兽也应声倒下。<br><br>安娜太小了，无法移动母亲受伤的身体，只好坐在母亲身边陪伴着她。奄奄一息的麋鹿发出哀嚎声，母亲抱着安娜，哼唱着熟悉的摇篮曲，试图用歌声盖过哀嚎声。麋鹿和母亲的身体渐渐变得冰冷起来，留下安娜独自一人待在这沉寂的树林中。最终，安娜站起身子，迈向了回家的路。<br><br>虽是儿童，安娜早已领会在寒冷森林中的生存技巧。伴随着求生本能，安娜变成了荒野中的一份子。在成长的过程中不停地锻炼狩猎技巧以强大自己。安娜逐渐成为了一名危险的掠夺者，人性已被淡化。<br><br>她扩大了领地，以捕猎为生。从松鼠，野兔，水貂一直到狐狸，安娜在不断地提升自己。当安娜不再对这些猎物感兴趣时，她开始狩猎像狼与熊这样更危险的动物。有一天，莽撞的旅行者踏足了这片森林，安娜发现了自己的新爱好：人类。所有不小心闯入领地的人都会像动物一样被她屠杀，安娜只会放过年幼的女童。她的爱好是收集他们携带的工具和彩色的服饰，玩具更是她的最爱。<br><br>安娜会将小女孩带回树林深处的木屋中，视她们如珍宝，似乎唤醒了安娜心中的某些东西，她希望在一堆掠夺来的木头玩具，娃娃和看不懂的故事书中能有一个自己亲近喜爱的人。女孩们的脖子上捆绑着粗糙的绳子，被固定在墙上。安娜不能任由她们外出，否则她们一定会死在外面。<br><br>每一次，女孩都会因为寒冷或是饥饿或是病痛而死去。每一次，都使安娜一步步走向痛苦和疯狂的深渊。她不得不开始袭击附近的村落，屠杀那里的居民，抢夺她们的女儿。安娜戴着母亲多年前为其制作的动物面具以求安抚惊恐的女童们。一个传说渐渐在村民们口中传开：红树林中藏着一个半人半兽的女猎手，不但屠杀男人，还吃小女孩。<br><br>战争终于蔓延至这片森林，德国的士兵们在树林里穿梭，企图对溃败的沙俄发动最后一击。在这段黑暗的时光中，不再有旅行者出现，村民们也抛弃了原有的家，安娜找不到小女孩了；能找到的只有士兵。大多数士兵都被发现死于严重的斧伤。整支军队神秘消失了。随着战争的结束，关于女猎手的传说也不再为人所知，消失在了红树林中。","id":5,"index":"HUNTRESS","name":"The Huntress","difficulty":1,"power":"HUNTING_HATCHETS","perks":["BEAST_OF_PREY","TERRITORIAL_IMPERATIVE","HEX_HUNTRESS_LULLABY"],"image":"BE_charSelect_portrait"},{"description":"有些人生来就是一颗不好的种子。一颗蕴含着纯粹邪恶的种子。迈克尔·迈尔斯就是其中之一。他对于为他人带来痛苦这件事丝毫都不会犹豫。事实上，这正是他所追求的。但即使是内心邪恶的人的人生也可能会很艰难。区别只在于处理困难的方式不同。<br><br>对迈克尔来说，只有杀人才能换来内心的平静。迈克尔夺走了他姐姐的生命，警察到达案发现场后发现他打扮成小丑模样，一言不发。当一个人偶然发现火灾时，他还会火上浇油。政府不明白为什么一个小男孩的身体里藏着一颗魔鬼的心。只好做出一个尝试性的决定，把迈克尔送到精神病医院并试图挽救他的人格。失败的治疗方法和夜间的尖叫使他更加内向和精神错乱。人们希望迈克尔·迈尔斯的人生可以简简单单地画上句号，被记忆埋葬。可是……他逃脱了。<br>","id":6,"index":"SHAPE","name":"The Shape","difficulty":2,"power":"EVIL_WITHIN","perks":["SAVE_THE_BEST_FOR_LAST","PLAY_WITH_YOUR_FOOD","DYING_LIGHT"],"image":"SH_charSelect_portrait"},{"description":"丽莎·谢伍德出生在一个宁静的小镇。当地的村民们都十分友善，小镇里出现争执时老一辈的村民总会出面化解，并保持了旧传统风俗的延续。丽莎很喜欢长辈们教她画的象征安宁和好运的符号。某天晚上丽莎穿过树林回家时，一场可怕的风暴毫无征兆的席卷而来。在潮湿又黑暗的树林中，她迷失了方向并撞到了头。她滑倒在地上，意识逐渐模糊时看到几个黑影在树丛间迅速靠近。几张诡异的面孔很快出现在了丽莎的眼前。<br><br>他们把丽莎绑在一个潮湿地窖的墙壁上。黑暗中，她发现这儿还有其他人，身上裸露着的伤口任凭蝇虫叮咬。食人族用生锈的刀片在他们身上雕刻咬痕，不久后他们就死了。但丽莎坚强的活了下来，饥饿的身体已经残缺不堪。手铐已经很难铐住她消瘦的手腕。她奋力挣扎着，金属撕裂了她的皮肤和肌肉，丽莎重获自由了。她的肉体渗出黄色粘稠的脓液，她的骨头裸露在腐烂的伤口上。她步履蹒跚，发了疯的想家，想镇上的长辈们；她一路跟随着长辈们教会她的符号。一种强烈的饥饿感搅动着她的心智，激发了她对鲜血的渴求。丽莎选择了复仇。<br>警方的严密搜查终于让他们找到了在沼泽里的老房子。这里的居民已经被肢解食用。地板上涂抹着用血迹画出的象征安宁与好运的符号。丽莎的尸体从未被找到。<br>","id":7,"index":"HAG","name":"The Hag","difficulty":1,"power":"BLACKENED_CATALYST","perks":["HEX_THE_THIRD_SEAL","HEX_RUIN","HEX_DEVOUR_HOPE"],"image":"HA_charSelect_portrait"},{"description":"杀人魔的暴力行径到底是由于心灵的扭曲还是外界的压力，这是长期以来的争论焦点。<br><br>但人皮脸成为杀人魔，并非因为想要凌驾于他人之上或满足肉体的欲望，也不是要让脑海中的声音安静下来。他杀人是因为他害怕。害怕别人会伤害他；害怕家人会对他不满，也害怕他们吃人的罪行会暴露。<br><br>他总是唯命是从，只要家人爱他就足够了。所有外来者都是威胁，而威胁需要被妥善处理掉。<br><br>那些贸然闯进他家中的，把他的家当成自己的家一样进出，在房子里四处探索，试图找到他们家的秘密的孩子们。人皮脸会毫不犹豫的处理掉他们，来保护自己的家庭，这就是他所受到的教育。<br><br>他不单单充当保护者，他还有其他的角色，而每个角色都有一张独特的脸。他为家人料理晚饭，在家人享用晚餐时他穿着得体。以前他的爷爷奶奶照顾这个家庭，但现在他们老了，所以人皮脸和他的兄弟们必须挑起重担。家庭对他来说意味着一切。家就代表着安全和保护。<br><br>即便他已经尽了自己最大的努力，但还是不慎让一个猎物逃走了。他试图阻止她，追逐她，但她得到了外界的帮助：另一个外来人，开着一辆卡车。卡车司机残忍的杀害了他的兄弟，在他的尸体上碾了过去。人皮脸被彻底激怒了，扑向了卡车司机，准备用电锯为自己的家人报仇，但卡车司机太灵活了。卡车司机用人皮脸自己的电锯将他击倒。<br><br>他眼睁睁的看着外来人坐上车离开了，心中的怒火，悲伤和痛苦以及对家人的担心结合在了一起。他们一定会带着警察回来，而警察一定会带走他的爷爷和兄弟。没有了他们，他还能做什么？没有了家人的命令，他只会衰弱并死去。<br><br>他的世界瞬间倒塌了，人皮脸愤怒的挥舞着手中的电锯，试图击退一切围绕着他的外来威胁。<br><br>突然，有一种触感占据了他的全身，寒冷的恐惧爬遍每一寸皮肤。他突然意识到有更可怕的东西来临了，是生活在黑暗中的可怕生物。他心中充满了未曾有过的恐惧。但比起家人的失望，这样的恐惧还来得舒服一些。<br><br>他被带到了一个熟悉又陌生的地方，他的本能告诉他应该做些什么。他不能失败，他会用自己的能力锯开任何外来威胁。会有尖叫声，但世界会重新恢复平静。只会留下电锯的轰鸣声。<br><br>放马过来吧，外来人。","id":8,"index":"CANNIBAL","name":"The Cannibal","difficulty":0,"power":"BUBBAS_CHAINSAW","perks":["KNOCK_OUT","BARBECUE_AND_CHILI","FRANKLINS_DEMISE"],"image":"CA_charSelect_portrait"},{"description":"由于在心理学上展现出了异于常人的天赋，赫曼被选中前往伊利诺斯州的一所机密设施参与一项先进的神经学项目。在这里他遇见了奥托·斯坦珀博士，在他的指导下，赫曼开始对被送来研究所的犯人使用极其残忍恶毒的方式索取信息，这里成了一所为国家服务的秘密监狱和再教中心。他被允许自由使用暴力电流疗法并获得了不错的成果，挖掘出了一些危害国家安全的潜在威胁。<br><br>多年来，赫曼以医生形象示人，但从没有人关心过他到底是否有从医资格证，或是那些犯人在供出信息之后是被如何处置的。直到莱理疗养中心沉寂一周后人们才发现了全体员工、病人和犯人的尸体，头部都有着各种各样的创伤。全体职员和犯人的尸体清点完毕，其中甚至包括了奥托·斯坦珀博士。唯有“医生”赫曼·卡特下落不明。<br>","id":9,"index":"DOCTOR","name":"The Doctor","difficulty":2,"power":"CARTERS_SPARK","perks":["OVERWHELMING_PRESENCE","MONITOR_AND_ABUSE","OVERCHARGE"],"image":"DO_charSelect_portrait"},{"description":"对于真正了解他的人来说，即便是活着的时候，弗莱迪也是一个带来梦魇的恶魔。只有弗莱迪的受害者们才知道这躲在善良友好面具之下的真面目。当受害者们终于透露实情后，春木镇的家长们集合起来，将弗莱迪抓了起来用私刑惩罚他。他们以为火焰会将小镇的恶魔吞噬殆尽，他们的孩子能获得久违的安宁，但恶魔总有幸存下来的办法。<br>很多年过去了，曾经的恐惧已经被时间淹没。突然，弗莱迪回来了，梦又一次变成了梦魇。<br>弗莱迪将怒火集中在他认为冤枉他的人身上：南茜·霍尔布鲁克，他唯一的血祭品。但他低估了她的力量和计谋。她有他的好朋友昆汀相助，试图弱化弗莱迪的力量，将其再次毁灭。<br>死神从一开始就不愿意接受弗莱迪，他们凭什么认为这一次就能让弗莱迪永远消失？他再次出现，同时心中充满复仇之火。他将矛头指向了阻挠他攻击南茜的男孩昆汀。<br>弗莱迪入侵了昆汀的梦境，不停的恐吓他，使他的力量和心智接近崩溃边缘。当时机成熟之时，他强迫男孩回到巴德姆幼儿园的黑暗回忆中。在这里实施他的最终复仇计划，<br>弗莱迪在走廊中追赶男孩。他不慌不忙，享受着过程中的每一刻。空气中的汗液味和他们那急促的喘息声是弗莱迪最为享受的东西。他们是他手中的玩物。<br>在走廊的尽头，他找到了男孩。再也跑不动了吗？终于面对自己的命运了吗？弗莱迪逐渐靠近，张开手臂，利爪在墙上划过。金属发出的尖锐响声使男孩愈发恐惧。<br>突然一片火星落到地上，点燃了早就被倾倒在地上的液体。蓝色的火焰瞬间吞噬了整个房间。<br>男孩乘机逃走了。房间和墙壁在一片模糊之中消失了，他来到了弗莱迪的地下室。这里将不会有任何可以逃生的出口。<br>弗莱迪慢慢靠近男孩。男孩心中的恐惧足以让弗莱迪细细品尝，但他眼里憎恨的怒火却让人钦佩。<br>弗莱迪收回了利爪。<br>突然他感受到一种古老、强大、黑暗的东西出现了。一团迷雾包围着他，唯一能感觉到的是远处传来的木头断裂声。金属碰撞发出的尖锐回响。一种神秘而未知的恐怖。<br>一阵下坠旋转过后，弗莱迪再次回到了学校。但不再是他能够随意掌控的那个学校了。只是看上去一样。他的力量被改变削弱了。男孩已经逃走了，但走廊上出现了其他猎物。其中几个会成为他新的最爱，但所有人终将倒在他的利爪之下。","id":10,"index":"NIGHTMARE","name":"The Nightmare","difficulty":2,"power":"DREAM_DEMON","perks":["FIRE_UP","REMEMBER_ME","BLOOD_WARDEN"],"image":"SD_charSelect_portrait"},{"description":"约翰·克莱默，众所周知的“竖锯”，原本打算在这赋予生命和新生美好象征的中国猪年之际迎接宝贝儿子的诞生，这代表着他家庭的新生活的开始，也为儿子计划好了幸福的人生。但这美好的愿景却被一个闯入他妻子诊所的瘾君子给打破了。<br><br>在愿望成为泡影之后，约翰抓住了那个瘾君子，把他当做了自己的第一个测试对象，而猪的寓意也从此发生了变化。它代表着正在逐渐腐蚀约翰身体的疾病，提醒着我们要通过实际行动来升华自己，即使在鬼门关也要握紧自己的生命，否则跟行尸走肉有什么区别。<br><br>猪成为了竖锯的载体和媒介，将测试者带到各自的测试中。对于少数成功通过测试的人来说，猪也意味着新生，象征着成为竖锯的学徒，甚至是门徒。<br><br>阿曼达·杨就是个典型的例子，一个扭曲的灵魂，她的人生就是一本关于伤害自己和她身边的人的教科书。但这一切都在她通过竖锯的测试之后改变了。她投身于竖锯的事业中，准备好在癌症吞噬他之后接替他。<br><br>但她变得越来越依赖约翰，约翰已是垂死之人，这给她带来了极大的痛苦，她甚至认为测试者们根本没有能力自救，没有资格在游戏的残酷考验下重生。<br><br>因此，约翰为她准备了另一场游戏，给予她另一次救赎的机会，但阿曼达任由愤怒和嫉妒掌控了她的内心。她未能通过测试，落得中枪的下场。<br><br>血液流淌在瓷砖地面上，黑暗逐渐占据了阿曼达的视线，随之而来的是木头的咯吱作响声。她发现自己站在一片树林之中，再一次透过猪的眼睛观察着这个世界。周围树木丛生，树枝紧紧的缠绕着她。一阵阵疼痛遍布全身，她听见自己的呼吸声在面具下回响。<br><br>穿着这身打扮在这里虚度光阴是诅咒？还是另一场测试？也许她通过了测试？约翰总是将任何可能性都考虑在内，他的计划是天衣无缝的，而且他也绝不会放弃阿曼达，确实如此吗？<br><br>也许竖锯已经死了，但他让阿曼达变成了另一种存在。<br><br>最终，她认为她做出了正确的决定。游戏时间结束了，在这里没有救赎，等待测试者的将只有死亡。","id":11,"index":"PIG","name":"The Pig","difficulty":1,"power":"JIGSAWS_BAPTISM","perks":["HANGMANS_TRICK","SURVEILLANCE","MAKE_YOUR_CHOICE"],"image":"FK_charSelect_portrait"},{"description":"肯尼斯·切斯生于1932年，他的母亲因难产去世。这使他与他的父亲存在着无法磨灭的隔阂。随着他渐渐长大，酗酒的恶习日渐严重，父亲对他的仇恨也越来越大。在肯尼斯还在上学的时候，他们基本就是各过各的了。<br><br>他的学业普普通通，全靠他过人的体育能力。他长的又高又壮，擅长田径项目，但拒绝了所有职业队的邀请。<br><br>在他从学校回家的路上，他经常能看到地上有许多羽毛，不久后他就培养起了收藏羽毛的爱好，把收集来的羽毛都放在床底下的雪茄盒子里。他的父亲除了工作就是喝的不省人事。所以肯尼斯有大量的独处时间，沉浸于柔软整齐的羽毛中。看着鸟儿们飞到花园的喂食器上，想象着它们该有多么柔软，他决定一定要抓一只来。他讨好当地的牙医，很快偷来了一些麻醉药剂。利用这些药剂，他在喂食器里制作了陷阱，他觉得这样就可以弄晕鸟儿。<br><br>在几次失败的尝试过后，他成功的捕捉到了一只知更鸟。它静静的躺在肯尼斯的手上，他突然有一种震撼感，这是一个任他摆布的生命。他原本打算等这只知更鸟从麻药劲里恢复过来后就把它放生。但当它开始恢复意识，开始挣扎的时候，肯尼斯却没有松开抓住它的手。肯尼斯用手指慢慢的按住了它的喉咙，不停地挤压，直到它胸前的羽毛不再晃动。肯尼斯处理掉了尸体，只留下了一根羽毛，他从此有了新的收藏爱好。<br><br>在1940年代末，肯尼斯离开了学校，在当地的一家餐馆里打杂。那时的他也已经有了更大的猎物，比如松鼠，浣熊甚至是狗，在麻醉剂量的定制上已经得心应手。<br><br>在1954年的早些时候，一个年轻人失踪了，整个小镇搜了个底朝天也没能找到他。几个月后，肯尼斯的父亲，在屋子下的狭小空间里工作时找到了一个雪茄盒。他打开一看，惊恐的发现里面有羽毛，动物爪子，还有一个男人的手指。<br><br>肯尼斯工作完回到家里，看到父亲正从屋子底下爬出来，手里还拿着他的雪茄盒。他转过身去再也没回过家。<br><br>过了几周流离失所日子后，他遇到了一个流动马戏团，凭借着惊人的力气，他成为了马戏团的幕后工作人员。他有了新的名字：杰弗里·浩克。<br><br>突然与一个这么大的集体紧密接触，杰弗里必须学着如何社交。他伪装成另一种人格，很快让大家认为他是一个又有魅力又乐于助人的人，使他在新家庭中备受欢迎。<br><br>在未来的十年里，他一直跟随着马戏团，走遍了美国的每一处角落。然而，这样的漂泊生活也给他带来了不好的影响，他染上了恶习：酗酒、垃圾食品、吸毒。他过度的沉浸在这些不好的东西上。在一段时间里，这些已经足够让他满足了。但他曾经的爱好很快又回来了，而他居无定所的生活又让他重新开始杀人。他从表演者那儿偷来了化妆品和服装，作为一种伪装，麻醉他的猎物，并把他们带到他的大篷车里，这些无辜的受害者们醒来时会发现自己已经被五花大绑，任由宰割。他终于又能享受他的乐趣了，在精神和肉体上折磨他们，他们的惨叫声反而让他更加兴奋。<br><br>当他的受害者们精疲力尽时，他会仔细的检查他们的手指，找到最好看的，放在嘴里细细品尝。一旦找到最完美的那一根，他会将这根手指砍下来，骄傲的放进自己的收藏中，处理掉剩下的尸体，像是毫无意义的附属品一样。<br><br>无论男女老少，他都不在乎。在他的记忆里，各个方面都需要有精美的藏品。<br><br>他慢慢的脱掉了伪装，展露出他的真实面目，小丑才是真正的他。<br><br>随着时间的推移，他变得越来越自大轻率。一个受害者趁他喝醉的时候逃脱了。她尖叫着寻找帮助，肯尼斯醒来后发现马戏团的其他人正准备抓捕他。他快马加鞭，随着他的大篷车一起消失在了黑夜之中。<br><br>从那时起，他四处漂泊，出现在各个嘉年华和马戏团的现场，但节目单里却从来没有这个人。他引诱那些勇敢的，或者说愚蠢的人慢慢靠近他，抓住他们，在他们被发现失踪前就离开。<br><br>直到某一天，他离开了正常的公路，穿过了一阵迷雾后来到了一个全新的世界。这是一个变幻莫测的地方，与他所选择的生活完美契合。他这辈子都没感受到如此强烈的家的感觉，他开始安营扎寨，等待着第一个到访者。","id":12,"index":"CLOWN","name":"The Clown","difficulty":1,"power":"THE_AFTERPIECE_TONIC","perks":["BAMBOOZLE","COULROPHOBIA","POP_GOES_THE_WEASEL"],"image":"GK_charSelect_portrait"},{"description":"凛是山岡家族的独生女，她在香川县的一个清贫的传统家庭中长大，就读于高松市的一所私立大学，这给她的家庭带来了沉重的经济负担。而她的母亲在那年一病不起，家里的账单开始渐渐堆积起来。凛在学习之余会做兼职工，试图减轻家里的负担，但这几乎是杯水车薪。<br><br>她的父亲面对这永无止境的债务，决定每天工作两班倒，希望能够换来升职加薪，也正是从那时起，他开始失眠，黑暗中传来的一种低语声让他整夜无法入睡，提醒着他正面临着的绝望处境。几近崩溃的他已经分不清现实与梦境。他想要否认这低语声告诉他的一切，因此直接向他的上级解释自己面临的困境，央求得到奖金，预支工资，休假，怎样都行。<br><br>他的请求被回绝了。同时，公司的生产线出了问题，付出了沉重的代价，必须有人为此负责，而凛的父亲则顺理成章的被当成了替罪羊。22年的工作换来的却是公司的辞退信。<br><br>当晚，凛为了招待逗留在餐厅的顾客，很晚才下班回家，她刚停好自行车时，就听到屋里传来了母亲的尖叫声。<br><br>她赶忙冲了进去，赶到父母的房间时，她看到母亲的残肢断臂散落在地上，胸部被刨开，肋骨暴露在空气中，凛被眼前的场景吓得瞠目结舌。<br><br>突然一把锋利的武士刀向她砍去，她试图用前臂抵挡，刀锋嵌进了她的肉里。此时她的惊讶盖过了疼痛，因为袭击她的人正是他的父亲。凛哭喊着求他停下，但他又一次砍向了凛的手臂。<br><br>凛冲出房间滑倒在了血泊中，她抓住门框，再次支撑起身体，但锋利的武士刀割开了门框，砍断了她另一只手臂。她痛苦的哀嚎着，艰难的向门厅走去，却被父亲的屠刀挡住了去路。<br><br>她退后了几步，浑身颤抖着，捂着被割开的肚子，回想起了已经被肢解的母亲。<br><br>凛拼尽全力的冲向她的父亲，他后退了几步，对着凛肚子上的伤口猛击了一拳，凛在剧痛中倒地，当她挣扎着想要起身时，她的父亲砍断了她的大腿，使她瘫倒在地上。<br><br>当凛爬向台阶时，她的父亲又一把抓住她的头发，将她摔到了玻璃隔板上，玻璃受到冲击后破碎了，凛掉到了楼下。<br><br>她听到楼上传来了脚步声，竭尽全力的在这一片碎玻璃中往前爬行，碎片撕扯着她的肉体。<br><br>鲜血从无数伤口中涌出。突然，一种低沉的心跳声在她耳中回响，她顿时感到身体变得无比沉重。<br><br>大地随着她父亲的脚步声而颤抖。她知道自己已经难逃一死，但她已经不在乎了。她会让他付出代价，无论此生还是来世。<br><br>一团黑雾逐渐遮挡住了她的双眼，她的怒火不会因此而熄灭。但她不会就这样善罢甘休，至少现在不会。黑暗中的低语向她许诺着鲜血和复仇。<br><br>立下誓言后凛闭上了双眼。","id":13,"index":"SPIRIT","name":"The Spirit","difficulty":2,"power":"YAMAOKAS_HAUNTING","perks":["SPIRIT_FURY","HEX_HAUNTED_GROUND","RANCOR"],"image":"HK_charSelect_portrait"},{"description":"弗兰克· 莫里森十九岁，看起来一点都不像这个年纪的人。他因为将裁判推至看台而被踢出篮球队后辍学。然而弗兰克是一个很有潜力的人，尽管童年过得凄凉，他仍然奋发向上。六岁的时候，他被人从卡尔加里带走，从此开始了轮流寄养家庭生活。无论他如何大手花钱，大发脾气，打架斗殴，他们仍然将他带到新的不熟悉的家庭。最近一次是三年前，最后一位养父克里夫·安德鲁斯从收养所将其带走。他们路上走了7个小时才到了奥蒙德的一间小平房。这将会是他们在一起度过的最长时光。克里夫忙着用家庭式服务的支票去酒吧换取酒水。<br><br>奥蒙德是一个很小的陈旧之地，一个仅有6000居民的偏远小镇，一年中大部分时间都是灰蒙蒙的冬天。为了换收养家庭，弗兰克想尽了一切办法，但是当他注意到一位美丽的女孩后，改变了主意。朱莉是一个很受欢迎的女孩，她相信她值得拥有比在奥蒙德生活更好的东西，而弗兰克作为一名外来者，是她通往外面世界的途径。弗兰克参加了她举办的聚会，来到聚会上的每个人都比他年轻，很容易对他产生印象，这点他很喜欢。他遇到了冲动且喜欢炫耀的乔伊和腼腆而单纯的苏西——朱莉最好的朋友。<br><br>他们会一起到奥蒙德山上一间废弃的小屋玩耍。他们在一起的时间让他们暂时远离渺小的、单调乏味的日常生活。弗兰克觉得这是个很好的机会，这些涉世不深的人应该变得更加强大。连续多个夜晚的放荡享乐和横冲直撞测试着他们的极限。欺凌弱小、蓄意破坏和偷窃基本上是他们每个周末必不可少的计划。渐渐地，他们变得对他唯命是从。当他们戴上面具时，没有什么是不能做的。一天晚上，弗兰克怂恿乔去打砸最近开除他的那家商店。他们很轻易地溜了进去，因为营业时间结束以后里面应该没人。但是一位还没有离开的清洁工在朱莉经过的时候一把抓住她。听见她窒息的哭声，弗兰克身上仿佛闪过一道恐怖的闪电。他毫不犹豫，拿出救援刀就冲向她，将刀插入清洁工的后背。<br><br>一群人惊诧地看着弗兰克，他却叫他们把事情处理完。乔咬紧牙关，抓起刀，捅向那个正在流血的人的肋骨处。苏西不想这么做。弗兰克朝她尖声喊叫，说他们必须收拾他们造成的局面。朱莉闭上眼睛，将刀刺向了那人的胸部。她将血淋淋的刀递给苏西——他们现在全都卷入了这件事。苏西难以置信地盯着朱莉，这时弗兰克抓住她颤抖的手，将刀重重地刺入那人的喉咙。弗兰克叫他们动作快点儿，他们擦去地上的血迹，将尸体藏进乔伊车的后备箱，开车向奥蒙德山上驶去。<br><br>四个人正在泥泞的雪地上挖坑，准备处理尸体，这时弗兰克发现树林里有什么东西窜动。他抓起刀，离开团队，去探查究竟。雾气在弗兰克身边变得越来越浓，以致很快他就无法看清前方。他返身折回，无意之中发现了一条不祥的小路。他循着这条怪异的路径，犹如受到黑暗之神的召唤。朱莉、苏西和乔伊挖好坑了，但弗兰克却不见了。朱莉在雪地上发现了他泥泞的脚印，他们三人沿着脚印，一直走向森林深处。朱莉、苏西和乔伊那天晚上没有回家，他们的父母以为他们跟着弗兰克跑了。每个家庭都想出了一个不同的原因。然而，当有人在奥蒙德山废弃的小屋中发现尸体时，小镇上的气氛发生了变化。","id":14,"index":"LEGION","name":"The Legion","difficulty":1,"power":"FERAL_FRENZY","perks":["DISCORDANCE","MAD_GRIT","IRON_MAIDEN"],"image":"KK_charSelect_portrait"},{"description":"阿迪里斯是一个七口之家中年纪最小的一个，当她五岁时，被遗弃在位于巴比伦中心的赎罪神庙的砖红色的台阶上。为了平复自己的震惊和悲伤情绪，她坚持认为众神在磨炼她。她的新生活很平静。平时她打理花园，准备礼仪餐，以及擦拭仪式香炉。到了晚上，她会祈祷一个能够揭示她目的的标志。<br><br>当她成年时，她在每年祭拜海山羊，水神和创造神的过程中侍奉高阶祭司。她在巨大的柱式大厅里悬挂着一个香炉，投下浓厚的黑色烟雾，这些烟雾到达冷却的高耸石柱上才渐渐消散。她的忧虑烟消云散，由此产生的幸福让她感觉比以往更接近神灵了。在净化仪式期间作为祭司助手之时，她每天都在努力工作，承担本职工作的同时还在履行新的职责。<br><br>祭司们越来越离不开她的协助。每天都在进行清理工作，以满足高寺庙围墙外边的需求，灾难性的瘟疫在那里再次爆发。几个月内，祭司们纷纷患上了这种疾病。没过多久，他们变得十分虚弱，无法进行任何形式的仪式。阿迪里斯曾协助许多场净化仪式，她是唯一一位能够继续主持仪式的人。即使是学徒，也必须控制巨大的恐慌。<br><br>在第一次主持仪式前夕，阿迪里斯倍感焦虑，因此她去到了祭司的圣室。当她点燃蜡烛时，她注意到后面有一个狭窄的通道。通过间隙，她到达了隐藏在圣所下面的地穴。房间里只有一座女人的金色雕像，她伸出双手，手指上戴满了珠宝。这是阿迪里斯一直在等待的标志。<br><br>大厅里挤满了信徒，当阿迪里斯进入时，他们鞠躬致敬。她大步走到砖砌的祭坛上，抓起一把用白银锻造的仪式匕首，她那戴着红宝石的手指像爪子般缠绕着刀刃。奢侈品的突然展现吸引了信徒们，他们已经被她的年轻和貌美所震撼。<br><br>当她开始背诵创作的史诗时，站在后面的一个女人太过震惊，因此倒下了。阿迪里斯冲向她，发现她的脚上长满黑色水泡。阿迪里斯毫不犹豫地举起手中的神圣匕首朝她的脚挥去，切断了一个脚趾。然后她向众神献上血腥的脚趾，请求众神保佑那位妇女。将阿迪里斯视为新的女祭司的信徒们一言不发。<br><br>有关她财富、美貌和奉献的传闻开始像疾病一样迅速传播到城市的每个角落。不久，阿迪里斯的信徒们称她为巴比伦大祭司。<br><br>但当她表现出感染的初步迹象时，她的信仰受到了考验。她的咳嗽演变成痰和血的混合物，她的脖子迅速脓肿，她的四趾脚变黑了。她为自己的病情感到羞愧，开始戴着面纱头饰，随身携带一个香炉，以掩盖她皮肤发出的病态腐臭味。希望得到拯救的她不断进行仪式，给她的信徒们分发圣水和食物。<br><br>但没有任何仪式可以拯救她。走投无路的阿迪里斯为了安抚神灵，将自己驱逐出了城市。她带着一些信徒向北前行，冒险穿过乌拉尔图寒冷的林地，直到他们无法继续前行。<br><br>他们在一个潮湿的洞穴中安营扎寨，而阿迪里斯倒在了一滩呕吐物中。她早已变黑的脚肿胀得太厉害，根本无法再前行了。她的信徒们和她本人在洞穴中意识到了真相：他们都患上了瘟疫。<br><br>阿迪里斯跪坐在她那些呕吐着的信徒中间，做了最后一次祷告。香炉发出的黑烟升入潮湿的空气中，然后被寒风吹走了。<br><br>始终无人发现阿迪里斯及其信徒的尸体。许多人讲述了她回归的故事，但没有人真正知道巴比伦大祭司的命运如何。","id":15,"index":"PLAGUE","name":"The Plague","difficulty":1,"power":"VILE_PURGE","perks":["CORRUPT_INTERVENTION","INFECTIOUS_FRIGHT","DARK_DEVOTION"],"image":"MK_charSelect_portrait"},{"description":"丹尼·约翰逊（对部分人而言，他叫杰德·奥尔森）从厨房操作台上拿起了一周前的旧报纸，但头版上赫然是他那张粗糙而深陷的脸。在这个佛罗里达州典型的湿热的下午，厨房里的每个角落都又热又湿，他站着不动都汗流不止。他在一张微湿的椅子上无精打采地坐下，开始读报。希望这篇文章符合事实。他在罗斯威尔的表现非常“出色”。<br><br><i><b>《凭空消失的鬼面》</b><br><br>1993年6月18日<br><br>乍看之下，杰德·奥尔森是一名谦虚而热情的自由职业者，有和各家小报社打交道的经验。罗斯威尔公报的员工看中了他随和而诚实外在，面试还没超过五分钟，他已经和面试官聊得十分热络了。<br><br>“杰德很快就在房间里认出了主编，给了他一个灿烂的笑容，然后与他热情地握手，并开始谈论老一套的美国价值观。结果他就这样被录用了。”——《罗斯威尔公报》的前投稿人<br><br>奥尔森为了谋生而从犹他州辗转到宾夕法尼亚州，途中在几座小城镇中逗留过，而他从未对这种奇特的职业道路作出解释。无法证明他之前做过什么工作。他有相当不错的作品集，态度也很好，他们当时也急需投稿人。<br><br><b>罗斯威尔凶杀案</b><br><br>奥尔森在报社干了五个月后，罗斯威尔就发生了凶杀案。受害人有老有少，都是在家被人用刀痛死的。报告中称受害人似乎是随机选择的，然而凶手对他们家里的布局十分熟悉。多处捅伤和表明凶手有个人动机。未找到任何DNA痕迹。当地警方被搞得焦头烂额：凶手行凶时带着类似冲动犯罪的狂怒，同时又冷静策划过如何行凶。<br><br>凶手还喜欢跟踪目标。两名受害人在受害前数天举报称在回家路上有一个黑衣人跟踪他们。凶手会从罗斯威尔北部的白星眼酒吧跟踪他们，然后偷拍他们在家的照片，同时寻找进屋的途径。他会观察一名受害人数周，小心翼翼地记录其习惯和生活方式。他感觉到杀人的冲动时，就会挑选列表中最容易下手的目标，并悄悄闯入其住所。<br><br>罗斯威尔凶杀案故事成了全体员工的工作内容。奥尔森经常奉命前去采访受害人的家属并传达警方的声明。当时没人知道，他的参与增加了最后遇害者的数量。<br><br><b>鬼面</b><br><br>奥尔森出示的一段带兜帽的人夜间闯入一处房屋的视频令整个罗斯威尔人心惶惶。戴着面具的脸是黑暗中一抹模糊的白色。那人对着镜头看了一秒钟，之后就消失在了屋里。接下来奥尔森就写了《被拍摄到的鬼面》一文。当时他似乎对自己的作品十分自豪，因为全镇人民都被他的鬼故事吓坏了。<br><br>几周后，奥尔森不见了，只在自己的办公台上留了一张纸条，上面写着：<br><br>“希望你们喜欢我的故事。我十分享受将故事变为现实的过程。别担心，我还没打算停手。”——杰德·奥尔森<br><br>杰德·奥尔森依然在逃，罗斯威尔的执法部门拒绝对此发表意见。</i><br><br>丹尼笑了，把这篇文章从报纸上剪了下来。当警方开始调查他时，他便收拾行装离开了罗斯威尔。<br><br>他站起身，黏糊糊的座椅似乎在拉拽他的皮肤。他一走进卧室就感觉到一阵令人压抑的湿热迎面而来。凝结的水珠从被气雾遮挡的小窗户上淌下来，破裂的墙纸小块无力地耷拉着。一张张可怕的照片和新闻头条遮挡住了墙纸上的花形图案。丹尼把这篇一周前的文章钉在了一张照片上，照片里是被划破的头皮。一阵饥饿使他肚子隐隐作痛，他开始回想上次吃饭是什么时候。是今天早上洗刀和衣服时吃的吗？还是昨晚跟踪那名女孩走了一路之后？他也记不清了。<br><br>他后退一步，欣赏着墙上的作品。他想起了从前写过的那些文章，策划的那些故事，以及他重现的那些场景。<br><br>他打了个寒颤。一阵冰冷的微风把卧室里湿气变成了模糊的冻雾。一个女人发出尖叫。落叶在他脚下沙沙作响。<br><br>他期待地露出笑容。 ","id":16,"index":"GHOST","name":"The Ghost","difficulty":2,"power":"NIGHT_SHROUD","perks":["IM_ALL_EARS","THRILLING_TREMORS","FURTIVE_CHASE"],"image":"OK_charSelect_portrait"},{"description":"一张如同花瓣一般绽开的巨口，里面缀满了刺针似的尖牙；一双长而弯曲的利爪，还有一双能轻松扑倒猎物的强劲后腿，魔王就是靠着这些成为了在任何位面中都能兴风作浪的可怕怪物。它带着滔天狂怒，扑杀猎物的样子恰如噩梦成真，随后它会将每一滴血肉吞噬殆尽，甚至不留一点渣滓给后来者。在这家伙面前毫无同情与克制可言。它会在受害者上方悄然浮现，依照纯粹的嗜血渴望发动致命攻击，不带一丝动摇或是仁慈。作为一名完美的猎手，魔王就是潜伏于颠倒世界中众多恐怖存在的证明，而这也使其成为了恶灵选中的对象。","id":17,"index":"DEMOGORGON","name":"The Demogorgon","difficulty":1,"power":"OF_THE_ABYSS","perks":["SURGE","MINDBREAKER","CRUEL_LIMITS"],"image":"QK_charSelect_portrait"},{"description":"对山岡火山而言，为家族争光远远不够。他想要超越自己父亲的名声，并终止农民假扮成武士这种对武士文化的玷污行为。 火山的父亲曾力劝儿子把注意力放在更崇高的目标上，但火山不听，还借了父亲的武士刀并踏上了诛杀全日本冒牌武士的黑暗之旅，以证明自己的价值。火山不顾自己以前学过的准则，在丘陵、山谷、沙滩和林地里诛杀冒牌武士。他杀人的手法残忍无情而病态。他羞辱农民与战士，扯掉其顶髻并剥掉其护甲。他心中充斥着无边的愤怒、嗜血渴望以及扭曲的荣誉感。僧人认为在一名贵族领主开始称呼火山为狂怒的“鬼武士山岡”这一侮辱他本人及其家族的绰号时，他就被某种异界黑暗存在附了体，并遭到诅咒。<br><br>决心为家族挽回名誉的火山现在诛杀任何敢称呼他为鬼山岡的人。这个侮辱性绰号让他迷惑不解。他击败过最强的对手，也通过铲除各地的冒牌武士而净化了武士阶级。别人为何会称他为鬼呢？因为他在战场上斩杀过最勇猛的战士吗？ 因为他曾手持金棒敲碎过成百上千人的头骨吗？还是因为他非要从自己杀死的人身上取下一份“战利品”？这些都无关紧要了。他受不了别人称他为鬼，他脑海中有一个不祥的声音怂恿他诛杀那个破坏他名誉的领主。<br><br>火山来到了那个领主的城镇，突然发现路当中站着一名武士，挡住了自己的去路。手握金棒的火山做好了战斗准备。那名武士一言不发攻了过来，很快就占了上风。但他犹豫了。火山抓住机会一棒砸碎了武士的脑袋，连头盔都被他砸裂了。火山走到倒下的武士跟前，看到了父亲的脸。他大吃一惊坐在地上。他父亲用带有羞愧与悔恨的眼神看着火山，咽下了最后一口气。火山闭上了他的双眼，并痛苦的大叫，直到再也喊不动为止。他再次睁开双眼时……发现父亲的尸体不见了。他不仅杀害了自己的父亲，还让贼人偷走了他的遗体以剥下他身上的护甲。<br><br>痛苦失落又万念俱灰的火山在各地漫无目的地游荡。父亲的话音在他脑海中不停地嘲笑他，令他回想起自己的失败，使他时不时便会因愤怒而情绪失控。一天，在林中行走的火山偶然遇到了一尊鬼的雕像。他停下脚步，一动不动地站在原地许久。那尊饱经风霜而植物蔓生的雕像似乎在嘲笑他，指控他也是自己费尽心思都要铲除的冒牌武士。火山驱赶走脑海中的嘲笑声，并隐约回忆起嘲笑他是“鬼山岡”的那名领主。<br><br>火山心中的怒火再一次燃起，决定前往一座雪山上的城镇，因为那名领主就住在那里。在镇门口，火山遇到了十几名武士。那十几名武士都成了他棒下之鬼。他的速度和力量无人能及。他的怒火无边无际。满身是血的火山在镇上杀出一条血路，很快就找到了躲在自己豪宅中的那名领主。火山把他从柜子里拽出来，挑断他的手筋脚筋令他无法移动，并看着他像一条狗一样打滚求饶。 他毫不犹豫地一拳砸进领主的嘴里并扯下了那条玷污他名誉的毒舌。 <br><br>心满意足后，火山离开了豪宅，却发现几十个手持生锈镰刀和锋利干草叉的农民将自己包围。 他击败了前几波袭击者，但从四面八方涌来的袭击者人数实在太多。 不久后，火山就倒在地上，盯着冷漠的灰暗天空，而那些农民则轮流戳刺折磨这个杀害他们敬爱领主的“鬼”。 狂怒的人群把火山拖到一处小型石磨，并继续折磨他，最后把他丢在那里在痛苦中慢慢等死。 他们回来，发现那里弥漫着怪异的黑雾，而火山的尸体和金棒不知所踪。 从此以后，便有了狂怒的鬼在镇上出没的可怕传说。","id":18,"index":"ONI","name":"The Oni","difficulty":1,"power":"YAMAOKAS_WRATH","perks":["ZANSHIN_TACTICS","BLOOD_ECHO","NEMESIS"],"image":"SK_charSelect_portrait"},{"description":"凯勒布·奎因出生在美国中西部漫天黄沙的废土，是一个爱尔兰移民家庭的儿子，从小过着艰苦的生活。在那边境的不毛之地，人们每天都要和疾病、饥荒和死亡打交道。拓荒者们会为了微不足道的利益而你争我夺，与此同时企业大亨们却过着锦衣玉食的生活。凯勒布的父亲以前是一名工程师，现在却无处施展才华，因为用人单位门前都能看到一张告示，上面写着：不需要爱尔兰员工。他只能把陈旧的工具收了起来，一放就是好多年，直到有一天凯勒布发现了这些工具。他注意到了儿子对工程学的兴趣，于是把自己的旧扳手送给了他。\\n\\n在父亲的指导下制作出了用途稀奇古怪的装置，不过当他的父亲离开时，这些装置的用途变得令人毛骨悚然。他藏起了一副面具的设计图，这副面具能把带有倒刺的针扎进人的眼睛里，再将其从眼窝里扯出来。图上还画着欺负过他的男孩的素描。\\n\\n随着凯勒布一天天长大，他在工程学上的才能已经可以用来赚钱了，于是雇主们放下了种族上成见。联合西部铁路公司的拥有者亨利·贝索雇佣了他。\\n\\n凯勒布先发明了一种能往地里发射铁路道钉的枪。接着又发明了一种挖隧道用的蒸汽钻机。后来其他公司也陆续用上了这些设备，而贝索却装出一副无动于衷的样子，原来是有人窃取并出售了凯勒布的专利。\\n\\n一股熟悉的感觉涌上凯勒布的心头，令他心如刀绞。现在的他仍在为了勉强活下去拼命，而他的智慧结晶却成了有钱人赚钱的工具。怒不可遏的他冲进贝索的办公室，把他的脸砸了个血肉模糊。有人将他拉开时，他把自己特制的枪的枪口抵在老板的肚子上，扣下了扳机。铁路道钉射穿了皮肤与内脏，将贝索钉在了自己的办公桌上。\\n\\n可贝索居然奇迹般地保住了性命，凯勒布也因此而躲过了绞刑。凯勒布被判处15年徒刑，在国家第一座私营监狱地狱郡监狱服刑。他在这座住满文盲罪犯的堡垒里，机缘巧合之下与受过良好教育的狱长成为了朋友。他替狱长设计了各种刑具，以换取额外的伙食。一段时间后，狱长提出替他减刑。他说政治资本比金钱财富更为强大，且他可以动用关系陷害贝索，让他在监狱里度过余生。而他只有一个条件：把他变成有钱人。让这座监狱住满犯人。发挥聪明才智活捉不法之徒。\\n\\n凯勒布回到了工坊，进行一番改装后，制作出了全新的矛枪。第一次试射发生在一家中国人开的洗衣店遭贼偷窃之时。凯勒布抓住了这次机会，用原型武器开了火。随着金属接合处发出刺耳的声音，枪把尖刺发射了出去，扎进了目标的腹部。但要收回尖刺时，尖刺却已经缠住了窃贼的内脏，随着一声令人作呕的声音，尖刺将内脏也扯了出来，洒在了布满灰尘的地面上。\\n\\n经过若干次改良，开膛破肚的情况越来越少了。狱长动用关系，释放了爱尔兰犯人，为凯勒布组建了团队。地狱郡黑帮由此诞生。\\n\\n六年来，他们在乡间徘徊，抓捕通缉犯关进监狱，兑现他们的承诺。格伦威尔血战之后，一天凯勒布看到报纸头条上写着：亨利·贝索买下了地狱郡监狱。照片中，被毁容的贝索正自豪地与狱长握手。怒上心头的凯勒布心脏怦怦狂跳，血管中的血液仿佛就要沸腾。他被出卖了，到头来他只是个任凭有钱人玩弄的棋子。\\n\\n地狱郡黑帮发誓效忠凯勒布，并决定砍下狱长的人头。他们气势汹汹地杀到监狱，像嗜血的掠夺者一样尖叫着砸开了大门。一名守卫举起了手枪，但犹豫了片刻。结果矛弹就捅穿了他的胸膛。凯勒布揪住那人的脑袋疯狂地往牢房上砸，直到把脑袋砸烂。\\n\\n杀到狱长办公室门口后，凯勒布一脚踹开门，看到了令他庆幸的一幕：躲在角落里瑟瑟发抖的除了狱长外，还有亨利·贝索。被愤怒冲昏头脑的他冲过去对贝索一顿拳打脚踢，打的他皮开肉绽。鲜血从贝索的脸上滴下，在他脚下汇聚成深红色的血泊。地狱郡黑帮围住狱长一顿乱打，每一脚都能踹断他几根骨头。\\n\\n一伙人将两人打的体无完肤但求一死，然后把他们拖到了越聚越多的围观犯人跟前，把两人留下后一走了之。\\n\\n被汗水与鲜血浸湿的凯勒布蹒跚地走到他以前住过的牢房，全然不顾贝索的惨叫声。他坐在了床的边缘，任凭鲜血从他的指尖滴落。非自然的浓雾透过窗户栅栏涌了进来。他拿出了破损生锈的旧扳手，用无神的双眼注视着它，并伸出拇指轻抚着它。他是何时得到这把扳手的？他已经记不清了。他也不在意这种事。他看到脚下出现一条布满灰尘的道路，在路的尽头有不少人的剪影，而这些人都做过对不起他的事，比如欺负过他的男孩，利用过他的公司领导，以及……亨利·贝索。迷雾中出现了杀死这些人的工具：一把锃亮而散发着简约之美的无情钢钩。他忍痛站了起来，沿着那条布满灰尘的路费力地向前迈步，在身后留下一条血迹。 ","id":19,"index":"DEATHSLINGER","name":"The Deathslinger","difficulty":1,"power":"THE_REDEEMER","perks":["GEARHEAD","DEAD_MANS_SWITCH","HEX_RETRIBUTION"],"image":"UK_charSelect_portrait"},{"description":"三角头是施虐成性且无情的处刑者，其专注于通过痛苦来灌输惩罚。他头戴着钢架，手中拖着巨大的刀刃，在寂静岭地狱般的走廊中不断徘徊着，致力于一项无人能够真正理解的使命。他踏足之处，就连其他怪物也要逃回阴影之中，而那些不长眼的家伙随即便会成为他不加约束的暴力行为的受害者。当他的使命最终完成，并且不再需要他的存在时，他便准备开始长眠——然而，他的本领在其他地方仍有发挥的空间。笼罩在他身上的雾气与他在寂静岭所惯用的雾气有所不同，好像每一缕都仿佛是什么生物的神经，在扭动着寻找他。那一刻，有某种无言的协定成立。滚滚的乌云仿佛是使命和施虐的邀请，而三角头踏前一步走入迷雾，再次接受了他命中注定的职责。 ","id":20,"index":"EXECUTIONER","name":"The Executioner","difficulty":1,"power":"RITES_OF_JUDGMENT","perks":["FORCED_PENANCE","TRAIL_OF_TORMENT","DEATHBOUND"],"image":"K20_charSelect_portrait"},{"description":"要了解人类的本质，就必须凌驾于其上。这曾是塔尔伯特·格莱姆斯的人生信条，这位苏格兰药剂师依靠自己的无边野心而登上了巅峰。他小的时候是个受欢迎的孩子——聪明伶俐，不怕挑战权威。在社交方面如鱼得水的同时，他还是个非常独立的人，喜欢花费大量时间独自探索城镇附近的广阔土地。在拿一小片有毒的毛地黄进行实验后，出自孩童的好奇心几乎将他置于死地。数日之间，他都躺在床上大汗淋漓，不管吃什么也都会全部呕吐出来。在他康复之后，他体会到的不是恐惧，却是欢喜。很难相信一朵花会对他产生如此剧烈的影响。<br><br>到他成年之后，他的野心与他使用的争议手段都在与日俱增。他就读于伦敦医学院，尽管受到了数次谴责，但还是表现出色。他乐于突破极限的态度让他在英国东印度公司谋得职位，并且在七年内被任命为首席药剂师。随着时间的推移，他完成了自己最大的成就之一：一某种让工人提高产能同时降低休息需求的化学物质。作为奖励，他在戴尔岛某个监狱营地下获得了一处秘密实验室。<br><br>在印度沿海的此处，那些鸦片战争的囚犯被迫成了他的实验对象，并最终制成了某种使士兵能够承受令人难以置信的痛苦的药物。尽管大多数副作用很微弱，但还是有传言说有少数士兵发了疯。他们以十分凶残的状态屠杀了村庄，用刺刀将平民刺穿，将其挂在树上。此事件从未有过官方报道，而塔尔伯特也拒绝因为某些被夸大的战争故事而受到指责。<br><br>尽管他那带有些许冷酷的杰出工作似乎并未动摇，但他对那些因为自己可疑的工作而逐渐积累起来的敌人一无所知。这份现实随后便重重地回报了他——他在前往门格洛尔旅行的途中从背后被钢管狠狠敲了一闷棍。他被捆的结结实实，丢进了一辆马车。当他的眼罩被摘下后，某个病恹恹的男人指了指他面前有着数百具尸体的墓坑。塔尔伯特不知道的是，他那能提高生产力的药物几乎杀死了整个工厂的工人。他知道自己无法逃过绑架者的愤怒和指责，而他所能做的就是在钢管落在他身上时努力蜷缩成一团。他神志不清的身体被扔进了墓坑等死。他的意识在清醒与昏沉之间不断切换，他将手指深深嵌入其他人腐烂的血肉里，想要爬出这个鬼地方。乌蝇落在他仍然暴露在外的皮肤上想要美餐一顿，那感觉像有上百根针刺入他的身体中。当他最终倒下时，与他面对面的是某个死去女人的淡褐色眼睛。他没有力气再挪动身子，只能眼睁睁地看着自己的毕生成果。<br><br>随后，他又从死亡的边缘被拉了回来。他睁开眼睛的时候，发现自己躺在一张小床上，某张长满皱纹的脸庞正俯视着他。在这处伪装成修道院的古老神秘学校中，他挺着每次痛苦的呼吸逐渐通过照料恢复了健康。在高大朴实的墙壁后面的翠绿花园中，僧侣们研究着各种禁书的内容，努力想要扩大人类的思维范围，寻找其他维度——他们认为维度彼此之间是相互关联的。<br><br>塔尔伯特的知识被证明是必不可少的，他那改变思想的化学物质与神经膨胀理论可以无缝结合。他也意识到自己被救治并非偶然——他被专门从坑中拽了出来，以帮助拓展学校的知识水平。他同意在康复之前提供帮助，而他的任务是研究僧侣口中的灵魂质——这种从松果体中剥离的化合物可以使灵体的眼睛睁开。这原本是对他的救命恩人的一点回报，却迅速成为了他所痴迷的内容。通过浏览学校中各种失落的文献记载，他发现某些科学公式能够证实以前无法想象的想法。他开始梦想着要让全人类进入一段新的启蒙纪元。也许到那时，数百名死去的工厂工人——以及那两只淡褐色的眼睛——才会从他的噩梦中消失。<br><br>当他即将有所突破时，僧侣们的举止发生了变化。他们的笑容依旧，却有不安的眼神在对视时一闪而逝。曾经与他有礼貌的交谈现如今变成了静默的低语。他对学校的最后一点记忆是床铺上方的天花板破裂开来，像树突一样穿透塑料板不断伸展。<br><br>他的下一段记忆中全是破碎的图像与感觉。弥漫的灯光，鹅卵石上的马蹄声，粗麻布蹭过他的脸颊，以及他胳膊上传来的刺痛。衣衫褴褛脏乱不堪的他在一处鸦片窟中的草席上醒来。尽管头脑还是一片昏沉，他首先想到的仍是自己的笔记，那记载了他跨时代研究的唯一记录。他疯狂地在肮脏的地下室里不停搜寻着，大声地寻求帮助。其他几个住民从吊床上抬起头来，只回以浸透毒品的眼神和无动于衷的目光，随后又很快陷入了半梦半醒之间。在他注意到某个身穿长袍的身影出现在他身后时，一根针刺入了他的手臂，世界再次消失了。<br><br>苏醒。再一次。每次感觉都更加昏沉。他用舌头戳了戳牙缝。不知道过去了多久。模糊的记忆在脑海中闪烁。灵魂质。他的笔记。即将突破的边缘。一阵遥远的低语传入他的脑海。<br><br>他摸索到一块石头，用颤抖的手将其磨尖。在鸦片窟的昏暗光线下，在吸毒成瘾的住民之间，他将自己记忆中的研究成果刻在了墙上。他一刻不停地写了足足四个小时，直到他的手指渗出鲜血滴在地上，但他还是写着那声音低语着的一切，尽管他自己也无法理解。当墙上已经没有地方可写时，他抓起石头开始在自己的胸前刻画。沾满鲜血的他目睹了自己面前出现的奇迹——某片一望无际的田野，里面开满了郁郁葱葱的橙色花朵。那低语之声在召唤着他，敦促他进入这片田野中，去发掘人类理解之上的世界和维度。在这片刻之中，塔尔伯特找回了自己曾是孩童时的那种惊奇感。<br><br>鸦片窟的住民们陷入了静默，鸦片抽干的烟气还萦绕在空气中。他们从云遮雾罩的鸦片烟中缓缓走出时，才发现石头地板上沾满了鲜血，汇成细小的溪在缝隙中流淌。当他们的眼睛适应黑暗后，遍布整个房间的潦草字迹也随之出现。回环往复，无休无止的内容中只有一句话：<i>死亡仅仅是个开始</i>。","id":21,"index":"BLIGHT","name":"The Blight","difficulty":2,"power":"BLIGHTED_CORRUPTION","perks":["DRAGONS_GRIP","HEX_BLOOD_FAVOR","HEX_UNDYING"],"image":"K21_charSelect_portrait"},{"description":"一对连体双胞胎，夏洛特与维克多·德赛斯有着独一无二的情感联系。像他们这样的婴儿在17世纪成功出生的可能性不大，几乎可以说是神迹，而这却立即让他们过上了被迫害的生活。维克多的下半身贴在了他姐妹的胸前，双腿在她的肌肉和器官附近来回扭动。他的个头比夏洛特还小，看上去像是她身体的附属物，而非完整发育的个体。在这对新生儿落地啼叫时，接生的助产士也从其家中跑了出来，大喊着有女巫生下了恶魔。于是针对夏洛特、维克多以及其母亲玛德琳的猎杀从此开始。<br><br>接下来的几年对双胞胎的记忆而言是短暂的，但他们对彼此则是最接近正常生活的事物。他们以为与母亲在法国乡村奔跑和躲藏的旅程很普遍，这样的游戏是所有孩子都经历过的事情。到了五岁的时候，游戏出现了新的挑战，因为他们的母亲病倒了。脸色苍白又疲惫不堪的玛德琳别无选择，只能将收集食物的责任交给夏洛特。这个女孩为了掩盖维克多的突出身体而盖上多余的衣服，从森林的帐篷里出来溜到附近的城镇。尽管她的外表看起来异乎寻常，但她还是按照自己所训练的，等待市场开门后尽快弄走足够多的食物。这是游戏的胜利，但并不长久。<br><br>一天午夜过后，炽热的火焰包围了这家人的营地，在黑暗中摇曳。一声高喊的命令声打破了夜晚的寂静，一群女巫猎人随即涌入。一双双肮脏的手要将双胞胎扯离床铺，而夏洛特疯狂地用腿踢向任何靠近的人。玛德琳为自己的孩子们失声痛哭，但她的头上突然被棍棒打中，随即不再发出声音。维克多发出的尖叫声就像是陷阱中老鼠的哀号。<br><br>猎人们的动作十分迅速。现场的一名法官宣布玛德琳犯下了女巫罪，证据则是她生下的恶魔。在接下来的几分钟里，他们将她昏迷不醒的身体绑在树上，并在她脚下堆满了干树枝和苔藓。她醒来后没有挣扎，只是央求自己的孩子们转过身去不要看她。可他们没有任何选择。双胞胎眼睁睁地看着火炬点燃，烈焰烧向母亲的裙子，吞噬着她的血肉。他们看着脂肪从她的身体上慢慢滴落，她的脸庞已经起泡扭曲。他们看着她一直尖叫到声带撕裂，最终只剩下一堆焦黑的余烬与令人作呕的恶臭。<br><br>他们心中的快乐与善良都随着母亲一同灰飞烟灭了。这对双胞胎被装在笼中运到了一处旧神庙，并被卖给了某个身穿黑色斗篷的秘密团体。维克多就像一只猛兽般，对任何接近的人连抓带咬。唯一能安抚他的只有自己孪生姐妹的怀抱。而对除了自己兄弟之外的一切都无比憎恨的夏洛特，也将保护维克多作为了自己的生存意义。<br><br>多年来他们在神庙中遭受了很多非同寻常的实验——有些十分残酷，而有些则只是莫名其妙。有天他们被迫折断一只灰色小鸟的脖颈。第二天他们要用玫瑰扎伤自己的手指。每过七天，他们睡觉时就要在枕头下放上一根潮湿的橡树枝。此外还有祷词：这些神秘人物每隔一段时间就会开始永无止境的吟唱。<br><br>随着时间不断流逝，最终的实验终于成型了。两个穿长袍的人将双胞胎赶到神庙中心，逼迫夏洛特站在房间的祭坛中，并且周围点满了烛台。从兜帽下透出一个男人满是皱纹的脸庞，他将手分别放在双胞胎的前额，仔细检查着他们的头骨。他轻声默念着“死亡链坠”，然后掏出了一把寒光闪闪的小刀。<br><br>夏洛特用力滚向一旁，将自己的兄弟带落祭坛。他发出一声尖叫，尽力用手臂向前伸去，并将一处烛台碰倒在地。火焰立刻被引向了干柴。火势迅速沿着地板蔓延开来，并窜上了拖在地上的黑色长袍。痛苦的叫声刺穿了混乱，使夏洛特感到振奋。她在这片火焰炼狱中不停向前狂奔，眼前只有黑烟与跃动的烈焰。她的肺里感觉痛苦无比。找了半天没有出口，而她的每一步都腾起热浪。她跌倒在地，感觉即将要窒息的时候，眼前的景色突然一变——出现了阳光与树木。她跌跌撞撞地从火中走入了潮湿的草坪。向着前方的树林，她头也不回地走去，直到身体终于不堪重负而倒地。<br><br>等到夏洛特睁开眼睛时，她赶紧去抓维克多的手。可他没有一点儿动静。他的身体奄奄一息地垂在她的躯体之上。她紧紧捧住他的脸，凝视着他悲伤而平静的眼睛。那曾经让她习惯的动作——他的身体拉扯她的皮肤，他的双腿蹬在她胸前的凹陷——已经不复存在了。维克多死了。<br><br>夏洛特害怕那些黑袍人与女巫猎人再度追来，于是只能一边哀伤一边继续前进。她将兄弟的尸体藏在衣服下面，并前往附近城市的下水道里。她在那搭好了营地，常常出现在地表偷窃各种食物，有时迫于无奈还得溜到谷仓和猪抢泔水吃。多年以来，维克多的尸体逐渐腐烂，他的四肢不断渗血发黑，但他的身体却对完全分解有着某种抵抗力，就好像他姐妹的鲜血还在他身体中流淌一样。夏洛特如今的唯一想法就是保护他的尸体，她再也不愿意与自己仅剩的家人分离。<br><br>她的青少年时光就好比一场生存游戏。她明白外人永远不会放过自己，于是她对人类的憎恨也与日俱增。无论有多少人在她的抢劫与逃脱过程中死去，总是会有更多追捕和谴责她的辱骂声——怪物、恶魔、女巫。而那些黑袍人则是其中最恶劣的。他们永无休止地搜寻她，迫使她要不断放弃自己的住所疲于奔命。<br><br>多年以来，夏洛特不断逃亡着，必要时也会杀死对方，并且会在深夜里拥抱自己死去很久的兄弟。在某个严酷的冬天里，她的身体开始撑不住了。食物非常稀缺，而摇摇欲坠的棚屋对冰冷刺骨的气温毫无用处。她手握镰刀，躲在树林里的篝火旁，不晓得自己会先死于寒冷还是先死于黑袍人之手。就在她的鼻梁结上一层寒霜，嘴唇也呈现出淡蓝色时，夏洛特终于感觉到了某种从未体会过的东西：接受。她闭上眼睛，等待着宁静的死亡到来，而就在此时——她的耳中传来一阵刺耳的恶毒尖叫。维克多在她的胸口处抽搐摇晃着，有一片雾气笼罩着他。她还没反应过来，他就从她的身上撕扯下来，在雪地上留下一片血泊并跑走了。<br><br>她用尽全力从死亡边缘回过神来并开始追赶。她呼唤着他的名字，在森林中不断奔跑直到双腿几乎要失去力气，最终她终于看到维克多坐在一片浓雾的边缘。他的脸庞扭曲而狰狞，正望向雾中一名戴着黑色兜帽的身影，后者紧紧抓住他的胳膊攫住了他。夏洛特心中积攒许久的宁静此刻无影无踪，取而代之的则是她长期以来一直依赖的仇恨和愤怒。她紧紧握住手中的镰刀冲进雾中，誓要将胆敢靠近自己兄弟的人剜骨抽筋。","id":22,"index":"TWINS","name":"The Twins","difficulty":2,"power":"BLOOD_BOND","perks":["HOARDER","OPPRESSION","COUP_DE_GRACE"],"image":"K22_charSelect_portrait"},{"description":"河知云在其他人的关注下蓬勃发展，每个看着他或说起他的人都使他感到振奋。在盛名中中，他只有一个愿望：更多。还小的时候，他就知道如何吸引人群。他在家庭餐厅里工作，用飞刀杂耍表演吸引生意。易受骗的游客认为这是韩国的传统体验，并且很乐意花钱见证这一点。知云的父亲将餐厅的收入用于儿子的舞蹈和声乐课程，想让他获得自己永远无法获得的名声。<br><br>知云没有令父亲失望。在多年的才艺表演中展现出新手能力之后，他走上了成为明星的轨道。强者娱乐的制作人李允珍招募了知云加入她的培训计划。他搬到了首尔的一个宿舍，一天十四个小时练习明星的生活，学习如何表演和唱歌，如何在自信和谦虚之间取得平衡。<br><br>这个过程虽然很辛苦，但也很有效。允珍选择了知云加入无转乐队，为乐队增添了生机。声名立刻纷至沓来。知云生活在面试和崇拜的发呆中，尽管疯狂的日程使他的队友筋疲力尽，但他仍然充满了活力。他的每一天都在肯定他比平庸的社会人更伟大。<br><br>但是随着时间的流逝，再好的香槟也会变得陈旧。当他看着歌迷时，他看到了他们的喜悦和嫉妒分成了五份，在每个乐队成员之间逐渐淡化。他体内想要证明的欲望使他渴望得到更多。<br><br>知云保持着自己的人设，模仿了长期被厌恶掩盖的魅力。他与乐队成员一起录制了最新的无转乐队专辑，从未错过任何节拍。漫长的午餐休息后，他回到工作室，发现了命运给他的礼物。燃烧的电线气味是显而易见的。他冲到控制室，发现门被掉下来的扬声器挡住了。在另一侧，他的队友们猛地敲门，他们的哭声伴随着火焰的劈啪声。<br><br>知云朝他们呼喊着，冲向扬声器，抓住其中一个——然后停了下来。他愣在原地。每次呼吸都是刻意而有意识的过程，需要他的所有注意力，附近的哭声几乎无法听到，直到他慢慢地后退。然后他听到了。他们烧焦的时候还在呼喊他的名字。叫他去救他们。知云！知云！河知云！这是他听过的最美妙的声音。消防人员赶到的时候，他留下的眼泪是真的。<br><br>知云被誉为悲剧人物，他是一位英雄，竭尽全力想挽救他的朋友。允珍让他在各个采访之间游走，直到重建形象的时机来临。他以“骗术师”的艺名重新出道为单飞艺人，创作了自己的歌曲，在狂野的外表之下表现出柔和的心。但是，除了音乐会的布置和电视舞台之外，更黑暗的情感出萌发了出来。<br><br>他盯上了那些独居者，在夜里前往拜访他们。第一位受害者是大学音乐系学生，有着令人着迷的嗓音。知云用球棒将他唤醒，将他的胳膊和腿绑在一起，用一条抹布堵住了他的嘴。他折磨了他几个小时，最后活活解剖了他。但还缺了点什么——某种声音，某种连接。他想听到受害者在被剖开时的美妙恳求声，但是他听到的只有透过抹布的哭声而已。<br><br>他吸取教训，调整策略。<br><br>决定必须要绑架受害者，将其带到一栋废弃的建筑中，在那里他可以让他们的声音释放出奔放的情绪。他从他们那里制作音乐，在适当的地方进行刺激，以唤起不同类型的哭喊和嚎叫声。戳刺腰方肌会引起悠长的痛苦喉音，而削砍颈动脉会产生类似于被勒死的猫的声音。他们受到的苦难是真实的。知云记录了每次过程，将它们合成并制作成他的歌曲，将它们隐藏在旋律背后。<br><br>他对自己的工作感到高兴。他给警方留下了暗示，将最近一次拍摄的水貂围巾放在受害者被划开的喉咙处。在他下次杀人的时候，他将受害者的一颗牙拔掉，就像他的音乐录影带中的一名拳击手一样。在一次特别大胆的行动中，他杀死了一个在VIP见面会时遇到的粉丝，用钻石袖扣戳进了她的眼睛，并在她的胸口用鲜血写道“我见到了上帝”。每次犯罪现场都是令人瞠目结舌的表演。<br><br>在音乐和谋杀之间，知云的作品都在全球范围内得到了讨论。但是，随着暴力成为他偏爱的艺术风格，他的音乐事业大受打击。音乐收入下降，强者娱乐高管将矛头指向了他。允珍怀着专业的愤怒为他辩护，但还是寡不敌众。高层决定不让知云自己创作歌曲。<br><br>这项决定带来了毁灭性的后果。他的音乐融合了真实的人性和音乐性，但高管们拒绝了任何非常规和预期的内容。那就这样吧。如果他们不了解他的艺术，他就要把他们也融入其中，直到他们明白为止。 \\n\\n他花了三个月的时间才为强者娱乐的董事会成员进行私人表演；用这三个月计划他的杰作。他将一笔巨款打给一位兽医，以换取一氧化二氮的罐子，然后贿赂了强者娱乐私人剧院的舞台技术人员进入房间。他的名声让任何普通人都没有产生怀疑他的念头。演出准备就绪后，知云的气体渗入了高管和舞台表演人员在等待的房间，便于他之后到场行动。 \\n\\n当他到达时，人们已经意识不清地瘫在座位上或是倒在地上。他迅速将所有人绑了起来，直到他来到允珍面前——这个女人曾把他拖出泥潭，带到他应走的道路之上。她应该得到奖励，以特殊嘉宾的身份面对即将到来的精彩表演。即使在镇静剂的作用下，她仍在反抗，她内心的狂风暴雨远比其他人强大。他使她作为唯一的观众成员坐了起来，撑开她的眼睛。其他人则颤抖抽泣着被拖上舞台，等待着他们的最终演出。他带着可鄙的冷笑，将化妆粉拍在他们的脸上，并将舞台灯光照向他们。他们成了他的乐器。 \\n\\n就着体内自发产生的旋律，他优雅地一个个折磨着这些人，从哀号声中演绎出歌剧般的渐强。他们大声喊叫，哭泣，尖叫，为爱人而哭，为母亲而哭。这当真可说是情感的喷薄，是人性的真谛，而他们的目光始终没有离开过知云。 \\n\\n随着他不断投掷飞刀，内脏从舞台上流了下来，直到最后的人类乐器变得寂静无声，音乐也停止了。浑身是汗和鲜血的疲惫的知云向允珍鞠了一躬。谢幕。他达到了完美。他手里握着刀子走向允珍，打算在演职人员返场之前先解决后患。但当他接触到她时—— \\n\\n是迷雾。 \\n\\n他不知道这雾是哪来的，但它围绕着他们，潮湿、凉爽……而舒适。他看到了宏伟的舞台：医院和寺庙，森林和屠宰场——这一片永恒的平原上装饰着生锈的钩子，由数以万计的目光支撑着他，从他身边逃跑，<i>经历着他</i>。他所要做的就是接受，成为迷雾的化身，最重要的是，让他们尖叫。 \\n\\n返场！","id":23,"index":"TRICKSTER","name":"The Trickster","difficulty":0,"power":"SHOWSTOPPER","perks":["STARSTRUCK","HEX_CROWD_CONTROL","NO_WAY_OUT"],"image":"K23_charSelect_portrait"},{"description":"由保护伞公司设计的Nemesis是一种几乎无可阻挡的有机生物武器，专门用于追踪并消灭其目标。作为暴君T-103系列的一部分，此物种被植入了Ne-Alpha 寄生虫，因而有着更高的智力与感知力。它在首次任务中被投放至浣熊市，其目标只有一个：消灭S.T.A.R.S.成员。Nemesis在城市中横冲直撞，并多次直面吉儿·瓦伦丁，尽管后者成功逃脱，但他从未被甩开。正当他即将消灭目标时，一阵奇怪的迷雾降临，与混乱城市中的烟尘混杂在一起。这种现象对他来说不算什么——刺骨的冰冷与含氧量降低从来都不是威胁。重要的是他要进入迷雾，继续执行任务：找到S.T.A.R.S.，消灭S.T.A.R.S.，以及任何进行阻拦的人。","id":24,"index":"NEMESIS","name":"The Nemesis","difficulty":1,"power":"T_VIRUS","perks":["LETHAL_PURSUER","HYSTERIA","ERUPTION"],"image":"K24_charSelect_portrait"}]');

/***/ }),

/***/ "./src/data.compiled/locales/zh/powers.json":
/*!**************************************************!*\
  !*** ./src/data.compiled/locales/zh/powers.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"从克洛普瑞恩疯人院看守帕特里克·斯潘塞那里抢走的最后一口气，引导这股暴力而强劲的能量，可使护士在鬼魂世界里野蛮地连续冲刺。这也会让她疲惫不堪。<br><li>获得鬼影步。</li><li>获得<b>1</b>次额外的连续鬼影步。</li>","name":"斯潘塞的最后一口气","id":1,"index":"SPENCERS_LAST_BREATH","owner":"NURSE","image":"iconPowers_breath"},{"description":"钢制的大型捕兽夹。在区域内各处都能找到并设置这些捕兽夹。<br><br><b>捕兽夹</b><br>默认情况下，游戏开局时你拥有<b>1个捕兽夹</b>。你可在环境中各处收集到更多。<br><b>设置捕兽夹</b><br>长按<i>力量键</i>即可在你面前的有效位置设置一个<b>捕兽夹</b>。设置好的<b>捕兽夹</b>能使踩到的玩家丧失行动能力。健康的逃生者踩到设置好的<b>捕兽夹</b>时会受伤，但可以试图从捕兽夹中逃脱。点击<i>互动键</i>可扛起附近因踩到<b>捕兽夹</b>而无法行动的逃生者。<br><b>重置捕兽夹：</b><br>站在环境中的一处未设置的<b>捕兽夹</b>附近长按<i>力量键</i>可将其原地重置。<b>收集捕兽夹：</b><br>站在环境中的一处<b>捕兽夹</b>附近点击<i>互动键</i>可将其收集。默认情况下，你一次最多只能携带<b>1个捕兽夹</b>。","name":"捕兽夹","id":2,"index":"BEAR_TRAP","owner":"TRAPPER","image":"iconPowers_trap"},{"description":"沉重的铸铁摆钟，充满了古老的力量。摇响后可以让使用者步入精神世界。<br><br><b>骷髅丧钟</b><br>长按<i>力量键</i>可<b>隐身</b>。隐身时再次长按<i>力量键</i>可<b>显形</b>，并获得<b>1秒</b>速度爆发效果。骷髅丧钟的最远生效距离为<b>24米</b>。<br><br><b>隐身：</b><br>隐身时，<b>幽灵杀手</b>移动速度提升，近乎不可见，且获得<b>无法侦测</b>状态。<b>幽灵杀手</b>在隐身时无法攻击，但可以与环境物体互动。被强光照射后<b>幽灵杀手</b>会自动<b>显形</b>。","name":"骷髅丧钟","id":3,"index":"WAILING_BELL","owner":"WRAITH","image":"iconPowers_bell"},{"description":"长按<i>力量键</i>即可发动电锯冲刺。被电锯冲刺命中的逃生者将陷入濒死状态。<br><li>每项电锯行动（启动电锯、电锯暖机以及<b>电锯冲刺</b>）都会导致过热条增加。</li><li>当<b>过热条</b>积满之后，电锯在完全冷却前将无法使用。达到最大过热时不会打断正在进行的<b>电锯冲刺</b>。</li><li><b>过热条</b>在电锯未使用时会逐渐减少。</li>","name":"电锯","id":4,"index":"CHAINSAW","owner":"HILLBILLY","image":"iconPowers_chainsaw"},{"description":"从母亲那学来并在荒野中熟练精通的技能。女猎手可精准投掷她的狩猎飞斧。<br><li>进入游戏时会携带<b>5个飞斧</b>。</li><li>通过蓄力的方式可使飞斧获得最大的飞行速度。</li><li>可在<b>柜子处</b>补充飞斧。</li>","name":"狩猎飞斧","id":5,"index":"HUNTING_HATCHETS","owner":"HUNTRESS","image":"iconPowers_huntingHatchets"},{"description":"他内心的黑暗使他誓要夺去猎物的性命。<br><br><b>恶魔附身</b><br>激活<b>恶魔附身</b>后，<b>迈克尔·迈尔斯</b>可以清晰地看到自己的猎物并通过潜行累积更多邪恶力量。<br><br><b>恶魔附身I：</b><br>获得<b>无法侦测</b>状态。小幅降低移动速度。<i>基础攻击</i>获得小幅降低蓄力。<br><br><b>恶魔附身II：</b><br>中幅降低恐惧范围。小幅提升移动速度。<i>基础攻击</i>获得小幅提升蓄力。<br><br><b>恶魔附身III：</b><br>触发后所有逃生者将承受<b>危险</b>状态。<b>恶魔附身III</b>持续<b>60秒</b>，之后将回退为<b>恶魔附身II</b>。<br><br><b>特殊能力：潜行</b><br>长按<i>力量键</i>可以潜行跟踪所有可见的逃生者。尾行逃生者将提升你的<b>恶魔附身</b>等阶进度。<br><br><span class=\\"FlavorText\\">“我十五年前见过他；据说他什么都没剩下：没有理由，没有意识，没有理解力；甚至连最基本的生与死，善与恶，对与错都无法感知。我遇见的这个六岁的孩子，他有着苍白空洞而毫无感情的脸庞，以及那漆黑至极的双眼……仿佛恶魔。我花了八年时间试图了解他，而后又用了另外七年试图将他深锁隔绝，因为我意识到这孩子眼中的漆黑背后是纯粹的……邪恶。”——山姆·卢米斯博士</span>","name":"恶魔附身","id":6,"index":"EVIL_WITHIN","owner":"SHAPE","image":"iconPowers_stalker1"},{"description":"妖巫力量之源，阴狞的利爪是其恐怖力量的导体。妖巫可以随心所欲地将泥土捏成她想要的形状。在祭祀般的仪式上对之勾画，便可将腐烂之物和泥土创造出和她一模一样的傀儡。这一傀儡可供其驱策使用。<br><li>赋予创造并维持<b>10</b>个鬼灵陷阱的能力。</li><li>赋予其立即传送至<b>40米</b>范围内已触发的鬼灵的能力。</li>","name":"鬼灵陷阱","id":7,"index":"BLACKENED_CATALYST","owner":"HAG","image":"iconPowers_blackenedCatalyst"},{"description":"食人魔在游戏开始时有3次充能。长按<I>力量键</i>以消耗一次充能发动可命中多个目标的<b>电锯横扫</b>攻击。在<b>电锯横扫</b>期间被击中的逃生者会陷入濒死状态。<br><li>使用一次充能可延长<b>电锯横扫</b>的持续时间。这么做会小幅延长冷却时间。</li><li>电锯充能会在电锯未使用时逐渐恢复。</li><br><br>电锯暖机时会缓慢增加<b>暴走条</b>。暴走条积满或使用<b>电锯横扫</b>命中物体之后，食人魔会进入<b>暴走</b>。<b>暴走</b>时会攻击其身边的任意逃生者并使对方陷入濒死状态。<br><li><b>暴走</b>的持续时间会随<b>电锯横扫</b>中使用的充能数而不断提升。剩余的充能会直接损失掉。</li><li>在<b>暴走</b>时，移动速度降低。</li><li><b>暴走条</b>会在电锯未使用时逐渐减少，并在<b>电锯横扫</b>时完全耗尽。</li> ","name":"布巴的电锯","id":8,"index":"BUBBAS_CHAINSAW","owner":"CANNIBAL","image":"iconPowers_bubbasChainsaw"},{"description":"<b>卡特的电火花</b><br>成功使用<b>医生</b>的特殊能力，如<b>电击疗法</b>与<b>静电爆炸</b>击中逃生者后，会提高逃生者的<i>神经紊乱</i>等级，最终导致其承受<b>神经紊乱</b>状态并触发逐渐提升的潜在效果。<br><b>神经紊乱I：</b><br>导致逃生者发出一声尖叫，将其位置暴露给<b>医生</b>。<b>小幅</b>影响技能检验位置和方向。<br><b>神经紊乱II：</b><br>导致逃生者发出一声尖叫，并会看到<i>医生幻象</i>出现。<b>中幅</b>影响技能检验位置和方向。<br><b>神经紊乱III：</b><br>导致逃生者发出间歇性尖叫，并会看到<i>医生幻象</i>出现。<b>巨幅</b>影响技能检验位置和方向。逃生者无法进行治疗、修理、破坏、解锁或净化等动作直至其成功<i>摆脱控制</i>。当逃生者完成<i>摆脱控制</i>后，其将会回到<b>神经紊乱I</b>。<br><br><b>特殊能力：电击疗法</b><br>长按<i>力量键</i>发动<b>电击疗法</b>，对你面前的地面释放一道远程电击。 被<b>电击疗法</b>命中的逃生者将提升<i>神经紊乱</i>，且其正在进行的动作将被立刻打断。<b>电击疗法</b>会立刻消除<b>浑然不觉</b>状态。<br><br><b>特殊能力：静电爆炸</b><br>长按<i>主动能力键</i>发动<b>静电爆炸</b>，使医生恐惧范围内的所有逃生者尖叫并获得更多<i>神经紊乱</i>。 <b>静电爆炸</b>仅在未处于冷却时可激活。 <b>静电爆炸</b>会立刻消除<b>浑然不觉</b>状态。","name":"卡特的电火花","id":9,"index":"CARTERS_SPARK","owner":"DOCTOR","image":"iconPowers_cartersSpark"},{"description":"清醒的逃生者能听到<b>梦魇</b>的恐惧范围并能在16米的范围内看到他，或间歇性在16米到32米内看到他，除此之外无法看到他。<b>梦魇</b>会被动令逃生者在60秒的过程中入睡，入睡后他们会进入梦中世界。用<i>普通攻击</i>命中一名清醒的逃生者将使其进入梦中世界。<br><br>一旦进入梦中世界，逃生者将获得<b>浑然不觉</b>状态并会受到<b>梦中罗网</b>影响。逃生者醒来的途径：技能检验失败、找到一名清醒的逃生者执行<i>醒醒动作</i>或使用环境中的闹钟。连续执行<i>醒醒动作</i>时，下一次所花费的时间加倍。使用闹钟会使逃生者在30秒内免疫入睡。<br><br><b>特殊能力：梦中罗网</b><br>长按<i>力量键</i>可在梦魇前方的地面上放置一处<b>梦中罗网</b>。触动<b>梦中罗网</b>的逃生者将获得<b>减速</b>状态，处于陷阱当中及之后的一小段时间内速度减慢。<br><br>某些附加品可以使<b>梦中木板</b>替代<b>梦中罗网</b>。在梦中世界里，梦中木板会生成在板子的位置。它们会对<b>梦魇</b>高亮，并且无法击晕他。<br><br><b>梦中代币</b>：<br><b>梦魇</b>开局时有5枚梦中代币用于施放梦中罗网。所有代币耗尽后，施放新的梦中罗网时将摧毁最旧的一个。特殊能力：梦中木板<br><br><b>特殊能力：梦境投影</b><br>长按<i>主动能力键</i>施放一处梦境投影，可以查看一处发电机的情况。梦中世界里每有一名逃生者，梦境投影的冷却时间就缩短15%。","name":"梦魔","id":10,"index":"DREAM_DEMON","owner":"NIGHTMARE","image":"iconPowers_dreamMaster"},{"description":"永远追随着导师事业的她通过狡诈致命的谜题来惩罚不知感激的有罪者。<br><br><b>门徒</b>可以隐匿自己、发动伏击，还可以在逃生者头上安装下颚撕裂器。<br><br><b>竖锯的洗礼</b><br>开局时拥有<b>4</b>件<i>关闭</i>的下颚撕裂器。站在濒死状态的逃生者身前时，按<i>主动能力键</i>对逃生者放置<i>关闭</i>的下颚撕裂器。当有任意发电机被修理完毕后，下颚撕裂器将被<i>激活</i>。<br>逃生者可以搜索附近的竖锯盒子找到正确的钥匙，以此逃离<i>激活</i>或<i>关闭</i>的下颚撕裂器。<br><b>激活下颚撕裂器</b><br>下颚撕裂器被<i>激活</i>后，将出现倒计时。带着<i>激活</i>下颚撕裂器的逃生者如果在倒计时结束后或者试图带着<i>激活</i>下颚撕裂器逃脱都会被自动成为祭品。<br><br><b>特殊能力：隐匿</b><br>使用<i>主动能力键</i>切换隐匿模式。在隐匿模式下再次按<i>主动能力键</i>起身。<b>门徒</b>在隐匿时移动速度降低。<b>门徒</b>在隐匿时获得<b>无法侦测</b>状态。<br><br><b>特殊攻击：伏击</b><br>隐匿时长按<i>攻击键</i>可进行猛冲并发动一次<b>伏击</b>。<br><br><span class=\\"FlavorText\\">“把你身体的一切，每一点每一滴都交给我。你手臂上的痕迹来自你的另一段生命，我们把那一段生命抛在脑后。当你穿过那条走廊的时候你已经没有退路了。听明白了吗？” ——竖锯的洗礼</span>","name":"竖锯的洗礼","id":11,"index":"JIGSAWS_BAPTISM","owner":"PIG","image":"iconPowers_reverseBearTrap"},{"description":"多年来在进行麻醉药物和肌肉松弛药物实验过程中，小丑发明了几种有效的调制物和配方。他最喜欢利用自己最拿手的精炼毒酒，麻醉并俘获了很多不幸的受害者。相关联的精炼毒酒也具有相当实用的效果。<br><br>按下<i>主动能力键</i>在<b>精炼毒酒</b>和<b>精炼解药</b>之间切换。按下或按住<i>力量键</i>再放开可以扔出药瓶。<br><br>按住<i>主动能力键</i>将药瓶重新装满。<br><br><b>特殊能力：精炼毒酒</b><br>击中目标后，药瓶会打破，释放出一团紫色气体，令逃生者<b>中毒</b>。<b>中毒</b>的逃生者视觉会受损，移动速度降低，不自觉地咳嗽2秒钟。<br><br><b>特殊能力：精炼解药</b><br>击中目标后，药瓶会打破，释放出一团灰色气体，激活后会变成黄色。小丑和逃生者进入激活的<b>解药气体</b>中可获得10%的移动速度提升，持续5秒。<b>中毒</b>的逃生者进入<b>解药气体</b>后可以解毒。","name":"精炼毒酒","id":12,"index":"THE_AFTERPIECE_TONIC","owner":"CLOWN","image":"iconPowers_gasBomb"},{"description":"怨灵可以使用她的力量，山岡家族的作祟,来进入灵界，并在新的位置现身。<br><li>按住力量键进行充能。怨灵会离开自己的躯体，留下一具原地不动的“驱壳”。</li><br>当力量处于激活状态时:<li>怨灵可以在短时间内以较快的移速自如位移，但她的行动将仍然受到物理环境的限制。</li><li>怨灵在灵界时将无法看到逃生者的实体，但仍然可以感知到逃生者留在环境中的划痕（脚印）。</li><li>怨灵会在她当前所在的位置发出声响。</li><li>当力量耗尽时，移速加成会保留一小段时间，而她的驱壳则会消失。</li><br>每次使用力量都会消耗掉怨灵的灵能。但她的灵能会随时间自动补充。灵能条完全充满后才能再次使用山岡家族的作祟。","name":"山岡家族的作祟","id":13,"index":"YAMAOKAS_HAUNTING","owner":"SPIRIT","image":"iconPowers_yamaokasHaunting"},{"description":"他们曾是一群普通朋友，直到弗兰克把他们变成了军团。现在，他们从无恶不作、我行我素的自由中汲取自由。<br><br><b>野性狂暴</b><br>触发<b>野性狂暴</b>以高速奔跑并在多名逃生者之间进行连锁攻击。当力量槽全满时，按<i>力量键</i>发动<b>野性狂暴</b>。<b>野性狂暴</b>生效期间，<b>军团</b>移动速度加快且获得额外能力：<b>翻越木板</b>和<b>野性斩击</b>。<br><br><b>特殊能力：翻越木板</b><br>在<b>野性狂暴</b>生效期间按<i>互动键</i>可在掉落的木板处发动<b>翻越木板</b>。<br><br><b>特殊攻击：野性斩击</b><br>在<b>野性狂暴</b>生效期间按<i>攻击键可</i>发动<b>野性斩击</b>。用<b>野性斩击</b>命中逃生者可使其陷入受伤状态并施加<b>深度伤口</b>状态效果。军团的力量槽恢复全满，且杀手本能会显示出恐惧范围内的所有无<b>深度伤口</b>状态效果的逃生者。若逃生者已有<b>深度伤口</b>状态效果，则<b>野性狂暴</b>不产生任何效果并立刻结束。","name":"野性狂暴","id":14,"index":"FERAL_FRENZY","owner":"LEGION","image":"iconPowers_feralFrenzy"},{"description":"随着病情蔓延到她全身，她的身体状况越来越差：她的脚趾变黑，脖子长满囊肿，且常常呕出血来。<br><br><b>肮脏倾泻</b><br>用<b>肮脏倾泻</b>感染环境中的物件和逃生者，制造无止境的疾病循环。长按<i>力量键</i>为<b>肮脏倾泻</b>充能，松开按键可释放一股感染性胆汁。命中逃生者可将其感染。命中环境中的物件可将其感染，持续一小段时间。与被感染物件互动的逃生者也会被感染。<br><br>逃生者的感染指示器填满时，逃生者会陷入受伤状态，获得<b>不治</b>状态效果，并随时可能不受控制地呕吐。<br><br><b>特殊能力：吞咽腐化</b><br>受感染的逃生者可在<i>虔诚之池</i>清洗自身以完全恢复生命值并清除感染。此操作会腐化虔诚之池，让<b>瘟疫</b>能喝下腐化的池水以强化她的倾泻能力。在腐化的<i>虔诚之池</i>旁长按<i>互动键</i>可将<b>肮脏倾泻</b>变为<b>腐烂倾泻</b>。此操作会清除池水中的腐化。<br><br><b>特殊攻击：腐烂倾泻</b><br>使用<b>吞咽腐化</b>能力后，<b>肮脏倾泻</b>被<b>腐烂倾泻</b>取代，持续一小段时间。 <b>腐烂倾泻</b>立刻对命中的逃生者造成伤害，不过不再感染逃生者或环境中的物件。","name":"肮脏倾泻","id":15,"index":"VILE_PURGE","owner":"PLAGUE","image":"iconPowers_vilePurge"},{"description":"<b>鬼面</b>研究一名受害人数周，小心翼翼地记录其生活习惯。当杀戮的欲望无法克制时，他就知道下手的方式与地点。<br><br><b>夜幕</b><br>当力量槽全满时，按<i>力量键</i>启动<b>夜幕</b>。 <b>夜幕</b>生效期间，<b>鬼面</b>获得<b>无法侦测</b>状态。进行<i>基础攻击</i>会完全消耗力量槽并使<b>夜幕</b>失效。<br><b>发现</b><br>距离<b>鬼面</b>很近的逃生者向他的方向观察一段时间就会<i>发现</i>他。成功<i>发现</i>后会完全消耗<b>鬼面</b>的力量槽并使<b>夜幕</b>失效。成功<i>发现</i><b>鬼面</b>的逃生者所在位置将在极短时间内暴露给<i>杀手本能</i>。<br><br><b>特殊能力：潜行</b><br><b>夜幕</b>生效时长按<i>力量键</i>可以潜行跟踪逃生者。在掩体后方时长按<i>力量键</i>可以侧身探出并提升潜行速度。 对一名逃生者完成潜行后将<i>标记</i>该目标并对<i>标记者</i>一段时间内施加<b>危险</b>状态。<br><br><b>特殊能力：隐匿</b><br>使用主动能力键切换隐匿模式。在隐匿模式下再次按主动能力键起身。 隐匿状态下，<b>鬼面</b>移动速度减慢。<br><br><span class=\\"FlavorText\\">“别在意我。就这样，继续。棒极了。我会保留好你的这幅画面。”——鬼面</span>","name":"夜幕","id":16,"index":"NIGHT_SHROUD","owner":"GHOST","image":"iconPowers_ghostPower_available"},{"description":"来自异界的未知能量涌遍它的全身。 地面突然裂开，将魔王一口吞下。<br><br><b>来自深渊</b><br>长按<i>力量键</i>以完全充能并激活<b>来自深渊</b>。所有靠近激活传送门的的逃生者都会被杀手本能发现。<br><br><b>特殊攻击：撕碎</b><br>在充能或使用<b>来自深渊</b>时按下<i>攻击键</i>向前猛冲并发动一次凶狠的挥砍。<br><br><b>特殊能力：传送门</b><br>按下<i>主动能力键</i>可在你面前开启一道传送门。<br><b>穿越颠倒世界</b><br>站在一道传送门前时，高亮显示另一道传送门并再次按下<i>主动能力键</i>即可穿越颠倒世界到达目标传送门。<br><b>激活传送门</b><br>传送门首次被使用后即可被“激活”。仅激活的传送门才可被逃生者封印。激活的传送门气场以黄色高亮显示。","name":"来自深渊","id":17,"index":"OF_THE_ABYSS","owner":"DEMOGORGON","image":"iconPowers_ghostPower_available"},{"description":"对摧毁弱小血脉的渴望化为了致命的武力。<br><br><b>山岡之怒</b><br>吸收受伤敌人留下的鲜血之球。长按<i>力量键</i>可吸收周围的鲜血之球并为力量槽充能。当你的力量槽全满时，按住<i>主动能力键</i>发动<b>鲜血狂怒</b>。<br><b>鲜血狂怒：</b>\\n<b>鲜血狂怒</b>生效期间，<b>鬼武士</b>能一击致命并能使用额外能力：<b>恶魔冲刺</b>和<b>恶魔之击</b>。<br><br><b>特殊能力：恶魔冲刺</b><br><b>鲜血狂怒</b>生效期间，按住<i>力量键</i>可发动<b>恶魔冲刺</b>。<b>鬼武士</b>能用此能力进行快速长距离移动。<br><br><b>特殊攻击：恶魔之击</b><br><b>鲜血狂怒</b>生效期间，按住<i>攻击键</i>可对正前方发动<b>恶魔之击</b>。 <b>恶魔之击</b>范围更大，且成功命中逃生者时即可令其进入濒死状态。","name":"山岡之怒","id":18,"index":"YAMAOKAS_WRATH","owner":"ONI","image":"iconPowers_yamaokasWrath_demon"},{"description":"死亡枪手靠聪明才智制造出了一样独特的发明：经过大量改装的混合式步枪，此步枪发射的不是传统弹药，而是拴着链条的锋利矛弹。收集者用这把武器抓捕悬赏目标。<br><br><b>救赎者</b><br>长按<i>力量键</i>可举枪瞄准。点击<i>攻击键</i>可射出矛弹，矛弹会固定在逃生者身上，使<b>死亡枪手</b>能强行将其拖向自己。<br><b>收线：</b><br>逃生者被<b>救赎者</b>的矛弹刺中时，长按<i>力量键</i>可将其拖向你。逃生者可挣脱铁链或是利用环境给铁链施压，使其断裂。 成功挣脱会导致<b>死亡枪手</b>暂时晕眩，并使逃生者处于受伤状态，并施加<b>深度伤口</b>状态效果。在逃生者被刺中期间使用<i>普通攻击</i>可打断铁链，且<b>死亡枪手</b>和逃生者不会受到负面效果影响。用<i>普通攻击</i>成功命中被刺中的逃生者也会施加<b>深度伤口</b>状态效果。<br><b>上弹：</b><br><b>救赎者</b>每次射击后必须上弹才能再次射击。长按<i>主动能力键</i>可为<b>救赎者</b>上弹。","name":"救赎者","id":19,"index":"THE_REDEEMER","owner":"DEATHSLINGER","image":"iconPowers_UK"},{"description":"打开痛苦之门，接受审判吧！大砍刀将地面劈开，升起炼狱中的意象之物，向周围的人传播痛苦。<br><br><b>审判仪式</b><br>长按<i>力量键</i>激活。激活之后，朝任何方向移动都会在地面上形成一道路径。<br><br>在路径上行走或奔跑的逃生者会触发<i>杀手本能</i>，并受到<i>折磨</i>状态影响。受到<i>折磨</i>状态影响的逃生者进入濒死状态时，可以被送入<b>赎罪牢笼</b>。<br><br><b>特殊攻击：诅咒惩戒</b><br>当<b>审判仪式</b>生效时按<i>攻击键</i>即可发动<b>诅咒惩戒</b>。此攻击会释放一道冲击波，攻击范围内的所有逃生者。<br><br><b>特殊能力：赎罪牢笼</b><br>当站在一名受到<i>折磨</i>状态影响并处于濒死状态的逃生者身上时，可以按下<i>主动能力键</i>将其关入<b>赎罪牢笼</b>。身处<b>赎罪牢笼</b>中的逃生者和上钩时一样都可以被献祭。在召唤仪式的第二阶段时，他们将被迫进行技能检验来拖延恶灵。<br><br>逃生者被救出或将其他逃生者救出<b>赎罪牢笼</b>后，其<i>折磨</i>状态将结束。<br><br><b>特殊能力：最终审判</b><br>当站在一名被钩住或在囚笼内进入挣扎阶段、受到<i>折磨</i>状态影响并处于濒死状态的逃生者身上时，可以按下<i>主动能力键</i>将其处决。","name":"审判仪式","id":20,"index":"RITES_OF_JUDGMENT","owner":"EXECUTIONER","image":"iconPowers_Wales_ritesOfJudgement"},{"description":"脓疱血清通过他的血管流淌，腐蚀他的思想和身体，却也赋予了他某些超自然的身体能力。<br><br><b>特殊能力： 横冲</b><br>按<i>力量键</i>即可迅速向前<b>横冲</b>。这样做会消耗一枚<b>横冲</b>代币。 发动<b>横冲</b>时，枯萎者无法进行攻击。<br><br><b>横冲</b>到墙壁或环境障碍物时即可进行<b>直撞</b>。如果<b>横冲</b>没能命中墙壁或障碍物，或者枯萎者耗尽了<b>横冲</b>代币，他就会陷入短暂的疲惫状态中并开始恢复代币。<br><br><b>特殊攻击：致命横冲</b><br>在使用一次<b>直撞</b>后，按<i>力量键</i>即可发动<b>致命横冲</b>。这样做会消耗一枚<b>横冲</b>代币。<b>致命横冲</b>与<b>横冲</b>的表现相同，但是枯萎者可以在此期间按<i>攻击键</i>发动攻击。","name":"枯萎腐败","id":21,"index":"BLIGHTED_CORRUPTION","owner":"BLIGHT","image":"iconPowers_vilePurge"},{"description":"尽管永远被鲜血与创伤所束缚，但连体婴却被赋予力量，能够从相连的身体上分离。姐弟两人共同狩猎，能为逃生者带来成倍的威胁。<br><br><b>特殊能力：血之羁绊</b><br>长按<i>力量键</i>可以释放出<b>维克多</b>。点击<i>能力键</i>可以在<b>夏洛特</b>与<b>维克多</b>之间切换控制。<br><br>独自行动时，<b>维克多</b>会触发<b>杀手本能</b>，为<b>夏洛特</b>揭露他身边行走或奔跑的逃生者气场。逃生者听到<b>维克多</b>的尖叫时就会受到影响。不过，切换至控制<b>夏洛特</b>后，<b>维克多</b>就可以被逃生者击垮。<br><br>被击垮后，<b>维克多</b>会在一段时间后重新从<b>夏洛特</b>身上长出来。<br><br><b>特殊攻击：猛扑</b><br>控制<b>维克多</b>时，长按<i>能力键</i>可以进行<b>猛扑</b>蓄力，然后按下<i>攻击键</i>即可释放。<br><br>成功发动<b>猛扑</b>会对逃生者造成伤害，并使其掉落持有的道具。如果逃生者的生命值为满，<b>维克多</b>就会抓住对方，触发<b>杀手本能</b>来暴露附近逃生者的位置。逃生者被抓住时，会受到<b>不治</b>、<b>浑然不觉</b>以及<b>无法行动</b>状态影响。他们将无法进入储物柜或者通过逃生大门离开。逃生者被<b>维克多</b>抓住时，可以通过<b>移除</b>行动将其摆脱。<br><br>如果<b>维克多</b>的<b>猛扑</b>未能命中，他就会暂时陷入易伤状态并可被逃生者击垮。如果维克多落在高过自己的障碍物上，他将被摧毁。","name":"血之羁绊","id":22,"index":"BLOOD_BOND","owner":"TWINS","image":"iconPowers_bloodBond_01"},{"description":"<i>这是河知云毕生磨练出的惊艳技能，能快速投出一连串飞刀。</i><br><br><b>精彩表演</b><br><br>比赛开始时，携带<b>60把飞刀</b>。长按<i>力量键</i>进入或结束投掷状态。<br><br>处于投掷状态时，轻按<i>攻击键</i>投掷一把飞刀，或者长按<i>攻击键</i>投掷一连串飞刀。连续投掷会提升控制力和投掷速度，但移动速度会降低。储物柜可以恢复飞刀。<br><br><b>裂伤条：</b>逃生者的<b>裂伤条</b>在每次被飞刀命中时会增加。裂伤条积满后，逃生者会损失一层健康状态，从而受伤或倒下。<br><br>如果逃生者短时间内未被飞刀击中，其裂伤条会逐渐衰减。用普通攻击命中逃生者会立刻使其裂伤条衰减。<br><br><b>特殊能力：好戏登场</b><br>每次飞刀击中会积蓄<b>好戏登场条</b>。积满后，即可按下<i>能力键</i>激活<b>好戏登场</b>。在此模式下，骗术师会在<b>好戏登场</b>期间暂时释放其全部潜力。他持有的飞刀将变为无限，同时投掷速度大幅提高，移动速度也不会在投掷状态下降低。<b>好戏登场</b>可以通过轻按<i>能力键</i>取消。这样做会使<b>好戏登场条</b>重置为0，并使<b>精彩表演</b>开始进入冷却。","name":"精彩表演","id":23,"index":"SHOWSTOPPER","owner":"TRICKSTER","image":"iconPowers_Showstopper_01"},{"description":"这种病毒可以引发极端变异并感染给其他人。副作用包括更强的进攻性与身体素质。<br><br><b>特殊攻击：触手攻击</b><br>长按力量键可蓄力攻击。蓄力之后，按下攻击键即可释放<b>触手攻击</b>。使用<b>触手攻击</b>命中逃生者会使其受到<b>污染</b>状态影响并提升你的<b>变异等级</b>。如果逃生者已被<b>污染</b>，<b>触手攻击</b>则会使其损失生命值。<br><br>逃生者可以使用在<b>补给箱</b>内找到的<b>疫苗</b>治疗自身或其他人的<b>污染</b>状态。<b>疫苗</b>的数量有限。使用<b>疫苗</b>后，逃生者的位置会被杀手本能发现。<br><br><b>变异等级：</b>你的力量会随着<b>变异等级</b>提升而增长。在<b>变异等级2</b>时，<b>触手攻击</b>的范围将提升。在<b>变异等级3</b>时，<b>触手攻击</b>能够摧毁板子或可破坏墙壁。T 病毒图标显示了当前的<b>变异等级</b>。<br><br><b>特殊敌人：丧尸</b><br><b>丧尸</b>攻击逃生者时，会使其受到<b>污染</b>状态影响。如果逃生者已被<b>污染</b>，则其生命值会受到损伤。<br><br>可以通过<b>触手攻击</b>消灭<b>丧尸</b>以提升你的<b>变异等级</b>，同时逃生者也可以利用板子消灭丧尸。被消灭的<b>丧尸</b>会在短时间后重生。","name":"T 病毒","id":24,"index":"T_VIRUS","owner":"NEMESIS","image":"iconPowers_T-virus1"}]');

/***/ }),

/***/ "./src/data.compiled/locales/zh/sharedOfferings.json":
/*!***********************************************************!*\
  !*** ./src/data.compiled/locales/zh/sharedOfferings.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"本场游戏所有玩家的所有得分项得到<b>100%</b>额外的血点奖励。<br><li>效果可以被叠加。</li>","name":"血腥派对饰带","flavor":"“让人回想起人们最初聚集在一起在的时候，最后却以尖叫声收尾。”","id":1,"index":"BLOODY_PARTY_STREAMERS","rarity":2,"image":"iconFavors_bloodyPartyStreamers"},{"description":"<b>轻微散去</b>黑雾。<br><li>效果可以被叠加。</li>","name":"清雾试剂","flavor":"“黑雾滚滚袭来，将一切困入恶灵疯狂的深渊之中。被困在里面的人，无路可走、无所遁形，亦无处可避，只有森林池塘的一处隐蔽清泉可以救其脱离困境。”——无名者，笔记","id":2,"index":"CLEAR_REAGENT","rarity":0,"image":"iconFavors_clearReagent"},{"description":"<b>小幅增厚</b>黑雾。<br><li>效果可以被叠加</li>","name":"眩晕试剂","flavor":"“我在寒风凛冽中如死尸一般无法动弹。”","id":3,"index":"FAINT_REAGENT","rarity":0,"image":"iconFavors_faintReagent"},{"description":"<b>中幅增厚</b>黑雾。<br><li>效果可以被叠加。</li>","name":"厚雾试剂","flavor":"“黑雾狷狂魅惑，让人恍惚间心醉神迷。我对之倾心，但也不乏敬畏。”——当娜的速写簿","id":4,"index":"HAZY_REAGENT","rarity":1,"image":"iconFavors_hazyReagent"},{"description":"<b>大幅增厚</b>黑雾。<br><li>效果可以被叠加。</li>","name":"超强厚雾试剂","flavor":"“黑雾看起来可以保护我们免遭恶魔的侵扰，但是它剧毒无比，如同恶性肿瘤一般蔓延迅速，让我们阴郁和癫狂。”——无名者，笔记","id":5,"index":"MURKY_REAGENT","rarity":3,"image":"iconFavors_murkyReagent"},{"description":"召唤恶灵，获得<b>最晦暗的月光</b>。","name":"新月花束 ","flavor":"“今夜无月光，回家好安枕。”","id":6,"index":"NEW_MOON_BOUQUET","rarity":4,"image":"iconFavors_newMoonBouquet"},{"description":"召唤恶灵，获得<b>晦暗的月光</b>。","name":"蛾眉月花束","flavor":"“月华散尽，仿佛在微笑吟说：‘别担心，我会为你保密的。’又或者，它真的是在微笑吗？”","id":7,"index":"CRESCENT_MOON_BOUQUET","rarity":1,"image":"iconFavors_crecentMoonBouquet"},{"description":"召唤恶灵，获得<b>更明亮的月光</b>。","name":"弦月花束","flavor":"“晦月挽起了面纱，目光垂落在猎物上。”","id":8,"index":"QUARTER_MOON_BOUQUET","rarity":1,"image":"iconFavors_quarterMoonBouquet"},{"description":"召唤恶灵，获得<b>最明亮的月光</b>。","name":"满月花束","flavor":"“月亮升起，鬼哭狼嚎，开启了猎杀的序幕。”","id":9,"index":"FULL_MOON_BOUQUET","rarity":3,"image":"iconFavors_fullMoonBouquet"},{"description":"燃烧这件祭品后将<b>小幅增加</b>被送往迈克米伦庄园的几率。<br><li>效果可以被叠加。</li>","name":"迈克米伦的账本残页","flavor":"“一页发白的账本残页，上面除了迈克米伦庄园的印记，其它信息都难以辨析。”","id":10,"index":"MACMILLAN_LEDGER_PAGE","rarity":0,"image":"iconFavors_macmillianLedgerPage"},{"description":"燃烧这件祭品后将<b>大幅增加</b>被送往迈克米伦庄园的几率。<br><li>效果可以被叠加。</li>","name":"带签名的账本残页","flavor":"“一页发白的账本残页记载了和采矿设备有关的内容，以及其它的交易记录。残页上显示着阿奇·迈克米伦本人的部分签名。”","id":11,"index":"SIGNED_LEDGER_PAGE","rarity":1,"image":"iconFavors_signedLedgerPage"},{"description":"燃烧这件祭品后将<b>巨幅增加</b>被送往迈克米伦庄园的几率。<br><li>效果可以被叠加。</li>","name":"迈克米伦的趾骨 ","flavor":"“迈克米伦的骸骨在矿厂仓库的地下室被发现。他的左腿腿骨被砸成了碎片，大腿腿骨上放着一把矿锤。”","id":12,"index":"MACMILLANS_PHALANX_BONE","rarity":2,"image":"iconFavors_macmilliansPhalanxBone"},{"description":"燃烧这件祭品后将<b>小幅增加</b>被送往废旧车库的几率。<br><li>效果可以被叠加。</li>","name":"残破车牌","flavor":"“来自弗吉尼亚州的金属车牌，遍布锈迹，弯折破旧。”","id":13,"index":"SHREDDED_PLATE","rarity":0,"image":"iconFavors_plateShredded"},{"description":"<b>大幅增加</b>燃烧这件祭品后被送往废旧车库的几率。<br><li>效果可以被叠加。</li>","name":"弗吉尼亚州车牌","flavor":"“一个来自弗吉尼亚州生锈的弯折车牌。”","id":14,"index":"VIRGINIA_PLATE","rarity":1,"image":"iconFavors_plateVirginia"},{"description":"燃烧这件祭品后将<b>巨幅增加</b>被送往废旧车库的几率。<br><li>效果可以被叠加。</li>","name":"阿扎罗夫钥匙","flavor":"“来自某未知品牌车的破损钥匙，附带的钥匙链显示其车主名字为A·阿扎诺夫。”","id":15,"index":"AZAROVS_KEY","rarity":2,"image":"iconFavors_azarovsKey"},{"description":"燃烧这件祭品后将<b>小幅增加</b>被送往寒风农场的几率。<br><li>效果可以被叠加。</li>","name":"牲畜标签-28","flavor":"“沾有血迹的牲口标签，上面标有数字‘28’。”","id":16,"index":"CATTLE_TAG_TWENTY_EIGHT","rarity":0,"image":"iconFavors_cattleTag28"},{"description":"燃烧这件祭品后将<b>大幅增加</b>被送往寒风农场的几率。<br><li>效果可以被叠加。</li>","name":"寒风农场牲畜标签-81","flavor":"“沾有血迹的牲口标签，上面印着‘寒风农场’的标记和数字‘81’。”","id":17,"index":"CATTLE_TAG_EIGHTY_ONE","rarity":1,"image":"iconFavors_cattleTag81"},{"description":"燃烧这件祭品后将<b>巨幅增加</b>被送往寒风农场的几率。<br><li>效果可以被叠加。</li>","name":"心形坠盒","flavor":"“带银质心形匣子的项链，匣子里简单刻着：‘E+M’。”","id":18,"index":"HEART_LOCKET","rarity":2,"image":"iconFavors_heartLocket"},{"description":"点燃该券以<b>小幅增加</b>被送往克洛普瑞恩疯人院的几率。<br><li>效果可以被叠加。</li>","name":"疯狂之券","flavor":"“一张泛黄、磨损且严重褪色的票券，写着完全无法看清楚的信息。”","id":19,"index":"LUNACY_TICKET","rarity":0,"image":"iconFavors_lunacyTicket"},{"description":"燃烧这件祭品以在<b>大幅增加</b>可被送至克洛普瑞恩疯人院的几率。<br><li>效果可以被叠加。</li>","name":"P.埃利奥特的疯狂之券","flavor":"“一张粉红色的票券，上面写着菲利普·埃利奥特被转移到克洛普瑞恩疯人院的信息。”","id":20,"index":"P_ELLIOT_LUNACY_TICKET","rarity":1,"image":"iconFavors_pElliottLunacyTicket"},{"description":"<b>最大程度地增加</b>可被送至克洛普瑞恩疯人院的几率。","name":"烧焦的婚纱照","flavor":"“这是一幅烧焦的新婚夫妇的画像，但他们的面容已经完全无法辨认了。”","id":21,"index":"CHARRED_WEDDING_PHOTOGRAPH","rarity":2,"image":"iconFavors_charredWeddingPhotograph"},{"description":"燃烧这件祭品将<b>小幅增加</b>被送往哈登菲尔德的几率。<br><li>效果可以被叠加。</li>","name":"丰收节传单","flavor":"“一张褪色的宣传单，描绘了78年哈登菲尔德丰收节，一颗卡通形象的大南瓜被醒目地画在了正面。”","id":22,"index":"HARVEST_FESTIVAL_LEAFLET","rarity":0,"image":"iconFavors_harvestFestivalLeaflet"},{"description":"燃烧这件祭品将<b>大幅增加</b>被送往哈登菲尔德的几率。<br><li>效果可以被叠加。</li>","name":"老旧护墙板","flavor":"“一块发了霉又腐烂的老旧橡木护墙板，就像绝大多数哈登菲尔德的老房子里可以找到的一样。”","id":23,"index":"DECREPIT_CLAPBOARD","rarity":1,"image":"iconFavors_decrepitClapboard"},{"description":"燃烧这件祭品将<b>巨幅增加</b>被送往哈登菲尔德的几率。","name":"斯特罗德宅邸钥匙","flavor":"“一个外观普普通通的房门钥匙，纸签上写着‘斯特罗德地产’，然后是一串手写的地址：‘兰普金街45号’。”","id":24,"index":"STRODE_REALTY_KEY","rarity":2,"image":"iconFavors_strodeRealtyKey"},{"description":"燃烧这件祭品后将<b>小幅增加</b>被送往黑水沼泽重生的几率。<br><li>效果可以被叠加。</li>","name":"冒烟的绳子","flavor":"“曾燃烧的一根水手麻绳仍然冒着暖烟。”","id":25,"index":"FUMING_CORDAGE","rarity":0,"image":"iconFavors_fumingCordage"},{"description":"燃烧这件祭品后将<b>大幅增加</b>被送往黑水沼泽重生的几率。<br><li>效果可以被叠加。</li>","name":"冒烟的欢迎符号","flavor":"“水洗柏树木板上一个表示欢迎的记号。燃烧的标记还在冒烟。”","id":26,"index":"FUMING_WELCOME_SIGN","rarity":1,"image":"iconFavors_fumingWelcomeSign"},{"description":"燃烧这件祭品后将<b>巨幅增加</b>被送往黑水沼泽重生的几率。","name":"老奶奶的烹饪书","flavor":"“皮革包裹的恐怖人肉食谱，比如老奶奶炒辣椒。”","id":27,"index":"GRANDMAS_COOKBOOK","rarity":2,"image":"iconFavors_granmasCookbook"},{"description":"<b>小幅增加</b>燃烧这件祭品后被送往莱理疗养中心的几率。<br><li>效果可叠加。</li>","name":"急救证书","flavor":"“一张泛黄的入院证明副本，强制隔离患者进行紧急治疗。上面的文字因为被污渍覆盖已无法阅读。”","id":28,"index":"EMERGENCY_CERTIFICATE","rarity":0,"image":"iconFavors_emergencyCertificate"},{"description":"<b>大幅增加</b>燃烧这件祭品后被送往莱理疗养中心的几率。<br><li>效果可叠加。</li>","name":"精神病评估报告","flavor":"“一份由赫曼·卡特签署的心理评估报告。描述了患者记忆力下降的症状以及下一步推荐疗程。”","id":29,"index":"PSYCHIATRIC_ASSESSMENT_REPORT","rarity":1,"image":"iconFavors_psychiatricAssessmentReport"},{"description":"燃烧这件祭品后将<b>巨幅增加</b>被送往莱理疗养中心的几率。","name":"破碎眼镜","flavor":"“扭曲的老花镜。破碎的镜片上还沾着斑驳血迹。”","id":30,"index":"SHATTERED_GLASSES","rarity":2,"image":"iconFavors_shatteredGlasses"},{"description":"<b>小幅增加</b>被送往红树林地图的几率。<br><li>效果可以被叠加。</li>","name":"涂鸦鹅卵石","flavor":"“经过水流的冲刷变得光滑柔亮的石头。被人用红色、黑色和白色颜料在上面画上了一只熊的图案。”","id":31,"index":"PAINTED_RIVER_ROCK","rarity":0,"image":"iconFavors_paintedRiverRock"},{"description":"<b>大幅增加</b>被送往红树林地图的几率。<br><li>效果可以被叠加。</li>","name":"少儿读物","flavor":"“一本古老破旧的故事书，大部分内容已在时间的消磨中损坏丢失。”","id":32,"index":"CHILDRENS_BOOK","rarity":1,"image":"iconFavors_childrensBook"},{"description":"<b>巨幅增加</b>被送往红树林地图的几率。","name":"仅存的面具","flavor":"“一个制作精美的虎脸面具，尺寸适合儿童佩戴。面具背面可看到模糊不清的用西里尔字母写下的笔记。”","id":33,"index":"THE_LAST_MASK","rarity":2,"image":"iconFavors_theLastMask"},{"description":"巨幅增加被送往春木镇的几率。","name":"魔笛手","flavor":"“被小镇背叛后，他开始了他的复仇计划，带走所有镇上的孩子。”","id":34,"index":"THE_PIED_PIPER","rarity":2,"image":"iconFavors_thePiedPiper"},{"description":"燃烧这件祭品，可以在游戏中保护你免遭附加品的损失。","name":"黑护幅","flavor":"“听吾之声，护吾路途平安，佑吾免遭虚无之侵蚀。”","id":36,"index":"BLACK_WARD","rarity":3,"image":"iconFavors_wardBlack"},{"description":"燃烧这件祭品，可以让你免遭道具和附加品的损失。","name":"白护卫","flavor":"\\\\“护吾免遭邪灵侵扰，佑吾周全，而后退去。\\\\”","id":37,"index":"WHITE_WARD","rarity":3,"image":"iconFavors_wardWhite"},{"description":"燃烧这件祭品后将<b>巨幅增加</b>被送往山岡家族地产的几率。","name":"山岡家族纹章","flavor":"“你永远无法离开这破碎的家。你只能不停地逃离，直到回忆不再折磨你。”","id":38,"index":"YAMAOKA_FAMILY_CREST","rarity":2,"image":"iconFavors_yamaokasCrest"},{"description":"召唤恶灵以拒绝所有祭品被送至特定领域的几率。<br>仅当有四件相同的区域祭品被使用时，此效果才会被取消。","name":"祭祀房间","flavor":"“在盲目的双眼下，我们将放弃我们的意志，并服从您的指引。”","id":39,"index":"SACRIFICIAL_WARD","rarity":2,"image":"iconFavors_wardSacrificial"},{"description":"<b>巨幅增加</b>燃烧后被送往米德维奇小学的几率。","name":"玛丽的信","flavor":"“在我无休止的噩梦中，我总能看到那座镇子。”","id":40,"index":"MARYS_LETTER","rarity":2,"image":"iconFavors_marysLetter"},{"description":"燃烧这件祭品后将<b>巨幅增加</b>被送往吉迪恩肉制品加工厂的几率。","name":"拼图块","flavor":"“祝贺你。你还活着。大多数人都不会感激自己活着。但从现在起，你会。”","id":41,"index":"JIGSAW_PIECE","rarity":2,"image":"iconFavors_jigsawPiece"},{"description":"点燃该券将<b>巨幅增加</b>被送往霍金斯国家实验室的几率。","name":"霍金斯国家实验室身份识别卡 ","flavor":"“一张染血的潮湿身份识别卡，上面有一串编号。”","id":42,"index":"HAWKINS_NATIONAL_LABORATORY_ID","rarity":2,"image":"iconFavors_hawkinsNationalLaboratoryID"},{"description":"燃烧后<b>巨幅增加</b>被送往格伦威尔墓地重生的几率。","name":"布满灰尘的绳套","flavor":"“随你打听，在这个乌烟瘴气的地方苟活的人们会让你明白——上吊的绳套乃是解脱。”","id":43,"index":"DUSTY_NOOSE","rarity":2,"image":"iconFavors_dustyNoose"},{"description":"让你的胃里翻江倒海的神奇蛋糕，以此庆祝我们的三周年。所有玩家在本场游戏的所有得分项得到<b>103%</b>额外的血点奖励。<br><li>可叠加</li>","name":"恐怖蛋糕","flavor":"“周年快乐！欢迎各位一同庆祝我们的三周年！”<br>——《黎明杀机》团队","id":44,"index":"GRUESOME_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"},{"description":"一个华丽又吓人的蛋糕，用来纪念我们一起度过的四年时光。美味程度比恐怖蛋糕高1%。所有玩家在本场游戏的所有得分项得到<b>104%</b>额外的血点奖励。<br><li>可叠加</li>","name":"惊骇蛋糕","flavor":"“周年快乐！祝我们年年有今日！”<br>——《黎明杀机》团队","id":45,"index":"GHASTLY_GATEAU","rarity":5,"image":"iconFavors_gruesomeGateau"}]');

/***/ }),

/***/ "./src/data.compiled/locales/zh/survivorAddons.json":
/*!**********************************************************!*\
  !*** ./src/data.compiled/locales/zh/survivorAddons.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"一块完美的薄透镜。使用这块透镜可以扩大手电筒的光束尺寸，但会降低其有效照射范围。<br><li><b>中幅加宽</b>手电筒光束大小。</li><li><b>小幅降低</b>手电筒有效照射范围。</li>","name":"光束放大镜","id":1,"index":"WIDE_LENS","type":1,"rarity":0,"image":"iconAddon_wideLens"},{"description":"一个小小的手电筒灯泡，可增加手电筒功率和光照强度。<br><li><b>小幅收紧</b>手电筒的光照半径。</li><li><b>小幅增加</b>手电筒光照强度。</li><li><b>小幅延长</b>障目的持续时间。</li>","name":"灯泡","flavor":"“就算是最强的光线，也无法穿透黑雾的昏暗。”","id":2,"index":"POWER_BULB","type":1,"rarity":0,"image":"iconAddon_powerBulb"},{"description":"包裹在手电筒之外的皮革长条，可增加把控力。<br><li><b>小幅增加</b>手电筒光照的精准度。</li>","name":"皮电筒套","flavor":"“手心出汗，死期将至。”","id":3,"index":"LEATHER_GRIP","type":1,"rarity":0,"image":"iconAddon_leatherGrip"},{"description":"一款不知品牌的标准电池。 <br><li>在使用标准手电筒时，添加<b>2秒</b>使用时间。</li>","name":"电池","flavor":"“基本算是另一个废电池。”","id":4,"index":"BATTERY","type":1,"rarity":0,"image":"iconAddon_battery"},{"description":"透镜和反射器的双重组合可以扩增手电筒的光束强度。<br><li><b>中幅增加</b>手电筒的光照亮度。</li><li><b>中幅延长</b>障目的持续时间。</li>","name":"全内反射灯杯","flavor":"\\"借助手电筒的光亮灼射，让他们在暗影中无所遁形。\\"","id":5,"index":"TIR_OPTIC","type":1,"rarity":1,"image":"iconAddon_tirOptic"},{"description":"专门包裹在手电筒之外的橡胶套，可增加把控力。<br><li><b>中幅增加</b>手电筒光照的精准度。</li>","name":"橡胶电筒套","id":6,"index":"RUBBER_GRIP","type":1,"rarity":1,"image":"iconAddon_rubberGrip"},{"description":"专用于延长手电筒电池寿命的灯泡。<br><li><b>中幅降低</b>手电筒电池的消耗。</li>","name":"低耗能灯丝","id":7,"index":"LOW_AMP_FILAMENT","type":1,"rarity":1,"image":"iconAddon_threadedFilament"},{"description":"标记了“工业强度”的电池。<br><li>在使用标准手电筒时，添加<b>4秒</b>的使用时间。</li>","name":"高效能电池","flavor":"“广告上号称可以连续使用8小时的电池，在黑雾中只能持续区区数秒钟而已。”","id":8,"index":"HEAVY_DUTY_BATTERY","type":1,"rarity":1,"image":"iconAddon_heavyDutyBattery"},{"description":"一块厚厚的聚焦镜，将手电筒的光束聚焦，提高它的光照强度。<br><li><b>小幅增加</b>手电筒光束的照射范围。</li><li><b>小幅收紧</b>手电筒的光照半径。</li><li><b>小幅增加</b>手电筒光照强度。</li><li><b>小幅延长</b>障目的持续时间。</li>","name":"聚焦镜","id":9,"index":"FOCUS_LENS","type":1,"rarity":1,"image":"iconAddon_focusLens"},{"description":"最新型号的电池，使用时间长。<br><li>在使用标准手电筒时，添加<b>6秒</b>的使用时间。</li>","name":"长效使用电池","id":10,"index":"LONG_LIFE_BATTERY","type":1,"rarity":2,"image":"iconAddon_longLifeBattery"},{"description":"化学灯泡，可产生强烈的亮光。<br><li><b>大幅增加</b>手电筒的光照亮度。</li><li><b>大幅增加</b>致盲效果的持续时间。</li>","name":"高强度卤素灯泡","id":11,"index":"INTENSE_HALOGEN","type":1,"rarity":2,"image":"iconAddon_intenseHalogen"},{"description":"防刮伤蓝宝石水晶宽透镜，可优化光照的强度和范围。<br><li><b>中幅加宽</b>手电筒的光束范围。</li><li><b>小幅增加</b>手电筒的光照强度。</li><li><b>中幅增加</b>手电筒的光照亮度。</li><li><b>中幅增加</b>致盲效果的持续时间。</li>","name":"高端蓝水晶透镜","id":12,"index":"HIGH_END_SAPPHIRE_LENS","type":1,"rarity":3,"image":"iconAddon_highEndSapphireLens"},{"description":"一个完全不透明的厚重灯泡，来源未知，即使关闭电源后仍然可以发出微弱的灯光。<br><li><b>巨幅增加</b>手电筒的光照亮度。</li><li><b>巨幅延长</b>障目的持续时间。</li><li><b>小幅增加</b>手电筒的电池消耗。</li>","name":"怪异灯泡","id":13,"index":"ODD_BULB","type":1,"rarity":4,"image":"iconAddon_oddBulb"},{"description":"编织紧密的绳子，主要用于祈祷仪式。可附加于钥匙上。<br><li>添加 <b>10 秒</b>的钥匙使用时间</li>","name":"祈祷绳索","flavor":"“尽情祈祷吧，你的每一个诉求正慢慢消逝在雾中。”","id":14,"index":"PRAYER_ROPE","type":2,"rarity":0,"image":"iconAddon_prayerRope"},{"description":"千疮百孔的白色珍珠，上面的小扣环可以让珍珠挂在钥匙上。<br><li><b>中幅增加</b>钥匙的气场解读能力范围。</li>","name":"划痕珍珠","id":15,"index":"SCRATCHED_PEARL","type":2,"rarity":1,"image":"iconAddon_scratchedPearl"},{"description":"一串大小不一的哑光念珠，主要用于祈祷祭礼。可附加于钥匙上。<br><li>添加<b>15 秒</b>的钥匙使用时间。</li>","name":"念珠","id":16,"index":"PRAYER_BEADS","type":2,"rarity":1,"image":"iconAddon_prayerBeads"},{"description":"一枚磨损严重的青铜代币。即便上面以前刻有铭文或图案，如今早已完全消失了。可以通过扣环附加于钥匙之上，以便引导钥匙的气场解读能力。<br><li>显示<b>逃生者的气场</b> （在<b>24米</b>范围内）。</li>","name":"残破硬币","id":17,"index":"ERODED_TOKEN","type":2,"rarity":1,"image":"iconAddon_tokenErroded"},{"description":"一枚其貌不扬的金币。金币的两面十分光滑，没有任何的文字。可以通过扣环附加于钥匙之上，以便引导钥匙的气场解读能力。<br><li>在<b>48米</b>范围内显示<b>逃生者的气场</b>。</li><li>效果可以被叠加。</li>","name":"金币","id":18,"index":"GOLD_TOKEN","type":2,"rarity":2,"image":"iconAddon_tokenGold"},{"description":"一个看似普通的钥匙环，透着超乎寻常的浅蓝色暗光。此钥匙环可让钥匙和其使用者形影不离，即使是在最严峻的处境下，也可避免其遗失。<br><li>如果死亡，不会丢失钥匙，但是会失去这个附加品。</li>","name":"手编钥匙环","id":19,"index":"WEAVED_RING","type":2,"rarity":3,"image":"iconAddon_weavedRing"},{"description":"这枚不透明的玻璃会发出沉闷的振动声。当使用钥匙开地道时，这枚玻璃可以保护钥匙免遭损毁，并将迷雾的能量导入玻璃中。<br><li>开地道时不会丢失钥匙，但是会失去这个附加品。</li>","name":"乳白色玻璃","id":20,"index":"MILKY_GLASS","type":2,"rarity":3,"image":"iconAddon_milkyGlass"},{"description":"一块带有黑色纹理的血红色琥珀，具有温热的触摸感，可通过扣环附加于钥匙上，以便引导钥匙的气场解读能力。<br><li>在<b>32米</b>范围内显示<b>杀手的气场</b>，但需要消耗<b>大量</b>的钥匙能量。</li>","name":"血琥珀","id":21,"index":"BLOOD_AMBER","type":2,"rarity":3,"image":"iconAddon_bloodAmber"},{"description":"一块粗纤维材质的残片，上面绘制了一张残破而发白的地图，本身毫无用处。<br><li>为任何一张地图添加<b>5秒</b>钟的使用时间。</li>","name":"地图补遗","id":22,"index":"MAP_ADDENDUM","type":3,"rarity":0,"image":"iconAddon_mapAddendum"},{"description":"两接头都严重损坏的小电线，好像曾被人强行从原来的接线处扯下。可以连接到地图，然后加强地图的气场解读能力。<br><li>解锁追踪<b>出口大门</b>的追踪能力。</li>","name":"黄色电线","id":23,"index":"YELLOW_WIRE","type":3,"rarity":1,"image":"iconAddon_ropeYellow"},{"description":"一个格状橡胶印的木印章，其所有者和使用历史不得而知。此印章可用作地图的附加品。<br><li><b>中幅增加</b>地图追踪能力的范围。</li>","name":"不寻常的印记","id":24,"index":"UNUSUAL_STAMP","type":3,"rarity":1,"image":"iconAddon_stampUnusual"},{"description":"粘稠的半透明物质，隐隐透着可怖的紫蓝色光影。这款不知来源的凝胶高度耐热。<br><li><b>适度降低</b>地图的燃速。</li>","name":"舒缓凝胶","id":25,"index":"RETARDANT_JELLY","type":3,"rarity":1,"image":"iconAddon_retardantJelly"},{"description":"一条扎手的深红色粗麻绳。可系于地图上，来增强它的气场 解读能力。<br><li>解锁追踪<b>杀手物品</b>的能力。</li>","name":"红色麻绳","id":26,"index":"RED_TWINE","type":3,"rarity":1,"image":"iconAddon_ropeRed"},{"description":"一个镶有金圈的奇特玻璃珠，可用来当作看地图的放大镜，或者标注特定位置。玻璃珠可以释放一种只有逃生者才能感受到和看到的能量。<br><li>在辅助动作上解锁标记能力。</li><li>创建一个所有逃生者都能看见的标记。</li>","name":"玻璃珠","id":27,"index":"GLASS_BEAD","type":3,"rarity":1,"image":"iconAddon_beadGlass"},{"description":"一个用坚硬金黄色木头雕刻而成的印章。印章底部的字迹实在令人费解：“kw\'zvre\'od”。此印章可用作地图的附加品。<br><li><b>大幅增加</b>地图追踪能力的范围。</li>","name":"奇怪的印记","id":28,"index":"ODD_STAMP","type":3,"rarity":2,"image":"iconAddon_stampOdd"},{"description":"一条看似柔软的光滑黑绳。 可以连接到地图，然后加强地图的气场解读能力。<br><li>解锁追踪<b>地道</b>的能力。</li>","name":"黑色丝线绳","id":29,"index":"BLACK_SILK_CORD","type":3,"rarity":2,"image":"iconAddon_ropeBlack"},{"description":"设计无比复杂的仪器中的一套精密透镜。仪器里的机关可以自动调控透镜的焦距，以便发现人类肉眼无法看见的东西。<br><li>当其所有者启动这一仪器时，每一个逃生者都可以看到地图所生成的气场。</li>","name":"水晶球","id":30,"index":"CRYSTAL_BEAD","type":3,"rarity":3,"image":"iconAddon_beadCrystal"},{"description":"一次性医用手套，可避免交叉感染。<br><li><b>中幅提升</b>完成完美的技能检验进度奖励。</li>","name":"橡胶手套","id":31,"index":"RUBBER_GLOVES","type":4,"rarity":0,"image":"iconAddon_gloves"},{"description":"医疗胶布，可以用来愈合小伤口。<br><li><b>小幅增加</b>治疗速度。</li>","name":"蝴蝶胶带","id":32,"index":"BUTTERFLY_TAPE","type":4,"rarity":0,"image":"iconAddon_butterflyTape"},{"description":"急救箱中常备的一包绷带。<br><li>增加<b>8</b>医药箱耐久度。</li>","name":"绷带","id":33,"index":"BANDAGES","type":4,"rarity":0,"image":"iconAddon_bandages"},{"description":"一块普通的海绵，可用来擦拭多余的血液，方便检查伤口。<br><li><b>大幅提升</b>完成完美的技能检验进度奖励。</li>","name":"海绵","id":34,"index":"SPONGE","type":4,"rarity":1,"image":"iconAddon_sponge"},{"description":"一卷具备粘黏性的绷带，不用固定夹就可以快速贴合伤口，也无需重复调整。<br><li>增加<b>8</b>医药箱耐久度。</li><li><b>小幅增加</b>治疗速度。</li>","name":"自粘型绷带","id":35,"index":"SELF_ADHERENT_WRAP","type":4,"rarity":1,"image":"iconAddon_selfAdherentWrap"},{"description":"并非专业的医疗器具，但可以用于快速缝合伤口，过程较痛苦。<br><li><b>中幅增加</b>技能检验出现的几率。</li><li>完美的技能检验获得<b>100%额外血点</b>。</li><li><b>小幅增加</b>治疗速度。</li>","name":"缝合用针线","id":36,"index":"NEEDLE_AND_THREAD","type":4,"rarity":1,"image":"iconAddon_needAndThread"},{"description":"专为方便裁剪布料而设计的剪刀。<br><li><b>中幅增加</b>治疗速度。</li>","name":"医用剪刀","id":37,"index":"MEDICAL_SCISSORS","type":4,"rarity":1,"image":"iconAddon_scissors"},{"description":"消毒纱布，可用于包扎各种伤口。是整个疗伤系统中不可或缺的一部分。<br><li>增加医药箱<b>12 耐久度</b>。</li>","name":"纱布卷","id":38,"index":"GAUZE_ROLL","type":4,"rarity":1,"image":"iconAddon_gauseRoll"},{"description":"用于缝合和稳固身体组织的医疗器具。虽然高效，但使用起来仍然挑战重重。<br><li><b>大幅增加</b>技能检验出现的几率。</li><li>完成完美的技能检验后获得<b>150%血点奖励</b>。</li><li><b>小幅增加</b>疗愈速度</li>。","name":"外科用缝合工具","id":39,"index":"SURGICAL_SUTURE","type":4,"rarity":2,"image":"iconAddon_surgicalSuture"},{"description":"一包凝胶状创口贴，用于包扎重度化脓性伤口。<br><li>增加<b>16</b>医药箱</li>耐久度。","name":"凝胶创口贴","id":40,"index":"GEL_DRESSINGS","type":4,"rarity":2,"image":"iconAddon_gelDressings"},{"description":"吸收度较高的创口贴，可用于大面积的腹部伤口，避免血液和体液渗漏。<br><li><b>大幅增加</b>疗愈速度。</li><li><b>耐久度减少</b><b>8</b>。</li>","name":"腹部创口贴","id":41,"index":"ABDOMINAL_DRESSING","type":4,"rarity":2,"image":"iconAddon_abdominalDressing"},{"description":"具有凝血功能的白色粉末。在伤口上撒一些这样的粉末可以止血。<br><li>使用医疗箱治疗时按<i>辅助动作</i>键可使用止血剂。</li><li>对受伤的逃生者使用<i>止血剂</i>将使其获得<b>坚忍</b>状态，持续<b>8秒</b>。<li>使用后消耗医疗箱。</li>","name":"止血剂","id":42,"index":"STYPTIC_AGENT","type":4,"rarity":3,"image":"iconAddon_stypticAgent"},{"description":"一种抗出血物质，可在几秒钟内停止出血。<br><li>使用医疗箱或止血注射器治疗时按<i>辅助动作键</i>。</li><li>使用<b>16</b>秒后受影响的逃生者可暂时获得一层健康状态。</li><li>需要的时间受到<i>治疗速度</i>相关技能与祭品影响。</li><li>受影响的逃生者改变健康状态或被拉起后，此状态取消。</li><li>使用后消耗医疗箱。</li>","name":"止血注射器","id":43,"index":"ANTI_HEMORRHAGIC_SYRINGE","type":4,"rarity":4,"image":"iconAddon_syringe"},{"description":"夹住软管或电线的有用工具，可避免受到伤害。<br><li>减小修理发出的噪音，使其传播范围缩小8米。</li>","name":"弹簧夹","id":44,"index":"SPRING_CLAMP","type":5,"rarity":0,"image":"iconAddon_springClamp"},{"description":"弹簧、螺丝和齿轮等废旧零件，其中大部分都是不可用的垃圾。<br><li>增加<b>8</b>点工具箱耐久度。</li>","name":"废旧零件","id":45,"index":"SCRAPS","type":5,"rarity":0,"image":"iconAddon_scraps"},{"description":"一块普通的破布。干净得让人难以置信。<br><li><b>小幅增加</b>工具箱的修理速度。</li>","name":"干净破布","id":46,"index":"CLEAN_RAG","type":5,"rarity":0,"image":"iconAddon_cleanRag"},{"description":"一卷厚重的手提式铜线圈。<br><li>增加<b>12</b>点工具箱耐久度。</li>","name":"电线卷","id":47,"index":"WIRE_SPOOL","type":5,"rarity":1,"image":"iconAddon_spoolOfWire"},{"description":"机械设备中的转轴，为那些无法触及的螺栓提供弯曲和灵活度。<br><li><b>中幅增加</b>工具箱的修理速度。</li>","name":"转轴","id":48,"index":"SOCKET_SWIVELS","type":5,"rarity":1,"image":"iconAddon_socketSwivels"},{"description":"厚手套会降低使用灵活度，但是可以保护双手不受到伤害。<br><li>用工具箱破坏钩子时，杀手不会得到提示。</li>","name":"保护性手套","id":49,"index":"PROTECTIVE_GLOVES","type":5,"rarity":1,"image":"iconAddon_protectiveGloves"},{"description":"有人在这块树皮上快速地标记了修理说明。<br><li>用工具箱修理时不会出现技能检验。</li>","name":"修理说明","id":50,"index":"INSTRUCTIONS","type":5,"rarity":1,"image":"iconAddon_instructions"},{"description":"一个手把坚固的可调节钳，是所有工具箱里的必备之物。<br><li>用工具箱破坏过的钩子恢复时间延长15秒。</li>","name":"扳手","id":51,"index":"GRIP_WRENCH","type":5,"rarity":1,"image":"iconAddon_gripWrench"},{"description":"锯齿状的金属丝和两块木手柄制成的基本切割工具。<br><li><b>小幅增加</b>工具箱的破坏速度。</li>","name":"切割线","id":52,"index":"CUTTING_WIRE","type":5,"rarity":1,"image":"iconAddon_cuttingWire"},{"description":"一个带金属切割锯齿的小手锯。<br><li><b>中幅增加</b>工具箱的破坏速度。</li>","name":"钢锯","id":53,"index":"HACKSAW","type":5,"rarity":2,"image":"iconAddon_metalSaw"},{"description":"这个结构复杂的机械零件，看起来与周围的环境格格不入。它干净得闪闪发光，就像是刚从工厂里直接拿出来的一样。<br><li><b>工具箱修理</b>动作被替换为<b>安装全新机械零件</b>动作。</li><li>安装<i>全新机械零件</i>会在<b>5秒</b>内自动完成一台发电机<b>15%</b>的修理进度。</li><li>在安装期间，会出现<b>2次高难度技能检验</b>。</li><li>每成功完成一个会增加<b>5%修理进度</b>，上限<b>25%</b>。</li><li><i>使用后该附加品会被消耗掉。</i></li>","name":"全新机械零件","id":54,"index":"BRAND_NEW_PART","type":5,"rarity":4,"image":"iconAddon_brandNewPart"},{"description":"从迷雾中出现的雕文婚戒，里面蕴藏着难以描述和理解的能量。<li>揭示血祭品的气场。</li><li>降低你成为杀手血祭品的几率。</li><li>可叠加</li>","name":"独特的婚戒","id":55,"index":"UNIQUE_WEDDING_RING","type":2,"rarity":3,"image":"iconAddon_uniqueRing"}]');

/***/ }),

/***/ "./src/data.compiled/locales/zh/survivorOfferings.json":
/*!*************************************************************!*\
  !*** ./src/data.compiled/locales/zh/survivorOfferings.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"在“目标”得分项中奖励<b>50%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"苔地月桂香包","flavor":"“手工缝制的香包，大概手掌大小，里面装了一堆干叶子，散发出微弱的茶香。”","id":50,"index":"BOG_LAUREL_SACHET","rarity":0,"image":"iconFavors_bogLaurelSachet"},{"description":"在“目标”得分项中奖励<b>75%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"新鲜苔地月桂","flavor":"“唯美的紫色花朵，在一片污泥的沼泽中独自盛开，散发出淡淡的茶香。”","id":51,"index":"FRESH_BOG_LAUREL","rarity":1,"image":"iconFavors_freshBogLaurel"},{"description":"在“目标”得分项中奖励<b>100%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"芳香苔地月桂","flavor":"“唯美紫色花朵，在一片污泥的沼泽中独自盛开，散发出浓烈的茶香。”","id":52,"index":"FRAGRANT_BOG_LAUREL","rarity":2,"image":"iconFavors_fragrantBogLaurel"},{"description":"在“逃生”得分项中奖励<b>50%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"不凋花香包","flavor":"“手工缝制的香包，大概手掌大小，里面装了一堆像珠子一般的种子，不凋花的香味据说会经久不散。”","id":53,"index":"CRISPLEAF_AMARANTH_SACHET","rarity":0,"image":"iconFavors_crispleafAmaranthSachet"},{"description":"在“逃生”得分项中奖励<b>75%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"新鲜不凋花","flavor":"“淡绿色的叶子上历历可见古怪的深红色脉络。不凋花的香味据说会经久不散。”","id":54,"index":"FRESH_CRISPLEAF_AMARANTH","rarity":1,"image":"iconFavors_freshCrispleafAmaranth"},{"description":"在“逃生”得分项中奖励<b>100%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"芳香不凋花","flavor":"“淡绿色的叶子上点缀着古怪的深红色脉络，散发出浓烈的萝卜香味。”","id":55,"index":"FRAGRANT_CRISPLEAF_AMARANTH","rarity":2,"image":"iconFavors_fragrantCrispleafAmaranth"},{"description":"在“援助”得分项中奖励<b>50%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"报春花香包","flavor":"“手工缝制的香包，大概手掌大小，里面装了四片金色花瓣。在阳光散去、黑夜降临前的最后一刻，报春花的花朵绚丽绽放。”","id":56,"index":"PRIMROSE_BLOSSOM_SACHET","rarity":0,"image":"iconFavors_primroseBlossomSachet"},{"description":"在“援助”得分项中奖励<b>75%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"新鲜报春花","flavor":"“在开得最灿烂的时候所采集的金色花朵。阳光散去、黑夜降临前的最后一刻，报春花的花朵绚丽绽放。”","id":57,"index":"FRESH_PRIMROSE_BLOSSOM","rarity":1,"image":"iconFavors_freshPrimroseBlossom"},{"description":"在“援助”得分项中奖励<b>100%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"芳香报春花","flavor":"\\"金色的花朵，在其绽放得最绚烂的时候采摘，散发强烈的大地芳香，沁人心脾。”","id":58,"index":"FRAGRANT_PRIMROSE_BLOSSOM","rarity":2,"image":"iconFavors_fragrantPrimroseBlossom"},{"description":"在“无惧”得分项中奖励<b>50%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"西洋石竹香包","flavor":"“手工缝制的香包，大概手掌大小，里面装了一堆白色的花瓣和蓝绿色叶子，散发出强烈的丁香味芳香。”","id":59,"index":"SWEET_WILLIAM_SACHET","rarity":0,"image":"iconFavors_sweetWilliamSachet"},{"description":"在“无惧”得分项中奖励<b>75%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"新鲜西洋石竹","flavor":"“一束带有粉色花瓣和血红色花蕊的花朵，散发出强烈的丁香味芳香。”","id":60,"index":"FRESH_SWEET_WILLIAM","rarity":1,"image":"iconFavors_freshSweetWilliam"},{"description":"在“无惧”得分项中奖励<b>100%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"新鲜西洋石竹","flavor":"“一束带有粉色花瓣和血红色花蕊的花朵，散发出强烈的丁香味芳香。”","id":61,"index":"FRAGRANT_SWEET_WILLIAM","rarity":2,"image":"iconFavors_fragrantSweetWilliam"},{"description":"赋予<b>25%</b><b>所有</b>类别的奖励血点给逃生者。<br><li>效果可以被叠加。</li>","name":"封住的信封","flavor":"“打开的信封被重新封印，上面粘着4个结子。”","id":62,"index":"BOUND_ENVELOPE","rarity":2,"image":"iconFavors_boundEnvelope"},{"description":"在每个得分项中奖励<b>25%</b>的血点。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"密封的信封","flavor":"“一个没有姓名地址且没有开封的信封，随着岁月的流逝而发黄。里面的秘密永远不得而知。”","id":63,"index":"SEALED_ENVELOPE","rarity":1,"image":"iconFavors_sealedEnvelope"},{"description":"本场游戏的所有得分项得到<b>100%</b>额外的血点奖励。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"出口！蛋糕","flavor":"“这蛋糕当然是真实存在的。”","id":64,"index":"ESCAPE_CAKE","rarity":1,"image":"iconFavors_escapeCake"},{"description":"<b>小幅增加</b>运气。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"粉笔灰袋","flavor":"“一个小棉织袋，里面装了来历不明的白色粉笔灰。某些人相信它会带来好运。”","id":65,"index":"CHALK_POUCH","rarity":0,"image":"iconFavors_chalkPouch"},{"description":"<b>中幅增加</b><b>所有</b>逃生者的运气。<br><li>效果可以被叠加。</li>","name":"奶油色粉笔灰袋","flavor":"“女子跪呈礼物的雕像，黑盐制成，易碎。有人相信它可以带来好运。”","id":66,"index":"CREAM_CHALK_POUCH","rarity":1,"image":"iconFavors_creamChalkPouch"},{"description":"<b>大幅增加</b>运气。<br><li>个人。</li><li>效果可以被叠加。</li>","name":"象牙粉笔袋","flavor":"“一个小皮袋子，侧边有一条手工缝制的白色直线。里面装满了象牙色粉笔灰，在月光下闪闪发光。有人相信它可以带来好运。”","id":67,"index":"IVORY_CHALK_POUCH","rarity":2,"image":"iconFavors_ivoryChalkPouch"},{"description":"<b>小幅增加</b><b>所有</b>逃生者的运气。<br><li>效果可以被叠加。</li>","name":"盐袋","flavor":"“一个棉布袋，里面装了黑色的盐晶。有人相信这会带来好运，别漏出来了。”","id":68,"index":"SALT_POUCH","rarity":1,"image":"iconFavors_saltPouch"},{"description":"<b>大幅增加</b><b>所有</b>逃生者的运气。<br><li>效果可以被叠加。</li>","name":"威戈的盐唇罐子","flavor":"“紧紧关闭的玻璃罐子，昏暗的浓盐水中浮动着破碎的人类嘴唇。有些人相信它会带来好运。”","id":69,"index":"VIGOS_JAR_OF_SALTY_LIPS","rarity":3,"image":"iconFavors_jarOfSaltyLips"},{"description":"求助恶灵，多制造<b>1个</b>箱子。<br><li>效果可以被叠加。</li>","name":"晦暗硬币","flavor":"“一块已经磨损得没有光泽的金属硬币。”","id":70,"index":"TARNISHED_COIN","rarity":1,"image":"iconFavors_tarnishedCoin"},{"description":"召唤恶灵，使其造出<b>2</b>个箱子。<br><li>效果可以被叠加。</li>","name":"闪亮的硬币","flavor":"“一块干净且打磨过的金子。”","id":71,"index":"SHINY_COIN","rarity":3,"image":"iconFavors_shinyCoin"},{"description":"稳住恶灵并<b>稍微减少</b>出现献祭钩的<b>密度</b>。<br><li>可叠加。</li>","name":"石化橡木","flavor":"“一块腐化的石化木。”","id":72,"index":"PETRIFIED_OAK","rarity":3,"image":"iconFavors_petrifiedOak"},{"description":"你和他人一起开始游戏。<br><li>保密类祭品。</li>","name":"联合裹尸布","flavor":"“一块打结的布料。”","id":73,"index":"SHROUD_OF_UNION","rarity":1,"image":"iconFavors_shroudOfUnion"},{"description":"所有的逃生者进入游戏时位置集中。<br><li>保密类祭品。</li>","name":"捆绑裹尸布","flavor":"“四角扎了小结的褪色方形布料。”","id":74,"index":"SHROUD_OF_BINDING","rarity":3,"image":"iconFavors_shroudOfBinding"},{"description":"你开始游戏时，位置尽量远离杀手。<br><li>保密类祭品。</li>","name":"威戈的裹尸布","flavor":"“这些年来，我在迷雾里见证过很多的奇迹，但直到现在，我才明白如何违拗迷雾这不可撼动的铁则。”——威戈的日记","id":75,"index":"VIGOS_SHROUD","rarity":1,"image":"iconFavors_vigosShroud"}]');

/***/ }),

/***/ "./src/data.compiled/locales/zh/survivorPerks.json":
/*!*********************************************************!*\
  !*** ./src/data.compiled/locales/zh/survivorPerks.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"解锁气场解读能力。每当一台发电机被修好时，杀手的气场会向你暴露<span class=\\"Highlight1\\">{0}秒</span>。<br>当最后一台发电机通电时，杀手的气场会向你暴露<span class=\\"Highlight2\\">{1}秒</span>。","name":"暗黑觉知","flavor":"听老人皇的话：慢慢走，别莽撞，也不要太担心！知己知彼，方能百战百胜。”——遗失的录音带：默夫","id":100,"index":"DARK_SENSE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_darkSense","tiers":[[5,5],[5,7],[5,10]]},{"description":"解锁气场解读能力。<br><span class=\\"Highlight1\\">{0}</span>台相互距离最近的发电机会向你显现气场<span class=\\"Highlight2\\">{1}秒</span>。<br>当你使用追踪发电机气场的地图道具时<i>该</i>技能获得的发电机位置会被记录。","name":"似曾相识","id":101,"index":"DEJA_VU","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_dejaVu","tiers":[[3,30],[3,45],[3,60]]},{"description":"成功逃脱的可能性越来越大，充满希望并给你插上翅膀。一旦逃生大门通电，你将获得<span class=\\"Highlight1\\">{0}%</span> <b><i>急速</i></b>状态效果，持续<span class=\\"Highlight3\\">{1}秒</span>。<br>","name":"希冀之翼","flavor":"“扣上，他妈的！勇往直前！”——遗失的磁带：尼基","id":102,"index":"HOPE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_hope","tiers":[[5,120],[6,120],[7,120]]},{"description":"解锁气场解读能力。当你上钩之后，所有逃生者的气场将会被互相感知。如果杀手在<span class=\\"Highlight1\\">{0}米</span>范围内，杀手的气场会对其他所有逃生者显示。<br><br>如果有其他任何逃生者上钩，所有其他逃生者的气场都会对你显示。如果杀手在上钩逃生者的<span class=\\"Highlight1\\">{0}米</span>范围内，杀手的气场会对你显示。","name":"同族","flavor":"“善待彼此，我们便是一家人。”——失落的唱片：舒杨","id":103,"index":"KINDRED","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_kindred","tiers":[[8,8],[12,12],[16,16]]},{"description":"你的脚步轻盈柔软，让杀手很难察觉你的踪迹。脚印显示时间比平时减少<span class=\\"Highlight1\\">{0}秒</span>。","name":"轻如鸿毛","flavor":"\\"别着急，他知道你待过哪……就像我一直说的：生活节奏慢，才能死的晚。”——遗失的录音带：迪伦","id":104,"index":"LIGHTWEIGHT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_lightweight","tiers":[[1],[2],[3]]},{"description":"绝不放弃任何一个队友。当出口大门开始打开时，你获得如下状态：<br><li>治疗与解救其他逃生者会获得<span class=\\"Highlight1\\">{0}%</span>额外血点。</li><li>治疗与解救其他逃生者的行动速度加快<span class=\\"Highlight2\\">{1}%</span>。</li><li>其他所有逃生者的气场将对你显示。</li>","name":"同生共死","flavor":"“……哈哈，废话少说。不过我相信对方道高一尺，我们也可以魔高一丈，只要我们齐心协力。别让人知道你的算盘，也别只顾自己！”——遗失的磁带：克莱德","id":105,"index":"NO_ONE_LEFT_BEHIND","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_noOneLeftBehind","tiers":[[50,30],[75,40],[100,50]]},{"description":"解锁气场解读能力。显示周围<span class=\\"Highlight1\\">{0}米</span>范围内未开启的箱子与物品气场。<b>中幅</b>增加你从箱子中获得更高稀有度道具的几率。","name":"强盗直觉","flavor":"“先驱者们曾经会花上数个小时来收集这些宝贝们。”——遗失的录音带：Aizeyu","id":106,"index":"PLUNDERERS_INSTINCT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_plunderersInstinct","tiers":[[16],[24],[32]]},{"description":"你拥有极强大的感知危险的能力。当杀手出现在你的<span class=\\"Highlight1\\">45度</span>视角内并在你的<span class=\\"Highlight2\\">{0}米</span>范围内时，你会听到一声警示的声音。每次启动\\"不祥预感\\"需要<span class=\\"Highlight3\\">{1}秒</span>的冷却时间。","name":"不祥预感","flavor":"\\"我突然有一种不祥的预感！\\"","id":107,"index":"PREMONITION","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_premonition","tiers":[[36,60],[36,45],[36,30]]},{"description":"极端情境激发了你的雄心壮志。当你受伤时，额外增加<span class=\\"Highlight1\\">{0}%</span>的修理、破坏、治疗、解救队友、翻越、清除图腾、打开逃生门以及解锁箱子的速度。","name":"百折不挠","flavor":"“就算是在绝望的时刻，也要集中精神奋力一搏。”","id":108,"index":"RESILIENCE","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_resilience","tiers":[[3],[6],[9]]},{"description":"你有办法有效挣脱钩子。<br><li>当你试图挣脱钩子时，获得最多<span class=\\"Highlight1\\">{0}</span>次额外的机会。</li><li>当你试图挣脱钩子时，增加<span class=\\"Highlight2\\">{1}%</span>的挣脱几率。</li>","name":"逃之夭夭","id":109,"index":"SLIPPERY_MEAT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_slipperyMeat","tiers":[[3,2],[3,3],[3,4]]},{"description":"你拥有感知危险的毋庸置疑的能力。当图腾出现在你的<span class=\\"Highlight1\\">45度</span>扇形区域<span class=\\"Highlight2\\">{0}米</span>范围内时，你会听到警示声。每次启动狩猎经验都会触发<span class=\\"Highlight3\\">{1}秒</span>的冷却时间。玩家每破坏一处灰暗图腾或厄咒图腾，获得一枚印记。每有一枚印记，狩猎经验的侦测扇形范围减少<span class=\\"Highlight4\\">5度</span>。","name":"狩猎经验","flavor":"“想都别想。”——遗失的录音带：安迪","id":110,"index":"SMALL_GAME","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_smallGame","tiers":[[8,15],[10,12],[12,10]]},{"description":"当厄运将至时，你会感到一阵不自然的刺痛。当身处距离你<span class=\\"Highlight1\\">{0}米</span>范围内的杀手看着你所在的方向时，你会得到提示。当毛骨悚然生效时，技能检验触发几率提高<span class=\\"Highlight2\\">{1}%</span>，成功区域缩小<span class=\\"Highlight3\\">{2}%</span>。毛骨悚然生效时，你的修理、治疗、破坏、解救、翻越、清除、打开逃生大门和解锁的速度提高<span class=\\"Highlight4\\">{3}%</span>。","name":"毛骨悚然","flavor":"“仔细聆听那无言的声音。仔细听。”——遗失的录音带：萨西","id":111,"index":"SPINE_CHILL","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_spineChill","tiers":[[36,10,10,2],[36,10,10,4],[36,10,10,6]]},{"description":"你在压力爆棚的时候能够发挥出最高水准。当你受伤时，修理或治疗的完美技能检验区域扩大<span class=\\"Highlight1\\">{0}%</span>。","name":"难以置信","id":112,"index":"THIS_IS_NOT_HAPPENING","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_thisIsNotHappening","tiers":[[10],[20],[30]]},{"description":"帮助他人可以鼓舞你方的士气。<br><br>你从钩子上每救下一个逃生者，增加<span class=\\"Highlight1\\">{0}%</span>治疗他人的速度，效果持续<span class=\\"Highlight3\\">{1}秒。</span>累计的治疗速度加成不会超过100%。","name":"马到功成","flavor":"\\\\“我相信，只要我们相互协助，一定可以全身而退。\\\\”","id":113,"index":"WELL_MAKE_IT","rarity":[1,2,3],"owner":"NOONE","image":"iconPerks_wellMakeIt","tiers":[[100,30],[100,60],[100,90]]},{"description":"解锁个人气场解读能力的潜力。同伴在 <span class=\\"Highlight1\\">{0}米</span>范围内时，他们的气场就会在你眼前显现。","name":"携手合作","flavor":"“我们必须展开团队合作，只有你们活着，我才有幸存下来的机会。”——德怀特","id":114,"index":"BOND","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_bond","tiers":[[20],[28],[36]]},{"description":"使 <span class=\\"Highlight2\\">{1}米</span>范围内正在修理发电机的逃生者修理速度增加<span class=\\"Highlight1\\">{0}%</span>。该效果同样适用于范围内的所有逃生者。<br>合作行动血点增加<span class=\\"Highlight3\\">{2}%</span>。<br>逃生者每次只能受到一个证明自己效果的影响","name":"证明自己","flavor":"“让我看看你有多厉害！”——德怀特","id":115,"index":"PROVE_THYSELF","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_proveThyself","tiers":[[4,15,50],[4,15,75],[4,15,100]]},{"description":"你可以组织一个合作效率更高的团队。当其他逃生者在距离你<span class=\\"Highlight1\\">{1}米</span>范围内时，他们的治疗，破坏，脱钩，清洁，打开出口门以及箱子解锁速度增加<span class=\\"Highlight2\\">{0}%</span> 。<br>逃生者一次只能受到一次领导效果影响。在离开领导技能的有效额外范围后，<br>此效果在其他逃生者身上持续 <span class=\\"Highlight3\\">{2}秒</span>。","name":"领袖群雄","id":116,"index":"LEADER","rarity":[1,2,3],"owner":"DWIGHT_FAIRFIELD","image":"iconPerks_leader","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"当你快速跨越障碍或者藏入柜子里的时候，你不会像其他人那样发出很多声响。<br><br>跨越和隐藏的声响觉察范围缩小<span class=\\"Highlight1\\">{0}%</span>。<br><br>技能效果每<span class=\\"Highlight2\\">{1}秒</span>只能触发一次。","name":"急速静谧","id":117,"index":"QUICK_AND_QUIET","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_quickAndQuiet","tiers":[[100,30],[100,60],[100,90]]},{"description":"开始奔跑时，以正常跑速的<span class=\\"Highlight1\\">{0}%</span>的速度进行冲刺，持续<span class=\\"Highlight2\\">{1}秒</span>。<br>触发<i>疲劳状态</i>并持续<span class=\\"Highlight4\\">{2}秒</span>。<br>当你处于<i>疲劳状态</i>不能使用<i>该技能</i>。<br>在跑步时不可从<i>疲劳状态</i>恢复。","name":"冲刺爆发","id":118,"index":"SPRINT_BURST","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_sprintBurst","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"在马上就要成功逃脱时，你得到了一股未知的能量帮助。<span class=\\"Highlight1\\">当逃生大门通电时，<b>瞬间从濒死恢复至受伤，或从受伤恢复至健康状态</b></span>，并以正常跑速的<span class=\\"Highlight2\\">{0}%</span>的速度进行冲刺，持续<span class=\\"Highlight3\\">{1}秒</span>。若逃生大门打开时你无法行动，肾上腺素技能会在你被解救后立刻生效。<br><i>如果你处于梦境中，肾上腺素</i>会在激活时<b>唤醒</b>你。<br><i>肾上腺素</i>无视<i>疲劳状态</i>，但会触发<i>疲劳状态</i>，并持续<span class=\\"Highlight4\\">{2}秒</span>。<br>跑步时不会从<i>疲劳状态</i>中恢复。","name":"肾上腺素","id":119,"index":"ADRENALINE","rarity":[1,2,3],"owner":"MEG_THOMAS","image":"iconPerks_adrenaline","tiers":[[150,5,60],[150,5,50],[150,5,40]]},{"description":"解锁个人气场解读能力的潜力。<span class=\\"Highlight1\\">{0}米</span>范围内，濒死或受伤同伴的气场会显示出来。当同伴和杀手进行直接接触时，“心灵共鸣”技能不能显现他们的气场。","name":"心灵共鸣","id":120,"index":"EMPATHY","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_empathy","tiers":[[64],[96],[128]]},{"description":"你将在篝火附近找到的植物制成止血酊剂。<b>治疗速度</b>和<b>治疗道具的效率</b>增加<span class=\\"Highlight1\\">{0}%</span>。<br>","name":"精研百草","flavor":"“了解一些草药的常识，某一天或许可以救命。”","id":121,"index":"BOTANY_KNOWLEDGE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_botanyKnowledge","tiers":[[11],[22],[33]]},{"description":"解锁不用消耗治疗道具即可治疗自己的能力。治疗速度为正常速度的<span class=\\"Highlight1\\">{0}%</span>。 用治疗道具自我治疗时效率提高<span class=\\"Highlight3\\">{1}%</span>。","name":"自我疗愈","id":122,"index":"SELF_CARE","rarity":[1,2,3],"owner":"CLAUDETTE_MOREL","image":"iconPerks_selfCare","tiers":[[50,10],[50,15],[50,20]]},{"description":"你可以集中精神进入冥想状态来减轻一部分痛苦。因受伤引起的痛苦呻吟减少<span class=\\"Highlight1\\">{0}%</span>。","name":"钢铁意志","id":123,"index":"IRON_WILL","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_ironWill","tiers":[[50],[75],[100]]},{"description":"动物们看似很信任你，因为即使你在旁边它们也不会因为惊吓而逃跑。降低<span class=\\"Highlight1\\">{0}%</span>惊扰林地生物的几率。<br>安抚生灵能让你克服惊叫的冲动。","name":"安抚生灵","id":124,"index":"CALM_SPIRIT","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_calmSpirit","tiers":[[80],[90],[100]]},{"description":"解锁气场解读能力。<br><li>若有逃生者被搬运，则能看到逃生者被扛起地点<span class=\\"Highlight1\\">56米</span>范围内钩子的气场。</li><br>解锁不用工具箱即可破坏钩子的能力。<br><li>不用工具箱破坏钩子需要<span class=\\"Highlight2\\">2.5秒</span>。</li><li>破坏动作拥有<span class=\\"Highlight3\\">{0}秒的</span>冷却时间</li>。","name":"破坏手","id":125,"index":"SABOTEUR","rarity":[1,2,3],"owner":"JAKE_PARK","image":"iconPerks_saboteur","tiers":[[90],[75],[60]]},{"description":"你无与伦比的敏捷。<br><br>猫一般的条件反射能减少<span class=\\"Highlight1\\">{0}%</span>你从高处落地后的减速效果并降低<span class=\\"Highlight1\\">100%</span>落地后的叫声。开始奔跑时，以正常跑速的<span class=\\"Highlight2\\">{1}%</span>进行冲刺，持续<span class=\\"Highlight3\\">{2}秒</span>。<br><br>触发<b>疲劳</b>状态并持续<span class=\\"Highlight4\\">{3}秒</span>。<br><br><i>冲刺爆发</i>不能在<b>疲劳状态</b>时使用。<br><br>在跑步时不会从<b>疲劳状态</b>中恢复。<br>","name":"平稳着陆","flavor":"“比这还高的地方我都跳过。” ——尼娅","id":126,"index":"BALANCED_LANDING","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_balancedLanding","tiers":[[75,150,3,60],[75,150,3,50],[75,150,3,40]]},{"description":"多年来躲避条子的经验让你或多或少地学会了如何隐匿。你蹲下时的移动速度将提升<span class=\\"Highlight1\\">{0}%</span>。","name":"暴走族","flavor":"“漆还没干，而我早已溜远～” ——妮娅","id":127,"index":"URBAN_EVASION","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_urbanEvasion","tiers":[[90],[95],[100]]},{"description":"漫长的黑夜能够教会你用自己所掌握的一切来做许多事。你和你的同伴在<span class=\\"Highlight2\\">{1}米</span>范围内时，物品消耗量会减少 <span class=\\"Highlight1\\">{0}%</span>。一旦超出范围，该效果仍可持续<span class=\\"Highlight4\\">{2}秒。</span><br>","name":"街头范儿","flavor":"“你搞错了！我来让你瞧瞧应该是怎么做的。”——妮娅","id":128,"index":"STREETWISE","rarity":[1,2,3],"owner":"NEA_KARLSSON","image":"iconPerks_streetwise","tiers":[[15,8,15],[20,8,15],[25,8,15]]},{"description":"解锁气场解读能力。<br>如果你是最后一名活着的逃生者，则你能看到<span class=\\"Highlight1\\">{0}</span>米范围内地道的气场。","name":"末日残兵","flavor":"\\"我可不是在闹着玩。我要独自完成任务！\\"——比尔","id":129,"index":"LEFT_BEHIND","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_leftBehind","tiers":[[24],[28],[32]]},{"description":"从钩子上营救自己的同伴令你的精神意外的振奋。<br>被你解救的逃生者在<span class=\\"Highlight1\\">{0}秒</span>内获得<b>坚忍</b>状态。<br>","name":"时不我待","flavor":"“可能会疼得要死，但不会要你的命。站起来继续战斗，士兵。该出发了！”——比尔·奥弗贝克","id":130,"index":"BORROWED_TIME","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_borrowedTime","tiers":[[10],[12],[15]]},{"description":"过去的战斗教会你生存的技巧。<br>获得从频死状态完全自我恢复的能力。<b>每场游戏限用一次</b>。提高<span class=\\"Highlight1\\">{0}%</span>在濒死状态的恢复速度。","name":"坚不可摧","flavor":"“可恶,我感觉糟透了！” -比尔","id":131,"index":"UNBREAKABLE","rarity":[1,2,3],"owner":"WILLIAM_OVERBECK","image":"iconPerks_unbreakable","tiers":[[25],[30],[35]]},{"description":"总有几个朋友值得你去奋力相救。<br>治疗其他濒死逃生者时，你的治疗速度提升<span class=\\"Highlight1\\">100%。</span><br>每次执行下列动作时获得一枚印记：<li>执行一次安全解救上钩逃生者</li><li>为保护逃生者遭受一次攻击</li><li>用板子击晕杀手来援救一名逃生者</li><li>用手电筒致盲杀手来援救一名逃生者</li>每枚印记会对获得的血点提供<span class=\\"Highlight2\\">25%</span>加成，最高可累积至<span class=\\"Highlight3\\">{1}%</span>。额外奖励的血点只会在结算后获得。","name":"生死与共","flavor":"“站起来，兄弟！这点小事算个屁。”——大卫·金","id":132,"index":"WERE_GONNA_LIVE_FOREVER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_WereGonnaLiveForever","tiers":[[50],[75],[100]]},{"description":"可激活的技能。<br>你很耐打。当你处于受伤状态时，激活你体内的肾上腺素，并获得短暂的免伤冲刺效果。<br><li>在跑步时按下<i>能力激活键</i>来进行冲刺。</li><li>在冲刺时，你不会受到伤害。</li><li>但会触发<i>疲劳状态</i>，并持续<span class=\\"Highlight4\\">{0}秒</span>。<br>在跑步时你不会从<i>疲劳状态</i>中恢复。</li>","name":"钢筋铁骨","flavor":"“那天晚上我跟兄弟们走在小巷里，突然身边飞来几个酒瓶。我心想“看来有人想搞事情，好戏上演咯。”我发誓，那场乱斗刺激爆了！” ——大卫·金","id":133,"index":"DEAD_HARD","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_DeadHard","tiers":[[60],[50],[40]]},{"description":"你受到<span class=\\"Highlight1\\">不治</span>状态效果的影响，直到游戏结束。<br>你黏稠的血液几乎瞬间就会凝固。<li>你不会留下血洼。</li><li>任何时候你因受伤而发出的哀嚎声降低<span class=\\"Highlight2\\">{0}%</span>。</li><li>获得自行从濒死状态完全恢复的能力。</li>","name":"不痛不痒","flavor":"“可恶，就是揍了那小子一顿，他们就把我踢出圈子了。后来我去酒吧喝了几大杯，就不再发愁了。老子不痛不痒，没那闲工夫纠缠。”——大卫·金","id":134,"index":"NO_MITHER","rarity":[1,2,3],"owner":"DAVID_KING","image":"iconPerks_NoMither","tiers":[[0],[25],[50]]},{"description":"随着越来越多的同伴被杀手杀害，你被孤独的阴霾包围住，杀手对你的<b>气场解读能力</b>被破坏了。<br>每有一名逃生者被杀死或献祭，获得一枚印记。每有一枚印记，你的气场将根据每位被<b>击杀</b>或<b>献祭</b>的逃生者而无法在最多<span class=\\"Highlight1\\">{0}米</span>内被杀手看到。<br><li><i>增加你成为血祭品的几率。</i></li><li><i>每场游戏只会出现一名<b>血祭品</b>。</i></li>","name":"最后的生还者","flavor":"“他就是个恶魔。”——劳丽·斯特罗德","id":135,"index":"SOLE_SURVIVOR","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_soleSurvivor","tiers":[[20],[22],[24]]},{"description":"你与杀手之间建立起了一条难以名状的链接。<br><br>当你的气场暴露给杀手时，杀手的气场也会对你可见，同时你将获得<span class=\\"Highlight1\\">{0}%</span>的治疗、修理与破坏速度加成。<br>如果你是血祭品，你的气场将每<span class=\\"Highlight3\\">30秒</span>向杀手暴露<span class=\\"Highlight2\\">3秒</span>。<br>增加你成为血祭品的几率。<br>","name":"魂牵梦绕","flavor":"“他看见我了！”——劳丽·斯特罗德","id":136,"index":"OBJECT_OF_OBSESSION","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_objectOfObsession","tiers":[[2],[4],[6]]},{"description":"你拿起手头的一切东西，刺向侵略者，最终寻求逃脱。<br>在自我解救或被人解救后，<i>毁灭打击</i>将变为生效且可使用状态，持续<span class=\\"Highlight1\\">{0}秒</span>。<br>毁灭打击生效期间，当被杀手抓住时，技能检验成功可自动逃脱杀手的控制并使杀手眩晕<span class=\\"Highlight1\\">5秒</span>。<br><li>无论毁灭打击技能检验成功与否，<i>毁灭打击</i>都会被禁用。</li><li>成功击晕杀手将导致你成为血祭品。</li><br>生效时，下列行为会使<i>毁灭打击</i>失效：<li>修理发电机</li><li>治疗自己或其他人</li><li>破坏图腾</li><li>破坏钩子</li><li>解救其他人</li><br><li><i>增加你成为杀手血祭品的几率。</i></li><li><i>杀手一次只能将一名逃生者变为<b>血祭品</b>。</i></li>","name":"毁灭打击","id":137,"index":"DECISIVE_STRIKE","rarity":[1,2,3],"owner":"LAURIE_STRODE","image":"iconPerks_decisiveStrike","tiers":[[40],[50],[60]]},{"description":"加强你与队友的气场解读潜能。<br><li>提高气场解读范围<span class=\\"Highlight1\\">{0}米</span>。</li><li>逃生者每次只能被一种<i>稳操胜券</i>效果影响。</li>","name":"稳操胜券","flavor":"“专心致志是我多年来的谋生之道。当然，长得帅也很重要。” ——埃斯","id":138,"index":"OPEN_HANDED","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_openHanded","tiers":[[4],[12],[16]]},{"description":"你知道一切都会好起来的。你的自信会给周围的人带来莫大的希望。每一个活着的逃生者都会给予所有剩余逃生者 <span class=\\"Highlight1\\">{0}%</span>的运气加成。<br>","name":"好运会传染","flavor":"“还能说什么呢？只能说我非常幸运…… 我确信也会传递给你。”——埃斯","id":139,"index":"UP_THE_ANTE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_upTheAnte","tiers":[[1],[2],[3]]},{"description":"幸运女神仿佛总是在向你伸出橄榄枝。<br>当你从箱子里拿出物品的时候，有<span class=\\"Highlight1\\">{0}%</span>的几率同时获得<span class=\\"Highlight2\\">罕见</span>（或更低稀有度）的附加品。<br>有<span class=\\"Highlight3\\">{1}%</span>的几率再获得<span class=\\"Highlight4\\">不常见</span>或更低稀有度的附加品。<br>成功逃脱时，保留道具上的一切附加品。","name":"惊喜连连","flavor":"“会发光的不一定是金子。不过就算是金子，在这个鬼地方也屁用都没有，所以物尽其用才是真理。”——埃斯","id":140,"index":"ACE_IN_THE_HOLE","rarity":[1,2,3],"owner":"ACE_VISCONTI","image":"iconPerks_aceInTheHole","tiers":[[100,10],[100,25],[100,50]]},{"description":"你善于谨慎且精确地处理机械。<br>你维修时所产生的噪音音量和噪音被听到的范围都会减少<span class=\\"Highlight2\\">8米</span>。在维修检验失败后，有<span class=\\"Highlight1\\">50%</span>几率避免发电机爆炸。","name":"技术员","flavor":"“我要偷偷完成这个。”——凤敏","id":141,"index":"TECHNICIAN","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_technician","tiers":[[8,5],[8,4],[8,3]]},{"description":"执行 <b>翻越</b>后，以正常跑步速度的<span class=\\"Highlight1\\">{0}%</span>进入冲刺，最大持续时间为<span class=\\"Highlight2\\">{1}秒</span>。<br>触发<i>疲劳</i>状态效果并持续<span class=\\"Highlight4\\">{2}秒</span>。<br>疲劳<i>时无法使用</i><i>轻盈敏捷</i>。<br>跑动时，你无法从<i>疲劳</i>状态效果中恢复。","name":"轻盈敏捷","flavor":"“气不气？” ——凤敏","id":142,"index":"LITHE","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_lithe","tiers":[[150,3,60],[150,3,50],[150,3,40]]},{"description":"你敏锐的感知能力处于高度戒备状态中。<br>在杀手进行破坏动作时，他会向你暴露气场 <span class=\\"Highlight1\\">{0}秒</span>。","name":"警戒","flavor":"“我拥有真视。”——凤敏","id":143,"index":"ALERT","rarity":[1,2,3],"owner":"FENG_MIN","image":"iconPerks_alert","tiers":[[3],[4],[5]]},{"description":"解开前所未有的气场探知潜能。一旦所有发电机通上电，逃生大门在你附近<span class=\\"Highlight1\\">{0}米</span>范围时将会显示气场。开启逃生大门期间，<span class=\\"Highlight2\\">{1}米</span>内的逃生者将感受到你的气场。<i>在</i>“醒醒！\\"激活时，打开逃生大门的速度增加<span class=\\"Highlight3\\">{2}%</span>。","name":"醒醒！","id":144,"index":"WAKE_UP","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_wakeUp","tiers":[[128,128,5],[128,128,10],[128,128,15]]},{"description":"寻找药品时，你有自己的窍门。解锁箱子的速度加快<span class=\\"Highlight1\\">{0}%</span>，解锁时发出的声音大小以及传播范围都将缩小<span class=\\"Highlight2\\">{1}米。</span><br><i>药到病除</i>可保证你在解锁的<b>第一个箱子</b>中找到一个急救医疗箱。<br>","name":"药到病除","id":145,"index":"PHARMACY","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_pharmacy","tiers":[[40,8],[60,8],[80,8]]},{"description":"即便在极端的情况下，你也要照看好自己的朋友。你和你的同伴在 <span class=\\"Highlight1\\">{0}米</span>范围内从<b>疲劳、出血、减速</b>和<b>障目</b>状态中恢复的速度增加<span class=\\"Highlight2\\">{1}%</span> 。一旦超出范围，此效果可持续<span class=\\"Highlight4\\">{2}秒。</span><br>","name":"守夜人","id":146,"index":"VIGIL","rarity":[1,2,3],"owner":"QUENTIN_SMITH","image":"iconPerks_vigil","tiers":[[8,10,15],[8,15,15],[8,20,15]]},{"description":"任何东西都无法阻挡你的信念。即使陷入绝境，你顽强的特质让你的爬行速度比正常速度快<span class=\\"Highlight1\\">{0}%</span>，并且爬行的同时可以执行恢复动作。","name":"永不言弃","flavor":"“这他妈是什么东西？我要把这王八蛋给崩了！” ——侦探大卫·泰普","id":147,"index":"TENACITY","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_tenacity","tiers":[[30],[40],[50]]},{"description":"解锁气场解读能力。当修理完一台发电机后，你会看见<span class=\\"Highlight1\\">{0}米</span>内的发电机，箱子和图腾的气场，并持续<span class=\\"Highlight2\\">{1}秒</span>。<br>当你使用能够记录目标的地图道具时，<i>侦探直觉</i>所显现的发电机、箱子和图腾的气场会被记录。","name":"侦探直觉","flavor":"“你可以告诉我们你昨晚在哪吗？” ——侦探泰普","id":148,"index":"DETECTIVES_HUNCH","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_detectivesHunch","tiers":[[32,10],[48,10],[64,10]]},{"description":"近在咫尺的杀手让你的决心无比坚定。当你待在杀手的恐惧范围内，且不处于追逐状态时，每过<span class=\\"Highlight1\\">{0}秒</span>，你都会获得一个印记，最多可获得<span class=\\"Highlight2\\">{1}个</span>。<br>当<i>破案心切</i>至少拥有<b>1个印记</b>时，很棒的技能检验将被判定为完美的技能检验，每次消耗<b>1个印记</b>，并为发电机修理进度提供<span class=\\"Highlight3\\">1%</span>加成。","name":"破案心切","flavor":"\\\\“我抓到你了，我让你跪下了。我们抓到你了但你逃跑了。我们要破了这个案子！\\\\” ——侦探大卫·泰普","id":149,"index":"STAKE_OUT","rarity":[1,2,3],"owner":"DAVID_TAPP","image":"iconPerks_stakeOut","tiers":[[15,2],[15,3],[15,4]]},{"description":"当执行快速翻窗或快速出柜动作时，你在<span class=\\"Highlight1\\">{0}秒</span>内不会留下红色划痕（脚印）。<br><i>与我共舞</i>有<span class=\\"Highlight1\\">{1}秒</span>的冷却时间。<br>","name":"与我共舞","flavor":"“又一场表演开始了，<br>与我共舞吧，因为风暴即将到来，<br>跟上我的舞步，跟上我，<br>与我共舞吧，直到太阳升起。”<br>——凯特·登森《与我共舞》","id":150,"index":"DANCE_WITH_ME","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_danceWithMe","tiers":[[3,60],[3,50],[3,40]]},{"description":"解锁气场解读能力。显示在你<span class=\\"Highlight1\\">{0}米</span>范围内板子、可破坏墙壁和翻越地点的气场。在追杀中，翻越或扔下板子时<br><i>机遇之窗</i>的冷却时间为<span class=\\"Highlight1\\">{1}秒</span>。","name":"机遇之窗","flavor":"“奋发向上，努力进取，你的名字将永垂不朽，<br>确立目标并朝着它前进，所有人都会知晓你的大名，<br>你从不抱怨自己的身世，因为你知道自己的价值，<br>敞开心扉，拥抱这机遇之窗吧。”<br>——凯特·登森《机遇之窗》","id":151,"index":"WINDOWS_OF_OPPORTUNITY","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_windowsOfOpportunity","tiers":[[20,30],[20,25],[20,20]]},{"description":"你像个战士一样，为了逃脱敌人的魔掌能做到任何事情。你的挣扎对杀手的影响将增加<span class=\\"Highlight1\\">{0}%</span>。<br>剥夺杀手读取<span class=\\"Highlight1\\">{1}米</span>内钩子气场的能力。","name":"脱缰野马","flavor":"“大块头和疯子们，<br> 尽情的张牙舞爪吧，<br>反正你是抓不住我的。”<br>——凯特·登森《脱缰野马》","id":152,"index":"BOIL_OVER","rarity":[1,2,3],"owner":"KATE_DENSON","image":"iconPerks_boilOver","tiers":[[25,10],[50,12],[75,14]]},{"description":"主动技能。<br>在不被追逐的情况下在杀手的恐惧范围内逗留<span class=\\"Highlight1\\">{0}秒</span>，<i>声东击西</i>便会激活。<br><li>当<i>声东击西</i>处于激活状态时，静止蹲伏并按下<i>主动能力键</i>，可以扔出一颗鹅卵石，可在<span class=\\"Highlight2\\">20米</span>范围内干扰杀手的注意力。</li><br><li>技能被使用过后冷却。</li><br>干扰由两部分组成：<br><li>响亮的声音提示</li><li>血丝划痕</li>","name":"声东击西","flavor":"“简单的事和正确的事是两码事。如果将两者混淆，难以预料你会变成什么样的人。” ——亚当·弗朗西斯","id":153,"index":"DIVERSION","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_diversion","tiers":[[40],[35],[30]]},{"description":"成功安全解救一名上钩逃生者后，<i>善有善报</i>便会激活。<br>赋予你<span class=\\"Highlight1\\">100%</span>的上钩自行挣脱的成功率。<br>成功使用<i>善有善报</i>技能挣脱钩子后将受到<span class=\\"Highlight2\\">不治</span>状态影响，持续<span class=\\"Highlight3\\">{0}秒</span>。","name":"善有善报","flavor":"“抚养我长大的人对我十分严厉，他教会了我如何在逆境中求生。”——亚当·弗朗西斯","id":154,"index":"DELIVERANCE","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_deliverance","tiers":[[100],[80],[60]]},{"description":"进入游戏时，治疗动作中的技能检验（QTE）默认造成<span class=\\"Highlight1\\">-{1}%</span>的进度惩罚。<br>治疗他人时每成功完成一次QTE，都会使你获得一个印记，上限<span class=\\"Highlight2\\">{0}个</span>。<br>每个印记会赋予你<span class=\\"Highlight1\\">+{2}%</span>的成功完成QTE的进度奖励。<br>当使用<i>自学成才</i>技能时将无法触发完美的技能检验。<li>当使用医疗包道具进行治疗时<i>自学成才</i>技能将不会生效。</li>","name":"自学成才","flavor":"“只要努力,一切皆有可能。”——亚当·弗朗西斯","id":155,"index":"AUTODIDACT","rarity":[1,2,3],"owner":"ADAM_FRANCIS","image":"iconPerks_autodidact","tiers":[[25,3,15],[25,4,15],[25,5,15]]},{"description":"每次当你离开挂钩（无论是主动逃脱还是被解救）时，挂钩将会断裂，杀手的气场将会显示在你的视角中，持续<span class=\\"Highlight1\\">{0}秒</span>。被此技能破坏的钩子需要<span class=\\"Highlight2\\">180秒</span>才会恢复。<br>","name":"分崩离析","flavor":"“从野兽腹中冲出。”<br>我看到路边一块木头上有幅速写/画作。我感觉上面有什么故事。而它没有浪费自己的第二次机会。——杰夫，木片上的油墨痕，12x16","id":156,"index":"BREAKDOWN","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_breakdown","tiers":[[4],[5],[6]]},{"description":"解锁气场解读能力。<br><br>任何被你:<br><li>救下钩或救你下钩;</li><li>完成治疗或治疗你的逃生者。</li><br>都可以和你互相看到对方的气场。 <br><br>最多可以和<span class=\\"Highlight1\\">{0}名逃生者</span>建立气场链接。<i>劫后余生</i>的所有效果将在上钩后重置。<br>","name":"劫后余生","flavor":"“战胜风暴的仁慈。”<br>此油画作品献给我最好的兄弟们，同时也是世界上最好的音乐家们。他们的第一张专辑仍然是我的最爱，帮助我度过了人生中的一段黑暗时光. –杰夫，布面油画，16x16","id":157,"index":"AFTERCARE","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_aftercare","tiers":[[1],[2],[3]]},{"description":"进入游戏时拥有<span class=\\"Highlight1\\">{0}个印记</span>。<br><br>当杀手看到你的气场时，<i>扭曲</i>技能激活，消耗一个印记。<br><br>接下来的<span class=\\"Highlight1\\">{1}秒</span>内，只要<i>扭曲</i>处于激活状态，你就不会留下血丝划痕，且杀手将无法看到你的气场。<br><li>在濒死状态以及被困于陷阱的时候，<i>扭曲</i>不会生效。</li><br>","name":"扭曲","flavor":"“死亡被猎鹰羽毛斗篷愚弄。”<br>素描的灵感来自冬季的几个不眠之夜。探索北欧神话：勇敢可以掩盖缺陷，即使在你最虚弱时。——杰夫，色调纸上的铅笔画，12x12","id":158,"index":"DISTORTION","rarity":[1,2,3],"owner":"JEFF_JOHANSEN","image":"iconPerks_distortion","tiers":[[3,6],[3,8],[3,10]]},{"description":"分享痛苦的经历能治愈悲伤。<br>尽管受伤，但是在治愈逃生者的同时，就算不使用药箱，也会以<span class=\\"Highlight1\\">{0}%</span>的转换率治愈你自己。","name":"团结一致","flavor":"“困难时挺身而出，倾听他人的困难，支持那些处于困境中的人; 这样你会变得更强大并且成长更快。” ——简·罗梅罗","id":159,"index":"SOLIDARITY","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_solidarity","tiers":[[40],[45],[50]]},{"description":"达成目标可以增强信心。<br>发电机完成后，你可以<span class=\\"Highlight1\\">{0}秒</span>不留刮痕。<br>","name":"蓄势待发","flavor":"“好的，保持冷静。不要想多了，继续前进，你成功了。——简·罗梅罗","id":160,"index":"POISED","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_poised","tiers":[[6],[8],[10]]},{"description":"当你打定主意，别人最好别来阻拦你。<br><br>站在储物柜中<span class=\\"Highlight1\\">{0}秒</span>后，<i>勇往直前</i>生效。<br><i>勇往直前</i>生效期间，进行快速行动离开储物柜即可使用<i>勇往直前</i>。如果杀手站在<i>勇往直前</i>的有效范围内，则杀手会被击晕，持续<span class=\\"Highlight1\\">{1}秒</span>。<br>产生<span class=\\"Highlight3\\">疲劳</span>状态，持续<span class=\\"Highlight1\\">{2}秒</span>。<br>在疲劳状态下无法使用勇往直前。<br>奔跑时，你无法从<span class=\\"Highlight3\\">疲劳</span>状态中恢复。<br>你有空闲的乌鸦时，无法使用<i>勇往直前</i>。<br>","name":"勇往直前","flavor":"“人们会因为他们克服的障碍而被人铭记。你可以逃避并忘记自己有多优秀，你也可以直面恐惧，并让世人记住你。” ——简·罗梅罗","id":161,"index":"HEAD_ON","rarity":[1,2,3],"owner":"JANE_ROMERO","image":"iconPerks_headOn","tiers":[[3,3,60],[3,3,50],[3,3,40]]},{"description":"你有一种不可思议的能力逃脱不可避免的事情。<br><br>在濒死状态下，当你被杀手捡起时，你<span class=\\"Highlight1\\">{0}%</span>的恢复进展的会转换为摆动进展，最多可达到整个摆动进展的<span class=\\"Highlight2\\">{1}%</span>。<br>","name":"触发器","flavor":"“在触发器上抓住你。” ——阿什·威廉姆斯","id":162,"index":"FLIP_FLOP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_flipFlop","tiers":[[50,40],[50,45],[50,50]]},{"description":"解锁个人气场解读能力的潜力。濒死逃生者的恢复进程可以通过他们在远至<span class=\\"Highlight1\\">{0}米</span>处的气场强度来确定。<br><br>当你将逃生者从濒死状态治愈到受伤状态时，被治愈的逃生者和你本人都会看到杀手的气场，持续<span class=\\"Highlight2\\">{1}秒</span>。<br>","name":"扣上","flavor":"“幽灵战士绝不放弃任何一个队友。”——阿什·威廉姆斯","id":163,"index":"BUCKLE_UP","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_buckleUp","tiers":[[48,4],[48,5],[48,6]]},{"description":"邪恶的存在总有办法找到你。<br><br>你为其他逃生者抵挡<span class=\\"Highlight1\\">{0}</span>次攻击后，<i>人之勇气</i>生效。<br><br>生效后，你将无视下一次本会使你从<b>受伤状态</b>陷入<b>濒死状态</b>的状况。<br><br>你的生命值下一次恢复至全满时，如果你与杀手之间的距离超过<span class=\\"Highlight2\\">{1}米</span>，则你的气场会暴露给杀手。<br><br><i>人之勇气</i>在你下一次陷入濒死状态时失效。<br><i><li>增加你成为杀手的血祭品的几率。</li><li>杀手一次只能将一名逃生者变为<b>血祭品</b>。</li></i><br>","name":"人之勇气","flavor":"“在邪恶的东西眼里，我就是在它们眼前晃来晃去的活靶子。”——阿什·威廉姆斯","id":164,"index":"METTLE_OF_MAN","rarity":[1,2,3],"owner":"ASHLEY_J_WILLIAMS","image":"iconPerks_mettleOfMan","tiers":[[3,12],[3,14],[3,16]]},{"description":"无论面对何种艰难险阻，你都要追求正义并揭露真相。<br><br>你正在修理的发电机的气场会暴露给<span class=\\"Highlight1\\">{0}米</span>范围内的所有其他逃生者。<br><br>如果杀手在你修理发电机期间击倒了一名逃生者，则你能看到所有其他逃生者的气场，持续<span class=\\"Highlight2\\">{1}秒</span>。<br>","name":"齐心协力","flavor":"“我们一把火烧了那座实验室吧”——南茜·惠勒","id":165,"index":"BETTER_TOGETHER","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_betterTogether","tiers":[[32,8],[32,9],[32,10]]},{"description":"你认定目标时，就大胆去做。做错了求人原谅总比投鼠忌器强。<br><br>你随时都能看到自己的血丝划痕。<br><br>你的行走速度增加<span class=\\"Highlight1\\">{0}%</span>。<br>","name":"认定目标","flavor":"“我想要有始有终。我想把它杀掉。”——南茜·惠勒","id":166,"index":"FIXATED","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_fixated","tiers":[[10],[15],[20]]},{"description":"当你感觉孤单失落时，会审视自己的内心并相信自己的直觉。<br><br>你每次将图腾净化完成时，<i>内心之力</i>激活。如果你已经处于<b>不治状态</b>，<i>内心之力</i>不会触发。<br><br>在<i>内心之力</i>生效期间，你受伤时藏在储物柜内<span class=\\"Highlight1\\">{0}秒</span>即可完全恢复。<br><br><i>内心之力</i>成功触发之后就会失效。<br>","name":"内心之力","flavor":"“我一直以来都在假装一切都好，但这只是自欺欺人。”——南茜·惠勒","id":167,"index":"INNER_STRENGTH","rarity":[1,2,3],"owner":"NANCY_WHEELER","image":"iconPerks_innerStrength","tiers":[[10],[9],[8]]},{"description":"虽然大家都知道你是个以自我为中心的人，但你会为了帮助他人而豁出一切。<br><br>你解救一名逃生者时，被解救的逃生者在接下来的<span class=\\"Highlight1\\">{0}秒</span>内不会留下血丝划痕或血迹。你和杀手能看到彼此的气场，持续<span class=\\"Highlight2\\">{1}秒</span>。<br>","name":"保姆","flavor":"“我答应过会保护好你们这帮怂货，而我也说到做到。”——史蒂夫·哈林顿","id":168,"index":"BABYSITTER","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_babySitter","tiers":[[4,4],[6,4],[8,4]]},{"description":"生活教会了你友谊的重要性，这也是你力量的源泉。<br><br>你处于被钩住后的挣扎阶段时，<i>同志情谊</i>激活。<br><br>如果<i>同志情谊</i>生效期间你<span class=\\"Highlight1\\">{0}米</span>范围内有别的逃生者，则钩子计时器暂停<span class=\\"Highlight2\\">{1}秒</span>。<br>","name":"同志情谊","flavor":"“记住，你进去之后……就假装啥都不关你事。很好，你学得很快，朋友。学得很快。”——史蒂夫·哈林顿","id":169,"index":"CAMARADERIE","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_camaraderie","tiers":[[16,26],[16,30],[16,34]]},{"description":"当你通过治疗令其他逃生者的伤势状况好转一级时，<i>复苏之风</i>激活。如果你已经处于<span class=\\"Highlight1\\">不治状态</span>，<i>复苏之风</i>不会触发。<br><br><i>复苏之风</i>生效期间，你下次被人解救或解救自己时，你会陷入<span class=\\"Highlight1\\">不治状态</span>。 在<span class=\\"Highlight2\\">{0}秒</span>后，<i>复苏之风</i>会使你完全恢复。<br><br><i>复苏之风</i>会在使你完全恢复后，或你在未触发<i>复苏之风</i>的情况下陷入濒死状态时失效。你将脱离<span class=\\"Highlight1\\">不治状态</span>。<br>","name":"复苏之风","flavor":"“嗯，我拒绝。”——史蒂夫哈林顿","id":170,"index":"SECOND_WIND","rarity":[1,2,3],"owner":"STEVE_HARRINGTON","image":"iconPerks_secondWind","tiers":[[28],[24],[20]]},{"description":"你没少受过伤，但总能得到幸运女神的垂青。<br><br>你受伤时，<i>幸运喘息</i>便会生效。<i>幸运喘息</i>生效时，你不会留下血迹或血丝划痕，总共生效<span class=\\"Highlight1\\">{0}秒</span>。<br><br>总共的生效时间耗尽后，<i>幸运喘息</i>将在该局游戏中永久失效。<br>","name":"幸运喘息","flavor":"“这种程度就想打败我？还差得远呢。”——木村唯","id":171,"index":"LUCKY_BREAK","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_luckyBreak","tiers":[[40],[50],[60]]},{"description":"你捍卫自己，用手头的一切资源获得优势。<br><br>站在掉落在地上的木板旁并按住<i>主动能力键</i><span class=\\"Highlight1\\">{0}秒</span>即可将其重置为竖直状态。<br><br><i>不惜一切</i>冷却时间为<span class=\\"Highlight2\\">{1}秒</span>。<br>","name":"不惜一切","flavor":"“我会全力以赴打倒你。然后我会再来一次。”——木村唯","id":172,"index":"ANY_MEANS_NECESSARY","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_anyMeansNecessary","tiers":[[4,100],[4,80],[4,60]]},{"description":"当有人陷入麻烦时，你就会切换到高速挡，激励他们克服一切困难。<br><br>你身处被搬运的逃生者<span class=\\"Highlight1\\">{0}米</span>范围内时，你获得<span class=\\"Highlight2\\">急速</span>状态，移动速度提高<span class=\\"Highlight3\\">{1}%</span>。被搬运的逃生者挣扎速度提高<span class=\\"Highlight4\\">{2}%</span>。<br>","name":"挣脱激励","flavor":"“加油，我们没有路也要闯出一条路逃出去。”——木村唯","id":173,"index":"BREAKOUT","rarity":[1,2,3],"owner":"YUI_KIMURA","image":"iconPerks_breakout","tiers":[[6,5,20],[6,6,20],[6,7,20]]},{"description":"你明白有时候以静制动是上上之策。<br><br>你被解救或挣脱钩子后，<i>非正式调查</i>生效<span class=\\"Highlight1\\">{0}秒。</span><br><br><i>非正式调查</i>生效期间，杀手看不到你的气场，且因受伤引起的痛苦呻吟减少<span class=\\"Highlight2\\">{1}%</span>。<br>","name":"非正式调查","flavor":"“相信我，我的调查既隐秘又彻底。”——萨丽娜·卡希尔","id":174,"index":"OFF_THE_RECORD","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_offTheRecord","tiers":[[60,100],[70,100],[80,100]]},{"description":"你发现动静最大的事件最能引起人们的关注。<br><br>你至少花<span class=\\"Highlight1\\">{0}秒</span>修理一台发电机后，它就会向你显示出黄色气场。气场会一直显示，直到你完全修好这台发电机、修理别的发电机或是进入储物柜为止。<br><br>进入储物柜会导致该发电机向杀手发出响亮的声音提示。<br><li><i>题外话</i>每<span class=\\"Highlight2\\">{1}秒</span>只能触发一次。</li><br>","name":"题外话","flavor":"“新闻会把麻烦复杂的部分删去，而这些部分就是真相。”——萨丽娜·卡希尔","id":175,"index":"RED_HERRING","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_redHerring","tiers":[[3,60],[3,50],[3,40]]},{"description":"你冒着生命危险救助他人。<br><br><i>舍己为人</i>只在生命值全满时生效。<br><br>在不用医疗包治疗其他逃生者时点击<i>主动能力键</i>可立刻将逃生者状态从濒死变为受伤，或从受伤变为健康。<br><br>你将变为受伤状态并受到<b>不治</b>状态影响，持续<span class=\\"Highlight1\\">{0}秒</span>。<br><br>你将变成血祭品。<br><br>装备此技能可在游戏开始时<b>降低</b>你变成血祭品的几率。<br>","name":"舍己为人","flavor":"“我们能书写自己的故事并决定故事的结局。”——萨丽娜·卡希尔","id":176,"index":"FOR_THE_PEOPLE","rarity":[1,2,3],"owner":"ZARINA_KASSIR","image":"iconPerks_forThePeople","tiers":[[110],[100],[90]]},{"description":"你经历了千辛万苦，现在更加坚强。<br><br>从濒死状态被治疗或恢复后会获得<b>坚忍</b>状态，持续<span class=\\"Highlight1\\">{0}秒</span>。<br>受到厄咒的诅咒时，你可以从濒死状态完全恢复。<br><br>此效果每<span class=\\"Highlight2\\">30秒</span>只能触发一次。","name":"灵魂守卫","id":177,"index":"SOUL_GUARD","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_soulGuard","tiers":[[4],[6],[8]]},{"description":"你身体的潜在部分似乎被唤醒了。你感觉自己可以向自身之外寻求援助。<br><br>当你或血祭品受伤后，你们能看见对方的气场。<br><br>在治疗血祭品或被血祭品治疗后，你们均会获得<span class=\\"Highlight1\\">{1}%</span><b>急速</b>状态，直到彼此距离超过<span class=\\"Highlight2\\">16</span>米。<br><br>降低成为血祭品的几率。<br><br>如果你成为血祭品，则此技能失效。","name":"鲜血契约","id":178,"index":"BLOOD_PACT","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_bloodPact","tiers":[[5],[6],[7]]},{"description":"你已经习惯了被恶意力量追捕，并且开始将其转为自己的优势。<br><br><i>压抑同盟</i>在修理发电机总计超过<span class=\\"Highlight1\\">{0}秒</span>后就会激活。<br><br>在技能激活期间修理发电机时，按下<i>主动能力键</i>即可召唤恶灵，屏蔽发电机<span class=\\"Highlight2\\">{1}秒</span>。此技能随即失效。<br><br>受影响的发电机将对所有逃生者显示白色气场。","name":"压抑同盟 ","id":179,"index":"REPRESSED_ALLIANCE","rarity":[1,2,3],"owner":"CHERYL_MASON","image":"iconPerks_repressedAlliance","tiers":[[80,30],[70,30],[60,30]]},{"description":"你非常专注于逃生方法。<br><br>你能看到<span class=\\"Highlight1\\">{0}米</span>内的发电机气场。<br><br>每次有发电机修理完成时，<i>远见</i>将被禁用<span class=\\"Highlight2\\">{1}秒</span>。","name":"梦想家","id":180,"index":"VISIONARY","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_visionary","tiers":[[32,20],[32,18],[32,16]]},{"description":"即便在最黑暗的时刻，你也拒绝接受失败。<br><br>每有一名受伤、被钩住或濒死的逃生者，你的治疗与解救行动速度就提升<span class=\\"Highlight1\\">{0}%</span>。<br>","name":"绝境对策","flavor":"“兵来将挡，水来土掩。”——菲利克斯·里奇特","id":181,"index":"DESPERATE_MEASURES","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_desperateMeasures","tiers":[[10],[12],[14]]},{"description":"你很擅长利用自己手头的工具。<br><br>每场比赛中，某一件耗尽的道具有一次机会在<span class=\\"Highlight2\\">{1}秒</span>后恢复<span class=\\"Highlight1\\">{0}%</span>可用次数。<br>","name":"经久耐用","flavor":"“建筑学是文明的灵魂。”——菲利克斯·里奇特","id":182,"index":"BUILT_TO_LAST","rarity":[1,2,3],"owner":"FELIX_RICHTER","image":"iconPerks_builtToLast","tiers":[[30,10],[40,10],[50,10]]},{"description":"你明察秋毫，能注意到许多被忽略的东西。<br><br>比赛开始时获得<span class=\\"Highlight1\\">{0}枚印记</span>。当某处箱子已经被打开后，可以消耗一枚印记对其搜寻并获得一件道具。每个箱子都只能翻找一次。<br><br>你在箱子中的翻找速度提升<span class=\\"Highlight2\\">{1}%</span>。","name":"鉴定","id":183,"index":"APPRAISAL","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_appraisal","tiers":[[3,40],[3,60],[3,80]]},{"description":"你的冒险式生活方式有时也需要一点狡猾的误导。<br><br>冲刺时与储物柜互动会在你的位置造成巨大声响，在<span class=\\"Highlight1\\">{0}秒内</span>你不会留下任何血丝划痕。<br><br>此技能生效期间你无法在冲刺时进入储物柜。<br><br><i>欺骗</i>仅可每 <span class=\\"Highlight2\\">{1}秒</span>触发一次。","name":"欺骗","id":184,"index":"DECEPTION","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_deception","tiers":[[3,60],[3,50],[3,40]]},{"description":"你之前从未言弃，现在也不会。<br><br>被杀手搬运时，将进度条摇动至<span class=\\"Highlight1\\">{0}%</span>即可激活<i>强力挣扎</i>。<i>强力挣扎</i>生效期间，你可以丢下附近某块立起的板子击晕杀手。<br>","name":"强力挣扎","flavor":"“我曾经依靠别人保护我，结果我失去了一切。不会再有下一次。”——伊洛迪·拉科托","id":185,"index":"POWER_STRUGGLE","rarity":[1,2,3],"owner":"ELODIE_RAKOTO","image":"iconPerks_powerStruggle","tiers":[[35],[30],[35]]},{"description":"有时候其他人的牺牲是前进的必要条件。<br><br>每当有其他逃生者被钩住时，你获得<span class=\\"Highlight1\\">{0}枚印记。</span>你在完成一次发电机完美的技能检验后消耗全部印记。每枚消耗的印记会赋予修理发电机时完美的技能检验<span class=\\"Highlight2\\">{1}%</span>额外进度。<br>","name":"成功捷径","flavor":"“弱者将先被牺牲。这就是自然，也是生意……这是大多数人拒绝面对的真相。”——允珍","id":186,"index":"FAST_TRACK","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_FastTrack","tiers":[[1,9],[2,18],[3,27]]},{"description":"当你的对手犯下错误时，你就要抓住这样的机会<br><br>。使用板子击晕杀手之后，你将以正常跑步速度的<span class=\\"Highlight1\\">{0}%</span>进行冲刺，持续<span class=\\"Highlight2\\">{1}秒。</span><br>将导致受到<b>疲劳</b>状态影响，持续<span class=\\"Highlight3\\">{2}秒。</span><br>此技能不能在<b>疲劳</b>时使用。<br>","name":"轰动演出","flavor":"“我对付过许多衣冠禽兽。你长得更丑，打扮也更差劲。”——允珍","id":187,"index":"SMASH_HIT","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_SmashHit","tiers":[[150,4,60],[150,4,50],[150,4,40]]},{"description":"人生不易。有时候最好早为自己做好打算。<br><br>每当你附近<span class=\\"Highlight1\\">{0}米</span>内有另一名逃生者被普通攻击或特殊攻击击中时，<i>自我保护</i>将生效。<br>你的血丝划痕将被隐藏<span class=\\"Highlight2\\">{1}秒。</span><br>","name":"自我保护","flavor":"“我这些年来学到的就是：枪打出头鸟。”——允珍","id":188,"index":"SELF_PRESERVATION","rarity":[1,2,3],"owner":"YUN_JIN_LEE","image":"iconPerks_Self-Preservation","tiers":[[16,6],[16,8],[16,10]]},{"description":"你知道如何对付比自己更强的敌人，首先要从狩猎并消灭其增援开始。<br><br>你破坏图腾的速度加快<b>20%</b>。破坏图腾后，当前最远图腾的气场会对你显示<span class=\\"Highlight1\\">{0}秒</span>，同时本场比赛内你获得<span class=\\"Highlight2\\">{1}%</span>破坏图腾额外速度加成。<br><br><span class= \\"FlavorText\\">“我不介意来点侦探工作。”——吉儿·瓦伦丁</span>","name":"反制之力","id":189,"index":"COUNTERFORCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Counterforce","tiers":[[2,20],[3,20],[4,20]]},{"description":"你克服了几乎不可能的困难……并且你还可以再来一次。<br><br>被解救或自行解救后，你立刻获得<span class=\\"Highlight1\\">{0}%</span>治疗进度。<br><br><span class= \\"FlavorText\\">“轮到我了，混蛋。”——吉儿·瓦伦丁</span>","name":"东山再起","id":190,"index":"RESURGENCE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_Resurgence","tiers":[[40],[45],[50]]},{"description":"当敌人不适合正面战斗时，你仍然有办法还击。<br><br><i>爆炸地雷</i>会在完成总计<span class=\\"Highlight1\\">{0}%</span>发电机修理进度后激活。<br>完成修理发电机至少<span class=\\"Highlight2\\">{1}秒</span>后，即可按下<i>能力键</i>安装此陷阱，有效时间为<span class=\\"Highlight3\\">{2}秒</span>。受影响的发电机将对所有逃生者显示白色气场。每处发电机同时仅可安装一处陷阱。<br><li>杀手踢到设有陷阱的发电机时，陷阱就会爆炸击晕杀手，并使周围所有角色致盲。<i>爆炸地雷</i>随后会失效。</li><br><br><span class= \\"FlavorText\\">“你想找S.T.A.R.S.的人？我就让你看看S.T.A.R.S.的本事！”——吉儿·瓦伦丁</span>","name":"爆炸地雷","id":191,"index":"BLAST_MINE","rarity":[1,2,3],"owner":"JILL_VALENTINE","image":"iconPerks_blastMine","tiers":[[66,3,35],[66,3,40],[66,3,45]]},{"description":"你和别人一样受伤也会疼，但你不会让别人知道。<br><br>你在治疗时不会发出包括痛苦呻吟在内的任何噪声。治疗技能检验失败时不会有噪音提示，治疗进度也只会回退<span class=\\"Highlight1\\">{0}%。</span><br><br><span class= \\"FlavorText\\">“我可以的。”——里昂·S·肯尼迪</span>","name":"咬紧牙关","id":192,"index":"BITE_THE_BULLET","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_BiteTheBullet","tiers":[[3],[2],[1]]},{"description":"你适应了这个混乱的世界，并能使破败的残骸物尽其用。<br><br>在完成任意发电机的<span class=\\"Highlight1\\">{0}%</span>进度后，<i>闪光弹</i>将激活。<br>空手进入储物柜并按下能力键即可制作一枚闪光弹。<br><li>1次使用次数。</li><li>引爆后会发出巨大噪音与闪光。</li><li>会出现噪音提示。</li><li>可用于分散注意力或致盲。</li><br>你逃出生天时不会带走闪光弹。<br><br><span class= \\"FlavorText\\">“离我远点！”——里昂·S·肯尼迪</span>","name":"闪光弹","id":193,"index":"FLASHBANG","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_Flashbang","tiers":[[70],[60],[50]]},{"description":"你会随时注意目标不让其溜走。<br><br>修理发电机时完成<span class=\\"Highlight1\\">{0}</span>次很棒或完美的技能检验即可在本场比赛内激活<i>新人精神</i>。<br>激活之后，你可以看到回退发电机的气场。<br><br><span class= \\"FlavorText\\">“长官，我一定会阻止这一切。我保证。”——里昂·S·肯尼迪</span>","name":"新人精神","id":194,"index":"ROOKIE_SPIRIT","rarity":[1,2,3],"owner":"LEON_SCOTT_KENNEDY","image":"iconPerks_RookieSpirit","tiers":[[5],[4],[3]]}]');

/***/ }),

/***/ "./src/data.compiled/locales/zh/survivors.json":
/*!*****************************************************!*\
  !*** ./src/data.compiled/locales/zh/survivors.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"一位忐忑不安的领袖，可以定位队友的位置并提高他们的行动效率。<BR><BR>他的专属技能<B>携手合作</B>，<B>证明自己</B>和<B>领队</B>可以让他轻松找到队友的位置，并为附近的队友和自己提供额外的动作效率加成。","name":"德怀特·费菲尔德","id":1,"index":"DWIGHT_FAIRFIELD","difficulty":0,"perks":["BOND","PROVE_THYSELF","LEADER"],"image":"DF_charSelect_portrait"},{"description":"一位精力充沛的运动员，冲刺爆发时可以将绝大多数杀手甩在身后。<BR><BR>她的专属技能<B>急速静谧</B>，<B>冲刺爆发</B>和<B>肾上腺素</B>可以让她在逃跑时拉开与杀手间的距离，因而获得逃生优势。","name":"梅格·托马斯","id":2,"index":"MEG_THOMAS","difficulty":0,"perks":["QUICK_AND_QUIET","SPRINT_BURST","ADRENALINE"],"image":"MT_charSelect_portrait"},{"description":"一位勤奋刻苦的植物学家，具有提升团队存活率的能力。<BR><BR>她的专属技能<B>心灵共鸣</B>，<B>精研百草</B>和<B>自我疗愈</B>可以让她发现受伤的队友，提高治疗效率。","name":"克劳黛特·莫莱","id":3,"index":"CLAUDETTE_MOREL","difficulty":0,"perks":["EMPATHY","BOTANY_KNOWLEDGE","SELF_CARE"],"image":"CM_charSelect_portrait"},{"description":"一位独来独往的生存主义者，在大多数情况下都能够保全自身。<BR><BR>他的专属技能<B>钢铁意志</B>，<B>安抚生灵</B>和<B>破坏手</B>提高了他在受伤状态下的生存率，使他能够在环境中更自如的行动。","name":"朴· 杰克","id":4,"index":"JAKE_PARK","difficulty":1,"perks":["IRON_WILL","CALM_SPIRIT","SABOTEUR"],"image":"JP_charSelect_portrait"},{"description":"一位城市艺术家，对隐匿和逃脱轻车熟路。<BR><BR>她的专属技能<B>平稳着陆</B>，<B>暴走族</B>和<B>街头范儿</B>使他在完成目标和快速躲藏时得心应手。","name":"妮娅·卡尔森","id":5,"index":"NEA_KARLSSON","difficulty":1,"perks":["BALANCED_LANDING","URBAN_EVASION","STREETWISE"],"image":"NK_charSelect_portrait"},{"description":"一位战场老兵，对各种极端情境已经见怪不怪。<BR><BR>他的专属技能<B>末日残兵</B>，<B>时不我待</B>和<B>坚不可摧</B>使他在危难时刻更加强大。","name":"威廉·比尔·奥弗贝克","id":6,"index":"WILLIAM_OVERBECK","difficulty":2,"perks":["LEFT_BEHIND","BORROWED_TIME","UNBREAKABLE"],"image":"BO_charSelect_portrait"},{"description":"一位体格魁梧的好战分子，喜欢尝试高风险的行为。<BR><BR>他的专属技能<B>生死与共</B>，<B>钢筋铁骨</B>和<B>不痛不痒</B>提供了激进的对抗性玩法，但也留下了易受到攻击的弱点。","name":"大卫·金","id":7,"index":"DAVID_KING","difficulty":1,"perks":["WERE_GONNA_LIVE_FOREVER","DEAD_HARD","NO_MITHER"],"image":"DK_charSelect_portrait"},{"description":"一位刚毅果决的逃生者，已准备好迎接任何挑战。<BR><BR>她的专属技能<B>最后的生还者</B>，<B>魂牵梦绕</B>和<B>毁灭打击</B>牺牲了藏匿能力，但赋予其强大的生存能力。","name":"劳丽·斯特罗德","id":8,"index":"LAURIE_STRODE","difficulty":2,"perks":["SOLE_SURVIVOR","OBJECT_OF_OBSESSION","DECISIVE_STRIKE"],"image":"LS_charSelect_portrait"},{"description":"一位福星高照的赌场老手，具有提高全队运势的能力。<BR><BR>他的专属技能<B>稳操胜券</B>，<B>好运会传染</B>和<B>惊喜连连</B>可以提升全体逃生者的运气，在解锁箱子时极有帮助。","name":"埃斯·维斯孔蒂","id":9,"index":"ACE_VISCONTI","difficulty":0,"perks":["OPEN_HANDED","UP_THE_ANTE","ACE_IN_THE_HOLE"],"image":"AV_charSelect_portrait"},{"description":"这位专注于目标的竞争者能迅速调整自己的策略以应付各种各样富有挑战性的情况。<BR><BR>她的专属技能<B>技术员</B>、<B>轻盈敏捷</B>和<B>警戒</B>能帮助她修理发电机以及找到杀手。","name":"凤敏","id":10,"index":"FENG_MIN","difficulty":0,"perks":["TECHNICIAN","LITHE","ALERT"],"image":"FM_charSelect_portrait"},{"description":"一位果敢的梦境行者，能够提高团队的生存能力和恢复能力。<BR><BR>他的专属技能<B>醒醒！</B>、<B>药到病除</B>和<B>守夜人</B>可以帮助逃生者找到逃生大门的位置，还可以提高恢复能力。","name":"昆汀·史密斯","id":11,"index":"QUENTIN_SMITH","difficulty":0,"perks":["WAKE_UP","PHARMACY","VIGIL"],"image":"QS_charSelect_portrait"},{"description":"一位迷茫失措的侦探，可以快速寻找并完成目标。<BR><BR>他的专属技能<B>永不言弃</B>，<B>侦探直觉</B>和<B>破案心切</B>使他专注于完成目标，并赋予快速恢复的能力。","name":"侦探泰普","id":12,"index":"DAVID_TAPP","difficulty":1,"perks":["TENACITY","DETECTIVES_HUNCH","STAKE_OUT"],"image":"FS_charSelect_portrait"},{"description":"一个非常有前途的女歌手，能够充分利用周边环境进行创作。<br><br>她的可传授技能是：<b>与我共舞</b>，<b>机遇之窗</b>和<b>脱缰野马</b>，使她在最可怕的情境下也能够逃脱。","name":"凯特·登森","id":13,"index":"KATE_DENSON","difficulty":0,"perks":["WINDOWS_OF_OPPORTUNITY","BOIL_OVER","DANCE_WITH_ME"],"image":"GS_charSelect_portrait"},{"description":"一位足智多谋的教师，能够快速适应新环境并制定新策略。<br><br>他的专属技能：<b>声东击西</b>，<b>善有善报</b>和<b>自学成才</b>，能够帮助他转移杀手的注意力，在逆境中求生，并随着游戏的进行不断提升技巧。","name":"亚当·弗朗西斯","id":14,"index":"ADAM_FRANCIS","difficulty":1,"perks":["DIVERSION","DELIVERANCE","AUTODIDACT"],"image":"AF_charSelect_portrait"},{"description":"一名安静的艺术家，坚定地反对各种不可能。<br><br>他的个人技能，<b>分崩离析</b>、<b>劫后余生</b>和<b>扭曲</b>使他拥有观察优势，而且能够保护他自己不被杀手看到。","name":"杰夫·约翰森","id":15,"index":"JEFF_JOHANSEN","difficulty":1,"perks":["BREAKDOWN","AFTERCARE","DISTORTION"],"image":"KS_charSelect_portrait"},{"description":"一位有巨大影响力的名人，与其他人格格不入，善于应对挑战。<br><br>她的个人技能<b>团结一致</b>，<b>蓄势待发</b>和<b>正面出击</b>能够形成灵活的技能连招，帮助他人和自己逃出危险处境。","name":"简·罗梅罗","id":16,"index":"JANE_ROMERO","difficulty":1,"perks":["SOLIDARITY","POISED","HEAD_ON"],"image":"MS_charSelect_portrait"},{"description":"一匹“孤独的狼”，骄傲自大且刚愎自用，生命力顽强。<br><br>他的个人技能<b>触发器</b>，<b>扣上</b>和<b>人之勇气</b>使他不畏痛苦和艰难，并能帮助朋友脱困。 ","name":"阿什利·威廉姆斯","id":17,"index":"ASHLEY_J_WILLIAMS","difficulty":0,"perks":["FLIP_FLOP","BUCKLE_UP","METTLE_OF_MAN"],"image":"MS2_charSelect_portrait"},{"description":"她是一名有抱负的记者，观察力敏锐，能发现其他人可能忽视的东西。<br><br>她的专属技能<b>团结力量大</b>、<b>认定目标</b>和<b>内心之力</b>为她提供应对意外挑战时所需的信息和勇气。","name":"南茜·惠勒","id":18,"index":"NANCY_WHEELER","difficulty":0,"perks":["BETTER_TOGETHER","FIXATED","INNER_STRENGTH"],"image":"QF_charSelect_portrait"},{"description":"原先当过运动健将的他能保护并协助逃生者同伴，同时还不忘调侃一下对方。<br><br>他的专属技能<b>保姆</b>、<b>同志情谊</b>和<b>复苏之风</b>能帮他转移杀手注意力、忍受痛苦以及重新投入战斗。","name":"史蒂夫·哈林顿","id":19,"index":"STEVE_HARRINGTON","difficulty":0,"perks":["BABYSITTER","CAMARADERIE","SECOND_WIND"],"image":"QM_charSelect_portrait"},{"description":"这位坚毅的街道赛手能在逆境中为自己以及逃生者同伴取得优势。<br><br>她的专属技能<b>幸运喘息</b>、<b>不惜一切</b>以及<b>挣脱激励</b>能掩盖血迹、重置掉在地上的模板以及协助身处险境的逃生者。","name":"木村唯","id":20,"index":"YUI_KIMURA","difficulty":1,"perks":["LUCKY_BREAK","ANY_MEANS_NECESSARY","BREAKOUT"],"image":"SS_charSelect_portrait"},{"description":"这名勇敢的纪录片导演能用街头智慧避开侦测并大力协助其他逃生者。<br><br>她的专属技能<b>非正式调查</b>、<b>题外话</b>和<b>舍己为人</b>能帮她在面对危险时保持隐蔽、制造干扰并以牺牲自己的安全为代价快速治疗他人。","name":"萨丽娜·卡希尔","id":21,"index":"ZARINA_KASSIR","difficulty":1,"perks":["OFF_THE_RECORD","RED_HERRING","FOR_THE_PEOPLE"],"image":"US_charSelect_portrait"},{"description":"谢丽尔·梅森是一名经受过恐怖洗礼的年轻人，能使她自己和队友倍感振奋。<br><br>她的专属技能包括<b>灵魂守卫</b>、<b>鲜血契约</b>和<b>压抑同盟</b>，可以让她在艰难困苦中存活下来，并与其他队友保持联系，制定好逃脱策略。","name":"谢丽尔·梅森","id":22,"index":"CHERYL_MASON","difficulty":0,"perks":["SOUL_GUARD","BLOOD_PACT","REPRESSED_ALLIANCE"],"image":"S22_charSelect_portrait"},{"description":"一个远见卓识的建筑师，能够运用他的不懈决心来制定计划并帮助其他幸存者。<br><br>他的专属技能<b>远见</b>、<b>绝境对策</b>与<b>经久耐用</b>可以让他找到发电机、救助其他逃生者并最大化利用自己的工具。","name":"菲利克斯·里奇特","id":23,"index":"FELIX_RICHTER","difficulty":1,"perks":["VISIONARY","DESPERATE_MEASURES","BUILT_TO_LAST"],"image":"S23_charSelect_portrait"},{"description":"一名神秘学调查员，靠着狡猾的招数和顽固的决心让自己始终远离死亡。<br><br>她的专属技能，<b>鉴定</b>，<b>欺骗</b>和<b>强力挣扎</b>让她能够与物品以新方式进行互动，并且还有逃离杀手的备用方案。 ","name":"伊洛迪·拉科托","id":24,"index":"ELODIE_RAKOTO","difficulty":1,"perks":["APPRAISAL","DECEPTION","POWER_STRUGGLE"],"image":"S24_charSelect_portrait"},{"description":"一个注重自我的音乐制作人，能够在动荡时代实现自己的目标。<br><br>她的专属技能，<b>成功捷径</b>，<b>轰动演出</b>和<b>自我保护</b>能使她在其他人受到伤害时提升她自己的能力，并且可以快速逃脱追杀。 ","name":"李允珍","id":25,"index":"YUN_JIN_LEE","difficulty":0,"perks":["FAST_TRACK","SMASH_HIT","SELF_PRESERVATION"],"image":"S25_charSelect_portrait"},{"description":"吉儿·瓦伦丁是S.T.A.R.S.的创始成员之一，曾战胜过数不清的有机生物武器。<br><br>她的专属技能<b>反制之力</b>、<b>东山再起</b>和<b>爆炸地雷</b>使她可以立刻还击，同时还能为队友提供强力支援。 ","name":"吉儿·瓦伦丁","id":26,"index":"JILL_VALENTINE","difficulty":1,"perks":["COUNTERFORCE","RESURGENCE","BLAST_MINE"],"image":"S26_charSelect_portrait"},{"description":"里昂·S·肯尼迪是一名新手警员，在浣熊市的灾难爆发期间完成了超出自己职责的使命。<br><br>他的专属技能<b>咬紧牙关</b>、<b>闪光弹</b>和<b>新人精神</b>让他可以无视疼痛、扰乱杀手以及追踪丢失的目标。 ","name":"里昂·S·肯尼迪","id":27,"index":"LEON_SCOTT_KENNEDY","difficulty":1,"perks":["BITE_THE_BULLET","FLASHBANG","ROOKIE_SPIRIT"],"image":"S27_charSelect_portrait"}]');

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
  !*** ./zh/index.ts ***!
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
/* harmony import */ var _src_lib_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/lib/locales/zh */ "./src/lib/locales/zh.ts");






var Client = function Client() {
  return new _src_lib__WEBPACK_IMPORTED_MODULE_3__.default(_src_lib_locales_zh__WEBPACK_IMPORTED_MODULE_4__.default);
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=deadbydaylight.js.map