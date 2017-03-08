/// <reference path="../../typings/modules/react/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Product = (function (_super) {
    __extends(Product, _super);
    function Product(props) {
        _super.call(this, props);
        this.state = { name: this.props.pName };
    }
    Product.prototype.onClickHandler = function (e) {
        this.setState({ name: 'Lenovo Mobile' });
    };
    Product.prototype.onChangeHandler = function (e) {
        this.setState({ name: e.target.value });
    };
    Product.prototype.render = function () {
        var _this = this;
        return (<div>

                <h1> {this.state.name} </h1>
                <input type="text" onChange={function (e) { return _this.onChangeHandler(e); }}/>

                <input type="button" value="Change !" onClick={function (e) { return _this.onClickHandler(e); }}/>
                </div>);
    };
    return Product;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Product;
