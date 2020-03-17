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

    //POPCORN METHODS
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
    
    //SOFT DRINK METHODS
    addingSoftdrinkSmall = () => {
        const small = this.state.food_price.drink.small
        const total = this.state.total_price
        this.setState({
            total_price: small + total
        })
    }

    addingSoftdrinkMedium = () => {
        const medium = this.state.food_price.drink.medium
        const total = this.state.total_price 
        this.setState({
            total_price: medium + total
        })
    }

    addingSoftdrinkLarge = () => {
        const large = this.state.food_price.drink.large
        const total = this.state.total_price
        this.setState({
            total_price: large + total
        })
    }

    //CANDY METHODS
    addingSnickers = () => {
        const snickers = this.state.food_price.candy.snickers
        const total = this.state.total_price
        this.setState({
            total_price: snickers + total
        })
    }
    
    addingMnMs = () => {
        const mm = this.state.food_price.candy.mnms
        const total = this.state.total_price
        this.setState({
            total_price: mm + total
        })
    }

    addingReeses = () => {
        const reeses = this.state.food_price.candy.reeses
        const total = this.state.total_price
        this.setState({
            total_price: reeses + total
        })
    }
    //NACHO METHODS
    addingRegularNachos = () => {
        const regular = this.state.food_price.nachos.regular
        const total = this.state.total_price
        this.setState({
            total_price: regular + total
        })
    }

    addingExtraNachos = () => {
        const extra = this.state.food_price.nachos.extra
        const total = this.state.total_price
        this.setState({
            total_price: extra + total
        })
    }

    addingDeluxeNachos = () => {
        const deluxe = this.state.food_price.nachos.deluxe
        const total = this.state.total_price
        this.setState({
            total_price: deluxe + total
        })
    }

    //HOTDOG METHODS
    addingRegularHotdog = () => {
        const regular = this.state.food_price.hotdog.regular
        const total = this.state.total_price
        this.setState({
            total_price: regular + total
        }) 
    }

    addingExtraHotdog = () => {
        const extra = this.state.food_price.hotdog.extra
        const total = this.state.total_price
        this.setState({
            total_price: extra + total
        })
    }

    addingDeluxeHotdog = () => {
        const deluxe = this.state.food_price.hotdog.deluxe
        const total = this.state.total_price
        this.setState({
            total_price: deluxe + total
        })
    }
    
    render(){
        return(
            <div style={{backgroundColor: 'red'}}>
               <h1 style={{textAlign: 'center'}}> Izzy's 'Deluxe' Theater </h1>

           

               <MovieList 
               movies={this.state.movies} 
               addingAdult={this.addingAdultTicket}
               addingKid={this.addingKidTicket}
               addingSenior={this.addingSeniorTicket}

               />
               <Menu 
                passingSmallPopcorn={this.addingPopcornSmall}
                passingMediumPopcorn={this.addingPopcornMedium}
                passingLargePopcorn={this.addingPopcornLarge}

                passingSmallDrink={this.addingSoftdrinkSmall}
                passingMediumDrink={this.addingSoftdrinkMedium}
                passingLargeDrink={this.addingSoftdrinkLarge}

                passingSnickers={this.addingSnickers}
                passingMM={this.addingMnMs}
                passingReeses={this.addingReeses}

                passingNachosRegular={this.addingRegularNachos}
                passingNachosExtra={this.addingExtraNachos}
                passingNachosDeluxe={this.addingDeluxeNachos}

                passingHotdogRegular={this.addingRegularHotdog}
                passingHotdogExtra={this.addingExtraHotdog}
                passingHotdogDeluxe={this.addingDeluxeHotdog}
               />

                <br></br>
        <h1>  YOUR TOTAL IS: $ {this.state.total_price} </h1>
               
            </div>
        );
    };
};
