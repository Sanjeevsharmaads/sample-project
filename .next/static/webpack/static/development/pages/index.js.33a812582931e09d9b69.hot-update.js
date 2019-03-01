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
        className: "jsx-318438599" + " " + "main-cls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-318438599" + " " + "aheading-cls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Activewear"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "318438599",
        __self: this
      }, ".main-cls.jsx-318438599{width:1215px;padding-top:300px;padding-left:300px;}.aheading-cls.jsx-318438599{margin-bottom:20px;padding-bottom:15px;border-bottom:1px solid #d3d3d3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQURTQWRtaW5cXGRlc2t0b3BcXG5laW1hbm1hcmN1c1xccGFnZXNcXFByb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDZSxBQUdzQixBQU9PLGFBTkYsTUFPQyxZQU5BLFFBT2EsV0FMaEMscUJBTUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBRFNBZG1pblxcZGVza3RvcFxcbmVpbWFubWFyY3VzXFxwYWdlc1xcUHJvZHVjdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0Q29tcG9uZW50IGZyb20gJy4vUHJvZHVjdENvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL3Rlc3RkYXRhLmpzJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcblxyXG5cclxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cdFx0dGhpcy5zdGF0ZSA9e1wicHJvZHVjdExpc3RcIjpbXX1cclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG5cdFx0ZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9nZXREYXRhJyx7XHJcblx0XHRcdG1ldGhvZDonZ2V0JyxcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PnJlc3BvbnNlLmpzb24oKVxyXG5cdFx0LnRoZW4oZGF0YSA9PnRoaXMuc2V0U3RhdGUoe3Byb2R1Y3RMaXN0OmRhdGF9KSkpO1xyXG5cdH1cclxuXHJcblx0aXNGYXZvdXJpZSA9IChhcnJheXRvc2VhcmNoLCBrZXksIHZhbHVldG9zZWFyY2gpID0+e1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheXRvc2VhcmNoLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChhcnJheXRvc2VhcmNoW2ldW2tleV0gPT0gdmFsdWV0b3NlYXJjaCkge1xyXG5cdCAgICBcdFx0cmV0dXJuIGk7XHJcblx0ICAgIFx0fVxyXG5cdCAgICB9XHJcbiAgICBcdHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblx0Y2hhbmdlSGVhcnQgPSAoZSxpbmRleCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ2hlbGxvJyk7XHJcblx0XHRjb25zdCB0ZW1wUHJvZHVjdCA9IHRoaXMuc3RhdGUucHJvZHVjdExpc3RcclxuXHRcdHZhciB2YWwgPSB0aGlzLmlzRmF2b3VyaWUodGhpcy5zdGF0ZS5wcm9kdWN0TGlzdCwgXCJpZFwiLGluZGV4KTtcclxuXHRcdHRlbXBQcm9kdWN0W3ZhbF1bXCJpc0ZhdlwiXSA9ICF0aGlzLnN0YXRlLnByb2R1Y3RMaXN0W3ZhbF1bXCJpc0ZhdlwiXVxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7cHJvZHVjdExpc3Q6dGVtcFByb2R1Y3R9KVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRjb25zb2xlLmxvZygnbXkgZGF0YSAnK3RoaXMuc3RhdGUucHJvZHVjdExpc3RbMF0pO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2xzXCI+XHJcblx0XHRcdDxoNCBjbGFzc05hbWU9XCJhaGVhZGluZy1jbHNcIj5BY3RpdmV3ZWFyPC9oND5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdCAgICAgIC5tYWluLWNsc3tcclxuXHRcdCAgICAgIFx0d2lkdGg6MTIxNXB4O1xyXG5cdFx0ICAgICAgXHRwYWRkaW5nLXRvcDozMDBweDtcclxuXHRcdCAgICAgIFx0cGFkZGluZy1sZWZ0OjMwMHB4O1xyXG5cclxuXHRcdCAgICAgIH1cclxuXHJcblx0XHQgICAgICAuYWhlYWRpbmctY2xze1xyXG5cdFx0ICAgICAgXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgXHRcdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcblx0XHQgICAgICBcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkM2QzZDM7XHJcblx0XHQgICAgICB9XHJcblxyXG4gICAgIFx0XHRgfTwvc3R5bGU+XHJcblxyXG5cdFx0XHRcdDxkaXYgPlxyXG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUucHJvZHVjdExpc3QubWFwKChhYmMsaW5kZXgpID0+KFxyXG5cdFx0XHRcdCAgICAgICBcdDxQcm9kdWN0Q29tcG9uZW50IGluZGV4PXthYmMuaW5kZXh9IGNoYW5nZUltYWdlPXt0aGlzLmNoYW5nZUltYWdlfSBjaGFuZ2VIZWFydD17dGhpcy5jaGFuZ2VIZWFydH0gaWQ9e2FiYy5pZH0gbmFtZT17YWJjLm5hbWV9IHByaWNlPXthYmMucHJpY2V9IGRpc2NvdW50ZWRQcmljZT17YWJjLmRpc2NvdW50ZWRQcmljZX0gaXNFeGNsdXNpdmU9e2FiYy5pc0V4Y2x1c2l2ZX0gaXNGYXY9e2FiYy5pc0Zhdn0gaXRlbXNMZWZ0SW5TdG9jaz17YWJjLml0ZW1zTGVmdEluU3RvY2t9IGlzUHJlT3JkZXI9e2FiYy5pc1ByZU9yZGVyfSBpbWFnZVVSTD17YWJjLmltYWdlVVJMfSBpbWFnZUhvdmVyVVJMPXthYmMuaW1hZ2VIb3ZlclVSTH0vPlxyXG5cdFx0XHRcdCAgICApKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiXX0= */\n/*@ sourceURL=C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\ProductList.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-318438599",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
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
            lineNumber: 65
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
//# sourceMappingURL=index.js.33a812582931e09d9b69.hot-update.js.map