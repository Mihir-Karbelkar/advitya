import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import VerticleNav from "./VerticleNav";
import * as serviceWorker from "./serviceWorker";
import PageScroll from "./PageScroll";
import HamMenu from "./App";
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};
ReactDOM.render(<VerticleNav />, document.getElementById("verticlenav-root"));
ReactDOM.render(<PageScroll />, document.getElementById("pt-main"));
ReactDOM.render(<HamMenu />, document.getElementById("hamburger-root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
