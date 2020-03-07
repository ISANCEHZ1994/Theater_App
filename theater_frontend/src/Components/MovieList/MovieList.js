import React from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css'
import { Container, Row, Col } from 'react-bootstrap';

export default class MovieList extends React.Component{


    render(){


        return(
            <div style={{background: 'green'}}>
               <h1 style={{textAlign: 'center'}}>We Got Some of The Best Hits !</h1>
               <Container>
                    <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
                        {this.props.movies.map( movie => 
                        //  <Row>
                        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Movie 
                        key={movie.id}
                        title={movie.title}
                        description={movie.description}
                        mpaa={movie.mpaa}
                        poster={movie.poster}
                        released={movie.released}
                        trailer={movie.trailer}
                        category={movie.category}
                        />
                        </Col>
                        // </Row>
                        )}
                     </Row>
                </Container>
                this is the bottom of the MovieList
            </div>
        )
    }
};
