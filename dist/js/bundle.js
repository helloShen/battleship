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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --blue: blue;\n  --orange: orange;\n  --red: red;\n  --board-border: var(--black);\n  --hit: var(--orange);\n  --missed: var(--gray);\n  --sunk: var(--red);\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.board > .seaLayer,\n.board > .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  opacity: .5;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.board > .shipLayer.show {\n  z-index: 1;\n}\n\n.board > .shipLayer.hide {\n  z-index: -1;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board .grid.hasShip {\n  background-color: var(--blue);\n}\n\n.board .grid.alreadyHit {\n  background-color: var(--hit);\n}\n\n.board .grid.alreadyMissed {\n  background-color: var(--missed);\n}\n\n.board .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;;EAEjB,UAAU;EACV,cAAc;EACd,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,4BAA4B;EAC5B,oBAAoB;EACpB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,kEAAkE;EAClE,+DAA+D;AACjE;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,4CAA4C;EAC5C,2CAA2C;AAC7C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":["@import './norm.css';\n\n:root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --blue: blue;\n  --orange: orange;\n  --red: red;\n  --board-border: var(--black);\n  --hit: var(--orange);\n  --missed: var(--gray);\n  --sunk: var(--red);\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.board > .seaLayer,\n.board > .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  opacity: .5;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.board > .shipLayer.show {\n  z-index: 1;\n}\n\n.board > .shipLayer.hide {\n  z-index: -1;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board .grid.hasShip {\n  background-color: var(--blue);\n}\n\n.board .grid.alreadyHit {\n  background-color: var(--hit);\n}\n\n.board .grid.alreadyMissed {\n  background-color: var(--missed);\n}\n\n.board .grid.alreadyHit.sunk {\n  background-color: var(--sunk);\n}"],"sourceRoot":""}]);
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
/* harmony export */   "AI": () => (/* reexport safe */ _models_game__WEBPACK_IMPORTED_MODULE_0__.AI),
/* harmony export */   "EASY": () => (/* reexport safe */ _models_game__WEBPACK_IMPORTED_MODULE_0__.EASY),
/* harmony export */   "HARD": () => (/* reexport safe */ _models_game__WEBPACK_IMPORTED_MODULE_0__.HARD),
/* harmony export */   "HUMAN": () => (/* reexport safe */ _models_game__WEBPACK_IMPORTED_MODULE_0__.HUMAN),
/* harmony export */   "NORMAL": () => (/* reexport safe */ _models_game__WEBPACK_IMPORTED_MODULE_0__.NORMAL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/game */ "./src/js/models/game.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/js/view.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  /**
   * Initialize 2 players with randomly autofilled board
   * before starting to draw the board.
   */
  function initPlayersAndBoards(player1Type, player2Type) {
    _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].initPlayersAndBoards(player1Type, player2Type);
  }
  /**
   * Call View module to draw the board of a certain player.
   */


  function drawASingleBoard(player) {
    var playerType = player.isAI() ? 'ai' : 'human';
    var board = player.board();
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].drawBoard(_models_game__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_BOARD_SIZE, player.id(), playerType, board.canHitShip, board.alreadyHit, board.alreadyMissed);
  }
  /**
   * Draw board for each player.
   */


  function drawBoards() {
    _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].players().forEach(function (player) {
      drawASingleBoard(player);
    });
  }
  /**
   * Gameover logic.
   */


  function gameover(loserId) {
    // eslint-disable-next-line no-alert
    alert("".concat(loserId, " lose!"));
  }
  /**
   * Actual attack logic.
   * When human player click on the board, View module will call this function.
   * When AI player decide the target position of next attack, it will also
   * callback this function.
   * @param {Number} row Axi Y of target gird.
   * @param {Number} column Axi X of target grid.
   * @param {Number} opponentId Id of opponent player.
   * @param {Function} renderSeaCallback Render the grid color according
   * to the attack result(hit or miss).
   */


  function playerAttack(row, column, opponentId) {
    var board = _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].player(opponentId).board();
    if (board.alreadyBeenAttacked(row, column)) return;
    var result = board.receiveAttack(row, column);
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].renderSeaAfterAttack(row, column, opponentId, result);
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].renderSunkShips(opponentId, board.reportSunk());
    if (board.allSunk()) gameover(opponentId);
    _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].nextTurn(playerAttack); // pass itself to the Game module as a callback.
  }
  /**
   * Pass the attack logic to the View module as a callback.
   */


  function enableBoardReceiveAttack() {
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].bindReceiveAttack(playerAttack);
  }

  function startGame() {
    _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].start();
    _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].nextTurn(playerAttack); // pass itself to the Game module as a callback.
  }

  return {
    initPlayersAndBoards: initPlayersAndBoards,
    drawASingleBoard: drawASingleBoard,
    drawBoards: drawBoards,
    enableBoardReceiveAttack: enableBoardReceiveAttack,
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
   * Allow other modules to check size of current fleet.
   */


  function fleetSize() {
    return board.fleet.length;
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
   * @param {String} str Position string.
   */


  function removeFromIntact(str) {
    var index = board.intact.findIndex(function (position) {
      return position === str;
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
   * @returns true if can hit, otherwise false.
   */


  function tryHitShip(row, column) {
    return board.fleet.some(function (fleetShip) {
      return fleetShip.hit(row, column);
    });
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
   * @return {Boolean}
   *  true, if hit.
   *  false, if missed.
   *  undefined, if already been attacked before.
   */


  function receiveAttack(row, column) {
    var target = [row, column]; // Must be undefined. If return false, will be considered as a miss.

    if (alreadyBeenAttacked.apply(void 0, target)) return undefined;
    var hit = tryHitShip(row, column);

    if (hit) {
      board.hits.push(target);
    } else {
      board.misses.push(target);
    }

    removeFromIntact("".concat(row, "-").concat(column));
    return hit;
  }
  /**
   * Report all coordinates of sunk ships.
   * @return {Array} An array of the coordinates of all sunk ships.
   */


  function reportSunk() {
    return board.fleet.reduce(function (arr, fleetShip) {
      if (fleetShip.isSunk()) arr.push(fleetShip.coordinates());
      return arr;
    }, []);
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
    fleetSize: fleetSize,
    available: available,
    putShip: putShip,
    removeShip: removeShip,
    toggleFleetShip: toggleFleetShip,
    alreadyHit: alreadyHit,
    alreadyMissed: alreadyMissed,
    alreadyBeenAttacked: alreadyBeenAttacked,
    canHitShip: canHitShip,
    receiveAttack: receiveAttack,
    reportSunk: reportSunk,
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
   */


  function player(id) {
    return game.players.find(function (thePlayer) {
      return thePlayer.id() === id;
    });
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import Player from "./models/player";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var ELEMENTS = {
    root: document.querySelector(':root'),
    players: [document.querySelector('.player[data-id="0"]'), document.querySelector('.player[data-id="1"]')]
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
   * Hit area and missed area should be marked.
   * @param {Number} size Board size.
   * @param {Function} checkHitHistoryCallback Board.alreadyHit() function.
   * @param {Function} checkMissHistoryCallback Board.alreadyMissed() function.
   * @returns Sea layer div element.
   */


  function drawSeaLayer(size, checkHitHistoryCallback, checkMissHistoryCallback) {
    var seaLayer = document.createElement('div');
    seaLayer.classList.add('seaLayer');

    for (var row = 0; row < size; row += 1) {
      for (var column = 0; column < size; column += 1) {
        var seaGrid = createGrid(row, column);
        if (row === 0) seaGrid.classList.add('upperBorder');
        if (column === 0) seaGrid.classList.add('leftBorder');

        if (checkHitHistoryCallback(row, column)) {
          seaGrid.classList.add('alreadyHit');
        } else if (checkMissHistoryCallback(row, column)) {
          seaGrid.classList.add('alreadyMissed');
        }

        seaLayer.appendChild(seaGrid);
      }
    }

    return seaLayer;
  }
  /**
   * Draw the ship layer of game board.
   * Ship position should be highlighted.
   * @param {Number} size Board size.
   * @param {String} playerType "ai" or "human".
   * @param {Function} checkShipCallback Board.canHitShip() function.
   * @returns Ship layer div element.
   */


  function drawShipLayer(size, playerType, checkShipCallback) {
    var shipLayer = document.createElement('div');
    shipLayer.classList.add('shipLayer');

    for (var row = 0; row < size; row += 1) {
      for (var column = 0; column < size; column += 1) {
        var shipGrid = createGrid(row, column);
        if (row === 0) shipGrid.classList.add('upperBorder');
        if (column === 0) shipGrid.classList.add('leftBorder');
        if (checkShipCallback(row, column)) shipGrid.classList.add('hasShip');
        shipLayer.appendChild(shipGrid);
      }
    }

    switch (playerType) {
      case 'ai':
        shipLayer.classList.add('hide');
        break;

      case 'human':
        shipLayer.classList.add('show');
        break;

      default:
        break;
    }

    return shipLayer;
  }
  /**
   * Draw board of specific player.
   * @param {Number} size Size of the board.
   * @param {Number} playerId Denote which board to draw.
   * @param {String} playerType "human" or "ai".
   * @param {Function} checkShipCallback Board.canHitShip() function.
   * @param {Function} checkHitHistoryCallback Board.alreadyHit() function.
   * @param {Function} checkMissHistoryCallback Board.alreadyMissed() function.
   */


  function drawBoard(size, playerId, playerType, checkShipCallback, checkHitHistoryCallback, checkMissHistoryCallback) {
    var target = ELEMENTS.players[playerId].querySelector('.board');
    var seaLayer = drawSeaLayer(size, checkHitHistoryCallback, checkMissHistoryCallback);
    var shipLayer = drawShipLayer(size, playerType, checkShipCallback);
    target.appendChild(seaLayer);
    target.appendChild(shipLayer);
  }
  /**
   * Render a specific grid color according to the attack result.
   * @param {Number} row Target grid Axi Y.
   * @param {Number} column Target grid Axi X.
   * @param {Number} playerId Player id.
   * @param {Boolean} attackResult true if hit, false if missed.
   */


  function renderSeaAfterAttack(row, column, playerId, attackResult) {
    var playerElement = ELEMENTS.players[playerId];
    var boardElement = playerElement.querySelector('.board > .seaLayer');
    var grid = boardElement.querySelector(".grid[data-row=\"".concat(row, "\"][data-column=\"").concat(column, "\"]"));
    if (attackResult === undefined) return; // no more grid to attack.

    if (attackResult) {
      // hit
      grid.classList.add('alreadyHit');
    } else {
      // miss
      grid.classList.add('alreadyMissed');
    }
  }
  /**
   * Mark all sunk ships of that player on Sea Layer.
   * @param {Number} playerId Player id.
   * @param {Array} sunkCoordinates coordinates of all sunk ships.
   */


  function renderSunkShips(playerId, sunkCoordinates) {
    var playerElement = ELEMENTS.players[playerId];
    var boardElement = playerElement.querySelector('.board > .seaLayer');
    sunkCoordinates.forEach(function (coordinates) {
      coordinates.forEach(function (coordinate) {
        var grid = boardElement.querySelector(".grid[data-row=\"".concat(coordinate[0], "\"][data-column=\"").concat(coordinate[1], "\"]"));
        grid.classList.add('sunk');
      });
    });
  }
  /**
   * Click on board will callback controller's playerAttack() function.
   * @param {Element} boardElement Target board container element in DOM.
   * @param {Function} callback Actual attack logic resides in controller.
   */


  function bindReceiveAttack(callback) {
    ELEMENTS.players.forEach(function (playerElement) {
      var boardElement = playerElement.querySelector('.board > .seaLayer');
      var grids = boardElement.querySelectorAll('.grid');
      grids.forEach(function (grid) {
        grid.addEventListener('click', function () {
          return callback(parseInt(grid.dataset.row, 10), parseInt(grid.dataset.column, 10), parseInt(playerElement.dataset.id, 10));
        });
      });
    });
  } // prevent current player's board to be attacked.


  return {
    drawBoard: drawBoard,
    renderSeaAfterAttack: renderSeaAfterAttack,
    renderSunkShips: renderSunkShips,
    bindReceiveAttack: bindReceiveAttack
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
 // eslint-disable-next-line no-unused-vars


_controller__WEBPACK_IMPORTED_MODULE_0__["default"].initPlayersAndBoards(_controller__WEBPACK_IMPORTED_MODULE_0__.HUMAN, _controller__WEBPACK_IMPORTED_MODULE_0__.AI);
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].drawBoards();
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].enableBoardReceiveAttack();
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].startGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNodkJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmOztBQUVBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnFEO0FBQ3RDO0FBQ2YsaUNBQWlDLGdFQUFnQjtBQUNqRDs7Ozs7Ozs7Ozs7Ozs7O0FDSGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmlEO0FBQ1k7QUFDWTtBQUN0QjtBQUNwQztBQUNmLFNBQVMsOERBQWMsU0FBUyxvRUFBb0IsWUFBWSwwRUFBMEIsWUFBWSwrREFBZTtBQUNySDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ051RDtBQUNKO0FBQ3NCO0FBQ2xCO0FBQ3hDO0FBQ2YsU0FBUyxpRUFBaUIsU0FBUywrREFBZSxTQUFTLDBFQUEwQixTQUFTLGlFQUFpQjtBQUMvRzs7Ozs7Ozs7Ozs7Ozs7OztBQ05xRDtBQUN0QztBQUNmO0FBQ0Esb0NBQW9DLGdFQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsZ0VBQWdCO0FBQ3RHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFPQTtBQUVBO0FBUUEsaUVBQWUsQ0FBQyxZQUFNO0FBQ3BCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0UsV0FBU08sb0JBQVQsQ0FBOEJDLFdBQTlCLEVBQTJDQyxXQUEzQyxFQUF3RDtBQUN0RFQsSUFBQUEseUVBQUEsQ0FBMEJRLFdBQTFCLEVBQXVDQyxXQUF2QztBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTQyxnQkFBVCxDQUEwQkMsTUFBMUIsRUFBa0M7QUFDaEMsUUFBTUMsVUFBVSxHQUFJRCxNQUFNLENBQUNFLElBQVAsRUFBRCxHQUFrQixJQUFsQixHQUF5QixPQUE1QztBQUNBLFFBQU1DLEtBQUssR0FBR0gsTUFBTSxDQUFDRyxLQUFQLEVBQWQ7QUFDQVIsSUFBQUEsdURBQUEsQ0FDRU4sdUVBREYsRUFFRVcsTUFBTSxDQUFDTSxFQUFQLEVBRkYsRUFHRUwsVUFIRixFQUlFRSxLQUFLLENBQUNJLFVBSlIsRUFLRUosS0FBSyxDQUFDSyxVQUxSLEVBTUVMLEtBQUssQ0FBQ00sYUFOUjtBQVFEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTQyxVQUFULEdBQXNCO0FBQ3BCckIsSUFBQUEsNERBQUEsR0FBZXVCLE9BQWYsQ0FBdUIsVUFBQ1osTUFBRCxFQUFZO0FBQ2pDRCxNQUFBQSxnQkFBZ0IsQ0FBQ0MsTUFBRCxDQUFoQjtBQUNELEtBRkQ7QUFHRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU2EsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFDekI7QUFDQUMsSUFBQUEsS0FBSyxXQUFJRCxPQUFKLFlBQUw7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNFLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxNQUEzQixFQUFtQ0MsVUFBbkMsRUFBK0M7QUFDN0MsUUFBTWhCLEtBQUssR0FBR2QsMkRBQUEsQ0FBWThCLFVBQVosRUFBd0JoQixLQUF4QixFQUFkO0FBQ0EsUUFBSUEsS0FBSyxDQUFDaUIsbUJBQU4sQ0FBMEJILEdBQTFCLEVBQStCQyxNQUEvQixDQUFKLEVBQTRDO0FBQzVDLFFBQU1HLE1BQU0sR0FBR2xCLEtBQUssQ0FBQ21CLGFBQU4sQ0FBb0JMLEdBQXBCLEVBQXlCQyxNQUF6QixDQUFmO0FBQ0F2QixJQUFBQSxrRUFBQSxDQUEwQnNCLEdBQTFCLEVBQStCQyxNQUEvQixFQUF1Q0MsVUFBdkMsRUFBbURFLE1BQW5EO0FBQ0ExQixJQUFBQSw2REFBQSxDQUFxQndCLFVBQXJCLEVBQWlDaEIsS0FBSyxDQUFDc0IsVUFBTixFQUFqQztBQUNBLFFBQUl0QixLQUFLLENBQUN1QixPQUFOLEVBQUosRUFBcUJiLFFBQVEsQ0FBQ00sVUFBRCxDQUFSO0FBQ3JCOUIsSUFBQUEsNkRBQUEsQ0FBYzJCLFlBQWQsRUFQNkMsQ0FPaEI7QUFDOUI7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVNZLHdCQUFULEdBQW9DO0FBQ2xDakMsSUFBQUEsK0RBQUEsQ0FBdUJxQixZQUF2QjtBQUNEOztBQUVELFdBQVNjLFNBQVQsR0FBcUI7QUFDbkJ6QyxJQUFBQSwwREFBQTtBQUNBQSxJQUFBQSw2REFBQSxDQUFjMkIsWUFBZCxFQUZtQixDQUVVO0FBQzlCOztBQUVELFNBQU87QUFDTHBCLElBQUFBLG9CQUFvQixFQUFwQkEsb0JBREs7QUFFTEcsSUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFGSztBQUdMVyxJQUFBQSxVQUFVLEVBQVZBLFVBSEs7QUFJTGtCLElBQUFBLHdCQUF3QixFQUF4QkEsd0JBSks7QUFLTEUsSUFBQUEsU0FBUyxFQUFUQTtBQUxLLEdBQVA7QUFPRCxDQWxGYyxHQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxJQUFJRSxTQUFKLEVBQ0E7O0FBQ0FBLFNBQVMsR0FBRyxJQUFaLEVBQWtCOztBQUVsQixJQUFNM0Isa0JBQWtCLEdBQUcsRUFBM0I7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGlFQUFlLFVBQUM0QixNQUFELEVBQVk7QUFDekI7QUFDRjtBQUNBO0FBQ0UsTUFBTTlCLEtBQUssR0FBRztBQUNaO0FBQ0ErQixJQUFBQSxJQUFJLEVBQUVELE1BQU0sSUFBSTVCLGtCQUZKO0FBR1o4QixJQUFBQSxLQUFLLEVBQUUsRUFISztBQUlaQyxJQUFBQSxJQUFJLEVBQUUsRUFKTTtBQUtaQyxJQUFBQSxNQUFNLEVBQUUsRUFMSTtBQU1aQyxJQUFBQSxNQUFNLEVBQUU7QUFOSSxHQUFkO0FBU0E7QUFDRjtBQUNBO0FBQ0E7O0FBQ0UsV0FBU0osSUFBVCxHQUFnQjtBQUNkLFdBQU8vQixLQUFLLENBQUMrQixJQUFiO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVNJLE1BQVQsR0FBa0I7QUFDaEIsV0FBT25DLEtBQUssQ0FBQ21DLE1BQWI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU0MsU0FBVCxHQUFxQjtBQUNuQixXQUFPcEMsS0FBSyxDQUFDZ0MsS0FBTixDQUFZSyxNQUFuQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEIsU0FBSyxJQUFJeEIsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR2QsS0FBSyxDQUFDK0IsSUFBOUIsRUFBb0NqQixHQUFHLElBQUksQ0FBM0MsRUFBOEM7QUFDNUMsV0FBSyxJQUFJQyxNQUFNLEdBQUcsQ0FBbEIsRUFBcUJBLE1BQU0sR0FBR2YsS0FBSyxDQUFDK0IsSUFBcEMsRUFBMENoQixNQUFNLElBQUksQ0FBcEQsRUFBdUQ7QUFDckRmLFFBQUFBLEtBQUssQ0FBQ21DLE1BQU4sQ0FBYUksSUFBYixXQUFxQnpCLEdBQXJCLGNBQTRCQyxNQUE1QjtBQUNEO0FBQ0Y7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTeUIsZ0JBQVQsQ0FBMEJDLEdBQTFCLEVBQStCO0FBQzdCLFFBQU1DLEtBQUssR0FBRzFDLEtBQUssQ0FBQ21DLE1BQU4sQ0FBYVEsU0FBYixDQUF1QixVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxLQUFLSCxHQUEzQjtBQUFBLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2xCMUMsSUFBQUEsS0FBSyxDQUFDbUMsTUFBTixDQUFhVSxNQUFiLENBQW9CSCxLQUFwQixFQUEyQixDQUEzQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNJLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQThCQyxPQUE5QixFQUF1Q0MsT0FBdkMsRUFBZ0Q7QUFDOUMsMEJBQThCRixTQUFTLENBQUNHLElBQVYsRUFBOUI7QUFBQTtBQUFBLFFBQU9DLE9BQVA7QUFBQSxRQUFnQkMsVUFBaEI7O0FBQ0EsMEJBQThCTCxTQUFTLENBQUNNLElBQVYsRUFBOUI7QUFBQTtBQUFBLFFBQU9DLE9BQVA7QUFBQSxRQUFnQkMsVUFBaEI7O0FBQ0EsUUFBTUMsZUFBZSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlQLE9BQU8sR0FBRyxDQUF0QixDQUF4QjtBQUNBLFFBQU1RLGtCQUFrQixHQUFHRixJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlOLFVBQVUsR0FBRyxDQUF6QixDQUEzQjtBQUNBLFFBQU1RLGFBQWEsR0FBR0gsSUFBSSxDQUFDSSxHQUFMLENBQVM3RCxLQUFLLENBQUMrQixJQUFOLEdBQWEsQ0FBdEIsRUFBeUJ1QixPQUFPLEdBQUcsQ0FBbkMsQ0FBdEI7QUFDQSxRQUFNUSxnQkFBZ0IsR0FBR0wsSUFBSSxDQUFDSSxHQUFMLENBQVM3RCxLQUFLLENBQUMrQixJQUFOLEdBQWEsQ0FBdEIsRUFBeUJ3QixVQUFVLEdBQUcsQ0FBdEMsQ0FBekI7O0FBQ0EsUUFBSVAsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhQyxPQUFPLENBQUMsQ0FBRCxDQUFwQixLQUE0QixDQUFoQyxFQUFtQztBQUFFO0FBQ25DLFVBQUlELE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYVEsZUFBYixJQUFnQ1IsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhWSxhQUFqRCxFQUFnRSxPQUFPLEtBQVA7QUFDaEUsVUFBSVgsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhVSxrQkFBYixJQUFtQ1gsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhYyxnQkFBcEQsRUFBc0UsT0FBTyxLQUFQO0FBQ3RFLGFBQU8sSUFBUDtBQUNEOztBQUNELFFBQUlkLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYVcsa0JBQWIsSUFBbUNYLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYWMsZ0JBQXBELEVBQXNFLE9BQU8sS0FBUDtBQUN0RSxRQUFJYixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWFPLGVBQWIsSUFBZ0NSLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYVksYUFBakQsRUFBZ0UsT0FBTyxLQUFQO0FBQ2hFLFdBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNHLFNBQVQsQ0FBbUJqRCxHQUFuQixFQUF3QkMsTUFBeEIsRUFBZ0NpRCxJQUFoQyxFQUFzQztBQUNwQztBQUNBLFFBQUlsRCxHQUFHLEdBQUcsQ0FBTixJQUNDQSxHQUFHLElBQUlkLEtBQUssQ0FBQytCLElBRGQsSUFFQ2hCLE1BQU0sR0FBRyxDQUZWLElBR0NBLE1BQU0sSUFBSWYsS0FBSyxDQUFDK0IsSUFIckIsRUFHMkI7QUFDekIsYUFBTyxLQUFQO0FBQ0QsS0FQbUMsQ0FRcEM7OztBQUNBLFFBQU11QixPQUFPLEdBQUlVLElBQUksQ0FBQ0MsWUFBTCxFQUFELEdBQXdCbkQsR0FBeEIsR0FBK0JBLEdBQUcsR0FBR2tELElBQUksQ0FBQ2pDLElBQUwsRUFBTixHQUFvQixDQUFuRTtBQUNBLFFBQU13QixVQUFVLEdBQUlTLElBQUksQ0FBQ0MsWUFBTCxFQUFELEdBQXlCbEQsTUFBTSxHQUFHaUQsSUFBSSxDQUFDakMsSUFBTCxFQUFULEdBQXVCLENBQWhELEdBQXFEaEIsTUFBeEU7O0FBQ0EsUUFBSXVDLE9BQU8sR0FBRyxDQUFWLElBQ0NBLE9BQU8sSUFBSXRELEtBQUssQ0FBQytCLElBRGxCLElBRUN3QixVQUFVLEdBQUcsQ0FGZCxJQUdDQSxVQUFVLElBQUl2RCxLQUFLLENBQUMrQixJQUh6QixFQUcrQjtBQUM3QixhQUFPLEtBQVA7QUFDRCxLQWhCbUMsQ0FpQnBDOzs7QUFDQSxRQUFNaUIsT0FBTyxHQUFHLENBQUNsQyxHQUFELEVBQU1DLE1BQU4sQ0FBaEI7QUFDQSxRQUFNa0MsT0FBTyxHQUFHLENBQUNLLE9BQUQsRUFBVUMsVUFBVixDQUFoQjtBQUNBLFFBQUl2RCxLQUFLLENBQUNnQyxLQUFOLENBQVlrQyxJQUFaLENBQWlCLFVBQUNuQixTQUFEO0FBQUEsYUFBZUQsU0FBUyxDQUFDQyxTQUFELEVBQVlDLE9BQVosRUFBcUJDLE9BQXJCLENBQXhCO0FBQUEsS0FBakIsQ0FBSixFQUE2RSxPQUFPLEtBQVA7QUFDN0UsV0FBTyxJQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2tCLE9BQVQsQ0FBaUJyRCxHQUFqQixFQUFzQkMsTUFBdEIsRUFBOEJpRCxJQUE5QixFQUFvQztBQUNsQ0EsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVN0RCxHQUFULEVBQWNDLE1BQWQ7QUFDQWYsSUFBQUEsS0FBSyxDQUFDZ0MsS0FBTixDQUFZTyxJQUFaLENBQWlCeUIsSUFBakI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTSyxVQUFULENBQW9CTCxJQUFwQixFQUEwQjtBQUN4QixRQUFNdEIsS0FBSyxHQUFHMUMsS0FBSyxDQUFDZ0MsS0FBTixDQUFZVyxTQUFaLENBQXNCLFVBQUMyQixTQUFEO0FBQUEsYUFBZUEsU0FBUyxDQUFDbkUsRUFBVixPQUFtQjZELElBQUksQ0FBQzdELEVBQUwsRUFBbEM7QUFBQSxLQUF0QixDQUFkO0FBQ0EsUUFBSXVDLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDbEIxQyxJQUFBQSxLQUFLLENBQUNnQyxLQUFOLENBQVlhLE1BQVosQ0FBbUJILEtBQW5CLEVBQTBCLENBQTFCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTNkIsZUFBVCxDQUF5QlAsSUFBekIsRUFBK0I7QUFDN0JLLElBQUFBLFVBQVUsQ0FBQ0wsSUFBRCxDQUFWO0FBQ0FBLElBQUFBLElBQUksQ0FBQ1EsZUFBTDs7QUFDQSxRQUFJVCxTQUFTLE1BQVQsOEZBQWFDLElBQUksQ0FBQ2QsSUFBTCxFQUFiLFVBQTBCYyxJQUExQixHQUFKLEVBQXFDO0FBQ25DRyxNQUFBQSxPQUFPLE1BQVAsOEZBQVdILElBQUksQ0FBQ2QsSUFBTCxFQUFYLFVBQXdCYyxJQUF4QjtBQUNBLGFBQU8sSUFBUDtBQUNELEtBTjRCLENBTzdCOzs7QUFDQUEsSUFBQUEsSUFBSSxDQUFDUSxlQUFMLEdBUjZCLENBUUw7O0FBQ3hCTCxJQUFBQSxPQUFPLE1BQVAsOEZBQVdILElBQUksQ0FBQ2QsSUFBTCxFQUFYLFVBQXdCYyxJQUF4QixJQVQ2QixDQVNFOztBQUMvQixXQUFPLEtBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU1MsYUFBVCxDQUF1QkMsU0FBdkIsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQzNDLFdBQVFELFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJDLFNBQVMsQ0FBQyxDQUFELENBQTNCLElBQW9DRCxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCQyxTQUFTLENBQUMsQ0FBRCxDQUFyRTtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTdEUsVUFBVCxDQUFvQlMsR0FBcEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQy9CLFdBQU9mLEtBQUssQ0FBQ2lDLElBQU4sQ0FBV2lDLElBQVgsQ0FBZ0IsVUFBQ1UsR0FBRDtBQUFBLGFBQVNILGFBQWEsQ0FBQ0csR0FBRCxFQUFNLENBQUM5RCxHQUFELEVBQU1DLE1BQU4sQ0FBTixDQUF0QjtBQUFBLEtBQWhCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTVCxhQUFULENBQXVCUSxHQUF2QixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDbEMsV0FBT2YsS0FBSyxDQUFDa0MsTUFBTixDQUFhZ0MsSUFBYixDQUFrQixVQUFDVyxJQUFEO0FBQUEsYUFBVUosYUFBYSxDQUFDSSxJQUFELEVBQU8sQ0FBQy9ELEdBQUQsRUFBTUMsTUFBTixDQUFQLENBQXZCO0FBQUEsS0FBbEIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTRSxtQkFBVCxDQUE2QkgsR0FBN0IsRUFBa0NDLE1BQWxDLEVBQTBDO0FBQ3hDLFdBQU9WLFVBQVUsQ0FBQ1MsR0FBRCxFQUFNQyxNQUFOLENBQVYsSUFBMkJULGFBQWEsQ0FBQ1EsR0FBRCxFQUFNQyxNQUFOLENBQS9DO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVMrRCxVQUFULENBQW9CaEUsR0FBcEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQy9CLFdBQU9mLEtBQUssQ0FBQ2dDLEtBQU4sQ0FBWWtDLElBQVosQ0FBaUIsVUFBQ0ksU0FBRDtBQUFBLGFBQWVBLFNBQVMsQ0FBQ00sR0FBVixDQUFjOUQsR0FBZCxFQUFtQkMsTUFBbkIsQ0FBZjtBQUFBLEtBQWpCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTWCxVQUFULENBQW9CVSxHQUFwQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0IsV0FBT2YsS0FBSyxDQUFDZ0MsS0FBTixDQUFZa0MsSUFBWixDQUFpQixVQUFDSSxTQUFEO0FBQUEsYUFBZUEsU0FBUyxDQUFDUyxNQUFWLENBQWlCakUsR0FBakIsRUFBc0JDLE1BQXRCLENBQWY7QUFBQSxLQUFqQixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0ksYUFBVCxDQUF1QkwsR0FBdkIsRUFBNEJDLE1BQTVCLEVBQW9DO0FBQ2xDLFFBQU1pRSxNQUFNLEdBQUcsQ0FBQ2xFLEdBQUQsRUFBTUMsTUFBTixDQUFmLENBRGtDLENBRWxDOztBQUNBLFFBQUlFLG1CQUFtQixNQUFuQixTQUF1QitELE1BQXZCLENBQUosRUFBb0MsT0FBT0MsU0FBUDtBQUNwQyxRQUFNTCxHQUFHLEdBQUdFLFVBQVUsQ0FBQ2hFLEdBQUQsRUFBTUMsTUFBTixDQUF0Qjs7QUFDQSxRQUFJNkQsR0FBSixFQUFTO0FBQ1A1RSxNQUFBQSxLQUFLLENBQUNpQyxJQUFOLENBQVdNLElBQVgsQ0FBZ0J5QyxNQUFoQjtBQUNELEtBRkQsTUFFTztBQUNMaEYsTUFBQUEsS0FBSyxDQUFDa0MsTUFBTixDQUFhSyxJQUFiLENBQWtCeUMsTUFBbEI7QUFDRDs7QUFDRHhDLElBQUFBLGdCQUFnQixXQUFJMUIsR0FBSixjQUFXQyxNQUFYLEVBQWhCO0FBQ0EsV0FBTzZELEdBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTdEQsVUFBVCxHQUFzQjtBQUNwQixXQUFPdEIsS0FBSyxDQUFDZ0MsS0FBTixDQUFZa0QsTUFBWixDQUFtQixVQUFDQyxHQUFELEVBQU1iLFNBQU4sRUFBb0I7QUFDNUMsVUFBSUEsU0FBUyxDQUFDYyxNQUFWLEVBQUosRUFBd0JELEdBQUcsQ0FBQzVDLElBQUosQ0FBUytCLFNBQVMsQ0FBQ2UsV0FBVixFQUFUO0FBQ3hCLGFBQU9GLEdBQVA7QUFDRCxLQUhNLEVBR0osRUFISSxDQUFQO0FBSUQ7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBUzVELE9BQVQsR0FBbUI7QUFDakIsV0FBT3ZCLEtBQUssQ0FBQ2dDLEtBQU4sQ0FBWXNELEtBQVosQ0FBa0IsVUFBQ2hCLFNBQUQ7QUFBQSxhQUFlQSxTQUFTLENBQUNjLE1BQVYsRUFBZjtBQUFBLEtBQWxCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0U5QyxFQUFBQSxVQUFVO0FBRVY7QUFDRjtBQUNBOztBQUNFLE1BQU1pRCxHQUFHLEdBQUc7QUFDVnhELElBQUFBLElBQUksRUFBSkEsSUFEVTtBQUVWSSxJQUFBQSxNQUFNLEVBQU5BLE1BRlU7QUFHVkMsSUFBQUEsU0FBUyxFQUFUQSxTQUhVO0FBSVYyQixJQUFBQSxTQUFTLEVBQVRBLFNBSlU7QUFLVkksSUFBQUEsT0FBTyxFQUFQQSxPQUxVO0FBTVZFLElBQUFBLFVBQVUsRUFBVkEsVUFOVTtBQU9WRSxJQUFBQSxlQUFlLEVBQWZBLGVBUFU7QUFRVmxFLElBQUFBLFVBQVUsRUFBVkEsVUFSVTtBQVNWQyxJQUFBQSxhQUFhLEVBQWJBLGFBVFU7QUFVVlcsSUFBQUEsbUJBQW1CLEVBQW5CQSxtQkFWVTtBQVdWYixJQUFBQSxVQUFVLEVBQVZBLFVBWFU7QUFZVmUsSUFBQUEsYUFBYSxFQUFiQSxhQVpVO0FBYVZHLElBQUFBLFVBQVUsRUFBVkEsVUFiVTtBQWNWQyxJQUFBQSxPQUFPLEVBQVBBO0FBZFUsR0FBWjtBQWlCQTtBQUNGO0FBQ0E7O0FBQ0UsTUFBSU0sU0FBSixFQUFlO0FBQ2IwRCxJQUFBQSxHQUFHLENBQUN2RixLQUFKLEdBQVlBLEtBQVo7QUFDRDs7QUFFRCwyQkFDS3VGLEdBREw7QUFHRCxDQXBTRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBUUEsSUFBSTFELFNBQUosRUFDQTs7QUFDQUEsU0FBUyxHQUFHLElBQVosRUFBa0I7O0FBRWxCLGlFQUFlLENBQUMsWUFBTTtBQUNwQixNQUFNM0Isa0JBQWtCLEdBQUcsRUFBM0IsQ0FEb0IsQ0FDVztBQUMvQjs7QUFDQSxNQUFNeUYsY0FBYyxHQUFHLENBQ3JCO0FBQ0EsR0FBQyxTQUFELEVBQVksQ0FBWixDQUZxQixFQUdyQixDQUFDLFlBQUQsRUFBZSxDQUFmLENBSHFCLEVBSXJCLENBQUMsU0FBRCxFQUFZLENBQVosQ0FKcUIsRUFLckIsQ0FBQyxXQUFELEVBQWMsQ0FBZCxDQUxxQixFQU1yQixDQUFDLFdBQUQsRUFBYyxDQUFkLENBTnFCLENBQXZCO0FBU0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxNQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsV0FBU0MsTUFBVCxDQUFnQm5DLEdBQWhCLEVBQXFCO0FBQ25CLFdBQU9ELElBQUksQ0FBQ3FDLEtBQUwsQ0FBV3JDLElBQUksQ0FBQ29DLE1BQUwsS0FBZ0JuQyxHQUEzQixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTcUMsY0FBVCxDQUF3QmhFLElBQXhCLEVBQThCO0FBQzVCLFdBQU8sQ0FBQzhELE1BQU0sQ0FBQzlELElBQUQsQ0FBUCxFQUFlOEQsTUFBTSxDQUFDOUQsSUFBRCxDQUFyQixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2lFLGFBQVQsQ0FBdUJoRyxLQUF2QixFQUE4QjtBQUM1QjJGLElBQUFBLGNBQWMsQ0FBQ2xGLE9BQWYsQ0FBdUIsVUFBQ3dGLFFBQUQsRUFBYztBQUNuQyxVQUFNakMsSUFBSSxHQUFHd0IsbURBQUEsOEZBQVFTLFFBQVIsRUFBYjtBQUNBLFVBQUlKLE1BQU0sQ0FBQyxDQUFELENBQU4sS0FBYyxDQUFsQixFQUFxQjdCLElBQUksQ0FBQ1EsZUFBTDtBQUNyQixVQUFJNUIsUUFBUSxHQUFHbUQsY0FBYyxDQUFDL0YsS0FBSyxDQUFDK0IsSUFBTixFQUFELENBQTdCOztBQUNBLGFBQU8sQ0FBQy9CLEtBQUssQ0FBQytELFNBQU4sT0FBQS9ELEtBQUssdUZBQWM0QyxRQUFkLFVBQXdCb0IsSUFBeEIsR0FBYixFQUE0QztBQUMxQ3BCLFFBQUFBLFFBQVEsR0FBR21ELGNBQWMsQ0FBQy9GLEtBQUssQ0FBQytCLElBQU4sRUFBRCxDQUF6QjtBQUNEOztBQUNEL0IsTUFBQUEsS0FBSyxDQUFDbUUsT0FBTixPQUFBbkUsS0FBSyx1RkFBWTRDLFFBQVosVUFBc0JvQixJQUF0QixHQUFMO0FBQ0QsS0FSRDtBQVNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVN4RCxPQUFULEdBQW1CO0FBQ2pCLFdBQU9vRixJQUFJLENBQUNwRixPQUFaO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU1gsTUFBVCxDQUFnQk0sRUFBaEIsRUFBb0I7QUFDbEIsV0FBT3lGLElBQUksQ0FBQ3BGLE9BQUwsQ0FBYTBGLElBQWIsQ0FBa0IsVUFBQ0MsU0FBRDtBQUFBLGFBQWVBLFNBQVMsQ0FBQ2hHLEVBQVYsT0FBbUJBLEVBQWxDO0FBQUEsS0FBbEIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTVixvQkFBVCxDQUE4QkMsV0FBOUIsRUFBMkNDLFdBQTNDLEVBQXdEO0FBQ3REaUcsSUFBQUEsSUFBSSxDQUFDcEYsT0FBTCxHQUFlLEVBQWY7QUFDQSxRQUFNNEYsV0FBVyxHQUFHLENBQUMxRyxXQUFELEVBQWNDLFdBQWQsQ0FBcEI7O0FBQ0EsU0FBSyxJQUFJMEcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsV0FBVyxDQUFDL0QsTUFBaEMsRUFBd0NnRSxDQUFDLElBQUksQ0FBN0MsRUFBZ0Q7QUFDOUMsVUFBTUMsU0FBUyxHQUFHWixtREFBTSxDQUFDVyxDQUFELEVBQUlaLGtEQUFLLENBQUN2RixrQkFBRCxDQUFULEVBQStCa0csV0FBVyxDQUFDQyxDQUFELENBQTFDLENBQXhCO0FBQ0FMLE1BQUFBLGFBQWEsQ0FBQ00sU0FBUyxDQUFDdEcsS0FBVixFQUFELENBQWI7QUFDQTRGLE1BQUFBLElBQUksQ0FBQ3BGLE9BQUwsQ0FBYStCLElBQWIsQ0FBa0IrRCxTQUFsQjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN4QlosSUFBQUEsSUFBSSxDQUFDcEYsT0FBTCxDQUFhLENBQWIsSUFBa0JrRixtREFBTSxDQUFDLENBQUQsRUFBSUQsa0RBQUssQ0FBQ3ZGLGtCQUFELENBQVQsRUFBK0JmLHVDQUEvQixFQUFtQ3FILEtBQW5DLENBQXhCO0FBQ0FSLElBQUFBLGFBQWEsQ0FBQ0osSUFBSSxDQUFDcEYsT0FBTCxDQUFhLENBQWIsRUFBZ0JSLEtBQWhCLEVBQUQsQ0FBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTeUcsWUFBVCxHQUF3QjtBQUN0QmIsSUFBQUEsSUFBSSxDQUFDcEYsT0FBTCxDQUFhLENBQWIsSUFBa0JrRixtREFBTSxDQUFDLENBQUQsRUFBSUQsa0RBQUssQ0FBQ3ZGLGtCQUFELENBQVQsRUFBK0JkLDBDQUEvQixDQUF4QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVNzSCxTQUFULEdBQXFCO0FBQ25CLFdBQU8sQ0FBQ2QsSUFBSSxDQUFDZSxhQUFMLEdBQXFCLENBQXRCLElBQTJCZixJQUFJLENBQUNwRixPQUFMLENBQWE2QixNQUEvQztBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNiLFFBQVQsQ0FBa0JvRix3QkFBbEIsRUFBNEM7QUFDMUNoQixJQUFBQSxJQUFJLENBQUNlLGFBQUwsR0FBcUJELFNBQVMsRUFBOUI7QUFDQSxRQUFNRyxVQUFVLEdBQUdqQixJQUFJLENBQUNwRixPQUFMLENBQWFvRixJQUFJLENBQUNlLGFBQWxCLENBQW5CO0FBQ0EsUUFBSSxDQUFDRSxVQUFVLENBQUM5RyxJQUFYLEVBQUwsRUFBd0IsT0FIa0IsQ0FHVjs7QUFDaEMsUUFBTStHLFFBQVEsR0FBR2xCLElBQUksQ0FBQ3BGLE9BQUwsQ0FBYWtHLFNBQVMsRUFBdEIsQ0FBakI7QUFDQSxRQUFNMUIsTUFBTSxHQUFHNkIsVUFBVSxDQUFDRSxNQUFYLENBQWtCRCxRQUFRLENBQUM5RyxLQUFULEVBQWxCLENBQWYsQ0FMMEMsQ0FLVTs7QUFDcEQsUUFBSWdGLE1BQUosRUFBWTtBQUFFO0FBQ1o0QixNQUFBQSx3QkFBd0IsTUFBeEIsOEZBQTRCNUIsTUFBNUIsVUFBb0M4QixRQUFRLENBQUMzRyxFQUFULEVBQXBDO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVN5QixLQUFULEdBQWlCO0FBQ2Y7QUFDQSxRQUFJZ0UsSUFBSSxDQUFDcEYsT0FBTCxDQUFhMEQsSUFBYixDQUFrQixVQUFDaUMsU0FBRDtBQUFBLGFBQWVBLFNBQVMsQ0FBQ25HLEtBQVYsR0FBa0JvQyxTQUFsQixPQUM3QnVELGNBQWMsQ0FBQ3RELE1BREQ7QUFBQSxLQUFsQixDQUFKLEVBQ2dDO0FBQzlCLGFBQU8sS0FBUDtBQUNELEtBTGMsQ0FNZjtBQUNBOzs7QUFDQXVELElBQUFBLElBQUksQ0FBQ2UsYUFBTCxHQUFxQmYsSUFBSSxDQUFDcEYsT0FBTCxDQUFhNkIsTUFBYixHQUFzQixDQUEzQztBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQU1rRCxHQUFHLEdBQUc7QUFDVnJGLElBQUFBLGtCQUFrQixFQUFsQkEsa0JBRFU7QUFFVk0sSUFBQUEsT0FBTyxFQUFQQSxPQUZVO0FBR1ZYLElBQUFBLE1BQU0sRUFBTkEsTUFIVTtBQUlWbUcsSUFBQUEsYUFBYSxFQUFiQSxhQUpVO0FBS1Z4RSxJQUFBQSxRQUFRLEVBQVJBLFFBTFU7QUFNVi9CLElBQUFBLG9CQUFvQixFQUFwQkEsb0JBTlU7QUFPVjhHLElBQUFBLFNBQVMsRUFBVEEsU0FQVTtBQVFWRSxJQUFBQSxZQUFZLEVBQVpBLFlBUlU7QUFTVjdFLElBQUFBLEtBQUssRUFBTEE7QUFUVSxHQUFaOztBQVlBLE1BQUlDLFNBQUosRUFBZTtBQUNiMEQsSUFBQUEsR0FBRyxDQUFDSyxJQUFKLEdBQVdBLElBQVg7QUFDRDs7QUFFRCwyQkFDS0wsR0FETDtBQUdELENBMUtjLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNcEcsRUFBRSxHQUFHNkgsTUFBTSxDQUFDLElBQUQsQ0FBakI7QUFDQSxJQUFNNUgsS0FBSyxHQUFHNEgsTUFBTSxDQUFDLE9BQUQsQ0FBcEI7QUFFUDtBQUNBO0FBQ0E7O0FBQ08sSUFBTTNILElBQUksR0FBRzJILE1BQU0sQ0FBQyxPQUFELENBQW5CO0FBQ0EsSUFBTTFILE1BQU0sR0FBRzBILE1BQU0sQ0FBQyxRQUFELENBQXJCO0FBQ0EsSUFBTXpILElBQUksR0FBR3lILE1BQU0sQ0FBQyxNQUFELENBQW5CO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGlFQUFlLFVBQUNDLElBQUQsRUFBT0MsT0FBUCxFQUFnQkMsTUFBaEIsRUFBd0JDLE9BQXhCLEVBQW9DO0FBQ2pEO0FBQ0Y7QUFDQTtBQUNFLE1BQU12SCxNQUFNLEdBQUc7QUFDYk0sSUFBQUEsRUFBRSxFQUFFOEcsSUFEUztBQUViSSxJQUFBQSxJQUFJLEVBQUVGLE1BRk87QUFHYm5ILElBQUFBLEtBQUssRUFBRWtIO0FBSE0sR0FBZjs7QUFNQSxNQUFJckgsTUFBTSxDQUFDd0gsSUFBUCxLQUFnQmxJLEVBQXBCLEVBQXdCO0FBQ3RCVSxJQUFBQSxNQUFNLENBQUMyRyxLQUFQLEdBQWVZLE9BQU8sSUFBSS9ILElBQTFCLENBRHNCLENBQ1U7QUFDakM7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2MsRUFBVCxHQUFjO0FBQ1osV0FBT04sTUFBTSxDQUFDTSxFQUFkO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0osSUFBVCxHQUFnQjtBQUNkLFdBQU9GLE1BQU0sQ0FBQ3dILElBQVAsS0FBZ0JsSSxFQUF2QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFLFdBQVNtSSxPQUFULEdBQW1CO0FBQ2pCLFFBQUl6SCxNQUFNLENBQUN3SCxJQUFQLEtBQWdCbEksRUFBcEIsRUFBd0IsT0FBTzhGLFNBQVA7QUFDeEIsV0FBT3BGLE1BQU0sQ0FBQzJHLEtBQWQ7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTZSxVQUFULENBQW9CZixLQUFwQixFQUEyQjtBQUN6QixRQUFJM0csTUFBTSxDQUFDd0gsSUFBUCxLQUFnQmxJLEVBQXBCLEVBQXdCO0FBQ3hCVSxJQUFBQSxNQUFNLENBQUMyRyxLQUFQLEdBQWVBLEtBQWY7QUFDRDs7QUFFRCxXQUFTeEcsS0FBVCxHQUFpQjtBQUNmLFdBQU9ILE1BQU0sQ0FBQ0csS0FBZDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU3dILFlBQVQsQ0FBc0JDLGFBQXRCLEVBQXFDO0FBQ25DLFFBQUlBLGFBQWEsQ0FBQ3RGLE1BQWQsR0FBdUJFLE1BQXZCLEtBQWtDLENBQXRDLEVBQXlDLE9BQU80QyxTQUFQO0FBQ3pDLFFBQU12QyxLQUFLLEdBQUdlLElBQUksQ0FBQ3FDLEtBQUwsQ0FBV3JDLElBQUksQ0FBQ29DLE1BQUwsS0FBZ0I0QixhQUFhLENBQUN0RixNQUFkLEdBQXVCRSxNQUFsRCxDQUFkO0FBQ0EsUUFBTUksR0FBRyxHQUFHZ0YsYUFBYSxDQUFDdEYsTUFBZCxHQUF1Qk8sS0FBdkIsQ0FBWjs7QUFDQSxxQkFBNEJELEdBQUcsQ0FBQ2lGLEtBQUosQ0FBVSxHQUFWLENBQTVCO0FBQUE7QUFBQSxRQUFPQyxNQUFQO0FBQUEsUUFBZUMsU0FBZjs7QUFDQSxXQUFPLENBQUNDLFFBQVEsQ0FBQ0YsTUFBRCxFQUFTLEVBQVQsQ0FBVCxFQUF1QkUsUUFBUSxDQUFDRCxTQUFELEVBQVksRUFBWixDQUEvQixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTRSxZQUFULENBQXNCTCxhQUF0QixFQUFxQztBQUNuQyxXQUFPRCxZQUFZLENBQUNDLGFBQUQsQ0FBbkI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNNLFVBQVQsQ0FBb0JOLGFBQXBCLEVBQW1DO0FBQ2pDLFdBQU9ELFlBQVksQ0FBQ0MsYUFBRCxDQUFuQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNWLE1BQVQsQ0FBZ0JVLGFBQWhCLEVBQStCO0FBQzdCLFFBQUk1SCxNQUFNLENBQUN3SCxJQUFQLEtBQWdCbEksRUFBcEIsRUFBd0I7QUFDdEIsY0FBUVUsTUFBTSxDQUFDMkcsS0FBZjtBQUNFLGFBQUtuSCxJQUFMO0FBQ0UsaUJBQU9tSSxZQUFZLENBQUNDLGFBQUQsQ0FBbkI7O0FBQ0YsYUFBS25JLE1BQUw7QUFDRSxpQkFBT3dJLFlBQVksQ0FBQ0wsYUFBRCxDQUFuQjs7QUFDRixhQUFLbEksSUFBTDtBQUNFLGlCQUFPd0ksVUFBVSxDQUFDTixhQUFELENBQWpCOztBQUNGO0FBQ0UsaUJBQU9ELFlBQVksQ0FBQ0MsYUFBRCxDQUFuQjtBQVJKO0FBVUQ7O0FBQ0QsV0FBT3hDLFNBQVAsQ0FiNkIsQ0FhWDtBQUNuQjs7QUFFRCxTQUFPO0FBQ0w5RSxJQUFBQSxFQUFFLEVBQUZBLEVBREs7QUFFTEosSUFBQUEsSUFBSSxFQUFKQSxJQUZLO0FBR0x1SCxJQUFBQSxPQUFPLEVBQVBBLE9BSEs7QUFJTEMsSUFBQUEsVUFBVSxFQUFWQSxVQUpLO0FBS0x2SCxJQUFBQSxLQUFLLEVBQUxBLEtBTEs7QUFNTCtHLElBQUFBLE1BQU0sRUFBTkE7QUFOSyxHQUFQO0FBUUQsQ0FsSEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkNuQlVpQjs7QUFIVjtBQUNBO0FBQ0E7QUFDQSxTQUFVQSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNNdEYsVUFBQUEsS0FETixHQUNjLENBRGQ7O0FBQUE7QUFBQTs7QUFBQTtBQUdJLGlCQUFNQSxLQUFOOztBQUhKO0FBSUlBLFVBQUFBLEtBQUssSUFBSSxDQUFUO0FBSko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQSxJQUFNdUYsR0FBRyxHQUFHRCxRQUFRLEVBQXBCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHbEIsTUFBTSxDQUFDLFlBQUQsQ0FBekI7QUFDQSxJQUFNbUIsUUFBUSxHQUFHbkIsTUFBTSxDQUFDLFVBQUQsQ0FBdkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsaUVBQWUsVUFBQ29CLE1BQUQsRUFBU3RHLE1BQVQsRUFBb0I7QUFDakM7QUFDRjtBQUNBO0FBQ0UsTUFBTWtDLElBQUksR0FBRztBQUNYN0QsSUFBQUEsRUFBRSxFQUFFOEgsR0FBRyxDQUFDSSxJQUFKLEdBQVdDLEtBREo7QUFFWEMsSUFBQUEsSUFBSSxFQUFFSCxNQUZLO0FBR1hyRyxJQUFBQSxJQUFJLEVBQUVELE1BSEs7QUFJWGhCLElBQUFBLEdBQUcsRUFBRSxDQUpNO0FBSUg7QUFDUkMsSUFBQUEsTUFBTSxFQUFFLENBTEc7QUFLQTtBQUNYeUgsSUFBQUEsU0FBUyxFQUFFTixVQU5BO0FBTVk7QUFDdkJ0RCxJQUFBQSxHQUFHLEVBQUUsQ0FQTSxDQU9IOztBQVBHLEdBQWI7QUFVQTtBQUNGO0FBQ0E7O0FBQ0UsV0FBU3pFLEVBQVQsR0FBYztBQUNaLFdBQU82RCxJQUFJLENBQUM3RCxFQUFaO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFdBQVNvSSxJQUFULEdBQWdCO0FBQ2QsV0FBT3ZFLElBQUksQ0FBQ3VFLElBQVo7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsV0FBU3hHLElBQVQsR0FBZ0I7QUFDZCxXQUFPaUMsSUFBSSxDQUFDakMsSUFBWjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTbUIsSUFBVCxHQUFnQjtBQUNkLFdBQU8sQ0FBQ2MsSUFBSSxDQUFDbEQsR0FBTixFQUFXa0QsSUFBSSxDQUFDakQsTUFBaEIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTc0MsSUFBVCxHQUFnQjtBQUNkLFlBQVFXLElBQUksQ0FBQ3dFLFNBQWI7QUFDRSxXQUFLTixVQUFMO0FBQ0UsZUFBTyxDQUFDbEUsSUFBSSxDQUFDbEQsR0FBTixFQUFXa0QsSUFBSSxDQUFDakQsTUFBTCxHQUFjaUQsSUFBSSxDQUFDakMsSUFBbkIsR0FBMEIsQ0FBckMsQ0FBUDs7QUFDRixXQUFLb0csUUFBTDtBQUNFLGVBQU8sQ0FBQ25FLElBQUksQ0FBQ2xELEdBQUwsR0FBV2tELElBQUksQ0FBQ2pDLElBQWhCLEdBQXVCLENBQXhCLEVBQTJCaUMsSUFBSSxDQUFDakQsTUFBaEMsQ0FBUDs7QUFDRjtBQUNFLGVBQU9rRSxTQUFQO0FBTko7QUFRRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxXQUFTaEIsWUFBVCxHQUF3QjtBQUN0QixXQUFPRCxJQUFJLENBQUN3RSxTQUFMLEtBQW1CTixVQUExQjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTTyxTQUFULEdBQXFCO0FBQ25CLFdBQU96RSxJQUFJLENBQUNZLEdBQVo7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0osZUFBVCxHQUEyQjtBQUN6QixRQUFJUixJQUFJLENBQUN3RSxTQUFMLEtBQW1CTixVQUF2QixFQUFtQztBQUNqQ2xFLE1BQUFBLElBQUksQ0FBQ3dFLFNBQUwsR0FBaUJMLFFBQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xuRSxNQUFBQSxJQUFJLENBQUN3RSxTQUFMLEdBQWlCTixVQUFqQjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVM5RCxHQUFULENBQWF0RCxHQUFiLEVBQWtCQyxNQUFsQixFQUEwQjtBQUN4QmlELElBQUFBLElBQUksQ0FBQ2xELEdBQUwsR0FBV0EsR0FBWDtBQUNBa0QsSUFBQUEsSUFBSSxDQUFDakQsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2dFLE1BQVQsQ0FBZ0JqRSxHQUFoQixFQUFxQkMsTUFBckIsRUFBNkI7QUFDM0IsWUFBUWlELElBQUksQ0FBQ3dFLFNBQWI7QUFDRSxXQUFLTixVQUFMO0FBQ0UsWUFBSXBILEdBQUcsS0FBS2tELElBQUksQ0FBQ2xELEdBQWpCLEVBQXNCLE9BQU8sS0FBUDtBQUN0QixZQUFJQyxNQUFNLEdBQUdpRCxJQUFJLENBQUNqRCxNQUFkLElBQXdCQSxNQUFNLEdBQUlpRCxJQUFJLENBQUNqRCxNQUFMLEdBQWNpRCxJQUFJLENBQUNqQyxJQUFuQixHQUEwQixDQUFoRSxFQUFvRSxPQUFPLEtBQVA7QUFDcEU7O0FBQ0YsV0FBS29HLFFBQUw7QUFDRSxZQUFJcEgsTUFBTSxLQUFLaUQsSUFBSSxDQUFDakQsTUFBcEIsRUFBNEIsT0FBTyxLQUFQO0FBQzVCLFlBQUlELEdBQUcsR0FBR2tELElBQUksQ0FBQ2xELEdBQVgsSUFBa0JBLEdBQUcsR0FBSWtELElBQUksQ0FBQ2xELEdBQUwsR0FBV2tELElBQUksQ0FBQ2pDLElBQWhCLEdBQXVCLENBQXBELEVBQXdELE9BQU8sS0FBUDtBQUN4RDs7QUFDRjtBQUNFO0FBVko7O0FBWUEsV0FBTyxJQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBUzZDLEdBQVQsQ0FBYTlELEdBQWIsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ3hCLFFBQU1HLE1BQU0sR0FBRzZELE1BQU0sQ0FBQ2pFLEdBQUQsRUFBTUMsTUFBTixDQUFyQjtBQUNBLFFBQUlHLE1BQUosRUFBWThDLElBQUksQ0FBQ1ksR0FBTCxJQUFZLENBQVo7QUFDWixXQUFPMUQsTUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU2tFLE1BQVQsR0FBa0I7QUFDaEIsV0FBUXBCLElBQUksQ0FBQ1ksR0FBTCxJQUFZWixJQUFJLENBQUNqQyxJQUF6QjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxXQUFTc0QsV0FBVCxHQUF1QjtBQUNyQixRQUFNbkUsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsU0FBSyxJQUFJbUYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3JDLElBQUksQ0FBQ2pDLElBQXpCLEVBQStCc0UsQ0FBQyxJQUFJLENBQXBDLEVBQXVDO0FBQ3JDLFVBQUlyQyxJQUFJLENBQUN3RSxTQUFMLEtBQW1CTixVQUF2QixFQUFtQztBQUNqQ2hILFFBQUFBLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWSxDQUFDeUIsSUFBSSxDQUFDbEQsR0FBTixFQUFXa0QsSUFBSSxDQUFDakQsTUFBTCxHQUFjc0YsQ0FBekIsQ0FBWjtBQUNELE9BRkQsTUFFTztBQUNMbkYsUUFBQUEsTUFBTSxDQUFDcUIsSUFBUCxDQUFZLENBQUN5QixJQUFJLENBQUNsRCxHQUFMLEdBQVd1RixDQUFaLEVBQWVyQyxJQUFJLENBQUNqRCxNQUFwQixDQUFaO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPRyxNQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTSSxVQUFULEdBQXNCO0FBQ3BCLFFBQUksQ0FBQzhELE1BQUwsRUFBYSxPQUFPSCxTQUFQO0FBQ2IsV0FBT0ksV0FBVyxFQUFsQjtBQUNEOztBQUVELFNBQU87QUFDTGxGLElBQUFBLEVBQUUsRUFBRkEsRUFESztBQUVMNEIsSUFBQUEsSUFBSSxFQUFKQSxJQUZLO0FBR0x3RyxJQUFBQSxJQUFJLEVBQUpBLElBSEs7QUFJTHJGLElBQUFBLElBQUksRUFBSkEsSUFKSztBQUtMRyxJQUFBQSxJQUFJLEVBQUpBLElBTEs7QUFNTFksSUFBQUEsWUFBWSxFQUFaQSxZQU5LO0FBT0x3RSxJQUFBQSxTQUFTLEVBQVRBLFNBUEs7QUFRTGpFLElBQUFBLGVBQWUsRUFBZkEsZUFSSztBQVNMSixJQUFBQSxHQUFHLEVBQUhBLEdBVEs7QUFVTFcsSUFBQUEsTUFBTSxFQUFOQSxNQVZLO0FBV0xILElBQUFBLEdBQUcsRUFBSEEsR0FYSztBQVlMUSxJQUFBQSxNQUFNLEVBQU5BLE1BWks7QUFhTEMsSUFBQUEsV0FBVyxFQUFYQSxXQWJLO0FBY0wvRCxJQUFBQSxVQUFVLEVBQVZBO0FBZEssR0FBUDtBQWdCRCxDQXRMRDs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUEsaUVBQWUsQ0FBQyxZQUFNO0FBQ3BCLE1BQU1vSCxRQUFRLEdBQUc7QUFDZkMsSUFBQUEsSUFBSSxFQUFFQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FEUztBQUVmckksSUFBQUEsT0FBTyxFQUFFLENBQ1BvSSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBRE8sRUFFUEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUZPO0FBRk0sR0FBakI7QUFRQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsV0FBU0MsVUFBVCxDQUFvQmhJLEdBQXBCLEVBQXlCQyxNQUF6QixFQUFpQztBQUMvQixRQUFNZ0ksSUFBSSxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBRCxJQUFBQSxJQUFJLENBQUNFLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixNQUFuQjtBQUNBSCxJQUFBQSxJQUFJLENBQUNJLE9BQUwsQ0FBYXJJLEdBQWIsR0FBbUJBLEdBQW5CO0FBQ0FpSSxJQUFBQSxJQUFJLENBQUNJLE9BQUwsQ0FBYXBJLE1BQWIsR0FBc0JBLE1BQXRCO0FBQ0EsV0FBT2dJLElBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVNLLFlBQVQsQ0FBc0JySCxJQUF0QixFQUE0QnNILHVCQUE1QixFQUFxREMsd0JBQXJELEVBQStFO0FBQzdFLFFBQU1DLFFBQVEsR0FBR1gsUUFBUSxDQUFDSSxhQUFULENBQXVCLEtBQXZCLENBQWpCO0FBQ0FPLElBQUFBLFFBQVEsQ0FBQ04sU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBdkI7O0FBQ0EsU0FBSyxJQUFJcEksR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR2lCLElBQXhCLEVBQThCakIsR0FBRyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFdBQUssSUFBSUMsTUFBTSxHQUFHLENBQWxCLEVBQXFCQSxNQUFNLEdBQUdnQixJQUE5QixFQUFvQ2hCLE1BQU0sSUFBSSxDQUE5QyxFQUFpRDtBQUMvQyxZQUFNeUksT0FBTyxHQUFHVixVQUFVLENBQUNoSSxHQUFELEVBQU1DLE1BQU4sQ0FBMUI7QUFDQSxZQUFJRCxHQUFHLEtBQUssQ0FBWixFQUFlMEksT0FBTyxDQUFDUCxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixhQUF0QjtBQUNmLFlBQUluSSxNQUFNLEtBQUssQ0FBZixFQUFrQnlJLE9BQU8sQ0FBQ1AsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsWUFBdEI7O0FBQ2xCLFlBQUlHLHVCQUF1QixDQUFDdkksR0FBRCxFQUFNQyxNQUFOLENBQTNCLEVBQTBDO0FBQ3hDeUksVUFBQUEsT0FBTyxDQUFDUCxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixZQUF0QjtBQUNELFNBRkQsTUFFTyxJQUFJSSx3QkFBd0IsQ0FBQ3hJLEdBQUQsRUFBTUMsTUFBTixDQUE1QixFQUEyQztBQUNoRHlJLFVBQUFBLE9BQU8sQ0FBQ1AsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsZUFBdEI7QUFDRDs7QUFDREssUUFBQUEsUUFBUSxDQUFDRSxXQUFULENBQXFCRCxPQUFyQjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT0QsUUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0csYUFBVCxDQUF1QjNILElBQXZCLEVBQTZCakMsVUFBN0IsRUFBeUM2SixpQkFBekMsRUFBNEQ7QUFDMUQsUUFBTUMsU0FBUyxHQUFHaEIsUUFBUSxDQUFDSSxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FZLElBQUFBLFNBQVMsQ0FBQ1gsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsV0FBeEI7O0FBQ0EsU0FBSyxJQUFJcEksR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR2lCLElBQXhCLEVBQThCakIsR0FBRyxJQUFJLENBQXJDLEVBQXdDO0FBQ3RDLFdBQUssSUFBSUMsTUFBTSxHQUFHLENBQWxCLEVBQXFCQSxNQUFNLEdBQUdnQixJQUE5QixFQUFvQ2hCLE1BQU0sSUFBSSxDQUE5QyxFQUFpRDtBQUMvQyxZQUFNOEksUUFBUSxHQUFHZixVQUFVLENBQUNoSSxHQUFELEVBQU1DLE1BQU4sQ0FBM0I7QUFDQSxZQUFJRCxHQUFHLEtBQUssQ0FBWixFQUFlK0ksUUFBUSxDQUFDWixTQUFULENBQW1CQyxHQUFuQixDQUF1QixhQUF2QjtBQUNmLFlBQUluSSxNQUFNLEtBQUssQ0FBZixFQUFrQjhJLFFBQVEsQ0FBQ1osU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsWUFBdkI7QUFDbEIsWUFBSVMsaUJBQWlCLENBQUM3SSxHQUFELEVBQU1DLE1BQU4sQ0FBckIsRUFBb0M4SSxRQUFRLENBQUNaLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFNBQXZCO0FBQ3BDVSxRQUFBQSxTQUFTLENBQUNILFdBQVYsQ0FBc0JJLFFBQXRCO0FBQ0Q7QUFDRjs7QUFDRCxZQUFRL0osVUFBUjtBQUNFLFdBQUssSUFBTDtBQUNFOEosUUFBQUEsU0FBUyxDQUFDWCxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixNQUF4QjtBQUNBOztBQUNGLFdBQUssT0FBTDtBQUNFVSxRQUFBQSxTQUFTLENBQUNYLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLE1BQXhCO0FBQ0E7O0FBQ0Y7QUFDRTtBQVJKOztBQVVBLFdBQU9VLFNBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBUzNKLFNBQVQsQ0FDRThCLElBREYsRUFFRStILFFBRkYsRUFHRWhLLFVBSEYsRUFJRTZKLGlCQUpGLEVBS0VOLHVCQUxGLEVBTUVDLHdCQU5GLEVBT0U7QUFDQSxRQUFNdEUsTUFBTSxHQUFHMEQsUUFBUSxDQUFDbEksT0FBVCxDQUFpQnNKLFFBQWpCLEVBQTJCakIsYUFBM0IsQ0FBeUMsUUFBekMsQ0FBZjtBQUNBLFFBQU1VLFFBQVEsR0FBR0gsWUFBWSxDQUFDckgsSUFBRCxFQUFPc0gsdUJBQVAsRUFBZ0NDLHdCQUFoQyxDQUE3QjtBQUNBLFFBQU1NLFNBQVMsR0FBR0YsYUFBYSxDQUFDM0gsSUFBRCxFQUFPakMsVUFBUCxFQUFtQjZKLGlCQUFuQixDQUEvQjtBQUNBM0UsSUFBQUEsTUFBTSxDQUFDeUUsV0FBUCxDQUFtQkYsUUFBbkI7QUFDQXZFLElBQUFBLE1BQU0sQ0FBQ3lFLFdBQVAsQ0FBbUJHLFNBQW5CO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU3hJLG9CQUFULENBQThCTixHQUE5QixFQUFtQ0MsTUFBbkMsRUFBMkMrSSxRQUEzQyxFQUFxREMsWUFBckQsRUFBbUU7QUFDakUsUUFBTUMsYUFBYSxHQUFHdEIsUUFBUSxDQUFDbEksT0FBVCxDQUFpQnNKLFFBQWpCLENBQXRCO0FBQ0EsUUFBTUcsWUFBWSxHQUFHRCxhQUFhLENBQUNuQixhQUFkLENBQTRCLG9CQUE1QixDQUFyQjtBQUNBLFFBQU1FLElBQUksR0FBR2tCLFlBQVksQ0FBQ3BCLGFBQWIsNEJBQThDL0gsR0FBOUMsK0JBQW9FQyxNQUFwRSxTQUFiO0FBQ0EsUUFBSWdKLFlBQVksS0FBSzlFLFNBQXJCLEVBQWdDLE9BSmlDLENBSXpCOztBQUN4QyxRQUFJOEUsWUFBSixFQUFrQjtBQUFFO0FBQ2xCaEIsTUFBQUEsSUFBSSxDQUFDRSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsWUFBbkI7QUFDRCxLQUZELE1BRU87QUFBRTtBQUNQSCxNQUFBQSxJQUFJLENBQUNFLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixlQUFuQjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxXQUFTN0gsZUFBVCxDQUF5QnlJLFFBQXpCLEVBQW1DSSxlQUFuQyxFQUFvRDtBQUNsRCxRQUFNRixhQUFhLEdBQUd0QixRQUFRLENBQUNsSSxPQUFULENBQWlCc0osUUFBakIsQ0FBdEI7QUFDQSxRQUFNRyxZQUFZLEdBQUdELGFBQWEsQ0FBQ25CLGFBQWQsQ0FBNEIsb0JBQTVCLENBQXJCO0FBQ0FxQixJQUFBQSxlQUFlLENBQUN6SixPQUFoQixDQUF3QixVQUFDNEUsV0FBRCxFQUFpQjtBQUN2Q0EsTUFBQUEsV0FBVyxDQUFDNUUsT0FBWixDQUFvQixVQUFDMEosVUFBRCxFQUFnQjtBQUNsQyxZQUFNcEIsSUFBSSxHQUFHa0IsWUFBWSxDQUFDcEIsYUFBYiw0QkFBOENzQixVQUFVLENBQUMsQ0FBRCxDQUF4RCwrQkFBOEVBLFVBQVUsQ0FBQyxDQUFELENBQXhGLFNBQWI7QUFDQXBCLFFBQUFBLElBQUksQ0FBQ0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO0FBQ0QsT0FIRDtBQUlELEtBTEQ7QUFNRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFdBQVN4SCxpQkFBVCxDQUEyQjBJLFFBQTNCLEVBQXFDO0FBQ25DMUIsSUFBQUEsUUFBUSxDQUFDbEksT0FBVCxDQUFpQkMsT0FBakIsQ0FBeUIsVUFBQ3VKLGFBQUQsRUFBbUI7QUFDMUMsVUFBTUMsWUFBWSxHQUFHRCxhQUFhLENBQUNuQixhQUFkLENBQTRCLG9CQUE1QixDQUFyQjtBQUNBLFVBQU13QixLQUFLLEdBQUdKLFlBQVksQ0FBQ0ssZ0JBQWIsQ0FBOEIsT0FBOUIsQ0FBZDtBQUNBRCxNQUFBQSxLQUFLLENBQUM1SixPQUFOLENBQWMsVUFBQ3NJLElBQUQsRUFBVTtBQUN0QkEsUUFBQUEsSUFBSSxDQUFDd0IsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBQSxpQkFBTUgsUUFBUSxDQUMzQ3ZDLFFBQVEsQ0FBQ2tCLElBQUksQ0FBQ0ksT0FBTCxDQUFhckksR0FBZCxFQUFtQixFQUFuQixDQURtQyxFQUUzQytHLFFBQVEsQ0FBQ2tCLElBQUksQ0FBQ0ksT0FBTCxDQUFhcEksTUFBZCxFQUFzQixFQUF0QixDQUZtQyxFQUczQzhHLFFBQVEsQ0FBQ21DLGFBQWEsQ0FBQ2IsT0FBZCxDQUFzQmhKLEVBQXZCLEVBQTJCLEVBQTNCLENBSG1DLENBQWQ7QUFBQSxTQUEvQjtBQUtELE9BTkQ7QUFPRCxLQVZEO0FBV0QsR0EvSm1CLENBaUtwQjs7O0FBRUEsU0FBTztBQUNMRixJQUFBQSxTQUFTLEVBQVRBLFNBREs7QUFFTG1CLElBQUFBLG9CQUFvQixFQUFwQkEsb0JBRks7QUFHTEMsSUFBQUEsZUFBZSxFQUFmQSxlQUhLO0FBSUxLLElBQUFBLGlCQUFpQixFQUFqQkE7QUFKSyxHQUFQO0FBTUQsQ0F6S2MsR0FBZjs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Q0FRQTs7QUFDQTtBQUVBOEksd0VBQUEsQ0FBZ0NwTCw4Q0FBaEMsRUFBdUNELDJDQUF2QztBQUNBcUwsOERBQUE7QUFDQUEsNEVBQUE7QUFDQUEsNkRBQUEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL25vcm0uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL21vZGVscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qIGJvYXJkICovXFxuICAtLWJvYXJkLXNpemU6IDEwO1xcbiAgLS1ncmlkLXNpemU6IDJyZW07XFxuXFxuICAvKiBjb2xvciAqL1xcbiAgLS13aGl0ZTogd2hpdGU7XFxuICAtLWJsYWNrOiBibGFjaztcXG4gIC0tZ3JheTogZ3JheTtcXG4gIC0tYmx1ZTogYmx1ZTtcXG4gIC0tb3JhbmdlOiBvcmFuZ2U7XFxuICAtLXJlZDogcmVkO1xcbiAgLS1ib2FyZC1ib3JkZXI6IHZhcigtLWJsYWNrKTtcXG4gIC0taGl0OiB2YXIoLS1vcmFuZ2UpO1xcbiAgLS1taXNzZWQ6IHZhcigtLWdyYXkpO1xcbiAgLS1zdW5rOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcmVtO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2VhTGF5ZXIsXFxuLmJvYXJkID4gLnNoaXBMYXllciB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBvcGFjaXR5OiAuNTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ib2FyZC1zaXplKSwgdmFyKC0tZ3JpZC1zaXplKSk7XFxufVxcblxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIuc2hvdyB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2hpcExheWVyLmhpZGUge1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5ib2FyZCAuZ3JpZCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC51cHBlckJvcmRlciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLmxlZnRCb3JkZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQuaGFzU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLmFscmVhZHlIaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLmFscmVhZHlNaXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzc2VkKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLmFscmVhZHlIaXQuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdW5rKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7RUFFakIsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0VBQWtFO0VBQ2xFLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9ub3JtLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLyogYm9hcmQgKi9cXG4gIC0tYm9hcmQtc2l6ZTogMTA7XFxuICAtLWdyaWQtc2l6ZTogMnJlbTtcXG5cXG4gIC8qIGNvbG9yICovXFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tYmxhY2s6IGJsYWNrO1xcbiAgLS1ncmF5OiBncmF5O1xcbiAgLS1ibHVlOiBibHVlO1xcbiAgLS1vcmFuZ2U6IG9yYW5nZTtcXG4gIC0tcmVkOiByZWQ7XFxuICAtLWJvYXJkLWJvcmRlcjogdmFyKC0tYmxhY2spO1xcbiAgLS1oaXQ6IHZhcigtLW9yYW5nZSk7XFxuICAtLW1pc3NlZDogdmFyKC0tZ3JheSk7XFxuICAtLXN1bms6IHZhcigtLXJlZCk7XFxufVxcblxcbi5ib2FyZCB7XFxuICBtYXJnaW46IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjByZW07XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllcixcXG4uYm9hcmQgPiAuc2hpcExheWVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIG9wYWNpdHk6IC41O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXNpemUpLCB2YXIoLS1ncmlkLXNpemUpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLXNpemUpLCB2YXIoLS1ncmlkLXNpemUpKTtcXG59XFxuXFxuLmJvYXJkID4gLnNoaXBMYXllci5zaG93IHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIuaGlkZSB7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLnVwcGVyQm9yZGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQubGVmdEJvcmRlciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5oYXNTaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQuYWxyZWFkeUhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQuYWxyZWFkeU1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWQpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQuYWxyZWFkeUhpdC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmspO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ub3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSwwSkFBMEo7QUFDNUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiaW1wb3J0IEdhbWUsIHtcbiAgQUksXG4gIEhVTUFOLFxuICBFQVNZLFxuICBOT1JNQUwsXG4gIEhBUkQsXG59IGZyb20gJy4vbW9kZWxzL2dhbWUnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuZXhwb3J0IHtcbiAgQUksXG4gIEhVTUFOLFxuICBFQVNZLFxuICBOT1JNQUwsXG4gIEhBUkQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSAyIHBsYXllcnMgd2l0aCByYW5kb21seSBhdXRvZmlsbGVkIGJvYXJkXG4gICAqIGJlZm9yZSBzdGFydGluZyB0byBkcmF3IHRoZSBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGluaXRQbGF5ZXJzQW5kQm9hcmRzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSkge1xuICAgIEdhbWUuaW5pdFBsYXllcnNBbmRCb2FyZHMocGxheWVyMVR5cGUsIHBsYXllcjJUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIFZpZXcgbW9kdWxlIHRvIGRyYXcgdGhlIGJvYXJkIG9mIGEgY2VydGFpbiBwbGF5ZXIuXG4gICAqL1xuICBmdW5jdGlvbiBkcmF3QVNpbmdsZUJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IHBsYXllclR5cGUgPSAocGxheWVyLmlzQUkoKSkgPyAnYWknIDogJ2h1bWFuJztcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5ib2FyZCgpO1xuICAgIFZpZXcuZHJhd0JvYXJkKFxuICAgICAgR2FtZS5ERUZBVUxUX0JPQVJEX1NJWkUsXG4gICAgICBwbGF5ZXIuaWQoKSxcbiAgICAgIHBsYXllclR5cGUsXG4gICAgICBib2FyZC5jYW5IaXRTaGlwLFxuICAgICAgYm9hcmQuYWxyZWFkeUhpdCxcbiAgICAgIGJvYXJkLmFscmVhZHlNaXNzZWQsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGJvYXJkIGZvciBlYWNoIHBsYXllci5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdCb2FyZHMoKSB7XG4gICAgR2FtZS5wbGF5ZXJzKCkuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICBkcmF3QVNpbmdsZUJvYXJkKHBsYXllcik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2FtZW92ZXIgbG9naWMuXG4gICAqL1xuICBmdW5jdGlvbiBnYW1lb3Zlcihsb3NlcklkKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgYWxlcnQoYCR7bG9zZXJJZH0gbG9zZSFgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3R1YWwgYXR0YWNrIGxvZ2ljLlxuICAgKiBXaGVuIGh1bWFuIHBsYXllciBjbGljayBvbiB0aGUgYm9hcmQsIFZpZXcgbW9kdWxlIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uLlxuICAgKiBXaGVuIEFJIHBsYXllciBkZWNpZGUgdGhlIHRhcmdldCBwb3NpdGlvbiBvZiBuZXh0IGF0dGFjaywgaXQgd2lsbCBhbHNvXG4gICAqIGNhbGxiYWNrIHRoaXMgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdpcmQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBvcHBvbmVudElkIElkIG9mIG9wcG9uZW50IHBsYXllci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVuZGVyU2VhQ2FsbGJhY2sgUmVuZGVyIHRoZSBncmlkIGNvbG9yIGFjY29yZGluZ1xuICAgKiB0byB0aGUgYXR0YWNrIHJlc3VsdChoaXQgb3IgbWlzcykuXG4gICAqL1xuICBmdW5jdGlvbiBwbGF5ZXJBdHRhY2socm93LCBjb2x1bW4sIG9wcG9uZW50SWQpIHtcbiAgICBjb25zdCBib2FyZCA9IEdhbWUucGxheWVyKG9wcG9uZW50SWQpLmJvYXJkKCk7XG4gICAgaWYgKGJvYXJkLmFscmVhZHlCZWVuQXR0YWNrZWQocm93LCBjb2x1bW4pKSByZXR1cm47XG4gICAgY29uc3QgcmVzdWx0ID0gYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgVmlldy5yZW5kZXJTZWFBZnRlckF0dGFjayhyb3csIGNvbHVtbiwgb3Bwb25lbnRJZCwgcmVzdWx0KTtcbiAgICBWaWV3LnJlbmRlclN1bmtTaGlwcyhvcHBvbmVudElkLCBib2FyZC5yZXBvcnRTdW5rKCkpO1xuICAgIGlmIChib2FyZC5hbGxTdW5rKCkpIGdhbWVvdmVyKG9wcG9uZW50SWQpO1xuICAgIEdhbWUubmV4dFR1cm4ocGxheWVyQXR0YWNrKTsgLy8gcGFzcyBpdHNlbGYgdG8gdGhlIEdhbWUgbW9kdWxlIGFzIGEgY2FsbGJhY2suXG4gIH1cblxuICAvKipcbiAgICogUGFzcyB0aGUgYXR0YWNrIGxvZ2ljIHRvIHRoZSBWaWV3IG1vZHVsZSBhcyBhIGNhbGxiYWNrLlxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrKCkge1xuICAgIFZpZXcuYmluZFJlY2VpdmVBdHRhY2socGxheWVyQXR0YWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBHYW1lLnN0YXJ0KCk7XG4gICAgR2FtZS5uZXh0VHVybihwbGF5ZXJBdHRhY2spOyAvLyBwYXNzIGl0c2VsZiB0byB0aGUgR2FtZSBtb2R1bGUgYXMgYSBjYWxsYmFjay5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdFBsYXllcnNBbmRCb2FyZHMsXG4gICAgZHJhd0FTaW5nbGVCb2FyZCxcbiAgICBkcmF3Qm9hcmRzLFxuICAgIGVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjayxcbiAgICBzdGFydEdhbWUsXG4gIH07XG59KSgpO1xuIiwibGV0IFVOSVRfVEVTVDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcblVOSVRfVEVTVCA9IHRydWU7IC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBhZnRlciB1bml0IHRlc3QuXG5cbmNvbnN0IERFRkFVTFRfQk9BUkRfU0laRSA9IDEwO1xuXG4vKipcbiAqIEJvYXJkIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBCb2FyZCBtYWdhZ2VzIFNoaXBzLCBhbmQgY2hlY2sgdGhlIGhpdCBmb3IgdXNlci5cbiAqIEBwYXJhbSB7TnVtYmVyfSBpblNpemUgU2l6ZSBvZiB0aGUgZ2FtZSBib2FyZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluU2l6ZSkgPT4ge1xuICAvKipcbiAgICogQm9hcmQgcGxhaW4gb2JqZWN0LlxuICAgKi9cbiAgY29uc3QgYm9hcmQgPSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICBzaXplOiBpblNpemUgfHwgREVGQVVMVF9CT0FSRF9TSVpFLFxuICAgIGZsZWV0OiBbXSxcbiAgICBoaXRzOiBbXSxcbiAgICBtaXNzZXM6IFtdLFxuICAgIGludGFjdDogW10sXG4gIH07XG5cbiAgLyoqXG4gICAqIEFsbG93IG90aGVyIG1vZHVsZXMgdG8gY2hlY2sgdGhlIHNpemUgb2YgdGhlIGJvYXJkLlxuICAgKiBAcmV0dXJucyBCb2FyZCBzaXplLlxuICAgKi9cbiAgZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICByZXR1cm4gYm9hcmQuc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGdldCB0aGUgbGlzdCBvZiBhbGwgaW50YWN0IHBvc2l0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gaW50YWN0KCkge1xuICAgIHJldHVybiBib2FyZC5pbnRhY3Q7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgb3RoZXIgbW9kdWxlcyB0byBjaGVjayBzaXplIG9mIGN1cnJlbnQgZmxlZXQuXG4gICAqL1xuICBmdW5jdGlvbiBmbGVldFNpemUoKSB7XG4gICAgcmV0dXJuIGJvYXJkLmZsZWV0Lmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBib2FyZCwgcHV0IGFsbCBpbnRhY3QgcG9zaXRpb24gaW50byBib2FyZC5pbnRhY3QgYXJyYXkuXG4gICAqIFRoZSBwb3NpdGlvbiBbcm93LCBjb2x1bW5dIGlzIGNvZGVkIGFzOiBcInJvdy1jb2x1bW5cIi5cbiAgICovXG4gIGZ1bmN0aW9uIGZpbGxJbnRhY3QoKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQuc2l6ZTsgcm93ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IGJvYXJkLnNpemU7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGJvYXJkLmludGFjdC5wdXNoKGAke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHBvaW50IGZyb20gdGhlIGJvYXJkLmludGFjdCBhcnJheS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0ciBQb3NpdGlvbiBzdHJpbmcuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVGcm9tSW50YWN0KHN0cikge1xuICAgIGNvbnN0IGluZGV4ID0gYm9hcmQuaW50YWN0LmZpbmRJbmRleCgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSBzdHIpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcbiAgICBib2FyZC5pbnRhY3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgbmV3IHNoaXAgc2l0cyBpbiB0aGUgZml4ZWQgc2hpcCdzIGZvcmJpZGVuIHpvbmUuXG4gICAqIEBwYXJhbSB7U2hpcH0gZml4ZWRTaGlwIFRoZSBzaGlwIGFscmVhZHkgcHV0IG9uIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtBcnJheX0gbmV3SGVhZCBIZWFkIHBvc2l0aW9uW3JvdywgY29sdW1uXSBvZiB0aGUgbmV3IHNoaXAuXG4gICAqIEBwYXJhbSB7QXJyYXl9IG5ld1RhaWwgVGFpbCBwb3NpdGlvbltyb3csIGNvbHVtbl0gb2YgdGhlIG5ldyBzaGlwLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZXNlIHR3byBzaGlwcyBoYXZlIG92ZXJsYXAgZWFjaCBvdGhlciwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNPdmVybGFwKGZpeGVkU2hpcCwgbmV3SGVhZCwgbmV3VGFpbCkge1xuICAgIGNvbnN0IFtoZWFkUm93LCBoZWFkQ29sdW1uXSA9IGZpeGVkU2hpcC5oZWFkKCk7XG4gICAgY29uc3QgW3RhaWxSb3csIHRhaWxDb2x1bW5dID0gZml4ZWRTaGlwLnRhaWwoKTtcbiAgICBjb25zdCBvdmVybGFwUm93U3RhcnQgPSBNYXRoLm1heCgwLCBoZWFkUm93IC0gMSk7XG4gICAgY29uc3Qgb3ZlcmxhcENvbHVtblN0YXJ0ID0gTWF0aC5tYXgoMCwgaGVhZENvbHVtbiAtIDEpO1xuICAgIGNvbnN0IG92ZXJsYXBSb3dFbmQgPSBNYXRoLm1pbihib2FyZC5zaXplIC0gMSwgdGFpbFJvdyArIDEpO1xuICAgIGNvbnN0IG92ZXJsYXBDb2x1bW5FbmQgPSBNYXRoLm1pbihib2FyZC5zaXplIC0gMSwgdGFpbENvbHVtbiArIDEpO1xuICAgIGlmIChuZXdIZWFkWzBdIC0gbmV3VGFpbFswXSA9PT0gMCkgeyAvLyBpcyBob3Jpem9udGFsXG4gICAgICBpZiAobmV3SGVhZFswXSA8IG92ZXJsYXBSb3dTdGFydCB8fCBuZXdIZWFkWzBdID4gb3ZlcmxhcFJvd0VuZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKG5ld1RhaWxbMV0gPCBvdmVybGFwQ29sdW1uU3RhcnQgfHwgbmV3SGVhZFsxXSA+IG92ZXJsYXBDb2x1bW5FbmQpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAobmV3SGVhZFsxXSA8IG92ZXJsYXBDb2x1bW5TdGFydCB8fCBuZXdIZWFkWzFdID4gb3ZlcmxhcENvbHVtbkVuZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChuZXdUYWlsWzBdIDwgb3ZlcmxhcFJvd1N0YXJ0IHx8IG5ld0hlYWRbMF0gPiBvdmVybGFwUm93RW5kKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHRhcmdldCBwb3NpdGlvbltyb3csIGNvbHVtbl0gaXMgYXZhaWxhYmxlIGZvciBhIHNwZWNpZmljIHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgVGFyZ2V0IHJvdy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBUYXJnZXQgY29sdW1uLlxuICAgKiBAcGFyYW0ge1NoaXB9IHNoaXAgVGhlIHNoaXAgdG8gYmUgcHV0IGludG8gdGhlIGJvYXJkLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGlzIG9rLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBhdmFpbGFibGUocm93LCBjb2x1bW4sIHNoaXApIHtcbiAgICAvLyBjaGVjayBoZWFkXG4gICAgaWYgKHJvdyA8IDBcbiAgICAgIHx8IHJvdyA+PSBib2FyZC5zaXplXG4gICAgICB8fCBjb2x1bW4gPCAwXG4gICAgICB8fCBjb2x1bW4gPj0gYm9hcmQuc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBjaGVjayB0YWlsXG4gICAgY29uc3QgdGFpbFJvdyA9IChzaGlwLmlzSG9yaXpvbnRhbCgpKSA/IHJvdyA6IChyb3cgKyBzaGlwLnNpemUoKSAtIDEpO1xuICAgIGNvbnN0IHRhaWxDb2x1bW4gPSAoc2hpcC5pc0hvcml6b250YWwoKSkgPyAoY29sdW1uICsgc2hpcC5zaXplKCkgLSAxKSA6IGNvbHVtbjtcbiAgICBpZiAodGFpbFJvdyA8IDBcbiAgICAgIHx8IHRhaWxSb3cgPj0gYm9hcmQuc2l6ZVxuICAgICAgfHwgdGFpbENvbHVtbiA8IDBcbiAgICAgIHx8IHRhaWxDb2x1bW4gPj0gYm9hcmQuc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBjaGVjayBvdmVybGFwXG4gICAgY29uc3QgbmV3SGVhZCA9IFtyb3csIGNvbHVtbl07XG4gICAgY29uc3QgbmV3VGFpbCA9IFt0YWlsUm93LCB0YWlsQ29sdW1uXTtcbiAgICBpZiAoYm9hcmQuZmxlZXQuc29tZSgoZml4ZWRTaGlwKSA9PiBpc092ZXJsYXAoZml4ZWRTaGlwLCBuZXdIZWFkLCBuZXdUYWlsKSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXQgc2hpcCBpbnRvIGEgY2VydGFpbiBwb3NpdGlvbiBpZiBpdCdzIGF2YWlsYWJsZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0aGUgc2hpcCBoZWFkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRoZSBzaGlwIGhlYWQuXG4gICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBUaGUgc2hpcCBvYmplY3QuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhpcyBwb3NpdGlvbiBpcyBsZWdhbCBmb3IgYSBuZXcgc2hpcCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gcHV0U2hpcChyb3csIGNvbHVtbiwgc2hpcCkge1xuICAgIHNoaXAucHV0KHJvdywgY29sdW1uKTtcbiAgICBib2FyZC5mbGVldC5wdXNoKHNoaXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNoaXAgZnJvbSB0aGUgYm9hcmQgZmxlZXQgKG9ubHkgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBmbGVldCkuXG4gICAqIEBwYXJhbSB7U2hpcH0gU2hpcCB0byBiZSByZW1vdmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgaW5kZXggPSBib2FyZC5mbGVldC5maW5kSW5kZXgoKGZsZWV0U2hpcCkgPT4gZmxlZXRTaGlwLmlkKCkgPT09IHNoaXAuaWQoKSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgIGJvYXJkLmZsZWV0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogT25seSB1c2VkIHRvIHRvZ2dsZSBzaGlwcyBhbHJlYWR5IGluIHRoZSBmbGVldC5cbiAgICogQHBhcmFtIHtTaGlwfSBzaGlwIFRhcmdldCBzaGlwLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRvZ2dsZWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUZsZWV0U2hpcChzaGlwKSB7XG4gICAgcmVtb3ZlU2hpcChzaGlwKTtcbiAgICBzaGlwLnRvZ2dsZURpcmVjdGlvbigpO1xuICAgIGlmIChhdmFpbGFibGUoLi4uc2hpcC5oZWFkKCksIHNoaXApKSB7XG4gICAgICBwdXRTaGlwKC4uLnNoaXAuaGVhZCgpLCBzaGlwKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgdG9nZ2xlXG4gICAgc2hpcC50b2dnbGVEaXJlY3Rpb24oKTsgLy8gYmFjayB0byBvcmdpbmFsIGRpcmVjdGlvblxuICAgIHB1dFNoaXAoLi4uc2hpcC5oZWFkKCksIHNoaXApOyAvLyBwdXQgYmFjayB0byBmbGVldFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gcG9zaXRpb25bcm93LCBjb2x1bW5dIGVxdWFsIHRvIGVhY2ggb3RoZXIuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvc2l0aW9uQSBbcm93LCBjb2x1bW5dXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvc2l0aW9uQiBbcm93LCBjb2x1bW5dXG4gICAqIEByZXR1cm5zIHRydWUgaWYgZXF1YWwsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHBvc2l0aW9uRXF1YWwocG9zaXRpb25BLCBwb3NpdGlvbkIpIHtcbiAgICByZXR1cm4gKHBvc2l0aW9uQVswXSA9PT0gcG9zaXRpb25CWzBdKSAmJiAocG9zaXRpb25BWzFdID09PSBwb3NpdGlvbkJbMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgcG9zaXRpb24gaGFzIGJlZW4gaGl0IGJlZm9yZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0YXJnZXQgaGFzIGJlZW4gaGl0IGJlZm9yZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxyZWFkeUhpdChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5oaXRzLnNvbWUoKGhpdCkgPT4gcG9zaXRpb25FcXVhbChoaXQsIFtyb3csIGNvbHVtbl0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGVhdGhlciB0aGUgdGFyZ2V0IHBvc2l0aW9uIGhhcyBiZWVuIGF0dGFja2VkXG4gICAqIGJ1dCBpdCB3YXMgYSBtaXNzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGl0IHdhcyBhIG1pc3MsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFscmVhZHlNaXNzZWQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYm9hcmQubWlzc2VzLnNvbWUoKG1pc3MpID0+IHBvc2l0aW9uRXF1YWwobWlzcywgW3JvdywgY29sdW1uXSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgZXhpc3RzIGluIGF0dGFjayBoaXN0b3J5IGJvYXJkLmhpdHMgb3IgYm9hcmQubWlzc2VzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRhcmdldCBoYXMgYmVlbiBhdHRhY2tlZCBiZWZvcmUsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFscmVhZHlCZWVuQXR0YWNrZWQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYWxyZWFkeUhpdChyb3csIGNvbHVtbikgfHwgYWxyZWFkeU1pc3NlZChyb3csIGNvbHVtbik7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsbHkgdHJ5IHRvIGhpdCBhIHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgY2FuIGhpdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gdHJ5SGl0U2hpcChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5zb21lKChmbGVldFNoaXApID0+IGZsZWV0U2hpcC5oaXQocm93LCBjb2x1bW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgYXR0YWNrIGNhbiBoaXQgYSBzaGlwLlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXNuJ3QgYWN0dWFsbHkgaGl0IHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGFyZ2V0IGdyaWQuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgY2FuIGhpdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gY2FuSGl0U2hpcChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5zb21lKChmbGVldFNoaXApID0+IGZsZWV0U2hpcC5jYW5IaXQocm93LCBjb2x1bW4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnkgdG8gaGl0IGVhY2ggb2YgdGhlIHNoaXBzIGluIHRoZSBib2FyZC5mbGVldCxcbiAgICogb25seSBpZiB0aGUgdGFyZ2V0IHBvc2l0aW9uIGhhcyBuZXZlciBiZWVuIGF0dGFja2VkIGJlZm9yZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGlZIG9mIHRhcmdldC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGlYIG9mIHRhcmdldC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICogIHRydWUsIGlmIGhpdC5cbiAgICogIGZhbHNlLCBpZiBtaXNzZWQuXG4gICAqICB1bmRlZmluZWQsIGlmIGFscmVhZHkgYmVlbiBhdHRhY2tlZCBiZWZvcmUuXG4gICAqL1xuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gW3JvdywgY29sdW1uXTtcbiAgICAvLyBNdXN0IGJlIHVuZGVmaW5lZC4gSWYgcmV0dXJuIGZhbHNlLCB3aWxsIGJlIGNvbnNpZGVyZWQgYXMgYSBtaXNzLlxuICAgIGlmIChhbHJlYWR5QmVlbkF0dGFja2VkKC4uLnRhcmdldCkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3QgaGl0ID0gdHJ5SGl0U2hpcChyb3csIGNvbHVtbik7XG4gICAgaWYgKGhpdCkge1xuICAgICAgYm9hcmQuaGl0cy5wdXNoKHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkLm1pc3Nlcy5wdXNoKHRhcmdldCk7XG4gICAgfVxuICAgIHJlbW92ZUZyb21JbnRhY3QoYCR7cm93fS0ke2NvbHVtbn1gKTtcbiAgICByZXR1cm4gaGl0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydCBhbGwgY29vcmRpbmF0ZXMgb2Ygc3VuayBzaGlwcy5cbiAgICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIHRoZSBjb29yZGluYXRlcyBvZiBhbGwgc3VuayBzaGlwcy5cbiAgICovXG4gIGZ1bmN0aW9uIHJlcG9ydFN1bmsoKSB7XG4gICAgcmV0dXJuIGJvYXJkLmZsZWV0LnJlZHVjZSgoYXJyLCBmbGVldFNoaXApID0+IHtcbiAgICAgIGlmIChmbGVldFNoaXAuaXNTdW5rKCkpIGFyci5wdXNoKGZsZWV0U2hpcC5jb29yZGluYXRlcygpKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFsbCBzaGlwcyBhcmUgc3Vuay5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBhbGwgc2hpcHMgYXJlIHN1bmssIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gICAgcmV0dXJuIGJvYXJkLmZsZWV0LmV2ZXJ5KChmbGVldFNoaXApID0+IGZsZWV0U2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYm9hcmQuXG4gICAqL1xuICBmaWxsSW50YWN0KCk7XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBBUElcbiAgICovXG4gIGNvbnN0IGFwaSA9IHtcbiAgICBzaXplLFxuICAgIGludGFjdCxcbiAgICBmbGVldFNpemUsXG4gICAgYXZhaWxhYmxlLFxuICAgIHB1dFNoaXAsXG4gICAgcmVtb3ZlU2hpcCxcbiAgICB0b2dnbGVGbGVldFNoaXAsXG4gICAgYWxyZWFkeUhpdCxcbiAgICBhbHJlYWR5TWlzc2VkLFxuICAgIGFscmVhZHlCZWVuQXR0YWNrZWQsXG4gICAgY2FuSGl0U2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHJlcG9ydFN1bmssXG4gICAgYWxsU3VuayxcbiAgfTtcblxuICAvKipcbiAgICogQVBJIG9ubHkgZm9yIHVuaXQgdGVzdC5cbiAgICovXG4gIGlmIChVTklUX1RFU1QpIHtcbiAgICBhcGkuYm9hcmQgPSBib2FyZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uYXBpLFxuICB9O1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IFBsYXllciwge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn0gZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn07XG5cbmxldCBVTklUX1RFU1Q7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5VTklUX1RFU1QgPSB0cnVlOyAvLyBDb21tZW50IG91dCB0aGlzIGxpbmUgb25jZSBmaW5pc2ggdGhlIHVuaXQgdGVzdHMuXG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGNvbnN0IERFRkFVTFRfQk9BUkRfU0laRSA9IDEwOyAvLyBkZWZhdWx0IGdhbWUgYm9hcmQgc2l6ZVxuICAvLyBEZWZhdWx0IGZsZWV0IHNldHRpbmcuIEFjY29yZGluZyB0byAxOTkwJ3MgQmF0dGxlc2hpcCBHYW1lIG9mIE1pbHRvbiBCcmFkbGV0IENvbXBhbnkuXG4gIGNvbnN0IFNUQU5EQVJEX0ZMRUVUID0gW1xuICAgIC8vIFtuYW1lLCBzaXplXVxuICAgIFsnY2FycmllcicsIDVdLFxuICAgIFsnYmF0dGxlc2hpcCcsIDRdLFxuICAgIFsnY3J1aXNlcicsIDNdLFxuICAgIFsnc3VibWFyaW5lJywgM10sXG4gICAgWydkZXN0cm95ZXInLCAyXSxcbiAgXTtcblxuICAvKipcbiAgICogR2FtZSBtb2R1bGUgcHJvdG8uXG4gICAqICBwbGF5ZXJzOiBBcnJheS4gVHdvIHBsYXllcnMuXG4gICAqICBjdXJyZW50UGxheWVyOiBOdW1iZXIuIEluZGV4IG9mIGN1cnJlbnQgcGxheWVyIGluIHRoZSBwbGF5ZXJzIGFycmF5LlxuICAgKi9cbiAgY29uc3QgZ2FtZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIGludGVnZXIgaW4gcmFuZ2Ugb2YgWzAsIG1heCkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXggTWF4IHZhbHVlIChleGNsdXNpdmUpLlxuICAgKiBAcmV0dXJuIEdlbmVyYXRlZCBpbnRlZ2VyLlxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tKG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBpY2sgdGhlIHJhbmRvbSBwb3NpdGlvbiBbcm93LCBjb2x1bW5dIGluIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtCb2FyZH0gYm9hcmQgVGFyZ2V0IGJvYXJkLlxuICAgKiBAcmV0dXJuIFJhbmRvbSBwb3NpdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIHJhbmRvbVBvc2l0aW9uKHNpemUpIHtcbiAgICByZXR1cm4gW3JhbmRvbShzaXplKSwgcmFuZG9tKHNpemUpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvZmlsbChyYW5kb21seSkgYSBnYW1lIGJvYXJkIHdpdGggZmxlZXQgc2hpcHMuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IGJvYXJkIFRhcmdldCBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGF1dG9maWxsRmxlZXQoYm9hcmQpIHtcbiAgICBTVEFOREFSRF9GTEVFVC5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoLi4udGVtcGxhdGUpO1xuICAgICAgaWYgKHJhbmRvbSgyKSA9PT0gMSkgc2hpcC50b2dnbGVEaXJlY3Rpb24oKTtcbiAgICAgIGxldCBwb3NpdGlvbiA9IHJhbmRvbVBvc2l0aW9uKGJvYXJkLnNpemUoKSk7XG4gICAgICB3aGlsZSAoIWJvYXJkLmF2YWlsYWJsZSguLi5wb3NpdGlvbiwgc2hpcCkpIHtcbiAgICAgICAgcG9zaXRpb24gPSByYW5kb21Qb3NpdGlvbihib2FyZC5zaXplKCkpO1xuICAgICAgfVxuICAgICAgYm9hcmQucHV0U2hpcCguLi5wb3NpdGlvbiwgc2hpcCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGFsbCBwbGF5ZXJzLlxuICAgKiBAcmV0dXJucyBBcnJheSBvZiBwbGF5ZXJzXG4gICAqL1xuICBmdW5jdGlvbiBwbGF5ZXJzKCkge1xuICAgIHJldHVybiBnYW1lLnBsYXllcnM7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIFBsYXllciBvYmplY3QgYnkgdGhlaXIgaWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCBwbGF5ZXIgaWQuXG4gICAqL1xuICBmdW5jdGlvbiBwbGF5ZXIoaWQpIHtcbiAgICByZXR1cm4gZ2FtZS5wbGF5ZXJzLmZpbmQoKHRoZVBsYXllcikgPT4gdGhlUGxheWVyLmlkKCkgPT09IGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHR3byBwbGF5ZXJzIHdpdGggcmFuZG9tbHkgYXV0b2ZpbGxlZCBib2FyZC5cbiAgICogQUkgcGxheWVyJ3MgZGVmYXVsdCBsZXZlbCBpcyBFQVNZLlxuICAgKiBAcGFyYW0ge1N5bWJvbH0gcGxheWVyMVR5cGUgSFVNQU4gb3IgQUlcbiAgICogQHBhcmFtIHtTeW1ib2x9IHBsYXllcjJUeXBlIEhVTUFOIG9yIEFJXG4gICAqL1xuICBmdW5jdGlvbiBpbml0UGxheWVyc0FuZEJvYXJkcyhwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGUpIHtcbiAgICBnYW1lLnBsYXllcnMgPSBbXTtcbiAgICBjb25zdCBwbGF5ZXJUeXBlcyA9IFtwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGVdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyVHlwZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5ld1BsYXllciA9IFBsYXllcihpLCBCb2FyZChERUZBVUxUX0JPQVJEX1NJWkUpLCBwbGF5ZXJUeXBlc1tpXSk7XG4gICAgICBhdXRvZmlsbEZsZWV0KG5ld1BsYXllci5ib2FyZCgpKTtcbiAgICAgIGdhbWUucGxheWVycy5wdXNoKG5ld1BsYXllcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB0aGUgcGxheWVyIDIgdG8gQUkuXG4gICAqIEl0IGNhbiBhbHNvIGJlIHVzZWQgdG8gY2hhbmdlIEFJIGxldmVsLlxuICAgKiBBSSBwbGF5ZXIncyBib2FyZCBpcyBmaWxsZWQgYXV0b21hdGljYWxseS5cbiAgICovXG4gIGZ1bmN0aW9uIGFnYWluc3RBSShsZXZlbCkge1xuICAgIGdhbWUucGxheWVyc1sxXSA9IFBsYXllcigxLCBCb2FyZChERUZBVUxUX0JPQVJEX1NJWkUpLCBBSSwgbGV2ZWwpO1xuICAgIGF1dG9maWxsRmxlZXQoZ2FtZS5wbGF5ZXJzWzFdLmJvYXJkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB0aGUgcGxheWVyIDIgdG8gSFVNQU4uXG4gICAqL1xuICBmdW5jdGlvbiBhZ2FpbnN0SHVtYW4oKSB7XG4gICAgZ2FtZS5wbGF5ZXJzWzFdID0gUGxheWVyKDEsIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIEhVTUFOKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmV4dCBwbGF5ZXIncyBpbmRleC5cbiAgICogQHJldHVybnMgaW5kZXggb2YgbmV4dCBwbGF5ZXJcbiAgICovXG4gIGZ1bmN0aW9uIG5leHRJbmRleCgpIHtcbiAgICByZXR1cm4gKGdhbWUuY3VycmVudFBsYXllciArIDEpICUgZ2FtZS5wbGF5ZXJzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBpcyBodW1hbiBwbGF5ZXIsIGRvIG5vdGhpbmcod2FpdCBmb3IgaHVtYW4gdG8gY2xpY2tcbiAgICogb24gdGhlIGJvYXJkIHRvIHRyaWdnZXIgYW4gYXR0YWNrIGV2ZW50KS5cbiAgICpcbiAgICogQUkgUGxheWVyJ3MgYXR0YWNrIGZ1bmN0aW9uIG9ubHkgZGVjaWRlcyB3aGVyZSB0byBhdHRhY2ssXG4gICAqIGFuZCBjYWxsYmFjayBjb250cm9sbGVyIHRvIGRvIHRoZSByZXN0IG9mIHRoZSBqb2IuXG4gICAqL1xuICBmdW5jdGlvbiBuZXh0VHVybihjb250cm9sbGVyQXR0YWNrQ2FsbGJhY2spIHtcbiAgICBnYW1lLmN1cnJlbnRQbGF5ZXIgPSBuZXh0SW5kZXgoKTtcbiAgICBjb25zdCBjdXJyUGxheWVyID0gZ2FtZS5wbGF5ZXJzW2dhbWUuY3VycmVudFBsYXllcl07XG4gICAgaWYgKCFjdXJyUGxheWVyLmlzQUkoKSkgcmV0dXJuOyAvLyBodW1hbiBwbGF5ZXIgZG8gbm90aGluZy5cbiAgICBjb25zdCBvcHBvbmVudCA9IGdhbWUucGxheWVyc1tuZXh0SW5kZXgoKV07XG4gICAgY29uc3QgdGFyZ2V0ID0gY3VyclBsYXllci5hdHRhY2sob3Bwb25lbnQuYm9hcmQoKSk7IC8vIEFJIHBsYXllcidzIG5leHQgYXR0YWNrIHRhcmdldFxuICAgIGlmICh0YXJnZXQpIHsgLy8gaWYgdGhlcmUncyBubyBtb3JlIGdyaWQgdG8gYmUgYXR0YWNrZWQsIHRhcmdldCB3aWxsIGJlIHVuZGVmaW5lZC5cbiAgICAgIGNvbnRyb2xsZXJBdHRhY2tDYWxsYmFjayguLi50YXJnZXQsIG9wcG9uZW50LmlkKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHBsYXllciBoYXMgcHV0IGFsbCBoaXMgc2hpcHMgaW50byB0aGUgYm9hcmQuXG4gICAqIENvbnRyb2xsZXIgY2FsbCB0aGlzIG1ldGhvZCB0byBpbml0aWFsaXplIHRoZSBnYW1lLlxuICAgKlxuICAgKiBCZWZvcmUgc3RhcnQgdGhlIGdhbWUgdGhpcyBmdW5jdGlvbiB3aWxsIGNoZWNrXG4gICAqIHdoZWF0aGVyIGFsbCByZXF1aXJlbWVudHMgYWJvdmUgaGF2ZSBiZWVuIG1ldC5cbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICogIHRydWUsIGlmIGFsbCByZXF1aXJlbWVudHMgaGF2ZSBiZWVuIG1ldCwgdGhlIGdhbWUgaXMgc3RhcnRlZC5cbiAgICogIG90aGVyd2lzZSwgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAvLyBjaGVjayBjb25maWd1cmF0aW9uc1xuICAgIGlmIChnYW1lLnBsYXllcnMuc29tZSgodGhlUGxheWVyKSA9PiB0aGVQbGF5ZXIuYm9hcmQoKS5mbGVldFNpemUoKVxuICAgICAgICAhPT0gU1RBTkRBUkRfRkxFRVQubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBTdGFydCBnYW1lLlxuICAgIC8vIFNldCB0byB0aGUgbGFzdCBwbGF5ZXIuIG5leHRUdXJuKCkgd2lsbCBtb3ZlIG9uLlxuICAgIGdhbWUuY3VycmVudFBsYXllciA9IGdhbWUucGxheWVycy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgYXBpID0ge1xuICAgIERFRkFVTFRfQk9BUkRfU0laRSxcbiAgICBwbGF5ZXJzLFxuICAgIHBsYXllcixcbiAgICBhdXRvZmlsbEZsZWV0LFxuICAgIG5leHRUdXJuLFxuICAgIGluaXRQbGF5ZXJzQW5kQm9hcmRzLFxuICAgIGFnYWluc3RBSSxcbiAgICBhZ2FpbnN0SHVtYW4sXG4gICAgc3RhcnQsXG4gIH07XG5cbiAgaWYgKFVOSVRfVEVTVCkge1xuICAgIGFwaS5nYW1lID0gZ2FtZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uYXBpLFxuICB9O1xufSkoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHF1b3RlLXByb3BzICovXG4vKipcbiAqIFRoZXJlIGFyZSB0d28gZGlmZmVyZW50IHR5cGVzIG9mIHBsYXllcjpcbiAqICAxLiBhaVxuICogIDIuIGh1bWFuXG4gKi9cbmV4cG9ydCBjb25zdCBBSSA9IFN5bWJvbCgnYWknKTtcbmV4cG9ydCBjb25zdCBIVU1BTiA9IFN5bWJvbCgnaHVtYW4nKTtcblxuLyoqXG4gKiBUaHJlZSBkaWZmZXJlbnQgbGV2ZWwgb2YgQUkuXG4gKi9cbmV4cG9ydCBjb25zdCBFQVNZID0gU3ltYm9sKCdjaGlsZCcpO1xuZXhwb3J0IGNvbnN0IE5PUk1BTCA9IFN5bWJvbCgnbm9ybWFsJyk7XG5leHBvcnQgY29uc3QgSEFSRCA9IFN5bWJvbCgnaGFyZCcpO1xuXG4vKipcbiAqIFBsYXllciBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtCb2FyZH0gaW5Cb2FyZCBQbGF5ZXIncyBnYW1lIGJvYXJkLlxuICogQHBhcmFtIHtTeW1ib2x9IGluVHlwZSBIVU1BTiBvciBBSS5cbiAqIEBwYXJhbSB7U3ltYm9sfSBpbkxldmVsIE9wdGlvbmFsLiBBSSBsZXZlbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluSWQsIGluQm9hcmQsIGluVHlwZSwgaW5MZXZlbCkgPT4ge1xuICAvKipcbiAgICogUGxheWVyIHBsYWluIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IHBsYXllciA9IHtcbiAgICBpZDogaW5JZCxcbiAgICB0eXBlOiBpblR5cGUsXG4gICAgYm9hcmQ6IGluQm9hcmQsXG4gIH07XG5cbiAgaWYgKHBsYXllci50eXBlID09PSBBSSkge1xuICAgIHBsYXllci5sZXZlbCA9IGluTGV2ZWwgfHwgRUFTWTsgLy8gZGVmYXVsdCBpcyBFQVNZXG4gIH1cblxuICAvKipcbiAgICogR2V0IHBsYXllciBpZC5cbiAgICogQHJldHVybnMgUGxheWVyIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gaWQoKSB7XG4gICAgcmV0dXJuIHBsYXllci5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBwbGF5ZXIgdHlwZS5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBpcyBwbGF5ZXIgaXMgQUkuXG4gICAqL1xuICBmdW5jdGlvbiBpc0FJKCkge1xuICAgIHJldHVybiBwbGF5ZXIudHlwZSA9PT0gQUk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgQUkgcGxheWVyJ3MgbGV2ZWwuXG4gICAqIEByZXR1cm5zIEFJIHBsYXllcidzIGxldmVsLiB1bmRlZmluZWQgaWYgaXQncyBub3QgQUkgcGxheWVyLlxuICAgKi9cbiAgZnVuY3Rpb24gYWlMZXZlbCgpIHtcbiAgICBpZiAocGxheWVyLnR5cGUgIT09IEFJKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBwbGF5ZXIubGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgR2FtZSBtb2R1bGUgdG8gc2V0IEFJIGxldmVsLlxuICAgKiBAcGFyYW0ge1N5bWJvbH0gbGV2ZWwgRUFTWSBvciBOT1JNQUwgb3IgSEFSRFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0QWlMZXZlbChsZXZlbCkge1xuICAgIGlmIChwbGF5ZXIudHlwZSAhPT0gQUkpIHJldHVybjtcbiAgICBwbGF5ZXIubGV2ZWwgPSBsZXZlbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJvYXJkKCkge1xuICAgIHJldHVybiBwbGF5ZXIuYm9hcmQ7XG4gIH1cblxuICAvKipcbiAgICogUmFuZG9tbHkgcGljayBhIHRhcmdldCBmcm9tIG9wcG9uZW50IGJvYXJkJ3MgaW50YWN0IGxpc3QuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IG9wcG9uZW50Qm9hcmQgT3Bwb2VuZW50J3MgYm9hcmQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB0aGUgdGFyZ2V0IGNvb3JkaW5hdGVcbiAgICovXG4gIGZ1bmN0aW9uIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgaWYgKG9wcG9uZW50Qm9hcmQuaW50YWN0KCkubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3Bwb25lbnRCb2FyZC5pbnRhY3QoKS5sZW5ndGgpO1xuICAgIGNvbnN0IHN0ciA9IG9wcG9uZW50Qm9hcmQuaW50YWN0KClbaW5kZXhdO1xuICAgIGNvbnN0IFtyb3dTdHIsIGNvbHVtblN0cl0gPSBzdHIuc3BsaXQoJy0nKTtcbiAgICByZXR1cm4gW3BhcnNlSW50KHJvd1N0ciwgMTApLCBwYXJzZUludChjb2x1bW5TdHIsIDEwKV07XG4gIH1cblxuICAvKipcbiAgICogUGljayh3aXRoIG5vcm1hbCBzdHJhdGVneSkgYSB0YXJnZXQgZnJvbSBvcHBvbmVudCBib2FyZCdzIGludGFjdCBsaXN0LlxuICAgKiBAcGFyYW0ge0JvYXJkfSBvcHBvbmVudEJvYXJkIE9wcG9lbmVudCdzIGJvYXJkIG9iamVjdC5cbiAgICogQHJldHVybnMgdGhlIHRhcmdldCBjb29yZGluYXRlXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxBdHRhY2sob3Bwb25lbnRCb2FyZCkge1xuICAgIHJldHVybiByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gIH1cblxuICAvKipcbiAgICogUGljayh3aXRoIGEgc21hcnQgc3RyYXRlZ3kpIGEgdGFyZ2V0IGZyb20gb3Bwb25lbnQgYm9hcmQncyBpbnRhY3QgbGlzdC5cbiAgICogQHBhcmFtIHtCb2FyZH0gb3Bwb25lbnRCb2FyZCBPcHBvZW5lbnQncyBib2FyZCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHRoZSB0YXJnZXQgY29vcmRpbmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gc21hcnRBdHRjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgcmV0dXJuIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0JvYXJkfSBib2FyZCBUaGUgQm9hcmQgb2JqZWN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBOb3RpY2UgR2FtZSBtb2R1bGUgdG8gcnVuIG5leHQgcm91bmQuXG4gICAqIEByZXR1cm5cbiAgICogID09PiBBSSBwbGF5ZXIgcmV0dXJuIHRoZSBjb29yZGluYXRlIG9mIHRoZSB0YXJnZXQgaXQgd2FudHMgdG8gYXR0YWNrLlxuICAgKiAgPT0+IEh1bWFuIHBsYXllciB3aWxsIHJldHVybiB1bmRlZmluZWQuXG4gICAqL1xuICBmdW5jdGlvbiBhdHRhY2sob3Bwb25lbnRCb2FyZCkge1xuICAgIGlmIChwbGF5ZXIudHlwZSA9PT0gQUkpIHtcbiAgICAgIHN3aXRjaCAocGxheWVyLmxldmVsKSB7XG4gICAgICAgIGNhc2UgRUFTWTpcbiAgICAgICAgICByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICBjYXNlIE5PUk1BTDpcbiAgICAgICAgICByZXR1cm4gbm9ybWFsQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICBjYXNlIEhBUkQ6XG4gICAgICAgICAgcmV0dXJuIHNtYXJ0QXR0Y2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gaHVtYW4gcGxheWVyIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgaXNBSSxcbiAgICBhaUxldmVsLFxuICAgIHNldEFpTGV2ZWwsXG4gICAgYm9hcmQsXG4gICAgYXR0YWNrLFxuICB9O1xufTtcbiIsIi8qKlxuICogU2hpcCBpZCBnZW5lcmF0b3IuXG4gKi9cbmZ1bmN0aW9uKiBpbmZpbml0ZSgpIHtcbiAgbGV0IGluZGV4ID0gMTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB5aWVsZCBpbmRleDtcbiAgICBpbmRleCArPSAxO1xuICB9XG59XG5cbmNvbnN0IEdFTiA9IGluZmluaXRlKCk7XG5jb25zdCBIT1JJWk9OVEFMID0gU3ltYm9sKCdob3Jpem9udGFsJyk7XG5jb25zdCBWRVJUSUNBTCA9IFN5bWJvbCgndmVydGljYWwnKTtcblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGluc3RhbnRpYXRlIGEgU2hpcCBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBzaGlwLiBFeDogYmF0dGxlc2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBhbmQgZGVzdHJveWVyLlxuICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgSG93IG1hbnkgZ3JpZHMgb24gdGhlIGJvYXJkIHRoZSBzaGlwIG9jY3VwaWVzLlxuICogQHJldHVybiBBIHNoaXAgbW9kdWxlIG9iamVjdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluTmFtZSwgaW5TaXplKSA9PiB7XG4gIC8qKlxuICAgKiBTaGlwIHBsYWluIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgaWQ6IEdFTi5uZXh0KCkudmFsdWUsXG4gICAgbmFtZTogaW5OYW1lLFxuICAgIHNpemU6IGluU2l6ZSxcbiAgICByb3c6IDAsIC8vIGRlZmF1bHRcbiAgICBjb2x1bW46IDAsIC8vIGRlZmF1bHRcbiAgICBkaXJlY3Rpb246IEhPUklaT05UQUwsIC8vIGRlZmF1bHRcbiAgICBoaXQ6IDAsIC8vIEhvdyBtYW55IHRpbWVzIHRoZSBzaGlwIGlzIGhpdC5cbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgU2hpcCdzIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gaWQoKSB7XG4gICAgcmV0dXJuIHNoaXAuaWQ7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgU2hpcCdzIG5hbWUuXG4gICAqL1xuICBmdW5jdGlvbiBuYW1lKCkge1xuICAgIHJldHVybiBzaGlwLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgU2l6ZSBvZiB0aGUgc2hpcC5cbiAgICovXG4gIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgcmV0dXJuIHNoaXAuc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBQb3NpdGlvbiBvZiB0aGUgc2hpcCBoZWFkLlxuICAgKi9cbiAgZnVuY3Rpb24gaGVhZCgpIHtcbiAgICByZXR1cm4gW3NoaXAucm93LCBzaGlwLmNvbHVtbl07XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBQb3NpdGlvbiBvZiB0aGUgc2hpcCB0YWlsLlxuICAgKi9cbiAgZnVuY3Rpb24gdGFpbCgpIHtcbiAgICBzd2l0Y2ggKHNoaXAuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIEhPUklaT05UQUw6XG4gICAgICAgIHJldHVybiBbc2hpcC5yb3csIHNoaXAuY29sdW1uICsgc2hpcC5zaXplIC0gMV07XG4gICAgICBjYXNlIFZFUlRJQ0FMOlxuICAgICAgICByZXR1cm4gW3NoaXAucm93ICsgc2hpcC5zaXplIC0gMSwgc2hpcC5jb2x1bW5dO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGRpcmVjdGlvbiBvZiB0aGUgc2hpcC5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZGlyZWN0aW9uIGlzIGhvcml6b250YWwsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGlzSG9yaXpvbnRhbCgpIHtcbiAgICByZXR1cm4gc2hpcC5kaXJlY3Rpb24gPT09IEhPUklaT05UQUw7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUmV0dXJuIGhvdyBtYW55IGF0dGFja3MgdGhlIHNoaXAgaGFzIHRha2VuLlxuICAgKi9cbiAgZnVuY3Rpb24gY291bnRIaXRzKCkge1xuICAgIHJldHVybiBzaGlwLmhpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIT1JJWk9OVEFMIC0+IFZFUlRJQ0FMXG4gICAqIFZFUlRJQ0FMIC0+IEhPUklaT05UQUxcbiAgICogU2hpcCBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IGlmIHRoZSBib2FyZCBoYXMgZW5vdWdoIHNwYWNlLlxuICAgKiBCb2FyZCBtb2R1bGUgd2lsbCBjaGVjayB0aGF0IGZvciB1cyBiZWZvcmUgY2FsbCB0aGlzIGZ1bmN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdG9nZ2xlRGlyZWN0aW9uKCkge1xuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gSE9SSVpPTlRBTCkge1xuICAgICAgc2hpcC5kaXJlY3Rpb24gPSBWRVJUSUNBTDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcC5kaXJlY3Rpb24gPSBIT1JJWk9OVEFMO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdXIgc2hpcHMgYXJlIG5vdCBhd2FyZSBvZiB0aGUgc2l6ZSBvZiB0aGUgZ2FtZSBib2FyZC5cbiAgICogQm9hcmQgbW9kdWxlIHdpbGwgY2hlY2sgdGhlIHZhbGlkYXRpb24gZm9yIHVzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgKi9cbiAgZnVuY3Rpb24gcHV0KHJvdywgY29sdW1uKSB7XG4gICAgc2hpcC5yb3cgPSByb3c7XG4gICAgc2hpcC5jb2x1bW4gPSBjb2x1bW47XG4gIH1cblxuICAvKipcbiAgICogSnVzdCBjaGVjayBpZiB0aGVyZSdzIGEgc2hpcCBzaXRzIG9uIGEgY2VydGFpbiBncmlkLlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXNuJ3QgYWN0dWFsbHkgaGl0IHRoZSBzaGlwLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBYIG9mIG9wcG9uZW50J3MgYXR0YWNrLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBZIG9mIG9wcG9uZW50J3MgYXR0YWNrLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGl0J3MgYSBoaXQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGNhbkhpdChyb3csIGNvbHVtbikge1xuICAgIHN3aXRjaCAoc2hpcC5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgSE9SSVpPTlRBTDpcbiAgICAgICAgaWYgKHJvdyAhPT0gc2hpcC5yb3cpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGNvbHVtbiA8IHNoaXAuY29sdW1uIHx8IGNvbHVtbiA+IChzaGlwLmNvbHVtbiArIHNoaXAuc2l6ZSAtIDEpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWRVJUSUNBTDpcbiAgICAgICAgaWYgKGNvbHVtbiAhPT0gc2hpcC5jb2x1bW4pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHJvdyA8IHNoaXAucm93IHx8IHJvdyA+IChzaGlwLnJvdyArIHNoaXAuc2l6ZSAtIDEpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2VydGlvbjogRWFjaCBncmlkIG9mIHRoZSBib2FyZCBjYW4gb25seSBiZSBhdHRlY2tlZCBvbmNlLlxuICAgKiBUaGUgc2hpcCBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IHdoZWF0aGVyIGEgc2luZ2xlIHBhcnQgaXMgaGl0IHR3aWNlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBYIG9mIG9wcG9uZW50J3MgYXR0YWNrLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBZIG9mIG9wcG9uZW50J3MgYXR0YWNrLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBzaGlwIGlzIGhpdCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gaGl0KHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2FuSGl0KHJvdywgY29sdW1uKTtcbiAgICBpZiAocmVzdWx0KSBzaGlwLmhpdCArPSAxO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgZXZlcnkgcG9ydCB0aGUgc2hpcCBoYXMgYmVlbiBoaXQuXG4gICAqIEFzIGFsd2F5cywgdGhlIHNoaXAgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCB3aGVhdGhlciBhIHNpbmdsZSBwYXJ0IGlzIGhpdCB0d2ljZS5cbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIChzaGlwLmhpdCA+PSBzaGlwLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gQW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgb2YgdGhhdCBzaGlwLlxuICAgKi9cbiAgZnVuY3Rpb24gY29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkgKz0gMSkge1xuICAgICAgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBIT1JJWk9OVEFMKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtzaGlwLnJvdywgc2hpcC5jb2x1bW4gKyBpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChbc2hpcC5yb3cgKyBpLCBzaGlwLmNvbHVtbl0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5cbiAgICogIGlmIGlzIHN1bmssIHJldHVybiBhbiBhcnJheSBvZiBjb29yZGluYXRlcyBvZiB0aGF0IHNoaXAuXG4gICAqICBvdGhlcndpc2UsIHJldHVybiB1bmRlZmluZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZXBvcnRTdW5rKCkge1xuICAgIGlmICghaXNTdW5rKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBjb29yZGluYXRlcygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBzaXplLFxuICAgIG5hbWUsXG4gICAgaGVhZCxcbiAgICB0YWlsLFxuICAgIGlzSG9yaXpvbnRhbCxcbiAgICBjb3VudEhpdHMsXG4gICAgdG9nZ2xlRGlyZWN0aW9uLFxuICAgIHB1dCxcbiAgICBjYW5IaXQsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBjb29yZGluYXRlcyxcbiAgICByZXBvcnRTdW5rLFxuICB9O1xufTtcbiIsIi8vIGltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vbW9kZWxzL3BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBFTEVNRU5UUyA9IHtcbiAgICByb290OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpLFxuICAgIHBsYXllcnM6IFtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJbZGF0YS1pZD1cIjBcIl0nKSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJbZGF0YS1pZD1cIjFcIl0nKSxcbiAgICBdLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzaW5nbGUgZ3JpZCBpbiBib2FyZCBhY2NvcmRpbmcgdG8gaXQncyBjb29yZGluYXRlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEdyaWQgYXhpIFkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gR3JpZCBheGkgWC5cbiAgICogQHJldHVybnMgR3JpZCBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlR3JpZChyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICBncmlkLmRhdGFzZXQucm93ID0gcm93O1xuICAgIGdyaWQuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW47XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgc2VhIGxheWVyIG9mIGdhbWUgYm9hcmQuXG4gICAqIEhpdCBhcmVhIGFuZCBtaXNzZWQgYXJlYSBzaG91bGQgYmUgbWFya2VkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBCb2FyZCBzaXplLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGVja0hpdEhpc3RvcnlDYWxsYmFjayBCb2FyZC5hbHJlYWR5SGl0KCkgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNoZWNrTWlzc0hpc3RvcnlDYWxsYmFjayBCb2FyZC5hbHJlYWR5TWlzc2VkKCkgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIFNlYSBsYXllciBkaXYgZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdTZWFMYXllcihzaXplLCBjaGVja0hpdEhpc3RvcnlDYWxsYmFjaywgY2hlY2tNaXNzSGlzdG9yeUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWFMYXllci5jbGFzc0xpc3QuYWRkKCdzZWFMYXllcicpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBzaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBjb25zdCBzZWFHcmlkID0gY3JlYXRlR3JpZChyb3csIGNvbHVtbik7XG4gICAgICAgIGlmIChyb3cgPT09IDApIHNlYUdyaWQuY2xhc3NMaXN0LmFkZCgndXBwZXJCb3JkZXInKTtcbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gMCkgc2VhR3JpZC5jbGFzc0xpc3QuYWRkKCdsZWZ0Qm9yZGVyJyk7XG4gICAgICAgIGlmIChjaGVja0hpdEhpc3RvcnlDYWxsYmFjayhyb3csIGNvbHVtbikpIHtcbiAgICAgICAgICBzZWFHcmlkLmNsYXNzTGlzdC5hZGQoJ2FscmVhZHlIaXQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja01pc3NIaXN0b3J5Q2FsbGJhY2socm93LCBjb2x1bW4pKSB7XG4gICAgICAgICAgc2VhR3JpZC5jbGFzc0xpc3QuYWRkKCdhbHJlYWR5TWlzc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2VhTGF5ZXIuYXBwZW5kQ2hpbGQoc2VhR3JpZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWFMYXllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBzaGlwIGxheWVyIG9mIGdhbWUgYm9hcmQuXG4gICAqIFNoaXAgcG9zaXRpb24gc2hvdWxkIGJlIGhpZ2hsaWdodGVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBCb2FyZCBzaXplLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGxheWVyVHlwZSBcImFpXCIgb3IgXCJodW1hblwiLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGVja1NoaXBDYWxsYmFjayBCb2FyZC5jYW5IaXRTaGlwKCkgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIFNoaXAgbGF5ZXIgZGl2IGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBkcmF3U2hpcExheWVyKHNpemUsIHBsYXllclR5cGUsIGNoZWNrU2hpcENhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2hpcExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcExheWVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBMYXllcicpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBzaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBjb25zdCBzaGlwR3JpZCA9IGNyZWF0ZUdyaWQocm93LCBjb2x1bW4pO1xuICAgICAgICBpZiAocm93ID09PSAwKSBzaGlwR3JpZC5jbGFzc0xpc3QuYWRkKCd1cHBlckJvcmRlcicpO1xuICAgICAgICBpZiAoY29sdW1uID09PSAwKSBzaGlwR3JpZC5jbGFzc0xpc3QuYWRkKCdsZWZ0Qm9yZGVyJyk7XG4gICAgICAgIGlmIChjaGVja1NoaXBDYWxsYmFjayhyb3csIGNvbHVtbikpIHNoaXBHcmlkLmNsYXNzTGlzdC5hZGQoJ2hhc1NoaXAnKTtcbiAgICAgICAgc2hpcExheWVyLmFwcGVuZENoaWxkKHNoaXBHcmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChwbGF5ZXJUeXBlKSB7XG4gICAgICBjYXNlICdhaSc6XG4gICAgICAgIHNoaXBMYXllci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaHVtYW4nOlxuICAgICAgICBzaGlwTGF5ZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcExheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYm9hcmQgb2Ygc3BlY2lmaWMgcGxheWVyLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBTaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIERlbm90ZSB3aGljaCBib2FyZCB0byBkcmF3LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGxheWVyVHlwZSBcImh1bWFuXCIgb3IgXCJhaVwiLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGVja1NoaXBDYWxsYmFjayBCb2FyZC5jYW5IaXRTaGlwKCkgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNoZWNrSGl0SGlzdG9yeUNhbGxiYWNrIEJvYXJkLmFscmVhZHlIaXQoKSBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2hlY2tNaXNzSGlzdG9yeUNhbGxiYWNrIEJvYXJkLmFscmVhZHlNaXNzZWQoKSBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdCb2FyZChcbiAgICBzaXplLFxuICAgIHBsYXllcklkLFxuICAgIHBsYXllclR5cGUsXG4gICAgY2hlY2tTaGlwQ2FsbGJhY2ssXG4gICAgY2hlY2tIaXRIaXN0b3J5Q2FsbGJhY2ssXG4gICAgY2hlY2tNaXNzSGlzdG9yeUNhbGxiYWNrLFxuICApIHtcbiAgICBjb25zdCB0YXJnZXQgPSBFTEVNRU5UUy5wbGF5ZXJzW3BsYXllcklkXS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb25zdCBzZWFMYXllciA9IGRyYXdTZWFMYXllcihzaXplLCBjaGVja0hpdEhpc3RvcnlDYWxsYmFjaywgY2hlY2tNaXNzSGlzdG9yeUNhbGxiYWNrKTtcbiAgICBjb25zdCBzaGlwTGF5ZXIgPSBkcmF3U2hpcExheWVyKHNpemUsIHBsYXllclR5cGUsIGNoZWNrU2hpcENhbGxiYWNrKTtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc2VhTGF5ZXIpO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzaGlwTGF5ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIHNwZWNpZmljIGdyaWQgY29sb3IgYWNjb3JkaW5nIHRvIHRoZSBhdHRhY2sgcmVzdWx0LlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IFRhcmdldCBncmlkIEF4aSBZLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIFRhcmdldCBncmlkIEF4aSBYLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgUGxheWVyIGlkLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGF0dGFja1Jlc3VsdCB0cnVlIGlmIGhpdCwgZmFsc2UgaWYgbWlzc2VkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyU2VhQWZ0ZXJBdHRhY2socm93LCBjb2x1bW4sIHBsYXllcklkLCBhdHRhY2tSZXN1bHQpIHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gRUxFTUVOVFMucGxheWVyc1twbGF5ZXJJZF07XG4gICAgY29uc3QgYm9hcmRFbGVtZW50ID0gcGxheWVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQgPiAuc2VhTGF5ZXInKTtcbiAgICBjb25zdCBncmlkID0gYm9hcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ncmlkW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYCk7XG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47IC8vIG5vIG1vcmUgZ3JpZCB0byBhdHRhY2suXG4gICAgaWYgKGF0dGFja1Jlc3VsdCkgeyAvLyBoaXRcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYWxyZWFkeUhpdCcpO1xuICAgIH0gZWxzZSB7IC8vIG1pc3NcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYWxyZWFkeU1pc3NlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrIGFsbCBzdW5rIHNoaXBzIG9mIHRoYXQgcGxheWVyIG9uIFNlYSBMYXllci5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIFBsYXllciBpZC5cbiAgICogQHBhcmFtIHtBcnJheX0gc3Vua0Nvb3JkaW5hdGVzIGNvb3JkaW5hdGVzIG9mIGFsbCBzdW5rIHNoaXBzLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyU3Vua1NoaXBzKHBsYXllcklkLCBzdW5rQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gRUxFTUVOVFMucGxheWVyc1twbGF5ZXJJZF07XG4gICAgY29uc3QgYm9hcmRFbGVtZW50ID0gcGxheWVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQgPiAuc2VhTGF5ZXInKTtcbiAgICBzdW5rQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGJvYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JpZFtkYXRhLXJvdz1cIiR7Y29vcmRpbmF0ZVswXX1cIl1bZGF0YS1jb2x1bW49XCIke2Nvb3JkaW5hdGVbMV19XCJdYCk7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xpY2sgb24gYm9hcmQgd2lsbCBjYWxsYmFjayBjb250cm9sbGVyJ3MgcGxheWVyQXR0YWNrKCkgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gYm9hcmRFbGVtZW50IFRhcmdldCBib2FyZCBjb250YWluZXIgZWxlbWVudCBpbiBET00uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEFjdHVhbCBhdHRhY2sgbG9naWMgcmVzaWRlcyBpbiBjb250cm9sbGVyLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZFJlY2VpdmVBdHRhY2soY2FsbGJhY2spIHtcbiAgICBFTEVNRU5UUy5wbGF5ZXJzLmZvckVhY2goKHBsYXllckVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGJvYXJkRWxlbWVudCA9IHBsYXllckVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkID4gLnNlYUxheWVyJyk7XG4gICAgICBjb25zdCBncmlkcyA9IGJvYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpO1xuICAgICAgZ3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT4ge1xuICAgICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soXG4gICAgICAgICAgcGFyc2VJbnQoZ3JpZC5kYXRhc2V0LnJvdywgMTApLFxuICAgICAgICAgIHBhcnNlSW50KGdyaWQuZGF0YXNldC5jb2x1bW4sIDEwKSxcbiAgICAgICAgICBwYXJzZUludChwbGF5ZXJFbGVtZW50LmRhdGFzZXQuaWQsIDEwKSxcbiAgICAgICAgKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHByZXZlbnQgY3VycmVudCBwbGF5ZXIncyBib2FyZCB0byBiZSBhdHRhY2tlZC5cblxuICByZXR1cm4ge1xuICAgIGRyYXdCb2FyZCxcbiAgICByZW5kZXJTZWFBZnRlckF0dGFjayxcbiAgICByZW5kZXJTdW5rU2hpcHMsXG4gICAgYmluZFJlY2VpdmVBdHRhY2ssXG4gIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgQ29udHJvbGxlciwge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn0gZnJvbSAnLi9jb250cm9sbGVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGNzcyBmcm9tICcuLi9jc3MvaW5kZXguY3NzJztcblxuQ29udHJvbGxlci5pbml0UGxheWVyc0FuZEJvYXJkcyhIVU1BTiwgQUkpO1xuQ29udHJvbGxlci5kcmF3Qm9hcmRzKCk7XG5Db250cm9sbGVyLmVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjaygpO1xuQ29udHJvbGxlci5zdGFydEdhbWUoKTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiQUkiLCJIVU1BTiIsIkVBU1kiLCJOT1JNQUwiLCJIQVJEIiwiVmlldyIsImluaXRQbGF5ZXJzQW5kQm9hcmRzIiwicGxheWVyMVR5cGUiLCJwbGF5ZXIyVHlwZSIsImRyYXdBU2luZ2xlQm9hcmQiLCJwbGF5ZXIiLCJwbGF5ZXJUeXBlIiwiaXNBSSIsImJvYXJkIiwiZHJhd0JvYXJkIiwiREVGQVVMVF9CT0FSRF9TSVpFIiwiaWQiLCJjYW5IaXRTaGlwIiwiYWxyZWFkeUhpdCIsImFscmVhZHlNaXNzZWQiLCJkcmF3Qm9hcmRzIiwicGxheWVycyIsImZvckVhY2giLCJnYW1lb3ZlciIsImxvc2VySWQiLCJhbGVydCIsInBsYXllckF0dGFjayIsInJvdyIsImNvbHVtbiIsIm9wcG9uZW50SWQiLCJhbHJlYWR5QmVlbkF0dGFja2VkIiwicmVzdWx0IiwicmVjZWl2ZUF0dGFjayIsInJlbmRlclNlYUFmdGVyQXR0YWNrIiwicmVuZGVyU3Vua1NoaXBzIiwicmVwb3J0U3VuayIsImFsbFN1bmsiLCJuZXh0VHVybiIsImVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjayIsImJpbmRSZWNlaXZlQXR0YWNrIiwic3RhcnRHYW1lIiwic3RhcnQiLCJVTklUX1RFU1QiLCJpblNpemUiLCJzaXplIiwiZmxlZXQiLCJoaXRzIiwibWlzc2VzIiwiaW50YWN0IiwiZmxlZXRTaXplIiwibGVuZ3RoIiwiZmlsbEludGFjdCIsInB1c2giLCJyZW1vdmVGcm9tSW50YWN0Iiwic3RyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJwb3NpdGlvbiIsInNwbGljZSIsImlzT3ZlcmxhcCIsImZpeGVkU2hpcCIsIm5ld0hlYWQiLCJuZXdUYWlsIiwiaGVhZCIsImhlYWRSb3ciLCJoZWFkQ29sdW1uIiwidGFpbCIsInRhaWxSb3ciLCJ0YWlsQ29sdW1uIiwib3ZlcmxhcFJvd1N0YXJ0IiwiTWF0aCIsIm1heCIsIm92ZXJsYXBDb2x1bW5TdGFydCIsIm92ZXJsYXBSb3dFbmQiLCJtaW4iLCJvdmVybGFwQ29sdW1uRW5kIiwiYXZhaWxhYmxlIiwic2hpcCIsImlzSG9yaXpvbnRhbCIsInNvbWUiLCJwdXRTaGlwIiwicHV0IiwicmVtb3ZlU2hpcCIsImZsZWV0U2hpcCIsInRvZ2dsZUZsZWV0U2hpcCIsInRvZ2dsZURpcmVjdGlvbiIsInBvc2l0aW9uRXF1YWwiLCJwb3NpdGlvbkEiLCJwb3NpdGlvbkIiLCJoaXQiLCJtaXNzIiwidHJ5SGl0U2hpcCIsImNhbkhpdCIsInRhcmdldCIsInVuZGVmaW5lZCIsInJlZHVjZSIsImFyciIsImlzU3VuayIsImNvb3JkaW5hdGVzIiwiZXZlcnkiLCJhcGkiLCJTaGlwIiwiQm9hcmQiLCJQbGF5ZXIiLCJTVEFOREFSRF9GTEVFVCIsImdhbWUiLCJyYW5kb20iLCJmbG9vciIsInJhbmRvbVBvc2l0aW9uIiwiYXV0b2ZpbGxGbGVldCIsInRlbXBsYXRlIiwiZmluZCIsInRoZVBsYXllciIsInBsYXllclR5cGVzIiwiaSIsIm5ld1BsYXllciIsImFnYWluc3RBSSIsImxldmVsIiwiYWdhaW5zdEh1bWFuIiwibmV4dEluZGV4IiwiY3VycmVudFBsYXllciIsImNvbnRyb2xsZXJBdHRhY2tDYWxsYmFjayIsImN1cnJQbGF5ZXIiLCJvcHBvbmVudCIsImF0dGFjayIsIlN5bWJvbCIsImluSWQiLCJpbkJvYXJkIiwiaW5UeXBlIiwiaW5MZXZlbCIsInR5cGUiLCJhaUxldmVsIiwic2V0QWlMZXZlbCIsInJhbmRvbUF0dGFjayIsIm9wcG9uZW50Qm9hcmQiLCJzcGxpdCIsInJvd1N0ciIsImNvbHVtblN0ciIsInBhcnNlSW50Iiwibm9ybWFsQXR0YWNrIiwic21hcnRBdHRjayIsImluZmluaXRlIiwiR0VOIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiaW5OYW1lIiwibmV4dCIsInZhbHVlIiwibmFtZSIsImRpcmVjdGlvbiIsImNvdW50SGl0cyIsIkVMRU1FTlRTIiwicm9vdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUdyaWQiLCJncmlkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJkcmF3U2VhTGF5ZXIiLCJjaGVja0hpdEhpc3RvcnlDYWxsYmFjayIsImNoZWNrTWlzc0hpc3RvcnlDYWxsYmFjayIsInNlYUxheWVyIiwic2VhR3JpZCIsImFwcGVuZENoaWxkIiwiZHJhd1NoaXBMYXllciIsImNoZWNrU2hpcENhbGxiYWNrIiwic2hpcExheWVyIiwic2hpcEdyaWQiLCJwbGF5ZXJJZCIsImF0dGFja1Jlc3VsdCIsInBsYXllckVsZW1lbnQiLCJib2FyZEVsZW1lbnQiLCJzdW5rQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwiY2FsbGJhY2siLCJncmlkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiQ29udHJvbGxlciIsImNzcyJdLCJzb3VyY2VSb290IjoiIn0=