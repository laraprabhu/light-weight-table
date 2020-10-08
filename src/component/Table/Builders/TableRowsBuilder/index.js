import React from 'react';

import StaticRowBuilder from './StaticRowBuilder';
import StaticRowBuilderWithLazyLoad from './StaticRowBuilderWithLazyLoad';


class TableRowBuilder extends React.Component {
  render() {
    const { rowsPerLoad } = this.props;

    return rowsPerLoad ? 
      <StaticRowBuilderWithLazyLoad {...this.props} /> : 
        <StaticRowBuilder {...this.props} />;
  }
}

export default TableRowBuilder;