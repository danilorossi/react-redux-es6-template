import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import myReduxActions from '';

class {{name}} extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div></div>
    );
  }
}

{{name}}.propTypes = {
  // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(myReduxActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)({{name}});
