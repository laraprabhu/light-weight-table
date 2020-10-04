import React from 'react';

class TableBuilder extends React.Component {
  render() {
    return (<table>{this.props.children}</table>)
  }
}

class Header extends React.Component {
  renderHeaderCells() {
    const { headers } = this.props.children;
    return headers.map(({ title, key }) =>
      <th key={key}>{title}</th>);
  }

  render() {
    return (<thead><tr>{this.renderHeaderCells()}</tr></thead>);
  }
}

class Rows extends React.Component {
  renderRows() {
    const { rowData } = this.props.children;
    return rowData.map(({ key, cells }) =>
      <tr data-row-key={key} key={key}>{cells.map((cellData, i) =>
        <td key={i}>{cellData}</td>)}</tr>);
  }

  render() {
    return (<tbody>{this.renderRows()}</tbody>);
  }
}

TableBuilder.Header = Header;
TableBuilder.Rows = Rows;

export default TableBuilder;