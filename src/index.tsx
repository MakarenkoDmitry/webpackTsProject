import React from "react";
import ReactDOM from "react-dom";
import "../style/index.scss";
import { App } from "./Component/";

const title = "My Minimal React Webpack Babel Setup";
const component = <App title={title} />;

ReactDOM.render(component, document.getElementById("app"));
if (process.env.NODE_ENV === "development") {
    module.hot.accept();
}
