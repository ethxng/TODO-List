/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/homepage.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/homepage.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".addTaskForm {\n    height: 300px;\n    width: 400px;\n    border: 4xp solid white;\n}", "",{"version":3,"sources":["webpack://./src/homepage.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;AAC3B","sourcesContent":[".addTaskForm {\n    height: 300px;\n    width: 400px;\n    border: 4xp solid white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    background-color: black;\n}\n\n.btn {\n    margin: 30px;\n    padding: 15px;\n    display: flex;\n    justify-content: space-between;\n    border: 3px solid gray;\n    border-bottom: none;\n}\n\n.menu{\n    font-size: 25px;\n    font-family: serif;\n    border: none;\n    color: white;\n    background-color: black;\n}\n\n.menu:hover{\n    color:#A5A58D;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB","sourcesContent":["body{\n    background-color: black;\n}\n\n.btn {\n    margin: 30px;\n    padding: 15px;\n    display: flex;\n    justify-content: space-between;\n    border: 3px solid gray;\n    border-bottom: none;\n}\n\n.menu{\n    font-size: 25px;\n    font-family: serif;\n    border: none;\n    color: white;\n    background-color: black;\n}\n\n.menu:hover{\n    color:#A5A58D;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/closestIndexTo/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/closestIndexTo/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closestIndexTo)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now, `closestIndexTo` doesn't throw an exception
 *   when the second argument is not an array, and returns Invalid Date instead.
 *
 * @param {Date | Number} dateToCompare - the date to compare with
 * @param {Array<Date> | Array<number>} datesArray - the array to search
 * @returns {Number | undefined} an index of the date closest to the given date or undefined if no valid value is given
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * const dateToCompare = new Date(2015, 8, 6)
 * const datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * const result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */

function closestIndexTo(dirtyDateToCompare, dirtyDatesArray) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  if (isNaN(Number(dateToCompare))) return NaN;
  var timeToCompare = dateToCompare.getTime();
  var datesArray; // `dirtyDatesArray` is undefined or null

  if (dirtyDatesArray == null) {
    datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate, index) {
    var currentDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);

    if (isNaN(Number(currentDate))) {
      result = NaN;
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());

    if (result == null || distance < Number(minDistance)) {
      result = index;
      minDistance = distance;
    }
  });
  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTomorrow/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTomorrow/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */

function isTomorrow(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/homepage.css":
/*!**************************!*\
  !*** ./src/homepage.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homepage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./homepage.css */ "./node_modules/css-loader/dist/cjs.js!./src/homepage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_homepage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_homepage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_homepage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_homepage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Database": () => (/* binding */ Database)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



// this class will store EVERYTHING about our application
class Database{
    constructor(){
        this.allProjects = [];
        this.allTasks = [];
    }

    get getAllProjects(){
        return this.allProjects;
    }

    get getAllTasks(){
        return this.allTasks;
    }

    set addProject(project){
        this.allProjects.push(project);
    }

    set addNewTask(task){
        this.allTasks.push(task);
    }

    set removeTask(arr){
        // arr[0] = title; arr[1] = dueDate
        let deletedTask;
        for (let i = 0; i < this.allTasks.length; i++){
            if (this.allTasks[i].getTitle === arr[0] && this.allTasks[i].getDueDate === arr[1]){
                deletedTask = this.allTasks[i];
                this.allTasks.splice(i, 1);
                i--;
            }
        }
        return deletedTask;
    }
}

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomepage": () => (/* binding */ createHomepage),
/* harmony export */   "fillOutHomePage": () => (/* binding */ fillOutHomePage),
/* harmony export */   "addTaskForm": () => (/* binding */ addTaskForm),
/* harmony export */   "addProjectForm": () => (/* binding */ addProjectForm),
/* harmony export */   "createTitle": () => (/* binding */ createTitle),
/* harmony export */   "createDate": () => (/* binding */ createDate),
/* harmony export */   "createPriorityList": () => (/* binding */ createPriorityList),
/* harmony export */   "createProjectList": () => (/* binding */ createProjectList),
/* harmony export */   "homepageButtonSetUp": () => (/* binding */ homepageButtonSetUp)
/* harmony export */ });
/* harmony import */ var _homepage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.css */ "./src/homepage.css");

function createHomepage(){
    const homepage = document.querySelector(".homepage");
    let addingOptions = document.createElement('div');
    addingOptions.style.cssText = "display: flex; align-items: flex-end; flex-direction: column; margin-right: 20px; margin-top: 30px";
    homepage.appendChild(addingOptions);

    let addTask = document.createElement('button');
    addTask.textContent = "+ Add Task";
    addTask.setAttribute('id', 'addTask');
    addTask.style.cssText = "color: lightyellow; padding: 10px; font-size: 25px; border:none; background-color: black";
    
    addTask.addEventListener('mouseover', () => {
        document.getElementById('addTask').style.cssText = "padding: 10px; font-size: 25px; border:none; color: #A0816C; background-color: black";
    });
    addTask.addEventListener('mouseout', () => {
        document.getElementById('addTask').style.cssText = "color: lightyellow; padding: 10px; font-size: 25px; border:none; background-color: black";
    });

    let addProject = document.createElement('button');
    addProject.textContent = "+ Add Project";
    addProject.setAttribute('id', 'addProject');
    addProject.style.cssText = "color: lightyellow; padding: 10px; font-size: 25px; border:none; background-color: black";
    
    addProject.addEventListener('mouseover', () => {
        document.getElementById('addProject').style.cssText = "padding: 10px; font-size: 25px; border:none; color: #A0816C; background-color: black";
    });
    addProject.addEventListener('mouseout', () => {
        document.getElementById('addProject').style.cssText = "color: lightyellow; padding: 10px; font-size: 25px; border:none; background-color: black";
    });

    addingOptions.appendChild(addTask);
    addingOptions.appendChild(addProject);
}

function fillOutHomePage(database){
    const homepage = document.querySelector(".homepage");
    // delet all boxes and start over before rendering again
    let allBox = document.querySelectorAll(".box");
    allBox.forEach((box) => {
        box.parentElement.removeChild(box);
    })
    let allTask = database.getAllTasks;
    if (allTask.length === 0){
        let announcement = document.createElement('div');
        announcement.textContent = "Nothing yet!";
        announcement.className = "announcement";
        announcement.style.cssText = "color: #AF9274; font-size: 60px; text-align: center";
        homepage.appendChild(announcement);
    }
    else{
        let nothingYet = document.querySelector(".announcement");
        if (nothingYet != null){
            nothingYet.parentElement.removeChild(nothingYet);
        }
        for (let i = 0; i < allTask.length; i++){
            let box = document.createElement('div');
            box.classList.add("box");
            if (allTask[i].getPriority === "High")
                box.style.cssText = "display: inline-block; border: 2px solid red; height: auto; width: 1200px";
            else if (allTask[i].getPriority === "Medium")
                box.style.cssText = "display: inline-block; border: 2px solid yellow; height: auto; width: 1200px";
            else if (allTask[i].getPriority === 'Low')
                box.style.cssText = "display: inline-block; border: 2px solid #03AC13; height: auto; width: 1200px";

            homepage.appendChild(box);

            //content of the task
            let info = document.createElement('div');
            // these class will be referenced when the button edit is clicked to change content
            info.classList.add("info");
            //info.innerHTML = allTask[i].getTitle + " by <strong><u>" + allTask[i].getDueDate + "</u></strong>";
            info.innerHTML = allTask[i].getTitle + " by " + allTask[i].getDueDate;
            info.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
            box.appendChild(info);

            let allButtons = document.createElement('div');
            allButtons.style.cssText = "float: right; padding: 10px; display: flex; gap: 10px";
            box.appendChild(allButtons);

            let edit = document.createElement('button');
            edit.textContent = "Edit";
            edit.className = "edit";
            edit.style.cssText = "font-size: 25px; border: none; background-color: black; color: gray";
            allButtons.appendChild(edit);

            let remove = document.createElement('button');
            remove.textContent = "Delete";
            remove.classList.add("delete");
            remove.style.cssText = "font-size: 25px; border: none; background-color: black; color: gray";
            allButtons.appendChild(remove);
        }
    }
}

function addTaskForm(projects){
    const homepage = document.querySelector(".homepage");
    let box = document.createElement('div');
    box.className = 'addTaskForm';
    box.style.cssText = "height: 450px; width: 450px; margin: auto; border: 3px solid white; display: none; margin-bottom: 15px";
    homepage.appendChild(box);

    // append all elements into div to create add form box
    box.appendChild(closeAndSubmitAddForm());
    box.appendChild(createIntro());
    box.appendChild(createTitle());
    //box.appendChild(createDescription());
    box.appendChild(createDate());
    box.append(createPriorityList());
    box.appendChild(createProjectList(projects));
}

function addProjectForm() {
    const homepage = document.querySelector(".homepage");
    let box = document.createElement('div');
    box.className = "addProjectForm";
    box.style.cssText = "height: 450px; width: 450px; margin: auto; border: 3px solid white; display: none";
    homepage.appendChild(box);

    box.appendChild(closeAndSubmitAddProject());
    box.appendChild(createIntro());
    let titleParent = createTitle();
    let title = titleParent.children;
    title[0].classList.add("titleInputProjectForm");
    box.appendChild(titleParent);
    //box.appendChild(createDescription());
}

function closeAndSubmitAddProject(){
    let btn = document.createElement('div');
    let submit = document.createElement('button');
    submit.setAttribute('id', 'addProjectSubmitBtn')
    let close = document.createElement('button');
    close.setAttribute('id', 'addProjectCloseBtn');
    submit.textContent = 'Add';
    close.textContent = 'Close';
    submit.style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    close.style.cssText = "font-size: 25px; border: none; background-color: black; color: white; border-left: none; border-top: none; border-bottom: none";
    btn.style.cssText = "text-align: end";

    //effects for add and close buttons above
    submit.addEventListener('mouseover', () => {
        document.querySelector("#addProjectSubmitBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: #9CC0E7";
    });

    submit.addEventListener('mouseout', () => {
        document.querySelector("#addProjectSubmitBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    });

    close.addEventListener("mouseover", () => {
        document.querySelector("#addProjectCloseBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: #9CC0E7";
    });

    close.addEventListener("mouseout", () => {
        document.querySelector("#addProjectCloseBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    });

    close.addEventListener("click", () => {
        document.querySelector(".addProjectForm").style.cssText = "display: none";
    });

    btn.appendChild(submit);
    btn.appendChild(close);
    return btn;
}

function closeAndSubmitAddForm(){
    let btn = document.createElement('div');
    let submit = document.createElement('button');
    submit.setAttribute('id', 'addFormSubmitBtn')
    let close = document.createElement('button');
    close.setAttribute('id', 'addFormCloseBtn');
    submit.textContent = 'Add';
    close.textContent = 'Close';
    submit.style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    close.style.cssText = "font-size: 25px; border: none; background-color: black; color: white; border-left: none; border-top: none; border-bottom: none";
    btn.style.cssText = "text-align: end";

    //effects for add and close buttons above
    submit.addEventListener('mouseover', () => {
        document.querySelector("#addFormSubmitBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: #9CC0E7";
    });

    submit.addEventListener('mouseout', () => {
        document.querySelector("#addFormSubmitBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    });

    close.addEventListener("mouseover", () => {
        document.querySelector("#addFormCloseBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: #9CC0E7";
    });

    close.addEventListener("mouseout", () => {
        document.querySelector("#addFormCloseBtn").style.cssText = "font-size: 25px; border: none; background-color: black; color: white";
    });

    close.addEventListener("click", () => {
        document.querySelector(".addTaskForm").style.cssText = "display: none";
        // clear all values before restarting the form
        document.querySelector(".titleInputAddTask").value = "";
        document.querySelector(".dateInputAddTask").value = '';
    });

    btn.appendChild(submit);
    btn.appendChild(close);
    return btn;
}

function createIntro(){
    let intro = document.createElement("div");
    intro.textContent = "TODO list";
    intro.style.cssText = "color: white; font-size: 25px; text-align: center; padding: 10px; font-samily: serif";
    return intro;
}

function createTitle(){
    let title = document.createElement('div');
    title.textContent = "Title:";
    title.style.cssText = "color: white; padding: 15px; font-size: 25px";
    let titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.placeholder = "Title";
    titleInput.classList.add("titleInputAddTask");
    titleInput.style.cssText = "margin-left: 30px; font-size: 25px";
    title.appendChild(titleInput);
    return title;
}

function createDate(){
    let date = document.createElement('div');
    date.textContent = "Due Date: ";
    date.style.cssText = "color: white; padding: 15px; font-size: 25px";
    let dateInput = document.createElement('input');
    dateInput.type = "date";
    dateInput.placeholder = "mm/dd/yyyy";
    dateInput.style.cssText = "font-size: 25px; margin-left: 10px";
    dateInput.className = "dateInputAddTask";
    date.appendChild(dateInput);
    return date;
}

function createPriorityList(){
    let priority = document.createElement('div');
    priority.textContent = "Priority:";
    priority.style.cssText = "color: white; padding: 15px; font-size: 25px";
    let dropDownList = document.createElement('select');
    dropDownList.setAttribute("id","dropDownPriority");
    dropDownList.style.cssText = "margin-left: 30px; padding: 5px; width: 140px; height: 30px; font-size: 15px";
    let priorityList = ["High", "Medium", "Low"];
    priority.appendChild(dropDownList);
    for (let i = 0; i < priorityList.length; i++){
        let a = document.createElement("option");
        a.textContent = priorityList[i];
        a.style.cssText = "color: black";
        dropDownList.appendChild(a);
    }
    return priority;
}

function createProjectList(projects){
    let addToProj = document.createElement('div');
    addToProj.textContent = "Add to Project: ";
    addToProj.style.cssText = "color: white; padding: 15px; font-size: 25px";
    let dropDownProj = document.createElement('select');
    dropDownProj.setAttribute('id', 'dropDownProject');
    dropDownProj.style.cssText = 'margin-left: 30px; padding: 5px; width: 140px; height: 30px; font-size: 15px';
    addToProj.appendChild(dropDownProj);
    let project = ["None"];
    // get all projects from database
    let projectList = projects.getAllProjects;
    for (let i = 0; i < projectList.length; i++){
        project.push(projectList[i].getProjectName);
    }
    for (let j = 0; j < project.length; j++){
        let b = document.createElement('option');
        b.textContent = project[j];
        dropDownProj.appendChild(b);
    }
    return addToProj;
}

function homepageButtonSetUp() {
    let addTask = document.querySelector("#addTask");
    addTask.addEventListener("click", () => {
        if (document.querySelector(".addProjectForm").style.display === "none")
            document.querySelector(".addTaskForm").style.cssText = "height: 450px; width: 450px; margin: auto; border: 3px solid white; display: block";
    });
    let addProject = document.querySelector("#addProject");
    addProject.addEventListener("click", () => {
        if (document.querySelector(".addTaskForm").style.display === "none"){
            document.querySelector(".addProjectForm").style.cssText = "height: 450px; width: 450px; margin: auto; border: 3px solid white; display: block";
        }
    });  
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    get getProjectName(){
        return this.name;
    }

    set setProjectName(val){
        this.name = val;
    }

    get getProject(){
        return this.tasks;
    }

    set addTask(task){
        this.tasks.push(task);
    }

    set cleanProject(value){
        // value is the new project that this "task" belongs to 
        // traverse through project array, if each task's belongTo != value, delete that task
        for (let i = 0; i < this.tasks.length; i++){
            if (this.tasks[i].getProjectName === value){
                this.tasks.splice(i, 1);
                i--;
            }
        }
    }

    set removeTask(array){
        // array[0] = title, array[1] = dueDate;
        for (let i = 0; i < this.tasks.length; i++){
            if (this.tasks[i].getTitle === array[0] && this.tasks[i].getDueDate === array[1]){
                this.tasks.splice(i, 1);
                i--;
            }
        }
    }
}

/***/ }),

/***/ "./src/projectPage.js":
/*!****************************!*\
  !*** ./src/projectPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectPage": () => (/* binding */ createProjectPage)
/* harmony export */ });
function createFramework(project){
    let box = document.createElement("div");
    box.classList.add("projectBox");
    box.style.cssText = "display: inline-block; border: 3px solid #45ADA8; height: auto; width: 1200px";

    let projectName = document.createElement('div');
    projectName.innerHTML = project.getProjectName + "<br>";
    projectName.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
    box.appendChild(projectName);

    let allTasks = project.getProject;
    for (let i = 0; i < allTasks.length; i++){
        let eachTask = document.createElement("li");
        eachTask.innerHTML = allTasks[i].getTitle + " by " + allTasks[i].getDueDate + "<br><br>";
        eachTask.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
        projectName.appendChild(eachTask);
    }
    return box;
}

function createProjectPage(database){
    let projectBox = document.querySelectorAll(".projectBox");
    projectBox.forEach((b) => {
        b.parentElement.removeChild(b);
    });

    let allProjects = database.getAllProjects;
    let projectPage = document.querySelector(".projectPage");
    let a = projectPage.hasChildNodes();
    if (a === true)
        projectPage.removeChild(projectPage.lastChild);
    for (let i = 0; i < allProjects.length; i++){
        // only render if there are tasks within a project
        if (allProjects[i].getProject.length != 0)
            projectPage.appendChild(createFramework(allProjects[i]));
    }
    let b = projectPage.hasChildNodes();
    if (b === false){
        let none = document.createElement("div");
        none.textContent = "Nothing here yet!";
        none.style.cssText = "color: #C06C84; font-size: 45px; text-align: center; margin-top: 50px";
        projectPage.appendChild(none);
    }
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setObject": () => (/* binding */ setObject),
/* harmony export */   "getObject": () => (/* binding */ getObject),
/* harmony export */   "clearDatabase": () => (/* binding */ clearDatabase),
/* harmony export */   "transformData": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database.js */ "./src/database.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");




function setObject(key, value){
    window.localStorage.setItem(key, JSON.stringify(value));
}

function getObject(key){
    let val = window.localStorage.getItem(key);
    return val && JSON.parse(val);
}

function clearDatabase(){
    window.localStorage.clear();
}

// value is the string obtained from localStorage
// this function will transform it into a valid database, then return it
function transformData(value){
    /*
    let newDatabase = new Database();
    let leng = res.allProjects.length;
    for (let i = 0; i < leng; i++){
        let name = res.allProjects[i].name;
        let proj = new Project(name);
        let allTasks = res.allProjects[i].tasks;
        for (let j = 0; j < allTasks.length; j++){
            let newTask = new task(allTasks[i].title, allTasks[i].description);
            proj.addTask = newTask;
            newDatabase.addNewTask = newTask;
    }
    newDatabase.addProject = proj;
    */
   let database = new _database_js__WEBPACK_IMPORTED_MODULE_0__.Database();
   let length = value.allProjects.length; 
   for (let i = 0; i < length; i++){
       let name = value.allProjects[i].name;
       let proj = new _project_js__WEBPACK_IMPORTED_MODULE_2__.Project(name);
       let allTasks = value.allProjects[i].tasks; // this is in the form of array
       for (let j = 0; j < allTasks.length; j++){
           let newTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task(allTasks[i].title, allTasks[i].dueDate, allTasks[i].priority, allTasks[i].belongTo);
           proj.addTask = newTask;
           database.addNewTask = newTask;
       }
       database.addProject = proj;
   }
   // add all tasks that have belongTo = null (those are not in allProjects because they don't belong to a project)
   for (let i = 0; i < value.allTasks.length; i++){
        if (value.allTasks[i].belongTo === null){
            let newTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task(value.allTasks[i].title, value.allTasks[i].dueDate, value.allTasks[i].priority, null);
            database.addNewTask = newTask;
        }
   }
   return database;
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, dueDate, priority, belongTo){
        this.title = title;
        //this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        // default of belongTo is null; when add to a project, then set it to something else
        this.belongTo = belongTo;
    }

    get getTitle(){
        return this.title;
    }

    get getDescription() {
        return this.description;
    }

    get getDueDate(){
        return this.dueDate;
    }

    get getPriority(){
        return this.priority;
    }

    get getProjectName(){
        return this.belongTo;
    }

    set changeTitle(value){
        this.title = value;
    }

    set changeDueDate(date){
        // make sure that due date is a valid due date first
        this.dueDate = date;
    }
    
    set changePriority(value){
        this.priority = value;
    }

    set changeProject(value){
        this.belongTo = value;
    }
}

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodayDate": () => (/* binding */ getTodayDate),
/* harmony export */   "createTodayTasks": () => (/* binding */ createTodayTasks)
/* harmony export */ });
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/isSameDay */ "./node_modules/date-fns/esm/isSameDay/index.js");


function createFramework(title, dueDate){
    let box = document.createElement('div');
    box.classList.add("todayBox");
    box.style.cssText = "display: inline-block; border: 3px solid #FF2400; height: auto; width: 1200px";
    //todayPage.appendChild(box);

    //content of the task
    let info = document.createElement('div');
    // these class will be referenced when the button edit is clicked to change content
    info.classList.add("todayInfo");
    info.innerHTML = title + " by " + dueDate;
    info.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
    box.appendChild(info);
    return box;
}

function getTodayDate(){
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    let today = yyyy + "-" + mm + '-' + dd;
    return today;
}

function createTodayTasks(database){
    let todayBox = document.querySelectorAll(".todayBox");
    todayBox.forEach((p) => {
        p.parentElement.removeChild(p);
    })
    let allTasks = database.getAllTasks;
    let today = getTodayDate();
    let todayPage = document.querySelector(".todayPage");
    if (todayPage.hasChildNodes())
        todayPage.removeChild(todayPage.lastChild);
    for (let i = 0; i < allTasks.length; i++){
        let truth = (0,date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(allTasks[i].getDueDate), (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(today));
        if (truth){
            todayPage.appendChild(createFramework(allTasks[i].getTitle, allTasks[i].getDueDate));
        }
    }

    // announce that there is no task if today page is empty
    if (!todayPage.hasChildNodes()){
        let none = document.createElement("div");
        none.textContent = "Nothing for today!";
        none.style.cssText = "color: #C06C84; font-size: 45px; text-align: center; margin-top: 50px";
        todayPage.appendChild(none);
    }
}

/***/ }),

/***/ "./src/tomorrow.js":
/*!*************************!*\
  !*** ./src/tomorrow.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTomorrowTasks": () => (/* binding */ createTomorrowTasks)
/* harmony export */ });
/* harmony import */ var date_fns_isTomorrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/isTomorrow */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/parseISO/index.js");


function createFramework(title, dueDate){
    let box = document.createElement("div");
    box.classList.add("tomorrowBox");
    box.style.cssText = "display: inline-block; border: 2px solid #D1C195; height: auto; width: 1200px";

    //content of the task
    let info = document.createElement('div');
    // these class will be referenced when the button edit is clicked to change content
    info.classList.add("tomorrowInfo");
    info.innerHTML = title + " by " + dueDate;
    info.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
    box.appendChild(info);
    return box;
}

function createTomorrowTasks(database){
    let allBox = document.querySelectorAll(".tomorrowBox");
    allBox.forEach((b) => {
        b.parentElement.removeChild(b);
    });

    let tomorrowPage = document.querySelector(".tomorrowPage");
    if (tomorrowPage.hasChildNodes())
        tomorrowPage.removeChild(tomorrowPage.lastChild);
    let allTasks = database.getAllTasks;
    for (let i = 0; i < allTasks.length; i++){
        if ((0,date_fns_isTomorrow__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(allTasks[i].getDueDate))){
            tomorrowPage.appendChild(createFramework(allTasks[i].getTitle, allTasks[i].getDueDate));
        }
    }

    if (!tomorrowPage.hasChildNodes()){
        let empty = document.createElement("div");
        empty.textContent = "Nothing is up tomorrow!";
        empty.style.cssText = "color: #C06C84; font-size: 45px; text-align: center; margin-top: 50px";
        tomorrowPage.appendChild(empty);
    }
}

/***/ }),

/***/ "./src/upcoming.js":
/*!*************************!*\
  !*** ./src/upcoming.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUpcomingTasks": () => (/* binding */ createUpcomingTasks)
/* harmony export */ });
/* harmony import */ var date_fns_isTomorrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isTomorrow */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns_closestIndexTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/closestIndexTo */ "./node_modules/date-fns/esm/closestIndexTo/index.js");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today.js */ "./src/today.js");





function createFramework(title, dueDate){
    let box = document.createElement("div");
    box.classList.add("upcomingBox");
    box.style.cssText = "display: inline-block; border: 3px solid #03AC13; height: auto; width: 1200px";

    let info = document.createElement('div');
    info.textContent = title + " by " + dueDate;
    info.style.cssText = "color: #B0B3B8; padding: 10px; float: left; font-size: 25px";
    box.appendChild(info);
    return box;
}

function sortDate(database){
    // sort date from closest to farthest from today
    let allTasks = [];
    for (let j = 0; j < database.getAllTasks.length; j++){
        allTasks.push((database.getAllTasks)[j]);
    }
    let allDate = [], sorted = [];
    for (let i = 0; i < allTasks.length; i++){
        let date = new Date((0,date_fns_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(allTasks[i].getDueDate));
        if (!(0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__["default"])(date) && !(0,date_fns_isTomorrow__WEBPACK_IMPORTED_MODULE_3__["default"])(date))
            allDate.push(date);
    }

    while (allDate.length != 0){
        let closestDate = (0,date_fns_closestIndexTo__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns_esm__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_today_js__WEBPACK_IMPORTED_MODULE_0__.getTodayDate)()), allDate);
        sorted.push(allTasks[closestDate]);
        allDate.splice(closestDate, 1);
        allTasks.splice(closestDate, 1);
    }
    return sorted;
}

function createUpcomingTasks(database){
    let upcomingBox = document.querySelectorAll(".upcomingBox");
    upcomingBox.forEach((b) => {
        b.parentElement.removeChild(b);
    });

    let allTasks = sortDate(database);
    let upcomingPage = document.querySelector(".upcomingPage");
    if (upcomingPage.hasChildNodes()){
        upcomingPage.removeChild(upcomingPage.lastChild);
    }
    for (let i = 0; i < allTasks.length; i++){
        upcomingPage.appendChild(createFramework(allTasks[i].getTitle, allTasks[i].getDueDate));
    }

    if (!upcomingPage.hasChildNodes()){
        let none = document.createElement('div');
        none.textContent = "You have nothing coming up in the future!";
        none.style.cssText = "color: #C06C84; font-size: 45px; text-align: center; margin-top: 50px";
        upcomingPage.appendChild(none);
    }
}

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
/******/ 			id: moduleId,
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homepage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.css */ "./src/homepage.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database */ "./src/database.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./today.js */ "./src/today.js");
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/esm */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns_isBefore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/isBefore */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var _upcoming_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upcoming.js */ "./src/upcoming.js");
/* harmony import */ var _tomorrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tomorrow.js */ "./src/tomorrow.js");
/* harmony import */ var _projectPage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projectPage.js */ "./src/projectPage.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");














function createButtons(){
    let container = document.querySelector("#content");
    let button = document.createElement('div');
    button.className = "btn";
    container.appendChild(button);
    for (let i = 0; i < 5; i++){
        let btn = document.createElement('button');
        btn.classList.add("menu");
        button.appendChild(btn);
    }
    let allButtons = document.querySelectorAll(".menu");

    allButtons[0].textContent = "All";
    allButtons[0].setAttribute('id', 'all');

    allButtons[1].textContent = "Today";
    allButtons[1].setAttribute('id', 'today');

    allButtons[2].textContent = "Tomorrow";
    allButtons[2].setAttribute('id', 'tomorrow');

    allButtons[3].textContent = "Upcoming";
    allButtons[3].setAttribute('id', 'upcoming');

    allButtons[4].textContent = "Projects";
    allButtons[4].setAttribute('id', "projects");
}


// create all 5 pages: Homepage, today, tmr, upcoming, and projects
function createPages() {
    let container = document.querySelector("#content");
    let pages = document.createElement("div");
    pages.classList.add("info");
    container.appendChild(pages);
    for (let i = 0; i < 5; i++){
        let page = document.createElement('div');
        page.classList.add("pages");
        pages.appendChild(page);
    }

    let allPages = document.querySelectorAll(".pages");

    allPages[0].classList.add("homepage");

    allPages[1].classList.add("todayPage");

    allPages[2].classList.add("tomorrowPage");

    allPages[3].classList.add("upcomingPage");

    allPages[4].classList.add("projectPage");
}

function showContent(pageIndex){
    let allPages = document.querySelectorAll(".pages");
    allPages.forEach((p) => {
        p.style.cssText = "display: none";
    });
    allPages[pageIndex].style.cssText = "display: block";
}

function deleteButton(database){
    let deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((ea) => {
        ea.addEventListener("click", () => {
            // refer to box class
            let grandparent = ea.parentElement.parentElement;
            let oldData = (((grandparent.childNodes)[0]).childNodes)[0].textContent.split("by");
            //delete any whitespace in the string
            let oldTitle = oldData[0].split(" ").join("");
            let oldDueDate = oldData[1].split(" ").join("");
            let oldTask = [oldTitle, oldDueDate];
            // delete the task from all the tasks in database
            let allTasks = database.getAllTasks, deletedTask;
            for (let j = 0; j < allTasks.length; j++){
                if (allTasks[j].getTitle === oldTitle && allTasks[j].getDueDate === oldDueDate){
                    deletedTask = allTasks[j];
                    allTasks.splice(j, 1);
                    break;
                }
            }
            // delete the task from the one project in the database 
            let project = deletedTask.getProjectName;
            let allProj = database.getAllProjects;
            if (project != null){
                for (let j = 0; j < allProj.length; j++){
                    if (allProj[j].getProjectName === project){
                        allProj[j].removeTask = oldTask;
                        break;
                    }
                }
            }
            // remove box from display
            grandparent.parentElement.removeChild(grandparent);
            console.log(database);

            _storage_js__WEBPACK_IMPORTED_MODULE_10__.clearDatabase();
            _storage_js__WEBPACK_IMPORTED_MODULE_10__.setObject('database', database);
        });
    });
    return database;
}

function editButton(database){
    let editButton = document.querySelectorAll(".edit");
    console.log(editButton);
    editButton.forEach((btn) => {
        btn.addEventListener("click", () => {
            let e = document.querySelectorAll(".editForm");
            if (e.length === 0){
                let box = btn.parentElement.parentElement;
                let editForm = document.createElement('div');
                editForm.innerHTML = "<br><br><br>";
                editForm.classList.add("editForm");
                

                let title = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.createTitle)();
                title.classList.add('editBox');
                editForm.appendChild(title);

                let dueDate = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.createDate)();
                dueDate.classList.add("dueDateEdit");
                editForm.appendChild(dueDate);

                let priority = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.createPriorityList)();
                priority.classList.add("priorityListEdit");
                editForm.appendChild(priority);

                let projList = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.createProjectList)(database);
                projList.classList.add("projectListEdit");
                editForm.appendChild(projList);

                let closeBtn = document.createElement("button");
                closeBtn.classList.add("closeButtonEdit");
                closeBtn.textContent = "Close";
                closeBtn.style.cssText = "border: none; font-size: 25px; background-color: black; color: #F8B195; padding: 10px";
                editForm.appendChild(closeBtn);

                let submitBtn = document.createElement("button");
                submitBtn.classList.add("submitButtonEdit");
                submitBtn.textContent = "Submit";
                submitBtn.style.cssText = "border: none; font-size: 25px; background-color: black; color: #F67280; padding: 10px";
                editForm.appendChild(submitBtn);

                closeBtn.addEventListener("click", () => {
                    let all = document.querySelectorAll(".editForm");
                    //console.log(document.querySelectorAll(".editForm").length);
                    all[0].parentElement.removeChild(all[0]);
                    //editForm.style.cssText = 'display: none';
                });
                
                
                submitBtn.addEventListener("click", () => {
                    let s = document.querySelectorAll(".editForm");
                    if (s.length === 1){
                        let allInfo = s[0].childNodes;
                        console.log(allInfo);
                        let newTitle = (allInfo[3].childNodes)[1].value;
                        let newDueDate = (allInfo[4].childNodes)[1].value;
                        let newPriority = (allInfo[5].childNodes)[1].value;
                        let newProject = (allInfo[6].childNodes)[1].value;
                        if (newProject === "None")
                            newProject = null;
                        
                        if (newTitle.length != 0 && newDueDate.length != 0 && !(0,date_fns_isBefore__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns_esm__WEBPACK_IMPORTED_MODULE_12__["default"])(newDueDate), (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_today_js__WEBPACK_IMPORTED_MODULE_6__.getTodayDate)()))){
                            let oldData = (((box.childNodes)[0]).childNodes)[0].textContent.split("by");
                            //delete any whitespace in the string
                            let oldTitle = oldData[0].split(" ").join("");
                            let oldDueDate = oldData[1].split(" ").join("");
                            // go through database to find the task that matches this title AND due date
                            let allTask = database.getAllTasks;
                            for (let i = 0; i < allTask.length; i++){
                                if (allTask[i].getTitle === oldTitle && allTask[i].getDueDate === oldDueDate){
                                    allTask[i].changeTitle = newTitle;
                                    allTask[i].changeDueDate = newDueDate;
                                    allTask[i].changePriority = newPriority;
                                    if (newPriority === "High"){
                                        box.style.cssText = "display: inline-block; border: 2px solid red; height: auto; width: 1200px";
                                    }
                                    else if (newPriority === "Medium"){
                                        box.style.cssText = "display: inline-block; border: 2px solid yellow; height: auto; width: 1200px";
                                    }
                                    else if (newPriority === 'Low'){
                                        box.style.cssText = "display: inline-block; border: 2px solid #03AC13; height: auto; width: 1200px"
                                    }
                                    let oldProject = allTask[i].getProjectName;
                                    if (newProject != allTask[i].getProjectName){
                                        // need to remove task from project here
                                        let allProjects = database.getAllProjects;
                                        for (let j = 0; j < allProjects.length; j++){
                                            //old
                                            if (oldProject === allProjects[j].getProjectName){
                                                if (newProject === "None"){
                                                    //clean project to null
                                                    allTask[i].changeProject = null;
                                                    allProjects[j].cleanProject = null;
                                                }
                                                else{
                                                    allTask[i].changeProject = newProject;
                                                    // delete task from that old project
                                                    allProjects[j].cleanProject = newProject;
                                                }
                                            }
                                            if (newProject === allProjects[j].getProjectName){
                                                allTask[i].changeProject = newProject;
                                                // add task to new project
                                                allProjects[j].addTask = new _task_js__WEBPACK_IMPORTED_MODULE_2__.Task(newTitle, newDueDate, newPriority, newProject);
                                            }
                                        }
                                    }
                                }
                            }
                            //let the user hit edit again after it's closed
                            let all = document.querySelectorAll(".editForm");
                            all[0].parentElement.removeChild(all[0]);
                            //update what is displayed after editing 
                            (((box.childNodes)[0]).childNodes)[0].textContent = newTitle + " by " + newDueDate;
                            console.log(database);
                            console.log(database.getAllProjects);
                            
                            _storage_js__WEBPACK_IMPORTED_MODULE_10__.clearDatabase();
                            _storage_js__WEBPACK_IMPORTED_MODULE_10__.setObject('database', database);
                        }
                        else{
                            alert("You either have not fill out all boxes or the date you entered is before TODAY!");
                        }
                    }
                });
                
                box.appendChild(editForm);
            }
        });
    });
    return database;
}

function generateTodayPage(database){
    document.querySelector("#today").addEventListener("click", () => {
        showContent(1);
        (0,_today_js__WEBPACK_IMPORTED_MODULE_6__.createTodayTasks)(database);
    });
}

function generateTomorrowPage(database){
    document.querySelector("#tomorrow").addEventListener("click", () => {
        showContent(2);
        (0,_tomorrow_js__WEBPACK_IMPORTED_MODULE_8__.createTomorrowTasks)(database);
    });
}

function generateUpcomingPage(database){
    document.querySelector("#upcoming").addEventListener("click", () => {
        showContent(3);
        (0,_upcoming_js__WEBPACK_IMPORTED_MODULE_7__.createUpcomingTasks)(database);
    });
}

function generateProjectPage(database){
    document.querySelector("#projects").addEventListener("click", () => {
        showContent(4);
        (0,_projectPage_js__WEBPACK_IMPORTED_MODULE_9__.createProjectPage)(database);
    });
}

function generateHomepage(){
    document.querySelector("#all").addEventListener('click', () => {
        showContent(0);
    });
}
function main(){    
    let res = _storage_js__WEBPACK_IMPORTED_MODULE_10__.getObject('database');
    let database;
    // if data has existed before, then retrieve and transform it. else start from scratch
    if (res != null){
        database = _storage_js__WEBPACK_IMPORTED_MODULE_10__.transformData(res);
    }
    else{
        database = new _database__WEBPACK_IMPORTED_MODULE_4__.Database();
    }
    //let database = new Database();
    createButtons();
    createPages();
    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.createHomepage)();
    //right now its an empty array but make sure to modify it later in main function
    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.addTaskForm)(database);
    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.addProjectForm)();
    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.homepageButtonSetUp)();
    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.fillOutHomePage)(database);
    showContent(0);

    // adding a new task to the database
    document.querySelector("#addFormSubmitBtn").addEventListener("click", () => {
        let title = document.querySelector(".titleInputAddTask").value;
        let dueDate = document.querySelector(".dateInputAddTask").value;
        let priorityList = document.querySelector("#dropDownPriority");
        let priority = priorityList.options[priorityList.selectedIndex].textContent;
        let projectList = document.querySelector("#dropDownProject");
        let project = projectList.options[projectList.selectedIndex].textContent;
        let task;

        //TODO: start here: must check that dates are NOT before today
        if (title.length != 0 && dueDate.length != 0 && !(0,date_fns_isBefore__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns_esm__WEBPACK_IMPORTED_MODULE_12__["default"])(dueDate), (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_today_js__WEBPACK_IMPORTED_MODULE_6__.getTodayDate)()))){
            if (project === "None")
                task = new _task_js__WEBPACK_IMPORTED_MODULE_2__.Task(title, dueDate, priority, null);
            else{
                task = new _task_js__WEBPACK_IMPORTED_MODULE_2__.Task(title, dueDate, priority, project);
                let allProj = database.getAllProjects;
                // adding that particular task to the specified project
                for (let i = 0; i < allProj.length; i++){
                    if (allProj[i].getProjectName === project){
                        allProj[i].addTask = task;
                    }
                }
            }
            database.addNewTask = task;
            
            _storage_js__WEBPACK_IMPORTED_MODULE_10__.clearDatabase();
            _storage_js__WEBPACK_IMPORTED_MODULE_10__.setObject('database', database);

            console.log(database);
            document.querySelector(".addTaskForm").style.cssText = "display: none";
            (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.fillOutHomePage)(database);

            //for today page
            generateTodayPage(database);
            // for tomorrow page
            generateTomorrowPage(database);

            // go back to homepage from another page
            generateHomepage();

            // for upcoming page
            generateUpcomingPage(database);

            //for project page
            generateProjectPage(database);

            database = editButton(database);
            
            // add delete function here
            database = deleteButton(database);
        }  
        else{
            alert("You either have not fill out all boxes or the date you entered is before TODAY!");
        }
    });

    // adding a new project to the new database
    document.querySelector("#addProjectSubmitBtn").addEventListener("click", () => {
        let title = document.querySelector(".titleInputProjectForm").value;
        if (title.length != 0){
            let newProject = new _project_js__WEBPACK_IMPORTED_MODULE_3__.Project(title);
            database.addProject = newProject;
            document.querySelector(".addProjectForm").style.cssText = "display: none";
            console.log(database);

            // update drop down project list and add that new project above to addTask
            let newOption = document.createElement("option");
            newOption.textContent = title;
            document.querySelector("#dropDownProject").appendChild(newOption);
        }
    });
    database = deleteButton(database);
    database = editButton(database);
    generateHomepage();
    generateTodayPage(database);
    generateTomorrowPage(database);
    generateUpcomingPage(database);
    generateProjectPage(database);
}
main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSx1QkFBdUIsK0NBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFjO0FBQ2xCO0FBQ0EsSUFBSSx5REFBVztBQUNmLElBQUksNERBQWM7QUFDbEIsSUFBSSxpRUFBbUI7QUFDdkIsSUFBSSw2REFBZTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQsOERBQVEsQ0FBQyx5REFBUSxXQUFXLHlEQUFRLENBQUMsdURBQVk7QUFDMUc7QUFDQSwyQkFBMkIsMENBQUk7QUFDL0I7QUFDQSwyQkFBMkIsMENBQUk7QUFDL0I7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFxQjtBQUNqQyxZQUFZLG1EQUFpQjs7QUFFN0I7QUFDQTtBQUNBLFlBQVksNkRBQWU7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdEQUFPO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWVwYWdlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Nsb3Nlc3RJbmRleFRvL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb21vcnJvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZXBhZ2UuY3NzPzJhNzIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGFiYXNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b21vcnJvdy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXBjb21pbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hZGRUYXNrRm9ybSB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYm9yZGVyOiA0eHAgc29saWQgd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ob21lcGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYWRkVGFza0Zvcm0ge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGJvcmRlcjogNHhwIHNvbGlkIHdoaXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJ0biB7XFxuICAgIG1hcmdpbjogMzBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4ubWVudXtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBmb250LWZhbWlseTogc2VyaWY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm1lbnU6aG92ZXJ7XFxuICAgIGNvbG9yOiNBNUE1OEQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5tZW51e1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubWVudTpob3ZlcntcXG4gICAgY29sb3I6I0E1QTU4RDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY2xvc2VzdEluZGV4VG9cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIGFuIGluZGV4IG9mIHRoZSBjbG9zZXN0IGRhdGUgZnJvbSB0aGUgYXJyYXkgY29tcGFyaW5nIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIGFuIGluZGV4IG9mIHRoZSBjbG9zZXN0IGRhdGUgZnJvbSB0aGUgYXJyYXkgY29tcGFyaW5nIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3csIGBjbG9zZXN0SW5kZXhUb2AgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgd2hlbiB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdCBhbiBhcnJheSwgYW5kIHJldHVybnMgSW52YWxpZCBEYXRlIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtEYXRlIHwgTnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge0FycmF5PERhdGU+IHwgQXJyYXk8bnVtYmVyPn0gZGF0ZXNBcnJheSAtIHRoZSBhcnJheSB0byBzZWFyY2hcbiAqIEByZXR1cm5zIHtOdW1iZXIgfCB1bmRlZmluZWR9IGFuIGluZGV4IG9mIHRoZSBkYXRlIGNsb3Nlc3QgdG8gdGhlIGdpdmVuIGRhdGUgb3IgdW5kZWZpbmVkIGlmIG5vIHZhbGlkIHZhbHVlIGlzIGdpdmVuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRhdGUgaXMgY2xvc2VyIHRvIDYgU2VwdGVtYmVyIDIwMTU/XG4gKiBjb25zdCBkYXRlVG9Db21wYXJlID0gbmV3IERhdGUoMjAxNSwgOCwgNilcbiAqIGNvbnN0IGRhdGVzQXJyYXkgPSBbXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNywgMCwgMSlcbiAqIF1cbiAqIGNvbnN0IHJlc3VsdCA9IGNsb3Nlc3RJbmRleFRvKGRhdGVUb0NvbXBhcmUsIGRhdGVzQXJyYXkpXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9zZXN0SW5kZXhUbyhkaXJ0eURhdGVUb0NvbXBhcmUsIGRpcnR5RGF0ZXNBcnJheSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgaWYgKGlzTmFOKE51bWJlcihkYXRlVG9Db21wYXJlKSkpIHJldHVybiBOYU47XG4gIHZhciB0aW1lVG9Db21wYXJlID0gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG4gIHZhciBkYXRlc0FycmF5OyAvLyBgZGlydHlEYXRlc0FycmF5YCBpcyB1bmRlZmluZWQgb3IgbnVsbFxuXG4gIGlmIChkaXJ0eURhdGVzQXJyYXkgPT0gbnVsbCkge1xuICAgIGRhdGVzQXJyYXkgPSBbXTsgLy8gYGRpcnR5RGF0ZXNBcnJheWAgaXMgQXJyYXksIFNldCBvciBNYXAsIG9yIG9iamVjdCB3aXRoIGN1c3RvbSBgZm9yRWFjaGAgbWV0aG9kXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRpcnR5RGF0ZXNBcnJheS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGF0ZXNBcnJheSA9IGRpcnR5RGF0ZXNBcnJheTsgLy8gSWYgYGRpcnR5RGF0ZXNBcnJheWAgaXMgQXJyYXktbGlrZSBPYmplY3QsIGNvbnZlcnQgdG8gQXJyYXkuIE90aGVyd2lzZSwgbWFrZSBpdCBlbXB0eSBBcnJheVxuICB9IGVsc2Uge1xuICAgIGRhdGVzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkaXJ0eURhdGVzQXJyYXkpO1xuICB9XG5cbiAgdmFyIHJlc3VsdDtcbiAgdmFyIG1pbkRpc3RhbmNlO1xuICBkYXRlc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGRpcnR5RGF0ZSwgaW5kZXgpIHtcbiAgICB2YXIgY3VycmVudERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICAgIGlmIChpc05hTihOdW1iZXIoY3VycmVudERhdGUpKSkge1xuICAgICAgcmVzdWx0ID0gTmFOO1xuICAgICAgbWluRGlzdGFuY2UgPSBOYU47XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnModGltZVRvQ29tcGFyZSAtIGN1cnJlbnREYXRlLmdldFRpbWUoKSk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgfHwgZGlzdGFuY2UgPCBOdW1iZXIobWluRGlzdGFuY2UpKSB7XG4gICAgICByZXN1bHQgPSBpbmRleDtcbiAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIHZhciByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb21vcnJvd1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b21vcnJvd1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA3IE9jdG9iZXIgMTQ6MDA6MDAgdG9tb3Jyb3c/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb21vcnJvdyhuZXcgRGF0ZSgyMDE0LCA5LCA3LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvbW9ycm93KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIGFkZERheXMoRGF0ZS5ub3coKSwgMSkpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBwcmV2aW91cyBgcGFyc2VgIGltcGxlbWVudGF0aW9uIHdhcyByZW5hbWVkIHRvIGBwYXJzZUlTT2AuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgcGFyc2UoJzIwMTYtMDEtMDEnKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBwYXJzZUlTTygnMjAxNi0wMS0wMScpXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgdmFsaWRhdGVzIHNlcGFyYXRlIGRhdGUgYW5kIHRpbWUgdmFsdWVzIGluIElTTy04NjAxIHN0cmluZ3NcbiAqICAgYW5kIHJldHVybnMgYEludmFsaWQgRGF0ZWAgaWYgdGhlIGRhdGUgaXMgaW52YWxpZC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgcGFyc2VJU08oJzIwMTgtMTMtMzInKVxuICogICAvLz0+IEludmFsaWQgRGF0ZVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IGRvZXNuJ3QgZmFsbCBiYWNrIHRvIGBuZXcgRGF0ZWAgY29uc3RydWN0b3JcbiAqICAgaWYgaXQgZmFpbHMgdG8gcGFyc2UgYSBzdHJpbmcgYXJndW1lbnQuIEluc3RlYWQsIGl0IHJldHVybnMgYEludmFsaWQgRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzID09IG51bGwgPyAyIDogdG9JbnRlZ2VyKG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyk7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZXBhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lcGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtUYXNrfSBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG4vLyB0aGlzIGNsYXNzIHdpbGwgc3RvcmUgRVZFUllUSElORyBhYm91dCBvdXIgYXBwbGljYXRpb25cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmFsbFByb2plY3RzID0gW107XG4gICAgICAgIHRoaXMuYWxsVGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgZ2V0QWxsUHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsUHJvamVjdHM7XG4gICAgfVxuXG4gICAgZ2V0IGdldEFsbFRhc2tzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbFRhc2tzO1xuICAgIH1cblxuICAgIHNldCBhZGRQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICB0aGlzLmFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgc2V0IGFkZE5ld1Rhc2sodGFzayl7XG4gICAgICAgIHRoaXMuYWxsVGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBzZXQgcmVtb3ZlVGFzayhhcnIpe1xuICAgICAgICAvLyBhcnJbMF0gPSB0aXRsZTsgYXJyWzFdID0gZHVlRGF0ZVxuICAgICAgICBsZXQgZGVsZXRlZFRhc2s7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxUYXNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxUYXNrc1tpXS5nZXRUaXRsZSA9PT0gYXJyWzBdICYmIHRoaXMuYWxsVGFza3NbaV0uZ2V0RHVlRGF0ZSA9PT0gYXJyWzFdKXtcbiAgICAgICAgICAgICAgICBkZWxldGVkVGFzayA9IHRoaXMuYWxsVGFza3NbaV07XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWxldGVkVGFzaztcbiAgICB9XG59IiwiaW1wb3J0ICcuL2hvbWVwYWdlLmNzcyc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZXBhZ2UoKXtcbiAgICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZXBhZ2VcIik7XG4gICAgbGV0IGFkZGluZ09wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRpbmdPcHRpb25zLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgbWFyZ2luLXJpZ2h0OiAyMHB4OyBtYXJnaW4tdG9wOiAzMHB4XCI7XG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQoYWRkaW5nT3B0aW9ucyk7XG5cbiAgICBsZXQgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcbiAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFzaycpO1xuICAgIGFkZFRhc2suc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6IGxpZ2h0eWVsbG93OyBwYWRkaW5nOiAxMHB4OyBmb250LXNpemU6IDI1cHg7IGJvcmRlcjpub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1wiO1xuICAgIFxuICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpLnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDEwcHg7IGZvbnQtc2l6ZTogMjVweDsgYm9yZGVyOm5vbmU7IGNvbG9yOiAjQTA4MTZDOyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1wiO1xuICAgIH0pO1xuICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrJykuc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6IGxpZ2h0eWVsbG93OyBwYWRkaW5nOiAxMHB4OyBmb250LXNpemU6IDI1cHg7IGJvcmRlcjpub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1wiO1xuICAgIH0pO1xuXG4gICAgbGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0LnN0eWxlLmNzc1RleHQgPSBcImNvbG9yOiBsaWdodHllbGxvdzsgcGFkZGluZzogMTBweDsgZm9udC1zaXplOiAyNXB4OyBib3JkZXI6bm9uZTsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcIjtcbiAgICBcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKS5zdHlsZS5jc3NUZXh0ID0gXCJwYWRkaW5nOiAxMHB4OyBmb250LXNpemU6IDI1cHg7IGJvcmRlcjpub25lOyBjb2xvcjogI0EwODE2QzsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcIjtcbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpLnN0eWxlLmNzc1RleHQgPSBcImNvbG9yOiBsaWdodHllbGxvdzsgcGFkZGluZzogMTBweDsgZm9udC1zaXplOiAyNXB4OyBib3JkZXI6bm9uZTsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcIjtcbiAgICB9KTtcblxuICAgIGFkZGluZ09wdGlvbnMuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG4gICAgYWRkaW5nT3B0aW9ucy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxPdXRIb21lUGFnZShkYXRhYmFzZSl7XG4gICAgY29uc3QgaG9tZXBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVwYWdlXCIpO1xuICAgIC8vIGRlbGV0IGFsbCBib3hlcyBhbmQgc3RhcnQgb3ZlciBiZWZvcmUgcmVuZGVyaW5nIGFnYWluXG4gICAgbGV0IGFsbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm94XCIpO1xuICAgIGFsbEJveC5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgYm94LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYm94KTtcbiAgICB9KVxuICAgIGxldCBhbGxUYXNrID0gZGF0YWJhc2UuZ2V0QWxsVGFza3M7XG4gICAgaWYgKGFsbFRhc2subGVuZ3RoID09PSAwKXtcbiAgICAgICAgbGV0IGFubm91bmNlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhbm5vdW5jZW1lbnQudGV4dENvbnRlbnQgPSBcIk5vdGhpbmcgeWV0IVwiO1xuICAgICAgICBhbm5vdW5jZW1lbnQuY2xhc3NOYW1lID0gXCJhbm5vdW5jZW1lbnRcIjtcbiAgICAgICAgYW5ub3VuY2VtZW50LnN0eWxlLmNzc1RleHQgPSBcImNvbG9yOiAjQUY5Mjc0OyBmb250LXNpemU6IDYwcHg7IHRleHQtYWxpZ246IGNlbnRlclwiO1xuICAgICAgICBob21lcGFnZS5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnQpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBsZXQgbm90aGluZ1lldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW5ub3VuY2VtZW50XCIpO1xuICAgICAgICBpZiAobm90aGluZ1lldCAhPSBudWxsKXtcbiAgICAgICAgICAgIG5vdGhpbmdZZXQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub3RoaW5nWWV0KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRhc2subGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG4gICAgICAgICAgICBpZiAoYWxsVGFza1tpXS5nZXRQcmlvcml0eSA9PT0gXCJIaWdoXCIpXG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZGVyOiAycHggc29saWQgcmVkOyBoZWlnaHQ6IGF1dG87IHdpZHRoOiAxMjAwcHhcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGFsbFRhc2tbaV0uZ2V0UHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpXG4gICAgICAgICAgICAgICAgYm94LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZGVyOiAycHggc29saWQgeWVsbG93OyBoZWlnaHQ6IGF1dG87IHdpZHRoOiAxMjAwcHhcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGFsbFRhc2tbaV0uZ2V0UHJpb3JpdHkgPT09ICdMb3cnKVxuICAgICAgICAgICAgICAgIGJveC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJvcmRlcjogMnB4IHNvbGlkICMwM0FDMTM7IGhlaWdodDogYXV0bzsgd2lkdGg6IDEyMDBweFwiO1xuXG4gICAgICAgICAgICBob21lcGFnZS5hcHBlbmRDaGlsZChib3gpO1xuXG4gICAgICAgICAgICAvL2NvbnRlbnQgb2YgdGhlIHRhc2tcbiAgICAgICAgICAgIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAvLyB0aGVzZSBjbGFzcyB3aWxsIGJlIHJlZmVyZW5jZWQgd2hlbiB0aGUgYnV0dG9uIGVkaXQgaXMgY2xpY2tlZCB0byBjaGFuZ2UgY29udGVudFxuICAgICAgICAgICAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICAgICAgICAgIC8vaW5mby5pbm5lckhUTUwgPSBhbGxUYXNrW2ldLmdldFRpdGxlICsgXCIgYnkgPHN0cm9uZz48dT5cIiArIGFsbFRhc2tbaV0uZ2V0RHVlRGF0ZSArIFwiPC91Pjwvc3Ryb25nPlwiO1xuICAgICAgICAgICAgaW5mby5pbm5lckhUTUwgPSBhbGxUYXNrW2ldLmdldFRpdGxlICsgXCIgYnkgXCIgKyBhbGxUYXNrW2ldLmdldER1ZURhdGU7XG4gICAgICAgICAgICBpbmZvLnN0eWxlLmNzc1RleHQgPSBcImNvbG9yOiAjQjBCM0I4OyBwYWRkaW5nOiAxMHB4OyBmbG9hdDogbGVmdDsgZm9udC1zaXplOiAyNXB4XCI7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICAgICAgICAgIGxldCBhbGxCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhbGxCdXR0b25zLnN0eWxlLmNzc1RleHQgPSBcImZsb2F0OiByaWdodDsgcGFkZGluZzogMTBweDsgZGlzcGxheTogZmxleDsgZ2FwOiAxMHB4XCI7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQoYWxsQnV0dG9ucyk7XG5cbiAgICAgICAgICAgIGxldCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgICAgICBlZGl0LmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xuICAgICAgICAgICAgZWRpdC5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6IDI1cHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGNvbG9yOiBncmF5XCI7XG4gICAgICAgICAgICBhbGxCdXR0b25zLmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gICAgICAgICAgICBsZXQgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICByZW1vdmUudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgICAgICAgICByZW1vdmUuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOiAyNXB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBjb2xvcjogZ3JheVwiO1xuICAgICAgICAgICAgYWxsQnV0dG9ucy5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza0Zvcm0ocHJvamVjdHMpe1xuICAgIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lcGFnZVwiKTtcbiAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTmFtZSA9ICdhZGRUYXNrRm9ybSc7XG4gICAgYm94LnN0eWxlLmNzc1RleHQgPSBcImhlaWdodDogNDUwcHg7IHdpZHRoOiA0NTBweDsgbWFyZ2luOiBhdXRvOyBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTsgZGlzcGxheTogbm9uZTsgbWFyZ2luLWJvdHRvbTogMTVweFwiO1xuICAgIGhvbWVwYWdlLmFwcGVuZENoaWxkKGJveCk7XG5cbiAgICAvLyBhcHBlbmQgYWxsIGVsZW1lbnRzIGludG8gZGl2IHRvIGNyZWF0ZSBhZGQgZm9ybSBib3hcbiAgICBib3guYXBwZW5kQ2hpbGQoY2xvc2VBbmRTdWJtaXRBZGRGb3JtKCkpO1xuICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVJbnRybygpKTtcbiAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoKSk7XG4gICAgLy9ib3guYXBwZW5kQ2hpbGQoY3JlYXRlRGVzY3JpcHRpb24oKSk7XG4gICAgYm94LmFwcGVuZENoaWxkKGNyZWF0ZURhdGUoKSk7XG4gICAgYm94LmFwcGVuZChjcmVhdGVQcmlvcml0eUxpc3QoKSk7XG4gICAgYm94LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RMaXN0KHByb2plY3RzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZXBhZ2VcIik7XG4gICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJveC5jbGFzc05hbWUgPSBcImFkZFByb2plY3RGb3JtXCI7XG4gICAgYm94LnN0eWxlLmNzc1RleHQgPSBcImhlaWdodDogNDUwcHg7IHdpZHRoOiA0NTBweDsgbWFyZ2luOiBhdXRvOyBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTsgZGlzcGxheTogbm9uZVwiO1xuICAgIGhvbWVwYWdlLmFwcGVuZENoaWxkKGJveCk7XG5cbiAgICBib3guYXBwZW5kQ2hpbGQoY2xvc2VBbmRTdWJtaXRBZGRQcm9qZWN0KCkpO1xuICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVJbnRybygpKTtcbiAgICBsZXQgdGl0bGVQYXJlbnQgPSBjcmVhdGVUaXRsZSgpO1xuICAgIGxldCB0aXRsZSA9IHRpdGxlUGFyZW50LmNoaWxkcmVuO1xuICAgIHRpdGxlWzBdLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZUlucHV0UHJvamVjdEZvcm1cIik7XG4gICAgYm94LmFwcGVuZENoaWxkKHRpdGxlUGFyZW50KTtcbiAgICAvL2JveC5hcHBlbmRDaGlsZChjcmVhdGVEZXNjcmlwdGlvbigpKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VBbmRTdWJtaXRBZGRQcm9qZWN0KCl7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcm9qZWN0U3VibWl0QnRuJylcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3RDbG9zZUJ0bicpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICBzdWJtaXQuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOiAyNXB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBjb2xvcjogd2hpdGVcIjtcbiAgICBjbG9zZS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6IDI1cHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWxlZnQ6IG5vbmU7IGJvcmRlci10b3A6IG5vbmU7IGJvcmRlci1ib3R0b206IG5vbmVcIjtcbiAgICBidG4uc3R5bGUuY3NzVGV4dCA9IFwidGV4dC1hbGlnbjogZW5kXCI7XG5cbiAgICAvL2VmZmVjdHMgZm9yIGFkZCBhbmQgY2xvc2UgYnV0dG9ucyBhYm92ZVxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFN1Ym1pdEJ0blwiKS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6IDI1cHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGNvbG9yOiAjOUNDMEU3XCI7XG4gICAgfSk7XG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFN1Ym1pdEJ0blwiKS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6IDI1cHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGNvbG9yOiB3aGl0ZVwiO1xuICAgIH0pO1xuXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdENsb3NlQnRuXCIpLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZTogMjVweDsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgY29sb3I6ICM5Q0MwRTdcIjtcbiAgICB9KTtcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdENsb3NlQnRuXCIpLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZTogMjVweDsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgY29sb3I6IHdoaXRlXCI7XG4gICAgfSk7XG5cbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RGb3JtXCIpLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmVcIjtcbiAgICB9KTtcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gY2xvc2VBbmRTdWJtaXRBZGRGb3JtKCl7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRGb3JtU3VibWl0QnRuJylcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZEZvcm1DbG9zZUJ0bicpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICBzdWJtaXQuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOiAyNXB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBjb2xvcjogd2hpdGVcIjtcbiAgICBjbG9zZS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6IDI1cHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLWxlZnQ6IG5vbmU7IGJvcmRlci10b3A6IG5vbmU7IGJvcmRlci1ib3R0b206IG5vbmVcIjtcbiAgICBidG4uc3R5bGUuY3NzVGV4dCA9IFwidGV4dC1hbGlnbjogZW5kXCI7XG5cbiAgICAvL2VmZmVjdHMgZm9yIGFkZCBhbmQgY2xvc2UgYnV0dG9ucyBhYm92ZVxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRm9ybVN1Ym1pdEJ0blwiKS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6IDI1cHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGNvbG9yOiAjOUNDMEU3XCI7XG4gICAgfSk7XG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRm9ybVN1Ym1pdEJ0blwiKS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6IDI1cHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGNvbG9yOiB3aGl0ZVwiO1xuICAgIH0pO1xuXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRm9ybUNsb3NlQnRuXCIpLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZTogMjVweDsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgY29sb3I6ICM5Q0MwRTdcIjtcbiAgICB9KTtcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRm9ybUNsb3NlQnRuXCIpLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZTogMjVweDsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgY29sb3I6IHdoaXRlXCI7XG4gICAgfSk7XG5cbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tGb3JtXCIpLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmVcIjtcbiAgICAgICAgLy8gY2xlYXIgYWxsIHZhbHVlcyBiZWZvcmUgcmVzdGFydGluZyB0aGUgZm9ybVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlSW5wdXRBZGRUYXNrXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlSW5wdXRBZGRUYXNrXCIpLnZhbHVlID0gJyc7XG4gICAgfSk7XG5cbiAgICBidG4uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBidG4uYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUludHJvKCl7XG4gICAgbGV0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnRyby50ZXh0Q29udGVudCA9IFwiVE9ETyBsaXN0XCI7XG4gICAgaW50cm8uc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDI1cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMTBweDsgZm9udC1zYW1pbHk6IHNlcmlmXCI7XG4gICAgcmV0dXJuIGludHJvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGl0bGUoKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG4gICAgdGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAxNXB4OyBmb250LXNpemU6IDI1cHhcIjtcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIjtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZUlucHV0QWRkVGFza1wiKTtcbiAgICB0aXRsZUlucHV0LnN0eWxlLmNzc1RleHQgPSBcIm1hcmdpbi1sZWZ0OiAzMHB4OyBmb250LXNpemU6IDI1cHhcIjtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICByZXR1cm4gdGl0bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRlKCl7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCI7XG4gICAgZGF0ZS5zdHlsZS5jc3NUZXh0ID0gXCJjb2xvcjogd2hpdGU7IHBhZGRpbmc6IDE1cHg7IGZvbnQtc2l6ZTogMjVweFwiO1xuICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gXCJtbS9kZC95eXl5XCI7XG4gICAgZGF0ZUlucHV0LnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZTogMjVweDsgbWFyZ2luLWxlZnQ6IDEwcHhcIjtcbiAgICBkYXRlSW5wdXQuY2xhc3NOYW1lID0gXCJkYXRlSW5wdXRBZGRUYXNrXCI7XG4gICAgZGF0ZS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHlMaXN0KCl7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAgIHByaW9yaXR5LnN0eWxlLmNzc1RleHQgPSBcImNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMTVweDsgZm9udC1zaXplOiAyNXB4XCI7XG4gICAgbGV0IGRyb3BEb3duTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGRyb3BEb3duTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiZHJvcERvd25Qcmlvcml0eVwiKTtcbiAgICBkcm9wRG93bkxpc3Quc3R5bGUuY3NzVGV4dCA9IFwibWFyZ2luLWxlZnQ6IDMwcHg7IHBhZGRpbmc6IDVweDsgd2lkdGg6IDE0MHB4OyBoZWlnaHQ6IDMwcHg7IGZvbnQtc2l6ZTogMTVweFwiO1xuICAgIGxldCBwcmlvcml0eUxpc3QgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGRyb3BEb3duTGlzdCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eUxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGEudGV4dENvbnRlbnQgPSBwcmlvcml0eUxpc3RbaV07XG4gICAgICAgIGEuc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6IGJsYWNrXCI7XG4gICAgICAgIGRyb3BEb3duTGlzdC5hcHBlbmRDaGlsZChhKTtcbiAgICB9XG4gICAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdExpc3QocHJvamVjdHMpe1xuICAgIGxldCBhZGRUb1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUb1Byb2oudGV4dENvbnRlbnQgPSBcIkFkZCB0byBQcm9qZWN0OiBcIjtcbiAgICBhZGRUb1Byb2ouc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAxNXB4OyBmb250LXNpemU6IDI1cHhcIjtcbiAgICBsZXQgZHJvcERvd25Qcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgZHJvcERvd25Qcm9qLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHJvcERvd25Qcm9qZWN0Jyk7XG4gICAgZHJvcERvd25Qcm9qLnN0eWxlLmNzc1RleHQgPSAnbWFyZ2luLWxlZnQ6IDMwcHg7IHBhZGRpbmc6IDVweDsgd2lkdGg6IDE0MHB4OyBoZWlnaHQ6IDMwcHg7IGZvbnQtc2l6ZTogMTVweCc7XG4gICAgYWRkVG9Qcm9qLmFwcGVuZENoaWxkKGRyb3BEb3duUHJvaik7XG4gICAgbGV0IHByb2plY3QgPSBbXCJOb25lXCJdO1xuICAgIC8vIGdldCBhbGwgcHJvamVjdHMgZnJvbSBkYXRhYmFzZVxuICAgIGxldCBwcm9qZWN0TGlzdCA9IHByb2plY3RzLmdldEFsbFByb2plY3RzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBwcm9qZWN0LnB1c2gocHJvamVjdExpc3RbaV0uZ2V0UHJvamVjdE5hbWUpO1xuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3QubGVuZ3RoOyBqKyspe1xuICAgICAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBiLnRleHRDb250ZW50ID0gcHJvamVjdFtqXTtcbiAgICAgICAgZHJvcERvd25Qcm9qLmFwcGVuZENoaWxkKGIpO1xuICAgIH1cbiAgICByZXR1cm4gYWRkVG9Qcm9qO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9tZXBhZ2VCdXR0b25TZXRVcCgpIHtcbiAgICBsZXQgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVGFza1wiKTtcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrRm9ybVwiKS5zdHlsZS5jc3NUZXh0ID0gXCJoZWlnaHQ6IDQ1MHB4OyB3aWR0aDogNDUwcHg7IG1hcmdpbjogYXV0bzsgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7IGRpc3BsYXk6IGJsb2NrXCI7XG4gICAgfSk7XG4gICAgbGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrRm9ybVwiKS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIil7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RGb3JtXCIpLnN0eWxlLmNzc1RleHQgPSBcImhlaWdodDogNDUwcHg7IHdpZHRoOiA0NTBweDsgbWFyZ2luOiBhdXRvOyBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTsgZGlzcGxheTogYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH0pOyAgXG59IiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGdldCBnZXRQcm9qZWN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldCBzZXRQcm9qZWN0TmFtZSh2YWwpe1xuICAgICAgICB0aGlzLm5hbWUgPSB2YWw7XG4gICAgfVxuXG4gICAgZ2V0IGdldFByb2plY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxuXG4gICAgc2V0IGFkZFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBzZXQgY2xlYW5Qcm9qZWN0KHZhbHVlKXtcbiAgICAgICAgLy8gdmFsdWUgaXMgdGhlIG5ldyBwcm9qZWN0IHRoYXQgdGhpcyBcInRhc2tcIiBiZWxvbmdzIHRvIFxuICAgICAgICAvLyB0cmF2ZXJzZSB0aHJvdWdoIHByb2plY3QgYXJyYXksIGlmIGVhY2ggdGFzaydzIGJlbG9uZ1RvICE9IHZhbHVlLCBkZWxldGUgdGhhdCB0YXNrXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAodGhpcy50YXNrc1tpXS5nZXRQcm9qZWN0TmFtZSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCByZW1vdmVUYXNrKGFycmF5KXtcbiAgICAgICAgLy8gYXJyYXlbMF0gPSB0aXRsZSwgYXJyYXlbMV0gPSBkdWVEYXRlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKHRoaXMudGFza3NbaV0uZ2V0VGl0bGUgPT09IGFycmF5WzBdICYmIHRoaXMudGFza3NbaV0uZ2V0RHVlRGF0ZSA9PT0gYXJyYXlbMV0pe1xuICAgICAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJmdW5jdGlvbiBjcmVhdGVGcmFtZXdvcmsocHJvamVjdCl7XG4gICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Qm94XCIpO1xuICAgIGJveC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJvcmRlcjogM3B4IHNvbGlkICM0NUFEQTg7IGhlaWdodDogYXV0bzsgd2lkdGg6IDEyMDBweFwiO1xuXG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE5hbWUuaW5uZXJIVE1MID0gcHJvamVjdC5nZXRQcm9qZWN0TmFtZSArIFwiPGJyPlwiO1xuICAgIHByb2plY3ROYW1lLnN0eWxlLmNzc1RleHQgPSBcImNvbG9yOiAjQjBCM0I4OyBwYWRkaW5nOiAxMHB4OyBmbG9hdDogbGVmdDsgZm9udC1zaXplOiAyNXB4XCI7XG4gICAgYm94LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgIGxldCBhbGxUYXNrcyA9IHByb2plY3QuZ2V0UHJvamVjdDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRhc2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGVhY2hUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBlYWNoVGFzay5pbm5lckhUTUwgPSBhbGxUYXNrc1tpXS5nZXRUaXRsZSArIFwiIGJ5IFwiICsgYWxsVGFza3NbaV0uZ2V0RHVlRGF0ZSArIFwiPGJyPjxicj5cIjtcbiAgICAgICAgZWFjaFRhc2suc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6ICNCMEIzQjg7IHBhZGRpbmc6IDEwcHg7IGZsb2F0OiBsZWZ0OyBmb250LXNpemU6IDI1cHhcIjtcbiAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQoZWFjaFRhc2spO1xuICAgIH1cbiAgICByZXR1cm4gYm94O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFBhZ2UoZGF0YWJhc2Upe1xuICAgIGxldCBwcm9qZWN0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Qm94XCIpO1xuICAgIHByb2plY3RCb3guZm9yRWFjaCgoYikgPT4ge1xuICAgICAgICBiLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYik7XG4gICAgfSk7XG5cbiAgICBsZXQgYWxsUHJvamVjdHMgPSBkYXRhYmFzZS5nZXRBbGxQcm9qZWN0cztcbiAgICBsZXQgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RQYWdlXCIpO1xuICAgIGxldCBhID0gcHJvamVjdFBhZ2UuaGFzQ2hpbGROb2RlcygpO1xuICAgIGlmIChhID09PSB0cnVlKVxuICAgICAgICBwcm9qZWN0UGFnZS5yZW1vdmVDaGlsZChwcm9qZWN0UGFnZS5sYXN0Q2hpbGQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAvLyBvbmx5IHJlbmRlciBpZiB0aGVyZSBhcmUgdGFza3Mgd2l0aGluIGEgcHJvamVjdFxuICAgICAgICBpZiAoYWxsUHJvamVjdHNbaV0uZ2V0UHJvamVjdC5sZW5ndGggIT0gMClcbiAgICAgICAgICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZUZyYW1ld29yayhhbGxQcm9qZWN0c1tpXSkpO1xuICAgIH1cbiAgICBsZXQgYiA9IHByb2plY3RQYWdlLmhhc0NoaWxkTm9kZXMoKTtcbiAgICBpZiAoYiA9PT0gZmFsc2Upe1xuICAgICAgICBsZXQgbm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5vbmUudGV4dENvbnRlbnQgPSBcIk5vdGhpbmcgaGVyZSB5ZXQhXCI7XG4gICAgICAgIG5vbmUuc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6ICNDMDZDODQ7IGZvbnQtc2l6ZTogNDVweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiA1MHB4XCI7XG4gICAgICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKG5vbmUpO1xuICAgIH1cbn0iLCJpbXBvcnQge0RhdGFiYXNlfSBmcm9tICcuL2RhdGFiYXNlLmpzJztcbmltcG9ydCB7VGFza30gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9iamVjdChrZXksIHZhbHVlKXtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0KGtleSl7XG4gICAgbGV0IHZhbCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIHJldHVybiB2YWwgJiYgSlNPTi5wYXJzZSh2YWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJEYXRhYmFzZSgpe1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn1cblxuLy8gdmFsdWUgaXMgdGhlIHN0cmluZyBvYnRhaW5lZCBmcm9tIGxvY2FsU3RvcmFnZVxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIHRyYW5zZm9ybSBpdCBpbnRvIGEgdmFsaWQgZGF0YWJhc2UsIHRoZW4gcmV0dXJuIGl0XG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtRGF0YSh2YWx1ZSl7XG4gICAgLypcbiAgICBsZXQgbmV3RGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcbiAgICBsZXQgbGVuZyA9IHJlcy5hbGxQcm9qZWN0cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5nOyBpKyspe1xuICAgICAgICBsZXQgbmFtZSA9IHJlcy5hbGxQcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICBsZXQgcHJvaiA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICBsZXQgYWxsVGFza3MgPSByZXMuYWxsUHJvamVjdHNbaV0udGFza3M7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsVGFza3MubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgdGFzayhhbGxUYXNrc1tpXS50aXRsZSwgYWxsVGFza3NbaV0uZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgcHJvai5hZGRUYXNrID0gbmV3VGFzaztcbiAgICAgICAgICAgIG5ld0RhdGFiYXNlLmFkZE5ld1Rhc2sgPSBuZXdUYXNrO1xuICAgIH1cbiAgICBuZXdEYXRhYmFzZS5hZGRQcm9qZWN0ID0gcHJvajtcbiAgICAqL1xuICAgbGV0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKCk7XG4gICBsZXQgbGVuZ3RoID0gdmFsdWUuYWxsUHJvamVjdHMubGVuZ3RoOyBcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgIGxldCBuYW1lID0gdmFsdWUuYWxsUHJvamVjdHNbaV0ubmFtZTtcbiAgICAgICBsZXQgcHJvaiA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgIGxldCBhbGxUYXNrcyA9IHZhbHVlLmFsbFByb2plY3RzW2ldLnRhc2tzOyAvLyB0aGlzIGlzIGluIHRoZSBmb3JtIG9mIGFycmF5XG4gICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxUYXNrcy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soYWxsVGFza3NbaV0udGl0bGUsIGFsbFRhc2tzW2ldLmR1ZURhdGUsIGFsbFRhc2tzW2ldLnByaW9yaXR5LCBhbGxUYXNrc1tpXS5iZWxvbmdUbyk7XG4gICAgICAgICAgIHByb2ouYWRkVGFzayA9IG5ld1Rhc2s7XG4gICAgICAgICAgIGRhdGFiYXNlLmFkZE5ld1Rhc2sgPSBuZXdUYXNrO1xuICAgICAgIH1cbiAgICAgICBkYXRhYmFzZS5hZGRQcm9qZWN0ID0gcHJvajtcbiAgIH1cbiAgIC8vIGFkZCBhbGwgdGFza3MgdGhhdCBoYXZlIGJlbG9uZ1RvID0gbnVsbCAodGhvc2UgYXJlIG5vdCBpbiBhbGxQcm9qZWN0cyBiZWNhdXNlIHRoZXkgZG9uJ3QgYmVsb25nIHRvIGEgcHJvamVjdClcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUuYWxsVGFza3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAodmFsdWUuYWxsVGFza3NbaV0uYmVsb25nVG8gPT09IG51bGwpe1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh2YWx1ZS5hbGxUYXNrc1tpXS50aXRsZSwgdmFsdWUuYWxsVGFza3NbaV0uZHVlRGF0ZSwgdmFsdWUuYWxsVGFza3NbaV0ucHJpb3JpdHksIG51bGwpO1xuICAgICAgICAgICAgZGF0YWJhc2UuYWRkTmV3VGFzayA9IG5ld1Rhc2s7XG4gICAgICAgIH1cbiAgIH1cbiAgIHJldHVybiBkYXRhYmFzZTtcbn0iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBiZWxvbmdUbyl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgLy90aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgLy8gZGVmYXVsdCBvZiBiZWxvbmdUbyBpcyBudWxsOyB3aGVuIGFkZCB0byBhIHByb2plY3QsIHRoZW4gc2V0IGl0IHRvIHNvbWV0aGluZyBlbHNlXG4gICAgICAgIHRoaXMuYmVsb25nVG8gPSBiZWxvbmdUbztcbiAgICB9XG5cbiAgICBnZXQgZ2V0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgZ2V0RHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIGdldCBnZXRQcmlvcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXQgZ2V0UHJvamVjdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVsb25nVG87XG4gICAgfVxuXG4gICAgc2V0IGNoYW5nZVRpdGxlKHZhbHVlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBjaGFuZ2VEdWVEYXRlKGRhdGUpe1xuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBkdWUgZGF0ZSBpcyBhIHZhbGlkIGR1ZSBkYXRlIGZpcnN0XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGRhdGU7XG4gICAgfVxuICAgIFxuICAgIHNldCBjaGFuZ2VQcmlvcml0eSh2YWx1ZSl7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgY2hhbmdlUHJvamVjdCh2YWx1ZSl7XG4gICAgICAgIHRoaXMuYmVsb25nVG8gPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucy9lc20nO1xuaW1wb3J0IGlzU2FtZURheSBmcm9tICdkYXRlLWZucy9pc1NhbWVEYXknO1xuZnVuY3Rpb24gY3JlYXRlRnJhbWV3b3JrKHRpdGxlLCBkdWVEYXRlKXtcbiAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoXCJ0b2RheUJveFwiKTtcbiAgICBib3guc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBib3JkZXI6IDNweCBzb2xpZCAjRkYyNDAwOyBoZWlnaHQ6IGF1dG87IHdpZHRoOiAxMjAwcHhcIjtcbiAgICAvL3RvZGF5UGFnZS5hcHBlbmRDaGlsZChib3gpO1xuXG4gICAgLy9jb250ZW50IG9mIHRoZSB0YXNrXG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGVzZSBjbGFzcyB3aWxsIGJlIHJlZmVyZW5jZWQgd2hlbiB0aGUgYnV0dG9uIGVkaXQgaXMgY2xpY2tlZCB0byBjaGFuZ2UgY29udGVudFxuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcInRvZGF5SW5mb1wiKTtcbiAgICBpbmZvLmlubmVySFRNTCA9IHRpdGxlICsgXCIgYnkgXCIgKyBkdWVEYXRlO1xuICAgIGluZm8uc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6ICNCMEIzQjg7IHBhZGRpbmc6IDEwcHg7IGZsb2F0OiBsZWZ0OyBmb250LXNpemU6IDI1cHhcIjtcbiAgICBib3guYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgcmV0dXJuIGJveDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZGF5RGF0ZSgpe1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgbGV0IG1tID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxuICAgIGxldCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCB0b2RheSA9IHl5eXkgKyBcIi1cIiArIG1tICsgJy0nICsgZGQ7XG4gICAgcmV0dXJuIHRvZGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kYXlUYXNrcyhkYXRhYmFzZSl7XG4gICAgbGV0IHRvZGF5Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RheUJveFwiKTtcbiAgICB0b2RheUJveC5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIHAucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwKTtcbiAgICB9KVxuICAgIGxldCBhbGxUYXNrcyA9IGRhdGFiYXNlLmdldEFsbFRhc2tzO1xuICAgIGxldCB0b2RheSA9IGdldFRvZGF5RGF0ZSgpO1xuICAgIGxldCB0b2RheVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5UGFnZVwiKTtcbiAgICBpZiAodG9kYXlQYWdlLmhhc0NoaWxkTm9kZXMoKSlcbiAgICAgICAgdG9kYXlQYWdlLnJlbW92ZUNoaWxkKHRvZGF5UGFnZS5sYXN0Q2hpbGQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgdHJ1dGggPSBpc1NhbWVEYXkocGFyc2VJU08oYWxsVGFza3NbaV0uZ2V0RHVlRGF0ZSksIHBhcnNlSVNPKHRvZGF5KSk7XG4gICAgICAgIGlmICh0cnV0aCl7XG4gICAgICAgICAgICB0b2RheVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRnJhbWV3b3JrKGFsbFRhc2tzW2ldLmdldFRpdGxlLCBhbGxUYXNrc1tpXS5nZXREdWVEYXRlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhbm5vdW5jZSB0aGF0IHRoZXJlIGlzIG5vIHRhc2sgaWYgdG9kYXkgcGFnZSBpcyBlbXB0eVxuICAgIGlmICghdG9kYXlQYWdlLmhhc0NoaWxkTm9kZXMoKSl7XG4gICAgICAgIGxldCBub25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbm9uZS50ZXh0Q29udGVudCA9IFwiTm90aGluZyBmb3IgdG9kYXkhXCI7XG4gICAgICAgIG5vbmUuc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6ICNDMDZDODQ7IGZvbnQtc2l6ZTogNDVweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiA1MHB4XCI7XG4gICAgICAgIHRvZGF5UGFnZS5hcHBlbmRDaGlsZChub25lKTtcbiAgICB9XG59IiwiaW1wb3J0IGlzVG9tb3Jyb3cgZnJvbSAnZGF0ZS1mbnMvaXNUb21vcnJvdyc7XG5pbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zL2VzbSc7XG5mdW5jdGlvbiBjcmVhdGVGcmFtZXdvcmsodGl0bGUsIGR1ZURhdGUpe1xuICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dCb3hcIik7XG4gICAgYm94LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZGVyOiAycHggc29saWQgI0QxQzE5NTsgaGVpZ2h0OiBhdXRvOyB3aWR0aDogMTIwMHB4XCI7XG5cbiAgICAvL2NvbnRlbnQgb2YgdGhlIHRhc2tcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHRoZXNlIGNsYXNzIHdpbGwgYmUgcmVmZXJlbmNlZCB3aGVuIHRoZSBidXR0b24gZWRpdCBpcyBjbGlja2VkIHRvIGNoYW5nZSBjb250ZW50XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dJbmZvXCIpO1xuICAgIGluZm8uaW5uZXJIVE1MID0gdGl0bGUgKyBcIiBieSBcIiArIGR1ZURhdGU7XG4gICAgaW5mby5zdHlsZS5jc3NUZXh0ID0gXCJjb2xvcjogI0IwQjNCODsgcGFkZGluZzogMTBweDsgZmxvYXQ6IGxlZnQ7IGZvbnQtc2l6ZTogMjVweFwiO1xuICAgIGJveC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICByZXR1cm4gYm94O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9tb3Jyb3dUYXNrcyhkYXRhYmFzZSl7XG4gICAgbGV0IGFsbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9tb3Jyb3dCb3hcIik7XG4gICAgYWxsQm94LmZvckVhY2goKGIpID0+IHtcbiAgICAgICAgYi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGIpO1xuICAgIH0pO1xuXG4gICAgbGV0IHRvbW9ycm93UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9tb3Jyb3dQYWdlXCIpO1xuICAgIGlmICh0b21vcnJvd1BhZ2UuaGFzQ2hpbGROb2RlcygpKVxuICAgICAgICB0b21vcnJvd1BhZ2UucmVtb3ZlQ2hpbGQodG9tb3Jyb3dQYWdlLmxhc3RDaGlsZCk7XG4gICAgbGV0IGFsbFRhc2tzID0gZGF0YWJhc2UuZ2V0QWxsVGFza3M7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChpc1RvbW9ycm93KHBhcnNlSVNPKGFsbFRhc2tzW2ldLmdldER1ZURhdGUpKSl7XG4gICAgICAgICAgICB0b21vcnJvd1BhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRnJhbWV3b3JrKGFsbFRhc2tzW2ldLmdldFRpdGxlLCBhbGxUYXNrc1tpXS5nZXREdWVEYXRlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRvbW9ycm93UGFnZS5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICBsZXQgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbXB0eS50ZXh0Q29udGVudCA9IFwiTm90aGluZyBpcyB1cCB0b21vcnJvdyFcIjtcbiAgICAgICAgZW1wdHkuc3R5bGUuY3NzVGV4dCA9IFwiY29sb3I6ICNDMDZDODQ7IGZvbnQtc2l6ZTogNDVweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiA1MHB4XCI7XG4gICAgICAgIHRvbW9ycm93UGFnZS5hcHBlbmRDaGlsZChlbXB0eSk7XG4gICAgfVxufSIsImltcG9ydCBpc1RvbW9ycm93IGZyb20gJ2RhdGUtZm5zL2lzVG9tb3Jyb3cnO1xuaW1wb3J0IGlzVG9kYXkgZnJvbSAnZGF0ZS1mbnMvaXNUb2RheSc7XG5pbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zL2VzbSc7XG5pbXBvcnQgY2xvc2VzdEluZGV4VG8gZnJvbSAnZGF0ZS1mbnMvY2xvc2VzdEluZGV4VG8nO1xuaW1wb3J0IHtnZXRUb2RheURhdGV9IGZyb20gJy4vdG9kYXkuanMnO1xuZnVuY3Rpb24gY3JlYXRlRnJhbWV3b3JrKHRpdGxlLCBkdWVEYXRlKXtcbiAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZChcInVwY29taW5nQm94XCIpO1xuICAgIGJveC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJvcmRlcjogM3B4IHNvbGlkICMwM0FDMTM7IGhlaWdodDogYXV0bzsgd2lkdGg6IDEyMDBweFwiO1xuXG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gdGl0bGUgKyBcIiBieSBcIiArIGR1ZURhdGU7XG4gICAgaW5mby5zdHlsZS5jc3NUZXh0ID0gXCJjb2xvcjogI0IwQjNCODsgcGFkZGluZzogMTBweDsgZmxvYXQ6IGxlZnQ7IGZvbnQtc2l6ZTogMjVweFwiO1xuICAgIGJveC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICByZXR1cm4gYm94O1xufVxuXG5mdW5jdGlvbiBzb3J0RGF0ZShkYXRhYmFzZSl7XG4gICAgLy8gc29ydCBkYXRlIGZyb20gY2xvc2VzdCB0byBmYXJ0aGVzdCBmcm9tIHRvZGF5XG4gICAgbGV0IGFsbFRhc2tzID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhYmFzZS5nZXRBbGxUYXNrcy5sZW5ndGg7IGorKyl7XG4gICAgICAgIGFsbFRhc2tzLnB1c2goKGRhdGFiYXNlLmdldEFsbFRhc2tzKVtqXSk7XG4gICAgfVxuICAgIGxldCBhbGxEYXRlID0gW10sIHNvcnRlZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSVNPKGFsbFRhc2tzW2ldLmdldER1ZURhdGUpKTtcbiAgICAgICAgaWYgKCFpc1RvZGF5KGRhdGUpICYmICFpc1RvbW9ycm93KGRhdGUpKVxuICAgICAgICAgICAgYWxsRGF0ZS5wdXNoKGRhdGUpO1xuICAgIH1cblxuICAgIHdoaWxlIChhbGxEYXRlLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgbGV0IGNsb3Nlc3REYXRlID0gY2xvc2VzdEluZGV4VG8ocGFyc2VJU08oZ2V0VG9kYXlEYXRlKCkpLCBhbGxEYXRlKTtcbiAgICAgICAgc29ydGVkLnB1c2goYWxsVGFza3NbY2xvc2VzdERhdGVdKTtcbiAgICAgICAgYWxsRGF0ZS5zcGxpY2UoY2xvc2VzdERhdGUsIDEpO1xuICAgICAgICBhbGxUYXNrcy5zcGxpY2UoY2xvc2VzdERhdGUsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gc29ydGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXBjb21pbmdUYXNrcyhkYXRhYmFzZSl7XG4gICAgbGV0IHVwY29taW5nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cGNvbWluZ0JveFwiKTtcbiAgICB1cGNvbWluZ0JveC5mb3JFYWNoKChiKSA9PiB7XG4gICAgICAgIGIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChiKTtcbiAgICB9KTtcblxuICAgIGxldCBhbGxUYXNrcyA9IHNvcnREYXRlKGRhdGFiYXNlKTtcbiAgICBsZXQgdXBjb21pbmdQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZ1BhZ2VcIik7XG4gICAgaWYgKHVwY29taW5nUGFnZS5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICB1cGNvbWluZ1BhZ2UucmVtb3ZlQ2hpbGQodXBjb21pbmdQYWdlLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3MubGVuZ3RoOyBpKyspe1xuICAgICAgICB1cGNvbWluZ1BhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRnJhbWV3b3JrKGFsbFRhc2tzW2ldLmdldFRpdGxlLCBhbGxUYXNrc1tpXS5nZXREdWVEYXRlKSk7XG4gICAgfVxuXG4gICAgaWYgKCF1cGNvbWluZ1BhZ2UuaGFzQ2hpbGROb2RlcygpKXtcbiAgICAgICAgbGV0IG5vbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm9uZS50ZXh0Q29udGVudCA9IFwiWW91IGhhdmUgbm90aGluZyBjb21pbmcgdXAgaW4gdGhlIGZ1dHVyZSFcIjtcbiAgICAgICAgbm9uZS5zdHlsZS5jc3NUZXh0ID0gXCJjb2xvcjogI0MwNkM4NDsgZm9udC1zaXplOiA0NXB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDUwcHhcIjtcbiAgICAgICAgdXBjb21pbmdQYWdlLmFwcGVuZENoaWxkKG5vbmUpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vaG9tZXBhZ2UuY3NzJztcbmltcG9ydCB7VGFza30gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi9kYXRhYmFzZSc7XG5pbXBvcnQge2NyZWF0ZUhvbWVwYWdlLCBhZGRUYXNrRm9ybSwgYWRkUHJvamVjdEZvcm0sIGhvbWVwYWdlQnV0dG9uU2V0VXAsIGZpbGxPdXRIb21lUGFnZX0gZnJvbSAnLi9ob21lcGFnZS5qcyc7XG5pbXBvcnQge2NyZWF0ZVRpdGxlLCBjcmVhdGVEYXRlLCBjcmVhdGVQcmlvcml0eUxpc3QsIGNyZWF0ZVByb2plY3RMaXN0fSBmcm9tICcuL2hvbWVwYWdlLmpzJztcbmltcG9ydCB7Y3JlYXRlVG9kYXlUYXNrcywgZ2V0VG9kYXlEYXRlfSBmcm9tICcuL3RvZGF5LmpzJztcbmltcG9ydCB7IHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMvZXNtJztcbmltcG9ydCBpc0JlZm9yZSBmcm9tICdkYXRlLWZucy9pc0JlZm9yZSc7XG5pbXBvcnQge2NyZWF0ZVVwY29taW5nVGFza3N9IGZyb20gJy4vdXBjb21pbmcuanMnO1xuaW1wb3J0IHtjcmVhdGVUb21vcnJvd1Rhc2tzfSBmcm9tICcuL3RvbW9ycm93LmpzJztcbmltcG9ydCB7Y3JlYXRlUHJvamVjdFBhZ2V9IGZyb20gJy4vcHJvamVjdFBhZ2UuanMnO1xuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9ucygpe1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcImJ0blwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cbiAgICBsZXQgYWxsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudVwiKTtcblxuICAgIGFsbEJ1dHRvbnNbMF0udGV4dENvbnRlbnQgPSBcIkFsbFwiO1xuICAgIGFsbEJ1dHRvbnNbMF0uc2V0QXR0cmlidXRlKCdpZCcsICdhbGwnKTtcblxuICAgIGFsbEJ1dHRvbnNbMV0udGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgYWxsQnV0dG9uc1sxXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5Jyk7XG5cbiAgICBhbGxCdXR0b25zWzJdLnRleHRDb250ZW50ID0gXCJUb21vcnJvd1wiO1xuICAgIGFsbEJ1dHRvbnNbMl0uc2V0QXR0cmlidXRlKCdpZCcsICd0b21vcnJvdycpO1xuXG4gICAgYWxsQnV0dG9uc1szXS50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcbiAgICBhbGxCdXR0b25zWzNdLnNldEF0dHJpYnV0ZSgnaWQnLCAndXBjb21pbmcnKTtcblxuICAgIGFsbEJ1dHRvbnNbNF0udGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgYWxsQnV0dG9uc1s0XS5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJwcm9qZWN0c1wiKTtcbn1cblxuXG4vLyBjcmVhdGUgYWxsIDUgcGFnZXM6IEhvbWVwYWdlLCB0b2RheSwgdG1yLCB1cGNvbWluZywgYW5kIHByb2plY3RzXG5mdW5jdGlvbiBjcmVhdGVQYWdlcygpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGxldCBwYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFnZXMuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgIGxldCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhZ2UuY2xhc3NMaXN0LmFkZChcInBhZ2VzXCIpO1xuICAgICAgICBwYWdlcy5hcHBlbmRDaGlsZChwYWdlKTtcbiAgICB9XG5cbiAgICBsZXQgYWxsUGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhZ2VzXCIpO1xuXG4gICAgYWxsUGFnZXNbMF0uY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlXCIpO1xuXG4gICAgYWxsUGFnZXNbMV0uY2xhc3NMaXN0LmFkZChcInRvZGF5UGFnZVwiKTtcblxuICAgIGFsbFBhZ2VzWzJdLmNsYXNzTGlzdC5hZGQoXCJ0b21vcnJvd1BhZ2VcIik7XG5cbiAgICBhbGxQYWdlc1szXS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmdQYWdlXCIpO1xuXG4gICAgYWxsUGFnZXNbNF0uY2xhc3NMaXN0LmFkZChcInByb2plY3RQYWdlXCIpO1xufVxuXG5mdW5jdGlvbiBzaG93Q29udGVudChwYWdlSW5kZXgpe1xuICAgIGxldCBhbGxQYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZXNcIik7XG4gICAgYWxsUGFnZXMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICBwLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmVcIjtcbiAgICB9KTtcbiAgICBhbGxQYWdlc1twYWdlSW5kZXhdLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbihkYXRhYmFzZSl7XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcbiAgICBkZWxldGVCdXR0b25zLmZvckVhY2goKGVhKSA9PiB7XG4gICAgICAgIGVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyByZWZlciB0byBib3ggY2xhc3NcbiAgICAgICAgICAgIGxldCBncmFuZHBhcmVudCA9IGVhLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBvbGREYXRhID0gKCgoZ3JhbmRwYXJlbnQuY2hpbGROb2RlcylbMF0pLmNoaWxkTm9kZXMpWzBdLnRleHRDb250ZW50LnNwbGl0KFwiYnlcIik7XG4gICAgICAgICAgICAvL2RlbGV0ZSBhbnkgd2hpdGVzcGFjZSBpbiB0aGUgc3RyaW5nXG4gICAgICAgICAgICBsZXQgb2xkVGl0bGUgPSBvbGREYXRhWzBdLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgbGV0IG9sZER1ZURhdGUgPSBvbGREYXRhWzFdLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgbGV0IG9sZFRhc2sgPSBbb2xkVGl0bGUsIG9sZER1ZURhdGVdO1xuICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSB0YXNrIGZyb20gYWxsIHRoZSB0YXNrcyBpbiBkYXRhYmFzZVxuICAgICAgICAgICAgbGV0IGFsbFRhc2tzID0gZGF0YWJhc2UuZ2V0QWxsVGFza3MsIGRlbGV0ZWRUYXNrO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxUYXNrcy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYgKGFsbFRhc2tzW2pdLmdldFRpdGxlID09PSBvbGRUaXRsZSAmJiBhbGxUYXNrc1tqXS5nZXREdWVEYXRlID09PSBvbGREdWVEYXRlKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlZFRhc2sgPSBhbGxUYXNrc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYWxsVGFza3Muc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIHRhc2sgZnJvbSB0aGUgb25lIHByb2plY3QgaW4gdGhlIGRhdGFiYXNlIFxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkZWxldGVkVGFzay5nZXRQcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIGxldCBhbGxQcm9qID0gZGF0YWJhc2UuZ2V0QWxsUHJvamVjdHM7XG4gICAgICAgICAgICBpZiAocHJvamVjdCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFByb2oubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsUHJvaltqXS5nZXRQcm9qZWN0TmFtZSA9PT0gcHJvamVjdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9qW2pdLnJlbW92ZVRhc2sgPSBvbGRUYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZW1vdmUgYm94IGZyb20gZGlzcGxheVxuICAgICAgICAgICAgZ3JhbmRwYXJlbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChncmFuZHBhcmVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhYmFzZSk7XG5cbiAgICAgICAgICAgIFN0b3JhZ2UuY2xlYXJEYXRhYmFzZSgpO1xuICAgICAgICAgICAgU3RvcmFnZS5zZXRPYmplY3QoJ2RhdGFiYXNlJywgZGF0YWJhc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YWJhc2U7XG59XG5cbmZ1bmN0aW9uIGVkaXRCdXR0b24oZGF0YWJhc2Upe1xuICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0XCIpO1xuICAgIGNvbnNvbGUubG9nKGVkaXRCdXR0b24pO1xuICAgIGVkaXRCdXR0b24uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRGb3JtXCIpO1xuICAgICAgICAgICAgaWYgKGUubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICBsZXQgYm94ID0gYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBsZXQgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5pbm5lckhUTUwgPSBcIjxicj48YnI+PGJyPlwiO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoXCJlZGl0Rm9ybVwiKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGNyZWF0ZVRpdGxlKCk7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZWRpdEJveCcpO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlID0gY3JlYXRlRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVFZGl0XCIpO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gY3JlYXRlUHJpb3JpdHlMaXN0KCk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5TGlzdEVkaXRcIik7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByb2pMaXN0ID0gY3JlYXRlUHJvamVjdExpc3QoZGF0YWJhc2UpO1xuICAgICAgICAgICAgICAgIHByb2pMaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TGlzdEVkaXRcIik7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQocHJvakxpc3QpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VCdXR0b25FZGl0XCIpO1xuICAgICAgICAgICAgICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuICAgICAgICAgICAgICAgIGNsb3NlQnRuLnN0eWxlLmNzc1RleHQgPSBcImJvcmRlcjogbm9uZTsgZm9udC1zaXplOiAyNXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgY29sb3I6ICNGOEIxOTU7IHBhZGRpbmc6IDEwcHhcIjtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEJ1dHRvbkVkaXRcIik7XG4gICAgICAgICAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgICAgICAgICBzdWJtaXRCdG4uc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyOiBub25lOyBmb250LXNpemU6IDI1cHg7IGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBjb2xvcjogI0Y2NzI4MDsgcGFkZGluZzogMTBweFwiO1xuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0Rm9ybVwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRGb3JtXCIpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGFsbFswXS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGFsbFswXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vZWRpdEZvcm0uc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OiBub25lJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRGb3JtXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsbEluZm8gPSBzWzBdLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUaXRsZSA9IChhbGxJbmZvWzNdLmNoaWxkTm9kZXMpWzFdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0R1ZURhdGUgPSAoYWxsSW5mb1s0XS5jaGlsZE5vZGVzKVsxXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdQcmlvcml0eSA9IChhbGxJbmZvWzVdLmNoaWxkTm9kZXMpWzFdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSAoYWxsSW5mb1s2XS5jaGlsZE5vZGVzKVsxXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9qZWN0ID09PSBcIk5vbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9qZWN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1RpdGxlLmxlbmd0aCAhPSAwICYmIG5ld0R1ZURhdGUubGVuZ3RoICE9IDAgJiYgIWlzQmVmb3JlKHBhcnNlSVNPKG5ld0R1ZURhdGUpLCBwYXJzZUlTTyhnZXRUb2RheURhdGUoKSkpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2xkRGF0YSA9ICgoKGJveC5jaGlsZE5vZGVzKVswXSkuY2hpbGROb2RlcylbMF0udGV4dENvbnRlbnQuc3BsaXQoXCJieVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RlbGV0ZSBhbnkgd2hpdGVzcGFjZSBpbiB0aGUgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFRpdGxlID0gb2xkRGF0YVswXS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2xkRHVlRGF0ZSA9IG9sZERhdGFbMV0uc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ28gdGhyb3VnaCBkYXRhYmFzZSB0byBmaW5kIHRoZSB0YXNrIHRoYXQgbWF0Y2hlcyB0aGlzIHRpdGxlIEFORCBkdWUgZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGxUYXNrID0gZGF0YWJhc2UuZ2V0QWxsVGFza3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFRhc2tbaV0uZ2V0VGl0bGUgPT09IG9sZFRpdGxlICYmIGFsbFRhc2tbaV0uZ2V0RHVlRGF0ZSA9PT0gb2xkRHVlRGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUYXNrW2ldLmNoYW5nZVRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUYXNrW2ldLmNoYW5nZUR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVGFza1tpXS5jaGFuZ2VQcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ByaW9yaXR5ID09PSBcIkhpZ2hcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGlubGluZS1ibG9jazsgYm9yZGVyOiAycHggc29saWQgcmVkOyBoZWlnaHQ6IGF1dG87IHdpZHRoOiAxMjAwcHhcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld1ByaW9yaXR5ID09PSBcIk1lZGl1bVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7IGhlaWdodDogYXV0bzsgd2lkdGg6IDEyMDBweFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3UHJpb3JpdHkgPT09ICdMb3cnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBib3JkZXI6IDJweCBzb2xpZCAjMDNBQzEzOyBoZWlnaHQ6IGF1dG87IHdpZHRoOiAxMjAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFByb2plY3QgPSBhbGxUYXNrW2ldLmdldFByb2plY3ROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb2plY3QgIT0gYWxsVGFza1tpXS5nZXRQcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byByZW1vdmUgdGFzayBmcm9tIHByb2plY3QgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGxQcm9qZWN0cyA9IGRhdGFiYXNlLmdldEFsbFByb2plY3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29sZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkUHJvamVjdCA9PT0gYWxsUHJvamVjdHNbal0uZ2V0UHJvamVjdE5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb2plY3QgPT09IFwiTm9uZVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NsZWFuIHByb2plY3QgdG8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRhc2tbaV0uY2hhbmdlUHJvamVjdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUHJvamVjdHNbal0uY2xlYW5Qcm9qZWN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVGFza1tpXS5jaGFuZ2VQcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgdGFzayBmcm9tIHRoYXQgb2xkIHByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1tqXS5jbGVhblByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9qZWN0ID09PSBhbGxQcm9qZWN0c1tqXS5nZXRQcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUYXNrW2ldLmNoYW5nZVByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRhc2sgdG8gbmV3IHByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb2plY3RzW2pdLmFkZFRhc2sgPSBuZXcgVGFzayhuZXdUaXRsZSwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHksIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbGV0IHRoZSB1c2VyIGhpdCBlZGl0IGFnYWluIGFmdGVyIGl0J3MgY2xvc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdEZvcm1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsWzBdLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYWxsWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3VwZGF0ZSB3aGF0IGlzIGRpc3BsYXllZCBhZnRlciBlZGl0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoKGJveC5jaGlsZE5vZGVzKVswXSkuY2hpbGROb2RlcylbMF0udGV4dENvbnRlbnQgPSBuZXdUaXRsZSArIFwiIGJ5IFwiICsgbmV3RHVlRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YWJhc2UuZ2V0QWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UuY2xlYXJEYXRhYmFzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2Uuc2V0T2JqZWN0KCdkYXRhYmFzZScsIGRhdGFiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3UgZWl0aGVyIGhhdmUgbm90IGZpbGwgb3V0IGFsbCBib3hlcyBvciB0aGUgZGF0ZSB5b3UgZW50ZXJlZCBpcyBiZWZvcmUgVE9EQVkhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGFiYXNlO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZGF5UGFnZShkYXRhYmFzZSl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzaG93Q29udGVudCgxKTtcbiAgICAgICAgY3JlYXRlVG9kYXlUYXNrcyhkYXRhYmFzZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9tb3Jyb3dQYWdlKGRhdGFiYXNlKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvbW9ycm93XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNob3dDb250ZW50KDIpO1xuICAgICAgICBjcmVhdGVUb21vcnJvd1Rhc2tzKGRhdGFiYXNlKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVVcGNvbWluZ1BhZ2UoZGF0YWJhc2Upe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXBjb21pbmdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2hvd0NvbnRlbnQoMyk7XG4gICAgICAgIGNyZWF0ZVVwY29taW5nVGFza3MoZGF0YWJhc2UpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RQYWdlKGRhdGFiYXNlKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNob3dDb250ZW50KDQpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0UGFnZShkYXRhYmFzZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSG9tZXBhZ2UoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd0NvbnRlbnQoMCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBtYWluKCl7ICAgIFxuICAgIGxldCByZXMgPSBTdG9yYWdlLmdldE9iamVjdCgnZGF0YWJhc2UnKTtcbiAgICBsZXQgZGF0YWJhc2U7XG4gICAgLy8gaWYgZGF0YSBoYXMgZXhpc3RlZCBiZWZvcmUsIHRoZW4gcmV0cmlldmUgYW5kIHRyYW5zZm9ybSBpdC4gZWxzZSBzdGFydCBmcm9tIHNjcmF0Y2hcbiAgICBpZiAocmVzICE9IG51bGwpe1xuICAgICAgICBkYXRhYmFzZSA9IFN0b3JhZ2UudHJhbnNmb3JtRGF0YShyZXMpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBkYXRhYmFzZSA9IG5ldyBEYXRhYmFzZSgpO1xuICAgIH1cbiAgICAvL2xldCBkYXRhYmFzZSA9IG5ldyBEYXRhYmFzZSgpO1xuICAgIGNyZWF0ZUJ1dHRvbnMoKTtcbiAgICBjcmVhdGVQYWdlcygpO1xuICAgIGNyZWF0ZUhvbWVwYWdlKCk7XG4gICAgLy9yaWdodCBub3cgaXRzIGFuIGVtcHR5IGFycmF5IGJ1dCBtYWtlIHN1cmUgdG8gbW9kaWZ5IGl0IGxhdGVyIGluIG1haW4gZnVuY3Rpb25cbiAgICBhZGRUYXNrRm9ybShkYXRhYmFzZSk7XG4gICAgYWRkUHJvamVjdEZvcm0oKTtcbiAgICBob21lcGFnZUJ1dHRvblNldFVwKCk7XG4gICAgZmlsbE91dEhvbWVQYWdlKGRhdGFiYXNlKTtcbiAgICBzaG93Q29udGVudCgwKTtcblxuICAgIC8vIGFkZGluZyBhIG5ldyB0YXNrIHRvIHRoZSBkYXRhYmFzZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkRm9ybVN1Ym1pdEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlSW5wdXRBZGRUYXNrXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZUlucHV0QWRkVGFza1wiKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcERvd25Qcmlvcml0eVwiKTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gcHJpb3JpdHlMaXN0Lm9wdGlvbnNbcHJpb3JpdHlMaXN0LnNlbGVjdGVkSW5kZXhdLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3BEb3duUHJvamVjdFwiKTtcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0TGlzdC5vcHRpb25zW3Byb2plY3RMaXN0LnNlbGVjdGVkSW5kZXhdLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgdGFzaztcblxuICAgICAgICAvL1RPRE86IHN0YXJ0IGhlcmU6IG11c3QgY2hlY2sgdGhhdCBkYXRlcyBhcmUgTk9UIGJlZm9yZSB0b2RheVxuICAgICAgICBpZiAodGl0bGUubGVuZ3RoICE9IDAgJiYgZHVlRGF0ZS5sZW5ndGggIT0gMCAmJiAhaXNCZWZvcmUocGFyc2VJU08oZHVlRGF0ZSksIHBhcnNlSVNPKGdldFRvZGF5RGF0ZSgpKSkpe1xuICAgICAgICAgICAgaWYgKHByb2plY3QgPT09IFwiTm9uZVwiKVxuICAgICAgICAgICAgICAgIHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIG51bGwpO1xuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBsZXQgYWxsUHJvaiA9IGRhdGFiYXNlLmdldEFsbFByb2plY3RzO1xuICAgICAgICAgICAgICAgIC8vIGFkZGluZyB0aGF0IHBhcnRpY3VsYXIgdGFzayB0byB0aGUgc3BlY2lmaWVkIHByb2plY3RcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2oubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsUHJvaltpXS5nZXRQcm9qZWN0TmFtZSA9PT0gcHJvamVjdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9qW2ldLmFkZFRhc2sgPSB0YXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YWJhc2UuYWRkTmV3VGFzayA9IHRhc2s7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFN0b3JhZ2UuY2xlYXJEYXRhYmFzZSgpO1xuICAgICAgICAgICAgU3RvcmFnZS5zZXRPYmplY3QoJ2RhdGFiYXNlJywgZGF0YWJhc2UpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhYmFzZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tGb3JtXCIpLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmVcIjtcbiAgICAgICAgICAgIGZpbGxPdXRIb21lUGFnZShkYXRhYmFzZSk7XG5cbiAgICAgICAgICAgIC8vZm9yIHRvZGF5IHBhZ2VcbiAgICAgICAgICAgIGdlbmVyYXRlVG9kYXlQYWdlKGRhdGFiYXNlKTtcbiAgICAgICAgICAgIC8vIGZvciB0b21vcnJvdyBwYWdlXG4gICAgICAgICAgICBnZW5lcmF0ZVRvbW9ycm93UGFnZShkYXRhYmFzZSk7XG5cbiAgICAgICAgICAgIC8vIGdvIGJhY2sgdG8gaG9tZXBhZ2UgZnJvbSBhbm90aGVyIHBhZ2VcbiAgICAgICAgICAgIGdlbmVyYXRlSG9tZXBhZ2UoKTtcblxuICAgICAgICAgICAgLy8gZm9yIHVwY29taW5nIHBhZ2VcbiAgICAgICAgICAgIGdlbmVyYXRlVXBjb21pbmdQYWdlKGRhdGFiYXNlKTtcblxuICAgICAgICAgICAgLy9mb3IgcHJvamVjdCBwYWdlXG4gICAgICAgICAgICBnZW5lcmF0ZVByb2plY3RQYWdlKGRhdGFiYXNlKTtcblxuICAgICAgICAgICAgZGF0YWJhc2UgPSBlZGl0QnV0dG9uKGRhdGFiYXNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gYWRkIGRlbGV0ZSBmdW5jdGlvbiBoZXJlXG4gICAgICAgICAgICBkYXRhYmFzZSA9IGRlbGV0ZUJ1dHRvbihkYXRhYmFzZSk7XG4gICAgICAgIH0gIFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgZWl0aGVyIGhhdmUgbm90IGZpbGwgb3V0IGFsbCBib3hlcyBvciB0aGUgZGF0ZSB5b3UgZW50ZXJlZCBpcyBiZWZvcmUgVE9EQVkhXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhZGRpbmcgYSBuZXcgcHJvamVjdCB0byB0aGUgbmV3IGRhdGFiYXNlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0U3VibWl0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVJbnB1dFByb2plY3RGb3JtXCIpLnZhbHVlO1xuICAgICAgICBpZiAodGl0bGUubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gICAgICAgICAgICBkYXRhYmFzZS5hZGRQcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdEZvcm1cIikuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogbm9uZVwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YWJhc2UpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZHJvcCBkb3duIHByb2plY3QgbGlzdCBhbmQgYWRkIHRoYXQgbmV3IHByb2plY3QgYWJvdmUgdG8gYWRkVGFza1xuICAgICAgICAgICAgbGV0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcERvd25Qcm9qZWN0XCIpLmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkYXRhYmFzZSA9IGRlbGV0ZUJ1dHRvbihkYXRhYmFzZSk7XG4gICAgZGF0YWJhc2UgPSBlZGl0QnV0dG9uKGRhdGFiYXNlKTtcbiAgICBnZW5lcmF0ZUhvbWVwYWdlKCk7XG4gICAgZ2VuZXJhdGVUb2RheVBhZ2UoZGF0YWJhc2UpO1xuICAgIGdlbmVyYXRlVG9tb3Jyb3dQYWdlKGRhdGFiYXNlKTtcbiAgICBnZW5lcmF0ZVVwY29taW5nUGFnZShkYXRhYmFzZSk7XG4gICAgZ2VuZXJhdGVQcm9qZWN0UGFnZShkYXRhYmFzZSk7XG59XG5tYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9