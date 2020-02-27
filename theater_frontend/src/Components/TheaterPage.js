import React from 'react';
import MovieList from './MovieList';

export default class TheaterPage extends React.Component{

    state={
        movies: []
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
