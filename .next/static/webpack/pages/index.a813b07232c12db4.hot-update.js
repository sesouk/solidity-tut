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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.js\");\n/* harmony import */ var _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Keyboards.json */ \"./utils/Keyboards.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Home() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), ethereum = ref[0], setEthereum = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), connectedAccount = ref1[0], setConnectedAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), keyboards1 = ref2[0], setKeyboards = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newKeyboard = ref3[0], setNewKeyboard = ref3[1];\n    var contractAddress = '0x4D82c56ae8d8c80957B6750FDb88EeF92FEb757a';\n    var contractABI = _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__.abi;\n    var handleAccounts = function(accounts) {\n        if (accounts.length > 0) {\n            var account = accounts[0];\n            console.log(\"We have an authorized account: \", account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    var submitCreate = _asyncToGenerator(_Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var provider, signer, keyboardsContract, createTxn;\n        return _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    if (ethereum) {\n                        _ctx.next = 4;\n                        break;\n                    }\n                    console.error('Ethereum object is required to create a keyboard');\n                    return _ctx.abrupt(\"return\");\n                case 4:\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    keyboardsContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, contractABI, signer);\n                    _ctx.next = 9;\n                    return keyboardsContract.create(newKeyboard);\n                case 9:\n                    createTxn = _ctx.sent;\n                    console.log('Create transaction started...', createTxn.hash);\n                    _ctx.next = 13;\n                    return createTxn.wait();\n                case 13:\n                    console.log('Created keyboard!', createTxn.hash);\n                    _ctx.next = 16;\n                    return getKeyboards();\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var getKeyboards = _asyncToGenerator(_Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, signer, keyboardsContract, keyboards;\n        return _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(ethereum && connectedAccount)) {\n                        _ctx.next = 9;\n                        break;\n                    }\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    keyboardsContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, contractABI, signer);\n                    _ctx.next = 6;\n                    return keyboardsContract.getKeyboards();\n                case 6:\n                    keyboards = _ctx.sent;\n                    console.log('Retrieved keyboards...', keyboards);\n                    setKeyboards(keyboards);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return getKeyboards();\n    }, [\n        connectedAccount\n    ]);\n    var getConnectedAccount = _asyncToGenerator(_Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (window.ethereum) {\n                        setEthereum(window.ethereum);\n                    }\n                    if (!ethereum) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    _ctx.next = 4;\n                    return ethereum.request({\n                        method: 'eth_accounts'\n                    });\n                case 4:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return getConnectedAccount();\n    }, []);\n    var connectAccount = _asyncToGenerator(_Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_sesouk_solidity_solidity_tut_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (ethereum) {\n                        _ctx.next = 3;\n                        break;\n                    }\n                    alert('MetaMask is required to connect an account');\n                    return _ctx.abrupt(\"return\");\n                case 3:\n                    _ctx.next = 5;\n                    return ethereum.request({\n                        method: 'eth_requestAccounts'\n                    });\n                case 5:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    if (!ethereum) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n            __source: {\n                fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                lineNumber: 84,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Please install MetaMask to connect this site\"\n        }));\n    }\n    if (!connectedAccount) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            onClick: connectAccount,\n            __source: {\n                fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Connect MetaMask Wallet\"\n        }));\n    }\n    if (keyboards1.length > 0) {\n        var _this = this;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            __source: {\n                fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    type: \"link\",\n                    href: \"/create\",\n                    __source: {\n                        fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Create a Keyboard!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 gap-2 p-2\",\n                    __source: {\n                        fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: keyboards1.map(function(param, i) {\n                        var _param = _slicedToArray(param, 3), kind = _param[0], isPBT = _param[1], filter = _param[2];\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Keyboard, {\n                            kind: kind,\n                            isPBT: isPBT,\n                            filter: filter,\n                            __source: {\n                                fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            },\n                            __self: _this\n                        }, i);\n                    })\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        __source: {\n            fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n            lineNumber: 109,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                type: \"link\",\n                href: \"/create\",\n                __source: {\n                    fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                    lineNumber: 110,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Create a Keyboard!\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/sesouk/solidity/solidity-tut/pages/index.js\",\n                    lineNumber: 111,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"No keyboards yet!\"\n            })\n        ]\n    }));\n};\n_s1(Home, \"b8V4f3f5v5hbePuSC6tSKmX8kS0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7WUFBQzRDLE9BQU8sRUFBRUgsY0FBYzs7Ozs7OztzQkFBRSxDQUUvQzs7SUFDRixDQUFDO0lBRUQsRUFBRSxFQUFFaEMsVUFBUyxDQUFDUSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7O1FBQ3pCLE1BQU0sdUVBQ0g0QixDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFxQjs7Ozs7Ozs7cUZBQ2pDOUMsa0VBQWE7b0JBQUMrQyxJQUFJLEVBQUMsQ0FBTTtvQkFBQ0MsSUFBSSxFQUFDLENBQVM7Ozs7Ozs7OEJBQUMsQ0FBa0I7O3FGQUMzREgsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQTJDOzs7Ozs7OzhCQUN2RHJDLFVBQVMsQ0FBQ3dDLEdBQUcsQ0FDWixRQUFRQyxRQUFnQkMsQ0FBQzsrREFBdkJDLElBQUksY0FBRUYsS0FBSyxjQUFFRyxNQUFNO3NDQUNuQixNQUFNLHdEQUFMQyxRQUFROzRCQUFTRixJQUFJLEVBQUVBLElBQUk7NEJBQUVGLEtBQUssRUFBRUEsS0FBSzs0QkFBRUcsTUFBTSxFQUFFQSxNQUFNOzs7Ozs7OzJCQUEzQ0YsQ0FBQzs7Ozs7SUFNNUIsQ0FBQztJQUVELE1BQU0sdUVBQ0hOLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXFCOzs7Ozs7OztpRkFDakM5QyxrRUFBYTtnQkFBQytDLElBQUksRUFBQyxDQUFNO2dCQUFDQyxJQUFJLEVBQUMsQ0FBUzs7Ozs7OzswQkFBQyxDQUFrQjs7aUZBQzNETCxDQUFDOzs7Ozs7OzBCQUFDLENBQWlCOzs7O0FBRzFCLENBQUM7SUE1R3VCeEMsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmltYXJ5LWJ1dHRvblwiXG5pbXBvcnQgYWJpIGZyb20gXCIuLi91dGlscy9LZXlib2FyZHMuanNvblwiXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2V0aGVyZXVtLCBzZXRFdGhlcmV1bV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFtjb25uZWN0ZWRBY2NvdW50LCBzZXRDb25uZWN0ZWRBY2NvdW50XSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgW2tleWJvYXJkcywgc2V0S2V5Ym9hcmRzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbmV3S2V5Ym9hcmQsIHNldE5ld0tleWJvYXJkXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4NEQ4MmM1NmFlOGQ4YzgwOTU3QjY3NTBGRGI4OEVlRjkyRkViNzU3YSdcbiAgY29uc3QgY29udHJhY3RBQkkgPSBhYmkuYWJpXG5cbiAgY29uc3QgaGFuZGxlQWNjb3VudHMgPSAoYWNjb3VudHMpID0+IHtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdXG4gICAgICBjb25zb2xlLmxvZyhcIldlIGhhdmUgYW4gYXV0aG9yaXplZCBhY2NvdW50OiBcIiwgYWNjb3VudClcbiAgICAgIHNldENvbm5lY3RlZEFjY291bnQoYWNjb3VudClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJObyBhdXRob3JpemVkIGFjY291bnRzIHlldFwiKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN1Ym1pdENyZWF0ZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5lcnJvcignRXRoZXJldW0gb2JqZWN0IGlzIHJlcXVpcmVkIHRvIGNyZWF0ZSBhIGtleWJvYXJkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGNvbnN0IGtleWJvYXJkc0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCBzaWduZXIpO1xuXG4gICAgY29uc3QgY3JlYXRlVHhuID0gYXdhaXQga2V5Ym9hcmRzQ29udHJhY3QuY3JlYXRlKG5ld0tleWJvYXJkKTtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlIHRyYW5zYWN0aW9uIHN0YXJ0ZWQuLi4nLCBjcmVhdGVUeG4uaGFzaCk7XG5cbiAgICBhd2FpdCBjcmVhdGVUeG4ud2FpdCgpO1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIGtleWJvYXJkIScsIGNyZWF0ZVR4bi5oYXNoKTtcblxuICAgIGF3YWl0IGdldEtleWJvYXJkcygpO1xuICB9XG5cbiAgY29uc3QgZ2V0S2V5Ym9hcmRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChldGhlcmV1bSAmJiBjb25uZWN0ZWRBY2NvdW50KSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IGtleWJvYXJkc0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCBzaWduZXIpXG5cbiAgICAgIGNvbnN0IGtleWJvYXJkcyA9IGF3YWl0IGtleWJvYXJkc0NvbnRyYWN0LmdldEtleWJvYXJkcygpXG4gICAgICBjb25zb2xlLmxvZygnUmV0cmlldmVkIGtleWJvYXJkcy4uLicsIGtleWJvYXJkcylcbiAgICAgIHNldEtleWJvYXJkcyhrZXlib2FyZHMpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IGdldEtleWJvYXJkcygpLCBbY29ubmVjdGVkQWNjb3VudF0pXG5cbiAgY29uc3QgZ2V0Q29ubmVjdGVkQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICBzZXRFdGhlcmV1bSh3aW5kb3cuZXRoZXJldW0pXG4gICAgfVxuXG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pXG4gICAgICBoYW5kbGVBY2NvdW50cyhhY2NvdW50cylcbiAgICB9XG4gIH1cbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiBnZXRDb25uZWN0ZWRBY2NvdW50KCksIFtdKVxuXG4gIGNvbnN0IGNvbm5lY3RBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGFsZXJ0KCdNZXRhTWFzayBpcyByZXF1aXJlZCB0byBjb25uZWN0IGFuIGFjY291bnQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pXG4gICAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpXG4gIH1cblxuICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgcmV0dXJuIDxwPlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrIHRvIGNvbm5lY3QgdGhpcyBzaXRlPC9wPlxuICB9XG5cbiAgaWYgKCFjb25uZWN0ZWRBY2NvdW50KSB7XG4gICAgcmV0dXJuIDxQcmltYXJ5QnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RBY2NvdW50fT5cbiAgICAgIENvbm5lY3QgTWV0YU1hc2sgV2FsbGV0XG4gICAgPC9QcmltYXJ5QnV0dG9uPlxuICB9XG5cbiAgaWYgKGtleWJvYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8UHJpbWFyeUJ1dHRvbiB0eXBlPVwibGlua1wiIGhyZWY9XCIvY3JlYXRlXCI+Q3JlYXRlIGEgS2V5Ym9hcmQhPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTIgcC0yXCI+XG4gICAgICAgICAge2tleWJvYXJkcy5tYXAoXG4gICAgICAgICAgICAoW2tpbmQsIGlzUEJULCBmaWx0ZXJdLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxLZXlib2FyZCBrZXk9e2l9IGtpbmQ9e2tpbmR9IGlzUEJUPXtpc1BCVH0gZmlsdGVyPXtmaWx0ZXJ9IC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgPFByaW1hcnlCdXR0b24gdHlwZT1cImxpbmtcIiBocmVmPVwiL2NyZWF0ZVwiPkNyZWF0ZSBhIEtleWJvYXJkITwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgIDxwPk5vIGtleWJvYXJkcyB5ZXQhPC9wPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJpbWFyeUJ1dHRvbiIsImFiaSIsImV0aGVycyIsIkhvbWUiLCJ1bmRlZmluZWQiLCJldGhlcmV1bSIsInNldEV0aGVyZXVtIiwiY29ubmVjdGVkQWNjb3VudCIsInNldENvbm5lY3RlZEFjY291bnQiLCJrZXlib2FyZHMiLCJzZXRLZXlib2FyZHMiLCJuZXdLZXlib2FyZCIsInNldE5ld0tleWJvYXJkIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJoYW5kbGVBY2NvdW50cyIsImFjY291bnRzIiwibGVuZ3RoIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRDcmVhdGUiLCJlIiwicHJvdmlkZXIiLCJzaWduZXIiLCJrZXlib2FyZHNDb250cmFjdCIsImNyZWF0ZVR4biIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImNyZWF0ZSIsImhhc2giLCJ3YWl0IiwiZ2V0S2V5Ym9hcmRzIiwiZ2V0Q29ubmVjdGVkQWNjb3VudCIsIndpbmRvdyIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25uZWN0QWNjb3VudCIsImFsZXJ0IiwicCIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaHJlZiIsIm1hcCIsImlzUEJUIiwiaSIsImtpbmQiLCJmaWx0ZXIiLCJLZXlib2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});