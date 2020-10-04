import React from 'react';
import Serializer from './Serializer';
import TabelBuilder from './Builders';
import Schemas from './Schemas';

import '../../resources/scss/table.scss';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.serialisedTableProps = Serializer.table.serialize(props);
    this.serialisedHeaderProps = Serializer.header.serialize(props);
    this.serialisedRowProps = Serializer.row.serialize(props);
  }

  render() {
    return (
      <TabelBuilder {...this.serialisedTableProps}>
        <TabelBuilder.Header {...this.serialisedHeaderProps} />
        <TabelBuilder.Rows {...this.serialisedRowProps} />
      </TabelBuilder>
    );
  }
}

export default Schemas.attachSchemas(Table);