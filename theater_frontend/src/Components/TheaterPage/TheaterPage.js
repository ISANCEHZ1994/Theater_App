import React from 'react';
import MovieList from '../MovieList/MovieList';
import Menu from '../Menu/Menu';


export default class TheaterPage extends React.Component{


    state={
        // showAbout: false,
        movies: [],
        ticket_price: {
            adult: 10,
            kid: 5,
            senior: 2
        },
        food_price: {
            popcorn: {
                small: 4,
                medium: 6,
                large: 8
            },
            drink: {
                small: 4,
                medium: 6,
                large: 8
            },
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

    // displayingAboutPage = () => {
    //     this.setState({
    //         showAbout: !this.state.showAbout
    //     })
    // }

    renderAboutPage = () => {
        return(
            <div>
                something about why I made the theater here
            </div>
        )
    }
    
    render(){
        return(
            <div style={{backgroundColor: 'red'}}>
               <h1 style={{textAlign: 'center'}}> Izzy's 'Deluxe' Theater </h1>

           
               {this.renderAboutPage()}
             

               <MovieList movies={this.state.movies}/>
               <Menu/>
                <br></br>
               <h1>  YOUR TOTAL IS: $ </h1>
               
            </div>
        );
    };
};
