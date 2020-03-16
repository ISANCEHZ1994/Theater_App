import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class Candy extends React.Component{

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
                    {/* <h2> Candy </h2> */}
                    <img src='https://cdn3.iconfinder.com/data/icons/bazza-christmas-and-new-year/60/candy-512.png' alt='candy' height='100px' width='110px' onClick={this.buttonReveal}/>
                </Col>
                <Col>
                    <button> Snickers: $5  </button>
                    <button> MnMs: $5  </button>
                    <button> Reeses: $5  </button>
                </Col>
             </Row>
             
          )
      }

      if(this.state.showButtons === false) {return(
            <Row>
                <Col>
                    {/* <h2> Candy </h2> */}
                    <img src='https://cdn3.iconfinder.com/data/icons/bazza-christmas-and-new-year/60/candy-512.png' alt='candy' height='100px' width='110px' onClick={this.buttonReveal}/>
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
