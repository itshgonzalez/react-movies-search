import React from 'react';
import renderer from 'react-test-renderer';

import App from 'App';

describe('App', () => {
    it('render without errors', () => {
        const wrapper = renderer.create(<App />);

        expect(wrapper).toMatchSnapshot();
    });
});
