/* global expect jest test */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Article from '../../src/js/components/Articles';

describe('Article Component', () => {
  test('should match the article snapshot', () => {
    const component = mount(<Article />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  test('should contain the appropriate props', () => {
    const component = mount(<Article />);
    expect(component.node.props.title).toEqual('');
    component.setProps({ title: 'the-next-web' });
    expect(component.node.props.title).toEqual('the-next-web');
  });

  test('props should be in the correct position', () => {
    const component = mount(<Article title="Eguono" description="my name" />);
    const span = component.find('span');
    const p = component.find('p');
    expect(span.text()).toBe('Eguono');
    expect(p.text()).toBe('my name');
  });
});
