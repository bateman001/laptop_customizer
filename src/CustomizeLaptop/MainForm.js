import React from 'react';
import CustomizeLaptop from './CustomizeLaptop';

class MainForm extends React.Component{

    features = () => { 

        return Object.keys(this.props.feature).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return(
            <CustomizeLaptop
            featureHash = {featureHash}
            featureName = {feature}
            FEATURES = {this.props.feature}
            updateFeature = {this.props.updateFeature}
            selected = {this.props.selected}
            USCurrencyFormat={this.props.USCurrencyFormat}
            />)
        });
    }

    render(){
        return <>
            {this.features()}
        </>
    }

}

export default MainForm;
