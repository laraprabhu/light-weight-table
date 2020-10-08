import React from 'react';

import Cell from './Cell';
import Utils from '../../../../../Utilities';

const { constants: { classNames } } = Utils;

const renderCells = (cells) =>
  cells.map((cellData, i) =>
    <Cell key={i} cellData={cellData} />);

const Rows = (props) => {
  const { cells } = props;

  return (
    <tr className={classNames.TABLE_ROW}>
      {renderCells(cells)}
    </tr>
  );
};

export default Rows;