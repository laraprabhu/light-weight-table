import React from 'react';

import Utils from '../../../Utilities';

const { constants: { classNames } } = Utils;

class TableHeaderBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.headerReferences = [];
    this.resizeables = [];
  }

  componentDidMount() {
    this.props.addTableHeaderReference(...this.headerReferences);
    this.props.addTableResizeables(...this.resizeables);
  }

  refHandler = (fixed, index) => (ref) => {
    if (ref) {
      this.headerReferences.push(ref);
      this.resizeables.push({ fixed, ref, index });
    }
  };

  renderHeaderCells() {
    const { headers } = this.props;

    return headers.map(({ title, key, fixed }, index) =>
      <th
        className={classNames.TABLE_HEADER_CELL}
        ref={this.refHandler(fixed, index)}
        fixed={fixed}
        key={key}
      >
        {title}
      </th>
    );
  }

  render() {
    return (
      <thead className={classNames.TABLE_HEADER}>
        <tr className={classNames.TABLE_HEADER_ROW}>
          {this.renderHeaderCells()}
        </tr>
      </thead>
    );
  }
}

export default TableHeaderBuilder;