import React from 'react';
import { shallow } from 'enzyme';
import OneMovie from '../OneMovie';

const wrapper = shallow(<OneMovie />);

describe('OneMovie component', () => {
  it('should render the OneMovie correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
