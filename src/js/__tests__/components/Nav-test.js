import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Nav from '../../components/layout/Nav';

jest.dontMock('../../components/layout/Nav');

test('Navbar component', () => {
  const component = mount(<Nav />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
