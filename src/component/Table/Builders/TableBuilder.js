import React from 'react';

class TableBuilder extends React.Component {
  render() {
    return (<table>{this.props.children}</table>)
  }
}

class Header extends React.Component {
  render() {
    return (<tr><th>Test</th><th>Run</th></tr>);
  }
}

class Rows extends React.Component {
  render() {
    return (<tr><td>test</td><td>record</td></tr>);
  }
}

TableBuilder.Header = Header;
TableBuilder.Rows = Rows;

export default TableBuilder;