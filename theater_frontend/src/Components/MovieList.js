import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component{


    render(){


        return(
            <div>
                Here is the movie list!
                <div>
                    {this.props.movies.map( movie => 
                        <Movie 
                        key={movie.id}
                        title={movie.title}
                        description={movie.description}
                        mpaa={movie.mpaa}
                        poster={movie.poster}
                        released={movie.released}
                        trailer={movie.trailer}
                        category={movie.category}
                        />)}
                </div>
            </div>
        )
    }
};
