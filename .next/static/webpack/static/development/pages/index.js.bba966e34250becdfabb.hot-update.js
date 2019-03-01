webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/ProductList.js":
/*!******************************!*\
  !*** ./pages/ProductList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js?d225");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js?b0b4");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js?308d");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js?6bb5");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js?013f");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js?4e2b");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ProductComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductComponent */ "./pages/ProductComponent.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js?3e04");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _testdata_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../testdata.js */ "./testdata.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\ProductList.js";







var ProductList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductList, _React$Component);

  function ProductList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "isFavourie", function (arraytosearch, key, valuetosearch) {
      for (var i = 0; i < arraytosearch.length; i++) {
        if (arraytosearch[i][key] == valuetosearch) {
          return i;
        }
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeHeart", function (e, index) {
      console.log('hello');
      var tempProduct = _this.state.productList;

      var val = _this.isFavourie(_this.state.productList, "id", index);

      tempProduct[val]["isFav"] = !_this.state.productList[val]["isFav"];

      _this.setState({
        productList: tempProduct
      });
    });

    _this.state = {
      "productList": []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()('http://localhost:9000/getData', {
        method: 'get'
      }).then(function (response) {
        return response.json().then(function (data) {
          return _this2.setState({
            productList: data
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log('my data ' + this.state.productList[0]);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4290976362" + " " + "main-cls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-4290976362" + " " + "aheading-cls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Activewear"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4290976362",
        __self: this
      }, ".main-cls.jsx-4290976362{width:1215px;padding-top:300px;padding-left:300px;}.aheading-cls.jsx-4290976362{border-bottom:1px solid #d3d3d3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQURTQWRtaW5cXGRlc2t0b3BcXG5laW1hbm1hcmN1c1xccGFnZXNcXFByb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDZSxBQUdzQixBQU9tQixhQU5kLGtCQUNDLENBTW5CLGtCQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQURTQWRtaW5cXGRlc2t0b3BcXG5laW1hbm1hcmN1c1xccGFnZXNcXFByb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdENvbXBvbmVudCBmcm9tICcuL1Byb2R1Y3RDb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi90ZXN0ZGF0YS5qcyc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuXHJcbmNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHRcdHRoaXMuc3RhdGUgPXtcInByb2R1Y3RMaXN0XCI6W119XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcclxuXHRcdGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjkwMDAvZ2V0RGF0YScse1xyXG5cdFx0XHRtZXRob2Q6J2dldCcsXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT5yZXNwb25zZS5qc29uKClcclxuXHRcdC50aGVuKGRhdGEgPT50aGlzLnNldFN0YXRlKHtwcm9kdWN0TGlzdDpkYXRhfSkpKTtcclxuXHR9XHJcblxyXG5cdGlzRmF2b3VyaWUgPSAoYXJyYXl0b3NlYXJjaCwga2V5LCB2YWx1ZXRvc2VhcmNoKSA9PntcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXl0b3NlYXJjaC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoYXJyYXl0b3NlYXJjaFtpXVtrZXldID09IHZhbHVldG9zZWFyY2gpIHtcclxuXHQgICAgXHRcdHJldHVybiBpO1xyXG5cdCAgICBcdH1cclxuXHQgICAgfVxyXG4gICAgXHRyZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG5cdGNoYW5nZUhlYXJ0ID0gKGUsaW5kZXgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdoZWxsbycpO1xyXG5cdFx0Y29uc3QgdGVtcFByb2R1Y3QgPSB0aGlzLnN0YXRlLnByb2R1Y3RMaXN0XHJcblx0XHR2YXIgdmFsID0gdGhpcy5pc0Zhdm91cmllKHRoaXMuc3RhdGUucHJvZHVjdExpc3QsIFwiaWRcIixpbmRleCk7XHJcblx0XHR0ZW1wUHJvZHVjdFt2YWxdW1wiaXNGYXZcIl0gPSAhdGhpcy5zdGF0ZS5wcm9kdWN0TGlzdFt2YWxdW1wiaXNGYXZcIl1cclxuXHRcdHRoaXMuc2V0U3RhdGUoe3Byb2R1Y3RMaXN0OnRlbXBQcm9kdWN0fSlcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc29sZS5sb2coJ215IGRhdGEgJyt0aGlzLnN0YXRlLnByb2R1Y3RMaXN0WzBdKTtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWNsc1wiPlxyXG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiYWhlYWRpbmctY2xzXCI+QWN0aXZld2VhcjwvaDE+XHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgICAgICAubWFpbi1jbHN7XHJcblx0XHQgICAgICBcdHdpZHRoOjEyMTVweDtcclxuXHRcdCAgICAgIFx0cGFkZGluZy10b3A6MzAwcHg7XHJcblx0XHQgICAgICBcdHBhZGRpbmctbGVmdDozMDBweDtcclxuXHJcblx0XHQgICAgICB9XHJcblxyXG5cdFx0ICAgICAgLmFoZWFkaW5nLWNsc3tcclxuXHRcdCAgICAgIFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2QzZDNkMztcclxuXHRcdCAgICAgIH1cclxuXHJcbiAgICAgXHRcdGB9PC9zdHlsZT5cclxuXHJcblx0XHRcdFx0PGRpdiA+XHJcblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5wcm9kdWN0TGlzdC5tYXAoKGFiYyxpbmRleCkgPT4oXHJcblx0XHRcdFx0ICAgICAgIFx0PFByb2R1Y3RDb21wb25lbnQgaW5kZXg9e2FiYy5pbmRleH0gY2hhbmdlSW1hZ2U9e3RoaXMuY2hhbmdlSW1hZ2V9IGNoYW5nZUhlYXJ0PXt0aGlzLmNoYW5nZUhlYXJ0fSBpZD17YWJjLmlkfSBuYW1lPXthYmMubmFtZX0gcHJpY2U9e2FiYy5wcmljZX0gZGlzY291bnRlZFByaWNlPXthYmMuZGlzY291bnRlZFByaWNlfSBpc0V4Y2x1c2l2ZT17YWJjLmlzRXhjbHVzaXZlfSBpc0Zhdj17YWJjLmlzRmF2fSBpdGVtc0xlZnRJblN0b2NrPXthYmMuaXRlbXNMZWZ0SW5TdG9ja30gaXNQcmVPcmRlcj17YWJjLmlzUHJlT3JkZXJ9IGltYWdlVVJMPXthYmMuaW1hZ2VVUkx9IGltYWdlSG92ZXJVUkw9e2FiYy5pbWFnZUhvdmVyVVJMfS8+XHJcblx0XHRcdFx0ICAgICkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyJdfQ== */\n/*@ sourceURL=C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\ProductList.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4290976362",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, this.state.productList.map(function (abc, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ProductComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          index: abc.index,
          changeImage: _this3.changeImage,
          changeHeart: _this3.changeHeart,
          id: abc.id,
          name: abc.name,
          price: abc.price,
          discountedPrice: abc.discountedPrice,
          isExclusive: abc.isExclusive,
          isFav: abc.isFav,
          itemsLeftInStock: abc.itemsLeftInStock,
          isPreOrder: abc.isPreOrder,
          imageURL: abc.imageURL,
          imageHoverURL: abc.imageHoverURL,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        });
      })));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ })

})
//# sourceMappingURL=index.js.bba966e34250becdfabb.hot-update.js.map