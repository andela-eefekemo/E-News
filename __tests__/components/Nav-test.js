/* global expect jest test*/
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Nav from '../../src/js/components/Nav';

describe('Nav Component', () => {
  test('should match the Nav snapshot', () => {
    const component = mount(<Nav />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
