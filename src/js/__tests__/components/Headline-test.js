import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer'

import Headline from '../../pages/Headline';
import Articles from '../../components/Articles.jsx';

test('Headline Component', () => {
  const component = toJson(mount(<Headline sorts="top"/>));
  expect(component).toMatchSnapshot();
});

test('Component render a button', () => {

  const component = renderer.create(
    <Articles/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});