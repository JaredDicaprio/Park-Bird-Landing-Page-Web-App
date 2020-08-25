module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAACvUlEQVRYCe1Wy0ojURA9mc7omM4MOgg+EAUVdakL9Qt84U7FBz4W+YH4Jz7+IGLEB7oO6A+oi+hOQQVRMKJE0bSS2G3G6klD0lWddIYJbiwIN119+tTpunW7yjM8HEvjE+3bJ8Y2Q38J8BazBY2NCnp6ytHZWYbaWgWVlQrS6TQeH99xe2sgGk3h4CCJqyvDNa3HTRG2tnoxPe1Hd3e5K2ISEQ4ncH6uF8QXFDA25sPsrB+K4ilIlg0wjDRCoQR2dl6y3ex/3i0IBn+hr6+CPeTGQYIDgZ9oaPBiefnJ8RFHAZOTqmPw09M3RCIvODvTcXNjoL5eQUuLF0NDPrS1fc8J1t9fYdbHxoaW47cuxC1obvZiaek3PB6e9lDoGVtbzmkdH1cxN+e3+M2VCjUYjOPigteE+B0IBPxi8M1NLW9wivYXk/u29CLEKRkT0NSkfBwzXu13dwbW1hISB/PRCSB8thEncduNCejt/WHHmNeRyCt0nkERSzjC203iZgLoIyNZNJqU3I4+CS9xMwHV1cxlBonFclPqGDlzQ8JL3CxaVRVzmZSaVlzXlvASN4smHT1SoKr8SGZeVlwkvMTNBMTjcqprangFi5EzTgkvcTMB9/fvIq9UQCIw4+zq4kdZ4mYCjo5SIu/goO+jIYm3mJNwAwO8h0jcTMD+vnzcKKXUH9zY1JQKaQskbibg8lLH8bGcBRIwMuLLq2F01IeJCS6UOInbbmIzogFkYUFuRkRwcpIyv3Q0cFA3rKtTQM/QNrW353ZDwlMzmp+PiwOK2I6pzYbDGmZm5AbS0VEG+rk14nKajtgWWKTr6xr29vj33Lrvdt3dfQVxOZmYAQu8uPiE62v9n0eylZUEtredZweKI9aAJcBaix1KDw+TWF39T0OpJYJWaSwn/8ODUdqxnIKUyhyLsFQB7bxfAv4A7/MHV0+4F8QAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/fonts/fontawesome-5/css/all.css":
/*!****************************************************!*\
  !*** ./src/assets/fonts/fontawesome-5/css/all.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/fa-brands-400-ed2b8bf117160466ba6220a8f1da54a4.ttf";

/***/ }),

/***/ "./src/assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf":
/*!********************************************************************!*\
  !*** ./src/assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/fa-regular-400-59215032a4397507b80e5625dc323de3.ttf";

/***/ }),

/***/ "./src/assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/fa-solid-900-acf50f59802f20d8b45220eaae532a1c.ttf";

/***/ }),

/***/ "./src/assets/fonts/icon-font/css/style.css":
/*!**************************************************!*\
  !*** ./src/assets/fonts/icon-font/css/style.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/fonts/icon-font/fonts/avasta.ttf":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/icon-font/fonts/avasta.ttf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/avasta-40a1087ec0a920895d04f7791f692e5e.ttf";

/***/ }),

/***/ "./src/assets/fonts/typography-font/Circular-Std-Book.ttf":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/typography-font/Circular-Std-Book.ttf ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/Circular-Std-Book-860c3ec7bbc5da3e97233ccecafe512e.ttf";

/***/ }),

/***/ "./src/assets/fonts/typography-font/CircularStd-Black.ttf":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/typography-font/CircularStd-Black.ttf ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/CircularStd-Black-62a02cf999ab28b933be14f4f2109735.ttf";

/***/ }),

/***/ "./src/assets/fonts/typography-font/CircularStd-BlackItalic.ttf":
/*!**********************************************************************!*\
  !*** ./src/assets/fonts/typography-font/CircularStd-BlackItalic.ttf ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/CircularStd-BlackItalic-24799f746654fdca3cf2bcd27672b1d5.ttf";

/***/ }),

/***/ "./src/assets/fonts/typography-font/CircularStd-Bold.ttf":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/typography-font/CircularStd-Bold.ttf ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/CircularStd-Bold-b17d603e5a3130e0f1912c501d117313.ttf";

/***/ }),

/***/ "./src/assets/fonts/typography-font/CircularStd-BoldItalic.ttf":
/*!*********************************************************************!*\
  !*** ./src/assets/fonts/typography-font/CircularStd-BoldItalic.ttf ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/CircularStd-BoldItalic-0e6d9b8b90f594ac632236d11bbda6ee.ttf";

/***/ }),

/***/ "./src/assets/fonts/typography-font/CircularStd-Book.ttf":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/typography-font/CircularStd-Book.ttf ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/CircularStd-Book-130373158ef22bb62b1f486d38c2275d.ttf";

/***/ }),

/***/ "./src/assets/fonts/typography-font/CircularStd-BookItalic.ttf":
/*!*********************************************************************!*\
  !*** ./src/assets/fonts/typography-font/CircularStd-BookItalic.ttf ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/CircularStd-BookItalic-4a1311e9a9290c144a06258c9aadd7bc.ttf";

/***/ }),

/***/ "./src/assets/fonts/typography-font/CircularStd-Medium.ttf":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/typography-font/CircularStd-Medium.ttf ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/CircularStd-Medium-fd8ea5d7c00201fe4f5e38d3667c98f5.ttf";

/***/ }),

/***/ "./src/assets/fonts/typography-font/CircularStd-MediumItalic.ttf":
/*!***********************************************************************!*\
  !*** ./src/assets/fonts/typography-font/CircularStd-MediumItalic.ttf ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/CircularStd-MediumItalic-e80d8785c7112d3823e69e7e4421a083.ttf";

/***/ }),

/***/ "./src/assets/fonts/typography-font/typo.css":
/*!***************************************************!*\
  !*** ./src/assets/fonts/typography-font/typo.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/image/png/l1-logo.png":
/*!******************************************!*\
  !*** ./src/assets/image/png/l1-logo.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAMAAACS9YkQAAAAnFBMVEUAAAAZGRsZGRsZGRoYGBoYGBsYGBoZGRscHB8YGBsYGBoXFxoYGBsYGBoYGBgYGBsZGRoZGRsYGBsVFRcAAAAZGRoYGBoYGBsZGRkYGBoZGRoZGRoZGRoYGBoYGBsZGRsYGBsYGBoZGRsZGRsZGRoXFxoYGBoYGBocHBwYGBsYGBkZGRkXFxgZGRoYGBoXFxsYGBkXFxsWFhYZGRu4XXyrAAAAM3RSTlMAU+y3a/pz9Qbjiy+zgBXTwWUcDwLpq15F3NehmPDQy8aShXpwQIdYCbw1KCGvaUs7Nwu1k14VAAACJ0lEQVQ4y62V2ZaiQAyGA7KJguwgIOJGq7i19f7vNkmKOsw5Y98M/V9QyYl+VflTKLCSZ71dr5ZWBL+hYi2kTPc8nWaJUdt4Ku2LOXY553WWTKP5OkLmmgPQZ8QzpuEORBtmsKM4gadhaM5jGdQLcMJ7kGnAig7LIDMGN177yj3FhmHcMFl0syCzfEA1iPgCqTM1/A0zIZqGR6MFglRRMbQ51guM4yXH9MS9PCErJwCHfMNOx+MZhPtbcr9cxXYPTjCWtLGixxDhUoLSEbM94+zqbvKoa7pFGcQ6xq9bvqEkpJNnWGFcg4TviI6Y/4grpKtBIkFEMMlhi5oJMMHO3lvGnQ4ZJj5/1TGxfla4WjW7weSKyRHXixArqGhKKB3XHl28qDum0Sgeu1mKsStHkYPUO1Wj0OlDw7VZEu4uRl1N6hhVMM6/qIIrW0pvTOMjrJNPOCptrEE+mpa+aXKMo7nMupxxbI3QwxiSF+/ygI+4kM5NDlS5z5i2uO5NwpH7nfTOZQNIZmoPL9lnnI8j1a1TOKckwkRJ6/Gxg8RlHI9zVBvDZxyEIwBNk7wNZU5KFtGDcVgs1Q3dO/ATDo6mbOMIqFs9N9Oa/HqCxoX5lg6pfj7bsrkffZnmnmfh4nuedyU3PO/BiH1Qtm6PkXPqXup9X+C+VdO6vuZ5GvyXcLJlhBgdJ5zAZHVkTLsSqANM17kVgy4O/AbPtXl0naRN17sIw+KfP6o/OR9488ksTf8AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/image/png/logo-white.png":
/*!*********************************************!*\
  !*** ./src/assets/image/png/logo-white.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAXCAMAAACS9YkQAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA/bdrU+yLcwZC07OGgDDBmGcKAvby6BQP5KqhSRn618VvXlru4Nw1KdDNvK6RHcl5Y1E7IHw3I0qP4lIAAAIzSURBVDjLrZXJgqJADIaj7AoCIoKACoiK+9o99f5PNkkKnEPbl8H/QCWG+iBLCbCCzLtsBkNjDp9QthFSE33cnWb0xEuXuCttxZxwOeO1H3SjRRVCZqoJUCfEU7rhvhCxbnpwIjuATFHupj90vRGY/tFN7sCafw3dRGmq8bBT3YoVRfmDTq333aMRAWqHiBVIjSnhb+gLsdsL1EJ1BSmloD9hW7PQjods01UFcGTxK4yYaE5MaORRtohrxffJPaVoNKnB5Ke0oVdEi+GMyxJaFejZjAvTI7P2Hk1RAnGFbX88y5CcG7154q0lboeE77mDdvkrLgO44uIGEGsIJUKPKmxQMi46FtbmwjjrmqAT8VZOdvwj2QqdLToFrgchBpAiYYZCtqjxFQ/tjKm4jvxTf4q2LltRtq2Ytq3Q6KZmbIaEO4p/2i4oY1TGuPmhDegypekTWCkPyjschSqjUbTBLZTRiXGUet8uJS7SqCd+DMGDn+LDW5yPe7ZUgXQVMSbPtnaPcFR9GzkSByvuYG86aQ7Ze1wU4o+G5c/IOVfiJbXGywkCvcFBwTypPIb3OPBfs3gHsEI2Q8KZVPANXRiHwWU7obYJv+GgWAjSogDU01svpl7JE6VyYI3nyHv9febL3bGYS3flOAadUcdxttL1GWG7y1yv0TIt/dGe9xE+N93nenR3HBX+Sxt83zNiNOxwAJ1lU2HyAdX8Ct01zkWjgwmf4Okhd5Zb9xGgdbtZPz5UfwHo8IIlSn5l3AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/components/Core/A.js":
/*!**********************************!*\
  !*** ./src/components/Core/A.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\A.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "A__Paragraph",
  componentId: "sc-1hnqq93-0"
})(["font-size:20px;font-weight:300;letter-spacing:-0.66px;line-height:35px;", ";", ";", ";", ";&:hover,&:active,&.active{", ";text-decoration:none;}"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]);

const A = (_ref) => {
  let {
    href = "#"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href"]);

  return __jsx(Paragraph, _extends({
    href: href,
    color: "secondary"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (A);

/***/ }),

/***/ "./src/components/Core/Badge.js":
/*!**************************************!*\
  !*** ./src/components/Core/Badge.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\Badge.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const BadgeSolid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Badge__BadgeSolid",
  componentId: "y6w7xx-0"
})(["font-size:13px;font-weight:700;letter-spacing:-0.41px;border-radius:5px;padding:4px 12px;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;", ";", ";", ";", ";", ";", ";", ";", ";"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["background"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"]);

const Badge = (_ref) => {
  let {
    color = "light",
    bg = "primary"
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["color", "bg"]);

  return __jsx(BadgeSolid, _extends({
    color: color,
    border: `1px solid`,
    borderColor: bg,
    bg: bg
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./src/components/Core/Box.js":
/*!************************************!*\
  !*** ./src/components/Core/Box.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Box",
  componentId: "xbwvo8-0"
})(["box-sizing:border-box;min-width:0;", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_1__["grid"], styled_system__WEBPACK_IMPORTED_MODULE_1__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_1__["background"], styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["shadow"]);
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./src/components/Core/Button.js":
/*!***************************************!*\
  !*** ./src/components/Core/Button.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ButtonSolid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__ButtonSolid",
  componentId: "l325es-0"
})(["padding:0.85rem 1.75rem;min-width:200px;border-radius:5px;font-size:21px;font-weight:500;letter-spacing:-0.66px;display:inline-flex;align-items:center;justify-content:center;transform:perspective(1px) translateZ(0);position:relative;overflow:hidden;outline:none !important;white-space:nowrap;", ";", ";", ";", ";", ";", ";", ";", ";&:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.1);transform:scaleX(0);transform-origin:100% 50%;transition-property:transform;transition-duration:0.5s;transition-timing-function:ease-out;}&:hover:before,&:focus:before,&:active:before{transform:scaleX(1);transition-timing-function:cubic-bezier(0.52,1.64,0.37,0.66);}"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["background"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"]);
const ButtonOutline = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ButtonSolid).withConfig({
  displayName: "Button__ButtonOutline",
  componentId: "l325es-1"
})(["background:transparent;&:before{background:", ";}&:hover,&:focus,&:active{color:", ";}&:hover:before,&:focus:before,&:active:before{transform:scaleX(1);transition-timing-function:cubic-bezier(0.52,1.64,0.37,0.66);background:", ";}"], ({
  theme,
  color
}) => theme.colors[color], ({
  theme
}) => theme.colors.dark, ({
  theme,
  color
}) => theme.colors[color]);

const Button = (_ref) => {
  let {
    variant = "solid",
    color = "light",
    bg = "primary"
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["variant", "color", "bg"]);

  return variant === "solid" ? __jsx(ButtonSolid, _extends({
    color: color,
    border: `1px solid`,
    borderColor: bg,
    bg: bg
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  })) : __jsx(ButtonOutline, _extends({
    color: color,
    bg: bg,
    border: `1px solid`,
    borderColor: color
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Core/Checkbox.js":
/*!*****************************************!*\
  !*** ./src/components/Core/Checkbox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\Checkbox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const CheckStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "Checkbox__CheckStyled",
  componentId: "u3xf1x-0"
})(["display:inline-flex;cursor:pointer;input:checked ~ .check::before{content:\"\f14a\";font-family:\"Font Awesome 5 free\";font-weight:900;color:", ";}", ";", ";", ";", ";", ";", ";"], ({
  theme
}) => theme.colors.secondary, styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"]);
const Check = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Checkbox__Check",
  componentId: "u3xf1x-1"
})(["position:relative;line-height:1;top:-2px;margin-right:8px;min-height:20px;min-width:20px;&::before{content:\"\f0c8\";font-family:\"Font Awesome 5 free\";font-size:19px;color:#e2e4e8;}"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Checkbox__Text",
  componentId: "u3xf1x-2"
})(["color:", ";font-size:16px;font-weight:300;line-height:1;margin-bottom:0;"], ({
  theme
}) => theme.colors.text);

const Checkbox = (_ref) => {
  let {
    children = "Keep me signed in",
    onClick = () => {}
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "onClick"]);

  const uID = "check_";
  return __jsx(CheckStyled, _extends({}, rest, {
    htmlFor: uID,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }), __jsx("input", {
    className: "d-none",
    type: "checkbox",
    id: uID,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(Check, {
    className: "check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), __jsx(Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./src/components/Core/Input.js":
/*!**************************************!*\
  !*** ./src/components/Core/Input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\Input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InputSolid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Input__InputSolid",
  componentId: "s7vkpe-0"
})(["font-size:18px;font-weight:300;letter-spacing:-0.56px;display:block;padding:1.275rem 1.75rem;background-clip:padding-box;border:", ";border-radius:10px;", ";", ";", ";", ";", ";", ";&:focus,&:active,&.active{border-color:", ";outline:0;box-shadow:none;}"], ({
  theme
}) => `1px solid ${theme.colors.border}`, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], ({
  theme,
  focusColor
}) => theme.colors[focusColor]);
const InputAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Input__InputAnimation",
  componentId: "s7vkpe-1"
})(["position:relative;", ";", ";", ";", ";", ";", ";input{width:100%;padding:1.275rem 1rem;border:", ";background-color:", ";color:", ";font-size:21px;font-weight:300;line-height:1.5;letter-spacing:-0.56px;border-radius:10px;background-clip:padding-box;transition:all 0.3s ease-out;&:focus{border:", ";outline:none;}}input:focus ~ label{top:0px;left:15px;}label{background-color:", ";font-size:18px;font-weight:300;color:", ";top:50%;padding:0 10px;left:15px;border-radius:5px;margin-bottom:0;transform:translateY(-50%);position:absolute;transition:0.4s;pointer-events:none;}"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], ({
  theme
}) => `1px solid ${theme.colors.border}`, ({
  theme
}) => theme.colors.light, ({
  theme
}) => theme.colors.dark, ({
  theme
}) => `1px solid ${theme.colors.secondary}`, ({
  theme
}) => theme.colors.light, ({
  theme
}) => theme.colors.darkShade);

const Input = (_ref) => {
  let {
    variant = "solid",
    type = "text",
    focusColor = "secondary",
    placeholder
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["variant", "type", "focusColor", "placeholder"]);

  return variant === "animation" ? __jsx(InputAnimation, _extends({}, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }), __jsx("input", {
    width: "100%",
    type: type,
    color: "text",
    bg: "light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, placeholder)) : __jsx(InputSolid, _extends({
    width: "100%",
    type: type,
    color: "text",
    bg: "light",
    placeholder: placeholder,
    focusColor: focusColor
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/Core/InputGroup.js":
/*!*******************************************!*\
  !*** ./src/components/Core/InputGroup.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./src/components/Core/Input.js");
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\InputGroup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const InputGroupStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "InputGroup__InputGroupStyled",
  componentId: "sc-1ne89rq-0"
})(["position:relative;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "InputGroup__Icon",
  componentId: "sc-1ne89rq-1"
})(["position:absolute;margin-top:-2px;top:50%;left:27px;font-size:19px;color:", ";transform:translateY(-50%);"], ({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])(theme.colors.dark, 0.4));

const InputGroup = (_ref) => {
  let {
    type = "text",
    focusColor = "secondary",
    icon = __jsx("span", {
      className: "far fa-envelope",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }
    })
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["type", "focusColor", "icon"]);

  return __jsx(InputGroupStyled, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    width: "100%",
    type: type,
    color: "text",
    bg: "light",
    focusColor: focusColor,
    pl: "4.125rem"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  })), __jsx(Icon, {
    className: "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, icon));
};

/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

/***/ }),

/***/ "./src/components/Core/List.js":
/*!*************************************!*\
  !*** ./src/components/Core/List.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "List",
  componentId: "sc-1338946-0"
})(["li{color:", ";font-size:16px;font-weight:500;letter-spacing:-0.5px;line-height:28px;margin-left:20px;margin-bottom:17px;display:flex;&:before{content:\"\";min-width:10px;max-width:10px;min-height:10px;max-height:10px;background-color:", ";display:block;border-radius:500px;margin-right:15px;margin-top:10px;}}"], ({
  theme
}) => theme.colors.text, ({
  theme
}) => theme.colors.dark);
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/components/Core/Section.js":
/*!****************************************!*\
  !*** ./src/components/Core/Section.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box */ "./src/components/Core/Box.js");
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\Section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Section = props => {
  return __jsx(_Box__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    py: [5, null, "80px", 6]
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/components/Core/Select.js":
/*!***************************************!*\
  !*** ./src/components/Core/Select.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\Select.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const defaultOptions = [{
  value: "chocolate",
  label: "Chocolate"
}, {
  value: "strawberry",
  label: "Strawberry"
}, {
  value: "vanilla",
  label: "Vanilla"
}];

const getCustomStyles = theme => {
  return {
    option: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      color: state.isSelected ? theme.colors.secondary : theme.colors.dark,
      backgroundColor: theme.colors.white
    }),
    control: (provided, state) => {
      return _objectSpread(_objectSpread({}, provided), {}, {
        border: state.menuIsOpen || state.isFocused ? `1px solid ${theme.colors.secondary} !important` : `1px solid ${theme.colors.border} !important`,
        borderRadius: 10,
        padding: "1.275rem 1rem",
        outline: "none",
        boxShadow: "none"
      });
    }
  };
};

const SelectStyled = (_ref) => {
  let {
    theme,
    name = "item",
    options = defaultOptions
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["theme", "name", "options"]);

  return __jsx(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    styles: getCustomStyles(theme),
    defaultValue: options[1],
    name: name,
    options: options
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(SelectStyled));

/***/ }),

/***/ "./src/components/Core/Span.js":
/*!*************************************!*\
  !*** ./src/components/Core/Span.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\Span.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const SpanStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Span__SpanStyled",
  componentId: "sc-1998hes-0"
})(["", ";", ";", ";", ";"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]);

const Span = (_ref) => {
  let props = Object.assign({}, _ref);
  return __jsx(SpanStyled, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Span);

/***/ }),

/***/ "./src/components/Core/Switch.js":
/*!***************************************!*\
  !*** ./src/components/Core/Switch.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\Switch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SwitchStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Switch__SwitchStyled",
  componentId: "sc-4bg56w-0"
})(["display:inline-block;cursor:pointer;width:72px;height:33px;border-radius:17px;transition:all 0.3s ease-out;background:", ";position:relative;margin:0 15px;white-space:nowrap;", ";", ";", ";", ";", ";", ";"], ({
  active,
  theme,
  bg
}) => active ? theme.colors[bg] : `#eae9f2`, styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"]);
const Round = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Switch__Round",
  componentId: "sc-4bg56w-1"
})(["width:21px;height:21px;background-color:#ffffff;position:absolute;transition:all 0.3s ease-out;left:", ";margin-left:6px;top:0;margin-top:6px;transition:0.4s;border-radius:500px;pointer-events:none;"], ({
  active
}) => active ? `calc(100% - 33px)` : `0`);

const Switch = (_ref) => {
  let {
    bg = "secondary",
    onClick = () => {}
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["bg", "onClick"]);

  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleSwitch = () => {
    setActive(!active);
    onClick();
  };

  return __jsx(SwitchStyled, _extends({
    bg: bg
  }, rest, {
    onClick: handleSwitch,
    active: active ? 1 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }), __jsx(Round, {
    active: active ? 1 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./src/components/Core/Text.js":
/*!*************************************!*\
  !*** ./src/components/Core/Text.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\Text.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Text__Paragraph",
  componentId: "vn8kw8-0"
})(["margin-bottom:0;font-size:21px;font-weight:300;letter-spacing:-0.66px;line-height:38px;", ";", ";", ";", ";"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]);
const ParagraphSmall = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Paragraph).withConfig({
  displayName: "Text__ParagraphSmall",
  componentId: "vn8kw8-1"
})(["font-size:16px;letter-spacing:-0.5px;line-height:28px;", ";", ";", ";", ";"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]);

const Text = (_ref) => {
  let {
    variant
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant"]);

  let TextRender;

  switch (variant) {
    case "small":
      TextRender = ParagraphSmall;
      break;

    default:
      TextRender = Paragraph;
  }

  return __jsx(TextRender, _extends({
    color: "text"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./src/components/Core/Title.js":
/*!**************************************!*\
  !*** ./src/components/Core/Title.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Core\\Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "Title__SectionTitle",
  componentId: "ny8obq-0"
})(["font-weight:700;letter-spacing:-2.5px;font-size:40px;line-height:54px;margin-bottom:16px;@media ", "{font-size:50px;line-height:62px;}@media ", "{font-size:60px;line-height:70px;margin-bottom:30px;}", ";", ";", ";", ";"], _utils__WEBPACK_IMPORTED_MODULE_3__["device"].sm, _utils__WEBPACK_IMPORTED_MODULE_3__["device"].lg, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]);
const HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(SectionTitle).withConfig({
  displayName: "Title__HeroTitle",
  componentId: "ny8obq-1"
})(["letter-spacing:-2.81px;font-size:50px;line-height:56px;margin-bottom:30px;@media ", "{font-size:66px;line-height:70px;}@media ", "{font-size:76px;line-height:84px;}@media ", "{font-size:80px;line-height:84px;}"], _utils__WEBPACK_IMPORTED_MODULE_3__["device"].sm, _utils__WEBPACK_IMPORTED_MODULE_3__["device"].lg, _utils__WEBPACK_IMPORTED_MODULE_3__["device"].xl);
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "Title__CardTitle",
  componentId: "ny8obq-2"
})(["font-size:21px;font-weight:700;letter-spacing:-0.66px;line-height:28px;", ";", ";", ";", ";"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]);

const Title = (_ref) => {
  let {
    variant
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["variant"]);

  let TitleStyled = SectionTitle;

  switch (variant) {
    case "card":
      TitleStyled = CardTitle;
      break;

    case "hero":
      TitleStyled = HeroTitle;
      break;

    default:
      TitleStyled = SectionTitle;
  }

  return __jsx(TitleStyled, _extends({
    color: "heading"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/components/Core/index.js":
/*!**************************************!*\
  !*** ./src/components/Core/index.js ***!
  \**************************************/
/*! exports provided: Box, Title, Text, A, Badge, Button, Section, Input, Checkbox, InputGroup, Select, Switch, Span, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./src/components/Core/Box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _Box__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title */ "./src/components/Core/Title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _Title__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text */ "./src/components/Core/Text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _A__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./A */ "./src/components/Core/A.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _A__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Badge */ "./src/components/Core/Badge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _Badge__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./src/components/Core/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Section */ "./src/components/Core/Section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Input */ "./src/components/Core/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Checkbox */ "./src/components/Core/Checkbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _InputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InputGroup */ "./src/components/Core/InputGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return _InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Select */ "./src/components/Core/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Select__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Switch */ "./src/components/Core/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Span__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Span */ "./src/components/Core/Span.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return _Span__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./List */ "./src/components/Core/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_13__["default"]; });

















/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core */ "./src/components/Core/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");

var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const TitleStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Core__WEBPACK_IMPORTED_MODULE_3__["Title"]).withConfig({
  displayName: "Footer__TitleStyled",
  componentId: "sc-4re8k5-0"
})(["font-size:16px;font-weight:700;letter-spacing:-0.5px;margin-bottom:22px;"]);
const UlStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "Footer__UlStyled",
  componentId: "sc-4re8k5-1"
})(["margin:0;padding:0;list-style:none;li{line-height:2.25;a{color:", " !important;&:hover{text-decoration:none;color:", " !important;}}}"], ({
  theme,
  color
}) => theme.colors[color], ({
  theme,
  color
}) => theme.colors.secondary);
const CopyRightArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footer__CopyRightArea",
  componentId: "sc-4re8k5-2"
})(["border-top:", ";padding:15px 0;p{color:", ";font-size:13px;font-weight:300;letter-spacing:-0.41px;line-height:38px;margin-bottom:0;}ul{list-style:none;margin:0;padding:0;display:inline-flex;a{color:", " !important;font-size:16px;transition:0.4s;padding:0 3px;margin:0 2.5px;&:visited{text-decoration:none;}&:hover{text-decoration:none;color:", " !important;}}}"], ({
  dark,
  theme
}) => dark ? `1px solid #2f2f31 ` : `1px solid ${theme.colors.border}`, ({
  dark,
  theme
}) => dark ? theme.colors.lightShade : theme.colors.darkShade, ({
  dark,
  theme
}) => dark ? theme.colors.light : theme.colors.dark, ({
  theme,
  color
}) => theme.colors.secondary);

var _StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Core__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "Footer___StyledBox",
  componentId: "sc-4re8k5-3"
})(["padding:80px 0 60px;"]);

const Footer = ({
  isDark = true
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    bg: isDark ? "dark" : "light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_StyledBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "2",
    md: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    white: isDark,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "10",
    md: "8",
    className: "mt-5 mt-lg-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: "6",
    lg: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-5 mb-lg-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx(TitleStyled, {
    variant: "card",
    color: isDark ? "light" : "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  }, "About"), __jsx(UlStyled, {
    color: isDark ? "lightShade" : "darkShade",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 27
    }
  }, "Our mission")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 27
    }
  }, "Our story")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 27
    }
  }, "Team Members"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: "6",
    lg: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-5 mb-lg-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, __jsx(TitleStyled, {
    variant: "card",
    color: isDark ? "light" : "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 23
    }
  }, "Learn"), __jsx(UlStyled, {
    color: isDark ? "lightShade" : "darkShade",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 27
    }
  }, "Tutorials")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 27
    }
  }, "How it works")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 27
    }
  }, "F.A.Q"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: "6",
    lg: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-5 mb-lg-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, __jsx(TitleStyled, {
    variant: "card",
    color: isDark ? "light" : "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 23
    }
  }, "Stories"), __jsx(UlStyled, {
    color: isDark ? "lightShade" : "darkShade",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 27
    }
  }, "Blog")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 27
    }
  }, "Tech stories"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: "6",
    lg: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-lg-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx(TitleStyled, {
    variant: "card",
    color: isDark ? "light" : "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }, "Hire"), __jsx(UlStyled, {
    color: isDark ? "lightShade" : "darkShade",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 27
    }
  }, "Career")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 27
    }
  }, "Freelancers")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 27
    }
  }, "Trainee"))))))))), __jsx(CopyRightArea, {
    dark: isDark ? 1 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "6",
    className: "text-sm-left text-center mb-2 mb-sm-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, "\xA9 2019 UXTheme, All Rights Reserved")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "6",
    className: "text-sm-right text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "social-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon icon-logo-twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 23
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon icon-logo-linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 23
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/#",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "icon icon-logo-facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 23
    }
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @n8tb1t/use-scroll-position */ "@n8tb1t/use-scroll-position");
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _Offcanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Offcanvas */ "./src/components/Offcanvas/index.js");
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Core */ "./src/components/Core/index.js");
/* harmony import */ var _NestedMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NestedMenu */ "./src/components/NestedMenu/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menuItems */ "./src/components/Header/menuItems.js");

var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const SiteHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Header__SiteHeader",
  componentId: "sc-1lpvowq-0"
})(["padding:10px 0 10px 0;position:absolute !important;top:0;right:0;width:100%;z-index:999;@media ", "{position:fixed !important;transition:0.4s;&.scrolling{transform:translateY(-100%);transition:0.4s;}&.reveal-header{transform:translateY(0%);box-shadow:0 12px 34px -11px rgba(65,62,101,0.1);z-index:9999;background:", ";}}"], _utils__WEBPACK_IMPORTED_MODULE_9__["device"].lg, ({
  dark,
  theme
}) => dark ? theme.colors.dark : theme.colors.light);
const ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Header__ToggleButton",
  componentId: "sc-1lpvowq-1"
})(["color:", "!important;border-color:", "!important;"], ({
  dark,
  theme
}) => dark ? theme.colors.lightShade : theme.colors.darkShade, ({
  dark,
  theme
}) => dark ? theme.colors.lightShade : theme.colors.darkShade);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "Header__Menu",
  componentId: "sc-1lpvowq-2"
})(["@media ", "{display:flex;justify-content:flex-end;}.dropdown-toggle{cursor:pointer;}> li{> .nav-link{@media ", "{color:", "!important;font-size:16px;font-weight:500;line-height:24px;padding-top:18px !important;padding-bottom:18px !important;padding-left:18px !important;padding-right:18px !important;}&:hover{color:", " !important;}}}.nav-item.dropdown{@media ", "{position:relative;z-index:99;}&:hover{> .menu-dropdown{@media ", "{top:90%;opacity:1;pointer-events:visible;}}}}"], _utils__WEBPACK_IMPORTED_MODULE_9__["device"].lg, _utils__WEBPACK_IMPORTED_MODULE_9__["device"].lg, ({
  dark,
  theme
}) => dark ? theme.colors.light : theme.colors.darkShade, ({
  theme
}) => theme.colors.primary, _utils__WEBPACK_IMPORTED_MODULE_9__["device"].lg, _utils__WEBPACK_IMPORTED_MODULE_9__["device"].lg);
const MenuDropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "Header__MenuDropdown",
  componentId: "sc-1lpvowq-3"
})(["list-style:none;@media ", "{top:110%;position:absolute;min-width:227px;max-width:227px;box-shadow:0 52px 54px rgba(65,62,101,0.3);border-radius:8px;border:1px solid #e5e5e5;background-color:#ffffff;padding:15px 0px;z-index:99;opacity:0;transition:opacity 0.4s,top 0.4s;pointer-events:none;left:-90%;border-radius:0 0 10px 10px;border:1px solid #eae9f2;background-color:#ffffff;display:block;border-top:", ";}> .drop-menu-item{color:", ";font-size:16px;font-weight:300;letter-spacing:-0.5px;padding-left:30px;padding-right:30px;padding-top:10px;padding-bottom:10px;a{color:", ";transition:all 0.3s ease-out;position:relative;display:flex;align-items:center;&.dropdown-toggle::after{display:inline-block;vertical-align:0.255em;content:\"\";border-top:0.325em solid;border-right:0.325em solid transparent;border-bottom:0;border-left:0.325em solid transparent;position:relative;top:1px;margin-left:auto;transform:rotate(-90deg);transition:0.4s;}}&:hover{> a{color:", ";text-decoration:none;&::after{transform:rotate(0deg);}}}&.dropdown{position:relative;&:hover{> .menu-dropdown{@media ", "{top:10px;opacity:1;pointer-events:visible;transform:translateX(-100%);}}}> .menu-dropdown{border-top-color:", ";@media ", "{top:10px;left:0%;opacity:0;transform:translateX(-110%);transition:0.4s;pointer-events:none;}> .drop-menu-item{@media ", "{padding-left:30px;padding-right:30px;}}}}}&.dropdown-right{left:auto;right:-90%;}"], _utils__WEBPACK_IMPORTED_MODULE_9__["device"].lg, ({
  theme
}) => `3px solid ${theme.colors.secondary}`, ({
  theme
}) => theme.colors.dark, ({
  theme
}) => theme.colors.dark, ({
  theme
}) => theme.colors.secondary, _utils__WEBPACK_IMPORTED_MODULE_9__["device"].lg, ({
  theme
}) => theme.colors.primary, _utils__WEBPACK_IMPORTED_MODULE_9__["device"].lg, _utils__WEBPACK_IMPORTED_MODULE_9__["device"].lg);

var _StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Core__WEBPACK_IMPORTED_MODULE_7__["Button"]).withConfig({
  displayName: "Header___StyledButton",
  componentId: "sc-1lpvowq-4"
})(["font-size:16px !important;min-width:141px !important;height:45px !important;"]);

const Header = ({
  isDark = false
}) => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const {
    0: showScrolling,
    1: setShowScrolling
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showReveal,
    1: setShowReveal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_3__["useScrollPosition"])(({
    prevPos,
    currPos
  }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }

    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });
  return null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(SiteHeader, {
    className: `sticky-header ${showScrolling ? "scrolling" : ""} ${showReveal ? "reveal-header" : ""}`,
    dark: isDark ? 1 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "navbar site-navbar offcanvas-active navbar-expand-lg navbar-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "brand-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    white: isDark,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "navbar-nav ml-lg-auto mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 15
    }
  }, __jsx(Menu, {
    className: "navbar-nav d-none d-lg-flex",
    dark: isDark ? 1 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 17
    }
  }, _menuItems__WEBPACK_IMPORTED_MODULE_11__["menuItems"].map((_ref, index) => {
    let {
      label,
      isExternal = false,
      name,
      items
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["label", "isExternal", "name", "items"]);

    const hasSubItems = Array.isArray(items);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: name + index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 25
      }
    }, hasSubItems ? __jsx("li", _extends({
      className: "nav-item dropdown"
    }, rest, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 29
      }
    }), __jsx("a", {
      className: "nav-link dropdown-toggle",
      role: "button",
      "data-toggle": "dropdown",
      "aria-expanded": "false",
      href: "/#",
      onClick: e => e.preventDefault(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 31
      }
    }, label), __jsx(MenuDropdown, {
      className: "menu-dropdown dropdown-right",
      dark: isDark ? 1 : 0,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 31
      }
    }, items.map((subItem, indexSub) => {
      const hasInnerSubItems = Array.isArray(subItem.items);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        key: subItem.name + indexSub,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 37
        }
      }, hasInnerSubItems ? __jsx("li", {
        className: "drop-menu-item dropdown",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "dropdown-toggle",
        role: "button",
        "data-toggle": "dropdown",
        "aria-expanded": "false",
        href: "/#",
        onClick: e => e.preventDefault(),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 43
        }
      }, subItem.label), __jsx(MenuDropdown, {
        className: "menu-dropdown dropdown-right",
        dark: isDark ? 1 : 0,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 43
        }
      }, subItem.items.map((itemInner, indexInnerMost) => __jsx("li", {
        className: "drop-menu-item",
        key: itemInner.name + indexInnerMost,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 49
        }
      }, itemInner.isExternal ? __jsx("a", {
        href: `${itemInner.name}`,
        target: "_blank",
        rel: "noopener noreferrer",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 53
        }
      }, itemInner.label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/${itemInner.name}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 53
        }
      }, __jsx("a", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 55
        }
      }, itemInner.label)))))) : __jsx("li", {
        className: "drop-menu-item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 41
        }
      }, subItem.isExternal ? __jsx("a", {
        href: `${subItem.name}`,
        target: "_blank",
        rel: "noopener noreferrer",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 45
        }
      }, subItem.label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/${subItem.name}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 45
        }
      }, __jsx("a", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 47
        }
      }, subItem.label))));
    }))) : __jsx("li", _extends({
      className: "nav-item"
    }, rest, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 29
      }
    }), isExternal ? __jsx("a", {
      className: "nav-link",
      href: `${name}`,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 33
      }
    }, label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: `/${name}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "nav-link",
      role: "button",
      "aria-expanded": "false",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 35
      }
    }, label))));
  })))), __jsx("div", {
    className: "header-btns ml-auto ml-lg-0 d-none d-md-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }
  }, __jsx(_StyledButton, {
    size: "sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 15
    }
  }, "Get The App!")), __jsx(ToggleButton, {
    className: `navbar-toggler btn-close-off-canvas ml-3 ${gContext.visibleOffCanvas ? "collapsed" : ""}`,
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#mobile-menu",
    "aria-controls": "mobile-menu",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    onClick: gContext.toggleOffCanvas,
    dark: isDark ? 1 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "icon icon-menu-34 icon-burger d-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 15
    }
  }))))), __jsx(_Offcanvas__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: gContext.visibleOffCanvas,
    onHideOffcanvas: gContext.toggleOffCanvas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 7
    }
  }, __jsx(_NestedMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    menuItems: _menuItems__WEBPACK_IMPORTED_MODULE_11__["menuItems"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Header/menuItems.js":
/*!********************************************!*\
  !*** ./src/components/Header/menuItems.js ***!
  \********************************************/
/*! exports provided: menuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
const menuItems = [{
  name: "demos",
  label: "Demos",
  items: [{
    name: "",
    label: "Landing 01"
  }, {
    name: "landing-2",
    label: "Landing 02"
  }, {
    name: "landing-3",
    label: "Landing 03"
  }, {
    name: "landing-4",
    label: "Landing 04"
  }, {
    name: "landing-5",
    label: "Landing 05"
  }, {
    name: "landing-6",
    label: "Landing 06"
  }, {
    name: "landing-7",
    label: "Landing 07"
  }, {
    name: "landing-8",
    label: "Landing 08"
  }]
}, {
  name: "pages",
  label: "Pages",
  items: [{
    name: "about",
    label: "About"
  }, {
    name: "career",
    label: "Career",
    items: [{
      name: "career",
      label: "Career List"
    }, {
      name: "career-details",
      label: "Career Details"
    }]
  }, {
    name: "case-study",
    label: "Case Study",
    items: [{
      name: "case-study",
      label: "Case Study"
    }, {
      name: "case-study-details",
      label: "Case Study Details"
    }]
  }, {
    name: "blog",
    label: "Blog",
    items: [{
      name: "blog-regular",
      label: "Blog Regular"
    }, {
      name: "blog-left-sidebar",
      label: "Blog Left Sidebar"
    }, {
      name: "blog-right-sidebar",
      label: "Blog Right Sidebar"
    }, {
      name: "blog-details",
      label: "Blog Details"
    }]
  }, {
    name: "contact",
    label: "Contact",
    items: [{
      name: "contact-1",
      label: "Contact 01"
    }, {
      name: "contact-2",
      label: "Contact 02"
    }, {
      name: "contact-3",
      label: "Contact 03"
    }]
  }, {
    name: "account",
    label: "Account",
    items: [{
      name: "signin",
      label: "Signin"
    }, {
      name: "signin-bg",
      label: "Signin BG"
    }, {
      name: "signup",
      label: "Signup"
    }, {
      name: "signup-bg",
      label: "Signup BG"
    }, {
      name: "reset-pass",
      label: "Reset Password"
    }, {
      name: "reset-pass-bg",
      label: "Reset Password BG"
    }]
  }, {
    name: "pricing",
    label: "Pricing",
    items: [{
      name: "pricing-1",
      label: "Pricing 01"
    }, {
      name: "pricing-2",
      label: "Pricing 02"
    }]
  }, {
    name: "utility",
    label: "Utility",
    items: [{
      name: "coming-soon",
      label: "Coming Soon"
    }, {
      name: "coming-soon-2",
      label: "Coming Soon 02"
    }, {
      name: "404",
      label: "404 Page"
    }, {
      name: "thank-you",
      label: "Thank You"
    }, {
      name: "terms-conditions",
      label: "Terms & Conditions"
    }]
  }, {
    name: "essential",
    label: "Essential",
    items: [{
      name: "faq",
      label: "FAQ"
    }, {
      name: "reviews",
      label: "Reviews"
    }]
  }]
}, {
  name: "https://uxtheme.net/product-support/",
  label: "Support",
  isExternal: true
}];

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _ModalVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ModalVideo */ "./src/components/ModalVideo/index.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _utils_globalStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/globalStyle */ "./src/utils/globalStyle.js");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/favicon.png */ "./src/assets/favicon.png");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_favicon_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Layout\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










 // the full theme object


const Loader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__Loader",
  componentId: "sc-1h63nic-0"
})(["position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;z-index:9999999999;opacity:1;visibility:visible;transition:all 1s ease-out 1.5s;&.inActive{opacity:0;visibility:hidden;}"]); // options for different color modes

const modes = {
  light: "light",
  dark: "dark"
}; // merge the color mode with the base theme
// to create a new theme object

const getTheme = mode => Object(lodash__WEBPACK_IMPORTED_MODULE_10__["merge"])({}, _utils__WEBPACK_IMPORTED_MODULE_11__["theme"], {
  colors: Object(lodash__WEBPACK_IMPORTED_MODULE_10__["get"])(_utils__WEBPACK_IMPORTED_MODULE_11__["theme"].colors.modes, mode, _utils__WEBPACK_IMPORTED_MODULE_11__["theme"].colors)
});

const Layout = ({
  children,
  pageContext
}) => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  const {
    0: visibleLoader,
    1: setVisibleLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_3___default.a.init();
    setVisibleLoader(false);
  }, []); // Navbar style based on scroll

  const eleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("popstate", function (event) {
      // The popstate event is fired each time when the current history entry changes.
      gContext.closeAbout();
      gContext.closeContact();
      gContext.closeOffcanvas();
    }, false);
    window.addEventListener("pushState", function (event) {
      // The pushstate event is fired each time when the current history entry changes.
      gContext.closeAbout();
      gContext.closeContact();
      gContext.closeOffcanvas();
    }, false);
  }, [gContext]);

  if (pageContext.layout === "bare") {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    }, __jsx(_utils_globalStyle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }, "Park Bird"), __jsx("link", {
      rel: "icon",
      type: "image/png",
      href: _assets_favicon_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    })), __jsx(Loader, {
      id: "loading",
      className: visibleLoader ? "" : "inActive",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "load-circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "one",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }))), __jsx("div", {
      className: "site-wrapper overflow-hidden",
      ref: eleRef,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, children), __jsx(_ModalVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }
    }));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(_utils_globalStyle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "Park Bird"), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: _assets_favicon_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  })), __jsx(Loader, {
    id: "loading",
    className: visibleLoader ? "" : "inActive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "load-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "site-wrapper overflow-hidden",
    ref: eleRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isDark: gContext.headerDark,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isDark: gContext.footerDark,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  })), __jsx(_ModalVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Layout/bootstrap-custom.scss":
/*!*****************************************************!*\
  !*** ./src/components/Layout/bootstrap-custom.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Logo/Logo.js":
/*!*************************************!*\
  !*** ./src/components/Logo/Logo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_png_l1_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/png/l1-logo.png */ "./src/assets/image/png/l1-logo.png");
/* harmony import */ var _assets_image_png_l1_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_l1_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_png_logo_white_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/png/logo-white.png */ "./src/assets/image/png/logo-white.png");
/* harmony import */ var _assets_image_png_logo_white_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_logo_white_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Logo\\Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Logo = (_ref) => {
  let {
    white,
    height,
    className = ""
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["white", "height", "className"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("a", _extends({
    className: `${className}`
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), white ? __jsx("img", {
    src: _assets_image_png_logo_white_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }) : __jsx("img", {
    src: _assets_image_png_l1_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/Logo/index.js":
/*!**************************************!*\
  !*** ./src/components/Logo/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Logo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ModalVideo/ModalVideo.js":
/*!*************************************************!*\
  !*** ./src/components/ModalVideo/ModalVideo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");

var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\ModalVideo\\ModalVideo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const ModalStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"]).withConfig({
  displayName: "ModalVideo__ModalStyled",
  componentId: "sc-1ytyotc-0"
})([".modal-dialog{width:100vw;height:100vh;max-width:initial;max-height:initial;margin:0;}.modal-content{width:100%;height:100%;border:none;border-radius:0;padding-top:15px;background:rgba(0,0,0,0.75);@media ", "{padding-top:30px;}}"], _utils__WEBPACK_IMPORTED_MODULE_5__["device"].lg);
const DivStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ModalVideo__DivStyled",
  componentId: "sc-1ytyotc-1"
})(["margin:0 auto;width:90%;height:400px;@media ", "{width:70%;height:650px;}opacity:0;visibility:hidden;transition:all 2s ease-out;&.loaded{opacity:1;visibility:visible;}"], _utils__WEBPACK_IMPORTED_MODULE_5__["device"].md);
const CloseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ModalVideo__CloseWrapper",
  componentId: "sc-1ytyotc-2"
})(["cursor:pointer;top:0;right:1rem;position:absolute;height:1.5rem;width:1.5rem;align-items:center;display:inline-flex;justify-content:center;z-index:10;color:#fff;@media ", "{right:2rem;}"], _utils__WEBPACK_IMPORTED_MODULE_5__["device"].md);

var _StyledSvg = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("svg").withConfig({
  displayName: "ModalVideo___StyledSvg",
  componentId: "sc-1ytyotc-3"
})(["fill:currentcolor;vertical-align:middle;height:1rem;width:1rem;"]);

const CloseButton = props => __jsx(CloseWrapper, _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 3
  }
}), __jsx(_StyledSvg, {
  role: "img",
  viewBox: "0 0 24 24",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M9.82 12L0 2.18 2.18 0 12 9.82 21.82 0 24 2.18 14.18 12 24 21.82 21.82 24 12 14.18 2.18 24 0 21.82z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 7
  }
})));

const ModalVideo = props => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

  const handleClose = () => {
    setLoading(true);
    gContext.toggleVideoModal();
  };

  return __jsx(ModalStyled, _extends({}, props, {
    size: "lg",
    centered: true,
    show: gContext.videoModalVisible // onHide={gContext.toggleVideoModal}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Body, {
    className: "text-center position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(CloseButton, {
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: `h-100 d-flex align-items-center w-100`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(DivStyled, {
    className: `${loading ? "loading" : "loaded"}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_2___default.a, {
    url: `https://www.youtube.com/watch?v=zlInYm2JrFw`,
    width: "100%",
    height: "100%",
    controls: true,
    onReady: () => {
      setLoading(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalVideo);

/***/ }),

/***/ "./src/components/ModalVideo/index.js":
/*!********************************************!*\
  !*** ./src/components/ModalVideo/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalVideo */ "./src/components/ModalVideo/ModalVideo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ModalVideo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/NestedMenu/NestedMenu.js":
/*!*************************************************!*\
  !*** ./src/components/NestedMenu/NestedMenu.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");


var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\NestedMenu\\NestedMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const NestedMenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NestedMenu__NestedMenuContainer",
  componentId: "tka6c3-0"
})(["a{color:", ";transition:all 0.3s ease-out;&:hover,&:active{color:", ";text-decoration:none;}}.list-group-item{& + .collapse:not(.show){.list-group-item{border:none !important;border-width:0 !important;}}& + .collapse.show{.list-group-item{&:first-child{border-top:none !important;}}}}.collapse + .list-group-item{border-top-width:0;}"], ({
  theme
}) => theme.colors.text, ({
  theme
}) => theme.colors.primary);
const defaultMenuItems = [{
  name: "home",
  label: "Home"
}, {
  name: "billing",
  label: "Billing",
  items: [{
    name: "statements",
    label: "Statements"
  }, {
    name: "reports",
    label: "Reports"
  }]
}, {
  name: "settings",
  label: "Settings",
  items: [{
    name: "profile",
    label: "Profile"
  }, {
    name: "insurance",
    label: "Insurance"
  }, {
    name: "notifications",
    label: "Notifications",
    items: [{
      name: "email",
      label: "Email"
    }, {
      name: "desktop",
      label: "Desktop",
      items: [{
        name: "schedule",
        label: "Schedule"
      }, {
        name: "frequency",
        label: "Frequency"
      }]
    }, {
      name: "sms",
      label: "SMS"
    }]
  }]
}];

var _StyledListGroupItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item).withConfig({
  displayName: "NestedMenu___StyledListGroupItem",
  componentId: "tka6c3-1"
})(["padding-left:", "px !important;cursor:pointer;"], p => p._css);

var _StyledListGroupItem2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item).withConfig({
  displayName: "NestedMenu___StyledListGroupItem2",
  componentId: "tka6c3-2"
})(["padding-left:", "px !important;"], p => p._css2);

const MenuItem = (_ref) => {
  let {
    label,
    isExternal = false,
    name,
    items,
    depthStep = 20,
    depth = 0
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["label", "isExternal", "name", "items", "depthStep", "depth"]);

  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const hasSubItems = Array.isArray(items);
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, hasSubItems ? __jsx(_StyledListGroupItem, _extends({}, rest, {
    onClick: () => setOpen(!open),
    className: "d-flex align-items-center justify-content-between",
    _css: depth * depthStep,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, label), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, open ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaAngleDown"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaAngleRight"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 43
    }
  }))) : __jsx(_StyledListGroupItem2, _extends({}, rest, {
    _css2: depth * depthStep,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }), isExternal ? __jsx("a", {
    href: `${name}`,
    onClick: () => {
      if (gContext.visibleOffCanvas) {
        gContext.toggleOffCanvas();
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: `/${name}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: () => {
      if (gContext.visibleOffCanvas) {
        gContext.toggleOffCanvas();
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, label))), hasSubItems ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    in: open,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, items.map(subItem => __jsx(MenuItem, _extends({
    key: subItem.name,
    depth: depth + 1,
    depthStep: depthStep
  }, subItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }))))) : null);
};

const NestedMenu = ({
  menuItems = defaultMenuItems
}) => {
  return __jsx(NestedMenuContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
    variant: "flush",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, menuItems.map((menuItem, index) => __jsx(MenuItem, _extends({
    key: `${menuItem.name}${index}`,
    depthStep: 20,
    depth: 0
  }, menuItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NestedMenu);

/***/ }),

/***/ "./src/components/NestedMenu/index.js":
/*!********************************************!*\
  !*** ./src/components/NestedMenu/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NestedMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NestedMenu */ "./src/components/NestedMenu/NestedMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NestedMenu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Offcanvas/Offcanvas.js":
/*!***********************************************!*\
  !*** ./src/components/Offcanvas/Offcanvas.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\components\\Offcanvas\\Offcanvas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Offcanvas__Overlay",
  componentId: "sc-1uehka7-0"
})(["position:fixed;width:100%;top:0;left:0;bottom:0;height:100%;z-index:99999;background:rgba(0,0,0,0.5);opacity:1;visibility:visible;transition:all 0.3s ease-out;&.hidden{opacity:0;visibility:hidden;}"]);
const Drawer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Offcanvas__Drawer",
  componentId: "sc-1uehka7-1"
})(["position:fixed;width:17rem;top:0;right:0;bottom:0;height:100%;z-index:999999;background:#fff;overflow-y:auto;transform:translateX(0);transition:all 0.3s ease-out;&.hidden{transform:translateX(100%);}.dropdown-menu{position:static !important;will-change:initial !important;transform:initial !important;float:none !important;}"]);
const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Offcanvas__LogoContainer",
  componentId: "sc-1uehka7-2"
})(["font-weight:600;font-size:1.25rem;"]);

const Offcanvas = (_ref) => {
  let {
    show,
    onHideOffcanvas,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["show", "onHideOffcanvas", "children"]);

  if (typeof document !== "undefined") {
    if (show) {
      document.querySelector("html").classList.add("has-offcanvas");
      document.body.classList.add("has-offcanvas");
    } else {
      document.querySelector("html").classList.remove("has-offcanvas");
      document.body.classList.remove("has-offcanvas");
    }
  }

  return __jsx("div", _extends({}, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }), __jsx(Overlay, {
    className: show ? "" : "hidden",
    onClick: onHideOffcanvas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx(Drawer, {
    className: show ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(LogoContainer, {
    className: "my-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: onHideOffcanvas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "pt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, children)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Offcanvas);

/***/ }),

/***/ "./src/components/Offcanvas/index.js":
/*!*******************************************!*\
  !*** ./src/components/Offcanvas/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Offcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Offcanvas */ "./src/components/Offcanvas/Offcanvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Offcanvas__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/context/GlobalContext.js":
/*!**************************************!*\
  !*** ./src/context/GlobalContext.js ***!
  \**************************************/
/*! exports provided: default, GlobalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalProvider", function() { return GlobalProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\context\\GlobalContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const GlobalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

const GlobalProvider = ({
  children
}) => {
  const {
    0: themeDark,
    1: setThemeDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: videoModalVisible,
    1: setVideoModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: visibleOffCanvas,
    1: setVisibleOffCanvas
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: headerDark,
    1: setHeaderDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: footerDark,
    1: setFooterDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: cartTotal,
    1: setCartTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3);

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  const goHeaderDark = () => {
    setHeaderDark(true);
  };

  const goHeaderLight = () => {
    setHeaderDark(false);
  };

  const goFooterDark = () => {
    setFooterDark(true);
  };

  const goFooterLight = () => {
    setFooterDark(false);
  };

  const incCartTotal = () => {
    setCartTotal(cartTotal + 1);
  };

  const decCartTotal = () => {
    setCartTotal(cartTotal - 1);
  };

  return __jsx(GlobalContext.Provider, {
    value: {
      themeDark,
      toggleTheme,
      headerDark,
      goHeaderDark,
      goHeaderLight,
      footerDark,
      goFooterDark,
      goFooterLight,
      videoModalVisible,
      toggleVideoModal,
      visibleOffCanvas,
      toggleOffCanvas,
      cartTotal,
      incCartTotal,
      decCartTotal
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (GlobalContext);


/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf */ "./src/assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf");
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_fontawesome_5_webfonts_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf */ "./src/assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf");
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_fontawesome_5_webfonts_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf */ "./src/assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf");
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_fontawesome_5_webfonts_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_fonts_typography_font_Circular_Std_Book_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/fonts/typography-font/Circular-Std-Book.ttf */ "./src/assets/fonts/typography-font/Circular-Std-Book.ttf");
/* harmony import */ var _assets_fonts_typography_font_Circular_Std_Book_ttf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_typography_font_Circular_Std_Book_ttf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_fonts_typography_font_CircularStd_Black_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/fonts/typography-font/CircularStd-Black.ttf */ "./src/assets/fonts/typography-font/CircularStd-Black.ttf");
/* harmony import */ var _assets_fonts_typography_font_CircularStd_Black_ttf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_typography_font_CircularStd_Black_ttf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_fonts_typography_font_CircularStd_BlackItalic_ttf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/fonts/typography-font/CircularStd-BlackItalic.ttf */ "./src/assets/fonts/typography-font/CircularStd-BlackItalic.ttf");
/* harmony import */ var _assets_fonts_typography_font_CircularStd_BlackItalic_ttf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_typography_font_CircularStd_BlackItalic_ttf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_fonts_typography_font_CircularStd_Bold_ttf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/fonts/typography-font/CircularStd-Bold.ttf */ "./src/assets/fonts/typography-font/CircularStd-Bold.ttf");
/* harmony import */ var _assets_fonts_typography_font_CircularStd_Bold_ttf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_typography_font_CircularStd_Bold_ttf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_fonts_typography_font_CircularStd_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/fonts/typography-font/CircularStd-BoldItalic.ttf */ "./src/assets/fonts/typography-font/CircularStd-BoldItalic.ttf");
/* harmony import */ var _assets_fonts_typography_font_CircularStd_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_typography_font_CircularStd_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_fonts_typography_font_CircularStd_Book_ttf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/fonts/typography-font/CircularStd-Book.ttf */ "./src/assets/fonts/typography-font/CircularStd-Book.ttf");
/* harmony import */ var _assets_fonts_typography_font_CircularStd_Book_ttf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_typography_font_CircularStd_Book_ttf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_fonts_typography_font_CircularStd_BookItalic_ttf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/fonts/typography-font/CircularStd-BookItalic.ttf */ "./src/assets/fonts/typography-font/CircularStd-BookItalic.ttf");
/* harmony import */ var _assets_fonts_typography_font_CircularStd_BookItalic_ttf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_typography_font_CircularStd_BookItalic_ttf__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_fonts_typography_font_CircularStd_Medium_ttf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/fonts/typography-font/CircularStd-Medium.ttf */ "./src/assets/fonts/typography-font/CircularStd-Medium.ttf");
/* harmony import */ var _assets_fonts_typography_font_CircularStd_Medium_ttf__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_typography_font_CircularStd_Medium_ttf__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_fonts_typography_font_CircularStd_MediumItalic_ttf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/fonts/typography-font/CircularStd-MediumItalic.ttf */ "./src/assets/fonts/typography-font/CircularStd-MediumItalic.ttf");
/* harmony import */ var _assets_fonts_typography_font_CircularStd_MediumItalic_ttf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_typography_font_CircularStd_MediumItalic_ttf__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_fonts_icon_font_fonts_avasta_ttf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/fonts/icon-font/fonts/avasta.ttf */ "./src/assets/fonts/icon-font/fonts/avasta.ttf");
/* harmony import */ var _assets_fonts_icon_font_fonts_avasta_ttf__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_icon_font_fonts_avasta_ttf__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_fonts_icon_font_css_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/fonts/icon-font/css/style.css */ "./src/assets/fonts/icon-font/css/style.css");
/* harmony import */ var _assets_fonts_icon_font_css_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_icon_font_css_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Layout_bootstrap_custom_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Layout/bootstrap-custom.scss */ "./src/components/Layout/bootstrap-custom.scss");
/* harmony import */ var _components_Layout_bootstrap_custom_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_bootstrap_custom_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../node_modules/slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../node_modules/slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../node_modules/aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_fonts_typography_font_typo_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/fonts/typography-font/typo.css */ "./src/assets/fonts/typography-font/typo.css");
/* harmony import */ var _assets_fonts_typography_font_typo_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_typography_font_typo_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_fonts_fontawesome_5_css_all_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/fonts/fontawesome-5/css/all.css */ "./src/assets/fonts/fontawesome-5/css/all.css");
/* harmony import */ var _assets_fonts_fontawesome_5_css_all_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_fontawesome_5_css_all_css__WEBPACK_IMPORTED_MODULE_22__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import App from 'next/app'
























const MyApp = ({
  Component,
  pageProps,
  router
}) => {
  if (router.pathname.match(/sign|reset|coming/)) {
    return __jsx(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalProvider"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      pageContext: {
        layout: "bare"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }))));
  }

  return __jsx(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageContext: {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/utils/addDays.js":
/*!******************************!*\
  !*** ./src/utils/addDays.js ***!
  \******************************/
/*! exports provided: addDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
const addDays = days => {
  const date = new Date(Date.now());
  date.setDate(date.getDate() + days);
  return date;
};

/***/ }),

/***/ "./src/utils/breakpoints.js":
/*!**********************************!*\
  !*** ./src/utils/breakpoints.js ***!
  \**********************************/
/*! exports provided: breakpoints, device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
const breakpoints = {
  sm: 576,
  //Small screen start
  md: 768,
  //Medium screen start
  lg: 992,
  //Large screen start
  xl: 1200 //Extra Large screen start

};
const device = {
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`
};

/***/ }),

/***/ "./src/utils/globalStyle.js":
/*!**********************************!*\
  !*** ./src/utils/globalStyle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const globalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  body {
    background-color: ${({
  theme
}) => theme.colors.bg} !important;

    color: ${({
  theme
}) => theme.colors.text} !important;
  }

  p, .p{
    color: ${({
  theme
}) => theme.colors.text};
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 30px;
    margin-bottom: 0;
  }

  ul,.ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }


  a {
    color: ${({
  theme
}) => theme.colors.text} !important;
    transition: all 0.3s ease-out;
    &:hover, &:active, &:focus{
      color: ${({
  theme
}) => theme.colors.secondary} !important;
      text-decoration: none!important;
      outline: none !important;
    }
  }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    input[type="number"] {
      -moz-appearance: textfield; /* Firefox */
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (globalStyle);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: device, breakpoints, theme, addDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpoints */ "./src/utils/breakpoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "device", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_0__["device"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_0__["breakpoints"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./src/utils/theme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _addDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays */ "./src/utils/addDays.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return _addDays__WEBPACK_IMPORTED_MODULE_2__["addDays"]; });






/***/ }),

/***/ "./src/utils/theme.js":
/*!****************************!*\
  !*** ./src/utils/theme.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ "./src/utils/breakpoints.js");


const defaultColors = {
  primary: "#f04037",
  secondary: "#5454d4",
  white: "#ffffff",
  dark: "#19191b",
  black: "#000000",
  yellow: "#fedc5a",
  ash: "#413e65",
  green: "#77bf41",
  info: "#0e567c"
};
const colors = {
  primary: defaultColors.primary,
  secondary: defaultColors.secondary,
  light: defaultColors.white,
  lightShade: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.white, 0.75),
  dark: defaultColors.dark,
  darkShade: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.dark, 0.75),
  ash: defaultColors.ash,
  bg: defaultColors.white,
  border: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.ash, 0.115),
  shadow: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.ash, 0.175),
  heading: defaultColors.dark,
  text: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.dark, 0.75),
  warning: defaultColors.yellow,
  success: defaultColors.green,
  info: defaultColors.info,
  modes: {
    dark: {
      primary: defaultColors.primary,
      secondary: defaultColors.secondary,
      light: defaultColors.white,
      lightShade: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.white, 0.75),
      dark: defaultColors.dark,
      darkShade: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.dark, 0.75),
      ash: defaultColors.ash,
      bg: defaultColors.dark,
      border: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.ash, 0.115),
      shadow: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.ash, 0.175),
      heading: defaultColors.white,
      text: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.white, 0.75),
      warning: defaultColors.yellow,
      success: defaultColors.green,
      info: defaultColors.info
    }
  }
};
const theme = {
  initialColorModeName: "light",
  colors: colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: [`${_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].sm}px`, `${_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].md}px`, `${_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].lg}px`, `${_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].xl}px`]
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "@n8tb1t/use-scroll-position":
/*!**********************************************!*\
  !*** external "@n8tb1t/use-scroll-position" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@n8tb1t/use-scroll-position");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtYnJhbmRzLTQwMC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS01L3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtc29saWQtOTAwLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ljb24tZm9udC9mb250cy9hdmFzdGEudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyLVN0ZC1Cb29rLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL3R5cG9ncmFwaHktZm9udC9DaXJjdWxhclN0ZC1CbGFjay50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250cy90eXBvZ3JhcGh5LWZvbnQvQ2lyY3VsYXJTdGQtQmxhY2tJdGFsaWMudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyU3RkLUJvbGQudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyU3RkLUJvbGRJdGFsaWMudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyU3RkLUJvb2sudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyU3RkLUJvb2tJdGFsaWMudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyU3RkLU1lZGl1bS50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250cy90eXBvZ3JhcGh5LWZvbnQvQ2lyY3VsYXJTdGQtTWVkaXVtSXRhbGljLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9sMS1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9sb2dvLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9CYWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9JbnB1dEdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9TcGFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvU3dpdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dvL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9nby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFZpZGVvL01vZGFsVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxWaWRlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXN0ZWRNZW51L05lc3RlZE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmVzdGVkTWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PZmZjYW52YXMvT2ZmY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09mZmNhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9HbG9iYWxDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hZGREYXlzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9icmVha3BvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2xvYmFsU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90aGVtZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbjh0YjF0L3VzZS1zY3JvbGwtcG9zaXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb2xpc2hlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGxheWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsInJlbmRlciIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJ2YWx1ZSIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJwYXRobmFtZSIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJkYXRhIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQYXJhZ3JhcGgiLCJzdHlsZWQiLCJhIiwiY29sb3IiLCJzcGFjZSIsInR5cG9ncmFwaHkiLCJzaGFkb3ciLCJBIiwiQmFkZ2VTb2xpZCIsInNwYW4iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiZmxleGJveCIsImxheW91dCIsIkJhZGdlIiwiYmciLCJyZXN0IiwiQm94IiwiZGl2IiwiZ3JpZCIsInBvc2l0aW9uIiwiQnV0dG9uU29saWQiLCJidXR0b24iLCJCdXR0b25PdXRsaW5lIiwidGhlbWUiLCJjb2xvcnMiLCJkYXJrIiwiQnV0dG9uIiwidmFyaWFudCIsIkNoZWNrU3R5bGVkIiwibGFiZWwiLCJzZWNvbmRhcnkiLCJDaGVjayIsIlRleHQiLCJ0ZXh0IiwiQ2hlY2tib3giLCJ1SUQiLCJJbnB1dFNvbGlkIiwiaW5wdXQiLCJmb2N1c0NvbG9yIiwiSW5wdXRBbmltYXRpb24iLCJsaWdodCIsImRhcmtTaGFkZSIsIklucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiSW5wdXRHcm91cFN0eWxlZCIsIkljb24iLCJyZ2JhIiwiSW5wdXRHcm91cCIsImljb24iLCJMaXN0IiwidWwiLCJTZWN0aW9uIiwiZGVmYXVsdE9wdGlvbnMiLCJnZXRDdXN0b21TdHlsZXMiLCJvcHRpb24iLCJwcm92aWRlZCIsInN0YXRlIiwiaXNTZWxlY3RlZCIsImJhY2tncm91bmRDb2xvciIsIndoaXRlIiwiY29udHJvbCIsIm1lbnVJc09wZW4iLCJpc0ZvY3VzZWQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwib3V0bGluZSIsImJveFNoYWRvdyIsIlNlbGVjdFN0eWxlZCIsIndpdGhUaGVtZSIsIlNwYW5TdHlsZWQiLCJTcGFuIiwiU3dpdGNoU3R5bGVkIiwiYWN0aXZlIiwiUm91bmQiLCJTd2l0Y2giLCJzZXRBY3RpdmUiLCJ1c2VTdGF0ZSIsImhhbmRsZVN3aXRjaCIsIlBhcmFncmFwaFNtYWxsIiwiVGV4dFJlbmRlciIsIlNlY3Rpb25UaXRsZSIsImgyIiwiZGV2aWNlIiwic20iLCJsZyIsIkhlcm9UaXRsZSIsInhsIiwiQ2FyZFRpdGxlIiwiaDQiLCJUaXRsZSIsIlRpdGxlU3R5bGVkIiwiVWxTdHlsZWQiLCJDb3B5UmlnaHRBcmVhIiwibGlnaHRTaGFkZSIsIkZvb3RlciIsImlzRGFyayIsIlNpdGVIZWFkZXIiLCJoZWFkZXIiLCJUb2dnbGVCdXR0b24iLCJNZW51IiwicHJpbWFyeSIsIk1lbnVEcm9wZG93biIsIkhlYWRlciIsImdDb250ZXh0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJzaG93U2Nyb2xsaW5nIiwic2V0U2hvd1Njcm9sbGluZyIsInNob3dSZXZlYWwiLCJzZXRTaG93UmV2ZWFsIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsInkiLCJtZW51SXRlbXMiLCJtYXAiLCJpbmRleCIsImlzRXh0ZXJuYWwiLCJpdGVtcyIsImhhc1N1Ykl0ZW1zIiwiQXJyYXkiLCJpc0FycmF5IiwicHJldmVudERlZmF1bHQiLCJzdWJJdGVtIiwiaW5kZXhTdWIiLCJoYXNJbm5lclN1Ykl0ZW1zIiwiaXRlbUlubmVyIiwiaW5kZXhJbm5lck1vc3QiLCJ2aXNpYmxlT2ZmQ2FudmFzIiwidG9nZ2xlT2ZmQ2FudmFzIiwiTG9hZGVyIiwibW9kZXMiLCJnZXRUaGVtZSIsIm1vZGUiLCJtZXJnZSIsImJhc2VUaGVtZSIsIkxheW91dCIsInBhZ2VDb250ZXh0IiwidmlzaWJsZUxvYWRlciIsInNldFZpc2libGVMb2FkZXIiLCJ1c2VMYXlvdXRFZmZlY3QiLCJBT1MiLCJpbml0IiwiZWxlUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlQWJvdXQiLCJjbG9zZUNvbnRhY3QiLCJjbG9zZU9mZmNhbnZhcyIsInRoZW1lRGFyayIsImltZ0Zhdmljb24iLCJoZWFkZXJEYXJrIiwiZm9vdGVyRGFyayIsIkxvZ28iLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJpbWdMMUxvZ29XaGl0ZSIsImltZ0wxTG9nbyIsIk1vZGFsU3R5bGVkIiwiTW9kYWwiLCJEaXZTdHlsZWQiLCJtZCIsIkNsb3NlV3JhcHBlciIsIkNsb3NlQnV0dG9uIiwiTW9kYWxWaWRlbyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2xvc2UiLCJ0b2dnbGVWaWRlb01vZGFsIiwidmlkZW9Nb2RhbFZpc2libGUiLCJOZXN0ZWRNZW51Q29udGFpbmVyIiwiZGVmYXVsdE1lbnVJdGVtcyIsIk1lbnVJdGVtIiwiZGVwdGhTdGVwIiwiZGVwdGgiLCJvcGVuIiwic2V0T3BlbiIsIk5lc3RlZE1lbnUiLCJtZW51SXRlbSIsIk92ZXJsYXkiLCJEcmF3ZXIiLCJMb2dvQ29udGFpbmVyIiwiT2ZmY2FudmFzIiwic2hvdyIsIm9uSGlkZU9mZmNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwicmVtb3ZlIiwiY3JlYXRlQ29udGV4dCIsIkdsb2JhbFByb3ZpZGVyIiwic2V0VGhlbWVEYXJrIiwic2V0VmlkZW9Nb2RhbFZpc2libGUiLCJzZXRWaXNpYmxlT2ZmQ2FudmFzIiwic2V0SGVhZGVyRGFyayIsInNldEZvb3RlckRhcmsiLCJjYXJ0VG90YWwiLCJzZXRDYXJ0VG90YWwiLCJ0b2dnbGVUaGVtZSIsImdvSGVhZGVyRGFyayIsImdvSGVhZGVyTGlnaHQiLCJnb0Zvb3RlckRhcmsiLCJnb0Zvb3RlckxpZ2h0IiwiaW5jQ2FydFRvdGFsIiwiZGVjQ2FydFRvdGFsIiwiTXlBcHAiLCJtYXRjaCIsImFkZERheXMiLCJkYXlzIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImJyZWFrcG9pbnRzIiwiZ2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsImRlZmF1bHRDb2xvcnMiLCJibGFjayIsInllbGxvdyIsImFzaCIsImdyZWVuIiwiaW5mbyIsImhlYWRpbmciLCJ3YXJuaW5nIiwiaW5pdGlhbENvbG9yTW9kZU5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7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L1ksYUFBTyxFQUFFNlksYUFBYSxDQUFDSSxLQWRuQjtBQWVKQyxVQUFJLEVBQUVMLGFBQWEsQ0FBQ0s7QUFmaEI7QUFERDtBQWpCTSxDQUFmO0FBc0NBLE1BQU0xTSxLQUFLLEdBQUc7QUFDWjZNLHNCQUFvQixFQUFFLE9BRFY7QUFFWjVNLFFBQU0sRUFBRUEsTUFGSTtBQUdackIsT0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsQ0FISztBQUlac04sYUFBVyxFQUFFLENBQ1YsR0FBRUEsd0RBQVcsQ0FBQ3JJLEVBQUcsSUFEUCxFQUVWLEdBQUVxSSx3REFBVyxDQUFDdEQsRUFBRyxJQUZQLEVBR1YsR0FBRXNELHdEQUFXLENBQUNwSSxFQUFHLElBSFAsRUFJVixHQUFFb0ksd0RBQVcsQ0FBQ2xJLEVBQUcsSUFKUDtBQUpELENBQWQ7QUFZZWhFLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBLHdEOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBSUtBREFBUUFBQUFCQUFBQUlBQUFBQUNQVGtESkFBQUN2VWxFUVZSWUNlMVd5MG9qVVJBOW1jN29tTTRNT2dnK0VBVVZkYWtMOVF0ODRVN0ZCejRXK1lINEp6NytJR0xFQjdvTzZBK29pK2hPUVFWUk1LSkUwYlNTMkczRzZrbEQwbFdkZElZSmJpd0lOMTE5K3RUcHVuVzd5ak04SEV2akUrM2JKOFkyUTM4SjhCYXpCWTJOQ25wNnl0SFpXWWJhV2dXVmxRclM2VFFlSDk5eGUyc2dHazNoNENDSnF5dkROYTNIVFJHMnRub3hQZTFIZDNlNUsySVNFUTRuY0g2dUY4UVhGREEyNXNQc3JCK0s0aWxJbGcwd2pEUkNvUVIyZGw2eTNleC8zaTBJQm4raHI2K0NQZVRHUVlJRGdaOW9hUEJpZWZuSjhSRkhBWk9UcW1QdzA5TTNSQ0l2T0R2VGNYTmpvTDVlUVV1TEYwTkRQclMxZmM4SjF0OWZZZGJIeG9hVzQ3Y3V4QzFvYnZaaWFlazNQQjZlOWxEb0dWdGJ6bWtkSDFjeE4rZTMrTTJWQ2pVWWpPUGlndGVFK0IwSUJQeGk4TTFOTFc5d2l2WVhrL3UyOUNMRUtSa1QwTlNrZkJ3elh1MTNkd2JXMWhJU0IvUFJDU0I4dGhFbmNkdU5DZWp0L1dISG1OZVJ5Q3QwbmtFUlN6akMyMDNpWmdMb0l5TlpOSnFVM0k0K0NTOXhNd0hWMWN4bEJvbkZjbFBxR0RselE4SkwzQ3hhVlJWem1aU2FWbHpYbHZBU040c21IVDFTb0tyOFNHWmVWbHdrdk1UTkJNVGpjcXByYW5nRmk1RXpUZ2t2Y1RNQjkvZnZJcTlVUUNJdzQrenE0a2RaNG1ZQ2pvNVNJdS9nb08raklZbTNtSk53QXdPOGgwamNUTUQrdm56Y0tLWFVIOXpZMUpRS2FRc2tiaWJnOGxMSDhiR2NCUkl3TXVMTHEyRjAxSWVKQ1M2VU9JbmJibUl6b2dGa1lVRnVSa1J3Y3BJeXYzUTBjRkEzckt0VFFNL1FOclczNTNaRHdsTXptcCtQaXdPSzJJNnB6WWJER21abTVBYlMwVkVHK3JrMTRuS2FqdGdXV0tUcjZ4cjI5dmozM0xydmR0M2RmUVZ4T1ptWUFRdTh1UGlFNjJ2OW4wZXlsWlVFdHJlZFp3ZUtJOWFBSmNCYWl4MUtEdytUV0YzOVQwT3BKWUpXYVN3bi84T0RVZHF4bklLVXloeUxzRlFCN2J4ZkF2NEE3L01IVjArNEY4UUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvZm9udHMvZmEtYnJhbmRzLTQwMC1lZDJiOGJmMTE3MTYwNDY2YmE2MjIwYThmMWRhNTRhNC50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvZm9udHMvZmEtcmVndWxhci00MDAtNTkyMTUwMzJhNDM5NzUwN2I4MGU1NjI1ZGMzMjNkZTMudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ZvbnRzL2ZhLXNvbGlkLTkwMC1hY2Y1MGY1OTgwMmYyMGQ4YjQ1MjIwZWFhZTUzMmExYy50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvZm9udHMvYXZhc3RhLTQwYTEwODdlYzBhOTIwODk1ZDA0Zjc3OTFmNjkyZTVlLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9mb250cy9DaXJjdWxhci1TdGQtQm9vay04NjBjM2VjN2JiYzVkYTNlOTcyMzNjY2VjYWZlNTEyZS50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvZm9udHMvQ2lyY3VsYXJTdGQtQmxhY2stNjJhMDJjZjk5OWFiMjhiOTMzYmUxNGY0ZjIxMDk3MzUudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ZvbnRzL0NpcmN1bGFyU3RkLUJsYWNrSXRhbGljLTI0Nzk5Zjc0NjY1NGZkY2EzY2YyYmNkMjc2NzJiMWQ1LnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9mb250cy9DaXJjdWxhclN0ZC1Cb2xkLWIxN2Q2MDNlNWEzMTMwZTBmMTkxMmM1MDFkMTE3MzEzLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9mb250cy9DaXJjdWxhclN0ZC1Cb2xkSXRhbGljLTBlNmQ5YjhiOTBmNTk0YWM2MzIyMzZkMTFiYmRhNmVlLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9mb250cy9DaXJjdWxhclN0ZC1Cb29rLTEzMDM3MzE1OGVmMjJiYjYyYjFmNDg2ZDM4YzIyNzVkLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9mb250cy9DaXJjdWxhclN0ZC1Cb29rSXRhbGljLTRhMTMxMWU5YTkyOTBjMTQ0YTA2MjU4YzlhYWRkN2JjLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9mb250cy9DaXJjdWxhclN0ZC1NZWRpdW0tZmQ4ZWE1ZDdjMDAyMDFmZTRmNWUzOGQzNjY3Yzk4ZjUudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ZvbnRzL0NpcmN1bGFyU3RkLU1lZGl1bUl0YWxpYy1lODBkODc4NWM3MTEyZDM4MjNlNjllN2U0NDIxYTA4My50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFNEFBQUFYQ0FNQUFBQ1M5WWtRQUFBQW5GQk1WRVVBQUFBWkdSc1pHUnNaR1JvWUdCb1lHQnNZR0JvWkdSc2NIQjhZR0JzWUdCb1hGeG9ZR0JzWUdCb1lHQmdZR0JzWkdSb1pHUnNZR0JzVkZSY0FBQUFaR1JvWUdCb1lHQnNaR1JrWUdCb1pHUm9aR1JvWkdSb1lHQm9ZR0JzWkdSc1lHQnNZR0JvWkdSc1pHUnNaR1JvWEZ4b1lHQm9ZR0JvY0hCd1lHQnNZR0JrWkdSa1hGeGdaR1JvWUdCb1hGeHNZR0JrWEZ4c1dGaFlaR1J1NFhYeXJBQUFBTTNSU1RsTUFVK3kzYS9wejlRYmppeSt6Z0JYVHdXVWNEd0xwcTE1RjNOZWhtUERReThhU2hYcHdRSWRZQ2J3MUtDR3ZhVXM3Tnd1MWsxNFZBQUFDSjBsRVFWUTR5NjJWMlphaVFBeUdBN0tKZ3V3Z0lPSkdxN2kxOWY3dk5rbUtPc3c1WTk4TS9WOVF5WWwrVmZsVEtMQ1NaNzFkcjVaV0JMK2hZaTJrVFBjOG5XYUpVZHQ0S3UyTE9YWTU1M1dXVEtQNU9rTG1tZ1BRWjhRenB1RU9SQnRtc0tNNGdhZGhhTTVqR2RRTGNNSjdrR25BaWc3TElETUdOMTc3eWozRmhtSGNNRmwwc3lDemZFQTFpUGdDcVRNMS9BMHpJWnFHUjZNRmdsUlJNYlE1MWd1TTR5WEg5TVM5UENFckp3Q0hmTU5PeCtNWmhQdGJjcjljeFhZUFRqQ1d0TEdpeHhEaFVvTFNFYk05NCt6cWJ2S29hN3BGR2NRNnhxOWJ2cUVrcEpObldHRmNnNFR2aUk2WS80Z3JwS3RCSWtGRU1NbGhpNW9KTU1ITzNsdkduUTRaSmo1LzFUR3hmbGE0V2pXN3dlU0t5UkhYaXhBcnFHaEtLQjNYSGwyOHFEdW0wU2dldTFtS3NTdEhrWVBVTzFXajBPbER3N1ZaRXU0dVJsMU42aGhWTU02L3FJSXJXMHB2VE9NanJKTlBPQ3B0ckVFK21wYSthWEtNbzduTXVweHhiSTNRd3hpU0YrL3lnSSs0a001TkRsUzV6NWkydU81TndwSDduZlRPWlFOSVptb1BMOWxubkk4ajFhMVRPS2Nrd2tSSjYvR3hnOFJsSEk5elZCdkRaeHlFSXdCTms3d05aVTVLRnRHRGNWZ3MxUTNkTy9BVERvNm1iT01JcUZzOU45T2EvSHFDeG9YNWxnNnBmajdic3JrZmZabm1ubWZoNG51ZWR5VTNQTy9CaUgxUXRtNlBrWFBxWHVwOVgrQytWZE82dnVaNUd2eVhjTEpsaEJnZEo1ekFaSFZrVExzU3FBTk0xN2tWZ3k0Ty9BYlB0WGwwbmFSTjE3c0l3K0tmUDZvL09SOTQ4OGtzVGY4QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUU0QUFBQVhDQU1BQUFDUzlZa1FBQUFBcTFCTVZFVUFBQUQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL05yNmlaQUFBQU9IUlNUbE1BL2JkclUreUxjd1pDMDdPR2dEREJtR2NLQXZieTZCUVA1S3FoU1JuNjE4VnZYbHJ1NE53MUtkRE52SzZSSGNsNVkxRTdJSHczSTBxUDRsSUFBQUl6U1VSQlZEakxyWlhKZ3FKQURJYWo3QW9DSW9LQUNvaUsrOW85OWY1UE5ra0tuRVBibDhIL1FDV0craUJMQ2JDQ3pMdHNCa05qRHA5UXRoRlNFMzNjbldiMHhFdVh1Q3R0eFp4d09lTzFIM1NqUlJWQ1pxb0pVQ2ZFVTdyaHZoQ3hibnB3SWp1QVRGSHVwajkwdlJHWS90Rk43c0NhZnczZFJHbXE4YkJUM1lvVlJmbURUcTMzM2FNUkFXcUhpQlZJalNuaGIrZ0xzZHNMMUVKMUJTbWxvRDloVzdQUWpvZHMwMVVGY0dUeEs0eVlhRTVNYU9SUnRvaHJ4ZmZKUGFWb05LbkI1S2Uwb1ZkRWkrR015eEphRmVqWmpBdlRJN1AySGsxUkFuR0ZiWDg4eTVDY0c3MTU0cTBsYm9lRTc3bURkdmtyTGdPNDR1SUdFR3NJSlVLUEtteFFNaTQ2RnRibXdqanJtcUFUOFZaT2R2d2oyUXFkTFRvRnJnY2hCcEFpWVlaQ3RxanhGUS90akttNGp2eFRmNHEyTGx0UnRxMll0cTNRNktabWJJYUVPNHAvMmk0b1kxVEd1UG1oRGVneXBla1RXQ2tQeWpzY2hTcWpVYlRCTFpUUmlYR1VldDh1SlM3U3FDZCtETUdEbitMRFc1eVBlN1pVZ1hRVk1TYlB0bmFQY0ZSOUd6a1NCeXZ1WUc4NmFRN1plMXdVNG8rRzVjL0lPVmZpSmJYR3l3a0N2Y0ZCd1R5cFBJYjNPUEJmczNnSHNFSTJROEtaVlBBTlhSaUh3V1U3b2JZSnYrR2dXQWpTb2dEVTAxc3ZwbDdKRTZWeVlJM255SHY5ZmViTDNiR1lTM2ZsT0FhZFVjZHh0dEwxR1dHN3kxeXYwVEl0L2RHZTl4RStOOTNuZW5SM0hCWCtTeHQ4M3pOaU5PeHdBSjFsVTJIeUFkWDhDdDAxemtXamd3bWY0T2toZDVaYjl4R2dkYnRaUHo1VWZ3SG84SUlsU241bDNBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCB0eXBvZ3JhcGh5LCBzaGFkb3cgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjZweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuICAmOmhvdmVyLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgICR7Y29sb3J9O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgQSA9ICh7IGhyZWYgPSBcIiNcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gPFBhcmFncmFwaCBocmVmPXtocmVmfSBjb2xvcj1cInNlY29uZGFyeVwiIHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIGNvbG9yLFxuICBiYWNrZ3JvdW5kLFxuICBzcGFjZSxcbiAgYm9yZGVyLFxuICB0eXBvZ3JhcGh5LFxuICBzaGFkb3csXG4gIGZsZXhib3gsXG4gIGxheW91dCxcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcblxuY29uc3QgQmFkZ2VTb2xpZCA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICR7Y29sb3J9O1xuICAke2JhY2tncm91bmR9O1xuICAke2JvcmRlcn07XG4gICR7c3BhY2V9O1xuICAke3R5cG9ncmFwaHl9O1xuICAke3NoYWRvd307XG4gICR7ZmxleGJveH07XG4gICR7bGF5b3V0fTtcbmA7XG5cbmNvbnN0IEJhZGdlID0gKHsgY29sb3IgPSBcImxpZ2h0XCIsIGJnID0gXCJwcmltYXJ5XCIsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCYWRnZVNvbGlkXG4gICAgICBjb2xvcj17Y29sb3J9XG4gICAgICBib3JkZXI9e2AxcHggc29saWRgfVxuICAgICAgYm9yZGVyQ29sb3I9e2JnfVxuICAgICAgYmc9e2JnfVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhZGdlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIGNvbG9yLFxuICBzcGFjZSxcbiAgbGF5b3V0LFxuICBmbGV4Ym94LFxuICBncmlkLFxuICB0eXBvZ3JhcGh5LFxuICBiYWNrZ3JvdW5kLFxuICBib3JkZXIsXG4gIHBvc2l0aW9uLFxuICBzaGFkb3csXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi13aWR0aDogMDtcbiAgJHtjb2xvcn07XG4gICR7c3BhY2V9O1xuICAke2xheW91dH07XG4gICR7ZmxleGJveH07XG4gICR7Z3JpZH07XG4gICR7dHlwb2dyYXBoeX07XG4gICR7YmFja2dyb3VuZH07XG4gICR7Ym9yZGVyfTtcbiAgJHtwb3NpdGlvbn07XG4gICR7c2hhZG93fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBjb2xvcixcbiAgYmFja2dyb3VuZCxcbiAgc3BhY2UsXG4gIGJvcmRlcixcbiAgdHlwb2dyYXBoeSxcbiAgc2hhZG93LFxuICBmbGV4Ym94LFxuICBsYXlvdXQsXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmNvbnN0IEJ1dHRvblNvbGlkID0gc3R5bGVkLmJ1dHRvbmBcbiAgcGFkZGluZzogMC44NXJlbSAxLjc1cmVtO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAke2NvbG9yfTtcbiAgJHtiYWNrZ3JvdW5kfTtcbiAgJHtib3JkZXJ9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuICAke2ZsZXhib3h9O1xuICAke2xheW91dH07XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgJjpob3ZlcjpiZWZvcmUsXG4gICY6Zm9jdXM6YmVmb3JlLFxuICAmOmFjdGl2ZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41MiwgMS42NCwgMC4zNywgMC42Nik7XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbk91dGxpbmUgPSBzdHlsZWQoQnV0dG9uU29saWQpYFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSwgY29sb3IgfSkgPT4gdGhlbWUuY29sb3JzW2NvbG9yXX07ICovXG4gIC8qIGNvbG9yOiAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PiB0aGVtZS5jb2xvcnNbY29sb3JdfTsgKi9cblxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSwgY29sb3IgfSkgPT4gdGhlbWUuY29sb3JzW2NvbG9yXX07XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmt9O1xuICB9XG4gICY6aG92ZXI6YmVmb3JlLFxuICAmOmZvY3VzOmJlZm9yZSxcbiAgJjphY3RpdmU6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTIsIDEuNjQsIDAuMzcsIDAuNjYpO1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUsIGNvbG9yIH0pID0+IHRoZW1lLmNvbG9yc1tjb2xvcl19O1xuICB9XG5gO1xuXG5jb25zdCBCdXR0b24gPSAoe1xuICB2YXJpYW50ID0gXCJzb2xpZFwiLFxuICBjb2xvciA9IFwibGlnaHRcIixcbiAgYmcgPSBcInByaW1hcnlcIixcbiAgLi4ucmVzdFxufSkgPT4ge1xuICByZXR1cm4gdmFyaWFudCA9PT0gXCJzb2xpZFwiID8gKFxuICAgIDxCdXR0b25Tb2xpZFxuICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgYm9yZGVyPXtgMXB4IHNvbGlkYH1cbiAgICAgIGJvcmRlckNvbG9yPXtiZ31cbiAgICAgIGJnPXtiZ31cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICkgOiAoXG4gICAgPEJ1dHRvbk91dGxpbmVcbiAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgIGJnPXtiZ31cbiAgICAgIGJvcmRlcj17YDFweCBzb2xpZGB9XG4gICAgICBib3JkZXJDb2xvcj17Y29sb3J9XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIHNwYWNlLFxuICBib3JkZXIsXG4gIHR5cG9ncmFwaHksXG4gIHNoYWRvdyxcbiAgZmxleGJveCxcbiAgbGF5b3V0LFxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5jb25zdCBDaGVja1N0eWxlZCA9IHN0eWxlZC5sYWJlbGBcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBpbnB1dDpjaGVja2VkIH4gLmNoZWNrOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMTRhXCI7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gIH1cblxuICAke2JvcmRlcn07XG4gICR7c3BhY2V9O1xuICAke3R5cG9ncmFwaHl9O1xuICAke3NoYWRvd307XG4gICR7ZmxleGJveH07XG4gICR7bGF5b3V0fTtcbmA7XG5cbmNvbnN0IENoZWNrID0gc3R5bGVkLnNwYW5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRvcDogLTJweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjBjOFwiO1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6ICNlMmU0ZTg7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHR9O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuYDtcblxuY29uc3QgQ2hlY2tib3ggPSAoe1xuICBjaGlsZHJlbiA9IFwiS2VlcCBtZSBzaWduZWQgaW5cIixcbiAgb25DbGljayA9ICgpID0+IHt9LFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IHVJRCA9IFwiY2hlY2tfXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tTdHlsZWQgey4uLnJlc3R9IGh0bWxGb3I9e3VJRH0+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZC1ub25lXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9e3VJRH0gLz5cbiAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJjaGVja1wiPjwvQ2hlY2s+XG4gICAgICA8VGV4dD57Y2hpbGRyZW59PC9UZXh0PlxuICAgIDwvQ2hlY2tTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBjb2xvcixcbiAgc3BhY2UsXG4gIHR5cG9ncmFwaHksXG4gIHNoYWRvdyxcbiAgbGF5b3V0LFxuICBib3JkZXIsXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmNvbnN0IElucHV0U29saWQgPSBzdHlsZWQuaW5wdXRgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxLjI3NXJlbSAxLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6ICR7KHsgdGhlbWUgfSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJ9YH07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuICAke2xheW91dH07XG4gICR7Ym9yZGVyfTtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUsIGZvY3VzQ29sb3IgfSkgPT4gdGhlbWUuY29sb3JzW2ZvY3VzQ29sb3JdfTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IElucHV0QW5pbWF0aW9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAke2NvbG9yfTtcbiAgJHtzcGFjZX07XG4gICR7dHlwb2dyYXBoeX07XG4gICR7c2hhZG93fTtcbiAgJHtsYXlvdXR9O1xuICAke2JvcmRlcn07XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxLjI3NXJlbSAxcmVtO1xuICAgIGJvcmRlcjogJHsoeyB0aGVtZSB9KSA9PiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlcn1gfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmt9O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyOiAkeyh7IHRoZW1lIH0pID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fWB9O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMTVweDtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmtTaGFkZX07XG4gICAgdG9wOiA1MCU7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBJbnB1dCA9ICh7XG4gIHZhcmlhbnQgPSBcInNvbGlkXCIsXG4gIHR5cGUgPSBcInRleHRcIixcbiAgZm9jdXNDb2xvciA9IFwic2Vjb25kYXJ5XCIsXG4gIHBsYWNlaG9sZGVyLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIHJldHVybiB2YXJpYW50ID09PSBcImFuaW1hdGlvblwiID8gKFxuICAgIDxJbnB1dEFuaW1hdGlvbiB7Li4ucmVzdH0+XG4gICAgICA8aW5wdXQgd2lkdGg9XCIxMDAlXCIgdHlwZT17dHlwZX0gY29sb3I9XCJ0ZXh0XCIgYmc9XCJsaWdodFwiIC8+XG4gICAgICA8bGFiZWw+e3BsYWNlaG9sZGVyfTwvbGFiZWw+XG4gICAgPC9JbnB1dEFuaW1hdGlvbj5cbiAgKSA6IChcbiAgICA8SW5wdXRTb2xpZFxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgICBjb2xvcj1cInRleHRcIlxuICAgICAgYmc9XCJsaWdodFwiXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICBmb2N1c0NvbG9yPXtmb2N1c0NvbG9yfVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5cbmNvbnN0IElucHV0R3JvdXBTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBJY29uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMjdweDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiByZ2JhKHRoZW1lLmNvbG9ycy5kYXJrLCAwLjQpfTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuYDtcblxuY29uc3QgSW5wdXRHcm91cCA9ICh7XG4gIHR5cGUgPSBcInRleHRcIixcbiAgZm9jdXNDb2xvciA9IFwic2Vjb25kYXJ5XCIsXG4gIGljb24gPSA8c3BhbiBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGVcIiAvPixcbiAgLi4ucmVzdFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxJbnB1dEdyb3VwU3R5bGVkPlxuICAgICAgPElucHV0XG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIGNvbG9yPVwidGV4dFwiXG4gICAgICAgIGJnPVwibGlnaHRcIlxuICAgICAgICBmb2N1c0NvbG9yPXtmb2N1c0NvbG9yfVxuICAgICAgICBwbD1cIjQuMTI1cmVtXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICAgPEljb24gY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPntpY29ufTwvSWNvbj5cbiAgICA8L0lucHV0R3JvdXBTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEdyb3VwO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgbGkge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgbWluLXdpZHRoOiAxMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxMHB4O1xuICAgICAgbWluLWhlaWdodDogMTBweDtcbiAgICAgIG1heC1oZWlnaHQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5cbmNvbnN0IFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxCb3ggcHk9e1s1LCBudWxsLCBcIjgwcHhcIiwgNl19IHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IFtcbiAgeyB2YWx1ZTogXCJjaG9jb2xhdGVcIiwgbGFiZWw6IFwiQ2hvY29sYXRlXCIgfSxcbiAgeyB2YWx1ZTogXCJzdHJhd2JlcnJ5XCIsIGxhYmVsOiBcIlN0cmF3YmVycnlcIiB9LFxuICB7IHZhbHVlOiBcInZhbmlsbGFcIiwgbGFiZWw6IFwiVmFuaWxsYVwiIH0sXG5dO1xuXG5jb25zdCBnZXRDdXN0b21TdHlsZXMgPSAodGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvcHRpb246IChwcm92aWRlZCwgc3RhdGUpID0+ICh7XG4gICAgICAuLi5wcm92aWRlZCxcbiAgICAgIGNvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkID8gdGhlbWUuY29sb3JzLnNlY29uZGFyeSA6IHRoZW1lLmNvbG9ycy5kYXJrLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgfSksXG4gICAgY29udHJvbDogKHByb3ZpZGVkLCBzdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvdmlkZWQsXG4gICAgICAgIGJvcmRlcjogc3RhdGUubWVudUlzT3BlbiB8fCBzdGF0ZS5pc0ZvY3VzZWQgXG4gICAgICAgICAgPyBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeX0gIWltcG9ydGFudGBcbiAgICAgICAgICA6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyfSAhaW1wb3J0YW50YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgcGFkZGluZzogXCIxLjI3NXJlbSAxcmVtXCIsXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgU2VsZWN0U3R5bGVkID0gKHtcbiAgdGhlbWUsXG4gIG5hbWUgPSBcIml0ZW1cIixcbiAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFxuICAgICAgc3R5bGVzPXtnZXRDdXN0b21TdHlsZXModGhlbWUpfVxuICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25zWzFdfVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFNlbGVjdFN0eWxlZCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCB0eXBvZ3JhcGh5LCBzaGFkb3cgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5jb25zdCBTcGFuU3R5bGVkID0gc3R5bGVkLnNwYW5gXG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuYDtcblxuY29uc3QgU3BhbiA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIDxTcGFuU3R5bGVkIHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGFuO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtcbiAgc3BhY2UsXG4gIGJvcmRlcixcbiAgdHlwb2dyYXBoeSxcbiAgc2hhZG93LFxuICBmbGV4Ym94LFxuICBsYXlvdXQsXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmNvbnN0IFN3aXRjaFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZDogJHsoeyBhY3RpdmUsIHRoZW1lLCBiZyB9KSA9PlxuICAgIGFjdGl2ZSA/IHRoZW1lLmNvbG9yc1tiZ10gOiBgI2VhZTlmMmB9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAke2JvcmRlcn07XG4gICR7c3BhY2V9O1xuICAke3R5cG9ncmFwaHl9O1xuICAke3NoYWRvd307XG4gICR7ZmxleGJveH07XG4gICR7bGF5b3V0fTtcbmA7XG5cbmNvbnN0IFJvdW5kID0gc3R5bGVkLnNwYW5gXG4gIHdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIGxlZnQ6ICR7KHsgYWN0aXZlIH0pID0+IChhY3RpdmUgPyBgY2FsYygxMDAlIC0gMzNweClgIDogYDBgKX07XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5gO1xuXG5jb25zdCBTd2l0Y2ggPSAoeyBiZyA9IFwic2Vjb25kYXJ5XCIsIG9uQ2xpY2sgPSAoKSA9PiB7fSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3dpdGNoID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgICBvbkNsaWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoU3R5bGVkXG4gICAgICBiZz17Ymd9XG4gICAgICB7Li4ucmVzdH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVN3aXRjaH1cbiAgICAgIGFjdGl2ZT17YWN0aXZlID8gMSA6IDB9XG4gICAgPlxuICAgICAgPFJvdW5kIGFjdGl2ZT17YWN0aXZlID8gMSA6IDB9IC8+XG4gICAgPC9Td2l0Y2hTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCB0eXBvZ3JhcGh5LCBzaGFkb3cgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQucGBcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjZweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuYDtcblxuY29uc3QgUGFyYWdyYXBoU21hbGwgPSBzdHlsZWQoUGFyYWdyYXBoKWBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgJHtjb2xvcn07XG4gICR7c3BhY2V9O1xuICAke3R5cG9ncmFwaHl9O1xuICAke3NoYWRvd307XG5gO1xuXG5jb25zdCBUZXh0ID0gKHsgdmFyaWFudCwgLi4ucHJvcHMgfSkgPT4ge1xuICBsZXQgVGV4dFJlbmRlcjtcblxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlIFwic21hbGxcIjpcbiAgICAgIFRleHRSZW5kZXIgPSBQYXJhZ3JhcGhTbWFsbDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBUZXh0UmVuZGVyID0gUGFyYWdyYXBoO1xuICB9XG5cbiAgcmV0dXJuIDxUZXh0UmVuZGVyIGNvbG9yPVwidGV4dFwiIHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNvbG9yLCBzcGFjZSwgdHlwb2dyYXBoeSwgc2hhZG93IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5jb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhICR7ZGV2aWNlLnNtfSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xuICB9XG5cbiAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAke2NvbG9yfTtcbiAgJHtzcGFjZX07XG4gICR7dHlwb2dyYXBoeX07XG4gICR7c2hhZG93fTtcbmA7XG5cbmNvbnN0IEhlcm9UaXRsZSA9IHN0eWxlZChTZWN0aW9uVGl0bGUpYFxuICBsZXR0ZXItc3BhY2luZzogLTIuODFweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICBAbWVkaWEgJHtkZXZpY2Uuc219IHtcbiAgICBmb250LXNpemU6IDY2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIH1cblxuICBAbWVkaWEgJHtkZXZpY2UubGd9IHtcbiAgICBmb250LXNpemU6IDc2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDg0cHg7XG4gIH1cblxuICBAbWVkaWEgJHtkZXZpY2UueGx9IHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDg0cHg7XG4gIH1cbmA7XG5cbmNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjZweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuYDtcblxuY29uc3QgVGl0bGUgPSAoeyB2YXJpYW50LCAuLi5yZXN0IH0pID0+IHtcbiAgbGV0IFRpdGxlU3R5bGVkID0gU2VjdGlvblRpdGxlO1xuXG4gIHN3aXRjaCAodmFyaWFudCkge1xuICAgIGNhc2UgXCJjYXJkXCI6XG4gICAgICBUaXRsZVN0eWxlZCA9IENhcmRUaXRsZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoZXJvXCI6XG4gICAgICBUaXRsZVN0eWxlZCA9IEhlcm9UaXRsZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBUaXRsZVN0eWxlZCA9IFNlY3Rpb25UaXRsZTtcbiAgfVxuXG4gIHJldHVybiA8VGl0bGVTdHlsZWQgY29sb3I9XCJoZWFkaW5nXCIgey4uLnJlc3R9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iLCJpbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgQSBmcm9tIFwiLi9BXCI7XG5pbXBvcnQgQmFkZ2UgZnJvbSBcIi4vQmFkZ2VcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9TZWN0aW9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9DaGVja2JveFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcIi4vSW5wdXRHcm91cFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5pbXBvcnQgU3BhbiBmcm9tIFwiLi9TcGFuXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5cbmV4cG9ydCB7XG4gIEJveCxcbiAgVGl0bGUsXG4gIFRleHQsXG4gIEEsXG4gIEJhZGdlLFxuICBCdXR0b24sXG4gIFNlY3Rpb24sXG4gIElucHV0LFxuICBDaGVja2JveCxcbiAgSW5wdXRHcm91cCxcbiAgU2VsZWN0LFxuICBTd2l0Y2gsXG4gIFNwYW4sXG4gIExpc3QsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBUaXRsZSwgQm94IH0gZnJvbSBcIi4uL0NvcmVcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL0xvZ29cIjtcclxuXHJcbmNvbnN0IFRpdGxlU3R5bGVkID0gc3R5bGVkKFRpdGxlKWBcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbmA7XHJcblxyXG5jb25zdCBVbFN0eWxlZCA9IHN0eWxlZC51bGBcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjI1O1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PiB0aGVtZS5jb2xvcnNbY29sb3JdfSAhaW1wb3J0YW50O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUsIGNvbG9yIH0pID0+IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb3B5UmlnaHRBcmVhID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItdG9wOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+XHJcbiAgICBkYXJrID8gYDFweCBzb2xpZCAjMmYyZjMxIGAgOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlcn1gfTtcclxuXHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIHAge1xyXG4gICAgY29sb3I6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT5cclxuICAgICAgZGFyayA/IHRoZW1lLmNvbG9ycy5saWdodFNoYWRlIDogdGhlbWUuY29sb3JzLmRhcmtTaGFkZX07XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT5cclxuICAgICAgICBkYXJrID8gdGhlbWUuY29sb3JzLmxpZ2h0IDogdGhlbWUuY29sb3JzLmRhcmt9ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgcGFkZGluZzogMCAzcHg7XHJcbiAgICAgIG1hcmdpbjogMCAyLjVweDtcclxuICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgaXNEYXJrID0gdHJ1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8IS0tIEZvb3RlciBzZWN0aW9uIC0tPiAqL31cclxuICAgICAgPEJveCBiZz17aXNEYXJrID8gXCJkYXJrXCIgOiBcImxpZ2h0XCJ9PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMCA2MHB4O1xyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8Q29sIGxnPVwiMlwiIG1kPVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgPExvZ28gd2hpdGU9e2lzRGFya30gLz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGxnPVwiMTBcIiBtZD1cIjhcIiBjbGFzc05hbWU9XCJtdC01IG10LWxnLTBcIj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IG1iLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVN0eWxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTdHlsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VWxTdHlsZWQgY29sb3I9e2lzRGFyayA/IFwibGlnaHRTaGFkZVwiIDogXCJkYXJrU2hhZGVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91ciBtaXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdXIgc3RvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlYW0gTWVtYmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVWxTdHlsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNSBtYi1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVTdHlsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aXNEYXJrID8gXCJsaWdodFwiIDogXCJkYXJrXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExlYXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU3R5bGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFVsU3R5bGVkIGNvbG9yPXtpc0RhcmsgPyBcImxpZ2h0U2hhZGVcIiA6IFwiZGFya1NoYWRlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUdXRvcmlhbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvdyBpdCB3b3Jrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRi5BLlFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1VsU3R5bGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgbWItbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpdGxlU3R5bGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2lzRGFyayA/IFwibGlnaHRcIiA6IFwiZGFya1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU3R5bGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFVsU3R5bGVkIGNvbG9yPXtpc0RhcmsgPyBcImxpZ2h0U2hhZGVcIiA6IFwiZGFya1NoYWRlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZWNoIHN0b3JpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1VsU3R5bGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVN0eWxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc0RhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGlyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVN0eWxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxVbFN0eWxlZCBjb2xvcj17aXNEYXJrID8gXCJsaWdodFNoYWRlXCIgOiBcImRhcmtTaGFkZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FyZWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcmVlbGFuY2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhaW5lZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVWxTdHlsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Q29weVJpZ2h0QXJlYSBkYXJrPXtpc0RhcmsgPyAxIDogMH0+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtLWxlZnQgdGV4dC1jZW50ZXIgbWItMiBtYi1zbS0wXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4mY29weTsgMjAxOSBVWFRoZW1lLCBBbGwgUmlnaHRzIFJlc2VydmVkPC9wPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwidGV4dC1zbS1yaWdodCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbG9nby10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxvZ28tbGlua2VkaW5cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbG9nby1mYWNlYm9va1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29weVJpZ2h0QXJlYT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vRm9vdGVyXCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSBcIkBuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBPZmZjYW52YXMgZnJvbSBcIi4uL09mZmNhbnZhc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vQ29yZVwiO1xyXG5pbXBvcnQgTmVzdGVkTWVudSBmcm9tIFwiLi4vTmVzdGVkTWVudVwiO1xyXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL0xvZ29cIjtcclxuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSBcIi4vbWVudUl0ZW1zXCI7XHJcblxyXG5jb25zdCBTaXRlSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAmLnNjcm9sbGluZyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgICAmLnJldmVhbC1oZWFkZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDEycHggMzRweCAtMTFweCByZ2JhKDY1LCA2MiwgMTAxLCAwLjEpO1xyXG4gICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+XHJcbiAgICAgICAgZGFyayA/IHRoZW1lLmNvbG9ycy5kYXJrIDogdGhlbWUuY29sb3JzLmxpZ2h0fTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUb2dnbGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGNvbG9yOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+XHJcbiAgICBkYXJrID8gdGhlbWUuY29sb3JzLmxpZ2h0U2hhZGUgOiB0aGVtZS5jb2xvcnMuZGFya1NoYWRlfSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+XHJcbiAgICBkYXJrID8gdGhlbWUuY29sb3JzLmxpZ2h0U2hhZGUgOiB0aGVtZS5jb2xvcnMuZGFya1NoYWRlfSFpbXBvcnRhbnQ7XHJcbmA7XHJcblxyXG5jb25zdCBNZW51ID0gc3R5bGVkLnVsYFxyXG4gIEBtZWRpYSAke2RldmljZS5sZ30ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICA+IGxpIHtcclxuICAgID4gLm5hdi1saW5rIHtcclxuICAgICAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XHJcbiAgICAgICAgY29sb3I6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT5cclxuICAgICAgICAgIGRhcmsgPyB0aGVtZS5jb2xvcnMubGlnaHQgOiB0aGVtZS5jb2xvcnMuZGFya1NoYWRlfSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX0gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubmF2LWl0ZW0uZHJvcGRvd24ge1xyXG4gICAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgPiAubWVudS1kcm9wZG93biB7XHJcbiAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XHJcbiAgICAgICAgICB0b3A6IDkwJTtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNZW51RHJvcGRvd24gPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBAbWVkaWEgJHtkZXZpY2UubGd9IHtcclxuICAgIHRvcDogMTEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1pbi13aWR0aDogMjI3cHg7XHJcbiAgICBtYXgtd2lkdGg6IDIyN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1MnB4IDU0cHggcmdiYSg2NSwgNjIsIDEwMSwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMsIHRvcCAwLjRzO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBsZWZ0OiAtOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWU5ZjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItdG9wOiAkeyh7IHRoZW1lIH0pID0+IGAzcHggc29saWQgJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fWB9O1xyXG4gIH1cclxuICA+IC5kcm9wLW1lbnUtaXRlbSB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya307XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya307XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICYuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiAwLjI1NWVtO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMC4zMjVlbSBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDAuMzI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICBib3JkZXItbGVmdDogMC4zMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgID4gYSB7XHJcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5kcm9wZG93biB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgID4gLm1lbnUtZHJvcGRvd24ge1xyXG4gICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgID4gLm1lbnUtZHJvcGRvd24ge1xyXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgICAgIEBtZWRpYSAke2RldmljZS5sZ30ge1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMTAlKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiAuZHJvcC1tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJi5kcm9wZG93bi1yaWdodCB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IC05MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgaXNEYXJrID0gZmFsc2UgfSkgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBbc2hvd1Njcm9sbGluZywgc2V0U2hvd1Njcm9sbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dSZXZlYWwsIHNldFNob3dSZXZlYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VTY3JvbGxQb3NpdGlvbigoeyBwcmV2UG9zLCBjdXJyUG9zIH0pID0+IHtcclxuICAgIGlmIChjdXJyUG9zLnkgPCAwKSB7XHJcbiAgICAgIHNldFNob3dTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93U2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyUG9zLnkgPCAtMzAwKSB7XHJcbiAgICAgIHNldFNob3dSZXZlYWwodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93UmV2ZWFsKGZhbHNlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2l0ZUhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT17YHN0aWNreS1oZWFkZXIgJHtzaG93U2Nyb2xsaW5nID8gXCJzY3JvbGxpbmdcIiA6IFwiXCJ9ICR7XHJcbiAgICAgICAgICBzaG93UmV2ZWFsID8gXCJyZXZlYWwtaGVhZGVyXCIgOiBcIlwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgICAgZGFyaz17aXNEYXJrID8gMSA6IDB9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc2l0ZS1uYXZiYXIgb2ZmY2FudmFzLWFjdGl2ZSBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodFwiPlxyXG4gICAgICAgICAgICB7LyogPCEtLSBCcmFuZCBMb2dvLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5cclxuICAgICAgICAgICAgICA8TG9nbyB3aGl0ZT17aXNEYXJrfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtbGctYXV0byBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItbmF2IGQtbm9uZSBkLWxnLWZsZXhcIlxyXG4gICAgICAgICAgICAgICAgICBkYXJrPXtpc0RhcmsgPyAxIDogMH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbCwgaXNFeHRlcm5hbCA9IGZhbHNlLCBuYW1lLCBpdGVtcywgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc1N1Ykl0ZW1zID0gQXJyYXkuaXNBcnJheShpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtuYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNTdWJJdGVtcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiIHsuLi5yZXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWRyb3Bkb3duIGRyb3Bkb3duLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPXtpc0RhcmsgPyAxIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHN1Ykl0ZW0sIGluZGV4U3ViKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNJbm5lclN1Ykl0ZW1zID0gQXJyYXkuaXNBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViSXRlbS5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViSXRlbS5uYW1lICsgaW5kZXhTdWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzSW5uZXJTdWJJdGVtcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudURyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1kcm9wZG93biBkcm9wZG93bi1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz17aXNEYXJrID8gMSA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5pdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbUlubmVyLCBpbmRleElubmVyTW9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Jbm5lci5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4SW5uZXJNb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1Jbm5lci5pc0V4dGVybmFsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7aXRlbUlubmVyLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtSW5uZXIubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtpdGVtSW5uZXIubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbUlubmVyLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudURyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3AtbWVudS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLmlzRXh0ZXJuYWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake3N1Ykl0ZW0ubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7c3ViSXRlbS5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3N1Ykl0ZW0ubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudURyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgey4uLnJlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNFeHRlcm5hbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idG5zIG1sLWF1dG8gbWwtbGctMCBkLW5vbmUgZC1tZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICBjc3M9e2BcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTQxcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEdldCBUaGUgQXBwIVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci10b2dnbGVyIGJ0bi1jbG9zZS1vZmYtY2FudmFzIG1sLTMgJHtcclxuICAgICAgICAgICAgICAgIGdDb250ZXh0LnZpc2libGVPZmZDYW52YXMgPyBcImNvbGxhcHNlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vYmlsZS1tZW51XCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtnQ29udGV4dC50b2dnbGVPZmZDYW52YXN9XHJcbiAgICAgICAgICAgICAgZGFyaz17aXNEYXJrID8gMSA6IDB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNpbXBsZS1yZW1vdmUgaWNvbi1jbG9zZVwiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtMzQgaWNvbi1idXJnZXIgZC1ibG9ja1wiPjwvaT5cclxuICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TaXRlSGVhZGVyPlxyXG4gICAgICA8T2ZmY2FudmFzXHJcbiAgICAgICAgc2hvdz17Z0NvbnRleHQudmlzaWJsZU9mZkNhbnZhc31cclxuICAgICAgICBvbkhpZGVPZmZjYW52YXM9e2dDb250ZXh0LnRvZ2dsZU9mZkNhbnZhc31cclxuICAgICAgPlxyXG4gICAgICAgIDxOZXN0ZWRNZW51IG1lbnVJdGVtcz17bWVudUl0ZW1zfSAvPlxyXG4gICAgICA8L09mZmNhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0hlYWRlcidcclxuIiwiZXhwb3J0IGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcImRlbW9zXCIsXHJcbiAgICBsYWJlbDogXCJEZW1vc1wiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyBuYW1lOiBcIlwiLCBsYWJlbDogXCJMYW5kaW5nIDAxXCIgfSxcclxuICAgICAgeyBuYW1lOiBcImxhbmRpbmctMlwiLCBsYWJlbDogXCJMYW5kaW5nIDAyXCIgfSxcclxuICAgICAgeyBuYW1lOiBcImxhbmRpbmctM1wiLCBsYWJlbDogXCJMYW5kaW5nIDAzXCIgfSxcclxuICAgICAgeyBuYW1lOiBcImxhbmRpbmctNFwiLCBsYWJlbDogXCJMYW5kaW5nIDA0XCIgfSxcclxuICAgICAgeyBuYW1lOiBcImxhbmRpbmctNVwiLCBsYWJlbDogXCJMYW5kaW5nIDA1XCIgfSxcclxuICAgICAgeyBuYW1lOiBcImxhbmRpbmctNlwiLCBsYWJlbDogXCJMYW5kaW5nIDA2XCIgfSxcclxuICAgICAgeyBuYW1lOiBcImxhbmRpbmctN1wiLCBsYWJlbDogXCJMYW5kaW5nIDA3XCIgfSxcclxuICAgICAgeyBuYW1lOiBcImxhbmRpbmctOFwiLCBsYWJlbDogXCJMYW5kaW5nIDA4XCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInBhZ2VzXCIsXHJcbiAgICBsYWJlbDogXCJQYWdlc1wiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyBuYW1lOiBcImFib3V0XCIsIGxhYmVsOiBcIkFib3V0XCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiY2FyZWVyXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiQ2FyZWVyXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJjYXJlZXJcIiwgbGFiZWw6IFwiQ2FyZWVyIExpc3RcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImNhcmVlci1kZXRhaWxzXCIsIGxhYmVsOiBcIkNhcmVlciBEZXRhaWxzXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJjYXNlLXN0dWR5XCIsXHJcbiAgICAgICAgbGFiZWw6IFwiQ2FzZSBTdHVkeVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwiY2FzZS1zdHVkeVwiLCBsYWJlbDogXCJDYXNlIFN0dWR5XCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJjYXNlLXN0dWR5LWRldGFpbHNcIiwgbGFiZWw6IFwiQ2FzZSBTdHVkeSBEZXRhaWxzXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJibG9nXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiQmxvZ1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwiYmxvZy1yZWd1bGFyXCIsIGxhYmVsOiBcIkJsb2cgUmVndWxhclwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiYmxvZy1sZWZ0LXNpZGViYXJcIiwgbGFiZWw6IFwiQmxvZyBMZWZ0IFNpZGViYXJcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImJsb2ctcmlnaHQtc2lkZWJhclwiLCBsYWJlbDogXCJCbG9nIFJpZ2h0IFNpZGViYXJcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImJsb2ctZGV0YWlsc1wiLCBsYWJlbDogXCJCbG9nIERldGFpbHNcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImNvbnRhY3RcIixcclxuICAgICAgICBsYWJlbDogXCJDb250YWN0XCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJjb250YWN0LTFcIiwgbGFiZWw6IFwiQ29udGFjdCAwMVwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiY29udGFjdC0yXCIsIGxhYmVsOiBcIkNvbnRhY3QgMDJcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImNvbnRhY3QtM1wiLCBsYWJlbDogXCJDb250YWN0IDAzXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgbGFiZWw6IFwiQWNjb3VudFwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2lnbmluXCIsIGxhYmVsOiBcIlNpZ25pblwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2lnbmluLWJnXCIsIGxhYmVsOiBcIlNpZ25pbiBCR1wiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2lnbnVwXCIsIGxhYmVsOiBcIlNpZ251cFwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2lnbnVwLWJnXCIsIGxhYmVsOiBcIlNpZ251cCBCR1wiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwicmVzZXQtcGFzc1wiLCBsYWJlbDogXCJSZXNldCBQYXNzd29yZFwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwicmVzZXQtcGFzcy1iZ1wiLCBsYWJlbDogXCJSZXNldCBQYXNzd29yZCBCR1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwicHJpY2luZ1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIlByaWNpbmdcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcInByaWNpbmctMVwiLCBsYWJlbDogXCJQcmljaW5nIDAxXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJwcmljaW5nLTJcIiwgbGFiZWw6IFwiUHJpY2luZyAwMlwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwidXRpbGl0eVwiLFxyXG4gICAgICAgIGxhYmVsOiBcIlV0aWxpdHlcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcImNvbWluZy1zb29uXCIsIGxhYmVsOiBcIkNvbWluZyBTb29uXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJjb21pbmctc29vbi0yXCIsIGxhYmVsOiBcIkNvbWluZyBTb29uIDAyXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCI0MDRcIiwgbGFiZWw6IFwiNDA0IFBhZ2VcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInRoYW5rLXlvdVwiLCBsYWJlbDogXCJUaGFuayBZb3VcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInRlcm1zLWNvbmRpdGlvbnNcIiwgbGFiZWw6IFwiVGVybXMgJiBDb25kaXRpb25zXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJlc3NlbnRpYWxcIixcclxuICAgICAgICBsYWJlbDogXCJFc3NlbnRpYWxcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcImZhcVwiLCBsYWJlbDogXCJGQVFcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInJldmlld3NcIiwgbGFiZWw6IFwiUmV2aWV3c1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImh0dHBzOi8vdXh0aGVtZS5uZXQvcHJvZHVjdC1zdXBwb3J0L1wiLFxyXG4gICAgbGFiZWw6IFwiU3VwcG9ydFwiLFxyXG4gICAgaXNFeHRlcm5hbDogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtcclxuICB1c2VTdGF0ZSxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlTGF5b3V0RWZmZWN0LFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlUmVmLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XHJcblxyXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tIFwiLi4vTW9kYWxWaWRlb1wiO1xyXG5cclxuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5cclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxTdHlsZVwiO1xyXG5cclxuaW1wb3J0IGltZ0Zhdmljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9mYXZpY29uLnBuZ1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0LCBtZXJnZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuLy8gdGhlIGZ1bGwgdGhlbWUgb2JqZWN0XHJcbmltcG9ydCB7IHRoZW1lIGFzIGJhc2VUaGVtZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5cclxuY29uc3QgTG9hZGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB6LWluZGV4OiA5OTk5OTk5OTk5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQgMS41cztcclxuICAmLmluQWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gb3B0aW9ucyBmb3IgZGlmZmVyZW50IGNvbG9yIG1vZGVzXHJcbmNvbnN0IG1vZGVzID0geyBsaWdodDogXCJsaWdodFwiLCBkYXJrOiBcImRhcmtcIiB9O1xyXG5cclxuLy8gbWVyZ2UgdGhlIGNvbG9yIG1vZGUgd2l0aCB0aGUgYmFzZSB0aGVtZVxyXG4vLyB0byBjcmVhdGUgYSBuZXcgdGhlbWUgb2JqZWN0XHJcbmNvbnN0IGdldFRoZW1lID0gKG1vZGUpID0+XHJcbiAgbWVyZ2Uoe30sIGJhc2VUaGVtZSwge1xyXG4gICAgY29sb3JzOiBnZXQoYmFzZVRoZW1lLmNvbG9ycy5tb2RlcywgbW9kZSwgYmFzZVRoZW1lLmNvbG9ycyksXHJcbiAgfSk7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgcGFnZUNvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW3Zpc2libGVMb2FkZXIsIHNldFZpc2libGVMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCgpO1xyXG4gICAgc2V0VmlzaWJsZUxvYWRlcihmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBOYXZiYXIgc3R5bGUgYmFzZWQgb24gc2Nyb2xsXHJcbiAgY29uc3QgZWxlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJwb3BzdGF0ZVwiLFxyXG4gICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyBUaGUgcG9wc3RhdGUgZXZlbnQgaXMgZmlyZWQgZWFjaCB0aW1lIHdoZW4gdGhlIGN1cnJlbnQgaGlzdG9yeSBlbnRyeSBjaGFuZ2VzLlxyXG4gICAgICAgIGdDb250ZXh0LmNsb3NlQWJvdXQoKTtcclxuICAgICAgICBnQ29udGV4dC5jbG9zZUNvbnRhY3QoKTtcclxuICAgICAgICBnQ29udGV4dC5jbG9zZU9mZmNhbnZhcygpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcInB1c2hTdGF0ZVwiLFxyXG4gICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyBUaGUgcHVzaHN0YXRlIGV2ZW50IGlzIGZpcmVkIGVhY2ggdGltZSB3aGVuIHRoZSBjdXJyZW50IGhpc3RvcnkgZW50cnkgY2hhbmdlcy5cclxuICAgICAgICBnQ29udGV4dC5jbG9zZUFib3V0KCk7XHJcbiAgICAgICAgZ0NvbnRleHQuY2xvc2VDb250YWN0KCk7XHJcbiAgICAgICAgZ0NvbnRleHQuY2xvc2VPZmZjYW52YXMoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgfSwgW2dDb250ZXh0XSk7XHJcblxyXG4gIGlmIChwYWdlQ29udGV4dC5sYXlvdXQgPT09IFwiYmFyZVwiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGhlbWVQcm92aWRlclxyXG4gICAgICAgIHRoZW1lPXtcclxuICAgICAgICAgIGdDb250ZXh0LnRoZW1lRGFyayA/IGdldFRoZW1lKG1vZGVzLmRhcmspIDogZ2V0VGhlbWUobW9kZXMubGlnaHQpXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+UGFyayBCaXJkPC90aXRsZT5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj17aW1nRmF2aWNvbn0gLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPExvYWRlciBpZD1cImxvYWRpbmdcIiBjbGFzc05hbWU9e3Zpc2libGVMb2FkZXIgPyBcIlwiIDogXCJpbkFjdGl2ZVwifT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1jaXJjbGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib25lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Mb2FkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLXdyYXBwZXIgb3ZlcmZsb3ctaGlkZGVuXCIgcmVmPXtlbGVSZWZ9PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8TW9kYWxWaWRlbyAvPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgdGhlbWU9e1xyXG4gICAgICAgICAgZ0NvbnRleHQudGhlbWVEYXJrID8gZ2V0VGhlbWUobW9kZXMuZGFyaykgOiBnZXRUaGVtZShtb2Rlcy5saWdodClcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5QYXJrIEJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPXtpbWdGYXZpY29ufSAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TG9hZGVyIGlkPVwibG9hZGluZ1wiIGNsYXNzTmFtZT17dmlzaWJsZUxvYWRlciA/IFwiXCIgOiBcImluQWN0aXZlXCJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbmVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Mb2FkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLXdyYXBwZXIgb3ZlcmZsb3ctaGlkZGVuXCIgcmVmPXtlbGVSZWZ9PlxyXG4gICAgICAgICAgPEhlYWRlciBpc0Rhcms9e2dDb250ZXh0LmhlYWRlckRhcmt9IC8+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgPEZvb3RlciBpc0Rhcms9e2dDb250ZXh0LmZvb3RlckRhcmt9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxNb2RhbFZpZGVvIC8+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xheW91dCciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBpbWdMMUxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9wbmcvbDEtbG9nby5wbmdcIjtcclxuaW1wb3J0IGltZ0wxTG9nb1doaXRlIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvcG5nL2xvZ28td2hpdGUucG5nXCI7XHJcblxyXG5jb25zdCBMb2dvID0gKHsgd2hpdGUsIGhlaWdodCwgY2xhc3NOYW1lID0gXCJcIiwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfWB9IHsuLi5yZXN0fT5cclxuICAgICAgICB7d2hpdGUgPyAoXHJcbiAgICAgICAgICA8aW1nIHNyYz17aW1nTDFMb2dvV2hpdGV9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWdMMUxvZ299IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xyXG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vTG9nbydcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkKE1vZGFsKWBcbiAgLm1vZGFsLWRpYWxvZyB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBAbWVkaWEgJHtkZXZpY2UubGd9IHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRGl2U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDAwcHg7XG4gIEBtZWRpYSAke2RldmljZS5tZH0ge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA2NTBweDtcbiAgfVxuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLW91dDtcbiAgJi5sb2FkZWQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgQ2xvc2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwO1xuICBjb2xvcjogI2ZmZjtcbiAgQG1lZGlhICR7ZGV2aWNlLm1kfSB7XG4gICAgcmlnaHQ6IDJyZW07XG4gIH1cbmA7XG5cbmNvbnN0IENsb3NlQnV0dG9uID0gKHByb3BzKSA9PiAoXG4gIDxDbG9zZVdyYXBwZXIgey4uLnByb3BzfT5cbiAgICA8c3ZnXG4gICAgICByb2xlPVwiaW1nXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgY3NzPXtgXG4gICAgICAgIGZpbGw6IGN1cnJlbnRjb2xvcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk05LjgyIDEyTDAgMi4xOCAyLjE4IDAgMTIgOS44MiAyMS44MiAwIDI0IDIuMTggMTQuMTggMTIgMjQgMjEuODIgMjEuODIgMjQgMTIgMTQuMTggMi4xOCAyNCAwIDIxLjgyelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgPC9DbG9zZVdyYXBwZXI+XG4pO1xuXG5jb25zdCBNb2RhbFZpZGVvID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBnQ29udGV4dC50b2dnbGVWaWRlb01vZGFsKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxTdHlsZWRcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHNpemU9XCJsZ1wiXG4gICAgICBjZW50ZXJlZFxuICAgICAgc2hvdz17Z0NvbnRleHQudmlkZW9Nb2RhbFZpc2libGV9XG4gICAgICAvLyBvbkhpZGU9e2dDb250ZXh0LnRvZ2dsZVZpZGVvTW9kYWx9XG4gICAgPlxuICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMGB9PlxuICAgICAgICAgIDxEaXZTdHlsZWQgY2xhc3NOYW1lPXtgJHtsb2FkaW5nID8gXCJsb2FkaW5nXCIgOiBcImxvYWRlZFwifWB9PlxuICAgICAgICAgICAgPFJlYWN0UGxheWVyXG4gICAgICAgICAgICAgIHVybD17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9emxJblltMkpyRndgfVxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgICAgb25SZWFkeT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpdlN0eWxlZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsLkJvZHk+XG4gICAgPC9Nb2RhbFN0eWxlZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsVmlkZW87XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vTW9kYWxWaWRlb1wiO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpc3RHcm91cCwgQ29sbGFwc2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IEZhQW5nbGVSaWdodCwgRmFBbmdsZURvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcblxyXG5jb25zdCBOZXN0ZWRNZW51Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0fTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgJjpob3ZlcixcclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICYgKyAuY29sbGFwc2U6bm90KC5zaG93KSB7XHJcbiAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmICsgLmNvbGxhcHNlLnNob3cge1xyXG4gICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbGxhcHNlICsgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gIH1cclxuICAvKiAubGlzdC1ncm91cC1mbHVzaDpsYXN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgfSAqL1xyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdE1lbnVJdGVtcyA9IFtcclxuICB7IG5hbWU6IFwiaG9tZVwiLCBsYWJlbDogXCJIb21lXCIgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImJpbGxpbmdcIixcclxuICAgIGxhYmVsOiBcIkJpbGxpbmdcIixcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgbmFtZTogXCJzdGF0ZW1lbnRzXCIsIGxhYmVsOiBcIlN0YXRlbWVudHNcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwicmVwb3J0c1wiLCBsYWJlbDogXCJSZXBvcnRzXCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInNldHRpbmdzXCIsXHJcbiAgICBsYWJlbDogXCJTZXR0aW5nc1wiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyBuYW1lOiBcInByb2ZpbGVcIiwgbGFiZWw6IFwiUHJvZmlsZVwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJpbnN1cmFuY2VcIiwgbGFiZWw6IFwiSW5zdXJhbmNlXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwibm90aWZpY2F0aW9uc1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIk5vdGlmaWNhdGlvbnNcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcImVtYWlsXCIsIGxhYmVsOiBcIkVtYWlsXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJkZXNrdG9wXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkRlc2t0b3BcIixcclxuICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICB7IG5hbWU6IFwic2NoZWR1bGVcIiwgbGFiZWw6IFwiU2NoZWR1bGVcIiB9LFxyXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJmcmVxdWVuY3lcIiwgbGFiZWw6IFwiRnJlcXVlbmN5XCIgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic21zXCIsIGxhYmVsOiBcIlNNU1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IE1lbnVJdGVtID0gKHtcclxuICBsYWJlbCxcclxuICBpc0V4dGVybmFsID0gZmFsc2UsXHJcbiAgbmFtZSxcclxuICBpdGVtcyxcclxuICBkZXB0aFN0ZXAgPSAyMCxcclxuICBkZXB0aCA9IDAsXHJcbiAgLi4ucmVzdFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhc1N1Ykl0ZW1zID0gQXJyYXkuaXNBcnJheShpdGVtcyk7XHJcblxyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoYXNTdWJJdGVtcyA/IChcclxuICAgICAgICA8TGlzdEdyb3VwLkl0ZW1cclxuICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgY3NzPXtgXHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJHtkZXB0aCAqIGRlcHRoU3RlcH1weCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e29wZW4gPyA8RmFBbmdsZURvd24gLz4gOiA8RmFBbmdsZVJpZ2h0IC8+fTwvc3Bhbj5cclxuICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxMaXN0R3JvdXAuSXRlbVxyXG4gICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICBjc3M9e2BcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAke2RlcHRoICogZGVwdGhTdGVwfXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0V4dGVybmFsID8gKFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e2Ake25hbWV9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ0NvbnRleHQudmlzaWJsZU9mZkNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVPZmZDYW52YXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgLyR7bmFtZX1gfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZ0NvbnRleHQudmlzaWJsZU9mZkNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZU9mZkNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtoYXNTdWJJdGVtcyA/IChcclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59PlxyXG4gICAgICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoc3ViSXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXtzdWJJdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBkZXB0aD17ZGVwdGggKyAxfVxyXG4gICAgICAgICAgICAgICAgZGVwdGhTdGVwPXtkZXB0aFN0ZXB9XHJcbiAgICAgICAgICAgICAgICB7Li4uc3ViSXRlbX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5lc3RlZE1lbnUgPSAoeyBtZW51SXRlbXMgPSBkZWZhdWx0TWVudUl0ZW1zIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5lc3RlZE1lbnVDb250YWluZXI+XHJcbiAgICAgIDxMaXN0R3JvdXAgdmFyaWFudD1cImZsdXNoXCI+XHJcbiAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgIGtleT17YCR7bWVudUl0ZW0ubmFtZX0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGRlcHRoU3RlcD17MjB9XHJcbiAgICAgICAgICAgIGRlcHRoPXswfVxyXG4gICAgICAgICAgICB7Li4ubWVudUl0ZW19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3RHcm91cD5cclxuICAgIDwvTmVzdGVkTWVudUNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmVzdGVkTWVudTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL05lc3RlZE1lbnVcIjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XHJcblxyXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICYuaGlkZGVuIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRHJhd2VyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDE3cmVtO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTk5OTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICYuaGlkZGVuIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgd2lsbC1jaGFuZ2U6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2dvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IE9mZmNhbnZhcyA9ICh7IHNob3csIG9uSGlkZU9mZmNhbnZhcywgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4ge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGlmIChzaG93KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5hZGQoXCJoYXMtb2ZmY2FudmFzXCIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoYXMtb2ZmY2FudmFzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImhhcy1vZmZjYW52YXNcIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImhhcy1vZmZjYW52YXNcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiB7Li4ucmVzdH0+XHJcbiAgICAgIDxPdmVybGF5IGNsYXNzTmFtZT17c2hvdyA/IFwiXCIgOiBcImhpZGRlblwifSBvbkNsaWNrPXtvbkhpZGVPZmZjYW52YXN9IC8+XHJcbiAgICAgIDxEcmF3ZXIgY2xhc3NOYW1lPXtzaG93ID8gXCJcIiA6IFwiaGlkZGVuXCJ9PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICA8TG9nb0NvbnRhaW5lciBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgICAgPExvZ28gb25DbGljaz17b25IaWRlT2ZmY2FudmFzfSAvPlxyXG4gICAgICAgICAgICA8L0xvZ29Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9PZmZjYW52YXNcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEdsb2JhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGhlbWVEYXJrLCBzZXRUaGVtZURhcmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdmlkZW9Nb2RhbFZpc2libGUsIHNldFZpZGVvTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Zpc2libGVPZmZDYW52YXMsIHNldFZpc2libGVPZmZDYW52YXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGVhZGVyRGFyaywgc2V0SGVhZGVyRGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb290ZXJEYXJrLCBzZXRGb290ZXJEYXJrXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbY2FydFRvdGFsLCBzZXRDYXJ0VG90YWxdID0gdXNlU3RhdGUoMyk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgc2V0VGhlbWVEYXJrKCF0aGVtZURhcmspO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVZpZGVvTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0VmlkZW9Nb2RhbFZpc2libGUoIXZpZGVvTW9kYWxWaXNpYmxlKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVPZmZDYW52YXMgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZU9mZkNhbnZhcyghdmlzaWJsZU9mZkNhbnZhcyk7XG4gIH07XG5cbiAgY29uc3QgZ29IZWFkZXJEYXJrID0gKCkgPT4ge1xuICAgIHNldEhlYWRlckRhcmsodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGdvSGVhZGVyTGlnaHQgPSAoKSA9PiB7XG4gICAgc2V0SGVhZGVyRGFyayhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZ29Gb290ZXJEYXJrID0gKCkgPT4ge1xuICAgIHNldEZvb3RlckRhcmsodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGdvRm9vdGVyTGlnaHQgPSAoKSA9PiB7XG4gICAgc2V0Rm9vdGVyRGFyayhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaW5jQ2FydFRvdGFsID0gKCkgPT4ge1xuICAgIHNldENhcnRUb3RhbChjYXJ0VG90YWwgKyAxKTtcbiAgfTtcbiAgY29uc3QgZGVjQ2FydFRvdGFsID0gKCkgPT4ge1xuICAgIHNldENhcnRUb3RhbChjYXJ0VG90YWwgLSAxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB0aGVtZURhcmssXG4gICAgICAgIHRvZ2dsZVRoZW1lLFxuICAgICAgICBoZWFkZXJEYXJrLFxuICAgICAgICBnb0hlYWRlckRhcmssXG4gICAgICAgIGdvSGVhZGVyTGlnaHQsXG4gICAgICAgIGZvb3RlckRhcmssXG4gICAgICAgIGdvRm9vdGVyRGFyayxcbiAgICAgICAgZ29Gb290ZXJMaWdodCxcbiAgICAgICAgdmlkZW9Nb2RhbFZpc2libGUsXG4gICAgICAgIHRvZ2dsZVZpZGVvTW9kYWwsXG4gICAgICAgIHZpc2libGVPZmZDYW52YXMsXG4gICAgICAgIHRvZ2dsZU9mZkNhbnZhcyxcbiAgICAgICAgY2FydFRvdGFsLFxuICAgICAgICBpbmNDYXJ0VG90YWwsXG4gICAgICAgIGRlY0NhcnRUb3RhbCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbENvbnRleHQ7XG5leHBvcnQgeyBHbG9iYWxQcm92aWRlciB9O1xuIiwiLy8gaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgR2xvYmFsUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvZm9udGF3ZXNvbWUtNS93ZWJmb250cy9mYS1icmFuZHMtNDAwLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvZm9udGF3ZXNvbWUtNS93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC50dGZcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtc29saWQtOTAwLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyLVN0ZC1Cb29rLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyU3RkLUJsYWNrLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyU3RkLUJsYWNrSXRhbGljLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyU3RkLUJvbGQudHRmXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy90eXBvZ3JhcGh5LWZvbnQvQ2lyY3VsYXJTdGQtQm9sZEl0YWxpYy50dGZcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRzL3R5cG9ncmFwaHktZm9udC9DaXJjdWxhclN0ZC1Cb29rLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyU3RkLUJvb2tJdGFsaWMudHRmXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy90eXBvZ3JhcGh5LWZvbnQvQ2lyY3VsYXJTdGQtTWVkaXVtLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L0NpcmN1bGFyU3RkLU1lZGl1bUl0YWxpYy50dGZcIjtcclxuXHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy9pY29uLWZvbnQvZm9udHMvYXZhc3RhLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvaWNvbi1mb250L2Nzcy9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L2Jvb3RzdHJhcC1jdXN0b20uc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5jc3NcIjtcclxuXHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy9pY29uLWZvbnQvY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvdHlwb2dyYXBoeS1mb250L3R5cG8uY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS01L2Nzcy9hbGwuY3NzXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSkgPT4ge1xyXG4gIGlmIChyb3V0ZXIucGF0aG5hbWUubWF0Y2goL3NpZ258cmVzZXR8Y29taW5nLykpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHbG9iYWxQcm92aWRlcj5cclxuICAgICAgICA8TGF5b3V0IHBhZ2VDb250ZXh0PXt7IGxheW91dDogXCJiYXJlXCIgfX0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHbG9iYWxQcm92aWRlcj5cclxuICAgICAgPExheW91dCBwYWdlQ29udGV4dD17e319PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0dsb2JhbFByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiZXhwb3J0IGNvbnN0IGFkZERheXMgPSAoZGF5cykgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRheXMpO1xuICByZXR1cm4gZGF0ZTtcbn07XG4iLCJleHBvcnQgY29uc3QgYnJlYWtwb2ludHMgPSB7XG4gIHNtOiA1NzYsIC8vU21hbGwgc2NyZWVuIHN0YXJ0XG4gIG1kOiA3NjgsIC8vTWVkaXVtIHNjcmVlbiBzdGFydFxuICBsZzogOTkyLCAvL0xhcmdlIHNjcmVlbiBzdGFydFxuICB4bDogMTIwMCwgLy9FeHRyYSBMYXJnZSBzY3JlZW4gc3RhcnRcbn07XG5cbmV4cG9ydCBjb25zdCBkZXZpY2UgPSB7XG4gIHNtOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy5zbX1weClgLFxuICBtZDogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMubWR9cHgpYCxcbiAgbGc6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLmxnfXB4KWAsXG4gIHhsOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy54bH1weClgLFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IGdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJnfSAhaW1wb3J0YW50O1xuXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHR9ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBwLCAucHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dH07XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIHVsLC51bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cblxuICBhIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dH0gIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAmOmhvdmVyLCAmOmFjdGl2ZSwgJjpmb2N1c3tcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9ICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gICAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgLyogZGlzcGxheTogbm9uZTsgPC0gQ3Jhc2hlcyBDaHJvbWUgb24gaG92ZXIgKi9cbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDsgLyogPC0tIEFwcGFyZW50bHkgc29tZSBtYXJnaW4gYXJlIHN0aWxsIHRoZXJlIGV2ZW4gdGhvdWdoIGl0J3MgaGlkZGVuICovXG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogRmlyZWZveCAqL1xuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbFN0eWxlO1xuIiwiaW1wb3J0IHsgYnJlYWtwb2ludHMsIGRldmljZSB9IGZyb20gXCIuL2JyZWFrcG9pbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiLi9hZGREYXlzXCI7XG5cbmV4cG9ydCB7IGRldmljZSwgYnJlYWtwb2ludHMsIHRoZW1lLCBhZGREYXlzIH07XG4iLCJpbXBvcnQgeyByZ2JhIH0gZnJvbSBcInBvbGlzaGVkXCI7XHJcbmltcG9ydCB7IGJyZWFrcG9pbnRzIH0gZnJvbSBcIi4vYnJlYWtwb2ludHNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRDb2xvcnMgPSB7XHJcbiAgcHJpbWFyeTogXCIjZjA0MDM3XCIsXHJcbiAgc2Vjb25kYXJ5OiBcIiM1NDU0ZDRcIixcclxuICB3aGl0ZTogXCIjZmZmZmZmXCIsXHJcbiAgZGFyazogXCIjMTkxOTFiXCIsXHJcbiAgYmxhY2s6IFwiIzAwMDAwMFwiLFxyXG4gIHllbGxvdzogXCIjZmVkYzVhXCIsXHJcbiAgYXNoOiBcIiM0MTNlNjVcIixcclxuICBncmVlbjogXCIjNzdiZjQxXCIsXHJcbiAgaW5mbzogXCIjMGU1NjdjXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgcHJpbWFyeTogZGVmYXVsdENvbG9ycy5wcmltYXJ5LFxyXG4gIHNlY29uZGFyeTogZGVmYXVsdENvbG9ycy5zZWNvbmRhcnksXHJcbiAgbGlnaHQ6IGRlZmF1bHRDb2xvcnMud2hpdGUsXHJcbiAgbGlnaHRTaGFkZTogcmdiYShkZWZhdWx0Q29sb3JzLndoaXRlLCAwLjc1KSxcclxuICBkYXJrOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgZGFya1NoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC43NSksXHJcbiAgYXNoOiBkZWZhdWx0Q29sb3JzLmFzaCxcclxuICBiZzogZGVmYXVsdENvbG9ycy53aGl0ZSxcclxuICBib3JkZXI6IHJnYmEoZGVmYXVsdENvbG9ycy5hc2gsIDAuMTE1KSxcclxuICBzaGFkb3c6IHJnYmEoZGVmYXVsdENvbG9ycy5hc2gsIDAuMTc1KSxcclxuICBoZWFkaW5nOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgdGV4dDogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuNzUpLFxyXG4gIHdhcm5pbmc6IGRlZmF1bHRDb2xvcnMueWVsbG93LFxyXG4gIHN1Y2Nlc3M6IGRlZmF1bHRDb2xvcnMuZ3JlZW4sXHJcbiAgaW5mbzogZGVmYXVsdENvbG9ycy5pbmZvLFxyXG5cclxuICBtb2Rlczoge1xyXG4gICAgZGFyazoge1xyXG4gICAgICBwcmltYXJ5OiBkZWZhdWx0Q29sb3JzLnByaW1hcnksXHJcbiAgICAgIHNlY29uZGFyeTogZGVmYXVsdENvbG9ycy5zZWNvbmRhcnksXHJcbiAgICAgIGxpZ2h0OiBkZWZhdWx0Q29sb3JzLndoaXRlLFxyXG4gICAgICBsaWdodFNoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMud2hpdGUsIDAuNzUpLFxyXG4gICAgICBkYXJrOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgICAgIGRhcmtTaGFkZTogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuNzUpLFxyXG4gICAgICBhc2g6IGRlZmF1bHRDb2xvcnMuYXNoLFxyXG4gICAgICBiZzogZGVmYXVsdENvbG9ycy5kYXJrLFxyXG4gICAgICBib3JkZXI6IHJnYmEoZGVmYXVsdENvbG9ycy5hc2gsIDAuMTE1KSxcclxuICAgICAgc2hhZG93OiByZ2JhKGRlZmF1bHRDb2xvcnMuYXNoLCAwLjE3NSksXHJcbiAgICAgIGhlYWRpbmc6IGRlZmF1bHRDb2xvcnMud2hpdGUsXHJcbiAgICAgIHRleHQ6IHJnYmEoZGVmYXVsdENvbG9ycy53aGl0ZSwgMC43NSksXHJcbiAgICAgIHdhcm5pbmc6IGRlZmF1bHRDb2xvcnMueWVsbG93LFxyXG4gICAgICBzdWNjZXNzOiBkZWZhdWx0Q29sb3JzLmdyZWVuLFxyXG4gICAgICBpbmZvOiBkZWZhdWx0Q29sb3JzLmluZm8sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB0aGVtZSA9IHtcclxuICBpbml0aWFsQ29sb3JNb2RlTmFtZTogXCJsaWdodFwiLFxyXG4gIGNvbG9yczogY29sb3JzLFxyXG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgIGAke2JyZWFrcG9pbnRzLnNtfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLm1kfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLmxnfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLnhsfXB4YCxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb2xpc2hlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBsYXllclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==