/// <reference path="../typings/modules/react/index.d.ts" />
/// <reference path="../typings/modules/react-dom/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";


//import Main from "./components/Main";

import ShoppingCart from './components/ShoppingCart';

ReactDOM.render(
    <ShoppingCart></ShoppingCart>,
    document.getElementById("content")
);