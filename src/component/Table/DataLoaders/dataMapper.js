export default (columnDefinition) => (data) => {
  return {
    key: data.key,
    record: data,
    cellsConfig: columnDefinition.map((def) => ({ fixed: def.fixed })),
    cells: columnDefinition.reduce((accumulator, curDef) => {
      accumulator.push(data[curDef.dataIdentifier] || '');
      return accumulator;
    }, [])
  };
};