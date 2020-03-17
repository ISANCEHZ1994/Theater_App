import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class Hotdog extends React.Component{

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
                    {/* <h2> Hotdog </h2> */}
                    <img src='https://cdn3.iconfinder.com/data/icons/barbecue-icons-1/485/Hot_Dog-512.png' alt='hot_dog' height='100px' width='110px' onClick={this.buttonReveal}/>
                </Col>
                <Col>
                    <button onClick={() => this.props.addingRegularHotdogs()}> Regular: $5  </button>
                    <button onClick={() => this.props.addingExtraHotdogs()}> Extra: $6  </button>
                    <button onClick={() => this.props.addingDeluxeHotdogs()}> Deluxe: $7.50  </button>
                </Col>
             </Row>
             
          )
      }

      if(this.state.showButtons === false) {return(
            <Row>
                <Col>
                    {/* <h2> Hotdog </h2> */}
                    <img src='https://cdn3.iconfinder.com/data/icons/barbecue-icons-1/485/Hot_Dog-512.png' alt='hot_dog' height='100px' width='110px' onClick={this.buttonReveal}/>
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

