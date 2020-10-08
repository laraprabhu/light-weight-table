import React from 'react';
import Utils from '../../../Utilities';

const { constants: { classNames } } = Utils;

class TableBuilder extends React.Component {
  renderTable() {
    return (
      <table className={classNames.TABLE}>
        {this.props.children}
      </table>
    );
  }

  renderTableAroundWrapper() {
    const { isHeaderFixed } = this.props;

    return (isHeaderFixed) ?
      (<div className={classNames.TABLE_WRAPPER}>
        {this.renderTable()}</div>) :
      this.renderTable();
  }

  render() {
    return (this.renderTableAroundWrapper());
  }
}

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

class Rows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.originalData = props.rowData;
    this.state.isLoading = false;
    this.state.showableData = [];

    this.rowsLoaded = 0;
    
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.showLoader();

        setTimeout(() => { this.prepareShowableData(); }, 1000);
      }
    });
  }

  componentDidMount() {
    this.prepareShowableData();
  }

  showLoader() {
    this.setState({ isLoading: true });
  }

  prepareShowableData() {
    if(this.state.originalData.length <= this.rowsLoaded) {
      this.intersectionObserver.unobserve(this.lastObserved);
      return;
    }

    this.rowsLoaded += this.props.rowsPerLoad;

    let showableData = this.state.originalData.slice(0, this.rowsLoaded);

    this.setState({ showableData, isLoading: false });
  }

  renderCells(cells) {
    return cells.map((cellData, i) =>
      <td className={classNames.TABLE_CELL} key={i}>
        {cellData}
      </td>)
  }

  renderLoaderCells() {
    const [data] = this.state.showableData;
    const colsLength = data.cells.length;

    let cells = [];
    for(let i=0; i<colsLength; i++) {
      cells.push(<td className={classNames.TABLE_CELL} key={i}>...</td>);
    }

    return cells;
  }

  renderRows() {
    const { showableData, isLoading } = this.state;

    const renderableData = showableData.map(({ key, cells }, i, array) => {
      return (
        <tr ref={(row) => {
          if(!row || isLoading) return;

          if(this.lastObserved) this.intersectionObserver.unobserve(this.lastObserved);

          if(i === array.length - 1 && i !== this.state.originalData.length - 1) {
            this.intersectionObserver.observe(row);
            this.lastObserved = row;
          }
        }} className={classNames.TABLE_ROW} key={key}>
          {this.renderCells(cells)}
        </tr>
      );
    });

    if(isLoading) {
      renderableData.push(<tr key="loader-1" className={classNames.TABLE_ROW}>{this.renderLoaderCells()}</tr>);
      renderableData.push(<tr key="loader-2" className={classNames.TABLE_ROW}>{this.renderLoaderCells()}</tr>);
      renderableData.push(<tr key="loader-3" className={classNames.TABLE_ROW}>{this.renderLoaderCells()}</tr>);
    };

    return renderableData;
  }

  render() {
    return (<tbody className={classNames.TABLE_BODY}>
      {this.renderRows()}
    </tbody>);
  }
}

TableBuilder.Header = Header;
TableBuilder.Rows = Rows;

export default TableBuilder;