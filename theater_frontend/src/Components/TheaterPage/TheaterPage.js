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
        total_price: 0
        
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

    addingAdultTicket = () => {
        const adult_price = this.state.ticket_price.adult
        const total = this.state.total_price

        this.setState({
            total_price: adult_price + total
        })
    }

    addingKidTicket = () => {
        const kid_price = this.state.ticket_price.kid
        const total = this.state.total_price

        this.setState({
            total_price: kid_price + total
        })
    }

    addingSeniorTicket=()=>{
        const senior_price = this.state.ticket_price.senior
        const total = this.state.total_price

        this.setState({
            total_price: senior_price + total
        })
    }

    // addingPopcorn = () => {
    //     const small = this.state.food_price.popcorn.small
    //     const medium = this.state.food_price.popcorn.medium
    //     const large = this.state.food_price.popcorn.large
    //     const total = this.state.total_price

    // }
    addingPopcornSmall = () => {
        const small = this.state.food_price.popcorn.small
        const total = this.state.total_price
        this.setState({
            total_price: small + total
        })
    }

    addingPopcornMedium = () => {
        const medium = this.state.food_price.popcorn.medium
        const total = this.state.total_price
        this.setState({
            total_price: medium + total
        })
    }

    addingPopcornLarge = () => {
        const large = this.state.food_price.popcorn.large
        const total = this.state.total_price
        this.setState({
            total_price: large + total
        })
    }
       
    

    
    render(){
        return(
            <div style={{backgroundColor: 'red'}}>
               <h1 style={{textAlign: 'center'}}> Izzy's 'Deluxe' Theater </h1>

           

               <MovieList 
               movies={this.state.movies} 
            //    ticket_price={this.state.ticket_price}
               addingAdult={this.addingAdultTicket}
               addingKid={this.addingKidTicket}
               addingSenior={this.addingSeniorTicket}

               />
               <Menu 
                // food_price={this.state.food_price}
                addingSmall={this.state.addingPopcornSmall}
                addingMedium={this.state.addingPopcornMedium}
                adddingLarge={this.state.addingPopcornLarge}
               />

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