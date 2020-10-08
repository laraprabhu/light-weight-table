export default {
  constants: {
    classNames: {
      TABLE_WRAPPER: 'table-wrapper',
      TABLE: 'table',
      TABLE_HEADER: 'table-header',
      TABLE_HEADER_ROW: 'table-header-row',
      TABLE_HEADER_CELL: 'table-header-cell',
      TABLE_ROW: 'table-row',
      TABLE_CELL: 'table-cell',
      TABLE_BODY: 'table-body',
    }
  },
  delayedTrigger: (callBack, delay) => {
    return new Promise((res) => setTimeout(callBack, delay));
  }
};