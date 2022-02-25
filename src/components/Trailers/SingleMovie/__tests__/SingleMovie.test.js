import React from 'react';
import { shallow } from 'enzyme';
import SingleMovie from '../SingleMovie';

let wrapper = shallow(<SingleMovie />);

describe('SingleMovie component', () => {
  it('should render the SingleMovie correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});