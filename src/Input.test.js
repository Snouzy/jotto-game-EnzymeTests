import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive();
};

describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders component without error', () => {});

        test('renders input box', () => {});

        test('renders the submit button', () => {});
    });

    describe('word has been guessed', () => {
        test('renders component without error', () => {});

        test('renders NOT input box', () => {});

        test('renders NOT the submit button', () => {});
    });
});

describe('update the state', () => {});
