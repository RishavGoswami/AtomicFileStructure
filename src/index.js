/*
 * @Author: Rishav Goswami
 * @Date: 2019-05-11 12:30:16
 * @Last Modified by: Rishav
 * @Last Modified time: 2019-05-11 12:30:16
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Entry from "./Entry";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Entry />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
