import React from 'react';

import TableHeaderBuilder from './TableHeaderBuilder';
import TableRowsBuilder from './TableRowsBuilder';

import Utils from '../../../Utilities';

const { constants: { classNames } } = Utils;

class TableBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.tableReference = null;
    this.tableResizeHandlers = [];
    this.tableResizeObserver =
      new ResizeObserver(
        this.tableResizeHandler()
      );
  }

  tableResizeHandler = () => () => {
    this.tableResizeHandlers.forEach(
      (resizeHandler) => resizeHandler()
    );
  }

  addResizeHandler = (handler) => {
    this.tableResizeHandlers.push(handler);
  }

  componentDidMount() {
    this.tableResizeObserver.observe(
      this.tableReference
    );
  }

  renderChildrenWithProps(newProps) {
    return this.props.children.map((child, i) =>
      React.cloneElement(child, { ...newProps, key: i }))
  }

  renderTable() {
    return (
      <table
        ref={(ref) => this.tableReference = ref}
        className={classNames.TABLE}>
        {this.renderChildrenWithProps({
          addResizeHandler:
            this.addResizeHandler
        })}
      </table>
    );
  }

  renderTableAroundWrapper() {
    const { isHeaderFixed } = this.props;

    return (isHeaderFixed) ?
      (<div className={classNames.TABLE_WRAPPER}>
        {this.renderTable()}
      </div>) :
      this.renderTable();
  }

  render() {
    return (this.renderTableAroundWrapper());
  }
}

TableBuilder.Header = TableHeaderBuilder;
TableBuilder.Rows = TableRowsBuilder;

export default TableBuilder;