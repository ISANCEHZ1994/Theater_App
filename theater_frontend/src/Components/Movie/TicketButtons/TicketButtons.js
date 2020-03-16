import React from 'react';


export default class TicketButtons extends React.Component{


    render(){
        

        return(
            <div className='buttonContainer'>
                    <div style={{backgroundColor: 'purple'}} className='button'>
                        Adult
                    </div>
                    <div style={{backgroundColor: 'orange'}} className='button'>
                        Kid
                    </div>
                    <div style={{backgroundColor: 'grey'}} className='button'>
                        Senior
                    </div>
            </div>
        )
    }

};