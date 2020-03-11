import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class Softdrink extends React.Component{

    state = {

    }

    render(){
        return(
            <Row>
                <Col>
                    <img src='https://cdn2.iconfinder.com/data/icons/food-and-drink-55/50/soda-10-512.png' alt='soft_drink' height='100px' width='110px' />
                </Col>
            </Row>
        )
    }

};