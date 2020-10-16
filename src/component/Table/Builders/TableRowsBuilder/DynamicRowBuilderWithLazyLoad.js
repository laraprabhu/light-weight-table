import React from 'react';

import Row from './RowEssentials/Row';
import Utils from '../../../../Utilities';
import dataLoader from '../../DataLoaders';

const { constants: { classNames } } = Utils;

class DynamicRowBuilderWithLazyLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.showableData = [];

    this.rowDataUrl = props.rowDataUrl;

    this.dataLoadedSoFar = [];
    this.lastObserved = null;
    this.intersectionObserver = this.prepareObserver();
  }

  componentDidMount() {
    debugger;
    this.prepareAndSetShowableData();
  }

  prepareObserver = () => {
    return new IntersectionObserver(this.observerHandler);
  };

  observerHandler = async ([entry]) => {
    if (entry.isIntersecting) {
      await this.unobserveLastObservedRow();
      await this.showLoader();
      await this.prepareAndSetShowableData();
    }
  };

  observeRow = (row) => {
    this.intersectionObserver.observe(row);
    this.lastObserved = row;
  };

  unobserveLastObservedRow = () => {
    if (this.lastObserved) {
      this.intersectionObserver.unobserve(this.lastObserved);
      this.lastObserved = null;
    }
  }

  showLoader = () => {
    this.setState({ isLoading: true });
  }

  hideLoader = () => {
    this.setState({ isLoading: false });
  }

  loadRowsFromUrl = async () => {
    const { rowDataMapper } = this.props;
    const newlyLoadedData = await dataLoader.loadUrl(this.rowDataUrl, rowDataMapper);

    this.rowDataUrl = newlyLoadedData.dataUrl;

    this.dataLoadedSoFar = [
      ...this.dataLoadedSoFar,
      ...newlyLoadedData.data
    ];
  }

  setShowableData = () => {
    this.setState({ showableData: this.dataLoadedSoFar });
  }

  prepareAndSetShowableData = async () => {
    await this.showLoader();
    await this.loadRowsFromUrl();
    await this.setShowableData();
    await this.hideLoader();
  };

  generateLoaderRows = () => {
    const { addTableResizeables, rowDataColumnDefinition } = this.props;

    const colsLength = rowDataColumnDefinition.length;
    const cellsConfig = rowDataColumnDefinition.map(({ fixed }) => ({ fixed }));

    const rows = [];
    const cells = new Array(colsLength).fill('...');
    const props = { cells, cellsConfig, addTableResizeables };

    rows.push(<Row key={0} {...props} />);
    rows.push(<Row key={1} {...props} />);
    rows.push(<Row key={2} {...props} />);

    return rows;
  };

  collectAndObserveRowRef = (i, array) => (row) => {
    if (!row) return;

    if (i === array.length - 1) {
      this.observeRow(row);
    }
  }

  renderRows() {
    const { showableData, isLoading } = this.state;
    const { addTableResizeables } = this.props;

    const renderableData = showableData.map(
      ({ key, cells, cellsConfig }, i, array) =>
        <Row
          key={key}
          cells={cells}
          cellsConfig={cellsConfig}
          addTableResizeables={addTableResizeables}
          refHandler={this.collectAndObserveRowRef(i, array)}
        />);

    return isLoading ?
      [...renderableData, ...this.generateLoaderRows()] :
      renderableData;
  }

  render() {
    return (
      <tbody className={classNames.TABLE_BODY}>
        {this.renderRows()}
      </tbody>
    );
  }
}

export default DynamicRowBuilderWithLazyLoad;