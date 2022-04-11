/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_norm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./norm.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/norm.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_norm_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Roboto+Slab:wght@100;400;700;900&family=Roboto:wght@100;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n  --board-length: calc(var(--board-size) * var(--grid-size));\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --ocean-white: #EFDBCB;\n  --ocean-blue-300: #4BB4DE;\n  --ocean-blue-500: #3B8AC4;\n  --ocean-blue-700: #345DA7;\n  --ocean-blue-900: #2b3c5b;\n  --board-border: var(--ocean-white);\n  --wood: #954A00;\n  --translucent-fire: #F1962EAA;\n  --fire: #F1962E;\n  --missed: var(--gray);\n  --sunk: var(--ocean-blue-900);\n  --transparent: #00000000;\n}\n\nbody {\n  min-height: 100vh;\n  padding-top: 2rem;\n  padding-left: 5rem;\n  padding-right: 5rem;\n  background-color: var(--ocean-blue-900);\n  font-family: 'Poppins', sans-serif;\n  display: grid;\n  grid-template-rows: 6rem 1fr 3rem;\n  gap: 1rem;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.header > .logo {\n  font-family: 'Roboto Slab', serif;\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--white);\n}\n\n.header > .sub {\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.5rem;\n  font-weight: 100;\n  color: var(--ocean-white);\n}\n\n.mainSection {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 25rem 1fr;\n  gap: 2rem;\n}\n\n.lock {\n  pointer-events: none;\n}\n\n.player {\n  width: 22rem;\n  display: grid;\n  grid-template-rows: 22rem 2rem;\n  align-items: center;\n  justify-items: center;\n  gap: 1rem;\n}\n\n.player.main {\n  justify-self: end;\n}\n\n.player.opponent {\n  justify-self: start;\n}\n\n.tag {\n  color: var(--white);\n  font-weight: 700;\n  user-select: none;\n}\n\n.btn {\n  padding: .5rem 1rem;\n  border-radius: .25rem;\n  background-color: var(--ocean-blue-300);\n  color: var(--white);\n  user-select: none;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.btn:hover {\n  background-color: var(--ocean-blue-500);\n}\n\n.lock.btn {\n  opacity: .5;\n}\n\n.board {\n  margin: 1rem;\n  height: var(--board-length);\n  width: var(--board-length);\n  border-radius: .25rem;\n  background-color: var(--ocean-white);\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.board > .seaLayer,\n.board > .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.board > .seaLayer {\n  user-select: none;\n  z-index: 2;\n}\n\n.board > .shipLayer {\n  z-index: 1;\n}\n\n.player.main .seaLayer {\n  user-select: none;\n  pointer-events: none;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board > .shipLayer > .grid {\n  border-radius: .2rem;\n  background-color: var(--ocean-blue-300);\n}\n\n.board > .shipLayer > .grid.hasShip {\n  background-color: var(--ocean-blue-700);\n}\n\n.player.opponent > .board > .shipLayer > .grid.hasShip {\n  background-color: var(--ocean-blue-300);\n}\n\n.board > .seaLayer > .grid {\n  border-radius: .2rem;\n  position: relative;\n}\n\n.board > .seaLayer > .grid:not(.alreadyHit):not(.alreadyMissed):hover {\n  background-color: var(--ocean-blue-500);\n}\n\n.board > .seaLayer > .grid.alreadyHit {\n  background-color: var(--ocean-blue-500);\n}\n\n.board > .seaLayer > .grid.alreadyHit::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'whatshot';\n  color: var(--fire);\n}\n\n.board > .seaLayer > .grid.alreadyMissed::after {\n  position: absolute;\n  content: 'waves';\n  color: var(--ocean-white);\n  font-size: 2rem;\n  font-weight: 400;\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'local_fire_department';\n  color: var(--fire);\n}\n\n.ctrl {\n  grid-row: 2 / 3;\n  grid-column: 1 / 3;\n  display: grid;\n  grid-template-rows: 2rem 2rem;\n  gap: 1rem;\n}\n\n.ctrl > .btn {\n  width: 10rem;\n  justify-self: center;\n  align-self: center;\n}\n\n.footer {\n\theight: 3rem;\n\twidth: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 0.75rem;\n\tcolor: var(--ocean-white);\n\tdisplay: grid;\n\tgrid-template-rows: repeat(2, 1.5rem);\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n\theight: 1.5rem;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tgap: 0.25rem;\n}\n\n.footer a {\n\twidth: 1rem;\n\theight: 1rem;\n}\n\n.footer .github {\n\twidth: 100%;\n\theight: 100%;\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import './norm.css';\n@import 'https://fonts.googleapis.com/icon?family=Material+Icons';\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Roboto+Slab:wght@100;400;700;900&family=Roboto:wght@100;400;500;700&display=swap');\n:root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n  --board-length: calc(var(--board-size) * var(--grid-size));\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --ocean-white: #EFDBCB;\n  --ocean-blue-300: #4BB4DE;\n  --ocean-blue-500: #3B8AC4;\n  --ocean-blue-700: #345DA7;\n  --ocean-blue-900: #2b3c5b;\n  --board-border: var(--ocean-white);\n  --wood: #954A00;\n  --translucent-fire: #F1962EAA;\n  --fire: #F1962E;\n  --missed: var(--gray);\n  --sunk: var(--ocean-blue-900);\n  --transparent: #00000000;\n}\n\nbody {\n  min-height: 100vh;\n  padding-top: 2rem;\n  padding-left: 5rem;\n  padding-right: 5rem;\n  background-color: var(--ocean-blue-900);\n  font-family: 'Poppins', sans-serif;\n  display: grid;\n  grid-template-rows: 6rem 1fr 3rem;\n  gap: 1rem;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.header > .logo {\n  font-family: 'Roboto Slab', serif;\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--white);\n}\n\n.header > .sub {\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.5rem;\n  font-weight: 100;\n  color: var(--ocean-white);\n}\n\n.mainSection {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 25rem 1fr;\n  gap: 2rem;\n}\n\n.lock {\n  pointer-events: none;\n}\n\n.player {\n  width: 22rem;\n  display: grid;\n  grid-template-rows: 22rem 2rem;\n  align-items: center;\n  justify-items: center;\n  gap: 1rem;\n}\n\n.player.main {\n  justify-self: end;\n}\n\n.player.opponent {\n  justify-self: start;\n}\n\n.tag {\n  color: var(--white);\n  font-weight: 700;\n  user-select: none;\n}\n\n.btn {\n  padding: .5rem 1rem;\n  border-radius: .25rem;\n  background-color: var(--ocean-blue-300);\n  color: var(--white);\n  user-select: none;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.btn:hover {\n  background-color: var(--ocean-blue-500);\n}\n\n.lock.btn {\n  opacity: .5;\n}\n\n.board {\n  margin: 1rem;\n  height: var(--board-length);\n  width: var(--board-length);\n  border-radius: .25rem;\n  background-color: var(--ocean-white);\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.board > .seaLayer,\n.board > .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.board > .seaLayer {\n  user-select: none;\n  z-index: 2;\n}\n\n.board > .shipLayer {\n  z-index: 1;\n}\n\n.player.main .seaLayer {\n  user-select: none;\n  pointer-events: none;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board > .shipLayer > .grid {\n  border-radius: .2rem;\n  background-color: var(--ocean-blue-300);\n}\n\n.board > .shipLayer > .grid.hasShip {\n  background-color: var(--ocean-blue-700);\n}\n\n.player.opponent > .board > .shipLayer > .grid.hasShip {\n  background-color: var(--ocean-blue-300);\n}\n\n.board > .seaLayer > .grid {\n  border-radius: .2rem;\n  position: relative;\n}\n\n.board > .seaLayer > .grid:not(.alreadyHit):not(.alreadyMissed):hover {\n  background-color: var(--ocean-blue-500);\n}\n\n.board > .seaLayer > .grid.alreadyHit {\n  background-color: var(--ocean-blue-500);\n}\n\n.board > .seaLayer > .grid.alreadyHit::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'whatshot';\n  color: var(--fire);\n}\n\n.board > .seaLayer > .grid.alreadyMissed::after {\n  position: absolute;\n  content: 'waves';\n  color: var(--ocean-white);\n  font-size: 2rem;\n  font-weight: 400;\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'local_fire_department';\n  color: var(--fire);\n}\n\n.ctrl {\n  grid-row: 2 / 3;\n  grid-column: 1 / 3;\n  display: grid;\n  grid-template-rows: 2rem 2rem;\n  gap: 1rem;\n}\n\n.ctrl > .btn {\n  width: 10rem;\n  justify-self: center;\n  align-self: center;\n}\n\n.footer {\n\theight: 3rem;\n\twidth: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 0.75rem;\n\tcolor: var(--ocean-white);\n\tdisplay: grid;\n\tgrid-template-rows: repeat(2, 1.5rem);\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n\theight: 1.5rem;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tgap: 0.25rem;\n}\n\n.footer a {\n\twidth: 1rem;\n\theight: 1rem;\n}\n\n.footer .github {\n\twidth: 100%;\n\theight: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/norm.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/norm.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n", "",{"version":3,"sources":["webpack://./src/css/norm.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;EACE,0JAA0J;AAC5J","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

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
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
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
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
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
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

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
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/assets/audio/click.wav":
/*!************************************!*\
  !*** ./src/assets/audio/click.wav ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/90329493ac50795f809f.wav";

/***/ }),

/***/ "./src/assets/audio/deepBubble.wav":
/*!*****************************************!*\
  !*** ./src/assets/audio/deepBubble.wav ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/495070c9edb4d74c3e05.wav";

/***/ }),

/***/ "./src/assets/audio/gameStart.wav":
/*!****************************************!*\
  !*** ./src/assets/audio/gameStart.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/952b0801786b04a70a01.wav";

/***/ }),

/***/ "./src/assets/audio/hit.wav":
/*!**********************************!*\
  !*** ./src/assets/audio/hit.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/535e5b88230207f8a317.wav";

/***/ }),

/***/ "./src/assets/audio/sunkExplosion.wav":
/*!********************************************!*\
  !*** ./src/assets/audio/sunkExplosion.wav ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/89a0ee30d91b0267b6ab.wav";

/***/ }),

/***/ "./src/assets/img/github.png":
/*!***********************************!*\
  !*** ./src/assets/img/github.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2c0b3d17597d506011d6.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* reexport safe */ _models_game__WEBPACK_IMPORTED_MODULE_1__.AI),
/* harmony export */   "EASY": () => (/* reexport safe */ _models_game__WEBPACK_IMPORTED_MODULE_1__.EASY),
/* harmony export */   "HARD": () => (/* reexport safe */ _models_game__WEBPACK_IMPORTED_MODULE_1__.HARD),
/* harmony export */   "HUMAN": () => (/* reexport safe */ _models_game__WEBPACK_IMPORTED_MODULE_1__.HUMAN),
/* harmony export */   "MAIN": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_2__.MAIN),
/* harmony export */   "NORMAL": () => (/* reexport safe */ _models_game__WEBPACK_IMPORTED_MODULE_1__.NORMAL),
/* harmony export */   "OPPONENT": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_2__.OPPONENT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/game */ "./src/js/models/game.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/js/view.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  /**
   * Initialize 2 players with randomly autofilled board
   * before starting to draw the board.
   */
  function initPlayersAndBoards(player1Type, player2Type) {
    _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].initPlayersAndBoards(player1Type, player2Type);
  }
  /**
   * Call View module to draw the board of a certain player.
   * @param {Player} player Player object.
   * @param {Symbol} mainOrOpponent As Main player or opponent.
   */


  function drawASingleBoard(player, mainOrOpponent) {
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].drawBoard(_models_game__WEBPACK_IMPORTED_MODULE_1__["default"].DEFAULT_BOARD_SIZE, player.id(), mainOrOpponent, player.board().canHitShip);
  }
  /**
   * Draw two boards in perspective of one player.
   *  1. His own board (MAIN).
   *  2. Opponent's board (OPPONENT).
   *
   * @param {Number} playerId Player's id.
   */


  function drawBoardsForPlayer(playerId) {
    drawASingleBoard(_models_game__WEBPACK_IMPORTED_MODULE_1__["default"].player(playerId), _view__WEBPACK_IMPORTED_MODULE_2__.MAIN);
    var opponentId = (playerId + 1) % _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].players().length;
    drawASingleBoard(_models_game__WEBPACK_IMPORTED_MODULE_1__["default"].player(opponentId), _view__WEBPACK_IMPORTED_MODULE_2__.OPPONENT);
  }
  /**
   * Remove both main and opponent's board from the DOM.
   */


  function clearAllBoards() {
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].clearAllBoards();
  }
  /**
   * Lock all boards, prevent player from interact with the board
   * before starting the game.
   */


  function lockOpponentBoard() {
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].lockOpponentBoard();
  }
  /**
   * Once the game is prepared, unlock all boards, so that player gain
   * the access to the board.
   */


  function unlockOpponentBoard() {
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].unlockOpponentBoard();
  }
  /**
   * Gameover logic.
   */


  function gameover(winnerId) {
    // eslint-disable-next-line no-alert
    alert("".concat(winnerId, " win!"));
    lockOpponentBoard();
  }
  /**
   * Actual attack logic.
   * 1. Attack the target spot.
   * 2. Render the view according to the attack result.
   * 3. Return a list of surrounding points if this attack
   * cause a ship to sink.
   * @param {Number} row Axi Y of target gird.
   * @param {Number} column Axi X of target grid.
   * @param {Number} opponentId Id of opponent player.
   * @return {Array}
   *  Return undefined if spot already been attacked.
   *  Return -1 if missed.
   *  If hit,
   *    Return a list of surrounding points if a ship is sunk after this attack.
   *    Otherwise, return 0.
   */


  function playerAttackOneSpot(row, column, opponentId) {
    var board = _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].player(opponentId).board(); // attack

    if (board.alreadyBeenAttacked(row, column)) return undefined;
    var shipId = board.receiveAttack(row, column); // render attacked spot

    _view__WEBPACK_IMPORTED_MODULE_2__["default"].renderSeaAfterAttack(row, column, opponentId, shipId);

    if (shipId === -1) {
      _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].playMissAudio();
      return shipId; // miss
    }

    _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].currentPlayer().memorizeLastHit(row, column); // memorize hit coordination
    // report coordinates if ship sunk

    if (board.getShip(shipId).isSunk()) {
      // hit a ship and the ship is sunk
      _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].playSunkAudio();
      var shipCoordinates = board.getShip(shipId).coordinates();
      _view__WEBPACK_IMPORTED_MODULE_2__["default"].renderSunkShips(opponentId, shipCoordinates);
      _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].currentPlayer().forgetLastHit(shipCoordinates);
      return board.shipSurroundingArea(shipId);
    }

    _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].playHitAudio();
    return 0;
  }
  /**
   * Attack the target spot. If a ship sink after this attack, it will automatically
   * attack the surrounding area of that ship (no other ship can stay in that area).
   * When human player click on the board, View module will call this function.
   * When AI player decide the target position of next attack, it will also
   * callback this function.
   * @param {Number} row Axi Y of target gird.
   * @param {Number} column Axi X of target grid.
   * @param {Number} opponentId Id of opponent player.
   */


  function playerAttack(row, column, opponentId) {
    var result = playerAttackOneSpot(row, column, opponentId);
    if (result === undefined) return; // spot already been attacked.

    if (Array.isArray(result)) {
      // attack sink a ship
      result.forEach(function (coordinate) {
        return playerAttackOneSpot.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(coordinate).concat([opponentId]));
      });
    }

    if (_models_game__WEBPACK_IMPORTED_MODULE_1__["default"].player(opponentId).board().allSunk()) {
      gameover(_models_game__WEBPACK_IMPORTED_MODULE_1__["default"].currentPlayer().id());
      return;
    }

    if (result === -1) {
      // missed
      _view__WEBPACK_IMPORTED_MODULE_2__["default"].lockBoard(opponentId);
      _view__WEBPACK_IMPORTED_MODULE_2__["default"].unlockBoard(_models_game__WEBPACK_IMPORTED_MODULE_1__["default"].currentPlayer().id());
      _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].nextTurn(true, playerAttack); // pass itself to the Game module as a callback.
    } else {
      // if hit a ship, current player can give one more shot.
      _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].nextTurn(false, playerAttack);
    }
  }
  /**
   * Pass the attack logic to the View module as a callback.
   */


  function enableBoardReceiveAttack() {
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].bindReceiveAttack(playerAttack);
  }
  /**
   * Create new random fleet for the player, and re-draw the board on DOM.
   * @param {Number} playerId The player id.
   */


  function randomAgain(mainOrOpponent, playerId) {
    // generate random fleet for that player
    var board = _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].player(playerId).board();
    board.clearFleet();
    _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].autofillFleet(board); // clear the old board(main or opponent) from the DOM.

    _view__WEBPACK_IMPORTED_MODULE_2__["default"].clearBoard(mainOrOpponent); // draw a new board on DOM

    drawASingleBoard(_models_game__WEBPACK_IMPORTED_MODULE_1__["default"].player(playerId), mainOrOpponent);
  }

  function enableRandomFleet() {
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].bindRandomFleet(randomAgain, _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].playClickAudio);
  }
  /**
   * Initialize a new game.
   * The game is not yet started.
   * Have to call startGame() to start.
   */


  function newGame() {
    initPlayersAndBoards(_models_game__WEBPACK_IMPORTED_MODULE_1__.HUMAN, _models_game__WEBPACK_IMPORTED_MODULE_1__.AI);
    drawBoardsForPlayer(0); // in human player's perspective

    lockOpponentBoard();
    enableBoardReceiveAttack();
  }
  /**
   * Start the game, and unlock opponent's board.
   */


  function startGame() {
    _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].start();
    _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].nextTurn(playerAttack); // pass itself to the Game module as a callback.

    unlockOpponentBoard(); // once the game start, player cannot change the fleet until the end of the game.

    _view__WEBPACK_IMPORTED_MODULE_2__["default"].lockRandomFleetButton();
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].lockStartGameButton();
  }
  /**
   * Call View to bind listener on Start game button.
   */


  function enableStartGame() {
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].bindStartGameButton(startGame, _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].playGameStartAudio);
  }
  /**
   * Re-initialize a new game with randomly auto-filled fleet for both player.
   */


  function restartGame() {
    clearAllBoards();
    newGame();
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].unlockRandomFleetButton();
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].unlockStartGameButton();
  }
  /**
   * Call View module to bind restart game feature to DOM elements.
   */


  function enableRestartGame() {
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].bindRestartGameButton(restartGame);
  }
  /**
   * Print footer.
   */


  function showFooter() {
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].showFooter();
  }

  return {
    initPlayersAndBoards: initPlayersAndBoards,
    drawASingleBoard: drawASingleBoard,
    drawBoardsForPlayer: drawBoardsForPlayer,
    clearAllBoards: clearAllBoards,
    enableBoardReceiveAttack: enableBoardReceiveAttack,
    enableRandomFleet: enableRandomFleet,
    lockOpponentBoard: lockOpponentBoard,
    unlockOpponentBoard: unlockOpponentBoard,
    newGame: newGame,
    startGame: startGame,
    restartGame: restartGame,
    enableStartGame: enableStartGame,
    enableRestartGame: enableRestartGame,
    showFooter: showFooter
  };
})());

/***/ }),

/***/ "./src/js/models/board.js":
/*!********************************!*\
  !*** ./src/js/models/board.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var UNIT_TEST; // eslint-disable-next-line prefer-const

UNIT_TEST = true; // Comment out this line after unit test.

var DEFAULT_BOARD_SIZE = 10;
/**
 * Board factory function.
 * Board magages Ships, and check the hit for user.
 * @param {Number} inSize Size of the game board.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (inSize) {
  /**
   * Board plain object.
   */
  var board = {
    // eslint-disable-next-line no-bitwise
    size: inSize || DEFAULT_BOARD_SIZE,
    fleet: [],
    hits: [],
    misses: [],
    intact: []
  };
  /**
   * Allow other modules to check the size of the board.
   * @returns Board size.
   */

  function size() {
    return board.size;
  }
  /**
   * Allow other modules to get the list of all intact position.
   */


  function intact() {
    return board.intact;
  }
  /**
   * Retrieve a ship in fleet by id.
   * @param {Number} id Ship id.
   * @return The ship object if exists. Otherwise undefined.
   */


  function getShip(id) {
    return board.fleet.find(function (ship) {
      return ship.id() === id;
    });
  }
  /**
   * Allow other modules to check size of current fleet.
   */


  function fleetSize() {
    return board.fleet.length;
  }
  /**
   * Delete all ships in fleet.
   */


  function clearFleet() {
    board.fleet = [];
  }
  /**
   * Return the body coordinates of all ships in fleet.
   */


  function shipCoordinates() {
    return board.fleet.reduce(function (arr, fleetShip) {
      arr.push(fleetShip.coordinates());
      return arr;
    }, []);
  }
  /**
   * Check if the number is located in range of board size.
   * @param {Number} num Number to check
   * @returns true if in board, otherwise false.
   */


  function legal(num) {
    return num >= 0 && num < board.size;
  }
  /**
   * Get an array of coordinates of the surrounding points of
   * that ship.
   * @param {Number} shipId Ship id.
   * @return {Array} Coordinates of the surrounding points of
   * that ship.
   */


  function shipSurroundingArea(shipId) {
    var result = [];
    var ship = getShip(shipId);

    var _ship$head = ship.head(),
        _ship$head2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ship$head, 2),
        ulRow = _ship$head2[0],
        ulCol = _ship$head2[1];

    var _ship$tail = ship.tail(),
        _ship$tail2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ship$tail, 2),
        brRow = _ship$tail2[0],
        brCol = _ship$tail2[1];

    var blRow;
    var blCol;
    var urRow;
    var urCol;

    if (ship.isHorizontal()) {
      var _ship$head3 = ship.head();

      var _ship$head4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ship$head3, 2);

      blRow = _ship$head4[0];
      blCol = _ship$head4[1];

      var _ship$tail3 = ship.tail();

      var _ship$tail4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ship$tail3, 2);

      urRow = _ship$tail4[0];
      urCol = _ship$tail4[1];
    } else {
      var _ship$tail5 = ship.tail();

      var _ship$tail6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ship$tail5, 2);

      blRow = _ship$tail6[0];
      blCol = _ship$tail6[1];

      var _ship$head5 = ship.head();

      var _ship$head6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ship$head5, 2);

      urRow = _ship$head6[0];
      urCol = _ship$head6[1];
    }

    if (ulRow - 1 >= 0) {
      for (var i = ulCol - 1; i <= urCol + 1; i += 1) {
        if (legal(i)) result.push([ulRow - 1, i]);
      }
    }

    if (blRow + 1 < board.size) {
      for (var _i = blCol - 1; _i <= brCol + 1; _i += 1) {
        if (legal(_i)) result.push([blRow + 1, _i]);
      }
    }

    if (ulCol - 1 >= 0) {
      for (var _i2 = ulRow; _i2 <= blRow; _i2 += 1) {
        result.push([_i2, ulCol - 1]);
      }
    }

    if (urCol + 1 < board.size) {
      for (var _i3 = urRow; _i3 <= brRow; _i3 += 1) {
        result.push([_i3, urCol + 1]);
      }
    }

    return result;
  }
  /**
   * Initialize the board, put all intact position into board.intact array.
   * The position [row, column] is coded as: "row-column".
   */


  function fillIntact() {
    for (var row = 0; row < board.size; row += 1) {
      for (var column = 0; column < board.size; column += 1) {
        board.intact.push("".concat(row, "-").concat(column));
      }
    }
  }
  /**
   * Remove a specific point from the board.intact array.
   * @param {String} positonStr Position string.
   */


  function removeFromIntact(positionStr) {
    var index = board.intact.findIndex(function (position) {
      return position === positionStr;
    });
    if (index === -1) return;
    board.intact.splice(index, 1);
  }
  /**
   * Check if the new ship sits in the fixed ship's forbiden zone.
   * @param {Ship} fixedShip The ship already put on the board.
   * @param {Array} newHead Head position[row, column] of the new ship.
   * @param {Array} newTail Tail position[row, column] of the new ship.
   * @return {Boolean} true if these two ships have overlap each other, otherwise false.
   */


  function isOverlap(fixedShip, newHead, newTail) {
    var _fixedShip$head = fixedShip.head(),
        _fixedShip$head2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_fixedShip$head, 2),
        headRow = _fixedShip$head2[0],
        headColumn = _fixedShip$head2[1];

    var _fixedShip$tail = fixedShip.tail(),
        _fixedShip$tail2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_fixedShip$tail, 2),
        tailRow = _fixedShip$tail2[0],
        tailColumn = _fixedShip$tail2[1];

    var overlapRowStart = Math.max(0, headRow - 1);
    var overlapColumnStart = Math.max(0, headColumn - 1);
    var overlapRowEnd = Math.min(board.size - 1, tailRow + 1);
    var overlapColumnEnd = Math.min(board.size - 1, tailColumn + 1);

    if (newHead[0] - newTail[0] === 0) {
      // is horizontal
      if (newHead[0] < overlapRowStart || newHead[0] > overlapRowEnd) return false;
      if (newTail[1] < overlapColumnStart || newHead[1] > overlapColumnEnd) return false;
      return true;
    }

    if (newHead[1] < overlapColumnStart || newHead[1] > overlapColumnEnd) return false;
    if (newTail[0] < overlapRowStart || newHead[0] > overlapRowEnd) return false;
    return true;
  }
  /**
   * Check if the target position[row, column] is available for a specific ship.
   * @param {Number} row Target row.
   * @param {Number} column Target column.
   * @param {Ship} ship The ship to be put into the board.
   * @return {Boolean} true if is ok, otherwise false.
   */


  function available(row, column, ship) {
    // check head
    if (row < 0 || row >= board.size || column < 0 || column >= board.size) {
      return false;
    } // check tail


    var tailRow = ship.isHorizontal() ? row : row + ship.size() - 1;
    var tailColumn = ship.isHorizontal() ? column + ship.size() - 1 : column;

    if (tailRow < 0 || tailRow >= board.size || tailColumn < 0 || tailColumn >= board.size) {
      return false;
    } // check overlap


    var newHead = [row, column];
    var newTail = [tailRow, tailColumn];
    if (board.fleet.some(function (fixedShip) {
      return isOverlap(fixedShip, newHead, newTail);
    })) return false;
    return true;
  }
  /**
   * Put ship into a certain position if it's available.
   * @param {Number} row Axi Y of the ship head.
   * @param {Number} column Axi X of the ship head.
   * @param {Ship} ship The ship object.
   * @return {Boolean} true if this position is legal for a new ship, otherwise false.
   */


  function putShip(row, column, ship) {
    ship.put(row, column);
    board.fleet.push(ship);
  }
  /**
   * Remove a ship from the board fleet (only if it's already in the fleet).
   * @param {Ship} Ship to be removed.
   */


  function removeShip(ship) {
    var index = board.fleet.findIndex(function (fleetShip) {
      return fleetShip.id() === ship.id();
    });
    if (index === -1) return;
    board.fleet.splice(index, 1);
  }
  /**
   * Only used to toggle ships already in the fleet.
   * @param {Ship} ship Target ship.
   * @return {Boolean} true if toggled, otherwise false.
   */


  function toggleFleetShip(ship) {
    removeShip(ship);
    ship.toggleDirection();

    if (available.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(ship.head()).concat([ship]))) {
      putShip.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(ship.head()).concat([ship]));
      return true;
    } // cannot toggle


    ship.toggleDirection(); // back to orginal direction

    putShip.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(ship.head()).concat([ship])); // put back to fleet

    return false;
  }
  /**
   * Check if two position[row, column] equal to each other.
   * @param {Array} positionA [row, column]
   * @param {Array} positionB [row, column]
   * @returns true if equal, otherwise false.
   */


  function positionEqual(positionA, positionB) {
    return positionA[0] === positionB[0] && positionA[1] === positionB[1];
  }
  /**
   * Check wheather the target position has been hit before.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns true if target has been hit before, otherwise false.
   */


  function alreadyHit(row, column) {
    return board.hits.some(function (hit) {
      return positionEqual(hit, [row, column]);
    });
  }
  /**
   * Check wheather the target position has been attacked
   * but it was a miss.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns true if it was a miss, otherwise false.
   */


  function alreadyMissed(row, column) {
    return board.misses.some(function (miss) {
      return positionEqual(miss, [row, column]);
    });
  }
  /**
   * Check wheather the target exists in attack history board.hits or board.misses.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns true if target has been attacked before, otherwise false.
   */


  function alreadyBeenAttacked(row, column) {
    return alreadyHit(row, column) || alreadyMissed(row, column);
  }
  /**
   * Actually try to hit a ship.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns {Number}
   *  return ship id if hit.
   *  return -1 if miss.
   */


  function tryHitShip(row, column) {
    var hit = -1;
    board.fleet.forEach(function (fleetShip) {
      if (fleetShip.hit(row, column)) hit = fleetShip.id();
    });
    return hit;
  }
  /**
   * Check if the attack can hit a ship.
   * This function doesn't actually hit ship.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns true if can hit, otherwise false.
   */


  function canHitShip(row, column) {
    return board.fleet.some(function (fleetShip) {
      return fleetShip.canHit(row, column);
    });
  }
  /**
   * Try to hit each of the ships in the board.fleet,
   * only if the target position has never been attacked before.
   * @param {Number} row AxiY of target.
   * @param {Number} column AxiX of target.
   * @return {Number}
   *  if hit, return the ship's id.
   *  return -1 if missed.
   *  return undefined, if already been attacked before.
   */


  function receiveAttack(row, column) {
    var target = [row, column]; // Must be undefined. If return false, will be considered as a miss.

    if (alreadyBeenAttacked.apply(void 0, target)) return undefined;
    var hit = tryHitShip(row, column);

    if (hit !== -1) {
      board.hits.push(target);
    } else {
      board.misses.push(target);
    }

    removeFromIntact("".concat(row, "-").concat(column));
    return hit;
  }
  /**
   * Check if all ships are sunk.
   * @returns true if all ships are sunk, otherwise false.
   */


  function allSunk() {
    return board.fleet.every(function (fleetShip) {
      return fleetShip.isSunk();
    });
  }
  /**
   * Initialize the board.
   */


  fillIntact();
  /**
   * Public API
   */

  var api = {
    size: size,
    intact: intact,
    getShip: getShip,
    fleetSize: fleetSize,
    clearFleet: clearFleet,
    shipCoordinates: shipCoordinates,
    shipSurroundingArea: shipSurroundingArea,
    available: available,
    putShip: putShip,
    removeShip: removeShip,
    toggleFleetShip: toggleFleetShip,
    alreadyHit: alreadyHit,
    alreadyMissed: alreadyMissed,
    alreadyBeenAttacked: alreadyBeenAttacked,
    canHitShip: canHitShip,
    receiveAttack: receiveAttack,
    allSunk: allSunk
  };
  /**
   * API only for unit test.
   */

  if (UNIT_TEST) {
    api.board = board;
  }

  return _objectSpread({}, api);
});

/***/ }),

/***/ "./src/js/models/game.js":
/*!*******************************!*\
  !*** ./src/js/models/game.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_4__.AI),
/* harmony export */   "EASY": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_4__.EASY),
/* harmony export */   "HARD": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_4__.HARD),
/* harmony export */   "HUMAN": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_4__.HUMAN),
/* harmony export */   "NORMAL": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_4__.NORMAL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/js/models/ship.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ "./src/js/models/board.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/js/models/player.js");
/* harmony import */ var _assets_audio_hit_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/audio/hit.wav */ "./src/assets/audio/hit.wav");
/* harmony import */ var _assets_audio_deepBubble_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/audio/deepBubble.wav */ "./src/assets/audio/deepBubble.wav");
/* harmony import */ var _assets_audio_sunkExplosion_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/audio/sunkExplosion.wav */ "./src/assets/audio/sunkExplosion.wav");
/* harmony import */ var _assets_audio_click_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/audio/click.wav */ "./src/assets/audio/click.wav");
/* harmony import */ var _assets_audio_gameStart_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/audio/gameStart.wav */ "./src/assets/audio/gameStart.wav");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* eslint-disable import/first */

/* eslint-disable no-unused-vars */



 // audio resources






var UNIT_TEST; // eslint-disable-next-line prefer-const

UNIT_TEST = true; // Comment out this line once finish the unit tests.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var DEFAULT_BOARD_SIZE = 10; // default game board size
  // Default fleet setting. According to 1990's Battleship Game of Milton Bradlet Company.

  var STANDARD_FLEET = [// [name, size]
  ['carrier', 5], ['battleship', 4], ['cruiser', 3], ['submarine', 3], ['destroyer', 2]];
  var HitAudio = new Audio(_assets_audio_hit_wav__WEBPACK_IMPORTED_MODULE_5__);
  var MissAudio = new Audio(_assets_audio_deepBubble_wav__WEBPACK_IMPORTED_MODULE_6__);
  var SunkAudio = new Audio(_assets_audio_sunkExplosion_wav__WEBPACK_IMPORTED_MODULE_7__);
  var ClickAudio = new Audio(_assets_audio_click_wav__WEBPACK_IMPORTED_MODULE_8__);
  var GameStartAudio = new Audio(_assets_audio_gameStart_wav__WEBPACK_IMPORTED_MODULE_9__);
  /**
   * Game module proto.
   *  players: Array. Two players.
   *  currentPlayer: Number. Index of current player in the players array.
   */

  var game = {};

  function playHitAudio() {
    HitAudio.currentTime = 0;
    HitAudio.play();
  }

  function playMissAudio() {
    MissAudio.currentTime = 0;
    MissAudio.play();
  }

  function playSunkAudio() {
    SunkAudio.currentTime = 0;
    SunkAudio.play();
  }

  function playClickAudio() {
    ClickAudio.currentTime = 0;
    ClickAudio.play();
  }

  function playGameStartAudio() {
    GameStartAudio.currentTime = 0;
    GameStartAudio.play();
  }
  /**
   * Generate a integer in range of [0, max).
   * @param {Number} max Max value (exclusive).
   * @return Generated integer.
   */


  function random(max) {
    return Math.floor(Math.random() * max);
  }
  /**
   * Pick the random position [row, column] in the board.
   * @param {Board} board Target board.
   * @return Random position.
   */


  function randomPosition(size) {
    return [random(size), random(size)];
  }
  /**
   * Autofill(randomly) a game board with fleet ships.
   * @param {Board} board Target board.
   */


  function autofillFleet(board) {
    STANDARD_FLEET.forEach(function (template) {
      var ship = _ship__WEBPACK_IMPORTED_MODULE_2__["default"].apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(template));
      if (random(2) === 1) ship.toggleDirection();
      var position = randomPosition(board.size());

      while (!board.available.apply(board, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(position).concat([ship]))) {
        position = randomPosition(board.size());
      }

      board.putShip.apply(board, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(position).concat([ship]));
    });
  }
  /**
   * Return an array of all players.
   * @returns Array of players
   */


  function players() {
    return game.players;
  }
  /**
   * Search Player object by their id.
   * @param {Number} id player id.
   * @return {Player} Player object if exists.
   */


  function player(id) {
    return game.players.find(function (thePlayer) {
      return thePlayer.id() === id;
    });
  }
  /**
   * Return current player object.
   * @returns {Player} Current player object.
   */


  function currentPlayer() {
    return game.players[game.currentPlayer];
  }
  /**
   * Initialize two players with randomly autofilled board.
   * AI player's default level is EASY.
   * @param {Symbol} player1Type HUMAN or AI
   * @param {Symbol} player2Type HUMAN or AI
   */


  function initPlayersAndBoards(player1Type, player2Type) {
    game.players = [];
    var playerTypes = [player1Type, player2Type];

    for (var i = 0; i < playerTypes.length; i += 1) {
      var newPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_4__["default"])(i, (0,_board__WEBPACK_IMPORTED_MODULE_3__["default"])(DEFAULT_BOARD_SIZE), playerTypes[i]);
      autofillFleet(newPlayer.board());
      game.players.push(newPlayer);
    }
  }
  /**
   * Switch the player 2 to AI.
   * It can also be used to change AI level.
   * AI player's board is filled automatically.
   */


  function againstAI(level) {
    game.players[1] = (0,_player__WEBPACK_IMPORTED_MODULE_4__["default"])(1, (0,_board__WEBPACK_IMPORTED_MODULE_3__["default"])(DEFAULT_BOARD_SIZE), _player__WEBPACK_IMPORTED_MODULE_4__.AI, level);
    autofillFleet(game.players[1].board());
  }
  /**
   * Switch the player 2 to HUMAN.
   */


  function againstHuman() {
    game.players[1] = (0,_player__WEBPACK_IMPORTED_MODULE_4__["default"])(1, (0,_board__WEBPACK_IMPORTED_MODULE_3__["default"])(DEFAULT_BOARD_SIZE), _player__WEBPACK_IMPORTED_MODULE_4__.HUMAN);
  }
  /**
   * Get next player's index.
   * @returns index of next player
   */


  function nextIndex() {
    return (game.currentPlayer + 1) % game.players.length;
  }
  /**
   * If is human player, do nothing(wait for human to click
   * on the board to trigger an attack event).
   *
   * AI Player's attack function only decides where to attack,
   * and callback controller to do the rest of the job.
   * @param {Boolean} passToNextPlayer
   *  true if switch player.
   *  false doesn't switch player.
   * @param {Function} controllerAttackCallback Actual attack
   * logic in Controller module.
   */


  function nextTurn(passToNextPlayer, controllerAttackCallback) {
    if (passToNextPlayer) game.currentPlayer = nextIndex();
    var currPlayer = game.players[game.currentPlayer];
    if (!currPlayer.isAI()) return; // human player do nothing.

    var opponent = game.players[nextIndex()];
    var target = currPlayer.attack(opponent.board()); // AI player's next attack target

    if (target) {
      // if there's no more grid to be attacked, target will be undefined.
      controllerAttackCallback.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(target).concat([opponent.id()]));
    }
  }
  /**
   * When player has put all his ships into the board.
   * Controller call this method to initialize the game.
   *
   * Before start the game this function will check
   * wheather all requirements above have been met.
   *
   * @return {Boolean}
   *  true, if all requirements have been met, the game is started.
   *  otherwise, false.
   */


  function start() {
    // check configurations
    if (game.players.some(function (thePlayer) {
      return thePlayer.board().fleetSize() !== STANDARD_FLEET.length;
    })) {
      return false;
    } // Start game.
    // Set to the last player. nextTurn() will move on.


    game.currentPlayer = game.players.length - 1;
    return true;
  }

  var api = {
    DEFAULT_BOARD_SIZE: DEFAULT_BOARD_SIZE,
    playHitAudio: playHitAudio,
    playMissAudio: playMissAudio,
    playSunkAudio: playSunkAudio,
    playClickAudio: playClickAudio,
    playGameStartAudio: playGameStartAudio,
    players: players,
    player: player,
    currentPlayer: currentPlayer,
    autofillFleet: autofillFleet,
    nextTurn: nextTurn,
    initPlayersAndBoards: initPlayersAndBoards,
    againstAI: againstAI,
    againstHuman: againstHuman,
    start: start
  };

  if (UNIT_TEST) {
    api.game = game;
  }

  return _objectSpread({}, api);
})());

/***/ }),

/***/ "./src/js/models/player.js":
/*!*********************************!*\
  !*** ./src/js/models/player.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* binding */ AI),
/* harmony export */   "EASY": () => (/* binding */ EASY),
/* harmony export */   "HARD": () => (/* binding */ HARD),
/* harmony export */   "HUMAN": () => (/* binding */ HUMAN),
/* harmony export */   "NORMAL": () => (/* binding */ NORMAL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");


/* eslint-disable quote-props */

/**
 * There are two different types of player:
 *  1. ai
 *  2. human
 */
var AI = Symbol('ai');
var HUMAN = Symbol('human');
/**
 * Three different level of AI.
 */

var EASY = Symbol('child');
var NORMAL = Symbol('normal');
var HARD = Symbol('hard');
/**
 * Player factory function.
 * @param {Board} inBoard Player's game board.
 * @param {Symbol} inType HUMAN or AI.
 * @param {Symbol} inLevel Optional. AI level.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (inId, inBoard, inType, inLevel) {
  /**
   * Player plain object.
   */
  var player = {
    id: inId,
    type: inType,
    board: inBoard,
    lastHit: [] // memorize hits (sunk ship's coordinates will be removed)

  };

  if (player.type === AI) {
    player.level = inLevel || NORMAL; // default is NORMAL
  }
  /**
   * Get player id.
   * @returns Player id.
   */


  function id() {
    return player.id;
  }
  /**
   * Check player type.
   * @returns true if is player is AI.
   */


  function isAI() {
    return player.type === AI;
  }
  /**
   * Check AI player's level.
   * @returns AI player's level. undefined if it's not AI player.
   */


  function aiLevel() {
    if (player.type !== AI) return undefined;
    return player.level;
  }
  /**
   * Allow Game module to set AI level.
   * @param {Symbol} level EASY or NORMAL or HARD
   */


  function setAiLevel(level) {
    if (player.type !== AI) return;
    player.level = level;
  }
  /**
   * Get the player's board object.
   * @returns Player's board object.
   */


  function board() {
    return player.board;
  }
  /**
   * Randomly pick a target from opponent board's intact list.
   * @param {Board} opponentBoard Oppoenent's board object.
   * @returns the target coordinate
   */


  function randomAttack(opponentBoard) {
    if (opponentBoard.intact().length === 0) return undefined;
    var index = Math.floor(Math.random() * opponentBoard.intact().length);
    var str = opponentBoard.intact()[index];

    var _str$split = str.split('-'),
        _str$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_str$split, 2),
        rowStr = _str$split2[0],
        columnStr = _str$split2[1];

    return [parseInt(rowStr, 10), parseInt(columnStr, 10)];
  }
  /**
   * Calculate the sum of distances bewtween the target point
   * and all points in player.lastHit.
   * Distance = horizontal distance + vertical distance.
   * @param {Number} row
   * @param {Number} column
   * @return {Number} Distance of point A and B.
   */


  function distance(row, column) {
    return player.lastHit.reduce(function (dist, hit) {
      return Math.abs(row - hit[0]) + Math.abs(column - hit[1]) + dist;
    }, 0);
  }
  /**
   * Calculate the sum of distances bewtween the target point
   * and all points in player.lastHit.
   * coDistance = sum of horizontal distance * sum of vertical distance + distance
   * @param {Number} row
   * @param {Number} column
   * @return {Number} Distance of point A and B.
   */


  function coDistance(row, column) {
    var _player$lastHit$reduc = player.lastHit.reduce(function (result, hit) {
      return [result[0] + Math.abs(row - hit[0]), result[1] + Math.abs(column - hit[1])];
    }, [0, 0]),
        _player$lastHit$reduc2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_player$lastHit$reduc, 2),
        sumRowDist = _player$lastHit$reduc2[0],
        sumColDist = _player$lastHit$reduc2[1];

    return sumRowDist * sumColDist + distance(row, column);
  }
  /**
   * Calculate the co-distance of an intact point with all remaining last hit(sunk
   * ship coordinates will be removed).
   * co-distance = sum of horizontal distance * sum of vertical distance + distance
   * Return the intact point with the smallest distance.
   * @param {Board} opponentBoard Oppoenent's board object.
   * @returns the target coordinate
   */


  function normalAttack(opponentBoard) {
    if (opponentBoard.intact().length === 0) return undefined;
    if (player.lastHit.length === 0) return randomAttack(opponentBoard);
    var minDistance = Number.MAX_VALUE;
    return opponentBoard.intact().reduce(function (arr, str) {
      var _str$split3 = str.split('-'),
          _str$split4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_str$split3, 2),
          rowStr = _str$split4[0],
          columnStr = _str$split4[1];

      var row = parseInt(rowStr, 10);
      var column = parseInt(columnStr, 10);
      var dist = player.lastHit.length === 1 ? distance(row, column) : coDistance(row, column);

      if (dist < minDistance) {
        minDistance = dist;
        return [row, column];
      }

      return arr;
    }, []);
  }
  /**
   * Pick(with a smart strategy) a target from opponent board's intact list.
   * @param {Board} opponentBoard Oppoenent's board object.
   * @returns the target coordinate
   */


  function smartAttck(opponentBoard) {
    return randomAttack(opponentBoard);
  }
  /**
   * @param {Board} board The Board object.
   * @param {Function} callback Notice Game module to run next round.
   * @return
   *  ==> AI player return the coordinate of the target it wants to attack.
   *  ==> Human player will return undefined.
   */


  function attack(opponentBoard) {
    if (player.type === AI) {
      switch (player.level) {
        case EASY:
          return randomAttack(opponentBoard);

        case NORMAL:
          return normalAttack(opponentBoard);

        case HARD:
          return smartAttck(opponentBoard);

        default:
          return randomAttack(opponentBoard);
      }
    }

    return undefined; // human player return undefined
  }

  function memorizeLastHit(row, column) {
    player.lastHit.push([row, column]);
  }

  function forgetLastHit(shipCoordinates) {
    shipCoordinates.forEach(function (coordinate) {
      var index = player.lastHit.findIndex(function (point) {
        return point[0] === coordinate[0] && point[1] === coordinate[1];
      });
      if (index !== -1) player.lastHit.splice(index, 1);
    });
  }

  return {
    id: id,
    isAI: isAI,
    aiLevel: aiLevel,
    setAiLevel: setAiLevel,
    board: board,
    attack: attack,
    memorizeLastHit: memorizeLastHit,
    forgetLastHit: forgetLastHit
  };
});

/***/ }),

/***/ "./src/js/models/ship.js":
/*!*******************************!*\
  !*** ./src/js/models/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__.mark(infinite);

/**
 * Ship id generator.
 */
function infinite() {
  var index;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__.wrap(function infinite$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 1;

        case 1:
          if (false) {}

          _context.next = 4;
          return index;

        case 4:
          index += 1;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var GEN = infinite();
var HORIZONTAL = Symbol('horizontal');
var VERTICAL = Symbol('vertical');
/**
 * Factory function to instantiate a Ship object.
 * @param {String} name Name of the ship. Ex: battleship, cruiser, submarine, and destroyer.
 * @param {Number} size How many grids on the board the ship occupies.
 * @return A ship module object.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (inName, inSize) {
  /**
   * Ship plain object.
   */
  var ship = {
    id: GEN.next().value,
    name: inName,
    size: inSize,
    row: 0,
    // default
    column: 0,
    // default
    direction: HORIZONTAL,
    // default
    hit: 0 // How many times the ship is hit.

  };
  /**
   * @returns Ship's id.
   */

  function id() {
    return ship.id;
  }
  /**
   * @returns Ship's name.
   */


  function name() {
    return ship.name;
  }
  /**
   * @returns Size of the ship.
   */


  function size() {
    return ship.size;
  }
  /**
   * @returns Position of the ship head.
   */


  function head() {
    return [ship.row, ship.column];
  }
  /**
   * @return Position of the ship tail.
   */


  function tail() {
    switch (ship.direction) {
      case HORIZONTAL:
        return [ship.row, ship.column + ship.size - 1];

      case VERTICAL:
        return [ship.row + ship.size - 1, ship.column];

      default:
        return undefined;
    }
  }
  /**
   * Check the direction of the ship.
   * @returns true if the direction is horizontal, otherwise false.
   */


  function isHorizontal() {
    return ship.direction === HORIZONTAL;
  }
  /**
   * @returns Return how many attacks the ship has taken.
   */


  function countHits() {
    return ship.hit;
  }
  /**
   * HORIZONTAL -> VERTICAL
   * VERTICAL -> HORIZONTAL
   * Ship don't have to worry about if the board has enough space.
   * Board module will check that for us before call this function.
   */


  function toggleDirection() {
    if (ship.direction === HORIZONTAL) {
      ship.direction = VERTICAL;
    } else {
      ship.direction = HORIZONTAL;
    }
  }
  /**
   * Our ships are not aware of the size of the game board.
   * Board module will check the validation for us.
   * @param {Number} row Axi Y of the head of the ship.
   * @param {Number} column Axi X of the head of the ship.
   */


  function put(row, column) {
    ship.row = row;
    ship.column = column;
  }
  /**
   * Just check if there's a ship sits on a certain grid.
   * This function doesn't actually hit the ship.
   * @param {Number} row Axi X of opponent's attack.
   * @param {Number} column Axi Y of opponent's attack.
   * @return {Boolean} true if it's a hit, otherwise false.
   */


  function canHit(row, column) {
    switch (ship.direction) {
      case HORIZONTAL:
        if (row !== ship.row) return false;
        if (column < ship.column || column > ship.column + ship.size - 1) return false;
        break;

      case VERTICAL:
        if (column !== ship.column) return false;
        if (row < ship.row || row > ship.row + ship.size - 1) return false;
        break;

      default:
        break;
    }

    return true;
  }
  /**
   * Assertion: Each grid of the board can only be attecked once.
   * The ship don't have to worry about wheather a single part is hit twice.
   * @param {Number} row Axi X of opponent's attack.
   * @param {Number} column Axi Y of opponent's attack.
   * @return {Boolean} true if the ship is hit, otherwise false.
   */


  function hit(row, column) {
    var result = canHit(row, column);
    if (result) ship.hit += 1;
    return result;
  }
  /**
   * Check if every port the ship has been hit.
   * As always, the ship don't have to worry about wheather a single part is hit twice.
   * @returns {Boolean}
   */


  function isSunk() {
    return ship.hit >= ship.size;
  }
  /**
   * @return An array of coordinates of that ship.
   */


  function coordinates() {
    var result = [];

    for (var i = 0; i < ship.size; i += 1) {
      if (ship.direction === HORIZONTAL) {
        result.push([ship.row, ship.column + i]);
      } else {
        result.push([ship.row + i, ship.column]);
      }
    }

    return result;
  }
  /**
   * @return
   *  if is sunk, return an array of coordinates of that ship.
   *  otherwise, return undefined.
   */


  function reportSunk() {
    if (!isSunk) return undefined;
    return coordinates();
  }

  return {
    id: id,
    size: size,
    name: name,
    head: head,
    tail: tail,
    isHorizontal: isHorizontal,
    countHits: countHits,
    toggleDirection: toggleDirection,
    put: put,
    canHit: canHit,
    hit: hit,
    isSunk: isSunk,
    coordinates: coordinates,
    reportSunk: reportSunk
  };
});

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAIN": () => (/* binding */ MAIN),
/* harmony export */   "OPPONENT": () => (/* binding */ OPPONENT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_github_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/github.png */ "./src/assets/img/github.png");

var MAIN = Symbol('main');
var OPPONENT = Symbol('opponent');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var ELEMENTS = {
    root: document.querySelector(':root'),
    mainPlayer: document.querySelector('.player.main'),
    opponentPlayer: document.querySelector('.player.opponent'),
    random: document.querySelector('.random'),
    start: document.querySelector('.start'),
    newGame: document.querySelector('.newGame'),
    header: document.querySelector('.header'),
    main: document.querySelector('.main'),
    footer: document.querySelector('.footer')
  };
  /**
   * Create a single grid in board according to it's coordinate.
   * @param {Number} row Grid axi Y.
   * @param {Number} column Grid axi X.
   * @returns Grid element.
   */

  function createGrid(row, column) {
    var grid = document.createElement('div');
    grid.classList.add('grid');
    grid.dataset.row = row;
    grid.dataset.column = column;
    return grid;
  }
  /**
   * Draw the sea layer of game board.
   * Each grid is annotated with the player's id to whom
   * this board belongs.
   * @param {Number} size Board size.
   * @param {Number} playerId Id of owner of that board.
   * @returns Sea layer div element.
   */


  function drawSeaLayer(size, playerId) {
    var seaLayer = document.createElement('div');
    seaLayer.classList.add('seaLayer');

    for (var row = 0; row < size; row += 1) {
      for (var column = 0; column < size; column += 1) {
        var grid = createGrid(row, column);
        grid.dataset.playerId = playerId;
        grid.classList.add('material-icons');
        if (row === 0) grid.classList.add('upperBorder');
        if (column === 0) grid.classList.add('leftBorder');
        seaLayer.appendChild(grid);
      }
    }

    return seaLayer;
  }
  /**
   * Draw the ship layer of game board.
   * Ship position should be highlighted.
   * @param {Number} size Board size.
   * @param {Function} checkShipCallback Board.canHitShip() function.
   * @returns Ship layer div element.
   */


  function drawShipLayer(size, checkShipCallback) {
    var shipLayer = document.createElement('div');
    shipLayer.classList.add('shipLayer');

    for (var row = 0; row < size; row += 1) {
      for (var column = 0; column < size; column += 1) {
        var grid = createGrid(row, column);
        if (row === 0) grid.classList.add('upperBorder');
        if (column === 0) grid.classList.add('leftBorder');
        if (checkShipCallback(row, column)) grid.classList.add('hasShip');
        shipLayer.appendChild(grid);
      }
    }

    return shipLayer;
  }
  /**
   * Get the MAIN or OPPONENT board element.
   * @param {Symbol} mainOrOpponent MAIN or OPPONENT
   * @return {Element} The DOM element represent the desired board.
   */


  function getMainOrOpponentBoard(mainOrOpponent) {
    return mainOrOpponent === MAIN ? ELEMENTS.mainPlayer.querySelector('.board') : ELEMENTS.opponentPlayer.querySelector('.board');
  }
  /**
   * Search the board element by player id.
   * @param {Number} playerId Id of desired player.
   * @return {Element} DOM element representing the desired board.
   */


  function getPlayerElementById(playerId) {
    if (parseInt(ELEMENTS.mainPlayer.dataset.playerId, 10) === playerId) return ELEMENTS.mainPlayer;
    return ELEMENTS.opponentPlayer;
  }
  /**
   * Draw a player's board in MAIN board section or OPPONENT board section.
   * Ex: In player 1's page,
   *  => his own board is shown in MAIN section.
   *  => player 2's board is shown in OPPONENT section.
   * @param {Number} size Size of the board.
   * @param {Number} playerId Denote which board to draw.
   * @param {Symbol} mainOrOpponent MAIN or OPPONENT
   * @param {Function} checkShipCallback Board.canHitShip() function.
   */


  function drawBoard(size, playerId, mainOrOpponent, checkShipCallback) {
    var target = getMainOrOpponentBoard(mainOrOpponent);
    target.parentElement.dataset.playerId = playerId;
    var seaLayer = drawSeaLayer(size, playerId);
    var shipLayer = drawShipLayer(size, checkShipCallback);
    target.appendChild(seaLayer);
    target.appendChild(shipLayer);
  }
  /**
   * Clear the main board or the opponent's board.
   */


  function clearBoard(mainOrOpponent) {
    var target = getMainOrOpponentBoard(mainOrOpponent);
    target.innerHTML = '';
  }

  function clearAllBoards() {
    clearBoard(MAIN);
    clearBoard(OPPONENT);
  }
  /**
   * Render a specific grid color according to the attack result.
   * @param {Number} row Target grid Axi Y.
   * @param {Number} column Target grid Axi X.
   * @param {Number} playerId Player id.
   * @param {Number} attackResult
   *  1. if attack hit a ship, it's the ship's id.
   *  2. if attack missed, it's -1.
   *  3. if the target spot alreay been attacked before, it's undefined.
   */


  function renderSeaAfterAttack(row, column, playerId, attackResult) {
    var playerElement = getPlayerElementById(playerId);
    var seaLayer = playerElement.querySelector('.board > .seaLayer');
    var grid = seaLayer.querySelector(".grid[data-row=\"".concat(row, "\"][data-column=\"").concat(column, "\"]"));
    if (attackResult === undefined) return; // no more grid to attack

    if (attackResult === -1) {
      // missed
      grid.classList.add('alreadyMissed');
    } else {
      // it's a hit
      grid.classList.add('alreadyHit');
    }
  }
  /**
   * Given an array of coordinates of the ship body, mark that ship on the Sea Layer.
   * @param {Number} playerId Player id.
   * @param {Array} sunkCoordinates Coordinates of the sunk ship (sunk by this attack).
   */


  function renderSunkShips(playerId, sunkCoordinates) {
    var playerElement = getPlayerElementById(playerId);
    var seaLayer = playerElement.querySelector('.board > .seaLayer');
    sunkCoordinates.forEach(function (coordinate) {
      var grid = seaLayer.querySelector(".grid[data-row=\"".concat(coordinate[0], "\"][data-column=\"").concat(coordinate[1], "\"]"));
      grid.classList.add('sunk');
    });
  }
  /**
   * Bind event listener to a player's board, so that
   * when opponent click on board will callback controller's playerAttack() function.
   * @param {Element} playerElement mainPlayer or opponentPlayer
   * @param {Function} callback Controller.playerAttack() function,
   * The actual attack logic resides in controller.
   */


  function bindReceiveAttackToPlayersBoard(playerElement, callback) {
    var seaLayer = playerElement.querySelector('.board > .seaLayer');
    var grids = seaLayer.querySelectorAll('.grid');
    grids.forEach(function (grid) {
      grid.addEventListener('click', function () {
        return callback(parseInt(grid.dataset.row, 10), parseInt(grid.dataset.column, 10), parseInt(playerElement.dataset.playerId, 10));
      });
    });
  }
  /**
   * Bind receive attack feature to both MAIN and OPPONENT board on the page.
   * @param {Function} callback Controller.playerAttack() function,
   * The actual attack logic resides in controller.
   */


  function bindReceiveAttack(callback) {
    bindReceiveAttackToPlayersBoard(ELEMENTS.mainPlayer, callback);
    bindReceiveAttackToPlayersBoard(ELEMENTS.opponentPlayer, callback);
  }
  /**
   * Bind random fleet feature.
   * @param {Function} callback Controller will provide the logic of
   * actually generating a new fleet and re-draw the board.
   * @param {Function} playAudio Play button click audio.
   */


  function bindRandomFleet(callback, playAudio) {
    var playerId = parseInt(ELEMENTS.mainPlayer.dataset.playerId, 10);
    ELEMENTS.random.addEventListener('click', function () {
      playAudio();
      callback(MAIN, playerId);
    }); // main player random his fleet.
  }
  /**
   * Lock the board of target player.
   * @param {Number} playerId Target player's id.
   */


  function lockBoard(playerId) {
    getPlayerElementById(playerId).querySelector('.board').classList.add('lock');
  }
  /**
   * Unlock the board of target player.
   * @param {Number} playerId Target player's id.
   */


  function unlockBoard(playerId) {
    getPlayerElementById(playerId).querySelector('.board').classList.remove('lock');
  }
  /**
    * Lock opponent's board, prevent player from interact with the board
    * before starting the game.
    */


  function lockOpponentBoard() {
    ELEMENTS.opponentPlayer.querySelector('.board').classList.add('lock');
  }
  /**
    * Once the game is prepared, unlock opponent's boards, so that player gain
    * the access to the board.
    */


  function unlockOpponentBoard() {
    ELEMENTS.opponentPlayer.querySelector('.board').classList.remove('lock');
  }
  /**
   * Callback Controller when player click Start button.
   * @param {Function} callback Actual logic of starting a game in Controllor module.
   * @param {Function} playAudio Player game start audio.
   */


  function bindStartGameButton(callback, playAudio) {
    ELEMENTS.start.addEventListener('click', function () {
      playAudio();
      callback();
    });
  }
  /**
   * Prevent player from click the random fleet button.
   */


  function lockRandomFleetButton() {
    ELEMENTS.random.classList.add('lock');
  }
  /**
   * Allow player to use random fleet button.
   */


  function unlockRandomFleetButton() {
    ELEMENTS.random.classList.remove('lock');
  }
  /**
   * Prevent player from click the random fleet button.
   */


  function lockStartGameButton() {
    ELEMENTS.start.classList.add('lock');
  }
  /**
   * Allow player to click the random fleet button.
   */


  function unlockStartGameButton() {
    ELEMENTS.start.classList.remove('lock');
  }
  /**
   * Callback Controller when player click Restart button.
   * @param {Function} callback Actual logic of restarting a game in Controllor module.
   */


  function bindRestartGameButton(callback) {
    ELEMENTS.newGame.addEventListener('click', function () {
      return callback();
    });
  }

  function renderFooter(githubImg, year) {
    return "\n      <div class=\"copyright\">\n        Copyright MIT \xA9 hireme.shen@gmail.com &nbsp;|&nbsp; Source code - \n        <a href=\"https://github.com/helloShen/battleship\"><img class=\"github\" src=\"".concat(githubImg, "\"></a>\n      </div>\n      <div class=\"year\">2021-").concat(year, "</div>\n    ");
  }

  function showFooter() {
    var year = new Date().getFullYear();
    ELEMENTS.footer.insertAdjacentHTML('afterbegin', renderFooter(_assets_img_github_png__WEBPACK_IMPORTED_MODULE_0__, year));
  }

  return {
    drawBoard: drawBoard,
    clearBoard: clearBoard,
    clearAllBoards: clearAllBoards,
    renderSeaAfterAttack: renderSeaAfterAttack,
    renderSunkShips: renderSunkShips,
    bindReceiveAttack: bindReceiveAttack,
    bindRandomFleet: bindRandomFleet,
    lockBoard: lockBoard,
    unlockBoard: unlockBoard,
    lockOpponentBoard: lockOpponentBoard,
    unlockOpponentBoard: unlockOpponentBoard,
    bindStartGameButton: bindStartGameButton,
    lockRandomFleetButton: lockRandomFleetButton,
    unlockRandomFleetButton: unlockRandomFleetButton,
    bindRestartGameButton: bindRestartGameButton,
    lockStartGameButton: lockStartGameButton,
    unlockStartGameButton: unlockStartGameButton,
    showFooter: showFooter
  };
})());

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* eslint-disable no-unused-vars */


_controller__WEBPACK_IMPORTED_MODULE_0__["default"].newGame();
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].enableRandomFleet();
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].enableStartGame();
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].enableRestartGame();
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].showFooter();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsOENBQThDLG9FQUFv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NEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FB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O1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBU0E7QUFFQTBMLDJEQUFBO0FBQ0FBLHFFQUFBO0FBQ0FBLG1FQUFBO0FBQ0FBLHFFQUFBO0FBQ0FBLDhEQUFBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9ub3JtLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvbW9kZWxzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy92aWV3LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm0uY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAxMDA7NDAwOzcwMDs5MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKiBib2FyZCAqL1xcbiAgLS1ib2FyZC1zaXplOiAxMDtcXG4gIC0tZ3JpZC1zaXplOiAycmVtO1xcbiAgLS1ib2FyZC1sZW5ndGg6IGNhbGModmFyKC0tYm9hcmQtc2l6ZSkgKiB2YXIoLS1ncmlkLXNpemUpKTtcXG5cXG4gIC8qIGNvbG9yICovXFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tYmxhY2s6IGJsYWNrO1xcbiAgLS1ncmF5OiBncmF5O1xcbiAgLS1vY2Vhbi13aGl0ZTogI0VGREJDQjtcXG4gIC0tb2NlYW4tYmx1ZS0zMDA6ICM0QkI0REU7XFxuICAtLW9jZWFuLWJsdWUtNTAwOiAjM0I4QUM0O1xcbiAgLS1vY2Vhbi1ibHVlLTcwMDogIzM0NURBNztcXG4gIC0tb2NlYW4tYmx1ZS05MDA6ICMyYjNjNWI7XFxuICAtLWJvYXJkLWJvcmRlcjogdmFyKC0tb2NlYW4td2hpdGUpO1xcbiAgLS13b29kOiAjOTU0QTAwO1xcbiAgLS10cmFuc2x1Y2VudC1maXJlOiAjRjE5NjJFQUE7XFxuICAtLWZpcmU6ICNGMTk2MkU7XFxuICAtLW1pc3NlZDogdmFyKC0tZ3JheSk7XFxuICAtLXN1bms6IHZhcigtLW9jZWFuLWJsdWUtOTAwKTtcXG4gIC0tdHJhbnNwYXJlbnQ6ICMwMDAwMDAwMDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtOTAwKTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtIDFmciAzcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyID4gLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5oZWFkZXIgPiAuc3ViIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGNvbG9yOiB2YXIoLS1vY2Vhbi13aGl0ZSk7XFxufVxcblxcbi5tYWluU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXJlbSAxZnI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5sb2NrIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGxheWVyIHtcXG4gIHdpZHRoOiAyMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIycmVtIDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucGxheWVyLm1haW4ge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5wbGF5ZXIub3Bwb25lbnQge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnRhZyB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTMwMCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTUwMCk7XFxufVxcblxcbi5sb2NrLmJ0biB7XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGhlaWdodDogdmFyKC0tYm9hcmQtbGVuZ3RoKTtcXG4gIHdpZHRoOiB2YXIoLS1ib2FyZC1sZW5ndGgpO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4td2hpdGUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcmVtO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIsXFxuLmJvYXJkID4gLnNoaXBMYXllciB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtc2l6ZSksIHZhcigtLWdyaWQtc2l6ZSkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtc2l6ZSksIHZhcigtLWdyaWQtc2l6ZSkpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2hpcExheWVyIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5wbGF5ZXIubWFpbiAuc2VhTGF5ZXIge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLnVwcGVyQm9yZGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQubGVmdEJvcmRlciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIgPiAuZ3JpZCB7XFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtMzAwKTtcXG59XFxuXFxuLmJvYXJkID4gLnNoaXBMYXllciA+IC5ncmlkLmhhc1NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tYmx1ZS03MDApO1xcbn1cXG5cXG4ucGxheWVyLm9wcG9uZW50ID4gLmJvYXJkID4gLnNoaXBMYXllciA+IC5ncmlkLmhhc1NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tYmx1ZS0zMDApO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZCB7XFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQ6bm90KC5hbHJlYWR5SGl0KTpub3QoLmFscmVhZHlNaXNzZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtNTAwKTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeUhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTUwMCk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlIaXQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLjJyZW07XFxuICBsZWZ0OiAuMnJlbTtcXG4gIGNvbnRlbnQ6ICd3aGF0c2hvdCc7XFxuICBjb2xvcjogdmFyKC0tZmlyZSk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlNaXNzZWQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICd3YXZlcyc7XFxuICBjb2xvcjogdmFyKC0tb2NlYW4td2hpdGUpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeUhpdC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmspO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5SGl0LnN1bms6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLjJyZW07XFxuICBsZWZ0OiAuMnJlbTtcXG4gIGNvbnRlbnQ6ICdsb2NhbF9maXJlX2RlcGFydG1lbnQnO1xcbiAgY29sb3I6IHZhcigtLWZpcmUpO1xcbn1cXG5cXG4uY3RybCB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDJyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jdHJsID4gLmJ0biB7XFxuICB3aWR0aDogMTByZW07XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0aGVpZ2h0OiAzcmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Y29sb3I6IHZhcigtLW9jZWFuLXdoaXRlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDEuNXJlbSk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgLnRpcCxcXG4uZm9vdGVyIC5jb3B5cmlnaHQsXFxuLmZvb3RlciAueWVhciB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvb3RlciAuZ2l0aHViIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpb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O0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsaUNBQWlDO0NBQ2pDLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLHFDQUFxQztDQUNyQyxtQkFBbUI7Q0FDbkIscUJBQXFCO0FBQ3RCOztBQUVBOzs7Q0FHQyxjQUFjO0NBQ2QsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9ub3JtLmNzcyc7XFxuQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyc7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDEwMDs0MDA7NzAwOzkwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290IHtcXG4gIC8qIGJvYXJkICovXFxuICAtLWJvYXJkLXNpemU6IDEwO1xcbiAgLS1ncmlkLXNpemU6IDJyZW07XFxuICAtLWJvYXJkLWxlbmd0aDogY2FsYyh2YXIoLS1ib2FyZC1zaXplKSAqIHZhcigtLWdyaWQtc2l6ZSkpO1xcblxcbiAgLyogY29sb3IgKi9cXG4gIC0td2hpdGU6IHdoaXRlO1xcbiAgLS1ibGFjazogYmxhY2s7XFxuICAtLWdyYXk6IGdyYXk7XFxuICAtLW9jZWFuLXdoaXRlOiAjRUZEQkNCO1xcbiAgLS1vY2Vhbi1ibHVlLTMwMDogIzRCQjRERTtcXG4gIC0tb2NlYW4tYmx1ZS01MDA6ICMzQjhBQzQ7XFxuICAtLW9jZWFuLWJsdWUtNzAwOiAjMzQ1REE3O1xcbiAgLS1vY2Vhbi1ibHVlLTkwMDogIzJiM2M1YjtcXG4gIC0tYm9hcmQtYm9yZGVyOiB2YXIoLS1vY2Vhbi13aGl0ZSk7XFxuICAtLXdvb2Q6ICM5NTRBMDA7XFxuICAtLXRyYW5zbHVjZW50LWZpcmU6ICNGMTk2MkVBQTtcXG4gIC0tZmlyZTogI0YxOTYyRTtcXG4gIC0tbWlzc2VkOiB2YXIoLS1ncmF5KTtcXG4gIC0tc3VuazogdmFyKC0tb2NlYW4tYmx1ZS05MDApO1xcbiAgLS10cmFuc3BhcmVudDogIzAwMDAwMDAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tYmx1ZS05MDApO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gMWZyIDNyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgPiAubG9nbyB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmhlYWRlciA+IC5zdWIge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgY29sb3I6IHZhcigtLW9jZWFuLXdoaXRlKTtcXG59XFxuXFxuLm1haW5TZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cmVtIDFmcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmxvY2sge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgd2lkdGg6IDIycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjJyZW0gMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wbGF5ZXIubWFpbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnBsYXllci5vcHBvbmVudCB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4udGFnIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5idG4ge1xcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtMzAwKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtNTAwKTtcXG59XFxuXFxuLmxvY2suYnRuIHtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgaGVpZ2h0OiB2YXIoLS1ib2FyZC1sZW5ndGgpO1xcbiAgd2lkdGg6IHZhcigtLWJvYXJkLWxlbmd0aCk7XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi13aGl0ZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjByZW07XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllcixcXG4uYm9hcmQgPiAuc2hpcExheWVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIge1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnBsYXllci5tYWluIC5zZWFMYXllciB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQudXBwZXJCb3JkZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5sZWZ0Qm9yZGVyIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkID4gLnNoaXBMYXllciA+IC5ncmlkIHtcXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tYmx1ZS0zMDApO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2hpcExheWVyID4gLmdyaWQuaGFzU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTcwMCk7XFxufVxcblxcbi5wbGF5ZXIub3Bwb25lbnQgPiAuYm9hcmQgPiAuc2hpcExheWVyID4gLmdyaWQuaGFzU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTMwMCk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkIHtcXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZDpub3QoLmFscmVhZHlIaXQpOm5vdCguYWxyZWFkeU1pc3NlZCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tYmx1ZS01MDApO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5SGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtNTAwKTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeUhpdDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAuMnJlbTtcXG4gIGxlZnQ6IC4ycmVtO1xcbiAgY29udGVudDogJ3doYXRzaG90JztcXG4gIGNvbG9yOiB2YXIoLS1maXJlKTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeU1pc3NlZDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJ3dhdmVzJztcXG4gIGNvbG9yOiB2YXIoLS1vY2Vhbi13aGl0ZSk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5SGl0LnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlIaXQuc3Vuazo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAuMnJlbTtcXG4gIGxlZnQ6IC4ycmVtO1xcbiAgY29udGVudDogJ2xvY2FsX2ZpcmVfZGVwYXJ0bWVudCc7XFxuICBjb2xvcjogdmFyKC0tZmlyZSk7XFxufVxcblxcbi5jdHJsIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMnJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmN0cmwgPiAuYnRuIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG5cXHRoZWlnaHQ6IDNyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tb2NlYW4td2hpdGUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMS41cmVtKTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciAudGlwLFxcbi5mb290ZXIgLmNvcHlyaWdodCxcXG4uZm9vdGVyIC55ZWFyIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDAuMjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0aGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9vdGVyIC5naXRodWIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0VBQ0UsMEpBQTBKO0FBQzVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBHYW1lLCB7XG4gIEFJLFxuICBIVU1BTixcbiAgRUFTWSxcbiAgTk9STUFMLFxuICBIQVJELFxufSBmcm9tICcuL21vZGVscy9nYW1lJztcbmltcG9ydCBWaWV3LCB7XG4gIE1BSU4sXG4gIE9QUE9ORU5ULFxufSBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbiAgTUFJTixcbiAgT1BQT05FTlQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSAyIHBsYXllcnMgd2l0aCByYW5kb21seSBhdXRvZmlsbGVkIGJvYXJkXG4gICAqIGJlZm9yZSBzdGFydGluZyB0byBkcmF3IHRoZSBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGluaXRQbGF5ZXJzQW5kQm9hcmRzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSkge1xuICAgIEdhbWUuaW5pdFBsYXllcnNBbmRCb2FyZHMocGxheWVyMVR5cGUsIHBsYXllcjJUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIFZpZXcgbW9kdWxlIHRvIGRyYXcgdGhlIGJvYXJkIG9mIGEgY2VydGFpbiBwbGF5ZXIuXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgUGxheWVyIG9iamVjdC5cbiAgICogQHBhcmFtIHtTeW1ib2x9IG1haW5Pck9wcG9uZW50IEFzIE1haW4gcGxheWVyIG9yIG9wcG9uZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gZHJhd0FTaW5nbGVCb2FyZChwbGF5ZXIsIG1haW5Pck9wcG9uZW50KSB7XG4gICAgVmlldy5kcmF3Qm9hcmQoXG4gICAgICBHYW1lLkRFRkFVTFRfQk9BUkRfU0laRSxcbiAgICAgIHBsYXllci5pZCgpLFxuICAgICAgbWFpbk9yT3Bwb25lbnQsXG4gICAgICBwbGF5ZXIuYm9hcmQoKS5jYW5IaXRTaGlwLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0d28gYm9hcmRzIGluIHBlcnNwZWN0aXZlIG9mIG9uZSBwbGF5ZXIuXG4gICAqICAxLiBIaXMgb3duIGJvYXJkIChNQUlOKS5cbiAgICogIDIuIE9wcG9uZW50J3MgYm9hcmQgKE9QUE9ORU5UKS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFBsYXllcidzIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gZHJhd0JvYXJkc0ZvclBsYXllcihwbGF5ZXJJZCkge1xuICAgIGRyYXdBU2luZ2xlQm9hcmQoR2FtZS5wbGF5ZXIocGxheWVySWQpLCBNQUlOKTtcbiAgICBjb25zdCBvcHBvbmVudElkID0gKHBsYXllcklkICsgMSkgJSBHYW1lLnBsYXllcnMoKS5sZW5ndGg7XG4gICAgZHJhd0FTaW5nbGVCb2FyZChHYW1lLnBsYXllcihvcHBvbmVudElkKSwgT1BQT05FTlQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBib3RoIG1haW4gYW5kIG9wcG9uZW50J3MgYm9hcmQgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJBbGxCb2FyZHMoKSB7XG4gICAgVmlldy5jbGVhckFsbEJvYXJkcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvY2sgYWxsIGJvYXJkcywgcHJldmVudCBwbGF5ZXIgZnJvbSBpbnRlcmFjdCB3aXRoIHRoZSBib2FyZFxuICAgKiBiZWZvcmUgc3RhcnRpbmcgdGhlIGdhbWUuXG4gICAqL1xuICBmdW5jdGlvbiBsb2NrT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBWaWV3LmxvY2tPcHBvbmVudEJvYXJkKCk7XG4gIH1cblxuICAvKipcbiAgICogT25jZSB0aGUgZ2FtZSBpcyBwcmVwYXJlZCwgdW5sb2NrIGFsbCBib2FyZHMsIHNvIHRoYXQgcGxheWVyIGdhaW5cbiAgICogdGhlIGFjY2VzcyB0byB0aGUgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiB1bmxvY2tPcHBvbmVudEJvYXJkKCkge1xuICAgIFZpZXcudW5sb2NrT3Bwb25lbnRCb2FyZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdhbWVvdmVyIGxvZ2ljLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2FtZW92ZXIod2lubmVySWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICBhbGVydChgJHt3aW5uZXJJZH0gd2luIWApO1xuICAgIGxvY2tPcHBvbmVudEJvYXJkKCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsIGF0dGFjayBsb2dpYy5cbiAgICogMS4gQXR0YWNrIHRoZSB0YXJnZXQgc3BvdC5cbiAgICogMi4gUmVuZGVyIHRoZSB2aWV3IGFjY29yZGluZyB0byB0aGUgYXR0YWNrIHJlc3VsdC5cbiAgICogMy4gUmV0dXJuIGEgbGlzdCBvZiBzdXJyb3VuZGluZyBwb2ludHMgaWYgdGhpcyBhdHRhY2tcbiAgICogY2F1c2UgYSBzaGlwIHRvIHNpbmsuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdpcmQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHBvbmVudElkIElkIG9mIG9wcG9uZW50IHBsYXllci5cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqICBSZXR1cm4gdW5kZWZpbmVkIGlmIHNwb3QgYWxyZWFkeSBiZWVuIGF0dGFja2VkLlxuICAgKiAgUmV0dXJuIC0xIGlmIG1pc3NlZC5cbiAgICogIElmIGhpdCxcbiAgICogICAgUmV0dXJuIGEgbGlzdCBvZiBzdXJyb3VuZGluZyBwb2ludHMgaWYgYSBzaGlwIGlzIHN1bmsgYWZ0ZXIgdGhpcyBhdHRhY2suXG4gICAqICAgIE90aGVyd2lzZSwgcmV0dXJuIDAuXG4gICAqL1xuICBmdW5jdGlvbiBwbGF5ZXJBdHRhY2tPbmVTcG90KHJvdywgY29sdW1uLCBvcHBvbmVudElkKSB7XG4gICAgY29uc3QgYm9hcmQgPSBHYW1lLnBsYXllcihvcHBvbmVudElkKS5ib2FyZCgpO1xuICAgIC8vIGF0dGFja1xuICAgIGlmIChib2FyZC5hbHJlYWR5QmVlbkF0dGFja2VkKHJvdywgY29sdW1uKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBzaGlwSWQgPSBib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcbiAgICAvLyByZW5kZXIgYXR0YWNrZWQgc3BvdFxuICAgIFZpZXcucmVuZGVyU2VhQWZ0ZXJBdHRhY2socm93LCBjb2x1bW4sIG9wcG9uZW50SWQsIHNoaXBJZCk7XG4gICAgaWYgKHNoaXBJZCA9PT0gLTEpIHtcbiAgICAgIEdhbWUucGxheU1pc3NBdWRpbygpO1xuICAgICAgcmV0dXJuIHNoaXBJZDsgLy8gbWlzc1xuICAgIH1cbiAgICBHYW1lLmN1cnJlbnRQbGF5ZXIoKS5tZW1vcml6ZUxhc3RIaXQocm93LCBjb2x1bW4pOyAvLyBtZW1vcml6ZSBoaXQgY29vcmRpbmF0aW9uXG4gICAgLy8gcmVwb3J0IGNvb3JkaW5hdGVzIGlmIHNoaXAgc3Vua1xuICAgIGlmIChib2FyZC5nZXRTaGlwKHNoaXBJZCkuaXNTdW5rKCkpIHsgLy8gaGl0IGEgc2hpcCBhbmQgdGhlIHNoaXAgaXMgc3Vua1xuICAgICAgR2FtZS5wbGF5U3Vua0F1ZGlvKCk7XG4gICAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBib2FyZC5nZXRTaGlwKHNoaXBJZCkuY29vcmRpbmF0ZXMoKTtcbiAgICAgIFZpZXcucmVuZGVyU3Vua1NoaXBzKG9wcG9uZW50SWQsIHNoaXBDb29yZGluYXRlcyk7XG4gICAgICBHYW1lLmN1cnJlbnRQbGF5ZXIoKS5mb3JnZXRMYXN0SGl0KHNoaXBDb29yZGluYXRlcyk7XG4gICAgICByZXR1cm4gYm9hcmQuc2hpcFN1cnJvdW5kaW5nQXJlYShzaGlwSWQpO1xuICAgIH1cbiAgICBHYW1lLnBsYXlIaXRBdWRpbygpO1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjayB0aGUgdGFyZ2V0IHNwb3QuIElmIGEgc2hpcCBzaW5rIGFmdGVyIHRoaXMgYXR0YWNrLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICogYXR0YWNrIHRoZSBzdXJyb3VuZGluZyBhcmVhIG9mIHRoYXQgc2hpcCAobm8gb3RoZXIgc2hpcCBjYW4gc3RheSBpbiB0aGF0IGFyZWEpLlxuICAgKiBXaGVuIGh1bWFuIHBsYXllciBjbGljayBvbiB0aGUgYm9hcmQsIFZpZXcgbW9kdWxlIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uLlxuICAgKiBXaGVuIEFJIHBsYXllciBkZWNpZGUgdGhlIHRhcmdldCBwb3NpdGlvbiBvZiBuZXh0IGF0dGFjaywgaXQgd2lsbCBhbHNvXG4gICAqIGNhbGxiYWNrIHRoaXMgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdpcmQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHBvbmVudElkIElkIG9mIG9wcG9uZW50IHBsYXllci5cbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllckF0dGFjayhyb3csIGNvbHVtbiwgb3Bwb25lbnRJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllckF0dGFja09uZVNwb3Qocm93LCBjb2x1bW4sIG9wcG9uZW50SWQpO1xuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBzcG90IGFscmVhZHkgYmVlbiBhdHRhY2tlZC5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7IC8vIGF0dGFjayBzaW5rIGEgc2hpcFxuICAgICAgcmVzdWx0LmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHBsYXllckF0dGFja09uZVNwb3QoLi4uY29vcmRpbmF0ZSwgb3Bwb25lbnRJZCkpO1xuICAgIH1cbiAgICBpZiAoR2FtZS5wbGF5ZXIob3Bwb25lbnRJZCkuYm9hcmQoKS5hbGxTdW5rKCkpIHtcbiAgICAgIGdhbWVvdmVyKEdhbWUuY3VycmVudFBsYXllcigpLmlkKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ID09PSAtMSkgeyAvLyBtaXNzZWRcbiAgICAgIFZpZXcubG9ja0JvYXJkKG9wcG9uZW50SWQpO1xuICAgICAgVmlldy51bmxvY2tCb2FyZChHYW1lLmN1cnJlbnRQbGF5ZXIoKS5pZCgpKTtcbiAgICAgIEdhbWUubmV4dFR1cm4odHJ1ZSwgcGxheWVyQXR0YWNrKTsgLy8gcGFzcyBpdHNlbGYgdG8gdGhlIEdhbWUgbW9kdWxlIGFzIGEgY2FsbGJhY2suXG4gICAgfSBlbHNlIHsgLy8gaWYgaGl0IGEgc2hpcCwgY3VycmVudCBwbGF5ZXIgY2FuIGdpdmUgb25lIG1vcmUgc2hvdC5cbiAgICAgIEdhbWUubmV4dFR1cm4oZmFsc2UsIHBsYXllckF0dGFjayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3MgdGhlIGF0dGFjayBsb2dpYyB0byB0aGUgVmlldyBtb2R1bGUgYXMgYSBjYWxsYmFjay5cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjaygpIHtcbiAgICBWaWV3LmJpbmRSZWNlaXZlQXR0YWNrKHBsYXllckF0dGFjayk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyByYW5kb20gZmxlZXQgZm9yIHRoZSBwbGF5ZXIsIGFuZCByZS1kcmF3IHRoZSBib2FyZCBvbiBET00uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBUaGUgcGxheWVyIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tQWdhaW4obWFpbk9yT3Bwb25lbnQsIHBsYXllcklkKSB7XG4gICAgLy8gZ2VuZXJhdGUgcmFuZG9tIGZsZWV0IGZvciB0aGF0IHBsYXllclxuICAgIGNvbnN0IGJvYXJkID0gR2FtZS5wbGF5ZXIocGxheWVySWQpLmJvYXJkKCk7XG4gICAgYm9hcmQuY2xlYXJGbGVldCgpO1xuICAgIEdhbWUuYXV0b2ZpbGxGbGVldChib2FyZCk7XG4gICAgLy8gY2xlYXIgdGhlIG9sZCBib2FyZChtYWluIG9yIG9wcG9uZW50KSBmcm9tIHRoZSBET00uXG4gICAgVmlldy5jbGVhckJvYXJkKG1haW5Pck9wcG9uZW50KTtcbiAgICAvLyBkcmF3IGEgbmV3IGJvYXJkIG9uIERPTVxuICAgIGRyYXdBU2luZ2xlQm9hcmQoR2FtZS5wbGF5ZXIocGxheWVySWQpLCBtYWluT3JPcHBvbmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVSYW5kb21GbGVldCgpIHtcbiAgICBWaWV3LmJpbmRSYW5kb21GbGVldChyYW5kb21BZ2FpbiwgR2FtZS5wbGF5Q2xpY2tBdWRpbyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBnYW1lLlxuICAgKiBUaGUgZ2FtZSBpcyBub3QgeWV0IHN0YXJ0ZWQuXG4gICAqIEhhdmUgdG8gY2FsbCBzdGFydEdhbWUoKSB0byBzdGFydC5cbiAgICovXG4gIGZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4gICAgaW5pdFBsYXllcnNBbmRCb2FyZHMoSFVNQU4sIEFJKTtcbiAgICBkcmF3Qm9hcmRzRm9yUGxheWVyKDApOyAvLyBpbiBodW1hbiBwbGF5ZXIncyBwZXJzcGVjdGl2ZVxuICAgIGxvY2tPcHBvbmVudEJvYXJkKCk7XG4gICAgZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIGdhbWUsIGFuZCB1bmxvY2sgb3Bwb25lbnQncyBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBHYW1lLnN0YXJ0KCk7XG4gICAgR2FtZS5uZXh0VHVybihwbGF5ZXJBdHRhY2spOyAvLyBwYXNzIGl0c2VsZiB0byB0aGUgR2FtZSBtb2R1bGUgYXMgYSBjYWxsYmFjay5cbiAgICB1bmxvY2tPcHBvbmVudEJvYXJkKCk7XG4gICAgLy8gb25jZSB0aGUgZ2FtZSBzdGFydCwgcGxheWVyIGNhbm5vdCBjaGFuZ2UgdGhlIGZsZWV0IHVudGlsIHRoZSBlbmQgb2YgdGhlIGdhbWUuXG4gICAgVmlldy5sb2NrUmFuZG9tRmxlZXRCdXR0b24oKTtcbiAgICBWaWV3LmxvY2tTdGFydEdhbWVCdXR0b24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIFZpZXcgdG8gYmluZCBsaXN0ZW5lciBvbiBTdGFydCBnYW1lIGJ1dHRvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZVN0YXJ0R2FtZSgpIHtcbiAgICBWaWV3LmJpbmRTdGFydEdhbWVCdXR0b24oc3RhcnRHYW1lLCBHYW1lLnBsYXlHYW1lU3RhcnRBdWRpbyk7XG4gIH1cblxuICAvKipcbiAgICogUmUtaW5pdGlhbGl6ZSBhIG5ldyBnYW1lIHdpdGggcmFuZG9tbHkgYXV0by1maWxsZWQgZmxlZXQgZm9yIGJvdGggcGxheWVyLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG4gICAgY2xlYXJBbGxCb2FyZHMoKTtcbiAgICBuZXdHYW1lKCk7XG4gICAgVmlldy51bmxvY2tSYW5kb21GbGVldEJ1dHRvbigpO1xuICAgIFZpZXcudW5sb2NrU3RhcnRHYW1lQnV0dG9uKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBWaWV3IG1vZHVsZSB0byBiaW5kIHJlc3RhcnQgZ2FtZSBmZWF0dXJlIHRvIERPTSBlbGVtZW50cy5cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZVJlc3RhcnRHYW1lKCkge1xuICAgIFZpZXcuYmluZFJlc3RhcnRHYW1lQnV0dG9uKHJlc3RhcnRHYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludCBmb290ZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzaG93Rm9vdGVyKCkge1xuICAgIFZpZXcuc2hvd0Zvb3RlcigpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0UGxheWVyc0FuZEJvYXJkcyxcbiAgICBkcmF3QVNpbmdsZUJvYXJkLFxuICAgIGRyYXdCb2FyZHNGb3JQbGF5ZXIsXG4gICAgY2xlYXJBbGxCb2FyZHMsXG4gICAgZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrLFxuICAgIGVuYWJsZVJhbmRvbUZsZWV0LFxuICAgIGxvY2tPcHBvbmVudEJvYXJkLFxuICAgIHVubG9ja09wcG9uZW50Qm9hcmQsXG4gICAgbmV3R2FtZSxcbiAgICBzdGFydEdhbWUsXG4gICAgcmVzdGFydEdhbWUsXG4gICAgZW5hYmxlU3RhcnRHYW1lLFxuICAgIGVuYWJsZVJlc3RhcnRHYW1lLFxuICAgIHNob3dGb290ZXIsXG4gIH07XG59KSgpO1xuIiwibGV0IFVOSVRfVEVTVDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcblVOSVRfVEVTVCA9IHRydWU7IC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBhZnRlciB1bml0IHRlc3QuXG5cbmNvbnN0IERFRkFVTFRfQk9BUkRfU0laRSA9IDEwO1xuXG4vKipcbiAqIEJvYXJkIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBCb2FyZCBtYWdhZ2VzIFNoaXBzLCBhbmQgY2hlY2sgdGhlIGhpdCBmb3IgdXNlci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBpblNpemUgU2l6ZSBvZiB0aGUgZ2FtZSBib2FyZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluU2l6ZSkgPT4ge1xuICAvKipcbiAgICogQm9hcmQgcGxhaW4gb2JqZWN0LlxuICAgKi9cbiAgY29uc3QgYm9hcmQgPSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICBzaXplOiBpblNpemUgfHwgREVGQVVMVF9CT0FSRF9TSVpFLFxuICAgIGZsZWV0OiBbXSxcbiAgICBoaXRzOiBbXSxcbiAgICBtaXNzZXM6IFtdLFxuICAgIGludGFjdDogW10sXG4gIH07XG5cbiAgLyoqXG4gICAqIEFsbG93IG90aGVyIG1vZHVsZXMgdG8gY2hlY2sgdGhlIHNpemUgb2YgdGhlIGJvYXJkLlxuICAgKiBAcmV0dXJucyBCb2FyZCBzaXplLlxuICAgKi9cbiAgZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICByZXR1cm4gYm9hcmQuc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGdldCB0aGUgbGlzdCBvZiBhbGwgaW50YWN0IHBvc2l0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gaW50YWN0KCkge1xuICAgIHJldHVybiBib2FyZC5pbnRhY3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBzaGlwIGluIGZsZWV0IGJ5IGlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgU2hpcCBpZC5cbiAgICogQHJldHVybiBUaGUgc2hpcCBvYmplY3QgaWYgZXhpc3RzLiBPdGhlcndpc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U2hpcChpZCkge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5maW5kKChzaGlwKSA9PiBzaGlwLmlkKCkgPT09IGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGNoZWNrIHNpemUgb2YgY3VycmVudCBmbGVldC5cbiAgICovXG4gIGZ1bmN0aW9uIGZsZWV0U2l6ZSgpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgc2hpcHMgaW4gZmxlZXQuXG4gICAqL1xuICBmdW5jdGlvbiBjbGVhckZsZWV0KCkge1xuICAgIGJvYXJkLmZsZWV0ID0gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBib2R5IGNvb3JkaW5hdGVzIG9mIGFsbCBzaGlwcyBpbiBmbGVldC5cbiAgICovXG4gIGZ1bmN0aW9uIHNoaXBDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQucmVkdWNlKChhcnIsIGZsZWV0U2hpcCkgPT4ge1xuICAgICAgYXJyLnB1c2goZmxlZXRTaGlwLmNvb3JkaW5hdGVzKCkpO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9LCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIG51bWJlciBpcyBsb2NhdGVkIGluIHJhbmdlIG9mIGJvYXJkIHNpemUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBudW0gTnVtYmVyIHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaW4gYm9hcmQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGxlZ2FsKG51bSkge1xuICAgIHJldHVybiBudW0gPj0gMCAmJiBudW0gPCBib2FyZC5zaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBjb29yZGluYXRlcyBvZiB0aGUgc3Vycm91bmRpbmcgcG9pbnRzIG9mXG4gICAqIHRoYXQgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNoaXBJZCBTaGlwIGlkLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gQ29vcmRpbmF0ZXMgb2YgdGhlIHN1cnJvdW5kaW5nIHBvaW50cyBvZlxuICAgKiB0aGF0IHNoaXAuXG4gICAqL1xuICBmdW5jdGlvbiBzaGlwU3Vycm91bmRpbmdBcmVhKHNoaXBJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwKHNoaXBJZCk7XG4gICAgY29uc3QgW3VsUm93LCB1bENvbF0gPSBzaGlwLmhlYWQoKTtcbiAgICBjb25zdCBbYnJSb3csIGJyQ29sXSA9IHNoaXAudGFpbCgpO1xuICAgIGxldCBibFJvdztcbiAgICBsZXQgYmxDb2w7XG4gICAgbGV0IHVyUm93O1xuICAgIGxldCB1ckNvbDtcbiAgICBpZiAoc2hpcC5pc0hvcml6b250YWwoKSkge1xuICAgICAgW2JsUm93LCBibENvbF0gPSBzaGlwLmhlYWQoKTtcbiAgICAgIFt1clJvdywgdXJDb2xdID0gc2hpcC50YWlsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFtibFJvdywgYmxDb2xdID0gc2hpcC50YWlsKCk7XG4gICAgICBbdXJSb3csIHVyQ29sXSA9IHNoaXAuaGVhZCgpO1xuICAgIH1cbiAgICBpZiAodWxSb3cgLSAxID49IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSB1bENvbCAtIDE7IGkgPD0gdXJDb2wgKyAxOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGxlZ2FsKGkpKSByZXN1bHQucHVzaChbdWxSb3cgLSAxLCBpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChibFJvdyArIDEgPCBib2FyZC5zaXplKSB7XG4gICAgICBmb3IgKGxldCBpID0gYmxDb2wgLSAxOyBpIDw9IGJyQ29sICsgMTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChsZWdhbChpKSkgcmVzdWx0LnB1c2goW2JsUm93ICsgMSwgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodWxDb2wgLSAxID49IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSB1bFJvdzsgaSA8PSBibFJvdzsgaSArPSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpLCB1bENvbCAtIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVyQ29sICsgMSA8IGJvYXJkLnNpemUpIHtcbiAgICAgIGZvciAobGV0IGkgPSB1clJvdzsgaSA8PSBiclJvdzsgaSArPSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpLCB1ckNvbCArIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBib2FyZCwgcHV0IGFsbCBpbnRhY3QgcG9zaXRpb24gaW50byBib2FyZC5pbnRhY3QgYXJyYXkuXG4gICAqIFRoZSBwb3NpdGlvbiBbcm93LCBjb2x1bW5dIGlzIGNvZGVkIGFzOiBcInJvdy1jb2x1bW5cIi5cbiAgICovXG4gIGZ1bmN0aW9uIGZpbGxJbnRhY3QoKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQuc2l6ZTsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IGJvYXJkLnNpemU7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGJvYXJkLmludGFjdC5wdXNoKGAke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHBvaW50IGZyb20gdGhlIGJvYXJkLmludGFjdCBhcnJheS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBvc2l0b25TdHIgUG9zaXRpb24gc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUludGFjdChwb3NpdGlvblN0cikge1xuICAgIGNvbnN0IGluZGV4ID0gYm9hcmQuaW50YWN0LmZpbmRJbmRleCgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSBwb3NpdGlvblN0cik7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgIGJvYXJkLmludGFjdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBuZXcgc2hpcCBzaXRzIGluIHRoZSBmaXhlZCBzaGlwJ3MgZm9yYmlkZW4gem9uZS5cbiAgICogQHBhcmFtIHtTaGlwfSBmaXhlZFNoaXAgVGhlIHNoaXAgYWxyZWFkeSBwdXQgb24gdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge0FycmF5fSBuZXdIZWFkIEhlYWQgcG9zaXRpb25bcm93LCBjb2x1bW5dIG9mIHRoZSBuZXcgc2hpcC5cbiAgICogQHBhcmFtIHtBcnJheX0gbmV3VGFpbCBUYWlsIHBvc2l0aW9uW3JvdywgY29sdW1uXSBvZiB0aGUgbmV3IHNoaXAuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlc2UgdHdvIHNoaXBzIGhhdmUgb3ZlcmxhcCBlYWNoIG90aGVyLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBpc092ZXJsYXAoZml4ZWRTaGlwLCBuZXdIZWFkLCBuZXdUYWlsKSB7XG4gICAgY29uc3QgW2hlYWRSb3csIGhlYWRDb2x1bW5dID0gZml4ZWRTaGlwLmhlYWQoKTtcbiAgICBjb25zdCBbdGFpbFJvdywgdGFpbENvbHVtbl0gPSBmaXhlZFNoaXAudGFpbCgpO1xuICAgIGNvbnN0IG92ZXJsYXBSb3dTdGFydCA9IE1hdGgubWF4KDAsIGhlYWRSb3cgLSAxKTtcbiAgICBjb25zdCBvdmVybGFwQ29sdW1uU3RhcnQgPSBNYXRoLm1heCgwLCBoZWFkQ29sdW1uIC0gMSk7XG4gICAgY29uc3Qgb3ZlcmxhcFJvd0VuZCA9IE1hdGgubWluKGJvYXJkLnNpemUgLSAxLCB0YWlsUm93ICsgMSk7XG4gICAgY29uc3Qgb3ZlcmxhcENvbHVtbkVuZCA9IE1hdGgubWluKGJvYXJkLnNpemUgLSAxLCB0YWlsQ29sdW1uICsgMSk7XG4gICAgaWYgKG5ld0hlYWRbMF0gLSBuZXdUYWlsWzBdID09PSAwKSB7IC8vIGlzIGhvcml6b250YWxcbiAgICAgIGlmIChuZXdIZWFkWzBdIDwgb3ZlcmxhcFJvd1N0YXJ0IHx8IG5ld0hlYWRbMF0gPiBvdmVybGFwUm93RW5kKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobmV3VGFpbFsxXSA8IG92ZXJsYXBDb2x1bW5TdGFydCB8fCBuZXdIZWFkWzFdID4gb3ZlcmxhcENvbHVtbkVuZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChuZXdIZWFkWzFdIDwgb3ZlcmxhcENvbHVtblN0YXJ0IHx8IG5ld0hlYWRbMV0gPiBvdmVybGFwQ29sdW1uRW5kKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5ld1RhaWxbMF0gPCBvdmVybGFwUm93U3RhcnQgfHwgbmV3SGVhZFswXSA+IG92ZXJsYXBSb3dFbmQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdGFyZ2V0IHBvc2l0aW9uW3JvdywgY29sdW1uXSBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBUYXJnZXQgcm93LlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIFRhcmdldCBjb2x1bW4uXG4gICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBUaGUgc2hpcCB0byBiZSBwdXQgaW50byB0aGUgYm9hcmQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgaXMgb2ssIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGF2YWlsYWJsZShyb3csIGNvbHVtbiwgc2hpcCkge1xuICAgIC8vIGNoZWNrIGhlYWRcbiAgICBpZiAocm93IDwgMFxuICAgICAgfHwgcm93ID49IGJvYXJkLnNpemVcbiAgICAgIHx8IGNvbHVtbiA8IDBcbiAgICAgIHx8IGNvbHVtbiA+PSBib2FyZC5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIHRhaWxcbiAgICBjb25zdCB0YWlsUm93ID0gKHNoaXAuaXNIb3Jpem9udGFsKCkpID8gcm93IDogKHJvdyArIHNoaXAuc2l6ZSgpIC0gMSk7XG4gICAgY29uc3QgdGFpbENvbHVtbiA9IChzaGlwLmlzSG9yaXpvbnRhbCgpKSA/IChjb2x1bW4gKyBzaGlwLnNpemUoKSAtIDEpIDogY29sdW1uO1xuICAgIGlmICh0YWlsUm93IDwgMFxuICAgICAgfHwgdGFpbFJvdyA+PSBib2FyZC5zaXplXG4gICAgICB8fCB0YWlsQ29sdW1uIDwgMFxuICAgICAgfHwgdGFpbENvbHVtbiA+PSBib2FyZC5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIG92ZXJsYXBcbiAgICBjb25zdCBuZXdIZWFkID0gW3JvdywgY29sdW1uXTtcbiAgICBjb25zdCBuZXdUYWlsID0gW3RhaWxSb3csIHRhaWxDb2x1bW5dO1xuICAgIGlmIChib2FyZC5mbGVldC5zb21lKChmaXhlZFNoaXApID0+IGlzT3ZlcmxhcChmaXhlZFNoaXAsIG5ld0hlYWQsIG5ld1RhaWwpKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1dCBzaGlwIGludG8gYSBjZXJ0YWluIHBvc2l0aW9uIGlmIGl0J3MgYXZhaWxhYmxlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRoZSBzaGlwIGhlYWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGhlIHNoaXAgaGVhZC5cbiAgICogQHBhcmFtIHtTaGlwfSBzaGlwIFRoZSBzaGlwIG9iamVjdC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHBvc2l0aW9uIGlzIGxlZ2FsIGZvciBhIG5ldyBzaGlwLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBwdXRTaGlwKHJvdywgY29sdW1uLCBzaGlwKSB7XG4gICAgc2hpcC5wdXQocm93LCBjb2x1bW4pO1xuICAgIGJvYXJkLmZsZWV0LnB1c2goc2hpcCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgc2hpcCBmcm9tIHRoZSBib2FyZCBmbGVldCAob25seSBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIGZsZWV0KS5cbiAgICogQHBhcmFtIHtTaGlwfSBTaGlwIHRvIGJlIHJlbW92ZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVTaGlwKHNoaXApIHtcbiAgICBjb25zdCBpbmRleCA9IGJvYXJkLmZsZWV0LmZpbmRJbmRleCgoZmxlZXRTaGlwKSA9PiBmbGVldFNoaXAuaWQoKSA9PT0gc2hpcC5pZCgpKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG4gICAgYm9hcmQuZmxlZXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IHVzZWQgdG8gdG9nZ2xlIHNoaXBzIGFscmVhZHkgaW4gdGhlIGZsZWV0LlxuICAgKiBAcGFyYW0ge1NoaXB9IHNoaXAgVGFyZ2V0IHNoaXAuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdG9nZ2xlZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gdG9nZ2xlRmxlZXRTaGlwKHNoaXApIHtcbiAgICByZW1vdmVTaGlwKHNoaXApO1xuICAgIHNoaXAudG9nZ2xlRGlyZWN0aW9uKCk7XG4gICAgaWYgKGF2YWlsYWJsZSguLi5zaGlwLmhlYWQoKSwgc2hpcCkpIHtcbiAgICAgIHB1dFNoaXAoLi4uc2hpcC5oZWFkKCksIHNoaXApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIGNhbm5vdCB0b2dnbGVcbiAgICBzaGlwLnRvZ2dsZURpcmVjdGlvbigpOyAvLyBiYWNrIHRvIG9yZ2luYWwgZGlyZWN0aW9uXG4gICAgcHV0U2hpcCguLi5zaGlwLmhlYWQoKSwgc2hpcCk7IC8vIHB1dCBiYWNrIHRvIGZsZWV0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byBwb3NpdGlvbltyb3csIGNvbHVtbl0gZXF1YWwgdG8gZWFjaCBvdGhlci5cbiAgICogQHBhcmFtIHtBcnJheX0gcG9zaXRpb25BIFtyb3csIGNvbHVtbl1cbiAgICogQHBhcmFtIHtBcnJheX0gcG9zaXRpb25CIFtyb3csIGNvbHVtbl1cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBlcXVhbCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gcG9zaXRpb25FcXVhbChwb3NpdGlvbkEsIHBvc2l0aW9uQikge1xuICAgIHJldHVybiAocG9zaXRpb25BWzBdID09PSBwb3NpdGlvbkJbMF0pICYmIChwb3NpdGlvbkFbMV0gPT09IHBvc2l0aW9uQlsxXSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hlYXRoZXIgdGhlIHRhcmdldCBwb3NpdGlvbiBoYXMgYmVlbiBoaXQgYmVmb3JlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRhcmdldCBoYXMgYmVlbiBoaXQgYmVmb3JlLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBhbHJlYWR5SGl0KHJvdywgY29sdW1uKSB7XG4gICAgcmV0dXJuIGJvYXJkLmhpdHMuc29tZSgoaGl0KSA9PiBwb3NpdGlvbkVxdWFsKGhpdCwgW3JvdywgY29sdW1uXSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgcG9zaXRpb24gaGFzIGJlZW4gYXR0YWNrZWRcbiAgICogYnV0IGl0IHdhcyBhIG1pc3MuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaXQgd2FzIGEgbWlzcywgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxyZWFkeU1pc3NlZChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5taXNzZXMuc29tZSgobWlzcykgPT4gcG9zaXRpb25FcXVhbChtaXNzLCBbcm93LCBjb2x1bW5dKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hlYXRoZXIgdGhlIHRhcmdldCBleGlzdHMgaW4gYXR0YWNrIGhpc3RvcnkgYm9hcmQuaGl0cyBvciBib2FyZC5taXNzZXMuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGFyZ2V0IGhhcyBiZWVuIGF0dGFja2VkIGJlZm9yZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxyZWFkeUJlZW5BdHRhY2tlZChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBhbHJlYWR5SGl0KHJvdywgY29sdW1uKSB8fCBhbHJlYWR5TWlzc2VkKHJvdywgY29sdW1uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3R1YWxseSB0cnkgdG8gaGl0IGEgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICogIHJldHVybiBzaGlwIGlkIGlmIGhpdC5cbiAgICogIHJldHVybiAtMSBpZiBtaXNzLlxuICAgKi9cbiAgZnVuY3Rpb24gdHJ5SGl0U2hpcChyb3csIGNvbHVtbikge1xuICAgIGxldCBoaXQgPSAtMTtcbiAgICBib2FyZC5mbGVldC5mb3JFYWNoKChmbGVldFNoaXApID0+IHtcbiAgICAgIGlmIChmbGVldFNoaXAuaGl0KHJvdywgY29sdW1uKSkgaGl0ID0gZmxlZXRTaGlwLmlkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgYXR0YWNrIGNhbiBoaXQgYSBzaGlwLlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXNuJ3QgYWN0dWFsbHkgaGl0IHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgY2FuIGhpdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gY2FuSGl0U2hpcChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5zb21lKChmbGVldFNoaXApID0+IGZsZWV0U2hpcC5jYW5IaXQocm93LCBjb2x1bW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gaGl0IGVhY2ggb2YgdGhlIHNoaXBzIGluIHRoZSBib2FyZC5mbGVldCxcbiAgICogb25seSBpZiB0aGUgdGFyZ2V0IHBvc2l0aW9uIGhhcyBuZXZlciBiZWVuIGF0dGFja2VkIGJlZm9yZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGlZIG9mIHRhcmdldC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGlYIG9mIHRhcmdldC5cbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKiAgaWYgaGl0LCByZXR1cm4gdGhlIHNoaXAncyBpZC5cbiAgICogIHJldHVybiAtMSBpZiBtaXNzZWQuXG4gICAqICByZXR1cm4gdW5kZWZpbmVkLCBpZiBhbHJlYWR5IGJlZW4gYXR0YWNrZWQgYmVmb3JlLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IHRhcmdldCA9IFtyb3csIGNvbHVtbl07XG4gICAgLy8gTXVzdCBiZSB1bmRlZmluZWQuIElmIHJldHVybiBmYWxzZSwgd2lsbCBiZSBjb25zaWRlcmVkIGFzIGEgbWlzcy5cbiAgICBpZiAoYWxyZWFkeUJlZW5BdHRhY2tlZCguLi50YXJnZXQpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGhpdCA9IHRyeUhpdFNoaXAocm93LCBjb2x1bW4pO1xuICAgIGlmIChoaXQgIT09IC0xKSB7XG4gICAgICBib2FyZC5oaXRzLnB1c2godGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmQubWlzc2VzLnB1c2godGFyZ2V0KTtcbiAgICB9XG4gICAgcmVtb3ZlRnJvbUludGFjdChgJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgIHJldHVybiBoaXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYWxsIHNoaXBzIGFyZSBzdW5rLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGFsbCBzaGlwcyBhcmUgc3Vuaywgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQuZXZlcnkoKGZsZWV0U2hpcCkgPT4gZmxlZXRTaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBib2FyZC5cbiAgICovXG4gIGZpbGxJbnRhY3QoKTtcblxuICAvKipcbiAgICogUHVibGljIEFQSVxuICAgKi9cbiAgY29uc3QgYXBpID0ge1xuICAgIHNpemUsXG4gICAgaW50YWN0LFxuICAgIGdldFNoaXAsXG4gICAgZmxlZXRTaXplLFxuICAgIGNsZWFyRmxlZXQsXG4gICAgc2hpcENvb3JkaW5hdGVzLFxuICAgIHNoaXBTdXJyb3VuZGluZ0FyZWEsXG4gICAgYXZhaWxhYmxlLFxuICAgIHB1dFNoaXAsXG4gICAgcmVtb3ZlU2hpcCxcbiAgICB0b2dnbGVGbGVldFNoaXAsXG4gICAgYWxyZWFkeUhpdCxcbiAgICBhbHJlYWR5TWlzc2VkLFxuICAgIGFscmVhZHlCZWVuQXR0YWNrZWQsXG4gICAgY2FuSGl0U2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFN1bmssXG4gIH07XG5cbiAgLyoqXG4gICAqIEFQSSBvbmx5IGZvciB1bml0IHRlc3QuXG4gICAqL1xuICBpZiAoVU5JVF9URVNUKSB7XG4gICAgYXBpLmJvYXJkID0gYm9hcmQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmFwaSxcbiAgfTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZmlyc3QgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IFBsYXllciwge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn0gZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn07XG4vLyBhdWRpbyByZXNvdXJjZXNcbmltcG9ydCBIaXQgZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL2hpdC53YXYnO1xuaW1wb3J0IE1pc3MgZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL2RlZXBCdWJibGUud2F2JztcbmltcG9ydCBTdW5rIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby9zdW5rRXhwbG9zaW9uLndhdic7XG5pbXBvcnQgQ2xpY2sgZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL2NsaWNrLndhdic7XG5pbXBvcnQgR2FtZVN0YXJ0IGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby9nYW1lU3RhcnQud2F2JztcblxubGV0IFVOSVRfVEVTVDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcblVOSVRfVEVTVCA9IHRydWU7IC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBvbmNlIGZpbmlzaCB0aGUgdW5pdCB0ZXN0cy5cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3QgREVGQVVMVF9CT0FSRF9TSVpFID0gMTA7IC8vIGRlZmF1bHQgZ2FtZSBib2FyZCBzaXplXG4gIC8vIERlZmF1bHQgZmxlZXQgc2V0dGluZy4gQWNjb3JkaW5nIHRvIDE5OTAncyBCYXR0bGVzaGlwIEdhbWUgb2YgTWlsdG9uIEJyYWRsZXQgQ29tcGFueS5cbiAgY29uc3QgU1RBTkRBUkRfRkxFRVQgPSBbXG4gICAgLy8gW25hbWUsIHNpemVdXG4gICAgWydjYXJyaWVyJywgNV0sXG4gICAgWydiYXR0bGVzaGlwJywgNF0sXG4gICAgWydjcnVpc2VyJywgM10sXG4gICAgWydzdWJtYXJpbmUnLCAzXSxcbiAgICBbJ2Rlc3Ryb3llcicsIDJdLFxuICBdO1xuICBjb25zdCBIaXRBdWRpbyA9IG5ldyBBdWRpbyhIaXQpO1xuICBjb25zdCBNaXNzQXVkaW8gPSBuZXcgQXVkaW8oTWlzcyk7XG4gIGNvbnN0IFN1bmtBdWRpbyA9IG5ldyBBdWRpbyhTdW5rKTtcbiAgY29uc3QgQ2xpY2tBdWRpbyA9IG5ldyBBdWRpbyhDbGljayk7XG4gIGNvbnN0IEdhbWVTdGFydEF1ZGlvID0gbmV3IEF1ZGlvKEdhbWVTdGFydCk7XG5cbiAgLyoqXG4gICAqIEdhbWUgbW9kdWxlIHByb3RvLlxuICAgKiAgcGxheWVyczogQXJyYXkuIFR3byBwbGF5ZXJzLlxuICAgKiAgY3VycmVudFBsYXllcjogTnVtYmVyLiBJbmRleCBvZiBjdXJyZW50IHBsYXllciBpbiB0aGUgcGxheWVycyBhcnJheS5cbiAgICovXG4gIGNvbnN0IGdhbWUgPSB7fTtcblxuICBmdW5jdGlvbiBwbGF5SGl0QXVkaW8oKSB7XG4gICAgSGl0QXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIEhpdEF1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlNaXNzQXVkaW8oKSB7XG4gICAgTWlzc0F1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICBNaXNzQXVkaW8ucGxheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheVN1bmtBdWRpbygpIHtcbiAgICBTdW5rQXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIFN1bmtBdWRpby5wbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5Q2xpY2tBdWRpbygpIHtcbiAgICBDbGlja0F1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICBDbGlja0F1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlHYW1lU3RhcnRBdWRpbygpIHtcbiAgICBHYW1lU3RhcnRBdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgR2FtZVN0YXJ0QXVkaW8ucGxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgaW50ZWdlciBpbiByYW5nZSBvZiBbMCwgbWF4KS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBNYXggdmFsdWUgKGV4Y2x1c2l2ZSkuXG4gICAqIEByZXR1cm4gR2VuZXJhdGVkIGludGVnZXIuXG4gICAqL1xuICBmdW5jdGlvbiByYW5kb20obWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICAvKipcbiAgICogUGljayB0aGUgcmFuZG9tIHBvc2l0aW9uIFtyb3csIGNvbHVtbl0gaW4gdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge0JvYXJkfSBib2FyZCBUYXJnZXQgYm9hcmQuXG4gICAqIEByZXR1cm4gUmFuZG9tIHBvc2l0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tUG9zaXRpb24oc2l6ZSkge1xuICAgIHJldHVybiBbcmFuZG9tKHNpemUpLCByYW5kb20oc2l6ZSldO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dG9maWxsKHJhbmRvbWx5KSBhIGdhbWUgYm9hcmQgd2l0aCBmbGVldCBzaGlwcy5cbiAgICogQHBhcmFtIHtCb2FyZH0gYm9hcmQgVGFyZ2V0IGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gYXV0b2ZpbGxGbGVldChib2FyZCkge1xuICAgIFNUQU5EQVJEX0ZMRUVULmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcCguLi50ZW1wbGF0ZSk7XG4gICAgICBpZiAocmFuZG9tKDIpID09PSAxKSBzaGlwLnRvZ2dsZURpcmVjdGlvbigpO1xuICAgICAgbGV0IHBvc2l0aW9uID0gcmFuZG9tUG9zaXRpb24oYm9hcmQuc2l6ZSgpKTtcbiAgICAgIHdoaWxlICghYm9hcmQuYXZhaWxhYmxlKC4uLnBvc2l0aW9uLCBzaGlwKSkge1xuICAgICAgICBwb3NpdGlvbiA9IHJhbmRvbVBvc2l0aW9uKGJvYXJkLnNpemUoKSk7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXRTaGlwKC4uLnBvc2l0aW9uLCBzaGlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgYWxsIHBsYXllcnMuXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIHBsYXllcnNcbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggUGxheWVyIG9iamVjdCBieSB0aGVpciBpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIHBsYXllciBpZC5cbiAgICogQHJldHVybiB7UGxheWVyfSBQbGF5ZXIgb2JqZWN0IGlmIGV4aXN0cy5cbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllcihpZCkge1xuICAgIHJldHVybiBnYW1lLnBsYXllcnMuZmluZCgodGhlUGxheWVyKSA9PiB0aGVQbGF5ZXIuaWQoKSA9PT0gaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBjdXJyZW50IHBsYXllciBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtQbGF5ZXJ9IEN1cnJlbnQgcGxheWVyIG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVyc1tnYW1lLmN1cnJlbnRQbGF5ZXJdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdHdvIHBsYXllcnMgd2l0aCByYW5kb21seSBhdXRvZmlsbGVkIGJvYXJkLlxuICAgKiBBSSBwbGF5ZXIncyBkZWZhdWx0IGxldmVsIGlzIEVBU1kuXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBwbGF5ZXIxVHlwZSBIVU1BTiBvciBBSVxuICAgKiBAcGFyYW0ge1N5bWJvbH0gcGxheWVyMlR5cGUgSFVNQU4gb3IgQUlcbiAgICovXG4gIGZ1bmN0aW9uIGluaXRQbGF5ZXJzQW5kQm9hcmRzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSkge1xuICAgIGdhbWUucGxheWVycyA9IFtdO1xuICAgIGNvbnN0IHBsYXllclR5cGVzID0gW3BsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJUeXBlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV3UGxheWVyID0gUGxheWVyKGksIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIHBsYXllclR5cGVzW2ldKTtcbiAgICAgIGF1dG9maWxsRmxlZXQobmV3UGxheWVyLmJvYXJkKCkpO1xuICAgICAgZ2FtZS5wbGF5ZXJzLnB1c2gobmV3UGxheWVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBBSS5cbiAgICogSXQgY2FuIGFsc28gYmUgdXNlZCB0byBjaGFuZ2UgQUkgbGV2ZWwuXG4gICAqIEFJIHBsYXllcidzIGJvYXJkIGlzIGZpbGxlZCBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgZnVuY3Rpb24gYWdhaW5zdEFJKGxldmVsKSB7XG4gICAgZ2FtZS5wbGF5ZXJzWzFdID0gUGxheWVyKDEsIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIEFJLCBsZXZlbCk7XG4gICAgYXV0b2ZpbGxGbGVldChnYW1lLnBsYXllcnNbMV0uYm9hcmQoKSk7XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBIVU1BTi5cbiAgICovXG4gIGZ1bmN0aW9uIGFnYWluc3RIdW1hbigpIHtcbiAgICBnYW1lLnBsYXllcnNbMV0gPSBQbGF5ZXIoMSwgQm9hcmQoREVGQVVMVF9CT0FSRF9TSVpFKSwgSFVNQU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXh0IHBsYXllcidzIGluZGV4LlxuICAgKiBAcmV0dXJucyBpbmRleCBvZiBuZXh0IHBsYXllclxuICAgKi9cbiAgZnVuY3Rpb24gbmV4dEluZGV4KCkge1xuICAgIHJldHVybiAoZ2FtZS5jdXJyZW50UGxheWVyICsgMSkgJSBnYW1lLnBsYXllcnMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGlzIGh1bWFuIHBsYXllciwgZG8gbm90aGluZyh3YWl0IGZvciBodW1hbiB0byBjbGlja1xuICAgKiBvbiB0aGUgYm9hcmQgdG8gdHJpZ2dlciBhbiBhdHRhY2sgZXZlbnQpLlxuICAgKlxuICAgKiBBSSBQbGF5ZXIncyBhdHRhY2sgZnVuY3Rpb24gb25seSBkZWNpZGVzIHdoZXJlIHRvIGF0dGFjayxcbiAgICogYW5kIGNhbGxiYWNrIGNvbnRyb2xsZXIgdG8gZG8gdGhlIHJlc3Qgb2YgdGhlIGpvYi5cbiAgICogQHBhcmFtIHtCb29sZWFufSBwYXNzVG9OZXh0UGxheWVyXG4gICAqICB0cnVlIGlmIHN3aXRjaCBwbGF5ZXIuXG4gICAqICBmYWxzZSBkb2Vzbid0IHN3aXRjaCBwbGF5ZXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRyb2xsZXJBdHRhY2tDYWxsYmFjayBBY3R1YWwgYXR0YWNrXG4gICAqIGxvZ2ljIGluIENvbnRyb2xsZXIgbW9kdWxlLlxuICAgKi9cbiAgZnVuY3Rpb24gbmV4dFR1cm4ocGFzc1RvTmV4dFBsYXllciwgY29udHJvbGxlckF0dGFja0NhbGxiYWNrKSB7XG4gICAgaWYgKHBhc3NUb05leHRQbGF5ZXIpIGdhbWUuY3VycmVudFBsYXllciA9IG5leHRJbmRleCgpO1xuICAgIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLnBsYXllcnNbZ2FtZS5jdXJyZW50UGxheWVyXTtcbiAgICBpZiAoIWN1cnJQbGF5ZXIuaXNBSSgpKSByZXR1cm47IC8vIGh1bWFuIHBsYXllciBkbyBub3RoaW5nLlxuICAgIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5wbGF5ZXJzW25leHRJbmRleCgpXTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyUGxheWVyLmF0dGFjayhvcHBvbmVudC5ib2FyZCgpKTsgLy8gQUkgcGxheWVyJ3MgbmV4dCBhdHRhY2sgdGFyZ2V0XG4gICAgaWYgKHRhcmdldCkgeyAvLyBpZiB0aGVyZSdzIG5vIG1vcmUgZ3JpZCB0byBiZSBhdHRhY2tlZCwgdGFyZ2V0IHdpbGwgYmUgdW5kZWZpbmVkLlxuICAgICAgY29udHJvbGxlckF0dGFja0NhbGxiYWNrKC4uLnRhcmdldCwgb3Bwb25lbnQuaWQoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gcGxheWVyIGhhcyBwdXQgYWxsIGhpcyBzaGlwcyBpbnRvIHRoZSBib2FyZC5cbiAgICogQ29udHJvbGxlciBjYWxsIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgdGhlIGdhbWUuXG4gICAqXG4gICAqIEJlZm9yZSBzdGFydCB0aGUgZ2FtZSB0aGlzIGZ1bmN0aW9uIHdpbGwgY2hlY2tcbiAgICogd2hlYXRoZXIgYWxsIHJlcXVpcmVtZW50cyBhYm92ZSBoYXZlIGJlZW4gbWV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiAgdHJ1ZSwgaWYgYWxsIHJlcXVpcmVtZW50cyBoYXZlIGJlZW4gbWV0LCB0aGUgZ2FtZSBpcyBzdGFydGVkLlxuICAgKiAgb3RoZXJ3aXNlLCBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIC8vIGNoZWNrIGNvbmZpZ3VyYXRpb25zXG4gICAgaWYgKGdhbWUucGxheWVycy5zb21lKCh0aGVQbGF5ZXIpID0+IHRoZVBsYXllci5ib2FyZCgpLmZsZWV0U2l6ZSgpXG4gICAgICAgICE9PSBTVEFOREFSRF9GTEVFVC5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFN0YXJ0IGdhbWUuXG4gICAgLy8gU2V0IHRvIHRoZSBsYXN0IHBsYXllci4gbmV4dFR1cm4oKSB3aWxsIG1vdmUgb24uXG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBhcGkgPSB7XG4gICAgREVGQVVMVF9CT0FSRF9TSVpFLFxuICAgIHBsYXlIaXRBdWRpbyxcbiAgICBwbGF5TWlzc0F1ZGlvLFxuICAgIHBsYXlTdW5rQXVkaW8sXG4gICAgcGxheUNsaWNrQXVkaW8sXG4gICAgcGxheUdhbWVTdGFydEF1ZGlvLFxuICAgIHBsYXllcnMsXG4gICAgcGxheWVyLFxuICAgIGN1cnJlbnRQbGF5ZXIsXG4gICAgYXV0b2ZpbGxGbGVldCxcbiAgICBuZXh0VHVybixcbiAgICBpbml0UGxheWVyc0FuZEJvYXJkcyxcbiAgICBhZ2FpbnN0QUksXG4gICAgYWdhaW5zdEh1bWFuLFxuICAgIHN0YXJ0LFxuICB9O1xuXG4gIGlmIChVTklUX1RFU1QpIHtcbiAgICBhcGkuZ2FtZSA9IGdhbWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmFwaSxcbiAgfTtcbn0pKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZS1wcm9wcyAqL1xuLyoqXG4gKiBUaGVyZSBhcmUgdHdvIGRpZmZlcmVudCB0eXBlcyBvZiBwbGF5ZXI6XG4gKiAgMS4gYWlcbiAqICAyLiBodW1hblxuICovXG5leHBvcnQgY29uc3QgQUkgPSBTeW1ib2woJ2FpJyk7XG5leHBvcnQgY29uc3QgSFVNQU4gPSBTeW1ib2woJ2h1bWFuJyk7XG5cbi8qKlxuICogVGhyZWUgZGlmZmVyZW50IGxldmVsIG9mIEFJLlxuICovXG5leHBvcnQgY29uc3QgRUFTWSA9IFN5bWJvbCgnY2hpbGQnKTtcbmV4cG9ydCBjb25zdCBOT1JNQUwgPSBTeW1ib2woJ25vcm1hbCcpO1xuZXhwb3J0IGNvbnN0IEhBUkQgPSBTeW1ib2woJ2hhcmQnKTtcblxuLyoqXG4gKiBQbGF5ZXIgZmFjdG9yeSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Qm9hcmR9IGluQm9hcmQgUGxheWVyJ3MgZ2FtZSBib2FyZC5cbiAqIEBwYXJhbSB7U3ltYm9sfSBpblR5cGUgSFVNQU4gb3IgQUkuXG4gKiBAcGFyYW0ge1N5bWJvbH0gaW5MZXZlbCBPcHRpb25hbC4gQUkgbGV2ZWwuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbklkLCBpbkJvYXJkLCBpblR5cGUsIGluTGV2ZWwpID0+IHtcbiAgLyoqXG4gICAqIFBsYXllciBwbGFpbiBvYmplY3QuXG4gICAqL1xuICBjb25zdCBwbGF5ZXIgPSB7XG4gICAgaWQ6IGluSWQsXG4gICAgdHlwZTogaW5UeXBlLFxuICAgIGJvYXJkOiBpbkJvYXJkLFxuICAgIGxhc3RIaXQ6IFtdLCAvLyBtZW1vcml6ZSBoaXRzIChzdW5rIHNoaXAncyBjb29yZGluYXRlcyB3aWxsIGJlIHJlbW92ZWQpXG4gIH07XG5cbiAgaWYgKHBsYXllci50eXBlID09PSBBSSkge1xuICAgIHBsYXllci5sZXZlbCA9IGluTGV2ZWwgfHwgTk9STUFMOyAvLyBkZWZhdWx0IGlzIE5PUk1BTFxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwbGF5ZXIgaWQuXG4gICAqIEByZXR1cm5zIFBsYXllciBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGlkKCkge1xuICAgIHJldHVybiBwbGF5ZXIuaWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgcGxheWVyIHR5cGUuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaXMgcGxheWVyIGlzIEFJLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNBSSgpIHtcbiAgICByZXR1cm4gcGxheWVyLnR5cGUgPT09IEFJO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIEFJIHBsYXllcidzIGxldmVsLlxuICAgKiBAcmV0dXJucyBBSSBwbGF5ZXIncyBsZXZlbC4gdW5kZWZpbmVkIGlmIGl0J3Mgbm90IEFJIHBsYXllci5cbiAgICovXG4gIGZ1bmN0aW9uIGFpTGV2ZWwoKSB7XG4gICAgaWYgKHBsYXllci50eXBlICE9PSBBSSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcGxheWVyLmxldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93IEdhbWUgbW9kdWxlIHRvIHNldCBBSSBsZXZlbC5cbiAgICogQHBhcmFtIHtTeW1ib2x9IGxldmVsIEVBU1kgb3IgTk9STUFMIG9yIEhBUkRcbiAgICovXG4gIGZ1bmN0aW9uIHNldEFpTGV2ZWwobGV2ZWwpIHtcbiAgICBpZiAocGxheWVyLnR5cGUgIT09IEFJKSByZXR1cm47XG4gICAgcGxheWVyLmxldmVsID0gbGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwbGF5ZXIncyBib2FyZCBvYmplY3QuXG4gICAqIEByZXR1cm5zIFBsYXllcidzIGJvYXJkIG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGJvYXJkKCkge1xuICAgIHJldHVybiBwbGF5ZXIuYm9hcmQ7XG4gIH1cblxuICAvKipcbiAgICogUmFuZG9tbHkgcGljayBhIHRhcmdldCBmcm9tIG9wcG9uZW50IGJvYXJkJ3MgaW50YWN0IGxpc3QuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IG9wcG9uZW50Qm9hcmQgT3Bwb2VuZW50J3MgYm9hcmQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB0aGUgdGFyZ2V0IGNvb3JkaW5hdGVcbiAgICovXG4gIGZ1bmN0aW9uIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgaWYgKG9wcG9uZW50Qm9hcmQuaW50YWN0KCkubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3Bwb25lbnRCb2FyZC5pbnRhY3QoKS5sZW5ndGgpO1xuICAgIGNvbnN0IHN0ciA9IG9wcG9uZW50Qm9hcmQuaW50YWN0KClbaW5kZXhdO1xuICAgIGNvbnN0IFtyb3dTdHIsIGNvbHVtblN0cl0gPSBzdHIuc3BsaXQoJy0nKTtcbiAgICByZXR1cm4gW3BhcnNlSW50KHJvd1N0ciwgMTApLCBwYXJzZUludChjb2x1bW5TdHIsIDEwKV07XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBzdW0gb2YgZGlzdGFuY2VzIGJld3R3ZWVuIHRoZSB0YXJnZXQgcG9pbnRcbiAgICogYW5kIGFsbCBwb2ludHMgaW4gcGxheWVyLmxhc3RIaXQuXG4gICAqIERpc3RhbmNlID0gaG9yaXpvbnRhbCBkaXN0YW5jZSArIHZlcnRpY2FsIGRpc3RhbmNlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW5cbiAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZSBvZiBwb2ludCBBIGFuZCBCLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzdGFuY2Uocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gcGxheWVyLmxhc3RIaXQucmVkdWNlKChkaXN0LCBoaXQpID0+IE1hdGguYWJzKHJvdyAtIGhpdFswXSlcbiAgICAgICsgTWF0aC5hYnMoY29sdW1uIC0gaGl0WzFdKVxuICAgICAgKyBkaXN0LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIHN1bSBvZiBkaXN0YW5jZXMgYmV3dHdlZW4gdGhlIHRhcmdldCBwb2ludFxuICAgKiBhbmQgYWxsIHBvaW50cyBpbiBwbGF5ZXIubGFzdEhpdC5cbiAgICogY29EaXN0YW5jZSA9IHN1bSBvZiBob3Jpem9udGFsIGRpc3RhbmNlICogc3VtIG9mIHZlcnRpY2FsIGRpc3RhbmNlICsgZGlzdGFuY2VcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvd1xuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uXG4gICAqIEByZXR1cm4ge051bWJlcn0gRGlzdGFuY2Ugb2YgcG9pbnQgQSBhbmQgQi5cbiAgICovXG4gIGZ1bmN0aW9uIGNvRGlzdGFuY2Uocm93LCBjb2x1bW4pIHtcbiAgICBjb25zdCBbc3VtUm93RGlzdCwgc3VtQ29sRGlzdF0gPSBwbGF5ZXIubGFzdEhpdC5yZWR1Y2UoKHJlc3VsdCwgaGl0KSA9PiBbXG4gICAgICByZXN1bHRbMF0gKyBNYXRoLmFicyhyb3cgLSBoaXRbMF0pLFxuICAgICAgcmVzdWx0WzFdICsgTWF0aC5hYnMoY29sdW1uIC0gaGl0WzFdKSxcbiAgICBdLCBbMCwgMF0pO1xuICAgIHJldHVybiBzdW1Sb3dEaXN0ICogc3VtQ29sRGlzdCArIGRpc3RhbmNlKHJvdywgY29sdW1uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIGNvLWRpc3RhbmNlIG9mIGFuIGludGFjdCBwb2ludCB3aXRoIGFsbCByZW1haW5pbmcgbGFzdCBoaXQoc3Vua1xuICAgKiBzaGlwIGNvb3JkaW5hdGVzIHdpbGwgYmUgcmVtb3ZlZCkuXG4gICAqIGNvLWRpc3RhbmNlID0gc3VtIG9mIGhvcml6b250YWwgZGlzdGFuY2UgKiBzdW0gb2YgdmVydGljYWwgZGlzdGFuY2UgKyBkaXN0YW5jZVxuICAgKiBSZXR1cm4gdGhlIGludGFjdCBwb2ludCB3aXRoIHRoZSBzbWFsbGVzdCBkaXN0YW5jZS5cbiAgICogQHBhcmFtIHtCb2FyZH0gb3Bwb25lbnRCb2FyZCBPcHBvZW5lbnQncyBib2FyZCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHRoZSB0YXJnZXQgY29vcmRpbmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsQXR0YWNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICBpZiAob3Bwb25lbnRCb2FyZC5pbnRhY3QoKS5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKHBsYXllci5sYXN0SGl0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgICBsZXQgbWluRGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgIHJldHVybiBvcHBvbmVudEJvYXJkLmludGFjdCgpLnJlZHVjZSgoYXJyLCBzdHIpID0+IHtcbiAgICAgIGNvbnN0IFtyb3dTdHIsIGNvbHVtblN0cl0gPSBzdHIuc3BsaXQoJy0nKTtcbiAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KHJvd1N0ciwgMTApO1xuICAgICAgY29uc3QgY29sdW1uID0gcGFyc2VJbnQoY29sdW1uU3RyLCAxMCk7XG4gICAgICBjb25zdCBkaXN0ID0gKHBsYXllci5sYXN0SGl0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgPyBkaXN0YW5jZShyb3csIGNvbHVtbilcbiAgICAgICAgOiBjb0Rpc3RhbmNlKHJvdywgY29sdW1uKTtcbiAgICAgIGlmIChkaXN0IDwgbWluRGlzdGFuY2UpIHtcbiAgICAgICAgbWluRGlzdGFuY2UgPSBkaXN0O1xuICAgICAgICByZXR1cm4gW3JvdywgY29sdW1uXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBpY2sod2l0aCBhIHNtYXJ0IHN0cmF0ZWd5KSBhIHRhcmdldCBmcm9tIG9wcG9uZW50IGJvYXJkJ3MgaW50YWN0IGxpc3QuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IG9wcG9uZW50Qm9hcmQgT3Bwb2VuZW50J3MgYm9hcmQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB0aGUgdGFyZ2V0IGNvb3JkaW5hdGVcbiAgICovXG4gIGZ1bmN0aW9uIHNtYXJ0QXR0Y2sob3Bwb25lbnRCb2FyZCkge1xuICAgIHJldHVybiByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtCb2FyZH0gYm9hcmQgVGhlIEJvYXJkIG9iamVjdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgTm90aWNlIEdhbWUgbW9kdWxlIHRvIHJ1biBuZXh0IHJvdW5kLlxuICAgKiBAcmV0dXJuXG4gICAqICA9PT4gQUkgcGxheWVyIHJldHVybiB0aGUgY29vcmRpbmF0ZSBvZiB0aGUgdGFyZ2V0IGl0IHdhbnRzIHRvIGF0dGFjay5cbiAgICogID09PiBIdW1hbiBwbGF5ZXIgd2lsbCByZXR1cm4gdW5kZWZpbmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gYXR0YWNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICBpZiAocGxheWVyLnR5cGUgPT09IEFJKSB7XG4gICAgICBzd2l0Y2ggKHBsYXllci5sZXZlbCkge1xuICAgICAgICBjYXNlIEVBU1k6XG4gICAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgY2FzZSBOT1JNQUw6XG4gICAgICAgICAgcmV0dXJuIG5vcm1hbEF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgY2FzZSBIQVJEOlxuICAgICAgICAgIHJldHVybiBzbWFydEF0dGNrKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7IC8vIGh1bWFuIHBsYXllciByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBmdW5jdGlvbiBtZW1vcml6ZUxhc3RIaXQocm93LCBjb2x1bW4pIHtcbiAgICBwbGF5ZXIubGFzdEhpdC5wdXNoKFtyb3csIGNvbHVtbl0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9yZ2V0TGFzdEhpdChzaGlwQ29vcmRpbmF0ZXMpIHtcbiAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBwbGF5ZXIubGFzdEhpdC5maW5kSW5kZXgoKHBvaW50KSA9PiAocG9pbnRbMF0gPT09IGNvb3JkaW5hdGVbMF0pXG4gICAgICAgICYmIChwb2ludFsxXSA9PT0gY29vcmRpbmF0ZVsxXSkpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkgcGxheWVyLmxhc3RIaXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgaXNBSSxcbiAgICBhaUxldmVsLFxuICAgIHNldEFpTGV2ZWwsXG4gICAgYm9hcmQsXG4gICAgYXR0YWNrLFxuICAgIG1lbW9yaXplTGFzdEhpdCxcbiAgICBmb3JnZXRMYXN0SGl0LFxuICB9O1xufTtcbiIsIi8qKlxuICogU2hpcCBpZCBnZW5lcmF0b3IuXG4gKi9cbmZ1bmN0aW9uKiBpbmZpbml0ZSgpIHtcbiAgbGV0IGluZGV4ID0gMTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB5aWVsZCBpbmRleDtcbiAgICBpbmRleCArPSAxO1xuICB9XG59XG5cbmNvbnN0IEdFTiA9IGluZmluaXRlKCk7XG5jb25zdCBIT1JJWk9OVEFMID0gU3ltYm9sKCdob3Jpem9udGFsJyk7XG5jb25zdCBWRVJUSUNBTCA9IFN5bWJvbCgndmVydGljYWwnKTtcblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGluc3RhbnRpYXRlIGEgU2hpcCBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBzaGlwLiBFeDogYmF0dGxlc2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBhbmQgZGVzdHJveWVyLlxuICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgSG93IG1hbnkgZ3JpZHMgb24gdGhlIGJvYXJkIHRoZSBzaGlwIG9jY3VwaWVzLlxuICogQHJldHVybiBBIHNoaXAgbW9kdWxlIG9iamVjdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluTmFtZSwgaW5TaXplKSA9PiB7XG4gIC8qKlxuICAgKiBTaGlwIHBsYWluIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgaWQ6IEdFTi5uZXh0KCkudmFsdWUsXG4gICAgbmFtZTogaW5OYW1lLFxuICAgIHNpemU6IGluU2l6ZSxcbiAgICByb3c6IDAsIC8vIGRlZmF1bHRcbiAgICBjb2x1bW46IDAsIC8vIGRlZmF1bHRcbiAgICBkaXJlY3Rpb246IEhPUklaT05UQUwsIC8vIGRlZmF1bHRcbiAgICBoaXQ6IDAsIC8vIEhvdyBtYW55IHRpbWVzIHRoZSBzaGlwIGlzIGhpdC5cbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgU2hpcCdzIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gaWQoKSB7XG4gICAgcmV0dXJuIHNoaXAuaWQ7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgU2hpcCdzIG5hbWUuXG4gICAqL1xuICBmdW5jdGlvbiBuYW1lKCkge1xuICAgIHJldHVybiBzaGlwLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgU2l6ZSBvZiB0aGUgc2hpcC5cbiAgICovXG4gIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgcmV0dXJuIHNoaXAuc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBQb3NpdGlvbiBvZiB0aGUgc2hpcCBoZWFkLlxuICAgKi9cbiAgZnVuY3Rpb24gaGVhZCgpIHtcbiAgICByZXR1cm4gW3NoaXAucm93LCBzaGlwLmNvbHVtbl07XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBQb3NpdGlvbiBvZiB0aGUgc2hpcCB0YWlsLlxuICAgKi9cbiAgZnVuY3Rpb24gdGFpbCgpIHtcbiAgICBzd2l0Y2ggKHNoaXAuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIEhPUklaT05UQUw6XG4gICAgICAgIHJldHVybiBbc2hpcC5yb3csIHNoaXAuY29sdW1uICsgc2hpcC5zaXplIC0gMV07XG4gICAgICBjYXNlIFZFUlRJQ0FMOlxuICAgICAgICByZXR1cm4gW3NoaXAucm93ICsgc2hpcC5zaXplIC0gMSwgc2hpcC5jb2x1bW5dO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGRpcmVjdGlvbiBvZiB0aGUgc2hpcC5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZGlyZWN0aW9uIGlzIGhvcml6b250YWwsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGlzSG9yaXpvbnRhbCgpIHtcbiAgICByZXR1cm4gc2hpcC5kaXJlY3Rpb24gPT09IEhPUklaT05UQUw7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUmV0dXJuIGhvdyBtYW55IGF0dGFja3MgdGhlIHNoaXAgaGFzIHRha2VuLlxuICAgKi9cbiAgZnVuY3Rpb24gY291bnRIaXRzKCkge1xuICAgIHJldHVybiBzaGlwLmhpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIT1JJWk9OVEFMIC0+IFZFUlRJQ0FMXG4gICAqIFZFUlRJQ0FMIC0+IEhPUklaT05UQUxcbiAgICogU2hpcCBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IGlmIHRoZSBib2FyZCBoYXMgZW5vdWdoIHNwYWNlLlxuICAgKiBCb2FyZCBtb2R1bGUgd2lsbCBjaGVjayB0aGF0IGZvciB1cyBiZWZvcmUgY2FsbCB0aGlzIGZ1bmN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdG9nZ2xlRGlyZWN0aW9uKCkge1xuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gSE9SSVpPTlRBTCkge1xuICAgICAgc2hpcC5kaXJlY3Rpb24gPSBWRVJUSUNBTDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcC5kaXJlY3Rpb24gPSBIT1JJWk9OVEFMO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdXIgc2hpcHMgYXJlIG5vdCBhd2FyZSBvZiB0aGUgc2l6ZSBvZiB0aGUgZ2FtZSBib2FyZC5cbiAgICogQm9hcmQgbW9kdWxlIHdpbGwgY2hlY2sgdGhlIHZhbGlkYXRpb24gZm9yIHVzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgKi9cbiAgZnVuY3Rpb24gcHV0KHJvdywgY29sdW1uKSB7XG4gICAgc2hpcC5yb3cgPSByb3c7XG4gICAgc2hpcC5jb2x1bW4gPSBjb2x1bW47XG4gIH1cblxuICAvKipcbiAgICogSnVzdCBjaGVjayBpZiB0aGVyZSdzIGEgc2hpcCBzaXRzIG9uIGEgY2VydGFpbiBncmlkLlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXNuJ3QgYWN0dWFsbHkgaGl0IHRoZSBzaGlwLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBYIG9mIG9wcG9uZW50J3MgYXR0YWNrLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBZIG9mIG9wcG9uZW50J3MgYXR0YWNrLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGl0J3MgYSBoaXQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGNhbkhpdChyb3csIGNvbHVtbikge1xuICAgIHN3aXRjaCAoc2hpcC5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgSE9SSVpPTlRBTDpcbiAgICAgICAgaWYgKHJvdyAhPT0gc2hpcC5yb3cpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGNvbHVtbiA8IHNoaXAuY29sdW1uIHx8IGNvbHVtbiA+IChzaGlwLmNvbHVtbiArIHNoaXAuc2l6ZSAtIDEpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWRVJUSUNBTDpcbiAgICAgICAgaWYgKGNvbHVtbiAhPT0gc2hpcC5jb2x1bW4pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHJvdyA8IHNoaXAucm93IHx8IHJvdyA+IChzaGlwLnJvdyArIHNoaXAuc2l6ZSAtIDEpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2VydGlvbjogRWFjaCBncmlkIG9mIHRoZSBib2FyZCBjYW4gb25seSBiZSBhdHRlY2tlZCBvbmNlLlxuICAgKiBUaGUgc2hpcCBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IHdoZWF0aGVyIGEgc2luZ2xlIHBhcnQgaXMgaGl0IHR3aWNlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBYIG9mIG9wcG9uZW50J3MgYXR0YWNrLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBZIG9mIG9wcG9uZW50J3MgYXR0YWNrLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBzaGlwIGlzIGhpdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gaGl0KHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2FuSGl0KHJvdywgY29sdW1uKTtcbiAgICBpZiAocmVzdWx0KSBzaGlwLmhpdCArPSAxO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgZXZlcnkgcG9ydCB0aGUgc2hpcCBoYXMgYmVlbiBoaXQuXG4gICAqIEFzIGFsd2F5cywgdGhlIHNoaXAgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCB3aGVhdGhlciBhIHNpbmdsZSBwYXJ0IGlzIGhpdCB0d2ljZS5cbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIChzaGlwLmhpdCA+PSBzaGlwLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gQW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgb2YgdGhhdCBzaGlwLlxuICAgKi9cbiAgZnVuY3Rpb24gY29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkgKz0gMSkge1xuICAgICAgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBIT1JJWk9OVEFMKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtzaGlwLnJvdywgc2hpcC5jb2x1bW4gKyBpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChbc2hpcC5yb3cgKyBpLCBzaGlwLmNvbHVtbl0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5cbiAgICogIGlmIGlzIHN1bmssIHJldHVybiBhbiBhcnJheSBvZiBjb29yZGluYXRlcyBvZiB0aGF0IHNoaXAuXG4gICAqICBvdGhlcndpc2UsIHJldHVybiB1bmRlZmluZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZXBvcnRTdW5rKCkge1xuICAgIGlmICghaXNTdW5rKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBjb29yZGluYXRlcygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBzaXplLFxuICAgIG5hbWUsXG4gICAgaGVhZCxcbiAgICB0YWlsLFxuICAgIGlzSG9yaXpvbnRhbCxcbiAgICBjb3VudEhpdHMsXG4gICAgdG9nZ2xlRGlyZWN0aW9uLFxuICAgIHB1dCxcbiAgICBjYW5IaXQsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBjb29yZGluYXRlcyxcbiAgICByZXBvcnRTdW5rLFxuICB9O1xufTtcbiIsImltcG9ydCBHaXRodWJJbWcgZnJvbSAnLi4vYXNzZXRzL2ltZy9naXRodWIucG5nJztcblxuZXhwb3J0IGNvbnN0IE1BSU4gPSBTeW1ib2woJ21haW4nKTtcbmV4cG9ydCBjb25zdCBPUFBPTkVOVCA9IFN5bWJvbCgnb3Bwb25lbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3QgRUxFTUVOVFMgPSB7XG4gICAgcm9vdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKSxcbiAgICBtYWluUGxheWVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLm1haW4nKSxcbiAgICBvcHBvbmVudFBsYXllcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci5vcHBvbmVudCcpLFxuICAgIHJhbmRvbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbScpLFxuICAgIHN0YXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKSxcbiAgICBuZXdHYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3R2FtZScpLFxuICAgIGhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLFxuICAgIG1haW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyksXG4gICAgZm9vdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyksXG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbmdsZSBncmlkIGluIGJvYXJkIGFjY29yZGluZyB0byBpdCdzIGNvb3JkaW5hdGUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgR3JpZCBheGkgWS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBHcmlkIGF4aSBYLlxuICAgKiBAcmV0dXJucyBHcmlkIGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVHcmlkKHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgIGdyaWQuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgZ3JpZC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcbiAgICByZXR1cm4gZ3JpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBzZWEgbGF5ZXIgb2YgZ2FtZSBib2FyZC5cbiAgICogRWFjaCBncmlkIGlzIGFubm90YXRlZCB3aXRoIHRoZSBwbGF5ZXIncyBpZCB0byB3aG9tXG4gICAqIHRoaXMgYm9hcmQgYmVsb25ncy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgQm9hcmQgc2l6ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIElkIG9mIG93bmVyIG9mIHRoYXQgYm9hcmQuXG4gICAqIEByZXR1cm5zIFNlYSBsYXllciBkaXYgZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdTZWFMYXllcihzaXplLCBwbGF5ZXJJZCkge1xuICAgIGNvbnN0IHNlYUxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhTGF5ZXIuY2xhc3NMaXN0LmFkZCgnc2VhTGF5ZXInKTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3cgKz0gMSkge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgc2l6ZTsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGNyZWF0ZUdyaWQocm93LCBjb2x1bW4pO1xuICAgICAgICBncmlkLmRhdGFzZXQucGxheWVySWQgPSBwbGF5ZXJJZDtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICBpZiAocm93ID09PSAwKSBncmlkLmNsYXNzTGlzdC5hZGQoJ3VwcGVyQm9yZGVyJyk7XG4gICAgICAgIGlmIChjb2x1bW4gPT09IDApIGdyaWQuY2xhc3NMaXN0LmFkZCgnbGVmdEJvcmRlcicpO1xuICAgICAgICBzZWFMYXllci5hcHBlbmRDaGlsZChncmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlYUxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHNoaXAgbGF5ZXIgb2YgZ2FtZSBib2FyZC5cbiAgICogU2hpcCBwb3NpdGlvbiBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIEJvYXJkIHNpemUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNoZWNrU2hpcENhbGxiYWNrIEJvYXJkLmNhbkhpdFNoaXAoKSBmdW5jdGlvbi5cbiAgICogQHJldHVybnMgU2hpcCBsYXllciBkaXYgZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdTaGlwTGF5ZXIoc2l6ZSwgY2hlY2tTaGlwQ2FsbGJhY2spIHtcbiAgICBjb25zdCBzaGlwTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwTGF5ZXIuY2xhc3NMaXN0LmFkZCgnc2hpcExheWVyJyk7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHNpemU7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVHcmlkKHJvdywgY29sdW1uKTtcbiAgICAgICAgaWYgKHJvdyA9PT0gMCkgZ3JpZC5jbGFzc0xpc3QuYWRkKCd1cHBlckJvcmRlcicpO1xuICAgICAgICBpZiAoY29sdW1uID09PSAwKSBncmlkLmNsYXNzTGlzdC5hZGQoJ2xlZnRCb3JkZXInKTtcbiAgICAgICAgaWYgKGNoZWNrU2hpcENhbGxiYWNrKHJvdywgY29sdW1uKSkgZ3JpZC5jbGFzc0xpc3QuYWRkKCdoYXNTaGlwJyk7XG4gICAgICAgIHNoaXBMYXllci5hcHBlbmRDaGlsZChncmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBMYXllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIE1BSU4gb3IgT1BQT05FTlQgYm9hcmQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtTeW1ib2x9IG1haW5Pck9wcG9uZW50IE1BSU4gb3IgT1BQT05FTlRcbiAgICogQHJldHVybiB7RWxlbWVudH0gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudCB0aGUgZGVzaXJlZCBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldE1haW5Pck9wcG9uZW50Qm9hcmQobWFpbk9yT3Bwb25lbnQpIHtcbiAgICByZXR1cm4gKG1haW5Pck9wcG9uZW50ID09PSBNQUlOKVxuICAgICAgPyBFTEVNRU5UUy5tYWluUGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpXG4gICAgICA6IEVMRU1FTlRTLm9wcG9uZW50UGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCB0aGUgYm9hcmQgZWxlbWVudCBieSBwbGF5ZXIgaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBJZCBvZiBkZXNpcmVkIHBsYXllci5cbiAgICogQHJldHVybiB7RWxlbWVudH0gRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBkZXNpcmVkIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UGxheWVyRWxlbWVudEJ5SWQocGxheWVySWQpIHtcbiAgICBpZiAocGFyc2VJbnQoRUxFTUVOVFMubWFpblBsYXllci5kYXRhc2V0LnBsYXllcklkLCAxMClcbiAgICAgID09PSBwbGF5ZXJJZCkgcmV0dXJuIEVMRU1FTlRTLm1haW5QbGF5ZXI7XG4gICAgcmV0dXJuIEVMRU1FTlRTLm9wcG9uZW50UGxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSBwbGF5ZXIncyBib2FyZCBpbiBNQUlOIGJvYXJkIHNlY3Rpb24gb3IgT1BQT05FTlQgYm9hcmQgc2VjdGlvbi5cbiAgICogRXg6IEluIHBsYXllciAxJ3MgcGFnZSxcbiAgICogID0+IGhpcyBvd24gYm9hcmQgaXMgc2hvd24gaW4gTUFJTiBzZWN0aW9uLlxuICAgKiAgPT4gcGxheWVyIDIncyBib2FyZCBpcyBzaG93biBpbiBPUFBPTkVOVCBzZWN0aW9uLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBTaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIERlbm90ZSB3aGljaCBib2FyZCB0byBkcmF3LlxuICAgKiBAcGFyYW0ge1N5bWJvbH0gbWFpbk9yT3Bwb25lbnQgTUFJTiBvciBPUFBPTkVOVFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGVja1NoaXBDYWxsYmFjayBCb2FyZC5jYW5IaXRTaGlwKCkgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBkcmF3Qm9hcmQoXG4gICAgc2l6ZSxcbiAgICBwbGF5ZXJJZCxcbiAgICBtYWluT3JPcHBvbmVudCxcbiAgICBjaGVja1NoaXBDYWxsYmFjayxcbiAgKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TWFpbk9yT3Bwb25lbnRCb2FyZChtYWluT3JPcHBvbmVudCk7XG4gICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgIGNvbnN0IHNlYUxheWVyID0gZHJhd1NlYUxheWVyKHNpemUsIHBsYXllcklkKTtcbiAgICBjb25zdCBzaGlwTGF5ZXIgPSBkcmF3U2hpcExheWVyKHNpemUsIGNoZWNrU2hpcENhbGxiYWNrKTtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc2VhTGF5ZXIpO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzaGlwTGF5ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBtYWluIGJvYXJkIG9yIHRoZSBvcHBvbmVudCdzIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJCb2FyZChtYWluT3JPcHBvbmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldE1haW5Pck9wcG9uZW50Qm9hcmQobWFpbk9yT3Bwb25lbnQpO1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQWxsQm9hcmRzKCkge1xuICAgIGNsZWFyQm9hcmQoTUFJTik7XG4gICAgY2xlYXJCb2FyZChPUFBPTkVOVCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGEgc3BlY2lmaWMgZ3JpZCBjb2xvciBhY2NvcmRpbmcgdG8gdGhlIGF0dGFjayByZXN1bHQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgVGFyZ2V0IGdyaWQgQXhpIFkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gVGFyZ2V0IGdyaWQgQXhpIFguXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBQbGF5ZXIgaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhdHRhY2tSZXN1bHRcbiAgICogIDEuIGlmIGF0dGFjayBoaXQgYSBzaGlwLCBpdCdzIHRoZSBzaGlwJ3MgaWQuXG4gICAqICAyLiBpZiBhdHRhY2sgbWlzc2VkLCBpdCdzIC0xLlxuICAgKiAgMy4gaWYgdGhlIHRhcmdldCBzcG90IGFscmVheSBiZWVuIGF0dGFja2VkIGJlZm9yZSwgaXQncyB1bmRlZmluZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXJTZWFBZnRlckF0dGFjayhyb3csIGNvbHVtbiwgcGxheWVySWQsIGF0dGFja1Jlc3VsdCkge1xuICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBnZXRQbGF5ZXJFbGVtZW50QnlJZChwbGF5ZXJJZCk7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBwbGF5ZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCA+IC5zZWFMYXllcicpO1xuICAgIGNvbnN0IGdyaWQgPSBzZWFMYXllci5xdWVyeVNlbGVjdG9yKGAuZ3JpZFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1ufVwiXWApO1xuICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBubyBtb3JlIGdyaWQgdG8gYXR0YWNrXG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gLTEpIHsgLy8gbWlzc2VkXG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2FscmVhZHlNaXNzZWQnKTtcbiAgICB9IGVsc2UgeyAvLyBpdCdzIGEgaGl0XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2FscmVhZHlIaXQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgb2YgdGhlIHNoaXAgYm9keSwgbWFyayB0aGF0IHNoaXAgb24gdGhlIFNlYSBMYXllci5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFBsYXllciBpZC5cbiAgICogQHBhcmFtIHtBcnJheX0gc3Vua0Nvb3JkaW5hdGVzIENvb3JkaW5hdGVzIG9mIHRoZSBzdW5rIHNoaXAgKHN1bmsgYnkgdGhpcyBhdHRhY2spLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyU3Vua1NoaXBzKHBsYXllcklkLCBzdW5rQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gZ2V0UGxheWVyRWxlbWVudEJ5SWQocGxheWVySWQpO1xuICAgIGNvbnN0IHNlYUxheWVyID0gcGxheWVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQgPiAuc2VhTGF5ZXInKTtcbiAgICBzdW5rQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgZ3JpZCA9IHNlYUxheWVyLnF1ZXJ5U2VsZWN0b3IoYC5ncmlkW2RhdGEtcm93PVwiJHtjb29yZGluYXRlWzBdfVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29vcmRpbmF0ZVsxXX1cIl1gKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgbGlzdGVuZXIgdG8gYSBwbGF5ZXIncyBib2FyZCwgc28gdGhhdFxuICAgKiB3aGVuIG9wcG9uZW50IGNsaWNrIG9uIGJvYXJkIHdpbGwgY2FsbGJhY2sgY29udHJvbGxlcidzIHBsYXllckF0dGFjaygpIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBsYXllckVsZW1lbnQgbWFpblBsYXllciBvciBvcHBvbmVudFBsYXllclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDb250cm9sbGVyLnBsYXllckF0dGFjaygpIGZ1bmN0aW9uLFxuICAgKiBUaGUgYWN0dWFsIGF0dGFjayBsb2dpYyByZXNpZGVzIGluIGNvbnRyb2xsZXIuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmVjZWl2ZUF0dGFja1RvUGxheWVyc0JvYXJkKHBsYXllckVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBwbGF5ZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCA+IC5zZWFMYXllcicpO1xuICAgIGNvbnN0IGdyaWRzID0gc2VhTGF5ZXIucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKTtcbiAgICBncmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XG4gICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soXG4gICAgICAgIHBhcnNlSW50KGdyaWQuZGF0YXNldC5yb3csIDEwKSxcbiAgICAgICAgcGFyc2VJbnQoZ3JpZC5kYXRhc2V0LmNvbHVtbiwgMTApLFxuICAgICAgICBwYXJzZUludChwbGF5ZXJFbGVtZW50LmRhdGFzZXQucGxheWVySWQsIDEwKSxcbiAgICAgICkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgcmVjZWl2ZSBhdHRhY2sgZmVhdHVyZSB0byBib3RoIE1BSU4gYW5kIE9QUE9ORU5UIGJvYXJkIG9uIHRoZSBwYWdlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDb250cm9sbGVyLnBsYXllckF0dGFjaygpIGZ1bmN0aW9uLFxuICAgKiBUaGUgYWN0dWFsIGF0dGFjayBsb2dpYyByZXNpZGVzIGluIGNvbnRyb2xsZXIuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmVjZWl2ZUF0dGFjayhjYWxsYmFjaykge1xuICAgIGJpbmRSZWNlaXZlQXR0YWNrVG9QbGF5ZXJzQm9hcmQoRUxFTUVOVFMubWFpblBsYXllciwgY2FsbGJhY2spO1xuICAgIGJpbmRSZWNlaXZlQXR0YWNrVG9QbGF5ZXJzQm9hcmQoRUxFTUVOVFMub3Bwb25lbnRQbGF5ZXIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHJhbmRvbSBmbGVldCBmZWF0dXJlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDb250cm9sbGVyIHdpbGwgcHJvdmlkZSB0aGUgbG9naWMgb2ZcbiAgICogYWN0dWFsbHkgZ2VuZXJhdGluZyBhIG5ldyBmbGVldCBhbmQgcmUtZHJhdyB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHBsYXlBdWRpbyBQbGF5IGJ1dHRvbiBjbGljayBhdWRpby5cbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRSYW5kb21GbGVldChjYWxsYmFjaywgcGxheUF1ZGlvKSB7XG4gICAgY29uc3QgcGxheWVySWQgPSBwYXJzZUludChFTEVNRU5UUy5tYWluUGxheWVyLmRhdGFzZXQucGxheWVySWQsIDEwKTtcbiAgICBFTEVNRU5UUy5yYW5kb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwbGF5QXVkaW8oKTtcbiAgICAgIGNhbGxiYWNrKE1BSU4sIHBsYXllcklkKTtcbiAgICB9KTsgLy8gbWFpbiBwbGF5ZXIgcmFuZG9tIGhpcyBmbGVldC5cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2NrIHRoZSBib2FyZCBvZiB0YXJnZXQgcGxheWVyLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgVGFyZ2V0IHBsYXllcidzIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gbG9ja0JvYXJkKHBsYXllcklkKSB7XG4gICAgZ2V0UGxheWVyRWxlbWVudEJ5SWQocGxheWVySWQpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmxvY2sgdGhlIGJvYXJkIG9mIHRhcmdldCBwbGF5ZXIuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBUYXJnZXQgcGxheWVyJ3MgaWQuXG4gICAqL1xuICBmdW5jdGlvbiB1bmxvY2tCb2FyZChwbGF5ZXJJZCkge1xuICAgIGdldFBsYXllckVsZW1lbnRCeUlkKHBsYXllcklkKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICAqIExvY2sgb3Bwb25lbnQncyBib2FyZCwgcHJldmVudCBwbGF5ZXIgZnJvbSBpbnRlcmFjdCB3aXRoIHRoZSBib2FyZFxuICAgICogYmVmb3JlIHN0YXJ0aW5nIHRoZSBnYW1lLlxuICAgICovXG4gIGZ1bmN0aW9uIGxvY2tPcHBvbmVudEJvYXJkKCkge1xuICAgIEVMRU1FTlRTLm9wcG9uZW50UGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgICogT25jZSB0aGUgZ2FtZSBpcyBwcmVwYXJlZCwgdW5sb2NrIG9wcG9uZW50J3MgYm9hcmRzLCBzbyB0aGF0IHBsYXllciBnYWluXG4gICAgKiB0aGUgYWNjZXNzIHRvIHRoZSBib2FyZC5cbiAgICAqL1xuICBmdW5jdGlvbiB1bmxvY2tPcHBvbmVudEJvYXJkKCkge1xuICAgIEVMRU1FTlRTLm9wcG9uZW50UGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBDb250cm9sbGVyIHdoZW4gcGxheWVyIGNsaWNrIFN0YXJ0IGJ1dHRvbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQWN0dWFsIGxvZ2ljIG9mIHN0YXJ0aW5nIGEgZ2FtZSBpbiBDb250cm9sbG9yIG1vZHVsZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGxheUF1ZGlvIFBsYXllciBnYW1lIHN0YXJ0IGF1ZGlvLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZFN0YXJ0R2FtZUJ1dHRvbihjYWxsYmFjaywgcGxheUF1ZGlvKSB7XG4gICAgRUxFTUVOVFMuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwbGF5QXVkaW8oKTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJldmVudCBwbGF5ZXIgZnJvbSBjbGljayB0aGUgcmFuZG9tIGZsZWV0IGJ1dHRvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGxvY2tSYW5kb21GbGVldEJ1dHRvbigpIHtcbiAgICBFTEVNRU5UUy5yYW5kb20uY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93IHBsYXllciB0byB1c2UgcmFuZG9tIGZsZWV0IGJ1dHRvbi5cbiAgICovXG4gIGZ1bmN0aW9uIHVubG9ja1JhbmRvbUZsZWV0QnV0dG9uKCkge1xuICAgIEVMRU1FTlRTLnJhbmRvbS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogUHJldmVudCBwbGF5ZXIgZnJvbSBjbGljayB0aGUgcmFuZG9tIGZsZWV0IGJ1dHRvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGxvY2tTdGFydEdhbWVCdXR0b24oKSB7XG4gICAgRUxFTUVOVFMuc3RhcnQuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93IHBsYXllciB0byBjbGljayB0aGUgcmFuZG9tIGZsZWV0IGJ1dHRvbi5cbiAgICovXG4gIGZ1bmN0aW9uIHVubG9ja1N0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICBFTEVNRU5UUy5zdGFydC5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgQ29udHJvbGxlciB3aGVuIHBsYXllciBjbGljayBSZXN0YXJ0IGJ1dHRvbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQWN0dWFsIGxvZ2ljIG9mIHJlc3RhcnRpbmcgYSBnYW1lIGluIENvbnRyb2xsb3IgbW9kdWxlLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZFJlc3RhcnRHYW1lQnV0dG9uKGNhbGxiYWNrKSB7XG4gICAgRUxFTUVOVFMubmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbGxiYWNrKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKGdpdGh1YkltZywgeWVhcikge1xuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29weXJpZ2h0XCI+XG4gICAgICAgIENvcHlyaWdodCBNSVQgwqkgaGlyZW1lLnNoZW5AZ21haWwuY29tICZuYnNwO3wmbmJzcDsgU291cmNlIGNvZGUgLSBcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oZWxsb1NoZW4vYmF0dGxlc2hpcFwiPjxpbWcgY2xhc3M9XCJnaXRodWJcIiBzcmM9XCIke2dpdGh1YkltZ31cIj48L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ5ZWFyXCI+MjAyMS0ke3llYXJ9PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBFTEVNRU5UUy5mb290ZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgcmVuZGVyRm9vdGVyKEdpdGh1YkltZywgeWVhciksXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZHJhd0JvYXJkLFxuICAgIGNsZWFyQm9hcmQsXG4gICAgY2xlYXJBbGxCb2FyZHMsXG4gICAgcmVuZGVyU2VhQWZ0ZXJBdHRhY2ssXG4gICAgcmVuZGVyU3Vua1NoaXBzLFxuICAgIGJpbmRSZWNlaXZlQXR0YWNrLFxuICAgIGJpbmRSYW5kb21GbGVldCxcbiAgICBsb2NrQm9hcmQsXG4gICAgdW5sb2NrQm9hcmQsXG4gICAgbG9ja09wcG9uZW50Qm9hcmQsXG4gICAgdW5sb2NrT3Bwb25lbnRCb2FyZCxcbiAgICBiaW5kU3RhcnRHYW1lQnV0dG9uLFxuICAgIGxvY2tSYW5kb21GbGVldEJ1dHRvbixcbiAgICB1bmxvY2tSYW5kb21GbGVldEJ1dHRvbixcbiAgICBiaW5kUmVzdGFydEdhbWVCdXR0b24sXG4gICAgbG9ja1N0YXJ0R2FtZUJ1dHRvbixcbiAgICB1bmxvY2tTdGFydEdhbWVCdXR0b24sXG4gICAgc2hvd0Zvb3RlcixcbiAgfTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IENvbnRyb2xsZXIsIHtcbiAgQUksXG4gIEhVTUFOLFxuICBFQVNZLFxuICBOT1JNQUwsXG4gIEhBUkQsXG4gIE1BSU4sXG4gIE9QUE9ORU5ULFxufSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvaW5kZXguY3NzJztcblxuQ29udHJvbGxlci5uZXdHYW1lKCk7XG5Db250cm9sbGVyLmVuYWJsZVJhbmRvbUZsZWV0KCk7XG5Db250cm9sbGVyLmVuYWJsZVN0YXJ0R2FtZSgpO1xuQ29udHJvbGxlci5lbmFibGVSZXN0YXJ0R2FtZSgpO1xuQ29udHJvbGxlci5zaG93Rm9vdGVyKCk7XG4iXSwibmFtZXMiOlsiR2FtZSIsIkFJIiwiSFVNQU4iLCJFQVNZIiwiTk9STUFMIiwiSEFSRCIsIlZpZXciLCJNQUlOIiwiT1BQT05FTlQiLCJpbml0UGxheWVyc0FuZEJvYXJkcyIsInBsYXllcjFUeXBlIiwicGxheWVyMlR5cGUiLCJkcmF3QVNpbmdsZUJvYXJkIiwicGxheWVyIiwibWFpbk9yT3Bwb25lbnQiLCJkcmF3Qm9hcmQiLCJERUZBVUxUX0JPQVJEX1NJWkUiLCJpZCIsImJvYXJkIiwiY2FuSGl0U2hpcCIsImRyYXdCb2FyZHNGb3JQbGF5ZXIiLCJwbGF5ZXJJZCIsIm9wcG9uZW50SWQiLCJwbGF5ZXJzIiwibGVuZ3RoIiwiY2xlYXJBbGxCb2FyZHMiLCJsb2NrT3Bwb25lbnRCb2FyZCIsInVubG9ja09wcG9uZW50Qm9hcmQiLCJnYW1lb3ZlciIsIndpbm5lcklkIiwiYWxlcnQiLCJwbGF5ZXJBdHRhY2tPbmVTcG90Iiwicm93IiwiY29sdW1uIiwiYWxyZWFkeUJlZW5BdHRhY2tlZCIsInVuZGVmaW5lZCIsInNoaXBJZCIsInJlY2VpdmVBdHRhY2siLCJyZW5kZXJTZWFBZnRlckF0dGFjayIsInBsYXlNaXNzQXVkaW8iLCJjdXJyZW50UGxheWVyIiwibWVtb3JpemVMYXN0SGl0IiwiZ2V0U2hpcCIsImlzU3VuayIsInBsYXlTdW5rQXVkaW8iLCJzaGlwQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlcyIsInJlbmRlclN1bmtTaGlwcyIsImZvcmdldExhc3RIaXQiLCJzaGlwU3Vycm91bmRpbmdBcmVhIiwicGxheUhpdEF1ZGlvIiwicGxheWVyQXR0YWNrIiwicmVzdWx0IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImNvb3JkaW5hdGUiLCJhbGxTdW5rIiwibG9ja0JvYXJkIiwidW5sb2NrQm9hcmQiLCJuZXh0VHVybiIsImVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjayIsImJpbmRSZWNlaXZlQXR0YWNrIiwicmFuZG9tQWdhaW4iLCJjbGVhckZsZWV0IiwiYXV0b2ZpbGxGbGVldCIsImNsZWFyQm9hcmQiLCJlbmFibGVSYW5kb21GbGVldCIsImJpbmRSYW5kb21GbGVldCIsInBsYXlDbGlja0F1ZGlvIiwibmV3R2FtZSIsInN0YXJ0R2FtZSIsInN0YXJ0IiwibG9ja1JhbmRvbUZsZWV0QnV0dG9uIiwibG9ja1N0YXJ0R2FtZUJ1dHRvbiIsImVuYWJsZVN0YXJ0R2FtZSIsImJpbmRTdGFydEdhbWVCdXR0b24iLCJwbGF5R2FtZVN0YXJ0QXVkaW8iLCJyZXN0YXJ0R2FtZSIsInVubG9ja1JhbmRvbUZsZWV0QnV0dG9uIiwidW5sb2NrU3RhcnRHYW1lQnV0dG9uIiwiZW5hYmxlUmVzdGFydEdhbWUiLCJiaW5kUmVzdGFydEdhbWVCdXR0b24iLCJzaG93Rm9vdGVyIiwiVU5JVF9URVNUIiwiaW5TaXplIiwic2l6ZSIsImZsZWV0IiwiaGl0cyIsIm1pc3NlcyIsImludGFjdCIsImZpbmQiLCJzaGlwIiwiZmxlZXRTaXplIiwicmVkdWNlIiwiYXJyIiwiZmxlZXRTaGlwIiwicHVzaCIsImxlZ2FsIiwibnVtIiwiaGVhZCIsInVsUm93IiwidWxDb2wiLCJ0YWlsIiwiYnJSb3ciLCJickNvbCIsImJsUm93IiwiYmxDb2wiLCJ1clJvdyIsInVyQ29sIiwiaXNIb3Jpem9udGFsIiwiaSIsImZpbGxJbnRhY3QiLCJyZW1vdmVGcm9tSW50YWN0IiwicG9zaXRpb25TdHIiLCJpbmRleCIsImZpbmRJbmRleCIsInBvc2l0aW9uIiwic3BsaWNlIiwiaXNPdmVybGFwIiwiZml4ZWRTaGlwIiwibmV3SGVhZCIsIm5ld1RhaWwiLCJoZWFkUm93IiwiaGVhZENvbHVtbiIsInRhaWxSb3ciLCJ0YWlsQ29sdW1uIiwib3ZlcmxhcFJvd1N0YXJ0IiwiTWF0aCIsIm1heCIsIm92ZXJsYXBDb2x1bW5TdGFydCIsIm92ZXJsYXBSb3dFbmQiLCJtaW4iLCJvdmVybGFwQ29sdW1uRW5kIiwiYXZhaWxhYmxlIiwic29tZSIsInB1dFNoaXAiLCJwdXQiLCJyZW1vdmVTaGlwIiwidG9nZ2xlRmxlZXRTaGlwIiwidG9nZ2xlRGlyZWN0aW9uIiwicG9zaXRpb25FcXVhbCIsInBvc2l0aW9uQSIsInBvc2l0aW9uQiIsImFscmVhZHlIaXQiLCJoaXQiLCJhbHJlYWR5TWlzc2VkIiwibWlzcyIsInRyeUhpdFNoaXAiLCJjYW5IaXQiLCJ0YXJnZXQiLCJldmVyeSIsImFwaSIsIlNoaXAiLCJCb2FyZCIsIlBsYXllciIsIkhpdCIsIk1pc3MiLCJTdW5rIiwiQ2xpY2siLCJHYW1lU3RhcnQiLCJTVEFOREFSRF9GTEVFVCIsIkhpdEF1ZGlvIiwiQXVkaW8iLCJNaXNzQXVkaW8iLCJTdW5rQXVkaW8iLCJDbGlja0F1ZGlvIiwiR2FtZVN0YXJ0QXVkaW8iLCJnYW1lIiwiY3VycmVudFRpbWUiLCJwbGF5IiwicmFuZG9tIiwiZmxvb3IiLCJyYW5kb21Qb3NpdGlvbiIsInRlbXBsYXRlIiwidGhlUGxheWVyIiwicGxheWVyVHlwZXMiLCJuZXdQbGF5ZXIiLCJhZ2FpbnN0QUkiLCJsZXZlbCIsImFnYWluc3RIdW1hbiIsIm5leHRJbmRleCIsInBhc3NUb05leHRQbGF5ZXIiLCJjb250cm9sbGVyQXR0YWNrQ2FsbGJhY2siLCJjdXJyUGxheWVyIiwiaXNBSSIsIm9wcG9uZW50IiwiYXR0YWNrIiwiU3ltYm9sIiwiaW5JZCIsImluQm9hcmQiLCJpblR5cGUiLCJpbkxldmVsIiwidHlwZSIsImxhc3RIaXQiLCJhaUxldmVsIiwic2V0QWlMZXZlbCIsInJhbmRvbUF0dGFjayIsIm9wcG9uZW50Qm9hcmQiLCJzdHIiLCJzcGxpdCIsInJvd1N0ciIsImNvbHVtblN0ciIsInBhcnNlSW50IiwiZGlzdGFuY2UiLCJkaXN0IiwiYWJzIiwiY29EaXN0YW5jZSIsInN1bVJvd0Rpc3QiLCJzdW1Db2xEaXN0Iiwibm9ybWFsQXR0YWNrIiwibWluRGlzdGFuY2UiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJzbWFydEF0dGNrIiwicG9pbnQiLCJpbmZpbml0ZSIsIkdFTiIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsImluTmFtZSIsIm5leHQiLCJ2YWx1ZSIsIm5hbWUiLCJkaXJlY3Rpb24iLCJjb3VudEhpdHMiLCJyZXBvcnRTdW5rIiwiR2l0aHViSW1nIiwiRUxFTUVOVFMiLCJyb290IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFpblBsYXllciIsIm9wcG9uZW50UGxheWVyIiwiaGVhZGVyIiwibWFpbiIsImZvb3RlciIsImNyZWF0ZUdyaWQiLCJncmlkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJkcmF3U2VhTGF5ZXIiLCJzZWFMYXllciIsImFwcGVuZENoaWxkIiwiZHJhd1NoaXBMYXllciIsImNoZWNrU2hpcENhbGxiYWNrIiwic2hpcExheWVyIiwiZ2V0TWFpbk9yT3Bwb25lbnRCb2FyZCIsImdldFBsYXllckVsZW1lbnRCeUlkIiwicGFyZW50RWxlbWVudCIsImlubmVySFRNTCIsImF0dGFja1Jlc3VsdCIsInBsYXllckVsZW1lbnQiLCJzdW5rQ29vcmRpbmF0ZXMiLCJiaW5kUmVjZWl2ZUF0dGFja1RvUGxheWVyc0JvYXJkIiwiY2FsbGJhY2siLCJncmlkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheUF1ZGlvIiwicmVtb3ZlIiwicmVuZGVyRm9vdGVyIiwiZ2l0aHViSW1nIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImluc2VydEFkamFjZW50SFRNTCIsIkNvbnRyb2xsZXIiLCJjc3MiXSwic291cmNlUm9vdCI6IiJ9