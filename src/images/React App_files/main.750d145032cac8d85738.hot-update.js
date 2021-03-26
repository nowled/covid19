webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.750d145032cac8d85738.hot-update.js.map