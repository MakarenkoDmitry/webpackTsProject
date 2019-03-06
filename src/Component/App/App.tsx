import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../../Redux/App/store";

import { AppProps, AppPropTypes } from "./";

export class App extends Component<AppProps> {
    public static readonly propTypes = AppPropTypes;

    public render() {
        const { title } = this.props;
        return (
            <Provider store={store}>
                <div>{title}</div>
            </Provider>
        );
    }
}

export default App;
