import React from 'react';
import { shallow } from 'enzyme';
import AutoPlay from '../AutoPlay';

let wrapper = shallow(<AutoPlay />);

describe('AutoPlay component', () => {
  it('should render the AutoPlay correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});