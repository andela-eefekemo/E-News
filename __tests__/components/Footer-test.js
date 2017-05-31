/* global expect jest test */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../src/js/components/Footer';

jest.dontMock('../../src/js/components/Footer');

describe('Footer Component', () => {
  test('should match the footer snapshot', () => {
    const component = shallow(<Footer />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
