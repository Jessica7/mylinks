import React from 'react';
import uuidv4 from 'uuid/v4';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as linkActions from 'actions/link';
import LinkForm from '../../components/LinkForm';

class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LinkForm item={this.props.link.item} onSubmit={() => {}} />
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
    linkAction: bindActionCreators(linkActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
