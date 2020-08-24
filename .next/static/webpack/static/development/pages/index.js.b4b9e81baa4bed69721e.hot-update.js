webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/sections/landing1/Feature.js":
/*!******************************************!*\
  !*** ./src/sections/landing1/Feature.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Core */ "./src/components/Core/index.js");
/* harmony import */ var _assets_image_png_l1_feature_oval_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/png/l1-feature-oval.png */ "./src/assets/image/png/l1-feature-oval.png");
/* harmony import */ var _assets_image_png_l1_feature_oval_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_png_l1_feature_oval_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_svg_l1_curve_feature_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/svg/l1-curve-feature.svg */ "./src/assets/image/svg/l1-curve-feature.svg");
/* harmony import */ var _assets_image_svg_l1_curve_feature_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_svg_l1_curve_feature_svg__WEBPACK_IMPORTED_MODULE_8__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\Will\\Desktop\\Web Projects\\Omega Files\\omega-downloads\\omega-next-1.5\\omega-next\\src\\sections\\landing1\\Feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var ShapeTopRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_Core__WEBPACK_IMPORTED_MODULE_6__["Box"]).withConfig({
  displayName: "Feature__ShapeTopRight",
  componentId: "rjo1tu-0"
})(["position:absolute;top:0;right:0px;"]);
_c = ShapeTopRight;
var ShapeBottmRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_Core__WEBPACK_IMPORTED_MODULE_6__["Box"]).withConfig({
  displayName: "Feature__ShapeBottmRight",
  componentId: "rjo1tu-1"
})(["position:absolute;bottom:-10px;left:0;width:100%;img{min-width:100%;}"]);
_c2 = ShapeBottmRight;

var _StyledBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_Core__WEBPACK_IMPORTED_MODULE_6__["Box"]).withConfig({
  displayName: "Feature___StyledBox",
  componentId: "rjo1tu-2"
})(["background-color:", ";"], function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return Object(polished__WEBPACK_IMPORTED_MODULE_4__["rgba"])(theme.colors[color], 0.1);
});

var FeatureCard = function FeatureCard(_ref2) {
  var _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? "primary" : _ref2$color,
      iconName = _ref2.iconName,
      title = _ref2.title,
      children = _ref2.children,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["color", "iconName", "title", "children"]);

  return __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_6__["Box"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    bg: "light",
    py: "25px",
    px: "30px",
    borderRadius: 10,
    mb: 4
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }), __jsx(_StyledBox, {
    size: 69,
    borderRadius: "50%",
    color: color,
    fontSize: "28px",
    className: "d-flex justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("i", {
    className: "icon ".concat(iconName),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    color: "heading",
    as: "h3",
    fontSize: 4,
    fontWeight: 500,
    letterSpacing: -0.75,
    my: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, title), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    fontSize: 2,
    lineHeight: 1.75,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, children)));
};

_c3 = FeatureCard;

var Feature = function Feature() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    bg: "secondary",
    className: "position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(ShapeTopRight, {
    "data-aos": "fade-left",
    "data-aos-duration": "750",
    "data-aos-once": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _assets_image_png_l1_feature_oval_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    className: "img-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  })), __jsx(ShapeBottmRight, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _assets_image_svg_l1_curve_feature_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "",
    className: "img-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "6",
    className: "pl-lg-5 order-lg-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "feature-content section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_6__["Title"], {
    color: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "Security"), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    color: "light",
    opacity: 0.7,
    mb: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "At all of Park Bird's locations, security is of the highest priority. We ensure that you and your cargo remains safe during your parking with us."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "6",
    className: "order-lg-1 mt-5 mt-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx(FeatureCard, {
    color: "primary",
    iconName: "icon-layout-11",
    title: "License-plate Camera",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, "Our cameras will scan your license plate, and if you have booked a parking space, you will then be granted access.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx(FeatureCard, {
    color: "warning",
    iconName: "icon-sidebar-2",
    title: "Fully Responsive",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "With lots of unique blocks, you can easily build a page without coding.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx(FeatureCard, {
    color: "secondary",
    iconName: "icon-bookmark-2-2",
    title: "Well Documented",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, "With lots of unique blocks, you can easily build a page without coding.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx(FeatureCard, {
    color: "ash",
    iconName: "icon-chat-45-2",
    title: "Great Support",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "With lots of unique blocks, you can easily build a page without coding."))))))));
};

_c4 = Feature;
/* harmony default export */ __webpack_exports__["default"] = (Feature);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ShapeTopRight");
$RefreshReg$(_c2, "ShapeBottmRight");
$RefreshReg$(_c3, "FeatureCard");
$RefreshReg$(_c4, "Feature");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvbGFuZGluZzEvRmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJTaGFwZVRvcFJpZ2h0Iiwic3R5bGVkIiwiQm94IiwiU2hhcGVCb3R0bVJpZ2h0IiwidGhlbWUiLCJjb2xvciIsInJnYmEiLCJjb2xvcnMiLCJGZWF0dXJlQ2FyZCIsImljb25OYW1lIiwidGl0bGUiLCJjaGlsZHJlbiIsInJlc3QiLCJGZWF0dXJlIiwiaW1nTDFGZWF0dXJlT3ZhbCIsImltZ0wxRmVhdHVyZUN1cnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMENBQW5CO0tBQU1GLGE7QUFNTixJQUFNRyxlQUFlLEdBQUdGLGlFQUFNLENBQUNDLG9EQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsNkVBQXJCO01BQU1DLGU7Ozs7OytCQXlCc0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxTQUNsQkMscURBQUksQ0FBQ0YsS0FBSyxDQUFDRyxNQUFOLENBQWFGLEtBQWIsQ0FBRCxFQUFzQixHQUF0QixDQURjO0FBQUEsQzs7QUFmNUIsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSwwQkFDbEJILEtBRGtCO0FBQUEsTUFDbEJBLEtBRGtCLDRCQUNWLFNBRFU7QUFBQSxNQUVsQkksUUFGa0IsU0FFbEJBLFFBRmtCO0FBQUEsTUFHbEJDLEtBSGtCLFNBR2xCQSxLQUhrQjtBQUFBLE1BSWxCQyxRQUprQixTQUlsQkEsUUFKa0I7QUFBQSxNQUtmQyxJQUxlOztBQUFBLFNBT2xCLE1BQUMsb0RBQUQ7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixNQUFFLEVBQUMsTUFBbkI7QUFBMEIs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aWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmI0YjllODFiYWE0YmVkNjk3MjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gXCJwb2xpc2hlZFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuaW1wb3J0IHsgVGl0bGUsIEJ1dHRvbiwgU2VjdGlvbiwgQm94LCBUZXh0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29yZVwiO1xuXG5pbXBvcnQgaW1nTDFGZWF0dXJlT3ZhbCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3BuZy9sMS1mZWF0dXJlLW92YWwucG5nXCI7XG5pbXBvcnQgaW1nTDFGZWF0dXJlQ3VydmUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9zdmcvbDEtY3VydmUtZmVhdHVyZS5zdmdcIjtcblxuY29uc3QgU2hhcGVUb3BSaWdodCA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDBweDtcbmA7XG5cbmNvbnN0IFNoYXBlQm90dG1SaWdodCA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBpbWcge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgRmVhdHVyZUNhcmQgPSAoe1xuICBjb2xvciA9IFwicHJpbWFyeVwiLFxuICBpY29uTmFtZSxcbiAgdGl0bGUsXG4gIGNoaWxkcmVuLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxCb3ggYmc9XCJsaWdodFwiIHB5PVwiMjVweFwiIHB4PVwiMzBweFwiIGJvcmRlclJhZGl1cz17MTB9IG1iPXs0fSB7Li4ucmVzdH0+XG4gICAgPEJveFxuICAgICAgc2l6ZT17Njl9XG4gICAgICBib3JkZXJSYWRpdXM9XCI1MCVcIlxuICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgZm9udFNpemU9XCIyOHB4XCJcbiAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICBjc3M9e2BcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSwgY29sb3IgfSkgPT5cbiAgICAgICAgICByZ2JhKHRoZW1lLmNvbG9yc1tjb2xvcl0sIDAuMSl9O1xuICAgICAgYH1cbiAgICA+XG4gICAgICA8aSBjbGFzc05hbWU9e2BpY29uICR7aWNvbk5hbWV9YH0+PC9pPlxuICAgIDwvQm94PlxuICAgIDxkaXY+XG4gICAgICA8VGV4dFxuICAgICAgICBjb2xvcj1cImhlYWRpbmdcIlxuICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgZm9udFNpemU9ezR9XG4gICAgICAgIGZvbnRXZWlnaHQ9ezUwMH1cbiAgICAgICAgbGV0dGVyU3BhY2luZz17LTAuNzV9XG4gICAgICAgIG15PXszfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1RleHQ+XG4gICAgICA8VGV4dCBmb250U2l6ZT17Mn0gbGluZUhlaWdodD17MS43NX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGV4dD5cbiAgICA8L2Rpdj5cbiAgPC9Cb3g+XG4pO1xuXG5jb25zdCBGZWF0dXJlID0gKCkgPT4gKFxuICA8PlxuICAgIHsvKiA8IS0tIEZlYXR1cmUgc2VjdGlvbiAtLT4gKi99XG4gICAgPFNlY3Rpb24gYmc9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgPFNoYXBlVG9wUmlnaHRcbiAgICAgICAgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIlxuICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjc1MFwiXG4gICAgICAgIGRhdGEtYW9zLW9uY2U9XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9e2ltZ0wxRmVhdHVyZU92YWx9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICA8L1NoYXBlVG9wUmlnaHQ+XG4gICAgICA8U2hhcGVCb3R0bVJpZ2h0PlxuICAgICAgICA8aW1nIHNyYz17aW1nTDFGZWF0dXJlQ3VydmV9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICA8L1NoYXBlQm90dG1SaWdodD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPENvbCBsZz1cIjZcIiBjbGFzc05hbWU9XCJwbC1sZy01IG9yZGVyLWxnLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS1jb250ZW50IHNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgPFRpdGxlIGNvbG9yPVwibGlnaHRcIj5TZWN1cml0eTwvVGl0bGU+XG4gICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwibGlnaHRcIiBvcGFjaXR5PXswLjd9IG1iPXs0fT5cbiAgICAgICAgICAgICAgQXQgYWxsIG9mIFBhcmsgQmlyZCdzIGxvY2F0aW9ucywgc2VjdXJpdHkgaXMgb2YgdGhlIGhpZ2hlc3QgcHJpb3JpdHkuIFxuICAgICAgICAgICAgICBXZSBlbnN1cmUgdGhhdCB5b3UgYW5kIHlvdXIgY2FyZ28gcmVtYWlucyBzYWZlIGR1cmluZyB5b3VyIHBhcmtpbmcgd2l0aCB1cy5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICAgIHsvKjxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIj5DaGVjayBhbGwgZmVhdHVyZXM8L0J1dHRvbj4qL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbGc9XCI2XCIgY2xhc3NOYW1lPVwib3JkZXItbGctMSBtdC01IG10LWxnLTBcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9XCJpY29uLWxheW91dC0xMVwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkxpY2Vuc2UtcGxhdGUgQ2FtZXJhXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBPdXIgY2FtZXJhcyB3aWxsIHNjYW4geW91ciBsaWNlbnNlIHBsYXRlLCBcbiAgICAgICAgICAgICAgICAgIGFuZCBpZiB5b3UgaGF2ZSBib29rZWQgYSBwYXJraW5nIHNwYWNlLCB5b3Ugd2lsbCB0aGVuIGJlIGdyYW50ZWQgYWNjZXNzLlxuICAgICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgIGljb25OYW1lPVwiaWNvbi1zaWRlYmFyLTJcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGdWxseSBSZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBXaXRoIGxvdHMgb2YgdW5pcXVlIGJsb2NrcywgeW91IGNhbiBlYXNpbHkgYnVpbGQgYSBwYWdlXG4gICAgICAgICAgICAgICAgICB3aXRob3V0IGNvZGluZy5cbiAgICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICA8RmVhdHVyZUNhcmRcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGljb25OYW1lPVwiaWNvbi1ib29rbWFyay0yLTJcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXZWxsIERvY3VtZW50ZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFdpdGggbG90cyBvZiB1bmlxdWUgYmxvY2tzLCB5b3UgY2FuIGVhc2lseSBidWlsZCBhIHBhZ2VcbiAgICAgICAgICAgICAgICAgIHdpdGhvdXQgY29kaW5nLlxuICAgICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJhc2hcIlxuICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9XCJpY29uLWNoYXQtNDUtMlwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkdyZWF0IFN1cHBvcnRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFdpdGggbG90cyBvZiB1bmlxdWUgYmxvY2tzLCB5b3UgY2FuIGVhc2lseSBidWlsZCBhIHBhZ2VcbiAgICAgICAgICAgICAgICAgIHdpdGhvdXQgY29kaW5nLlxuICAgICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XG4iXSwic291cmNlUm9vdCI6IiJ9