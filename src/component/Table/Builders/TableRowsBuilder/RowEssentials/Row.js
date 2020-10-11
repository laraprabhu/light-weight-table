import React from 'react';

import Cell from './Cell';
import Utils from '../../../../../Utilities';

const { constants: { classNames } } = Utils;

class Rows extends React.Component {
  constructor(props) {
    super(props);
    this.resizeables = [];
  }

  componentDidMount() {
    this.props.addTableResizeables(...this.resizeables);
  }

  refHandler = (fixed, index) => (ref) => {
    if (ref) {
      this.resizeables.push({
        fixed,
        index,
        ref,
      });
    }
  };

  renderCells = (cells, cellsConfig) =>
    cells.map((cellData, i) =>
      <Cell refHandler={this.refHandler(cellsConfig[i].fixed, i)}
        fixed={cellsConfig[i].fixed}
        cellData={cellData}
        key={i} />);

  render() {
    const { cells, cellsConfig, refHandler: rowRefHandler } = this.props;

    return (
      <tr ref={rowRefHandler} className={classNames.TABLE_ROW}>
        {this.renderCells(cells, cellsConfig)}
      </tr>
    );
  }
};

export default Rows;