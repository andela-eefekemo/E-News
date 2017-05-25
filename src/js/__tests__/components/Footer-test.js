/* global expect jest test */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../components/Footer';

jest.dontMock('../../components/Footer');

test('Should Match the Footer component', () => {
  const component = shallow(<Footer />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
