import React from 'react';
import Card from '../Card';

const List = ({ items, onClick }) => {
  return (
    <div className="list">
      {
        items.map((item, index) =>
          <Card item={item} key={index} onClick={onClick} />)
      }
    </div>
  );
};

export default List;
