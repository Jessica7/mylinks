import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const Card = props => {
  const { title, url, id } = props.item;
  return (
    <div className="card-list">
      <div className="category"></div>
      <div className="content">
        <div className="description">
          <span className="title">{title}</span>
          <span className="url">{url}</span>
        </div>
        <div className="actions">
          <div className="favor">
            <Icon type={'fa fa-heart-o heart'} size={'small'} color={'turquoise'} />
          </div>
          <div className="share">
            <Icon type={'fa fa-share-alt share'} size={'small'} color={'turquoise'} />
          </div>
          <Link to={`editar/${id}`} className="edit">
            <Icon type={'fa fa-pencil pencil'} size={'small'} color={'turquoise'} />
          </Link>
          <Link to='#' className="delete" onClick={() => props.onClick(id)} replace>
            <Icon type={'fa fa-trash trash'} size={'small'} color={'turquoise'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
