import React from 'react';


export default class Snacks extends React.Component{
    

    
    render(){


        return(
            <>
                    <h4> {this.props.smallPopcornCounter}: S Popcorn </h4>
                    <h4> {this.props.mediumPopcornCounter}: M Popcorn </h4>
                    <h4> {this.props.largePopcornCounter}: L Popcorn </h4>

                    <h4> {this.props.snickersCounter}: Snicker(s) </h4>
                    <h4> {this.props.mnmsCounter}: MnMs </h4>
                    <h4> {this.props.reesesCounter}: Reeses </h4>

                    <h4> {this.props.regularNachoCounter}: RNach </h4>
                    <h4> {this.props.extraNachoCounter}: EXNach </h4>
                    <h4> {this.props.deluxeNachoCounter}: DLNach </h4>

                    <h4> {this.props.regularHotdogCounter}: RHotDog </h4>
                    <h4> {this.props.extraHotdogCounter}: EXHotDog </h4>
                    <h4> {this.props.deluxeHotdogCounter}: DLHotDog </h4>

                    <h4> {this.props.smallDrinkCounter}: S Drink(s) </h4>
                    <h4> {this.props.mediumDrinkCounter}: M Drink(s) </h4>
                    <h4> {this.props.largeDrinkCounter}: L Drink(s) </h4>
            </>
        )
    }

}