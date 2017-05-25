/* global expect jest test */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Article from '../../components/Articles';

test('Should match the HeadLine Component', () => {
  const component = mount(<Article />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('Should contain the appropraite props', () => {
  const wrapper = mount(<Article />);
  expect(wrapper.node.props.title).toEqual('');
  wrapper.setProps({ title: 'the-next-web' });
  expect(wrapper.node.props.title).toEqual('the-next-web');
});

test('Props Should Be in The Correct Position', () => {
  const wrapper = mount(<Article title="Eguono" description="my name" />);
  const span = wrapper.find('span');
  const p = wrapper.find('p');
  expect(span.text()).toBe('Eguono');
  expect(p.text()).toBe('my name');
});
