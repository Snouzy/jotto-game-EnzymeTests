import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProp } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * @description - Créer 1 shallowWrapper pour le component en question
 * @param {object} props={} - Component props (specific à ce setup)
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
    checkProp(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] }); //qd y a pas de mots
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-word');
        expect(component.length).toBe(1); //ca doit qd mm rendre 1 instruction avc lattr component-guessed-word
    });

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () => {});
