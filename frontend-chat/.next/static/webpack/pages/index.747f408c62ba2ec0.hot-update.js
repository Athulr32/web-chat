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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WalletSetup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bip39 */ \"./node_modules/bip39/src/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto */ \"./node_modules/next/dist/compiled/crypto-browserify/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var secp256k1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! secp256k1 */ \"./node_modules/secp256k1/elliptic.js\");\n/* harmony import */ var secp256k1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(secp256k1__WEBPACK_IMPORTED_MODULE_6__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nasync function login(privKey, pubKey) {\n    console.log(pubKey.length);\n    const msg = \"HI\";\n    const hash = (0,crypto__WEBPACK_IMPORTED_MODULE_5__.createHash)(\"sha256\").update(msg).digest(\"hex\");\n    const hashBIn = Uint8Array.from(Buffer.from(hash, \"hex\"));\n    const sigObj = secp256k1__WEBPACK_IMPORTED_MODULE_6___default().ecdsaSign(hashBIn, privKey);\n    let data = {\n        \"signature\": [\n            ...sigObj.signature\n        ],\n        \"recid\": sigObj.recid,\n        \"pub_key\": [\n            ...pubKey\n        ],\n        \"message\": msg\n    };\n    const reqAuth = await fetch(\"http://localhost:8080/login\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    });\n    let res = await reqAuth.json();\n    let token = res.token;\n    return token;\n}\nfunction LandingPage(param) {\n    let { createWallet  } = param;\n    _s();\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.getCookie)(\"jwt\");\n        console.log(token);\n        if (token) {\n            router.push(\"/chat\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            border: \"1px solid gray\",\n            margin: \"200px 600px 100px\",\n            padding: \"50px\",\n            borderRadius: \"30px\",\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Let's Get Started\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"An encrypted chat server\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"100px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            padding: \"30px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    createWallet(1);\n                                },\n                                children: \"Create a new Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 26\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    createWallet(2);\n                                },\n                                children: \"Import existing Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 26\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(LandingPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = LandingPage;\nfunction NewAccount() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Enter your Secret Phrase\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        style: {\n                            marginTop: 30\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginTop: 10\n                        },\n                        children: \"Typically 12 words separated by single spaces\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginTop: 20\n                        },\n                        children: \"Move on\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 91,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n_c1 = NewAccount;\nfunction CreateWallet() {\n    _s1();\n    const [mnemonic, setMnemonic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const mnemonic = (0,bip39__WEBPACK_IMPORTED_MODULE_2__.generateMnemonic)();\n        const mnemonicArray = mnemonic.split(\" \");\n        setMnemonic(mnemonicArray);\n    }, []);\n    const fromHexString = (hexString)=>Uint8Array.from(hexString.match(/.{1,2}/g).map((byte)=>parseInt(byte, 16)));\n    async function walletCreated() {\n        const seed = (0,bip39__WEBPACK_IMPORTED_MODULE_2__.mnemonicToSeedSync)(mnemonic.join(\" \"));\n        let privKeyBytes = seed.slice(0, 32);\n        console.log(privKeyBytes);\n        let pubKeyBytes = secp256k1__WEBPACK_IMPORTED_MODULE_6___default().publicKeyCreate(privKeyBytes);\n        console.log(pubKeyBytes);\n        const mnemonicWallet = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Wallet.fromPhrase(mnemonic.join(\" \"));\n        let privKey = mnemonicWallet.privateKey.slice(0, 64);\n        let pubKey = mnemonicWallet.publicKey;\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"private_key\", Buffer.from(privKeyBytes).toString(\"hex\"));\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"public_key\", Buffer.from(pubKeyBytes).toString(\"hex\"));\n        const auth = await login(privKeyBytes, pubKeyBytes);\n        if (auth) {\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"jwt\", auth);\n            router.push(\"/chat\");\n        } else {\n            alert(\"Problem with keys Please clear cookies\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            border: \"1px solid gray\",\n            margin: \"200px 600px 100px\",\n            padding: \"50px\",\n            borderRadius: \"30px\",\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Write Down your secret phrase\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"This will be your unique idea to chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                        lineNumber: 167,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 165,\n                columnNumber: 13\n            }, this),\n            mnemonic && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"0px\",\n                    border: \"1px solid gray\",\n                    margin: \"30px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        flexWrap: \"wrap\"\n                    },\n                    children: mnemonic.map((value, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                margin: \"30px\"\n                            },\n                            children: [\n                                index + 1,\n                                \". \",\n                                value\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                            lineNumber: 173,\n                            columnNumber: 32\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                    lineNumber: 171,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 170,\n                columnNumber: 26\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: walletCreated,\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                    lineNumber: 178,\n                    columnNumber: 18\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 178,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 164,\n        columnNumber: 9\n    }, this);\n}\n_s1(CreateWallet, \"zLF85R+X98aW6Ylw84tnAepi6hw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = CreateWallet;\nfunction WalletSetup() {\n    _s2();\n    const [createWallet, setCreateWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function setCreateWalletHandler(n) {\n        setCreateWallet(n);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            console.log(createWallet),\n            createWallet === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LandingPage, {\n                createWallet: setCreateWalletHandler\n            }, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 205,\n                columnNumber: 35\n            }, this) : \"\",\n            createWallet === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CreateWallet, {}, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 206,\n                columnNumber: 35\n            }, this) : createWallet === 2 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NewAccount, {}, void 0, false, {\n                fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n                lineNumber: 206,\n                columnNumber: 88\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nakamoto/web-chat/ISM/frontend-chat/pages/components/WalletSetup.jsx\",\n        lineNumber: 203,\n        columnNumber: 9\n    }, this);\n}\n_s2(WalletSetup, \"urF3R9pu4tbnTmCeMSacMKtGCeQ=\");\n_c3 = WalletSetup;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LandingPage\");\n$RefreshReg$(_c1, \"NewAccount\");\n$RefreshReg$(_c2, \"CreateWallet\");\n$RefreshReg$(_c3, \"WalletSetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRQyxjQUFjO1lBQVFDLFdBQVc7UUFBUzs7MEJBQzVILDhEQUFDTjs7b0JBQUk7a0NBRUQsOERBQUNBO2tDQUFJOzs7Ozs7Ozs7Ozs7WUFHUmtCLDBCQUFZLDhEQUFDbEI7Z0JBQUlDLE9BQU87b0JBQUVHLFNBQVM7b0JBQU9GLFFBQVE7b0JBQWtCQyxRQUFRO2dCQUFPOzBCQUNoRiw0RUFBQ0g7b0JBQUlDLE9BQU87d0JBQUVTLFNBQVM7d0JBQVFpQyxVQUFVO29CQUFPOzhCQUMzQ3pCLFNBQVNPLEdBQUcsQ0FBQyxDQUFDbUIsT0FBT0MsUUFBVTt3QkFDNUIscUJBQU8sOERBQUM3Qzs0QkFBSUMsT0FBTztnQ0FBRUUsUUFBUTs0QkFBTzs7Z0NBQWdCMEMsUUFBUTtnQ0FBRTtnQ0FBR0Q7OzJCQUFyQkM7Ozs7O29CQUNoRDs7Ozs7Ozs7Ozs7MEJBSVIsOERBQUM3QzswQkFBSSw0RUFBQ087b0JBQU9DLFNBQVNvQjs4QkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakQ7SUE3RVNYOztRQUlRdEQsa0RBQVNBOzs7TUFKakJzRDtBQW1GTSxTQUFTNkIsY0FBYzs7SUFFbEMsTUFBTSxDQUFDakQsY0FBY2tELGdCQUFnQixHQUFHMUYsK0NBQVFBLENBQUM7SUFFakQsU0FBUzJGLHVCQUF1QkMsQ0FBQyxFQUFFO1FBRS9CRixnQkFBZ0JFO0lBR3BCO0lBRUEscUJBQ0ksOERBQUNqRDs7WUFDSTlCLFFBQVFDLEdBQUcsQ0FBQzBCO1lBQ1pBLGlCQUFpQixrQkFBSSw4REFBQ0Q7Z0JBQVlDLGNBQWNtRDs7Ozs7dUJBQXlDLEVBQUU7WUFDM0ZuRCxpQkFBaUIsa0JBQUksOERBQUNvQjs7Ozt1QkFBZ0NwQixpQkFBaUIsa0JBQUcsOERBQUNZOzs7O3VCQUEyQixFQUFFOzs7Ozs7O0FBT3JILENBQUM7SUF0QnVCcUM7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9XYWxsZXRTZXR1cC5qc3g/N2M4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGdlbmVyYXRlTW5lbW9uaWMsIG1uZW1vbmljVG9TZWVkU3luYyB9IGZyb20gXCJiaXAzOVwiXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcbmltcG9ydCB7IHNldENvb2tpZSwgZ2V0Q29va2llIH0gZnJvbSAnY29va2llcy1uZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgcmFuZG9tQnl0ZXMsIGNyZWF0ZUhhc2ggfSBmcm9tIFwiY3J5cHRvXCI7XG5pbXBvcnQgc2VjcDI1NmsxIGZyb20gXCJzZWNwMjU2azFcIjtcblxuYXN5bmMgZnVuY3Rpb24gbG9naW4ocHJpdktleSxwdWJLZXkpIHtcblxuICAgIGNvbnNvbGUubG9nKHB1YktleS5sZW5ndGgpXG4gICAgY29uc3QgbXNnID0gXCJISVwiXG4gICAgY29uc3QgaGFzaCA9IGNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShtc2cpLmRpZ2VzdChcImhleFwiKTtcbiAgICBjb25zdCBoYXNoQkluID0gVWludDhBcnJheS5mcm9tKEJ1ZmZlci5mcm9tKGhhc2gsICdoZXgnKSk7XG5cbiAgICBjb25zdCBzaWdPYmogPSBzZWNwMjU2azEuZWNkc2FTaWduKGhhc2hCSW4sIHByaXZLZXkpXG5cbiAgICBsZXQgZGF0YSA9IHsgXCJzaWduYXR1cmVcIjogWy4uLnNpZ09iai5zaWduYXR1cmVdLCBcInJlY2lkXCI6IHNpZ09iai5yZWNpZCwgXCJwdWJfa2V5XCI6IFsuLi5wdWJLZXldLCBcIm1lc3NhZ2VcIjogbXNnIH07XG5cblxuICAgIGNvbnN0IHJlcUF1dGggPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pXG5cbiAgICBsZXQgcmVzID0gYXdhaXQgcmVxQXV0aC5qc29uKClcblxuICAgIGxldCB0b2tlbiA9IHJlcy50b2tlbjtcblxuICAgIHJldHVybiB0b2tlblxuXG5cblxufVxuXG5cbmZ1bmN0aW9uIExhbmRpbmdQYWdlKHsgY3JlYXRlV2FsbGV0IH0pIHtcblxuICAgIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuXG4gICAgICAgIGxldCB0b2tlbiA9IGdldENvb2tpZShcImp3dFwiKVxuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pXG4gICAgICAgIGlmKHRva2VuKXtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2NoYXRcIilcbiAgICAgICAgfVxuXG4gICAgfSxbXSlcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgZ3JheVwiLCBtYXJnaW46IFwiMjAwcHggNjAwcHggMTAwcHhcIiwgcGFkZGluZzogXCI1MHB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgTGV0J3MgR2V0IFN0YXJ0ZWRcbiAgICAgICAgICAgICAgICA8ZGl2PkFuIGVuY3J5cHRlZCBjaGF0IHNlcnZlcjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMDBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIzMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVdhbGxldCgxKVxuICAgICAgICAgICAgICAgICAgICB9fT5DcmVhdGUgYSBuZXcgQWNjb3VudDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVdhbGxldCgyKVxuICAgICAgICAgICAgICAgICAgICB9fT5JbXBvcnQgZXhpc3RpbmcgQWNjb3VudDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cblxuXG5cbmZ1bmN0aW9uIE5ld0FjY291bnQoKXtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgaGVpZ2h0OicxMDB2aCd9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+IEVudGVyIHlvdXIgU2VjcmV0IFBocmFzZTwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e21hcmdpblRvcDozMH19PjwvaW5wdXQ+XG4gICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpblRvcDoxMH19PlR5cGljYWxseSAxMiB3b3JkcyBzZXBhcmF0ZWQgYnkgc2luZ2xlIHNwYWNlczwvcD5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3ttYXJnaW5Ub3A6MjB9fT5Nb3ZlIG9uPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cblxufVxuXG5cbmZ1bmN0aW9uIENyZWF0ZVdhbGxldCgpIHtcblxuICAgIGNvbnN0IFttbmVtb25pYywgc2V0TW5lbW9uaWNdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuXG5cblxuXG4gICAgICAgIGNvbnN0IG1uZW1vbmljID0gZ2VuZXJhdGVNbmVtb25pYygpXG4gICAgICAgIGNvbnN0IG1uZW1vbmljQXJyYXkgPSBtbmVtb25pYy5zcGxpdChcIiBcIik7XG4gICAgICAgIHNldE1uZW1vbmljKG1uZW1vbmljQXJyYXkpO1xuXG5cbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGZyb21IZXhTdHJpbmcgPSAoaGV4U3RyaW5nKSA9PlxuICAgIFVpbnQ4QXJyYXkuZnJvbShoZXhTdHJpbmcubWF0Y2goLy57MSwyfS9nKS5tYXAoKGJ5dGUpID0+IHBhcnNlSW50KGJ5dGUsIDE2KSkpO1xuICBcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHdhbGxldENyZWF0ZWQoKSB7XG5cblxuICAgICAgICBjb25zdCBzZWVkID0gbW5lbW9uaWNUb1NlZWRTeW5jKG1uZW1vbmljLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgbGV0IHByaXZLZXlCeXRlcyA9IHNlZWQuc2xpY2UoMCwzMik7XG4gICAgICAgIGNvbnNvbGUubG9nKHByaXZLZXlCeXRlcylcbiAgICAgICAgbGV0IHB1YktleUJ5dGVzID0gc2VjcDI1NmsxLnB1YmxpY0tleUNyZWF0ZShwcml2S2V5Qnl0ZXMpXG4gICAgICAgIGNvbnNvbGUubG9nKHB1YktleUJ5dGVzKVxuXG4gICAgICAgIGNvbnN0IG1uZW1vbmljV2FsbGV0ID0gZXRoZXJzLldhbGxldC5mcm9tUGhyYXNlKG1uZW1vbmljLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgbGV0IHByaXZLZXkgPSBtbmVtb25pY1dhbGxldC5wcml2YXRlS2V5LnNsaWNlKDAsNjQpO1xuICAgICAgICBsZXQgcHViS2V5ID0gbW5lbW9uaWNXYWxsZXQucHVibGljS2V5O1xuXG4gICAgICAgIHNldENvb2tpZShcInByaXZhdGVfa2V5XCIsIEJ1ZmZlci5mcm9tKHByaXZLZXlCeXRlcykudG9TdHJpbmcoXCJoZXhcIikpO1xuICAgICAgICBzZXRDb29raWUoXCJwdWJsaWNfa2V5XCIsIEJ1ZmZlci5mcm9tKHB1YktleUJ5dGVzKS50b1N0cmluZyhcImhleFwiKSlcbiAgXG5cbiAgICAgICAgY29uc3QgYXV0aCA9IGF3YWl0IGxvZ2luKHByaXZLZXlCeXRlcyxwdWJLZXlCeXRlcyk7XG4gICAgICAgXG4gICAgICAgIGlmIChhdXRoKSB7XG4gICAgICAgICAgICBzZXRDb29raWUoXCJqd3RcIixhdXRoKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvY2hhdFwiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBhbGVydChcIlByb2JsZW0gd2l0aCBrZXlzIFBsZWFzZSBjbGVhciBjb29raWVzXCIpXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsIG1hcmdpbjogXCIyMDBweCA2MDBweCAxMDBweFwiLCBwYWRkaW5nOiBcIjUwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBXcml0ZSBEb3duIHlvdXIgc2VjcmV0IHBocmFzZVxuICAgICAgICAgICAgICAgIDxkaXY+VGhpcyB3aWxsIGJlIHlvdXIgdW5pcXVlIGlkZWEgdG8gY2hhdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHttbmVtb25pYyAmJiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgZ3JheVwiLCBtYXJnaW46IFwiMzBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge21uZW1vbmljLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMzBweFwiIH19IGtleT17aW5kZXh9PntpbmRleCArIDF9LiB7dmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+fVxuXG4gICAgICAgICAgICA8ZGl2PjxidXR0b24gb25DbGljaz17d2FsbGV0Q3JlYXRlZH0+U3VibWl0PC9idXR0b24+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxuXG5cblxufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxldFNldHVwKCkge1xuXG4gICAgY29uc3QgW2NyZWF0ZVdhbGxldCwgc2V0Q3JlYXRlV2FsbGV0XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgZnVuY3Rpb24gc2V0Q3JlYXRlV2FsbGV0SGFuZGxlcihuKSB7XG5cbiAgICAgICAgc2V0Q3JlYXRlV2FsbGV0KG4pXG5cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y29uc29sZS5sb2coY3JlYXRlV2FsbGV0KX1cbiAgICAgICAgICAgIHtjcmVhdGVXYWxsZXQgPT09IDAgPyA8TGFuZGluZ1BhZ2UgY3JlYXRlV2FsbGV0PXtzZXRDcmVhdGVXYWxsZXRIYW5kbGVyfT48L0xhbmRpbmdQYWdlPiA6IFwiXCJ9XG4gICAgICAgICAgICB7Y3JlYXRlV2FsbGV0ID09PSAxID8gPENyZWF0ZVdhbGxldCA+PC9DcmVhdGVXYWxsZXQ+IDogY3JlYXRlV2FsbGV0ID09PSAyID88TmV3QWNjb3VudD48L05ld0FjY291bnQ+IDogXCJcIn1cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cblxuXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2VuZXJhdGVNbmVtb25pYyIsIm1uZW1vbmljVG9TZWVkU3luYyIsImV0aGVycyIsInNldENvb2tpZSIsImdldENvb2tpZSIsInVzZVJvdXRlciIsInJhbmRvbUJ5dGVzIiwiY3JlYXRlSGFzaCIsInNlY3AyNTZrMSIsImxvZ2luIiwicHJpdktleSIsInB1YktleSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtc2ciLCJoYXNoIiwidXBkYXRlIiwiZGlnZXN0IiwiaGFzaEJJbiIsIlVpbnQ4QXJyYXkiLCJmcm9tIiwiQnVmZmVyIiwic2lnT2JqIiwiZWNkc2FTaWduIiwiZGF0YSIsInNpZ25hdHVyZSIsInJlY2lkIiwicmVxQXV0aCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsInRva2VuIiwiTGFuZGluZ1BhZ2UiLCJjcmVhdGVXYWxsZXQiLCJyb3V0ZXIiLCJwdXNoIiwiZGl2Iiwic3R5bGUiLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwiYnV0dG9uIiwib25DbGljayIsIk5ld0FjY291bnQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicCIsImlucHV0IiwibWFyZ2luVG9wIiwiQ3JlYXRlV2FsbGV0IiwibW5lbW9uaWMiLCJzZXRNbmVtb25pYyIsIm1uZW1vbmljQXJyYXkiLCJzcGxpdCIsImZyb21IZXhTdHJpbmciLCJoZXhTdHJpbmciLCJtYXRjaCIsIm1hcCIsImJ5dGUiLCJwYXJzZUludCIsIndhbGxldENyZWF0ZWQiLCJzZWVkIiwiam9pbiIsInByaXZLZXlCeXRlcyIsInNsaWNlIiwicHViS2V5Qnl0ZXMiLCJwdWJsaWNLZXlDcmVhdGUiLCJtbmVtb25pY1dhbGxldCIsIldhbGxldCIsImZyb21QaHJhc2UiLCJwcml2YXRlS2V5IiwicHVibGljS2V5IiwidG9TdHJpbmciLCJhdXRoIiwiYWxlcnQiLCJmbGV4V3JhcCIsInZhbHVlIiwiaW5kZXgiLCJXYWxsZXRTZXR1cCIsInNldENyZWF0ZVdhbGxldCIsInNldENyZWF0ZVdhbGxldEhhbmRsZXIiLCJuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/WalletSetup.jsx\n"));

/***/ })

});