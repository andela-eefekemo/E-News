import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

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

test('Testing filter function', () =>{
  const filterSources = jest.fn();
  const component = mount(<SourceList onChange={filterSources} />);
  const input = component.find('input');
  expect(input).toBeDefined();
  expect(component.state().searchTerm).toBe('');
  input.simulate('change', {target: { value: 'the next' }});
  expect(component.state().searchTerm).toBe('the next');
});