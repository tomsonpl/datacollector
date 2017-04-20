import React, { Component } from 'react';

import Table from './common/Table';
import Loading from './common/Loading';

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
          <Loading />
        }
        <div className="error">{error}</div>
        {data.length > 0 &&
          <div>
            <p className="generated-text">
              {`Generated on 
                ${data[data.length - this.state.value].result.date}
                ${data[data.length - this.state.value].result.time}
              `}
            </p>
            <button
              className="back-button"
              type="button"
              onClick={() => this.increaseValue()}
            />
            <button
              className="next-button"
              type="button"
              onClick={() => this.decreaseValue()}
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
