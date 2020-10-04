export default {
  header: {
    serialize: (props) => ({
      datasource: props.datasource,
      columnDefinition: props.columnDefinition,
      headers: props.columnDefinition.map((def) => def.title),
      columnCount: props.columnDefinition.length,
    })
  },
  row: {
    serialize: (props) => ({
      datasource: props.datasource,
      columnDefinition: props.columnDefinition,
      headers: props.columnDefinition.map((def) => def.title),
      columnCount: props.columnDefinition.length,
    })
  },
};