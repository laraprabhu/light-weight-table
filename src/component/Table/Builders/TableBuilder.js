import React from 'react';
import Utils from '../../../Utilities'

const { constants: { classNames } } = Utils;

class TableBuilder extends React.Component {
  render() {
    return (
      <table className={classNames.TABLE}>
        {this.props.children}
      </table>
    );
  }
}

class Header extends React.Component {
  renderHeaderCells() {
    const { headers } = this.props.children;
    return headers.map(({ title, key }) =>
      <th className={classNames.TABLE_HEADER_CELL} key={key}>
        {title}
      </th>);
  }

  render() {
    return (
      <thead className={classNames.TABLE_HEADER}>
        <tr className={classNames.TABLE_HEADER_ROW}>
          {this.renderHeaderCells()}
        </tr>
      </thead>
    );
  }
}

class Rows extends React.Component {
  renderCells(cells) {
    return cells.map((cellData, i) =>
      <td className={classNames.TABLE_CELL} key={i}>
        {cellData}
      </td>)
  }

  renderRows() {
    const { rowData } = this.props.children;
    return rowData.map(({ key, cells }) =>
      <tr className={classNames.TABLE_ROW} key={key}>
        {this.renderCells(cells)}
      </tr>);
  }

  render() {
    return (<tbody className={classNames.TABLE_BODY}>
      {this.renderRows()}
    </tbody>);
  }
}

TableBuilder.Header = Header;
TableBuilder.Rows = Rows;

export default TableBuilder;