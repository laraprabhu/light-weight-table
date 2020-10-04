import React from 'react';

import '../../resources/scss/table.scss';

class Table extends React.Component {
  render() {
    return (
      <h1>{this.props.label}</h1>
    );
  }
}

export default Table;