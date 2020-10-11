import React from 'react';

import Row from './RowEssentials/Row';
import Utils from '../../../../Utilities';

const { constants: { classNames } } = Utils;

class StaticRowBuilder extends React.Component {
  renderRows = () => {
    const { addTableResizeables, rowData } = this.props;

    return rowData.map(
      ({ key, cells, cellsConfig }) =>
        <Row
          key={key}
          cells={cells}
          cellsConfig={cellsConfig}
          addTableResizeables={addTableResizeables}
        />);
  }

  render() {
    return (
      <tbody className={classNames.TABLE_BODY}>
        {this.renderRows()}
      </tbody>
    );
  }
}

export default StaticRowBuilder;