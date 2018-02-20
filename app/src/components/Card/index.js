import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const iconLink = require('../../assets/images/icon-link.png');
const iconRedirect = require('../../assets/images/arrow-redirect.png');

class Card extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectUrl = this.redirectUrl.bind(this);
  }

  redirectUrl() {
    this.props.history.push(this.props.item.url);
  }
  render() {
    const { onRemove, onEdit } = this.props;
    const { title, id } = this.props.item;
    return (
      <div className="card-list">
        <div className="content">
          <img className="icon" src={iconLink} width="50" height="50" alt="" />
          <div className="description">
            <span className="title">{title}</span>
            <span className="url">
              <Link to={this.props.item.url} onClick={this.redirectUrl} target="_blank">
                <img src={iconRedirect} alt="" />
              </Link>
            </span>
          </div>
          <div className="actions">
            <div className="favor">
              <Icon type={'fa fa-heart-o heart'} size={'small'} color={'turquoise'} />
            </div>
            <div className="share">
              <Icon type={'fa fa-share-alt share'} size={'small'} color={'turquoise'} />
            </div>
            <Link to={`edit/${id}`} onClick={() => onEdit(id)}  className="edit">
              <Icon type={'fa fa-pencil pencil'} size={'small'} color={'turquoise'} />
            </Link>
            <Link to='#' className="delete" onClick={() => onRemove(id)} replace>
              <Icon type={'fa fa-trash trash'} size={'small'} color={'turquoise'} />
            </Link>
          </div>
        </div>

      </div>
    );
  }
};

export default Card;
