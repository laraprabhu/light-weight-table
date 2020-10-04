import React from 'react';
import Schemas from './schemas'

import '../../resources/scss/table.scss';

class Table extends React.Component {
  render() {
    return (
      <h1>{this.props.label}</h1>
    );
  }
}

export default Schemas.attachSchemas(Table);