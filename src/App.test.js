import React from 'react';
import sinon from 'sinon';
import { shallow, before } from 'enzyme';

import axios from 'axios';
import App from './App';

beforeAll(() => {
  const fakeResponse = {
    data: {
      results: [ 'type1', 'type2', 'type3' ]
    }
  }
  const promise = Promise.resolve(fakeResponse);
  sinon.stub(axios, 'get')
    .withArgs('https://pokeapi.co/api/v2/type')
    .returns(promise);
});

it('renders without crashing', () => {
  const component = shallow(<App/>);
  expect(component.exists()).toEqual(true);
});
