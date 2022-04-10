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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --blue: blue;\n  --orange: orange;\n  --red: red;\n  --board-border: var(--black);\n  --hit: var(--orange);\n  --missed: var(--gray);\n  --sunk: var(--red);\n  --transparent: #00000000;\n}\n\n.lock {\n  pointer-events: none;\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.player .seaLayer,\n.player .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.player .seaLayer {\n  background-color: var(--white);\n  user-select: none;\n  z-index: 2;\n}\n\n.player.main > .board > .seaLayer {\n  opacity: 0.7;\n  user-select: none;\n  pointer-events: none;\n}\n\n.board > .shipLayer {\n  z-index: 1;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board .grid.hasShip {\n  background-color: var(--blue);\n}\n\n.board > .seaLayer > .grid {\n  position: relative;\n}\n\n.board > .seaLayer > .grid:not(.alreadyHit):not(.alreadyMissed):hover {\n  background-color: var(--gray);\n}\n\n.board > .seaLayer > .grid.alreadyHit::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'whatshot';\n  color: var(--hit);\n}\n\n.board > .seaLayer > .grid.alreadyMissed::after {\n  position: absolute;\n  /* top: .2rem; */\n  /* left: .2rem; */\n  content: 'waves';\n  color: var(--blue);\n  font-size: 2rem;\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'local_fire_department';\n}\n\n.lock.btn {\n  opacity: .5;\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;;EAEjB,UAAU;EACV,cAAc;EACd,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,4BAA4B;EAC5B,oBAAoB;EACpB,qBAAqB;EACrB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,kEAAkE;EAClE,+DAA+D;AACjE;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,4CAA4C;EAC5C,2CAA2C;AAC7C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,WAAW;AACb","sourcesContent":["@import './norm.css';\n@import 'https://fonts.googleapis.com/icon?family=Material+Icons';\n\n:root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --blue: blue;\n  --orange: orange;\n  --red: red;\n  --board-border: var(--black);\n  --hit: var(--orange);\n  --missed: var(--gray);\n  --sunk: var(--red);\n  --transparent: #00000000;\n}\n\n.lock {\n  pointer-events: none;\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.player .seaLayer,\n.player .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.player .seaLayer {\n  background-color: var(--white);\n  user-select: none;\n  z-index: 2;\n}\n\n.player.main > .board > .seaLayer {\n  opacity: 0.7;\n  user-select: none;\n  pointer-events: none;\n}\n\n.board > .shipLayer {\n  z-index: 1;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board .grid.hasShip {\n  background-color: var(--blue);\n}\n\n.board > .seaLayer > .grid {\n  position: relative;\n}\n\n.board > .seaLayer > .grid:not(.alreadyHit):not(.alreadyMissed):hover {\n  background-color: var(--gray);\n}\n\n.board > .seaLayer > .grid.alreadyHit::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'whatshot';\n  color: var(--hit);\n}\n\n.board > .seaLayer > .grid.alreadyMissed::after {\n  position: absolute;\n  /* top: .2rem; */\n  /* left: .2rem; */\n  content: 'waves';\n  color: var(--blue);\n  font-size: 2rem;\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}\n\n.board > .seaLayer > .grid.alreadyHit.sunk::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'local_fire_department';\n}\n\n.lock.btn {\n  opacity: .5;\n}"],"sourceRoot":""}]);
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
   * Calculate the distance of an intact point with all remaining last hit(sunk
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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LElBQUFBLHFCQUFxQixFQUFyQkEscUJBYks7QUFjTEssSUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFkSztBQWVMRyxJQUFBQSxxQkFBcUIsRUFBckJBLHFCQWZLO0FBZ0JMUCxJQUFBQSxtQkFBbUIsRUFBbkJBLG1CQWhCSztBQWlCTEssSUFBQUEscUJBQXFCLEVBQXJCQTtBQWpCSyxHQUFQO0FBbUJELENBM1NjLEdBQWY7Ozs7OztVQ0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFTQTtBQUVBb0ssMkRBQUE7QUFDQUEscUVBQUE7QUFDQUEsbUVBQUE7QUFDQUEscUVBQUEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL25vcm0uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL21vZGVscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLyogYm9hcmQgKi9cXG4gIC0tYm9hcmQtc2l6ZTogMTA7XFxuICAtLWdyaWQtc2l6ZTogMnJlbTtcXG5cXG4gIC8qIGNvbG9yICovXFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tYmxhY2s6IGJsYWNrO1xcbiAgLS1ncmF5OiBncmF5O1xcbiAgLS1ibHVlOiBibHVlO1xcbiAgLS1vcmFuZ2U6IG9yYW5nZTtcXG4gIC0tcmVkOiByZWQ7XFxuICAtLWJvYXJkLWJvcmRlcjogdmFyKC0tYmxhY2spO1xcbiAgLS1oaXQ6IHZhcigtLW9yYW5nZSk7XFxuICAtLW1pc3NlZDogdmFyKC0tZ3JheSk7XFxuICAtLXN1bms6IHZhcigtLXJlZCk7XFxuICAtLXRyYW5zcGFyZW50OiAjMDAwMDAwMDA7XFxufVxcblxcbi5sb2NrIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcmVtO1xcbn1cXG5cXG4ucGxheWVyIC5zZWFMYXllcixcXG4ucGxheWVyIC5zaGlwTGF5ZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXNpemUpLCB2YXIoLS1ncmlkLXNpemUpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLXNpemUpLCB2YXIoLS1ncmlkLXNpemUpKTtcXG59XFxuXFxuLnBsYXllciAuc2VhTGF5ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ucGxheWVyLm1haW4gPiAuYm9hcmQgPiAuc2VhTGF5ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmJvYXJkID4gLnNoaXBMYXllciB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQudXBwZXJCb3JkZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5sZWZ0Qm9yZGVyIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLmhhc1NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQ6bm90KC5hbHJlYWR5SGl0KTpub3QoLmFscmVhZHlNaXNzZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5SGl0OjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC4ycmVtO1xcbiAgbGVmdDogLjJyZW07XFxuICBjb250ZW50OiAnd2hhdHNob3QnO1xcbiAgY29sb3I6IHZhcigtLWhpdCk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlNaXNzZWQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qIHRvcDogLjJyZW07ICovXFxuICAvKiBsZWZ0OiAuMnJlbTsgKi9cXG4gIGNvbnRlbnQ6ICd3YXZlcyc7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlIaXQuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdW5rKTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeUhpdC5zdW5rOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC4ycmVtO1xcbiAgbGVmdDogLjJyZW07XFxuICBjb250ZW50OiAnbG9jYWxfZmlyZV9kZXBhcnRtZW50JztcXG59XFxuXFxuLmxvY2suYnRuIHtcXG4gIG9wYWNpdHk6IC41O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCOztFQUVqQixVQUFVO0VBQ1YsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrRUFBa0U7RUFDbEUsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vbm9ybS5jc3MnO1xcbkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMnO1xcblxcbjpyb290IHtcXG4gIC8qIGJvYXJkICovXFxuICAtLWJvYXJkLXNpemU6IDEwO1xcbiAgLS1ncmlkLXNpemU6IDJyZW07XFxuXFxuICAvKiBjb2xvciAqL1xcbiAgLS13aGl0ZTogd2hpdGU7XFxuICAtLWJsYWNrOiBibGFjaztcXG4gIC0tZ3JheTogZ3JheTtcXG4gIC0tYmx1ZTogYmx1ZTtcXG4gIC0tb3JhbmdlOiBvcmFuZ2U7XFxuICAtLXJlZDogcmVkO1xcbiAgLS1ib2FyZC1ib3JkZXI6IHZhcigtLWJsYWNrKTtcXG4gIC0taGl0OiB2YXIoLS1vcmFuZ2UpO1xcbiAgLS1taXNzZWQ6IHZhcigtLWdyYXkpO1xcbiAgLS1zdW5rOiB2YXIoLS1yZWQpO1xcbiAgLS10cmFuc3BhcmVudDogIzAwMDAwMDAwO1xcbn1cXG5cXG4ubG9jayB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHJlbTtcXG59XFxuXFxuLnBsYXllciAuc2VhTGF5ZXIsXFxuLnBsYXllciAuc2hpcExheWVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxufVxcblxcbi5wbGF5ZXIgLnNlYUxheWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnBsYXllci5tYWluID4gLmJvYXJkID4gLnNlYUxheWVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIge1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLnVwcGVyQm9yZGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQubGVmdEJvcmRlciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5oYXNTaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkOm5vdCguYWxyZWFkeUhpdCk6bm90KC5hbHJlYWR5TWlzc2VkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyID4gLmdyaWQuYWxyZWFkeUhpdDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAuMnJlbTtcXG4gIGxlZnQ6IC4ycmVtO1xcbiAgY29udGVudDogJ3doYXRzaG90JztcXG4gIGNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5TWlzc2VkOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvKiB0b3A6IC4ycmVtOyAqL1xcbiAgLyogbGVmdDogLjJyZW07ICovXFxuICBjb250ZW50OiAnd2F2ZXMnO1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIgPiAuZ3JpZC5hbHJlYWR5SGl0LnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllciA+IC5ncmlkLmFscmVhZHlIaXQuc3Vuazo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAuMnJlbTtcXG4gIGxlZnQ6IC4ycmVtO1xcbiAgY29udGVudDogJ2xvY2FsX2ZpcmVfZGVwYXJ0bWVudCc7XFxufVxcblxcbi5sb2NrLmJ0biB7XFxuICBvcGFjaXR5OiAuNTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0VBQ0UsMEpBQTBKO0FBQzVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBHYW1lLCB7XG4gIEFJLFxuICBIVU1BTixcbiAgRUFTWSxcbiAgTk9STUFMLFxuICBIQVJELFxufSBmcm9tICcuL21vZGVscy9nYW1lJztcbmltcG9ydCBWaWV3LCB7XG4gIE1BSU4sXG4gIE9QUE9ORU5ULFxufSBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbiAgTUFJTixcbiAgT1BQT05FTlQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSAyIHBsYXllcnMgd2l0aCByYW5kb21seSBhdXRvZmlsbGVkIGJvYXJkXG4gICAqIGJlZm9yZSBzdGFydGluZyB0byBkcmF3IHRoZSBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGluaXRQbGF5ZXJzQW5kQm9hcmRzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSkge1xuICAgIEdhbWUuaW5pdFBsYXllcnNBbmRCb2FyZHMocGxheWVyMVR5cGUsIHBsYXllcjJUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIFZpZXcgbW9kdWxlIHRvIGRyYXcgdGhlIGJvYXJkIG9mIGEgY2VydGFpbiBwbGF5ZXIuXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgUGxheWVyIG9iamVjdC5cbiAgICogQHBhcmFtIHtTeW1ib2x9IG1haW5Pck9wcG9uZW50IEFzIE1haW4gcGxheWVyIG9yIG9wcG9uZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gZHJhd0FTaW5nbGVCb2FyZChwbGF5ZXIsIG1haW5Pck9wcG9uZW50KSB7XG4gICAgVmlldy5kcmF3Qm9hcmQoXG4gICAgICBHYW1lLkRFRkFVTFRfQk9BUkRfU0laRSxcbiAgICAgIHBsYXllci5pZCgpLFxuICAgICAgbWFpbk9yT3Bwb25lbnQsXG4gICAgICBwbGF5ZXIuYm9hcmQoKS5jYW5IaXRTaGlwLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0d28gYm9hcmRzIGluIHBlcnNwZWN0aXZlIG9mIG9uZSBwbGF5ZXIuXG4gICAqICAxLiBIaXMgb3duIGJvYXJkIChNQUlOKS5cbiAgICogIDIuIE9wcG9uZW50J3MgYm9hcmQgKE9QUE9ORU5UKS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFBsYXllcidzIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gZHJhd0JvYXJkc0ZvclBsYXllcihwbGF5ZXJJZCkge1xuICAgIGRyYXdBU2luZ2xlQm9hcmQoR2FtZS5wbGF5ZXIocGxheWVySWQpLCBNQUlOKTtcbiAgICBjb25zdCBvcHBvbmVudElkID0gKHBsYXllcklkICsgMSkgJSBHYW1lLnBsYXllcnMoKS5sZW5ndGg7XG4gICAgZHJhd0FTaW5nbGVCb2FyZChHYW1lLnBsYXllcihvcHBvbmVudElkKSwgT1BQT05FTlQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBib3RoIG1haW4gYW5kIG9wcG9uZW50J3MgYm9hcmQgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJBbGxCb2FyZHMoKSB7XG4gICAgVmlldy5jbGVhckFsbEJvYXJkcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvY2sgYWxsIGJvYXJkcywgcHJldmVudCBwbGF5ZXIgZnJvbSBpbnRlcmFjdCB3aXRoIHRoZSBib2FyZFxuICAgKiBiZWZvcmUgc3RhcnRpbmcgdGhlIGdhbWUuXG4gICAqL1xuICBmdW5jdGlvbiBsb2NrT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBWaWV3LmxvY2tPcHBvbmVudEJvYXJkKCk7XG4gIH1cblxuICAvKipcbiAgICogT25jZSB0aGUgZ2FtZSBpcyBwcmVwYXJlZCwgdW5sb2NrIGFsbCBib2FyZHMsIHNvIHRoYXQgcGxheWVyIGdhaW5cbiAgICogdGhlIGFjY2VzcyB0byB0aGUgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiB1bmxvY2tPcHBvbmVudEJvYXJkKCkge1xuICAgIFZpZXcudW5sb2NrT3Bwb25lbnRCb2FyZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdhbWVvdmVyIGxvZ2ljLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2FtZW92ZXIod2lubmVySWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICBhbGVydChgJHt3aW5uZXJJZH0gd2luIWApO1xuICAgIGxvY2tPcHBvbmVudEJvYXJkKCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsIGF0dGFjayBsb2dpYy5cbiAgICogMS4gQXR0YWNrIHRoZSB0YXJnZXQgc3BvdC5cbiAgICogMi4gUmVuZGVyIHRoZSB2aWV3IGFjY29yZGluZyB0byB0aGUgYXR0YWNrIHJlc3VsdC5cbiAgICogMy4gUmV0dXJuIGEgbGlzdCBvZiBzdXJyb3VuZGluZyBwb2ludHMgaWYgdGhpcyBhdHRhY2tcbiAgICogY2F1c2UgYSBzaGlwIHRvIHNpbmsuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdpcmQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHBvbmVudElkIElkIG9mIG9wcG9uZW50IHBsYXllci5cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqICBSZXR1cm4gdW5kZWZpbmVkIGlmIHNwb3QgYWxyZWFkeSBiZWVuIGF0dGFja2VkLlxuICAgKiAgUmV0dXJuIC0xIGlmIG1pc3NlZC5cbiAgICogIElmIGhpdCxcbiAgICogICAgUmV0dXJuIGEgbGlzdCBvZiBzdXJyb3VuZGluZyBwb2ludHMgaWYgYSBzaGlwIGlzIHN1bmsgYWZ0ZXIgdGhpcyBhdHRhY2suXG4gICAqICAgIE90aGVyd2lzZSwgcmV0dXJuIDAuXG4gICAqL1xuICBmdW5jdGlvbiBwbGF5ZXJBdHRhY2tPbmVTcG90KHJvdywgY29sdW1uLCBvcHBvbmVudElkKSB7XG4gICAgY29uc3QgYm9hcmQgPSBHYW1lLnBsYXllcihvcHBvbmVudElkKS5ib2FyZCgpO1xuICAgIC8vIGF0dGFja1xuICAgIGlmIChib2FyZC5hbHJlYWR5QmVlbkF0dGFja2VkKHJvdywgY29sdW1uKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBzaGlwSWQgPSBib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcbiAgICAvLyByZW5kZXIgYXR0YWNrZWQgc3BvdFxuICAgIFZpZXcucmVuZGVyU2VhQWZ0ZXJBdHRhY2socm93LCBjb2x1bW4sIG9wcG9uZW50SWQsIHNoaXBJZCk7XG4gICAgaWYgKHNoaXBJZCA9PT0gLTEpIHJldHVybiBzaGlwSWQ7IC8vIG1pc3NcbiAgICBHYW1lLmN1cnJlbnRQbGF5ZXIoKS5tZW1vcml6ZUxhc3RIaXQocm93LCBjb2x1bW4pOyAvLyBtZW1vcml6ZSBoaXQgY29vcmRpbmF0aW9uXG4gICAgLy8gcmVwb3J0IGNvb3JkaW5hdGVzIGlmIHNoaXAgc3Vua1xuICAgIGlmIChib2FyZC5nZXRTaGlwKHNoaXBJZCkuaXNTdW5rKCkpIHsgLy8gaGl0IGEgc2hpcCBhbmQgdGhlIHNoaXAgaXMgc3Vua1xuICAgICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gYm9hcmQuZ2V0U2hpcChzaGlwSWQpLmNvb3JkaW5hdGVzKCk7XG4gICAgICBWaWV3LnJlbmRlclN1bmtTaGlwcyhvcHBvbmVudElkLCBzaGlwQ29vcmRpbmF0ZXMpO1xuICAgICAgR2FtZS5jdXJyZW50UGxheWVyKCkuZm9yZ2V0TGFzdEhpdChzaGlwQ29vcmRpbmF0ZXMpO1xuICAgICAgcmV0dXJuIGJvYXJkLnNoaXBTdXJyb3VuZGluZ0FyZWEoc2hpcElkKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNrIHRoZSB0YXJnZXQgc3BvdC4gSWYgYSBzaGlwIHNpbmsgYWZ0ZXIgdGhpcyBhdHRhY2ssIGl0IHdpbGwgYXV0b21hdGljYWxseVxuICAgKiBhdHRhY2sgdGhlIHN1cnJvdW5kaW5nIGFyZWEgb2YgdGhhdCBzaGlwIChubyBvdGhlciBzaGlwIGNhbiBzdGF5IGluIHRoYXQgYXJlYSkuXG4gICAqIFdoZW4gaHVtYW4gcGxheWVyIGNsaWNrIG9uIHRoZSBib2FyZCwgVmlldyBtb2R1bGUgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24uXG4gICAqIFdoZW4gQUkgcGxheWVyIGRlY2lkZSB0aGUgdGFyZ2V0IHBvc2l0aW9uIG9mIG5leHQgYXR0YWNrLCBpdCB3aWxsIGFsc29cbiAgICogY2FsbGJhY2sgdGhpcyBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0YXJnZXQgZ2lyZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wcG9uZW50SWQgSWQgb2Ygb3Bwb25lbnQgcGxheWVyLlxuICAgKi9cbiAgZnVuY3Rpb24gcGxheWVyQXR0YWNrKHJvdywgY29sdW1uLCBvcHBvbmVudElkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gcGxheWVyQXR0YWNrT25lU3BvdChyb3csIGNvbHVtbiwgb3Bwb25lbnRJZCk7XG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47IC8vIHNwb3QgYWxyZWFkeSBiZWVuIGF0dGFja2VkLlxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHsgLy8gYXR0YWNrIHNpbmsgYSBzaGlwXG4gICAgICByZXN1bHQuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4gcGxheWVyQXR0YWNrT25lU3BvdCguLi5jb29yZGluYXRlLCBvcHBvbmVudElkKSk7XG4gICAgfVxuICAgIGlmIChHYW1lLnBsYXllcihvcHBvbmVudElkKS5ib2FyZCgpLmFsbFN1bmsoKSkge1xuICAgICAgZ2FtZW92ZXIoR2FtZS5jdXJyZW50UGxheWVyKCkuaWQoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXN1bHQgPT09IC0xKSB7IC8vIG1pc3NlZFxuICAgICAgVmlldy5sb2NrQm9hcmQob3Bwb25lbnRJZCk7XG4gICAgICBWaWV3LnVubG9ja0JvYXJkKEdhbWUuY3VycmVudFBsYXllcigpLmlkKCkpO1xuICAgICAgR2FtZS5uZXh0VHVybih0cnVlLCBwbGF5ZXJBdHRhY2spOyAvLyBwYXNzIGl0c2VsZiB0byB0aGUgR2FtZSBtb2R1bGUgYXMgYSBjYWxsYmFjay5cbiAgICB9IGVsc2UgeyAvLyBpZiBoaXQgYSBzaGlwLCBjdXJyZW50IHBsYXllciBjYW4gZ2l2ZSBvbmUgbW9yZSBzaG90LlxuICAgICAgR2FtZS5uZXh0VHVybihmYWxzZSwgcGxheWVyQXR0YWNrKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFzcyB0aGUgYXR0YWNrIGxvZ2ljIHRvIHRoZSBWaWV3IG1vZHVsZSBhcyBhIGNhbGxiYWNrLlxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrKCkge1xuICAgIFZpZXcuYmluZFJlY2VpdmVBdHRhY2socGxheWVyQXR0YWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IHJhbmRvbSBmbGVldCBmb3IgdGhlIHBsYXllciwgYW5kIHJlLWRyYXcgdGhlIGJvYXJkIG9uIERPTS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFRoZSBwbGF5ZXIgaWQuXG4gICAqL1xuICBmdW5jdGlvbiByYW5kb21BZ2FpbihtYWluT3JPcHBvbmVudCwgcGxheWVySWQpIHtcbiAgICAvLyBnZW5lcmF0ZSByYW5kb20gZmxlZXQgZm9yIHRoYXQgcGxheWVyXG4gICAgY29uc3QgYm9hcmQgPSBHYW1lLnBsYXllcihwbGF5ZXJJZCkuYm9hcmQoKTtcbiAgICBib2FyZC5jbGVhckZsZWV0KCk7XG4gICAgR2FtZS5hdXRvZmlsbEZsZWV0KGJvYXJkKTtcbiAgICAvLyBjbGVhciB0aGUgb2xkIGJvYXJkKG1haW4gb3Igb3Bwb25lbnQpIGZyb20gdGhlIERPTS5cbiAgICBWaWV3LmNsZWFyQm9hcmQobWFpbk9yT3Bwb25lbnQpO1xuICAgIC8vIGRyYXcgYSBuZXcgYm9hcmQgb24gRE9NXG4gICAgZHJhd0FTaW5nbGVCb2FyZChHYW1lLnBsYXllcihwbGF5ZXJJZCksIG1haW5Pck9wcG9uZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZVJhbmRvbUZsZWV0KCkge1xuICAgIFZpZXcuYmluZFJhbmRvbUZsZWV0KHJhbmRvbUFnYWluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbmV3IGdhbWUuXG4gICAqIFRoZSBnYW1lIGlzIG5vdCB5ZXQgc3RhcnRlZC5cbiAgICogSGF2ZSB0byBjYWxsIHN0YXJ0R2FtZSgpIHRvIHN0YXJ0LlxuICAgKi9cbiAgZnVuY3Rpb24gbmV3R2FtZSgpIHtcbiAgICBpbml0UGxheWVyc0FuZEJvYXJkcyhIVU1BTiwgQUkpO1xuICAgIGRyYXdCb2FyZHNGb3JQbGF5ZXIoMCk7IC8vIGluIGh1bWFuIHBsYXllcidzIHBlcnNwZWN0aXZlXG4gICAgbG9ja09wcG9uZW50Qm9hcmQoKTtcbiAgICBlbmFibGVCb2FyZFJlY2VpdmVBdHRhY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgZ2FtZSwgYW5kIHVubG9jayBvcHBvbmVudCdzIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIEdhbWUuc3RhcnQoKTtcbiAgICBHYW1lLm5leHRUdXJuKHBsYXllckF0dGFjayk7IC8vIHBhc3MgaXRzZWxmIHRvIHRoZSBHYW1lIG1vZHVsZSBhcyBhIGNhbGxiYWNrLlxuICAgIHVubG9ja09wcG9uZW50Qm9hcmQoKTtcbiAgICAvLyBvbmNlIHRoZSBnYW1lIHN0YXJ0LCBwbGF5ZXIgY2Fubm90IGNoYW5nZSB0aGUgZmxlZXQgdW50aWwgdGhlIGVuZCBvZiB0aGUgZ2FtZS5cbiAgICBWaWV3LmxvY2tSYW5kb21GbGVldEJ1dHRvbigpO1xuICAgIFZpZXcubG9ja1N0YXJ0R2FtZUJ1dHRvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgVmlldyB0byBiaW5kIGxpc3RlbmVyIG9uIFN0YXJ0IGdhbWUgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlU3RhcnRHYW1lKCkge1xuICAgIFZpZXcuYmluZFN0YXJ0R2FtZUJ1dHRvbihzdGFydEdhbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlLWluaXRpYWxpemUgYSBuZXcgZ2FtZSB3aXRoIHJhbmRvbWx5IGF1dG8tZmlsbGVkIGZsZWV0IGZvciBib3RoIHBsYXllci5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xuICAgIGNsZWFyQWxsQm9hcmRzKCk7XG4gICAgbmV3R2FtZSgpO1xuICAgIFZpZXcudW5sb2NrUmFuZG9tRmxlZXRCdXR0b24oKTtcbiAgICBWaWV3LnVubG9ja1N0YXJ0R2FtZUJ1dHRvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgVmlldyBtb2R1bGUgdG8gYmluZCByZXN0YXJ0IGdhbWUgZmVhdHVyZSB0byBET00gZWxlbWVudHMuXG4gICAqL1xuICBmdW5jdGlvbiBlbmFibGVSZXN0YXJ0R2FtZSgpIHtcbiAgICBWaWV3LmJpbmRSZXN0YXJ0R2FtZUJ1dHRvbihyZXN0YXJ0R2FtZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXRQbGF5ZXJzQW5kQm9hcmRzLFxuICAgIGRyYXdBU2luZ2xlQm9hcmQsXG4gICAgZHJhd0JvYXJkc0ZvclBsYXllcixcbiAgICBjbGVhckFsbEJvYXJkcyxcbiAgICBlbmFibGVCb2FyZFJlY2VpdmVBdHRhY2ssXG4gICAgZW5hYmxlUmFuZG9tRmxlZXQsXG4gICAgbG9ja09wcG9uZW50Qm9hcmQsXG4gICAgdW5sb2NrT3Bwb25lbnRCb2FyZCxcbiAgICBuZXdHYW1lLFxuICAgIHN0YXJ0R2FtZSxcbiAgICByZXN0YXJ0R2FtZSxcbiAgICBlbmFibGVTdGFydEdhbWUsXG4gICAgZW5hYmxlUmVzdGFydEdhbWUsXG4gIH07XG59KSgpO1xuIiwibGV0IFVOSVRfVEVTVDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcblVOSVRfVEVTVCA9IHRydWU7IC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBhZnRlciB1bml0IHRlc3QuXG5cbmNvbnN0IERFRkFVTFRfQk9BUkRfU0laRSA9IDEwO1xuXG4vKipcbiAqIEJvYXJkIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBCb2FyZCBtYWdhZ2VzIFNoaXBzLCBhbmQgY2hlY2sgdGhlIGhpdCBmb3IgdXNlci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBpblNpemUgU2l6ZSBvZiB0aGUgZ2FtZSBib2FyZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluU2l6ZSkgPT4ge1xuICAvKipcbiAgICogQm9hcmQgcGxhaW4gb2JqZWN0LlxuICAgKi9cbiAgY29uc3QgYm9hcmQgPSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICBzaXplOiBpblNpemUgfHwgREVGQVVMVF9CT0FSRF9TSVpFLFxuICAgIGZsZWV0OiBbXSxcbiAgICBoaXRzOiBbXSxcbiAgICBtaXNzZXM6IFtdLFxuICAgIGludGFjdDogW10sXG4gIH07XG5cbiAgLyoqXG4gICAqIEFsbG93IG90aGVyIG1vZHVsZXMgdG8gY2hlY2sgdGhlIHNpemUgb2YgdGhlIGJvYXJkLlxuICAgKiBAcmV0dXJucyBCb2FyZCBzaXplLlxuICAgKi9cbiAgZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICByZXR1cm4gYm9hcmQuc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGdldCB0aGUgbGlzdCBvZiBhbGwgaW50YWN0IHBvc2l0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gaW50YWN0KCkge1xuICAgIHJldHVybiBib2FyZC5pbnRhY3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBzaGlwIGluIGZsZWV0IGJ5IGlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgU2hpcCBpZC5cbiAgICogQHJldHVybiBUaGUgc2hpcCBvYmplY3QgaWYgZXhpc3RzLiBPdGhlcndpc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U2hpcChpZCkge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5maW5kKChzaGlwKSA9PiBzaGlwLmlkKCkgPT09IGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGNoZWNrIHNpemUgb2YgY3VycmVudCBmbGVldC5cbiAgICovXG4gIGZ1bmN0aW9uIGZsZWV0U2l6ZSgpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgc2hpcHMgaW4gZmxlZXQuXG4gICAqL1xuICBmdW5jdGlvbiBjbGVhckZsZWV0KCkge1xuICAgIGJvYXJkLmZsZWV0ID0gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBib2R5IGNvb3JkaW5hdGVzIG9mIGFsbCBzaGlwcyBpbiBmbGVldC5cbiAgICovXG4gIGZ1bmN0aW9uIHNoaXBDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQucmVkdWNlKChhcnIsIGZsZWV0U2hpcCkgPT4ge1xuICAgICAgYXJyLnB1c2goZmxlZXRTaGlwLmNvb3JkaW5hdGVzKCkpO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9LCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIG51bWJlciBpcyBsb2NhdGVkIGluIHJhbmdlIG9mIGJvYXJkIHNpemUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBudW0gTnVtYmVyIHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaW4gYm9hcmQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGxlZ2FsKG51bSkge1xuICAgIHJldHVybiBudW0gPj0gMCAmJiBudW0gPCBib2FyZC5zaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBhcnJheSBvZiBjb29yZGluYXRlcyBvZiB0aGUgc3Vycm91bmRpbmcgcG9pbnRzIG9mXG4gICAqIHRoYXQgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNoaXBJZCBTaGlwIGlkLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gQ29vcmRpbmF0ZXMgb2YgdGhlIHN1cnJvdW5kaW5nIHBvaW50cyBvZlxuICAgKiB0aGF0IHNoaXAuXG4gICAqL1xuICBmdW5jdGlvbiBzaGlwU3Vycm91bmRpbmdBcmVhKHNoaXBJZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwKHNoaXBJZCk7XG4gICAgY29uc3QgW3VsUm93LCB1bENvbF0gPSBzaGlwLmhlYWQoKTtcbiAgICBjb25zdCBbYnJSb3csIGJyQ29sXSA9IHNoaXAudGFpbCgpO1xuICAgIGxldCBibFJvdztcbiAgICBsZXQgYmxDb2w7XG4gICAgbGV0IHVyUm93O1xuICAgIGxldCB1ckNvbDtcbiAgICBpZiAoc2hpcC5pc0hvcml6b250YWwoKSkge1xuICAgICAgW2JsUm93LCBibENvbF0gPSBzaGlwLmhlYWQoKTtcbiAgICAgIFt1clJvdywgdXJDb2xdID0gc2hpcC50YWlsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFtibFJvdywgYmxDb2xdID0gc2hpcC50YWlsKCk7XG4gICAgICBbdXJSb3csIHVyQ29sXSA9IHNoaXAuaGVhZCgpO1xuICAgIH1cbiAgICBpZiAodWxSb3cgLSAxID49IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSB1bENvbCAtIDE7IGkgPD0gdXJDb2wgKyAxOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGxlZ2FsKGkpKSByZXN1bHQucHVzaChbdWxSb3cgLSAxLCBpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChibFJvdyArIDEgPCBib2FyZC5zaXplKSB7XG4gICAgICBmb3IgKGxldCBpID0gYmxDb2wgLSAxOyBpIDw9IGJyQ29sICsgMTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChsZWdhbChpKSkgcmVzdWx0LnB1c2goW2JsUm93ICsgMSwgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodWxDb2wgLSAxID49IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSB1bFJvdzsgaSA8PSBibFJvdzsgaSArPSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpLCB1bENvbCAtIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVyQ29sICsgMSA8IGJvYXJkLnNpemUpIHtcbiAgICAgIGZvciAobGV0IGkgPSB1clJvdzsgaSA8PSBiclJvdzsgaSArPSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpLCB1ckNvbCArIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBib2FyZCwgcHV0IGFsbCBpbnRhY3QgcG9zaXRpb24gaW50byBib2FyZC5pbnRhY3QgYXJyYXkuXG4gICAqIFRoZSBwb3NpdGlvbiBbcm93LCBjb2x1bW5dIGlzIGNvZGVkIGFzOiBcInJvdy1jb2x1bW5cIi5cbiAgICovXG4gIGZ1bmN0aW9uIGZpbGxJbnRhY3QoKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQuc2l6ZTsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IGJvYXJkLnNpemU7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGJvYXJkLmludGFjdC5wdXNoKGAke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHBvaW50IGZyb20gdGhlIGJvYXJkLmludGFjdCBhcnJheS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBvc2l0b25TdHIgUG9zaXRpb24gc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUludGFjdChwb3NpdGlvblN0cikge1xuICAgIGNvbnN0IGluZGV4ID0gYm9hcmQuaW50YWN0LmZpbmRJbmRleCgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSBwb3NpdGlvblN0cik7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgIGJvYXJkLmludGFjdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBuZXcgc2hpcCBzaXRzIGluIHRoZSBmaXhlZCBzaGlwJ3MgZm9yYmlkZW4gem9uZS5cbiAgICogQHBhcmFtIHtTaGlwfSBmaXhlZFNoaXAgVGhlIHNoaXAgYWxyZWFkeSBwdXQgb24gdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge0FycmF5fSBuZXdIZWFkIEhlYWQgcG9zaXRpb25bcm93LCBjb2x1bW5dIG9mIHRoZSBuZXcgc2hpcC5cbiAgICogQHBhcmFtIHtBcnJheX0gbmV3VGFpbCBUYWlsIHBvc2l0aW9uW3JvdywgY29sdW1uXSBvZiB0aGUgbmV3IHNoaXAuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlc2UgdHdvIHNoaXBzIGhhdmUgb3ZlcmxhcCBlYWNoIG90aGVyLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBpc092ZXJsYXAoZml4ZWRTaGlwLCBuZXdIZWFkLCBuZXdUYWlsKSB7XG4gICAgY29uc3QgW2hlYWRSb3csIGhlYWRDb2x1bW5dID0gZml4ZWRTaGlwLmhlYWQoKTtcbiAgICBjb25zdCBbdGFpbFJvdywgdGFpbENvbHVtbl0gPSBmaXhlZFNoaXAudGFpbCgpO1xuICAgIGNvbnN0IG92ZXJsYXBSb3dTdGFydCA9IE1hdGgubWF4KDAsIGhlYWRSb3cgLSAxKTtcbiAgICBjb25zdCBvdmVybGFwQ29sdW1uU3RhcnQgPSBNYXRoLm1heCgwLCBoZWFkQ29sdW1uIC0gMSk7XG4gICAgY29uc3Qgb3ZlcmxhcFJvd0VuZCA9IE1hdGgubWluKGJvYXJkLnNpemUgLSAxLCB0YWlsUm93ICsgMSk7XG4gICAgY29uc3Qgb3ZlcmxhcENvbHVtbkVuZCA9IE1hdGgubWluKGJvYXJkLnNpemUgLSAxLCB0YWlsQ29sdW1uICsgMSk7XG4gICAgaWYgKG5ld0hlYWRbMF0gLSBuZXdUYWlsWzBdID09PSAwKSB7IC8vIGlzIGhvcml6b250YWxcbiAgICAgIGlmIChuZXdIZWFkWzBdIDwgb3ZlcmxhcFJvd1N0YXJ0IHx8IG5ld0hlYWRbMF0gPiBvdmVybGFwUm93RW5kKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobmV3VGFpbFsxXSA8IG92ZXJsYXBDb2x1bW5TdGFydCB8fCBuZXdIZWFkWzFdID4gb3ZlcmxhcENvbHVtbkVuZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChuZXdIZWFkWzFdIDwgb3ZlcmxhcENvbHVtblN0YXJ0IHx8IG5ld0hlYWRbMV0gPiBvdmVybGFwQ29sdW1uRW5kKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5ld1RhaWxbMF0gPCBvdmVybGFwUm93U3RhcnQgfHwgbmV3SGVhZFswXSA+IG92ZXJsYXBSb3dFbmQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdGFyZ2V0IHBvc2l0aW9uW3JvdywgY29sdW1uXSBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBUYXJnZXQgcm93LlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIFRhcmdldCBjb2x1bW4uXG4gICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBUaGUgc2hpcCB0byBiZSBwdXQgaW50byB0aGUgYm9hcmQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgaXMgb2ssIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGF2YWlsYWJsZShyb3csIGNvbHVtbiwgc2hpcCkge1xuICAgIC8vIGNoZWNrIGhlYWRcbiAgICBpZiAocm93IDwgMFxuICAgICAgfHwgcm93ID49IGJvYXJkLnNpemVcbiAgICAgIHx8IGNvbHVtbiA8IDBcbiAgICAgIHx8IGNvbHVtbiA+PSBib2FyZC5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIHRhaWxcbiAgICBjb25zdCB0YWlsUm93ID0gKHNoaXAuaXNIb3Jpem9udGFsKCkpID8gcm93IDogKHJvdyArIHNoaXAuc2l6ZSgpIC0gMSk7XG4gICAgY29uc3QgdGFpbENvbHVtbiA9IChzaGlwLmlzSG9yaXpvbnRhbCgpKSA/IChjb2x1bW4gKyBzaGlwLnNpemUoKSAtIDEpIDogY29sdW1uO1xuICAgIGlmICh0YWlsUm93IDwgMFxuICAgICAgfHwgdGFpbFJvdyA+PSBib2FyZC5zaXplXG4gICAgICB8fCB0YWlsQ29sdW1uIDwgMFxuICAgICAgfHwgdGFpbENvbHVtbiA+PSBib2FyZC5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIG92ZXJsYXBcbiAgICBjb25zdCBuZXdIZWFkID0gW3JvdywgY29sdW1uXTtcbiAgICBjb25zdCBuZXdUYWlsID0gW3RhaWxSb3csIHRhaWxDb2x1bW5dO1xuICAgIGlmIChib2FyZC5mbGVldC5zb21lKChmaXhlZFNoaXApID0+IGlzT3ZlcmxhcChmaXhlZFNoaXAsIG5ld0hlYWQsIG5ld1RhaWwpKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1dCBzaGlwIGludG8gYSBjZXJ0YWluIHBvc2l0aW9uIGlmIGl0J3MgYXZhaWxhYmxlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRoZSBzaGlwIGhlYWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGhlIHNoaXAgaGVhZC5cbiAgICogQHBhcmFtIHtTaGlwfSBzaGlwIFRoZSBzaGlwIG9iamVjdC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHBvc2l0aW9uIGlzIGxlZ2FsIGZvciBhIG5ldyBzaGlwLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBwdXRTaGlwKHJvdywgY29sdW1uLCBzaGlwKSB7XG4gICAgc2hpcC5wdXQocm93LCBjb2x1bW4pO1xuICAgIGJvYXJkLmZsZWV0LnB1c2goc2hpcCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgc2hpcCBmcm9tIHRoZSBib2FyZCBmbGVldCAob25seSBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIGZsZWV0KS5cbiAgICogQHBhcmFtIHtTaGlwfSBTaGlwIHRvIGJlIHJlbW92ZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVTaGlwKHNoaXApIHtcbiAgICBjb25zdCBpbmRleCA9IGJvYXJkLmZsZWV0LmZpbmRJbmRleCgoZmxlZXRTaGlwKSA9PiBmbGVldFNoaXAuaWQoKSA9PT0gc2hpcC5pZCgpKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG4gICAgYm9hcmQuZmxlZXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IHVzZWQgdG8gdG9nZ2xlIHNoaXBzIGFscmVhZHkgaW4gdGhlIGZsZWV0LlxuICAgKiBAcGFyYW0ge1NoaXB9IHNoaXAgVGFyZ2V0IHNoaXAuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdG9nZ2xlZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gdG9nZ2xlRmxlZXRTaGlwKHNoaXApIHtcbiAgICByZW1vdmVTaGlwKHNoaXApO1xuICAgIHNoaXAudG9nZ2xlRGlyZWN0aW9uKCk7XG4gICAgaWYgKGF2YWlsYWJsZSguLi5zaGlwLmhlYWQoKSwgc2hpcCkpIHtcbiAgICAgIHB1dFNoaXAoLi4uc2hpcC5oZWFkKCksIHNoaXApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIGNhbm5vdCB0b2dnbGVcbiAgICBzaGlwLnRvZ2dsZURpcmVjdGlvbigpOyAvLyBiYWNrIHRvIG9yZ2luYWwgZGlyZWN0aW9uXG4gICAgcHV0U2hpcCguLi5zaGlwLmhlYWQoKSwgc2hpcCk7IC8vIHB1dCBiYWNrIHRvIGZsZWV0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byBwb3NpdGlvbltyb3csIGNvbHVtbl0gZXF1YWwgdG8gZWFjaCBvdGhlci5cbiAgICogQHBhcmFtIHtBcnJheX0gcG9zaXRpb25BIFtyb3csIGNvbHVtbl1cbiAgICogQHBhcmFtIHtBcnJheX0gcG9zaXRpb25CIFtyb3csIGNvbHVtbl1cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBlcXVhbCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gcG9zaXRpb25FcXVhbChwb3NpdGlvbkEsIHBvc2l0aW9uQikge1xuICAgIHJldHVybiAocG9zaXRpb25BWzBdID09PSBwb3NpdGlvbkJbMF0pICYmIChwb3NpdGlvbkFbMV0gPT09IHBvc2l0aW9uQlsxXSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hlYXRoZXIgdGhlIHRhcmdldCBwb3NpdGlvbiBoYXMgYmVlbiBoaXQgYmVmb3JlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRhcmdldCBoYXMgYmVlbiBoaXQgYmVmb3JlLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBhbHJlYWR5SGl0KHJvdywgY29sdW1uKSB7XG4gICAgcmV0dXJuIGJvYXJkLmhpdHMuc29tZSgoaGl0KSA9PiBwb3NpdGlvbkVxdWFsKGhpdCwgW3JvdywgY29sdW1uXSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgcG9zaXRpb24gaGFzIGJlZW4gYXR0YWNrZWRcbiAgICogYnV0IGl0IHdhcyBhIG1pc3MuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaXQgd2FzIGEgbWlzcywgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxyZWFkeU1pc3NlZChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5taXNzZXMuc29tZSgobWlzcykgPT4gcG9zaXRpb25FcXVhbChtaXNzLCBbcm93LCBjb2x1bW5dKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hlYXRoZXIgdGhlIHRhcmdldCBleGlzdHMgaW4gYXR0YWNrIGhpc3RvcnkgYm9hcmQuaGl0cyBvciBib2FyZC5taXNzZXMuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGFyZ2V0IGhhcyBiZWVuIGF0dGFja2VkIGJlZm9yZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxyZWFkeUJlZW5BdHRhY2tlZChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBhbHJlYWR5SGl0KHJvdywgY29sdW1uKSB8fCBhbHJlYWR5TWlzc2VkKHJvdywgY29sdW1uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3R1YWxseSB0cnkgdG8gaGl0IGEgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICogIHJldHVybiBzaGlwIGlkIGlmIGhpdC5cbiAgICogIHJldHVybiAtMSBpZiBtaXNzLlxuICAgKi9cbiAgZnVuY3Rpb24gdHJ5SGl0U2hpcChyb3csIGNvbHVtbikge1xuICAgIGxldCBoaXQgPSAtMTtcbiAgICBib2FyZC5mbGVldC5mb3JFYWNoKChmbGVldFNoaXApID0+IHtcbiAgICAgIGlmIChmbGVldFNoaXAuaGl0KHJvdywgY29sdW1uKSkgaGl0ID0gZmxlZXRTaGlwLmlkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgYXR0YWNrIGNhbiBoaXQgYSBzaGlwLlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXNuJ3QgYWN0dWFsbHkgaGl0IHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgY2FuIGhpdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gY2FuSGl0U2hpcChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5zb21lKChmbGVldFNoaXApID0+IGZsZWV0U2hpcC5jYW5IaXQocm93LCBjb2x1bW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gaGl0IGVhY2ggb2YgdGhlIHNoaXBzIGluIHRoZSBib2FyZC5mbGVldCxcbiAgICogb25seSBpZiB0aGUgdGFyZ2V0IHBvc2l0aW9uIGhhcyBuZXZlciBiZWVuIGF0dGFja2VkIGJlZm9yZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGlZIG9mIHRhcmdldC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGlYIG9mIHRhcmdldC5cbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKiAgaWYgaGl0LCByZXR1cm4gdGhlIHNoaXAncyBpZC5cbiAgICogIHJldHVybiAtMSBpZiBtaXNzZWQuXG4gICAqICByZXR1cm4gdW5kZWZpbmVkLCBpZiBhbHJlYWR5IGJlZW4gYXR0YWNrZWQgYmVmb3JlLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IHRhcmdldCA9IFtyb3csIGNvbHVtbl07XG4gICAgLy8gTXVzdCBiZSB1bmRlZmluZWQuIElmIHJldHVybiBmYWxzZSwgd2lsbCBiZSBjb25zaWRlcmVkIGFzIGEgbWlzcy5cbiAgICBpZiAoYWxyZWFkeUJlZW5BdHRhY2tlZCguLi50YXJnZXQpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGhpdCA9IHRyeUhpdFNoaXAocm93LCBjb2x1bW4pO1xuICAgIGlmIChoaXQgIT09IC0xKSB7XG4gICAgICBib2FyZC5oaXRzLnB1c2godGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmQubWlzc2VzLnB1c2godGFyZ2V0KTtcbiAgICB9XG4gICAgcmVtb3ZlRnJvbUludGFjdChgJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgIHJldHVybiBoaXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYWxsIHNoaXBzIGFyZSBzdW5rLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGFsbCBzaGlwcyBhcmUgc3Vuaywgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQuZXZlcnkoKGZsZWV0U2hpcCkgPT4gZmxlZXRTaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBib2FyZC5cbiAgICovXG4gIGZpbGxJbnRhY3QoKTtcblxuICAvKipcbiAgICogUHVibGljIEFQSVxuICAgKi9cbiAgY29uc3QgYXBpID0ge1xuICAgIHNpemUsXG4gICAgaW50YWN0LFxuICAgIGdldFNoaXAsXG4gICAgZmxlZXRTaXplLFxuICAgIGNsZWFyRmxlZXQsXG4gICAgc2hpcENvb3JkaW5hdGVzLFxuICAgIHNoaXBTdXJyb3VuZGluZ0FyZWEsXG4gICAgYXZhaWxhYmxlLFxuICAgIHB1dFNoaXAsXG4gICAgcmVtb3ZlU2hpcCxcbiAgICB0b2dnbGVGbGVldFNoaXAsXG4gICAgYWxyZWFkeUhpdCxcbiAgICBhbHJlYWR5TWlzc2VkLFxuICAgIGFscmVhZHlCZWVuQXR0YWNrZWQsXG4gICAgY2FuSGl0U2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFN1bmssXG4gIH07XG5cbiAgLyoqXG4gICAqIEFQSSBvbmx5IGZvciB1bml0IHRlc3QuXG4gICAqL1xuICBpZiAoVU5JVF9URVNUKSB7XG4gICAgYXBpLmJvYXJkID0gYm9hcmQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmFwaSxcbiAgfTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkJztcbmltcG9ydCBQbGF5ZXIsIHtcbiAgQUksXG4gIEhVTUFOLFxuICBFQVNZLFxuICBOT1JNQUwsXG4gIEhBUkQsXG59IGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IHtcbiAgQUksXG4gIEhVTUFOLFxuICBFQVNZLFxuICBOT1JNQUwsXG4gIEhBUkQsXG59O1xuXG5sZXQgVU5JVF9URVNUO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuVU5JVF9URVNUID0gdHJ1ZTsgLy8gQ29tbWVudCBvdXQgdGhpcyBsaW5lIG9uY2UgZmluaXNoIHRoZSB1bml0IHRlc3RzLlxuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBERUZBVUxUX0JPQVJEX1NJWkUgPSAxMDsgLy8gZGVmYXVsdCBnYW1lIGJvYXJkIHNpemVcbiAgLy8gRGVmYXVsdCBmbGVldCBzZXR0aW5nLiBBY2NvcmRpbmcgdG8gMTk5MCdzIEJhdHRsZXNoaXAgR2FtZSBvZiBNaWx0b24gQnJhZGxldCBDb21wYW55LlxuICBjb25zdCBTVEFOREFSRF9GTEVFVCA9IFtcbiAgICAvLyBbbmFtZSwgc2l6ZV1cbiAgICBbJ2NhcnJpZXInLCA1XSxcbiAgICBbJ2JhdHRsZXNoaXAnLCA0XSxcbiAgICBbJ2NydWlzZXInLCAzXSxcbiAgICBbJ3N1Ym1hcmluZScsIDNdLFxuICAgIFsnZGVzdHJveWVyJywgMl0sXG4gIF07XG5cbiAgLyoqXG4gICAqIEdhbWUgbW9kdWxlIHByb3RvLlxuICAgKiAgcGxheWVyczogQXJyYXkuIFR3byBwbGF5ZXJzLlxuICAgKiAgY3VycmVudFBsYXllcjogTnVtYmVyLiBJbmRleCBvZiBjdXJyZW50IHBsYXllciBpbiB0aGUgcGxheWVycyBhcnJheS5cbiAgICovXG4gIGNvbnN0IGdhbWUgPSB7fTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgYSBpbnRlZ2VyIGluIHJhbmdlIG9mIFswLCBtYXgpLlxuICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IE1heCB2YWx1ZSAoZXhjbHVzaXZlKS5cbiAgICogQHJldHVybiBHZW5lcmF0ZWQgaW50ZWdlci5cbiAgICovXG4gIGZ1bmN0aW9uIHJhbmRvbShtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaWNrIHRoZSByYW5kb20gcG9zaXRpb24gW3JvdywgY29sdW1uXSBpbiB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IGJvYXJkIFRhcmdldCBib2FyZC5cbiAgICogQHJldHVybiBSYW5kb20gcG9zaXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiByYW5kb21Qb3NpdGlvbihzaXplKSB7XG4gICAgcmV0dXJuIFtyYW5kb20oc2l6ZSksIHJhbmRvbShzaXplKV07XG4gIH1cblxuICAvKipcbiAgICogQXV0b2ZpbGwocmFuZG9tbHkpIGEgZ2FtZSBib2FyZCB3aXRoIGZsZWV0IHNoaXBzLlxuICAgKiBAcGFyYW0ge0JvYXJkfSBib2FyZCBUYXJnZXQgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiBhdXRvZmlsbEZsZWV0KGJvYXJkKSB7XG4gICAgU1RBTkRBUkRfRkxFRVQuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKC4uLnRlbXBsYXRlKTtcbiAgICAgIGlmIChyYW5kb20oMikgPT09IDEpIHNoaXAudG9nZ2xlRGlyZWN0aW9uKCk7XG4gICAgICBsZXQgcG9zaXRpb24gPSByYW5kb21Qb3NpdGlvbihib2FyZC5zaXplKCkpO1xuICAgICAgd2hpbGUgKCFib2FyZC5hdmFpbGFibGUoLi4ucG9zaXRpb24sIHNoaXApKSB7XG4gICAgICAgIHBvc2l0aW9uID0gcmFuZG9tUG9zaXRpb24oYm9hcmQuc2l6ZSgpKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkLnB1dFNoaXAoLi4ucG9zaXRpb24sIHNoaXApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBhbGwgcGxheWVycy5cbiAgICogQHJldHVybnMgQXJyYXkgb2YgcGxheWVyc1xuICAgKi9cbiAgZnVuY3Rpb24gcGxheWVycygpIHtcbiAgICByZXR1cm4gZ2FtZS5wbGF5ZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBQbGF5ZXIgb2JqZWN0IGJ5IHRoZWlyIGlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgcGxheWVyIGlkLlxuICAgKiBAcmV0dXJuIHtQbGF5ZXJ9IFBsYXllciBvYmplY3QgaWYgZXhpc3RzLlxuICAgKi9cbiAgZnVuY3Rpb24gcGxheWVyKGlkKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVycy5maW5kKCh0aGVQbGF5ZXIpID0+IHRoZVBsYXllci5pZCgpID09PSBpZCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGN1cnJlbnQgcGxheWVyIG9iamVjdC5cbiAgICogQHJldHVybnMge1BsYXllcn0gQ3VycmVudCBwbGF5ZXIgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gY3VycmVudFBsYXllcigpIHtcbiAgICByZXR1cm4gZ2FtZS5wbGF5ZXJzW2dhbWUuY3VycmVudFBsYXllcl07XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0d28gcGxheWVycyB3aXRoIHJhbmRvbWx5IGF1dG9maWxsZWQgYm9hcmQuXG4gICAqIEFJIHBsYXllcidzIGRlZmF1bHQgbGV2ZWwgaXMgRUFTWS5cbiAgICogQHBhcmFtIHtTeW1ib2x9IHBsYXllcjFUeXBlIEhVTUFOIG9yIEFJXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBwbGF5ZXIyVHlwZSBIVU1BTiBvciBBSVxuICAgKi9cbiAgZnVuY3Rpb24gaW5pdFBsYXllcnNBbmRCb2FyZHMocGxheWVyMVR5cGUsIHBsYXllcjJUeXBlKSB7XG4gICAgZ2FtZS5wbGF5ZXJzID0gW107XG4gICAgY29uc3QgcGxheWVyVHlwZXMgPSBbcGxheWVyMVR5cGUsIHBsYXllcjJUeXBlXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllclR5cGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXdQbGF5ZXIgPSBQbGF5ZXIoaSwgQm9hcmQoREVGQVVMVF9CT0FSRF9TSVpFKSwgcGxheWVyVHlwZXNbaV0pO1xuICAgICAgYXV0b2ZpbGxGbGVldChuZXdQbGF5ZXIuYm9hcmQoKSk7XG4gICAgICBnYW1lLnBsYXllcnMucHVzaChuZXdQbGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdGhlIHBsYXllciAyIHRvIEFJLlxuICAgKiBJdCBjYW4gYWxzbyBiZSB1c2VkIHRvIGNoYW5nZSBBSSBsZXZlbC5cbiAgICogQUkgcGxheWVyJ3MgYm9hcmQgaXMgZmlsbGVkIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBmdW5jdGlvbiBhZ2FpbnN0QUkobGV2ZWwpIHtcbiAgICBnYW1lLnBsYXllcnNbMV0gPSBQbGF5ZXIoMSwgQm9hcmQoREVGQVVMVF9CT0FSRF9TSVpFKSwgQUksIGxldmVsKTtcbiAgICBhdXRvZmlsbEZsZWV0KGdhbWUucGxheWVyc1sxXS5ib2FyZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdGhlIHBsYXllciAyIHRvIEhVTUFOLlxuICAgKi9cbiAgZnVuY3Rpb24gYWdhaW5zdEh1bWFuKCkge1xuICAgIGdhbWUucGxheWVyc1sxXSA9IFBsYXllcigxLCBCb2FyZChERUZBVUxUX0JPQVJEX1NJWkUpLCBIVU1BTik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5leHQgcGxheWVyJ3MgaW5kZXguXG4gICAqIEByZXR1cm5zIGluZGV4IG9mIG5leHQgcGxheWVyXG4gICAqL1xuICBmdW5jdGlvbiBuZXh0SW5kZXgoKSB7XG4gICAgcmV0dXJuIChnYW1lLmN1cnJlbnRQbGF5ZXIgKyAxKSAlIGdhbWUucGxheWVycy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogSWYgaXMgaHVtYW4gcGxheWVyLCBkbyBub3RoaW5nKHdhaXQgZm9yIGh1bWFuIHRvIGNsaWNrXG4gICAqIG9uIHRoZSBib2FyZCB0byB0cmlnZ2VyIGFuIGF0dGFjayBldmVudCkuXG4gICAqXG4gICAqIEFJIFBsYXllcidzIGF0dGFjayBmdW5jdGlvbiBvbmx5IGRlY2lkZXMgd2hlcmUgdG8gYXR0YWNrLFxuICAgKiBhbmQgY2FsbGJhY2sgY29udHJvbGxlciB0byBkbyB0aGUgcmVzdCBvZiB0aGUgam9iLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHBhc3NUb05leHRQbGF5ZXJcbiAgICogIHRydWUgaWYgc3dpdGNoIHBsYXllci5cbiAgICogIGZhbHNlIGRvZXNuJ3Qgc3dpdGNoIHBsYXllci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29udHJvbGxlckF0dGFja0NhbGxiYWNrIEFjdHVhbCBhdHRhY2tcbiAgICogbG9naWMgaW4gQ29udHJvbGxlciBtb2R1bGUuXG4gICAqL1xuICBmdW5jdGlvbiBuZXh0VHVybihwYXNzVG9OZXh0UGxheWVyLCBjb250cm9sbGVyQXR0YWNrQ2FsbGJhY2spIHtcbiAgICBpZiAocGFzc1RvTmV4dFBsYXllcikgZ2FtZS5jdXJyZW50UGxheWVyID0gbmV4dEluZGV4KCk7XG4gICAgY29uc3QgY3VyclBsYXllciA9IGdhbWUucGxheWVyc1tnYW1lLmN1cnJlbnRQbGF5ZXJdO1xuICAgIGlmICghY3VyclBsYXllci5pc0FJKCkpIHJldHVybjsgLy8gaHVtYW4gcGxheWVyIGRvIG5vdGhpbmcuXG4gICAgY29uc3Qgb3Bwb25lbnQgPSBnYW1lLnBsYXllcnNbbmV4dEluZGV4KCldO1xuICAgIGNvbnN0IHRhcmdldCA9IGN1cnJQbGF5ZXIuYXR0YWNrKG9wcG9uZW50LmJvYXJkKCkpOyAvLyBBSSBwbGF5ZXIncyBuZXh0IGF0dGFjayB0YXJnZXRcbiAgICBpZiAodGFyZ2V0KSB7IC8vIGlmIHRoZXJlJ3Mgbm8gbW9yZSBncmlkIHRvIGJlIGF0dGFja2VkLCB0YXJnZXQgd2lsbCBiZSB1bmRlZmluZWQuXG4gICAgICBjb250cm9sbGVyQXR0YWNrQ2FsbGJhY2soLi4udGFyZ2V0LCBvcHBvbmVudC5pZCgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBwbGF5ZXIgaGFzIHB1dCBhbGwgaGlzIHNoaXBzIGludG8gdGhlIGJvYXJkLlxuICAgKiBDb250cm9sbGVyIGNhbGwgdGhpcyBtZXRob2QgdG8gaW5pdGlhbGl6ZSB0aGUgZ2FtZS5cbiAgICpcbiAgICogQmVmb3JlIHN0YXJ0IHRoZSBnYW1lIHRoaXMgZnVuY3Rpb24gd2lsbCBjaGVja1xuICAgKiB3aGVhdGhlciBhbGwgcmVxdWlyZW1lbnRzIGFib3ZlIGhhdmUgYmVlbiBtZXQuXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqICB0cnVlLCBpZiBhbGwgcmVxdWlyZW1lbnRzIGhhdmUgYmVlbiBtZXQsIHRoZSBnYW1lIGlzIHN0YXJ0ZWQuXG4gICAqICBvdGhlcndpc2UsIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgLy8gY2hlY2sgY29uZmlndXJhdGlvbnNcbiAgICBpZiAoZ2FtZS5wbGF5ZXJzLnNvbWUoKHRoZVBsYXllcikgPT4gdGhlUGxheWVyLmJvYXJkKCkuZmxlZXRTaXplKClcbiAgICAgICAgIT09IFNUQU5EQVJEX0ZMRUVULmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gU3RhcnQgZ2FtZS5cbiAgICAvLyBTZXQgdG8gdGhlIGxhc3QgcGxheWVyLiBuZXh0VHVybigpIHdpbGwgbW92ZSBvbi5cbiAgICBnYW1lLmN1cnJlbnRQbGF5ZXIgPSBnYW1lLnBsYXllcnMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGFwaSA9IHtcbiAgICBERUZBVUxUX0JPQVJEX1NJWkUsXG4gICAgcGxheWVycyxcbiAgICBwbGF5ZXIsXG4gICAgY3VycmVudFBsYXllcixcbiAgICBhdXRvZmlsbEZsZWV0LFxuICAgIG5leHRUdXJuLFxuICAgIGluaXRQbGF5ZXJzQW5kQm9hcmRzLFxuICAgIGFnYWluc3RBSSxcbiAgICBhZ2FpbnN0SHVtYW4sXG4gICAgc3RhcnQsXG4gIH07XG5cbiAgaWYgKFVOSVRfVEVTVCkge1xuICAgIGFwaS5nYW1lID0gZ2FtZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uYXBpLFxuICB9O1xufSkoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHF1b3RlLXByb3BzICovXG4vKipcbiAqIFRoZXJlIGFyZSB0d28gZGlmZmVyZW50IHR5cGVzIG9mIHBsYXllcjpcbiAqICAxLiBhaVxuICogIDIuIGh1bWFuXG4gKi9cbmV4cG9ydCBjb25zdCBBSSA9IFN5bWJvbCgnYWknKTtcbmV4cG9ydCBjb25zdCBIVU1BTiA9IFN5bWJvbCgnaHVtYW4nKTtcblxuLyoqXG4gKiBUaHJlZSBkaWZmZXJlbnQgbGV2ZWwgb2YgQUkuXG4gKi9cbmV4cG9ydCBjb25zdCBFQVNZID0gU3ltYm9sKCdjaGlsZCcpO1xuZXhwb3J0IGNvbnN0IE5PUk1BTCA9IFN5bWJvbCgnbm9ybWFsJyk7XG5leHBvcnQgY29uc3QgSEFSRCA9IFN5bWJvbCgnaGFyZCcpO1xuXG4vKipcbiAqIFBsYXllciBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtCb2FyZH0gaW5Cb2FyZCBQbGF5ZXIncyBnYW1lIGJvYXJkLlxuICogQHBhcmFtIHtTeW1ib2x9IGluVHlwZSBIVU1BTiBvciBBSS5cbiAqIEBwYXJhbSB7U3ltYm9sfSBpbkxldmVsIE9wdGlvbmFsLiBBSSBsZXZlbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluSWQsIGluQm9hcmQsIGluVHlwZSwgaW5MZXZlbCkgPT4ge1xuICAvKipcbiAgICogUGxheWVyIHBsYWluIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IHBsYXllciA9IHtcbiAgICBpZDogaW5JZCxcbiAgICB0eXBlOiBpblR5cGUsXG4gICAgYm9hcmQ6IGluQm9hcmQsXG4gICAgbGFzdEhpdDogW10sIC8vIG1lbW9yaXplIGhpdHMgKHN1bmsgc2hpcCdzIGNvb3JkaW5hdGVzIHdpbGwgYmUgcmVtb3ZlZClcbiAgfTtcblxuICBpZiAocGxheWVyLnR5cGUgPT09IEFJKSB7XG4gICAgcGxheWVyLmxldmVsID0gaW5MZXZlbCB8fCBOT1JNQUw7IC8vIGRlZmF1bHQgaXMgTk9STUFMXG4gIH1cblxuICAvKipcbiAgICogR2V0IHBsYXllciBpZC5cbiAgICogQHJldHVybnMgUGxheWVyIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gaWQoKSB7XG4gICAgcmV0dXJuIHBsYXllci5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBwbGF5ZXIgdHlwZS5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBpcyBwbGF5ZXIgaXMgQUkuXG4gICAqL1xuICBmdW5jdGlvbiBpc0FJKCkge1xuICAgIHJldHVybiBwbGF5ZXIudHlwZSA9PT0gQUk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgQUkgcGxheWVyJ3MgbGV2ZWwuXG4gICAqIEByZXR1cm5zIEFJIHBsYXllcidzIGxldmVsLiB1bmRlZmluZWQgaWYgaXQncyBub3QgQUkgcGxheWVyLlxuICAgKi9cbiAgZnVuY3Rpb24gYWlMZXZlbCgpIHtcbiAgICBpZiAocGxheWVyLnR5cGUgIT09IEFJKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBwbGF5ZXIubGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgR2FtZSBtb2R1bGUgdG8gc2V0IEFJIGxldmVsLlxuICAgKiBAcGFyYW0ge1N5bWJvbH0gbGV2ZWwgRUFTWSBvciBOT1JNQUwgb3IgSEFSRFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0QWlMZXZlbChsZXZlbCkge1xuICAgIGlmIChwbGF5ZXIudHlwZSAhPT0gQUkpIHJldHVybjtcbiAgICBwbGF5ZXIubGV2ZWwgPSBsZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBsYXllcidzIGJvYXJkIG9iamVjdC5cbiAgICogQHJldHVybnMgUGxheWVyJ3MgYm9hcmQgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gYm9hcmQoKSB7XG4gICAgcmV0dXJuIHBsYXllci5ib2FyZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSYW5kb21seSBwaWNrIGEgdGFyZ2V0IGZyb20gb3Bwb25lbnQgYm9hcmQncyBpbnRhY3QgbGlzdC5cbiAgICogQHBhcmFtIHtCb2FyZH0gb3Bwb25lbnRCb2FyZCBPcHBvZW5lbnQncyBib2FyZCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHRoZSB0YXJnZXQgY29vcmRpbmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICBpZiAob3Bwb25lbnRCb2FyZC5pbnRhY3QoKS5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHBvbmVudEJvYXJkLmludGFjdCgpLmxlbmd0aCk7XG4gICAgY29uc3Qgc3RyID0gb3Bwb25lbnRCb2FyZC5pbnRhY3QoKVtpbmRleF07XG4gICAgY29uc3QgW3Jvd1N0ciwgY29sdW1uU3RyXSA9IHN0ci5zcGxpdCgnLScpO1xuICAgIHJldHVybiBbcGFyc2VJbnQocm93U3RyLCAxMCksIHBhcnNlSW50KGNvbHVtblN0ciwgMTApXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIHN1bSBvZiBkaXN0YW5jZXMgYmV3dHdlZW4gdGhlIHRhcmdldCBwb2ludFxuICAgKiBhbmQgYWxsIHBvaW50cyBpbiBwbGF5ZXIubGFzdEhpdC5cbiAgICogRGlzdGFuY2UgPSBob3Jpem9udGFsIGRpc3RhbmNlICsgdmVydGljYWwgZGlzdGFuY2UuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3dcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtblxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlIG9mIHBvaW50IEEgYW5kIEIuXG4gICAqL1xuICBmdW5jdGlvbiBkaXN0YW5jZShyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBwbGF5ZXIubGFzdEhpdC5yZWR1Y2UoKGRpc3QsIGhpdCkgPT4gTWF0aC5hYnMocm93IC0gaGl0WzBdKVxuICAgICAgKyBNYXRoLmFicyhjb2x1bW4gLSBoaXRbMV0pXG4gICAgICArIGRpc3QsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgc3VtIG9mIGRpc3RhbmNlcyBiZXd0d2VlbiB0aGUgdGFyZ2V0IHBvaW50XG4gICAqIGFuZCBhbGwgcG9pbnRzIGluIHBsYXllci5sYXN0SGl0LlxuICAgKiBjb0Rpc3RhbmNlID0gc3VtIG9mIGhvcml6b250YWwgZGlzdGFuY2UgKiBzdW0gb2YgdmVydGljYWwgZGlzdGFuY2UgKyBkaXN0YW5jZVxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW5cbiAgICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZSBvZiBwb2ludCBBIGFuZCBCLlxuICAgKi9cbiAgZnVuY3Rpb24gY29EaXN0YW5jZShyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IFtzdW1Sb3dEaXN0LCBzdW1Db2xEaXN0XSA9IHBsYXllci5sYXN0SGl0LnJlZHVjZSgocmVzdWx0LCBoaXQpID0+IFtcbiAgICAgIHJlc3VsdFswXSArIE1hdGguYWJzKHJvdyAtIGhpdFswXSksXG4gICAgICByZXN1bHRbMV0gKyBNYXRoLmFicyhjb2x1bW4gLSBoaXRbMV0pLFxuICAgIF0sIFswLCAwXSk7XG4gICAgcmV0dXJuIHN1bVJvd0Rpc3QgKiBzdW1Db2xEaXN0ICsgZGlzdGFuY2Uocm93LCBjb2x1bW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2Ugb2YgYW4gaW50YWN0IHBvaW50IHdpdGggYWxsIHJlbWFpbmluZyBsYXN0IGhpdChzdW5rXG4gICAqIHNoaXAgY29vcmRpbmF0ZXMgd2lsbCBiZSByZW1vdmVkKS5cbiAgICogUmV0dXJuIHRoZSBpbnRhY3QgcG9pbnQgd2l0aCB0aGUgc21hbGxlc3QgZGlzdGFuY2UuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IG9wcG9uZW50Qm9hcmQgT3Bwb2VuZW50J3MgYm9hcmQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB0aGUgdGFyZ2V0IGNvb3JkaW5hdGVcbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbEF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgaWYgKG9wcG9uZW50Qm9hcmQuaW50YWN0KCkubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmIChwbGF5ZXIubGFzdEhpdC5sZW5ndGggPT09IDApIHJldHVybiByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gICAgbGV0IG1pbkRpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICByZXR1cm4gb3Bwb25lbnRCb2FyZC5pbnRhY3QoKS5yZWR1Y2UoKGFyciwgc3RyKSA9PiB7XG4gICAgICBjb25zdCBbcm93U3RyLCBjb2x1bW5TdHJdID0gc3RyLnNwbGl0KCctJyk7XG4gICAgICBjb25zdCByb3cgPSBwYXJzZUludChyb3dTdHIsIDEwKTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IHBhcnNlSW50KGNvbHVtblN0ciwgMTApO1xuICAgICAgY29uc3QgZGlzdCA9IChwbGF5ZXIubGFzdEhpdC5sZW5ndGggPT09IDEpXG4gICAgICAgID8gZGlzdGFuY2Uocm93LCBjb2x1bW4pXG4gICAgICAgIDogY29EaXN0YW5jZShyb3csIGNvbHVtbik7XG4gICAgICBpZiAoZGlzdCA8IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdDtcbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbHVtbl07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaWNrKHdpdGggYSBzbWFydCBzdHJhdGVneSkgYSB0YXJnZXQgZnJvbSBvcHBvbmVudCBib2FyZCdzIGludGFjdCBsaXN0LlxuICAgKiBAcGFyYW0ge0JvYXJkfSBvcHBvbmVudEJvYXJkIE9wcG9lbmVudCdzIGJvYXJkIG9iamVjdC5cbiAgICogQHJldHVybnMgdGhlIHRhcmdldCBjb29yZGluYXRlXG4gICAqL1xuICBmdW5jdGlvbiBzbWFydEF0dGNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Qm9hcmR9IGJvYXJkIFRoZSBCb2FyZCBvYmplY3QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIE5vdGljZSBHYW1lIG1vZHVsZSB0byBydW4gbmV4dCByb3VuZC5cbiAgICogQHJldHVyblxuICAgKiAgPT0+IEFJIHBsYXllciByZXR1cm4gdGhlIGNvb3JkaW5hdGUgb2YgdGhlIHRhcmdldCBpdCB3YW50cyB0byBhdHRhY2suXG4gICAqICA9PT4gSHVtYW4gcGxheWVyIHdpbGwgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICovXG4gIGZ1bmN0aW9uIGF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgaWYgKHBsYXllci50eXBlID09PSBBSSkge1xuICAgICAgc3dpdGNoIChwbGF5ZXIubGV2ZWwpIHtcbiAgICAgICAgY2FzZSBFQVNZOlxuICAgICAgICAgIHJldHVybiByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICAgIGNhc2UgTk9STUFMOlxuICAgICAgICAgIHJldHVybiBub3JtYWxBdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICAgIGNhc2UgSEFSRDpcbiAgICAgICAgICByZXR1cm4gc21hcnRBdHRjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBodW1hbiBwbGF5ZXIgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgZnVuY3Rpb24gbWVtb3JpemVMYXN0SGl0KHJvdywgY29sdW1uKSB7XG4gICAgcGxheWVyLmxhc3RIaXQucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcmdldExhc3RIaXQoc2hpcENvb3JkaW5hdGVzKSB7XG4gICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGxheWVyLmxhc3RIaXQuZmluZEluZGV4KChwb2ludCkgPT4gKHBvaW50WzBdID09PSBjb29yZGluYXRlWzBdKVxuICAgICAgICAmJiAocG9pbnRbMV0gPT09IGNvb3JkaW5hdGVbMV0pKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHBsYXllci5sYXN0SGl0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGlzQUksXG4gICAgYWlMZXZlbCxcbiAgICBzZXRBaUxldmVsLFxuICAgIGJvYXJkLFxuICAgIGF0dGFjayxcbiAgICBtZW1vcml6ZUxhc3RIaXQsXG4gICAgZm9yZ2V0TGFzdEhpdCxcbiAgfTtcbn07XG4iLCIvKipcbiAqIFNoaXAgaWQgZ2VuZXJhdG9yLlxuICovXG5mdW5jdGlvbiogaW5maW5pdGUoKSB7XG4gIGxldCBpbmRleCA9IDE7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgeWllbGQgaW5kZXg7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxufVxuXG5jb25zdCBHRU4gPSBpbmZpbml0ZSgpO1xuY29uc3QgSE9SSVpPTlRBTCA9IFN5bWJvbCgnaG9yaXpvbnRhbCcpO1xuY29uc3QgVkVSVElDQUwgPSBTeW1ib2woJ3ZlcnRpY2FsJyk7XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0byBpbnN0YW50aWF0ZSBhIFNoaXAgb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgc2hpcC4gRXg6IGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgYW5kIGRlc3Ryb3llci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIEhvdyBtYW55IGdyaWRzIG9uIHRoZSBib2FyZCB0aGUgc2hpcCBvY2N1cGllcy5cbiAqIEByZXR1cm4gQSBzaGlwIG1vZHVsZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbk5hbWUsIGluU2l6ZSkgPT4ge1xuICAvKipcbiAgICogU2hpcCBwbGFpbiBvYmplY3QuXG4gICAqL1xuICBjb25zdCBzaGlwID0ge1xuICAgIGlkOiBHRU4ubmV4dCgpLnZhbHVlLFxuICAgIG5hbWU6IGluTmFtZSxcbiAgICBzaXplOiBpblNpemUsXG4gICAgcm93OiAwLCAvLyBkZWZhdWx0XG4gICAgY29sdW1uOiAwLCAvLyBkZWZhdWx0XG4gICAgZGlyZWN0aW9uOiBIT1JJWk9OVEFMLCAvLyBkZWZhdWx0XG4gICAgaGl0OiAwLCAvLyBIb3cgbWFueSB0aW1lcyB0aGUgc2hpcCBpcyBoaXQuXG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFNoaXAncyBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGlkKCkge1xuICAgIHJldHVybiBzaGlwLmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFNoaXAncyBuYW1lLlxuICAgKi9cbiAgZnVuY3Rpb24gbmFtZSgpIHtcbiAgICByZXR1cm4gc2hpcC5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFNpemUgb2YgdGhlIHNoaXAuXG4gICAqL1xuICBmdW5jdGlvbiBzaXplKCkge1xuICAgIHJldHVybiBzaGlwLnNpemU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUG9zaXRpb24gb2YgdGhlIHNoaXAgaGVhZC5cbiAgICovXG4gIGZ1bmN0aW9uIGhlYWQoKSB7XG4gICAgcmV0dXJuIFtzaGlwLnJvdywgc2hpcC5jb2x1bW5dO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gUG9zaXRpb24gb2YgdGhlIHNoaXAgdGFpbC5cbiAgICovXG4gIGZ1bmN0aW9uIHRhaWwoKSB7XG4gICAgc3dpdGNoIChzaGlwLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSBIT1JJWk9OVEFMOlxuICAgICAgICByZXR1cm4gW3NoaXAucm93LCBzaGlwLmNvbHVtbiArIHNoaXAuc2l6ZSAtIDFdO1xuICAgICAgY2FzZSBWRVJUSUNBTDpcbiAgICAgICAgcmV0dXJuIFtzaGlwLnJvdyArIHNoaXAuc2l6ZSAtIDEsIHNoaXAuY29sdW1uXTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNoaXAuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGRpcmVjdGlvbiBpcyBob3Jpem9udGFsLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBpc0hvcml6b250YWwoKSB7XG4gICAgcmV0dXJuIHNoaXAuZGlyZWN0aW9uID09PSBIT1JJWk9OVEFMO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFJldHVybiBob3cgbWFueSBhdHRhY2tzIHRoZSBzaGlwIGhhcyB0YWtlbi5cbiAgICovXG4gIGZ1bmN0aW9uIGNvdW50SGl0cygpIHtcbiAgICByZXR1cm4gc2hpcC5oaXQ7XG4gIH1cblxuICAvKipcbiAgICogSE9SSVpPTlRBTCAtPiBWRVJUSUNBTFxuICAgKiBWRVJUSUNBTCAtPiBIT1JJWk9OVEFMXG4gICAqIFNoaXAgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCBpZiB0aGUgYm9hcmQgaGFzIGVub3VnaCBzcGFjZS5cbiAgICogQm9hcmQgbW9kdWxlIHdpbGwgY2hlY2sgdGhhdCBmb3IgdXMgYmVmb3JlIGNhbGwgdGhpcyBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZURpcmVjdGlvbigpIHtcbiAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09IEhPUklaT05UQUwpIHtcbiAgICAgIHNoaXAuZGlyZWN0aW9uID0gVkVSVElDQUw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXAuZGlyZWN0aW9uID0gSE9SSVpPTlRBTDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3VyIHNoaXBzIGFyZSBub3QgYXdhcmUgb2YgdGhlIHNpemUgb2YgdGhlIGdhbWUgYm9hcmQuXG4gICAqIEJvYXJkIG1vZHVsZSB3aWxsIGNoZWNrIHRoZSB2YWxpZGF0aW9uIGZvciB1cy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0aGUgaGVhZCBvZiB0aGUgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0aGUgaGVhZCBvZiB0aGUgc2hpcC5cbiAgICovXG4gIGZ1bmN0aW9uIHB1dChyb3csIGNvbHVtbikge1xuICAgIHNoaXAucm93ID0gcm93O1xuICAgIHNoaXAuY29sdW1uID0gY29sdW1uO1xuICB9XG5cbiAgLyoqXG4gICAqIEp1c3QgY2hlY2sgaWYgdGhlcmUncyBhIHNoaXAgc2l0cyBvbiBhIGNlcnRhaW4gZ3JpZC5cbiAgICogVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFjdHVhbGx5IGhpdCB0aGUgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWCBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWSBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBpdCdzIGEgaGl0LCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBjYW5IaXQocm93LCBjb2x1bW4pIHtcbiAgICBzd2l0Y2ggKHNoaXAuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIEhPUklaT05UQUw6XG4gICAgICAgIGlmIChyb3cgIT09IHNoaXAucm93KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChjb2x1bW4gPCBzaGlwLmNvbHVtbiB8fCBjb2x1bW4gPiAoc2hpcC5jb2x1bW4gKyBzaGlwLnNpemUgLSAxKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVkVSVElDQUw6XG4gICAgICAgIGlmIChjb2x1bW4gIT09IHNoaXAuY29sdW1uKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChyb3cgPCBzaGlwLnJvdyB8fCByb3cgPiAoc2hpcC5yb3cgKyBzaGlwLnNpemUgLSAxKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NlcnRpb246IEVhY2ggZ3JpZCBvZiB0aGUgYm9hcmQgY2FuIG9ubHkgYmUgYXR0ZWNrZWQgb25jZS5cbiAgICogVGhlIHNoaXAgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCB3aGVhdGhlciBhIHNpbmdsZSBwYXJ0IGlzIGhpdCB0d2ljZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWCBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWSBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgc2hpcCBpcyBoaXQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGhpdChyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhbkhpdChyb3csIGNvbHVtbik7XG4gICAgaWYgKHJlc3VsdCkgc2hpcC5oaXQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGV2ZXJ5IHBvcnQgdGhlIHNoaXAgaGFzIGJlZW4gaGl0LlxuICAgKiBBcyBhbHdheXMsIHRoZSBzaGlwIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgd2hlYXRoZXIgYSBzaW5nbGUgcGFydCBpcyBoaXQgdHdpY2UuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiAoc2hpcC5oaXQgPj0gc2hpcC5zaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIEFuIGFycmF5IG9mIGNvb3JkaW5hdGVzIG9mIHRoYXQgc2hpcC5cbiAgICovXG4gIGZ1bmN0aW9uIGNvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpICs9IDEpIHtcbiAgICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gSE9SSVpPTlRBTCkge1xuICAgICAgICByZXN1bHQucHVzaChbc2hpcC5yb3csIHNoaXAuY29sdW1uICsgaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW3NoaXAucm93ICsgaSwgc2hpcC5jb2x1bW5dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuXG4gICAqICBpZiBpcyBzdW5rLCByZXR1cm4gYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgb2YgdGhhdCBzaGlwLlxuICAgKiAgb3RoZXJ3aXNlLCByZXR1cm4gdW5kZWZpbmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVwb3J0U3VuaygpIHtcbiAgICBpZiAoIWlzU3VuaykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgc2l6ZSxcbiAgICBuYW1lLFxuICAgIGhlYWQsXG4gICAgdGFpbCxcbiAgICBpc0hvcml6b250YWwsXG4gICAgY291bnRIaXRzLFxuICAgIHRvZ2dsZURpcmVjdGlvbixcbiAgICBwdXQsXG4gICAgY2FuSGl0LFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgY29vcmRpbmF0ZXMsXG4gICAgcmVwb3J0U3VuayxcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgTUFJTiA9IFN5bWJvbCgnbWFpbicpO1xuZXhwb3J0IGNvbnN0IE9QUE9ORU5UID0gU3ltYm9sKCdvcHBvbmVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBFTEVNRU5UUyA9IHtcbiAgICByb290OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpLFxuICAgIG1haW5QbGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIubWFpbicpLFxuICAgIG9wcG9uZW50UGxheWVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLm9wcG9uZW50JyksXG4gICAgcmFuZG9tOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tJyksXG4gICAgc3RhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpLFxuICAgIG5ld0dhbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdHYW1lJyksXG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbmdsZSBncmlkIGluIGJvYXJkIGFjY29yZGluZyB0byBpdCdzIGNvb3JkaW5hdGUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgR3JpZCBheGkgWS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBHcmlkIGF4aSBYLlxuICAgKiBAcmV0dXJucyBHcmlkIGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVHcmlkKHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgIGdyaWQuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgZ3JpZC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcbiAgICByZXR1cm4gZ3JpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBzZWEgbGF5ZXIgb2YgZ2FtZSBib2FyZC5cbiAgICogRWFjaCBncmlkIGlzIGFubm90YXRlZCB3aXRoIHRoZSBwbGF5ZXIncyBpZCB0byB3aG9tXG4gICAqIHRoaXMgYm9hcmQgYmVsb25ncy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgQm9hcmQgc2l6ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIElkIG9mIG93bmVyIG9mIHRoYXQgYm9hcmQuXG4gICAqIEByZXR1cm5zIFNlYSBsYXllciBkaXYgZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdTZWFMYXllcihzaXplLCBwbGF5ZXJJZCkge1xuICAgIGNvbnN0IHNlYUxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhTGF5ZXIuY2xhc3NMaXN0LmFkZCgnc2VhTGF5ZXInKTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3cgKz0gMSkge1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgc2l6ZTsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGNyZWF0ZUdyaWQocm93LCBjb2x1bW4pO1xuICAgICAgICBncmlkLmRhdGFzZXQucGxheWVySWQgPSBwbGF5ZXJJZDtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICBpZiAocm93ID09PSAwKSBncmlkLmNsYXNzTGlzdC5hZGQoJ3VwcGVyQm9yZGVyJyk7XG4gICAgICAgIGlmIChjb2x1bW4gPT09IDApIGdyaWQuY2xhc3NMaXN0LmFkZCgnbGVmdEJvcmRlcicpO1xuICAgICAgICBzZWFMYXllci5hcHBlbmRDaGlsZChncmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlYUxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHNoaXAgbGF5ZXIgb2YgZ2FtZSBib2FyZC5cbiAgICogU2hpcCBwb3NpdGlvbiBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIEJvYXJkIHNpemUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNoZWNrU2hpcENhbGxiYWNrIEJvYXJkLmNhbkhpdFNoaXAoKSBmdW5jdGlvbi5cbiAgICogQHJldHVybnMgU2hpcCBsYXllciBkaXYgZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdTaGlwTGF5ZXIoc2l6ZSwgY2hlY2tTaGlwQ2FsbGJhY2spIHtcbiAgICBjb25zdCBzaGlwTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwTGF5ZXIuY2xhc3NMaXN0LmFkZCgnc2hpcExheWVyJyk7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHNpemU7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVHcmlkKHJvdywgY29sdW1uKTtcbiAgICAgICAgaWYgKHJvdyA9PT0gMCkgZ3JpZC5jbGFzc0xpc3QuYWRkKCd1cHBlckJvcmRlcicpO1xuICAgICAgICBpZiAoY29sdW1uID09PSAwKSBncmlkLmNsYXNzTGlzdC5hZGQoJ2xlZnRCb3JkZXInKTtcbiAgICAgICAgaWYgKGNoZWNrU2hpcENhbGxiYWNrKHJvdywgY29sdW1uKSkgZ3JpZC5jbGFzc0xpc3QuYWRkKCdoYXNTaGlwJyk7XG4gICAgICAgIHNoaXBMYXllci5hcHBlbmRDaGlsZChncmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBMYXllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIE1BSU4gb3IgT1BQT05FTlQgYm9hcmQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtTeW1ib2x9IG1haW5Pck9wcG9uZW50IE1BSU4gb3IgT1BQT05FTlRcbiAgICogQHJldHVybiB7RWxlbWVudH0gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudCB0aGUgZGVzaXJlZCBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldE1haW5Pck9wcG9uZW50Qm9hcmQobWFpbk9yT3Bwb25lbnQpIHtcbiAgICByZXR1cm4gKG1haW5Pck9wcG9uZW50ID09PSBNQUlOKVxuICAgICAgPyBFTEVNRU5UUy5tYWluUGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpXG4gICAgICA6IEVMRU1FTlRTLm9wcG9uZW50UGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCB0aGUgYm9hcmQgZWxlbWVudCBieSBwbGF5ZXIgaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBJZCBvZiBkZXNpcmVkIHBsYXllci5cbiAgICogQHJldHVybiB7RWxlbWVudH0gRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBkZXNpcmVkIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UGxheWVyRWxlbWVudEJ5SWQocGxheWVySWQpIHtcbiAgICBpZiAocGFyc2VJbnQoRUxFTUVOVFMubWFpblBsYXllci5kYXRhc2V0LnBsYXllcklkLCAxMClcbiAgICAgID09PSBwbGF5ZXJJZCkgcmV0dXJuIEVMRU1FTlRTLm1haW5QbGF5ZXI7XG4gICAgcmV0dXJuIEVMRU1FTlRTLm9wcG9uZW50UGxheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSBwbGF5ZXIncyBib2FyZCBpbiBNQUlOIGJvYXJkIHNlY3Rpb24gb3IgT1BQT05FTlQgYm9hcmQgc2VjdGlvbi5cbiAgICogRXg6IEluIHBsYXllciAxJ3MgcGFnZSxcbiAgICogID0+IGhpcyBvd24gYm9hcmQgaXMgc2hvd24gaW4gTUFJTiBzZWN0aW9uLlxuICAgKiAgPT4gcGxheWVyIDIncyBib2FyZCBpcyBzaG93biBpbiBPUFBPTkVOVCBzZWN0aW9uLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBTaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIERlbm90ZSB3aGljaCBib2FyZCB0byBkcmF3LlxuICAgKiBAcGFyYW0ge1N5bWJvbH0gbWFpbk9yT3Bwb25lbnQgTUFJTiBvciBPUFBPTkVOVFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGVja1NoaXBDYWxsYmFjayBCb2FyZC5jYW5IaXRTaGlwKCkgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBkcmF3Qm9hcmQoXG4gICAgc2l6ZSxcbiAgICBwbGF5ZXJJZCxcbiAgICBtYWluT3JPcHBvbmVudCxcbiAgICBjaGVja1NoaXBDYWxsYmFjayxcbiAgKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TWFpbk9yT3Bwb25lbnRCb2FyZChtYWluT3JPcHBvbmVudCk7XG4gICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgIGNvbnN0IHNlYUxheWVyID0gZHJhd1NlYUxheWVyKHNpemUsIHBsYXllcklkKTtcbiAgICBjb25zdCBzaGlwTGF5ZXIgPSBkcmF3U2hpcExheWVyKHNpemUsIGNoZWNrU2hpcENhbGxiYWNrKTtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc2VhTGF5ZXIpO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzaGlwTGF5ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBtYWluIGJvYXJkIG9yIHRoZSBvcHBvbmVudCdzIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJCb2FyZChtYWluT3JPcHBvbmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldE1haW5Pck9wcG9uZW50Qm9hcmQobWFpbk9yT3Bwb25lbnQpO1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQWxsQm9hcmRzKCkge1xuICAgIGNsZWFyQm9hcmQoTUFJTik7XG4gICAgY2xlYXJCb2FyZChPUFBPTkVOVCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGEgc3BlY2lmaWMgZ3JpZCBjb2xvciBhY2NvcmRpbmcgdG8gdGhlIGF0dGFjayByZXN1bHQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgVGFyZ2V0IGdyaWQgQXhpIFkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gVGFyZ2V0IGdyaWQgQXhpIFguXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBQbGF5ZXIgaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhdHRhY2tSZXN1bHRcbiAgICogIDEuIGlmIGF0dGFjayBoaXQgYSBzaGlwLCBpdCdzIHRoZSBzaGlwJ3MgaWQuXG4gICAqICAyLiBpZiBhdHRhY2sgbWlzc2VkLCBpdCdzIC0xLlxuICAgKiAgMy4gaWYgdGhlIHRhcmdldCBzcG90IGFscmVheSBiZWVuIGF0dGFja2VkIGJlZm9yZSwgaXQncyB1bmRlZmluZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXJTZWFBZnRlckF0dGFjayhyb3csIGNvbHVtbiwgcGxheWVySWQsIGF0dGFja1Jlc3VsdCkge1xuICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBnZXRQbGF5ZXJFbGVtZW50QnlJZChwbGF5ZXJJZCk7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBwbGF5ZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCA+IC5zZWFMYXllcicpO1xuICAgIGNvbnN0IGdyaWQgPSBzZWFMYXllci5xdWVyeVNlbGVjdG9yKGAuZ3JpZFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1ufVwiXWApO1xuICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBubyBtb3JlIGdyaWQgdG8gYXR0YWNrXG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gLTEpIHsgLy8gbWlzc2VkXG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2FscmVhZHlNaXNzZWQnKTtcbiAgICB9IGVsc2UgeyAvLyBpdCdzIGEgaGl0XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2FscmVhZHlIaXQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgb2YgdGhlIHNoaXAgYm9keSwgbWFyayB0aGF0IHNoaXAgb24gdGhlIFNlYSBMYXllci5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFBsYXllciBpZC5cbiAgICogQHBhcmFtIHtBcnJheX0gc3Vua0Nvb3JkaW5hdGVzIENvb3JkaW5hdGVzIG9mIHRoZSBzdW5rIHNoaXAgKHN1bmsgYnkgdGhpcyBhdHRhY2spLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyU3Vua1NoaXBzKHBsYXllcklkLCBzdW5rQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gZ2V0UGxheWVyRWxlbWVudEJ5SWQocGxheWVySWQpO1xuICAgIGNvbnN0IHNlYUxheWVyID0gcGxheWVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQgPiAuc2VhTGF5ZXInKTtcbiAgICBzdW5rQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3QgZ3JpZCA9IHNlYUxheWVyLnF1ZXJ5U2VsZWN0b3IoYC5ncmlkW2RhdGEtcm93PVwiJHtjb29yZGluYXRlWzBdfVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29vcmRpbmF0ZVsxXX1cIl1gKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgbGlzdGVuZXIgdG8gYSBwbGF5ZXIncyBib2FyZCwgc28gdGhhdFxuICAgKiB3aGVuIG9wcG9uZW50IGNsaWNrIG9uIGJvYXJkIHdpbGwgY2FsbGJhY2sgY29udHJvbGxlcidzIHBsYXllckF0dGFjaygpIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBsYXllckVsZW1lbnQgbWFpblBsYXllciBvciBvcHBvbmVudFBsYXllclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDb250cm9sbGVyLnBsYXllckF0dGFjaygpIGZ1bmN0aW9uLFxuICAgKiBUaGUgYWN0dWFsIGF0dGFjayBsb2dpYyByZXNpZGVzIGluIGNvbnRyb2xsZXIuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmVjZWl2ZUF0dGFja1RvUGxheWVyc0JvYXJkKHBsYXllckVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBwbGF5ZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCA+IC5zZWFMYXllcicpO1xuICAgIGNvbnN0IGdyaWRzID0gc2VhTGF5ZXIucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKTtcbiAgICBncmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XG4gICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soXG4gICAgICAgIHBhcnNlSW50KGdyaWQuZGF0YXNldC5yb3csIDEwKSxcbiAgICAgICAgcGFyc2VJbnQoZ3JpZC5kYXRhc2V0LmNvbHVtbiwgMTApLFxuICAgICAgICBwYXJzZUludChwbGF5ZXJFbGVtZW50LmRhdGFzZXQucGxheWVySWQsIDEwKSxcbiAgICAgICkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgcmVjZWl2ZSBhdHRhY2sgZmVhdHVyZSB0byBib3RoIE1BSU4gYW5kIE9QUE9ORU5UIGJvYXJkIG9uIHRoZSBwYWdlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDb250cm9sbGVyLnBsYXllckF0dGFjaygpIGZ1bmN0aW9uLFxuICAgKiBUaGUgYWN0dWFsIGF0dGFjayBsb2dpYyByZXNpZGVzIGluIGNvbnRyb2xsZXIuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmVjZWl2ZUF0dGFjayhjYWxsYmFjaykge1xuICAgIGJpbmRSZWNlaXZlQXR0YWNrVG9QbGF5ZXJzQm9hcmQoRUxFTUVOVFMubWFpblBsYXllciwgY2FsbGJhY2spO1xuICAgIGJpbmRSZWNlaXZlQXR0YWNrVG9QbGF5ZXJzQm9hcmQoRUxFTUVOVFMub3Bwb25lbnRQbGF5ZXIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHJhbmRvbSBmbGVldCBmZWF0dXJlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDb250cm9sbGVyIHdpbGwgcHJvdmlkZSB0aGUgbG9naWMgb2ZcbiAgICogYWN0dWFsbHkgZ2VuZXJhdGluZyBhIG5ldyBmbGVldCBhbmQgcmUtZHJhdyB0aGUgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmFuZG9tRmxlZXQoY2FsbGJhY2spIHtcbiAgICBjb25zdCBwbGF5ZXJJZCA9IHBhcnNlSW50KEVMRU1FTlRTLm1haW5QbGF5ZXIuZGF0YXNldC5wbGF5ZXJJZCwgMTApO1xuICAgIEVMRU1FTlRTLnJhbmRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbGxiYWNrKE1BSU4sIHBsYXllcklkKSk7IC8vIG1haW4gcGxheWVyIHJhbmRvbSBoaXMgZmxlZXQuXG4gIH1cblxuICAvKipcbiAgICogTG9jayB0aGUgYm9hcmQgb2YgdGFyZ2V0IHBsYXllci5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFRhcmdldCBwbGF5ZXIncyBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGxvY2tCb2FyZChwbGF5ZXJJZCkge1xuICAgIGdldFBsYXllckVsZW1lbnRCeUlkKHBsYXllcklkKS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogVW5sb2NrIHRoZSBib2FyZCBvZiB0YXJnZXQgcGxheWVyLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgVGFyZ2V0IHBsYXllcidzIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrQm9hcmQocGxheWVySWQpIHtcbiAgICBnZXRQbGF5ZXJFbGVtZW50QnlJZChwbGF5ZXJJZCkucXVlcnlTZWxlY3RvcignLmJvYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBMb2NrIG9wcG9uZW50J3MgYm9hcmQsIHByZXZlbnQgcGxheWVyIGZyb20gaW50ZXJhY3Qgd2l0aCB0aGUgYm9hcmRcbiAgICAqIGJlZm9yZSBzdGFydGluZyB0aGUgZ2FtZS5cbiAgICAqL1xuICBmdW5jdGlvbiBsb2NrT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBFTEVNRU5UUy5vcHBvbmVudFBsYXllci5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICAqIE9uY2UgdGhlIGdhbWUgaXMgcHJlcGFyZWQsIHVubG9jayBvcHBvbmVudCdzIGJvYXJkcywgc28gdGhhdCBwbGF5ZXIgZ2FpblxuICAgICogdGhlIGFjY2VzcyB0byB0aGUgYm9hcmQuXG4gICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBFTEVNRU5UUy5vcHBvbmVudFBsYXllci5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgQ29udHJvbGxlciB3aGVuIHBsYXllciBjbGljayBTdGFydCBidXR0b24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEFjdHVhbCBsb2dpYyBvZiBzdGFydGluZyBhIGdhbWUgaW4gQ29udHJvbGxvciBtb2R1bGUuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kU3RhcnRHYW1lQnV0dG9uKGNhbGxiYWNrKSB7XG4gICAgRUxFTUVOVFMuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYWxsYmFjaygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50IHBsYXllciBmcm9tIGNsaWNrIHRoZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbG9ja1JhbmRvbUZsZWV0QnV0dG9uKCkge1xuICAgIEVMRU1FTlRTLnJhbmRvbS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgcGxheWVyIHRvIHVzZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrUmFuZG9tRmxlZXRCdXR0b24oKSB7XG4gICAgRUxFTUVOVFMucmFuZG9tLmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50IHBsYXllciBmcm9tIGNsaWNrIHRoZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbG9ja1N0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICBFTEVNRU5UUy5zdGFydC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgcGxheWVyIHRvIGNsaWNrIHRoZSByYW5kb20gZmxlZXQgYnV0dG9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrU3RhcnRHYW1lQnV0dG9uKCkge1xuICAgIEVMRU1FTlRTLnN0YXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBDb250cm9sbGVyIHdoZW4gcGxheWVyIGNsaWNrIFJlc3RhcnQgYnV0dG9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBY3R1YWwgbG9naWMgb2YgcmVzdGFydGluZyBhIGdhbWUgaW4gQ29udHJvbGxvciBtb2R1bGUuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmVzdGFydEdhbWVCdXR0b24oY2FsbGJhY2spIHtcbiAgICBFTEVNRU5UUy5uZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRyYXdCb2FyZCxcbiAgICBjbGVhckJvYXJkLFxuICAgIGNsZWFyQWxsQm9hcmRzLFxuICAgIHJlbmRlclNlYUFmdGVyQXR0YWNrLFxuICAgIHJlbmRlclN1bmtTaGlwcyxcbiAgICBiaW5kUmVjZWl2ZUF0dGFjayxcbiAgICBiaW5kUmFuZG9tRmxlZXQsXG4gICAgbG9ja0JvYXJkLFxuICAgIHVubG9ja0JvYXJkLFxuICAgIGxvY2tPcHBvbmVudEJvYXJkLFxuICAgIHVubG9ja09wcG9uZW50Qm9hcmQsXG4gICAgYmluZFN0YXJ0R2FtZUJ1dHRvbixcbiAgICBsb2NrUmFuZG9tRmxlZXRCdXR0b24sXG4gICAgdW5sb2NrUmFuZG9tRmxlZXRCdXR0b24sXG4gICAgYmluZFJlc3RhcnRHYW1lQnV0dG9uLFxuICAgIGxvY2tTdGFydEdhbWVCdXR0b24sXG4gICAgdW5sb2NrU3RhcnRHYW1lQnV0dG9uLFxuICB9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IENvbnRyb2xsZXIsIHtcbiAgQUksXG4gIEhVTUFOLFxuICBFQVNZLFxuICBOT1JNQUwsXG4gIEhBUkQsXG4gIE1BSU4sXG4gIE9QUE9ORU5ULFxufSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvaW5kZXguY3NzJztcblxuQ29udHJvbGxlci5uZXdHYW1lKCk7XG5Db250cm9sbGVyLmVuYWJsZVJhbmRvbUZsZWV0KCk7XG5Db250cm9sbGVyLmVuYWJsZVN0YXJ0R2FtZSgpO1xuQ29udHJvbGxlci5lbmFibGVSZXN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJBSSIsIkhVTUFOIiwiRUFTWSIsIk5PUk1BTCIsIkhBUkQiLCJWaWV3IiwiTUFJTiIsIk9QUE9ORU5UIiwiaW5pdFBsYXllcnNBbmRCb2FyZHMiLCJwbGF5ZXIxVHlwZSIsInBsYXllcjJUeXBlIiwiZHJhd0FTaW5nbGVCb2FyZCIsInBsYXllciIsIm1haW5Pck9wcG9uZW50IiwiZHJhd0JvYXJkIiwiREVGQVVMVF9CT0FSRF9TSVpFIiwiaWQiLCJib2FyZCIsImNhbkhpdFNoaXAiLCJkcmF3Qm9hcmRzRm9yUGxheWVyIiwicGxheWVySWQiLCJvcHBvbmVudElkIiwicGxheWVycyIsImxlbmd0aCIsImNsZWFyQWxsQm9hcmRzIiwibG9ja09wcG9uZW50Qm9hcmQiLCJ1bmxvY2tPcHBvbmVudEJvYXJkIiwiZ2FtZW92ZXIiLCJ3aW5uZXJJZCIsImFsZXJ0IiwicGxheWVyQXR0YWNrT25lU3BvdCIsInJvdyIsImNvbHVtbiIsImFscmVhZHlCZWVuQXR0YWNrZWQiLCJ1bmRlZmluZWQiLCJzaGlwSWQiLCJyZWNlaXZlQXR0YWNrIiwicmVuZGVyU2VhQWZ0ZXJBdHRhY2siLCJjdXJyZW50UGxheWVyIiwibWVtb3JpemVMYXN0SGl0IiwiZ2V0U2hpcCIsImlzU3VuayIsInNoaXBDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzIiwicmVuZGVyU3Vua1NoaXBzIiwiZm9yZ2V0TGFzdEhpdCIsInNoaXBTdXJyb3VuZGluZ0FyZWEiLCJwbGF5ZXJBdHRhY2siLCJyZXN1bHQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiY29vcmRpbmF0ZSIsImFsbFN1bmsiLCJsb2NrQm9hcmQiLCJ1bmxvY2tCb2FyZCIsIm5leHRUdXJuIiwiZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrIiwiYmluZFJlY2VpdmVBdHRhY2siLCJyYW5kb21BZ2FpbiIsImNsZWFyRmxlZXQiLCJhdXRvZmlsbEZsZWV0IiwiY2xlYXJCb2FyZCIsImVuYWJsZVJhbmRvbUZsZWV0IiwiYmluZFJhbmRvbUZsZWV0IiwibmV3R2FtZSIsInN0YXJ0R2FtZSIsInN0YXJ0IiwibG9ja1JhbmRvbUZsZWV0QnV0dG9uIiwibG9ja1N0YXJ0R2FtZUJ1dHRvbiIsImVuYWJsZVN0YXJ0R2FtZSIsImJpbmRTdGFydEdhbWVCdXR0b24iLCJyZXN0YXJ0R2FtZSIsInVubG9ja1JhbmRvbUZsZWV0QnV0dG9uIiwidW5sb2NrU3RhcnRHYW1lQnV0dG9uIiwiZW5hYmxlUmVzdGFydEdhbWUiLCJiaW5kUmVzdGFydEdhbWVCdXR0b24iLCJVTklUX1RFU1QiLCJpblNpemUiLCJzaXplIiwiZmxlZXQiLCJoaXRzIiwibWlzc2VzIiwiaW50YWN0IiwiZmluZCIsInNoaXAiLCJmbGVldFNpemUiLCJyZWR1Y2UiLCJhcnIiLCJmbGVldFNoaXAiLCJwdXNoIiwibGVnYWwiLCJudW0iLCJoZWFkIiwidWxSb3ciLCJ1bENvbCIsInRhaWwiLCJiclJvdyIsImJyQ29sIiwiYmxSb3ciLCJibENvbCIsInVyUm93IiwidXJDb2wiLCJpc0hvcml6b250YWwiLCJpIiwiZmlsbEludGFjdCIsInJlbW92ZUZyb21JbnRhY3QiLCJwb3NpdGlvblN0ciIsImluZGV4IiwiZmluZEluZGV4IiwicG9zaXRpb24iLCJzcGxpY2UiLCJpc092ZXJsYXAiLCJmaXhlZFNoaXAiLCJuZXdIZWFkIiwibmV3VGFpbCIsImhlYWRSb3ciLCJoZWFkQ29sdW1uIiwidGFpbFJvdyIsInRhaWxDb2x1bW4iLCJvdmVybGFwUm93U3RhcnQiLCJNYXRoIiwibWF4Iiwib3ZlcmxhcENvbHVtblN0YXJ0Iiwib3ZlcmxhcFJvd0VuZCIsIm1pbiIsIm92ZXJsYXBDb2x1bW5FbmQiLCJhdmFpbGFibGUiLCJzb21lIiwicHV0U2hpcCIsInB1dCIsInJlbW92ZVNoaXAiLCJ0b2dnbGVGbGVldFNoaXAiLCJ0b2dnbGVEaXJlY3Rpb24iLCJwb3NpdGlvbkVxdWFsIiwicG9zaXRpb25BIiwicG9zaXRpb25CIiwiYWxyZWFkeUhpdCIsImhpdCIsImFscmVhZHlNaXNzZWQiLCJtaXNzIiwidHJ5SGl0U2hpcCIsImNhbkhpdCIsInRhcmdldCIsImV2ZXJ5IiwiYXBpIiwiU2hpcCIsIkJvYXJkIiwiUGxheWVyIiwiU1RBTkRBUkRfRkxFRVQiLCJnYW1lIiwicmFuZG9tIiwiZmxvb3IiLCJyYW5kb21Qb3NpdGlvbiIsInRlbXBsYXRlIiwidGhlUGxheWVyIiwicGxheWVyVHlwZXMiLCJuZXdQbGF5ZXIiLCJhZ2FpbnN0QUkiLCJsZXZlbCIsImFnYWluc3RIdW1hbiIsIm5leHRJbmRleCIsInBhc3NUb05leHRQbGF5ZXIiLCJjb250cm9sbGVyQXR0YWNrQ2FsbGJhY2siLCJjdXJyUGxheWVyIiwiaXNBSSIsIm9wcG9uZW50IiwiYXR0YWNrIiwiU3ltYm9sIiwiaW5JZCIsImluQm9hcmQiLCJpblR5cGUiLCJpbkxldmVsIiwidHlwZSIsImxhc3RIaXQiLCJhaUxldmVsIiwic2V0QWlMZXZlbCIsInJhbmRvbUF0dGFjayIsIm9wcG9uZW50Qm9hcmQiLCJzdHIiLCJzcGxpdCIsInJvd1N0ciIsImNvbHVtblN0ciIsInBhcnNlSW50IiwiZGlzdGFuY2UiLCJkaXN0IiwiYWJzIiwiY29EaXN0YW5jZSIsInN1bVJvd0Rpc3QiLCJzdW1Db2xEaXN0Iiwibm9ybWFsQXR0YWNrIiwibWluRGlzdGFuY2UiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJzbWFydEF0dGNrIiwicG9pbnQiLCJpbmZpbml0ZSIsIkdFTiIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsImluTmFtZSIsIm5leHQiLCJ2YWx1ZSIsIm5hbWUiLCJkaXJlY3Rpb24iLCJjb3VudEhpdHMiLCJyZXBvcnRTdW5rIiwiRUxFTUVOVFMiLCJyb290IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFpblBsYXllciIsIm9wcG9uZW50UGxheWVyIiwiY3JlYXRlR3JpZCIsImdyaWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImRyYXdTZWFMYXllciIsInNlYUxheWVyIiwiYXBwZW5kQ2hpbGQiLCJkcmF3U2hpcExheWVyIiwiY2hlY2tTaGlwQ2FsbGJhY2siLCJzaGlwTGF5ZXIiLCJnZXRNYWluT3JPcHBvbmVudEJvYXJkIiwiZ2V0UGxheWVyRWxlbWVudEJ5SWQiLCJwYXJlbnRFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXR0YWNrUmVzdWx0IiwicGxheWVyRWxlbWVudCIsInN1bmtDb29yZGluYXRlcyIsImJpbmRSZWNlaXZlQXR0YWNrVG9QbGF5ZXJzQm9hcmQiLCJjYWxsYmFjayIsImdyaWRzIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJDb250cm9sbGVyIiwiY3NzIl0sInNvdXJjZVJvb3QiOiIifQ==