import React, { Component } from 'react';
import { connect } from 'react-redux';

import DataView from '../components/DataView';

class DataCollector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false
    };
  }

  render() {
    return (
      <DataView
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
    // processing: state.processing.sources,
    // error: state.error.sources
  };
};

const actions = {
};

export default connect(mapStateToProps, actions)(DataCollector);
