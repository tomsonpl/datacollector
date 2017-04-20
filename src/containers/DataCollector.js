import React from 'react';
import { connect } from 'react-redux';

import { loadData } from '../actions';

import DataView from '../components/DataView';

const DataCollector = (props) => {
  return (
    <div className="data-collector">
      <DataView
        {...props}
        onButtonClick={props.loadData}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    processing: state.processing,
    data: [...state.data]
  };
};

const actions = {
  loadData
};

export default connect(mapStateToProps, actions)(DataCollector);
