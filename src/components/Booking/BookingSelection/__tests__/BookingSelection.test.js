import React from 'react';
import { shallow } from 'enzyme';
import BookingSelection from '../BookingSelection';

const wrapper = shallow(<BookingSelection />);

describe('BookingSelection component', () => {
  it('should render the BookingSelection correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
