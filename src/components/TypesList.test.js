import React from 'react';
import { shallow, mount } from 'enzyme';
import TypesList from './TypesList';

describe('TypesList component', () => {
  const types = ['type1', 'type2', 'type3'];
  const component = mount(<TypesList types={types} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have the same number of children as the number of items that have been passed', () => {
    expect(component.find('.type-item').length).toEqual(types.length);
  });
});