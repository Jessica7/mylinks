import React from 'react';
import Card from '../Card';

const List = ({ items, onEdit, onRemove }) => {
  return (
    <div className="list">
      {
        items.map((item, index) =>
          <Card item={item} key={index} onRemove={onRemove} onEdit={onEdit} />)
      }
    </div>
  );
};

export default List;
