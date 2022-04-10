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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --blue: blue;\n  --orange: orange;\n  --red: red;\n  --board-border: var(--black);\n  --hit: var(--orange);\n  --missed: var(--gray);\n  --sunk: var(--red);\n  --transparent: #00000000;\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.player .seaLayer,\n.player .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.player .seaLayer {\n  background-color: var(--white);\n  user-select: none;\n  z-index: 2;\n}\n\n.player > .board.lock .seaLayer {\n  pointer-events: none;\n}\n\n.player.main .seaLayer {\n  opacity: .5;\n  user-select: none;\n  pointer-events: none;\n}\n\n.player .shipLayer {\n  z-index: 1;\n}\n\n.player .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.player .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.player .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.player .grid.hasShip {\n  background-color: var(--blue);\n}\n\n.player .seaLayer .grid.alreadyHit {\n  position: relative;\n}\n\n.player .seaLayer .grid.alreadyHit::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'local_fire_department';\n  color: var(--hit);\n}\n\n.player .grid.alreadyMissed {\n  background-color: var(--missed);\n}\n\n.player .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;;EAEjB,UAAU;EACV,cAAc;EACd,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,4BAA4B;EAC5B,oBAAoB;EACpB,qBAAqB;EACrB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,kEAAkE;EAClE,+DAA+D;AACjE;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,4CAA4C;EAC5C,2CAA2C;AAC7C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":["@import './norm.css';\n@import 'https://fonts.googleapis.com/icon?family=Material+Icons';\n\n:root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --blue: blue;\n  --orange: orange;\n  --red: red;\n  --board-border: var(--black);\n  --hit: var(--orange);\n  --missed: var(--gray);\n  --sunk: var(--red);\n  --transparent: #00000000;\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.player .seaLayer,\n.player .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.player .seaLayer {\n  background-color: var(--white);\n  user-select: none;\n  z-index: 2;\n}\n\n.player > .board.lock .seaLayer {\n  pointer-events: none;\n}\n\n.player.main .seaLayer {\n  opacity: .5;\n  user-select: none;\n  pointer-events: none;\n}\n\n.player .shipLayer {\n  z-index: 1;\n}\n\n.player .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.player .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.player .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.player .grid.hasShip {\n  background-color: var(--blue);\n}\n\n.player .seaLayer .grid.alreadyHit {\n  position: relative;\n}\n\n.player .seaLayer .grid.alreadyHit::after {\n  position: absolute;\n  top: .2rem;\n  left: .2rem;\n  content: 'local_fire_department';\n  color: var(--hit);\n}\n\n.player .grid.alreadyMissed {\n  background-color: var(--missed);\n}\n\n.player .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}"],"sourceRoot":""}]);
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
   * Gameover logic.
   */


  function gameover(winnerId) {
    // eslint-disable-next-line no-alert
    alert("".concat(winnerId, " win!"));
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
   *  A list of surrounding points if a ship is sunk after this attack.
   *  Otherwise, return an empty array.
   */


  function playerAttackOneSpot(row, column, opponentId) {
    var board = _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].player(opponentId).board();
    var surroundings = []; // attack

    if (board.alreadyBeenAttacked(row, column)) return undefined;
    var shipId = board.receiveAttack(row, column); // render attacked spot

    _view__WEBPACK_IMPORTED_MODULE_2__["default"].renderSeaAfterAttack(row, column, opponentId, shipId);

    if (shipId !== -1 && board.getShip(shipId).isSunk()) {
      // hit a ship
      _view__WEBPACK_IMPORTED_MODULE_2__["default"].renderSunkShips(opponentId, board.getShip(shipId).coordinates());
      surroundings = board.shipSurroundingArea(shipId);
    }

    return surroundings;
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
    var surroundings = playerAttackOneSpot(row, column, opponentId);
    if (surroundings === undefined) return; // spot already been attacked.

    if (surroundings.length > 0) {
      surroundings.forEach(function (coordinate) {
        return playerAttackOneSpot.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(coordinate).concat([opponentId]));
      });
    }

    if (_models_game__WEBPACK_IMPORTED_MODULE_1__["default"].player(opponentId).board().allSunk()) {
      gameover(_models_game__WEBPACK_IMPORTED_MODULE_1__["default"].currentPlayer().id());
      return;
    }

    _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].nextTurn(playerAttack); // pass itself to the Game module as a callback.
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
   * Initialize a new game.
   * The game is not yet started.
   * Have to call startGame() to start.
   */


  function initGame() {
    clearAllBoards();
    initPlayersAndBoards(_models_game__WEBPACK_IMPORTED_MODULE_1__.HUMAN, _models_game__WEBPACK_IMPORTED_MODULE_1__.AI);
    drawBoardsForPlayer(0); // in human player's perspective

    lockOpponentBoard();
    enableBoardReceiveAttack();
    enableRandomFleet();
  }
  /**
   * Start the game, and unlock opponent's board.
   */


  function startGame() {
    _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].start();
    _models_game__WEBPACK_IMPORTED_MODULE_1__["default"].nextTurn(playerAttack); // pass itself to the Game module as a callback.

    unlockOpponentBoard();
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
    initGame: initGame,
    startGame: startGame
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
   */


  function nextTurn(controllerAttackCallback) {
    game.currentPlayer = nextIndex();
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
    board: inBoard
  };

  if (player.type === AI) {
    player.level = inLevel || EASY; // default is EASY
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
   * Pick(with normal strategy) a target from opponent board's intact list.
   * @param {Board} opponentBoard Oppoenent's board object.
   * @returns the target coordinate
   */


  function normalAttack(opponentBoard) {
    return randomAttack(opponentBoard);
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

  return {
    id: id,
    isAI: isAI,
    aiLevel: aiLevel,
    setAiLevel: setAiLevel,
    board: board,
    attack: attack
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
    start: document.querySelector('.start')
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
  } // prevent current player's board to be attacked.


  return {
    drawBoard: drawBoard,
    clearBoard: clearBoard,
    clearAllBoards: clearAllBoards,
    renderSeaAfterAttack: renderSeaAfterAttack,
    renderSunkShips: renderSunkShips,
    bindReceiveAttack: bindReceiveAttack,
    bindRandomFleet: bindRandomFleet,
    lockOpponentBoard: lockOpponentBoard,
    unlockOpponentBoard: unlockOpponentBoard
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


_controller__WEBPACK_IMPORTED_MODULE_0__["default"].clearAllBoards();
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].initPlayersAndBoards(_controller__WEBPACK_IMPORTED_MODULE_0__.HUMAN, _controller__WEBPACK_IMPORTED_MODULE_0__.AI);
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].drawBoardsForPlayer(0); // in human player's perspective

_controller__WEBPACK_IMPORTED_MODULE_0__["default"].lockOpponentBoard();
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].enableBoardReceiveAttack();
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].enableRandomFleet(); // Controller.startGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxp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Q0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQVNBO0FBRUEySixrRUFBQTtBQUNBQSx3RUFBQSxDQUFnQ25OLDhDQUFoQyxFQUF1Q0QsMkNBQXZDO0FBQ0FvTix1RUFBQSxDQUErQixDQUEvQixHQUFtQzs7QUFDbkNBLHFFQUFBO0FBQ0FBLDRFQUFBO0FBQ0FBLHFFQUFBLElBQ0EsMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9ub3JtLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvbW9kZWxzL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvbW9kZWxzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy92aWV3LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm0uY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qIGJvYXJkICovXFxuICAtLWJvYXJkLXNpemU6IDEwO1xcbiAgLS1ncmlkLXNpemU6IDJyZW07XFxuXFxuICAvKiBjb2xvciAqL1xcbiAgLS13aGl0ZTogd2hpdGU7XFxuICAtLWJsYWNrOiBibGFjaztcXG4gIC0tZ3JheTogZ3JheTtcXG4gIC0tYmx1ZTogYmx1ZTtcXG4gIC0tb3JhbmdlOiBvcmFuZ2U7XFxuICAtLXJlZDogcmVkO1xcbiAgLS1ib2FyZC1ib3JkZXI6IHZhcigtLWJsYWNrKTtcXG4gIC0taGl0OiB2YXIoLS1vcmFuZ2UpO1xcbiAgLS1taXNzZWQ6IHZhcigtLWdyYXkpO1xcbiAgLS1zdW5rOiB2YXIoLS1yZWQpO1xcbiAgLS10cmFuc3BhcmVudDogIzAwMDAwMDAwO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcmVtO1xcbn1cXG5cXG4ucGxheWVyIC5zZWFMYXllcixcXG4ucGxheWVyIC5zaGlwTGF5ZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXNpemUpLCB2YXIoLS1ncmlkLXNpemUpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLXNpemUpLCB2YXIoLS1ncmlkLXNpemUpKTtcXG59XFxuXFxuLnBsYXllciAuc2VhTGF5ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ucGxheWVyID4gLmJvYXJkLmxvY2sgLnNlYUxheWVyIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGxheWVyLm1haW4gLnNlYUxheWVyIHtcXG4gIG9wYWNpdHk6IC41O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnBsYXllciAuc2hpcExheWVyIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5wbGF5ZXIgLmdyaWQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4ucGxheWVyIC5ncmlkLnVwcGVyQm9yZGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4ucGxheWVyIC5ncmlkLmxlZnRCb3JkZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4ucGxheWVyIC5ncmlkLmhhc1NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5wbGF5ZXIgLnNlYUxheWVyIC5ncmlkLmFscmVhZHlIaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyIC5zZWFMYXllciAuZ3JpZC5hbHJlYWR5SGl0OjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC4ycmVtO1xcbiAgbGVmdDogLjJyZW07XFxuICBjb250ZW50OiAnbG9jYWxfZmlyZV9kZXBhcnRtZW50JztcXG4gIGNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4ucGxheWVyIC5ncmlkLmFscmVhZHlNaXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzc2VkKTtcXG59XFxuXFxuLnBsYXllciAuZ3JpZC5hbHJlYWR5SGl0LnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7O0VBRWpCLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtFQUFrRTtFQUNsRSwrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9ub3JtLmNzcyc7XFxuQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucyc7XFxuXFxuOnJvb3Qge1xcbiAgLyogYm9hcmQgKi9cXG4gIC0tYm9hcmQtc2l6ZTogMTA7XFxuICAtLWdyaWQtc2l6ZTogMnJlbTtcXG5cXG4gIC8qIGNvbG9yICovXFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tYmxhY2s6IGJsYWNrO1xcbiAgLS1ncmF5OiBncmF5O1xcbiAgLS1ibHVlOiBibHVlO1xcbiAgLS1vcmFuZ2U6IG9yYW5nZTtcXG4gIC0tcmVkOiByZWQ7XFxuICAtLWJvYXJkLWJvcmRlcjogdmFyKC0tYmxhY2spO1xcbiAgLS1oaXQ6IHZhcigtLW9yYW5nZSk7XFxuICAtLW1pc3NlZDogdmFyKC0tZ3JheSk7XFxuICAtLXN1bms6IHZhcigtLXJlZCk7XFxuICAtLXRyYW5zcGFyZW50OiAjMDAwMDAwMDA7XFxufVxcblxcbi5ib2FyZCB7XFxuICBtYXJnaW46IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjByZW07XFxufVxcblxcbi5wbGF5ZXIgLnNlYUxheWVyLFxcbi5wbGF5ZXIgLnNoaXBMYXllciB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtc2l6ZSksIHZhcigtLWdyaWQtc2l6ZSkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtc2l6ZSksIHZhcigtLWdyaWQtc2l6ZSkpO1xcbn1cXG5cXG4ucGxheWVyIC5zZWFMYXllciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5wbGF5ZXIgPiAuYm9hcmQubG9jayAuc2VhTGF5ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXIubWFpbiAuc2VhTGF5ZXIge1xcbiAgb3BhY2l0eTogLjU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGxheWVyIC5zaGlwTGF5ZXIge1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnBsYXllciAuZ3JpZCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5wbGF5ZXIgLmdyaWQudXBwZXJCb3JkZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5wbGF5ZXIgLmdyaWQubGVmdEJvcmRlciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5wbGF5ZXIgLmdyaWQuaGFzU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnBsYXllciAuc2VhTGF5ZXIgLmdyaWQuYWxyZWFkeUhpdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5ZXIgLnNlYUxheWVyIC5ncmlkLmFscmVhZHlIaXQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLjJyZW07XFxuICBsZWZ0OiAuMnJlbTtcXG4gIGNvbnRlbnQ6ICdsb2NhbF9maXJlX2RlcGFydG1lbnQnO1xcbiAgY29sb3I6IHZhcigtLWhpdCk7XFxufVxcblxcbi5wbGF5ZXIgLmdyaWQuYWxyZWFkeU1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWQpO1xcbn1cXG5cXG4ucGxheWVyIC5ncmlkLmFscmVhZHlIaXQuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdW5rKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0VBQ0UsMEpBQTBKO0FBQzVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBHYW1lLCB7XG4gIEFJLFxuICBIVU1BTixcbiAgRUFTWSxcbiAgTk9STUFMLFxuICBIQVJELFxufSBmcm9tICcuL21vZGVscy9nYW1lJztcbmltcG9ydCBWaWV3LCB7XG4gIE1BSU4sXG4gIE9QUE9ORU5ULFxufSBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbiAgTUFJTixcbiAgT1BQT05FTlQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSAyIHBsYXllcnMgd2l0aCByYW5kb21seSBhdXRvZmlsbGVkIGJvYXJkXG4gICAqIGJlZm9yZSBzdGFydGluZyB0byBkcmF3IHRoZSBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGluaXRQbGF5ZXJzQW5kQm9hcmRzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSkge1xuICAgIEdhbWUuaW5pdFBsYXllcnNBbmRCb2FyZHMocGxheWVyMVR5cGUsIHBsYXllcjJUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIFZpZXcgbW9kdWxlIHRvIGRyYXcgdGhlIGJvYXJkIG9mIGEgY2VydGFpbiBwbGF5ZXIuXG4gICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgUGxheWVyIG9iamVjdC5cbiAgICogQHBhcmFtIHtTeW1ib2x9IG1haW5Pck9wcG9uZW50IEFzIE1haW4gcGxheWVyIG9yIG9wcG9uZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gZHJhd0FTaW5nbGVCb2FyZChwbGF5ZXIsIG1haW5Pck9wcG9uZW50KSB7XG4gICAgVmlldy5kcmF3Qm9hcmQoXG4gICAgICBHYW1lLkRFRkFVTFRfQk9BUkRfU0laRSxcbiAgICAgIHBsYXllci5pZCgpLFxuICAgICAgbWFpbk9yT3Bwb25lbnQsXG4gICAgICBwbGF5ZXIuYm9hcmQoKS5jYW5IaXRTaGlwLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0d28gYm9hcmRzIGluIHBlcnNwZWN0aXZlIG9mIG9uZSBwbGF5ZXIuXG4gICAqICAxLiBIaXMgb3duIGJvYXJkIChNQUlOKS5cbiAgICogIDIuIE9wcG9uZW50J3MgYm9hcmQgKE9QUE9ORU5UKS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFBsYXllcidzIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gZHJhd0JvYXJkc0ZvclBsYXllcihwbGF5ZXJJZCkge1xuICAgIGRyYXdBU2luZ2xlQm9hcmQoR2FtZS5wbGF5ZXIocGxheWVySWQpLCBNQUlOKTtcbiAgICBjb25zdCBvcHBvbmVudElkID0gKHBsYXllcklkICsgMSkgJSBHYW1lLnBsYXllcnMoKS5sZW5ndGg7XG4gICAgZHJhd0FTaW5nbGVCb2FyZChHYW1lLnBsYXllcihvcHBvbmVudElkKSwgT1BQT05FTlQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBib3RoIG1haW4gYW5kIG9wcG9uZW50J3MgYm9hcmQgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJBbGxCb2FyZHMoKSB7XG4gICAgVmlldy5jbGVhckFsbEJvYXJkcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdhbWVvdmVyIGxvZ2ljLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2FtZW92ZXIod2lubmVySWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICBhbGVydChgJHt3aW5uZXJJZH0gd2luIWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbCBhdHRhY2sgbG9naWMuXG4gICAqIDEuIEF0dGFjayB0aGUgdGFyZ2V0IHNwb3QuXG4gICAqIDIuIFJlbmRlciB0aGUgdmlldyBhY2NvcmRpbmcgdG8gdGhlIGF0dGFjayByZXN1bHQuXG4gICAqIDMuIFJldHVybiBhIGxpc3Qgb2Ygc3Vycm91bmRpbmcgcG9pbnRzIGlmIHRoaXMgYXR0YWNrXG4gICAqIGNhdXNlIGEgc2hpcCB0byBzaW5rLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBnaXJkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gb3Bwb25lbnRJZCBJZCBvZiBvcHBvbmVudCBwbGF5ZXIuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKiAgUmV0dXJuIHVuZGVmaW5lZCBpZiBzcG90IGFscmVhZHkgYmVlbiBhdHRhY2tlZC5cbiAgICogIEEgbGlzdCBvZiBzdXJyb3VuZGluZyBwb2ludHMgaWYgYSBzaGlwIGlzIHN1bmsgYWZ0ZXIgdGhpcyBhdHRhY2suXG4gICAqICBPdGhlcndpc2UsIHJldHVybiBhbiBlbXB0eSBhcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllckF0dGFja09uZVNwb3Qocm93LCBjb2x1bW4sIG9wcG9uZW50SWQpIHtcbiAgICBjb25zdCBib2FyZCA9IEdhbWUucGxheWVyKG9wcG9uZW50SWQpLmJvYXJkKCk7XG4gICAgbGV0IHN1cnJvdW5kaW5ncyA9IFtdO1xuICAgIC8vIGF0dGFja1xuICAgIGlmIChib2FyZC5hbHJlYWR5QmVlbkF0dGFja2VkKHJvdywgY29sdW1uKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBzaGlwSWQgPSBib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcbiAgICAvLyByZW5kZXIgYXR0YWNrZWQgc3BvdFxuICAgIFZpZXcucmVuZGVyU2VhQWZ0ZXJBdHRhY2socm93LCBjb2x1bW4sIG9wcG9uZW50SWQsIHNoaXBJZCk7XG4gICAgaWYgKHNoaXBJZCAhPT0gLTEgJiYgYm9hcmQuZ2V0U2hpcChzaGlwSWQpLmlzU3VuaygpKSB7IC8vIGhpdCBhIHNoaXBcbiAgICAgIFZpZXcucmVuZGVyU3Vua1NoaXBzKG9wcG9uZW50SWQsIGJvYXJkLmdldFNoaXAoc2hpcElkKS5jb29yZGluYXRlcygpKTtcbiAgICAgIHN1cnJvdW5kaW5ncyA9IGJvYXJkLnNoaXBTdXJyb3VuZGluZ0FyZWEoc2hpcElkKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cnJvdW5kaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2sgdGhlIHRhcmdldCBzcG90LiBJZiBhIHNoaXAgc2luayBhZnRlciB0aGlzIGF0dGFjaywgaXQgd2lsbCBhdXRvbWF0aWNhbGx5XG4gICAqIGF0dGFjayB0aGUgc3Vycm91bmRpbmcgYXJlYSBvZiB0aGF0IHNoaXAgKG5vIG90aGVyIHNoaXAgY2FuIHN0YXkgaW4gdGhhdCBhcmVhKS5cbiAgICogV2hlbiBodW1hbiBwbGF5ZXIgY2xpY2sgb24gdGhlIGJvYXJkLCBWaWV3IG1vZHVsZSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbi5cbiAgICogV2hlbiBBSSBwbGF5ZXIgZGVjaWRlIHRoZSB0YXJnZXQgcG9zaXRpb24gb2YgbmV4dCBhdHRhY2ssIGl0IHdpbGwgYWxzb1xuICAgKiBjYWxsYmFjayB0aGlzIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBnaXJkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gb3Bwb25lbnRJZCBJZCBvZiBvcHBvbmVudCBwbGF5ZXIuXG4gICAqL1xuICBmdW5jdGlvbiBwbGF5ZXJBdHRhY2socm93LCBjb2x1bW4sIG9wcG9uZW50SWQpIHtcbiAgICBjb25zdCBzdXJyb3VuZGluZ3MgPSBwbGF5ZXJBdHRhY2tPbmVTcG90KHJvdywgY29sdW1uLCBvcHBvbmVudElkKTtcbiAgICBpZiAoc3Vycm91bmRpbmdzID09PSB1bmRlZmluZWQpIHJldHVybjsgLy8gc3BvdCBhbHJlYWR5IGJlZW4gYXR0YWNrZWQuXG4gICAgaWYgKHN1cnJvdW5kaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICBzdXJyb3VuZGluZ3MuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4gcGxheWVyQXR0YWNrT25lU3BvdCguLi5jb29yZGluYXRlLCBvcHBvbmVudElkKSk7XG4gICAgfVxuICAgIGlmIChHYW1lLnBsYXllcihvcHBvbmVudElkKS5ib2FyZCgpLmFsbFN1bmsoKSkge1xuICAgICAgZ2FtZW92ZXIoR2FtZS5jdXJyZW50UGxheWVyKCkuaWQoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIEdhbWUubmV4dFR1cm4ocGxheWVyQXR0YWNrKTsgLy8gcGFzcyBpdHNlbGYgdG8gdGhlIEdhbWUgbW9kdWxlIGFzIGEgY2FsbGJhY2suXG4gIH1cblxuICAvKipcbiAgICogUGFzcyB0aGUgYXR0YWNrIGxvZ2ljIHRvIHRoZSBWaWV3IG1vZHVsZSBhcyBhIGNhbGxiYWNrLlxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrKCkge1xuICAgIFZpZXcuYmluZFJlY2VpdmVBdHRhY2socGxheWVyQXR0YWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IHJhbmRvbSBmbGVldCBmb3IgdGhlIHBsYXllciwgYW5kIHJlLWRyYXcgdGhlIGJvYXJkIG9uIERPTS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFRoZSBwbGF5ZXIgaWQuXG4gICAqL1xuICBmdW5jdGlvbiByYW5kb21BZ2FpbihtYWluT3JPcHBvbmVudCwgcGxheWVySWQpIHtcbiAgICAvLyBnZW5lcmF0ZSByYW5kb20gZmxlZXQgZm9yIHRoYXQgcGxheWVyXG4gICAgY29uc3QgYm9hcmQgPSBHYW1lLnBsYXllcihwbGF5ZXJJZCkuYm9hcmQoKTtcbiAgICBib2FyZC5jbGVhckZsZWV0KCk7XG4gICAgR2FtZS5hdXRvZmlsbEZsZWV0KGJvYXJkKTtcbiAgICAvLyBjbGVhciB0aGUgb2xkIGJvYXJkKG1haW4gb3Igb3Bwb25lbnQpIGZyb20gdGhlIERPTS5cbiAgICBWaWV3LmNsZWFyQm9hcmQobWFpbk9yT3Bwb25lbnQpO1xuICAgIC8vIGRyYXcgYSBuZXcgYm9hcmQgb24gRE9NXG4gICAgZHJhd0FTaW5nbGVCb2FyZChHYW1lLnBsYXllcihwbGF5ZXJJZCksIG1haW5Pck9wcG9uZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZVJhbmRvbUZsZWV0KCkge1xuICAgIFZpZXcuYmluZFJhbmRvbUZsZWV0KHJhbmRvbUFnYWluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2NrIGFsbCBib2FyZHMsIHByZXZlbnQgcGxheWVyIGZyb20gaW50ZXJhY3Qgd2l0aCB0aGUgYm9hcmRcbiAgICogYmVmb3JlIHN0YXJ0aW5nIHRoZSBnYW1lLlxuICAgKi9cbiAgZnVuY3Rpb24gbG9ja09wcG9uZW50Qm9hcmQoKSB7XG4gICAgVmlldy5sb2NrT3Bwb25lbnRCb2FyZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIGdhbWUgaXMgcHJlcGFyZWQsIHVubG9jayBhbGwgYm9hcmRzLCBzbyB0aGF0IHBsYXllciBnYWluXG4gICAqIHRoZSBhY2Nlc3MgdG8gdGhlIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBWaWV3LnVubG9ja09wcG9uZW50Qm9hcmQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbmV3IGdhbWUuXG4gICAqIFRoZSBnYW1lIGlzIG5vdCB5ZXQgc3RhcnRlZC5cbiAgICogSGF2ZSB0byBjYWxsIHN0YXJ0R2FtZSgpIHRvIHN0YXJ0LlxuICAgKi9cbiAgZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG4gICAgY2xlYXJBbGxCb2FyZHMoKTtcbiAgICBpbml0UGxheWVyc0FuZEJvYXJkcyhIVU1BTiwgQUkpO1xuICAgIGRyYXdCb2FyZHNGb3JQbGF5ZXIoMCk7IC8vIGluIGh1bWFuIHBsYXllcidzIHBlcnNwZWN0aXZlXG4gICAgbG9ja09wcG9uZW50Qm9hcmQoKTtcbiAgICBlbmFibGVCb2FyZFJlY2VpdmVBdHRhY2soKTtcbiAgICBlbmFibGVSYW5kb21GbGVldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBnYW1lLCBhbmQgdW5sb2NrIG9wcG9uZW50J3MgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgR2FtZS5zdGFydCgpO1xuICAgIEdhbWUubmV4dFR1cm4ocGxheWVyQXR0YWNrKTsgLy8gcGFzcyBpdHNlbGYgdG8gdGhlIEdhbWUgbW9kdWxlIGFzIGEgY2FsbGJhY2suXG4gICAgdW5sb2NrT3Bwb25lbnRCb2FyZCgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0UGxheWVyc0FuZEJvYXJkcyxcbiAgICBkcmF3QVNpbmdsZUJvYXJkLFxuICAgIGRyYXdCb2FyZHNGb3JQbGF5ZXIsXG4gICAgY2xlYXJBbGxCb2FyZHMsXG4gICAgZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrLFxuICAgIGVuYWJsZVJhbmRvbUZsZWV0LFxuICAgIGxvY2tPcHBvbmVudEJvYXJkLFxuICAgIHVubG9ja09wcG9uZW50Qm9hcmQsXG4gICAgaW5pdEdhbWUsXG4gICAgc3RhcnRHYW1lLFxuICB9O1xufSkoKTtcbiIsImxldCBVTklUX1RFU1Q7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5VTklUX1RFU1QgPSB0cnVlOyAvLyBDb21tZW50IG91dCB0aGlzIGxpbmUgYWZ0ZXIgdW5pdCB0ZXN0LlxuXG5jb25zdCBERUZBVUxUX0JPQVJEX1NJWkUgPSAxMDtcblxuLyoqXG4gKiBCb2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQm9hcmQgbWFnYWdlcyBTaGlwcywgYW5kIGNoZWNrIHRoZSBoaXQgZm9yIHVzZXIuXG4gKiBAcGFyYW0ge051bWJlcn0gaW5TaXplIFNpemUgb2YgdGhlIGdhbWUgYm9hcmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpblNpemUpID0+IHtcbiAgLyoqXG4gICAqIEJvYXJkIHBsYWluIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IGJvYXJkID0ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgc2l6ZTogaW5TaXplIHx8IERFRkFVTFRfQk9BUkRfU0laRSxcbiAgICBmbGVldDogW10sXG4gICAgaGl0czogW10sXG4gICAgbWlzc2VzOiBbXSxcbiAgICBpbnRhY3Q6IFtdLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGNoZWNrIHRoZSBzaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHJldHVybnMgQm9hcmQgc2l6ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgcmV0dXJuIGJvYXJkLnNpemU7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgb3RoZXIgbW9kdWxlcyB0byBnZXQgdGhlIGxpc3Qgb2YgYWxsIGludGFjdCBwb3NpdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGludGFjdCgpIHtcbiAgICByZXR1cm4gYm9hcmQuaW50YWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgc2hpcCBpbiBmbGVldCBieSBpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFNoaXAgaWQuXG4gICAqIEByZXR1cm4gVGhlIHNoaXAgb2JqZWN0IGlmIGV4aXN0cy4gT3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFNoaXAoaWQpIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQuZmluZCgoc2hpcCkgPT4gc2hpcC5pZCgpID09PSBpZCk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgb3RoZXIgbW9kdWxlcyB0byBjaGVjayBzaXplIG9mIGN1cnJlbnQgZmxlZXQuXG4gICAqL1xuICBmdW5jdGlvbiBmbGVldFNpemUoKSB7XG4gICAgcmV0dXJuIGJvYXJkLmZsZWV0Lmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWxsIHNoaXBzIGluIGZsZWV0LlxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJGbGVldCgpIHtcbiAgICBib2FyZC5mbGVldCA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgYm9keSBjb29yZGluYXRlcyBvZiBhbGwgc2hpcHMgaW4gZmxlZXQuXG4gICAqL1xuICBmdW5jdGlvbiBzaGlwQ29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIGJvYXJkLmZsZWV0LnJlZHVjZSgoYXJyLCBmbGVldFNoaXApID0+IHtcbiAgICAgIGFyci5wdXNoKGZsZWV0U2hpcC5jb29yZGluYXRlcygpKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBudW1iZXIgaXMgbG9jYXRlZCBpbiByYW5nZSBvZiBib2FyZCBzaXplLlxuICAgKiBAcGFyYW0ge051bWJlcn0gbnVtIE51bWJlciB0byBjaGVja1xuICAgKiBAcmV0dXJucyB0cnVlIGlmIGluIGJvYXJkLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBsZWdhbChudW0pIHtcbiAgICByZXR1cm4gbnVtID49IDAgJiYgbnVtIDwgYm9hcmQuc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgb2YgdGhlIHN1cnJvdW5kaW5nIHBvaW50cyBvZlxuICAgKiB0aGF0IHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzaGlwSWQgU2hpcCBpZC5cbiAgICogQHJldHVybiB7QXJyYXl9IENvb3JkaW5hdGVzIG9mIHRoZSBzdXJyb3VuZGluZyBwb2ludHMgb2ZcbiAgICogdGhhdCBzaGlwLlxuICAgKi9cbiAgZnVuY3Rpb24gc2hpcFN1cnJvdW5kaW5nQXJlYShzaGlwSWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBzaGlwID0gZ2V0U2hpcChzaGlwSWQpO1xuICAgIGNvbnN0IFt1bFJvdywgdWxDb2xdID0gc2hpcC5oZWFkKCk7XG4gICAgY29uc3QgW2JyUm93LCBickNvbF0gPSBzaGlwLnRhaWwoKTtcbiAgICBsZXQgYmxSb3c7XG4gICAgbGV0IGJsQ29sO1xuICAgIGxldCB1clJvdztcbiAgICBsZXQgdXJDb2w7XG4gICAgaWYgKHNoaXAuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIFtibFJvdywgYmxDb2xdID0gc2hpcC5oZWFkKCk7XG4gICAgICBbdXJSb3csIHVyQ29sXSA9IHNoaXAudGFpbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBbYmxSb3csIGJsQ29sXSA9IHNoaXAudGFpbCgpO1xuICAgICAgW3VyUm93LCB1ckNvbF0gPSBzaGlwLmhlYWQoKTtcbiAgICB9XG4gICAgaWYgKHVsUm93IC0gMSA+PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gdWxDb2wgLSAxOyBpIDw9IHVyQ29sICsgMTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChsZWdhbChpKSkgcmVzdWx0LnB1c2goW3VsUm93IC0gMSwgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYmxSb3cgKyAxIDwgYm9hcmQuc2l6ZSkge1xuICAgICAgZm9yIChsZXQgaSA9IGJsQ29sIC0gMTsgaSA8PSBickNvbCArIDE7IGkgKz0gMSkge1xuICAgICAgICBpZiAobGVnYWwoaSkpIHJlc3VsdC5wdXNoKFtibFJvdyArIDEsIGldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVsQ29sIC0gMSA+PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gdWxSb3c7IGkgPD0gYmxSb3c7IGkgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaChbaSwgdWxDb2wgLSAxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh1ckNvbCArIDEgPCBib2FyZC5zaXplKSB7XG4gICAgICBmb3IgKGxldCBpID0gdXJSb3c7IGkgPD0gYnJSb3c7IGkgKz0gMSkge1xuICAgICAgICByZXN1bHQucHVzaChbaSwgdXJDb2wgKyAxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYm9hcmQsIHB1dCBhbGwgaW50YWN0IHBvc2l0aW9uIGludG8gYm9hcmQuaW50YWN0IGFycmF5LlxuICAgKiBUaGUgcG9zaXRpb24gW3JvdywgY29sdW1uXSBpcyBjb2RlZCBhczogXCJyb3ctY29sdW1uXCIuXG4gICAqL1xuICBmdW5jdGlvbiBmaWxsSW50YWN0KCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkLnNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBib2FyZC5zaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBib2FyZC5pbnRhY3QucHVzaChgJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBwb2ludCBmcm9tIHRoZSBib2FyZC5pbnRhY3QgYXJyYXkuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwb3NpdG9uU3RyIFBvc2l0aW9uIHN0cmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21JbnRhY3QocG9zaXRpb25TdHIpIHtcbiAgICBjb25zdCBpbmRleCA9IGJvYXJkLmludGFjdC5maW5kSW5kZXgoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gcG9zaXRpb25TdHIpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcbiAgICBib2FyZC5pbnRhY3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgbmV3IHNoaXAgc2l0cyBpbiB0aGUgZml4ZWQgc2hpcCdzIGZvcmJpZGVuIHpvbmUuXG4gICAqIEBwYXJhbSB7U2hpcH0gZml4ZWRTaGlwIFRoZSBzaGlwIGFscmVhZHkgcHV0IG9uIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtBcnJheX0gbmV3SGVhZCBIZWFkIHBvc2l0aW9uW3JvdywgY29sdW1uXSBvZiB0aGUgbmV3IHNoaXAuXG4gICAqIEBwYXJhbSB7QXJyYXl9IG5ld1RhaWwgVGFpbCBwb3NpdGlvbltyb3csIGNvbHVtbl0gb2YgdGhlIG5ldyBzaGlwLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZXNlIHR3byBzaGlwcyBoYXZlIG92ZXJsYXAgZWFjaCBvdGhlciwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNPdmVybGFwKGZpeGVkU2hpcCwgbmV3SGVhZCwgbmV3VGFpbCkge1xuICAgIGNvbnN0IFtoZWFkUm93LCBoZWFkQ29sdW1uXSA9IGZpeGVkU2hpcC5oZWFkKCk7XG4gICAgY29uc3QgW3RhaWxSb3csIHRhaWxDb2x1bW5dID0gZml4ZWRTaGlwLnRhaWwoKTtcbiAgICBjb25zdCBvdmVybGFwUm93U3RhcnQgPSBNYXRoLm1heCgwLCBoZWFkUm93IC0gMSk7XG4gICAgY29uc3Qgb3ZlcmxhcENvbHVtblN0YXJ0ID0gTWF0aC5tYXgoMCwgaGVhZENvbHVtbiAtIDEpO1xuICAgIGNvbnN0IG92ZXJsYXBSb3dFbmQgPSBNYXRoLm1pbihib2FyZC5zaXplIC0gMSwgdGFpbFJvdyArIDEpO1xuICAgIGNvbnN0IG92ZXJsYXBDb2x1bW5FbmQgPSBNYXRoLm1pbihib2FyZC5zaXplIC0gMSwgdGFpbENvbHVtbiArIDEpO1xuICAgIGlmIChuZXdIZWFkWzBdIC0gbmV3VGFpbFswXSA9PT0gMCkgeyAvLyBpcyBob3Jpem9udGFsXG4gICAgICBpZiAobmV3SGVhZFswXSA8IG92ZXJsYXBSb3dTdGFydCB8fCBuZXdIZWFkWzBdID4gb3ZlcmxhcFJvd0VuZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKG5ld1RhaWxbMV0gPCBvdmVybGFwQ29sdW1uU3RhcnQgfHwgbmV3SGVhZFsxXSA+IG92ZXJsYXBDb2x1bW5FbmQpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAobmV3SGVhZFsxXSA8IG92ZXJsYXBDb2x1bW5TdGFydCB8fCBuZXdIZWFkWzFdID4gb3ZlcmxhcENvbHVtbkVuZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChuZXdUYWlsWzBdIDwgb3ZlcmxhcFJvd1N0YXJ0IHx8IG5ld0hlYWRbMF0gPiBvdmVybGFwUm93RW5kKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHRhcmdldCBwb3NpdGlvbltyb3csIGNvbHVtbl0gaXMgYXZhaWxhYmxlIGZvciBhIHNwZWNpZmljIHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgVGFyZ2V0IHJvdy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBUYXJnZXQgY29sdW1uLlxuICAgKiBAcGFyYW0ge1NoaXB9IHNoaXAgVGhlIHNoaXAgdG8gYmUgcHV0IGludG8gdGhlIGJvYXJkLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGlzIG9rLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBhdmFpbGFibGUocm93LCBjb2x1bW4sIHNoaXApIHtcbiAgICAvLyBjaGVjayBoZWFkXG4gICAgaWYgKHJvdyA8IDBcbiAgICAgIHx8IHJvdyA+PSBib2FyZC5zaXplXG4gICAgICB8fCBjb2x1bW4gPCAwXG4gICAgICB8fCBjb2x1bW4gPj0gYm9hcmQuc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBjaGVjayB0YWlsXG4gICAgY29uc3QgdGFpbFJvdyA9IChzaGlwLmlzSG9yaXpvbnRhbCgpKSA/IHJvdyA6IChyb3cgKyBzaGlwLnNpemUoKSAtIDEpO1xuICAgIGNvbnN0IHRhaWxDb2x1bW4gPSAoc2hpcC5pc0hvcml6b250YWwoKSkgPyAoY29sdW1uICsgc2hpcC5zaXplKCkgLSAxKSA6IGNvbHVtbjtcbiAgICBpZiAodGFpbFJvdyA8IDBcbiAgICAgIHx8IHRhaWxSb3cgPj0gYm9hcmQuc2l6ZVxuICAgICAgfHwgdGFpbENvbHVtbiA8IDBcbiAgICAgIHx8IHRhaWxDb2x1bW4gPj0gYm9hcmQuc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBjaGVjayBvdmVybGFwXG4gICAgY29uc3QgbmV3SGVhZCA9IFtyb3csIGNvbHVtbl07XG4gICAgY29uc3QgbmV3VGFpbCA9IFt0YWlsUm93LCB0YWlsQ29sdW1uXTtcbiAgICBpZiAoYm9hcmQuZmxlZXQuc29tZSgoZml4ZWRTaGlwKSA9PiBpc092ZXJsYXAoZml4ZWRTaGlwLCBuZXdIZWFkLCBuZXdUYWlsKSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXQgc2hpcCBpbnRvIGEgY2VydGFpbiBwb3NpdGlvbiBpZiBpdCdzIGF2YWlsYWJsZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0aGUgc2hpcCBoZWFkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRoZSBzaGlwIGhlYWQuXG4gICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBUaGUgc2hpcCBvYmplY3QuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhpcyBwb3NpdGlvbiBpcyBsZWdhbCBmb3IgYSBuZXcgc2hpcCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gcHV0U2hpcChyb3csIGNvbHVtbiwgc2hpcCkge1xuICAgIHNoaXAucHV0KHJvdywgY29sdW1uKTtcbiAgICBib2FyZC5mbGVldC5wdXNoKHNoaXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNoaXAgZnJvbSB0aGUgYm9hcmQgZmxlZXQgKG9ubHkgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBmbGVldCkuXG4gICAqIEBwYXJhbSB7U2hpcH0gU2hpcCB0byBiZSByZW1vdmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgaW5kZXggPSBib2FyZC5mbGVldC5maW5kSW5kZXgoKGZsZWV0U2hpcCkgPT4gZmxlZXRTaGlwLmlkKCkgPT09IHNoaXAuaWQoKSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgIGJvYXJkLmZsZWV0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogT25seSB1c2VkIHRvIHRvZ2dsZSBzaGlwcyBhbHJlYWR5IGluIHRoZSBmbGVldC5cbiAgICogQHBhcmFtIHtTaGlwfSBzaGlwIFRhcmdldCBzaGlwLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRvZ2dsZWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUZsZWV0U2hpcChzaGlwKSB7XG4gICAgcmVtb3ZlU2hpcChzaGlwKTtcbiAgICBzaGlwLnRvZ2dsZURpcmVjdGlvbigpO1xuICAgIGlmIChhdmFpbGFibGUoLi4uc2hpcC5oZWFkKCksIHNoaXApKSB7XG4gICAgICBwdXRTaGlwKC4uLnNoaXAuaGVhZCgpLCBzaGlwKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgdG9nZ2xlXG4gICAgc2hpcC50b2dnbGVEaXJlY3Rpb24oKTsgLy8gYmFjayB0byBvcmdpbmFsIGRpcmVjdGlvblxuICAgIHB1dFNoaXAoLi4uc2hpcC5oZWFkKCksIHNoaXApOyAvLyBwdXQgYmFjayB0byBmbGVldFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gcG9zaXRpb25bcm93LCBjb2x1bW5dIGVxdWFsIHRvIGVhY2ggb3RoZXIuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvc2l0aW9uQSBbcm93LCBjb2x1bW5dXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvc2l0aW9uQiBbcm93LCBjb2x1bW5dXG4gICAqIEByZXR1cm5zIHRydWUgaWYgZXF1YWwsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHBvc2l0aW9uRXF1YWwocG9zaXRpb25BLCBwb3NpdGlvbkIpIHtcbiAgICByZXR1cm4gKHBvc2l0aW9uQVswXSA9PT0gcG9zaXRpb25CWzBdKSAmJiAocG9zaXRpb25BWzFdID09PSBwb3NpdGlvbkJbMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgcG9zaXRpb24gaGFzIGJlZW4gaGl0IGJlZm9yZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0YXJnZXQgaGFzIGJlZW4gaGl0IGJlZm9yZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxyZWFkeUhpdChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5oaXRzLnNvbWUoKGhpdCkgPT4gcG9zaXRpb25FcXVhbChoaXQsIFtyb3csIGNvbHVtbl0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGVhdGhlciB0aGUgdGFyZ2V0IHBvc2l0aW9uIGhhcyBiZWVuIGF0dGFja2VkXG4gICAqIGJ1dCBpdCB3YXMgYSBtaXNzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGl0IHdhcyBhIG1pc3MsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFscmVhZHlNaXNzZWQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYm9hcmQubWlzc2VzLnNvbWUoKG1pc3MpID0+IHBvc2l0aW9uRXF1YWwobWlzcywgW3JvdywgY29sdW1uXSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgZXhpc3RzIGluIGF0dGFjayBoaXN0b3J5IGJvYXJkLmhpdHMgb3IgYm9hcmQubWlzc2VzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRhcmdldCBoYXMgYmVlbiBhdHRhY2tlZCBiZWZvcmUsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFscmVhZHlCZWVuQXR0YWNrZWQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYWxyZWFkeUhpdChyb3csIGNvbHVtbikgfHwgYWxyZWFkeU1pc3NlZChyb3csIGNvbHVtbik7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsbHkgdHJ5IHRvIGhpdCBhIHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqICByZXR1cm4gc2hpcCBpZCBpZiBoaXQuXG4gICAqICByZXR1cm4gLTEgaWYgbWlzcy5cbiAgICovXG4gIGZ1bmN0aW9uIHRyeUhpdFNoaXAocm93LCBjb2x1bW4pIHtcbiAgICBsZXQgaGl0ID0gLTE7XG4gICAgYm9hcmQuZmxlZXQuZm9yRWFjaCgoZmxlZXRTaGlwKSA9PiB7XG4gICAgICBpZiAoZmxlZXRTaGlwLmhpdChyb3csIGNvbHVtbikpIGhpdCA9IGZsZWV0U2hpcC5pZCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBoaXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGF0dGFjayBjYW4gaGl0IGEgc2hpcC5cbiAgICogVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFjdHVhbGx5IGhpdCBzaGlwLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGNhbiBoaXQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGNhbkhpdFNoaXAocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYm9hcmQuZmxlZXQuc29tZSgoZmxlZXRTaGlwKSA9PiBmbGVldFNoaXAuY2FuSGl0KHJvdywgY29sdW1uKSk7XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIGhpdCBlYWNoIG9mIHRoZSBzaGlwcyBpbiB0aGUgYm9hcmQuZmxlZXQsXG4gICAqIG9ubHkgaWYgdGhlIHRhcmdldCBwb3NpdGlvbiBoYXMgbmV2ZXIgYmVlbiBhdHRhY2tlZCBiZWZvcmUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpWSBvZiB0YXJnZXQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpWCBvZiB0YXJnZXQuXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogIGlmIGhpdCwgcmV0dXJuIHRoZSBzaGlwJ3MgaWQuXG4gICAqICByZXR1cm4gLTEgaWYgbWlzc2VkLlxuICAgKiAgcmV0dXJuIHVuZGVmaW5lZCwgaWYgYWxyZWFkeSBiZWVuIGF0dGFja2VkIGJlZm9yZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pIHtcbiAgICBjb25zdCB0YXJnZXQgPSBbcm93LCBjb2x1bW5dO1xuICAgIC8vIE11c3QgYmUgdW5kZWZpbmVkLiBJZiByZXR1cm4gZmFsc2UsIHdpbGwgYmUgY29uc2lkZXJlZCBhcyBhIG1pc3MuXG4gICAgaWYgKGFscmVhZHlCZWVuQXR0YWNrZWQoLi4udGFyZ2V0KSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBoaXQgPSB0cnlIaXRTaGlwKHJvdywgY29sdW1uKTtcbiAgICBpZiAoaGl0ICE9PSAtMSkge1xuICAgICAgYm9hcmQuaGl0cy5wdXNoKHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkLm1pc3Nlcy5wdXNoKHRhcmdldCk7XG4gICAgfVxuICAgIHJlbW92ZUZyb21JbnRhY3QoYCR7cm93fS0ke2NvbHVtbn1gKTtcbiAgICByZXR1cm4gaGl0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFsbCBzaGlwcyBhcmUgc3Vuay5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBhbGwgc2hpcHMgYXJlIHN1bmssIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gICAgcmV0dXJuIGJvYXJkLmZsZWV0LmV2ZXJ5KChmbGVldFNoaXApID0+IGZsZWV0U2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYm9hcmQuXG4gICAqL1xuICBmaWxsSW50YWN0KCk7XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBBUElcbiAgICovXG4gIGNvbnN0IGFwaSA9IHtcbiAgICBzaXplLFxuICAgIGludGFjdCxcbiAgICBnZXRTaGlwLFxuICAgIGZsZWV0U2l6ZSxcbiAgICBjbGVhckZsZWV0LFxuICAgIHNoaXBDb29yZGluYXRlcyxcbiAgICBzaGlwU3Vycm91bmRpbmdBcmVhLFxuICAgIGF2YWlsYWJsZSxcbiAgICBwdXRTaGlwLFxuICAgIHJlbW92ZVNoaXAsXG4gICAgdG9nZ2xlRmxlZXRTaGlwLFxuICAgIGFscmVhZHlIaXQsXG4gICAgYWxyZWFkeU1pc3NlZCxcbiAgICBhbHJlYWR5QmVlbkF0dGFja2VkLFxuICAgIGNhbkhpdFNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBUEkgb25seSBmb3IgdW5pdCB0ZXN0LlxuICAgKi9cbiAgaWYgKFVOSVRfVEVTVCkge1xuICAgIGFwaS5ib2FyZCA9IGJvYXJkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5hcGksXG4gIH07XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgUGxheWVyLCB7XG4gIEFJLFxuICBIVU1BTixcbiAgRUFTWSxcbiAgTk9STUFMLFxuICBIQVJELFxufSBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCB7XG4gIEFJLFxuICBIVU1BTixcbiAgRUFTWSxcbiAgTk9STUFMLFxuICBIQVJELFxufTtcblxubGV0IFVOSVRfVEVTVDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcblVOSVRfVEVTVCA9IHRydWU7IC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBvbmNlIGZpbmlzaCB0aGUgdW5pdCB0ZXN0cy5cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3QgREVGQVVMVF9CT0FSRF9TSVpFID0gMTA7IC8vIGRlZmF1bHQgZ2FtZSBib2FyZCBzaXplXG4gIC8vIERlZmF1bHQgZmxlZXQgc2V0dGluZy4gQWNjb3JkaW5nIHRvIDE5OTAncyBCYXR0bGVzaGlwIEdhbWUgb2YgTWlsdG9uIEJyYWRsZXQgQ29tcGFueS5cbiAgY29uc3QgU1RBTkRBUkRfRkxFRVQgPSBbXG4gICAgLy8gW25hbWUsIHNpemVdXG4gICAgWydjYXJyaWVyJywgNV0sXG4gICAgWydiYXR0bGVzaGlwJywgNF0sXG4gICAgWydjcnVpc2VyJywgM10sXG4gICAgWydzdWJtYXJpbmUnLCAzXSxcbiAgICBbJ2Rlc3Ryb3llcicsIDJdLFxuICBdO1xuXG4gIC8qKlxuICAgKiBHYW1lIG1vZHVsZSBwcm90by5cbiAgICogIHBsYXllcnM6IEFycmF5LiBUd28gcGxheWVycy5cbiAgICogIGN1cnJlbnRQbGF5ZXI6IE51bWJlci4gSW5kZXggb2YgY3VycmVudCBwbGF5ZXIgaW4gdGhlIHBsYXllcnMgYXJyYXkuXG4gICAqL1xuICBjb25zdCBnYW1lID0ge307XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgaW50ZWdlciBpbiByYW5nZSBvZiBbMCwgbWF4KS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBNYXggdmFsdWUgKGV4Y2x1c2l2ZSkuXG4gICAqIEByZXR1cm4gR2VuZXJhdGVkIGludGVnZXIuXG4gICAqL1xuICBmdW5jdGlvbiByYW5kb20obWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICAvKipcbiAgICogUGljayB0aGUgcmFuZG9tIHBvc2l0aW9uIFtyb3csIGNvbHVtbl0gaW4gdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge0JvYXJkfSBib2FyZCBUYXJnZXQgYm9hcmQuXG4gICAqIEByZXR1cm4gUmFuZG9tIHBvc2l0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tUG9zaXRpb24oc2l6ZSkge1xuICAgIHJldHVybiBbcmFuZG9tKHNpemUpLCByYW5kb20oc2l6ZSldO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dG9maWxsKHJhbmRvbWx5KSBhIGdhbWUgYm9hcmQgd2l0aCBmbGVldCBzaGlwcy5cbiAgICogQHBhcmFtIHtCb2FyZH0gYm9hcmQgVGFyZ2V0IGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gYXV0b2ZpbGxGbGVldChib2FyZCkge1xuICAgIFNUQU5EQVJEX0ZMRUVULmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICBjb25zdCBzaGlwID0gU2hpcCguLi50ZW1wbGF0ZSk7XG4gICAgICBpZiAocmFuZG9tKDIpID09PSAxKSBzaGlwLnRvZ2dsZURpcmVjdGlvbigpO1xuICAgICAgbGV0IHBvc2l0aW9uID0gcmFuZG9tUG9zaXRpb24oYm9hcmQuc2l6ZSgpKTtcbiAgICAgIHdoaWxlICghYm9hcmQuYXZhaWxhYmxlKC4uLnBvc2l0aW9uLCBzaGlwKSkge1xuICAgICAgICBwb3NpdGlvbiA9IHJhbmRvbVBvc2l0aW9uKGJvYXJkLnNpemUoKSk7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXRTaGlwKC4uLnBvc2l0aW9uLCBzaGlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgYWxsIHBsYXllcnMuXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIHBsYXllcnNcbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggUGxheWVyIG9iamVjdCBieSB0aGVpciBpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIHBsYXllciBpZC5cbiAgICogQHJldHVybiB7UGxheWVyfSBQbGF5ZXIgb2JqZWN0IGlmIGV4aXN0cy5cbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllcihpZCkge1xuICAgIHJldHVybiBnYW1lLnBsYXllcnMuZmluZCgodGhlUGxheWVyKSA9PiB0aGVQbGF5ZXIuaWQoKSA9PT0gaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBjdXJyZW50IHBsYXllciBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtQbGF5ZXJ9IEN1cnJlbnQgcGxheWVyIG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVyc1tnYW1lLmN1cnJlbnRQbGF5ZXJdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdHdvIHBsYXllcnMgd2l0aCByYW5kb21seSBhdXRvZmlsbGVkIGJvYXJkLlxuICAgKiBBSSBwbGF5ZXIncyBkZWZhdWx0IGxldmVsIGlzIEVBU1kuXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBwbGF5ZXIxVHlwZSBIVU1BTiBvciBBSVxuICAgKiBAcGFyYW0ge1N5bWJvbH0gcGxheWVyMlR5cGUgSFVNQU4gb3IgQUlcbiAgICovXG4gIGZ1bmN0aW9uIGluaXRQbGF5ZXJzQW5kQm9hcmRzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSkge1xuICAgIGdhbWUucGxheWVycyA9IFtdO1xuICAgIGNvbnN0IHBsYXllclR5cGVzID0gW3BsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJUeXBlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV3UGxheWVyID0gUGxheWVyKGksIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIHBsYXllclR5cGVzW2ldKTtcbiAgICAgIGF1dG9maWxsRmxlZXQobmV3UGxheWVyLmJvYXJkKCkpO1xuICAgICAgZ2FtZS5wbGF5ZXJzLnB1c2gobmV3UGxheWVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBBSS5cbiAgICogSXQgY2FuIGFsc28gYmUgdXNlZCB0byBjaGFuZ2UgQUkgbGV2ZWwuXG4gICAqIEFJIHBsYXllcidzIGJvYXJkIGlzIGZpbGxlZCBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgZnVuY3Rpb24gYWdhaW5zdEFJKGxldmVsKSB7XG4gICAgZ2FtZS5wbGF5ZXJzWzFdID0gUGxheWVyKDEsIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIEFJLCBsZXZlbCk7XG4gICAgYXV0b2ZpbGxGbGVldChnYW1lLnBsYXllcnNbMV0uYm9hcmQoKSk7XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBIVU1BTi5cbiAgICovXG4gIGZ1bmN0aW9uIGFnYWluc3RIdW1hbigpIHtcbiAgICBnYW1lLnBsYXllcnNbMV0gPSBQbGF5ZXIoMSwgQm9hcmQoREVGQVVMVF9CT0FSRF9TSVpFKSwgSFVNQU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXh0IHBsYXllcidzIGluZGV4LlxuICAgKiBAcmV0dXJucyBpbmRleCBvZiBuZXh0IHBsYXllclxuICAgKi9cbiAgZnVuY3Rpb24gbmV4dEluZGV4KCkge1xuICAgIHJldHVybiAoZ2FtZS5jdXJyZW50UGxheWVyICsgMSkgJSBnYW1lLnBsYXllcnMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGlzIGh1bWFuIHBsYXllciwgZG8gbm90aGluZyh3YWl0IGZvciBodW1hbiB0byBjbGlja1xuICAgKiBvbiB0aGUgYm9hcmQgdG8gdHJpZ2dlciBhbiBhdHRhY2sgZXZlbnQpLlxuICAgKlxuICAgKiBBSSBQbGF5ZXIncyBhdHRhY2sgZnVuY3Rpb24gb25seSBkZWNpZGVzIHdoZXJlIHRvIGF0dGFjayxcbiAgICogYW5kIGNhbGxiYWNrIGNvbnRyb2xsZXIgdG8gZG8gdGhlIHJlc3Qgb2YgdGhlIGpvYi5cbiAgICovXG4gIGZ1bmN0aW9uIG5leHRUdXJuKGNvbnRyb2xsZXJBdHRhY2tDYWxsYmFjaykge1xuICAgIGdhbWUuY3VycmVudFBsYXllciA9IG5leHRJbmRleCgpO1xuICAgIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLnBsYXllcnNbZ2FtZS5jdXJyZW50UGxheWVyXTtcbiAgICBpZiAoIWN1cnJQbGF5ZXIuaXNBSSgpKSByZXR1cm47IC8vIGh1bWFuIHBsYXllciBkbyBub3RoaW5nLlxuICAgIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5wbGF5ZXJzW25leHRJbmRleCgpXTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyUGxheWVyLmF0dGFjayhvcHBvbmVudC5ib2FyZCgpKTsgLy8gQUkgcGxheWVyJ3MgbmV4dCBhdHRhY2sgdGFyZ2V0XG4gICAgaWYgKHRhcmdldCkgeyAvLyBpZiB0aGVyZSdzIG5vIG1vcmUgZ3JpZCB0byBiZSBhdHRhY2tlZCwgdGFyZ2V0IHdpbGwgYmUgdW5kZWZpbmVkLlxuICAgICAgY29udHJvbGxlckF0dGFja0NhbGxiYWNrKC4uLnRhcmdldCwgb3Bwb25lbnQuaWQoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gcGxheWVyIGhhcyBwdXQgYWxsIGhpcyBzaGlwcyBpbnRvIHRoZSBib2FyZC5cbiAgICogQ29udHJvbGxlciBjYWxsIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgdGhlIGdhbWUuXG4gICAqXG4gICAqIEJlZm9yZSBzdGFydCB0aGUgZ2FtZSB0aGlzIGZ1bmN0aW9uIHdpbGwgY2hlY2tcbiAgICogd2hlYXRoZXIgYWxsIHJlcXVpcmVtZW50cyBhYm92ZSBoYXZlIGJlZW4gbWV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiAgdHJ1ZSwgaWYgYWxsIHJlcXVpcmVtZW50cyBoYXZlIGJlZW4gbWV0LCB0aGUgZ2FtZSBpcyBzdGFydGVkLlxuICAgKiAgb3RoZXJ3aXNlLCBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIC8vIGNoZWNrIGNvbmZpZ3VyYXRpb25zXG4gICAgaWYgKGdhbWUucGxheWVycy5zb21lKCh0aGVQbGF5ZXIpID0+IHRoZVBsYXllci5ib2FyZCgpLmZsZWV0U2l6ZSgpXG4gICAgICAgICE9PSBTVEFOREFSRF9GTEVFVC5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFN0YXJ0IGdhbWUuXG4gICAgLy8gU2V0IHRvIHRoZSBsYXN0IHBsYXllci4gbmV4dFR1cm4oKSB3aWxsIG1vdmUgb24uXG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBhcGkgPSB7XG4gICAgREVGQVVMVF9CT0FSRF9TSVpFLFxuICAgIHBsYXllcnMsXG4gICAgcGxheWVyLFxuICAgIGN1cnJlbnRQbGF5ZXIsXG4gICAgYXV0b2ZpbGxGbGVldCxcbiAgICBuZXh0VHVybixcbiAgICBpbml0UGxheWVyc0FuZEJvYXJkcyxcbiAgICBhZ2FpbnN0QUksXG4gICAgYWdhaW5zdEh1bWFuLFxuICAgIHN0YXJ0LFxuICB9O1xuXG4gIGlmIChVTklUX1RFU1QpIHtcbiAgICBhcGkuZ2FtZSA9IGdhbWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmFwaSxcbiAgfTtcbn0pKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZS1wcm9wcyAqL1xuLyoqXG4gKiBUaGVyZSBhcmUgdHdvIGRpZmZlcmVudCB0eXBlcyBvZiBwbGF5ZXI6XG4gKiAgMS4gYWlcbiAqICAyLiBodW1hblxuICovXG5leHBvcnQgY29uc3QgQUkgPSBTeW1ib2woJ2FpJyk7XG5leHBvcnQgY29uc3QgSFVNQU4gPSBTeW1ib2woJ2h1bWFuJyk7XG5cbi8qKlxuICogVGhyZWUgZGlmZmVyZW50IGxldmVsIG9mIEFJLlxuICovXG5leHBvcnQgY29uc3QgRUFTWSA9IFN5bWJvbCgnY2hpbGQnKTtcbmV4cG9ydCBjb25zdCBOT1JNQUwgPSBTeW1ib2woJ25vcm1hbCcpO1xuZXhwb3J0IGNvbnN0IEhBUkQgPSBTeW1ib2woJ2hhcmQnKTtcblxuLyoqXG4gKiBQbGF5ZXIgZmFjdG9yeSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Qm9hcmR9IGluQm9hcmQgUGxheWVyJ3MgZ2FtZSBib2FyZC5cbiAqIEBwYXJhbSB7U3ltYm9sfSBpblR5cGUgSFVNQU4gb3IgQUkuXG4gKiBAcGFyYW0ge1N5bWJvbH0gaW5MZXZlbCBPcHRpb25hbC4gQUkgbGV2ZWwuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbklkLCBpbkJvYXJkLCBpblR5cGUsIGluTGV2ZWwpID0+IHtcbiAgLyoqXG4gICAqIFBsYXllciBwbGFpbiBvYmplY3QuXG4gICAqL1xuICBjb25zdCBwbGF5ZXIgPSB7XG4gICAgaWQ6IGluSWQsXG4gICAgdHlwZTogaW5UeXBlLFxuICAgIGJvYXJkOiBpbkJvYXJkLFxuICB9O1xuXG4gIGlmIChwbGF5ZXIudHlwZSA9PT0gQUkpIHtcbiAgICBwbGF5ZXIubGV2ZWwgPSBpbkxldmVsIHx8IEVBU1k7IC8vIGRlZmF1bHQgaXMgRUFTWVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwbGF5ZXIgaWQuXG4gICAqIEByZXR1cm5zIFBsYXllciBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGlkKCkge1xuICAgIHJldHVybiBwbGF5ZXIuaWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgcGxheWVyIHR5cGUuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaXMgcGxheWVyIGlzIEFJLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNBSSgpIHtcbiAgICByZXR1cm4gcGxheWVyLnR5cGUgPT09IEFJO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIEFJIHBsYXllcidzIGxldmVsLlxuICAgKiBAcmV0dXJucyBBSSBwbGF5ZXIncyBsZXZlbC4gdW5kZWZpbmVkIGlmIGl0J3Mgbm90IEFJIHBsYXllci5cbiAgICovXG4gIGZ1bmN0aW9uIGFpTGV2ZWwoKSB7XG4gICAgaWYgKHBsYXllci50eXBlICE9PSBBSSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcGxheWVyLmxldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93IEdhbWUgbW9kdWxlIHRvIHNldCBBSSBsZXZlbC5cbiAgICogQHBhcmFtIHtTeW1ib2x9IGxldmVsIEVBU1kgb3IgTk9STUFMIG9yIEhBUkRcbiAgICovXG4gIGZ1bmN0aW9uIHNldEFpTGV2ZWwobGV2ZWwpIHtcbiAgICBpZiAocGxheWVyLnR5cGUgIT09IEFJKSByZXR1cm47XG4gICAgcGxheWVyLmxldmVsID0gbGV2ZWw7XG4gIH1cblxuICBmdW5jdGlvbiBib2FyZCgpIHtcbiAgICByZXR1cm4gcGxheWVyLmJvYXJkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJhbmRvbWx5IHBpY2sgYSB0YXJnZXQgZnJvbSBvcHBvbmVudCBib2FyZCdzIGludGFjdCBsaXN0LlxuICAgKiBAcGFyYW0ge0JvYXJkfSBvcHBvbmVudEJvYXJkIE9wcG9lbmVudCdzIGJvYXJkIG9iamVjdC5cbiAgICogQHJldHVybnMgdGhlIHRhcmdldCBjb29yZGluYXRlXG4gICAqL1xuICBmdW5jdGlvbiByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCkge1xuICAgIGlmIChvcHBvbmVudEJvYXJkLmludGFjdCgpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wcG9uZW50Qm9hcmQuaW50YWN0KCkubGVuZ3RoKTtcbiAgICBjb25zdCBzdHIgPSBvcHBvbmVudEJvYXJkLmludGFjdCgpW2luZGV4XTtcbiAgICBjb25zdCBbcm93U3RyLCBjb2x1bW5TdHJdID0gc3RyLnNwbGl0KCctJyk7XG4gICAgcmV0dXJuIFtwYXJzZUludChyb3dTdHIsIDEwKSwgcGFyc2VJbnQoY29sdW1uU3RyLCAxMCldO1xuICB9XG5cbiAgLyoqXG4gICAqIFBpY2sod2l0aCBub3JtYWwgc3RyYXRlZ3kpIGEgdGFyZ2V0IGZyb20gb3Bwb25lbnQgYm9hcmQncyBpbnRhY3QgbGlzdC5cbiAgICogQHBhcmFtIHtCb2FyZH0gb3Bwb25lbnRCb2FyZCBPcHBvZW5lbnQncyBib2FyZCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHRoZSB0YXJnZXQgY29vcmRpbmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsQXR0YWNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBpY2sod2l0aCBhIHNtYXJ0IHN0cmF0ZWd5KSBhIHRhcmdldCBmcm9tIG9wcG9uZW50IGJvYXJkJ3MgaW50YWN0IGxpc3QuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IG9wcG9uZW50Qm9hcmQgT3Bwb2VuZW50J3MgYm9hcmQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB0aGUgdGFyZ2V0IGNvb3JkaW5hdGVcbiAgICovXG4gIGZ1bmN0aW9uIHNtYXJ0QXR0Y2sob3Bwb25lbnRCb2FyZCkge1xuICAgIHJldHVybiByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtCb2FyZH0gYm9hcmQgVGhlIEJvYXJkIG9iamVjdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgTm90aWNlIEdhbWUgbW9kdWxlIHRvIHJ1biBuZXh0IHJvdW5kLlxuICAgKiBAcmV0dXJuXG4gICAqICA9PT4gQUkgcGxheWVyIHJldHVybiB0aGUgY29vcmRpbmF0ZSBvZiB0aGUgdGFyZ2V0IGl0IHdhbnRzIHRvIGF0dGFjay5cbiAgICogID09PiBIdW1hbiBwbGF5ZXIgd2lsbCByZXR1cm4gdW5kZWZpbmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gYXR0YWNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICBpZiAocGxheWVyLnR5cGUgPT09IEFJKSB7XG4gICAgICBzd2l0Y2ggKHBsYXllci5sZXZlbCkge1xuICAgICAgICBjYXNlIEVBU1k6XG4gICAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgY2FzZSBOT1JNQUw6XG4gICAgICAgICAgcmV0dXJuIG5vcm1hbEF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgY2FzZSBIQVJEOlxuICAgICAgICAgIHJldHVybiBzbWFydEF0dGNrKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7IC8vIGh1bWFuIHBsYXllciByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGlzQUksXG4gICAgYWlMZXZlbCxcbiAgICBzZXRBaUxldmVsLFxuICAgIGJvYXJkLFxuICAgIGF0dGFjayxcbiAgfTtcbn07XG4iLCIvKipcbiAqIFNoaXAgaWQgZ2VuZXJhdG9yLlxuICovXG5mdW5jdGlvbiogaW5maW5pdGUoKSB7XG4gIGxldCBpbmRleCA9IDE7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgeWllbGQgaW5kZXg7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxufVxuXG5jb25zdCBHRU4gPSBpbmZpbml0ZSgpO1xuY29uc3QgSE9SSVpPTlRBTCA9IFN5bWJvbCgnaG9yaXpvbnRhbCcpO1xuY29uc3QgVkVSVElDQUwgPSBTeW1ib2woJ3ZlcnRpY2FsJyk7XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0byBpbnN0YW50aWF0ZSBhIFNoaXAgb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgc2hpcC4gRXg6IGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgYW5kIGRlc3Ryb3llci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIEhvdyBtYW55IGdyaWRzIG9uIHRoZSBib2FyZCB0aGUgc2hpcCBvY2N1cGllcy5cbiAqIEByZXR1cm4gQSBzaGlwIG1vZHVsZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbk5hbWUsIGluU2l6ZSkgPT4ge1xuICAvKipcbiAgICogU2hpcCBwbGFpbiBvYmplY3QuXG4gICAqL1xuICBjb25zdCBzaGlwID0ge1xuICAgIGlkOiBHRU4ubmV4dCgpLnZhbHVlLFxuICAgIG5hbWU6IGluTmFtZSxcbiAgICBzaXplOiBpblNpemUsXG4gICAgcm93OiAwLCAvLyBkZWZhdWx0XG4gICAgY29sdW1uOiAwLCAvLyBkZWZhdWx0XG4gICAgZGlyZWN0aW9uOiBIT1JJWk9OVEFMLCAvLyBkZWZhdWx0XG4gICAgaGl0OiAwLCAvLyBIb3cgbWFueSB0aW1lcyB0aGUgc2hpcCBpcyBoaXQuXG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFNoaXAncyBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGlkKCkge1xuICAgIHJldHVybiBzaGlwLmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFNoaXAncyBuYW1lLlxuICAgKi9cbiAgZnVuY3Rpb24gbmFtZSgpIHtcbiAgICByZXR1cm4gc2hpcC5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFNpemUgb2YgdGhlIHNoaXAuXG4gICAqL1xuICBmdW5jdGlvbiBzaXplKCkge1xuICAgIHJldHVybiBzaGlwLnNpemU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUG9zaXRpb24gb2YgdGhlIHNoaXAgaGVhZC5cbiAgICovXG4gIGZ1bmN0aW9uIGhlYWQoKSB7XG4gICAgcmV0dXJuIFtzaGlwLnJvdywgc2hpcC5jb2x1bW5dO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gUG9zaXRpb24gb2YgdGhlIHNoaXAgdGFpbC5cbiAgICovXG4gIGZ1bmN0aW9uIHRhaWwoKSB7XG4gICAgc3dpdGNoIChzaGlwLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSBIT1JJWk9OVEFMOlxuICAgICAgICByZXR1cm4gW3NoaXAucm93LCBzaGlwLmNvbHVtbiArIHNoaXAuc2l6ZSAtIDFdO1xuICAgICAgY2FzZSBWRVJUSUNBTDpcbiAgICAgICAgcmV0dXJuIFtzaGlwLnJvdyArIHNoaXAuc2l6ZSAtIDEsIHNoaXAuY29sdW1uXTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNoaXAuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGRpcmVjdGlvbiBpcyBob3Jpem9udGFsLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBpc0hvcml6b250YWwoKSB7XG4gICAgcmV0dXJuIHNoaXAuZGlyZWN0aW9uID09PSBIT1JJWk9OVEFMO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFJldHVybiBob3cgbWFueSBhdHRhY2tzIHRoZSBzaGlwIGhhcyB0YWtlbi5cbiAgICovXG4gIGZ1bmN0aW9uIGNvdW50SGl0cygpIHtcbiAgICByZXR1cm4gc2hpcC5oaXQ7XG4gIH1cblxuICAvKipcbiAgICogSE9SSVpPTlRBTCAtPiBWRVJUSUNBTFxuICAgKiBWRVJUSUNBTCAtPiBIT1JJWk9OVEFMXG4gICAqIFNoaXAgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCBpZiB0aGUgYm9hcmQgaGFzIGVub3VnaCBzcGFjZS5cbiAgICogQm9hcmQgbW9kdWxlIHdpbGwgY2hlY2sgdGhhdCBmb3IgdXMgYmVmb3JlIGNhbGwgdGhpcyBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZURpcmVjdGlvbigpIHtcbiAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09IEhPUklaT05UQUwpIHtcbiAgICAgIHNoaXAuZGlyZWN0aW9uID0gVkVSVElDQUw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXAuZGlyZWN0aW9uID0gSE9SSVpPTlRBTDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3VyIHNoaXBzIGFyZSBub3QgYXdhcmUgb2YgdGhlIHNpemUgb2YgdGhlIGdhbWUgYm9hcmQuXG4gICAqIEJvYXJkIG1vZHVsZSB3aWxsIGNoZWNrIHRoZSB2YWxpZGF0aW9uIGZvciB1cy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0aGUgaGVhZCBvZiB0aGUgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0aGUgaGVhZCBvZiB0aGUgc2hpcC5cbiAgICovXG4gIGZ1bmN0aW9uIHB1dChyb3csIGNvbHVtbikge1xuICAgIHNoaXAucm93ID0gcm93O1xuICAgIHNoaXAuY29sdW1uID0gY29sdW1uO1xuICB9XG5cbiAgLyoqXG4gICAqIEp1c3QgY2hlY2sgaWYgdGhlcmUncyBhIHNoaXAgc2l0cyBvbiBhIGNlcnRhaW4gZ3JpZC5cbiAgICogVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFjdHVhbGx5IGhpdCB0aGUgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWCBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWSBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBpdCdzIGEgaGl0LCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBjYW5IaXQocm93LCBjb2x1bW4pIHtcbiAgICBzd2l0Y2ggKHNoaXAuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIEhPUklaT05UQUw6XG4gICAgICAgIGlmIChyb3cgIT09IHNoaXAucm93KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChjb2x1bW4gPCBzaGlwLmNvbHVtbiB8fCBjb2x1bW4gPiAoc2hpcC5jb2x1bW4gKyBzaGlwLnNpemUgLSAxKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVkVSVElDQUw6XG4gICAgICAgIGlmIChjb2x1bW4gIT09IHNoaXAuY29sdW1uKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChyb3cgPCBzaGlwLnJvdyB8fCByb3cgPiAoc2hpcC5yb3cgKyBzaGlwLnNpemUgLSAxKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NlcnRpb246IEVhY2ggZ3JpZCBvZiB0aGUgYm9hcmQgY2FuIG9ubHkgYmUgYXR0ZWNrZWQgb25jZS5cbiAgICogVGhlIHNoaXAgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCB3aGVhdGhlciBhIHNpbmdsZSBwYXJ0IGlzIGhpdCB0d2ljZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWCBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWSBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgc2hpcCBpcyBoaXQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGhpdChyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhbkhpdChyb3csIGNvbHVtbik7XG4gICAgaWYgKHJlc3VsdCkgc2hpcC5oaXQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGV2ZXJ5IHBvcnQgdGhlIHNoaXAgaGFzIGJlZW4gaGl0LlxuICAgKiBBcyBhbHdheXMsIHRoZSBzaGlwIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgd2hlYXRoZXIgYSBzaW5nbGUgcGFydCBpcyBoaXQgdHdpY2UuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiAoc2hpcC5oaXQgPj0gc2hpcC5zaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIEFuIGFycmF5IG9mIGNvb3JkaW5hdGVzIG9mIHRoYXQgc2hpcC5cbiAgICovXG4gIGZ1bmN0aW9uIGNvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpICs9IDEpIHtcbiAgICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gSE9SSVpPTlRBTCkge1xuICAgICAgICByZXN1bHQucHVzaChbc2hpcC5yb3csIHNoaXAuY29sdW1uICsgaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW3NoaXAucm93ICsgaSwgc2hpcC5jb2x1bW5dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuXG4gICAqICBpZiBpcyBzdW5rLCByZXR1cm4gYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgb2YgdGhhdCBzaGlwLlxuICAgKiAgb3RoZXJ3aXNlLCByZXR1cm4gdW5kZWZpbmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVwb3J0U3VuaygpIHtcbiAgICBpZiAoIWlzU3VuaykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgc2l6ZSxcbiAgICBuYW1lLFxuICAgIGhlYWQsXG4gICAgdGFpbCxcbiAgICBpc0hvcml6b250YWwsXG4gICAgY291bnRIaXRzLFxuICAgIHRvZ2dsZURpcmVjdGlvbixcbiAgICBwdXQsXG4gICAgY2FuSGl0LFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgY29vcmRpbmF0ZXMsXG4gICAgcmVwb3J0U3VuayxcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgTUFJTiA9IFN5bWJvbCgnbWFpbicpO1xuZXhwb3J0IGNvbnN0IE9QUE9ORU5UID0gU3ltYm9sKCdvcHBvbmVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBFTEVNRU5UUyA9IHtcbiAgICByb290OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpLFxuICAgIG1haW5QbGF5ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIubWFpbicpLFxuICAgIG9wcG9uZW50UGxheWVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLm9wcG9uZW50JyksXG4gICAgcmFuZG9tOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tJyksXG4gICAgc3RhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzaW5nbGUgZ3JpZCBpbiBib2FyZCBhY2NvcmRpbmcgdG8gaXQncyBjb29yZGluYXRlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEdyaWQgYXhpIFkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gR3JpZCBheGkgWC5cbiAgICogQHJldHVybnMgR3JpZCBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlR3JpZChyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICBncmlkLmRhdGFzZXQucm93ID0gcm93O1xuICAgIGdyaWQuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW47XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgc2VhIGxheWVyIG9mIGdhbWUgYm9hcmQuXG4gICAqIEVhY2ggZ3JpZCBpcyBhbm5vdGF0ZWQgd2l0aCB0aGUgcGxheWVyJ3MgaWQgdG8gd2hvbVxuICAgKiB0aGlzIGJvYXJkIGJlbG9uZ3MuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIEJvYXJkIHNpemUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBJZCBvZiBvd25lciBvZiB0aGF0IGJvYXJkLlxuICAgKiBAcmV0dXJucyBTZWEgbGF5ZXIgZGl2IGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBkcmF3U2VhTGF5ZXIoc2l6ZSwgcGxheWVySWQpIHtcbiAgICBjb25zdCBzZWFMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlYUxheWVyLmNsYXNzTGlzdC5hZGQoJ3NlYUxheWVyJyk7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHNpemU7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVHcmlkKHJvdywgY29sdW1uKTtcbiAgICAgICAgZ3JpZC5kYXRhc2V0LnBsYXllcklkID0gcGxheWVySWQ7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgaWYgKHJvdyA9PT0gMCkgZ3JpZC5jbGFzc0xpc3QuYWRkKCd1cHBlckJvcmRlcicpO1xuICAgICAgICBpZiAoY29sdW1uID09PSAwKSBncmlkLmNsYXNzTGlzdC5hZGQoJ2xlZnRCb3JkZXInKTtcbiAgICAgICAgc2VhTGF5ZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWFMYXllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBzaGlwIGxheWVyIG9mIGdhbWUgYm9hcmQuXG4gICAqIFNoaXAgcG9zaXRpb24gc2hvdWxkIGJlIGhpZ2hsaWdodGVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBCb2FyZCBzaXplLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGVja1NoaXBDYWxsYmFjayBCb2FyZC5jYW5IaXRTaGlwKCkgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIFNoaXAgbGF5ZXIgZGl2IGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBkcmF3U2hpcExheWVyKHNpemUsIGNoZWNrU2hpcENhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2hpcExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcExheWVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBMYXllcicpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBzaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBjb25zdCBncmlkID0gY3JlYXRlR3JpZChyb3csIGNvbHVtbik7XG4gICAgICAgIGlmIChyb3cgPT09IDApIGdyaWQuY2xhc3NMaXN0LmFkZCgndXBwZXJCb3JkZXInKTtcbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gMCkgZ3JpZC5jbGFzc0xpc3QuYWRkKCdsZWZ0Qm9yZGVyJyk7XG4gICAgICAgIGlmIChjaGVja1NoaXBDYWxsYmFjayhyb3csIGNvbHVtbikpIGdyaWQuY2xhc3NMaXN0LmFkZCgnaGFzU2hpcCcpO1xuICAgICAgICBzaGlwTGF5ZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaGlwTGF5ZXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBNQUlOIG9yIE9QUE9ORU5UIGJvYXJkIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBtYWluT3JPcHBvbmVudCBNQUlOIG9yIE9QUE9ORU5UXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9IFRoZSBET00gZWxlbWVudCByZXByZXNlbnQgdGhlIGRlc2lyZWQgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRNYWluT3JPcHBvbmVudEJvYXJkKG1haW5Pck9wcG9uZW50KSB7XG4gICAgcmV0dXJuIChtYWluT3JPcHBvbmVudCA9PT0gTUFJTilcbiAgICAgID8gRUxFTUVOVFMubWFpblBsYXllci5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKVxuICAgICAgOiBFTEVNRU5UUy5vcHBvbmVudFBsYXllci5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggdGhlIGJvYXJkIGVsZW1lbnQgYnkgcGxheWVyIGlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgSWQgb2YgZGVzaXJlZCBwbGF5ZXIuXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9IERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgZGVzaXJlZCBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFBsYXllckVsZW1lbnRCeUlkKHBsYXllcklkKSB7XG4gICAgaWYgKHBhcnNlSW50KEVMRU1FTlRTLm1haW5QbGF5ZXIuZGF0YXNldC5wbGF5ZXJJZCwgMTApXG4gICAgICA9PT0gcGxheWVySWQpIHJldHVybiBFTEVNRU5UUy5tYWluUGxheWVyO1xuICAgIHJldHVybiBFTEVNRU5UUy5vcHBvbmVudFBsYXllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGEgcGxheWVyJ3MgYm9hcmQgaW4gTUFJTiBib2FyZCBzZWN0aW9uIG9yIE9QUE9ORU5UIGJvYXJkIHNlY3Rpb24uXG4gICAqIEV4OiBJbiBwbGF5ZXIgMSdzIHBhZ2UsXG4gICAqICA9PiBoaXMgb3duIGJvYXJkIGlzIHNob3duIGluIE1BSU4gc2VjdGlvbi5cbiAgICogID0+IHBsYXllciAyJ3MgYm9hcmQgaXMgc2hvd24gaW4gT1BQT05FTlQgc2VjdGlvbi5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgU2l6ZSBvZiB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBEZW5vdGUgd2hpY2ggYm9hcmQgdG8gZHJhdy5cbiAgICogQHBhcmFtIHtTeW1ib2x9IG1haW5Pck9wcG9uZW50IE1BSU4gb3IgT1BQT05FTlRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2hlY2tTaGlwQ2FsbGJhY2sgQm9hcmQuY2FuSGl0U2hpcCgpIGZ1bmN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZHJhd0JvYXJkKFxuICAgIHNpemUsXG4gICAgcGxheWVySWQsXG4gICAgbWFpbk9yT3Bwb25lbnQsXG4gICAgY2hlY2tTaGlwQ2FsbGJhY2ssXG4gICkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldE1haW5Pck9wcG9uZW50Qm9hcmQobWFpbk9yT3Bwb25lbnQpO1xuICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucGxheWVySWQgPSBwbGF5ZXJJZDtcbiAgICBjb25zdCBzZWFMYXllciA9IGRyYXdTZWFMYXllcihzaXplLCBwbGF5ZXJJZCk7XG4gICAgY29uc3Qgc2hpcExheWVyID0gZHJhd1NoaXBMYXllcihzaXplLCBjaGVja1NoaXBDYWxsYmFjayk7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHNlYUxheWVyKTtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc2hpcExheWVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgbWFpbiBib2FyZCBvciB0aGUgb3Bwb25lbnQncyBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGNsZWFyQm9hcmQobWFpbk9yT3Bwb25lbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRNYWluT3JPcHBvbmVudEJvYXJkKG1haW5Pck9wcG9uZW50KTtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckFsbEJvYXJkcygpIHtcbiAgICBjbGVhckJvYXJkKE1BSU4pO1xuICAgIGNsZWFyQm9hcmQoT1BQT05FTlQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIHNwZWNpZmljIGdyaWQgY29sb3IgYWNjb3JkaW5nIHRvIHRoZSBhdHRhY2sgcmVzdWx0LlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IFRhcmdldCBncmlkIEF4aSBZLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIFRhcmdldCBncmlkIEF4aSBYLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgUGxheWVyIGlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gYXR0YWNrUmVzdWx0XG4gICAqICAxLiBpZiBhdHRhY2sgaGl0IGEgc2hpcCwgaXQncyB0aGUgc2hpcCdzIGlkLlxuICAgKiAgMi4gaWYgYXR0YWNrIG1pc3NlZCwgaXQncyAtMS5cbiAgICogIDMuIGlmIHRoZSB0YXJnZXQgc3BvdCBhbHJlYXkgYmVlbiBhdHRhY2tlZCBiZWZvcmUsIGl0J3MgdW5kZWZpbmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyU2VhQWZ0ZXJBdHRhY2socm93LCBjb2x1bW4sIHBsYXllcklkLCBhdHRhY2tSZXN1bHQpIHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gZ2V0UGxheWVyRWxlbWVudEJ5SWQocGxheWVySWQpO1xuICAgIGNvbnN0IHNlYUxheWVyID0gcGxheWVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQgPiAuc2VhTGF5ZXInKTtcbiAgICBjb25zdCBncmlkID0gc2VhTGF5ZXIucXVlcnlTZWxlY3RvcihgLmdyaWRbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2x1bW49XCIke2NvbHVtbn1cIl1gKTtcbiAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSB1bmRlZmluZWQpIHJldHVybjsgLy8gbm8gbW9yZSBncmlkIHRvIGF0dGFja1xuICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IC0xKSB7IC8vIG1pc3NlZFxuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdhbHJlYWR5TWlzc2VkJyk7XG4gICAgfSBlbHNlIHsgLy8gaXQncyBhIGhpdFxuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdhbHJlYWR5SGl0Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGFycmF5IG9mIGNvb3JkaW5hdGVzIG9mIHRoZSBzaGlwIGJvZHksIG1hcmsgdGhhdCBzaGlwIG9uIHRoZSBTZWEgTGF5ZXIuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwbGF5ZXJJZCBQbGF5ZXIgaWQuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHN1bmtDb29yZGluYXRlcyBDb29yZGluYXRlcyBvZiB0aGUgc3VuayBzaGlwIChzdW5rIGJ5IHRoaXMgYXR0YWNrKS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlclN1bmtTaGlwcyhwbGF5ZXJJZCwgc3Vua0Nvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgcGxheWVyRWxlbWVudCA9IGdldFBsYXllckVsZW1lbnRCeUlkKHBsYXllcklkKTtcbiAgICBjb25zdCBzZWFMYXllciA9IHBsYXllckVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkID4gLnNlYUxheWVyJyk7XG4gICAgc3Vua0Nvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IGdyaWQgPSBzZWFMYXllci5xdWVyeVNlbGVjdG9yKGAuZ3JpZFtkYXRhLXJvdz1cIiR7Y29vcmRpbmF0ZVswXX1cIl1bZGF0YS1jb2x1bW49XCIke2Nvb3JkaW5hdGVbMV19XCJdYCk7XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50IGxpc3RlbmVyIHRvIGEgcGxheWVyJ3MgYm9hcmQsIHNvIHRoYXRcbiAgICogd2hlbiBvcHBvbmVudCBjbGljayBvbiBib2FyZCB3aWxsIGNhbGxiYWNrIGNvbnRyb2xsZXIncyBwbGF5ZXJBdHRhY2soKSBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBwbGF5ZXJFbGVtZW50IG1haW5QbGF5ZXIgb3Igb3Bwb25lbnRQbGF5ZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ29udHJvbGxlci5wbGF5ZXJBdHRhY2soKSBmdW5jdGlvbixcbiAgICogVGhlIGFjdHVhbCBhdHRhY2sgbG9naWMgcmVzaWRlcyBpbiBjb250cm9sbGVyLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZFJlY2VpdmVBdHRhY2tUb1BsYXllcnNCb2FyZChwbGF5ZXJFbGVtZW50LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlYUxheWVyID0gcGxheWVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQgPiAuc2VhTGF5ZXInKTtcbiAgICBjb25zdCBncmlkcyA9IHNlYUxheWVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJyk7XG4gICAgZ3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT4ge1xuICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbGxiYWNrKFxuICAgICAgICBwYXJzZUludChncmlkLmRhdGFzZXQucm93LCAxMCksXG4gICAgICAgIHBhcnNlSW50KGdyaWQuZGF0YXNldC5jb2x1bW4sIDEwKSxcbiAgICAgICAgcGFyc2VJbnQocGxheWVyRWxlbWVudC5kYXRhc2V0LnBsYXllcklkLCAxMCksXG4gICAgICApKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHJlY2VpdmUgYXR0YWNrIGZlYXR1cmUgdG8gYm90aCBNQUlOIGFuZCBPUFBPTkVOVCBib2FyZCBvbiB0aGUgcGFnZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ29udHJvbGxlci5wbGF5ZXJBdHRhY2soKSBmdW5jdGlvbixcbiAgICogVGhlIGFjdHVhbCBhdHRhY2sgbG9naWMgcmVzaWRlcyBpbiBjb250cm9sbGVyLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZFJlY2VpdmVBdHRhY2soY2FsbGJhY2spIHtcbiAgICBiaW5kUmVjZWl2ZUF0dGFja1RvUGxheWVyc0JvYXJkKEVMRU1FTlRTLm1haW5QbGF5ZXIsIGNhbGxiYWNrKTtcbiAgICBiaW5kUmVjZWl2ZUF0dGFja1RvUGxheWVyc0JvYXJkKEVMRU1FTlRTLm9wcG9uZW50UGxheWVyLCBjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCByYW5kb20gZmxlZXQgZmVhdHVyZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ29udHJvbGxlciB3aWxsIHByb3ZpZGUgdGhlIGxvZ2ljIG9mXG4gICAqIGFjdHVhbGx5IGdlbmVyYXRpbmcgYSBuZXcgZmxlZXQgYW5kIHJlLWRyYXcgdGhlIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZFJhbmRvbUZsZWV0KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGxheWVySWQgPSBwYXJzZUludChFTEVNRU5UUy5tYWluUGxheWVyLmRhdGFzZXQucGxheWVySWQsIDEwKTtcbiAgICBFTEVNRU5UUy5yYW5kb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYWxsYmFjayhNQUlOLCBwbGF5ZXJJZCkpOyAvLyBtYWluIHBsYXllciByYW5kb20gaGlzIGZsZWV0LlxuICB9XG5cbiAgLyoqXG4gICAgKiBMb2NrIG9wcG9uZW50J3MgYm9hcmQsIHByZXZlbnQgcGxheWVyIGZyb20gaW50ZXJhY3Qgd2l0aCB0aGUgYm9hcmRcbiAgICAqIGJlZm9yZSBzdGFydGluZyB0aGUgZ2FtZS5cbiAgICAqL1xuICBmdW5jdGlvbiBsb2NrT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBFTEVNRU5UUy5vcHBvbmVudFBsYXllci5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gIH1cblxuICAvKipcbiAgICAqIE9uY2UgdGhlIGdhbWUgaXMgcHJlcGFyZWQsIHVubG9jayBvcHBvbmVudCdzIGJvYXJkcywgc28gdGhhdCBwbGF5ZXIgZ2FpblxuICAgICogdGhlIGFjY2VzcyB0byB0aGUgYm9hcmQuXG4gICAgKi9cbiAgZnVuY3Rpb24gdW5sb2NrT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBFTEVNRU5UUy5vcHBvbmVudFBsYXllci5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gIH1cblxuICAvLyBwcmV2ZW50IGN1cnJlbnQgcGxheWVyJ3MgYm9hcmQgdG8gYmUgYXR0YWNrZWQuXG5cbiAgcmV0dXJuIHtcbiAgICBkcmF3Qm9hcmQsXG4gICAgY2xlYXJCb2FyZCxcbiAgICBjbGVhckFsbEJvYXJkcyxcbiAgICByZW5kZXJTZWFBZnRlckF0dGFjayxcbiAgICByZW5kZXJTdW5rU2hpcHMsXG4gICAgYmluZFJlY2VpdmVBdHRhY2ssXG4gICAgYmluZFJhbmRvbUZsZWV0LFxuICAgIGxvY2tPcHBvbmVudEJvYXJkLFxuICAgIHVubG9ja09wcG9uZW50Qm9hcmQsXG4gIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgQ29udHJvbGxlciwge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbiAgTUFJTixcbiAgT1BQT05FTlQsXG59IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy9pbmRleC5jc3MnO1xuXG5Db250cm9sbGVyLmNsZWFyQWxsQm9hcmRzKCk7XG5Db250cm9sbGVyLmluaXRQbGF5ZXJzQW5kQm9hcmRzKEhVTUFOLCBBSSk7XG5Db250cm9sbGVyLmRyYXdCb2FyZHNGb3JQbGF5ZXIoMCk7IC8vIGluIGh1bWFuIHBsYXllcidzIHBlcnNwZWN0aXZlXG5Db250cm9sbGVyLmxvY2tPcHBvbmVudEJvYXJkKCk7XG5Db250cm9sbGVyLmVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjaygpO1xuQ29udHJvbGxlci5lbmFibGVSYW5kb21GbGVldCgpO1xuLy8gQ29udHJvbGxlci5zdGFydEdhbWUoKTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiQUkiLCJIVU1BTiIsIkVBU1kiLCJOT1JNQUwiLCJIQVJEIiwiVmlldyIsIk1BSU4iLCJPUFBPTkVOVCIsImluaXRQbGF5ZXJzQW5kQm9hcmRzIiwicGxheWVyMVR5cGUiLCJwbGF5ZXIyVHlwZSIsImRyYXdBU2luZ2xlQm9hcmQiLCJwbGF5ZXIiLCJtYWluT3JPcHBvbmVudCIsImRyYXdCb2FyZCIsIkRFRkFVTFRfQk9BUkRfU0laRSIsImlkIiwiYm9hcmQiLCJjYW5IaXRTaGlwIiwiZHJhd0JvYXJkc0ZvclBsYXllciIsInBsYXllcklkIiwib3Bwb25lbnRJZCIsInBsYXllcnMiLCJsZW5ndGgiLCJjbGVhckFsbEJvYXJkcyIsImdhbWVvdmVyIiwid2lubmVySWQiLCJhbGVydCIsInBsYXllckF0dGFja09uZVNwb3QiLCJyb3ciLCJjb2x1bW4iLCJzdXJyb3VuZGluZ3MiLCJhbHJlYWR5QmVlbkF0dGFja2VkIiwidW5kZWZpbmVkIiwic2hpcElkIiwicmVjZWl2ZUF0dGFjayIsInJlbmRlclNlYUFmdGVyQXR0YWNrIiwiZ2V0U2hpcCIsImlzU3VuayIsInJlbmRlclN1bmtTaGlwcyIsImNvb3JkaW5hdGVzIiwic2hpcFN1cnJvdW5kaW5nQXJlYSIsInBsYXllckF0dGFjayIsImZvckVhY2giLCJjb29yZGluYXRlIiwiYWxsU3VuayIsImN1cnJlbnRQbGF5ZXIiLCJuZXh0VHVybiIsImVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjayIsImJpbmRSZWNlaXZlQXR0YWNrIiwicmFuZG9tQWdhaW4iLCJjbGVhckZsZWV0IiwiYXV0b2ZpbGxGbGVldCIsImNsZWFyQm9hcmQiLCJlbmFibGVSYW5kb21GbGVldCIsImJpbmRSYW5kb21GbGVldCIsImxvY2tPcHBvbmVudEJvYXJkIiwidW5sb2NrT3Bwb25lbnRCb2FyZCIsImluaXRHYW1lIiwic3RhcnRHYW1lIiwic3RhcnQiLCJVTklUX1RFU1QiLCJpblNpemUiLCJzaXplIiwiZmxlZXQiLCJoaXRzIiwibWlzc2VzIiwiaW50YWN0IiwiZmluZCIsInNoaXAiLCJmbGVldFNpemUiLCJzaGlwQ29vcmRpbmF0ZXMiLCJyZWR1Y2UiLCJhcnIiLCJmbGVldFNoaXAiLCJwdXNoIiwibGVnYWwiLCJudW0iLCJyZXN1bHQiLCJoZWFkIiwidWxSb3ciLCJ1bENvbCIsInRhaWwiLCJiclJvdyIsImJyQ29sIiwiYmxSb3ciLCJibENvbCIsInVyUm93IiwidXJDb2wiLCJpc0hvcml6b250YWwiLCJpIiwiZmlsbEludGFjdCIsInJlbW92ZUZyb21JbnRhY3QiLCJwb3NpdGlvblN0ciIsImluZGV4IiwiZmluZEluZGV4IiwicG9zaXRpb24iLCJzcGxpY2UiLCJpc092ZXJsYXAiLCJmaXhlZFNoaXAiLCJuZXdIZWFkIiwibmV3VGFpbCIsImhlYWRSb3ciLCJoZWFkQ29sdW1uIiwidGFpbFJvdyIsInRhaWxDb2x1bW4iLCJvdmVybGFwUm93U3RhcnQiLCJNYXRoIiwibWF4Iiwib3ZlcmxhcENvbHVtblN0YXJ0Iiwib3ZlcmxhcFJvd0VuZCIsIm1pbiIsIm92ZXJsYXBDb2x1bW5FbmQiLCJhdmFpbGFibGUiLCJzb21lIiwicHV0U2hpcCIsInB1dCIsInJlbW92ZVNoaXAiLCJ0b2dnbGVGbGVldFNoaXAiLCJ0b2dnbGVEaXJlY3Rpb24iLCJwb3NpdGlvbkVxdWFsIiwicG9zaXRpb25BIiwicG9zaXRpb25CIiwiYWxyZWFkeUhpdCIsImhpdCIsImFscmVhZHlNaXNzZWQiLCJtaXNzIiwidHJ5SGl0U2hpcCIsImNhbkhpdCIsInRhcmdldCIsImV2ZXJ5IiwiYXBpIiwiU2hpcCIsIkJvYXJkIiwiUGxheWVyIiwiU1RBTkRBUkRfRkxFRVQiLCJnYW1lIiwicmFuZG9tIiwiZmxvb3IiLCJyYW5kb21Qb3NpdGlvbiIsInRlbXBsYXRlIiwidGhlUGxheWVyIiwicGxheWVyVHlwZXMiLCJuZXdQbGF5ZXIiLCJhZ2FpbnN0QUkiLCJsZXZlbCIsImFnYWluc3RIdW1hbiIsIm5leHRJbmRleCIsImNvbnRyb2xsZXJBdHRhY2tDYWxsYmFjayIsImN1cnJQbGF5ZXIiLCJpc0FJIiwib3Bwb25lbnQiLCJhdHRhY2siLCJTeW1ib2wiLCJpbklkIiwiaW5Cb2FyZCIsImluVHlwZSIsImluTGV2ZWwiLCJ0eXBlIiwiYWlMZXZlbCIsInNldEFpTGV2ZWwiLCJyYW5kb21BdHRhY2siLCJvcHBvbmVudEJvYXJkIiwic3RyIiwic3BsaXQiLCJyb3dTdHIiLCJjb2x1bW5TdHIiLCJwYXJzZUludCIsIm5vcm1hbEF0dGFjayIsInNtYXJ0QXR0Y2siLCJpbmZpbml0ZSIsIkdFTiIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsImluTmFtZSIsIm5leHQiLCJ2YWx1ZSIsIm5hbWUiLCJkaXJlY3Rpb24iLCJjb3VudEhpdHMiLCJyZXBvcnRTdW5rIiwiRUxFTUVOVFMiLCJyb290IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFpblBsYXllciIsIm9wcG9uZW50UGxheWVyIiwiY3JlYXRlR3JpZCIsImdyaWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImRyYXdTZWFMYXllciIsInNlYUxheWVyIiwiYXBwZW5kQ2hpbGQiLCJkcmF3U2hpcExheWVyIiwiY2hlY2tTaGlwQ2FsbGJhY2siLCJzaGlwTGF5ZXIiLCJnZXRNYWluT3JPcHBvbmVudEJvYXJkIiwiZ2V0UGxheWVyRWxlbWVudEJ5SWQiLCJwYXJlbnRFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXR0YWNrUmVzdWx0IiwicGxheWVyRWxlbWVudCIsInN1bmtDb29yZGluYXRlcyIsImJpbmRSZWNlaXZlQXR0YWNrVG9QbGF5ZXJzQm9hcmQiLCJjYWxsYmFjayIsImdyaWRzIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJDb250cm9sbGVyIiwiY3NzIl0sInNvdXJjZVJvb3QiOiIifQ==