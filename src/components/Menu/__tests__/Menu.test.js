import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../Menu';

let wrapper = shallow(<Menu />);

describe('Menu component', () => {
  it('should render the Menu correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});