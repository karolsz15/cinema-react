import React from 'react';
import { shallow } from 'enzyme';
import CinemaContainer from '../CinemaContainer';

let wrapper = shallow(<CinemaContainer />);

describe('CinemaContainer component', () => {
  it('should render the CinemaContainer correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});