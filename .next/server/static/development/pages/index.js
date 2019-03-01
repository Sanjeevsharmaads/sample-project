module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js?4aa6":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js?85f2":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js?061b":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js?4d16":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js?67bb":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js?5d58":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js?85f2");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js?85f2");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js?061b");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js?4d16");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js?4aa6");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js?4d16");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js?5d58");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js?67bb");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/string-hash/index.js?f64c":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js?6d56":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js?de78":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js?49eb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js?49eb":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js?f64c"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js?6d56"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js?de78")


/***/ }),

/***/ "./pages/Navigation.js":
/*!*****************************!*\
  !*** ./pages/Navigation.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\Navigation.js";



var Navigation = function Navigation() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1344866986",
    __self: this
  }, ".hr-class.jsx-1344866986{display:block;border:1px;height:1px;background-color:#e1e1e1;margin-top:110px;right:0;left:0;position:absolute;z-index:-1;}.heading-top.jsx-1344866986{color:white;text-align:center;padding-top:10px;padding-bottom:10px;}.nav-list.jsx-1344866986{position:relative;top:50px;}.list-item.jsx-1344866986{position:relative;float:left;list-style-type:none;margin-right:65px;}span.jsx-1344866986{font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQURTQWRtaW5cXGRlc2t0b3BcXG5laW1hbm1hcmN1c1xccGFnZXNcXE5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWMsQUFHbUIsQUFZSCxBQU9NLEFBS0EsQUFPSCxZQWxCRyxFQVpILENBK0JmLEdBWlMsQUFLRSxPQXZCSSxFQW1CZixFQUtxQixDQVpKLE1BWFksV0FZVCxHQWFGLFdBeEJHLE1BYXJCLENBWUEsVUF4QlksUUFDRCxPQUNXLGtCQUNQLFdBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxBRFNBZG1pblxcZGVza3RvcFxcbmVpbWFubWFyY3VzXFxwYWdlc1xcTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiAoXHJcblx0PGRpdj5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0LmhyLWNsYXNze1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHRcdFx0Ym9yZGVyOiAxcHg7XHJcbiAgICBcdFx0XHRoZWlnaHQ6IDFweDtcclxuICAgXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xyXG4gICBcdFx0XHRcdG1hcmdpbi10b3A6IDExMHB4O1xyXG4gICAgXHRcdFx0cmlnaHQ6IDA7XHJcbiAgICBcdFx0XHRsZWZ0OiAwO1xyXG4gICBcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgXHRcdFx0XHR6LWluZGV4OiAtMTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmhlYWRpbmctdG9we1xyXG5cdFx0XHRcdGNvbG9yOndoaXRlO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOjEwcHg7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206MTBweDtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0Lm5hdi1saXN0e1xyXG5cdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdHRvcDo1MHB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubGlzdC1pdGVte1xyXG5cdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdGZsb2F0OmxlZnQ7XHJcblx0XHRcdFx0bGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OjY1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0c3BhbntcclxuXHRcdFx0XHRmb250LXNpemU6MTJweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdGB9PC9zdHlsZT5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuXHRcdFx0PGhyIGNsYXNzTmFtZT1cImhyLWNsYXNzXCIgLz5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdi1saXN0XCI+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPjxzcGFuPkRFU0lHTkVSUzwvc3Bhbj48L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj48c3Bhbj5XT01FTidTIENMT1RISU5HPC9zcGFuPjwvbGk+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPjxzcGFuPkNPTlRFTVBPUkFSWTwvc3Bhbj48L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj48c3Bhbj5TSE9FUzwvc3Bhbj48L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj48c3Bhbj5IQU5EQkFHUzwvc3Bhbj48L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj48c3Bhbj5KRVdFTExFUlk8L3NwYW4+PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+PHNwYW4+QkVBVVRZPC9zcGFuPjwvbGk+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPjxzcGFuPk1FTjwvc3Bhbj48L2xpPlxyXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj48c3Bhbj5LSURTPC9zcGFuPjwvbGk+XHJcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPjxzcGFuPkhPTUU8L3NwYW4+PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+PHNwYW4+R0lGVFM8L3NwYW4+PC9saT5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+PHNwYW4+U0FMRTwvc3Bhbj48L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247Il19 */\n/*@ sourceURL=C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\Navigation.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1344866986" + " " + "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-1344866986" + " " + "hr-class",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1344866986" + " " + "nav-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "DESIGNERS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "WOMEN'S CLOTHING")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "CONTEMPORARY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "SHOES")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "HANDBAGS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "JEWELLERY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "BEAUTY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "MEN")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "KIDS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "HOME")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "GIFTS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1344866986" + " " + "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1344866986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "SALE")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./pages/ProductComponent.js":
/*!***********************************!*\
  !*** ./pages/ProductComponent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\ProductComponent.js";




var ProductComponent = function ProductComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4041299478",
    dynamic: [props.imageURL, props.imageHoverURL],
    __self: this
  }, ".main-div.__jsx-style-dynamic-selector{width:25%;float:left;}.img-link.__jsx-style-dynamic-selector{background-image:url(".concat(props.imageURL, ");margin-right:10px;margin-left:10px;height:350px;width:278px;}.img-link.__jsx-style-dynamic-selector:hover{background-image:url(").concat(props.imageHoverURL, ");}.Content.__jsx-style-dynamic-selector{text-align:center;}.Mybutton.__jsx-style-dynamic-selector{background-color:#ffffff;border:1px solid #888888;}.complete-div.__jsx-style-dynamic-selector{position:relative;top:-15px;}.textname.__jsx-style-dynamic-selector{text-align:center;}.description.__jsx-style-dynamic-selector{text-align:center;position:relative;top:-16px;color:#000;font-size:12px;line-height:15px;-webkit-letter-spacing:.0625em;-moz-letter-spacing:.0625em;-ms-letter-spacing:.0625em;letter-spacing:.0625em;text-align:center;}.myprice.__jsx-style-dynamic-selector{text-align:center;position:relative;top:-16px;}.myprice.__jsx-style-dynamic-selector{position:relative;top:-28px;}.heart-cls.__jsx-style-dynamic-selector{background:transparent;border:none;}.discount.__jsx-style-dynamic-selector{color:#b00000;font-weight:700;margin-left:5px;}.mybut.__jsx-style-dynamic-selector{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQURTQWRtaW5cXGRlc2t0b3BcXG5laW1hbm1hcmN1c1xccGFnZXNcXFByb2R1Y3RDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2dCLEFBR2lCLEFBSzBDLEFBUUQsQUFHakMsQUFHTyxBQUlQLEFBSUEsQUFHQyxBQVVBLEFBS0EsQUFJSyxBQUtSLEFBTUwsVUEzREEsQUE0RFgsSUFOa0IsSUF0Q2xCLEFBT1UsQUFJVixBQUdtQixBQVVBLEFBS1AsR0E1Q1osRUFnRGEsRUE5QlksR0FLekIsQUFzQkEsRUFTaUIsS0FMakIsQ0FuQlcsQUFVQSxVQVRDLEFBVVosQUFjQSxJQXBDQSxDQWZrQixBQVFsQixNQW9CaUIsWUEzQkEsR0E0QkUsY0EzQk4sR0E0QlksVUEzQmIsWUFDWix1RkEyQm9CLGtCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFEU0FkbWluXFxkZXNrdG9wXFxuZWltYW5tYXJjdXNcXHBhZ2VzXFxQcm9kdWN0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IFByb2R1Y3RDb21wb25lbnQgPSAocHJvcHMpID0+IChcclxuXHJcblx0PGRpdj5cclxuICAgIDxoZWFkPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxyXG4gICAgPC9oZWFkPlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLm1haW4tZGl2e1xyXG4gICAgICBcdHdpZHRoOjI1JTtcclxuICAgICAgXHRmbG9hdDpsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW1nLWxpbmt7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtwcm9wcy5pbWFnZVVSTH0pO1xyXG4gICAgICBcdG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gICAgICBcdG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgIFx0aGVpZ2h0OjM1MHB4O1xyXG4gICAgICBcdHdpZHRoOjI3OHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW1nLWxpbms6aG92ZXJ7XHJcbiAgICAgIFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoJHtwcm9wcy5pbWFnZUhvdmVyVVJMfSk7XHJcbiAgICAgIH1cclxuICAgICAgLkNvbnRlbnQge1xyXG4gICAgICBcdHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5NeWJ1dHRvbiB7XHJcbiAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgICBcdGJvcmRlcjoxcHggc29saWQgIzg4ODg4ODtcclxuICAgICAgfVxyXG4gICAgICAuY29tcGxldGUtZGl2e1xyXG4gICAgICBcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICBcdHRvcDotMTVweDtcclxuICAgICAgfVxyXG4gICAgICAudGV4dG5hbWUge1xyXG4gICAgICBcdHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcdCAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHQgIHRvcDogLTE2cHg7XHJcbiAgICAgICAgY29sb3I6IzAwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4wNjI1ZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5teXByaWNle1xyXG4gICAgICBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIFx0dG9wOiAtMTZweDtcclxuICAgICAgfVxyXG4gICAgICAubXlwcmljZXtcclxuICAgICAgXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMjhweDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhcnQtY2xze1xyXG4gICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgY29sb3I6ICNiMDAwMDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5teWJ1dCB7XHJcbiAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG5cdCAgXHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZGl2XCIgPlxyXG4gICAgICAgICAgXHJcblx0ICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiaW1nLWxpbmtcIj48L2Rpdj5cclxuXHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge3Byb3BzLmNoYW5nZUhlYXJ0KGUscHJvcHMuaWQpfX0gY2xhc3NOYW1lPVwiaGVhcnQtY2xzXCI+PGkgY2xhc3NOYW1lPXtgJHtwcm9wcy5pc0ZhdiA/ICdmYSBmYS1oZWFydCcgOiAnZmEgZmEtaGVhcnQtbyd9YH0+PC9pPjwvYnV0dG9uPlxyXG5cdCAgICAgICBcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJNeWJ1dHRvblwiPjxhPlF1aWNrIExvb2s8L2E+PC9idXR0b24+XHJcblx0ICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGxldGUtZGl2XCI+XHJcbiAgICAgICAgIFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dG5hbWVcIj48aDQ+e3Byb3BzLm5hbWV9PC9oND48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPjxoND5TaW1hbiBSaWJiZWQgU2lkZSBaaXAtU3dlYXRlciA8L2g0Pjwvc3Bhbj5cclxuXHQgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZSA9XCJteXByaWNlXCI+XHJcblx0ICAgICAgIFx0XHQ8c3BhbiBjbGFzTmFtZT1cIm15cHJpY2Utc3BhblwiPntwcm9wcy5wcmljZX08L3NwYW4+IFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjb3VudFwiPntwcm9wcy5kaXNjb3VudGVkUHJpY2V9PC9zcGFuPlxyXG5cdCAgICAgICBcdDwvZGl2PlxyXG5cdCAgICAgPC9kaXY+XHJcblx0ICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDb21wb25lbnQiXX0= */\n/*@ sourceURL=C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\ProductComponent.js */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "main-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "img-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick(e) {
      props.changeHeart(e, props.id);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "heart-cls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "".concat(props.isFav ? 'fa fa-heart' : 'fa fa-heart-o'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "Mybutton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Quick Look"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "complete-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "textname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, props.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Siman Ribbed Side Zip-Sweater ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "myprice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    clasName: "myprice-span",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, props.price), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4041299478", [props.imageURL, props.imageHoverURL]]]) + " " + "discount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, props.discountedPrice)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductComponent);

/***/ }),

/***/ "./pages/ProductList.js":
/*!******************************!*\
  !*** ./pages/ProductList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ProductComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductComponent */ "./pages/ProductComponent.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _testdata_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../testdata.js */ "./testdata.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\ProductList.js";







var ProductList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductList, _React$Component);

  function ProductList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "isFavourie", function (arraytosearch, key, valuetosearch) {
      for (var i = 0; i < arraytosearch.length; i++) {
        if (arraytosearch[i][key] == valuetosearch) {
          return i;
        }
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeHeart", function (e, index) {
      console.log('hello');
      var tempProduct = _this.state.productList;

      var val = _this.isFavourie(_this.state.productList, "id", index);

      tempProduct[val]["isFav"] = !_this.state.productList[val]["isFav"];

      _this.setState({
        productList: tempProduct
      });
    });

    _this.state = {
      "productList": []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()('http://localhost:9000/getData', {
        method: 'get'
      }).then(function (response) {
        return response.json().then(function (data) {
          return _this2.setState({
            productList: data
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log('my data ' + this.state.productList[0]);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1737188616" + " " + "main-cls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-1737188616" + " " + "aheading-cls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Activewear"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1737188616",
        __self: this
      }, ".main-cls.jsx-1737188616{width:1215px;padding-top:300px;padding-left:300px;}.aheading-cls.jsx-1737188616{margin-bottom:20px;padding-bottom:15px;opacity:0.7;border-bottom:1px solid #d3d3d3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQURTQWRtaW5cXGRlc2t0b3BcXG5laW1hbm1hcmN1c1xccGFnZXNcXFByb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDZSxBQUdzQixBQU9PLGFBTkYsTUFPQyxZQU5BLFFBT1QsV0FMVixDQU1nQyxnQ0FDaEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxBRFNBZG1pblxcZGVza3RvcFxcbmVpbWFubWFyY3VzXFxwYWdlc1xcUHJvZHVjdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0Q29tcG9uZW50IGZyb20gJy4vUHJvZHVjdENvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL3Rlc3RkYXRhLmpzJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcblxyXG5cclxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9e1wicHJvZHVjdExpc3RcIjpbXX1cclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG5cdFx0ZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9nZXREYXRhJyx7XHJcblx0XHRcdG1ldGhvZDonZ2V0JyxcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PnJlc3BvbnNlLmpzb24oKVxyXG5cdFx0LnRoZW4oZGF0YSA9PnRoaXMuc2V0U3RhdGUoe3Byb2R1Y3RMaXN0OmRhdGF9KSkpO1xyXG5cdH1cclxuXHJcblx0aXNGYXZvdXJpZSA9IChhcnJheXRvc2VhcmNoLCBrZXksIHZhbHVldG9zZWFyY2gpID0+e1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheXRvc2VhcmNoLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChhcnJheXRvc2VhcmNoW2ldW2tleV0gPT0gdmFsdWV0b3NlYXJjaCkge1xyXG5cdCAgICBcdFx0cmV0dXJuIGk7XHJcblx0ICAgIFx0fVxyXG5cdCAgICB9XHJcbiAgICBcdHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblx0Y2hhbmdlSGVhcnQgPSAoZSxpbmRleCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ2hlbGxvJyk7XHJcblx0XHRjb25zdCB0ZW1wUHJvZHVjdCA9IHRoaXMuc3RhdGUucHJvZHVjdExpc3RcclxuXHRcdHZhciB2YWwgPSB0aGlzLmlzRmF2b3VyaWUodGhpcy5zdGF0ZS5wcm9kdWN0TGlzdCwgXCJpZFwiLGluZGV4KTtcclxuXHRcdHRlbXBQcm9kdWN0W3ZhbF1bXCJpc0ZhdlwiXSA9ICF0aGlzLnN0YXRlLnByb2R1Y3RMaXN0W3ZhbF1bXCJpc0ZhdlwiXVxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7cHJvZHVjdExpc3Q6dGVtcFByb2R1Y3R9KVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRjb25zb2xlLmxvZygnbXkgZGF0YSAnK3RoaXMuc3RhdGUucHJvZHVjdExpc3RbMF0pO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2xzXCI+XHJcblx0XHRcdDxoMiBjbGFzc05hbWU9XCJhaGVhZGluZy1jbHNcIj5BY3RpdmV3ZWFyPC9oMj5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdCAgICAgIC5tYWluLWNsc3tcclxuXHRcdCAgICAgIFx0d2lkdGg6MTIxNXB4O1xyXG5cdFx0ICAgICAgXHRwYWRkaW5nLXRvcDozMDBweDtcclxuXHRcdCAgICAgIFx0cGFkZGluZy1sZWZ0OjMwMHB4O1xyXG5cclxuXHRcdCAgICAgIH1cclxuXHJcblx0XHQgICAgICAuYWhlYWRpbmctY2xze1xyXG5cdFx0ICAgICAgXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgXHRcdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBcdFx0XHRvcGFjaXR5OjAuNztcclxuXHRcdCAgICAgIFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2QzZDNkMztcclxuXHRcdCAgICAgIH1cclxuXHJcbiAgICAgXHRcdGB9PC9zdHlsZT5cclxuXHJcblx0XHRcdFx0PGRpdiA+XHJcblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5wcm9kdWN0TGlzdC5tYXAoKGFiYyxpbmRleCkgPT4oXHJcblx0XHRcdFx0ICAgICAgIFx0PFByb2R1Y3RDb21wb25lbnQgaW5kZXg9e2FiYy5pbmRleH0gY2hhbmdlSW1hZ2U9e3RoaXMuY2hhbmdlSW1hZ2V9IGNoYW5nZUhlYXJ0PXt0aGlzLmNoYW5nZUhlYXJ0fSBpZD17YWJjLmlkfSBuYW1lPXthYmMubmFtZX0gcHJpY2U9e2FiYy5wcmljZX0gZGlzY291bnRlZFByaWNlPXthYmMuZGlzY291bnRlZFByaWNlfSBpc0V4Y2x1c2l2ZT17YWJjLmlzRXhjbHVzaXZlfSBpc0Zhdj17YWJjLmlzRmF2fSBpdGVtc0xlZnRJblN0b2NrPXthYmMuaXRlbXNMZWZ0SW5TdG9ja30gaXNQcmVPcmRlcj17YWJjLmlzUHJlT3JkZXJ9IGltYWdlVVJMPXthYmMuaW1hZ2VVUkx9IGltYWdlSG92ZXJVUkw9e2FiYy5pbWFnZUhvdmVyVVJMfS8+XHJcblx0XHRcdFx0ICAgICkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyJdfQ== */\n/*@ sourceURL=C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\ProductList.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1737188616",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, this.state.productList.map(function (abc, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ProductComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          index: abc.index,
          changeImage: _this3.changeImage,
          changeHeart: _this3.changeHeart,
          id: abc.id,
          name: abc.name,
          price: abc.price,
          discountedPrice: abc.discountedPrice,
          isExclusive: abc.isExclusive,
          isFav: abc.isFav,
          itemsLeftInStock: abc.itemsLeftInStock,
          isPreOrder: abc.isPreOrder,
          imageURL: abc.imageURL,
          imageHoverURL: abc.imageHoverURL,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        });
      })));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./pages/SearchBox.js":
/*!****************************!*\
  !*** ./pages/SearchBox.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\SearchBox.js";




var SearchBox = function SearchBox() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-125651237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", {
    className: "jsx-125651237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css",
    integrity: "sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",
    crossorigin: "anonymous",
    className: "jsx-125651237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-125651237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "125651237",
    __self: this
  }, ".main-box.jsx-125651237{position:relative;float:left;width:100%;}.logo-icon.jsx-125651237{background:url(\"https://www.neimanmarcus.com/assets/images/neiman-marcus-logo-full-width.f83de5ee12fba429f707cfc8307c7512.svg\") no-repeat;margin-top:10px;margin-bottom:10px;max-width:194px;height:76px;display:block;margin-left:650px;margin-right:auto;position:relative;float:left;width:50%;}.search-cls.jsx-125651237{position:relative;float:right;width:40%;}.sign-cls.jsx-125651237{position:relative;float:left;color:#333;left:250px;}.heart-cls.jsx-125651237{position:relative;float:left;margin-top:15px;margin-left:30px;left:250px;}.bg-cls.jsx-125651237{padding-right:20px;left:250px;}.bag-cls.jsx-125651237{position:relative;float:left;left:280px;}.bg-icon.jsx-125651237{margin-right:10px;margin-left:10px;}.in-cls.jsx-125651237{margin-top:10px;background-color:#fff;color:#000;border:1px solid #8b8b8b;border-radius:0;margin-left:80px;width:70%;height:26px;border-right:0;font-size:13px;}.btn-submit.jsx-125651237{background-color:black;color:#fff;width:90px;height:30px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQURTQWRtaW5cXGRlc2t0b3BcXG5laW1hbm1hcmN1c1xccGFnZXNcXFNlYXJjaEJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTYyxBQUdzQixBQUt3SCxBQWN4SCxBQUtBLEFBTUEsQUFPQyxBQUlELEFBTUEsQUFTRixBQVlPLGdCQVhBLEVBeERaLEFBbUJDLEFBS0QsQUFNQSxBQVdBLEFBTU0sQ0FWTixJQStCSyxNQW5FTCxBQXdCQSxBQU1LLEFBV0wsQ0FyQlosQUFpQkMsSUErQlcsQ0FyQlgsR0FTZSxFQXZEZixBQW1CQSxBQUtXLEFBaUJYLEtBWGlCLEFBc0NMLElBWmlCLEVBL0I3QixNQTRDWSxLQXRDRCxPQXVDWCxJQXRDQSxDQXlCb0IsZ0JBQ0MsaUJBQ1AsVUFDRSxZQUNHLFNBMURGLE1BMkRFLFVBMURJLEtBMkR2QixjQTFEb0IsZ0JBQ0osWUFDQyxjQUNLLGtCQUNELGtCQUNELGtCQUNQLFdBRWQsVUFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXEFEU0FkbWluXFxkZXNrdG9wXFxuZWltYW5tYXJjdXNcXHBhZ2VzXFxTZWFyY2hCb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY29uc3QgU2VhcmNoQm94ID0gKCkgPT4gKFxyXG5cdDxkaXY+XHJcblx0XHQ8aGVhZD5cclxuXHRcdFx0PGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNy4wL2Nzcy9hbGwuY3NzJyBpbnRlZ3JpdHk9J3NoYTM4NC1sWk4zN2Y1UUd0WTNWSGdpc1MxNFczRXh6TVdaeHliRTFTSlNFc1FwOVMrb3FkMTJqaGN1K0E1NkViYzF6RlNKJyBjcm9zc29yaWdpbj0nYW5vbnltb3VzJy8+XHJcblx0ICAgIFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cclxuXHRcdDwvaGVhZD5cclxuXHJcblx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdC5tYWluLWJveHtcclxuXHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdH1cclxuXHRcdFx0LmxvZ28taWNvbntcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybChcImh0dHBzOi8vd3d3Lm5laW1hbm1hcmN1cy5jb20vYXNzZXRzL2ltYWdlcy9uZWltYW4tbWFyY3VzLWxvZ28tZnVsbC13aWR0aC5mODNkZTVlZTEyZmJhNDI5ZjcwN2NmYzgzMDdjNzUxMi5zdmdcIikgbm8tcmVwZWF0O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRcdCAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdFx0XHQgICAgbWF4LXdpZHRoOiAxOTRweDtcclxuXHRcdFx0ICAgIGhlaWdodDogNzZweDtcclxuXHRcdFx0ICAgIGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdCAgICBtYXJnaW4tbGVmdDogNjUwcHg7XHJcbiAgXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgXHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBcdFx0XHRcdGZsb2F0OmxlZnQ7IFxyXG5cdFx0XHQgICAgd2lkdGg6NTAlXHQgICAgIFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuc2VhcmNoLWNsc3tcclxuXHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRmbG9hdDpyaWdodDtcclxuXHRcdFx0XHR3aWR0aDo0MCVcclxuXHRcdFx0fVxyXG5cdFx0XHQuc2lnbi1jbHN7XHJcblx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0ZmxvYXQ6bGVmdDtcclxuXHRcdFx0XHRjb2xvcjojMzMzO1xyXG5cdFx0XHRcdGxlZnQ6MjUwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LmhlYXJ0LWNsc3tcclxuXHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6MTVweDtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDozMHB4O1xyXG5cdFx0XHRcdGxlZnQ6MjUwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJnLWNsc3tcclxuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcblx0XHRcdFx0bGVmdDoyNTBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQuYmFnLWNsc3tcclxuXHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRmbG9hdDpsZWZ0O1xyXG5cdFx0XHRcdGxlZnQ6MjgwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5iZy1pY29ue1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDoxMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OjEwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5zYm94LWNsc3tcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5pbi1jbHN7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDoxMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRcdCAgICBjb2xvcjogIzAwMDtcclxuXHRcdFx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjhiOGI7XHJcblx0XHRcdCAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0XHQgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcblx0XHRcdCAgICB3aWR0aDogNzAlO1xyXG5cdFx0XHQgICAgaGVpZ2h0OiAyNnB4O1xyXG5cdFx0XHQgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG5cdFx0XHQgICAgZm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5idG4tc3VibWl0e1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcblx0XHRcdFx0ICAgIGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdHdpZHRoOjkwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OjMwcHg7XHJcblx0XHRcdFx0Ym9yZGVyOm5vbmU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRgfTwvc3R5bGU+XHJcblxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWJveFwiPlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ28taWNvblwiPjwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1jbHNcIj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic2lnbi1jbHNcIj5TaWduIEluIC8gUmVnaXN0ZXI8L3A+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0IGhlYXJ0LWNsc1wiPjwvaT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWctY2xzXCI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYmctY2xzXCI+U0hPUFBJTkcgQkFHPGkgY2xhc3NOYW1lPSdmYXMgZmEtc2hvcHBpbmctYmFnIGJnLWljb24nPjwvaT48L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzYm94LWNsc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCAgY2xhc3NOYW1lPVwiaW4tY2xzXCIgdHlwZT1cInRleHRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm94OyJdfQ== */\n/*@ sourceURL=C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\SearchBox.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-125651237" + " " + "main-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-125651237" + " " + "logo-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-125651237" + " " + "search-cls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-125651237" + " " + "sign-cls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Sign In / Register"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-125651237" + " " + "fa fa-heart heart-cls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-125651237" + " " + "bag-cls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-125651237" + " " + "bg-cls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "SHOPPING BAG", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-125651237" + " " + 'fas fa-shopping-bag bg-icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-125651237" + " " + "sbox-cls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "jsx-125651237" + " " + "in-cls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-125651237" + " " + "btn-submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Search")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./pages/TopHeader.js":
/*!****************************!*\
  !*** ./pages/TopHeader.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\TopHeader.js";



var TopHeader = function TopHeader() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1833626218",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1833626218",
    __self: this
  }, ".header-top.jsx-1833626218{position:relative;background-color:black;width:100%;height:39px;margin-top:-22px;margin-left:-8px;padding-right:16px;}.heading-top.jsx-1833626218{color:white;text-align:center;padding-top:10px;padding-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQURTQWRtaW5cXGRlc2t0b3BcXG5laW1hbm1hcmN1c1xccGFnZXNcXFRvcEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFYyxBQUdzQixBQVNOLFlBQ00sTUFUSyxZQVVOLFdBVE4sTUFVUyxLQVRSLFlBQ0ssR0FVakIsY0FUa0IsaUJBQ0ssbUJBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQURTQWRtaW5cXGRlc2t0b3BcXG5laW1hbm1hcmN1c1xccGFnZXNcXFRvcEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvcEhlYWRlciA9ICgpID0+IChcclxuXHQ8ZGl2PlxyXG5cdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHQuaGVhZGVyLXRvcHtcclxuXHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OjM5cHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDotMjJweDtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogLThweDtcclxuICAgIFx0XHRcdHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LmhlYWRpbmctdG9we1xyXG5cdFx0XHRcdGNvbG9yOndoaXRlO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOjEwcHg7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206MTBweDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRgfTwvc3R5bGU+XHJcblxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wXCI+XHJcblx0XHRcdDxoNCBjbGFzc05hbWU9XCJoZWFkaW5nLXRvcFwiPkZSRUUgU0hJUFBJTkcgKyBGUkVFIFJFVFVSTlMgRVZFUlkgREFZPC9oND5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BIZWFkZXI7Il19 */\n/*@ sourceURL=C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\TopHeader.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1833626218" + " " + "header-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1833626218" + " " + "heading-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "FREE SHIPPING + FREE RETURNS EVERY DAY")));
};

/* harmony default export */ __webpack_exports__["default"] = (TopHeader);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopHeader */ "./pages/TopHeader.js");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchBox */ "./pages/SearchBox.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Navigation */ "./pages/Navigation.js");
/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductList */ "./pages/ProductList.js");





var _jsxFileName = "C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\index.js";






var index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _React$Component);

  function index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TopHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SearchBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ProductList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./testdata.js":
/*!*********************!*\
  !*** ./testdata.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var jsonData = [{
  "id": "100001",
  "name": "Nike",
  "price": "$50",
  "discountedPrice": "Now $59",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/Y/U/2/NMTXYU2_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/Y/U/2/NMTXYU2_aa.jpg"
}, {
  "id": "10002",
  "name": "CUSHINE",
  "price": "$395",
  "discountedPrice": "",
  "isExclusive": true,
  "isFav": true,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/A/1/4/NMTYA14_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/A/1/4/NMTYA14_aa.jpg"
}, {
  "id": "100003",
  "name": "The Upside",
  "price": "$109",
  "isExclusive": false,
  "isFav": false,
  "color": "Black",
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/A/L/NMTY7AL_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/A/L/NMTY7AL_aa.jpg"
}, {
  "id": "100004",
  "name": "Champion Europe",
  "price": "$95",
  "isExclusive": false,
  "isFav": false,
  "color": "Raisin",
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/A/B/G/NMTYABG_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/A/B/G/NMTYABG_aa.jpg"
}, {
  "id": "100005",
  "name": "Alo Yoga",
  "price": "$ 88",
  "discountedPrice": "Now $ 104",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTYFL7_QZ_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTYFL7_QZ_a?&wid=304&height=380"
}, {
  "id": "100006",
  "name": "Spritual Gangster",
  "price": "$48",
  "discountedPrice": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/S/3/NMTY7S3_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/S/3/NMTY7S3_aa.jpg"
}, {
  "id": "100007",
  "name": "Onzie",
  "price": "$46",
  "discountedPrice": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/D/2/E/NMTYD2E_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/D/2/E/NMTYD2E_aa.jpg"
}, {
  "id": "100008",
  "name": "The Upside",
  "price": "$79",
  "discountedPrice": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/A/H/NMTY7AH_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/A/H/NMTY7AH_aa.jpg"
}, {
  "id": "100009",
  "name": "The Upside",
  "price": "$79",
  "discountedPrice": "Now $59",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/X/B/F/5/NMTXBF5_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/X/B/F/5/NMTXBF5_aa.jpg"
}, {
  "id": "100010",
  "name": "CUSHNIE",
  "price": "$225",
  "discountedPrice": "",
  "isExclusive": true,
  "isFav": true,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/A/1/8/NMTYA18_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/A/1/8/NMTYA18_aa.jpg"
}, {
  "id": "100011",
  "name": "CUSHINE",
  "price": "$195",
  "isExclusive": false,
  "isFav": false,
  "color": "Black",
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/I/1/Q/7/3/NMI1Q73_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/I/1/Q/7/3/NMI1Q73_aa.jpg"
}, {
  "id": "100012",
  "name": "Spritual Gangster",
  "price": "$88",
  "isExclusive": false,
  "isFav": false,
  "color": "Raisin",
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/S/5/NMTY7S5_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/S/5/NMTY7S5_aa.jpg"
}, {
  "id": "100013",
  "name": "Nike",
  "price": "$55",
  "discountedPrice": "",
  "preOrder": "Pre Oder",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/Y/U/0/NMTXYU0_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/Y/U/0/NMTXYU0_aa.jpg"
}, {
  "id": "100014",
  "name": "The Upside",
  "price": "$109",
  "discountedPrice": "",
  "preOrder": "Pre Oder",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXEL5_01_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXEL5_01_a?&wid=304&height=380"
}, {
  "id": "100015",
  "name": "Ultracor",
  "price": "$198",
  "discountedPrice": "",
  "preOrder": "Pre Oder",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/K/H/5/NMTYKH5_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/K/H/5/NMTYKH5_aa.jpg"
}, {
  "id": "100016",
  "name": "Blanc Noir",
  "price": "$159",
  "discountedPrice": "NOW $69",
  "preOrder": "",
  "itemLeft": "Only 1 Left",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTY9HW_LL_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTY9HW_LL_a?&wid=304&height=380"
}, {
  "id": "100017",
  "name": "Onzine",
  "price": "$78",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/G/G/H/NMTYGGH_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/G/G/H/NMTYGGH_aa.jpg"
}, {
  "id": "100018",
  "name": "Ultracor",
  "price": "$198",
  "discountedPrice": "",
  "preOrder": "Exclusive",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/X/C/3/T/NMTXC3T_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/X/C/3/T/NMTXC3T_aa.jpg"
}, {
  "id": "100019",
  "name": "Nike",
  "price": "$30",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/G/8/N/NMTXG8N_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/G/8/N/NMTXG8N_aa.jpg"
}, {
  "id": "100020",
  "name": "Alo Yoga",
  "price": "$104",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/8/S/NMTY78S_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/8/S/NMTY78S_aa.jpg"
}, {
  "id": "100021",
  "name": "Alo Yoga",
  "price": "$118",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/8/V/NMTY78V_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/8/V/NMTY78V_aa.jpg"
}, {
  "id": "100022",
  "name": "Nike",
  "price": "$70",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/G/9/0/NMTXG90_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/G/9/0/NMTXG90_aa.jpg"
}, {
  "id": "100023",
  "name": "Tory Sport",
  "price": "$133",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/Q/2/NMTY7Q2_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/Q/2/NMTY7Q2_aa.jpg"
}, {
  "id": "100024",
  "name": "Onzie",
  "price": "$50",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/G/G/G/NMTYGGG_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/G/G/G/NMTYGGG_aa.jpg"
}, {
  "id": "100025",
  "name": "Onzie",
  "price": "$46",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/D/2/C/NMTYD2C_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/D/2/C/NMTYD2C_aa.jpg"
}, {
  "id": "100026",
  "name": "Ultracor",
  "price": "$198",
  "discountedPrice": "NOW $99",
  "preOrder": "Exclusive",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/H/E/R/NMTXHER_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/H/E/R/NMTXHER_aa.jpg"
}, {
  "id": "100027",
  "name": "Tory Sport",
  "price": "$328",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/0/5/0/NMTY050_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/0/5/0/NMTY050_aa.jpg"
}, {
  "id": "100028",
  "name": "Nike",
  "price": "$35",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/I/1/M/3/F/NMI1M3F_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/I/1/M/3/F/NMI1M3F_aa.jpg"
}, {
  "id": "100029",
  "name": "Tory Sport",
  "price": "$598",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/0/5/9/NMTY059_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/0/5/9/NMTY059_aa.jpg"
}, {
  "id": "100030",
  "name": "ALo Yoga",
  "price": "$108",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/Y/7/9/2/NMTY792_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/Y/7/9/2/NMTY792_aa.jpg"
}, {
  "id": "100031",
  "name": "ALo Yoga",
  "price": "$56",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/8/T/NMTY78T_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/8/T/NMTY78T_aa.jpg"
}, {
  "id": "100032",
  "name": "Nike",
  "price": "$30",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/G/8/F/NMTXG8F_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/G/8/F/NMTXG8F_aa.jpg"
}, {
  "id": "100033",
  "name": "Blanc Noir",
  "price": "$199",
  "discountedPrice": "NOW 149",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/T/5/3/NMTXT53_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/T/5/3/NMTXT53_aa.jpg"
}, {
  "id": "100034",
  "name": "Varley",
  "price": "$138",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTX1U6_11_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTX1U6_11_a?&wid=304&height=380"
}, {
  "id": "100035",
  "name": "Ultracor",
  "price": "$108",
  "discountedPrice": "NOW $154",
  "preOrder": "Exclusive",
  "itemLeft": "Only 1 left",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": 1,
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/6/product_assets/T/W/R/7/B/NMTWR7B_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/6/product_assets/T/W/R/7/B/NMTWR7B_aa.jpg"
}, {
  "id": "100036",
  "name": "Tory Sport",
  "price": "$78",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTYFZQ_40_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTYFZQ_40_a?&wid=304&height=380"
}, {
  "id": "100037",
  "name": "Onzie",
  "price": "$54",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/C/8/X/NMTYC8X_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/C/8/X/NMTYC8X_aa.jpg"
}, {
  "id": "100038",
  "name": "Alo Yoga",
  "price": "$72",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTY78U_01_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTY78U_01_a?&wid=304&height=380"
}, {
  "id": "100039",
  "name": "Varley",
  "price": "$118",
  "discountedPrice": "NOW $88",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/F/2/L/NMTXF2L_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/F/2/L/NMTXF2L_aa.jpg"
}, {
  "id": "100040",
  "name": "Spritual Gangster",
  "price": "$68",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/Y/7/S/1/NMTY7S1_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/Y/7/S/1/NMTY7S1_aa.jpg"
}, {
  "id": "100041",
  "name": "Black Noir",
  "price": "$139",
  "discountedPrice": "NOW $104",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXT57_01_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXT57_01_a?&wid=304&height=380"
}, {
  "id": "100042",
  "name": "Tory Sport",
  "price": "$88",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/Q/9/NMTY7Q9_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/Q/9/NMTY7Q9_aa.jpg"
}, {
  "id": "100043",
  "name": "Ultracor",
  "price": "$196",
  "discountedPrice": "NOW $147",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXT57_10_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXT57_10_a?&wid=304&height=380"
}, {
  "id": "100044",
  "name": "Adidas by Stella McCartney",
  "price": "$100",
  "discountedPrice": "NOW $175",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/X/A/Y/H/NMTXAYH_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/X/A/Y/H/NMTXAYH_ba.jpg"
}, {
  "id": "100045",
  "name": "Black Noir",
  "price": "$159",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/W/L/M/G/NMTWLMG_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/W/L/M/G/NMTWLMG_aa.jpg"
}, {
  "id": "100046",
  "name": "Varley",
  "price": "$68",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/G/Y/G/NMTYGYG_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/G/Y/G/NMTYGYG_aa.jpg"
}, {
  "id": "100047",
  "name": "Spritual Gangster",
  "price": "$78",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/Y/7/S/6/NMTY7S6_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/Y/7/S/6/NMTY7S6_aa.jpg"
}, {
  "id": "100048",
  "name": "Under Armor",
  "price": "$55",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/F/K/T/NMTYFKT_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/F/K/T/NMTYFKT_aa.jpg"
}, {
  "id": "100049",
  "name": "Blanc Noir",
  "price": "$149",
  "discountedPrice": "NOW $111",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXT54_40_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXT54_40_a?&wid=304&height=380"
}, {
  "id": "100050",
  "name": "Onzie",
  "price": "$88",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/Y/8/B/X/NMTY8BX_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/Y/8/B/X/NMTY8BX_aa.jpg"
}, {
  "id": "100051",
  "name": "Ultracor",
  "price": "$198",
  "discountedPrice": "",
  "preOrder": "Exclusive",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/3/product_assets/T/X/H/F/T/NMTXHFT_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/3/product_assets/T/X/H/F/T/NMTXHFT_ba.jpg"
}, {
  "id": "100052",
  "name": "Varley",
  "price": "$100",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/G/Y/N/NMTYGYN_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/G/Y/N/NMTYGYN_aa.jpg"
}, {
  "id": "100053",
  "name": "Under Armour",
  "price": "$60",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/I/1/Q/U/F/NMI1QUF_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/I/1/Q/U/F/NMI1QUF_aa.jpg"
}, {
  "id": "100054",
  "name": "Spiritual Gangster",
  "price": "$48",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/Y/7/S/2/NMTY7S2_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/Y/7/S/2/NMTY7S2_aa.jpg"
}, {
  "id": "100055",
  "name": "Under Armour",
  "price": "$55",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/F/L/0/NMTYFL0_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/F/L/0/NMTYFL0_aa.jpg"
}, {
  "id": "100056",
  "name": "Onzie",
  "price": "$64",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/Y/8/B/V/NMTY8BV_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/Y/8/B/V/NMTY8BV_aa.jpg"
}, {
  "id": "100057",
  "name": "Terez",
  "price": "$96",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/6/G/8/NMTX6G8_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/6/G/8/NMTX6G8_aa.jpg"
}, {
  "id": "100058",
  "name": "Nike",
  "price": "$65",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/W/R/9/8/NMTWR98_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/W/R/9/8/NMTWR98_aa.jpg"
}, {
  "id": "100059",
  "name": "Ultracor",
  "price": "$275",
  "discountedPrice": "NOW 206",
  "preOrder": "Exclusive",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/W/Z/J/T/NMTWZJT_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/W/Z/J/T/NMTWZJT_aa.jpg"
}, {
  "id": "100060",
  "name": "Varley",
  "price": "$106",
  "discountedPrice": "",
  "preOrder": "More colors Avaliable",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/Y/G/0/F/NMTYG0F_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/Y/G/0/F/NMTYG0F_aa.jpg"
}, {
  "id": "100061",
  "name": "Frank and Eileen Tea Lab",
  "price": "$198",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/1/2/NMTY712_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/1/2/NMTY712_aa.jpg"
}, {
  "id": "100062",
  "name": "Blank Noir",
  "price": "$159",
  "discountedPrice": "NOW $119",
  "preOrder": "Pre Order",
  "itemLeft": "Only 1 Left!",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/T/5/1/NMTXT51_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/T/5/1/NMTXT51_aa.jpg"
}, {
  "id": "100063",
  "name": "Onzie",
  "price": "$70",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/8/B/T/NMTY8BT_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/8/B/T/NMTY8BT_aa.jpg"
}, {
  "id": "100064",
  "name": "Terez",
  "price": "$82",
  "discountedPrice": "NOW $61",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/E/E/7/NMTXEE7_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/E/E/7/NMTXEE7_aa.jpg"
}, {
  "id": "100065",
  "name": "Varley",
  "price": "$110",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXEL5_01_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXEL5_01_a?&wid=304&height=380"
}, {
  "id": "100066",
  "name": "Frank and Elieen Tea Lab",
  "price": "$125",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/0/W/NMTY70W_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/0/W/NMTY70W_aa.jpg"
}, {
  "id": "100067",
  "name": "Nike",
  "price": "$65",
  "discountedPrice": "NOW $48",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/X/B/0/8/NMTXB08_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/X/B/0/8/NMTXB08_aa.jpg"
}, {
  "id": "100068",
  "name": "Ultracor",
  "price": "$198",
  "discountedPrice": "",
  "preOrder": "Exclusive",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/X/Z/8/3/NMTXZ83_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/X/Z/8/3/NMTXZ83_aa.jpg"
}, {
  "id": "100069",
  "name": "Tory Sport",
  "price": "$228",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/W/5/Y/9/NMTW5Y9_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/W/5/Y/9/NMTW5Y9_aa.jpg"
}, {
  "id": "100070",
  "name": "Spiritual Gangster",
  "price": "$48",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/S/J/NMTY7SJ_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/S/J/NMTY7SJ_aa.jpg"
}, {
  "id": "100071",
  "name": "Beyond Yoga",
  "price": "$99",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXGEK_03_m?&wid=304&height=380",
  "imageHoverURL": "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMTXGEK_03_a?&wid=304&height=380"
}, {
  "id": "100072",
  "name": "Vvarley",
  "price": "$70",
  "discountedPrice": "NOW $35",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/I/1/S/2/D/NMI1S2D_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/I/1/S/2/D/NMI1S2D_aa.jpg"
}, {
  "id": "100073",
  "name": "",
  "price": "$160",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/Y/J/U/3/NMTYJU3_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/Y/J/U/3/NMTYJU3_aa.jpg"
}, {
  "id": "100074",
  "name": "Nike",
  "price": "$65",
  "discountedPrice": "NOW $48",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/X/B/0/5/NMTXB05_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/X/B/0/5/NMTXB05_aa.jpg"
}, {
  "id": "100075",
  "name": "Frank and Elieen Tea Lab",
  "price": "$102",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/0/Z/NMTY70Z_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/0/Z/NMTY70Z_aa.jpg"
}, {
  "id": "100076",
  "name": "Sprituial Gangster",
  "price": "$58",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/3/product_assets/T/Y/7/S/H/NMTY7SH_aa.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/3/product_assets/T/Y/7/S/H/NMTY7SH_ma.jpg"
}, {
  "id": "100077",
  "name": "Ultracor",
  "price": "$99",
  "discountedPrice": "",
  "preOrder": "Exclusive",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/H/F/W/NMTXHFW_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/H/F/W/NMTXHFW_aa.jpg"
}, {
  "id": "100078",
  "name": "Frank and Eileen Tea Lab",
  "price": "$98",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/Y/7/0/Y/NMTY70Y_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/Y/7/0/Y/NMTY70Y_aa.jpg"
}, {
  "id": "100079",
  "name": "Nike",
  "price": "$65",
  "discountedPrice": "NOW $48",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/B/0/Z/NMTXB0Z_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/B/0/Z/NMTXB0Z_aa.jpg"
}, {
  "id": "100080",
  "name": "Nike",
  "price": "$90",
  "discountedPrice": "NOW $67",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/B/0/R/NMTXB0R_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/B/0/R/NMTXB0R_aa.jpg"
}, {
  "id": "100081",
  "name": "Frank and Eileen Tea Lab",
  "price": "$298",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/2/product_assets/T/Y/7/1/0/NMTY710_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/2/product_assets/T/Y/7/1/0/NMTY710_aa.jpg"
}, {
  "id": "100082",
  "name": "Spritual Gangster",
  "price": "$58",
  "discountedPrice": "",
  "preOrder": "Pre Order",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/Y/7/S/F/NMTY7SF_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/Y/7/S/F/NMTY7SF_aa.jpg"
}, {
  "id": "100083",
  "name": "The Upside",
  "price": "$79",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/Z/Z/R/NMTXZZR_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/Z/Z/R/NMTXZZR_aa.jpg"
}, {
  "id": "100084",
  "name": "Terez",
  "price": "$96",
  "discountedPrice": "",
  "preOrder": "",
  "itemLeft": "",
  "isExclusive": true,
  "isFav": false,
  "itemsLeftInStock": "",
  "isPreOrder": false,
  "imageURL": "//images.neimanmarcus.com/ca/1/product_assets/T/X/U/F/W/NMTXUFW_ma.jpg",
  "imageHoverURL": "https://images.neimanmarcus.com/ca/1/product_assets/T/X/U/F/W/NMTXUFW_aa.jpg"
}];
/* harmony default export */ __webpack_exports__["default"] = (jsonData);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ADSAdmin\desktop\neimanmarcus\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map