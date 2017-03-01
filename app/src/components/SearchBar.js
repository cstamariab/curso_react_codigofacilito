import React from 'react';
export default class SearchBar extends React.Component {
  constructor(){
    super();
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStock = this.handleInStock.bind(this);
  }
  handleFilterTextInput(e) {
    this.props.onFilter(e.target.value);
  }

  handleInStock(e) {
    this.props.onInStock(e.target.checked);
  }
  render(){
    return (
      <div>
        <input
           type="text"
           placeholder="Buscar"
           value={this.props.filter}
           onChange={this.handleFilterTextInput}
         />
       <p>
          <input
            type="checkbox"
            checked={this.props.in_stock}
            onChange={this.handleInStock}
          />
          {' '}
            Only show products in stock
       </p>
      </div>
    );
  }
}