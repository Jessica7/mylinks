import React from 'react';
import Image from '../Image';
import classNames from 'classnames';
import img from '../../assets/images/default-image.jpg';

const DefaultView = ({ text, color, size }) => {
  const defaultViewClassNames = classNames(`message -${size} -${color}`);
  return (
    <div className="wrapper-defaultView">
      <Image src={img}
        type={'square'}
        size={'large'} />
      <span className={defaultViewClassNames}>{text}</span>
    </div>
  );
}

export default DefaultView;
