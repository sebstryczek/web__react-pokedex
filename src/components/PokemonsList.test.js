import React from 'react';
import { shallow, mount } from 'enzyme';
import PokemonsList from './PokemonsList';

describe('PokemonsList component', () => {
  const type = 'Type';
  const names = ['name1', 'name2', 'name3'];
  const onClose = jest.fn();
  const component = mount(<PokemonsList type={type} names={names} onClose={onClose} />);
  
  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should render proper title', () => {
    expect(component.find('h2').exists()).toEqual(true);
    expect(component.find('h2').text()).toEqual(type);
  });

  it('Should have one button', () => {
    expect(component.find('button').length).toEqual(1);
  });

  it('Should call the onClose function when button clicked', () => {
    expect(onClose.mock.calls.length).toEqual(0);
    component.find('button').simulate('click');
    expect(onClose.mock.calls.length).toEqual(1);
  });

  it('Should have the same number of children as the number of items that have been passed', () => {
    expect(component.find('.pokemon-item').length).toEqual(names.length);
  });
});