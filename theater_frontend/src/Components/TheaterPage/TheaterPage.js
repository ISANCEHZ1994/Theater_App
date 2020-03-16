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
            candy: {
                snickers: 5,
                mnms: 5,
                reeses: 5
            },
            nachos: {
                regular: 5,
                extra: 6,
                deluxe: 7.5
            },
            hotdog: {
                regular: 5,
                extra: 6,
                deluxe: 7.5
            }
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
            <div style={{backgroundColor: 'red'}}>
               <h1 style={{textAlign: 'center'}}> Izzy's 'Deluxe' Theater </h1>

           

               <MovieList movies={this.state.movies} ticket_price={this.state.ticket_price}/>
               <Menu food_price={this.state.food_price}/>

                <br></br>
        <h1>  YOUR TOTAL IS: $ {this.state.total_price} </h1>
               
            </div>
        );
    };
};

 // displayingAboutPage = () => {
    //     this.setState({
    //         showAbout: !this.state.showAbout
    //     })
    // }

    // renderAboutPage = () => {
    //     return(
    //         <div>
    //             something about why I made the theater here
    //         </div>
    //     )
    // }