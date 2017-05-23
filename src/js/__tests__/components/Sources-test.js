import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Sources from '../../components/Sources';

test('Sources Component', () => {
  const component = mount(<Sources />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('Testing Props', () => {
  const wrapper = mount(<Sources />);
  expect(wrapper.node.props.name).toEqual('');
  wrapper.setProps({ name: 'the-next-web' });
  expect(wrapper.node.props.name).toEqual('the-next-web');
});

test('Testing onClick Function', () => {
  const handleQueryValue = jest.fn();
  const wrapper = mount(<Sources onClick={handleQueryValue} />);
  const button = wrapper.find('button');
  expect(handleQueryValue).not.toBeCalled();
  button.simulate('click');
  expect(handleQueryValue).toBeCalled();
});

test('Testing props in proper position', () => {
  const wrapper = mount(<Sources name="Eguono" description="my name" />)
  const h5 = wrapper.find('h5');
  const p = wrapper.find('p');
  expect(h5.text()).toBe('Eguono');
  expect(p.text()).toBe("my name")
});
