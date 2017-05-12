import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../components/layout/Footer';

jest.dontMock('../../components/layout/Footer');

test('Footer component', () => {
  const component = shallow(<Footer />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
