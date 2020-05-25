import React from 'react';

class Cart extends React.Component{

total = Object.keys(this.props.selected).reduce(
  (acc, curr) => acc + this.props.selected[curr].cost,
  0
);

render(){
  console.log(this.props.selected)
  return(
    <div className="summary__option" key={this.props.featureHash}>
      <div className="summary__option__label">{this.props.feature} </div>
      <div className="summary__option__value">{this.props.name}</div>
      <div className="summary__option__cost">
        {this.props.USCurrencyFormat.format(this.props.cost)}
      </div>
    </div>

  );
}
}

export default Cart;

