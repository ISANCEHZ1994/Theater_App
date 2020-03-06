import React from 'react';
import './Movie.css'


export default class Movie extends React.Component{
    render(){
        return(
        <div style={{backgroundColor: 'blue', textAlign: 'center'}} > 
                <h2>{this.props.title}</h2>
                <img src={this.props.poster} alt='movie poster here' width='300px'/>

                <div style={{backgroundColor: ''}}>
                   {this.props.description}
                </div>
                
                <div style={{backgroundColor: 'purple'}}>
                    Adult
                </div>
                <button> Adult </button> 
                <button> Kid </button>
                <button> Senior </button>
                <div>
                bottom of the Movie
                </div>
                
        </div>
        )
    }
};