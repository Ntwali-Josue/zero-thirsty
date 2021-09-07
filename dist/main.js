/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _images_heart_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/heart.svg */ \"./src/images/heart.svg\");\n/* harmony import */ var _images_drink_PNG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/drink.PNG */ \"./src/images/drink.PNG\");\n\n\n\nconst logoImg = document.querySelector('.logo');\nlogoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;\nconst likeButton = document.querySelector('#like');\nlikeButton.src = _images_heart_svg__WEBPACK_IMPORTED_MODULE_1__;\nconst drinkImage = document.querySelector('#card-img');\ndrinkImage.src = _images_drink_PNG__WEBPACK_IMPORTED_MODULE_2__;\nconst Items = {\n  drinkImg: drinkImage,\n  drinkTitle: 'Testing',\n  drinkLike: likeButton,\n  drinklikes: 21,\n  drinkComment: ''\n};\nconst card = document.querySelector('#card-container');\nconst container = document.createElement('div');\ncontainer.innerHTML = `\n<img src=\"${Items.drinkImg}\" class=\"card-img-top\" id=\"card-img\" alt=\"Drink Image\">\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"d-flex justify-content-between\">\n      <h5 class=\"card-title\">${Items.drinkTitle}</h5>\n      <img id=\"like\" alt=\"Like button\">\n    </div>\n    <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n  </div>\n`;\ncard.appendChild(container);\n\n//# sourceURL=webpack://kanband-board/./src/index.js?");

/***/ }),

/***/ "./src/images/drink.PNG":
/*!******************************!*\
  !*** ./src/images/drink.PNG ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"303c82984156e5c3b4a9.PNG\";\n\n//# sourceURL=webpack://kanband-board/./src/images/drink.PNG?");

/***/ }),

/***/ "./src/images/heart.svg":
/*!******************************!*\
  !*** ./src/images/heart.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1978922e78e15267f077.svg\";\n\n//# sourceURL=webpack://kanband-board/./src/images/heart.svg?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"94c5143ff41acc87dde5.png\";\n\n//# sourceURL=webpack://kanband-board/./src/images/logo.png?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;