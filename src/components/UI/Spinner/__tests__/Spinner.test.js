import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';

let wrapper = shallow(<Spinner />);

describe('Spinner component', () => {
  it('should render the Spinner correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});