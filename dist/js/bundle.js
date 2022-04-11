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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n  --board-length: calc(var(--board-size) * var(--grid-size));\n\n  /* color */\n  --white: white;\n  --black: black;\n  --black-translucent: #00000044;\n  --gray: gray;\n  --ocean-white: #EFDBCB;\n  --ocean-blue-300: #4BB4DE;\n  --ocean-blue-500: #3B8AC4;\n  --ocean-blue-700: #345DA7;\n  --ocean-blue-900: #2b3c5b;\n  --board-border: var(--ocean-white);\n  --wood: #954A00;\n  --translucent-fire: #F1962EAA;\n  --fire: #F1962E;\n  --missed: var(--gray);\n  --sunk: var(--ocean-blue-900);\n}\n\nbody {\n  min-height: 100vh;\n  padding-top: 2rem;\n  padding-left: 5rem;\n  padding-right: 5rem;\n  background-color: var(--ocean-blue-900);\n  font-family: 'Poppins', sans-serif;\n  display: grid;\n  grid-template-rows: 6rem 1fr 4.5rem;\n  gap: 1rem;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.header > .logo {\n  font-family: 'Roboto Slab', serif;\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--white);\n}\n\n.header > .sub {\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.5rem;\n  font-weight: 100;\n  color: var(--ocean-white);\n}\n\n.mainSection {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 26rem 1fr;\n  gap: 2rem;\n}\n\n.lock {\n  pointer-events: none;\n}\n\n.player {\n  width: 24rem;\n  display: grid;\n  grid-template-rows: 24rem 2rem;\n  align-items: center;\n  justify-items: center;\n}\n\n.player.main {\n  justify-self: end;\n}\n\n.player.opponent {\n  justify-self: start;\n}\n\n.tag {\n  color: var(--white);\n  font-weight: 700;\n  user-select: none;\n}\n\n.btn {\n  padding: .5rem 1rem;\n  border-radius: .25rem;\n  background-color: var(--ocean-blue-300);\n  color: var(--white);\n  user-select: none;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.btn:hover {\n  background-color: var(--ocean-blue-500);\n}\n\n.lock.btn {\n  opacity: .5;\n}\n\n.player .btn {\n  font-size: .75rem;\n}\n\n.board {\n  margin: 1rem;\n  height: calc(var(--board-length) + .5rem);\n  width: calc(var(--board-length) + .5rem);\n  border-radius: .25rem;\n  background-color: var(--ocean-white);\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n  align-content: center;\n  justify-content: center;\n}\n\n.board.lock {\n  height: var(--board-length);\n  width: var(--board-length);\n}\n\n.board > .seaLayer,\n.board > .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.board > .seaLayer {\n  user-select: none;\n  z-index: 2;\n}\n\n.board > .shipLayer {\n  z-index: 1;\n}\n\n.player.main .seaLayer {\n  user-select: none;\n  pointer-events: none;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board > .shipLayer > .grid {\n  border-radius: .2rem;\n  background-color: var(--ocean-blue-300);\n}\n\n.board > .shipLayer > .grid.hasShip {\n  background-color: var(--ocean-blue-700);\n}\n\n.player.opponent > .board > .shipLayer > .grid.hasShip {\n  background-color: var(--ocean-blue-300);\n}\n\n.board > .seaLayer > .grid {\n  border-radius: .2rem;\n  position: relative;\n}\n\n.board > .seaLayer > .grid:not(.alreadyHit):not(.alreadyMissed):hover {\n  background-color: var(--ocean-blue-500);\n}\n\n.board > .seaLayer > .grid.alreadyHit {\n  background-color: var(--ocean-blue-500);\n}\n\n.board > .seaLayer > .grid.alreadyHit::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'whatshot';\n  color: var(--fire);\n}\n\n.board > .seaLayer > .grid.alreadyMissed::after {\n  position: absolute;\n  content: 'waves';\n  color: var(--ocean-white);\n  font-size: 2rem;\n  font-weight: 400;\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'local_fire_department';\n  color: var(--fire);\n}\n\n.ctrl {\n  grid-row: 2 / 3;\n  grid-column: 1 / 3;\n  display: grid;\n  grid-template-columns: 10rem 10rem;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.ctrl > .btn {\n  width: 10rem;\n  justify-self: center;\n  align-self: center;\n}\n\n.footer {\n\theight: 4.5rem;\n\twidth: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 0.75rem;\n\tcolor: var(--ocean-white);\n\tdisplay: grid;\n\tgrid-template-rows: repeat(2, 1.5rem);\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n\theight: 1.5rem;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tgap: 0.25rem;\n}\n\n.footer a {\n\twidth: 1rem;\n\theight: 1rem;\n  color: var(--ocean-white);\n}\n\n.footer .github {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.announceWinner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--black-translucent);\n  z-index: 5;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.announceWinner > .inner {\n  padding: 1rem 2rem;\n  background-color: var(--white);\n  border-radius: .5rem;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: 16rem;\n  grid-template-rows: 6rem 4rem;\n  animation: winnerAnimation .5s ease-in forwards;\n}\n\n@keyframes winnerAnimation {\n  from {\n      transform: scale(0);\n  }\n  to {\n      transform: scale(1.25);\n  }\n}\n\n.announceWinner .icon {\n  height: 6rem;\n  width: 6rem;\n}\n\n.announceWinner .icon > img {\n  width: 100%;\n  height: 100%;\n}\n\n.announceWinner .btns {\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  justify-items: center;\n}\n\n.announceWinner .btn {\n  font-size: .75rem;\n  font-weight: 700;\n  background-color: var(--ocean-blue-900);\n}\n\n.announceWinner .btn:hover {\n  background-color: var(--ocean-blue-300);\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import './norm.css';\n@import 'https://fonts.googleapis.com/icon?family=Material+Icons';\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&family=Roboto+Slab:wght@100;400;700;900&family=Roboto:wght@100;400;500;700&display=swap');\n:root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n  --board-length: calc(var(--board-size) * var(--grid-size));\n\n  /* color */\n  --white: white;\n  --black: black;\n  --black-translucent: #00000044;\n  --gray: gray;\n  --ocean-white: #EFDBCB;\n  --ocean-blue-300: #4BB4DE;\n  --ocean-blue-500: #3B8AC4;\n  --ocean-blue-700: #345DA7;\n  --ocean-blue-900: #2b3c5b;\n  --board-border: var(--ocean-white);\n  --wood: #954A00;\n  --translucent-fire: #F1962EAA;\n  --fire: #F1962E;\n  --missed: var(--gray);\n  --sunk: var(--ocean-blue-900);\n}\n\nbody {\n  min-height: 100vh;\n  padding-top: 2rem;\n  padding-left: 5rem;\n  padding-right: 5rem;\n  background-color: var(--ocean-blue-900);\n  font-family: 'Poppins', sans-serif;\n  display: grid;\n  grid-template-rows: 6rem 1fr 4.5rem;\n  gap: 1rem;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.header > .logo {\n  font-family: 'Roboto Slab', serif;\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--white);\n}\n\n.header > .sub {\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.5rem;\n  font-weight: 100;\n  color: var(--ocean-white);\n}\n\n.mainSection {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 26rem 1fr;\n  gap: 2rem;\n}\n\n.lock {\n  pointer-events: none;\n}\n\n.player {\n  width: 24rem;\n  display: grid;\n  grid-template-rows: 24rem 2rem;\n  align-items: center;\n  justify-items: center;\n}\n\n.player.main {\n  justify-self: end;\n}\n\n.player.opponent {\n  justify-self: start;\n}\n\n.tag {\n  color: var(--white);\n  font-weight: 700;\n  user-select: none;\n}\n\n.btn {\n  padding: .5rem 1rem;\n  border-radius: .25rem;\n  background-color: var(--ocean-blue-300);\n  color: var(--white);\n  user-select: none;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.btn:hover {\n  background-color: var(--ocean-blue-500);\n}\n\n.lock.btn {\n  opacity: .5;\n}\n\n.player .btn {\n  font-size: .75rem;\n}\n\n.board {\n  margin: 1rem;\n  height: calc(var(--board-length) + .5rem);\n  width: calc(var(--board-length) + .5rem);\n  border-radius: .25rem;\n  background-color: var(--ocean-white);\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n  align-content: center;\n  justify-content: center;\n}\n\n.board.lock {\n  height: var(--board-length);\n  width: var(--board-length);\n}\n\n.board > .seaLayer,\n.board > .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.board > .seaLayer {\n  user-select: none;\n  z-index: 2;\n}\n\n.board > .shipLayer {\n  z-index: 1;\n}\n\n.player.main .seaLayer {\n  user-select: none;\n  pointer-events: none;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board > .shipLayer > .grid {\n  border-radius: .2rem;\n  background-color: var(--ocean-blue-300);\n}\n\n.board > .shipLayer > .grid.hasShip {\n  background-color: var(--ocean-blue-700);\n}\n\n.player.opponent > .board > .shipLayer > .grid.hasShip {\n  background-color: var(--ocean-blue-300);\n}\n\n.board > .seaLayer > .grid {\n  border-radius: .2rem;\n  position: relative;\n}\n\n.board > .seaLayer > .grid:not(.alreadyHit):not(.alreadyMissed):hover {\n  background-color: var(--ocean-blue-500);\n}\n\n.board > .seaLayer > .grid.alreadyHit {\n  background-color: var(--ocean-blue-500);\n}\n\n.board > .seaLayer > .grid.alreadyHit::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'whatshot';\n  color: var(--fire);\n}\n\n.board > .seaLayer > .grid.alreadyMissed::after {\n  position: absolute;\n  content: 'waves';\n  color: var(--ocean-white);\n  font-size: 2rem;\n  font-weight: 400;\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'local_fire_department';\n  color: var(--fire);\n}\n\n.ctrl {\n  grid-row: 2 / 3;\n  grid-column: 1 / 3;\n  display: grid;\n  grid-template-columns: 10rem 10rem;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.ctrl > .btn {\n  width: 10rem;\n  justify-self: center;\n  align-self: center;\n}\n\n.footer {\n\theight: 4.5rem;\n\twidth: 100%;\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 0.75rem;\n\tcolor: var(--ocean-white);\n\tdisplay: grid;\n\tgrid-template-rows: repeat(2, 1.5rem);\n\talign-items: center;\n\tjustify-items: center;\n}\n\n.footer .tip,\n.footer .copyright,\n.footer .year {\n\theight: 1.5rem;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\talign-items: center;\n\tgap: 0.25rem;\n}\n\n.footer a {\n\twidth: 1rem;\n\theight: 1rem;\n  color: var(--ocean-white);\n}\n\n.footer .github {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.announceWinner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--black-translucent);\n  z-index: 5;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.announceWinner > .inner {\n  padding: 1rem 2rem;\n  background-color: var(--white);\n  border-radius: .5rem;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: 16rem;\n  grid-template-rows: 6rem 4rem;\n  animation: winnerAnimation .5s ease-in forwards;\n}\n\n@keyframes winnerAnimation {\n  from {\n      transform: scale(0);\n  }\n  to {\n      transform: scale(1.25);\n  }\n}\n\n.announceWinner .icon {\n  height: 6rem;\n  width: 6rem;\n}\n\n.announceWinner .icon > img {\n  width: 100%;\n  height: 100%;\n}\n\n.announceWinner .btns {\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  justify-items: center;\n}\n\n.announceWinner .btn {\n  font-size: .75rem;\n  font-weight: 700;\n  background-color: var(--ocean-blue-900);\n}\n\n.announceWinner .btn:hover {\n  background-color: var(--ocean-blue-300);\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\na {\n  text-decoration: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/norm.css"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;EACE,0JAA0J;AAC5J;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\na {\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/audio/lose.wav":
/*!***********************************!*\
  !*** ./src/assets/audio/lose.wav ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/183e2b8a775ec673ac2a.wav";

/***/ }),

/***/ "./src/assets/audio/sunkExplosion.wav":
/*!********************************************!*\
  !*** ./src/assets/audio/sunkExplosion.wav ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/89a0ee30d91b0267b6ab.wav";

/***/ }),

/***/ "./src/assets/audio/win.wav":
/*!**********************************!*\
  !*** ./src/assets/audio/win.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9b5b1a6223e1057f8898.wav";

/***/ }),

/***/ "./src/assets/img/github.png":
/*!***********************************!*\
  !*** ./src/assets/img/github.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2c0b3d17597d506011d6.png";

/***/ }),

/***/ "./src/assets/img/lose.png":
/*!*********************************!*\
  !*** ./src/assets/img/lose.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9ddbdec9ee09ef79bab3.png";

/***/ }),

/***/ "./src/assets/img/win.png":
/*!********************************!*\
  !*** ./src/assets/img/win.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6ae7da76a4cf5132506c.png";

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
    var hasWin = winnerId === 0;
    var playAudioCallback = winnerId === 0 ? _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].playWinAudio : _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].playLoseAudio;
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].showWinner(hasWin, playAudioCallback);
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

    _view__WEBPACK_IMPORTED_MODULE_2__["default"].lockBoard(0);
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
/* harmony import */ var _assets_audio_win_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/audio/win.wav */ "./src/assets/audio/win.wav");
/* harmony import */ var _assets_audio_lose_wav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/audio/lose.wav */ "./src/assets/audio/lose.wav");



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
  var WinAudio = new Audio(_assets_audio_win_wav__WEBPACK_IMPORTED_MODULE_10__);
  var LoseAudio = new Audio(_assets_audio_lose_wav__WEBPACK_IMPORTED_MODULE_11__);
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

  function playWinAudio() {
    WinAudio.currentTime = 0;
    WinAudio.play();
  }

  function playLoseAudio() {
    LoseAudio.currentTime = 0;
    LoseAudio.play();
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
      setTimeout(function () {
        return controllerAttackCallback.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(target).concat([opponent.id()]));
      }, 500);
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
    playWinAudio: playWinAudio,
    playLoseAudio: playLoseAudio,
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
/* harmony import */ var _assets_img_win_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/win.png */ "./src/assets/img/win.png");
/* harmony import */ var _assets_img_lose_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/lose.png */ "./src/assets/img/lose.png");



var MAIN = Symbol('main');
var OPPONENT = Symbol('opponent');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var ELEMENTS = {
    root: document.querySelector(':root'),
    body: document.querySelector('body'),
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
    return "\n      <div class=\"copyright\">\n        Copyright MIT \xA9 hireme.shen@gmail.com &nbsp;|&nbsp; Source code - \n        <a href=\"https://github.com/helloShen/battleship\"><img class=\"github\" src=\"".concat(githubImg, "\"></a>\n      </div>\n      <div class=\"credit\">\n        <a href=\"https://www.flaticon.com/free-icons/winner\" title=\"winner icons\">Winner icons created by Freepik - Flaticon</a>\n      </div>\n      <div class=\"year\">2021-").concat(year, "</div>\n    ");
  }
  /**
   * Create footer element.
   */


  function showFooter() {
    var year = new Date().getFullYear();
    ELEMENTS.footer.insertAdjacentHTML('afterbegin', renderFooter(_assets_img_github_png__WEBPACK_IMPORTED_MODULE_0__, year));
  }

  function showWinner(isWin, playAudioCallback) {
    var img = isWin ? _assets_img_win_png__WEBPACK_IMPORTED_MODULE_1__ : _assets_img_lose_png__WEBPACK_IMPORTED_MODULE_2__;
    var template = "\n      <div class=\"promptForm announceWinner\">\n          <div class=\"inner\">\n              <div class=\"icon\"><img src=\"".concat(img, "\"></div>\n              <div class=\"btns\">\n                  <div class=\"btn confirm\">Confirm</div>\n              </div>\n          </div>\n      </div>");
    ELEMENTS.body.insertAdjacentHTML('afterbegin', template);
    var form = document.querySelector('.promptForm');
    var confirm = document.querySelector('.announceWinner .btn.confirm');
    confirm.addEventListener('click', function () {
      return form.remove();
    });
    playAudioCallback();
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
    showFooter: showFooter,
    showWinner: showWinner
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JB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L3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9ub3JtLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvbW9kZWxzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy92aWV3LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm0uY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAxMDA7NDAwOzcwMDs5MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKiBib2FyZCAqL1xcbiAgLS1ib2FyZC1zaXplOiAxMDtcXG4gIC0tZ3JpZC1zaXplOiAycmVtO1xcbiAgLS1ib2FyZC1sZW5ndGg6IGNhbGModmFyKC0tYm9hcmQtc2l6ZSkgKiB2YXIoLS1ncmlkLXNpemUpKTtcXG5cXG4gIC8qIGNvbG9yICovXFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tYmxhY2s6IGJsYWNrO1xcbiAgLS1ibGFjay10cmFuc2x1Y2VudDogIzAwMDAwMDQ0O1xcbiAgLS1ncmF5OiBncmF5O1xcbiAgLS1vY2Vhbi13aGl0ZTogI0VGREJDQjtcXG4gIC0tb2NlYW4tYmx1ZS0zMDA6ICM0QkI0REU7XFxuICAtLW9jZWFuLWJsdWUtNTAwOiAjM0I4QUM0O1xcbiAgLS1vY2Vhbi1ibHVlLTcwMDogIzM0NURBNztcXG4gIC0tb2NlYW4tYmx1ZS05MDA6ICMyYjNjNWI7XFxuICAtLWJvYXJkLWJvcmRlcjogdmFyKC0tb2NlYW4td2hpdGUpO1xcbiAgLS13b29kOiAjOTU0QTAwO1xcbiAgLS10cmFuc2x1Y2VudC1maXJlOiAjRjE5NjJFQUE7XFxuICAtLWZpcmU6ICNGMTk2MkU7XFxuICAtLW1pc3NlZDogdmFyKC0tZ3JheSk7XFxuICAtLXN1bms6IHZhcigtLW9jZWFuLWJsdWUtOTAwKTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtOTAwKTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtIDFmciA0LjVyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgPiAubG9nbyB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmhlYWRlciA+IC5zdWIge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgY29sb3I6IHZhcigtLW9jZWFuLXdoaXRlKTtcXG59XFxuXFxuLm1haW5TZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI2cmVtIDFmcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmxvY2sge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgd2lkdGg6IDI0cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjRyZW0gMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXIubWFpbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnBsYXllci5vcHBvbmVudCB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4udGFnIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5idG4ge1xcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtMzAwKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtNTAwKTtcXG59XFxuXFxuLmxvY2suYnRuIHtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG5cXG4ucGxheWVyIC5idG4ge1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYm9hcmQtbGVuZ3RoKSArIC41cmVtKTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWJvYXJkLWxlbmd0aCkgKyAuNXJlbSk7XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi13aGl0ZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjByZW07XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLmxvY2sge1xcbiAgaGVpZ2h0OiB2YXIoLS1ib2FyZC1sZW5ndGgpO1xcbiAgd2lkdGg6IHZhcigtLWJvYXJkLWxlbmd0aCk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllcixcXG4uYm9hcmQgPiAuc2hpcExheWVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIge1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnBsYXllci5tYWluIC5zZWFMYXllciB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQudXBwZXJCb3JkZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5sZWZ0Qm9yZGVyIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkID4gLnNoaXBMYXllciA+IC5ncmlkIHtcXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tYmx1ZS0zMDApO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2hpcExheWVyID4gLmdyaWQuaGFzU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTcwMCk7XFxufVxcblxcbi5wbGF5ZXIub3Bwb25lbnQgPiAuYm9hcmQgPiAuc2hpcExheWVyID4gLmdyaWQuaGFzU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTMwMCk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkIHtcXG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZDpub3QoLmFscmVhZHlIaXQpOm5vdCguYWxyZWFkeU1pc3NlZCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tYmx1ZS01MDApO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5SGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtNTAwKTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeUhpdDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAuMnJlbTtcXG4gIGxlZnQ6IC4ycmVtO1xcbiAgY29udGVudDogJ3doYXRzaG90JztcXG4gIGNvbG9yOiB2YXIoLS1maXJlKTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeU1pc3NlZDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJ3dhdmVzJztcXG4gIGNvbG9yOiB2YXIoLS1vY2Vhbi13aGl0ZSk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5SGl0LnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlIaXQuc3Vuazo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAuMnJlbTtcXG4gIGxlZnQ6IC4ycmVtO1xcbiAgY29udGVudDogJ2xvY2FsX2ZpcmVfZGVwYXJ0bWVudCc7XFxuICBjb2xvcjogdmFyKC0tZmlyZSk7XFxufVxcblxcbi5jdHJsIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIDEwcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jdHJsID4gLmJ0biB7XFxuICB3aWR0aDogMTByZW07XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA0LjVyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tb2NlYW4td2hpdGUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMS41cmVtKTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciAudGlwLFxcbi5mb290ZXIgLmNvcHlyaWdodCxcXG4uZm9vdGVyIC55ZWFyIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDAuMjVyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0aGVpZ2h0OiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLW9jZWFuLXdoaXRlKTtcXG59XFxuXFxuLmZvb3RlciAuZ2l0aHViIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hbm5vdW5jZVdpbm5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay10cmFuc2x1Y2VudCk7XFxuICB6LWluZGV4OiA1O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hbm5vdW5jZVdpbm5lciA+IC5pbm5lciB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSA0cmVtO1xcbiAgYW5pbWF0aW9uOiB3aW5uZXJBbmltYXRpb24gLjVzIGVhc2UtaW4gZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgd2lubmVyQW5pbWF0aW9uIHtcXG4gIGZyb20ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG4gIH1cXG59XFxuXFxuLmFubm91bmNlV2lubmVyIC5pY29uIHtcXG4gIGhlaWdodDogNnJlbTtcXG4gIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG4uYW5ub3VuY2VXaW5uZXIgLmljb24gPiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hbm5vdW5jZVdpbm5lciAuYnRucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hbm5vdW5jZVdpbm5lciAuYnRuIHtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtOTAwKTtcXG59XFxuXFxuLmFubm91bmNlV2lubmVyIC5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tYmx1ZS0zMDApO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDBEQUEwRDs7RUFFMUQsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlC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QTtNQUNJLHNCQUFzQjtFQUMxQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL25vcm0uY3NzJztcXG5AaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzQwMDs3MDAmZmFtaWx5PVJvYm90bytTbGFiOndnaHRAMTAwOzQwMDs3MDA7OTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuOnJvb3Qge1xcbiAgLyogYm9hcmQgKi9cXG4gIC0tYm9hcmQtc2l6ZTogMTA7XFxuICAtLWdyaWQtc2l6ZTogMnJlbTtcXG4gIC0tYm9hcmQtbGVuZ3RoOiBjYWxjKHZhcigtLWJvYXJkLXNpemUpICogdmFyKC0tZ3JpZC1zaXplKSk7XFxuXFxuICAvKiBjb2xvciAqL1xcbiAgLS13aGl0ZTogd2hpdGU7XFxuICAtLWJsYWNrOiBibGFjaztcXG4gIC0tYmxhY2stdHJhbnNsdWNlbnQ6ICMwMDAwMDA0NDtcXG4gIC0tZ3JheTogZ3JheTtcXG4gIC0tb2NlYW4td2hpdGU6ICNFRkRCQ0I7XFxuICAtLW9jZWFuLWJsdWUtMzAwOiAjNEJCNERFO1xcbiAgLS1vY2Vhbi1ibHVlLTUwMDogIzNCOEFDNDtcXG4gIC0tb2NlYW4tYmx1ZS03MDA6ICMzNDVEQTc7XFxuICAtLW9jZWFuLWJsdWUtOTAwOiAjMmIzYzViO1xcbiAgLS1ib2FyZC1ib3JkZXI6IHZhcigtLW9jZWFuLXdoaXRlKTtcXG4gIC0td29vZDogIzk1NEEwMDtcXG4gIC0tdHJhbnNsdWNlbnQtZmlyZTogI0YxOTYyRUFBO1xcbiAgLS1maXJlOiAjRjE5NjJFO1xcbiAgLS1taXNzZWQ6IHZhcigtLWdyYXkpO1xcbiAgLS1zdW5rOiB2YXIoLS1vY2Vhbi1ibHVlLTkwMCk7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctbGVmdDogNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTkwMCk7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSAxZnIgNC41cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyID4gLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5oZWFkZXIgPiAuc3ViIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGNvbG9yOiB2YXIoLS1vY2Vhbi13aGl0ZSk7XFxufVxcblxcbi5tYWluU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNnJlbSAxZnI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5sb2NrIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGxheWVyIHtcXG4gIHdpZHRoOiAyNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI0cmVtIDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLm1haW4ge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5wbGF5ZXIub3Bwb25lbnQge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnRhZyB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTMwMCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTUwMCk7XFxufVxcblxcbi5sb2NrLmJ0biB7XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLnBsYXllciAuYnRuIHtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJvYXJkLWxlbmd0aCkgKyAuNXJlbSk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1ib2FyZC1sZW5ndGgpICsgLjVyZW0pO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4td2hpdGUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcmVtO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC5sb2NrIHtcXG4gIGhlaWdodDogdmFyKC0tYm9hcmQtbGVuZ3RoKTtcXG4gIHdpZHRoOiB2YXIoLS1ib2FyZC1sZW5ndGgpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIsXFxuLmJvYXJkID4gLnNoaXBMYXllciB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtc2l6ZSksIHZhcigtLWdyaWQtc2l6ZSkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtc2l6ZSksIHZhcigtLWdyaWQtc2l6ZSkpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2hpcExheWVyIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5wbGF5ZXIubWFpbiAuc2VhTGF5ZXIge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLnVwcGVyQm9yZGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQubGVmdEJvcmRlciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIgPiAuZ3JpZCB7XFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtMzAwKTtcXG59XFxuXFxuLmJvYXJkID4gLnNoaXBMYXllciA+IC5ncmlkLmhhc1NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tYmx1ZS03MDApO1xcbn1cXG5cXG4ucGxheWVyLm9wcG9uZW50ID4gLmJvYXJkID4gLnNoaXBMYXllciA+IC5ncmlkLmhhc1NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tYmx1ZS0zMDApO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZCB7XFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQ6bm90KC5hbHJlYWR5SGl0KTpub3QoLmFscmVhZHlNaXNzZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtNTAwKTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeUhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTUwMCk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlIaXQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLjJyZW07XFxuICBsZWZ0OiAuMnJlbTtcXG4gIGNvbnRlbnQ6ICd3aGF0c2hvdCc7XFxuICBjb2xvcjogdmFyKC0tZmlyZSk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlNaXNzZWQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICd3YXZlcyc7XFxuICBjb2xvcjogdmFyKC0tb2NlYW4td2hpdGUpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeUhpdC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmspO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5SGl0LnN1bms6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLjJyZW07XFxuICBsZWZ0OiAuMnJlbTtcXG4gIGNvbnRlbnQ6ICdsb2NhbF9maXJlX2RlcGFydG1lbnQnO1xcbiAgY29sb3I6IHZhcigtLWZpcmUpO1xcbn1cXG5cXG4uY3RybCB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHJlbSAxMHJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY3RybCA+IC5idG4ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcblxcdGhlaWdodDogNC41cmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Y29sb3I6IHZhcigtLW9jZWFuLXdoaXRlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDEuNXJlbSk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgLnRpcCxcXG4uZm9vdGVyIC5jb3B5cmlnaHQsXFxuLmZvb3RlciAueWVhciB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcblxcdHdpZHRoOiAxcmVtO1xcblxcdGhlaWdodDogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1vY2Vhbi13aGl0ZSk7XFxufVxcblxcbi5mb290ZXIgLmdpdGh1YiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYW5ub3VuY2VXaW5uZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stdHJhbnNsdWNlbnQpO1xcbiAgei1pbmRleDogNTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYW5ub3VuY2VXaW5uZXIgPiAuaW5uZXIge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZyZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gNHJlbTtcXG4gIGFuaW1hdGlvbjogd2lubmVyQW5pbWF0aW9uIC41cyBlYXNlLWluIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHdpbm5lckFuaW1hdGlvbiB7XFxuICBmcm9tIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuICB9XFxufVxcblxcbi5hbm5vdW5jZVdpbm5lciAuaWNvbiB7XFxuICBoZWlnaHQ6IDZyZW07XFxuICB3aWR0aDogNnJlbTtcXG59XFxuXFxuLmFubm91bmNlV2lubmVyIC5pY29uID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYW5ub3VuY2VXaW5uZXIgLmJ0bnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYW5ub3VuY2VXaW5uZXIgLmJ0biB7XFxuICBmb250LXNpemU6IC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1ibHVlLTkwMCk7XFxufVxcblxcbi5hbm5vdW5jZVdpbm5lciAuYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWJsdWUtMzAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25vcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtFQUNFLDBKQUEwSjtBQUM1Sjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiaW1wb3J0IEdhbWUsIHtcbiAgQUksXG4gIEhVTUFOLFxuICBFQVNZLFxuICBOT1JNQUwsXG4gIEhBUkQsXG59IGZyb20gJy4vbW9kZWxzL2dhbWUnO1xuaW1wb3J0IFZpZXcsIHtcbiAgTUFJTixcbiAgT1BQT05FTlQsXG59IGZyb20gJy4vdmlldyc7XG5cbmV4cG9ydCB7XG4gIEFJLFxuICBIVU1BTixcbiAgRUFTWSxcbiAgTk9STUFMLFxuICBIQVJELFxuICBNQUlOLFxuICBPUFBPTkVOVCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIDIgcGxheWVycyB3aXRoIHJhbmRvbWx5IGF1dG9maWxsZWQgYm9hcmRcbiAgICogYmVmb3JlIHN0YXJ0aW5nIHRvIGRyYXcgdGhlIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gaW5pdFBsYXllcnNBbmRCb2FyZHMocGxheWVyMVR5cGUsIHBsYXllcjJUeXBlKSB7XG4gICAgR2FtZS5pbml0UGxheWVyc0FuZEJvYXJkcyhwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgVmlldyBtb2R1bGUgdG8gZHJhdyB0aGUgYm9hcmQgb2YgYSBjZXJ0YWluIHBsYXllci5cbiAgICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBQbGF5ZXIgb2JqZWN0LlxuICAgKiBAcGFyYW0ge1N5bWJvbH0gbWFpbk9yT3Bwb25lbnQgQXMgTWFpbiBwbGF5ZXIgb3Igb3Bwb25lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBkcmF3QVNpbmdsZUJvYXJkKHBsYXllciwgbWFpbk9yT3Bwb25lbnQpIHtcbiAgICBWaWV3LmRyYXdCb2FyZChcbiAgICAgIEdhbWUuREVGQVVMVF9CT0FSRF9TSVpFLFxuICAgICAgcGxheWVyLmlkKCksXG4gICAgICBtYWluT3JPcHBvbmVudCxcbiAgICAgIHBsYXllci5ib2FyZCgpLmNhbkhpdFNoaXAsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHR3byBib2FyZHMgaW4gcGVyc3BlY3RpdmUgb2Ygb25lIHBsYXllci5cbiAgICogIDEuIEhpcyBvd24gYm9hcmQgKE1BSU4pLlxuICAgKiAgMi4gT3Bwb25lbnQncyBib2FyZCAoT1BQT05FTlQpLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgUGxheWVyJ3MgaWQuXG4gICAqL1xuICBmdW5jdGlvbiBkcmF3Qm9hcmRzRm9yUGxheWVyKHBsYXllcklkKSB7XG4gICAgZHJhd0FTaW5nbGVCb2FyZChHYW1lLnBsYXllcihwbGF5ZXJJZCksIE1BSU4pO1xuICAgIGNvbnN0IG9wcG9uZW50SWQgPSAocGxheWVySWQgKyAxKSAlIEdhbWUucGxheWVycygpLmxlbmd0aDtcbiAgICBkcmF3QVNpbmdsZUJvYXJkKEdhbWUucGxheWVyKG9wcG9uZW50SWQpLCBPUFBPTkVOVCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGJvdGggbWFpbiBhbmQgb3Bwb25lbnQncyBib2FyZCBmcm9tIHRoZSBET00uXG4gICAqL1xuICBmdW5jdGlvbiBjbGVhckFsbEJvYXJkcygpIHtcbiAgICBWaWV3LmNsZWFyQWxsQm9hcmRzKCk7XG4gIH1cblxuICAvKipcbiAgICogTG9jayBhbGwgYm9hcmRzLCBwcmV2ZW50IHBsYXllciBmcm9tIGludGVyYWN0IHdpdGggdGhlIGJvYXJkXG4gICAqIGJlZm9yZSBzdGFydGluZyB0aGUgZ2FtZS5cbiAgICovXG4gIGZ1bmN0aW9uIGxvY2tPcHBvbmVudEJvYXJkKCkge1xuICAgIFZpZXcubG9ja09wcG9uZW50Qm9hcmQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmNlIHRoZSBnYW1lIGlzIHByZXBhcmVkLCB1bmxvY2sgYWxsIGJvYXJkcywgc28gdGhhdCBwbGF5ZXIgZ2FpblxuICAgKiB0aGUgYWNjZXNzIHRvIHRoZSBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIHVubG9ja09wcG9uZW50Qm9hcmQoKSB7XG4gICAgVmlldy51bmxvY2tPcHBvbmVudEJvYXJkKCk7XG4gIH1cblxuICAvKipcbiAgICogR2FtZW92ZXIgbG9naWMuXG4gICAqL1xuICBmdW5jdGlvbiBnYW1lb3Zlcih3aW5uZXJJZCkge1xuICAgIGNvbnN0IGhhc1dpbiA9ICh3aW5uZXJJZCA9PT0gMCk7XG4gICAgY29uc3QgcGxheUF1ZGlvQ2FsbGJhY2sgPSAod2lubmVySWQgPT09IDApID8gR2FtZS5wbGF5V2luQXVkaW8gOiBHYW1lLnBsYXlMb3NlQXVkaW87XG4gICAgVmlldy5zaG93V2lubmVyKGhhc1dpbiwgcGxheUF1ZGlvQ2FsbGJhY2spO1xuICAgIGxvY2tPcHBvbmVudEJvYXJkKCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsIGF0dGFjayBsb2dpYy5cbiAgICogMS4gQXR0YWNrIHRoZSB0YXJnZXQgc3BvdC5cbiAgICogMi4gUmVuZGVyIHRoZSB2aWV3IGFjY29yZGluZyB0byB0aGUgYXR0YWNrIHJlc3VsdC5cbiAgICogMy4gUmV0dXJuIGEgbGlzdCBvZiBzdXJyb3VuZGluZyBwb2ludHMgaWYgdGhpcyBhdHRhY2tcbiAgICogY2F1c2UgYSBzaGlwIHRvIHNpbmsuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdpcmQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHBvbmVudElkIElkIG9mIG9wcG9uZW50IHBsYXllci5cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqICBSZXR1cm4gdW5kZWZpbmVkIGlmIHNwb3QgYWxyZWFkeSBiZWVuIGF0dGFja2VkLlxuICAgKiAgUmV0dXJuIC0xIGlmIG1pc3NlZC5cbiAgICogIElmIGhpdCxcbiAgICogICAgUmV0dXJuIGEgbGlzdCBvZiBzdXJyb3VuZGluZyBwb2ludHMgaWYgYSBzaGlwIGlzIHN1bmsgYWZ0ZXIgdGhpcyBhdHRhY2suXG4gICAqICAgIE90aGVyd2lzZSwgcmV0dXJuIDAuXG4gICAqL1xuICBmdW5jdGlvbiBwbGF5ZXJBdHRhY2tPbmVTcG90KHJvdywgY29sdW1uLCBvcHBvbmVudElkKSB7XG4gICAgY29uc3QgYm9hcmQgPSBHYW1lLnBsYXllcihvcHBvbmVudElkKS5ib2FyZCgpO1xuICAgIC8vIGF0dGFja1xuICAgIGlmIChib2FyZC5hbHJlYWR5QmVlbkF0dGFja2VkKHJvdywgY29sdW1uKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBzaGlwSWQgPSBib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcbiAgICAvLyByZW5kZXIgYXR0YWNrZWQgc3BvdFxuICAgIFZpZXcucmVuZGVyU2VhQWZ0ZXJBdHRhY2socm93LCBjb2x1bW4sIG9wcG9uZW50SWQsIHNoaXBJZCk7XG4gICAgaWYgKHNoaXBJZCA9PT0gLTEpIHtcbiAgICAgIEdhbWUucGxheU1pc3NBdWRpbygpO1xuICAgICAgcmV0dXJuIHNoaXBJZDsgLy8gbWlzc1xuICAgIH1cbiAgICBHYW1lLmN1cnJlbnRQbGF5ZXIoKS5tZW1vcml6ZUxhc3RIaXQocm93LCBjb2x1bW4pOyAvLyBtZW1vcml6ZSBoaXQgY29vcmRpbmF0aW9uXG4gICAgLy8gcmVwb3J0IGNvb3JkaW5hdGVzIGlmIHNoaXAgc3Vua1xuICAgIGlmIChib2FyZC5nZXRTaGlwKHNoaXBJZCkuaXNTdW5rKCkpIHsgLy8gaGl0IGEgc2hpcCBhbmQgdGhlIHNoaXAgaXMgc3Vua1xuICAgICAgR2FtZS5wbGF5U3Vua0F1ZGlvKCk7XG4gICAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBib2FyZC5nZXRTaGlwKHNoaXBJZCkuY29vcmRpbmF0ZXMoKTtcbiAgICAgIFZpZXcucmVuZGVyU3Vua1NoaXBzKG9wcG9uZW50SWQsIHNoaXBDb29yZGluYXRlcyk7XG4gICAgICBHYW1lLmN1cnJlbnRQbGF5ZXIoKS5mb3JnZXRMYXN0SGl0KHNoaXBDb29yZGluYXRlcyk7XG4gICAgICByZXR1cm4gYm9hcmQuc2hpcFN1cnJvdW5kaW5nQXJlYShzaGlwSWQpO1xuICAgIH1cbiAgICBHYW1lLnBsYXlIaXRBdWRpbygpO1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjayB0aGUgdGFyZ2V0IHNwb3QuIElmIGEgc2hpcCBzaW5rIGFmdGVyIHRoaXMgYXR0YWNrLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICogYXR0YWNrIHRoZSBzdXJyb3VuZGluZyBhcmVhIG9mIHRoYXQgc2hpcCAobm8gb3RoZXIgc2hpcCBjYW4gc3RheSBpbiB0aGF0IGFyZWEpLlxuICAgKiBXaGVuIGh1bWFuIHBsYXllciBjbGljayBvbiB0aGUgYm9hcmQsIFZpZXcgbW9kdWxlIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uLlxuICAgKiBXaGVuIEFJIHBsYXllciBkZWNpZGUgdGhlIHRhcmdldCBwb3NpdGlvbiBvZiBuZXh0IGF0dGFjaywgaXQgd2lsbCBhbHNvXG4gICAqIGNhbGxiYWNrIHRoaXMgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdpcmQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHBvbmVudElkIElkIG9mIG9wcG9uZW50IHBsYXllci5cbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllckF0dGFjayhyb3csIGNvbHVtbiwgb3Bwb25lbnRJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllckF0dGFja09uZVNwb3Qocm93LCBjb2x1bW4sIG9wcG9uZW50SWQpO1xuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBzcG90IGFscmVhZHkgYmVlbiBhdHRhY2tlZC5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7IC8vIGF0dGFjayBzaW5rIGEgc2hpcFxuICAgICAgcmVzdWx0LmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHBsYXllckF0dGFja09uZVNwb3QoLi4uY29vcmRpbmF0ZSwgb3Bwb25lbnRJZCkpO1xuICAgIH1cbiAgICBpZiAoR2FtZS5wbGF5ZXIob3Bwb25lbnRJZCkuYm9hcmQoKS5hbGxTdW5rKCkpIHtcbiAgICAgIGdhbWVvdmVyKEdhbWUuY3VycmVudFBsYXllcigpLmlkKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ID09PSAtMSkgeyAvLyBtaXNzZWRcbiAgICAgIFZpZXcubG9ja0JvYXJkKG9wcG9uZW50SWQpO1xuICAgICAgVmlldy51bmxvY2tCb2FyZChHYW1lLmN1cnJlbnRQbGF5ZXIoKS5pZCgpKTtcbiAgICAgIEdhbWUubmV4dFR1cm4odHJ1ZSwgcGxheWVyQXR0YWNrKTsgLy8gcGFzcyBpdHNlbGYgdG8gdGhlIEdhbWUgbW9kdWxlIGFzIGEgY2FsbGJhY2suXG4gICAgfSBlbHNlIHsgLy8gaWYgaGl0IGEgc2hpcCwgY3VycmVudCBwbGF5ZXIgY2FuIGdpdmUgb25lIG1vcmUgc2hvdC5cbiAgICAgIEdhbWUubmV4dFR1cm4oZmFsc2UsIHBsYXllckF0dGFjayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3MgdGhlIGF0dGFjayBsb2dpYyB0byB0aGUgVmlldyBtb2R1bGUgYXMgYSBjYWxsYmFjay5cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjaygpIHtcbiAgICBWaWV3LmJpbmRSZWNlaXZlQXR0YWNrKHBsYXllckF0dGFjayk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyByYW5kb20gZmxlZXQgZm9yIHRoZSBwbGF5ZXIsIGFuZCByZS1kcmF3IHRoZSBib2FyZCBvbiBET00uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBUaGUgcGxheWVyIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tQWdhaW4obWFpbk9yT3Bwb25lbnQsIHBsYXllcklkKSB7XG4gICAgLy8gZ2VuZXJhdGUgcmFuZG9tIGZsZWV0IGZvciB0aGF0IHBsYXllclxuICAgIGNvbnN0IGJvYXJkID0gR2FtZS5wbGF5ZXIocGxheWVySWQpLmJvYXJkKCk7XG4gICAgYm9hcmQuY2xlYXJGbGVldCgpO1xuICAgIEdhbWUuYXV0b2ZpbGxGbGVldChib2FyZCk7XG4gICAgLy8gY2xlYXIgdGhlIG9sZCBib2FyZChtYWluIG9yIG9wcG9uZW50KSBmcm9tIHRoZSBET00uXG4gICAgVmlldy5jbGVhckJvYXJkKG1haW5Pck9wcG9uZW50KTtcbiAgICAvLyBkcmF3IGEgbmV3IGJvYXJkIG9uIERPTVxuICAgIGRyYXdBU2luZ2xlQm9hcmQoR2FtZS5wbGF5ZXIocGxheWVySWQpLCBtYWluT3JPcHBvbmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVSYW5kb21GbGVldCgpIHtcbiAgICBWaWV3LmJpbmRSYW5kb21GbGVldChyYW5kb21BZ2FpbiwgR2FtZS5wbGF5Q2xpY2tBdWRpbyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBnYW1lLlxuICAgKiBUaGUgZ2FtZSBpcyBub3QgeWV0IHN0YXJ0ZWQuXG4gICAqIEhhdmUgdG8gY2FsbCBzdGFydEdhbWUoKSB0byBzdGFydC5cbiAgICovXG4gIGZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4gICAgaW5pdFBsYXllcnNBbmRCb2FyZHMoSFVNQU4sIEFJKTtcbiAgICBkcmF3Qm9hcmRzRm9yUGxheWVyKDApOyAvLyBpbiBodW1hbiBwbGF5ZXIncyBwZXJzcGVjdGl2ZVxuICAgIGxvY2tPcHBvbmVudEJvYXJkKCk7XG4gICAgZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIGdhbWUsIGFuZCB1bmxvY2sgb3Bwb25lbnQncyBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBHYW1lLnN0YXJ0KCk7XG4gICAgR2FtZS5uZXh0VHVybihwbGF5ZXJBdHRhY2spOyAvLyBwYXNzIGl0c2VsZiB0byB0aGUgR2FtZSBtb2R1bGUgYXMgYSBjYWxsYmFjay5cbiAgICBWaWV3LmxvY2tCb2FyZCgwKTtcbiAgICB1bmxvY2tPcHBvbmVudEJvYXJkKCk7XG4gICAgLy8gb25jZSB0aGUgZ2FtZSBzdGFydCwgcGxheWVyIGNhbm5vdCBjaGFuZ2UgdGhlIGZsZWV0IHVudGlsIHRoZSBlbmQgb2YgdGhlIGdhbWUuXG4gICAgVmlldy5sb2NrUmFuZG9tRmxlZXRCdXR0b24oKTtcbiAgICBWaWV3LmxvY2tTdGFydEdhbWVCdXR0b24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIFZpZXcgdG8gYmluZCBsaXN0ZW5lciBvbiBTdGFydCBnYW1lIGJ1dHRvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZVN0YXJ0R2FtZSgpIHtcbiAgICBWaWV3LmJpbmRTdGFydEdhbWVCdXR0b24oc3RhcnRHYW1lLCBHYW1lLnBsYXlHYW1lU3RhcnRBdWRpbyk7XG4gIH1cblxuICAvKipcbiAgICogUmUtaW5pdGlhbGl6ZSBhIG5ldyBnYW1lIHdpdGggcmFuZG9tbHkgYXV0by1maWxsZWQgZmxlZXQgZm9yIGJvdGggcGxheWVyLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG4gICAgY2xlYXJBbGxCb2FyZHMoKTtcbiAgICBuZXdHYW1lKCk7XG4gICAgVmlldy51bmxvY2tSYW5kb21GbGVldEJ1dHRvbigpO1xuICAgIFZpZXcudW5sb2NrU3RhcnRHYW1lQnV0dG9uKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBWaWV3IG1vZHVsZSB0byBiaW5kIHJlc3RhcnQgZ2FtZSBmZWF0dXJlIHRvIERPTSBlbGVtZW50cy5cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZVJlc3RhcnRHYW1lKCkge1xuICAgIFZpZXcuYmluZFJlc3RhcnRHYW1lQnV0dG9uKHJlc3RhcnRHYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludCBmb290ZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzaG93Rm9vdGVyKCkge1xuICAgIFZpZXcuc2hvd0Zvb3RlcigpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0UGxheWVyc0FuZEJvYXJkcyxcbiAgICBkcmF3QVNpbmdsZUJvYXJkLFxuICAgIGRyYXdCb2FyZHNGb3JQbGF5ZXIsXG4gICAgY2xlYXJBbGxCb2FyZHMsXG4gICAgZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrLFxuICAgIGVuYWJsZVJhbmRvbUZsZWV0LFxuICAgIGxvY2tPcHBvbmVudEJvYXJkLFxuICAgIHVubG9ja09wcG9uZW50Qm9hcmQsXG4gICAgbmV3R2FtZSxcbiAgICBzdGFydEdhbWUsXG4gICAgcmVzdGFydEdhbWUsXG4gICAgZW5hYmxlU3RhcnRHYW1lLFxuICAgIGVuYWJsZVJlc3RhcnRHYW1lLFxuICAgIHNob3dGb290ZXIsXG4gIH07XG59KSgpO1xuIiwibGV0IFVOSVRfVEVTVDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcblVOSVRfVEVTVCA9IHRydWU7IC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBhZnRlciB1bml0IHRlc3QuXG5cbmNvbnN0IERFRkFVTFRfQk9BUkRfU0laRSA9IDEwO1xuXG4vKipcbiAqIEJvYXJkIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBCb2FyZCBtYWdhZ2VzIFNoaXBzLCBhbmQgY2hlY2sgdGhlIGhpdCBmb3IgdXNlci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBpblNpemUgU2l6ZSBvZiB0aGUgZ2FtZSBib2FyZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluU2l6ZSkgPT4ge1xuICAvKipcbiAgICogQm9hcmQgcGxhaW4gb2JqZWN0LlxuICAgKi9cbiAgY29uc3QgYm9hcmQgPSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICBzaXplOiBpblNpemUgfHwgREVGQVVMVF9CT0FSRF9TSVpFLFxuICAgIGZsZWV0OiBbXSxcbiAgICBoaXRzOiBbXSxcbiAgICBtaXNzZXM6IFtdLFxuICAgIGludGFjdDogW10sXG4gIH07XG5cbiAgLyoqXG4gICAqIEFsbG93IG90aGVyIG1vZHVsZXMgdG8gY2hlY2sgdGhlIHNpemUgb2YgdGhlIGJvYXJkLlxuICAgKiBAcmV0dXJucyBCb2FyZCBzaXplLlxuICAgKi9cbiAgZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICByZXR1cm4gYm9hcmQuc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGdldCB0aGUgbGlzdCBvZiBhbGwgaW50YWN0IHBvc2l0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gaW50YWN0KCkge1xuICAgIHJldHVybiBib2FyZC5pbnRhY3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBzaGlwIGluIGZsZWV0IGJ5IGlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgU2hpcCBpZC5cbiAgICogQHJldHVybiBUaGUgc2hpcCBvYmplY3QgaWYgZXhpc3RzLiBPdGhlcndpc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U2hpcChpZCkge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5maW5kKChzaGlwKSA9PiBzaGlwLmlkKCkgPT09IGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGNoZWNrIHNpemUgb2YgY3VycmVudCBmbGVldC5cbiAgICovXG4gIGZ1bmN0aW9uIGZsZWV0U2l6ZSgpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgc2hpcHMgaW4gZmxlZXQuXG4gICAqL1xuICBmdW5jdGlvbiBjbGVhckZsZWV0KCkge1xuICAgIGJvYXJkLmZsZWV0ID0gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBib2R5IGNvb3JkaW5hdGVzIG9mIGFsbCBzaGlwcyBpbiBmbGVldC5cbiAgICovXG4gIGZ1bmN0aW9uIHNoaXBDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQucmVkdWNlKChhcnIsIGZsZWV0U2hpcCkgPT4ge1xuICAgICAgYXJyLnB1c2goZmxlZXRTaGlwLmNvb3JkaW5hdGVzKCkpO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9LCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIG51bWJlciBpcyBsb2NhdGVkIGluIHJhbmdlIG9mIGJvYXJkIHNpemUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBudW0gTnVtYmVyIHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaW4gYm9hcmQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGxlZ2FsKG51bSkge1xuICAgIHJldHVybiBudW0gPj0gMCAmJiBudW0gPCBib2FyZC5zaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBjb29yZGluYXRlcyBvZiB0aGUgc3Vycm91bmRpbmcgcG9pbnRzIG9mXG4gICAqIHRoYXQgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNoaXBJZCBTaGlwIGlkLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gQ29vcmRpbmF0ZXMgb2YgdGhlIHN1cnJvdW5kaW5nIHBvaW50cyBvZlxuICAgKiB0aGF0IHNoaXAuXG4gICAqL1xuICBmdW5jdGlvbiBzaGlwU3Vycm91bmRpbmdBcmVhKHNoaXBJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwKHNoaXBJZCk7XG4gICAgY29uc3QgW3VsUm93LCB1bENvbF0gPSBzaGlwLmhlYWQoKTtcbiAgICBjb25zdCBbYnJSb3csIGJyQ29sXSA9IHNoaXAudGFpbCgpO1xuICAgIGxldCBibFJvdztcbiAgICBsZXQgYmxDb2w7XG4gICAgbGV0IHVyUm93O1xuICAgIGxldCB1ckNvbDtcbiAgICBpZiAoc2hpcC5pc0hvcml6b250YWwoKSkge1xuICAgICAgW2JsUm93LCBibENvbF0gPSBzaGlwLmhlYWQoKTtcbiAgICAgIFt1clJvdywgdXJDb2xdID0gc2hpcC50YWlsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFtibFJvdywgYmxDb2xdID0gc2hpcC50YWlsKCk7XG4gICAgICBbdXJSb3csIHVyQ29sXSA9IHNoaXAuaGVhZCgpO1xuICAgIH1cbiAgICBpZiAodWxSb3cgLSAxID49IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSB1bENvbCAtIDE7IGkgPD0gdXJDb2wgKyAxOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGxlZ2FsKGkpKSByZXN1bHQucHVzaChbdWxSb3cgLSAxLCBpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChibFJvdyArIDEgPCBib2FyZC5zaXplKSB7XG4gICAgICBmb3IgKGxldCBpID0gYmxDb2wgLSAxOyBpIDw9IGJyQ29sICsgMTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChsZWdhbChpKSkgcmVzdWx0LnB1c2goW2JsUm93ICsgMSwgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodWxDb2wgLSAxID49IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSB1bFJvdzsgaSA8PSBibFJvdzsgaSArPSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpLCB1bENvbCAtIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVyQ29sICsgMSA8IGJvYXJkLnNpemUpIHtcbiAgICAgIGZvciAobGV0IGkgPSB1clJvdzsgaSA8PSBiclJvdzsgaSArPSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpLCB1ckNvbCArIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBib2FyZCwgcHV0IGFsbCBpbnRhY3QgcG9zaXRpb24gaW50byBib2FyZC5pbnRhY3QgYXJyYXkuXG4gICAqIFRoZSBwb3NpdGlvbiBbcm93LCBjb2x1bW5dIGlzIGNvZGVkIGFzOiBcInJvdy1jb2x1bW5cIi5cbiAgICovXG4gIGZ1bmN0aW9uIGZpbGxJbnRhY3QoKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQuc2l6ZTsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IGJvYXJkLnNpemU7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGJvYXJkLmludGFjdC5wdXNoKGAke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHBvaW50IGZyb20gdGhlIGJvYXJkLmludGFjdCBhcnJheS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBvc2l0b25TdHIgUG9zaXRpb24gc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUludGFjdChwb3NpdGlvblN0cikge1xuICAgIGNvbnN0IGluZGV4ID0gYm9hcmQuaW50YWN0LmZpbmRJbmRleCgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSBwb3NpdGlvblN0cik7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgIGJvYXJkLmludGFjdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBuZXcgc2hpcCBzaXRzIGluIHRoZSBmaXhlZCBzaGlwJ3MgZm9yYmlkZW4gem9uZS5cbiAgICogQHBhcmFtIHtTaGlwfSBmaXhlZFNoaXAgVGhlIHNoaXAgYWxyZWFkeSBwdXQgb24gdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge0FycmF5fSBuZXdIZWFkIEhlYWQgcG9zaXRpb25bcm93LCBjb2x1bW5dIG9mIHRoZSBuZXcgc2hpcC5cbiAgICogQHBhcmFtIHtBcnJheX0gbmV3VGFpbCBUYWlsIHBvc2l0aW9uW3JvdywgY29sdW1uXSBvZiB0aGUgbmV3IHNoaXAuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlc2UgdHdvIHNoaXBzIGhhdmUgb3ZlcmxhcCBlYWNoIG90aGVyLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBpc092ZXJsYXAoZml4ZWRTaGlwLCBuZXdIZWFkLCBuZXdUYWlsKSB7XG4gICAgY29uc3QgW2hlYWRSb3csIGhlYWRDb2x1bW5dID0gZml4ZWRTaGlwLmhlYWQoKTtcbiAgICBjb25zdCBbdGFpbFJvdywgdGFpbENvbHVtbl0gPSBmaXhlZFNoaXAudGFpbCgpO1xuICAgIGNvbnN0IG92ZXJsYXBSb3dTdGFydCA9IE1hdGgubWF4KDAsIGhlYWRSb3cgLSAxKTtcbiAgICBjb25zdCBvdmVybGFwQ29sdW1uU3RhcnQgPSBNYXRoLm1heCgwLCBoZWFkQ29sdW1uIC0gMSk7XG4gICAgY29uc3Qgb3ZlcmxhcFJvd0VuZCA9IE1hdGgubWluKGJvYXJkLnNpemUgLSAxLCB0YWlsUm93ICsgMSk7XG4gICAgY29uc3Qgb3ZlcmxhcENvbHVtbkVuZCA9IE1hdGgubWluKGJvYXJkLnNpemUgLSAxLCB0YWlsQ29sdW1uICsgMSk7XG4gICAgaWYgKG5ld0hlYWRbMF0gLSBuZXdUYWlsWzBdID09PSAwKSB7IC8vIGlzIGhvcml6b250YWxcbiAgICAgIGlmIChuZXdIZWFkWzBdIDwgb3ZlcmxhcFJvd1N0YXJ0IHx8IG5ld0hlYWRbMF0gPiBvdmVybGFwUm93RW5kKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobmV3VGFpbFsxXSA8IG92ZXJsYXBDb2x1bW5TdGFydCB8fCBuZXdIZWFkWzFdID4gb3ZlcmxhcENvbHVtbkVuZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChuZXdIZWFkWzFdIDwgb3ZlcmxhcENvbHVtblN0YXJ0IHx8IG5ld0hlYWRbMV0gPiBvdmVybGFwQ29sdW1uRW5kKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5ld1RhaWxbMF0gPCBvdmVybGFwUm93U3RhcnQgfHwgbmV3SGVhZFswXSA+IG92ZXJsYXBSb3dFbmQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdGFyZ2V0IHBvc2l0aW9uW3JvdywgY29sdW1uXSBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBUYXJnZXQgcm93LlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIFRhcmdldCBjb2x1bW4uXG4gICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBUaGUgc2hpcCB0byBiZSBwdXQgaW50byB0aGUgYm9hcmQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgaXMgb2ssIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGF2YWlsYWJsZShyb3csIGNvbHVtbiwgc2hpcCkge1xuICAgIC8vIGNoZWNrIGhlYWRcbiAgICBpZiAocm93IDwgMFxuICAgICAgfHwgcm93ID49IGJvYXJkLnNpemVcbiAgICAgIHx8IGNvbHVtbiA8IDBcbiAgICAgIHx8IGNvbHVtbiA+PSBib2FyZC5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIHRhaWxcbiAgICBjb25zdCB0YWlsUm93ID0gKHNoaXAuaXNIb3Jpem9udGFsKCkpID8gcm93IDogKHJvdyArIHNoaXAuc2l6ZSgpIC0gMSk7XG4gICAgY29uc3QgdGFpbENvbHVtbiA9IChzaGlwLmlzSG9yaXpvbnRhbCgpKSA/IChjb2x1bW4gKyBzaGlwLnNpemUoKSAtIDEpIDogY29sdW1uO1xuICAgIGlmICh0YWlsUm93IDwgMFxuICAgICAgfHwgdGFpbFJvdyA+PSBib2FyZC5zaXplXG4gICAgICB8fCB0YWlsQ29sdW1uIDwgMFxuICAgICAgfHwgdGFpbENvbHVtbiA+PSBib2FyZC5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIG92ZXJsYXBcbiAgICBjb25zdCBuZXdIZWFkID0gW3JvdywgY29sdW1uXTtcbiAgICBjb25zdCBuZXdUYWlsID0gW3RhaWxSb3csIHRhaWxDb2x1bW5dO1xuICAgIGlmIChib2FyZC5mbGVldC5zb21lKChmaXhlZFNoaXApID0+IGlzT3ZlcmxhcChmaXhlZFNoaXAsIG5ld0hlYWQsIG5ld1RhaWwpKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1dCBzaGlwIGludG8gYSBjZXJ0YWluIHBvc2l0aW9uIGlmIGl0J3MgYXZhaWxhYmxlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRoZSBzaGlwIGhlYWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGhlIHNoaXAgaGVhZC5cbiAgICogQHBhcmFtIHtTaGlwfSBzaGlwIFRoZSBzaGlwIG9iamVjdC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHBvc2l0aW9uIGlzIGxlZ2FsIGZvciBhIG5ldyBzaGlwLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBwdXRTaGlwKHJvdywgY29sdW1uLCBzaGlwKSB7XG4gICAgc2hpcC5wdXQocm93LCBjb2x1bW4pO1xuICAgIGJvYXJkLmZsZWV0LnB1c2goc2hpcCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgc2hpcCBmcm9tIHRoZSBib2FyZCBmbGVldCAob25seSBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIGZsZWV0KS5cbiAgICogQHBhcmFtIHtTaGlwfSBTaGlwIHRvIGJlIHJlbW92ZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVTaGlwKHNoaXApIHtcbiAgICBjb25zdCBpbmRleCA9IGJvYXJkLmZsZWV0LmZpbmRJbmRleCgoZmxlZXRTaGlwKSA9PiBmbGVldFNoaXAuaWQoKSA9PT0gc2hpcC5pZCgpKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG4gICAgYm9hcmQuZmxlZXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IHVzZWQgdG8gdG9nZ2xlIHNoaXBzIGFscmVhZHkgaW4gdGhlIGZsZWV0LlxuICAgKiBAcGFyYW0ge1NoaXB9IHNoaXAgVGFyZ2V0IHNoaXAuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdG9nZ2xlZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gdG9nZ2xlRmxlZXRTaGlwKHNoaXApIHtcbiAgICByZW1vdmVTaGlwKHNoaXApO1xuICAgIHNoaXAudG9nZ2xlRGlyZWN0aW9uKCk7XG4gICAgaWYgKGF2YWlsYWJsZSguLi5zaGlwLmhlYWQoKSwgc2hpcCkpIHtcbiAgICAgIHB1dFNoaXAoLi4uc2hpcC5oZWFkKCksIHNoaXApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIGNhbm5vdCB0b2dnbGVcbiAgICBzaGlwLnRvZ2dsZURpcmVjdGlvbigpOyAvLyBiYWNrIHRvIG9yZ2luYWwgZGlyZWN0aW9uXG4gICAgcHV0U2hpcCguLi5zaGlwLmhlYWQoKSwgc2hpcCk7IC8vIHB1dCBiYWNrIHRvIGZsZWV0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byBwb3NpdGlvbltyb3csIGNvbHVtbl0gZXF1YWwgdG8gZWFjaCBvdGhlci5cbiAgICogQHBhcmFtIHtBcnJheX0gcG9zaXRpb25BIFtyb3csIGNvbHVtbl1cbiAgICogQHBhcmFtIHtBcnJheX0gcG9zaXRpb25CIFtyb3csIGNvbHVtbl1cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBlcXVhbCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gcG9zaXRpb25FcXVhbChwb3NpdGlvbkEsIHBvc2l0aW9uQikge1xuICAgIHJldHVybiAocG9zaXRpb25BWzBdID09PSBwb3NpdGlvbkJbMF0pICYmIChwb3NpdGlvbkFbMV0gPT09IHBvc2l0aW9uQlsxXSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hlYXRoZXIgdGhlIHRhcmdldCBwb3NpdGlvbiBoYXMgYmVlbiBoaXQgYmVmb3JlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRhcmdldCBoYXMgYmVlbiBoaXQgYmVmb3JlLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBhbHJlYWR5SGl0KHJvdywgY29sdW1uKSB7XG4gICAgcmV0dXJuIGJvYXJkLmhpdHMuc29tZSgoaGl0KSA9PiBwb3NpdGlvbkVxdWFsKGhpdCwgW3JvdywgY29sdW1uXSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgcG9zaXRpb24gaGFzIGJlZW4gYXR0YWNrZWRcbiAgICogYnV0IGl0IHdhcyBhIG1pc3MuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaXQgd2FzIGEgbWlzcywgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxyZWFkeU1pc3NlZChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5taXNzZXMuc29tZSgobWlzcykgPT4gcG9zaXRpb25FcXVhbChtaXNzLCBbcm93LCBjb2x1bW5dKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hlYXRoZXIgdGhlIHRhcmdldCBleGlzdHMgaW4gYXR0YWNrIGhpc3RvcnkgYm9hcmQuaGl0cyBvciBib2FyZC5taXNzZXMuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGFyZ2V0IGhhcyBiZWVuIGF0dGFja2VkIGJlZm9yZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxyZWFkeUJlZW5BdHRhY2tlZChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBhbHJlYWR5SGl0KHJvdywgY29sdW1uKSB8fCBhbHJlYWR5TWlzc2VkKHJvdywgY29sdW1uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3R1YWxseSB0cnkgdG8gaGl0IGEgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICogIHJldHVybiBzaGlwIGlkIGlmIGhpdC5cbiAgICogIHJldHVybiAtMSBpZiBtaXNzLlxuICAgKi9cbiAgZnVuY3Rpb24gdHJ5SGl0U2hpcChyb3csIGNvbHVtbikge1xuICAgIGxldCBoaXQgPSAtMTtcbiAgICBib2FyZC5mbGVldC5mb3JFYWNoKChmbGVldFNoaXApID0+IHtcbiAgICAgIGlmIChmbGVldFNoaXAuaGl0KHJvdywgY29sdW1uKSkgaGl0ID0gZmxlZXRTaGlwLmlkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgYXR0YWNrIGNhbiBoaXQgYSBzaGlwLlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXNuJ3QgYWN0dWFsbHkgaGl0IHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgY2FuIGhpdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gY2FuSGl0U2hpcChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5zb21lKChmbGVldFNoaXApID0+IGZsZWV0U2hpcC5jYW5IaXQocm93LCBjb2x1bW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gaGl0IGVhY2ggb2YgdGhlIHNoaXBzIGluIHRoZSBib2FyZC5mbGVldCxcbiAgICogb25seSBpZiB0aGUgdGFyZ2V0IHBvc2l0aW9uIGhhcyBuZXZlciBiZWVuIGF0dGFja2VkIGJlZm9yZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGlZIG9mIHRhcmdldC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGlYIG9mIHRhcmdldC5cbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKiAgaWYgaGl0LCByZXR1cm4gdGhlIHNoaXAncyBpZC5cbiAgICogIHJldHVybiAtMSBpZiBtaXNzZWQuXG4gICAqICByZXR1cm4gdW5kZWZpbmVkLCBpZiBhbHJlYWR5IGJlZW4gYXR0YWNrZWQgYmVmb3JlLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IHRhcmdldCA9IFtyb3csIGNvbHVtbl07XG4gICAgLy8gTXVzdCBiZSB1bmRlZmluZWQuIElmIHJldHVybiBmYWxzZSwgd2lsbCBiZSBjb25zaWRlcmVkIGFzIGEgbWlzcy5cbiAgICBpZiAoYWxyZWFkeUJlZW5BdHRhY2tlZCguLi50YXJnZXQpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGhpdCA9IHRyeUhpdFNoaXAocm93LCBjb2x1bW4pO1xuICAgIGlmIChoaXQgIT09IC0xKSB7XG4gICAgICBib2FyZC5oaXRzLnB1c2godGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmQubWlzc2VzLnB1c2godGFyZ2V0KTtcbiAgICB9XG4gICAgcmVtb3ZlRnJvbUludGFjdChgJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgIHJldHVybiBoaXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYWxsIHNoaXBzIGFyZSBzdW5rLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGFsbCBzaGlwcyBhcmUgc3Vuaywgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQuZXZlcnkoKGZsZWV0U2hpcCkgPT4gZmxlZXRTaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBib2FyZC5cbiAgICovXG4gIGZpbGxJbnRhY3QoKTtcblxuICAvKipcbiAgICogUHVibGljIEFQSVxuICAgKi9cbiAgY29uc3QgYXBpID0ge1xuICAgIHNpemUsXG4gICAgaW50YWN0LFxuICAgIGdldFNoaXAsXG4gICAgZmxlZXRTaXplLFxuICAgIGNsZWFyRmxlZXQsXG4gICAgc2hpcENvb3JkaW5hdGVzLFxuICAgIHNoaXBTdXJyb3VuZGluZ0FyZWEsXG4gICAgYXZhaWxhYmxlLFxuICAgIHB1dFNoaXAsXG4gICAgcmVtb3ZlU2hpcCxcbiAgICB0b2dnbGVGbGVldFNoaXAsXG4gICAgYWxyZWFkeUhpdCxcbiAgICBhbHJlYWR5TWlzc2VkLFxuICAgIGFscmVhZHlCZWVuQXR0YWNrZWQsXG4gICAgY2FuSGl0U2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFN1bmssXG4gIH07XG5cbiAgLyoqXG4gICAqIEFQSSBvbmx5IGZvciB1bml0IHRlc3QuXG4gICAqL1xuICBpZiAoVU5JVF9URVNUKSB7XG4gICAgYXBpLmJvYXJkID0gYm9hcmQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmFwaSxcbiAgfTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZmlyc3QgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IFBsYXllciwge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn0gZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn07XG4vLyBhdWRpbyByZXNvdXJjZXNcbmltcG9ydCBIaXQgZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL2hpdC53YXYnO1xuaW1wb3J0IE1pc3MgZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL2RlZXBCdWJibGUud2F2JztcbmltcG9ydCBTdW5rIGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby9zdW5rRXhwbG9zaW9uLndhdic7XG5pbXBvcnQgQ2xpY2sgZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL2NsaWNrLndhdic7XG5pbXBvcnQgR2FtZVN0YXJ0IGZyb20gJy4uLy4uL2Fzc2V0cy9hdWRpby9nYW1lU3RhcnQud2F2JztcbmltcG9ydCBXaW4gZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL3dpbi53YXYnO1xuaW1wb3J0IExvc2UgZnJvbSAnLi4vLi4vYXNzZXRzL2F1ZGlvL2xvc2Uud2F2JztcblxubGV0IFVOSVRfVEVTVDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcblVOSVRfVEVTVCA9IHRydWU7IC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBvbmNlIGZpbmlzaCB0aGUgdW5pdCB0ZXN0cy5cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3QgREVGQVVMVF9CT0FSRF9TSVpFID0gMTA7IC8vIGRlZmF1bHQgZ2FtZSBib2FyZCBzaXplXG4gIC8vIERlZmF1bHQgZmxlZXQgc2V0dGluZy4gQWNjb3JkaW5nIHRvIDE5OTAncyBCYXR0bGVzaGlwIEdhbWUgb2YgTWlsdG9uIEJyYWRsZXQgQ29tcGFueS5cbiAgY29uc3QgU1RBTkRBUkRfRkxFRVQgPSBbXG4gICAgLy8gW25hbWUsIHNpemVdXG4gICAgWydjYXJyaWVyJywgNV0sXG4gICAgWydiYXR0bGVzaGlwJywgNF0sXG4gICAgWydjcnVpc2VyJywgM10sXG4gICAgWydzdWJtYXJpbmUnLCAzXSxcbiAgICBbJ2Rlc3Ryb3llcicsIDJdLFxuICBdO1xuICBjb25zdCBIaXRBdWRpbyA9IG5ldyBBdWRpbyhIaXQpO1xuICBjb25zdCBNaXNzQXVkaW8gPSBuZXcgQXVkaW8oTWlzcyk7XG4gIGNvbnN0IFN1bmtBdWRpbyA9IG5ldyBBdWRpbyhTdW5rKTtcbiAgY29uc3QgQ2xpY2tBdWRpbyA9IG5ldyBBdWRpbyhDbGljayk7XG4gIGNvbnN0IEdhbWVTdGFydEF1ZGlvID0gbmV3IEF1ZGlvKEdhbWVTdGFydCk7XG4gIGNvbnN0IFdpbkF1ZGlvID0gbmV3IEF1ZGlvKFdpbik7XG4gIGNvbnN0IExvc2VBdWRpbyA9IG5ldyBBdWRpbyhMb3NlKTtcblxuICAvKipcbiAgICogR2FtZSBtb2R1bGUgcHJvdG8uXG4gICAqICBwbGF5ZXJzOiBBcnJheS4gVHdvIHBsYXllcnMuXG4gICAqICBjdXJyZW50UGxheWVyOiBOdW1iZXIuIEluZGV4IG9mIGN1cnJlbnQgcGxheWVyIGluIHRoZSBwbGF5ZXJzIGFycmF5LlxuICAgKi9cbiAgY29uc3QgZ2FtZSA9IHt9O1xuXG4gIGZ1bmN0aW9uIHBsYXlIaXRBdWRpbygpIHtcbiAgICBIaXRBdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgSGl0QXVkaW8ucGxheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheU1pc3NBdWRpbygpIHtcbiAgICBNaXNzQXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIE1pc3NBdWRpby5wbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5U3Vua0F1ZGlvKCkge1xuICAgIFN1bmtBdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgU3Vua0F1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlDbGlja0F1ZGlvKCkge1xuICAgIENsaWNrQXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIENsaWNrQXVkaW8ucGxheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUdhbWVTdGFydEF1ZGlvKCkge1xuICAgIEdhbWVTdGFydEF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICBHYW1lU3RhcnRBdWRpby5wbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5V2luQXVkaW8oKSB7XG4gICAgV2luQXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIFdpbkF1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlMb3NlQXVkaW8oKSB7XG4gICAgTG9zZUF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICBMb3NlQXVkaW8ucGxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgaW50ZWdlciBpbiByYW5nZSBvZiBbMCwgbWF4KS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBNYXggdmFsdWUgKGV4Y2x1c2l2ZSkuXG4gICAqIEByZXR1cm4gR2VuZXJhdGVkIGludGVnZXIuXG4gICAqL1xuICBmdW5jdGlvbiByYW5kb20obWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICAvKipcbiAgICogUGljayB0aGUgcmFuZG9tIHBvc2l0aW9uIFtyb3csIGNvbHVtbl0gaW4gdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge0JvYXJkfSBib2FyZCBUYXJnZXQgYm9hcmQuXG4gICAqIEByZXR1cm4gUmFuZG9tIHBvc2l0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tUG9zaXRpb24oc2l6ZSkge1xuICAgIHJldHVybiBbcmFuZG9tKHNpemUpLCByYW5kb20oc2l6ZSldO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dG9maWxsKHJhbmRvbWx5KSBhIGdhbWUgYm9hcmQgd2l0aCBmbGVldCBzaGlwcy5cbiAgICogQHBhcmFtIHtCb2FyZH0gYm9hcmQgVGFyZ2V0IGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gYXV0b2ZpbGxGbGVldChib2FyZCkge1xuICAgIFNUQU5EQVJEX0ZMRUVULmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcCguLi50ZW1wbGF0ZSk7XG4gICAgICBpZiAocmFuZG9tKDIpID09PSAxKSBzaGlwLnRvZ2dsZURpcmVjdGlvbigpO1xuICAgICAgbGV0IHBvc2l0aW9uID0gcmFuZG9tUG9zaXRpb24oYm9hcmQuc2l6ZSgpKTtcbiAgICAgIHdoaWxlICghYm9hcmQuYXZhaWxhYmxlKC4uLnBvc2l0aW9uLCBzaGlwKSkge1xuICAgICAgICBwb3NpdGlvbiA9IHJhbmRvbVBvc2l0aW9uKGJvYXJkLnNpemUoKSk7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXRTaGlwKC4uLnBvc2l0aW9uLCBzaGlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgYWxsIHBsYXllcnMuXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIHBsYXllcnNcbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggUGxheWVyIG9iamVjdCBieSB0aGVpciBpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIHBsYXllciBpZC5cbiAgICogQHJldHVybiB7UGxheWVyfSBQbGF5ZXIgb2JqZWN0IGlmIGV4aXN0cy5cbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllcihpZCkge1xuICAgIHJldHVybiBnYW1lLnBsYXllcnMuZmluZCgodGhlUGxheWVyKSA9PiB0aGVQbGF5ZXIuaWQoKSA9PT0gaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBjdXJyZW50IHBsYXllciBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtQbGF5ZXJ9IEN1cnJlbnQgcGxheWVyIG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVyc1tnYW1lLmN1cnJlbnRQbGF5ZXJdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdHdvIHBsYXllcnMgd2l0aCByYW5kb21seSBhdXRvZmlsbGVkIGJvYXJkLlxuICAgKiBBSSBwbGF5ZXIncyBkZWZhdWx0IGxldmVsIGlzIEVBU1kuXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBwbGF5ZXIxVHlwZSBIVU1BTiBvciBBSVxuICAgKiBAcGFyYW0ge1N5bWJvbH0gcGxheWVyMlR5cGUgSFVNQU4gb3IgQUlcbiAgICovXG4gIGZ1bmN0aW9uIGluaXRQbGF5ZXJzQW5kQm9hcmRzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSkge1xuICAgIGdhbWUucGxheWVycyA9IFtdO1xuICAgIGNvbnN0IHBsYXllclR5cGVzID0gW3BsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJUeXBlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV3UGxheWVyID0gUGxheWVyKGksIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIHBsYXllclR5cGVzW2ldKTtcbiAgICAgIGF1dG9maWxsRmxlZXQobmV3UGxheWVyLmJvYXJkKCkpO1xuICAgICAgZ2FtZS5wbGF5ZXJzLnB1c2gobmV3UGxheWVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBBSS5cbiAgICogSXQgY2FuIGFsc28gYmUgdXNlZCB0byBjaGFuZ2UgQUkgbGV2ZWwuXG4gICAqIEFJIHBsYXllcidzIGJvYXJkIGlzIGZpbGxlZCBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgZnVuY3Rpb24gYWdhaW5zdEFJKGxldmVsKSB7XG4gICAgZ2FtZS5wbGF5ZXJzWzFdID0gUGxheWVyKDEsIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIEFJLCBsZXZlbCk7XG4gICAgYXV0b2ZpbGxGbGVldChnYW1lLnBsYXllcnNbMV0uYm9hcmQoKSk7XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBIVU1BTi5cbiAgICovXG4gIGZ1bmN0aW9uIGFnYWluc3RIdW1hbigpIHtcbiAgICBnYW1lLnBsYXllcnNbMV0gPSBQbGF5ZXIoMSwgQm9hcmQoREVGQVVMVF9CT0FSRF9TSVpFKSwgSFVNQU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXh0IHBsYXllcidzIGluZGV4LlxuICAgKiBAcmV0dXJucyBpbmRleCBvZiBuZXh0IHBsYXllclxuICAgKi9cbiAgZnVuY3Rpb24gbmV4dEluZGV4KCkge1xuICAgIHJldHVybiAoZ2FtZS5jdXJyZW50UGxheWVyICsgMSkgJSBnYW1lLnBsYXllcnMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGlzIGh1bWFuIHBsYXllciwgZG8gbm90aGluZyh3YWl0IGZvciBodW1hbiB0byBjbGlja1xuICAgKiBvbiB0aGUgYm9hcmQgdG8gdHJpZ2dlciBhbiBhdHRhY2sgZXZlbnQpLlxuICAgKlxuICAgKiBBSSBQbGF5ZXIncyBhdHRhY2sgZnVuY3Rpb24gb25seSBkZWNpZGVzIHdoZXJlIHRvIGF0dGFjayxcbiAgICogYW5kIGNhbGxiYWNrIGNvbnRyb2xsZXIgdG8gZG8gdGhlIHJlc3Qgb2YgdGhlIGpvYi5cbiAgICogQHBhcmFtIHtCb29sZWFufSBwYXNzVG9OZXh0UGxheWVyXG4gICAqICB0cnVlIGlmIHN3aXRjaCBwbGF5ZXIuXG4gICAqICBmYWxzZSBkb2Vzbid0IHN3aXRjaCBwbGF5ZXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRyb2xsZXJBdHRhY2tDYWxsYmFjayBBY3R1YWwgYXR0YWNrXG4gICAqIGxvZ2ljIGluIENvbnRyb2xsZXIgbW9kdWxlLlxuICAgKi9cbiAgZnVuY3Rpb24gbmV4dFR1cm4ocGFzc1RvTmV4dFBsYXllciwgY29udHJvbGxlckF0dGFja0NhbGxiYWNrKSB7XG4gICAgaWYgKHBhc3NUb05leHRQbGF5ZXIpIGdhbWUuY3VycmVudFBsYXllciA9IG5leHRJbmRleCgpO1xuICAgIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLnBsYXllcnNbZ2FtZS5jdXJyZW50UGxheWVyXTtcbiAgICBpZiAoIWN1cnJQbGF5ZXIuaXNBSSgpKSByZXR1cm47IC8vIGh1bWFuIHBsYXllciBkbyBub3RoaW5nLlxuICAgIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5wbGF5ZXJzW25leHRJbmRleCgpXTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyUGxheWVyLmF0dGFjayhvcHBvbmVudC5ib2FyZCgpKTsgLy8gQUkgcGxheWVyJ3MgbmV4dCBhdHRhY2sgdGFyZ2V0XG4gICAgaWYgKHRhcmdldCkgeyAvLyBpZiB0aGVyZSdzIG5vIG1vcmUgZ3JpZCB0byBiZSBhdHRhY2tlZCwgdGFyZ2V0IHdpbGwgYmUgdW5kZWZpbmVkLlxuICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyQXR0YWNrQ2FsbGJhY2soLi4udGFyZ2V0LCBvcHBvbmVudC5pZCgpKSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBwbGF5ZXIgaGFzIHB1dCBhbGwgaGlzIHNoaXBzIGludG8gdGhlIGJvYXJkLlxuICAgKiBDb250cm9sbGVyIGNhbGwgdGhpcyBtZXRob2QgdG8gaW5pdGlhbGl6ZSB0aGUgZ2FtZS5cbiAgICpcbiAgICogQmVmb3JlIHN0YXJ0IHRoZSBnYW1lIHRoaXMgZnVuY3Rpb24gd2lsbCBjaGVja1xuICAgKiB3aGVhdGhlciBhbGwgcmVxdWlyZW1lbnRzIGFib3ZlIGhhdmUgYmVlbiBtZXQuXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqICB0cnVlLCBpZiBhbGwgcmVxdWlyZW1lbnRzIGhhdmUgYmVlbiBtZXQsIHRoZSBnYW1lIGlzIHN0YXJ0ZWQuXG4gICAqICBvdGhlcndpc2UsIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgLy8gY2hlY2sgY29uZmlndXJhdGlvbnNcbiAgICBpZiAoZ2FtZS5wbGF5ZXJzLnNvbWUoKHRoZVBsYXllcikgPT4gdGhlUGxheWVyLmJvYXJkKCkuZmxlZXRTaXplKClcbiAgICAgICAgIT09IFNUQU5EQVJEX0ZMRUVULmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gU3RhcnQgZ2FtZS5cbiAgICAvLyBTZXQgdG8gdGhlIGxhc3QgcGxheWVyLiBuZXh0VHVybigpIHdpbGwgbW92ZSBvbi5cbiAgICBnYW1lLmN1cnJlbnRQbGF5ZXIgPSBnYW1lLnBsYXllcnMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGFwaSA9IHtcbiAgICBERUZBVUxUX0JPQVJEX1NJWkUsXG4gICAgcGxheUhpdEF1ZGlvLFxuICAgIHBsYXlNaXNzQXVkaW8sXG4gICAgcGxheVN1bmtBdWRpbyxcbiAgICBwbGF5Q2xpY2tBdWRpbyxcbiAgICBwbGF5R2FtZVN0YXJ0QXVkaW8sXG4gICAgcGxheVdpbkF1ZGlvLFxuICAgIHBsYXlMb3NlQXVkaW8sXG4gICAgcGxheWVycyxcbiAgICBwbGF5ZXIsXG4gICAgY3VycmVudFBsYXllcixcbiAgICBhdXRvZmlsbEZsZWV0LFxuICAgIG5leHRUdXJuLFxuICAgIGluaXRQbGF5ZXJzQW5kQm9hcmRzLFxuICAgIGFnYWluc3RBSSxcbiAgICBhZ2FpbnN0SHVtYW4sXG4gICAgc3RhcnQsXG4gIH07XG5cbiAgaWYgKFVOSVRfVEVTVCkge1xuICAgIGFwaS5nYW1lID0gZ2FtZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uYXBpLFxuICB9O1xufSkoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHF1b3RlLXByb3BzICovXG4vKipcbiAqIFRoZXJlIGFyZSB0d28gZGlmZmVyZW50IHR5cGVzIG9mIHBsYXllcjpcbiAqICAxLiBhaVxuICogIDIuIGh1bWFuXG4gKi9cbmV4cG9ydCBjb25zdCBBSSA9IFN5bWJvbCgnYWknKTtcbmV4cG9ydCBjb25zdCBIVU1BTiA9IFN5bWJvbCgnaHVtYW4nKTtcblxuLyoqXG4gKiBUaHJlZSBkaWZmZXJlbnQgbGV2ZWwgb2YgQUkuXG4gKi9cbmV4cG9ydCBjb25zdCBFQVNZID0gU3ltYm9sKCdjaGlsZCcpO1xuZXhwb3J0IGNvbnN0IE5PUk1BTCA9IFN5bWJvbCgnbm9ybWFsJyk7XG5leHBvcnQgY29uc3QgSEFSRCA9IFN5bWJvbCgnaGFyZCcpO1xuXG4vKipcbiAqIFBsYXllciBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtCb2FyZH0gaW5Cb2FyZCBQbGF5ZXIncyBnYW1lIGJvYXJkLlxuICogQHBhcmFtIHtTeW1ib2x9IGluVHlwZSBIVU1BTiBvciBBSS5cbiAqIEBwYXJhbSB7U3ltYm9sfSBpbkxldmVsIE9wdGlvbmFsLiBBSSBsZXZlbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluSWQsIGluQm9hcmQsIGluVHlwZSwgaW5MZXZlbCkgPT4ge1xuICAvKipcbiAgICogUGxheWVyIHBsYWluIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IHBsYXllciA9IHtcbiAgICBpZDogaW5JZCxcbiAgICB0eXBlOiBpblR5cGUsXG4gICAgYm9hcmQ6IGluQm9hcmQsXG4gICAgbGFzdEhpdDogW10sIC8vIG1lbW9yaXplIGhpdHMgKHN1bmsgc2hpcCdzIGNvb3JkaW5hdGVzIHdpbGwgYmUgcmVtb3ZlZClcbiAgfTtcblxuICBpZiAocGxheWVyLnR5cGUgPT09IEFJKSB7XG4gICAgcGxheWVyLmxldmVsID0gaW5MZXZlbCB8fCBOT1JNQUw7IC8vIGRlZmF1bHQgaXMgTk9STUFMXG4gIH1cblxuICAvKipcbiAgICogR2V0IHBsYXllciBpZC5cbiAgICogQHJldHVybnMgUGxheWVyIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gaWQoKSB7XG4gICAgcmV0dXJuIHBsYXllci5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBwbGF5ZXIgdHlwZS5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBpcyBwbGF5ZXIgaXMgQUkuXG4gICAqL1xuICBmdW5jdGlvbiBpc0FJKCkge1xuICAgIHJldHVybiBwbGF5ZXIudHlwZSA9PT0gQUk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgQUkgcGxheWVyJ3MgbGV2ZWwuXG4gICAqIEByZXR1cm5zIEFJIHBsYXllcidzIGxldmVsLiB1bmRlZmluZWQgaWYgaXQncyBub3QgQUkgcGxheWVyLlxuICAgKi9cbiAgZnVuY3Rpb24gYWlMZXZlbCgpIHtcbiAgICBpZiAocGxheWVyLnR5cGUgIT09IEFJKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBwbGF5ZXIubGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgR2FtZSBtb2R1bGUgdG8gc2V0IEFJIGxldmVsLlxuICAgKiBAcGFyYW0ge1N5bWJvbH0gbGV2ZWwgRUFTWSBvciBOT1JNQUwgb3IgSEFSRFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0QWlMZXZlbChsZXZlbCkge1xuICAgIGlmIChwbGF5ZXIudHlwZSAhPT0gQUkpIHJldHVybjtcbiAgICBwbGF5ZXIubGV2ZWwgPSBsZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBsYXllcidzIGJvYXJkIG9iamVjdC5cbiAgICogQHJldHVybnMgUGxheWVyJ3MgYm9hcmQgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gYm9hcmQoKSB7XG4gICAgcmV0dXJuIHBsYXllci5ib2FyZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSYW5kb21seSBwaWNrIGEgdGFyZ2V0IGZyb20gb3Bwb25lbnQgYm9hcmQncyBpbnRhY3QgbGlzdC5cbiAgICogQHBhcmFtIHtCb2FyZH0gb3Bwb25lbnRCb2FyZCBPcHBvZW5lbnQncyBib2FyZCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHRoZSB0YXJnZXQgY29vcmRpbmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICBpZiAob3Bwb25lbnRCb2FyZC5pbnRhY3QoKS5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHBvbmVudEJvYXJkLmludGFjdCgpLmxlbmd0aCk7XG4gICAgY29uc3Qgc3RyID0gb3Bwb25lbnRCb2FyZC5pbnRhY3QoKVtpbmRleF07XG4gICAgY29uc3QgW3Jvd1N0ciwgY29sdW1uU3RyXSA9IHN0ci5zcGxpdCgnLScpO1xuICAgIHJldHVybiBbcGFyc2VJbnQocm93U3RyLCAxMCksIHBhcnNlSW50KGNvbHVtblN0ciwgMTApXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIHN1bSBvZiBkaXN0YW5jZXMgYmV3dHdlZW4gdGhlIHRhcmdldCBwb2ludFxuICAgKiBhbmQgYWxsIHBvaW50cyBpbiBwbGF5ZXIubGFzdEhpdC5cbiAgICogRGlzdGFuY2UgPSBob3Jpem9udGFsIGRpc3RhbmNlICsgdmVydGljYWwgZGlzdGFuY2UuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3dcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtblxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlIG9mIHBvaW50IEEgYW5kIEIuXG4gICAqL1xuICBmdW5jdGlvbiBkaXN0YW5jZShyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBwbGF5ZXIubGFzdEhpdC5yZWR1Y2UoKGRpc3QsIGhpdCkgPT4gTWF0aC5hYnMocm93IC0gaGl0WzBdKVxuICAgICAgKyBNYXRoLmFicyhjb2x1bW4gLSBoaXRbMV0pXG4gICAgICArIGRpc3QsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgc3VtIG9mIGRpc3RhbmNlcyBiZXd0d2VlbiB0aGUgdGFyZ2V0IHBvaW50XG4gICAqIGFuZCBhbGwgcG9pbnRzIGluIHBsYXllci5sYXN0SGl0LlxuICAgKiBjb0Rpc3RhbmNlID0gc3VtIG9mIGhvcml6b250YWwgZGlzdGFuY2UgKiBzdW0gb2YgdmVydGljYWwgZGlzdGFuY2UgKyBkaXN0YW5jZVxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW5cbiAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZSBvZiBwb2ludCBBIGFuZCBCLlxuICAgKi9cbiAgZnVuY3Rpb24gY29EaXN0YW5jZShyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IFtzdW1Sb3dEaXN0LCBzdW1Db2xEaXN0XSA9IHBsYXllci5sYXN0SGl0LnJlZHVjZSgocmVzdWx0LCBoaXQpID0+IFtcbiAgICAgIHJlc3VsdFswXSArIE1hdGguYWJzKHJvdyAtIGhpdFswXSksXG4gICAgICByZXN1bHRbMV0gKyBNYXRoLmFicyhjb2x1bW4gLSBoaXRbMV0pLFxuICAgIF0sIFswLCAwXSk7XG4gICAgcmV0dXJuIHN1bVJvd0Rpc3QgKiBzdW1Db2xEaXN0ICsgZGlzdGFuY2Uocm93LCBjb2x1bW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgY28tZGlzdGFuY2Ugb2YgYW4gaW50YWN0IHBvaW50IHdpdGggYWxsIHJlbWFpbmluZyBsYXN0IGhpdChzdW5rXG4gICAqIHNoaXAgY29vcmRpbmF0ZXMgd2lsbCBiZSByZW1vdmVkKS5cbiAgICogY28tZGlzdGFuY2UgPSBzdW0gb2YgaG9yaXpvbnRhbCBkaXN0YW5jZSAqIHN1bSBvZiB2ZXJ0aWNhbCBkaXN0YW5jZSArIGRpc3RhbmNlXG4gICAqIFJldHVybiB0aGUgaW50YWN0IHBvaW50IHdpdGggdGhlIHNtYWxsZXN0IGRpc3RhbmNlLlxuICAgKiBAcGFyYW0ge0JvYXJkfSBvcHBvbmVudEJvYXJkIE9wcG9lbmVudCdzIGJvYXJkIG9iamVjdC5cbiAgICogQHJldHVybnMgdGhlIHRhcmdldCBjb29yZGluYXRlXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxBdHRhY2sob3Bwb25lbnRCb2FyZCkge1xuICAgIGlmIChvcHBvbmVudEJvYXJkLmludGFjdCgpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAocGxheWVyLmxhc3RIaXQubGVuZ3RoID09PSAwKSByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICAgIGxldCBtaW5EaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgcmV0dXJuIG9wcG9uZW50Qm9hcmQuaW50YWN0KCkucmVkdWNlKChhcnIsIHN0cikgPT4ge1xuICAgICAgY29uc3QgW3Jvd1N0ciwgY29sdW1uU3RyXSA9IHN0ci5zcGxpdCgnLScpO1xuICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQocm93U3RyLCAxMCk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBwYXJzZUludChjb2x1bW5TdHIsIDEwKTtcbiAgICAgIGNvbnN0IGRpc3QgPSAocGxheWVyLmxhc3RIaXQubGVuZ3RoID09PSAxKVxuICAgICAgICA/IGRpc3RhbmNlKHJvdywgY29sdW1uKVxuICAgICAgICA6IGNvRGlzdGFuY2Uocm93LCBjb2x1bW4pO1xuICAgICAgaWYgKGRpc3QgPCBtaW5EaXN0YW5jZSkge1xuICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3Q7XG4gICAgICAgIHJldHVybiBbcm93LCBjb2x1bW5dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFycjtcbiAgICB9LCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogUGljayh3aXRoIGEgc21hcnQgc3RyYXRlZ3kpIGEgdGFyZ2V0IGZyb20gb3Bwb25lbnQgYm9hcmQncyBpbnRhY3QgbGlzdC5cbiAgICogQHBhcmFtIHtCb2FyZH0gb3Bwb25lbnRCb2FyZCBPcHBvZW5lbnQncyBib2FyZCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHRoZSB0YXJnZXQgY29vcmRpbmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gc21hcnRBdHRjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgcmV0dXJuIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0JvYXJkfSBib2FyZCBUaGUgQm9hcmQgb2JqZWN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBOb3RpY2UgR2FtZSBtb2R1bGUgdG8gcnVuIG5leHQgcm91bmQuXG4gICAqIEByZXR1cm5cbiAgICogID09PiBBSSBwbGF5ZXIgcmV0dXJuIHRoZSBjb29yZGluYXRlIG9mIHRoZSB0YXJnZXQgaXQgd2FudHMgdG8gYXR0YWNrLlxuICAgKiAgPT0+IEh1bWFuIHBsYXllciB3aWxsIHJldHVybiB1bmRlZmluZWQuXG4gICAqL1xuICBmdW5jdGlvbiBhdHRhY2sob3Bwb25lbnRCb2FyZCkge1xuICAgIGlmIChwbGF5ZXIudHlwZSA9PT0gQUkpIHtcbiAgICAgIHN3aXRjaCAocGxheWVyLmxldmVsKSB7XG4gICAgICAgIGNhc2UgRUFTWTpcbiAgICAgICAgICByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICBjYXNlIE5PUk1BTDpcbiAgICAgICAgICByZXR1cm4gbm9ybWFsQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICBjYXNlIEhBUkQ6XG4gICAgICAgICAgcmV0dXJuIHNtYXJ0QXR0Y2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gaHVtYW4gcGxheWVyIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lbW9yaXplTGFzdEhpdChyb3csIGNvbHVtbikge1xuICAgIHBsYXllci5sYXN0SGl0LnB1c2goW3JvdywgY29sdW1uXSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JnZXRMYXN0SGl0KHNoaXBDb29yZGluYXRlcykge1xuICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHBsYXllci5sYXN0SGl0LmZpbmRJbmRleCgocG9pbnQpID0+IChwb2ludFswXSA9PT0gY29vcmRpbmF0ZVswXSlcbiAgICAgICAgJiYgKHBvaW50WzFdID09PSBjb29yZGluYXRlWzFdKSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSBwbGF5ZXIubGFzdEhpdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBpc0FJLFxuICAgIGFpTGV2ZWwsXG4gICAgc2V0QWlMZXZlbCxcbiAgICBib2FyZCxcbiAgICBhdHRhY2ssXG4gICAgbWVtb3JpemVMYXN0SGl0LFxuICAgIGZvcmdldExhc3RIaXQsXG4gIH07XG59O1xuIiwiLyoqXG4gKiBTaGlwIGlkIGdlbmVyYXRvci5cbiAqL1xuZnVuY3Rpb24qIGluZmluaXRlKCkge1xuICBsZXQgaW5kZXggPSAxO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHlpZWxkIGluZGV4O1xuICAgIGluZGV4ICs9IDE7XG4gIH1cbn1cblxuY29uc3QgR0VOID0gaW5maW5pdGUoKTtcbmNvbnN0IEhPUklaT05UQUwgPSBTeW1ib2woJ2hvcml6b250YWwnKTtcbmNvbnN0IFZFUlRJQ0FMID0gU3ltYm9sKCd2ZXJ0aWNhbCcpO1xuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdG8gaW5zdGFudGlhdGUgYSBTaGlwIG9iamVjdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIHNoaXAuIEV4OiBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGFuZCBkZXN0cm95ZXIuXG4gKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBIb3cgbWFueSBncmlkcyBvbiB0aGUgYm9hcmQgdGhlIHNoaXAgb2NjdXBpZXMuXG4gKiBAcmV0dXJuIEEgc2hpcCBtb2R1bGUgb2JqZWN0LlxuICovXG5leHBvcnQgZGVmYXVsdCAoaW5OYW1lLCBpblNpemUpID0+IHtcbiAgLyoqXG4gICAqIFNoaXAgcGxhaW4gb2JqZWN0LlxuICAgKi9cbiAgY29uc3Qgc2hpcCA9IHtcbiAgICBpZDogR0VOLm5leHQoKS52YWx1ZSxcbiAgICBuYW1lOiBpbk5hbWUsXG4gICAgc2l6ZTogaW5TaXplLFxuICAgIHJvdzogMCwgLy8gZGVmYXVsdFxuICAgIGNvbHVtbjogMCwgLy8gZGVmYXVsdFxuICAgIGRpcmVjdGlvbjogSE9SSVpPTlRBTCwgLy8gZGVmYXVsdFxuICAgIGhpdDogMCwgLy8gSG93IG1hbnkgdGltZXMgdGhlIHNoaXAgaXMgaGl0LlxuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBTaGlwJ3MgaWQuXG4gICAqL1xuICBmdW5jdGlvbiBpZCgpIHtcbiAgICByZXR1cm4gc2hpcC5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBTaGlwJ3MgbmFtZS5cbiAgICovXG4gIGZ1bmN0aW9uIG5hbWUoKSB7XG4gICAgcmV0dXJuIHNoaXAubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBTaXplIG9mIHRoZSBzaGlwLlxuICAgKi9cbiAgZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICByZXR1cm4gc2hpcC5zaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFBvc2l0aW9uIG9mIHRoZSBzaGlwIGhlYWQuXG4gICAqL1xuICBmdW5jdGlvbiBoZWFkKCkge1xuICAgIHJldHVybiBbc2hpcC5yb3csIHNoaXAuY29sdW1uXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFBvc2l0aW9uIG9mIHRoZSBzaGlwIHRhaWwuXG4gICAqL1xuICBmdW5jdGlvbiB0YWlsKCkge1xuICAgIHN3aXRjaCAoc2hpcC5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgSE9SSVpPTlRBTDpcbiAgICAgICAgcmV0dXJuIFtzaGlwLnJvdywgc2hpcC5jb2x1bW4gKyBzaGlwLnNpemUgLSAxXTtcbiAgICAgIGNhc2UgVkVSVElDQUw6XG4gICAgICAgIHJldHVybiBbc2hpcC5yb3cgKyBzaGlwLnNpemUgLSAxLCBzaGlwLmNvbHVtbl07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzaGlwLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBkaXJlY3Rpb24gaXMgaG9yaXpvbnRhbCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNIb3Jpem9udGFsKCkge1xuICAgIHJldHVybiBzaGlwLmRpcmVjdGlvbiA9PT0gSE9SSVpPTlRBTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBSZXR1cm4gaG93IG1hbnkgYXR0YWNrcyB0aGUgc2hpcCBoYXMgdGFrZW4uXG4gICAqL1xuICBmdW5jdGlvbiBjb3VudEhpdHMoKSB7XG4gICAgcmV0dXJuIHNoaXAuaGl0O1xuICB9XG5cbiAgLyoqXG4gICAqIEhPUklaT05UQUwgLT4gVkVSVElDQUxcbiAgICogVkVSVElDQUwgLT4gSE9SSVpPTlRBTFxuICAgKiBTaGlwIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgaWYgdGhlIGJvYXJkIGhhcyBlbm91Z2ggc3BhY2UuXG4gICAqIEJvYXJkIG1vZHVsZSB3aWxsIGNoZWNrIHRoYXQgZm9yIHVzIGJlZm9yZSBjYWxsIHRoaXMgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiB0b2dnbGVEaXJlY3Rpb24oKSB7XG4gICAgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBIT1JJWk9OVEFMKSB7XG4gICAgICBzaGlwLmRpcmVjdGlvbiA9IFZFUlRJQ0FMO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwLmRpcmVjdGlvbiA9IEhPUklaT05UQUw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE91ciBzaGlwcyBhcmUgbm90IGF3YXJlIG9mIHRoZSBzaXplIG9mIHRoZSBnYW1lIGJvYXJkLlxuICAgKiBCb2FyZCBtb2R1bGUgd2lsbCBjaGVjayB0aGUgdmFsaWRhdGlvbiBmb3IgdXMuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGhlIGhlYWQgb2YgdGhlIHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGhlIGhlYWQgb2YgdGhlIHNoaXAuXG4gICAqL1xuICBmdW5jdGlvbiBwdXQocm93LCBjb2x1bW4pIHtcbiAgICBzaGlwLnJvdyA9IHJvdztcbiAgICBzaGlwLmNvbHVtbiA9IGNvbHVtbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBKdXN0IGNoZWNrIGlmIHRoZXJlJ3MgYSBzaGlwIHNpdHMgb24gYSBjZXJ0YWluIGdyaWQuXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lc24ndCBhY3R1YWxseSBoaXQgdGhlIHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFggb2Ygb3Bwb25lbnQncyBhdHRhY2suXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFkgb2Ygb3Bwb25lbnQncyBhdHRhY2suXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgaXQncyBhIGhpdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gY2FuSGl0KHJvdywgY29sdW1uKSB7XG4gICAgc3dpdGNoIChzaGlwLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSBIT1JJWk9OVEFMOlxuICAgICAgICBpZiAocm93ICE9PSBzaGlwLnJvdykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoY29sdW1uIDwgc2hpcC5jb2x1bW4gfHwgY29sdW1uID4gKHNoaXAuY29sdW1uICsgc2hpcC5zaXplIC0gMSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZFUlRJQ0FMOlxuICAgICAgICBpZiAoY29sdW1uICE9PSBzaGlwLmNvbHVtbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAocm93IDwgc2hpcC5yb3cgfHwgcm93ID4gKHNoaXAucm93ICsgc2hpcC5zaXplIC0gMSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQXNzZXJ0aW9uOiBFYWNoIGdyaWQgb2YgdGhlIGJvYXJkIGNhbiBvbmx5IGJlIGF0dGVja2VkIG9uY2UuXG4gICAqIFRoZSBzaGlwIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgd2hlYXRoZXIgYSBzaW5nbGUgcGFydCBpcyBoaXQgdHdpY2UuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFggb2Ygb3Bwb25lbnQncyBhdHRhY2suXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFkgb2Ygb3Bwb25lbnQncyBhdHRhY2suXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHNoaXAgaXMgaGl0LCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBoaXQocm93LCBjb2x1bW4pIHtcbiAgICBjb25zdCByZXN1bHQgPSBjYW5IaXQocm93LCBjb2x1bW4pO1xuICAgIGlmIChyZXN1bHQpIHNoaXAuaGl0ICs9IDE7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBldmVyeSBwb3J0IHRoZSBzaGlwIGhhcyBiZWVuIGhpdC5cbiAgICogQXMgYWx3YXlzLCB0aGUgc2hpcCBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IHdoZWF0aGVyIGEgc2luZ2xlIHBhcnQgaXMgaGl0IHR3aWNlLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gKHNoaXAuaGl0ID49IHNoaXAuc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBBbiBhcnJheSBvZiBjb29yZGluYXRlcyBvZiB0aGF0IHNoaXAuXG4gICAqL1xuICBmdW5jdGlvbiBjb29yZGluYXRlcygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2l6ZTsgaSArPSAxKSB7XG4gICAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09IEhPUklaT05UQUwpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW3NoaXAucm93LCBzaGlwLmNvbHVtbiArIGldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtzaGlwLnJvdyArIGksIHNoaXAuY29sdW1uXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVyblxuICAgKiAgaWYgaXMgc3VuaywgcmV0dXJuIGFuIGFycmF5IG9mIGNvb3JkaW5hdGVzIG9mIHRoYXQgc2hpcC5cbiAgICogIG90aGVyd2lzZSwgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICovXG4gIGZ1bmN0aW9uIHJlcG9ydFN1bmsoKSB7XG4gICAgaWYgKCFpc1N1bmspIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIHNpemUsXG4gICAgbmFtZSxcbiAgICBoZWFkLFxuICAgIHRhaWwsXG4gICAgaXNIb3Jpem9udGFsLFxuICAgIGNvdW50SGl0cyxcbiAgICB0b2dnbGVEaXJlY3Rpb24sXG4gICAgcHV0LFxuICAgIGNhbkhpdCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIGNvb3JkaW5hdGVzLFxuICAgIHJlcG9ydFN1bmssXG4gIH07XG59O1xuIiwiaW1wb3J0IEdpdGh1Ykljb24gZnJvbSAnLi4vYXNzZXRzL2ltZy9naXRodWIucG5nJztcbmltcG9ydCBXaW5JY29uIGZyb20gJy4uL2Fzc2V0cy9pbWcvd2luLnBuZyc7XG5pbXBvcnQgTG9zZUljb24gZnJvbSAnLi4vYXNzZXRzL2ltZy9sb3NlLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBNQUlOID0gU3ltYm9sKCdtYWluJyk7XG5leHBvcnQgY29uc3QgT1BQT05FTlQgPSBTeW1ib2woJ29wcG9uZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGNvbnN0IEVMRU1FTlRTID0ge1xuICAgIHJvb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290JyksXG4gICAgYm9keTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgIG1haW5QbGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIubWFpbicpLFxuICAgIG9wcG9uZW50UGxheWVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLm9wcG9uZW50JyksXG4gICAgcmFuZG9tOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tJyksXG4gICAgc3RhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpLFxuICAgIG5ld0dhbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdHYW1lJyksXG4gICAgaGVhZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyksXG4gICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSxcbiAgICBmb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSxcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2luZ2xlIGdyaWQgaW4gYm9hcmQgYWNjb3JkaW5nIHRvIGl0J3MgY29vcmRpbmF0ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBHcmlkIGF4aSBZLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEdyaWQgYXhpIFguXG4gICAqIEByZXR1cm5zIEdyaWQgZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUdyaWQocm93LCBjb2x1bW4pIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG4gICAgZ3JpZC5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICBncmlkLmRhdGFzZXQuY29sdW1uID0gY29sdW1uO1xuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHNlYSBsYXllciBvZiBnYW1lIGJvYXJkLlxuICAgKiBFYWNoIGdyaWQgaXMgYW5ub3RhdGVkIHdpdGggdGhlIHBsYXllcidzIGlkIHRvIHdob21cbiAgICogdGhpcyBib2FyZCBiZWxvbmdzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBCb2FyZCBzaXplLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgSWQgb2Ygb3duZXIgb2YgdGhhdCBib2FyZC5cbiAgICogQHJldHVybnMgU2VhIGxheWVyIGRpdiBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gZHJhd1NlYUxheWVyKHNpemUsIHBsYXllcklkKSB7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWFMYXllci5jbGFzc0xpc3QuYWRkKCdzZWFMYXllcicpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBzaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBjb25zdCBncmlkID0gY3JlYXRlR3JpZChyb3csIGNvbHVtbik7XG4gICAgICAgIGdyaWQuZGF0YXNldC5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgIGlmIChyb3cgPT09IDApIGdyaWQuY2xhc3NMaXN0LmFkZCgndXBwZXJCb3JkZXInKTtcbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gMCkgZ3JpZC5jbGFzc0xpc3QuYWRkKCdsZWZ0Qm9yZGVyJyk7XG4gICAgICAgIHNlYUxheWVyLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VhTGF5ZXI7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgc2hpcCBsYXllciBvZiBnYW1lIGJvYXJkLlxuICAgKiBTaGlwIHBvc2l0aW9uIHNob3VsZCBiZSBoaWdobGlnaHRlZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgQm9hcmQgc2l6ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2hlY2tTaGlwQ2FsbGJhY2sgQm9hcmQuY2FuSGl0U2hpcCgpIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJucyBTaGlwIGxheWVyIGRpdiBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gZHJhd1NoaXBMYXllcihzaXplLCBjaGVja1NoaXBDYWxsYmFjaykge1xuICAgIGNvbnN0IHNoaXBMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBMYXllci5jbGFzc0xpc3QuYWRkKCdzaGlwTGF5ZXInKTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3cgKz0gMSkge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgc2l6ZTsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGNyZWF0ZUdyaWQocm93LCBjb2x1bW4pO1xuICAgICAgICBpZiAocm93ID09PSAwKSBncmlkLmNsYXNzTGlzdC5hZGQoJ3VwcGVyQm9yZGVyJyk7XG4gICAgICAgIGlmIChjb2x1bW4gPT09IDApIGdyaWQuY2xhc3NMaXN0LmFkZCgnbGVmdEJvcmRlcicpO1xuICAgICAgICBpZiAoY2hlY2tTaGlwQ2FsbGJhY2socm93LCBjb2x1bW4pKSBncmlkLmNsYXNzTGlzdC5hZGQoJ2hhc1NoaXAnKTtcbiAgICAgICAgc2hpcExheWVyLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcExheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgTUFJTiBvciBPUFBPTkVOVCBib2FyZCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge1N5bWJvbH0gbWFpbk9yT3Bwb25lbnQgTUFJTiBvciBPUFBPTkVOVFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSBUaGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50IHRoZSBkZXNpcmVkIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0TWFpbk9yT3Bwb25lbnRCb2FyZChtYWluT3JPcHBvbmVudCkge1xuICAgIHJldHVybiAobWFpbk9yT3Bwb25lbnQgPT09IE1BSU4pXG4gICAgICA/IEVMRU1FTlRTLm1haW5QbGF5ZXIucXVlcnlTZWxlY3RvcignLmJvYXJkJylcbiAgICAgIDogRUxFTUVOVFMub3Bwb25lbnRQbGF5ZXIucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIHRoZSBib2FyZCBlbGVtZW50IGJ5IHBsYXllciBpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIElkIG9mIGRlc2lyZWQgcGxheWVyLlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIGRlc2lyZWQgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQbGF5ZXJFbGVtZW50QnlJZChwbGF5ZXJJZCkge1xuICAgIGlmIChwYXJzZUludChFTEVNRU5UUy5tYWluUGxheWVyLmRhdGFzZXQucGxheWVySWQsIDEwKVxuICAgICAgPT09IHBsYXllcklkKSByZXR1cm4gRUxFTUVOVFMubWFpblBsYXllcjtcbiAgICByZXR1cm4gRUxFTUVOVFMub3Bwb25lbnRQbGF5ZXI7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhIHBsYXllcidzIGJvYXJkIGluIE1BSU4gYm9hcmQgc2VjdGlvbiBvciBPUFBPTkVOVCBib2FyZCBzZWN0aW9uLlxuICAgKiBFeDogSW4gcGxheWVyIDEncyBwYWdlLFxuICAgKiAgPT4gaGlzIG93biBib2FyZCBpcyBzaG93biBpbiBNQUlOIHNlY3Rpb24uXG4gICAqICA9PiBwbGF5ZXIgMidzIGJvYXJkIGlzIHNob3duIGluIE9QUE9ORU5UIHNlY3Rpb24uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIFNpemUgb2YgdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgRGVub3RlIHdoaWNoIGJvYXJkIHRvIGRyYXcuXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBtYWluT3JPcHBvbmVudCBNQUlOIG9yIE9QUE9ORU5UXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNoZWNrU2hpcENhbGxiYWNrIEJvYXJkLmNhbkhpdFNoaXAoKSBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdCb2FyZChcbiAgICBzaXplLFxuICAgIHBsYXllcklkLFxuICAgIG1haW5Pck9wcG9uZW50LFxuICAgIGNoZWNrU2hpcENhbGxiYWNrLFxuICApIHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRNYWluT3JPcHBvbmVudEJvYXJkKG1haW5Pck9wcG9uZW50KTtcbiAgICB0YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnBsYXllcklkID0gcGxheWVySWQ7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBkcmF3U2VhTGF5ZXIoc2l6ZSwgcGxheWVySWQpO1xuICAgIGNvbnN0IHNoaXBMYXllciA9IGRyYXdTaGlwTGF5ZXIoc2l6ZSwgY2hlY2tTaGlwQ2FsbGJhY2spO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzZWFMYXllcik7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHNoaXBMYXllcik7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIG1haW4gYm9hcmQgb3IgdGhlIG9wcG9uZW50J3MgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiBjbGVhckJvYXJkKG1haW5Pck9wcG9uZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TWFpbk9yT3Bwb25lbnRCb2FyZChtYWluT3JPcHBvbmVudCk7XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJBbGxCb2FyZHMoKSB7XG4gICAgY2xlYXJCb2FyZChNQUlOKTtcbiAgICBjbGVhckJvYXJkKE9QUE9ORU5UKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYSBzcGVjaWZpYyBncmlkIGNvbG9yIGFjY29yZGluZyB0byB0aGUgYXR0YWNrIHJlc3VsdC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBUYXJnZXQgZ3JpZCBBeGkgWS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBUYXJnZXQgZ3JpZCBBeGkgWC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFBsYXllciBpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGF0dGFja1Jlc3VsdFxuICAgKiAgMS4gaWYgYXR0YWNrIGhpdCBhIHNoaXAsIGl0J3MgdGhlIHNoaXAncyBpZC5cbiAgICogIDIuIGlmIGF0dGFjayBtaXNzZWQsIGl0J3MgLTEuXG4gICAqICAzLiBpZiB0aGUgdGFyZ2V0IHNwb3QgYWxyZWF5IGJlZW4gYXR0YWNrZWQgYmVmb3JlLCBpdCdzIHVuZGVmaW5lZC5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlclNlYUFmdGVyQXR0YWNrKHJvdywgY29sdW1uLCBwbGF5ZXJJZCwgYXR0YWNrUmVzdWx0KSB7XG4gICAgY29uc3QgcGxheWVyRWxlbWVudCA9IGdldFBsYXllckVsZW1lbnRCeUlkKHBsYXllcklkKTtcbiAgICBjb25zdCBzZWFMYXllciA9IHBsYXllckVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkID4gLnNlYUxheWVyJyk7XG4gICAgY29uc3QgZ3JpZCA9IHNlYUxheWVyLnF1ZXJ5U2VsZWN0b3IoYC5ncmlkW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYCk7XG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47IC8vIG5vIG1vcmUgZ3JpZCB0byBhdHRhY2tcbiAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAtMSkgeyAvLyBtaXNzZWRcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYWxyZWFkeU1pc3NlZCcpO1xuICAgIH0gZWxzZSB7IC8vIGl0J3MgYSBoaXRcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYWxyZWFkeUhpdCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBhcnJheSBvZiBjb29yZGluYXRlcyBvZiB0aGUgc2hpcCBib2R5LCBtYXJrIHRoYXQgc2hpcCBvbiB0aGUgU2VhIExheWVyLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgUGxheWVyIGlkLlxuICAgKiBAcGFyYW0ge0FycmF5fSBzdW5rQ29vcmRpbmF0ZXMgQ29vcmRpbmF0ZXMgb2YgdGhlIHN1bmsgc2hpcCAoc3VuayBieSB0aGlzIGF0dGFjaykuXG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXJTdW5rU2hpcHMocGxheWVySWQsIHN1bmtDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBnZXRQbGF5ZXJFbGVtZW50QnlJZChwbGF5ZXJJZCk7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBwbGF5ZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCA+IC5zZWFMYXllcicpO1xuICAgIHN1bmtDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCBncmlkID0gc2VhTGF5ZXIucXVlcnlTZWxlY3RvcihgLmdyaWRbZGF0YS1yb3c9XCIke2Nvb3JkaW5hdGVbMF19XCJdW2RhdGEtY29sdW1uPVwiJHtjb29yZGluYXRlWzFdfVwiXWApO1xuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBldmVudCBsaXN0ZW5lciB0byBhIHBsYXllcidzIGJvYXJkLCBzbyB0aGF0XG4gICAqIHdoZW4gb3Bwb25lbnQgY2xpY2sgb24gYm9hcmQgd2lsbCBjYWxsYmFjayBjb250cm9sbGVyJ3MgcGxheWVyQXR0YWNrKCkgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcGxheWVyRWxlbWVudCBtYWluUGxheWVyIG9yIG9wcG9uZW50UGxheWVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENvbnRyb2xsZXIucGxheWVyQXR0YWNrKCkgZnVuY3Rpb24sXG4gICAqIFRoZSBhY3R1YWwgYXR0YWNrIGxvZ2ljIHJlc2lkZXMgaW4gY29udHJvbGxlci5cbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRSZWNlaXZlQXR0YWNrVG9QbGF5ZXJzQm9hcmQocGxheWVyRWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWFMYXllciA9IHBsYXllckVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkID4gLnNlYUxheWVyJyk7XG4gICAgY29uc3QgZ3JpZHMgPSBzZWFMYXllci5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpO1xuICAgIGdyaWRzLmZvckVhY2goKGdyaWQpID0+IHtcbiAgICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYWxsYmFjayhcbiAgICAgICAgcGFyc2VJbnQoZ3JpZC5kYXRhc2V0LnJvdywgMTApLFxuICAgICAgICBwYXJzZUludChncmlkLmRhdGFzZXQuY29sdW1uLCAxMCksXG4gICAgICAgIHBhcnNlSW50KHBsYXllckVsZW1lbnQuZGF0YXNldC5wbGF5ZXJJZCwgMTApLFxuICAgICAgKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCByZWNlaXZlIGF0dGFjayBmZWF0dXJlIHRvIGJvdGggTUFJTiBhbmQgT1BQT05FTlQgYm9hcmQgb24gdGhlIHBhZ2UuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENvbnRyb2xsZXIucGxheWVyQXR0YWNrKCkgZnVuY3Rpb24sXG4gICAqIFRoZSBhY3R1YWwgYXR0YWNrIGxvZ2ljIHJlc2lkZXMgaW4gY29udHJvbGxlci5cbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRSZWNlaXZlQXR0YWNrKGNhbGxiYWNrKSB7XG4gICAgYmluZFJlY2VpdmVBdHRhY2tUb1BsYXllcnNCb2FyZChFTEVNRU5UUy5tYWluUGxheWVyLCBjYWxsYmFjayk7XG4gICAgYmluZFJlY2VpdmVBdHRhY2tUb1BsYXllcnNCb2FyZChFTEVNRU5UUy5vcHBvbmVudFBsYXllciwgY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgcmFuZG9tIGZsZWV0IGZlYXR1cmUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENvbnRyb2xsZXIgd2lsbCBwcm92aWRlIHRoZSBsb2dpYyBvZlxuICAgKiBhY3R1YWxseSBnZW5lcmF0aW5nIGEgbmV3IGZsZWV0IGFuZCByZS1kcmF3IHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGxheUF1ZGlvIFBsYXkgYnV0dG9uIGNsaWNrIGF1ZGlvLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZFJhbmRvbUZsZWV0KGNhbGxiYWNrLCBwbGF5QXVkaW8pIHtcbiAgICBjb25zdCBwbGF5ZXJJZCA9IHBhcnNlSW50KEVMRU1FTlRTLm1haW5QbGF5ZXIuZGF0YXNldC5wbGF5ZXJJZCwgMTApO1xuICAgIEVMRU1FTlRTLnJhbmRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBsYXlBdWRpbygpO1xuICAgICAgY2FsbGJhY2soTUFJTiwgcGxheWVySWQpO1xuICAgIH0pOyAvLyBtYWluIHBsYXllciByYW5kb20gaGlzIGZsZWV0LlxuICB9XG5cbiAgLyoqXG4gICAqIExvY2sgdGhlIGJvYXJkIG9mIHRhcmdldCBwbGF5ZXIuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBUYXJnZXQgcGxheWVyJ3MgaWQuXG4gICAqL1xuICBmdW5jdGlvbiBsb2NrQm9hcmQocGxheWVySWQpIHtcbiAgICBnZXRQbGF5ZXJFbGVtZW50QnlJZChwbGF5ZXJJZCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVubG9jayB0aGUgYm9hcmQgb2YgdGFyZ2V0IHBsYXllci5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFRhcmdldCBwbGF5ZXIncyBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIHVubG9ja0JvYXJkKHBsYXllcklkKSB7XG4gICAgZ2V0UGxheWVyRWxlbWVudEJ5SWQocGxheWVySWQpLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgICogTG9jayBvcHBvbmVudCdzIGJvYXJkLCBwcmV2ZW50IHBsYXllciBmcm9tIGludGVyYWN0IHdpdGggdGhlIGJvYXJkXG4gICAgKiBiZWZvcmUgc3RhcnRpbmcgdGhlIGdhbWUuXG4gICAgKi9cbiAgZnVuY3Rpb24gbG9ja09wcG9uZW50Qm9hcmQoKSB7XG4gICAgRUxFTUVOVFMub3Bwb25lbnRQbGF5ZXIucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBPbmNlIHRoZSBnYW1lIGlzIHByZXBhcmVkLCB1bmxvY2sgb3Bwb25lbnQncyBib2FyZHMsIHNvIHRoYXQgcGxheWVyIGdhaW5cbiAgICAqIHRoZSBhY2Nlc3MgdG8gdGhlIGJvYXJkLlxuICAgICovXG4gIGZ1bmN0aW9uIHVubG9ja09wcG9uZW50Qm9hcmQoKSB7XG4gICAgRUxFTUVOVFMub3Bwb25lbnRQbGF5ZXIucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIENvbnRyb2xsZXIgd2hlbiBwbGF5ZXIgY2xpY2sgU3RhcnQgYnV0dG9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBY3R1YWwgbG9naWMgb2Ygc3RhcnRpbmcgYSBnYW1lIGluIENvbnRyb2xsb3IgbW9kdWxlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwbGF5QXVkaW8gUGxheWVyIGdhbWUgc3RhcnQgYXVkaW8uXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kU3RhcnRHYW1lQnV0dG9uKGNhbGxiYWNrLCBwbGF5QXVkaW8pIHtcbiAgICBFTEVNRU5UUy5zdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBsYXlBdWRpbygpO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50IHBsYXllciBmcm9tIGNsaWNrIHRoZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbG9ja1JhbmRvbUZsZWV0QnV0dG9uKCkge1xuICAgIEVMRU1FTlRTLnJhbmRvbS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgcGxheWVyIHRvIHVzZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrUmFuZG9tRmxlZXRCdXR0b24oKSB7XG4gICAgRUxFTUVOVFMucmFuZG9tLmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50IHBsYXllciBmcm9tIGNsaWNrIHRoZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbG9ja1N0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICBFTEVNRU5UUy5zdGFydC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgcGxheWVyIHRvIGNsaWNrIHRoZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrU3RhcnRHYW1lQnV0dG9uKCkge1xuICAgIEVMRU1FTlRTLnN0YXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBDb250cm9sbGVyIHdoZW4gcGxheWVyIGNsaWNrIFJlc3RhcnQgYnV0dG9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBY3R1YWwgbG9naWMgb2YgcmVzdGFydGluZyBhIGdhbWUgaW4gQ29udHJvbGxvciBtb2R1bGUuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmVzdGFydEdhbWVCdXR0b24oY2FsbGJhY2spIHtcbiAgICBFTEVNRU5UUy5uZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJGb290ZXIoZ2l0aHViSW1nLCB5ZWFyKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5cbiAgICAgICAgQ29weXJpZ2h0IE1JVCDCqSBoaXJlbWUuc2hlbkBnbWFpbC5jb20gJm5ic3A7fCZuYnNwOyBTb3VyY2UgY29kZSAtIFxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hlbGxvU2hlbi9iYXR0bGVzaGlwXCI+PGltZyBjbGFzcz1cImdpdGh1YlwiIHNyYz1cIiR7Z2l0aHViSW1nfVwiPjwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNyZWRpdFwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvd2lubmVyXCIgdGl0bGU9XCJ3aW5uZXIgaWNvbnNcIj5XaW5uZXIgaWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb248L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ5ZWFyXCI+MjAyMS0ke3llYXJ9PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgZm9vdGVyIGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBzaG93Rm9vdGVyKCkge1xuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgRUxFTUVOVFMuZm9vdGVyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgIHJlbmRlckZvb3RlcihHaXRodWJJY29uLCB5ZWFyKSxcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1dpbm5lcihpc1dpbiwgcGxheUF1ZGlvQ2FsbGJhY2spIHtcbiAgICBjb25zdCBpbWcgPSAoaXNXaW4pID8gV2luSWNvbiA6IExvc2VJY29uO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInByb21wdEZvcm0gYW5ub3VuY2VXaW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj48aW1nIHNyYz1cIiR7aW1nfVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0biBjb25maXJtXCI+Q29uZmlybTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gICAgRUxFTUVOVFMuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0ZW1wbGF0ZSk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9tcHRGb3JtJyk7XG4gICAgY29uc3QgY29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbm5vdW5jZVdpbm5lciAuYnRuLmNvbmZpcm0nKTtcbiAgICBjb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZm9ybS5yZW1vdmUoKSk7XG4gICAgcGxheUF1ZGlvQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZHJhd0JvYXJkLFxuICAgIGNsZWFyQm9hcmQsXG4gICAgY2xlYXJBbGxCb2FyZHMsXG4gICAgcmVuZGVyU2VhQWZ0ZXJBdHRhY2ssXG4gICAgcmVuZGVyU3Vua1NoaXBzLFxuICAgIGJpbmRSZWNlaXZlQXR0YWNrLFxuICAgIGJpbmRSYW5kb21GbGVldCxcbiAgICBsb2NrQm9hcmQsXG4gICAgdW5sb2NrQm9hcmQsXG4gICAgbG9ja09wcG9uZW50Qm9hcmQsXG4gICAgdW5sb2NrT3Bwb25lbnRCb2FyZCxcbiAgICBiaW5kU3RhcnRHYW1lQnV0dG9uLFxuICAgIGxvY2tSYW5kb21GbGVldEJ1dHRvbixcbiAgICB1bmxvY2tSYW5kb21GbGVldEJ1dHRvbixcbiAgICBiaW5kUmVzdGFydEdhbWVCdXR0b24sXG4gICAgbG9ja1N0YXJ0R2FtZUJ1dHRvbixcbiAgICB1bmxvY2tTdGFydEdhbWVCdXR0b24sXG4gICAgc2hvd0Zvb3RlcixcbiAgICBzaG93V2lubmVyLFxuICB9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgQ29udHJvbGxlciwge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbiAgTUFJTixcbiAgT1BQT05FTlQsXG59IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy9pbmRleC5jc3MnO1xuXG5Db250cm9sbGVyLm5ld0dhbWUoKTtcbkNvbnRyb2xsZXIuZW5hYmxlUmFuZG9tRmxlZXQoKTtcbkNvbnRyb2xsZXIuZW5hYmxlU3RhcnRHYW1lKCk7XG5Db250cm9sbGVyLmVuYWJsZVJlc3RhcnRHYW1lKCk7XG5Db250cm9sbGVyLnNob3dGb290ZXIoKTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiQUkiLCJIVU1BTiIsIkVBU1kiLCJOT1JNQUwiLCJIQVJEIiwiVmlldyIsIk1BSU4iLCJPUFBPTkVOVCIsImluaXRQbGF5ZXJzQW5kQm9hcmRzIiwicGxheWVyMVR5cGUiLCJwbGF5ZXIyVHlwZSIsImRyYXdBU2luZ2xlQm9hcmQiLCJwbGF5ZXIiLCJtYWluT3JPcHBvbmVudCIsImRyYXdCb2FyZCIsIkRFRkFVTFRfQk9BUkRfU0laRSIsImlkIiwiYm9hcmQiLCJjYW5IaXRTaGlwIiwiZHJhd0JvYXJkc0ZvclBsYXllciIsInBsYXllcklkIiwib3Bwb25lbnRJZCIsInBsYXllcnMiLCJsZW5ndGgiLCJjbGVhckFsbEJvYXJkcyIsImxvY2tPcHBvbmVudEJvYXJkIiwidW5sb2NrT3Bwb25lbnRCb2FyZCIsImdhbWVvdmVyIiwid2lubmVySWQiLCJoYXNXaW4iLCJwbGF5QXVkaW9DYWxsYmFjayIsInBsYXlXaW5BdWRpbyIsInBsYXlMb3NlQXVkaW8iLCJzaG93V2lubmVyIiwicGxheWVyQXR0YWNrT25lU3BvdCIsInJvdyIsImNvbHVtbiIsImFscmVhZHlCZWVuQXR0YWNrZWQiLCJ1bmRlZmluZWQiLCJzaGlwSWQiLCJyZWNlaXZlQXR0YWNrIiwicmVuZGVyU2VhQWZ0ZXJBdHRhY2siLCJwbGF5TWlzc0F1ZGlvIiwiY3VycmVudFBsYXllciIsIm1lbW9yaXplTGFzdEhpdCIsImdldFNoaXAiLCJpc1N1bmsiLCJwbGF5U3Vua0F1ZGlvIiwic2hpcENvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZXMiLCJyZW5kZXJTdW5rU2hpcHMiLCJmb3JnZXRMYXN0SGl0Iiwic2hpcFN1cnJvdW5kaW5nQXJlYSIsInBsYXlIaXRBdWRpbyIsInBsYXllckF0dGFjayIsInJlc3VsdCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJjb29yZGluYXRlIiwiYWxsU3VuayIsImxvY2tCb2FyZCIsInVubG9ja0JvYXJkIiwibmV4dFR1cm4iLCJlbmFibGVCb2FyZFJlY2VpdmVBdHRhY2siLCJiaW5kUmVjZWl2ZUF0dGFjayIsInJhbmRvbUFnYWluIiwiY2xlYXJGbGVldCIsImF1dG9maWxsRmxlZXQiLCJjbGVhckJvYXJkIiwiZW5hYmxlUmFuZG9tRmxlZXQiLCJiaW5kUmFuZG9tRmxlZXQiLCJwbGF5Q2xpY2tBdWRpbyIsIm5ld0dhbWUiLCJzdGFydEdhbWUiLCJzdGFydCIsImxvY2tSYW5kb21GbGVldEJ1dHRvbiIsImxvY2tTdGFydEdhbWVCdXR0b24iLCJlbmFibGVTdGFydEdhbWUiLCJiaW5kU3RhcnRHYW1lQnV0dG9uIiwicGxheUdhbWVTdGFydEF1ZGlvIiwicmVzdGFydEdhbWUiLCJ1bmxvY2tSYW5kb21GbGVldEJ1dHRvbiIsInVubG9ja1N0YXJ0R2FtZUJ1dHRvbiIsImVuYWJsZVJlc3RhcnRHYW1lIiwiYmluZFJlc3RhcnRHYW1lQnV0dG9uIiwic2hvd0Zvb3RlciIsIlVOSVRfVEVTVCIsImluU2l6ZSIsInNpemUiLCJmbGVldCIsImhpdHMiLCJtaXNzZXMiLCJpbnRhY3QiLCJmaW5kIiwic2hpcCIsImZsZWV0U2l6ZSIsInJlZHVjZSIsImFyciIsImZsZWV0U2hpcCIsInB1c2giLCJsZWdhbCIsIm51bSIsImhlYWQiLCJ1bFJvdyIsInVsQ29sIiwidGFpbCIsImJyUm93IiwiYnJDb2wiLCJibFJvdyIsImJsQ29sIiwidXJSb3ciLCJ1ckNvbCIsImlzSG9yaXpvbnRhbCIsImkiLCJmaWxsSW50YWN0IiwicmVtb3ZlRnJvbUludGFjdCIsInBvc2l0aW9uU3RyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJwb3NpdGlvbiIsInNwbGljZSIsImlzT3ZlcmxhcCIsImZpeGVkU2hpcCIsIm5ld0hlYWQiLCJuZXdUYWlsIiwiaGVhZFJvdyIsImhlYWRDb2x1bW4iLCJ0YWlsUm93IiwidGFpbENvbHVtbiIsIm92ZXJsYXBSb3dTdGFydCIsIk1hdGgiLCJtYXgiLCJvdmVybGFwQ29sdW1uU3RhcnQiLCJvdmVybGFwUm93RW5kIiwibWluIiwib3ZlcmxhcENvbHVtbkVuZCIsImF2YWlsYWJsZSIsInNvbWUiLCJwdXRTaGlwIiwicHV0IiwicmVtb3ZlU2hpcCIsInRvZ2dsZUZsZWV0U2hpcCIsInRvZ2dsZURpcmVjdGlvbiIsInBvc2l0aW9uRXF1YWwiLCJwb3NpdGlvbkEiLCJwb3NpdGlvbkIiLCJhbHJlYWR5SGl0IiwiaGl0IiwiYWxyZWFkeU1pc3NlZCIsIm1pc3MiLCJ0cnlIaXRTaGlwIiwiY2FuSGl0IiwidGFyZ2V0IiwiZXZlcnkiLCJhcGkiLCJTaGlwIiwiQm9hcmQiLCJQbGF5ZXIiLCJIaXQiLCJNaXNzIiwiU3VuayIsIkNsaWNrIiwiR2FtZVN0YXJ0IiwiV2luIiwiTG9zZSIsIlNUQU5EQVJEX0ZMRUVUIiwiSGl0QXVkaW8iLCJBdWRpbyIsIk1pc3NBdWRpbyIsIlN1bmtBdWRpbyIsIkNsaWNrQXVkaW8iLCJHYW1lU3RhcnRBdWRpbyIsIldpbkF1ZGlvIiwiTG9zZUF1ZGlvIiwiZ2FtZSIsImN1cnJlbnRUaW1lIiwicGxheSIsInJhbmRvbSIsImZsb29yIiwicmFuZG9tUG9zaXRpb24iLCJ0ZW1wbGF0ZSIsInRoZVBsYXllciIsInBsYXllclR5cGVzIiwibmV3UGxheWVyIiwiYWdhaW5zdEFJIiwibGV2ZWwiLCJhZ2FpbnN0SHVtYW4iLCJuZXh0SW5kZXgiLCJwYXNzVG9OZXh0UGxheWVyIiwiY29udHJvbGxlckF0dGFja0NhbGxiYWNrIiwiY3VyclBsYXllciIsImlzQUkiLCJvcHBvbmVudCIsImF0dGFjayIsInNldFRpbWVvdXQiLCJTeW1ib2wiLCJpbklkIiwiaW5Cb2FyZCIsImluVHlwZSIsImluTGV2ZWwiLCJ0eXBlIiwibGFzdEhpdCIsImFpTGV2ZWwiLCJzZXRBaUxldmVsIiwicmFuZG9tQXR0YWNrIiwib3Bwb25lbnRCb2FyZCIsInN0ciIsInNwbGl0Iiwicm93U3RyIiwiY29sdW1uU3RyIiwicGFyc2VJbnQiLCJkaXN0YW5jZSIsImRpc3QiLCJhYnMiLCJjb0Rpc3RhbmNlIiwic3VtUm93RGlzdCIsInN1bUNvbERpc3QiLCJub3JtYWxBdHRhY2siLCJtaW5EaXN0YW5jZSIsIk51bWJlciIsIk1BWF9WQUxVRSIsInNtYXJ0QXR0Y2siLCJwb2ludCIsImluZmluaXRlIiwiR0VOIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiaW5OYW1lIiwibmV4dCIsInZhbHVlIiwibmFtZSIsImRpcmVjdGlvbiIsImNvdW50SGl0cyIsInJlcG9ydFN1bmsiLCJHaXRodWJJY29uIiwiV2luSWNvbiIsIkxvc2VJY29uIiwiRUxFTUVOVFMiLCJyb290IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsIm1haW5QbGF5ZXIiLCJvcHBvbmVudFBsYXllciIsImhlYWRlciIsIm1haW4iLCJmb290ZXIiLCJjcmVhdGVHcmlkIiwiZ3JpZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwiZHJhd1NlYUxheWVyIiwic2VhTGF5ZXIiLCJhcHBlbmRDaGlsZCIsImRyYXdTaGlwTGF5ZXIiLCJjaGVja1NoaXBDYWxsYmFjayIsInNoaXBMYXllciIsImdldE1haW5Pck9wcG9uZW50Qm9hcmQiLCJnZXRQbGF5ZXJFbGVtZW50QnlJZCIsInBhcmVudEVsZW1lbnQiLCJpbm5lckhUTUwiLCJhdHRhY2tSZXN1bHQiLCJwbGF5ZXJFbGVtZW50Iiwic3Vua0Nvb3JkaW5hdGVzIiwiYmluZFJlY2VpdmVBdHRhY2tUb1BsYXllcnNCb2FyZCIsImNhbGxiYWNrIiwiZ3JpZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXlBdWRpbyIsInJlbW92ZSIsInJlbmRlckZvb3RlciIsImdpdGh1YkltZyIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpc1dpbiIsImltZyIsImZvcm0iLCJjb25maXJtIiwiQ29udHJvbGxlciIsImNzcyJdLCJzb3VyY2VSb290IjoiIn0=