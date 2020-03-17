import React from 'react';
import {  Row, Col } from 'react-bootstrap';


export default class Popcorn extends React.Component{

    state = {
        showButtons: false
    }

    buttonReveal = () => {
        this.setState({
            showButtons: !this.state.showButtons
        })
    }

    renderImage = () => {
    
      if(this.state.showButtons === true){
          return(
             <Row>
                <Col>
                    {/* <h2> Popcorn </h2> */}
                    <img src='https://i.pinimg.com/originals/7d/04/1c/7d041c7af4c707962900e6ab49608932.png' alt='popcorn' height='100px' width='110px' onClick={this.buttonReveal}/>
                </Col>
                <Col>
                    <button onClick={() => this.props.addingSmall()}> Small: $4  </button>
                    <button onClick={ () =>  this.props.addingMedium()}> Medium: $6  </button>
                    <button onClick={ () => this.props.addingLarge()}> Large: $8  </button>
                </Col>
             </Row>
             
          )
      }

      if(this.state.showButtons === false) {return(
            <Row>
                <Col>
                    {/* <h2> Popcorn </h2> */}
                    <img src='https://i.pinimg.com/originals/7d/04/1c/7d041c7af4c707962900e6ab49608932.png' alt='popcorn' height='100px' width='110px' onClick={this.buttonReveal}/>
                </Col>
            </Row>
        )}
    }

    render(){
        return(
           <div>
               {this.renderImage()}
           </div>
        )
    }

};