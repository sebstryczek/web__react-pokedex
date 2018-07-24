import React from 'react';
import { shallow } from 'enzyme';
import PokemonItem from './PokemonItem';

describe('PokemonItem component', () => {
  const component = shallow(<PokemonItem />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
});