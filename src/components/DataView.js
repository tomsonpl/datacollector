import React, { Component } from 'react';

class DataView extends Component {
  constructor(props) {
    super(props);

    this.state = { id: null };
  }

  render() {
    return (
      <div className="row">
        <p> HEY </p>
        <input
          type="button"
          onClick={this.props.onButtonClick}
          value="button"
        />
      </div>
    );
  }
}

export default DataView;
