"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_use_websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use-websocket */ \"./node_modules/react-use-websocket/dist/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"./node_modules/next/dist/compiled/crypto-browserify/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var secp256k1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! secp256k1 */ \"./node_modules/secp256k1/elliptic.js\");\n/* harmony import */ var secp256k1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(secp256k1__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Chat */ \"./pages/components/Chat.js\");\n/* harmony import */ var eciesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! eciesjs */ \"./node_modules/eciesjs/dist/index.js\");\n/* harmony import */ var _components_Chats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Chats */ \"./pages/components/Chats.jsx\");\n/* harmony import */ var _components_WalletSetup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/WalletSetup */ \"./pages/components/WalletSetup.jsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Sidebar */ \"./pages/components/Sidebar.js\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Main */ \"./pages/components/Main.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"style.Home\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"Home_body\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\aaron\\\\Web Dev\\\\SafeSpace\\\\web-chat\\\\ISM\\\\frontend-chat\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chat__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\aaron\\\\Web Dev\\\\SafeSpace\\\\web-chat\\\\ISM\\\\frontend-chat\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\aaron\\\\Web Dev\\\\SafeSpace\\\\web-chat\\\\ISM\\\\frontend-chat\\\\pages\\\\index.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aaron\\\\Web Dev\\\\SafeSpace\\\\web-chat\\\\ISM\\\\frontend-chat\\\\pages\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n} // if (lastMessage.data == \"Invalid\" || lastMessage.data == \"Invalid Key\") {\n //   (async () => {\n //     // generate privKey\n //     let privKey\n //     do {\n //       privKey = randomBytes(32)\n //     } while (!secp256k1.privateKeyVerify(privKey))\n //     // get the public key in a compressed format\n //     const pubKey = secp256k1.publicKeyCreate(privKey)\n //     console.log(Buffer.from(pubKey).toString(\"hex\"))\n //     const msg = \"HI\"\n //     const hash = createHash('sha256').update(msg).digest(\"hex\");\n //     const hashBIn = Uint8Array.from(Buffer.from(hash, 'hex'));\n //     // sign the message\n //     const sigObj = secp256k1.ecdsaSign(hashBIn, privKey)\n //     // sigObj.pub_key = pubKey\n //     // sigObj.message = msg\n //     let data = { \"signature\": [...sigObj.signature], \"recid\": sigObj.recid, \"pub_key\": [...pubKey], \"message\": msg };\n //     const reqAuth = await fetch(\"http://localhost:8080/login\", {\n //       method: \"POST\",\n //       headers: {\n //         'Content-Type': \"application/json\"\n //       },\n //       body: JSON.stringify(data)\n //     })\n //     let token = await reqAuth.json();\n //     console.log(token)\n //     setJWT(token.token)\n //   })()\n // }\n // else \n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNEO0FBQ2Q7QUFDaEI7QUFDSTtBQUNpQjtBQUNmO0FBQ1k7QUFDUjtBQUNOO0FBQ0M7QUFLdkIsU0FBU2tCLE9BQU87SUFJN0IscUJBRUUsOERBQUNDO1FBQUlDLFdBQVU7a0JBSWIsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDTCwyREFBT0E7Ozs7OzhCQUNSLDhEQUFDTix3REFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWCxDQUFDLENBWUQsNEVBQTRFO0NBRzVFLG1CQUFtQjtDQUVuQiwwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxrQ0FBa0M7Q0FDbEMscURBQXFEO0NBRXJELG1EQUFtRDtDQUNuRCx3REFBd0Q7Q0FDeEQsdURBQXVEO0NBQ3ZELHVCQUF1QjtDQUN2QixtRUFBbUU7Q0FDbkUsaUVBQWlFO0NBQ2pFLDBCQUEwQjtDQUMxQiwyREFBMkQ7Q0FDM0QsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qix3SEFBd0g7Q0FHeEgsbUVBQW1FO0NBQ25FLHdCQUF3QjtDQUN4QixtQkFBbUI7Q0FDbkIsNkNBQTZDO0NBQzdDLFdBQVc7Q0FDWCxtQ0FBbUM7Q0FDbkMsU0FBUztDQUVULHdDQUF3QztDQUN4Qyx5QkFBeUI7Q0FDekIsMEJBQTBCO0NBRzFCLFNBQVM7Q0FDVCxJQUFJO0NBQ0osUUFBUTtLQXJFZ0JTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlV2ViU29ja2V0LCB7IFJlYWR5U3RhdGUgfSBmcm9tICdyZWFjdC11c2Utd2Vic29ja2V0JztcclxuaW1wb3J0IHsgcmFuZG9tQnl0ZXMsIGNyZWF0ZUhhc2ggfSBmcm9tIFwiY3J5cHRvXCI7XHJcbmltcG9ydCBzZWNwMjU2azEgZnJvbSBcInNlY3AyNTZrMVwiXHJcbmltcG9ydCBDaGF0IGZyb20gJy4vY29tcG9uZW50cy9DaGF0JztcclxuaW1wb3J0IHsgZW5jcnlwdCwgZGVjcnlwdCwgUHJpdmF0ZUtleSB9IGZyb20gJ2VjaWVzanMnXHJcbmltcG9ydCBDaGF0cyBmcm9tICcuL2NvbXBvbmVudHMvQ2hhdHMnO1xyXG5pbXBvcnQgV2FsbGV0U2V0dXAgZnJvbSAnLi9jb21wb25lbnRzL1dhbGxldFNldHVwJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvTWFpbic7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3N0eWxlLkhvbWUnPlxyXG4gICAgICB7LyogPFdhbGxldFNldHVwPjwvV2FsbGV0U2V0dXA+ICovfVxyXG4gICAgICB7LyogPENoYXRzPjwvQ2hhdHM+ICovfVxyXG4gICAgICB7LyogPGFpbi8+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZV9ib2R5Jz5cclxuICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgPENoYXQvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpZiAobGFzdE1lc3NhZ2UuZGF0YSA9PSBcIkludmFsaWRcIiB8fCBsYXN0TWVzc2FnZS5kYXRhID09IFwiSW52YWxpZCBLZXlcIikge1xyXG5cclxuXHJcbi8vICAgKGFzeW5jICgpID0+IHtcclxuXHJcbi8vICAgICAvLyBnZW5lcmF0ZSBwcml2S2V5XHJcbi8vICAgICBsZXQgcHJpdktleVxyXG4vLyAgICAgZG8ge1xyXG4vLyAgICAgICBwcml2S2V5ID0gcmFuZG9tQnl0ZXMoMzIpXHJcbi8vICAgICB9IHdoaWxlICghc2VjcDI1NmsxLnByaXZhdGVLZXlWZXJpZnkocHJpdktleSkpXHJcblxyXG4vLyAgICAgLy8gZ2V0IHRoZSBwdWJsaWMga2V5IGluIGEgY29tcHJlc3NlZCBmb3JtYXRcclxuLy8gICAgIGNvbnN0IHB1YktleSA9IHNlY3AyNTZrMS5wdWJsaWNLZXlDcmVhdGUocHJpdktleSlcclxuLy8gICAgIGNvbnNvbGUubG9nKEJ1ZmZlci5mcm9tKHB1YktleSkudG9TdHJpbmcoXCJoZXhcIikpXHJcbi8vICAgICBjb25zdCBtc2cgPSBcIkhJXCJcclxuLy8gICAgIGNvbnN0IGhhc2ggPSBjcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUobXNnKS5kaWdlc3QoXCJoZXhcIik7XHJcbi8vICAgICBjb25zdCBoYXNoQkluID0gVWludDhBcnJheS5mcm9tKEJ1ZmZlci5mcm9tKGhhc2gsICdoZXgnKSk7XHJcbi8vICAgICAvLyBzaWduIHRoZSBtZXNzYWdlXHJcbi8vICAgICBjb25zdCBzaWdPYmogPSBzZWNwMjU2azEuZWNkc2FTaWduKGhhc2hCSW4sIHByaXZLZXkpXHJcbi8vICAgICAvLyBzaWdPYmoucHViX2tleSA9IHB1YktleVxyXG4vLyAgICAgLy8gc2lnT2JqLm1lc3NhZ2UgPSBtc2dcclxuLy8gICAgIGxldCBkYXRhID0geyBcInNpZ25hdHVyZVwiOiBbLi4uc2lnT2JqLnNpZ25hdHVyZV0sIFwicmVjaWRcIjogc2lnT2JqLnJlY2lkLCBcInB1Yl9rZXlcIjogWy4uLnB1YktleV0sIFwibWVzc2FnZVwiOiBtc2cgfTtcclxuXHJcblxyXG4vLyAgICAgY29uc3QgcmVxQXV0aCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luXCIsIHtcclxuLy8gICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuLy8gICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4vLyAgICAgfSlcclxuXHJcbi8vICAgICBsZXQgdG9rZW4gPSBhd2FpdCByZXFBdXRoLmpzb24oKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRva2VuKVxyXG4vLyAgICAgc2V0SldUKHRva2VuLnRva2VuKVxyXG5cclxuXHJcbi8vICAgfSkoKVxyXG4vLyB9XHJcbi8vIGVsc2UgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVdlYlNvY2tldCIsIlJlYWR5U3RhdGUiLCJyYW5kb21CeXRlcyIsImNyZWF0ZUhhc2giLCJzZWNwMjU2azEiLCJDaGF0IiwiZW5jcnlwdCIsImRlY3J5cHQiLCJQcml2YXRlS2V5IiwiQ2hhdHMiLCJXYWxsZXRTZXR1cCIsIlNpZGViYXIiLCJNYWluIiwic3R5bGUiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});