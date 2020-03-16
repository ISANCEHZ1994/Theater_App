import React from 'react';
import './TicketButtons.css';

export default class TicketButtons extends React.Component{


    typeOfTicket = () => {
        console.log(this.props)
    }

    render(){
        


        return(
            <div className='buttonContainer'>
                    <div style={{backgroundColor: 'purple'}} className='button' onClick={() => console.log(this.props.ticket_price.adult)}>
                        Adult
                    </div>
                    <div style={{backgroundColor: 'orange'}} className='button' onClick={() => console.log(this.props.ticket_price.kid)}>
                        Kid
                    </div>
                    <div style={{backgroundColor: 'grey'}} className='button' onClick={() => console.log(this.props.ticket_price.senior)}>
                        Senior
                    </div>
            </div>
        )
    }

};

// export default function TicketButtons(props){
//     return(
//         <div className='buttonContainer'>
//                     <div style={{backgroundColor: 'purple'}} className='button' onClick={this.typeOfTicket}>
//                         Adult
//                     </div>
//                     <div style={{backgroundColor: 'orange'}} className='button' onClick={this.typeOfTicket}>
//                         Kid
//                     </div>
//                     <div style={{backgroundColor: 'grey'}} className='button' onClick={this.typeOfTicket}>
//                         Senior
//                     </div>
//             </div>
//     )
// };