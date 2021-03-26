(this["webpackJsonphealthdata"] = this["webpackJsonphealthdata"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.module.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.module.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background-color: rgb(250, 250, 250);\n}\n\n.App_container__1MQN3 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n", ""]);
// Exports
exports.locals = {
	"container": "App_container__1MQN3"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Cards/Cards.module.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Cards/Cards.module.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Chart/Chart.module.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Chart/Chart.module.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.module.css */ "./src/App.module.css");
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/api/index.js");
var _jsxFileName = "/Users/charlespeterson/Documents/Projects/healthdata/src/App.js";





class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  async componentDidMount() {
    const data = await Object(_api__WEBPACK_IMPORTED_MODULE_3__["fetchData"])();
    console.log(data);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _App_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Cards"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Chart"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["DateTime"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App.module.css":
/*!****************************!*\
  !*** ./src/App.module.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.module.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.module.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unirest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unirest */ "./node_modules/unirest/index.js");
/* harmony import */ var unirest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unirest__WEBPACK_IMPORTED_MODULE_1__);


const url = axios__WEBPACK_IMPORTED_MODULE_0___default()({
  method: 'GET',
  url: 'https://tripadvisor1.p.rapidapi.com/tips/list',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
    'x-rapidapi-key': 'c3ece3ede3msh1b0f2c7d4c61593p1472dbjsn9b6bfe0bc8b3',
    useQueryString: true
  },
  params: {
    lang: 'en_US',
    currency: 'USD',
    limit: '20',
    location_id: '8014024'
  }
});
const fetchData = async () => {
  try {
    const {
      data: {
        data
      }
    } = await url;
    console.log(data);
  } catch (error) {}
};

/***/ }),

/***/ "./src/components/Cards/Cards.js":
/*!***************************************!*\
  !*** ./src/components/Cards/Cards.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.module.css */ "./src/components/Cards/Cards.module.css");
/* harmony import */ var _Cards_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cards_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/charlespeterson/Documents/Projects/healthdata/src/components/Cards/Cards.js";



const Cards = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, "Cards");
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./src/components/Cards/Cards.module.css":
/*!***********************************************!*\
  !*** ./src/components/Cards/Cards.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Cards.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Cards/Cards.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Cards.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Cards/Cards.module.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Cards.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Cards/Cards.module.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Chart/Chart.js":
/*!***************************************!*\
  !*** ./src/components/Chart/Chart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chart_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart.module.css */ "./src/components/Chart/Chart.module.css");
/* harmony import */ var _Chart_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Chart_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/charlespeterson/Documents/Projects/healthdata/src/components/Chart/Chart.js";



const Chart = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, "Chart");
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/components/Chart/Chart.module.css":
/*!***********************************************!*\
  !*** ./src/components/Chart/Chart.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Chart.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Chart/Chart.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Chart.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Chart/Chart.module.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Chart.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Chart/Chart.module.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Dates/DateTime.js":
/*!******************************************!*\
  !*** ./src/components/Dates/DateTime.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/charlespeterson/Documents/Projects/healthdata/src/components/Dates/DateTime.js";




const DateTime = () => {
  const time = new Date();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {
    format: "MMMM Do YYYY - HH:mm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, time)));
};

/* harmony default export */ __webpack_exports__["default"] = (DateTime);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Cards, Chart, DateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cards_Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards/Cards */ "./src/components/Cards/Cards.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cards", function() { return _Cards_Cards__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Chart_Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart/Chart */ "./src/components/Chart/Chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _Chart_Chart__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Dates_DateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dates/DateTime */ "./src/components/Dates/DateTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTime", function() { return _Dates_DateTime__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/charlespeterson/Documents/Projects/healthdata/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 17
  }
}), document.getElementById('root'));

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/charlespeterson/Documents/Projects/healthdata/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/charlespeterson/Documents/Projects/healthdata/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/charlespeterson/Documents/Projects/healthdata/src/index.js */"./src/index.js");


/***/ }),

/***/ 10:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 17:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map