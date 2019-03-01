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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeImage", function (e, index) {
      console.log(index);
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

      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3953584768" + " " + "main-cls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3953584768",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Activewear"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3953584768",
        __self: this
      }, ".main-cls.jsx-3953584768{width:1215px;padding-top:300px;padding-left:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQURTQWRtaW5cXGRlc2t0b3BcXG5laW1hbm1hcmN1c1xccGFnZXNcXFByb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EZSxBQUdzQixhQUNLLGtCQUNDLG1CQUVuQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFEU0FkbWluXFxkZXNrdG9wXFxuZWltYW5tYXJjdXNcXHBhZ2VzXFxQcm9kdWN0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RDb21wb25lbnQgZnJvbSAnLi9Qcm9kdWN0Q29tcG9uZW50JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vdGVzdGRhdGEuanMnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcblxyXG5jbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0XHR0aGlzLnN0YXRlID17XCJwcm9kdWN0TGlzdFwiOltdfVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XHJcblx0XHRmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MDAwL2dldERhdGEnLHtcclxuXHRcdFx0bWV0aG9kOidnZXQnLFxyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+cmVzcG9uc2UuanNvbigpXHJcblx0XHQudGhlbihkYXRhID0+dGhpcy5zZXRTdGF0ZSh7cHJvZHVjdExpc3Q6ZGF0YX0pKSk7XHJcblx0fVxyXG5cclxuXHRpc0Zhdm91cmllID0gKGFycmF5dG9zZWFyY2gsIGtleSwgdmFsdWV0b3NlYXJjaCkgPT57XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5dG9zZWFyY2gubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGFycmF5dG9zZWFyY2hbaV1ba2V5XSA9PSB2YWx1ZXRvc2VhcmNoKSB7XHJcblx0ICAgIFx0XHRyZXR1cm4gaTtcclxuXHQgICAgXHR9XHJcblx0ICAgIH1cclxuICAgIFx0cmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuXHRjaGFuZ2VIZWFydCA9IChlLGluZGV4KSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnaGVsbG8nKTtcclxuXHRcdGNvbnN0IHRlbXBQcm9kdWN0ID0gdGhpcy5zdGF0ZS5wcm9kdWN0TGlzdFxyXG5cdFx0dmFyIHZhbCA9IHRoaXMuaXNGYXZvdXJpZSh0aGlzLnN0YXRlLnByb2R1Y3RMaXN0LCBcImlkXCIsaW5kZXgpO1xyXG5cdFx0dGVtcFByb2R1Y3RbdmFsXVtcImlzRmF2XCJdID0gIXRoaXMuc3RhdGUucHJvZHVjdExpc3RbdmFsXVtcImlzRmF2XCJdXHJcblx0XHR0aGlzLnNldFN0YXRlKHtwcm9kdWN0TGlzdDp0ZW1wUHJvZHVjdH0pXHJcblx0fVxyXG5cclxuXHRjaGFuZ2VJbWFnZSA9IChlLGluZGV4KSA9PntcclxuXHJcblx0XHRjb25zb2xlLmxvZyhpbmRleCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY2xzXCI+XHJcblx0XHRcdDxwPkFjdGl2ZXdlYXI8L3A+XHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgICAgICAubWFpbi1jbHN7XHJcblx0XHQgICAgICBcdHdpZHRoOjEyMTVweDtcclxuXHRcdCAgICAgIFx0cGFkZGluZy10b3A6MzAwcHg7XHJcblx0XHQgICAgICBcdHBhZGRpbmctbGVmdDozMDBweDtcclxuXHJcblx0XHQgICAgICB9XHJcblxyXG4gICAgIFx0XHRgfTwvc3R5bGU+XHJcblxyXG5cdFx0XHRcdDxkaXYgPlxyXG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUucHJvZHVjdExpc3QubWFwKChhYmMsaW5kZXgpID0+KFxyXG5cdFx0XHRcdCAgICAgICBcdDxQcm9kdWN0Q29tcG9uZW50IGluZGV4PXthYmMuaW5kZXh9IGNoYW5nZUltYWdlPXt0aGlzLmNoYW5nZUltYWdlfSBjaGFuZ2VIZWFydD17dGhpcy5jaGFuZ2VIZWFydH0gaWQ9e2FiYy5pZH0gbmFtZT17YWJjLm5hbWV9IHByaWNlPXthYmMucHJpY2V9IGRpc2NvdW50ZWRQcmljZT17YWJjLmRpc2NvdW50ZWRQcmljZX0gaXNFeGNsdXNpdmU9e2FiYy5pc0V4Y2x1c2l2ZX0gaXNGYXY9e2FiYy5pc0Zhdn0gaXRlbXNMZWZ0SW5TdG9jaz17YWJjLml0ZW1zTGVmdEluU3RvY2t9IGlzUHJlT3JkZXI9e2FiYy5pc1ByZU9yZGVyfSBpbWFnZVVSTD17YWJjLmltYWdlVVJMfSBpbWFnZUhvdmVyVVJMPXthYmMuaW1hZ2VIb3ZlclVSTH0vPlxyXG5cdFx0XHRcdCAgICApKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiXX0= */\n/*@ sourceURL=C:\\Users\\ADSAdmin\\desktop\\neimanmarcus\\pages\\ProductList.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3953584768",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
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
            lineNumber: 64
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
//# sourceMappingURL=index.js.537d5fc5170b6bf5740f.hot-update.js.map