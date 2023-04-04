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

/***/ "./pages/components/WalletSetup.jsx":
/*!******************************************!*\
  !*** ./pages/components/WalletSetup.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WalletSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bip39 */ \"./node_modules/bip39/src/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto */ \"./node_modules/next/dist/compiled/crypto-browserify/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var secp256k1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! secp256k1 */ \"./node_modules/secp256k1/elliptic.js\");\n/* harmony import */ var secp256k1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(secp256k1__WEBPACK_IMPORTED_MODULE_6__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nasync function login(privKey, pubKey) {\n    console.log(pubKey.length);\n    const msg = \"HI\";\n    const hash = (0,crypto__WEBPACK_IMPORTED_MODULE_5__.createHash)(\"sha256\").update(msg).digest(\"hex\");\n    const hashBIn = Uint8Array.from(Buffer.from(hash, \"hex\"));\n    const sigObj = secp256k1__WEBPACK_IMPORTED_MODULE_6___default().ecdsaSign(hashBIn, privKey);\n    let data = {\n        \"signature\": [\n            ...sigObj.signature\n        ],\n        \"recid\": sigObj.recid,\n        \"pub_key\": [\n            ...pubKey\n        ],\n        \"message\": msg\n    };\n    const reqAuth = await fetch(\"http://localhost:8080/login\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    });\n    let res = await reqAuth.json();\n    let token = res.token;\n    return token;\n}\nfunction LandingPage(param) {\n    let { createWallet  } = param;\n    _s();\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.getCookie)(\"jwt\");\n        console.log(token);\n        if (token) {\n            router.push(\"/chat\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            border: \"1px solid gray\",\n            margin: \"200px 600px 100px\",\n            padding: \"50px\",\n            borderRadius: \"30px\",\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Let's Get Started\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"An encrypted chat server\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"100px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            padding: \"30px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    createWallet(1);\n                                },\n                                children: \"Create a new Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 26\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    createWallet(2);\n                                },\n                                children: \"Import existing Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 26\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(LandingPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = LandingPage;\nfunction NewAccount() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"whitesmoke\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Enter your Secret Phrase\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"white\",\n                            borderRadius: 10,\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            marginTop: 20,\n                            justifyContent: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            style: {\n                                padding: 7,\n                                margin: 10,\n                                height: \"100%\",\n                                width: \"100%\",\n                                border: none\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginTop: 10,\n                            color: \"gray\",\n                            fontSize: 14\n                        },\n                        children: \"Typically 12 words separated by single spaces\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginTop: 20,\n                            backgroundColor: \"white\"\n                        },\n                        children: \"Move on\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 91,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n_c1 = NewAccount;\nfunction CreateWallet() {\n    _s1();\n    const [mnemonic, setMnemonic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mnemonic = (0,bip39__WEBPACK_IMPORTED_MODULE_2__.generateMnemonic)();\n        const mnemonicArray = mnemonic.split(\" \");\n        setMnemonic(mnemonicArray);\n    }, []);\n    const fromHexString = (hexString)=>Uint8Array.from(hexString.match(/.{1,2}/g).map((byte)=>parseInt(byte, 16)));\n    async function walletCreated() {\n        const seed = (0,bip39__WEBPACK_IMPORTED_MODULE_2__.mnemonicToSeedSync)(mnemonic.join(\" \"));\n        let privKeyBytes = seed.slice(0, 32);\n        console.log(privKeyBytes);\n        let pubKeyBytes = secp256k1__WEBPACK_IMPORTED_MODULE_6___default().publicKeyCreate(privKeyBytes);\n        console.log(pubKeyBytes);\n        const mnemonicWallet = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Wallet.fromPhrase(mnemonic.join(\" \"));\n        let privKey = mnemonicWallet.privateKey.slice(0, 64);\n        let pubKey = mnemonicWallet.publicKey;\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"private_key\", Buffer.from(privKeyBytes).toString(\"hex\"));\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"public_key\", Buffer.from(pubKeyBytes).toString(\"hex\"));\n        const auth = await login(privKeyBytes, pubKeyBytes);\n        if (auth) {\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"jwt\", auth);\n            router.push(\"/chat\");\n        } else {\n            alert(\"Problem with keys Please clear cookies\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            border: \"1px solid gray\",\n            margin: \"200px 600px 100px\",\n            padding: \"50px\",\n            borderRadius: \"30px\",\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Write Down your secret phrase\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"This will be your unique idea to chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 168,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 166,\n                columnNumber: 13\n            }, this),\n            mnemonic && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"0px\",\n                    border: \"1px solid gray\",\n                    margin: \"30px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        flexWrap: \"wrap\"\n                    },\n                    children: mnemonic.map((value, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                margin: \"30px\"\n                            },\n                            children: [\n                                index + 1,\n                                \". \",\n                                value\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 174,\n                            columnNumber: 32\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                    lineNumber: 172,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 171,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: walletCreated,\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                    lineNumber: 179,\n                    columnNumber: 18\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 179,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 165,\n        columnNumber: 9\n    }, this);\n}\n_s1(CreateWallet, \"zLF85R+X98aW6Ylw84tnAepi6hw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = CreateWallet;\nfunction WalletSetup() {\n    _s2();\n    const [createWallet, setCreateWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function setCreateWalletHandler(n) {\n        setCreateWallet(n);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            console.log(createWallet),\n            createWallet === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LandingPage, {\n                createWallet: setCreateWalletHandler\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 206,\n                columnNumber: 35\n            }, this) : \"\",\n            createWallet === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CreateWallet, {}, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 207,\n                columnNumber: 35\n            }, this) : createWallet === 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NewAccount, {}, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 207,\n                columnNumber: 88\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 204,\n        columnNumber: 9\n    }, this);\n}\n_s2(WalletSetup, \"urF3R9pu4tbnTmCeMSacMKtGCeQ=\");\n_c3 = WalletSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LandingPage\");\n$RefreshReg$(_c1, \"NewAccount\");\n$RefreshReg$(_c2, \"CreateWallet\");\n$RefreshReg$(_c3, \"WalletSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0Q7Ozs7O3VCQUF5QyxFQUFFO1lBQzNGeEQsaUJBQWlCLGtCQUFJLDhEQUFDeUI7Ozs7dUJBQWdDekIsaUJBQWlCLGtCQUFHLDhEQUFDWTs7Ozt1QkFBMkIsRUFBRTs7Ozs7OztBQU9ySCxDQUFDO0lBdEJ1QjBDO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvV2FsbGV0U2V0dXAuanN4PzdjOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBnZW5lcmF0ZU1uZW1vbmljLCBtbmVtb25pY1RvU2VlZFN5bmMgfSBmcm9tIFwiYmlwMzlcIlxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXG5pbXBvcnQgeyBzZXRDb29raWUsIGdldENvb2tpZSB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHJhbmRvbUJ5dGVzLCBjcmVhdGVIYXNoIH0gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0IHNlY3AyNTZrMSBmcm9tIFwic2VjcDI1NmsxXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKHByaXZLZXkscHViS2V5KSB7XG5cbiAgICBjb25zb2xlLmxvZyhwdWJLZXkubGVuZ3RoKVxuICAgIGNvbnN0IG1zZyA9IFwiSElcIlxuICAgIGNvbnN0IGhhc2ggPSBjcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUobXNnKS5kaWdlc3QoXCJoZXhcIik7XG4gICAgY29uc3QgaGFzaEJJbiA9IFVpbnQ4QXJyYXkuZnJvbShCdWZmZXIuZnJvbShoYXNoLCAnaGV4JykpO1xuXG4gICAgY29uc3Qgc2lnT2JqID0gc2VjcDI1NmsxLmVjZHNhU2lnbihoYXNoQkluLCBwcml2S2V5KVxuXG4gICAgbGV0IGRhdGEgPSB7IFwic2lnbmF0dXJlXCI6IFsuLi5zaWdPYmouc2lnbmF0dXJlXSwgXCJyZWNpZFwiOiBzaWdPYmoucmVjaWQsIFwicHViX2tleVwiOiBbLi4ucHViS2V5XSwgXCJtZXNzYWdlXCI6IG1zZyB9O1xuXG5cbiAgICBjb25zdCByZXFBdXRoID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW5cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9KVxuXG4gICAgbGV0IHJlcyA9IGF3YWl0IHJlcUF1dGguanNvbigpXG5cbiAgICBsZXQgdG9rZW4gPSByZXMudG9rZW47XG5cbiAgICByZXR1cm4gdG9rZW5cblxuXG5cbn1cblxuXG5mdW5jdGlvbiBMYW5kaW5nUGFnZSh7IGNyZWF0ZVdhbGxldCB9KSB7XG5cbiAgICBsZXQgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcblxuICAgICAgICBsZXQgdG9rZW4gPSBnZXRDb29raWUoXCJqd3RcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgICAgICBpZih0b2tlbil7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9jaGF0XCIpXG4gICAgICAgIH1cblxuICAgIH0sW10pXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIiwgbWFyZ2luOiBcIjIwMHB4IDYwMHB4IDEwMHB4XCIsIHBhZGRpbmc6IFwiNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExldCdzIEdldCBTdGFydGVkXG4gICAgICAgICAgICAgICAgPGRpdj5BbiBlbmNyeXB0ZWQgY2hhdCBzZXJ2ZXI8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMzBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVXYWxsZXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfX0+Q3JlYXRlIGEgbmV3IEFjY291bnQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVXYWxsZXQoMilcbiAgICAgICAgICAgICAgICAgICAgfX0+SW1wb3J0IGV4aXN0aW5nIEFjY291bnQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5cblxuXG5mdW5jdGlvbiBOZXdBY2NvdW50KCl7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZXNtb2tlXCJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgaGVpZ2h0OicxMDB2aCd9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+IEVudGVyIHlvdXIgU2VjcmV0IFBocmFzZTwvcD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJywgYm9yZGVyUmFkaXVzOjEwLCBkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJyxtYXJnaW5Ub3A6MjAsIGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3twYWRkaW5nOjcsbWFyZ2luOjEwLCBoZWlnaHQ6JzEwMCUnLHdpZHRoOicxMDAlJywgYm9yZGVyOm5vbmV9fT48L2lucHV0PjwvZGl2PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Ub3A6MTAsIGNvbG9yOidncmF5JywgZm9udFNpemU6MTR9fT5UeXBpY2FsbHkgMTIgd29yZHMgc2VwYXJhdGVkIGJ5IHNpbmdsZSBzcGFjZXM8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7bWFyZ2luVG9wOjIwICwgYmFja2dyb3VuZENvbG9yOid3aGl0ZSd9fT5Nb3ZlIG9uPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cblxufVxuXG5cbmZ1bmN0aW9uIENyZWF0ZVdhbGxldCgpIHtcblxuICAgIGNvbnN0IFttbmVtb25pYywgc2V0TW5lbW9uaWNdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuXG5cblxuXG4gICAgICAgIGNvbnN0IG1uZW1vbmljID0gZ2VuZXJhdGVNbmVtb25pYygpXG4gICAgICAgIGNvbnN0IG1uZW1vbmljQXJyYXkgPSBtbmVtb25pYy5zcGxpdChcIiBcIik7XG4gICAgICAgIHNldE1uZW1vbmljKG1uZW1vbmljQXJyYXkpO1xuXG5cbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGZyb21IZXhTdHJpbmcgPSAoaGV4U3RyaW5nKSA9PlxuICAgIFVpbnQ4QXJyYXkuZnJvbShoZXhTdHJpbmcubWF0Y2goLy57MSwyfS9nKS5tYXAoKGJ5dGUpID0+IHBhcnNlSW50KGJ5dGUsIDE2KSkpO1xuICBcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHdhbGxldENyZWF0ZWQoKSB7XG5cblxuICAgICAgICBjb25zdCBzZWVkID0gbW5lbW9uaWNUb1NlZWRTeW5jKG1uZW1vbmljLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgbGV0IHByaXZLZXlCeXRlcyA9IHNlZWQuc2xpY2UoMCwzMik7XG4gICAgICAgIGNvbnNvbGUubG9nKHByaXZLZXlCeXRlcylcbiAgICAgICAgbGV0IHB1YktleUJ5dGVzID0gc2VjcDI1NmsxLnB1YmxpY0tleUNyZWF0ZShwcml2S2V5Qnl0ZXMpXG4gICAgICAgIGNvbnNvbGUubG9nKHB1YktleUJ5dGVzKVxuXG4gICAgICAgIGNvbnN0IG1uZW1vbmljV2FsbGV0ID0gZXRoZXJzLldhbGxldC5mcm9tUGhyYXNlKG1uZW1vbmljLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgbGV0IHByaXZLZXkgPSBtbmVtb25pY1dhbGxldC5wcml2YXRlS2V5LnNsaWNlKDAsNjQpO1xuICAgICAgICBsZXQgcHViS2V5ID0gbW5lbW9uaWNXYWxsZXQucHVibGljS2V5O1xuXG4gICAgICAgIHNldENvb2tpZShcInByaXZhdGVfa2V5XCIsIEJ1ZmZlci5mcm9tKHByaXZLZXlCeXRlcykudG9TdHJpbmcoXCJoZXhcIikpO1xuICAgICAgICBzZXRDb29raWUoXCJwdWJsaWNfa2V5XCIsIEJ1ZmZlci5mcm9tKHB1YktleUJ5dGVzKS50b1N0cmluZyhcImhleFwiKSlcbiAgXG5cbiAgICAgICAgY29uc3QgYXV0aCA9IGF3YWl0IGxvZ2luKHByaXZLZXlCeXRlcyxwdWJLZXlCeXRlcyk7XG4gICAgICAgXG4gICAgICAgIGlmIChhdXRoKSB7XG4gICAgICAgICAgICBzZXRDb29raWUoXCJqd3RcIixhdXRoKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvY2hhdFwiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBhbGVydChcIlByb2JsZW0gd2l0aCBrZXlzIFBsZWFzZSBjbGVhciBjb29raWVzXCIpXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsIG1hcmdpbjogXCIyMDBweCA2MDBweCAxMDBweFwiLCBwYWRkaW5nOiBcIjUwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBXcml0ZSBEb3duIHlvdXIgc2VjcmV0IHBocmFzZVxuICAgICAgICAgICAgICAgIDxkaXY+VGhpcyB3aWxsIGJlIHlvdXIgdW5pcXVlIGlkZWEgdG8gY2hhdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHttbmVtb25pYyAmJiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgZ3JheVwiLCBtYXJnaW46IFwiMzBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge21uZW1vbmljLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMzBweFwiIH19IGtleT17aW5kZXh9PntpbmRleCArIDF9LiB7dmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+fVxuXG4gICAgICAgICAgICA8ZGl2PjxidXR0b24gb25DbGljaz17d2FsbGV0Q3JlYXRlZH0+U3VibWl0PC9idXR0b24+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxuXG5cblxufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxldFNldHVwKCkge1xuXG4gICAgY29uc3QgW2NyZWF0ZVdhbGxldCwgc2V0Q3JlYXRlV2FsbGV0XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgZnVuY3Rpb24gc2V0Q3JlYXRlV2FsbGV0SGFuZGxlcihuKSB7XG5cbiAgICAgICAgc2V0Q3JlYXRlV2FsbGV0KG4pXG5cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y29uc29sZS5sb2coY3JlYXRlV2FsbGV0KX1cbiAgICAgICAgICAgIHtjcmVhdGVXYWxsZXQgPT09IDAgPyA8TGFuZGluZ1BhZ2UgY3JlYXRlV2FsbGV0PXtzZXRDcmVhdGVXYWxsZXRIYW5kbGVyfT48L0xhbmRpbmdQYWdlPiA6IFwiXCJ9XG4gICAgICAgICAgICB7Y3JlYXRlV2FsbGV0ID09PSAxID8gPENyZWF0ZVdhbGxldCA+PC9DcmVhdGVXYWxsZXQ+IDogY3JlYXRlV2FsbGV0ID09PSAyID88TmV3QWNjb3VudD48L05ld0FjY291bnQ+IDogXCJcIn1cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cblxuXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2VuZXJhdGVNbmVtb25pYyIsIm1uZW1vbmljVG9TZWVkU3luYyIsImV0aGVycyIsInNldENvb2tpZSIsImdldENvb2tpZSIsInVzZVJvdXRlciIsInJhbmRvbUJ5dGVzIiwiY3JlYXRlSGFzaCIsInNlY3AyNTZrMSIsImxvZ2luIiwicHJpdktleSIsInB1YktleSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtc2ciLCJoYXNoIiwidXBkYXRlIiwiZGlnZXN0IiwiaGFzaEJJbiIsIlVpbnQ4QXJyYXkiLCJmcm9tIiwiQnVmZmVyIiwic2lnT2JqIiwiZWNkc2FTaWduIiwiZGF0YSIsInNpZ25hdHVyZSIsInJlY2lkIiwicmVxQXV0aCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsInRva2VuIiwiTGFuZGluZ1BhZ2UiLCJjcmVhdGVXYWxsZXQiLCJyb3V0ZXIiLCJwdXNoIiwiZGl2Iiwic3R5bGUiLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwiYnV0dG9uIiwib25DbGljayIsIk5ld0FjY291bnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicCIsIm1hcmdpblRvcCIsImlucHV0Iiwid2lkdGgiLCJub25lIiwiY29sb3IiLCJmb250U2l6ZSIsIkNyZWF0ZVdhbGxldCIsIm1uZW1vbmljIiwic2V0TW5lbW9uaWMiLCJtbmVtb25pY0FycmF5Iiwic3BsaXQiLCJmcm9tSGV4U3RyaW5nIiwiaGV4U3RyaW5nIiwibWF0Y2giLCJtYXAiLCJieXRlIiwicGFyc2VJbnQiLCJ3YWxsZXRDcmVhdGVkIiwic2VlZCIsImpvaW4iLCJwcml2S2V5Qnl0ZXMiLCJzbGljZSIsInB1YktleUJ5dGVzIiwicHVibGljS2V5Q3JlYXRlIiwibW5lbW9uaWNXYWxsZXQiLCJXYWxsZXQiLCJmcm9tUGhyYXNlIiwicHJpdmF0ZUtleSIsInB1YmxpY0tleSIsInRvU3RyaW5nIiwiYXV0aCIsImFsZXJ0IiwiZmxleFdyYXAiLCJ2YWx1ZSIsImluZGV4IiwiV2FsbGV0U2V0dXAiLCJzZXRDcmVhdGVXYWxsZXQiLCJzZXRDcmVhdGVXYWxsZXRIYW5kbGVyIiwibiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/WalletSetup.jsx\n"));

/***/ })

});