import React from 'react';

import Utils from '../../../../../Utilities';

const { constants: { classNames } } = Utils;

class Cell extends React.Component {
  render() {
    const { fixed, cellData, refHandler } = this.props;

    return (
      <td fixed={fixed} ref={refHandler} className={classNames.TABLE_CELL}>
        {cellData}
      </td>
    );
  }
};

export default Cell;