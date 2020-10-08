import React from 'react';
import Utils from '../../../Utilities';

const { constants: { classNames } } = Utils;

class Rows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showableData: [],
      isLoading: false,
      originalData: props.rowData,
    };

    this.intersectionObserver =
      new IntersectionObserver(this.observerHandler);
    this.rowsLoaded = 0;
  }

  componentDidMount() {
    this.prepareShowableData();
  }

  observerHandler = ([entry]) => {
    if (entry.isIntersecting) {
      this.showLoader();
      Utils.delayedTrigger(this.prepareShowableData, 1000);
    }
  };

  showLoader() {
    this.setState({ isLoading: true });
  }

  prepareShowableData = () => {
    if (this.state.originalData.length <= this.rowsLoaded) {
      this.intersectionObserver.unobserve(this.lastObserved);
      return;
    }

    this.rowsLoaded += this.props.rowsPerLoad;

    let showableData = this.state.originalData.slice(0, this.rowsLoaded);

    this.setState({ showableData, isLoading: false });
  };

  renderCells(cells) {
    return cells.map((cellData, i) =>
      <td className={classNames.TABLE_CELL} key={i}>
        {cellData}
      </td>);
  }

  renderLoaderCells() {
    const [data] = this.state.showableData;
    const colsLength = data.cells.length;

    let cells = [];
    for (let i = 0; i < colsLength; i++) {
      cells.push(<td className={classNames.TABLE_CELL} key={i}>...</td>);
    }

    return cells;
  }

  renderRows() {
    const { showableData, isLoading } = this.state;

    const renderableData = showableData.map(({ key, cells }, i, array) => {
      return (
        <tr ref={(row) => {
          if (!row || isLoading) return;

          if (this.lastObserved) this.intersectionObserver.unobserve(this.lastObserved);

          if (i === array.length - 1 && i !== this.state.originalData.length - 1) {
            this.intersectionObserver.observe(row);
            this.lastObserved = row;
          }
        }} className={classNames.TABLE_ROW} key={key}>
          {this.renderCells(cells)}
        </tr>
      );
    });

    if (isLoading) {
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

export default Rows;