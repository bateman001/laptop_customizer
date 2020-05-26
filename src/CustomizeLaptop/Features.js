import React from 'react';
import slugify from 'slugify';


class Features extends React.Component {
  

render(){
  return (
  <div key={this.props.itemHash} className="feature__item">
    <input
      type="radio"
      id={this.props.itemHash}
      className="feature__option"
      name={slugify(this.props.feature)}
      checked={this.props.itemName === this.props.selected[this.props.feature].name}
      onClick={e => this.props.updateFeature(this.props.feature, this.props.item)}
    />
    <label htmlFor={this.props.itemHash} className="feature__label">
      {this.props.itemName} ({this.props.USCurrencyFormat.format(this.props.cost)})
    </label>
  </div>
  )
}
}

export default Features;
