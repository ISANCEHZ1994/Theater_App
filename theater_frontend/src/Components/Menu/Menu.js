import React from 'react';
import Popcorn from '../Menu/MenuContents/Popcorn';
import SoftDrink from '../Menu/MenuContents/SoftDrink';
import Nachos from '../Menu/MenuContents/Nachos';
import Candy from '../Menu/MenuContents/Candy';
import Hotdog from '../Menu/MenuContents/Hotdog';
import './Menu.css'
import { Container } from 'react-bootstrap';


export default class Menu extends React.Component{

    state = {
        buttonsShow: false,
        displayMenu: false,
    }

    // sizeOptions = (opt) => {
    //     console.log('i was clickedd', opt)
    //     this.setState({
    //         buttonsShow: !this.state.buttonsShow
    //     })
    // }

    showMenu = () => {
        this.setState({
            displayMenu: !this.state.displayMenu
        })
    }

    renderMenu = () => {
       if(this.state.displayMenu === true)
           return(
            <Container>

                <Popcorn 
                // food_price={this.props.food_price}
                addingSmall={this.props.passingSmallPopcorn}
                addingMedium={this.props.passingMediumPopcorn}
                addingLarge={this.props.passingLargePopcorn}
                />
                <SoftDrink
                addingSmallDrink={this.props.passingSmallDrink}
                addingMediumDrink={this.props.passingMediumDrink}
                addingLargeDrink={this.props.passingLargeDrink}
                />
                <Candy
                addingSnickers={this.props.passingSnickers}
                addingMM={this.props.passingMM}
                addingReeses={this.props.passingReeses}
                />
                <Nachos
                addingRegularNachos={this.props.passingNachosRegular}
                addingExtraNachos={this.props.passingNachosExtra}
                addingDeluxeNachos={this.props.passingNachosDeluxe}
                />
                <Hotdog
                addingRegularHotdogs={this.props.passingHotdogRegular}
                addingExtraHotdogs={this.props.passingHotdogExtra}
                addingDeluxeHotdogs={this.props.passingHotdogDeluxe}
                />
            
            </Container>       
    
            )
    };


    render(){


        return(
            <div style={{backgroundColor: 'yellow'}}>
                     <h1 style={{textAlign: 'center'}} onClick={this.showMenu} > Would You Like Some Snacks? </h1>
                    
                     {this.renderMenu()}
                     <br></br>
            </div>
           
        )
    }
};


 // renderFoodOptions = () => {
    //     if(this.state.buttonsShow === true){
    //         return(
              
    //                  <Container>
    //                         <Row>
    //                             <Col>
    //                                 <img src='https://i.pinimg.com/originals/7d/04/1c/7d041c7af4c707962900e6ab49608932.png' alt='popcorn' height='100px' width='110px'/>
    //                             </Col>
    //                             <Col>
    //                                 here we want buttons
    //                             </Col>
    //                         </Row>
    //                         <Row>
    //                             <Col>
    //                                 <img src='https://cdn2.iconfinder.com/data/icons/food-and-drink-55/50/soda-10-512.png' alt='soft_drink' height='100px' width='110px'/>
    //                             </Col>
    //                             <Col>
    //                                 here we want buttons
    //                             </Col>
    //                         </Row>
    //                         <Row>
    //                             <Col>
    //                                 <img src='https://cdn3.iconfinder.com/data/icons/bazza-christmas-and-new-year/60/candy-512.png' alt='candy' height='100px' width='110px'/>
    //                             </Col>
    //                             <Col>
    //                                 here we want buttons
    //                             </Col>
    //                         </Row>
    //                         <Row>
    //                             <Col>
    //                             <img src='https://i.pinimg.com/originals/25/8c/e3/258ce331776f0fce6563c24d7c269e8d.png' alt='nachos' height='100px' width='110px'/>
    //                             </Col>
    //                             <Col>
    //                                 here we want buttons
    //                             </Col>
    //                         </Row>
    //                         <Row>
    //                             <Col>
    //                             <img src='https://cdn3.iconfinder.com/data/icons/barbecue-icons-1/485/Hot_Dog-512.png' alt='hot_dog' height='100px' width='110px'/>
    //                             </Col>
    //                             <Col>
    //                                 here we want buttons
    //                             </Col>
    //                         </Row>
    //                     </Container>
             
    //         )
    //     } 
    // }
