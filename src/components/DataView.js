import React, { Component } from 'react';

import Table from './common/Table';

class DataView extends Component {

  componentWillReceiveProps() {
    this.setState({ value: 1 });
  }

  increaseValue = () => {
    const { value } = this.state;

    if (value < this.props.data.length) {
      this.setState({ value: value + 1 });
    }
  }

  decreaseValue = () => {
    const { value } = this.state;

    if (value > 1) {
      this.setState({ value: value - 1 });
    }
  }

  renderItems = (data) => {
    const { value } = this.state;
    const { grupy } = data[data.length - value].result;

    return grupy.map((object, trKey) => {
      return (
        <tr className="table-row" key={trKey}>
          {Object.values(object).map((val, tdKey) => {
            return (
              <td className="table-data" key={tdKey}>
                {val}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  renderTableRows = (data) => {
    const { grupy } = data[0].result;

    return Object.keys(grupy[0]).map((key) => {
      return (
        <th key={key}>
          {key}
        </th>
      );
    });
  }

  render() {
    const { data, processing: { error, loading } } = this.props;

    return (
      <div className="data-view">
        <button
          className="start-button"
          type="button"
          onClick={this.props.onButtonClick}
        />
        {loading &&
          <div className="loading">Loading...</div>
        }
        <div className="error">{error}</div>
        {data.length > 0 &&
          <div>
            <p>
              {`Generated on 
                ${data[data.length - this.state.value].result.date}
                ${data[data.length - this.state.value].result.time}
              `}
            </p>
            <button
              type="button"
              onClick={() => this.increaseValue()}
              className="back-button"
            />
            <button
              type="button"
              onClick={() => this.decreaseValue()}
              className="next-button"
            />
            <Table
              tableClass="table"
              renderTableRows={this.renderTableRows(data)}
              renderItems={this.renderItems(data)}
            />
          </div>
        }
      </div>
    );
  }
}

export default DataView;
