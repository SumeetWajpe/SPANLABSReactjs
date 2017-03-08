/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="../../typings/modules/react/index.d.ts" />

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Product_1 = __webpack_require__(3);
var ShoppingCart = (function (_super) {
    __extends(ShoppingCart, _super);
    function ShoppingCart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShoppingCart.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Product_1.default, { pName: "Lenovo Laptop" })));
    };
    return ShoppingCart;
}(React.Component));
exports.default = ShoppingCart;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="../../typings/modules/react/index.d.ts" />

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Product = (function (_super) {
    __extends(Product, _super);
    function Product(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { name: _this.props.pName };
        return _this;
    }
    Product.prototype.onClickHandler = function (e) {
        this.setState({ name: 'Lenovo Mobile' });
    };
    Product.prototype.onChangeHandler = function (e) {
        this.setState({ name: e.target.value });
    };
    Product.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        console.log('Should component update called !');
        return (true);
    };
    Product.prototype.componentDidUpdate = function (prevProps) {
        console.log('componentDidUpdate called !');
    };
    Product.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("h1", null,
                " ",
                this.state.name,
                " "),
            React.createElement("input", { type: "text", onChange: function (e) { return _this.onChangeHandler(e); } }),
            React.createElement("input", { type: "button", value: "Change !", onClick: function (e) { return _this.onClickHandler(e); } })));
    };
    return Product;
}(React.Component));
exports.default = Product;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="../typings/modules/react/index.d.ts" />
/// <reference path="../typings/modules/react-dom/index.d.ts" />

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
//import Main from "./components/Main";
var ShoppingCart_1 = __webpack_require__(1);
ReactDOM.render(React.createElement(ShoppingCart_1.default, null), document.getElementById("content"));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map