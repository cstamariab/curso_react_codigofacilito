import React from 'react';

import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filter: null,
      in_stock: false
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStock = this.handleInStock.bind(this);
  }

  handleFilterTextInput(filter) {
    this.setState({
      filter: filter
    });
  }

  handleInStock(inStockOnly) {
    this.setState({
      in_stock: inStockOnly
    })
  }

  render(){
    return(
      <div>
        <SearchBar
          filter= {this.state.filter}
          in_stock= {this.state.in_stock}
          onFilter={this.handleFilterTextInput}
          onInStock={this.handleInStock}
         />
        <ProductTable
          products={ this.props.store }
          filter={this.state.filter}
          in_stock= {this.state.in_stock}
        />
      </div>
    );
  }
}