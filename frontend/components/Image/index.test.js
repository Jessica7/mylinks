import React from 'react';
import classNames from 'classnames';
import Adapter from 'enzyme-adapter-react-15';
import { configure, shallow } from 'enzyme';
import Image from './index';

configure({ adapter: new Adapter() });

describe("Image component", () => {
  const imageClasses = classNames('image -medium');
  const path = 'image.png';

  test('Should render Image component', () => {
    shallow (<Image src={path} className={imageClasses} />);
  })

  test('Should have correct image path', () => {
    const wrapper = shallow(<Image src={path} className={imageClasses} />);
    expect(wrapper.prop('src')).toEqual('image.png');
  })
});
