webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/minsungkim/react-nodebird/prepare/front/components/FollowList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar FollowList = function FollowList(_ref) {\n  var header = _ref.header,\n      data = _ref.data;\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    style: {\n      marginBottom: 20\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: \"small\",\n    header: __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 21\n      }\n    }, header),\n    loadMore: __jsx(\"div\", {\n      style: {\n        textAlign: 'center',\n        margin: '10px 0'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 23\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 77\n      }\n    }, \"\\uB354 \\uBCF4\\uAE30\")),\n    bordered: true,\n    dataSource: data // 더미데이터 배열들을 받아오고 반복문을 통해서 하단의 items에 들어간다.\n    ,\n    renderItem: function renderItem(item) {\n      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Item, {\n        style: {\n          marginTop: 20\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }\n      }, __jsx(Card, {\n        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"StopOutlined\"], {\n          key: \"stop\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 33\n          }\n        })],\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 17\n        }\n      }, __jsx(Card.Meta, {\n        description: item.nickname,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 17\n        }\n      })));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  });\n};\n\n_c = FollowList;\nFollowList.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsIm1kIiwidGV4dEFsaWduIiwibWFyZ2luIiwiaXRlbSIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXNCO0FBQUEsTUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNyQyxTQUNRLE1BQUMseUNBQUQ7QUFDQSxTQUFLLEVBQUU7QUFBRUMsa0JBQVksRUFBRTtBQUFoQixLQURQO0FBRUEsUUFBSSxFQUFFO0FBQUVDLFlBQU0sRUFBRSxDQUFWO0FBQWFDLFFBQUUsRUFBRSxDQUFqQjtBQUFvQkMsUUFBRSxFQUFFO0FBQXhCLEtBRk47QUFHQSxRQUFJLEVBQUMsT0FITDtBQUlBLFVBQU0sRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1MLE1BQU4sQ0FKUjtBQUtBLFlBQVEsRUFBRTtBQUFLLFdBQUssRUFBRTtBQUFFTSxpQkFBUyxFQUFFLFFBQWI7QUFBdUJDLGNBQU0sRUFBRTtBQUEvQixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0QsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUF0RCxDQUxWO0FBTUEsWUFBUSxNQU5SO0FBT0EsY0FBVSxFQUFFTixJQVBaLENBUUE7QUFSQTtBQVNBLGNBQVUsRUFBRSxvQkFBQ08sSUFBRDtBQUFBLGFBQ1osTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLElBQUQ7QUFBTSxlQUFPLEVBQUUsQ0FBQyxNQUFDLDhEQUFEO0FBQWMsYUFBRyxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBRCxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLElBQUQsQ0FBTSxJQUFOO0FBQVcsbUJBQVcsRUFBRUQsSUFBSSxDQUFDRSxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREEsQ0FESixDQURZO0FBQUEsS0FUWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFI7QUFtQkgsQ0FwQkQ7O0tBQU1YLFU7QUFzQk5BLFVBQVUsQ0FBQ1ksU0FBWCxHQUF1QjtBQUNuQlgsUUFBTSxFQUFFWSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUROO0FBRW5CYixNQUFJLEVBQUVXLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkgsQ0FBdkI7QUFLZWYseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGlzdCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU3RvcE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuXG5jb25zdCBGb2xsb3dMaXN0ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cbiAgICAgICAgICAgIGdyaWQ9e3sgZ3V0dGVyOiA0LCB4czogMiwgbWQ6IDMgfX1cbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XG4gICAgICAgICAgICBsb2FkTW9yZT17PGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnfX0+PEJ1dHRvbj7rjZQg67O06riwPC9CdXR0b24+PC9kaXY+fVxuICAgICAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XG4gICAgICAgICAgICAvLyDrjZTrr7jrjbDsnbTthLAg67Cw7Je065Ok7J2EIOuwm+yVhOyYpOqzoCDrsJjrs7XrrLjsnYQg7Ya17ZW07IScIO2VmOuLqOydmCBpdGVtc+yXkCDrk6TslrTqsITri6QuXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiAvPl19PlxuICAgICAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgIClcbn07XG5cbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

})