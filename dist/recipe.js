/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/young-serif/YoungSerif-Regular.ttf */ "./src/assets/fonts/young-serif/YoungSerif-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/outfit/Outfit-VariableFont_wght.ttf */ "./src/assets/fonts/outfit/Outfit-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Young Serif";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Outfit Light";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Outfit Medium";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Outfit Heavy";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: 700;
  font-style: normal;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

body {
  font-size: 1.6rem;
  font-family: "Outfit Light";
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

@media screen and (min-width: 600px) {
  body {
    background: hsl(30, 54%, 90%);
  }
}
.container {
  width: 100%;
  max-width: 37.5rem;
  display: grid;
  background: hsl(0, 0%, 100%);
}

@media screen and (min-width: 600px) {
  .container {
    max-width: 70rem;
    padding: 3rem 3rem 0 3rem;
    border-radius: 12px;
    margin-top: 10rem;
  }
}
header,
main,
footer {
  padding: 4rem 3rem 2rem;
}

@media screen and (min-width: 600px) {
  header,
  main,
  footer {
    padding: 0;
  }
}
@media screen and (min-width: 600px) {
  .hero-img {
    border-radius: 12px;
  }
}
header h1 {
  font-family: "Young Serif";
  line-height: 3.5rem;
  margin-bottom: 2.5rem;
}

@media screen and (min-width: 600px) {
  header h1 {
    margin-top: 5rem;
    font-size: 3.8rem;
  }
}
header p {
  font-family: "Outfit Light";
  color: hsl(30, 10%, 34%);
  margin-bottom: 3rem;
  line-height: 2.3rem;
}

.prep-container {
  padding: 2rem;
  background-color: hsl(330, 100%, 98%);
  border-radius: 8px;
  margin-bottom: 4rem;
}
.prep-container figcaption {
  font-family: "Outfit Medium";
  color: hsl(332, 51%, 32%);
  font-size: 1.8rem;
}

.prep-list {
  padding: 1.5rem 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.prep-list li {
  padding-left: 2rem;
}
.prep-list li::marker {
  color: hsl(332, 51%, 32%);
}

.li-container {
  display: inline-block;
  vertical-align: middle;
  color: hsl(30, 10%, 34%);
  line-height: 2.25rem;
}
.li-container span {
  font-family: "Outfit Medium";
}

.ingred-container {
  position: relative;
}
.ingred-container::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  margin-top: 1rem;
  left: 0;
  display: block;
  clear: both;
  background-color: #f2f0ed;
}

@media screen and (min-width: 600px) {
  .ingred-container {
    margin-top: -1rem;
  }
}
.ingred-container figcaption {
  font-family: "Young Serif";
  font-size: 2.8rem;
  color: hsl(14, 45%, 36%);
}

.ingred-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 2rem;
  padding-inline: 2rem;
}
.ingred-list li {
  padding-left: 2rem;
}
.ingred-list li::marker {
  color: hsl(332, 51%, 32%);
}

.instruct-container {
  margin-top: -2rem;
  position: relative;
}
.instruct-container::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  clear: both;
  display: block;
  background-color: #f2f0ed;
  margin-top: 3rem;
}

@media screen and (min-width: 600px) {
  .instruct-container {
    margin-top: 4rem;
  }
}
.instruct-container figcaption {
  font-size: 2.8rem;
  font-family: "Young Serif";
  color: hsl(14, 45%, 36%);
}

.instruct-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0 0 2.5rem;
}
.instruct-list li {
  line-height: 2.4rem;
  padding-left: 1.5rem;
  max-width: 28.5rem;
  color: hsl(30, 10%, 34%);
}
.instruct-list li span {
  font-family: "Outfit Heavy";
  color: hsl(30, 10%, 34%);
}
.instruct-list li::marker {
  color: hsl(332, 51%, 32%);
  font-weight: bold;
  font-family: "Outfit Heavy";
}

@media screen and (min-width: 600px) {
  .instruct-list li {
    max-width: unset;
  }
}
footer {
  padding-block: 3rem;
}

@media screen and (min-width: 600px) {
  footer {
    padding-block: 3rem 1rem;
  }
}
.nutrit-container {
  margin-top: 1rem;
}

@media screen and (min-width: 600px) {
  .nutrit-container {
    margin-top: 4rem;
  }
}
.nutrit-container figcaption {
  font-size: 2.8rem;
  font-family: "Young Serif";
  color: hsl(14, 45%, 36%);
  margin-bottom: 2rem;
}

.nutrit-container p {
  color: hsl(30, 10%, 34%);
  max-width: 30rem;
  margin-bottom: 2rem;
  line-height: 2.5rem;
}

@media screen and (min-width: 600px) {
  .nutrit-container p {
    max-width: unset;
    margin-bottom: 2.5rem;
  }
}
.nutrit-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-inline: 3rem;
  align-items: center;
}

.nutrit-item p:last-child {
  color: hsl(14, 45%, 36%);
  font-family: "Outfit Medium";
}

.item-1,
.item-2,
.item-3 {
  position: relative;
}

.item-1::after,
.item-2::after,
.item-3::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  display: block;
  clear: both;
  background-color: #f2f0ed;
  margin-top: 3rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"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","sourcesContent":["// Primary Colors\n$Nutmeg: hsl(14, 45%, 36%)\n$Dark_Raspberry: hsl(332, 51%, 32%)\n\n// Neutral Colors\n$White: hsl(0, 0%, 100%)\n$Rose_White: hsl(330, 100%, 98%)\n$Eggshell: hsl(30, 54%, 90%)\n$Light_Grey: hsl(30, 18%, 87%)\n$Wenge_Brown: hsl(30, 10%, 34%)\n$Dark_Charcoal: hsl(24, 5%, 18%)\n\n// Fonts\n\n@font-face \n    font-family: 'Young Serif'\n    src: url(../assets/fonts/young-serif/YoungSerif-Regular.ttf)\n    font-weight: 400\n    font-style: normal\n\n@font-face \n    font-family: 'Outfit Light'\n    src: url(../assets/fonts/outfit/Outfit-VariableFont_wght.ttf)\n    font-weight: 400\n    font-style: normal\n\n@font-face\n    font-family: 'Outfit Medium'\n    src: url(../assets/fonts/outfit/Outfit-VariableFont_wght.ttf)\n    font-weight: 600\n    font-style: normal\n\n@font-face\n    font-family: 'Outfit Heavy'\n    src: url(../assets/fonts/outfit/Outfit-VariableFont_wght.ttf)\n    font-weight: 700\n    font-style: normal\n\n\n\n// Style Resets\n\n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\nbody\n    font-size: 1.6rem\n    font-family: 'Outfit Light'\n    display: flex\n    flex-direction: column\n    align-items: center\n    gap: 2rem\n\n@media screen and (min-width: 600px)\n    body\n        background: $Eggshell\n        \n\n.container\n    width: 100%\n    max-width: 37.5rem\n    display: grid\n    background: $White\n\n@media screen and (min-width: 600px)\n    .container\n        max-width: 70rem\n        padding: 3rem 3rem 0 3rem\n        border-radius: 12px\n        margin-top: 10rem\n\nheader,\nmain,\nfooter\n    padding: 4rem 3rem 2rem\n\n@media screen and (min-width: 600px)\n    header,\n    main,\n    footer\n        padding: 0\n\n@media screen and (min-width: 600px)\n    .hero-img\n        border-radius: 12px\n\nheader h1 \n    font-family: 'Young Serif'\n    line-height: 3.5rem\n    margin-bottom: 2.5rem\n\n@media screen and (min-width: 600px)\n    header h1\n        margin-top: 5rem\n        font-size: 3.8rem\n\nheader p \n    font-family: 'Outfit Light'\n    color: $Wenge_Brown\n    margin-bottom: 3rem\n    line-height: 2.3rem\n\n.prep-container\n    padding: 2rem\n    background-color: $Rose_White\n    border-radius: 8px\n    margin-bottom: 4rem\n    figcaption\n        font-family: 'Outfit Medium'\n        color: $Dark_Raspberry\n        font-size: 1.8rem\n\n.prep-list\n    padding: 1.5rem 1rem 1rem 2rem\n    display: flex\n    flex-direction: column\n    gap: 1rem\n    li\n        padding-left: 2rem\n        &::marker\n            color: $Dark_Raspberry\n\n.li-container\n    display: inline-block\n    vertical-align: middle\n    color: $Wenge_Brown\n    line-height: 2.25rem\n    span\n        font-family: 'Outfit Medium'\n\n.ingred-container\n    position: relative\n    &::after\n        content: ''\n        position: absolute\n        width: 100%\n        height: 2px\n        margin-top: 1rem\n        left: 0\n        display: block\n        clear: both\n        background-color: lighten($Light_Grey, 7%)\n    \n@media screen and (min-width: 600px)\n    .ingred-container\n        margin-top: -1rem\n        \n.ingred-container figcaption\n    font-family: 'Young Serif'\n    font-size: 2.8rem\n    color: $Nutmeg\n\n.ingred-list\n    display: flex\n    flex-direction: column\n    gap: 1rem\n    padding-block: 2rem\n    padding-inline: 2rem\n    li\n        padding-left: 2rem\n        &::marker\n            color: $Dark_Raspberry\n\n\n\n// main\n//     padding-block: 3rem\n\n.instruct-container\n    margin-top: -2rem\n    position: relative\n    &::after\n        content: ''\n        position: absolute\n        width: 100%\n        height: 2px\n        left: 0\n        clear: both\n        display: block\n        background-color: lighten($Light_Grey, 7%)\n        margin-top: 3rem\n    \n@media screen and (min-width: 600px)\n    .instruct-container\n        margin-top: 4rem\n\n.instruct-container figcaption\n    font-size: 2.8rem\n    font-family: 'Young Serif'\n    color: $Nutmeg\n\n.instruct-list\n    display: flex\n    flex-direction: column\n    gap: 1rem\n    padding: 2rem 0 0 2.5rem\n    li\n        line-height: 2.4rem\n        padding-left: 1.5rem\n        max-width: 28.5rem\n        color: $Wenge_Brown\n        span\n            font-family: 'Outfit Heavy'\n            color: $Wenge_Brown\n        &::marker\n            color: $Dark_Raspberry\n            font-weight: bold\n            font-family: 'Outfit Heavy'\n\n@media screen and (min-width: 600px)\n    .instruct-list li\n        max-width: unset\n\n\nfooter\n    padding-block: 3rem\n\n@media screen and (min-width: 600px)\n    footer\n        padding-block: 3rem 1rem\n\n.nutrit-container\n    margin-top: 1rem\n\n@media screen and (min-width: 600px)\n    .nutrit-container\n        margin-top: 4rem\n    \n.nutrit-container figcaption\n    font-size: 2.8rem\n    font-family: 'Young Serif'\n    color: $Nutmeg\n    margin-bottom: 2rem\n\n.nutrit-container p\n    color: $Wenge_Brown\n    max-width: 30rem\n    margin-bottom: 2rem\n    line-height: 2.5rem\n\n@media screen and (min-width: 600px)\n    .nutrit-container p\n        max-width: unset\n        margin-bottom: 2.5rem\n\n.nutrit-item\n    display: grid\n    grid-template-columns: repeat(2, 1fr)\n    padding-inline: 3rem\n    align-items: center\n\n.nutrit-item p:last-child\n    color: $Nutmeg\n    font-family: 'Outfit Medium'\n\n.item-1,\n.item-2,\n.item-3\n    position: relative\n\n.item-1::after,\n.item-2::after,\n.item-3::after\n    content: ''\n    position: absolute\n    width: 100%\n    height: 2px\n    display: block\n    clear: both\n    background-color: lighten($Light_Grey, 7%)\n    margin-top: 3rem\n\n\n\n\n    \n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/assets/fonts/outfit/Outfit-VariableFont_wght.ttf":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/outfit/Outfit-VariableFont_wght.ttf ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00c2ed1a3bf798b0da27.ttf";

/***/ }),

/***/ "./src/assets/fonts/young-serif/YoungSerif-Regular.ttf":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/young-serif/YoungSerif-Regular.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "564996966d3552bf6282.ttf";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsZ0xBQXFFO0FBQ2pILDRDQUE0QyxrTEFBc0U7QUFDbEgsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssUUFBUSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxPQUFPLFdBQVcsTUFBTSxLQUFLLE9BQU8sVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFdBQVcsS0FBSyxLQUFLLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxZQUFZLFFBQVEsS0FBSyxXQUFXLFdBQVcsWUFBWSxZQUFZLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFlBQVksUUFBUSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtB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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNpcGUtcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9yZWNpcGUtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JlY2lwZS1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YmZhZCIsIndlYnBhY2s6Ly9yZWNpcGUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZWNpcGUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZWNpcGUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlY2lwZS1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlY2lwZS1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlY2lwZS1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWNpcGUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JlY2lwZS1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVjaXBlLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWNpcGUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZWNpcGUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZWNpcGUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVjaXBlLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy95b3VuZy1zZXJpZi9Zb3VuZ1NlcmlmLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL291dGZpdC9PdXRmaXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIllvdW5nIFNlcmlmXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3V0Zml0IExpZ2h0XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3V0Zml0IE1lZGl1bVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk91dGZpdCBIZWF2eVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LWZhbWlseTogXCJPdXRmaXQgTGlnaHRcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBoc2woMzAsIDU0JSwgOTAlKTtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM3LjVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzByZW07XG4gICAgcGFkZGluZzogM3JlbSAzcmVtIDAgM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xuICB9XG59XG5oZWFkZXIsXG5tYWluLFxuZm9vdGVyIHtcbiAgcGFkZGluZzogNHJlbSAzcmVtIDJyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGhlYWRlcixcbiAgbWFpbixcbiAgZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cbn1cbmhlYWRlciBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIllvdW5nIFNlcmlmXCI7XG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgaGVhZGVyIGgxIHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIGZvbnQtc2l6ZTogMy44cmVtO1xuICB9XG59XG5oZWFkZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk91dGZpdCBMaWdodFwiO1xuICBjb2xvcjogaHNsKDMwLCAxMCUsIDM0JSk7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjNyZW07XG59XG5cbi5wcmVwLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzMzAsIDEwMCUsIDk4JSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cbi5wcmVwLWNvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiT3V0Zml0IE1lZGl1bVwiO1xuICBjb2xvcjogaHNsKDMzMiwgNTElLCAzMiUpO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnByZXAtbGlzdCB7XG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDFyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuLnByZXAtbGlzdCBsaSB7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbi5wcmVwLWxpc3QgbGk6Om1hcmtlciB7XG4gIGNvbG9yOiBoc2woMzMyLCA1MSUsIDMyJSk7XG59XG5cbi5saS1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiBoc2woMzAsIDEwJSwgMzQlKTtcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG59XG4ubGktY29udGFpbmVyIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJPdXRmaXQgTWVkaXVtXCI7XG59XG5cbi5pbmdyZWQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluZ3JlZC1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjBlZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmluZ3JlZC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICB9XG59XG4uaW5ncmVkLWNvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiWW91bmcgU2VyaWZcIjtcbiAgZm9udC1zaXplOiAyLjhyZW07XG4gIGNvbG9yOiBoc2woMTQsIDQ1JSwgMzYlKTtcbn1cblxuLmluZ3JlZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nLWJsb2NrOiAycmVtO1xuICBwYWRkaW5nLWlubGluZTogMnJlbTtcbn1cbi5pbmdyZWQtbGlzdCBsaSB7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbi5pbmdyZWQtbGlzdCBsaTo6bWFya2VyIHtcbiAgY29sb3I6IGhzbCgzMzIsIDUxJSwgMzIlKTtcbn1cblxuLmluc3RydWN0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC0ycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5zdHJ1Y3QtY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBsZWZ0OiAwO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYwZWQ7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5pbnN0cnVjdC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gIH1cbn1cbi5pbnN0cnVjdC1jb250YWluZXIgZmlnY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMi44cmVtO1xuICBmb250LWZhbWlseTogXCJZb3VuZyBTZXJpZlwiO1xuICBjb2xvcjogaHNsKDE0LCA0NSUsIDM2JSk7XG59XG5cbi5pbnN0cnVjdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAycmVtIDAgMCAyLjVyZW07XG59XG4uaW5zdHJ1Y3QtbGlzdCBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBtYXgtd2lkdGg6IDI4LjVyZW07XG4gIGNvbG9yOiBoc2woMzAsIDEwJSwgMzQlKTtcbn1cbi5pbnN0cnVjdC1saXN0IGxpIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJPdXRmaXQgSGVhdnlcIjtcbiAgY29sb3I6IGhzbCgzMCwgMTAlLCAzNCUpO1xufVxuLmluc3RydWN0LWxpc3QgbGk6Om1hcmtlciB7XG4gIGNvbG9yOiBoc2woMzMyLCA1MSUsIDMyJSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJPdXRmaXQgSGVhdnlcIjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmluc3RydWN0LWxpc3QgbGkge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cbmZvb3RlciB7XG4gIHBhZGRpbmctYmxvY2s6IDNyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGZvb3RlciB7XG4gICAgcGFkZGluZy1ibG9jazogM3JlbSAxcmVtO1xuICB9XG59XG4ubnV0cml0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5udXRyaXQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG59XG4ubnV0cml0LWNvbnRhaW5lciBmaWdjYXB0aW9uIHtcbiAgZm9udC1zaXplOiAyLjhyZW07XG4gIGZvbnQtZmFtaWx5OiBcIllvdW5nIFNlcmlmXCI7XG4gIGNvbG9yOiBoc2woMTQsIDQ1JSwgMzYlKTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm51dHJpdC1jb250YWluZXIgcCB7XG4gIGNvbG9yOiBoc2woMzAsIDEwJSwgMzQlKTtcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLm51dHJpdC1jb250YWluZXIgcCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5udXRyaXQtaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIHBhZGRpbmctaW5saW5lOiAzcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubnV0cml0LWl0ZW0gcDpsYXN0LWNoaWxkIHtcbiAgY29sb3I6IGhzbCgxNCwgNDUlLCAzNiUpO1xuICBmb250LWZhbWlseTogXCJPdXRmaXQgTWVkaXVtXCI7XG59XG5cbi5pdGVtLTEsXG4uaXRlbS0yLFxuLml0ZW0tMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLml0ZW0tMTo6YWZ0ZXIsXG4uaXRlbS0yOjphZnRlcixcbi5pdGVtLTM6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjBlZDtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjQTtFQUNJLDBCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYko7QUFlQTtFQUNJLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYko7QUFlQTtFQUNJLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYko7QUFlQTtFQUNJLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYko7QUFtQkE7OztFQUdJLHNCQUFBO0FBakJKOztBQW1CQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFoQko7O0FBa0JBO0VBQ0ksZ0JBQUE7QUFmSjs7QUFpQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7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QUFuQkE7OztFQUdJLGtCQUFBO0FBc0JKOztBQXBCQTs7O0VBR0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUF1QkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gUHJpbWFyeSBDb2xvcnNcXG4kTnV0bWVnOiBoc2woMTQsIDQ1JSwgMzYlKVxcbiREYXJrX1Jhc3BiZXJyeTogaHNsKDMzMiwgNTElLCAzMiUpXFxuXFxuLy8gTmV1dHJhbCBDb2xvcnNcXG4kV2hpdGU6IGhzbCgwLCAwJSwgMTAwJSlcXG4kUm9zZV9XaGl0ZTogaHNsKDMzMCwgMTAwJSwgOTglKVxcbiRFZ2dzaGVsbDogaHNsKDMwLCA1NCUsIDkwJSlcXG4kTGlnaHRfR3JleTogaHNsKDMwLCAxOCUsIDg3JSlcXG4kV2VuZ2VfQnJvd246IGhzbCgzMCwgMTAlLCAzNCUpXFxuJERhcmtfQ2hhcmNvYWw6IGhzbCgyNCwgNSUsIDE4JSlcXG5cXG4vLyBGb250c1xcblxcbkBmb250LWZhY2UgXFxuICAgIGZvbnQtZmFtaWx5OiAnWW91bmcgU2VyaWYnXFxuICAgIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy95b3VuZy1zZXJpZi9Zb3VuZ1NlcmlmLVJlZ3VsYXIudHRmKVxcbiAgICBmb250LXdlaWdodDogNDAwXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbFxcblxcbkBmb250LWZhY2UgXFxuICAgIGZvbnQtZmFtaWx5OiAnT3V0Zml0IExpZ2h0J1xcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvb3V0Zml0L091dGZpdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXFxuXFxuQGZvbnQtZmFjZVxcbiAgICBmb250LWZhbWlseTogJ091dGZpdCBNZWRpdW0nXFxuICAgIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9vdXRmaXQvT3V0Zml0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZilcXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXG5cXG5AZm9udC1mYWNlXFxuICAgIGZvbnQtZmFtaWx5OiAnT3V0Zml0IEhlYXZ5J1xcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvb3V0Zml0L091dGZpdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXFxuXFxuXFxuXFxuLy8gU3R5bGUgUmVzZXRzXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcblxcbipcXG4gICAgbWFyZ2luOiAwXFxuICAgIHBhZGRpbmc6IDBcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGhcXG5cXG5odG1sXFxuICAgIGZvbnQtc2l6ZTogNjIuNSVcXG5cXG5pbWdcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgaGVpZ2h0OiBhdXRvXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyXFxuXFxuYm9keVxcbiAgICBmb250LXNpemU6IDEuNnJlbVxcbiAgICBmb250LWZhbWlseTogJ091dGZpdCBMaWdodCdcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgZ2FwOiAycmVtXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIGJvZHlcXG4gICAgICAgIGJhY2tncm91bmQ6ICRFZ2dzaGVsbFxcbiAgICAgICAgXFxuXFxuLmNvbnRhaW5lclxcbiAgICB3aWR0aDogMTAwJVxcbiAgICBtYXgtd2lkdGg6IDM3LjVyZW1cXG4gICAgZGlzcGxheTogZ3JpZFxcbiAgICBiYWNrZ3JvdW5kOiAkV2hpdGVcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmNvbnRhaW5lclxcbiAgICAgICAgbWF4LXdpZHRoOiA3MHJlbVxcbiAgICAgICAgcGFkZGluZzogM3JlbSAzcmVtIDAgM3JlbVxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweFxcbiAgICAgICAgbWFyZ2luLXRvcDogMTByZW1cXG5cXG5oZWFkZXIsXFxubWFpbixcXG5mb290ZXJcXG4gICAgcGFkZGluZzogNHJlbSAzcmVtIDJyZW1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgaGVhZGVyLFxcbiAgICBtYWluLFxcbiAgICBmb290ZXJcXG4gICAgICAgIHBhZGRpbmc6IDBcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmhlcm8taW1nXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4XFxuXFxuaGVhZGVyIGgxIFxcbiAgICBmb250LWZhbWlseTogJ1lvdW5nIFNlcmlmJ1xcbiAgICBsaW5lLWhlaWdodDogMy41cmVtXFxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBoZWFkZXIgaDFcXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW1cXG4gICAgICAgIGZvbnQtc2l6ZTogMy44cmVtXFxuXFxuaGVhZGVyIHAgXFxuICAgIGZvbnQtZmFtaWx5OiAnT3V0Zml0IExpZ2h0J1xcbiAgICBjb2xvcjogJFdlbmdlX0Jyb3duXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW1cXG4gICAgbGluZS1oZWlnaHQ6IDIuM3JlbVxcblxcbi5wcmVwLWNvbnRhaW5lclxcbiAgICBwYWRkaW5nOiAycmVtXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRSb3NlX1doaXRlXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweFxcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtXFxuICAgIGZpZ2NhcHRpb25cXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3V0Zml0IE1lZGl1bSdcXG4gICAgICAgIGNvbG9yOiAkRGFya19SYXNwYmVycnlcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtXFxuXFxuLnByZXAtbGlzdFxcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbSAxcmVtIDJyZW1cXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGdhcDogMXJlbVxcbiAgICBsaVxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtXFxuICAgICAgICAmOjptYXJrZXJcXG4gICAgICAgICAgICBjb2xvcjogJERhcmtfUmFzcGJlcnJ5XFxuXFxuLmxpLWNvbnRhaW5lclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxcbiAgICBjb2xvcjogJFdlbmdlX0Jyb3duXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjI1cmVtXFxuICAgIHNwYW5cXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3V0Zml0IE1lZGl1bSdcXG5cXG4uaW5ncmVkLWNvbnRhaW5lclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgJjo6YWZ0ZXJcXG4gICAgICAgIGNvbnRlbnQ6ICcnXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICBoZWlnaHQ6IDJweFxcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbVxcbiAgICAgICAgbGVmdDogMFxcbiAgICAgICAgZGlzcGxheTogYmxvY2tcXG4gICAgICAgIGNsZWFyOiBib3RoXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRMaWdodF9HcmV5LCA3JSlcXG4gICAgXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5pbmdyZWQtY29udGFpbmVyXFxuICAgICAgICBtYXJnaW4tdG9wOiAtMXJlbVxcbiAgICAgICAgXFxuLmluZ3JlZC1jb250YWluZXIgZmlnY2FwdGlvblxcbiAgICBmb250LWZhbWlseTogJ1lvdW5nIFNlcmlmJ1xcbiAgICBmb250LXNpemU6IDIuOHJlbVxcbiAgICBjb2xvcjogJE51dG1lZ1xcblxcbi5pbmdyZWQtbGlzdFxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgZ2FwOiAxcmVtXFxuICAgIHBhZGRpbmctYmxvY2s6IDJyZW1cXG4gICAgcGFkZGluZy1pbmxpbmU6IDJyZW1cXG4gICAgbGlcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbVxcbiAgICAgICAgJjo6bWFya2VyXFxuICAgICAgICAgICAgY29sb3I6ICREYXJrX1Jhc3BiZXJyeVxcblxcblxcblxcbi8vIG1haW5cXG4vLyAgICAgcGFkZGluZy1ibG9jazogM3JlbVxcblxcbi5pbnN0cnVjdC1jb250YWluZXJcXG4gICAgbWFyZ2luLXRvcDogLTJyZW1cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgICY6OmFmdGVyXFxuICAgICAgICBjb250ZW50OiAnJ1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgaGVpZ2h0OiAycHhcXG4gICAgICAgIGxlZnQ6IDBcXG4gICAgICAgIGNsZWFyOiBib3RoXFxuICAgICAgICBkaXNwbGF5OiBibG9ja1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkTGlnaHRfR3JleSwgNyUpXFxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtXFxuICAgIFxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuaW5zdHJ1Y3QtY29udGFpbmVyXFxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtXFxuXFxuLmluc3RydWN0LWNvbnRhaW5lciBmaWdjYXB0aW9uXFxuICAgIGZvbnQtc2l6ZTogMi44cmVtXFxuICAgIGZvbnQtZmFtaWx5OiAnWW91bmcgU2VyaWYnXFxuICAgIGNvbG9yOiAkTnV0bWVnXFxuXFxuLmluc3RydWN0LWxpc3RcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGdhcDogMXJlbVxcbiAgICBwYWRkaW5nOiAycmVtIDAgMCAyLjVyZW1cXG4gICAgbGlcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW1cXG4gICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtXFxuICAgICAgICBtYXgtd2lkdGg6IDI4LjVyZW1cXG4gICAgICAgIGNvbG9yOiAkV2VuZ2VfQnJvd25cXG4gICAgICAgIHNwYW5cXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ091dGZpdCBIZWF2eSdcXG4gICAgICAgICAgICBjb2xvcjogJFdlbmdlX0Jyb3duXFxuICAgICAgICAmOjptYXJrZXJcXG4gICAgICAgICAgICBjb2xvcjogJERhcmtfUmFzcGJlcnJ5XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ091dGZpdCBIZWF2eSdcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmluc3RydWN0LWxpc3QgbGlcXG4gICAgICAgIG1heC13aWR0aDogdW5zZXRcXG5cXG5cXG5mb290ZXJcXG4gICAgcGFkZGluZy1ibG9jazogM3JlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBmb290ZXJcXG4gICAgICAgIHBhZGRpbmctYmxvY2s6IDNyZW0gMXJlbVxcblxcbi5udXRyaXQtY29udGFpbmVyXFxuICAgIG1hcmdpbi10b3A6IDFyZW1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLm51dHJpdC1jb250YWluZXJcXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW1cXG4gICAgXFxuLm51dHJpdC1jb250YWluZXIgZmlnY2FwdGlvblxcbiAgICBmb250LXNpemU6IDIuOHJlbVxcbiAgICBmb250LWZhbWlseTogJ1lvdW5nIFNlcmlmJ1xcbiAgICBjb2xvcjogJE51dG1lZ1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtXFxuXFxuLm51dHJpdC1jb250YWluZXIgcFxcbiAgICBjb2xvcjogJFdlbmdlX0Jyb3duXFxuICAgIG1heC13aWR0aDogMzByZW1cXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICBsaW5lLWhlaWdodDogMi41cmVtXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5udXRyaXQtY29udGFpbmVyIHBcXG4gICAgICAgIG1heC13aWR0aDogdW5zZXRcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbVxcblxcbi5udXRyaXQtaXRlbVxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcilcXG4gICAgcGFkZGluZy1pbmxpbmU6IDNyZW1cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcblxcbi5udXRyaXQtaXRlbSBwOmxhc3QtY2hpbGRcXG4gICAgY29sb3I6ICROdXRtZWdcXG4gICAgZm9udC1mYW1pbHk6ICdPdXRmaXQgTWVkaXVtJ1xcblxcbi5pdGVtLTEsXFxuLml0ZW0tMixcXG4uaXRlbS0zXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcblxcbi5pdGVtLTE6OmFmdGVyLFxcbi5pdGVtLTI6OmFmdGVyLFxcbi5pdGVtLTM6OmFmdGVyXFxuICAgIGNvbnRlbnQ6ICcnXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICB3aWR0aDogMTAwJVxcbiAgICBoZWlnaHQ6IDJweFxcbiAgICBkaXNwbGF5OiBibG9ja1xcbiAgICBjbGVhcjogYm90aFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRMaWdodF9HcmV5LCA3JSlcXG4gICAgbWFyZ2luLXRvcDogM3JlbVxcblxcblxcblxcblxcbiAgICBcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9