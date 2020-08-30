import React from 'react';

export default (props) => {
    if (props.success) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">Congratulations</span>
            </div>
        );
    } else {
        return <div data-test="component-congrats"></div>;
    }
};
