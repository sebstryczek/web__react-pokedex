import React from 'react';
import { shallow } from 'enzyme';
import LoadingScreen from './LoadingScreen';

describe('LoadingScreen component', () => {
  const component = shallow(<LoadingScreen />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have proper divs structure', () => {
    expect( component.find('div').length ).toEqual( 1 );
    expect( component.find('div').find('div').length ).toEqual( 1 );
  });
});