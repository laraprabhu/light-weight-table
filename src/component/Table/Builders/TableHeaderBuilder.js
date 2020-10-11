import React from 'react';

import resizeEventHandler from '../Events/TableResizeHandler';
import Utils from '../../../Utilities';

const { constants: { classNames } } = Utils;

class TableHeaderBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.headerRefs = [];
  }

  componentDidMount() {
    this.props.addResizeHandler(
      resizeEventHandler(
        this.headerRefs
      )
    );
  }

  refHandler = (ref) => {
    if (!ref) return;
    this.headerRefs.push(ref);
  };

  renderHeaderCells() {
    const { headers } = this.props;

    return headers.map(({ title, key, fixed }, index) =>
      <th
        className={classNames.TABLE_HEADER_CELL}
        data-fixed={fixed}
        data-index={index}
        ref={this.refHandler}
        key={key}
      >
        {title}
      </th>);
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