import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from '../../pages/Home';


test('Home Component', () => {
  const component = mount(<Home />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
  expect(component.find('#sources').length).toBe(1);
  expect(component.find('#bar').length).toBe(0);
  component.setState({ name: 'bar' });
  expect(component.find('#sources').length).toBe(0);
  expect(component.find('#bar').length).toBe(1);
});
