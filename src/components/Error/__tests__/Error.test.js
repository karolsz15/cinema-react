import React from 'react';
import { shallow } from 'enzyme';
import Error from '../Error';

const wrapper = shallow(<Error />);

describe('Error component', () => {
  it('should render the Error correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
