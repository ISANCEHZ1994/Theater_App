import React from 'react';


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
                here we got a menu with all the movies avalable {console.log(this.state.movies)}
            </div>
        );
    };
};
