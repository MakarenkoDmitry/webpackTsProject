import React from "react";
import ReactDOM from "react-dom";
import "../style/index.scss";

const title = "My Minimal React Webpack Babel Setup";
const component = <div>{title}</div>;
ReactDOM.render(component, document.getElementById("app"));
if (process.env.NODE_ENV === "development") {
    module.hot.accept();
}
