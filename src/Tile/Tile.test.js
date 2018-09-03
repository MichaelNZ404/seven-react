import React from 'react';
import { shallow, mount, render } from 'enzyme';

import {Banner, Tile} from './Tile.js'

test('Banner Matches snapshot', () => {
    const wrapper = render(<Banner showName="test" />);
    expect(wrapper).toMatchSnapshot();
});

test('Tile Matches snapshot', () => {
    const wrapper = render(<Tile />);
    expect(wrapper).toMatchSnapshot();
});

test('Banner title has correct length', () => {
    const wrapper = render(<Banner showName="test" />);
    expect(wrapper.find('.show-name').text()).toHaveLength(4);
});