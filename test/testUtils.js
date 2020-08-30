import checkPropTypes from 'check-prop-types';

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
