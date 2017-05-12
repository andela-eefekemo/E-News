import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Headline from '../../pages/Headline';


test('Headline Component', () => {
  const component = shallow(<Headline />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
