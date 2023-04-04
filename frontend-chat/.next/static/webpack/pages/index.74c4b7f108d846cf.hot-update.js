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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WalletSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bip39 */ \"./node_modules/bip39/src/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto */ \"./node_modules/next/dist/compiled/crypto-browserify/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var secp256k1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! secp256k1 */ \"./node_modules/secp256k1/elliptic.js\");\n/* harmony import */ var secp256k1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(secp256k1__WEBPACK_IMPORTED_MODULE_6__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nasync function login(privKey, pubKey) {\n    console.log(pubKey.length);\n    const msg = \"HI\";\n    const hash = (0,crypto__WEBPACK_IMPORTED_MODULE_5__.createHash)(\"sha256\").update(msg).digest(\"hex\");\n    const hashBIn = Uint8Array.from(Buffer.from(hash, \"hex\"));\n    const sigObj = secp256k1__WEBPACK_IMPORTED_MODULE_6___default().ecdsaSign(hashBIn, privKey);\n    let data = {\n        \"signature\": [\n            ...sigObj.signature\n        ],\n        \"recid\": sigObj.recid,\n        \"pub_key\": [\n            ...pubKey\n        ],\n        \"message\": msg\n    };\n    const reqAuth = await fetch(\"http://localhost:8080/login\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    });\n    let res = await reqAuth.json();\n    let token = res.token;\n    return token;\n}\nfunction LandingPage(param) {\n    let { createWallet  } = param;\n    _s();\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.getCookie)(\"jwt\");\n        console.log(token);\n        if (token) {\n            router.push(\"/chat\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            border: \"1px solid gray\",\n            margin: \"200px 600px 100px\",\n            padding: \"50px\",\n            borderRadius: \"30px\",\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Let's Get Started\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"An encrypted chat server\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"100px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            padding: \"30px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    createWallet(1);\n                                },\n                                children: \"Create a new Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 26\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    createWallet(2);\n                                },\n                                children: \"Import existing Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 26\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(LandingPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = LandingPage;\nfunction NewAccount() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"whitesmoke\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Enter your Secret Phrase\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"white\",\n                            borderRadius: 10,\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            style: {\n                                padding: 7,\n                                margin: 10\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginTop: 10,\n                            color: \"gray\",\n                            fontSize: 14\n                        },\n                        children: \"Typically 12 words separated by single spaces\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginTop: 20,\n                            backgroundColor: \"white\"\n                        },\n                        children: \"Move on\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 91,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n_c1 = NewAccount;\nfunction CreateWallet() {\n    _s1();\n    const [mnemonic, setMnemonic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mnemonic = (0,bip39__WEBPACK_IMPORTED_MODULE_2__.generateMnemonic)();\n        const mnemonicArray = mnemonic.split(\" \");\n        setMnemonic(mnemonicArray);\n    }, []);\n    const fromHexString = (hexString)=>Uint8Array.from(hexString.match(/.{1,2}/g).map((byte)=>parseInt(byte, 16)));\n    async function walletCreated() {\n        const seed = (0,bip39__WEBPACK_IMPORTED_MODULE_2__.mnemonicToSeedSync)(mnemonic.join(\" \"));\n        let privKeyBytes = seed.slice(0, 32);\n        console.log(privKeyBytes);\n        let pubKeyBytes = secp256k1__WEBPACK_IMPORTED_MODULE_6___default().publicKeyCreate(privKeyBytes);\n        console.log(pubKeyBytes);\n        const mnemonicWallet = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Wallet.fromPhrase(mnemonic.join(\" \"));\n        let privKey = mnemonicWallet.privateKey.slice(0, 64);\n        let pubKey = mnemonicWallet.publicKey;\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"private_key\", Buffer.from(privKeyBytes).toString(\"hex\"));\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"public_key\", Buffer.from(pubKeyBytes).toString(\"hex\"));\n        const auth = await login(privKeyBytes, pubKeyBytes);\n        if (auth) {\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"jwt\", auth);\n            router.push(\"/chat\");\n        } else {\n            alert(\"Problem with keys Please clear cookies\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            border: \"1px solid gray\",\n            margin: \"200px 600px 100px\",\n            padding: \"50px\",\n            borderRadius: \"30px\",\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Write Down your secret phrase\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"This will be your unique idea to chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 168,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 166,\n                columnNumber: 13\n            }, this),\n            mnemonic && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"0px\",\n                    border: \"1px solid gray\",\n                    margin: \"30px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        flexWrap: \"wrap\"\n                    },\n                    children: mnemonic.map((value, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                margin: \"30px\"\n                            },\n                            children: [\n                                index + 1,\n                                \". \",\n                                value\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 174,\n                            columnNumber: 32\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                    lineNumber: 172,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 171,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: walletCreated,\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                    lineNumber: 179,\n                    columnNumber: 18\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 179,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 165,\n        columnNumber: 9\n    }, this);\n}\n_s1(CreateWallet, \"zLF85R+X98aW6Ylw84tnAepi6hw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = CreateWallet;\nfunction WalletSetup() {\n    _s2();\n    const [createWallet, setCreateWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function setCreateWalletHandler(n) {\n        setCreateWallet(n);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            console.log(createWallet),\n            createWallet === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LandingPage, {\n                createWallet: setCreateWalletHandler\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 206,\n                columnNumber: 35\n            }, this) : \"\",\n            createWallet === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CreateWallet, {}, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 207,\n                columnNumber: 35\n            }, this) : createWallet === 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NewAccount, {}, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 207,\n                columnNumber: 88\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 204,\n        columnNumber: 9\n    }, this);\n}\n_s2(WalletSetup, \"urF3R9pu4tbnTmCeMSacMKtGCeQ=\");\n_c3 = WalletSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LandingPage\");\n$RefreshReg$(_c1, \"NewAccount\");\n$RefreshReg$(_c2, \"CreateWallet\");\n$RefreshReg$(_c3, \"WalletSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3VCQUFnQ3ZCLGlCQUFpQixrQkFBRyw4REFBQ1k7Ozs7dUJBQTJCLEVBQUU7Ozs7Ozs7QUFPckgsQ0FBQztJQXRCdUJ3QztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1dhbGxldFNldHVwLmpzeD83YzhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgZ2VuZXJhdGVNbmVtb25pYywgbW5lbW9uaWNUb1NlZWRTeW5jIH0gZnJvbSBcImJpcDM5XCJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIlxuaW1wb3J0IHsgc2V0Q29va2llLCBnZXRDb29raWUgfSBmcm9tICdjb29raWVzLW5leHQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyByYW5kb21CeXRlcywgY3JlYXRlSGFzaCB9IGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCBzZWNwMjU2azEgZnJvbSBcInNlY3AyNTZrMVwiO1xuXG5hc3luYyBmdW5jdGlvbiBsb2dpbihwcml2S2V5LHB1YktleSkge1xuXG4gICAgY29uc29sZS5sb2cocHViS2V5Lmxlbmd0aClcbiAgICBjb25zdCBtc2cgPSBcIkhJXCJcbiAgICBjb25zdCBoYXNoID0gY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKG1zZykuZGlnZXN0KFwiaGV4XCIpO1xuICAgIGNvbnN0IGhhc2hCSW4gPSBVaW50OEFycmF5LmZyb20oQnVmZmVyLmZyb20oaGFzaCwgJ2hleCcpKTtcblxuICAgIGNvbnN0IHNpZ09iaiA9IHNlY3AyNTZrMS5lY2RzYVNpZ24oaGFzaEJJbiwgcHJpdktleSlcblxuICAgIGxldCBkYXRhID0geyBcInNpZ25hdHVyZVwiOiBbLi4uc2lnT2JqLnNpZ25hdHVyZV0sIFwicmVjaWRcIjogc2lnT2JqLnJlY2lkLCBcInB1Yl9rZXlcIjogWy4uLnB1YktleV0sIFwibWVzc2FnZVwiOiBtc2cgfTtcblxuXG4gICAgY29uc3QgcmVxQXV0aCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSlcblxuICAgIGxldCByZXMgPSBhd2FpdCByZXFBdXRoLmpzb24oKVxuXG4gICAgbGV0IHRva2VuID0gcmVzLnRva2VuO1xuXG4gICAgcmV0dXJuIHRva2VuXG5cblxuXG59XG5cblxuZnVuY3Rpb24gTGFuZGluZ1BhZ2UoeyBjcmVhdGVXYWxsZXQgfSkge1xuXG4gICAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG5cbiAgICAgICAgbGV0IHRva2VuID0gZ2V0Q29va2llKFwiand0XCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcbiAgICAgICAgaWYodG9rZW4pe1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvY2hhdFwiKVxuICAgICAgICB9XG5cbiAgICB9LFtdKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsIG1hcmdpbjogXCIyMDBweCA2MDBweCAxMDBweFwiLCBwYWRkaW5nOiBcIjUwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBMZXQncyBHZXQgU3RhcnRlZFxuICAgICAgICAgICAgICAgIDxkaXY+QW4gZW5jcnlwdGVkIGNoYXQgc2VydmVyPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjMwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlV2FsbGV0KDEpXG4gICAgICAgICAgICAgICAgICAgIH19PkNyZWF0ZSBhIG5ldyBBY2NvdW50PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlV2FsbGV0KDIpXG4gICAgICAgICAgICAgICAgICAgIH19PkltcG9ydCBleGlzdGluZyBBY2NvdW50PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuXG5cblxuZnVuY3Rpb24gTmV3QWNjb3VudCgpe1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwid2hpdGVzbW9rZVwifX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGhlaWdodDonMTAwdmgnfX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPiBFbnRlciB5b3VyIFNlY3JldCBQaHJhc2U8L3A+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOid3aGl0ZScsIGJvcmRlclJhZGl1czoxMCwgZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3twYWRkaW5nOjcsbWFyZ2luOjEwfX0+PC9pbnB1dD48L2Rpdj5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luVG9wOjEwLCBjb2xvcjonZ3JheScsIGZvbnRTaXplOjE0fX0+VHlwaWNhbGx5IDEyIHdvcmRzIHNlcGFyYXRlZCBieSBzaW5nbGUgc3BhY2VzPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e21hcmdpblRvcDoyMCAsIGJhY2tncm91bmRDb2xvcjond2hpdGUnfX0+TW92ZSBvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG5cbn1cblxuXG5mdW5jdGlvbiBDcmVhdGVXYWxsZXQoKSB7XG5cbiAgICBjb25zdCBbbW5lbW9uaWMsIHNldE1uZW1vbmljXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBsZXQgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cblxuXG5cblxuICAgICAgICBjb25zdCBtbmVtb25pYyA9IGdlbmVyYXRlTW5lbW9uaWMoKVxuICAgICAgICBjb25zdCBtbmVtb25pY0FycmF5ID0gbW5lbW9uaWMuc3BsaXQoXCIgXCIpO1xuICAgICAgICBzZXRNbmVtb25pYyhtbmVtb25pY0FycmF5KTtcblxuXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBmcm9tSGV4U3RyaW5nID0gKGhleFN0cmluZykgPT5cbiAgICBVaW50OEFycmF5LmZyb20oaGV4U3RyaW5nLm1hdGNoKC8uezEsMn0vZykubWFwKChieXRlKSA9PiBwYXJzZUludChieXRlLCAxNikpKTtcbiAgXG5cbiAgICBhc3luYyBmdW5jdGlvbiB3YWxsZXRDcmVhdGVkKCkge1xuXG5cbiAgICAgICAgY29uc3Qgc2VlZCA9IG1uZW1vbmljVG9TZWVkU3luYyhtbmVtb25pYy5qb2luKFwiIFwiKSk7XG4gICAgICAgIGxldCBwcml2S2V5Qnl0ZXMgPSBzZWVkLnNsaWNlKDAsMzIpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcml2S2V5Qnl0ZXMpXG4gICAgICAgIGxldCBwdWJLZXlCeXRlcyA9IHNlY3AyNTZrMS5wdWJsaWNLZXlDcmVhdGUocHJpdktleUJ5dGVzKVxuICAgICAgICBjb25zb2xlLmxvZyhwdWJLZXlCeXRlcylcblxuICAgICAgICBjb25zdCBtbmVtb25pY1dhbGxldCA9IGV0aGVycy5XYWxsZXQuZnJvbVBocmFzZShtbmVtb25pYy5qb2luKFwiIFwiKSk7XG4gICAgICAgIGxldCBwcml2S2V5ID0gbW5lbW9uaWNXYWxsZXQucHJpdmF0ZUtleS5zbGljZSgwLDY0KTtcbiAgICAgICAgbGV0IHB1YktleSA9IG1uZW1vbmljV2FsbGV0LnB1YmxpY0tleTtcblxuICAgICAgICBzZXRDb29raWUoXCJwcml2YXRlX2tleVwiLCBCdWZmZXIuZnJvbShwcml2S2V5Qnl0ZXMpLnRvU3RyaW5nKFwiaGV4XCIpKTtcbiAgICAgICAgc2V0Q29va2llKFwicHVibGljX2tleVwiLCBCdWZmZXIuZnJvbShwdWJLZXlCeXRlcykudG9TdHJpbmcoXCJoZXhcIikpXG4gIFxuXG4gICAgICAgIGNvbnN0IGF1dGggPSBhd2FpdCBsb2dpbihwcml2S2V5Qnl0ZXMscHViS2V5Qnl0ZXMpO1xuICAgICAgIFxuICAgICAgICBpZiAoYXV0aCkge1xuICAgICAgICAgICAgc2V0Q29va2llKFwiand0XCIsYXV0aClcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2NoYXRcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYWxlcnQoXCJQcm9ibGVtIHdpdGgga2V5cyBQbGVhc2UgY2xlYXIgY29va2llc1wiKVxuICAgICAgICB9XG5cblxuXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgZ3JheVwiLCBtYXJnaW46IFwiMjAwcHggNjAwcHggMTAwcHhcIiwgcGFkZGluZzogXCI1MHB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgV3JpdGUgRG93biB5b3VyIHNlY3JldCBwaHJhc2VcbiAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgd2lsbCBiZSB5b3VyIHVuaXF1ZSBpZGVhIHRvIGNoYXQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7bW5lbW9uaWMgJiYgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIiwgbWFyZ2luOiBcIjMwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHttbmVtb25pYy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjMwcHhcIiB9fSBrZXk9e2luZGV4fT57aW5kZXggKyAxfS4ge3ZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pn1cblxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIG9uQ2xpY2s9e3dhbGxldENyZWF0ZWR9PlN1Ym1pdDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcblxuXG5cbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYWxsZXRTZXR1cCgpIHtcblxuICAgIGNvbnN0IFtjcmVhdGVXYWxsZXQsIHNldENyZWF0ZVdhbGxldF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGZ1bmN0aW9uIHNldENyZWF0ZVdhbGxldEhhbmRsZXIobikge1xuXG4gICAgICAgIHNldENyZWF0ZVdhbGxldChuKVxuXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGNyZWF0ZVdhbGxldCl9XG4gICAgICAgICAgICB7Y3JlYXRlV2FsbGV0ID09PSAwID8gPExhbmRpbmdQYWdlIGNyZWF0ZVdhbGxldD17c2V0Q3JlYXRlV2FsbGV0SGFuZGxlcn0+PC9MYW5kaW5nUGFnZT4gOiBcIlwifVxuICAgICAgICAgICAge2NyZWF0ZVdhbGxldCA9PT0gMSA/IDxDcmVhdGVXYWxsZXQgPjwvQ3JlYXRlV2FsbGV0PiA6IGNyZWF0ZVdhbGxldCA9PT0gMiA/PE5ld0FjY291bnQ+PC9OZXdBY2NvdW50PiA6IFwiXCJ9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG5cblxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdlbmVyYXRlTW5lbW9uaWMiLCJtbmVtb25pY1RvU2VlZFN5bmMiLCJldGhlcnMiLCJzZXRDb29raWUiLCJnZXRDb29raWUiLCJ1c2VSb3V0ZXIiLCJyYW5kb21CeXRlcyIsImNyZWF0ZUhhc2giLCJzZWNwMjU2azEiLCJsb2dpbiIsInByaXZLZXkiLCJwdWJLZXkiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibXNnIiwiaGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsImhhc2hCSW4iLCJVaW50OEFycmF5IiwiZnJvbSIsIkJ1ZmZlciIsInNpZ09iaiIsImVjZHNhU2lnbiIsImRhdGEiLCJzaWduYXR1cmUiLCJyZWNpZCIsInJlcUF1dGgiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJ0b2tlbiIsIkxhbmRpbmdQYWdlIiwiY3JlYXRlV2FsbGV0Iiwicm91dGVyIiwicHVzaCIsImRpdiIsInN0eWxlIiwiYm9yZGVyIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJOZXdBY2NvdW50IiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInAiLCJpbnB1dCIsIm1hcmdpblRvcCIsImNvbG9yIiwiZm9udFNpemUiLCJDcmVhdGVXYWxsZXQiLCJtbmVtb25pYyIsInNldE1uZW1vbmljIiwibW5lbW9uaWNBcnJheSIsInNwbGl0IiwiZnJvbUhleFN0cmluZyIsImhleFN0cmluZyIsIm1hdGNoIiwibWFwIiwiYnl0ZSIsInBhcnNlSW50Iiwid2FsbGV0Q3JlYXRlZCIsInNlZWQiLCJqb2luIiwicHJpdktleUJ5dGVzIiwic2xpY2UiLCJwdWJLZXlCeXRlcyIsInB1YmxpY0tleUNyZWF0ZSIsIm1uZW1vbmljV2FsbGV0IiwiV2FsbGV0IiwiZnJvbVBocmFzZSIsInByaXZhdGVLZXkiLCJwdWJsaWNLZXkiLCJ0b1N0cmluZyIsImF1dGgiLCJhbGVydCIsImZsZXhXcmFwIiwidmFsdWUiLCJpbmRleCIsIldhbGxldFNldHVwIiwic2V0Q3JlYXRlV2FsbGV0Iiwic2V0Q3JlYXRlV2FsbGV0SGFuZGxlciIsIm4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/WalletSetup.jsx\n"));

/***/ })

});