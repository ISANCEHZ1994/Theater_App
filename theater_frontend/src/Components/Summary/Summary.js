import React from 'react';
import './Summary.css';
import Tickets from './Tickets';
import Snacks from './Snacks';


export default class Summary extends React.Component{


    render(){
        return(
    <div style={{backgroundColor: 'purple'}}>
        <h1 style={{textAlign: 'center'}}> YOUR TOTAL </h1>
                <h3> Purchased Tickets: </h3>
                        <Tickets 
                        adultCount={this.props.adultCounter}
                        kidCount={this.props.kidCounter}
                        seniorCount={this.props.seniorCounter}
                        />
                <h3> Purchased Snacks: </h3>
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