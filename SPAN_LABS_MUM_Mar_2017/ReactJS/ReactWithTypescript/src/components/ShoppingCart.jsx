/// <reference path="../../typings/modules/react/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Product_1 = require('./Product');
var ShoppingCart = (function (_super) {
    __extends(ShoppingCart, _super);
    function ShoppingCart() {
        _super.apply(this, arguments);
    }
    ShoppingCart.prototype.render = function () {
        return (<div>
                <Product_1.default pName="Lenovo Laptop"/>           
           </div>);
    };
    return ShoppingCart;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShoppingCart;
