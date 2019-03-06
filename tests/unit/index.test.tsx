import * as React from 'react';
import { expect } from 'chai';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { App, AppState, AppProps } from "../../src/Component/";

Enzyme.configure({ adapter: new Adapter() });

describe('App component testing', function() {
    it('renders welcome message', function() {
        let component: Enzyme.ReactWrapper<AppProps, AppState>;
        const title = "test";
        component = Enzyme.mount(<App title={title}/>);
        const text = component.find(".app").text();
        expect(text).to.have.string(`${title} - v1`);
    });
});
