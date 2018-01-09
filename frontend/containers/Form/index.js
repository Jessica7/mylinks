import React from 'react';
import uuidv4 from 'uuid/v4';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from'react-router-dom';
import * as linkActions from 'actions/link';
import LinkForm from '../../components/LinkForm';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.saveLink = this.saveLink.bind(this);
  }

  componentWillMount() {
    if(!this.props.match.params.id) {
      this.props.linkAction.setCurrrentLink(null)
    }
  }

  saveLink(values) {
    let id = uuidv4();
    if (values.id) {  
      this.props.linkAction.editItem(values);
    } else {
      this.props.linkAction.addItem({
        id: id,
        title: values.title,
        url: values.url,
        tags: values.tags
      });
    }
    this.props.history.push('/');
  }

  render() {
    return (
      <LinkForm item={this.props.link.item} onSubmit={this.saveLink} />
    );
  }
}

const mapStateToProps = ({ link }) => {
  return {
    link
  };
};

const mapDispatchToProps = dispatch => {
  return {
    linkAction: bindActionCreators(linkActions, dispatch)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Form));