import React, { ReactNode } from 'react';
import renderer from 'react-test-renderer';

import Corps from '../Corps';

describe('<Corps />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<Corps />).toJSON();
        console.log(tree);
        expect(tree.children.length).toBe(1);
    });
    it('renders correctly', () => {
        const tree = renderer.create(<Corps/>).toJSON();
        expect(tree).toMatchSnapshot();
      });
});