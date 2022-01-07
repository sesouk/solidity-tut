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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MetaMaskAccountProvider),\n/* harmony export */   \"useMetaMaskAccount\": () => (/* binding */ useMetaMaskAccount)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MetaMaskAccountContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction MetaMaskAccountProvider({ children  }) {\n    const { 0: ethereum , 1: setEthereum  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const { 0: connectedAccount , 1: setConnectedAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const setEthereumFromWindow = async ()=>{\n        if (window.ethereum) {\n            window.ethereum.on('chainChanged', (_chainId)=>window.location.reload()\n            );\n            const chainId = await window.ethereum.request({\n                method: 'eth_chainId'\n            });\n            const rinkebyId = '0x4';\n            if (chainId === rinkebyId) {\n                setEthereum(window.ethereum);\n            } else {\n                alert('Please use Rinkeby network');\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setEthereumFromWindow()\n    , []);\n    const handleAccounts = (accounts)=>{\n        if (accounts.length > 0) {\n            const account = accounts[0];\n            console.log('We have an authorized account: ', account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    const getConnectedAccount = async ()=>{\n        if (ethereum) {\n            const accounts = await ethereum.request({\n                method: 'eth_accounts'\n            });\n            handleAccounts(accounts);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>getConnectedAccount()\n    );\n    const connectAccount = async ()=>{\n        if (!ethereum) {\n            console.error('Ethereum object is required to connect an account');\n            return;\n        }\n        const accounts = await ethereum.request({\n            method: 'eth_requestAccounts'\n        });\n        handleAccounts(accounts);\n    };\n    const value = {\n        ethereum,\n        connectedAccount,\n        connectAccount\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MetaMaskAccountContext.Provider, {\n        value: value,\n        __source: {\n            fileName: \"/Users/sesouk/solidity/solidity-tut/components/meta-mask-account-provider.js\",\n            lineNumber: 55,\n            columnNumber: 5\n        },\n        __self: this,\n        children: children\n    }));\n};\nfunction useMetaMaskAccount() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MetaMaskAccountContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21ldGEtbWFzay1hY2NvdW50LXByb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0U7QUFFdEUsS0FBSyxDQUFDSSxzQkFBc0IsaUJBQUdGLG9EQUFhO0FBRTdCLFFBQVEsQ0FBQ0csdUJBQXVCLENBQUMsQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFDLEVBQUUsQ0FBQztJQUMzRCxLQUFLLE1BQUVDLFFBQVEsTUFBRUMsV0FBVyxNQUFJUiwrQ0FBUSxDQUFDUyxTQUFTO0lBQ2xELEtBQUssTUFBRUMsZ0JBQWdCLE1BQUVDLG1CQUFtQixNQUFJWCwrQ0FBUSxDQUFDUyxTQUFTO0lBRWxFLEtBQUssQ0FBQ0cscUJBQXFCLGFBQWUsQ0FBQztRQUN6QyxFQUFFLEVBQUNDLE1BQU0sQ0FBQ04sUUFBUSxFQUFFLENBQUM7WUFDbkJNLE1BQU0sQ0FBQ04sUUFBUSxDQUFDTyxFQUFFLENBQUMsQ0FBYyxnQkFBR0MsUUFBUSxHQUFLRixNQUFNLENBQUNHLFFBQVEsQ0FBQ0MsTUFBTTs7WUFDdkUsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDTCxNQUFNLENBQUNOLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDLENBQUM7Z0JBQUNDLE1BQU0sRUFBRSxDQUFhO1lBQUMsQ0FBQztZQUN2RSxLQUFLLENBQUNDLFNBQVMsR0FBRyxDQUFLO1lBRXZCLEVBQUUsRUFBQ0gsT0FBTyxLQUFLRyxTQUFTLEVBQUUsQ0FBQztnQkFDekJiLFdBQVcsQ0FBQ0ssTUFBTSxDQUFDTixRQUFRO1lBQzdCLENBQUMsTUFBTSxDQUFDO2dCQUNOZSxLQUFLLENBQUMsQ0FBNEI7WUFDcEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0RyQixnREFBUyxLQUFPVyxxQkFBcUI7TUFBSSxDQUFDLENBQUM7SUFFM0MsS0FBSyxDQUFDVyxjQUFjLElBQUlDLFFBQVEsR0FBSyxDQUFDO1FBQ3BDLEVBQUUsRUFBRUEsUUFBUSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQyxDQUFDO1lBQzFCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFpQyxrQ0FBRUYsT0FBTztZQUN0RGYsbUJBQW1CLENBQUNlLE9BQU87UUFDN0IsQ0FBQyxNQUFNLENBQUM7WUFDTkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBNEI7UUFDMUMsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUNDLG1CQUFtQixhQUFlLENBQUM7UUFDdkMsRUFBRSxFQUFFdEIsUUFBUSxFQUFFLENBQUM7WUFDYixLQUFLLENBQUNpQixRQUFRLEdBQUcsS0FBSyxDQUFDakIsUUFBUSxDQUFDWSxPQUFPLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQWM7WUFBQyxDQUFDO1lBQ2xFRyxjQUFjLENBQUNDLFFBQVE7UUFDekIsQ0FBQztJQUNILENBQUM7SUFDRHZCLGdEQUFTLEtBQU80QixtQkFBbUI7O0lBRW5DLEtBQUssQ0FBQ0MsY0FBYyxhQUFlLENBQUM7UUFDbEMsRUFBRSxHQUFHdkIsUUFBUSxFQUFFLENBQUM7WUFDZG9CLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLENBQW1EO1lBQ2pFLE1BQU07UUFDUixDQUFDO1FBRUQsS0FBSyxDQUFDUCxRQUFRLEdBQUcsS0FBSyxDQUFDakIsUUFBUSxDQUFDWSxPQUFPLENBQUMsQ0FBQztZQUFDQyxNQUFNLEVBQUUsQ0FBcUI7UUFBQyxDQUFDO1FBQ3pFRyxjQUFjLENBQUNDLFFBQVE7SUFDekIsQ0FBQztJQUVELEtBQUssQ0FBQ1EsS0FBSyxHQUFHLENBQUN6QjtRQUFBQSxRQUFRO1FBQUVHLGdCQUFnQjtRQUFFb0IsY0FBYztJQUFBLENBQUM7SUFFMUQsTUFBTSxzRUFDSDFCLHNCQUFzQixDQUFDNkIsUUFBUTtRQUFDRCxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7a0JBQzFDMUIsUUFBUTs7QUFHZixDQUFDO0FBRU0sU0FBUzRCLGtCQUFrQixHQUFHLENBQUM7SUFDcEMsTUFBTSxDQUFDL0IsaURBQVUsQ0FBQ0Msc0JBQXNCO0FBQzFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2xpZGl0eS10dXRvcmlhbC1zY3JhdGNoLy4vY29tcG9uZW50cy9tZXRhLW1hc2stYWNjb3VudC1wcm92aWRlci5qcz9jN2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTWV0YU1hc2tBY2NvdW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YU1hc2tBY2NvdW50UHJvdmlkZXIoe2NoaWxkcmVufSkge1xuICBjb25zdCBbZXRoZXJldW0sIHNldEV0aGVyZXVtXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtjb25uZWN0ZWRBY2NvdW50LCBzZXRDb25uZWN0ZWRBY2NvdW50XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIFxuICBjb25zdCBzZXRFdGhlcmV1bUZyb21XaW5kb3cgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIChfY2hhaW5JZCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgIGNvbnN0IGNoYWluSWQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9jaGFpbklkJyB9KTtcbiAgICAgIGNvbnN0IHJpbmtlYnlJZCA9ICcweDQnO1xuXG4gICAgICBpZihjaGFpbklkID09PSByaW5rZWJ5SWQpIHtcbiAgICAgICAgc2V0RXRoZXJldW0od2luZG93LmV0aGVyZXVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgdXNlIFJpbmtlYnkgbmV0d29yaycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4gc2V0RXRoZXJldW1Gcm9tV2luZG93KCksIFtdKVxuXG4gIGNvbnN0IGhhbmRsZUFjY291bnRzID0gKGFjY291bnRzKSA9PiB7XG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIGFuIGF1dGhvcml6ZWQgYWNjb3VudDogJywgYWNjb3VudCk7XG4gICAgICBzZXRDb25uZWN0ZWRBY2NvdW50KGFjY291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudHMgeWV0XCIpXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldENvbm5lY3RlZEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xuICAgICAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IGdldENvbm5lY3RlZEFjY291bnQoKSk7XG5cbiAgY29uc3QgY29ubmVjdEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5lcnJvcignRXRoZXJldW0gb2JqZWN0IGlzIHJlcXVpcmVkIHRvIGNvbm5lY3QgYW4gYWNjb3VudCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgIGhhbmRsZUFjY291bnRzKGFjY291bnRzKTtcbiAgfTtcbiAgXG4gIGNvbnN0IHZhbHVlID0ge2V0aGVyZXVtLCBjb25uZWN0ZWRBY2NvdW50LCBjb25uZWN0QWNjb3VudH07XG5cbiAgcmV0dXJuIChcbiAgICA8TWV0YU1hc2tBY2NvdW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTWV0YU1hc2tBY2NvdW50Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWV0YU1hc2tBY2NvdW50KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChNZXRhTWFza0FjY291bnRDb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTWV0YU1hc2tBY2NvdW50Q29udGV4dCIsIk1ldGFNYXNrQWNjb3VudFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJldGhlcmV1bSIsInNldEV0aGVyZXVtIiwidW5kZWZpbmVkIiwiY29ubmVjdGVkQWNjb3VudCIsInNldENvbm5lY3RlZEFjY291bnQiLCJzZXRFdGhlcmV1bUZyb21XaW5kb3ciLCJ3aW5kb3ciLCJvbiIsIl9jaGFpbklkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjaGFpbklkIiwicmVxdWVzdCIsIm1ldGhvZCIsInJpbmtlYnlJZCIsImFsZXJ0IiwiaGFuZGxlQWNjb3VudHMiLCJhY2NvdW50cyIsImxlbmd0aCIsImFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29ubmVjdGVkQWNjb3VudCIsImNvbm5lY3RBY2NvdW50IiwiZXJyb3IiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlTWV0YU1hc2tBY2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meta-mask-account-provider.js\n");

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