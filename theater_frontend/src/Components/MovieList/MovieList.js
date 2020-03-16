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
        if(this.state.showList === true)return(
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
                        ticket_price={this.props.ticket_price}
                        
                        />
                        </Col>
                        )}
                     </Row>
             </Container>
        )
    }

    render(){


        return(
            <div style={{background: 'green'}}>
               <h1 style={{textAlign: 'center'}} onClick={this.displayingList}> Check Out These Hot Movies! </h1>
               {this.renderMovieList()}
               
              
                <br></br>
            </div>
        )
    }
};
