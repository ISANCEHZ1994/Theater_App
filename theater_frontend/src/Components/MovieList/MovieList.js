import React from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css'
import { Container, Row, Col } from 'react-bootstrap';

export default class MovieList extends React.Component{

    state={
        showList: false
    }

    displayingList = () => {
        this.setState({
            showList: !this.state.showList
        })
    }

    renderMovieList = () => { 

    }

    render(){


        return(
            <div style={{background: 'green'}}>
               <h1 style={{textAlign: 'center'}}> LOOK WHAT WE GOT!</h1>
               <Container>
                    <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
                        {this.props.movies.map( movie => 
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
                        )}
                     </Row>
                </Container>
                <br></br>
            </div>
        )
    }
};
