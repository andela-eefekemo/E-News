/* global expect jest test*/
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Nav from '../../components/Nav';

test('Should Match the Navbar component', () => {
  const component = mount(<Nav />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
