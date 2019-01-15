import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {store} from "./Redux/App/store";

import '../style/index.scss';

//temp

import { connect } from "react-redux";
import { setLogin } from "./Redux/App/action/index";

const newComponent = (props) => {
    console.log(props.user);
    return <button onClick={() => props.setUser({id: Date.now(), name:"Dimas"})}>Action</button>
};

let ComponentConnect = connect((store)=>({
    user:store
}), (dispatch)=>({
    setUser: (obj: Object) => dispatch(setLogin(obj))
}))(newComponent);
const title = 'My Minimal React Webpack Babel Setup';

const component = (
    <Provider store={store}>
        <div>
            {title}
            <div>
                <ComponentConnect/>
            </div>
        </div>
    </Provider>
);

ReactDOM.render(
    component,
    document.getElementById('app')
);


if(process.env.NODE_ENV === 'development'){
    module.hot.accept();
}