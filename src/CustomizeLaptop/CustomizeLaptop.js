import React from 'react';
import Features from '../CustomizeLaptop/Features';
import slugify from 'slugify';

class CustomizeLaptop extends React.Component{
     options = () => {
       console.log(this.props)
       console.log(this.props.featureName);
      return this.props.FEATURES[this.props.featureName].map(item => {
           const itemHash = slugify(JSON.stringify(item));
      return(
       <Features 
        itemHash = {itemHash}
        feature = {this.props.featureName}
        itemName = {item.name}
        cost = {item.cost}
        item = {item}
        updateFeature = {this.props.updateFeature}
        selected = {this.props.selected}
       />)
      } 
     )  
    }

  render(){
    return (
    <fieldset className="feature" key={this.props.featureHash}>
      <legend className="feature__name">
        <h3>{this.props.featureName}</h3>
      </legend>
      {this.options()}
    </fieldset>
  
);
}
}



export default CustomizeLaptop;
