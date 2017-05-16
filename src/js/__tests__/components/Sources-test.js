import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Sources from '../../components/Sources';

test('Sources Component', () => {
  const component = mount(<Sources />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
