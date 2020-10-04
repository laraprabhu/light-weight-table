import React from 'react';
import Serializer from './Serializer';
import TabelBuilder from './Builders';
import Schemas from './Schemas';

import '../../resources/scss/table.scss';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.serialisedHeaderProps = Serializer.header.serialize(props);
    this.serialisedRowProps = Serializer.row.serialize(props);
  }

  render() {
    return (
      <TabelBuilder>
        <TabelBuilder.Header>{this.serialisedHeaderProps}</TabelBuilder.Header>
        <TabelBuilder.Rows>{this.serialisedRowProps}</TabelBuilder.Rows>
      </TabelBuilder>
    );
  }
}

export default Schemas.attachSchemas(Table);