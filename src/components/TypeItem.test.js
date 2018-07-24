import React from 'react';
import { shallow } from 'enzyme';
import TypeItem from './TypeItem';

describe('TypeItem component', () => {
  const component = shallow(<TypeItem />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
});