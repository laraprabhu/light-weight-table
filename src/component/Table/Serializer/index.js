import RowDataMapper from '../DataLoaders/dataMapper';

export default {
  table: {
    serialize: (props) => ({
      isHeaderFixed: props.isHeaderFixed,
    })
  },
  header: {
    serialize: (props) => ({
      headers: props.columnDefinition.map((def) => ({ 
        title: def.title,
        key: def.key,
        fixed: def.fixed,
      }))
    })
  },
  row: {
    serialize: (props) => ({
      rowsPerLoad: props.staticDataLazyLoadDefinition.rowsPerLoad,
      rowDataUrl: props.dynamiDataLazyLoadDefinition.rowDataUrl,
      rowDataColumnDefinition: props.columnDefinition,
      rowData: props.datasource.map(RowDataMapper(props.columnDefinition)),
      rowDataMapper: RowDataMapper(props.columnDefinition),
    }),
  },
};