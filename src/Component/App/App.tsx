import * as React from "react";
import { Provider } from "react-redux";
import { store } from "../../Redux/App/store";

import { AppProps, AppPropTypes, AppState } from "./";

export class App extends React.Component<AppProps, AppState> {
    public static readonly propTypes = AppPropTypes;
    constructor(props) {
        super(props);
        this.state = {
            version: 1
        };
    }
    public render() {
        const { title } = this.props;
        const { version } = this.state;
        return (
            <Provider store={store}>
                <div className="app">
                    {title} - v{version}
                </div>
            </Provider>
        );
    }
}

export default App;
