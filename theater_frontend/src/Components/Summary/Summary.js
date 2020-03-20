import React from 'react';
import './Summary.css'


export default class Summary extends React.Component{

    render(){
        return(
    <div>
               <h3> These Are Your Tickets: </h3>
            <h4> {this.props.adultCounter} Adult Ticket(s) </h4>
            <h4> {this.props.kidCounter} Kid Ticket(s) </h4>
            <h4> {this.props.seniorCounter} Senior Ticket(s) </h4>
            <h3> Here Are Your Snacks: </h3>
            <h4> {this.props.smallPopcornCounter} : Small Popcorn </h4>
            <h4> {this.props.mediumPopcornCounter} : Medium Popcorn </h4>
            <h4> {this.props.largePopcornCounter} : Large Popcorn </h4>
    </div>
        )
    }

};