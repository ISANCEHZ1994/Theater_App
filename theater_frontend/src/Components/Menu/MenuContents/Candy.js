import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class Candy extends React.Component{

    state = {

    }

    render(){
        return(
            <Row>
                <Col>
                    <img src='https://cdn3.iconfinder.com/data/icons/bazza-christmas-and-new-year/60/candy-512.png' alt='candy' height='100px' width='110px' />
                </Col>
            </Row>
        )
    }

};