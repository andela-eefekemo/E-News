/* global expect test */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dropdown from '../../src/js/components/Dropdown';

describe('Dropdown Component', () => {
  test('should match the Dropdown snapshot', () => {
    const component = shallow(<Dropdown />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
