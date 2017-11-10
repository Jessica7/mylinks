import React from 'react';
import { render } from 'react-dom';
import { Link, MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-15';
import { configure, shallow } from 'enzyme';
import ProfilePicture from './index';
import Image from '../Image';
import Icon from '../Icon';

configure({ adapter: new Adapter() });

describe("Profile Picture component", () => {

  const wrapper = shallow(<ProfilePicture />);

  test('Should have the correct href', () => {
    const node = document.createElement('div');

    render((
      <MemoryRouter>
        <Link to={'/settings'}>link</Link>
      </MemoryRouter>
    ), node)

    const href = node.querySelector('a').getAttribute('href')
    expect(href).toEqual('/settings')
  });

  test('Should render Image component', () => {
    expect(wrapper.find(Image)).toHaveLength(1);
  });

  test('Should render Icon component', () => {
     expect(wrapper.find(Icon)).toHaveLength(1);
  });

});
