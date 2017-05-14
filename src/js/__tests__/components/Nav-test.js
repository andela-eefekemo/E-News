import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Nav from '../../components/layout/Nav';


test('Navbar component', () => {
  
  const userProfile = {
    name:'Eguono',
    email:'john.doe'
  }
  localStorage.setItem('User', userProfile);
  const component = mount(<Nav />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
