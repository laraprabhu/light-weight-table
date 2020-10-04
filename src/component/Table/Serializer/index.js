export default {
  header: {
    serialize: (props) => ({
      headers: props.columnDefinition.map((def) => ({ title: def.title, key: def.key }))
    })
  },
  row: {
    serialize: (props) => ({
      rowData: props.datasource.map((data) => {
        return {
          key: data.key,
          record: data,
          cells: props.columnDefinition.reduce((accumulator, curDef) => {
            accumulator.push(data[curDef.dataIdentifier] || '');
            return accumulator;
          }, [])
        };
      }),
    })
  },
};