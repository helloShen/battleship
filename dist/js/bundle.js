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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --blue: blue;\n  --orange: orange;\n  --red: red;\n  --board-border: var(--black);\n  --hit: var(--orange);\n  --missed: var(--gray);\n  --sunk: var(--red);\n  --transparent: #00000000;\n}\n\n.lock {\n  pointer-events: none;\n  opacity: .5;\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.player .seaLayer,\n.player .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.player .seaLayer {\n  background-color: var(--white);\n  user-select: none;\n  z-index: 2;\n}\n\n.player.main > .board > .seaLayer {\n  opacity: 0.7;\n  user-select: none;\n  pointer-events: none;\n}\n\n.board > .shipLayer {\n  z-index: 1;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board .grid.hasShip {\n  background-color: var(--blue);\n}\n\n.board > .seaLayer > .grid {\n  position: relative;\n}\n\n.board > .seaLayer > .grid:not(.alreadyHit):not(.alreadyMissed):hover {\n  background-color: var(--gray);\n}\n\n.board > .seaLayer > .grid.alreadyHit::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'whatshot';\n  color: var(--hit);\n}\n\n.board > .seaLayer > .grid.alreadyMissed::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'waves';\n  color: var(--blue);\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'local_fire_department';\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;;EAEjB,UAAU;EACV,cAAc;EACd,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,4BAA4B;EAC5B,oBAAoB;EACpB,qBAAqB;EACrB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,kEAAkE;EAClE,+DAA+D;AACjE;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,4CAA4C;EAC5C,2CAA2C;AAC7C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gCAAgC;AAClC","sourcesContent":["@import './norm.css';\n@import 'https://fonts.googleapis.com/icon?family=Material+Icons';\n\n:root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --blue: blue;\n  --orange: orange;\n  --red: red;\n  --board-border: var(--black);\n  --hit: var(--orange);\n  --missed: var(--gray);\n  --sunk: var(--red);\n  --transparent: #00000000;\n}\n\n.lock {\n  pointer-events: none;\n  opacity: .5;\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.player .seaLayer,\n.player .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.player .seaLayer {\n  background-color: var(--white);\n  user-select: none;\n  z-index: 2;\n}\n\n.player.main > .board > .seaLayer {\n  opacity: 0.7;\n  user-select: none;\n  pointer-events: none;\n}\n\n.board > .shipLayer {\n  z-index: 1;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board .grid.hasShip {\n  background-color: var(--blue);\n}\n\n.board > .seaLayer > .grid {\n  position: relative;\n}\n\n.board > .seaLayer > .grid:not(.alreadyHit):not(.alreadyMissed):hover {\n  background-color: var(--gray);\n}\n\n.board > .seaLayer > .grid.alreadyHit::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'whatshot';\n  color: var(--hit);\n}\n\n.board > .seaLayer > .grid.alreadyMissed::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'waves';\n  color: var(--blue);\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'local_fire_department';\n}\n"],"sourceRoot":""}]);
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
    if (shipId === -1) return shipId; // miss

    _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].currentPlayer().memorizeLastHit(row, column); // memorize hit coordination
    // report coordinates if ship sunk

    if (board.getShip(shipId).isSunk()) {
      // hit a ship and the ship is sunk
      var shipCoordinates = board.getShip(shipId).coordinates();
      _view__WEBPACK_IMPORTED_MODULE_2__["default"].renderSunkShips(opponentId, shipCoordinates);
      _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].currentPlayer().forgetLastHit(shipCoordinates);
      return board.shipSurroundingArea(shipId);
    }

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
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].bindRandomFleet(randomAgain);
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
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].bindStartGameButton(startGame);
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
    enableRestartGame: enableRestartGame
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



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* eslint-disable no-unused-vars */




var UNIT_TEST; // eslint-disable-next-line prefer-const

UNIT_TEST = true; // Comment out this line once finish the unit tests.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var DEFAULT_BOARD_SIZE = 10; // default game board size
  // Default fleet setting. According to 1990's Battleship Game of Milton Bradlet Company.

  var STANDARD_FLEET = [// [name, size]
  ['carrier', 5], ['battleship', 4], ['cruiser', 3], ['submarine', 3], ['destroyer', 2]];
  /**
   * Game module proto.
   *  players: Array. Two players.
   *  currentPlayer: Number. Index of current player in the players array.
   */

  var game = {};
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
   * Calculate the distance of two points.
   * @param {Number} rowA
   * @param {Number} columnA
   * @param {Number} rowB
   * @param {Number} columnB
   * @return {Number} Distance of point A and B.
   */


  function distance(row, column) {
    return player.lastHit.reduce(function (dist, hit) {
      var y = Math.abs(row - hit[0]);
      var x = Math.abs(column - hit[1]);
      return dist + x + y;
    }, 0);
  }
  /**
   * Calculate the distance of an intact point with all last hit(sunk
   * ship coordinates will be removed).
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
      var dist = distance(row, column);

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
var MAIN = Symbol('main');
var OPPONENT = Symbol('opponent');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var ELEMENTS = {
    root: document.querySelector(':root'),
    mainPlayer: document.querySelector('.player.main'),
    opponentPlayer: document.querySelector('.player.opponent'),
    random: document.querySelector('.random'),
    start: document.querySelector('.start'),
    newGame: document.querySelector('.newGame')
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
   */


  function bindRandomFleet(callback) {
    var playerId = parseInt(ELEMENTS.mainPlayer.dataset.playerId, 10);
    ELEMENTS.random.addEventListener('click', function () {
      return callback(MAIN, playerId);
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
   */


  function bindStartGameButton(callback) {
    ELEMENTS.start.addEventListener('click', function () {
      return callback();
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
    unlockStartGameButton: unlockStartGameButton
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2h2QkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGcUQ7QUFDdEM7QUFDZixpQ0FBaUMsZ0VBQWdCO0FBQ2pEOzs7Ozs7Ozs7Ozs7Ozs7QUNIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1QmU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaUQ7QUFDWTtBQUNZO0FBQ3RCO0FBQ3BDO0FBQ2YsU0FBUyw4REFBYyxTQUFTLG9FQUFvQixZQUFZLDBFQUEwQixZQUFZLCtEQUFlO0FBQ3JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnVEO0FBQ0o7QUFDc0I7QUFDbEI7QUFDeEM7QUFDZixTQUFTLGlFQUFpQixTQUFTLCtEQUFlLFNBQVMsMEVBQTBCLFNBQVMsaUVBQWlCO0FBQy9HOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ3RDO0FBQ2Y7QUFDQSxvQ0FBb0MsZ0VBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixnRUFBZ0I7QUFDdEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFPQTtBQUtBO0FBVUEsaUVBQWUsQ0FBQyxZQUFNO0FBQ3BCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0UsV0FBU1Msb0JBQVQsQ0FBOEJDLFdBQTlCLEVBQTJDQyxXQUEzQyxFQUF3RDtBQUN0RFgsSUFBQUEseUVBQUEsQ0FBMEJVLFdBQTFCLEVBQXVDQyxXQUF2QztBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDQyxjQUFsQyxFQUFrRDtBQUNoRFIsSUFBQUEsdURBQUEsQ0FDRU4sdUVBREYsRUFFRWEsTUFBTSxDQUFDSSxFQUFQLEVBRkYsRUFHRUgsY0FIRixFQUlFRCxNQUFNLENBQUNLLEtBQVAsR0FBZUMsVUFKakI7QUFNRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTQyxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBdUM7QUFDckNULElBQUFBLGdCQUFnQixDQUFDWiwyREFBQSxDQUFZcUIsUUFBWixDQUFELEVBQXdCZCx1Q0FBeEIsQ0FBaEI7QUFDQSxRQUFNZSxVQUFVLEdBQUcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosSUFBaUJyQiw0REFBQSxHQUFld0IsTUFBbkQ7QUFDQVosSUFBQUEsZ0JBQWdCLENBQUNaLDJEQUFBLENBQVlzQixVQUFaLENBQUQsRUFBMEJkLDJDQUExQixDQUFoQjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTaUIsY0FBVCxHQUEwQjtBQUN4Qm5CLElBQUFBLDREQUFBO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU29CLGlCQUFULEdBQTZCO0FBQzNCcEIsSUFBQUEsK0RBQUE7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTcUIsbUJBQVQsR0FBK0I7QUFDN0JyQixJQUFBQSxpRUFBQTtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTc0IsUUFBVCxDQUFrQkMsUUFBbEIsRUFBNEI7QUFDMUI7QUFDQUMsSUFBQUEsS0FBSyxXQUFJRCxRQUFKLFdBQUw7QUFDQUgsSUFBQUEsaUJBQWlCO0FBQ2xCO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNLLG1CQUFULENBQTZCQyxHQUE3QixFQUFrQ0MsTUFBbEMsRUFBMENYLFVBQTFDLEVBQXNEO0FBQ3BELFFBQU1KLEtBQUssR0FBR2xCLDJEQUFBLENBQVlzQixVQUFaLEVBQXdCSixLQUF4QixFQUFkLENBRG9ELENBRXBEOztBQUNBLFFBQUlBLEtBQUssQ0FBQ2dCLG1CQUFOLENBQTBCRixHQUExQixFQUErQkMsTUFBL0IsQ0FBSixFQUE0QyxPQUFPRSxTQUFQO0FBQzVDLFFBQU1DLE1BQU0sR0FBR2xCLEtBQUssQ0FBQ21CLGFBQU4sQ0FBb0JMLEdBQXBCLEVBQXlCQyxNQUF6QixDQUFmLENBSm9ELENBS3BEOztBQUNBM0IsSUFBQUEsa0VBQUEsQ0FBMEIwQixHQUExQixFQUErQkMsTUFBL0IsRUFBdUNYLFVBQXZDLEVBQW1EYyxNQUFuRDtBQUNBLFFBQUlBLE1BQU0sS0FBSyxDQUFDLENBQWhCLEVBQW1CLE9BQU9BLE1BQVAsQ0FQaUMsQ0FPbEI7O0FBQ2xDcEMsSUFBQUEsa0VBQUEsR0FBcUJ3QyxlQUFyQixDQUFxQ1IsR0FBckMsRUFBMENDLE1BQTFDLEVBUm9ELENBUUQ7QUFDbkQ7O0FBQ0EsUUFBSWYsS0FBSyxDQUFDdUIsT0FBTixDQUFjTCxNQUFkLEVBQXNCTSxNQUF0QixFQUFKLEVBQW9DO0FBQUU7QUFDcEMsVUFBTUMsZUFBZSxHQUFHekIsS0FBSyxDQUFDdUIsT0FBTixDQUFjTCxNQUFkLEVBQXNCUSxXQUF0QixFQUF4QjtBQUNBdEMsTUFBQUEsNkRBQUEsQ0FBcUJnQixVQUFyQixFQUFpQ3FCLGVBQWpDO0FBQ0EzQyxNQUFBQSxrRUFBQSxHQUFxQjhDLGFBQXJCLENBQW1DSCxlQUFuQztBQUNBLGFBQU96QixLQUFLLENBQUM2QixtQkFBTixDQUEwQlgsTUFBMUIsQ0FBUDtBQUNEOztBQUNELFdBQU8sQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNZLFlBQVQsQ0FBc0JoQixHQUF0QixFQUEyQkMsTUFBM0IsRUFBbUNYLFVBQW5DLEVBQStDO0FBQzdDLFFBQU0yQixNQUFNLEdBQUdsQixtQkFBbUIsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWNYLFVBQWQsQ0FBbEM7QUFDQSxRQUFJMkIsTUFBTSxLQUFLZCxTQUFmLEVBQTBCLE9BRm1CLENBRVg7O0FBQ2xDLFFBQUllLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixNQUFkLENBQUosRUFBMkI7QUFBRTtBQUMzQkEsTUFBQUEsTUFBTSxDQUFDRyxPQUFQLENBQWUsVUFBQ0MsVUFBRDtBQUFBLGVBQWdCdEIsbUJBQW1CLE1BQW5CLDhGQUF1QnNCLFVBQXZCLFVBQW1DL0IsVUFBbkMsR0FBaEI7QUFBQSxPQUFmO0FBQ0Q7O0FBQ0QsUUFBSXRCLDJEQUFBLENBQVlzQixVQUFaLEVBQXdCSixLQUF4QixHQUFnQ29DLE9BQWhDLEVBQUosRUFBK0M7QUFDN0MxQixNQUFBQSxRQUFRLENBQUM1QixrRUFBQSxHQUFxQmlCLEVBQXJCLEVBQUQsQ0FBUjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSWdDLE1BQU0sS0FBSyxDQUFDLENBQWhCLEVBQW1CO0FBQUU7QUFDbkIzQyxNQUFBQSx1REFBQSxDQUFlZ0IsVUFBZjtBQUNBaEIsTUFBQUEseURBQUEsQ0FBaUJOLGtFQUFBLEdBQXFCaUIsRUFBckIsRUFBakI7QUFDQWpCLE1BQUFBLDZEQUFBLENBQWMsSUFBZCxFQUFvQmdELFlBQXBCLEVBSGlCLENBR2tCO0FBQ3BDLEtBSkQsTUFJTztBQUFFO0FBQ1BoRCxNQUFBQSw2REFBQSxDQUFjLEtBQWQsRUFBcUJnRCxZQUFyQjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVNVLHdCQUFULEdBQW9DO0FBQ2xDcEQsSUFBQUEsK0RBQUEsQ0FBdUIwQyxZQUF2QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVNZLFdBQVQsQ0FBcUI5QyxjQUFyQixFQUFxQ08sUUFBckMsRUFBK0M7QUFDN0M7QUFDQSxRQUFNSCxLQUFLLEdBQUdsQiwyREFBQSxDQUFZcUIsUUFBWixFQUFzQkgsS0FBdEIsRUFBZDtBQUNBQSxJQUFBQSxLQUFLLENBQUMyQyxVQUFOO0FBQ0E3RCxJQUFBQSxrRUFBQSxDQUFtQmtCLEtBQW5CLEVBSjZDLENBSzdDOztBQUNBWixJQUFBQSx3REFBQSxDQUFnQlEsY0FBaEIsRUFONkMsQ0FPN0M7O0FBQ0FGLElBQUFBLGdCQUFnQixDQUFDWiwyREFBQSxDQUFZcUIsUUFBWixDQUFELEVBQXdCUCxjQUF4QixDQUFoQjtBQUNEOztBQUVELFdBQVNrRCxpQkFBVCxHQUE2QjtBQUMzQjFELElBQUFBLDZEQUFBLENBQXFCc0QsV0FBckI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNNLE9BQVQsR0FBbUI7QUFDakJ6RCxJQUFBQSxvQkFBb0IsQ0FBQ1AsK0NBQUQsRUFBUUQsNENBQVIsQ0FBcEI7QUFDQW1CLElBQUFBLG1CQUFtQixDQUFDLENBQUQsQ0FBbkIsQ0FGaUIsQ0FFTzs7QUFDeEJNLElBQUFBLGlCQUFpQjtBQUNqQmdDLElBQUFBLHdCQUF3QjtBQUN6QjtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU1MsU0FBVCxHQUFxQjtBQUNuQm5FLElBQUFBLDBEQUFBO0FBQ0FBLElBQUFBLDZEQUFBLENBQWNnRCxZQUFkLEVBRm1CLENBRVU7O0FBQzdCckIsSUFBQUEsbUJBQW1CLEdBSEEsQ0FJbkI7O0FBQ0FyQixJQUFBQSxtRUFBQTtBQUNBQSxJQUFBQSxpRUFBQTtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTaUUsZUFBVCxHQUEyQjtBQUN6QmpFLElBQUFBLGlFQUFBLENBQXlCNkQsU0FBekI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU00sV0FBVCxHQUF1QjtBQUNyQmhELElBQUFBLGNBQWM7QUFDZHlDLElBQUFBLE9BQU87QUFDUDVELElBQUFBLHFFQUFBO0FBQ0FBLElBQUFBLG1FQUFBO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVNzRSxpQkFBVCxHQUE2QjtBQUMzQnRFLElBQUFBLG1FQUFBLENBQTJCbUUsV0FBM0I7QUFDRDs7QUFFRCxTQUFPO0FBQ0xoRSxJQUFBQSxvQkFBb0IsRUFBcEJBLG9CQURLO0FBRUxHLElBQUFBLGdCQUFnQixFQUFoQkEsZ0JBRks7QUFHTFEsSUFBQUEsbUJBQW1CLEVBQW5CQSxtQkFISztBQUlMSyxJQUFBQSxjQUFjLEVBQWRBLGNBSks7QUFLTGlDLElBQUFBLHdCQUF3QixFQUF4QkEsd0JBTEs7QUFNTE0sSUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFOSztBQU9MdEMsSUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFQSztBQVFMQyxJQUFBQSxtQkFBbUIsRUFBbkJBLG1CQVJLO0FBU0x1QyxJQUFBQSxPQUFPLEVBQVBBLE9BVEs7QUFVTEMsSUFBQUEsU0FBUyxFQUFUQSxTQVZLO0FBV0xNLElBQUFBLFdBQVcsRUFBWEEsV0FYSztBQVlMRixJQUFBQSxlQUFlLEVBQWZBLGVBWks7QUFhTEssSUFBQUEsaUJBQWlCLEVBQWpCQTtBQWJLLEdBQVA7QUFlRCxDQTdOYyxHQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxJQUFJRSxTQUFKLEVBQ0E7O0FBQ0FBLFNBQVMsR0FBRyxJQUFaLEVBQWtCOztBQUVsQixJQUFNOUQsa0JBQWtCLEdBQUcsRUFBM0I7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGlFQUFlLFVBQUMrRCxNQUFELEVBQVk7QUFDekI7QUFDRjtBQUNBO0FBQ0UsTUFBTTdELEtBQUssR0FBRztBQUNaO0FBQ0E4RCxJQUFBQSxJQUFJLEVBQUVELE1BQU0sSUFBSS9ELGtCQUZKO0FBR1ppRSxJQUFBQSxLQUFLLEVBQUUsRUFISztBQUlaQyxJQUFBQSxJQUFJLEVBQUUsRUFKTTtBQUtaQyxJQUFBQSxNQUFNLEVBQUUsRUFMSTtBQU1aQyxJQUFBQSxNQUFNLEVBQUU7QUFOSSxHQUFkO0FBU0E7QUFDRjtBQUNBO0FBQ0E7O0FBQ0UsV0FBU0osSUFBVCxHQUFnQjtBQUNkLFdBQU85RCxLQUFLLENBQUM4RCxJQUFiO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVNJLE1BQVQsR0FBa0I7QUFDaEIsV0FBT2xFLEtBQUssQ0FBQ2tFLE1BQWI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVMzQyxPQUFULENBQWlCeEIsRUFBakIsRUFBcUI7QUFDbkIsV0FBT0MsS0FBSyxDQUFDK0QsS0FBTixDQUFZSSxJQUFaLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNyRSxFQUFMLE9BQWNBLEVBQXhCO0FBQUEsS0FBakIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTc0UsU0FBVCxHQUFxQjtBQUNuQixXQUFPckUsS0FBSyxDQUFDK0QsS0FBTixDQUFZekQsTUFBbkI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU3FDLFVBQVQsR0FBc0I7QUFDcEIzQyxJQUFBQSxLQUFLLENBQUMrRCxLQUFOLEdBQWMsRUFBZDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTdEMsZUFBVCxHQUEyQjtBQUN6QixXQUFPekIsS0FBSyxDQUFDK0QsS0FBTixDQUFZTyxNQUFaLENBQW1CLFVBQUNDLEdBQUQsRUFBTUMsU0FBTixFQUFvQjtBQUM1Q0QsTUFBQUEsR0FBRyxDQUFDRSxJQUFKLENBQVNELFNBQVMsQ0FBQzlDLFdBQVYsRUFBVDtBQUNBLGFBQU82QyxHQUFQO0FBQ0QsS0FITSxFQUdKLEVBSEksQ0FBUDtBQUlEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0csS0FBVCxDQUFlQyxHQUFmLEVBQW9CO0FBQ2xCLFdBQU9BLEdBQUcsSUFBSSxDQUFQLElBQVlBLEdBQUcsR0FBRzNFLEtBQUssQ0FBQzhELElBQS9CO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2pDLG1CQUFULENBQTZCWCxNQUE3QixFQUFxQztBQUNuQyxRQUFNYSxNQUFNLEdBQUcsRUFBZjtBQUNBLFFBQU1xQyxJQUFJLEdBQUc3QyxPQUFPLENBQUNMLE1BQUQsQ0FBcEI7O0FBQ0EscUJBQXVCa0QsSUFBSSxDQUFDUSxJQUFMLEVBQXZCO0FBQUE7QUFBQSxRQUFPQyxLQUFQO0FBQUEsUUFBY0MsS0FBZDs7QUFDQSxxQkFBdUJWLElBQUksQ0FBQ1csSUFBTCxFQUF2QjtBQUFBO0FBQUEsUUFBT0MsS0FBUDtBQUFBLFFBQWNDLEtBQWQ7O0FBQ0EsUUFBSUMsS0FBSjtBQUNBLFFBQUlDLEtBQUo7QUFDQSxRQUFJQyxLQUFKO0FBQ0EsUUFBSUMsS0FBSjs7QUFDQSxRQUFJakIsSUFBSSxDQUFDa0IsWUFBTCxFQUFKLEVBQXlCO0FBQUEsd0JBQ05sQixJQUFJLENBQUNRLElBQUwsRUFETTs7QUFBQTs7QUFDdEJNLE1BQUFBLEtBRHNCO0FBQ2ZDLE1BQUFBLEtBRGU7O0FBQUEsd0JBRU5mLElBQUksQ0FBQ1csSUFBTCxFQUZNOztBQUFBOztBQUV0QkssTUFBQUEsS0FGc0I7QUFFZkMsTUFBQUEsS0FGZTtBQUd4QixLQUhELE1BR087QUFBQSx3QkFDWWpCLElBQUksQ0FBQ1csSUFBTCxFQURaOztBQUFBOztBQUNKRyxNQUFBQSxLQURJO0FBQ0dDLE1BQUFBLEtBREg7O0FBQUEsd0JBRVlmLElBQUksQ0FBQ1EsSUFBTCxFQUZaOztBQUFBOztBQUVKUSxNQUFBQSxLQUZJO0FBRUdDLE1BQUFBLEtBRkg7QUFHTjs7QUFDRCxRQUFJUixLQUFLLEdBQUcsQ0FBUixJQUFhLENBQWpCLEVBQW9CO0FBQ2xCLFdBQUssSUFBSVUsQ0FBQyxHQUFHVCxLQUFLLEdBQUcsQ0FBckIsRUFBd0JTLENBQUMsSUFBSUYsS0FBSyxHQUFHLENBQXJDLEVBQXdDRSxDQUFDLElBQUksQ0FBN0MsRUFBZ0Q7QUFDOUMsWUFBSWIsS0FBSyxDQUFDYSxDQUFELENBQVQsRUFBY3hELE1BQU0sQ0FBQzBDLElBQVAsQ0FBWSxDQUFDSSxLQUFLLEdBQUcsQ0FBVCxFQUFZVSxDQUFaLENBQVo7QUFDZjtBQUNGOztBQUNELFFBQUlMLEtBQUssR0FBRyxDQUFSLEdBQVlsRixLQUFLLENBQUM4RCxJQUF0QixFQUE0QjtBQUMxQixXQUFLLElBQUl5QixFQUFDLEdBQUdKLEtBQUssR0FBRyxDQUFyQixFQUF3QkksRUFBQyxJQUFJTixLQUFLLEdBQUcsQ0FBckMsRUFBd0NNLEVBQUMsSUFBSSxDQUE3QyxFQUFnRDtBQUM5QyxZQUFJYixLQUFLLENBQUNhLEVBQUQsQ0FBVCxFQUFjeEQsTUFBTSxDQUFDMEMsSUFBUCxDQUFZLENBQUNTLEtBQUssR0FBRyxDQUFULEVBQVlLLEVBQVosQ0FBWjtBQUNmO0FBQ0Y7O0FBQ0QsUUFBSVQsS0FBSyxHQUFHLENBQVIsSUFBYSxDQUFqQixFQUFvQjtBQUNsQixXQUFLLElBQUlTLEdBQUMsR0FBR1YsS0FBYixFQUFvQlUsR0FBQyxJQUFJTCxLQUF6QixFQUFnQ0ssR0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDeEQsUUFBQUEsTUFBTSxDQUFDMEMsSUFBUCxDQUFZLENBQUNjLEdBQUQsRUFBSVQsS0FBSyxHQUFHLENBQVosQ0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsUUFBSU8sS0FBSyxHQUFHLENBQVIsR0FBWXJGLEtBQUssQ0FBQzhELElBQXRCLEVBQTRCO0FBQzFCLFdBQUssSUFBSXlCLEdBQUMsR0FBR0gsS0FBYixFQUFvQkcsR0FBQyxJQUFJUCxLQUF6QixFQUFnQ08sR0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDeEQsUUFBQUEsTUFBTSxDQUFDMEMsSUFBUCxDQUFZLENBQUNjLEdBQUQsRUFBSUYsS0FBSyxHQUFHLENBQVosQ0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT3RELE1BQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTeUQsVUFBVCxHQUFzQjtBQUNwQixTQUFLLElBQUkxRSxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHZCxLQUFLLENBQUM4RCxJQUE5QixFQUFvQ2hELEdBQUcsSUFBSSxDQUEzQyxFQUE4QztBQUM1QyxXQUFLLElBQUlDLE1BQU0sR0FBRyxDQUFsQixFQUFxQkEsTUFBTSxHQUFHZixLQUFLLENBQUM4RCxJQUFwQyxFQUEwQy9DLE1BQU0sSUFBSSxDQUFwRCxFQUF1RDtBQUNyRGYsUUFBQUEsS0FBSyxDQUFDa0UsTUFBTixDQUFhTyxJQUFiLFdBQXFCM0QsR0FBckIsY0FBNEJDLE1BQTVCO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVMwRSxnQkFBVCxDQUEwQkMsV0FBMUIsRUFBdUM7QUFDckMsUUFBTUMsS0FBSyxHQUFHM0YsS0FBSyxDQUFDa0UsTUFBTixDQUFhMEIsU0FBYixDQUF1QixVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxLQUFLSCxXQUEzQjtBQUFBLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2xCM0YsSUFBQUEsS0FBSyxDQUFDa0UsTUFBTixDQUFhNEIsTUFBYixDQUFvQkgsS0FBcEIsRUFBMkIsQ0FBM0I7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTSSxTQUFULENBQW1CQyxTQUFuQixFQUE4QkMsT0FBOUIsRUFBdUNDLE9BQXZDLEVBQWdEO0FBQzlDLDBCQUE4QkYsU0FBUyxDQUFDcEIsSUFBVixFQUE5QjtBQUFBO0FBQUEsUUFBT3VCLE9BQVA7QUFBQSxRQUFnQkMsVUFBaEI7O0FBQ0EsMEJBQThCSixTQUFTLENBQUNqQixJQUFWLEVBQTlCO0FBQUE7QUFBQSxRQUFPc0IsT0FBUDtBQUFBLFFBQWdCQyxVQUFoQjs7QUFDQSxRQUFNQyxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWU4sT0FBTyxHQUFHLENBQXRCLENBQXhCO0FBQ0EsUUFBTU8sa0JBQWtCLEdBQUdGLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWUwsVUFBVSxHQUFHLENBQXpCLENBQTNCO0FBQ0EsUUFBTU8sYUFBYSxHQUFHSCxJQUFJLENBQUNJLEdBQUwsQ0FBUzVHLEtBQUssQ0FBQzhELElBQU4sR0FBYSxDQUF0QixFQUF5QnVDLE9BQU8sR0FBRyxDQUFuQyxDQUF0QjtBQUNBLFFBQU1RLGdCQUFnQixHQUFHTCxJQUFJLENBQUNJLEdBQUwsQ0FBUzVHLEtBQUssQ0FBQzhELElBQU4sR0FBYSxDQUF0QixFQUF5QndDLFVBQVUsR0FBRyxDQUF0QyxDQUF6Qjs7QUFDQSxRQUFJTCxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWFDLE9BQU8sQ0FBQyxDQUFELENBQXBCLEtBQTRCLENBQWhDLEVBQW1DO0FBQUU7QUFDbkMsVUFBSUQsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhTSxlQUFiLElBQWdDTixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWFVLGFBQWpELEVBQWdFLE9BQU8sS0FBUDtBQUNoRSxVQUFJVCxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWFRLGtCQUFiLElBQW1DVCxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWFZLGdCQUFwRCxFQUFzRSxPQUFPLEtBQVA7QUFDdEUsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsUUFBSVosT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhUyxrQkFBYixJQUFtQ1QsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhWSxnQkFBcEQsRUFBc0UsT0FBTyxLQUFQO0FBQ3RFLFFBQUlYLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYUssZUFBYixJQUFnQ04sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhVSxhQUFqRCxFQUFnRSxPQUFPLEtBQVA7QUFDaEUsV0FBTyxJQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0csU0FBVCxDQUFtQmhHLEdBQW5CLEVBQXdCQyxNQUF4QixFQUFnQ3FELElBQWhDLEVBQXNDO0FBQ3BDO0FBQ0EsUUFBSXRELEdBQUcsR0FBRyxDQUFOLElBQ0NBLEdBQUcsSUFBSWQsS0FBSyxDQUFDOEQsSUFEZCxJQUVDL0MsTUFBTSxHQUFHLENBRlYsSUFHQ0EsTUFBTSxJQUFJZixLQUFLLENBQUM4RCxJQUhyQixFQUcyQjtBQUN6QixhQUFPLEtBQVA7QUFDRCxLQVBtQyxDQVFwQzs7O0FBQ0EsUUFBTXVDLE9BQU8sR0FBSWpDLElBQUksQ0FBQ2tCLFlBQUwsRUFBRCxHQUF3QnhFLEdBQXhCLEdBQStCQSxHQUFHLEdBQUdzRCxJQUFJLENBQUNOLElBQUwsRUFBTixHQUFvQixDQUFuRTtBQUNBLFFBQU13QyxVQUFVLEdBQUlsQyxJQUFJLENBQUNrQixZQUFMLEVBQUQsR0FBeUJ2RSxNQUFNLEdBQUdxRCxJQUFJLENBQUNOLElBQUwsRUFBVCxHQUF1QixDQUFoRCxHQUFxRC9DLE1BQXhFOztBQUNBLFFBQUlzRixPQUFPLEdBQUcsQ0FBVixJQUNDQSxPQUFPLElBQUlyRyxLQUFLLENBQUM4RCxJQURsQixJQUVDd0MsVUFBVSxHQUFHLENBRmQsSUFHQ0EsVUFBVSxJQUFJdEcsS0FBSyxDQUFDOEQsSUFIekIsRUFHK0I7QUFDN0IsYUFBTyxLQUFQO0FBQ0QsS0FoQm1DLENBaUJwQzs7O0FBQ0EsUUFBTW1DLE9BQU8sR0FBRyxDQUFDbkYsR0FBRCxFQUFNQyxNQUFOLENBQWhCO0FBQ0EsUUFBTW1GLE9BQU8sR0FBRyxDQUFDRyxPQUFELEVBQVVDLFVBQVYsQ0FBaEI7QUFDQSxRQUFJdEcsS0FBSyxDQUFDK0QsS0FBTixDQUFZZ0QsSUFBWixDQUFpQixVQUFDZixTQUFEO0FBQUEsYUFBZUQsU0FBUyxDQUFDQyxTQUFELEVBQVlDLE9BQVosRUFBcUJDLE9BQXJCLENBQXhCO0FBQUEsS0FBakIsQ0FBSixFQUE2RSxPQUFPLEtBQVA7QUFDN0UsV0FBTyxJQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2MsT0FBVCxDQUFpQmxHLEdBQWpCLEVBQXNCQyxNQUF0QixFQUE4QnFELElBQTlCLEVBQW9DO0FBQ2xDQSxJQUFBQSxJQUFJLENBQUM2QyxHQUFMLENBQVNuRyxHQUFULEVBQWNDLE1BQWQ7QUFDQWYsSUFBQUEsS0FBSyxDQUFDK0QsS0FBTixDQUFZVSxJQUFaLENBQWlCTCxJQUFqQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVM4QyxVQUFULENBQW9COUMsSUFBcEIsRUFBMEI7QUFDeEIsUUFBTXVCLEtBQUssR0FBRzNGLEtBQUssQ0FBQytELEtBQU4sQ0FBWTZCLFNBQVosQ0FBc0IsVUFBQ3BCLFNBQUQ7QUFBQSxhQUFlQSxTQUFTLENBQUN6RSxFQUFWLE9BQW1CcUUsSUFBSSxDQUFDckUsRUFBTCxFQUFsQztBQUFBLEtBQXRCLENBQWQ7QUFDQSxRQUFJNEYsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNsQjNGLElBQUFBLEtBQUssQ0FBQytELEtBQU4sQ0FBWStCLE1BQVosQ0FBbUJILEtBQW5CLEVBQTBCLENBQTFCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTd0IsZUFBVCxDQUF5Qi9DLElBQXpCLEVBQStCO0FBQzdCOEMsSUFBQUEsVUFBVSxDQUFDOUMsSUFBRCxDQUFWO0FBQ0FBLElBQUFBLElBQUksQ0FBQ2dELGVBQUw7O0FBQ0EsUUFBSU4sU0FBUyxNQUFULDhGQUFhMUMsSUFBSSxDQUFDUSxJQUFMLEVBQWIsVUFBMEJSLElBQTFCLEdBQUosRUFBcUM7QUFDbkM0QyxNQUFBQSxPQUFPLE1BQVAsOEZBQVc1QyxJQUFJLENBQUNRLElBQUwsRUFBWCxVQUF3QlIsSUFBeEI7QUFDQSxhQUFPLElBQVA7QUFDRCxLQU40QixDQU83Qjs7O0FBQ0FBLElBQUFBLElBQUksQ0FBQ2dELGVBQUwsR0FSNkIsQ0FRTDs7QUFDeEJKLElBQUFBLE9BQU8sTUFBUCw4RkFBVzVDLElBQUksQ0FBQ1EsSUFBTCxFQUFYLFVBQXdCUixJQUF4QixJQVQ2QixDQVNFOztBQUMvQixXQUFPLEtBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2lELGFBQVQsQ0FBdUJDLFNBQXZCLEVBQWtDQyxTQUFsQyxFQUE2QztBQUMzQyxXQUFRRCxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCQyxTQUFTLENBQUMsQ0FBRCxDQUEzQixJQUFvQ0QsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQkMsU0FBUyxDQUFDLENBQUQsQ0FBckU7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0MsVUFBVCxDQUFvQjFHLEdBQXBCLEVBQXlCQyxNQUF6QixFQUFpQztBQUMvQixXQUFPZixLQUFLLENBQUNnRSxJQUFOLENBQVcrQyxJQUFYLENBQWdCLFVBQUNVLEdBQUQ7QUFBQSxhQUFTSixhQUFhLENBQUNJLEdBQUQsRUFBTSxDQUFDM0csR0FBRCxFQUFNQyxNQUFOLENBQU4sQ0FBdEI7QUFBQSxLQUFoQixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBUzJHLGFBQVQsQ0FBdUI1RyxHQUF2QixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDbEMsV0FBT2YsS0FBSyxDQUFDaUUsTUFBTixDQUFhOEMsSUFBYixDQUFrQixVQUFDWSxJQUFEO0FBQUEsYUFBVU4sYUFBYSxDQUFDTSxJQUFELEVBQU8sQ0FBQzdHLEdBQUQsRUFBTUMsTUFBTixDQUFQLENBQXZCO0FBQUEsS0FBbEIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTQyxtQkFBVCxDQUE2QkYsR0FBN0IsRUFBa0NDLE1BQWxDLEVBQTBDO0FBQ3hDLFdBQU95RyxVQUFVLENBQUMxRyxHQUFELEVBQU1DLE1BQU4sQ0FBVixJQUEyQjJHLGFBQWEsQ0FBQzVHLEdBQUQsRUFBTUMsTUFBTixDQUEvQztBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBUzZHLFVBQVQsQ0FBb0I5RyxHQUFwQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0IsUUFBSTBHLEdBQUcsR0FBRyxDQUFDLENBQVg7QUFDQXpILElBQUFBLEtBQUssQ0FBQytELEtBQU4sQ0FBWTdCLE9BQVosQ0FBb0IsVUFBQ3NDLFNBQUQsRUFBZTtBQUNqQyxVQUFJQSxTQUFTLENBQUNpRCxHQUFWLENBQWMzRyxHQUFkLEVBQW1CQyxNQUFuQixDQUFKLEVBQWdDMEcsR0FBRyxHQUFHakQsU0FBUyxDQUFDekUsRUFBVixFQUFOO0FBQ2pDLEtBRkQ7QUFHQSxXQUFPMEgsR0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVN4SCxVQUFULENBQW9CYSxHQUFwQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0IsV0FBT2YsS0FBSyxDQUFDK0QsS0FBTixDQUFZZ0QsSUFBWixDQUFpQixVQUFDdkMsU0FBRDtBQUFBLGFBQWVBLFNBQVMsQ0FBQ3FELE1BQVYsQ0FBaUIvRyxHQUFqQixFQUFzQkMsTUFBdEIsQ0FBZjtBQUFBLEtBQWpCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTSSxhQUFULENBQXVCTCxHQUF2QixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDbEMsUUFBTStHLE1BQU0sR0FBRyxDQUFDaEgsR0FBRCxFQUFNQyxNQUFOLENBQWYsQ0FEa0MsQ0FFbEM7O0FBQ0EsUUFBSUMsbUJBQW1CLE1BQW5CLFNBQXVCOEcsTUFBdkIsQ0FBSixFQUFvQyxPQUFPN0csU0FBUDtBQUNwQyxRQUFNd0csR0FBRyxHQUFHRyxVQUFVLENBQUM5RyxHQUFELEVBQU1DLE1BQU4sQ0FBdEI7O0FBQ0EsUUFBSTBHLEdBQUcsS0FBSyxDQUFDLENBQWIsRUFBZ0I7QUFDZHpILE1BQUFBLEtBQUssQ0FBQ2dFLElBQU4sQ0FBV1MsSUFBWCxDQUFnQnFELE1BQWhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0w5SCxNQUFBQSxLQUFLLENBQUNpRSxNQUFOLENBQWFRLElBQWIsQ0FBa0JxRCxNQUFsQjtBQUNEOztBQUNEckMsSUFBQUEsZ0JBQWdCLFdBQUkzRSxHQUFKLGNBQVdDLE1BQVgsRUFBaEI7QUFDQSxXQUFPMEcsR0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVNyRixPQUFULEdBQW1CO0FBQ2pCLFdBQU9wQyxLQUFLLENBQUMrRCxLQUFOLENBQVlnRSxLQUFaLENBQWtCLFVBQUN2RCxTQUFEO0FBQUEsYUFBZUEsU0FBUyxDQUFDaEQsTUFBVixFQUFmO0FBQUEsS0FBbEIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRWdFLEVBQUFBLFVBQVU7QUFFVjtBQUNGO0FBQ0E7O0FBQ0UsTUFBTXdDLEdBQUcsR0FBRztBQUNWbEUsSUFBQUEsSUFBSSxFQUFKQSxJQURVO0FBRVZJLElBQUFBLE1BQU0sRUFBTkEsTUFGVTtBQUdWM0MsSUFBQUEsT0FBTyxFQUFQQSxPQUhVO0FBSVY4QyxJQUFBQSxTQUFTLEVBQVRBLFNBSlU7QUFLVjFCLElBQUFBLFVBQVUsRUFBVkEsVUFMVTtBQU1WbEIsSUFBQUEsZUFBZSxFQUFmQSxlQU5VO0FBT1ZJLElBQUFBLG1CQUFtQixFQUFuQkEsbUJBUFU7QUFRVmlGLElBQUFBLFNBQVMsRUFBVEEsU0FSVTtBQVNWRSxJQUFBQSxPQUFPLEVBQVBBLE9BVFU7QUFVVkUsSUFBQUEsVUFBVSxFQUFWQSxVQVZVO0FBV1ZDLElBQUFBLGVBQWUsRUFBZkEsZUFYVTtBQVlWSyxJQUFBQSxVQUFVLEVBQVZBLFVBWlU7QUFhVkUsSUFBQUEsYUFBYSxFQUFiQSxhQWJVO0FBY1YxRyxJQUFBQSxtQkFBbUIsRUFBbkJBLG1CQWRVO0FBZVZmLElBQUFBLFVBQVUsRUFBVkEsVUFmVTtBQWdCVmtCLElBQUFBLGFBQWEsRUFBYkEsYUFoQlU7QUFpQlZpQixJQUFBQSxPQUFPLEVBQVBBO0FBakJVLEdBQVo7QUFvQkE7QUFDRjtBQUNBOztBQUNFLE1BQUl3QixTQUFKLEVBQWU7QUFDYm9FLElBQUFBLEdBQUcsQ0FBQ2hJLEtBQUosR0FBWUEsS0FBWjtBQUNEOztBQUVELDJCQUNLZ0ksR0FETDtBQUdELENBblhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFRQSxJQUFJcEUsU0FBSixFQUNBOztBQUNBQSxTQUFTLEdBQUcsSUFBWixFQUFrQjs7QUFFbEIsaUVBQWUsQ0FBQyxZQUFNO0FBQ3BCLE1BQU05RCxrQkFBa0IsR0FBRyxFQUEzQixDQURvQixDQUNXO0FBQy9COztBQUNBLE1BQU1zSSxjQUFjLEdBQUcsQ0FDckI7QUFDQSxHQUFDLFNBQUQsRUFBWSxDQUFaLENBRnFCLEVBR3JCLENBQUMsWUFBRCxFQUFlLENBQWYsQ0FIcUIsRUFJckIsQ0FBQyxTQUFELEVBQVksQ0FBWixDQUpxQixFQUtyQixDQUFDLFdBQUQsRUFBYyxDQUFkLENBTHFCLEVBTXJCLENBQUMsV0FBRCxFQUFjLENBQWQsQ0FOcUIsQ0FBdkI7QUFTQTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUNFLE1BQU1DLElBQUksR0FBRyxFQUFiO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxXQUFTQyxNQUFULENBQWdCN0IsR0FBaEIsRUFBcUI7QUFDbkIsV0FBT0QsSUFBSSxDQUFDK0IsS0FBTCxDQUFXL0IsSUFBSSxDQUFDOEIsTUFBTCxLQUFnQjdCLEdBQTNCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVMrQixjQUFULENBQXdCMUUsSUFBeEIsRUFBOEI7QUFDNUIsV0FBTyxDQUFDd0UsTUFBTSxDQUFDeEUsSUFBRCxDQUFQLEVBQWV3RSxNQUFNLENBQUN4RSxJQUFELENBQXJCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTbEIsYUFBVCxDQUF1QjVDLEtBQXZCLEVBQThCO0FBQzVCb0ksSUFBQUEsY0FBYyxDQUFDbEcsT0FBZixDQUF1QixVQUFDdUcsUUFBRCxFQUFjO0FBQ25DLFVBQU1yRSxJQUFJLEdBQUc2RCxtREFBQSw4RkFBUVEsUUFBUixFQUFiO0FBQ0EsVUFBSUgsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjLENBQWxCLEVBQXFCbEUsSUFBSSxDQUFDZ0QsZUFBTDtBQUNyQixVQUFJdkIsUUFBUSxHQUFHMkMsY0FBYyxDQUFDeEksS0FBSyxDQUFDOEQsSUFBTixFQUFELENBQTdCOztBQUNBLGFBQU8sQ0FBQzlELEtBQUssQ0FBQzhHLFNBQU4sT0FBQTlHLEtBQUssdUZBQWM2RixRQUFkLFVBQXdCekIsSUFBeEIsR0FBYixFQUE0QztBQUMxQ3lCLFFBQUFBLFFBQVEsR0FBRzJDLGNBQWMsQ0FBQ3hJLEtBQUssQ0FBQzhELElBQU4sRUFBRCxDQUF6QjtBQUNEOztBQUNEOUQsTUFBQUEsS0FBSyxDQUFDZ0gsT0FBTixPQUFBaEgsS0FBSyx1RkFBWTZGLFFBQVosVUFBc0J6QixJQUF0QixHQUFMO0FBQ0QsS0FSRDtBQVNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVMvRCxPQUFULEdBQW1CO0FBQ2pCLFdBQU9nSSxJQUFJLENBQUNoSSxPQUFaO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTVixNQUFULENBQWdCSSxFQUFoQixFQUFvQjtBQUNsQixXQUFPc0ksSUFBSSxDQUFDaEksT0FBTCxDQUFhOEQsSUFBYixDQUFrQixVQUFDdUUsU0FBRDtBQUFBLGFBQWVBLFNBQVMsQ0FBQzNJLEVBQVYsT0FBbUJBLEVBQWxDO0FBQUEsS0FBbEIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVNzQixhQUFULEdBQXlCO0FBQ3ZCLFdBQU9nSCxJQUFJLENBQUNoSSxPQUFMLENBQWFnSSxJQUFJLENBQUNoSCxhQUFsQixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVM5QixvQkFBVCxDQUE4QkMsV0FBOUIsRUFBMkNDLFdBQTNDLEVBQXdEO0FBQ3RENEksSUFBQUEsSUFBSSxDQUFDaEksT0FBTCxHQUFlLEVBQWY7QUFDQSxRQUFNc0ksV0FBVyxHQUFHLENBQUNuSixXQUFELEVBQWNDLFdBQWQsQ0FBcEI7O0FBQ0EsU0FBSyxJQUFJOEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR29ELFdBQVcsQ0FBQ3JJLE1BQWhDLEVBQXdDaUYsQ0FBQyxJQUFJLENBQTdDLEVBQWdEO0FBQzlDLFVBQU1xRCxTQUFTLEdBQUdULG1EQUFNLENBQUM1QyxDQUFELEVBQUkyQyxrREFBSyxDQUFDcEksa0JBQUQsQ0FBVCxFQUErQjZJLFdBQVcsQ0FBQ3BELENBQUQsQ0FBMUMsQ0FBeEI7QUFDQTNDLE1BQUFBLGFBQWEsQ0FBQ2dHLFNBQVMsQ0FBQzVJLEtBQVYsRUFBRCxDQUFiO0FBQ0FxSSxNQUFBQSxJQUFJLENBQUNoSSxPQUFMLENBQWFvRSxJQUFiLENBQWtCbUUsU0FBbEI7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDeEJULElBQUFBLElBQUksQ0FBQ2hJLE9BQUwsQ0FBYSxDQUFiLElBQWtCOEgsbURBQU0sQ0FBQyxDQUFELEVBQUlELGtEQUFLLENBQUNwSSxrQkFBRCxDQUFULEVBQStCZix1Q0FBL0IsRUFBbUMrSixLQUFuQyxDQUF4QjtBQUNBbEcsSUFBQUEsYUFBYSxDQUFDeUYsSUFBSSxDQUFDaEksT0FBTCxDQUFhLENBQWIsRUFBZ0JMLEtBQWhCLEVBQUQsQ0FBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTK0ksWUFBVCxHQUF3QjtBQUN0QlYsSUFBQUEsSUFBSSxDQUFDaEksT0FBTCxDQUFhLENBQWIsSUFBa0I4SCxtREFBTSxDQUFDLENBQUQsRUFBSUQsa0RBQUssQ0FBQ3BJLGtCQUFELENBQVQsRUFBK0JkLDBDQUEvQixDQUF4QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVNnSyxTQUFULEdBQXFCO0FBQ25CLFdBQU8sQ0FBQ1gsSUFBSSxDQUFDaEgsYUFBTCxHQUFxQixDQUF0QixJQUEyQmdILElBQUksQ0FBQ2hJLE9BQUwsQ0FBYUMsTUFBL0M7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2lDLFFBQVQsQ0FBa0IwRyxnQkFBbEIsRUFBb0NDLHdCQUFwQyxFQUE4RDtBQUM1RCxRQUFJRCxnQkFBSixFQUFzQlosSUFBSSxDQUFDaEgsYUFBTCxHQUFxQjJILFNBQVMsRUFBOUI7QUFDdEIsUUFBTUcsVUFBVSxHQUFHZCxJQUFJLENBQUNoSSxPQUFMLENBQWFnSSxJQUFJLENBQUNoSCxhQUFsQixDQUFuQjtBQUNBLFFBQUksQ0FBQzhILFVBQVUsQ0FBQ0MsSUFBWCxFQUFMLEVBQXdCLE9BSG9DLENBRzVCOztBQUNoQyxRQUFNQyxRQUFRLEdBQUdoQixJQUFJLENBQUNoSSxPQUFMLENBQWEySSxTQUFTLEVBQXRCLENBQWpCO0FBQ0EsUUFBTWxCLE1BQU0sR0FBR3FCLFVBQVUsQ0FBQ0csTUFBWCxDQUFrQkQsUUFBUSxDQUFDckosS0FBVCxFQUFsQixDQUFmLENBTDRELENBS1I7O0FBQ3BELFFBQUk4SCxNQUFKLEVBQVk7QUFBRTtBQUNab0IsTUFBQUEsd0JBQXdCLE1BQXhCLDhGQUE0QnBCLE1BQTVCLFVBQW9DdUIsUUFBUSxDQUFDdEosRUFBVCxFQUFwQztBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTbUQsS0FBVCxHQUFpQjtBQUNmO0FBQ0EsUUFBSW1GLElBQUksQ0FBQ2hJLE9BQUwsQ0FBYTBHLElBQWIsQ0FBa0IsVUFBQzJCLFNBQUQ7QUFBQSxhQUFlQSxTQUFTLENBQUMxSSxLQUFWLEdBQWtCcUUsU0FBbEIsT0FDN0IrRCxjQUFjLENBQUM5SCxNQUREO0FBQUEsS0FBbEIsQ0FBSixFQUNnQztBQUM5QixhQUFPLEtBQVA7QUFDRCxLQUxjLENBTWY7QUFDQTs7O0FBQ0ErSCxJQUFBQSxJQUFJLENBQUNoSCxhQUFMLEdBQXFCZ0gsSUFBSSxDQUFDaEksT0FBTCxDQUFhQyxNQUFiLEdBQXNCLENBQTNDO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBTTBILEdBQUcsR0FBRztBQUNWbEksSUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFEVTtBQUVWTyxJQUFBQSxPQUFPLEVBQVBBLE9BRlU7QUFHVlYsSUFBQUEsTUFBTSxFQUFOQSxNQUhVO0FBSVYwQixJQUFBQSxhQUFhLEVBQWJBLGFBSlU7QUFLVnVCLElBQUFBLGFBQWEsRUFBYkEsYUFMVTtBQU1WTCxJQUFBQSxRQUFRLEVBQVJBLFFBTlU7QUFPVmhELElBQUFBLG9CQUFvQixFQUFwQkEsb0JBUFU7QUFRVnNKLElBQUFBLFNBQVMsRUFBVEEsU0FSVTtBQVNWRSxJQUFBQSxZQUFZLEVBQVpBLFlBVFU7QUFVVjdGLElBQUFBLEtBQUssRUFBTEE7QUFWVSxHQUFaOztBQWFBLE1BQUlVLFNBQUosRUFBZTtBQUNib0UsSUFBQUEsR0FBRyxDQUFDSyxJQUFKLEdBQVdBLElBQVg7QUFDRDs7QUFFRCwyQkFDS0wsR0FETDtBQUdELENBekxjLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNakosRUFBRSxHQUFHd0ssTUFBTSxDQUFDLElBQUQsQ0FBakI7QUFDQSxJQUFNdkssS0FBSyxHQUFHdUssTUFBTSxDQUFDLE9BQUQsQ0FBcEI7QUFFUDtBQUNBO0FBQ0E7O0FBQ08sSUFBTXRLLElBQUksR0FBR3NLLE1BQU0sQ0FBQyxPQUFELENBQW5CO0FBQ0EsSUFBTXJLLE1BQU0sR0FBR3FLLE1BQU0sQ0FBQyxRQUFELENBQXJCO0FBQ0EsSUFBTXBLLElBQUksR0FBR29LLE1BQU0sQ0FBQyxNQUFELENBQW5CO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGlFQUFlLFVBQUNDLElBQUQsRUFBT0MsT0FBUCxFQUFnQkMsTUFBaEIsRUFBd0JDLE9BQXhCLEVBQW9DO0FBQ2pEO0FBQ0Y7QUFDQTtBQUNFLE1BQU1oSyxNQUFNLEdBQUc7QUFDYkksSUFBQUEsRUFBRSxFQUFFeUosSUFEUztBQUViSSxJQUFBQSxJQUFJLEVBQUVGLE1BRk87QUFHYjFKLElBQUFBLEtBQUssRUFBRXlKLE9BSE07QUFJYkksSUFBQUEsT0FBTyxFQUFFLEVBSkksQ0FJQTs7QUFKQSxHQUFmOztBQU9BLE1BQUlsSyxNQUFNLENBQUNpSyxJQUFQLEtBQWdCN0ssRUFBcEIsRUFBd0I7QUFDdEJZLElBQUFBLE1BQU0sQ0FBQ21KLEtBQVAsR0FBZWEsT0FBTyxJQUFJekssTUFBMUIsQ0FEc0IsQ0FDWTtBQUNuQztBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTYSxFQUFULEdBQWM7QUFDWixXQUFPSixNQUFNLENBQUNJLEVBQWQ7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTcUosSUFBVCxHQUFnQjtBQUNkLFdBQU96SixNQUFNLENBQUNpSyxJQUFQLEtBQWdCN0ssRUFBdkI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTK0ssT0FBVCxHQUFtQjtBQUNqQixRQUFJbkssTUFBTSxDQUFDaUssSUFBUCxLQUFnQjdLLEVBQXBCLEVBQXdCLE9BQU9rQyxTQUFQO0FBQ3hCLFdBQU90QixNQUFNLENBQUNtSixLQUFkO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2lCLFVBQVQsQ0FBb0JqQixLQUFwQixFQUEyQjtBQUN6QixRQUFJbkosTUFBTSxDQUFDaUssSUFBUCxLQUFnQjdLLEVBQXBCLEVBQXdCO0FBQ3hCWSxJQUFBQSxNQUFNLENBQUNtSixLQUFQLEdBQWVBLEtBQWY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTOUksS0FBVCxHQUFpQjtBQUNmLFdBQU9MLE1BQU0sQ0FBQ0ssS0FBZDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2dLLFlBQVQsQ0FBc0JDLGFBQXRCLEVBQXFDO0FBQ25DLFFBQUlBLGFBQWEsQ0FBQy9GLE1BQWQsR0FBdUI1RCxNQUF2QixLQUFrQyxDQUF0QyxFQUF5QyxPQUFPVyxTQUFQO0FBQ3pDLFFBQU0wRSxLQUFLLEdBQUdhLElBQUksQ0FBQytCLEtBQUwsQ0FBVy9CLElBQUksQ0FBQzhCLE1BQUwsS0FBZ0IyQixhQUFhLENBQUMvRixNQUFkLEdBQXVCNUQsTUFBbEQsQ0FBZDtBQUNBLFFBQU00SixHQUFHLEdBQUdELGFBQWEsQ0FBQy9GLE1BQWQsR0FBdUJ5QixLQUF2QixDQUFaOztBQUNBLHFCQUE0QnVFLEdBQUcsQ0FBQ0MsS0FBSixDQUFVLEdBQVYsQ0FBNUI7QUFBQTtBQUFBLFFBQU9DLE1BQVA7QUFBQSxRQUFlQyxTQUFmOztBQUNBLFdBQU8sQ0FBQ0MsUUFBUSxDQUFDRixNQUFELEVBQVMsRUFBVCxDQUFULEVBQXVCRSxRQUFRLENBQUNELFNBQUQsRUFBWSxFQUFaLENBQS9CLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNFLFFBQVQsQ0FBa0J6SixHQUFsQixFQUF1QkMsTUFBdkIsRUFBK0I7QUFDN0IsV0FBT3BCLE1BQU0sQ0FBQ2tLLE9BQVAsQ0FBZXZGLE1BQWYsQ0FBc0IsVUFBQ2tHLElBQUQsRUFBTy9DLEdBQVAsRUFBZTtBQUMxQyxVQUFNZ0QsQ0FBQyxHQUFHakUsSUFBSSxDQUFDa0UsR0FBTCxDQUFTNUosR0FBRyxHQUFHMkcsR0FBRyxDQUFDLENBQUQsQ0FBbEIsQ0FBVjtBQUNBLFVBQU1rRCxDQUFDLEdBQUduRSxJQUFJLENBQUNrRSxHQUFMLENBQVMzSixNQUFNLEdBQUcwRyxHQUFHLENBQUMsQ0FBRCxDQUFyQixDQUFWO0FBQ0EsYUFBTytDLElBQUksR0FBR0csQ0FBUCxHQUFXRixDQUFsQjtBQUNELEtBSk0sRUFJSixDQUpJLENBQVA7QUFLRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTRyxZQUFULENBQXNCWCxhQUF0QixFQUFxQztBQUNuQyxRQUFJQSxhQUFhLENBQUMvRixNQUFkLEdBQXVCNUQsTUFBdkIsS0FBa0MsQ0FBdEMsRUFBeUMsT0FBT1csU0FBUDtBQUN6QyxRQUFJdEIsTUFBTSxDQUFDa0ssT0FBUCxDQUFldkosTUFBZixLQUEwQixDQUE5QixFQUFpQyxPQUFPMEosWUFBWSxDQUFDQyxhQUFELENBQW5CO0FBQ2pDLFFBQUlZLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxTQUF6QjtBQUNBLFdBQU9kLGFBQWEsQ0FBQy9GLE1BQWQsR0FBdUJJLE1BQXZCLENBQThCLFVBQUNDLEdBQUQsRUFBTTJGLEdBQU4sRUFBYztBQUNqRCx3QkFBNEJBLEdBQUcsQ0FBQ0MsS0FBSixDQUFVLEdBQVYsQ0FBNUI7QUFBQTtBQUFBLFVBQU9DLE1BQVA7QUFBQSxVQUFlQyxTQUFmOztBQUNBLFVBQU12SixHQUFHLEdBQUd3SixRQUFRLENBQUNGLE1BQUQsRUFBUyxFQUFULENBQXBCO0FBQ0EsVUFBTXJKLE1BQU0sR0FBR3VKLFFBQVEsQ0FBQ0QsU0FBRCxFQUFZLEVBQVosQ0FBdkI7QUFDQSxVQUFNRyxJQUFJLEdBQUdELFFBQVEsQ0FBQ3pKLEdBQUQsRUFBTUMsTUFBTixDQUFyQjs7QUFDQSxVQUFJeUosSUFBSSxHQUFHSyxXQUFYLEVBQXdCO0FBQ3RCQSxRQUFBQSxXQUFXLEdBQUdMLElBQWQ7QUFDQSxlQUFPLENBQUMxSixHQUFELEVBQU1DLE1BQU4sQ0FBUDtBQUNEOztBQUNELGFBQU93RCxHQUFQO0FBQ0QsS0FWTSxFQVVKLEVBVkksQ0FBUDtBQVdEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU3lHLFVBQVQsQ0FBb0JmLGFBQXBCLEVBQW1DO0FBQ2pDLFdBQU9ELFlBQVksQ0FBQ0MsYUFBRCxDQUFuQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNYLE1BQVQsQ0FBZ0JXLGFBQWhCLEVBQStCO0FBQzdCLFFBQUl0SyxNQUFNLENBQUNpSyxJQUFQLEtBQWdCN0ssRUFBcEIsRUFBd0I7QUFDdEIsY0FBUVksTUFBTSxDQUFDbUosS0FBZjtBQUNFLGFBQUs3SixJQUFMO0FBQ0UsaUJBQU8rSyxZQUFZLENBQUNDLGFBQUQsQ0FBbkI7O0FBQ0YsYUFBSy9LLE1BQUw7QUFDRSxpQkFBTzBMLFlBQVksQ0FBQ1gsYUFBRCxDQUFuQjs7QUFDRixhQUFLOUssSUFBTDtBQUNFLGlCQUFPNkwsVUFBVSxDQUFDZixhQUFELENBQWpCOztBQUNGO0FBQ0UsaUJBQU9ELFlBQVksQ0FBQ0MsYUFBRCxDQUFuQjtBQVJKO0FBVUQ7O0FBQ0QsV0FBT2hKLFNBQVAsQ0FiNkIsQ0FhWDtBQUNuQjs7QUFFRCxXQUFTSyxlQUFULENBQXlCUixHQUF6QixFQUE4QkMsTUFBOUIsRUFBc0M7QUFDcENwQixJQUFBQSxNQUFNLENBQUNrSyxPQUFQLENBQWVwRixJQUFmLENBQW9CLENBQUMzRCxHQUFELEVBQU1DLE1BQU4sQ0FBcEI7QUFDRDs7QUFFRCxXQUFTYSxhQUFULENBQXVCSCxlQUF2QixFQUF3QztBQUN0Q0EsSUFBQUEsZUFBZSxDQUFDUyxPQUFoQixDQUF3QixVQUFDQyxVQUFELEVBQWdCO0FBQ3RDLFVBQU13RCxLQUFLLEdBQUdoRyxNQUFNLENBQUNrSyxPQUFQLENBQWVqRSxTQUFmLENBQXlCLFVBQUNxRixLQUFEO0FBQUEsZUFBWUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhOUksVUFBVSxDQUFDLENBQUQsQ0FBeEIsSUFDNUM4SSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWE5SSxVQUFVLENBQUMsQ0FBRCxDQURVO0FBQUEsT0FBekIsQ0FBZDtBQUVBLFVBQUl3RCxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCaEcsTUFBTSxDQUFDa0ssT0FBUCxDQUFlL0QsTUFBZixDQUFzQkgsS0FBdEIsRUFBNkIsQ0FBN0I7QUFDbkIsS0FKRDtBQUtEOztBQUVELFNBQU87QUFDTDVGLElBQUFBLEVBQUUsRUFBRkEsRUFESztBQUVMcUosSUFBQUEsSUFBSSxFQUFKQSxJQUZLO0FBR0xVLElBQUFBLE9BQU8sRUFBUEEsT0FISztBQUlMQyxJQUFBQSxVQUFVLEVBQVZBLFVBSks7QUFLTC9KLElBQUFBLEtBQUssRUFBTEEsS0FMSztBQU1Mc0osSUFBQUEsTUFBTSxFQUFOQSxNQU5LO0FBT0xoSSxJQUFBQSxlQUFlLEVBQWZBLGVBUEs7QUFRTE0sSUFBQUEsYUFBYSxFQUFiQTtBQVJLLEdBQVA7QUFVRCxDQXBLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQ25CVXNKOztBQUhWO0FBQ0E7QUFDQTtBQUNBLFNBQVVBLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ012RixVQUFBQSxLQUROLEdBQ2MsQ0FEZDs7QUFBQTtBQUFBOztBQUFBO0FBR0ksaUJBQU1BLEtBQU47O0FBSEo7QUFJSUEsVUFBQUEsS0FBSyxJQUFJLENBQVQ7QUFKSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLElBQU13RixHQUFHLEdBQUdELFFBQVEsRUFBcEI7QUFDQSxJQUFNRSxVQUFVLEdBQUc3QixNQUFNLENBQUMsWUFBRCxDQUF6QjtBQUNBLElBQU04QixRQUFRLEdBQUc5QixNQUFNLENBQUMsVUFBRCxDQUF2QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxpRUFBZSxVQUFDK0IsTUFBRCxFQUFTekgsTUFBVCxFQUFvQjtBQUNqQztBQUNGO0FBQ0E7QUFDRSxNQUFNTyxJQUFJLEdBQUc7QUFDWHJFLElBQUFBLEVBQUUsRUFBRW9MLEdBQUcsQ0FBQ0ksSUFBSixHQUFXQyxLQURKO0FBRVhDLElBQUFBLElBQUksRUFBRUgsTUFGSztBQUdYeEgsSUFBQUEsSUFBSSxFQUFFRCxNQUhLO0FBSVgvQyxJQUFBQSxHQUFHLEVBQUUsQ0FKTTtBQUlIO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxDQUxHO0FBS0E7QUFDWDJLLElBQUFBLFNBQVMsRUFBRU4sVUFOQTtBQU1ZO0FBQ3ZCM0QsSUFBQUEsR0FBRyxFQUFFLENBUE0sQ0FPSDs7QUFQRyxHQUFiO0FBVUE7QUFDRjtBQUNBOztBQUNFLFdBQVMxSCxFQUFULEdBQWM7QUFDWixXQUFPcUUsSUFBSSxDQUFDckUsRUFBWjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTMEwsSUFBVCxHQUFnQjtBQUNkLFdBQU9ySCxJQUFJLENBQUNxSCxJQUFaO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVMzSCxJQUFULEdBQWdCO0FBQ2QsV0FBT00sSUFBSSxDQUFDTixJQUFaO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVNjLElBQVQsR0FBZ0I7QUFDZCxXQUFPLENBQUNSLElBQUksQ0FBQ3RELEdBQU4sRUFBV3NELElBQUksQ0FBQ3JELE1BQWhCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU2dFLElBQVQsR0FBZ0I7QUFDZCxZQUFRWCxJQUFJLENBQUNzSCxTQUFiO0FBQ0UsV0FBS04sVUFBTDtBQUNFLGVBQU8sQ0FBQ2hILElBQUksQ0FBQ3RELEdBQU4sRUFBV3NELElBQUksQ0FBQ3JELE1BQUwsR0FBY3FELElBQUksQ0FBQ04sSUFBbkIsR0FBMEIsQ0FBckMsQ0FBUDs7QUFDRixXQUFLdUgsUUFBTDtBQUNFLGVBQU8sQ0FBQ2pILElBQUksQ0FBQ3RELEdBQUwsR0FBV3NELElBQUksQ0FBQ04sSUFBaEIsR0FBdUIsQ0FBeEIsRUFBMkJNLElBQUksQ0FBQ3JELE1BQWhDLENBQVA7O0FBQ0Y7QUFDRSxlQUFPRSxTQUFQO0FBTko7QUFRRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTcUUsWUFBVCxHQUF3QjtBQUN0QixXQUFPbEIsSUFBSSxDQUFDc0gsU0FBTCxLQUFtQk4sVUFBMUI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU08sU0FBVCxHQUFxQjtBQUNuQixXQUFPdkgsSUFBSSxDQUFDcUQsR0FBWjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTTCxlQUFULEdBQTJCO0FBQ3pCLFFBQUloRCxJQUFJLENBQUNzSCxTQUFMLEtBQW1CTixVQUF2QixFQUFtQztBQUNqQ2hILE1BQUFBLElBQUksQ0FBQ3NILFNBQUwsR0FBaUJMLFFBQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xqSCxNQUFBQSxJQUFJLENBQUNzSCxTQUFMLEdBQWlCTixVQUFqQjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNuRSxHQUFULENBQWFuRyxHQUFiLEVBQWtCQyxNQUFsQixFQUEwQjtBQUN4QnFELElBQUFBLElBQUksQ0FBQ3RELEdBQUwsR0FBV0EsR0FBWDtBQUNBc0QsSUFBQUEsSUFBSSxDQUFDckQsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBUzhHLE1BQVQsQ0FBZ0IvRyxHQUFoQixFQUFxQkMsTUFBckIsRUFBNkI7QUFDM0IsWUFBUXFELElBQUksQ0FBQ3NILFNBQWI7QUFDRSxXQUFLTixVQUFMO0FBQ0UsWUFBSXRLLEdBQUcsS0FBS3NELElBQUksQ0FBQ3RELEdBQWpCLEVBQXNCLE9BQU8sS0FBUDtBQUN0QixZQUFJQyxNQUFNLEdBQUdxRCxJQUFJLENBQUNyRCxNQUFkLElBQXdCQSxNQUFNLEdBQUlxRCxJQUFJLENBQUNyRCxNQUFMLEdBQWNxRCxJQUFJLENBQUNOLElBQW5CLEdBQTBCLENBQWhFLEVBQW9FLE9BQU8sS0FBUDtBQUNwRTs7QUFDRixXQUFLdUgsUUFBTDtBQUNFLFlBQUl0SyxNQUFNLEtBQUtxRCxJQUFJLENBQUNyRCxNQUFwQixFQUE0QixPQUFPLEtBQVA7QUFDNUIsWUFBSUQsR0FBRyxHQUFHc0QsSUFBSSxDQUFDdEQsR0FBWCxJQUFrQkEsR0FBRyxHQUFJc0QsSUFBSSxDQUFDdEQsR0FBTCxHQUFXc0QsSUFBSSxDQUFDTixJQUFoQixHQUF1QixDQUFwRCxFQUF3RCxPQUFPLEtBQVA7QUFDeEQ7O0FBQ0Y7QUFDRTtBQVZKOztBQVlBLFdBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVMyRCxHQUFULENBQWEzRyxHQUFiLEVBQWtCQyxNQUFsQixFQUEwQjtBQUN4QixRQUFNZ0IsTUFBTSxHQUFHOEYsTUFBTSxDQUFDL0csR0FBRCxFQUFNQyxNQUFOLENBQXJCO0FBQ0EsUUFBSWdCLE1BQUosRUFBWXFDLElBQUksQ0FBQ3FELEdBQUwsSUFBWSxDQUFaO0FBQ1osV0FBTzFGLE1BQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNQLE1BQVQsR0FBa0I7QUFDaEIsV0FBUTRDLElBQUksQ0FBQ3FELEdBQUwsSUFBWXJELElBQUksQ0FBQ04sSUFBekI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU3BDLFdBQVQsR0FBdUI7QUFDckIsUUFBTUssTUFBTSxHQUFHLEVBQWY7O0FBQ0EsU0FBSyxJQUFJd0QsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25CLElBQUksQ0FBQ04sSUFBekIsRUFBK0J5QixDQUFDLElBQUksQ0FBcEMsRUFBdUM7QUFDckMsVUFBSW5CLElBQUksQ0FBQ3NILFNBQUwsS0FBbUJOLFVBQXZCLEVBQW1DO0FBQ2pDckosUUFBQUEsTUFBTSxDQUFDMEMsSUFBUCxDQUFZLENBQUNMLElBQUksQ0FBQ3RELEdBQU4sRUFBV3NELElBQUksQ0FBQ3JELE1BQUwsR0FBY3dFLENBQXpCLENBQVo7QUFDRCxPQUZELE1BRU87QUFDTHhELFFBQUFBLE1BQU0sQ0FBQzBDLElBQVAsQ0FBWSxDQUFDTCxJQUFJLENBQUN0RCxHQUFMLEdBQVd5RSxDQUFaLEVBQWVuQixJQUFJLENBQUNyRCxNQUFwQixDQUFaO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPZ0IsTUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBUzZKLFVBQVQsR0FBc0I7QUFDcEIsUUFBSSxDQUFDcEssTUFBTCxFQUFhLE9BQU9QLFNBQVA7QUFDYixXQUFPUyxXQUFXLEVBQWxCO0FBQ0Q7O0FBRUQsU0FBTztBQUNMM0IsSUFBQUEsRUFBRSxFQUFGQSxFQURLO0FBRUwrRCxJQUFBQSxJQUFJLEVBQUpBLElBRks7QUFHTDJILElBQUFBLElBQUksRUFBSkEsSUFISztBQUlMN0csSUFBQUEsSUFBSSxFQUFKQSxJQUpLO0FBS0xHLElBQUFBLElBQUksRUFBSkEsSUFMSztBQU1MTyxJQUFBQSxZQUFZLEVBQVpBLFlBTks7QUFPTHFHLElBQUFBLFNBQVMsRUFBVEEsU0FQSztBQVFMdkUsSUFBQUEsZUFBZSxFQUFmQSxlQVJLO0FBU0xILElBQUFBLEdBQUcsRUFBSEEsR0FUSztBQVVMWSxJQUFBQSxNQUFNLEVBQU5BLE1BVks7QUFXTEosSUFBQUEsR0FBRyxFQUFIQSxHQVhLO0FBWUxqRyxJQUFBQSxNQUFNLEVBQU5BLE1BWks7QUFhTEUsSUFBQUEsV0FBVyxFQUFYQSxXQWJLO0FBY0xrSyxJQUFBQSxVQUFVLEVBQVZBO0FBZEssR0FBUDtBQWdCRCxDQXRMRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQk8sSUFBTXZNLElBQUksR0FBR2tLLE1BQU0sQ0FBQyxNQUFELENBQW5CO0FBQ0EsSUFBTWpLLFFBQVEsR0FBR2lLLE1BQU0sQ0FBQyxVQUFELENBQXZCO0FBRVAsaUVBQWUsQ0FBQyxZQUFNO0FBQ3BCLE1BQU1zQyxRQUFRLEdBQUc7QUFDZkMsSUFBQUEsSUFBSSxFQUFFQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FEUztBQUVmQyxJQUFBQSxVQUFVLEVBQUVGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUZHO0FBR2ZFLElBQUFBLGNBQWMsRUFBRUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUhEO0FBSWYxRCxJQUFBQSxNQUFNLEVBQUV5RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FKTztBQUtmOUksSUFBQUEsS0FBSyxFQUFFNkksUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBTFE7QUFNZmhKLElBQUFBLE9BQU8sRUFBRStJLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QjtBQU5NLEdBQWpCO0FBU0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNFLFdBQVNHLFVBQVQsQ0FBb0JyTCxHQUFwQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0IsUUFBTXFMLElBQUksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7QUFDQUgsSUFBQUEsSUFBSSxDQUFDSSxPQUFMLENBQWExTCxHQUFiLEdBQW1CQSxHQUFuQjtBQUNBc0wsSUFBQUEsSUFBSSxDQUFDSSxPQUFMLENBQWF6TCxNQUFiLEdBQXNCQSxNQUF0QjtBQUNBLFdBQU9xTCxJQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTSyxZQUFULENBQXNCM0ksSUFBdEIsRUFBNEIzRCxRQUE1QixFQUFzQztBQUNwQyxRQUFNdU0sUUFBUSxHQUFHWCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7QUFDQUssSUFBQUEsUUFBUSxDQUFDSixTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUF2Qjs7QUFDQSxTQUFLLElBQUl6TCxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHZ0QsSUFBeEIsRUFBOEJoRCxHQUFHLElBQUksQ0FBckMsRUFBd0M7QUFDdEMsV0FBSyxJQUFJQyxNQUFNLEdBQUcsQ0FBbEIsRUFBcUJBLE1BQU0sR0FBRytDLElBQTlCLEVBQW9DL0MsTUFBTSxJQUFJLENBQTlDLEVBQWlEO0FBQy9DLFlBQU1xTCxJQUFJLEdBQUdELFVBQVUsQ0FBQ3JMLEdBQUQsRUFBTUMsTUFBTixDQUF2QjtBQUNBcUwsUUFBQUEsSUFBSSxDQUFDSSxPQUFMLENBQWFyTSxRQUFiLEdBQXdCQSxRQUF4QjtBQUNBaU0sUUFBQUEsSUFBSSxDQUFDRSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsZ0JBQW5CO0FBQ0EsWUFBSXpMLEdBQUcsS0FBSyxDQUFaLEVBQWVzTCxJQUFJLENBQUNFLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjtBQUNmLFlBQUl4TCxNQUFNLEtBQUssQ0FBZixFQUFrQnFMLElBQUksQ0FBQ0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFlBQW5CO0FBQ2xCRyxRQUFBQSxRQUFRLENBQUNDLFdBQVQsQ0FBcUJQLElBQXJCO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPTSxRQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0UsYUFBVCxDQUF1QjlJLElBQXZCLEVBQTZCK0ksaUJBQTdCLEVBQWdEO0FBQzlDLFFBQU1DLFNBQVMsR0FBR2YsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FTLElBQUFBLFNBQVMsQ0FBQ1IsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsV0FBeEI7O0FBQ0EsU0FBSyxJQUFJekwsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR2dELElBQXhCLEVBQThCaEQsR0FBRyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFdBQUssSUFBSUMsTUFBTSxHQUFHLENBQWxCLEVBQXFCQSxNQUFNLEdBQUcrQyxJQUE5QixFQUFvQy9DLE1BQU0sSUFBSSxDQUE5QyxFQUFpRDtBQUMvQyxZQUFNcUwsSUFBSSxHQUFHRCxVQUFVLENBQUNyTCxHQUFELEVBQU1DLE1BQU4sQ0FBdkI7QUFDQSxZQUFJRCxHQUFHLEtBQUssQ0FBWixFQUFlc0wsSUFBSSxDQUFDRSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsYUFBbkI7QUFDZixZQUFJeEwsTUFBTSxLQUFLLENBQWYsRUFBa0JxTCxJQUFJLENBQUNFLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixZQUFuQjtBQUNsQixZQUFJTSxpQkFBaUIsQ0FBQy9MLEdBQUQsRUFBTUMsTUFBTixDQUFyQixFQUFvQ3FMLElBQUksQ0FBQ0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFNBQW5CO0FBQ3BDTyxRQUFBQSxTQUFTLENBQUNILFdBQVYsQ0FBc0JQLElBQXRCO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPVSxTQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTQyxzQkFBVCxDQUFnQ25OLGNBQWhDLEVBQWdEO0FBQzlDLFdBQVFBLGNBQWMsS0FBS1AsSUFBcEIsR0FDSHdNLFFBQVEsQ0FBQ0ksVUFBVCxDQUFvQkQsYUFBcEIsQ0FBa0MsUUFBbEMsQ0FERyxHQUVISCxRQUFRLENBQUNLLGNBQVQsQ0FBd0JGLGFBQXhCLENBQXNDLFFBQXRDLENBRko7QUFHRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNnQixvQkFBVCxDQUE4QjdNLFFBQTlCLEVBQXdDO0FBQ3RDLFFBQUltSyxRQUFRLENBQUN1QixRQUFRLENBQUNJLFVBQVQsQ0FBb0JPLE9BQXBCLENBQTRCck0sUUFBN0IsRUFBdUMsRUFBdkMsQ0FBUixLQUNFQSxRQUROLEVBQ2dCLE9BQU8wTCxRQUFRLENBQUNJLFVBQWhCO0FBQ2hCLFdBQU9KLFFBQVEsQ0FBQ0ssY0FBaEI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTck0sU0FBVCxDQUNFaUUsSUFERixFQUVFM0QsUUFGRixFQUdFUCxjQUhGLEVBSUVpTixpQkFKRixFQUtFO0FBQ0EsUUFBTS9FLE1BQU0sR0FBR2lGLHNCQUFzQixDQUFDbk4sY0FBRCxDQUFyQztBQUNBa0ksSUFBQUEsTUFBTSxDQUFDbUYsYUFBUCxDQUFxQlQsT0FBckIsQ0FBNkJyTSxRQUE3QixHQUF3Q0EsUUFBeEM7QUFDQSxRQUFNdU0sUUFBUSxHQUFHRCxZQUFZLENBQUMzSSxJQUFELEVBQU8zRCxRQUFQLENBQTdCO0FBQ0EsUUFBTTJNLFNBQVMsR0FBR0YsYUFBYSxDQUFDOUksSUFBRCxFQUFPK0ksaUJBQVAsQ0FBL0I7QUFDQS9FLElBQUFBLE1BQU0sQ0FBQzZFLFdBQVAsQ0FBbUJELFFBQW5CO0FBQ0E1RSxJQUFBQSxNQUFNLENBQUM2RSxXQUFQLENBQW1CRyxTQUFuQjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTakssVUFBVCxDQUFvQmpELGNBQXBCLEVBQW9DO0FBQ2xDLFFBQU1rSSxNQUFNLEdBQUdpRixzQkFBc0IsQ0FBQ25OLGNBQUQsQ0FBckM7QUFDQWtJLElBQUFBLE1BQU0sQ0FBQ29GLFNBQVAsR0FBbUIsRUFBbkI7QUFDRDs7QUFFRCxXQUFTM00sY0FBVCxHQUEwQjtBQUN4QnNDLElBQUFBLFVBQVUsQ0FBQ3hELElBQUQsQ0FBVjtBQUNBd0QsSUFBQUEsVUFBVSxDQUFDdkQsUUFBRCxDQUFWO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBUzhCLG9CQUFULENBQThCTixHQUE5QixFQUFtQ0MsTUFBbkMsRUFBMkNaLFFBQTNDLEVBQXFEZ04sWUFBckQsRUFBbUU7QUFDakUsUUFBTUMsYUFBYSxHQUFHSixvQkFBb0IsQ0FBQzdNLFFBQUQsQ0FBMUM7QUFDQSxRQUFNdU0sUUFBUSxHQUFHVSxhQUFhLENBQUNwQixhQUFkLENBQTRCLG9CQUE1QixDQUFqQjtBQUNBLFFBQU1JLElBQUksR0FBR00sUUFBUSxDQUFDVixhQUFULDRCQUEwQ2xMLEdBQTFDLCtCQUFnRUMsTUFBaEUsU0FBYjtBQUNBLFFBQUlvTSxZQUFZLEtBQUtsTSxTQUFyQixFQUFnQyxPQUppQyxDQUl6Qjs7QUFDeEMsUUFBSWtNLFlBQVksS0FBSyxDQUFDLENBQXRCLEVBQXlCO0FBQUU7QUFDekJmLE1BQUFBLElBQUksQ0FBQ0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGVBQW5CO0FBQ0QsS0FGRCxNQUVPO0FBQUU7QUFDUEgsTUFBQUEsSUFBSSxDQUFDRSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsWUFBbkI7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBUzVLLGVBQVQsQ0FBeUJ4QixRQUF6QixFQUFtQ2tOLGVBQW5DLEVBQW9EO0FBQ2xELFFBQU1ELGFBQWEsR0FBR0osb0JBQW9CLENBQUM3TSxRQUFELENBQTFDO0FBQ0EsUUFBTXVNLFFBQVEsR0FBR1UsYUFBYSxDQUFDcEIsYUFBZCxDQUE0QixvQkFBNUIsQ0FBakI7QUFDQXFCLElBQUFBLGVBQWUsQ0FBQ25MLE9BQWhCLENBQXdCLFVBQUNDLFVBQUQsRUFBZ0I7QUFDdEMsVUFBTWlLLElBQUksR0FBR00sUUFBUSxDQUFDVixhQUFULDRCQUEwQzdKLFVBQVUsQ0FBQyxDQUFELENBQXBELCtCQUEwRUEsVUFBVSxDQUFDLENBQUQsQ0FBcEYsU0FBYjtBQUNBaUssTUFBQUEsSUFBSSxDQUFDRSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkI7QUFDRCxLQUhEO0FBSUQ7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2UsK0JBQVQsQ0FBeUNGLGFBQXpDLEVBQXdERyxRQUF4RCxFQUFrRTtBQUNoRSxRQUFNYixRQUFRLEdBQUdVLGFBQWEsQ0FBQ3BCLGFBQWQsQ0FBNEIsb0JBQTVCLENBQWpCO0FBQ0EsUUFBTXdCLEtBQUssR0FBR2QsUUFBUSxDQUFDZSxnQkFBVCxDQUEwQixPQUExQixDQUFkO0FBQ0FELElBQUFBLEtBQUssQ0FBQ3RMLE9BQU4sQ0FBYyxVQUFDa0ssSUFBRCxFQUFVO0FBQ3RCQSxNQUFBQSxJQUFJLENBQUNzQixnQkFBTCxDQUFzQixPQUF0QixFQUErQjtBQUFBLGVBQU1ILFFBQVEsQ0FDM0NqRCxRQUFRLENBQUM4QixJQUFJLENBQUNJLE9BQUwsQ0FBYTFMLEdBQWQsRUFBbUIsRUFBbkIsQ0FEbUMsRUFFM0N3SixRQUFRLENBQUM4QixJQUFJLENBQUNJLE9BQUwsQ0FBYXpMLE1BQWQsRUFBc0IsRUFBdEIsQ0FGbUMsRUFHM0N1SixRQUFRLENBQUM4QyxhQUFhLENBQUNaLE9BQWQsQ0FBc0JyTSxRQUF2QixFQUFpQyxFQUFqQyxDQUhtQyxDQUFkO0FBQUEsT0FBL0I7QUFLRCxLQU5EO0FBT0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTc0MsaUJBQVQsQ0FBMkI4SyxRQUEzQixFQUFxQztBQUNuQ0QsSUFBQUEsK0JBQStCLENBQUN6QixRQUFRLENBQUNJLFVBQVYsRUFBc0JzQixRQUF0QixDQUEvQjtBQUNBRCxJQUFBQSwrQkFBK0IsQ0FBQ3pCLFFBQVEsQ0FBQ0ssY0FBVixFQUEwQnFCLFFBQTFCLENBQS9CO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTeEssZUFBVCxDQUF5QndLLFFBQXpCLEVBQW1DO0FBQ2pDLFFBQU1wTixRQUFRLEdBQUdtSyxRQUFRLENBQUN1QixRQUFRLENBQUNJLFVBQVQsQ0FBb0JPLE9BQXBCLENBQTRCck0sUUFBN0IsRUFBdUMsRUFBdkMsQ0FBekI7QUFDQTBMLElBQUFBLFFBQVEsQ0FBQ3ZELE1BQVQsQ0FBZ0JvRixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEM7QUFBQSxhQUFNSCxRQUFRLENBQUNsTyxJQUFELEVBQU9jLFFBQVAsQ0FBZDtBQUFBLEtBQTFDLEVBRmlDLENBRTBDO0FBQzVFO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVNrQyxTQUFULENBQW1CbEMsUUFBbkIsRUFBNkI7QUFDM0I2TSxJQUFBQSxvQkFBb0IsQ0FBQzdNLFFBQUQsQ0FBcEIsQ0FBK0I2TCxhQUEvQixDQUE2QyxRQUE3QyxFQUF1RE0sU0FBdkQsQ0FBaUVDLEdBQWpFLENBQXFFLE1BQXJFO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2pLLFdBQVQsQ0FBcUJuQyxRQUFyQixFQUErQjtBQUM3QjZNLElBQUFBLG9CQUFvQixDQUFDN00sUUFBRCxDQUFwQixDQUErQjZMLGFBQS9CLENBQTZDLFFBQTdDLEVBQXVETSxTQUF2RCxDQUFpRXFCLE1BQWpFLENBQXdFLE1BQXhFO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU25OLGlCQUFULEdBQTZCO0FBQzNCcUwsSUFBQUEsUUFBUSxDQUFDSyxjQUFULENBQXdCRixhQUF4QixDQUFzQyxRQUF0QyxFQUFnRE0sU0FBaEQsQ0FBMERDLEdBQTFELENBQThELE1BQTlEO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBUzlMLG1CQUFULEdBQStCO0FBQzdCb0wsSUFBQUEsUUFBUSxDQUFDSyxjQUFULENBQXdCRixhQUF4QixDQUFzQyxRQUF0QyxFQUFnRE0sU0FBaEQsQ0FBMERxQixNQUExRCxDQUFpRSxNQUFqRTtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVNySyxtQkFBVCxDQUE2QmlLLFFBQTdCLEVBQXVDO0FBQ3JDMUIsSUFBQUEsUUFBUSxDQUFDM0ksS0FBVCxDQUFld0ssZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUM7QUFBQSxhQUFNSCxRQUFRLEVBQWQ7QUFBQSxLQUF6QztBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTcEsscUJBQVQsR0FBaUM7QUFDL0IwSSxJQUFBQSxRQUFRLENBQUN2RCxNQUFULENBQWdCZ0UsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLE1BQTlCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVMvSSx1QkFBVCxHQUFtQztBQUNqQ3FJLElBQUFBLFFBQVEsQ0FBQ3ZELE1BQVQsQ0FBZ0JnRSxTQUFoQixDQUEwQnFCLE1BQTFCLENBQWlDLE1BQWpDO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVN2SyxtQkFBVCxHQUErQjtBQUM3QnlJLElBQUFBLFFBQVEsQ0FBQzNJLEtBQVQsQ0FBZW9KLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLE1BQTdCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVM5SSxxQkFBVCxHQUFpQztBQUMvQm9JLElBQUFBLFFBQVEsQ0FBQzNJLEtBQVQsQ0FBZW9KLFNBQWYsQ0FBeUJxQixNQUF6QixDQUFnQyxNQUFoQztBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVNoSyxxQkFBVCxDQUErQjRKLFFBQS9CLEVBQXlDO0FBQ3ZDMUIsSUFBQUEsUUFBUSxDQUFDN0ksT0FBVCxDQUFpQjBLLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQztBQUFBLGFBQU1ILFFBQVEsRUFBZDtBQUFBLEtBQTNDO0FBQ0Q7O0FBRUQsU0FBTztBQUNMMU4sSUFBQUEsU0FBUyxFQUFUQSxTQURLO0FBRUxnRCxJQUFBQSxVQUFVLEVBQVZBLFVBRks7QUFHTHRDLElBQUFBLGNBQWMsRUFBZEEsY0FISztBQUlMYSxJQUFBQSxvQkFBb0IsRUFBcEJBLG9CQUpLO0FBS0xPLElBQUFBLGVBQWUsRUFBZkEsZUFMSztBQU1MYyxJQUFBQSxpQkFBaUIsRUFBakJBLGlCQU5LO0FBT0xNLElBQUFBLGVBQWUsRUFBZkEsZUFQSztBQVFMVixJQUFBQSxTQUFTLEVBQVRBLFNBUks7QUFTTEMsSUFBQUEsV0FBVyxFQUFYQSxXQVRLO0FBVUw5QixJQUFBQSxpQkFBaUIsRUFBakJBLGlCQVZLO0FBV0xDLElBQUFBLG1CQUFtQixFQUFuQkEsbUJBWEs7QUFZTDZDLElBQUFBLG1CQUFtQixFQUFuQkEsbUJBWks7QUFhTEgsSUFBQUEscUJBQXFCLEVBQXJCQSxxQkFiSztBQWNMSyxJQUFBQSx1QkFBdUIsRUFBdkJBLHVCQWRLO0FBZUxHLElBQUFBLHFCQUFxQixFQUFyQkEscUJBZks7QUFnQkxQLElBQUFBLG1CQUFtQixFQUFuQkEsbUJBaEJLO0FBaUJMSyxJQUFBQSxxQkFBcUIsRUFBckJBO0FBakJLLEdBQVA7QUFtQkQsQ0EzU2MsR0FBZjs7Ozs7O1VDSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQVNBO0FBRUFtSywyREFBQTtBQUNBQSxxRUFBQTtBQUNBQSxtRUFBQTtBQUNBQSxxRUFBQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3Mvbm9ybS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL21vZGVscy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL21vZGVscy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvbW9kZWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL21vZGVscy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvdmlldy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKiBib2FyZCAqL1xcbiAgLS1ib2FyZC1zaXplOiAxMDtcXG4gIC0tZ3JpZC1zaXplOiAycmVtO1xcblxcbiAgLyogY29sb3IgKi9cXG4gIC0td2hpdGU6IHdoaXRlO1xcbiAgLS1ibGFjazogYmxhY2s7XFxuICAtLWdyYXk6IGdyYXk7XFxuICAtLWJsdWU6IGJsdWU7XFxuICAtLW9yYW5nZTogb3JhbmdlO1xcbiAgLS1yZWQ6IHJlZDtcXG4gIC0tYm9hcmQtYm9yZGVyOiB2YXIoLS1ibGFjayk7XFxuICAtLWhpdDogdmFyKC0tb3JhbmdlKTtcXG4gIC0tbWlzc2VkOiB2YXIoLS1ncmF5KTtcXG4gIC0tc3VuazogdmFyKC0tcmVkKTtcXG4gIC0tdHJhbnNwYXJlbnQ6ICMwMDAwMDAwMDtcXG59XFxuXFxuLmxvY2sge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHJlbTtcXG59XFxuXFxuLnBsYXllciAuc2VhTGF5ZXIsXFxuLnBsYXllciAuc2hpcExheWVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxufVxcblxcbi5wbGF5ZXIgLnNlYUxheWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnBsYXllci5tYWluID4gLmJvYXJkID4gLnNlYUxheWVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIge1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLnVwcGVyQm9yZGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQubGVmdEJvcmRlciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5oYXNTaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkOm5vdCguYWxyZWFkeUhpdCk6bm90KC5hbHJlYWR5TWlzc2VkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeUhpdDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAuMnJlbTtcXG4gIGxlZnQ6IC4ycmVtO1xcbiAgY29udGVudDogJ3doYXRzaG90JztcXG4gIGNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5TWlzc2VkOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC4ycmVtO1xcbiAgbGVmdDogLjJyZW07XFxuICBjb250ZW50OiAnd2F2ZXMnO1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5SGl0LnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlIaXQuc3Vuazo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAuMnJlbTtcXG4gIGxlZnQ6IC4ycmVtO1xcbiAgY29udGVudDogJ2xvY2FsX2ZpcmVfZGVwYXJ0bWVudCc7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7O0VBRWpCLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrRUFBa0U7RUFDbEUsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL25vcm0uY3NzJztcXG5AaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zJztcXG5cXG46cm9vdCB7XFxuICAvKiBib2FyZCAqL1xcbiAgLS1ib2FyZC1zaXplOiAxMDtcXG4gIC0tZ3JpZC1zaXplOiAycmVtO1xcblxcbiAgLyogY29sb3IgKi9cXG4gIC0td2hpdGU6IHdoaXRlO1xcbiAgLS1ibGFjazogYmxhY2s7XFxuICAtLWdyYXk6IGdyYXk7XFxuICAtLWJsdWU6IGJsdWU7XFxuICAtLW9yYW5nZTogb3JhbmdlO1xcbiAgLS1yZWQ6IHJlZDtcXG4gIC0tYm9hcmQtYm9yZGVyOiB2YXIoLS1ibGFjayk7XFxuICAtLWhpdDogdmFyKC0tb3JhbmdlKTtcXG4gIC0tbWlzc2VkOiB2YXIoLS1ncmF5KTtcXG4gIC0tc3VuazogdmFyKC0tcmVkKTtcXG4gIC0tdHJhbnNwYXJlbnQ6ICMwMDAwMDAwMDtcXG59XFxuXFxuLmxvY2sge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHJlbTtcXG59XFxuXFxuLnBsYXllciAuc2VhTGF5ZXIsXFxuLnBsYXllciAuc2hpcExheWVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxufVxcblxcbi5wbGF5ZXIgLnNlYUxheWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnBsYXllci5tYWluID4gLmJvYXJkID4gLnNlYUxheWVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIge1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLnVwcGVyQm9yZGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQubGVmdEJvcmRlciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5oYXNTaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkOm5vdCguYWxyZWFkeUhpdCk6bm90KC5hbHJlYWR5TWlzc2VkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeUhpdDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAuMnJlbTtcXG4gIGxlZnQ6IC4ycmVtO1xcbiAgY29udGVudDogJ3doYXRzaG90JztcXG4gIGNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5TWlzc2VkOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC4ycmVtO1xcbiAgbGVmdDogLjJyZW07XFxuICBjb250ZW50OiAnd2F2ZXMnO1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5SGl0LnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlIaXQuc3Vuazo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAuMnJlbTtcXG4gIGxlZnQ6IC4ycmVtO1xcbiAgY29udGVudDogJ2xvY2FsX2ZpcmVfZGVwYXJ0bWVudCc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25vcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtFQUNFLDBKQUEwSjtBQUM1SlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJpbXBvcnQgR2FtZSwge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn0gZnJvbSAnLi9tb2RlbHMvZ2FtZSc7XG5pbXBvcnQgVmlldywge1xuICBNQUlOLFxuICBPUFBPTkVOVCxcbn0gZnJvbSAnLi92aWV3JztcblxuZXhwb3J0IHtcbiAgQUksXG4gIEhVTUFOLFxuICBFQVNZLFxuICBOT1JNQUwsXG4gIEhBUkQsXG4gIE1BSU4sXG4gIE9QUE9ORU5ULFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgMiBwbGF5ZXJzIHdpdGggcmFuZG9tbHkgYXV0b2ZpbGxlZCBib2FyZFxuICAgKiBiZWZvcmUgc3RhcnRpbmcgdG8gZHJhdyB0aGUgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiBpbml0UGxheWVyc0FuZEJvYXJkcyhwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGUpIHtcbiAgICBHYW1lLmluaXRQbGF5ZXJzQW5kQm9hcmRzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBWaWV3IG1vZHVsZSB0byBkcmF3IHRoZSBib2FyZCBvZiBhIGNlcnRhaW4gcGxheWVyLlxuICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIFBsYXllciBvYmplY3QuXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBtYWluT3JPcHBvbmVudCBBcyBNYWluIHBsYXllciBvciBvcHBvbmVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdBU2luZ2xlQm9hcmQocGxheWVyLCBtYWluT3JPcHBvbmVudCkge1xuICAgIFZpZXcuZHJhd0JvYXJkKFxuICAgICAgR2FtZS5ERUZBVUxUX0JPQVJEX1NJWkUsXG4gICAgICBwbGF5ZXIuaWQoKSxcbiAgICAgIG1haW5Pck9wcG9uZW50LFxuICAgICAgcGxheWVyLmJvYXJkKCkuY2FuSGl0U2hpcCxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdHdvIGJvYXJkcyBpbiBwZXJzcGVjdGl2ZSBvZiBvbmUgcGxheWVyLlxuICAgKiAgMS4gSGlzIG93biBib2FyZCAoTUFJTikuXG4gICAqICAyLiBPcHBvbmVudCdzIGJvYXJkIChPUFBPTkVOVCkuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBQbGF5ZXIncyBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdCb2FyZHNGb3JQbGF5ZXIocGxheWVySWQpIHtcbiAgICBkcmF3QVNpbmdsZUJvYXJkKEdhbWUucGxheWVyKHBsYXllcklkKSwgTUFJTik7XG4gICAgY29uc3Qgb3Bwb25lbnRJZCA9IChwbGF5ZXJJZCArIDEpICUgR2FtZS5wbGF5ZXJzKCkubGVuZ3RoO1xuICAgIGRyYXdBU2luZ2xlQm9hcmQoR2FtZS5wbGF5ZXIob3Bwb25lbnRJZCksIE9QUE9ORU5UKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYm90aCBtYWluIGFuZCBvcHBvbmVudCdzIGJvYXJkIGZyb20gdGhlIERPTS5cbiAgICovXG4gIGZ1bmN0aW9uIGNsZWFyQWxsQm9hcmRzKCkge1xuICAgIFZpZXcuY2xlYXJBbGxCb2FyZHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2NrIGFsbCBib2FyZHMsIHByZXZlbnQgcGxheWVyIGZyb20gaW50ZXJhY3Qgd2l0aCB0aGUgYm9hcmRcbiAgICogYmVmb3JlIHN0YXJ0aW5nIHRoZSBnYW1lLlxuICAgKi9cbiAgZnVuY3Rpb24gbG9ja09wcG9uZW50Qm9hcmQoKSB7XG4gICAgVmlldy5sb2NrT3Bwb25lbnRCb2FyZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIGdhbWUgaXMgcHJlcGFyZWQsIHVubG9jayBhbGwgYm9hcmRzLCBzbyB0aGF0IHBsYXllciBnYWluXG4gICAqIHRoZSBhY2Nlc3MgdG8gdGhlIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBWaWV3LnVubG9ja09wcG9uZW50Qm9hcmQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHYW1lb3ZlciBsb2dpYy5cbiAgICovXG4gIGZ1bmN0aW9uIGdhbWVvdmVyKHdpbm5lcklkKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgYWxlcnQoYCR7d2lubmVySWR9IHdpbiFgKTtcbiAgICBsb2NrT3Bwb25lbnRCb2FyZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbCBhdHRhY2sgbG9naWMuXG4gICAqIDEuIEF0dGFjayB0aGUgdGFyZ2V0IHNwb3QuXG4gICAqIDIuIFJlbmRlciB0aGUgdmlldyBhY2NvcmRpbmcgdG8gdGhlIGF0dGFjayByZXN1bHQuXG4gICAqIDMuIFJldHVybiBhIGxpc3Qgb2Ygc3Vycm91bmRpbmcgcG9pbnRzIGlmIHRoaXMgYXR0YWNrXG4gICAqIGNhdXNlIGEgc2hpcCB0byBzaW5rLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBnaXJkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gb3Bwb25lbnRJZCBJZCBvZiBvcHBvbmVudCBwbGF5ZXIuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKiAgUmV0dXJuIHVuZGVmaW5lZCBpZiBzcG90IGFscmVhZHkgYmVlbiBhdHRhY2tlZC5cbiAgICogIFJldHVybiAtMSBpZiBtaXNzZWQuXG4gICAqICBJZiBoaXQsXG4gICAqICAgIFJldHVybiBhIGxpc3Qgb2Ygc3Vycm91bmRpbmcgcG9pbnRzIGlmIGEgc2hpcCBpcyBzdW5rIGFmdGVyIHRoaXMgYXR0YWNrLlxuICAgKiAgICBPdGhlcndpc2UsIHJldHVybiAwLlxuICAgKi9cbiAgZnVuY3Rpb24gcGxheWVyQXR0YWNrT25lU3BvdChyb3csIGNvbHVtbiwgb3Bwb25lbnRJZCkge1xuICAgIGNvbnN0IGJvYXJkID0gR2FtZS5wbGF5ZXIob3Bwb25lbnRJZCkuYm9hcmQoKTtcbiAgICAvLyBhdHRhY2tcbiAgICBpZiAoYm9hcmQuYWxyZWFkeUJlZW5BdHRhY2tlZChyb3csIGNvbHVtbikpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc2hpcElkID0gYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgLy8gcmVuZGVyIGF0dGFja2VkIHNwb3RcbiAgICBWaWV3LnJlbmRlclNlYUFmdGVyQXR0YWNrKHJvdywgY29sdW1uLCBvcHBvbmVudElkLCBzaGlwSWQpO1xuICAgIGlmIChzaGlwSWQgPT09IC0xKSByZXR1cm4gc2hpcElkOyAvLyBtaXNzXG4gICAgR2FtZS5jdXJyZW50UGxheWVyKCkubWVtb3JpemVMYXN0SGl0KHJvdywgY29sdW1uKTsgLy8gbWVtb3JpemUgaGl0IGNvb3JkaW5hdGlvblxuICAgIC8vIHJlcG9ydCBjb29yZGluYXRlcyBpZiBzaGlwIHN1bmtcbiAgICBpZiAoYm9hcmQuZ2V0U2hpcChzaGlwSWQpLmlzU3VuaygpKSB7IC8vIGhpdCBhIHNoaXAgYW5kIHRoZSBzaGlwIGlzIHN1bmtcbiAgICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IGJvYXJkLmdldFNoaXAoc2hpcElkKS5jb29yZGluYXRlcygpO1xuICAgICAgVmlldy5yZW5kZXJTdW5rU2hpcHMob3Bwb25lbnRJZCwgc2hpcENvb3JkaW5hdGVzKTtcbiAgICAgIEdhbWUuY3VycmVudFBsYXllcigpLmZvcmdldExhc3RIaXQoc2hpcENvb3JkaW5hdGVzKTtcbiAgICAgIHJldHVybiBib2FyZC5zaGlwU3Vycm91bmRpbmdBcmVhKHNoaXBJZCk7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjayB0aGUgdGFyZ2V0IHNwb3QuIElmIGEgc2hpcCBzaW5rIGFmdGVyIHRoaXMgYXR0YWNrLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICogYXR0YWNrIHRoZSBzdXJyb3VuZGluZyBhcmVhIG9mIHRoYXQgc2hpcCAobm8gb3RoZXIgc2hpcCBjYW4gc3RheSBpbiB0aGF0IGFyZWEpLlxuICAgKiBXaGVuIGh1bWFuIHBsYXllciBjbGljayBvbiB0aGUgYm9hcmQsIFZpZXcgbW9kdWxlIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uLlxuICAgKiBXaGVuIEFJIHBsYXllciBkZWNpZGUgdGhlIHRhcmdldCBwb3NpdGlvbiBvZiBuZXh0IGF0dGFjaywgaXQgd2lsbCBhbHNvXG4gICAqIGNhbGxiYWNrIHRoaXMgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdpcmQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHBvbmVudElkIElkIG9mIG9wcG9uZW50IHBsYXllci5cbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllckF0dGFjayhyb3csIGNvbHVtbiwgb3Bwb25lbnRJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllckF0dGFja09uZVNwb3Qocm93LCBjb2x1bW4sIG9wcG9uZW50SWQpO1xuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBzcG90IGFscmVhZHkgYmVlbiBhdHRhY2tlZC5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7IC8vIGF0dGFjayBzaW5rIGEgc2hpcFxuICAgICAgcmVzdWx0LmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHBsYXllckF0dGFja09uZVNwb3QoLi4uY29vcmRpbmF0ZSwgb3Bwb25lbnRJZCkpO1xuICAgIH1cbiAgICBpZiAoR2FtZS5wbGF5ZXIob3Bwb25lbnRJZCkuYm9hcmQoKS5hbGxTdW5rKCkpIHtcbiAgICAgIGdhbWVvdmVyKEdhbWUuY3VycmVudFBsYXllcigpLmlkKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ID09PSAtMSkgeyAvLyBtaXNzZWRcbiAgICAgIFZpZXcubG9ja0JvYXJkKG9wcG9uZW50SWQpO1xuICAgICAgVmlldy51bmxvY2tCb2FyZChHYW1lLmN1cnJlbnRQbGF5ZXIoKS5pZCgpKTtcbiAgICAgIEdhbWUubmV4dFR1cm4odHJ1ZSwgcGxheWVyQXR0YWNrKTsgLy8gcGFzcyBpdHNlbGYgdG8gdGhlIEdhbWUgbW9kdWxlIGFzIGEgY2FsbGJhY2suXG4gICAgfSBlbHNlIHsgLy8gaWYgaGl0IGEgc2hpcCwgY3VycmVudCBwbGF5ZXIgY2FuIGdpdmUgb25lIG1vcmUgc2hvdC5cbiAgICAgIEdhbWUubmV4dFR1cm4oZmFsc2UsIHBsYXllckF0dGFjayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3MgdGhlIGF0dGFjayBsb2dpYyB0byB0aGUgVmlldyBtb2R1bGUgYXMgYSBjYWxsYmFjay5cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjaygpIHtcbiAgICBWaWV3LmJpbmRSZWNlaXZlQXR0YWNrKHBsYXllckF0dGFjayk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyByYW5kb20gZmxlZXQgZm9yIHRoZSBwbGF5ZXIsIGFuZCByZS1kcmF3IHRoZSBib2FyZCBvbiBET00uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBUaGUgcGxheWVyIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tQWdhaW4obWFpbk9yT3Bwb25lbnQsIHBsYXllcklkKSB7XG4gICAgLy8gZ2VuZXJhdGUgcmFuZG9tIGZsZWV0IGZvciB0aGF0IHBsYXllclxuICAgIGNvbnN0IGJvYXJkID0gR2FtZS5wbGF5ZXIocGxheWVySWQpLmJvYXJkKCk7XG4gICAgYm9hcmQuY2xlYXJGbGVldCgpO1xuICAgIEdhbWUuYXV0b2ZpbGxGbGVldChib2FyZCk7XG4gICAgLy8gY2xlYXIgdGhlIG9sZCBib2FyZChtYWluIG9yIG9wcG9uZW50KSBmcm9tIHRoZSBET00uXG4gICAgVmlldy5jbGVhckJvYXJkKG1haW5Pck9wcG9uZW50KTtcbiAgICAvLyBkcmF3IGEgbmV3IGJvYXJkIG9uIERPTVxuICAgIGRyYXdBU2luZ2xlQm9hcmQoR2FtZS5wbGF5ZXIocGxheWVySWQpLCBtYWluT3JPcHBvbmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVSYW5kb21GbGVldCgpIHtcbiAgICBWaWV3LmJpbmRSYW5kb21GbGVldChyYW5kb21BZ2Fpbik7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBnYW1lLlxuICAgKiBUaGUgZ2FtZSBpcyBub3QgeWV0IHN0YXJ0ZWQuXG4gICAqIEhhdmUgdG8gY2FsbCBzdGFydEdhbWUoKSB0byBzdGFydC5cbiAgICovXG4gIGZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4gICAgaW5pdFBsYXllcnNBbmRCb2FyZHMoSFVNQU4sIEFJKTtcbiAgICBkcmF3Qm9hcmRzRm9yUGxheWVyKDApOyAvLyBpbiBodW1hbiBwbGF5ZXIncyBwZXJzcGVjdGl2ZVxuICAgIGxvY2tPcHBvbmVudEJvYXJkKCk7XG4gICAgZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIGdhbWUsIGFuZCB1bmxvY2sgb3Bwb25lbnQncyBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBHYW1lLnN0YXJ0KCk7XG4gICAgR2FtZS5uZXh0VHVybihwbGF5ZXJBdHRhY2spOyAvLyBwYXNzIGl0c2VsZiB0byB0aGUgR2FtZSBtb2R1bGUgYXMgYSBjYWxsYmFjay5cbiAgICB1bmxvY2tPcHBvbmVudEJvYXJkKCk7XG4gICAgLy8gb25jZSB0aGUgZ2FtZSBzdGFydCwgcGxheWVyIGNhbm5vdCBjaGFuZ2UgdGhlIGZsZWV0IHVudGlsIHRoZSBlbmQgb2YgdGhlIGdhbWUuXG4gICAgVmlldy5sb2NrUmFuZG9tRmxlZXRCdXR0b24oKTtcbiAgICBWaWV3LmxvY2tTdGFydEdhbWVCdXR0b24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIFZpZXcgdG8gYmluZCBsaXN0ZW5lciBvbiBTdGFydCBnYW1lIGJ1dHRvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZVN0YXJ0R2FtZSgpIHtcbiAgICBWaWV3LmJpbmRTdGFydEdhbWVCdXR0b24oc3RhcnRHYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZS1pbml0aWFsaXplIGEgbmV3IGdhbWUgd2l0aCByYW5kb21seSBhdXRvLWZpbGxlZCBmbGVldCBmb3IgYm90aCBwbGF5ZXIuXG4gICAqL1xuICBmdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcbiAgICBjbGVhckFsbEJvYXJkcygpO1xuICAgIG5ld0dhbWUoKTtcbiAgICBWaWV3LnVubG9ja1JhbmRvbUZsZWV0QnV0dG9uKCk7XG4gICAgVmlldy51bmxvY2tTdGFydEdhbWVCdXR0b24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIFZpZXcgbW9kdWxlIHRvIGJpbmQgcmVzdGFydCBnYW1lIGZlYXR1cmUgdG8gRE9NIGVsZW1lbnRzLlxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlUmVzdGFydEdhbWUoKSB7XG4gICAgVmlldy5iaW5kUmVzdGFydEdhbWVCdXR0b24ocmVzdGFydEdhbWUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0UGxheWVyc0FuZEJvYXJkcyxcbiAgICBkcmF3QVNpbmdsZUJvYXJkLFxuICAgIGRyYXdCb2FyZHNGb3JQbGF5ZXIsXG4gICAgY2xlYXJBbGxCb2FyZHMsXG4gICAgZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrLFxuICAgIGVuYWJsZVJhbmRvbUZsZWV0LFxuICAgIGxvY2tPcHBvbmVudEJvYXJkLFxuICAgIHVubG9ja09wcG9uZW50Qm9hcmQsXG4gICAgbmV3R2FtZSxcbiAgICBzdGFydEdhbWUsXG4gICAgcmVzdGFydEdhbWUsXG4gICAgZW5hYmxlU3RhcnRHYW1lLFxuICAgIGVuYWJsZVJlc3RhcnRHYW1lLFxuICB9O1xufSkoKTtcbiIsImxldCBVTklUX1RFU1Q7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5VTklUX1RFU1QgPSB0cnVlOyAvLyBDb21tZW50IG91dCB0aGlzIGxpbmUgYWZ0ZXIgdW5pdCB0ZXN0LlxuXG5jb25zdCBERUZBVUxUX0JPQVJEX1NJWkUgPSAxMDtcblxuLyoqXG4gKiBCb2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQm9hcmQgbWFnYWdlcyBTaGlwcywgYW5kIGNoZWNrIHRoZSBoaXQgZm9yIHVzZXIuXG4gKiBAcGFyYW0ge051bWJlcn0gaW5TaXplIFNpemUgb2YgdGhlIGdhbWUgYm9hcmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpblNpemUpID0+IHtcbiAgLyoqXG4gICAqIEJvYXJkIHBsYWluIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IGJvYXJkID0ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgc2l6ZTogaW5TaXplIHx8IERFRkFVTFRfQk9BUkRfU0laRSxcbiAgICBmbGVldDogW10sXG4gICAgaGl0czogW10sXG4gICAgbWlzc2VzOiBbXSxcbiAgICBpbnRhY3Q6IFtdLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGNoZWNrIHRoZSBzaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHJldHVybnMgQm9hcmQgc2l6ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgcmV0dXJuIGJvYXJkLnNpemU7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgb3RoZXIgbW9kdWxlcyB0byBnZXQgdGhlIGxpc3Qgb2YgYWxsIGludGFjdCBwb3NpdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGludGFjdCgpIHtcbiAgICByZXR1cm4gYm9hcmQuaW50YWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgc2hpcCBpbiBmbGVldCBieSBpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFNoaXAgaWQuXG4gICAqIEByZXR1cm4gVGhlIHNoaXAgb2JqZWN0IGlmIGV4aXN0cy4gT3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFNoaXAoaWQpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQuZmluZCgoc2hpcCkgPT4gc2hpcC5pZCgpID09PSBpZCk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgb3RoZXIgbW9kdWxlcyB0byBjaGVjayBzaXplIG9mIGN1cnJlbnQgZmxlZXQuXG4gICAqL1xuICBmdW5jdGlvbiBmbGVldFNpemUoKSB7XG4gICAgcmV0dXJuIGJvYXJkLmZsZWV0Lmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWxsIHNoaXBzIGluIGZsZWV0LlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJGbGVldCgpIHtcbiAgICBib2FyZC5mbGVldCA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgYm9keSBjb29yZGluYXRlcyBvZiBhbGwgc2hpcHMgaW4gZmxlZXQuXG4gICAqL1xuICBmdW5jdGlvbiBzaGlwQ29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIGJvYXJkLmZsZWV0LnJlZHVjZSgoYXJyLCBmbGVldFNoaXApID0+IHtcbiAgICAgIGFyci5wdXNoKGZsZWV0U2hpcC5jb29yZGluYXRlcygpKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBudW1iZXIgaXMgbG9jYXRlZCBpbiByYW5nZSBvZiBib2FyZCBzaXplLlxuICAgKiBAcGFyYW0ge051bWJlcn0gbnVtIE51bWJlciB0byBjaGVja1xuICAgKiBAcmV0dXJucyB0cnVlIGlmIGluIGJvYXJkLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBsZWdhbChudW0pIHtcbiAgICByZXR1cm4gbnVtID49IDAgJiYgbnVtIDwgYm9hcmQuc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgb2YgdGhlIHN1cnJvdW5kaW5nIHBvaW50cyBvZlxuICAgKiB0aGF0IHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzaGlwSWQgU2hpcCBpZC5cbiAgICogQHJldHVybiB7QXJyYXl9IENvb3JkaW5hdGVzIG9mIHRoZSBzdXJyb3VuZGluZyBwb2ludHMgb2ZcbiAgICogdGhhdCBzaGlwLlxuICAgKi9cbiAgZnVuY3Rpb24gc2hpcFN1cnJvdW5kaW5nQXJlYShzaGlwSWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBzaGlwID0gZ2V0U2hpcChzaGlwSWQpO1xuICAgIGNvbnN0IFt1bFJvdywgdWxDb2xdID0gc2hpcC5oZWFkKCk7XG4gICAgY29uc3QgW2JyUm93LCBickNvbF0gPSBzaGlwLnRhaWwoKTtcbiAgICBsZXQgYmxSb3c7XG4gICAgbGV0IGJsQ29sO1xuICAgIGxldCB1clJvdztcbiAgICBsZXQgdXJDb2w7XG4gICAgaWYgKHNoaXAuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIFtibFJvdywgYmxDb2xdID0gc2hpcC5oZWFkKCk7XG4gICAgICBbdXJSb3csIHVyQ29sXSA9IHNoaXAudGFpbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBbYmxSb3csIGJsQ29sXSA9IHNoaXAudGFpbCgpO1xuICAgICAgW3VyUm93LCB1ckNvbF0gPSBzaGlwLmhlYWQoKTtcbiAgICB9XG4gICAgaWYgKHVsUm93IC0gMSA+PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gdWxDb2wgLSAxOyBpIDw9IHVyQ29sICsgMTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChsZWdhbChpKSkgcmVzdWx0LnB1c2goW3VsUm93IC0gMSwgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYmxSb3cgKyAxIDwgYm9hcmQuc2l6ZSkge1xuICAgICAgZm9yIChsZXQgaSA9IGJsQ29sIC0gMTsgaSA8PSBickNvbCArIDE7IGkgKz0gMSkge1xuICAgICAgICBpZiAobGVnYWwoaSkpIHJlc3VsdC5wdXNoKFtibFJvdyArIDEsIGldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVsQ29sIC0gMSA+PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gdWxSb3c7IGkgPD0gYmxSb3c7IGkgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaChbaSwgdWxDb2wgLSAxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh1ckNvbCArIDEgPCBib2FyZC5zaXplKSB7XG4gICAgICBmb3IgKGxldCBpID0gdXJSb3c7IGkgPD0gYnJSb3c7IGkgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaChbaSwgdXJDb2wgKyAxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYm9hcmQsIHB1dCBhbGwgaW50YWN0IHBvc2l0aW9uIGludG8gYm9hcmQuaW50YWN0IGFycmF5LlxuICAgKiBUaGUgcG9zaXRpb24gW3JvdywgY29sdW1uXSBpcyBjb2RlZCBhczogXCJyb3ctY29sdW1uXCIuXG4gICAqL1xuICBmdW5jdGlvbiBmaWxsSW50YWN0KCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkLnNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBib2FyZC5zaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBib2FyZC5pbnRhY3QucHVzaChgJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBwb2ludCBmcm9tIHRoZSBib2FyZC5pbnRhY3QgYXJyYXkuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwb3NpdG9uU3RyIFBvc2l0aW9uIHN0cmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21JbnRhY3QocG9zaXRpb25TdHIpIHtcbiAgICBjb25zdCBpbmRleCA9IGJvYXJkLmludGFjdC5maW5kSW5kZXgoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gcG9zaXRpb25TdHIpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcbiAgICBib2FyZC5pbnRhY3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgbmV3IHNoaXAgc2l0cyBpbiB0aGUgZml4ZWQgc2hpcCdzIGZvcmJpZGVuIHpvbmUuXG4gICAqIEBwYXJhbSB7U2hpcH0gZml4ZWRTaGlwIFRoZSBzaGlwIGFscmVhZHkgcHV0IG9uIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtBcnJheX0gbmV3SGVhZCBIZWFkIHBvc2l0aW9uW3JvdywgY29sdW1uXSBvZiB0aGUgbmV3IHNoaXAuXG4gICAqIEBwYXJhbSB7QXJyYXl9IG5ld1RhaWwgVGFpbCBwb3NpdGlvbltyb3csIGNvbHVtbl0gb2YgdGhlIG5ldyBzaGlwLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZXNlIHR3byBzaGlwcyBoYXZlIG92ZXJsYXAgZWFjaCBvdGhlciwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNPdmVybGFwKGZpeGVkU2hpcCwgbmV3SGVhZCwgbmV3VGFpbCkge1xuICAgIGNvbnN0IFtoZWFkUm93LCBoZWFkQ29sdW1uXSA9IGZpeGVkU2hpcC5oZWFkKCk7XG4gICAgY29uc3QgW3RhaWxSb3csIHRhaWxDb2x1bW5dID0gZml4ZWRTaGlwLnRhaWwoKTtcbiAgICBjb25zdCBvdmVybGFwUm93U3RhcnQgPSBNYXRoLm1heCgwLCBoZWFkUm93IC0gMSk7XG4gICAgY29uc3Qgb3ZlcmxhcENvbHVtblN0YXJ0ID0gTWF0aC5tYXgoMCwgaGVhZENvbHVtbiAtIDEpO1xuICAgIGNvbnN0IG92ZXJsYXBSb3dFbmQgPSBNYXRoLm1pbihib2FyZC5zaXplIC0gMSwgdGFpbFJvdyArIDEpO1xuICAgIGNvbnN0IG92ZXJsYXBDb2x1bW5FbmQgPSBNYXRoLm1pbihib2FyZC5zaXplIC0gMSwgdGFpbENvbHVtbiArIDEpO1xuICAgIGlmIChuZXdIZWFkWzBdIC0gbmV3VGFpbFswXSA9PT0gMCkgeyAvLyBpcyBob3Jpem9udGFsXG4gICAgICBpZiAobmV3SGVhZFswXSA8IG92ZXJsYXBSb3dTdGFydCB8fCBuZXdIZWFkWzBdID4gb3ZlcmxhcFJvd0VuZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKG5ld1RhaWxbMV0gPCBvdmVybGFwQ29sdW1uU3RhcnQgfHwgbmV3SGVhZFsxXSA+IG92ZXJsYXBDb2x1bW5FbmQpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAobmV3SGVhZFsxXSA8IG92ZXJsYXBDb2x1bW5TdGFydCB8fCBuZXdIZWFkWzFdID4gb3ZlcmxhcENvbHVtbkVuZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChuZXdUYWlsWzBdIDwgb3ZlcmxhcFJvd1N0YXJ0IHx8IG5ld0hlYWRbMF0gPiBvdmVybGFwUm93RW5kKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHRhcmdldCBwb3NpdGlvbltyb3csIGNvbHVtbl0gaXMgYXZhaWxhYmxlIGZvciBhIHNwZWNpZmljIHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgVGFyZ2V0IHJvdy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBUYXJnZXQgY29sdW1uLlxuICAgKiBAcGFyYW0ge1NoaXB9IHNoaXAgVGhlIHNoaXAgdG8gYmUgcHV0IGludG8gdGhlIGJvYXJkLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGlzIG9rLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBhdmFpbGFibGUocm93LCBjb2x1bW4sIHNoaXApIHtcbiAgICAvLyBjaGVjayBoZWFkXG4gICAgaWYgKHJvdyA8IDBcbiAgICAgIHx8IHJvdyA+PSBib2FyZC5zaXplXG4gICAgICB8fCBjb2x1bW4gPCAwXG4gICAgICB8fCBjb2x1bW4gPj0gYm9hcmQuc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBjaGVjayB0YWlsXG4gICAgY29uc3QgdGFpbFJvdyA9IChzaGlwLmlzSG9yaXpvbnRhbCgpKSA/IHJvdyA6IChyb3cgKyBzaGlwLnNpemUoKSAtIDEpO1xuICAgIGNvbnN0IHRhaWxDb2x1bW4gPSAoc2hpcC5pc0hvcml6b250YWwoKSkgPyAoY29sdW1uICsgc2hpcC5zaXplKCkgLSAxKSA6IGNvbHVtbjtcbiAgICBpZiAodGFpbFJvdyA8IDBcbiAgICAgIHx8IHRhaWxSb3cgPj0gYm9hcmQuc2l6ZVxuICAgICAgfHwgdGFpbENvbHVtbiA8IDBcbiAgICAgIHx8IHRhaWxDb2x1bW4gPj0gYm9hcmQuc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBjaGVjayBvdmVybGFwXG4gICAgY29uc3QgbmV3SGVhZCA9IFtyb3csIGNvbHVtbl07XG4gICAgY29uc3QgbmV3VGFpbCA9IFt0YWlsUm93LCB0YWlsQ29sdW1uXTtcbiAgICBpZiAoYm9hcmQuZmxlZXQuc29tZSgoZml4ZWRTaGlwKSA9PiBpc092ZXJsYXAoZml4ZWRTaGlwLCBuZXdIZWFkLCBuZXdUYWlsKSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXQgc2hpcCBpbnRvIGEgY2VydGFpbiBwb3NpdGlvbiBpZiBpdCdzIGF2YWlsYWJsZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0aGUgc2hpcCBoZWFkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRoZSBzaGlwIGhlYWQuXG4gICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBUaGUgc2hpcCBvYmplY3QuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhpcyBwb3NpdGlvbiBpcyBsZWdhbCBmb3IgYSBuZXcgc2hpcCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gcHV0U2hpcChyb3csIGNvbHVtbiwgc2hpcCkge1xuICAgIHNoaXAucHV0KHJvdywgY29sdW1uKTtcbiAgICBib2FyZC5mbGVldC5wdXNoKHNoaXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNoaXAgZnJvbSB0aGUgYm9hcmQgZmxlZXQgKG9ubHkgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBmbGVldCkuXG4gICAqIEBwYXJhbSB7U2hpcH0gU2hpcCB0byBiZSByZW1vdmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgaW5kZXggPSBib2FyZC5mbGVldC5maW5kSW5kZXgoKGZsZWV0U2hpcCkgPT4gZmxlZXRTaGlwLmlkKCkgPT09IHNoaXAuaWQoKSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgIGJvYXJkLmZsZWV0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogT25seSB1c2VkIHRvIHRvZ2dsZSBzaGlwcyBhbHJlYWR5IGluIHRoZSBmbGVldC5cbiAgICogQHBhcmFtIHtTaGlwfSBzaGlwIFRhcmdldCBzaGlwLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRvZ2dsZWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUZsZWV0U2hpcChzaGlwKSB7XG4gICAgcmVtb3ZlU2hpcChzaGlwKTtcbiAgICBzaGlwLnRvZ2dsZURpcmVjdGlvbigpO1xuICAgIGlmIChhdmFpbGFibGUoLi4uc2hpcC5oZWFkKCksIHNoaXApKSB7XG4gICAgICBwdXRTaGlwKC4uLnNoaXAuaGVhZCgpLCBzaGlwKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgdG9nZ2xlXG4gICAgc2hpcC50b2dnbGVEaXJlY3Rpb24oKTsgLy8gYmFjayB0byBvcmdpbmFsIGRpcmVjdGlvblxuICAgIHB1dFNoaXAoLi4uc2hpcC5oZWFkKCksIHNoaXApOyAvLyBwdXQgYmFjayB0byBmbGVldFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gcG9zaXRpb25bcm93LCBjb2x1bW5dIGVxdWFsIHRvIGVhY2ggb3RoZXIuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvc2l0aW9uQSBbcm93LCBjb2x1bW5dXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvc2l0aW9uQiBbcm93LCBjb2x1bW5dXG4gICAqIEByZXR1cm5zIHRydWUgaWYgZXF1YWwsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHBvc2l0aW9uRXF1YWwocG9zaXRpb25BLCBwb3NpdGlvbkIpIHtcbiAgICByZXR1cm4gKHBvc2l0aW9uQVswXSA9PT0gcG9zaXRpb25CWzBdKSAmJiAocG9zaXRpb25BWzFdID09PSBwb3NpdGlvbkJbMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgcG9zaXRpb24gaGFzIGJlZW4gaGl0IGJlZm9yZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0YXJnZXQgaGFzIGJlZW4gaGl0IGJlZm9yZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxyZWFkeUhpdChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5oaXRzLnNvbWUoKGhpdCkgPT4gcG9zaXRpb25FcXVhbChoaXQsIFtyb3csIGNvbHVtbl0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGVhdGhlciB0aGUgdGFyZ2V0IHBvc2l0aW9uIGhhcyBiZWVuIGF0dGFja2VkXG4gICAqIGJ1dCBpdCB3YXMgYSBtaXNzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGl0IHdhcyBhIG1pc3MsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFscmVhZHlNaXNzZWQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYm9hcmQubWlzc2VzLnNvbWUoKG1pc3MpID0+IHBvc2l0aW9uRXF1YWwobWlzcywgW3JvdywgY29sdW1uXSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgZXhpc3RzIGluIGF0dGFjayBoaXN0b3J5IGJvYXJkLmhpdHMgb3IgYm9hcmQubWlzc2VzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRhcmdldCBoYXMgYmVlbiBhdHRhY2tlZCBiZWZvcmUsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFscmVhZHlCZWVuQXR0YWNrZWQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYWxyZWFkeUhpdChyb3csIGNvbHVtbikgfHwgYWxyZWFkeU1pc3NlZChyb3csIGNvbHVtbik7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsbHkgdHJ5IHRvIGhpdCBhIHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqICByZXR1cm4gc2hpcCBpZCBpZiBoaXQuXG4gICAqICByZXR1cm4gLTEgaWYgbWlzcy5cbiAgICovXG4gIGZ1bmN0aW9uIHRyeUhpdFNoaXAocm93LCBjb2x1bW4pIHtcbiAgICBsZXQgaGl0ID0gLTE7XG4gICAgYm9hcmQuZmxlZXQuZm9yRWFjaCgoZmxlZXRTaGlwKSA9PiB7XG4gICAgICBpZiAoZmxlZXRTaGlwLmhpdChyb3csIGNvbHVtbikpIGhpdCA9IGZsZWV0U2hpcC5pZCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBoaXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGF0dGFjayBjYW4gaGl0IGEgc2hpcC5cbiAgICogVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFjdHVhbGx5IGhpdCBzaGlwLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGNhbiBoaXQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGNhbkhpdFNoaXAocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQuc29tZSgoZmxlZXRTaGlwKSA9PiBmbGVldFNoaXAuY2FuSGl0KHJvdywgY29sdW1uKSk7XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIGhpdCBlYWNoIG9mIHRoZSBzaGlwcyBpbiB0aGUgYm9hcmQuZmxlZXQsXG4gICAqIG9ubHkgaWYgdGhlIHRhcmdldCBwb3NpdGlvbiBoYXMgbmV2ZXIgYmVlbiBhdHRhY2tlZCBiZWZvcmUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpWSBvZiB0YXJnZXQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpWCBvZiB0YXJnZXQuXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogIGlmIGhpdCwgcmV0dXJuIHRoZSBzaGlwJ3MgaWQuXG4gICAqICByZXR1cm4gLTEgaWYgbWlzc2VkLlxuICAgKiAgcmV0dXJuIHVuZGVmaW5lZCwgaWYgYWxyZWFkeSBiZWVuIGF0dGFja2VkIGJlZm9yZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pIHtcbiAgICBjb25zdCB0YXJnZXQgPSBbcm93LCBjb2x1bW5dO1xuICAgIC8vIE11c3QgYmUgdW5kZWZpbmVkLiBJZiByZXR1cm4gZmFsc2UsIHdpbGwgYmUgY29uc2lkZXJlZCBhcyBhIG1pc3MuXG4gICAgaWYgKGFscmVhZHlCZWVuQXR0YWNrZWQoLi4udGFyZ2V0KSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBoaXQgPSB0cnlIaXRTaGlwKHJvdywgY29sdW1uKTtcbiAgICBpZiAoaGl0ICE9PSAtMSkge1xuICAgICAgYm9hcmQuaGl0cy5wdXNoKHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkLm1pc3Nlcy5wdXNoKHRhcmdldCk7XG4gICAgfVxuICAgIHJlbW92ZUZyb21JbnRhY3QoYCR7cm93fS0ke2NvbHVtbn1gKTtcbiAgICByZXR1cm4gaGl0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFsbCBzaGlwcyBhcmUgc3Vuay5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBhbGwgc2hpcHMgYXJlIHN1bmssIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gICAgcmV0dXJuIGJvYXJkLmZsZWV0LmV2ZXJ5KChmbGVldFNoaXApID0+IGZsZWV0U2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYm9hcmQuXG4gICAqL1xuICBmaWxsSW50YWN0KCk7XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBBUElcbiAgICovXG4gIGNvbnN0IGFwaSA9IHtcbiAgICBzaXplLFxuICAgIGludGFjdCxcbiAgICBnZXRTaGlwLFxuICAgIGZsZWV0U2l6ZSxcbiAgICBjbGVhckZsZWV0LFxuICAgIHNoaXBDb29yZGluYXRlcyxcbiAgICBzaGlwU3Vycm91bmRpbmdBcmVhLFxuICAgIGF2YWlsYWJsZSxcbiAgICBwdXRTaGlwLFxuICAgIHJlbW92ZVNoaXAsXG4gICAgdG9nZ2xlRmxlZXRTaGlwLFxuICAgIGFscmVhZHlIaXQsXG4gICAgYWxyZWFkeU1pc3NlZCxcbiAgICBhbHJlYWR5QmVlbkF0dGFja2VkLFxuICAgIGNhbkhpdFNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBUEkgb25seSBmb3IgdW5pdCB0ZXN0LlxuICAgKi9cbiAgaWYgKFVOSVRfVEVTVCkge1xuICAgIGFwaS5ib2FyZCA9IGJvYXJkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5hcGksXG4gIH07XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgUGxheWVyLCB7XG4gIEFJLFxuICBIVU1BTixcbiAgRUFTWSxcbiAgTk9STUFMLFxuICBIQVJELFxufSBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCB7XG4gIEFJLFxuICBIVU1BTixcbiAgRUFTWSxcbiAgTk9STUFMLFxuICBIQVJELFxufTtcblxubGV0IFVOSVRfVEVTVDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcblVOSVRfVEVTVCA9IHRydWU7IC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBvbmNlIGZpbmlzaCB0aGUgdW5pdCB0ZXN0cy5cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3QgREVGQVVMVF9CT0FSRF9TSVpFID0gMTA7IC8vIGRlZmF1bHQgZ2FtZSBib2FyZCBzaXplXG4gIC8vIERlZmF1bHQgZmxlZXQgc2V0dGluZy4gQWNjb3JkaW5nIHRvIDE5OTAncyBCYXR0bGVzaGlwIEdhbWUgb2YgTWlsdG9uIEJyYWRsZXQgQ29tcGFueS5cbiAgY29uc3QgU1RBTkRBUkRfRkxFRVQgPSBbXG4gICAgLy8gW25hbWUsIHNpemVdXG4gICAgWydjYXJyaWVyJywgNV0sXG4gICAgWydiYXR0bGVzaGlwJywgNF0sXG4gICAgWydjcnVpc2VyJywgM10sXG4gICAgWydzdWJtYXJpbmUnLCAzXSxcbiAgICBbJ2Rlc3Ryb3llcicsIDJdLFxuICBdO1xuXG4gIC8qKlxuICAgKiBHYW1lIG1vZHVsZSBwcm90by5cbiAgICogIHBsYXllcnM6IEFycmF5LiBUd28gcGxheWVycy5cbiAgICogIGN1cnJlbnRQbGF5ZXI6IE51bWJlci4gSW5kZXggb2YgY3VycmVudCBwbGF5ZXIgaW4gdGhlIHBsYXllcnMgYXJyYXkuXG4gICAqL1xuICBjb25zdCBnYW1lID0ge307XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgaW50ZWdlciBpbiByYW5nZSBvZiBbMCwgbWF4KS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBNYXggdmFsdWUgKGV4Y2x1c2l2ZSkuXG4gICAqIEByZXR1cm4gR2VuZXJhdGVkIGludGVnZXIuXG4gICAqL1xuICBmdW5jdGlvbiByYW5kb20obWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICAvKipcbiAgICogUGljayB0aGUgcmFuZG9tIHBvc2l0aW9uIFtyb3csIGNvbHVtbl0gaW4gdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge0JvYXJkfSBib2FyZCBUYXJnZXQgYm9hcmQuXG4gICAqIEByZXR1cm4gUmFuZG9tIHBvc2l0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tUG9zaXRpb24oc2l6ZSkge1xuICAgIHJldHVybiBbcmFuZG9tKHNpemUpLCByYW5kb20oc2l6ZSldO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dG9maWxsKHJhbmRvbWx5KSBhIGdhbWUgYm9hcmQgd2l0aCBmbGVldCBzaGlwcy5cbiAgICogQHBhcmFtIHtCb2FyZH0gYm9hcmQgVGFyZ2V0IGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gYXV0b2ZpbGxGbGVldChib2FyZCkge1xuICAgIFNUQU5EQVJEX0ZMRUVULmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcCguLi50ZW1wbGF0ZSk7XG4gICAgICBpZiAocmFuZG9tKDIpID09PSAxKSBzaGlwLnRvZ2dsZURpcmVjdGlvbigpO1xuICAgICAgbGV0IHBvc2l0aW9uID0gcmFuZG9tUG9zaXRpb24oYm9hcmQuc2l6ZSgpKTtcbiAgICAgIHdoaWxlICghYm9hcmQuYXZhaWxhYmxlKC4uLnBvc2l0aW9uLCBzaGlwKSkge1xuICAgICAgICBwb3NpdGlvbiA9IHJhbmRvbVBvc2l0aW9uKGJvYXJkLnNpemUoKSk7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXRTaGlwKC4uLnBvc2l0aW9uLCBzaGlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgYWxsIHBsYXllcnMuXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIHBsYXllcnNcbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggUGxheWVyIG9iamVjdCBieSB0aGVpciBpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIHBsYXllciBpZC5cbiAgICogQHJldHVybiB7UGxheWVyfSBQbGF5ZXIgb2JqZWN0IGlmIGV4aXN0cy5cbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllcihpZCkge1xuICAgIHJldHVybiBnYW1lLnBsYXllcnMuZmluZCgodGhlUGxheWVyKSA9PiB0aGVQbGF5ZXIuaWQoKSA9PT0gaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBjdXJyZW50IHBsYXllciBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtQbGF5ZXJ9IEN1cnJlbnQgcGxheWVyIG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVyc1tnYW1lLmN1cnJlbnRQbGF5ZXJdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdHdvIHBsYXllcnMgd2l0aCByYW5kb21seSBhdXRvZmlsbGVkIGJvYXJkLlxuICAgKiBBSSBwbGF5ZXIncyBkZWZhdWx0IGxldmVsIGlzIEVBU1kuXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBwbGF5ZXIxVHlwZSBIVU1BTiBvciBBSVxuICAgKiBAcGFyYW0ge1N5bWJvbH0gcGxheWVyMlR5cGUgSFVNQU4gb3IgQUlcbiAgICovXG4gIGZ1bmN0aW9uIGluaXRQbGF5ZXJzQW5kQm9hcmRzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSkge1xuICAgIGdhbWUucGxheWVycyA9IFtdO1xuICAgIGNvbnN0IHBsYXllclR5cGVzID0gW3BsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJUeXBlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV3UGxheWVyID0gUGxheWVyKGksIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIHBsYXllclR5cGVzW2ldKTtcbiAgICAgIGF1dG9maWxsRmxlZXQobmV3UGxheWVyLmJvYXJkKCkpO1xuICAgICAgZ2FtZS5wbGF5ZXJzLnB1c2gobmV3UGxheWVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBBSS5cbiAgICogSXQgY2FuIGFsc28gYmUgdXNlZCB0byBjaGFuZ2UgQUkgbGV2ZWwuXG4gICAqIEFJIHBsYXllcidzIGJvYXJkIGlzIGZpbGxlZCBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgZnVuY3Rpb24gYWdhaW5zdEFJKGxldmVsKSB7XG4gICAgZ2FtZS5wbGF5ZXJzWzFdID0gUGxheWVyKDEsIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIEFJLCBsZXZlbCk7XG4gICAgYXV0b2ZpbGxGbGVldChnYW1lLnBsYXllcnNbMV0uYm9hcmQoKSk7XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBIVU1BTi5cbiAgICovXG4gIGZ1bmN0aW9uIGFnYWluc3RIdW1hbigpIHtcbiAgICBnYW1lLnBsYXllcnNbMV0gPSBQbGF5ZXIoMSwgQm9hcmQoREVGQVVMVF9CT0FSRF9TSVpFKSwgSFVNQU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXh0IHBsYXllcidzIGluZGV4LlxuICAgKiBAcmV0dXJucyBpbmRleCBvZiBuZXh0IHBsYXllclxuICAgKi9cbiAgZnVuY3Rpb24gbmV4dEluZGV4KCkge1xuICAgIHJldHVybiAoZ2FtZS5jdXJyZW50UGxheWVyICsgMSkgJSBnYW1lLnBsYXllcnMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGlzIGh1bWFuIHBsYXllciwgZG8gbm90aGluZyh3YWl0IGZvciBodW1hbiB0byBjbGlja1xuICAgKiBvbiB0aGUgYm9hcmQgdG8gdHJpZ2dlciBhbiBhdHRhY2sgZXZlbnQpLlxuICAgKlxuICAgKiBBSSBQbGF5ZXIncyBhdHRhY2sgZnVuY3Rpb24gb25seSBkZWNpZGVzIHdoZXJlIHRvIGF0dGFjayxcbiAgICogYW5kIGNhbGxiYWNrIGNvbnRyb2xsZXIgdG8gZG8gdGhlIHJlc3Qgb2YgdGhlIGpvYi5cbiAgICogQHBhcmFtIHtCb29sZWFufSBwYXNzVG9OZXh0UGxheWVyXG4gICAqICB0cnVlIGlmIHN3aXRjaCBwbGF5ZXIuXG4gICAqICBmYWxzZSBkb2Vzbid0IHN3aXRjaCBwbGF5ZXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRyb2xsZXJBdHRhY2tDYWxsYmFjayBBY3R1YWwgYXR0YWNrXG4gICAqIGxvZ2ljIGluIENvbnRyb2xsZXIgbW9kdWxlLlxuICAgKi9cbiAgZnVuY3Rpb24gbmV4dFR1cm4ocGFzc1RvTmV4dFBsYXllciwgY29udHJvbGxlckF0dGFja0NhbGxiYWNrKSB7XG4gICAgaWYgKHBhc3NUb05leHRQbGF5ZXIpIGdhbWUuY3VycmVudFBsYXllciA9IG5leHRJbmRleCgpO1xuICAgIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLnBsYXllcnNbZ2FtZS5jdXJyZW50UGxheWVyXTtcbiAgICBpZiAoIWN1cnJQbGF5ZXIuaXNBSSgpKSByZXR1cm47IC8vIGh1bWFuIHBsYXllciBkbyBub3RoaW5nLlxuICAgIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5wbGF5ZXJzW25leHRJbmRleCgpXTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyUGxheWVyLmF0dGFjayhvcHBvbmVudC5ib2FyZCgpKTsgLy8gQUkgcGxheWVyJ3MgbmV4dCBhdHRhY2sgdGFyZ2V0XG4gICAgaWYgKHRhcmdldCkgeyAvLyBpZiB0aGVyZSdzIG5vIG1vcmUgZ3JpZCB0byBiZSBhdHRhY2tlZCwgdGFyZ2V0IHdpbGwgYmUgdW5kZWZpbmVkLlxuICAgICAgY29udHJvbGxlckF0dGFja0NhbGxiYWNrKC4uLnRhcmdldCwgb3Bwb25lbnQuaWQoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gcGxheWVyIGhhcyBwdXQgYWxsIGhpcyBzaGlwcyBpbnRvIHRoZSBib2FyZC5cbiAgICogQ29udHJvbGxlciBjYWxsIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgdGhlIGdhbWUuXG4gICAqXG4gICAqIEJlZm9yZSBzdGFydCB0aGUgZ2FtZSB0aGlzIGZ1bmN0aW9uIHdpbGwgY2hlY2tcbiAgICogd2hlYXRoZXIgYWxsIHJlcXVpcmVtZW50cyBhYm92ZSBoYXZlIGJlZW4gbWV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiAgdHJ1ZSwgaWYgYWxsIHJlcXVpcmVtZW50cyBoYXZlIGJlZW4gbWV0LCB0aGUgZ2FtZSBpcyBzdGFydGVkLlxuICAgKiAgb3RoZXJ3aXNlLCBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIC8vIGNoZWNrIGNvbmZpZ3VyYXRpb25zXG4gICAgaWYgKGdhbWUucGxheWVycy5zb21lKCh0aGVQbGF5ZXIpID0+IHRoZVBsYXllci5ib2FyZCgpLmZsZWV0U2l6ZSgpXG4gICAgICAgICE9PSBTVEFOREFSRF9GTEVFVC5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFN0YXJ0IGdhbWUuXG4gICAgLy8gU2V0IHRvIHRoZSBsYXN0IHBsYXllci4gbmV4dFR1cm4oKSB3aWxsIG1vdmUgb24uXG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBhcGkgPSB7XG4gICAgREVGQVVMVF9CT0FSRF9TSVpFLFxuICAgIHBsYXllcnMsXG4gICAgcGxheWVyLFxuICAgIGN1cnJlbnRQbGF5ZXIsXG4gICAgYXV0b2ZpbGxGbGVldCxcbiAgICBuZXh0VHVybixcbiAgICBpbml0UGxheWVyc0FuZEJvYXJkcyxcbiAgICBhZ2FpbnN0QUksXG4gICAgYWdhaW5zdEh1bWFuLFxuICAgIHN0YXJ0LFxuICB9O1xuXG4gIGlmIChVTklUX1RFU1QpIHtcbiAgICBhcGkuZ2FtZSA9IGdhbWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmFwaSxcbiAgfTtcbn0pKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZS1wcm9wcyAqL1xuLyoqXG4gKiBUaGVyZSBhcmUgdHdvIGRpZmZlcmVudCB0eXBlcyBvZiBwbGF5ZXI6XG4gKiAgMS4gYWlcbiAqICAyLiBodW1hblxuICovXG5leHBvcnQgY29uc3QgQUkgPSBTeW1ib2woJ2FpJyk7XG5leHBvcnQgY29uc3QgSFVNQU4gPSBTeW1ib2woJ2h1bWFuJyk7XG5cbi8qKlxuICogVGhyZWUgZGlmZmVyZW50IGxldmVsIG9mIEFJLlxuICovXG5leHBvcnQgY29uc3QgRUFTWSA9IFN5bWJvbCgnY2hpbGQnKTtcbmV4cG9ydCBjb25zdCBOT1JNQUwgPSBTeW1ib2woJ25vcm1hbCcpO1xuZXhwb3J0IGNvbnN0IEhBUkQgPSBTeW1ib2woJ2hhcmQnKTtcblxuLyoqXG4gKiBQbGF5ZXIgZmFjdG9yeSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Qm9hcmR9IGluQm9hcmQgUGxheWVyJ3MgZ2FtZSBib2FyZC5cbiAqIEBwYXJhbSB7U3ltYm9sfSBpblR5cGUgSFVNQU4gb3IgQUkuXG4gKiBAcGFyYW0ge1N5bWJvbH0gaW5MZXZlbCBPcHRpb25hbC4gQUkgbGV2ZWwuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbklkLCBpbkJvYXJkLCBpblR5cGUsIGluTGV2ZWwpID0+IHtcbiAgLyoqXG4gICAqIFBsYXllciBwbGFpbiBvYmplY3QuXG4gICAqL1xuICBjb25zdCBwbGF5ZXIgPSB7XG4gICAgaWQ6IGluSWQsXG4gICAgdHlwZTogaW5UeXBlLFxuICAgIGJvYXJkOiBpbkJvYXJkLFxuICAgIGxhc3RIaXQ6IFtdLCAvLyBtZW1vcml6ZSBoaXRzIChzdW5rIHNoaXAncyBjb29yZGluYXRlcyB3aWxsIGJlIHJlbW92ZWQpXG4gIH07XG5cbiAgaWYgKHBsYXllci50eXBlID09PSBBSSkge1xuICAgIHBsYXllci5sZXZlbCA9IGluTGV2ZWwgfHwgTk9STUFMOyAvLyBkZWZhdWx0IGlzIE5PUk1BTFxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwbGF5ZXIgaWQuXG4gICAqIEByZXR1cm5zIFBsYXllciBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGlkKCkge1xuICAgIHJldHVybiBwbGF5ZXIuaWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgcGxheWVyIHR5cGUuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaXMgcGxheWVyIGlzIEFJLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNBSSgpIHtcbiAgICByZXR1cm4gcGxheWVyLnR5cGUgPT09IEFJO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIEFJIHBsYXllcidzIGxldmVsLlxuICAgKiBAcmV0dXJucyBBSSBwbGF5ZXIncyBsZXZlbC4gdW5kZWZpbmVkIGlmIGl0J3Mgbm90IEFJIHBsYXllci5cbiAgICovXG4gIGZ1bmN0aW9uIGFpTGV2ZWwoKSB7XG4gICAgaWYgKHBsYXllci50eXBlICE9PSBBSSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcGxheWVyLmxldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93IEdhbWUgbW9kdWxlIHRvIHNldCBBSSBsZXZlbC5cbiAgICogQHBhcmFtIHtTeW1ib2x9IGxldmVsIEVBU1kgb3IgTk9STUFMIG9yIEhBUkRcbiAgICovXG4gIGZ1bmN0aW9uIHNldEFpTGV2ZWwobGV2ZWwpIHtcbiAgICBpZiAocGxheWVyLnR5cGUgIT09IEFJKSByZXR1cm47XG4gICAgcGxheWVyLmxldmVsID0gbGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwbGF5ZXIncyBib2FyZCBvYmplY3QuXG4gICAqIEByZXR1cm5zIFBsYXllcidzIGJvYXJkIG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGJvYXJkKCkge1xuICAgIHJldHVybiBwbGF5ZXIuYm9hcmQ7XG4gIH1cblxuICAvKipcbiAgICogUmFuZG9tbHkgcGljayBhIHRhcmdldCBmcm9tIG9wcG9uZW50IGJvYXJkJ3MgaW50YWN0IGxpc3QuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IG9wcG9uZW50Qm9hcmQgT3Bwb2VuZW50J3MgYm9hcmQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB0aGUgdGFyZ2V0IGNvb3JkaW5hdGVcbiAgICovXG4gIGZ1bmN0aW9uIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgaWYgKG9wcG9uZW50Qm9hcmQuaW50YWN0KCkubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3Bwb25lbnRCb2FyZC5pbnRhY3QoKS5sZW5ndGgpO1xuICAgIGNvbnN0IHN0ciA9IG9wcG9uZW50Qm9hcmQuaW50YWN0KClbaW5kZXhdO1xuICAgIGNvbnN0IFtyb3dTdHIsIGNvbHVtblN0cl0gPSBzdHIuc3BsaXQoJy0nKTtcbiAgICByZXR1cm4gW3BhcnNlSW50KHJvd1N0ciwgMTApLCBwYXJzZUludChjb2x1bW5TdHIsIDEwKV07XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBvZiB0d28gcG9pbnRzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93QVxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uQVxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93QlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uQlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlIG9mIHBvaW50IEEgYW5kIEIuXG4gICAqL1xuICBmdW5jdGlvbiBkaXN0YW5jZShyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBwbGF5ZXIubGFzdEhpdC5yZWR1Y2UoKGRpc3QsIGhpdCkgPT4ge1xuICAgICAgY29uc3QgeSA9IE1hdGguYWJzKHJvdyAtIGhpdFswXSk7XG4gICAgICBjb25zdCB4ID0gTWF0aC5hYnMoY29sdW1uIC0gaGl0WzFdKTtcbiAgICAgIHJldHVybiBkaXN0ICsgeCArIHk7XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBvZiBhbiBpbnRhY3QgcG9pbnQgd2l0aCBhbGwgbGFzdCBoaXQoc3Vua1xuICAgKiBzaGlwIGNvb3JkaW5hdGVzIHdpbGwgYmUgcmVtb3ZlZCkuXG4gICAqIFJldHVybiB0aGUgaW50YWN0IHBvaW50IHdpdGggdGhlIHNtYWxsZXN0IGRpc3RhbmNlLlxuICAgKiBAcGFyYW0ge0JvYXJkfSBvcHBvbmVudEJvYXJkIE9wcG9lbmVudCdzIGJvYXJkIG9iamVjdC5cbiAgICogQHJldHVybnMgdGhlIHRhcmdldCBjb29yZGluYXRlXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxBdHRhY2sob3Bwb25lbnRCb2FyZCkge1xuICAgIGlmIChvcHBvbmVudEJvYXJkLmludGFjdCgpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAocGxheWVyLmxhc3RIaXQubGVuZ3RoID09PSAwKSByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICAgIGxldCBtaW5EaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgcmV0dXJuIG9wcG9uZW50Qm9hcmQuaW50YWN0KCkucmVkdWNlKChhcnIsIHN0cikgPT4ge1xuICAgICAgY29uc3QgW3Jvd1N0ciwgY29sdW1uU3RyXSA9IHN0ci5zcGxpdCgnLScpO1xuICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQocm93U3RyLCAxMCk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBwYXJzZUludChjb2x1bW5TdHIsIDEwKTtcbiAgICAgIGNvbnN0IGRpc3QgPSBkaXN0YW5jZShyb3csIGNvbHVtbik7XG4gICAgICBpZiAoZGlzdCA8IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdDtcbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbHVtbl07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaWNrKHdpdGggYSBzbWFydCBzdHJhdGVneSkgYSB0YXJnZXQgZnJvbSBvcHBvbmVudCBib2FyZCdzIGludGFjdCBsaXN0LlxuICAgKiBAcGFyYW0ge0JvYXJkfSBvcHBvbmVudEJvYXJkIE9wcG9lbmVudCdzIGJvYXJkIG9iamVjdC5cbiAgICogQHJldHVybnMgdGhlIHRhcmdldCBjb29yZGluYXRlXG4gICAqL1xuICBmdW5jdGlvbiBzbWFydEF0dGNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Qm9hcmR9IGJvYXJkIFRoZSBCb2FyZCBvYmplY3QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIE5vdGljZSBHYW1lIG1vZHVsZSB0byBydW4gbmV4dCByb3VuZC5cbiAgICogQHJldHVyblxuICAgKiAgPT0+IEFJIHBsYXllciByZXR1cm4gdGhlIGNvb3JkaW5hdGUgb2YgdGhlIHRhcmdldCBpdCB3YW50cyB0byBhdHRhY2suXG4gICAqICA9PT4gSHVtYW4gcGxheWVyIHdpbGwgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICovXG4gIGZ1bmN0aW9uIGF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgaWYgKHBsYXllci50eXBlID09PSBBSSkge1xuICAgICAgc3dpdGNoIChwbGF5ZXIubGV2ZWwpIHtcbiAgICAgICAgY2FzZSBFQVNZOlxuICAgICAgICAgIHJldHVybiByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICAgIGNhc2UgTk9STUFMOlxuICAgICAgICAgIHJldHVybiBub3JtYWxBdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICAgIGNhc2UgSEFSRDpcbiAgICAgICAgICByZXR1cm4gc21hcnRBdHRjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBodW1hbiBwbGF5ZXIgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZnVuY3Rpb24gbWVtb3JpemVMYXN0SGl0KHJvdywgY29sdW1uKSB7XG4gICAgcGxheWVyLmxhc3RIaXQucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcmdldExhc3RIaXQoc2hpcENvb3JkaW5hdGVzKSB7XG4gICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGxheWVyLmxhc3RIaXQuZmluZEluZGV4KChwb2ludCkgPT4gKHBvaW50WzBdID09PSBjb29yZGluYXRlWzBdKVxuICAgICAgICAmJiAocG9pbnRbMV0gPT09IGNvb3JkaW5hdGVbMV0pKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHBsYXllci5sYXN0SGl0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGlzQUksXG4gICAgYWlMZXZlbCxcbiAgICBzZXRBaUxldmVsLFxuICAgIGJvYXJkLFxuICAgIGF0dGFjayxcbiAgICBtZW1vcml6ZUxhc3RIaXQsXG4gICAgZm9yZ2V0TGFzdEhpdCxcbiAgfTtcbn07XG4iLCIvKipcbiAqIFNoaXAgaWQgZ2VuZXJhdG9yLlxuICovXG5mdW5jdGlvbiogaW5maW5pdGUoKSB7XG4gIGxldCBpbmRleCA9IDE7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgeWllbGQgaW5kZXg7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxufVxuXG5jb25zdCBHRU4gPSBpbmZpbml0ZSgpO1xuY29uc3QgSE9SSVpPTlRBTCA9IFN5bWJvbCgnaG9yaXpvbnRhbCcpO1xuY29uc3QgVkVSVElDQUwgPSBTeW1ib2woJ3ZlcnRpY2FsJyk7XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0byBpbnN0YW50aWF0ZSBhIFNoaXAgb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgc2hpcC4gRXg6IGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgYW5kIGRlc3Ryb3llci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIEhvdyBtYW55IGdyaWRzIG9uIHRoZSBib2FyZCB0aGUgc2hpcCBvY2N1cGllcy5cbiAqIEByZXR1cm4gQSBzaGlwIG1vZHVsZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbk5hbWUsIGluU2l6ZSkgPT4ge1xuICAvKipcbiAgICogU2hpcCBwbGFpbiBvYmplY3QuXG4gICAqL1xuICBjb25zdCBzaGlwID0ge1xuICAgIGlkOiBHRU4ubmV4dCgpLnZhbHVlLFxuICAgIG5hbWU6IGluTmFtZSxcbiAgICBzaXplOiBpblNpemUsXG4gICAgcm93OiAwLCAvLyBkZWZhdWx0XG4gICAgY29sdW1uOiAwLCAvLyBkZWZhdWx0XG4gICAgZGlyZWN0aW9uOiBIT1JJWk9OVEFMLCAvLyBkZWZhdWx0XG4gICAgaGl0OiAwLCAvLyBIb3cgbWFueSB0aW1lcyB0aGUgc2hpcCBpcyBoaXQuXG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFNoaXAncyBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGlkKCkge1xuICAgIHJldHVybiBzaGlwLmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFNoaXAncyBuYW1lLlxuICAgKi9cbiAgZnVuY3Rpb24gbmFtZSgpIHtcbiAgICByZXR1cm4gc2hpcC5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFNpemUgb2YgdGhlIHNoaXAuXG4gICAqL1xuICBmdW5jdGlvbiBzaXplKCkge1xuICAgIHJldHVybiBzaGlwLnNpemU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUG9zaXRpb24gb2YgdGhlIHNoaXAgaGVhZC5cbiAgICovXG4gIGZ1bmN0aW9uIGhlYWQoKSB7XG4gICAgcmV0dXJuIFtzaGlwLnJvdywgc2hpcC5jb2x1bW5dO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gUG9zaXRpb24gb2YgdGhlIHNoaXAgdGFpbC5cbiAgICovXG4gIGZ1bmN0aW9uIHRhaWwoKSB7XG4gICAgc3dpdGNoIChzaGlwLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSBIT1JJWk9OVEFMOlxuICAgICAgICByZXR1cm4gW3NoaXAucm93LCBzaGlwLmNvbHVtbiArIHNoaXAuc2l6ZSAtIDFdO1xuICAgICAgY2FzZSBWRVJUSUNBTDpcbiAgICAgICAgcmV0dXJuIFtzaGlwLnJvdyArIHNoaXAuc2l6ZSAtIDEsIHNoaXAuY29sdW1uXTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNoaXAuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGRpcmVjdGlvbiBpcyBob3Jpem9udGFsLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBpc0hvcml6b250YWwoKSB7XG4gICAgcmV0dXJuIHNoaXAuZGlyZWN0aW9uID09PSBIT1JJWk9OVEFMO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFJldHVybiBob3cgbWFueSBhdHRhY2tzIHRoZSBzaGlwIGhhcyB0YWtlbi5cbiAgICovXG4gIGZ1bmN0aW9uIGNvdW50SGl0cygpIHtcbiAgICByZXR1cm4gc2hpcC5oaXQ7XG4gIH1cblxuICAvKipcbiAgICogSE9SSVpPTlRBTCAtPiBWRVJUSUNBTFxuICAgKiBWRVJUSUNBTCAtPiBIT1JJWk9OVEFMXG4gICAqIFNoaXAgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCBpZiB0aGUgYm9hcmQgaGFzIGVub3VnaCBzcGFjZS5cbiAgICogQm9hcmQgbW9kdWxlIHdpbGwgY2hlY2sgdGhhdCBmb3IgdXMgYmVmb3JlIGNhbGwgdGhpcyBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZURpcmVjdGlvbigpIHtcbiAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09IEhPUklaT05UQUwpIHtcbiAgICAgIHNoaXAuZGlyZWN0aW9uID0gVkVSVElDQUw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXAuZGlyZWN0aW9uID0gSE9SSVpPTlRBTDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3VyIHNoaXBzIGFyZSBub3QgYXdhcmUgb2YgdGhlIHNpemUgb2YgdGhlIGdhbWUgYm9hcmQuXG4gICAqIEJvYXJkIG1vZHVsZSB3aWxsIGNoZWNrIHRoZSB2YWxpZGF0aW9uIGZvciB1cy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0aGUgaGVhZCBvZiB0aGUgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0aGUgaGVhZCBvZiB0aGUgc2hpcC5cbiAgICovXG4gIGZ1bmN0aW9uIHB1dChyb3csIGNvbHVtbikge1xuICAgIHNoaXAucm93ID0gcm93O1xuICAgIHNoaXAuY29sdW1uID0gY29sdW1uO1xuICB9XG5cbiAgLyoqXG4gICAqIEp1c3QgY2hlY2sgaWYgdGhlcmUncyBhIHNoaXAgc2l0cyBvbiBhIGNlcnRhaW4gZ3JpZC5cbiAgICogVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFjdHVhbGx5IGhpdCB0aGUgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWCBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWSBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBpdCdzIGEgaGl0LCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBjYW5IaXQocm93LCBjb2x1bW4pIHtcbiAgICBzd2l0Y2ggKHNoaXAuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIEhPUklaT05UQUw6XG4gICAgICAgIGlmIChyb3cgIT09IHNoaXAucm93KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChjb2x1bW4gPCBzaGlwLmNvbHVtbiB8fCBjb2x1bW4gPiAoc2hpcC5jb2x1bW4gKyBzaGlwLnNpemUgLSAxKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVkVSVElDQUw6XG4gICAgICAgIGlmIChjb2x1bW4gIT09IHNoaXAuY29sdW1uKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChyb3cgPCBzaGlwLnJvdyB8fCByb3cgPiAoc2hpcC5yb3cgKyBzaGlwLnNpemUgLSAxKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NlcnRpb246IEVhY2ggZ3JpZCBvZiB0aGUgYm9hcmQgY2FuIG9ubHkgYmUgYXR0ZWNrZWQgb25jZS5cbiAgICogVGhlIHNoaXAgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCB3aGVhdGhlciBhIHNpbmdsZSBwYXJ0IGlzIGhpdCB0d2ljZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWCBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWSBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgc2hpcCBpcyBoaXQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGhpdChyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhbkhpdChyb3csIGNvbHVtbik7XG4gICAgaWYgKHJlc3VsdCkgc2hpcC5oaXQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGV2ZXJ5IHBvcnQgdGhlIHNoaXAgaGFzIGJlZW4gaGl0LlxuICAgKiBBcyBhbHdheXMsIHRoZSBzaGlwIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgd2hlYXRoZXIgYSBzaW5nbGUgcGFydCBpcyBoaXQgdHdpY2UuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiAoc2hpcC5oaXQgPj0gc2hpcC5zaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIEFuIGFycmF5IG9mIGNvb3JkaW5hdGVzIG9mIHRoYXQgc2hpcC5cbiAgICovXG4gIGZ1bmN0aW9uIGNvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpICs9IDEpIHtcbiAgICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gSE9SSVpPTlRBTCkge1xuICAgICAgICByZXN1bHQucHVzaChbc2hpcC5yb3csIHNoaXAuY29sdW1uICsgaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW3NoaXAucm93ICsgaSwgc2hpcC5jb2x1bW5dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuXG4gICAqICBpZiBpcyBzdW5rLCByZXR1cm4gYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgb2YgdGhhdCBzaGlwLlxuICAgKiAgb3RoZXJ3aXNlLCByZXR1cm4gdW5kZWZpbmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVwb3J0U3VuaygpIHtcbiAgICBpZiAoIWlzU3VuaykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgc2l6ZSxcbiAgICBuYW1lLFxuICAgIGhlYWQsXG4gICAgdGFpbCxcbiAgICBpc0hvcml6b250YWwsXG4gICAgY291bnRIaXRzLFxuICAgIHRvZ2dsZURpcmVjdGlvbixcbiAgICBwdXQsXG4gICAgY2FuSGl0LFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgY29vcmRpbmF0ZXMsXG4gICAgcmVwb3J0U3VuayxcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgTUFJTiA9IFN5bWJvbCgnbWFpbicpO1xuZXhwb3J0IGNvbnN0IE9QUE9ORU5UID0gU3ltYm9sKCdvcHBvbmVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBFTEVNRU5UUyA9IHtcbiAgICByb290OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpLFxuICAgIG1haW5QbGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIubWFpbicpLFxuICAgIG9wcG9uZW50UGxheWVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLm9wcG9uZW50JyksXG4gICAgcmFuZG9tOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tJyksXG4gICAgc3RhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpLFxuICAgIG5ld0dhbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdHYW1lJyksXG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbmdsZSBncmlkIGluIGJvYXJkIGFjY29yZGluZyB0byBpdCdzIGNvb3JkaW5hdGUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgR3JpZCBheGkgWS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBHcmlkIGF4aSBYLlxuICAgKiBAcmV0dXJucyBHcmlkIGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVHcmlkKHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgIGdyaWQuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgZ3JpZC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcbiAgICByZXR1cm4gZ3JpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBzZWEgbGF5ZXIgb2YgZ2FtZSBib2FyZC5cbiAgICogRWFjaCBncmlkIGlzIGFubm90YXRlZCB3aXRoIHRoZSBwbGF5ZXIncyBpZCB0byB3aG9tXG4gICAqIHRoaXMgYm9hcmQgYmVsb25ncy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgQm9hcmQgc2l6ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIElkIG9mIG93bmVyIG9mIHRoYXQgYm9hcmQuXG4gICAqIEByZXR1cm5zIFNlYSBsYXllciBkaXYgZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdTZWFMYXllcihzaXplLCBwbGF5ZXJJZCkge1xuICAgIGNvbnN0IHNlYUxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhTGF5ZXIuY2xhc3NMaXN0LmFkZCgnc2VhTGF5ZXInKTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3cgKz0gMSkge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgc2l6ZTsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGNyZWF0ZUdyaWQocm93LCBjb2x1bW4pO1xuICAgICAgICBncmlkLmRhdGFzZXQucGxheWVySWQgPSBwbGF5ZXJJZDtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICBpZiAocm93ID09PSAwKSBncmlkLmNsYXNzTGlzdC5hZGQoJ3VwcGVyQm9yZGVyJyk7XG4gICAgICAgIGlmIChjb2x1bW4gPT09IDApIGdyaWQuY2xhc3NMaXN0LmFkZCgnbGVmdEJvcmRlcicpO1xuICAgICAgICBzZWFMYXllci5hcHBlbmRDaGlsZChncmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlYUxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHNoaXAgbGF5ZXIgb2YgZ2FtZSBib2FyZC5cbiAgICogU2hpcCBwb3NpdGlvbiBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIEJvYXJkIHNpemUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNoZWNrU2hpcENhbGxiYWNrIEJvYXJkLmNhbkhpdFNoaXAoKSBmdW5jdGlvbi5cbiAgICogQHJldHVybnMgU2hpcCBsYXllciBkaXYgZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdTaGlwTGF5ZXIoc2l6ZSwgY2hlY2tTaGlwQ2FsbGJhY2spIHtcbiAgICBjb25zdCBzaGlwTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwTGF5ZXIuY2xhc3NMaXN0LmFkZCgnc2hpcExheWVyJyk7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHNpemU7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVHcmlkKHJvdywgY29sdW1uKTtcbiAgICAgICAgaWYgKHJvdyA9PT0gMCkgZ3JpZC5jbGFzc0xpc3QuYWRkKCd1cHBlckJvcmRlcicpO1xuICAgICAgICBpZiAoY29sdW1uID09PSAwKSBncmlkLmNsYXNzTGlzdC5hZGQoJ2xlZnRCb3JkZXInKTtcbiAgICAgICAgaWYgKGNoZWNrU2hpcENhbGxiYWNrKHJvdywgY29sdW1uKSkgZ3JpZC5jbGFzc0xpc3QuYWRkKCdoYXNTaGlwJyk7XG4gICAgICAgIHNoaXBMYXllci5hcHBlbmRDaGlsZChncmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBMYXllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIE1BSU4gb3IgT1BQT05FTlQgYm9hcmQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtTeW1ib2x9IG1haW5Pck9wcG9uZW50IE1BSU4gb3IgT1BQT05FTlRcbiAgICogQHJldHVybiB7RWxlbWVudH0gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudCB0aGUgZGVzaXJlZCBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldE1haW5Pck9wcG9uZW50Qm9hcmQobWFpbk9yT3Bwb25lbnQpIHtcbiAgICByZXR1cm4gKG1haW5Pck9wcG9uZW50ID09PSBNQUlOKVxuICAgICAgPyBFTEVNRU5UUy5tYWluUGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpXG4gICAgICA6IEVMRU1FTlRTLm9wcG9uZW50UGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCB0aGUgYm9hcmQgZWxlbWVudCBieSBwbGF5ZXIgaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBJZCBvZiBkZXNpcmVkIHBsYXllci5cbiAgICogQHJldHVybiB7RWxlbWVudH0gRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBkZXNpcmVkIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UGxheWVyRWxlbWVudEJ5SWQocGxheWVySWQpIHtcbiAgICBpZiAocGFyc2VJbnQoRUxFTUVOVFMubWFpblBsYXllci5kYXRhc2V0LnBsYXllcklkLCAxMClcbiAgICAgID09PSBwbGF5ZXJJZCkgcmV0dXJuIEVMRU1FTlRTLm1haW5QbGF5ZXI7XG4gICAgcmV0dXJuIEVMRU1FTlRTLm9wcG9uZW50UGxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSBwbGF5ZXIncyBib2FyZCBpbiBNQUlOIGJvYXJkIHNlY3Rpb24gb3IgT1BQT05FTlQgYm9hcmQgc2VjdGlvbi5cbiAgICogRXg6IEluIHBsYXllciAxJ3MgcGFnZSxcbiAgICogID0+IGhpcyBvd24gYm9hcmQgaXMgc2hvd24gaW4gTUFJTiBzZWN0aW9uLlxuICAgKiAgPT4gcGxheWVyIDIncyBib2FyZCBpcyBzaG93biBpbiBPUFBPTkVOVCBzZWN0aW9uLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBTaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIERlbm90ZSB3aGljaCBib2FyZCB0byBkcmF3LlxuICAgKiBAcGFyYW0ge1N5bWJvbH0gbWFpbk9yT3Bwb25lbnQgTUFJTiBvciBPUFBPTkVOVFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGVja1NoaXBDYWxsYmFjayBCb2FyZC5jYW5IaXRTaGlwKCkgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBkcmF3Qm9hcmQoXG4gICAgc2l6ZSxcbiAgICBwbGF5ZXJJZCxcbiAgICBtYWluT3JPcHBvbmVudCxcbiAgICBjaGVja1NoaXBDYWxsYmFjayxcbiAgKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TWFpbk9yT3Bwb25lbnRCb2FyZChtYWluT3JPcHBvbmVudCk7XG4gICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgIGNvbnN0IHNlYUxheWVyID0gZHJhd1NlYUxheWVyKHNpemUsIHBsYXllcklkKTtcbiAgICBjb25zdCBzaGlwTGF5ZXIgPSBkcmF3U2hpcExheWVyKHNpemUsIGNoZWNrU2hpcENhbGxiYWNrKTtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc2VhTGF5ZXIpO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzaGlwTGF5ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBtYWluIGJvYXJkIG9yIHRoZSBvcHBvbmVudCdzIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJCb2FyZChtYWluT3JPcHBvbmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldE1haW5Pck9wcG9uZW50Qm9hcmQobWFpbk9yT3Bwb25lbnQpO1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQWxsQm9hcmRzKCkge1xuICAgIGNsZWFyQm9hcmQoTUFJTik7XG4gICAgY2xlYXJCb2FyZChPUFBPTkVOVCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGEgc3BlY2lmaWMgZ3JpZCBjb2xvciBhY2NvcmRpbmcgdG8gdGhlIGF0dGFjayByZXN1bHQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgVGFyZ2V0IGdyaWQgQXhpIFkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gVGFyZ2V0IGdyaWQgQXhpIFguXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBQbGF5ZXIgaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhdHRhY2tSZXN1bHRcbiAgICogIDEuIGlmIGF0dGFjayBoaXQgYSBzaGlwLCBpdCdzIHRoZSBzaGlwJ3MgaWQuXG4gICAqICAyLiBpZiBhdHRhY2sgbWlzc2VkLCBpdCdzIC0xLlxuICAgKiAgMy4gaWYgdGhlIHRhcmdldCBzcG90IGFscmVheSBiZWVuIGF0dGFja2VkIGJlZm9yZSwgaXQncyB1bmRlZmluZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXJTZWFBZnRlckF0dGFjayhyb3csIGNvbHVtbiwgcGxheWVySWQsIGF0dGFja1Jlc3VsdCkge1xuICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBnZXRQbGF5ZXJFbGVtZW50QnlJZChwbGF5ZXJJZCk7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBwbGF5ZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCA+IC5zZWFMYXllcicpO1xuICAgIGNvbnN0IGdyaWQgPSBzZWFMYXllci5xdWVyeVNlbGVjdG9yKGAuZ3JpZFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1ufVwiXWApO1xuICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBubyBtb3JlIGdyaWQgdG8gYXR0YWNrXG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gLTEpIHsgLy8gbWlzc2VkXG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2FscmVhZHlNaXNzZWQnKTtcbiAgICB9IGVsc2UgeyAvLyBpdCdzIGEgaGl0XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2FscmVhZHlIaXQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgb2YgdGhlIHNoaXAgYm9keSwgbWFyayB0aGF0IHNoaXAgb24gdGhlIFNlYSBMYXllci5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFBsYXllciBpZC5cbiAgICogQHBhcmFtIHtBcnJheX0gc3Vua0Nvb3JkaW5hdGVzIENvb3JkaW5hdGVzIG9mIHRoZSBzdW5rIHNoaXAgKHN1bmsgYnkgdGhpcyBhdHRhY2spLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyU3Vua1NoaXBzKHBsYXllcklkLCBzdW5rQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gZ2V0UGxheWVyRWxlbWVudEJ5SWQocGxheWVySWQpO1xuICAgIGNvbnN0IHNlYUxheWVyID0gcGxheWVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQgPiAuc2VhTGF5ZXInKTtcbiAgICBzdW5rQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgZ3JpZCA9IHNlYUxheWVyLnF1ZXJ5U2VsZWN0b3IoYC5ncmlkW2RhdGEtcm93PVwiJHtjb29yZGluYXRlWzBdfVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29vcmRpbmF0ZVsxXX1cIl1gKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgbGlzdGVuZXIgdG8gYSBwbGF5ZXIncyBib2FyZCwgc28gdGhhdFxuICAgKiB3aGVuIG9wcG9uZW50IGNsaWNrIG9uIGJvYXJkIHdpbGwgY2FsbGJhY2sgY29udHJvbGxlcidzIHBsYXllckF0dGFjaygpIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBsYXllckVsZW1lbnQgbWFpblBsYXllciBvciBvcHBvbmVudFBsYXllclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDb250cm9sbGVyLnBsYXllckF0dGFjaygpIGZ1bmN0aW9uLFxuICAgKiBUaGUgYWN0dWFsIGF0dGFjayBsb2dpYyByZXNpZGVzIGluIGNvbnRyb2xsZXIuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmVjZWl2ZUF0dGFja1RvUGxheWVyc0JvYXJkKHBsYXllckVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBwbGF5ZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCA+IC5zZWFMYXllcicpO1xuICAgIGNvbnN0IGdyaWRzID0gc2VhTGF5ZXIucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKTtcbiAgICBncmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XG4gICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soXG4gICAgICAgIHBhcnNlSW50KGdyaWQuZGF0YXNldC5yb3csIDEwKSxcbiAgICAgICAgcGFyc2VJbnQoZ3JpZC5kYXRhc2V0LmNvbHVtbiwgMTApLFxuICAgICAgICBwYXJzZUludChwbGF5ZXJFbGVtZW50LmRhdGFzZXQucGxheWVySWQsIDEwKSxcbiAgICAgICkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgcmVjZWl2ZSBhdHRhY2sgZmVhdHVyZSB0byBib3RoIE1BSU4gYW5kIE9QUE9ORU5UIGJvYXJkIG9uIHRoZSBwYWdlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDb250cm9sbGVyLnBsYXllckF0dGFjaygpIGZ1bmN0aW9uLFxuICAgKiBUaGUgYWN0dWFsIGF0dGFjayBsb2dpYyByZXNpZGVzIGluIGNvbnRyb2xsZXIuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmVjZWl2ZUF0dGFjayhjYWxsYmFjaykge1xuICAgIGJpbmRSZWNlaXZlQXR0YWNrVG9QbGF5ZXJzQm9hcmQoRUxFTUVOVFMubWFpblBsYXllciwgY2FsbGJhY2spO1xuICAgIGJpbmRSZWNlaXZlQXR0YWNrVG9QbGF5ZXJzQm9hcmQoRUxFTUVOVFMub3Bwb25lbnRQbGF5ZXIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHJhbmRvbSBmbGVldCBmZWF0dXJlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDb250cm9sbGVyIHdpbGwgcHJvdmlkZSB0aGUgbG9naWMgb2ZcbiAgICogYWN0dWFsbHkgZ2VuZXJhdGluZyBhIG5ldyBmbGVldCBhbmQgcmUtZHJhdyB0aGUgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmFuZG9tRmxlZXQoY2FsbGJhY2spIHtcbiAgICBjb25zdCBwbGF5ZXJJZCA9IHBhcnNlSW50KEVMRU1FTlRTLm1haW5QbGF5ZXIuZGF0YXNldC5wbGF5ZXJJZCwgMTApO1xuICAgIEVMRU1FTlRTLnJhbmRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbGxiYWNrKE1BSU4sIHBsYXllcklkKSk7IC8vIG1haW4gcGxheWVyIHJhbmRvbSBoaXMgZmxlZXQuXG4gIH1cblxuICAvKipcbiAgICogTG9jayB0aGUgYm9hcmQgb2YgdGFyZ2V0IHBsYXllci5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFRhcmdldCBwbGF5ZXIncyBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGxvY2tCb2FyZChwbGF5ZXJJZCkge1xuICAgIGdldFBsYXllckVsZW1lbnRCeUlkKHBsYXllcklkKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogVW5sb2NrIHRoZSBib2FyZCBvZiB0YXJnZXQgcGxheWVyLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgVGFyZ2V0IHBsYXllcidzIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrQm9hcmQocGxheWVySWQpIHtcbiAgICBnZXRQbGF5ZXJFbGVtZW50QnlJZChwbGF5ZXJJZCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBMb2NrIG9wcG9uZW50J3MgYm9hcmQsIHByZXZlbnQgcGxheWVyIGZyb20gaW50ZXJhY3Qgd2l0aCB0aGUgYm9hcmRcbiAgICAqIGJlZm9yZSBzdGFydGluZyB0aGUgZ2FtZS5cbiAgICAqL1xuICBmdW5jdGlvbiBsb2NrT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBFTEVNRU5UUy5vcHBvbmVudFBsYXllci5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICAqIE9uY2UgdGhlIGdhbWUgaXMgcHJlcGFyZWQsIHVubG9jayBvcHBvbmVudCdzIGJvYXJkcywgc28gdGhhdCBwbGF5ZXIgZ2FpblxuICAgICogdGhlIGFjY2VzcyB0byB0aGUgYm9hcmQuXG4gICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBFTEVNRU5UUy5vcHBvbmVudFBsYXllci5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgQ29udHJvbGxlciB3aGVuIHBsYXllciBjbGljayBTdGFydCBidXR0b24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEFjdHVhbCBsb2dpYyBvZiBzdGFydGluZyBhIGdhbWUgaW4gQ29udHJvbGxvciBtb2R1bGUuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kU3RhcnRHYW1lQnV0dG9uKGNhbGxiYWNrKSB7XG4gICAgRUxFTUVOVFMuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYWxsYmFjaygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50IHBsYXllciBmcm9tIGNsaWNrIHRoZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbG9ja1JhbmRvbUZsZWV0QnV0dG9uKCkge1xuICAgIEVMRU1FTlRTLnJhbmRvbS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgcGxheWVyIHRvIHVzZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrUmFuZG9tRmxlZXRCdXR0b24oKSB7XG4gICAgRUxFTUVOVFMucmFuZG9tLmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50IHBsYXllciBmcm9tIGNsaWNrIHRoZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbG9ja1N0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICBFTEVNRU5UUy5zdGFydC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgcGxheWVyIHRvIGNsaWNrIHRoZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrU3RhcnRHYW1lQnV0dG9uKCkge1xuICAgIEVMRU1FTlRTLnN0YXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBDb250cm9sbGVyIHdoZW4gcGxheWVyIGNsaWNrIFJlc3RhcnQgYnV0dG9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBY3R1YWwgbG9naWMgb2YgcmVzdGFydGluZyBhIGdhbWUgaW4gQ29udHJvbGxvciBtb2R1bGUuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmVzdGFydEdhbWVCdXR0b24oY2FsbGJhY2spIHtcbiAgICBFTEVNRU5UUy5uZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRyYXdCb2FyZCxcbiAgICBjbGVhckJvYXJkLFxuICAgIGNsZWFyQWxsQm9hcmRzLFxuICAgIHJlbmRlclNlYUFmdGVyQXR0YWNrLFxuICAgIHJlbmRlclN1bmtTaGlwcyxcbiAgICBiaW5kUmVjZWl2ZUF0dGFjayxcbiAgICBiaW5kUmFuZG9tRmxlZXQsXG4gICAgbG9ja0JvYXJkLFxuICAgIHVubG9ja0JvYXJkLFxuICAgIGxvY2tPcHBvbmVudEJvYXJkLFxuICAgIHVubG9ja09wcG9uZW50Qm9hcmQsXG4gICAgYmluZFN0YXJ0R2FtZUJ1dHRvbixcbiAgICBsb2NrUmFuZG9tRmxlZXRCdXR0b24sXG4gICAgdW5sb2NrUmFuZG9tRmxlZXRCdXR0b24sXG4gICAgYmluZFJlc3RhcnRHYW1lQnV0dG9uLFxuICAgIGxvY2tTdGFydEdhbWVCdXR0b24sXG4gICAgdW5sb2NrU3RhcnRHYW1lQnV0dG9uLFxuICB9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IENvbnRyb2xsZXIsIHtcbiAgQUksXG4gIEhVTUFOLFxuICBFQVNZLFxuICBOT1JNQUwsXG4gIEhBUkQsXG4gIE1BSU4sXG4gIE9QUE9ORU5ULFxufSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvaW5kZXguY3NzJztcblxuQ29udHJvbGxlci5uZXdHYW1lKCk7XG5Db250cm9sbGVyLmVuYWJsZVJhbmRvbUZsZWV0KCk7XG5Db250cm9sbGVyLmVuYWJsZVN0YXJ0R2FtZSgpO1xuQ29udHJvbGxlci5lbmFibGVSZXN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJBSSIsIkhVTUFOIiwiRUFTWSIsIk5PUk1BTCIsIkhBUkQiLCJWaWV3IiwiTUFJTiIsIk9QUE9ORU5UIiwiaW5pdFBsYXllcnNBbmRCb2FyZHMiLCJwbGF5ZXIxVHlwZSIsInBsYXllcjJUeXBlIiwiZHJhd0FTaW5nbGVCb2FyZCIsInBsYXllciIsIm1haW5Pck9wcG9uZW50IiwiZHJhd0JvYXJkIiwiREVGQVVMVF9CT0FSRF9TSVpFIiwiaWQiLCJib2FyZCIsImNhbkhpdFNoaXAiLCJkcmF3Qm9hcmRzRm9yUGxheWVyIiwicGxheWVySWQiLCJvcHBvbmVudElkIiwicGxheWVycyIsImxlbmd0aCIsImNsZWFyQWxsQm9hcmRzIiwibG9ja09wcG9uZW50Qm9hcmQiLCJ1bmxvY2tPcHBvbmVudEJvYXJkIiwiZ2FtZW92ZXIiLCJ3aW5uZXJJZCIsImFsZXJ0IiwicGxheWVyQXR0YWNrT25lU3BvdCIsInJvdyIsImNvbHVtbiIsImFscmVhZHlCZWVuQXR0YWNrZWQiLCJ1bmRlZmluZWQiLCJzaGlwSWQiLCJyZWNlaXZlQXR0YWNrIiwicmVuZGVyU2VhQWZ0ZXJBdHRhY2siLCJjdXJyZW50UGxheWVyIiwibWVtb3JpemVMYXN0SGl0IiwiZ2V0U2hpcCIsImlzU3VuayIsInNoaXBDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzIiwicmVuZGVyU3Vua1NoaXBzIiwiZm9yZ2V0TGFzdEhpdCIsInNoaXBTdXJyb3VuZGluZ0FyZWEiLCJwbGF5ZXJBdHRhY2siLCJyZXN1bHQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiY29vcmRpbmF0ZSIsImFsbFN1bmsiLCJsb2NrQm9hcmQiLCJ1bmxvY2tCb2FyZCIsIm5leHRUdXJuIiwiZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrIiwiYmluZFJlY2VpdmVBdHRhY2siLCJyYW5kb21BZ2FpbiIsImNsZWFyRmxlZXQiLCJhdXRvZmlsbEZsZWV0IiwiY2xlYXJCb2FyZCIsImVuYWJsZVJhbmRvbUZsZWV0IiwiYmluZFJhbmRvbUZsZWV0IiwibmV3R2FtZSIsInN0YXJ0R2FtZSIsInN0YXJ0IiwibG9ja1JhbmRvbUZsZWV0QnV0dG9uIiwibG9ja1N0YXJ0R2FtZUJ1dHRvbiIsImVuYWJsZVN0YXJ0R2FtZSIsImJpbmRTdGFydEdhbWVCdXR0b24iLCJyZXN0YXJ0R2FtZSIsInVubG9ja1JhbmRvbUZsZWV0QnV0dG9uIiwidW5sb2NrU3RhcnRHYW1lQnV0dG9uIiwiZW5hYmxlUmVzdGFydEdhbWUiLCJiaW5kUmVzdGFydEdhbWVCdXR0b24iLCJVTklUX1RFU1QiLCJpblNpemUiLCJzaXplIiwiZmxlZXQiLCJoaXRzIiwibWlzc2VzIiwiaW50YWN0IiwiZmluZCIsInNoaXAiLCJmbGVldFNpemUiLCJyZWR1Y2UiLCJhcnIiLCJmbGVldFNoaXAiLCJwdXNoIiwibGVnYWwiLCJudW0iLCJoZWFkIiwidWxSb3ciLCJ1bENvbCIsInRhaWwiLCJiclJvdyIsImJyQ29sIiwiYmxSb3ciLCJibENvbCIsInVyUm93IiwidXJDb2wiLCJpc0hvcml6b250YWwiLCJpIiwiZmlsbEludGFjdCIsInJlbW92ZUZyb21JbnRhY3QiLCJwb3NpdGlvblN0ciIsImluZGV4IiwiZmluZEluZGV4IiwicG9zaXRpb24iLCJzcGxpY2UiLCJpc092ZXJsYXAiLCJmaXhlZFNoaXAiLCJuZXdIZWFkIiwibmV3VGFpbCIsImhlYWRSb3ciLCJoZWFkQ29sdW1uIiwidGFpbFJvdyIsInRhaWxDb2x1bW4iLCJvdmVybGFwUm93U3RhcnQiLCJNYXRoIiwibWF4Iiwib3ZlcmxhcENvbHVtblN0YXJ0Iiwib3ZlcmxhcFJvd0VuZCIsIm1pbiIsIm92ZXJsYXBDb2x1bW5FbmQiLCJhdmFpbGFibGUiLCJzb21lIiwicHV0U2hpcCIsInB1dCIsInJlbW92ZVNoaXAiLCJ0b2dnbGVGbGVldFNoaXAiLCJ0b2dnbGVEaXJlY3Rpb24iLCJwb3NpdGlvbkVxdWFsIiwicG9zaXRpb25BIiwicG9zaXRpb25CIiwiYWxyZWFkeUhpdCIsImhpdCIsImFscmVhZHlNaXNzZWQiLCJtaXNzIiwidHJ5SGl0U2hpcCIsImNhbkhpdCIsInRhcmdldCIsImV2ZXJ5IiwiYXBpIiwiU2hpcCIsIkJvYXJkIiwiUGxheWVyIiwiU1RBTkRBUkRfRkxFRVQiLCJnYW1lIiwicmFuZG9tIiwiZmxvb3IiLCJyYW5kb21Qb3NpdGlvbiIsInRlbXBsYXRlIiwidGhlUGxheWVyIiwicGxheWVyVHlwZXMiLCJuZXdQbGF5ZXIiLCJhZ2FpbnN0QUkiLCJsZXZlbCIsImFnYWluc3RIdW1hbiIsIm5leHRJbmRleCIsInBhc3NUb05leHRQbGF5ZXIiLCJjb250cm9sbGVyQXR0YWNrQ2FsbGJhY2siLCJjdXJyUGxheWVyIiwiaXNBSSIsIm9wcG9uZW50IiwiYXR0YWNrIiwiU3ltYm9sIiwiaW5JZCIsImluQm9hcmQiLCJpblR5cGUiLCJpbkxldmVsIiwidHlwZSIsImxhc3RIaXQiLCJhaUxldmVsIiwic2V0QWlMZXZlbCIsInJhbmRvbUF0dGFjayIsIm9wcG9uZW50Qm9hcmQiLCJzdHIiLCJzcGxpdCIsInJvd1N0ciIsImNvbHVtblN0ciIsInBhcnNlSW50IiwiZGlzdGFuY2UiLCJkaXN0IiwieSIsImFicyIsIngiLCJub3JtYWxBdHRhY2siLCJtaW5EaXN0YW5jZSIsIk51bWJlciIsIk1BWF9WQUxVRSIsInNtYXJ0QXR0Y2siLCJwb2ludCIsImluZmluaXRlIiwiR0VOIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiaW5OYW1lIiwibmV4dCIsInZhbHVlIiwibmFtZSIsImRpcmVjdGlvbiIsImNvdW50SGl0cyIsInJlcG9ydFN1bmsiLCJFTEVNRU5UUyIsInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluUGxheWVyIiwib3Bwb25lbnRQbGF5ZXIiLCJjcmVhdGVHcmlkIiwiZ3JpZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwiZHJhd1NlYUxheWVyIiwic2VhTGF5ZXIiLCJhcHBlbmRDaGlsZCIsImRyYXdTaGlwTGF5ZXIiLCJjaGVja1NoaXBDYWxsYmFjayIsInNoaXBMYXllciIsImdldE1haW5Pck9wcG9uZW50Qm9hcmQiLCJnZXRQbGF5ZXJFbGVtZW50QnlJZCIsInBhcmVudEVsZW1lbnQiLCJpbm5lckhUTUwiLCJhdHRhY2tSZXN1bHQiLCJwbGF5ZXJFbGVtZW50Iiwic3Vua0Nvb3JkaW5hdGVzIiwiYmluZFJlY2VpdmVBdHRhY2tUb1BsYXllcnNCb2FyZCIsImNhbGxiYWNrIiwiZ3JpZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIkNvbnRyb2xsZXIiLCJjc3MiXSwic291cmNlUm9vdCI6IiJ9