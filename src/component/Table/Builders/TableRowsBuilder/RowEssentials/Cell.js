import React from 'react';

import Utils from '../../../../../Utilities';

const { constants: { classNames } } = Utils;

const Cell = (props) => {
  const { cellData } = props;

  return (
    <td className={classNames.TABLE_CELL}>
      {cellData}
    </td>
  );
};

export default Cell;