import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class Nachos extends React.Component{

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
                    {/* <h2> Nachos </h2> */}
                    <img src='https://i.pinimg.com/originals/25/8c/e3/258ce331776f0fce6563c24d7c269e8d.png' alt='nachos' height='100px' width='110px' onClick={this.buttonReveal}/>
                </Col>
                <Col>
                    <button> Regular: $5  </button>
                    <button> Extra: $6  </button>
                    <button> Deluxe: $7.50  </button>
                </Col>
             </Row>
             
          )
      }

      if(this.state.showButtons === false) {return(
            <Row>
                <Col>
                    {/* <h2> Nachos </h2> */}
                    <img src='https://i.pinimg.com/originals/25/8c/e3/258ce331776f0fce6563c24d7c269e8d.png' alt='nachos' height='100px' width='110px' onClick={this.buttonReveal}/>
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

