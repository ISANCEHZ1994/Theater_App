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

    showTicketPrice = () => {
        console.log('clicked on a ticket')
    }
    
    renderTickets = () => {
        if(this.state.showButtons === true){
            return(
                <div onClick={this.showTickets}>
                    <TicketButtons/>
                {/* <div style={{backgroundColor: 'purple'}} className='button'>
                    Adult
                </div>
                <div style={{backgroundColor: 'orange'}} className='button'>
                    Kid
                </div>
                <div style={{backgroundColor: 'grey'}} className='button'>
                    Senior
                </div> */}
            </div>
            )
        }
        if(this.state.showButtons === false){
            return(
                <div onClick={this.showTickets}>
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