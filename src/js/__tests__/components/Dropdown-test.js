import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dropdown from '../../components/Dropdown';

test('Dropdown component', () => {
  const component = shallow(<Dropdown />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
