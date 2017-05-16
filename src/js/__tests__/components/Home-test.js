import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import Home from '../../pages/Home';
import Sources from '../../components/Sources';


test('Home Component', () => {
  const component = mount(<Home />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
  expect(component.find('#sources').length).toBe(1);
  expect(component.find('#bar').length).toBe(0);
  component.setState({ name: 'bar' });
  expect(component.find('#sources').length).toBe(0);
  expect(component.find('#bar').length).toBe(1);
});

test('Component render a button', () => {
  const source = {
    id: 'BBC',
    name: 'BBC News',
    description: 'BBC world news',
  };
  const onClick = jest.fn();
  const component = renderer.create(
    <Sources
      key={source.id} name={source.name} title={source.description}
      id={source.id} fetchAvailableSort={onClick}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});