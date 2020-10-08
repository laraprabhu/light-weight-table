import React from 'react';

import Row from './RowEssentials/Row';
import Utils from '../../../../Utilities';

const { constants: { classNames } } = Utils;

class StaticRowBuilder extends React.Component {
  renderRows = () =>
    this.props.rowData.map(({ key, cells }) =>
      <Row key={key} cells={cells} />);

  render() {
    return (
      <tbody className={classNames.TABLE_BODY}>
        {this.renderRows()}
      </tbody>
    );
  }
}

export default StaticRowBuilder;