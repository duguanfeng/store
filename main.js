/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'apps',

  data() {
    return {
      msg: 123123
    };
  }

});

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function (a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function (_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = ('__proto__' in {}); // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof __webpack_require__.g !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ( true && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (true) {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if ( true && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if (true) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if ( true && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */


function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

function isExplicable(value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) args[len] = arguments[len];

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function () {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function (target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = (key in target);
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };

    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
       true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if (true) {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
       true && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
     true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
      }

      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;

        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }

        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
       true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;

              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;

            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : 0);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (true) {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if (true) {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)

if (inBrowser && !isIE) {
  var performance = window.performance;

  if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () {
      return performance.now();
    };
  }
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : 0; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
       true && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (true) {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {} // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
     true && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
       true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if ( true && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if ( true && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (true) {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
      }
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (true) {
      initProxy(vm);
    } else {} // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var cachedNode = cache[key];

    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];

  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.12';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
       true && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecessary `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (typeof def$$1 === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
     true && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function (c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function (d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if ( true && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function () {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (true) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if ( true && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue);

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("div", [_vm._v(_vm._s(_vm.msg))])])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");


new vue__WEBPACK_IMPORTED_MODULE_1__.default({
  el: '#app',
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_0__.default)
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9yZS9zcmMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly9zdG9yZS8uL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20uanMiLCJ3ZWJwYWNrOi8vc3RvcmUvLi9zcmMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly9zdG9yZS8uL3NyYy9BcHAudnVlP2IzOWIiLCJ3ZWJwYWNrOi8vc3RvcmUvLi9zcmMvQXBwLnZ1ZT85ZGNhIiwid2VicGFjazovL3N0b3JlLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RvcmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0b3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RvcmUvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZW1wdHlPYmplY3QiLCJPYmplY3QiLCJmcmVlemUiLCJpc1VuZGVmIiwidiIsInVuZGVmaW5lZCIsImlzRGVmIiwiaXNUcnVlIiwiaXNGYWxzZSIsImlzUHJpbWl0aXZlIiwidmFsdWUiLCJpc09iamVjdCIsIm9iaiIsIl90b1N0cmluZyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwidG9SYXdUeXBlIiwiY2FsbCIsInNsaWNlIiwiaXNQbGFpbk9iamVjdCIsImlzUmVnRXhwIiwiaXNWYWxpZEFycmF5SW5kZXgiLCJ2YWwiLCJuIiwicGFyc2VGbG9hdCIsIlN0cmluZyIsIk1hdGgiLCJmbG9vciIsImlzRmluaXRlIiwiaXNQcm9taXNlIiwidGhlbiIsImNhdGNoIiwiQXJyYXkiLCJpc0FycmF5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTnVtYmVyIiwiaXNOYU4iLCJtYWtlTWFwIiwic3RyIiwiZXhwZWN0c0xvd2VyQ2FzZSIsIm1hcCIsImNyZWF0ZSIsImxpc3QiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImlzQnVpbHRJblRhZyIsImlzUmVzZXJ2ZWRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJhcnIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJrZXkiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJyZXBsYWNlIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInBvbHlmaWxsQmluZCIsImN0eCIsImJvdW5kRm4iLCJhIiwibCIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2xlbmd0aCIsIm5hdGl2ZUJpbmQiLCJiaW5kIiwiRnVuY3Rpb24iLCJ0b0FycmF5Iiwic3RhcnQiLCJyZXQiLCJleHRlbmQiLCJ0byIsIl9mcm9tIiwidG9PYmplY3QiLCJyZXMiLCJub29wIiwiYiIsIm5vIiwiaWRlbnRpdHkiLCJsb29zZUVxdWFsIiwiaXNPYmplY3RBIiwiaXNPYmplY3RCIiwiaXNBcnJheUEiLCJpc0FycmF5QiIsImV2ZXJ5IiwiZSIsIkRhdGUiLCJnZXRUaW1lIiwia2V5c0EiLCJrZXlzIiwia2V5c0IiLCJsb29zZUluZGV4T2YiLCJvbmNlIiwiY2FsbGVkIiwiU1NSX0FUVFIiLCJBU1NFVF9UWVBFUyIsIkxJRkVDWUNMRV9IT09LUyIsImNvbmZpZyIsIm9wdGlvbk1lcmdlU3RyYXRlZ2llcyIsInNpbGVudCIsInByb2R1Y3Rpb25UaXAiLCJwcm9jZXNzIiwiZGV2dG9vbHMiLCJwZXJmb3JtYW5jZSIsImVycm9ySGFuZGxlciIsIndhcm5IYW5kbGVyIiwiaWdub3JlZEVsZW1lbnRzIiwia2V5Q29kZXMiLCJpc1Jlc2VydmVkVGFnIiwiaXNSZXNlcnZlZEF0dHIiLCJpc1Vua25vd25FbGVtZW50IiwiZ2V0VGFnTmFtZXNwYWNlIiwicGFyc2VQbGF0Zm9ybVRhZ05hbWUiLCJtdXN0VXNlUHJvcCIsImFzeW5jIiwiX2xpZmVjeWNsZUhvb2tzIiwidW5pY29kZVJlZ0V4cCIsImlzUmVzZXJ2ZWQiLCJjaGFyQ29kZUF0IiwiZGVmIiwiZW51bWVyYWJsZSIsImRlZmluZVByb3BlcnR5Iiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJiYWlsUkUiLCJSZWdFeHAiLCJzb3VyY2UiLCJwYXJzZVBhdGgiLCJwYXRoIiwidGVzdCIsInNlZ21lbnRzIiwiaGFzUHJvdG8iLCJpbkJyb3dzZXIiLCJ3aW5kb3ciLCJpbldlZXgiLCJXWEVudmlyb25tZW50IiwicGxhdGZvcm0iLCJ3ZWV4UGxhdGZvcm0iLCJVQSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzSUUiLCJpc0lFOSIsImlzRWRnZSIsImlzQW5kcm9pZCIsImlzSU9TIiwiaXNDaHJvbWUiLCJpc1BoYW50b21KUyIsImlzRkYiLCJtYXRjaCIsIm5hdGl2ZVdhdGNoIiwid2F0Y2giLCJzdXBwb3J0c1Bhc3NpdmUiLCJvcHRzIiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9pc1NlcnZlciIsImlzU2VydmVyUmVuZGVyaW5nIiwiZ2xvYmFsIiwiZW52IiwiVlVFX0VOViIsIl9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJpc05hdGl2ZSIsIkN0b3IiLCJoYXNTeW1ib2wiLCJTeW1ib2wiLCJSZWZsZWN0Iiwib3duS2V5cyIsIl9TZXQiLCJTZXQiLCJzZXQiLCJoYXMiLCJhZGQiLCJjbGVhciIsIndhcm4iLCJ0aXAiLCJnZW5lcmF0ZUNvbXBvbmVudFRyYWNlIiwiZm9ybWF0Q29tcG9uZW50TmFtZSIsImhhc0NvbnNvbGUiLCJjb25zb2xlIiwiY2xhc3NpZnlSRSIsImNsYXNzaWZ5IiwibXNnIiwidm0iLCJ0cmFjZSIsImVycm9yIiwiaW5jbHVkZUZpbGUiLCIkcm9vdCIsIm9wdGlvbnMiLCJjaWQiLCJfaXNWdWUiLCIkb3B0aW9ucyIsImNvbnN0cnVjdG9yIiwibmFtZSIsIl9jb21wb25lbnRUYWciLCJmaWxlIiwiX19maWxlIiwicmVwZWF0IiwiJHBhcmVudCIsInRyZWUiLCJjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UiLCJsYXN0IiwicHVzaCIsImpvaW4iLCJ1aWQiLCJEZXAiLCJpZCIsInN1YnMiLCJhZGRTdWIiLCJzdWIiLCJyZW1vdmVTdWIiLCJkZXBlbmQiLCJ0YXJnZXQiLCJhZGREZXAiLCJub3RpZnkiLCJzb3J0IiwidXBkYXRlIiwidGFyZ2V0U3RhY2siLCJwdXNoVGFyZ2V0IiwicG9wVGFyZ2V0IiwicG9wIiwiVk5vZGUiLCJ0YWciLCJkYXRhIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiZWxtIiwiY29udGV4dCIsImNvbXBvbmVudE9wdGlvbnMiLCJhc3luY0ZhY3RvcnkiLCJucyIsImZuQ29udGV4dCIsImZuT3B0aW9ucyIsImZuU2NvcGVJZCIsImNvbXBvbmVudEluc3RhbmNlIiwicGFyZW50IiwicmF3IiwiaXNTdGF0aWMiLCJpc1Jvb3RJbnNlcnQiLCJpc0NvbW1lbnQiLCJpc0Nsb25lZCIsImlzT25jZSIsImFzeW5jTWV0YSIsImlzQXN5bmNQbGFjZWhvbGRlciIsInByb3RvdHlwZUFjY2Vzc29ycyIsImNoaWxkIiwiZGVmaW5lUHJvcGVydGllcyIsImNyZWF0ZUVtcHR5Vk5vZGUiLCJub2RlIiwiY3JlYXRlVGV4dFZOb2RlIiwiY2xvbmVWTm9kZSIsInZub2RlIiwiY2xvbmVkIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsIm1ldGhvZHNUb1BhdGNoIiwiZm9yRWFjaCIsIm1ldGhvZCIsIm9yaWdpbmFsIiwibXV0YXRvciIsImFyZ3MiLCJsZW4iLCJyZXN1bHQiLCJvYiIsIl9fb2JfXyIsImluc2VydGVkIiwib2JzZXJ2ZUFycmF5IiwiZGVwIiwiYXJyYXlLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInNob3VsZE9ic2VydmUiLCJ0b2dnbGVPYnNlcnZpbmciLCJPYnNlcnZlciIsInZtQ291bnQiLCJwcm90b0F1Z21lbnQiLCJjb3B5QXVnbWVudCIsIndhbGsiLCJkZWZpbmVSZWFjdGl2ZSQkMSIsIml0ZW1zIiwib2JzZXJ2ZSIsInNyYyIsIl9fcHJvdG9fXyIsImFzUm9vdERhdGEiLCJpc0V4dGVuc2libGUiLCJjdXN0b21TZXR0ZXIiLCJzaGFsbG93IiwicHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXR0ZXIiLCJzZXR0ZXIiLCJjaGlsZE9iIiwicmVhY3RpdmVHZXR0ZXIiLCJkZXBlbmRBcnJheSIsInJlYWN0aXZlU2V0dGVyIiwibmV3VmFsIiwibWF4IiwiZGVsIiwic3RyYXRzIiwiZWwiLCJwcm9wc0RhdGEiLCJkZWZhdWx0U3RyYXQiLCJtZXJnZURhdGEiLCJmcm9tIiwidG9WYWwiLCJmcm9tVmFsIiwibWVyZ2VEYXRhT3JGbiIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwibWVyZ2VkRGF0YUZuIiwibWVyZ2VkSW5zdGFuY2VEYXRhRm4iLCJpbnN0YW5jZURhdGEiLCJkZWZhdWx0RGF0YSIsIm1lcmdlSG9vayIsImNvbmNhdCIsImRlZHVwZUhvb2tzIiwiaG9va3MiLCJob29rIiwibWVyZ2VBc3NldHMiLCJhc3NlcnRPYmplY3RUeXBlIiwidHlwZSIsImtleSQxIiwicHJvcHMiLCJtZXRob2RzIiwiaW5qZWN0IiwiY29tcHV0ZWQiLCJwcm92aWRlIiwiY2hlY2tDb21wb25lbnRzIiwiY29tcG9uZW50cyIsInZhbGlkYXRlQ29tcG9uZW50TmFtZSIsIm5vcm1hbGl6ZVByb3BzIiwibm9ybWFsaXplSW5qZWN0Iiwibm9ybWFsaXplZCIsIm5vcm1hbGl6ZURpcmVjdGl2ZXMiLCJkaXJzIiwiZGlyZWN0aXZlcyIsImRlZiQkMSIsIm1lcmdlT3B0aW9ucyIsIl9iYXNlIiwiZXh0ZW5kcyIsIm1peGlucyIsIm1lcmdlRmllbGQiLCJzdHJhdCIsInJlc29sdmVBc3NldCIsIndhcm5NaXNzaW5nIiwiYXNzZXRzIiwiY2FtZWxpemVkSWQiLCJQYXNjYWxDYXNlSWQiLCJ2YWxpZGF0ZVByb3AiLCJwcm9wT3B0aW9ucyIsInByb3AiLCJhYnNlbnQiLCJib29sZWFuSW5kZXgiLCJnZXRUeXBlSW5kZXgiLCJCb29sZWFuIiwic3RyaW5nSW5kZXgiLCJnZXRQcm9wRGVmYXVsdFZhbHVlIiwicHJldlNob3VsZE9ic2VydmUiLCJhc3NlcnRQcm9wIiwiZGVmYXVsdCIsIl9wcm9wcyIsImdldFR5cGUiLCJyZXF1aXJlZCIsInZhbGlkIiwiZXhwZWN0ZWRUeXBlcyIsImFzc2VydGVkVHlwZSIsImFzc2VydFR5cGUiLCJleHBlY3RlZFR5cGUiLCJnZXRJbnZhbGlkVHlwZU1lc3NhZ2UiLCJ2YWxpZGF0b3IiLCJzaW1wbGVDaGVja1JFIiwidCIsImlzU2FtZVR5cGUiLCJtZXNzYWdlIiwicmVjZWl2ZWRUeXBlIiwiZXhwZWN0ZWRWYWx1ZSIsInN0eWxlVmFsdWUiLCJyZWNlaXZlZFZhbHVlIiwiaXNFeHBsaWNhYmxlIiwiaXNCb29sZWFuIiwiTnVtYmVyIiwiZXhwbGljaXRUeXBlcyIsInNvbWUiLCJlbGVtIiwiaGFuZGxlRXJyb3IiLCJlcnIiLCJpbmZvIiwiY3VyIiwiZXJyb3JDYXB0dXJlZCIsImNhcHR1cmUiLCJnbG9iYWxIYW5kbGVFcnJvciIsImludm9rZVdpdGhFcnJvckhhbmRsaW5nIiwiaGFuZGxlciIsIl9oYW5kbGVkIiwibG9nRXJyb3IiLCJpc1VzaW5nTWljcm9UYXNrIiwiY2FsbGJhY2tzIiwicGVuZGluZyIsImZsdXNoQ2FsbGJhY2tzIiwiY29waWVzIiwidGltZXJGdW5jIiwiUHJvbWlzZSIsInAiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJjb3VudGVyIiwib2JzZXJ2ZXIiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjaGFyYWN0ZXJEYXRhIiwic2V0SW1tZWRpYXRlIiwibmV4dFRpY2siLCJjYiIsIl9yZXNvbHZlIiwiaW5pdFByb3h5IiwiYWxsb3dlZEdsb2JhbHMiLCJ3YXJuTm9uUHJlc2VudCIsIndhcm5SZXNlcnZlZFByZWZpeCIsImhhc1Byb3h5IiwiUHJveHkiLCJpc0J1aWx0SW5Nb2RpZmllciIsImhhc0hhbmRsZXIiLCJpc0FsbG93ZWQiLCIkZGF0YSIsImdldEhhbmRsZXIiLCJoYW5kbGVycyIsInJlbmRlciIsIl93aXRoU3RyaXBwZWQiLCJfcmVuZGVyUHJveHkiLCJzZWVuT2JqZWN0cyIsInRyYXZlcnNlIiwiX3RyYXZlcnNlIiwic2VlbiIsImlzQSIsImlzRnJvemVuIiwiZGVwSWQiLCJtYXJrIiwibWVhc3VyZSIsInBlcmYiLCJjbGVhck1hcmtzIiwiY2xlYXJNZWFzdXJlcyIsInN0YXJ0VGFnIiwiZW5kVGFnIiwibm9ybWFsaXplRXZlbnQiLCJwYXNzaXZlIiwib25jZSQkMSIsImNyZWF0ZUZuSW52b2tlciIsImZucyIsImludm9rZXIiLCJhcmd1bWVudHMkMSIsInVwZGF0ZUxpc3RlbmVycyIsIm9uIiwib2xkT24iLCJyZW1vdmUkJDEiLCJjcmVhdGVPbmNlSGFuZGxlciIsIm9sZCIsImV2ZW50IiwicGFyYW1zIiwibWVyZ2VWTm9kZUhvb2siLCJob29rS2V5Iiwib2xkSG9vayIsIndyYXBwZWRIb29rIiwibWVyZ2VkIiwiZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YSIsImF0dHJzIiwiYWx0S2V5Iiwia2V5SW5Mb3dlckNhc2UiLCJjaGVja1Byb3AiLCJoYXNoIiwicHJlc2VydmUiLCJzaW1wbGVOb3JtYWxpemVDaGlsZHJlbiIsIm5vcm1hbGl6ZUNoaWxkcmVuIiwibm9ybWFsaXplQXJyYXlDaGlsZHJlbiIsImlzVGV4dE5vZGUiLCJuZXN0ZWRJbmRleCIsImxhc3RJbmRleCIsInNoaWZ0IiwiX2lzVkxpc3QiLCJpbml0UHJvdmlkZSIsIl9wcm92aWRlZCIsImluaXRJbmplY3Rpb25zIiwicmVzb2x2ZUluamVjdCIsInByb3ZpZGVLZXkiLCJwcm92aWRlRGVmYXVsdCIsInJlc29sdmVTbG90cyIsInNsb3RzIiwic2xvdCIsIm5hbWUkMSIsImlzV2hpdGVzcGFjZSIsIm5vcm1hbGl6ZVNjb3BlZFNsb3RzIiwibm9ybWFsU2xvdHMiLCJwcmV2U2xvdHMiLCJoYXNOb3JtYWxTbG90cyIsImlzU3RhYmxlIiwiJHN0YWJsZSIsIiRrZXkiLCJfbm9ybWFsaXplZCIsIiRoYXNOb3JtYWwiLCJub3JtYWxpemVTY29wZWRTbG90Iiwia2V5JDIiLCJwcm94eU5vcm1hbFNsb3QiLCJwcm94eSIsInJlbmRlckxpc3QiLCJpdGVyYXRvciIsIm5leHQiLCJkb25lIiwicmVuZGVyU2xvdCIsImZhbGxiYWNrIiwiYmluZE9iamVjdCIsInNjb3BlZFNsb3RGbiIsIiRzY29wZWRTbG90cyIsIm5vZGVzIiwiJHNsb3RzIiwiJGNyZWF0ZUVsZW1lbnQiLCJyZXNvbHZlRmlsdGVyIiwiaXNLZXlOb3RNYXRjaCIsImV4cGVjdCIsImFjdHVhbCIsImNoZWNrS2V5Q29kZXMiLCJldmVudEtleUNvZGUiLCJidWlsdEluS2V5Q29kZSIsImV2ZW50S2V5TmFtZSIsImJ1aWx0SW5LZXlOYW1lIiwibWFwcGVkS2V5Q29kZSIsImJpbmRPYmplY3RQcm9wcyIsImFzUHJvcCIsImlzU3luYyIsImxvb3AiLCJkb21Qcm9wcyIsImNhbWVsaXplZEtleSIsImh5cGhlbmF0ZWRLZXkiLCIkZXZlbnQiLCJyZW5kZXJTdGF0aWMiLCJpc0luRm9yIiwiX3N0YXRpY1RyZWVzIiwic3RhdGljUmVuZGVyRm5zIiwibWFya1N0YXRpYyIsIm1hcmtPbmNlIiwibWFya1N0YXRpY05vZGUiLCJiaW5kT2JqZWN0TGlzdGVuZXJzIiwiZXhpc3RpbmciLCJvdXJzIiwicmVzb2x2ZVNjb3BlZFNsb3RzIiwiaGFzRHluYW1pY0tleXMiLCJjb250ZW50SGFzaEtleSIsImJpbmREeW5hbWljS2V5cyIsImJhc2VPYmoiLCJ2YWx1ZXMiLCJwcmVwZW5kTW9kaWZpZXIiLCJzeW1ib2wiLCJpbnN0YWxsUmVuZGVySGVscGVycyIsIl9vIiwiX24iLCJfcyIsIl9sIiwiX3QiLCJfcSIsIl9pIiwiX20iLCJfZiIsIl9rIiwiX2IiLCJfdiIsIl9lIiwiX3UiLCJfZyIsIl9kIiwiX3AiLCJGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCIsInRoaXMkMSIsImNvbnRleHRWbSIsIl9vcmlnaW5hbCIsImlzQ29tcGlsZWQiLCJfY29tcGlsZWQiLCJuZWVkTm9ybWFsaXphdGlvbiIsImxpc3RlbmVycyIsImluamVjdGlvbnMiLCJzY29wZWRTbG90cyIsIl9zY29wZUlkIiwiX2MiLCJkIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQiLCJtZXJnZVByb3BzIiwicmVuZGVyQ29udGV4dCIsImNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQiLCJ2bm9kZXMiLCJjbG9uZSIsImRldnRvb2xzTWV0YSIsImNvbXBvbmVudFZOb2RlSG9va3MiLCJpbml0IiwiaHlkcmF0aW5nIiwiX2lzRGVzdHJveWVkIiwia2VlcEFsaXZlIiwibW91bnRlZE5vZGUiLCJwcmVwYXRjaCIsImNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUiLCJhY3RpdmVJbnN0YW5jZSIsIiRtb3VudCIsIm9sZFZub2RlIiwidXBkYXRlQ2hpbGRDb21wb25lbnQiLCJpbnNlcnQiLCJfaXNNb3VudGVkIiwiY2FsbEhvb2siLCJxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCIsImFjdGl2YXRlQ2hpbGRDb21wb25lbnQiLCJkZXN0cm95IiwiJGRlc3Ryb3kiLCJkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQiLCJob29rc1RvTWVyZ2UiLCJjcmVhdGVDb21wb25lbnQiLCJiYXNlQ3RvciIsInJlc29sdmVBc3luY0NvbXBvbmVudCIsImNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIiLCJyZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zIiwibW9kZWwiLCJ0cmFuc2Zvcm1Nb2RlbCIsImZ1bmN0aW9uYWwiLCJuYXRpdmVPbiIsImFic3RyYWN0IiwiaW5zdGFsbENvbXBvbmVudEhvb2tzIiwiX2lzQ29tcG9uZW50IiwiX3BhcmVudFZub2RlIiwiaW5saW5lVGVtcGxhdGUiLCJ0b01lcmdlIiwiX21lcmdlZCIsIm1lcmdlSG9vayQxIiwiZjEiLCJmMiIsImNhbGxiYWNrIiwiU0lNUExFX05PUk1BTElaRSIsIkFMV0FZU19OT1JNQUxJWkUiLCJub3JtYWxpemF0aW9uVHlwZSIsImFsd2F5c05vcm1hbGl6ZSIsIl9jcmVhdGVFbGVtZW50IiwiaXMiLCIkdm5vZGUiLCJwcmUiLCJhcHBseU5TIiwicmVnaXN0ZXJEZWVwQmluZGluZ3MiLCJmb3JjZSIsInN0eWxlIiwiY2xhc3MiLCJpbml0UmVuZGVyIiwiX3Zub2RlIiwicGFyZW50Vm5vZGUiLCJfcmVuZGVyQ2hpbGRyZW4iLCJwYXJlbnREYXRhIiwiaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50IiwiX3BhcmVudExpc3RlbmVycyIsImN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSIsInJlbmRlck1peGluIiwiVnVlIiwiJG5leHRUaWNrIiwiX3JlbmRlciIsInJlZiIsInJlbmRlckVycm9yIiwiZW5zdXJlQ3RvciIsImNvbXAiLCJiYXNlIiwiX19lc01vZHVsZSIsInRvU3RyaW5nVGFnIiwiZmFjdG9yeSIsImVycm9yQ29tcCIsInJlc29sdmVkIiwib3duZXIiLCJvd25lcnMiLCJsb2FkaW5nIiwibG9hZGluZ0NvbXAiLCJzeW5jIiwidGltZXJMb2FkaW5nIiwidGltZXJUaW1lb3V0IiwiJG9uIiwiZm9yY2VSZW5kZXIiLCJyZW5kZXJDb21wbGV0ZWQiLCIkZm9yY2VVcGRhdGUiLCJjbGVhclRpbWVvdXQiLCJyZWplY3QiLCJyZWFzb24iLCJjb21wb25lbnQiLCJkZWxheSIsInRpbWVvdXQiLCJnZXRGaXJzdENvbXBvbmVudENoaWxkIiwiaW5pdEV2ZW50cyIsIl9ldmVudHMiLCJfaGFzSG9va0V2ZW50IiwidXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzIiwicmVtb3ZlJDEiLCIkb2ZmIiwiX3RhcmdldCIsIm9uY2VIYW5kbGVyIiwib2xkTGlzdGVuZXJzIiwiZXZlbnRzTWl4aW4iLCJob29rUkUiLCIkb25jZSIsImkkMSIsImNicyIsIiRlbWl0IiwibG93ZXJDYXNlRXZlbnQiLCJzZXRBY3RpdmVJbnN0YW5jZSIsInByZXZBY3RpdmVJbnN0YW5jZSIsImluaXRMaWZlY3ljbGUiLCIkY2hpbGRyZW4iLCIkcmVmcyIsIl93YXRjaGVyIiwiX2luYWN0aXZlIiwiX2RpcmVjdEluYWN0aXZlIiwiX2lzQmVpbmdEZXN0cm95ZWQiLCJsaWZlY3ljbGVNaXhpbiIsIl91cGRhdGUiLCJwcmV2RWwiLCIkZWwiLCJwcmV2Vm5vZGUiLCJyZXN0b3JlQWN0aXZlSW5zdGFuY2UiLCJfX3BhdGNoX18iLCJfX3Z1ZV9fIiwidGVhcmRvd24iLCJfd2F0Y2hlcnMiLCJfZGF0YSIsIm1vdW50Q29tcG9uZW50IiwidGVtcGxhdGUiLCJ1cGRhdGVDb21wb25lbnQiLCJfbmFtZSIsIl91aWQiLCJXYXRjaGVyIiwiYmVmb3JlIiwicmVuZGVyQ2hpbGRyZW4iLCJuZXdTY29wZWRTbG90cyIsIm9sZFNjb3BlZFNsb3RzIiwiaGFzRHluYW1pY1Njb3BlZFNsb3QiLCJuZWVkc0ZvcmNlVXBkYXRlIiwiJGF0dHJzIiwiJGxpc3RlbmVycyIsInByb3BLZXlzIiwiX3Byb3BLZXlzIiwiaXNJbkluYWN0aXZlVHJlZSIsImRpcmVjdCIsImoiLCJNQVhfVVBEQVRFX0NPVU5UIiwicXVldWUiLCJhY3RpdmF0ZWRDaGlsZHJlbiIsImNpcmN1bGFyIiwid2FpdGluZyIsImZsdXNoaW5nIiwicmVzZXRTY2hlZHVsZXJTdGF0ZSIsImN1cnJlbnRGbHVzaFRpbWVzdGFtcCIsImdldE5vdyIsIm5vdyIsImNyZWF0ZUV2ZW50IiwidGltZVN0YW1wIiwiZmx1c2hTY2hlZHVsZXJRdWV1ZSIsIndhdGNoZXIiLCJydW4iLCJ1c2VyIiwiZXhwcmVzc2lvbiIsImFjdGl2YXRlZFF1ZXVlIiwidXBkYXRlZFF1ZXVlIiwiY2FsbEFjdGl2YXRlZEhvb2tzIiwiY2FsbFVwZGF0ZWRIb29rcyIsImVtaXQiLCJxdWV1ZVdhdGNoZXIiLCJ1aWQkMiIsImV4cE9yRm4iLCJpc1JlbmRlcldhdGNoZXIiLCJkZWVwIiwibGF6eSIsImFjdGl2ZSIsImRpcnR5IiwiZGVwcyIsIm5ld0RlcHMiLCJkZXBJZHMiLCJuZXdEZXBJZHMiLCJjbGVhbnVwRGVwcyIsInRtcCIsIm9sZFZhbHVlIiwiZXZhbHVhdGUiLCJzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24iLCJzb3VyY2VLZXkiLCJwcm94eUdldHRlciIsInByb3h5U2V0dGVyIiwiaW5pdFN0YXRlIiwiaW5pdFByb3BzIiwiaW5pdE1ldGhvZHMiLCJpbml0RGF0YSIsImluaXRDb21wdXRlZCIsImluaXRXYXRjaCIsInByb3BzT3B0aW9ucyIsImlzUm9vdCIsImdldERhdGEiLCJjb21wdXRlZFdhdGNoZXJPcHRpb25zIiwid2F0Y2hlcnMiLCJfY29tcHV0ZWRXYXRjaGVycyIsImlzU1NSIiwidXNlckRlZiIsImRlZmluZUNvbXB1dGVkIiwic2hvdWxkQ2FjaGUiLCJjcmVhdGVDb21wdXRlZEdldHRlciIsImNyZWF0ZUdldHRlckludm9rZXIiLCJjb21wdXRlZEdldHRlciIsImNyZWF0ZVdhdGNoZXIiLCIkd2F0Y2giLCJzdGF0ZU1peGluIiwiZGF0YURlZiIsInByb3BzRGVmIiwiJHNldCIsIiRkZWxldGUiLCJpbW1lZGlhdGUiLCJ1bndhdGNoRm4iLCJ1aWQkMyIsImluaXRNaXhpbiIsIl9pbml0IiwiaW5pdEludGVybmFsQ29tcG9uZW50IiwiX3NlbGYiLCJ2bm9kZUNvbXBvbmVudE9wdGlvbnMiLCJzdXBlciIsInN1cGVyT3B0aW9ucyIsImNhY2hlZFN1cGVyT3B0aW9ucyIsIm1vZGlmaWVkT3B0aW9ucyIsInJlc29sdmVNb2RpZmllZE9wdGlvbnMiLCJleHRlbmRPcHRpb25zIiwibW9kaWZpZWQiLCJsYXRlc3QiLCJzZWFsZWQiLCJzZWFsZWRPcHRpb25zIiwiaW5pdFVzZSIsInVzZSIsInBsdWdpbiIsImluc3RhbGxlZFBsdWdpbnMiLCJfaW5zdGFsbGVkUGx1Z2lucyIsInVuc2hpZnQiLCJpbnN0YWxsIiwiaW5pdE1peGluJDEiLCJtaXhpbiIsImluaXRFeHRlbmQiLCJTdXBlciIsIlN1cGVySWQiLCJjYWNoZWRDdG9ycyIsIl9DdG9yIiwiU3ViIiwiVnVlQ29tcG9uZW50IiwiaW5pdFByb3BzJDEiLCJpbml0Q29tcHV0ZWQkMSIsIkNvbXAiLCJpbml0QXNzZXRSZWdpc3RlcnMiLCJkZWZpbml0aW9uIiwiZ2V0Q29tcG9uZW50TmFtZSIsIm1hdGNoZXMiLCJwYXR0ZXJuIiwicHJ1bmVDYWNoZSIsImtlZXBBbGl2ZUluc3RhbmNlIiwiZmlsdGVyIiwiY2FjaGVkTm9kZSIsInBydW5lQ2FjaGVFbnRyeSIsImN1cnJlbnQiLCJjYWNoZWQkJDEiLCJwYXR0ZXJuVHlwZXMiLCJLZWVwQWxpdmUiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImNyZWF0ZWQiLCJkZXN0cm95ZWQiLCJtb3VudGVkIiwicmVmJDEiLCJwYXJzZUludCIsImJ1aWx0SW5Db21wb25lbnRzIiwiaW5pdEdsb2JhbEFQSSIsImNvbmZpZ0RlZiIsInV0aWwiLCJkZWZpbmVSZWFjdGl2ZSIsImRlbGV0ZSIsIm9ic2VydmFibGUiLCJzc3JDb250ZXh0IiwidmVyc2lvbiIsImFjY2VwdFZhbHVlIiwiYXR0ciIsImlzRW51bWVyYXRlZEF0dHIiLCJpc1ZhbGlkQ29udGVudEVkaXRhYmxlVmFsdWUiLCJjb252ZXJ0RW51bWVyYXRlZFZhbHVlIiwiaXNGYWxzeUF0dHJWYWx1ZSIsImlzQm9vbGVhbkF0dHIiLCJ4bGlua05TIiwiaXNYbGluayIsImdldFhsaW5rUHJvcCIsImdlbkNsYXNzRm9yVm5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlIiwibWVyZ2VDbGFzc0RhdGEiLCJyZW5kZXJDbGFzcyIsInN0YXRpY0NsYXNzIiwiZHluYW1pY0NsYXNzIiwic3RyaW5naWZ5Q2xhc3MiLCJzdHJpbmdpZnlBcnJheSIsInN0cmluZ2lmeU9iamVjdCIsInN0cmluZ2lmaWVkIiwibmFtZXNwYWNlTWFwIiwic3ZnIiwibWF0aCIsImlzSFRNTFRhZyIsImlzU1ZHIiwidW5rbm93bkVsZW1lbnRDYWNoZSIsIkhUTUxVbmtub3duRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiaXNUZXh0SW5wdXRUeXBlIiwicXVlcnkiLCJzZWxlY3RlZCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50JDEiLCJ0YWdOYW1lIiwibXVsdGlwbGUiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lc3BhY2UiLCJjcmVhdGVDb21tZW50IiwiaW5zZXJ0QmVmb3JlIiwibmV3Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwibmV4dFNpYmxpbmciLCJzZXRUZXh0Q29udGVudCIsInRleHRDb250ZW50Iiwic2V0U3R5bGVTY29wZSIsInNjb3BlSWQiLCJub2RlT3BzIiwicmVnaXN0ZXJSZWYiLCJpc1JlbW92YWwiLCJyZWZzIiwicmVmSW5Gb3IiLCJlbXB0eU5vZGUiLCJzYW1lVm5vZGUiLCJzYW1lSW5wdXRUeXBlIiwidHlwZUEiLCJ0eXBlQiIsImNyZWF0ZUtleVRvT2xkSWR4IiwiYmVnaW5JZHgiLCJlbmRJZHgiLCJjcmVhdGVQYXRjaEZ1bmN0aW9uIiwiYmFja2VuZCIsIm1vZHVsZXMiLCJlbXB0eU5vZGVBdCIsImNyZWF0ZVJtQ2IiLCJjaGlsZEVsbSIsInJlbW92ZU5vZGUiLCJpc1Vua25vd25FbGVtZW50JCQxIiwiaW5WUHJlIiwiaWdub3JlIiwiY3JlYXRpbmdFbG1JblZQcmUiLCJjcmVhdGVFbG0iLCJpbnNlcnRlZFZub2RlUXVldWUiLCJwYXJlbnRFbG0iLCJyZWZFbG0iLCJuZXN0ZWQiLCJvd25lckFycmF5Iiwic2V0U2NvcGUiLCJjcmVhdGVDaGlsZHJlbiIsImludm9rZUNyZWF0ZUhvb2tzIiwiaXNSZWFjdGl2YXRlZCIsImluaXRDb21wb25lbnQiLCJyZWFjdGl2YXRlQ29tcG9uZW50IiwicGVuZGluZ0luc2VydCIsImlzUGF0Y2hhYmxlIiwiaW5uZXJOb2RlIiwidHJhbnNpdGlvbiIsImFjdGl2YXRlIiwicmVmJCQxIiwiY2hlY2tEdXBsaWNhdGVLZXlzIiwiYW5jZXN0b3IiLCJhZGRWbm9kZXMiLCJzdGFydElkeCIsImludm9rZURlc3Ryb3lIb29rIiwicmVtb3ZlVm5vZGVzIiwiY2giLCJyZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rIiwicm0iLCJ1cGRhdGVDaGlsZHJlbiIsIm9sZENoIiwibmV3Q2giLCJyZW1vdmVPbmx5Iiwib2xkU3RhcnRJZHgiLCJuZXdTdGFydElkeCIsIm9sZEVuZElkeCIsIm9sZFN0YXJ0Vm5vZGUiLCJvbGRFbmRWbm9kZSIsIm5ld0VuZElkeCIsIm5ld1N0YXJ0Vm5vZGUiLCJuZXdFbmRWbm9kZSIsIm9sZEtleVRvSWR4IiwiaWR4SW5PbGQiLCJ2bm9kZVRvTW92ZSIsImNhbk1vdmUiLCJwYXRjaFZub2RlIiwiZmluZElkeEluT2xkIiwic2VlbktleXMiLCJlbmQiLCJoeWRyYXRlIiwicG9zdHBhdGNoIiwiaW52b2tlSW5zZXJ0SG9vayIsImluaXRpYWwiLCJoeWRyYXRpb25CYWlsZWQiLCJpc1JlbmRlcmVkTW9kdWxlIiwiYXNzZXJ0Tm9kZU1hdGNoIiwiaGFzQ2hpbGROb2RlcyIsImlubmVySFRNTCIsImNoaWxkcmVuTWF0Y2giLCJmaXJzdENoaWxkIiwiY2hpbGROb2RlcyIsImZ1bGxJbnZva2UiLCJub2RlVHlwZSIsInBhdGNoIiwiaXNJbml0aWFsUGF0Y2giLCJpc1JlYWxFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwib2xkRWxtIiwiX2xlYXZlQ2IiLCJwYXRjaGFibGUiLCJpJDIiLCJ1cGRhdGVEaXJlY3RpdmVzIiwidW5iaW5kRGlyZWN0aXZlcyIsImlzQ3JlYXRlIiwiaXNEZXN0cm95Iiwib2xkRGlycyIsIm5vcm1hbGl6ZURpcmVjdGl2ZXMkMSIsIm5ld0RpcnMiLCJkaXJzV2l0aEluc2VydCIsImRpcnNXaXRoUG9zdHBhdGNoIiwib2xkRGlyIiwiZGlyIiwiY2FsbEhvb2skMSIsIm9sZEFyZyIsImFyZyIsImNvbXBvbmVudFVwZGF0ZWQiLCJjYWxsSW5zZXJ0IiwiZW1wdHlNb2RpZmllcnMiLCJtb2RpZmllcnMiLCJnZXRSYXdEaXJOYW1lIiwicmF3TmFtZSIsImJhc2VNb2R1bGVzIiwidXBkYXRlQXR0cnMiLCJpbmhlcml0QXR0cnMiLCJvbGRBdHRycyIsInNldEF0dHIiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsImJhc2VTZXRBdHRyIiwic2V0QXR0cmlidXRlTlMiLCJfX2llcGgiLCJibG9ja2VyIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZUNsYXNzIiwib2xkRGF0YSIsImNscyIsInRyYW5zaXRpb25DbGFzcyIsIl90cmFuc2l0aW9uQ2xhc3NlcyIsIl9wcmV2Q2xhc3MiLCJrbGFzcyIsIlJBTkdFX1RPS0VOIiwiQ0hFQ0tCT1hfUkFESU9fVE9LRU4iLCJub3JtYWxpemVFdmVudHMiLCJjaGFuZ2UiLCJ0YXJnZXQkMSIsImNyZWF0ZU9uY2VIYW5kbGVyJDEiLCJyZW1vdmUkMiIsInVzZU1pY3JvdGFza0ZpeCIsImFkZCQxIiwiYXR0YWNoZWRUaW1lc3RhbXAiLCJfd3JhcHBlciIsImN1cnJlbnRUYXJnZXQiLCJvd25lckRvY3VtZW50IiwidXBkYXRlRE9NTGlzdGVuZXJzIiwiZXZlbnRzIiwic3ZnQ29udGFpbmVyIiwidXBkYXRlRE9NUHJvcHMiLCJvbGRQcm9wcyIsIl92YWx1ZSIsInN0ckN1ciIsInNob3VsZFVwZGF0ZVZhbHVlIiwiY2hlY2tWYWwiLCJjb21wb3NpbmciLCJpc05vdEluRm9jdXNBbmREaXJ0eSIsImlzRGlydHlXaXRoTW9kaWZpZXJzIiwibm90SW5Gb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJfdk1vZGlmaWVycyIsIm51bWJlciIsInRyaW0iLCJwYXJzZVN0eWxlVGV4dCIsImNzc1RleHQiLCJsaXN0RGVsaW1pdGVyIiwicHJvcGVydHlEZWxpbWl0ZXIiLCJub3JtYWxpemVTdHlsZURhdGEiLCJub3JtYWxpemVTdHlsZUJpbmRpbmciLCJzdGF0aWNTdHlsZSIsImJpbmRpbmdTdHlsZSIsImdldFN0eWxlIiwiY2hlY2tDaGlsZCIsInN0eWxlRGF0YSIsImNzc1ZhclJFIiwiaW1wb3J0YW50UkUiLCJzZXRQcm9wIiwic2V0UHJvcGVydHkiLCJub3JtYWxpemVkTmFtZSIsIm5vcm1hbGl6ZSIsInZlbmRvck5hbWVzIiwiZW1wdHlTdHlsZSIsImNhcE5hbWUiLCJ1cGRhdGVTdHlsZSIsIm9sZFN0YXRpY1N0eWxlIiwib2xkU3R5bGVCaW5kaW5nIiwibm9ybWFsaXplZFN0eWxlIiwib2xkU3R5bGUiLCJuZXdTdHlsZSIsIndoaXRlc3BhY2VSRSIsImFkZENsYXNzIiwiY2xhc3NMaXN0IiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJyZXNvbHZlVHJhbnNpdGlvbiIsImNzcyIsImF1dG9Dc3NUcmFuc2l0aW9uIiwiZW50ZXJDbGFzcyIsImVudGVyVG9DbGFzcyIsImVudGVyQWN0aXZlQ2xhc3MiLCJsZWF2ZUNsYXNzIiwibGVhdmVUb0NsYXNzIiwibGVhdmVBY3RpdmVDbGFzcyIsImhhc1RyYW5zaXRpb24iLCJUUkFOU0lUSU9OIiwiQU5JTUFUSU9OIiwidHJhbnNpdGlvblByb3AiLCJ0cmFuc2l0aW9uRW5kRXZlbnQiLCJhbmltYXRpb25Qcm9wIiwiYW5pbWF0aW9uRW5kRXZlbnQiLCJvbnRyYW5zaXRpb25lbmQiLCJvbndlYmtpdHRyYW5zaXRpb25lbmQiLCJvbmFuaW1hdGlvbmVuZCIsIm9ud2Via2l0YW5pbWF0aW9uZW5kIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibmV4dEZyYW1lIiwiYWRkVHJhbnNpdGlvbkNsYXNzIiwidHJhbnNpdGlvbkNsYXNzZXMiLCJyZW1vdmVUcmFuc2l0aW9uQ2xhc3MiLCJ3aGVuVHJhbnNpdGlvbkVuZHMiLCJnZXRUcmFuc2l0aW9uSW5mbyIsInByb3BDb3VudCIsImVuZGVkIiwib25FbmQiLCJ0cmFuc2Zvcm1SRSIsInN0eWxlcyIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRGVsYXlzIiwidHJhbnNpdGlvbkR1cmF0aW9ucyIsInRyYW5zaXRpb25UaW1lb3V0IiwiZ2V0VGltZW91dCIsImFuaW1hdGlvbkRlbGF5cyIsImFuaW1hdGlvbkR1cmF0aW9ucyIsImFuaW1hdGlvblRpbWVvdXQiLCJoYXNUcmFuc2Zvcm0iLCJkZWxheXMiLCJkdXJhdGlvbnMiLCJ0b01zIiwicyIsImVudGVyIiwidG9nZ2xlRGlzcGxheSIsImNhbmNlbGxlZCIsIl9lbnRlckNiIiwiYXBwZWFyQ2xhc3MiLCJhcHBlYXJUb0NsYXNzIiwiYXBwZWFyQWN0aXZlQ2xhc3MiLCJiZWZvcmVFbnRlciIsImFmdGVyRW50ZXIiLCJlbnRlckNhbmNlbGxlZCIsImJlZm9yZUFwcGVhciIsImFwcGVhciIsImFmdGVyQXBwZWFyIiwiYXBwZWFyQ2FuY2VsbGVkIiwiZHVyYXRpb24iLCJ0cmFuc2l0aW9uTm9kZSIsImlzQXBwZWFyIiwic3RhcnRDbGFzcyIsImFjdGl2ZUNsYXNzIiwidG9DbGFzcyIsImJlZm9yZUVudGVySG9vayIsImVudGVySG9vayIsImFmdGVyRW50ZXJIb29rIiwiZW50ZXJDYW5jZWxsZWRIb29rIiwiZXhwbGljaXRFbnRlckR1cmF0aW9uIiwiY2hlY2tEdXJhdGlvbiIsImV4cGVjdHNDU1MiLCJ1c2VyV2FudHNDb250cm9sIiwiZ2V0SG9va0FyZ3VtZW50c0xlbmd0aCIsInNob3ciLCJwZW5kaW5nTm9kZSIsIl9wZW5kaW5nIiwiaXNWYWxpZER1cmF0aW9uIiwibGVhdmUiLCJiZWZvcmVMZWF2ZSIsImFmdGVyTGVhdmUiLCJsZWF2ZUNhbmNlbGxlZCIsImRlbGF5TGVhdmUiLCJleHBsaWNpdExlYXZlRHVyYXRpb24iLCJwZXJmb3JtTGVhdmUiLCJpbnZva2VyRm5zIiwiX2VudGVyIiwicGxhdGZvcm1Nb2R1bGVzIiwidm1vZGVsIiwidHJpZ2dlciIsImRpcmVjdGl2ZSIsImJpbmRpbmciLCJfdk9wdGlvbnMiLCJzZXRTZWxlY3RlZCIsImdldFZhbHVlIiwib25Db21wb3NpdGlvblN0YXJ0Iiwib25Db21wb3NpdGlvbkVuZCIsInByZXZPcHRpb25zIiwiY3VyT3B0aW9ucyIsIm8iLCJuZWVkUmVzZXQiLCJoYXNOb01hdGNoaW5nT3B0aW9uIiwiYWN0dWFsbHlTZXRTZWxlY3RlZCIsImlzTXVsdGlwbGUiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImxvY2F0ZU5vZGUiLCJ0cmFuc2l0aW9uJCQxIiwib3JpZ2luYWxEaXNwbGF5IiwiX192T3JpZ2luYWxEaXNwbGF5IiwiZGlzcGxheSIsInVuYmluZCIsInBsYXRmb3JtRGlyZWN0aXZlcyIsInRyYW5zaXRpb25Qcm9wcyIsIm1vZGUiLCJnZXRSZWFsQ2hpbGQiLCJjb21wT3B0aW9ucyIsImV4dHJhY3RUcmFuc2l0aW9uRGF0YSIsInBsYWNlaG9sZGVyIiwiaCIsInJhd0NoaWxkIiwiaGFzUGFyZW50VHJhbnNpdGlvbiIsImlzU2FtZUNoaWxkIiwib2xkQ2hpbGQiLCJpc05vdFRleHROb2RlIiwiaXNWU2hvd0RpcmVjdGl2ZSIsIlRyYW5zaXRpb24iLCJfbGVhdmluZyIsIm9sZFJhd0NoaWxkIiwiZGVsYXllZExlYXZlIiwibW92ZUNsYXNzIiwiVHJhbnNpdGlvbkdyb3VwIiwiYmVmb3JlTW91bnQiLCJrZXB0IiwicHJldkNoaWxkcmVuIiwicmF3Q2hpbGRyZW4iLCJ0cmFuc2l0aW9uRGF0YSIsInJlbW92ZWQiLCJjJDEiLCJwb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVkIiwiaGFzTW92ZSIsImNhbGxQZW5kaW5nQ2JzIiwicmVjb3JkUG9zaXRpb24iLCJhcHBseVRyYW5zbGF0aW9uIiwiX3JlZmxvdyIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJtb3ZlZCIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIl9tb3ZlQ2IiLCJwcm9wZXJ0eU5hbWUiLCJfaGFzTW92ZSIsImNsb25lTm9kZSIsIm5ld1BvcyIsIm9sZFBvcyIsImR4IiwibGVmdCIsImR5IiwidG9wIiwicGxhdGZvcm1Db21wb25lbnRzIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0EsY0FEQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQU5BLEc7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBLElBQUlBLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxDQUFsQixDLENBRUE7QUFDQTs7QUFDQSxTQUFTQyxPQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUNuQixTQUFPQSxDQUFDLEtBQUtDLFNBQU4sSUFBbUJELENBQUMsS0FBSyxJQUFoQztBQUNEOztBQUVELFNBQVNFLEtBQVQsQ0FBZ0JGLENBQWhCLEVBQW1CO0FBQ2pCLFNBQU9BLENBQUMsS0FBS0MsU0FBTixJQUFtQkQsQ0FBQyxLQUFLLElBQWhDO0FBQ0Q7O0FBRUQsU0FBU0csTUFBVCxDQUFpQkgsQ0FBakIsRUFBb0I7QUFDbEIsU0FBT0EsQ0FBQyxLQUFLLElBQWI7QUFDRDs7QUFFRCxTQUFTSSxPQUFULENBQWtCSixDQUFsQixFQUFxQjtBQUNuQixTQUFPQSxDQUFDLEtBQUssS0FBYjtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTSyxXQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMzQixTQUNFLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFDQSxPQUFPQSxLQUFQLEtBQWlCLFFBRGpCLElBRUE7QUFDQSxTQUFPQSxLQUFQLEtBQWlCLFFBSGpCLElBSUEsT0FBT0EsS0FBUCxLQUFpQixTQUxuQjtBQU9EO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0MsUUFBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFDdEIsU0FBT0EsR0FBRyxLQUFLLElBQVIsSUFBZ0IsT0FBT0EsR0FBUCxLQUFlLFFBQXRDO0FBQ0Q7QUFFRDtBQUNB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QUFJQSx3Q0FBSixDQUFRO0FBQ0puVyxJQUFFLEVBQUMsTUFEQztBQUVKaUksUUFBTSxFQUFDOHlCLENBQUMsSUFBSUEsQ0FBQyxDQUFDNkMsNkNBQUQ7QUFGVCxDQUFSLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICAgIDxkaXY+e3ttc2d9fTwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTonYXBwcycsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1zZzogMTIzMTIzXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPiIsIi8qIVxuICogVnVlLmpzIHYyLjYuMTJcbiAqIChjKSAyMDE0LTIwMjAgRXZhbiBZb3VcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuLyogICovXG5cbnZhciBlbXB0eU9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuXG4vLyBUaGVzZSBoZWxwZXJzIHByb2R1Y2UgYmV0dGVyIFZNIGNvZGUgaW4gSlMgZW5naW5lcyBkdWUgdG8gdGhlaXJcbi8vIGV4cGxpY2l0bmVzcyBhbmQgZnVuY3Rpb24gaW5saW5pbmcuXG5mdW5jdGlvbiBpc1VuZGVmICh2KSB7XG4gIHJldHVybiB2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0RlZiAodikge1xuICByZXR1cm4gdiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNUcnVlICh2KSB7XG4gIHJldHVybiB2ID09PSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzRmFsc2UgKHYpIHtcbiAgcmV0dXJuIHYgPT09IGZhbHNlXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgcHJpbWl0aXZlLlxuICovXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSAodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fFxuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcgfHxcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xuICApXG59XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIEdldCB0aGUgcmF3IHR5cGUgc3RyaW5nIG9mIGEgdmFsdWUsIGUuZy4sIFtvYmplY3QgT2JqZWN0XS5cbiAqL1xudmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHRvUmF3VHlwZSAodmFsdWUpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSlcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nXG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwICh2KSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2KSA9PT0gJ1tvYmplY3QgUmVnRXhwXSdcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWwgaXMgYSB2YWxpZCBhcnJheSBpbmRleC5cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEFycmF5SW5kZXggKHZhbCkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbCkpO1xuICByZXR1cm4gbiA+PSAwICYmIE1hdGguZmxvb3IobikgPT09IG4gJiYgaXNGaW5pdGUodmFsKVxufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UgKHZhbCkge1xuICByZXR1cm4gKFxuICAgIGlzRGVmKHZhbCkgJiZcbiAgICB0eXBlb2YgdmFsLnRoZW4gPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgdmFsLmNhdGNoID09PSAnZnVuY3Rpb24nXG4gIClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgdmFsdWUgdG8gYSBzdHJpbmcgdGhhdCBpcyBhY3R1YWxseSByZW5kZXJlZC5cbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcgKHZhbCkge1xuICByZXR1cm4gdmFsID09IG51bGxcbiAgICA/ICcnXG4gICAgOiBBcnJheS5pc0FycmF5KHZhbCkgfHwgKGlzUGxhaW5PYmplY3QodmFsKSAmJiB2YWwudG9TdHJpbmcgPT09IF90b1N0cmluZylcbiAgICAgID8gSlNPTi5zdHJpbmdpZnkodmFsLCBudWxsLCAyKVxuICAgICAgOiBTdHJpbmcodmFsKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gaW5wdXQgdmFsdWUgdG8gYSBudW1iZXIgZm9yIHBlcnNpc3RlbmNlLlxuICogSWYgdGhlIGNvbnZlcnNpb24gZmFpbHMsIHJldHVybiBvcmlnaW5hbCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyICh2YWwpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbCk7XG4gIHJldHVybiBpc05hTihuKSA/IHZhbCA6IG5cbn1cblxuLyoqXG4gKiBNYWtlIGEgbWFwIGFuZCByZXR1cm4gYSBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYSBrZXlcbiAqIGlzIGluIHRoYXQgbWFwLlxuICovXG5mdW5jdGlvbiBtYWtlTWFwIChcbiAgc3RyLFxuICBleHBlY3RzTG93ZXJDYXNlXG4pIHtcbiAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBsaXN0ID0gc3RyLnNwbGl0KCcsJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIG1hcFtsaXN0W2ldXSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGV4cGVjdHNMb3dlckNhc2VcbiAgICA/IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIG1hcFt2YWwudG9Mb3dlckNhc2UoKV07IH1cbiAgICA6IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIG1hcFt2YWxdOyB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0YWcgaXMgYSBidWlsdC1pbiB0YWcuXG4gKi9cbnZhciBpc0J1aWx0SW5UYWcgPSBtYWtlTWFwKCdzbG90LGNvbXBvbmVudCcsIHRydWUpO1xuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZS5cbiAqL1xudmFyIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUgPSBtYWtlTWFwKCdrZXkscmVmLHNsb3Qsc2xvdC1zY29wZSxpcycpO1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZSAoYXJyLCBpdGVtKSB7XG4gIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYW4gb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBoYXNPd24gKG9iaiwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gKGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICB2YXIgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxpbWl0ZWQgc3RyaW5nLlxuICovXG52YXIgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcbnZhciBjYW1lbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCBmdW5jdGlvbiAoXywgYykgeyByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnOyB9KVxufSk7XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSBhIHN0cmluZy5cbiAqL1xudmFyIGNhcGl0YWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG59KTtcblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICovXG52YXIgaHlwaGVuYXRlUkUgPSAvXFxCKFtBLVpdKS9nO1xudmFyIGh5cGhlbmF0ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShoeXBoZW5hdGVSRSwgJy0kMScpLnRvTG93ZXJDYXNlKClcbn0pO1xuXG4vKipcbiAqIFNpbXBsZSBiaW5kIHBvbHlmaWxsIGZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3Qgc3VwcG9ydCBpdCxcbiAqIGUuZy4sIFBoYW50b21KUyAxLnguIFRlY2huaWNhbGx5LCB3ZSBkb24ndCBuZWVkIHRoaXMgYW55bW9yZVxuICogc2luY2UgbmF0aXZlIGJpbmQgaXMgbm93IHBlcmZvcm1hbnQgZW5vdWdoIGluIG1vc3QgYnJvd3NlcnMuXG4gKiBCdXQgcmVtb3ZpbmcgaXQgd291bGQgbWVhbiBicmVha2luZyBjb2RlIHRoYXQgd2FzIGFibGUgdG8gcnVuIGluXG4gKiBQaGFudG9tSlMgMS54LCBzbyB0aGlzIG11c3QgYmUga2VwdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS5cbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gcG9seWZpbGxCaW5kIChmbiwgY3R4KSB7XG4gIGZ1bmN0aW9uIGJvdW5kRm4gKGEpIHtcbiAgICB2YXIgbCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cblxuICBib3VuZEZuLl9sZW5ndGggPSBmbi5sZW5ndGg7XG4gIHJldHVybiBib3VuZEZuXG59XG5cbmZ1bmN0aW9uIG5hdGl2ZUJpbmQgKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZuLmJpbmQoY3R4KVxufVxuXG52YXIgYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4gID8gbmF0aXZlQmluZFxuICA6IHBvbHlmaWxsQmluZDtcblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqL1xuZnVuY3Rpb24gdG9BcnJheSAobGlzdCwgc3RhcnQpIHtcbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICB2YXIgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnQ7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZXh0ZW5kICh0bywgX2Zyb20pIHtcbiAgZm9yICh2YXIga2V5IGluIF9mcm9tKSB7XG4gICAgdG9ba2V5XSA9IF9mcm9tW2tleV07XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZnVuY3Rpb24gdG9PYmplY3QgKGFycikge1xuICB2YXIgcmVzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycltpXSkge1xuICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFBlcmZvcm0gbm8gb3BlcmF0aW9uLlxuICogU3R1YmJpbmcgYXJncyB0byBtYWtlIEZsb3cgaGFwcHkgd2l0aG91dCBsZWF2aW5nIHVzZWxlc3MgdHJhbnNwaWxlZCBjb2RlXG4gKiB3aXRoIC4uLnJlc3QgKGh0dHBzOi8vZmxvdy5vcmcvYmxvZy8yMDE3LzA1LzA3L1N0cmljdC1GdW5jdGlvbi1DYWxsLUFyaXR5LykuXG4gKi9cbmZ1bmN0aW9uIG5vb3AgKGEsIGIsIGMpIHt9XG5cbi8qKlxuICogQWx3YXlzIHJldHVybiBmYWxzZS5cbiAqL1xudmFyIG5vID0gZnVuY3Rpb24gKGEsIGIsIGMpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogUmV0dXJuIHRoZSBzYW1lIHZhbHVlLlxuICovXG52YXIgaWRlbnRpdHkgPSBmdW5jdGlvbiAoXykgeyByZXR1cm4gXzsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gdmFsdWVzIGFyZSBsb29zZWx5IGVxdWFsIC0gdGhhdCBpcyxcbiAqIGlmIHRoZXkgYXJlIHBsYWluIG9iamVjdHMsIGRvIHRoZXkgaGF2ZSB0aGUgc2FtZSBzaGFwZT9cbiAqL1xuZnVuY3Rpb24gbG9vc2VFcXVhbCAoYSwgYikge1xuICBpZiAoYSA9PT0gYikgeyByZXR1cm4gdHJ1ZSB9XG4gIHZhciBpc09iamVjdEEgPSBpc09iamVjdChhKTtcbiAgdmFyIGlzT2JqZWN0QiA9IGlzT2JqZWN0KGIpO1xuICBpZiAoaXNPYmplY3RBICYmIGlzT2JqZWN0Qikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgaXNBcnJheUEgPSBBcnJheS5pc0FycmF5KGEpO1xuICAgICAgdmFyIGlzQXJyYXlCID0gQXJyYXkuaXNBcnJheShiKTtcbiAgICAgIGlmIChpc0FycmF5QSAmJiBpc0FycmF5Qikge1xuICAgICAgICByZXR1cm4gYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChlLCBiW2ldKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpXG4gICAgICB9IGVsc2UgaWYgKCFpc0FycmF5QSAmJiAhaXNBcnJheUIpIHtcbiAgICAgICAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG4gICAgICAgIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuICAgICAgICByZXR1cm4ga2V5c0EubGVuZ3RoID09PSBrZXlzQi5sZW5ndGggJiYga2V5c0EuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBsb29zZUVxdWFsKGFba2V5XSwgYltrZXldKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSBlbHNlIGlmICghaXNPYmplY3RBICYmICFpc09iamVjdEIpIHtcbiAgICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgZmlyc3QgaW5kZXggYXQgd2hpY2ggYSBsb29zZWx5IGVxdWFsIHZhbHVlIGNhbiBiZVxuICogZm91bmQgaW4gdGhlIGFycmF5IChpZiB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdCwgdGhlIGFycmF5IG11c3RcbiAqIGNvbnRhaW4gYW4gb2JqZWN0IG9mIHRoZSBzYW1lIHNoYXBlKSwgb3IgLTEgaWYgaXQgaXMgbm90IHByZXNlbnQuXG4gKi9cbmZ1bmN0aW9uIGxvb3NlSW5kZXhPZiAoYXJyLCB2YWwpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobG9vc2VFcXVhbChhcnJbaV0sIHZhbCkpIHsgcmV0dXJuIGkgfVxuICB9XG4gIHJldHVybiAtMVxufVxuXG4vKipcbiAqIEVuc3VyZSBhIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmx5IG9uY2UuXG4gKi9cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBTU1JfQVRUUiA9ICdkYXRhLXNlcnZlci1yZW5kZXJlZCc7XG5cbnZhciBBU1NFVF9UWVBFUyA9IFtcbiAgJ2NvbXBvbmVudCcsXG4gICdkaXJlY3RpdmUnLFxuICAnZmlsdGVyJ1xuXTtcblxudmFyIExJRkVDWUNMRV9IT09LUyA9IFtcbiAgJ2JlZm9yZUNyZWF0ZScsXG4gICdjcmVhdGVkJyxcbiAgJ2JlZm9yZU1vdW50JyxcbiAgJ21vdW50ZWQnLFxuICAnYmVmb3JlVXBkYXRlJyxcbiAgJ3VwZGF0ZWQnLFxuICAnYmVmb3JlRGVzdHJveScsXG4gICdkZXN0cm95ZWQnLFxuICAnYWN0aXZhdGVkJyxcbiAgJ2RlYWN0aXZhdGVkJyxcbiAgJ2Vycm9yQ2FwdHVyZWQnLFxuICAnc2VydmVyUHJlZmV0Y2gnXG5dO1xuXG4vKiAgKi9cblxuXG5cbnZhciBjb25maWcgPSAoe1xuICAvKipcbiAgICogT3B0aW9uIG1lcmdlIHN0cmF0ZWdpZXMgKHVzZWQgaW4gY29yZS91dGlsL29wdGlvbnMpXG4gICAqL1xuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgb3B0aW9uTWVyZ2VTdHJhdGVnaWVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHN1cHByZXNzIHdhcm5pbmdzLlxuICAgKi9cbiAgc2lsZW50OiBmYWxzZSxcblxuICAvKipcbiAgICogU2hvdyBwcm9kdWN0aW9uIG1vZGUgdGlwIG1lc3NhZ2Ugb24gYm9vdD9cbiAgICovXG4gIHByb2R1Y3Rpb25UaXA6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIGRldnRvb2xzXG4gICAqL1xuICBkZXZ0b29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byByZWNvcmQgcGVyZlxuICAgKi9cbiAgcGVyZm9ybWFuY2U6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBFcnJvciBoYW5kbGVyIGZvciB3YXRjaGVyIGVycm9yc1xuICAgKi9cbiAgZXJyb3JIYW5kbGVyOiBudWxsLFxuXG4gIC8qKlxuICAgKiBXYXJuIGhhbmRsZXIgZm9yIHdhdGNoZXIgd2FybnNcbiAgICovXG4gIHdhcm5IYW5kbGVyOiBudWxsLFxuXG4gIC8qKlxuICAgKiBJZ25vcmUgY2VydGFpbiBjdXN0b20gZWxlbWVudHNcbiAgICovXG4gIGlnbm9yZWRFbGVtZW50czogW10sXG5cbiAgLyoqXG4gICAqIEN1c3RvbSB1c2VyIGtleSBhbGlhc2VzIGZvciB2LW9uXG4gICAqL1xuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAga2V5Q29kZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIHJlc2VydmVkIHNvIHRoYXQgaXQgY2Fubm90IGJlIHJlZ2lzdGVyZWQgYXMgYVxuICAgKiBjb21wb25lbnQuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkVGFnOiBubyxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIHJlc2VydmVkIHNvIHRoYXQgaXQgY2Fubm90IGJlIHVzZWQgYXMgYSBjb21wb25lbnRcbiAgICogcHJvcC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICovXG4gIGlzUmVzZXJ2ZWRBdHRyOiBubyxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgYW4gdW5rbm93biBlbGVtZW50LlxuICAgKiBQbGF0Zm9ybS1kZXBlbmRlbnQuXG4gICAqL1xuICBpc1Vua25vd25FbGVtZW50OiBubyxcblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lc3BhY2Ugb2YgYW4gZWxlbWVudFxuICAgKi9cbiAgZ2V0VGFnTmFtZXNwYWNlOiBub29wLFxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgcmVhbCB0YWcgbmFtZSBmb3IgdGhlIHNwZWNpZmljIHBsYXRmb3JtLlxuICAgKi9cbiAgcGFyc2VQbGF0Zm9ybVRhZ05hbWU6IGlkZW50aXR5LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgbXVzdCBiZSBib3VuZCB1c2luZyBwcm9wZXJ0eSwgZS5nLiB2YWx1ZVxuICAgKiBQbGF0Zm9ybS1kZXBlbmRlbnQuXG4gICAqL1xuICBtdXN0VXNlUHJvcDogbm8sXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdXBkYXRlcyBhc3luY2hyb25vdXNseS4gSW50ZW5kZWQgdG8gYmUgdXNlZCBieSBWdWUgVGVzdCBVdGlsc1xuICAgKiBUaGlzIHdpbGwgc2lnbmlmaWNhbnRseSByZWR1Y2UgcGVyZm9ybWFuY2UgaWYgc2V0IHRvIGZhbHNlLlxuICAgKi9cbiAgYXN5bmM6IHRydWUsXG5cbiAgLyoqXG4gICAqIEV4cG9zZWQgZm9yIGxlZ2FjeSByZWFzb25zXG4gICAqL1xuICBfbGlmZWN5Y2xlSG9va3M6IExJRkVDWUNMRV9IT09LU1xufSk7XG5cbi8qICAqL1xuXG4vKipcbiAqIHVuaWNvZGUgbGV0dGVycyB1c2VkIGZvciBwYXJzaW5nIGh0bWwgdGFncywgY29tcG9uZW50IG5hbWVzIGFuZCBwcm9wZXJ0eSBwYXRocy5cbiAqIHVzaW5nIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNTMvc2VtYW50aWNzLXNjcmlwdGluZy5odG1sI3BvdGVudGlhbGN1c3RvbWVsZW1lbnRuYW1lXG4gKiBza2lwcGluZyBcXHUxMDAwMC1cXHVFRkZGRiBkdWUgdG8gaXQgZnJlZXppbmcgdXAgUGhhbnRvbUpTXG4gKi9cbnZhciB1bmljb2RlUmVnRXhwID0gL2EtekEtWlxcdTAwQjdcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDNGLVxcdTIwNDBcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkQvO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICovXG5mdW5jdGlvbiBpc1Jlc2VydmVkIChzdHIpIHtcbiAgdmFyIGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMCk7XG4gIHJldHVybiBjID09PSAweDI0IHx8IGMgPT09IDB4NUZcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBQYXJzZSBzaW1wbGUgcGF0aC5cbiAqL1xudmFyIGJhaWxSRSA9IG5ldyBSZWdFeHAoKFwiW15cIiArICh1bmljb2RlUmVnRXhwLnNvdXJjZSkgKyBcIi4kX1xcXFxkXVwiKSk7XG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgaWYgKGJhaWxSRS50ZXN0KHBhdGgpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLicpO1xuICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghb2JqKSB7IHJldHVybiB9XG4gICAgICBvYmogPSBvYmpbc2VnbWVudHNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gb2JqXG4gIH1cbn1cblxuLyogICovXG5cbi8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xudmFyIGhhc1Byb3RvID0gJ19fcHJvdG9fXycgaW4ge307XG5cbi8vIEJyb3dzZXIgZW52aXJvbm1lbnQgc25pZmZpbmdcbnZhciBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbnZhciBpbldlZXggPSB0eXBlb2YgV1hFbnZpcm9ubWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgISFXWEVudmlyb25tZW50LnBsYXRmb3JtO1xudmFyIHdlZXhQbGF0Zm9ybSA9IGluV2VleCAmJiBXWEVudmlyb25tZW50LnBsYXRmb3JtLnRvTG93ZXJDYXNlKCk7XG52YXIgVUEgPSBpbkJyb3dzZXIgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbnZhciBpc0lFID0gVUEgJiYgL21zaWV8dHJpZGVudC8udGVzdChVQSk7XG52YXIgaXNJRTkgPSBVQSAmJiBVQS5pbmRleE9mKCdtc2llIDkuMCcpID4gMDtcbnZhciBpc0VkZ2UgPSBVQSAmJiBVQS5pbmRleE9mKCdlZGdlLycpID4gMDtcbnZhciBpc0FuZHJvaWQgPSAoVUEgJiYgVUEuaW5kZXhPZignYW5kcm9pZCcpID4gMCkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKTtcbnZhciBpc0lPUyA9IChVQSAmJiAvaXBob25lfGlwYWR8aXBvZHxpb3MvLnRlc3QoVUEpKSB8fCAod2VleFBsYXRmb3JtID09PSAnaW9zJyk7XG52YXIgaXNDaHJvbWUgPSBVQSAmJiAvY2hyb21lXFwvXFxkKy8udGVzdChVQSkgJiYgIWlzRWRnZTtcbnZhciBpc1BoYW50b21KUyA9IFVBICYmIC9waGFudG9tanMvLnRlc3QoVUEpO1xudmFyIGlzRkYgPSBVQSAmJiBVQS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pO1xuXG4vLyBGaXJlZm94IGhhcyBhIFwid2F0Y2hcIiBmdW5jdGlvbiBvbiBPYmplY3QucHJvdG90eXBlLi4uXG52YXIgbmF0aXZlV2F0Y2ggPSAoe30pLndhdGNoO1xuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5pZiAoaW5Ccm93c2VyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG9wdHMgPSB7fTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3B0cywgJ3Bhc3NpdmUnLCAoe1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4NVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0LXBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuLy8gdGhpcyBuZWVkcyB0byBiZSBsYXp5LWV2YWxlZCBiZWNhdXNlIHZ1ZSBtYXkgYmUgcmVxdWlyZWQgYmVmb3JlXG4vLyB2dWUtc2VydmVyLXJlbmRlcmVyIGNhbiBzZXQgVlVFX0VOVlxudmFyIF9pc1NlcnZlcjtcbnZhciBpc1NlcnZlclJlbmRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKF9pc1NlcnZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFpbkJyb3dzZXIgJiYgIWluV2VleCAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZGV0ZWN0IHByZXNlbmNlIG9mIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgYW5kIGF2b2lkXG4gICAgICAvLyBXZWJwYWNrIHNoaW1taW5nIHRoZSBwcm9jZXNzXG4gICAgICBfaXNTZXJ2ZXIgPSBnbG9iYWxbJ3Byb2Nlc3MnXSAmJiBnbG9iYWxbJ3Byb2Nlc3MnXS5lbnYuVlVFX0VOViA9PT0gJ3NlcnZlcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pc1NlcnZlciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gX2lzU2VydmVyXG59O1xuXG4vLyBkZXRlY3QgZGV2dG9vbHNcbnZhciBkZXZ0b29scyA9IGluQnJvd3NlciAmJiB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGlzTmF0aXZlIChDdG9yKSB7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoQ3Rvci50b1N0cmluZygpKVxufVxuXG52YXIgaGFzU3ltYm9sID1cbiAgdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU3ltYm9sKSAmJlxuICB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUmVmbGVjdC5vd25LZXlzKTtcblxudmFyIF9TZXQ7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi8gLy8gJGZsb3ctZGlzYWJsZS1saW5lXG5pZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU2V0KSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldDtcbn0gZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNldCAoKSB7XG4gICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFtrZXldID09PSB0cnVlXG4gICAgfTtcbiAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoa2V5KSB7XG4gICAgICB0aGlzLnNldFtrZXldID0gdHJ1ZTtcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhciAoKSB7XG4gICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTZXQ7XG4gIH0oKSk7XG59XG5cbi8qICAqL1xuXG52YXIgd2FybiA9IG5vb3A7XG52YXIgdGlwID0gbm9vcDtcbnZhciBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gKG5vb3ApOyAvLyB3b3JrIGFyb3VuZCBmbG93IGNoZWNrXG52YXIgZm9ybWF0Q29tcG9uZW50TmFtZSA9IChub29wKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGhhc0NvbnNvbGUgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBjbGFzc2lmeVJFID0gLyg/Ol58Wy1fXSkoXFx3KS9nO1xuICB2YXIgY2xhc3NpZnkgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHJcbiAgICAucmVwbGFjZShjbGFzc2lmeVJFLCBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50b1VwcGVyQ2FzZSgpOyB9KVxuICAgIC5yZXBsYWNlKC9bLV9dL2csICcnKTsgfTtcblxuICB3YXJuID0gZnVuY3Rpb24gKG1zZywgdm0pIHtcbiAgICB2YXIgdHJhY2UgPSB2bSA/IGdlbmVyYXRlQ29tcG9uZW50VHJhY2Uodm0pIDogJyc7XG5cbiAgICBpZiAoY29uZmlnLndhcm5IYW5kbGVyKSB7XG4gICAgICBjb25maWcud2FybkhhbmRsZXIuY2FsbChudWxsLCBtc2csIHZtLCB0cmFjZSk7XG4gICAgfSBlbHNlIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW1Z1ZSB3YXJuXTogXCIgKyBtc2cgKyB0cmFjZSkpO1xuICAgIH1cbiAgfTtcblxuICB0aXAgPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltWdWUgdGlwXTogXCIgKyBtc2cgKyAoXG4gICAgICAgIHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJ1xuICAgICAgKSk7XG4gICAgfVxuICB9O1xuXG4gIGZvcm1hdENvbXBvbmVudE5hbWUgPSBmdW5jdGlvbiAodm0sIGluY2x1ZGVGaWxlKSB7XG4gICAgaWYgKHZtLiRyb290ID09PSB2bSkge1xuICAgICAgcmV0dXJuICc8Um9vdD4nXG4gICAgfVxuICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHZtID09PSAnZnVuY3Rpb24nICYmIHZtLmNpZCAhPSBudWxsXG4gICAgICA/IHZtLm9wdGlvbnNcbiAgICAgIDogdm0uX2lzVnVlXG4gICAgICAgID8gdm0uJG9wdGlvbnMgfHwgdm0uY29uc3RydWN0b3Iub3B0aW9uc1xuICAgICAgICA6IHZtO1xuICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IG9wdGlvbnMuX2NvbXBvbmVudFRhZztcbiAgICB2YXIgZmlsZSA9IG9wdGlvbnMuX19maWxlO1xuICAgIGlmICghbmFtZSAmJiBmaWxlKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBmaWxlLm1hdGNoKC8oW14vXFxcXF0rKVxcLnZ1ZSQvKTtcbiAgICAgIG5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKG5hbWUgPyAoXCI8XCIgKyAoY2xhc3NpZnkobmFtZSkpICsgXCI+XCIpIDogXCI8QW5vbnltb3VzPlwiKSArXG4gICAgICAoZmlsZSAmJiBpbmNsdWRlRmlsZSAhPT0gZmFsc2UgPyAoXCIgYXQgXCIgKyBmaWxlKSA6ICcnKVxuICAgIClcbiAgfTtcblxuICB2YXIgcmVwZWF0ID0gZnVuY3Rpb24gKHN0ciwgbikge1xuICAgIHZhciByZXMgPSAnJztcbiAgICB3aGlsZSAobikge1xuICAgICAgaWYgKG4gJSAyID09PSAxKSB7IHJlcyArPSBzdHI7IH1cbiAgICAgIGlmIChuID4gMSkgeyBzdHIgKz0gc3RyOyB9XG4gICAgICBuID4+PSAxO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH07XG5cbiAgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IGZ1bmN0aW9uICh2bSkge1xuICAgIGlmICh2bS5faXNWdWUgJiYgdm0uJHBhcmVudCkge1xuICAgICAgdmFyIHRyZWUgPSBbXTtcbiAgICAgIHZhciBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgd2hpbGUgKHZtKSB7XG4gICAgICAgIGlmICh0cmVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgbGFzdCA9IHRyZWVbdHJlZS5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAobGFzdC5jb25zdHJ1Y3RvciA9PT0gdm0uY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSsrO1xuICAgICAgICAgICAgdm0gPSB2bS4kcGFyZW50O1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA+IDApIHtcbiAgICAgICAgICAgIHRyZWVbdHJlZS5sZW5ndGggLSAxXSA9IFtsYXN0LCBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2VdO1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHJlZS5wdXNoKHZtKTtcbiAgICAgICAgdm0gPSB2bS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuICdcXG5cXG5mb3VuZCBpblxcblxcbicgKyB0cmVlXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHZtLCBpKSB7IHJldHVybiAoXCJcIiArIChpID09PSAwID8gJy0tLT4gJyA6IHJlcGVhdCgnICcsIDUgKyBpICogMikpICsgKEFycmF5LmlzQXJyYXkodm0pXG4gICAgICAgICAgICA/ICgoZm9ybWF0Q29tcG9uZW50TmFtZSh2bVswXSkpICsgXCIuLi4gKFwiICsgKHZtWzFdKSArIFwiIHJlY3Vyc2l2ZSBjYWxscylcIilcbiAgICAgICAgICAgIDogZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpKTsgfSlcbiAgICAgICAgLmpvaW4oJ1xcbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXCJcXG5cXG4oZm91bmQgaW4gXCIgKyAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIpXCIpXG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHVpZCA9IDA7XG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICovXG52YXIgRGVwID0gZnVuY3Rpb24gRGVwICgpIHtcbiAgdGhpcy5pZCA9IHVpZCsrO1xuICB0aGlzLnN1YnMgPSBbXTtcbn07XG5cbkRlcC5wcm90b3R5cGUuYWRkU3ViID0gZnVuY3Rpb24gYWRkU3ViIChzdWIpIHtcbiAgdGhpcy5zdWJzLnB1c2goc3ViKTtcbn07XG5cbkRlcC5wcm90b3R5cGUucmVtb3ZlU3ViID0gZnVuY3Rpb24gcmVtb3ZlU3ViIChzdWIpIHtcbiAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKTtcbn07XG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgaWYgKERlcC50YXJnZXQpIHtcbiAgICBEZXAudGFyZ2V0LmFkZERlcCh0aGlzKTtcbiAgfVxufTtcblxuRGVwLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkgKCkge1xuICAvLyBzdGFiaWxpemUgdGhlIHN1YnNjcmliZXIgbGlzdCBmaXJzdFxuICB2YXIgc3VicyA9IHRoaXMuc3Vicy5zbGljZSgpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZmlnLmFzeW5jKSB7XG4gICAgLy8gc3VicyBhcmVuJ3Qgc29ydGVkIGluIHNjaGVkdWxlciBpZiBub3QgcnVubmluZyBhc3luY1xuICAgIC8vIHdlIG5lZWQgdG8gc29ydCB0aGVtIG5vdyB0byBtYWtlIHN1cmUgdGhleSBmaXJlIGluIGNvcnJlY3RcbiAgICAvLyBvcmRlclxuICAgIHN1YnMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pZCAtIGIuaWQ7IH0pO1xuICB9XG4gIGZvciAodmFyIGkgPSAwLCBsID0gc3Vicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBzdWJzW2ldLnVwZGF0ZSgpO1xuICB9XG59O1xuXG4vLyBUaGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyBUaGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIG9ubHkgb25lIHdhdGNoZXJcbi8vIGNhbiBiZSBldmFsdWF0ZWQgYXQgYSB0aW1lLlxuRGVwLnRhcmdldCA9IG51bGw7XG52YXIgdGFyZ2V0U3RhY2sgPSBbXTtcblxuZnVuY3Rpb24gcHVzaFRhcmdldCAodGFyZ2V0KSB7XG4gIHRhcmdldFN0YWNrLnB1c2godGFyZ2V0KTtcbiAgRGVwLnRhcmdldCA9IHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcG9wVGFyZ2V0ICgpIHtcbiAgdGFyZ2V0U3RhY2sucG9wKCk7XG4gIERlcC50YXJnZXQgPSB0YXJnZXRTdGFja1t0YXJnZXRTdGFjay5sZW5ndGggLSAxXTtcbn1cblxuLyogICovXG5cbnZhciBWTm9kZSA9IGZ1bmN0aW9uIFZOb2RlIChcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgdGV4dCxcbiAgZWxtLFxuICBjb250ZXh0LFxuICBjb21wb25lbnRPcHRpb25zLFxuICBhc3luY0ZhY3Rvcnlcbikge1xuICB0aGlzLnRhZyA9IHRhZztcbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB0aGlzLnRleHQgPSB0ZXh0O1xuICB0aGlzLmVsbSA9IGVsbTtcbiAgdGhpcy5ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5mbkNvbnRleHQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuZm5PcHRpb25zID0gdW5kZWZpbmVkO1xuICB0aGlzLmZuU2NvcGVJZCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5rZXkgPSBkYXRhICYmIGRhdGEua2V5O1xuICB0aGlzLmNvbXBvbmVudE9wdGlvbnMgPSBjb21wb25lbnRPcHRpb25zO1xuICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5yYXcgPSBmYWxzZTtcbiAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICB0aGlzLmlzUm9vdEluc2VydCA9IHRydWU7XG4gIHRoaXMuaXNDb21tZW50ID0gZmFsc2U7XG4gIHRoaXMuaXNDbG9uZWQgPSBmYWxzZTtcbiAgdGhpcy5pc09uY2UgPSBmYWxzZTtcbiAgdGhpcy5hc3luY0ZhY3RvcnkgPSBhc3luY0ZhY3Rvcnk7XG4gIHRoaXMuYXN5bmNNZXRhID0gdW5kZWZpbmVkO1xuICB0aGlzLmlzQXN5bmNQbGFjZWhvbGRlciA9IGZhbHNlO1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgY2hpbGQ6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxuLy8gREVQUkVDQVRFRDogYWxpYXMgZm9yIGNvbXBvbmVudEluc3RhbmNlIGZvciBiYWNrd2FyZHMgY29tcGF0LlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnByb3RvdHlwZUFjY2Vzc29ycy5jaGlsZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmNvbXBvbmVudEluc3RhbmNlXG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVk5vZGUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxudmFyIGNyZWF0ZUVtcHR5Vk5vZGUgPSBmdW5jdGlvbiAodGV4dCkge1xuICBpZiAoIHRleHQgPT09IHZvaWQgMCApIHRleHQgPSAnJztcblxuICB2YXIgbm9kZSA9IG5ldyBWTm9kZSgpO1xuICBub2RlLnRleHQgPSB0ZXh0O1xuICBub2RlLmlzQ29tbWVudCA9IHRydWU7XG4gIHJldHVybiBub2RlXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0Vk5vZGUgKHZhbCkge1xuICByZXR1cm4gbmV3IFZOb2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFN0cmluZyh2YWwpKVxufVxuXG4vLyBvcHRpbWl6ZWQgc2hhbGxvdyBjbG9uZVxuLy8gdXNlZCBmb3Igc3RhdGljIG5vZGVzIGFuZCBzbG90IG5vZGVzIGJlY2F1c2UgdGhleSBtYXkgYmUgcmV1c2VkIGFjcm9zc1xuLy8gbXVsdGlwbGUgcmVuZGVycywgY2xvbmluZyB0aGVtIGF2b2lkcyBlcnJvcnMgd2hlbiBET00gbWFuaXB1bGF0aW9ucyByZWx5XG4vLyBvbiB0aGVpciBlbG0gcmVmZXJlbmNlLlxuZnVuY3Rpb24gY2xvbmVWTm9kZSAodm5vZGUpIHtcbiAgdmFyIGNsb25lZCA9IG5ldyBWTm9kZShcbiAgICB2bm9kZS50YWcsXG4gICAgdm5vZGUuZGF0YSxcbiAgICAvLyAjNzk3NVxuICAgIC8vIGNsb25lIGNoaWxkcmVuIGFycmF5IHRvIGF2b2lkIG11dGF0aW5nIG9yaWdpbmFsIGluIGNhc2Ugb2YgY2xvbmluZ1xuICAgIC8vIGEgY2hpbGQuXG4gICAgdm5vZGUuY2hpbGRyZW4gJiYgdm5vZGUuY2hpbGRyZW4uc2xpY2UoKSxcbiAgICB2bm9kZS50ZXh0LFxuICAgIHZub2RlLmVsbSxcbiAgICB2bm9kZS5jb250ZXh0LFxuICAgIHZub2RlLmNvbXBvbmVudE9wdGlvbnMsXG4gICAgdm5vZGUuYXN5bmNGYWN0b3J5XG4gICk7XG4gIGNsb25lZC5ucyA9IHZub2RlLm5zO1xuICBjbG9uZWQuaXNTdGF0aWMgPSB2bm9kZS5pc1N0YXRpYztcbiAgY2xvbmVkLmtleSA9IHZub2RlLmtleTtcbiAgY2xvbmVkLmlzQ29tbWVudCA9IHZub2RlLmlzQ29tbWVudDtcbiAgY2xvbmVkLmZuQ29udGV4dCA9IHZub2RlLmZuQ29udGV4dDtcbiAgY2xvbmVkLmZuT3B0aW9ucyA9IHZub2RlLmZuT3B0aW9ucztcbiAgY2xvbmVkLmZuU2NvcGVJZCA9IHZub2RlLmZuU2NvcGVJZDtcbiAgY2xvbmVkLmFzeW5jTWV0YSA9IHZub2RlLmFzeW5jTWV0YTtcbiAgY2xvbmVkLmlzQ2xvbmVkID0gdHJ1ZTtcbiAgcmV0dXJuIGNsb25lZFxufVxuXG4vKlxuICogbm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IHBsYXkgd2VsbCB3aXRoXG4gKiBkeW5hbWljYWxseSBhY2Nlc3NpbmcgbWV0aG9kcyBvbiBBcnJheSBwcm90b3R5cGVcbiAqL1xuXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbnZhciBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pO1xuXG52YXIgbWV0aG9kc1RvUGF0Y2ggPSBbXG4gICdwdXNoJyxcbiAgJ3BvcCcsXG4gICdzaGlmdCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZScsXG4gICdzb3J0JyxcbiAgJ3JldmVyc2UnXG5dO1xuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5tZXRob2RzVG9QYXRjaC5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gIHZhciBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXTtcbiAgZGVmKGFycmF5TWV0aG9kcywgbWV0aG9kLCBmdW5jdGlvbiBtdXRhdG9yICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICB2YXIgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgdmFyIG9iID0gdGhpcy5fX29iX187XG4gICAgdmFyIGluc2VydGVkO1xuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICBjYXNlICdwdXNoJzpcbiAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMik7XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChpbnNlcnRlZCkgeyBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpOyB9XG4gICAgLy8gbm90aWZ5IGNoYW5nZVxuICAgIG9iLmRlcC5ub3RpZnkoKTtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pO1xufSk7XG5cbi8qICAqL1xuXG52YXIgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKTtcblxuLyoqXG4gKiBJbiBzb21lIGNhc2VzIHdlIG1heSB3YW50IHRvIGRpc2FibGUgb2JzZXJ2YXRpb24gaW5zaWRlIGEgY29tcG9uZW50J3NcbiAqIHVwZGF0ZSBjb21wdXRhdGlvbi5cbiAqL1xudmFyIHNob3VsZE9ic2VydmUgPSB0cnVlO1xuXG5mdW5jdGlvbiB0b2dnbGVPYnNlcnZpbmcgKHZhbHVlKSB7XG4gIHNob3VsZE9ic2VydmUgPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBPYnNlcnZlciBjbGFzcyB0aGF0IGlzIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAqIG9iamVjdC4gT25jZSBhdHRhY2hlZCwgdGhlIG9ic2VydmVyIGNvbnZlcnRzIHRoZSB0YXJnZXRcbiAqIG9iamVjdCdzIHByb3BlcnR5IGtleXMgaW50byBnZXR0ZXIvc2V0dGVycyB0aGF0XG4gKiBjb2xsZWN0IGRlcGVuZGVuY2llcyBhbmQgZGlzcGF0Y2ggdXBkYXRlcy5cbiAqL1xudmFyIE9ic2VydmVyID0gZnVuY3Rpb24gT2JzZXJ2ZXIgKHZhbHVlKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgdGhpcy5kZXAgPSBuZXcgRGVwKCk7XG4gIHRoaXMudm1Db3VudCA9IDA7XG4gIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBpZiAoaGFzUHJvdG8pIHtcbiAgICAgIHByb3RvQXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29weUF1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcywgYXJyYXlLZXlzKTtcbiAgICB9XG4gICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2Fsayh2YWx1ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogV2FsayB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiB3YWxrIChvYmopIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMShvYmosIGtleXNbaV0pO1xuICB9XG59O1xuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gb2JzZXJ2ZUFycmF5IChpdGVtcykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9ic2VydmUoaXRlbXNbaV0pO1xuICB9XG59O1xuXG4vLyBoZWxwZXJzXG5cbi8qKlxuICogQXVnbWVudCBhIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICovXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQgKHRhcmdldCwgc3JjKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG4gIHRhcmdldC5fX3Byb3RvX18gPSBzcmM7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tcHJvdG8gKi9cbn1cblxuLyoqXG4gKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBjb3B5QXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG9ic2VydmUgKHZhbHVlLCBhc1Jvb3REYXRhKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb2I7XG4gIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgIG9iID0gdmFsdWUuX19vYl9fO1xuICB9IGVsc2UgaWYgKFxuICAgIHNob3VsZE9ic2VydmUgJiZcbiAgICAhaXNTZXJ2ZXJSZW5kZXJpbmcoKSAmJlxuICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkgJiZcbiAgICBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJlxuICAgICF2YWx1ZS5faXNWdWVcbiAgKSB7XG4gICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpO1xuICB9XG4gIGlmIChhc1Jvb3REYXRhICYmIG9iKSB7XG4gICAgb2Iudm1Db3VudCsrO1xuICB9XG4gIHJldHVybiBvYlxufVxuXG4vKipcbiAqIERlZmluZSBhIHJlYWN0aXZlIHByb3BlcnR5IG9uIGFuIE9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUkJDEgKFxuICBvYmosXG4gIGtleSxcbiAgdmFsLFxuICBjdXN0b21TZXR0ZXIsXG4gIHNoYWxsb3dcbikge1xuICB2YXIgZGVwID0gbmV3IERlcCgpO1xuXG4gIHZhciBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gIHZhciBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXQ7XG4gIHZhciBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG4gIGlmICgoIWdldHRlciB8fCBzZXR0ZXIpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICB2YWwgPSBvYmpba2V5XTtcbiAgfVxuXG4gIHZhciBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZSh2YWwpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlR2V0dGVyICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICBkZXAuZGVwZW5kKCk7XG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKCk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBkZXBlbmRBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUgfHwgKG5ld1ZhbCAhPT0gbmV3VmFsICYmIHZhbHVlICE9PSB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY3VzdG9tU2V0dGVyKSB7XG4gICAgICAgIGN1c3RvbVNldHRlcigpO1xuICAgICAgfVxuICAgICAgLy8gIzc5ODE6IGZvciBhY2Nlc3NvciBwcm9wZXJ0aWVzIHdpdGhvdXQgc2V0dGVyXG4gICAgICBpZiAoZ2V0dGVyICYmICFzZXR0ZXIpIHsgcmV0dXJuIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgfVxuICAgICAgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUobmV3VmFsKTtcbiAgICAgIGRlcC5ub3RpZnkoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqL1xuZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBzZXQgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5sZW5ndGggPSBNYXRoLm1heCh0YXJnZXQubGVuZ3RoLCBrZXkpO1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxLCB2YWwpO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBpZiAoa2V5IGluIHRhcmdldCAmJiAhKGtleSBpbiBPYmplY3QucHJvdG90eXBlKSkge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBhZGRpbmcgcmVhY3RpdmUgcHJvcGVydGllcyB0byBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICdhdCBydW50aW1lIC0gZGVjbGFyZSBpdCB1cGZyb250IGluIHRoZSBkYXRhIG9wdGlvbi4nXG4gICAgKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKCFvYikge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBkZWZpbmVSZWFjdGl2ZSQkMShvYi52YWx1ZSwga2V5LCB2YWwpO1xuICBvYi5kZXAubm90aWZ5KCk7XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICovXG5mdW5jdGlvbiBkZWwgKHRhcmdldCwga2V5KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgKGlzVW5kZWYodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZSh0YXJnZXQpKVxuICApIHtcbiAgICB3YXJuKChcIkNhbm5vdCBkZWxldGUgcmVhY3RpdmUgcHJvcGVydHkgb24gdW5kZWZpbmVkLCBudWxsLCBvciBwcmltaXRpdmUgdmFsdWU6IFwiICsgKCh0YXJnZXQpKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgaXNWYWxpZEFycmF5SW5kZXgoa2V5KSkge1xuICAgIHRhcmdldC5zcGxpY2Uoa2V5LCAxKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb2IgPSAodGFyZ2V0KS5fX29iX187XG4gIGlmICh0YXJnZXQuX2lzVnVlIHx8IChvYiAmJiBvYi52bUNvdW50KSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdBdm9pZCBkZWxldGluZyBwcm9wZXJ0aWVzIG9uIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJy0ganVzdCBzZXQgaXQgdG8gbnVsbC4nXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgdGFyZ2V0W2tleV07XG4gIGlmICghb2IpIHtcbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KCk7XG59XG5cbi8qKlxuICogQ29sbGVjdCBkZXBlbmRlbmNpZXMgb24gYXJyYXkgZWxlbWVudHMgd2hlbiB0aGUgYXJyYXkgaXMgdG91Y2hlZCwgc2luY2VcbiAqIHdlIGNhbm5vdCBpbnRlcmNlcHQgYXJyYXkgZWxlbWVudCBhY2Nlc3MgbGlrZSBwcm9wZXJ0eSBnZXR0ZXJzLlxuICovXG5mdW5jdGlvbiBkZXBlbmRBcnJheSAodmFsdWUpIHtcbiAgZm9yICh2YXIgZSA9ICh2b2lkIDApLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGUgPSB2YWx1ZVtpXTtcbiAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgZGVwZW5kQXJyYXkoZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIE9wdGlvbiBvdmVyd3JpdGluZyBzdHJhdGVnaWVzIGFyZSBmdW5jdGlvbnMgdGhhdCBoYW5kbGVcbiAqIGhvdyB0byBtZXJnZSBhIHBhcmVudCBvcHRpb24gdmFsdWUgYW5kIGEgY2hpbGQgb3B0aW9uXG4gKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cbiAqL1xudmFyIHN0cmF0cyA9IGNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG5cbi8qKlxuICogT3B0aW9ucyB3aXRoIHJlc3RyaWN0aW9uc1xuICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzdHJhdHMuZWwgPSBzdHJhdHMucHJvcHNEYXRhID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQsIHZtLCBrZXkpIHtcbiAgICBpZiAoIXZtKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBcIm9wdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgaW5zdGFuY2UgXCIgK1xuICAgICAgICAnY3JlYXRpb24gd2l0aCB0aGUgYG5ld2Aga2V5d29yZC4nXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFN0cmF0KHBhcmVudCwgY2hpbGQpXG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIHRoYXQgcmVjdXJzaXZlbHkgbWVyZ2VzIHR3byBkYXRhIG9iamVjdHMgdG9nZXRoZXIuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YSAodG8sIGZyb20pIHtcbiAgaWYgKCFmcm9tKSB7IHJldHVybiB0byB9XG4gIHZhciBrZXksIHRvVmFsLCBmcm9tVmFsO1xuXG4gIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgPyBSZWZsZWN0Lm93bktleXMoZnJvbSlcbiAgICA6IE9iamVjdC5rZXlzKGZyb20pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgLy8gaW4gY2FzZSB0aGUgb2JqZWN0IGlzIGFscmVhZHkgb2JzZXJ2ZWQuLi5cbiAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgdG9WYWwgPSB0b1trZXldO1xuICAgIGZyb21WYWwgPSBmcm9tW2tleV07XG4gICAgaWYgKCFoYXNPd24odG8sIGtleSkpIHtcbiAgICAgIHNldCh0bywga2V5LCBmcm9tVmFsKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdG9WYWwgIT09IGZyb21WYWwgJiZcbiAgICAgIGlzUGxhaW5PYmplY3QodG9WYWwpICYmXG4gICAgICBpc1BsYWluT2JqZWN0KGZyb21WYWwpXG4gICAgKSB7XG4gICAgICBtZXJnZURhdGEodG9WYWwsIGZyb21WYWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBEYXRhXG4gKi9cbmZ1bmN0aW9uIG1lcmdlRGF0YU9yRm4gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICAvLyBpbiBhIFZ1ZS5leHRlbmQgbWVyZ2UsIGJvdGggc2hvdWxkIGJlIGZ1bmN0aW9uc1xuICAgIGlmICghY2hpbGRWYWwpIHtcbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbFxuICAgIH1cbiAgICAvLyB3aGVuIHBhcmVudFZhbCAmIGNoaWxkVmFsIGFyZSBib3RoIHByZXNlbnQsXG4gICAgLy8gd2UgbmVlZCB0byByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXG4gICAgLy8gY2hlY2sgaWYgcGFyZW50VmFsIGlzIGEgZnVuY3Rpb24gaGVyZSBiZWNhdXNlXG4gICAgLy8gaXQgaGFzIHRvIGJlIGEgZnVuY3Rpb24gdG8gcGFzcyBwcmV2aW91cyBtZXJnZXMuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbiAoKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhKFxuICAgICAgICB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbicgPyBjaGlsZFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogY2hpbGRWYWwsXG4gICAgICAgIHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbicgPyBwYXJlbnRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IHBhcmVudFZhbFxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkSW5zdGFuY2VEYXRhRm4gKCkge1xuICAgICAgLy8gaW5zdGFuY2UgbWVyZ2VcbiAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBjaGlsZFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgOiBjaGlsZFZhbDtcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwYXJlbnRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogcGFyZW50VmFsO1xuICAgICAgaWYgKGluc3RhbmNlRGF0YSkge1xuICAgICAgICByZXR1cm4gbWVyZ2VEYXRhKGluc3RhbmNlRGF0YSwgZGVmYXVsdERhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIGlmIChjaGlsZFZhbCAmJiB0eXBlb2YgY2hpbGRWYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ1RoZSBcImRhdGFcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArXG4gICAgICAgICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgK1xuICAgICAgICAnZGVmaW5pdGlvbnMuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbClcbiAgfVxuXG4gIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKVxufTtcblxuLyoqXG4gKiBIb29rcyBhbmQgcHJvcHMgYXJlIG1lcmdlZCBhcyBhcnJheXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlSG9vayAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWxcbikge1xuICB2YXIgcmVzID0gY2hpbGRWYWxcbiAgICA/IHBhcmVudFZhbFxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgIDogW2NoaWxkVmFsXVxuICAgIDogcGFyZW50VmFsO1xuICByZXR1cm4gcmVzXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXG4gICAgOiByZXNcbn1cblxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXMuaW5kZXhPZihob29rc1tpXSkgPT09IC0xKSB7XG4gICAgICByZXMucHVzaChob29rc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuTElGRUNZQ0xFX0hPT0tTLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgc3RyYXRzW2hvb2tdID0gbWVyZ2VIb29rO1xufSk7XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQXNzZXRzIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKTtcbiAgaWYgKGNoaWxkVmFsKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgICByZXR1cm4gZXh0ZW5kKHJlcywgY2hpbGRWYWwpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbkFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgc3RyYXRzW3R5cGUgKyAncyddID0gbWVyZ2VBc3NldHM7XG59KTtcblxuLyoqXG4gKiBXYXRjaGVycy5cbiAqXG4gKiBXYXRjaGVycyBoYXNoZXMgc2hvdWxkIG5vdCBvdmVyd3JpdGUgb25lXG4gKiBhbm90aGVyLCBzbyB3ZSBtZXJnZSB0aGVtIGFzIGFycmF5cy5cbiAqL1xuc3RyYXRzLndhdGNoID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgLy8gd29yayBhcm91bmQgRmlyZWZveCdzIE9iamVjdC5wcm90b3R5cGUud2F0Y2guLi5cbiAgaWYgKHBhcmVudFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgcGFyZW50VmFsID0gdW5kZWZpbmVkOyB9XG4gIGlmIChjaGlsZFZhbCA9PT0gbmF0aXZlV2F0Y2gpIHsgY2hpbGRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghY2hpbGRWYWwpIHsgcmV0dXJuIE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0ge307XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGZvciAodmFyIGtleSQxIGluIGNoaWxkVmFsKSB7XG4gICAgdmFyIHBhcmVudCA9IHJldFtrZXkkMV07XG4gICAgdmFyIGNoaWxkID0gY2hpbGRWYWxba2V5JDFdO1xuICAgIGlmIChwYXJlbnQgJiYgIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gW3BhcmVudF07XG4gICAgfVxuICAgIHJldFtrZXkkMV0gPSBwYXJlbnRcbiAgICAgID8gcGFyZW50LmNvbmNhdChjaGlsZClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZCkgPyBjaGlsZCA6IFtjaGlsZF07XG4gIH1cbiAgcmV0dXJuIHJldFxufTtcblxuLyoqXG4gKiBPdGhlciBvYmplY3QgaGFzaGVzLlxuICovXG5zdHJhdHMucHJvcHMgPVxuc3RyYXRzLm1ldGhvZHMgPVxuc3RyYXRzLmluamVjdCA9XG5zdHJhdHMuY29tcHV0ZWQgPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICBpZiAoY2hpbGRWYWwgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBpZiAoY2hpbGRWYWwpIHsgZXh0ZW5kKHJldCwgY2hpbGRWYWwpOyB9XG4gIHJldHVybiByZXRcbn07XG5zdHJhdHMucHJvdmlkZSA9IG1lcmdlRGF0YU9yRm47XG5cbi8qKlxuICogRGVmYXVsdCBzdHJhdGVneS5cbiAqL1xudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkXG4gICAgPyBwYXJlbnRWYWxcbiAgICA6IGNoaWxkVmFsXG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIGNvbXBvbmVudCBuYW1lc1xuICovXG5mdW5jdGlvbiBjaGVja0NvbXBvbmVudHMgKG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29tcG9uZW50TmFtZSAobmFtZSkge1xuICBpZiAoIW5ldyBSZWdFeHAoKFwiXlthLXpBLVpdW1xcXFwtXFxcXC4wLTlfXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCJdKiRcIikpLnRlc3QobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICtcbiAgICAgICdzaG91bGQgY29uZm9ybSB0byB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lIGluIGh0bWw1IHNwZWNpZmljYXRpb24uJ1xuICAgICk7XG4gIH1cbiAgaWYgKGlzQnVpbHRJblRhZyhuYW1lKSB8fCBjb25maWcuaXNSZXNlcnZlZFRhZyhuYW1lKSkge1xuICAgIHdhcm4oXG4gICAgICAnRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICtcbiAgICAgICdpZDogJyArIG5hbWVcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogRW5zdXJlIGFsbCBwcm9wcyBvcHRpb24gc3ludGF4IGFyZSBub3JtYWxpemVkIGludG8gdGhlXG4gKiBPYmplY3QtYmFzZWQgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wcyAob3B0aW9ucywgdm0pIHtcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKCFwcm9wcykgeyByZXR1cm4gfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBpLCB2YWwsIG5hbWU7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFsID0gcHJvcHNbaV07XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmFtZSA9IGNhbWVsaXplKHZhbCk7XG4gICAgICAgIHJlc1tuYW1lXSA9IHsgdHlwZTogbnVsbCB9O1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oJ3Byb3BzIG11c3QgYmUgc3RyaW5ncyB3aGVuIHVzaW5nIGFycmF5IHN5bnRheC4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIHZhbCA9IHByb3BzW2tleV07XG4gICAgICBuYW1lID0gY2FtZWxpemUoa2V5KTtcbiAgICAgIHJlc1tuYW1lXSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IHZhbFxuICAgICAgICA6IHsgdHlwZTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInByb3BzXFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHByb3BzKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICBvcHRpb25zLnByb3BzID0gcmVzO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbGwgaW5qZWN0aW9ucyBpbnRvIE9iamVjdC1iYXNlZCBmb3JtYXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplSW5qZWN0IChvcHRpb25zLCB2bSkge1xuICB2YXIgaW5qZWN0ID0gb3B0aW9ucy5pbmplY3Q7XG4gIGlmICghaW5qZWN0KSB7IHJldHVybiB9XG4gIHZhciBub3JtYWxpemVkID0gb3B0aW9ucy5pbmplY3QgPSB7fTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBub3JtYWxpemVkW2luamVjdFtpXV0gPSB7IGZyb206IGluamVjdFtpXSB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gaW5qZWN0KSB7XG4gICAgICB2YXIgdmFsID0gaW5qZWN0W2tleV07XG4gICAgICBub3JtYWxpemVkW2tleV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyBleHRlbmQoeyBmcm9tOiBrZXkgfSwgdmFsKVxuICAgICAgICA6IHsgZnJvbTogdmFsIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImluamVjdFxcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShpbmplY3QpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTm9ybWFsaXplIHJhdyBmdW5jdGlvbiBkaXJlY3RpdmVzIGludG8gb2JqZWN0IGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyAob3B0aW9ucykge1xuICB2YXIgZGlycyA9IG9wdGlvbnMuZGlyZWN0aXZlcztcbiAgaWYgKGRpcnMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGlycykge1xuICAgICAgdmFyIGRlZiQkMSA9IGRpcnNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZGVmJCQxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpcnNba2V5XSA9IHsgYmluZDogZGVmJCQxLCB1cGRhdGU6IGRlZiQkMSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRPYmplY3RUeXBlIChuYW1lLCB2YWx1ZSwgdm0pIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiOiBleHBlY3RlZCBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUodmFsdWUpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIG9wdGlvbiBvYmplY3RzIGludG8gYSBuZXcgb25lLlxuICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VPcHRpb25zIChcbiAgcGFyZW50LFxuICBjaGlsZCxcbiAgdm1cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrQ29tcG9uZW50cyhjaGlsZCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2hpbGQgPSBjaGlsZC5vcHRpb25zO1xuICB9XG5cbiAgbm9ybWFsaXplUHJvcHMoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplSW5qZWN0KGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZURpcmVjdGl2ZXMoY2hpbGQpO1xuXG4gIC8vIEFwcGx5IGV4dGVuZHMgYW5kIG1peGlucyBvbiB0aGUgY2hpbGQgb3B0aW9ucyxcbiAgLy8gYnV0IG9ubHkgaWYgaXQgaXMgYSByYXcgb3B0aW9ucyBvYmplY3QgdGhhdCBpc24ndFxuICAvLyB0aGUgcmVzdWx0IG9mIGFub3RoZXIgbWVyZ2VPcHRpb25zIGNhbGwuXG4gIC8vIE9ubHkgbWVyZ2VkIG9wdGlvbnMgaGFzIHRoZSBfYmFzZSBwcm9wZXJ0eS5cbiAgaWYgKCFjaGlsZC5fYmFzZSkge1xuICAgIGlmIChjaGlsZC5leHRlbmRzKSB7XG4gICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5leHRlbmRzLCB2bSk7XG4gICAgfVxuICAgIGlmIChjaGlsZC5taXhpbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGQubWl4aW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5taXhpbnNbaV0sIHZtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBwYXJlbnQpIHtcbiAgICBtZXJnZUZpZWxkKGtleSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcbiAgICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2VGaWVsZCAoa2V5KSB7XG4gICAgdmFyIHN0cmF0ID0gc3RyYXRzW2tleV0gfHwgZGVmYXVsdFN0cmF0O1xuICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KTtcbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gYXNzZXQuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAqIHRvIGFzc2V0cyBkZWZpbmVkIGluIGl0cyBhbmNlc3RvciBjaGFpbi5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFzc2V0IChcbiAgb3B0aW9ucyxcbiAgdHlwZSxcbiAgaWQsXG4gIHdhcm5NaXNzaW5nXG4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGFzc2V0cyA9IG9wdGlvbnNbdHlwZV07XG4gIC8vIGNoZWNrIGxvY2FsIHJlZ2lzdHJhdGlvbiB2YXJpYXRpb25zIGZpcnN0XG4gIGlmIChoYXNPd24oYXNzZXRzLCBpZCkpIHsgcmV0dXJuIGFzc2V0c1tpZF0gfVxuICB2YXIgY2FtZWxpemVkSWQgPSBjYW1lbGl6ZShpZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBjYW1lbGl6ZWRJZCkpIHsgcmV0dXJuIGFzc2V0c1tjYW1lbGl6ZWRJZF0gfVxuICB2YXIgUGFzY2FsQ2FzZUlkID0gY2FwaXRhbGl6ZShjYW1lbGl6ZWRJZCk7XG4gIGlmIChoYXNPd24oYXNzZXRzLCBQYXNjYWxDYXNlSWQpKSB7IHJldHVybiBhc3NldHNbUGFzY2FsQ2FzZUlkXSB9XG4gIC8vIGZhbGxiYWNrIHRvIHByb3RvdHlwZSBjaGFpblxuICB2YXIgcmVzID0gYXNzZXRzW2lkXSB8fCBhc3NldHNbY2FtZWxpemVkSWRdIHx8IGFzc2V0c1tQYXNjYWxDYXNlSWRdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuTWlzc2luZyAmJiAhcmVzKSB7XG4gICAgd2FybihcbiAgICAgICdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgdHlwZS5zbGljZSgwLCAtMSkgKyAnOiAnICsgaWQsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wIChcbiAga2V5LFxuICBwcm9wT3B0aW9ucyxcbiAgcHJvcHNEYXRhLFxuICB2bVxuKSB7XG4gIHZhciBwcm9wID0gcHJvcE9wdGlvbnNba2V5XTtcbiAgdmFyIGFic2VudCA9ICFoYXNPd24ocHJvcHNEYXRhLCBrZXkpO1xuICB2YXIgdmFsdWUgPSBwcm9wc0RhdGFba2V5XTtcbiAgLy8gYm9vbGVhbiBjYXN0aW5nXG4gIHZhciBib29sZWFuSW5kZXggPSBnZXRUeXBlSW5kZXgoQm9vbGVhbiwgcHJvcC50eXBlKTtcbiAgaWYgKGJvb2xlYW5JbmRleCA+IC0xKSB7XG4gICAgaWYgKGFic2VudCAmJiAhaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IGh5cGhlbmF0ZShrZXkpKSB7XG4gICAgICAvLyBvbmx5IGNhc3QgZW1wdHkgc3RyaW5nIC8gc2FtZSBuYW1lIHRvIGJvb2xlYW4gaWZcbiAgICAgIC8vIGJvb2xlYW4gaGFzIGhpZ2hlciBwcmlvcml0eVxuICAgICAgdmFyIHN0cmluZ0luZGV4ID0gZ2V0VHlwZUluZGV4KFN0cmluZywgcHJvcC50eXBlKTtcbiAgICAgIGlmIChzdHJpbmdJbmRleCA8IDAgfHwgYm9vbGVhbkluZGV4IDwgc3RyaW5nSW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjaGVjayBkZWZhdWx0IHZhbHVlXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wLCBrZXkpO1xuICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGEgZnJlc2ggY29weSxcbiAgICAvLyBtYWtlIHN1cmUgdG8gb2JzZXJ2ZSBpdC5cbiAgICB2YXIgcHJldlNob3VsZE9ic2VydmUgPSBzaG91bGRPYnNlcnZlO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICBvYnNlcnZlKHZhbHVlKTtcbiAgICB0b2dnbGVPYnNlcnZpbmcocHJldlNob3VsZE9ic2VydmUpO1xuICB9XG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgLy8gc2tpcCB2YWxpZGF0aW9uIGZvciB3ZWV4IHJlY3ljbGUtbGlzdCBjaGlsZCBjb21wb25lbnQgcHJvcHNcbiAgICAhKGZhbHNlKVxuICApIHtcbiAgICBhc3NlcnRQcm9wKHByb3AsIGtleSwgdmFsdWUsIHZtLCBhYnNlbnQpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhIHByb3AuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BEZWZhdWx0VmFsdWUgKHZtLCBwcm9wLCBrZXkpIHtcbiAgLy8gbm8gZGVmYXVsdCwgcmV0dXJuIHVuZGVmaW5lZFxuICBpZiAoIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHZhciBkZWYgPSBwcm9wLmRlZmF1bHQ7XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tZmFjdG9yeSBkZWZhdWx0cyBmb3IgT2JqZWN0ICYgQXJyYXlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNPYmplY3QoZGVmKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBkZWZhdWx0IHZhbHVlIGZvciBwcm9wIFwiJyArIGtleSArICdcIjogJyArXG4gICAgICAnUHJvcHMgd2l0aCB0eXBlIE9iamVjdC9BcnJheSBtdXN0IHVzZSBhIGZhY3RvcnkgZnVuY3Rpb24gJyArXG4gICAgICAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlLicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gdGhlIHJhdyBwcm9wIHZhbHVlIHdhcyBhbHNvIHVuZGVmaW5lZCBmcm9tIHByZXZpb3VzIHJlbmRlcixcbiAgLy8gcmV0dXJuIHByZXZpb3VzIGRlZmF1bHQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd2F0Y2hlciB0cmlnZ2VyXG4gIGlmICh2bSAmJiB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgJiZcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGFba2V5XSA9PT0gdW5kZWZpbmVkICYmXG4gICAgdm0uX3Byb3BzW2tleV0gIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4gdm0uX3Byb3BzW2tleV1cbiAgfVxuICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICAvLyBhIHZhbHVlIGlzIEZ1bmN0aW9uIGlmIGl0cyBwcm90b3R5cGUgaXMgZnVuY3Rpb24gZXZlbiBhY3Jvc3MgZGlmZmVyZW50IGV4ZWN1dGlvbiBjb250ZXh0XG4gIHJldHVybiB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGdldFR5cGUocHJvcC50eXBlKSAhPT0gJ0Z1bmN0aW9uJ1xuICAgID8gZGVmLmNhbGwodm0pXG4gICAgOiBkZWZcbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBhIHByb3AgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByb3AgKFxuICBwcm9wLFxuICBuYW1lLFxuICB2YWx1ZSxcbiAgdm0sXG4gIGFic2VudFxuKSB7XG4gIGlmIChwcm9wLnJlcXVpcmVkICYmIGFic2VudCkge1xuICAgIHdhcm4oXG4gICAgICAnTWlzc2luZyByZXF1aXJlZCBwcm9wOiBcIicgKyBuYW1lICsgJ1wiJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhcHJvcC5yZXF1aXJlZCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciB0eXBlID0gcHJvcC50eXBlO1xuICB2YXIgdmFsaWQgPSAhdHlwZSB8fCB0eXBlID09PSB0cnVlO1xuICB2YXIgZXhwZWN0ZWRUeXBlcyA9IFtdO1xuICBpZiAodHlwZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZSA9IFt0eXBlXTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aCAmJiAhdmFsaWQ7IGkrKykge1xuICAgICAgdmFyIGFzc2VydGVkVHlwZSA9IGFzc2VydFR5cGUodmFsdWUsIHR5cGVbaV0pO1xuICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xuICAgICAgdmFsaWQgPSBhc3NlcnRlZFR5cGUudmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF2YWxpZCkge1xuICAgIHdhcm4oXG4gICAgICBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciB2YWxpZGF0b3IgPSBwcm9wLnZhbGlkYXRvcjtcbiAgaWYgKHZhbGlkYXRvcikge1xuICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHNpbXBsZUNoZWNrUkUgPSAvXihTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258U3ltYm9sKSQvO1xuXG5mdW5jdGlvbiBhc3NlcnRUeXBlICh2YWx1ZSwgdHlwZSkge1xuICB2YXIgdmFsaWQ7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBnZXRUeXBlKHR5cGUpO1xuICBpZiAoc2ltcGxlQ2hlY2tSRS50ZXN0KGV4cGVjdGVkVHlwZSkpIHtcbiAgICB2YXIgdCA9IHR5cGVvZiB2YWx1ZTtcbiAgICB2YWxpZCA9IHQgPT09IGV4cGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGZvciBwcmltaXRpdmUgd3JhcHBlciBvYmplY3RzXG4gICAgaWYgKCF2YWxpZCAmJiB0ID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ09iamVjdCcpIHtcbiAgICB2YWxpZCA9IGlzUGxhaW5PYmplY3QodmFsdWUpO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0FycmF5Jykge1xuICAgIHZhbGlkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2YWxpZDogdmFsaWQsXG4gICAgZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGVcbiAgfVxufVxuXG4vKipcbiAqIFVzZSBmdW5jdGlvbiBzdHJpbmcgbmFtZSB0byBjaGVjayBidWlsdC1pbiB0eXBlcyxcbiAqIGJlY2F1c2UgYSBzaW1wbGUgZXF1YWxpdHkgY2hlY2sgd2lsbCBmYWlsIHdoZW4gcnVubmluZ1xuICogYWNyb3NzIGRpZmZlcmVudCB2bXMgLyBpZnJhbWVzLlxuICovXG5mdW5jdGlvbiBnZXRUeXBlIChmbikge1xuICB2YXIgbWF0Y2ggPSBmbiAmJiBmbi50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVR5cGUgKGEsIGIpIHtcbiAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYilcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUluZGV4ICh0eXBlLCBleHBlY3RlZFR5cGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFR5cGVzKSkge1xuICAgIHJldHVybiBpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXMsIHR5cGUpID8gMCA6IC0xXG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkVHlwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzW2ldLCB0eXBlKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbmZ1bmN0aW9uIGdldEludmFsaWRUeXBlTWVzc2FnZSAobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgdmFyIG1lc3NhZ2UgPSBcIkludmFsaWQgcHJvcDogdHlwZSBjaGVjayBmYWlsZWQgZm9yIHByb3AgXFxcIlwiICsgbmFtZSArIFwiXFxcIi5cIiArXG4gICAgXCIgRXhwZWN0ZWQgXCIgKyAoZXhwZWN0ZWRUeXBlcy5tYXAoY2FwaXRhbGl6ZSkuam9pbignLCAnKSk7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGVzWzBdO1xuICB2YXIgcmVjZWl2ZWRUeXBlID0gdG9SYXdUeXBlKHZhbHVlKTtcbiAgdmFyIGV4cGVjdGVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCBleHBlY3RlZFR5cGUpO1xuICB2YXIgcmVjZWl2ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIHJlY2VpdmVkVHlwZSk7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSBleHBlY3RlZCB2YWx1ZVxuICBpZiAoZXhwZWN0ZWRUeXBlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIGlzRXhwbGljYWJsZShleHBlY3RlZFR5cGUpICYmXG4gICAgICAhaXNCb29sZWFuKGV4cGVjdGVkVHlwZSwgcmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSBcIiArIGV4cGVjdGVkVmFsdWU7XG4gIH1cbiAgbWVzc2FnZSArPSBcIiwgZ290IFwiICsgcmVjZWl2ZWRUeXBlICsgXCIgXCI7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSByZWNlaXZlZCB2YWx1ZVxuICBpZiAoaXNFeHBsaWNhYmxlKHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwid2l0aCB2YWx1ZSBcIiArIHJlY2VpdmVkVmFsdWUgKyBcIi5cIjtcbiAgfVxuICByZXR1cm4gbWVzc2FnZVxufVxuXG5mdW5jdGlvbiBzdHlsZVZhbHVlICh2YWx1ZSwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ1N0cmluZycpIHtcbiAgICByZXR1cm4gKFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIilcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnTnVtYmVyJykge1xuICAgIHJldHVybiAoXCJcIiArIChOdW1iZXIodmFsdWUpKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFwiXCIgKyB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0V4cGxpY2FibGUgKHZhbHVlKSB7XG4gIHZhciBleHBsaWNpdFR5cGVzID0gWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXTtcbiAgcmV0dXJuIGV4cGxpY2l0VHlwZXMuc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZWxlbTsgfSlcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuICgpIHtcbiAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICByZXR1cm4gYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnRvTG93ZXJDYXNlKCkgPT09ICdib29sZWFuJzsgfSlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIC8vIERlYWN0aXZhdGUgZGVwcyB0cmFja2luZyB3aGlsZSBwcm9jZXNzaW5nIGVycm9yIGhhbmRsZXIgdG8gYXZvaWQgcG9zc2libGUgaW5maW5pdGUgcmVuZGVyaW5nLlxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWV4L2lzc3Vlcy8xNTA1XG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICBpZiAodm0pIHtcbiAgICAgIHZhciBjdXIgPSB2bTtcbiAgICAgIHdoaWxlICgoY3VyID0gY3VyLiRwYXJlbnQpKSB7XG4gICAgICAgIHZhciBob29rcyA9IGN1ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO1xuICAgICAgICBpZiAoaG9va3MpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9IGhvb2tzW2ldLmNhbGwoY3VyLCBlcnIsIHZtLCBpbmZvKSA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChjYXB0dXJlKSB7IHJldHVybiB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGdsb2JhbEhhbmRsZUVycm9yKGUsIGN1ciwgJ2Vycm9yQ2FwdHVyZWQgaG9vaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnbG9iYWxIYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyAoXG4gIGhhbmRsZXIsXG4gIGNvbnRleHQsXG4gIGFyZ3MsXG4gIHZtLFxuICBpbmZvXG4pIHtcbiAgdmFyIHJlcztcbiAgdHJ5IHtcbiAgICByZXMgPSBhcmdzID8gaGFuZGxlci5hcHBseShjb250ZXh0LCBhcmdzKSA6IGhhbmRsZXIuY2FsbChjb250ZXh0KTtcbiAgICBpZiAocmVzICYmICFyZXMuX2lzVnVlICYmIGlzUHJvbWlzZShyZXMpICYmICFyZXMuX2hhbmRsZWQpIHtcbiAgICAgIHJlcy5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8gKyBcIiAoUHJvbWlzZS9hc3luYylcIik7IH0pO1xuICAgICAgLy8gaXNzdWUgIzk1MTFcbiAgICAgIC8vIGF2b2lkIGNhdGNoIHRyaWdnZXJpbmcgbXVsdGlwbGUgdGltZXMgd2hlbiBuZXN0ZWQgY2FsbHNcbiAgICAgIHJlcy5faGFuZGxlZCA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8pO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2xvYmFsSGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKGNvbmZpZy5lcnJvckhhbmRsZXIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5lcnJvckhhbmRsZXIuY2FsbChudWxsLCBlcnIsIHZtLCBpbmZvKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGlmIHRoZSB1c2VyIGludGVudGlvbmFsbHkgdGhyb3dzIHRoZSBvcmlnaW5hbCBlcnJvciBpbiB0aGUgaGFuZGxlcixcbiAgICAgIC8vIGRvIG5vdCBsb2cgaXQgdHdpY2VcbiAgICAgIGlmIChlICE9PSBlcnIpIHtcbiAgICAgICAgbG9nRXJyb3IoZSwgbnVsbCwgJ2NvbmZpZy5lcnJvckhhbmRsZXInKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9nRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICgoaW5Ccm93c2VyIHx8IGluV2VleCkgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IGVyclxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgaXNVc2luZ01pY3JvVGFzayA9IGZhbHNlO1xuXG52YXIgY2FsbGJhY2tzID0gW107XG52YXIgcGVuZGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyAoKSB7XG4gIHBlbmRpbmcgPSBmYWxzZTtcbiAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29waWVzW2ldKCk7XG4gIH1cbn1cblxuLy8gSGVyZSB3ZSBoYXZlIGFzeW5jIGRlZmVycmluZyB3cmFwcGVycyB1c2luZyBtaWNyb3Rhc2tzLlxuLy8gSW4gMi41IHdlIHVzZWQgKG1hY3JvKSB0YXNrcyAoaW4gY29tYmluYXRpb24gd2l0aCBtaWNyb3Rhc2tzKS5cbi8vIEhvd2V2ZXIsIGl0IGhhcyBzdWJ0bGUgcHJvYmxlbXMgd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIHJpZ2h0IGJlZm9yZSByZXBhaW50XG4vLyAoZS5nLiAjNjgxMywgb3V0LWluIHRyYW5zaXRpb25zKS5cbi8vIEFsc28sIHVzaW5nIChtYWNybykgdGFza3MgaW4gZXZlbnQgaGFuZGxlciB3b3VsZCBjYXVzZSBzb21lIHdlaXJkIGJlaGF2aW9yc1xuLy8gdGhhdCBjYW5ub3QgYmUgY2lyY3VtdmVudGVkIChlLmcuICM3MTA5LCAjNzE1MywgIzc1NDYsICM3ODM0LCAjODEwOSkuXG4vLyBTbyB3ZSBub3cgdXNlIG1pY3JvdGFza3MgZXZlcnl3aGVyZSwgYWdhaW4uXG4vLyBBIG1ham9yIGRyYXdiYWNrIG9mIHRoaXMgdHJhZGVvZmYgaXMgdGhhdCB0aGVyZSBhcmUgc29tZSBzY2VuYXJpb3Ncbi8vIHdoZXJlIG1pY3JvdGFza3MgaGF2ZSB0b28gaGlnaCBhIHByaW9yaXR5IGFuZCBmaXJlIGluIGJldHdlZW4gc3VwcG9zZWRseVxuLy8gc2VxdWVudGlhbCBldmVudHMgKGUuZy4gIzQ1MjEsICM2NjkwLCB3aGljaCBoYXZlIHdvcmthcm91bmRzKVxuLy8gb3IgZXZlbiBiZXR3ZWVuIGJ1YmJsaW5nIG9mIHRoZSBzYW1lIGV2ZW50ICgjNjU2NikuXG52YXIgdGltZXJGdW5jO1xuXG4vLyBUaGUgbmV4dFRpY2sgYmVoYXZpb3IgbGV2ZXJhZ2VzIHRoZSBtaWNyb3Rhc2sgcXVldWUsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZFxuLy8gdmlhIGVpdGhlciBuYXRpdmUgUHJvbWlzZS50aGVuIG9yIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXRhdGlvbk9ic2VydmVyIGhhcyB3aWRlciBzdXBwb3J0LCBob3dldmVyIGl0IGlzIHNlcmlvdXNseSBidWdnZWQgaW5cbi8vIFVJV2ViVmlldyBpbiBpT1MgPj0gOS4zLjMgd2hlbiB0cmlnZ2VyZWQgaW4gdG91Y2ggZXZlbnQgaGFuZGxlcnMuIEl0XG4vLyBjb21wbGV0ZWx5IHN0b3BzIHdvcmtpbmcgYWZ0ZXIgdHJpZ2dlcmluZyBhIGZldyB0aW1lcy4uLiBzbywgaWYgbmF0aXZlXG4vLyBQcm9taXNlIGlzIGF2YWlsYWJsZSwgd2Ugd2lsbCB1c2UgaXQ6XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCwgJGZsb3ctZGlzYWJsZS1saW5lICovXG5pZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb21pc2UpKSB7XG4gIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBwLnRoZW4oZmx1c2hDYWxsYmFja3MpO1xuICAgIC8vIEluIHByb2JsZW1hdGljIFVJV2ViVmlld3MsIFByb21pc2UudGhlbiBkb2Vzbid0IGNvbXBsZXRlbHkgYnJlYWssIGJ1dFxuICAgIC8vIGl0IGNhbiBnZXQgc3R1Y2sgaW4gYSB3ZWlyZCBzdGF0ZSB3aGVyZSBjYWxsYmFja3MgYXJlIHB1c2hlZCBpbnRvIHRoZVxuICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBidXQgdGhlIHF1ZXVlIGlzbid0IGJlaW5nIGZsdXNoZWQsIHVudGlsIHRoZSBicm93c2VyXG4gICAgLy8gbmVlZHMgdG8gZG8gc29tZSBvdGhlciB3b3JrLCBlLmcuIGhhbmRsZSBhIHRpbWVyLiBUaGVyZWZvcmUgd2UgY2FuXG4gICAgLy8gXCJmb3JjZVwiIHRoZSBtaWNyb3Rhc2sgcXVldWUgdG8gYmUgZmx1c2hlZCBieSBhZGRpbmcgYW4gZW1wdHkgdGltZXIuXG4gICAgaWYgKGlzSU9TKSB7IHNldFRpbWVvdXQobm9vcCk7IH1cbiAgfTtcbiAgaXNVc2luZ01pY3JvVGFzayA9IHRydWU7XG59IGVsc2UgaWYgKCFpc0lFICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gIGlzTmF0aXZlKE11dGF0aW9uT2JzZXJ2ZXIpIHx8XG4gIC8vIFBoYW50b21KUyBhbmQgaU9TIDcueFxuICBNdXRhdGlvbk9ic2VydmVyLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl0nXG4pKSB7XG4gIC8vIFVzZSBNdXRhdGlvbk9ic2VydmVyIHdoZXJlIG5hdGl2ZSBQcm9taXNlIGlzIG5vdCBhdmFpbGFibGUsXG4gIC8vIGUuZy4gUGhhbnRvbUpTLCBpT1M3LCBBbmRyb2lkIDQuNFxuICAvLyAoIzY0NjYgTXV0YXRpb25PYnNlcnZlciBpcyB1bnJlbGlhYmxlIGluIElFMTEpXG4gIHZhciBjb3VudGVyID0gMTtcbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2hDYWxsYmFja3MpO1xuICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoY291bnRlcikpO1xuICBvYnNlcnZlci5vYnNlcnZlKHRleHROb2RlLCB7XG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICB9KTtcbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgMjtcbiAgICB0ZXh0Tm9kZS5kYXRhID0gU3RyaW5nKGNvdW50ZXIpO1xuICB9O1xuICBpc1VzaW5nTWljcm9UYXNrID0gdHJ1ZTtcbn0gZWxzZSBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoc2V0SW1tZWRpYXRlKSkge1xuICAvLyBGYWxsYmFjayB0byBzZXRJbW1lZGlhdGUuXG4gIC8vIFRlY2huaWNhbGx5IGl0IGxldmVyYWdlcyB0aGUgKG1hY3JvKSB0YXNrIHF1ZXVlLFxuICAvLyBidXQgaXQgaXMgc3RpbGwgYSBiZXR0ZXIgY2hvaWNlIHRoYW4gc2V0VGltZW91dC5cbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHNldEltbWVkaWF0ZShmbHVzaENhbGxiYWNrcyk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBGYWxsYmFjayB0byBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dChmbHVzaENhbGxiYWNrcywgMCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrIChjYiwgY3R4KSB7XG4gIHZhciBfcmVzb2x2ZTtcbiAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbChjdHgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBoYW5kbGVFcnJvcihlLCBjdHgsICduZXh0VGljaycpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3Jlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlKGN0eCk7XG4gICAgfVxuICB9KTtcbiAgaWYgKCFwZW5kaW5nKSB7XG4gICAgcGVuZGluZyA9IHRydWU7XG4gICAgdGltZXJGdW5jKCk7XG4gIH1cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyogbm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IHBsYXkgd2VsbCB3aXRoIFByb3h5ICovXG5cbnZhciBpbml0UHJveHk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBhbGxvd2VkR2xvYmFscyA9IG1ha2VNYXAoXG4gICAgJ0luZmluaXR5LHVuZGVmaW5lZCxOYU4saXNGaW5pdGUsaXNOYU4sJyArXG4gICAgJ3BhcnNlRmxvYXQscGFyc2VJbnQsZGVjb2RlVVJJLGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUkksZW5jb2RlVVJJQ29tcG9uZW50LCcgK1xuICAgICdNYXRoLE51bWJlcixEYXRlLEFycmF5LE9iamVjdCxCb29sZWFuLFN0cmluZyxSZWdFeHAsTWFwLFNldCxKU09OLEludGwsJyArXG4gICAgJ3JlcXVpcmUnIC8vIGZvciBXZWJwYWNrL0Jyb3dzZXJpZnlcbiAgKTtcblxuICB2YXIgd2Fybk5vblByZXNlbnQgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJQcm9wZXJ0eSBvciBtZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIG9uIHRoZSBpbnN0YW5jZSBidXQgXCIgK1xuICAgICAgJ3JlZmVyZW5jZWQgZHVyaW5nIHJlbmRlci4gTWFrZSBzdXJlIHRoYXQgdGhpcyBwcm9wZXJ0eSBpcyByZWFjdGl2ZSwgJyArXG4gICAgICAnZWl0aGVyIGluIHRoZSBkYXRhIG9wdGlvbiwgb3IgZm9yIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMsIGJ5ICcgK1xuICAgICAgJ2luaXRpYWxpemluZyB0aGUgcHJvcGVydHkuICcgK1xuICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvcmVhY3Rpdml0eS5odG1sI0RlY2xhcmluZy1SZWFjdGl2ZS1Qcm9wZXJ0aWVzLicsXG4gICAgICB0YXJnZXRcbiAgICApO1xuICB9O1xuXG4gIHZhciB3YXJuUmVzZXJ2ZWRQcmVmaXggPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJQcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgbXVzdCBiZSBhY2Nlc3NlZCB3aXRoIFxcXCIkZGF0YS5cIiArIGtleSArIFwiXFxcIiBiZWNhdXNlIFwiICtcbiAgICAgICdwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggXCIkXCIgb3IgXCJfXCIgYXJlIG5vdCBwcm94aWVkIGluIHRoZSBWdWUgaW5zdGFuY2UgdG8gJyArXG4gICAgICAncHJldmVudCBjb25mbGljdHMgd2l0aCBWdWUgaW50ZXJuYWxzLiAnICtcbiAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2FwaS8jZGF0YScsXG4gICAgICB0YXJnZXRcbiAgICApO1xuICB9O1xuXG4gIHZhciBoYXNQcm94eSA9XG4gICAgdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm94eSk7XG5cbiAgaWYgKGhhc1Byb3h5KSB7XG4gICAgdmFyIGlzQnVpbHRJbk1vZGlmaWVyID0gbWFrZU1hcCgnc3RvcCxwcmV2ZW50LHNlbGYsY3RybCxzaGlmdCxhbHQsbWV0YSxleGFjdCcpO1xuICAgIGNvbmZpZy5rZXlDb2RlcyA9IG5ldyBQcm94eShjb25maWcua2V5Q29kZXMsIHtcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzQnVpbHRJbk1vZGlmaWVyKGtleSkpIHtcbiAgICAgICAgICB3YXJuKChcIkF2b2lkIG92ZXJ3cml0aW5nIGJ1aWx0LWluIG1vZGlmaWVyIGluIGNvbmZpZy5rZXlDb2RlczogLlwiICsga2V5KSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaGFzSGFuZGxlciA9IHtcbiAgICBoYXM6IGZ1bmN0aW9uIGhhcyAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIHZhciBoYXMgPSBrZXkgaW4gdGFyZ2V0O1xuICAgICAgdmFyIGlzQWxsb3dlZCA9IGFsbG93ZWRHbG9iYWxzKGtleSkgfHxcbiAgICAgICAgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleS5jaGFyQXQoMCkgPT09ICdfJyAmJiAhKGtleSBpbiB0YXJnZXQuJGRhdGEpKTtcbiAgICAgIGlmICghaGFzICYmICFpc0FsbG93ZWQpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzIHx8ICFpc0FsbG93ZWRcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldEhhbmRsZXIgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKHRhcmdldCwga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgIGVsc2UgeyB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXRba2V5XVxuICAgIH1cbiAgfTtcblxuICBpbml0UHJveHkgPSBmdW5jdGlvbiBpbml0UHJveHkgKHZtKSB7XG4gICAgaWYgKGhhc1Byb3h5KSB7XG4gICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJveHkgaGFuZGxlciB0byB1c2VcbiAgICAgIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gICAgICB2YXIgaGFuZGxlcnMgPSBvcHRpb25zLnJlbmRlciAmJiBvcHRpb25zLnJlbmRlci5fd2l0aFN0cmlwcGVkXG4gICAgICAgID8gZ2V0SGFuZGxlclxuICAgICAgICA6IGhhc0hhbmRsZXI7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSBuZXcgUHJveHkodm0sIGhhbmRsZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHNlZW5PYmplY3RzID0gbmV3IF9TZXQoKTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwpIHtcbiAgX3RyYXZlcnNlKHZhbCwgc2Vlbk9iamVjdHMpO1xuICBzZWVuT2JqZWN0cy5jbGVhcigpO1xufVxuXG5mdW5jdGlvbiBfdHJhdmVyc2UgKHZhbCwgc2Vlbikge1xuICB2YXIgaSwga2V5cztcbiAgdmFyIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKTtcbiAgaWYgKCghaXNBICYmICFpc09iamVjdCh2YWwpKSB8fCBPYmplY3QuaXNGcm96ZW4odmFsKSB8fCB2YWwgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2YWwuX19vYl9fKSB7XG4gICAgdmFyIGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWQ7XG4gICAgaWYgKHNlZW4uaGFzKGRlcElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNlZW4uYWRkKGRlcElkKTtcbiAgfVxuICBpZiAoaXNBKSB7XG4gICAgaSA9IHZhbC5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2ldLCBzZWVuKTsgfVxuICB9IGVsc2Uge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxba2V5c1tpXV0sIHNlZW4pOyB9XG4gIH1cbn1cblxudmFyIG1hcms7XG52YXIgbWVhc3VyZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHBlcmYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKFxuICAgIHBlcmYgJiZcbiAgICBwZXJmLm1hcmsgJiZcbiAgICBwZXJmLm1lYXN1cmUgJiZcbiAgICBwZXJmLmNsZWFyTWFya3MgJiZcbiAgICBwZXJmLmNsZWFyTWVhc3VyZXNcbiAgKSB7XG4gICAgbWFyayA9IGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHBlcmYubWFyayh0YWcpOyB9O1xuICAgIG1lYXN1cmUgPSBmdW5jdGlvbiAobmFtZSwgc3RhcnRUYWcsIGVuZFRhZykge1xuICAgICAgcGVyZi5tZWFzdXJlKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgICAgcGVyZi5jbGVhck1hcmtzKHN0YXJ0VGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhlbmRUYWcpO1xuICAgICAgLy8gcGVyZi5jbGVhck1lYXN1cmVzKG5hbWUpXG4gICAgfTtcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIG5vcm1hbGl6ZUV2ZW50ID0gY2FjaGVkKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBwYXNzaXZlID0gbmFtZS5jaGFyQXQoMCkgPT09ICcmJztcbiAgbmFtZSA9IHBhc3NpdmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgdmFyIG9uY2UkJDEgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJ34nOyAvLyBQcmVmaXhlZCBsYXN0LCBjaGVja2VkIGZpcnN0XG4gIG5hbWUgPSBvbmNlJCQxID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBjYXB0dXJlID0gbmFtZS5jaGFyQXQoMCkgPT09ICchJztcbiAgbmFtZSA9IGNhcHR1cmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIG9uY2U6IG9uY2UkJDEsXG4gICAgY2FwdHVyZTogY2FwdHVyZSxcbiAgICBwYXNzaXZlOiBwYXNzaXZlXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVGbkludm9rZXIgKGZucywgdm0pIHtcbiAgZnVuY3Rpb24gaW52b2tlciAoKSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGZucyA9IGludm9rZXIuZm5zO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZucykpIHtcbiAgICAgIHZhciBjbG9uZWQgPSBmbnMuc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGNsb25lZFtpXSwgbnVsbCwgYXJndW1lbnRzJDEsIHZtLCBcInYtb24gaGFuZGxlclwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmV0dXJuIGhhbmRsZXIgcmV0dXJuIHZhbHVlIGZvciBzaW5nbGUgaGFuZGxlcnNcbiAgICAgIHJldHVybiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhmbnMsIG51bGwsIGFyZ3VtZW50cywgdm0sIFwidi1vbiBoYW5kbGVyXCIpXG4gICAgfVxuICB9XG4gIGludm9rZXIuZm5zID0gZm5zO1xuICByZXR1cm4gaW52b2tlclxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaXN0ZW5lcnMgKFxuICBvbixcbiAgb2xkT24sXG4gIGFkZCxcbiAgcmVtb3ZlJCQxLFxuICBjcmVhdGVPbmNlSGFuZGxlcixcbiAgdm1cbikge1xuICB2YXIgbmFtZSwgZGVmJCQxLCBjdXIsIG9sZCwgZXZlbnQ7XG4gIGZvciAobmFtZSBpbiBvbikge1xuICAgIGRlZiQkMSA9IGN1ciA9IG9uW25hbWVdO1xuICAgIG9sZCA9IG9sZE9uW25hbWVdO1xuICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgaWYgKGlzVW5kZWYoY3VyKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkludmFsaWQgaGFuZGxlciBmb3IgZXZlbnQgXFxcIlwiICsgKGV2ZW50Lm5hbWUpICsgXCJcXFwiOiBnb3QgXCIgKyBTdHJpbmcoY3VyKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZCkpIHtcbiAgICAgIGlmIChpc1VuZGVmKGN1ci5mbnMpKSB7XG4gICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlRm5JbnZva2VyKGN1ciwgdm0pO1xuICAgICAgfVxuICAgICAgaWYgKGlzVHJ1ZShldmVudC5vbmNlKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZU9uY2VIYW5kbGVyKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSk7XG4gICAgICB9XG4gICAgICBhZGQoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlLCBldmVudC5wYXNzaXZlLCBldmVudC5wYXJhbXMpO1xuICAgIH0gZWxzZSBpZiAoY3VyICE9PSBvbGQpIHtcbiAgICAgIG9sZC5mbnMgPSBjdXI7XG4gICAgICBvbltuYW1lXSA9IG9sZDtcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIG9sZE9uKSB7XG4gICAgaWYgKGlzVW5kZWYob25bbmFtZV0pKSB7XG4gICAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgICAgcmVtb3ZlJCQxKGV2ZW50Lm5hbWUsIG9sZE9uW25hbWVdLCBldmVudC5jYXB0dXJlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIG1lcmdlVk5vZGVIb29rIChkZWYsIGhvb2tLZXksIGhvb2spIHtcbiAgaWYgKGRlZiBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgZGVmID0gZGVmLmRhdGEuaG9vayB8fCAoZGVmLmRhdGEuaG9vayA9IHt9KTtcbiAgfVxuICB2YXIgaW52b2tlcjtcbiAgdmFyIG9sZEhvb2sgPSBkZWZbaG9va0tleV07XG5cbiAgZnVuY3Rpb24gd3JhcHBlZEhvb2sgKCkge1xuICAgIGhvb2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyBpbXBvcnRhbnQ6IHJlbW92ZSBtZXJnZWQgaG9vayB0byBlbnN1cmUgaXQncyBjYWxsZWQgb25seSBvbmNlXG4gICAgLy8gYW5kIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICByZW1vdmUoaW52b2tlci5mbnMsIHdyYXBwZWRIb29rKTtcbiAgfVxuXG4gIGlmIChpc1VuZGVmKG9sZEhvb2spKSB7XG4gICAgLy8gbm8gZXhpc3RpbmcgaG9va1xuICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW3dyYXBwZWRIb29rXSk7XG4gIH0gZWxzZSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGlzRGVmKG9sZEhvb2suZm5zKSAmJiBpc1RydWUob2xkSG9vay5tZXJnZWQpKSB7XG4gICAgICAvLyBhbHJlYWR5IGEgbWVyZ2VkIGludm9rZXJcbiAgICAgIGludm9rZXIgPSBvbGRIb29rO1xuICAgICAgaW52b2tlci5mbnMucHVzaCh3cmFwcGVkSG9vayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGV4aXN0aW5nIHBsYWluIGhvb2tcbiAgICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW29sZEhvb2ssIHdyYXBwZWRIb29rXSk7XG4gICAgfVxuICB9XG5cbiAgaW52b2tlci5tZXJnZWQgPSB0cnVlO1xuICBkZWZbaG9va0tleV0gPSBpbnZva2VyO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YSAoXG4gIGRhdGEsXG4gIEN0b3IsXG4gIHRhZ1xuKSB7XG4gIC8vIHdlIGFyZSBvbmx5IGV4dHJhY3RpbmcgcmF3IHZhbHVlcyBoZXJlLlxuICAvLyB2YWxpZGF0aW9uIGFuZCBkZWZhdWx0IHZhbHVlcyBhcmUgaGFuZGxlZCBpbiB0aGUgY2hpbGRcbiAgLy8gY29tcG9uZW50IGl0c2VsZi5cbiAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLnByb3BzO1xuICBpZiAoaXNVbmRlZihwcm9wT3B0aW9ucykpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XG4gIGlmIChpc0RlZihhdHRycykgfHwgaXNEZWYocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIga2V5SW5Mb3dlckNhc2UgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSAhPT0ga2V5SW5Mb3dlckNhc2UgJiZcbiAgICAgICAgICBhdHRycyAmJiBoYXNPd24oYXR0cnMsIGtleUluTG93ZXJDYXNlKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aXAoXG4gICAgICAgICAgICBcIlByb3AgXFxcIlwiICsga2V5SW5Mb3dlckNhc2UgKyBcIlxcXCIgaXMgcGFzc2VkIHRvIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh0YWcgfHwgQ3RvcikpICsgXCIsIGJ1dCB0aGUgZGVjbGFyZWQgcHJvcCBuYW1lIGlzXCIgK1xuICAgICAgICAgICAgXCIgXFxcIlwiICsga2V5ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIGNhbWVsQ2FzZWQgXCIgK1xuICAgICAgICAgICAgXCJwcm9wcyBuZWVkIHRvIHVzZSB0aGVpciBrZWJhYi1jYXNlIGVxdWl2YWxlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIFwiICtcbiAgICAgICAgICAgIFwidGVtcGxhdGVzLiBZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyBhbHRLZXkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICBjaGVja1Byb3AocmVzLCBhdHRycywga2V5LCBhbHRLZXksIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBjaGVja1Byb3AgKFxuICByZXMsXG4gIGhhc2gsXG4gIGtleSxcbiAgYWx0S2V5LFxuICBwcmVzZXJ2ZVxuKSB7XG4gIGlmIChpc0RlZihoYXNoKSkge1xuICAgIGlmIChoYXNPd24oaGFzaCwga2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBoYXNoW2tleV07XG4gICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgIGRlbGV0ZSBoYXNoW2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoaGFzT3duKGhhc2gsIGFsdEtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFthbHRLZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFthbHRLZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qICAqL1xuXG4vLyBUaGUgdGVtcGxhdGUgY29tcGlsZXIgYXR0ZW1wdHMgdG8gbWluaW1pemUgdGhlIG5lZWQgZm9yIG5vcm1hbGl6YXRpb24gYnlcbi8vIHN0YXRpY2FsbHkgYW5hbHl6aW5nIHRoZSB0ZW1wbGF0ZSBhdCBjb21waWxlIHRpbWUuXG4vL1xuLy8gRm9yIHBsYWluIEhUTUwgbWFya3VwLCBub3JtYWxpemF0aW9uIGNhbiBiZSBjb21wbGV0ZWx5IHNraXBwZWQgYmVjYXVzZSB0aGVcbi8vIGdlbmVyYXRlZCByZW5kZXIgZnVuY3Rpb24gaXMgZ3VhcmFudGVlZCB0byByZXR1cm4gQXJyYXk8Vk5vZGU+LiBUaGVyZSBhcmVcbi8vIHR3byBjYXNlcyB3aGVyZSBleHRyYSBub3JtYWxpemF0aW9uIGlzIG5lZWRlZDpcblxuLy8gMS4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29tcG9uZW50cyAtIGJlY2F1c2UgYSBmdW5jdGlvbmFsIGNvbXBvbmVudFxuLy8gbWF5IHJldHVybiBhbiBBcnJheSBpbnN0ZWFkIG9mIGEgc2luZ2xlIHJvb3QuIEluIHRoaXMgY2FzZSwganVzdCBhIHNpbXBsZVxuLy8gbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQgLSBpZiBhbnkgY2hpbGQgaXMgYW4gQXJyYXksIHdlIGZsYXR0ZW4gdGhlIHdob2xlXG4vLyB0aGluZyB3aXRoIEFycmF5LnByb3RvdHlwZS5jb25jYXQuIEl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgb25seSAxLWxldmVsIGRlZXBcbi8vIGJlY2F1c2UgZnVuY3Rpb25hbCBjb21wb25lbnRzIGFscmVhZHkgbm9ybWFsaXplIHRoZWlyIG93biBjaGlsZHJlbi5cbmZ1bmN0aW9uIHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgY2hpbGRyZW4pXG4gICAgfVxuICB9XG4gIHJldHVybiBjaGlsZHJlblxufVxuXG4vLyAyLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb25zdHJ1Y3RzIHRoYXQgYWx3YXlzIGdlbmVyYXRlZCBuZXN0ZWQgQXJyYXlzLFxuLy8gZS5nLiA8dGVtcGxhdGU+LCA8c2xvdD4sIHYtZm9yLCBvciB3aGVuIHRoZSBjaGlsZHJlbiBpcyBwcm92aWRlZCBieSB1c2VyXG4vLyB3aXRoIGhhbmQtd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zIC8gSlNYLiBJbiBzdWNoIGNhc2VzIGEgZnVsbCBub3JtYWxpemF0aW9uXG4vLyBpcyBuZWVkZWQgdG8gY2F0ZXIgdG8gYWxsIHBvc3NpYmxlIHR5cGVzIG9mIGNoaWxkcmVuIHZhbHVlcy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICByZXR1cm4gaXNQcmltaXRpdmUoY2hpbGRyZW4pXG4gICAgPyBbY3JlYXRlVGV4dFZOb2RlKGNoaWxkcmVuKV1cbiAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICA/IG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oY2hpbGRyZW4pXG4gICAgICA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBpc1RleHROb2RlIChub2RlKSB7XG4gIHJldHVybiBpc0RlZihub2RlKSAmJiBpc0RlZihub2RlLnRleHQpICYmIGlzRmFsc2Uobm9kZS5pc0NvbW1lbnQpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4gKGNoaWxkcmVuLCBuZXN0ZWRJbmRleCkge1xuICB2YXIgcmVzID0gW107XG4gIHZhciBpLCBjLCBsYXN0SW5kZXgsIGxhc3Q7XG4gIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBjaGlsZHJlbltpXTtcbiAgICBpZiAoaXNVbmRlZihjKSB8fCB0eXBlb2YgYyA9PT0gJ2Jvb2xlYW4nKSB7IGNvbnRpbnVlIH1cbiAgICBsYXN0SW5kZXggPSByZXMubGVuZ3RoIC0gMTtcbiAgICBsYXN0ID0gcmVzW2xhc3RJbmRleF07XG4gICAgLy8gIG5lc3RlZFxuICAgIGlmIChBcnJheS5pc0FycmF5KGMpKSB7XG4gICAgICBpZiAoYy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGMgPSBub3JtYWxpemVBcnJheUNoaWxkcmVuKGMsICgobmVzdGVkSW5kZXggfHwgJycpICsgXCJfXCIgKyBpKSk7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgaWYgKGlzVGV4dE5vZGUoY1swXSkgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIChjWzBdKS50ZXh0KTtcbiAgICAgICAgICBjLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBjKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKGMpKSB7XG4gICAgICBpZiAoaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBTU1IgaHlkcmF0aW9uIGJlY2F1c2UgdGV4dCBub2RlcyBhcmVcbiAgICAgICAgLy8gZXNzZW50aWFsbHkgbWVyZ2VkIHdoZW4gcmVuZGVyZWQgdG8gSFRNTCBzdHJpbmdzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMpO1xuICAgICAgfSBlbHNlIGlmIChjICE9PSAnJykge1xuICAgICAgICAvLyBjb252ZXJ0IHByaW1pdGl2ZSB0byB2bm9kZVxuICAgICAgICByZXMucHVzaChjcmVhdGVUZXh0Vk5vZGUoYykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNUZXh0Tm9kZShjKSAmJiBpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYy50ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlZmF1bHQga2V5IGZvciBuZXN0ZWQgYXJyYXkgY2hpbGRyZW4gKGxpa2VseSBnZW5lcmF0ZWQgYnkgdi1mb3IpXG4gICAgICAgIGlmIChpc1RydWUoY2hpbGRyZW4uX2lzVkxpc3QpICYmXG4gICAgICAgICAgaXNEZWYoYy50YWcpICYmXG4gICAgICAgICAgaXNVbmRlZihjLmtleSkgJiZcbiAgICAgICAgICBpc0RlZihuZXN0ZWRJbmRleCkpIHtcbiAgICAgICAgICBjLmtleSA9IFwiX192bGlzdFwiICsgbmVzdGVkSW5kZXggKyBcIl9cIiArIGkgKyBcIl9fXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRQcm92aWRlICh2bSkge1xuICB2YXIgcHJvdmlkZSA9IHZtLiRvcHRpb25zLnByb3ZpZGU7XG4gIGlmIChwcm92aWRlKSB7XG4gICAgdm0uX3Byb3ZpZGVkID0gdHlwZW9mIHByb3ZpZGUgPT09ICdmdW5jdGlvbidcbiAgICAgID8gcHJvdmlkZS5jYWxsKHZtKVxuICAgICAgOiBwcm92aWRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRJbmplY3Rpb25zICh2bSkge1xuICB2YXIgcmVzdWx0ID0gcmVzb2x2ZUluamVjdCh2bS4kb3B0aW9ucy5pbmplY3QsIHZtKTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGFuIGluamVjdGVkIHZhbHVlIGRpcmVjdGx5IHNpbmNlIHRoZSBjaGFuZ2VzIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcHJvdmlkZWQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiaW5qZWN0aW9uIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCBrZXksIHJlc3VsdFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUluamVjdCAoaW5qZWN0LCB2bSkge1xuICBpZiAoaW5qZWN0KSB7XG4gICAgLy8gaW5qZWN0IGlzIDphbnkgYmVjYXVzZSBmbG93IGlzIG5vdCBzbWFydCBlbm91Z2ggdG8gZmlndXJlIG91dCBjYWNoZWRcbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgICAgPyBSZWZsZWN0Lm93bktleXMoaW5qZWN0KVxuICAgICAgOiBPYmplY3Qua2V5cyhpbmplY3QpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIC8vICM2NTc0IGluIGNhc2UgdGhlIGluamVjdCBvYmplY3QgaXMgb2JzZXJ2ZWQuLi5cbiAgICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7IGNvbnRpbnVlIH1cbiAgICAgIHZhciBwcm92aWRlS2V5ID0gaW5qZWN0W2tleV0uZnJvbTtcbiAgICAgIHZhciBzb3VyY2UgPSB2bTtcbiAgICAgIHdoaWxlIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5fcHJvdmlkZWQgJiYgaGFzT3duKHNvdXJjZS5fcHJvdmlkZWQsIHByb3ZpZGVLZXkpKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2UuX3Byb3ZpZGVkW3Byb3ZpZGVLZXldO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgc291cmNlID0gc291cmNlLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIGluamVjdFtrZXldKSB7XG4gICAgICAgICAgdmFyIHByb3ZpZGVEZWZhdWx0ID0gaW5qZWN0W2tleV0uZGVmYXVsdDtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHR5cGVvZiBwcm92aWRlRGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBwcm92aWRlRGVmYXVsdC5jYWxsKHZtKVxuICAgICAgICAgICAgOiBwcm92aWRlRGVmYXVsdDtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybigoXCJJbmplY3Rpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIG5vdCBmb3VuZFwiKSwgdm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyByYXcgY2hpbGRyZW4gVk5vZGVzIGludG8gYSBzbG90IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVNsb3RzIChcbiAgY2hpbGRyZW4sXG4gIGNvbnRleHRcbikge1xuICBpZiAoIWNoaWxkcmVuIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICB2YXIgc2xvdHMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICB2YXIgZGF0YSA9IGNoaWxkLmRhdGE7XG4gICAgLy8gcmVtb3ZlIHNsb3QgYXR0cmlidXRlIGlmIHRoZSBub2RlIGlzIHJlc29sdmVkIGFzIGEgVnVlIHNsb3Qgbm9kZVxuICAgIGlmIChkYXRhICYmIGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5zbG90KSB7XG4gICAgICBkZWxldGUgZGF0YS5hdHRycy5zbG90O1xuICAgIH1cbiAgICAvLyBuYW1lZCBzbG90cyBzaG91bGQgb25seSBiZSByZXNwZWN0ZWQgaWYgdGhlIHZub2RlIHdhcyByZW5kZXJlZCBpbiB0aGVcbiAgICAvLyBzYW1lIGNvbnRleHQuXG4gICAgaWYgKChjaGlsZC5jb250ZXh0ID09PSBjb250ZXh0IHx8IGNoaWxkLmZuQ29udGV4dCA9PT0gY29udGV4dCkgJiZcbiAgICAgIGRhdGEgJiYgZGF0YS5zbG90ICE9IG51bGxcbiAgICApIHtcbiAgICAgIHZhciBuYW1lID0gZGF0YS5zbG90O1xuICAgICAgdmFyIHNsb3QgPSAoc2xvdHNbbmFtZV0gfHwgKHNsb3RzW25hbWVdID0gW10pKTtcbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgc2xvdC5wdXNoLmFwcGx5KHNsb3QsIGNoaWxkLmNoaWxkcmVuIHx8IFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsb3QucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIChzbG90cy5kZWZhdWx0IHx8IChzbG90cy5kZWZhdWx0ID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH1cbiAgLy8gaWdub3JlIHNsb3RzIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgIGRlbGV0ZSBzbG90c1tuYW1lJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2xvdHNcbn1cblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdHMgKFxuICBzbG90cyxcbiAgbm9ybWFsU2xvdHMsXG4gIHByZXZTbG90c1xuKSB7XG4gIHZhciByZXM7XG4gIHZhciBoYXNOb3JtYWxTbG90cyA9IE9iamVjdC5rZXlzKG5vcm1hbFNsb3RzKS5sZW5ndGggPiAwO1xuICB2YXIgaXNTdGFibGUgPSBzbG90cyA/ICEhc2xvdHMuJHN0YWJsZSA6ICFoYXNOb3JtYWxTbG90cztcbiAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG4gIGlmICghc2xvdHMpIHtcbiAgICByZXMgPSB7fTtcbiAgfSBlbHNlIGlmIChzbG90cy5fbm9ybWFsaXplZCkge1xuICAgIC8vIGZhc3QgcGF0aCAxOiBjaGlsZCBjb21wb25lbnQgcmUtcmVuZGVyIG9ubHksIHBhcmVudCBkaWQgbm90IGNoYW5nZVxuICAgIHJldHVybiBzbG90cy5fbm9ybWFsaXplZFxuICB9IGVsc2UgaWYgKFxuICAgIGlzU3RhYmxlICYmXG4gICAgcHJldlNsb3RzICYmXG4gICAgcHJldlNsb3RzICE9PSBlbXB0eU9iamVjdCAmJlxuICAgIGtleSA9PT0gcHJldlNsb3RzLiRrZXkgJiZcbiAgICAhaGFzTm9ybWFsU2xvdHMgJiZcbiAgICAhcHJldlNsb3RzLiRoYXNOb3JtYWxcbiAgKSB7XG4gICAgLy8gZmFzdCBwYXRoIDI6IHN0YWJsZSBzY29wZWQgc2xvdHMgdy8gbm8gbm9ybWFsIHNsb3RzIHRvIHByb3h5LFxuICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgIHJldHVybiBwcmV2U2xvdHNcbiAgfSBlbHNlIHtcbiAgICByZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkkMSBpbiBzbG90cykge1xuICAgICAgaWYgKHNsb3RzW2tleSQxXSAmJiBrZXkkMVswXSAhPT0gJyQnKSB7XG4gICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZXhwb3NlIG5vcm1hbCBzbG90cyBvbiBzY29wZWRTbG90c1xuICBmb3IgKHZhciBrZXkkMiBpbiBub3JtYWxTbG90cykge1xuICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgIHJlc1trZXkkMl0gPSBwcm94eU5vcm1hbFNsb3Qobm9ybWFsU2xvdHMsIGtleSQyKTtcbiAgICB9XG4gIH1cbiAgLy8gYXZvcmlheiBzZWVtcyB0byBtb2NrIGEgbm9uLWV4dGVuc2libGUgJHNjb3BlZFNsb3RzIG9iamVjdFxuICAvLyBhbmQgd2hlbiB0aGF0IGlzIHBhc3NlZCBkb3duIHRoaXMgd291bGQgY2F1c2UgYW4gZXJyb3JcbiAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgKHNsb3RzKS5fbm9ybWFsaXplZCA9IHJlcztcbiAgfVxuICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgZGVmKHJlcywgJyRrZXknLCBrZXkpO1xuICBkZWYocmVzLCAnJGhhc05vcm1hbCcsIGhhc05vcm1hbFNsb3RzKTtcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gIHZhciBub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID8gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGZuKHt9KTtcbiAgICByZXMgPSByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzKVxuICAgICAgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgIDogbm9ybWFsaXplQ2hpbGRyZW4ocmVzKTtcbiAgICByZXR1cm4gcmVzICYmIChcbiAgICAgIHJlcy5sZW5ndGggPT09IDAgfHxcbiAgICAgIChyZXMubGVuZ3RoID09PSAxICYmIHJlc1swXS5pc0NvbW1lbnQpIC8vICM5NjU4XG4gICAgKSA/IHVuZGVmaW5lZFxuICAgICAgOiByZXNcbiAgfTtcbiAgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gIC8vIGNvbXBpbGVkIGFzIGEgc2NvcGVkIHNsb3QsIHJlbmRlciBmbiB1c2VycyB3b3VsZCBleHBlY3QgaXQgdG8gYmUgcHJlc2VudFxuICAvLyBvbiB0aGlzLiRzbG90cyBiZWNhdXNlIHRoZSB1c2FnZSBpcyBzZW1hbnRpY2FsbHkgYSBub3JtYWwgc2xvdC5cbiAgaWYgKGZuLnByb3h5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbFNsb3RzLCBrZXksIHtcbiAgICAgIGdldDogbm9ybWFsaXplZCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZFxufVxuXG5mdW5jdGlvbiBwcm94eU5vcm1hbFNsb3Qoc2xvdHMsIGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2xvdHNba2V5XTsgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKGkgKyAxLCBpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIGlmIChoYXNTeW1ib2wgJiYgdmFsW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgIHJldCA9IFtdO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdmFsW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIHJldC5wdXNoKHJlbmRlcihyZXN1bHQudmFsdWUsIHJldC5sZW5ndGgpKTtcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgIHJldCA9IG5ldyBBcnJheShrZXlzLmxlbmd0aCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtrZXldLCBrZXksIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWlzRGVmKHJldCkpIHtcbiAgICByZXQgPSBbXTtcbiAgfVxuICAocmV0KS5faXNWTGlzdCA9IHRydWU7XG4gIHJldHVybiByZXRcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyA8c2xvdD5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2xvdCAoXG4gIG5hbWUsXG4gIGZhbGxiYWNrLFxuICBwcm9wcyxcbiAgYmluZE9iamVjdFxuKSB7XG4gIHZhciBzY29wZWRTbG90Rm4gPSB0aGlzLiRzY29wZWRTbG90c1tuYW1lXTtcbiAgdmFyIG5vZGVzO1xuICBpZiAoc2NvcGVkU2xvdEZuKSB7IC8vIHNjb3BlZCBzbG90XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBpZiAoYmluZE9iamVjdCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzT2JqZWN0KGJpbmRPYmplY3QpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ3Nsb3Qgdi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QnLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHByb3BzID0gZXh0ZW5kKGV4dGVuZCh7fSwgYmluZE9iamVjdCksIHByb3BzKTtcbiAgICB9XG4gICAgbm9kZXMgPSBzY29wZWRTbG90Rm4ocHJvcHMpIHx8IGZhbGxiYWNrO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzID0gdGhpcy4kc2xvdHNbbmFtZV0gfHwgZmFsbGJhY2s7XG4gIH1cblxuICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHsgc2xvdDogdGFyZ2V0IH0sIG5vZGVzKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2Rlc1xuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICovXG5mdW5jdGlvbiByZXNvbHZlRmlsdGVyIChpZCkge1xuICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0tleU5vdE1hdGNoIChleHBlY3QsIGFjdHVhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3QpKSB7XG4gICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsXG4gIH1cbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgY2hlY2tpbmcga2V5Q29kZXMgZnJvbSBjb25maWcuXG4gKiBleHBvc2VkIGFzIFZ1ZS5wcm90b3R5cGUuX2tcbiAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICovXG5mdW5jdGlvbiBjaGVja0tleUNvZGVzIChcbiAgZXZlbnRLZXlDb2RlLFxuICBrZXksXG4gIGJ1aWx0SW5LZXlDb2RlLFxuICBldmVudEtleU5hbWUsXG4gIGJ1aWx0SW5LZXlOYW1lXG4pIHtcbiAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcbiAgaWYgKGJ1aWx0SW5LZXlOYW1lICYmIGV2ZW50S2V5TmFtZSAmJiAhY29uZmlnLmtleUNvZGVzW2tleV0pIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKVxuICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChtYXBwZWRLZXlDb2RlLCBldmVudEtleUNvZGUpXG4gIH0gZWxzZSBpZiAoZXZlbnRLZXlOYW1lKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICovXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxuICBkYXRhLFxuICB0YWcsXG4gIHZhbHVlLFxuICBhc1Byb3AsXG4gIGlzU3luY1xuKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCBvciBBcnJheSB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoO1xuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSA9PT0gJ2NsYXNzJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoa2V5KVxuICAgICAgICApIHtcbiAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy50eXBlO1xuICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgPyBkYXRhLmRvbVByb3BzIHx8IChkYXRhLmRvbVByb3BzID0ge30pXG4gICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbWVsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICBoYXNoW2tleV0gPSB2YWx1ZVtrZXldO1xuXG4gICAgICAgICAgaWYgKGlzU3luYykge1xuICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICAgICAgICAgIG9uWyhcInVwZGF0ZTpcIiArIGtleSldID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgbG9vcCgga2V5ICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxuICovXG5mdW5jdGlvbiByZW5kZXJTdGF0aWMgKFxuICBpbmRleCxcbiAgaXNJbkZvclxuKSB7XG4gIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XG4gIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTtcbiAgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxuICBpZiAodHJlZSAmJiAhaXNJbkZvcikge1xuICAgIHJldHVybiB0cmVlXG4gIH1cbiAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICB0cmVlID0gY2FjaGVkW2luZGV4XSA9IHRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2luZGV4XS5jYWxsKFxuICAgIHRoaXMuX3JlbmRlclByb3h5LFxuICAgIG51bGwsXG4gICAgdGhpcyAvLyBmb3IgcmVuZGVyIGZucyBnZW5lcmF0ZWQgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IHRlbXBsYXRlc1xuICApO1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fc3RhdGljX19cIiArIGluZGV4KSwgZmFsc2UpO1xuICByZXR1cm4gdHJlZVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciB2LW9uY2UuXG4gKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAqL1xuZnVuY3Rpb24gbWFya09uY2UgKFxuICB0cmVlLFxuICBpbmRleCxcbiAga2V5XG4pIHtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX29uY2VfX1wiICsgaW5kZXggKyAoa2V5ID8gKFwiX1wiICsga2V5KSA6IFwiXCIpKSwgdHJ1ZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxuICB0cmVlLFxuICBrZXksXG4gIGlzT25jZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHJlZVtpXSAmJiB0eXBlb2YgdHJlZVtpXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwgKGtleSArIFwiX1wiICsgaSksIGlzT25jZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljTm9kZSAobm9kZSwga2V5LCBpc09uY2UpIHtcbiAgbm9kZS5pc1N0YXRpYyA9IHRydWU7XG4gIG5vZGUua2V5ID0ga2V5O1xuICBub2RlLmlzT25jZSA9IGlzT25jZTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3Ytb24gd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvbiA9IGRhdGEub24gPSBkYXRhLm9uID8gZXh0ZW5kKHt9LCBkYXRhLm9uKSA6IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgIHZhciBvdXJzID0gdmFsdWVba2V5XTtcbiAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICBmbnMsIC8vIHNlZSBmbG93L3Zub2RlXG4gIHJlcyxcbiAgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gIGhhc0R5bmFtaWNLZXlzLFxuICBjb250ZW50SGFzaEtleVxuKSB7XG4gIHJlcyA9IHJlcyB8fCB7ICRzdGFibGU6ICFoYXNEeW5hbWljS2V5cyB9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzbG90ID0gZm5zW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3QpKSB7XG4gICAgICByZXNvbHZlU2NvcGVkU2xvdHMoc2xvdCwgcmVzLCBoYXNEeW5hbWljS2V5cyk7XG4gICAgfSBlbHNlIGlmIChzbG90KSB7XG4gICAgICAvLyBtYXJrZXIgZm9yIHJldmVyc2UgcHJveHlpbmcgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICAgIGlmIChzbG90LnByb3h5KSB7XG4gICAgICAgIHNsb3QuZm4ucHJveHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgfVxuICB9XG4gIGlmIChjb250ZW50SGFzaEtleSkge1xuICAgIChyZXMpLiRrZXkgPSBjb250ZW50SGFzaEtleTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kRHluYW1pY0tleXMgKGJhc2VPYmosIHZhbHVlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciBrZXkgPSB2YWx1ZXNbaV07XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSkge1xuICAgICAgYmFzZU9ialt2YWx1ZXNbaV1dID0gdmFsdWVzW2kgKyAxXTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIC8vIG51bGwgaXMgYSBzcGVjaWFsIHZhbHVlIGZvciBleHBsaWNpdGx5IHJlbW92aW5nIGEgYmluZGluZ1xuICAgICAgd2FybihcbiAgICAgICAgKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXkpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYmFzZU9ialxufVxuXG4vLyBoZWxwZXIgdG8gZHluYW1pY2FsbHkgYXBwZW5kIG1vZGlmaWVyIHJ1bnRpbWUgbWFya2VycyB0byBldmVudCBuYW1lcy5cbi8vIGVuc3VyZSBvbmx5IGFwcGVuZCB3aGVuIHZhbHVlIGlzIGFscmVhZHkgc3RyaW5nLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBjYXN0XG4vLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG5mdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIgKHZhbHVlLCBzeW1ib2wpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzeW1ib2wgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XG4gIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICB0YXJnZXQuX24gPSB0b051bWJlcjtcbiAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XG4gIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gIHRhcmdldC5fdCA9IHJlbmRlclNsb3Q7XG4gIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XG4gIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgdGFyZ2V0Ll9tID0gcmVuZGVyU3RhdGljO1xuICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xuICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICB0YXJnZXQuX2IgPSBiaW5kT2JqZWN0UHJvcHM7XG4gIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgdGFyZ2V0Ll91ID0gcmVzb2x2ZVNjb3BlZFNsb3RzO1xuICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xuICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gIHRhcmdldC5fcCA9IHByZXBlbmRNb2RpZmllcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IChcbiAgZGF0YSxcbiAgcHJvcHMsXG4gIGNoaWxkcmVuLFxuICBwYXJlbnQsXG4gIEN0b3Jcbikge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgLy8gZW5zdXJlIHRoZSBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXG4gIHZhciBjb250ZXh0Vm07XG4gIGlmIChoYXNPd24ocGFyZW50LCAnX3VpZCcpKSB7XG4gICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGNvbnRleHRWbS5fb3JpZ2luYWwgPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNvbnRleHQgdm0gcGFzc2VkIGluIGlzIGEgZnVuY3Rpb25hbCBjb250ZXh0IGFzIHdlbGwuXG4gICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBhYmxlIHRvIGdldCBhIGhvbGQgdG8gdGhlXG4gICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxuICAgIGNvbnRleHRWbSA9IHBhcmVudDtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICB9XG4gIHZhciBpc0NvbXBpbGVkID0gaXNUcnVlKG9wdGlvbnMuX2NvbXBpbGVkKTtcbiAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XG5cbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmxpc3RlbmVycyA9IGRhdGEub24gfHwgZW1wdHlPYmplY3Q7XG4gIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG4gIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzJDEuJHNsb3RzKSB7XG4gICAgICBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdGhpcyQxLiRzbG90cyA9IHJlc29sdmVTbG90cyhjaGlsZHJlbiwgcGFyZW50KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMkMS4kc2xvdHNcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywgKHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLnNsb3RzKCkpXG4gICAgfVxuICB9KSk7XG5cbiAgLy8gc3VwcG9ydCBmb3IgY29tcGlsZWQgZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoaXNDb21waWxlZCkge1xuICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIHByZS1yZXNvbHZlIHNsb3RzIGZvciByZW5kZXJTbG90KClcbiAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcbiAgICB0aGlzLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuJHNsb3RzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pO1xuICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB2bm9kZS5mblNjb3BlSWQgPSBvcHRpb25zLl9zY29wZUlkO1xuICAgICAgICB2bm9kZS5mbkNvbnRleHQgPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTsgfTtcbiAgfVxufVxuXG5pbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgcHJvcHNEYXRhLFxuICBkYXRhLFxuICBjb250ZXh0Vm0sXG4gIGNoaWxkcmVuXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgcHJvcE9wdGlvbnMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSB8fCBlbXB0eU9iamVjdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0RlZihkYXRhLmF0dHJzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLmF0dHJzKTsgfVxuICAgIGlmIChpc0RlZihkYXRhLnByb3BzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTsgfVxuICB9XG5cbiAgdmFyIHJlbmRlckNvbnRleHQgPSBuZXcgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQoXG4gICAgZGF0YSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0Vm0sXG4gICAgQ3RvclxuICApO1xuXG4gIHZhciB2bm9kZSA9IG9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCwgcmVuZGVyQ29udGV4dC5fYywgcmVuZGVyQ29udGV4dCk7XG5cbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm4gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgIHZhciByZXMgPSBuZXcgQXJyYXkodm5vZGVzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gIC8vICM3ODE3IGNsb25lIG5vZGUgYmVmb3JlIHNldHRpbmcgZm5Db250ZXh0LCBvdGhlcndpc2UgaWYgdGhlIG5vZGUgaXMgcmV1c2VkXG4gIC8vIChlLmcuIGl0IHdhcyBmcm9tIGEgY2FjaGVkIG5vcm1hbCBzbG90KSB0aGUgZm5Db250ZXh0IGNhdXNlcyBuYW1lZCBzbG90c1xuICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgdmFyIGNsb25lID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gIGNsb25lLmZuQ29udGV4dCA9IGNvbnRleHRWbTtcbiAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAoY2xvbmUuZGV2dG9vbHNNZXRhID0gY2xvbmUuZGV2dG9vbHNNZXRhIHx8IHt9KS5yZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dDtcbiAgfVxuICBpZiAoZGF0YS5zbG90KSB7XG4gICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gIH1cbiAgcmV0dXJuIGNsb25lXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGlubGluZSBob29rcyB0byBiZSBpbnZva2VkIG9uIGNvbXBvbmVudCBWTm9kZXMgZHVyaW5nIHBhdGNoXG52YXIgY29tcG9uZW50Vk5vZGVIb29rcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIGlmIChcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXG4gICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICkge1xuICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgIHZub2RlLFxuICAgICAgICBhY3RpdmVJbnN0YW5jZVxuICAgICAgKTtcbiAgICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gICAgfVxuICB9LFxuXG4gIHByZXBhdGNoOiBmdW5jdGlvbiBwcmVwYXRjaCAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgdXBkYXRlQ2hpbGRDb21wb25lbnQoXG4gICAgICBjaGlsZCxcbiAgICAgIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICBvcHRpb25zLmxpc3RlbmVycywgLy8gdXBkYXRlZCBsaXN0ZW5lcnNcbiAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQgKHZub2RlKSB7XG4gICAgdmFyIGNvbnRleHQgPSB2bm9kZS5jb250ZXh0O1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCkge1xuICAgICAgY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ21vdW50ZWQnKTtcbiAgICB9XG4gICAgaWYgKHZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICBpZiAoY29udGV4dC5faXNNb3VudGVkKSB7XG4gICAgICAgIC8vIHZ1ZS1yb3V0ZXIjMTIxMlxuICAgICAgICAvLyBEdXJpbmcgdXBkYXRlcywgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCdzIGNoaWxkIGNvbXBvbmVudHMgbWF5XG4gICAgICAgIC8vIGNoYW5nZSwgc28gZGlyZWN0bHkgd2Fsa2luZyB0aGUgdHJlZSBoZXJlIG1heSBjYWxsIGFjdGl2YXRlZCBob29rc1xuICAgICAgICAvLyBvbiBpbmNvcnJlY3QgY2hpbGRyZW4uIEluc3RlYWQgd2UgcHVzaCB0aGVtIGludG8gYSBxdWV1ZSB3aGljaCB3aWxsXG4gICAgICAgIC8vIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgd2hvbGUgcGF0Y2ggcHJvY2VzcyBlbmRlZC5cbiAgICAgICAgcXVldWVBY3RpdmF0ZWRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95ICh2bm9kZSkge1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkKSB7XG4gICAgICBpZiAoIXZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBob29rc1RvTWVyZ2UgPSBPYmplY3Qua2V5cyhjb21wb25lbnRWTm9kZUhvb2tzKTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgZGF0YSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHRhZ1xuKSB7XG4gIGlmIChpc1VuZGVmKEN0b3IpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgYmFzZUN0b3IgPSBjb250ZXh0LiRvcHRpb25zLl9iYXNlO1xuXG4gIC8vIHBsYWluIG9wdGlvbnMgb2JqZWN0OiB0dXJuIGl0IGludG8gYSBjb25zdHJ1Y3RvclxuICBpZiAoaXNPYmplY3QoQ3RvcikpIHtcbiAgICBDdG9yID0gYmFzZUN0b3IuZXh0ZW5kKEN0b3IpO1xuICB9XG5cbiAgLy8gaWYgYXQgdGhpcyBzdGFnZSBpdCdzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIGFuIGFzeW5jIGNvbXBvbmVudCBmYWN0b3J5LFxuICAvLyByZWplY3QuXG4gIGlmICh0eXBlb2YgQ3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKChcIkludmFsaWQgQ29tcG9uZW50IGRlZmluaXRpb246IFwiICsgKFN0cmluZyhDdG9yKSkpLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBhc3luYyBjb21wb25lbnRcbiAgdmFyIGFzeW5jRmFjdG9yeTtcbiAgaWYgKGlzVW5kZWYoQ3Rvci5jaWQpKSB7XG4gICAgYXN5bmNGYWN0b3J5ID0gQ3RvcjtcbiAgICBDdG9yID0gcmVzb2x2ZUFzeW5jQ29tcG9uZW50KGFzeW5jRmFjdG9yeSwgYmFzZUN0b3IpO1xuICAgIGlmIChDdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIG5vZGUgZm9yIGFzeW5jIGNvbXBvbmVudCwgd2hpY2ggaXMgcmVuZGVyZWRcbiAgICAgIC8vIGFzIGEgY29tbWVudCBub2RlIGJ1dCBwcmVzZXJ2ZXMgYWxsIHRoZSByYXcgaW5mb3JtYXRpb24gZm9yIHRoZSBub2RlLlxuICAgICAgLy8gdGhlIGluZm9ybWF0aW9uIHdpbGwgYmUgdXNlZCBmb3IgYXN5bmMgc2VydmVyLXJlbmRlcmluZyBhbmQgaHlkcmF0aW9uLlxuICAgICAgcmV0dXJuIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIoXG4gICAgICAgIGFzeW5jRmFjdG9yeSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHRhZ1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gIC8vIHJlc29sdmUgY29uc3RydWN0b3Igb3B0aW9ucyBpbiBjYXNlIGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQgYWZ0ZXJcbiAgLy8gY29tcG9uZW50IGNvbnN0cnVjdG9yIGNyZWF0aW9uXG4gIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvcik7XG5cbiAgLy8gdHJhbnNmb3JtIGNvbXBvbmVudCB2LW1vZGVsIGRhdGEgaW50byBwcm9wcyAmIGV2ZW50c1xuICBpZiAoaXNEZWYoZGF0YS5tb2RlbCkpIHtcbiAgICB0cmFuc2Zvcm1Nb2RlbChDdG9yLm9wdGlvbnMsIGRhdGEpO1xuICB9XG5cbiAgLy8gZXh0cmFjdCBwcm9wc1xuICB2YXIgcHJvcHNEYXRhID0gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCB0YWcpO1xuXG4gIC8vIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmZ1bmN0aW9uYWwpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcbiAgfVxuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzLCBzaW5jZSB0aGVzZSBuZWVkcyB0byBiZSB0cmVhdGVkIGFzXG4gIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG4gIHZhciBsaXN0ZW5lcnMgPSBkYXRhLm9uO1xuICAvLyByZXBsYWNlIHdpdGggbGlzdGVuZXJzIHdpdGggLm5hdGl2ZSBtb2RpZmllclxuICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cbiAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuYWJzdHJhY3QpKSB7XG4gICAgLy8gYWJzdHJhY3QgY29tcG9uZW50cyBkbyBub3Qga2VlcCBhbnl0aGluZ1xuICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XG5cbiAgICAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgZGF0YSA9IHt9O1xuICAgIGlmIChzbG90KSB7XG4gICAgICBkYXRhLnNsb3QgPSBzbG90O1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbGwgY29tcG9uZW50IG1hbmFnZW1lbnQgaG9va3Mgb250byB0aGUgcGxhY2Vob2xkZXIgbm9kZVxuICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7XG5cbiAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgdm5vZGVcbiAgdmFyIG5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCB0YWc7XG4gIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAoXCJ2dWUtY29tcG9uZW50LVwiICsgKEN0b3IuY2lkKSArIChuYW1lID8gKFwiLVwiICsgbmFtZSkgOiAnJykpLFxuICAgIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsXG4gICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcbiAgICBhc3luY0ZhY3RvcnlcbiAgKTtcblxuICByZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSAoXG4gIHZub2RlLCAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3RcbiAgcGFyZW50IC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuKSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIF9pc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIHBhcmVudDogcGFyZW50XG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgfVxuICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50SG9va3MgKGRhdGEpIHtcbiAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGhvb2tzVG9NZXJnZVtpXTtcbiAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgIHZhciB0b01lcmdlID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICAgIGlmIChleGlzdGluZyAhPT0gdG9NZXJnZSAmJiAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9tZXJnZWQpKSB7XG4gICAgICBob29rc1trZXldID0gZXhpc3RpbmcgPyBtZXJnZUhvb2skMSh0b01lcmdlLCBleGlzdGluZykgOiB0b01lcmdlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUhvb2skMSAoZjEsIGYyKSB7XG4gIHZhciBtZXJnZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIGZsb3cgY29tcGxhaW5zIGFib3V0IGV4dHJhIGFyZ3Mgd2hpY2ggaXMgd2h5IHdlIHVzZSBhbnlcbiAgICBmMShhLCBiKTtcbiAgICBmMihhLCBiKTtcbiAgfTtcbiAgbWVyZ2VkLl9tZXJnZWQgPSB0cnVlO1xuICByZXR1cm4gbWVyZ2VkXG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgOyhkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pKVtwcm9wXSA9IGRhdGEubW9kZWwudmFsdWU7XG4gIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gIHZhciBleGlzdGluZyA9IG9uW2V2ZW50XTtcbiAgdmFyIGNhbGxiYWNrID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgaWYgKGlzRGVmKGV4aXN0aW5nKSkge1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICAgID8gZXhpc3RpbmcuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xXG4gICAgICAgIDogZXhpc3RpbmcgIT09IGNhbGxiYWNrXG4gICAgKSB7XG4gICAgICBvbltldmVudF0gPSBbY2FsbGJhY2tdLmNvbmNhdChleGlzdGluZyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9uW2V2ZW50XSA9IGNhbGxiYWNrO1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbi8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZSxcbiAgYWx3YXlzTm9ybWFsaXplXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gQUxXQVlTX05PUk1BTElaRTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGVcbikge1xuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIkF2b2lkIHVzaW5nIG9ic2VydmVkIGRhdGEgb2JqZWN0IGFzIHZub2RlIGRhdGE6IFwiICsgKEpTT04uc3RyaW5naWZ5KGRhdGEpKSArIFwiXFxuXCIgK1xuICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXG4gICAgICBjb250ZXh0XG4gICAgKTtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gb2JqZWN0IHN5bnRheCBpbiB2LWJpbmRcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgdGFnID0gZGF0YS5pcztcbiAgfVxuICBpZiAoIXRhZykge1xuICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcbiAgKSB7XG4gICAge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICtcbiAgICAgICAgJ3VzZSBzdHJpbmcvbnVtYmVyIHZhbHVlIGluc3RlYWQuJyxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcbiAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBTSU1QTEVfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH1cbiAgdmFyIHZub2RlLCBucztcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3I7XG4gICAgbnMgPSAoY29udGV4dC4kdm5vZGUgJiYgY29udGV4dC4kdm5vZGUubnMpIHx8IGNvbmZpZy5nZXRUYWdOYW1lc3BhY2UodGFnKTtcbiAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgICAgLy8gcGxhdGZvcm0gYnVpbHQtaW4gZWxlbWVudHNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEubmF0aXZlT24pKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiVGhlIC5uYXRpdmUgbW9kaWZpZXIgZm9yIHYtb24gaXMgb25seSB2YWxpZCBvbiBjb21wb25lbnRzIGJ1dCBpdCB3YXMgdXNlZCBvbiA8XCIgKyB0YWcgKyBcIj4uXCIpLFxuICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICBjb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUodGFnKSwgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoKCFkYXRhIHx8ICFkYXRhLnByZSkgJiYgaXNEZWYoQ3RvciA9IHJlc29sdmVBc3NldChjb250ZXh0LiRvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpKSB7XG4gICAgICAvLyBjb21wb25lbnRcbiAgICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KEN0b3IsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuLCB0YWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1bmtub3duIG9yIHVubGlzdGVkIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAgICAgIC8vIGNoZWNrIGF0IHJ1bnRpbWUgYmVjYXVzZSBpdCBtYXkgZ2V0IGFzc2lnbmVkIGEgbmFtZXNwYWNlIHdoZW4gaXRzXG4gICAgICAvLyBwYXJlbnQgbm9ybWFsaXplcyBjaGlsZHJlblxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIHRhZywgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KHRhZywgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2UgaWYgKGlzRGVmKHZub2RlKSkge1xuICAgIGlmIChpc0RlZihucykpIHsgYXBwbHlOUyh2bm9kZSwgbnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7IHJlZ2lzdGVyRGVlcEJpbmRpbmdzKGRhdGEpOyB9XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TlMgKHZub2RlLCBucywgZm9yY2UpIHtcbiAgdm5vZGUubnMgPSBucztcbiAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gdXNlIGRlZmF1bHQgbmFtZXNwYWNlIGluc2lkZSBmb3JlaWduT2JqZWN0XG4gICAgbnMgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2UgPSB0cnVlO1xuICB9XG4gIGlmIChpc0RlZih2bm9kZS5jaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoY2hpbGQudGFnKSAmJiAoXG4gICAgICAgIGlzVW5kZWYoY2hpbGQubnMpIHx8IChpc1RydWUoZm9yY2UpICYmIGNoaWxkLnRhZyAhPT0gJ3N2ZycpKSkge1xuICAgICAgICBhcHBseU5TKGNoaWxkLCBucywgZm9yY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyByZWYgIzUzMThcbi8vIG5lY2Vzc2FyeSB0byBlbnN1cmUgcGFyZW50IHJlLXJlbmRlciB3aGVuIGRlZXAgYmluZGluZ3MgbGlrZSA6c3R5bGUgYW5kXG4vLyA6Y2xhc3MgYXJlIHVzZWQgb24gc2xvdCBub2Rlc1xuZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcbiAgaWYgKGlzT2JqZWN0KGRhdGEuc3R5bGUpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5zdHlsZSk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KGRhdGEuY2xhc3MpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5jbGFzcyk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRSZW5kZXIgKHZtKSB7XG4gIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXG4gIHZtLl9zdGF0aWNUcmVlcyA9IG51bGw7IC8vIHYtb25jZSBjYWNoZWQgdHJlZXNcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgdmFyIHBhcmVudFZub2RlID0gdm0uJHZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7IC8vIHRoZSBwbGFjZWhvbGRlciBub2RlIGluIHBhcmVudCB0cmVlXG4gIHZhciByZW5kZXJDb250ZXh0ID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuY29udGV4dDtcbiAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLCByZW5kZXJDb250ZXh0KTtcbiAgdm0uJHNjb3BlZFNsb3RzID0gZW1wdHlPYmplY3Q7XG4gIC8vIGJpbmQgdGhlIGNyZWF0ZUVsZW1lbnQgZm4gdG8gdGhpcyBpbnN0YW5jZVxuICAvLyBzbyB0aGF0IHdlIGdldCBwcm9wZXIgcmVuZGVyIGNvbnRleHQgaW5zaWRlIGl0LlxuICAvLyBhcmdzIG9yZGVyOiB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSwgYWx3YXlzTm9ybWFsaXplXG4gIC8vIGludGVybmFsIHZlcnNpb24gaXMgdXNlZCBieSByZW5kZXIgZnVuY3Rpb25zIGNvbXBpbGVkIGZyb20gdGVtcGxhdGVzXG4gIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTsgfTtcbiAgLy8gbm9ybWFsaXphdGlvbiBpcyBhbHdheXMgYXBwbGllZCBmb3IgdGhlIHB1YmxpYyB2ZXJzaW9uLCB1c2VkIGluXG4gIC8vIHVzZXItd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zLlxuICB2bS4kY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCB0cnVlKTsgfTtcblxuICAvLyAkYXR0cnMgJiAkbGlzdGVuZXJzIGFyZSBleHBvc2VkIGZvciBlYXNpZXIgSE9DIGNyZWF0aW9uLlxuICAvLyB0aGV5IG5lZWQgdG8gYmUgcmVhY3RpdmUgc28gdGhhdCBIT0NzIHVzaW5nIHRoZW0gYXJlIGFsd2F5cyB1cGRhdGVkXG4gIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkYXR0cnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRsaXN0ZW5lcnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVyTWl4aW4gKFZ1ZSkge1xuICAvLyBpbnN0YWxsIHJ1bnRpbWUgY29udmVuaWVuY2UgaGVscGVyc1xuICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBuZXh0VGljayhmbiwgdGhpcylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgdmFyIF9wYXJlbnRWbm9kZSA9IHJlZi5fcGFyZW50Vm5vZGU7XG5cbiAgICBpZiAoX3BhcmVudFZub2RlKSB7XG4gICAgICB2bS4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgX3BhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHZtLiRzbG90cyxcbiAgICAgICAgdm0uJHNjb3BlZFNsb3RzXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHNldCBwYXJlbnQgdm5vZGUuIHRoaXMgYWxsb3dzIHJlbmRlciBmdW5jdGlvbnMgdG8gaGF2ZSBhY2Nlc3NcbiAgICAvLyB0byB0aGUgZGF0YSBvbiB0aGUgcGxhY2Vob2xkZXIgbm9kZS5cbiAgICB2bS4kdm5vZGUgPSBfcGFyZW50Vm5vZGU7XG4gICAgLy8gcmVuZGVyIHNlbGZcbiAgICB2YXIgdm5vZGU7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRoZXJlJ3Mgbm8gbmVlZCB0byBtYWludGFpbiBhIHN0YWNrIGJlY2F1c2UgYWxsIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gc2VwYXJhdGVseSBmcm9tIG9uZSBhbm90aGVyLiBOZXN0ZWQgY29tcG9uZW50J3MgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IHZtO1xuICAgICAgdm5vZGUgPSByZW5kZXIuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJcIik7XG4gICAgICAvLyByZXR1cm4gZXJyb3IgcmVuZGVyIHJlc3VsdCxcbiAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJFcnJvclwiKTtcbiAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIGlmIHRoZSByZXR1cm5lZCBhcnJheSBjb250YWlucyBvbmx5IGEgc2luZ2xlIG5vZGUsIGFsbG93IGl0XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpICYmIHZub2RlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdm5vZGUgPSB2bm9kZVswXTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgJ3Nob3VsZCByZXR1cm4gYSBzaW5nbGUgcm9vdCBub2RlLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIH1cbiAgICAvLyBzZXQgcGFyZW50XG4gICAgdm5vZGUucGFyZW50ID0gX3BhcmVudFZub2RlO1xuICAgIHJldHVybiB2bm9kZVxuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW5zdXJlQ3RvciAoY29tcCwgYmFzZSkge1xuICBpZiAoXG4gICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgKGhhc1N5bWJvbCAmJiBjb21wW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdNb2R1bGUnKVxuICApIHtcbiAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICB9XG4gIHJldHVybiBpc09iamVjdChjb21wKVxuICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICA6IGNvbXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gIGZhY3RvcnksXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgbm9kZS5hc3luY0ZhY3RvcnkgPSBmYWN0b3J5O1xuICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICBmYWN0b3J5LFxuICBiYXNlQ3RvclxuKSB7XG4gIGlmIChpc1RydWUoZmFjdG9yeS5lcnJvcikgJiYgaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkuZXJyb3JDb21wXG4gIH1cblxuICBpZiAoaXNEZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5yZXNvbHZlZFxuICB9XG5cbiAgdmFyIG93bmVyID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICBpZiAob3duZXIgJiYgaXNEZWYoZmFjdG9yeS5vd25lcnMpICYmIGZhY3Rvcnkub3duZXJzLmluZGV4T2Yob3duZXIpID09PSAtMSkge1xuICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgIGZhY3Rvcnkub3duZXJzLnB1c2gob3duZXIpO1xuICB9XG5cbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgfVxuXG4gIGlmIChvd25lciAmJiAhaXNEZWYoZmFjdG9yeS5vd25lcnMpKSB7XG4gICAgdmFyIG93bmVycyA9IGZhY3Rvcnkub3duZXJzID0gW293bmVyXTtcbiAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgdmFyIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgdmFyIHRpbWVyVGltZW91dCA9IG51bGxcblxuICAgIDsob3duZXIpLiRvbignaG9vazpkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmUob3duZXJzLCBvd25lcik7IH0pO1xuXG4gICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvd25lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIChvd25lcnNbaV0pLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgICBpZiAodGltZXJMb2FkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTG9hZGluZyk7XG4gICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXJUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgLy8gY2FjaGUgcmVzb2x2ZWRcbiAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxuICAgICAgLy8gKGFzeW5jIHJlc29sdmVzIGFyZSBzaGltbWVkIGFzIHN5bmNocm9ub3VzIGR1cmluZyBTU1IpXG4gICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6IFwiICsgKFN0cmluZyhmYWN0b3J5KSkgK1xuICAgICAgICAocmVhc29uID8gKFwiXFxuUmVhc29uOiBcIiArIHJlYXNvbikgOiAnJylcbiAgICAgICk7XG4gICAgICBpZiAoaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgICAgIGZhY3RvcnkuZXJyb3IgPSB0cnVlO1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZXMgPSBmYWN0b3J5KHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMuY29tcG9uZW50KSkge1xuICAgICAgICByZXMuY29tcG9uZW50LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICBpZiAoaXNEZWYocmVzLmVycm9yKSkge1xuICAgICAgICAgIGZhY3RvcnkuZXJyb3JDb21wID0gZW5zdXJlQ3RvcihyZXMuZXJyb3IsIGJhc2VDdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMubG9hZGluZykpIHtcbiAgICAgICAgICBmYWN0b3J5LmxvYWRpbmdDb21wID0gZW5zdXJlQ3RvcihyZXMubG9hZGluZywgYmFzZUN0b3IpO1xuICAgICAgICAgIGlmIChyZXMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSAmJiBpc1VuZGVmKGZhY3RvcnkuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlcy5kZWxheSB8fCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMudGltZW91dCkpIHtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgPyAoXCJ0aW1lb3V0IChcIiArIChyZXMudGltZW91dCkgKyBcIm1zKVwiKVxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3luYyA9IGZhbHNlO1xuICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nXG4gICAgICA/IGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgICAgIDogZmFjdG9yeS5yZXNvbHZlZFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0FzeW5jUGxhY2Vob2xkZXIgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaXNDb21tZW50ICYmIG5vZGUuYXN5bmNGYWN0b3J5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZXRGaXJzdENvbXBvbmVudENoaWxkIChjaGlsZHJlbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGMpICYmIChpc0RlZihjLmNvbXBvbmVudE9wdGlvbnMpIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKSkpIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXZlbnRzICh2bSkge1xuICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdm0uX2hhc0hvb2tFdmVudCA9IGZhbHNlO1xuICAvLyBpbml0IHBhcmVudCBhdHRhY2hlZCBldmVudHNcbiAgdmFyIGxpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycyk7XG4gIH1cbn1cblxudmFyIHRhcmdldDtcblxuZnVuY3Rpb24gYWRkIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMSAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb2ZmKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChldmVudCwgZm4pIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQ7XG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgX3RhcmdldC4kb2ZmKGV2ZW50LCBvbmNlSGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXG4gIHZtLFxuICBsaXN0ZW5lcnMsXG4gIG9sZExpc3RlbmVyc1xuKSB7XG4gIHRhcmdldCA9IHZtO1xuICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIGNyZWF0ZU9uY2VIYW5kbGVyLCB2bSk7XG4gIHRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzTWl4aW4gKFZ1ZSkge1xuICB2YXIgaG9va1JFID0gL15ob29rOi87XG4gIFZ1ZS5wcm90b3R5cGUuJG9uID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2bS4kb24oZXZlbnRbaV0sIGZuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAvLyBvcHRpbWl6ZSBob29rOmV2ZW50IGNvc3QgYnkgdXNpbmcgYSBib29sZWFuIGZsYWcgbWFya2VkIGF0IHJlZ2lzdHJhdGlvblxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGhhc2ggbG9va3VwXG4gICAgICBpZiAoaG9va1JFLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgIHZtLl9oYXNIb29rRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gb24gKCkge1xuICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIG9uLmZuID0gZm47XG4gICAgdm0uJG9uKGV2ZW50LCBvbik7XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYWxsXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBhcnJheSBvZiBldmVudHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkkMSA8IGw7IGkkMSsrKSB7XG4gICAgICAgIHZtLiRvZmYoZXZlbnRbaSQxXSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghY2JzKSB7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICB2YXIgY2I7XG4gICAgdmFyIGkgPSBjYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNiID0gY2JzW2ldO1xuICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBsb3dlckNhc2VFdmVudCA9IGV2ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAobG93ZXJDYXNlRXZlbnQgIT09IGV2ZW50ICYmIHZtLl9ldmVudHNbbG93ZXJDYXNlRXZlbnRdKSB7XG4gICAgICAgIHRpcChcbiAgICAgICAgICBcIkV2ZW50IFxcXCJcIiArIGxvd2VyQ2FzZUV2ZW50ICsgXCJcXFwiIGlzIGVtaXR0ZWQgaW4gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIgYnV0IHRoZSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWQgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSBcIiArXG4gICAgICAgICAgXCJ2LW9uIHRvIGxpc3RlbiB0byBjYW1lbENhc2UgZXZlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIHRlbXBsYXRlcy4gXCIgK1xuICAgICAgICAgIFwiWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgKGh5cGhlbmF0ZShldmVudCkpICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmIChjYnMpIHtcbiAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xuICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgaW5mbyA9IFwiZXZlbnQgaGFuZGxlciBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIGFjdGl2ZUluc3RhbmNlID0gbnVsbDtcbnZhciBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgdmFyIHByZXZBY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlO1xuICBhY3RpdmVJbnN0YW5jZSA9IHZtO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGFjdGl2ZUluc3RhbmNlID0gcHJldkFjdGl2ZUluc3RhbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRMaWZlY3ljbGUgKHZtKSB7XG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG5cbiAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBpZiAocGFyZW50ICYmICFvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gIH1cblxuICB2bS4kcGFyZW50ID0gcGFyZW50O1xuICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gIHZtLiRjaGlsZHJlbiA9IFtdO1xuICB2bS4kcmVmcyA9IHt9O1xuXG4gIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgdm0uX2luYWN0aXZlID0gbnVsbDtcbiAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgdm0uX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBwcmV2RWwgPSB2bS4kZWw7XG4gICAgdmFyIHByZXZWbm9kZSA9IHZtLl92bm9kZTtcbiAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2Uodm0pO1xuICAgIHZtLl92bm9kZSA9IHZub2RlO1xuICAgIC8vIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fIGlzIGluamVjdGVkIGluIGVudHJ5IHBvaW50c1xuICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgIGlmICghcHJldlZub2RlKSB7XG4gICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZXNcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgcmVzdG9yZUFjdGl2ZUluc3RhbmNlKCk7XG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IHZtO1xuICAgIH1cbiAgICAvLyBpZiBwYXJlbnQgaXMgYW4gSE9DLCB1cGRhdGUgaXRzICRlbCBhcyB3ZWxsXG4gICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgIH1cbiAgICAvLyB1cGRhdGVkIGhvb2sgaXMgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIgdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gYXJlXG4gICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZURlc3Ryb3knKTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXZtLiRvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgIH1cbiAgICAvLyB0ZWFyZG93biB3YXRjaGVyc1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZtLl93YXRjaGVyc1tpXS50ZWFyZG93bigpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxuICAgIC8vIGZyb3plbiBvYmplY3QgbWF5IG5vdCBoYXZlIG9ic2VydmVyLlxuICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgIHZtLl9kYXRhLl9fb2JfXy52bUNvdW50LS07XG4gICAgfVxuICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gaW52b2tlIGRlc3Ryb3kgaG9va3Mgb24gY3VycmVudCByZW5kZXJlZCB0cmVlXG4gICAgdm0uX19wYXRjaF9fKHZtLl92bm9kZSwgbnVsbCk7XG4gICAgLy8gZmlyZSBkZXN0cm95ZWQgaG9va1xuICAgIGNhbGxIb29rKHZtLCAnZGVzdHJveWVkJyk7XG4gICAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgICB2bS4kb2ZmKCk7XG4gICAgLy8gcmVtb3ZlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG4gICAgaWYgKHZtLiR2bm9kZSkge1xuICAgICAgdm0uJHZub2RlLnBhcmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBtb3VudENvbXBvbmVudCAoXG4gIHZtLFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgdm0uJGVsID0gZWw7XG4gIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoKHZtLiRvcHRpb25zLnRlbXBsYXRlICYmIHZtLiRvcHRpb25zLnRlbXBsYXRlLmNoYXJBdCgwKSAhPT0gJyMnKSB8fFxuICAgICAgICB2bS4kb3B0aW9ucy5lbCB8fCBlbCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgYXJlIHVzaW5nIHRoZSBydW50aW1lLW9ubHkgYnVpbGQgb2YgVnVlIHdoZXJlIHRoZSB0ZW1wbGF0ZSAnICtcbiAgICAgICAgICAnY29tcGlsZXIgaXMgbm90IGF2YWlsYWJsZS4gRWl0aGVyIHByZS1jb21waWxlIHRoZSB0ZW1wbGF0ZXMgaW50byAnICtcbiAgICAgICAgICAncmVuZGVyIGZ1bmN0aW9ucywgb3IgdXNlIHRoZSBjb21waWxlci1pbmNsdWRlZCBidWlsZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdGYWlsZWQgdG8gbW91bnQgY29tcG9uZW50OiB0ZW1wbGF0ZSBvciByZW5kZXIgZnVuY3Rpb24gbm90IGRlZmluZWQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYWxsSG9vayh2bSwgJ2JlZm9yZU1vdW50Jyk7XG5cbiAgdmFyIHVwZGF0ZUNvbXBvbmVudDtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5hbWUgPSB2bS5fbmFtZTtcbiAgICAgIHZhciBpZCA9IHZtLl91aWQ7XG4gICAgICB2YXIgc3RhcnRUYWcgPSBcInZ1ZS1wZXJmLXN0YXJ0OlwiICsgaWQ7XG4gICAgICB2YXIgZW5kVGFnID0gXCJ2dWUtcGVyZi1lbmQ6XCIgKyBpZDtcblxuICAgICAgbWFyayhzdGFydFRhZyk7XG4gICAgICB2YXIgdm5vZGUgPSB2bS5fcmVuZGVyKCk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArIG5hbWUgKyBcIiByZW5kZXJcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuXG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICAgIHZtLl91cGRhdGUodm5vZGUsIGh5ZHJhdGluZyk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArIG5hbWUgKyBcIiBwYXRjaFwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2bS5fdXBkYXRlKHZtLl9yZW5kZXIoKSwgaHlkcmF0aW5nKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gd2Ugc2V0IHRoaXMgdG8gdm0uX3dhdGNoZXIgaW5zaWRlIHRoZSB3YXRjaGVyJ3MgY29uc3RydWN0b3JcbiAgLy8gc2luY2UgdGhlIHdhdGNoZXIncyBpbml0aWFsIHBhdGNoIG1heSBjYWxsICRmb3JjZVVwZGF0ZSAoZS5nLiBpbnNpZGUgY2hpbGRcbiAgLy8gY29tcG9uZW50J3MgbW91bnRlZCBob29rKSwgd2hpY2ggcmVsaWVzIG9uIHZtLl93YXRjaGVyIGJlaW5nIGFscmVhZHkgZGVmaW5lZFxuICBuZXcgV2F0Y2hlcih2bSwgdXBkYXRlQ29tcG9uZW50LCBub29wLCB7XG4gICAgYmVmb3JlOiBmdW5jdGlvbiBiZWZvcmUgKCkge1xuICAgICAgaWYgKHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZVVwZGF0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdHJ1ZSAvKiBpc1JlbmRlcldhdGNoZXIgKi8pO1xuICBoeWRyYXRpbmcgPSBmYWxzZTtcblxuICAvLyBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlLCBjYWxsIG1vdW50ZWQgb24gc2VsZlxuICAvLyBtb3VudGVkIGlzIGNhbGxlZCBmb3IgcmVuZGVyLWNyZWF0ZWQgY2hpbGQgY29tcG9uZW50cyBpbiBpdHMgaW5zZXJ0ZWQgaG9va1xuICBpZiAodm0uJHZub2RlID09IG51bGwpIHtcbiAgICB2bS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBjYWxsSG9vayh2bSwgJ21vdW50ZWQnKTtcbiAgfVxuICByZXR1cm4gdm1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2hpbGRDb21wb25lbnQgKFxuICB2bSxcbiAgcHJvcHNEYXRhLFxuICBsaXN0ZW5lcnMsXG4gIHBhcmVudFZub2RlLFxuICByZW5kZXJDaGlsZHJlblxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGRldGVybWluZSB3aGV0aGVyIGNvbXBvbmVudCBoYXMgc2xvdCBjaGlsZHJlblxuICAvLyB3ZSBuZWVkIHRvIGRvIHRoaXMgYmVmb3JlIG92ZXJ3cml0aW5nICRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbi5cblxuICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgZHluYW1pYyBzY29wZWRTbG90cyAoaGFuZC13cml0dGVuIG9yIGNvbXBpbGVkIGJ1dCB3aXRoXG4gIC8vIGR5bmFtaWMgc2xvdCBuYW1lcykuIFN0YXRpYyBzY29wZWQgc2xvdHMgY29tcGlsZWQgZnJvbSB0ZW1wbGF0ZSBoYXMgdGhlXG4gIC8vIFwiJHN0YWJsZVwiIG1hcmtlci5cbiAgdmFyIG5ld1Njb3BlZFNsb3RzID0gcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cztcbiAgdmFyIG9sZFNjb3BlZFNsb3RzID0gdm0uJHNjb3BlZFNsb3RzO1xuICB2YXIgaGFzRHluYW1pY1Njb3BlZFNsb3QgPSAhIShcbiAgICAobmV3U2NvcGVkU2xvdHMgJiYgIW5ld1Njb3BlZFNsb3RzLiRzdGFibGUpIHx8XG4gICAgKG9sZFNjb3BlZFNsb3RzICE9PSBlbXB0eU9iamVjdCAmJiAhb2xkU2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAobmV3U2NvcGVkU2xvdHMgJiYgdm0uJHNjb3BlZFNsb3RzLiRrZXkgIT09IG5ld1Njb3BlZFNsb3RzLiRrZXkpXG4gICk7XG5cbiAgLy8gQW55IHN0YXRpYyBzbG90IGNoaWxkcmVuIGZyb20gdGhlIHBhcmVudCBtYXkgaGF2ZSBjaGFuZ2VkIGR1cmluZyBwYXJlbnQnc1xuICAvLyB1cGRhdGUuIER5bmFtaWMgc2NvcGVkIHNsb3RzIG1heSBhbHNvIGhhdmUgY2hhbmdlZC4gSW4gc3VjaCBjYXNlcywgYSBmb3JjZWRcbiAgLy8gdXBkYXRlIGlzIG5lY2Vzc2FyeSB0byBlbnN1cmUgY29ycmVjdG5lc3MuXG4gIHZhciBuZWVkc0ZvcmNlVXBkYXRlID0gISEoXG4gICAgcmVuZGVyQ2hpbGRyZW4gfHwgICAgICAgICAgICAgICAvLyBoYXMgbmV3IHN0YXRpYyBzbG90c1xuICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiB8fCAgLy8gaGFzIG9sZCBzdGF0aWMgc2xvdHNcbiAgICBoYXNEeW5hbWljU2NvcGVkU2xvdFxuICApO1xuXG4gIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICB2bS4kdm5vZGUgPSBwYXJlbnRWbm9kZTsgLy8gdXBkYXRlIHZtJ3MgcGxhY2Vob2xkZXIgbm9kZSB3aXRob3V0IHJlLXJlbmRlclxuXG4gIGlmICh2bS5fdm5vZGUpIHsgLy8gdXBkYXRlIGNoaWxkIHRyZWUncyBwYXJlbnRcbiAgICB2bS5fdm5vZGUucGFyZW50ID0gcGFyZW50Vm5vZGU7XG4gIH1cbiAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuID0gcmVuZGVyQ2hpbGRyZW47XG5cbiAgLy8gdXBkYXRlICRhdHRycyBhbmQgJGxpc3RlbmVycyBoYXNoXG4gIC8vIHRoZXNlIGFyZSBhbHNvIHJlYWN0aXZlIHNvIHRoZXkgbWF5IHRyaWdnZXIgY2hpbGQgdXBkYXRlIGlmIHRoZSBjaGlsZFxuICAvLyB1c2VkIHRoZW0gZHVyaW5nIHJlbmRlclxuICB2bS4kYXR0cnMgPSBwYXJlbnRWbm9kZS5kYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0O1xuICB2bS4kbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuXG4gIC8vIHVwZGF0ZSBwcm9wc1xuICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICB2YXIgcHJvcHMgPSB2bS5fcHJvcHM7XG4gICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAgIHZhciBwcm9wT3B0aW9ucyA9IHZtLiRvcHRpb25zLnByb3BzOyAvLyB3dGYgZmxvdz9cbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhLCB2bSk7XG4gICAgfVxuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAvLyBrZWVwIGEgY29weSBvZiByYXcgcHJvcHNEYXRhXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhID0gcHJvcHNEYXRhO1xuICB9XG5cbiAgLy8gdXBkYXRlIGxpc3RlbmVyc1xuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZhciBvbGRMaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycywgb2xkTGlzdGVuZXJzKTtcblxuICAvLyByZXNvbHZlIHNsb3RzICsgZm9yY2UgdXBkYXRlIGlmIGhhcyBjaGlsZHJlblxuICBpZiAobmVlZHNGb3JjZVVwZGF0ZSkge1xuICAgIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhyZW5kZXJDaGlsZHJlbiwgcGFyZW50Vm5vZGUuY29udGV4dCk7XG4gICAgdm0uJGZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSW5JbmFjdGl2ZVRyZWUgKHZtKSB7XG4gIHdoaWxlICh2bSAmJiAodm0gPSB2bS4kcGFyZW50KSkge1xuICAgIGlmICh2bS5faW5hY3RpdmUpIHsgcmV0dXJuIHRydWUgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSBlbHNlIGlmICh2bS5fZGlyZWN0SW5hY3RpdmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodm0uX2luYWN0aXZlIHx8IHZtLl9pbmFjdGl2ZSA9PT0gbnVsbCkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSB0cnVlO1xuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGlmICghdm0uX2luYWN0aXZlKSB7XG4gICAgdm0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnZGVhY3RpdmF0ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsSG9vayAodm0sIGhvb2spIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGxpZmVjeWNsZSBob29rc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICB2YXIgaW5mbyA9IGhvb2sgKyBcIiBob29rXCI7XG4gIGlmIChoYW5kbGVycykge1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhoYW5kbGVyc1tpXSwgdm0sIG51bGwsIHZtLCBpbmZvKTtcbiAgICB9XG4gIH1cbiAgaWYgKHZtLl9oYXNIb29rRXZlbnQpIHtcbiAgICB2bS4kZW1pdCgnaG9vazonICsgaG9vayk7XG4gIH1cbiAgcG9wVGFyZ2V0KCk7XG59XG5cbi8qICAqL1xuXG52YXIgTUFYX1VQREFURV9DT1VOVCA9IDEwMDtcblxudmFyIHF1ZXVlID0gW107XG52YXIgYWN0aXZhdGVkQ2hpbGRyZW4gPSBbXTtcbnZhciBoYXMgPSB7fTtcbnZhciBjaXJjdWxhciA9IHt9O1xudmFyIHdhaXRpbmcgPSBmYWxzZTtcbnZhciBmbHVzaGluZyA9IGZhbHNlO1xudmFyIGluZGV4ID0gMDtcblxuLyoqXG4gKiBSZXNldCB0aGUgc2NoZWR1bGVyJ3Mgc3RhdGUuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0U2NoZWR1bGVyU3RhdGUgKCkge1xuICBpbmRleCA9IHF1ZXVlLmxlbmd0aCA9IGFjdGl2YXRlZENoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIGhhcyA9IHt9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNpcmN1bGFyID0ge307XG4gIH1cbiAgd2FpdGluZyA9IGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSAjNjU2NiByZXF1aXJlcyBzYXZpbmcgdGhlIHRpbWVzdGFtcCB3aGVuIGV2ZW50IGxpc3RlbmVycyBhcmVcbi8vIGF0dGFjaGVkLiBIb3dldmVyLCBjYWxsaW5nIHBlcmZvcm1hbmNlLm5vdygpIGhhcyBhIHBlcmYgb3ZlcmhlYWQgZXNwZWNpYWxseVxuLy8gaWYgdGhlIHBhZ2UgaGFzIHRob3VzYW5kcyBvZiBldmVudCBsaXN0ZW5lcnMuIEluc3RlYWQsIHdlIHRha2UgYSB0aW1lc3RhbXBcbi8vIGV2ZXJ5IHRpbWUgdGhlIHNjaGVkdWxlciBmbHVzaGVzIGFuZCB1c2UgdGhhdCBmb3IgYWxsIGV2ZW50IGxpc3RlbmVyc1xuLy8gYXR0YWNoZWQgZHVyaW5nIHRoYXQgZmx1c2guXG52YXIgY3VycmVudEZsdXNoVGltZXN0YW1wID0gMDtcblxuLy8gQXN5bmMgZWRnZSBjYXNlIGZpeCByZXF1aXJlcyBzdG9yaW5nIGFuIGV2ZW50IGxpc3RlbmVyJ3MgYXR0YWNoIHRpbWVzdGFtcC5cbnZhciBnZXROb3cgPSBEYXRlLm5vdztcblxuLy8gRGV0ZXJtaW5lIHdoYXQgZXZlbnQgdGltZXN0YW1wIHRoZSBicm93c2VyIGlzIHVzaW5nLiBBbm5veWluZ2x5LCB0aGVcbi8vIHRpbWVzdGFtcCBjYW4gZWl0aGVyIGJlIGhpLXJlcyAocmVsYXRpdmUgdG8gcGFnZSBsb2FkKSBvciBsb3ctcmVzXG4vLyAocmVsYXRpdmUgdG8gVU5JWCBlcG9jaCksIHNvIGluIG9yZGVyIHRvIGNvbXBhcmUgdGltZSB3ZSBoYXZlIHRvIHVzZSB0aGVcbi8vIHNhbWUgdGltZXN0YW1wIHR5cGUgd2hlbiBzYXZpbmcgdGhlIGZsdXNoIHRpbWVzdGFtcC5cbi8vIEFsbCBJRSB2ZXJzaW9ucyB1c2UgbG93LXJlcyBldmVudCB0aW1lc3RhbXBzLCBhbmQgaGF2ZSBwcm9ibGVtYXRpYyBjbG9ja1xuLy8gaW1wbGVtZW50YXRpb25zICgjOTYzMilcbmlmIChpbkJyb3dzZXIgJiYgIWlzSUUpIHtcbiAgdmFyIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICBpZiAoXG4gICAgcGVyZm9ybWFuY2UgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nICYmXG4gICAgZ2V0Tm93KCkgPiBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKS50aW1lU3RhbXBcbiAgKSB7XG4gICAgLy8gaWYgdGhlIGV2ZW50IHRpbWVzdGFtcCwgYWx0aG91Z2ggZXZhbHVhdGVkIEFGVEVSIHRoZSBEYXRlLm5vdygpLCBpc1xuICAgIC8vIHNtYWxsZXIgdGhhbiBpdCwgaXQgbWVhbnMgdGhlIGV2ZW50IGlzIHVzaW5nIGEgaGktcmVzIHRpbWVzdGFtcCxcbiAgICAvLyBhbmQgd2UgbmVlZCB0byB1c2UgdGhlIGhpLXJlcyB2ZXJzaW9uIGZvciBldmVudCBsaXN0ZW5lciB0aW1lc3RhbXBzIGFzXG4gICAgLy8gd2VsbC5cbiAgICBnZXROb3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTsgfTtcbiAgfVxufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5mdW5jdGlvbiBmbHVzaFNjaGVkdWxlclF1ZXVlICgpIHtcbiAgY3VycmVudEZsdXNoVGltZXN0YW1wID0gZ2V0Tm93KCk7XG4gIGZsdXNoaW5nID0gdHJ1ZTtcbiAgdmFyIHdhdGNoZXIsIGlkO1xuXG4gIC8vIFNvcnQgcXVldWUgYmVmb3JlIGZsdXNoLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdDpcbiAgLy8gMS4gQ29tcG9uZW50cyBhcmUgdXBkYXRlZCBmcm9tIHBhcmVudCB0byBjaGlsZC4gKGJlY2F1c2UgcGFyZW50IGlzIGFsd2F5c1xuICAvLyAgICBjcmVhdGVkIGJlZm9yZSB0aGUgY2hpbGQpXG4gIC8vIDIuIEEgY29tcG9uZW50J3MgdXNlciB3YXRjaGVycyBhcmUgcnVuIGJlZm9yZSBpdHMgcmVuZGVyIHdhdGNoZXIgKGJlY2F1c2VcbiAgLy8gICAgdXNlciB3YXRjaGVycyBhcmUgY3JlYXRlZCBiZWZvcmUgdGhlIHJlbmRlciB3YXRjaGVyKVxuICAvLyAzLiBJZiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgZHVyaW5nIGEgcGFyZW50IGNvbXBvbmVudCdzIHdhdGNoZXIgcnVuLFxuICAvLyAgICBpdHMgd2F0Y2hlcnMgY2FuIGJlIHNraXBwZWQuXG4gIHF1ZXVlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcblxuICAvLyBkbyBub3QgY2FjaGUgbGVuZ3RoIGJlY2F1c2UgbW9yZSB3YXRjaGVycyBtaWdodCBiZSBwdXNoZWRcbiAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHdhdGNoZXIgPSBxdWV1ZVtpbmRleF07XG4gICAgaWYgKHdhdGNoZXIuYmVmb3JlKSB7XG4gICAgICB3YXRjaGVyLmJlZm9yZSgpO1xuICAgIH1cbiAgICBpZCA9IHdhdGNoZXIuaWQ7XG4gICAgaGFzW2lkXSA9IG51bGw7XG4gICAgd2F0Y2hlci5ydW4oKTtcbiAgICAvLyBpbiBkZXYgYnVpbGQsIGNoZWNrIGFuZCBzdG9wIGNpcmN1bGFyIHVwZGF0ZXMuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaGFzW2lkXSAhPSBudWxsKSB7XG4gICAgICBjaXJjdWxhcltpZF0gPSAoY2lyY3VsYXJbaWRdIHx8IDApICsgMTtcbiAgICAgIGlmIChjaXJjdWxhcltpZF0gPiBNQVhfVVBEQVRFX0NPVU5UKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCAnICsgKFxuICAgICAgICAgICAgd2F0Y2hlci51c2VyXG4gICAgICAgICAgICAgID8gKFwiaW4gd2F0Y2hlciB3aXRoIGV4cHJlc3Npb24gXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIilcbiAgICAgICAgICAgICAgOiBcImluIGEgY29tcG9uZW50IHJlbmRlciBmdW5jdGlvbi5cIlxuICAgICAgICAgICksXG4gICAgICAgICAgd2F0Y2hlci52bVxuICAgICAgICApO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGtlZXAgY29waWVzIG9mIHBvc3QgcXVldWVzIGJlZm9yZSByZXNldHRpbmcgc3RhdGVcbiAgdmFyIGFjdGl2YXRlZFF1ZXVlID0gYWN0aXZhdGVkQ2hpbGRyZW4uc2xpY2UoKTtcbiAgdmFyIHVwZGF0ZWRRdWV1ZSA9IHF1ZXVlLnNsaWNlKCk7XG5cbiAgcmVzZXRTY2hlZHVsZXJTdGF0ZSgpO1xuXG4gIC8vIGNhbGwgY29tcG9uZW50IHVwZGF0ZWQgYW5kIGFjdGl2YXRlZCBob29rc1xuICBjYWxsQWN0aXZhdGVkSG9va3MoYWN0aXZhdGVkUXVldWUpO1xuICBjYWxsVXBkYXRlZEhvb2tzKHVwZGF0ZWRRdWV1ZSk7XG5cbiAgLy8gZGV2dG9vbCBob29rXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZGV2dG9vbHMgJiYgY29uZmlnLmRldnRvb2xzKSB7XG4gICAgZGV2dG9vbHMuZW1pdCgnZmx1c2gnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVXBkYXRlZEhvb2tzIChxdWV1ZSkge1xuICB2YXIgaSA9IHF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciB3YXRjaGVyID0gcXVldWVbaV07XG4gICAgdmFyIHZtID0gd2F0Y2hlci52bTtcbiAgICBpZiAodm0uX3dhdGNoZXIgPT09IHdhdGNoZXIgJiYgdm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICBjYWxsSG9vayh2bSwgJ3VwZGF0ZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBRdWV1ZSBhIGtlcHQtYWxpdmUgY29tcG9uZW50IHRoYXQgd2FzIGFjdGl2YXRlZCBkdXJpbmcgcGF0Y2guXG4gKiBUaGUgcXVldWUgd2lsbCBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIGVudGlyZSB0cmVlIGhhcyBiZWVuIHBhdGNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50ICh2bSkge1xuICAvLyBzZXR0aW5nIF9pbmFjdGl2ZSB0byBmYWxzZSBoZXJlIHNvIHRoYXQgYSByZW5kZXIgZnVuY3Rpb24gY2FuXG4gIC8vIHJlbHkgb24gY2hlY2tpbmcgd2hldGhlciBpdCdzIGluIGFuIGluYWN0aXZlIHRyZWUgKGUuZy4gcm91dGVyLXZpZXcpXG4gIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICBhY3RpdmF0ZWRDaGlsZHJlbi5wdXNoKHZtKTtcbn1cblxuZnVuY3Rpb24gY2FsbEFjdGl2YXRlZEhvb2tzIChxdWV1ZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHF1ZXVlW2ldLCB0cnVlIC8qIHRydWUgKi8pO1xuICB9XG59XG5cbi8qKlxuICogUHVzaCBhIHdhdGNoZXIgaW50byB0aGUgd2F0Y2hlciBxdWV1ZS5cbiAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlV2F0Y2hlciAod2F0Y2hlcikge1xuICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICBpZiAoaGFzW2lkXSA9PSBudWxsKSB7XG4gICAgaGFzW2lkXSA9IHRydWU7XG4gICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgcXVldWUucHVzaCh3YXRjaGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgYWxyZWFkeSBmbHVzaGluZywgc3BsaWNlIHRoZSB3YXRjaGVyIGJhc2VkIG9uIGl0cyBpZFxuICAgICAgLy8gaWYgYWxyZWFkeSBwYXN0IGl0cyBpZCwgaXQgd2lsbCBiZSBydW4gbmV4dCBpbW1lZGlhdGVseS5cbiAgICAgIHZhciBpID0gcXVldWUubGVuZ3RoIC0gMTtcbiAgICAgIHdoaWxlIChpID4gaW5kZXggJiYgcXVldWVbaV0uaWQgPiB3YXRjaGVyLmlkKSB7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICAgIHF1ZXVlLnNwbGljZShpICsgMSwgMCwgd2F0Y2hlcik7XG4gICAgfVxuICAgIC8vIHF1ZXVlIHRoZSBmbHVzaFxuICAgIGlmICghd2FpdGluZykge1xuICAgICAgd2FpdGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAgICAgZmx1c2hTY2hlZHVsZXJRdWV1ZSgpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG5leHRUaWNrKGZsdXNoU2NoZWR1bGVyUXVldWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbnZhciB1aWQkMiA9IDA7XG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKi9cbnZhciBXYXRjaGVyID0gZnVuY3Rpb24gV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBjYixcbiAgb3B0aW9ucyxcbiAgaXNSZW5kZXJXYXRjaGVyXG4pIHtcbiAgdGhpcy52bSA9IHZtO1xuICBpZiAoaXNSZW5kZXJXYXRjaGVyKSB7XG4gICAgdm0uX3dhdGNoZXIgPSB0aGlzO1xuICB9XG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xuICAvLyBvcHRpb25zXG4gIGlmIChvcHRpb25zKSB7XG4gICAgdGhpcy5kZWVwID0gISFvcHRpb25zLmRlZXA7XG4gICAgdGhpcy51c2VyID0gISFvcHRpb25zLnVzZXI7XG4gICAgdGhpcy5sYXp5ID0gISFvcHRpb25zLmxhenk7XG4gICAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmM7XG4gICAgdGhpcy5iZWZvcmUgPSBvcHRpb25zLmJlZm9yZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlZXAgPSB0aGlzLnVzZXIgPSB0aGlzLmxhenkgPSB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgfVxuICB0aGlzLmNiID0gY2I7XG4gIHRoaXMuaWQgPSArK3VpZCQyOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eTsgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW107XG4gIHRoaXMubmV3RGVwcyA9IFtdO1xuICB0aGlzLmRlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMubmV3RGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5leHByZXNzaW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gZXhwT3JGbi50b1N0cmluZygpXG4gICAgOiAnJztcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmICh0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKTtcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IG5vb3A7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHdhdGNoaW5nIHBhdGg6IFxcXCJcIiArIGV4cE9yRm4gKyBcIlxcXCIgXCIgK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoKSB7XG4gIHB1c2hUYXJnZXQodGhpcyk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHZtID0gdGhpcy52bTtcbiAgdHJ5IHtcbiAgICB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodm0sIHZtKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAoXCJnZXR0ZXIgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAgIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICAgIGlmICh0aGlzLmRlZXApIHtcbiAgICAgIHRyYXZlcnNlKHZhbHVlKTtcbiAgICB9XG4gICAgcG9wVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGVhbnVwRGVwcygpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufTtcblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiBhZGREZXAgKGRlcCkge1xuICB2YXIgaWQgPSBkZXAuaWQ7XG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZCk7XG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKTtcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gY2xlYW51cERlcHMgKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgZGVwID0gdGhpcy5kZXBzW2ldO1xuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICB9XG4gIHZhciB0bXAgPSB0aGlzLmRlcElkcztcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkcztcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKCk7XG4gIHRtcCA9IHRoaXMuZGVwcztcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzO1xuICB0aGlzLm5ld0RlcHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwO1xufTtcblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgICB0aGlzLnJ1bigpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlV2F0Y2hlcih0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTY2hlZHVsZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkLlxuICAgICAgaXNPYmplY3QodmFsdWUpIHx8XG4gICAgICB0aGlzLmRlZXBcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB0aGlzLnZtLCAoXCJjYWxsYmFjayBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gZXZhbHVhdGUgKCkge1xuICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKTtcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiBEZXBlbmQgb24gYWxsIGRlcHMgY29sbGVjdGVkIGJ5IHRoaXMgd2F0Y2hlci5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy5kZXBzW2ldLmRlcGVuZCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3Vic2NyaWJlciBsaXN0LlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIHRlYXJkb3duICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkLlxuICAgIGlmICghdGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tpXS5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbi8qICAqL1xuXG52YXIgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uID0ge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogbm9vcCxcbiAgc2V0OiBub29wXG59O1xuXG5mdW5jdGlvbiBwcm94eSAodGFyZ2V0LCBzb3VyY2VLZXksIGtleSkge1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzW3NvdXJjZUtleV1ba2V5XVxuICB9O1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgIHRoaXNbc291cmNlS2V5XVtrZXldID0gdmFsO1xuICB9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGluaXRTdGF0ZSAodm0pIHtcbiAgdm0uX3dhdGNoZXJzID0gW107XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnM7XG4gIGlmIChvcHRzLnByb3BzKSB7IGluaXRQcm9wcyh2bSwgb3B0cy5wcm9wcyk7IH1cbiAgaWYgKG9wdHMubWV0aG9kcykgeyBpbml0TWV0aG9kcyh2bSwgb3B0cy5tZXRob2RzKTsgfVxuICBpZiAob3B0cy5kYXRhKSB7XG4gICAgaW5pdERhdGEodm0pO1xuICB9IGVsc2Uge1xuICAgIG9ic2VydmUodm0uX2RhdGEgPSB7fSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbiAgfVxuICBpZiAob3B0cy5jb21wdXRlZCkgeyBpbml0Q29tcHV0ZWQodm0sIG9wdHMuY29tcHV0ZWQpOyB9XG4gIGlmIChvcHRzLndhdGNoICYmIG9wdHMud2F0Y2ggIT09IG5hdGl2ZVdhdGNoKSB7XG4gICAgaW5pdFdhdGNoKHZtLCBvcHRzLndhdGNoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMgKHZtLCBwcm9wc09wdGlvbnMpIHtcbiAgdmFyIHByb3BzRGF0YSA9IHZtLiRvcHRpb25zLnByb3BzRGF0YSB8fCB7fTtcbiAgdmFyIHByb3BzID0gdm0uX3Byb3BzID0ge307XG4gIC8vIGNhY2hlIHByb3Aga2V5cyBzbyB0aGF0IGZ1dHVyZSBwcm9wcyB1cGRhdGVzIGNhbiBpdGVyYXRlIHVzaW5nIEFycmF5XG4gIC8vIGluc3RlYWQgb2YgZHluYW1pYyBvYmplY3Qga2V5IGVudW1lcmF0aW9uLlxuICB2YXIga2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyA9IFtdO1xuICB2YXIgaXNSb290ID0gIXZtLiRwYXJlbnQ7XG4gIC8vIHJvb3QgaW5zdGFuY2UgcHJvcHMgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICBpZiAoIWlzUm9vdCkge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gIH1cbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wc09wdGlvbnMsIHByb3BzRGF0YSwgdm0pO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAoaXNSZXNlcnZlZEF0dHJpYnV0ZShoeXBoZW5hdGVkS2V5KSB8fFxuICAgICAgICAgIGNvbmZpZy5pc1Jlc2VydmVkQXR0cihoeXBoZW5hdGVkS2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIlxcXCJcIiArIGh5cGhlbmF0ZWRLZXkgKyBcIlxcXCIgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUgYW5kIGNhbm5vdCBiZSB1c2VkIGFzIGNvbXBvbmVudCBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEocHJvcHMsIGtleSwgdmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc1Jvb3QgJiYgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGEgcHJvcCBkaXJlY3RseSBzaW5jZSB0aGUgdmFsdWUgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwYXJlbnQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiSW5zdGVhZCwgdXNlIGEgZGF0YSBvciBjb21wdXRlZCBwcm9wZXJ0eSBiYXNlZCBvbiB0aGUgcHJvcCdzIFwiICtcbiAgICAgICAgICAgIFwidmFsdWUuIFByb3AgYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIC8vIHN0YXRpYyBwcm9wcyBhcmUgYWxyZWFkeSBwcm94aWVkIG9uIHRoZSBjb21wb25lbnQncyBwcm90b3R5cGVcbiAgICAvLyBkdXJpbmcgVnVlLmV4dGVuZCgpLiBXZSBvbmx5IG5lZWQgdG8gcHJveHkgcHJvcHMgZGVmaW5lZCBhdFxuICAgIC8vIGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBwcm94eSh2bSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgICB9XG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzT3B0aW9ucykgbG9vcCgga2V5ICk7XG4gIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbn1cblxuZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIHZhciBkYXRhID0gdm0uJG9wdGlvbnMuZGF0YTtcbiAgZGF0YSA9IHZtLl9kYXRhID0gdHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbidcbiAgICA/IGdldERhdGEoZGF0YSwgdm0pXG4gICAgOiBkYXRhIHx8IHt9O1xuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge307XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ2RhdGEgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0OlxcbicgK1xuICAgICAgJ2h0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNkYXRhLU11c3QtQmUtYS1GdW5jdGlvbicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgdmFyIG1ldGhvZHMgPSB2bS4kb3B0aW9ucy5tZXRob2RzO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChtZXRob2RzICYmIGhhc093bihtZXRob2RzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBkYXRhIHByb3BlcnR5LlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiVGhlIGRhdGEgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVjbGFyZWQgYXMgYSBwcm9wLiBcIiArXG4gICAgICAgIFwiVXNlIHByb3AgZGVmYXVsdCB2YWx1ZSBpbnN0ZWFkLlwiLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9kYXRhXCIsIGtleSk7XG4gICAgfVxuICB9XG4gIC8vIG9ic2VydmUgZGF0YVxuICBvYnNlcnZlKGRhdGEsIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEgKGRhdGEsIHZtKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBkYXRhIGdldHRlcnNcbiAgcHVzaFRhcmdldCgpO1xuICB0cnkge1xuICAgIHJldHVybiBkYXRhLmNhbGwodm0sIHZtKVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwiZGF0YSgpXCIpO1xuICAgIHJldHVybiB7fVxuICB9IGZpbmFsbHkge1xuICAgIHBvcFRhcmdldCgpO1xuICB9XG59XG5cbnZhciBjb21wdXRlZFdhdGNoZXJPcHRpb25zID0geyBsYXp5OiB0cnVlIH07XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCAodm0sIGNvbXB1dGVkKSB7XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICB2YXIgd2F0Y2hlcnMgPSB2bS5fY29tcHV0ZWRXYXRjaGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGp1c3QgZ2V0dGVycyBkdXJpbmcgU1NSXG4gIHZhciBpc1NTUiA9IGlzU2VydmVyUmVuZGVyaW5nKCk7XG5cbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgdmFyIHVzZXJEZWYgPSBjb21wdXRlZFtrZXldO1xuICAgIHZhciBnZXR0ZXIgPSB0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJyA/IHVzZXJEZWYgOiB1c2VyRGVmLmdldDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiR2V0dGVyIGlzIG1pc3NpbmcgZm9yIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIi5cIiksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghaXNTU1IpIHtcbiAgICAgIC8vIGNyZWF0ZSBpbnRlcm5hbCB3YXRjaGVyIGZvciB0aGUgY29tcHV0ZWQgcHJvcGVydHkuXG4gICAgICB3YXRjaGVyc1trZXldID0gbmV3IFdhdGNoZXIoXG4gICAgICAgIHZtLFxuICAgICAgICBnZXR0ZXIgfHwgbm9vcCxcbiAgICAgICAgbm9vcCxcbiAgICAgICAgY29tcHV0ZWRXYXRjaGVyT3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnQtZGVmaW5lZCBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBhbHJlYWR5IGRlZmluZWQgb24gdGhlXG4gICAgLy8gY29tcG9uZW50IHByb3RvdHlwZS4gV2Ugb25seSBuZWVkIHRvIGRlZmluZSBjb21wdXRlZCBwcm9wZXJ0aWVzIGRlZmluZWRcbiAgICAvLyBhdCBpbnN0YW50aWF0aW9uIGhlcmUuXG4gICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgZGVmaW5lQ29tcHV0ZWQodm0sIGtleSwgdXNlckRlZik7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoa2V5IGluIHZtLiRkYXRhKSB7XG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgaW4gZGF0YS5cIiksIHZtKTtcbiAgICAgIH0gZWxzZSBpZiAodm0uJG9wdGlvbnMucHJvcHMgJiYga2V5IGluIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgYXMgYSBwcm9wLlwiKSwgdm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVDb21wdXRlZCAoXG4gIHRhcmdldCxcbiAga2V5LFxuICB1c2VyRGVmXG4pIHtcbiAgdmFyIHNob3VsZENhY2hlID0gIWlzU2VydmVyUmVuZGVyaW5nKCk7XG4gIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBzaG91bGRDYWNoZVxuICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZik7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IG5vb3A7XG4gIH0gZWxzZSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHVzZXJEZWYuZ2V0XG4gICAgICA/IHNob3VsZENhY2hlICYmIHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgID8gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KVxuICAgICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZi5nZXQpXG4gICAgICA6IG5vb3A7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IHVzZXJEZWYuc2V0IHx8IG5vb3A7XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPT09IG5vb3ApIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiQ29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBhc3NpZ25lZCB0byBidXQgaXQgaGFzIG5vIHNldHRlci5cIiksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkR2V0dGVyIChrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICB2YXIgd2F0Y2hlciA9IHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMgJiYgdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1trZXldO1xuICAgIGlmICh3YXRjaGVyKSB7XG4gICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRoaXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtLCBtZXRob2RzKSB7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgaW4gdm0pICYmIGlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArXG4gICAgICAgICAgXCJBdm9pZCBkZWZpbmluZyBjb21wb25lbnQgbWV0aG9kcyB0aGF0IHN0YXJ0IHdpdGggXyBvciAkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgZm9yICh2YXIga2V5IGluIHdhdGNoKSB7XG4gICAgdmFyIGhhbmRsZXIgPSB3YXRjaFtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBoYW5kbGVyLFxuICBvcHRpb25zXG4pIHtcbiAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICBvcHRpb25zID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVyO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICBoYW5kbGVyID0gdm1baGFuZGxlcl07XG4gIH1cbiAgcmV0dXJuIHZtLiR3YXRjaChleHBPckZuLCBoYW5kbGVyLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XG4gIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gIHZhciBkYXRhRGVmID0ge307XG4gIGRhdGFEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9O1xuICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkYXRhRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICdVc2UgbmVzdGVkIGRhdGEgcHJvcGVydGllcyBpbnN0ZWFkLicsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgICBwcm9wc0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcHJvcHMnLCBwcm9wc0RlZik7XG5cbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xuICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgVnVlLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoXG4gICAgZXhwT3JGbixcbiAgICBjYixcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoY2IpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudXNlciA9IHRydWU7XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgdm0sIChcImNhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4gKCkge1xuICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQkMyA9IDA7XG5cbmZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkJDMrKztcblxuICAgIHZhciBzdGFydFRhZywgZW5kVGFnO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArICh2bS5fdWlkKTtcbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgIH1cblxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAvLyBtZXJnZSBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5faXNDb21wb25lbnQpIHtcbiAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAvLyBzaW5jZSBkeW5hbWljIG9wdGlvbnMgbWVyZ2luZyBpcyBwcmV0dHkgc2xvdywgYW5kIG5vbmUgb2YgdGhlXG4gICAgICAvLyBpbnRlcm5hbCBjb21wb25lbnQgb3B0aW9ucyBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudC5cbiAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGluaXRQcm94eSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgICAvLyBleHBvc2UgcmVhbCBzZWxmXG4gICAgdm0uX3NlbGYgPSB2bTtcbiAgICBpbml0TGlmZWN5Y2xlKHZtKTtcbiAgICBpbml0RXZlbnRzKHZtKTtcbiAgICBpbml0UmVuZGVyKHZtKTtcbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZUNyZWF0ZScpO1xuICAgIGluaXRJbmplY3Rpb25zKHZtKTsgLy8gcmVzb2x2ZSBpbmplY3Rpb25zIGJlZm9yZSBkYXRhL3Byb3BzXG4gICAgaW5pdFN0YXRlKHZtKTtcbiAgICBpbml0UHJvdmlkZSh2bSk7IC8vIHJlc29sdmUgcHJvdmlkZSBhZnRlciBkYXRhL3Byb3BzXG4gICAgY2FsbEhvb2sodm0sICdjcmVhdGVkJyk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgdm0uX25hbWUgPSBmb3JtYXRDb21wb25lbnROYW1lKHZtLCBmYWxzZSk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArICh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICB9XG5cbiAgICBpZiAodm0uJG9wdGlvbnMuZWwpIHtcbiAgICAgIHZtLiRtb3VudCh2bS4kb3B0aW9ucy5lbCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0SW50ZXJuYWxDb21wb25lbnQgKHZtLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKHZtLmNvbnN0cnVjdG9yLm9wdGlvbnMpO1xuICAvLyBkb2luZyB0aGlzIGJlY2F1c2UgaXQncyBmYXN0ZXIgdGhhbiBkeW5hbWljIGVudW1lcmF0aW9uLlxuICB2YXIgcGFyZW50Vm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgb3B0cy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgb3B0cy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcblxuICB2YXIgdm5vZGVDb21wb25lbnRPcHRpb25zID0gcGFyZW50Vm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgb3B0cy5wcm9wc0RhdGEgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhO1xuICBvcHRzLl9wYXJlbnRMaXN0ZW5lcnMgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzO1xuICBvcHRzLl9yZW5kZXJDaGlsZHJlbiA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5jaGlsZHJlbjtcbiAgb3B0cy5fY29tcG9uZW50VGFnID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnRhZztcblxuICBpZiAob3B0aW9ucy5yZW5kZXIpIHtcbiAgICBvcHRzLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgIG9wdHMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgaWYgKEN0b3Iuc3VwZXIpIHtcbiAgICB2YXIgc3VwZXJPcHRpb25zID0gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yLnN1cGVyKTtcbiAgICB2YXIgY2FjaGVkU3VwZXJPcHRpb25zID0gQ3Rvci5zdXBlck9wdGlvbnM7XG4gICAgaWYgKHN1cGVyT3B0aW9ucyAhPT0gY2FjaGVkU3VwZXJPcHRpb25zKSB7XG4gICAgICAvLyBzdXBlciBvcHRpb24gY2hhbmdlZCxcbiAgICAgIC8vIG5lZWQgdG8gcmVzb2x2ZSBuZXcgb3B0aW9ucy5cbiAgICAgIEN0b3Iuc3VwZXJPcHRpb25zID0gc3VwZXJPcHRpb25zO1xuICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBsYXRlLW1vZGlmaWVkL2F0dGFjaGVkIG9wdGlvbnMgKCM0OTc2KVxuICAgICAgdmFyIG1vZGlmaWVkT3B0aW9ucyA9IHJlc29sdmVNb2RpZmllZE9wdGlvbnMoQ3Rvcik7XG4gICAgICAvLyB1cGRhdGUgYmFzZSBleHRlbmQgb3B0aW9uc1xuICAgICAgaWYgKG1vZGlmaWVkT3B0aW9ucykge1xuICAgICAgICBleHRlbmQoQ3Rvci5leHRlbmRPcHRpb25zLCBtb2RpZmllZE9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhzdXBlck9wdGlvbnMsIEN0b3IuZXh0ZW5kT3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tvcHRpb25zLm5hbWVdID0gQ3RvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgbW9kaWZpZWQ7XG4gIHZhciBsYXRlc3QgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBzZWFsZWQgPSBDdG9yLnNlYWxlZE9wdGlvbnM7XG4gIGZvciAodmFyIGtleSBpbiBsYXRlc3QpIHtcbiAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XG4gICAgICBpZiAoIW1vZGlmaWVkKSB7IG1vZGlmaWVkID0ge307IH1cbiAgICAgIG1vZGlmaWVkW2tleV0gPSBsYXRlc3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGlmaWVkXG59XG5cbmZ1bmN0aW9uIFZ1ZSAob3B0aW9ucykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICEodGhpcyBpbnN0YW5jZW9mIFZ1ZSlcbiAgKSB7XG4gICAgd2FybignVnVlIGlzIGEgY29uc3RydWN0b3IgYW5kIHNob3VsZCBiZSBjYWxsZWQgd2l0aCB0aGUgYG5ld2Aga2V5d29yZCcpO1xuICB9XG4gIHRoaXMuX2luaXQob3B0aW9ucyk7XG59XG5cbmluaXRNaXhpbihWdWUpO1xuc3RhdGVNaXhpbihWdWUpO1xuZXZlbnRzTWl4aW4oVnVlKTtcbmxpZmVjeWNsZU1peGluKFZ1ZSk7XG5yZW5kZXJNaXhpbihWdWUpO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFVzZSAoVnVlKSB7XG4gIFZ1ZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgdmFyIGluc3RhbGxlZFBsdWdpbnMgPSAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyB8fCAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyA9IFtdKSk7XG4gICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaW5kZXhPZihwbHVnaW4pID4gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGluc3RhbGxlZFBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0TWl4aW4kMSAoVnVlKSB7XG4gIFZ1ZS5taXhpbiA9IGZ1bmN0aW9uIChtaXhpbikge1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1peGluKTtcbiAgICByZXR1cm4gdGhpc1xuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV4dGVuZCAoVnVlKSB7XG4gIC8qKlxuICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICovXG4gIFZ1ZS5jaWQgPSAwO1xuICB2YXIgY2lkID0gMTtcblxuICAvKipcbiAgICogQ2xhc3MgaW5oZXJpdGFuY2VcbiAgICovXG4gIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xuICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuICAgIHZhciBTdXBlciA9IHRoaXM7XG4gICAgdmFyIFN1cGVySWQgPSBTdXBlci5jaWQ7XG4gICAgdmFyIGNhY2hlZEN0b3JzID0gZXh0ZW5kT3B0aW9ucy5fQ3RvciB8fCAoZXh0ZW5kT3B0aW9ucy5fQ3RvciA9IHt9KTtcbiAgICBpZiAoY2FjaGVkQ3RvcnNbU3VwZXJJZF0pIHtcbiAgICAgIHJldHVybiBjYWNoZWRDdG9yc1tTdXBlcklkXVxuICAgIH1cblxuICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBuYW1lKSB7XG4gICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIFN1YiA9IGZ1bmN0aW9uIFZ1ZUNvbXBvbmVudCAob3B0aW9ucykge1xuICAgICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgICB9O1xuICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YjtcbiAgICBTdWIuY2lkID0gY2lkKys7XG4gICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICBTdXBlci5vcHRpb25zLFxuICAgICAgZXh0ZW5kT3B0aW9uc1xuICAgICk7XG4gICAgU3ViWydzdXBlciddID0gU3VwZXI7XG5cbiAgICAvLyBGb3IgcHJvcHMgYW5kIGNvbXB1dGVkIHByb3BlcnRpZXMsIHdlIGRlZmluZSB0aGUgcHJveHkgZ2V0dGVycyBvblxuICAgIC8vIHRoZSBWdWUgaW5zdGFuY2VzIGF0IGV4dGVuc2lvbiB0aW1lLCBvbiB0aGUgZXh0ZW5kZWQgcHJvdG90eXBlLiBUaGlzXG4gICAgLy8gYXZvaWRzIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBjYWxscyBmb3IgZWFjaCBpbnN0YW5jZSBjcmVhdGVkLlxuICAgIGlmIChTdWIub3B0aW9ucy5wcm9wcykge1xuICAgICAgaW5pdFByb3BzJDEoU3ViKTtcbiAgICB9XG4gICAgaWYgKFN1Yi5vcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICBpbml0Q29tcHV0ZWQkMShTdWIpO1xuICAgIH1cblxuICAgIC8vIGFsbG93IGZ1cnRoZXIgZXh0ZW5zaW9uL21peGluL3BsdWdpbiB1c2FnZVxuICAgIFN1Yi5leHRlbmQgPSBTdXBlci5leHRlbmQ7XG4gICAgU3ViLm1peGluID0gU3VwZXIubWl4aW47XG4gICAgU3ViLnVzZSA9IFN1cGVyLnVzZTtcblxuICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXG4gICAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgU3ViW3R5cGVdID0gU3VwZXJbdHlwZV07XG4gICAgfSk7XG4gICAgLy8gZW5hYmxlIHJlY3Vyc2l2ZSBzZWxmLWxvb2t1cFxuICAgIGlmIChuYW1lKSB7XG4gICAgICBTdWIub3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gU3ViO1xuICAgIH1cblxuICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXG4gICAgLy8gbGF0ZXIgYXQgaW5zdGFudGlhdGlvbiB3ZSBjYW4gY2hlY2sgaWYgU3VwZXIncyBvcHRpb25zIGhhdmVcbiAgICAvLyBiZWVuIHVwZGF0ZWQuXG4gICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XG4gICAgU3ViLmV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zO1xuICAgIFN1Yi5zZWFsZWRPcHRpb25zID0gZXh0ZW5kKHt9LCBTdWIub3B0aW9ucyk7XG5cbiAgICAvLyBjYWNoZSBjb25zdHJ1Y3RvclxuICAgIGNhY2hlZEN0b3JzW1N1cGVySWRdID0gU3ViO1xuICAgIHJldHVybiBTdWJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzJDEgKENvbXApIHtcbiAgdmFyIHByb3BzID0gQ29tcC5vcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBwcm94eShDb21wLnByb3RvdHlwZSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQkMSAoQ29tcCkge1xuICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIGRlZmluZUNvbXB1dGVkKENvbXAucHJvdG90eXBlLCBrZXksIGNvbXB1dGVkW2tleV0pO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0QXNzZXRSZWdpc3RlcnMgKFZ1ZSkge1xuICAvKipcbiAgICogQ3JlYXRlIGFzc2V0IHJlZ2lzdHJhdGlvbiBtZXRob2RzLlxuICAgKi9cbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChcbiAgICAgIGlkLFxuICAgICAgZGVmaW5pdGlvblxuICAgICkge1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8IGlkO1xuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnZGlyZWN0aXZlJyAmJiB0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRlZmluaXRpb24gPSB7IGJpbmQ6IGRlZmluaXRpb24sIHVwZGF0ZTogZGVmaW5pdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF0gPSBkZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUgKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMgKHBhdHRlcm4sIG5hbWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi5pbmRleE9mKG5hbWUpID4gLTFcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGF0dGVybi5zcGxpdCgnLCcpLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKGlzUmVnRXhwKHBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChuYW1lKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlIChrZWVwQWxpdmVJbnN0YW5jZSwgZmlsdGVyKSB7XG4gIHZhciBjYWNoZSA9IGtlZXBBbGl2ZUluc3RhbmNlLmNhY2hlO1xuICB2YXIga2V5cyA9IGtlZXBBbGl2ZUluc3RhbmNlLmtleXM7XG4gIHZhciBfdm5vZGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5fdm5vZGU7XG4gIGZvciAodmFyIGtleSBpbiBjYWNoZSkge1xuICAgIHZhciBjYWNoZWROb2RlID0gY2FjaGVba2V5XTtcbiAgICBpZiAoY2FjaGVkTm9kZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNhY2hlZE5vZGUuY29tcG9uZW50T3B0aW9ucyk7XG4gICAgICBpZiAobmFtZSAmJiAhZmlsdGVyKG5hbWUpKSB7XG4gICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5LCBrZXlzLCBfdm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKFxuICBjYWNoZSxcbiAga2V5LFxuICBrZXlzLFxuICBjdXJyZW50XG4pIHtcbiAgdmFyIGNhY2hlZCQkMSA9IGNhY2hlW2tleV07XG4gIGlmIChjYWNoZWQkJDEgJiYgKCFjdXJyZW50IHx8IGNhY2hlZCQkMS50YWcgIT09IGN1cnJlbnQudGFnKSkge1xuICAgIGNhY2hlZCQkMS5jb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICB9XG4gIGNhY2hlW2tleV0gPSBudWxsO1xuICByZW1vdmUoa2V5cywga2V5KTtcbn1cblxudmFyIHBhdHRlcm5UeXBlcyA9IFtTdHJpbmcsIFJlZ0V4cCwgQXJyYXldO1xuXG52YXIgS2VlcEFsaXZlID0ge1xuICBuYW1lOiAna2VlcC1hbGl2ZScsXG4gIGFic3RyYWN0OiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgaW5jbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIGV4Y2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICBtYXg6IFtTdHJpbmcsIE51bWJlcl1cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgfSxcblxuICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCAoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIHBydW5lQ2FjaGVFbnRyeSh0aGlzLmNhY2hlLCBrZXksIHRoaXMua2V5cyk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy4kd2F0Y2goJ2luY2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gICAgdGhpcy4kd2F0Y2goJ2V4Y2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgc2xvdCA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgdmFyIHZub2RlID0gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChzbG90KTtcbiAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgaWYgKGNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICAgIC8vIGNoZWNrIHBhdHRlcm5cbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjb21wb25lbnRPcHRpb25zKTtcbiAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgdmFyIGluY2x1ZGUgPSByZWYuaW5jbHVkZTtcbiAgICAgIHZhciBleGNsdWRlID0gcmVmLmV4Y2x1ZGU7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG5vdCBpbmNsdWRlZFxuICAgICAgICAoaW5jbHVkZSAmJiAoIW5hbWUgfHwgIW1hdGNoZXMoaW5jbHVkZSwgbmFtZSkpKSB8fFxuICAgICAgICAvLyBleGNsdWRlZFxuICAgICAgICAoZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHZub2RlXG4gICAgICB9XG5cbiAgICAgIHZhciByZWYkMSA9IHRoaXM7XG4gICAgICB2YXIgY2FjaGUgPSByZWYkMS5jYWNoZTtcbiAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXkgPT0gbnVsbFxuICAgICAgICAvLyBzYW1lIGNvbnN0cnVjdG9yIG1heSBnZXQgcmVnaXN0ZXJlZCBhcyBkaWZmZXJlbnQgbG9jYWwgY29tcG9uZW50c1xuICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgID8gY29tcG9uZW50T3B0aW9ucy5DdG9yLmNpZCArIChjb21wb25lbnRPcHRpb25zLnRhZyA/IChcIjo6XCIgKyAoY29tcG9uZW50T3B0aW9ucy50YWcpKSA6ICcnKVxuICAgICAgICA6IHZub2RlLmtleTtcbiAgICAgIGlmIChjYWNoZVtrZXldKSB7XG4gICAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY2FjaGVba2V5XS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgLy8gbWFrZSBjdXJyZW50IGtleSBmcmVzaGVzdFxuICAgICAgICByZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gdm5vZGU7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAvLyBwcnVuZSBvbGRlc3QgZW50cnlcbiAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXlzWzBdLCBrZXlzLCB0aGlzLl92bm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGUgfHwgKHNsb3QgJiYgc2xvdFswXSlcbiAgfVxufTtcblxudmFyIGJ1aWx0SW5Db21wb25lbnRzID0ge1xuICBLZWVwQWxpdmU6IEtlZXBBbGl2ZVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRHbG9iYWxBUEkgKFZ1ZSkge1xuICAvLyBjb25maWdcbiAgdmFyIGNvbmZpZ0RlZiA9IHt9O1xuICBjb25maWdEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnOyB9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbmZpZ0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnRG8gbm90IHJlcGxhY2UgdGhlIFZ1ZS5jb25maWcgb2JqZWN0LCBzZXQgaW5kaXZpZHVhbCBmaWVsZHMgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ2NvbmZpZycsIGNvbmZpZ0RlZik7XG5cbiAgLy8gZXhwb3NlZCB1dGlsIG1ldGhvZHMuXG4gIC8vIE5PVEU6IHRoZXNlIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIC0gYXZvaWQgcmVseWluZyBvblxuICAvLyB0aGVtIHVubGVzcyB5b3UgYXJlIGF3YXJlIG9mIHRoZSByaXNrLlxuICBWdWUudXRpbCA9IHtcbiAgICB3YXJuOiB3YXJuLFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIG1lcmdlT3B0aW9uczogbWVyZ2VPcHRpb25zLFxuICAgIGRlZmluZVJlYWN0aXZlOiBkZWZpbmVSZWFjdGl2ZSQkMVxuICB9O1xuXG4gIFZ1ZS5zZXQgPSBzZXQ7XG4gIFZ1ZS5kZWxldGUgPSBkZWw7XG4gIFZ1ZS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4gIC8vIDIuNiBleHBsaWNpdCBvYnNlcnZhYmxlIEFQSVxuICBWdWUub2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBvYnNlcnZlKG9iaik7XG4gICAgcmV0dXJuIG9ialxuICB9O1xuXG4gIFZ1ZS5vcHRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZS5vcHRpb25zW3R5cGUgKyAncyddID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfSk7XG5cbiAgLy8gdGhpcyBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBcImJhc2VcIiBjb25zdHJ1Y3RvciB0byBleHRlbmQgYWxsIHBsYWluLW9iamVjdFxuICAvLyBjb21wb25lbnRzIHdpdGggaW4gV2VleCdzIG11bHRpLWluc3RhbmNlIHNjZW5hcmlvcy5cbiAgVnVlLm9wdGlvbnMuX2Jhc2UgPSBWdWU7XG5cbiAgZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIGJ1aWx0SW5Db21wb25lbnRzKTtcblxuICBpbml0VXNlKFZ1ZSk7XG4gIGluaXRNaXhpbiQxKFZ1ZSk7XG4gIGluaXRFeHRlbmQoVnVlKTtcbiAgaW5pdEFzc2V0UmVnaXN0ZXJzKFZ1ZSk7XG59XG5cbmluaXRHbG9iYWxBUEkoVnVlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckaXNTZXJ2ZXInLCB7XG4gIGdldDogaXNTZXJ2ZXJSZW5kZXJpbmdcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRzc3JDb250ZXh0Jywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gdGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dFxuICB9XG59KTtcblxuLy8gZXhwb3NlIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IGZvciBzc3IgcnVudGltZSBoZWxwZXIgaW5zdGFsbGF0aW9uXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnRnVuY3Rpb25hbFJlbmRlckNvbnRleHQnLCB7XG4gIHZhbHVlOiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dFxufSk7XG5cblZ1ZS52ZXJzaW9uID0gJzIuNi4xMic7XG5cbi8qICAqL1xuXG4vLyB0aGVzZSBhcmUgcmVzZXJ2ZWQgZm9yIHdlYiBiZWNhdXNlIHRoZXkgYXJlIGRpcmVjdGx5IGNvbXBpbGVkIGF3YXlcbi8vIGR1cmluZyB0ZW1wbGF0ZSBjb21waWxhdGlvblxudmFyIGlzUmVzZXJ2ZWRBdHRyID0gbWFrZU1hcCgnc3R5bGUsY2xhc3MnKTtcblxuLy8gYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSB1c2luZyBwcm9wcyBmb3IgYmluZGluZ1xudmFyIGFjY2VwdFZhbHVlID0gbWFrZU1hcCgnaW5wdXQsdGV4dGFyZWEsb3B0aW9uLHNlbGVjdCxwcm9ncmVzcycpO1xudmFyIG11c3RVc2VQcm9wID0gZnVuY3Rpb24gKHRhZywgdHlwZSwgYXR0cikge1xuICByZXR1cm4gKFxuICAgIChhdHRyID09PSAndmFsdWUnICYmIGFjY2VwdFZhbHVlKHRhZykpICYmIHR5cGUgIT09ICdidXR0b24nIHx8XG4gICAgKGF0dHIgPT09ICdzZWxlY3RlZCcgJiYgdGFnID09PSAnb3B0aW9uJykgfHxcbiAgICAoYXR0ciA9PT0gJ2NoZWNrZWQnICYmIHRhZyA9PT0gJ2lucHV0JykgfHxcbiAgICAoYXR0ciA9PT0gJ211dGVkJyAmJiB0YWcgPT09ICd2aWRlbycpXG4gIClcbn07XG5cbnZhciBpc0VudW1lcmF0ZWRBdHRyID0gbWFrZU1hcCgnY29udGVudGVkaXRhYmxlLGRyYWdnYWJsZSxzcGVsbGNoZWNrJyk7XG5cbnZhciBpc1ZhbGlkQ29udGVudEVkaXRhYmxlVmFsdWUgPSBtYWtlTWFwKCdldmVudHMsY2FyZXQsdHlwaW5nLHBsYWludGV4dC1vbmx5Jyk7XG5cbnZhciBjb252ZXJ0RW51bWVyYXRlZFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpIHx8IHZhbHVlID09PSAnZmFsc2UnXG4gICAgPyAnZmFsc2UnXG4gICAgLy8gYWxsb3cgYXJiaXRyYXJ5IHN0cmluZyB2YWx1ZSBmb3IgY29udGVudGVkaXRhYmxlXG4gICAgOiBrZXkgPT09ICdjb250ZW50ZWRpdGFibGUnICYmIGlzVmFsaWRDb250ZW50RWRpdGFibGVWYWx1ZSh2YWx1ZSlcbiAgICAgID8gdmFsdWVcbiAgICAgIDogJ3RydWUnXG59O1xuXG52YXIgaXNCb29sZWFuQXR0ciA9IG1ha2VNYXAoXG4gICdhbGxvd2Z1bGxzY3JlZW4sYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNoZWNrZWQsY29tcGFjdCxjb250cm9scyxkZWNsYXJlLCcgK1xuICAnZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLCcgK1xuICAnZW5hYmxlZCxmb3Jtbm92YWxpZGF0ZSxoaWRkZW4saW5kZXRlcm1pbmF0ZSxpbmVydCxpc21hcCxpdGVtc2NvcGUsbG9vcCxtdWx0aXBsZSwnICtcbiAgJ211dGVkLG5vaHJlZixub3Jlc2l6ZSxub3NoYWRlLG5vdmFsaWRhdGUsbm93cmFwLG9wZW4scGF1c2VvbmV4aXQscmVhZG9ubHksJyArXG4gICdyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLCcgK1xuICAndHJ1ZXNwZWVkLHR5cGVtdXN0bWF0Y2gsdmlzaWJsZSdcbik7XG5cbnZhciB4bGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuXG52YXIgaXNYbGluayA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLmNoYXJBdCg1KSA9PT0gJzonICYmIG5hbWUuc2xpY2UoMCwgNSkgPT09ICd4bGluaydcbn07XG5cbnZhciBnZXRYbGlua1Byb3AgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gaXNYbGluayhuYW1lKSA/IG5hbWUuc2xpY2UoNiwgbmFtZS5sZW5ndGgpIDogJydcbn07XG5cbnZhciBpc0ZhbHN5QXR0clZhbHVlID0gZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gdmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGdlbkNsYXNzRm9yVm5vZGUgKHZub2RlKSB7XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgdmFyIHBhcmVudE5vZGUgPSB2bm9kZTtcbiAgdmFyIGNoaWxkTm9kZSA9IHZub2RlO1xuICB3aGlsZSAoaXNEZWYoY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgaWYgKGNoaWxkTm9kZSAmJiBjaGlsZE5vZGUuZGF0YSkge1xuICAgICAgZGF0YSA9IG1lcmdlQ2xhc3NEYXRhKGNoaWxkTm9kZS5kYXRhLCBkYXRhKTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKGlzRGVmKHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudCkpIHtcbiAgICBpZiAocGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBtZXJnZUNsYXNzRGF0YShkYXRhLCBwYXJlbnROb2RlLmRhdGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVuZGVyQ2xhc3MoZGF0YS5zdGF0aWNDbGFzcywgZGF0YS5jbGFzcylcbn1cblxuZnVuY3Rpb24gbWVyZ2VDbGFzc0RhdGEgKGNoaWxkLCBwYXJlbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0aWNDbGFzczogY29uY2F0KGNoaWxkLnN0YXRpY0NsYXNzLCBwYXJlbnQuc3RhdGljQ2xhc3MpLFxuICAgIGNsYXNzOiBpc0RlZihjaGlsZC5jbGFzcylcbiAgICAgID8gW2NoaWxkLmNsYXNzLCBwYXJlbnQuY2xhc3NdXG4gICAgICA6IHBhcmVudC5jbGFzc1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNsYXNzIChcbiAgc3RhdGljQ2xhc3MsXG4gIGR5bmFtaWNDbGFzc1xuKSB7XG4gIGlmIChpc0RlZihzdGF0aWNDbGFzcykgfHwgaXNEZWYoZHluYW1pY0NsYXNzKSkge1xuICAgIHJldHVybiBjb25jYXQoc3RhdGljQ2xhc3MsIHN0cmluZ2lmeUNsYXNzKGR5bmFtaWNDbGFzcykpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gYSA/IGIgPyAoYSArICcgJyArIGIpIDogYSA6IChiIHx8ICcnKVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlDbGFzcyAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeUFycmF5KHZhbHVlKVxuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5T2JqZWN0KHZhbHVlKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUFycmF5ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIHZhciBzdHJpbmdpZmllZDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaXNEZWYoc3RyaW5naWZpZWQgPSBzdHJpbmdpZnlDbGFzcyh2YWx1ZVtpXSkpICYmIHN0cmluZ2lmaWVkICE9PSAnJykge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0gc3RyaW5naWZpZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5T2JqZWN0ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbnZhciBuYW1lc3BhY2VNYXAgPSB7XG4gIHN2ZzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgbWF0aDogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnXG59O1xuXG52YXIgaXNIVE1MVGFnID0gbWFrZU1hcChcbiAgJ2h0bWwsYm9keSxiYXNlLGhlYWQsbGluayxtZXRhLHN0eWxlLHRpdGxlLCcgK1xuICAnYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLCcgK1xuICAnZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLHBpY3R1cmUsaHIsaW1nLGxpLG1haW4sb2wscCxwcmUsdWwsJyArXG4gICdhLGIsYWJicixiZGksYmRvLGJyLGNpdGUsY29kZSxkYXRhLGRmbixlbSxpLGtiZCxtYXJrLHEscnAscnQscnRjLHJ1YnksJyArXG4gICdzLHNhbXAsc21hbGwsc3BhbixzdHJvbmcsc3ViLHN1cCx0aW1lLHUsdmFyLHdicixhcmVhLGF1ZGlvLG1hcCx0cmFjayx2aWRlbywnICtcbiAgJ2VtYmVkLG9iamVjdCxwYXJhbSxzb3VyY2UsY2FudmFzLHNjcmlwdCxub3NjcmlwdCxkZWwsaW5zLCcgK1xuICAnY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsJyArXG4gICdidXR0b24sZGF0YWxpc3QsZmllbGRzZXQsZm9ybSxpbnB1dCxsYWJlbCxsZWdlbmQsbWV0ZXIsb3B0Z3JvdXAsb3B0aW9uLCcgK1xuICAnb3V0cHV0LHByb2dyZXNzLHNlbGVjdCx0ZXh0YXJlYSwnICtcbiAgJ2RldGFpbHMsZGlhbG9nLG1lbnUsbWVudWl0ZW0sc3VtbWFyeSwnICtcbiAgJ2NvbnRlbnQsZWxlbWVudCxzaGFkb3csdGVtcGxhdGUsYmxvY2txdW90ZSxpZnJhbWUsdGZvb3QnXG4pO1xuXG4vLyB0aGlzIG1hcCBpcyBpbnRlbnRpb25hbGx5IHNlbGVjdGl2ZSwgb25seSBjb3ZlcmluZyBTVkcgZWxlbWVudHMgdGhhdCBtYXlcbi8vIGNvbnRhaW4gY2hpbGQgZWxlbWVudHMuXG52YXIgaXNTVkcgPSBtYWtlTWFwKFxuICAnc3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udC1mYWNlLCcgK1xuICAnZm9yZWlnbk9iamVjdCxnLGdseXBoLGltYWdlLGxpbmUsbWFya2VyLG1hc2ssbWlzc2luZy1nbHlwaCxwYXRoLHBhdHRlcm4sJyArXG4gICdwb2x5Z29uLHBvbHlsaW5lLHJlY3Qsc3dpdGNoLHN5bWJvbCx0ZXh0LHRleHRwYXRoLHRzcGFuLHVzZSx2aWV3JyxcbiAgdHJ1ZVxuKTtcblxudmFyIGlzUmVzZXJ2ZWRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHJldHVybiBpc0hUTUxUYWcodGFnKSB8fCBpc1NWRyh0YWcpXG59O1xuXG5mdW5jdGlvbiBnZXRUYWdOYW1lc3BhY2UgKHRhZykge1xuICBpZiAoaXNTVkcodGFnKSkge1xuICAgIHJldHVybiAnc3ZnJ1xuICB9XG4gIC8vIGJhc2ljIHN1cHBvcnQgZm9yIE1hdGhNTFxuICAvLyBub3RlIGl0IGRvZXNuJ3Qgc3VwcG9ydCBvdGhlciBNYXRoTUwgZWxlbWVudHMgYmVpbmcgY29tcG9uZW50IHJvb3RzXG4gIGlmICh0YWcgPT09ICdtYXRoJykge1xuICAgIHJldHVybiAnbWF0aCdcbiAgfVxufVxuXG52YXIgdW5rbm93bkVsZW1lbnRDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBpc1Vua25vd25FbGVtZW50ICh0YWcpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghaW5Ccm93c2VyKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAoaXNSZXNlcnZlZFRhZyh0YWcpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgdGFnID0gdGFnLnRvTG93ZXJDYXNlKCk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddICE9IG51bGwpIHtcbiAgICByZXR1cm4gdW5rbm93bkVsZW1lbnRDYWNoZVt0YWddXG4gIH1cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAodGFnLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjgyMTAzNjQvMTA3MDI0NFxuICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gKFxuICAgICAgZWwuY29uc3RydWN0b3IgPT09IHdpbmRvdy5IVE1MVW5rbm93bkVsZW1lbnQgfHxcbiAgICAgIGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTEVsZW1lbnRcbiAgICApKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gL0hUTUxVbmtub3duRWxlbWVudC8udGVzdChlbC50b1N0cmluZygpKSlcbiAgfVxufVxuXG52YXIgaXNUZXh0SW5wdXRUeXBlID0gbWFrZU1hcCgndGV4dCxudW1iZXIscGFzc3dvcmQsc2VhcmNoLGVtYWlsLHRlbCx1cmwnKTtcblxuLyogICovXG5cbi8qKlxuICogUXVlcnkgYW4gZWxlbWVudCBzZWxlY3RvciBpZiBpdCdzIG5vdCBhbiBlbGVtZW50IGFscmVhZHkuXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5IChlbCkge1xuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIHZhciBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ0Nhbm5vdCBmaW5kIGVsZW1lbnQ6ICcgKyBlbFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZWxcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCQxICh0YWdOYW1lLCB2bm9kZSkge1xuICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgaWYgKHRhZ05hbWUgIT09ICdzZWxlY3QnKSB7XG4gICAgcmV0dXJuIGVsbVxuICB9XG4gIC8vIGZhbHNlIG9yIG51bGwgd2lsbCByZW1vdmUgdGhlIGF0dHJpYnV0ZSBidXQgdW5kZWZpbmVkIHdpbGwgbm90XG4gIGlmICh2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEuYXR0cnMgJiYgdm5vZGUuZGF0YS5hdHRycy5tdWx0aXBsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxtLnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcbiAgfVxuICByZXR1cm4gZWxtXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyAobmFtZXNwYWNlLCB0YWdOYW1lKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlTWFwW25hbWVzcGFjZV0sIHRhZ05hbWUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlICh0ZXh0KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50ICh0ZXh0KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRleHQpXG59XG5cbmZ1bmN0aW9uIGluc2VydEJlZm9yZSAocGFyZW50Tm9kZSwgbmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQgKG5vZGUsIGNoaWxkKSB7XG4gIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZCAobm9kZSwgY2hpbGQpIHtcbiAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHBhcmVudE5vZGUgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZVxufVxuXG5mdW5jdGlvbiBuZXh0U2libGluZyAobm9kZSkge1xuICByZXR1cm4gbm9kZS5uZXh0U2libGluZ1xufVxuXG5mdW5jdGlvbiB0YWdOYW1lIChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWVcbn1cblxuZnVuY3Rpb24gc2V0VGV4dENvbnRlbnQgKG5vZGUsIHRleHQpIHtcbiAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlU2NvcGUgKG5vZGUsIHNjb3BlSWQpIHtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoc2NvcGVJZCwgJycpO1xufVxuXG52YXIgbm9kZU9wcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCQxLFxuICBjcmVhdGVFbGVtZW50TlM6IGNyZWF0ZUVsZW1lbnROUyxcbiAgY3JlYXRlVGV4dE5vZGU6IGNyZWF0ZVRleHROb2RlLFxuICBjcmVhdGVDb21tZW50OiBjcmVhdGVDb21tZW50LFxuICBpbnNlcnRCZWZvcmU6IGluc2VydEJlZm9yZSxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQsXG4gIHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXG4gIG5leHRTaWJsaW5nOiBuZXh0U2libGluZyxcbiAgdGFnTmFtZTogdGFnTmFtZSxcbiAgc2V0VGV4dENvbnRlbnQ6IHNldFRleHRDb250ZW50LFxuICBzZXRTdHlsZVNjb3BlOiBzZXRTdHlsZVNjb3BlXG59KTtcblxuLyogICovXG5cbnZhciByZWYgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlIChfLCB2bm9kZSkge1xuICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGlmIChvbGRWbm9kZS5kYXRhLnJlZiAhPT0gdm5vZGUuZGF0YS5yZWYpIHtcbiAgICAgIHJlZ2lzdGVyUmVmKG9sZFZub2RlLCB0cnVlKTtcbiAgICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgcmVnaXN0ZXJSZWYodm5vZGUsIHRydWUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiByZWdpc3RlclJlZiAodm5vZGUsIGlzUmVtb3ZhbCkge1xuICB2YXIga2V5ID0gdm5vZGUuZGF0YS5yZWY7XG4gIGlmICghaXNEZWYoa2V5KSkgeyByZXR1cm4gfVxuXG4gIHZhciB2bSA9IHZub2RlLmNvbnRleHQ7XG4gIHZhciByZWYgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSB8fCB2bm9kZS5lbG07XG4gIHZhciByZWZzID0gdm0uJHJlZnM7XG4gIGlmIChpc1JlbW92YWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZWZzW2tleV0pKSB7XG4gICAgICByZW1vdmUocmVmc1trZXldLCByZWYpO1xuICAgIH0gZWxzZSBpZiAocmVmc1trZXldID09PSByZWYpIHtcbiAgICAgIHJlZnNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZub2RlLmRhdGEucmVmSW5Gb3IpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZWZzW2tleV0pKSB7XG4gICAgICAgIHJlZnNba2V5XSA9IFtyZWZdO1xuICAgICAgfSBlbHNlIGlmIChyZWZzW2tleV0uaW5kZXhPZihyZWYpIDwgMCkge1xuICAgICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgICAgcmVmc1trZXldLnB1c2gocmVmKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVmc1trZXldID0gcmVmO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFZpcnR1YWwgRE9NIHBhdGNoaW5nIGFsZ29yaXRobSBiYXNlZCBvbiBTbmFiYmRvbSBieVxuICogU2ltb24gRnJpaXMgVmluZHVtIChAcGFsZGVwaW5kKVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGFsZGVwaW5kL3NuYWJiZG9tL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBtb2RpZmllZCBieSBFdmFuIFlvdSAoQHl5eDk5MDgwMylcbiAqXG4gKiBOb3QgdHlwZS1jaGVja2luZyB0aGlzIGJlY2F1c2UgdGhpcyBmaWxlIGlzIHBlcmYtY3JpdGljYWwgYW5kIHRoZSBjb3N0XG4gKiBvZiBtYWtpbmcgZmxvdyB1bmRlcnN0YW5kIGl0IGlzIG5vdCB3b3J0aCBpdC5cbiAqL1xuXG52YXIgZW1wdHlOb2RlID0gbmV3IFZOb2RlKCcnLCB7fSwgW10pO1xuXG52YXIgaG9va3MgPSBbJ2NyZWF0ZScsICdhY3RpdmF0ZScsICd1cGRhdGUnLCAncmVtb3ZlJywgJ2Rlc3Ryb3knXTtcblxuZnVuY3Rpb24gc2FtZVZub2RlIChhLCBiKSB7XG4gIHJldHVybiAoXG4gICAgYS5rZXkgPT09IGIua2V5ICYmIChcbiAgICAgIChcbiAgICAgICAgYS50YWcgPT09IGIudGFnICYmXG4gICAgICAgIGEuaXNDb21tZW50ID09PSBiLmlzQ29tbWVudCAmJlxuICAgICAgICBpc0RlZihhLmRhdGEpID09PSBpc0RlZihiLmRhdGEpICYmXG4gICAgICAgIHNhbWVJbnB1dFR5cGUoYSwgYilcbiAgICAgICkgfHwgKFxuICAgICAgICBpc1RydWUoYS5pc0FzeW5jUGxhY2Vob2xkZXIpICYmXG4gICAgICAgIGEuYXN5bmNGYWN0b3J5ID09PSBiLmFzeW5jRmFjdG9yeSAmJlxuICAgICAgICBpc1VuZGVmKGIuYXN5bmNGYWN0b3J5LmVycm9yKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5mdW5jdGlvbiBzYW1lSW5wdXRUeXBlIChhLCBiKSB7XG4gIGlmIChhLnRhZyAhPT0gJ2lucHV0JykgeyByZXR1cm4gdHJ1ZSB9XG4gIHZhciBpO1xuICB2YXIgdHlwZUEgPSBpc0RlZihpID0gYS5kYXRhKSAmJiBpc0RlZihpID0gaS5hdHRycykgJiYgaS50eXBlO1xuICB2YXIgdHlwZUIgPSBpc0RlZihpID0gYi5kYXRhKSAmJiBpc0RlZihpID0gaS5hdHRycykgJiYgaS50eXBlO1xuICByZXR1cm4gdHlwZUEgPT09IHR5cGVCIHx8IGlzVGV4dElucHV0VHlwZSh0eXBlQSkgJiYgaXNUZXh0SW5wdXRUeXBlKHR5cGVCKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlUb09sZElkeCAoY2hpbGRyZW4sIGJlZ2luSWR4LCBlbmRJZHgpIHtcbiAgdmFyIGksIGtleTtcbiAgdmFyIG1hcCA9IHt9O1xuICBmb3IgKGkgPSBiZWdpbklkeDsgaSA8PSBlbmRJZHg7ICsraSkge1xuICAgIGtleSA9IGNoaWxkcmVuW2ldLmtleTtcbiAgICBpZiAoaXNEZWYoa2V5KSkgeyBtYXBba2V5XSA9IGk7IH1cbiAgfVxuICByZXR1cm4gbWFwXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdGNoRnVuY3Rpb24gKGJhY2tlbmQpIHtcbiAgdmFyIGksIGo7XG4gIHZhciBjYnMgPSB7fTtcblxuICB2YXIgbW9kdWxlcyA9IGJhY2tlbmQubW9kdWxlcztcbiAgdmFyIG5vZGVPcHMgPSBiYWNrZW5kLm5vZGVPcHM7XG5cbiAgZm9yIChpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgKytpKSB7XG4gICAgY2JzW2hvb2tzW2ldXSA9IFtdO1xuICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICBpZiAoaXNEZWYobW9kdWxlc1tqXVtob29rc1tpXV0pKSB7XG4gICAgICAgIGNic1tob29rc1tpXV0ucHVzaChtb2R1bGVzW2pdW2hvb2tzW2ldXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW1wdHlOb2RlQXQgKGVsbSkge1xuICAgIHJldHVybiBuZXcgVk5vZGUobm9kZU9wcy50YWdOYW1lKGVsbSkudG9Mb3dlckNhc2UoKSwge30sIFtdLCB1bmRlZmluZWQsIGVsbSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJtQ2IgKGNoaWxkRWxtLCBsaXN0ZW5lcnMpIHtcbiAgICBmdW5jdGlvbiByZW1vdmUkJDEgKCkge1xuICAgICAgaWYgKC0tcmVtb3ZlJCQxLmxpc3RlbmVycyA9PT0gMCkge1xuICAgICAgICByZW1vdmVOb2RlKGNoaWxkRWxtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlJCQxLmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICByZXR1cm4gcmVtb3ZlJCQxXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVOb2RlIChlbCkge1xuICAgIHZhciBwYXJlbnQgPSBub2RlT3BzLnBhcmVudE5vZGUoZWwpO1xuICAgIC8vIGVsZW1lbnQgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIHJlbW92ZWQgZHVlIHRvIHYtaHRtbCAvIHYtdGV4dFxuICAgIGlmIChpc0RlZihwYXJlbnQpKSB7XG4gICAgICBub2RlT3BzLnJlbW92ZUNoaWxkKHBhcmVudCwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVW5rbm93bkVsZW1lbnQkJDEgKHZub2RlLCBpblZQcmUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWluVlByZSAmJlxuICAgICAgIXZub2RlLm5zICYmXG4gICAgICAhKFxuICAgICAgICBjb25maWcuaWdub3JlZEVsZW1lbnRzLmxlbmd0aCAmJlxuICAgICAgICBjb25maWcuaWdub3JlZEVsZW1lbnRzLnNvbWUoZnVuY3Rpb24gKGlnbm9yZSkge1xuICAgICAgICAgIHJldHVybiBpc1JlZ0V4cChpZ25vcmUpXG4gICAgICAgICAgICA/IGlnbm9yZS50ZXN0KHZub2RlLnRhZylcbiAgICAgICAgICAgIDogaWdub3JlID09PSB2bm9kZS50YWdcbiAgICAgICAgfSlcbiAgICAgICkgJiZcbiAgICAgIGNvbmZpZy5pc1Vua25vd25FbGVtZW50KHZub2RlLnRhZylcbiAgICApXG4gIH1cblxuICB2YXIgY3JlYXRpbmdFbG1JblZQcmUgPSAwO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsbSAoXG4gICAgdm5vZGUsXG4gICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLFxuICAgIHBhcmVudEVsbSxcbiAgICByZWZFbG0sXG4gICAgbmVzdGVkLFxuICAgIG93bmVyQXJyYXksXG4gICAgaW5kZXhcbiAgKSB7XG4gICAgaWYgKGlzRGVmKHZub2RlLmVsbSkgJiYgaXNEZWYob3duZXJBcnJheSkpIHtcbiAgICAgIC8vIFRoaXMgdm5vZGUgd2FzIHVzZWQgaW4gYSBwcmV2aW91cyByZW5kZXIhXG4gICAgICAvLyBub3cgaXQncyB1c2VkIGFzIGEgbmV3IG5vZGUsIG92ZXJ3cml0aW5nIGl0cyBlbG0gd291bGQgY2F1c2VcbiAgICAgIC8vIHBvdGVudGlhbCBwYXRjaCBlcnJvcnMgZG93biB0aGUgcm9hZCB3aGVuIGl0J3MgdXNlZCBhcyBhbiBpbnNlcnRpb25cbiAgICAgIC8vIHJlZmVyZW5jZSBub2RlLiBJbnN0ZWFkLCB3ZSBjbG9uZSB0aGUgbm9kZSBvbi1kZW1hbmQgYmVmb3JlIGNyZWF0aW5nXG4gICAgICAvLyBhc3NvY2lhdGVkIERPTSBlbGVtZW50IGZvciBpdC5cbiAgICAgIHZub2RlID0gb3duZXJBcnJheVtpbmRleF0gPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgICB9XG5cbiAgICB2bm9kZS5pc1Jvb3RJbnNlcnQgPSAhbmVzdGVkOyAvLyBmb3IgdHJhbnNpdGlvbiBlbnRlciBjaGVja1xuICAgIGlmIChjcmVhdGVDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgdmFyIHRhZyA9IHZub2RlLnRhZztcbiAgICBpZiAoaXNEZWYodGFnKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5wcmUpIHtcbiAgICAgICAgICBjcmVhdGluZ0VsbUluVlByZSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Vua25vd25FbGVtZW50JCQxKHZub2RlLCBjcmVhdGluZ0VsbUluVlByZSkpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgJ1Vua25vd24gY3VzdG9tIGVsZW1lbnQ6IDwnICsgdGFnICsgJz4gLSBkaWQgeW91ICcgK1xuICAgICAgICAgICAgJ3JlZ2lzdGVyIHRoZSBjb21wb25lbnQgY29ycmVjdGx5PyBGb3IgcmVjdXJzaXZlIGNvbXBvbmVudHMsICcgK1xuICAgICAgICAgICAgJ21ha2Ugc3VyZSB0byBwcm92aWRlIHRoZSBcIm5hbWVcIiBvcHRpb24uJyxcbiAgICAgICAgICAgIHZub2RlLmNvbnRleHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZub2RlLmVsbSA9IHZub2RlLm5zXG4gICAgICAgID8gbm9kZU9wcy5jcmVhdGVFbGVtZW50TlModm5vZGUubnMsIHRhZylcbiAgICAgICAgOiBub2RlT3BzLmNyZWF0ZUVsZW1lbnQodGFnLCB2bm9kZSk7XG4gICAgICBzZXRTY29wZSh2bm9kZSk7XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAge1xuICAgICAgICBjcmVhdGVDaGlsZHJlbih2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGF0YSAmJiBkYXRhLnByZSkge1xuICAgICAgICBjcmVhdGluZ0VsbUluVlByZS0tO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNUcnVlKHZub2RlLmlzQ29tbWVudCkpIHtcbiAgICAgIHZub2RlLmVsbSA9IG5vZGVPcHMuY3JlYXRlQ29tbWVudCh2bm9kZS50ZXh0KTtcbiAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm5vZGUuZWxtID0gbm9kZU9wcy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KTtcbiAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSB7XG4gICAgdmFyIGkgPSB2bm9kZS5kYXRhO1xuICAgIGlmIChpc0RlZihpKSkge1xuICAgICAgdmFyIGlzUmVhY3RpdmF0ZWQgPSBpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaS5rZWVwQWxpdmU7XG4gICAgICBpZiAoaXNEZWYoaSA9IGkuaG9vaykgJiYgaXNEZWYoaSA9IGkuaW5pdCkpIHtcbiAgICAgICAgaSh2bm9kZSwgZmFsc2UgLyogaHlkcmF0aW5nICovKTtcbiAgICAgIH1cbiAgICAgIC8vIGFmdGVyIGNhbGxpbmcgdGhlIGluaXQgaG9vaywgaWYgdGhlIHZub2RlIGlzIGEgY2hpbGQgY29tcG9uZW50XG4gICAgICAvLyBpdCBzaG91bGQndmUgY3JlYXRlZCBhIGNoaWxkIGluc3RhbmNlIGFuZCBtb3VudGVkIGl0LiB0aGUgY2hpbGRcbiAgICAgIC8vIGNvbXBvbmVudCBhbHNvIGhhcyBzZXQgdGhlIHBsYWNlaG9sZGVyIHZub2RlJ3MgZWxtLlxuICAgICAgLy8gaW4gdGhhdCBjYXNlIHdlIGNhbiBqdXN0IHJldHVybiB0aGUgZWxlbWVudCBhbmQgYmUgZG9uZS5cbiAgICAgIGlmIChpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICAgICAgaW5pdENvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgICAgICBpZiAoaXNUcnVlKGlzUmVhY3RpdmF0ZWQpKSB7XG4gICAgICAgICAgcmVhY3RpdmF0ZUNvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0Q29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgaWYgKGlzRGVmKHZub2RlLmRhdGEucGVuZGluZ0luc2VydCkpIHtcbiAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoLmFwcGx5KGluc2VydGVkVm5vZGVRdWV1ZSwgdm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0KTtcbiAgICAgIHZub2RlLmRhdGEucGVuZGluZ0luc2VydCA9IG51bGw7XG4gICAgfVxuICAgIHZub2RlLmVsbSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlLiRlbDtcbiAgICBpZiAoaXNQYXRjaGFibGUodm5vZGUpKSB7XG4gICAgICBpbnZva2VDcmVhdGVIb29rcyh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIHNldFNjb3BlKHZub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZW1wdHkgY29tcG9uZW50IHJvb3QuXG4gICAgICAvLyBza2lwIGFsbCBlbGVtZW50LXJlbGF0ZWQgbW9kdWxlcyBleGNlcHQgZm9yIHJlZiAoIzM0NTUpXG4gICAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gICAgICAvLyBtYWtlIHN1cmUgdG8gaW52b2tlIHRoZSBpbnNlcnQgaG9va1xuICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2godm5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWN0aXZhdGVDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSB7XG4gICAgdmFyIGk7XG4gICAgLy8gaGFjayBmb3IgIzQzMzk6IGEgcmVhY3RpdmF0ZWQgY29tcG9uZW50IHdpdGggaW5uZXIgdHJhbnNpdGlvblxuICAgIC8vIGRvZXMgbm90IHRyaWdnZXIgYmVjYXVzZSB0aGUgaW5uZXIgbm9kZSdzIGNyZWF0ZWQgaG9va3MgYXJlIG5vdCBjYWxsZWRcbiAgICAvLyBhZ2Fpbi4gSXQncyBub3QgaWRlYWwgdG8gaW52b2x2ZSBtb2R1bGUtc3BlY2lmaWMgbG9naWMgaW4gaGVyZSBidXRcbiAgICAvLyB0aGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgYSBiZXR0ZXIgd2F5IHRvIGRvIGl0LlxuICAgIHZhciBpbm5lck5vZGUgPSB2bm9kZTtcbiAgICB3aGlsZSAoaW5uZXJOb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICBpbm5lck5vZGUgPSBpbm5lck5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgaWYgKGlzRGVmKGkgPSBpbm5lck5vZGUuZGF0YSkgJiYgaXNEZWYoaSA9IGkudHJhbnNpdGlvbikpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5hY3RpdmF0ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGNicy5hY3RpdmF0ZVtpXShlbXB0eU5vZGUsIGlubmVyTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2goaW5uZXJOb2RlKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdW5saWtlIGEgbmV3bHkgY3JlYXRlZCBjb21wb25lbnQsXG4gICAgLy8gYSByZWFjdGl2YXRlZCBrZWVwLWFsaXZlIGNvbXBvbmVudCBkb2Vzbid0IGluc2VydCBpdHNlbGZcbiAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnQgKHBhcmVudCwgZWxtLCByZWYkJDEpIHtcbiAgICBpZiAoaXNEZWYocGFyZW50KSkge1xuICAgICAgaWYgKGlzRGVmKHJlZiQkMSkpIHtcbiAgICAgICAgaWYgKG5vZGVPcHMucGFyZW50Tm9kZShyZWYkJDEpID09PSBwYXJlbnQpIHtcbiAgICAgICAgICBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnQsIGVsbSwgcmVmJCQxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZChwYXJlbnQsIGVsbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hpbGRyZW4gKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjaGVja0R1cGxpY2F0ZUtleXMoY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICBjcmVhdGVFbG0oY2hpbGRyZW5baV0sIGluc2VydGVkVm5vZGVRdWV1ZSwgdm5vZGUuZWxtLCBudWxsLCB0cnVlLCBjaGlsZHJlbiwgaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZSh2bm9kZS50ZXh0KSkge1xuICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZCh2bm9kZS5lbG0sIG5vZGVPcHMuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKHZub2RlLnRleHQpKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNQYXRjaGFibGUgKHZub2RlKSB7XG4gICAgd2hpbGUgKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICB2bm9kZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRGVmKHZub2RlLnRhZylcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUNyZWF0ZUhvb2tzICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSQxKSB7XG4gICAgICBjYnMuY3JlYXRlW2kkMV0oZW1wdHlOb2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIGkgPSB2bm9kZS5kYXRhLmhvb2s7IC8vIFJldXNlIHZhcmlhYmxlXG4gICAgaWYgKGlzRGVmKGkpKSB7XG4gICAgICBpZiAoaXNEZWYoaS5jcmVhdGUpKSB7IGkuY3JlYXRlKGVtcHR5Tm9kZSwgdm5vZGUpOyB9XG4gICAgICBpZiAoaXNEZWYoaS5pbnNlcnQpKSB7IGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTsgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBzY29wZSBpZCBhdHRyaWJ1dGUgZm9yIHNjb3BlZCBDU1MuXG4gIC8vIHRoaXMgaXMgaW1wbGVtZW50ZWQgYXMgYSBzcGVjaWFsIGNhc2UgdG8gYXZvaWQgdGhlIG92ZXJoZWFkXG4gIC8vIG9mIGdvaW5nIHRocm91Z2ggdGhlIG5vcm1hbCBhdHRyaWJ1dGUgcGF0Y2hpbmcgcHJvY2Vzcy5cbiAgZnVuY3Rpb24gc2V0U2NvcGUgKHZub2RlKSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5mblNjb3BlSWQpKSB7XG4gICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFuY2VzdG9yID0gdm5vZGU7XG4gICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkgPSBhbmNlc3Rvci5jb250ZXh0KSAmJiBpc0RlZihpID0gaS4kb3B0aW9ucy5fc2NvcGVJZCkpIHtcbiAgICAgICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICAgICAgfVxuICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZm9yIHNsb3QgY29udGVudCB0aGV5IHNob3VsZCBhbHNvIGdldCB0aGUgc2NvcGVJZCBmcm9tIHRoZSBob3N0IGluc3RhbmNlLlxuICAgIGlmIChpc0RlZihpID0gYWN0aXZlSW5zdGFuY2UpICYmXG4gICAgICBpICE9PSB2bm9kZS5jb250ZXh0ICYmXG4gICAgICBpICE9PSB2bm9kZS5mbkNvbnRleHQgJiZcbiAgICAgIGlzRGVmKGkgPSBpLiRvcHRpb25zLl9zY29wZUlkKVxuICAgICkge1xuICAgICAgbm9kZU9wcy5zZXRTdHlsZVNjb3BlKHZub2RlLmVsbSwgaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkVm5vZGVzIChwYXJlbnRFbG0sIHJlZkVsbSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4LCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICBjcmVhdGVFbG0odm5vZGVzW3N0YXJ0SWR4XSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSwgZmFsc2UsIHZub2Rlcywgc3RhcnRJZHgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZURlc3Ryb3lIb29rICh2bm9kZSkge1xuICAgIHZhciBpLCBqO1xuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5kZXN0cm95KSkgeyBpKHZub2RlKTsgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5kZXN0cm95Lmxlbmd0aDsgKytpKSB7IGNicy5kZXN0cm95W2ldKHZub2RlKTsgfVxuICAgIH1cbiAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNoaWxkcmVuKSkge1xuICAgICAgZm9yIChqID0gMDsgaiA8IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIGludm9rZURlc3Ryb3lIb29rKHZub2RlLmNoaWxkcmVuW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVWbm9kZXMgKHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCkge1xuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgIHZhciBjaCA9IHZub2Rlc1tzdGFydElkeF07XG4gICAgICBpZiAoaXNEZWYoY2gpKSB7XG4gICAgICAgIGlmIChpc0RlZihjaC50YWcpKSB7XG4gICAgICAgICAgcmVtb3ZlQW5kSW52b2tlUmVtb3ZlSG9vayhjaCk7XG4gICAgICAgICAgaW52b2tlRGVzdHJveUhvb2soY2gpO1xuICAgICAgICB9IGVsc2UgeyAvLyBUZXh0IG5vZGVcbiAgICAgICAgICByZW1vdmVOb2RlKGNoLmVsbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rICh2bm9kZSwgcm0pIHtcbiAgICBpZiAoaXNEZWYocm0pIHx8IGlzRGVmKHZub2RlLmRhdGEpKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBjYnMucmVtb3ZlLmxlbmd0aCArIDE7XG4gICAgICBpZiAoaXNEZWYocm0pKSB7XG4gICAgICAgIC8vIHdlIGhhdmUgYSByZWN1cnNpdmVseSBwYXNzZWQgZG93biBybSBjYWxsYmFja1xuICAgICAgICAvLyBpbmNyZWFzZSB0aGUgbGlzdGVuZXJzIGNvdW50XG4gICAgICAgIHJtLmxpc3RlbmVycyArPSBsaXN0ZW5lcnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkaXJlY3RseSByZW1vdmluZ1xuICAgICAgICBybSA9IGNyZWF0ZVJtQ2Iodm5vZGUuZWxtLCBsaXN0ZW5lcnMpO1xuICAgICAgfVxuICAgICAgLy8gcmVjdXJzaXZlbHkgaW52b2tlIGhvb2tzIG9uIGNoaWxkIGNvbXBvbmVudCByb290IG5vZGVcbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UpICYmIGlzRGVmKGkgPSBpLl92bm9kZSkgJiYgaXNEZWYoaS5kYXRhKSkge1xuICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGksIHJtKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucmVtb3ZlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNicy5yZW1vdmVbaV0odm5vZGUsIHJtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5yZW1vdmUpKSB7XG4gICAgICAgIGkodm5vZGUsIHJtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJtKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZU5vZGUodm5vZGUuZWxtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbiAocGFyZW50RWxtLCBvbGRDaCwgbmV3Q2gsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSkge1xuICAgIHZhciBvbGRTdGFydElkeCA9IDA7XG4gICAgdmFyIG5ld1N0YXJ0SWR4ID0gMDtcbiAgICB2YXIgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICB2YXIgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICAgIHZhciBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgdmFyIG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgdmFyIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgICB2YXIgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgIHZhciBvbGRLZXlUb0lkeCwgaWR4SW5PbGQsIHZub2RlVG9Nb3ZlLCByZWZFbG07XG5cbiAgICAvLyByZW1vdmVPbmx5IGlzIGEgc3BlY2lhbCBmbGFnIHVzZWQgb25seSBieSA8dHJhbnNpdGlvbi1ncm91cD5cbiAgICAvLyB0byBlbnN1cmUgcmVtb3ZlZCBlbGVtZW50cyBzdGF5IGluIGNvcnJlY3QgcmVsYXRpdmUgcG9zaXRpb25zXG4gICAgLy8gZHVyaW5nIGxlYXZpbmcgdHJhbnNpdGlvbnNcbiAgICB2YXIgY2FuTW92ZSA9ICFyZW1vdmVPbmx5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRHVwbGljYXRlS2V5cyhuZXdDaCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgIGlmIChpc1VuZGVmKG9sZFN0YXJ0Vm5vZGUpKSB7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTsgLy8gVm5vZGUgaGFzIGJlZW4gbW92ZWQgbGVmdFxuICAgICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZEVuZFZub2RlKSkge1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbmV3Q2gsIG5ld0VuZElkeCk7XG4gICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlKSkgeyAvLyBWbm9kZSBtb3ZlZCByaWdodFxuICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdFbmRJZHgpO1xuICAgICAgICBjYW5Nb3ZlICYmIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIG5vZGVPcHMubmV4dFNpYmxpbmcob2xkRW5kVm5vZGUuZWxtKSk7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHsgLy8gVm5vZGUgbW92ZWQgbGVmdFxuICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRFbmRWbm9kZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1VuZGVmKG9sZEtleVRvSWR4KSkgeyBvbGRLZXlUb0lkeCA9IGNyZWF0ZUtleVRvT2xkSWR4KG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTsgfVxuICAgICAgICBpZHhJbk9sZCA9IGlzRGVmKG5ld1N0YXJ0Vm5vZGUua2V5KVxuICAgICAgICAgID8gb2xkS2V5VG9JZHhbbmV3U3RhcnRWbm9kZS5rZXldXG4gICAgICAgICAgOiBmaW5kSWR4SW5PbGQobmV3U3RhcnRWbm9kZSwgb2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgICAgICBpZiAoaXNVbmRlZihpZHhJbk9sZCkpIHsgLy8gTmV3IGVsZW1lbnRcbiAgICAgICAgICBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBmYWxzZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2bm9kZVRvTW92ZSA9IG9sZENoW2lkeEluT2xkXTtcbiAgICAgICAgICBpZiAoc2FtZVZub2RlKHZub2RlVG9Nb3ZlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgICAgcGF0Y2hWbm9kZSh2bm9kZVRvTW92ZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICAgICAgb2xkQ2hbaWR4SW5PbGRdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIHZub2RlVG9Nb3ZlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzYW1lIGtleSBidXQgZGlmZmVyZW50IGVsZW1lbnQuIHRyZWF0IGFzIG5ldyBlbGVtZW50XG4gICAgICAgICAgICBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBmYWxzZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICAgIHJlZkVsbSA9IGlzVW5kZWYobmV3Q2hbbmV3RW5kSWR4ICsgMV0pID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLmVsbTtcbiAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIHJlZkVsbSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgfSBlbHNlIGlmIChuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0R1cGxpY2F0ZUtleXMgKGNoaWxkcmVuKSB7XG4gICAgdmFyIHNlZW5LZXlzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZub2RlID0gY2hpbGRyZW5baV07XG4gICAgICB2YXIga2V5ID0gdm5vZGUua2V5O1xuICAgICAgaWYgKGlzRGVmKGtleSkpIHtcbiAgICAgICAgaWYgKHNlZW5LZXlzW2tleV0pIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgKFwiRHVwbGljYXRlIGtleXMgZGV0ZWN0ZWQ6ICdcIiArIGtleSArIFwiJy4gVGhpcyBtYXkgY2F1c2UgYW4gdXBkYXRlIGVycm9yLlwiKSxcbiAgICAgICAgICAgIHZub2RlLmNvbnRleHRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlZW5LZXlzW2tleV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZElkeEluT2xkIChub2RlLCBvbGRDaCwgc3RhcnQsIGVuZCkge1xuICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IG9sZENoW2ldO1xuICAgICAgaWYgKGlzRGVmKGMpICYmIHNhbWVWbm9kZShub2RlLCBjKSkgeyByZXR1cm4gaSB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGF0Y2hWbm9kZSAoXG4gICAgb2xkVm5vZGUsXG4gICAgdm5vZGUsXG4gICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLFxuICAgIG93bmVyQXJyYXksXG4gICAgaW5kZXgsXG4gICAgcmVtb3ZlT25seVxuICApIHtcbiAgICBpZiAob2xkVm5vZGUgPT09IHZub2RlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNEZWYodm5vZGUuZWxtKSAmJiBpc0RlZihvd25lckFycmF5KSkge1xuICAgICAgLy8gY2xvbmUgcmV1c2VkIHZub2RlXG4gICAgICB2bm9kZSA9IG93bmVyQXJyYXlbaW5kZXhdID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gICAgfVxuXG4gICAgdmFyIGVsbSA9IHZub2RlLmVsbSA9IG9sZFZub2RlLmVsbTtcblxuICAgIGlmIChpc1RydWUob2xkVm5vZGUuaXNBc3luY1BsYWNlaG9sZGVyKSkge1xuICAgICAgaWYgKGlzRGVmKHZub2RlLmFzeW5jRmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgaHlkcmF0ZShvbGRWbm9kZS5lbG0sIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUuaXNBc3luY1BsYWNlaG9sZGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHJldXNlIGVsZW1lbnQgZm9yIHN0YXRpYyB0cmVlcy5cbiAgICAvLyBub3RlIHdlIG9ubHkgZG8gdGhpcyBpZiB0aGUgdm5vZGUgaXMgY2xvbmVkIC1cbiAgICAvLyBpZiB0aGUgbmV3IG5vZGUgaXMgbm90IGNsb25lZCBpdCBtZWFucyB0aGUgcmVuZGVyIGZ1bmN0aW9ucyBoYXZlIGJlZW5cbiAgICAvLyByZXNldCBieSB0aGUgaG90LXJlbG9hZC1hcGkgYW5kIHdlIG5lZWQgdG8gZG8gYSBwcm9wZXIgcmUtcmVuZGVyLlxuICAgIGlmIChpc1RydWUodm5vZGUuaXNTdGF0aWMpICYmXG4gICAgICBpc1RydWUob2xkVm5vZGUuaXNTdGF0aWMpICYmXG4gICAgICB2bm9kZS5rZXkgPT09IG9sZFZub2RlLmtleSAmJlxuICAgICAgKGlzVHJ1ZSh2bm9kZS5pc0Nsb25lZCkgfHwgaXNUcnVlKHZub2RlLmlzT25jZSkpXG4gICAgKSB7XG4gICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IG9sZFZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGk7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5wcmVwYXRjaCkpIHtcbiAgICAgIGkob2xkVm5vZGUsIHZub2RlKTtcbiAgICB9XG5cbiAgICB2YXIgb2xkQ2ggPSBvbGRWbm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgY2ggPSB2bm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNQYXRjaGFibGUodm5vZGUpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLnVwZGF0ZS5sZW5ndGg7ICsraSkgeyBjYnMudXBkYXRlW2ldKG9sZFZub2RlLCB2bm9kZSk7IH1cbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS51cGRhdGUpKSB7IGkob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgIH1cbiAgICBpZiAoaXNVbmRlZih2bm9kZS50ZXh0KSkge1xuICAgICAgaWYgKGlzRGVmKG9sZENoKSAmJiBpc0RlZihjaCkpIHtcbiAgICAgICAgaWYgKG9sZENoICE9PSBjaCkgeyB1cGRhdGVDaGlsZHJlbihlbG0sIG9sZENoLCBjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCByZW1vdmVPbmx5KTsgfVxuICAgICAgfSBlbHNlIGlmIChpc0RlZihjaCkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjaGVja0R1cGxpY2F0ZUtleXMoY2gpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0RlZihvbGRWbm9kZS50ZXh0KSkgeyBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgJycpOyB9XG4gICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIGNoLCAwLCBjaC5sZW5ndGggLSAxLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRDaCkpIHtcbiAgICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIHtcbiAgICAgICAgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sICcnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9sZFZub2RlLnRleHQgIT09IHZub2RlLnRleHQpIHtcbiAgICAgIG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCB2bm9kZS50ZXh0KTtcbiAgICB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkucG9zdHBhdGNoKSkgeyBpKG9sZFZub2RlLCB2bm9kZSk7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VJbnNlcnRIb29rICh2bm9kZSwgcXVldWUsIGluaXRpYWwpIHtcbiAgICAvLyBkZWxheSBpbnNlcnQgaG9va3MgZm9yIGNvbXBvbmVudCByb290IG5vZGVzLCBpbnZva2UgdGhlbSBhZnRlciB0aGVcbiAgICAvLyBlbGVtZW50IGlzIHJlYWxseSBpbnNlcnRlZFxuICAgIGlmIChpc1RydWUoaW5pdGlhbCkgJiYgaXNEZWYodm5vZGUucGFyZW50KSkge1xuICAgICAgdm5vZGUucGFyZW50LmRhdGEucGVuZGluZ0luc2VydCA9IHF1ZXVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHF1ZXVlW2ldLmRhdGEuaG9vay5pbnNlcnQocXVldWVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBoeWRyYXRpb25CYWlsZWQgPSBmYWxzZTtcbiAgLy8gbGlzdCBvZiBtb2R1bGVzIHRoYXQgY2FuIHNraXAgY3JlYXRlIGhvb2sgZHVyaW5nIGh5ZHJhdGlvbiBiZWNhdXNlIHRoZXlcbiAgLy8gYXJlIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIGNsaWVudCBvciBoYXMgbm8gbmVlZCBmb3IgaW5pdGlhbGl6YXRpb25cbiAgLy8gTm90ZTogc3R5bGUgaXMgZXhjbHVkZWQgYmVjYXVzZSBpdCByZWxpZXMgb24gaW5pdGlhbCBjbG9uZSBmb3IgZnV0dXJlXG4gIC8vIGRlZXAgdXBkYXRlcyAoIzcwNjMpLlxuICB2YXIgaXNSZW5kZXJlZE1vZHVsZSA9IG1ha2VNYXAoJ2F0dHJzLGNsYXNzLHN0YXRpY0NsYXNzLHN0YXRpY1N0eWxlLGtleScpO1xuXG4gIC8vIE5vdGU6IHRoaXMgaXMgYSBicm93c2VyLW9ubHkgZnVuY3Rpb24gc28gd2UgY2FuIGFzc3VtZSBlbG1zIGFyZSBET00gbm9kZXMuXG4gIGZ1bmN0aW9uIGh5ZHJhdGUgKGVsbSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgaW5WUHJlKSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIHRhZyA9IHZub2RlLnRhZztcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgaW5WUHJlID0gaW5WUHJlIHx8IChkYXRhICYmIGRhdGEucHJlKTtcbiAgICB2bm9kZS5lbG0gPSBlbG07XG5cbiAgICBpZiAoaXNUcnVlKHZub2RlLmlzQ29tbWVudCkgJiYgaXNEZWYodm5vZGUuYXN5bmNGYWN0b3J5KSkge1xuICAgICAgdm5vZGUuaXNBc3luY1BsYWNlaG9sZGVyID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIGFzc2VydCBub2RlIG1hdGNoXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghYXNzZXJ0Tm9kZU1hdGNoKGVsbSwgdm5vZGUsIGluVlByZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmluaXQpKSB7IGkodm5vZGUsIHRydWUgLyogaHlkcmF0aW5nICovKTsgfVxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICAgICAgLy8gY2hpbGQgY29tcG9uZW50LiBpdCBzaG91bGQgaGF2ZSBoeWRyYXRlZCBpdHMgb3duIHRyZWUuXG4gICAgICAgIGluaXRDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0RlZih0YWcpKSB7XG4gICAgICBpZiAoaXNEZWYoY2hpbGRyZW4pKSB7XG4gICAgICAgIC8vIGVtcHR5IGVsZW1lbnQsIGFsbG93IGNsaWVudCB0byBwaWNrIHVwIGFuZCBwb3B1bGF0ZSBjaGlsZHJlblxuICAgICAgICBpZiAoIWVsbS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICBjcmVhdGVDaGlsZHJlbih2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdi1odG1sIGFuZCBkb21Qcm9wczogaW5uZXJIVE1MXG4gICAgICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhKSAmJiBpc0RlZihpID0gaS5kb21Qcm9wcykgJiYgaXNEZWYoaSA9IGkuaW5uZXJIVE1MKSkge1xuICAgICAgICAgICAgaWYgKGkgIT09IGVsbS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgIWh5ZHJhdGlvbkJhaWxlZFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBoeWRyYXRpb25CYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFyZW50OiAnLCBlbG0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignc2VydmVyIGlubmVySFRNTDogJywgaSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdjbGllbnQgaW5uZXJIVE1MOiAnLCBlbG0uaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaXRlcmF0ZSBhbmQgY29tcGFyZSBjaGlsZHJlbiBsaXN0c1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZSA9IGVsbS5maXJzdENoaWxkO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2hpbGRyZW4ubGVuZ3RoOyBpJDErKykge1xuICAgICAgICAgICAgICBpZiAoIWNoaWxkTm9kZSB8fCAhaHlkcmF0ZShjaGlsZE5vZGUsIGNoaWxkcmVuW2kkMV0sIGluc2VydGVkVm5vZGVRdWV1ZSwgaW5WUHJlKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIGNoaWxkTm9kZSBpcyBub3QgbnVsbCwgaXQgbWVhbnMgdGhlIGFjdHVhbCBjaGlsZE5vZGVzIGxpc3QgaXNcbiAgICAgICAgICAgIC8vIGxvbmdlciB0aGFuIHRoZSB2aXJ0dWFsIGNoaWxkcmVuIGxpc3QuXG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuTWF0Y2ggfHwgY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgICFoeWRyYXRpb25CYWlsZWRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaHlkcmF0aW9uQmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BhcmVudDogJywgZWxtKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01pc21hdGNoaW5nIGNoaWxkTm9kZXMgdnMuIFZOb2RlczogJywgZWxtLmNoaWxkTm9kZXMsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgICB2YXIgZnVsbEludm9rZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgIGlmICghaXNSZW5kZXJlZE1vZHVsZShrZXkpKSB7XG4gICAgICAgICAgICBmdWxsSW52b2tlID0gdHJ1ZTtcbiAgICAgICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmdWxsSW52b2tlICYmIGRhdGFbJ2NsYXNzJ10pIHtcbiAgICAgICAgICAvLyBlbnN1cmUgY29sbGVjdGluZyBkZXBzIGZvciBkZWVwIGNsYXNzIGJpbmRpbmdzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICAgIHRyYXZlcnNlKGRhdGFbJ2NsYXNzJ10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbG0uZGF0YSAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgZWxtLmRhdGEgPSB2bm9kZS50ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gYXNzZXJ0Tm9kZU1hdGNoIChub2RlLCB2bm9kZSwgaW5WUHJlKSB7XG4gICAgaWYgKGlzRGVmKHZub2RlLnRhZykpIHtcbiAgICAgIHJldHVybiB2bm9kZS50YWcuaW5kZXhPZigndnVlLWNvbXBvbmVudCcpID09PSAwIHx8IChcbiAgICAgICAgIWlzVW5rbm93bkVsZW1lbnQkJDEodm5vZGUsIGluVlByZSkgJiZcbiAgICAgICAgdm5vZGUudGFnLnRvTG93ZXJDYXNlKCkgPT09IChub2RlLnRhZ05hbWUgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSAodm5vZGUuaXNDb21tZW50ID8gOCA6IDMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHBhdGNoIChvbGRWbm9kZSwgdm5vZGUsIGh5ZHJhdGluZywgcmVtb3ZlT25seSkge1xuICAgIGlmIChpc1VuZGVmKHZub2RlKSkge1xuICAgICAgaWYgKGlzRGVmKG9sZFZub2RlKSkgeyBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7IH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBpc0luaXRpYWxQYXRjaCA9IGZhbHNlO1xuICAgIHZhciBpbnNlcnRlZFZub2RlUXVldWUgPSBbXTtcblxuICAgIGlmIChpc1VuZGVmKG9sZFZub2RlKSkge1xuICAgICAgLy8gZW1wdHkgbW91bnQgKGxpa2VseSBhcyBjb21wb25lbnQpLCBjcmVhdGUgbmV3IHJvb3QgZWxlbWVudFxuICAgICAgaXNJbml0aWFsUGF0Y2ggPSB0cnVlO1xuICAgICAgY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaXNSZWFsRWxlbWVudCA9IGlzRGVmKG9sZFZub2RlLm5vZGVUeXBlKTtcbiAgICAgIGlmICghaXNSZWFsRWxlbWVudCAmJiBzYW1lVm5vZGUob2xkVm5vZGUsIHZub2RlKSkge1xuICAgICAgICAvLyBwYXRjaCBleGlzdGluZyByb290IG5vZGVcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbnVsbCwgbnVsbCwgcmVtb3ZlT25seSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNSZWFsRWxlbWVudCkge1xuICAgICAgICAgIC8vIG1vdW50aW5nIHRvIGEgcmVhbCBlbGVtZW50XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBpcyBzZXJ2ZXItcmVuZGVyZWQgY29udGVudCBhbmQgaWYgd2UgY2FuIHBlcmZvcm1cbiAgICAgICAgICAvLyBhIHN1Y2Nlc3NmdWwgaHlkcmF0aW9uLlxuICAgICAgICAgIGlmIChvbGRWbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBvbGRWbm9kZS5oYXNBdHRyaWJ1dGUoU1NSX0FUVFIpKSB7XG4gICAgICAgICAgICBvbGRWbm9kZS5yZW1vdmVBdHRyaWJ1dGUoU1NSX0FUVFIpO1xuICAgICAgICAgICAgaHlkcmF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzVHJ1ZShoeWRyYXRpbmcpKSB7XG4gICAgICAgICAgICBpZiAoaHlkcmF0ZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkpIHtcbiAgICAgICAgICAgICAgaW52b2tlSW5zZXJ0SG9vayh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG9sZFZub2RlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgICAnVGhlIGNsaWVudC1zaWRlIHJlbmRlcmVkIHZpcnR1YWwgRE9NIHRyZWUgaXMgbm90IG1hdGNoaW5nICcgK1xuICAgICAgICAgICAgICAgICdzZXJ2ZXItcmVuZGVyZWQgY29udGVudC4gVGhpcyBpcyBsaWtlbHkgY2F1c2VkIGJ5IGluY29ycmVjdCAnICtcbiAgICAgICAgICAgICAgICAnSFRNTCBtYXJrdXAsIGZvciBleGFtcGxlIG5lc3RpbmcgYmxvY2stbGV2ZWwgZWxlbWVudHMgaW5zaWRlICcgK1xuICAgICAgICAgICAgICAgICc8cD4sIG9yIG1pc3NpbmcgPHRib2R5Pi4gQmFpbGluZyBoeWRyYXRpb24gYW5kIHBlcmZvcm1pbmcgJyArXG4gICAgICAgICAgICAgICAgJ2Z1bGwgY2xpZW50LXNpZGUgcmVuZGVyLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZWl0aGVyIG5vdCBzZXJ2ZXItcmVuZGVyZWQsIG9yIGh5ZHJhdGlvbiBmYWlsZWQuXG4gICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IG5vZGUgYW5kIHJlcGxhY2UgaXRcbiAgICAgICAgICBvbGRWbm9kZSA9IGVtcHR5Tm9kZUF0KG9sZFZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGxhY2luZyBleGlzdGluZyBlbGVtZW50XG4gICAgICAgIHZhciBvbGRFbG0gPSBvbGRWbm9kZS5lbG07XG4gICAgICAgIHZhciBwYXJlbnRFbG0gPSBub2RlT3BzLnBhcmVudE5vZGUob2xkRWxtKTtcblxuICAgICAgICAvLyBjcmVhdGUgbmV3IG5vZGVcbiAgICAgICAgY3JlYXRlRWxtKFxuICAgICAgICAgIHZub2RlLFxuICAgICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZSxcbiAgICAgICAgICAvLyBleHRyZW1lbHkgcmFyZSBlZGdlIGNhc2U6IGRvIG5vdCBpbnNlcnQgaWYgb2xkIGVsZW1lbnQgaXMgaW4gYVxuICAgICAgICAgIC8vIGxlYXZpbmcgdHJhbnNpdGlvbi4gT25seSBoYXBwZW5zIHdoZW4gY29tYmluaW5nIHRyYW5zaXRpb24gK1xuICAgICAgICAgIC8vIGtlZXAtYWxpdmUgKyBIT0NzLiAoIzQ1OTApXG4gICAgICAgICAgb2xkRWxtLl9sZWF2ZUNiID8gbnVsbCA6IHBhcmVudEVsbSxcbiAgICAgICAgICBub2RlT3BzLm5leHRTaWJsaW5nKG9sZEVsbSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB1cGRhdGUgcGFyZW50IHBsYWNlaG9sZGVyIG5vZGUgZWxlbWVudCwgcmVjdXJzaXZlbHlcbiAgICAgICAgaWYgKGlzRGVmKHZub2RlLnBhcmVudCkpIHtcbiAgICAgICAgICB2YXIgYW5jZXN0b3IgPSB2bm9kZS5wYXJlbnQ7XG4gICAgICAgICAgdmFyIHBhdGNoYWJsZSA9IGlzUGF0Y2hhYmxlKHZub2RlKTtcbiAgICAgICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2JzLmRlc3Ryb3kubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgY2JzLmRlc3Ryb3lbaV0oYW5jZXN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5jZXN0b3IuZWxtID0gdm5vZGUuZWxtO1xuICAgICAgICAgICAgaWYgKHBhdGNoYWJsZSkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBjYnMuY3JlYXRlLmxlbmd0aDsgKytpJDEpIHtcbiAgICAgICAgICAgICAgICBjYnMuY3JlYXRlW2kkMV0oZW1wdHlOb2RlLCBhbmNlc3Rvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gIzY1MTNcbiAgICAgICAgICAgICAgLy8gaW52b2tlIGluc2VydCBob29rcyB0aGF0IG1heSBoYXZlIGJlZW4gbWVyZ2VkIGJ5IGNyZWF0ZSBob29rcy5cbiAgICAgICAgICAgICAgLy8gZS5nLiBmb3IgZGlyZWN0aXZlcyB0aGF0IHVzZXMgdGhlIFwiaW5zZXJ0ZWRcIiBob29rLlxuICAgICAgICAgICAgICB2YXIgaW5zZXJ0ID0gYW5jZXN0b3IuZGF0YS5ob29rLmluc2VydDtcbiAgICAgICAgICAgICAgaWYgKGluc2VydC5tZXJnZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFydCBhdCBpbmRleCAxIHRvIGF2b2lkIHJlLWludm9raW5nIGNvbXBvbmVudCBtb3VudGVkIGhvb2tcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDIgPSAxOyBpJDIgPCBpbnNlcnQuZm5zLmxlbmd0aDsgaSQyKyspIHtcbiAgICAgICAgICAgICAgICAgIGluc2VydC5mbnNbaSQyXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJSZWYoYW5jZXN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVzdHJveSBvbGQgbm9kZVxuICAgICAgICBpZiAoaXNEZWYocGFyZW50RWxtKSkge1xuICAgICAgICAgIHJlbW92ZVZub2Rlcyhbb2xkVm5vZGVdLCAwLCAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50YWcpKSB7XG4gICAgICAgICAgaW52b2tlRGVzdHJveUhvb2sob2xkVm5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW52b2tlSW5zZXJ0SG9vayh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpc0luaXRpYWxQYXRjaCk7XG4gICAgcmV0dXJuIHZub2RlLmVsbVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgZGlyZWN0aXZlcyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVEaXJlY3RpdmVzLFxuICB1cGRhdGU6IHVwZGF0ZURpcmVjdGl2ZXMsXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIHVuYmluZERpcmVjdGl2ZXMgKHZub2RlKSB7XG4gICAgdXBkYXRlRGlyZWN0aXZlcyh2bm9kZSwgZW1wdHlOb2RlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gdXBkYXRlRGlyZWN0aXZlcyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIGlmIChvbGRWbm9kZS5kYXRhLmRpcmVjdGl2ZXMgfHwgdm5vZGUuZGF0YS5kaXJlY3RpdmVzKSB7XG4gICAgX3VwZGF0ZShvbGRWbm9kZSwgdm5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF91cGRhdGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgaXNDcmVhdGUgPSBvbGRWbm9kZSA9PT0gZW1wdHlOb2RlO1xuICB2YXIgaXNEZXN0cm95ID0gdm5vZGUgPT09IGVtcHR5Tm9kZTtcbiAgdmFyIG9sZERpcnMgPSBub3JtYWxpemVEaXJlY3RpdmVzJDEob2xkVm5vZGUuZGF0YS5kaXJlY3RpdmVzLCBvbGRWbm9kZS5jb250ZXh0KTtcbiAgdmFyIG5ld0RpcnMgPSBub3JtYWxpemVEaXJlY3RpdmVzJDEodm5vZGUuZGF0YS5kaXJlY3RpdmVzLCB2bm9kZS5jb250ZXh0KTtcblxuICB2YXIgZGlyc1dpdGhJbnNlcnQgPSBbXTtcbiAgdmFyIGRpcnNXaXRoUG9zdHBhdGNoID0gW107XG5cbiAgdmFyIGtleSwgb2xkRGlyLCBkaXI7XG4gIGZvciAoa2V5IGluIG5ld0RpcnMpIHtcbiAgICBvbGREaXIgPSBvbGREaXJzW2tleV07XG4gICAgZGlyID0gbmV3RGlyc1trZXldO1xuICAgIGlmICghb2xkRGlyKSB7XG4gICAgICAvLyBuZXcgZGlyZWN0aXZlLCBiaW5kXG4gICAgICBjYWxsSG9vayQxKGRpciwgJ2JpbmQnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgaWYgKGRpci5kZWYgJiYgZGlyLmRlZi5pbnNlcnRlZCkge1xuICAgICAgICBkaXJzV2l0aEluc2VydC5wdXNoKGRpcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGV4aXN0aW5nIGRpcmVjdGl2ZSwgdXBkYXRlXG4gICAgICBkaXIub2xkVmFsdWUgPSBvbGREaXIudmFsdWU7XG4gICAgICBkaXIub2xkQXJnID0gb2xkRGlyLmFyZztcbiAgICAgIGNhbGxIb29rJDEoZGlyLCAndXBkYXRlJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgIGlmIChkaXIuZGVmICYmIGRpci5kZWYuY29tcG9uZW50VXBkYXRlZCkge1xuICAgICAgICBkaXJzV2l0aFBvc3RwYXRjaC5wdXNoKGRpcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcnNXaXRoSW5zZXJ0Lmxlbmd0aCkge1xuICAgIHZhciBjYWxsSW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzV2l0aEluc2VydC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsSG9vayQxKGRpcnNXaXRoSW5zZXJ0W2ldLCAnaW5zZXJ0ZWQnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGlzQ3JlYXRlKSB7XG4gICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGNhbGxJbnNlcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsSW5zZXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcnNXaXRoUG9zdHBhdGNoLmxlbmd0aCkge1xuICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAncG9zdHBhdGNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzV2l0aFBvc3RwYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsSG9vayQxKGRpcnNXaXRoUG9zdHBhdGNoW2ldLCAnY29tcG9uZW50VXBkYXRlZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIWlzQ3JlYXRlKSB7XG4gICAgZm9yIChrZXkgaW4gb2xkRGlycykge1xuICAgICAgaWYgKCFuZXdEaXJzW2tleV0pIHtcbiAgICAgICAgLy8gbm8gbG9uZ2VyIHByZXNlbnQsIHVuYmluZFxuICAgICAgICBjYWxsSG9vayQxKG9sZERpcnNba2V5XSwgJ3VuYmluZCcsIG9sZFZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGVtcHR5TW9kaWZpZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyQxIChcbiAgZGlycyxcbiAgdm1cbikge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKCFkaXJzKSB7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIHJlc1xuICB9XG4gIHZhciBpLCBkaXI7XG4gIGZvciAoaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGlyID0gZGlyc1tpXTtcbiAgICBpZiAoIWRpci5tb2RpZmllcnMpIHtcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgZGlyLm1vZGlmaWVycyA9IGVtcHR5TW9kaWZpZXJzO1xuICAgIH1cbiAgICByZXNbZ2V0UmF3RGlyTmFtZShkaXIpXSA9IGRpcjtcbiAgICBkaXIuZGVmID0gcmVzb2x2ZUFzc2V0KHZtLiRvcHRpb25zLCAnZGlyZWN0aXZlcycsIGRpci5uYW1lLCB0cnVlKTtcbiAgfVxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnZXRSYXdEaXJOYW1lIChkaXIpIHtcbiAgcmV0dXJuIGRpci5yYXdOYW1lIHx8ICgoZGlyLm5hbWUpICsgXCIuXCIgKyAoT2JqZWN0LmtleXMoZGlyLm1vZGlmaWVycyB8fCB7fSkuam9pbignLicpKSlcbn1cblxuZnVuY3Rpb24gY2FsbEhvb2skMSAoZGlyLCBob29rLCB2bm9kZSwgb2xkVm5vZGUsIGlzRGVzdHJveSkge1xuICB2YXIgZm4gPSBkaXIuZGVmICYmIGRpci5kZWZbaG9va107XG4gIGlmIChmbikge1xuICAgIHRyeSB7XG4gICAgICBmbih2bm9kZS5lbG0sIGRpciwgdm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZub2RlLmNvbnRleHQsIChcImRpcmVjdGl2ZSBcIiArIChkaXIubmFtZSkgKyBcIiBcIiArIGhvb2sgKyBcIiBob29rXCIpKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGJhc2VNb2R1bGVzID0gW1xuICByZWYsXG4gIGRpcmVjdGl2ZXNcbl07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiB1cGRhdGVBdHRycyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBvcHRzID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgaWYgKGlzRGVmKG9wdHMpICYmIG9wdHMuQ3Rvci5vcHRpb25zLmluaGVyaXRBdHRycyA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoaXNVbmRlZihvbGRWbm9kZS5kYXRhLmF0dHJzKSAmJiBpc1VuZGVmKHZub2RlLmRhdGEuYXR0cnMpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGtleSwgY3VyLCBvbGQ7XG4gIHZhciBlbG0gPSB2bm9kZS5lbG07XG4gIHZhciBvbGRBdHRycyA9IG9sZFZub2RlLmRhdGEuYXR0cnMgfHwge307XG4gIHZhciBhdHRycyA9IHZub2RlLmRhdGEuYXR0cnMgfHwge307XG4gIC8vIGNsb25lIG9ic2VydmVkIG9iamVjdHMsIGFzIHRoZSB1c2VyIHByb2JhYmx5IHdhbnRzIHRvIG11dGF0ZSBpdFxuICBpZiAoaXNEZWYoYXR0cnMuX19vYl9fKSkge1xuICAgIGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYXR0cnMpO1xuICB9XG5cbiAgZm9yIChrZXkgaW4gYXR0cnMpIHtcbiAgICBjdXIgPSBhdHRyc1trZXldO1xuICAgIG9sZCA9IG9sZEF0dHJzW2tleV07XG4gICAgaWYgKG9sZCAhPT0gY3VyKSB7XG4gICAgICBzZXRBdHRyKGVsbSwga2V5LCBjdXIpO1xuICAgIH1cbiAgfVxuICAvLyAjNDM5MTogaW4gSUU5LCBzZXR0aW5nIHR5cGUgY2FuIHJlc2V0IHZhbHVlIGZvciBpbnB1dFt0eXBlPXJhZGlvXVxuICAvLyAjNjY2NjogSUUvRWRnZSBmb3JjZXMgcHJvZ3Jlc3MgdmFsdWUgZG93biB0byAxIGJlZm9yZSBzZXR0aW5nIGEgbWF4XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoKGlzSUUgfHwgaXNFZGdlKSAmJiBhdHRycy52YWx1ZSAhPT0gb2xkQXR0cnMudmFsdWUpIHtcbiAgICBzZXRBdHRyKGVsbSwgJ3ZhbHVlJywgYXR0cnMudmFsdWUpO1xuICB9XG4gIGZvciAoa2V5IGluIG9sZEF0dHJzKSB7XG4gICAgaWYgKGlzVW5kZWYoYXR0cnNba2V5XSkpIHtcbiAgICAgIGlmIChpc1hsaW5rKGtleSkpIHtcbiAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZU5TKHhsaW5rTlMsIGdldFhsaW5rUHJvcChrZXkpKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRW51bWVyYXRlZEF0dHIoa2V5KSkge1xuICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEF0dHIgKGVsLCBrZXksIHZhbHVlKSB7XG4gIGlmIChlbC50YWdOYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgYmFzZVNldEF0dHIoZWwsIGtleSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbkF0dHIoa2V5KSkge1xuICAgIC8vIHNldCBhdHRyaWJ1dGUgZm9yIGJsYW5rIHZhbHVlXG4gICAgLy8gZS5nLiA8b3B0aW9uIGRpc2FibGVkPlNlbGVjdCBvbmU8L29wdGlvbj5cbiAgICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0ZWNobmljYWxseSBhbGxvd2Z1bGxzY3JlZW4gaXMgYSBib29sZWFuIGF0dHJpYnV0ZSBmb3IgPGlmcmFtZT4sXG4gICAgICAvLyBidXQgRmxhc2ggZXhwZWN0cyBhIHZhbHVlIG9mIFwidHJ1ZVwiIHdoZW4gdXNlZCBvbiA8ZW1iZWQ+IHRhZ1xuICAgICAgdmFsdWUgPSBrZXkgPT09ICdhbGxvd2Z1bGxzY3JlZW4nICYmIGVsLnRhZ05hbWUgPT09ICdFTUJFRCdcbiAgICAgICAgPyAndHJ1ZSdcbiAgICAgICAgOiBrZXk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzRW51bWVyYXRlZEF0dHIoa2V5KSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGNvbnZlcnRFbnVtZXJhdGVkVmFsdWUoa2V5LCB2YWx1ZSkpO1xuICB9IGVsc2UgaWYgKGlzWGxpbmsoa2V5KSkge1xuICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlTlMoeGxpbmtOUywgZ2V0WGxpbmtQcm9wKGtleSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYmFzZVNldEF0dHIoZWwsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2VTZXRBdHRyIChlbCwga2V5LCB2YWx1ZSkge1xuICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyAjNzEzODogSUUxMCAmIDExIGZpcmVzIGlucHV0IGV2ZW50IHdoZW4gc2V0dGluZyBwbGFjZWhvbGRlciBvblxuICAgIC8vIDx0ZXh0YXJlYT4uLi4gYmxvY2sgdGhlIGZpcnN0IGlucHV0IGV2ZW50IGFuZCByZW1vdmUgdGhlIGJsb2NrZXJcbiAgICAvLyBpbW1lZGlhdGVseS5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoXG4gICAgICBpc0lFICYmICFpc0lFOSAmJlxuICAgICAgZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJlxuICAgICAga2V5ID09PSAncGxhY2Vob2xkZXInICYmIHZhbHVlICE9PSAnJyAmJiAhZWwuX19pZXBoXG4gICAgKSB7XG4gICAgICB2YXIgYmxvY2tlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYmxvY2tlcik7XG4gICAgICB9O1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBibG9ja2VyKTtcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgZWwuX19pZXBoID0gdHJ1ZTsgLyogSUUgcGxhY2Vob2xkZXIgcGF0Y2hlZCAqL1xuICAgIH1cbiAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxudmFyIGF0dHJzID0ge1xuICBjcmVhdGU6IHVwZGF0ZUF0dHJzLFxuICB1cGRhdGU6IHVwZGF0ZUF0dHJzXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gdXBkYXRlQ2xhc3MgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgdmFyIG9sZERhdGEgPSBvbGRWbm9kZS5kYXRhO1xuICBpZiAoXG4gICAgaXNVbmRlZihkYXRhLnN0YXRpY0NsYXNzKSAmJlxuICAgIGlzVW5kZWYoZGF0YS5jbGFzcykgJiYgKFxuICAgICAgaXNVbmRlZihvbGREYXRhKSB8fCAoXG4gICAgICAgIGlzVW5kZWYob2xkRGF0YS5zdGF0aWNDbGFzcykgJiZcbiAgICAgICAgaXNVbmRlZihvbGREYXRhLmNsYXNzKVxuICAgICAgKVxuICAgIClcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY2xzID0gZ2VuQ2xhc3NGb3JWbm9kZSh2bm9kZSk7XG5cbiAgLy8gaGFuZGxlIHRyYW5zaXRpb24gY2xhc3Nlc1xuICB2YXIgdHJhbnNpdGlvbkNsYXNzID0gZWwuX3RyYW5zaXRpb25DbGFzc2VzO1xuICBpZiAoaXNEZWYodHJhbnNpdGlvbkNsYXNzKSkge1xuICAgIGNscyA9IGNvbmNhdChjbHMsIHN0cmluZ2lmeUNsYXNzKHRyYW5zaXRpb25DbGFzcykpO1xuICB9XG5cbiAgLy8gc2V0IHRoZSBjbGFzc1xuICBpZiAoY2xzICE9PSBlbC5fcHJldkNsYXNzKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNscyk7XG4gICAgZWwuX3ByZXZDbGFzcyA9IGNscztcbiAgfVxufVxuXG52YXIga2xhc3MgPSB7XG4gIGNyZWF0ZTogdXBkYXRlQ2xhc3MsXG4gIHVwZGF0ZTogdXBkYXRlQ2xhc3Ncbn07XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8qICAqL1xuXG4vLyBpbiBzb21lIGNhc2VzLCB0aGUgZXZlbnQgdXNlZCBoYXMgdG8gYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lXG4vLyBzbyB3ZSB1c2VkIHNvbWUgcmVzZXJ2ZWQgdG9rZW5zIGR1cmluZyBjb21waWxlLlxudmFyIFJBTkdFX1RPS0VOID0gJ19fcic7XG52YXIgQ0hFQ0tCT1hfUkFESU9fVE9LRU4gPSAnX19jJztcblxuLyogICovXG5cbi8vIG5vcm1hbGl6ZSB2LW1vZGVsIGV2ZW50IHRva2VucyB0aGF0IGNhbiBvbmx5IGJlIGRldGVybWluZWQgYXQgcnVudGltZS5cbi8vIGl0J3MgaW1wb3J0YW50IHRvIHBsYWNlIHRoZSBldmVudCBhcyB0aGUgZmlyc3QgaW4gdGhlIGFycmF5IGJlY2F1c2Vcbi8vIHRoZSB3aG9sZSBwb2ludCBpcyBlbnN1cmluZyB0aGUgdi1tb2RlbCBjYWxsYmFjayBnZXRzIGNhbGxlZCBiZWZvcmVcbi8vIHVzZXItYXR0YWNoZWQgaGFuZGxlcnMuXG5mdW5jdGlvbiBub3JtYWxpemVFdmVudHMgKG9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYob25bUkFOR0VfVE9LRU5dKSkge1xuICAgIC8vIElFIGlucHV0W3R5cGU9cmFuZ2VdIG9ubHkgc3VwcG9ydHMgYGNoYW5nZWAgZXZlbnRcbiAgICB2YXIgZXZlbnQgPSBpc0lFID8gJ2NoYW5nZScgOiAnaW5wdXQnO1xuICAgIG9uW2V2ZW50XSA9IFtdLmNvbmNhdChvbltSQU5HRV9UT0tFTl0sIG9uW2V2ZW50XSB8fCBbXSk7XG4gICAgZGVsZXRlIG9uW1JBTkdFX1RPS0VOXTtcbiAgfVxuICAvLyBUaGlzIHdhcyBvcmlnaW5hbGx5IGludGVuZGVkIHRvIGZpeCAjNDUyMSBidXQgbm8gbG9uZ2VyIG5lY2Vzc2FyeVxuICAvLyBhZnRlciAyLjUuIEtlZXBpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBnZW5lcmF0ZWQgY29kZSBmcm9tIDwgMi40XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYob25bQ0hFQ0tCT1hfUkFESU9fVE9LRU5dKSkge1xuICAgIG9uLmNoYW5nZSA9IFtdLmNvbmNhdChvbltDSEVDS0JPWF9SQURJT19UT0tFTl0sIG9uLmNoYW5nZSB8fCBbXSk7XG4gICAgZGVsZXRlIG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXTtcbiAgfVxufVxuXG52YXIgdGFyZ2V0JDE7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyJDEgKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gIHZhciBfdGFyZ2V0ID0gdGFyZ2V0JDE7IC8vIHNhdmUgY3VycmVudCB0YXJnZXQgZWxlbWVudCBpbiBjbG9zdXJlXG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICByZW1vdmUkMihldmVudCwgb25jZUhhbmRsZXIsIGNhcHR1cmUsIF90YXJnZXQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyAjOTQ0NjogRmlyZWZveCA8PSA1MyAoaW4gcGFydGljdWxhciwgRVNSIDUyKSBoYXMgaW5jb3JyZWN0IEV2ZW50LnRpbWVTdGFtcFxuLy8gaW1wbGVtZW50YXRpb24gYW5kIGRvZXMgbm90IGZpcmUgbWljcm90YXNrcyBpbiBiZXR3ZWVuIGV2ZW50IHByb3BhZ2F0aW9uLCBzb1xuLy8gc2FmZSB0byBleGNsdWRlLlxudmFyIHVzZU1pY3JvdGFza0ZpeCA9IGlzVXNpbmdNaWNyb1Rhc2sgJiYgIShpc0ZGICYmIE51bWJlcihpc0ZGWzFdKSA8PSA1Myk7XG5cbmZ1bmN0aW9uIGFkZCQxIChcbiAgbmFtZSxcbiAgaGFuZGxlcixcbiAgY2FwdHVyZSxcbiAgcGFzc2l2ZVxuKSB7XG4gIC8vIGFzeW5jIGVkZ2UgY2FzZSAjNjU2NjogaW5uZXIgY2xpY2sgZXZlbnQgdHJpZ2dlcnMgcGF0Y2gsIGV2ZW50IGhhbmRsZXJcbiAgLy8gYXR0YWNoZWQgdG8gb3V0ZXIgZWxlbWVudCBkdXJpbmcgcGF0Y2gsIGFuZCB0cmlnZ2VyZWQgYWdhaW4uIFRoaXNcbiAgLy8gaGFwcGVucyBiZWNhdXNlIGJyb3dzZXJzIGZpcmUgbWljcm90YXNrIHRpY2tzIGJldHdlZW4gZXZlbnQgcHJvcGFnYXRpb24uXG4gIC8vIHRoZSBzb2x1dGlvbiBpcyBzaW1wbGU6IHdlIHNhdmUgdGhlIHRpbWVzdGFtcCB3aGVuIGEgaGFuZGxlciBpcyBhdHRhY2hlZCxcbiAgLy8gYW5kIHRoZSBoYW5kbGVyIHdvdWxkIG9ubHkgZmlyZSBpZiB0aGUgZXZlbnQgcGFzc2VkIHRvIGl0IHdhcyBmaXJlZFxuICAvLyBBRlRFUiBpdCB3YXMgYXR0YWNoZWQuXG4gIGlmICh1c2VNaWNyb3Rhc2tGaXgpIHtcbiAgICB2YXIgYXR0YWNoZWRUaW1lc3RhbXAgPSBjdXJyZW50Rmx1c2hUaW1lc3RhbXA7XG4gICAgdmFyIG9yaWdpbmFsID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gb3JpZ2luYWwuX3dyYXBwZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKFxuICAgICAgICAvLyBubyBidWJibGluZywgc2hvdWxkIGFsd2F5cyBmaXJlLlxuICAgICAgICAvLyB0aGlzIGlzIGp1c3QgYSBzYWZldHkgbmV0IGluIGNhc2UgZXZlbnQudGltZVN0YW1wIGlzIHVucmVsaWFibGUgaW5cbiAgICAgICAgLy8gY2VydGFpbiB3ZWlyZCBlbnZpcm9ubWVudHMuLi5cbiAgICAgICAgZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCB8fFxuICAgICAgICAvLyBldmVudCBpcyBmaXJlZCBhZnRlciBoYW5kbGVyIGF0dGFjaG1lbnRcbiAgICAgICAgZS50aW1lU3RhbXAgPj0gYXR0YWNoZWRUaW1lc3RhbXAgfHxcbiAgICAgICAgLy8gYmFpbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgaGF2ZSBidWdneSBldmVudC50aW1lU3RhbXAgaW1wbGVtZW50YXRpb25zXG4gICAgICAgIC8vICM5NDYyIGlPUyA5IGJ1ZzogZXZlbnQudGltZVN0YW1wIGlzIDAgYWZ0ZXIgaGlzdG9yeS5wdXNoU3RhdGVcbiAgICAgICAgLy8gIzk2ODEgUXRXZWJFbmdpbmUgZXZlbnQudGltZVN0YW1wIGlzIG5lZ2F0aXZlIHZhbHVlXG4gICAgICAgIGUudGltZVN0YW1wIDw9IDAgfHxcbiAgICAgICAgLy8gIzk0NDggYmFpbCBpZiBldmVudCBpcyBmaXJlZCBpbiBhbm90aGVyIGRvY3VtZW50IGluIGEgbXVsdGktcGFnZVxuICAgICAgICAvLyBlbGVjdHJvbi9udy5qcyBhcHAsIHNpbmNlIGV2ZW50LnRpbWVTdGFtcCB3aWxsIGJlIHVzaW5nIGEgZGlmZmVyZW50XG4gICAgICAgIC8vIHN0YXJ0aW5nIHJlZmVyZW5jZVxuICAgICAgICBlLnRhcmdldC5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICB0YXJnZXQkMS5hZGRFdmVudExpc3RlbmVyKFxuICAgIG5hbWUsXG4gICAgaGFuZGxlcixcbiAgICBzdXBwb3J0c1Bhc3NpdmVcbiAgICAgID8geyBjYXB0dXJlOiBjYXB0dXJlLCBwYXNzaXZlOiBwYXNzaXZlIH1cbiAgICAgIDogY2FwdHVyZVxuICApO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMiAoXG4gIG5hbWUsXG4gIGhhbmRsZXIsXG4gIGNhcHR1cmUsXG4gIF90YXJnZXRcbikge1xuICAoX3RhcmdldCB8fCB0YXJnZXQkMSkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICBuYW1lLFxuICAgIGhhbmRsZXIuX3dyYXBwZXIgfHwgaGFuZGxlcixcbiAgICBjYXB0dXJlXG4gICk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTUxpc3RlbmVycyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEub24pICYmIGlzVW5kZWYodm5vZGUuZGF0YS5vbikpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb24gPSB2bm9kZS5kYXRhLm9uIHx8IHt9O1xuICB2YXIgb2xkT24gPSBvbGRWbm9kZS5kYXRhLm9uIHx8IHt9O1xuICB0YXJnZXQkMSA9IHZub2RlLmVsbTtcbiAgbm9ybWFsaXplRXZlbnRzKG9uKTtcbiAgdXBkYXRlTGlzdGVuZXJzKG9uLCBvbGRPbiwgYWRkJDEsIHJlbW92ZSQyLCBjcmVhdGVPbmNlSGFuZGxlciQxLCB2bm9kZS5jb250ZXh0KTtcbiAgdGFyZ2V0JDEgPSB1bmRlZmluZWQ7XG59XG5cbnZhciBldmVudHMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlRE9NTGlzdGVuZXJzLFxuICB1cGRhdGU6IHVwZGF0ZURPTUxpc3RlbmVyc1xufTtcblxuLyogICovXG5cbnZhciBzdmdDb250YWluZXI7XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTVByb3BzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKGlzVW5kZWYob2xkVm5vZGUuZGF0YS5kb21Qcm9wcykgJiYgaXNVbmRlZih2bm9kZS5kYXRhLmRvbVByb3BzKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBrZXksIGN1cjtcbiAgdmFyIGVsbSA9IHZub2RlLmVsbTtcbiAgdmFyIG9sZFByb3BzID0gb2xkVm5vZGUuZGF0YS5kb21Qcm9wcyB8fCB7fTtcbiAgdmFyIHByb3BzID0gdm5vZGUuZGF0YS5kb21Qcm9wcyB8fCB7fTtcbiAgLy8gY2xvbmUgb2JzZXJ2ZWQgb2JqZWN0cywgYXMgdGhlIHVzZXIgcHJvYmFibHkgd2FudHMgdG8gbXV0YXRlIGl0XG4gIGlmIChpc0RlZihwcm9wcy5fX29iX18pKSB7XG4gICAgcHJvcHMgPSB2bm9kZS5kYXRhLmRvbVByb3BzID0gZXh0ZW5kKHt9LCBwcm9wcyk7XG4gIH1cblxuICBmb3IgKGtleSBpbiBvbGRQcm9wcykge1xuICAgIGlmICghKGtleSBpbiBwcm9wcykpIHtcbiAgICAgIGVsbVtrZXldID0gJyc7XG4gICAgfVxuICB9XG5cbiAgZm9yIChrZXkgaW4gcHJvcHMpIHtcbiAgICBjdXIgPSBwcm9wc1trZXldO1xuICAgIC8vIGlnbm9yZSBjaGlsZHJlbiBpZiB0aGUgbm9kZSBoYXMgdGV4dENvbnRlbnQgb3IgaW5uZXJIVE1MLFxuICAgIC8vIGFzIHRoZXNlIHdpbGwgdGhyb3cgYXdheSBleGlzdGluZyBET00gbm9kZXMgYW5kIGNhdXNlIHJlbW92YWwgZXJyb3JzXG4gICAgLy8gb24gc3Vic2VxdWVudCBwYXRjaGVzICgjMzM2MClcbiAgICBpZiAoa2V5ID09PSAndGV4dENvbnRlbnQnIHx8IGtleSA9PT0gJ2lubmVySFRNTCcpIHtcbiAgICAgIGlmICh2bm9kZS5jaGlsZHJlbikgeyB2bm9kZS5jaGlsZHJlbi5sZW5ndGggPSAwOyB9XG4gICAgICBpZiAoY3VyID09PSBvbGRQcm9wc1trZXldKSB7IGNvbnRpbnVlIH1cbiAgICAgIC8vICM2NjAxIHdvcmsgYXJvdW5kIENocm9tZSB2ZXJzaW9uIDw9IDU1IGJ1ZyB3aGVyZSBzaW5nbGUgdGV4dE5vZGVcbiAgICAgIC8vIHJlcGxhY2VkIGJ5IGlubmVySFRNTC90ZXh0Q29udGVudCByZXRhaW5zIGl0cyBwYXJlbnROb2RlIHByb3BlcnR5XG4gICAgICBpZiAoZWxtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGVsbS5yZW1vdmVDaGlsZChlbG0uY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ3ZhbHVlJyAmJiBlbG0udGFnTmFtZSAhPT0gJ1BST0dSRVNTJykge1xuICAgICAgLy8gc3RvcmUgdmFsdWUgYXMgX3ZhbHVlIGFzIHdlbGwgc2luY2VcbiAgICAgIC8vIG5vbi1zdHJpbmcgdmFsdWVzIHdpbGwgYmUgc3RyaW5naWZpZWRcbiAgICAgIGVsbS5fdmFsdWUgPSBjdXI7XG4gICAgICAvLyBhdm9pZCByZXNldHRpbmcgY3Vyc29yIHBvc2l0aW9uIHdoZW4gdmFsdWUgaXMgdGhlIHNhbWVcbiAgICAgIHZhciBzdHJDdXIgPSBpc1VuZGVmKGN1cikgPyAnJyA6IFN0cmluZyhjdXIpO1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZVZhbHVlKGVsbSwgc3RyQ3VyKSkge1xuICAgICAgICBlbG0udmFsdWUgPSBzdHJDdXI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdpbm5lckhUTUwnICYmIGlzU1ZHKGVsbS50YWdOYW1lKSAmJiBpc1VuZGVmKGVsbS5pbm5lckhUTUwpKSB7XG4gICAgICAvLyBJRSBkb2Vzbid0IHN1cHBvcnQgaW5uZXJIVE1MIGZvciBTVkcgZWxlbWVudHNcbiAgICAgIHN2Z0NvbnRhaW5lciA9IHN2Z0NvbnRhaW5lciB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHN2Z0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxzdmc+XCIgKyBjdXIgKyBcIjwvc3ZnPlwiO1xuICAgICAgdmFyIHN2ZyA9IHN2Z0NvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGVsbS5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsbS5yZW1vdmVDaGlsZChlbG0uZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB3aGlsZSAoc3ZnLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxtLmFwcGVuZENoaWxkKHN2Zy5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gc2tpcCB0aGUgdXBkYXRlIGlmIG9sZCBhbmQgbmV3IFZET00gc3RhdGUgaXMgdGhlIHNhbWUuXG4gICAgICAvLyBgdmFsdWVgIGlzIGhhbmRsZWQgc2VwYXJhdGVseSBiZWNhdXNlIHRoZSBET00gdmFsdWUgbWF5IGJlIHRlbXBvcmFyaWx5XG4gICAgICAvLyBvdXQgb2Ygc3luYyB3aXRoIFZET00gc3RhdGUgZHVlIHRvIGZvY3VzLCBjb21wb3NpdGlvbiBhbmQgbW9kaWZpZXJzLlxuICAgICAgLy8gVGhpcyAgIzQ1MjEgYnkgc2tpcHBpbmcgdGhlIHVubmVjZXNzYXJ5IGBjaGVja2VkYCB1cGRhdGUuXG4gICAgICBjdXIgIT09IG9sZFByb3BzW2tleV1cbiAgICApIHtcbiAgICAgIC8vIHNvbWUgcHJvcGVydHkgdXBkYXRlcyBjYW4gdGhyb3dcbiAgICAgIC8vIGUuZy4gYHZhbHVlYCBvbiA8cHJvZ3Jlc3M+IHcvIG5vbi1maW5pdGUgdmFsdWVcbiAgICAgIHRyeSB7XG4gICAgICAgIGVsbVtrZXldID0gY3VyO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbn1cblxuLy8gY2hlY2sgcGxhdGZvcm1zL3dlYi91dGlsL2F0dHJzLmpzIGFjY2VwdFZhbHVlXG5cblxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlVmFsdWUgKGVsbSwgY2hlY2tWYWwpIHtcbiAgcmV0dXJuICghZWxtLmNvbXBvc2luZyAmJiAoXG4gICAgZWxtLnRhZ05hbWUgPT09ICdPUFRJT04nIHx8XG4gICAgaXNOb3RJbkZvY3VzQW5kRGlydHkoZWxtLCBjaGVja1ZhbCkgfHxcbiAgICBpc0RpcnR5V2l0aE1vZGlmaWVycyhlbG0sIGNoZWNrVmFsKVxuICApKVxufVxuXG5mdW5jdGlvbiBpc05vdEluRm9jdXNBbmREaXJ0eSAoZWxtLCBjaGVja1ZhbCkge1xuICAvLyByZXR1cm4gdHJ1ZSB3aGVuIHRleHRib3ggKC5udW1iZXIgYW5kIC50cmltKSBsb3NlcyBmb2N1cyBhbmQgaXRzIHZhbHVlIGlzXG4gIC8vIG5vdCBlcXVhbCB0byB0aGUgdXBkYXRlZCB2YWx1ZVxuICB2YXIgbm90SW5Gb2N1cyA9IHRydWU7XG4gIC8vICM2MTU3XG4gIC8vIHdvcmsgYXJvdW5kIElFIGJ1ZyB3aGVuIGFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluIGFuIGlmcmFtZVxuICB0cnkgeyBub3RJbkZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZWxtOyB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gbm90SW5Gb2N1cyAmJiBlbG0udmFsdWUgIT09IGNoZWNrVmFsXG59XG5cbmZ1bmN0aW9uIGlzRGlydHlXaXRoTW9kaWZpZXJzIChlbG0sIG5ld1ZhbCkge1xuICB2YXIgdmFsdWUgPSBlbG0udmFsdWU7XG4gIHZhciBtb2RpZmllcnMgPSBlbG0uX3ZNb2RpZmllcnM7IC8vIGluamVjdGVkIGJ5IHYtbW9kZWwgcnVudGltZVxuICBpZiAoaXNEZWYobW9kaWZpZXJzKSkge1xuICAgIGlmIChtb2RpZmllcnMubnVtYmVyKSB7XG4gICAgICByZXR1cm4gdG9OdW1iZXIodmFsdWUpICE9PSB0b051bWJlcihuZXdWYWwpXG4gICAgfVxuICAgIGlmIChtb2RpZmllcnMudHJpbSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKSAhPT0gbmV3VmFsLnRyaW0oKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWUgIT09IG5ld1ZhbFxufVxuXG52YXIgZG9tUHJvcHMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlRE9NUHJvcHMsXG4gIHVwZGF0ZTogdXBkYXRlRE9NUHJvcHNcbn07XG5cbi8qICAqL1xuXG52YXIgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgbGlzdERlbGltaXRlciA9IC87KD8hW14oXSpcXCkpL2c7XG4gIHZhciBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbi8vIG1lcmdlIHN0YXRpYyBhbmQgZHluYW1pYyBzdHlsZSBkYXRhIG9uIHRoZSBzYW1lIHZub2RlXG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZURhdGEgKGRhdGEpIHtcbiAgdmFyIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGRhdGEuc3R5bGUpO1xuICAvLyBzdGF0aWMgc3R5bGUgaXMgcHJlLXByb2Nlc3NlZCBpbnRvIGFuIG9iamVjdCBkdXJpbmcgY29tcGlsYXRpb25cbiAgLy8gYW5kIGlzIGFsd2F5cyBhIGZyZXNoIG9iamVjdCwgc28gaXQncyBzYWZlIHRvIG1lcmdlIGludG8gaXRcbiAgcmV0dXJuIGRhdGEuc3RhdGljU3R5bGVcbiAgICA/IGV4dGVuZChkYXRhLnN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICA6IHN0eWxlXG59XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyAoYmluZGluZ1N0eWxlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICByZXR1cm4gdG9PYmplY3QoYmluZGluZ1N0eWxlKVxuICB9XG4gIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZVN0eWxlVGV4dChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgcmV0dXJuIGJpbmRpbmdTdHlsZVxufVxuXG4vKipcbiAqIHBhcmVudCBjb21wb25lbnQgc3R5bGUgc2hvdWxkIGJlIGFmdGVyIGNoaWxkJ3NcbiAqIHNvIHRoYXQgcGFyZW50IGNvbXBvbmVudCdzIHN0eWxlIGNvdWxkIG92ZXJyaWRlIGl0XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlICh2bm9kZSwgY2hlY2tDaGlsZCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBzdHlsZURhdGE7XG5cbiAgaWYgKGNoZWNrQ2hpbGQpIHtcbiAgICB2YXIgY2hpbGROb2RlID0gdm5vZGU7XG4gICAgd2hpbGUgKGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICAgIGlmIChcbiAgICAgICAgY2hpbGROb2RlICYmIGNoaWxkTm9kZS5kYXRhICYmXG4gICAgICAgIChzdHlsZURhdGEgPSBub3JtYWxpemVTdHlsZURhdGEoY2hpbGROb2RlLmRhdGEpKVxuICAgICAgKSB7XG4gICAgICAgIGV4dGVuZChyZXMsIHN0eWxlRGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKChzdHlsZURhdGEgPSBub3JtYWxpemVTdHlsZURhdGEodm5vZGUuZGF0YSkpKSB7XG4gICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgfVxuXG4gIHZhciBwYXJlbnROb2RlID0gdm5vZGU7XG4gIHdoaWxlICgocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50KSkge1xuICAgIGlmIChwYXJlbnROb2RlLmRhdGEgJiYgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShwYXJlbnROb2RlLmRhdGEpKSkge1xuICAgICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxudmFyIGNzc1ZhclJFID0gL14tLS87XG52YXIgaW1wb3J0YW50UkUgPSAvXFxzKiFpbXBvcnRhbnQkLztcbnZhciBzZXRQcm9wID0gZnVuY3Rpb24gKGVsLCBuYW1lLCB2YWwpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChjc3NWYXJSRS50ZXN0KG5hbWUpKSB7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsKTtcbiAgfSBlbHNlIGlmIChpbXBvcnRhbnRSRS50ZXN0KHZhbCkpIHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShoeXBoZW5hdGUobmFtZSksIHZhbC5yZXBsYWNlKGltcG9ydGFudFJFLCAnJyksICdpbXBvcnRhbnQnKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemUobmFtZSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgLy8gU3VwcG9ydCB2YWx1ZXMgYXJyYXkgY3JlYXRlZCBieSBhdXRvcHJlZml4ZXIsIGUuZy5cbiAgICAgIC8vIHtkaXNwbGF5OiBbXCItd2Via2l0LWJveFwiLCBcIi1tcy1mbGV4Ym94XCIsIFwiZmxleFwiXX1cbiAgICAgIC8vIFNldCB0aGVtIG9uZSBieSBvbmUsIGFuZCB0aGUgYnJvd3NlciB3aWxsIG9ubHkgc2V0IHRob3NlIGl0IGNhbiByZWNvZ25pemVcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWwubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZWwuc3R5bGVbbm9ybWFsaXplZE5hbWVdID0gdmFsW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZVtub3JtYWxpemVkTmFtZV0gPSB2YWw7XG4gICAgfVxuICB9XG59O1xuXG52YXIgdmVuZG9yTmFtZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnbXMnXTtcblxudmFyIGVtcHR5U3R5bGU7XG52YXIgbm9ybWFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChwcm9wKSB7XG4gIGVtcHR5U3R5bGUgPSBlbXB0eVN0eWxlIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuICBwcm9wID0gY2FtZWxpemUocHJvcCk7XG4gIGlmIChwcm9wICE9PSAnZmlsdGVyJyAmJiAocHJvcCBpbiBlbXB0eVN0eWxlKSkge1xuICAgIHJldHVybiBwcm9wXG4gIH1cbiAgdmFyIGNhcE5hbWUgPSBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuYW1lID0gdmVuZG9yTmFtZXNbaV0gKyBjYXBOYW1lO1xuICAgIGlmIChuYW1lIGluIGVtcHR5U3R5bGUpIHtcbiAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gIHZhciBvbGREYXRhID0gb2xkVm5vZGUuZGF0YTtcblxuICBpZiAoaXNVbmRlZihkYXRhLnN0YXRpY1N0eWxlKSAmJiBpc1VuZGVmKGRhdGEuc3R5bGUpICYmXG4gICAgaXNVbmRlZihvbGREYXRhLnN0YXRpY1N0eWxlKSAmJiBpc1VuZGVmKG9sZERhdGEuc3R5bGUpXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGN1ciwgbmFtZTtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkU3RhdGljU3R5bGUgPSBvbGREYXRhLnN0YXRpY1N0eWxlO1xuICB2YXIgb2xkU3R5bGVCaW5kaW5nID0gb2xkRGF0YS5ub3JtYWxpemVkU3R5bGUgfHwgb2xkRGF0YS5zdHlsZSB8fCB7fTtcblxuICAvLyBpZiBzdGF0aWMgc3R5bGUgZXhpc3RzLCBzdHlsZWJpbmRpbmcgYWxyZWFkeSBtZXJnZWQgaW50byBpdCB3aGVuIGRvaW5nIG5vcm1hbGl6ZVN0eWxlRGF0YVxuICB2YXIgb2xkU3R5bGUgPSBvbGRTdGF0aWNTdHlsZSB8fCBvbGRTdHlsZUJpbmRpbmc7XG5cbiAgdmFyIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKHZub2RlLmRhdGEuc3R5bGUpIHx8IHt9O1xuXG4gIC8vIHN0b3JlIG5vcm1hbGl6ZWQgc3R5bGUgdW5kZXIgYSBkaWZmZXJlbnQga2V5IGZvciBuZXh0IGRpZmZcbiAgLy8gbWFrZSBzdXJlIHRvIGNsb25lIGl0IGlmIGl0J3MgcmVhY3RpdmUsIHNpbmNlIHRoZSB1c2VyIGxpa2VseSB3YW50c1xuICAvLyB0byBtdXRhdGUgaXQuXG4gIHZub2RlLmRhdGEubm9ybWFsaXplZFN0eWxlID0gaXNEZWYoc3R5bGUuX19vYl9fKVxuICAgID8gZXh0ZW5kKHt9LCBzdHlsZSlcbiAgICA6IHN0eWxlO1xuXG4gIHZhciBuZXdTdHlsZSA9IGdldFN0eWxlKHZub2RlLCB0cnVlKTtcblxuICBmb3IgKG5hbWUgaW4gb2xkU3R5bGUpIHtcbiAgICBpZiAoaXNVbmRlZihuZXdTdHlsZVtuYW1lXSkpIHtcbiAgICAgIHNldFByb3AoZWwsIG5hbWUsICcnKTtcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIG5ld1N0eWxlKSB7XG4gICAgY3VyID0gbmV3U3R5bGVbbmFtZV07XG4gICAgaWYgKGN1ciAhPT0gb2xkU3R5bGVbbmFtZV0pIHtcbiAgICAgIC8vIGllOSBzZXR0aW5nIHRvIG51bGwgaGFzIG5vIGVmZmVjdCwgbXVzdCB1c2UgZW1wdHkgc3RyaW5nXG4gICAgICBzZXRQcm9wKGVsLCBuYW1lLCBjdXIgPT0gbnVsbCA/ICcnIDogY3VyKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHN0eWxlID0ge1xuICBjcmVhdGU6IHVwZGF0ZVN0eWxlLFxuICB1cGRhdGU6IHVwZGF0ZVN0eWxlXG59O1xuXG4vKiAgKi9cblxudmFyIHdoaXRlc3BhY2VSRSA9IC9cXHMrLztcblxuLyoqXG4gKiBBZGQgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICovXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgIGNscy5zcGxpdCh3aGl0ZXNwYWNlUkUpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICovXG5mdW5jdGlvbiByZW1vdmVDbGFzcyAoZWwsIGNscykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgIGNscy5zcGxpdCh3aGl0ZXNwYWNlUkUpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoYyk7IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfVxuICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgIHZhciB0YXIgPSAnICcgKyBjbHMgKyAnICc7XG4gICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgIH1cbiAgICBjdXIgPSBjdXIudHJpbSgpO1xuICAgIGlmIChjdXIpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlVHJhbnNpdGlvbiAoZGVmJCQxKSB7XG4gIGlmICghZGVmJCQxKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIGlmIChkZWYkJDEuY3NzICE9PSBmYWxzZSkge1xuICAgICAgZXh0ZW5kKHJlcywgYXV0b0Nzc1RyYW5zaXRpb24oZGVmJCQxLm5hbWUgfHwgJ3YnKSk7XG4gICAgfVxuICAgIGV4dGVuZChyZXMsIGRlZiQkMSk7XG4gICAgcmV0dXJuIHJlc1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZiQkMSlcbiAgfVxufVxuXG52YXIgYXV0b0Nzc1RyYW5zaXRpb24gPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRlckNsYXNzOiAobmFtZSArIFwiLWVudGVyXCIpLFxuICAgIGVudGVyVG9DbGFzczogKG5hbWUgKyBcIi1lbnRlci10b1wiKSxcbiAgICBlbnRlckFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWVudGVyLWFjdGl2ZVwiKSxcbiAgICBsZWF2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlXCIpLFxuICAgIGxlYXZlVG9DbGFzczogKG5hbWUgKyBcIi1sZWF2ZS10b1wiKSxcbiAgICBsZWF2ZUFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlLWFjdGl2ZVwiKVxuICB9XG59KTtcblxudmFyIGhhc1RyYW5zaXRpb24gPSBpbkJyb3dzZXIgJiYgIWlzSUU5O1xudmFyIFRSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XG52YXIgQU5JTUFUSU9OID0gJ2FuaW1hdGlvbic7XG5cbi8vIFRyYW5zaXRpb24gcHJvcGVydHkvZXZlbnQgc25pZmZpbmdcbnZhciB0cmFuc2l0aW9uUHJvcCA9ICd0cmFuc2l0aW9uJztcbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSAndHJhbnNpdGlvbmVuZCc7XG52YXIgYW5pbWF0aW9uUHJvcCA9ICdhbmltYXRpb24nO1xudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ2FuaW1hdGlvbmVuZCc7XG5pZiAoaGFzVHJhbnNpdGlvbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHdpbmRvdy5vbnRyYW5zaXRpb25lbmQgPT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICB0cmFuc2l0aW9uUHJvcCA9ICdXZWJraXRUcmFuc2l0aW9uJztcbiAgICB0cmFuc2l0aW9uRW5kRXZlbnQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCc7XG4gIH1cbiAgaWYgKHdpbmRvdy5vbmFuaW1hdGlvbmVuZCA9PT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgYW5pbWF0aW9uUHJvcCA9ICdXZWJraXRBbmltYXRpb24nO1xuICAgIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ3dlYmtpdEFuaW1hdGlvbkVuZCc7XG4gIH1cbn1cblxuLy8gYmluZGluZyB0byB3aW5kb3cgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgaG90IHJlbG9hZCB3b3JrIGluIElFIGluIHN0cmljdCBtb2RlXG52YXIgcmFmID0gaW5Ccm93c2VyXG4gID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdylcbiAgICA6IHNldFRpbWVvdXRcbiAgOiAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH07XG5cbmZ1bmN0aW9uIG5leHRGcmFtZSAoZm4pIHtcbiAgcmFmKGZ1bmN0aW9uICgpIHtcbiAgICByYWYoZm4pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVHJhbnNpdGlvbkNsYXNzIChlbCwgY2xzKSB7XG4gIHZhciB0cmFuc2l0aW9uQ2xhc3NlcyA9IGVsLl90cmFuc2l0aW9uQ2xhc3NlcyB8fCAoZWwuX3RyYW5zaXRpb25DbGFzc2VzID0gW10pO1xuICBpZiAodHJhbnNpdGlvbkNsYXNzZXMuaW5kZXhPZihjbHMpIDwgMCkge1xuICAgIHRyYW5zaXRpb25DbGFzc2VzLnB1c2goY2xzKTtcbiAgICBhZGRDbGFzcyhlbCwgY2xzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uQ2xhc3MgKGVsLCBjbHMpIHtcbiAgaWYgKGVsLl90cmFuc2l0aW9uQ2xhc3Nlcykge1xuICAgIHJlbW92ZShlbC5fdHJhbnNpdGlvbkNsYXNzZXMsIGNscyk7XG4gIH1cbiAgcmVtb3ZlQ2xhc3MoZWwsIGNscyk7XG59XG5cbmZ1bmN0aW9uIHdoZW5UcmFuc2l0aW9uRW5kcyAoXG4gIGVsLFxuICBleHBlY3RlZFR5cGUsXG4gIGNiXG4pIHtcbiAgdmFyIHJlZiA9IGdldFRyYW5zaXRpb25JbmZvKGVsLCBleHBlY3RlZFR5cGUpO1xuICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICB2YXIgdGltZW91dCA9IHJlZi50aW1lb3V0O1xuICB2YXIgcHJvcENvdW50ID0gcmVmLnByb3BDb3VudDtcbiAgaWYgKCF0eXBlKSB7IHJldHVybiBjYigpIH1cbiAgdmFyIGV2ZW50ID0gdHlwZSA9PT0gVFJBTlNJVElPTiA/IHRyYW5zaXRpb25FbmRFdmVudCA6IGFuaW1hdGlvbkVuZEV2ZW50O1xuICB2YXIgZW5kZWQgPSAwO1xuICB2YXIgZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcbiAgICBjYigpO1xuICB9O1xuICB2YXIgb25FbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcbiAgICAgIGlmICgrK2VuZGVkID49IHByb3BDb3VudCkge1xuICAgICAgICBlbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmIChlbmRlZCA8IHByb3BDb3VudCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9LCB0aW1lb3V0ICsgMSk7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcbn1cblxudmFyIHRyYW5zZm9ybVJFID0gL1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpLztcblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkluZm8gKGVsLCBleHBlY3RlZFR5cGUpIHtcbiAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgLy8gSlNET00gbWF5IHJldHVybiB1bmRlZmluZWQgZm9yIHRyYW5zaXRpb24gcHJvcGVydGllc1xuICB2YXIgdHJhbnNpdGlvbkRlbGF5cyA9IChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRGVsYXknXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gIHZhciB0cmFuc2l0aW9uRHVyYXRpb25zID0gKHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbiddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIHRyYW5zaXRpb25UaW1lb3V0ID0gZ2V0VGltZW91dCh0cmFuc2l0aW9uRGVsYXlzLCB0cmFuc2l0aW9uRHVyYXRpb25zKTtcbiAgdmFyIGFuaW1hdGlvbkRlbGF5cyA9IChzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEZWxheSddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIGFuaW1hdGlvbkR1cmF0aW9ucyA9IChzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEdXJhdGlvbiddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIGFuaW1hdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcblxuICB2YXIgdHlwZTtcbiAgdmFyIHRpbWVvdXQgPSAwO1xuICB2YXIgcHJvcENvdW50ID0gMDtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcbiAgICBpZiAodHJhbnNpdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICB0eXBlID0gVFJBTlNJVElPTjtcbiAgICAgIHRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcbiAgICAgIHByb3BDb3VudCA9IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IEFOSU1BVElPTikge1xuICAgIGlmIChhbmltYXRpb25UaW1lb3V0ID4gMCkge1xuICAgICAgdHlwZSA9IEFOSU1BVElPTjtcbiAgICAgIHRpbWVvdXQgPSBhbmltYXRpb25UaW1lb3V0O1xuICAgICAgcHJvcENvdW50ID0gYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGltZW91dCA9IE1hdGgubWF4KHRyYW5zaXRpb25UaW1lb3V0LCBhbmltYXRpb25UaW1lb3V0KTtcbiAgICB0eXBlID0gdGltZW91dCA+IDBcbiAgICAgID8gdHJhbnNpdGlvblRpbWVvdXQgPiBhbmltYXRpb25UaW1lb3V0XG4gICAgICAgID8gVFJBTlNJVElPTlxuICAgICAgICA6IEFOSU1BVElPTlxuICAgICAgOiBudWxsO1xuICAgIHByb3BDb3VudCA9IHR5cGVcbiAgICAgID8gdHlwZSA9PT0gVFJBTlNJVElPTlxuICAgICAgICA/IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICAgIDogYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aFxuICAgICAgOiAwO1xuICB9XG4gIHZhciBoYXNUcmFuc2Zvcm0gPVxuICAgIHR5cGUgPT09IFRSQU5TSVRJT04gJiZcbiAgICB0cmFuc2Zvcm1SRS50ZXN0KHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdQcm9wZXJ0eSddKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgcHJvcENvdW50OiBwcm9wQ291bnQsXG4gICAgaGFzVHJhbnNmb3JtOiBoYXNUcmFuc2Zvcm1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUaW1lb3V0IChkZWxheXMsIGR1cmF0aW9ucykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB3aGlsZSAoZGVsYXlzLmxlbmd0aCA8IGR1cmF0aW9ucy5sZW5ndGgpIHtcbiAgICBkZWxheXMgPSBkZWxheXMuY29uY2F0KGRlbGF5cyk7XG4gIH1cblxuICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgZHVyYXRpb25zLm1hcChmdW5jdGlvbiAoZCwgaSkge1xuICAgIHJldHVybiB0b01zKGQpICsgdG9NcyhkZWxheXNbaV0pXG4gIH0pKVxufVxuXG4vLyBPbGQgdmVyc2lvbnMgb2YgQ2hyb21pdW0gKGJlbG93IDYxLjAuMzE2My4xMDApIGZvcm1hdHMgZmxvYXRpbmcgcG9pbnRlciBudW1iZXJzXG4vLyBpbiBhIGxvY2FsZS1kZXBlbmRlbnQgd2F5LCB1c2luZyBhIGNvbW1hIGluc3RlYWQgb2YgYSBkb3QuXG4vLyBJZiBjb21tYSBpcyBub3QgcmVwbGFjZWQgd2l0aCBhIGRvdCwgdGhlIGlucHV0IHdpbGwgYmUgcm91bmRlZCBkb3duIChpLmUuIGFjdGluZ1xuLy8gYXMgYSBmbG9vciBmdW5jdGlvbikgY2F1c2luZyB1bmV4cGVjdGVkIGJlaGF2aW9yc1xuZnVuY3Rpb24gdG9NcyAocykge1xuICByZXR1cm4gTnVtYmVyKHMuc2xpY2UoMCwgLTEpLnJlcGxhY2UoJywnLCAnLicpKSAqIDEwMDBcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGVudGVyICh2bm9kZSwgdG9nZ2xlRGlzcGxheSkge1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG5cbiAgLy8gY2FsbCBsZWF2ZSBjYWxsYmFjayBub3dcbiAgaWYgKGlzRGVmKGVsLl9sZWF2ZUNiKSkge1xuICAgIGVsLl9sZWF2ZUNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgZWwuX2xlYXZlQ2IoKTtcbiAgfVxuXG4gIHZhciBkYXRhID0gcmVzb2x2ZVRyYW5zaXRpb24odm5vZGUuZGF0YS50cmFuc2l0aW9uKTtcbiAgaWYgKGlzVW5kZWYoZGF0YSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY3NzID0gZGF0YS5jc3M7XG4gIHZhciB0eXBlID0gZGF0YS50eXBlO1xuICB2YXIgZW50ZXJDbGFzcyA9IGRhdGEuZW50ZXJDbGFzcztcbiAgdmFyIGVudGVyVG9DbGFzcyA9IGRhdGEuZW50ZXJUb0NsYXNzO1xuICB2YXIgZW50ZXJBY3RpdmVDbGFzcyA9IGRhdGEuZW50ZXJBY3RpdmVDbGFzcztcbiAgdmFyIGFwcGVhckNsYXNzID0gZGF0YS5hcHBlYXJDbGFzcztcbiAgdmFyIGFwcGVhclRvQ2xhc3MgPSBkYXRhLmFwcGVhclRvQ2xhc3M7XG4gIHZhciBhcHBlYXJBY3RpdmVDbGFzcyA9IGRhdGEuYXBwZWFyQWN0aXZlQ2xhc3M7XG4gIHZhciBiZWZvcmVFbnRlciA9IGRhdGEuYmVmb3JlRW50ZXI7XG4gIHZhciBlbnRlciA9IGRhdGEuZW50ZXI7XG4gIHZhciBhZnRlckVudGVyID0gZGF0YS5hZnRlckVudGVyO1xuICB2YXIgZW50ZXJDYW5jZWxsZWQgPSBkYXRhLmVudGVyQ2FuY2VsbGVkO1xuICB2YXIgYmVmb3JlQXBwZWFyID0gZGF0YS5iZWZvcmVBcHBlYXI7XG4gIHZhciBhcHBlYXIgPSBkYXRhLmFwcGVhcjtcbiAgdmFyIGFmdGVyQXBwZWFyID0gZGF0YS5hZnRlckFwcGVhcjtcbiAgdmFyIGFwcGVhckNhbmNlbGxlZCA9IGRhdGEuYXBwZWFyQ2FuY2VsbGVkO1xuICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xuXG4gIC8vIGFjdGl2ZUluc3RhbmNlIHdpbGwgYWx3YXlzIGJlIHRoZSA8dHJhbnNpdGlvbj4gY29tcG9uZW50IG1hbmFnaW5nIHRoaXNcbiAgLy8gdHJhbnNpdGlvbi4gT25lIGVkZ2UgY2FzZSB0byBjaGVjayBpcyB3aGVuIHRoZSA8dHJhbnNpdGlvbj4gaXMgcGxhY2VkXG4gIC8vIGFzIHRoZSByb290IG5vZGUgb2YgYSBjaGlsZCBjb21wb25lbnQuIEluIHRoYXQgY2FzZSB3ZSBuZWVkIHRvIGNoZWNrXG4gIC8vIDx0cmFuc2l0aW9uPidzIHBhcmVudCBmb3IgYXBwZWFyIGNoZWNrLlxuICB2YXIgY29udGV4dCA9IGFjdGl2ZUluc3RhbmNlO1xuICB2YXIgdHJhbnNpdGlvbk5vZGUgPSBhY3RpdmVJbnN0YW5jZS4kdm5vZGU7XG4gIHdoaWxlICh0cmFuc2l0aW9uTm9kZSAmJiB0cmFuc2l0aW9uTm9kZS5wYXJlbnQpIHtcbiAgICBjb250ZXh0ID0gdHJhbnNpdGlvbk5vZGUuY29udGV4dDtcbiAgICB0cmFuc2l0aW9uTm9kZSA9IHRyYW5zaXRpb25Ob2RlLnBhcmVudDtcbiAgfVxuXG4gIHZhciBpc0FwcGVhciA9ICFjb250ZXh0Ll9pc01vdW50ZWQgfHwgIXZub2RlLmlzUm9vdEluc2VydDtcblxuICBpZiAoaXNBcHBlYXIgJiYgIWFwcGVhciAmJiBhcHBlYXIgIT09ICcnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3RhcnRDbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhckNsYXNzXG4gICAgPyBhcHBlYXJDbGFzc1xuICAgIDogZW50ZXJDbGFzcztcbiAgdmFyIGFjdGl2ZUNsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQWN0aXZlQ2xhc3NcbiAgICA/IGFwcGVhckFjdGl2ZUNsYXNzXG4gICAgOiBlbnRlckFjdGl2ZUNsYXNzO1xuICB2YXIgdG9DbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhclRvQ2xhc3NcbiAgICA/IGFwcGVhclRvQ2xhc3NcbiAgICA6IGVudGVyVG9DbGFzcztcblxuICB2YXIgYmVmb3JlRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICA/IChiZWZvcmVBcHBlYXIgfHwgYmVmb3JlRW50ZXIpXG4gICAgOiBiZWZvcmVFbnRlcjtcbiAgdmFyIGVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgPyAodHlwZW9mIGFwcGVhciA9PT0gJ2Z1bmN0aW9uJyA/IGFwcGVhciA6IGVudGVyKVxuICAgIDogZW50ZXI7XG4gIHZhciBhZnRlckVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgPyAoYWZ0ZXJBcHBlYXIgfHwgYWZ0ZXJFbnRlcilcbiAgICA6IGFmdGVyRW50ZXI7XG4gIHZhciBlbnRlckNhbmNlbGxlZEhvb2sgPSBpc0FwcGVhclxuICAgID8gKGFwcGVhckNhbmNlbGxlZCB8fCBlbnRlckNhbmNlbGxlZClcbiAgICA6IGVudGVyQ2FuY2VsbGVkO1xuXG4gIHZhciBleHBsaWNpdEVudGVyRHVyYXRpb24gPSB0b051bWJlcihcbiAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgID8gZHVyYXRpb24uZW50ZXJcbiAgICAgIDogZHVyYXRpb25cbiAgKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBleHBsaWNpdEVudGVyRHVyYXRpb24gIT0gbnVsbCkge1xuICAgIGNoZWNrRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uLCAnZW50ZXInLCB2bm9kZSk7XG4gIH1cblxuICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xuICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgoZW50ZXJIb29rKTtcblxuICB2YXIgY2IgPSBlbC5fZW50ZXJDYiA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpO1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcyk7XG4gICAgICB9XG4gICAgICBlbnRlckNhbmNlbGxlZEhvb2sgJiYgZW50ZXJDYW5jZWxsZWRIb29rKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJFbnRlckhvb2sgJiYgYWZ0ZXJFbnRlckhvb2soZWwpO1xuICAgIH1cbiAgICBlbC5fZW50ZXJDYiA9IG51bGw7XG4gIH0pO1xuXG4gIGlmICghdm5vZGUuZGF0YS5zaG93KSB7XG4gICAgLy8gcmVtb3ZlIHBlbmRpbmcgbGVhdmUgZWxlbWVudCBvbiBlbnRlciBieSBpbmplY3RpbmcgYW4gaW5zZXJ0IGhvb2tcbiAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgdmFyIHBlbmRpbmdOb2RlID0gcGFyZW50ICYmIHBhcmVudC5fcGVuZGluZyAmJiBwYXJlbnQuX3BlbmRpbmdbdm5vZGUua2V5XTtcbiAgICAgIGlmIChwZW5kaW5nTm9kZSAmJlxuICAgICAgICBwZW5kaW5nTm9kZS50YWcgPT09IHZub2RlLnRhZyAmJlxuICAgICAgICBwZW5kaW5nTm9kZS5lbG0uX2xlYXZlQ2JcbiAgICAgICkge1xuICAgICAgICBwZW5kaW5nTm9kZS5lbG0uX2xlYXZlQ2IoKTtcbiAgICAgIH1cbiAgICAgIGVudGVySG9vayAmJiBlbnRlckhvb2soZWwsIGNiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHN0YXJ0IGVudGVyIHRyYW5zaXRpb25cbiAgYmVmb3JlRW50ZXJIb29rICYmIGJlZm9yZUVudGVySG9vayhlbCk7XG4gIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XG4gICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRFbnRlckR1cmF0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAodm5vZGUuZGF0YS5zaG93KSB7XG4gICAgdG9nZ2xlRGlzcGxheSAmJiB0b2dnbGVEaXNwbGF5KCk7XG4gICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICB9XG5cbiAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgY2IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsZWF2ZSAodm5vZGUsIHJtKSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcblxuICAvLyBjYWxsIGVudGVyIGNhbGxiYWNrIG5vd1xuICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpKSB7XG4gICAgZWwuX2VudGVyQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICBlbC5fZW50ZXJDYigpO1xuICB9XG5cbiAgdmFyIGRhdGEgPSByZXNvbHZlVHJhbnNpdGlvbih2bm9kZS5kYXRhLnRyYW5zaXRpb24pO1xuICBpZiAoaXNVbmRlZihkYXRhKSB8fCBlbC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBybSgpXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzRGVmKGVsLl9sZWF2ZUNiKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGNzcyA9IGRhdGEuY3NzO1xuICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcbiAgdmFyIGxlYXZlQ2xhc3MgPSBkYXRhLmxlYXZlQ2xhc3M7XG4gIHZhciBsZWF2ZVRvQ2xhc3MgPSBkYXRhLmxlYXZlVG9DbGFzcztcbiAgdmFyIGxlYXZlQWN0aXZlQ2xhc3MgPSBkYXRhLmxlYXZlQWN0aXZlQ2xhc3M7XG4gIHZhciBiZWZvcmVMZWF2ZSA9IGRhdGEuYmVmb3JlTGVhdmU7XG4gIHZhciBsZWF2ZSA9IGRhdGEubGVhdmU7XG4gIHZhciBhZnRlckxlYXZlID0gZGF0YS5hZnRlckxlYXZlO1xuICB2YXIgbGVhdmVDYW5jZWxsZWQgPSBkYXRhLmxlYXZlQ2FuY2VsbGVkO1xuICB2YXIgZGVsYXlMZWF2ZSA9IGRhdGEuZGVsYXlMZWF2ZTtcbiAgdmFyIGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcblxuICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xuICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgobGVhdmUpO1xuXG4gIHZhciBleHBsaWNpdExlYXZlRHVyYXRpb24gPSB0b051bWJlcihcbiAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgID8gZHVyYXRpb24ubGVhdmVcbiAgICAgIDogZHVyYXRpb25cbiAgKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc0RlZihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgY2hlY2tEdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24sICdsZWF2ZScsIHZub2RlKTtcbiAgfVxuXG4gIHZhciBjYiA9IGVsLl9sZWF2ZUNiID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5fcGVuZGluZykge1xuICAgICAgZWwucGFyZW50Tm9kZS5fcGVuZGluZ1t2bm9kZS5rZXldID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICB9XG4gICAgICBsZWF2ZUNhbmNlbGxlZCAmJiBsZWF2ZUNhbmNlbGxlZChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJtKCk7XG4gICAgICBhZnRlckxlYXZlICYmIGFmdGVyTGVhdmUoZWwpO1xuICAgIH1cbiAgICBlbC5fbGVhdmVDYiA9IG51bGw7XG4gIH0pO1xuXG4gIGlmIChkZWxheUxlYXZlKSB7XG4gICAgZGVsYXlMZWF2ZShwZXJmb3JtTGVhdmUpO1xuICB9IGVsc2Uge1xuICAgIHBlcmZvcm1MZWF2ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVyZm9ybUxlYXZlICgpIHtcbiAgICAvLyB0aGUgZGVsYXllZCBsZWF2ZSBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkXG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIHJlY29yZCBsZWF2aW5nIGVsZW1lbnRcbiAgICBpZiAoIXZub2RlLmRhdGEuc2hvdyAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAoZWwucGFyZW50Tm9kZS5fcGVuZGluZyB8fCAoZWwucGFyZW50Tm9kZS5fcGVuZGluZyA9IHt9KSlbKHZub2RlLmtleSldID0gdm5vZGU7XG4gICAgfVxuICAgIGJlZm9yZUxlYXZlICYmIGJlZm9yZUxlYXZlKGVsKTtcbiAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xuICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgICAgICBpZiAoIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRMZWF2ZUR1cmF0aW9uKSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdExlYXZlRHVyYXRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgbGVhdmUgJiYgbGVhdmUoZWwsIGNiKTtcbiAgICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIG9ubHkgdXNlZCBpbiBkZXYgbW9kZVxuZnVuY3Rpb24gY2hlY2tEdXJhdGlvbiAodmFsLCBuYW1lLCB2bm9kZSkge1xuICBpZiAodHlwZW9mIHZhbCAhPT0gJ251bWJlcicpIHtcbiAgICB3YXJuKFxuICAgICAgXCI8dHJhbnNpdGlvbj4gZXhwbGljaXQgXCIgKyBuYW1lICsgXCIgZHVyYXRpb24gaXMgbm90IGEgdmFsaWQgbnVtYmVyIC0gXCIgK1xuICAgICAgXCJnb3QgXCIgKyAoSlNPTi5zdHJpbmdpZnkodmFsKSkgKyBcIi5cIixcbiAgICAgIHZub2RlLmNvbnRleHRcbiAgICApO1xuICB9IGVsc2UgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICB3YXJuKFxuICAgICAgXCI8dHJhbnNpdGlvbj4gZXhwbGljaXQgXCIgKyBuYW1lICsgXCIgZHVyYXRpb24gaXMgTmFOIC0gXCIgK1xuICAgICAgJ3RoZSBkdXJhdGlvbiBleHByZXNzaW9uIG1pZ2h0IGJlIGluY29ycmVjdC4nLFxuICAgICAgdm5vZGUuY29udGV4dFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZER1cmF0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmICFpc05hTih2YWwpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdHJhbnNpdGlvbiBob29rJ3MgYXJndW1lbnQgbGVuZ3RoLiBUaGUgaG9vayBtYXkgYmU6XG4gKiAtIGEgbWVyZ2VkIGhvb2sgKGludm9rZXIpIHdpdGggdGhlIG9yaWdpbmFsIGluIC5mbnNcbiAqIC0gYSB3cmFwcGVkIGNvbXBvbmVudCBtZXRob2QgKGNoZWNrIC5fbGVuZ3RoKVxuICogLSBhIHBsYWluIGZ1bmN0aW9uICgubGVuZ3RoKVxuICovXG5mdW5jdGlvbiBnZXRIb29rQXJndW1lbnRzTGVuZ3RoIChmbikge1xuICBpZiAoaXNVbmRlZihmbikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICB2YXIgaW52b2tlckZucyA9IGZuLmZucztcbiAgaWYgKGlzRGVmKGludm9rZXJGbnMpKSB7XG4gICAgLy8gaW52b2tlclxuICAgIHJldHVybiBnZXRIb29rQXJndW1lbnRzTGVuZ3RoKFxuICAgICAgQXJyYXkuaXNBcnJheShpbnZva2VyRm5zKVxuICAgICAgICA/IGludm9rZXJGbnNbMF1cbiAgICAgICAgOiBpbnZva2VyRm5zXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZm4uX2xlbmd0aCB8fCBmbi5sZW5ndGgpID4gMVxuICB9XG59XG5cbmZ1bmN0aW9uIF9lbnRlciAoXywgdm5vZGUpIHtcbiAgaWYgKHZub2RlLmRhdGEuc2hvdyAhPT0gdHJ1ZSkge1xuICAgIGVudGVyKHZub2RlKTtcbiAgfVxufVxuXG52YXIgdHJhbnNpdGlvbiA9IGluQnJvd3NlciA/IHtcbiAgY3JlYXRlOiBfZW50ZXIsXG4gIGFjdGl2YXRlOiBfZW50ZXIsXG4gIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlJCQxICh2bm9kZSwgcm0pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh2bm9kZS5kYXRhLnNob3cgIT09IHRydWUpIHtcbiAgICAgIGxlYXZlKHZub2RlLCBybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJtKCk7XG4gICAgfVxuICB9XG59IDoge307XG5cbnZhciBwbGF0Zm9ybU1vZHVsZXMgPSBbXG4gIGF0dHJzLFxuICBrbGFzcyxcbiAgZXZlbnRzLFxuICBkb21Qcm9wcyxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb25cbl07XG5cbi8qICAqL1xuXG4vLyB0aGUgZGlyZWN0aXZlIG1vZHVsZSBzaG91bGQgYmUgYXBwbGllZCBsYXN0LCBhZnRlciBhbGxcbi8vIGJ1aWx0LWluIG1vZHVsZXMgaGF2ZSBiZWVuIGFwcGxpZWQuXG52YXIgbW9kdWxlcyA9IHBsYXRmb3JtTW9kdWxlcy5jb25jYXQoYmFzZU1vZHVsZXMpO1xuXG52YXIgcGF0Y2ggPSBjcmVhdGVQYXRjaEZ1bmN0aW9uKHsgbm9kZU9wczogbm9kZU9wcywgbW9kdWxlczogbW9kdWxlcyB9KTtcblxuLyoqXG4gKiBOb3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgbGlrZSBhdHRhY2hpbmdcbiAqIHByb3BlcnRpZXMgdG8gRWxlbWVudHMuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoaXNJRTkpIHtcbiAgLy8gaHR0cDovL3d3dy5tYXR0czQxMS5jb20vcG9zdC9pbnRlcm5ldC1leHBsb3Jlci05LW9uaW5wdXQvXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChlbCAmJiBlbC52bW9kZWwpIHtcbiAgICAgIHRyaWdnZXIoZWwsICdpbnB1dCcpO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBkaXJlY3RpdmUgPSB7XG4gIGluc2VydGVkOiBmdW5jdGlvbiBpbnNlcnRlZCAoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSkge1xuICAgIGlmICh2bm9kZS50YWcgPT09ICdzZWxlY3QnKSB7XG4gICAgICAvLyAjNjkwM1xuICAgICAgaWYgKG9sZFZub2RlLmVsbSAmJiAhb2xkVm5vZGUuZWxtLl92T3B0aW9ucykge1xuICAgICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ3Bvc3RwYXRjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaXJlY3RpdmUuY29tcG9uZW50VXBkYXRlZChlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgICAgIH1cbiAgICAgIGVsLl92T3B0aW9ucyA9IFtdLm1hcC5jYWxsKGVsLm9wdGlvbnMsIGdldFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHZub2RlLnRhZyA9PT0gJ3RleHRhcmVhJyB8fCBpc1RleHRJbnB1dFR5cGUoZWwudHlwZSkpIHtcbiAgICAgIGVsLl92TW9kaWZpZXJzID0gYmluZGluZy5tb2RpZmllcnM7XG4gICAgICBpZiAoIWJpbmRpbmcubW9kaWZpZXJzLmxhenkpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIG9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgb25Db21wb3NpdGlvbkVuZCk7XG4gICAgICAgIC8vIFNhZmFyaSA8IDEwLjIgJiBVSVdlYlZpZXcgZG9lc24ndCBmaXJlIGNvbXBvc2l0aW9uZW5kIHdoZW5cbiAgICAgICAgLy8gc3dpdGNoaW5nIGZvY3VzIGJlZm9yZSBjb25maXJtaW5nIGNvbXBvc2l0aW9uIGNob2ljZVxuICAgICAgICAvLyB0aGlzIGFsc28gZml4ZXMgdGhlIGlzc3VlIHdoZXJlIHNvbWUgYnJvd3NlcnMgZS5nLiBpT1MgQ2hyb21lXG4gICAgICAgIC8vIGZpcmVzIFwiY2hhbmdlXCIgaW5zdGVhZCBvZiBcImlucHV0XCIgb24gYXV0b2NvbXBsZXRlLlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChpc0lFOSkge1xuICAgICAgICAgIGVsLnZtb2RlbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24gY29tcG9uZW50VXBkYXRlZCAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgaWYgKHZub2RlLnRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgICAgIC8vIGluIGNhc2UgdGhlIG9wdGlvbnMgcmVuZGVyZWQgYnkgdi1mb3IgaGF2ZSBjaGFuZ2VkLFxuICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoZSB2YWx1ZSBpcyBvdXQtb2Ytc3luYyB3aXRoIHRoZSByZW5kZXJlZCBvcHRpb25zLlxuICAgICAgLy8gZGV0ZWN0IHN1Y2ggY2FzZXMgYW5kIGZpbHRlciBvdXQgdmFsdWVzIHRoYXQgbm8gbG9uZ2VyIGhhcyBhIG1hdGNoaW5nXG4gICAgICAvLyBvcHRpb24gaW4gdGhlIERPTS5cbiAgICAgIHZhciBwcmV2T3B0aW9ucyA9IGVsLl92T3B0aW9ucztcbiAgICAgIHZhciBjdXJPcHRpb25zID0gZWwuX3ZPcHRpb25zID0gW10ubWFwLmNhbGwoZWwub3B0aW9ucywgZ2V0VmFsdWUpO1xuICAgICAgaWYgKGN1ck9wdGlvbnMuc29tZShmdW5jdGlvbiAobywgaSkgeyByZXR1cm4gIWxvb3NlRXF1YWwobywgcHJldk9wdGlvbnNbaV0pOyB9KSkge1xuICAgICAgICAvLyB0cmlnZ2VyIGNoYW5nZSBldmVudCBpZlxuICAgICAgICAvLyBubyBtYXRjaGluZyBvcHRpb24gZm91bmQgZm9yIGF0IGxlYXN0IG9uZSB2YWx1ZVxuICAgICAgICB2YXIgbmVlZFJlc2V0ID0gZWwubXVsdGlwbGVcbiAgICAgICAgICA/IGJpbmRpbmcudmFsdWUuc29tZShmdW5jdGlvbiAodikgeyByZXR1cm4gaGFzTm9NYXRjaGluZ09wdGlvbih2LCBjdXJPcHRpb25zKTsgfSlcbiAgICAgICAgICA6IGJpbmRpbmcudmFsdWUgIT09IGJpbmRpbmcub2xkVmFsdWUgJiYgaGFzTm9NYXRjaGluZ09wdGlvbihiaW5kaW5nLnZhbHVlLCBjdXJPcHRpb25zKTtcbiAgICAgICAgaWYgKG5lZWRSZXNldCkge1xuICAgICAgICAgIHRyaWdnZXIoZWwsICdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gc2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xuICBhY3R1YWxseVNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bSk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNJRSB8fCBpc0VkZ2UpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdHVhbGx5U2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY3R1YWxseVNldFNlbGVjdGVkIChlbCwgYmluZGluZywgdm0pIHtcbiAgdmFyIHZhbHVlID0gYmluZGluZy52YWx1ZTtcbiAgdmFyIGlzTXVsdGlwbGUgPSBlbC5tdWx0aXBsZTtcbiAgaWYgKGlzTXVsdGlwbGUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgXCI8c2VsZWN0IG11bHRpcGxlIHYtbW9kZWw9XFxcIlwiICsgKGJpbmRpbmcuZXhwcmVzc2lvbikgKyBcIlxcXCI+IFwiICtcbiAgICAgIFwiZXhwZWN0cyBhbiBBcnJheSB2YWx1ZSBmb3IgaXRzIGJpbmRpbmcsIGJ1dCBnb3QgXCIgKyAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWxlY3RlZCwgb3B0aW9uO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb3B0aW9uID0gZWwub3B0aW9uc1tpXTtcbiAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgc2VsZWN0ZWQgPSBsb29zZUluZGV4T2YodmFsdWUsIGdldFZhbHVlKG9wdGlvbikpID4gLTE7XG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkICE9PSBzZWxlY3RlZCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxvb3NlRXF1YWwoZ2V0VmFsdWUob3B0aW9uKSwgdmFsdWUpKSB7XG4gICAgICAgIGlmIChlbC5zZWxlY3RlZEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghaXNNdWx0aXBsZSkge1xuICAgIGVsLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNOb01hdGNoaW5nT3B0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5ldmVyeShmdW5jdGlvbiAobykgeyByZXR1cm4gIWxvb3NlRXF1YWwobywgdmFsdWUpOyB9KVxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSAob3B0aW9uKSB7XG4gIHJldHVybiAnX3ZhbHVlJyBpbiBvcHRpb25cbiAgICA/IG9wdGlvbi5fdmFsdWVcbiAgICA6IG9wdGlvbi52YWx1ZVxufVxuXG5mdW5jdGlvbiBvbkNvbXBvc2l0aW9uU3RhcnQgKGUpIHtcbiAgZS50YXJnZXQuY29tcG9zaW5nID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb25Db21wb3NpdGlvbkVuZCAoZSkge1xuICAvLyBwcmV2ZW50IHRyaWdnZXJpbmcgYW4gaW5wdXQgZXZlbnQgZm9yIG5vIHJlYXNvblxuICBpZiAoIWUudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm4gfVxuICBlLnRhcmdldC5jb21wb3NpbmcgPSBmYWxzZTtcbiAgdHJpZ2dlcihlLnRhcmdldCwgJ2lucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXIgKGVsLCB0eXBlKSB7XG4gIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgZS5pbml0RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gIGVsLmRpc3BhdGNoRXZlbnQoZSk7XG59XG5cbi8qICAqL1xuXG4vLyByZWN1cnNpdmVseSBzZWFyY2ggZm9yIHBvc3NpYmxlIHRyYW5zaXRpb24gZGVmaW5lZCBpbnNpZGUgdGhlIGNvbXBvbmVudCByb290XG5mdW5jdGlvbiBsb2NhdGVOb2RlICh2bm9kZSkge1xuICByZXR1cm4gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgJiYgKCF2bm9kZS5kYXRhIHx8ICF2bm9kZS5kYXRhLnRyYW5zaXRpb24pXG4gICAgPyBsb2NhdGVOb2RlKHZub2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSlcbiAgICA6IHZub2RlXG59XG5cbnZhciBzaG93ID0ge1xuICBiaW5kOiBmdW5jdGlvbiBiaW5kIChlbCwgcmVmLCB2bm9kZSkge1xuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcblxuICAgIHZub2RlID0gbG9jYXRlTm9kZSh2bm9kZSk7XG4gICAgdmFyIHRyYW5zaXRpb24kJDEgPSB2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEudHJhbnNpdGlvbjtcbiAgICB2YXIgb3JpZ2luYWxEaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5ID1cbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICcnIDogZWwuc3R5bGUuZGlzcGxheTtcbiAgICBpZiAodmFsdWUgJiYgdHJhbnNpdGlvbiQkMSkge1xuICAgICAgdm5vZGUuZGF0YS5zaG93ID0gdHJ1ZTtcbiAgICAgIGVudGVyKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBvcmlnaW5hbERpc3BsYXk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gb3JpZ2luYWxEaXNwbGF5IDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSAoZWwsIHJlZiwgdm5vZGUpIHtcbiAgICB2YXIgdmFsdWUgPSByZWYudmFsdWU7XG4gICAgdmFyIG9sZFZhbHVlID0gcmVmLm9sZFZhbHVlO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF2YWx1ZSA9PT0gIW9sZFZhbHVlKSB7IHJldHVybiB9XG4gICAgdm5vZGUgPSBsb2NhdGVOb2RlKHZub2RlKTtcbiAgICB2YXIgdHJhbnNpdGlvbiQkMSA9IHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICAgIGlmICh0cmFuc2l0aW9uJCQxKSB7XG4gICAgICB2bm9kZS5kYXRhLnNob3cgPSB0cnVlO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVudGVyKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fdk9yaWdpbmFsRGlzcGxheTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWF2ZSh2bm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgOiAnbm9uZSc7XG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kIChcbiAgICBlbCxcbiAgICBiaW5kaW5nLFxuICAgIHZub2RlLFxuICAgIG9sZFZub2RlLFxuICAgIGlzRGVzdHJveVxuICApIHtcbiAgICBpZiAoIWlzRGVzdHJveSkge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fdk9yaWdpbmFsRGlzcGxheTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBwbGF0Zm9ybURpcmVjdGl2ZXMgPSB7XG4gIG1vZGVsOiBkaXJlY3RpdmUsXG4gIHNob3c6IHNob3dcbn07XG5cbi8qICAqL1xuXG52YXIgdHJhbnNpdGlvblByb3BzID0ge1xuICBuYW1lOiBTdHJpbmcsXG4gIGFwcGVhcjogQm9vbGVhbixcbiAgY3NzOiBCb29sZWFuLFxuICBtb2RlOiBTdHJpbmcsXG4gIHR5cGU6IFN0cmluZyxcbiAgZW50ZXJDbGFzczogU3RyaW5nLFxuICBsZWF2ZUNsYXNzOiBTdHJpbmcsXG4gIGVudGVyVG9DbGFzczogU3RyaW5nLFxuICBsZWF2ZVRvQ2xhc3M6IFN0cmluZyxcbiAgZW50ZXJBY3RpdmVDbGFzczogU3RyaW5nLFxuICBsZWF2ZUFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGFwcGVhckNsYXNzOiBTdHJpbmcsXG4gIGFwcGVhckFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGFwcGVhclRvQ2xhc3M6IFN0cmluZyxcbiAgZHVyYXRpb246IFtOdW1iZXIsIFN0cmluZywgT2JqZWN0XVxufTtcblxuLy8gaW4gY2FzZSB0aGUgY2hpbGQgaXMgYWxzbyBhbiBhYnN0cmFjdCBjb21wb25lbnQsIGUuZy4gPGtlZXAtYWxpdmU+XG4vLyB3ZSB3YW50IHRvIHJlY3Vyc2l2ZWx5IHJldHJpZXZlIHRoZSByZWFsIGNvbXBvbmVudCB0byBiZSByZW5kZXJlZFxuZnVuY3Rpb24gZ2V0UmVhbENoaWxkICh2bm9kZSkge1xuICB2YXIgY29tcE9wdGlvbnMgPSB2bm9kZSAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBpZiAoY29tcE9wdGlvbnMgJiYgY29tcE9wdGlvbnMuQ3Rvci5vcHRpb25zLmFic3RyYWN0KSB7XG4gICAgcmV0dXJuIGdldFJlYWxDaGlsZChnZXRGaXJzdENvbXBvbmVudENoaWxkKGNvbXBPcHRpb25zLmNoaWxkcmVuKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0VHJhbnNpdGlvbkRhdGEgKGNvbXApIHtcbiAgdmFyIGRhdGEgPSB7fTtcbiAgdmFyIG9wdGlvbnMgPSBjb21wLiRvcHRpb25zO1xuICAvLyBwcm9wc1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5wcm9wc0RhdGEpIHtcbiAgICBkYXRhW2tleV0gPSBjb21wW2tleV07XG4gIH1cbiAgLy8gZXZlbnRzLlxuICAvLyBleHRyYWN0IGxpc3RlbmVycyBhbmQgcGFzcyB0aGVtIGRpcmVjdGx5IHRvIHRoZSB0cmFuc2l0aW9uIG1ldGhvZHNcbiAgdmFyIGxpc3RlbmVycyA9IG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgZm9yICh2YXIga2V5JDEgaW4gbGlzdGVuZXJzKSB7XG4gICAgZGF0YVtjYW1lbGl6ZShrZXkkMSldID0gbGlzdGVuZXJzW2tleSQxXTtcbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBwbGFjZWhvbGRlciAoaCwgcmF3Q2hpbGQpIHtcbiAgaWYgKC9cXGQta2VlcC1hbGl2ZSQvLnRlc3QocmF3Q2hpbGQudGFnKSkge1xuICAgIHJldHVybiBoKCdrZWVwLWFsaXZlJywge1xuICAgICAgcHJvcHM6IHJhd0NoaWxkLmNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNQYXJlbnRUcmFuc2l0aW9uICh2bm9kZSkge1xuICB3aGlsZSAoKHZub2RlID0gdm5vZGUucGFyZW50KSkge1xuICAgIGlmICh2bm9kZS5kYXRhLnRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzU2FtZUNoaWxkIChjaGlsZCwgb2xkQ2hpbGQpIHtcbiAgcmV0dXJuIG9sZENoaWxkLmtleSA9PT0gY2hpbGQua2V5ICYmIG9sZENoaWxkLnRhZyA9PT0gY2hpbGQudGFnXG59XG5cbnZhciBpc05vdFRleHROb2RlID0gZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudGFnIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKTsgfTtcblxudmFyIGlzVlNob3dEaXJlY3RpdmUgPSBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lID09PSAnc2hvdyc7IH07XG5cbnZhciBUcmFuc2l0aW9uID0ge1xuICBuYW1lOiAndHJhbnNpdGlvbicsXG4gIHByb3BzOiB0cmFuc2l0aW9uUHJvcHMsXG4gIGFic3RyYWN0OiB0cnVlLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0O1xuICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGZpbHRlciBvdXQgdGV4dCBub2RlcyAocG9zc2libGUgd2hpdGVzcGFjZXMpXG4gICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoaXNOb3RUZXh0Tm9kZSk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHdhcm4gbXVsdGlwbGUgZWxlbWVudHNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnPHRyYW5zaXRpb24+IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBzaW5nbGUgZWxlbWVudC4gVXNlICcgK1xuICAgICAgICAnPHRyYW5zaXRpb24tZ3JvdXA+IGZvciBsaXN0cy4nLFxuICAgICAgICB0aGlzLiRwYXJlbnRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIG1vZGUgPSB0aGlzLm1vZGU7XG5cbiAgICAvLyB3YXJuIGludmFsaWQgbW9kZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBtb2RlICYmIG1vZGUgIT09ICdpbi1vdXQnICYmIG1vZGUgIT09ICdvdXQtaW4nXG4gICAgKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnaW52YWxpZCA8dHJhbnNpdGlvbj4gbW9kZTogJyArIG1vZGUsXG4gICAgICAgIHRoaXMuJHBhcmVudFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgcmF3Q2hpbGQgPSBjaGlsZHJlblswXTtcblxuICAgIC8vIGlmIHRoaXMgaXMgYSBjb21wb25lbnQgcm9vdCBub2RlIGFuZCB0aGUgY29tcG9uZW50J3NcbiAgICAvLyBwYXJlbnQgY29udGFpbmVyIG5vZGUgYWxzbyBoYXMgdHJhbnNpdGlvbiwgc2tpcC5cbiAgICBpZiAoaGFzUGFyZW50VHJhbnNpdGlvbih0aGlzLiR2bm9kZSkpIHtcbiAgICAgIHJldHVybiByYXdDaGlsZFxuICAgIH1cblxuICAgIC8vIGFwcGx5IHRyYW5zaXRpb24gZGF0YSB0byBjaGlsZFxuICAgIC8vIHVzZSBnZXRSZWFsQ2hpbGQoKSB0byBpZ25vcmUgYWJzdHJhY3QgY29tcG9uZW50cyBlLmcuIGtlZXAtYWxpdmVcbiAgICB2YXIgY2hpbGQgPSBnZXRSZWFsQ2hpbGQocmF3Q2hpbGQpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgIHJldHVybiByYXdDaGlsZFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9sZWF2aW5nKSB7XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXIoaCwgcmF3Q2hpbGQpXG4gICAgfVxuXG4gICAgLy8gZW5zdXJlIGEga2V5IHRoYXQgaXMgdW5pcXVlIHRvIHRoZSB2bm9kZSB0eXBlIGFuZCB0byB0aGlzIHRyYW5zaXRpb25cbiAgICAvLyBjb21wb25lbnQgaW5zdGFuY2UuIFRoaXMga2V5IHdpbGwgYmUgdXNlZCB0byByZW1vdmUgcGVuZGluZyBsZWF2aW5nIG5vZGVzXG4gICAgLy8gZHVyaW5nIGVudGVyaW5nLlxuICAgIHZhciBpZCA9IFwiX190cmFuc2l0aW9uLVwiICsgKHRoaXMuX3VpZCkgKyBcIi1cIjtcbiAgICBjaGlsZC5rZXkgPSBjaGlsZC5rZXkgPT0gbnVsbFxuICAgICAgPyBjaGlsZC5pc0NvbW1lbnRcbiAgICAgICAgPyBpZCArICdjb21tZW50J1xuICAgICAgICA6IGlkICsgY2hpbGQudGFnXG4gICAgICA6IGlzUHJpbWl0aXZlKGNoaWxkLmtleSlcbiAgICAgICAgPyAoU3RyaW5nKGNoaWxkLmtleSkuaW5kZXhPZihpZCkgPT09IDAgPyBjaGlsZC5rZXkgOiBpZCArIGNoaWxkLmtleSlcbiAgICAgICAgOiBjaGlsZC5rZXk7XG5cbiAgICB2YXIgZGF0YSA9IChjaGlsZC5kYXRhIHx8IChjaGlsZC5kYXRhID0ge30pKS50cmFuc2l0aW9uID0gZXh0cmFjdFRyYW5zaXRpb25EYXRhKHRoaXMpO1xuICAgIHZhciBvbGRSYXdDaGlsZCA9IHRoaXMuX3Zub2RlO1xuICAgIHZhciBvbGRDaGlsZCA9IGdldFJlYWxDaGlsZChvbGRSYXdDaGlsZCk7XG5cbiAgICAvLyBtYXJrIHYtc2hvd1xuICAgIC8vIHNvIHRoYXQgdGhlIHRyYW5zaXRpb24gbW9kdWxlIGNhbiBoYW5kIG92ZXIgdGhlIGNvbnRyb2wgdG8gdGhlIGRpcmVjdGl2ZVxuICAgIGlmIChjaGlsZC5kYXRhLmRpcmVjdGl2ZXMgJiYgY2hpbGQuZGF0YS5kaXJlY3RpdmVzLnNvbWUoaXNWU2hvd0RpcmVjdGl2ZSkpIHtcbiAgICAgIGNoaWxkLmRhdGEuc2hvdyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgb2xkQ2hpbGQgJiZcbiAgICAgIG9sZENoaWxkLmRhdGEgJiZcbiAgICAgICFpc1NhbWVDaGlsZChjaGlsZCwgb2xkQ2hpbGQpICYmXG4gICAgICAhaXNBc3luY1BsYWNlaG9sZGVyKG9sZENoaWxkKSAmJlxuICAgICAgLy8gIzY2ODcgY29tcG9uZW50IHJvb3QgaXMgYSBjb21tZW50IG5vZGVcbiAgICAgICEob2xkQ2hpbGQuY29tcG9uZW50SW5zdGFuY2UgJiYgb2xkQ2hpbGQuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlLmlzQ29tbWVudClcbiAgICApIHtcbiAgICAgIC8vIHJlcGxhY2Ugb2xkIGNoaWxkIHRyYW5zaXRpb24gZGF0YSB3aXRoIGZyZXNoIG9uZVxuICAgICAgLy8gaW1wb3J0YW50IGZvciBkeW5hbWljIHRyYW5zaXRpb25zIVxuICAgICAgdmFyIG9sZERhdGEgPSBvbGRDaGlsZC5kYXRhLnRyYW5zaXRpb24gPSBleHRlbmQoe30sIGRhdGEpO1xuICAgICAgLy8gaGFuZGxlIHRyYW5zaXRpb24gbW9kZVxuICAgICAgaWYgKG1vZGUgPT09ICdvdXQtaW4nKSB7XG4gICAgICAgIC8vIHJldHVybiBwbGFjZWhvbGRlciBub2RlIGFuZCBxdWV1ZSB1cGRhdGUgd2hlbiBsZWF2ZSBmaW5pc2hlc1xuICAgICAgICB0aGlzLl9sZWF2aW5nID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2sob2xkRGF0YSwgJ2FmdGVyTGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcyQxLl9sZWF2aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcyQxLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyKGgsIHJhd0NoaWxkKVxuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnaW4tb3V0Jykge1xuICAgICAgICBpZiAoaXNBc3luY1BsYWNlaG9sZGVyKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiBvbGRSYXdDaGlsZFxuICAgICAgICB9XG4gICAgICAgIHZhciBkZWxheWVkTGVhdmU7XG4gICAgICAgIHZhciBwZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoKSB7IGRlbGF5ZWRMZWF2ZSgpOyB9O1xuICAgICAgICBtZXJnZVZOb2RlSG9vayhkYXRhLCAnYWZ0ZXJFbnRlcicsIHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKGRhdGEsICdlbnRlckNhbmNlbGxlZCcsIHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKG9sZERhdGEsICdkZWxheUxlYXZlJywgZnVuY3Rpb24gKGxlYXZlKSB7IGRlbGF5ZWRMZWF2ZSA9IGxlYXZlOyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmF3Q2hpbGRcbiAgfVxufTtcblxuLyogICovXG5cbnZhciBwcm9wcyA9IGV4dGVuZCh7XG4gIHRhZzogU3RyaW5nLFxuICBtb3ZlQ2xhc3M6IFN0cmluZ1xufSwgdHJhbnNpdGlvblByb3BzKTtcblxuZGVsZXRlIHByb3BzLm1vZGU7XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSB7XG4gIHByb3BzOiBwcm9wcyxcblxuICBiZWZvcmVNb3VudDogZnVuY3Rpb24gYmVmb3JlTW91bnQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICB0aGlzLl91cGRhdGUgPSBmdW5jdGlvbiAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgICAgdmFyIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSA9IHNldEFjdGl2ZUluc3RhbmNlKHRoaXMkMSk7XG4gICAgICAvLyBmb3JjZSByZW1vdmluZyBwYXNzXG4gICAgICB0aGlzJDEuX19wYXRjaF9fKFxuICAgICAgICB0aGlzJDEuX3Zub2RlLFxuICAgICAgICB0aGlzJDEua2VwdCxcbiAgICAgICAgZmFsc2UsIC8vIGh5ZHJhdGluZ1xuICAgICAgICB0cnVlIC8vIHJlbW92ZU9ubHkgKCFpbXBvcnRhbnQsIGF2b2lkcyB1bm5lY2Vzc2FyeSBtb3ZlcylcbiAgICAgICk7XG4gICAgICB0aGlzJDEuX3Zub2RlID0gdGhpcyQxLmtlcHQ7XG4gICAgICByZXN0b3JlQWN0aXZlSW5zdGFuY2UoKTtcbiAgICAgIHVwZGF0ZS5jYWxsKHRoaXMkMSwgdm5vZGUsIGh5ZHJhdGluZyk7XG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0YWcgPSB0aGlzLnRhZyB8fCB0aGlzLiR2bm9kZS5kYXRhLnRhZyB8fCAnc3Bhbic7XG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIHByZXZDaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcbiAgICB2YXIgcmF3Q2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgdHJhbnNpdGlvbkRhdGEgPSBleHRyYWN0VHJhbnNpdGlvbkRhdGEodGhpcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IHJhd0NoaWxkcmVuW2ldO1xuICAgICAgaWYgKGMudGFnKSB7XG4gICAgICAgIGlmIChjLmtleSAhPSBudWxsICYmIFN0cmluZyhjLmtleSkuaW5kZXhPZignX192bGlzdCcpICE9PSAwKSB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChjKTtcbiAgICAgICAgICBtYXBbYy5rZXldID0gY1xuICAgICAgICAgIDsoYy5kYXRhIHx8IChjLmRhdGEgPSB7fSkpLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRGF0YTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdmFyIG9wdHMgPSBjLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgICAgICAgdmFyIG5hbWUgPSBvcHRzID8gKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcgfHwgJycpIDogYy50YWc7XG4gICAgICAgICAgd2FybigoXCI8dHJhbnNpdGlvbi1ncm91cD4gY2hpbGRyZW4gbXVzdCBiZSBrZXllZDogPFwiICsgbmFtZSArIFwiPlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJldkNoaWxkcmVuKSB7XG4gICAgICB2YXIga2VwdCA9IFtdO1xuICAgICAgdmFyIHJlbW92ZWQgPSBbXTtcbiAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IHByZXZDaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgIHZhciBjJDEgPSBwcmV2Q2hpbGRyZW5baSQxXTtcbiAgICAgICAgYyQxLmRhdGEudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xuICAgICAgICBjJDEuZGF0YS5wb3MgPSBjJDEuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAobWFwW2MkMS5rZXldKSB7XG4gICAgICAgICAga2VwdC5wdXNoKGMkMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlZC5wdXNoKGMkMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMua2VwdCA9IGgodGFnLCBudWxsLCBrZXB0KTtcbiAgICAgIHRoaXMucmVtb3ZlZCA9IHJlbW92ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGFnLCBudWxsLCBjaGlsZHJlbilcbiAgfSxcblxuICB1cGRhdGVkOiBmdW5jdGlvbiB1cGRhdGVkICgpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByZXZDaGlsZHJlbjtcbiAgICB2YXIgbW92ZUNsYXNzID0gdGhpcy5tb3ZlQ2xhc3MgfHwgKCh0aGlzLm5hbWUgfHwgJ3YnKSArICctbW92ZScpO1xuICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoIHx8ICF0aGlzLmhhc01vdmUoY2hpbGRyZW5bMF0uZWxtLCBtb3ZlQ2xhc3MpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB3ZSBkaXZpZGUgdGhlIHdvcmsgaW50byB0aHJlZSBsb29wcyB0byBhdm9pZCBtaXhpbmcgRE9NIHJlYWRzIGFuZCB3cml0ZXNcbiAgICAvLyBpbiBlYWNoIGl0ZXJhdGlvbiAtIHdoaWNoIGhlbHBzIHByZXZlbnQgbGF5b3V0IHRocmFzaGluZy5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNhbGxQZW5kaW5nQ2JzKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKHJlY29yZFBvc2l0aW9uKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGFwcGx5VHJhbnNsYXRpb24pO1xuXG4gICAgLy8gZm9yY2UgcmVmbG93IHRvIHB1dCBldmVyeXRoaW5nIGluIHBvc2l0aW9uXG4gICAgLy8gYXNzaWduIHRvIHRoaXMgdG8gYXZvaWQgYmVpbmcgcmVtb3ZlZCBpbiB0cmVlLXNoYWtpbmdcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0aGlzLl9yZWZsb3cgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIGlmIChjLmRhdGEubW92ZWQpIHtcbiAgICAgICAgdmFyIGVsID0gYy5lbG07XG4gICAgICAgIHZhciBzID0gZWwuc3R5bGU7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbW92ZUNsYXNzKTtcbiAgICAgICAgcy50cmFuc2Zvcm0gPSBzLldlYmtpdFRyYW5zZm9ybSA9IHMudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZEV2ZW50LCBlbC5fbW92ZUNiID0gZnVuY3Rpb24gY2IgKGUpIHtcbiAgICAgICAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gZWwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWUgfHwgL3RyYW5zZm9ybSQvLnRlc3QoZS5wcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmRFdmVudCwgY2IpO1xuICAgICAgICAgICAgZWwuX21vdmVDYiA9IG51bGw7XG4gICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIG1vdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFzTW92ZTogZnVuY3Rpb24gaGFzTW92ZSAoZWwsIG1vdmVDbGFzcykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIWhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh0aGlzLl9oYXNNb3ZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNNb3ZlXG4gICAgICB9XG4gICAgICAvLyBEZXRlY3Qgd2hldGhlciBhbiBlbGVtZW50IHdpdGggdGhlIG1vdmUgY2xhc3MgYXBwbGllZCBoYXNcbiAgICAgIC8vIENTUyB0cmFuc2l0aW9ucy4gU2luY2UgdGhlIGVsZW1lbnQgbWF5IGJlIGluc2lkZSBhbiBlbnRlcmluZ1xuICAgICAgLy8gdHJhbnNpdGlvbiBhdCB0aGlzIHZlcnkgbW9tZW50LCB3ZSBtYWtlIGEgY2xvbmUgb2YgaXQgYW5kIHJlbW92ZVxuICAgICAgLy8gYWxsIG90aGVyIHRyYW5zaXRpb24gY2xhc3NlcyBhcHBsaWVkIHRvIGVuc3VyZSBvbmx5IHRoZSBtb3ZlIGNsYXNzXG4gICAgICAvLyBpcyBhcHBsaWVkLlxuICAgICAgdmFyIGNsb25lID0gZWwuY2xvbmVOb2RlKCk7XG4gICAgICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgICAgIGVsLl90cmFuc2l0aW9uQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHsgcmVtb3ZlQ2xhc3MoY2xvbmUsIGNscyk7IH0pO1xuICAgICAgfVxuICAgICAgYWRkQ2xhc3MoY2xvbmUsIG1vdmVDbGFzcyk7XG4gICAgICBjbG9uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy4kZWwuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgdmFyIGluZm8gPSBnZXRUcmFuc2l0aW9uSW5mbyhjbG9uZSk7XG4gICAgICB0aGlzLiRlbC5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICByZXR1cm4gKHRoaXMuX2hhc01vdmUgPSBpbmZvLmhhc1RyYW5zZm9ybSlcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNhbGxQZW5kaW5nQ2JzIChjKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoYy5lbG0uX21vdmVDYikge1xuICAgIGMuZWxtLl9tb3ZlQ2IoKTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGMuZWxtLl9lbnRlckNiKSB7XG4gICAgYy5lbG0uX2VudGVyQ2IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWNvcmRQb3NpdGlvbiAoYykge1xuICBjLmRhdGEubmV3UG9zID0gYy5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5VHJhbnNsYXRpb24gKGMpIHtcbiAgdmFyIG9sZFBvcyA9IGMuZGF0YS5wb3M7XG4gIHZhciBuZXdQb3MgPSBjLmRhdGEubmV3UG9zO1xuICB2YXIgZHggPSBvbGRQb3MubGVmdCAtIG5ld1Bvcy5sZWZ0O1xuICB2YXIgZHkgPSBvbGRQb3MudG9wIC0gbmV3UG9zLnRvcDtcbiAgaWYgKGR4IHx8IGR5KSB7XG4gICAgYy5kYXRhLm1vdmVkID0gdHJ1ZTtcbiAgICB2YXIgcyA9IGMuZWxtLnN0eWxlO1xuICAgIHMudHJhbnNmb3JtID0gcy5XZWJraXRUcmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIGR4ICsgXCJweCxcIiArIGR5ICsgXCJweClcIjtcbiAgICBzLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XG4gIH1cbn1cblxudmFyIHBsYXRmb3JtQ29tcG9uZW50cyA9IHtcbiAgVHJhbnNpdGlvbjogVHJhbnNpdGlvbixcbiAgVHJhbnNpdGlvbkdyb3VwOiBUcmFuc2l0aW9uR3JvdXBcbn07XG5cbi8qICAqL1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHNwZWNpZmljIHV0aWxzXG5WdWUuY29uZmlnLm11c3RVc2VQcm9wID0gbXVzdFVzZVByb3A7XG5WdWUuY29uZmlnLmlzUmVzZXJ2ZWRUYWcgPSBpc1Jlc2VydmVkVGFnO1xuVnVlLmNvbmZpZy5pc1Jlc2VydmVkQXR0ciA9IGlzUmVzZXJ2ZWRBdHRyO1xuVnVlLmNvbmZpZy5nZXRUYWdOYW1lc3BhY2UgPSBnZXRUYWdOYW1lc3BhY2U7XG5WdWUuY29uZmlnLmlzVW5rbm93bkVsZW1lbnQgPSBpc1Vua25vd25FbGVtZW50O1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHJ1bnRpbWUgZGlyZWN0aXZlcyAmIGNvbXBvbmVudHNcbmV4dGVuZChWdWUub3B0aW9ucy5kaXJlY3RpdmVzLCBwbGF0Zm9ybURpcmVjdGl2ZXMpO1xuZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIHBsYXRmb3JtQ29tcG9uZW50cyk7XG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcGF0Y2ggZnVuY3Rpb25cblZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gaW5Ccm93c2VyID8gcGF0Y2ggOiBub29wO1xuXG4vLyBwdWJsaWMgbW91bnQgbWV0aG9kXG5WdWUucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uIChcbiAgZWwsXG4gIGh5ZHJhdGluZ1xuKSB7XG4gIGVsID0gZWwgJiYgaW5Ccm93c2VyID8gcXVlcnkoZWwpIDogdW5kZWZpbmVkO1xuICByZXR1cm4gbW91bnRDb21wb25lbnQodGhpcywgZWwsIGh5ZHJhdGluZylcbn07XG5cbi8vIGRldnRvb2xzIGdsb2JhbCBob29rXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuaWYgKGluQnJvd3Nlcikge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29uZmlnLmRldnRvb2xzKSB7XG4gICAgICBpZiAoZGV2dG9vbHMpIHtcbiAgICAgICAgZGV2dG9vbHMuZW1pdCgnaW5pdCcsIFZ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCdcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlW2NvbnNvbGUuaW5mbyA/ICdpbmZvJyA6ICdsb2cnXShcbiAgICAgICAgICAnRG93bmxvYWQgdGhlIFZ1ZSBEZXZ0b29scyBleHRlbnNpb24gZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IGV4cGVyaWVuY2U6XFxuJyArXG4gICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUtZGV2dG9vbHMnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICBjb25maWcucHJvZHVjdGlvblRpcCAhPT0gZmFsc2UgJiZcbiAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJ1xuICAgICkge1xuICAgICAgY29uc29sZVtjb25zb2xlLmluZm8gPyAnaW5mbycgOiAnbG9nJ10oXG4gICAgICAgIFwiWW91IGFyZSBydW5uaW5nIFZ1ZSBpbiBkZXZlbG9wbWVudCBtb2RlLlxcblwiICtcbiAgICAgICAgXCJNYWtlIHN1cmUgdG8gdHVybiBvbiBwcm9kdWN0aW9uIG1vZGUgd2hlbiBkZXBsb3lpbmcgZm9yIHByb2R1Y3Rpb24uXFxuXCIgK1xuICAgICAgICBcIlNlZSBtb3JlIHRpcHMgYXQgaHR0cHM6Ly92dWVqcy5vcmcvZ3VpZGUvZGVwbG95bWVudC5odG1sXCJcbiAgICAgICk7XG4gICAgfVxuICB9LCAwKTtcbn1cblxuLyogICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZHVndWFuZmVuZy9Eb2N1bWVudHMvdGVzdC9zdG9yZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3YmE1YmQ5MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YmE1YmQ5MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YmE1YmQ5MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YmE1YmQ5MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubXNnKSldKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5uZXcgVnVlKHtcbiAgICBlbDonI2FwcCcsXG4gICAgcmVuZGVyOmggPT4gaChBcHApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=