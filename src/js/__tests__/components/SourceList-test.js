/* global expect jest test */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import SourceList from '../../components/SourceList';

test('Should Match the Home Component', () => {
  const component = mount(<SourceList />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('States Should be in the Correct Positions', () => {
  const component = mount(<SourceList />);
  expect(component.find('#sources').length).toBe(1);
  expect(component.find('#bar').length).toBe(0);
  component.setState({ name: 'bar' });
  expect(component.find('#sources').length).toBe(0);
  expect(component.find('#bar').length).toBe(1);
});

test('Should Test the Behaviour of the Filter Function', () => {
  const filterSources = jest.fn();
  const component = mount(<SourceList onChange={filterSources} />);
  const input = component.find('input');
  expect(input).toBeDefined();
  expect(component.state().searchTerm).toBe('');
  input.simulate('change', { target: { value: 'the next' } });
  expect(component.state().searchTerm).toBe('the next');
});
