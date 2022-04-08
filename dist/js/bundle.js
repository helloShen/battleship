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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --blue: blue;\n  --red: red;\n  --board-border: var(--black);\n  --hit: var(--red);\n  --missed: var(--gray);\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.board > .seaLayer,\n.board > .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  opacity: .5;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.board > .shipLayer.show {\n  z-index: 1;\n}\n\n.board > .shipLayer.hide {\n  z-index: -1;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board .grid.hasShip {\n  background-color: var(--blue);\n}\n\n.board .grid.alreadyHit {\n  background-color: var(--hit);\n}\n\n.board .grid.alreadyMissed {\n  background-color: var(--missed);\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;;EAEjB,UAAU;EACV,cAAc;EACd,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,4BAA4B;EAC5B,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,kEAAkE;EAClE,+DAA+D;AACjE;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,4CAA4C;EAC5C,2CAA2C;AAC7C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,+BAA+B;AACjC","sourcesContent":["@import './norm.css';\n\n:root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --white: white;\n  --black: black;\n  --gray: gray;\n  --blue: blue;\n  --red: red;\n  --board-border: var(--black);\n  --hit: var(--red);\n  --missed: var(--gray);\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: 20rem;\n  grid-template-rows: 20rem;\n}\n\n.board > .seaLayer,\n.board > .shipLayer {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  opacity: .5;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.board > .shipLayer.show {\n  z-index: 1;\n}\n\n.board > .shipLayer.hide {\n  z-index: -1;\n}\n\n.board .grid {\n  border-bottom: 1px solid var(--board-border);\n  border-right: 1px solid var(--board-border);\n}\n\n.board .grid.upperBorder {\n  border-top: 1px solid var(--board-border);\n}\n\n.board .grid.leftBorder {\n  border-left: 1px solid var(--board-border);\n}\n\n.board .grid.hasShip {\n  background-color: var(--blue);\n}\n\n.board .grid.alreadyHit {\n  background-color: var(--hit);\n}\n\n.board .grid.alreadyMissed {\n  background-color: var(--missed);\n}"],"sourceRoot":""}]);
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
   * Call View module to draw the board for each player.
   */


  function drawBoard() {
    _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].players().forEach(function (player) {
      var playerType = player.isAI() ? 'ai' : 'human';
      var board = player.board();
      _view__WEBPACK_IMPORTED_MODULE_1__["default"].drawBoard(_models_game__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_BOARD_SIZE, player.id(), playerType, board.canHitShip, board.alreadyHit, board.alreadyMissed);
    });
  }
  /**
   * Actual attack logic.
   * When human player click on the board, View module will call this function.
   * When AI player decide the target position of next attack, it will also
   * callback this function.
   * @param {Number} row Axi Y of target gird.
   * @param {Number} column Axi X of target grid.
   * @param {Number} opponentId Id of opponent player.
   * @param {Function} renderCallback Render the grid color according
   * to the attack result(hit or miss).
   */


  function playerAttack(row, column, opponentId, renderCallback) {
    var board = _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].player(opponentId).board();
    if (board.alreadyBeenAttacked(row, column)) return;
    var result = board.receiveAttack(row, column);

    if (renderCallback) {
      renderCallback(result);
    } else {
      _view__WEBPACK_IMPORTED_MODULE_1__["default"].renderSeaAfterAttack(row, column, opponentId, result);
    }

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
    drawBoard: drawBoard,
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
      if (newHead[0] < overlapRowStart || newHead[0] > overlapRowEnd) return false;
      if (newTail[1] < overlapColumnStart || newHead[1] > overlapColumnEnd) return false;
      return true;
    }

    if (newHead[1] < overlapColumnStart || newHead[1] > overlapColumnEnd) return false;
    if (newTail[0] < overlapColumnStart || newHead[0] > overlapRowEnd) return false;
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
    var newTail = ship.isHorizontal() ? [row, column + ship.size()] : [row + ship.size(), column];
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
   * Check if the attack can hit a ship.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns true if can hit, otherwise false.
   */


  function canHitShip(row, column) {
    return board.fleet.some(function (fleetShip) {
      return fleetShip.hit(row, column);
    });
  }
  /**
   * Try to hit each of the ships in the board.fleet,
   * only if the target position has never been attacked before.
   * @param {Number} row AxiY of target.
   * @param {Number} column AxiX of target.
   * @return true if hit, false if missed.
   */


  function receiveAttack(row, column) {
    var target = [row, column];
    if (alreadyBeenAttacked.apply(void 0, target)) return undefined;
    var hit = canHitShip(row, column);

    if (hit) {
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


  function randomPosition(board) {
    return [random(board.size()), random(board.size())];
  }
  /**
   * Autofill(randomly) a game board with fleet ships.
   * @param {Board} board Target board.
   */


  function autofillFleet(board) {
    STANDARD_FLEET.forEach(function (template) {
      var ship = _ship__WEBPACK_IMPORTED_MODULE_2__["default"].apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(template));
      if (random(2) === 1) ship.toggleDirection();
      var position = randomPosition(board);

      while (!board.available.apply(board, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(position).concat([ship]))) {
        position = randomPosition(board);
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
   * AI Player's attack function only makes a dicision of
   * where to attack, and callback controller to do the
   * rest of the job.
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
   * Assertion: Each grid of the board can only be attecked once.
   * The ship don't have to worry about wheather a single part is hit twice.
   * @param {Number} row Axi X of opponent's attack.
   * @param {Number} column Axi Y of opponent's attack.
   * @return {Boolean} true if the ship is hit, otherwise false.
   */


  function hit(row, column) {
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

    ship.hit += 1;
    return true;
  }
  /**
   * Check if every port the ship has been hit.
   * As always, the ship don't have to worry about wheather a single part is hit twice.
   * @returns {Boolean}
   */


  function isSunk() {
    return ship.hit >= ship.size;
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
    hit: hit,
    isSunk: isSunk
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
   * Click on board will callback controller's userAttack() function.
   * @param {Element} boardElement Target board container element in DOM.
   * @param {Function} callback Actual attack logic resides in controller.
   */


  function bindReceiveAttack(callback) {
    ELEMENTS.players.forEach(function (playerElement) {
      var boardElement = playerElement.querySelector('.board > .seaLayer');
      var grids = boardElement.querySelectorAll('.grid');
      grids.forEach(function (grid) {
        grid.addEventListener('click', function () {
          return callback(parseInt(grid.dataset.row, 10), parseInt(grid.dataset.column, 10), parseInt(playerElement.dataset.id, 10), function (attackResult) {
            if (attackResult === undefined) return;

            if (attackResult) {
              // hit
              grid.classList.add('alreadyHit');
            } else {
              // miss
              grid.classList.add('alreadyMissed');
            }
          });
        });
      });
    });
  } // prevent current player's board to be attacked.


  return {
    drawBoard: drawBoard,
    renderSeaAfterAttack: renderSeaAfterAttack,
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


console.log('Before everything starts.');
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].initPlayersAndBoards(_controller__WEBPACK_IMPORTED_MODULE_0__.HUMAN, _controller__WEBPACK_IMPORTED_MODULE_0__.AI);
console.log('initPlayersAndBoards() finish!');
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].drawBoard();
console.log('drawBoard() finish!');
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].enableBoardReceiveAttack();
console.log('enableBoardReceiveAttack() finish!');
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].startGame();
console.log('startGame() finish!');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdIQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQS9DO0FBQzZHO0FBQ2pCO0FBQ1c7QUFDdkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwwQkFBMEIscUZBQWlDO0FBQzNEO0FBQ0EsaURBQWlELG9DQUFvQyxzQkFBc0Isb0NBQW9DLG1CQUFtQixpQkFBaUIsaUJBQWlCLGVBQWUsaUNBQWlDLHNCQUFzQiwwQkFBMEIsR0FBRyxZQUFZLGlCQUFpQixrQkFBa0IsaUNBQWlDLDhCQUE4QixHQUFHLDhDQUE4QyxvQkFBb0IsdUJBQXVCLGdCQUFnQixrQkFBa0IsdUVBQXVFLG9FQUFvRSxHQUFHLDhCQUE4QixlQUFlLEdBQUcsOEJBQThCLGdCQUFnQixHQUFHLGtCQUFrQixpREFBaUQsZ0RBQWdELEdBQUcsOEJBQThCLDhDQUE4QyxHQUFHLDZCQUE2QiwrQ0FBK0MsR0FBRywwQkFBMEIsa0NBQWtDLEdBQUcsNkJBQTZCLGlDQUFpQyxHQUFHLGdDQUFnQyxvQ0FBb0MsR0FBRyxPQUFPLG9GQUFvRixVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSwrQ0FBK0MsV0FBVyxvQ0FBb0Msc0JBQXNCLG9DQUFvQyxtQkFBbUIsaUJBQWlCLGlCQUFpQixlQUFlLGlDQUFpQyxzQkFBc0IsMEJBQTBCLEdBQUcsWUFBWSxpQkFBaUIsa0JBQWtCLGlDQUFpQyw4QkFBOEIsR0FBRyw4Q0FBOEMsb0JBQW9CLHVCQUF1QixnQkFBZ0Isa0JBQWtCLHVFQUF1RSxvRUFBb0UsR0FBRyw4QkFBOEIsZUFBZSxHQUFHLDhCQUE4QixnQkFBZ0IsR0FBRyxrQkFBa0IsaURBQWlELGdEQUFnRCxHQUFHLDhCQUE4Qiw4Q0FBOEMsR0FBRyw2QkFBNkIsK0NBQStDLEdBQUcsMEJBQTBCLGtDQUFrQyxHQUFHLDZCQUE2QixpQ0FBaUMsR0FBRyxnQ0FBZ0Msb0NBQW9DLEdBQUcsbUJBQW1CO0FBQ3pnRztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esb0VBQW9FLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEdBQUcsV0FBVyx1S0FBdUssR0FBRyxTQUFTLHFGQUFxRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxvREFBb0QsNkJBQTZCLGdCQUFnQixpQkFBaUIsR0FBRyxXQUFXLHVLQUF1SyxHQUFHLHFCQUFxQjtBQUMvd0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxR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RUxvQixJQUFBQSxvQkFBb0IsRUFBcEJBLG9CQUZLO0FBR0xHLElBQUFBLGlCQUFpQixFQUFqQkE7QUFISyxHQUFQO0FBS0QsQ0FoS2MsR0FBZjs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Q0FRQTs7QUFDQTtBQUVBMEksT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7QUFDQUgsd0VBQUEsQ0FBZ0N2Syw4Q0FBaEMsRUFBdUNELDJDQUF2QztBQUNBMEssT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVo7QUFDQUgsNkRBQUE7QUFDQUUsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQUgsNEVBQUE7QUFDQUUsT0FBTyxDQUFDQyxHQUFSLENBQVksb0NBQVo7QUFDQUgsNkRBQUE7QUFDQUUsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL25vcm0uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL21vZGVscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qIGJvYXJkICovXFxuICAtLWJvYXJkLXNpemU6IDEwO1xcbiAgLS1ncmlkLXNpemU6IDJyZW07XFxuXFxuICAvKiBjb2xvciAqL1xcbiAgLS13aGl0ZTogd2hpdGU7XFxuICAtLWJsYWNrOiBibGFjaztcXG4gIC0tZ3JheTogZ3JheTtcXG4gIC0tYmx1ZTogYmx1ZTtcXG4gIC0tcmVkOiByZWQ7XFxuICAtLWJvYXJkLWJvcmRlcjogdmFyKC0tYmxhY2spO1xcbiAgLS1oaXQ6IHZhcigtLXJlZCk7XFxuICAtLW1pc3NlZDogdmFyKC0tZ3JheSk7XFxufVxcblxcbi5ib2FyZCB7XFxuICBtYXJnaW46IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjByZW07XFxufVxcblxcbi5ib2FyZCA+IC5zZWFMYXllcixcXG4uYm9hcmQgPiAuc2hpcExheWVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIG9wYWNpdHk6IC41O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXNpemUpLCB2YXIoLS1ncmlkLXNpemUpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLXNpemUpLCB2YXIoLS1ncmlkLXNpemUpKTtcXG59XFxuXFxuLmJvYXJkID4gLnNoaXBMYXllci5zaG93IHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIuaGlkZSB7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLnVwcGVyQm9yZGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQubGVmdEJvcmRlciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5oYXNTaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQuYWxyZWFkeUhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQuYWxyZWFkeU1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzZWQpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCOztFQUVqQixVQUFVO0VBQ1YsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0VBQWtFO0VBQ2xFLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9ub3JtLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLyogYm9hcmQgKi9cXG4gIC0tYm9hcmQtc2l6ZTogMTA7XFxuICAtLWdyaWQtc2l6ZTogMnJlbTtcXG5cXG4gIC8qIGNvbG9yICovXFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tYmxhY2s6IGJsYWNrO1xcbiAgLS1ncmF5OiBncmF5O1xcbiAgLS1ibHVlOiBibHVlO1xcbiAgLS1yZWQ6IHJlZDtcXG4gIC0tYm9hcmQtYm9yZGVyOiB2YXIoLS1ibGFjayk7XFxuICAtLWhpdDogdmFyKC0tcmVkKTtcXG4gIC0tbWlzc2VkOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbjogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHJlbTtcXG59XFxuXFxuLmJvYXJkID4gLnNlYUxheWVyLFxcbi5ib2FyZCA+IC5zaGlwTGF5ZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgb3BhY2l0eTogLjU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtc2l6ZSksIHZhcigtLWdyaWQtc2l6ZSkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtc2l6ZSksIHZhcigtLWdyaWQtc2l6ZSkpO1xcbn1cXG5cXG4uYm9hcmQgPiAuc2hpcExheWVyLnNob3cge1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmJvYXJkID4gLnNoaXBMYXllci5oaWRlIHtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1ib3JkZXIpO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQudXBwZXJCb3JkZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJvcmRlcik7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5sZWZ0Qm9yZGVyIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9hcmQtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkIC5ncmlkLmhhc1NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5hbHJlYWR5SGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC5hbHJlYWR5TWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3NlZCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25vcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtFQUNFLDBKQUEwSjtBQUM1SlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJpbXBvcnQgR2FtZSwge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn0gZnJvbSAnLi9tb2RlbHMvZ2FtZSc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIDIgcGxheWVycyB3aXRoIHJhbmRvbWx5IGF1dG9maWxsZWQgYm9hcmRcbiAgICogYmVmb3JlIHN0YXJ0aW5nIHRvIGRyYXcgdGhlIGJvYXJkLlxuICAgKi9cbiAgZnVuY3Rpb24gaW5pdFBsYXllcnNBbmRCb2FyZHMocGxheWVyMVR5cGUsIHBsYXllcjJUeXBlKSB7XG4gICAgR2FtZS5pbml0UGxheWVyc0FuZEJvYXJkcyhwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgVmlldyBtb2R1bGUgdG8gZHJhdyB0aGUgYm9hcmQgZm9yIGVhY2ggcGxheWVyLlxuICAgKi9cbiAgZnVuY3Rpb24gZHJhd0JvYXJkKCkge1xuICAgIEdhbWUucGxheWVycygpLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgY29uc3QgcGxheWVyVHlwZSA9IChwbGF5ZXIuaXNBSSgpKSA/ICdhaScgOiAnaHVtYW4nO1xuICAgICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuYm9hcmQoKTtcbiAgICAgIFZpZXcuZHJhd0JvYXJkKFxuICAgICAgICBHYW1lLkRFRkFVTFRfQk9BUkRfU0laRSxcbiAgICAgICAgcGxheWVyLmlkKCksXG4gICAgICAgIHBsYXllclR5cGUsXG4gICAgICAgIGJvYXJkLmNhbkhpdFNoaXAsXG4gICAgICAgIGJvYXJkLmFscmVhZHlIaXQsXG4gICAgICAgIGJvYXJkLmFscmVhZHlNaXNzZWQsXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbCBhdHRhY2sgbG9naWMuXG4gICAqIFdoZW4gaHVtYW4gcGxheWVyIGNsaWNrIG9uIHRoZSBib2FyZCwgVmlldyBtb2R1bGUgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24uXG4gICAqIFdoZW4gQUkgcGxheWVyIGRlY2lkZSB0aGUgdGFyZ2V0IHBvc2l0aW9uIG9mIG5leHQgYXR0YWNrLCBpdCB3aWxsIGFsc29cbiAgICogY2FsbGJhY2sgdGhpcyBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0YXJnZXQgZ2lyZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wcG9uZW50SWQgSWQgb2Ygb3Bwb25lbnQgcGxheWVyLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJDYWxsYmFjayBSZW5kZXIgdGhlIGdyaWQgY29sb3IgYWNjb3JkaW5nXG4gICAqIHRvIHRoZSBhdHRhY2sgcmVzdWx0KGhpdCBvciBtaXNzKS5cbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllckF0dGFjayhyb3csIGNvbHVtbiwgb3Bwb25lbnRJZCwgcmVuZGVyQ2FsbGJhY2spIHtcbiAgICBjb25zdCBib2FyZCA9IEdhbWUucGxheWVyKG9wcG9uZW50SWQpLmJvYXJkKCk7XG4gICAgaWYgKGJvYXJkLmFscmVhZHlCZWVuQXR0YWNrZWQocm93LCBjb2x1bW4pKSByZXR1cm47XG4gICAgY29uc3QgcmVzdWx0ID0gYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgaWYgKHJlbmRlckNhbGxiYWNrKSB7XG4gICAgICByZW5kZXJDYWxsYmFjayhyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBWaWV3LnJlbmRlclNlYUFmdGVyQXR0YWNrKHJvdywgY29sdW1uLCBvcHBvbmVudElkLCByZXN1bHQpO1xuICAgIH1cbiAgICBHYW1lLm5leHRUdXJuKHBsYXllckF0dGFjayk7IC8vIHBhc3MgaXRzZWxmIHRvIHRoZSBHYW1lIG1vZHVsZSBhcyBhIGNhbGxiYWNrLlxuICB9XG5cbiAgLyoqXG4gICAqIFBhc3MgdGhlIGF0dGFjayBsb2dpYyB0byB0aGUgVmlldyBtb2R1bGUgYXMgYSBjYWxsYmFjay5cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjaygpIHtcbiAgICBWaWV3LmJpbmRSZWNlaXZlQXR0YWNrKHBsYXllckF0dGFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgR2FtZS5zdGFydCgpO1xuICAgIEdhbWUubmV4dFR1cm4ocGxheWVyQXR0YWNrKTsgLy8gcGFzcyBpdHNlbGYgdG8gdGhlIEdhbWUgbW9kdWxlIGFzIGEgY2FsbGJhY2suXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXRQbGF5ZXJzQW5kQm9hcmRzLFxuICAgIGRyYXdCb2FyZCxcbiAgICBlbmFibGVCb2FyZFJlY2VpdmVBdHRhY2ssXG4gICAgc3RhcnRHYW1lLFxuICB9O1xufSkoKTtcbiIsImxldCBVTklUX1RFU1Q7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5VTklUX1RFU1QgPSB0cnVlOyAvLyBDb21tZW50IG91dCB0aGlzIGxpbmUgYWZ0ZXIgdW5pdCB0ZXN0LlxuXG5jb25zdCBERUZBVUxUX0JPQVJEX1NJWkUgPSAxMDtcblxuLyoqXG4gKiBCb2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQm9hcmQgbWFnYWdlcyBTaGlwcywgYW5kIGNoZWNrIHRoZSBoaXQgZm9yIHVzZXIuXG4gKiBAcGFyYW0ge051bWJlcn0gaW5TaXplIFNpemUgb2YgdGhlIGdhbWUgYm9hcmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpblNpemUpID0+IHtcbiAgLyoqXG4gICAqIEJvYXJkIHBsYWluIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IGJvYXJkID0ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgc2l6ZTogaW5TaXplIHx8IERFRkFVTFRfQk9BUkRfU0laRSxcbiAgICBmbGVldDogW10sXG4gICAgaGl0czogW10sXG4gICAgbWlzc2VzOiBbXSxcbiAgICBpbnRhY3Q6IFtdLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGNoZWNrIHRoZSBzaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHJldHVybnMgQm9hcmQgc2l6ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgcmV0dXJuIGJvYXJkLnNpemU7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgb3RoZXIgbW9kdWxlcyB0byBnZXQgdGhlIGxpc3Qgb2YgYWxsIGludGFjdCBwb3NpdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGludGFjdCgpIHtcbiAgICByZXR1cm4gYm9hcmQuaW50YWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93IG90aGVyIG1vZHVsZXMgdG8gY2hlY2sgc2l6ZSBvZiBjdXJyZW50IGZsZWV0LlxuICAgKi9cbiAgZnVuY3Rpb24gZmxlZXRTaXplKCkge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYm9hcmQsIHB1dCBhbGwgaW50YWN0IHBvc2l0aW9uIGludG8gYm9hcmQuaW50YWN0IGFycmF5LlxuICAgKiBUaGUgcG9zaXRpb24gW3JvdywgY29sdW1uXSBpcyBjb2RlZCBhczogXCJyb3ctY29sdW1uXCIuXG4gICAqL1xuICBmdW5jdGlvbiBmaWxsSW50YWN0KCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkLnNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBib2FyZC5zaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBib2FyZC5pbnRhY3QucHVzaChgJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBwb2ludCBmcm9tIHRoZSBib2FyZC5pbnRhY3QgYXJyYXkuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgUG9zaXRpb24gc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUludGFjdChzdHIpIHtcbiAgICBjb25zdCBpbmRleCA9IGJvYXJkLmludGFjdC5maW5kSW5kZXgoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gc3RyKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG4gICAgYm9hcmQuaW50YWN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIG5ldyBzaGlwIHNpdHMgaW4gdGhlIGZpeGVkIHNoaXAncyBmb3JiaWRlbiB6b25lLlxuICAgKiBAcGFyYW0ge1NoaXB9IGZpeGVkU2hpcCBUaGUgc2hpcCBhbHJlYWR5IHB1dCBvbiB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7QXJyYXl9IG5ld0hlYWQgSGVhZCBwb3NpdGlvbltyb3csIGNvbHVtbl0gb2YgdGhlIG5ldyBzaGlwLlxuICAgKiBAcGFyYW0ge0FycmF5fSBuZXdUYWlsIFRhaWwgcG9zaXRpb25bcm93LCBjb2x1bW5dIG9mIHRoZSBuZXcgc2hpcC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGVzZSB0d28gc2hpcHMgaGF2ZSBvdmVybGFwIGVhY2ggb3RoZXIsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGlzT3ZlcmxhcChmaXhlZFNoaXAsIG5ld0hlYWQsIG5ld1RhaWwpIHtcbiAgICBjb25zdCBbaGVhZFJvdywgaGVhZENvbHVtbl0gPSBmaXhlZFNoaXAuaGVhZCgpO1xuICAgIGNvbnN0IFt0YWlsUm93LCB0YWlsQ29sdW1uXSA9IGZpeGVkU2hpcC50YWlsKCk7XG4gICAgY29uc3Qgb3ZlcmxhcFJvd1N0YXJ0ID0gTWF0aC5tYXgoMCwgaGVhZFJvdyAtIDEpO1xuICAgIGNvbnN0IG92ZXJsYXBDb2x1bW5TdGFydCA9IE1hdGgubWF4KDAsIGhlYWRDb2x1bW4gLSAxKTtcbiAgICBjb25zdCBvdmVybGFwUm93RW5kID0gTWF0aC5taW4oYm9hcmQuc2l6ZSAtIDEsIHRhaWxSb3cgKyAxKTtcbiAgICBjb25zdCBvdmVybGFwQ29sdW1uRW5kID0gTWF0aC5taW4oYm9hcmQuc2l6ZSAtIDEsIHRhaWxDb2x1bW4gKyAxKTtcbiAgICBpZiAobmV3SGVhZFswXSAtIG5ld1RhaWxbMF0gPT09IDApIHtcbiAgICAgIGlmIChuZXdIZWFkWzBdIDwgb3ZlcmxhcFJvd1N0YXJ0IHx8IG5ld0hlYWRbMF0gPiBvdmVybGFwUm93RW5kKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobmV3VGFpbFsxXSA8IG92ZXJsYXBDb2x1bW5TdGFydCB8fCBuZXdIZWFkWzFdID4gb3ZlcmxhcENvbHVtbkVuZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChuZXdIZWFkWzFdIDwgb3ZlcmxhcENvbHVtblN0YXJ0IHx8IG5ld0hlYWRbMV0gPiBvdmVybGFwQ29sdW1uRW5kKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5ld1RhaWxbMF0gPCBvdmVybGFwQ29sdW1uU3RhcnQgfHwgbmV3SGVhZFswXSA+IG92ZXJsYXBSb3dFbmQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdGFyZ2V0IHBvc2l0aW9uW3JvdywgY29sdW1uXSBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBUYXJnZXQgcm93LlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIFRhcmdldCBjb2x1bW4uXG4gICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBUaGUgc2hpcCB0byBiZSBwdXQgaW50byB0aGUgYm9hcmQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgaXMgb2ssIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGF2YWlsYWJsZShyb3csIGNvbHVtbiwgc2hpcCkge1xuICAgIC8vIGNoZWNrIGhlYWRcbiAgICBpZiAocm93IDwgMFxuICAgICAgfHwgcm93ID49IGJvYXJkLnNpemVcbiAgICAgIHx8IGNvbHVtbiA8IDBcbiAgICAgIHx8IGNvbHVtbiA+PSBib2FyZC5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIHRhaWxcbiAgICBjb25zdCB0YWlsUm93ID0gKHNoaXAuaXNIb3Jpem9udGFsKCkpID8gcm93IDogKHJvdyArIHNoaXAuc2l6ZSgpIC0gMSk7XG4gICAgY29uc3QgdGFpbENvbHVtbiA9IChzaGlwLmlzSG9yaXpvbnRhbCgpKSA/IChjb2x1bW4gKyBzaGlwLnNpemUoKSAtIDEpIDogY29sdW1uO1xuICAgIGlmICh0YWlsUm93IDwgMFxuICAgICAgfHwgdGFpbFJvdyA+PSBib2FyZC5zaXplXG4gICAgICB8fCB0YWlsQ29sdW1uIDwgMFxuICAgICAgfHwgdGFpbENvbHVtbiA+PSBib2FyZC5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIG92ZXJsYXBcbiAgICBjb25zdCBuZXdIZWFkID0gW3JvdywgY29sdW1uXTtcbiAgICBjb25zdCBuZXdUYWlsID0gKHNoaXAuaXNIb3Jpem9udGFsKCkpXG4gICAgICA/IFtyb3csIGNvbHVtbiArIHNoaXAuc2l6ZSgpXSA6IFtyb3cgKyBzaGlwLnNpemUoKSwgY29sdW1uXTtcbiAgICBpZiAoYm9hcmQuZmxlZXQuc29tZSgoZml4ZWRTaGlwKSA9PiBpc092ZXJsYXAoZml4ZWRTaGlwLCBuZXdIZWFkLCBuZXdUYWlsKSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXQgc2hpcCBpbnRvIGEgY2VydGFpbiBwb3NpdGlvbiBpZiBpdCdzIGF2YWlsYWJsZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0aGUgc2hpcCBoZWFkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRoZSBzaGlwIGhlYWQuXG4gICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBUaGUgc2hpcCBvYmplY3QuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhpcyBwb3NpdGlvbiBpcyBsZWdhbCBmb3IgYSBuZXcgc2hpcCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gcHV0U2hpcChyb3csIGNvbHVtbiwgc2hpcCkge1xuICAgIHNoaXAucHV0KHJvdywgY29sdW1uKTtcbiAgICBib2FyZC5mbGVldC5wdXNoKHNoaXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNoaXAgZnJvbSB0aGUgYm9hcmQgZmxlZXQgKG9ubHkgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBmbGVldCkuXG4gICAqIEBwYXJhbSB7U2hpcH0gU2hpcCB0byBiZSByZW1vdmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgaW5kZXggPSBib2FyZC5mbGVldC5maW5kSW5kZXgoKGZsZWV0U2hpcCkgPT4gZmxlZXRTaGlwLmlkKCkgPT09IHNoaXAuaWQoKSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgIGJvYXJkLmZsZWV0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogT25seSB1c2VkIHRvIHRvZ2dsZSBzaGlwcyBhbHJlYWR5IGluIHRoZSBmbGVldC5cbiAgICogQHBhcmFtIHtTaGlwfSBzaGlwIFRhcmdldCBzaGlwLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRvZ2dsZWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUZsZWV0U2hpcChzaGlwKSB7XG4gICAgcmVtb3ZlU2hpcChzaGlwKTtcbiAgICBzaGlwLnRvZ2dsZURpcmVjdGlvbigpO1xuICAgIGlmIChhdmFpbGFibGUoLi4uc2hpcC5oZWFkKCksIHNoaXApKSB7XG4gICAgICBwdXRTaGlwKC4uLnNoaXAuaGVhZCgpLCBzaGlwKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgdG9nZ2xlXG4gICAgc2hpcC50b2dnbGVEaXJlY3Rpb24oKTsgLy8gYmFjayB0byBvcmdpbmFsIGRpcmVjdGlvblxuICAgIHB1dFNoaXAoLi4uc2hpcC5oZWFkKCksIHNoaXApOyAvLyBwdXQgYmFjayB0byBmbGVldFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gcG9zaXRpb25bcm93LCBjb2x1bW5dIGVxdWFsIHRvIGVhY2ggb3RoZXIuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvc2l0aW9uQSBbcm93LCBjb2x1bW5dXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvc2l0aW9uQiBbcm93LCBjb2x1bW5dXG4gICAqIEByZXR1cm5zIHRydWUgaWYgZXF1YWwsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHBvc2l0aW9uRXF1YWwocG9zaXRpb25BLCBwb3NpdGlvbkIpIHtcbiAgICByZXR1cm4gKHBvc2l0aW9uQVswXSA9PT0gcG9zaXRpb25CWzBdKSAmJiAocG9zaXRpb25BWzFdID09PSBwb3NpdGlvbkJbMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgcG9zaXRpb24gaGFzIGJlZW4gaGl0IGJlZm9yZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0YXJnZXQgaGFzIGJlZW4gaGl0IGJlZm9yZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gYWxyZWFkeUhpdChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiBib2FyZC5oaXRzLnNvbWUoKGhpdCkgPT4gcG9zaXRpb25FcXVhbChoaXQsIFtyb3csIGNvbHVtbl0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGVhdGhlciB0aGUgdGFyZ2V0IHBvc2l0aW9uIGhhcyBiZWVuIGF0dGFja2VkXG4gICAqIGJ1dCBpdCB3YXMgYSBtaXNzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGl0IHdhcyBhIG1pc3MsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFscmVhZHlNaXNzZWQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYm9hcmQubWlzc2VzLnNvbWUoKG1pc3MpID0+IHBvc2l0aW9uRXF1YWwobWlzcywgW3JvdywgY29sdW1uXSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgZXhpc3RzIGluIGF0dGFjayBoaXN0b3J5IGJvYXJkLmhpdHMgb3IgYm9hcmQubWlzc2VzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRhcmdldCBncmlkLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRhcmdldCBoYXMgYmVlbiBhdHRhY2tlZCBiZWZvcmUsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFscmVhZHlCZWVuQXR0YWNrZWQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYWxyZWFkeUhpdChyb3csIGNvbHVtbikgfHwgYWxyZWFkeU1pc3NlZChyb3csIGNvbHVtbik7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGF0dGFjayBjYW4gaGl0IGEgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBjYW4gaGl0LCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBjYW5IaXRTaGlwKHJvdywgY29sdW1uKSB7XG4gICAgcmV0dXJuIGJvYXJkLmZsZWV0LnNvbWUoKGZsZWV0U2hpcCkgPT4gZmxlZXRTaGlwLmhpdChyb3csIGNvbHVtbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBoaXQgZWFjaCBvZiB0aGUgc2hpcHMgaW4gdGhlIGJvYXJkLmZsZWV0LFxuICAgKiBvbmx5IGlmIHRoZSB0YXJnZXQgcG9zaXRpb24gaGFzIG5ldmVyIGJlZW4gYXR0YWNrZWQgYmVmb3JlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aVkgb2YgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aVggb2YgdGFyZ2V0LlxuICAgKiBAcmV0dXJuIHRydWUgaWYgaGl0LCBmYWxzZSBpZiBtaXNzZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gW3JvdywgY29sdW1uXTtcbiAgICBpZiAoYWxyZWFkeUJlZW5BdHRhY2tlZCguLi50YXJnZXQpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGhpdCA9IGNhbkhpdFNoaXAocm93LCBjb2x1bW4pO1xuICAgIGlmIChoaXQpIHtcbiAgICAgIGJvYXJkLmhpdHMucHVzaCh0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2FyZC5taXNzZXMucHVzaCh0YXJnZXQpO1xuICAgIH1cbiAgICByZW1vdmVGcm9tSW50YWN0KGAke3Jvd30tJHtjb2x1bW59YCk7XG4gICAgcmV0dXJuIGhpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbGwgc2hpcHMgYXJlIHN1bmsuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgYWxsIHNoaXBzIGFyZSBzdW5rLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBhbGxTdW5rKCkge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5ldmVyeSgoZmxlZXRTaGlwKSA9PiBmbGVldFNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGJvYXJkLlxuICAgKi9cbiAgZmlsbEludGFjdCgpO1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgQVBJXG4gICAqL1xuICBjb25zdCBhcGkgPSB7XG4gICAgc2l6ZSxcbiAgICBpbnRhY3QsXG4gICAgZmxlZXRTaXplLFxuICAgIGF2YWlsYWJsZSxcbiAgICBwdXRTaGlwLFxuICAgIHJlbW92ZVNoaXAsXG4gICAgdG9nZ2xlRmxlZXRTaGlwLFxuICAgIGFscmVhZHlIaXQsXG4gICAgYWxyZWFkeU1pc3NlZCxcbiAgICBhbHJlYWR5QmVlbkF0dGFja2VkLFxuICAgIGNhbkhpdFNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBUEkgb25seSBmb3IgdW5pdCB0ZXN0LlxuICAgKi9cbiAgaWYgKFVOSVRfVEVTVCkge1xuICAgIGFwaS5ib2FyZCA9IGJvYXJkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5hcGksXG4gIH07XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgUGxheWVyLCB7XG4gIEFJLFxuICBIVU1BTixcbiAgRUFTWSxcbiAgTk9STUFMLFxuICBIQVJELFxufSBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCB7XG4gIEFJLFxuICBIVU1BTixcbiAgRUFTWSxcbiAgTk9STUFMLFxuICBIQVJELFxufTtcblxubGV0IFVOSVRfVEVTVDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcblVOSVRfVEVTVCA9IHRydWU7IC8vIENvbW1lbnQgb3V0IHRoaXMgbGluZSBvbmNlIGZpbmlzaCB0aGUgdW5pdCB0ZXN0cy5cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3QgREVGQVVMVF9CT0FSRF9TSVpFID0gMTA7IC8vIGRlZmF1bHQgZ2FtZSBib2FyZCBzaXplXG4gIC8vIERlZmF1bHQgZmxlZXQgc2V0dGluZy4gQWNjb3JkaW5nIHRvIDE5OTAncyBCYXR0bGVzaGlwIEdhbWUgb2YgTWlsdG9uIEJyYWRsZXQgQ29tcGFueS5cbiAgY29uc3QgU1RBTkRBUkRfRkxFRVQgPSBbXG4gICAgLy8gW25hbWUsIHNpemVdXG4gICAgWydjYXJyaWVyJywgNV0sXG4gICAgWydiYXR0bGVzaGlwJywgNF0sXG4gICAgWydjcnVpc2VyJywgM10sXG4gICAgWydzdWJtYXJpbmUnLCAzXSxcbiAgICBbJ2Rlc3Ryb3llcicsIDJdLFxuICBdO1xuXG4gIC8qKlxuICAgKiBHYW1lIG1vZHVsZSBwcm90by5cbiAgICogIHBsYXllcnM6IEFycmF5LiBUd28gcGxheWVycy5cbiAgICogIGN1cnJlbnRQbGF5ZXI6IE51bWJlci4gSW5kZXggb2YgY3VycmVudCBwbGF5ZXIgaW4gdGhlIHBsYXllcnMgYXJyYXkuXG4gICAqL1xuICBjb25zdCBnYW1lID0ge307XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgaW50ZWdlciBpbiByYW5nZSBvZiBbMCwgbWF4KS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBNYXggdmFsdWUgKGV4Y2x1c2l2ZSkuXG4gICAqIEByZXR1cm4gR2VuZXJhdGVkIGludGVnZXIuXG4gICAqL1xuICBmdW5jdGlvbiByYW5kb20obWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICAvKipcbiAgICogUGljayB0aGUgcmFuZG9tIHBvc2l0aW9uIFtyb3csIGNvbHVtbl0gaW4gdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge0JvYXJkfSBib2FyZCBUYXJnZXQgYm9hcmQuXG4gICAqIEByZXR1cm4gUmFuZG9tIHBvc2l0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tUG9zaXRpb24oYm9hcmQpIHtcbiAgICByZXR1cm4gW3JhbmRvbShib2FyZC5zaXplKCkpLCByYW5kb20oYm9hcmQuc2l6ZSgpKV07XG4gIH1cblxuICAvKipcbiAgICogQXV0b2ZpbGwocmFuZG9tbHkpIGEgZ2FtZSBib2FyZCB3aXRoIGZsZWV0IHNoaXBzLlxuICAgKiBAcGFyYW0ge0JvYXJkfSBib2FyZCBUYXJnZXQgYm9hcmQuXG4gICAqL1xuICBmdW5jdGlvbiBhdXRvZmlsbEZsZWV0KGJvYXJkKSB7XG4gICAgU1RBTkRBUkRfRkxFRVQuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKC4uLnRlbXBsYXRlKTtcbiAgICAgIGlmIChyYW5kb20oMikgPT09IDEpIHNoaXAudG9nZ2xlRGlyZWN0aW9uKCk7XG4gICAgICBsZXQgcG9zaXRpb24gPSByYW5kb21Qb3NpdGlvbihib2FyZCk7XG4gICAgICB3aGlsZSAoIWJvYXJkLmF2YWlsYWJsZSguLi5wb3NpdGlvbiwgc2hpcCkpIHtcbiAgICAgICAgcG9zaXRpb24gPSByYW5kb21Qb3NpdGlvbihib2FyZCk7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXRTaGlwKC4uLnBvc2l0aW9uLCBzaGlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgYWxsIHBsYXllcnMuXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIHBsYXllcnNcbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggUGxheWVyIG9iamVjdCBieSB0aGVpciBpZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIHBsYXllciBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIHBsYXllcihpZCkge1xuICAgIHJldHVybiBnYW1lLnBsYXllcnMuZmluZCgodGhlUGxheWVyKSA9PiB0aGVQbGF5ZXIuaWQoKSA9PT0gaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdHdvIHBsYXllcnMgd2l0aCByYW5kb21seSBhdXRvZmlsbGVkIGJvYXJkLlxuICAgKiBBSSBwbGF5ZXIncyBkZWZhdWx0IGxldmVsIGlzIEVBU1kuXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBwbGF5ZXIxVHlwZSBIVU1BTiBvciBBSVxuICAgKiBAcGFyYW0ge1N5bWJvbH0gcGxheWVyMlR5cGUgSFVNQU4gb3IgQUlcbiAgICovXG4gIGZ1bmN0aW9uIGluaXRQbGF5ZXJzQW5kQm9hcmRzKHBsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZSkge1xuICAgIGdhbWUucGxheWVycyA9IFtdO1xuICAgIGNvbnN0IHBsYXllclR5cGVzID0gW3BsYXllcjFUeXBlLCBwbGF5ZXIyVHlwZV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJUeXBlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV3UGxheWVyID0gUGxheWVyKGksIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIHBsYXllclR5cGVzW2ldKTtcbiAgICAgIGF1dG9maWxsRmxlZXQobmV3UGxheWVyLmJvYXJkKCkpO1xuICAgICAgZ2FtZS5wbGF5ZXJzLnB1c2gobmV3UGxheWVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBBSS5cbiAgICogSXQgY2FuIGFsc28gYmUgdXNlZCB0byBjaGFuZ2UgQUkgbGV2ZWwuXG4gICAqIEFJIHBsYXllcidzIGJvYXJkIGlzIGZpbGxlZCBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgZnVuY3Rpb24gYWdhaW5zdEFJKGxldmVsKSB7XG4gICAgZ2FtZS5wbGF5ZXJzWzFdID0gUGxheWVyKDEsIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIEFJLCBsZXZlbCk7XG4gICAgYXV0b2ZpbGxGbGVldChnYW1lLnBsYXllcnNbMV0uYm9hcmQoKSk7XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBIVU1BTi5cbiAgICovXG4gIGZ1bmN0aW9uIGFnYWluc3RIdW1hbigpIHtcbiAgICBnYW1lLnBsYXllcnNbMV0gPSBQbGF5ZXIoMSwgQm9hcmQoREVGQVVMVF9CT0FSRF9TSVpFKSwgSFVNQU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZXh0IHBsYXllcidzIGluZGV4LlxuICAgKiBAcmV0dXJucyBpbmRleCBvZiBuZXh0IHBsYXllclxuICAgKi9cbiAgZnVuY3Rpb24gbmV4dEluZGV4KCkge1xuICAgIHJldHVybiAoZ2FtZS5jdXJyZW50UGxheWVyICsgMSkgJSBnYW1lLnBsYXllcnMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGlzIGh1bWFuIHBsYXllciwgZG8gbm90aGluZyh3YWl0IGZvciBodW1hbiB0byBjbGlja1xuICAgKiBvbiB0aGUgYm9hcmQgdG8gdHJpZ2dlciBhbiBhdHRhY2sgZXZlbnQpLlxuICAgKlxuICAgKiBBSSBQbGF5ZXIncyBhdHRhY2sgZnVuY3Rpb24gb25seSBtYWtlcyBhIGRpY2lzaW9uIG9mXG4gICAqIHdoZXJlIHRvIGF0dGFjaywgYW5kIGNhbGxiYWNrIGNvbnRyb2xsZXIgdG8gZG8gdGhlXG4gICAqIHJlc3Qgb2YgdGhlIGpvYi5cbiAgICovXG4gIGZ1bmN0aW9uIG5leHRUdXJuKGNvbnRyb2xsZXJBdHRhY2tDYWxsYmFjaykge1xuICAgIGdhbWUuY3VycmVudFBsYXllciA9IG5leHRJbmRleCgpO1xuICAgIGNvbnN0IGN1cnJQbGF5ZXIgPSBnYW1lLnBsYXllcnNbZ2FtZS5jdXJyZW50UGxheWVyXTtcbiAgICBpZiAoIWN1cnJQbGF5ZXIuaXNBSSgpKSByZXR1cm47IC8vIGh1bWFuIHBsYXllciBkbyBub3RoaW5nLlxuICAgIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5wbGF5ZXJzW25leHRJbmRleCgpXTtcbiAgICBjb25zdCB0YXJnZXQgPSBjdXJyUGxheWVyLmF0dGFjayhvcHBvbmVudC5ib2FyZCgpKTsgLy8gQUkgcGxheWVyJ3MgbmV4dCBhdHRhY2sgdGFyZ2V0XG4gICAgaWYgKHRhcmdldCkgeyAvLyBpZiB0aGVyZSdzIG5vIG1vcmUgZ3JpZCB0byBiZSBhdHRhY2tlZCwgdGFyZ2V0IHdpbGwgYmUgdW5kZWZpbmVkLlxuICAgICAgY29udHJvbGxlckF0dGFja0NhbGxiYWNrKC4uLnRhcmdldCwgb3Bwb25lbnQuaWQoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gcGxheWVyIGhhcyBwdXQgYWxsIGhpcyBzaGlwcyBpbnRvIHRoZSBib2FyZC5cbiAgICogQ29udHJvbGxlciBjYWxsIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgdGhlIGdhbWUuXG4gICAqXG4gICAqIEJlZm9yZSBzdGFydCB0aGUgZ2FtZSB0aGlzIGZ1bmN0aW9uIHdpbGwgY2hlY2tcbiAgICogd2hlYXRoZXIgYWxsIHJlcXVpcmVtZW50cyBhYm92ZSBoYXZlIGJlZW4gbWV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiAgdHJ1ZSwgaWYgYWxsIHJlcXVpcmVtZW50cyBoYXZlIGJlZW4gbWV0LCB0aGUgZ2FtZSBpcyBzdGFydGVkLlxuICAgKiAgb3RoZXJ3aXNlLCBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIC8vIGNoZWNrIGNvbmZpZ3VyYXRpb25zXG4gICAgaWYgKGdhbWUucGxheWVycy5zb21lKCh0aGVQbGF5ZXIpID0+IHRoZVBsYXllci5ib2FyZCgpLmZsZWV0U2l6ZSgpXG4gICAgICAgICE9PSBTVEFOREFSRF9GTEVFVC5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFN0YXJ0IGdhbWUuXG4gICAgLy8gU2V0IHRvIHRoZSBsYXN0IHBsYXllci4gbmV4dFR1cm4oKSB3aWxsIG1vdmUgb24uXG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gZ2FtZS5wbGF5ZXJzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBhcGkgPSB7XG4gICAgREVGQVVMVF9CT0FSRF9TSVpFLFxuICAgIHBsYXllcnMsXG4gICAgcGxheWVyLFxuICAgIGF1dG9maWxsRmxlZXQsXG4gICAgbmV4dFR1cm4sXG4gICAgaW5pdFBsYXllcnNBbmRCb2FyZHMsXG4gICAgYWdhaW5zdEFJLFxuICAgIGFnYWluc3RIdW1hbixcbiAgICBzdGFydCxcbiAgfTtcblxuICBpZiAoVU5JVF9URVNUKSB7XG4gICAgYXBpLmdhbWUgPSBnYW1lO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5hcGksXG4gIH07XG59KSgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcXVvdGUtcHJvcHMgKi9cbi8qKlxuICogVGhlcmUgYXJlIHR3byBkaWZmZXJlbnQgdHlwZXMgb2YgcGxheWVyOlxuICogIDEuIGFpXG4gKiAgMi4gaHVtYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEFJID0gU3ltYm9sKCdhaScpO1xuZXhwb3J0IGNvbnN0IEhVTUFOID0gU3ltYm9sKCdodW1hbicpO1xuXG4vKipcbiAqIFRocmVlIGRpZmZlcmVudCBsZXZlbCBvZiBBSS5cbiAqL1xuZXhwb3J0IGNvbnN0IEVBU1kgPSBTeW1ib2woJ2NoaWxkJyk7XG5leHBvcnQgY29uc3QgTk9STUFMID0gU3ltYm9sKCdub3JtYWwnKTtcbmV4cG9ydCBjb25zdCBIQVJEID0gU3ltYm9sKCdoYXJkJyk7XG5cbi8qKlxuICogUGxheWVyIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0JvYXJkfSBpbkJvYXJkIFBsYXllcidzIGdhbWUgYm9hcmQuXG4gKiBAcGFyYW0ge1N5bWJvbH0gaW5UeXBlIEhVTUFOIG9yIEFJLlxuICogQHBhcmFtIHtTeW1ib2x9IGluTGV2ZWwgT3B0aW9uYWwuIEFJIGxldmVsLlxuICovXG5leHBvcnQgZGVmYXVsdCAoaW5JZCwgaW5Cb2FyZCwgaW5UeXBlLCBpbkxldmVsKSA9PiB7XG4gIC8qKlxuICAgKiBQbGF5ZXIgcGxhaW4gb2JqZWN0LlxuICAgKi9cbiAgY29uc3QgcGxheWVyID0ge1xuICAgIGlkOiBpbklkLFxuICAgIHR5cGU6IGluVHlwZSxcbiAgICBib2FyZDogaW5Cb2FyZCxcbiAgfTtcblxuICBpZiAocGxheWVyLnR5cGUgPT09IEFJKSB7XG4gICAgcGxheWVyLmxldmVsID0gaW5MZXZlbCB8fCBFQVNZOyAvLyBkZWZhdWx0IGlzIEVBU1lcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGxheWVyIGlkLlxuICAgKiBAcmV0dXJucyBQbGF5ZXIgaWQuXG4gICAqL1xuICBmdW5jdGlvbiBpZCgpIHtcbiAgICByZXR1cm4gcGxheWVyLmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHBsYXllciB0eXBlLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGlzIHBsYXllciBpcyBBSS5cbiAgICovXG4gIGZ1bmN0aW9uIGlzQUkoKSB7XG4gICAgcmV0dXJuIHBsYXllci50eXBlID09PSBBSTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBBSSBwbGF5ZXIncyBsZXZlbC5cbiAgICogQHJldHVybnMgQUkgcGxheWVyJ3MgbGV2ZWwuIHVuZGVmaW5lZCBpZiBpdCdzIG5vdCBBSSBwbGF5ZXIuXG4gICAqL1xuICBmdW5jdGlvbiBhaUxldmVsKCkge1xuICAgIGlmIChwbGF5ZXIudHlwZSAhPT0gQUkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHBsYXllci5sZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyBHYW1lIG1vZHVsZSB0byBzZXQgQUkgbGV2ZWwuXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBsZXZlbCBFQVNZIG9yIE5PUk1BTCBvciBIQVJEXG4gICAqL1xuICBmdW5jdGlvbiBzZXRBaUxldmVsKGxldmVsKSB7XG4gICAgaWYgKHBsYXllci50eXBlICE9PSBBSSkgcmV0dXJuO1xuICAgIHBsYXllci5sZXZlbCA9IGxldmVsO1xuICB9XG5cbiAgZnVuY3Rpb24gYm9hcmQoKSB7XG4gICAgcmV0dXJuIHBsYXllci5ib2FyZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSYW5kb21seSBwaWNrIGEgdGFyZ2V0IGZyb20gb3Bwb25lbnQgYm9hcmQncyBpbnRhY3QgbGlzdC5cbiAgICogQHBhcmFtIHtCb2FyZH0gb3Bwb25lbnRCb2FyZCBPcHBvZW5lbnQncyBib2FyZCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHRoZSB0YXJnZXQgY29vcmRpbmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICBpZiAob3Bwb25lbnRCb2FyZC5pbnRhY3QoKS5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHBvbmVudEJvYXJkLmludGFjdCgpLmxlbmd0aCk7XG4gICAgY29uc3Qgc3RyID0gb3Bwb25lbnRCb2FyZC5pbnRhY3QoKVtpbmRleF07XG4gICAgY29uc3QgW3Jvd1N0ciwgY29sdW1uU3RyXSA9IHN0ci5zcGxpdCgnLScpO1xuICAgIHJldHVybiBbcGFyc2VJbnQocm93U3RyLCAxMCksIHBhcnNlSW50KGNvbHVtblN0ciwgMTApXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaWNrKHdpdGggbm9ybWFsIHN0cmF0ZWd5KSBhIHRhcmdldCBmcm9tIG9wcG9uZW50IGJvYXJkJ3MgaW50YWN0IGxpc3QuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IG9wcG9uZW50Qm9hcmQgT3Bwb2VuZW50J3MgYm9hcmQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB0aGUgdGFyZ2V0IGNvb3JkaW5hdGVcbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbEF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgcmV0dXJuIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaWNrKHdpdGggYSBzbWFydCBzdHJhdGVneSkgYSB0YXJnZXQgZnJvbSBvcHBvbmVudCBib2FyZCdzIGludGFjdCBsaXN0LlxuICAgKiBAcGFyYW0ge0JvYXJkfSBvcHBvbmVudEJvYXJkIE9wcG9lbmVudCdzIGJvYXJkIG9iamVjdC5cbiAgICogQHJldHVybnMgdGhlIHRhcmdldCBjb29yZGluYXRlXG4gICAqL1xuICBmdW5jdGlvbiBzbWFydEF0dGNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Qm9hcmR9IGJvYXJkIFRoZSBCb2FyZCBvYmplY3QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIE5vdGljZSBHYW1lIG1vZHVsZSB0byBydW4gbmV4dCByb3VuZC5cbiAgICogQHJldHVyblxuICAgKiAgPT0+IEFJIHBsYXllciByZXR1cm4gdGhlIGNvb3JkaW5hdGUgb2YgdGhlIHRhcmdldCBpdCB3YW50cyB0byBhdHRhY2suXG4gICAqICA9PT4gSHVtYW4gcGxheWVyIHdpbGwgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICovXG4gIGZ1bmN0aW9uIGF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgaWYgKHBsYXllci50eXBlID09PSBBSSkge1xuICAgICAgc3dpdGNoIChwbGF5ZXIubGV2ZWwpIHtcbiAgICAgICAgY2FzZSBFQVNZOlxuICAgICAgICAgIHJldHVybiByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICAgIGNhc2UgTk9STUFMOlxuICAgICAgICAgIHJldHVybiBub3JtYWxBdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICAgIGNhc2UgSEFSRDpcbiAgICAgICAgICByZXR1cm4gc21hcnRBdHRjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBodW1hbiBwbGF5ZXIgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBpc0FJLFxuICAgIGFpTGV2ZWwsXG4gICAgc2V0QWlMZXZlbCxcbiAgICBib2FyZCxcbiAgICBhdHRhY2ssXG4gIH07XG59O1xuIiwiLyoqXG4gKiBTaGlwIGlkIGdlbmVyYXRvci5cbiAqL1xuZnVuY3Rpb24qIGluZmluaXRlKCkge1xuICBsZXQgaW5kZXggPSAxO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHlpZWxkIGluZGV4O1xuICAgIGluZGV4ICs9IDE7XG4gIH1cbn1cblxuY29uc3QgR0VOID0gaW5maW5pdGUoKTtcbmNvbnN0IEhPUklaT05UQUwgPSBTeW1ib2woJ2hvcml6b250YWwnKTtcbmNvbnN0IFZFUlRJQ0FMID0gU3ltYm9sKCd2ZXJ0aWNhbCcpO1xuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdG8gaW5zdGFudGlhdGUgYSBTaGlwIG9iamVjdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIHNoaXAuIEV4OiBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGFuZCBkZXN0cm95ZXIuXG4gKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBIb3cgbWFueSBncmlkcyBvbiB0aGUgYm9hcmQgdGhlIHNoaXAgb2NjdXBpZXMuXG4gKiBAcmV0dXJuIEEgc2hpcCBtb2R1bGUgb2JqZWN0LlxuICovXG5leHBvcnQgZGVmYXVsdCAoaW5OYW1lLCBpblNpemUpID0+IHtcbiAgLyoqXG4gICAqIFNoaXAgcGxhaW4gb2JqZWN0LlxuICAgKi9cbiAgY29uc3Qgc2hpcCA9IHtcbiAgICBpZDogR0VOLm5leHQoKS52YWx1ZSxcbiAgICBuYW1lOiBpbk5hbWUsXG4gICAgc2l6ZTogaW5TaXplLFxuICAgIHJvdzogMCwgLy8gZGVmYXVsdFxuICAgIGNvbHVtbjogMCwgLy8gZGVmYXVsdFxuICAgIGRpcmVjdGlvbjogSE9SSVpPTlRBTCwgLy8gZGVmYXVsdFxuICAgIGhpdDogMCwgLy8gSG93IG1hbnkgdGltZXMgdGhlIHNoaXAgaXMgaGl0LlxuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBTaGlwJ3MgaWQuXG4gICAqL1xuICBmdW5jdGlvbiBpZCgpIHtcbiAgICByZXR1cm4gc2hpcC5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBTaGlwJ3MgbmFtZS5cbiAgICovXG4gIGZ1bmN0aW9uIG5hbWUoKSB7XG4gICAgcmV0dXJuIHNoaXAubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBTaXplIG9mIHRoZSBzaGlwLlxuICAgKi9cbiAgZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICByZXR1cm4gc2hpcC5zaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFBvc2l0aW9uIG9mIHRoZSBzaGlwIGhlYWQuXG4gICAqL1xuICBmdW5jdGlvbiBoZWFkKCkge1xuICAgIHJldHVybiBbc2hpcC5yb3csIHNoaXAuY29sdW1uXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFBvc2l0aW9uIG9mIHRoZSBzaGlwIHRhaWwuXG4gICAqL1xuICBmdW5jdGlvbiB0YWlsKCkge1xuICAgIHN3aXRjaCAoc2hpcC5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgSE9SSVpPTlRBTDpcbiAgICAgICAgcmV0dXJuIFtzaGlwLnJvdywgc2hpcC5jb2x1bW4gKyBzaGlwLnNpemUgLSAxXTtcbiAgICAgIGNhc2UgVkVSVElDQUw6XG4gICAgICAgIHJldHVybiBbc2hpcC5yb3cgKyBzaGlwLnNpemUgLSAxLCBzaGlwLmNvbHVtbl07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgZGlyZWN0aW9uIG9mIHRoZSBzaGlwLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBkaXJlY3Rpb24gaXMgaG9yaXpvbnRhbCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNIb3Jpem9udGFsKCkge1xuICAgIHJldHVybiBzaGlwLmRpcmVjdGlvbiA9PT0gSE9SSVpPTlRBTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBSZXR1cm4gaG93IG1hbnkgYXR0YWNrcyB0aGUgc2hpcCBoYXMgdGFrZW4uXG4gICAqL1xuICBmdW5jdGlvbiBjb3VudEhpdHMoKSB7XG4gICAgcmV0dXJuIHNoaXAuaGl0O1xuICB9XG5cbiAgLyoqXG4gICAqIEhPUklaT05UQUwgLT4gVkVSVElDQUxcbiAgICogVkVSVElDQUwgLT4gSE9SSVpPTlRBTFxuICAgKiBTaGlwIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgaWYgdGhlIGJvYXJkIGhhcyBlbm91Z2ggc3BhY2UuXG4gICAqIEJvYXJkIG1vZHVsZSB3aWxsIGNoZWNrIHRoYXQgZm9yIHVzIGJlZm9yZSBjYWxsIHRoaXMgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiB0b2dnbGVEaXJlY3Rpb24oKSB7XG4gICAgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBIT1JJWk9OVEFMKSB7XG4gICAgICBzaGlwLmRpcmVjdGlvbiA9IFZFUlRJQ0FMO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwLmRpcmVjdGlvbiA9IEhPUklaT05UQUw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE91ciBzaGlwcyBhcmUgbm90IGF3YXJlIG9mIHRoZSBzaXplIG9mIHRoZSBnYW1lIGJvYXJkLlxuICAgKiBCb2FyZCBtb2R1bGUgd2lsbCBjaGVjayB0aGUgdmFsaWRhdGlvbiBmb3IgdXMuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFkgb2YgdGhlIGhlYWQgb2YgdGhlIHNoaXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFggb2YgdGhlIGhlYWQgb2YgdGhlIHNoaXAuXG4gICAqL1xuICBmdW5jdGlvbiBwdXQocm93LCBjb2x1bW4pIHtcbiAgICBzaGlwLnJvdyA9IHJvdztcbiAgICBzaGlwLmNvbHVtbiA9IGNvbHVtbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NlcnRpb246IEVhY2ggZ3JpZCBvZiB0aGUgYm9hcmQgY2FuIG9ubHkgYmUgYXR0ZWNrZWQgb25jZS5cbiAgICogVGhlIHNoaXAgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCB3aGVhdGhlciBhIHNpbmdsZSBwYXJ0IGlzIGhpdCB0d2ljZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWCBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbiBBeGkgWSBvZiBvcHBvbmVudCdzIGF0dGFjay5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgc2hpcCBpcyBoaXQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGhpdChyb3csIGNvbHVtbikge1xuICAgIHN3aXRjaCAoc2hpcC5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgSE9SSVpPTlRBTDpcbiAgICAgICAgaWYgKHJvdyAhPT0gc2hpcC5yb3cpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGNvbHVtbiA8IHNoaXAuY29sdW1uIHx8IGNvbHVtbiA+IChzaGlwLmNvbHVtbiArIHNoaXAuc2l6ZSAtIDEpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWRVJUSUNBTDpcbiAgICAgICAgaWYgKGNvbHVtbiAhPT0gc2hpcC5jb2x1bW4pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHJvdyA8IHNoaXAucm93IHx8IHJvdyA+IChzaGlwLnJvdyArIHNoaXAuc2l6ZSAtIDEpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNoaXAuaGl0ICs9IDE7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgZXZlcnkgcG9ydCB0aGUgc2hpcCBoYXMgYmVlbiBoaXQuXG4gICAqIEFzIGFsd2F5cywgdGhlIHNoaXAgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCB3aGVhdGhlciBhIHNpbmdsZSBwYXJ0IGlzIGhpdCB0d2ljZS5cbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIChzaGlwLmhpdCA+PSBzaGlwLnNpemUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBzaXplLFxuICAgIG5hbWUsXG4gICAgaGVhZCxcbiAgICB0YWlsLFxuICAgIGlzSG9yaXpvbnRhbCxcbiAgICBjb3VudEhpdHMsXG4gICAgdG9nZ2xlRGlyZWN0aW9uLFxuICAgIHB1dCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcbiIsIi8vIGltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vbW9kZWxzL3BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBFTEVNRU5UUyA9IHtcbiAgICByb290OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpLFxuICAgIHBsYXllcnM6IFtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJbZGF0YS1pZD1cIjBcIl0nKSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJbZGF0YS1pZD1cIjFcIl0nKSxcbiAgICBdLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzaW5nbGUgZ3JpZCBpbiBib2FyZCBhY2NvcmRpbmcgdG8gaXQncyBjb29yZGluYXRlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEdyaWQgYXhpIFkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gR3JpZCBheGkgWC5cbiAgICogQHJldHVybnMgR3JpZCBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlR3JpZChyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICBncmlkLmRhdGFzZXQucm93ID0gcm93O1xuICAgIGdyaWQuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW47XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgc2VhIGxheWVyIG9mIGdhbWUgYm9hcmQuXG4gICAqIEhpdCBhcmVhIGFuZCBtaXNzZWQgYXJlYSBzaG91bGQgYmUgbWFya2VkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBCb2FyZCBzaXplLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGVja0hpdEhpc3RvcnlDYWxsYmFjayBCb2FyZC5hbHJlYWR5SGl0KCkgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNoZWNrTWlzc0hpc3RvcnlDYWxsYmFjayBCb2FyZC5hbHJlYWR5TWlzc2VkKCkgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIFNlYSBsYXllciBkaXYgZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdTZWFMYXllcihzaXplLCBjaGVja0hpdEhpc3RvcnlDYWxsYmFjaywgY2hlY2tNaXNzSGlzdG9yeUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VhTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWFMYXllci5jbGFzc0xpc3QuYWRkKCdzZWFMYXllcicpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBzaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBjb25zdCBzZWFHcmlkID0gY3JlYXRlR3JpZChyb3csIGNvbHVtbik7XG4gICAgICAgIGlmIChyb3cgPT09IDApIHNlYUdyaWQuY2xhc3NMaXN0LmFkZCgndXBwZXJCb3JkZXInKTtcbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gMCkgc2VhR3JpZC5jbGFzc0xpc3QuYWRkKCdsZWZ0Qm9yZGVyJyk7XG4gICAgICAgIGlmIChjaGVja0hpdEhpc3RvcnlDYWxsYmFjayhyb3csIGNvbHVtbikpIHtcbiAgICAgICAgICBzZWFHcmlkLmNsYXNzTGlzdC5hZGQoJ2FscmVhZHlIaXQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja01pc3NIaXN0b3J5Q2FsbGJhY2socm93LCBjb2x1bW4pKSB7XG4gICAgICAgICAgc2VhR3JpZC5jbGFzc0xpc3QuYWRkKCdhbHJlYWR5TWlzc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2VhTGF5ZXIuYXBwZW5kQ2hpbGQoc2VhR3JpZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWFMYXllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBzaGlwIGxheWVyIG9mIGdhbWUgYm9hcmQuXG4gICAqIFNoaXAgcG9zaXRpb24gc2hvdWxkIGJlIGhpZ2hsaWdodGVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBCb2FyZCBzaXplLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGxheWVyVHlwZSBcImFpXCIgb3IgXCJodW1hblwiLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGVja1NoaXBDYWxsYmFjayBCb2FyZC5jYW5IaXRTaGlwKCkgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIFNoaXAgbGF5ZXIgZGl2IGVsZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBkcmF3U2hpcExheWVyKHNpemUsIHBsYXllclR5cGUsIGNoZWNrU2hpcENhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2hpcExheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcExheWVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBMYXllcicpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBzaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBjb25zdCBzaGlwR3JpZCA9IGNyZWF0ZUdyaWQocm93LCBjb2x1bW4pO1xuICAgICAgICBpZiAocm93ID09PSAwKSBzaGlwR3JpZC5jbGFzc0xpc3QuYWRkKCd1cHBlckJvcmRlcicpO1xuICAgICAgICBpZiAoY29sdW1uID09PSAwKSBzaGlwR3JpZC5jbGFzc0xpc3QuYWRkKCdsZWZ0Qm9yZGVyJyk7XG4gICAgICAgIGlmIChjaGVja1NoaXBDYWxsYmFjayhyb3csIGNvbHVtbikpIHNoaXBHcmlkLmNsYXNzTGlzdC5hZGQoJ2hhc1NoaXAnKTtcbiAgICAgICAgc2hpcExheWVyLmFwcGVuZENoaWxkKHNoaXBHcmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChwbGF5ZXJUeXBlKSB7XG4gICAgICBjYXNlICdhaSc6XG4gICAgICAgIHNoaXBMYXllci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaHVtYW4nOlxuICAgICAgICBzaGlwTGF5ZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcExheWVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYm9hcmQgb2Ygc3BlY2lmaWMgcGxheWVyLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSBTaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBsYXllcklkIERlbm90ZSB3aGljaCBib2FyZCB0byBkcmF3LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGxheWVyVHlwZSBcImh1bWFuXCIgb3IgXCJhaVwiLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjaGVja1NoaXBDYWxsYmFjayBCb2FyZC5jYW5IaXRTaGlwKCkgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNoZWNrSGl0SGlzdG9yeUNhbGxiYWNrIEJvYXJkLmFscmVhZHlIaXQoKSBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2hlY2tNaXNzSGlzdG9yeUNhbGxiYWNrIEJvYXJkLmFscmVhZHlNaXNzZWQoKSBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdCb2FyZChcbiAgICBzaXplLFxuICAgIHBsYXllcklkLFxuICAgIHBsYXllclR5cGUsXG4gICAgY2hlY2tTaGlwQ2FsbGJhY2ssXG4gICAgY2hlY2tIaXRIaXN0b3J5Q2FsbGJhY2ssXG4gICAgY2hlY2tNaXNzSGlzdG9yeUNhbGxiYWNrLFxuICApIHtcbiAgICBjb25zdCB0YXJnZXQgPSBFTEVNRU5UUy5wbGF5ZXJzW3BsYXllcklkXS5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb25zdCBzZWFMYXllciA9IGRyYXdTZWFMYXllcihzaXplLCBjaGVja0hpdEhpc3RvcnlDYWxsYmFjaywgY2hlY2tNaXNzSGlzdG9yeUNhbGxiYWNrKTtcbiAgICBjb25zdCBzaGlwTGF5ZXIgPSBkcmF3U2hpcExheWVyKHNpemUsIHBsYXllclR5cGUsIGNoZWNrU2hpcENhbGxiYWNrKTtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc2VhTGF5ZXIpO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzaGlwTGF5ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIHNwZWNpZmljIGdyaWQgY29sb3IgYWNjb3JkaW5nIHRvIHRoZSBhdHRhY2sgcmVzdWx0LlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IFRhcmdldCBncmlkIEF4aSBZLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIFRhcmdldCBncmlkIEF4aSBYLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcGxheWVySWQgUGxheWVyIGlkLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGF0dGFja1Jlc3VsdCB0cnVlIGlmIGhpdCwgZmFsc2UgaWYgbWlzc2VkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyU2VhQWZ0ZXJBdHRhY2socm93LCBjb2x1bW4sIHBsYXllcklkLCBhdHRhY2tSZXN1bHQpIHtcbiAgICBjb25zdCBwbGF5ZXJFbGVtZW50ID0gRUxFTUVOVFMucGxheWVyc1twbGF5ZXJJZF07XG4gICAgY29uc3QgYm9hcmRFbGVtZW50ID0gcGxheWVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQgPiAuc2VhTGF5ZXInKTtcbiAgICBjb25zdCBncmlkID0gYm9hcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ncmlkW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYCk7XG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47IC8vIG5vIG1vcmUgZ3JpZCB0byBhdHRhY2suXG4gICAgaWYgKGF0dGFja1Jlc3VsdCkgeyAvLyBoaXRcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYWxyZWFkeUhpdCcpO1xuICAgIH0gZWxzZSB7IC8vIG1pc3NcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYWxyZWFkeU1pc3NlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGljayBvbiBib2FyZCB3aWxsIGNhbGxiYWNrIGNvbnRyb2xsZXIncyB1c2VyQXR0YWNrKCkgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gYm9hcmRFbGVtZW50IFRhcmdldCBib2FyZCBjb250YWluZXIgZWxlbWVudCBpbiBET00uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEFjdHVhbCBhdHRhY2sgbG9naWMgcmVzaWRlcyBpbiBjb250cm9sbGVyLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZFJlY2VpdmVBdHRhY2soY2FsbGJhY2spIHtcbiAgICBFTEVNRU5UUy5wbGF5ZXJzLmZvckVhY2goKHBsYXllckVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGJvYXJkRWxlbWVudCA9IHBsYXllckVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkID4gLnNlYUxheWVyJyk7XG4gICAgICBjb25zdCBncmlkcyA9IGJvYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCcpO1xuICAgICAgZ3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT4ge1xuICAgICAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2soXG4gICAgICAgICAgcGFyc2VJbnQoZ3JpZC5kYXRhc2V0LnJvdywgMTApLFxuICAgICAgICAgIHBhcnNlSW50KGdyaWQuZGF0YXNldC5jb2x1bW4sIDEwKSxcbiAgICAgICAgICBwYXJzZUludChwbGF5ZXJFbGVtZW50LmRhdGFzZXQuaWQsIDEwKSxcbiAgICAgICAgICAoYXR0YWNrUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQpIHsgLy8gaGl0XG4gICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYWxyZWFkeUhpdCcpO1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gbWlzc1xuICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2FscmVhZHlNaXNzZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICApKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gcHJldmVudCBjdXJyZW50IHBsYXllcidzIGJvYXJkIHRvIGJlIGF0dGFja2VkLlxuXG4gIHJldHVybiB7XG4gICAgZHJhd0JvYXJkLFxuICAgIHJlbmRlclNlYUFmdGVyQXR0YWNrLFxuICAgIGJpbmRSZWNlaXZlQXR0YWNrLFxuICB9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IENvbnRyb2xsZXIsIHtcbiAgQUksXG4gIEhVTUFOLFxuICBFQVNZLFxuICBOT1JNQUwsXG4gIEhBUkQsXG59IGZyb20gJy4vY29udHJvbGxlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL2luZGV4LmNzcyc7XG5cbmNvbnNvbGUubG9nKCdCZWZvcmUgZXZlcnl0aGluZyBzdGFydHMuJyk7XG5Db250cm9sbGVyLmluaXRQbGF5ZXJzQW5kQm9hcmRzKEhVTUFOLCBBSSk7XG5jb25zb2xlLmxvZygnaW5pdFBsYXllcnNBbmRCb2FyZHMoKSBmaW5pc2ghJyk7XG5Db250cm9sbGVyLmRyYXdCb2FyZCgpO1xuY29uc29sZS5sb2coJ2RyYXdCb2FyZCgpIGZpbmlzaCEnKTtcbkNvbnRyb2xsZXIuZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrKCk7XG5jb25zb2xlLmxvZygnZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrKCkgZmluaXNoIScpO1xuQ29udHJvbGxlci5zdGFydEdhbWUoKTtcbmNvbnNvbGUubG9nKCdzdGFydEdhbWUoKSBmaW5pc2ghJyk7XG4iXSwibmFtZXMiOlsiR2FtZSIsIkFJIiwiSFVNQU4iLCJFQVNZIiwiTk9STUFMIiwiSEFSRCIsIlZpZXciLCJpbml0UGxheWVyc0FuZEJvYXJkcyIsInBsYXllcjFUeXBlIiwicGxheWVyMlR5cGUiLCJkcmF3Qm9hcmQiLCJwbGF5ZXJzIiwiZm9yRWFjaCIsInBsYXllciIsInBsYXllclR5cGUiLCJpc0FJIiwiYm9hcmQiLCJERUZBVUxUX0JPQVJEX1NJWkUiLCJpZCIsImNhbkhpdFNoaXAiLCJhbHJlYWR5SGl0IiwiYWxyZWFkeU1pc3NlZCIsInBsYXllckF0dGFjayIsInJvdyIsImNvbHVtbiIsIm9wcG9uZW50SWQiLCJyZW5kZXJDYWxsYmFjayIsImFscmVhZHlCZWVuQXR0YWNrZWQiLCJyZXN1bHQiLCJyZWNlaXZlQXR0YWNrIiwicmVuZGVyU2VhQWZ0ZXJBdHRhY2siLCJuZXh0VHVybiIsImVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjayIsImJpbmRSZWNlaXZlQXR0YWNrIiwic3RhcnRHYW1lIiwic3RhcnQiLCJVTklUX1RFU1QiLCJpblNpemUiLCJzaXplIiwiZmxlZXQiLCJoaXRzIiwibWlzc2VzIiwiaW50YWN0IiwiZmxlZXRTaXplIiwibGVuZ3RoIiwiZmlsbEludGFjdCIsInB1c2giLCJyZW1vdmVGcm9tSW50YWN0Iiwic3RyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJwb3NpdGlvbiIsInNwbGljZSIsImlzT3ZlcmxhcCIsImZpeGVkU2hpcCIsIm5ld0hlYWQiLCJuZXdUYWlsIiwiaGVhZCIsImhlYWRSb3ciLCJoZWFkQ29sdW1uIiwidGFpbCIsInRhaWxSb3ciLCJ0YWlsQ29sdW1uIiwib3ZlcmxhcFJvd1N0YXJ0IiwiTWF0aCIsIm1heCIsIm92ZXJsYXBDb2x1bW5TdGFydCIsIm92ZXJsYXBSb3dFbmQiLCJtaW4iLCJvdmVybGFwQ29sdW1uRW5kIiwiYXZhaWxhYmxlIiwic2hpcCIsImlzSG9yaXpvbnRhbCIsInNvbWUiLCJwdXRTaGlwIiwicHV0IiwicmVtb3ZlU2hpcCIsImZsZWV0U2hpcCIsInRvZ2dsZUZsZWV0U2hpcCIsInRvZ2dsZURpcmVjdGlvbiIsInBvc2l0aW9uRXF1YWwiLCJwb3NpdGlvbkEiLCJwb3NpdGlvbkIiLCJoaXQiLCJtaXNzIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiYWxsU3VuayIsImV2ZXJ5IiwiaXNTdW5rIiwiYXBpIiwiU2hpcCIsIkJvYXJkIiwiUGxheWVyIiwiU1RBTkRBUkRfRkxFRVQiLCJnYW1lIiwicmFuZG9tIiwiZmxvb3IiLCJyYW5kb21Qb3NpdGlvbiIsImF1dG9maWxsRmxlZXQiLCJ0ZW1wbGF0ZSIsImZpbmQiLCJ0aGVQbGF5ZXIiLCJwbGF5ZXJUeXBlcyIsImkiLCJuZXdQbGF5ZXIiLCJhZ2FpbnN0QUkiLCJsZXZlbCIsImFnYWluc3RIdW1hbiIsIm5leHRJbmRleCIsImN1cnJlbnRQbGF5ZXIiLCJjb250cm9sbGVyQXR0YWNrQ2FsbGJhY2siLCJjdXJyUGxheWVyIiwib3Bwb25lbnQiLCJhdHRhY2siLCJTeW1ib2wiLCJpbklkIiwiaW5Cb2FyZCIsImluVHlwZSIsImluTGV2ZWwiLCJ0eXBlIiwiYWlMZXZlbCIsInNldEFpTGV2ZWwiLCJyYW5kb21BdHRhY2siLCJvcHBvbmVudEJvYXJkIiwic3BsaXQiLCJyb3dTdHIiLCJjb2x1bW5TdHIiLCJwYXJzZUludCIsIm5vcm1hbEF0dGFjayIsInNtYXJ0QXR0Y2siLCJpbmZpbml0ZSIsIkdFTiIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsImluTmFtZSIsIm5leHQiLCJ2YWx1ZSIsIm5hbWUiLCJkaXJlY3Rpb24iLCJjb3VudEhpdHMiLCJFTEVNRU5UUyIsInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVHcmlkIiwiZ3JpZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwiZHJhd1NlYUxheWVyIiwiY2hlY2tIaXRIaXN0b3J5Q2FsbGJhY2siLCJjaGVja01pc3NIaXN0b3J5Q2FsbGJhY2siLCJzZWFMYXllciIsInNlYUdyaWQiLCJhcHBlbmRDaGlsZCIsImRyYXdTaGlwTGF5ZXIiLCJjaGVja1NoaXBDYWxsYmFjayIsInNoaXBMYXllciIsInNoaXBHcmlkIiwicGxheWVySWQiLCJhdHRhY2tSZXN1bHQiLCJwbGF5ZXJFbGVtZW50IiwiYm9hcmRFbGVtZW50IiwiY2FsbGJhY2siLCJncmlkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiQ29udHJvbGxlciIsImNzcyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9