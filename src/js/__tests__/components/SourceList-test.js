import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import SourceList from '../../pages/SourceList';
import Sources from '../../components/Sources';


test('Home Component', () => {
  const component = mount(<SourceList />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
  expect(component.find('#sources').length).toBe(1);
  expect(component.find('#bar').length).toBe(0);
  component.setState({ name: 'bar' });
  expect(component.find('#sources').length).toBe(0);
  expect(component.find('#bar').length).toBe(1);
});


test('Testing Props', () => {
  // const wrapper = mount(<SourceList />);
  // expect(wrapper.state('sources')).toEqual([]);
  // wrapper.setState({ sources: 'the-next-web' });
  // expect(wrapper.state('sources')).toEqual('the-next-web');
});