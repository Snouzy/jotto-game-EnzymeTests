import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { findByTestAttr, checkProp } from '../test/testUtils';

const defaultProps = { success: false };

/**
 * @description - Créer 1 shallowWrapper pour le component en question
 * @param {object} props={} - Component props (specific à ce setup)
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text w hen `success` prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true });
    const component = findByTestAttr(wrapper, 'component-congrats');
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
    const expectedProps = { success: true };
    const propError = checkProp(Congrats, expectedProps);
});
