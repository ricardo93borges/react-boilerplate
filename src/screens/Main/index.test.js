import React from 'react';
import { shallow } from 'enzyme';
import Main from './index';

describe('Main test', () => {
  it('should render without crashing', () => {
    shallow(<Main />);
  });
});
