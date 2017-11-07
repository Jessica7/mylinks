import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, shallow } from 'enzyme';
import Icon from './index';

configure({ adapter: new Adapter() });

describe("Icon component", () => {

 test('Should render Icon component', () => {
   shallow (
     <Icon
      type="heart"
      color="white"
      size="medium" />
   );
 })

});
