import React from 'react';

import Row from './RowEssentials/Row';
import Utils from '../../../../Utilities';

const { constants: { classNames } } = Utils;

class StaticRowBuilderWithLazyLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.originalData = props.rowData;
    this.state.showableData = [];
    this.state.isLoading = false;

    this.intersectionObserver = this.prepareObserver();
    this.rowsLoaded = 0;
  }

  componentDidMount() {
    this.prepareAndSetShowableData();
  }

  prepareObserver = () => {
    return new IntersectionObserver(this.observerHandler);
  };

  observerHandler = ([entry]) => {
    if (entry.isIntersecting) {
      this.showLoader();
      Utils.delayedTrigger(
        this.prepareAndSetShowableData, 1000
      );
    }
  };

  showLoader = () => {
    this.setState({ isLoading: true });
  }

  hideLoader = () => {
    this.setState({ isLoading: false });
  }

  updateRowsLoaded = () => {
    this.rowsLoaded += this.props.rowsPerLoad;
  }

  setShowableData = () => {
    this.setState({ showableData: this.state.originalData.slice(0, this.rowsLoaded) });
  }

  prepareAndSetShowableData = () => {
    if (this.state.originalData.length <= this.rowsLoaded) {
      this.intersectionObserver.unobserve(this.lastObserved);
      return;
    }

    this.updateRowsLoaded();
    this.setShowableData();
    this.hideLoader();
  };

  generateLoaderRows = () => {
    const [data] = this.state.showableData;
    const colsLength = data.cells.length;

    let rows = [];
    let cellVal = new Array(colsLength).fill('...');

    rows.push(<Row key={1} cells={cellVal} />);
    rows.push(<Row key={2} cells={cellVal} />);
    rows.push(<Row key={3} cells={cellVal} />);

    return rows;
  };

  collectAndObserveRowRef = (i, array) => (row) => {
    if (!row || this.state.isLoading) return;

    if (this.lastObserved) this.intersectionObserver.unobserve(this.lastObserved);

    if (i === array.length - 1 && i !== this.state.originalData.length - 1) {
      this.intersectionObserver.observe(row);
      this.lastObserved = row;
    }
  }

  renderRows() {
    const { showableData, isLoading } = this.state;

    const renderableData = showableData.map(({ key, cells }, i, array) =>
      <Row
        refHandler={this.collectAndObserveRowRef(i, array)}
        cells={cells}
        key={key}
      />);

    return isLoading ? [renderableData, ...this.generateLoaderRows()] : renderableData;
  }

  render() {
    return (
      <tbody className={classNames.TABLE_BODY}>
        {this.renderRows()}
      </tbody>
    );
  }
}

export default StaticRowBuilderWithLazyLoad;