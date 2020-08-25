module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/image/jpeg/l1-customer1.jpg":
/*!************************************************!*\
  !*** ./src/assets/image/jpeg/l1-customer1.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApBAMAAABaTh3FAAAAG1BMVEXMzMyWlpbFxcWxsbG+vr6jo6OcnJyqqqq3t7cmZLoJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAASUlEQVQokWNgGAVDATAJqAFJRQY1FFFmgUAgacgQiCLqIsDIrs7iyMCIImogwMiUwsyIJiooysiUwSgYgCrKADKBAV3tKKAVAAC1XwQQkmo/HwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/image/jpeg/l1-customer2.jpg":
/*!************************************************!*\
  !*** ./src/assets/image/jpeg/l1-customer2.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApBAMAAABaTh3FAAAAG1BMVEXMzMyWlpbFxcWxsbG+vr6jo6OcnJyqqqq3t7cmZLoJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAASUlEQVQokWNgGAVDATAJqAFJRQY1FFFmgUAgacgQiCLqIsDIrs7iyMCIImogwMiUwsyIJiooysiUwSgYgCrKADKBAV3tKKAVAAC1XwQQkmo/HwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/image/jpeg/l1-customer3.jpg":
/*!************************************************!*\
  !*** ./src/assets/image/jpeg/l1-customer3.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApBAMAAABaTh3FAAAAG1BMVEXMzMyWlpbFxcWxsbG+vr6jo6OcnJyqqqq3t7cmZLoJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAASUlEQVQokWNgGAVDATAJqAFJRQY1FFFmgUAgacgQiCLqIsDIrs7iyMCIImogwMiUwsyIJiooysiUwSgYgCrKADKBAV3tKKAVAAC1XwQQkmo/HwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/image/png/appleStoreButtonImage.png":
/*!********************************************************!*\
  !*** ./src/assets/image/png/appleStoreButtonImage.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/appleStoreButtonImage-c4d527a52e257ee7c20d0070ec9a5550.png";

/***/ }),

/***/ "./src/assets/image/png/cctv-1.png":
/*!*****************************************!*\
  !*** ./src/assets/image/png/cctv-1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cctv-1-42cfad57491a023f62c1a43d0541d6e1.png";

/***/ }),

/***/ "./src/assets/image/png/cctv-4.png":
/*!*****************************************!*\
  !*** ./src/assets/image/png/cctv-4.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cctv-4-1916a1533ccc1d5a1ce54350b41dfcd3.png";

/***/ }),

/***/ "./src/assets/image/png/content-img1--mobile.webp":
/*!********************************************************!*\
  !*** ./src/assets/image/png/content-img1--mobile.webp ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAZ0AAAJaBAMAAAAG9IcAAAAAG1BMVEXMzMyWlpaqqqq+vr6cnJyxsbHFxcWjo6O3t7dTjHyoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFwklEQVR4nO3aTW/jxhkAYK1MfRzDVNvkuEKL9hoVac5m4bbXFZDkbBfbpEcLSHO2irTJzy7ni6RsWkkPFl3geQ4rjUh75+XMvPMhz2YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/l79/V//pYfTK4rvNP29LYd0Wuivr3zZ//fqlK/ZztnX3dll/VN7+rW5tPhu5fxGufJwL66YtvB0W6t+9XFV/iau6j2fdxbOMVetqOnSIV75PhW0svBte2dy+YG1/XjWIZ97F86FOHp7cv0oXUgMt6kHY+Ur9l5eu8ln7QTxVF8821+3XT+7fDiPd5ULsl8dc+OTlK/28ZT2I51jiaTvh5j/LP/TjpBOufL38sa6vQ6kJhR9SYRmuzP7RjDXq5awG8bR1zfHM05j4vK5vH91fpf60r381C+MtjqND/eks9r379KP3F6j3c3aDeI5dPG/qTXi5evqsd2m8V7HlVqnwIXaxKne07UgnvZymxHP175Cecjy7+MTDk3/36P5DbJg20k1/2zoOoF260j6Lsax4IYv6bY6nimM5x7PPb45pmPSWpTfFnrjPhaZ+39+7eDroLueuvh6LZ5srevc4nnXpgdvQJIcQxyzHtc2F1HQTOdSfjcVTKvqm/WCVm2QZsve8jLZvvpnlRpqFsD8KP/MwS/dNF8+6HcO5hqubm5umxNPkur1p26dNCnFgtKG8bz8YzC5dS1ThjqbkwsEEcGkf2kc++O/flHjyDJn62zbFsAu1v8uJIlqXkTIPn76GeEKfH4vnq69u4+sxdLW7FF2cZY45iUWLksnim/J7JuxvscOMxVPEMb6I8/9VHEb7tkHXZb8wL40VG+qnn8ovnWzBswpP+0w8V2nAN6Heq9hK2/r6qtsirEpjnYQwny5fx+50Jp7PUz2PoRmPsZqH+n7X7ReqshI46WJ3k82ny/j4n40nrEdjhauQ2Zr4vqm/7xfRo/Esm8nWO/P4JJ+LZ9ttUNtud72u45TU1L/Pu4L3g+3FMJ5Vt727uF2c/c/Fk8fHoX5bpSo3dVO//WL5ZWy5/vb+d7TNM9kGNc2a5+LJy4Q2Y29TLgs97bat9SGMprF4jvUwo1/UIo32s/GkVDUPb6/Tzel1FYbeSDzz0T36Zdylgft8fuv2mstuT11e487oaT4IufzT2UTyovNMvl6UBeq+nAo0ZaYJP/w0nv2ExzvrXIlz64N9ftpVORlpyuQSpq4n8XzbH2RdXpXrei6eKg+gVR9PHu0hNz5eH4TeNt3etKp73bHBo3jWuXsdS2Y4lCYJK+/T9Vs8ixg9Ub2MXxJP6UhhyXYb3myHt56ur0OOmGwqnZ2NZ37z53xT6ozxGDRuUvf9rdeP9j/hTHWqqSc4E8+qWyKneO7qTR44x2F/O92ftn1x0qPrc+1TsnLub+3i4Jje3fX54P7R+cF66pPrbCS/LcpnKXG10+l1labWqgyZfZi8Ts53qqeHqZMYieeqnB/M8zFo/XCVFjrz0sXi2m+fj7Pi+dtuupXBifHzkHfxNR1/7EIrHWLLlPO3dWyMk/PR7eOzuomMxZNPdfN0E3PBruy94yD5UM6vU+GTWX/GNbWxeI4pVX0b22kdc3X+ymEfrywP5fuFkMXjyc/VKxk+o/G0Y7vdtf0xraar+O8yzS7tVujjL5b7PB014Wui9P1PG9tNMUEUvbF41iWRhzGzT9k7HSt2V27DZ4Pv5xaD9H/pEE6MrkfLt4r3XcOElnnor6TxNe+jnr/qeOb9KU75wm1RMnb0kO7rv99evep4Zl+Gem0eZl1i6/Y+P9SDXc6iNM/JcuMyFf/f/Otm88zfh/zYbH7TFRbDvw8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF6r/wJpqcST/PSrIAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/image/png/content-img2--mobile.webp":
/*!********************************************************!*\
  !*** ./src/assets/image/png/content-img2--mobile.webp ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAZ8AAAJeBAMAAACZkBUrAAAAG1BMVEXMzMyWlpaqqqq+vr6jo6O3t7fFxcWcnJyxsbHZ38WBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFU0lEQVR4nO3aTW8bxxkAYIoUuTx6HMXyUWwvPUY1EF9NoGhzNIN+HSkkjXPUFm6To4gY7d/uzswutUMtDQMNMjk8z0HU7LuU9+V8Dz2bAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwM9qHp4df78Ln/KOD+37/xwLf27fP5wJVXI7Smg3JHQRem+fvuEQr9/0hb/FwsNkqJbtKKHNkNDd+YQu0/WrfSrMU+H5VKiWZRgl1A4J3Z5PaJsDN6lwyIWHiVAt70YJdcn1v+3OJjTvA5/HwqIvfPY0VM1mlNC7Y0KHswl1dffj/h/bcB0LTSq0uVCGaomf8ZDQoj0mtAlffpc8eUP39PvZbB3CF7NYkbHDXPZ5F6FaLo8JffP32AX6y9tz43f3Afw7vrapp2xTYdWGN09CtezCpk8oN7H+cnuu2Vz2n/9tuE8pvM1/5LPTUDVtuJtKKFyduf+uj1yEF7F15UITXp6GalmHlxcTCa2OU8upXT+GzWOlXKZEhsSKUC134X4qoUX/pMm2/+TvYpMaGujqu/1jXazS+4pQLdvwdkjom1evXg0JLcdzyW3fNzax2kLq/8dI31vaeEcRqmTZffgXo5XCkNB63Grm+Um7angRf4xmpt0wnm26q6vJhd8vrOkefCqh+bhfr/LcP48rnGUxyRyGNc/hSaiSQ/cRTyf0bPXf9v3b4a44iN/Gn92suY87hrxH2Ax1EquqDNWxis8wldBluO+WROE6P2+TGtM21tO8y+r1cTm6HerktmuUZaiOeRzMphJqwvvRvqBrTPdxEn0TM71aPO4R2rDP93eD5UmojjRKTSV03N/dpOK2S7xJXaQJV/1W6c3sJKEyVEcbm9JUQsf9XR69u4F7v0vV1YTn/abn5Wy0fcoJjUNV5Al+KqEug6u/rn4fQq6CboC7adPA14TrEH7af9+mSHjcsT87CVVxl55xKqFdnlNe9z28Gzye519jW/xj9/ptao1FQmWoik36l6cSOuSJdRX6pUDc76X190X/2nWrF08TGoVqWOS2MZXQ13/IA/auXzE0Q3e6GLbbt7FcDAplqIbL4RmfJjRo+g6+HMauZhjD0kL7ZJQbh2rY5fb0sYSGDU/36HkObYZ5M64CnyQ0CtXQ5mf8WEKL4cBj2w9dzbBgS5FipVCGaggjx0vlLav+2ZbDHHs5jMkpUqzlylANn5DQcKEZzt7mxa3Fant+/q/8Qj4pofxhx2E7dYz1463XJ/uhMlTDpze5bj76IU+1y6JdFTvW5a+4ya1/87tcXuR66VrTX/Icu3rs+VcnZwplqKKJUW4+fMbrvIG468rbPLu0fbdZx2J56lOEKppIaD20nibPvXFvd5uvbfpWliLrPvE8/xahiiYSWgxz5CG1qUVI+7c0AgyHb7sYKU9Oi1BFUxNr3iv0u9S8BV/lgbtJB/LxOPtmFqvufnY82y5D9UwltMnP9jrXwC51kU36uc4n8t8ev32YHb99KEP1nNmxPv8ybvDSeNWmukkHp7Giwm/33/eRru7+dfx+qAzVM32M1YuZrHPDW+eBe9dHhjZ5vO0kVM/k4rTtny02pVw1sW/0541JblabXHhIhTJUzWRC70ZnJJu+DR1yx9qMTk9OvgUvQtVMbx/Ss6UTtkV43LY+dC/LNozO3g6PFXQa+nVZfWivv9pPhpZ/Cv98bFUfxv+TpAwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/4X/SNd0txfMTfgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/image/png/fence.png":
/*!****************************************!*\
  !*** ./src/assets/image/png/fence.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fence-b583ee2305d55bbcb3a355d46b8e057a.png";

/***/ }),

/***/ "./src/assets/image/png/google-play-badge.png":
/*!****************************************************!*\
  !*** ./src/assets/image/png/google-play-badge.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/google-play-badge-db9b21a1c41f3dcd9731e1e7acfdbb57.png";

/***/ }),

/***/ "./src/assets/image/png/image-10.png":
/*!*******************************************!*\
  !*** ./src/assets/image/png/image-10.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/image/png/image-11.png":
/*!*******************************************!*\
  !*** ./src/assets/image/png/image-11.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image-11-2a7375e8c5b88677ae652a77ec9e6457.png";

/***/ }),

/***/ "./src/assets/image/png/image-12.png":
/*!*******************************************!*\
  !*** ./src/assets/image/png/image-12.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image-12-de83a193a5ddcdb9385074e3a26fe65c.png";

/***/ }),

/***/ "./src/assets/image/png/image-13.png":
/*!*******************************************!*\
  !*** ./src/assets/image/png/image-13.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image-13-1129e001e2a82c443d8e360fb94959e6.png";

/***/ }),

/***/ "./src/assets/image/png/image-14.png":
/*!*******************************************!*\
  !*** ./src/assets/image/png/image-14.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image-14-4e5b3fe127e589e272fc35cb8d3792e8.png";

/***/ }),

/***/ "./src/assets/image/png/image-8.png":
/*!******************************************!*\
  !*** ./src/assets/image/png/image-8.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image-8-d1dc6f6812556ac61d4857eaebe0f495.png";

/***/ }),

/***/ "./src/assets/image/png/image-9.png":
/*!******************************************!*\
  !*** ./src/assets/image/png/image-9.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image-9-bab18801de50d947998cac5191af9f1a.png";

/***/ }),

/***/ "./src/assets/image/png/iphonex1.svg":
/*!*******************************************!*\
  !*** ./src/assets/image/png/iphonex1.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/iphonex1-9f70de871ccfc1f28813fbbee1398e78.svg";

/***/ }),

/***/ "./src/assets/image/png/l1-brand1.png":
/*!********************************************!*\
  !*** ./src/assets/image/png/l1-brand1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAbBAMAAAC+UWGPAAAAG1BMVEXMzMyWlpbFxcWcnJyjo6O+vr6xsbG3t7eqqqqnE9q1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAZUlEQVQ4jWNgGAWjYBTQDTAZhLgVuzIwFJu3OFNgjIpAUbCRcmuqkTJDOCXOEWAXNw1UcVAIYWigyBiG4GJnlgI2J9YCioxpUk6K0HBIY+BQoMiYEPcUp6Z0ExcWSkwZBaOAtgAATX0PSxMLJGIAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/image/png/l1-brand2.png":
/*!********************************************!*\
  !*** ./src/assets/image/png/l1-brand2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAcBAMAAAB/gedFAAAAHlBMVEXMzMyWlpbFxcWjo6O+vr6qqqq3t7exsbGenp6cnJzpOAS5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAYklEQVQ4jWNgGAWjYBABRRZjB0UGBraZ6cYFxOphMmR2MQhkdctUmukygWibGBmVxByZjJlYzAQTSNEkzsgQzlCsSYpNzC6NgkbG7AWcSiRoAgYEI6tbpbHZTOKdNwpGMAAA2AQOEWISZEIAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/image/png/l1-brand3.png":
/*!********************************************!*\
  !*** ./src/assets/image/png/l1-brand3.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAbBAMAAABVZtqMAAAAG1BMVEXMzMyWlpbFxcWcnJyjo6O+vr6xsbG3t7eqqqqnE9q1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAaElEQVQ4jWNgGAWjYBRQHSizuiS5BDCwG1e4GJBrBpMju6pJUEVYsJIBawHZLmFkKCx2LnJhYnXgINsMoCGshqEG7gwpCuEUGMKhZKxk1MKWwNBEgSGsLqUmEWrFLg4O5BsyCkYBNQEAPkwON+4zQtoAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/image/png/l1-brand4.png":
/*!********************************************!*\
  !*** ./src/assets/image/png/l1-brand4.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAkBAMAAADlZwAzAAAAG1BMVEXMzMyWlpa+vr6cnJy3t7fFxcWjo6OxsbGqqqqN7EKtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiElEQVQ4jWNgGAWjYHABZWEFVgEg3WjC0JyKX6kJiwEbUClTgjJLQwUBpSEGJQLlHK4BzmwKrPiVKgqqJggwuzGwCTEXEnBAenhagACLEANDMWNpGX6loqyCgoLsQiwKgcwBgfiVprAkMAgEKzMluHEUEDA1TCyAQaCdo6DRlDWRgFtHwSjABwCbmBNvIycIDgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/image/png/l1-brand5.png":
/*!********************************************!*\
  !*** ./src/assets/image/png/l1-brand5.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAcBAMAAACOirzIAAAAG1BMVEXMzMyWlpbFxcWjo6O+vr6xsbG3t7ecnJyqqqpSj/F8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAX0lEQVQ4jWNgGAWjYPAAJgFnE2dTBob0smBTojUpC5g4J7m3pBWpl7gTb5WAkCKbmLKBgnOiGEmaGNw5AliNSLLJxNlIXdkglKFInQRNzibuZS2pxcbpZcRrGgUjGAAAjsMPKYvLxXsAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/image/png/l1-cta-oval.png":
/*!**********************************************!*\
  !*** ./src/assets/image/png/l1-cta-oval.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/image/png/l1-feature-oval.png":
/*!**************************************************!*\
  !*** ./src/assets/image/png/l1-feature-oval.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbMAAABnCAMAAAC961w4AAAAk1BMVEUAAAD+3Fr/3Vr93Fr/0FX/1l/93Fr/3Vr/3Vr+3Fr+3Fr/3Fr/3Vr/3Vr+3Fr+3Fr+3Fr+3Fr93Fn/3Fn+3Vr93Fn93Vr/3Fj+3Fr+3Fr+3Fr+3Fn/3Vr/3Fr/3Vr/4Vn+3Fn+3Fr+3Fr/3Fr/3Vr+3Vr93Vn/3Fv/3Vr/3lr/4Vr+3Vr/3Ff+3Fr/3Vn/3Fj+3Fp4U66jAAAAMHRSTlMA4iCkBAyDaVLv3XNJPfzr18yfKfOakhr457avfnhhCNK/q11YuodOQi0RyBXENjJijzX6AAADlElEQVR42u3ciXaaUBSF4c2MColCBKsizlNset//6Urapk0bB1xt0nNwf6/wL/RwuADXN6QLgOjekCao2FNDiuBZmRjSA99NBoa0wA+7tiEl8MJzDOmAXxYPhjTAK3bPkAJ4zV0bkg+/i1qGpMMf8s+GhMMbhSHZ8NaXriHJcESZGRIMR20tQ2LhuD23InLhlCWnfqlwUr4yJBLOmPBSEwnn5END8uC8Jc+KyIMLDnNDwuCikJeaMLjswBM+sqCOiGsRSVCLt74zJAVqSnnuQAzU5Qa8wxYC9eXcG8uAa2x5cFUCXIcHswTAlWyuIP87XC3iD+R1BDRD2eEEeQ0JzYADJ8gryGgGPPHV0NqkNAMmnwzVIqcZPJ/vPtUiqBmQJ9wc1yCqGbDjGxmXCWsGbHi4/xJxzeAGPHtwnrxmgDfmhyrOkdgMyDMOI6fJbAakI0MnSG0GxDx8cILcZkDIEfIoyc04Qh4nuhngjVntDeHNAK9gtT+IbwZ4HW78f6OgGVCy2msqmgFlwBP+PylpVmG1F3qawQ15l/2NomaVmIchK7qaAanD7bG2ZoCd8diItmbAfszRX1szwF0+GtLVrPLEPzZ1zYB8zWP+2poBZcAnbNqaVbb8rI+6ZkBe8P01bc0q0YjziLZmQD7mBllbs0rIXaS6ZoDtcz+irRnghvzmsbZmvNhUNuPFprFZxR5zQaKtWWW35vSvrVkl7nOJrK0Z4EYOH2ora1bxlnNmU9as4oW82rQ1q5SbhP9typpV3KjPN2yUNau4sf/Ipza6mj3bLxMut5Q1e7brrPgFEmXNKt4m45GEH9rQww5GN38P8DAKbOhy01PJXc+PXai0n/RvcJ1s9Zd7qGZPnBvq1k4W2n4Qb7qb5Uwa0utFGjgNflraTYIUjeRti3njLjhrXmw9NNth468aslW+H/rRAbfC3oxHqu+826Nx2LB/r1q8OEh66lZdg14SxE3/Mbzgy9IfKZlOunN/uQN956bheD4Ve80NpvNxmCrdbLyzdNPpz0RNltas39k0dIz/l8o0/P/pnmOFaQm6hmtvJ34ya9+ZD3TXniX+ZGvzd/Dv5PGiyJxVzxqYdzKweisnKxbxLY7v78yzn6JFx8+c4eep1TJ/oWVNPw+dzO8soif7xif3D7W3d3EULoJOsc76zmg4e+xNu23r033rwVQeWvefrHZ32nucDUdOP1sXnWARRvHO3uODfAVDqeoukVY3vwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/image/png/security-guard.png":
/*!*************************************************!*\
  !*** ./src/assets/image/png/security-guard.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/security-guard-769d31f8cc8995c28d758cf35a3964bb.png";

/***/ }),

/***/ "./src/assets/image/svg/hero-shape-svg.svg":
/*!*************************************************!*\
  !*** ./src/assets/image/svg/hero-shape-svg.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjUwIiBoZWlnaHQ9IjEyNTAiIHZpZXdCb3g9IjAgMCAxMjUwIDEyNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iaDU2Z2EiIHgxPSI1NzUuODUiIHgyPSI5NTEuODQiIHkxPSI1NjkuMDciIHkyPSIxMTU0Ljk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjOGQ4ZGVjIiBzdG9wLW9wYWNpdHk9Ii4xNyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU0NTRkNCIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGc+PGc+PHBhdGggZmlsbD0idXJsKCNoNTZnYSkiIGQ9Ik02MjUgMTI1MGMzNDUuMTc4IDAgNjI1LTI3OS44MjIgNjI1LTYyNVM5NzAuMTc4IDAgNjI1IDAgMCAyNzkuODIyIDAgNjI1czI3OS44MjIgNjI1IDYyNSA2MjV6Ii8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "./src/assets/image/svg/l1-curve-content2.svg":
/*!****************************************************!*\
  !*** ./src/assets/image/svg/l1-curve-content2.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDEwIiBoZWlnaHQ9IjEyMiIgdmlld0JveD0iMCAwIDEwMTAgMTIyIj48Zz48Zz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTc5Ny43MTMtMi4xMzFTNjMxLjExNC0zNS45MDUgMTk0LjE4OSA4Ny4zOGMtNDM2LjkyNSAxMjMuMjg1IDAtMTIyLjAzMiAwLTEyMi4wMzJoMTYwNSIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "./src/assets/image/svg/l1-curve-cta.svg":
/*!***********************************************!*\
  !*** ./src/assets/image/svg/l1-curve-cta.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDEwIiBoZWlnaHQ9IjEyMiIgdmlld0JveD0iMCAwIDEwMTAgMTIyIj48Zz48Zz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNLTc4OC41MjQtMi4xMzFTMzc4LjA3NS0zNS45MDUgODE1IDg3LjM4YzQzNi45MjUgMTIzLjI4NSAwLTEyMi4wMzIgMC0xMjIuMDMySC03OTAiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "./src/assets/image/svg/l1-curve-feature.svg":
/*!***************************************************!*\
  !*** ./src/assets/image/svg/l1-curve-feature.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTYwMHB4IiBoZWlnaHQ9IjEyM3B4IiB2aWV3Qm94PSIwIDAgMTYwMCAxMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5ICg4NjEyNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+d2hpdGUtY3VydmUtMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJMYW5kaW5nLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtMTk0Ny4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IkZlYXR1cmVzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNS4wMDAwMDAsIDExMzEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMS40NzU4OTk4Nyw5MDUuNTExNzE5IEM3NzkuMjA4NTc4LDkyOC4wMjczNDQgMTMxMy43MTY2MSw4OTguMTkwMTA0IDE2MDUsODE2IEMxNjA1LDg5Ny4zNTQxNjcgMTYwNSw5MzguMDMxMjUgMTYwNSw5MzguMDMxMjUgTDAsOTM4LjAzMTI1IiBpZD0id2hpdGUtY3VydmUtMSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

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

/***/ "./src/components/PageWrapper/PageWrapper.js":
/*!***************************************************!*\
  !*** ./src/components/PageWrapper/PageWrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PageWrapper = ({
  children,
  headerDark = false,
  footerDark = false
}) => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (headerDark) {
      gContext.goHeaderDark();
    } else {
      gContext.goHeaderLight();
    }

    if (footerDark) {
      gContext.goFooterDark();
    } else {
      gContext.goFooterLight();
    }
  }, [gContext, headerDark, footerDark]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
};

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

/***/ }),

/***/ "./src/components/PageWrapper/index.js":
/*!*********************************************!*\
  !*** ./src/components/PageWrapper/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageWrapper */ "./src/components/PageWrapper/PageWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PageWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections_landing1_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/landing1/Hero */ "./src/sections/landing1/Hero.js");
/* harmony import */ var _sections_landing1_Clients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/landing1/Clients */ "./src/sections/landing1/Clients.js");
/* harmony import */ var _sections_landing1_Feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/landing1/Feature */ "./src/sections/landing1/Feature.js");
/* harmony import */ var _sections_landing1_Content1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/landing1/Content1 */ "./src/sections/landing1/Content1.js");
/* harmony import */ var _sections_landing1_Content2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/landing1/Content2 */ "./src/sections/landing1/Content2.js");
/* harmony import */ var _sections_landing1_Testimonial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/landing1/Testimonial */ "./src/sections/landing1/Testimonial.js");
/* harmony import */ var _sections_landing1_CTA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/landing1/CTA */ "./src/sections/landing1/CTA.js");
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PageWrapper */ "./src/components/PageWrapper/index.js");
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const IndexPage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    footerDark: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_sections_landing1_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(_sections_landing1_Clients__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(_sections_landing1_Feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(_sections_landing1_Content1__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(_sections_landing1_Content2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(_sections_landing1_Testimonial__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_sections_landing1_CTA__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/sections/landing1/CTA.js":
/*!**************************************!*\
  !*** ./src/sections/landing1/CTA.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Core */ "./src/components/Core/index.js");
/* harmony import */ var _assets_image_png_l1_cta_oval_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/png/l1-cta-oval.png */ "./src/assets/image/png/l1-cta-oval.png");
/* harmony import */ var _assets_image_png_l1_cta_oval_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_l1_cta_oval_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_svg_l1_curve_cta_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/svg/l1-curve-cta.svg */ "./src/assets/image/svg/l1-curve-cta.svg");
/* harmony import */ var _assets_image_svg_l1_curve_cta_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_svg_l1_curve_cta_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\sections\\landing1\\CTA.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const LeftCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "CTA__LeftCard",
  componentId: "x82j2m-0"
})(["position:absolute;top:0;left:0px;"]);
const RightCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "CTA__RightCard",
  componentId: "x82j2m-1"
})(["position:absolute;top:0;right:-275px;"]);

const CTA = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Section"], {
  bg: "dark",
  className: "position-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
}, __jsx(LeftCard, {
  "data-aos": "fade-right",
  "data-aos-duration": "750",
  "data-aos-once": "true",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}, __jsx("img", {
  src: _assets_image_png_l1_cta_oval_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }
})), __jsx(RightCard, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 7
  }
}, __jsx("img", {
  src: _assets_image_svg_l1_curve_cta_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 7
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  className: "justify-content-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "7",
  xl: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 11
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  mb: 5,
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 13
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Title"], {
  color: "light",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 15
  }
}, "Get started"), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
  color: "light",
  opacity: 0.7,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 15
  }
}, "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.")), __jsx("form", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 13
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  mb: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 15
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
  type: "text",
  placeholder: "Your name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 17
  }
})), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  mb: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 15
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
  type: "email",
  placeholder: "Your email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 17
  }
})), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
  width: "100%",
  type: "submit",
  borderRadius: 10,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 15
  }
}, "Get Started!!")))))));

/* harmony default export */ __webpack_exports__["default"] = (CTA);

/***/ }),

/***/ "./src/sections/landing1/Clients.js":
/*!******************************************!*\
  !*** ./src/sections/landing1/Clients.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Core */ "./src/components/Core/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _assets_image_png_l1_brand1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/png/l1-brand1.png */ "./src/assets/image/png/l1-brand1.png");
/* harmony import */ var _assets_image_png_l1_brand1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_l1_brand1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_png_l1_brand2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/png/l1-brand2.png */ "./src/assets/image/png/l1-brand2.png");
/* harmony import */ var _assets_image_png_l1_brand2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_l1_brand2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_png_l1_brand3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/png/l1-brand3.png */ "./src/assets/image/png/l1-brand3.png");
/* harmony import */ var _assets_image_png_l1_brand3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_l1_brand3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_png_l1_brand4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/png/l1-brand4.png */ "./src/assets/image/png/l1-brand4.png");
/* harmony import */ var _assets_image_png_l1_brand4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_l1_brand4_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_png_l1_brand5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/image/png/l1-brand5.png */ "./src/assets/image/png/l1-brand5.png");
/* harmony import */ var _assets_image_png_l1_brand5_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_l1_brand5_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_png_image_8_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/image/png/image-8.png */ "./src/assets/image/png/image-8.png");
/* harmony import */ var _assets_image_png_image_8_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_image_8_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_image_png_image_9_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/image/png/image-9.png */ "./src/assets/image/png/image-9.png");
/* harmony import */ var _assets_image_png_image_9_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_image_9_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_png_image_10_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/image/png/image-10.png */ "./src/assets/image/png/image-10.png");
/* harmony import */ var _assets_image_png_image_10_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_image_10_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_png_image_11_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/image/png/image-11.png */ "./src/assets/image/png/image-11.png");
/* harmony import */ var _assets_image_png_image_11_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_image_11_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_png_image_12_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/image/png/image-12.png */ "./src/assets/image/png/image-12.png");
/* harmony import */ var _assets_image_png_image_12_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_image_12_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_png_image_13_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/image/png/image-13.png */ "./src/assets/image/png/image-13.png");
/* harmony import */ var _assets_image_png_image_13_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_image_13_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_image_png_image_14_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/image/png/image-14.png */ "./src/assets/image/png/image-14.png");
/* harmony import */ var _assets_image_png_image_14_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_image_14_png__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\sections\\landing1\\Clients.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "Clients__TitleContainer",
  componentId: "sc-1upuqk-0"
})(["position:relative;&:after{content:\"\";height:1px;top:50%;width:32%;background:", ";margin-top:0.5px;display:none;@media ", "{width:40%;display:block;}@media ", "{width:52%;}@media ", "{width:60%;}}"], ({
  theme
}) => theme.colors.border, _utils__WEBPACK_IMPORTED_MODULE_4__["device"].md, _utils__WEBPACK_IMPORTED_MODULE_4__["device"].lg, _utils__WEBPACK_IMPORTED_MODULE_4__["device"].xl);
const Brand = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "Clients__Brand",
  componentId: "sc-1upuqk-1"
})(["opacity:0.7;transition:all 0.3s ease-out;&:hover{opacity:1;}"]);

const Clients = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  pb: "30px",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }
}, __jsx(CustomText, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }
}, "Our Partners"), __jsx(Carousel, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }
}, __jsx(Brand, {
  className: "",
  py: 3,
  mx: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }
}, __jsx("img", {
  src: _assets_image_png_image_8_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 13
  }
})), __jsx(Brand, {
  className: "",
  py: 3,
  mx: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 11
  }
}, __jsx("img", {
  src: _assets_image_png_image_9_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 13
  }
})), __jsx(Brand, {
  className: "",
  py: 3,
  mx: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 11
  }
}, __jsx("img", {
  src: _assets_image_png_image_10_png__WEBPACK_IMPORTED_MODULE_12___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 13
  }
})), __jsx(Brand, {
  className: "",
  py: 3,
  mx: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 11
  }
}, __jsx("img", {
  src: _assets_image_png_image_11_png__WEBPACK_IMPORTED_MODULE_13___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 13
  }
})), __jsx(Brand, {
  className: "",
  py: 3,
  mx: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 11
  }
}, __jsx("img", {
  src: _assets_image_png_image_12_png__WEBPACK_IMPORTED_MODULE_14___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 13
  }
})), __jsx(Brand, {
  className: "",
  py: 3,
  mx: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 11
  }
}, __jsx("img", {
  src: _assets_image_png_image_13_png__WEBPACK_IMPORTED_MODULE_15___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 13
  }
})))));

const CustomText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Clients__CustomText",
  componentId: "sc-1upuqk-2"
})(["font-size:3.5em;text-align:center;"]);
const UnderLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Clients__UnderLine",
  componentId: "sc-1upuqk-3"
})(["height:5px;width:500px;margin:0 auto;border-bottom:0.15em solid grey;margin-bottom:3em;margin-top:1em;"]);
const Carousel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Clients__Carousel",
  componentId: "sc-1upuqk-4"
})(["display:flex;flex-direction:row;"]);
/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ }),

/***/ "./src/sections/landing1/Content1.js":
/*!*******************************************!*\
  !*** ./src/sections/landing1/Content1.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Core */ "./src/components/Core/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _assets_image_png_content_img1_mobile_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/png/content-img1--mobile.webp */ "./src/assets/image/png/content-img1--mobile.webp");
/* harmony import */ var _assets_image_png_content_img1_mobile_webp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_content_img1_mobile_webp__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\sections\\landing1\\Content1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ShapeCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "Content1__ShapeCard",
  componentId: "sc-73zc7p-0"
})(["width:305px;box-shadow:0 32px 34px rgba(28,27,32,0.2);position:absolute;top:52%;left:0%;transform:scale(0.85);@media ", "{left:0;transform:scale(1);}@media ", "{left:0%;}"], _utils__WEBPACK_IMPORTED_MODULE_4__["device"].sm, _utils__WEBPACK_IMPORTED_MODULE_4__["device"].md);

const Content1 = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Section"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  className: "align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "12",
  lg: "6",
  className: "order-lg-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "position-relative pl-lg-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "pl-lg-4 text-center text-lg-right",
  "data-aos": "fade-down",
  "data-aos-duration": "750",
  "data-aos-once": "true",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 15
  }
}, __jsx("img", {
  src: _assets_image_png_content_img1_mobile_webp__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 17
  }
})), __jsx(ShapeCard, {
  bg: "warning",
  p: "18px",
  borderRadius: 8,
  className: "d-flex align-items-start",
  "data-aos": "fade-right",
  "data-aos-duration": "750",
  "data-aos-once": "true",
  "data-aos-delay": "500",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 15
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  width: "30px",
  minWidth: "30px",
  height: "30px",
  minHeight: "30px",
  bg: "secondary",
  color: "light",
  borderRadius: "50%",
  className: "d-flex align-items-center justify-content-center",
  mr: 3,
  mt: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 17
  }
}, __jsx("i", {
  className: "fas fa-bell",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 19
  }
})), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  pr: "40px",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 17
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
  fontSize: 1,
  lineHeight: "24px",
  opacity: 0.7,
  mb: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 19
  }
}, "Next meeting on 30 mins"), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Title"], {
  variant: "card",
  fontWeight: 300,
  mb: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 19
  }
}, "Project Discussion with John"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "6",
  className: "order-lg-1 mt-5 mt-lg-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 11
  }
}, __jsx("div", {
  "data-aos": "fade-right",
  "data-aos-duration": "750",
  "data-aos-once": "true",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 13
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 15
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Title"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 17
  }
}, "Save time on development."), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
  mb: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 17
  }
}, "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding."), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
  mt: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 17
  }
}, "Get Started!!!"))))))));

/* harmony default export */ __webpack_exports__["default"] = (Content1);

/***/ }),

/***/ "./src/sections/landing1/Content2.js":
/*!*******************************************!*\
  !*** ./src/sections/landing1/Content2.js ***!
  \*******************************************/
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
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Core */ "./src/components/Core/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _assets_image_svg_l1_curve_content2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/svg/l1-curve-content2.svg */ "./src/assets/image/svg/l1-curve-content2.svg");
/* harmony import */ var _assets_image_svg_l1_curve_content2_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_svg_l1_curve_content2_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_png_content_img2_mobile_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/png/content-img2--mobile.webp */ "./src/assets/image/png/content-img2--mobile.webp");
/* harmony import */ var _assets_image_png_content_img2_mobile_webp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_content_img2_mobile_webp__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\sections\\landing1\\Content2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const ShapeTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"]).withConfig({
  displayName: "Content2__ShapeTop",
  componentId: "sc-1tykk1b-0"
})(["position:absolute;top:0;left:-150px;img{min-width:100%;}"]);
const ShapeCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"]).withConfig({
  displayName: "Content2__ShapeCard",
  componentId: "sc-1tykk1b-1"
})(["width:305px;box-shadow:", ";position:absolute;top:20%;left:0;z-index:2;transform:scale(0.85);@media ", "{transform:scale(1);left:-14%;}"], ({
  theme
}) => `0 32px 34px ${theme.colors.border}`, _utils__WEBPACK_IMPORTED_MODULE_5__["device"].sm);

var _StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"]).withConfig({
  displayName: "Content2___StyledBox",
  componentId: "sc-1tykk1b-2"
})(["min-width:100%;width:100%;@media ", "{width:360px;min-width:360px;}"], p => p._css);

var _StyledBox2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"]).withConfig({
  displayName: "Content2___StyledBox2",
  componentId: "sc-1tykk1b-3"
})(["background-color:", ";"], ({
  theme,
  color
}) => Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])(theme.colors[color], 0.1));

const ContentCard = (_ref) => {
  let {
    color = "primary",
    className,
    iconName,
    title,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["color", "className", "iconName", "title", "children"]);

  return __jsx(_StyledBox, _extends({
    width: 360,
    bg: "light",
    border: "1px solid",
    borderColor: "border",
    p: "20px",
    borderRadius: 10,
    className: `d-flex ${className}`
  }, rest, {
    _css: _utils__WEBPACK_IMPORTED_MODULE_5__["device"].sm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }), __jsx(_StyledBox2, {
    size: 55,
    minWidth: 55,
    borderRadius: "50%",
    color: color,
    fontSize: "28px",
    className: "d-flex justify-content-center align-items-center",
    mr: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("i", {
    className: `icon ${iconName}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    variant: "card",
    mb: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, title), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, children)));
};

const Content2 = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Section"], {
  bg: "#f7f7fb",
  className: "position-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }
}, __jsx(ShapeTop, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 7
  }
}, __jsx("img", {
  src: _assets_image_svg_l1_curve_content2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 9
  }
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 7
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  className: "align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 9
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "5",
  md: "9",
  sm: "10",
  className: "mb-5 mb-lg-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "position-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 13
  }
}, __jsx("div", {
  "data-aos": "fade-down",
  "data-aos-duration": "750",
  "data-aos-once": "true",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 15
  }
}, __jsx("img", {
  src: _assets_image_png_content_img2_mobile_webp__WEBPACK_IMPORTED_MODULE_7___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 17
  }
})), __jsx(ShapeCard, {
  bg: "primary",
  p: "18px",
  borderRadius: 8,
  className: "d-flex align-items-start",
  "data-aos": "fade-right",
  "data-aos-duration": "750",
  "data-aos-once": "true",
  "data-aos-delay": "500",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 15
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
  width: "30px",
  minWidth: "30px",
  height: "30px",
  minHeight: "30px",
  bg: "secondary",
  color: "light",
  borderRadius: "50%",
  className: "d-flex align-items-center justify-content-center",
  mr: 3,
  mt: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 17
  }
}, __jsx("i", {
  className: "fas fa-bell",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 19
  }
})), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
  pr: "40px",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 17
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
  color: "light",
  lineHeight: "24px",
  fontSize: 1,
  opacity: 0.7,
  mb: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 19
  }
}, "Deadline: Oct 29, 2020"), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Title"], {
  variant: "card",
  color: "light",
  fontWeight: 300,
  mb: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 172,
    columnNumber: 19
  }
}, "You\u2019ve got a new project from David!"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "7",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 11
  }
}, __jsx("div", {
  "data-aos": "fade-left",
  "data-aos-duration": "750",
  "data-aos-once": "true",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "content-text pl-lg--50",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "section-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 17
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Title"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 19
  }
}, "It\u2019s everything you\u2019ll ", __jsx("br", {
  className: "d-none d-sm-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188,
    columnNumber: 44
  }
}), " ", "ever need."), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
  mb: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 19
  }
}, "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.")), __jsx("div", {
  className: "mt-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 17
  }
}, __jsx(ContentCard, {
  title: "50+ Unique Design Blocks",
  color: "primary",
  iconName: "icon-cards-2",
  mb: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198,
    columnNumber: 19
  }
}, "with Carefully Coded"), __jsx(ContentCard, {
  title: "Mobile First Design\n",
  color: "secondary",
  iconName: "icon-phone-charging-3-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206,
    columnNumber: 19
  }
}, "on Every Devices")))))))));

/* harmony default export */ __webpack_exports__["default"] = (Content2);

/***/ }),

/***/ "./src/sections/landing1/Feature.js":
/*!******************************************!*\
  !*** ./src/sections/landing1/Feature.js ***!
  \******************************************/
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Core */ "./src/components/Core/index.js");
/* harmony import */ var _assets_image_png_l1_feature_oval_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/png/l1-feature-oval.png */ "./src/assets/image/png/l1-feature-oval.png");
/* harmony import */ var _assets_image_png_l1_feature_oval_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_l1_feature_oval_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_svg_l1_curve_feature_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/svg/l1-curve-feature.svg */ "./src/assets/image/svg/l1-curve-feature.svg");
/* harmony import */ var _assets_image_svg_l1_curve_feature_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_svg_l1_curve_feature_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_png_cctv_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/png/cctv-1.png */ "./src/assets/image/png/cctv-1.png");
/* harmony import */ var _assets_image_png_cctv_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_cctv_1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_png_cctv_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/png/cctv-4.png */ "./src/assets/image/png/cctv-4.png");
/* harmony import */ var _assets_image_png_cctv_4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_cctv_4_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_png_fence_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/image/png/fence.png */ "./src/assets/image/png/fence.png");
/* harmony import */ var _assets_image_png_fence_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_fence_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_png_security_guard_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/image/png/security-guard.png */ "./src/assets/image/png/security-guard.png");
/* harmony import */ var _assets_image_png_security_guard_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_security_guard_png__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\sections\\landing1\\Feature.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const ShapeTopRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"]).withConfig({
  displayName: "Feature__ShapeTopRight",
  componentId: "rjo1tu-0"
})(["position:absolute;top:0;right:0px;"]);
const ShapeBottmRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"]).withConfig({
  displayName: "Feature__ShapeBottmRight",
  componentId: "rjo1tu-1"
})(["position:absolute;bottom:-10px;left:0;width:100%;img{min-width:100%;}"]);
{
  /* Custom Components (not included with the base asset) */
}
const CardIconImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Feature__CardIconImage",
  componentId: "rjo1tu-2"
})(["max-width:3em;margin-left:0.5em;"]);
const TextSizeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Feature__TextSizeWrapper",
  componentId: "rjo1tu-3"
})(["height:9em;"]);

const FeatureCard = (_ref) => {
  let {
    color = "primary",
    iconName,
    title,
    children,
    srcImage
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["color", "iconName", "title", "children", "srcImage"]);

  return __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"], _extends({
    bg: "light",
    py: "25px",
    px: "30px",
    borderRadius: 10,
    mb: 4
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 3
    }
  }), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    size: 69,
    borderRadius: "50%",
    color: color,
    fontSize: "28px",
    className: "d-flex justify-content-center align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(CardIconImage, {
    src: srcImage,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 10
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    color: "heading",
    as: "h3",
    fontSize: 4,
    fontWeight: 500,
    letterSpacing: -0.75,
    my: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, title), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    fontSize: 2,
    lineHeight: 1.75,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, children)));
};

const Feature = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Section"], {
  bg: "secondary",
  className: "position-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }
}, __jsx(ShapeTopRight, {
  "data-aos": "fade-left",
  "data-aos-duration": "750",
  "data-aos-once": "true",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 7
  }
}, __jsx("img", {
  src: _assets_image_png_l1_feature_oval_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 9
  }
})), __jsx(ShapeBottmRight, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 7
  }
}, __jsx("img", {
  src: _assets_image_svg_l1_curve_feature_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  alt: "",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 7
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  className: "align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  lg: "6",
  className: "pl-lg-5 order-lg-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "feature-content section-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 13
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Title"], {
  color: "light",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 15
  }
}, "Security"), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
  color: "light",
  opacity: 0.7,
  mb: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 15
  }
}, "At all of Park Bird's locations, security is of the highest priority. We ensure that you and your cargo remains safe during your parking with us."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  lg: "6",
  className: "order-lg-1 mt-5 mt-lg-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 11
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 13
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  md: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 15
  }
}, __jsx(FeatureCard, {
  color: "primary",
  iconName: "icon-layout-11",
  title: "Plate Scanner",
  srcImage: _assets_image_png_cctv_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 17
  }
}, __jsx(TextSizeWrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 20
  }
}, "Our cameras will scan your license plate, and if you have booked a parking space, you will be granted access."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  md: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 15
  }
}, __jsx(FeatureCard, {
  color: "warning",
  iconName: "icon-sidebar-2",
  title: "Cameras",
  srcImage: _assets_image_png_cctv_4_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 17
  }
}, __jsx(TextSizeWrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 19
  }
}, "Our cameras cover and survey the entire parking area, guaranteeing your security."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  md: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 15
  }
}, __jsx(FeatureCard, {
  color: "secondary",
  iconName: "icon-bookmark-2-2",
  title: "Fences and Gates",
  srcImage: _assets_image_png_fence_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 17
  }
}, __jsx(TextSizeWrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 19
  }
}, "The perimeters of our locations are protected by fences and gates."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  md: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 15
  }
}, __jsx(FeatureCard, {
  color: "ash",
  iconName: "icon-chat-45-2",
  title: "Guards",
  srcImage: _assets_image_png_security_guard_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 17
  }
}, __jsx(TextSizeWrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 19
  }
}, "Our profesional guards routinely patrol the parking areas, ensuring that you and your cargo remains safe.")))))))));

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ "./src/sections/landing1/Hero.js":
/*!***************************************!*\
  !*** ./src/sections/landing1/Hero.js ***!
  \***************************************/
/*! exports provided: Hero, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Core */ "./src/components/Core/index.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _assets_image_svg_hero_shape_svg_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/svg/hero-shape-svg.svg */ "./src/assets/image/svg/hero-shape-svg.svg");
/* harmony import */ var _assets_image_svg_hero_shape_svg_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_svg_hero_shape_svg_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_png_iphonex1_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/png/iphonex1.svg */ "./src/assets/image/png/iphonex1.svg");
/* harmony import */ var _assets_image_png_iphonex1_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_iphonex1_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_png_google_play_badge_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/image/png/google-play-badge.png */ "./src/assets/image/png/google-play-badge.png");
/* harmony import */ var _assets_image_png_google_play_badge_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_google_play_badge_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_png_appleStoreButtonImage_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/image/png/appleStoreButtonImage.png */ "./src/assets/image/png/appleStoreButtonImage.png");
/* harmony import */ var _assets_image_png_appleStoreButtonImage_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_appleStoreButtonImage_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\sections\\landing1\\Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













{
  /*
  NOTE:
  'TextTransition' and 'presets' must be
  imported this way in order to circumvent
  server side rendering enforce by Next.js
  */
}
const TextTransition = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-text-transition */ "react-text-transition", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-text-transition */ "react-text-transition")],
    modules: ["react-text-transition"]
  }
});
const {
  presets
} = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-text-transition */ "react-text-transition", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-text-transition */ "react-text-transition")],
    modules: ["react-text-transition"]
  }
});
{
  /* Components from asset pack */
}
const ShapeTopLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__ShapeTopLeft",
  componentId: "sc-1q5bwx3-0"
})(["position:absolute;left:0;top:0;transform:translate(-50%,-50%);"]);
const TopCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"]).withConfig({
  displayName: "Hero__TopCard",
  componentId: "sc-1q5bwx3-1"
})(["width:305px;box-shadow:", ";position:absolute;top:14%;left:0;@media ", "{left:-13%;}@media ", "{left:2%;}"], ({
  theme
}) => `0 32px 34px ${theme.colors.shadow}`, _utils__WEBPACK_IMPORTED_MODULE_6__["device"].md, _utils__WEBPACK_IMPORTED_MODULE_6__["device"].lg);
const BottomCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"]).withConfig({
  displayName: "Hero__BottomCard",
  componentId: "sc-1q5bwx3-2"
})(["width:305px;box-shadow:", ";position:absolute;bottom:12%;right:0;@media ", "{right:-13%;}@media ", "{right:-5%;}@media ", "{right:-33%;}"], ({
  theme
}) => `0 32px 34px ${theme.colors.shadow}`, _utils__WEBPACK_IMPORTED_MODULE_6__["device"].md, _utils__WEBPACK_IMPORTED_MODULE_6__["device"].lg, _utils__WEBPACK_IMPORTED_MODULE_6__["device"].xl);
const ImgRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Hero__ImgRight",
  componentId: "sc-1q5bwx3-3"
})(["max-width:50%;@media ", "{max-width:60%;}@media ", "{max-width:100%;}"], _utils__WEBPACK_IMPORTED_MODULE_6__["device"].sm, _utils__WEBPACK_IMPORTED_MODULE_6__["device"].lg);
{
  /* Custom Components (not included with the base asset) */
}
const GoogleStoreButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Hero__GoogleStoreButton",
  componentId: "sc-1q5bwx3-4"
})(["max-width:15em;@media ", "{max-width:60em;}@media ", "{max-width:15em;}"], _utils__WEBPACK_IMPORTED_MODULE_6__["device"].sm, _utils__WEBPACK_IMPORTED_MODULE_6__["device"].lg);
const AppleStoreButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Hero__AppleStoreButton",
  componentId: "sc-1q5bwx3-5"
})(["max-width:12.5em;@media ", "{max-width:50em;}@media ", "{max-width:12.5em;}"], _utils__WEBPACK_IMPORTED_MODULE_6__["device"].sm, _utils__WEBPACK_IMPORTED_MODULE_6__["device"].lg);
const HorizontalButtonPanel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HorizontalButtonPanel",
  componentId: "sc-1q5bwx3-6"
})(["display:flex;flex-direction:row;align-items:center;"]);
{
  /* Messages for the animated text sequence */
}
const animatedMessages = ["Fines", "Expensive parking", "No parking spaces", "Unsecure parking"];
{
  /* Main Screen Logic */
}
const Hero = () => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  {
    /* App Download button click listeners */
  }

  const onAppleStoreButtonClicked = () => {
    console.log('Apple Store button clicked!');
  };

  const onGooglePlayStoreButtonClicked = () => {
    console.log('Google Play Store button clicked!');
  };

  {
    /* State/Hooks for animated text component */
  }
  const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const intervalId = setInterval(() => setIndex(index => index + 1), 2500 // every 2.5 seconds
    );
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    className: "position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "pt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }), __jsx(ShapeTopLeft, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _assets_image_svg_hero_shape_svg_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-center align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "5",
    md: "8",
    sm: "9",
    className: "order-lg-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center text-lg-right position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "img-main",
    "data-aos": "fade-down",
    "data-aos-duration": "750",
    "data-aos-once": "true",
    "data-aos-delay": "500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx(ImgRight, {
    src: _assets_image_png_iphonex1_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 19
    }
  })), __jsx(TopCard, {
    bg: "secondary",
    p: "18px",
    borderRadius: 8,
    className: "d-flex align-items-center",
    "data-aos": "fade-right",
    "data-aos-duration": "750",
    "data-aos-once": "true",
    "data-aos-delay": "1000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    width: "30px",
    minWidth: "30px",
    height: "30px",
    minHeight: "30px",
    bg: "warning",
    color: "light",
    borderRadius: "50%",
    className: "d-flex align-items-center justify-content-center",
    mr: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon icon-check-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  })), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    color: "light",
    fontSize: 2,
    lineHeight: "1.25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, "You have successfully logged in")), __jsx(BottomCard, {
    bg: "warning",
    p: "18px",
    borderRadius: 8,
    className: "d-flex align-items-center text-left",
    "data-aos": "fade-left",
    "data-aos-duration": "750",
    "data-aos-once": "true",
    "data-aos-delay": "1000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    width: "30px",
    minWidth: "30px",
    height: "30px",
    minHeight: "30px",
    bg: "secondary",
    color: "light",
    borderRadius: "50%",
    className: "d-flex align-items-center justify-content-center",
    mr: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon icon-check-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 21
    }
  })), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    color: "dark",
    fontSize: 2,
    lineHeight: "1.25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 19
    }
  }, "Booking Successful!")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "7",
    className: "order-lg-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, __jsx("div", {
    "data-aos": "fade-right",
    "data-aos-duration": "750",
    "data-aos-once": "true",
    "data-aos-delay": "500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    py: [null, null, null, 5],
    pr: 5,
    pt: [4, null],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    variant: "hero",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 19
    }
  }, "Say goodbye to"), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 19
    }
  }, __jsx(TextTransition, {
    style: {
      fontSize: '1.5em',
      color: '#387BA0'
    },
    text: animatedMessages[index % animatedMessages.length],
    springConfig: presets,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  })), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    mb: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 19
    }
  }, "Parkbird is your alternative to crowded rest-areas. Want to get a good night\u2019s sleep in a safe, fenced off area? Look no further! Parkbird is platform supplying trucks with parking spots. Search for a place to experience premium overnight parking today."), __jsx(HorizontalButtonPanel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 19
    }
  }, __jsx(GoogleStoreButton, {
    onClick: () => onGooglePlayStoreButtonClicked(),
    src: _assets_image_png_google_play_badge_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 22
    }
  }), __jsx(AppleStoreButton, {
    onClick: () => onAppleStoreButtonClicked(),
    src: _assets_image_png_appleStoreButtonImage_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 22
    }
  })))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/sections/landing1/Testimonial.js":
/*!**********************************************!*\
  !*** ./src/sections/landing1/Testimonial.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Core */ "./src/components/Core/index.js");
/* harmony import */ var _assets_image_jpeg_l1_customer1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/jpeg/l1-customer1.jpg */ "./src/assets/image/jpeg/l1-customer1.jpg");
/* harmony import */ var _assets_image_jpeg_l1_customer1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_jpeg_l1_customer1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_jpeg_l1_customer2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/jpeg/l1-customer2.jpg */ "./src/assets/image/jpeg/l1-customer2.jpg");
/* harmony import */ var _assets_image_jpeg_l1_customer2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_jpeg_l1_customer2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_jpeg_l1_customer3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/jpeg/l1-customer3.jpg */ "./src/assets/image/jpeg/l1-customer3.jpg");
/* harmony import */ var _assets_image_jpeg_l1_customer3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_jpeg_l1_customer3_jpg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Park-Bird-Landing-Page-Web-App\\src\\sections\\landing1\\Testimonial.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const ContentCard = (_ref) => {
  let {
    className,
    image,
    name,
    company,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "image", "name", "company", "children"]);

  return __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Box"], _extends({
    bg: "light",
    border: "1px solid",
    borderColor: "border",
    p: "25px",
    borderRadius: 10,
    className: `${className}`
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: `d-flex justify-content-between`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "d-flex justify-content-center align-items-start",
    mr: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: image,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "flex-grow-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    variant: "card",
    mb: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, name), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, company)), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["A"], {
    href: "#",
    fontSize: "27px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Span"], {
    color: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fab fa-twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  })))), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    color: "dark",
    mt: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, children));
};

const Testimonial = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Section"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 7
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  pb: [4, null, null, 5],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "justify-content-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 11
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "7",
  xl: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "section-title text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 15
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Title"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 17
  }
}, "Customers are ", __jsx("br", {
  className: "d-none d-md-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 33
  }
}), " loving Omega"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "justify-content-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6",
  lg: "4",
  className: "mb-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 11
  }
}, __jsx(ContentCard, {
  name: "Jonathan Taylor",
  company: "CEO at Creativex",
  image: _assets_image_jpeg_l1_customer1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 13
  }
}, "OMG! I cannot believe that I have got a brand new landing page after getting", " ", __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["A"], {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 15
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Span"], {
  color: "secondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 17
  }
}, " @Omega")), "...")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6",
  lg: "4",
  className: "mb-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 11
  }
}, __jsx(ContentCard, {
  name: "Gavin Park",
  company: "CEO at Orbital",
  image: _assets_image_jpeg_l1_customer2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 13
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["A"], {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 15
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Span"], {
  color: "secondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 17
  }
}, " @Omega")), " ", "is great for creating landing pages within minutes! It actually takes less time\u2026")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6",
  lg: "4",
  className: "mb-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 11
  }
}, __jsx(ContentCard, {
  name: "Betty Norton",
  company: "Freelance Designer",
  image: _assets_image_jpeg_l1_customer3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 13
  }
}, "Whenever I need to create a new landing page for clients,", " ", __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["A"], {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 15
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Span"], {
  color: "secondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 17
  }
}, " @Omega")), " ", "is my solution\u2026")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xs: "12",
  className: "text-center mt-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 11
  }
}, __jsx("div", {
  "data-aos": "fade-up",
  "data-aos-duration": "800",
  "data-aos-once": "true",
  "data-aos-delay": "500",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 13
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["A"], {
  href: "",
  fontSize: 2,
  fontWeight: 500,
  className: "d-inline-flex align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 15
  }
}, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_2__["Span"], {
  color: "secondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 17
  }
}, __jsx("i", {
  className: "fas fa-comment-alt mr-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 19
  }
}), __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 19
  }
}, "See all testimonials")))))))));

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

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

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Will\Desktop\Web Projects\Park-Bird-Landing-Page-Web-App\src\pages\index.js */"./src/pages/index.js");


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

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

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-text-transition":
/*!****************************************!*\
  !*** external "react-text-transition" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-text-transition");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9qcGVnL2wxLWN1c3RvbWVyMS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9qcGVnL2wxLWN1c3RvbWVyMi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9qcGVnL2wxLWN1c3RvbWVyMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9wbmcvYXBwbGVTdG9yZUJ1dHRvbkltYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9jY3R2LTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvcG5nL2NjdHYtNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9wbmcvY29udGVudC1pbWcxLS1tb2JpbGUud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9jb250ZW50LWltZzItLW1vYmlsZS53ZWJwIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvcG5nL2ZlbmNlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9nb29nbGUtcGxheS1iYWRnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9wbmcvaW1hZ2UtMTAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvcG5nL2ltYWdlLTExLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9pbWFnZS0xMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9wbmcvaW1hZ2UtMTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvcG5nL2ltYWdlLTE0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9pbWFnZS04LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9pbWFnZS05LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9pcGhvbmV4MS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9wbmcvbDEtYnJhbmQxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9sMS1icmFuZDIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvcG5nL2wxLWJyYW5kMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9wbmcvbDEtYnJhbmQ0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9sMS1icmFuZDUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvcG5nL2wxLWN0YS1vdmFsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3BuZy9sMS1mZWF0dXJlLW92YWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvcG5nL3NlY3VyaXR5LWd1YXJkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3N2Zy9oZXJvLXNoYXBlLXN2Zy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9zdmcvbDEtY3VydmUtY29udGVudDIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2Uvc3ZnL2wxLWN1cnZlLWN0YS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9zdmcvbDEtY3VydmUtZmVhdHVyZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9BLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvQmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9Cb3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvSW5wdXRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvU2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvU3Bhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL1N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhZ2VXcmFwcGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L0dsb2JhbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9sYW5kaW5nMS9DVEEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2xhbmRpbmcxL0NsaWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2xhbmRpbmcxL0NvbnRlbnQxLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9sYW5kaW5nMS9Db250ZW50Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvbGFuZGluZzEvRmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvbGFuZGluZzEvSGVyby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvbGFuZGluZzEvVGVzdGltb25pYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2FkZERheXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2JyZWFrcG9pbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9saXNoZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRleHQtdHJhbnNpdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLXN5c3RlbVwiIl0sIm5hbWVzIjpbIlBhcmFncmFwaCIsInN0eWxlZCIsImEiLCJjb2xvciIsInNwYWNlIiwidHlwb2dyYXBoeSIsInNoYWRvdyIsIkEiLCJocmVmIiwicHJvcHMiLCJCYWRnZVNvbGlkIiwic3BhbiIsImJhY2tncm91bmQiLCJib3JkZXIiLCJmbGV4Ym94IiwibGF5b3V0IiwiQmFkZ2UiLCJiZyIsInJlc3QiLCJCb3giLCJkaXYiLCJncmlkIiwicG9zaXRpb24iLCJCdXR0b25Tb2xpZCIsImJ1dHRvbiIsIkJ1dHRvbk91dGxpbmUiLCJ0aGVtZSIsImNvbG9ycyIsImRhcmsiLCJCdXR0b24iLCJ2YXJpYW50IiwiQ2hlY2tTdHlsZWQiLCJsYWJlbCIsInNlY29uZGFyeSIsIkNoZWNrIiwiVGV4dCIsInAiLCJ0ZXh0IiwiQ2hlY2tib3giLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJ1SUQiLCJJbnB1dFNvbGlkIiwiaW5wdXQiLCJmb2N1c0NvbG9yIiwiSW5wdXRBbmltYXRpb24iLCJsaWdodCIsImRhcmtTaGFkZSIsIklucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiSW5wdXRHcm91cFN0eWxlZCIsIkljb24iLCJyZ2JhIiwiSW5wdXRHcm91cCIsImljb24iLCJMaXN0IiwidWwiLCJTZWN0aW9uIiwiZGVmYXVsdE9wdGlvbnMiLCJ2YWx1ZSIsImdldEN1c3RvbVN0eWxlcyIsIm9wdGlvbiIsInByb3ZpZGVkIiwic3RhdGUiLCJpc1NlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwid2hpdGUiLCJjb250cm9sIiwibWVudUlzT3BlbiIsImlzRm9jdXNlZCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJvdXRsaW5lIiwiYm94U2hhZG93IiwiU2VsZWN0U3R5bGVkIiwibmFtZSIsIm9wdGlvbnMiLCJ3aXRoVGhlbWUiLCJTcGFuU3R5bGVkIiwiU3BhbiIsIlN3aXRjaFN0eWxlZCIsImFjdGl2ZSIsIlJvdW5kIiwiU3dpdGNoIiwic2V0QWN0aXZlIiwidXNlU3RhdGUiLCJoYW5kbGVTd2l0Y2giLCJQYXJhZ3JhcGhTbWFsbCIsIlRleHRSZW5kZXIiLCJTZWN0aW9uVGl0bGUiLCJoMiIsImRldmljZSIsInNtIiwibGciLCJIZXJvVGl0bGUiLCJ4bCIsIkNhcmRUaXRsZSIsImg0IiwiVGl0bGUiLCJUaXRsZVN0eWxlZCIsIlBhZ2VXcmFwcGVyIiwiaGVhZGVyRGFyayIsImZvb3RlckRhcmsiLCJnQ29udGV4dCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwidXNlRWZmZWN0IiwiZ29IZWFkZXJEYXJrIiwiZ29IZWFkZXJMaWdodCIsImdvRm9vdGVyRGFyayIsImdvRm9vdGVyTGlnaHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJHbG9iYWxQcm92aWRlciIsInRoZW1lRGFyayIsInNldFRoZW1lRGFyayIsInZpZGVvTW9kYWxWaXNpYmxlIiwic2V0VmlkZW9Nb2RhbFZpc2libGUiLCJ2aXNpYmxlT2ZmQ2FudmFzIiwic2V0VmlzaWJsZU9mZkNhbnZhcyIsInNldEhlYWRlckRhcmsiLCJzZXRGb290ZXJEYXJrIiwiY2FydFRvdGFsIiwic2V0Q2FydFRvdGFsIiwidG9nZ2xlVGhlbWUiLCJ0b2dnbGVWaWRlb01vZGFsIiwidG9nZ2xlT2ZmQ2FudmFzIiwiaW5jQ2FydFRvdGFsIiwiZGVjQ2FydFRvdGFsIiwiSW5kZXhQYWdlIiwiTGVmdENhcmQiLCJSaWdodENhcmQiLCJDVEEiLCJpbWdPdmFsIiwic3ZnQ3VydmUiLCJUaXRsZUNvbnRhaW5lciIsIm1kIiwiQnJhbmQiLCJDbGllbnRzIiwiaW1hZ2U4IiwiaW1hZ2U5IiwiaW1hZ2UxMCIsImltYWdlMTEiLCJpbWFnZTEyIiwiaW1hZ2UxMyIsIkN1c3RvbVRleHQiLCJoMSIsIlVuZGVyTGluZSIsIkNhcm91c2VsIiwiU2hhcGVDYXJkIiwiQ29udGVudDEiLCJpbWdDb250ZW50TW9iaWxlIiwiU2hhcGVUb3AiLCJDb250ZW50Q2FyZCIsImNsYXNzTmFtZSIsImljb25OYW1lIiwidGl0bGUiLCJDb250ZW50MiIsIlNoYXBlVG9wUmlnaHQiLCJTaGFwZUJvdHRtUmlnaHQiLCJDYXJkSWNvbkltYWdlIiwiaW1nIiwiVGV4dFNpemVXcmFwcGVyIiwiRmVhdHVyZUNhcmQiLCJzcmNJbWFnZSIsIkZlYXR1cmUiLCJpbWdMMUZlYXR1cmVPdmFsIiwiaW1nTDFGZWF0dXJlQ3VydmUiLCJjY3R2MSIsImNjdHY0IiwiZmVuY2UiLCJzZWN1cml0eUd1YXJkIiwiVGV4dFRyYW5zaXRpb24iLCJkeW5hbWljIiwic3NyIiwicHJlc2V0cyIsIlNoYXBlVG9wTGVmdCIsIlRvcENhcmQiLCJCb3R0b21DYXJkIiwiSW1nUmlnaHQiLCJHb29nbGVTdG9yZUJ1dHRvbiIsIkFwcGxlU3RvcmVCdXR0b24iLCJIb3Jpem9udGFsQnV0dG9uUGFuZWwiLCJhbmltYXRlZE1lc3NhZ2VzIiwiSGVybyIsIm9uQXBwbGVTdG9yZUJ1dHRvbkNsaWNrZWQiLCJjb25zb2xlIiwibG9nIiwib25Hb29nbGVQbGF5U3RvcmVCdXR0b25DbGlja2VkIiwiaW5kZXgiLCJzZXRJbmRleCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInN2Z0hlcm9TaGFwZSIsImlwaG9uZXgxIiwiZm9udFNpemUiLCJsZW5ndGgiLCJnb29nbGVQbGF5QmFkZ2UiLCJhcHBsZVN0b3JlQnV0dG9uSW1hZ2UiLCJpbWFnZSIsImNvbXBhbnkiLCJUZXN0aW1vbmlhbCIsImltZ0N1c3RvbWVyMSIsImltZ0N1c3RvbWVyMiIsImltZ0N1c3RvbWVyMyIsImFkZERheXMiLCJkYXlzIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImJyZWFrcG9pbnRzIiwiZGVmYXVsdENvbG9ycyIsInByaW1hcnkiLCJibGFjayIsInllbGxvdyIsImFzaCIsImdyZWVuIiwiaW5mbyIsImxpZ2h0U2hhZGUiLCJoZWFkaW5nIiwid2FybmluZyIsInN1Y2Nlc3MiLCJtb2RlcyIsImluaXRpYWxDb2xvck1vZGVOYW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsY0FBYztRQUNkLElBQUk7UUFDSjs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDckdBLGtDQUFrQyx3UTs7Ozs7Ozs7Ozs7QUNBbEMsa0NBQWtDLHdROzs7Ozs7Ozs7OztBQ0FsQyxrQ0FBa0Msd1E7Ozs7Ozs7Ozs7O0FDQWxDLG1HOzs7Ozs7Ozs7OztBQ0FBLG9GOzs7Ozs7Ozs7OztBQ0FBLG9GOzs7Ozs7Ozs7OztBQ0FBLGtDQUFrQyxvbEU7Ozs7Ozs7Ozs7O0FDQWxDLGtDQUFrQyxnOEQ7Ozs7Ozs7Ozs7O0FDQWxDLG1GOzs7Ozs7Ozs7OztBQ0FBLCtGOzs7Ozs7Ozs7OztBQ0FBLGlDQUFpQyxnbFY7Ozs7Ozs7Ozs7O0FDQWpDLHNGOzs7Ozs7Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLHFGOzs7Ozs7Ozs7OztBQ0FBLHFGOzs7Ozs7Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLGlDQUFpQyw0Uzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDRTOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZ1Q7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0Vjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG9TOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2tFOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZ2tEOzs7Ozs7Ozs7OztBQ0FqQyw0Rjs7Ozs7Ozs7Ozs7QUNBQSxxQ0FBcUMsZ3BCOzs7Ozs7Ozs7OztBQ0FyQyxxQ0FBcUMsNFM7Ozs7Ozs7Ozs7O0FDQXJDLHFDQUFxQyx3Uzs7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QW9CLEVBQUUsT0FEVjtBQUVadk0sUUFBTSxFQUFFQSxNQUZJO0FBR1p2QixPQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxDQUhLO0FBSVppTixhQUFXLEVBQUUsQ0FDVixHQUFFQSx3REFBVyxDQUFDeEgsRUFBRyxJQURQLEVBRVYsR0FBRXdILHdEQUFXLENBQUM1RSxFQUFHLElBRlAsRUFHVixHQUFFNEUsd0RBQVcsQ0FBQ3ZILEVBQUcsSUFIUCxFQUlWLEdBQUV1SCx3REFBVyxDQUFDckgsRUFBRyxJQUpQO0FBSkQsQ0FBZDtBQVlldEUsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwic3RhdGljXFxcXGRldmVsb3BtZW50XFxcXHBhZ2VzXFxcXGluZGV4LmpzXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcEJBTUFBQUJhVGgzRkFBQUFHMUJNVkVYTXpNeVdscGJGeGNXeHNiRyt2cjZqbzZPY25KeXFxcXEzdDdjbVpMb0pBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQVNVbEVRVlFva1dOZ0dBVkRBVEFKcUFGSlJRWTFGRkZtZ1VBZ2FjZ1FpQ0xxSXNESXJzN2l5TUNJSW1vZ3dNaVV3c3lJSmlvb3lzaVV3U2dZZ0NyS0FES0JBVjN0S0tBVkFBQzFYd1FRa21vL0h3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcEJBTUFBQUJhVGgzRkFBQUFHMUJNVkVYTXpNeVdscGJGeGNXeHNiRyt2cjZqbzZPY25KeXFxcXEzdDdjbVpMb0pBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQVNVbEVRVlFva1dOZ0dBVkRBVEFKcUFGSlJRWTFGRkZtZ1VBZ2FjZ1FpQ0xxSXNESXJzN2l5TUNJSW1vZ3dNaVV3c3lJSmlvb3lzaVV3U2dZZ0NyS0FES0JBVjN0S0tBVkFBQzFYd1FRa21vL0h3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBcEJBTUFBQUJhVGgzRkFBQUFHMUJNVkVYTXpNeVdscGJGeGNXeHNiRyt2cjZqbzZPY25KeXFxcXEzdDdjbVpMb0pBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQVNVbEVRVlFva1dOZ0dBVkRBVEFKcUFGSlJRWTFGRkZtZ1VBZ2FjZ1FpQ0xxSXNESXJzN2l5TUNJSW1vZ3dNaVV3c3lJSmlvb3lzaVV3U2dZZ0NyS0FES0JBVjN0S0tBVkFBQzFYd1FRa21vL0h3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYXBwbGVTdG9yZUJ1dHRvbkltYWdlLWM0ZDUyN2E1MmUyNTdlZTdjMjBkMDA3MGVjOWE1NTUwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jY3R2LTEtNDJjZmFkNTc0OTFhMDIzZjYyYzFhNDNkMDU0MWQ2ZTEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NjdHYtNC0xOTE2YTE1MzNjY2MxZDVhMWNlNTQzNTBiNDFkZmNkMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBWjBBQUFKYUJBTUFBQUFHOUljQUFBQUFHMUJNVkVYTXpNeVdscGFxcXFxK3ZyNmNuSnl4c2JIRnhjV2pvNk8zdDdkVGpIeW9BQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBRndrbEVRVlI0bk8zYVRXL2p4aGtBWUsxTWZSekRWTnZrdUVLTDlob1ZhYzVtNGJiWEZaRGtiQmZicEVjTFNITzJpclRKenk3bmk2UnNXa2tQRmwzZ2VRNHJqVWg3NStYTXZQTWh6MllBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU1EL2w3OS9WLy9wWWZUSzRydk5QMjlMWWQwV3VpdnIzelovL2ZxbEsvWnp0blgzZGxsL1ZONytyVzV0UGh1NWZ4R3VmSndMNjZZdHZCMFc2dCs5WEZWL2lhdTZqMmZkeGJPTVZldHFPblNJVjc1UGhXMHN2QnRlMmR5K1lHMS9YaldJWjk3Rjg2Rk9IcDdjdjBvWFVnTXQ2a0hZK1VyOWw1ZXU4bG43UVR4VkY4ODIxKzNYVCs3ZkRpUGQ1VUxzbDhkYytPVGxLLzI4WlQySTUxamlhVHZoNWovTFAvVGpwQk91ZkwzOHNhNnZRNmtKaFI5U1lSbXV6UDdSakRYcTVhd0c4YlIxemZITTA1ajR2SzV2SDkxZnBmNjByMzgxQytNdGpxTkQvZWtzOXIzNzlLUDNGNmozYzNhRGVJNWRQRy9xVFhpNWV2cXNkMm04VjdIbFZxbndJWGF4S25lMDdVZ252WnlteEhQMTc1Q2Vjank3K01URGszLzM2UDVEYkpnMjBrMS8yem9Pb0YyNjBqNkxzYXg0SVl2NmJZNm5pbU01eDdQUGI0NXBtUFNXcFRmRm5yalBoYVorMzkrN2VEcm9MdWV1dmg2TFo1c3JldmM0bm5YcGdkdlFKSWNReHl6SHRjMkYxSFFUT2RTZmpjVlRLdnFtL1dDVm0yUVpzdmU4akxadnZwbmxScHFGc0Q4S1AvTXdTL2RORjgrNkhjTzVocXVibTV1bXhOUGt1cjFwMjZkTkNuRmd0S0c4Yno4WXpDNWRTMVRoanFia3dzRUVjR2tmMmtjKytPL2ZsSGp5REpuNjJ6YkZzQXUxdjh1SklscVhrVElQbjc2R2VFS2ZINHZucTY5dTQrc3hkTFc3RkYyY1pZNDVpVVdMa3NuaW0vSjdKdXh2c2NPTXhWUEVNYjZJOC85VkhFYjd0a0hYWmI4d0w0MFZHK3Fubjhvdm5XekJzd3BQKzB3OFYybkFONkhlcTloSzIvcjZxdHNpckVwam5ZUXdueTVmeCs1MEpwN1BVejJQb1JtUHNacUgrbjdYN1JlcXNoSTQ2V0ozazgybnkvajRuNDBuckVkamhhdVEyWnI0dnFtLzd4ZlJvL0VzbThuV08vUDRKSitMWjl0dFVOdHVkNzJ1NDVUVTFML1B1NEwzZyszRk1KNVZ0NzI3dUYyYy9jL0ZrOGZIb1g1YnBTbzNkVk8vL1dMNVpXeTUvdmIrZDdUTk05a0dOYzJhNStMSnk0UTJZMjlUTGdzOTdiYXQ5U0dNcHJGNGp2VXdvMS9VSW8zMnMvR2tWRFVQYjYvVHplbDFGWWJlU0R6ejBUMzZaZHlsZ2Z0OGZ1djJtc3R1VDExZTQ4N29hVDRJdWZ6VDJVVHlvdk5Ndmw2VUJlcStuQW8wWmFZSlAvdzBudjJFeHp2clhJbHo2NE45ZnRwVk9SbHB5dVFTcHE0bjhYemJIMlJkWHBYcmVpNmVLZytnVlI5UEh1MGhOejVlSDRUZU50M2V0S3A3M2JIQm8zald1WHNkUzJZNGxDWUpLKy9UOVZzOGl4ZzlVYjJNWHhKUDZVaGh5WFliM215SHQ1NnVyME9PbUd3cW5aMk5aMzd6NTN4VDZvenhHRFJ1VXZmOXJkZVA5ai9oVEhXcXFTYzRFOCtxV3lLbmVPN3FUUjQ0eDJGL085MmZ0bjF4MHFQcmMrMVRzbkx1YiszaTRKamUzZlg1NFA3UitjRjY2cFByYkNTL0xjcG5LWEcxMCtsMWxhYldxZ3laZlppOFRzNTNxcWVIcVpNWWllZXFuQi9NOHpGby9YQ1ZGanJ6MHNYaTJtK2ZqN1BpK2R0dXVwWEJpZkh6a0hmeE5SMS83RUlySFdMTGxQTzNkV3lNay9QUjdlT3p1b21NeFpOUGRmTjBFM1BCcnV5OTR5RDVVTTZ2VStHVFdYL0dOYld4ZUk0cFZYMGIyMmtkYzNYK3ltRWZyeXdQNWZ1RmtNWGp5Yy9WS3hrK28vRzBZN3ZkdGYweHJhYXIrTzh5elM3dFZ1ampMNWI3UEIwMTRXdWk5UDFQRzl0Tk1VRVV2YkY0MWlXUmh6R3pUOWs3SFN0MlYyN0RaNFB2NXhhRDlIL3BFRTZNcmtmTHQ0cjNYY09FbG5ub3I2VHhOZStqbnIvcWVPYjlLVTc1d20xUk1uYjBrTzdydjk5ZXZlcDRabCtHZW0wZVpsMWk2L1krUDlTRFhjNmlOTS9KY3VNeUZmL2YvT3RtODh6ZmgvelliSDdURlJiRHZ3OEJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRjZyL3dKcHFjU1QvUFNySUFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFaOEFBQUplQkFNQUFBQ1prQlVyQUFBQUcxQk1WRVhNek15V2xwYXFxcXErdnI2am82TzN0N2ZGeGNXY25KeXhzYkhaMzhXQkFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFGVTBsRVFWUjRuTzNhVFc4Ynh4a0FZSW9VdVR4NkhNWHlVV3d2UFVZMUVGOU5vR2h6TklOK0hTa2tqWFBVRm02VG80Z1k3ZC91enN3dXRVTXREUU1OTWprOHowSFU3THVVOStWOER6MmJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBd005cUhwNGRmNzhMbi9LT0QrMzcveHdMZjI3ZlA1d0pWWEk3U21nM0pIUVJlbStmdnVFUXI5LzBoYi9Gd3NOa3FKYnRLS0hOa05EZCtZUXUwL1dyZlNyTVUrSDVWS2lXWlJnbDFBNEozWjVQYUpzRE42bHd5SVdIaVZBdDcwWUpkY24xdiszT0pqVHZBNS9Id3FJdmZQWTBWTTFtbE5DN1kwS0hzd2wxZGZmai9oL2JjQjBMVFNxMHVWQ0dhb21mOFpEUW9qMG10QWxmZnBjOGVVUDM5UHZaYkIzQ0Y3TllrYkhEWFBaNUY2RmFMbzhKZmZQMzJBWDZ5OXR6NDNmM0Fmdzd2cmFwcDJ4VFlkV0dOMDlDdGV6Q3BrOG9ON0grY251dTJWejJuLzl0dUU4cHZNMS81TFBUVURWdHVKdEtLRnlkdWYrdWoxeUVGN0YxNVVJVFhwNkdhbG1IbHhjVENhMk9VOHVwWFQrR3pXT2xYS1pFaHNTS1VDMTM0WDRxb1VYL3BNbTIvK1R2WXBNYUd1anF1LzFqWGF6Uys0cFFMZHZ3ZGtqb20xZXZYZzBKTGNkenlXM2ZOemF4MmtMcS84ZEkzMXZhZUVjUnFtVFpmZmdYbzVYQ2tOQjYzR3JtK1VtN2FuZ1JmNHhtcHQwd25tMjZxNnZKaGQ4dnJPa2VmQ3FoK2JoZnIvTGNQNDhybkdVeHlSeUdOYy9oU2FpU1EvY1JUeWYwYlBYZjl2M2I0YTQ0aU4vR245MnN1WTg3aHJ4SDJBeDFFcXVxRE5XeGlzOHdsZEJsdU8rV1JPRTZQMitUR3RNMjF0Tzh5K3IxY1RtNkhlcmt0bXVVWmFpT2VSek1waEpxd3Z2UnZxQnJUUGR4RW4wVE03MWFQTzRSMnJEUDkzZUQ1VW1vampSS1RTVjAzTi9kcE9LMlM3eEpYYVFKVi8xVzZjM3NKS0V5VkVjYm05SlVRc2Y5WFI2OXU0Rjd2MHZWMVlUbi9hYm41V3kwZmNvSmpVTlY1QWwrS3FFdWc2dS9ybjRmUXE2Q2JvQzdhZFBBMTRUckVIN2FmOSttU0hqY3NUODdDVlZ4bDU1eEtxRmRubE5lOXoyOEd6eWU1MTlqVy94ajkvcHRhbzFGUW1Xb2lrMzZsNmNTT3VTSmRSWDZwVURjNzZYMTkwWC8ybldyRjA4VEdvVnFXT1MyTVpYUTEzL0lBL2F1WHpFMFEzZTZHTGJidDdGY0RBcGxxSWJMNFJtZkpqUm8rZzYrSE1hdVpoakQwa0w3WkpRYmgyclk1ZmIwc1lTR0RVLzM2SGtPYllaNU02NENueVEwQ3RYUTVtZjhXRUtMNGNCajJ3OWR6YkJnUzVGaXBWQ0dhZ2dqeDB2bExhdisyWmJESEhzNWpNa3BVcXpseWxBTm41RFFjS0VaenQ3bXhhM0ZhbnQrL3EvOFFqNHBvZnhoeDJFN2RZejE0NjNYSi91aE1sVERwemU1Ymo3NklVKzF5NkpkRlR2VzVhKzR5YTEvODd0Y1h1UjY2VnJUWC9JY3UzcnMrVmNuWndwbHFLS0pVVzQrZk1icnZJRzQ2OHJiUEx1MGZiZFp4Mko1NmxPRUtwcElhRDIwbmliUHZYRnZkNXV2YmZwV2xpTHJQdkU4L3hhaGlpWVNXZ3h6NUNHMXFVVkkrN2MwQWd5SGI3c1lLVTlPaTFCRlV4TnIzaXYwdTlTOEJWL2xnYnRKQi9MeE9QdG1GcXZ1Zm5ZODJ5NUQ5VXdsdE1uUDlqclh3QzUxa1UzNnVjNG44dDhldjMyWUhiOTlLRVAxbk5teFB2OHlidkRTZU5XbXVra0hwN0dpd20vMzMvZVJydTcrZGZ4K3FBelZNMzJNMVl1WnJIUERXK2VCZTlkSGhqWjV2TzBrVk0vazRyVHRueTAycFZ3MXNXLzA1NDFKYmxhYlhIaEloVEpVeldSQzcwWm5KSnUrRFIxeXg5cU1UazlPdmdVdlF0Vk1ieC9TczZVVHRrVjQzTFkrZEMvTE5vek8zZzZQRlhRYStuVlpmV2l2djlwUGhwWi9Ddjk4YkZVZnh2K1RwQXdCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU1ELzRYL1NOZDB0eGZNVGZnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmVuY2UtYjU4M2VlMjMwNWQ1NWJiY2IzYTM1NWQ0NmI4ZTA1N2EucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dvb2dsZS1wbGF5LWJhZGdlLWRiOWIyMWExYzQxZjNkY2Q5NzMxZTFlN2FjZmRiYjU3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVA0QUFBQ2FDQVlBQUFDSjgvVWRBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUEvcUFEQUFRQUFBQUJBQUFBbWdBQUFBQkhUcjJ4QUFBZkgwbEVRVlI0QWUyZERid1ZSZm5IZVVjUTlTcHFFSWJYVjR3MDBjeDM1WUtwV0thVVNpcHFhdjIxTEYvTEFPWGw4cEpDRmlGWml0bW5hMmtxOVZkOENkL2hnaFpsaW9pS2FZcFhSRkZVdUJncUlDOTlmOXd6TXF6bjdObHp6cDQ5dTN2bStYeCtkMmRubnBsNTVyZnp6TXp1enRuYnFwVVR4NEJqd0RIZ0dIQU1PQVljQTQ0Qng0QmpJSVVNdEU1UW0zYkUxajVnSDdBSDJBWDBBRjB6YU0vUmx2YzVlUWU4QzVyQXEyQUJtQStlQjJ1Qmt5SVpxSyt2YjlPMmJkdGVHelpzMFBYNFF1dldyWGNqWEV0WTEwblhaRHRnaS9oZUJ0NERTOURYOVhnRlBMdHUzYnI1bExlSXNKT0lHSWl6NDI4UEJ3UEEwZUJ3c0NzSVN6NmlvSCtDV2VCKzhDK3dIamp4WVFEbjNMdE5temE2SmtlQlE4QTJQdXFGSnIxSmhzZkJ3K3ZYcjMrQXVoWVhXb0RURDg1QTNCeGZ6bjR5T0IzSTJhT3lUeXVEcWVBMjhIZXdBVGlCQVJ6d2k4ek9wNE5UT0ExejhQWGxsL3Jtb2pDVjFjQ3RiaER3cGFxb3hLZ2NLNTl4aDZId0EzQVM2SkJQdWN6cEwxSCtGUEE3c0tMTWRjV3krTW1USjNkY3ZueTVuUDM3R1BqbENodXBsZGgwYmlOdUdEbHk1SFJzY29OeUNCZWswbzcvZGRvd0RHalpHRGY1THdiZENNWURQU2RJdlRDemRtRXAvME1hZWduNFRBd2JyR2MwMTNBcmNBdTJ1bWMwSlZ5Z1NqbitrZGo4TTNCUUNiWkhsZlVES3JvV2FBRFFZSkE2bVRKbFN2dWxTNWRld0t3NmdzYnB3VnpjNVFWbS91RWpSb3k0TSs2R3h0VytxQjEvSjRpWUNIUy9tRFI1QzROL0FtNEJxVmx1amgwNzloZ2MvbGUwYVUrUU5HbkU0Qjl5Qy9CODBneXZ0TDFST2I3cStSNllBTGFxZEtOTHJQOFI4cDhIOURvcXNYTFZWVmQxNWNIWkwzSDZNeFBiaUJiRDE5Q0dxOEZWTFAvWEpMd3RrWmtmaGVQclhyRUJESWlzVmVXdlNFditDNEJtLzhUSjZOR2pqMktwL0FjTS8yemlqTTl0OE5PMDZUU1cveS9tVm5FcGhvRnlPMzVmS3RKck1tM3FTS1BjVEtPMGtsbVZoTVl4STdiQk9VWUsyRnZ1YTE4SlNqNWs1ajkzMUtoUmQxU2k4aVRWV2M2THI2ZkRrMERiSkJGU2hLMTYzM3dDZUtPSXZKRmx5VHl4djUwS3Z4WlpwWldyNk9jOCtSOUNtOTJtckJ6WG9CeU9MMGYvT2RBcm9Xb1I3VEtUUTJrN2NPeGszTGh4UFpnSjd3UGE4bHd0Y2lmT2Z5Yk8vMkcxTkxpUWRvYnQrSEo2M1R1ZVhvZ1JLZEhWYndPT0Fkb0tIQnZocWIzMjBEK0lRYnZGeHFqb0RKblpzV1BIRTRjTUdaTEsxN0NsMEJpbTQ4dnBkVzkxVWlrR0pUeXZPdGh4NEc5eGFBZXozZTVzeUduRUZ2MllxU3FGUWU4Sm5QK1lvVU9IVnVVdXpGd1hQU3pIVnpsNndsMk5NNzJYVzgzOFI0RW52UWxSbnVQME8rSDBqMVBuemxIV0c5TzZackxzUDk0dCt6ZGRuVGFiZ2lXRmRFL3ZuTDZGd3EwNVRBZVIvYUNscGRwTmY4ZVBINzhOVHEvbHZYUDZGbHI2d2NldFU2ZE8xYXJVQ1F5RTRmamZwNXpMSEp1Yk1iQURaM0wrYlRlTGplQ0VXYTNkbWpWcjdxU3EzaEZVbDZRcUJyN3d3Z3NUa21Sd09XMHQxZkgxcTdySjVUUXd3V1gzd3ZZL2dyQnVwd0pSd1R0Ni9RYWlmeURsS2xPQ214K3hlV2x3bFRVN2EzTkxXZnBvVnBzQnd2d1lRMVlqRXh5cC9lOGZnOGVpYUFPZCtpUTY5eStqcUN1cGRjRFBnTDU5KzA1cmJHelVOeGlxVmtxWmplNkJOZjJzMW9rL0ErdElQaFE4NGE5V1dtcm1ZZDU4U29uODlxSTB5eXVTKzVtYW1wcURMcnJvb3RVVnFUMEdsUmE3MUQ4WDI1M1RCN3VBV2xYcGpjY1d3ZFNMMCtMaGxUNGM0cHcrR0gzN05qYzMxd2RUVGFkV01VdjlibENoMmI2c0hUbGxkSGVsUGVMNjBYSzBpeVgrdDNYL1dvNnlVMXptSWYzNjlidDc1c3laYjZlNGpUbWJWc3lNcjRkSE5UbExkQW01R0xpY0JEM3dDMVgwNmc2bnZ5YlVRcXVqTUEzRTE3UEJwNVRiM2NReVZhampIMGhMay83NzdVcGRySFpVUERIc3lsZXZYajJLTXZXZzFVbmhEQnd5WnN5WVV3dlBsdndjaFk1MmpUUlpQN1dOU3BaUjBWendRY0FLMjZPM0pkRFhlbmNCblVIY3BCOEdOWVpoRkEvMGVuSnYvekpscWQxeEVqM1EvRE9ZQ1ZZeXEvWm1WWElXNGMrQnVNa2lkdlh0QVpkcjRtWllPZTNSTEJSVTZsQ015dW4xQ213SXVBNG9YS3pvVTE4SGc4UEJOMEVjT2w0OWR0U0JrZ1dudjVKQzR1YjArcjNDMFh3TzY1OTJBM0dzOGRqNy84VHBoMHh4RWcyZWVsaDlRNXlNS3JjdGhjejRqMkpNLzNJYmxDbGZ1d0hEdmhCcXF3YUF5OENKb0pDMm94NnFIRWxwajVWU29uNXF5MHoxS21YRXl2R1oyUy9nS3pqWFoyc2J6cjhkVHJhUXRManQvV2pLelBwcnM5bWR4cmlnOS9qNzBmaW9uSDR4ZGQxWUJySTNVS2FjN1J0QTdYa2NWRXArWEdyRmROU0xLQ05XVG84OTZ6cDA2SEJMcnJiaCtNc1lHTzdMbFY3QitGcnNVcitvR2ducStQcWFUbFR5TnlwYVgrYktucUY4emJweXdFcU04dG9Ec1RNb1N2UVBMOGo0bmFJeWx6ZlRXL2wrKzg3OS9yL0xhMExScFdzZ3JSb0o0dmhid2NhcEVUS3lOS0s2dEFMNEJkQTk1L3NSMVdtcTBXMUcwWTdMNXBPVHlLKzlBWEdUSUlQb3lyZ1pMWHVZOFEvbm95V2h2MjZOWTF0bFV4REhQd1c5S0orT2wzdTI5MTZMbVVUSStZTytPZkRtTC9iODIyUXM5am5EV2NWVzZ2TGxab0RicDNOeXA2WXJKWWpqRDBwWGs3TzJSaytnQjRNb0I1MmUxRmZ3ZnhMaVBubDc4aDBGbklUTUFMTytKcm1xa0h5T3Z6VXN4TEdUNmVuOFFBLzBwTDRPN0FPS1dhSGNUYjZKSUVvcCtJRVNUOFdQeDhCQ1hzTkcyWjZrMTdVckczcjJUWG9qZ3RpZnJ3TjloVUx5NlFTcEoyeWRjUlRZMTZkUWJTQjVDbWdUeVUyZ0dRU1JFU2hwUU5rOWlISUlPc2RSaHZZckZDSmZLMFRaNlJiR0FMUCtBSExvNFcrcUpkK01mMnhDVzk4V3U3VzkrQnJRQlA0UEJKRlZLTW41b3hLdFRyb0hyWXhsdnE1WEhGZGdRWnNRZXozZU9pUzF6eGZFYlQ3SFA2S2cwdUtwck0waTJoZWdtVC9JdzdRNzBIc0JSQ1c2YlFrcXZWSGNOcWl5MHl1S2dZTVlZT080eWkycU1ia3krVG0rZm9HM1Y2Nk1DWXovRGpaZkhjQnV2ZVlyeHdhaVhGVWZraXZCRzkrMmJkdkR2SEh1UEhRR09yZHIxNjVQNktYR3JFQS94MWZqZzh5UU1XdVNyem02bnc2eWl2a2plbEU5NGQvZjEySXJrV1ZvNmp1azFkeUtCWG10bDNxZS9SeGY5NTlwbEFrQkd2VWVPdHBCR0lVVXduTWh1bEhZbnRZNlVzK3puK1B2bWRLcnFxWDFBUUhhOWxBQW5UQlV0cU9Rb0x2dzBucE53dUF4ekRKNmhWbFlITXZ5Yy94ZDRtaHdTRFlGMlpRVTVYL0N5Y3YxbENsVDlJT2NIVUpxdnl2R240RmEvK1RrcC9vNS9rN0piMTdPRnRUbFRObVVFT1c3M0x4Y0wxKyt2SmhOU1p0YTQwS0ZNS0JkbGFrV1A4ZFA4K3l5TjFmVnIrMjY2RXZBR2dVaUVHM0Q5WlZWcTFaMTlGVndpV0V5MENtelp5TE1NbU5WbGwvbjE3MW5XcVVURFF2U3ZrVVJFUkRrSHQ5OTFUaWlpNkZxdW5mdnJrMWdxUlUveDA5N1I2c0pjRldqK3NXZUJxSjg0bmV0OHVWMTZRVXlzR1RKa3JTOXl0Nk1nV3J1VEYwMll5TDd5WXJzMFJXSlRmMXVzb3F3bXJ2U1ZQdEdxaHVYKzVwdVRBbHkvNjVkZkU0Y0E2bGpvSm9kZjNtQXF4bmtkaUJBTWFXcnNJMjBsSzhObDI1QTlaVVExYzdOaWpEcjUvZ2ZWY1NpYUNwZFJ6WGFuWmRQZ3R3TzVDc2pTUHFIQVpSUzNSRUR0RDlTRlI3dXBYcTE1K2Y0eXlKbE90cktYcUs2ZkV0OWNSUFYrOXk4ZzlEYXRXdXI5ais3UnRzMVdtcmo0WjRtaDlTS24rTXZUVzJyVzdXYUZhQnRuME5IdStXaWtIY0NWS0p2QlRpSmhvRVBlSStmNmhXV24rTXZqb2JqaXRReUxVQ3RCd1hRQ1VzbENOZEJiZ2ZDc3FmYXkxbVVkZ0w4SFAvVmxEYitQN1RyNFFCdE96U0FUbGdxQy9NVnhBeTBGcDIzOHVtNTlGQVlhQXFsbEJnWDR1ZjRMOGJZN2xKTXU0TE1RWlp4SjVSU1NRRjV0Y3h2RHFpdlFjdEorUmxJYTkvL2hEay94My8yRTYzMEJHNm5LWDhKMEJ4OXJ5L3ZMK1lDbEJORXBSQ2VvL3poVUJEYlU2bkRCMC9tcDdKaFZxUDhIRitkTE1qTWFCVVg2K0FNck5QbnQ0TElENElvaGFRek4yZzVkTWg1UVhXZFh2RU13UFBUeGVkT1JrNC94MytmSmp5WGpHYjRXcW5CYXhJNERnUjVRS2FaL2pRUWxmdzlhRVYweUtpK0NoVFVwRFRxcmV6ZHUzY2hxN0JFY3VEbitHclFZNGxzVll2UnVuZWVBdlFacFV0QnZ2ZjJxR3lVOGZ5TjZqV2VLbng4WTYwQi9vd2FOVXIzbnU4R1VIVXF4VE13WjlDZ1FhbCtoeTlxOHYzdzR5RjBvbHoyQnIxY3cxSE05UnYybGFRdEJIb3JVZWp1cXhQSk13aEVKVnBTYW9BS0pQeXpodzM4WThjSG1ma0hCOHJnbElwaDRJRmlNaVV0VHo3SGY1UUdhYWJzRUxPR0JaNGxDN0M3RnQzZkZhQWZodXIwUWd2aEM3RDNNd0E0eHkrVXVJRDY4RnNWanA5dnFhL2ZvMnZXVDd2b2EwTzY0RUUraUJFbUYzY1ZXbGpIamgzdkkwL1EyNVpDaTY5Mi9SZlpMN0dnR2tqSTUvamlRSy9BMGl6NjNsMGppUHJMcW5vbi94UW9TSVlPSGFwdkJGVERZRndRTHlFcDN4RlNPYkV2Sm9qamExYlNFLzZvWk1lb0txS2UvdUFKb0g5TkZiVTBGRnNoOS9oRjV5MjJ6b0Q1OG42dWl0dVVMUU9XRmJYYUJteHJpTHJTU3RVWHhQRS94TGhiSXpSdy93anEwcEwrMStBUjBEMkMrcnhWNktseGd6Y3k2SG0zYnQzdVFmZnRvUG9SNm5WanFaenZwOHhScjZ5Q05uL0dpQkVqMHJwTi9WTWNCSEY4WmJydVV6bkxGNkdPTWFoTXhmZWczS3ZCSytBQ1VLbnZxbW4zNEp1Z0tEbi8vUE0vSnFOZVZjWk4yclZwMHlibnRXTlFxR0cxRXRWVzZJSzRZYmJYWG8rcWthQ092d0JHcGtmSVNnTjFhWmRkdnJjTytVeFMvZ09CM3VQUEJvdkFVTEFOcUtUOG90VEsrU0tQQnVOVnBaWlRodnkvR0RObXpIN2VjaWRPbk5pSlFlRVB4RmVhZTY5cE9uOXAzYnAxVWZidmJEWkVHbGZJakhjd2xzMkoxTHBXcmZSTmdIK0JvSnRXNU9oYWFtNE5lb0tkUWFtREIwV0VLZzlTMm9Bd1NodzlldlFrWnFxTHd5Z3I1RExXWU5ldHpPNlBjRnpGY1MvS1B4ZnNGbkk5WVJWM3pzaVJJeHZDS2l3SjVSVGlGUCtnUWVxMHgwYllzQjJwNjJzUjFoZEZWZlZoVmNLc1A0R1o2anpLQy9KNTdyQ3FEVkpPQjV6OUhCVFA0UmhFdjVJNkwvTHUvcFpLR2xDSnV0c1VXT2xQME5mZWR5ZkZNVENWYkJwQVE1RXJyN3h5Q1k3MTgxQUtxOUpDV0pFTXpYenJvS29ZS05UeDU4UE9UVlhGVUhpTjFmMzRrUENLYXltcGMrZk9Fd2k5RVhhNVZWS2VudVJQcTVLMmJ0Yk1RaDFmbVllQk9MNUsycXhoTVR3WmcwMU5ZZHQxK2VXWGY4Q3NkVkhZNVZaQmVhdmhUVzkycWxLS2NmeGxNSFZoVmJKVmZLT2ZJV3ZabHVUTVduZFN2alphT1FuSUFFNC9GdDVlREtpZU9yVmlIRjhrL0JuOEtYVnNsS2RCcXluMlRLQjM3MlVUSHZTZFQrRnZsYTJDZEJVOHAxZXZYdVBUMWFUQ1dsT3M0NnNXTFpPcVpxZFRZYlJ1cG4wNVoyWC9zTU1WVjF6eERnLzZ6cWF1MkQ5RzM0eWQ2RTlXTU51ZldRMi91ZmVqTnUvZWFwL01tc2xtZzIrRFFsNEwraFNadXFUYmFaSGVoRVFpalkyTnIvVHYzMTkxMVVWU1lRSXJZWEE4bFhmMlVlOUhpUjFUcFRpK0dxT2xwV2I5azNUaVpETUdudWJzRzZDc1Mvek5hdVJreG93WnM1RjlDZTdsVGF2MmMyWjZmSDdramRYT2c5cGZ5bExmOEtkNy9aSG14QjAzTXZBNmY0OEgrcDVCcEVMbjNzQ0dsTUhNYkU5R1duSE1LNE9YbTRjUEh6NHU1bVpHWmw0WWppOWp4NElvZjhnVEdVRkZWUFF1ZVk0QmJ4YVJONVFzYkVqNXNIMzc5bCtsc0FXaEZKajhRdTdWRGtjTmlzbHZTamd0S0dTdmZyNGFWZFp2d1BmeUthWTRYVTZ2bSt5eVA4d0x3aUVEd0U3OE1LWVIzZDJDNktkVTU5RXVYYnA4L2JMTExrdnpmMzh1K05LRk5lT3JZbzJtZXRJdjU2OUcwYWFtMkRpOUxnQ092N2h0MjdaSE1OTTlWNDBYaERiZnkyM1BWNTNUZi9ycWwvcHc3OU1sdHZ4OFZ4K2FrQk5VaTd4RVE5WGUyRzBJNFdIZnlyNTkrOTZCYlljeEFPZ1hpMVVodFBYM09QMFpESDZSUGx4TkNybGhMdlc5YlI1TWhQYjFiK0ZOU05sNUkrM1JXdzN0YUl5dFRKNDh1V056YzdPdXh4bXhOVEljdzliajlNUFpsWGQxT01XbHM1UnlPcjRZMHdjWnRKMjBGcVJSSnRJb3ZhZlhDaWNSd25mNUw4NzhvaStOZXkrVzA3YkIvT09SK3hOeE1TcG9aTGtkWDAzYkJsd1BUdE5KU3VRZDJuRU8rR3NTMnpOdTNMZ0RXQWJmaHUyN0o5SCtIRGJQeWl6dEYrZElkOUVXQTJFKzNMT0szU3k0Z3JQVHdTQ3dkTE9VWko3b2Z2a0xJSkZPTDhwNW4vMGtUcklmcytPMW5DYjlGWmYyU2x4S2UvcnJZYWJhNXlRL0ExSE0rTFlWWFRrWkI4NERVUXc2ZHQybGhsK21nRXRBWWgwK0d3SE0vZ2Z6anZ0WDNCY2ZrQzA5NW5IVGNQaExjZmltbU5zWk8vT2lkbnhEd0JjSi9Bd2NheUppZkh3UDIvU2c2RmRnVFl6dExObzBISWZYL1czMDBFOGJzV0wvNUorVnloUFllUVgzOG84VzNlZ3F6MWdweHplMDZ3T2V3MEVjdjZ1bjN5Rm9LYXdkaVN0QjZvVUJvQU1Ed0xrMDlNY2dqcHQrNXVEMEU5aHZmdzhybEtUZm9sUzBQMVhhOFUzalAwOUFtMy8wdTNVOURLeWt6S0Z5L1pCRHYwRkk1UXlmajF5dEFOajRNeEFuMHk3TXI0Qks5aE5kZzZuZ0JoeitieHlkaE1CQUpTOW9Odk03RTNrQ09BVjhGVVMxQjBBYmIvUnhrZHZCODhCSmhnRmUvKzNDQVBBdFRrOEYrdFZmRktMWG83UEFIZHpELzRXQmFGa1VsVlpUSFhGemZKdjdUcHpVQWYzZzVUQ2dmNjBWMWs3RHR5bnJjVEFiVEFkNmNPY2tEd000b1BiK2EwRHVCNDRBUGZKa0tTVDUzeWpQWnBDWjBhRkRoNGVHRFJ1MnZKRE1UcmN3QnVMcytONldhQ0RvRGZSZ2NBOVFDOVR4dGdlNlBlZ0NqSHhNNEgyZ0IzUDY0VXdUZUJWb050Y1BhRjRIVGtwa2dJR2dHN2NFZStPc2U0RmFCb1dlSEhlZ1dMMjkwVFhSbTVzdGdaNlI2SnJvMWE2dXlWTDBYdU0rZlNGNUZxeGR1L1k1eXRMMWN1SVljQXc0Qmh3RGpnSEhnR1BBTWVBWWNBdzRCaHdEamdISGdHUEFNZUFZY0F3NEJod0RqZ0hIZ0dQQU1lQVljQXc0Qmh3RGpnSEhnR1BBTWVBWWNBdzRCaHdEamdISGdHUEFNZUFZY0F3NEJod0RqZ0hIZ0dQQU1lQVljQXc0Qmh3RGpnSEhnR1BBTWVBWWNBdzRCaHdEamdISGdHUEFNZUFZY0F3NEJod0RqZ0hIZ0dQQU1lQVljQXc0Qmh3RGpnSEhnR1BBTWVBWWNBdzRCaHdEamdISGdHUEFNZUFZY0F3NEJod0RqZ0hIZ0dQQU1lQVljQXc0Qmh3RGpnSEhnR1BBTWVBWWNBdzRCaHdEamdISGdHUEFNZUFZY0F3a2xZRWsvYmZjcEhJY2hkMzZ6N1RtV3VxL3pxNlBvdElZMWJFVnRwaC9vYTcvekxzMlJyWkZhWXIrTy9HUllEV1lFMlhGWWRYVmg0STIrR0FOYWZyMzF5K0JhV0EwT0JSVXF6VFRjTU5YYlpsSVVMbW1EaDExSGhlWmh5SEd0cnE0R0ZVQk8yNjBlTGlxQXZXWFhHVSt4emNYMlh0OG1wcVBLTG4yNUJYZ0hOODUvaFowVzYzMGpFOTg0TmVOMi9rbHhpaHRPclo4Yk5uVG1iQ1d0NzB5UjVPa0FhTVJYQXl1QTA0Y0E5WENnUHhEdDNueUM4bDdMWWRrL2ZYTytEVSs1dTlKMmpWZ0ZUQ2puWTdmQXRVaWJzYmZkTzNyWW43UjlTeGlCSGdkMUlNdzVUUUtVMTk0Qnd3SXMrQ295aXJFOFkxTit4TlFnNDN6THlmYzFTU20vT2djZjlOMXI0djV0ZjR4OXBrK1dsOEdXODFEWHQraTlSUXdMVEtYaG53VGlGUkpEYmgwWThqOWNRekVoNEc5eTJ5SzZmKysxYVRKOGRYUXg4QnRWb3UvUXpodGJiU2E1NEtPZ2VJWVNLTlQvTnFpb2h2aEwxbm51WUphSG1tRjBDV1hRaEh4ZXNwYWJIbmxzS2VJSm9TZXBSUk9qREY2c0t2MzluRVEzYStyMzJ3WnNUR21meFQ5Y0Q2Tmp2OFBMc0lLNjBJY2FJVk5jRHNDM3dOM2d5VkFyMEgwVE9DLzRDT2d6UTk2TTZDT21rdmsxSTBXcExjN21BeGVBeXBINVMwRHQ0QTlnSjlzVGVJdzhDVFFQZ1ZqanphanpBUFhncjFCc2FJQmNDWm96RUR0RDF1eWNhS0hyN2s0RVY5QlpEK1ViZ1pMZ1Y1VHZRK2F3VjNnT0pCUGJrS2hNWVBEZlpTSFdub241OURiZ2ZqUjRCbGdycE0yRFduVHpML0F6NEMzWGFxek1ZTUJISTJjVGFEUndwV0ViYm1kazhZTVZHWlhjQU5RbjFML1VKMmZCMFpzKzg4MmtVazY5c0ZZOHdCRVI0MnFoY2dzbEUzK2laNk1jZ0JkS0pQdWQ1eVAzbzZlL09aVU50bDUxYm5YZWVMc2RIWFdnMEEyT1lCSURVQzJmcTd3aEN3RnlBbU1mbTJXOUYySmU5dlNlWUJ3aHl4NmZsRzFKSm82ZE5TNVY3SnhZcjlidHZNckxFNnlEY3ltM05ZRXhnSnZQdSs1WFVlZHlXd2Q1MWxsRExUaXZjRUdTKzhTYnlMbi9ZQ2N6bHUvOTF5RDllWEFpT3IwNm1RN0gyVXlaSTVOVnI1akNiOXNuU3UvYkxFbjd3WXJ2WjV3VG1tWE15WFpDVzlZNXZld3dnck9CUnFaNjRCRURxY1pYaVJ1QXpRNmR3ZVNmWUJtMnROMGtrY3V6S1RyellJR0h0bXdGL2dLMEpKUXk5TmJRQytnam1xa2hzQTlvRnNtNGsyT0R3UE5ic29qeDlnZlNQU3U5cEdOb2VCL3RrZFZqbTRHc0g4US9pYlFiRlZ1eWNYSjBWU3NEbXM0RVU4Mko4WXV2ZllhYms0NGFwYWJtVG5xdWg0SnRQVFhBRkZ1K1J3VlRBTmJaeXBxNGloYmRMMjNCUWVEZllCRXE1TFpHME10Zjk3bG9ENGhVVnMvc3pIVXNqSnN5b1IxYlgrYkNXYzdxQi91bGtsWXpQRTk4Q3pJeGx0R0xYbUhQcGlzRWMxQXpsR0lYSSt5eWF1TDVaVmRpSGdZcUFONk80MW13cHVBeWIrV3NKWjNYcEZOUmtmSHA4Q0pRRTV1U3gwbktzUG85ck1UQ1Y5Z3BUMUdlRXRQdWs2MXhKZnpEdFJKRm1rbXpwUmZhNlhMS2Y1dXBhbWpxSk1XSTdWa01uWG9xSE92Wk9Qa0JKVHljVkxuTFlqejNzQmVRVjNIZVNlUG5yaTZCTWpSakcxMWhMMHlqd2lUUHRDYmFKMDNXSG9xMTVZeG5KZ3lORkJubXpRMVNNOEEvVUV1YVNEQmxGT2ZTeWtUMzhUUjZPcjRCUEM3M1d1dzlPc0o1eFNOdW1rVTNmdjR5YXNreXVubC9DTFVGczJFRndKMUpvazZyVWJ6ZlBKbEZPNEc2cXkyTkhKeXZ4VmhabThUOVVVVDRIZ3pNUFZhMGEyZTQyUUFtR1pINWduTDdsdkJJUm05aFJ5MVhOU3NHWldJRXpsSk5rNGVzb3pRN1pkWGhoRmgrdWU5aEhWTlB2SW9pYXRKNEQrZStIS2MydmZTdjZNQ0RlWmVrV1BLNmVYOFlVc1RCYXJQcWkrVUxJYllrZ3VLV1FGYmxXaVBPdGdDcTR3ZVZqaFgwRy9KOVlxVnlXdmJDaXROemgzV05abE1XV1oyMC8yOW5GNjNFVkdLSHljdldZWjRPZG1DdEpPdDlPR0V2UU8wbFJ4SjBCNlFqNk5HNzBxeDNFWmNRd1YyWHltcHZyQTZXVWxHbENHenZaeDlyNGp5dTVMSHZ0RHFpT1dTQjYyQ1R5S3NFWDBJME1yQXUwUW1LcEFvL3dXVzVxbUVYN2JPNHg3Y0J3TU41eHFzNXNmQVlIdUZjajcyUEFWME82Q2xkeFIrTklkNlFwTW9EQTdOMkFJSzJ0WFNmY01LZTROeXJLUEFlS0JsdjV4akZkRERtRG9RaFdoWitGdXJJaTBwWlk4NlZqT1FYVDhCUFVFUU9RTWw1YmRGSFRWSjBzMHlOaTREMXUzWWRLZGwxMzZFZndtZUJacGM3Z2NYZzgrQWNraW9LNTQwT3Y1V3NQNEZpM2xkR0s5MEpPSUs4Qlo0QkdpRzFOUDMzWURTNVB3ZmdhaEVqbmt1c0plL3Fyc0xrRjBUd0VLZ2UwdnpWSmxnVmhtYmlmMllvK2tzbXZGUHlhb2R6OGp0TExPaWZDWmhWZnVwb0c1YkJnRTVkeE93cFlhVEFXQVNlQjFvUUZBL2lxMmswZkcvRHR2bWlhczYvbU1lOW5mZ1hFKzZmd3EyQjlMNUt6Z1BhQlRYYlVJbllDL3RPQzJyeUliZmcxNFpmSmRqQTdCbnU3YWNhM0M0RCtTN2J1cWtad0hkNXh1NWdZQTlrNXI0T0I0MThCcXhiOXRNWEtXT2VrZ3BUbmNGV3VKL0gvd0pMQUpHMmhQUUxjQnRKaUtPeDN3ZEtJNDIrOW1rOXZ6SVVwRFRhMWEzUlJkcS8wekVDeHozQmNjRExiZm5nV1pRU2RHc3I1bjlITEJIQnRkek5ISUVnVHB6a3VQNEErSzFOTldxeGd3ZW1rWHRXd3BPWXl2TExNdDJ0OEp4Q1dxZ2ZoNW9NQjBNZGdaNk8zTXJNUElOQWhvY1lpbHBjM3lOdE1hcFJmZ2tEK3VhVWJWME5uSUNnV3kzQWlZOURrYzVyaDdVM1cwWjA5c0tlNE1qaVZDSGxId0l6Z1hxcUJJTmNCcFE0aTRha0kxOGxvQ2NxaFNKNHJaTi9lZ01vTldrRWVmNGhva3lIZlZxUlU2dlZ4NUdHZ25jWlU0eXh6MnRjem1GbVEydDZLeEJjK3VRTlRHRXlHMG9ZNmM4NVN5MDB0ZGFZVy93ajU0SXJYcTBQRFZ5TFlHZTVpU214OFhZOVl4bDIwOEpsL0w2VEEvZmpPVGoyZWhsTy9ZZ3NtdTJCQ3Z1TlN1Y2JUL0pCMWI2RmxZNDBtQlNaM3gxQWwyQUw0TWZncmxBRDFSTWU5NGdmQ2J3aXB6ZFNHY0MvYzJKZGRRTW95VnluUlZYVGtlUjB6OEUxTkUxZU1rdXIreEx4RmxXNUR3ckhDU285cnlZVWRURHp3WlFpaU5saWlycllieFZ1bFlxV3NWMHNlSVUzQmFNQVhvVDRpYzJYK0s0bTBkWjVZd0dwM3JpN1ZNTkdMT0FydFBab0FQd3lwRkVETFFpbjdiQ0p2aXVDWENzQStXZVZLenE0aC9zZzRsYW5oWURYWmhkY2pTeGhuaU53cWJjanduZkN6UWo2cjU2SGxnUGxQNSs1cWp3ZjhHUHdEN0FpTW95NWVqb0o1TklOTHIxbG1JYndsb2FtalFkdFN4OUFPaStYdENnb0JuZTZLanp0UWEyTkhOaTBtdnRCQ3Q4TU9GMXdPaGRhS1VGQ2RaYWVWV0d6cjBTQmllbVRISHpNREQyNnFocm9vZWJONE5IZ1gwdGpWNGQ4VjdaaXdpNzdTczVmeEQ0bFhPSlZZZ0c0LzhBVTRleFJYM25OK0FHTUF1WXZxUDBxU0NiSEUya1hjNnJuS3ROTTREM21qUVJaM1Q3RU00bkRTZ1kvZnA4eW5GTVZ5Tk5BNEllWHliUFJhQjluZ1lOejFPMk9zV1ZRTE9zZlNGbHh5UmdwSWFBYlp1SnozWlVQcU5iNzFFWXdQbHJWcnJSeTNiVXNuMEhUMzZkTmdPalg2dUlIS0piSWFPbjFjOGVPZlN5UmRjU2FmTHFxSE92aE1XSktWZXJvYjhDdTE1dldOdzliK25VRWM0bSthNzdORExkQlV6NWwzZ0srUmJuUzZ4MG81ZnRxQUZCdG1jVERXaXpRYlo4OVo0TVRaWmVIMDlhdHRNR1M3OCttNEtKaStzeVl3VUczbTJNekhKY1JaeDBsb0g1NEdud2J4QkV4cUVrWFQzNVBoQm9OTmZNcnpMdUJMOEhTNEhrZktBTzB4T3NCYXJUaVBMNDJXajBkSHpXMHZYYStRQnBjc0NCNEJod0tOZ1p5QzdWdVFqOEUrajFrR1lHZFJpdnlEbTJ6RVRhdHpOZXZSRkVkQWRteVh3eTRhdTlTam5PVmE3ZDNtejFoTVdKTVVGOGE1a3ZYcjRMRGdQZHdCcndIQkFudndGeTBvT0F4RjVLdDhTMC9OVjFYd0EwT1h3SmlJUGxRUHhQQVpxeGxkWWFTRjVwT1h6eTl3NUM5d0J4ZGl4UWZUMUFKeUI3bW9DdWs1NnhQQXh5aVNZVDVaZk5PcXB2YVRCNEI3d01iTkZxYjhkTWhOMzNiQjA3UEplVG1reUV0NS9aZWk3c0dIQU1PQVljQTQ0Qng0Qmp3REhnR0hBTU9BWWNBNDRCeDBCS0dQZ2ZKakZucUhkbXFZOEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1hZ2UtMTEtMmE3Mzc1ZThjNWI4ODY3N2FlNjUyYTc3ZWM5ZTY0NTcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ltYWdlLTEyLWRlODNhMTkzYTVkZGNkYjkzODUwNzRlM2EyNmZlNjVjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pbWFnZS0xMy0xMTI5ZTAwMWUyYTgyYzQ0M2Q4ZTM2MGZiOTQ5NTllNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1hZ2UtMTQtNGU1YjNmZTEyN2U1ODllMjcyZmMzNWNiOGQzNzkyZTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ltYWdlLTgtZDFkYzZmNjgxMjU1NmFjNjFkNDg1N2VhZWJlMGY0OTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ltYWdlLTktYmFiMTg4MDFkZTUwZDk0Nzk5OGNhYzUxOTFhZjlmMWEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2lwaG9uZXgxLTlmNzBkZTg3MWNjZmMxZjI4ODEzZmJiZWUxMzk4ZTc4LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlzQUFBQWJCQU1BQUFDK1VXR1BBQUFBRzFCTVZFWE16TXlXbHBiRnhjV2NuSnlqbzZPK3ZyNnhzYkczdDdlcXFxcW5FOXExQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUFaVWxFUVZRNGpXTmdHQVdqWUJUUURUQVpoTGdWdXpJd0ZKdTNPRk5naklwQVViQ1JjbXVxa1RKRE9DWE9FV0FYTncxVWNWQUlZV2lneUJpRzRHSm5sZ0kySjlZQ2lveHBVazZLMEhCSVkrQlFvTWlZRVBjVXA2WjBFeGNXU2t3WkJhT0F0Z0FBVFgwUFN4TUxKR0lBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR2dBQUFBY0JBTUFBQUIvZ2VkRkFBQUFIbEJNVkVYTXpNeVdscGJGeGNXam82Tyt2cjZxcXFxM3Q3ZXhzYkdlbnA2Y25KenBPQVM1QUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUFZa2xFUVZRNGpXTmdHQVdqWUJBQlJSWmpCMFVHQnJhWjZjWUZ4T3BoTW1SMk1RaGtkY3RVbXVreWdXaWJHQm1WeEJ5WmpKbFl6QVFUU05Fa3pzZ1F6bENzU1lwTnpDNk5na2JHN0FXY1NpUm9BZ1lFSTZ0YnBiSFpUT0tkTndwR01BQUEyQVFPRVdJU1pFSUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJZ0FBQUFiQkFNQUFBQlZadHFNQUFBQUcxQk1WRVhNek15V2xwYkZ4Y1djbkp5am82Tyt2cjZ4c2JHM3Q3ZXFxcXFuRTlxMUFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFBYUVsRVFWUTRqV05nR0FXallCUlFIU2l6dWlTNUJEQ3dHMWU0R0pCckJwTWp1NnBKVUVWWXNKSUJhd0haTG1Ga0tDeDJMbkpoWW5YZ0lOc01vQ0dzaHFFRzdnd3BDdUVVR01LaFpLeGsxTUtXd05CRWdTR3NMcVVtRVdyRkxnNE81QnN5Q2tZQk5RRUFQa3dPTis0elF0b0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUFrQkFNQUFBRGxad0F6QUFBQUcxQk1WRVhNek15V2xwYSt2cjZjbkp5M3Q3ZkZ4Y1dqbzZPeHNiR3FxcXFON0VLdEFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFBaUVsRVFWUTRqV05nR0FXallIQUJaV0VGVmdFZzNXakMwSnlLWDZrSml3RWJVQ2xUZ2pKTFF3VUJwU0VHSlFMbEhLNEJ6bXdLclBpVktncXFKZ2d3dXpHd0NURVhFbkJBZW5oYWdBQ0xFQU5ETVdOcEdYNmxvcXlDZ29Mc1Fpd0tnY3dCZ2ZpVnByQWtNQWdFS3pNbHVIRVVFREExVEN5QVFhQ2RvNkRSbERXUmdGdEh3U2pBQndDYm1CTnZJeWNJRGdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdjQUFBQWNCQU1BQUFDT2lyeklBQUFBRzFCTVZFWE16TXlXbHBiRnhjV2pvNk8rdnI2eHNiRzN0N2Vjbkp5cXFxcFNqL0Y4QUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUFYMGxFUVZRNGpXTmdHQVdqWVBBQUpnRm5FMmRUQm9iMHNtQlRvalVwQzVnNEo3bTNwQldwbDdnVGI1V0FrQ0tibUxLQmduT2lHRW1hR053NUFsaU5TTExKeE5sSVhka2dsS0ZJblFSTnppYnVaUzJweGNicFpjUnJHZ1VqR0FBQWpzTVBLWXZMeFhzQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWRRQUFBREdDQU1BQUFCY2tJRjZBQUFBaWxCTVZFVUFBQUJVVk5SVFU5UlJVZFJXVnROVVZOUlVWTlJWVmRWVVZOUlVWTlZXVnRSWVdNdFVWTlJVVk5WVVZOUlVWTlZVVk5SVVZOVlRVOVJVVk5SVlZkUlBUOTlVVk5SVVZOVlVWTlZVVk5SVVZOUlVWTlJVVk5SVFU5UlRVOVJVVk5SVVZOUlVWTlJVVk5SVVZOVlRVOVZWVmRWVFU5VlRVOVZVVk5WVVZOUlRVOVZVVk5SVFU5VlVWTlM0N1B6MEFBQUFMWFJTVGxNQS9lSU5DUGpVSU90VEd3VHd6VHpuc2Fta1hCUUJ4NzZlZ0hOcVJpM2NlV0gwdUVwQko1R0ROVTJaaUpWRk1VQ21BQUFGSjBsRVFWUjQydXphN1U0YVVSaEY0WDFnK0JvR2NBb0RLZ01DQW1McDNQL3QxYlJOb3lrcVJocm43S3puRnRhUGs1M3pxb0tackVOVU80OGlxcHU5aU9wbTBDZXFtMUZIUkRVVHRpS3FteHNSMWMyc0lLcWIwVVJFZGJNVlVkM2NpYWh1Y2hIVnpTQWhxcHR1S3FLYUNVTVIxYzJkaU9vbUYxSGREQktpdXVtbUlxcVoxbEJFZGJNU1VkMGNSVlEzZVVGVU45TkVSRFhUbUlpb1pyS0ZpR29tbENLcW0xc1IxYzFlUkhWelZSRFZ6U3dSVWMyMG15S3FtVkVxb3BycExrUlVNNjJEaUdvbVBJcW9idVlpcXBzYkVkWE5EeEhWemJlQ3FHNnUraUtxbVdraW9wcHBUMFJVTTh0VVJEWFQ3WWlvWnRZSEVkWE1laWlpbW5scVNsUXpyYUdJYXFaVmlxaG1RaW1pbWdrOUVkVk02SW1vWnNKS1JEVVR4aUtxbVRBV1VjMkVzWWhxSnZSRVZET3Rub2hxcGxXS3FHYWVtaExWekxvVVVjMWtReEhWekdnaG9wcHA3RVJVTSsxVVJEVXpiWXFvWm1aTkVkVk1ub2lvWnI0WElxcVpCNG1vWHNKWVJEV3pMa1ZVTTQyRGlHcW1uWXFvWnFaTkVkVk1ub2lvWmg0S0VkVkxtRXRFOVpLVklxcVp4azVFTlROSVJWUXplU0tpbXRrWElxcVhNSmVJNmlVclJWUXp5NTFFVkMrYnBpU2lPZ20zaFo0UTFVaDNxMStJNm1QYTBXOUV0WEdkNkEraW1taXQ5QmRSUGJ5NFJTS3FoZGxFenhEVlFIam82em1peHE5N3I1ZUlHcjEvbHd4UlkzZGl5UkExYmllWERGR2p0bHpvQktMRzdGdFRweEExWHV1eFRpTnF0QVlkdllLb2tRckh2bDVEMURpTlNyMk9xRkhhVFBRR29zYm9UbThpYW56YUI3Mk5xTEVKKzBUdklHcGtsbHU5aTZoeHVXN3FmVVNOeWVoUjV5QnFSSzRtT2d0Um81R3RkQ2FpeG1LVDZseEVqVU4zclBNUk5Rb2ZlMDJKR29GUlR4OUMxUHI3OERZbGF0MDE3dlhsS2x4U09DYjZlaFV1YUxwVEhWUzRtR3hlcUJZcVhFcWVxaVlxUlB6SFJ0VC82cWdhcVhBQm00N3FwTUtudFV2VlM0VlB5bTc3cXBtZjdkeHJjcHN3RklaaFVBcUJscXZvY0swQmcrTzc5cis5dXUwdno2UWVEQ1E1T3ZyZUxUeGprSTZFRlZxVUxYOWE1RkpvU2VIUklwaEM4NHQ3aTJRS3pjMDVmUGx4REZEWHpTN0pESkNBdWxMRHhxS2JRaHgycGtCZFdremxOQWFvYStWVVZOZEhRSjJaZmFXN1BnTHF2QklhVnh1QXVsNWhaR21SUWxOcmZlTHJJNkErbTllUU80d0I2a0xTanZ5U0Y2aWNTWUU2b2JqV2l4U29FMGdwM0xrSDZvcUpSajlTb0Q2c2JTd3RVK2gvaGRyc1M0RTZzWUhRalh1Z3JwR2RhakhqQmVyMHRudGFGKzZCdXJpNEluaVRGNmhMeWpOOVJyeEFuWklqU2Q3TkJ1cjh2SU1HbHhxQStreGhyK1BzQ0tnUGtocnZTb0g2WG0ybi9Yb1hxSGM1NlM5ZHA0RkFmVCtoLzZZVXFQY2xCUDV5N2haUVYwdFVYSFl3UVAyWG5ad1lUSTZBYXNhUDFGQlUzajlTSTFIZGp2ZVAxRHhVY2FIOC9UZFFuOCs3UnV5bURHYWpidVhJL1VWcUdPbzJ6WFM3WXcvVWh3V3B6K2RNRGFpM0Fua3lUcFEzcWxlYTlCNDFBTlhPRDVHaG9reFJSZWx6UEZBekY5VXBhak1HRE1hZ3RsY2oxMFY4VVlPazBmeGpDYURlWlljbUw0czRvb295TTN0WnhBMzFCb3BuTGlkVUlYdUFja0oxeTBicnI0THZBNnBJdTUxWlp5NjhVYjJoR3JFbTRvTXFrc3JIRzVRTnFoT1dUWVRuTFJ0VU42MThESEs1b0RwL09URWptdHU1RUlwUW9qalhKK3hXbHZkdDQ5YzNXMXQ5WWZZZlRYK0RNNWFWKy9HMjY2dXlhR2ZnTHNJc3EzNzNoa2Z0Qi9jOXlycTlIRUxocUEvS0VlRWc5MTBXWVpmeStiMjhIc2UrUGx4bGtyc2lVQXNLaEpzbjhucW8rL0g0aWcwS29WNWVOOUhvWjAzZFhmWm5tUXhGSHJwdUsySXYyS3BiMjhDTFJldTZZVjRNaVR6dkwxM2RaUDRZYmFENHVmMEdhbWxPVXNwRldrb0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFiTUFBQUJuQ0FNQUFBQzk2MXc0QUFBQWsxQk1WRVVBQUFEKzNGci8zVnI5M0ZyLzBGWC8xbC85M0ZyLzNWci8zVnIrM0ZyKzNGci8zRnIvM1ZyLzNWciszRnIrM0ZyKzNGciszRnI5M0ZuLzNGbiszVnI5M0ZuOTNWci8zRmorM0ZyKzNGciszRnIrM0ZuLzNWci8zRnIvM1ZyLzRWbiszRm4rM0ZyKzNGci8zRnIvM1ZyKzNWcjkzVm4vM0Z2LzNWci8zbHIvNFZyKzNWci8zRmYrM0ZyLzNWbi8zRmorM0ZwNFU2NmpBQUFBTUhSU1RsTUE0aUNrQkF5RGFWTHYzWE5KUGZ6cjE4eWZLZk9ha2hyNDU3YXZmbmhoQ05LL3ExMVl1b2RPUWkwUnlCWEVOakppanpYNkFBQURsRWxFUVZSNDJ1M2NpWGFhVUJTRjRjMk1Db2xDQktzaXpsTnNldC8vNlVyYXBrMGJCMXh0MG5Od2Y2L3dML1J3dUFEWE42UUxnT2pla0NhbzJGTkRpdUJabVJqU0E5OU5Cb2Ewd0ErN3RpRWw4TUp6RE9tQVh4WVBoalRBSzNiUGtBSjR6VjBia2crL2kxcUdwTU1mOHMrR2hNTWJoU0haOE5hWHJpSEpjRVNaR1JJTVIyMHRRMkxodUQyM0luTGhsQ1duZnFsd1VyNHlKQkxPbVBCU0V3bm41RU5EOHVDOEpjK0t5SU1MRG5ORHd1Q2lrSmVhTUxqc3dCTStzcUNPaUdzUlNWQ0x0NzR6SkFWcVNubnVRQXpVNVFhOHd4WUM5ZVhjRzh1QWEyeDVjRlVDWEljSHN3VEFsV3l1SVA4N1hDM2lEK1IxQkRSRDJlRUVlUTBKellBREo4Z3J5R2dHUFBIVjBOcWtOQU1tbnd6VklxY1pQSi92UHRVaXFCbVFKOXdjMXlDcUdiRGpHeG1YQ1dzR2JIaTQveEp4emVBR1BIdHducnhtZ0RmbWh5ck9rZGdNeURNT0k2ZkpiQWFrSTBNblNHMEd4RHg4Y0lMY1prRElFZklveWMwNFFoNG51aG5nalZudERlSE5BSzlndFQrSWJ3WjRIVzc4ZjZPZ0dWQ3kybXNxbWdGbHdCUCtQeWxwVm1HMUYzcWF3UTE1bC8yTm9tYVZtSWNoSzdxYUFhbkQ3YkcyWm9DZDhkaUl0bWJBZnN6Ulgxc3p3RjArR3RMVnJQTEVQeloxellCOHpXUCsycG9CWmNBbmJOcWFWYmI4ckkrNlprQmU4UDAxYmMwcTBZanppTFptUUQ3bUJsbGJzMHJJWGFTNlpvRHRjeitpclJuZ2h2em1zYlptdk5oVU51UEZwckZaeFI1elFhS3RXV1czNXZTdnJWa2w3bk9KckswWjRFWU9IMm9yYTFieGxuTm1VOWFzNG9XODJyUTFxNVNiaFA5dHlwcFYzS2pQTjJ5VU5hdTRzZi9JcHphNm1qM2JMeE11dDVRMWU3YnJyUGdGRW1YTkt0NG00NUdFSDlyUXd3NUdOMzhQOERBS2JPaHkwMVBKWGMrUFhhaTBuL1J2Y0oxczlaZDdxR1pQbkJ2cTFrNFcybjRRYjdxYjVVd2EwdXRGR2pnTmZscmFUWUlVamVSdGkzbmpMamhyWG13OU5OdGg0Njhhc2xXK0gvclJBYmZDM294SHF1KzgyNk54MkxCL3IxcThPRWg2NmxaZGcxNFN4RTMvTWJ6Z3k5SWZLWmxPdW5OL3VRTjk1NmJoZUQ0VmU4ME5wdk54bUNyZGJMeXpkTlBwejBSTmx0YXMzOWswZEl6L2w4bzAvUC9wbm1PRmFRbTZobXR2SjM0eWE5K1pEM1RYbmlYK1pHdnpkL0R2NVBHaXlKeFZ6eHFZZHpLd2Vpc25LeGJ4TFk3djc4eXpuNkpGeDgrYzRlZXAxVEovb1dWTlB3K2R6Tzhzb2lmN3hpZjNEN1czZDNFVUxvSk9zYzc2em1nNGUreE51MjNyMDMzcndWUWVXdmVmckhaMzJudWNEVWRPUDFzWG5XQVJSdkhPM3VPRGZBVkRxZW91a1ZZM3Z3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2VjdXJpdHktZ3VhcmQtNzY5ZDMxZjhjYzg5OTVjMjhkNzU4Y2YzNWEzOTY0YmIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE1qVXdJaUJvWldsbmFIUTlJakV5TlRBaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TWpVd0lERXlOVEFpUGp4a1pXWnpQanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpYURVMloyRWlJSGd4UFNJMU56VXVPRFVpSUhneVBTSTVOVEV1T0RRaUlIa3hQU0kxTmprdU1EY2lJSGt5UFNJeE1UVTBMamsySWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStQSE4wYjNBZ2IyWm1jMlYwUFNJd0lpQnpkRzl3TFdOdmJHOXlQU0lqT0dRNFpHVmpJaUJ6ZEc5d0xXOXdZV05wZEhrOUlpNHhOeUl2UGp4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUl6VTBOVFJrTkNJZ2MzUnZjQzF2Y0dGamFYUjVQU0l3SWk4K1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0OEwyUmxabk0rUEdjK1BHYytQSEJoZEdnZ1ptbHNiRDBpZFhKc0tDTm9OVFpuWVNraUlHUTlJazAyTWpVZ01USTFNR016TkRVdU1UYzRJREFnTmpJMUxUSTNPUzQ0TWpJZ05qSTFMVFl5TlZNNU56QXVNVGM0SURBZ05qSTFJREFnTUNBeU56a3VPREl5SURBZ05qSTFjekkzT1M0NE1qSWdOakkxSURZeU5TQTJNalY2SWk4K1BDOW5Qand2Wno0OEwzTjJaejQ9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TURFd0lpQm9aV2xuYUhROUlqRXlNaUlnZG1sbGQwSnZlRDBpTUNBd0lERXdNVEFnTVRJeUlqNDhaejQ4Wno0OGNHRjBhQ0JtYVd4c1BTSWpabVptSWlCa1BTSk5NVGM1Tnk0M01UTXRNaTR4TXpGVE5qTXhMakV4TkMwek5TNDVNRFVnTVRrMExqRTRPU0E0Tnk0ek9HTXRORE0yTGpreU5TQXhNak11TWpnMUlEQXRNVEl5TGpBek1pQXdMVEV5TWk0d016Sm9NVFl3TlNJdlBqd3ZaejQ4TDJjK1BDOXpkbWMrXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TURFd0lpQm9aV2xuYUhROUlqRXlNaUlnZG1sbGQwSnZlRDBpTUNBd0lERXdNVEFnTVRJeUlqNDhaejQ4Wno0OGNHRjBhQ0JtYVd4c1BTSWpabVptSWlCa1BTSk5MVGM0T0M0MU1qUXRNaTR4TXpGVE16YzRMakEzTlMwek5TNDVNRFVnT0RFMUlEZzNMak00WXpRek5pNDVNalVnTVRJekxqSTROU0F3TFRFeU1pNHdNeklnTUMweE1qSXVNRE15U0MwM09UQWlMejQ4TDJjK1BDOW5Qand2YzNablBnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCM2FXUjBhRDBpTVRZd01IQjRJaUJvWldsbmFIUTlJakV5TTNCNElpQjJhV1YzUW05NFBTSXdJREFnTVRZd01DQXhNak1pSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK0NpQWdJQ0E4SVMwdElFZGxibVZ5WVhSdmNqb2dVMnRsZEdOb0lEVTVJQ2c0TmpFeU55a2dMU0JvZEhSd2N6b3ZMM05yWlhSamFDNWpiMjBnTFMwK0NpQWdJQ0E4ZEdsMGJHVStkMmhwZEdVdFkzVnlkbVV0TVR3dmRHbDBiR1UrQ2lBZ0lDQThaR1Z6WXo1RGNtVmhkR1ZrSUhkcGRHZ2dVMnRsZEdOb0xqd3ZaR1Z6WXo0S0lDQWdJRHhuSUdsa1BTSlFZV2RsTFRFaUlITjBjbTlyWlQwaWJtOXVaU0lnYzNSeWIydGxMWGRwWkhSb1BTSXhJaUJtYVd4c1BTSnViMjVsSWlCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaVBnb2dJQ0FnSUNBZ0lEeG5JR2xrUFNKTVlXNWthVzVuTFRFaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREF1TURBd01EQXdMQ0F0TVRrME55NHdNREF3TURBcElpQm1hV3hzUFNJalJrWkdSa1pHSWo0S0lDQWdJQ0FnSUNBZ0lDQWdQR2NnYVdROUlrWmxZWFIxY21WeklpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TlM0d01EQXdNREFzSURFeE16RXVNREF3TURBd0tTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NUzQwTnpVNE9UazROeXc1TURVdU5URXhOekU1SUVNM056a3VNakE0TlRjNExEa3lPQzR3TWpjek5EUWdNVE14TXk0M01UWTJNU3c0T1RndU1Ua3dNVEEwSURFMk1EVXNPREUySUVNeE5qQTFMRGc1Tnk0ek5UUXhOamNnTVRZd05TdzVNemd1TURNeE1qVWdNVFl3TlN3NU16Z3VNRE14TWpVZ1REQXNPVE00TGpBek1USTFJaUJwWkQwaWQyaHBkR1V0WTNWeWRtVXRNU0krUEM5d1lYUm9QZ29nSUNBZ0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBZ0lDQWdQQzluUGdvZ0lDQWdQQzluUGdvOEwzTjJaejQ9XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCB0eXBvZ3JhcGh5LCBzaGFkb3cgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjZweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuICAmOmhvdmVyLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgICR7Y29sb3J9O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgQSA9ICh7IGhyZWYgPSBcIiNcIiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gPFBhcmFncmFwaCBocmVmPXtocmVmfSBjb2xvcj1cInNlY29uZGFyeVwiIHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIGNvbG9yLFxuICBiYWNrZ3JvdW5kLFxuICBzcGFjZSxcbiAgYm9yZGVyLFxuICB0eXBvZ3JhcGh5LFxuICBzaGFkb3csXG4gIGZsZXhib3gsXG4gIGxheW91dCxcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcblxuY29uc3QgQmFkZ2VTb2xpZCA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICR7Y29sb3J9O1xuICAke2JhY2tncm91bmR9O1xuICAke2JvcmRlcn07XG4gICR7c3BhY2V9O1xuICAke3R5cG9ncmFwaHl9O1xuICAke3NoYWRvd307XG4gICR7ZmxleGJveH07XG4gICR7bGF5b3V0fTtcbmA7XG5cbmNvbnN0IEJhZGdlID0gKHsgY29sb3IgPSBcImxpZ2h0XCIsIGJnID0gXCJwcmltYXJ5XCIsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCYWRnZVNvbGlkXG4gICAgICBjb2xvcj17Y29sb3J9XG4gICAgICBib3JkZXI9e2AxcHggc29saWRgfVxuICAgICAgYm9yZGVyQ29sb3I9e2JnfVxuICAgICAgYmc9e2JnfVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhZGdlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIGNvbG9yLFxuICBzcGFjZSxcbiAgbGF5b3V0LFxuICBmbGV4Ym94LFxuICBncmlkLFxuICB0eXBvZ3JhcGh5LFxuICBiYWNrZ3JvdW5kLFxuICBib3JkZXIsXG4gIHBvc2l0aW9uLFxuICBzaGFkb3csXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi13aWR0aDogMDtcbiAgJHtjb2xvcn07XG4gICR7c3BhY2V9O1xuICAke2xheW91dH07XG4gICR7ZmxleGJveH07XG4gICR7Z3JpZH07XG4gICR7dHlwb2dyYXBoeX07XG4gICR7YmFja2dyb3VuZH07XG4gICR7Ym9yZGVyfTtcbiAgJHtwb3NpdGlvbn07XG4gICR7c2hhZG93fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBjb2xvcixcbiAgYmFja2dyb3VuZCxcbiAgc3BhY2UsXG4gIGJvcmRlcixcbiAgdHlwb2dyYXBoeSxcbiAgc2hhZG93LFxuICBmbGV4Ym94LFxuICBsYXlvdXQsXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmNvbnN0IEJ1dHRvblNvbGlkID0gc3R5bGVkLmJ1dHRvbmBcbiAgcGFkZGluZzogMC44NXJlbSAxLjc1cmVtO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAke2NvbG9yfTtcbiAgJHtiYWNrZ3JvdW5kfTtcbiAgJHtib3JkZXJ9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuICAke2ZsZXhib3h9O1xuICAke2xheW91dH07XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgJjpob3ZlcjpiZWZvcmUsXG4gICY6Zm9jdXM6YmVmb3JlLFxuICAmOmFjdGl2ZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41MiwgMS42NCwgMC4zNywgMC42Nik7XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbk91dGxpbmUgPSBzdHlsZWQoQnV0dG9uU29saWQpYFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSwgY29sb3IgfSkgPT4gdGhlbWUuY29sb3JzW2NvbG9yXX07ICovXG4gIC8qIGNvbG9yOiAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PiB0aGVtZS5jb2xvcnNbY29sb3JdfTsgKi9cblxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSwgY29sb3IgfSkgPT4gdGhlbWUuY29sb3JzW2NvbG9yXX07XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmt9O1xuICB9XG4gICY6aG92ZXI6YmVmb3JlLFxuICAmOmZvY3VzOmJlZm9yZSxcbiAgJjphY3RpdmU6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTIsIDEuNjQsIDAuMzcsIDAuNjYpO1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUsIGNvbG9yIH0pID0+IHRoZW1lLmNvbG9yc1tjb2xvcl19O1xuICB9XG5gO1xuXG5jb25zdCBCdXR0b24gPSAoe1xuICB2YXJpYW50ID0gXCJzb2xpZFwiLFxuICBjb2xvciA9IFwibGlnaHRcIixcbiAgYmcgPSBcInByaW1hcnlcIixcbiAgLi4ucmVzdFxufSkgPT4ge1xuICByZXR1cm4gdmFyaWFudCA9PT0gXCJzb2xpZFwiID8gKFxuICAgIDxCdXR0b25Tb2xpZFxuICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgYm9yZGVyPXtgMXB4IHNvbGlkYH1cbiAgICAgIGJvcmRlckNvbG9yPXtiZ31cbiAgICAgIGJnPXtiZ31cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICkgOiAoXG4gICAgPEJ1dHRvbk91dGxpbmVcbiAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgIGJnPXtiZ31cbiAgICAgIGJvcmRlcj17YDFweCBzb2xpZGB9XG4gICAgICBib3JkZXJDb2xvcj17Y29sb3J9XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIHNwYWNlLFxuICBib3JkZXIsXG4gIHR5cG9ncmFwaHksXG4gIHNoYWRvdyxcbiAgZmxleGJveCxcbiAgbGF5b3V0LFxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5jb25zdCBDaGVja1N0eWxlZCA9IHN0eWxlZC5sYWJlbGBcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBpbnB1dDpjaGVja2VkIH4gLmNoZWNrOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMTRhXCI7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gIH1cblxuICAke2JvcmRlcn07XG4gICR7c3BhY2V9O1xuICAke3R5cG9ncmFwaHl9O1xuICAke3NoYWRvd307XG4gICR7ZmxleGJveH07XG4gICR7bGF5b3V0fTtcbmA7XG5cbmNvbnN0IENoZWNrID0gc3R5bGVkLnNwYW5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRvcDogLTJweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjBjOFwiO1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6ICNlMmU0ZTg7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHR9O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuYDtcblxuY29uc3QgQ2hlY2tib3ggPSAoe1xuICBjaGlsZHJlbiA9IFwiS2VlcCBtZSBzaWduZWQgaW5cIixcbiAgb25DbGljayA9ICgpID0+IHt9LFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IHVJRCA9IFwiY2hlY2tfXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tTdHlsZWQgey4uLnJlc3R9IGh0bWxGb3I9e3VJRH0+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZC1ub25lXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9e3VJRH0gLz5cbiAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJjaGVja1wiPjwvQ2hlY2s+XG4gICAgICA8VGV4dD57Y2hpbGRyZW59PC9UZXh0PlxuICAgIDwvQ2hlY2tTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1xuICBjb2xvcixcbiAgc3BhY2UsXG4gIHR5cG9ncmFwaHksXG4gIHNoYWRvdyxcbiAgbGF5b3V0LFxuICBib3JkZXIsXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmNvbnN0IElucHV0U29saWQgPSBzdHlsZWQuaW5wdXRgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxLjI3NXJlbSAxLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6ICR7KHsgdGhlbWUgfSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJ9YH07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuICAke2xheW91dH07XG4gICR7Ym9yZGVyfTtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUsIGZvY3VzQ29sb3IgfSkgPT4gdGhlbWUuY29sb3JzW2ZvY3VzQ29sb3JdfTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IElucHV0QW5pbWF0aW9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAke2NvbG9yfTtcbiAgJHtzcGFjZX07XG4gICR7dHlwb2dyYXBoeX07XG4gICR7c2hhZG93fTtcbiAgJHtsYXlvdXR9O1xuICAke2JvcmRlcn07XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxLjI3NXJlbSAxcmVtO1xuICAgIGJvcmRlcjogJHsoeyB0aGVtZSB9KSA9PiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlcn1gfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmt9O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyOiAkeyh7IHRoZW1lIH0pID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fWB9O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMTVweDtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmtTaGFkZX07XG4gICAgdG9wOiA1MCU7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBJbnB1dCA9ICh7XG4gIHZhcmlhbnQgPSBcInNvbGlkXCIsXG4gIHR5cGUgPSBcInRleHRcIixcbiAgZm9jdXNDb2xvciA9IFwic2Vjb25kYXJ5XCIsXG4gIHBsYWNlaG9sZGVyLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIHJldHVybiB2YXJpYW50ID09PSBcImFuaW1hdGlvblwiID8gKFxuICAgIDxJbnB1dEFuaW1hdGlvbiB7Li4ucmVzdH0+XG4gICAgICA8aW5wdXQgd2lkdGg9XCIxMDAlXCIgdHlwZT17dHlwZX0gY29sb3I9XCJ0ZXh0XCIgYmc9XCJsaWdodFwiIC8+XG4gICAgICA8bGFiZWw+e3BsYWNlaG9sZGVyfTwvbGFiZWw+XG4gICAgPC9JbnB1dEFuaW1hdGlvbj5cbiAgKSA6IChcbiAgICA8SW5wdXRTb2xpZFxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgICBjb2xvcj1cInRleHRcIlxuICAgICAgYmc9XCJsaWdodFwiXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICBmb2N1c0NvbG9yPXtmb2N1c0NvbG9yfVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcblxuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5cbmNvbnN0IElucHV0R3JvdXBTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBJY29uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMjdweDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiByZ2JhKHRoZW1lLmNvbG9ycy5kYXJrLCAwLjQpfTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuYDtcblxuY29uc3QgSW5wdXRHcm91cCA9ICh7XG4gIHR5cGUgPSBcInRleHRcIixcbiAgZm9jdXNDb2xvciA9IFwic2Vjb25kYXJ5XCIsXG4gIGljb24gPSA8c3BhbiBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGVcIiAvPixcbiAgLi4ucmVzdFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxJbnB1dEdyb3VwU3R5bGVkPlxuICAgICAgPElucHV0XG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIGNvbG9yPVwidGV4dFwiXG4gICAgICAgIGJnPVwibGlnaHRcIlxuICAgICAgICBmb2N1c0NvbG9yPXtmb2N1c0NvbG9yfVxuICAgICAgICBwbD1cIjQuMTI1cmVtXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICAgPEljb24gY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPntpY29ufTwvSWNvbj5cbiAgICA8L0lucHV0R3JvdXBTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEdyb3VwO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgbGkge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgbWluLXdpZHRoOiAxMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxMHB4O1xuICAgICAgbWluLWhlaWdodDogMTBweDtcbiAgICAgIG1heC1oZWlnaHQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XG5cbmNvbnN0IFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxCb3ggcHk9e1s1LCBudWxsLCBcIjgwcHhcIiwgNl19IHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IFtcbiAgeyB2YWx1ZTogXCJjaG9jb2xhdGVcIiwgbGFiZWw6IFwiQ2hvY29sYXRlXCIgfSxcbiAgeyB2YWx1ZTogXCJzdHJhd2JlcnJ5XCIsIGxhYmVsOiBcIlN0cmF3YmVycnlcIiB9LFxuICB7IHZhbHVlOiBcInZhbmlsbGFcIiwgbGFiZWw6IFwiVmFuaWxsYVwiIH0sXG5dO1xuXG5jb25zdCBnZXRDdXN0b21TdHlsZXMgPSAodGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvcHRpb246IChwcm92aWRlZCwgc3RhdGUpID0+ICh7XG4gICAgICAuLi5wcm92aWRlZCxcbiAgICAgIGNvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkID8gdGhlbWUuY29sb3JzLnNlY29uZGFyeSA6IHRoZW1lLmNvbG9ycy5kYXJrLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMud2hpdGUsXG4gICAgfSksXG4gICAgY29udHJvbDogKHByb3ZpZGVkLCBzdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvdmlkZWQsXG4gICAgICAgIGJvcmRlcjogc3RhdGUubWVudUlzT3BlbiB8fCBzdGF0ZS5pc0ZvY3VzZWQgXG4gICAgICAgICAgPyBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeX0gIWltcG9ydGFudGBcbiAgICAgICAgICA6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyfSAhaW1wb3J0YW50YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgcGFkZGluZzogXCIxLjI3NXJlbSAxcmVtXCIsXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgU2VsZWN0U3R5bGVkID0gKHtcbiAgdGhlbWUsXG4gIG5hbWUgPSBcIml0ZW1cIixcbiAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFxuICAgICAgc3R5bGVzPXtnZXRDdXN0b21TdHlsZXModGhlbWUpfVxuICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25zWzFdfVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFNlbGVjdFN0eWxlZCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCB0eXBvZ3JhcGh5LCBzaGFkb3cgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5jb25zdCBTcGFuU3R5bGVkID0gc3R5bGVkLnNwYW5gXG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuYDtcblxuY29uc3QgU3BhbiA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIDxTcGFuU3R5bGVkIHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGFuO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtcbiAgc3BhY2UsXG4gIGJvcmRlcixcbiAgdHlwb2dyYXBoeSxcbiAgc2hhZG93LFxuICBmbGV4Ym94LFxuICBsYXlvdXQsXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmNvbnN0IFN3aXRjaFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZDogJHsoeyBhY3RpdmUsIHRoZW1lLCBiZyB9KSA9PlxuICAgIGFjdGl2ZSA/IHRoZW1lLmNvbG9yc1tiZ10gOiBgI2VhZTlmMmB9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAke2JvcmRlcn07XG4gICR7c3BhY2V9O1xuICAke3R5cG9ncmFwaHl9O1xuICAke3NoYWRvd307XG4gICR7ZmxleGJveH07XG4gICR7bGF5b3V0fTtcbmA7XG5cbmNvbnN0IFJvdW5kID0gc3R5bGVkLnNwYW5gXG4gIHdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIGxlZnQ6ICR7KHsgYWN0aXZlIH0pID0+IChhY3RpdmUgPyBgY2FsYygxMDAlIC0gMzNweClgIDogYDBgKX07XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5gO1xuXG5jb25zdCBTd2l0Y2ggPSAoeyBiZyA9IFwic2Vjb25kYXJ5XCIsIG9uQ2xpY2sgPSAoKSA9PiB7fSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3dpdGNoID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgICBvbkNsaWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoU3R5bGVkXG4gICAgICBiZz17Ymd9XG4gICAgICB7Li4ucmVzdH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVN3aXRjaH1cbiAgICAgIGFjdGl2ZT17YWN0aXZlID8gMSA6IDB9XG4gICAgPlxuICAgICAgPFJvdW5kIGFjdGl2ZT17YWN0aXZlID8gMSA6IDB9IC8+XG4gICAgPC9Td2l0Y2hTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCB0eXBvZ3JhcGh5LCBzaGFkb3cgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQucGBcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjZweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuYDtcblxuY29uc3QgUGFyYWdyYXBoU21hbGwgPSBzdHlsZWQoUGFyYWdyYXBoKWBcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgJHtjb2xvcn07XG4gICR7c3BhY2V9O1xuICAke3R5cG9ncmFwaHl9O1xuICAke3NoYWRvd307XG5gO1xuXG5jb25zdCBUZXh0ID0gKHsgdmFyaWFudCwgLi4ucHJvcHMgfSkgPT4ge1xuICBsZXQgVGV4dFJlbmRlcjtcblxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICBjYXNlIFwic21hbGxcIjpcbiAgICAgIFRleHRSZW5kZXIgPSBQYXJhZ3JhcGhTbWFsbDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBUZXh0UmVuZGVyID0gUGFyYWdyYXBoO1xuICB9XG5cbiAgcmV0dXJuIDxUZXh0UmVuZGVyIGNvbG9yPVwidGV4dFwiIHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGNvbG9yLCBzcGFjZSwgdHlwb2dyYXBoeSwgc2hhZG93IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5jb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMi41cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhICR7ZGV2aWNlLnNtfSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xuICB9XG5cbiAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAke2NvbG9yfTtcbiAgJHtzcGFjZX07XG4gICR7dHlwb2dyYXBoeX07XG4gICR7c2hhZG93fTtcbmA7XG5cbmNvbnN0IEhlcm9UaXRsZSA9IHN0eWxlZChTZWN0aW9uVGl0bGUpYFxuICBsZXR0ZXItc3BhY2luZzogLTIuODFweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICBAbWVkaWEgJHtkZXZpY2Uuc219IHtcbiAgICBmb250LXNpemU6IDY2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIH1cblxuICBAbWVkaWEgJHtkZXZpY2UubGd9IHtcbiAgICBmb250LXNpemU6IDc2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDg0cHg7XG4gIH1cblxuICBAbWVkaWEgJHtkZXZpY2UueGx9IHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDg0cHg7XG4gIH1cbmA7XG5cbmNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjZweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgJHt0eXBvZ3JhcGh5fTtcbiAgJHtzaGFkb3d9O1xuYDtcblxuY29uc3QgVGl0bGUgPSAoeyB2YXJpYW50LCAuLi5yZXN0IH0pID0+IHtcbiAgbGV0IFRpdGxlU3R5bGVkID0gU2VjdGlvblRpdGxlO1xuXG4gIHN3aXRjaCAodmFyaWFudCkge1xuICAgIGNhc2UgXCJjYXJkXCI6XG4gICAgICBUaXRsZVN0eWxlZCA9IENhcmRUaXRsZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoZXJvXCI6XG4gICAgICBUaXRsZVN0eWxlZCA9IEhlcm9UaXRsZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBUaXRsZVN0eWxlZCA9IFNlY3Rpb25UaXRsZTtcbiAgfVxuXG4gIHJldHVybiA8VGl0bGVTdHlsZWQgY29sb3I9XCJoZWFkaW5nXCIgey4uLnJlc3R9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iLCJpbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgQSBmcm9tIFwiLi9BXCI7XG5pbXBvcnQgQmFkZ2UgZnJvbSBcIi4vQmFkZ2VcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9TZWN0aW9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9DaGVja2JveFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcIi4vSW5wdXRHcm91cFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9TZWxlY3RcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5pbXBvcnQgU3BhbiBmcm9tIFwiLi9TcGFuXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5cbmV4cG9ydCB7XG4gIEJveCxcbiAgVGl0bGUsXG4gIFRleHQsXG4gIEEsXG4gIEJhZGdlLFxuICBCdXR0b24sXG4gIFNlY3Rpb24sXG4gIElucHV0LFxuICBDaGVja2JveCxcbiAgSW5wdXRHcm91cCxcbiAgU2VsZWN0LFxuICBTd2l0Y2gsXG4gIFNwYW4sXG4gIExpc3QsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5cclxuY29uc3QgUGFnZVdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgaGVhZGVyRGFyayA9IGZhbHNlLCBmb290ZXJEYXJrID0gZmFsc2UgfSkgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChoZWFkZXJEYXJrKSB7XHJcbiAgICAgIGdDb250ZXh0LmdvSGVhZGVyRGFyaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ0NvbnRleHQuZ29IZWFkZXJMaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmb290ZXJEYXJrKSB7XHJcbiAgICAgIGdDb250ZXh0LmdvRm9vdGVyRGFyaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ0NvbnRleHQuZ29Gb290ZXJMaWdodCgpO1xyXG4gICAgfVxyXG4gIH0sIFtnQ29udGV4dCwgaGVhZGVyRGFyaywgZm9vdGVyRGFya10pO1xyXG5cclxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9QYWdlV3JhcHBlclwiO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEdsb2JhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGhlbWVEYXJrLCBzZXRUaGVtZURhcmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdmlkZW9Nb2RhbFZpc2libGUsIHNldFZpZGVvTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Zpc2libGVPZmZDYW52YXMsIHNldFZpc2libGVPZmZDYW52YXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGVhZGVyRGFyaywgc2V0SGVhZGVyRGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb290ZXJEYXJrLCBzZXRGb290ZXJEYXJrXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbY2FydFRvdGFsLCBzZXRDYXJ0VG90YWxdID0gdXNlU3RhdGUoMyk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgc2V0VGhlbWVEYXJrKCF0aGVtZURhcmspO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVZpZGVvTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0VmlkZW9Nb2RhbFZpc2libGUoIXZpZGVvTW9kYWxWaXNpYmxlKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVPZmZDYW52YXMgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZU9mZkNhbnZhcyghdmlzaWJsZU9mZkNhbnZhcyk7XG4gIH07XG5cbiAgY29uc3QgZ29IZWFkZXJEYXJrID0gKCkgPT4ge1xuICAgIHNldEhlYWRlckRhcmsodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGdvSGVhZGVyTGlnaHQgPSAoKSA9PiB7XG4gICAgc2V0SGVhZGVyRGFyayhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZ29Gb290ZXJEYXJrID0gKCkgPT4ge1xuICAgIHNldEZvb3RlckRhcmsodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGdvRm9vdGVyTGlnaHQgPSAoKSA9PiB7XG4gICAgc2V0Rm9vdGVyRGFyayhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaW5jQ2FydFRvdGFsID0gKCkgPT4ge1xuICAgIHNldENhcnRUb3RhbChjYXJ0VG90YWwgKyAxKTtcbiAgfTtcbiAgY29uc3QgZGVjQ2FydFRvdGFsID0gKCkgPT4ge1xuICAgIHNldENhcnRUb3RhbChjYXJ0VG90YWwgLSAxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB0aGVtZURhcmssXG4gICAgICAgIHRvZ2dsZVRoZW1lLFxuICAgICAgICBoZWFkZXJEYXJrLFxuICAgICAgICBnb0hlYWRlckRhcmssXG4gICAgICAgIGdvSGVhZGVyTGlnaHQsXG4gICAgICAgIGZvb3RlckRhcmssXG4gICAgICAgIGdvRm9vdGVyRGFyayxcbiAgICAgICAgZ29Gb290ZXJMaWdodCxcbiAgICAgICAgdmlkZW9Nb2RhbFZpc2libGUsXG4gICAgICAgIHRvZ2dsZVZpZGVvTW9kYWwsXG4gICAgICAgIHZpc2libGVPZmZDYW52YXMsXG4gICAgICAgIHRvZ2dsZU9mZkNhbnZhcyxcbiAgICAgICAgY2FydFRvdGFsLFxuICAgICAgICBpbmNDYXJ0VG90YWwsXG4gICAgICAgIGRlY0NhcnRUb3RhbCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbENvbnRleHQ7XG5leHBvcnQgeyBHbG9iYWxQcm92aWRlciB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vc2VjdGlvbnMvbGFuZGluZzEvSGVyb1wiO1xyXG5pbXBvcnQgQ2xpZW50cyBmcm9tIFwiLi4vc2VjdGlvbnMvbGFuZGluZzEvQ2xpZW50c1wiO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tIFwiLi4vc2VjdGlvbnMvbGFuZGluZzEvRmVhdHVyZVwiO1xyXG5pbXBvcnQgQ29udGVudDEgZnJvbSBcIi4uL3NlY3Rpb25zL2xhbmRpbmcxL0NvbnRlbnQxXCI7XHJcbmltcG9ydCBDb250ZW50MiBmcm9tIFwiLi4vc2VjdGlvbnMvbGFuZGluZzEvQ29udGVudDJcIjtcclxuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gXCIuLi9zZWN0aW9ucy9sYW5kaW5nMS9UZXN0aW1vbmlhbFwiO1xyXG5pbXBvcnQgQ1RBIGZyb20gXCIuLi9zZWN0aW9ucy9sYW5kaW5nMS9DVEFcIjtcclxuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VXcmFwcGVyXCI7XHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQYWdlV3JhcHBlciBmb290ZXJEYXJrPlxyXG4gICAgICAgIDxIZXJvIC8+XHJcbiAgICAgICAgPENsaWVudHMgLz5cclxuICAgICAgICA8RmVhdHVyZSAvPlxyXG4gICAgICAgIDxDb250ZW50MSAvPlxyXG4gICAgICAgIDxDb250ZW50MiAvPlxyXG4gICAgICAgIDxUZXN0aW1vbmlhbCAvPlxyXG4gICAgICAgIDxDVEEgLz5cclxuICAgICAgPC9QYWdlV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmltcG9ydCB7XG4gIFRpdGxlLFxuICBCdXR0b24sXG4gIFNlY3Rpb24sXG4gIEJveCxcbiAgVGV4dCxcbiAgSW5wdXQsXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvcmVcIjtcblxuaW1wb3J0IGltZ092YWwgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9wbmcvbDEtY3RhLW92YWwucG5nXCI7XG5pbXBvcnQgc3ZnQ3VydmUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9zdmcvbDEtY3VydmUtY3RhLnN2Z1wiO1xuXG5jb25zdCBMZWZ0Q2FyZCA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMHB4O1xuYDtcblxuY29uc3QgUmlnaHRDYXJkID0gc3R5bGVkKEJveClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogLTI3NXB4O1xuYDtcblxuY29uc3QgQ1RBID0gKCkgPT4gKFxuICA8PlxuICAgIHsvKiA8IS0tIENUQSBzZWN0aW9uIC0tPiAqL31cbiAgICA8U2VjdGlvbiBiZz1cImRhcmtcIiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgPExlZnRDYXJkXG4gICAgICAgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiXG4gICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiNzUwXCJcbiAgICAgICAgZGF0YS1hb3Mtb25jZT1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8aW1nIHNyYz17aW1nT3ZhbH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgIDwvTGVmdENhcmQ+XG4gICAgICA8UmlnaHRDYXJkPlxuICAgICAgICA8aW1nIHNyYz17c3ZnQ3VydmV9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICA8L1JpZ2h0Q2FyZD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxDb2wgbGc9XCI3XCIgeGw9XCI2XCI+XG4gICAgICAgICAgICA8Qm94IG1iPXs1fSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8VGl0bGUgY29sb3I9XCJsaWdodFwiPkdldCBzdGFydGVkPC9UaXRsZT5cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJsaWdodFwiIG9wYWNpdHk9ezAuN30+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIGN1c3RvbSBsYW5kaW5nIHBhZ2VzIHdpdGggT21lZ2EgdGhhdCBjb252ZXJ0cyBtb3JlXG4gICAgICAgICAgICAgICAgdmlzaXRvcnMgdGhhbiBhbnkgd2Vic2l0ZS4gV2l0aCBsb3RzIG9mIHVuaXF1ZSBibG9ja3MsIHlvdSBjYW5cbiAgICAgICAgICAgICAgICBlYXNpbHkgYnVpbGQgYSBwYWdlIHdpdGhvdXQgY29kaW5nLlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8Qm94IG1iPXszfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IG1iPXszfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cIjEwMCVcIiB0eXBlPVwic3VibWl0XCIgYm9yZGVyUmFkaXVzPXsxMH0+XG4gICAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWQhIVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb24+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ1RBO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29yZVwiO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmltcG9ydCBpbWdMMUJyYW5kMSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3BuZy9sMS1icmFuZDEucG5nXCI7XG5pbXBvcnQgaW1nTDFCcmFuZDIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9wbmcvbDEtYnJhbmQyLnBuZ1wiO1xuaW1wb3J0IGltZ0wxQnJhbmQzIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvcG5nL2wxLWJyYW5kMy5wbmdcIjtcbmltcG9ydCBpbWdMMUJyYW5kNCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3BuZy9sMS1icmFuZDQucG5nXCI7XG5pbXBvcnQgaW1nTDFCcmFuZDUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9wbmcvbDEtYnJhbmQ1LnBuZ1wiO1xuXG5pbXBvcnQgaW1hZ2U4IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvcG5nL2ltYWdlLTgucG5nXCI7XG5pbXBvcnQgaW1hZ2U5IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvcG5nL2ltYWdlLTkucG5nXCI7XG5pbXBvcnQgaW1hZ2UxMCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3BuZy9pbWFnZS0xMC5wbmdcIjtcbmltcG9ydCBpbWFnZTExIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvcG5nL2ltYWdlLTExLnBuZ1wiO1xuaW1wb3J0IGltYWdlMTIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9wbmcvaW1hZ2UtMTIucG5nXCI7XG5pbXBvcnQgaW1hZ2UxMyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3BuZy9pbWFnZS0xMy5wbmdcIjtcbmltcG9ydCBpbWFnZTE0IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvcG5nL2ltYWdlLTE0LnBuZ1wiO1xuXG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDMyJTtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xuICAgIG1hcmdpbi10b3A6IDAuNXB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBAbWVkaWEgJHtkZXZpY2UubWR9IHtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XG4gICAgICB3aWR0aDogNTIlO1xuICAgIH1cbiAgICBAbWVkaWEgJHtkZXZpY2UueGx9IHtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBCcmFuZCA9IHN0eWxlZChCb3gpYFxuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBDbGllbnRzID0gKCkgPT4gKFxuICA8PlxuICAgIHsvKiA8IS0tIENsaWVudHMgQnJhbmRzIEFyZWEgLS0+ICovfVxuICAgIDxCb3ggcGI9e1wiMzBweFwifT5cbiAgICA8Q3VzdG9tVGV4dD5PdXIgUGFydG5lcnM8L0N1c3RvbVRleHQ+XG4gICAgPENhcm91c2VsPlxuICAgIDxCcmFuZCBjbGFzc05hbWU9XCJcIiBweT17M30gbXg9ezR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlOH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICA8L0JyYW5kPlxuICAgICAgICAgIDxCcmFuZCBjbGFzc05hbWU9XCJcIiBweT17M30gbXg9ezR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlOX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICA8L0JyYW5kPlxuICAgICAgICAgIDxCcmFuZCBjbGFzc05hbWU9XCJcIiBweT17M30gbXg9ezR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlMTB9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgPC9CcmFuZD5cbiAgICAgICAgICA8QnJhbmQgY2xhc3NOYW1lPVwiXCIgcHk9ezN9IG14PXs0fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTExfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgIDwvQnJhbmQ+XG4gICAgICAgICAgPEJyYW5kIGNsYXNzTmFtZT1cIlwiIHB5PXszfSBteD17NH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UxMn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICA8L0JyYW5kPlxuICAgICAgICAgIDxCcmFuZCBjbGFzc05hbWU9XCJcIiBweT17M30gbXg9ezR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlMTN9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgPC9CcmFuZD5cbiAgICA8L0Nhcm91c2VsPlxuXG4gICAgICB7LypcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbGctYmV0d2VlblxuICAgICAgICAgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcFwiXG4gICAgICAgICAgbXg9XCItMzJweFwiXG4gICAgICAgID5cbiAgICAgICAgICA8QnJhbmQgY2xhc3NOYW1lPVwiXCIgcHk9ezN9IG14PXs0fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTh9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgPC9CcmFuZD5cbiAgICAgICAgICA8QnJhbmQgY2xhc3NOYW1lPVwiXCIgcHk9ezN9IG14PXs0fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTl9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgPC9CcmFuZD5cbiAgICAgICAgICA8QnJhbmQgY2xhc3NOYW1lPVwiXCIgcHk9ezN9IG14PXs0fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTEwfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgIDwvQnJhbmQ+XG4gICAgICAgICAgPEJyYW5kIGNsYXNzTmFtZT1cIlwiIHB5PXszfSBteD17NH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UxMX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICA8L0JyYW5kPlxuICAgICAgICAgIDxCcmFuZCBjbGFzc05hbWU9XCJcIiBweT17M30gbXg9ezR9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlMTJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgPC9CcmFuZD5cbiAgICAgICAgICA8QnJhbmQgY2xhc3NOYW1lPVwiXCIgcHk9ezN9IG14PXs0fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZTEzfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgIDwvQnJhbmQ+XG4gICAgICAgICAgPEJyYW5kIGNsYXNzTmFtZT1cIlwiIHB5PXszfSBteD17NH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UxNH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICA8L0JyYW5kPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgKi99XG4gICAgPC9Cb3g+XG4gIDwvPlxuKTtcblxuY29uc3QgQ3VzdG9tVGV4dCA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAzLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuY29uc3QgVW5kZXJMaW5lID0gc3R5bGVkLmRpdmBcbiBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46MCBhdXRvO1xuICBib3JkZXItYm90dG9tOiAwLjE1ZW0gc29saWQgZ3JleTtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICBtYXJnaW4tdG9wOiAxZW07XG5gO1xuXG5jb25zdCBDYXJvdXNlbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDbGllbnRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmltcG9ydCB7IFRpdGxlLCBCdXR0b24sIFNlY3Rpb24sIEJveCwgVGV4dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvcmVcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IGltZ0NvbnRlbnRNb2JpbGUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9wbmcvY29udGVudC1pbWcxLS1tb2JpbGUud2VicFwiO1xuXG5jb25zdCBTaGFwZUNhcmQgPSBzdHlsZWQoQm94KWBcbiAgd2lkdGg6IDMwNXB4O1xuICBib3gtc2hhZG93OiAwIDMycHggMzRweCByZ2JhKDI4LCAyNywgMzIsIDAuMik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICBAbWVkaWEgJHtkZXZpY2Uuc219IHtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgQG1lZGlhICR7ZGV2aWNlLm1kfSB7XG4gICAgbGVmdDogMCU7XG4gIH1cbmA7XG5cbmNvbnN0IENvbnRlbnQxID0gKCkgPT4gKFxuICA8PlxuICAgIHsvKiA8IS0tIENvbnRlbnQgc2VjdGlvbiAxIC0tPiAqL31cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPENvbCBtZD1cIjEyXCIgbGc9XCI2XCIgY2xhc3NOYW1lPVwib3JkZXItbGctMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBwbC1sZy01XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC1sZy00IHRleHQtY2VudGVyIHRleHQtbGctcmlnaHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1kb3duXCJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjc1MFwiXG4gICAgICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cInRydWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0NvbnRlbnRNb2JpbGV9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxTaGFwZUNhcmRcbiAgICAgICAgICAgICAgICBiZz1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgIHA9XCIxOHB4XCJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiNzUwXCJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZGVsYXk9XCI1MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgIG1pbldpZHRoPVwiMzBweFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgIG1pbkhlaWdodD1cIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgYmc9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MCVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgICAgbXQ9ezJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJlbGxcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICA8Qm94IHByPVwiNDBweFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9ezF9IGxpbmVIZWlnaHQ9XCIyNHB4XCIgb3BhY2l0eT17MC43fSBtYj17MH0+XG4gICAgICAgICAgICAgICAgICAgIE5leHQgbWVldGluZyBvbiAzMCBtaW5zXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8VGl0bGUgdmFyaWFudD1cImNhcmRcIiBmb250V2VpZ2h0PXszMDB9IG1iPXswfT5cbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBEaXNjdXNzaW9uIHdpdGggSm9oblxuICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9TaGFwZUNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGxnPVwiNlwiIGNsYXNzTmFtZT1cIm9yZGVyLWxnLTEgbXQtNSBtdC1sZy0wXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiNzUwXCJcbiAgICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cInRydWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxUaXRsZT5TYXZlIHRpbWUgb24gZGV2ZWxvcG1lbnQuPC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYj17NH0+XG4gICAgICAgICAgICAgICAgICBDcmVhdGUgY3VzdG9tIGxhbmRpbmcgcGFnZXMgd2l0aCBPbWVnYSB0aGF0IGNvbnZlcnRzIG1vcmVcbiAgICAgICAgICAgICAgICAgIHZpc2l0b3JzIHRoYW4gYW55IHdlYnNpdGUuIFdpdGggbG90cyBvZiB1bmlxdWUgYmxvY2tzLCB5b3UgY2FuXG4gICAgICAgICAgICAgICAgICBlYXNpbHkgYnVpbGQgYSBwYWdlIHdpdGhvdXQgY29kaW5nLlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gbXQ9ezN9PkdldCBTdGFydGVkISEhPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQxO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IFRpdGxlLCBTZWN0aW9uLCBCb3gsIFRleHQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db3JlXCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuaW1wb3J0IHN2Z0N1cnZlIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2Uvc3ZnL2wxLWN1cnZlLWNvbnRlbnQyLnN2Z1wiO1xuaW1wb3J0IGltZ0NvbnRlbnRNb2JpbGUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9wbmcvY29udGVudC1pbWcyLS1tb2JpbGUud2VicFwiO1xuXG5jb25zdCBTaGFwZVRvcCA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTE1MHB4O1xuICBpbWcge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgU2hhcGVDYXJkID0gc3R5bGVkKEJveClgXG4gIHdpZHRoOiAzMDVweDtcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiBgMCAzMnB4IDM0cHggJHt0aGVtZS5jb2xvcnMuYm9yZGVyfWB9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICBAbWVkaWEgJHtkZXZpY2Uuc219IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGxlZnQ6IC0xNCU7XG4gIH1cbmA7XG5cbmNvbnN0IENvbnRlbnRDYXJkID0gKHtcbiAgY29sb3IgPSBcInByaW1hcnlcIixcbiAgY2xhc3NOYW1lLFxuICBpY29uTmFtZSxcbiAgdGl0bGUsXG4gIGNoaWxkcmVuLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxCb3hcbiAgICB3aWR0aD17MzYwfVxuICAgIGJnPVwibGlnaHRcIlxuICAgIGJvcmRlcj1cIjFweCBzb2xpZFwiXG4gICAgYm9yZGVyQ29sb3I9XCJib3JkZXJcIlxuICAgIHA9XCIyMHB4XCJcbiAgICBib3JkZXJSYWRpdXM9ezEwfVxuICAgIGNsYXNzTmFtZT17YGQtZmxleCAke2NsYXNzTmFtZX1gfVxuICAgIHsuLi5yZXN0fVxuICAgIGNzcz17YFxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBAbWVkaWEgJHtkZXZpY2Uuc219IHtcbiAgICAgICAgd2lkdGg6IDM2MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDM2MHB4O1xuICAgICAgfVxuICAgIGB9XG4gID5cbiAgICA8Qm94XG4gICAgICBzaXplPXs1NX1cbiAgICAgIG1pbldpZHRoPXs1NX1cbiAgICAgIGJvcmRlclJhZGl1cz1cIjUwJVwiXG4gICAgICBjb2xvcj17Y29sb3J9XG4gICAgICBmb250U2l6ZT1cIjI4cHhcIlxuICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgIGNzcz17YFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PlxuICAgICAgICAgIHJnYmEodGhlbWUuY29sb3JzW2NvbG9yXSwgMC4xKX07XG4gICAgICBgfVxuICAgICAgbXI9ezN9XG4gICAgPlxuICAgICAgPGkgY2xhc3NOYW1lPXtgaWNvbiAke2ljb25OYW1lfWB9PjwvaT5cbiAgICA8L0JveD5cbiAgICA8ZGl2PlxuICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJjYXJkXCIgbWI9ezB9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1RpdGxlPlxuXG4gICAgICA8VGV4dD57Y2hpbGRyZW59PC9UZXh0PlxuICAgIDwvZGl2PlxuICA8L0JveD5cbik7XG5cbmNvbnN0IENvbnRlbnQyID0gKCkgPT4gKFxuICA8PlxuICAgIHsvKiA8IS0tIENvbnRlbnQgc2VjdGlvbiAyIC0tPiAqL31cbiAgICA8U2VjdGlvbiBiZz1cIiNmN2Y3ZmJcIiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgPFNoYXBlVG9wPlxuICAgICAgICA8aW1nIHNyYz17c3ZnQ3VydmV9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICA8L1NoYXBlVG9wPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8Q29sIGxnPVwiNVwiIG1kPVwiOVwiIHNtPVwiMTBcIiBjbGFzc05hbWU9XCJtYi01IG1iLWxnLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1kb3duXCJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjc1MFwiXG4gICAgICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cInRydWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0NvbnRlbnRNb2JpbGV9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogPFNoYXBlQ2FyZFxuICAgICAgICAgICAgICAgIGJnPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgcD1cIjE4cHhcIlxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiNzUwXCJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZGVsYXk9XCI1MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgIG1pbldpZHRoPVwiMzBweFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgIG1pbkhlaWdodD1cIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgYmc9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MCVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iZWxsXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwibGlnaHRcIiBmb250U2l6ZT17MX0gb3BhY2l0eT17MC43fSBtYj17Mn0+XG4gICAgICAgICAgICAgICAgICAgIERlYWRsaW5lOiBPY3QgMjksIDIwMjBcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxUaXRsZSB2YXJpYW50PVwiY2FyZFwiIGNvbG9yPVwibGlnaHRcIiBmb250V2VpZ2h0PXszMDB9PlxuICAgICAgICAgICAgICAgICAgICBZb3XigJl2ZSBnb3QgYSBuZXcgcHJvamVjdCBmcm9tIERhdmlkIVxuICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9TaGFwZUNhcmQ+ICovfVxuICAgICAgICAgICAgICA8U2hhcGVDYXJkXG4gICAgICAgICAgICAgICAgYmc9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBwPVwiMThweFwiXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1zdGFydFwiXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjc1MFwiXG4gICAgICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWRlbGF5PVwiNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBweFwiXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aD1cIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBweFwiXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgIGJnPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBtcj17M31cbiAgICAgICAgICAgICAgICAgIG10PXsyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iZWxsXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgICAgPEJveCBwcj1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxfVxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PXswLjd9XG4gICAgICAgICAgICAgICAgICAgIG1iPXswfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEZWFkbGluZTogT2N0IDI5LCAyMDIwXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8VGl0bGUgdmFyaWFudD1cImNhcmRcIiBjb2xvcj1cImxpZ2h0XCIgZm9udFdlaWdodD17MzAwfSBtYj17MH0+XG4gICAgICAgICAgICAgICAgICAgIFlvdeKAmXZlIGdvdCBhIG5ldyBwcm9qZWN0IGZyb20gRGF2aWQhXG4gICAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L1NoYXBlQ2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbGc9XCI3XCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI3NTBcIlxuICAgICAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwidHJ1ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC10ZXh0IHBsLWxnLS01MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICBJdOKAmXMgZXZlcnl0aGluZyB5b3XigJlsbCA8YnIgY2xhc3NOYW1lPVwiZC1ub25lIGQtc20tYmxvY2tcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgZXZlciBuZWVkLlxuICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1iPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGN1c3RvbSBsYW5kaW5nIHBhZ2VzIHdpdGggT21lZ2EgdGhhdCBjb252ZXJ0cyBtb3JlXG4gICAgICAgICAgICAgICAgICAgIHZpc2l0b3JzIHRoYW4gYW55IHdlYnNpdGUuIFdpdGggbG90cyBvZiB1bmlxdWUgYmxvY2tzLCB5b3VcbiAgICAgICAgICAgICAgICAgICAgY2FuIGVhc2lseSBidWlsZCBhIHBhZ2Ugd2l0aG91dCBjb2RpbmcuXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAgICAgICAgICA8Q29udGVudENhcmRcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCI1MCsgVW5pcXVlIERlc2lnbiBCbG9ja3NcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBpY29uTmFtZT1cImljb24tY2FyZHMtMlwiXG4gICAgICAgICAgICAgICAgICAgIG1iPXszfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB3aXRoIENhcmVmdWxseSBDb2RlZFxuICAgICAgICAgICAgICAgICAgPC9Db250ZW50Q2FyZD5cbiAgICAgICAgICAgICAgICAgIDxDb250ZW50Q2FyZFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1vYmlsZSBGaXJzdCBEZXNpZ25cblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9XCJpY29uLXBob25lLWNoYXJnaW5nLTMtMlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIG9uIEV2ZXJ5IERldmljZXNcbiAgICAgICAgICAgICAgICAgIDwvQ29udGVudENhcmQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmltcG9ydCB7IFRpdGxlLCBTZWN0aW9uLCBCb3gsIFRleHQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db3JlXCI7XG5cbmltcG9ydCBpbWdMMUZlYXR1cmVPdmFsIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvcG5nL2wxLWZlYXR1cmUtb3ZhbC5wbmdcIjtcbmltcG9ydCBpbWdMMUZlYXR1cmVDdXJ2ZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3N2Zy9sMS1jdXJ2ZS1mZWF0dXJlLnN2Z1wiO1xuXG5pbXBvcnQgY2N0djEgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9wbmcvY2N0di0xLnBuZ1wiO1xuaW1wb3J0IGNjdHY0IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvcG5nL2NjdHYtNC5wbmdcIjtcbmltcG9ydCBmZW5jZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3BuZy9mZW5jZS5wbmdcIjtcbmltcG9ydCBzZWN1cml0eUd1YXJkIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvcG5nL3NlY3VyaXR5LWd1YXJkLnBuZ1wiO1xuXG5jb25zdCBTaGFwZVRvcFJpZ2h0ID0gc3R5bGVkKEJveClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMHB4O1xuYDtcblxuY29uc3QgU2hhcGVCb3R0bVJpZ2h0ID0gc3R5bGVkKEJveClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGltZyB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG57IC8qIEN1c3RvbSBDb21wb25lbnRzIChub3QgaW5jbHVkZWQgd2l0aCB0aGUgYmFzZSBhc3NldCkgKi99XG5jb25zdCBDYXJkSWNvbkltYWdlID0gc3R5bGVkLmltZ2BcbiAgbWF4LXdpZHRoOiAzZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbmA7XG5cbmNvbnN0IFRleHRTaXplV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogOWVtO1xuYDtcblxuXG5jb25zdCBGZWF0dXJlQ2FyZCA9ICh7XG4gIGNvbG9yID0gXCJwcmltYXJ5XCIsXG4gIGljb25OYW1lLFxuICB0aXRsZSxcbiAgY2hpbGRyZW4sXG4gIHNyY0ltYWdlLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxCb3ggYmc9XCJsaWdodFwiIHB5PVwiMjVweFwiIHB4PVwiMzBweFwiIGJvcmRlclJhZGl1cz17MTB9IG1iPXs0fSB7Li4ucmVzdH0+XG4gICAgPEJveFxuICAgICAgc2l6ZT17Njl9XG4gICAgICBib3JkZXJSYWRpdXM9XCI1MCVcIlxuICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgZm9udFNpemU9XCIyOHB4XCJcbiAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiICAgICBcbiAgICA+XG4gICAgICB7Lyo8aSBjbGFzc05hbWU9e2BpY29uICR7aWNvbk5hbWV9YH0+PC9pPiovfVxuICAgICAgPGk+PENhcmRJY29uSW1hZ2Ugc3JjPXtzcmNJbWFnZX0gYWx0PVwiXCIgPjwvQ2FyZEljb25JbWFnZT48L2k+XG4gICAgPC9Cb3g+XG4gICAgPGRpdj5cbiAgICAgIDxUZXh0XG4gICAgICAgIGNvbG9yPVwiaGVhZGluZ1wiXG4gICAgICAgIGFzPVwiaDNcIlxuICAgICAgICBmb250U2l6ZT17NH1cbiAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICBsZXR0ZXJTcGFjaW5nPXstMC43NX1cbiAgICAgICAgbXk9ezN9XG4gICAgICA+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxUZXh0IGZvbnRTaXplPXsyfSBsaW5lSGVpZ2h0PXsxLjc1fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9UZXh0PlxuICAgIDwvZGl2PlxuICA8L0JveD5cbik7XG5cbmNvbnN0IEZlYXR1cmUgPSAoKSA9PiAoXG4gIDw+XG4gICAgey8qIDwhLS0gRmVhdHVyZSBzZWN0aW9uIC0tPiAqL31cbiAgICA8U2VjdGlvbiBiZz1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICA8U2hhcGVUb3BSaWdodFxuICAgICAgICBkYXRhLWFvcz1cImZhZGUtbGVmdFwiXG4gICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiNzUwXCJcbiAgICAgICAgZGF0YS1hb3Mtb25jZT1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8aW1nIHNyYz17aW1nTDFGZWF0dXJlT3ZhbH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgIDwvU2hhcGVUb3BSaWdodD5cbiAgICAgIDxTaGFwZUJvdHRtUmlnaHQ+XG4gICAgICAgIDxpbWcgc3JjPXtpbWdMMUZlYXR1cmVDdXJ2ZX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgIDwvU2hhcGVCb3R0bVJpZ2h0PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8Q29sIGxnPVwiNlwiIGNsYXNzTmFtZT1cInBsLWxnLTUgb3JkZXItbGctMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWNvbnRlbnQgc2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICA8VGl0bGUgY29sb3I9XCJsaWdodFwiPlNlY3VyaXR5PC9UaXRsZT4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImxpZ2h0XCIgb3BhY2l0eT17MC43fSBtYj17NH0+XG4gICAgICAgICAgICAgIEF0IGFsbCBvZiBQYXJrIEJpcmQncyBsb2NhdGlvbnMsIHNlY3VyaXR5IGlzIG9mIHRoZSBoaWdoZXN0IHByaW9yaXR5LiBcbiAgICAgICAgICAgICAgV2UgZW5zdXJlIHRoYXQgeW91IGFuZCB5b3VyIGNhcmdvIHJlbWFpbnMgc2FmZSBkdXJpbmcgeW91ciBwYXJraW5nIHdpdGggdXMuXG4gICAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgICB7Lyo8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCI+Q2hlY2sgYWxsIGZlYXR1cmVzPC9CdXR0b24+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGxnPVwiNlwiIGNsYXNzTmFtZT1cIm9yZGVyLWxnLTEgbXQtNSBtdC1sZy0wXCI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGljb25OYW1lPVwiaWNvbi1sYXlvdXQtMTFcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQbGF0ZSBTY2FubmVyXCJcbiAgICAgICAgICAgICAgICAgIHNyY0ltYWdlID0ge2NjdHYxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICA8VGV4dFNpemVXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICBPdXIgY2FtZXJhcyB3aWxsIHNjYW4geW91ciBsaWNlbnNlIHBsYXRlLCBcbiAgICAgICAgICAgICAgICAgICAgYW5kIGlmIHlvdSBoYXZlIGJvb2tlZCBhIHBhcmtpbmcgc3BhY2UsIHlvdSB3aWxsIGJlIGdyYW50ZWQgYWNjZXNzLlxuICAgICAgICAgICAgICAgICAgIDwvVGV4dFNpemVXcmFwcGVyPlxuXG4gICAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9XCJpY29uLXNpZGViYXItMlwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkNhbWVyYXNcIlxuICAgICAgICAgICAgICAgICAgc3JjSW1hZ2UgPSB7Y2N0djR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHRTaXplV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIE91ciBjYW1lcmFzIGNvdmVyIGFuZCBzdXJ2ZXkgdGhlIGVudGlyZSBwYXJraW5nIGFyZWEsIGd1YXJhbnRlZWluZyB5b3VyIHNlY3VyaXR5LlxuICAgICAgICAgICAgICAgICAgPC9UZXh0U2l6ZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICA8RmVhdHVyZUNhcmRcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGljb25OYW1lPVwiaWNvbi1ib29rbWFyay0yLTJcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGZW5jZXMgYW5kIEdhdGVzXCJcbiAgICAgICAgICAgICAgICAgIHNyY0ltYWdlID0ge2ZlbmNlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUZXh0U2l6ZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICBUaGUgcGVyaW1ldGVycyBvZiBvdXIgbG9jYXRpb25zIGFyZSBwcm90ZWN0ZWQgYnkgZmVuY2VzIGFuZCBnYXRlcy5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dFNpemVXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJhc2hcIlxuICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9XCJpY29uLWNoYXQtNDUtMlwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkd1YXJkc1wiXG4gICAgICAgICAgICAgICAgICBzcmNJbWFnZSA9IHtzZWN1cml0eUd1YXJkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUZXh0U2l6ZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICBPdXIgcHJvZmVzaW9uYWwgZ3VhcmRzIHJvdXRpbmVseSBwYXRyb2wgdGhlIHBhcmtpbmcgYXJlYXMsIFxuICAgICAgICAgICAgICAgICAgZW5zdXJpbmcgdGhhdCB5b3UgYW5kIHlvdXIgY2FyZ28gcmVtYWlucyBzYWZlLlxuICAgICAgICAgICAgICAgICAgPC9UZXh0U2l6ZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb24+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cblxuXG5pbXBvcnQgeyBUaXRsZSwgU2VjdGlvbiwgQm94LCBUZXh0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29yZVwiO1xuXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XG5cbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHN2Z0hlcm9TaGFwZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3N2Zy9oZXJvLXNoYXBlLXN2Zy5zdmdcIjtcbmltcG9ydCBpcGhvbmV4MSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3BuZy9pcGhvbmV4MS5zdmdcIlxuaW1wb3J0IGdvb2dsZVBsYXlCYWRnZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3BuZy9nb29nbGUtcGxheS1iYWRnZS5wbmdcIlxuaW1wb3J0IGFwcGxlU3RvcmVCdXR0b25JbWFnZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3BuZy9hcHBsZVN0b3JlQnV0dG9uSW1hZ2UucG5nXCI7XG5pbXBvcnQgeyBzaXplIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xuXG57Lypcbk5PVEU6XG4nVGV4dFRyYW5zaXRpb24nIGFuZCAncHJlc2V0cycgbXVzdCBiZVxuaW1wb3J0ZWQgdGhpcyB3YXkgaW4gb3JkZXIgdG8gY2lyY3VtdmVudFxuc2VydmVyIHNpZGUgcmVuZGVyaW5nIGVuZm9yY2UgYnkgTmV4dC5qc1xuKi99XG5jb25zdCBUZXh0VHJhbnNpdGlvbiA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydChcInJlYWN0LXRleHQtdHJhbnNpdGlvblwiKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3Qge3ByZXNldHN9ID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KFwicmVhY3QtdGV4dC10cmFuc2l0aW9uXCIpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5cbnsgLyogQ29tcG9uZW50cyBmcm9tIGFzc2V0IHBhY2sgKi99XG5jb25zdCBTaGFwZVRvcExlZnQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5gO1xuXG5jb25zdCBUb3BDYXJkID0gc3R5bGVkKEJveClgXG4gIHdpZHRoOiAzMDVweDtcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiBgMCAzMnB4IDM0cHggJHt0aGVtZS5jb2xvcnMuc2hhZG93fWB9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTQlO1xuICBsZWZ0OiAwO1xuICBAbWVkaWEgJHtkZXZpY2UubWR9IHtcbiAgICBsZWZ0OiAtMTMlO1xuICB9XG4gIEBtZWRpYSAke2RldmljZS5sZ30ge1xuICAgIGxlZnQ6IDIlO1xuICB9XG5gO1xuXG5jb25zdCBCb3R0b21DYXJkID0gc3R5bGVkKEJveClgXG4gIHdpZHRoOiAzMDVweDtcbiAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KSA9PiBgMCAzMnB4IDM0cHggJHt0aGVtZS5jb2xvcnMuc2hhZG93fWB9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTIlO1xuICByaWdodDogMDtcbiAgQG1lZGlhICR7ZGV2aWNlLm1kfSB7XG4gICAgcmlnaHQ6IC0xMyU7XG4gIH1cbiAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XG4gICAgcmlnaHQ6IC01JTtcbiAgfVxuICBAbWVkaWEgJHtkZXZpY2UueGx9IHtcbiAgICByaWdodDogLTMzJTtcbiAgfVxuYDtcblxuY29uc3QgSW1nUmlnaHQgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDUwJTtcbiAgQG1lZGlhICR7ZGV2aWNlLnNtfSB7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gIH1cbiAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG57IC8qIEN1c3RvbSBDb21wb25lbnRzIChub3QgaW5jbHVkZWQgd2l0aCB0aGUgYmFzZSBhc3NldCkgKi99XG5jb25zdCBHb29nbGVTdG9yZUJ1dHRvbiA9IHN0eWxlZC5pbWdgXG4gIG1heC13aWR0aDogMTVlbTtcblxuICBAbWVkaWEgJHtkZXZpY2Uuc219IHtcbiAgICBtYXgtd2lkdGg6IDYwZW07XG4gIH1cbiAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XG4gICAgbWF4LXdpZHRoOiAxNWVtO1xuICB9XG5gO1xuXG5jb25zdCBBcHBsZVN0b3JlQnV0dG9uID0gc3R5bGVkLmltZ2BcbiBtYXgtd2lkdGg6IDEyLjVlbTtcblxuQG1lZGlhICR7ZGV2aWNlLnNtfSB7XG4gIG1heC13aWR0aDogNTBlbTtcbn1cbkBtZWRpYSAke2RldmljZS5sZ30ge1xuICBtYXgtd2lkdGg6IDEyLjVlbTtcbn1cbmA7XG5cbmNvbnN0IEhvcml6b250YWxCdXR0b25QYW5lbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG57IC8qIE1lc3NhZ2VzIGZvciB0aGUgYW5pbWF0ZWQgdGV4dCBzZXF1ZW5jZSAqL31cbmNvbnN0IGFuaW1hdGVkTWVzc2FnZXMgPSBbXG4gIFwiRmluZXNcIixcbiAgXCJFeHBlbnNpdmUgcGFya2luZ1wiLFxuICBcIk5vIHBhcmtpbmcgc3BhY2VzXCIsXG4gIFwiVW5zZWN1cmUgcGFya2luZ1wiLFxuXTtcblxueyAvKiBNYWluIFNjcmVlbiBMb2dpYyAqL31cbmV4cG9ydCBjb25zdCBIZXJvID0gKCkgPT4ge1xuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cblxuICB7IC8qIEFwcCBEb3dubG9hZCBidXR0b24gY2xpY2sgbGlzdGVuZXJzICovfVxuICBjb25zdCBvbkFwcGxlU3RvcmVCdXR0b25DbGlja2VkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdBcHBsZSBTdG9yZSBidXR0b24gY2xpY2tlZCEnKVxuICB9O1xuXG4gIGNvbnN0IG9uR29vZ2xlUGxheVN0b3JlQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnR29vZ2xlIFBsYXkgU3RvcmUgYnV0dG9uIGNsaWNrZWQhJylcbiAgfTtcblxuIFxuICB7IC8qIFN0YXRlL0hvb2tzIGZvciBhbmltYXRlZCB0ZXh0IGNvbXBvbmVudCAqL31cbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+XG4gICAgICBzZXRJbmRleChpbmRleCA9PiBpbmRleCArIDEpLFxuICAgICAgMjUwMCAvLyBldmVyeSAyLjUgc2Vjb25kc1xuICAgICk7XG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8IS0tIEhlcm8gQXJlYSAtLT4gKi99XG4gICAgICA8U2VjdGlvbiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTVcIj48L2Rpdj5cbiAgICAgICAgPFNoYXBlVG9wTGVmdD5cbiAgICAgICAgICA8aW1nIHNyYz17c3ZnSGVyb1NoYXBlfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICA8L1NoYXBlVG9wTGVmdD5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8Q29sIGxnPVwiNVwiIG1kPVwiOFwiIHNtPVwiOVwiIGNsYXNzTmFtZT1cIm9yZGVyLWxnLTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxnLXJpZ2h0IHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLW1haW5cIlxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLWRvd25cIlxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI3NTBcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3Mtb25jZT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3MtZGVsYXk9XCI1MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbWdSaWdodCAgc3JjPXtpcGhvbmV4MX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxUb3BDYXJkXG4gICAgICAgICAgICAgICAgICBiZz1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBwPVwiMThweFwiXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjc1MFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjEwMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBweFwiXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodD1cIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICBiZz1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgbXI9ezN9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jaGVjay0yXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImxpZ2h0XCIgZm9udFNpemU9ezJ9IGxpbmVIZWlnaHQ9XCIxLjI1XCI+XG4gICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1RvcENhcmQ+XG5cbiAgICAgICAgICAgICAgICA8Qm90dG9tQ2FyZFxuICAgICAgICAgICAgICAgICAgYmc9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgIHA9XCIxOHB4XCJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiNzUwXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zLW9uY2U9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYW9zLWRlbGF5PVwiMTAwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aD1cIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0PVwiMzBweFwiXG4gICAgICAgICAgICAgICAgICAgIGJnPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjUwJVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2hlY2stMlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJkYXJrXCIgZm9udFNpemU9ezJ9IGxpbmVIZWlnaHQ9XCIxLjI1XCI+XG4gICAgICAgICAgICAgICAgICAgIEJvb2tpbmcgU3VjY2Vzc2Z1bCFcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0JvdHRvbUNhcmQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIGxnPVwiN1wiIGNsYXNzTmFtZT1cIm9yZGVyLWxnLTFcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI3NTBcIlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLW9uY2U9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjUwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IHB5PXtbbnVsbCwgbnVsbCwgbnVsbCwgNV19IHByPXs1fSBwdD17WzQsIG51bGxdfT5cbiAgICAgICAgICAgICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICBTYXkgZ29vZGJ5ZSB0b1xuICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogJzEuNWVtJywgY29sb3I6ICcjMzg3QkEwJ319ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD17IGFuaW1hdGVkTWVzc2FnZXNbaW5kZXggJSBhbmltYXRlZE1lc3NhZ2VzLmxlbmd0aF0gfVxuICAgICAgICAgICAgICAgICAgICAgIHNwcmluZ0NvbmZpZz17IHByZXNldHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWI9ezR9PlxuICAgICAgICAgICAgICAgICAgUGFya2JpcmQgaXMgeW91ciBhbHRlcm5hdGl2ZSB0byBjcm93ZGVkIHJlc3QtYXJlYXMuIFxuICAgICAgICAgICAgICAgICAgV2FudCB0byBnZXQgYSBnb29kIG5pZ2h04oCZcyBzbGVlcCBpbiBhIHNhZmUsIFxuICAgICAgICAgICAgICAgICAgZmVuY2VkIG9mZiBhcmVhPyBMb29rIG5vIGZ1cnRoZXIhXG4gICAgICAgICAgICAgICAgICBQYXJrYmlyZCBpcyBwbGF0Zm9ybSBzdXBwbHlpbmcgdHJ1Y2tzIHdpdGggcGFya2luZyBzcG90cy4gXG4gICAgICAgICAgICAgICAgICBTZWFyY2ggZm9yIGEgcGxhY2UgdG8gZXhwZXJpZW5jZSBwcmVtaXVtIG92ZXJuaWdodCBwYXJraW5nIHRvZGF5LlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbEJ1dHRvblBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgPEdvb2dsZVN0b3JlQnV0dG9uIG9uQ2xpY2s9eygpPT4gb25Hb29nbGVQbGF5U3RvcmVCdXR0b25DbGlja2VkKCl9IHNyYz17Z29vZ2xlUGxheUJhZGdlfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgPEFwcGxlU3RvcmVCdXR0b24gIG9uQ2xpY2s9eygpPT4gb25BcHBsZVN0b3JlQnV0dG9uQ2xpY2tlZCgpfSBzcmM9e2FwcGxlU3RvcmVCdXR0b25JbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvSG9yaXpvbnRhbEJ1dHRvblBhbmVsPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvPlxuICApO1xufTtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmltcG9ydCB7IFRpdGxlLCBTZWN0aW9uLCBCb3gsIFRleHQsIEEsIFNwYW4gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db3JlXCI7XG5cbmltcG9ydCBpbWdDdXN0b21lcjEgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9qcGVnL2wxLWN1c3RvbWVyMS5qcGdcIjtcbmltcG9ydCBpbWdDdXN0b21lcjIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9qcGVnL2wxLWN1c3RvbWVyMi5qcGdcIjtcbmltcG9ydCBpbWdDdXN0b21lcjMgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9qcGVnL2wxLWN1c3RvbWVyMy5qcGdcIjtcblxuY29uc3QgQ29udGVudENhcmQgPSAoe1xuICBjbGFzc05hbWUsXG4gIGltYWdlLFxuICBuYW1lLFxuICBjb21wYW55LFxuICBjaGlsZHJlbixcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8Qm94XG4gICAgYmc9XCJsaWdodFwiXG4gICAgYm9yZGVyPVwiMXB4IHNvbGlkXCJcbiAgICBib3JkZXJDb2xvcj1cImJvcmRlclwiXG4gICAgcD1cIjI1cHhcIlxuICAgIGJvcmRlclJhZGl1cz17MTB9XG4gICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9YH1cbiAgICB7Li4ucmVzdH1cbiAgPlxuICAgIDxCb3ggY2xhc3NOYW1lPXtgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuYH0+XG4gICAgICA8Qm94IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLXN0YXJ0XCIgbXI9ezN9PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTFcIj5cbiAgICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJjYXJkXCIgbWI9ezB9PlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8VGV4dCBmb250U2l6ZT17Mn0+e2NvbXBhbnl9PC9UZXh0PlxuICAgICAgPC9kaXY+XG4gICAgICA8QSBocmVmPVwiI1wiIGZvbnRTaXplPVwiMjdweFwiPlxuICAgICAgICA8U3BhbiBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPlxuICAgICAgICA8L1NwYW4+XG4gICAgICA8L0E+XG4gICAgPC9Cb3g+XG4gICAgPFRleHQgY29sb3I9XCJkYXJrXCIgbXQ9ezR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGV4dD5cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBUZXN0aW1vbmlhbCA9ICgpID0+IChcbiAgPD5cbiAgICB7LyogPCEtLSB0ZXN0aW1vbmlhbCBzZWN0aW9uIC0tPiAqL31cbiAgICA8U2VjdGlvbj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCb3ggcGI9e1s0LCBudWxsLCBudWxsLCA1XX0+XG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8Q29sIGxnPVwiN1wiIHhsPVwiNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgICBDdXN0b21lcnMgYXJlIDxiciBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9ja1wiIC8+IGxvdmluZ1xuICAgICAgICAgICAgICAgICAgT21lZ2FcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPENvbCBtZD1cIjZcIiBsZz1cIjRcIiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICA8Q29udGVudENhcmRcbiAgICAgICAgICAgICAgbmFtZT1cIkpvbmF0aGFuIFRheWxvclwiXG4gICAgICAgICAgICAgIGNvbXBhbnk9XCJDRU8gYXQgQ3JlYXRpdmV4XCJcbiAgICAgICAgICAgICAgaW1hZ2U9e2ltZ0N1c3RvbWVyMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgT01HISBJIGNhbm5vdCBiZWxpZXZlIHRoYXQgSSBoYXZlIGdvdCBhIGJyYW5kIG5ldyBsYW5kaW5nIHBhZ2VcbiAgICAgICAgICAgICAgYWZ0ZXIgZ2V0dGluZ3tcIiBcIn1cbiAgICAgICAgICAgICAgPEEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8U3BhbiBjb2xvcj1cInNlY29uZGFyeVwiPiBAT21lZ2E8L1NwYW4+XG4gICAgICAgICAgICAgIDwvQT5cbiAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICA8L0NvbnRlbnRDYXJkPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbWQ9XCI2XCIgbGc9XCI0XCIgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgPENvbnRlbnRDYXJkXG4gICAgICAgICAgICAgIG5hbWU9XCJHYXZpbiBQYXJrXCJcbiAgICAgICAgICAgICAgY29tcGFueT1cIkNFTyBhdCBPcmJpdGFsXCJcbiAgICAgICAgICAgICAgaW1hZ2U9e2ltZ0N1c3RvbWVyMn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8U3BhbiBjb2xvcj1cInNlY29uZGFyeVwiPiBAT21lZ2E8L1NwYW4+XG4gICAgICAgICAgICAgIDwvQT57XCIgXCJ9XG4gICAgICAgICAgICAgIGlzIGdyZWF0IGZvciBjcmVhdGluZyBsYW5kaW5nIHBhZ2VzIHdpdGhpbiBtaW51dGVzISBJdCBhY3R1YWxseVxuICAgICAgICAgICAgICB0YWtlcyBsZXNzIHRpbWXigKZcbiAgICAgICAgICAgIDwvQ29udGVudENhcmQ+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBtZD1cIjZcIiBsZz1cIjRcIiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICA8Q29udGVudENhcmRcbiAgICAgICAgICAgICAgbmFtZT1cIkJldHR5IE5vcnRvblwiXG4gICAgICAgICAgICAgIGNvbXBhbnk9XCJGcmVlbGFuY2UgRGVzaWduZXJcIlxuICAgICAgICAgICAgICBpbWFnZT17aW1nQ3VzdG9tZXIzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBXaGVuZXZlciBJIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGxhbmRpbmcgcGFnZSBmb3IgY2xpZW50cyx7XCIgXCJ9XG4gICAgICAgICAgICAgIDxBIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPFNwYW4gY29sb3I9XCJzZWNvbmRhcnlcIj4gQE9tZWdhPC9TcGFuPlxuICAgICAgICAgICAgICA8L0E+e1wiIFwifVxuICAgICAgICAgICAgICBpcyBteSBzb2x1dGlvbuKAplxuICAgICAgICAgICAgPC9Db250ZW50Q2FyZD5cbiAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTNcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI4MDBcIlxuICAgICAgICAgICAgICBkYXRhLWFvcy1vbmNlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWRlbGF5PVwiNTAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFcbiAgICAgICAgICAgICAgICBocmVmPVwiXCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17Mn1cbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNwYW4gY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb21tZW50LWFsdCBtci0yXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2VlIGFsbCB0ZXN0aW1vbmlhbHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICA8L0E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb24+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWw7XG4iLCJleHBvcnQgY29uc3QgYWRkRGF5cyA9IChkYXlzKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGF5cyk7XG4gIHJldHVybiBkYXRlO1xufTtcbiIsImV4cG9ydCBjb25zdCBicmVha3BvaW50cyA9IHtcbiAgc206IDU3NiwgLy9TbWFsbCBzY3JlZW4gc3RhcnRcbiAgbWQ6IDc2OCwgLy9NZWRpdW0gc2NyZWVuIHN0YXJ0XG4gIGxnOiA5OTIsIC8vTGFyZ2Ugc2NyZWVuIHN0YXJ0XG4gIHhsOiAxMjAwLCAvL0V4dHJhIExhcmdlIHNjcmVlbiBzdGFydFxufTtcblxuZXhwb3J0IGNvbnN0IGRldmljZSA9IHtcbiAgc206IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLnNtfXB4KWAsXG4gIG1kOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy5tZH1weClgLFxuICBsZzogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMubGd9cHgpYCxcbiAgeGw6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLnhsfXB4KWAsXG59O1xuIiwiaW1wb3J0IHsgYnJlYWtwb2ludHMsIGRldmljZSB9IGZyb20gXCIuL2JyZWFrcG9pbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiLi9hZGREYXlzXCI7XG5cbmV4cG9ydCB7IGRldmljZSwgYnJlYWtwb2ludHMsIHRoZW1lLCBhZGREYXlzIH07XG4iLCJpbXBvcnQgeyByZ2JhIH0gZnJvbSBcInBvbGlzaGVkXCI7XHJcbmltcG9ydCB7IGJyZWFrcG9pbnRzIH0gZnJvbSBcIi4vYnJlYWtwb2ludHNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRDb2xvcnMgPSB7XHJcbiAgcHJpbWFyeTogXCIjZjA0MDM3XCIsXHJcbiAgc2Vjb25kYXJ5OiBcIiM1NDU0ZDRcIixcclxuICB3aGl0ZTogXCIjZmZmZmZmXCIsXHJcbiAgZGFyazogXCIjMTkxOTFiXCIsXHJcbiAgYmxhY2s6IFwiIzAwMDAwMFwiLFxyXG4gIHllbGxvdzogXCIjZmVkYzVhXCIsXHJcbiAgYXNoOiBcIiM0MTNlNjVcIixcclxuICBncmVlbjogXCIjNzdiZjQxXCIsXHJcbiAgaW5mbzogXCIjMGU1NjdjXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgcHJpbWFyeTogZGVmYXVsdENvbG9ycy5wcmltYXJ5LFxyXG4gIHNlY29uZGFyeTogZGVmYXVsdENvbG9ycy5zZWNvbmRhcnksXHJcbiAgbGlnaHQ6IGRlZmF1bHRDb2xvcnMud2hpdGUsXHJcbiAgbGlnaHRTaGFkZTogcmdiYShkZWZhdWx0Q29sb3JzLndoaXRlLCAwLjc1KSxcclxuICBkYXJrOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgZGFya1NoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC43NSksXHJcbiAgYXNoOiBkZWZhdWx0Q29sb3JzLmFzaCxcclxuICBiZzogZGVmYXVsdENvbG9ycy53aGl0ZSxcclxuICBib3JkZXI6IHJnYmEoZGVmYXVsdENvbG9ycy5hc2gsIDAuMTE1KSxcclxuICBzaGFkb3c6IHJnYmEoZGVmYXVsdENvbG9ycy5hc2gsIDAuMTc1KSxcclxuICBoZWFkaW5nOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgdGV4dDogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuNzUpLFxyXG4gIHdhcm5pbmc6IGRlZmF1bHRDb2xvcnMueWVsbG93LFxyXG4gIHN1Y2Nlc3M6IGRlZmF1bHRDb2xvcnMuZ3JlZW4sXHJcbiAgaW5mbzogZGVmYXVsdENvbG9ycy5pbmZvLFxyXG5cclxuICBtb2Rlczoge1xyXG4gICAgZGFyazoge1xyXG4gICAgICBwcmltYXJ5OiBkZWZhdWx0Q29sb3JzLnByaW1hcnksXHJcbiAgICAgIHNlY29uZGFyeTogZGVmYXVsdENvbG9ycy5zZWNvbmRhcnksXHJcbiAgICAgIGxpZ2h0OiBkZWZhdWx0Q29sb3JzLndoaXRlLFxyXG4gICAgICBsaWdodFNoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMud2hpdGUsIDAuNzUpLFxyXG4gICAgICBkYXJrOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgICAgIGRhcmtTaGFkZTogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuNzUpLFxyXG4gICAgICBhc2g6IGRlZmF1bHRDb2xvcnMuYXNoLFxyXG4gICAgICBiZzogZGVmYXVsdENvbG9ycy5kYXJrLFxyXG4gICAgICBib3JkZXI6IHJnYmEoZGVmYXVsdENvbG9ycy5hc2gsIDAuMTE1KSxcclxuICAgICAgc2hhZG93OiByZ2JhKGRlZmF1bHRDb2xvcnMuYXNoLCAwLjE3NSksXHJcbiAgICAgIGhlYWRpbmc6IGRlZmF1bHRDb2xvcnMud2hpdGUsXHJcbiAgICAgIHRleHQ6IHJnYmEoZGVmYXVsdENvbG9ycy53aGl0ZSwgMC43NSksXHJcbiAgICAgIHdhcm5pbmc6IGRlZmF1bHRDb2xvcnMueWVsbG93LFxyXG4gICAgICBzdWNjZXNzOiBkZWZhdWx0Q29sb3JzLmdyZWVuLFxyXG4gICAgICBpbmZvOiBkZWZhdWx0Q29sb3JzLmluZm8sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB0aGVtZSA9IHtcclxuICBpbml0aWFsQ29sb3JNb2RlTmFtZTogXCJsaWdodFwiLFxyXG4gIGNvbG9yczogY29sb3JzLFxyXG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgIGAke2JyZWFrcG9pbnRzLnNtfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLm1kfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLmxnfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLnhsfXB4YCxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG9saXNoZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10ZXh0LXRyYW5zaXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9