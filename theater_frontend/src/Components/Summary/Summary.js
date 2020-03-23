import React from 'react';
import './Summary.css';
import Tickets from './Tickets';
import Snacks from './Snacks';


export default class Summary extends React.Component{

    state={
        //maybe make have a boolean where it shows ONLY what I ordered
    }

    render(){
        return(
    <div style={{backgroundColor: 'purple'}}>
                <h3> These Are Your Tickets: </h3>
                        <Tickets 
                        adultCount={this.props.adultCounter}
                        kidCount={this.props.kidCounter}
                        seniorCount={this.props.seniorCounter}
                        />
                <h3> Here Are Your Snacks: </h3>
                        <Snacks
                        smallPopcornCounter={this.props.passingSmallPopcornCounter}
                        mediumPopcornCounter={this.props.passingMediumPopcornCounter}
                        largePopcornCounter={this.props.passingLargePopcornCounter}

                        snickersCounter={this.props.passingSnickersCounter}
                        mnmsCounter={this.props.passingMnmsCounter}
                        reesesCounter={this.props.passingReesesCounter}

                        regularNachoCounter={this.props.passingRegularNachoCounter}
                        extraNachoCounter={this.props.passingExtraNachoCounter}
                        deluxeNachoCounter={this.props.passingDeluxeNachoCounter}

                        regularHotdogCounter={this.props.passingRegularHotdogCounter}
                        extraHotdogCounter={this.props.passingExtraHotdogCounter}
                        deluxeHotdogCounter={this.props.passingDeluxeHotdogCounter}

                        smallDrinkCounter={this.props.passingSmallDrinkCounter}
                        mediumDrinkCounter={this.props.passingMediumDrinkCounter}
                        largeDrinkCounter={this.props.passingLargeDrinkCounter}
                        />
    </div>
        )
    }

};