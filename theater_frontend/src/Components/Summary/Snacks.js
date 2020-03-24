import React from 'react';


export default class Snacks extends React.Component{


    displaySmallPop = () => {
        if(this.props.smallPopcornCounter > 0){
           return( 
                <h4> {this.props.smallPopcornCounter}: S Popcorn </h4>
            )
        }
    };

    displayMedPop = () => {
        if(this.props.mediumPopcornCounter > 0){
            return(
                <h4> {this.props.mediumPopcornCounter}: M Popcorn </h4>
            
            )
        }
    };

    displayLargePop = () => { 
        if(this.props.largePopcornCounter > 0){
           return(
                <h4> {this.props.largePopcornCounter}: L Popcorn </h4>
            )
        }
    };

    displaySnickers = () => {
        if(this.props.snickersCounter > 0){
            return(
                <h4> {this.props.snickersCounter}: Snicker(s) </h4>
            )
        }
    };

    displayMnm = () => {
        if(this.props.mnmsCounter > 0 ){
            return(
                <h4> {this.props.mnmsCounter}: MnMs </h4>
            )
        }
    };

    displayReeses = () => {
        if(this.props.reesesCounter > 0){
            return(
                <h4> {this.props.reesesCounter}: Reeses </h4>
            )
        }
    };

    displayRegNacho = () => {
        
    };

    
    render(){


        return(
            <>
                    {this.displaySmallPop()}
                    {this.displayMedPop()}
                    {this.displayLargePop()}
                   

                    {this.displaySnickers()}
                    {this.displayMnm()}
                    {this.displayReeses()}

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