import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer'

import ArticleList from '../../pages/ArticleList';
import Articles from '../../components/Articles.jsx';

test('Headline Component', () => {
  const component = toJson(mount(<ArticleList sorts="top"/>));
  expect(component).toMatchSnapshot();
});


test('Testing filter function', () =>{
  const onChange= jest.fn();
  const component = mount(<ArticleList onChange={onChange} />);
  expect(component.props().onChange).toBeDefined();
  const input = component.find('select');
  expect(input).toBeDefined();
  expect(component.state().currentSort).toBe('');
  input.simulate('change', {target: { value: 'top' }});
  expect(component.state().currentSort).toBe('top');
});