import React from 'react';
import Movie from '../Movie/Movie';

export default class MovieList extends React.Component{


    render(){


        return(
            <div>
               <h1>We Got Some of The Best Hits</h1>
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
