import React from 'react';

import TableHeaderBuilder from './TableHeaderBuilder';
import TableRowsBuilder from './TableRowsBuilder';

import resizeEventHandler from '../Events/TableResizeHandler';
import Utils from '../../../Utilities';

const { constants: { classNames } } = Utils;

class TableBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.tableReference = null;
    this.columnWidths = []
    this.tableHeaderReferences = [];
    this.tableResizables = [];

    this.tableResizeObserver =
      new ResizeObserver(this.tableResizeHandler);
  }

  componentDidMount() {
    this.tableResizeObserver.observe(
      this.tableReference
    );
  }

  componentWillUnmount() {
    this.tableResizeObserver.unobserve(
      this.tableReference
    );
  }

  tableResizeHandler = () => {
    this.columnWidths = this.tableHeaderReferences
      .map((ref) => ref.clientWidth)
    this.tableResizables
      .forEach((resizable) =>
        resizeEventHandler(resizable, this.columnWidths));
  }

  addTableHeaderReference = (...reference) => {
    this.tableHeaderReferences.push(...reference);
  }

  addTableResizeables = (...resizable) => {
    this.tableResizables.push(...resizable);
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
          addTableHeaderReference: this.addTableHeaderReference,
          addTableResizeables: this.addTableResizeables,
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
    const { isHeaderFixed } = this.props;
    const collatedClassNames = `${classNames.TABLE_WRAPPER} ` +
      `${isHeaderFixed ? classNames.TABLE_HEADER_ROW_FIXED : ''}`;

    return (
      <div className={collatedClassNames}>
        {this.renderTable()}
      </div>
    );
  }
}

TableBuilder.Header = TableHeaderBuilder;
TableBuilder.Rows = TableRowsBuilder;

export default TableBuilder;