import React from 'react';

import Header from './TableHeaderBuilder';
import Rows from './TableRowsBuilder';

import Utils from '../../../Utilities';

const { constants: { classNames } } = Utils;

class TableBuilder extends React.Component {
  renderTable() {
    return (
      <table className={classNames.TABLE}>
        {this.props.children}
      </table>
    );
  }

  renderTableAroundWrapper() {
    const { isHeaderFixed } = this.props;

    return (isHeaderFixed) ?
      (<div className={classNames.TABLE_WRAPPER}>
        {this.renderTable()}</div>) :
      this.renderTable();
  }

  render() {
    return (this.renderTableAroundWrapper());
  }
}

TableBuilder.Header = Header;
TableBuilder.Rows = Rows;

export default TableBuilder;