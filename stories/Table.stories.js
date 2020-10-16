import React from 'react';

import { Table } from '../src';

export default { title: 'Table' }

export const Simple_Table = () =>
  <Table
    columnDefinition={[
      { title: 'Name', 'dataIdentifier': 'name', key: 'name' },
      { title: 'Age', 'dataIdentifier': 'age', key: 'age' }]}
    datasource={[
      { name: 'Rajaprabhu', age: '29', key: 'rj' },
      { name: 'Jon', age: '35', key: 'jn' }]}
  />;

export const Table_With_Large_Data = () =>
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

export const Table_With_Fixed_Header = () =>
  <Table
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

export const Table_With_Fixed_Columns = () =>
  <Table
    columnDefinition={[
      { title: 'Name', 'dataIdentifier': 'name', key: 'name', fixed: 'left' },
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

export const Table_With_Fixed_Columns_And_Fixed_Header = () =>
  <Table
    isHeaderFixed={true}
    columnDefinition={[
      { title: 'Name', 'dataIdentifier': 'name', key: 'name', fixed: 'left' },
      { title: 'Age', 'dataIdentifier': 'age', key: 'age', fixed: 'left' },
      { title: 'Gender', 'dataIdentifier': 'gender', key: 'gender' },
      { title: 'Address', 'dataIdentifier': 'address', key: 'address' },
      { title: 'District', 'dataIdentifier': 'district', key: 'district' },
      { title: 'State', 'dataIdentifier': 'state', key: 'state' },
      { title: 'Country', 'dataIdentifier': 'country', key: 'country', fixed: 'right' }]}
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

export const Static_Lazy_Load = () =>
  <Table
    staticDataLazyLoadDefinition={{ rowsPerLoad: 10 }}
    columnDefinition={[
      { title: 'Name', 'dataIdentifier': 'name', key: 'name' },
      { title: 'Age', 'dataIdentifier': 'age', key: 'age' },
      { title: 'Gender', 'dataIdentifier': 'gender', key: 'gender' },
      { title: 'Address', 'dataIdentifier': 'address', key: 'address' },
      { title: 'District', 'dataIdentifier': 'district', key: 'district' },
      { title: 'State', 'dataIdentifier': 'state', key: 'state' },
      { title: 'Country', 'dataIdentifier': 'country', key: 'country' }]}
    datasource={[
      { name: 'Rajaprabhu - First', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'sadasd' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'fgsdg' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'dfdsfs' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'mkdsfkm' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'dkerwe' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'ewr32dsf' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'cvxvvdfsf' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'ewr3rf' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'mkdsfmk' },
      { name: 'Jonathan10', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'kdsfn' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'koodk' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'ksdfmk' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'ewrewr' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'mvdkfsfk' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'masmd' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: '34fdfd' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'jdfnn3' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'samdk3' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'samdmk32' },
      { name: 'Kavya P20', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'asmdk234' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'asmdk34' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'sdakmk21' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'askdmm21' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'askdmm32' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'asdknndw2' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'akmdkn09' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'asdnkn34' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'mmkamd3' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'asdknkn212' },
      { name: 'Jonathan30', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'askndkn212' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'adknnk21' },
      { name: 'Kavya P - Last', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'ncncd3' },]}
  />;

export const Static_Lazy_Load_With_Fixed_Header_And_Columns = () =>
  <Table
    isHeaderFixed={true}
    staticDataLazyLoadDefinition={{ rowsPerLoad: 10 }}
    columnDefinition={[
      { title: 'Name', 'dataIdentifier': 'name', key: 'name', fixed: 'left' },
      { title: 'Age', 'dataIdentifier': 'age', key: 'age' },
      { title: 'Gender', 'dataIdentifier': 'gender', key: 'gender' },
      { title: 'Address', 'dataIdentifier': 'address', key: 'address' },
      { title: 'District', 'dataIdentifier': 'district', key: 'district' },
      { title: 'State', 'dataIdentifier': 'state', key: 'state' },
      { title: 'Country', 'dataIdentifier': 'country', key: 'country', fixed: 'right' }]}
    datasource={[
      { name: 'Rajaprabhu - First', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'sadasd' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'fgsdg' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'dfdsfs' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'mkdsfkm' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'dkerwe' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'ewr32dsf' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'cvxvvdfsf' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'ewr3rf' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'mkdsfmk' },
      { name: 'Jonathan10', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'kdsfn' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'koodk' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'ksdfmk' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'ewrewr' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'mvdkfsfk' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'masmd' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: '34fdfd' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'jdfnn3' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'samdk3' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'samdmk32' },
      { name: 'Kavya P20', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'asmdk234' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'asmdk34' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'sdakmk21' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'askdmm21' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'askdmm32' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'asdknndw2' },
      { name: 'Jonathan', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'akmdkn09' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'asdnkn34' },
      { name: 'Kavya P', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'mmkamd3' },
      { name: 'Rajaprabhu', age: '29', gender: 'Male', address: 'Brook street, 3rd sector', district: 'Newyork', state: 'Tamil nadu', country: 'United states', key: 'asdknkn212' },
      { name: 'Jonathan30', age: '32', gender: 'Male', address: 'Bus street, 13rd sector', district: 'California', state: 'Andhra pradesh', country: 'India', key: 'askndkn212' },
      { name: 'Sam shields', age: '34', gender: 'Male', address: 'New street, 23rd sector', district: 'Kanchipuram', state: 'Kerala', country: 'Russia', key: 'adknnk21' },
      { name: 'Kavya P - Last', age: '39', gender: 'Female', address: 'Old street, 323rd sector', district: 'Texas', state: 'Maharashtra', country: 'China', key: 'ncncd3' },]}
  />;

export const Dynamic_Data = () =>
  <Table
    isHeaderFixed={true}
    dynamiDataLazyLoadDefinition={{ rowDataUrl: "https://pastebin.com/raw/SCbfwRaP" }}
    columnDefinition={[
      { title: 'Name', 'dataIdentifier': 'name', key: 'name' },
      { title: 'Age', 'dataIdentifier': 'age', key: 'age' },
      { title: 'Gender', 'dataIdentifier': 'gender', key: 'gender' },
      { title: 'Address', 'dataIdentifier': 'address', key: 'address' },
      { title: 'District', 'dataIdentifier': 'district', key: 'district' },
      { title: 'State', 'dataIdentifier': 'state', key: 'state' },
      { title: 'Country', 'dataIdentifier': 'country', key: 'country', }]}
  />;