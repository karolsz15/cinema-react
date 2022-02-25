import React from 'react';
import { shallow } from 'enzyme';
import HomepageHeader from '../HomepageHeader';

let wrapper = shallow(<HomepageHeader />);

describe('HomepageHeader component', () => {
  it('should render the HomepageHeader correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});