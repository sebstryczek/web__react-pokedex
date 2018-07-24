import React from 'react';
import { shallow } from 'enzyme';
import PokemonsList from './PokemonsList';

describe('PokemonsList component', () => {
  const component = shallow(<PokemonsList />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
});