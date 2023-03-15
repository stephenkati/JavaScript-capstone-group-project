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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Oswald', sans-serif;\\r\\n  background-color: #02735E;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 0 2em;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  gap: 2em;\\r\\n  align-items: center;\\r\\n  margin-left: 15em;\\r\\n}\\r\\n\\r\\n.logo img{\\r\\n  width: 150px;\\r\\n  height: 150px;\\r\\n  object-fit: contain;\\r\\n}\\r\\n\\r\\n.header ul {\\r\\n  display: flex;\\r\\n  gap: 3em;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.header a {\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n.cardLayout {\\r\\n  padding: 2em 6em;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  gap: 1em;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 1em;\\r\\n  width: 30%;\\r\\n  min-width: 200px;\\r\\n  background-color: #014040;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.cardContent {\\r\\n  width: 80%;\\r\\n  height: 100px;\\r\\n  margin: 0;\\r\\n  padding: 0 2em;\\r\\n  position: relative;\\r\\n  font-size: 18px;\\r\\n  text-transform: capitalize;\\r\\n  color: #F27405;\\r\\n}\\r\\n\\r\\n.card img {\\r\\n height: 200px;\\r\\n width: 200px;\\r\\n}\\r\\n\\r\\n.cardContent .fa-heart {\\r\\n  position: absolute;\\r\\n  top: 20px;\\r\\n  right: 1em;\\r\\n  font-size: 23px;\\r\\n  color: rgb(148, 185, 11);\\r\\n}\\r\\n\\r\\n.cardContent .likes {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  right: 1em;\\r\\n}\\r\\n\\r\\n.commentBtn {\\r\\n  border: none;\\r\\n  background-color: rgb(148, 185, 11);\\r\\n  color: #731702;\\r\\n  font-size: 20px;\\r\\n  margin: 10px;\\r\\n  padding: .5em 1em;\\r\\n}\\r\\n\\r\\n.commentBtn:hover {\\r\\n  background-color: white;\\r\\n  color: #F27405;\\r\\n  border: 1.5px solid #F27405;\\r\\n  font-size: 18.5px;\\r\\n}\\r\\n\\r\\n\\r\\n#popup-window {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  background-color: #F27405;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#close-btn {\\r\\n  position: absolute;\\r\\n  top: 4%;\\r\\n  right: 3%;\\r\\n  cursor: pointer;\\r\\n  color: white;\\r\\n  font-size: 25px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.card-popup {\\r\\n  width: 90%;\\r\\n  height: 90%;\\r\\n  background-color: #014040;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.card-popup .pokemonTitle{\\r\\n  font-size: 28px;\\r\\n  color: #F27405;\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\\r\\n.card-popup img{\\r\\n  width: 30%;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.pokemonInfo {\\r\\n  font-size: 18px;\\r\\n  color:  rgb(148, 185, 11);\\r\\n}\\r\\n\\r\\n#pokemonInfos {\\r\\n  width: 80%;\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  column-gap: 20%;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.comments h2 {\\r\\n  color: #F27405;\\r\\n}\\r\\n\\r\\n.comments p {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#comments-form {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\ninput[type=text] {\\r\\n  width: 95%;\\r\\n  height: 30px;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  width: 95%;\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n#submit-btn {\\r\\n  border: none;\\r\\n  font-size: 18px;\\r\\n  color: #731702;\\r\\n  background-color:rgb(148, 185, 11);\\r\\n  width: 75%;\\r\\n  height: 30px;\\r\\n  margin-bottom: 1em;\\r\\n}\\r\\n\\r\\n#submit-btn:hover {\\r\\n  border: 1px solid rgb(148, 185, 11);\\r\\n  font-size: 18px;\\r\\n  color: rgb(148, 185, 11);\\r\\n  background-color:#731702;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-group-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-group-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-group-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-group-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-group-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-group-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-group-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-group-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-group-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-group-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getPokemon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getPokemon.js */ \"./src/modules/getPokemon.js\");\n/* harmony import */ var _modules_comment_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comment-popup.js */ \"./src/modules/comment-popup.js\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_display_comment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/display-comment.js */ \"./src/modules/display-comment.js\");\n/* harmony import */ var _modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/itemCounter.js */ \"./src/modules/itemCounter.js\");\n/* harmony import */ var _modules_newComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/newComment */ \"./src/modules/newComment.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst onLoad =(() => { \r\n    const cardLayout = document.querySelector('#cardLayout');\r\n    cardLayout.innerHTML = ``\r\n    _modules_getPokemon_js__WEBPACK_IMPORTED_MODULE_1__.pokemonList.forEach((pokemon, index) => {\r\n    ;(0,_modules_getPokemon_js__WEBPACK_IMPORTED_MODULE_1__.getPokemon)(pokemon, index)\r\n    ;(0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_3__.getLike)(index)\r\n    })\r\n})\r\nonLoad()\r\n\r\ndocument.querySelector('#cardLayout').addEventListener('click', (e) => {\r\n    if(e.target.classList.contains('fa-heart')){\r\n        const index = parseInt(e.target.id[e.target.id.length-1])\r\n        ;(0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_3__.addLike)(index)\r\n        onLoad()\r\n    }\r\n}) \r\n\r\n\r\n;(0,_modules_comment_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_comment_popup_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)()\r\n\r\n;(0,_modules_display_comment_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\r\n;(0,_modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_5__.countItems)()\r\n\r\n;(0,_modules_newComment__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n//# sourceURL=webpack://javascript-capstone-group-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment-popup.js":
/*!**************************************!*\
  !*** ./src/modules/comment-popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'\r\n\r\nconst commentPopup = (data, index) => {\r\n\r\n  const body = document.querySelector('body')\r\n  const commentPopup = document.createElement('div')\r\n  commentPopup.id = 'popup-window'\r\n  \r\n  commentPopup.innerHTML = `\r\n  <div class=\"card-popup\" id=\"card-${index}\">\r\n  <i id=close-btn class=\"fa-regular fa-x\"></i>\r\n    <img src=${data.sprites.other.dream_world.front_default} alt=${data.name}>\r\n    <h2 class=\"pokemonTitle\" > ${data.name} </h2>\r\n    <div id=\"pokemonInfos\">\r\n      <p class=\"pokemonInfo\" >Base experience : ${data.base_experience}</p>\r\n      <p class=\"pokemonInfo\" >Type : ${data.types[0].type.name}</p>\r\n      <p class=\"pokemonInfo\" >Height : ${data.height}</p>\r\n      <p class=\"pokemonInfo\" >Weight : ${data.weight}</p>\r\n    </div>\r\n  </div>\r\n  `\r\n  body.appendChild(commentPopup)\r\n} \r\n\r\nconst getData = async (target) => {\r\n  const pokemon = target.children[0].alt\r\n  const response = await fetch(`${pokeAPI}${pokemon}`)\r\n  const data = await response.json()\r\n  const index = target.id\r\n  commentPopup(data, index)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  document.querySelector('#cardLayout').addEventListener('click', (e) => {\r\n    if (e.target.textContent === 'Comment') {\r\n      getData(e.target.parentElement)\r\n    }\r\n  })\r\n});\r\n\r\nconst closePopup = () => {\r\n  document.querySelector('body').addEventListener('click', (e) => {\r\n    if (e.target.id ==='close-btn') {\r\n      e.target.parentElement.parentElement.remove();\r\n    }\r\n  })\r\n} \r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone-group-project/./src/modules/comment-popup.js?");

/***/ }),

/***/ "./src/modules/display-comment.js":
/*!****************************************!*\
  !*** ./src/modules/display-comment.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment)\n/* harmony export */ });\n/* harmony import */ var _setup_involvementAPi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-involvementAPi.js */ \"./src/modules/setup-involvementAPi.js\");\n\r\n\r\nconst addComment = async (id, username, comment) => {\r\n    const response = await fetch(`${_setup_involvementAPi_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPIURL}${_setup_involvementAPi_js__WEBPACK_IMPORTED_MODULE_0__.appId}/comments`, {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify({\r\n          item_id: id,\r\n          username: username,\r\n          comment: comment,\r\n        }),\r\n    });\r\n\r\n    const data = await response.text()\r\n    return data;\r\n}\r\n\r\nconst populateComment = (data, index) => {\r\n\r\n  const cardPopup = document.querySelector('.card-popup')\r\n  const commentSection = document.createElement('div')\r\n  commentSection.className = 'comments'\r\n  commentSection.id = `comment-${index}`\r\n  commentSection.innerHTML = `<h2 id=\"comment-title\"></h2>`\r\n  if (data) {\r\n    data.forEach((element) => {\r\n      commentSection.innerHTML += `\r\n        <p>\r\n          ${element.creation_date} ${element.username} : ${element.comment}\r\n        </p>\r\n        `\r\n    });\r\n  }\r\n  commentSection.innerHTML += `<h2 class=\"popup-titles\">add a comment</h2>\r\n  <form id=\"comments-form\" method=\"post\">\r\n      <input class=\"form-elm\" type=\"text\" name=\"username\" id=\"user-name\" placeholder=\"Your name\" required>\r\n      <label for=\"user-name\"></label></br>\r\n      <textarea class=\"form-elm\" id=\"user-comment\" name=\"usercomment\" rows=\"4\" cols=\"30\" placeholder=\"Your insights\" required></textarea>\r\n      <label for=\"user-comment\"></label></br>\r\n      <button class=\"form-elm\" id=\"submit-btn\" type=\"submit\">Comment</button>\r\n  </form>\r\n  `\r\n\r\n  cardPopup.appendChild(commentSection)\r\n} \r\n\r\nconst countComment = (parentNode) => {\r\n  const number = parentNode.childElementCount-3\r\n  return number\r\n}\r\n\r\nconst printComment = (number) => {\r\n  const commentTitle = document.getElementById('comment-title')\r\n  commentTitle.innerHTML = `Comments(${number})`\r\n}\r\n\r\nconst getComment = async (index) => {\r\n  const response = await fetch(`${_setup_involvementAPi_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPIURL}${_setup_involvementAPi_js__WEBPACK_IMPORTED_MODULE_0__.appId}/comments?item_id=${index}`, {\r\n      method: 'GET',\r\n      headers: {\r\n          'Content-Type': 'application/json',\r\n      },\r\n\r\n  });\r\n\r\n  const data = await response.json();\r\n  if(data.error) {\r\n    populateComment([])\r\n  }\r\n  populateComment(data, index,)\r\n\r\n  const CommentsNode = document.querySelector('.comments')\r\n  const commentNb = countComment(CommentsNode)\r\n  printComment(commentNb)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  document.querySelector('#cardLayout').addEventListener('click', (e) => {\r\n    if(e.target.textContent === 'Comment') {\r\n      getComment(e.target.parentElement.id)\r\n    }\r\n  })\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone-group-project/./src/modules/display-comment.js?");

/***/ }),

/***/ "./src/modules/getPokemon.js":
/*!***********************************!*\
  !*** ./src/modules/getPokemon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemon\": () => (/* binding */ getPokemon),\n/* harmony export */   \"pokemonList\": () => (/* binding */ pokemonList)\n/* harmony export */ });\nconst pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'\r\nconst pokemonList = ['pikachu', 'squirtle', 'dragonite', 'eevee', 'bulbasaur', 'arcanine']\r\n\r\nconst getPokemon = async (pokemon, index) => {\r\n    const response = await fetch(`${pokeAPI}${pokemon}`)\r\n    const data = await response.json()\r\n    const cardLayout = document.querySelector('#cardLayout');\r\n    cardLayout.innerHTML += `\r\n        <div class=\"card\" id=\"${index}\">\r\n            <img src=${data.sprites.other.dream_world.front_default} alt=${data.name}>\r\n            <div class=\"cardContent\">\r\n                <p class=\"pokemonTitle\" > ${data.name} </p>\r\n                <i class=\"fa-regular fa-heart\" id='heartIcon-${index}'></i>\r\n                <p id='likes-${index}' class=\"likes\">0 likes</p>\r\n            </div>\r\n            <button class=\"commentBtn\">Comment</button>\r\n        </div>\r\n    `\r\n}\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone-group-project/./src/modules/getPokemon.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countItems\": () => (/* binding */ countItems)\n/* harmony export */ });\n/* harmony import */ var _getPokemon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPokemon.js */ \"./src/modules/getPokemon.js\");\n\r\n\r\n\r\nconst countItems = () => {\r\n    let pokemonNumber = _getPokemon_js__WEBPACK_IMPORTED_MODULE_0__.pokemonList.length;\r\n    const itemCounter = document.querySelector('#pokeCounter');\r\n    itemCounter.innerHTML = `Pokemons (${pokemonNumber})`;\r\n    return pokemonNumber;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone-group-project/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getLike\": () => (/* binding */ getLike)\n/* harmony export */ });\n/* harmony import */ var _setup_involvementAPi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-involvementAPi.js */ \"./src/modules/setup-involvementAPi.js\");\n\r\n\r\nconst addLike = async (index) => {\r\n    const response = await fetch(`${_setup_involvementAPi_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPIURL}${_setup_involvementAPi_js__WEBPACK_IMPORTED_MODULE_0__.appId}/likes`, {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify({\r\n            item_id: `${index}`,\r\n        }),\r\n    });\r\n\r\n    const data = await response.text()\r\n    return data;\r\n}\r\n\r\n\r\nconst getLike = async (index) => {\r\n    const response = await fetch(`${_setup_involvementAPi_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPIURL}${_setup_involvementAPi_js__WEBPACK_IMPORTED_MODULE_0__.appId}/likes`, {\r\n        method: 'GET',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n    });\r\n\r\n    const data = await response.json();\r\n\r\n    data.forEach(element => {\r\n        if(parseInt(element.item_id) === index){\r\n            const likes = document.querySelector(`#likes-${index}`)\r\n            likes.innerHTML = `${element.likes} likes`\r\n        }\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone-group-project/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/newComment.js":
/*!***********************************!*\
  !*** ./src/modules/newComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-comment */ \"./src/modules/display-comment.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  document.querySelector('body').addEventListener('click', (e) => {\r\n    if (e.target.id === 'submit-btn') {\r\n        document.querySelector('#comments-form').addEventListener('submit', (event) => {\r\n            event.preventDefault();\r\n            const id = document.querySelector('.card-popup').id[5];\r\n            const username = document.getElementById('user-name').value;\r\n            const comment = document.getElementById('user-comment').value;\r\n            if (username !== '') {\r\n              (0,_display_comment__WEBPACK_IMPORTED_MODULE_0__.addComment)(id, username, comment)\r\n              setTimeout( () =>{\r\n                document.querySelector('.comments').remove()\r\n                ;(0,_display_comment__WEBPACK_IMPORTED_MODULE_0__.getComment)(event.target.parentElement.id[8])},\r\n                1000)\r\n            }\r\n        })\r\n    }     \r\n})\r\n});\r\n\n\n//# sourceURL=webpack://javascript-capstone-group-project/./src/modules/newComment.js?");

/***/ }),

/***/ "./src/modules/setup-involvementAPi.js":
/*!*********************************************!*\
  !*** ./src/modules/setup-involvementAPi.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appId\": () => (/* binding */ appId),\n/* harmony export */   \"involvementAPIURL\": () => (/* binding */ involvementAPIURL)\n/* harmony export */ });\nconst involvementAPIURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\n\r\nconst createApp = async () => {\r\n    const response = await fetch(involvementAPIURL, {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify({\r\n            name: 'HomeFinder',\r\n        }),\r\n    });\r\n\r\n    const data = await response.text()\r\n}\r\ncreateApp();\r\nconst appId = '4eLu84EDG8YaXWuL7mOL';\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone-group-project/./src/modules/setup-involvementAPi.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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