import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class Hotdog extends React.Component{

    state = {

    }

    render(){
        return(
            <Row>
                <Col>
                    <img src='https://cdn3.iconfinder.com/data/icons/barbecue-icons-1/485/Hot_Dog-512.png' alt='hot_dog' height='100px' width='110px' />
                </Col>
             </Row>
        )
    }

};