import React from 'react';
import './Summary.css';


export default class Summary extends React.Component{

    state={
        //maybe make have a boolean where it shows ONLY what I ordered
    }

    render(){
        return(
    <div style={{backgroundColor: 'purple'}}>
               <h3> These Are Your Tickets: </h3>
            <h4> {this.props.adultCounter} Adult Ticket(s) </h4>
            <h4> {this.props.kidCounter} Kid Ticket(s) </h4>
            <h4> {this.props.seniorCounter} Senior Ticket(s) </h4>
            <h3> Here Are Your Snacks: </h3>
            <h4> {this.props.smallPopcornCounter}: S Popcorn </h4>
            <h4> {this.props.mediumPopcornCounter}: M Popcorn </h4>
            <h4> {this.props.largePopcornCounter}: L Popcorn </h4>
            <h3> Here Are Your Drinks: </h3>
            <h4> {this.props.smallDrinkCounter}: S Drink(s) </h4>
            <h4> {this.props.mediumDrinkCounter}: M Drink(s) </h4>
            <h4> {this.props.largeDrinkCounter}: L Drink(s) </h4>
    </div>
        )
    }

};