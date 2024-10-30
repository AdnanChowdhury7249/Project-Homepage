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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/blue-abstract-watercolor-paint-paper.jpg */ \"./src/assets/blue-abstract-watercolor-paint-paper.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Import fonts at the very top */\r\n\r\n/* Apply fonts in CSS */\r\nbody {\r\n  font-family: \"Playfair Display\", serif;\r\n  font-optical-sizing: auto;\r\n  font-style: normal;\r\n  line-height: 1.6;\r\n  color: #292929;\r\n  ;\r\n}\r\n\r\nh1,\r\nh2,\r\n.header-title {\r\n  font-family: \"Playfair Display\", serif;\r\n  color: #292929;\r\n  font-size: 2.5rem;\r\n}\r\n\r\np {\r\n  font-family: 'Roboto', sans-serif;\r\n  color: #292929;\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  background-position: top;\r\n  background-repeat: no-repeat;\r\n  min-height: 45vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  padding-left: 20px;\r\n  z-index: 1;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.header::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  pointer-events: none;\r\n}\r\n\r\n.text-container,\r\n.profilePic {\r\n  position: relative;\r\n  z-index: 2;\r\n  border: solid grey;\r\n\r\n}\r\n\r\n.profilePic {\r\n  order: 1;\r\n  width: auto;\r\n  height: 40vh;\r\n  max-height: 50vh;\r\n  /* border-radius: 3%; */\r\n  margin-right: 20px;\r\n  border-width: thin;\r\n  margin-left: 30%;\r\n  box-shadow: 0rem 0.1rem 1rem #595959;\r\n\r\n}\r\n\r\n.text-container {\r\n  order: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: solid 1px #ccc;\r\n  width: 40%;\r\n  height: 70%;\r\n  padding: 20px;\r\n  /* background-color: #f1f0ea; */\r\n  /* border-radius: 5px; */\r\n  box-shadow: 0rem 0.1rem 1rem #595959;\r\n}\r\n\r\n/* Text styling */\r\n.myTitle {\r\n  font-size: 2.5rem;\r\n  line-height: 1.2;\r\n  padding-top: 3%;\r\n}\r\n\r\n.aboutMe {\r\n  font-size: 1.5rem;\r\n  line-height: 1.4;\r\n  padding-top: 5%;\r\n  padding-bottom: 5%;\r\n}\r\n\r\n.iconContainer {\r\n  display: flex;\r\n  gap: 10px;\r\n  /* Space between icons */\r\n  margin-top: 10px;\r\n  /* Space above the icon container */\r\n}\r\n\r\n.githubIcon,\r\n.linkedinIcon {\r\n  width: 30px;\r\n  height: auto;\r\n  cursor: pointer;\r\n  /* Optional: make it look clickable */\r\n}\r\n\r\n\r\n.body-Title {\r\n  font-size: 2rem;\r\n  padding-top: 3%;\r\n  padding-left: 5%;\r\n}\r\n\r\n/* Tablet view for larger tablets like iPad Pro */\r\n@media (max-width: 1024px) and (min-width: 769px) {\r\n  .header {\r\n    padding-left: 10px;\r\n    height: auto;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .profilePic {\r\n    height: 30vh;\r\n    max-height: 40vh;\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .text-container {\r\n    width: 80%;\r\n    height: auto;\r\n    max-width: 400px;\r\n    border: none;\r\n    text-align: center;\r\n    padding: 15px;\r\n    margin-top: 20px;\r\n    /* Space between image and text */\r\n  }\r\n}\r\n\r\n/* Existing Tablet view */\r\n@media (max-width: 768px) {\r\n  .header {\r\n    padding-left: 10px;\r\n    height: auto;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .profilePic {\r\n    height: 30vh;\r\n    max-height: 40vh;\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .text-container {\r\n    width: 80%;\r\n    height: auto;\r\n    max-width: 400px;\r\n    border: none;\r\n    text-align: center;\r\n    padding: 15px;\r\n  }\r\n\r\n  .myTitle {\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  .aboutMe {\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n\r\n.workTitle {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n/* Container Styling */\r\n.workContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  /* 2 projects per row on larger screens */\r\n  gap: 50px;\r\n  width: 60%;\r\n  margin: 0 auto;\r\n  min-height: 80vh;\r\n  margin-top: 5%;\r\n  z-index: 2;\r\n  padding-bottom: 5%;\r\n}\r\n\r\n/* Media Query for Mobile Devices */\r\n@media (max-width: 768px) {\r\n  .workContainer {\r\n    grid-template-columns: 1fr;\r\n    /* 1 project per row on screens smaller than 768px */\r\n    width: 90%;\r\n    /* Full-width container for better mobile display */\r\n  }\r\n}\r\n\r\n/* Project Item Styling */\r\n.projectItem {\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  height: 400px;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* Stack title on top of image */\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  /* Aligns title at the top */\r\n  padding: 10px;\r\n  /* Optional: add padding for spacing */\r\n  border: solid;\r\n  border-width: thin;\r\n}\r\n\r\n/* Project Title Styling */\r\n.projectTitle {\r\n  margin-bottom: 10px;\r\n  margin-top: 5%;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n/* Image Styling */\r\n.projectClass {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n  border-radius: 5px;\r\n}\r\n\r\n.projectItem {\r\n  perspective: 1000px;\r\n  /* Allows the 3D flip effect */\r\n}\r\n\r\n.card {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  transform-style: preserve-3d;\r\n  /* Enables 3D transformation for children */\r\n  transition: transform 0.6s;\r\n  /* Smooth transition for the flip */\r\n}\r\n\r\n.projectItem:hover .card {\r\n  transform: rotateY(180deg) !important;\r\n}\r\n\r\n/* Front and Back Face */\r\n.card-front,\r\n.card-back {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backface-visibility: hidden;\r\n  /* Hides the back face when rotated */\r\n  border-radius: 5px;\r\n}\r\n\r\n/* Front Face */\r\n.card-front {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n/* Back Face */\r\n.card-back {\r\n\r\n  /* Adjust color as desired */\r\n  color: black;\r\n  transform: rotateY(180deg);\r\n  /* Starts rotated, becomes visible on flip */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n/* contact section */\r\n\r\n.contactContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* Stack title and contact details vertically */\r\n  min-height: 45vh;\r\n  background-color: #2fa4a4;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  padding: 30px;\r\n  justify-content: center;\r\n}\r\n\r\n.contactTitle {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  color: white;\r\n  /* Space between title and contact details */\r\n  text-align: center;\r\n}\r\n\r\n/* Optional styling for contact text and email */\r\n.contactDetails,\r\n.contactEmail {\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  text-align: center;\r\n  margin: 5px 0;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n  if (!url) {\r\n    return url;\r\n  }\r\n  url = String(url.__esModule ? url.default : url);\r\n\r\n  // If url is already wrapped in quotes, remove them\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  }\r\n\r\n  // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n  return url;\r\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _assets_profilepic_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/profilepic.jpg */ \"./src/assets/profilepic.jpg\");\n/* harmony import */ var _assets_todoApp_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/todoApp.png */ \"./src/assets/todoApp.png\");\n/* harmony import */ var _assets_tictactoeApp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/tictactoeApp.png */ \"./src/assets/tictactoeApp.png\");\n/* harmony import */ var _assets_calculatorApp_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/calculatorApp.png */ \"./src/assets/calculatorApp.png\");\n/* harmony import */ var _assets_WeatherApp_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/WeatherApp.png */ \"./src/assets/WeatherApp.png\");\n/* harmony import */ var _assets_LibraryApp_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/LibraryApp.png */ \"./src/assets/LibraryApp.png\");\n/* harmony import */ var _assets_Etchasketch_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/Etchasketch.png */ \"./src/assets/Etchasketch.png\");\nconsole.log('Hello from Webpack!');\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst imgElement = document.createElement('img');\r\nimgElement.src = _assets_profilepic_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\nimgElement.classList.add('profilePic');\r\ndocument.querySelector('.header').appendChild(imgElement);\r\n\r\n\r\nconst myTitle1 = document.createElement('p');\r\nmyTitle1.classList.add('myTitle');\r\nmyTitle1.textContent = \"Hello, I'm Adnan\";\r\ndocument.querySelector('.text-container').appendChild(myTitle1);\r\n\r\nconst aboutMe = document.createElement('p');\r\naboutMe.classList.add('aboutMe');\r\naboutMe.textContent = \"I'm a DevOps Engineer with 3+ years of experience at KogoPAY, a mobile wallet fintech startup. Skilled in collaborative problem-solving and customer satisfaction. Proven ability to work with cross-functional teams and quickly learn new technologies. Seeking to transition into a junior web developer role to leverage my web development skills. Committed to continuous learning and professional growth. \";\r\ndocument.querySelector('.text-container').appendChild(aboutMe);\r\n\r\nconst iconContainer = document.createElement('div');\r\niconContainer.classList.add('iconContainer');\r\n\r\n\r\nconst githubLink = document.createElement('a');\r\ngithubLink.href = \"https://github.com/AdnanChowdhury7249\";\r\ngithubLink.target = \"_blank\";\r\ngithubLink.rel = \"noopener noreferrer\";\r\n\r\n\r\nconst githubIcon = document.createElement('img');\r\ngithubIcon.src = \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\";\r\ngithubIcon.classList.add('githubIcon');\r\ngithubLink.appendChild(githubIcon);\r\niconContainer.appendChild(githubLink);\r\n\r\nconst linkedinLink = document.createElement('a');\r\nlinkedinLink.href = \"https://www.linkedin.com/in/adnan-chowdhury-346201206/\";\r\nlinkedinLink.target = \"_blank\";\r\nlinkedinLink.rel = \"noopener noreferrer\";\r\n\r\nconst linkedinIcon = document.createElement('img');\r\nlinkedinIcon.src = \"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg\";\r\nlinkedinIcon.classList.add('linkedinIcon');\r\nlinkedinLink.appendChild(linkedinIcon);\r\niconContainer.appendChild(linkedinLink);\r\n\r\ndocument.querySelector('.text-container').appendChild(iconContainer);\r\n\r\n\r\n\r\n\r\nfunction createProject(projectName, projectImg, projectDetail) {\r\n  const projectItem = document.createElement('div');\r\n  projectItem.classList.add('projectItem');\r\n\r\n  const card = document.createElement('div');\r\n  card.classList.add('card');\r\n\r\n  const front = document.createElement('div');\r\n  front.classList.add('card-front');\r\n\r\n  const back = document.createElement('div');\r\n  back.classList.add('card-back');\r\n\r\n  const titleElement = document.createElement('p');\r\n  titleElement.classList.add('projectTitle');\r\n  titleElement.textContent = projectName;\r\n\r\n  const imgElement = document.createElement('img');\r\n  imgElement.classList.add('projectClass');\r\n  imgElement.src = projectImg;\r\n\r\n  const githubImg = document.createElement('img');\r\n  imgElement.classList.add('projectClass');\r\n  imgElement.src = projectImg;\r\n\r\n\r\n  // Append title and image to front of card\r\n  front.appendChild(titleElement);\r\n  front.appendChild(imgElement);\r\n\r\n  if (projectDetail) {\r\n    // Replace periods with periods followed by a line break for readability\r\n    back.innerHTML = projectDetail.replace(/\\./g, '.<br>');\r\n  }\r\n\r\n  // Append front and back to card, and card to projectItem\r\n  card.appendChild(front);\r\n  card.appendChild(back);\r\n  projectItem.appendChild(card);\r\n\r\n  // Append projectItem to workContainer\r\n  document.querySelector('.workContainer').appendChild(projectItem);\r\n}\r\n\r\n//footer section\r\n\r\nconst contactText = document.createElement('p');\r\ncontactText.classList.add('contactDetails');\r\ncontactText.textContent = \"Please get in touch if you think our work could be mutually beneficial!\";\r\n\r\nconst contactEmail = document.createElement('p');\r\ncontactEmail.classList.add('contactEmail');\r\ncontactEmail.textContent = \"Email: adnanchowdhury7249@gmail.com\";\r\n\r\ndocument.querySelector('.contactContainer').appendChild(contactText);\r\ndocument.querySelector('.contactContainer').appendChild(contactEmail);\r\n\r\n\r\n\r\ncreateProject('Todo App', _assets_todoApp_png__WEBPACK_IMPORTED_MODULE_2__, \"Users can create new projects, giving them names and setting up the foundational structure for task management.Task Management - For each project, users can add and delete tasks, which include details such as title, description, due date, and priority level. Task Filtering - Tasks can be filtered to view those due today or within the current week, helping users focus on immediate priorities. Dynamic UI - The interface dynamically updates to show the relevant tasks and projects, enhancing user interaction without needing to reload the page. Local Storage - Projects and tasks are saved to the browser's local storage, ensuring data persistence across sessions\");\r\ncreateProject('Tic Tac Toe', _assets_tictactoeApp_png__WEBPACK_IMPORTED_MODULE_3__, \"A web-based Tic Tac Toe game implemented in HTML, CSS, and JavaScript. This project highlights the use of factory functions and IIFE (Immediately Invoked Function Expression) in JavaScript. Factory functions are employed to create player objects, and an IIFE is used to create the GameBoard module, providing a structured and encapsulated design for the Tic Tac Toe game.\");\r\ncreateProject('Calculator App', _assets_calculatorApp_png__WEBPACK_IMPORTED_MODULE_4__, \"Calculator created with HTML, CSS and Javascript.\");\r\ncreateProject('Weather App', _assets_WeatherApp_png__WEBPACK_IMPORTED_MODULE_5__, \"Weather application using OpenWeather API.\");\r\ncreateProject('Library App', _assets_LibraryApp_png__WEBPACK_IMPORTED_MODULE_6__, \"This is a library web app that allows you to track and manage your book collection. You can add books with their title, author, number of pages, and mark whether you have read them or not.\");\r\ncreateProject('Etch A Sketch', _assets_Etchasketch_png__WEBPACK_IMPORTED_MODULE_7__, \"Etch a Sketch using html css and Javascript\");\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/assets/Etchasketch.png":
/*!************************************!*\
  !*** ./src/assets/Etchasketch.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf28b858819252cd14bd.png\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/assets/Etchasketch.png?");

/***/ }),

/***/ "./src/assets/LibraryApp.png":
/*!***********************************!*\
  !*** ./src/assets/LibraryApp.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20afce19859d069ed475.png\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/assets/LibraryApp.png?");

/***/ }),

/***/ "./src/assets/WeatherApp.png":
/*!***********************************!*\
  !*** ./src/assets/WeatherApp.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1e7064716ae6253ca42.png\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/assets/WeatherApp.png?");

/***/ }),

/***/ "./src/assets/blue-abstract-watercolor-paint-paper.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/blue-abstract-watercolor-paint-paper.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"207a517a111f6adbda09.jpg\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/assets/blue-abstract-watercolor-paint-paper.jpg?");

/***/ }),

/***/ "./src/assets/calculatorApp.png":
/*!**************************************!*\
  !*** ./src/assets/calculatorApp.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"95e2f279d0d3282bc9ea.png\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/assets/calculatorApp.png?");

/***/ }),

/***/ "./src/assets/profilepic.jpg":
/*!***********************************!*\
  !*** ./src/assets/profilepic.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84a2c07a41ea244edf3d.jpg\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/assets/profilepic.jpg?");

/***/ }),

/***/ "./src/assets/tictactoeApp.png":
/*!*************************************!*\
  !*** ./src/assets/tictactoeApp.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"278d5d88298390f3ed1a.png\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/assets/tictactoeApp.png?");

/***/ }),

/***/ "./src/assets/todoApp.png":
/*!********************************!*\
  !*** ./src/assets/todoApp.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d4b446b51d3e7db29d8c.png\";\n\n//# sourceURL=webpack://webpack-boilerplate/./src/assets/todoApp.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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