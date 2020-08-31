import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * @Description Create a testing store with imported reducers, middleware and initial state.
 * @param {object} initialState - Initial state for this setup
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
};

/**
 * @Description Return les noeuds qui ont l'attribut data-test="{?}"
 * @param {shallowWrapper} - Enzyme shallow wrapper.
 * @param {string} val - Value de l'attr data-test
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (shallowWrapper, val) => {
    return shallowWrapper.find(`[data-test="${val}"]`);
};

export const checkProp = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
};
