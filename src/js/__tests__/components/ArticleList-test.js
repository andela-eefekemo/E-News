/* global expect jest test */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import ArticleList from '../../components/ArticleList';

test('Should match the HeadLine Component', () => {
  const component = toJson(mount(<ArticleList sorts="top" />));
  expect(component).toMatchSnapshot();
});

test('Onchange Function Should Behave In Correct Manner', () => {
  const onChange = jest.fn();
  const component = mount(<ArticleList onChange={onChange} />);
  expect(component.props().onChange).toBeDefined();
  const input = component.find('select');
  expect(input).toBeDefined();
  expect(component.state().currentSort).toBe('');
  input.simulate('change', { target: { value: 'top' } });
  expect(component.state().currentSort).toBe('top');
});
