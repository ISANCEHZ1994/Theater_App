import React from 'react';
import './TicketButtons.css';

export default class TicketButtons extends React.Component{



    render(){
        


        return(
            <div className='buttonContainer'>
                    <div style={{backgroundColor: 'purple'}} className='button' onClick={() => this.props.addingAdult()}>
                        Adult: $10
                    </div>
                    <div style={{backgroundColor: 'orange'}} className='button' onClick={() => this.props.addingKid()}>
                        Kid: $5
                    </div>
                    <div style={{backgroundColor: 'grey'}} className='button' onClick={() => this.props.addingSenior()}>
                        Senior: $2
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