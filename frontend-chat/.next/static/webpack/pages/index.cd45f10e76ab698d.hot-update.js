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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WalletSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bip39 */ \"./node_modules/bip39/src/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto */ \"./node_modules/next/dist/compiled/crypto-browserify/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var secp256k1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! secp256k1 */ \"./node_modules/secp256k1/elliptic.js\");\n/* harmony import */ var secp256k1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(secp256k1__WEBPACK_IMPORTED_MODULE_6__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nasync function login(privKey, pubKey) {\n    console.log(pubKey.length);\n    const msg = \"HI\";\n    const hash = (0,crypto__WEBPACK_IMPORTED_MODULE_5__.createHash)(\"sha256\").update(msg).digest(\"hex\");\n    const hashBIn = Uint8Array.from(Buffer.from(hash, \"hex\"));\n    const sigObj = secp256k1__WEBPACK_IMPORTED_MODULE_6___default().ecdsaSign(hashBIn, privKey);\n    let data = {\n        \"signature\": [\n            ...sigObj.signature\n        ],\n        \"recid\": sigObj.recid,\n        \"pub_key\": [\n            ...pubKey\n        ],\n        \"message\": msg\n    };\n    const reqAuth = await fetch(\"http://localhost:8080/login\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    });\n    let res = await reqAuth.json();\n    let token = res.token;\n    return token;\n}\nfunction LandingPage(param) {\n    let { createWallet  } = param;\n    _s();\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.getCookie)(\"jwt\");\n        console.log(token);\n        if (token) {\n            router.push(\"/chat\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            border: \"1px solid gray\",\n            margin: \"200px 600px 100px\",\n            padding: \"50px\",\n            borderRadius: \"30px\",\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Let's Get Started\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"An encrypted chat server\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"100px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            padding: \"30px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    createWallet(1);\n                                },\n                                children: \"Create a new Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 26\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    createWallet(2);\n                                },\n                                children: \"Import existing Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 26\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(LandingPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = LandingPage;\nfunction NewAccount() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"whitesmoke\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Enter your Secret Phrase\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"white\",\n                            borderRadius: 10,\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            marginTop: 20,\n                            justifyContent: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            style: {\n                                padding: 7,\n                                margin: 10,\n                                height: \"100%\",\n                                width: \"100%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginTop: 10,\n                            color: \"gray\",\n                            fontSize: 14\n                        },\n                        children: \"Typically 12 words separated by single spaces\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginTop: 20,\n                            backgroundColor: \"white\"\n                        },\n                        children: \"Move on\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 91,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n_c1 = NewAccount;\nfunction CreateWallet() {\n    _s1();\n    const [mnemonic, setMnemonic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mnemonic = (0,bip39__WEBPACK_IMPORTED_MODULE_2__.generateMnemonic)();\n        const mnemonicArray = mnemonic.split(\" \");\n        setMnemonic(mnemonicArray);\n    }, []);\n    const fromHexString = (hexString)=>Uint8Array.from(hexString.match(/.{1,2}/g).map((byte)=>parseInt(byte, 16)));\n    async function walletCreated() {\n        const seed = (0,bip39__WEBPACK_IMPORTED_MODULE_2__.mnemonicToSeedSync)(mnemonic.join(\" \"));\n        let privKeyBytes = seed.slice(0, 32);\n        console.log(privKeyBytes);\n        let pubKeyBytes = secp256k1__WEBPACK_IMPORTED_MODULE_6___default().publicKeyCreate(privKeyBytes);\n        console.log(pubKeyBytes);\n        const mnemonicWallet = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Wallet.fromPhrase(mnemonic.join(\" \"));\n        let privKey = mnemonicWallet.privateKey.slice(0, 64);\n        let pubKey = mnemonicWallet.publicKey;\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"private_key\", Buffer.from(privKeyBytes).toString(\"hex\"));\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"public_key\", Buffer.from(pubKeyBytes).toString(\"hex\"));\n        const auth = await login(privKeyBytes, pubKeyBytes);\n        if (auth) {\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"jwt\", auth);\n            router.push(\"/chat\");\n        } else {\n            alert(\"Problem with keys Please clear cookies\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            border: \"1px solid gray\",\n            margin: \"200px 600px 100px\",\n            padding: \"50px\",\n            borderRadius: \"30px\",\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Write Down your secret phrase\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"This will be your unique idea to chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 168,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 166,\n                columnNumber: 13\n            }, this),\n            mnemonic && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"0px\",\n                    border: \"1px solid gray\",\n                    margin: \"30px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        flexWrap: \"wrap\"\n                    },\n                    children: mnemonic.map((value, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                margin: \"30px\"\n                            },\n                            children: [\n                                index + 1,\n                                \". \",\n                                value\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 174,\n                            columnNumber: 32\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                    lineNumber: 172,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 171,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: walletCreated,\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                    lineNumber: 179,\n                    columnNumber: 18\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 179,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 165,\n        columnNumber: 9\n    }, this);\n}\n_s1(CreateWallet, \"zLF85R+X98aW6Ylw84tnAepi6hw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = CreateWallet;\nfunction WalletSetup() {\n    _s2();\n    const [createWallet, setCreateWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function setCreateWalletHandler(n) {\n        setCreateWallet(n);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            console.log(createWallet),\n            createWallet === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LandingPage, {\n                createWallet: setCreateWalletHandler\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 206,\n                columnNumber: 35\n            }, this) : \"\",\n            createWallet === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CreateWallet, {}, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 207,\n                columnNumber: 35\n            }, this) : createWallet === 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NewAccount, {}, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 207,\n                columnNumber: 88\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 204,\n        columnNumber: 9\n    }, this);\n}\n_s2(WalletSetup, \"urF3R9pu4tbnTmCeMSacMKtGCeQ=\");\n_c3 = WalletSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LandingPage\");\n$RefreshReg$(_c1, \"NewAccount\");\n$RefreshReg$(_c2, \"CreateWallet\");\n$RefreshReg$(_c3, \"WalletSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO1lBQzNGdkQsaUJBQWlCLGtCQUFJLDhEQUFDd0I7Ozs7dUJBQWdDeEIsaUJBQWlCLGtCQUFHLDhEQUFDWTs7Ozt1QkFBMkIsRUFBRTs7Ozs7OztBQU9ySCxDQUFDO0lBdEJ1QnlDO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvV2FsbGV0U2V0dXAuanN4PzdjOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBnZW5lcmF0ZU1uZW1vbmljLCBtbmVtb25pY1RvU2VlZFN5bmMgfSBmcm9tIFwiYmlwMzlcIlxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXG5pbXBvcnQgeyBzZXRDb29raWUsIGdldENvb2tpZSB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHJhbmRvbUJ5dGVzLCBjcmVhdGVIYXNoIH0gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0IHNlY3AyNTZrMSBmcm9tIFwic2VjcDI1NmsxXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKHByaXZLZXkscHViS2V5KSB7XG5cbiAgICBjb25zb2xlLmxvZyhwdWJLZXkubGVuZ3RoKVxuICAgIGNvbnN0IG1zZyA9IFwiSElcIlxuICAgIGNvbnN0IGhhc2ggPSBjcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUobXNnKS5kaWdlc3QoXCJoZXhcIik7XG4gICAgY29uc3QgaGFzaEJJbiA9IFVpbnQ4QXJyYXkuZnJvbShCdWZmZXIuZnJvbShoYXNoLCAnaGV4JykpO1xuXG4gICAgY29uc3Qgc2lnT2JqID0gc2VjcDI1NmsxLmVjZHNhU2lnbihoYXNoQkluLCBwcml2S2V5KVxuXG4gICAgbGV0IGRhdGEgPSB7IFwic2lnbmF0dXJlXCI6IFsuLi5zaWdPYmouc2lnbmF0dXJlXSwgXCJyZWNpZFwiOiBzaWdPYmoucmVjaWQsIFwicHViX2tleVwiOiBbLi4ucHViS2V5XSwgXCJtZXNzYWdlXCI6IG1zZyB9O1xuXG5cbiAgICBjb25zdCByZXFBdXRoID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW5cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9KVxuXG4gICAgbGV0IHJlcyA9IGF3YWl0IHJlcUF1dGguanNvbigpXG5cbiAgICBsZXQgdG9rZW4gPSByZXMudG9rZW47XG5cbiAgICByZXR1cm4gdG9rZW5cblxuXG5cbn1cblxuXG5mdW5jdGlvbiBMYW5kaW5nUGFnZSh7IGNyZWF0ZVdhbGxldCB9KSB7XG5cbiAgICBsZXQgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcblxuICAgICAgICBsZXQgdG9rZW4gPSBnZXRDb29raWUoXCJqd3RcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgICAgICBpZih0b2tlbil7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9jaGF0XCIpXG4gICAgICAgIH1cblxuICAgIH0sW10pXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIiwgbWFyZ2luOiBcIjIwMHB4IDYwMHB4IDEwMHB4XCIsIHBhZGRpbmc6IFwiNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExldCdzIEdldCBTdGFydGVkXG4gICAgICAgICAgICAgICAgPGRpdj5BbiBlbmNyeXB0ZWQgY2hhdCBzZXJ2ZXI8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMzBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVXYWxsZXQoMSlcbiAgICAgICAgICAgICAgICAgICAgfX0+Q3JlYXRlIGEgbmV3IEFjY291bnQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVXYWxsZXQoMilcbiAgICAgICAgICAgICAgICAgICAgfX0+SW1wb3J0IGV4aXN0aW5nIEFjY291bnQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5cblxuXG5mdW5jdGlvbiBOZXdBY2NvdW50KCl7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZXNtb2tlXCJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgaGVpZ2h0OicxMDB2aCd9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+IEVudGVyIHlvdXIgU2VjcmV0IFBocmFzZTwvcD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJywgYm9yZGVyUmFkaXVzOjEwLCBkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJyxtYXJnaW5Ub3A6MjAsIGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3twYWRkaW5nOjcsbWFyZ2luOjEwLCBoZWlnaHQ6JzEwMCUnLHdpZHRoOicxMDAlJ319PjwvaW5wdXQ+PC9kaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpblRvcDoxMCwgY29sb3I6J2dyYXknLCBmb250U2l6ZToxNH19PlR5cGljYWxseSAxMiB3b3JkcyBzZXBhcmF0ZWQgYnkgc2luZ2xlIHNwYWNlczwvcD5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3ttYXJnaW5Ub3A6MjAgLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319Pk1vdmUgb248L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuXG59XG5cblxuZnVuY3Rpb24gQ3JlYXRlV2FsbGV0KCkge1xuXG4gICAgY29uc3QgW21uZW1vbmljLCBzZXRNbmVtb25pY10gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG5cblxuXG5cbiAgICAgICAgY29uc3QgbW5lbW9uaWMgPSBnZW5lcmF0ZU1uZW1vbmljKClcbiAgICAgICAgY29uc3QgbW5lbW9uaWNBcnJheSA9IG1uZW1vbmljLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgc2V0TW5lbW9uaWMobW5lbW9uaWNBcnJheSk7XG5cblxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgZnJvbUhleFN0cmluZyA9IChoZXhTdHJpbmcpID0+XG4gICAgVWludDhBcnJheS5mcm9tKGhleFN0cmluZy5tYXRjaCgvLnsxLDJ9L2cpLm1hcCgoYnl0ZSkgPT4gcGFyc2VJbnQoYnl0ZSwgMTYpKSk7XG4gIFxuXG4gICAgYXN5bmMgZnVuY3Rpb24gd2FsbGV0Q3JlYXRlZCgpIHtcblxuXG4gICAgICAgIGNvbnN0IHNlZWQgPSBtbmVtb25pY1RvU2VlZFN5bmMobW5lbW9uaWMuam9pbihcIiBcIikpO1xuICAgICAgICBsZXQgcHJpdktleUJ5dGVzID0gc2VlZC5zbGljZSgwLDMyKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJpdktleUJ5dGVzKVxuICAgICAgICBsZXQgcHViS2V5Qnl0ZXMgPSBzZWNwMjU2azEucHVibGljS2V5Q3JlYXRlKHByaXZLZXlCeXRlcylcbiAgICAgICAgY29uc29sZS5sb2cocHViS2V5Qnl0ZXMpXG5cbiAgICAgICAgY29uc3QgbW5lbW9uaWNXYWxsZXQgPSBldGhlcnMuV2FsbGV0LmZyb21QaHJhc2UobW5lbW9uaWMuam9pbihcIiBcIikpO1xuICAgICAgICBsZXQgcHJpdktleSA9IG1uZW1vbmljV2FsbGV0LnByaXZhdGVLZXkuc2xpY2UoMCw2NCk7XG4gICAgICAgIGxldCBwdWJLZXkgPSBtbmVtb25pY1dhbGxldC5wdWJsaWNLZXk7XG5cbiAgICAgICAgc2V0Q29va2llKFwicHJpdmF0ZV9rZXlcIiwgQnVmZmVyLmZyb20ocHJpdktleUJ5dGVzKS50b1N0cmluZyhcImhleFwiKSk7XG4gICAgICAgIHNldENvb2tpZShcInB1YmxpY19rZXlcIiwgQnVmZmVyLmZyb20ocHViS2V5Qnl0ZXMpLnRvU3RyaW5nKFwiaGV4XCIpKVxuICBcblxuICAgICAgICBjb25zdCBhdXRoID0gYXdhaXQgbG9naW4ocHJpdktleUJ5dGVzLHB1YktleUJ5dGVzKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGF1dGgpIHtcbiAgICAgICAgICAgIHNldENvb2tpZShcImp3dFwiLGF1dGgpXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9jaGF0XCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJvYmxlbSB3aXRoIGtleXMgUGxlYXNlIGNsZWFyIGNvb2tpZXNcIilcbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIiwgbWFyZ2luOiBcIjIwMHB4IDYwMHB4IDEwMHB4XCIsIHBhZGRpbmc6IFwiNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFdyaXRlIERvd24geW91ciBzZWNyZXQgcGhyYXNlXG4gICAgICAgICAgICAgICAgPGRpdj5UaGlzIHdpbGwgYmUgeW91ciB1bmlxdWUgaWRlYSB0byBjaGF0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge21uZW1vbmljICYmIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsIG1hcmdpbjogXCIzMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7bW5lbW9uaWMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIzMHB4XCIgfX0ga2V5PXtpbmRleH0+e2luZGV4ICsgMX0uIHt2YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXt3YWxsZXRDcmVhdGVkfT5TdWJtaXQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG5cblxuXG59XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FsbGV0U2V0dXAoKSB7XG5cbiAgICBjb25zdCBbY3JlYXRlV2FsbGV0LCBzZXRDcmVhdGVXYWxsZXRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBmdW5jdGlvbiBzZXRDcmVhdGVXYWxsZXRIYW5kbGVyKG4pIHtcblxuICAgICAgICBzZXRDcmVhdGVXYWxsZXQobilcblxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhjcmVhdGVXYWxsZXQpfVxuICAgICAgICAgICAge2NyZWF0ZVdhbGxldCA9PT0gMCA/IDxMYW5kaW5nUGFnZSBjcmVhdGVXYWxsZXQ9e3NldENyZWF0ZVdhbGxldEhhbmRsZXJ9PjwvTGFuZGluZ1BhZ2U+IDogXCJcIn1cbiAgICAgICAgICAgIHtjcmVhdGVXYWxsZXQgPT09IDEgPyA8Q3JlYXRlV2FsbGV0ID48L0NyZWF0ZVdhbGxldD4gOiBjcmVhdGVXYWxsZXQgPT09IDIgPzxOZXdBY2NvdW50PjwvTmV3QWNjb3VudD4gOiBcIlwifVxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuXG5cbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZW5lcmF0ZU1uZW1vbmljIiwibW5lbW9uaWNUb1NlZWRTeW5jIiwiZXRoZXJzIiwic2V0Q29va2llIiwiZ2V0Q29va2llIiwidXNlUm91dGVyIiwicmFuZG9tQnl0ZXMiLCJjcmVhdGVIYXNoIiwic2VjcDI1NmsxIiwibG9naW4iLCJwcml2S2V5IiwicHViS2V5IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1zZyIsImhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJoYXNoQkluIiwiVWludDhBcnJheSIsImZyb20iLCJCdWZmZXIiLCJzaWdPYmoiLCJlY2RzYVNpZ24iLCJkYXRhIiwic2lnbmF0dXJlIiwicmVjaWQiLCJyZXFBdXRoIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwidG9rZW4iLCJMYW5kaW5nUGFnZSIsImNyZWF0ZVdhbGxldCIsInJvdXRlciIsInB1c2giLCJkaXYiLCJzdHlsZSIsImJvcmRlciIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJvbkNsaWNrIiwiTmV3QWNjb3VudCIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwIiwibWFyZ2luVG9wIiwiaW5wdXQiLCJ3aWR0aCIsImNvbG9yIiwiZm9udFNpemUiLCJDcmVhdGVXYWxsZXQiLCJtbmVtb25pYyIsInNldE1uZW1vbmljIiwibW5lbW9uaWNBcnJheSIsInNwbGl0IiwiZnJvbUhleFN0cmluZyIsImhleFN0cmluZyIsIm1hdGNoIiwibWFwIiwiYnl0ZSIsInBhcnNlSW50Iiwid2FsbGV0Q3JlYXRlZCIsInNlZWQiLCJqb2luIiwicHJpdktleUJ5dGVzIiwic2xpY2UiLCJwdWJLZXlCeXRlcyIsInB1YmxpY0tleUNyZWF0ZSIsIm1uZW1vbmljV2FsbGV0IiwiV2FsbGV0IiwiZnJvbVBocmFzZSIsInByaXZhdGVLZXkiLCJwdWJsaWNLZXkiLCJ0b1N0cmluZyIsImF1dGgiLCJhbGVydCIsImZsZXhXcmFwIiwidmFsdWUiLCJpbmRleCIsIldhbGxldFNldHVwIiwic2V0Q3JlYXRlV2FsbGV0Iiwic2V0Q3JlYXRlV2FsbGV0SGFuZGxlciIsIm4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/WalletSetup.jsx\n"));

/***/ })

});