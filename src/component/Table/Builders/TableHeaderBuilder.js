import React from 'react';
import Utils from '../../../Utilities';

const { constants: { classNames } } = Utils;

class Header extends React.Component {
  renderHeaderCells() {
    const { headers } = this.props;

    return headers.map(({ title, key }) =>
      <th className={classNames.TABLE_HEADER_CELL} key={key}>
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

export default Header;