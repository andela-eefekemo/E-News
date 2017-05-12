import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from '../../pages/Home';


test('Home Component', () => {
  const component = shallow(<Home />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
