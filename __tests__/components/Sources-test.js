/* global expect jest test */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Sources from '../../src/js/components/Sources';

describe('Sources Component', () => {
  test('should match the sources snapshot', () => {
    const component = mount(<Sources />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  test('should contain the appropraite props', () => {
    const wrapper = mount(<Sources />);
    expect(wrapper.node.props.name).toEqual('');
    wrapper.setProps({ name: 'the-next-web' });
    expect(wrapper.node.props.name).toEqual('the-next-web');
  });

  test('props should be in correct positions', () => {
    const wrapper = mount(<Sources name="Eguono" description="my name" />);
    const h5 = wrapper.find('h5');
    const p = wrapper.find('p');
    expect(h5.text()).toBe('Eguono');
    expect(p.text()).toBe('my name');
  });
});
