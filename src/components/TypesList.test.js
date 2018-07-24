import React from 'react';
import { shallow } from 'enzyme';
import TypesList from './TypesList';

describe('TypesList component', () => {
  const component = shallow(<TypesList />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
});