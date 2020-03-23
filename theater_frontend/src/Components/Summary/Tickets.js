import React from 'react';


export default class Tickets extends React.Component{



    render(){


        return(
            <>
                    <h4> {this.props.adultCount} Adult Ticket(s) </h4>
                    <h4> {this.props.kidCount} Kid Ticket(s) </h4>
                    <h4> {this.props.seniorCount} Senior Ticket(s) </h4>
            </>
        )
    }

}