import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, shallow } from 'enzyme';
import Button from './index';

configure({ adapter: new Adapter() });

describe("Component Button", () => {
  const onClick = jest.fn();

  const wrapper = shallow(
    <Button onClick={onClick}>{'Cadastrar'}</Button>
  );

  test('Should simulate a click on the button', () => {
    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalled();
  })

});
