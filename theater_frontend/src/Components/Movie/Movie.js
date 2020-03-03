import React from 'react';


export default class Movie extends React.Component{
    render(){
        return(
            <div> 

                <div>
                   the actual movie 
                </div>
                <button> Adult </button>
                <button> Kid </button>
                <button> Senior </button>
            </div>
        )
    }
};