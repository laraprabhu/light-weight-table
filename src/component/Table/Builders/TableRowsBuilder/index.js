import React from 'react';

import StaticRowBuilder from './StaticRowBuilder';
import StaticRowBuilderWithLazyLoad from './StaticRowBuilderWithLazyLoad';
import DynamicRowBuilderWithLazyLoad from './DynamicRowBuilderWithLazyLoad';


class TableRowBuilder extends React.Component {
  render() {
    const { rowsPerLoad, rowDataUrl } = this.props;

    debugger;

    if (rowDataUrl) {
      return <DynamicRowBuilderWithLazyLoad {...this.props} />;
    } else if (rowsPerLoad) {
      return <StaticRowBuilderWithLazyLoad {...this.props} />;
    } else {
      return <StaticRowBuilder {...this.props} />;
    }
  }
}

export default TableRowBuilder;