import React from 'react';
import './Menu.css'

export default class Menu extends React.Component{
    render(){
        return(
            <div style={{backgroundColor: 'yellow'}}>
                <h1 style={{textAlign: 'center'}}> Would You Like Some Snacks? </h1>

                <div className='menuItems' style={{backgroundColor: 'pink'}}>
                   <div className='popcorn'> </div>
                    something here?
                </div>
                bottom of the Menu
            </div>
        )
    }
};
