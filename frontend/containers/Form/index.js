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

  componentWillUnmount() {
    this.props.linkAction.setCurrrentLink(null);
  }

  saveLink(values) {
    const tags = values.tags.map(t => t.value);
    const newValues = { ...values, tags };
    if (values.id) {
      this.props.linkAction.editItem(newValues);
    } else {
      this.props.linkAction.addItem({ ...newValues, id: uuidv4() });
    }
    this.props.history.push('/');
  }

  render() {
    const btnDescription = this.props.match.params.id ? 'Editar' : 'Cadastrar'; 
    return (
      <LinkForm item={this.props.link.item} onSubmit={this.saveLink}
                btnDescription={btnDescription} />
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