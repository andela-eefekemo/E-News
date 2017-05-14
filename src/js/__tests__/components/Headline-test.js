import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Headline from '../../pages/Headline';


test('Headline Component', () => {
  const component = mount(<Headline />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
  expect(component.find('#articles').length).toBe(1);
  expect(component.find('#bar').length).toBe(0);
  component.setState({ name: 'bar' });
  expect(component.find('#articles').length).toBe(0);
  expect(component.find('#bar').length).toBe(1);
  expect(component.props().location.query.sorts).toBe(String);
  component.setProps({ bar: "foo" });
  expect(component.props().bar).to.equal("foo");
});
