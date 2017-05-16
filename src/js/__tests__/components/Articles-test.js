import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Article from '../../components/Articles';


test('Article Component', () => {
  const component = shallow(<Article />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

