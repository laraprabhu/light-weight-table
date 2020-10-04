import React from 'react';

import { Table } from '../src';

export default { title: 'Table' }

export const table = () =>
  <Table
    columnDefinition={[
      { title: 'Name', 'dataIdentifier': 'name', key: 'name' },
      { title: 'Age', 'dataIdentifier': 'age', key: 'age' }]}
    datasource={[
      { name: 'Rajaprabhu', age: '29', key: 'rj' },
      { name: 'Jon', age: '35', key: 'jn' }]}
  />;