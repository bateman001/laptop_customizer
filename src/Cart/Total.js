import React from 'react';

class Total extends React.Component{

    total = () => { 
        return Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,
        0
      );
      }
  
render(){
    return <>
        {this.props.USCurrencyFormat.format(this.total())}
    </>
}
}

export default Total;