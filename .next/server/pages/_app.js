/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/meta-mask-account-provider.js":
/*!**************************************************!*\
  !*** ./components/meta-mask-account-provider.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MetaMaskAccountProvider),\n/* harmony export */   \"useMetaMaskAccount\": () => (/* binding */ useMetaMaskAccount)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MetaMaskAccountContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction MetaMaskAccountProvider({ children  }) {\n    const { 0: ethereum , 1: setEthereum  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const { 0: connectedAccount , 1: setConnectedAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const setEthereumFromWindow = async ()=>{\n        if (window.ethereum) {\n            setEthereum(window.ethereum);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setEthereumFromWindow()\n    , []);\n    const handleAccounts = (accounts)=>{\n        if (accounts.length > 0) {\n            const account = accounts[0];\n            console.log('We have an authorized account: ', account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    const getConnectedAccount = async ()=>{\n        if (ethereum) {\n            const accounts = await ethereum.request({\n                method: 'eth_accounts'\n            });\n            handleAccounts(accounts);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>getConnectedAccount()\n    );\n    const connectAccount = async ()=>{\n        if (!ethereum) {\n            console.error('Ethereum object is required to connect an account');\n            return;\n        }\n        const accounts = await ethereum.request({\n            method: 'eth_requestAccounts'\n        });\n        handleAccounts(accounts);\n    };\n    const value = {\n        ethereum,\n        connectedAccount,\n        connectAccount\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MetaMaskAccountContext.Provider, {\n        value: value,\n        __source: {\n            fileName: \"/Users/sesouk/solidity/solidity-tut/components/meta-mask-account-provider.js\",\n            lineNumber: 47,\n            columnNumber: 5\n        },\n        __self: this,\n        children: children\n    }));\n};\nfunction useMetaMaskAccount() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MetaMaskAccountContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21ldGEtbWFzay1hY2NvdW50LXByb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0U7QUFFdEUsS0FBSyxDQUFDSSxzQkFBc0IsaUJBQUdGLG9EQUFhO0FBRTdCLFFBQVEsQ0FBQ0csdUJBQXVCLENBQUMsQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFDLEVBQUUsQ0FBQztJQUMzRCxLQUFLLE1BQUVDLFFBQVEsTUFBRUMsV0FBVyxNQUFJUiwrQ0FBUSxDQUFDUyxTQUFTO0lBQ2xELEtBQUssTUFBRUMsZ0JBQWdCLE1BQUVDLG1CQUFtQixNQUFJWCwrQ0FBUSxDQUFDUyxTQUFTO0lBRWxFLEtBQUssQ0FBQ0cscUJBQXFCLGFBQWUsQ0FBQztRQUN6QyxFQUFFLEVBQUNDLE1BQU0sQ0FBQ04sUUFBUSxFQUFFLENBQUM7WUFDbkJDLFdBQVcsQ0FBQ0ssTUFBTSxDQUFDTixRQUFRO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBQ0ROLGdEQUFTLEtBQU9XLHFCQUFxQjtNQUFJLENBQUMsQ0FBQztJQUUzQyxLQUFLLENBQUNFLGNBQWMsSUFBSUMsUUFBUSxHQUFLLENBQUM7UUFDcEMsRUFBRSxFQUFFQSxRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUNDLE9BQU8sR0FBR0YsUUFBUSxDQUFDLENBQUM7WUFDMUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWlDLGtDQUFFRixPQUFPO1lBQ3RETixtQkFBbUIsQ0FBQ00sT0FBTztRQUM3QixDQUFDLE1BQU0sQ0FBQztZQUNOQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE0QjtRQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQ0MsbUJBQW1CLGFBQWUsQ0FBQztRQUN2QyxFQUFFLEVBQUViLFFBQVEsRUFBRSxDQUFDO1lBQ2IsS0FBSyxDQUFDUSxRQUFRLEdBQUcsS0FBSyxDQUFDUixRQUFRLENBQUNjLE9BQU8sQ0FBQyxDQUFDO2dCQUFDQyxNQUFNLEVBQUUsQ0FBYztZQUFDLENBQUM7WUFDbEVSLGNBQWMsQ0FBQ0MsUUFBUTtRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUNEZCxnREFBUyxLQUFPbUIsbUJBQW1COztJQUVuQyxLQUFLLENBQUNHLGNBQWMsYUFBZSxDQUFDO1FBQ2xDLEVBQUUsR0FBR2hCLFFBQVEsRUFBRSxDQUFDO1lBQ2RXLE9BQU8sQ0FBQ00sS0FBSyxDQUFDLENBQW1EO1lBQ2pFLE1BQU07UUFDUixDQUFDO1FBRUQsS0FBSyxDQUFDVCxRQUFRLEdBQUcsS0FBSyxDQUFDUixRQUFRLENBQUNjLE9BQU8sQ0FBQyxDQUFDO1lBQUNDLE1BQU0sRUFBRSxDQUFxQjtRQUFDLENBQUM7UUFDekVSLGNBQWMsQ0FBQ0MsUUFBUTtJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDVSxLQUFLLEdBQUcsQ0FBQ2xCO1FBQUFBLFFBQVE7UUFBRUcsZ0JBQWdCO1FBQUVhLGNBQWM7SUFBQSxDQUFDO0lBRTFELE1BQU0sc0VBQ0huQixzQkFBc0IsQ0FBQ3NCLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLOzs7Ozs7O2tCQUMxQ25CLFFBQVE7O0FBR2YsQ0FBQztBQUVNLFNBQVNxQixrQkFBa0IsR0FBRyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQ3hCLGlEQUFVLENBQUNDLHNCQUFzQjtBQUMxQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29saWRpdHktdHV0b3JpYWwtc2NyYXRjaC8uL2NvbXBvbmVudHMvbWV0YS1tYXNrLWFjY291bnQtcHJvdmlkZXIuanM/YzdiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE1ldGFNYXNrQWNjb3VudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ldGFNYXNrQWNjb3VudFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcbiAgY29uc3QgW2V0aGVyZXVtLCBzZXRFdGhlcmV1bV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbY29ubmVjdGVkQWNjb3VudCwgc2V0Q29ubmVjdGVkQWNjb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBcbiAgY29uc3Qgc2V0RXRoZXJldW1Gcm9tV2luZG93ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgc2V0RXRoZXJldW0od2luZG93LmV0aGVyZXVtKTtcbiAgICB9XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHNldEV0aGVyZXVtRnJvbVdpbmRvdygpLCBbXSlcblxuICBjb25zdCBoYW5kbGVBY2NvdW50cyA9IChhY2NvdW50cykgPT4ge1xuICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICBjb25zb2xlLmxvZygnV2UgaGF2ZSBhbiBhdXRob3JpemVkIGFjY291bnQ6ICcsIGFjY291bnQpO1xuICAgICAgc2V0Q29ubmVjdGVkQWNjb3VudChhY2NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJObyBhdXRob3JpemVkIGFjY291bnRzIHlldFwiKVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRDb25uZWN0ZWRBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcbiAgICAgIGhhbmRsZUFjY291bnRzKGFjY291bnRzKTtcbiAgICB9XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiBnZXRDb25uZWN0ZWRBY2NvdW50KCkpO1xuXG4gIGNvbnN0IGNvbm5lY3RBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0V0aGVyZXVtIG9iamVjdCBpcyByZXF1aXJlZCB0byBjb25uZWN0IGFuIGFjY291bnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICBoYW5kbGVBY2NvdW50cyhhY2NvdW50cyk7XG4gIH07XG4gIFxuICBjb25zdCB2YWx1ZSA9IHtldGhlcmV1bSwgY29ubmVjdGVkQWNjb3VudCwgY29ubmVjdEFjY291bnR9O1xuXG4gIHJldHVybiAoXG4gICAgPE1ldGFNYXNrQWNjb3VudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01ldGFNYXNrQWNjb3VudENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1ldGFNYXNrQWNjb3VudCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoTWV0YU1hc2tBY2NvdW50Q29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIk1ldGFNYXNrQWNjb3VudENvbnRleHQiLCJNZXRhTWFza0FjY291bnRQcm92aWRlciIsImNoaWxkcmVuIiwiZXRoZXJldW0iLCJzZXRFdGhlcmV1bSIsInVuZGVmaW5lZCIsImNvbm5lY3RlZEFjY291bnQiLCJzZXRDb25uZWN0ZWRBY2NvdW50Iiwic2V0RXRoZXJldW1Gcm9tV2luZG93Iiwid2luZG93IiwiaGFuZGxlQWNjb3VudHMiLCJhY2NvdW50cyIsImxlbmd0aCIsImFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29ubmVjdGVkQWNjb3VudCIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25uZWN0QWNjb3VudCIsImVycm9yIiwidmFsdWUiLCJQcm92aWRlciIsInVzZU1ldGFNYXNrQWNjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meta-mask-account-provider.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meta_mask_account_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meta-mask-account-provider */ \"./components/meta-mask-account-provider.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_meta_mask_account_provider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        __source: {\n            fileName: \"/Users/sesouk/solidity/solidity-tut/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {\n                __source: {\n                    fileName: \"/Users/sesouk/solidity/solidity-tut/pages/_app.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/sesouk/solidity/solidity-tut/pages/_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNXO0FBQ3FDO1NBRXJFRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLHVFQUNISCw4RUFBdUI7Ozs7Ozs7O2lGQUNyQkQsb0RBQU87Ozs7Ozs7O2lGQUNQRyxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbGlkaXR5LXR1dG9yaWFsLXNjcmF0Y2gvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xuaW1wb3J0IE1ldGFNYXNrQWNjb3VudFByb3ZpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbWV0YS1tYXNrLWFjY291bnQtcHJvdmlkZXInXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxNZXRhTWFza0FjY291bnRQcm92aWRlcj5cbiAgICAgIDxUb2FzdGVyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9NZXRhTWFza0FjY291bnRQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlRvYXN0ZXIiLCJNZXRhTWFza0FjY291bnRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();