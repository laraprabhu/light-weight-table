import React from 'react';
import Utils from '../../../Utilities';

const { constants: { classNames } } = Utils;

class TableHeaderBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.headerRefs = [];
    this.resizeObserver = new ResizeObserver(this.headerResizeHandler);
  }

  headerResizeHandler = () => {
    if(!this.headerRefs) return;

    this.headerRefs.forEach((ref) => {
      const { fixed, index } = ref.dataset;

      const getNewWidth = (fixed, index) => {
        const isFixedLeft = fixed === 'left';

        let width = 0;
        for (
          let i = isFixedLeft ? 0 : this.headerRefs.length - 1;
          isFixedLeft ? (i < index) : (i > index);
          isFixedLeft ? i++ : i--) {
            width += this.headerRefs[i].clientWidth;
        }

        return width;
      };

      const updatedWidth = getNewWidth(fixed, index);

      ref.style[fixed] = updatedWidth + 'px';
    });
  }

  componentDidMount() {
    this.headerRefs.forEach((ref) => {
      this.resizeObserver.observe(ref);
    });
  }

  refHandler = (config) => (ref) => {
    if (!ref) return;

    const { fixed, index, colLength } = config;

    if (['left', 'right'].includes(fixed)) {
      ref.dataset.fixed = fixed;
      ref.dataset.index = index;
      ref.dataset.colLength = colLength;

      this.headerRefs.push(ref);
    }
  };

  renderHeaderCells() {
    const { headers } = this.props;

    return headers.map(({ title, key, fixed }, index, headers) =>
      <th
        className={classNames.TABLE_HEADER_CELL}
        ref={this.refHandler({ fixed, index, colLength: headers.length })}
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