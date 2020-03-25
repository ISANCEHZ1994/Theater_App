import React from 'react';
import './TicketButtons.css';

export default function TicketButtons(props){
 
    return(
        <div className='buttonContainer'>
                <div style={{backgroundColor: 'purple'}} className='button' onClick={() => props.addingAdult(props.movieTitle)}>
                    Adult: $10
                </div>
                <div style={{backgroundColor: 'orange'}} className='button' onClick={() => props.addingKid(props.movieTitle)}>
                    Kid: $5
                </div>
                <div style={{backgroundColor: 'grey'}} className='button' onClick={() => props.addingSenior(props.movieTitle)}>
                    Senior: $2
                </div>
        </div>
    )
}