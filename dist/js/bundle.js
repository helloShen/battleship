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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --black: #000000;\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.board > .grid {\n  border: 1px solid var(--black);\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;;EAEjB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kEAAkE;EAClE,+DAA+D;AACjE;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":[":root {\n  /* board */\n  --board-size: 10;\n  --grid-size: 2rem;\n\n  /* color */\n  --black: #000000;\n}\n\n.board {\n  margin: 2rem;\n  display: grid;\n  grid-template-columns: repeat(var(--board-size), var(--grid-size));\n  grid-template-rows: repeat(var(--board-size), var(--grid-size));\n}\n\n.board > .grid {\n  border: 1px solid var(--black);\n}"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/game */ "./src/js/models/game.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/js/view.js");
// import Ship from './models/ship';
// import Board from './models/board';
// import Player from './models/player';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  function drawBoard() {
    _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    var playerIds = _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].players().reduce(function (arr, player) {
      arr.push(player.id());
      return arr;
    }, []);
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].drawBoard(_models_game__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_BOARD_SIZE, playerIds);
  }
  /**
   * Actual attack logic.
   * @param {*} row Axi Y of target gird.
   * @param {*} column Axi X of target grid.
   * @param {*} opponentId Id of opponent player.
   */


  function userAttack(row, column, opponentId) {
    _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].player(opponentId).board().receiveAttack(row, column);
    _models_game__WEBPACK_IMPORTED_MODULE_0__["default"].nextTurn();
  }

  function enableBoardReceiveAttack() {
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].bindReceiveAttack(userAttack);
  }

  return {
    drawBoard: drawBoard,
    enableBoardReceiveAttack: enableBoardReceiveAttack
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
   * Check wheather the target exists in attack history board.hits or board.misses.
   * @param {Array} target [row, column]
   * @returns true if target has been attacked before, otherwise false.
   */


  function alreadyBeenAttacked(target) {
    return board.hits.some(function (hit) {
      return positionEqual(hit, target);
    }) || board.misses.some(function (miss) {
      return positionEqual(miss, target);
    });
  }
  /**
   * Try to hit each of the ships in the board.fleet,
   * only if the target position has never been attacked before.
   * @param {*} row AxiY of target.
   * @param {*} column AxiX of target.
   */


  function receiveAttack(row, column) {
    var target = [row, column];
    if (alreadyBeenAttacked(target)) return;
    var hit = board.fleet.some(function (fleetShip) {
      return fleetShip.hit(row, column);
    });

    if (hit) {
      board.hits.push(target);
    } else {
      board.misses.push(target);
    }

    removeFromIntact("".concat(row, "-").concat(column));
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
   * Initialize two players with empty board.
   * If is AI, default level is EASY.
   * AI player's board is autofilled with random fleet.
   * @param {Symbol} player1Type HUMAN or AI
   * @param {Symbol} player2Type HUMAN or AI
   */


  function initPlayers(player1Type, player2Type) {
    game.players = [];
    var playerTypes = [player1Type, player2Type];

    for (var i = 0; i < playerTypes; i += 1) {
      var newPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_4__["default"])(0, (0,_board__WEBPACK_IMPORTED_MODULE_3__["default"])(DEFAULT_BOARD_SIZE), playerTypes[i]);
      if (playerTypes[i] === _player__WEBPACK_IMPORTED_MODULE_4__.AI) autofillFleet(newPlayer.board());
      game.players.push(newPlayer);
    }
  }
  /**
   * Switch the player 2 to AI.
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
   * Recursion: pass this function to Player.attack() function as callback.
   * When AI player callback, automatically go to next turn.
   * Human player doesn't callback.
   */


  function nextTurn() {
    game.currentPlayer = nextIndex();
    var currPlayer = game.players[game.currentPlayer];
    var opponent = game.players[nextIndex()];
    currPlayer.attack(opponent.board(), nextTurn);
  }
  /**
   * When player has,
   *  1. put all his ships into the board.
   *  2. picked the level of his/her AI opponent's level.
   * Controller call this method to initialize the game.
   *
   * Before start the game this function will check
   * wheather all requirements above have been met.
   *
   * @return {Boolean}
   *  true, if all requirements has been met, the game is started.
   *  otherwise, false.
   */


  function start(level) {
    // check configurations
    if (game.players.some(function (thePlayer) {
      return thePlayer.board().fleetSize() !== STANDARD_FLEET.length;
    })) {
      return false;
    }

    if (!level) return false; // set AI level if exists.

    var index = game.players.findIndex(function (thePlayer) {
      return thePlayer.isAI();
    });

    if (index !== -1) {
      game.players[index].setAiLevel(level);
    } // Start game.
    // Set to the last player. nextTurn() will move on.


    game.currentPlayer = game.players.length - 1;
    nextTurn();
    return true;
  }

  var api = {
    AI: _player__WEBPACK_IMPORTED_MODULE_4__.AI,
    HUMAN: _player__WEBPACK_IMPORTED_MODULE_4__.HUMAN,
    EASY: _player__WEBPACK_IMPORTED_MODULE_4__.EASY,
    NORMAL: _player__WEBPACK_IMPORTED_MODULE_4__.NORMAL,
    HARD: _player__WEBPACK_IMPORTED_MODULE_4__.HARD,
    DEFAULT_BOARD_SIZE: DEFAULT_BOARD_SIZE,
    players: players,
    player: player,
    autofillFleet: autofillFleet,
    nextTurn: nextTurn,
    initPlayers: initPlayers,
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

  function randomAttack(opponentBoard) {
    if (opponentBoard.intact().length === 0) return false;
    var index = Math.floor(Math.random() * opponentBoard.intact().length);
    var str = opponentBoard.intact()[index];

    var _str$split = str.split('-'),
        _str$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_str$split, 2),
        rowStr = _str$split2[0],
        columnStr = _str$split2[1];

    opponentBoard.receiveAttack(parseInt(rowStr, 10), parseInt(columnStr, 10));
    return true;
  }

  function normalAttack(opponentBoard) {
    return randomAttack(opponentBoard);
  }

  function smartAttck(opponentBoard) {
    return randomAttack(opponentBoard);
  }
  /**
   * ==> AI player will attack immediately,
   * then callback game module to go to next round.
   * ==> Human player will do nothing.
   * It will not callback game module to go to the next round.
   * @param {Board} board The Board object.
   * @param {Function} callback Notice Game module to run next round.
   */


  function attack(opponentBoard, callback) {
    if (player.type === AI) {
      switch (player.level) {
        case EASY:
          randomAttack(opponentBoard);
          break;

        case NORMAL:
          normalAttack(opponentBoard);
          break;

        case HARD:
          smartAttck(opponentBoard);
          break;

        default:
          randomAttack(opponentBoard);
          break;
      }

      callback();
    }
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
    boards: Array.from(document.querySelectorAll('.board'))
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
   * Draw two board for each player:
   *  1. his own board.
   *  2。his opponent's board.
   *
   * @param {Number} size Size of the board.
   * @param {Array} Array of player id.
   */


  function drawBoard(size, playerIds) {
    ELEMENTS.root.style.setProperty('--board-size', "".concat(size));
    var index = 0;
    ELEMENTS.boards.forEach(function (boardElement) {
      // eslint-disable-next-line no-param-reassign
      boardElement.dataset.playerId = playerIds[index];
      index += 1;
    });

    var _loop = function _loop(row) {
      var _loop2 = function _loop2(column) {
        ELEMENTS.boards.forEach(function (boardElement) {
          boardElement.appendChild(createGrid(row, column));
        });
      };

      for (var column = 0; column < size; column += 1) {
        _loop2(column);
      }
    };

    for (var row = 0; row < size; row += 1) {
      _loop(row);
    }
  }
  /**
   * Click on board will callback controller's userAttack() function.
   * @param {Element} boardElement Target board container element in DOM.
   * @param {Function} callback Actual attack logic resides in controller.
   */


  function bindReceiveAttack(callback) {
    ELEMENTS.boards.forEach(function (boardElement) {
      var grids = boardElement.querySelectorAll('.grid');
      grids.forEach(function (grid) {
        grid.addEventListener('click', function () {
          return callback(parseInt(grid.dataset.row, 10), parseInt(grid.dataset.column, 10), parseInt(boardElement.dataset.playerId, 10));
        });
      });
    });
  } // prevent current player's board to be attacked.


  return {
    drawBoard: drawBoard,
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
 // eslint-disable-next-line no-unused-vars


_controller__WEBPACK_IMPORTED_MODULE_0__["default"].drawBoard();
_controller__WEBPACK_IMPORTED_MODULE_0__["default"].enableBoardReceiveAttack();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FB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QUhtQyxDQUFkO0FBQUEsU0FBL0I7QUFJRCxPQUxEO0FBTUQsS0FSRDtBQVNELEdBNURtQixDQThEcEI7OztBQUVBLFNBQU87QUFDTHhKLElBQUFBLFNBQVMsRUFBVEEsU0FESztBQUVMa0IsSUFBQUEsaUJBQWlCLEVBQWpCQTtBQUZLLEdBQVA7QUFJRCxDQXBFYyxHQUFmOzs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Q0NMQTs7QUFDQTtBQUVBMEksNkRBQUE7QUFDQUEsNEVBQUEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL21vZGVscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9tb2RlbHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKiBib2FyZCAqL1xcbiAgLS1ib2FyZC1zaXplOiAxMDtcXG4gIC0tZ3JpZC1zaXplOiAycmVtO1xcblxcbiAgLyogY29sb3IgKi9cXG4gIC0tYmxhY2s6ICMwMDAwMDA7XFxufVxcblxcbi5ib2FyZCB7XFxuICBtYXJnaW46IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtc2l6ZSksIHZhcigtLWdyaWQtc2l6ZSkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtc2l6ZSksIHZhcigtLWdyaWQtc2l6ZSkpO1xcbn1cXG5cXG4uYm9hcmQgPiAuZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7O0VBRWpCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtFQUFrRTtFQUNsRSwrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLyogYm9hcmQgKi9cXG4gIC0tYm9hcmQtc2l6ZTogMTA7XFxuICAtLWdyaWQtc2l6ZTogMnJlbTtcXG5cXG4gIC8qIGNvbG9yICovXFxuICAtLWJsYWNrOiAjMDAwMDAwO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXNpemUpLCB2YXIoLS1ncmlkLXNpemUpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLXNpemUpLCB2YXIoLS1ncmlkLXNpemUpKTtcXG59XFxuXFxuLmJvYXJkID4gLmdyaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8vIGltcG9ydCBTaGlwIGZyb20gJy4vbW9kZWxzL3NoaXAnO1xuLy8gaW1wb3J0IEJvYXJkIGZyb20gJy4vbW9kZWxzL2JvYXJkJztcbi8vIGltcG9ydCBQbGF5ZXIgZnJvbSAnLi9tb2RlbHMvcGxheWVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vbW9kZWxzL2dhbWUnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgZnVuY3Rpb24gZHJhd0JvYXJkKCkge1xuICAgIEdhbWUuaW5pdCgpO1xuICAgIGNvbnN0IHBsYXllcklkcyA9IEdhbWUucGxheWVycygpLnJlZHVjZSgoYXJyLCBwbGF5ZXIpID0+IHtcbiAgICAgIGFyci5wdXNoKHBsYXllci5pZCgpKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSwgW10pO1xuICAgIFZpZXcuZHJhd0JvYXJkKEdhbWUuREVGQVVMVF9CT0FSRF9TSVpFLCBwbGF5ZXJJZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbCBhdHRhY2sgbG9naWMuXG4gICAqIEBwYXJhbSB7Kn0gcm93IEF4aSBZIG9mIHRhcmdldCBnaXJkLlxuICAgKiBAcGFyYW0geyp9IGNvbHVtbiBBeGkgWCBvZiB0YXJnZXQgZ3JpZC5cbiAgICogQHBhcmFtIHsqfSBvcHBvbmVudElkIElkIG9mIG9wcG9uZW50IHBsYXllci5cbiAgICovXG4gIGZ1bmN0aW9uIHVzZXJBdHRhY2socm93LCBjb2x1bW4sIG9wcG9uZW50SWQpIHtcbiAgICBHYW1lLnBsYXllcihvcHBvbmVudElkKS5ib2FyZCgpLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pO1xuICAgIEdhbWUubmV4dFR1cm4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjaygpIHtcbiAgICBWaWV3LmJpbmRSZWNlaXZlQXR0YWNrKHVzZXJBdHRhY2spO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkcmF3Qm9hcmQsXG4gICAgZW5hYmxlQm9hcmRSZWNlaXZlQXR0YWNrLFxuICB9O1xufSkoKTtcbiIsImxldCBVTklUX1RFU1Q7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG5VTklUX1RFU1QgPSB0cnVlOyAvLyBDb21tZW50IG91dCB0aGlzIGxpbmUgYWZ0ZXIgdW5pdCB0ZXN0LlxuXG5jb25zdCBERUZBVUxUX0JPQVJEX1NJWkUgPSAxMDtcblxuLyoqXG4gKiBCb2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQm9hcmQgbWFnYWdlcyBTaGlwcywgYW5kIGNoZWNrIHRoZSBoaXQgZm9yIHVzZXIuXG4gKiBAcGFyYW0ge051bWJlcn0gaW5TaXplIFNpemUgb2YgdGhlIGdhbWUgYm9hcmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpblNpemUpID0+IHtcbiAgLyoqXG4gICAqIEJvYXJkIHBsYWluIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IGJvYXJkID0ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgc2l6ZTogaW5TaXplIHx8IERFRkFVTFRfQk9BUkRfU0laRSxcbiAgICBmbGVldDogW10sXG4gICAgaGl0czogW10sXG4gICAgbWlzc2VzOiBbXSxcbiAgICBpbnRhY3Q6IFtdLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBbGxvdyBvdGhlciBtb2R1bGVzIHRvIGNoZWNrIHRoZSBzaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHJldHVybnMgQm9hcmQgc2l6ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgcmV0dXJuIGJvYXJkLnNpemU7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3cgb3RoZXIgbW9kdWxlcyB0byBnZXQgdGhlIGxpc3Qgb2YgYWxsIGludGFjdCBwb3NpdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGludGFjdCgpIHtcbiAgICByZXR1cm4gYm9hcmQuaW50YWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93IG90aGVyIG1vZHVsZXMgdG8gY2hlY2sgc2l6ZSBvZiBjdXJyZW50IGZsZWV0LlxuICAgKi9cbiAgZnVuY3Rpb24gZmxlZXRTaXplKCkge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYm9hcmQsIHB1dCBhbGwgaW50YWN0IHBvc2l0aW9uIGludG8gYm9hcmQuaW50YWN0IGFycmF5LlxuICAgKiBUaGUgcG9zaXRpb24gW3JvdywgY29sdW1uXSBpcyBjb2RlZCBhczogXCJyb3ctY29sdW1uXCIuXG4gICAqL1xuICBmdW5jdGlvbiBmaWxsSW50YWN0KCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkLnNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBib2FyZC5zaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBib2FyZC5pbnRhY3QucHVzaChgJHtyb3d9LSR7Y29sdW1ufWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBwb2ludCBmcm9tIHRoZSBib2FyZC5pbnRhY3QgYXJyYXkuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgUG9zaXRpb24gc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUludGFjdChzdHIpIHtcbiAgICBjb25zdCBpbmRleCA9IGJvYXJkLmludGFjdC5maW5kSW5kZXgoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gc3RyKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG4gICAgYm9hcmQuaW50YWN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIG5ldyBzaGlwIHNpdHMgaW4gdGhlIGZpeGVkIHNoaXAncyBmb3JiaWRlbiB6b25lLlxuICAgKiBAcGFyYW0ge1NoaXB9IGZpeGVkU2hpcCBUaGUgc2hpcCBhbHJlYWR5IHB1dCBvbiB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7QXJyYXl9IG5ld0hlYWQgSGVhZCBwb3NpdGlvbltyb3csIGNvbHVtbl0gb2YgdGhlIG5ldyBzaGlwLlxuICAgKiBAcGFyYW0ge0FycmF5fSBuZXdUYWlsIFRhaWwgcG9zaXRpb25bcm93LCBjb2x1bW5dIG9mIHRoZSBuZXcgc2hpcC5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGVzZSB0d28gc2hpcHMgaGF2ZSBvdmVybGFwIGVhY2ggb3RoZXIsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGlzT3ZlcmxhcChmaXhlZFNoaXAsIG5ld0hlYWQsIG5ld1RhaWwpIHtcbiAgICBjb25zdCBbaGVhZFJvdywgaGVhZENvbHVtbl0gPSBmaXhlZFNoaXAuaGVhZCgpO1xuICAgIGNvbnN0IFt0YWlsUm93LCB0YWlsQ29sdW1uXSA9IGZpeGVkU2hpcC50YWlsKCk7XG4gICAgY29uc3Qgb3ZlcmxhcFJvd1N0YXJ0ID0gTWF0aC5tYXgoMCwgaGVhZFJvdyAtIDEpO1xuICAgIGNvbnN0IG92ZXJsYXBDb2x1bW5TdGFydCA9IE1hdGgubWF4KDAsIGhlYWRDb2x1bW4gLSAxKTtcbiAgICBjb25zdCBvdmVybGFwUm93RW5kID0gTWF0aC5taW4oYm9hcmQuc2l6ZSAtIDEsIHRhaWxSb3cgKyAxKTtcbiAgICBjb25zdCBvdmVybGFwQ29sdW1uRW5kID0gTWF0aC5taW4oYm9hcmQuc2l6ZSAtIDEsIHRhaWxDb2x1bW4gKyAxKTtcbiAgICBpZiAobmV3SGVhZFswXSAtIG5ld1RhaWxbMF0gPT09IDApIHtcbiAgICAgIGlmIChuZXdIZWFkWzBdIDwgb3ZlcmxhcFJvd1N0YXJ0IHx8IG5ld0hlYWRbMF0gPiBvdmVybGFwUm93RW5kKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobmV3VGFpbFsxXSA8IG92ZXJsYXBDb2x1bW5TdGFydCB8fCBuZXdIZWFkWzFdID4gb3ZlcmxhcENvbHVtbkVuZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChuZXdIZWFkWzFdIDwgb3ZlcmxhcENvbHVtblN0YXJ0IHx8IG5ld0hlYWRbMV0gPiBvdmVybGFwQ29sdW1uRW5kKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5ld1RhaWxbMF0gPCBvdmVybGFwQ29sdW1uU3RhcnQgfHwgbmV3SGVhZFswXSA+IG92ZXJsYXBSb3dFbmQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdGFyZ2V0IHBvc2l0aW9uW3JvdywgY29sdW1uXSBpcyBhdmFpbGFibGUgZm9yIGEgc3BlY2lmaWMgc2hpcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBUYXJnZXQgcm93LlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIFRhcmdldCBjb2x1bW4uXG4gICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBUaGUgc2hpcCB0byBiZSBwdXQgaW50byB0aGUgYm9hcmQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgaXMgb2ssIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGF2YWlsYWJsZShyb3csIGNvbHVtbiwgc2hpcCkge1xuICAgIC8vIGNoZWNrIGhlYWRcbiAgICBpZiAocm93IDwgMFxuICAgICAgfHwgcm93ID49IGJvYXJkLnNpemVcbiAgICAgIHx8IGNvbHVtbiA8IDBcbiAgICAgIHx8IGNvbHVtbiA+PSBib2FyZC5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIHRhaWxcbiAgICBjb25zdCB0YWlsUm93ID0gKHNoaXAuaXNIb3Jpem9udGFsKCkpID8gcm93IDogKHJvdyArIHNoaXAuc2l6ZSgpIC0gMSk7XG4gICAgY29uc3QgdGFpbENvbHVtbiA9IChzaGlwLmlzSG9yaXpvbnRhbCgpKSA/IChjb2x1bW4gKyBzaGlwLnNpemUoKSAtIDEpIDogY29sdW1uO1xuICAgIGlmICh0YWlsUm93IDwgMFxuICAgICAgfHwgdGFpbFJvdyA+PSBib2FyZC5zaXplXG4gICAgICB8fCB0YWlsQ29sdW1uIDwgMFxuICAgICAgfHwgdGFpbENvbHVtbiA+PSBib2FyZC5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNoZWNrIG92ZXJsYXBcbiAgICBjb25zdCBuZXdIZWFkID0gW3JvdywgY29sdW1uXTtcbiAgICBjb25zdCBuZXdUYWlsID0gKHNoaXAuaXNIb3Jpem9udGFsKCkpXG4gICAgICA/IFtyb3csIGNvbHVtbiArIHNoaXAuc2l6ZSgpXSA6IFtyb3cgKyBzaGlwLnNpemUoKSwgY29sdW1uXTtcbiAgICBpZiAoYm9hcmQuZmxlZXQuc29tZSgoZml4ZWRTaGlwKSA9PiBpc092ZXJsYXAoZml4ZWRTaGlwLCBuZXdIZWFkLCBuZXdUYWlsKSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXQgc2hpcCBpbnRvIGEgY2VydGFpbiBwb3NpdGlvbiBpZiBpdCdzIGF2YWlsYWJsZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJvdyBBeGkgWSBvZiB0aGUgc2hpcCBoZWFkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRoZSBzaGlwIGhlYWQuXG4gICAqIEBwYXJhbSB7U2hpcH0gc2hpcCBUaGUgc2hpcCBvYmplY3QuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhpcyBwb3NpdGlvbiBpcyBsZWdhbCBmb3IgYSBuZXcgc2hpcCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gcHV0U2hpcChyb3csIGNvbHVtbiwgc2hpcCkge1xuICAgIHNoaXAucHV0KHJvdywgY29sdW1uKTtcbiAgICBib2FyZC5mbGVldC5wdXNoKHNoaXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNoaXAgZnJvbSB0aGUgYm9hcmQgZmxlZXQgKG9ubHkgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBmbGVldCkuXG4gICAqIEBwYXJhbSB7U2hpcH0gU2hpcCB0byBiZSByZW1vdmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgaW5kZXggPSBib2FyZC5mbGVldC5maW5kSW5kZXgoKGZsZWV0U2hpcCkgPT4gZmxlZXRTaGlwLmlkKCkgPT09IHNoaXAuaWQoKSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgIGJvYXJkLmZsZWV0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogT25seSB1c2VkIHRvIHRvZ2dsZSBzaGlwcyBhbHJlYWR5IGluIHRoZSBmbGVldC5cbiAgICogQHBhcmFtIHtTaGlwfSBzaGlwIFRhcmdldCBzaGlwLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRvZ2dsZWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUZsZWV0U2hpcChzaGlwKSB7XG4gICAgcmVtb3ZlU2hpcChzaGlwKTtcbiAgICBzaGlwLnRvZ2dsZURpcmVjdGlvbigpO1xuICAgIGlmIChhdmFpbGFibGUoLi4uc2hpcC5oZWFkKCksIHNoaXApKSB7XG4gICAgICBwdXRTaGlwKC4uLnNoaXAuaGVhZCgpLCBzaGlwKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgdG9nZ2xlXG4gICAgc2hpcC50b2dnbGVEaXJlY3Rpb24oKTsgLy8gYmFjayB0byBvcmdpbmFsIGRpcmVjdGlvblxuICAgIHB1dFNoaXAoLi4uc2hpcC5oZWFkKCksIHNoaXApOyAvLyBwdXQgYmFjayB0byBmbGVldFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gcG9zaXRpb25bcm93LCBjb2x1bW5dIGVxdWFsIHRvIGVhY2ggb3RoZXIuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvc2l0aW9uQSBbcm93LCBjb2x1bW5dXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvc2l0aW9uQiBbcm93LCBjb2x1bW5dXG4gICAqIEByZXR1cm5zIHRydWUgaWYgZXF1YWwsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIHBvc2l0aW9uRXF1YWwocG9zaXRpb25BLCBwb3NpdGlvbkIpIHtcbiAgICByZXR1cm4gKHBvc2l0aW9uQVswXSA9PT0gcG9zaXRpb25CWzBdKSAmJiAocG9zaXRpb25BWzFdID09PSBwb3NpdGlvbkJbMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZWF0aGVyIHRoZSB0YXJnZXQgZXhpc3RzIGluIGF0dGFjayBoaXN0b3J5IGJvYXJkLmhpdHMgb3IgYm9hcmQubWlzc2VzLlxuICAgKiBAcGFyYW0ge0FycmF5fSB0YXJnZXQgW3JvdywgY29sdW1uXVxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRhcmdldCBoYXMgYmVlbiBhdHRhY2tlZCBiZWZvcmUsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFscmVhZHlCZWVuQXR0YWNrZWQodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGJvYXJkLmhpdHMuc29tZSgoaGl0KSA9PiBwb3NpdGlvbkVxdWFsKGhpdCwgdGFyZ2V0KSlcbiAgICAgIHx8IGJvYXJkLm1pc3Nlcy5zb21lKChtaXNzKSA9PiBwb3NpdGlvbkVxdWFsKG1pc3MsIHRhcmdldCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBoaXQgZWFjaCBvZiB0aGUgc2hpcHMgaW4gdGhlIGJvYXJkLmZsZWV0LFxuICAgKiBvbmx5IGlmIHRoZSB0YXJnZXQgcG9zaXRpb24gaGFzIG5ldmVyIGJlZW4gYXR0YWNrZWQgYmVmb3JlLlxuICAgKiBAcGFyYW0geyp9IHJvdyBBeGlZIG9mIHRhcmdldC5cbiAgICogQHBhcmFtIHsqfSBjb2x1bW4gQXhpWCBvZiB0YXJnZXQuXG4gICAqL1xuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gW3JvdywgY29sdW1uXTtcbiAgICBpZiAoYWxyZWFkeUJlZW5BdHRhY2tlZCh0YXJnZXQpKSByZXR1cm47XG4gICAgY29uc3QgaGl0ID0gYm9hcmQuZmxlZXQuc29tZSgoZmxlZXRTaGlwKSA9PiBmbGVldFNoaXAuaGl0KHJvdywgY29sdW1uKSk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgYm9hcmQuaGl0cy5wdXNoKHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkLm1pc3Nlcy5wdXNoKHRhcmdldCk7XG4gICAgfVxuICAgIHJlbW92ZUZyb21JbnRhY3QoYCR7cm93fS0ke2NvbHVtbn1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbGwgc2hpcHMgYXJlIHN1bmsuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgYWxsIHNoaXBzIGFyZSBzdW5rLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBhbGxTdW5rKCkge1xuICAgIHJldHVybiBib2FyZC5mbGVldC5ldmVyeSgoZmxlZXRTaGlwKSA9PiBmbGVldFNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGJvYXJkLlxuICAgKi9cbiAgZmlsbEludGFjdCgpO1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgQVBJXG4gICAqL1xuICBjb25zdCBhcGkgPSB7XG4gICAgc2l6ZSxcbiAgICBpbnRhY3QsXG4gICAgZmxlZXRTaXplLFxuICAgIGF2YWlsYWJsZSxcbiAgICBwdXRTaGlwLFxuICAgIHJlbW92ZVNoaXAsXG4gICAgdG9nZ2xlRmxlZXRTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU3VuayxcbiAgfTtcblxuICAvKipcbiAgICogQVBJIG9ubHkgZm9yIHVuaXQgdGVzdC5cbiAgICovXG4gIGlmIChVTklUX1RFU1QpIHtcbiAgICBhcGkuYm9hcmQgPSBib2FyZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uYXBpLFxuICB9O1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IFBsYXllciwge1xuICBBSSxcbiAgSFVNQU4sXG4gIEVBU1ksXG4gIE5PUk1BTCxcbiAgSEFSRCxcbn0gZnJvbSAnLi9wbGF5ZXInO1xuXG5sZXQgVU5JVF9URVNUO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuVU5JVF9URVNUID0gdHJ1ZTsgLy8gQ29tbWVudCBvdXQgdGhpcyBsaW5lIG9uY2UgZmluaXNoIHRoZSB1bml0IHRlc3RzLlxuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBERUZBVUxUX0JPQVJEX1NJWkUgPSAxMDsgLy8gZGVmYXVsdCBnYW1lIGJvYXJkIHNpemVcbiAgLy8gRGVmYXVsdCBmbGVldCBzZXR0aW5nLiBBY2NvcmRpbmcgdG8gMTk5MCdzIEJhdHRsZXNoaXAgR2FtZSBvZiBNaWx0b24gQnJhZGxldCBDb21wYW55LlxuICBjb25zdCBTVEFOREFSRF9GTEVFVCA9IFtcbiAgICAvLyBbbmFtZSwgc2l6ZV1cbiAgICBbJ2NhcnJpZXInLCA1XSxcbiAgICBbJ2JhdHRsZXNoaXAnLCA0XSxcbiAgICBbJ2NydWlzZXInLCAzXSxcbiAgICBbJ3N1Ym1hcmluZScsIDNdLFxuICAgIFsnZGVzdHJveWVyJywgMl0sXG4gIF07XG5cbiAgLyoqXG4gICAqIEdhbWUgbW9kdWxlIHByb3RvLlxuICAgKiAgcGxheWVyczogQXJyYXkuIFR3byBwbGF5ZXJzLlxuICAgKiAgY3VycmVudFBsYXllcjogTnVtYmVyLiBJbmRleCBvZiBjdXJyZW50IHBsYXllciBpbiB0aGUgcGxheWVycyBhcnJheS5cbiAgICovXG4gIGNvbnN0IGdhbWUgPSB7fTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgYSBpbnRlZ2VyIGluIHJhbmdlIG9mIFswLCBtYXgpLlxuICAgKiBAcGFyYW0ge051bWJlcn0gbWF4IE1heCB2YWx1ZSAoZXhjbHVzaXZlKS5cbiAgICogQHJldHVybiBHZW5lcmF0ZWQgaW50ZWdlci5cbiAgICovXG4gIGZ1bmN0aW9uIHJhbmRvbShtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaWNrIHRoZSByYW5kb20gcG9zaXRpb24gW3JvdywgY29sdW1uXSBpbiB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IGJvYXJkIFRhcmdldCBib2FyZC5cbiAgICogQHJldHVybiBSYW5kb20gcG9zaXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiByYW5kb21Qb3NpdGlvbihib2FyZCkge1xuICAgIHJldHVybiBbcmFuZG9tKGJvYXJkLnNpemUoKSksIHJhbmRvbShib2FyZC5zaXplKCkpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvZmlsbChyYW5kb21seSkgYSBnYW1lIGJvYXJkIHdpdGggZmxlZXQgc2hpcHMuXG4gICAqIEBwYXJhbSB7Qm9hcmR9IGJvYXJkIFRhcmdldCBib2FyZC5cbiAgICovXG4gIGZ1bmN0aW9uIGF1dG9maWxsRmxlZXQoYm9hcmQpIHtcbiAgICBTVEFOREFSRF9GTEVFVC5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoLi4udGVtcGxhdGUpO1xuICAgICAgaWYgKHJhbmRvbSgyKSA9PT0gMSkgc2hpcC50b2dnbGVEaXJlY3Rpb24oKTtcbiAgICAgIGxldCBwb3NpdGlvbiA9IHJhbmRvbVBvc2l0aW9uKGJvYXJkKTtcbiAgICAgIHdoaWxlICghYm9hcmQuYXZhaWxhYmxlKC4uLnBvc2l0aW9uLCBzaGlwKSkge1xuICAgICAgICBwb3NpdGlvbiA9IHJhbmRvbVBvc2l0aW9uKGJvYXJkKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkLnB1dFNoaXAoLi4ucG9zaXRpb24sIHNoaXApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBhbGwgcGxheWVycy5cbiAgICogQHJldHVybnMgQXJyYXkgb2YgcGxheWVyc1xuICAgKi9cbiAgZnVuY3Rpb24gcGxheWVycygpIHtcbiAgICByZXR1cm4gZ2FtZS5wbGF5ZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBQbGF5ZXIgb2JqZWN0IGJ5IHRoZWlyIGlkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgcGxheWVyIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gcGxheWVyKGlkKSB7XG4gICAgcmV0dXJuIGdhbWUucGxheWVycy5maW5kKCh0aGVQbGF5ZXIpID0+IHRoZVBsYXllci5pZCgpID09PSBpZCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0d28gcGxheWVycyB3aXRoIGVtcHR5IGJvYXJkLlxuICAgKiBJZiBpcyBBSSwgZGVmYXVsdCBsZXZlbCBpcyBFQVNZLlxuICAgKiBBSSBwbGF5ZXIncyBib2FyZCBpcyBhdXRvZmlsbGVkIHdpdGggcmFuZG9tIGZsZWV0LlxuICAgKiBAcGFyYW0ge1N5bWJvbH0gcGxheWVyMVR5cGUgSFVNQU4gb3IgQUlcbiAgICogQHBhcmFtIHtTeW1ib2x9IHBsYXllcjJUeXBlIEhVTUFOIG9yIEFJXG4gICAqL1xuICBmdW5jdGlvbiBpbml0UGxheWVycyhwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGUpIHtcbiAgICBnYW1lLnBsYXllcnMgPSBbXTtcbiAgICBjb25zdCBwbGF5ZXJUeXBlcyA9IFtwbGF5ZXIxVHlwZSwgcGxheWVyMlR5cGVdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyVHlwZXM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmV3UGxheWVyID0gUGxheWVyKDAsIEJvYXJkKERFRkFVTFRfQk9BUkRfU0laRSksIHBsYXllclR5cGVzW2ldKTtcbiAgICAgIGlmIChwbGF5ZXJUeXBlc1tpXSA9PT0gQUkpIGF1dG9maWxsRmxlZXQobmV3UGxheWVyLmJvYXJkKCkpO1xuICAgICAgZ2FtZS5wbGF5ZXJzLnB1c2gobmV3UGxheWVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRoZSBwbGF5ZXIgMiB0byBBSS5cbiAgICogQUkgcGxheWVyJ3MgYm9hcmQgaXMgZmlsbGVkIGF1dG9tYXRpY2FsbHkuXG4gICAqL1xuICBmdW5jdGlvbiBhZ2FpbnN0QUkobGV2ZWwpIHtcbiAgICBnYW1lLnBsYXllcnNbMV0gPSBQbGF5ZXIoMSwgQm9hcmQoREVGQVVMVF9CT0FSRF9TSVpFKSwgQUksIGxldmVsKTtcbiAgICBhdXRvZmlsbEZsZWV0KGdhbWUucGxheWVyc1sxXS5ib2FyZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdGhlIHBsYXllciAyIHRvIEhVTUFOLlxuICAgKi9cbiAgZnVuY3Rpb24gYWdhaW5zdEh1bWFuKCkge1xuICAgIGdhbWUucGxheWVyc1sxXSA9IFBsYXllcigxLCBCb2FyZChERUZBVUxUX0JPQVJEX1NJWkUpLCBIVU1BTik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5leHQgcGxheWVyJ3MgaW5kZXguXG4gICAqIEByZXR1cm5zIGluZGV4IG9mIG5leHQgcGxheWVyXG4gICAqL1xuICBmdW5jdGlvbiBuZXh0SW5kZXgoKSB7XG4gICAgcmV0dXJuIChnYW1lLmN1cnJlbnRQbGF5ZXIgKyAxKSAlIGdhbWUucGxheWVycy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogUmVjdXJzaW9uOiBwYXNzIHRoaXMgZnVuY3Rpb24gdG8gUGxheWVyLmF0dGFjaygpIGZ1bmN0aW9uIGFzIGNhbGxiYWNrLlxuICAgKiBXaGVuIEFJIHBsYXllciBjYWxsYmFjaywgYXV0b21hdGljYWxseSBnbyB0byBuZXh0IHR1cm4uXG4gICAqIEh1bWFuIHBsYXllciBkb2Vzbid0IGNhbGxiYWNrLlxuICAgKi9cbiAgZnVuY3Rpb24gbmV4dFR1cm4oKSB7XG4gICAgZ2FtZS5jdXJyZW50UGxheWVyID0gbmV4dEluZGV4KCk7XG4gICAgY29uc3QgY3VyclBsYXllciA9IGdhbWUucGxheWVyc1tnYW1lLmN1cnJlbnRQbGF5ZXJdO1xuICAgIGNvbnN0IG9wcG9uZW50ID0gZ2FtZS5wbGF5ZXJzW25leHRJbmRleCgpXTtcbiAgICBjdXJyUGxheWVyLmF0dGFjayhvcHBvbmVudC5ib2FyZCgpLCBuZXh0VHVybik7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBwbGF5ZXIgaGFzLFxuICAgKiAgMS4gcHV0IGFsbCBoaXMgc2hpcHMgaW50byB0aGUgYm9hcmQuXG4gICAqICAyLiBwaWNrZWQgdGhlIGxldmVsIG9mIGhpcy9oZXIgQUkgb3Bwb25lbnQncyBsZXZlbC5cbiAgICogQ29udHJvbGxlciBjYWxsIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgdGhlIGdhbWUuXG4gICAqXG4gICAqIEJlZm9yZSBzdGFydCB0aGUgZ2FtZSB0aGlzIGZ1bmN0aW9uIHdpbGwgY2hlY2tcbiAgICogd2hlYXRoZXIgYWxsIHJlcXVpcmVtZW50cyBhYm92ZSBoYXZlIGJlZW4gbWV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiAgdHJ1ZSwgaWYgYWxsIHJlcXVpcmVtZW50cyBoYXMgYmVlbiBtZXQsIHRoZSBnYW1lIGlzIHN0YXJ0ZWQuXG4gICAqICBvdGhlcndpc2UsIGZhbHNlLlxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQobGV2ZWwpIHtcbiAgICAvLyBjaGVjayBjb25maWd1cmF0aW9uc1xuICAgIGlmIChnYW1lLnBsYXllcnMuc29tZSgodGhlUGxheWVyKSA9PiB0aGVQbGF5ZXIuYm9hcmQoKS5mbGVldFNpemUoKVxuICAgICAgICAhPT0gU1RBTkRBUkRfRkxFRVQubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWxldmVsKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gc2V0IEFJIGxldmVsIGlmIGV4aXN0cy5cbiAgICBjb25zdCBpbmRleCA9IGdhbWUucGxheWVycy5maW5kSW5kZXgoKHRoZVBsYXllcikgPT4gdGhlUGxheWVyLmlzQUkoKSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgZ2FtZS5wbGF5ZXJzW2luZGV4XS5zZXRBaUxldmVsKGxldmVsKTtcbiAgICB9XG4gICAgLy8gU3RhcnQgZ2FtZS5cbiAgICAvLyBTZXQgdG8gdGhlIGxhc3QgcGxheWVyLiBuZXh0VHVybigpIHdpbGwgbW92ZSBvbi5cbiAgICBnYW1lLmN1cnJlbnRQbGF5ZXIgPSBnYW1lLnBsYXllcnMubGVuZ3RoIC0gMTtcbiAgICBuZXh0VHVybigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgYXBpID0ge1xuICAgIEFJLFxuICAgIEhVTUFOLFxuICAgIEVBU1ksXG4gICAgTk9STUFMLFxuICAgIEhBUkQsXG4gICAgREVGQVVMVF9CT0FSRF9TSVpFLFxuICAgIHBsYXllcnMsXG4gICAgcGxheWVyLFxuICAgIGF1dG9maWxsRmxlZXQsXG4gICAgbmV4dFR1cm4sXG4gICAgaW5pdFBsYXllcnMsXG4gICAgYWdhaW5zdEFJLFxuICAgIGFnYWluc3RIdW1hbixcbiAgICBzdGFydCxcbiAgfTtcblxuICBpZiAoVU5JVF9URVNUKSB7XG4gICAgYXBpLmdhbWUgPSBnYW1lO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5hcGksXG4gIH07XG59KSgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcXVvdGUtcHJvcHMgKi9cbi8qKlxuICogVGhlcmUgYXJlIHR3byBkaWZmZXJlbnQgdHlwZXMgb2YgcGxheWVyOlxuICogIDEuIGFpXG4gKiAgMi4gaHVtYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEFJID0gU3ltYm9sKCdhaScpO1xuZXhwb3J0IGNvbnN0IEhVTUFOID0gU3ltYm9sKCdodW1hbicpO1xuXG4vKipcbiAqIFRocmVlIGRpZmZlcmVudCBsZXZlbCBvZiBBSS5cbiAqL1xuZXhwb3J0IGNvbnN0IEVBU1kgPSBTeW1ib2woJ2NoaWxkJyk7XG5leHBvcnQgY29uc3QgTk9STUFMID0gU3ltYm9sKCdub3JtYWwnKTtcbmV4cG9ydCBjb25zdCBIQVJEID0gU3ltYm9sKCdoYXJkJyk7XG5cbi8qKlxuICogUGxheWVyIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0JvYXJkfSBpbkJvYXJkIFBsYXllcidzIGdhbWUgYm9hcmQuXG4gKiBAcGFyYW0ge1N5bWJvbH0gaW5UeXBlIEhVTUFOIG9yIEFJLlxuICogQHBhcmFtIHtTeW1ib2x9IGluTGV2ZWwgT3B0aW9uYWwuIEFJIGxldmVsLlxuICovXG5leHBvcnQgZGVmYXVsdCAoaW5JZCwgaW5Cb2FyZCwgaW5UeXBlLCBpbkxldmVsKSA9PiB7XG4gIC8qKlxuICAgKiBQbGF5ZXIgcGxhaW4gb2JqZWN0LlxuICAgKi9cbiAgY29uc3QgcGxheWVyID0ge1xuICAgIGlkOiBpbklkLFxuICAgIHR5cGU6IGluVHlwZSxcbiAgICBib2FyZDogaW5Cb2FyZCxcbiAgfTtcblxuICBpZiAocGxheWVyLnR5cGUgPT09IEFJKSB7XG4gICAgcGxheWVyLmxldmVsID0gaW5MZXZlbCB8fCBFQVNZOyAvLyBkZWZhdWx0IGlzIEVBU1lcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGxheWVyIGlkLlxuICAgKiBAcmV0dXJucyBQbGF5ZXIgaWQuXG4gICAqL1xuICBmdW5jdGlvbiBpZCgpIHtcbiAgICByZXR1cm4gcGxheWVyLmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHBsYXllciB0eXBlLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGlzIHBsYXllciBpcyBBSS5cbiAgICovXG4gIGZ1bmN0aW9uIGlzQUkoKSB7XG4gICAgcmV0dXJuIHBsYXllci50eXBlID09PSBBSTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBBSSBwbGF5ZXIncyBsZXZlbC5cbiAgICogQHJldHVybnMgQUkgcGxheWVyJ3MgbGV2ZWwuIHVuZGVmaW5lZCBpZiBpdCdzIG5vdCBBSSBwbGF5ZXIuXG4gICAqL1xuICBmdW5jdGlvbiBhaUxldmVsKCkge1xuICAgIGlmIChwbGF5ZXIudHlwZSAhPT0gQUkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHBsYXllci5sZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyBHYW1lIG1vZHVsZSB0byBzZXQgQUkgbGV2ZWwuXG4gICAqIEBwYXJhbSB7U3ltYm9sfSBsZXZlbCBFQVNZIG9yIE5PUk1BTCBvciBIQVJEXG4gICAqL1xuICBmdW5jdGlvbiBzZXRBaUxldmVsKGxldmVsKSB7XG4gICAgaWYgKHBsYXllci50eXBlICE9PSBBSSkgcmV0dXJuO1xuICAgIHBsYXllci5sZXZlbCA9IGxldmVsO1xuICB9XG5cbiAgZnVuY3Rpb24gYm9hcmQoKSB7XG4gICAgcmV0dXJuIHBsYXllci5ib2FyZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgaWYgKG9wcG9uZW50Qm9hcmQuaW50YWN0KCkubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHBvbmVudEJvYXJkLmludGFjdCgpLmxlbmd0aCk7XG4gICAgY29uc3Qgc3RyID0gb3Bwb25lbnRCb2FyZC5pbnRhY3QoKVtpbmRleF07XG4gICAgY29uc3QgW3Jvd1N0ciwgY29sdW1uU3RyXSA9IHN0ci5zcGxpdCgnLScpO1xuICAgIG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhwYXJzZUludChyb3dTdHIsIDEwKSwgcGFyc2VJbnQoY29sdW1uU3RyLCAxMCkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsQXR0YWNrKG9wcG9uZW50Qm9hcmQpIHtcbiAgICByZXR1cm4gcmFuZG9tQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc21hcnRBdHRjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgcmV0dXJuIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiA9PT4gQUkgcGxheWVyIHdpbGwgYXR0YWNrIGltbWVkaWF0ZWx5LFxuICAgKiB0aGVuIGNhbGxiYWNrIGdhbWUgbW9kdWxlIHRvIGdvIHRvIG5leHQgcm91bmQuXG4gICAqID09PiBIdW1hbiBwbGF5ZXIgd2lsbCBkbyBub3RoaW5nLlxuICAgKiBJdCB3aWxsIG5vdCBjYWxsYmFjayBnYW1lIG1vZHVsZSB0byBnbyB0byB0aGUgbmV4dCByb3VuZC5cbiAgICogQHBhcmFtIHtCb2FyZH0gYm9hcmQgVGhlIEJvYXJkIG9iamVjdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgTm90aWNlIEdhbWUgbW9kdWxlIHRvIHJ1biBuZXh0IHJvdW5kLlxuICAgKi9cbiAgZnVuY3Rpb24gYXR0YWNrKG9wcG9uZW50Qm9hcmQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHBsYXllci50eXBlID09PSBBSSkge1xuICAgICAgc3dpdGNoIChwbGF5ZXIubGV2ZWwpIHtcbiAgICAgICAgY2FzZSBFQVNZOlxuICAgICAgICAgIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBOT1JNQUw6XG4gICAgICAgICAgbm9ybWFsQXR0YWNrKG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEhBUkQ6XG4gICAgICAgICAgc21hcnRBdHRjayhvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByYW5kb21BdHRhY2sob3Bwb25lbnRCb2FyZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgaXNBSSxcbiAgICBhaUxldmVsLFxuICAgIHNldEFpTGV2ZWwsXG4gICAgYm9hcmQsXG4gICAgYXR0YWNrLFxuICB9O1xufTtcbiIsIi8qKlxuICogU2hpcCBpZCBnZW5lcmF0b3IuXG4gKi9cbmZ1bmN0aW9uKiBpbmZpbml0ZSgpIHtcbiAgbGV0IGluZGV4ID0gMTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB5aWVsZCBpbmRleDtcbiAgICBpbmRleCArPSAxO1xuICB9XG59XG5cbmNvbnN0IEdFTiA9IGluZmluaXRlKCk7XG5jb25zdCBIT1JJWk9OVEFMID0gU3ltYm9sKCdob3Jpem9udGFsJyk7XG5jb25zdCBWRVJUSUNBTCA9IFN5bWJvbCgndmVydGljYWwnKTtcblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGluc3RhbnRpYXRlIGEgU2hpcCBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBzaGlwLiBFeDogYmF0dGxlc2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBhbmQgZGVzdHJveWVyLlxuICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgSG93IG1hbnkgZ3JpZHMgb24gdGhlIGJvYXJkIHRoZSBzaGlwIG9jY3VwaWVzLlxuICogQHJldHVybiBBIHNoaXAgbW9kdWxlIG9iamVjdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGluTmFtZSwgaW5TaXplKSA9PiB7XG4gIC8qKlxuICAgKiBTaGlwIHBsYWluIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgaWQ6IEdFTi5uZXh0KCkudmFsdWUsXG4gICAgbmFtZTogaW5OYW1lLFxuICAgIHNpemU6IGluU2l6ZSxcbiAgICByb3c6IDAsIC8vIGRlZmF1bHRcbiAgICBjb2x1bW46IDAsIC8vIGRlZmF1bHRcbiAgICBkaXJlY3Rpb246IEhPUklaT05UQUwsIC8vIGRlZmF1bHRcbiAgICBoaXQ6IDAsIC8vIEhvdyBtYW55IHRpbWVzIHRoZSBzaGlwIGlzIGhpdC5cbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgU2hpcCdzIGlkLlxuICAgKi9cbiAgZnVuY3Rpb24gaWQoKSB7XG4gICAgcmV0dXJuIHNoaXAuaWQ7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgU2hpcCdzIG5hbWUuXG4gICAqL1xuICBmdW5jdGlvbiBuYW1lKCkge1xuICAgIHJldHVybiBzaGlwLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgU2l6ZSBvZiB0aGUgc2hpcC5cbiAgICovXG4gIGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgcmV0dXJuIHNoaXAuc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBQb3NpdGlvbiBvZiB0aGUgc2hpcCBoZWFkLlxuICAgKi9cbiAgZnVuY3Rpb24gaGVhZCgpIHtcbiAgICByZXR1cm4gW3NoaXAucm93LCBzaGlwLmNvbHVtbl07XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBQb3NpdGlvbiBvZiB0aGUgc2hpcCB0YWlsLlxuICAgKi9cbiAgZnVuY3Rpb24gdGFpbCgpIHtcbiAgICBzd2l0Y2ggKHNoaXAuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIEhPUklaT05UQUw6XG4gICAgICAgIHJldHVybiBbc2hpcC5yb3csIHNoaXAuY29sdW1uICsgc2hpcC5zaXplIC0gMV07XG4gICAgICBjYXNlIFZFUlRJQ0FMOlxuICAgICAgICByZXR1cm4gW3NoaXAucm93ICsgc2hpcC5zaXplIC0gMSwgc2hpcC5jb2x1bW5dO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGRpcmVjdGlvbiBvZiB0aGUgc2hpcC5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZGlyZWN0aW9uIGlzIGhvcml6b250YWwsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGlzSG9yaXpvbnRhbCgpIHtcbiAgICByZXR1cm4gc2hpcC5kaXJlY3Rpb24gPT09IEhPUklaT05UQUw7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgUmV0dXJuIGhvdyBtYW55IGF0dGFja3MgdGhlIHNoaXAgaGFzIHRha2VuLlxuICAgKi9cbiAgZnVuY3Rpb24gY291bnRIaXRzKCkge1xuICAgIHJldHVybiBzaGlwLmhpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIT1JJWk9OVEFMIC0+IFZFUlRJQ0FMXG4gICAqIFZFUlRJQ0FMIC0+IEhPUklaT05UQUxcbiAgICogU2hpcCBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IGlmIHRoZSBib2FyZCBoYXMgZW5vdWdoIHNwYWNlLlxuICAgKiBCb2FyZCBtb2R1bGUgd2lsbCBjaGVjayB0aGF0IGZvciB1cyBiZWZvcmUgY2FsbCB0aGlzIGZ1bmN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gdG9nZ2xlRGlyZWN0aW9uKCkge1xuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gSE9SSVpPTlRBTCkge1xuICAgICAgc2hpcC5kaXJlY3Rpb24gPSBWRVJUSUNBTDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcC5kaXJlY3Rpb24gPSBIT1JJWk9OVEFMO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdXIgc2hpcHMgYXJlIG5vdCBhd2FyZSBvZiB0aGUgc2l6ZSBvZiB0aGUgZ2FtZSBib2FyZC5cbiAgICogQm9hcmQgbW9kdWxlIHdpbGwgY2hlY2sgdGhlIHZhbGlkYXRpb24gZm9yIHVzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEF4aSBZIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uIEF4aSBYIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgKi9cbiAgZnVuY3Rpb24gcHV0KHJvdywgY29sdW1uKSB7XG4gICAgc2hpcC5yb3cgPSByb3c7XG4gICAgc2hpcC5jb2x1bW4gPSBjb2x1bW47XG4gIH1cblxuICAvKipcbiAgICogQXNzZXJ0aW9uOiBFYWNoIGdyaWQgb2YgdGhlIGJvYXJkIGNhbiBvbmx5IGJlIGF0dGVja2VkIG9uY2UuXG4gICAqIFRoZSBzaGlwIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgd2hlYXRoZXIgYSBzaW5nbGUgcGFydCBpcyBoaXQgdHdpY2UuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByb3cgQXhpIFggb2Ygb3Bwb25lbnQncyBhdHRhY2suXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gQXhpIFkgb2Ygb3Bwb25lbnQncyBhdHRhY2suXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHNoaXAgaXMgaGl0LCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBoaXQocm93LCBjb2x1bW4pIHtcbiAgICBzd2l0Y2ggKHNoaXAuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIEhPUklaT05UQUw6XG4gICAgICAgIGlmIChyb3cgIT09IHNoaXAucm93KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChjb2x1bW4gPCBzaGlwLmNvbHVtbiB8fCBjb2x1bW4gPiAoc2hpcC5jb2x1bW4gKyBzaGlwLnNpemUgLSAxKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVkVSVElDQUw6XG4gICAgICAgIGlmIChjb2x1bW4gIT09IHNoaXAuY29sdW1uKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChyb3cgPCBzaGlwLnJvdyB8fCByb3cgPiAoc2hpcC5yb3cgKyBzaGlwLnNpemUgLSAxKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzaGlwLmhpdCArPSAxO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGV2ZXJ5IHBvcnQgdGhlIHNoaXAgaGFzIGJlZW4gaGl0LlxuICAgKiBBcyBhbHdheXMsIHRoZSBzaGlwIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXQgd2hlYXRoZXIgYSBzaW5nbGUgcGFydCBpcyBoaXQgdHdpY2UuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiAoc2hpcC5oaXQgPj0gc2hpcC5zaXplKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgc2l6ZSxcbiAgICBuYW1lLFxuICAgIGhlYWQsXG4gICAgdGFpbCxcbiAgICBpc0hvcml6b250YWwsXG4gICAgY291bnRIaXRzLFxuICAgIHRvZ2dsZURpcmVjdGlvbixcbiAgICBwdXQsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG4iLCIvLyBpbXBvcnQgUGxheWVyIGZyb20gXCIuL21vZGVscy9wbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgY29uc3QgRUxFTUVOVFMgPSB7XG4gICAgcm9vdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKSxcbiAgICBib2FyZHM6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkJykpLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzaW5nbGUgZ3JpZCBpbiBib2FyZCBhY2NvcmRpbmcgdG8gaXQncyBjb29yZGluYXRlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gcm93IEdyaWQgYXhpIFkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gR3JpZCBheGkgWC5cbiAgICogQHJldHVybnMgR3JpZCBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlR3JpZChyb3csIGNvbHVtbikge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICBncmlkLmRhdGFzZXQucm93ID0gcm93O1xuICAgIGdyaWQuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW47XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0d28gYm9hcmQgZm9yIGVhY2ggcGxheWVyOlxuICAgKiAgMS4gaGlzIG93biBib2FyZC5cbiAgICogIDLjgIJoaXMgb3Bwb25lbnQncyBib2FyZC5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgU2l6ZSBvZiB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7QXJyYXl9IEFycmF5IG9mIHBsYXllciBpZC5cbiAgICovXG4gIGZ1bmN0aW9uIGRyYXdCb2FyZChzaXplLCBwbGF5ZXJJZHMpIHtcbiAgICBFTEVNRU5UUy5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLWJvYXJkLXNpemUnLCBgJHtzaXplfWApO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgRUxFTUVOVFMuYm9hcmRzLmZvckVhY2goKGJvYXJkRWxlbWVudCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBib2FyZEVsZW1lbnQuZGF0YXNldC5wbGF5ZXJJZCA9IHBsYXllcklkc1tpbmRleF07XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0pO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdyArPSAxKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBzaXplOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBFTEVNRU5UUy5ib2FyZHMuZm9yRWFjaCgoYm9hcmRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgYm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUdyaWQocm93LCBjb2x1bW4pKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsaWNrIG9uIGJvYXJkIHdpbGwgY2FsbGJhY2sgY29udHJvbGxlcidzIHVzZXJBdHRhY2soKSBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBib2FyZEVsZW1lbnQgVGFyZ2V0IGJvYXJkIGNvbnRhaW5lciBlbGVtZW50IGluIERPTS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQWN0dWFsIGF0dGFjayBsb2dpYyByZXNpZGVzIGluIGNvbnRyb2xsZXIuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kUmVjZWl2ZUF0dGFjayhjYWxsYmFjaykge1xuICAgIEVMRU1FTlRTLmJvYXJkcy5mb3JFYWNoKChib2FyZEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGdyaWRzID0gYm9hcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJyk7XG4gICAgICBncmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XG4gICAgICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYWxsYmFjayhcbiAgICAgICAgICBwYXJzZUludChncmlkLmRhdGFzZXQucm93LCAxMCksXG4gICAgICAgICAgcGFyc2VJbnQoZ3JpZC5kYXRhc2V0LmNvbHVtbiwgMTApLFxuICAgICAgICAgIHBhcnNlSW50KGJvYXJkRWxlbWVudC5kYXRhc2V0LnBsYXllcklkLCAxMCkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gcHJldmVudCBjdXJyZW50IHBsYXllcidzIGJvYXJkIHRvIGJlIGF0dGFja2VkLlxuXG4gIHJldHVybiB7XG4gICAgZHJhd0JvYXJkLFxuICAgIGJpbmRSZWNlaXZlQXR0YWNrLFxuICB9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgY3NzIGZyb20gJy4uL2Nzcy9pbmRleC5jc3MnO1xuXG5Db250cm9sbGVyLmRyYXdCb2FyZCgpO1xuQ29udHJvbGxlci5lbmFibGVCb2FyZFJlY2VpdmVBdHRhY2soKTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiVmlldyIsImRyYXdCb2FyZCIsImluaXQiLCJwbGF5ZXJJZHMiLCJwbGF5ZXJzIiwicmVkdWNlIiwiYXJyIiwicGxheWVyIiwicHVzaCIsImlkIiwiREVGQVVMVF9CT0FSRF9TSVpFIiwidXNlckF0dGFjayIsInJvdyIsImNvbHVtbiIsIm9wcG9uZW50SWQiLCJib2FyZCIsInJlY2VpdmVBdHRhY2siLCJuZXh0VHVybiIsImVuYWJsZUJvYXJkUmVjZWl2ZUF0dGFjayIsImJpbmRSZWNlaXZlQXR0YWNrIiwiVU5JVF9URVNUIiwiaW5TaXplIiwic2l6ZSIsImZsZWV0IiwiaGl0cyIsIm1pc3NlcyIsImludGFjdCIsImZsZWV0U2l6ZSIsImxlbmd0aCIsImZpbGxJbnRhY3QiLCJyZW1vdmVGcm9tSW50YWN0Iiwic3RyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJwb3NpdGlvbiIsInNwbGljZSIsImlzT3ZlcmxhcCIsImZpeGVkU2hpcCIsIm5ld0hlYWQiLCJuZXdUYWlsIiwiaGVhZCIsImhlYWRSb3ciLCJoZWFkQ29sdW1uIiwidGFpbCIsInRhaWxSb3ciLCJ0YWlsQ29sdW1uIiwib3ZlcmxhcFJvd1N0YXJ0IiwiTWF0aCIsIm1heCIsIm92ZXJsYXBDb2x1bW5TdGFydCIsIm92ZXJsYXBSb3dFbmQiLCJtaW4iLCJvdmVybGFwQ29sdW1uRW5kIiwiYXZhaWxhYmxlIiwic2hpcCIsImlzSG9yaXpvbnRhbCIsInNvbWUiLCJwdXRTaGlwIiwicHV0IiwicmVtb3ZlU2hpcCIsImZsZWV0U2hpcCIsInRvZ2dsZUZsZWV0U2hpcCIsInRvZ2dsZURpcmVjdGlvbiIsInBvc2l0aW9uRXF1YWwiLCJwb3NpdGlvbkEiLCJwb3NpdGlvbkIiLCJhbHJlYWR5QmVlbkF0dGFja2VkIiwidGFyZ2V0IiwiaGl0IiwibWlzcyIsImFsbFN1bmsiLCJldmVyeSIsImlzU3VuayIsImFwaSIsIlNoaXAiLCJCb2FyZCIsIlBsYXllciIsIkFJIiwiSFVNQU4iLCJFQVNZIiwiTk9STUFMIiwiSEFSRCIsIlNUQU5EQVJEX0ZMRUVUIiwiZ2FtZSIsInJhbmRvbSIsImZsb29yIiwicmFuZG9tUG9zaXRpb24iLCJhdXRvZmlsbEZsZWV0IiwiZm9yRWFjaCIsInRlbXBsYXRlIiwiZmluZCIsInRoZVBsYXllciIsImluaXRQbGF5ZXJzIiwicGxheWVyMVR5cGUiLCJwbGF5ZXIyVHlwZSIsInBsYXllclR5cGVzIiwiaSIsIm5ld1BsYXllciIsImFnYWluc3RBSSIsImxldmVsIiwiYWdhaW5zdEh1bWFuIiwibmV4dEluZGV4IiwiY3VycmVudFBsYXllciIsImN1cnJQbGF5ZXIiLCJvcHBvbmVudCIsImF0dGFjayIsInN0YXJ0IiwiaXNBSSIsInNldEFpTGV2ZWwiLCJTeW1ib2wiLCJpbklkIiwiaW5Cb2FyZCIsImluVHlwZSIsImluTGV2ZWwiLCJ0eXBlIiwiYWlMZXZlbCIsInVuZGVmaW5lZCIsInJhbmRvbUF0dGFjayIsIm9wcG9uZW50Qm9hcmQiLCJzcGxpdCIsInJvd1N0ciIsImNvbHVtblN0ciIsInBhcnNlSW50Iiwibm9ybWFsQXR0YWNrIiwic21hcnRBdHRjayIsImNhbGxiYWNrIiwiaW5maW5pdGUiLCJHRU4iLCJIT1JJWk9OVEFMIiwiVkVSVElDQUwiLCJpbk5hbWUiLCJuZXh0IiwidmFsdWUiLCJuYW1lIiwiZGlyZWN0aW9uIiwiY291bnRIaXRzIiwiRUxFTUVOVFMiLCJyb290IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYm9hcmRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdyaWQiLCJncmlkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiYm9hcmRFbGVtZW50IiwicGxheWVySWQiLCJhcHBlbmRDaGlsZCIsImdyaWRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNvbnRyb2xsZXIiLCJjc3MiXSwic291cmNlUm9vdCI6IiJ9