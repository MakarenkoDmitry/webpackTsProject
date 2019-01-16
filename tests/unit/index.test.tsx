import * as React from 'react';
import { expect } from 'chai';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

class Foo extends React.Component<any, any> {
    render() {
        return <div>Foo</div>;
    }
}

class MyComponent extends React.Component<any, any> {
    render() {
        return <div>Hello, {this.props.whoToGreet} <Foo/></div>;
    }
}

describe('App component testing', function() {
    it('renders welcome message', function() {
        const wrapper = Enzyme.shallow(<MyComponent />);
        expect(wrapper.find(Foo)).to.have.lengthOf(1);
    });
});