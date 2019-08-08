/* eslint-disable no-undef */
import React from 'react';
import { shallow } from '../setupTests';

import App from './App';

describe('App test', () => {
  it('Should render app', () => {
    const app = shallow(<App />);

    expect(app.exists()).toBeTruthy();
  });
});
