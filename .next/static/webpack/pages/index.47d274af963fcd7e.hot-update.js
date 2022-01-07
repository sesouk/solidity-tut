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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.js\");\n/* harmony import */ var _components_keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/keyboard */ \"./components/keyboard.js\");\n/* harmony import */ var _utils_addressesEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/addressesEqual */ \"./utils/addressesEqual.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _components_tip_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/tip-button */ \"./components/tip-button.js\");\n/* harmony import */ var _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/Keyboards.json */ \"./utils/Keyboards.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Home() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), ethereum = ref[0], setEthereum = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), connectedAccount = ref1[0], setConnectedAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), keyboards1 = ref2[0], setKeyboards = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newKeyboard = ref3[0], setNewKeyboard = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), keyboardsLoading = ref4[0], setKeyboardsLoading = ref4[1];\n    var contractAddress = '0x676835d2535a40815A003ca24f2C43184B4Ed8BF';\n    var contractABI = _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_8__.abi;\n    var handleAccounts = function(accounts) {\n        if (accounts.length > 0) {\n            var account = accounts[0];\n            console.log(\"We have an authorized account: \", account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    var submitCreate = _asyncToGenerator(_Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var provider, signer, keyboardsContract, createTxn;\n        return _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    if (ethereum) {\n                        _ctx.next = 4;\n                        break;\n                    }\n                    console.error('Ethereum object is required to create a keyboard');\n                    return _ctx.abrupt(\"return\");\n                case 4:\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    keyboardsContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(contractAddress, contractABI, signer);\n                    _ctx.next = 9;\n                    return keyboardsContract.create(newKeyboard);\n                case 9:\n                    createTxn = _ctx.sent;\n                    console.log('Create transaction started...', createTxn.hash);\n                    _ctx.next = 13;\n                    return createTxn.wait();\n                case 13:\n                    console.log('Created keyboard!', createTxn.hash);\n                    _ctx.next = 16;\n                    return getKeyboards();\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var getKeyboards = _asyncToGenerator(_Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, signer, keyboardsContract, keyboards;\n        return _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(ethereum && connectedAccount)) {\n                        _ctx.next = 14;\n                        break;\n                    }\n                    setKeyboardsLoading(true);\n                    _ctx.prev = 2;\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    keyboardsContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(contractAddress, contractABI, signer);\n                    _ctx.next = 8;\n                    return keyboardsContract.getKeyboards();\n                case 8:\n                    keyboards = _ctx.sent;\n                    console.log('Retrieved keyboards...', keyboards);\n                    setKeyboards(keyboards);\n                case 11:\n                    _ctx.prev = 11;\n                    setKeyboardsLoading(false);\n                    return _ctx.finish(11);\n                case 14:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                ,\n                11,\n                14\n            ]\n        ]);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return getKeyboards();\n    }, [\n        connectedAccount\n    ]);\n    var getConnectedAccount = _asyncToGenerator(_Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (window.ethereum) {\n                        setEthereum(window.ethereum);\n                    }\n                    if (!ethereum) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    _ctx.next = 4;\n                    return ethereum.request({\n                        method: 'eth_accounts'\n                    });\n                case 4:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return getConnectedAccount();\n    }, []);\n    var connectAccount = _asyncToGenerator(_Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (ethereum) {\n                        _ctx.next = 3;\n                        break;\n                    }\n                    alert('MetaMask is required to connect an account');\n                    return _ctx.abrupt(\"return\");\n                case 3:\n                    _ctx.next = 5;\n                    return ethereum.request({\n                        method: 'eth_requestAccounts'\n                    });\n                case 5:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    if (!ethereum) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n            __source: {\n                fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                lineNumber: 94,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Please install MetaMask to connect this site\"\n        }));\n    }\n    if (!connectedAccount) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            onClick: connectAccount,\n            __source: {\n                fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Connect MetaMask Wallet\"\n        }));\n    }\n    if (keyboards1.length > 0) {\n        var _this = this;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            __source: {\n                fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    type: \"link\",\n                    href: \"/create\",\n                    __source: {\n                        fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Create a Keyboard!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 gap-2 p-2\",\n                    __source: {\n                        fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: keyboards1.map(function(param, i) {\n                        var _param = _slicedToArray(param, 4), kind = _param[0], isPBT = _param[1], filter = _param[2], owner = _param[3];\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            className: \"relative\",\n                            __source: {\n                                fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_keyboard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    kind: kind,\n                                    isPBT: isPBT,\n                                    filter: filter,\n                                    __source: {\n                                        fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                    className: \"absolute top-1 right-6\",\n                                    __source: {\n                                        fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: (0,_utils_addressesEqual__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(owner, connectedAccount) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.UserCircleIcon, {\n                                        className: \"h-5 w-5 text-indigo-100\",\n                                        __source: {\n                                            fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                                            lineNumber: 114,\n                                            columnNumber: 21\n                                        },\n                                        __self: _this\n                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_tip_button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        ethereum: ethereum,\n                                        index: i,\n                                        __source: {\n                                            fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 21\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            ]\n                        }, i);\n                    })\n                })\n            ]\n        }));\n    }\n    if (keyboardsLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            __source: {\n                fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                lineNumber: 128,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    type: \"link\",\n                    href: \"/create\",\n                    __source: {\n                        fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Create a Keyboard!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Loading Keyboards...\"\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        __source: {\n            fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n            lineNumber: 136,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                type: \"link\",\n                href: \"/create\",\n                __source: {\n                    fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                    lineNumber: 137,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Create a Keyboard!\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                    lineNumber: 138,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"No keyboards yet!\"\n            })\n        ]\n    }));\n};\n_s1(Home, \"x4pufbW1/TC+9MWT+ctH2FLtQWY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxDQUFDOzs7Ozs7Ozs7OzJCQUxuQ0EsQ0FBQzs7Ozs7SUFjdkIsQ0FBQztJQUVELEVBQUUsRUFBRXhDLGdCQUFnQixFQUFFLENBQUM7UUFDckIsTUFBTSx1RUFDSGtDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXFCOzs7Ozs7OztxRkFDakNwRCxrRUFBYTtvQkFBQ3FELElBQUksRUFBQyxDQUFNO29CQUFDQyxJQUFJLEVBQUMsQ0FBUzs7Ozs7Ozs4QkFBQyxDQUFrQjs7cUZBQzNETCxDQUFDOzs7Ozs7OzhCQUFDLENBQW9COzs7O0lBRzdCLENBQUM7SUFFRCxNQUFNLHVFQUNIRSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFxQjs7Ozs7Ozs7aUZBQ2pDcEQsa0VBQWE7Z0JBQUNxRCxJQUFJLEVBQUMsQ0FBTTtnQkFBQ0MsSUFBSSxFQUFDLENBQVM7Ozs7Ozs7MEJBQUMsQ0FBa0I7O2lGQUMzREwsQ0FBQzs7Ozs7OzswQkFBQyxDQUFpQjs7OztBQUcxQixDQUFDO0lBbkl1QjFDLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpbWFyeS1idXR0b25cIlxuaW1wb3J0IEtleWJvYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2tleWJvYXJkXCJcbmltcG9ydCBhZGRyZXNzZXNFcXVhbCBmcm9tIFwiLi4vdXRpbHMvYWRkcmVzc2VzRXF1YWxcIlxuaW1wb3J0IHsgVXNlckNpcmNsZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiXG5pbXBvcnQgVGlwQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3RpcC1idXR0b25cIlxuaW1wb3J0IGFiaSBmcm9tIFwiLi4vdXRpbHMvS2V5Ym9hcmRzLmpzb25cIlxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtldGhlcmV1bSwgc2V0RXRoZXJldW1dID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICBjb25zdCBbY29ubmVjdGVkQWNjb3VudCwgc2V0Q29ubmVjdGVkQWNjb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFtrZXlib2FyZHMsIHNldEtleWJvYXJkc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW25ld0tleWJvYXJkLCBzZXROZXdLZXlib2FyZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBba2V5Ym9hcmRzTG9hZGluZywgc2V0S2V5Ym9hcmRzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSAnMHg2NzY4MzVkMjUzNWE0MDgxNUEwMDNjYTI0ZjJDNDMxODRCNEVkOEJGJ1xuICBjb25zdCBjb250cmFjdEFCSSA9IGFiaS5hYmlcblxuICBjb25zdCBoYW5kbGVBY2NvdW50cyA9IChhY2NvdW50cykgPT4ge1xuICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF1cbiAgICAgIGNvbnNvbGUubG9nKFwiV2UgaGF2ZSBhbiBhdXRob3JpemVkIGFjY291bnQ6IFwiLCBhY2NvdW50KVxuICAgICAgc2V0Q29ubmVjdGVkQWNjb3VudChhY2NvdW50KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudHMgeWV0XCIpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3VibWl0Q3JlYXRlID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFdGhlcmV1bSBvYmplY3QgaXMgcmVxdWlyZWQgdG8gY3JlYXRlIGEga2V5Ym9hcmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3Qga2V5Ym9hcmRzQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgY29udHJhY3RBQkksIHNpZ25lcik7XG5cbiAgICBjb25zdCBjcmVhdGVUeG4gPSBhd2FpdCBrZXlib2FyZHNDb250cmFjdC5jcmVhdGUobmV3S2V5Ym9hcmQpO1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGUgdHJhbnNhY3Rpb24gc3RhcnRlZC4uLicsIGNyZWF0ZVR4bi5oYXNoKTtcblxuICAgIGF3YWl0IGNyZWF0ZVR4bi53YWl0KCk7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZWQga2V5Ym9hcmQhJywgY3JlYXRlVHhuLmhhc2gpO1xuXG4gICAgYXdhaXQgZ2V0S2V5Ym9hcmRzKCk7XG4gIH1cblxuICBjb25zdCBnZXRLZXlib2FyZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGV0aGVyZXVtICYmIGNvbm5lY3RlZEFjY291bnQpIHtcbiAgICAgIHNldEtleWJvYXJkc0xvYWRpbmcodHJ1ZSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKTtcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IGtleWJvYXJkc0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCBzaWduZXIpXG4gIFxuICAgICAgICBjb25zdCBrZXlib2FyZHMgPSBhd2FpdCBrZXlib2FyZHNDb250cmFjdC5nZXRLZXlib2FyZHMoKVxuICAgICAgICBjb25zb2xlLmxvZygnUmV0cmlldmVkIGtleWJvYXJkcy4uLicsIGtleWJvYXJkcylcbiAgICAgICAgc2V0S2V5Ym9hcmRzKGtleWJvYXJkcylcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldEtleWJvYXJkc0xvYWRpbmcoZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IGdldEtleWJvYXJkcygpLCBbY29ubmVjdGVkQWNjb3VudF0pXG5cbiAgY29uc3QgZ2V0Q29ubmVjdGVkQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICBzZXRFdGhlcmV1bSh3aW5kb3cuZXRoZXJldW0pXG4gICAgfVxuXG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pXG4gICAgICBoYW5kbGVBY2NvdW50cyhhY2NvdW50cylcbiAgICB9XG4gIH1cbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiBnZXRDb25uZWN0ZWRBY2NvdW50KCksIFtdKVxuXG4gIGNvbnN0IGNvbm5lY3RBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGFsZXJ0KCdNZXRhTWFzayBpcyByZXF1aXJlZCB0byBjb25uZWN0IGFuIGFjY291bnQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pXG4gICAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpXG4gIH1cblxuICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgcmV0dXJuIDxwPlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrIHRvIGNvbm5lY3QgdGhpcyBzaXRlPC9wPlxuICB9XG5cbiAgaWYgKCFjb25uZWN0ZWRBY2NvdW50KSB7XG4gICAgcmV0dXJuIDxQcmltYXJ5QnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RBY2NvdW50fT5cbiAgICAgIENvbm5lY3QgTWV0YU1hc2sgV2FsbGV0XG4gICAgPC9QcmltYXJ5QnV0dG9uPlxuICB9XG5cbiAgaWYgKGtleWJvYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8UHJpbWFyeUJ1dHRvbiB0eXBlPVwibGlua1wiIGhyZWY9XCIvY3JlYXRlXCI+Q3JlYXRlIGEgS2V5Ym9hcmQhPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTIgcC0yXCI+XG4gICAgICAgICAge2tleWJvYXJkcy5tYXAoXG4gICAgICAgICAgICAoW2tpbmQsIGlzUEJULCBmaWx0ZXIsIG93bmVyXSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmQga2luZD17a2luZH0gaXNQQlQ9e2lzUEJUfSBmaWx0ZXI9e2ZpbHRlcn0gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMSByaWdodC02XCI+XG4gICAgICAgICAgICAgICAgICB7YWRkcmVzc2VzRXF1YWwob3duZXIsIGNvbm5lY3RlZEFjY291bnQpID9cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1pbmRpZ28tMTAwXCIgLz4gOlxuICAgICAgICAgICAgICAgICAgICA8VGlwQnV0dG9uIGV0aGVyZXVtPXtldGhlcmV1bX0gaW5kZXg9e2l9IC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGlmIChrZXlib2FyZHNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8UHJpbWFyeUJ1dHRvbiB0eXBlPVwibGlua1wiIGhyZWY9XCIvY3JlYXRlXCI+Q3JlYXRlIGEgS2V5Ym9hcmQhPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICA8cD5Mb2FkaW5nIEtleWJvYXJkcy4uLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICA8UHJpbWFyeUJ1dHRvbiB0eXBlPVwibGlua1wiIGhyZWY9XCIvY3JlYXRlXCI+Q3JlYXRlIGEgS2V5Ym9hcmQhPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgPHA+Tm8ga2V5Ym9hcmRzIHlldCE8L3A+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcmltYXJ5QnV0dG9uIiwiS2V5Ym9hcmQiLCJhZGRyZXNzZXNFcXVhbCIsIlVzZXJDaXJjbGVJY29uIiwiVGlwQnV0dG9uIiwiYWJpIiwiZXRoZXJzIiwiSG9tZSIsInVuZGVmaW5lZCIsImV0aGVyZXVtIiwic2V0RXRoZXJldW0iLCJjb25uZWN0ZWRBY2NvdW50Iiwic2V0Q29ubmVjdGVkQWNjb3VudCIsImtleWJvYXJkcyIsInNldEtleWJvYXJkcyIsIm5ld0tleWJvYXJkIiwic2V0TmV3S2V5Ym9hcmQiLCJrZXlib2FyZHNMb2FkaW5nIiwic2V0S2V5Ym9hcmRzTG9hZGluZyIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QUJJIiwiaGFuZGxlQWNjb3VudHMiLCJhY2NvdW50cyIsImxlbmd0aCIsImFjY291bnQiLCJjb25zb2xlIiwibG9nIiwic3VibWl0Q3JlYXRlIiwiZSIsInByb3ZpZGVyIiwic2lnbmVyIiwia2V5Ym9hcmRzQ29udHJhY3QiLCJjcmVhdGVUeG4iLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJjcmVhdGUiLCJoYXNoIiwid2FpdCIsImdldEtleWJvYXJkcyIsImdldENvbm5lY3RlZEFjY291bnQiLCJ3aW5kb3ciLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29ubmVjdEFjY291bnQiLCJhbGVydCIsInAiLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsImhyZWYiLCJtYXAiLCJpc1BCVCIsImkiLCJraW5kIiwiZmlsdGVyIiwib3duZXIiLCJzcGFuIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});