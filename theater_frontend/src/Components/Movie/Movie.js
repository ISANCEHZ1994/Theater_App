import React from 'react';
import './Movie.css'


export default class Movie extends React.Component{
    render(){
        return(
        <div style={{backgroundColor: 'blue', textAlign: 'center'}} className='movieCard' > 
                <h2>{this.props.title}</h2>
                <img src={this.props.poster} alt='movie poster here' width='300px'/>

                <div style={{backgroundColor: 'white'}}>
                   {this.props.description}
                </div>
                
                <div className='buttonContainer'>
                    <div style={{backgroundColor: 'purple'}} className='button'>
                        Adult
                    </div>
                    <div style={{backgroundColor: 'orange'}} className='button'>
                        Kid
                    </div>
                    <div style={{backgroundColor: 'grey'}} className='button'>
                        Senior
                    </div>
                </div>

                {/* <button> Adult </button> 
                <button> Kid </button>
                <button> Senior </button> */}
            
        </div>
        )
    }
};