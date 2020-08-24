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
    title: "Cameras",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "Our cameras cover and survey the entire parking area, so that you will feel safe.", __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 20
    }
  }, "eee"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
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
    title: "Fences and Gates",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, "The perimeters of our locations are protected by fences and gates.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx(FeatureCard, {
    color: "ash",
    iconName: "icon-chat-45-2",
    title: "Guards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, "Our diligent guards routinely patrol the parking areas, ensuring that you and your cargo remains safe."))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvbGFuZGluZzEvRmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJTaGFwZVRvcFJpZ2h0Iiwic3R5bGVkIiwiQm94IiwiU2hhcGVCb3R0bVJpZ2h0IiwidGhlbWUiLCJjb2xvciIsInJnYmEiLCJjb2xvcnMiLCJGZWF0dXJlQ2FyZCIsImljb25OYW1lIiwidGl0bGUiLCJjaGlsZHJlbiIsInJlc3QiLCJGZWF0dXJlIiwiaW1nTDFGZWF0dXJlT3ZhbCIsImltZ0wxRmVhdHVyZUN1cnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMENBQW5CO0tBQU1GLGE7QUFNTixJQUFNRyxlQUFlLEdBQUdGLGlFQUFNLENBQUNDLG9EQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsNkVBQXJCO01BQU1DLGU7Ozs7OytCQXlCc0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxTQUNsQkMscURBQUksQ0FBQ0YsS0FBSyxDQUFDRyxNQUFOLENBQWFGLEtBQWIsQ0FBRCxFQUFzQixHQUF0QixDQURjO0FBQUEsQzs7QUFmNUIsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSwwQkFDbEJILEtBRGtCO0FBQUEsTUFDbEJBLEtBRGtCLDRCQUNWLFNBRFU7QUFBQSxNQUVsQkksUUFGa0IsU0FFbEJBLFFBRmtCO0FBQUEsTUFHbEJDLEtBSGtCLFNBR2xCQSxLQUhrQjtBQUFBLE1BSWxCQyxRQUprQixTQUlsQkEsUUFKa0I7QUFBQSxNQUtmQyxJQUxlOztBQUFBLFNBT2xCLE1BQUMsb0RBQUQ7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixNQUFFLEVBQUMsTUFBbkI7QUFBMEIs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RkYsQ0FEYztBQUFBLENBQWhCOztNQUFNRixPO0FBNEVTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWFmNWY2NmIwZWUwMjVhNGVkMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSBcInBvbGlzaGVkXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5pbXBvcnQgeyBUaXRsZSwgQnV0dG9uLCBTZWN0aW9uLCBCb3gsIFRleHQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db3JlXCI7XG5cbmltcG9ydCBpbWdMMUZlYXR1cmVPdmFsIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvcG5nL2wxLWZlYXR1cmUtb3ZhbC5wbmdcIjtcbmltcG9ydCBpbWdMMUZlYXR1cmVDdXJ2ZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3N2Zy9sMS1jdXJ2ZS1mZWF0dXJlLnN2Z1wiO1xuXG5jb25zdCBTaGFwZVRvcFJpZ2h0ID0gc3R5bGVkKEJveClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMHB4O1xuYDtcblxuY29uc3QgU2hhcGVCb3R0bVJpZ2h0ID0gc3R5bGVkKEJveClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGltZyB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBGZWF0dXJlQ2FyZCA9ICh7XG4gIGNvbG9yID0gXCJwcmltYXJ5XCIsXG4gIGljb25OYW1lLFxuICB0aXRsZSxcbiAgY2hpbGRyZW4sXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPEJveCBiZz1cImxpZ2h0XCIgcHk9XCIyNXB4XCIgcHg9XCIzMHB4XCIgYm9yZGVyUmFkaXVzPXsxMH0gbWI9ezR9IHsuLi5yZXN0fT5cbiAgICA8Qm94XG4gICAgICBzaXplPXs2OX1cbiAgICAgIGJvcmRlclJhZGl1cz1cIjUwJVwiXG4gICAgICBjb2xvcj17Y29sb3J9XG4gICAgICBmb250U2l6ZT1cIjI4cHhcIlxuICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgIGNzcz17YFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lLCBjb2xvciB9KSA9PlxuICAgICAgICAgIHJnYmEodGhlbWUuY29sb3JzW2NvbG9yXSwgMC4xKX07XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxpIGNsYXNzTmFtZT17YGljb24gJHtpY29uTmFtZX1gfT48L2k+XG4gICAgPC9Cb3g+XG4gICAgPGRpdj5cbiAgICAgIDxUZXh0XG4gICAgICAgIGNvbG9yPVwiaGVhZGluZ1wiXG4gICAgICAgIGFzPVwiaDNcIlxuICAgICAgICBmb250U2l6ZT17NH1cbiAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICBsZXR0ZXJTcGFjaW5nPXstMC43NX1cbiAgICAgICAgbXk9ezN9XG4gICAgICA+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxUZXh0IGZvbnRTaXplPXsyfSBsaW5lSGVpZ2h0PXsxLjc1fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9UZXh0PlxuICAgIDwvZGl2PlxuICA8L0JveD5cbik7XG5cbmNvbnN0IEZlYXR1cmUgPSAoKSA9PiAoXG4gIDw+XG4gICAgey8qIDwhLS0gRmVhdHVyZSBzZWN0aW9uIC0tPiAqL31cbiAgICA8U2VjdGlvbiBiZz1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICA8U2hhcGVUb3BSaWdodFxuICAgICAgICBkYXRhLWFvcz1cImZhZGUtbGVmdFwiXG4gICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiNzUwXCJcbiAgICAgICAgZGF0YS1hb3Mtb25jZT1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8aW1nIHNyYz17aW1nTDFGZWF0dXJlT3ZhbH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgIDwvU2hhcGVUb3BSaWdodD5cbiAgICAgIDxTaGFwZUJvdHRtUmlnaHQ+XG4gICAgICAgIDxpbWcgc3JjPXtpbWdMMUZlYXR1cmVDdXJ2ZX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgIDwvU2hhcGVCb3R0bVJpZ2h0PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8Q29sIGxnPVwiNlwiIGNsYXNzTmFtZT1cInBsLWxnLTUgb3JkZXItbGctMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWNvbnRlbnQgc2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICA8VGl0bGUgY29sb3I9XCJsaWdodFwiPlNlY3VyaXR5PC9UaXRsZT5cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJsaWdodFwiIG9wYWNpdHk9ezAuN30gbWI9ezR9PlxuICAgICAgICAgICAgICBBdCBhbGwgb2YgUGFyayBCaXJkJ3MgbG9jYXRpb25zLCBzZWN1cml0eSBpcyBvZiB0aGUgaGlnaGVzdCBwcmlvcml0eS4gXG4gICAgICAgICAgICAgIFdlIGVuc3VyZSB0aGF0IHlvdSBhbmQgeW91ciBjYXJnbyByZW1haW5zIHNhZmUgZHVyaW5nIHlvdXIgcGFya2luZyB3aXRoIHVzLlxuICAgICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgICAgey8qPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiPkNoZWNrIGFsbCBmZWF0dXJlczwvQnV0dG9uPiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBsZz1cIjZcIiBjbGFzc05hbWU9XCJvcmRlci1sZy0xIG10LTUgbXQtbGctMFwiPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICA8RmVhdHVyZUNhcmRcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBpY29uTmFtZT1cImljb24tbGF5b3V0LTExXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTGljZW5zZS1wbGF0ZSBDYW1lcmFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE91ciBjYW1lcmFzIHdpbGwgc2NhbiB5b3VyIGxpY2Vuc2UgcGxhdGUsIFxuICAgICAgICAgICAgICAgICAgYW5kIGlmIHlvdSBoYXZlIGJvb2tlZCBhIHBhcmtpbmcgc3BhY2UsIHlvdSB3aWxsIHRoZW4gYmUgZ3JhbnRlZCBhY2Nlc3MuXG4gICAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgaWNvbk5hbWU9XCJpY29uLXNpZGViYXItMlwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkNhbWVyYXNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE91ciBjYW1lcmFzIGNvdmVyIGFuZCBzdXJ2ZXkgdGhlIGVudGlyZSBwYXJraW5nIGFyZWEsIHNvIHRoYXQgeW91IHdpbGwgZmVlbCBzYWZlLlxuICAgICAgICAgICAgICAgICAgezxwPmVlZTwvcD59XG4gICAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBpY29uTmFtZT1cImljb24tYm9va21hcmstMi0yXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRmVuY2VzIGFuZCBHYXRlc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVGhlIHBlcmltZXRlcnMgb2Ygb3VyIGxvY2F0aW9ucyBhcmUgcHJvdGVjdGVkIGJ5IGZlbmNlcyBhbmQgZ2F0ZXMuXG4gICAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImFzaFwiXG4gICAgICAgICAgICAgICAgICBpY29uTmFtZT1cImljb24tY2hhdC00NS0yXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiR3VhcmRzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBPdXIgZGlsaWdlbnQgZ3VhcmRzIHJvdXRpbmVseSBwYXRyb2wgdGhlIHBhcmtpbmcgYXJlYXMsIFxuICAgICAgICAgICAgICAgICAgZW5zdXJpbmcgdGhhdCB5b3UgYW5kIHlvdXIgY2FyZ28gcmVtYWlucyBzYWZlLlxuICAgICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XG4iXSwic291cmNlUm9vdCI6IiJ9