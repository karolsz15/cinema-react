import React from 'react';
import { shallow } from 'enzyme';
import MovieModal from '../MovieModal';

const wrapper = shallow(<MovieModal />);

describe('MovieModal component', () => {
  it('should render the MovieModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
