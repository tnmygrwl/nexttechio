import React from 'react';
import Links from './Links'
import Fade from 'react-reveal/Fade'; // Importing Zoom effect

import './styles/team.scss'
import './styles/nextech-background.jpg'

export default class Team extends React.Component {

render(){

    return(<div className='team'>

         <Links dark={true}/> 
         
         <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"/>
            <br></br>
            <br></br>
            <span className='til'></span>

            <Fade>
            
            <h1 className='center'> Founders </h1>
            
            <div className='container_team'>
                <div className='container_child'>
                    <div><img src="https://media.licdn.com/dms/image/C5603AQHlzFi2PwO8yg/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=sKgE2WvvkAJ6aGLACJkA3alBGmCmdHcCSowRpma1t7A" alt=""/>Raghav Gupta</div>
                    <div><img src="https://media.licdn.com/dms/image/C5103AQFFrqEz0IgO0w/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=Se4f8iYljpz5TnWxZD7WOiDTrDbMJ4hidfUAkV-cO5s" alt=""/>Anshuman Pandey</div>
                    <div><img src="https://media.licdn.com/dms/image/C5103AQHdI7ruoLoaiQ/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=1_jMSaa2HlKoVkz1klpuim1myVdYQzQXlCpFhw_-d_c" alt=""/>Rohan Pooniwala</div>
                    <div><img src="https://media.licdn.com/dms/image/C5103AQGVzUNalRoM7A/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=4CymUybu-InmwzbozcGS25b-R58kOXu6Y6C6OiNuSU4" alt=""/>Rohit Saha</div>
                    <div><img src="https://media.licdn.com/dms/image/C5603AQHDS9UIVGrfwA/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=7FFm870-wNkRR3zCPRv_dhBkGALqhtUSG9GbOXkiUDo" alt=""/>Fenil Doshi</div>
                    <div><img src="https://media.licdn.com/dms/image/C5103AQHrZ_amylbKLA/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=uH_n6mrvf2nKg0XZEnb4owkGpBhSYICMRTG70vulyzI" alt=""/>Aditthya Ramakrishnan</div>
                </div>
            </div>
            </Fade>
    </div>)
}

}