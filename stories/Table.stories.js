import React from 'react';

import { Table } from '../src';

export default { title: 'Table' }

export const SimpleTable = () =>
  <Table
    columnDefinition={[
      { title: 'Name', 'dataIdentifier': 'name', key: 'name' },
      { title: 'Age', 'dataIdentifier': 'age', key: 'age' }]}
    datasource={[
      { name: 'Rajaprabhu', age: '29', key: 'rj' },
      { name: 'Jon', age: '35', key: 'jn' }]}
  />;

export const TableWithLargeData = () =>
  <Table
    columnDefinition={[
      { title: 'Name', 'dataIdentifier': 'name', key: 'name' },
      { title: 'Age', 'dataIdentifier': 'age', key: 'age' },
      { title: 'Gender', 'dataIdentifier': 'gender', key: 'gender' },
      { title: 'Address', 'dataIdentifier': 'address', key: 'address' },
      { title: 'District', 'dataIdentifier': 'district', key: 'district' },
      { title: 'State', 'dataIdentifier': 'state', key: 'state' },
      { title: 'Country', 'dataIdentifier': 'country', key: 'country' }]}
    datasource={[
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'rj' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'pj' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'cj' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zx' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'rjs' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'pjs' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'caj' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zxs' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'r2j' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'p12j' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'c12j' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zx42' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'r244js' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'pj231s' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'ca312j' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zxs123' },]}
  />;

export const TableWithFixedHeader = () =>
  <Table
    staticDataLazyLoadDefinition={{ rowsPerLoad: 10 }}
    isHeaderFixed={true}
    columnDefinition={[
      { title: 'Name', 'dataIdentifier': 'name', key: 'name' },
      { title: 'Age', 'dataIdentifier': 'age', key: 'age' },
      { title: 'Gender', 'dataIdentifier': 'gender', key: 'gender' },
      { title: 'Address', 'dataIdentifier': 'address', key: 'address' },
      { title: 'District', 'dataIdentifier': 'district', key: 'district' },
      { title: 'State', 'dataIdentifier': 'state', key: 'state' },
      { title: 'Country', 'dataIdentifier': 'country', key: 'country' }]}
    datasource={[
      { name: 'Rajaprabhu - First', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'rj' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'pj' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'cj' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zx' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'rjs' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'pjs' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'caj' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zxs' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'r2j' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'p12j' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'c12j' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zx42' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'r244js' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'pj231s' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'ca312j' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zxs123' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'rj221' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'pj312' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'cjadad' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zxdassd' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'rjdasds' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'pjrfvs' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'cajdbbf' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zxsfggd' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'r2jdasw' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'p12jdasd' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'c12jassd' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zx42ww3' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'r244jssdad' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'pj231dasds' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'ca312jasdasd' },
      { name: 'Kavya P - Last', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'zxs123weqe' },]}
  />;