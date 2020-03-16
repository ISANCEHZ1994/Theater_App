import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class Softdrink extends React.Component{

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
                    {/* <h2> Soft Drink </h2> */}
                    <img src='https://cdn2.iconfinder.com/data/icons/food-and-drink-55/50/soda-10-512.png' alt='soft_drink' height='100px' width='110px' onClick={this.buttonReveal}/>
                </Col>
                <Col>
                    <button> Small: $4  </button>
                    <button> Medium: $6  </button>
                    <button> Large: $8  </button>
                </Col>
             </Row>
             
          )
      }

      if(this.state.showButtons === false) {return(
            <Row>
                <Col>
                    {/* <h2> Soft Drink </h2> */}
                    <img src='https://cdn2.iconfinder.com/data/icons/food-and-drink-55/50/soda-10-512.png' alt='soft_drink' height='100px' width='110px' onClick={this.buttonReveal}/>
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
