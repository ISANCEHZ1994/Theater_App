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
                <div style={{backgroundColor: 'brown'}}  onClick={this.showTickets}>
                    <TicketButtons ticket_price={this.props.ticket_price}/>
                
            </div>
            )
        }
        if(this.state.showButtons === false){
            return(
                <div style={{backgroundColor: 'brown'}} onClick={this.showTickets}>
                    <h1> Click Here for Tickets </h1>
                </div>
            )
        }
    }


    render(){


        return(
        <div style={{backgroundColor: 'blue', textAlign: 'center', borderRadius: '25px'}} className='movieCard' > 
                <h2>{this.props.title}</h2>
                <img src={this.props.poster} alt='movie poster here' width='300px'/>

                <div style={{backgroundColor: 'white'}}>
                   {this.props.description}
                </div>
                
                {this.renderTickets()}
                
               
        </div>
        )
    }
};