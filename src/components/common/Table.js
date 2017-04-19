import React from 'react';

const Table = ({ tableClass, renderTableRows, renderItems }) => {
  return (
    <table className={tableClass}>
      <thead>
        <tr>
          {renderTableRows}
        </tr>
      </thead>
      <tbody>
        {renderItems}
      </tbody>
    </table>
  );
};

export default Table;
