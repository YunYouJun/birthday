/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_bubble_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/bubble.js */ \"./src/js/bubble.js\");\n/* harmony import */ var _js_bubble_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_bubble_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_egg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/egg.js */ \"./src/js/egg.js\");\n/* harmony import */ var _js_egg_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_egg_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/bubble.js":
/*!**************************!*\
  !*** ./src/js/bubble.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n\tvar canvas = $('#bg').children('canvas'),\n\t    background = canvas[0],\n\t    foreground1 = canvas[1],\n\t    foreground2 = canvas[2],\n\t    config = {\n\t\tcircle: {\n\t\t\tamount: 15,\n\t\t\tlayer: 3,\n\t\t\tcolor: [255, 255, 255],\n\t\t\talpha: 0.3\n\t\t},\n\t\tline: {\n\t\t\tamount: 12,\n\t\t\tlayer: 3,\n\t\t\tcolor: [255, 255, 255],\n\t\t\talpha: 0.3\n\t\t},\n\t\tspeed: 0.5,\n\t\tangle: 20\n\t};\n\n\tif (background.getContext) {\n\t\tvar bctx = background.getContext('2d'),\n\t\t    fctx1 = foreground1.getContext('2d'),\n\t\t    fctx2 = foreground2.getContext('2d'),\n\t\t    M = window.Math,\n\t\t    // Cached Math\n\t\tdegree = config.angle / 360 * M.PI * 2,\n\t\t    circles = [],\n\t\t    lines = [],\n\t\t    wWidth,\n\t\t    wHeight,\n\t\t    timer;\n\n\t\trequestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback, element) {\n\t\t\tsetTimeout(callback, 1000 / 60);\n\t\t};\n\n\t\tcancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || clearTimeout;\n\n\t\tvar setCanvasHeight = function () {\n\t\t\twWidth = $(window).width();\n\t\t\twHeight = $(window).height(), canvas.each(function () {\n\t\t\t\tthis.width = wWidth;\n\t\t\t\tthis.height = wHeight;\n\t\t\t});\n\t\t};\n\n\t\tvar drawCircle = function (x, y, radius, color, alpha) {\n\t\t\tvar gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);\n\t\t\tgradient.addColorStop(0, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + alpha + ')');\n\t\t\tgradient.addColorStop(1, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (alpha - 0.1) + ')');\n\n\t\t\tfctx1.beginPath();\n\t\t\tfctx1.arc(x, y, radius, 0, M.PI * 2, true);\n\t\t\tfctx1.fillStyle = gradient;\n\t\t\tfctx1.fill();\n\t\t};\n\n\t\tvar drawLine = function (x, y, width, color, alpha) {\n\t\t\tvar endX = x + M.sin(degree) * width,\n\t\t\t    endY = y - M.cos(degree) * width,\n\t\t\t    gradient = fctx2.createLinearGradient(x, y, endX, endY);\n\t\t\tgradient.addColorStop(0, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + alpha + ')');\n\t\t\tgradient.addColorStop(1, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (alpha - 0.1) + ')');\n\n\t\t\tfctx2.beginPath();\n\t\t\tfctx2.moveTo(x, y);\n\t\t\tfctx2.lineTo(endX, endY);\n\t\t\tfctx2.lineWidth = 3;\n\t\t\tfctx2.lineCap = 'round';\n\t\t\tfctx2.strokeStyle = gradient;\n\t\t\tfctx2.stroke();\n\t\t};\n\n\t\tvar drawBack = function () {\n\t\t\tbctx.clearRect(0, 0, wWidth, wHeight);\n\n\t\t\tvar gradient = [];\n\n\t\t\tgradient[0] = bctx.createRadialGradient(wWidth * 0.3, wHeight * 0.1, 0, wWidth * 0.3, wHeight * 0.1, wWidth * 0.9);\n\t\t\t// gradient[0].addColorStop(0, 'rgb(0, 126, 177)');\n\t\t\tgradient[0].addColorStop(1, 'transparent');\n\n\t\t\tbctx.translate(wWidth, 0);\n\t\t\tbctx.scale(-1, 1);\n\t\t\tbctx.beginPath();\n\t\t\tbctx.fillStyle = gradient[0];\n\t\t\tbctx.fillRect(0, 0, wWidth, wHeight);\n\n\t\t\tgradient[1] = bctx.createRadialGradient(wWidth * 0.1, wHeight * 0.1, 0, wWidth * 0.3, wHeight * 0.1, wWidth);\n\t\t\t// gradient[1].addColorStop(0, 'rgb(0, 150, 240)');\n\t\t\tgradient[1].addColorStop(0.8, 'transparent');\n\n\t\t\tbctx.translate(wWidth, 0);\n\t\t\tbctx.scale(-1, 1);\n\t\t\tbctx.beginPath();\n\t\t\tbctx.fillStyle = gradient[1];\n\t\t\tbctx.fillRect(0, 0, wWidth, wHeight);\n\n\t\t\tgradient[2] = bctx.createRadialGradient(wWidth * 0.1, wHeight * 0.5, 0, wWidth * 0.1, wHeight * 0.5, wWidth * 0.5);\n\t\t\t// gradient[2].addColorStop(0, 'rgb(40, 20, 105)');\n\t\t\tgradient[2].addColorStop(1, 'transparent');\n\n\t\t\tbctx.beginPath();\n\t\t\tbctx.fillStyle = gradient[2];\n\t\t\tbctx.fillRect(0, 0, wWidth, wHeight);\n\t\t};\n\n\t\tvar animate = function () {\n\t\t\tvar sin = M.sin(degree),\n\t\t\t    cos = M.cos(degree);\n\n\t\t\tif (config.circle.amount > 0 && config.circle.layer > 0) {\n\t\t\t\tfctx1.clearRect(0, 0, wWidth, wHeight);\n\t\t\t\tfor (var i = 0, len = circles.length; i < len; i++) {\n\t\t\t\t\tvar item = circles[i],\n\t\t\t\t\t    x = item.x,\n\t\t\t\t\t    y = item.y,\n\t\t\t\t\t    radius = item.radius,\n\t\t\t\t\t    speed = item.speed;\n\n\t\t\t\t\tif (x > wWidth + radius) {\n\t\t\t\t\t\tx = -radius;\n\t\t\t\t\t} else if (x < -radius) {\n\t\t\t\t\t\tx = wWidth + radius;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tx += sin * speed;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (y > wHeight + radius) {\n\t\t\t\t\t\ty = -radius;\n\t\t\t\t\t} else if (y < -radius) {\n\t\t\t\t\t\ty = wHeight + radius;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ty -= cos * speed;\n\t\t\t\t\t}\n\n\t\t\t\t\titem.x = x;\n\t\t\t\t\titem.y = y;\n\t\t\t\t\tdrawCircle(x, y, radius, item.color, item.alpha);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (config.line.amount > 0 && config.line.layer > 0) {\n\t\t\t\tfctx2.clearRect(0, 0, wWidth, wHeight);\n\t\t\t\tfor (var j = 0, len = lines.length; j < len; j++) {\n\t\t\t\t\tvar item = lines[j],\n\t\t\t\t\t    x = item.x,\n\t\t\t\t\t    y = item.y,\n\t\t\t\t\t    width = item.width,\n\t\t\t\t\t    speed = item.speed;\n\n\t\t\t\t\tif (x > wWidth + width * sin) {\n\t\t\t\t\t\tx = -width * sin;\n\t\t\t\t\t} else if (x < -width * sin) {\n\t\t\t\t\t\tx = wWidth + width * sin;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tx += sin * speed;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (y > wHeight + width * cos) {\n\t\t\t\t\t\ty = -width * cos;\n\t\t\t\t\t} else if (y < -width * cos) {\n\t\t\t\t\t\ty = wHeight + width * cos;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ty -= cos * speed;\n\t\t\t\t\t}\n\n\t\t\t\t\titem.x = x;\n\t\t\t\t\titem.y = y;\n\t\t\t\t\tdrawLine(x, y, width, item.color, item.alpha);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\ttimer = requestAnimationFrame(animate);\n\t\t};\n\n\t\tvar createItem = function () {\n\t\t\tcircles = [];\n\t\t\tlines = [];\n\n\t\t\tif (config.circle.amount > 0 && config.circle.layer > 0) {\n\t\t\t\tfor (var i = 0; i < config.circle.amount / config.circle.layer; i++) {\n\t\t\t\t\tfor (var j = 0; j < config.circle.layer; j++) {\n\t\t\t\t\t\tcircles.push({\n\t\t\t\t\t\t\tx: M.random() * wWidth,\n\t\t\t\t\t\t\ty: M.random() * wHeight,\n\t\t\t\t\t\t\tradius: M.random() * (20 + j * 5) + (20 + j * 5),\n\t\t\t\t\t\t\tcolor: config.circle.color,\n\t\t\t\t\t\t\talpha: M.random() * 0.2 + (config.circle.alpha - j * 0.1),\n\t\t\t\t\t\t\tspeed: config.speed * (1 + j * 0.5)\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (config.line.amount > 0 && config.line.layer > 0) {\n\t\t\t\tfor (var m = 0; m < config.line.amount / config.line.layer; m++) {\n\t\t\t\t\tfor (var n = 0; n < config.line.layer; n++) {\n\t\t\t\t\t\tlines.push({\n\t\t\t\t\t\t\tx: M.random() * wWidth,\n\t\t\t\t\t\t\ty: M.random() * wHeight,\n\t\t\t\t\t\t\twidth: M.random() * (20 + n * 5) + (20 + n * 5),\n\t\t\t\t\t\t\tcolor: config.line.color,\n\t\t\t\t\t\t\talpha: M.random() * 0.2 + (config.line.alpha - n * 0.1),\n\t\t\t\t\t\t\tspeed: config.speed * (1 + n * 0.5)\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tcancelAnimationFrame(timer);\n\t\t\ttimer = requestAnimationFrame(animate);\n\t\t\tdrawBack();\n\t\t};\n\n\t\t$(document).ready(function () {\n\t\t\tsetCanvasHeight();\n\t\t\tcreateItem();\n\t\t});\n\t\t$(window).resize(function () {\n\t\t\tsetCanvasHeight();\n\t\t\tcreateItem();\n\t\t});\n\t}\n})(jQuery);\n\n//# sourceURL=webpack:///./src/js/bubble.js?");

/***/ }),

/***/ "./src/js/egg.js":
/*!***********************!*\
  !*** ./src/js/egg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('%c Happy Birthday! ', 'background-color:#93B7F3;color:white;padding:2px;border-radius: 2px;');\nconsole.log('%c 青青子衿，悠悠我心。 ', 'background-color:#32da56;color:white;padding:2px;border-radius: 2px;');\n\n//# sourceURL=webpack:///./src/js/egg.js?");

/***/ })

/******/ });