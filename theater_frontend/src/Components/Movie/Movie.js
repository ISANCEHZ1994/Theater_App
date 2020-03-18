import React from 'react';
import TicketButtons from './TicketButtons/TicketButtons';
import './Movie.css'


export default class Movie extends React.Component{

    state={
        showButtons: false
    }

    showTickets = () => {
        this.setState({
            showButtons: !this.state.showButtons
        })

    }

   
    
    renderTickets = () => {
        if(this.state.showButtons === true){
            return(
                <div className='ticketContainer'  >
                    <TicketButtons
                    
                     addingAdult={this.props.passingAdult}
                     addingKid={this.props.passingKid}
                     addingSenior={this.props.passingSenior}
                     />
                
            </div>
            )
        }
        if(this.state.showButtons === false){
            return(
                <div className='ticketContainer' onClick={this.showTickets}>
                    <h1> Click Here for Tickets </h1>
                </div>
            )
        }
    }


    render(){


        return(
        <div style={{backgroundColor: 'blue', textAlign: 'center'}} className='movieCard' > 
                <h2>{this.props.title}</h2>
                <img src={this.props.poster} alt='movie poster here' width='300px'/>

                <div className='movieDescription'>
                   {this.props.description}
                </div>
                
                {this.renderTickets()}
                
               
        </div>
        )
    }
};