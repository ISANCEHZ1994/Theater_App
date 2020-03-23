import React from 'react';
import MovieList from '../MovieList/MovieList';
import Menu from '../Menu/Menu';
import Summary from '../Summary/Summary';


export default class TheaterPage extends React.Component{


    state={
            movies: [],
            adultPrice: 10,
            adultCounter: 0,
            kidPrice: 5,
            kidCounter: 0,
            seniorPrice: 2,
            seniorCounter: 0,
            smallPopcornPrice: 4,
            smallPopcornCounter: 0,
            mediumPopcornPrice: 6,
            mediumPopcornCounter: 0,
            largePopcornPrice: 8,
            largePopcornCounter: 0,
            smallDrinkPrice: 4,
            smallDrinkCounter: 0,
            mediumDrinkPrice: 6,
            mediumDrinkCounter: 0,
            largeDrinkPrice: 8,
            largeDrinkCounter: 0,
            snickersPrice: 5,
            snickersCounter: 0,
            mnmsPrice: 5,
            mnmsCounter: 0,
            reesesPrice: 5,
            reesesCounter: 0,
            regularNachoPrice: 5,
            regularNachoCounter: 0,
            extraNachoPrice: 6,
            extraNachoCounter: 0,
            deluxeNachoPrice: 7.5,
            deluxeNachoCounter: 0,
            regularHotdogPrice: 5,
            regularHotdogCounter: 0,
            extraHotdogPrice: 6,
            extraHotdogCounter: 0,
            deluxeHotdogPrice: 7.5,
            deluxeHotdogCounter: 0,
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

    //TICKET METHODS
    addingAdultTicket = () => {
        const adult_price = this.state.adultPrice
        const total = this.state.total_price
        const counter = this.state.adultCounter

        this.setState({
            adultCounter: counter + 1,
            total_price: adult_price + total
        })
    }
    addingKidTicket = () => {
        const kid_price = this.state.kidPrice
        const total = this.state.total_price
        const counter = this.state.kidCounter

        this.setState({
            kidCounter: counter + 1,
            total_price: kid_price + total
        })
    }
    addingSeniorTicket=()=>{
        const senior_price = this.state.seniorPrice
        const total = this.state.total_price
        const counter = this.state.seniorCounter

        this.setState({
            seniorCounter: counter + 1,
            total_price: senior_price + total
        })
    }

    //POPCORN METHODS <------------------------------------------
    addingPopcornSmall = () => {
        const small = this.state.smallPopcornPrice
        const total = this.state.total_price
        const counter = this.state.smallPopcornCounter
        this.setState({
            smallPopcornCounter: counter + 1,
            total_price: small + total
        })
    }
    addingPopcornMedium = () => {
        const medium = this.state.mediumPopcornPrice
        const total = this.state.total_price
        const counter = this.state.mediumPopcornCounter
        this.setState({
            mediumPopcornCounter: counter + 1,
            total_price: medium + total
        })
    }
    addingPopcornLarge = () => {
        const large = this.state.largePopcornPrice
        const total = this.state.total_price
        const counter = this.state.largePopcornCounter
        this.setState({
            largePopcornCounter: counter + 1,
            total_price: large + total
        })
    }
    //SOFT DRINK METHODS  <------------------------------------------
    addingSoftdrinkSmall = () => {
        const small = this.state.smallDrinkPrice
        const total = this.state.total_price
        const counter = this.state.smallDrinkCounter
        this.setState({
            smallDrinkCounter: counter + 1 ,
            total_price: small + total
        })
    }
    addingSoftdrinkMedium = () => {
        const medium = this.state.mediumDrinkPrice
        const total = this.state.total_price 
        const counter = this.state.mediumDrinkCounter
        this.setState({
            mediumDrinkCounter: counter + 1,
            total_price: medium + total
        })
    }
    addingSoftdrinkLarge = () => {
        const large = this.state.largeDrinkPrice
        const total = this.state.total_price
        const counter = this.state.largeDrinkCounter
        this.setState({
            largeDrinkCounter: counter +1,
            total_price: large + total
        })
    }
    //CANDY METHODS  <------------------------------------------
    addingSnickers = () => {
        const snickers = this.state.snickersPrice
        const total = this.state.total_price
        const counter = this.state.snickersCounter
        this.setState({
            snickersCounter: counter + 1,
            total_price: snickers + total
        })
    }
    addingMnMs = () => {
        const mm = this.state.mnmsPrice
        const total = this.state.total_price
        const counter = this.state.mnmsCounter
        this.setState({
            mnmsCounter: counter +1,
            total_price: mm + total
        })
    }
    addingReeses = () => {
        const reeses = this.state.reesesPrice
        const total = this.state.total_price
        const counter = this.state.reesesCounter
        this.setState({
            reesesCounter: counter +1,
            total_price: reeses + total
        })
    }
    //NACHO METHODS  <------------------------------------------
    addingRegularNachos = () => {
        const regular = this.state.regularNachoPrice
        const total = this.state.total_price
        const counter = this.state.regularNachoCounter
        this.setState({
            regularNachoCounter: counter + 1,
            total_price: regular + total
        })
    }
    addingExtraNachos = () => {
        const extra = this.state.extraNachoPrice
        const total = this.state.total_price
        const counter = this.state.extraNachoCounter
        this.setState({
            extraNachoCounter: counter + 1,
            total_price: extra + total
        })
    }
    addingDeluxeNachos = () => {
        const deluxe = this.state.deluxeNachoPrice
        const total = this.state.total_price
        const counter = this.state.deluxeNachoCounter
        this.setState({
            deluxeNachoCounter: counter + 1,
            total_price: deluxe + total
        })
    }
    //HOTDOG METHODS  <------------------------------------------
    addingRegularHotdog = () => {
        const regular = this.state.regularHotdogPrice
        const total = this.state.total_price
        const counter = this.state.regularHotdogCounter
        this.setState({
            regularHotdogCounter: counter + 1,
            total_price: regular + total
        }) 
    }
    addingExtraHotdog = () => {
        const extra = this.state.extraHotdogPrice
        const total = this.state.total_price
        const counter = this.state.extraHotdogCounter
        this.setState({
            extraHotdogCounter: counter + 1,
            total_price: extra + total
        })
    }
    addingDeluxeHotdog = () => {
        const deluxe = this.state.deluxeHotdogPrice
        const total = this.state.total_price
        const counter = this.state.deluxeHotdogCounter
        this.setState({
            deluxeHotdogCounter: counter + 1,
            total_price: deluxe + total
        })
    }
    
    render(){

        function MyFunction(){
            var tempDate = new Date();
            var hours = tempDate.getHours();
            var AmOrPm = hours >= 12 ? 'pm' : 'am';
            hours = (hours % 12) || 12;

            var date =  (tempDate.getMonth()+1) + '/' +  tempDate.getDate() + '/' + tempDate.getFullYear() +' '+ hours+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
            const currDate = "Date: "+ date + AmOrPm;
            return (
              <h2 style={{textAlign: 'center'}}>{currDate}</h2>
            );
          };


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

            {MyFunction()}

                <Summary
                adultCounter={this.state.adultCounter}
                kidCounter={this.state.kidCounter}
                seniorCounter={this.state.seniorCounter}

                passingSmallPopcornCounter={this.state.smallPopcornCounter}
                passingMediumPopcornCounter={this.state.mediumPopcornCounter}
                passingLargePopcornCounter={this.state.largePopcornCounter}

                passingSmallDrinkCounter={this.state.smallDrinkCounter}
                passingMediumDrinkCounter={this.state.mediumDrinkCounter}
                passingLargeDrinkCounter={this.state.largeDrinkCounter}

                passingSnickersCounter={this.state.snickersCounter}
                passingMnmsCounter={this.state.mnmsCounter}
                passingReesesCounter={this.state.reesesCounter}

                passingRegularNachoCounter={this.state.regularNachoCounter}
                passingExtraNachoCounter={this.state.extraNachoCounter}
                passingDeluxeNachoCounter={this.state.deluxeNachoCounter}

                passingRegularHotdogCounter={this.state.regularHotdogCounter}
                passingExtraHotdogCounter={this.state.extraHotdogCounter}
                passingDeluxeHotdogCounter={this.state.deluxeHotdogCounter}
                />
            
        <h1>  YOUR TOTAL IS: $ {this.state.total_price} </h1>
               
            </div>
        );
    };
};
