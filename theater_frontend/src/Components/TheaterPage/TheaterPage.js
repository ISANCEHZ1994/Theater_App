import React from 'react';
import MovieList from '../MovieList/MovieList';

// const TICKET_PRICE = {
    
// }

export default class TheaterPage extends React.Component{

    

    state={
        movies: [],
        ticket_price: {
            adult: 10,
            kid: 5,
            senior: 2
        },
        food_price: {
            popcorn: 8,
            drink: 8,
            candy: 5,
            nachos: 6,
            hotdog: 7
        },
        total_price: 0,
        
    }

    componentDidMount(){
        fetch('http://localhost:3000/movies')
        .then( resp => resp.json() )
        .then( dataMovies => 
            this.setState({
                movies: dataMovies
            }) 
     ) 
    }
    
    render(){
        return(
            <div>
               <h1 style={{textAlign: 'center'}}> Izzy's 'Deluxe' Theater </h1>
               <br></br>
               <br></br>
                
               <MovieList movies={this.state.movies}/>
            </div>
        );
    };
};
