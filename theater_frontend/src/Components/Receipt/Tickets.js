import React from 'react';


export default class Tickets extends React.Component{

    displayAdult = () => {
        if(this.props.adultCount > 0){
            return(
                    <h4> {this.props.adultCount}: Adult Ticket(s) for the movie {/* the actually movie title here*/} </h4>
            )
        } 
    };

    displayKid = () => {
        if(this.props.kidCount > 0){
            return(
                    <h4> {this.props.kidCount}: Kid Ticket(s) for the movie {/* the actually movie title here*/} </h4>
            )
        }
    };

    displaySenior = () => {
        if(this.props.seniorCount > 0){
            return(
                    <h4> {this.props.seniorCount}: Senior Ticket(s) for the movie {/* the actually movie title here*/} </h4>
            )
        }
    }


    render(){


        return(
            <>
                  {this.displayAdult()}
                  {this.displayKid()}
                  {this.displaySenior()}
            </>
        )
    }

}