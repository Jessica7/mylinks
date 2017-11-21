import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as linkActions from 'actions/link';
import List from '../../components/List';
import DefaultView from '../../components/DefaultView';

class Home extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render () {
    return (
      <div className="home">
        {this.props.link.items.length > 0
          ? <List items={this.props.link.items} />
          : <div className="container-defaultView">
              <DefaultView text="Not found" color="grey" size="small" />
            </div>
        }
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
