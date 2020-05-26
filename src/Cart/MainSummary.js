import React from 'react';
import Cart from './Cart';
import Total from './Total';
class MainSummary extends React.Component{

summary = () => { 
    return  Object.keys(this.props.selected).map((feature, idx) => {
       const featureHash = feature + '-' + idx;
       const selectedOption = this.props.selected[feature];
       return(
         <Cart 
           featureHash = {featureHash}
           name= {selectedOption.name}
           feature = {feature}
           cost = {selectedOption.cost}
           USCurrencyFormat ={this.props.USCurrencyFormat}
           selected = {this.props.selected}
         />
       )
   });
 }

render(){
    return<>
    {this.summary()}

    <div className="summary__total">
    <div className="summary__total__label">Total</div>
    <div className="summary__total__value">
    <Total
        selected={this.props.selected}
        USCurrencyFormat={this.props.USCurrencyFormat}
    />
    </div>
  </div>
  </>

}
}

export default MainSummary;
 