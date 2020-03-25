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
        if(this.props.regularNachoCounter > 0){
            return(
                <h4> {this.props.regularNachoCounter}: RNach </h4>
            )
        }
    };
    displayExtraNacho = () =>{
        if(this.props.extraNachoCounter > 0){
            return(
                <h4> {this.props.extraNachoCounter}: EXNach </h4>
            )
        }
    };
    displayDeluxeNacho = () => {
        if(this.props.deluxeNachoCounter > 0){
            return(
                <h4> {this.props.deluxeNachoCounter}: DLNach </h4>
            )
        }
    };
    displayRegHotdog = () => {
        if(this.props.regularHotdogCounter > 0){
            return(
                <h4> {this.props.regularHotdogCounter}: RHotDog </h4>
            )
        }
    };

    displayExtraHotdog = () => {
        if(this.props.extraHotdogCounter > 0){
            return(
                <h4> {this.props.extraHotdogCounter}: EXHotDog </h4>
            )
        }
    }
    displayDeluxeHotdog = () => {
        if(this.props.deluxeHotdogCounter > 0){
            return(
                <h4> {this.props.deluxeHotdogCounter}: DLHotDog </h4>
            )
        }
    }
    displaySmallSoda = () => {
        if(this.props.smallDrinkCounter > 0){
            return(
                <h4> {this.props.smallDrinkCounter}: S Drink(s) </h4>
            )
        }
    }
    displayMedSoda = () => {
        if(this.props.mediumDrinkCounter > 0){
            return(
            <h4> {this.props.mediumDrinkCounter}: M Drink(s) </h4>
            )
        }
    }
    displayLargeSoda = () =>{
        if(this.props.largeDrinkCounter > 0){
           return( 
            <h4> {this.props.largeDrinkCounter}: L Drink(s) </h4>
           )
        }
    }

    render(){

        return(
            <>
                    {this.displaySmallPop()}
                    {this.displayMedPop()}
                    {this.displayLargePop()}
                   
                    {this.displaySnickers()}
                    {this.displayMnm()}
                    {this.displayReeses()}

                   {this.displayRegNacho()}
                   {this.displayExtraNacho()}
                   {this.displayDeluxeNacho()}

                   {this.displayRegHotdog()}
                   {this.displayExtraHotdog()}
                   {this.displayDeluxeHotdog()}

                   {this.displaySmallSoda()}
                   {this.displayMedSoda()}
                   {this.displayLargeSoda()}
            </>
        )
    }

};

// export default function Snacks(props){
//     return(
//         displaySmallPop = () => {
//             if(props.smallPopcornCounter > 0){
//                return( 
//                     <h4> {props.smallPopcornCounter}: S Popcorn </h4>
//                 )
//             }
//         };
//         displayMedPop = () => {
//             if(props.mediumPopcornCounter > 0){
//                 return(
//                     <h4> {props.mediumPopcornCounter}: M Popcorn </h4>
                
//                 )
//             }
//         };
//         displayLargePop = () => { 
//             if(props.largePopcornCounter > 0){
//                return(
//                     <h4> {props.largePopcornCounter}: L Popcorn </h4>
//                 )
//             }
//         };
//         displaySnickers = () => {
//             if(props.snickersCounter > 0){
//                 return(
//                     <h4> {props.snickersCounter}: Snicker(s) </h4>
//                 )
//             }
//         };
//         displayMnm = () => {
//             if(props.mnmsCounter > 0 ){
//                 return(
//                     <h4> {props.mnmsCounter}: MnMs </h4>
//                 )
//             }
//         };
//         displayReeses = () => {
//             if(props.reesesCounter > 0){
//                 return(
//                     <h4> {props.reesesCounter}: Reeses </h4>
//                 )
//             }
//         };
//         displayRegNacho = () => {
//             if(this.props.regularNachoCounter > 0){
//                 return(
//                     <h4> {props.regularNachoCounter}: RNach </h4>
//                 )
//             }
//         };
//         displayExtraNacho = () =>{
//             if(props.extraNachoCounter > 0){
//                 return(
//                     <h4> {props.extraNachoCounter}: EXNach </h4>
//                 )
//             }
//         };
//         displayDeluxeNacho = () => {
//             if(props.deluxeNachoCounter > 0){
//                 return(
//                     <h4> {props.deluxeNachoCounter}: DLNach </h4>
//                 )
//             }
//         };
//         displayRegHotdog = () => {
//             if(props.regularHotdogCounter > 0){
//                 return(
//                     <h4> {props.regularHotdogCounter}: RHotDog </h4>
//                 )
//             }
//         };
    
//         displayExtraHotdog = () => {
//             if(props.extraHotdogCounter > 0){
//                 return(
//                     <h4> {props.extraHotdogCounter}: EXHotDog </h4>
//                 )
//             }
//         }
//         displayDeluxeHotdog = () => {
//             if(props.deluxeHotdogCounter > 0){
//                 return(
//                     <h4> {props.deluxeHotdogCounter}: DLHotDog </h4>
//                 )
//             }
//         }
//         displaySmallSoda = () => {
//             if(props.smallDrinkCounter > 0){
//                 return(
//                     <h4> {props.smallDrinkCounter}: S Drink(s) </h4>
//                 )
//             }
//         }
//         displayMedSoda = () => {
//             if(props.mediumDrinkCounter > 0){
//                 return(
//                 <h4> {props.mediumDrinkCounter}: M Drink(s) </h4>
//                 )
//             }
//         }
//         displayLargeSoda = () =>{
//             if(props.largeDrinkCounter > 0){
//                return( 
//                 <h4> {props.largeDrinkCounter}: L Drink(s) </h4>
//                )
//             }
//         }
//     )
// };