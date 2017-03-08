/// <reference path="../../typings/modules/react/index.d.ts" />


import * as React from "react";
import Product  from './Product';

export default class ShoppingCart extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Product pName="Lenovo Laptop" />           
           </div>
        );
    }


}