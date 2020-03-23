import React from 'react';


export default class Tickets extends React.Component{


    state={
        showAdultTickets: false
    }

    displayTickets = () => {

        if(this.props.adultCount > 0){
            return(
                <>
                    <h4> {this.props.adultCount}: Adult Ticket(s) </h4>
                </>
            )
        } if(this.props.kidCount > 0){
            return(
                <>
                    <h4> {this.props.kidCount}: Kid Ticket(s) </h4>
                </>
            )
        } if(this.props.seniorCount > 0){
            return(
                <>
                    <h4> {this.props.seniorCount}: Senior Ticket(s) </h4>
                </>
            )
        }

    };


    render(){


        return(
            <>
                  {this.displayTickets()}
                  {/* {console.log(this.props.kidCount)} */}
                  {/* {console.log(this.props.seniorCount)} */}
            </>
        )
    }

}