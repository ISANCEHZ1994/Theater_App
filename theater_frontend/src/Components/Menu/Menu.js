import React from 'react';
import './Menu.css'
import { Container, Row, Col } from 'react-bootstrap';


export default class Menu extends React.Component{
    render(){
        return(
            <div style={{backgroundColor: 'yellow'}}>
                <h1 style={{textAlign: 'center'}}> Would You Like Some Snacks? </h1>

                <Container>
                    <Row>
                        <Col>
                            <img src='https://i.pinimg.com/originals/7d/04/1c/7d041c7af4c707962900e6ab49608932.png' alt='popcorn' height='100px' width='110px'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src='https://cdn2.iconfinder.com/data/icons/food-and-drink-55/50/soda-10-512.png' alt='soft_drink' height='100px' width='110px'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src='https://cdn3.iconfinder.com/data/icons/bazza-christmas-and-new-year/60/candy-512.png' alt='candy' height='100px' width='110px'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src='https://i.pinimg.com/originals/25/8c/e3/258ce331776f0fce6563c24d7c269e8d.png' alt='nachos' height='100px' width='110px'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <img src='https://cdn3.iconfinder.com/data/icons/barbecue-icons-1/485/Hot_Dog-512.png' alt='hot_dog' height='100px' width='110px'/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};
