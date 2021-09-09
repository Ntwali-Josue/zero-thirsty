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

/***/ "./src/addLike.js":
/*!************************!*\
  !*** ./src/addLike.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0SK6xo1aXMm23qjduC9O/likes';\n\nconst addLikes = async drinkID => {\n  const postLikes = await fetch(fetchUrl, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8'\n    },\n    body: JSON.stringify({\n      item_id: drinkID\n    })\n  });\n  const response = await postLikes.text();\n  return response;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLikes);\n\n//# sourceURL=webpack://kanband-board/./src/addLike.js?");

/***/ }),

/***/ "./src/cardLikes.js":
/*!**************************!*\
  !*** ./src/cardLikes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_filled_heart_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/filled-heart.svg */ \"./src/images/filled-heart.svg\");\n/* eslint-disable no-loop-func */\n\nconst fetchUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0SK6xo1aXMm23qjduC9O/likes';\nconst numOfLikes = document.querySelectorAll('.counter');\nconst drinkTitle = document.querySelectorAll('.card-title');\nconst likeButton = document.querySelectorAll('#like');\n\nconst cardLikes = async () => {\n  const fetchLikes = await fetch(fetchUrl, {\n    method: 'GET'\n  });\n  const response = await fetchLikes.json();\n  numOfLikes.forEach(num => {\n    num.textContent = 0;\n  });\n\n  for (let i = 0; i < response.length; i += 1) {\n    const itemID = response[i].item_id;\n    drinkTitle.forEach(title => {\n      if (title.textContent === itemID) {\n        // console.log(title.textContent);\n        // console.log(numOfLikes[i].textContent);\n        // console.log(response[i].likes);\n        numOfLikes[i].textContent = response[i].likes;\n        likeButton[i].src = _images_filled_heart_svg__WEBPACK_IMPORTED_MODULE_0__;\n      }\n\n      numOfLikes[i].textContent = response[i].likes;\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardLikes);\n\n//# sourceURL=webpack://kanband-board/./src/cardLikes.js?");

/***/ }),

/***/ "./src/comment.js":
/*!************************!*\
  !*** ./src/comment.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.html */ \"./src/comment.html\");\n\n\nclass Comment {\n  constructor(username, commentBody, itemID) {\n    this.username = username;\n    this.commentBody = commentBody;\n    this.creationDate = this.getDate();\n    this.itemID = itemID;\n  }\n\n  getDate = () => {\n    const date = new Date();\n    const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];\n    return `${year}-${month}-${day}`;\n  };\n  static loadContent = drink => {\n    const comentWindow = document.getElementById('comment-window');\n    document.getElementById('main').classList += ' blur';\n    comentWindow.innerHTML = _comment_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    comentWindow.classList = 'comment-window';\n    document.getElementById('drink-img').src = drink.strDrinkThumb;\n    document.getElementById('drink-name').innerHTML = drink.strDrink;\n    document.getElementById('category').innerHTML = `<strong>Category: </strong>${drink.strCategory}`;\n    document.getElementById('glass-type').innerHTML = `<strong>Glass Type: </strong>${drink.strGlass}`;\n    document.getElementById('main-ingridient').innerHTML = `<strong>Main Ingridient: </strong>${drink.strIngredient1}`;\n    document.getElementById('measure').innerHTML = `<strong>Measure: </strong>${drink.strMeasure1}`;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);\n\n//# sourceURL=webpack://kanband-board/./src/comment.js?");

/***/ }),

/***/ "./src/drink.js":
/*!**********************!*\
  !*** ./src/drink.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Drink {\n  static getDrinkDetails = async event => {\n    const drinkURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';\n    const drinkID = event.target.id.replace('drink', '');\n    const fetchDrink = await fetch(drinkURL + drinkID, {\n      method: 'GET'\n    });\n    const data = await fetchDrink.json();\n    return data.drinks[0];\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drink);\n\n//# sourceURL=webpack://kanband-board/./src/drink.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _images_unfilled_heart_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/unfilled-heart.svg */ \"./src/images/unfilled-heart.svg\");\n/* harmony import */ var _images_filled_heart_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/filled-heart.svg */ \"./src/images/filled-heart.svg\");\n/* harmony import */ var _drink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drink */ \"./src/drink.js\");\n/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment */ \"./src/comment.js\");\n/* harmony import */ var _addLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addLike */ \"./src/addLike.js\");\n/* harmony import */ var _cardLikes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cardLikes */ \"./src/cardLikes.js\");\n/* harmony import */ var _totalDrinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./totalDrinks */ \"./src/totalDrinks.js\");\n\n\n\n\n\n\n\n\n\nconst logoImg = document.querySelector('.logo');\nlogoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;\nconst drinkImage = document.querySelectorAll('.card-img-top');\nconst drinkTitle = document.querySelectorAll('.card-title');\nconst likeButton = document.querySelectorAll('#like');\nconst numOfLikes = document.querySelectorAll('.counter');\nconst commentButton = document.querySelectorAll('.btn-primary');\nlikeButton.forEach(img => {\n  img.src = _images_unfilled_heart_svg__WEBPACK_IMPORTED_MODULE_2__;\n});\nconst fetchUrl = 'https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';\nconst drinkId = [];\n\nconst getDrinks = async () => {\n  const fetchDrinks = await fetch(fetchUrl, {\n    method: 'GET'\n  });\n  const data = await fetchDrinks.json();\n\n  for (let i = 0; i < drinkImage.length; i += 1) {\n    drinkImage[i].src = data.drinks[i].strDrinkThumb;\n    drinkTitle[i].textContent = data.drinks[i].strDrink;\n    drinkId[i] = data.drinks[i].strDrink;\n    commentButton[i].id = `drink${data.drinks[i].idDrink}`;\n    commentButton[i].href = `#${data.drinks[i].strDrink}`;\n  }\n\n  return data;\n};\n\ndocument.getElementById('main').addEventListener('click', async event => {\n  if (event.target.id.includes('drink')) {\n    const drink = await _drink__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getDrinkDetails(event);\n    _comment__WEBPACK_IMPORTED_MODULE_5__[\"default\"].loadContent(drink);\n    document.getElementById('close').addEventListener('click', () => {\n      const comentWindow = document.getElementById('comment-window');\n      comentWindow.innerHTML = '';\n      comentWindow.classList = 'comment-off';\n      document.getElementById('main').classList = 'row item m-5';\n    });\n  }\n});\ngetDrinks();\n\nfor (let i = 0; i < likeButton.length; i += 1) {\n  let counter = 0;\n  likeButton[i].addEventListener('click', () => {\n    counter += 1;\n    numOfLikes[i].textContent = counter;\n    (0,_addLike__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(drinkId[i]);\n    likeButton[i].src = _images_filled_heart_svg__WEBPACK_IMPORTED_MODULE_3__;\n  });\n}\n\n(0,_cardLikes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_totalDrinks__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://kanband-board/./src/index.js?");

/***/ }),

/***/ "./src/totalDrinks.js":
/*!****************************!*\
  !*** ./src/totalDrinks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0SK6xo1aXMm23qjduC9O/likes';\n\nconst totalLikes = async () => {\n  const fetchLikes = await fetch(fetchUrl, {\n    method: 'GET'\n  });\n  const response = await fetchLikes.json();\n\n  for (let i = 0; i < response.length; i += 1) {\n    console.log(response.likes);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalLikes);\n\n//# sourceURL=webpack://kanband-board/./src/totalDrinks.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  filter: blur(0);\\r\\n  transition: all ease 0.5s;\\r\\n}\\r\\n\\r\\n.blur {\\r\\n  filter: blur(0.25rem);\\r\\n}\\r\\n\\r\\n.comment-window {\\r\\n  display: block;\\r\\n  padding: 1rem;\\r\\n  position: absolute;\\r\\n  top: 15%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, 0);\\r\\n  height: auto;\\r\\n  width: 18.5rem;\\r\\n  background-color: white;\\r\\n  border: 1px solid black;\\r\\n  z-index: 5;\\r\\n  box-shadow: 0 0 0.5rem 0.5rem hsla(0, 0%, 0%, 0.25);\\r\\n  transition: all 1s ease;\\r\\n}\\r\\n\\r\\n.comment-off {\\r\\n  height: 0;\\r\\n}\\r\\n\\r\\n.close-img {\\r\\n  position: relative;\\r\\n  z-index: 6;\\r\\n  right: 20%;\\r\\n  padding-top: 0.9rem;\\r\\n}\\r\\n\\r\\n.close-img svg {\\r\\n  fill: white;\\r\\n}\\r\\n\\r\\n.inner-container {\\r\\n  margin: auto;\\r\\n  max-width: 30rem;\\r\\n}\\r\\n\\r\\n.comment-box {\\r\\n  width: 15em;\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\n.svg-cursor {\\r\\n  fill: rgb(0, 255, 0);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .comment-window {\\r\\n    width: 40rem;\\r\\n    padding: 2rem;\\r\\n  }\\r\\n\\r\\n  .comment-box {\\r\\n    width: 16em;\\r\\n  }\\r\\n\\r\\n  .close-img {\\r\\n    position: static;\\r\\n    padding-top: 0;\\r\\n  }\\r\\n\\r\\n  .close-img svg {\\r\\n    fill: black;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanband-board/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://kanband-board/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/comment.html":
/*!**************************!*\
  !*** ./src/comment.html ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"d-flex justify-content-around pt-4\\\">\\r\\n  <div class=\\\"ps-5 pb-3\\\">\\r\\n    <img id=\\\"drink-img\\\" class=\\\"img-fluid\\\" src=\\\"\\\" alt=\\\"drink\\\">\\r\\n  </div>\\r\\n  <div class=\\\"ps-3 close-img\\\">\\r\\n    <svg id=\\\"close\\\" class=\\\"svg-cursor\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"25\\\" height=\\\"25\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z\\\"/></svg>\\r\\n  </div>\\r\\n</div>\\r\\n<h2 id=\\\"drink-name\\\" class=\\\"text-center\\\"></h2>\\r\\n<div class=\\\"inner-container d-flex justify-content-between py-5\\\">\\r\\n  <div>\\r\\n    <Span class=\\\"d-block\\\" id=\\\"category\\\"></Span>\\r\\n    <br>\\r\\n    <Span class=\\\"d-block\\\" id=\\\"glass-type\\\"></Span>\\r\\n  </div>\\r\\n  <div>\\r\\n    <Span class=\\\"d-block\\\" id=\\\"main-ingridient\\\"></Span>\\r\\n    <br>\\r\\n    <Span class=\\\"d-block\\\" id=\\\"measure\\\"></Span>\\r\\n  </div>\\r\\n</div>\\r\\n<div id=\\\"comments\\\" class=\\\"pb-5\\\">\\r\\n  <h4 class=\\\"text-center\\\">Comments (0)</h4>\\r\\n</div>\\r\\n<div class=\\\"d-flex flex-column align-content-center inner-container py-3\\\">\\r\\n  <h4 class=\\\"text-center\\\">Add a comment</h4>\\r\\n  <form class=\\\"pt-2\\\">\\r\\n    <input id=\\\"commenter-name\\\" class=\\\"my-2\\\" type=\\\"text\\\" placeholder=\\\"Your name\\\">\\r\\n    <br>\\r\\n    <textarea name=\\\"comment\\\" id=\\\"comment-body\\\" class=\\\"my-2 comment-box\\\" cols=\\\"20\\\" rows=\\\"5\\\" placeholder=\\\"Your insights\\\"></textarea>\\r\\n    <br>\\r\\n    <input id=\\\"send-comment\\\" class=\\\"my-2\\\" type=\\\"button\\\" value=\\\"Comment\\\">\\r\\n  </form>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://kanband-board/./src/comment.html?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanband-board/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanband-board/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanband-board/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanband-board/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanband-board/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanband-board/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanband-board/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/filled-heart.svg":
/*!*************************************!*\
  !*** ./src/images/filled-heart.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"275e159ddf71729f5e2d.svg\";\n\n//# sourceURL=webpack://kanband-board/./src/images/filled-heart.svg?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"94c5143ff41acc87dde5.png\";\n\n//# sourceURL=webpack://kanband-board/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/unfilled-heart.svg":
/*!***************************************!*\
  !*** ./src/images/unfilled-heart.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1978922e78e15267f077.svg\";\n\n//# sourceURL=webpack://kanband-board/./src/images/unfilled-heart.svg?");

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