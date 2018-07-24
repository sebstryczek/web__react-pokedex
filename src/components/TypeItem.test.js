import React from 'react';
import { shallow } from 'enzyme';
import TypeItem from './TypeItem';

describe('TypeItem component', () => {
  const name = "Name";
  const onItemClick = jest.fn();
  const component = shallow(<TypeItem name={name} onItemClick={onItemClick} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one div child', () => {
    expect(component.children('div').length).toEqual(1);
  });

  it('Should have two divs', () => {
    expect(component.find('div').length).toEqual(2);
  });

  it('Should call the onItemClick function when element is clicked', () => {
    expect(onItemClick.mock.calls.length).toEqual(0);
    component.simulate('click');
    expect(onItemClick.mock.calls.length).toEqual(1);
  });
});