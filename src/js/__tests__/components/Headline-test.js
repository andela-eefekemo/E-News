import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer'

import Headline from '../../pages/Headline';
import Articles from '../../components/Articles.jsx';
import Dropdown from '../../components/Dropdown.jsx';




test('Headline Component', () => {
  const component = renderer.create(<Headline sorts="top"/>);
  const tree = component.toJSON();
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

test('Component render a button', () => {
  const source = {
    id: 'BBC',
    name: 'BBC News',
    description: 'BBC world news',
  };
  const onClick = jest.fn();
  const component = renderer.create(
    <Articles
      key={source.id} name={source.name} title={source.description}
      id={source.id} fetchAvailableSort={onClick}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Link onclick should execute the function in the prop', () => {
  const onChange = jest.fn();
  const component = mount(<Headline sorts="tops"/>);
  const link = component.find('select');
  link.simulate('change');
  expect(onChange).toBeCalled();
});