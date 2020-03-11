import React from 'react';
import {  Row, Col } from 'react-bootstrap';


export default class Popcorn extends React.Component{

    state = {

    }

    render(){
        return(
            <Row>
                <Col>
                    <img src='https://i.pinimg.com/originals/7d/04/1c/7d041c7af4c707962900e6ab49608932.png' alt='popcorn' height='100px' width='110px' />
                </Col>
            </Row>
        )
    }

};