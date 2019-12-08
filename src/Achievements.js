

import React from 'react';

import Links from './Links'

export default class Achievement extends React.Component
{


    render(){
        return(
            
            <div className='achievement'>
            <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"/>

                <Links dark={true}/> 
            
                <br></br>
                <br></br>
                <h1 className='center'>Achievements</h1>
            </div>
        )
    }
}