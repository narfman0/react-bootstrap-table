'use strict';
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


var products = [];

function addProducts(quantity) {
  var startId = products.length;
  for (var i = 0; i < quantity; i++) {
    var id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

export default class ColumnHideTable extends React.Component{
  render(){
    return (
      <BootstrapTable data={products}>
          <TableHeaderColumn dataField="id" isKey={true} hidden={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};
