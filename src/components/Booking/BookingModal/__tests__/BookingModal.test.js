import React from 'react';
import { shallow } from 'enzyme';
import BookingModal from '../BookingModal';

const wrapper = shallow(<BookingModal />);

describe('BookingModal component', () => {
  it('should render the BookingModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
