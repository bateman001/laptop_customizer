import React, { Component } from 'react';
import Cart from './Cart/Cart';
import CustomizeLaptop from './CustomizeLaptop/CustomizeLaptop';
import './App.css';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  features = () => { 
    console.log(this.props.features)
   return Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return(
    <CustomizeLaptop
      featureHash = {featureHash}
      featureName = {feature}
      FEATURES = {this.props.features}
      updateFeature = {this.updateFeature}
      selected = {this.state.selected}
    />)
  });
  }

  summary = () => { 
   return  Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];
      return(
        <Cart 
          featureHash = {featureHash}
          name= {selectedOption.name}
          feature = {feature}
          cost = {selectedOption.cost}
          USCurrencyFormat ={this.USCurrencyFormat}
          selected = {this.state.selected}
        />
      )
  });
}


    total = () => { 
      return Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
    }

  render(){

    console.log(this.state)
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {this.features()}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {this.summary()}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.USCurrencyFormat.format(this.total())}
              </div>
            </div>
          </section>
        </main>
      </div>
         );
  }
}

export default App;
