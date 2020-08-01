module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

/***/ "./component/HeaderCompo.js":
/*!**********************************!*\
  !*** ./component/HeaderCompo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ohhyoungnam/Desktop/study/react-labs/nextjs/nextjs-example/component/HeaderCompo.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst HeaderCompo = ({\n  children\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, \"\\uC624\\uD615\\uB0A8 \\uBC1C\\uD45C\\uC8FC\\uC81C nextjs\"), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderCompo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSGVhZGVyQ29tcG8uanM/MjBlNCJdLCJuYW1lcyI6WyJIZWFkZXJDb21wbyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBQ2xDLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFERixFQUVHQSxRQUZILENBREY7QUFNRCxDQVBEOztBQVNlRCwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudC9IZWFkZXJDb21wby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRlckNvbXBvID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPuyYpO2YleuCqCDrsJztkZzso7zsoJwgbmV4dGpzPC9oMT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb21wbzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/HeaderCompo.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_HeaderCompo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/HeaderCompo */ \"./component/HeaderCompo.js\");\nvar _jsxFileName = \"/Users/ohhyoungnam/Desktop/study/react-labs/nextjs/nextjs-example/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst Layout = ({\n  Component,\n  pageProps\n}) => {\n  //next에서 넣어주는 props, 페이지들을 넣어줌\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_HeaderCompo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }))));\n};\n\nLayout.getInitalProps = async context => {\n  //next에서 내려주는 context, 안에 페이지나 ctx가 들어있음\n  let pageProps = {};\n\n  if (context.Component.getInitalProps) {\n    //페이지에 getInitalProps가 있으면\n    pageProps = await context.Component.getInitalProps(context.ctx); // getInitalProps 실행\n  }\n\n  return pageProps;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTGF5b3V0IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0SW5pdGFsUHJvcHMiLCJjb250ZXh0IiwiY3R4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUFFO0FBQzdDLFNBQ0UsbUVBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsQ0FERjtBQU9ELENBUkQ7O0FBVUFGLE1BQU0sQ0FBQ0csY0FBUCxHQUF3QixNQUFPQyxPQUFQLElBQW1CO0FBQUU7QUFDM0MsTUFBSUYsU0FBUyxHQUFHLEVBQWhCOztBQUNBLE1BQUdFLE9BQU8sQ0FBQ0gsU0FBUixDQUFrQkUsY0FBckIsRUFBcUM7QUFBRTtBQUNyQ0QsYUFBUyxHQUFHLE1BQU1FLE9BQU8sQ0FBQ0gsU0FBUixDQUFrQkUsY0FBbEIsQ0FBaUNDLE9BQU8sQ0FBQ0MsR0FBekMsQ0FBbEIsQ0FEbUMsQ0FDOEI7QUFDbEU7O0FBQ0QsU0FBT0gsU0FBUDtBQUNELENBTkQ7O0FBT2VGLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlckNvbXBvIGZyb20gXCIuLi9jb21wb25lbnQvSGVhZGVyQ29tcG9cIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4geyAvL25leHTsl5DshJwg64Sj7Ja07KO864qUIHByb3BzLCDtjpjsnbTsp4Drk6TsnYQg64Sj7Ja07KSMXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXJDb21wbz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XG4gICAgICA8L0hlYWRlckNvbXBvPlxuICAgIDwvPlxuICApO1xufVxuXG5MYXlvdXQuZ2V0SW5pdGFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4geyAvL25leHTsl5DshJwg64K066Ck7KO864qUIGNvbnRleHQsIOyViOyXkCDtjpjsnbTsp4DrgpggY3R46rCAIOuTpOyWtOyeiOydjFxuICBsZXQgcGFnZVByb3BzID0ge307XG4gIGlmKGNvbnRleHQuQ29tcG9uZW50LmdldEluaXRhbFByb3BzKSB7IC8v7Y6Y7J207KeA7JeQIGdldEluaXRhbFByb3Bz6rCAIOyeiOycvOuptFxuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGNvbnRleHQuQ29tcG9uZW50LmdldEluaXRhbFByb3BzKGNvbnRleHQuY3R4KTsgLy8gZ2V0SW5pdGFsUHJvcHMg7Iuk7ZaJXG4gIH1cbiAgcmV0dXJuIHBhZ2VQcm9wcztcbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });